"use client"
import { ReactLenis } from '@studio-freight/react-lenis'
import { ReactNode, ComponentProps } from 'react'

// ReactLenis-in daxili propslarını götürürük və children əlavə edirik
type LenisProps = ComponentProps<typeof ReactLenis> & {
  children: ReactNode
}

const SmoothScroll = ({ children }: LenisProps) => {
  return (
    <ReactLenis 
      root 
      options={{ 
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
    
        wheelMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll;