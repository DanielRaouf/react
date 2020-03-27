import React from "react";
import { secondary } from "../utils/colors";
interface IProps {
  children: any;
}
const Body: React.FunctionComponent<IProps> = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};

const styles = {
  container: {
    height: "100%",
    backgroundColor: secondary,
    padding: 10,
  },
};

export default Body;
