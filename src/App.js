import { Box, Paper, Typography, TextField, Button } from "@material-ui/core";
import { useState } from "react";

function App() {
  
  const [todoInput, setTodoInput] = useState("");//intialize empty Input field 
  const [items, setItems] = useState([]); //create Empty [] names items
  const addItem = () => {
    if (!todoInput) {
    } else {
      setItems([...items, todoInput]); //update Items with Input Field Value
       setTodoInput(''); 
    }
  }
const deleteItem = (id)=>{
  const deletedItem = items.filter((currentElement,index)=>{ // delete element which index and id same
    return index !== id; 
  })
  setItems(deletedItem);//update 
}

  return (
    <div className="App" style={{
      textAlign: "center"
    }}>
      <Typography variant="h2" style={{
        margin: "3rem"
      }}>The Todo App</Typography>

      <Box style={{
        display: "flex",
        justifyContent: "center",
      }}>
        <Paper elevation={4} style={{

          width: "800px",
          height: "auto",

        }}>
          <Box display="flex" style={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}>
            {/* //input field */}
            <TextField label="Add" variant="outlined" value={todoInput} style={{
                margin: "auto",
                width: "80%",
              }} onChange={(e) => setTodoInput(e.target.value) }
            />
            <Button variant="contained" onClick={addItem} style={{
              padding: "1rem",
              marginRight: "1rem",
              width: "5rem",
              height: "3.5rem",
              backgroundColor: "#000",
              color: "#fff"
            }} >Submit</Button>

          </Box>

          <Box>
           {
              items.map((currentElement ,index )=> {
                return(
                  <Paper style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "1rem 2rem",
                    backgroundColor: "#1de9b6",
                    width: "80%",
        
                  }} key={index}>
                    <Typography variant="h6" style={{
                      color: "#fff",
                      textAlign: "left",
                      padding: "10px"
                    }}>{currentElement} </Typography>
                    {/* //Delete Button */}
                    <Button variant="contained" color="secondary" onClick={() => deleteItem(index)} >Delete</Button>
                  </Paper>
                )
              })
            }
           
          </Box>


        </Paper>
      </Box>
    </div>
  );
}

export default App;
