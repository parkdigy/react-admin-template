import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router';

const LinkBehavior = ({
  href,
  ...other
}: Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] } & { ref?: Ref<HTMLAnchorElement> }) => {
  return <RouterLink data-testid='custom-link' to={href} {...other} />;
};

export default LinkBehavior;
