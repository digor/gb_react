import React from 'react';
import PropTypes from "prop-types"
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from "./Message";
import '../styles/styles.css';

export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired
    };
    state = {
        input: ''
    };

    handleSendMessage = (message, sender) => {
        if(message.length > 0 || sender === 'bot') {
            this.props.sendMessage(message, sender);
        }
        if (sender === 'user') {
            this.setState({ input: '' });
        }
    };

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    };

    handleKeyUp = (e) => {
        // console.log (e.keyCode);
        if( e.keyCode === 13 ) {
            this.handleSendMessage()
        }
    };

    render() {
        const { chatId, chats, messages } = this.props;

        const messageElements = chats[chatId].messageList.map(messageId => (
            <Message key={ messageId } text={ messages[messageId].text } sender={ messages[messageId].sender }
            />
        ));

        return [
            <div key='message-field' className="message-field">
                { messageElements }
            </div>,
            <div key='text-field' style={ { width: '100%', display: 'flex' } }>
                <TextField
                    name="input"
                    fullWidth={ true }
                    hintText="Введите сообщение"
                    style={ { fontSize: '22px' } }
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                />
                <FloatingActionButton onClick={ () => this.handleSendMessage(this.state.input) }>
                    <SendIcon />
                </FloatingActionButton>
            </div>
        ]
    }
}