import Button from "./Button";
import Standard from "./Standard";
const Standardlist = ({data,handleDelete,indent,outdent,onchange}) => {
    return ( 
        <div>
        <div className="subject">
            <div className="left">
            <h3>Mathematics</h3> 
            </div>
           <div className="right">
           <Button color={"rgb(51, 122, 183)"} text={"Upload JSON"}/> <Button color={"cyan"} text={"Download JSON"}/>
           </div>
        </div>
        <div className="standard-list">
            <div className="heading">
                <div className="actions">
                    <h3>Actions</h3>
                    <p>Move,Outdent,
                    Indent,Delete</p>
                </div>
                <div className="standard">
                    <h3>Standard</h3>
                    <p>The text of standard</p>
                </div>
            </div>
        </div>
        <div>
            {
                data.map((standard,index)=>(
                    <Standard standard={standard} key={standard.id} index={index} handleDelete={handleDelete} indent={indent} outdent={outdent} onchange={onchange}/>
                ))
            }
        </div>
        </div>
    );
}
 
export default Standardlist;