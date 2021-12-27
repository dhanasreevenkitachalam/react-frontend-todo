import  React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import {Button} from 'reactstrap';
import HelloWorldService from '../../api/todo/HelloWorldService';

class WelcomeComponent extends Component{
      constructor(props){
          super(props);

          this.state={
              welcomeMessage:'',
              errorMessage:''
          }
          
      }
       retrieveMessage=()=>{
           HelloWorldService.executehelloWorldBeanPathVariableService(this.props.match.params.name)
           .then((response)=>{
               console.log(response);

            this.handleMessage(response)
           })
           .catch((err)=>{
               this.handleError(err)
           })
     
      }

      handleMessage=(response)=>{
          this.setState({
              welcomeMessage:response.data.message
          })
      }
      handleError=(err)=>{
          this.setState({
              errorMessage:err.response.data.message
          })
      }

  render(){

  //  const name=this.props.location.state.username;
    
      return(
      <div className="container">
    
     Hi {this.props.match.params.name}. You can manage your todos here <Link to='/todos'>Todos</Link>
   <h4>Get Customized Welcome message here <Button onClick={this.retrieveMessage} color="info">Welcome</Button></h4>

      <div>
          {this.state.welcomeMessage}
      </div>
      <div>
          {this.state.errorMessage}
      </div>
     
          </div>
          )
  }
}

export default withRouter(WelcomeComponent);