$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let myAP = 100;

if (myAP <= 0) {
    myAP = 0;
 }



function onReady() {
    $('.attack-btn').on('click', useAttack);
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


function useAttack() {
    console.log('inside useAttack')
    if ($(this).hasClass('arcane-scepter')) {
        fungusHP -= 14;
        myAP -= 12;
        if (myAP < 0) {
            myAP = 0;
        }
        if (fungusHP < 0) {
            fungusHP = 0;
        }
        console.log(fungusHP, myAP);
        $('.hp-text').text('');
        $('#hp-meter').val('');
        $('#hp-meter').val(`${fungusHP}`);
        $('.hp-text').text(`${fungusHP} HP`)
        $('.ap-text').text('');
        $('#ap-meter').val('');
        $('#ap-meter').val(`${myAP}`);
        $('.ap-text').text(`${myAP} AP`)
    
    
    }
    else if ($(this).hasClass('entangle')) {
        fungusHP -= 9;
        myAP -= 23;
        if (myAP < 0) {
            myAP = 0;
        }
        if (fungusHP < 0) {
            fungusHP = 0;
        }
        console.log(fungusHP, myAP);
        $('.hp-text').text('');
        $('#hp-meter').val('');
        $('#hp-meter').val(`${fungusHP}`);
        $('.hp-text').text(`${fungusHP} HP`)
        $('.ap-text').text('');
        $('#ap-meter').val('');
        $('#ap-meter').val(`${myAP}`);
        $('.ap-text').text(`${myAP} AP`)


    }
    else if ($(this).hasClass('dragon-blade')) {
        fungusHP -= 47;
        myAP -= 38;
        if (myAP < 0) {
            myAP = 0;
        }
        if (fungusHP < 0) {
            fungusHP = 0;
        }
        console.log(fungusHP, myAP);
        $('.hp-text').text('');
        $('#hp-meter').val('');
        $('#hp-meter').val(`${fungusHP}`);
        $('.hp-text').text(`${fungusHP} HP`)
        $('.ap-text').text('');
        $('#ap-meter').val('');
        $('#ap-meter').val(`${myAP}`);
        $('.ap-text').text(`${myAP} AP`)

        
    }
    else if ($(this).hasClass('star-fire')) {
        fungusHP -= 25;
        myAP -= 33;
        if (myAP < 0) {
            myAP = 0;
        }
        if (fungusHP < 0) {
            fungusHP = 0;
        }
        console.log(fungusHP, myAP);
        $('.hp-text').text('');
        $('#hp-meter').val('');
        $('#hp-meter').val(`${fungusHP}`);
        $('.hp-text').text(`${fungusHP} HP`)
        $('.ap-text').text('');
        $('#ap-meter').val('');
        $('#ap-meter').val(`${myAP}`);
        $('.ap-text').text(`${myAP} AP`)

        
    }
    if (myAP < 0) {
        myAP = 0;
    }
   

}
 