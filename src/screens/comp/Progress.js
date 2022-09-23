import React from 'react';
import { View } from 'react-native';
import ProgressDialog from 'react-native-progress-dialog';

const Progress = ({ loading = false }) => {
  return (
    <ProgressDialog
      visible={loading}
      label="Por favor aguarde!"
      loaderColor="#FF9800"
    />
  );
};

export default Progress;
