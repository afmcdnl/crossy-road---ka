input.onButtonPressed(Button.A, function () {
    Pedestrian.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Pedestrian.change(LedSpriteProperty.Y, -1)
})
let Pedestrian: game.LedSprite = null
Pedestrian = game.createSprite(0, 2)
let Cars = game.createSprite(4, randint(0, 4))
let Cars_2 = game.createSprite(4, randint(0, 4))
let Cars_3 = game.createSprite(4, randint(0, 4))
let Cars_4 = game.createSprite(4, randint(0, 4))
let Lives = 3
basic.forever(function () {
    Cars.change(LedSpriteProperty.X, -1)
    basic.pause(400)
    if (Pedestrian.isTouching(Cars)) {
        Lives += -1
    }
    if (Cars.get(LedSpriteProperty.X) == 0) {
        Cars.set(LedSpriteProperty.Y, randint(0, 4))
        Cars.set(LedSpriteProperty.X, 4)
    }
    Cars_2.change(LedSpriteProperty.X, -1)
    basic.pause(400)
    if (Lives == 0) {
        game.gameOver()
    } else if (Lives == 1) {
        basic.pause(200)
    } else if (Lives == 2) {
        basic.pause(100)
    }
    if (Pedestrian.isTouching(Cars_2)) {
        Lives += -1
    }
    if (Cars_2.get(LedSpriteProperty.X) == 0) {
        Cars_2.set(LedSpriteProperty.Y, randint(0, 4))
        Cars_2.set(LedSpriteProperty.X, 4)
    }
    if (Pedestrian.isTouching(Cars_3)) {
        Lives += -1
    }
    if (Cars_3.get(LedSpriteProperty.X) == 0) {
        Cars_3.set(LedSpriteProperty.Y, randint(0, 4))
        Cars_3.set(LedSpriteProperty.X, 4)
    }
    Cars_3.change(LedSpriteProperty.X, -1)
    if (Cars_4.get(LedSpriteProperty.X) == 0) {
        Cars_4.set(LedSpriteProperty.Y, randint(0, 4))
        Cars_4.set(LedSpriteProperty.X, 4)
    }
    if (Pedestrian.isTouching(Cars_4)) {
        Lives += -1
    }
    Cars_4.change(LedSpriteProperty.X, -1)
})
