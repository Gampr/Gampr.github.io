var game = new Phaser.Game(480, 320, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var button_width = 190;



function preload() {
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	
	game.load.image('background', 'pics/ra_einstein.png');
	game.load.spritesheet('run_button', 'sprites/button_run_sprite.png', button_width, 70)
	game.load.image('brick', 'pics/brick.png')
}

var run_button;
var background;

var bricks;
var newBrick;
var brickInfo;
var start = false;

function create() {

	//  This creates a simple sprite that is using our loaded image and
	//  displays it on-screen
	game.stage.backgroundColor = '#182d3b';



   	background = game.add.tileSprite(0, 0, 480, 320, 'background');
   
	run_button = game.add.button(game.world.centerX - button_width/2, 200, 'run_button', actionOnClick, this, 2, 1, 0);
	initBricks();	
}

function update() {
    // game.physics.arcade.collide(ball, paddle);
    // paddle.x = game.input.x || game.world.width*0.5;
	console.log(start);
	
	
		bricks.children[0].x += bricks.children[0].dx;
		bricks.children[0].y += bricks.children[0].dy;
	
	
	// bricks.children.forEach(function(item) {
		// item.x += item.dx;
		// item.y += item.dy;
	// });
	
	if (start) {	
		// firstly we need to check collisions
	
		// secondly update move robots
	
		// check for end of work
		for (var brick in bricks) {
			
		}		
	}
}

function initBricks() {
	brickInfo = {
	    width: 50,
	    height: 20,
	    count: {
	        row: 3,
	        col: 3
	    },
	    offset: {
	        top: 50,
	        left: 60
	    },
	    padding: 10
	};
	bricks = game.add.group();
	for(c=0; c<brickInfo.count.col; c++) {
		for(r=0; r<brickInfo.count.row; r++) {
         var brickX = (r*(brickInfo.width+brickInfo.padding))+brickInfo.offset.left;
         var brickY = (c*(brickInfo.height+brickInfo.padding))+brickInfo.offset.top;
			newBrick = game.add.sprite(brickX, brickY, 'brick');

			game.physics.enable(newBrick, Phaser.Physics.ARCADE);
			// newBrick.body.immovable = true;
			newBrick.anchor.set(0.5);
			newBrick.dx = 0;
			newBrick.dy = 0;
			bricks.add(newBrick);
		}
	}
}

function actionOnClick () {
	if (start) {
		// return all robots on their start positions	
		bricks.children.forEach(function(item) {
			item.dx = item.dy = 0;
		});
	} else {
		$( ".wtf" ).append( '\
			<div class="mfp-bg">\
				<div id="form-popup" class="white-popup mfp-wrap">\
				<form action="#">\
					<div><input id="name" class="inputbox" type="text" placeholder="Ваше имя" /></div>\
					<div><input id="email" class="inputbox" type="email" placeholder="Ваше e-mail" /></div>\
					<div><textarea name="mess" id="mess" class="inputbox" cols="30" rows="10" placeholder="Ваше сообщение"></textarea></div>\
					<div><input type="submit" value="Отправить"></div>\
				</form>\
				</div>\
			</div>' );
		bricks.children.forEach(function(item) {
			item.dx = item.dy = 1;
		});
	}
	start = !start;
}