import logo from './logo.svg';
import './App.css';
import Message from './Message';

function App() {

  const userName = 'Алена';

  return (
    <div className="App">
      <Message name={userName}/>
    </div>
  );
}

export default App;
