$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100; // Declares fungusHP = 100
let myAP = 100; // Declares myAP = 100






function onReady() {
    $('.attack-btn').on('click', useAttack); // jquery accesses .attack-btn and once clicked it runs useAttack function

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
let immortal = setInterval(healthRegen, 1000); // setInterval will run the healthRegen function every second.

//--------------------------------------------------------------------------------------------------------------------------------
// I used a switch statement inside of a function instead of if/else. It saved on some room. 
// The switch statement will evaulate each 'case' and determine if its true or false. 
// if true the lines following the case statement will run then the function will break or end.
// every case is check until either one is true or it reaches the end and breaks(ends) by default.
// each case represents a different attack that changes the variable fungusHP and myAP
// then runs two more functions.


function useAttack() {
    switch (true) {
        case $(this).hasClass('arcane-scepter'):
            fungusHP -= 14;
            myAP -= 12;
            statRender();
            render();
            break;
        case $(this).hasClass('entangle'):
            fungusHP -= 9;
            myAP -= 23;
            statRender();
            render();
            break;
        case $(this).hasClass('dragon-blade'):
            fungusHP -= 47;
            myAP -= 38;
            statRender();
            render();
            break;
        case $(this).hasClass('star-fire'):
            fungusHP -= 25;
            myAP -= 33;
            statRender();
            render();
            break;
        default:
            break;
    }
}
//--------------------------------------------------------------------------------------------------------------------------------
// render will remove the text info and values for the classes and id's that jquery accesses.
// it will then append new text/values with updated fungusHP and myAP variables.
// the .val if change the healthbar above the fungus and the AP bar above the user.
// the .text will change the numerical text above the health bars.

function render() {
    $('.hp-text').text('');
    $('#hp-meter').val('');
    $('#hp-meter').val(`${fungusHP}`);
    $('.hp-text').text(`${fungusHP} HP`)
    $('.ap-text').text('');
    $('#ap-meter').val('');
    $('#ap-meter').val(`${myAP}`);
    $('.ap-text').text(`${myAP} AP`)
}
//--------------------------------------------------------------------------------------------------------------------------------

// statRender will run an if conditional and evaluating if myAP is less than or equil to 0
// If true it will set myAP to 0 so that i will not be able to go into negative numbers and
// then it will add the disabled, true attribute to the button class in html. Making it sl
// they cannot be used. attr.('disabled', 'disabled') would also work.
// Last, jquery will access the #fungusId and remove its 'walk' class and add the 'jump' class.

function statRender() {
    if (myAP <= 0) {
        myAP = 0;
        $('button').attr('disabled', true)
        $('#fungusId').removeClass('walk');
        $('#fungusId').addClass('jump');


    }

 // This second if does the same thing with the fungusHP except it removes the 'walk' class 
 // and adds the 'dead' class. This part of the function also performs clearInterval(immortal)
 // stopping the setInterval described on line 26.

    if (fungusHP <= 0) {
        fungusHP = 0;
        $('#fungusId').removeClass('walk');
        $('#fungusId').addClass('dead');
        clearInterval(immortal);
    }

}
//--------------------------------------------------------------------------------------------------------------------------------

// This final function will evaluate the fungusHP and if it falls below 50 it will continue adding 
// 1 to itself until its back up to 50.
// it will also update the .text and .val for the accessed classes and id's.
// This is the function that is called in the setInterval function on line 26.
// this function will run every second and update the .val and .text to match the fungusHP

function healthRegen() {
    if (fungusHP < 50) {
        fungusHP += 1
    }

    $('.hp-text').text('');
    $('#hp-meter').val('');
    $('#hp-meter').val(`${fungusHP}`);
    $('.hp-text').text(`${fungusHP} HP`)
}
//--------------------------------------------------------------------------------------------------------------------------------