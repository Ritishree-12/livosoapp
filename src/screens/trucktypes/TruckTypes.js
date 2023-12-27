// import React from "react";
// import { View, Text, Pressable,StyleSheet } from "react-native";
// import TruckRow from './TruckRow';

// import typesData from '../../data/type';

// const TruckTypes = ({ typeState, onSubmit }) => {
//   const [selectedType, setSelectedType] = typeState;

//   return (
//     <View>
//       {typesData.map((type) => (
//         <TruckRow
//           type={type}
//           key={type.id}
//           isSelected={type.type === selectedType}
//           onPress={() => setSelectedType(type.type)}
//         />
//       ))}

//       <Pressable onPress={onSubmit} style={{
//         backgroundColor: 'red',
//         borderRadius:20,
//         padding: 10,
//         margin: 10,
//         alignItems: 'center',
//         borderWidth:1,
//       }}>
//         <Text style={{color: 'white', fontWeight: 'bold'}}>
//           Book Now
//         </Text>
//       </Pressable>
//     </View>
//   );
// };

// export default TruckTypes;

import React from "react";
import { View, Text, Pressable,StyleSheet } from "react-native";
import TruckRow from './TruckRow';

import typesData from '../../data/type';

const TruckTypes = ({ typeState, onSubmit }) => {
  const [selectedType, setSelectedType] = typeState;

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Choose a Vehicle</Text>
      {typesData.map((type) => (
        <TruckRow
          type={type}
          key={type.id}
          isSelected={type.type === selectedType}
          onPress={() => setSelectedType(type.type)}
        />
      ))}

      <Pressable onPress={onSubmit} style={{
       backgroundColor: "#EE272E",
       borderColor: "#EE272E",
       borderRadius: 40,
       padding: 20,
       margin: 10,  // Check this margin
       alignItems: 'center',
       borderWidth: 1,
      }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Book Now
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10
    // padding:8,
  },
  map: {
    flex: 1,
  },
  bottomSheetContent: {
    flex: 1,
  },
  text1: {
    color: "#EE272E",
    fontWeight: "600",
    fontSize: 20,
    paddingHorizontal: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
  BookNow: {
    backgroundColor: "#EE272E",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    margin: 8,
    width: 340,
    borderColor:"#EE272E",
  },
  BookNowText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});


export default TruckTypes;

