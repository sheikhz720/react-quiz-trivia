import React, { useEffect, useState } from "react";

const RadioButtons = ({ radioOptions = [], onValueChange, reset = false }) => {
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        setSelectedOption("");
    },[reset])

    return (
        <>
            {radioOptions.map((option, index) => {
                return (
                    <div className="radio" key={index}>
                    <label>
                        <input
                        type="radio"
                        value={option.value}
                        checked={selectedOption === option.value}
                        onChange={(e) => {
                            setSelectedOption(e.target.value)
                            onValueChange(e.target.value)
                        }}
                        />
                        {option.label}
                    </label>
                    </div>
                )
            })}    
        </>
    )
}

export default RadioButtons;