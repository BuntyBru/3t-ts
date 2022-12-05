import { NameTagProps } from "../../type/Salutations";

const UserName = ({ user, salutation }: NameTagProps) => {
  return (
    <p>
      {salutation} {user.name} How are you
    </p>
  );
};

export default UserName;
