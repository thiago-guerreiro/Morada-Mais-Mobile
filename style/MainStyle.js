import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maskedInput: {
    flexGrow: 1,
    height: 40,
    fontSize: 18,
    borderBottomColor: "#999",
    borderBottomWidth: 1,
    borderStyle: "solid",
    alignSelf: "flex-start"
  },
  containerMask: {
    flexDirection: "row",
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10
  },
  errorMessage: {
    alignSelf: "flex-start",
    marginLeft: 15,
    color: "#f00",
    fontSize: 12
  },

  btnSubmit: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6615dd',
    height: 45,
    width: '60%',
    borderRadius: 7,
    marginTop: 10,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#6615dd',
  },
});

export default styles

