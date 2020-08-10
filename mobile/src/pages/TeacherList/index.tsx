import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather} from '@expo/vector-icons';
import api from '../../services/api';

function TeacherList (){
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [teachers, setTeachers] =useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');



  function handleToggleFilterVisible(){
    setFiltersVisible(!filtersVisible);
  }

  async function handleFiltersSubmit(){
    const response = await api.get('classes', {
      params:{
          subject,
          week_day,
          time,
      }
    });
    setTeachers(response.data);
    if(teachers)
      setFiltersVisible(false);
  }

  return (
    <View style={styles.container}>
      <PageHeader 
        title='Proffys disponiveis' 
        headerRight={(
          <BorderlessButton onPress={handleToggleFilterVisible}>
            <Feather name='filter' size={20} color='#FFF'/>
          </BorderlessButton>
        )}>


        { filtersVisible && (
          <View style={styles.searchForm}>

            <Text style={styles.label}>Materia</Text>
            <TextInput 
              placeholderTextColor="#c1bccc"
              style={styles.input} 
              placeholder='Qual a materia?' 
              value={subject}
              onChangeText={text=>{
                setSubject(text);
              }}
            />

            <View style={styles.inputGroup}>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput 
                  placeholderTextColor="#c1bccc"
                  style={styles.input} 
                  placeholder='Qual o dia?'
                  value={week_day}
                  onChangeText={text=>{
                    setWeek_day(text);
                  }}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horario</Text>
                <TextInput 
                placeholderTextColor="#c1bccc" 
                style={styles.input} 
                placeholder='Qual horario?'
                value={time}
                onChangeText={text=>{
                  setTime(text);
                }}
              />
              </View>

            </View>
            <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
              <Text style={styles.submitButtonText} >Filtrar</Text>
            </RectButton>
          </View>
        )}
        
      </PageHeader>
      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {teachers.map((teacher: Teacher) =><TeacherItem key={teacher.id} teacher={teacher}/>)}
      </ScrollView>
    </View>
  );
}

export default TeacherList;