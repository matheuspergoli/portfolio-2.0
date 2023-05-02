import React from 'react'
import { AnimationCursorContext } from '../../context/AnimationCursorContext'

const HoverableWithEvents = (props: { children: React.ReactElement }) => {
  const child = React.Children.only(props.children)

  return React.cloneElement(child)
}

export const Hoverable = (props: { children: React.ReactElement }) => {
  const { onMouseEnter, onMouseLeave } = React.useContext(AnimationCursorContext)

  return (
    <HoverableWithEvents>
      {React.cloneElement(React.Children.only(props.children), {
        onMouseEnter,
        onMouseLeave
      })}
    </HoverableWithEvents>
  )
}
