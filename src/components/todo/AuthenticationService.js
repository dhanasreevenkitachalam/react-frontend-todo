import axios from 'axios'

class AuthenticationService {

  registerSuccessfulUser(username,password){
      console.log(username);
      sessionStorage.setItem('AuthenticatedUser',username);
      this.setupAxiosInterceptors();
    
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

  setupAxiosInterceptors(){
    let username='dhanasree'
        let password='password'
         let basicAuthorization= 'Basic ' + window.btoa(username+":"+password)
         console.log(basicAuthorization)

    axios.interceptors.request.use(
      (config)=>{

        if(this.isLoggedIn()){
          config.headers.authorization=basicAuthorization
        }
        return config;
      }
    )
  }
}
export default new AuthenticationService();