import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/ticket.png';

const MyButton = (props) => {

    return (
        <Button
            href="#"
            variant="contained"
            size="small"
            style={{
                background: '#ffa800',
                color: '#fff'
            }}
        >
            <img src={TicketIcon} alt="pic" className="iconImage" />
            {props.children}
        </Button>
    );
};

export default MyButton;