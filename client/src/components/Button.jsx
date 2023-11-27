import React from "react";
import { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [textColor, setTextColor] = useState('red')
    const [toggle, setToggle] = useState(true)
    const [bgColor, setBGColor] = useState("white")
    const [newFontSize, setNewFontSize] = useState(32)

    const colorChange = () => {
        const newColor = textColor === "red" ? "green" : "red"
        setTextColor(newColor)
    }
    const backgroundColorChange = () => {
        const newBGColor = bgColor === "white" ? "orange" : "white"
        setBGColor(newBGColor)
    }
    return (
        <div className="wrapper" style={{ backgroundColor: bgColor }}>
            {(
                <body style={{ backgroundColor: bgColor }}></body>
            )}
            <div >
                {toggle && (
                    <h1 style={{ color: textColor, fontSize: newFontSize }}> you have {likes} Likes</h1>
                )}
                <button onClick={() => setLikes(likes + 1)}>Like</button>
                <button onClick={() => setLikes(likes - 1)}>Dislike</button>
                <button onClick={() => setNewFontSize(newFontSize + 1)}>Increase Font</button>
                <button onClick={() => setNewFontSize(newFontSize - 1)}>Decrease Font</button>
                <button onClick={() => {
                    setLikes(0); setBGColor("white"); setTextColor("red"); setToggle(true)
                    setNewFontSize(32)
                }}>reset</button>
                <button onClick={() => setToggle(!toggle)}>Toggle Visibillity</button>
                <button onClick={colorChange}>Change Color</button>
                <button onClick={backgroundColorChange}>Change Background</button>
            </div>
        </div>
    )
}

export default LikeButton;