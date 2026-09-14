import React from 'react';

interface RavenIconProps {
  className?: string;
  variant?: 'blue' | 'emerald' | 'amber' | 'original';
}

export const RavenIcon: React.FC<RavenIconProps> = ({ 
  className = "w-7 h-7",
  variant = 'blue'
}) => {
  const getLogoSrc = () => {
    const base = import.meta.env.BASE_URL || '/';
    switch (variant) {
      case 'emerald':
        return `${base}logo-emerald.png`;
      case 'amber':
        return `${base}logo-amber.png`;
      case 'original':
        return `${base}logo.png`;
      case 'blue':
      default:
        return `${base}logo-blue.png`;
    }
  };

  return (
    <img
      src={getLogoSrc()}
      alt="Slater Smart Solutions Logo"
      className={`${className} object-contain select-none drop-shadow-[0_0_14px_rgba(59,130,246,0.45)]`}
      loading="eager"
    />
  );
};
