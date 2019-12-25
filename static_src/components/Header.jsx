import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/svg-icons/action/account-circle';

export default class Header extends React.Component{
    render() {
        return(
            <div className="header" >
                <div>Chat { this.props.chatId }</div>
                <Link to='/profile/' style={ {
                    marginRight: '10px',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center'
                } }>
                    <Avatar color='white' style={ { marginRight: '10px' } }/>
                    <span>Гил</span>
                </Link>
            </div>
        )
    }
}