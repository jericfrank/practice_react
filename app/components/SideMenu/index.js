/**
*
* SideMenu
*
*/

import _ from 'lodash';
import React from 'react';
// import styled from 'styled-components';

import { browserHistory } from 'react-router';
import { Menu, Label } from 'semantic-ui-react';

import { MENU_ROUTES } from './constants';

class SideMenu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor () {
    super();

    this.renderItems = this.renderItems.bind( this );
  }

  state = { item: '/inbox' };

  handleItemClick = (e, { name }) => {
    this.setState({ item: name });

    browserHistory.push( name );
  };

  renderItems( value, index ) {
    const { item } = this.state;

    return (
      <Menu.Item key={index} name={value.path} active={item === value.path} onClick={this.handleItemClick}>
        <Label color={value.color}>51</Label>
        {value.name}
      </Menu.Item>
    );
  }

  render() {
    return (
      <Menu pointing secondary vertical>
        { _.map( MENU_ROUTES, this.renderItems ) }
      </Menu>
    );
  }
}

SideMenu.propTypes = {

};

export default SideMenu;
