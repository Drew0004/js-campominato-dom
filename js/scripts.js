const myButton = document.getElementById('special-button');

const myGrid = document.getElementById('grid-container');

const mySelect = document.getElementById('my-select');

let cell;

const bombs = [];



myButton.addEventListener ('click', function(){

    myGrid.innerHTML='';


    let selectedValue = parseInt(mySelect.value);

    stampCells(selectedValue, myGrid);

    for (let j = 0; j < 16 ; j++){
        const randomBomb = randomNumbers (1,selectedValue);
    
        bombs.push(randomBomb);
        
    }
    
    console.log(bombs);
    
});

// Funzione
function stampCells (value, container){
    for (let i = 1; i <= value; i++){

        const item = document.createElement('div');
        item.classList.add('square','d-flex' , 'justify-content-center', 'align-items-center','border', 'border-dark');
        item.innerHTML = i;
        container.append(item);
        

        item.addEventListener('click', function(){
            this.classList.toggle('bg-primary');

            console.log (this.innerHTML=i);
        });


    }
}

function randomNumbers (min,max){
    const num = Math.floor(Math.random() * (max - min + 1)) + min
    return num;
}


    


