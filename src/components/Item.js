import React from 'react'

function Item(props) {
  return (
    <div className="container">
        <div className="card" style={{width: "15rem", float: "left", margin: "1%"}}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
  )
}

export default Item