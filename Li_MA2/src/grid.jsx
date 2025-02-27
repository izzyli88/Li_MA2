import "./styles.css";
import Box from "./box";
import {useState} from "react";

export default function Grid(){
    const[boxes, fillBox] = useState([false, false, false, false]);

    function toggleBox(idx) {       // creates new box arr w/ updated box at idx index
        const newBoxes = [...boxes];
        newBoxes[idx] = !boxes[idx];
        fillBox(newBoxes)
    }

    function countFilled(boxes) {
        let count = 0;
        boxes.forEach(element => {
            if (element) {
                count += 1
            }
        });
        return count
    }

    return(
        <div>
            <h2 className= "count">
                Count: {countFilled(boxes)}
            </h2>

            <div className = "grid">
                {boxes.map((status, idx) => (
                    <Box key={idx} filled={status} toggle={() => toggleBox(idx)} />
                ))}
            </div>
        </div>
    )
}
