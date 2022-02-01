import ToDoList from "./todolist/ToDoList"
import Calculator from "./calculator/Calculator"
import TicTacToe from "./tictactoe/TicTacToe"
import Chess from "./chess/Chess"
import './style/style.css' 


function App() {
    return (
        <div className='container'>
            <div>
                {false && <ToDoList />}
                {false && <Calculator />}
                {false && <TicTacToe />}
                {true && <Chess />}
            </div>
        </div>
    );
}

export default App;
