import './App.css';
import React,{useState} from 'react';
import data from './data';
import Tours from './components/Tours'
function App() {
   const [tours,setTours] = useState(data);
    
    function removeTour(id){
      const newtours = tours.filter(tour => tour.id !== id);
      setTours(newtours); 
    }
    


  if(tours.length == 0){
    return(
        <div className='refresh'>
          <h2>No Tours Left</h2>
          <button onClick={() => setTours(data) }>Refresh
          </button>
        </div>
    )
  }

    else{return (
      <Tours tours = {tours} removeTour ={removeTour} ></Tours>);


    }
}

export default App;
