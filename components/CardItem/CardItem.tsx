import { Card, Text, Title, Tooltip } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardItem = () => {
  return (
    <Link href={'#'} passHref>
      <Card
        component="a"
        shadow={'sm'}
        p="xl"
        sx={{
          width: '100%',
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <Image src="/static/images/tower.gif" height={120} width={100} alt="No way!" />
        <Tooltip label="Check if number is MTN, AIRTEL, GLO or ETISALAT">
          <Text align="center">Check Network Provider</Text>
        </Tooltip>
      </Card>
    </Link>
  );
};

export default CardItem;
