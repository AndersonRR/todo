import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ItemProps = {
  id: string;
  checked: boolean;
  description: string;
};

type ListState = {
  items: ItemProps[];
  toggleChecked: (id: string) => void;
  addItem: (item: ItemProps) => void;
  removeItem: (id: string) => void;
};

const useListStore = create<ListState>()(
  persist(
    set => ({
      items: [],
      addItem: item => set(state => ({ items: [item, ...state.items] })),
      removeItem: (id: string) =>
        set(state => ({ items: state.items.filter(item => item.id !== id) })),
      toggleChecked: (id: string) =>
        set(state => ({
          items: state.items.map(item => {
            if (item.id === id) {
              return { ...item, checked: !item.checked };
            }
            return item;
          }),
        })),
    }),
    {
      name: 'todo-list-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export { useListStore };
