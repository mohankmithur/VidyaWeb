const books = [
  ["ಕನ್ನಡ ಸಂಧ್ಯಾಭಾಷ್ಯ", "Kannada Sandhyabhashya", "ritual", 1994, "Mitturu Purohitha Shankaranarayana Bhatta"],
  ["ಸಂಧ್ಯಾವಂದನಮ್", "Sandhyavandanam", "ritual", 1997, "Mitturu Purohitha Shankaranarayana Bhatta"],
  ["ಪಂಚಾಯತನ ದೇವರ ಪೂಜೆ", "Panchayatana Devara Puje", "ritual", 1997, "Mitturu Purohitha Shankaranarayana Bhatta"],
  ["ವಿಷ್ಣುಪ್ರೋಕ್ತ ಶಿವಸಹಸ್ರನಾಮ", "Vishnuprokt Shiva Sahasranama", "puranic", 1997, "Mitturu Purohitha Shankaranarayana Bhatta"],
  ["ಆದಿತ್ಯಾದಿನವಗ್ರಹಪೂಜಾವಿಧಿಃ", "Adityadi Navagraha Pujavidhi", "ritual", 1997, "Narayana Bhatta Padekallu"],
  ["ಶ್ರೀರಾಮಚರಿತಾಮೃತಮ್", "Shri Ramacharitamritam", "puranic", 1999, "Sitaramayya Deraje"],
  ["ಮಂತ್ರಮಂಜರೀ", "Mantramanjari", "ritual", 2002, "Vishnu Bhatta Padekallu; Srinivasa Bhatta Mitturu"],
  ["ವೈದಿಕಾನುಬಂಧ ಸಮುಚ್ಚಯ", "Vaidikanubandha Samuchchaya", "ritual", 2003, "Narayana Bhatta Ama"],
  ["ಶಾರದಾರಾಧನಮ್", "Sharadaradhanam", "puranic", 2003, "Vishnu Bhatta Padekallu, editor"],
  ["ಅಗ್ನಿಮುಖಪ್ರಕಾಶ", "Agnimukhaprakasha", "ritual", 2005, "Anantakrishna Ghana Pathi Ama"],
  ["ಜ್ಯೋತಿಷಸಂವಾದ", "Jyotishasamvada", "sanskrit", 2005, "Vishnu Bhatta Padekallu; Srinivasa Bhatta Mitturu"],
  ["ಶ್ರೀದುರ್ಗಾಪೂಜಾವಿಧಿ", "Shri Durga Pujavidhi", "ritual", 2005, "Narayana Bhatta Ama; Narasimha Bhatta Padekallu"],
  ["ದೈನಂದಿನ ಉಪವಾಸ ಅಭ್ಯಾಸ", "Dainandina Upavasa Abhyasa", "ritual", 2006, "Srinivasa Bhatta Mitturu, editor"],
  ["ವೈದಿಕಸಂಭಾರ", "Vaidika Sambhara", "ritual", 2006, "Krishna Bhatta Purohita Mitturu"],
  ["ಶ್ರೀ ಸತ್ಯನಾರಾಯಣ ವ್ರತ ಕಥಾ", "Shri Satyanarayana Vrata Katha", "puranic", 2008, "Ganapathi Bhatta Permunda"],
  ["ವೇದ-ವೇದಾಂಗಪರಿವಾರ", "Veda-Vedanga Parivara", "sanskrit", 2010, "Vishnu Bhatta Padekallu, editor"],
  ["ಭಗವತ್ಪಾದ ಶ್ರೀಆದಿಶಂಕರಾಚಾರ್ಯರು", "Bhagavatpada Shri Adishankaracharyaru", "sanskrit", 2010, "Keshava Bhatta Korikkaru"],
  ["ಶ್ರೀಸತ್ಯಗಣಪತಿವ್ರತವಿಧಿ", "Shri Satyaganapati Vratavidhi", "ritual", 2012, "Venkataramana Bhatta Manjulagiri, editor"],
  ["ಶ್ರೀವರದಶಂಕರಪೂಜಾವಿಧಿ", "Shri Varadashankara Pujavidhi", "ritual", 2013, "Venkataramana Bhatta Manjulagiri, editor"],
  ["ಶ್ಲೋಕಸಮಾಹಾರಃ – ಸಂ. ೧", "Shlokasamaharah – Volume 1", "sanskrit", 2015, "Shankaranarayana Bhatta Kekkanaje, editor"],
  ["ಶ್ಲೋಕಸಮಾಹಾರ – ಸಂ. ೨", "Shlokasamahara – Volume 2", "sanskrit", 2015, "Srihari Sharma P. V., editor"],
  ["ಪುರಾಣಲೋಕ", "Puranaloka", "puranic", 2015, "Vishnu Bhatta Padekallu, editor"],
  ["ಪುರಾಣಯಾನ", "Puranayana", "puranic", 2015, "Subraya Sampaje"],
  ["ಶ್ರೀಗಂಗಾಕಲ್ಲೋಕ್ತಪೂಜಾವಿಧಿ (ಕನ್ನಡ)", "Shri Ganga Kallokta Pujavidhi (Kannada)", "ritual", 2015, "Srinivasa Bhatta Mitturu, editor"],
  ["ಶ್ರೀಗಂಗಾಕಲ್ಲೋಕ್ತಪೂಜಾವಿಧಿ (ದೇವನಾಗರಿ)", "Shri Ganga Kallokta Pujavidhi (Devanagari)", "ritual", 2015, "Srinivasa Bhatta Mitturu, editor"],
  ["ತೀರ್ಥಕ್ಷೇತ್ರಾದ್ಧವಿಧಿಃ", "Tirthakshetra Shraddhavidhi", "ritual", 2016, "Srinivasa Bhatta Mitturu, editor"],
  ["ತ್ಯಾಗರಾಜರ ಘನಪಂಚರತ್ನ ಕೀರ್ತನೆಗಳು", "Tyagarajara Ghana Pancharatna Kirtanegalu", "culture", 2016, "Madhur P. Balasubrahmanyam, editor"],
  ["ಬೆಳಗಿನ ನುಡಿ", "Belagina Nudi", "culture", 2016, "Vishnu Bhatta Padekallu"],
  ["ನವಾಗಾರಪ್ರವೇಶವಿಧಿ", "Navagara Praveshavidhi", "ritual", 2016, "Srinivasa Bhatta Mitturu, editor"],
  ["ಗೋದಾನಾದಿವಿಧಾನಮ್", "Godanadi Vidhanam", "ritual", 2017, "Srinivasa Bhatta Purohita Mitturu, editor"],
  ["ನೇತ್ರದಂದದೆ ನೋಟ", "Netradandade Nota", "culture", 2018, "Kavita Adoor"],
  ["ವೈಷ್ಣದೇವೀಸಂದರ್ಶನ", "Vaishnodevi Sandarshana", "culture", 2018, "Vishnu Bhatta Padekallu"],
  ["ಶ್ರೀಕೃಷ್ಣವ್ರತಕಲ್ಲೋಕ್ತ ಪೂಜಾ", "Shri Krishna Vratakallokta Puja", "ritual", 2018, "Thirumaleshwara Bhatta Purohita Mitturu, editor"],
  ["ಶಾರದಾರಾಧನಮ್ – ಸಿ.ಡಿ.", "Sharadaradhanam – CD", "culture", 2018, "Audio publication"],
  ["ಪುರೋಹಿತಸ್ಮರಣ", "Purohita Smarana", "culture", 2018, "Vishnu Bhatta Padekallu; Thirumaleshwara Bhatta Mitturu, editors"],
  ["ಶ್ರೀಸತ್ಯನಾರಾಯಣಪೂಜಾವಿಧಿಃ", "Shri Satyanarayana Pujavidhi", "ritual", 2018, "Venkataramana Bhatta Manjulagiri, editor"],
  ["ಶ್ರೀವಿಷ್ಣುಸಹಸ್ರನಾಮಸ್ತೋತ್ರಮ್", "Shri Vishnu Sahasranama Stotram", "puranic", 2018, "Venkataramana Bhatta Manjulagiri, editor"],
  ["ನಿತ್ಯಾಚಾರಗಳ ಮಹತ್ತ್ವ", "Nityacharagala Mahattva", "sanskrit", 2019, "Srinivasa Bhatta Purohita Mitturu"],
  ["ಸೌಂದರ್ಯ ಸೋಪಾನ", "Soundarya Sopana", "culture", 2019, "Narasimha Bhatta Padekallu; Vishnu Bhatta Padekallu, editor"],
  ["ಯಕ್ಷಗಾನಪ್ರಸಂಗಮಾಲಿಕಾ – ಸಂಪುಟ ೨", "Yakshagana Prasangamalika – Volume 2", "culture", 2019, "Shridhara D. S."],
  ["ಪುರೋಹಿತ ಪ್ರವರ ಮಿತ್ತೂರು ತಿಮ್ಮಯ್ಯ ಭಟ್ಟರು", "Purohita Pravara Mitturu Thimmayya Bhattaru", "culture", 2019, "Vishnu Bhatta Padekallu"],
  ["ವೇದನಾದಮ್ – ಸಿ.ಡಿ.", "Vedanadam – CD", "culture", 2020, "Audio publication"],
  ["ಸಂಸ್ಕಾರವಿವರಣೆ", "Samskara Vivarané", "ritual", 2020, "Srinivasa Bhatta Purohita Mitturu"],
  ["ಶ್ರೀಫೇರಂಡಸಂಹಿತಾ", "Shri Gheranda Samhita", "yoga", 2020, "H. Ganapathi Joisa, annotated translation"],
  ["ಶ್ರೀರಾಮಕಲ್ಲೋಕ್ತಪೂಜಾ", "Shri Rama Kallokta Puja", "ritual", 2020, "Thirumaleshwara Bhatta Mitturu, editor"],
  ["ಬಡೆಕ್ಕಿಲ ವಂಶಾವಳಿ", "Badekkila Vamshavali", "culture", 2021, "Shridhara Bhatta Badekkila"],
  ["ಹಿರಿಯರಿವರು", "Hiriyarivaru", "culture", 2021, "Vishnu Bhatta Padekallu"],
  ["ಭಾಗವತಸಪ್ತಾಹಯಜ್ಞ", "Bhagavata Saptaha Yajna", "puranic", 2022, "Vishnu Bhatta Padekallu, editor"],
  ["ಹಠಪ್ರದೀಪಿಕಾ", "Hathapradipika", "yoga", 2022, "H. Ganapathi Joisa, annotated translation"],
  ["ಮಹಾನ್ಯಾಸಪ್ರಯೋಗ", "Mahanyasa Prayoga", "ritual", 2023, "Srinivasa Bhatta Purohita Mitturu, editor"],
  ["ಧರ್ಮಕುತೂಹಲ", "Dharmakutuhala", "sanskrit", 2023, "Narayana Shanbhag, editor"],
  ["ಶಿವಯೋಗದೀಪಿಕಾ", "Shivayogadipika", "yoga", 2024, "H. Ganapathi Joisa, annotated translation"],
  ["ವಿದ್ಯಾಭಿರಾಮ (ಸ್ಮರಣಸಂಚಿಕೆ)", "Vidyabhirama (Commemorative Volume)", "culture", 2024, "Mitturu Samprathishtaana"]
];

const bookDescriptions = {
  "ಕನ್ನಡ ಸಂಧ್ಯಾಭಾಷ್ಯ": { en: "A detailed commentary on Yajurvedic Sandhyavandana, explaining its meaning and significance through scriptural sources and 17 interpretations of the Gayatri mantra.", kn: "ಯಜುರ್ವೇದೀಯ ಸಂಧ್ಯಾವಂದನೆಯ ಅರ್ಥ ಮತ್ತು ಮಹತ್ತ್ವವನ್ನು ಶಾಸ್ತ್ರಗ್ರಂಥಗಳ ಆಧಾರಗಳೊಂದಿಗೆ ವಿವರಿಸುವ ವ್ಯಾಖ್ಯಾನ. ಗಾಯತ್ರೀ ಮಂತ್ರದ 17 ವಿಧದ ಅರ್ಥಾನುಸಂಧಾನಗಳನ್ನೂ ಒಳಗೊಂಡಿದೆ." },
  "ಸಂಧ್ಯಾವಂದನಮ್": { en: "A practical collection of daily observances, including morning prayers, bathing, Sandhyopasana, food mantras, sacred-thread rites and Agnikarya.", kn: "ಪ್ರಾತಃಸ್ಮರಣೆ, ನಿತ್ಯಸ್ನಾನ, ಸಂಧ್ಯೋಪಾಸನೆ, ಭೋಜನಮಂತ್ರ, ಯಜ್ಞೋಪವೀತಧಾರಣೆ ಮತ್ತು ಅಗ್ನಿಕಾರ್ಯ ಮೊದಲಾದ ನಿತ್ಯವಿಧಿಗಳ ಸಂಗ್ರಹ." },
  "ಪಂಚಾಯತನ ದೇವರ ಪೂಜೆ": { en: "Introduces forms of devotion, Panchayatana worship, the five deities and elements, and the significance of the ritual bell, followed by worship procedures.", kn: "ಸಗುಣ-ನಿರ್ಗುಣ ಭಕ್ತಿ, ಪಂಚಾಯತನ ಪೂಜೆ, ಪಂಚದೇವತೆ, ಪಂಚತತ್ತ್ವ ಮತ್ತು ಘಂಟಾನಾದದ ಮಹತ್ತ್ವವನ್ನು ವಿವರಿಸಿ ಪೂಜಾಕ್ರಮವನ್ನು ನಿರೂಪಿಸುತ್ತದೆ." },
  "ವಿಷ್ಣುಪ್ರೋಕ್ತ ಶಿವಸಹಸ್ರನಾಮ": { en: "A ritual collection featuring the Vishnuprokt Shiva Sahasranama hymn, name lists, ashtottara and bilva worship, and the Uma-Maheshwara puja.", kn: "ವಿಷ್ಣುಪ್ರೋಕ್ತ ಶಿವಸಹಸ್ರನಾಮ ಸ್ತೋತ್ರ, ನಾಮಾವಳಿ, ಅಷ್ಟೋತ್ತರ, ಬಿಲ್ವಾಷ್ಟೋತ್ತರ ಮತ್ತು ಉಮಾಮಹೇಶ್ವರ ಪೂಜೆಯನ್ನು ಒಳಗೊಂಡಿದೆ." },
  "ಆದಿತ್ಯಾದಿನವಗ್ರಹಪೂಜಾವಿಧಿಃ": { en: "Explains worship of the Sun and the nine planets, with concise procedures, name lists, hymns and reference tables for colours and ritual materials.", kn: "ಆದಿತ್ಯಾದಿ ನವಗ್ರಹಗಳ ಪೂಜಾಕ್ರಮದೊಂದಿಗೆ ಸಂಕ್ಷಿಪ್ತ ವಿಧಾನ, ನಾಮಾವಳಿ, ಸ್ತುತಿ ಹಾಗೂ ಗ್ರಹಗಳ ಬಣ್ಣ-ದ್ರವ್ಯಗಳ ಕೋಷ್ಟಕಗಳನ್ನು ನೀಡುತ್ತದೆ." },
  "ಶ್ರೀರಾಮಚರಿತಾಮೃತಮ್": { en: "A substantial retelling of the Ramayana shaped for Yakshagana performance and used as a reference by many Yakshagana interpreters.", kn: "ಯಕ್ಷಗಾನೀಯ ಪರಿಸರಕ್ಕೆ ಅನುಕೂಲವಾಗುವಂತೆ ರಚಿಸಿದ ರಾಮಾಯಣ ಗ್ರಂಥ. ಸುಮಾರು 800ಕ್ಕೂ ಅಧಿಕ ಪುಟಗಳ ಈ ಕೃತಿ ಯಕ್ಷಗಾನ ಅರ್ಥಧಾರಿಗಳಿಗೆ ಆಧಾರಗ್ರಂಥವಾಗಿದೆ." },
  "ಮಂತ್ರಮಂಜರೀ": { en: "A collection of Rigvedic and Yajurvedic mantras with contextual notes, including Rudra, Chamaka, Surya, Ganapati, Ambika, Shiva and Vishnu mantras.", kn: "ಋಗ್ವೇದ ಮತ್ತು ಯಜುರ್ವೇದ ಮಂತ್ರಗಳ ಸಾಂದರ್ಭಿಕ ಟಿಪ್ಪಣಿಯುಕ್ತ ಸಂಕಲನ. ರುದ್ರ, ಚಮಕ, ಸೂರ್ಯ, ಗಣಪತಿ, ಅಂಬಿಕಾ, ಶಿವ ಮತ್ತು ವಿಷ್ಣು ಮಂತ್ರಗಳೂ ಇವೆ." },
  "ವೈದಿಕಾನುಬಂಧ ಸಮುಚ್ಚಯ": { en: "A concise compilation of customary post-ritual observances, including Mahashirvada and related practices.", kn: "ವೈದಿಕ ಕಾರ್ಯಕ್ರಮಗಳ ನಂತರ ರೂಢಿಯಲ್ಲಿರುವ ಮಹಾಶೀರ್ವಾದ ಮೊದಲಾದ ಅನುಬಂಧ ವಿಷಯಗಳ ಸಂಗ್ರಹ." },
  "ಶಾರದಾರಾಧನಮ್": { en: "A two-part work on Saraswati and Sharada worship, with puja procedures, sahasranamas, stotras and the rare Akshararambha rite.", kn: "ಪೂಜಾ ಮತ್ತು ಸ್ತೋತ್ರ ವಿಭಾಗಗಳಿರುವ ಸರಸ್ವತೀ-ಶಾರದಾ ಆರಾಧನಾ ಗ್ರಂಥ. ಪೂಜಾಕ್ರಮ, ಸಹಸ್ರನಾಮ, ಸ್ತೋತ್ರಗಳು ಮತ್ತು ಅಪರೂಪದ ಅಕ್ಷರಾರಂಭವಿಧಿ ಸೇರಿವೆ." },
  "ಅಗ್ನಿಮುಖಪ್ರಕಾಶ": { en: "A revised guide to the Bodhayana Agnimukha ritual, with sutra-based resolutions to questions arising in other procedures.", kn: "ಪರಿಷ್ಕೃತ ಬೋಧಾಯನೀಯ ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗವನ್ನು ವಿವರಿಸುವ ಗ್ರಂಥ. ಇತರ ಪ್ರಯೋಗಗಳಲ್ಲಿನ ಜಿಜ್ಞಾಸೆಗಳಿಗೆ ಸೂತ್ರಾನುಸಾರಿ ನಿರ್ಣಯಗಳನ್ನೂ ನೀಡುತ್ತದೆ." },
  "ಜ್ಯೋತಿಷಸಂವಾದ": { en: "Presents papers and question-and-answer discussions from a Samprathishtaana seminar on Jyotisha and related traditional disciplines.", kn: "ಸಂಪ್ರತಿಷ್ಠಾನದ ಜ್ಯೋತಿಷ ವಿಚಾರಗೋಷ್ಠಿಯಲ್ಲಿ ಮಂಡನೆಯಾದ ಲೇಖನಗಳು ಮತ್ತು ಜಿಜ್ಞಾಸುಗಳ ಪ್ರಶ್ನೆಗಳಿಗೆ ನೀಡಿದ ಉತ್ತರಗಳ ಸಂಕಲನ." },
  "ಶ್ರೀದುರ್ಗಾಪೂಜಾವಿಧಿ": { en: "A concise Durga puja manual with expanded explanations, including coverings, sahasranama, associated hymns and supplementary prayers.", kn: "ಸಂಕ್ಷಿಪ್ತ ದುರ್ಗಾಪೂಜಾ ವಿಧಾನಕ್ಕೆ ವಿಸ್ತರಣೆಯ ವಿವರಣೆಗಳನ್ನು ಸೇರಿಸಿರುವ ಗ್ರಂಥ. ಆವರಣಪೂಜೆ, ಸಹಸ್ರನಾಮ, ಸೂಕ್ತ, ಸ್ತೋತ್ರ ಮತ್ತು ಪ್ರಾರ್ಥನೆಗಳಿವೆ." },
  "ದೈನಂದಿನ ಉಪವಾಸ ಅಭ್ಯಾಸ": { en: "A practical collection of daily Vedic and domestic rites, including Brahmayajna, tarpanas, Upasana fire rites and Vaishvadeva procedures.", kn: "ಬ್ರಹ್ಮಯಜ್ಞ, ನಿತ್ಯ ತರ್ಪಣ, ಔಪಾಸನಾಗ್ನಿ, ವೈಶ್ವದೇವ ಮತ್ತು ಸಂಬಂಧಿತ ದೈನಂದಿನ ಪ್ರಯೋಗಗಳ ವಿವರವಾದ ಸಂಕಲನ." },
  "ವೈದಿಕಸಂಭಾರ": { en: "A multi-part reference to materials and procedures for Vedic rites, samskaras, homas, vows, shraddha and funeral observances.", kn: "ವೈದಿಕ ಕ್ರಿಯೆಗಳಿಗೆ ಬೇಕಾದ ದ್ರವ್ಯಗಳು ಮತ್ತು ವಿಧಾನಗಳ ಸಮಗ್ರ ಕೈಪಿಡಿ. ಸಂಸ್ಕಾರ, ಹೋಮ, ವ್ರತ, ಶ್ರಾದ್ಧ ಮತ್ತು ಅಪರಕರ್ಮಗಳ ಸಾಮಗ್ರಿಗಳಿವೆ." },
  "ಶ್ರೀ ಸತ್ಯನಾರಾಯಣ ವ್ರತ ಕಥಾ": { en: "A Kannada Shatpadi translation of the story of the Satyanarayana vrata.", kn: "ಸತ್ಯನಾರಾಯಣ ವ್ರತಕಥೆಯನ್ನು ಕನ್ನಡ ಷಟ್ಪದಿಯಲ್ಲಿ ಭಾಷಾಂತರಿಸಿದ ಕೃತಿ." },
  "ವೇದ-ವೇದಾಂಗಪರಿವಾರ": { en: "Essays from a lecture series introducing the Vedas, Vedangas, Upanishads, schools of thought, ritual traditions and Puranas.", kn: "ವೇದ, ವೇದಾಂಗ, ಉಪನಿಷತ್ತು, ದರ್ಶನ, ಧರ್ಮಶಾಸ್ತ್ರ, ವೈದಿಕ ಕರ್ಮಪರಂಪರೆ ಮತ್ತು ಪುರಾಣಗಳ ಕುರಿತು ಉಪನ್ಯಾಸಲೇಖನಗಳ ಸಂಕಲನ." },
  "ಭಗವತ್ಪಾದ ಶ್ರೀಆದಿಶಂಕರಾಚಾರ್ಯರು": { en: "A concise account of the life and achievements of Shri Adi Shankaracharya.", kn: "ಶ್ರೀ ಆದಿಶಂಕರಾಚಾರ್ಯರ ಜೀವನ ಮತ್ತು ಸಾಧನೆಗಳ ಕುರಿತಾದ ಸಂಕ್ಷಿಪ್ತ ಕೃತಿ." },
  "ಶ್ರೀಸತ್ಯಗಣಪತಿವ್ರತವಿಧಿ": { en: "A guide to the Satya Ganapati vrata, including Ganapati Sahasranama, an explained vrata story and Ganesha hymns.", kn: "ಸತ್ಯಗಣಪತಿ ವ್ರತವಿಧಿ, ಗಕಾರ ಗಣಪತಿ ಸಹಸ್ರನಾಮ, ಅರ್ಥಸಹಿತ ವ್ರತಕಥೆ ಮತ್ತು ಗಣೇಶ ಸೂಕ್ತಾದಿಗಳನ್ನು ಒಳಗೊಂಡಿದೆ." },
  "ಶ್ರೀವರದಶಂಕರಪೂಜಾವಿಧಿ": { en: "Details the Varadashankara puja and vrata, with Shiva names, an explained vrata story, Rudra Sukta and supplementary observances.", kn: "ವರದಶಂಕರ ಪೂಜಾ-ವ್ರತವಿಧಿ, ಶಿವಸಹಸ್ರನಾಮಾವಳಿ, ಅರ್ಥಸಹಿತ ವ್ರತಕಥೆ, ರುದ್ರಸೂಕ್ತ ಮತ್ತು ಅನುಬಂಧಗಳನ್ನು ಒಳಗೊಂಡಿದೆ." },
  "ಶ್ಲೋಕಸಮಾಹಾರಃ – ಸಂ. ೧": { en: "A study-friendly, alphabetically arranged selection of well-known verses with meanings and brief poet notes, also useful for Antyakshari.", kn: "ಪ್ರಸಿದ್ಧ ಶ್ಲೋಕಗಳು ಮತ್ತು ಸಾಮಾನ್ಯ ಅರ್ಥವನ್ನು ಅಕಾರಾದಿಕ್ರಮದಲ್ಲಿ ನೀಡಿರುವ ಸಂಕಲನ. ವಿದ್ಯಾರ್ಥಿಗಳ ಅಧ್ಯಯನ ಮತ್ತು ಅಂತ್ಯಾಕ್ಷರಿ ಸ್ಪರ್ಧೆಗೆ ಉಪಯುಕ್ತ." },
  "ಶ್ಲೋಕಸಮಾಹಾರ – ಸಂ. ೨": { en: "The continuation of Volume 1, featuring 124 verses with meanings, devotional hymns and brief poet notes with source references.", kn: "ಶ್ಲೋಕಸಮಾಹಾರ ಸಂ. ೧ರ ಮುಂದುವರಿದ ಭಾಗ. ಅರ್ಥಸಹಿತ 124 ಶ್ಲೋಕಗಳು, ಸ್ತೋತ್ರಗಳು ಮತ್ತು ಆಕರಗ್ರಂಥಗಳ ಉಲ್ಲೇಖಗಳಿವೆ." },
  "ಪುರಾಣಲೋಕ": { en: "A collection of written lectures on the Puranas and Upapuranas delivered by scholars across Karnataka and Chennai.", kn: "ಕರ್ನಾಟಕದ ಹಲವು ಕಡೆಗಳಲ್ಲಿ ಮತ್ತು ಚೆನ್ನೈಯಲ್ಲಿ ನಡೆದ ಪುರಾಣಪ್ರವಚನಗಳ ಲಿಖಿತರೂಪದ ಸಂಕಲನ. ಪುರಾಣ-ಉಪಪುರಾಣಗಳ ಪರಿಚಯಕ್ಕೆ ಸಹಾಯಕ." },
  "ಪುರಾಣಯಾನ": { en: "An extensive, alphabetically arranged lexicon of Puranic figures, presenting concise biographies in story form.", kn: "ಪೌರಾಣಿಕ ವ್ಯಕ್ತಿಗಳ ಅಕಾರಾದಿ ಪರಿಚಯಕೋಶ. ಸುಮಾರು 488 ಪುಟಗಳಲ್ಲಿ ಸಂಕ್ಷಿಪ್ತ ಜೀವನಕಥೆಗಳನ್ನು ನೀಡುತ್ತದೆ." },
  "ಶ್ರೀಗಂಗಾಕಲ್ಲೋಕ್ತಪೂಜಾವಿಧಿ (ಕನ್ನಡ)": { en: "A Kannada-script guide to Ganga worship and pilgrimage rites, including Mahatarpana and related sacred-site observances.", kn: "ಕಾಶಿ ಮೊದಲಾದ ತೀರ್ಥಯಾತ್ರೆ, ಗಂಗಾಕಲ್ಲೋಕ್ತ ಪೂಜೆ, ಮಹಾತರ್ಪಣ ಮತ್ತು ಸಂಬಂಧಿತ ವಿಧಿಗಳನ್ನು ಕನ್ನಡ ಲಿಪಿಯಲ್ಲಿ ವಿವರಿಸುತ್ತದೆ." },
  "ಶ್ರೀಗಂಗಾಕಲ್ಲೋಕ್ತಪೂಜಾವಿಧಿ (ದೇವನಾಗರಿ)": { en: "The Ganga Kallokta puja text in Devanagari script, making the same ritual guide accessible to readers outside the Kannada-script tradition.", kn: "ಕನ್ನಡ ಲಿಪಿಯ ಗಂಗಾಕಲ್ಲೋಕ್ತ ಪೂಜಾವಿಧಿಯನ್ನೇ ದೇವನಾಗರಿ ಲಿಪಿಯಲ್ಲಿ ನೀಡಿರುವ ಆವೃತ್ತಿ. ಕನ್ನಡೇತರ ಓದುಗರಿಗೂ ಅನುಕೂಲಕರವಾಗಿದೆ." },
  "ತೀರ್ಥಕ್ಷೇತ್ರಾದ್ಧವಿಧಿಃ": { en: "A guide to pilgrimage-site shraddha and related rites, including asthi purification, immersion, sacred bathing and associated procedures.", kn: "ತೀರ್ಥಕ್ಷೇತ್ರ ಶ್ರಾದ್ಧ, ಅಸ್ಥಿಶುದ್ಧಿ, ಅಸ್ಥಿವಿಸರ್ಜನೆ, ತೀರ್ಥಸ್ನಾನ ಮತ್ತು ಸಂಬಂಧಿತ ವಿಧಿಗಳನ್ನು ವಿವರಿಸುವ ಗ್ರಂಥ." },
  "ತ್ಯಾಗರಾಜರ ಘನಪಂಚರತ್ನ ಕೀರ್ತನೆಗಳು": { en: "The five Ghana Pancharatna kirtanas of Tyagaraja with meanings and musical notation, prepared for group singing and music study.", kn: "ತ್ಯಾಗರಾಜರ ಐದು ಘನಪಂಚರತ್ನ ಕೀರ್ತನೆಗಳನ್ನು ಅರ್ಥ ಮತ್ತು ಸ್ವರಪ್ರಸ್ತಾರಸಹಿತವಾಗಿ ನೀಡಿದೆ. ಗೋಷ್ಠಿಗಾಯನ ಮತ್ತು ಸಂಗೀತಾಭ್ಯಾಸಕ್ಕೆ ಉಪಯುಕ್ತ." },
  "ಬೆಳಗಿನ ನುಡಿ": { en: "A collection of 38 concise reflections originally broadcast on All India Radio, covering values and everyday life.", kn: "ಆಕಾಶವಾಣಿಯಲ್ಲಿ ಪ್ರಸಾರಗೊಂಡ 38 ಚಿಂತನಗಳ ಸಂಕ್ಷಿಪ್ತ ಲೇಖನರೂಪದ ಸಂಕಲನ." },
  "ನವಾಗಾರಪ್ರವೇಶವಿಧಿ": { en: "A practical manual for house entry and Vastu rites, with procedures for construction, consecration, homa, worship and related topics.", kn: "ಗೃಹಪ್ರವೇಶ, ವಾಸ್ತುಪೂಜೆ, ಹೋಮ, ಬಲಿ ಮತ್ತು ಗೃಹಾರಂಭದ ವಿಧಿಗಳೊಂದಿಗೆ ಮನೆ-ದೇವಾಲಯ ನಿರ್ಮಾಣಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ವಾಸ್ತುಪರಿಚಯವನ್ನು ನೀಡುತ್ತದೆ." },
  "ಗೋದಾನಾದಿವಿಧಾನಮ್": { en: "Describes procedures and significance for gifts such as cows, lamps, land and other traditional forms of dana.", kn: "ಗೋದಾನ, ದೀಪದಾನ, ಭೂಮಿದಾನ ಮತ್ತು ಇತರ ದಾನವಿಧಾನಗಳ ಕ್ರಮ ಹಾಗೂ ಮಹತ್ತ್ವವನ್ನು ವಿವರಿಸುತ್ತದೆ." },
  "ನೇತ್ರದಂದದೆ ನೋಟ": { en: "A simple interpretive guide to D. V. Gundappa’s Mankuthimmana Kagga, reflecting on its verses and ideas.", kn: "ಡಿ.ವಿ.ಜಿ.ಯವರ ಮಂಕುತಿಮ್ಮನ ಕಗ್ಗದ ಪದ್ಯಗಳಿಗೆ ಸರಳ ವಿವರಣೆ ನೀಡುವ ವ್ಯಾಖ್ಯಾನರೂಪದ ಕೃತಿ." },
  "ವೈಷ್ಣದೇವೀಸಂದರ್ಶನ": { en: "A pilgrimage companion to Vaishno Devi, combining the shrine’s significance, history, travel experience, stories and practical guidance.", kn: "ವೈಷ್ಣದೇವೀ ಕ್ಷೇತ್ರದ ಮಹತ್ತ್ವ, ಐತಿಹ್ಯ, ಯಾತ್ರಾನುಭವ, ಕಥೆಗಳು ಮತ್ತು ಪ್ರವಾಸಮಾರ್ಗದರ್ಶನವನ್ನು ಒಳಗೊಂಡಿದೆ." },
  "ಶ್ರೀಕೃಷ್ಣವ್ರತಕಲ್ಲೋಕ್ತ ಪೂಜಾ": { en: "A collection of Krishna vrata and puja procedures, Sahasranama, the birth story, homa and Janmashtami observances.", kn: "ಶ್ರೀಕೃಷ್ಣ ವ್ರತ-ಪೂಜೆ, ಸಹಸ್ರನಾಮ, ಜನ್ಮಕಥೆ, ಹೋಮ ಮತ್ತು ಜನ್ಮಾಷ್ಟಮೀ ವ್ರತೋದ್ಯಾಪನ ವಿಧಾನಗಳನ್ನು ಒಳಗೊಂಡಿದೆ." },
  "ಶಾರದಾರಾಧನಮ್ – ಸಿ.ಡಿ.": { en: "An audio recording of the Saraswati stotra included in the book Sharadaradhanam.", kn: "ಶಾರದಾರಾಧನಮ್ ಗ್ರಂಥದಲ್ಲಿರುವ ಸರಸ್ವತೀ ಸ್ತೋತ್ರದ ಧ್ವನಿಮುದ್ರಣ." },
  "ಪುರೋಹಿತಸ್ಮರಣ": { en: "A centenary commemorative volume on Shankaranarayana Bhatta and Maike Shankaranarayana Bhatta, with biographical, Vedic and literary contributions.", kn: "ಮಿತ್ತೂರು ಪುರೋಹಿತ ಶಂಕರನಾರಾಯಣ ಭಟ್ಟರು ಮತ್ತು ಮೈಕೆ ಶಂಕರನಾರಾಯಣ ಭಟ್ಟರ ಶತಮಾನಸ್ಮರಣ ಸಂಚಿಕೆ. ಜೀವನ, ವೈದಿಕ ವಾಙ್ಮಯ ಮತ್ತು ಸಾಹಿತ್ಯಲೇಖನಗಳನ್ನು ಒಳಗೊಂಡಿದೆ." },
  "ಶ್ರೀಸತ್ಯನಾರಾಯಣಪೂಜಾವಿಧಿಃ": { en: "A guide to Satyanarayana puja, with the vrata story, explanatory material, hymns and Vishnu Sahasranama.", kn: "ಸತ್ಯನಾರಾಯಣ ಪೂಜಾವಿಧಿ, ಅರ್ಥಸಹಿತ ಕಥೆ, ಸೂಕ್ತಗಳು ಮತ್ತು ವಿಷ್ಣುಸಹಸ್ರನಾಮವನ್ನು ಒಳಗೊಂಡಿದೆ." },
  "ಶ್ರೀವಿಷ್ಣುಸಹಸ್ರನಾಮಸ್ತೋತ್ರಮ್": { en: "A compact text prepared for recitation of the Vishnu Sahasranama stotra.", kn: "ವಿಷ್ಣುಸಹಸ್ರನಾಮ ಸ್ತೋತ್ರದ ಪಾರಾಯಣಕ್ಕೆ ಅನುಕೂಲವಾದ ಚಿಕ್ಕ ಪುಸ್ತಕ." },
  "ನಿತ್ಯಾಚಾರಗಳ ಮಹತ್ತ್ವ": { en: "A question-and-answer guide addressing common questions about daily observances and their significance.", kn: "ನಿತ್ಯಾಚಾರ ಮತ್ತು ನಿತ್ಯೋಪಾಸನೆಯ ಕುರಿತು ಉದ್ಭವಿಸುವ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರ ನೀಡುವ ಪ್ರಶೋತ್ತರರೂಪದ ಕೃತಿ." },
  "ಸೌಂದರ್ಯ ಸೋಪಾನ": { en: "A collection of essays by Narasimha Bhatta Padekallu, offering cultural perspectives and reflections on traditional subjects.", kn: "ಪಾದೇಕಲ್ಲು ನರಸಿಂಹ ಭಟ್ಟರ ವಿವಿಧ ಲೇಖನಗಳ ಸಂಕಲನ. ಸಂಸ್ಕೃತಿಯ ವಿಷಯಗಳು ಮತ್ತು ಶಾಸ್ತ್ರವಿಚಾರಗಳ ಕುರಿತ ಒಳನೋಟಗಳನ್ನು ನೀಡುತ್ತದೆ." },
  "ಯಕ್ಷಗಾನಪ್ರಸಂಗಮಾಲಿಕಾ – ಸಂಪುಟ ೨": { en: "A collection of 13 mythological Yakshagana prasangas by senior writer Shridhara D. S., with story summaries and introductory notes.", kn: "ಶ್ರೀಧರ ಡಿ.ಎಸ್. ಅವರ 13 ಪೌರಾಣಿಕ ಯಕ್ಷಗಾನ ಪ್ರಸಂಗಗಳ ಸಂಕಲನ. ಕಥಾಸಾರ ಮತ್ತು ಭೂಮಿಕೆಗಳನ್ನೂ ಒಳಗೊಂಡಿದೆ." },
  "ಪುರೋಹಿತ ಪ್ರವರ ಮಿತ್ತೂರು ತಿಮ್ಮಯ್ಯ ಭಟ್ಟರು": { en: "A detailed biography of Mitturu Purohitha Thimmayya Bhatta, portraying his scholarship, values, priestly service and care for students.", kn: "ಮಿತ್ತೂರು ಪುರೋಹಿತ ತಿಮ್ಮಯ್ಯ ಭಟ್ಟರ ಸಾರ್ಥಕ ಜೀವನ, ಮೌಲ್ಯಗಳು, ಪೌರೋಹಿತ್ಯ ಪಾಂಡಿತ್ಯ ಮತ್ತು ಶಿಷ್ಯವಾತ್ಸಲ್ಯವನ್ನು ವಿವರಿಸುವ ಜೀವನಚರಿತ್ರೆ." },
  "ವೇದನಾದಮ್ – ಸಿ.ಡಿ.": { en: "An audio publication titled Veda Nadam.", kn: "ವೇದನಾದಮ್ ಶೀರ್ಷಿಕೆಯ ಧ್ವನಿಮುದ್ರಣ ಪ್ರಕಟಣೆ." },
  "ಸಂಸ್ಕಾರವಿವರಣೆ": { en: "A clear introduction to the sixteen samskaras, their significance and selected supporting scriptural verses.", kn: "ಷೋಡಶ ಸಂಸ್ಕಾರಗಳ ವಿವರ ಮತ್ತು ಮಹತ್ತ್ವವನ್ನು ಸರಳವಾಗಿ ತಿಳಿಸಿ, ಅಗತ್ಯವಾದ ಆಧಾರಶ್ಲೋಕಗಳನ್ನೂ ನೀಡುತ್ತದೆ." },
  "ಶ್ರೀಫೇರಂಡಸಂಹಿತಾ": { en: "An annotated Kannada translation of a Hatha Yoga text covering cleansing practices, asana, mudra, pranayama, meditation and samadhi.", kn: "ಷಟ್ಕರ್ಮ, ಆಸನ, ಮುದ್ರೆ, ಪ್ರಾಣಾಯಾಮ, ಧ್ಯಾನ ಮತ್ತು ಸಮಾಧಿಯೋಗಗಳನ್ನು ಒಳಗೊಂಡ ಹಠಯೋಗಗ್ರಂಥದ ಸಟಿಪ್ಪಣ ಕನ್ನಡ ಭಾಷಾಂತರ." },
  "ಶ್ರೀರಾಮಕಲ್ಲೋಕ್ತಪೂಜಾ": { en: "A ritual guide to Rama Kallokta puja, with Rama Sahasranama, Taraka yajna, hymns and Rama Navami observances.", kn: "ಶ್ರೀರಾಮ ಕಲ್ಲೋಕ್ತ ಪೂಜೆ, ರಾಮಸಹಸ್ರನಾಮ, ರಾಮತಾರಕಯಜ್ಞ, ಸ್ತೋತ್ರ ಮತ್ತು ರಾಮನವಮೀ ವ್ರತೋದ್ಯಾಪನದ ವಿವರಗಳಿವೆ." },
  "ಬಡೆಕ್ಕಿಲ ವಂಶಾವಳಿ": { en: "A family history documenting the lineage, background and achievements of a branch of the Badekkila family.", kn: "ಬಡೆಕ್ಕಿಲ ಮನೆತನದ ಒಂದು ವಿಭಾಗದ ವಂಶಪರಂಪರೆ, ವಿವರಗಳು ಮತ್ತು ಸಾಧನೆಗಳನ್ನು ದಾಖಲಿಸುವ ಕೃತಿ." },
  "ಹಿರಿಯರಿವರು": { en: "Portraits of elders remembered for their lives and accomplishments, including people known personally to the author.", kn: "ಜೀವನದಲ್ಲಿ ಹಲವು ಸಾಧನೆ ಮಾಡಿದ ಹಿರಿಯರ ವ್ಯಕ್ತಿಚಿತ್ರಗಳು. ಲೇಖಕರಿಗೆ ನೇರ ಪರಿಚಯವಿದ್ದವರ ಕುರಿತು ಹೆಚ್ಚಿನ ವಿವರಗಳಿವೆ." },
  "ಭಾಗವತಸಪ್ತಾಹಯಜ್ಞ": { en: "A sourcebook for Bhagavata Saptaha, with ritual procedures, recitation guidance and the Bhagavata Mahatmya from the Padma Purana.", kn: "ಭಾಗವತ ಸಪ್ತಾಹ ಯಜ್ಞವಿಧಿ, ಪಾರಾಯಣಕ್ರಮ ಮತ್ತು ಪದ್ಮಪುರಾಣದ ಭಾಗವತಮಾಹಾತ್ಮ್ಯವನ್ನು ಒಳಗೊಂಡ ಆಕರಗ್ರಂಥ." },
  "ಹಠಪ್ರದೀಪಿಕಾ": { en: "An annotated Kannada translation of the Hatha Yoga classic, with verses, explanations, summaries and an alphabetical verse index.", kn: "ಆಸನ, ಪ್ರಾಣಾಯಾಮ, ಮುದ್ರೆ, ರಾಜಯೋಗ ಮತ್ತು ಯೋಗಚಿಕಿತ್ಸೆಯನ್ನು ವಿವರಿಸುವ ಹಠಯೋಗಗ್ರಂಥದ ಸಟಿಪ್ಪಣ ಕನ್ನಡ ಭಾಷಾಂತರ." },
  "ಮಹಾನ್ಯಾಸಪ್ರಯೋಗ": { en: "A practical guide to Mahanyasa and related Shaiva recitations, including Laghunyasa, Rudram, Chamakam and supplementary procedures.", kn: "ಮಹಾನ್ಯಾಸ, ಲಘುನ್ಯಾಸ, ದಶಶಾಂತಿ, ಶ್ರೀರುದ್ರ, ಚಮಕ ಮತ್ತು ಶಿವಾನುಷ್ಠಾನದ ಸಂಬಂಧಿತ ಕ್ರಮಗಳನ್ನು ವಿವರಿಸುವ ಪ್ರಯೋಗಗ್ರಂಥ." },
  "ಧರ್ಮಕುತೂಹಲ": { en: "An inquiry into the many meanings of dharma, bringing classical sources and modern perspectives together for clear study.", kn: "ಧರ್ಮಪದದ ವಿವಿಧ ಅರ್ಥಗಳನ್ನು ಪ್ರಾಚೀನ ಗ್ರಂಥಗಳು ಮತ್ತು ಆಧುನಿಕ ವಿಚಾರಧಾರೆಗಳ ಆಧಾರದಿಂದ ಪರಿಶೀಲಿಸುವ ಅಧ್ಯಯನಗ್ರಂಥ." },
  "ಶಿವಯೋಗದೀಪಿಕಾ": { en: "An annotated Kannada translation of the Shivayogadipika, a traditional text for the study and practice of yoga.", kn: "ಯೋಗಾಭ್ಯಾಸದ ಪಠ್ಯಗ್ರಂಥವಾದ ಶಿವಯೋಗದೀಪಿಕದ ಸಟಿಪ್ಪಣ ಕನ್ನಡ ಭಾಷಾಂತರ." },
  "ವಿದ್ಯಾಭಿರಾಮ (ಸ್ಮರಣಸಂಚಿಕೆ)": { en: "A commemorative volume marking the opening of Vidya Kuteera, with a history and outlook of the Samprathishtaana and scholarly essays on the Ramayana.", kn: "ವಿದ್ಯಾಕುಟೀರದ ಲೋಕಾರ್ಪಣೆಯ ಸಂದರ್ಭದಲ್ಲಿ ಪ್ರಕಟಿಸಿದ ಸ್ಮರಣಸಂಚಿಕೆ. ಸಂಪ್ರತಿಷ್ಠಾನದ ಹಿನ್ನೋಟ-ಮುನ್ನೋಟ ಮತ್ತು ರಾಮಾಯಣದ ಕುರಿತ ವಿದ್ವತ್ಪೂರ್ಣ ಲೇಖನಗಳಿವೆ." }
};

const categoryLabels = {
  ritual: { en: "Vedic & ritual", kn: "ವೈದಿಕ" },
  sanskrit: { en: "Sanskrit & scholarship", kn: "ಸಂಸ್ಕೃತ" },
  puranic: { en: "Puranic & devotional", kn: "ಪುರಾಣ" },
  culture: { en: "Culture & biography", kn: "ಸಂಸ್ಕೃತಿ" },
  yoga: { en: "Yoga & wellbeing", kn: "ಯೋಗ" }
};
const coverColors = ["#476c58", "#9d543e", "#4c6172", "#a17c40", "#655c78", "#526b68"];
const bookGrid = document.querySelector("#book-grid");
const cart = new Map();
let language = "kn";
try {
  language = localStorage.getItem("site-language") === "en" ? "en" : "kn";
} catch {}

function renderBooks() {
  const searchInput = document.querySelector("#book-search");
  const filterSelect = document.querySelector("#book-filter");
  const countNode = document.querySelector("#catalogue-count");
  if (!bookGrid || !searchInput || !filterSelect || !countNode) return;

  const query = searchInput.value.trim().toLocaleLowerCase();
  const category = filterSelect.value;
  const filtered = books.map((book, index) => ({ book, index })).filter(({ book }) => {
    const description = bookDescriptions[book[0]];
    const searchableDescription = description ? `${description.kn} ${description.en}`.toLocaleLowerCase() : "";
    return (category === "all" || book[2] === category) && (!query || book[0].toLocaleLowerCase().includes(query) || book[1].toLocaleLowerCase().includes(query) || book[4].toLocaleLowerCase().includes(query) || searchableDescription.includes(query));
  });
  countNode.textContent = language === "en" ? `${filtered.length} of ${books.length} titles` : `${books.length}ರಲ್ಲಿ ${filtered.length} ಗ್ರಂಥಗಳು`;
  if (!filtered.length) {
    bookGrid.innerHTML = `<p class="no-results">${language === "en" ? "No publications match that search." : "ಹುಡುಕಾಟಕ್ಕೆ ಹೊಂದುವ ಗ್ರಂಥಗಳು ಕಂಡುಬಂದಿಲ್ಲ."}</p>`;
    return;
  }
  bookGrid.innerHTML = filtered.map(({ book, index }) => {
    const selected = cart.has(index);
    const description = bookDescriptions[book[0]];
    return `<article class="book-card">
      <div class="book-cover" style="background-color:${coverColors[index % coverColors.length]}" aria-label="Illustrative cover for ${book[1]}">
        <div class="book-cover-inner"><span class="cover-org">Mitturu Samprathishtaana</span><p class="cover-title" lang="kn">${book[0]}</p><span class="cover-mark">❋</span><span class="cover-en">${book[1]}</span></div>
      </div>
      <div class="book-meta"><span class="book-category">${categoryLabels[book[2]][language]}</span><span class="book-year">${book[3]}</span></div>
      <h3 lang="kn">${book[0]}</h3><p class="book-author">${book[4]}</p><p class="book-description" lang="${language}">${description[language]}</p>
      <span class="book-price">${language === "en" ? "Contact for price" : "ಬೆಲೆಗೆ ಸಂಪರ್ಕಿಸಿ"}</span>
      <button class="add-book" type="button" data-book-index="${index}" aria-pressed="${selected}">${selected ? (language === "en" ? "✓ Added" : "✓ ಸೇರಿಸಲಾಗಿದೆ") : (language === "en" ? "+ Add to enquiry" : "+ ವಿಚಾರಣೆಗೆ ಸೇರಿಸಿ")}</button>
    </article>`;
  }).join("");
}

function renderCart() {
  const target = document.querySelector("#cart-items");
  if (!target) return;
  if (cart.size === 0) {
    target.innerHTML = `<p class="empty-cart">${language === "en" ? "No titles selected yet." : "ಇನ್ನೂ ಯಾವುದೇ ಗ್ರಂಥ ಆಯ್ಕೆಮಾಡಿಲ್ಲ."}</p>`;
    return;
  }
  target.innerHTML = [...cart.keys()].map(index => `<div class="cart-entry"><span>${books[index][0]} <small>(${books[index][1]})</small></span><button type="button" data-remove-index="${index}">${language === "en" ? "Remove" : "ತೆಗೆದುಹಾಕಿ"}</button></div>`).join("");
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  try {
    localStorage.setItem("site-language", language);
  } catch {}
  document.documentElement.lang = language;
  document.body.classList.toggle("kn", language === "kn");
  document.querySelectorAll("[data-en][data-kn]").forEach(element => {
    if (element.hasAttribute("data-html")) {
      element.innerHTML = element.dataset[language];
    } else {
      element.textContent = element.dataset[language].replace(/^\d{2} \/ /, "");
    }
  });
  document.querySelectorAll("[data-placeholder-en][data-placeholder-kn]").forEach(element => {
    element.placeholder = element.dataset[`placeholder${language === "en" ? "En" : "Kn"}`];
  });
  const languageSwitch = document.querySelector("#language-switch");
  if (languageSwitch) {
    languageSwitch.setAttribute("aria-label", language === "en" ? "Switch to Kannada" : "Switch to English");
  }
  renderBooks();
  renderCart();
}

if (bookGrid) {
  bookGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-book-index]");
    if (!button) return;
    const index = Number(button.dataset.bookIndex);
    cart.has(index) ? cart.delete(index) : cart.set(index, true);
    renderBooks();
    renderCart();
  });
}

const cartItems = document.querySelector("#cart-items");
if (cartItems) {
  cartItems.addEventListener("click", event => {
    const button = event.target.closest("[data-remove-index]");
    if (!button) return;
    cart.delete(Number(button.dataset.removeIndex));
    renderBooks();
    renderCart();
  });
}

const bookSearch = document.querySelector("#book-search");
if (bookSearch) {
  const requestedTitle = new URLSearchParams(window.location.search).get("search");
  if (requestedTitle) bookSearch.value = requestedTitle;
  bookSearch.addEventListener("input", renderBooks);
}

const bookFilter = document.querySelector("#book-filter");
if (bookFilter) bookFilter.addEventListener("change", renderBooks);

const languageSwitch = document.querySelector("#language-switch");
if (languageSwitch) {
  languageSwitch.addEventListener("click", () => setLanguage(language === "en" ? "kn" : "en"));
}

const donationForm = document.querySelector("#donation-form");
if (donationForm) {
  const statusNode = document.querySelector("#donation-status");
  const whatsappLink = document.querySelector("#whatsapp-donation");

  const buildDonationEmail = () => {
    const name = donationForm.querySelector('[name="name"]').value.trim();
    const contact = donationForm.querySelector('[name="contact"]').value.trim();
    const selectedFundInputs = [...document.querySelectorAll('input[name="selected_fund"]:checked')];

    if (!selectedFundInputs.length) {
      return { valid: false, message: language === "en" ? "Please select at least one fund or donation type." : "ಒಂದು ಅಥವಾ ಹೆಚ್ಚಿನ ನಿಧಿಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ." };
    }

    const lines = [
      `Name: ${name || "Not provided"}`,
      `Phone / email: ${contact || "Not provided"}`,
      "",
      "Selected contributions:",
      ...selectedFundInputs.map(input => {
        const fund = input.value;
        const amountField = document.querySelector(`[name="${input.dataset.amountField}"]`);
        const reasonField = document.querySelector(`[name="${input.dataset.reasonField}"]`);
        const amount = amountField && amountField.value.trim() ? ` | Amount: ${amountField.value.trim()}` : "";
        const reason = reasonField && reasonField.value.trim() ? ` | Reason: ${reasonField.value.trim()}` : "";
        return `- ${fund}${amount}${reason}`;
      })
    ];

    return { valid: true, message: lines.join("\n") };
  };

  donationForm.addEventListener("submit", event => {
    event.preventDefault();
    const result = buildDonationEmail();

    if (!result.valid) {
      if (statusNode) statusNode.textContent = result.message;
      return;
    }

    const subject = encodeURIComponent("Expression of interest to support the Samprathishtaana");
    const body = encodeURIComponent(result.message);
    const whatsappText = encodeURIComponent(result.message.replace(/\n/g, "\n"));

    if (whatsappLink) {
      whatsappLink.href = `https://wa.me/919483355101?text=${whatsappText}`;
    }

    if (statusNode) {
      statusNode.textContent = language === "en"
        ? "Your email app will open with the donation intent drafted clearly for review."
        : "ನಿಮ್ಮ ಇಮೇಲ್ ಅಪ್ಲಿಕೇಶನ್ ದೇಣಿಗೆ ಆಸಕ್ತಿಯನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ತೋರಿಸುವ ಸಂದೇಶದೊಂದಿಗೆ ತೆರೆಯುತ್ತದೆ.";
    }

    window.location.href = `mailto:samprathishtaana@gmail.com?subject=${subject}&body=${body}`;
  });
} else {
  const orderForm = document.querySelector("#order-form");
  if (orderForm) {
    const orderStatus = document.querySelector("#order-status");
    const whatsappOrderButton = document.querySelector("#whatsapp-order");
    const buildOrderMessage = form => {
      const selectedTitles = [...cart.keys()].map(index => `${books[index][1]} / ${books[index][0]}`);
      return [
        `Name: ${form.get("name")}`,
        `Email: ${form.get("email") || "Not provided"}`,
        `Mobile: ${form.get("mobile")}`,
        `Delivery location / message: ${form.get("message") || "Not provided"}`,
        `Selected titles: ${selectedTitles.length ? selectedTitles.join("; ") : "Please advise on available publications."}`
      ].join("\n");
    };

    orderForm.addEventListener("submit", event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const subject = encodeURIComponent("Publication enquiry | Mitturu Samprathishtaana");
      const body = encodeURIComponent(buildOrderMessage(form));
      if (orderStatus) {
        orderStatus.textContent = language === "en" ? "Your email app will open with the enquiry addressed to the Samprathishtaana." : "ಸಂಪ್ರತಿಷ್ಠಾನದ ವಿಳಾಸಕ್ಕೆ ವಿಚಾರಣೆಯ ಕರಡಿನೊಂದಿಗೆ ನಿಮ್ಮ ಇಮೇಲ್ ಅಪ್ಲಿಕೇಶನ್ ತೆರೆಯುತ್ತದೆ.";
      }
      window.location.href = `mailto:samprathishtaana@gmail.com?subject=${subject}&body=${body}`;
    });

    if (whatsappOrderButton) {
      whatsappOrderButton.addEventListener("click", () => {
        if (!orderForm.reportValidity()) return;
        const form = new FormData(orderForm);
        const message = encodeURIComponent(buildOrderMessage(form));
        if (orderStatus) {
          orderStatus.textContent = language === "en" ? "Your WhatsApp message is ready to send." : "ನಿಮ್ಮ ವಾಟ್ಸ್ಅಪ್ ಸಂದೇಶ ಕಳುಹಿಸಲು ಸಿದ್ಧವಾಗಿದೆ.";
        }
        window.open(`https://wa.me/919483355101?text=${message}`, "_blank", "noopener,noreferrer");
      });
    }
  }
}

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");
if (navigation && !navigation.querySelector('[data-page="news-events"]')) {
  const newsLink = document.createElement("a");
  newsLink.href = "news-events.html";
  newsLink.dataset.page = "news-events";
  newsLink.dataset.en = "News & events";
  newsLink.dataset.kn = "ಸುದ್ದಿ ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳು";
  newsLink.textContent = "News & events";
  navigation.insertBefore(newsLink, document.querySelector("#language-switch"));
}

if (navigation && !navigation.querySelector('[data-page="vidya-kuteera"]')) {
  const kuteeraLink = document.createElement("a");
  kuteeraLink.href = "vidya-kuteera.html";
  kuteeraLink.dataset.page = "vidya-kuteera";
  kuteeraLink.dataset.en = "Vidya Kuteera";
  kuteeraLink.dataset.kn = "ವಿದ್ಯಾಕುಟೀರ";
  kuteeraLink.textContent = "Vidya Kuteera";
  navigation.insertBefore(kuteeraLink, document.querySelector("#language-switch"));
}

document.querySelectorAll(".brand-mark").forEach(brandMark => {
  const logo = document.createElement("img");
  logo.src = "Contents/images/samprathishtaana.jpg";
  logo.alt = "";
  logo.width = 41;
  logo.height = 41;
  logo.style.width = "100%";
  logo.style.height = "100%";
  logo.style.objectFit = "contain";
  brandMark.replaceChildren(logo);
  brandMark.style.border = "0";
});

const newsArchive = document.querySelector("#news-archive");
if (newsArchive) {
  const entries = [...newsArchive.querySelectorAll("[data-news-entry][data-date]")];
  const filters = document.querySelector("#news-filters");
  const yearFilter = document.querySelector("#news-year");
  const monthFilter = document.querySelector("#news-month");
  const emptyMessage = document.querySelector("#news-empty");
  const noResultsMessage = document.querySelector("#news-no-results");

  if (entries.length && filters && yearFilter && monthFilter) {
    filters.hidden = false;
    entries.sort((first, second) => second.dataset.date.localeCompare(first.dataset.date));
    entries.forEach(entry => newsArchive.append(entry));

    const years = [...new Set(entries.map(entry => entry.dataset.date.slice(0, 4)))].sort().reverse();
    years.forEach(year => {
      const option = document.createElement("option");
      option.value = year;
      option.dataset.en = year;
      option.dataset.kn = year;
      option.textContent = year;
      yearFilter.append(option);
    });

    const months = [
      ["01", "January", "ಜನವರಿ"], ["02", "February", "ಫೆಬ್ರವರಿ"],
      ["03", "March", "ಮಾರ್ಚ್"], ["04", "April", "ಏಪ್ರಿಲ್"],
      ["05", "May", "ಮೇ"], ["06", "June", "ಜೂನ್"],
      ["07", "July", "ಜುಲೈ"], ["08", "August", "ಆಗಸ್ಟ್"],
      ["09", "September", "ಸೆಪ್ಟೆಂಬರ್"], ["10", "October", "ಅಕ್ಟೋಬರ್"],
      ["11", "November", "ನವೆಂಬರ್"], ["12", "December", "ಡಿಸೆಂಬರ್"]
    ];
    const availableMonths = new Set(entries.map(entry => entry.dataset.date.slice(5, 7)));
    months.filter(([month]) => availableMonths.has(month)).forEach(([month, english, kannada]) => {
      const option = document.createElement("option");
      option.value = month;
      option.dataset.en = english;
      option.dataset.kn = kannada;
      option.textContent = kannada;
      monthFilter.append(option);
    });

    const filterNews = () => {
      const visibleEntries = entries.filter(entry => {
        const matchesYear = yearFilter.value === "all" || entry.dataset.date.startsWith(yearFilter.value);
        const matchesMonth = monthFilter.value === "all" || entry.dataset.date.slice(5, 7) === monthFilter.value;
        entry.hidden = !(matchesYear && matchesMonth);
        return !entry.hidden;
      });
      if (emptyMessage) emptyMessage.hidden = true;
      if (noResultsMessage) noResultsMessage.hidden = visibleEntries.length > 0;
    };

    yearFilter.addEventListener("change", filterNews);
    monthFilter.addEventListener("change", filterNews);
    filterNews();
  }
}

const galleryGrid = document.querySelector("#gallery-grid");
if (galleryGrid) {
  const galleryItems = galleryGrid.querySelectorAll("[data-gallery-item]");
  const galleryEmpty = document.querySelector("#gallery-empty");
  if (galleryEmpty) galleryEmpty.hidden = galleryItems.length > 0;
}

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navigation.classList.toggle("open", !expanded);
  });
  navigation.addEventListener("click", event => {
    if (event.target.closest("a")) {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const currentYearNode = document.querySelector("#current-year");
if (currentYearNode) currentYearNode.textContent = new Date().getFullYear();
const programmeFundNames = new Map([
  ["ಮಿತ್ತೂರು ಸುವಿದ್ಯಾನಿಧಿ · ಸಂಸ್ಕೃತ ಪ್ರತಿಭಾಪುರಸ್ಕಾರ", "Mitturu Suvidya Nidhi · Sanskrit Talent Awards"],
  ["ಸಾಂಗವೇದಪೋಷಣ ನಿಧಿ · ಕರ್ಮಕಾಂಡ ನಿಧಿ · ಪ್ರವಚನ ನಿಧಿ", "Sangaveda Poshana Nidhi · Karmakanda Nidhi · Pravachana Nidhi"],
  ["ಮಿತ್ತೂರು ಸ್ವಾಸ್ಥ್ಯನಿಧಿ · ಸಂಪ್ರದಾನ ನಿಧಿ", "Mitturu Svasthya Nidhi · Sampradana Nidhi"],
  ["ಗ್ರಂಥಪ್ರಕಾಶನ ನಿಧಿ · ಸಂಪರ್ಕ ಗ್ರಂಥಾಲಯ", "Granthaprakashana Nidhi · Reference Library"],
  ["ಅತಿಥಿಸತ್ಕಾರ ನಿಧಿ · ಮೂಲಸೌಕರ್ಯ ಅಭಿವೃದ್ಧಿ ನಿಧಿ", "Atithisatkara Nidhi · Infrastructure Development Fund"]
]);
document.querySelectorAll(".programme-kannada").forEach(element => {
  const kannada = element.textContent.trim();
  const english = programmeFundNames.get(kannada);
  if (english) {
    element.dataset.en = english;
    element.dataset.kn = kannada;
  }
});
document.querySelectorAll(".giving-note, .programme-footnote, .work-section > .section-deck").forEach(element => element.remove());
setLanguage(language);