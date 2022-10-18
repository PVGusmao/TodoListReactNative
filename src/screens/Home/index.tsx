import React, { useState } from "react";
import { FlatList, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Ionicons, AntDesign  } from '@expo/vector-icons';
import { EmptyList } from "../../components/EmptyList";
import { FilledList } from "../../components/FilledList";

export const Home = () => {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')
  const [counterCreated, setCounterCreated] = useState(0)
  const [counterFinished, setCounterFinished] = useState(0)

  const handleAddTask = () => {
    setTasks((prevState) => [...prevState, input]);
    setInput('');
    setCounterCreated(tasks.length + 1)
  }

  return (
    <>
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.container}>
          <Ionicons name="md-rocket-outline" size={56} color="#1E6F9F" />
          <Text style={styles.textTo}>to</Text>
          <Text style={styles.textDo}>do</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={'gray'}
            style={styles.inputTask}
            onChangeText={text => setInput(text)}
            value={input}
          />
          <TouchableOpacity onPress={() => handleAddTask()}style={styles.inputButton}>
            <AntDesign name="pluscircleo" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <View style={styles.createdWrapper}>
            <Text style={styles.createdText}>Criadas</Text>
            <View style={styles.counter}>
              <Text style={{ color: '#fff', fontWeight: 'bold'}}>{counterCreated}</Text>
            </View>
          </View>
          <View style={styles.finishedWrapper}>
            <Text style={styles.finishedText}>Concluídas</Text>
            <View style={styles.counter}>
              <Text style={{ color: '#fff', fontWeight: 'bold'}}>{counterFinished}</Text>
            </View>
          </View>
        </View>        
          {
            !tasks.length ?
            <EmptyList /> :
            <FilledList
              tasks={tasks}
              setCounterFinished={setCounterFinished}/>
          }
      </KeyboardAvoidingView>
    </>
    )
  }
  