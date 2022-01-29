import React from 'react'

const VerticalCards = ({name , value}) => {
    return (
        <div className=" verticalCard flex">
            <div className="leftsec"></div>
            <div className="rightSec">
                <h5 className="name">{name}</h5>
                <h5 className="value">{value}</h5>
            </div>
        </div>
    )
}

export default VerticalCards
