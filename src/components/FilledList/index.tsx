import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { Feather , Entypo } from '@expo/vector-icons'; 

export function FilledList({ tasks, setCounterFinished, setTasks, setCounterCreated, counterCreated }: any) {

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
        width: '100%',
      }}
    >
      {
          (tasks).map((element: any, index: number) => (
            <View key={index} style={styles.filledWrapper}>
              <TouchableOpacity onPress={() => {
                element.finished = !element.finished;
                !element.finished ? setCounterFinished((prevState: number) => prevState - 1) : setCounterFinished((prevState: number) => prevState + 1)
              }}>
                {
                  element.finished ? <Feather name="check-circle" size={24} color='#1E6F9F' /> : <Entypo name="circle" size={24} color='#1E6F9F' />
                }
              </TouchableOpacity>
            <View style={styles.textWrapper}>
              <Text style={element.finished ? styles.finished : styles.textTask}>{element.value}</Text>
            </View>
            <TouchableOpacity onPress={() => {
              const aloneElement = tasks.find((element: string) => element)
              const newArray = tasks.filter((element: string) => element !== aloneElement)
              setTasks(newArray);
              setCounterCreated(counterCreated - 1)
            }}>
              <Feather name="trash-2" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          ))
        }
    </ScrollView>
  );
}
