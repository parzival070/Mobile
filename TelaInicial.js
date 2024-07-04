import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const TelaInicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Detalhes do Campus"
        onPress={() => navigation.navigate('CampusDetails')}
      />
      <Button
        title="Página de Cursos"
        onPress={() => navigation.navigate('Courses')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { TelaInicial, styles };
