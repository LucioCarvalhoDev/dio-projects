class Board {
  constructor() {
    this._board = document.querySelector('.memo');

    this._buttons = {
      red: document.getElementById("red"),
      green: document.getElementById("green"),
      blue: document.getElementById("blue"),
      yellow: document.getElementById("yellow"),
    };

    this._start = document.getElementById("start");
  }

  activeButton(e) {
    return new Promise((resolve, reject) => {
      const elem = e.target ? e.target : e;
      const name = elem.dataset.audio;
      const audio = new Audio(`./../assets/sounds/${name}.mp3`);
      audio.addEventListener('ended', () => {
        elem.classList.remove('active');
        resolve('ok');
      });
      audio.pause();
      audio.currentTime = 0;
      elem.classList.add('active');
      audio.play();
    });
  }

  play(elem, col) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.activeButton(elem)
          .then((res) => resolve(res))
          .catch(err => {
            console.log('eeerrro');
          });
      }, col);
    });
  }

  getSequence(times = 1) {
    let names = Object.keys(this._buttons).pick(times);
    return names;
  }

  playAll(list) {
    return new Promise((resolve, reject) => {
      const promises = [];

      list.forEach((name, i) => {
        promises.push(this.play(this._buttons[name], 1000 * i));
      });

      // resolve({ promises, list });
      Promise.all(promises)
        .then(res => {
          resolve(list);
        });

    });
  }
}