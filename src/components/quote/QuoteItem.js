import React from 'react'

const QuoteItem = ({ item }) => {
    return (
        <div>
            <div className="row" >
                <div className="col s3" style={{ textAlign: "right", color: "white", fontFamily: "monospace" }}>{item.author}:</div>
                <div className="col s9" style={{ textAlign: "left", color: "white", fontFamily: "monospace" }}>{item.quote}</div>
            </div>
        </div>
    )
}

export default QuoteItem
