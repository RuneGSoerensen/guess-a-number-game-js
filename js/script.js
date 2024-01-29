// Starter spillet
function startGame() {
    // Boolean variabel
    let gameRunning = true;

    // Generer et tilfældigt tal mellem 0 og 100
    const targetNumber = Math.floor(Math.random() * 101);

    // Main spil loop
    while (gameRunning) {
        // Få brugerens gæt
        let userGuess = prompt("Gæt et tal mellem 0 og 100:");

        // Tjek om inputtet er null (hvis brugeren annullerede) eller en tom string
        if (userGuess === null || userGuess === "") {
            alert("Spillet er slut. Tak fordi du spillede med!");
            gameRunning = false;
            break;
        }

        // Konverter brugerens gæt til et tal
        userGuess = parseInt(userGuess);

        // Tjek om gættet er korrekt
        if (userGuess === targetNumber) {
            console.log("Tillykke! Du gættede det korrekte tal.");
            alert("Tillykke! Du gættede det korrekte tal.");
            gameRunning = false;
        } else if (userGuess < targetNumber) {
            console.log("For lavt. Gæt højere!");
            alert("For lavt. Gæt højere!");
        } else {
            console.log("For højt. Gæt lavere!");
            alert("For højt. Gæt lavere!");
        }
    }

    // Slutningen af spillet
    console.log("Spillet er slut. Tak fordi du legede med!");
}
