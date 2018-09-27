import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/Header/Header';
import Featured from './components/Featured/Featured';
import VenueNfo from './components/VenueNFO/VenueNFO';
import Highlights from './components/Highlights/Highlights';
import Pricing from './components/Pricing/Pricing';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Element name="Featured">
                    <Featured />
                </Element>
                <Element name="VenueNfo">
                    <VenueNfo />
                </Element>
                <Element name="Highlights">
                    <Highlights />
                </Element>
                <Element name="Pricing">
                    <Pricing />
                </Element>
            </div>
        );
    }
}

export default App;
