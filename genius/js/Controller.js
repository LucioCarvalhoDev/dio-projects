class Controller {
    constructor() {
        this.board = new Board();
        this.view = new View();

        this.phase = "idle";
        this.level = 1;

        this.game = {};
    }

    playAll() {
        return new Promise((resolve, reject) => {
            this.board.playAll(this.game.sequence, this.game.speed)
                .then(list => {
                    resolve(list);
                });
        });
    }

    startGame() {
        this.phase = "playing";

        this.createLevel();
        console.log(this.game.sequence);
        this.playAll(this.game.sequence)
            .then(() => {
                this.phase = "input";
            });

    }

    createLevel() {
        this.game = {
            size: 2 + Math.round(this.level / 2),
            speed: this.level <= 8 ? 1500 - ((this.level - 1) * 100) : 800,
            sequence: [],
            userSequence: [],
        };

        this.game.sequence = this.board.getSequence(this.game.size);
    }

    getInput(event) {
        if (this.phase === "playing") return;
        if (this.phase === "idle") return;
        if (this.phase === "input") {
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
            this.lose();
        }
    }

    write(str) {
        this.view.write(str);
    }

    win() {
        //depois implementar o comando linux tbm
        this.level++;
        this.phase = "idle";
        this.write(`Você chegou ao nível ${this.level}!`);
    }

    lose() {
        this.level = 1;
        this.phase = "idle";
        this.write(`Você perdeu, de volta para o nível 1!`);
    }

}