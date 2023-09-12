import React from 'react'

export const useOutsideAlerter = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: any
) => {
  React.useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [callback, ref])
}
