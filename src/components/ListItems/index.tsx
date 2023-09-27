import { useEffect, useState } from 'react';

import theme from '../../theme';
import { Item } from '../Item';
import { Badge, Container, HeaderInfo, Status, StatusText } from './styles';
import { ListEmpty } from '../ListEmpty';

import Animated, { SlideInLeft, SlideOutRight } from 'react-native-reanimated';
import { api } from '../../services/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { FlashList } from '@shopify/flash-list';

type ListProps = {
  id: string;
  name: string;
};

export function ListItems() {
  const [listStore, setListStore] = useState<ListProps[]>([]);

  const fetchPatients = async ({ pageParam = 1 }) => {
    const response = await api.get(`getPatients/2?page=${pageParam}`);
    return { data: response.data.data, nextPage: pageParam + 1 };
  };

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ['patients'],
      queryFn: fetchPatients,
      getNextPageParam: (lastPage, pages) => lastPage.nextPage,
    });

  const loadNext = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    if (data) {
      setListStore(data?.pages.flatMap<ListProps>(page => page.data));
    }
  }, [data]);

  return (
    <Container>
      <HeaderInfo>
        <Status>
          <StatusText style={{ color: theme.COLORS.BLUE }}>Criadas</StatusText>
          <Badge>{listStore.length}</Badge>
        </Status>
        <Status>
          <StatusText style={{ color: theme.COLORS.PURPLE }}>Concluídas</StatusText>
          <Badge>{0}</Badge>
        </Status>
      </HeaderInfo>

      <FlashList
        onEndReachedThreshold={0.2}
        onEndReached={loadNext}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        estimatedItemSize={100}
        data={listStore}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Animated.View
            entering={SlideInLeft}
            exiting={SlideOutRight}
          >
            <Item
              id={item.id}
              isChecked={true}
              description={item.name}
            />
          </Animated.View>
        )}
        ListEmptyComponent={() => <ListEmpty />}
      />
      {isFetchingNextPage && <Badge>Carregando ... </Badge>}
    </Container>
  );
}
