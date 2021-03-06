import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,

  },

  banner:{
    width: '100%',
    resizeMode: 'contain',

  },

  title:{
// rodar comando: expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins
// ver comandos .txt
// descomentar linhas comentadas
    fontFamily: 'Poppins_400Regular',
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
    // fontWeight: 'bold',//comentar essa linha
  },

  buttonsContainer:{

    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',

  },

  button:{
    height: 150,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between'

  },

  buttonPrimary:{
    backgroundColor: '#9871f5'
  },

  buttonSecondary:{
    backgroundColor: '#04d361'
  },

  buttonText:{
    fontFamily: 'Archivo_700Bold',
    // fontWeight: 'bold',//comentar essa linha
    color: '#fff',
    fontSize: 20,
  },

  totalConnections:{
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#d4c2ff',
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  },

});

export default styles;

