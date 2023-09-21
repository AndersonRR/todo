import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import theme from '../../theme';
import { Item } from '../Item';
import { Badge, Container, HeaderInfo, Status, StatusText } from './styles';
import { useListStore } from '../../store/listStore';

type ListProps = {
  id: string;
  checked: boolean;
  description: string;
};

export function ListItems() {
  const [list, setList] = useState<ListProps[]>([]);
  const [numCreated, setNumCreated] = useState(0);
  const [numCompleted, setNumCompleted] = useState(0);

  const listStore = useListStore(state => state.items);
  const toggleChecked = useListStore(state => state.toggleChecked);

  function handleStatusItem(id: string) {
    toggleChecked(id);
  }

  useEffect(() => {
    const listUpdated = listStore.sort((a, b) => Number(b.id) - Number(a.id));
    setList(listUpdated);
  }, [listStore]);
  useEffect(() => {
    setNumCreated(list.filter(item => item.checked === false).length);
    setNumCompleted(list.filter(item => item.checked === true).length);
  }, [list]);

  return (
    <Container>
      <HeaderInfo>
        <Status>
          <StatusText style={{ color: theme.COLORS.BLUE }}>Criadas</StatusText>
          <Badge>{numCreated}</Badge>
        </Status>
        <Status>
          <StatusText style={{ color: theme.COLORS.PURPLE }}>Concluídas</StatusText>
          <Badge>{numCompleted}</Badge>
        </Status>
      </HeaderInfo>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        data={list}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            isChecked={item.checked}
            description={item.description}
            onPress={() => {
              handleStatusItem(item.id);
            }}
          />
        )}
      />
    </Container>
  );
}
