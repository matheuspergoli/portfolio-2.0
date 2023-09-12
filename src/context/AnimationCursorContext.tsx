import React from 'react'

interface TextCursorProps {
  cursorVariant: string
  onMouseEnter: () => void
  onMouseLeave: () => void
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const AnimationCursorContext = React.createContext({} as TextCursorProps)

export const AnimationCursorProvider = (props: { children: React.ReactNode }) => {
  const [cursorVariant, setCursorVariant] = React.useState('default')

  const onMouseEnter = () => {
    setCursorVariant('text')
  }

  const onMouseLeave = () => {
    setCursorVariant('default')
  }

  return (
    <AnimationCursorContext.Provider
      value={{ cursorVariant, onMouseEnter, onMouseLeave }}>
      {props.children}
    </AnimationCursorContext.Provider>
  )
}
