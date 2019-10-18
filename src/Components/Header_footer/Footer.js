import React from 'react';
import {LfcLogo} from "../ui/icons"
const Footer = () => {
    return (
        <footer className="bck_red">
            <div className="footer_logo">
                <LfcLogo 
                    width="70px"
                    height="70px"
                    link={true}
                    linkTo="/"
                />
            </div>
            <div className="footer_discl">
                Liverpool FC 2019. All rights reserved
            </div>
        </footer>
    );
};

export default Footer;