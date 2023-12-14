const myButton = document.getElementById('special-button');

const myGrid = document.getElementById('grid-container');

const mySelect = document.getElementById('my-select');

let cell;


myButton.addEventListener ('click', function(){

    myGrid.innerHTML='';


    let selectedValue = parseInt(mySelect.value);

    stampCells(selectedValue, myGrid);
    
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



    


