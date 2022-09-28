import { Grid, Container } from '@mantine/core';
import CardItem from '../components/CardItem';

export default function HomePage() {
  return (
    <>
      {/* <Welcome />
      <ColorSchemeToggle /> */}
      <Container py={10}>
        <Grid>
          {Array.from(Array(10).keys()).map((i) => (
            <Grid.Col span={6} xs={6} md={4} lg={4}>
              <CardItem key={i} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
}
