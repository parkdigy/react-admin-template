/********************************************************************************************************************
 * 접근 로그를 기록하는 컴포넌트
 * ******************************************************************************************************************/

import { type AccessLoggerProps as Props } from './AccessLogger.types';
import { useAlertDialog } from '@pdg/react-dialog';

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

  useEventEffect(() => {
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
              content: <T>비밀번호 변경 후 다른 메뉴를 사용할 수 있습니다.</T>,
            });
            break;
          case 'NOTFOUND':
            alertDialog({
              content: <T color='red'>{pathname.substring(1)} Access log key not found!</T>,
            });
            break;
          default:
            alertDialog({ content: <T color='red'>{pathname.substring(1)} Unhandled!</T> });
            break;
        }
      })
      .catch(() => {
        window.location.href = '/';
      });
  }, [path]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return renderElement;
};

export default AccessLogger;
