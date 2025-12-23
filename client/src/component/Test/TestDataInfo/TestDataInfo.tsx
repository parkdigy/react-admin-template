import React from 'react';
import { TestDataInfoProps as Props } from './TestDataInfo.types';
import { PrivacyAccess, Test, TestDataInfoData } from '@const';
import { PrivacyBusinessNoText, PrivacyPersonalNoText, PrivacyTelText, PrivacyText } from '@ccomp';

const TestDataInfo = ({ id }: Props) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [info, setInfo] = useState<TestDataInfoData>();

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    Test.dataInfo(id).then(({ data }) => {
      setInfo(data);
    });
  }, [id]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return info ? (
    <InfoTable<TestDataInfoData>
      cols={1}
      info={info}
      items={[
        { type: 'divider', icon: 'Article', label: '기본 정보' },
        { label: 'ID', name: 'id', xs: 12, md: 6 },
        { label: 'Status', name: 'status_name', xs: 12, md: 6 },
        { label: 'Text', name: 'text', xs: 12, md: 6, ellipsis: true },
        { label: 'Text Array', xs: 12, md: 6, ellipsis: true, onRender: (item) => item.text_array.join(', ') },
        {
          label: 'Email',
          xs: 12,
          md: 6,
          onRender: (info) => <PrivacyText type={PrivacyAccess.Type.TestEmail} parentId={info.id} text={info.email} />,
        },
        { label: 'Url', name: 'url', xs: 12, md: 6, clipboard: true, ellipsis: true },
        {
          label: 'Tel',
          xs: 12,
          md: 6,
          onRender: (info) => <PrivacyTelText type={PrivacyAccess.Type.TestTel} parentId={info.id} text={info.tel} />,
        },
        {
          label: 'Mobile',
          name: 'mobile',
          xs: 12,
          md: 6,
          onRender: (info) => (
            <PrivacyTelText type={PrivacyAccess.Type.TestMobile} parentId={info.id} text={info.mobile} />
          ),
        },
        {
          label: 'Company Num',
          name: 'business_no',
          xs: 12,
          md: 6,
          onRender: (info) => (
            <PrivacyBusinessNoText
              type={PrivacyAccess.Type.TestPersonalNum}
              parentId={info.id}
              text={info.business_no}
            />
          ),
        },
        {
          label: 'Personal Num',
          name: 'personal_no',
          xs: 12,
          md: 6,
          onRender: (info) => (
            <PrivacyPersonalNoText type={PrivacyAccess.Type.TestMobile} parentId={info.id} text={info.personal_no} />
          ),
        },
        { type: 'divider', icon: 'BlurOn', label: '추가 정보' },
        { label: 'Int', type: 'number', name: 'num_int', xs: 12, md: 6 },
        { label: 'Float', type: 'number', name: 'num_float', xs: 12, md: 6 },
        { label: 'Date', type: 'date', name: 'date', xs: 12, md: 6 },
        { label: 'Datetime', type: 'datetime', name: 'datetime', xs: 12, md: 6 },
        { label: 'Create Date', type: 'datetime', name: 'create_date', xs: 12, md: 6 },
        { label: 'Update Date', type: 'datetime', name: 'update_date', xs: 12, md: 6 },
      ]}
    />
  ) : null;
};

export default TestDataInfo;
