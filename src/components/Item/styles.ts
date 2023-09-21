import styled from 'styled-components/native';
import { Check, Circle, Trash } from 'phosphor-react-native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  gap: 12px;
  align-items: center;
  height: 64px;
  padding: 12px 8px;
  margin-bottom: 8px;
  border-width: 1px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const BodyText = styled.Text.attrs(() => {
  return {
    numberOfLines: 2,
    ellipsizeMode: 'tail',
  };
})`
  flex: 1;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-align: justify;
`;

export const UncheckedText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const CheckedText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  text-decoration: line-through;
`;

export const Checked = styled(Check).attrs(({ theme }) => {
  return {
    size: 14,
    color: theme.COLORS.GRAY_100,
    weight: 'bold',
  };
})``;

export const CheckedContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  border-radius: 50px;
  padding: 8px;
  width: 24px;
  height: 24px;
`;

export const Unchecked = styled(Circle).attrs(({ theme }) => {
  return {
    size: 24,
    color: theme.COLORS.BLUE,
  };
})``;

export const TrashIcon = styled(Trash).attrs(({ theme }) => {
  return {
    size: 22,
    color: theme.COLORS.GRAY_300,
  };
})``;
