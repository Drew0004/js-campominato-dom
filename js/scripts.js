const myButton = document.getElementById('special-button');

const myGrid = document.getElementById('grid-container');

const mySelect = document.getElementById('my-select');

let cell;

let bombs = [];



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
        item.classList.add('square','d-flex' , 'justify-content-center', 'align-items-center','border', 'border-dark');
        item.innerHTML = i;
        container.append(item);
        

        item.addEventListener('click', function(){
            
            if (bombs[j] == i){
                this.classList.toggle('bg-danger');
            }else{
                this.classList.toggle('bg-primary');
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
    for (let j = 0; j < 16 ; j++){
        let randomBomb = randomNumbers (1,value);
    
        
        let foundInArray = array.includes (randomBomb);
        while (foundInArray == true){
            randomBomb = randomNumbers (1, value);
            foundInArray = array.includes (randomBomb);
        }

        array.push(randomBomb);
    }

}

        








    


