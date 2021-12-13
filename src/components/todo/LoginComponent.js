import  React,{Component} from 'react';
import {Button,Row,Input} from 'reactstrap';
import AuthenticationService from './AuthenticationService';
import {withRouter} from 'react-router-dom';
class LoginComponent extends Component{

    constructor(){
        super();

        this.state={
            username:"",
            password:"",
        
        }
    }

    handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name]:value
        })
    }

    handleLogin=()=>{
  
        if(this.state.username==='dhanasree' && this.state.password==='password'){
            AuthenticationService.registerSuccessfulUser(this.state.username,this.state.password)
            const name=this.state.username
  this.props.history.push({
      pathname:`/welcome/${name}`,
      state:{
          username:this.state.username
      }
  }
  )

}   
    }
  render(){
      return(
      <div className="container">
          <Row className="col-md-5 col-12 ">
           <b> Username:</b>  <Input type="text" id="username" name="username"
              value={this.state.username} placeholder="Username"
                  onChange={this.handleChange}>

              </Input>

           <b>  Password:</b>
                <Input type="password" id="password" name="password"
              value={this.state.password} placeholder="password"
              onChange={this.handleChange}>

              </Input>
           
              <div className="mt-2">
              <Button className=" btn btn-success"onClick={this.handleLogin}>Login</Button>
              </div>
          </Row>

        
       </div>
          )
  }
}

export default withRouter(LoginComponent);