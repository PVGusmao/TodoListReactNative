import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#000',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 150,
    justifyContent: 'center',
    marginTop: 30,
    width: '100%',
  },
  textTo: {
    color: '#1E6F9F',
    fontSize: 56,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textDo: {
    color: '#5E60CE',
    fontSize: 56,
    fontWeight: 'bold',
  },
  inputWrapper: {
    alignItems: 'center',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5,
    width: '100%',
  },
  inputTask: {
    backgroundColor: '#333',
    borderRadius: 10,
    color: '#fff',
    fontSize: 18,
    height: 54,
    paddingLeft: 10,
    width:'75%',
  },
  inputButton: {
    alignItems: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 10,
    height: 54,
    justifyContent: 'center',
    marginLeft: 5,
    width: 54,
  },
  header: {
    backgroundColor: '#000',
    borderBottomColor: '#333333',
    borderBottomWidth: 2,
    flexDirection: 'row',
    height: 75,
    justifyContent: 'space-between',
    marginVertical: 10,
    width: '90%',
  },
  createdWrapper: {
    alignItems: 'center',
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    width: 100,
  },
  createdText: {
    color: '#1E6F9F',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 17,
  },
  finishedWrapper: {
    alignItems: 'center',
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    width: 100,
  },
  finishedText: {
    color: '#5E60CE',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 17,
  },
  counter: {
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 999,
    color: '#fff',
    height: 25,
    justifyContent: 'center',
    lineHeight: 15,
    marginLeft: 10,
    width: 25,
  },
});