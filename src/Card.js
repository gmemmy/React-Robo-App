import React from 'react';
import './Card.css'

const Card = (props) => {
    return(
			<div>
				<img alt='robots' src={`https://robohash.org/${props.id}?200*200`} />

				<div>
					<h2>{props.name}</h2>
					<p>{props.duty}</p>
				</div>

			</div>
    );
}

export default Card;