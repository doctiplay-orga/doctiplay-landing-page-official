import React from 'react';
import doctiplayLogo from '../src/assets/logo-doctiplay.png';

interface LogoProps {
  className?: string;
  /** @deprecated no longer used – the official logo is a static image */
  showPulse?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-24 h-12" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <img
        src={doctiplayLogo}
        alt="Doctiplay logo"
        className="w-full h-full object-contain"
        style={{
          filter: 'drop-shadow(0 0 8px rgba(0, 172, 205, 0.55))',
        }}
        draggable={false}
      />
    </div>
  );
};

export default Logo;