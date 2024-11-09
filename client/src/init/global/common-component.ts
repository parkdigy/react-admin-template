import {
  Box as _Box,
  BoxProps as _BoxProps,
  Stack as _Stack,
  StackProps as _StackProps,
  Div as _Div,
  DivProps as _DivProps,
  Span as _Span,
  SpanProps as _SpanProps,
  Flex as _Flex,
  FlexProps as _FlexProps,
  Img as _Img,
  ImgProps as _ImgProps,
  T as _T,
  TProps as _TProps,
} from '@ccomp';

declare global {
  // eslint-disable-next-line no-var
  var Box: typeof _Box;
  type BoxProps = _BoxProps;
  // eslint-disable-next-line no-var
  var Stack: typeof _Stack;
  type StackProps = _StackProps;
  // eslint-disable-next-line no-var
  var Div: typeof _Div;
  type DivProps = _DivProps;
  // eslint-disable-next-line no-var
  var Span: typeof _Span;
  type SpanProps = _SpanProps;
  // eslint-disable-next-line no-var
  var Flex: typeof _Flex;
  type FlexProps = _FlexProps;
  // eslint-disable-next-line no-var
  var Img: typeof _Img;
  type ImgProps = _ImgProps;
  // eslint-disable-next-line no-var
  var T: typeof _T;
  type TProps = _TProps;
}

globalThis.Box = _Box;
globalThis.Stack = _Stack;
globalThis.Div = _Div;
globalThis.Span = _Span;
globalThis.Img = _Img;
globalThis.T = _T;
