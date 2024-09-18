import React from 'react'

function Card(props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={props.im} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title text-center text-warning"><u>{props.heading}</u></h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </p>
                <a href="#" className="btn btn-warning btn-block">
                    Order Now
                </a>
            </div>
        </div>
    )
}

export default Card