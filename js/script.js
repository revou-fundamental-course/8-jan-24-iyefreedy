const shapeImageCanvasElement = document.querySelector("#shapeImage");

document.addEventListener("DOMContentLoaded", function () {
    const ctx = shapeImageCanvasElement.getContext("2d");

    // Gambar persegi di dalam canvas
    ctx.fillStyle = "lightGray";
    ctx.fillRect(
        0,
        0,
        shapeImageCanvasElement.width,
        shapeImageCanvasElement.height
    );

    // Tambahkan petunjuk setiap sisinya
    ctx.font = "14px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("s", shapeImageCanvasElement.width / 2 - 5, 12);
    ctx.fillText(
        "s",
        shapeImageCanvasElement.width - 12,
        shapeImageCanvasElement.height / 2 + 5
    );
    ctx.fillText(
        "s",
        shapeImageCanvasElement.width / 2 - 5,
        shapeImageCanvasElement.height - 5
    );
    ctx.fillText("s", 5, shapeImageCanvasElement.height / 2 + 5);
});
