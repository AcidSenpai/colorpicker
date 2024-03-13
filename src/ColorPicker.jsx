import { useState } from "react"


function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF")

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }
    
    return(
        <div className="color-picker-app">
            <h1 className="color-picker_title">Color Picker</h1>
            <div className="color-picker_display" style={{backgroundColor: color}}>
                <span className="picker-display_span">Color: {color}</span>
            </div>
            <div className="color-picker-tool">
                <span className="picker-tool_title">Select color</span>
                <input type="color" value={color} onChange={(e) => handleColorChange(e)} className="picker-tool_input"/>
            </div>
        </div>
    )

}

export default ColorPicker