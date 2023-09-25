import { useEffect, useState } from 'react';

import theme from '../../theme';
import { Item } from '../Item';
import { Badge, Container, HeaderInfo, Status, StatusText } from './styles';
import { ListEmpty } from '../ListEmpty';

import Animated, { Layout, SlideInLeft, SlideOutRight } from 'react-native-reanimated';
import { useListStore } from '../../store/listStore';

export function ListItems() {
  const layout = Layout.springify();
  const listStore = useListStore(state => state.items);

  return (
    <Container>
      <HeaderInfo>
        <Status>
          <StatusText style={{ color: theme.COLORS.BLUE }}>Criadas</StatusText>
          <Badge>{listStore.length}</Badge>
        </Status>
        <Status>
          <StatusText style={{ color: theme.COLORS.PURPLE }}>Concluídas</StatusText>
          <Badge>{listStore.filter(item => item.checked === true).length}</Badge>
        </Status>
      </HeaderInfo>

      <Animated.FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        itemLayoutAnimation={layout}
        data={listStore}
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
