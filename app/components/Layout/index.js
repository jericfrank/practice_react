/**
*
* Layout
*
*/
import 'semantic-ui-css/semantic.min.css';
import _ from 'lodash';

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Grid, Rail, Segment, Sticky } from 'semantic-ui-react';

import SideMenu from 'components/SideMenu';

class Layout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {};

  handleContextRef = contextRef => this.setState({ contextRef });

  render() {
    const { contextRef } = this.state;

    return (
      <Grid centered columns={2} padded>
        <Grid.Column>
          <div ref={this.handleContextRef}>
            <Segment>

              { React.Children.toArray(this.props.children) }

              <Rail position='left'>
                <Sticky context={contextRef} pushing>
                  <SideMenu/>
                </Sticky>
              </Rail>

            </Segment>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

Layout.propTypes = {

};

export default Layout;
