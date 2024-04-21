class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my; 
    
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.leg1 = this.add.sprite(this.bodyX + 30, this.bodyY + 100, "monsterParts", "leg_greenD.png");
        my.sprite.leg2 = this.add.sprite(this.bodyX - 30, this.bodyY + 100, "monsterParts", "leg_greenD.png");

        my.sprite.arm1 = this.add.sprite(this.bodyX + 80, this.bodyY + 10, "monsterParts", "arm_greenD.png");
        my.sprite.arm2 = this.add.sprite(this.bodyX - 60, this.bodyY + 10, "monsterParts", "arm_greenD.png");
        my.sprite.arm2.flipX = true;
    
        my.sprite.eye1 = this.add.sprite(this.bodyX - 50, this.bodyY - 60, "monsterParts", "eye_green.png");
        my.sprite.eye1.flipX = true;
        my.sprite.eye2 = this.add.sprite(this.bodyX + 50, this.bodyY - 60, "monsterParts", "eye_green.png");

        my.sprite.eyething1 = this.add.sprite(this.bodyX - 50, this.bodyY - 60, "monsterParts", "eye_human_red.png");
        my.sprite.eyething2 = this.add.sprite(this.bodyX + 50, this.bodyY - 60, "monsterParts", "eye_human_red.png");
    
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 40, "monsterParts", "mouthF.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 40, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.setVisible(false);

        my.sprite.accessory1 = this.add.sprite(this.bodyX - 35, this.bodyY - 120, "monsterParts", "nose_green.png");
        my.sprite.accessory2 = this.add.sprite(this.bodyX + 35, this.bodyY - 120, "monsterParts", "nose_green.png");
    }
    
    update() {
        let my = this.my;    
    
        if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey('S'))) {
            my.sprite.smile.setVisible(true);
            my.sprite.fangs.setVisible(false);
        }
    
        if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey('F'))) {
            my.sprite.smile.setVisible(false);
            my.sprite.fangs.setVisible(true);
        }
    
        if (this.input.keyboard.checkDown(this.input.keyboard.addKey('A'), 1)) {
            for (let part in my.sprite) {
                my.sprite[part].x -= 1;
            }
        }
    
        if (this.input.keyboard.checkDown(this.input.keyboard.addKey('D'), 1)) {
            for (let part in my.sprite) {
                my.sprite[part].x += 1;
            }
        }
    }
    
    
    

}