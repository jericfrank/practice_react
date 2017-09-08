/*
 *
 * Trash
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectTrash from './selectors';
import messages from './messages';

export class Trash extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Trash"
          meta={[
            { name: 'description', content: 'Description of Trash' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Trash.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Trash: makeSelectTrash(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Trash);
