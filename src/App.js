import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App" style={{backgroundColor:'white'}}>

      {/* Header */}
      <Header/>

      {/* Tinder Cards */}
      <TinderCards />

      {/* Buttons */}
      <SwipeButtons />

    </div>
  );
}

export default App;
