import React from 'react';
import { NextPage } from 'next';
import {
  Grid,
  Container,
  createStyles,
  Title,
  Button,
  Box,
  TextInput,
  Image,
  Stack,
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';

const providers: any = {
  MTN: '/static/images/MTN.svg',
  GLO: '/static/images/GLO.svg',
  '9MOBILE': '/static/images/9MOBILE.svg',
  AIRTEL: '/static/images/AIRTEL.svg',
};

const useStyle = createStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
  },
  input: {
    flexGrow: 1,
  },
}));

import { IconSearch } from '@tabler/icons';

const CheckProvider: NextPage = () => {
  const [number, setNumber] = React.useState<string>();
  const [reseponse, setResponse] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const { classes } = useStyle();

  const handleChange = (value: string) => {
    setNumber(value);
  };

  const handleCheckProvider = async () => {
    setLoading(true);
    await fetch(`http://localhost:3000/api/check-provider?number=${number}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw res.json();
      })
      .then((data) => {
        setResponse(data);
        showNotification({
          title: 'Response',
          message: data.message,
        });
      })
      .catch(async (error) => {
        const _error = await error;
        setResponse(_error);
        showNotification({
          title: 'Response',
          message: _error.message,
          color: 'red',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Container py={10}>
      <Grid justify={'center'}>
        <Grid.Col span={12} sm={4}>
          <Box className={classes.box}>
            <TextInput
              className={classes.input}
              value={number}
              onChange={(e: any) => handleChange(e.target.value)}
              maxLength={11}
              required
              radius={0}
              placeholder="Enter your phone number"
              label="Phone Number"
              type={'number'}
            />
            <Button
              loading={loading}
              onClick={handleCheckProvider}
              type="submit"
              radius={0}
              leftIcon={<IconSearch />}
            >
              Check
            </Button>
          </Box>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid justify={'center'}>
            <Grid.Col md={4}>
              {reseponse && (
                <>
                  {reseponse.error ? (
                    <Stack justify={'center'} align="center">
                      <Image src="/static/images/error.gif" width={100} height={120} />
                      <Title size={'h3'} align="center" color={'red'}>
                        {reseponse.message}
                      </Title>
                    </Stack>
                  ) : (
                    <>
                      <Image src={providers[reseponse.provider]} />
                      <Title size={'h3'} align="center">
                        {reseponse.provider}
                      </Title>
                    </>
                  )}
                </>
              )}
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default CheckProvider;
