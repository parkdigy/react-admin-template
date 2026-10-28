declare module '*.svg' {
  import type { ComponentType, SVGProps } from 'react';

  const url: string;
  export default url;
  export const ReactComponent: ComponentType<SVGProps<SVGSVGElement>>;
}

declare module '*.html' {
  const html: string;
  export default html;
}
