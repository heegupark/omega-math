import React, { Component } from 'react';
import IndexPage from '../components/index-page';
import Main from '../components/main';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

export default class extends Component {
  render() {
    return (
      <>
        <ThemeProvider>
          <CSSReset />
          <IndexPage />
          <Main />
        </ThemeProvider>
      </>
    );
  }
}
