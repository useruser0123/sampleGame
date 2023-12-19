// MyScene.js

class MyScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MyScene1', active: true });
    }

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('taro', 'assets/taro.png');
        this.load.image('hanako', 'assets/hanako.png');
    }

    create() {
             // 単体画像をシーンに追加(X座標,Y座標,画像名)
            this.add.image(400, 300, 'background');
            const taro = this.physics.add.sprite(500, 350, 'taro')
            const hanako = this.physics.add.sprite(500, 350, 'hanako')
            this.taro = taro
            this.hanako = hanako
    }

    update(time, delta) {
        // 何かしらの更新処理があればここに追加
        // キーボードの情報を取
        let cursors = this.input.keyboard.createCursorKeys();
        if(cursors.up.isDown){
            console.log("Up!!");
            this.taro.setVelocityY(-40);// 上方向の速度を設定
            this.hanako.setVelocityY(40);// 上方向の速度を設定
        } else if(cursors.down.isDown){
            console.log("down!!");
            this.taro.setVelocityY(40);// 下方向の速度を設
            this.hanako.setVelocityY(-40);// 下方向の速度を設
        }else if(cursors.left.isDown){
            console.log("Left");
            this.taro.setVelocityX(-40);// 左方向の速度を設定
            this.hanako.setVelocityX(40);// 左方向の速度を設定
        }else if(cursors.right.isDown){
            console.log("Right!!");
            this.taro.setVelocityX(40);// 右方向の速度を設定
            this.hanako.setVelocityX(-40);// 右方向の速度を設定
        }else{
            this.taro.setVelocityX(0);// 横方向の速度を0
            this.taro.setVelocityY(0);// 縦方向の速度を0
            this.hanako.setVelocityX(0);// 横方向の速度を0
            this.hanako.setVelocityY(0);// 縦方向の速度を0
        }
    }
}
