import React from 'react';
import locals from './Loader.css';

export interface ILoaderProps {
  active?: boolean
}

const Loader = ({ active }: ILoaderProps): JSX.Element => (
  <div>
    { active &&
      <div className={locals.loaderSpinner}>
        <h3>Loading...</h3>
      </div>
    }
  </div>
  
);

export default Loader;
