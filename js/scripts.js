const myButton = document.getElementById('special-button');

const myGrid = document.getElementById('grid-container');

const mySelect = document.getElementById('my-select');

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
                alert('Hai perso!');
            }else{
                this.classList.add('bg-primary');
            }

            //controllo celle cliccate (possibile vincita) (celle-bombe);
            

            console.log (this.innerHTML=i);
        });
    }
            
            

}
function randomNumbers (min,max){
    const num = Math.floor(Math.random() * (max - min + 1)) + min
    return num;
}

function randomMines(value, array){
    for (let number = 1; number <= 16 ; number++){
        let randomBomb = randomNumbers (1,value);
    
        
        let foundInArray = array.includes (randomBomb);
        while (foundInArray == true){
            randomBomb = randomNumbers (1, value);
            foundInArray = array.includes (randomBomb);
        }

        array.push(randomBomb);
    }

}

        








    


