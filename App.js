import { PersistGate } from 'redux-persist/integration/react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import React from 'react';
import { AppStackRoutes } from './src/routes/index';
import { persistor, store } from './src/store';

export default function AppNavigator() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppStackRoutes />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});
