// import React from 'react'
import cardImage from '/cardImage.jpg'
import './App.css'
import Cards from './Cards'
import saifulmalook from '/cardImage1.jpg'
import fairyMeadows from '/cardImage2.jpg'

function App() {


  return (
    <>
    <h1 style={{marginTop:'-20px',marginBottom:'50px'}}>Lets Explore Pakistan</h1>
    <div style={styles.container}>
      <Cards 
      imageUrl={cardImage}
      imageAlt='Card Image'
      cardTitle='Swat'
      cardSubtitle='Swat District , also known as the Swat'
      cardText='Swat District , alsoo known as the swat valley, is a district in the Malakand Division of Khyber Pakhtunkhwa , Pakistan. With a population of 2,309570 per the 2017 national census,'
      />
      <Cards 
      imageUrl={saifulmalook}
      imageAlt='Card Image'
      cardTitle='Saif ul malook'
      cardSubtitle='The lake of Fairies'
      cardText='Saiful Muluk (Urdu: جھیل سیف الملوک) is a mountainous lake in northern Pakistan, located at the northern end of the Kaghan Valley, near the town of Naran in the Saiful Muluk National Park. '
      />
      <Cards 
      imageUrl={fairyMeadows}
      imageAlt='Card Image'
      cardTitle='FairyMeadows'
      cardSubtitle='Also known as Fairy Tale Meadows'
      cardText='Fairy Meadows (Urdu: فیری میڈوز), named by German climbers (German Märchenwiese, "fairy tale meadows")[1][2] and locally known as Joot,[3] is a grassland near one of the base camp sites of the Nanga Parbat'
      />
    </div>
  </>
  )
}

export default App

const styles={
  container:{
    display:'flex',
    gap:'20px'
  }
}