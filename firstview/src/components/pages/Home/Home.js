import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { UseGetAllMessage } from "../../common/hooks/getAllQuery";

const HomeScreen = ({ navigation }) => {
  const { data, isLoading } = UseGetAllMessage();

  return (
    <View>
      {isLoading ? (
        <Text>Stil load the data</Text>
      ) : data ? (
        data.data.map((message, key) => {
          return (
            <View>
              <div>
                <Text>{message.date}</Text>
              </div>
              <div>
                <Text>{message.message_data}</Text>
              </div>
              <div></div>
            </View>
          );
        })
      ) : (
        <Text>No Available data</Text>
      )}
    </View>
  );
};
