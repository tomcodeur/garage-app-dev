import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Input } from 'react-native-elements';
import { Header } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { CheckBox } from 'react-native-elements';
import { Alert } from 'react-native';

export default class App extends Component {

  state = {
    checked: true, //Valeur des cases à cocher
  }

  seeAlert() {
    Alert.alert(
      "Question",
      "Etes-vous sur de vouloir valider ?",
      [
      { text: "Annuler", onPress: () => console.log("Appuyé sur annuler"),  style: "cancel"},
      { text: "OK", onPress: "printPDF" }
    ],
      { cancelable: false }
      );
      //Fonction message d'alerte
  }

  render() {
  return (
      <ScrollView>
        <View style={styles.container}>
          <Header centerComponent={{ text: 'Garage Solidaire', style: { color: '#fff' }}}/>
          <Input style={styles.firstInput} placeholder='Nom...' leftIcon= {<Icon name='user'size={17}color='#7B8894'/>}/>
          <Input placeholder='Prénom...' leftIcon= {<Icon name='user'size={17}color='#7B8894'/>}/>
          <Input placeholder='Date de naissance...' leftIcon= {<Icon name='calendar'size={17}color='#7B8894'/>}/>
          <Input placeholder='Adresse...' leftIcon= {<Icon name='home'size={17}color='#7B8894'/>}/>
          <Input placeholder='Permis...' leftIcon= {<Icon name='id-card'size={17}color='#7B8894'/>}/>
          <Input placeholder='Contrat de travail...' leftIcon= {<Icon name='pencil-square-o'size={17}color='#7B8894'/>}/>
          <View>
            <CheckBox center title='QPV' checked={this.state.checked}/>
            <CheckBox center title='RSA' checked={this.state.checked}/>
          </View>
          <Input placeholder="Carte d'identité..." leftIcon= {<Icon name='address-card'size={17}color='#7B8894'/>}/>
          <Input placeholder='Empreinte banquaire...' leftIcon= {<Icon name='credit-card-alt'size={17}color='#7B8894'/>}/>
          <Input placeholder='Modèle...' leftIcon= {<Icon name='car'size={17}color='#7B8894'/>}/>
          <Input placeholder='Marque...' leftIcon= {<Icon name='star'size={17}color='#7B8894'/>}/>
          <Input placeholder='Immatriculation...' leftIcon= {<Icon name='bars'size={17}color='#7B8894'/>}/>
          <Input placeholder='Etat Véhicule...' leftIcon= {<Icon name='heartbeat'size={17}color='#7B8894'/>}/>
          <Input placeholder='Kilométrage jour...' leftIcon= {<Icon name='tachometer'size={17}color='#7B8894'/>}/>
          <Input placeholder='Date de départ...' leftIcon= {<Icon name='map-o'size={17}color='#7B8894'/>}/>
          <Input placeholder='Date de retour...' leftIcon= {<Icon name='share'size={17}color='#7B8894'/>}/>
        </View>
        <View>
            <Button title="OBTENIR MON PDF" onPress={this.seeAlert}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  firstInput: {
    marginTop: 20,
  },

});