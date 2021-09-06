import Header from "./components/Header";
import Addbutton from "./components/Addbutton";
import Standardlist from "./components/Standardlist";
import { v4 as uuid } from "uuid";
import {useState} from 'react';

function App() {

  // initialize useState Hook
  const [data, setData] = useState([
		{ id: uuid(), value: "Numbers", tabs: 0 },
		{ id: uuid(), value: "Counting", tabs: 1 },
		{ id: uuid(), value: "Measurement", tabs: 0 },
		{ id: uuid(), value: "Use simple fraction", tabs: 1 },
		{ id: uuid(), value: "Units", tabs: 2 },
	]);
  

  // function for handling indent operation
  const indent = (index) => {
    const dataCopy = [...data];
    if(index === 0 ) {
      return ;
    }

    if((dataCopy[index-1].tabs - dataCopy[index].tabs >= 0)  && dataCopy[index].tabs<2) {
      dataCopy[index].tabs++;
    }

		setData(dataCopy);
  };

  // function for handling outdent operation
  const outdent = (index) => {
    const dataCopy = [...data];
    let len = dataCopy.length-1;

    if(index === len) {
      if (dataCopy[index].tabs > 0) {
        dataCopy[index].tabs--;
      }
    } else {
      if((dataCopy[index+1].tabs - dataCopy[index].tabs <= 1) && dataCopy[index].tabs>0) {
        dataCopy[index].tabs--;
      }
    }

    setData(dataCopy);
  };
 
  // handling text field change save 
  const onchange = (e,index)=>{
    const dataCopy = [...data];
    dataCopy[index].value = e.target.value;
    setData(dataCopy);
  }
  
  // adding new standard
  const addnew = () => {
    setData([
			...data,
			{ id: uuid(), value: "", tabs: 0 }
		]);
  };
  
  // deleting a standard
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
    
  };
 
  // handling drag and drop
  const handlednd = (srcI,desI) => {
    let newData = [...data];
    newData.splice(desI,0,newData.splice(srcI,1)[0]);
    let allGood=true;
    if(newData[0].tabs !== 0) {
     allGood=false;
    }
    for(let i=0;i<newData.length-1;i++) {
      if(newData[i].tabs === 0) {
        if(newData[i+1].tabs === 2) {
          allGood=false;
          break;
        }
    }
    }
    if(allGood) {
      setData(newData);
    } else {
      alert("this drag can not be performed , because dragging this element violates few parent child relation");
      return;
    }
    
  };

  return (
    <div className="App">
      <Header/>
      <Standardlist data={data} handlednd={handlednd} handleDelete={handleDelete} indent={indent} outdent={outdent} onchange={onchange}/>
      <Addbutton addnew={addnew}/>
    </div>
  );
}

export default App;
