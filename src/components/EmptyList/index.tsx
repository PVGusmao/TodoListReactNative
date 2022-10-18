import { Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { styles } from './style';

export function EmptyList() {
  return (
    <View style={{alignItems: 'center', backgroundColor: '#000', marginTop: 20}}>
      <Octicons name="checklist" size={90} color="#808080" />
      <Text style={styles.firstText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.secondText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
