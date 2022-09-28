import { createStyles } from '@mantine/core';

const HEADER_HEIGHT = '10vh';

export default createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  bottom: {
    display: 'none',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'fixed',
    bottom: '0',
    left: '0',
    padding: theme.spacing.md,
    overflowX: 'hidden',
    [theme.fn.smallerThan('md')]: {
      display: 'flex',
    },
  },
  link: {
    width: 'fit-content',
    height: 'fit-content',
    padding: '10px',
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));
