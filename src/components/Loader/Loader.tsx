import { ActivityIndicator } from "react-native";

const Loader = ({ color, size, addons, styles: customStyle }: LoaderProps) => {
  return (
    <ActivityIndicator
      style={customStyle}
      size={size}
      color={color}
      {...addons}
    />
  );
};

export default Loader;
