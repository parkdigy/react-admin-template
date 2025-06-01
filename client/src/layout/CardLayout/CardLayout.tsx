/********************************************************************************************************************
 * 카드 레이아웃 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import * as AdminLayout from '@pdg/react-admin-layout';
import { Routes, Route, Navigate } from 'react-router';
import { SignIn } from '@comp';
import { Box } from '@mui/material';
import { useAppState } from '@context';

const CardLayout = () => {
  const { removeHtmlLoading } = useAppState();

  useEffect(() => {
    removeHtmlLoading();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminLayout.CardLayout>
      <Box sx={{ p: 2 }}>
        <Routes>
          <Route path='signin' element={<SignIn />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Box>
    </AdminLayout.CardLayout>
  );
};

export default CardLayout;
