import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const CursosdaTela = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Técnico em Informática"
        onPress={() => navigation.navigate('CourseDetail', { course: 'A' })}
      />
      <Button
        title="Técnico em Administração"
        onPress={() => navigation.navigate('CourseDetail', { course: 'B' })}
      />
      <Button
        title="Técnico em Vestuário"
        onPress={() => navigation.navigate('CourseDetail', { course: 'C' })}
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

export { CursosdaTela, styles };
