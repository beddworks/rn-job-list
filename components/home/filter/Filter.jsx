import { View, Text, Switch } from "react-native";
import { useState } from "react";
import styles from "./filter.style";
import { COLORS } from "../../../constants/theme";
import SelectFilter from "./SelectFilter";


const Filter = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.filterHead}>
        <Text style={styles.filterHeadText}>Filter</Text>
        <Switch
          trackColor={{ false: "#767577", true: COLORS.primary }}
          thumbColor={isEnabled ? COLORS.tertiary : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }], height: 30 }}
        />
      </View>
      <SelectFilter />
    </View>
  );
};

export default Filter;
