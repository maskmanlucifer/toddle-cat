import Header from "./components/Header";
import Addbutton from "./components/Addbutton";
import Standardlist from "./components/Standardlist";
import { v4 as uuid } from "uuid";
import {useState} from 'react';
function App() {
  const [data, setData] = useState([
		{ id: uuid(), value: "Numbers", tabs: 0 },
		{ id: uuid(), value: "Counting", tabs: 1 },
		{ id: uuid(), value: "Measurement", tabs: 0 },
		{ id: uuid(), value: "Use simple fraction", tabs: 1 },
		{ id: uuid(), value: "Units", tabs: 2 },
	]);
  
  const handleDelete = (id) => {
    let ind=-1;

    for(let i=0;i<data.length;i++) {
      if(data[i].id === id) {
        ind=i;
        break;
      }
    }
    
    let newData=[...data];

    if(ind !== -1) {
      let count = 1;
      if(data[ind].tabs === 0) {
        for(let i=ind+1;i<data.length;i++) {
          
          if(data[i].tabs === 0) {
            break;
          }
          count++;
        }
      } else if(data[ind].tabs === 1) {
        
        for(let i=ind+1;i<data.length;i++) {
          if(data[i].tabs === 1 || data[i].tabs === 0) {
            break;
          }
          count++;
        }
      }
      
      newData.splice(ind,count);
      setData(newData);
    }
    
  }
  return (
    <div className="App">
      <Header/>
      <Standardlist data={data} handleDelete={handleDelete}/>
      <Addbutton />
    </div>
  );
}

export default App;
