import './App.css';
import {useState} from 'react';

const App = () => {

  const [items, setItems] = useState([]);
  const [inputList, setInputList] = useState(" ");

  const AddItem = () => {
    setItems((prev) =>{
      return [...prev,inputList]
    });
    setInputList(" ");
  }

  const DeleteItem = (id) => {
    setItems((prev) =>{
      return prev.filter((arr,index) =>{
        return index!==id;
      })
    })
  }

  const setInput = (event) => {
    setInputList(event.target.value);
  }

  return(
    <>
      <div className="mainDiv">
        <div className="card center_div" style={{width:"18rem"}}>
          <div className="card-body">
            <h1 className="card-title">TO DO List</h1>
            <input type="text" onChange={setInput} placeholder="Enter items..." value={inputList}/>
            <button onClick={AddItem}> + </button>
            <ol>
              {
                items.map((item,index)=>{
                  return (
                    <div>
                      <li key={index}><button class="btn" onClick={()=>{DeleteItem(index)}}><i class="fa fa-trash"></i></button>{item}</li>
                    </div>
                  )
                })
              }
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;