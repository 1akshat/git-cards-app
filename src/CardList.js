import React from 'react';
import Card from './Card';

const CardList = (props) => {
    return (
        <React.Fragment>
            {/*For Loop in React*/}
            { props.profiles.map(profile => <Card key={profile.id} { ...profile }/>) }
        </React.Fragment>
    )
}


export default CardList;