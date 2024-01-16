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

        setTimeout(() => {
            const sideValue = document.querySelector("input[name=side]").value;

            const perimeterResult = sideValue * 4;
            const areaResult = sideValue * sideValue;

            perimeterResultElement.textContent = `${sideValue} x 4 = ${perimeterResult}`;
            areaResultElement.textContent = `${sideValue} x ${sideValue} = ${areaResult}`;

            calculatorForm.reset();
            submitButtonElement.textContent = "Hitung";
        }, 2000);
    });
});
