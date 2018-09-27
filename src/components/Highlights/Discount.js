import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/Button';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30,
    }

    porcentage = () => {
        const {discountStart, discountEnd} = this.state;
        if (discountStart < discountEnd) {
            this.setState({
                discountStart: discountStart + 1
            })
        }

    }

    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage()
        }, 60)
    }

    render() {
        const {discountStart} = this.state;
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={()=> this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Lorem ipsum dolor sit amet, </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate deleniti doloremque excepturi in iusto laborum magnam nemo non nulla, perspiciatis, placeat quae quaerat quisquam quos, sequi soluta totam velit.</p>
                            <MyButton>Lorem ipsum dolor</MyButton>
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
};

export default Discount;