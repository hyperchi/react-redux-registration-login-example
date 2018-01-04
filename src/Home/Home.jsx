import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { userActions } from '../_actions';
import { AdDetailForm } from '../_components';

class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }
    render() {
        const { user } = this.props;
        return (
            <div>
                <div className="col-md-6 col-md-offset-3">
                    <h3>Hi {user.firstName}!</h3>
                    <p><Link to="/login">Logout</Link></p>
                </div>
                <div>
                    <AdDetailForm />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };