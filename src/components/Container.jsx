import clsx from 'clsx'

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx('mx-auto px-4 sm:px-0 lg:px-0', className)}
      {...props}
    />
  )
}
