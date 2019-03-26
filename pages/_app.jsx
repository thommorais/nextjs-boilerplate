import React from 'react';
import App, { Container } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import { UserAgent } from '@quentin-sommer/react-useragent';

// internals
import theme from 'ui/theme';
import Typography from 'components/Global/Typography';
import GlobalStyles from 'components/Global/GlobalStyles';
import withUserAgentDetector from 'containers/App';

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
`;

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (typeof Component.getInitialProps === 'function') {
      pageProps = { ...(await Component.getInitialProps(ctx)) };
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Typography />
        <GlobalStyles />

        <ThemeProvider theme={theme}>
          <UserAgent>
            {({ mobile, tablet }) => {
              const isMobile = mobile || tablet;

              return (
                <Positioner>
                  <Component
                    {...pageProps}
                    isMobile={isMobile}
                    mobileOnly={mobile}
                    tabletOnly={tablet}
                  />
                </Positioner>
              );
            }}
          </UserAgent>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withUserAgentDetector(CustomApp);
