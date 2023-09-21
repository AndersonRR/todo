import { useListStore } from '../../store/listStore';
import {
  BodyText,
  Checked,
  CheckedContainer,
  CheckedText,
  Container,
  TrashIcon,
  Unchecked,
  UncheckedText,
} from './styles';
import { Alert, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  id: string;
  isChecked?: boolean;
  description: string;
};

export function Item({ isChecked = false, description, id, ...rest }: Props) {
  const removeItem = useListStore(state => state.removeItem);

  function handleRemoveItem() {
    Alert.alert('Remover item', 'Tem certeza que deseja remover este item?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => removeItem(id) },
    ]);
  }

  return (
    <Container
      activeOpacity={1}
      {...rest}
    >
      {isChecked ? (
        <>
          <CheckedContainer>
            <Checked />
          </CheckedContainer>
          <BodyText>
            <CheckedText>{description}</CheckedText>
          </BodyText>
        </>
      ) : (
        <>
          <Unchecked />
          <BodyText>
            <UncheckedText>{description}</UncheckedText>
          </BodyText>
        </>
      )}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleRemoveItem}
      >
        <TrashIcon />
      </TouchableOpacity>
    </Container>
  );
}
