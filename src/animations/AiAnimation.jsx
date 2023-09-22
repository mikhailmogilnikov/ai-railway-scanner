import Lottie from 'lottie-react';
import animationData from '../resources/lottie/ai.json';
import { useRef } from 'react';

function AiAnimation() {
  const lottieRef = useRef();

  return (
    <Lottie
      ref={lottieRef}
      animationData={animationData}
      autoPlay
      loop={true}
      speed={2}
      style={{ height: 224, width: 224 }}
    />
  );
}

export default AiAnimation;