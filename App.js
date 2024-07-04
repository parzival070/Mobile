import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TelaInicial, styles as homeStyles } from './TelaInicial';
import { DetalhesdeTela, styles as campusDetailsStyles } from './DetalhesdeTela';
import { CursosdaTela, styles as coursesStyles } from './CursosdaTela';
import { DetalhedoCursos, styles as courseDetailStyles } from './DetalhedoCursos';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={TelaInicial}
          options={{ title: 'Home', headerStyle: homeStyles.header }}
        />
        <Stack.Screen
          name="CampusDetails"
          component={DetalhesdeTela}
          options={{ title: 'Detalhes do Campus', headerStyle: campusDetailsStyles.header }}
        />
        <Stack.Screen
          name="Courses"
          component={CursosdaTela}
          options={{ title: 'Página de Cursos', headerStyle: coursesStyles.header }}
        />
        <Stack.Screen
          name="CourseDetail"
          component={DetalhedoCursos}
          options={({ route }) => ({ title: `Detalhes do Curso ${route.params.course}`, headerStyle: courseDetailStyles.header })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
