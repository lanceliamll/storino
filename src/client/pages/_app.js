import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import Page from "../components/Page";
import withData from "../helpers/withData";

class MyApp extends App {
  //Expose page numbers
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    //Expose the data to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <div>
        <ApolloProvider client={apollo}>
          <Container>
            <Page>
              <Component {...pageProps} />
            </Page>
          </Container>
        </ApolloProvider>
      </div>
    );
  }
}

export default withData(MyApp);
