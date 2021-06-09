import React, {Component} from 'react';
import requireAuth from './requireAuth';

class Feature extends Component{
    render(){
        return <div>New Features!</div>
    }
}

export default requireAuth(Feature);