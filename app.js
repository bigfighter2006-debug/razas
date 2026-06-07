// State Management
let currentCategory = 'both';
let totalQuestionsSetting = '10';
let activeBreeds = [];
let questionsQueue = [];
let currentIndex = 0;
let score = 0;
let answersHistory = [];
let hasAnswered = false;

// Audio Context Setup (Web Audio API Synthesizer)
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSound(type) {
    initAudio();
    if (!audioCtx) return;
    
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    const now = audioCtx.currentTime;
    
    if (type === 'correct') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
        
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        
        osc.start(now);
        osc.stop(now + 0.35);
    } else if (type === 'incorrect') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220.00, now); // A3
        osc.frequency.linearRampToValueAtTime(146.83, now + 0.25); // D3
        
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        
        osc.start(now);
        osc.stop(now + 0.25);
    } else if (type === 'victory') {
        // Small arpeggio fanfare
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
            const noteOsc = audioCtx.createOscillator();
            const noteGain = audioCtx.createGain();
            noteOsc.connect(noteGain);
            noteGain.connect(audioCtx.destination);
            
            noteOsc.type = 'sine';
            noteOsc.frequency.setValueAtTime(freq, now + idx * 0.08);
            noteGain.gain.setValueAtTime(0.06, now + idx * 0.08);
            noteGain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);
            
            noteOsc.start(now + idx * 0.08);
            noteOsc.stop(now + idx * 0.08 + 0.3);
        });
    }
}

// DOM Elements
const screenStart = document.getElementById('screen-start');
const screenQuiz = document.getElementById('screen-quiz');
const screenResults = document.getElementById('screen-results');

const btnStart = document.getElementById('btn-start');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const questionCounter = document.getElementById('quiz-question-counter');
const scoreCounter = document.getElementById('quiz-score-counter');
const progressBar = document.getElementById('quiz-progress-bar');
const animalImage = document.getElementById('animal-image');
const optionsContainer = document.getElementById('options-container');

const scorePercent = document.getElementById('score-percent');
const scoreFraction = document.getElementById('score-fraction');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');
const scoreCircleFill = document.getElementById('score-circle-fill');
const reviewList = document.getElementById('review-list');

// Settings controls
const segmentButtons = document.querySelectorAll('.segment-btn');
segmentButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        segmentButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        totalQuestionsSetting = btn.getAttribute('data-value');
    });
});

// Category radio cards setup
const radioCards = document.querySelectorAll('.radio-card input');
radioCards.forEach(input => {
    input.addEventListener('change', (e) => {
        currentCategory = e.target.value;
    });
});

// Helper: Shuffle Array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Helper: Translate Type to Display Label
function formatType(type) {
    return type === 'cat' ? 'Gato' : 'Perro';
}

// Quiz Initialization
function startQuiz() {
    initAudio();
    
    // Filter breeds by category
    if (currentCategory === 'both') {
        activeBreeds = [...breeds];
    } else {
        activeBreeds = breeds.filter(b => b.type === currentCategory);
    }
    
    if (activeBreeds.length === 0) {
        alert("¡Error! No hay razas en la categoría seleccionada.");
        return;
    }
    
    // Shuffle active breeds to get random selection
    const shuffled = shuffle([...activeBreeds]);
    
    // Determine count of questions
    let count = shuffled.length;
    if (totalQuestionsSetting !== 'all') {
        count = Math.min(parseInt(totalQuestionsSetting, 10), shuffled.length);
    }
    
    questionsQueue = shuffled.slice(0, count);
    currentIndex = 0;
    score = 0;
    answersHistory = [];
    
    // UI Transitions
    showScreen(screenQuiz);
    showQuestion();
}

function showScreen(screen) {
    [screenStart, screenQuiz, screenResults].forEach(s => {
        s.classList.remove('active');
    });
    // Small delay to trigger CSS fade transition
    setTimeout(() => {
        screen.classList.add('active');
    }, 50);
}

function showQuestion() {
    hasAnswered = false;
    btnNext.disabled = true;
    
    const currentQuestion = questionsQueue[currentIndex];
    
    // Set counters and progress bar
    questionCounter.textContent = `Pregunta ${currentIndex + 1} de ${questionsQueue.length}`;
    scoreCounter.textContent = `Aciertos: ${score}`;
    
    const progressPercent = ((currentIndex) / questionsQueue.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    // Load image
    animalImage.classList.remove('loaded');
    document.querySelector('.image-loader').style.opacity = '1';
    
    animalImage.src = currentQuestion.image;
    animalImage.onload = () => {
        animalImage.classList.add('loaded');
        document.querySelector('.image-loader').style.opacity = '0';
    };
    
    animalImage.onerror = () => {
        // Fallback or skip
        console.error("Failed to load image for: " + currentQuestion.name);
        document.querySelector('.image-loader').style.opacity = '0';
    };
    
    // Generate Options
    // Correct option
    const options = [currentQuestion.name];
    
    // Distractors from the same category/type if possible to keep it challenging
    const sameTypeBreeds = activeBreeds.filter(b => b.type === currentQuestion.type && b.name !== currentQuestion.name);
    const shuffledDistractors = shuffle([...sameTypeBreeds]);
    
    let distractorCount = 3;
    for (let i = 0; i < shuffledDistractors.length && options.length < 4; i++) {
        const distName = shuffledDistractors[i].name;
        if (!options.includes(distName)) {
            options.push(distName);
        }
    }
    
    // Fallback in case we don't have enough same-type distractors (e.g. category too small)
    if (options.length < 4) {
        const anyOtherBreeds = shuffle(breeds.filter(b => b.name !== currentQuestion.name));
        for (let i = 0; i < anyOtherBreeds.length && options.length < 4; i++) {
            const distName = anyOtherBreeds[i].name;
            if (!options.includes(distName)) {
                options.push(distName);
            }
        }
    }
    
    // Shuffle the final options
    shuffle(options);
    
    // Render options
    optionsContainer.innerHTML = '';
    options.forEach(optionText => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = optionText;
        button.addEventListener('click', () => handleOptionClick(button, optionText, currentQuestion));
        optionsContainer.appendChild(button);
    });
}

function handleOptionClick(selectedBtn, selectedText, currentQuestion) {
    if (hasAnswered) return;
    hasAnswered = true;
    
    const isCorrect = (selectedText === currentQuestion.name);
    
    // Play sound and set score
    if (isCorrect) {
        score++;
        selectedBtn.classList.add('correct');
        playSound('correct');
    } else {
        selectedBtn.classList.add('incorrect');
        playSound('incorrect');
        
        // Highlight the correct one
        const buttons = optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => {
            if (btn.textContent === currentQuestion.name) {
                btn.classList.add('correct');
            }
        });
    }
    
    // Disable all option buttons
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
    });
    
    // Save to history
    answersHistory.push({
        breed: currentQuestion,
        selectedName: selectedText,
        isCorrect: isCorrect
    });
    
    // Update score indicator instantly
    scoreCounter.textContent = `Aciertos: ${score}`;
    
    // Enable Next button
    btnNext.disabled = false;
}

function handleNextClick() {
    currentIndex++;
    if (currentIndex < questionsQueue.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    progressBar.style.width = `100%`;
    playSound('victory');
    
    // Calculate Score
    const percent = Math.round((score / questionsQueue.length) * 100);
    scorePercent.textContent = `${percent}%`;
    scoreFraction.textContent = `${score} / ${questionsQueue.length}`;
    
    // Animate Circle Fill
    // Circle length is 2 * PI * r = 2 * 3.14159 * 45 = 282.74 => rounded to 283
    const offset = 283 - (percent / 100) * 283;
    scoreCircleFill.style.strokeDashoffset = offset;
    
    // Feedback text in Spanish
    let feedbackTitleText = "";
    let feedbackDescText = "";
    
    if (percent === 100) {
        feedbackTitleText = "¡Perfecto! 🎉";
        feedbackDescText = "¡Asombroso! Tienes un conocimiento absoluto sobre las razas de perros y gatos.";
    } else if (percent >= 80) {
        feedbackTitleText = "¡Excelente Trabajo! 🌟";
        feedbackDescText = "¡Casi perfecto! Conoces muy bien las diferentes características y razas.";
    } else if (percent >= 50) {
        feedbackTitleText = "¡Buen Intento! 👍";
        feedbackDescText = "Tienes un buen nivel, pero aún hay algunas razas que se te complican. ¡Sigue practicando!";
    } else {
        feedbackTitleText = "¡Sigue Practicando! 💪";
        feedbackDescText = "¡No te rindas! Revisa el material didáctico y vuelve a intentarlo.";
    }
    
    feedbackTitle.textContent = feedbackTitleText;
    feedbackText.textContent = feedbackDescText;
    
    // Build Review List
    reviewList.innerHTML = '';
    answersHistory.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = `review-item ${item.isCorrect ? 'correct' : 'incorrect'}`;
        
        const breed = item.breed;
        
        // Generate details grid
        let detailsHtml = '';
        if (breed.details && Object.keys(breed.details).length > 0) {
            const labels = {
                origen: 'Origen',
                aptitud: 'Aptitud',
                capa: 'Pelaje/Capa',
                pelaje: 'Pelaje/Capa',
                talla: 'Talla/Tamaño',
                tamano: 'Talla/Tamaño',
                caracter: 'Carácter',
                enfermedades: 'Predisposición médica'
            };
            
            detailsHtml = '<div class="details-grid">';
            for (const [key, val] of Object.entries(breed.details)) {
                if (!val) continue;
                const label = labels[key] || key.charAt(0).toUpperCase() + key.slice(1);
                detailsHtml += `
                    <div class="details-item">
                        <span class="details-label">${label}</span>
                        <span class="details-value">${val}</span>
                    </div>
                `;
            }
            detailsHtml += '</div>';
        } else {
            detailsHtml = '<p class="no-details">No hay más detalles clínicos para esta raza.</p>';
        }
        
        itemDiv.innerHTML = `
            <div class="review-item-header">
                <img src="${breed.image}" class="review-thumb" alt="${breed.name}">
                <div class="review-info">
                    <span class="review-breed">${breed.name}</span>
                    <span class="review-details">${formatType(breed.type)}${breed.details && breed.details.origen ? ` | Origen: ${breed.details.origen}` : ''}</span>
                    ${!item.isCorrect ? `<span class="review-details" style="color: var(--red-error);">Tu elección: ${item.selectedName}</span>` : ''}
                </div>
                <span class="review-status ${item.isCorrect ? 'correct' : 'incorrect'}">
                    ${item.isCorrect ? '✓' : '✗'}
                </span>
                <span class="expand-caret">▼</span>
            </div>
            <div class="review-details-container">
                ${detailsHtml}
            </div>
        `;
        
        itemDiv.addEventListener('click', () => {
            itemDiv.classList.toggle('expanded');
        });
        
        reviewList.appendChild(itemDiv);
    });
    
    showScreen(screenResults);
}

// Event Listeners
btnStart.addEventListener('click', startQuiz);
btnNext.addEventListener('click', handleNextClick);
btnRestart.addEventListener('click', () => {
    showScreen(screenStart);
});
