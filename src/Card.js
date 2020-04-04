import React from 'react';

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <React.Fragment>
                <div className="git-profile" style={{ margin: '1rem' }}>
                    <img src={profile.avatar_url} alt="" style={{height: '75px' }}/>
                    <div className="user-info" style={{display: "inline-block", marginLeft: 10}}>
                        <div className="name" style={{fontSize: "130%"}}>{profile.name}</div>
                        <div className="company">{profile.company}</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Card;