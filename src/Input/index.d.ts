import type isMouseButtonDown from './isMouseButtonDown';
import type isMouseButtonUp from './isMouseButtonUp';

export interface iInputFunctions {
  isMouseButtonDown: typeof isMouseButtonDown;
  isMouseButtonUp: typeof isMouseButtonUp;
  getAxis: (axis: number, deviceId?: string) => number;
  getAxisRaw: (axis: number, deviceId?: string) => number;
}

export interface iInputVariables {
  /**
   * Returns if touch inputs are present, which maybe supported by device but that's not in use at moment.
   *
   * Can change on desktop web browsers, when toggle mobile simulation tools.
   *
   * @hook useTouchPresent
   * @event TouchListener.on('changeTouchPresence')
   * @returns boolean
   */
  touchPresent: boolean;

  /**
   * Returns if a mouse device is detected / connected.
   *
   * @hook useMousePresent
   * @event MouseListener.on('changeMousePresence')
   * @returns boolean
   */
  mousePresent: boolean;

  /**
   * The current mouse position in pixel coordinates. (X and Y)
   *
   * @hook useMousePosition
   * @event MouseListener.on('changeMousePosition')
   * @returns object
   */
  mousePosition: {x: number; y: number};
}

type iInput = iInputFunctions & iInputVariables;

const Input: iInput;

export default Input;
