import React from 'react';
import doctiplayLogo from '../src/assets/logo-doctiplay.png';

interface LogoProps {
  className?: string;
  showPulse?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  return (
    <img
      src={doctiplayLogo}
      alt="Doctiplay"
      className={`block object-contain ${className}`}
      draggable={false}
    />
  );
};

export default Logo;