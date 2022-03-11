import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import squares from '../../assets/loaders/squares-loader.json';
import trail from '../../assets/loaders/trail-loader.json';
import car from '../../assets/loaders/car-loader.json';

const LOADERS = {
  squares,
  trail,
  car,
};

function Loading({ type }) {
  const loader = LOADERS[type];
  return (
    <Player
      autoplay
      loop
      src={loader}
      style={{ height: '300px', width: '300px' }}
    />
  );
}

export default Loading;
