
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Using shadcn button

interface CallToActionProps {
  to: string;
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

const CallToAction: React.FC<CallToActionProps> = ({ to, text, variant = 'primary', className = '', children }) => {
  let buttonClasses = "bg-brand-orange text-brand-black hover:bg-opacity-90";
  if (variant === 'secondary') {
    buttonClasses = "bg-brand-navy text-brand-white hover:bg-opacity-90";
  } else if (variant === 'outline') {
    buttonClasses = "bg-transparent border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-brand-black";
  }
  
  return (
    <Button asChild className={`${buttonClasses} px-8 py-3 text-lg font-semibold rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 ${className}`}>
      <Link to={to}>
        {children || text}
      </Link>
    </Button>
  );
};

export default CallToAction;
