import logo from './logo.svg';
import './App.css';
import MapComponent from './components/MapComponent';
import TimelineContainer from './containers/TimelineContainer';

function App() {
  return (
    <>
    <div className="pageContainer">Historical Timelines</div>
    <TimelineContainer/>
    </>
  );
}

export default App;
