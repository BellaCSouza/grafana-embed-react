import React, { Component } from 'react';
import { WebView } from 'react-native-webview'
import { StyleSheet, Button, View } from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      url: 'http://10.87.104.36:3000/d-solo/ce2ofy5tied4wa/new-dashboard?orgId=1&panelId=1&from=now-1h&to=now&timezone=browser',
    };
  }

  updateUrl(period) {
    const now = new Date().getTime();
    let from;

    switch (period) {
      case '1h':
        from = now - 1 * 60 * 60 * 1000;
        break;
      case '24h':
        from = now - 24 * 60 * 60 * 1000;
        break;
      case '7d':
        from = now - 7 * 24 * 60 * 60 * 1000;
        break;
      case '30d':
        from = now - 30 * 24 * 60 * 60 * 1000;
        break;
      default:
        from = now - 60 * 60 * 1000;
    }

    const newUrl = `http://10.87.104.36:3000/d-solo/ce2ofy5tied4wa/new-dashboard?&orgId=1&panelId=1&from=${from}&to=${now}&timezone=browser`;
    this.setState({ url: newUrl });
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.buttonArea}>
          <Button title="Última 1h" onPress={() => this.updateUrl('1h')} />
          <Button title="Última 24h" onPress={() => this.updateUrl('24h')} />
          <Button title="Última 7d" onPress={() => this.updateUrl('7d')} />
          <Button title="Última 30d" onPress={() => this.updateUrl('30d')} />
        </View>

        <WebView
          source={{ uri: this.state.url }}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding:10,
  },
});

export default App;
