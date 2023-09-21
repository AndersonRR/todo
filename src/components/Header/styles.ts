import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 175px;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 60px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const AddContainer = styled.View`
  width: 100%;
  padding: 40px 24px 0 24px;
  margin-bottom: -27px;
  flex-direction: row;
  gap: 4px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-width: 1px;
  height: 54px;
  padding: 16px;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-color: ${({ theme }) => theme.COLORS.BLUE};
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: 6px;
  width: 52px;
  height: 52px;
`;
