input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
let EmptyObstacleY = 0
let ticks = 0
let Bird: game.LedSprite = null
let index = 0
let Obstacles: game.LedSprite[] = []
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (Obstacles.length > 0 && Obstacles[0].get(LedSpriteProperty.X) == 0) {
        Obstacles.removeAt(0).delete()
    }
    for (let obstacle of Obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        EmptyObstacleY = randint(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != EmptyObstacleY) {
                Obstacles.push(game.createSprite(4, index2))
            }
        }
    }
    for (let obstacle2 of Obstacles) {
        if (obstacle2.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && obstacle2.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})
