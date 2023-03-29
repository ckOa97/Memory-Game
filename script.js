const START = document.querySelector('#prvi-div + div > div > button');
const RANDOM_ITEMS = document.querySelectorAll('#prvi-div > div');
let allItems = document.querySelectorAll('.img');

let counter = 0;

let picture1 = 0;
let picture2 = 0;

/* allItems.forEach(function(item, index, arr){
            reset function
}) */

START.addEventListener('click', function(){

    randomFunction();

    clickListener();

    });

function compareFunction(){

    removeClickListener();

    picture1 = this.classList[0];

    this.classList.add('animation');

    clickListener1();

    this.removeEventListener('click', compareFunction1);

};

function compareFunction1(){

    removeClickListener1();

    picture2 = this.classList[0];

    this.classList.add('animation');

    if(picture1 === picture2) {

        compareMatch();

        setTimeout(function(){clickListener()}, 550);


    } else {

        setTimeout(function(){removeAnimation(); countFunction()}, 1000);

        setTimeout(function(){clickListener()}, 1500);
    
    };

};

function removeAnimation() {

    let item = document.querySelectorAll('.animation');

    item[0].classList.remove('animation');
    item[1].classList.remove('animation');

    };

function clickListener(){

    allItems.forEach(function(item, index, arr){

        arr[index].addEventListener('click', compareFunction);
    
    });    

};

function removeClickListener(){

    allItems.forEach(function(item, index, arr){

        arr[index].removeEventListener('click', compareFunction);
    
    });

};

function clickListener1(){

    allItems.forEach(function(item, index, arr){

        arr[index].addEventListener('click', compareFunction1);
    
    });

};

function removeClickListener1(){

    allItems.forEach(function(item, index, arr){

        arr[index].removeEventListener('click', compareFunction1);
    
    });

};

function compareMatch(){

    let item = document.querySelectorAll('.' + picture1);

    item[0].className = 'animation1';
    item[1].className = 'animation1';

    allItems = document.querySelectorAll('.img');

    setTimeout(function(){backgroundChange()}, 500);

};

function backgroundChange(){

    let item = document.querySelectorAll('.animation1 > div:last-of-type');

    item.forEach(function(item, index, arr){

        arr[index].classList.add('backgroundchange');

    });

};

function randomFunction(){

    RANDOM_ITEMS.forEach(function(item, index, arr){

        arr[index].style = 'order: ' + Math.floor(Math.random() * 360);

    });

};

function countFunction(){

    counter++

    let c = document.querySelector('#prvi-div + div > div > div > p');
    
    c.innerHTML = counter;

};