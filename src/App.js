import NewTodo from './Components/NewTodo';
import TodoList from './Components/TodoList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <div  style={{marginTop: 40}}>
      <h1>Todo list</h1>
        <div>
          <NewTodo />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;