import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { AuthProvider } from './contexts/auth';
import SplashScreen from 'react-native-splash-screen';
import colors, {
  CustomDefaultTheme,
  CustomDarkTheme,
} from './styles/colors';


// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     accent: "#03dac4",
//     backdrop: "rgba(0, 0, 0, 0.5)",
//     background: colors.senary,
//     disabled: "rgba(0, 0, 0, 0.26)",
//     error: colors.error,
//     notification: colors.notification,
//     onBackground: "#000000",
//     onSurface: "#000000",
//     placeholder: "rgba(0, 0, 0, 0.54)",
//     primary: colors.secondary,
//     surface: colors.senary,
//     text: "#000000"
//   },
// };

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <NavigationContainer theme={theme}>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
}

export default App;