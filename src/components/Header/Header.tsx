import { FC } from "react";

interface HeaderProps {
  title: string;
}

const Header:FC<HeaderProps> = (props) => {
  return (
    <div>
      <span>{props.title}</span>
    </div>
  );
};

export default Header;
