import React from 'react';
import './Card.css';

export const Card = ({
  children,
  hoverable = false,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`card ${hoverable ? 'card-hoverable' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardImage = ({ src, alt, className = '', ...props }) => {
  return (
    <div className={`card-image ${className}`}>
      <img src={src} alt={alt} {...props} />
    </div>
  );
};

export const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`card-content ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ title, subtitle, className = '', ...props }) => {
  return (
    <div className={`card-header ${className}`} {...props}>
      {title && <h3 className="card-title">{title}</h3>}
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
    </div>
  );
};

export const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div className={`card-footer ${className}`} {...props}>
      {children}
    </div>
  );
};
