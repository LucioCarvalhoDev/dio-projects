class Controller {
    constructor() {
        this.phase = "idle";
        this.board = new Board();

        this.level = 1;

        this.game = {};
    }

    playAll() {
        return new Promise((resolve, reject) => {
            this.board.playAll(this.game.sequence)
                .then(list => {
                    resolve(list);
                });
        });
    }

    startGame() {
        this.phase = "playing";

        this.createLevel();
        console.log(this.game.sequence);
        this.playAll(this.game.sequence);

        this.phase = "inputPhase";
    }

    createLevel() {
        this.game = {
            size: 2 + this.level,
            speed: 1000,
            sequence: [],
            userSequence: [],
        };

        this.game.sequence = this.board.getSequence(this.game.size);
    }

    getInput(event) {
        if (this.phase === "playing") return;
        if (this.phase === "idle") return;
        if (this.phase === "inputPhase") {
            this.board.activeButton(this.board._buttons[event.target.id]);
            let leng = this.game.userSequence.push(event.target.id);
            if (leng === this.game.sequence.length) {
                this.compare();
            }
        }
    }

    compare() {
        if (this.game.sequence.toString() === this.game.userSequence.toString()) {
            this.win();
        } else {
            console.log("perdeu");
        }
    }

    win() {
        //depois implementar o comando linux tbm
        console.log("você conseguiu!");
        this.level++;
        this.phase = "idle";
        // this.startGame();
    }

}