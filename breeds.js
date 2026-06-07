// Catálogo autogenerado de razas
const breeds = [
  {
    "name": "Abisinio",
    "type": "cat",
    "image": "images/cats/abisinio.png",
    "details": {
      "origen": "Etiopia (antes abisinia)",
      "pelaje": "corto ticking (jaspeado)",
      "tamano": "mediano (4-7Kg)",
      "caracter": "Son muy activos e independientes",
      "enfermedades": "insuficiencia renal crónica,"
    }
  },
  {
    "name": "Somalí",
    "type": "cat",
    "image": "images/cats/somali.png",
    "details": {
      "origen": "Canadá y EEUU",
      "pelaje": "semilargo. Ticking",
      "tamano": "mediano (3-5 Kg)",
      "caracter": "inteligente, juguetón y extrovertido.",
      "enfermedades": "raza de las más sanas y robustas."
    }
  },
  {
    "name": "Angora",
    "type": "cat",
    "image": "images/cats/angora.png",
    "details": {
      "origen": "Turquía",
      "pelaje": "semilargo y sedoso, blanco apreciado con ojos",
      "tamano": "mediano (3-5 Kg)",
      "enfermedades": "bolas de pelo, sordera (blancos) pero"
    }
  },
  {
    "name": "Ashera",
    "type": "cat",
    "image": "images/cats/ashera.png",
    "details": {
      "origen": "cruce de 3 especies felinas (serval,",
      "tamano": "grande 15 Kg",
      "caracter": "fiel, cariñoso y con actividad"
    }
  },
  {
    "name": "Savannah",
    "type": "cat",
    "image": "images/cats/savannah.png",
    "details": {
      "origen": "cruce gato atigrado y servales africanos",
      "tamano": "grande Carácter: leal, pueden ser entrenados.",
      "caracter": "➢ Tamaño: grande Carácter: leal, pueden ser entrenados.",
      "enfermedades": "Saludables pero no responden bien a las"
    }
  },
  {
    "name": "Azul Ruso",
    "type": "cat",
    "image": "images/cats/azul_ruso.png",
    "details": {
      "origen": "Rusia.",
      "tamano": "mediano (3,5-5 Kg)",
      "caracter": "tranquilo, tímido y afectuosos, ideal para la vida interior.",
      "enfermedades": "bastante sano."
    }
  },
  {
    "name": "Oriental",
    "type": "cat",
    "image": "images/cats/oriental.png",
    "details": {}
  },
  {
    "name": "Bengalí",
    "type": "cat",
    "image": "images/cats/bengali.png",
    "details": {
      "origen": "cruce de felis bangalis (salvaje) y gatos",
      "tamano": "mediano (3-5 Kg)",
      "caracter": "fuerte, muy juguetón y activo, le gusta el",
      "enfermedades": "inestabilidad emocional (genes"
    }
  },
  {
    "name": "Bobtail Japonés",
    "type": "cat",
    "image": "images/cats/bobtail_japones.png",
    "details": {
      "origen": "(gato de la suerte)",
      "tamano": "mediano (3-5 Kg)",
      "caracter": "activo, extrovertido, curioso, juguetón,",
      "enfermedades": "sano"
    }
  },
  {
    "name": "Bobtail Americano",
    "type": "cat",
    "image": "images/cats/bobtail_americano.png",
    "details": {
      "origen": "EEUU",
      "tamano": "mediano (3-7 Kg)",
      "caracter": "juguetones, enérgicos y amistosos,",
      "enfermedades": "sanos"
    }
  },
  {
    "name": "Bosque De Noruega",
    "type": "cat",
    "image": "images/cats/bosque_de_noruega.png",
    "details": {
      "origen": "Noruega",
      "tamano": "grande (9 Kg)",
      "caracter": "perfecto animal de compañía, amistoso y muy",
      "enfermedades": "displasia de cadera o problemas en"
    }
  },
  {
    "name": "Maine Coon",
    "type": "cat",
    "image": "images/cats/maine_coon.png",
    "details": {
      "origen": "EEUU",
      "tamano": "grandes(4-10 Kg)",
      "caracter": "bonachón, afectuoso, muy sociable,",
      "enfermedades": "exceso peso y displasia de"
    }
  },
  {
    "name": "Burmés",
    "type": "cat",
    "image": "images/cats/burmes.png",
    "details": {
      "origen": "Sudeste asiático.",
      "tamano": "mediano (3-5 Kg)",
      "caracter": "afectuoso y sociable. Curioso e inteligente,",
      "enfermedades": "muy sano y longevo."
    }
  },
  {
    "name": "Común Europeo",
    "type": "cat",
    "image": "images/cats/comun_europeo.png",
    "details": {
      "origen": "Europa Continental",
      "tamano": "mediano (3-5 Kg)",
      "caracter": "inteligente, gran personalidad, cazador y",
      "enfermedades": "sano y robusto."
    }
  },
  {
    "name": "American Shorthair",
    "type": "cat",
    "image": "images/cats/american_shorthair.png",
    "details": {
      "origen": "EEUU",
      "tamano": "mediano (3-7 Kg)",
      "caracter": "equilibrado, tranquilo, sociable,",
      "enfermedades": "sano."
    }
  },
  {
    "name": "British",
    "type": "cat",
    "image": "images/cats/british.png",
    "details": {}
  },
  {
    "name": "Devon Rex",
    "type": "cat",
    "image": "images/cats/devon_rex.png",
    "details": {
      "origen": "Gran Bretaña.",
      "tamano": "mediano (3-5 Kg)",
      "caracter": "muy afectuoso y juguetón, no le",
      "enfermedades": "fuerte y longevo, exceso"
    }
  },
  {
    "name": "Sphynx",
    "type": "cat",
    "image": "images/cats/sphynx.png",
    "details": {
      "origen": "Norteamérica y Europa.",
      "tamano": "mediano (3-7 Kg)",
      "caracter": "tranquilo, cariñoso, le gusta trepar y",
      "enfermedades": "Enfermedad periodontal"
    }
  },
  {
    "name": "Cornish Rex",
    "type": "cat",
    "image": "images/cats/cornish_rex.png",
    "details": {
      "origen": "Gran Bretaña.",
      "tamano": "pequeño (2,5-4,5Kg)",
      "caracter": "juguetón, afectuoso, muy sociable,",
      "enfermedades": "obesidad, catarros por su alta Tª"
    }
  },
  {
    "name": "Persa",
    "type": "cat",
    "image": "images/cats/persa.png",
    "details": {
      "origen": "Persia, Irán.",
      "tamano": "medio (3-5 Kg)",
      "caracter": "tranquilo y sociable, convive con otros",
      "enfermedades": "problemas oftalmológicas,"
    }
  },
  {
    "name": "Exótico",
    "type": "cat",
    "image": "images/cats/exotico.png",
    "details": {
      "origen": "EEUU",
      "tamano": "mediano (3-5 Kg)",
      "caracter": "tranquilo y sociable, fácil convivencia.",
      "enfermedades": "sana, superado algunos"
    }
  },
  {
    "name": "Nibelungo",
    "type": "cat",
    "image": "images/cats/nibelungo.png",
    "details": {
      "origen": "EEUU",
      "tamano": "mediano (3-5 Kg)",
      "caracter": "caprichoso, vivaz y activo.",
      "enfermedades": "sano"
    }
  },
  {
    "name": "Selkirk Rex",
    "type": "cat",
    "image": "images/cats/selkirk_rex.png",
    "details": {
      "origen": "EEUU",
      "tamano": "mediano (3-5 Kg)",
      "caracter": "de los más cariñosos y pacientes, sobre",
      "enfermedades": "sano, ocasiones bolas de pelo."
    }
  },
  {
    "name": "Laperm",
    "type": "cat",
    "image": "images/cats/laperm.png",
    "details": {
      "origen": "EEUU",
      "tamano": "mediano (3-5 Kg)",
      "caracter": "activos, juguetones, mimosos,",
      "enfermedades": "normalmente sanos"
    }
  },
  {
    "name": "Scottish y Highland Fold",
    "type": "cat",
    "image": "images/cats/scottish_y_highland_fold.png",
    "details": {
      "origen": "Escocia",
      "tamano": "mediano (3-5 Kg)",
      "caracter": "tranquilo, paciente, dormilón, curioso y",
      "enfermedades": "bolas de pelo, otitis; acortamiento"
    }
  },
  {
    "name": "Munchkin",
    "type": "cat",
    "image": "images/cats/munchkin.png",
    "details": {
      "origen": "EEUU",
      "tamano": "pequeño (2-4Kg)",
      "caracter": "eterno cachorro, ágil, activo, juguetones y",
      "enfermedades": "lordosis, pectum excavatum"
    }
  },
  {
    "name": "American Curl",
    "type": "cat",
    "image": "images/cats/american_curl.png",
    "details": {
      "origen": "EEUU",
      "tamano": "mediano (3-5 Kg)",
      "caracter": "cariñoso, apacible, muy inteligente y",
      "enfermedades": "sanos, casos de impactación"
    }
  },
  {
    "name": "Manx",
    "type": "cat",
    "image": "images/cats/manx.png",
    "details": {
      "origen": "Isla de Man (RU)",
      "tamano": "mediano (3-5Kg)",
      "caracter": "tranquilo y equilibrado, predilección por un dueño,",
      "enfermedades": "longevos y buena salud. Sindrome de Manx."
    }
  },
  {
    "name": "Mau Egipcio",
    "type": "cat",
    "image": "images/cats/mau_egipcio.png",
    "details": {
      "origen": "subespecie domestica del gato salvaje",
      "tamano": "mediano (3-5Kg)",
      "caracter": "adaptable vida casera y no necesita",
      "enfermedades": "sanos aunque sensibles a bajas Tª"
    }
  },
  {
    "name": "Ragdoll",
    "type": "cat",
    "image": "images/cats/ragdoll.png",
    "details": {
      "origen": "EEUU",
      "tamano": "grande(4-9 Kg)",
      "caracter": "excelente animal domestico, sociable y",
      "enfermedades": "sanos pero bolas de pelo"
    }
  },
  {
    "name": "Siames",
    "type": "cat",
    "image": "images/cats/siames.png",
    "details": {
      "origen": "Tailandia",
      "tamano": "mediano (3-5 Kg)",
      "caracter": "muy afectuoso y maúlla mucho. Gran energía y",
      "enfermedades": "estrabismo, nudos en cola, y en menos"
    }
  },
  {
    "name": "Balinés",
    "type": "cat",
    "image": "images/cats/balines.png",
    "details": {
      "origen": "oriental, siamés de pelo largo.",
      "tamano": "mediano (3-5 Kg)",
      "caracter": "sociable, amistoso y no le gusta",
      "enfermedades": "estrabismo"
    }
  },
  {
    "name": "Sagrado de Birmania",
    "type": "cat",
    "image": "images/cats/sagrado_de_birmania.png",
    "details": {
      "origen": "Birmania",
      "tamano": "mediano (3-5 Kg)",
      "caracter": "buenos con niños, pacientes y dóciles, fácil de educar,",
      "enfermedades": "problemas oculares y tricobezoares."
    }
  },
  {
    "name": "Himalayo",
    "type": "cat",
    "image": "images/cats/himalayo.png",
    "details": {
      "origen": "Suecia (desciende siamés)",
      "tamano": "pequeño-medio (2-6 Kg)",
      "caracter": "tranquilo, sociable, curioso, no muy comunicativo, vitalidad",
      "enfermedades": "bolas de pelo y problemas en relación con el"
    }
  },
  {
    "name": "Snowshoe",
    "type": "cat",
    "image": "images/cats/snowshoe.png",
    "details": {}
  },
  {
    "name": "Pastor Belga",
    "type": "dog",
    "image": "images/dogs/pastor_belga.png",
    "details": {
      "origen": "Bélgica",
      "aptitud": "Perro pastor, guardián,"
    }
  },
  {
    "name": "Pastor Alemán",
    "type": "dog",
    "image": "images/dogs/pastor_aleman.png",
    "details": {
      "aptitud": "Es la raza más popular y extendida en todo el",
      "capa": "todos los colores, desde el marrón claro al negro. No"
    }
  },
  {
    "name": "Pastor Alemán de trabajo",
    "type": "dog",
    "image": "images/dogs/pastor_aleman_de_trabajo.png",
    "details": {}
  },
  {
    "name": "Perro lobo",
    "type": "dog",
    "image": "images/dogs/perro_lobo.png",
    "details": {
      "origen": "Antigua República Checoslovaca.",
      "capa": "Recto, adherente. El pelo del",
      "talla": "60-65 cm"
    }
  },
  {
    "name": "Ca de Bestiar",
    "type": "dog",
    "image": "images/dogs/ca_de_bestiar.png",
    "details": {
      "origen": "España",
      "aptitud": "Pastor, guarda y de defensa.",
      "capa": "Pelaje denso y tupido. Color negro y negro-fuego. Pueden ser",
      "talla": "60-65 cm"
    }
  },
  {
    "name": "Gos datura",
    "type": "dog",
    "image": "images/dogs/gos_datura.png",
    "details": {
      "origen": "España",
      "aptitud": "Pastor (de los mejores), guarda",
      "capa": "parda, gris o negra. Pelo lacio, ondulado y",
      "talla": "40-55 cm"
    }
  },
  {
    "name": "Beauceron",
    "type": "dog",
    "image": "images/dogs/beauceron.png",
    "details": {
      "origen": "Francia (región Beauce)",
      "aptitud": "conduce y guarda rebaño, defensa.",
      "capa": "negro y fuego y arlequín.",
      "talla": "65-70 cm"
    }
  },
  {
    "name": "Pastor de Brie",
    "type": "dog",
    "image": "images/dogs/pastor_de_brie.png",
    "details": {
      "origen": "Francia",
      "aptitud": "pastor (enorme capacidad de",
      "capa": "todos los colores uniformes a",
      "talla": "60-75 cm"
    }
  },
  {
    "name": "Bearded Collie",
    "type": "dog",
    "image": "images/dogs/bearded_collie.png",
    "details": {
      "origen": "Gran Bretaña",
      "aptitud": "pastor y compañía.",
      "capa": "negro o gris con manchas blancas.",
      "talla": "50-55 cm"
    }
  },
  {
    "name": "Border Collie",
    "type": "dog",
    "image": "images/dogs/border_collie.png",
    "details": {
      "origen": "Gran Bretaña",
      "aptitud": "gran perro ovejero, famoso por reunir la",
      "capa": "generalmente negra y blanca, a veces tricolor,",
      "talla": "53 cm"
    }
  },
  {
    "name": "Pastor australiano",
    "type": "dog",
    "image": "images/dogs/pastor_australiano.png",
    "details": {}
  },
  {
    "name": "Rough Collie",
    "type": "dog",
    "image": "images/dogs/rough_collie.png",
    "details": {
      "talla": "51-61 cm",
      "origen": "Gran Bretaña",
      "aptitud": "antiguo perro pastor escocés. Buen vigilante y fácil de",
      "capa": "cibelino y blanco, tricolor o azul mirlo."
    }
  },
  {
    "name": "Bobtail",
    "type": "dog",
    "image": "images/dogs/bobtail.png",
    "details": {
      "capa": "gris y blanca.",
      "talla": "53-56 cm",
      "origen": "Gran Bretaña",
      "aptitud": "antiguo pastor inglés, ideal"
    }
  },
  {
    "name": "Komondor",
    "type": "dog",
    "image": "images/dogs/komondor.png",
    "details": {
      "origen": "Hungría",
      "aptitud": "pastor muy apreciado como guardián de",
      "capa": "blanca.",
      "talla": "65 -70 cm"
    }
  },
  {
    "name": "Puli",
    "type": "dog",
    "image": "images/dogs/puli.png",
    "details": {}
  },
  {
    "name": "Welsh Corgi",
    "type": "dog",
    "image": "images/dogs/welsh_corgi.png",
    "details": {}
  },
  {
    "name": "Bouvier de Flandes",
    "type": "dog",
    "image": "images/dogs/bouvier_de_flandes.png",
    "details": {
      "origen": "Bélgica",
      "aptitud": "pastor fácilmente adaptable a una",
      "capa": "leonado, gris o entrecano (mezcla pelos",
      "talla": "60-70 cm. 30-40 kg"
    }
  },
  {
    "name": "Pastor suizo",
    "type": "dog",
    "image": "images/dogs/pastor_suizo.png",
    "details": {}
  },
  {
    "name": "Dóberman",
    "type": "dog",
    "image": "images/dogs/doberman.png",
    "details": {
      "origen": "Alemania, Louis Dóberman.",
      "aptitud": "creado como perro de defensa personal, se",
      "capa": "negro o marrón con manchas fuego.",
      "talla": "60- 70 cm"
    }
  },
  {
    "name": "Pinscher",
    "type": "dog",
    "image": "images/dogs/pinscher.png",
    "details": {
      "origen": "Alemania",
      "aptitud": "guardián (mediano), ratero y de compañía.",
      "capa": "pardas, rojas o negro y fuego.",
      "talla": "mediano 40-50 cm (15Kg); enano 25-30 cm (4Kg)"
    }
  },
  {
    "name": "Schnauzer gigante",
    "type": "dog",
    "image": "images/dogs/schnauzer_gigante.png",
    "details": {
      "talla": "70 cm (30-40 Kg)",
      "origen": "Alemania",
      "aptitud": "perros policía, guarda y defensa.",
      "capa": "negro, sal y pimienta."
    }
  },
  {
    "name": "Schnauzer mediano",
    "type": "dog",
    "image": "images/dogs/schnauzer_mediano.png",
    "details": {
      "origen": "Alemania",
      "aptitud": "excelente animal de compañía.",
      "capa": "negro, blanco, sal y pimienta, negro y plata.",
      "talla": "30-35 cm (4-7 Kg)"
    }
  },
  {
    "name": "Dogo argentino",
    "type": "dog",
    "image": "images/dogs/dogo_argentino.png",
    "details": {
      "origen": "Argentina, reciente creacción.",
      "aptitud": "excelente perro de presa, guarda y defensa.",
      "capa": "completamente blanco.",
      "talla": "60-65 cm (40-45 Kg)"
    }
  },
  {
    "name": "Fila brasileño",
    "type": "dog",
    "image": "images/dogs/fila_brasileno.png",
    "details": {
      "origen": "única raza reconocida de Brasil.",
      "aptitud": "guardián, protector de ganado y",
      "capa": "leonada o atigrada.",
      "talla": "65-70 cm (70 Kg)"
    }
  },
  {
    "name": "Tosa inu",
    "type": "dog",
    "image": "images/dogs/tosa_inu.png",
    "details": {}
  },
  {
    "name": "Shar Pei",
    "type": "dog",
    "image": "images/dogs/shar_pei.png",
    "details": {
      "origen": "China.",
      "aptitud": "perro de guardia en los templos y de pelea,",
      "capa": "crema, marrón y negro.",
      "talla": "40-50 cm (20 Kg)"
    }
  },
  {
    "name": "Bóxer",
    "type": "dog",
    "image": "images/dogs/boxer.png",
    "details": {
      "origen": "Alemania.",
      "aptitud": "guarda y defensa, animal de",
      "capa": "distintas tonalidades pero siempre",
      "talla": "55-65 cm (30 Kg)"
    }
  },
  {
    "name": "Dogo alemán",
    "type": "dog",
    "image": "images/dogs/dogo_aleman.png",
    "details": {
      "origen": "Alemania.",
      "aptitud": "magnifico guardián.",
      "capa": "negro, atigrado, azul y arlequín.",
      "talla": "70-80 cm ( 60-80 Kg)"
    }
  },
  {
    "name": "Rottweiler",
    "type": "dog",
    "image": "images/dogs/rottweiler.png",
    "details": {
      "origen": "Alemania.",
      "aptitud": "guardián y defensa.",
      "capa": "negro con manchas de fuego.",
      "talla": "55-80 cm ( 45-60 Kg)"
    }
  },
  {
    "name": "Presa Canario",
    "type": "dog",
    "image": "images/dogs/presa_canario.png",
    "details": {
      "origen": "España, antiguo perro de combate.",
      "aptitud": "guarda y defensa.",
      "capa": "rojo, negro y atigrado (mancha blanca).",
      "talla": "55-65 cm ( 40-50 Kg)"
    }
  },
  {
    "name": "Dogo de Burdeos",
    "type": "dog",
    "image": "images/dogs/dogo_de_burdeos.png",
    "details": {
      "origen": "Francia.",
      "aptitud": "guarda y defensa.",
      "capa": "caoba o dorado.",
      "talla": "60-65 cm ( 35-45 Kg)"
    }
  },
  {
    "name": "Bulldog Inglés",
    "type": "dog",
    "image": "images/dogs/bulldog_ingles.png",
    "details": {
      "origen": "Inglaterra.",
      "aptitud": "antes perro de lucha, ahora de compañía.",
      "capa": "blanca con manchas leonadas o atigradas o unicolor",
      "talla": "40 cm ( 25 Kg)"
    }
  },
  {
    "name": "Bulldog americano",
    "type": "dog",
    "image": "images/dogs/bulldog_americano.png",
    "details": {}
  },
  {
    "name": "Bullmastiff",
    "type": "dog",
    "image": "images/dogs/bullmastiff.png",
    "details": {
      "origen": "Gran Bretaña.",
      "aptitud": "antiguo perro de combate y caza mayor,",
      "capa": "albaricoque, gris o leonada con manchas",
      "talla": "70-80 cm ( 80 Kg)"
    }
  },
  {
    "name": "Mastín Napolitano",
    "type": "dog",
    "image": "images/dogs/mastin_napolitano.png",
    "details": {
      "origen": "Italia, Nápoles. Raza reciente.",
      "aptitud": "guarda y defensa",
      "capa": "azul, gris o negro (manchas blancas en pecho)",
      "talla": "70-80 cm (50-70Kg)"
    }
  },
  {
    "name": "Mastín Tibetano",
    "type": "dog",
    "image": "images/dogs/mastin_tibetano.png",
    "details": {}
  },
  {
    "name": "Terranova",
    "type": "dog",
    "image": "images/dogs/terranova.png",
    "details": {
      "origen": "Canadá (Isla Terranova)",
      "aptitud": "protector, salvavidas en agua, guardián.",
      "capa": "negro, negro y blanco o castaño.",
      "talla": "65-75 cm ( 50-68 Kg)"
    }
  },
  {
    "name": "Leonberger",
    "type": "dog",
    "image": "images/dogs/leonberger.png",
    "details": {
      "origen": "Alemania.",
      "aptitud": "guardián, rastreo, socorrista de montaña.",
      "capa": "amarillento a castaño rojizo con manchas",
      "talla": "60-80 cm ( 40-70 Kg)"
    }
  },
  {
    "name": "Mastín Español",
    "type": "dog",
    "image": "images/dogs/mastin_espanol.png",
    "details": {
      "origen": "España (Castilla).",
      "aptitud": "guardián, protector de ovejas y cuidado de",
      "capa": "cualquier color, colores uniformes, atigrados,",
      "talla": "72-80 cm ( 55-100 Kg)"
    }
  },
  {
    "name": "Mastín del pirineo",
    "type": "dog",
    "image": "images/dogs/mastin_del_pirineo.png",
    "details": {
      "origen": "España.",
      "aptitud": "custodia de rebaños y propiedades.",
      "capa": "blanca, máscara en orejas gris o negro, resto",
      "talla": "72-77 cm"
    }
  },
  {
    "name": "Montaña del pirineo",
    "type": "dog",
    "image": "images/dogs/montana_del_pirineo.png",
    "details": {
      "origen": "Andorra y Francia (Pirineos).",
      "aptitud": "custodia y guarda del ganado.",
      "capa": "blanco, a veces manchas color tejón.",
      "talla": "65-80 cm (50-60 Kg)"
    }
  },
  {
    "name": "San Bernardo",
    "type": "dog",
    "image": "images/dogs/san_bernardo.png",
    "details": {
      "origen": "Suiza.",
      "aptitud": "búsqueda y guarda.",
      "capa": "blanca y roja o blanca y amarillo castaño.",
      "talla": "70-75 cm (60-90 Kg)"
    }
  },
  {
    "name": "Boyero de Berna",
    "type": "dog",
    "image": "images/dogs/boyero_de_berna.png",
    "details": {
      "origen": "Suiza.",
      "aptitud": "antiguo perro de tiro. Policía,",
      "capa": "tricolor negro, fuego y blanco",
      "talla": "60-70 cm (40-50 Kg)"
    }
  },
  {
    "name": "Airedale Terrier",
    "type": "dog",
    "image": "images/dogs/airedale_terrier.png",
    "details": {
      "origen": "Gran Bretaña.",
      "aptitud": "antes: caza, ataque y centinela, hoy: policía,",
      "capa": "negro y fuego.",
      "talla": "60 cm (20 Kg)"
    }
  },
  {
    "name": "Bedlington Terrier",
    "type": "dog",
    "image": "images/dogs/bedlington_terrier.png",
    "details": {
      "origen": "Bedlington (GB).",
      "aptitud": "caza, perro de compañía.",
      "capa": "azul, marrón o arena (casi blanco).",
      "talla": "40cm (10Kg)"
    }
  },
  {
    "name": "Border terrier",
    "type": "dog",
    "image": "images/dogs/border_terrier.png",
    "details": {
      "origen": "Frontera Escocia y GB.",
      "aptitud": "caza, perro de compañía.",
      "capa": "rojo, trigo, negro y fuego.",
      "talla": "40 cm (7 Kg)"
    }
  },
  {
    "name": "Fox Terrier",
    "type": "dog",
    "image": "images/dogs/fox_terrier.png",
    "details": {
      "origen": "GB.",
      "aptitud": "caza, guardián y perro de compañía.",
      "capa": "blanco con manchas leonadas, negras y fuego.",
      "talla": "39 cm (8 Kg)"
    }
  },
  {
    "name": "Kerry blue terrier",
    "type": "dog",
    "image": "images/dogs/kerry_blue_terrier.png",
    "details": {
      "origen": "Irlanda (condado de Kerry).",
      "aptitud": "caza y perro de compañía.",
      "capa": "todos los tonos de azul (ext. y cara negras).",
      "talla": "45 cm (17 Kg)"
    }
  },
  {
    "name": "Jack Russell Terrier",
    "type": "dog",
    "image": "images/dogs/jack_russell_terrier.png",
    "details": {
      "origen": "nombre pos pastor inglés.",
      "aptitud": "caza y perro de compañía.",
      "capa": "blanco, blanco con manchas fuego o negro en",
      "talla": "35 cm (7 Kg)"
    }
  },
  {
    "name": "Parson terrier",
    "type": "dog",
    "image": "images/dogs/parson_terrier.png",
    "details": {}
  },
  {
    "name": "Cairn terrier",
    "type": "dog",
    "image": "images/dogs/cairn_terrier.png",
    "details": {
      "origen": "Escocia.",
      "aptitud": "caza y perro de compañía.",
      "capa": "crema, trigo, rojo, gris o casi negro. Ext.,",
      "talla": "30 cm (7 Kg)"
    }
  },
  {
    "name": "Scottish Terrier",
    "type": "dog",
    "image": "images/dogs/scottish_terrier.png",
    "details": {
      "origen": "Escocia.",
      "aptitud": "caza y perro de compañía.",
      "capa": "negro, trigo o gris (casi blanco)",
      "talla": "26 cm (9 Kg)"
    }
  },
  {
    "name": "Skye Terrier",
    "type": "dog",
    "image": "images/dogs/skye_terrier.png",
    "details": {
      "origen": "Escocia (Isla de Skye)",
      "aptitud": "caza y perro de compañía.",
      "capa": "negro, gris y crema.",
      "talla": "25 cm (10 Kg)"
    }
  },
  {
    "name": "West Highland White Terrier",
    "type": "dog",
    "image": "images/dogs/west_highland_white_terrier.png",
    "details": {
      "origen": "Escocia, procede del Cairn Terrier",
      "aptitud": "guardián, caza y perro de compañía.",
      "capa": "blanco.",
      "talla": "28 cm (7 Kg)"
    }
  },
  {
    "name": "Bull Terrier",
    "type": "dog",
    "image": "images/dogs/bull_terrier.png",
    "details": {
      "origen": "GB",
      "aptitud": "combate, guardia y animal",
      "capa": "blanco, con manchas, negros",
      "talla": "56 cm (28 Kg)"
    }
  },
  {
    "name": "Staffordshire Bull Terrier",
    "type": "dog",
    "image": "images/dogs/staffordshire_bull_terrier.png",
    "details": {
      "origen": "GB",
      "aptitud": "combate, guardia y animal de compañía.",
      "capa": "negro, rojo, azul, leonado o cualquiera de estos",
      "talla": "35-40 cm (15 Kg)"
    }
  },
  {
    "name": "American Staffordshire Terrier",
    "type": "dog",
    "image": "images/dogs/american_staffordshire_terrier.png",
    "details": {
      "origen": "EEUU",
      "aptitud": "combate antig.; animal de compañía.",
      "capa": "todos los colores.",
      "talla": "45-50 cm (18-20 Kg)"
    }
  },
  {
    "name": "American pitbull terrier",
    "type": "dog",
    "image": "images/dogs/american_pitbull_terrier.png",
    "details": {}
  },
  {
    "name": "American bully",
    "type": "dog",
    "image": "images/dogs/american_bully.png",
    "details": {}
  },
  {
    "name": "Yorkshire Terrier",
    "type": "dog",
    "image": "images/dogs/yorkshire_terrier.png",
    "details": {
      "origen": "GB",
      "aptitud": "animal de compañía.",
      "capa": "azul oscuro y leonado, nacen negros, luego",
      "talla": "20 cm (3 Kg)"
    }
  },
  {
    "name": "Bodeguero Andaluz",
    "type": "dog",
    "image": "images/dogs/bodeguero_andaluz.png",
    "details": {}
  },
  {
    "name": "Teckels",
    "type": "dog",
    "image": "images/dogs/teckels.png",
    "details": {
      "origen": "Alemania",
      "aptitud": "animal cazador y de compañía.",
      "capa": "unicolor (del amarillo al rojizo), arlequinada,",
      "talla": "26-37 cm (4-9 Kg)"
    }
  },
  {
    "name": "Samoyedo",
    "type": "dog",
    "image": "images/dogs/samoyedo.png",
    "details": {
      "origen": "Países Nórdicos",
      "aptitud": "perro de trineo, guardián y compañía.",
      "capa": "blanca.",
      "talla": "53-57 cm (17-30 Kg)"
    }
  },
  {
    "name": "Alaska malamute",
    "type": "dog",
    "image": "images/dogs/alaska_malamute.png",
    "details": {
      "origen": "Alaska, EEUU",
      "aptitud": "perro de trineo y compañía.",
      "capa": "gris claro al negro o arena al rojo,",
      "talla": "58-65 cm (34-38 Kg)"
    }
  },
  {
    "name": "Husky Siberiano",
    "type": "dog",
    "image": "images/dogs/husky_siberiano.png",
    "details": {
      "origen": "Norteamérica.",
      "aptitud": "perro de trineo y compañía.",
      "capa": "negro al blanco puro con marcas típicas.",
      "talla": "51-60 cm (16-28 Kg)"
    }
  },
  {
    "name": "Spitz Alemán",
    "type": "dog",
    "image": "images/dogs/spitz_aleman.png",
    "details": {
      "origen": "Alemania, una de las más antiguas y ancestros",
      "aptitud": "guardián",
      "capa": "según variedad, dorado.",
      "talla": "22-48 cm (30 Kg)"
    }
  },
  {
    "name": "Chow Chow",
    "type": "dog",
    "image": "images/dogs/chow_chow.png",
    "details": {
      "origen": "China.",
      "aptitud": "antes para guerra, caza y guarda, ahora animal",
      "capa": "negro, rojo, azul, crema o blanco.",
      "talla": "45-56 cm (18-25 Kg)"
    }
  },
  {
    "name": "Eurasier",
    "type": "dog",
    "image": "images/dogs/eurasier.png",
    "details": {
      "origen": "Alemania, creada en 1950 cruce Chow-",
      "aptitud": "guardia y compañía.",
      "capa": "cualquier color y combinación de colores",
      "talla": "48-60 cm (18-32 Kg)"
    }
  },
  {
    "name": "Akita Inu",
    "type": "dog",
    "image": "images/dogs/akita_inu.png",
    "details": {
      "origen": "Japón (provincia Akita)",
      "aptitud": "antes caza y combate, hoy de compañía.",
      "capa": "rojas, cremas, típicas manchas blancas en",
      "talla": "60-70 cm (30-50 Kg)"
    }
  },
  {
    "name": "Shiba Inu",
    "type": "dog",
    "image": "images/dogs/shiba_inu.png",
    "details": {}
  },
  {
    "name": "Basenji",
    "type": "dog",
    "image": "images/dogs/basenji.png",
    "details": {
      "origen": "Congo",
      "aptitud": "caza menor, guía en el monte y de",
      "capa": "negro, blanco, rojo o combinaciones de",
      "talla": "40 cm (10 Kg)"
    }
  },
  {
    "name": "Perro sin pelo mexicano",
    "type": "dog",
    "image": "images/dogs/perro_sin_pelo_mexicano.png",
    "details": {
      "origen": "México, una de las + antiguas.",
      "aptitud": "perro de compañía.",
      "capa": "color piel gris elefante o bronce",
      "talla": "30-40 cm"
    }
  },
  {
    "name": "Podenco ibicenco",
    "type": "dog",
    "image": "images/dogs/podenco_ibicenco.png",
    "details": {
      "origen": "Islas Baleares.",
      "aptitud": "caza y perro de compañía.",
      "capa": "blanco y rojo.",
      "talla": "60-70 cm (20-23 Kg)"
    }
  },
  {
    "name": "Bloodhound",
    "type": "dog",
    "image": "images/dogs/bloodhound.png",
    "details": {
      "origen": "Bélgica, sabueso + antiguo.",
      "aptitud": "caza, rastreo y perro de compañía.",
      "capa": "negro y fuego, monocromo rojo o fuego.",
      "talla": "60-70 cm (40-50 Kg)"
    }
  },
  {
    "name": "Sabueso Español",
    "type": "dog",
    "image": "images/dogs/sabueso_espanol.png",
    "details": {
      "origen": "España.",
      "aptitud": "perro de caza y de compañía.",
      "capa": "blanco con manchas naranjas o negras.",
      "talla": "50-55 cm (20-25 Kg)"
    }
  },
  {
    "name": "Basset Hound",
    "type": "dog",
    "image": "images/dogs/basset_hound.png",
    "details": {
      "origen": "GB.",
      "aptitud": "perro de caza y de compañía.",
      "capa": "tricolor: negro, blanco y fuego.",
      "talla": "30-38 cm (25-30 Kg)"
    }
  },
  {
    "name": "Beagle",
    "type": "dog",
    "image": "images/dogs/beagle.png",
    "details": {
      "origen": "GB.",
      "aptitud": "perro de caza y de compañía.",
      "capa": "tricolor: negro, blanco y fuego, o bicolor: blanco",
      "talla": "35-40 cm (15-20 Kg)"
    }
  },
  {
    "name": "Dálmata",
    "type": "dog",
    "image": "images/dogs/dalmata.png",
    "details": {
      "origen": "Yugoslavia. Formó parte de los equipos",
      "aptitud": "perro de compañía.",
      "capa": "blanco con manchas negras o blanco con",
      "talla": "55-60 cm (25-30Kg)"
    }
  },
  {
    "name": "Rhodesian Ridgeback",
    "type": "dog",
    "image": "images/dogs/rhodesian_ridgeback.png",
    "details": {
      "origen": "Sudáfrica. Debe su nombre a la cresta “ridge” de pelo",
      "aptitud": "perro de caza mayor y de compañía.",
      "capa": "desde el color trigo al rojo intenso. Se admite un poco",
      "talla": "60-65 cm (35-40 Kg)"
    }
  },
  {
    "name": "Braco Alemán de pelo corto",
    "type": "dog",
    "image": "images/dogs/braco_aleman_de_pelo_corto.png",
    "details": {
      "origen": "Alemania",
      "aptitud": "perro de caza (aves).",
      "capa": "marrón o marrón con manchas blancas.",
      "talla": "60-65 cm (25-32 Kg)"
    }
  },
  {
    "name": "Drahthaar",
    "type": "dog",
    "image": "images/dogs/drahthaar.png",
    "details": {
      "origen": "Alemania (su nombre se debe a su tipo de pelo,",
      "aptitud": "perro de caza (aves).",
      "capa": "marrón, marrón mezclado con blanco y entrecano.",
      "talla": "60-65 cm (25-32 Kg)"
    }
  },
  {
    "name": "Braco de Weimar",
    "type": "dog",
    "image": "images/dogs/braco_de_weimar.png",
    "details": {
      "origen": "Alemania",
      "aptitud": "perro de caza, guarda y de compañía.",
      "capa": "gris plateado",
      "talla": "57-70 cm (25-40 Kg)"
    }
  },
  {
    "name": "Spaniel Bretón",
    "type": "dog",
    "image": "images/dogs/spaniel_breton.png",
    "details": {
      "origen": "Francia, muy conocido.",
      "aptitud": "perro de caza.",
      "capa": "blanco y naranja, blanco y marrón, blanco y",
      "talla": "45-50 cm (14-18 Kg)"
    }
  },
  {
    "name": "Pointer",
    "type": "dog",
    "image": "images/dogs/pointer.png",
    "details": {
      "origen": "GB.",
      "aptitud": "perro de caza.",
      "capa": "blanco y naranja, blanco y marrón, blanco y",
      "talla": "60-65 cm (25-30 Kg)"
    }
  },
  {
    "name": "Setter Inglés",
    "type": "dog",
    "image": "images/dogs/setter_ingles.png",
    "details": {
      "origen": "GB.",
      "aptitud": "perro de caza.",
      "capa": "negro y blanco, naranja y blanco.",
      "talla": "61-68 cm (25-30 Kg)"
    }
  },
  {
    "name": "Setter Escocés",
    "type": "dog",
    "image": "images/dogs/setter_escoces.png",
    "details": {
      "origen": "Escocia.",
      "aptitud": "perro de caza y de compañía.",
      "capa": "negro intenso y brillante con manchas de",
      "talla": "62-66 cm (25-30 Kg)"
    }
  },
  {
    "name": "Setter Irlandés",
    "type": "dog",
    "image": "images/dogs/setter_irlandes.png",
    "details": {
      "origen": "Irlanda.",
      "aptitud": "perro de caza.",
      "capa": "color caoba uniforme.",
      "talla": "65-70 cm (25-30 Kg)"
    }
  },
  {
    "name": "Irish Red and White Setter",
    "type": "dog",
    "image": "images/dogs/irish_red_and_white_setter.png",
    "details": {}
  },
  {
    "name": "Labrador Retriever",
    "type": "dog",
    "image": "images/dogs/labrador_retriever.png",
    "details": {
      "origen": "Canadá.",
      "aptitud": "perro de caza, de compañía y lazarillo.",
      "capa": "negro, chocolate o amarillo (desde crema claro",
      "talla": "50-60 cm (27-40 Kg)"
    }
  },
  {
    "name": "Golden retriever",
    "type": "dog",
    "image": "images/dogs/golden_retriever.png",
    "details": {
      "origen": "GB.",
      "aptitud": "perro de caza, de compañía, cobrador y",
      "capa": "desde el dorado hasta el crema.",
      "talla": "50-60 cm (27-40 Kg)"
    }
  },
  {
    "name": "Cocker Spaniel Inglés",
    "type": "dog",
    "image": "images/dogs/cocker_spaniel_ingles.png",
    "details": {
      "origen": "GB.",
      "aptitud": "perro de compañía (antes caza)",
      "capa": "colores muy variados.",
      "talla": "40 cm (13 Kg)"
    }
  },
  {
    "name": "Cocker Spaniel Americano",
    "type": "dog",
    "image": "images/dogs/cocker_spaniel_americano.png",
    "details": {
      "origen": "EEUU, desciende directamente del Cocker",
      "aptitud": "perro de compañía",
      "capa": "colores muy variados.",
      "talla": "40 cm (13 Kg)"
    }
  },
  {
    "name": "Springer Spaniel",
    "type": "dog",
    "image": "images/dogs/springer_spaniel.png",
    "details": {}
  },
  {
    "name": "Perro de aguas español",
    "type": "dog",
    "image": "images/dogs/perro_de_aguas_espanol.png",
    "details": {
      "origen": "España.",
      "aptitud": "cazador de animales acuáticos y pastos, perro",
      "capa": "blanco, negro, marrón, blanco y negro, blanco y",
      "talla": "40-50 cm (15-20 Kg)"
    }
  },
  {
    "name": "Bichón Maltés",
    "type": "dog",
    "image": "images/dogs/bichon_maltes.png",
    "details": {
      "origen": "Cuenca mediterránea. Raza muy antigua de",
      "aptitud": "antes ratonero, ahora perro de compañía",
      "capa": "blanco puro.",
      "talla": "20-25 cm (3-4 Kg)"
    }
  },
  {
    "name": "Bichón Frisé",
    "type": "dog",
    "image": "images/dogs/bichon_frise.png",
    "details": {
      "origen": "Francia-Bélgica",
      "aptitud": "perro de compañía",
      "capa": "blanco puro.",
      "talla": "20-25 cm (3-4 Kg)"
    }
  },
  {
    "name": "Caniche",
    "type": "dog",
    "image": "images/dogs/caniche.png",
    "details": {
      "origen": "Francia",
      "aptitud": "antes caza acuática, ahora perro de",
      "capa": "negro, blanco, marrón, gris y albaricoque.",
      "talla": "según variedad."
    }
  },
  {
    "name": "Perro crestado chino",
    "type": "dog",
    "image": "images/dogs/perro_crestado_chino.png",
    "details": {
      "origen": "China, raza antigua (perro sin",
      "aptitud": "perro de compañía",
      "capa": "se admiten todos los colores y sus",
      "talla": "25-30 cm (3-5 Kg)"
    }
  },
  {
    "name": "Lhasa Apso",
    "type": "dog",
    "image": "images/dogs/lhasa_apso.png",
    "details": {
      "origen": "Tíbet, era animal sagrado.",
      "aptitud": "perro de compañía y guardián.",
      "capa": "se admiten muchos colores.",
      "talla": "20-25 cm (4-7 Kg)"
    }
  },
  {
    "name": "Shih tzu",
    "type": "dog",
    "image": "images/dogs/shih_tzu.png",
    "details": {
      "origen": "Tíbet, posible cruce Lhasa Apso.",
      "aptitud": "perro de compañía.",
      "capa": "se admiten muchos colores, blanco en punta",
      "talla": "20-25 cm (4-7 Kg)"
    }
  },
  {
    "name": "Pekinés",
    "type": "dog",
    "image": "images/dogs/pekines.png",
    "details": {
      "origen": "China, raza antigua.",
      "aptitud": "perro de compañía.",
      "capa": "se admiten muchos colores excepto blanco",
      "talla": "15-25 cm (3-6 Kg)"
    }
  },
  {
    "name": "Chihuahua",
    "type": "dog",
    "image": "images/dogs/chihuahua.png",
    "details": {
      "origen": "México (Estado de Chihuaha).",
      "aptitud": "perro de compañía.",
      "capa": "se admiten muchos colores y mezclas.",
      "talla": "15-20 cm (0.9-3.5 Kg)"
    }
  },
  {
    "name": "Bulldog Francés",
    "type": "dog",
    "image": "images/dogs/bulldog_frances.png",
    "details": {
      "origen": "Francia.",
      "aptitud": "perro de compañía y guardián.",
      "capa": "atigrado, atigrado y blanco, negro y",
      "talla": "25-35 cm (8-14 Kg)"
    }
  },
  {
    "name": "Boston Terrier",
    "type": "dog",
    "image": "images/dogs/boston_terrier.png",
    "details": {
      "origen": "EEUU.",
      "aptitud": "perro de compañía.",
      "capa": "atigrado o negro con manchas blancas.",
      "talla": "25-40 cm (7-11 Kg)"
    }
  },
  {
    "name": "Pug (Carlino)",
    "type": "dog",
    "image": "images/dogs/pug_carlino.png",
    "details": {
      "origen": "Gran Bretaña.",
      "aptitud": "perro de compañía.",
      "capa": "plateado, albaricoque, leonado o negro.",
      "talla": "30 cm (6-8 Kg)"
    }
  },
  {
    "name": "Papillón",
    "type": "dog",
    "image": "images/dogs/papillon.png",
    "details": {
      "origen": "Francia-Bélgica.",
      "aptitud": "perro de compañía.",
      "capa": "se admiten todos los colores sobre fondo",
      "talla": "28 cm (5 Kg)"
    }
  },
  {
    "name": "Cavalier king charles",
    "type": "dog",
    "image": "images/dogs/cavalier_king_charles.png",
    "details": {}
  },
  {
    "name": "Greyhound",
    "type": "dog",
    "image": "images/dogs/greyhound.png",
    "details": {
      "origen": "Inglaterra.",
      "aptitud": "carreras y perro de compañía.",
      "capa": "negro, blanco, rojo, azul, leonado, atigrado o",
      "talla": "70-75cm (25-30 Kg)"
    }
  },
  {
    "name": "Galgo Español",
    "type": "dog",
    "image": "images/dogs/galgo_espanol.png",
    "details": {
      "origen": "España.",
      "aptitud": "caza de liebres, carreras y perro de compañía.",
      "capa": "se admiten todos los colores.",
      "talla": "65-70 cm (20-25 Kg)"
    }
  },
  {
    "name": "Galgo Afgano",
    "type": "dog",
    "image": "images/dogs/galgo_afgano.png",
    "details": {
      "origen": "Afganistán.",
      "aptitud": "caza y perro de compañía.",
      "capa": "se admiten todos los colores.",
      "talla": "60-75 cm (25-30 Kg)"
    }
  },
  {
    "name": "Saluki",
    "type": "dog",
    "image": "images/dogs/saluki.png",
    "details": {
      "origen": "Irán.",
      "aptitud": "caza y perro de compañía.",
      "capa": "se admiten todos los colores.",
      "talla": "55-70 cm (15-30 Kg)"
    }
  },
  {
    "name": "Borzoi (galgo ruso)",
    "type": "dog",
    "image": "images/dogs/borzoi_galgo_ruso.png",
    "details": {
      "origen": "Ruso.",
      "aptitud": "guarda y perro de compañía.",
      "capa": "se admiten todos los colores.",
      "talla": "65-70 cm (35-45 Kg)"
    }
  },
  {
    "name": "Wolfhound",
    "type": "dog",
    "image": "images/dogs/wolfhound.png",
    "details": {
      "origen": "Irlanda.",
      "aptitud": "caza y perro de compañía.",
      "capa": "se adaptan muchos colores aunque es muy",
      "talla": "81-86 cm (41-54 Kg)"
    }
  },
  {
    "name": "Galgo Italiano",
    "type": "dog",
    "image": "images/dogs/galgo_italiano.png",
    "details": {
      "origen": "Italia.",
      "aptitud": "perro de compañía.",
      "capa": "negro, gris, amarillos, blanco solo en",
      "talla": "32-38 cm (5 Kg)"
    }
  },
  {
    "name": "Whippet",
    "type": "dog",
    "image": "images/dogs/whippet.png",
    "details": {
      "origen": "Inglaterra.",
      "aptitud": "perro de compañía.",
      "capa": "todos los colores o combinaciones.",
      "talla": "45-50 cm (10 Kg)"
    }
  }
];
if (typeof module !== 'undefined') {
    module.exports = breeds;
}
