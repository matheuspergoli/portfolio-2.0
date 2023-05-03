import React from 'react'
import Link from 'next/link'
import * as Icon from '../../assets/icons'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  coverImage: string
}

export const BlogCard = (props: BlogCardProps) => {
  return (
    <div className='flex h-full w-full flex-col justify-between gap-5 rounded-md border border-black-medium bg-gradient-to-br from-black-dark to-black-medium p-5 text-gray-light'>
      <h1 className='text-2xl font-bold'>{props.title}</h1>
      <p className='text-lg'>{props.excerpt}</p>
      <img
        draggable='false'
        className='block h-60 cursor-pointer rounded-md'
        src={props.coverImage}
        alt='Project Image'
      />
      <div className='flex items-center justify-between gap-5'>
        <Link
          href={`/post/${props.slug}`}
          className='flex grow items-center justify-center gap-3 rounded-md border border-black-medium bg-black-dark/70 px-3 py-2 transition hover:bg-zinc-800/50'>
          <Icon.Deploy className='text-2xl text-gray-light' /> Ver Artigo
        </Link>
      </div>
    </div>
  )
}
