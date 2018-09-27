import React, { Component } from 'react';
import MyButton from '../utils/Button';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices: [
            {
                price: "100",
                name: "balcony",
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad",
                link: "Purchase"
            },
            {
                price: "150",
                name: "medium",
                desc: "dio placeat quidem recusandae reiciendis repellat sint vero.",
                link: "Purchase"
            },
            {
                price: "250",
                name: "star",
                desc: "o Accusantium dignissimos inventore nesciunt omnis quia, voluptatum?",
                link: "Purchase"
            }
        ]
    }

    render() {
        const boxes = this.state.prices.map((box, index) => {
            return  <Zoom key={index} delay={index===1 ? 0 : 500}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>{box.price}$</span>
                            <span>{box.name}</span>
                        </div>
                        <div className="pricing_description">{box.desc}</div>
                        <div className="pricing_buttons">
                            <MyButton>{box.link}</MyButton>
                        </div>
                    </div>
                </div>
            </Zoom>
        })

        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {boxes}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;