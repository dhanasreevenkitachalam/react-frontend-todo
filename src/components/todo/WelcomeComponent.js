import  React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import {Button} from 'reactstrap';
import HelloWorldService from '../../api/todo/HelloWorldService';

class WelcomeComponent extends Component{
      constructor(props){
          super(props);
          
      }
       retrieveMessage=()=>{
           HelloWorldService.executeHelloWorldService();
     
      }

  render(){

  //  const name=this.props.location.state.username;
    
      return(
      <div className="container">
    
     Hi {this.props.match.params.name}. You can manage your todos here <Link to='/todos'>Todos</Link>
   <h4>Get Customized Welcome message here <Button onClick={this.retrieveMessage} className="btn-btn-success">Welcome</Button></h4>
     
          </div>
          )
  }
}

export default withRouter(WelcomeComponent);