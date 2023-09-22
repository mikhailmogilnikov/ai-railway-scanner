import Lottie from 'lottie-react';
import animationData from '../resources/lottie/map animation.json'

function MapAnimation() {
  return (
    <Lottie
      animationData={animationData}
      autoPlay
      loop={true}
      style={{ height: 224, width: 224 }}
      speed={2}
    />
  );
}

export default MapAnimation;
