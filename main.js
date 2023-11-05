const container = document.getElementById('container');
const colorInput = document.getElementById('colorInput');
const clearBtn = document.getElementById('clearBtn');
const choseSize = document.querySelectorAll('.choseSize');
const grid = document.querySelector('.grid');
const range = document.querySelector('.sizeSlide');
const rainbowBtn = document.querySelector('.rainbow');
const grey = document.querySelector('.grey');


var randomColor = Math.floor(Math.random()*16777215).toString(16);
var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
rainbowBtn.style.cssText = `background-color: #${randomColor};`;


let colorValue = 'black';


rainbowBtn.addEventListener('click', () =>{
    rainbowBtn.classList.toggle('clicked');
    console.log(rainbowBtn.classList.value);
    grey.classList.remove('clicked');
})


colorInput.addEventListener('blur', ()=>{
    colorValue = colorInput.value;
})


grey.addEventListener('click', () =>{
    grey.classList.toggle('clicked');
    rainbowBtn.classList.remove('clicked');
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

const opacityMap = new Map();

container.addEventListener('mouseover', (e) =>{
    let divColor = Math.floor(Math.random()*16777215).toString(16);
    if(e.target.classList.value === 'rowDiv'){
        if(rainbowBtn.classList.value === 'rainbow clicked'){
        e.target.style.cssText += `background-color: #${divColor};`;
    } else if(grey.classList.value === 'grey clicked'){
        if (opacityMap.has(e.target)) {
            opacityMap.set(e.target, opacityMap.get(e.target) + 0.1);
          } else {
            opacityMap.set(e.target, 0.1);
          }
          const opacity = opacityMap.get(e.target);
          e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    } else{
        console.log('asd')
        e.target.style.cssText += ` background-color: ${colorValue}`;
    }
}
})




// container.addEventListener('mouseover', (e) => {
//   if (e.target.classList.value === 'rowDiv') {
//     if (opacityMap.has(e.target)) {
//       opacityMap.set(e.target, opacityMap.get(e.target) + 0.1);
//     } else {
//       opacityMap.set(e.target, 0.1);
//     }
//     const opacity = opacityMap.get(e.target);
//     e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
//   }
// });

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


function setOpacityForAll(opacityValue) {
    for (const target of opacityMap.keys()) {
      opacityMap.set(target, opacityValue);
    }
  }


clearBtn.style.cssText = `background-color: #${randomColor2}`;

clearBtn.addEventListener('click', () =>{
    const rowDiv = document.querySelectorAll('.rowDiv');   
    rowDiv.forEach(element =>{
        console.log(element.style.width);
        setOpacityForAll(0);
        element.style.cssText = `background=-color: white; width: ${element.style.width}; height: ${element.style.height};`;
    });

});


