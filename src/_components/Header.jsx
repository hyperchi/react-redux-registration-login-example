import React from 'react'
import PropTypes from 'prop-types';

const header = {
    marginTop: '0px'
};

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <nav className="nav-bar">
                    <div className="container" style={header}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Team</a></li>
                        <li> <a href="#">Contacts</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

Header.propTypes = {
    scrollRef: PropTypes.object,
};


export default Header