import {Dimensions, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 30,
  },

  title: {
    fontSize: 20,
    color: "#6f6f6f",
    marginStart: 20,
  },
  text: {
    fontSize: 16,
    color: "#6f6f6f",
  },
  textDone: {
    fontSize: 16,
    color: "#6f6f6f",
    textDecorationLine: "line-through",
  },
  whitetext: {
    fontSize: 16,
    color: "#fff",
  },
  textInput: {
    borderColor: "#6f6f6f",
    borderWidth: 1,
    width: Dimensions.get("screen").width * 0.6,
    borderRadius: 10,
    paddingLeft: 10,
  },
  inputContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addButton: {
    width: Dimensions.get("screen").width * 0.3,
    backgroundColor: "#5897fb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 5,
  },
  scrollContainer: {
    margin: 20,
  },
  itemContainer: {
    paddingVertical: 20,
    borderBottomColor: "#e4e4e4",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  removeButton: {
    backgroundColor: "#f33d3d",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});

export default styles;