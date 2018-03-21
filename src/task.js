const Task = (() => {
  let id = 1
  let all = []
  return class Task {
    constructor(description, priority, list) {
      //your code here
      this.description = description
      this.priority = priority
      this.id = ++id
      this.listId = list.id
      all.push(this)
    }

    render() {
      return (`
          Task: ${this.description}
          <br>
          Priority: ${this.priority}
        `)
    }

    static all() {
      return [...all];
    }
  }
})()
