/*
 *
 * Inbox
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectInbox from './selectors';
import messages from './messages';

export class Inbox extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Inbox"
          meta={[
            { name: 'description', content: 'Description of Inbox' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Inbox.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Inbox: makeSelectInbox(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
