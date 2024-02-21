export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export type RoughAnnotationType = 'underline' | 'box' | 'circle' | 'highlight' | 'strike-through' | 'crossed-off' | 'bracket';
export type FullPadding = [number, number, number, number];
export type RoughPadding = number | [number, number] | FullPadding;
export type BracketType = 'left' | 'right' | 'top' | 'bottom';

export interface RoughAnnotationConfig extends RoughAnnotationConfigBase {
  type: RoughAnnotationType;
  multiline?: boolean;
  rtl?: boolean;
}

export interface RoughAnnotationConfigBase {
  animate?: boolean; // defaults to true
  animationDuration?: number; // defaults to 1000ms
  color?: string; // defaults to currentColor
  strokeWidth?: number; // default based on type
  padding?: RoughPadding; // defaults to 5px
  iterations?: number; // defaults to 2
  brackets?: BracketType | BracketType[]; // defaults to 'right'
  // Additional class added to the annotation
  class?: string
}

export interface RoughAnnotation extends RoughAnnotationConfigBase {
  isShowing(): boolean;
  show(): void;
  hide(): void;
  remove(): void;
}

export interface RoughAnnotationGroup {
  show(): void;
  hide(): void;
}

export type AnnotationState = 'unattached' | 'not-showing' | 'showing';
