import React from 'react';

interface IProps {
  homeUrl: string;
  target?: string;
  onClick?: any;
  children: string | React.ReactNode | React.ReactNode[];
}

const LinkToHome = ({ homeUrl, target, onClick, children }: IProps) => {
  return (
    <a href={homeUrl} target={target} onClick={onClick}>
      {children}
    </a>
  );
};
export default LinkToHome;
