import React from 'react'
import './styles.scss';

interface IProps {
  symbol: React.ReactNode;
  color?: string;
};
const Icon = ({ color, symbol }: IProps) => {
  return <span className={`icon`} style={{color: color}}>{symbol}</span>;
};

export default Icon;
