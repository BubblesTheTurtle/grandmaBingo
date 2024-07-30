function generateBingoCard() {

    var allWords = [
        "Praises an Ed™ accomplishment", "Asks you if you're cold", "Hates on Americans", "Claims Dad used to be incompetent", "Advises buying a random product",
      "Brings up Grandpa's gambling losses", "Cuts you off mid-sentence", "*Insane political take*", "Tells Dad to make a lifestyle change", "Comments on the apperance of someone not present", 
      "Is mildly racist", "Tries to convince Lilah to live in Concord", "Complains about a new California law", "Disapproves of a financial decision", "Says food is too salty", 
      "Brings up infidelity", "Comments on someone's lack of eating", "Judge(s) Judy", "OOoOuUuh", "Complains about trash-sorting problems", 
      "Comments on Mom's weight", "Tipped someone ''a lot''", "Mentions Roth IRA", "Complains about house repair", "Says Mom can't handle cooking",
      "Worries about the Dog's well-being", "Coercive toilet tactics",
    ];


    allWords.sort(() => Math.random() - 0.5);


    var bingoCard = [];
    for (var i = 0; i < 5; i++) {
        bingoCard[i] = [];
        for (var j = 0; j < 5; j++) {
            bingoCard[i][j] = allWords[i * 5 + j];
        }
    }

    return bingoCard;
}




function displayBingoCard(card) {
    var cardGrid = document.getElementById('bingo-card-grid');
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            var cell = document.createElement('div');
            cell.classList.add('bingo-card-cell');
            if (i === 2 && j === 2) { 
                cell.classList.add('center');
                cell.textContent = "Can't hear you (free space)";
            } else {
                cell.textContent = card[j][i];
            }

            cell.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
            cardGrid.appendChild(cell);
        }
    }
}



function generateNewBingoCard() {

    var cardGrid = document.getElementById('bingo-card-grid');
    cardGrid.innerHTML = '';


    var bingoCard = generateBingoCard();
    displayBingoCard(bingoCard);
}


var initialBingoCard = generateBingoCard();
displayBingoCard(initialBingoCard);


var generateCardBtn = document.getElementById('generate-card-btn');
generateCardBtn.addEventListener('click', generateNewBingoCard);




//colors


const colorPresets = {
    'preset1': {
        backgroundColor: '#91ccc8',
        clickedColor: '#a4db76',
        secondaryColor: '#2aaaa2',
        pressedGenerator: '#208781',  
    },
  
  'preset2': {
        backgroundColor: '#8d7da8',
        clickedColor: '#73bf77',
        secondaryColor: '#7c58bf',
        pressedGenerator: '#65489c',      
    },
   'preset3': {
        backgroundColor: '#e89f6b',
        clickedColor: '#97db84',
        secondaryColor: '#e38039',
        pressedGenerator: '#ba6204',   
    },
   'preset4': {
        backgroundColor: '#1f3f80',
        clickedColor: '#89d8fa',
        secondaryColor: '#4085de',
        pressedGenerator: '#356eb8',   
    },
};

const select = document.getElementById('colorPreset');

select.addEventListener('change', function() {
    const selectedPreset = this.value;
    const colors = colorPresets[selectedPreset];

    document.documentElement.style.setProperty('--background-color', colors.backgroundColor);
    document.documentElement.style.setProperty('--clicked-color', colors.clickedColor);
    document.documentElement.style.setProperty('--secondary-color', colors.secondaryColor);
      document.documentElement.style.setProperty('--pressed-generator', colors.pressedGenerator);
});