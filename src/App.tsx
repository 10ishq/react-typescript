import Greet from './components/Greet';
import './App.css';
import Person from './components/Person';
import PersonList from './PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
function App() {
  return (
    <div className="App">
      <Status status="Loading"/>
      <Heading >PlaceHolder Text</Heading>
    </div>
  );
}

export default App;
