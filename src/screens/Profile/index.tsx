import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import translate from "../../resources/lang";

interface Props {
  navigation: any;
}

const Profile: React.FC<Props> = ({navigation})  => {
  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{color: colors.text}}>{translate("profile")}</Text>
      <Button
        title="Go to search screen"
        onPress={() => navigation.navigate("Search")}
      />
      </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
