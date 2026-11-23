const r = require('raylib');
const { wolverine } = require('./wolverine');

function setup() {
    const WIDTH = 600;
    const HEIGHT = 600;

    r.InitWindow(WIDTH, HEIGHT, 'MIRROR MIRROR');
    r.SetTargetFPS(50);

    return {
        wolverine,
        WIDTH,
        HEIGHT,
    };
}

function getColor(bitmap, i, j) {
    const value = bitmap.points[i][j];

    return {
        r: value,
        g: value,
        b: value,
        a: 255,
    };
}

function drawRectangle(bitmap, startX, startY, cWidth, cHeight, upsideDown) {
    for (let i = 0; i < bitmap.points.length; i++) {
        for (let j = 0; j < bitmap.points[i].length; j++) {
            let row = i;

            if (upsideDown) {
                row = bitmap.points.length - 1 - i;
            }

            const x = startX + j * cWidth;
            const y = startY + i * cHeight;

            r.DrawRectangle(
                Math.floor(x),
                Math.floor(y),
                Math.ceil(cWidth),
                Math.ceil(cHeight),
                getColor(bitmap, row, j),
            );
        }
    }
}

function draw(world) {
    const bitmap = world.wolverine;

    const cWidth = world.WIDTH / (bitmap.width * 2);
    const cHeight = world.HEIGHT / bitmap.height;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawRectangle(bitmap, 0, 0, cWidth, cHeight, false);

    drawRectangle(bitmap, world.WIDTH / 2, 0, cWidth, cHeight, true);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}

function main() {
    const world = setup();

    loop(world);
    teardown();
}

main();
