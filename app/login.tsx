import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [ isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(
        "Missing Information",
        "Please enter your email and password."
      );
      return;
    }

    setLoading(true);

    try {
          await AsyncStorage.setItem(
            "token",
            "local-test-token"
          );
          await AsyncStorage.setItem(
            "user",
            JSON.stringify({
              email,
            })
          );


        Alert.alert(
          "Success",
          "Login Successful"
        );

        router.replace("/(tabs)/dashboard");
      } catch (error) {
        Alert.alert(
          "Network Error",
          "Unable to connect to server."
        );

      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <KeyboardAvoidingView
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : "height"
        }
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "700",
            marginBottom: 10,
          }}
        >
          Welcome Back Charles
        </Text>

        <Text
          style={{
            color: "gray",
            marginBottom: 30,
          }}
        >
          Continue to your workspace
        </Text>

        <Text
          style={{
            marginBottom: 8,
            fontWeight: "600",
          }}
        >
          Email Address
        </Text>

        <TextInput
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          style={{
            backgroundColor: "#F1F3F5",
            padding: 15,
            borderRadius: 10,
            marginBottom: 20,
          }}
        />
        
        <Text
          style={{
            marginBottom: 8,
            fontWeight: "600",
          }}
        >
          Password
        </Text>

        <View>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, backgroundColor: '#f1f3f5'}}>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry={!isPasswordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
          style={{
            flex : 1,
            height: 50,
            fontSize: 16,
            borderRadius: 10,
            color: '#000',
          }}
        />
        <TouchableOpacity
            onPress={togglePasswordVisibility}>
                <MaterialCommunityIcons 
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                size={22}
                color='black'
                />
        </TouchableOpacity>
        </View>
        </View>

        <TouchableOpacity
          onPress={() =>
            router.push("/reset")
          }
          style={{
            alignSelf: "flex-end",
            marginTop: 12,
          }}
        >
          <Text
            style={{
              color: "blue",
              fontWeight: "600",
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLogin}
          disabled={loading}
          style={{
            backgroundColor: "blue",
            marginTop: 30,
            borderRadius: 10,
            paddingVertical: 16,
            alignItems: "center",
          }}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Login
            </Text>
          )}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}