import React,{Component} from 'react';
import moment from 'moment';

import {Button, FormGroup, Input, Label,Col,Form} from 'reactstrap'
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';

class UpdateComponent extends Component{
    
    constructor(props){
        super(props);
        this.state={
            id:1,
            username:'',
            description:'',
            targetDate:moment(new Date()).format('YYYY-MM-DD'),
            done:''

        }
     
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })

        console.log(this.state.targetDate+"inside change")
    }
 


    handleSubmit=(event)=>{
         event.preventDefault();
        let username=AuthenticationService.getUserName();
        console.log(username);
        let id=this.props.match.params.id;
        let todo={
        id:id,
        description:this.state.description,
        targetDate:moment(this.state.targetDate).format('YYYY-MM-DD'),
        username:username,
        done:false
    }
    
 
    TodoDataService.updateTodoById(username,id,todo)
    .then((res)=>
    { 
    
        this.props.history.push('/todos')
    }
       // this.props.history.replace('/todos')}
    )
  // this.props.history.push('/todos')
 
    }

    componentDidMount(){

        const username=AuthenticationService.getUserName();
        const id=this.props.match.params.id;
        TodoDataService.retrieveTodoById(username,id)
        .then((response)=>{
            this.setState({
                description:response.data.description,
                targetDate:moment(response.data.targetDate).format('YYYY-MM-DD'),
            })
        })

        console.log(this.state.targetDate+"inside mount")
    }


    render(){
        return(
        <div>
            <h1>Todo</h1>
            <br/>
            <br/>
            <div className="container">
                   <div className="col-12 col-md-9">
                    <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                            <Label md={2} htmlFor="description"><b>Description</b></Label>
                              <Col md={10}>
                                  <Input type="text" name="description" id="description" 
                                  value={this.state.description}
                                  onChange={this.handleChange}>
                                      </Input></Col> 
                            </FormGroup>

                            <FormGroup row>
                            <Label md={2} htmlFor="targetDate"><b>Target Date</b></Label>
                              <Col md={10}><Input type="Date" name="targetDate" id="targetDate" value={this.state.targetDate}
                              onChange={this.handleChange}
                              ></Input></Col> 
                            </FormGroup>
                        <Button color="success">submit</Button>
                    </Form>
                    </div>
            </div>
        </div>
        )
    }
}

export default UpdateComponent;