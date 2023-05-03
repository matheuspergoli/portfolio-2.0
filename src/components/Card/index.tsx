import React from 'react'
import * as Icon from '../../assets/icons'

interface CardProps {
  title: string
  link: string
  repoUrl: string
  image: string
}

export const Card = (props: CardProps) => {
  return (
    <div className='relative flex w-full flex-col gap-5 rounded-md border border-black-medium bg-gradient-to-br from-black-dark to-black-medium p-5 text-gray-light'>
      <h1 className='text-2xl font-bold'>{props.title}</h1>
      <button>
        <img
          draggable='false'
          className='block cursor-pointer rounded-md'
          src='https://picsum.photos/seed/1/500/300'
          alt='Project Image'
        />
      </button>
      <div className='flex items-center justify-between gap-5'>
        <a
          target='_blank'
          href={props.repoUrl}
          className='flex grow items-center justify-center gap-3 rounded-md border border-black-medium bg-black-dark/70 px-3 py-2 transition hover:bg-zinc-800/50'>
          <Icon.Github className='text-2xl' /> Github
        </a>
        <a
          target='_blank'
          href={props.link}
          className='flex grow items-center justify-center gap-3 rounded-md border border-black-medium bg-black-dark/70 px-3 py-2 transition hover:bg-zinc-800/50'>
          <Icon.Deploy className='text-2xl text-gray-light' /> Site
        </a>
      </div>
    </div>
  )
}
