import { Axios } from 'axios';

class TodoAPI extends Axios {
  constructor() {
    super({ baseURL: 'http://52.214.150.95:3000'});
  }

  tasks(params) {
    return this.get(`/todo/list`, { params })
  }

  updateTask(id, data) {
    return this.patch(`/todo/${id}`, data)
  }

  addTask(data) {
    return this.post(`/todo/create`, data)
  }

  removeTask(id) {
    return this.delete(`/todo/${id}`)
  }
}

export default new TodoAPI();