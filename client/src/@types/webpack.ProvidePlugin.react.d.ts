declare type Ref<T> = import('react').Ref<T>;

declare type RefObject<T> = import('react').RefObject<T>;

declare type ReactElement<
  P = unknown,
  T extends string | import('react').JSXElementConstructor<any> = string | import('react').JSXElementConstructor<any>,
> = import('react').ReactElement<P, T>;

declare type ElementType<
  P = any,
  Tag extends keyof import('react').JSX.IntrinsicElements = keyof import('react').JSX.IntrinsicElements,
> = import('react').ElementType<P, Tag>;

declare type ReactNode = import('react').ReactNode;

declare type ComponentType<P = {}> = import('react').ComponentType<P>;

declare type CSSProperties = import('react').CSSProperties;
