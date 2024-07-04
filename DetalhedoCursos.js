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
      subjects: ['Materias do 1º Ano', 'Fundamentos da Informática', 'Hardware e Sistemas Operacionais', 'Lógica de Programação', 'Projeto Integrador I', 'Desenvolvimento Web','Total no 1º Ano','Materias do 2° Ano', 'Banco de Dados','Engenharia de Software I','Programação I','Projeto Integrador II','Redes', 'Total no 2º Ano', 'Materias do 3° Ano','Empreendedorismo', 'Programação II', 'Projeto Integrador III', 'Administração de Redes', 'Total no 3° Ano'],
      teachers: ['','Tiago Funk', 'Bruno A. Guilhen', 'Eduardo Stahnke', 'Rodrigo R. Nogueira','Tiago Funk','', '','Rodrigo R. Nogueira', 'Tiago Funk','Eduardo Stahnke', 'Bruno A. Guilhen', 'Bruno A. Guilhen','','', 'Thiago S. Araújo','Tiago Funk','Tiago Funk', 'Bruno A. Guilhen'],
      hours: ['','60', '120','120','30','60','390','', '90','60','120','30','60','360','', '60', '120', '60', '60', '300'],
      image: require('./assets/info.jpg'),
      
    };
  } else if (course === 'B') {  
    courseData = {
        title: 'Técnico em Administração integrado ao Ensino Médio',
        description: 'O Curso Técnico em Administração tem por objetivo proporcionar aos estudantes o desenvolvimento de sua autonomia enquanto cidadãos críticos e participativos, visando ao domínio dos conhecimentos científicos e tecnológicos da administração, para atuarem de maneira consciente e responsável diante das necessidades atuais no mundo do trabalho.',
        subjects: ['Materias do 1º Ano', 'Economia', 'Fundamentos da Administração', 'Gestão de Pessoas', 'Gestão de Serviços', 'Projeto Integrador I','Total no 1º Ano','Materias do 2° Ano', 'Estatística e Matemática financeira','Gestão da produção e Logística','Marketing','Planejamento Estratégico','Projeto Integrador II', 'Total no 2º Ano', 'Materias do 3° Ano','Administração da Tecnologia da Informação', 'Administração financeira', 'Projeto Integrador III', 'Responsabilidade Social Empresarial', 'Total no 3° Ano'],
        teachers: ['', 'André L. Kopelke', 'Jeter Lang', 'André L. Kopelke','Jeter Lang', 'Jeter Lang','' ,'','Thiago S. Araújo', 'André Luz Kopelke',  'Paulo R. S. Machado','Paulo R. S. Machado','Jeter Lang','' ,'', 'Paulo R. S. Machado','Thiago S. Araújo', 'Paulo R. S. Machado'],
        hours: ['', '60','60','60','60','60','300','', '60','90','60','60','60','330','', '60','90','60','60','270'],
        image: require('./assets/adm.jpg'),
      };
  } else if (course === 'C') {
    courseData = {
        title: 'Técnico em Vestuário integrado ao Ensino Médio',
        description: 'O curso Técnico em Vestuário Integrado ao Ensino Médio objetiva proporcionar aos discentes o desenvolvimento de sua autonomia enquanto cidadãos críticos e participativos, visando o domínio dos conhecimentos científicos e tecnológicos, para atuarem de maneira consciente e responsável diante das necessidades atuais no mundo do trabalho, com foco na formação e a qualificação de profissionais com visão técnica para atuarem na área de confecção do vestuário, aptos a gerenciar e operacionalizar as diversas etapas do processo de produção do vestuário, em empresas da área industrial e de prestação de serviços.',
        subjects: ['Materias do 1º Ano', 'Desenho de Moda e Ilustração', 'História do Vestuário', 'Projeto Integrador I', 'Tecnologia da Costura I', 'Tecnologia Têxtil','Total no 1º Ano','Materias do 2° Ano', 'Desenho Técnico de Vestuário e Têxtil','Modelagem Plana e Tecnologia','Projeto Integrador II','Tecnologia e Métodos no Processo Produtivo','Tecnologia da Costura II', 'Total no 2º Ano', 'Materias do 3° Ano','Administração e Empreendedorismo', 'Beneficiamento Têxtil', 'Desenvolvimento de Produto Sustentável	', 'Higiene e Segurança do Trabalho','Laboratório de Moulage e Confecção', 'Projeto Integrador III','Total no 3° Ano'],
        teachers: ['', 'Lariane D. B. e Olivira','Isabla D. Felchtti','Isabla D. Felchtti','Jonathan G. de Lima', 'Ana S. de L. Vielmo', '','', 'Márcio M. Albani','Márcio M. Albani','Isabla D. Felchtti', 'Ana S. de L. Vielmo','Jonathan G. de Lima','','','Jeter Lang','Jonathan G. de Lima','Jonathan G. de Lima','Márcio M. Albani','Márcio M. Albani','Isabla D. Felchtti'],
        hours: ['', '60','60','60','60','60','300','', '60','120','60','60','60','360','', '60','120','60','60','60','60','420'],
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
    height: 100,
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
