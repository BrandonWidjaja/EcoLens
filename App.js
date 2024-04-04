import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card , Button} from '@rneui/themed';
import tw from 'twrnc';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={tw`flex-1 justify-center items-center`}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Card>
          <Text>Word of the Day</Text>
          <Text>be-nev-o=lent</Text>
          <Text>adjective</Text>
          <Text>
            well meaning and kindly.
            {'"a benevolent smile"'}
          </Text>
          <Button title = "Learn More" size="sm" type="clear">
          </Button>
        </Card>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
