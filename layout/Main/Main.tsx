import { Box, Grid, MediaQuery, ScrollArea, Text } from '@mantine/core';
import React from 'react';
import BottomNav from '../../components/BottomNav';
import SideNav from '../../components/SideNav';
import TopNav from '../../components/TopNav';

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <MediaQuery smallerThan={'md'} styles={{ marginBottom: '12vh' }}>
      <Box sx={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <Grid grow sx={{ overflowY: 'hidden' }}>
          <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
            <Grid.Col span={1}>
              <SideNav />
            </Grid.Col>
          </MediaQuery>
          <Grid.Col xs={12} sm={12} md={10} lg={11}>
            <TopNav />
            <ScrollArea style={{ height: '100vh' }}>{children}</ScrollArea>
          </Grid.Col>
        </Grid>
        <BottomNav />
      </Box>
    </MediaQuery>
  );
};

export default Main;
