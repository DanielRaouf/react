import React from "react";
import { User } from "../models";
import { primary } from "../utils/colors";

interface IProps {
  user: User;
}

const UserCard: React.FunctionComponent<IProps> = ({ user }) => {
  const { id, name } = user;
  return (
    <div key={`${id}`} style={styles.container}>
      <h1>{name}</h1>
    </div>
  );
};

const styles = {
  container: {
    height: 50,
    backgroundColor: primary,
    padding: 10,
    marginTop: 10,
  },
};

export default UserCard;
