
import './App.css';
import PermanentDrawerLeft from './component/Home.js';
import { BasicModalDialog } from './component/Login';

function App() {
  return (
    <div className="App">
      <BasicModalDialog/>
      <PermanentDrawerLeft/>
    </div>
  );
}

export default App;
