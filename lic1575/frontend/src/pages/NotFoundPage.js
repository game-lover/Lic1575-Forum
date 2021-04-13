import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NotFoundPage extends Component {
    render() {
        return (<div>
            <p style={{textAlign: "center"}}>
                <Link to="/">Go to Home</Link>
            </p>
            <h1>404. Page not found</h1>
        </div>);
    }
}

export default NotFoundPage;
