import Button from "./Button";
import move from "../icons/move.svg";
import Indent from "../icons/indent.svg";
import Outdent from "../icons/outdent.svg";
import del from "../icons/delete.svg";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Standardlist = ({data,handlednd,handleDelete,indent,outdent,onchange}) => {

    return ( 
        <div className="binding-container">
            <div className="subject">
                <div className="left">
                   <h3>Mathematics</h3> 
                </div>
                <div className="right">
                <Button color={"rgb(51, 122, 183)"} text={"Upload JSON"}/> <Button color={"cyan"} text={"Download JSON"}/>
                </div>
            </div>
            <DragDropContext onDragEnd={(param)=>{
                const srcI=param.source.index;
                const desI = param.destination.index;
                handlednd(srcI,desI);
            }}>
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
            <Droppable droppableId="droppable-1">
            {(provided, _) => (
            <div className="task-list"   ref={provided.innerRef} {...provided.droppableProps}>
                {
                    data.map((standard,index)=>(
                    <Draggable key={standard.id} draggableId={"draggable-"+standard.id} index={index}>
                    {(provided, snapshot) => (
                        <div className="standard-indivisual"  ref={provided.innerRef} {...provided.draggableProps} 
                        style = {{ 
                            ...provided.draggableProps.style,
                            marginLeft: snapshot.isDragging ? "10%" : "10%"
                        }}
                        >
                        <div className="actions">
                            <img src={move} alt="move" {...provided.dragHandleProps}/>
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
                            <div className="text"><input className="text-value"  style={{color: standard.tabs === 0 ? " #0275d8" : "black", opacity: 2/Math.pow(2, standard.tabs)}} type="textarea" placeholder="Edit text" value={standard.value} onChange={(e)=>{
                                onchange(e,index);
                            }}/></div>
                        </div>
                        </div>
                    )}
                    
                    </Draggable>
                    ))
                }
                {provided.placeholder}
            </div>
            )}
            </Droppable>
            </DragDropContext>
        </div>
    );
}
 
export default Standardlist;