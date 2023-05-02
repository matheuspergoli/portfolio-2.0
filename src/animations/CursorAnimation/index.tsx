import React from 'react'
import { motion as m } from 'framer-motion'
import { AnimationCursorContext } from '../../context/AnimationCursorContext'

export const CursorAnimation = () => {
  const { cursorVariant } = React.useContext(AnimationCursorContext)
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  const variants = {
    default: {
      x: mousePosition.x - 14,
      y: mousePosition.y - 14
    },
    text: {
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      width: 70,
      height: 70,
      transition: {
        duration: 0.3,
        ease: 'circOut'
      },
      backgroundColor: 'rgb(255, 255, 255)',
      mixBlendMode: 'difference'
    }
  }

  function onMouseMove(e: any) {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  React.useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <m.div
      variants={variants as any}
      animate={cursorVariant}
      style={{
        pointerEvents: 'none',
        zIndex: 9999,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        border: '2px solid #eef4f6',
        backgroundColor: 'rgba(255, 255, 255, 0)'
      }}
    />
  )
}
