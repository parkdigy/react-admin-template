import { styled } from '@mui/material';

export const AdminMenuContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 800px;
`;

export const AdminMenuButtonsContainer = styled('div')`
  display: flex;
  margin-left: -5px;
  margin-right: -5px;

  > .MuiButtonBase-root {
    flex: 1;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const AdminMenuListContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;
