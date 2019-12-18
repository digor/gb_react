import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from "./Message";
import '../styles/styles.css';

export default class MessageField extends React.Component {
    state = {
        messages: [
            { text: "Привет!", sender: 'bot' },
            { text: "Как дела?", sender: 'bot' }
        ],
        input: ''
    };

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    // textInput = React.createRef();

    componentDidMount() {
        this.textInput.current.focus();
    }

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].sender === 'user' &&
            this.state.messages[this.state.messages.length - 1].text !== '') {
            setTimeout(() =>
                    this.setState({
                            messages: [ ...this.state.messages, { text: 'Не приставай ко мне, я робот!', sender: 'bot' } ]
                        }),1000);
        }
    }

    handleSendMessage = () => {
        if(this.state.input !== '')
        this.setState({
            messages: [ ...this.state.messages, {text: this.state.input, sender: 'user'} ],
            input: ''
        });
    };

    handleInput = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    };

    handleKeyUp = (e) => {
        // console.log (e.keyCode);
        if( e.keyCode === 13 ) {
            this.handleSendMessage()
        }
    };

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={ index } text={ message.text } sender={ message.sender } />));

        return [
            <div className="message-field">
                { messageElements }
            </div>,
            <div style={ { width: '100%', display: 'flex' } }>
                <TextField
                    name="input"
                    fullWidth={ true }
                    ref={ this.textInput }
                    fillWidth={ true }
                    hintText="Введите сообщение"
                    style={ { fontSize: '22px' } }
                    onChange={ this.handleInput }
                    value={ this.state.input }
                    onKeyUp={ this.handleKeyUp }
                />
                <FloatingActionButton onClick={ this.handleSendMessage }>
                    <SendIcon />
                </FloatingActionButton>
            </div>
        ]
    }
}