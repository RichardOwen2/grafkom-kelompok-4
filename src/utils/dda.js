const dda = (x1, y1, x2, y2, ctx, isShadow = false) => {
    const dx = x2 - x1;
    const dy = y2 - y1;

    let steps = Math.max(Math.abs(dx), Math.abs(dy));

    const xIncrement = dx / steps;
    const yIncrement = dy / steps;

    let x = x1;
    let y = y1;

    let i = 0;
    if (isShadow) {
        i = -600;
    }

    ctx.beginPath();
    while (i < steps) {
        ctx.moveTo(x, y);
        ctx.lineTo(x += xIncrement, y += yIncrement);

        i++
    }
    ctx.stroke();
}

export default dda;