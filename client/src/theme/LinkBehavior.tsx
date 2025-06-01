import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router';

const LinkBehavior = React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }>(
  (props, ref) => {
    const { href, ...other } = props;
    return <RouterLink ref={ref} data-testid='custom-link' to={href} {...other} />;
  }
);

export default LinkBehavior;
