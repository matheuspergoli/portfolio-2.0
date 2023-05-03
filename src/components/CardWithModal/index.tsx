import React from 'react'
import * as Icon from '../../assets/icons'
import { useOutsideAlerter } from '../../hooks'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion as m, AnimatePresence } from 'framer-motion'

interface CardWithModalProps {
  id: string
  title: string
  subtitle: string
  stack: string[]
}

export const CardWithModal = (props: CardWithModalProps) => {
  const dialogRef = React.useRef<HTMLDialogElement | null>(null)
  const [selectedId, setSelectedId] = React.useState<null | string>(null)

  useOutsideAlerter(dialogRef, () => setSelectedId(null))

  return (
    <>
      <m.div
        className='relative flex w-full flex-col gap-5 rounded-md border border-black-medium bg-gradient-to-br from-black-dark to-black-medium p-5 text-gray-light'
        key={props.id}
        layoutId={props.id}>
        <m.button
          whileHover={{ scale: 1.1, transition: { duration: 0.3 }, rotate: 90 }}
          onClick={() => setSelectedId(props.id)}
          className='absolute right-0 top-0 p-3 text-gray-light'>
          <Icon.Expand className='text-2xl' />
        </m.button>
        <h1 className='text-2xl font-bold'>{props.title}</h1>
        <h2 className='text-xl font-semibold'>{props.subtitle}</h2>
        <button>
          <img
            draggable='false'
            onClick={() => setSelectedId(props.id)}
            className='block cursor-pointer rounded-md'
            src='https://picsum.photos/seed/1/500/300'
            alt='Project Image'
          />
        </button>
        <div className='flex items-center justify-between gap-5'>
          <button className='flex grow items-center justify-center gap-3 rounded-md border border-black-medium bg-black-dark/70 px-3 py-2 transition hover:bg-zinc-800/50'>
            <Icon.Github className='text-2xl' /> Github
          </button>
          <button className='flex grow items-center justify-center gap-3 rounded-md border border-black-medium bg-black-dark/70 px-3 py-2 transition hover:bg-zinc-800/50'>
            <Icon.Deploy className='text-2xl text-gray-light' /> Site
          </button>
        </div>
      </m.div>

      <AnimatePresence>
        {selectedId && (
          <m.div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black-dark bg-opacity-90'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <m.dialog
              ref={dialogRef}
              className='flex w-full max-w-2xl flex-col justify-center gap-5 rounded-md border border-black-medium bg-gradient-to-t from-black-dark to-black-medium p-5 text-gray-light'
              layoutId={selectedId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}>
              <h1 className='text-center text-2xl font-bold'>{props.title}</h1>

              <div className='flex items-center gap-3'>
                <Icon.Draggable className='text-2xl' />
                <p>Arraste para ver as fotos</p>
              </div>
              <Swiper grabCursor spaceBetween={30} slidesPerView={'auto'} className=''>
                <SwiperSlide>
                  <img
                    draggable='false'
                    className='mx-auto block w-full rounded-md'
                    src='https://picsum.photos/seed/1/500/300'
                    alt='Random Image'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    draggable='false'
                    className='mx-auto block w-full rounded-md'
                    src='https://picsum.photos/seed/2/500/300'
                    alt='Random Image'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    draggable='false'
                    className='mx-auto block w-full rounded-md'
                    src='https://picsum.photos/seed/3/500/300'
                    alt='Random Image'
                  />
                </SwiperSlide>
              </Swiper>

              <div className='flex flex-wrap items-center justify-center gap-5'>
                {props.stack.map((tech, index) => (
                  <span
                    key={index}
                    className='block rounded-md border border-black-medium px-3 py-2'>
                    {tech}
                  </span>
                ))}
              </div>
              <button
                className='absolute right-5 top-0 mx-auto mt-5 w-fit rounded-md p-2 text-3xl text-gray-light transition hover:bg-black-dark'
                onClick={() => setSelectedId(null)}>
                <Icon.Close />
              </button>
            </m.dialog>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}
