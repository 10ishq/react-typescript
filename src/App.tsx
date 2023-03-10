import Greet from './components/Greet';
import './App.css';
import Person from './components/Person';
import PersonList from './PersonList';
function App() {
  return (
    <div className="App">
      <Greet messageCount={20} name="Tanishq"  isLoggedIn={true}/>
      <Person name={{firstName:"First",lastName:"Last Name"}} />
    </div>
  );
}

export default App;
