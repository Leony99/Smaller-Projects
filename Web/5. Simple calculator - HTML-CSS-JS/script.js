const buttons = document.querySelectorAll(".btn");
const output = document.querySelectorAll(".outputScreen > p");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let str = output[1].innerText;

        if (button.className === "btn ac") {
            output[0].innerText = "";
            output[1].innerText = "";
        }
        else if (button.className === "btn del") {
            output[1].innerText = str.slice(0, str.length - 1);
        }
        else if (button.className === "btn equal") {
            output[0].innerText = eval (output[1].innerText);
            output[1].innerText = "";
        }
        else {
            output[1].innerText = str + button.innerText;
        }
    });
});