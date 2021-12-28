

class AuthenticationService {

  registerSuccessfulUser(username,password){
      console.log(username);
      sessionStorage.setItem('AuthenticatedUser',username);
    
  }

  logout(){
      sessionStorage.removeItem('AuthenticatedUser')
      console.log("inside logout")
  }
  isLoggedIn(){

    const username=sessionStorage.getItem('AuthenticatedUser')
  
      if(username===null){
          console.log("inside not logged in")
          return false;
      }
      else return true;
  }

  getUserName(){
    
    const username=sessionStorage.getItem('AuthenticatedUser')
  
      if(username===null){
        
          return '';
      }
      else return username;
  }
}
export default new AuthenticationService();