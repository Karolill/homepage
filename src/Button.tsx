import React from "react";

interface ButtonProps {
  title: string;
  iconFileName?: string;
  color: string;
  onclick: any;
}

const Button = (props: ButtonProps) => {
  return (
    <a href={props.onclick} download target="_blank" rel="noreferrer">
      <button className={props.color}>{props.title}</button>
    </a>
  );
};
export default Button;
