import  React,{Component} from 'react';
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import {Route,Switch} from 'react-router-dom';
import ErrorComponent from './ErrorComponent';
import ListTodosComponent from './ListTodosComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import UpdateComponent from './UpdateComponent';

class TodoApp extends Component{
  render(){
      return(
      <div>
          <HeaderComponent/>
      <Switch>
       <Route exact path="/" component={LoginComponent}/>
       <Route path="/login" component={LoginComponent}/>
       <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
       <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
       <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
       <AuthenticatedRoute path="/update/:id" component={UpdateComponent}/>
       <Route component={ErrorComponent}/>

      </Switch>
      <FooterComponent/>
          </div>
          )
  }
}

export default TodoApp;