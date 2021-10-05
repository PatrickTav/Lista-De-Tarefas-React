import {useState} from "react"
import * as Con from "./App.styles"
import {Item} from "./types/item"
import {ListItem} from "./components/ListItem"
import {AddArea} from "./components/AddArea"
import{Reset} from "./components/Reset"



const App = () =>{
const [list, setList] = useState<Item[]>([
// {id:1, name:"Comprar o pão", done:false},
]) 




const handleAddTask = (taskName: string) =>{
let newList = [...list]
newList.push({
  id:list.length + 1,
  name:taskName,
  done:false
})
setList(newList)
}

return(

  
   
      <Con.Container>
          <Con.Area>
      
            <Con.Header>
              Lista de Tarefas
            </Con.Header>
            <AddArea onEnter={handleAddTask}/>
            {list.map((item, index)=>(
                <ListItem key={index} item ={item}/>
            ))}
            <Reset/>
          </Con.Area>
      </Con.Container>
   
 

)


}

export default App