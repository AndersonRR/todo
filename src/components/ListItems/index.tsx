import { useEffect, useState } from 'react';

import theme from '../../theme';
import { Item } from '../Item';
import { Badge, Container, HeaderInfo, Status, StatusText } from './styles';
import { ListEmpty } from '../ListEmpty';

import Animated, { Layout, SlideInLeft, SlideOutRight } from 'react-native-reanimated';
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

  const layout = Layout.springify();
  const listStore = useListStore(state => state.items);

  useEffect(() => {
    const listUpdated = listStore.sort((a, b) => Number(b.id) - Number(a.id));
    setList(listUpdated);
  }, [listStore]);

  useEffect(() => {
    setNumCreated(list.length);
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

      <Animated.FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        itemLayoutAnimation={layout}
        data={list}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <Animated.View
            entering={SlideInLeft.delay(index * 100)}
            exiting={SlideOutRight}
          >
            <Item
              id={item.id}
              isChecked={item.checked}
              description={item.description}
            />
          </Animated.View>
        )}
        ListEmptyComponent={() => <ListEmpty />}
      />
    </Container>
  );
}
