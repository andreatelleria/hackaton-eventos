import React from 'react'
import CardEvent from './CardEvent'


const CardEventList = ({itemEvents}) => {
    return (
      <div>
        <h2 className="pl-3 mt-5">Eventos Populares</h2>
        <ul className="row m-0 p-0">
          {
            itemEvents.map(elem => 
              <CardEvent
                key={elem.name}
                {...elem}
              />
            )
          }
        </ul>
      </div>
    );
  }

  export default CardEventList;