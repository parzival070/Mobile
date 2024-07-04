import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
const DetalhedoCursos = ({ route }) => {
  const { course } = route.params;

  
  let courseData = {};
  
  if (course === 'A') {
    
    courseData = {
      
      title: 'Técnico em Informática Integrado ao Ensino Médio',
      description: 'O curso Técnico em Informática Integrado ao Ensino Médio oferta disciplinas técnicas relacionadas com a área de TECNOLOGIA DA INFORMAÇÃO (TI) integradas às disciplinas tradicionais do ENSINO MÉDIO' ,
      subjects: ['Materias do 1º ano', 'Fundamentos da Informática', 'Hardware e Sistemas Operacionais', 'Lógica de Programação', 'Projeto Integrador I', 'Desenvolvimento Web','TOTAL NO 1º ANO','Materias do 2° ano', 'Banco de Dados','Engenharia de Software I','Programação I','Projeto Integrador II','Redes'],
      teachers: ['','Professor 1', 'Professor 2'],
      hours: ['Horas','60', '120','120','30','60','390','', '90','60','120','30','60','360'],
      image: require('./assets/info.jpg'),
      
    };
  } else if (course === 'B') {  
    courseData = {
        title: 'Técnico em Administração integrado ao Ensino Médio',
        description: 'O Curso Técnico em Administração tem por objetivo proporcionar aos estudantes o desenvolvimento de sua autonomia enquanto cidadãos críticos e participativos, visando ao domínio dos conhecimentos científicos e tecnológicos da administração, para atuarem de maneira consciente e responsável diante das necessidades atuais no mundo do trabalho.',
        subjects: ['Matéria 1', 'Banco de Dados','Engenharia de Software I','Programação I','Projeto Integrador II','Redes'],
        teachers: ['Professor 1', 'Professor 2'],
        hours: ['2 horas', '90','60','120','30','60','360'],
        image: require('./assets/adm.jpg'),
      };
  } else if (course === 'C') {
    courseData = {
        title: 'Técnico em Vestuário integrado ao Ensino Médio',
        description: 'O curso Técnico em Vestuário Integrado ao Ensino Médio objetiva proporcionar aos discentes o desenvolvimento de sua autonomia enquanto cidadãos críticos e participativos, visando o domínio dos conhecimentos científicos e tecnológicos, para atuarem de maneira consciente e responsável diante das necessidades atuais no mundo do trabalho, com foco na formação e a qualificação de profissionais com visão técnica para atuarem na área de confecção do vestuário, aptos a gerenciar e operacionalizar as diversas etapas do processo de produção do vestuário, em empresas da área industrial e de prestação de serviços.',
        subjects: ['Matéria 1', 'Matéria 2'],
        teachers: ['Professor 1', 'Professor 2'],
        hours: ['2 horas', '3 horas'],
        image: require('./assets/vest.jpg'),
      };
  }

  
  const tableHead = ['Matéria', 'Professor', 'Horas'];
  const tableData = courseData.subjects.map((subject, index) => [subject, courseData.teachers[index], courseData.hours[index]]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={courseData.image} style={styles.image} />
        <Text style={styles.title}>{courseData.title}</Text>
        <Text style={styles.description}>{courseData.description}</Text>
        <ScrollView horizontal>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
            <Row data={tableHead} style={styles.head} textStyle={styles.text} />
            <Rows data={tableData} textStyle={styles.text} />
          </Table>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '20%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  text: {
    margin: 6,
    textAlign: 'center',
  },
  
});

export { DetalhedoCursos, styles };
