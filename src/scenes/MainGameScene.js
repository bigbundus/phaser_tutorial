import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('main-game')
	}

	preload()
    {
    }

    create()
    {
        const map = this.make.tilemap({ key: 'level-1'})

        const groundTileset = map.addTilesetImage('terrain_tiles', 'ground-tiles')
        const wallsTileset = map.addTilesetImage('walls', 'wall-tiles')

        map.createLayer('Tile Layer 1', groundTileset)
        const wallsLayer = map.createLayer('Walls', wallsTileset)

        wallsLayer.setCollisionByProperty({collides: true})

        const debugGraphics = this.add.graphics().setAlpha(0.6)
        wallsLayer.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(240,50,20,255),
            faceColor: new Phaser.Display.Color(40,39,39,255)
        })

        const warrior = this.add.sprite(60, 60, 'warrior', 'Warrior_Idle_1.png')

        this.anims.create({
            key: 'warrior-idle',
            frames: this.anims.generateFrameNames(
                'warrior', {
                    start: 1,
                    end: 6,
                    prefix: 'Warrior_Idle_',
                    suffix: '.png'
                }),
            repeat: -1,
            frameRate: 8
        })

        this.anims.create({
            key: 'warrior-run',
            frames: this.anims.generateFrameNames(
                'warrior', {
                    start: 1,
                    end: 8,
                    prefix: 'Warrior_Run_',
                    suffix: '.png'
                }
            ),
            repeat: -1,
            frameRate: 8
        })

        this.anims.create({
            key: 'warrior-walk-up',
            frames: this.anims.generateFrameNames(
                'warrior', {
                    start: 1,
                    end: 4,
                    prefix: 'walking_away_',
                    suffix: '.png'
                }
            ),
            repeat: -1,
            frameRate: 8,
        })

        warrior.anims.play('warrior-idle')
    }
}
