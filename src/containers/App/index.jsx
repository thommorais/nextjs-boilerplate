import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UserAgentProvider } from '@quentin-sommer/react-useragent';

const userAgent = req => (req ? req.headers['user-agent'] : navigator.userAgent);

const withUserAgentDetector = App => class extends Component {
    static propTypes = {
      ua: PropTypes.shape({}),
    };

    static defaultProps = {
      ua: {},
    };

    static async getInitialProps(appContext) {
      return {
        ua: userAgent(appContext.ctx.req),
        ...(App.getInitialProps ? await App.getInitialProps(appContext) : null),
      };
    }

    render() {
      const { ua, ...restProps } = this.props;
      return (
        <UserAgentProvider ua={ua}>
          <App {...restProps} />
        </UserAgentProvider>
      );
    }
};

export default withUserAgentDetector;
