function showBurger(){
    const elem = document.getElementsByClassName('burger');
    const elem2 = document.getElementsByClassName('menu__list');
    elem.addEventListener('click', function(){
        if(elem2.style.displey == "none"){
            elem2.style.displey = "block"
        }
        else{
            elem2.style.displey = "none"
        }
    })
}
showBurger();

//please, help...

