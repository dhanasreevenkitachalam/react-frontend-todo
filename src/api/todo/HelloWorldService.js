import axios from "axios";

class HelloWorldService{

    executeHelloWorldService(){
       return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldServiceBean(){
        return axios.get('http://localhost:8080/hello-world-bean')
     }
    
     executehelloWorldBeanPathVariableService(name){
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
     }
    
}

export default new HelloWorldService();