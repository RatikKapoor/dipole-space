import React from "react"

interface HobbyProps {
    hobby: string;
    selected: boolean
}

export const HobbyButton: React.FC<HobbyProps> = ({ hobby, selected }) => {

    return (
        <div className={`hobby-button ${selected && 'selected'}`} >
            <div className="hobby-button-icon">
            </div>
            <p>{hobby}</p>
        </div>
    )
}
