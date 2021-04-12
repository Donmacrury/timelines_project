import './App.css';
import MapComponent from './components/MapComponent';
import TimelineContainer from './containers/TimelineContainer';
import EventContainer from './containers/EventContainer';
import './semantic/dist/semantic.css';
import PokedexHeader from "./components/PokedexHeader";




function App() {
  return (
    <>
   
    <div className="pageContainer">
    <PokedexHeader name={"Visualise the Past"}/>
    <TimelineContainer/>
    
    </div>
    </>
  );
}

export default App;
