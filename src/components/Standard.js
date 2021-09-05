import move from "../icons/move.svg";
import Indent from "../icons/indent.svg";
import Outdent from "../icons/outdent.svg";
import del from "../icons/delete.svg";

const Standard = ({standard,handleDelete,index,indent,outdent,onchange}) => {

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
          <img src={Outdent} alt="outdent" onClick={()=>{
              outdent(index);
          }}/>
          <img src={Indent} alt="indent" onClick={()=>{
              indent(index);
          }}/>
          <img src={del} alt="delete" onClick={()=>{
              handleDelete(standard.id);
          }}/>
        </div>
        <div className="standard-text">
            <div className="indent-block" style={{ marginLeft:`${standard.tabs*25}px`}}></div>
            <div className="text"><input className="text-value" style={{color:fontColor}} type="textarea" placeholder="Edit text" value={standard.value} onChange={(e)=>{
                onchange(e,index);
            }}/></div>
        </div>
    </div>
    );
}
 
export default Standard;