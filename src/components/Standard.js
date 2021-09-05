import move from "../icons/move.svg";
import indent from "../icons/indent.svg";
import outdent from "../icons/outdent.svg";
import del from "../icons/delete.svg";

const Standard = ({standard,handleDelete}) => {

    let fontColor = "rgb(47, 194, 186)";
    if(standard.tabs === 1) {
        fontColor = "black";
    } else if(standard.tabs === 2) {
        fontColor = "grey";
    }

    return ( 
    <div className="standard-indivisual">
        <div className="actions">
          <img src={move} alt="move" />
          <img src={outdent} alt="outdent" />
          <img src={indent} alt="indent" />
          <img src={del} alt="delete" onClick={()=>{
              handleDelete(standard.id);
          }}/>
        </div>
        <div className="standard-text">
            <div className="indent-block" style={{ marginLeft:`${standard.tabs*25}px`}}></div>
            <div className="text" style={{color:fontColor}}>{standard.value}</div>
        </div>
    </div>
    );
}
 
export default Standard;