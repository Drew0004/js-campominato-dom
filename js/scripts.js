const myButton = document.getElementById('special-button');

const myGrid = document.getElementById('grid-container');

const mySelect = document.getElementById('my-select');

let bombs = [];

let bombsNumber = 2;

let score = 0;

let matchResult = document.getElementById('match-result');

myButton.addEventListener ('click', function(){

    myGrid.innerHTML='';


    let selectedValue = parseInt(mySelect.value);

    stampCells(selectedValue, myGrid);

    if (bombs.length == 16){
        bombs = [];
    }
    randomMines (selectedValue, bombs);

    console.log(bombs);
    
    
});






// Funzioni
function stampCells (value, container){
    for (let i = 1; i <= value; i++){

        const item = document.createElement('div');
        item.classList.add('square','d-flex' , 'justify-content-center', 'align-items-center','border', 'border-dark', 'c-pointer');
        item.innerHTML = i;
        container.append(item);


        item.addEventListener('click', function(){
            let flag = false;
            for(let j = 0; j < bombs.length; j++){
                if (bombs[j] == i){
                    flag = true;
                }

            }

            if (flag == true){
                this.classList.add('bg-danger');
                // alert('Hai Perso! ' + 'Il tuo punteggio è: ' + score);
                matchResult.innerHTML = `Hai Perso! il tuo punteggio è: ${score}`;
                setTimeout(() => {myGrid.innerHTML='';}, 2000);
                // myGrid.innerHTML='';
            }else{
                this.classList.add('bg-primary');
                score++
                console.log ('score: '+ score);
            }

            //controllo celle cliccate (possibile vincita) (celle-bombe);

            if(score === (value - bombsNumber)){
                // alert('Hai vinto! ' + 'Il tuo punteggio è: ' + score);
                matchResult.innerHTML = `Hai vinto! il tuo punteggio è: ${score}`;
                myGrid.innerHTML='';
            }

            console.log (this.innerHTML=i);
        });
    }
            
            

}
function randomNumbers (min,max){
    const num = Math.floor(Math.random() * (max - min + 1)) + min
    return num;
}

function randomMines(value, array){
    for (let number = 1; number <= 2 ; number++){
        let randomBomb = randomNumbers (1,value);
    
        
        let foundInArray = array.includes (randomBomb);
        while (foundInArray == true){
            randomBomb = randomNumbers (1, value);
            foundInArray = array.includes (randomBomb);
        }

        array.push(randomBomb);
    }

}

        








    


