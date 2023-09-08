/* eslint-disable react/prop-types */
// import React from 'react';

function Cards (props){
    return(
    <div style={styles.container}>
        <div style={styles.imageContainer}>
            <img src={props.imageUrl} alt={props.imageAlt} style={styles.imageStyle}/>
        </div>
        <div style={styles.textContainer}>
            <h1 style={styles.cardTitle}>
                {props.cardTitle}
            </h1>
            <h4 style={styles.cardSubtitle}>
                {props.cardSubtitle}
            </h4>
            <p style={styles.cardText}>
                {props.cardText}
            </p>

        </div>
    </div>
    )
}

export default Cards

const styles={
    imageStyle:{
        width:'100%',
        height:'100%',
    },
    imageContainer:{
        
            width: '100%',
            height: '50%',
            overflow: 'hidden',
            borderRadius:'12px 12px 0px 0px'
        
    },
    container:{
 
            display: 'flex',
            width: '300px',
            height: 'auto',
            /* flex-direction: column; */
            flexWrap: 'wrap',
            justifyContent: 'center',
            borderRadius:'12px',
            alignContent:'center',
            boxShadow: '0px 0px 12px 0px',
        },
        cardTitle: {
            fontSize: '28px',
            textAlign: 'left',
            margin:'18px 0px 9px 0px',
            fontWeight:'480',
            color:'#476e9b'
        },
        cardSubtitle:{
            fontSize: '14px',
            textAlign: 'left',
            margin :'0px',
            fontWeight:'400'
        },
        cardText: {
            fontSize: '12px',
            textAlign: 'left',
            color:'#476e9b'
        },
        textContainer:{
            padding :'0px 22px',
            height:'50%',
            color:'#476e9b'
        }

    
}