import { Dimensions, PixelRatio } from 'react-native';
import { ICalculateRatio } from '../types/styles';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

const guidelineBaseWidth = 375;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) =>
  size * PixelRatio.getFontScale();

export const calculateAspectRatioFit = ({
  width,
  height,
  maxWidth,
  maxHeight
}: ICalculateRatio) => {
  const ratio = Math.min(maxWidth / width, maxHeight / height);
  return {
    width: width * ratio,
    height: height * ratio
  };
}

export const boxShadow = (
  color: string,
  offset = { height: 4, width: -2 },
  radius = 3,
  opacity = 0.2
) =>{
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius
  };
}
