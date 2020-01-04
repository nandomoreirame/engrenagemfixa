import React from 'react';
import Footer from './footer';
import Header from './header';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header title={this.props.title} />
        <main>{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;
