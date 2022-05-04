import Phaser from 'phaser'

import Preloader from './scenes/Preloader'
import MainGameScene from './scenes/MainGameScene'

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 300,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [Preloader, MainGameScene],
	scale: {
		zoom: 2
	}
}

export default new Phaser.Game(config)
