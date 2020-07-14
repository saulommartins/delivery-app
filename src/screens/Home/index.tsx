import React from 'react';
import {
  FlatList,
  Image,
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import translate from "../../resources/lang";
import { recipes } from '../../data/dataArrays';
import styles from './styles';
import colors from '../../styles/colors';

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({navigation})  => {

  const theme = useTheme();
  const onPressRecipe = (item: any) => {
    navigation.navigate('Recipe', { item });
  };

    const renderRecipes = ({item}: any) => (
      <TouchableHighlight
        underlayColor={colors.senary}
        onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text> */}
      </View>
    </TouchableHighlight>
    )
    return (
      <View>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
};

export default Home;
