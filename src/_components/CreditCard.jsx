import React from 'react';
import Payment from 'payment';

import Cards from 'react-credit-cards';

export default class CreditCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: '',
            name: '',
            expiry: '',
            cvc: '',
            focused: '',
        };
    }

    componentDidMount() {
        Payment.formatCardNumber(document.querySelector('[name="number"]'));
        Payment.formatCardExpiry(document.querySelector('[name="expiry"]'));
        Payment.formatCardCVC(document.querySelector('[name="cvc"]'));
    }

    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name,
        });
    };

    handleInputChange = ({ target }) => {
        if (target.name === 'number') {
            this.setState({
                [target.name]: target.value.replace(/ /g, ''),
            });
        }
        else if (target.name === 'expiry') {
            this.setState({
                [target.name]: target.value.replace(/ |\//g, ''),
            });
        }
        else {
            this.setState({
                [target.name]: target.value,
            });
        }
    };

    handleCallback(type, isValid) {
        console.log(type, isValid); //eslint-disable-line no-console
    }

    render() {
        const { name, number, expiry, cvc, focused } = this.state;
        return (
            <div className="rccs__demo" style={{ opacity: 0 }}>
                <h1>Credit Cards</h1>
                <div className="rccs__demo__content">
                    <Cards
                        number={number}
                        name={name}
                        expiry={expiry}
                        cvc={cvc}
                        focused={focused}
                        callback={this.handleCallback}
                    />
                    <form>
                        <div>
                            <input
                                type="tel"
                                name="number"
                                placeholder="Card Number"
                                onKeyUp={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <div>E.g.: 49..., 51..., 36..., 37...</div>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onKeyUp={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="expiry"
                                placeholder="Valid Thru"
                                onKeyUp={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <input
                                type="tel"
                                name="cvc"
                                placeholder="CVC"
                                onKeyUp={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

