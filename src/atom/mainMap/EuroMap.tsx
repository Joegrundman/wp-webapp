import * as React from 'react';

import { urlMapEur } from '../../constants/ui-constants';
import MainMap from './MainMap';

const euroMap = () => (
  <MainMap url={urlMapEur} />
);

export default euroMap;
