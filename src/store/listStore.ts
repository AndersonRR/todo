import { create } from 'zustand';

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

const useListStore = create<ListState>()(set => ({
  items: [],
  addItem: item => set(state => ({ items: [...state.items, item] })),
  removeItem: (id: string) => set(state => ({ items: state.items.filter(item => item.id !== id) })),
  toggleChecked: (id: string) =>
    set(state => ({
      items: state.items.map(item => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      }),
    })),
}));

export { useListStore };