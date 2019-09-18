import React from 'react';
import { Link } from 'react-router-dom';
import liverpoolLogo from './../../Resources/images/team_icons/liverpool.png';

export const LfcLogo = (props) => {
    const template = <div
                            className="img_cover"
                            style={{
                                width: props.width,
                                height: props.height,                               
                            }}
    >
        <img src={liverpoolLogo} alt="liverpool" style={{width:70%}} />
    </div>

    if (props.link) {
        return (
            <Link to={props.linkTo} className="link_logo">
                {template}
            </Link>
        )
    } else {
        return template
    }
}; 

