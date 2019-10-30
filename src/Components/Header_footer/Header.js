import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import {LfcLogo} from '../ui/icons';

import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <AppBar
            position= "fixed"
            style = {{
                backgroundColor: '#f44336',
                boxShadow: 'none',
                padding: '10px 0',
                borderBottom: '1px solid #00285e'
            }}>
            <ToolBar style={{display:'flex' }}>
                <div style={{flexGrow: 1}}>
                    <div className="header_logo">
                        <LfcLogo link={true} linkTo="/" width="70px" height="70px"/>
                    </div>
                </div>
                <Link to="/the_team"> 
                    <Button color="inherit" size="large">The team</Button>
                </Link>
                <Link to="/the_matches"> 
                    <Button color="inherit" size="large">Matches</Button>
                </Link>
            </ToolBar>
            
        </AppBar>
    );
};

export default Header;