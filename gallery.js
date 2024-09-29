var elements = document.getElementsByClassName("image");

function fadeOut(element) {
    var opacity = 1;
    var interval = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
            element.style.opacity = 1;
        }
    }, 50);
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", function () {
        fadeOut(this);
    });
}
