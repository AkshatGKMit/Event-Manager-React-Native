import React from "react";
import LoaderKit from "react-native-loader-kit";

const Loader = ({ animName, color, size }: LoaderPorops) => {
	return (
		<LoaderKit
			style={{ width: size, height: size }}
			name={animName}
			color={color}
		/>
	);
};

export default Loader;
