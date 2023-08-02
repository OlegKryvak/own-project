import { createSlice } from '@reduxjs/toolkit';
import i18n from '../../localization';

interface IState {
  themeMode: 'Dark' | 'Light';
  language: 'English' | 'Ukrainian' | 'Spanish';
  addFunds: boolean;
  chargingStarted: boolean;
  chargingInterrupted: boolean;
  chargingCompleted: boolean;
  reservationIsOver: boolean;
  lostConnection: boolean;
}

const initialState: IState = {
  themeMode: 'Light',
  language: 'English',
  addFunds: false,
  chargingStarted: false,
  chargingInterrupted: false,
  chargingCompleted: false,
  reservationIsOver: false,
  lostConnection: false
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.themeMode = action.payload;
    },
    setLanguage: (state, action) => {
      i18n.changeLanguage(
        action.payload === 'English'
          ? 'en'
          : action.payload === 'Ukrainian'
          ? 'uk'
          : 'es'
      );        
      state.language = action.payload;
    },
    setAddFunds: (state, action) => {
      state.addFunds = action.payload;
    },
    setChargingStarted: (state, action) => {
      state.chargingStarted = action.payload;
    },
    setChargingInterrupted: (state, action) => {
      state.chargingInterrupted = action.payload;
    },
    setChargingCompleted: (state, action) => {
      state.chargingCompleted = action.payload;
    },
    setReservationIsOver: (state, action) => {
      state.reservationIsOver = action.payload;
    },
    setLostConnection: (state, action) => {
      state.lostConnection = action.payload;
    }
  }
});

export const {
  setTheme,
  setLanguage,
  setAddFunds,
  setChargingStarted,
  setChargingInterrupted,
  setChargingCompleted,
  setReservationIsOver,
  setLostConnection
} = settingsSlice.actions;
export const settingsSelector = state => state.settings;
export default settingsSlice.reducer;
