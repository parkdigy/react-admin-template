/********************************************************************************************************************
 * 접근 로그를 기록하는 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { AccessLoggerProps as Props } from './AccessLogger.types';
import { useAlertDialog } from '@pdg/react-dialog';
import { Typography } from '@mui/material';

const AccessLogger = ({ path, element }: Props) => {
  /********************************************************************************************************************
   * Dialog
   * ******************************************************************************************************************/

  const alertDialog = useAlertDialog();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [renderElement, setRenderElement] = useState<ReactElement | null>(null);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  {
    const effectEvent = useEffectEvent(() => {
      setRenderElement(null);

      const { pathname, search, hash } = window.location;
      const url = `${pathname}${search}${hash}`;

      api
        .notAuthPost<ApiResult & { data: string }>('admin.user_access_log', { id: pathname.substring(1), url })
        .then(({ data }) => {
          switch (data) {
            case 'SUCCESS':
              setRenderElement(element);
              break;
            case 'PASSWORD_RESET':
              alertDialog({
                content: <Typography>비밀번호 변경 후 다른 메뉴를 사용할 수 있습니다.</Typography>,
              });
              break;
            case 'NOTFOUND':
              alertDialog({
                content: <Typography color='red'>{pathname.substring(1)} Access log key not found!</Typography>,
              });
              break;
            default:
              alertDialog({ content: <Typography color='red'>{pathname.substring(1)} Unhandled!</Typography> });
              break;
          }
        })
        .catch(() => {
          window.location.href = '/';
        });
    });
    useEffect(() => effectEvent(), [path]);
  }

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return renderElement;
};

export default AccessLogger;
