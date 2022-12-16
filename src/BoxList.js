import React, {useState} from 'react'
import Box from './Box.js'
import NewBoxForm from './NewBoxForm.js'

const BoxList = () => {
    const [boxes, setBoxes] = useState([{backgroundColor:'red', height: '10', width: '10'}])
    const addBox = (backgroundColor, height, width) => {
        setBoxes(boxes => ([...boxes, {backgroundColor, height, width}] ))
    }
    const remove = (e) => {

    }
    return (
        <div>
        {boxes.map(({backgroundColor, height, width}) => 
            <Box remove={remove} backgroundColor={`${backgroundColor}`} height={`${height}`} width={`${width}`} />)}
            <NewBoxForm addBox={addBox} />
        </div>
    )
}
export default BoxList;