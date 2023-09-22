import { useEffect, useState } from 'react'

export function useInView(ref, threshold = 0) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!(ref.current instanceof Element)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsInView(entry.isIntersecting)
      },
      {
        threshold,
      }
    )

    observer.observe(ref.current)

    // Cleanup
    return () => {
      if (ref.current instanceof Element) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, threshold])

  return isInView
}
