import { Header } from '../../components/Header';
import { ListItems } from '../../components/ListItems';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <ListItems />
    </Container>
  );
}
