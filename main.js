const container = document.getElementById('container');
const colorInput = document.getElementById('colorInput');
const clearBtn = document.getElementById('clearBtn');
const choseSize = document.querySelectorAll('.choseSize');
const grid = document.querySelector('.grid');
const range = document.querySelector('.sizeSlide')
const rainbowBtn = document.querySelector('.rainbow')

var randomColor = Math.floor(Math.random()*16777215).toString(16);
var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
rainbowBtn.style.cssText = `background-color: #${randomColor};`;


let colorValue = 'black';


rainbowBtn.addEventListener('click', () =>{
    rainbowBtn.classList.toggle('clicked');
    console.log(rainbowBtn.classList.value);
})


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
    let divColor = Math.floor(Math.random()*16777215).toString(16);
    if(e.target.classList.value === 'rowDiv'){
        if(rainbowBtn.classList.value === 'rainbow clicked'){
        e.target.style.cssText += `background-color: #${divColor};`;
    } else {
        e.target.style.cssText += ` background-color: ${colorValue}`;
    }
}
})


colFunc(10,10)


range.addEventListener('click', ()=>{
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    if(range.value > 10){
    colFunc(range.value, range.value);
    const rowDiv = document.querySelectorAll('.rowDiv');
       rowDiv.forEach(element =>{
             element.style.cssText = `width: ${500/range.value}px; height: ${500/range.value}px;`
        })
    } else{
        colFunc(10, 10);
        const rowDiv = document.querySelectorAll('.rowDiv');
           rowDiv.forEach(element =>{
                 element.style.cssText = `width: 50px; height: 50px;`
            })
    }

})



clearBtn.style.cssText = `background-color: #${randomColor2}`;

clearBtn.addEventListener('click', () =>{
    const rowDiv = document.querySelectorAll('.rowDiv');   
    rowDiv.forEach(element =>{
        console.log(element.style.width);
        element.style.cssText = `background=-color: white; width: ${element.style.width}; height: ${element.style.height};`;
    });

});


