import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/theme";

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <div id="main">
            <Head>
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" />
              <script
                src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
                data-api-key="YjdiNWIyOTUtZTIyMy00MWMwLTkwNDUtMzI1M2M2NTgxYjE0"
                id="snipcart"
              />
              <link
                href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
                rel="stylesheet"
                type="text/css"
              />
              <link href="/static/main.css" rel="stylesheet" />
            </Head>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />

              <div>
                <p>Подвал</p>
              </div>
            </ThemeProvider>
          </div>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
