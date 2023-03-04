import { DETAILS, HOME, SETTINGS } from "../constants";

const switchBottomIcon = (rn: string, focused: boolean)=>{
    switch (rn) {
        case HOME:
          return focused ? 'home' : 'home-outline';
        case DETAILS:
          return focused ? 'list' : 'list-outline';
        case SETTINGS:
          return focused ? 'settings' : 'settings-outline';
        default:
          return focused ? 'home' : 'home-outline';
      }
}

export default switchBottomIcon