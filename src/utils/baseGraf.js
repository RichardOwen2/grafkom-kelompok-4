const baseGraf = (titikFokus, canvas, ctx) => {
    const cwidth = canvas.width
    const cheight = canvas.height
    ctx.setTransform(1, 0, 0, 1, cwidth / 2, cheight / 2);
    ctx.scale(1, -1);
    // grid();
    ctx.strokeStyle = "black";

    var rect = 5;

    var y = 0;

    var x1 = -titikFokus;
    var x2 = -x1;

    // buat titik fokus
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.rect(x1 - rect / 2, y - rect / 2, rect, rect);
    ctx.fill();

    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.rect(x2 - rect / 2, y - rect / 2, rect, rect);
    ctx.fill();

    //baut titik 2 fokus
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.rect(x1 + x1 - rect / 2, y - rect / 2, rect, rect);
    ctx.fill();

    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.rect(x2 + x2 - (rect / 2) * 2, y - rect / 2, rect, rect);
    ctx.fill();

    // gambar garis x
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    var start = cwidth;
    var end = 0;

    ctx.beginPath();
    ctx.moveTo(-cwidth, 0);
    ctx.lineTo(start, end);
    ctx.stroke();

    
}

export default baseGraf;
