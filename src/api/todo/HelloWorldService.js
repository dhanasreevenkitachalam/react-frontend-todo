import axios from "axios";

class HelloWorldService{

    executeHelloWorldService(){
       return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldServiceBean(){
        return axios.get('http://localhost:8080/hello-world-bean')
     }
    
     executehelloWorldBeanPathVariableService(name){
        let username='dhanasree'
        let password='password'
         let basicAuthorization= 'Basic ' + window.btoa(username+":"+password)

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`,{
           headers:{
         
             Authorization:basicAuthorization
           }
        })
     }
    
}

export default new HelloWorldService();