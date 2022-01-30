import React from 'react'
import './styles.scss';

type IconProps = {
  symbol: React.ReactNode;
};
const Icon = (props: IconProps) => {
  return <span className="icon">{props.symbol}</span>;
};

export default Icon
