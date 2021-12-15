import Backdrop from './components/Backdrop';
import Modal from './components/modal';
import Todo from './components/Todo';

function App() {
  return (
  <div>
    <h1>My To-Dos</h1>
    <Todo text='Learn React'/>
    <Todo text='Master React'/>
    <Todo text='Pwn React'/>
    <Modal/>
    <Backdrop />
  </div>
  );
}

export default App;
