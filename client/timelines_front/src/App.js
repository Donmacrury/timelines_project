
import './App.css';
import MapComponent from './components/MapComponent';
import TimelineContainer from './containers/TimelineContainer';
import EventContainer from './components/EventContainer';
import './semantic/dist/semantic.css';
import PokedexHeader from "./components/PokedexHeader";



function App() {
  return (
    <>
    
    {/* 
    <Router>
    <NavBar/>
    <Switch>
    <Route path="/timeline" exact render={()=> <TimelinePage>}>
    </Switch>
    </Router>
    */}
    
    <div className="pageContainer">
    <PokedexHeader name={"Don, Fras and Al"}/></div>
    <TimelineContainer/>
    
    <EventContainer />
    
    </>
  );
}

export default App;
