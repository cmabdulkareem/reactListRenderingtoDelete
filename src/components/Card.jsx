import React from 'react'

function Card({movieTitle, movieDesc, movieThumb}) {
    return (
            <div className="card" style={{width: "18rem"}}>
                <img src={movieThumb} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{movieTitle}</h5>
                        <p className="card-text">{movieDesc}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
    )
}

export default Card
