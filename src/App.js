import ToDoList from "./todolist/ToDoList";
import Calculator from "./calculator/Calculator";
import TicTacToe from "./tictactoe/TicTacToe"
import './style/style.css' 


function App() {
    return (
        <div className='container'>
            <div>
                {false && <ToDoList />}
                {false && <Calculator />}
                <TicTacToe />
            </div>
        </div>
    );
}

export default App;
