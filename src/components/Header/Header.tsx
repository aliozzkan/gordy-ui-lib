import {FC, useState} from "react";

export interface HeaderProps {
  username: string;
}

const Header:FC<HeaderProps> = (props) => {
  const [UserName, setUserName] = useState(props.username)
  return (
    <>
      <div className="mb-2">Hosgeldiniz, {UserName}</div>
      <input placeholder="giriniz" defaultValue={UserName} className="border px-3 py-2" type="text" onChange={e => {
        return  setUserName(e.target.value)}
      } />
    </>
  );
};

export default Header;
