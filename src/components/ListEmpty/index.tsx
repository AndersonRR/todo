import theme from '../../theme';
import { Container, Icon, SubText, Text } from './styles';

export function ListEmpty() {
  return (
    <Container>
      <Icon />
      <Text style={{ color: theme.COLORS.GRAY_300 }}>Você ainda não tem tarefas cadastradas</Text>
      <SubText style={{ color: theme.COLORS.GRAY_300 }}>
        Crie tarefas e organize seus itens a fazer
      </SubText>
    </Container>
  );
}
