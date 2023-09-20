import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Button,
  TextInput,
  Alert,
} from "react-native";
export default function App() {
  const [listNV, setListNV] = useState([
    { key: "Devin", sdt: "098762888" },
    { key: "Dan", sdt: "088299289" },
    { key: "Dominic", sdt: "090989900" },
    { key: "Jackson", sdt: "088990088" },
    { key: "James", sdt: "098779989" },
    { key: "Joel", sdt: "098787899" },
    { key: "John", sdt: "078997899" },
  ]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (inputEmail) => {
    setEmail(inputEmail);
  };

  const handlePassword = (inputPassword) => {
    setPassword(inputPassword);
  };

  const handleLogin = () => {
    Alert.alert("Login", `Email: ${email}, Password: ${password}`);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          style={{ height: 400 }}
          data={listNV}
          extraData={listNV}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                alert(`${item.key} - ${item.sdt}`);
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "green",
                }}
              >
                <Text style={styles.item}>{item.key}</Text>
                <Text style={styles.item}>{item.sdt}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Button
            title="Add"
            onPress={() => {
              listNV.push({ key: "Cường", sdt: "0987555889" });
              console.log(listNV);
              setListNV(listNV);
            }}
          />

          <Button
            title="Delete"
            onPress={() => {
              listNV.splice(0, 1);
              setListNV(listNV);
            }}
          />
        </View>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={handleEmail}
          value={email}
          placeholder="Enter email"
        />
        <TextInput
          style={styles.input}
          onChangeText={handlePassword}
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
        />
        <Button title="Login" onPress={handleLogin} style={styles.button} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  login: {
    marginTop: 30,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: "aliceblue",
  },
  input: {
    height: 40,
    borderColor: "aqua",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  button: {
    color: "blue",
  },
});
