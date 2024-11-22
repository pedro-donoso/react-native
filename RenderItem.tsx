import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./Styles";
import {Task} from './App';

interface ItemProps {
    item: Task;
}

export default function RenderItem({item}) {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity>
          <Text style={item.done ? styles.textDone : styles.text}>
            {item.title}
          </Text>
          <Text style={item.done ? styles.textDone : styles.text}>
            {item.date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
        {
          //condicional
          item.done && (
            <TouchableOpacity style={styles.removeButton}>
              <Text style={styles.whitetext}>Eliminar</Text>
            </TouchableOpacity>
          )
        }
      </View>
    );
}