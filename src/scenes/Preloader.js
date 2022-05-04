import Phaser from "phaser";

export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super('preloader')
    }

    preload()
    {
        this.load.image('ground-tiles', 'tiles/TX Tileset Grass.png')
        this.load.image('wall-tiles', 'tiles/TX Tileset Wall.png')

        this.load.tilemapTiledJSON('level-1', 'level-1.json')
    }

    create()
    {
        this.scene.start('main-game')
    }
}