//create the variabe associated with the ID tags
let wickedCss = ["slideRight", "barrelRoll", "zoomer", "spinner", "shake", "heartbeat", "wiggle", "slideDown" ]

let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnThree = document.getElementById("btnThree");
let btnFour = document.getElementById("btnFour");
let btnFive = document.getElementById("btnFive");
let btnSix = document.getElementById("btnSix");
let btnSeven = document.getElementById("btnSeven");
let btnEight = document.getElementById("btnEight");
let btnNine = document.getElementById("btnNine");
let btnTen = document.getElementById("btnTen");

let changeMeOne = document.getElementById("changeMeOne");
let changeMeTwo = document.getElementById("changeMeTwo");
let changeMeThree = document.getElementById("changeMeThree");
let changeMeFour = document.getElementById("changeMeFour");
let changeMeFive = document.getElementById("changeMeFive");
let changeMeSix = document.getElementById("changeMeSix");
let changeMeSeven = document.getElementById("changeMeSeven");
let changeMeEight = document.getElementById("changeMeEight");
let changeMeNine = document.getElementById("changeMeNine");
let changeMeTen = document.getElementById("changeMeTen");


console.log(wickedCss);


btnOne.addEventListener("click", function(){
    changeMeOne.innerText = "I have now been changed";
});

btnTwo.addEventListener("click", function(){
    changeMeTwo.innerText = "This is changed with a class";
    changeMeTwo.className = "fantasyChange";
})

btnThree.addEventListener("click", function(){
    changeMeThree.className = wickedCss[3]
} )

btnFour.addEventListener("click", function(){
    changeMeFour.className = wickedCss[4]
} )

btnFive.addEventListener("click", function(){
    changeMeFive.className = wickedCss[5]
} )

btnSix.addEventListener("click", function(){
    changeMeSix.className = wickedCss[6]
} )

btnSeven.addEventListener("click", function(){
    changeMeSeven.className = wickedCss[7]
} )

btnEight.addEventListener("click", function(){
    changeMeEight.className = wickedCss[1]
} )

btnNine.addEventListener("click", function(){
    changeMeNine.className = wickedCss[1]
} )

btnTen.addEventListener("click", function(){
    changeMeTen.className = wickedCss[2]
} )




