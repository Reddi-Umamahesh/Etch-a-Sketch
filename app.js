const colors = ['black','violet','indigo','blue','green','yellow','orange','red'];

let size =30;
let size_left = document.querySelector('.size_left');
let size_right = document.querySelector('.size_right');
let size_box = document.querySelector('.size');
let col_box = document.querySelector('.disp-col');
let col_left = document.querySelector('.col_left');
let col_right = document.querySelector('.col_right');
let col_text = document.querySelector('.color');
let main_box  = document.querySelector('.right');
let set = document.querySelector('.set');
let eraser = document.querySelector('.eraser');
let clear  = document.querySelector('.clear');
let rainbow = document.querySelector('.rainbow');

let rain  = false;
let col_idx = 0;
let cir = 0;
col_box.style.backgroundColor = colors[col_idx];



col_left.addEventListener('click',()=>{
    rain = 'false';
    eraser.style.backgroundColor = '#fff';
    eraser.style.color = 'black';
    if(col_idx==0){
        col_idx = 8;
    }
    if(col_idx>0){
        col_idx--;
        col_box.style.backgroundColor = colors[col_idx];
        col_text.innerText = colors[col_idx];
    }
});

col_right.addEventListener('click',()=>{
    rain = 'false';
    eraser.style.backgroundColor = '#fff';
    eraser.style.color = 'black';
    if(col_idx==7){
        col_idx = -1;
    }
    if(col_idx<7){
        col_idx++;
        col_box.style.backgroundColor = colors[col_idx];
        col_text.innerText = colors[col_idx];
    }
});


size_box.innerText = size;
size_left.addEventListener('click',()=>{
    
    if(size>1){
        size--;
        size_box.innerText = size;
    }
})
size_right.addEventListener('click',()=>{
    
    if(size<60){
        size++;
        size_box.innerText = size;
    }
})
set.addEventListener('click',()=>{
    
    rain = 'false';
    eraser.style.backgroundColor = '#fff';
    eraser.style.color = 'black';
    main_box.innerHTML = '';
    let numb = size_box.innerText
    
    for(let i=0;i<numb*numb;i++){
        let cell = document.createElement('div');
        cell.style.height = (600/numb)+'px';
        cell.style.width = (600/numb)+ 'px';
        
        cell.classList.add('child_div');
        main_box.appendChild(cell);
    }
    let childern = document.querySelectorAll('.child_div');
    setTimeout(()=>{
        for(const child of childern){
            child.style.border = 'none';
        }
    },400);
    changecol(childern);
    
});

function changecol(childern){
    for(const div of childern ){
        
        let temp=0;
          
        let isMouseDown = false;
        div.addEventListener("mousedown", () => {
            isMouseDown = true; 
            if(rain=='true'){
                if(temp==8){
                    temp =0;
                }
                col_text.innerText = colors[temp];
                temp++;
            }else{
                rainbow.style.backgroundColor = '#fff';
                rainbow.style.color = 'black';
            }
            div.style.backgroundColor = col_text.innerText;
        });
        document.addEventListener("mousemove", (event) => {
            if (isMouseDown ) { 
                let box = event.target;
                if(rain=='true'){
                    if(temp==8){
                        temp =0;
                    }
                    col_text.innerText = colors[temp];
                    temp++;
                }
                if(box.classList.contains("child_div")){
                    box.style.backgroundColor = col_text.innerText;
                }
                
            }
        });
        document.addEventListener("mouseup", () => {
            isMouseDown = false;
        });
    }
}

clear.addEventListener('click',()=>{
    rain = 'false';
    main_box.innerHTML = '';
    set.click();
});

eraser.addEventListener('click',()=>{
    rain = 'false';
    rainbow.style.backgroundColor = '#fff';
    rainbow.style.color = 'black';
    eraser.style.backgroundColor = '#333333';
    eraser.style.color = '#fff';
    col_box.style.backgroundColor = 'white';
    let childern = document.querySelectorAll('.child_div');
    col_text.innerText = 'white';
    console.log("eraser");
    changecol(childern);
});

rainbow.addEventListener('click',()=> {
    rain = 'true';
    rainbow.style.backgroundColor = '#333333';
    rainbow.style.color = '#fff';
    eraser.style.backgroundColor = '#fff';
    eraser.style.color = 'black';
    });
