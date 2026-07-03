import React from 'react';
import './Container.css';

export const Container = ({ children, size = 'lg', className = '', ...props }) => {
  return (
    <div className={`container container-${size} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const Section = ({
  children,
  className = '',
  id = '',
  bgVariant = 'default',
  ...props
}) => {
  return (
    <section
      className={`section section-${bgVariant} ${className}`}
      id={id}
      {...props}
    >
      {children}
    </section>
  );
};

export const Grid = ({
  children,
  columns = 3,
  gap = 'md',
  className = '',
  ...props
}) => {
  return (
    <div
      className={`grid grid-${columns} gap-${gap} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const Badge = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <span className={`badge badge-${variant} ${className}`} {...props}>
      {children}
    </span>
  );
};
