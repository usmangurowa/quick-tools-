import React from 'react';
import { ActionIcon, Title } from '@mantine/core';

import { Header, Container, Group } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import useStyles from './TopNav.styles';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const TopNav = () => {
  const { classes } = useStyles();
  return (
    <>
      <Header height={'fit-content'} py={3} className={classes.root}>
        <Container className={classes.header}>
          <Title size={'h5'}>Quick Hints</Title>
          <Group spacing={5}>
            <ActionIcon size={'xl'}>
              <IconSearch size={20} />
            </ActionIcon>
            <ColorSchemeToggle />
          </Group>
        </Container>
      </Header>
    </>
  );
};

export default TopNav;
