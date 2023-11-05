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
        e.target.style.cssText += ` background-color: ${colorValue}`;
    }

})


colFunc(10,10)





choseSize.forEach(element =>{
    element.addEventListener('click', (e) =>{
       if(e.target.textContent === '10x10'){
        while(grid.firstChild){
            grid.removeChild(grid.firstChild);

        }

        colFunc(10,10);
        const rowDiv = document.querySelectorAll('.rowDiv');
        rowDiv.forEach(element =>{
            element.style.cssText = ('width: 50px; height: 50px;')
        })

       } else if(e.target.textContent === '20x20'){
        while(grid.firstChild){
            grid.removeChild(grid.firstChild);
        }

        colFunc(20, 20);
        const rowDiv = document.querySelectorAll('.rowDiv');
        rowDiv.forEach(element =>{
            element.style.cssText = ('width: 25px; height: 25px;')
        })

       } else {
        while(grid.firstChild){
            grid.removeChild(grid.firstChild);
        }

        colFunc(30, 30);
        const rowDiv = document.querySelectorAll('.rowDiv');
        rowDiv.forEach(element =>{
            element.style.cssText = ('width: 16.7px; height: 16.7px;')
        })

       }
    })
})



clearBtn.addEventListener('click', () =>{
    const rowDiv = document.querySelectorAll('.rowDiv');   
    rowDiv.forEach(element =>{
        console.log(element.style.width);
        element.style.cssText = `background=-color: white; width: ${element.style.width}; height: ${element.style.height};`;
    });

});


