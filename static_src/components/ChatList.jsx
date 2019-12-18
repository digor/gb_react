import React from 'react';
import { List, ListItem } from 'material-ui/list';
import ContentSend from 'material-ui/svg-icons/content/send';

export default class ChatList extends React.Component{
    render() {
        return (
            <List>
                <ListItem primaryText="Chat 1" leftIcon={ <ContentSend /> } />
                <ListItem primaryText="Chat 2" leftIcon={ <ContentSend /> } />
                <ListItem primaryText="Chat 3" leftIcon={ <ContentSend /> } />
                <ListItem primaryText="Chat 4" leftIcon={ <ContentSend /> } />
            </List>
        )
    }
}