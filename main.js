const container = document.getElementById('container');
const colorInput = document.getElementById('colorInput');
const clearBtn = document.getElementById('clearBtn');
const choseSize = document.querySelectorAll('.choseSize');
const grid = document.querySelector('.grid');



let colorValue = 'black';


colorInput.addEventListener('blur', ()=>{
    colorValue = colorInput.value;
})




const rowFunc = (num) =>{
    const wholeDivRow = document.createElement('div');
    wholeDivRow.classList.add('wholeDivRow');  
    grid.appendChild(wholeDivRow); 
    for(let i = 0; i < num; i++){
       const rowDiv = document.createElement('div');
       rowDiv.classList.add('rowDiv');
       wholeDivRow.appendChild(rowDiv);
    }
}

const colFunc = (row ,col) =>{
    for(let i = 0; i < col; i++){
        rowFunc(row)
    }
}

container.addEventListener('mouseover', (e) =>{
    if(e.target.classList.value === 'rowDiv'){
        e.target.style.cssText = `background-color: ${colorValue}`;
    }

})


colFunc(10,10)

clearBtn.addEventListener('click', () =>{
    rowDiv.forEach(element =>{
        console.log('asd');
       element.style.cssText = 'background-color: white';
    });

});



choseSize.forEach(element =>{
    element.addEventListener('click', (e) =>{
       if(e.target.textContent === '10x10'){
        while(grid.firstChild){
            grid.removeChild(grid.firstChild);

        }
        rowDiv.forEach(element =>{
            element.style.cssText = 'min-width: 40px; min-height: 40px;';
        })
        colFunc(10,10);
       } else if(e.target.textContent === '20x20'){
        while(grid.firstChild){
            grid.removeChild(grid.firstChild);
        }
        rowDiv.forEach(element =>{
            element.style.cssText = 'min-width: 20px; min-height: 20px;';
        })
        colFunc(20, 20)
       } else {
        while(grid.firstChild){
            grid.removeChild(grid.firstChild);
        }
        rowDiv.forEach(element =>{
            element.style.cssText = 'min-width: 10px; min-height: 10px;';
        })
        colFunc(30, 30);
       }
    })
})



const rowDiv = document.querySelectorAll('.rowDiv');
