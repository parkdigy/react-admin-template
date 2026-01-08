/********************************************************************************************************************
 * 가로 분리 Line 컴포넌트
 * ******************************************************************************************************************/

import { type DividerProps as Props } from './Divider.types';

const Divider = ({ color, icon, label }: Props) => {
  const theme = useTheme();

  const finalColor = useMemo(() => color ?? theme.palette.grey['700'], [color, theme.palette.grey]);

  return icon || label ? (
    <Container>
      {icon && <Icon style={{ color: finalColor }}>{icon}</Icon>}
      {label && <Label style={{ color: finalColor }}>{label}</Label>}
      <div style={{ paddingLeft: 5, flex: 1 }}>
        <Line />
      </div>
    </Container>
  ) : (
    <Line />
  );
};

export default Divider;

/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/

const Container = styled('div')`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Label = styled('div')`
  font-weight: 700;
`;

const Line = styled('div')`
  border-top: 1px solid #efefef;
`;
