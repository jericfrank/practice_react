/**
*
* SideMenu
*
*/

import React from 'react';
// import styled from 'styled-components';

import { Menu, Label } from 'semantic-ui-react';

class SideMenu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = { item: 'inbox' };

  handleItemClick = (e, { name }) => {
    this.setState({ item: name });
  };

  render() {
    const { item } = this.state;

    return (
      <Menu pointing secondary vertical>
        <Menu.Item name='inbox' active={item === 'inbox'} onClick={this.handleItemClick}>
          <Label>51</Label>
          Inbox
        </Menu.Item>
        <Menu.Item name='sent' active={item === 'sent'} onClick={this.handleItemClick}>
          Sent Items
        </Menu.Item>
        <Menu.Item name='trash' active={item === 'trash'} onClick={this.handleItemClick}>
          Trash
        </Menu.Item>
      </Menu>
    );
  }
}

SideMenu.propTypes = {

};

export default SideMenu;
