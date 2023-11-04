const container = document.getElementById('container');


const rowFunc = (num) =>{
    const wholeDivRow = document.createElement('div');
    wholeDivRow.classList.add('wholeDivRow');  
    container.appendChild(wholeDivRow); 
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
        e.target.style.cssText = 'background-color: black';
    }

})

colFunc(16, 16);

