import ToDoList from "./todolist/ToDoList";
import Calculator from "./calculator/Calculator";
import './style/style.css' 


function App() {
    return (
        <div className='container'>
            <div>
                {false && <ToDoList />}
                <Calculator />
            </div>
        </div>
    );
}

export default App;
