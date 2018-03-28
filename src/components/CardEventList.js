import React from 'react'
import CardEvent from './CardEvent'


const CardEventList = ({itemEvents}) => {
    return (
      <ul className="row">
        {
          itemEvents.map(elem => 
            <CardEvent
              key={elem.name}
              {...elem}
            />
          )
        }
      </ul>
    );
  }

  export default CardEventList;