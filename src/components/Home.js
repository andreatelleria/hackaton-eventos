import Carousel from './carousel'
import CardEventList from './CardEventList'
import React from 'react'

const dataEvents = [
  {title: 'Congreso de JavaScripts', name:'Laboratoria', url:'http://vitemprende.es/wp-content/uploads/2016/02/image004.jpg', organizer:'Laboratoria', address:'av. Venezuela 123, Barranco'},
  {title: 'Congreso de JavaScripts', name:'Laboratoria1', url:'http://vitemprende.es/wp-content/uploads/2016/02/image004.jpg', organizer:'Laboratoria', address:'av. Venezuela 123, Barranco'},
  {title: 'Congreso de JavaScripts', name:'Laboratoria2', url:'http://vitemprende.es/wp-content/uploads/2016/02/image004.jpg', organizer:'Laboratoria', address:'av. Venezuela 123, Barranco'}
]

const Home = () => {
  return (
      <div className="container">
        <Carousel />
        <CardEventList 
          itemEvents = {dataEvents}
        />
      </div>
  );
}

  export default Home ;