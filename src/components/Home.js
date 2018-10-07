import React from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

class Home extends React.Component {
  state = {
    name: ''
  }
  render()  {
    return(
      <View>
        <Text style={styles.title}>Enter your name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="John Snow"
          onChangeText={(text) => {
            this.setState({
              name: text
            });
          }}
          value={this.state.name}
        />
        <TouchableOpacity
          onPress={() => {
            Actions.chat({
              text: this.state.name
            });
          }}
        >
          <Text style={styles.textButton}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingLeft: 20,
    paddingTop: 20,
    fontSize: 20
  },
  textInput: {
    padding: 5,
    height: 40,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
  },
  textButton: {
    marginLeft: 20,
    fontSize: 20
  }
});

export default Home;