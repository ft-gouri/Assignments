const r = require('raylib');

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;
    const centerX = 200;
    const centerY = 200;
    const radius = 150;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, 'Circle');
    r.SetTargetFPS(60);
    return { WIDTH, HEIGHT, centerX, centerY, radius };
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircleLines(world.centerX, world.centerY, world.radius, r.BLACK);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        // no update!
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}
main();
