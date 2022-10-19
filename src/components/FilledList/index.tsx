import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { Feather , Entypo } from '@expo/vector-icons'; 

export function FilledList({ tasks, setCounterFinished, setTasks }: any) {
  const [markedTask, setMarkedTask] = useState(false)

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
        width: '100%',
      }}
    >
      {
          (tasks).map((element: string) => (
            <View key={element} style={styles.filledWrapper}>
              <TouchableOpacity onPress={() => {
                setMarkedTask(!markedTask)
                markedTask ? setCounterFinished((prevState: number) => prevState - 1) : setCounterFinished((prevState: number) => prevState + 1)
              }}>
                {
                  markedTask ? <Feather name="check-circle" size={24} color='#1E6F9F' /> : <Entypo name="circle" size={24} color='#1E6F9F' />
                }
              </TouchableOpacity>
            <View style={styles.textWrapper}>
              <Text style={styles.textTask}>{element}</Text>
            </View>
            <TouchableOpacity onPress={(e) => {
              const aloneElement = tasks.find((element: string) => element)
              const newArray = tasks.filter((element: string) => element !== aloneElement)
              setTasks(newArray)
            }}>
              <Feather name="trash-2" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          ))
        }
    </ScrollView>
  );
}
