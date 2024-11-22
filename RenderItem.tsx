import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./Styles";
import {Task} from './App';

interface ItemProps {
    item: Task;
    markDone: () => void;
    deleteFunction: () => void;
}

export default function RenderItem({
    item, 
    markDone, 
    deleteFunction
}: ItemProps) {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={markDone}>
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
            <TouchableOpacity onPress={deleteFunction} style={styles.removeButton}>
              <Text style={styles.whitetext}>Eliminar</Text>
            </TouchableOpacity>
          )
        }
      </View>
    );
}