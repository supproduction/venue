import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

class TimeUntil extends Component {
    state = {
        deadline: '',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    getTimeUntil(deadline) {
        let seconds = 0;
        let minutes = 0;
        let hours = 0;
        let days = 0;
        const time = Date.parse(deadline) - Date.parse(new Date());

        if (time > 0) {
            seconds = Math.floor((time / 1000) % 60);
            minutes = Math.floor((time / 1000 / 60) % 60);
            hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            days = Math.floor(time / (1000 * 60 * 60 * 24));
        }

        this.setState({
            days,
            hours,
            minutes,
            seconds
        })
    }

    componentDidMount() {
        const {deadline} = this.props;
        this.setState({deadline});
        this.interval = null;
    }

    componentDidUpdate(prevProps, prevState) {
        const {deadline} = this.state;

        if (deadline !== prevState.deadline) {

            clearInterval(this.interval);
            this.interval = setInterval(() => this.getTimeUntil(deadline), 1000);
        }
    }

    _handleChangeDate = (test, e) => {
        const {requestChangeDeadline} = this.props.featuredActions;

        const {value} = e.target;

        this.setState({deadline: value});
        requestChangeDeadline(value);
    }

    render() {
        const secondParametr = "Second Parametr";
        const {
            deadline,
            days,
            hours,
            minutes,
            seconds
        } = this.state;

        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event starts in
                        <div>
                            <input
                                type="date"
                                value={deadline}
                                onChange={(e) => this._handleChangeDate(secondParametr, e)}
                            />
                        </div>
                    </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {days}
                            </div>
                            <div className="countdown_tag">Days</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {hours}
                            </div>
                            <div className="countdown_tag">Hs</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {minutes}
                            </div>
                            <div className="countdown_tag">Min</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {seconds}
                            </div>
                            <div className="countdown_tag">Sec</div>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        featuredActions: bindActionCreators(actions, dispatch)
    };
};

export default connect(null, mapDispatchToProps)(TimeUntil);