import { ListDefination } from "./ListDefination";
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] 
const List: React.FC = () => {
    return (
      <div className=" ml-5 mr-5 flex justify-center h-5/6 overflow-y-auto" id="scrollbar2">
        <ul>
        {arr.map((el)=>{
          return  <li key={ el}>
              <ListDefination />
          </li> 
        })}
        </ul>

      </div>
    );
}

export default List