import { useEffect, useRef } from 'react'
import Lottie from 'lottie-react'
import animationData from '../resources/lottie/attach animation.json'
import { useInView } from '../hooks/useInView'

function AttachAnimation() {
  const lottieRef = useRef()
  const ref = useRef()
  const isInView = useInView(ref)

  useEffect(() => {
    if (lottieRef.current) {
      if (isInView) {
        lottieRef.current.playSegments([0,67],true)
      } else {
        lottieRef.current.pause()
        lottieRef.current.goToAndStop(0, true)
      }
    }
  }, [lottieRef, isInView])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        style={{ height: 224, width: 224 }}
        loop={false}
        speed={0.7}
        segments={[0,67]}
      />
    </div>
  )
}

export default AttachAnimation
