import { Global } from '@mantine/core';
import React from 'react';

const GlobalStyle = () => {
  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        body: {
          overflowX: 'hidden',
        },
      })}
    />
  );
};

export default GlobalStyle;
