import React from 'react';
import { Layout } from '../../hoc/Layout/Layout';
import { ThemeProvider } from '../../context/theme_context';
import { MainApp } from '../MainApp/MainApp';
//import { SplashScreen } from '../../components/SplashScreen/splash_screen';

const App = (props:any) => {
  return (
    <ThemeProvider>
      <Layout>
          <MainApp />
      </Layout>
    </ThemeProvider>
  );
}


export default App;
