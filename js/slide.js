let slide = document.querySelector(".slide"),
      ativeDot = document.querySelector("#dot1"),
      btnRight = document.querySelector("#btnRight"),
      btnLeft = document.querySelector("#btnLeft");

let slidePageNumber = 1;

btnLeft.onclick = function(){
    slidePageNumber--;
    slidePage()
}

btnRight.onclick = function(){
    slidePageNumber++;
    slidePage()
}

function slidePage(){
    if(slidePageNumber < 1){
        slidePageNumber = 5;
    } else if(slidePageNumber > 5){
        slidePageNumber = 1;
    }

    if(slidePageNumber === 1){
        slide.style.marginLeft = "0";
        ativeDot.style.order = "1";
    } else if(slidePageNumber === 2){
        slide.style.marginLeft = "-100%";
        ativeDot.style.order = "3";
    } else if(slidePageNumber === 3){
        slide.style.marginLeft = "-200%";
        ativeDot.style.order = "4";
    } else if(slidePageNumber === 4){
        slide.style.marginLeft = "-300%";
        ativeDot.style.order = "5";
    } else if(slidePageNumber === 5){
        slide.style.marginLeft = "-400%";
        ativeDot.style.order = "6";
    }
}