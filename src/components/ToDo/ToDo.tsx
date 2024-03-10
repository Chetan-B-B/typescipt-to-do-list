import Edit from "./Edit/Edit"
import Input from "./Input/Input"
import List from "./List/List"

const ToDo : React.FC = ()=>{
    
    return <div className="grid grid-cols-3   h-screen overflow-hidden ">
            <Input/>
            <List/>
            <Edit/>
    </div>
}

export default ToDo