import React, {Component, Fragment} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';


class Featured extends Component {
    componentDidMount() {
        const {requestPageApi} = this.props.featuredActions;
        const {featured} = this.props;
        const responseIsReady = featured.length !== 0;

        if(!responseIsReady){
            requestPageApi();
        }
    }

    render() {
        const {featured} = this.props;
        const responseIsReady = featured.length !== 0;

        return (
            <Fragment>
                {!responseIsReady &&
                    <div style={{height: '100vh'}}>
                        Loading...
                    </div>
                }
                {responseIsReady &&
                <div style={{position: 'relative'}}>
                    <Carrousel imageList={featured.images} />
                    <div className="artist_name">
                        <div className="wrapper">
                            {featured.artistName}
                        </div>
                    </div>

                    <TimeUntil deadline={featured.deadline} />
                </div>
                }
            </Fragment>

        );
    }
};

const mapStateToProps = state => ({
    featured: state.featured.pageApi
});

const mapDispatchToProps = dispatch => ({
    featuredActions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Featured);