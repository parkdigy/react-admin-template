declare type JSXElementConstructor<P> = import('react').JSXElementConstructor<P>;

declare type Ref<T> = import('react').Ref<T>;

declare type ReactElement<
  P = unknown,
  T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>,
> = import('react').ReactElement<P, T>;

declare type ReactNode = import('react').ReactNode;

declare type ComponentType<P = {}> = import('react').ComponentType<P>;

declare type CSSProperties = import('react').CSSProperties;
