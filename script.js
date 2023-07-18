$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let myAP = 100;






function onReady() {
    $('.attack-btn').on('click', useAttack);
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
let immortal = setInterval(healthRegen, 1000);





function useAttack() {
    console.log('inside useAttack');
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


function statRender() {
    if (myAP < 0) {
        myAP = 0;
        $('button').attr('disabled', 'disabled')
        $('#fungusId').removeClass('walk');
        $('#fungusId').addClass('jump');
        

    }
    if (fungusHP < 0) {
        fungusHP = 0;
        $('#fungusId').removeClass('walk');
        $('#fungusId').addClass('dead');
        clearInterval(immortal);
    }
}




function healthRegen() {
    if (fungusHP < 50) {
    fungusHP += 1
    }
    
    $('.hp-text').text('');
    $('#hp-meter').val('');
    $('#hp-meter').val(`${fungusHP}`);
    $('.hp-text').text(`${fungusHP} HP`)
}
