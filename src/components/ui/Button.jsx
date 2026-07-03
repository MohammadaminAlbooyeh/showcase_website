import React from 'react';
import './Button.css';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  isLoading = false,
  className = '',
  ...props
}) => {
  const buttonClass = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth && 'btn-full-width',
    disabled && 'btn-disabled',
    isLoading && 'btn-loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClass}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="btn-spinner"></span>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export const LinkButton = ({ href, target, rel, ...props }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel || (target === '_blank' ? 'noopener noreferrer' : '')}
      className={`btn ${props.className || ''}`}
      {...props}
    >
      {props.children}
    </a>
  );
};
