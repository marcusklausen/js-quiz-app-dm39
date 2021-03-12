/*
- Data model med spørgsmål
- Have fat i brugerens input fra formen
- Hvis submit af spørgsmål
    - tjek om svar er korrekt
        - videre til næste spørgsmål
    - ellers 
        - tilbage til start
*/

// Mutlidimensional array

/*
let array1 = [
    [  (0.0), (0.1), (0.2)  ],
    [  (1.0), (1.1), (1.3)  ],
    [  (2.0), (2.1), (2.3)  ]
]
*/

// Data model
let questions = [
    ["Prins Harry og Meghan Markle forlod det britiske kongehus i januar 2020. En afsked der blev døbt hvad af pressen?", 
        "Megxit"],
    ["Hvilken film vandt for 'Best Picture 2020'?", 
        "Parasite"],
    [" De fleste er klar over, at hele Danmark lukkede ned d. 11. Marts 2020. Men det var ikke kun den danske befolkning der blev spærret inde, en kendt film producer blev idømt 23 års fængsel for bl.a. voldtægt. Hvem var denne film producer?",
     "Harvey Weinstein"],
    ["Joe Biden blev officielt demokraternes præsident kandidat i april 2020. Hvad hed den sidste demokratiske modstander der droppede ud?",
        "Bernie Sanders"],
    ["Elon Musk og musikeren Grimes fik i maj 2020 en søn. Hvad er sønnens officielle navn?",
        "X Æ A-XII Musk"],
    ["En sand dansk corona-klassiker når sin ende på dens hundrede levedag. Hvilken morgen klassiker må danskerne vinke farvel til? ",
        "Morgensang med Phillip Faber"],
    ["I juli blev forsamlingsforbudet ændret fra 50, men hvad blev det ændret til?", 
        "100"],
    ["Joe Biden annoncerer hans vicepræsidentkandidat. Hvem er det?",
         "Kamala Harris"],
    ["En af serien Tigerkings hovedpersoner blev d. 28. september smidt ud af den Amerikanske version af ‘Dancin with the Stars’. Hvem var det?",
        "Carole Baskin"],
    ["En af de helst store politiske ledere og dennes partner testes positive for corona, efter at have brugt største delen af 2020 på at kalde corona for et hoax. Hvem var det?",
        "Donald Trump"],
    ["Donald Trump’s advokat Rudy Giuliani holder sit famøse pressemøde foran det der skulle have været Four Seasons Hotel, men i stedet endte med at blive holdt foran hvilket firma?", 
    "Four Season Total Landscaping"],
    ["Siden pandemien meldte sin ankomst tilbage i marts 2020, har mange danskere set frem til denne dag. Hvad skete der d. 27. December, 2020?",
        "første vacciner i Danmark"],
    ["Boko Haram kidnappede i december over 333 skolebørn. I hvilket land foregik det?", "Nigeria"],
    ["Dronning Margrethe kunne i 2020 fejre sin 80 års fødselsdag. Hvor holdte hun sin fødselsdag?","Fredensborg"],
    ["Denne store sportslegende døde i et helikopterstyrt d. 26 Januar. Hvem var det?","Kobe Bryant"],
    ["Har skrevet musik til bl.a. Klovn, Matador og Tæskehold. Døde d. 28 juli.2020. Hvem var det? ","Bent Fabricius-Bjerre"],
    ["Har spillet Bent i Krummernes jul og Odin i jul i Valhal og kendt fra mange flere roller døde 12 februar 2020. Hvem var det? ","Søren Spanning"],
    ["Kraftige eksplosioner kostede 200 personer livet og over 6000 såret. I hvilken by skete det?","Beirut"],
    ["Hvilke to politikere måtte trække sig tilbage, efter 2 metoo skandaler?","Morten Østergaard og Frank Jensen"],
    ["Så stor var den danske befolkning d.1 januar 2020?","5.822.763"]
    
    



]

// querySelectors
let answer = document.querySelector(".answer-input");
let form = document.querySelector(".input-box");
let questionText = document.querySelector(".question");
let questionIndexTitle = document.querySelector(".title");
let loser = document.querySelector(".loser")
let winner = document.querySelector(".winner")

// start opsætning
let questionIndex = 0 
let correctAnswer = questions[0][1]
questionText.innerHTML = questions[0][0]


/*
    update() skal:
        -opdatere spørgsmålet på skærmen
        -opdatere det korrekte svar, som der tjekkes op imod
        -opdateres vha. index parametren
*/
function update(index) {

    // opdaterer spørgsmålsteksten til det nye spørgsmål i rækken vha. index
    questionText.innerHTML = questions[index][0]; 

    // opdaterer svarteksten der tjekkes op imod vha. index
    correctAnswer = questions[index][1] 

    // opdater overskrift til "Spørgsmål (index)"
    questionIndexTitle.innerHTML = "Spørgsmål " + (index + 1)

    // fjern bruger input fra tekstfelt
    answer.value = ""
}

form.addEventListener("submit", function (e) {

    // undgå page refresh ved submit
    e.preventDefault(); 

    //vis winner div 
    console.log(questionIndex);

    // hvis index er over 18, dvs 19 eller over som er sidste spørgsmåls-index i array'et.
    if(questionIndex > 18) {
        winner.style.display = "block";
    }

    // hvis svar fra input == korrekt svar fra questions[] array
    if (answer.value == correctAnswer) {

        // Ryk index frem med 1
        questionIndex = questionIndex + 1  

        // kald update() og giv den det index vi er nået til
        update(questionIndex)

        // skjul loser div boks
        loser.style.display = "none";

    }
      
    else{

        // sæt index tilbage til 0
        questionIndex = 0

        // kald update() og giv den det index vi er nået til
        update(questionIndex)

        // vis loser div boks
        loser.style.display = "block";

        // fjern hooray div boks
        winner.style.display = "none";

      }
});


