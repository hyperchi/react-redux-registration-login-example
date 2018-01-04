import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';

import './TestPage.css';
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const TestPage = () => (
    <div>
        <Desktop>Desktop or laptop</Desktop>
        <Tablet>Tablet</Tablet>
        <Mobile>Mobile</Mobile>
        <Default>Not mobile (desktop or laptop or tablet)</Default>
    </div>
);

export default TestPage;