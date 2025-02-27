import "./styles.css";
import Box from "./box";
import {useState} from "react";

export default function Grid(){
    const[boxes, fillBox] = useState([false, false, false, false]);

    function toggleBox(idx) {
        const newBoxes = [...boxes];
        newBoxes[idx] = !boxes[idx];
        fillBox(newBoxes)
    }

    return(
        <div className = "gridContainer">
            <h2 className= "count">
                Count: {boxes.filter(Boolean).length}
            </h2>

            <div className = "grid">
                {boxes.map((status, idx) => (
                    <Box key={idx} filled={status} toggle={() => toggleBox(idx)} />
                ))}
            </div>
        </div>
    )
}
