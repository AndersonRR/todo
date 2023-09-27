import { StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaProvider style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_600 }}>
        <QueryClientProvider client={queryClient}>
          {fontsLoaded ? <Home /> : <Loading />}
        </QueryClientProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
