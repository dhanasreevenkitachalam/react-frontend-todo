
import TodoApp from "./components/todo/TodoApp";
import {BrowserRouter} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <TodoApp/>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
