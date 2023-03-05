import { ReactNode } from "react";

export interface IEmail {
  value: string;
  error: string;
}
export interface IPassword {
  value: string;
  error: string;
}
export interface ITextInput {
  errorText: string;
  description?: string;
  label: string;
  returnKeyType?: any;
  value: string;
  onChangeText: (value: string) => void;
  error: boolean;
  secureTextEntry?: any;
  autoCapitalize?: any;
  autoCompleteType?: any;
  textContentType?: any;
  keyboardType?: any;
}

export interface IButton {
    mode: "text" | "outlined" | "contained" | "elevated" | "contained-tonal" | undefined;
    onPress: () => void;
    style?: any;
    children: ReactNode;
}

export interface IHeader {
  children: ReactNode;
  color?: string;
  fontSize?: number;
}

export interface INavigationCard {
  icon: string;
  text: string;
  navigateTo: string;
}