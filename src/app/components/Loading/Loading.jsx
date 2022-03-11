import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import squaresLoader from '../../assets/loaders/squares-loader.json';
import trailLoader from '../../assets/loaders/trail-loader.json';

const LOADERS = {
  squares: squaresLoader,
  trail: trailLoader,
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
