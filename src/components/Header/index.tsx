import { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { AddContainer, Button, Container, Input } from './styles';

import LogoSvg from '../../assets/logo.svg';
import theme from '../../theme';
import { PlusCircle } from 'phosphor-react-native';

import { useListStore } from '../../store/listStore';

export function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const [description, setDescription] = useState('');
  const addItemToList = useListStore(state => state.addItem);

  function handleAddItem() {
    if (!description.trim()) {
      return Alert.alert('Nova tarefa', 'Informe a descrição da tarefa');
    }

    addItemToList({
      id: String(new Date().getTime()),
      checked: false,
      description: description,
    });

    setDescription('');
    Keyboard.dismiss();
  }

  return (
    <Container>
      <LogoSvg />
      <AddContainer>
        <Input
          style={isFocused && { borderColor: theme.COLORS.PURPLE_DARK }}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={theme.COLORS.GRAY_300}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={description}
          onChangeText={setDescription}
          onSubmitEditing={handleAddItem}
          returnKeyType="send"
        />
        <Button
          activeOpacity={0.7}
          onPress={handleAddItem}
        >
          <PlusCircle
            size={24}
            color={theme.COLORS.GRAY_200}
          />
        </Button>
      </AddContainer>
    </Container>
  );
}
