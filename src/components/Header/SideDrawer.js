import React from 'react';
import {scroller} from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawet = (props) => {
    const {open, onClose, menu} = props;

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -88
        });
        onClose(false);
    }

    const listItems = menu.map(item => {
        return <ListItem
            key={item.link}
            button
            onClick={() => scrollToElement(item.action)}
        >
            {item.link}
        </ListItem>
    });

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => onClose(false)}
        >
            <List component="nav">
                {listItems}
            </List>
        </Drawer>
    );
};

export default SideDrawet;
