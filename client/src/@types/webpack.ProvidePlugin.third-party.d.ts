declare global {
  // styled-components
  const styled: typeof import('styled-components').default;

  // classnames
  const classnames: typeof import('classnames');

  // react-router
  const useNavigate: typeof import('react-router').useNavigate;
  const useLocation: typeof import('react-router').useLocation;
  const useParams: typeof import('react-router').useParams;
  const useSearchParams: typeof import('react-router').useSearchParams;

  // dayjs
  const dayjs: typeof import('dayjs');
  const Dayjs: typeof import('dayjs').Dayjs;
  type Dayjs = import('dayjs').Dayjs;

  // usehooks-ts
  const useWindowSize: typeof import('usehooks-ts').useWindowSize;
}

export {};
