var clock = 0;
var Slide = 0;
var inc = 0;
var counter = 0;

function RotateCarousel() {
    var CarouselFrame = document.getElementById("Carousel");
   // document.getElementById("display").innerHTML = CarouselFrame.style.getPropertyValue("opacity");
    switch(Slide){
        case 0:
            CarouselFrame.setAttribute("src", "Carousel Files/Education-Summary.html");
            break;
        case 1:
            CarouselFrame.setAttribute("src", "Carousel Files/Major-Projects-Summary.html");
            break;
        case 2:
            CarouselFrame.setAttribute("src", "Carousel Files/Work-Experience-Summary.html");
            break;
        case 3:
            CarouselFrame.setAttribute("src", "Carousel Files/Major-Projects-Summary.html");
            break;
        case 4: 
            CarouselFrame.setAttribute("src", "Carousel Files/WIMP-AVR-Summary.html");
            break;
        default:
            //CarouselFrame.setAttribute("src", "Carousel Files/Education-Summary.html")
    }
 

}

function Fadeout() {
    var CarouselFrame = document.getElementById("Carousel");
    CarouselFrame.style.opacity = CarouselFrame.style.getPropertyValue("opacity") + 0.1;
    document.getElementById("display").innerHTML = CarouselFrame.style.getPropertyValue("opacity");
}

function Fadein() {
    var CarouselFrame = document.getElementById("Carousel");
    CarouselFrame.style.opacity = CarouselFrame.style.getPropertyValue("opacity") - 0.1;
    document.getElementById("display").innerHTML = CarouselFrame.style.getPropertyValue("opacity");
}

function Increment2() {
    inc = -1;
    if (Slide++ > 3) {
        Slide = 0;
    }
}

var autoIncrement = function Increment() {
    if (clock > 19) {
        if (clock == 20) {
            Increment2();
        }
        Fade();
    }
}

function Decrement() {
    inc = -1;
    if (Slide-- < 1){
        Slide = 4;
    }
}

function SlideForward() {
    Increment2();
    RotateCarousel();
}

function SlideBack() {
    Decrement();
    RotateCarousel();
}

var runningClock = function tick() {
    var CarouselFrame = document.getElementById("Carousel");
    //var opacity = parseInt(CarouselFrame.style.getPropertyValue("opacity"), 10);
    //document.getElementById("display").innerHTML = clock;
    clock++;
    //document.getElementById("display").innerHTML = opacity;
    autoIncrement;
} 

function Fade() {
    var CarouselFrame = document.getElementById("Carousel");
    if (clock >19 && clock < 30) {
        inc--;
    }
    if (inc === -10) {
        RotateCarousel();
    }

    if (clock > 29 && clock < 40) {
        inc ++;
    }

    if (clock >= 39) {
        clock = 0;
    }
    CarouselFrame.style.opacity = (10+inc)/10;

}

var systemClock = setInterval(runningClock,100);
var systemInc = setInterval(autoIncrement, 100);

function Disable() {
    var CarouselFrame = document.getElementById("Carousel");
    CarouselFrame.style.opacity = 1;
    clearInterval(systemClock);
    clearInterval(systemInc)
    clock = 0;
}

function Enable() {
    clock = 0;
    systemClock = setInterval(runningClock, 100);
    systemInc = setInterval(autoIncrement, 100);
}