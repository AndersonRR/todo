import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const HeaderInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StatusText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Badge = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  padding: 0 8px;
  border-radius: 50px;
  margin-left: 8px;
`;
