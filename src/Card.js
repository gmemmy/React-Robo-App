import React from 'react';
import './Style.css';


const Card = (props) => {
    return(
			<div className="card-comp">
				<img alt='robots' src={`https://robohash.org/${props.id}?150*150`}  />

				<div>
					<h2>{props.name}</h2>
					<p>{props.duty}</p>
				</div>

			</div>
    );
}

export default Card;