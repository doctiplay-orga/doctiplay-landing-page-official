import React from 'react';
import doctiplayLogo from '../src/assets/logo-doctiplay.png';

interface LogoProps {
  className?: string;
  showPulse?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <img
        src={doctiplayLogo}
        alt="Doctiplay"
        className="w-full h-full object-contain"
        draggable={false}
      />
    </div>
  );
};

export default Logo;