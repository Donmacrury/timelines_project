import logo from './logo.svg';
import './App.css';
import MapComponent from './components/MapComponent';
import TimelineContainer from './containers/TimelineContainer';
import EventContainer from './components/EventContainer';

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
    
    <div className="pageContainer">Historical Timelines</div>
    
    <EventContainer />
    <TimelineContainer/>
    
    </>
  );
}

export default App;
