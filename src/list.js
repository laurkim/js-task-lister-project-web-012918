const List = (() => {
  let id = 1
  let all = []
  return class List {
    constructor(title) {
      this.title = title
      this.id = ++id
      all.push(this)
    }

    render() {
      return (`
        <div class="list">
          <h2>
            <button id="li-${this.id}" class="delete-list">X</button>
            ${this.title}
          </h2>
          <ul>
          </ul>
        </div>
      `)
    }

    static all() {
      return [...all];
    }
  }
})()
