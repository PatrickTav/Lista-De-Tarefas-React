
import {useState, KeyboardEvent} from "react"
import * as Con from "./styles"

type Props = {
    onEnter:(taskName:string) => void
}




export const AddArea= ({onEnter}:  Props) =>{
 const[inputText, setInputText] = useState("")
 const handleKeyUp = (e: KeyboardEvent)=>{
        if(e.code === "Enter" && inputText !== ""){
            onEnter(inputText)
            setInputText('')
        }
 }

    return(
        <Con.Container>
            <div className="image">➕</div>
            <input
                 type="text" 
                 placeholder="Adicione uma tarefa"
                 value={inputText}
                 onChange ={e =>setInputText(e.target.value)}
                 onKeyUp={handleKeyUp}   
            />
        </Con.Container>
    )
}

