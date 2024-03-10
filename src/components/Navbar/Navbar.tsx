 import { Fragment } from "react"
const Navbar : React.FC =()=>{

    return <Fragment>

    <div className=" flex justify-between m-10  px-10">
        <h1 className="text-2xl after:content-['.'] after:text-red-500">ToDo</h1>
        <div className=" flex items-center ">
            <p >Welcome &nbsp; </p> 
            <p>Chetan &nbsp; </p>
             <div className="rounded-full w-8 h-8  border-4 border-red-600 border-double" >
                <h1 className=" text-center">C</h1>
             </div>
        </div>
    </div>
<hr />
    </Fragment>
}

export default Navbar