import { Container } from './styles';
import LottieView from 'lottie-react-native';

export function Loading() {
  return (
    <Container>
      <LottieView
        autoPlay
        loop
        style={{
          width: 200,
          height: 200,
        }}
        source={require('../../assets/loading.json')}
      />
    </Container>
  );
}
