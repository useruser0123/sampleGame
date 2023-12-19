class MyScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MyScene1', active: true });
    }

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('taro', 'assets/taro.png');
        this.load.image('hanako', 'assets/hanako.png');
        this.load.image('apple', 'assets/apple.png');
        this.load.image('orange', 'assets/orange.png');
    }

    create() {
        this.add.image(400, 300, 'background');
        const taro = this.physics.add.sprite(500, 350, 'taro');
        const hanako = this.physics.add.sprite(500, 350, 'hanako');
        this.taro = taro;
        this.hanako = hanako;

        // ランダムに配置する関数を呼び出し
        this.placeRandomFruits('apple', 5); // 'apple'を5つ配置
        this.placeRandomFruits('orange', 5); // 'orange'を5つ配置
    }

    update(time, delta) {
        // キーボードの情報を取得
        let cursors = this.input.keyboard.createCursorKeys();

        if (cursors.up.isDown) {
            this.taro.setVelocityY(-40);
            this.hanako.setVelocityY(40);
        } else if (cursors.down.isDown) {
            this.taro.setVelocityY(40);
            this.hanako.setVelocityY(-40);
        } else if (cursors.left.isDown) {
            this.taro.setVelocityX(-40);
            this.hanako.setVelocityX(40);
        } else if (cursors.right.isDown) {
            this.taro.setVelocityX(40);
            this.hanako.setVelocityX(-40);
        } else {
            this.taro.setVelocityX(0);
            this.taro.setVelocityY(0);
            this.hanako.setVelocityX(0);
            this.hanako.setVelocityY(0);
        }
    }

    // ランダムにフルーツを配置する関数
    placeRandomFruits(fruitKey, count) {
        for (let i = 0; i < count; i++) {
            const x = Phaser.Math.Between(25, 775); // 50から750の範囲でランダムなX座標
            const y = Phaser.Math.Between(25, 425); // 50から550の範囲でランダムなY座標
            this.add.image(x, y, fruitKey);
        }
    }
}
