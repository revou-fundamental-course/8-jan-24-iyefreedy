const title = document.querySelector("header span");
const canvas = document.querySelector("#shapeImage");
const calculatorForm = document.querySelector("#calculatorForm");
const perimeterResultElement = document.querySelector(
    ".result-wrapper #perimeterResult span"
);
const areaResultElement = document.querySelector(
    ".result-wrapper #areaResult span"
);
const submitButtonElement = document.querySelector("#calculatorForm button");
const resultWrapperElement = document.querySelector(".result-wrapper");
const resultContentElement = document.querySelector(".result-content");
const resultLoaderElement = document.querySelector(".result-loader");

document.addEventListener("DOMContentLoaded", function () {
    const ctx = canvas.getContext("2d");

    // Gambar persegi di dalam canvas
    ctx.fillStyle = "lightGray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Tambahkan petunjuk setiap sisinya
    ctx.font = "bold 14px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("s", canvas.width / 2 - 5, 12);
    ctx.fillText("s", canvas.width - 12, canvas.height / 2 + 5);
    ctx.fillText("s", canvas.width / 2 - 5, canvas.height - 5);
    ctx.fillText("s", 0, canvas.height / 2 + 5);

    calculatorForm.addEventListener("submit", function (e) {
        e.preventDefault();
        submitButtonElement.textContent = "Calculating...";
        perimeterResultElement.innerHTML = "";
        areaResultElement.innerHTML = "";
        const sideValue = document.querySelector("input[name=side]").value;

        const perimeterResult = sideValue * 4;
        const areaResult = sideValue * sideValue;

        let perimeterResultContent = `${sideValue} x 4 = ${perimeterResult}`;
        let areaResultContent = `${sideValue} x ${sideValue} = ${areaResult}`;

        calculatorForm.reset();
        submitButtonElement.textContent = "Hitung";

        typewriting(perimeterResultElement, perimeterResultContent);
        typewriting(areaResultElement, areaResultContent);
    });
});

function typewriting(element, textContent) {
    let i = 0;
    function typing() {
        if (i < textContent.length) {
            element.innerHTML += textContent.charAt(i);
            i++;
            setTimeout(typing, 50);
        }
    }

    typing();
}
