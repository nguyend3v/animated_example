import { StyleSheet, Text } from 'react-native';
import React, { FC, useMemo } from 'react';
import { UnstyledButton } from '../Button';

interface Props {
  label: string;
  forcused: boolean;
  onPress: () => void;
}

const DrawerItem: FC<Props> = ({ label, forcused, onPress }) => {
  const btnStyle = useMemo(() => {
    return [styles.btn, forcused ? styles.btnActive : null];
  }, [forcused]);

  const labelStyle = useMemo(() => {
    return [styles.label, forcused ? styles.activeLabel : null];
  }, [forcused]);

  return (
    <UnstyledButton style={btnStyle} onPress={onPress}>
      <Text style={labelStyle}>{label}</Text>
    </UnstyledButton>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  btn: {
    height: 34,
    marginBottom: 12,
    paddingLeft: 24,
    justifyContent: 'center',
    borderLeftWidth: 4,
    borderLeftColor: 'transparent',
  },
  btnActive: {
    borderLeftColor: '#FFAC30',
  },
  label: {
    fontSize: 16,
    color: '#1B1D28',
  },
  activeLabel: {
    fontWeight: 'bold',
  },
});
