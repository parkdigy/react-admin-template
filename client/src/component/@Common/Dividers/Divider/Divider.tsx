/********************************************************************************************************************
 * 가로 분리 Line 컴포넌트
 * ******************************************************************************************************************/

import { type DividerProps as Props } from './Divider.types';

const Divider = ({ color, icon, label, ...otherProps }: Props) => {
  const theme = useTheme();

  const finalColor = useMemo(() => color ?? theme.palette.grey['700'], [color, theme.palette.grey]);

  return icon || label ? (
    <Container {...otherProps}>
      {icon && <Icon style={{ color: finalColor }}>{icon}</Icon>}
      {label && <Label style={{ color: finalColor }}>{label}</Label>}
      <div style={{ paddingLeft: 5, flex: 1 }}>
        <Line />
      </div>
    </Container>
  ) : (
    <Line {...otherProps} />
  );
};

export default Divider;

/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/

const Container = styled(Box)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Label = styled(Box)`
  font-weight: 700;
`;

const Line = styled(Box)`
  border-top: 1px solid #efefef;
`;
