Array.prototype.getRandom = function () {
    return this[Math.trunc(Math.random() * this.length)];
};
Array.prototype.pick = function (times = 1) {
    let list = [];
    while (list.length < times) list.push(this.getRandom());
    return list;
};
class Stack {
    constructor(config = { size: 3, garbage: false }) {
        this._items = [];
        this._size = config.size;
        if (config.garbage)
            this._garbage = new Set();
    }
    pile(value) {
        this._items.splice(0, 0, value);
        if (this._items.length > this._size) {
            this.remove();
        }
        if (this._garbage) {
            this._garbage.add(value);
        }
    }
    remove() {
        this._items.pop();
    }
    fullWith(value) {
        this._items = [];
        while (this._items.length < this._size) {
            this.pile(value);
        }
    }
    get items() {
        return Array.from(this._items);
    }
    get garbage() {
        return Array.from(this._garbage);
    }
    get size() {
        return this._size;
    }
    get length() {
        return this._items.length;
    }
}
