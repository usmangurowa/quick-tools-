import { createStyles } from '@mantine/core';
const HEADER_HEIGHT = '10vh';

export default createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
}));
