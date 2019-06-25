import React from 'react';
import PropTypes from 'prop-types';

import Card from'./card.js';

const listStyle = {
    display: 'grid',
    listStyleType: 'none',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr)',
    gridGap: '3rem',
    boxSizing: 'border-box',
    height: '80%',
    width: '85%',
    margin: 'auto',
    padding: '10px',
}

const CardList = props => {
    console.log("props are", props);
    const { userData } = props;
    return (
        <ul style={listStyle}>
            {userData.length > 0 ? 
                userData.map(user => 
                <li key={user.login.uuid}>
                    <Card user={user} />
                </li>
                )
            : 
            <li>No User Data</li>
            }
        </ul>
    )
}

CardList.propTypes = {
    userData: PropTypes.array
}

export default CardList;