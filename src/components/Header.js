import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from 'react-router-dom';

const Header = ({ backButton }) => {
    const history = useHistory();

    return ( 
        <div className="header">
            { backButton ?  
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" />
                </IconButton>: 
                <Link to="/profile">
                 <IconButton>
                     <PersonIcon fontSize="large" />
                 </IconButton>
             </Link>}
            <Link to="/">
                <img src="data:image/png;base64,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" style={{width: '38px', height: '38px' }}/>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon fontSize="large" />
                </IconButton>
            </Link>
        </div>  
    );
}
 
export default Header;