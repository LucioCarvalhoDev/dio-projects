class View {
    constructor() {
        this.target = document.getElementById('interface');
    }

    write(str = "") {
        this.target.innerHTML = `<span id="msg">${str}</span>`;
        setTimeout(this.clear.bind(this), 4000);
    }

    clear() {
        this.target.innerHTML = "";
    }
}