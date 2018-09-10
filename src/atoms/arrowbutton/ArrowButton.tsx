import * as React from 'react';
import locals from './ArrowButton.css';

export interface IArrowButtonProps {
  direction?: string,
  action: () => any
}

const ArrowButton: React.SFC<IArrowButtonProps> = ({
  action, 
  direction = 'left'
}: IArrowButtonProps): JSX.Element => (
  <button
    className={locals.button}
    onClick={action}>
    <div className={locals.text}>
      {direction === 'left' ? '<' : '>'}
    </div>
  </button>
)

export default ArrowButton