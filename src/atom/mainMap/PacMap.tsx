import * as React from 'react';

import { urlMapPac } from '../../constants/ui-constants';
import MainMap from './MainMap';

const pacMap = () => (
  <MainMap url={urlMapPac} />
);

export default pacMap;
