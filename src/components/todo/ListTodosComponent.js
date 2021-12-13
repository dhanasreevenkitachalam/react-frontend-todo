import React,{Component} from 'react';
import todos from '../../Todos';
import {withRouter} from 'react-router-dom';
import {Table} from 'reactstrap'
class ListTodosComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            todos:todos
        }
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
                        </tr>
                        </React.Fragment>
                
            )
        })
        return(
            <div className="container">
                <br/>
            <h1>List of Todos</h1>
            <br/>
            <Table bordered>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Iscompleted</th>
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