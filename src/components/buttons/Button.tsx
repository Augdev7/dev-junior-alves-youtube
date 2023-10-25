/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  black?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  black,
  small,
  icon: Icon
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      flex items-center justify-between gap-4 rounded-full px-1 py-[5px]  pl-4
      ${black ? 'bg-black text-white' : 'bg-violet-800'}
      `}
    >
      {label}
      {Icon && (
        <Icon
          size={28}
          className='
            
          '
        />
      )}
    </button>
  );
};

export default Button;
