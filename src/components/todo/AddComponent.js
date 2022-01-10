import React,{Component} from 'react';
import { Label,Form,Col,Input, FormGroup,Button } from 'reactstrap';
import moment from 'moment';
import AuthenticationService from './AuthenticationService';
import TodoDataService from '../../api/todo/TodoDataService';


class AddComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            description:'',
            targetDate:moment(new Date()).format('YYYY-MM-DD')
        }
    }

    handleChange=(event)=>{

        this.setState({
            [event.target.name]:event.target.value
        })
        
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        let username=AuthenticationService.getUserName();
        let todo={
            username:username,
            description:this.state.description,
            targetDate:this.state.targetDate,
            done:false
        }

        TodoDataService.addNewTodo(username,todo)
        .then((response)=>{
            console.log(response)
            this.props.history.push('/todos')
        })
    }



render(){
    return(
       <div className="container">
           <br/>
           <h3>Enter Details of New Todo</h3>
           <br/>
           <br/>
           <div className="col-12 col-md-10">
               <Form onSubmit={this.handleSubmit}>
                   <FormGroup row>
                       <Label htmlFor="description" md={2}><b>Description:</b></Label>
                    
                       <Col md={10}>
                           <Input type="text" name="description" id="description" onChange={this.handleChange}
                           value={this.state.description}></Input>
                       </Col>
                   </FormGroup>
                   <FormGroup row>
                       <Label htmlFor="targetDate" md={2}><b>Target Date:</b></Label>
                    
                       <Col md={10}>
                           <Input type="date" name="targetDate" id="targetDate" onChange={this.handleChange}
                           value={this.state.targetDate}></Input>
                       </Col>
                   </FormGroup>
                   <br/>
                    <FormGroup row>
                        <Col md={{offset:4, size:3}}>
                        <Button color="warning">Add Todo</Button>
                            </Col>                   
                    </FormGroup>
                       
                  

               </Form>
           </div>
          
     
        </div>
        )
}
}

 export default  AddComponent;