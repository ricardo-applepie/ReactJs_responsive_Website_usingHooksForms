import React from 'react';
import './button.scss';

function Button({ children, buttonStyle, buttonLink, handleSubmit }) {
  return (
    <div>
      <a href={buttonLink}>
        <button onClick={handleSubmit} className={buttonStyle}>
          {children}
        </button>
      </a>
    </div>
  );
}

export default Button;
