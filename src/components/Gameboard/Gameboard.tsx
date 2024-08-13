import './Gameboard.css'
import { ReactNode } from 'react'

interface GameboardProps {
  children?: ReactNode;
}

export const Gameboard = ({ children }: GameboardProps) => {
  const boardStyle = {
    width: '500px',
    height: '500px',
    backgroundColor: 'black',
    border: '1px solid white',
    margin: '20px',
    padding: '20px'
  };

  return <div style={boardStyle}>{children}</div>;
};