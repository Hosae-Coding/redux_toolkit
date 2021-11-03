import './App.css';
import ChangeColors from './components/ChangeColors';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
   return (
      <div className="App">
         <Profile />
         <Login />
         <ChangeColors />
      </div>
   );
}

export default App;
