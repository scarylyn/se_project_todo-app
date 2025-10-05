class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      const todo = this._renderer(item);
      this._container.appendChild(todo);
    });
  }

  addItem(item) {
    const todoData = this._renderer(item);
    this._container.appendChild(todoData);
  }
}

export default Section;
