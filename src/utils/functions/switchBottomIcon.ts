import { useTranslation } from 'react-i18next';

const switchBottomIcon = (rn: string, focused: boolean) => {
  
  switch (rn) {
    case "Map":
      return focused ? 'map' : 'map-outline';
    case "Карта":
      return focused ? 'map' : 'map-outline';
    case "Mapa":
      return focused ? 'map' : 'map-outline';
    case "Menu":
      return focused ? 'grid' : 'grid-outline';
    case "Menú":
      return focused ? 'grid' : 'grid-outline';
    case "Меню":
      return focused ? 'grid' : 'grid-outline';
    case "Settings":
      return focused ? 'settings' : 'settings-outline';
    case "Ajustes":
      return focused ? 'settings' : 'settings-outline';
    case "Налаштунки":
      return focused ? 'settings' : 'settings-outline';
    case "Profile":
      return focused ? 'person-circle' : 'person-circle-outline';
    case "Perfil":
      return focused ? 'person-circle' : 'person-circle-outline';
    case "Профіль":
      return focused ? 'person-circle' : 'person-circle-outline';
    default:
      return focused ? 'home' : 'home-outline';
  }
};

export default switchBottomIcon;
