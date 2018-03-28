import React from 'react'
import Carousel from './carousel'
import CardEventList from './CardEventList'
import firebase from 'firebase'

const dataEvents = [
  {title: 'Congreso de JavaScripts', name:'Laboratoria', url:'https://secure.meetupstatic.com/photo_api/event/rx1100x800/dtfa002fx00a8ff/sg12c514b75e/450639186.jpeg', organizer:'Laboratoria', address:'av. Venezuela 123, Barranco'},
  {title: 'Congreso de JavaScripts', name:'Laboratoria1', url:'https://secure.meetupstatic.com/photo_api/event/rx1100x800/dt000ddfxff646a/sgc348cff06b/469120713.jpeg', organizer:'Laboratoria', address:'av. Venezuela 123, Barranco'},
  {title: 'Congreso de JavaScripts', name:'Laboratoria2', url:'https://secure.meetupstatic.com/photo_api/event/rx1100x800/dt002fffx36c200/sg67ca4ccb50/451872246.jpeg', organizer:'Laboratoria', address:'av. Venezuela 123, Barranco'}
]

firebase.initializeApp({
  apiKey: "AIzaSyByqvButDPrBlzb9AIrlYPh9LOoy5Jnpjk",
  authDomain: "reto-eventos.firebaseapp.com",
  databaseURL: "https://reto-eventos.firebaseio.com",
  projectId: "reto-eventos",
  storageBucket: "reto-eventos.appspot.com",
  messagingSenderId: "558847801184"
})


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