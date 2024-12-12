controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LVL == 2) {
        shootDirection = 3
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LVL == 2) {
        if (shootDirection == 1) {
            projectile = sprites.createProjectileFromSprite(assets.image`vandSkydning`, mySprite, 100, 0)
        } else if (shootDirection == 2) {
            projectile = sprites.createProjectileFromSprite(assets.image`vandSkydning`, mySprite, -100, 0)
        } else if (shootDirection == 3) {
            projectile = sprites.createProjectileFromSprite(assets.image`vandSkydning`, mySprite, 0, -100)
        } else if (shootDirection == 4) {
            projectile = sprites.createProjectileFromSprite(assets.image`vandSkydning`, mySprite, 0, 100)
        } else {
        	
        }
        pause(500)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LVL == 2) {
        shootDirection = 2
    }
})
info.onScore(144, function () {
    if (LVL == 2) {
        game.splash("Du har nu gjort alle solceller rene. Gå ned til fabrikken igen.")
    }
})
info.onScore(10, function () {
    if (LVL == 2) {
        game.splash("Vidste du at tekstilindustrien udleder 4 milliarder tons CO2 årligt")
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LVL == 2) {
        shootDirection = 1
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LVL == 2) {
        shootDirection = 4
    }
})
// Indstil dit tilemap her!
// Når spilleren træder på en bestemt tile
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`solcelle2`, function (sprite, location) {
    if (LVL == 2) {
        // Skift flisen til en ny tile
        tiles.setTileAt(location, assets.tile`solcelle`)
        sprites.destroy(projectile)
        info.changeScoreBy(1)
    }
})
let projectile: Sprite = null
let shootDirection = 0
let mySprite: Sprite = null
let LVL = 0
LVL = 2
game.splash("Over de seneste par dage er fabrikkens energiforbrug bestået mere af fossile brændsler, end det plejer. Vask solcellerne af på taget ved at trykke på tasten 'A', for at få mere bæredygtig energi.")
info.setScore(0)
tiles.setCurrentTilemap(tilemap`taget`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 75, 75)
shootDirection = 1
