import React, { useState, useEffect } from 'react';

import { StyleSheet, Text } from 'react-native';
import { AppStackRoutes } from './src/routes/index';

export default function AppNavigator() {

  return (
    <AppStackRoutes />
  );
}

const styles = StyleSheet.create({});
