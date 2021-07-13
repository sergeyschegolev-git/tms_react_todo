import './App.css';
import { Header } from './components/Header';
import { TodosList } from './components/Todo/TodosList';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <TodosList />
      </Main>
    </div>
  );
}

export default App;
