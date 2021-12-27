import React,{Component} from 'react';

import {withRouter} from 'react-router-dom';
import {Table,Button} from 'reactstrap';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';


class ListTodosComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            todos:[],
            message:''
        }
    }

    componentDidMount(){
      this.refreshTodos();

    }


    refreshTodos=()=>{
        const username=AuthenticationService.getUserName();
        TodoDataService.retrieveAllTodos(username)
        .then((response)=>{
           this.setState({
               todos:response.data
           })
        })
    
    }
    handleDelete=(id)=>{
      const username=AuthenticationService.getUserName()
      TodoDataService.deleteTodoById(username,id)
      .then((response)=>{
          console.log(response);
          this.setState({
              message:`Todo with ${id} successfully deleted`
          })

          this.refreshTodos();
      })
    }

    handleUpdate=(id)=>{
        this.props.history.push(`./update/${id}`);

    }
    render(){

        const todos=this.state.todos.map((todo)=>{
          
            return(
                  
                    <React.Fragment key={todo.id}>
                        <tr>
                            <th>{todo.id}</th>
                            <th>{todo.description}</th>
                            <th>{todo.targetDate.toString()}</th>
                            <th>{todo.done.toString()}</th>
                            <th><Button color="danger" onClick={()=>this.handleDelete(todo.id)}>Delete</Button></th>
                            <th><Button color="warning" onClick={()=>this.handleUpdate(todo.id)}>Update</Button></th>
                        </tr>
                        </React.Fragment>
                
            )
        })
        return(
            <div className="container">
                <br/>
            <h1>List of Todos</h1>
            {
                this.state.message&&
                <div style={{color:"green",backgroundColor:"lightgreen"}}>{this.state.message}</div>
               
            }
            <br/>
            <Table bordered>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Iscompleted</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
                </thead>
            <tbody>
                 {todos}
            </tbody>
        </Table>
        </div>

        )
    }

}

export default withRouter(ListTodosComponent);