import add from "../icons/add.svg";
const Addbutton = ({addnew}) => {
    return ( 
      <div className="add-button" >
          <img src={add} alt="add" onClick={()=>{
         addnew();
       }}/>
       <h3 onClick={()=>{
         addnew();
       }}>Add a standard</h3>
      </div>
    );
}
 
export default Addbutton;