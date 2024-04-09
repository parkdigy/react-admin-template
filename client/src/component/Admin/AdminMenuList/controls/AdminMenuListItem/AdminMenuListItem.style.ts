import { styled } from '@mui/material';
import { PdgButton } from '@pdg/react-component';

export const AdminMenuListItemContainer = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const AdminMenuListItemMenuContainer = styled('div')`
  flex: 1;
  display: flex;
  padding: 5px;
  border: 1px solid #efefef;
  background-color: #fafafa;
  margin-bottom: 5px;
  align-items: center;
  justify-content: space-between;
`;

export const AdminMenuListItemMenuTitle = styled('div')`
  margin-left: 5px;
  font-weight: 500;
  display: flex;
  align-items: center;

  > * {
    margin-right: 5px;
  }
`;

export const AdminMenuListItemMenuButtonContainer = styled('div')``;

export const AdminMenuListItemMenuButton = styled(PdgButton)`
  margin-left: 10px;
  font-weight: 600;

  &:first-of-type {
    margin-left: 0;
  }

  &.MuiButton-contained {
    border: 1px solid transparent;
  }

  .PdgButton-StartIcon {
    margin-right: 3px;
    .material-icons {
      font-size: 15px;
    }
  }
`;

export const AdminMenuListItemSubMenuContainer = styled('div')``;
