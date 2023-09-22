import styled from 'styled-components/native';
import { ClipboardText } from 'phosphor-react-native';

export const Container = styled.View`
  border-top-width: 0.5px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
  align-items: center;
  justify-content: center;
  padding: 48px 10px;
`;

export const Icon = styled(ClipboardText).attrs(({ theme }) => {
  return {
    size: 64,
    color: theme.COLORS.GRAY_400,
    weight: 'light',
  };
})``;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const SubText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
