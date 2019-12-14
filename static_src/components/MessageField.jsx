import React from 'react';
import PropTypes from 'prop-types';
import Message from "./Message";

export default class MessageField extends React.Component {
    state = {
        messages: [
            { text: "Привет!", sender: 'bot' },
            { text: "Как дела?", sender: 'bot' }
            ],
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].sender === 'user' &&
            this.state.messages[this.state.messages.length - 1].text !== '') {
            setTimeout(() =>
                    this.setState(
                        { messages: [ ...this.state.messages, { text: 'Не приставай ко мне, я робот!', sender: 'bot' } ] }),
                1000);
        }
    }

    handleClick = () => {
        this.setState({ messages: [ ...this.state.messages, {text: 'Нормально', sender: 'user'} ] });
    };

    handleClickEmpty = () => {
        this.setState({ messages: [ ...this.state.messages, {text: '', sender: 'user'} ] });
    };
    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={ index } text={ message.text } />));

        return <div>
            { messageElements }
            <button onClick={ this.handleClick }>Отправить сообщение</button><br/>
            <button onClick={ this.handleClickEmpty }>Отправить пустое сообщение</button>
        </div>
    }
}