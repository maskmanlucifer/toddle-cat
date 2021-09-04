import Button from "./Button";
const Standardlist = () => {
    return ( 
        <>
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
                    <p>Move,Outdent,Indent,Delete</p>
                </div>
                <div className="standard">
                    <h3>Standard</h3>
                    <p>The text of standard</p>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Standardlist;