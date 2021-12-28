import axios from 'axios';

class TodoDataService{

    retrieveAllTodos( name){
        return axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    retrieveTodoById(name,id){
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`)
    }

    deleteTodoById(name,id){
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }

    updateTodoById(name,id,todo){
        console.log(todo.id);
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`,todo)
    }

}

export default new TodoDataService();