import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import translate from "../../resources/lang";

interface Props {
  navigation: any;
}

const Purchase: React.FC<Props> = ({navigation})  => {
  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{color: colors.text}}>{translate("purchase")}</Text>
      <Button
        title="Go to search screen"
        onPress={() => navigation.navigate("Search")}
      />
      </View>
    );
};

export default Purchase;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
