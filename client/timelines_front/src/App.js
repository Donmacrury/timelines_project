import logo from './logo.svg';
import './App.css';
import MapComponent from './components/MapComponent';
import TimelineContainer from './containers/TimelineContainer';
import FilterContainer from './components/FilterContainer';

function App() {
  return (
    <>
    <div className="pageContainer">Historical Timelines</div>
    {/* <TimelineContainer/> */}
    <FilterContainer />
    </>
  );
}

export default App;
