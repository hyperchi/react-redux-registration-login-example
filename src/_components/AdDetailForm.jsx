import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

export default class AdDetailForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ad: {
                webLink: '',
                businessAddress: '',
                photos: [],
                startTime: '',
                endTime: '',
                budget: '',
                description: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { ad } = this.state;
        this.setState({
            user: {
                ...ad,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { ad } = this.state;
        const { dispatch } = this.props;
        if (ad.webLink && ad.businessAddress && ad.budget && ad.startTime && ad.endTime) {
            console.log(this.state);
            //dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering  } = this.props;
        const { ad, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Business Details</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !ad.webLink ? ' has-error' : '')}>
                        <label htmlFor="webLink">Website Link</label>
                        <input type="text" className="form-control" name="webLink" value={ad.webLink} onChange={this.handleChange} />
                        {submitted && !ad.webLink &&
                            <div className="help-block">Website link is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !ad.businessAddress ? ' has-error' : '')}>
                        <label htmlFor="businessAddress">Business Address</label>
                        <input type="text" className="form-control" name="businessAddress" value={ad.businessAddress} onChange={this.handleChange} />
                        {submitted && !ad.businessAddress &&
                            <div className="help-block">Business address is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !ad.budget ? ' has-error' : '')}>
                        <label htmlFor="budget">Budget</label>
                        <input type="text" className="form-control" name="budget" value={ad.budget} onChange={this.handleChange} />
                        {submitted && !ad.budget &&
                            <div className="help-block">Budget is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !ad.startTime ? ' has-error' : '')}>
                        <label htmlFor="startTime">Start Time</label>
                        <input type="text" className="form-control" name="startTime" value={ad.startTime} onChange={this.handleChange} />
                        {submitted && !ad.startTime &&
                            <div className="help-block">Start time is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !ad.endTime ? ' has-error' : '')}>
                        <label htmlFor="endTime">End Time</label>
                        <input type="text" className="form-control" name="endTime" value={ad.endTime} onChange={this.handleChange} />
                        {submitted && !ad.endTime &&
                        <div className="help-block">End time is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted )}>
                        <label htmlFor="startTime">Photos</label>
                        <input type="file" className="form-control" name="photos" value={ad.photos} onChange={this.handleChange} />
                    </div>

                    <div className={'form-group' + (submitted && !ad.description ? ' has-error' : '')}>
                        <label htmlFor="description">Descriptions</label>
                        <textarea className="form-control" name="description" value={ad.description} onChange={this.handleChange} />
                        {submitted && !ad.description &&
                        <div className="help-block">Description is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Next</button>
                        {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                </form>
            </div>
        );
    }
}
