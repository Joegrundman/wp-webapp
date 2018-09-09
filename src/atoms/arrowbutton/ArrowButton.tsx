import * as React from 'react';
import locals from './ArrowButton.css';

interface IArrowButtonProps {
  direction?: string
  action: () => any
}

const ArrowButton: React.SFC<IArrowButtonProps> = ({action, direction = 'left'}) => (
  <button
    className={locals.button}
    onClick={action}>
    <div className={locals.text}>
      {direction === 'left' ? '<' : '>'}
    </div>
  </button>
)

export default ArrowButton