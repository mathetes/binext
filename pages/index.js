import React from "react";
import { connect } from "react-redux";
// import Products from '../components/products'
import Head from "next/head";
import TopBar from "../components/bars/topbar";
import Main from "./main";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <link href="/static/main.css" rel="stylesheet" />
          <meta name="title" content="Peaky Blinder's e-commerce" />
          <meta
            name="description"
            content="Find the best Peaky Blinders products online."
          />
        </Head>
        <TopBar />
        <Main />
      </div>
    );
  }
}

const mapStateToProps = state => ({ products: state.products });

export default connect(mapStateToProps)(Index);
