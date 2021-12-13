import React,{Component} from 'react';
import AuthenticationService from './AuthenticationService';
import {Navbar,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';
import {withRouter} from 'react-router-dom'


class HeaderComponent extends Component{

    
    render(){
        const loggedIn=AuthenticationService.isLoggedIn();
      
        return(
       
            <header>
                <Navbar color="dark" expand="md">
                  <NavbarBrand href="/"> Todo Management</NavbarBrand>
              
                    <Nav className="mr-right" >
                        <NavItem>
                          {loggedIn&&  <NavLink href="/welcome/dhanya">Home</NavLink>}
                        </NavItem>
                        <NavItem>
                          {loggedIn&&   <NavLink href="/todos">Todos</NavLink>}
                        </NavItem>
                  
                        <NavItem >
                       {!loggedIn &&  <NavLink href="/login" >Login</NavLink>}
                        </NavItem>
                        <NavItem >
                       {loggedIn&&   <NavLink href="/logout" onClick= {AuthenticationService.logout} >Logout</NavLink>}
                        </NavItem>
                     
                    </Nav>
            

                </Navbar>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);