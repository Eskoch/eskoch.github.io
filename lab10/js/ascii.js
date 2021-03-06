(function () {
    "use strict"
    window.onload = function () {
        document.getElementById("stop").disabled = true;
        document.getElementById("start").onclick = startAnimation;
        document.getElementById("stop").onclick = stopAnimation;
        document.getElementById("size_select").onchange = changeSize;
        document.getElementById("turbo").onclick = changeTurbo;
    }
    var counter = 0;
    var timerInterval;
    var delayMs = 250;
    var frames;
    var frameArray;

    function startAnimation() {
        var animation = document.getElementById("animation");
        frames = ANIMATIONS[animation.value];
        frameArray = frames.split("=====\n");
        changeTurbo();

        changeSize();
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
    }

    function stopAnimation() {
        window.clearInterval(timerInterval);
        document.getElementById("text-area").value = frames;
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
    }

    function changeSize() {
        var size = document.getElementById("size_select");
        var size_option = size.options[size.selectedIndex].value;
        console.log(size_option)
        document.getElementById("text-area").style.fontSize = size_option;
    }

    function changeTurbo() {
        clearInterval(timerInterval);
        var isTurbo = document.getElementById("turbo").checked;
        if (isTurbo) {
            delayMs = 50;
        } else {
            delayMs = 250;
        }
        timerInterval = setInterval(animation_callback, delayMs);
    }

    function animation_callback(){
        if(counter >= frameArray.length){
            counter = 0;
        }else{
            document.getElementById("text-area").value = frameArr[counter];
            counter++;
        }
    }

}());
