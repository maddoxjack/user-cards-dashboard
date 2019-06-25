import React from 'react';

const cardStyle = {
    border: 'solid 1px lightgrey',
    padding: '16px',
    textTransform: 'capitalize',
    backgroundColor: 'whitesmoke',
    height: '400px',
    width: '300px',
    background: 'linear-gradient(to bottom, #384350, #384350 35%, white 35%)'
}

const imgStyle = {
    border: 'solid 3px lightgrey',
    marginTop: '30px',
    borderRadius: '5px',
    boxShadow: '1px 1px, 1px, 1px',
    zIndex:'1'
}

const cameraIcon = {
    position: 'absolute',
    marginTop: '145px',
    marginLeft: '90px',
    zIndex:'2',
    fill: 'orange',
    background: 'white',
    borderRadius: '50%',
    boxShadow: '2px 2px 2px lightgrey',

    
}

const Card = props => {
    console.log("props are", props);
    const { user } = props;
    console.log('user is', user);
    return (
        <div className="card" style={cardStyle}>
            <img src="video-camera.svg" width="45px" height="35px" style={cameraIcon}></img>
            <a href={`mailto:${user.email}`}><img src="mail.svg" width="40px" height="20px"></img></a><img src={user.picture.large} style={imgStyle} alt={`${user.name.first} headshot`} /><a href={`tel:${user.cell}`}><img src="phone-call.svg" width="40px" height="20px"></img></a>
            <p>{user.name.first} {user.name.last}</p>
            
            <p>{`${user.dob.age} Years Old`}</p>
        </div>
    )
}


export default Card;