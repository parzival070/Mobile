import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetalhesdeTela = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('./assets/idc.jpg')} 
          style={styles.image}
        />
        <Text style={styles.title}>IFC Ibirama</Text>
        <Text style={styles.description}>
        O Campus Ibirama foi inaugurado em 1º de fevereiro de 2010 na antiga Escola Hamônia e iniciou suas atividades com o ensino no segundo semestre desse mesmo ano. Esteve vinculado ao Campus Rio do Sul até 3 de fevereiro de 2011 e em 4 de fevereiro de 2011, através de uma solenidade, deu início ao seu funcionamento regular e uma mudança na vinculação, passando a ser gerido pela Reitoria do IFC, instalada em Blumenau.

A partir do primeiro semestre de 2011 foram ofertados os primeiros cursos técnicos integrados ao ensino médio. A integralização entre ensino médio e técnico facilita o acesso de jovens à educação profissionalizante e permite impulsionar o desenvolvimento local.

Entre os anos de 2012 e 2013 o Campus foi contemplado com uma grande reforma estrutural e adequação de espaços físicos. Alterações importantes para o Campus Ibirama receber oficialmente sua autonomia em 23 de abril de 2013 com a Portaria 330/MEC. Foi também em 2013 que o Campus desenvolveu os projetos do curso técnico integrado em Administração e o curso superior de Tecnologia em Design de Moda, que entraram em funcionamento já em fevereiro de 2014.

Em 2016 dá-se início a uma nova fase, com a abertura dos Cursos de PROEJA com Qualificação em Administração Comercial (Educação de Jovens e Adultos) e a Pós-graduação em Educação e Interdisciplinaridade. E, em 2017, foi inaugurada a biblioteca do IFC Ibirama e a Pós-graduação em Moda.

Atualmente o Campus Ibirama conta com 60 servidores e aproximadamente 500 alunos, oferecendo os cursos técnicos integrados ao ensino médio em Administração, Informática e Vestuário; PROEJA com Qualificação em Administração Comercial; Curso Superior de Tecnologia em Design de Moda; Especialização em Educação e Interdisciplinaridade e Especialização em Moda.
        </Text>
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
    width: '100%',
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
  },
});

export { DetalhesdeTela, styles };
