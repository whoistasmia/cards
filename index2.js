
let buttons = document.querySelectorAll(".learn-btn");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        button.classList.toggle("active");

    });

});
