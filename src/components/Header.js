import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <div>
                <Link to="/">Redux App</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/sinup">Sign Up</Link>                
                <Link to="/signout">Sign Out</Link>                
                <Link to="/feature">Feature</Link>

            </div>
        )
    }
}

export default Header