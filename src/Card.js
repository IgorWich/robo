import React from 'react';

const Card = (props) => {
    //let rand = Math.floor(Math.random() * 5);
    return (
        <div className='bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5'>
            
                <img src={`https://robohash.org/${props.id}?size=200x200`} alt='error' />
                    <div>
                        <h3>{props.name}</h3>
                        <p>{props.email}</p>
                    </div>
            
        </div>
    );
}

export default Card;