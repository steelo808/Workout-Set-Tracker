console.log("working");

let currentSet= document.getElementById("current-set");

let newSet = document.querySelector(".btn-new");

let reset = document.querySelector(".btn-reset");

let count = 0;





newSet.onclick = () =>{
    count = count + 1;
    console.log(count);
    currentSet.innerHTML = count;
};

reset.onclick = () =>{
    count = 0;
    console.log(count);
    currentSet.innerHTML = count;
};





