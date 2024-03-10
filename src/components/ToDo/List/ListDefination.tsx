import { faCheck, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export  const ListDefination : React.FC = ()=>{

    return <div className="w-full rounded-full h-12 bg-yellow-400 mt-5 flex  justify-between items-center">
    <div className="rounded-full w-12 h-12 border-4 border-purple-400" />
    <p className="truncate w-48 ">{"pneumonoultramicroscopicsilicovolcanoconiosis"}</p>
    <div className="flex justify-between mx-4 cursor-pointer">
      <FontAwesomeIcon icon={faCheck} size="sm" />
      <FontAwesomeIcon icon={faPencil} size="sm"  className="mx-4"/>
      <FontAwesomeIcon icon={faTrash} size="sm" />
    </div>
  </div>
}