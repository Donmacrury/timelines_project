import logo from './logo.svg';
import './App.css';
import MapComponent from './components/MapComponent';
import TimelineContainer from './containers/TimelineContainer';
import EventContainer from './components/EventContainer';

function App() {
  return (
    <>
    <div className="pageContainer">Historical Timelines</div>
    {/* <TimelineContainer/> */}
    <EventContainer />
    </>
  );
}

export default App;
