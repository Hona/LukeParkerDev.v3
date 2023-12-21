import Image from './Image'
import Link from './Link'
import React from 'react'

const Card = ({
  title,
  description,
  imgSrc = '',
  href = '',
  linkText = '',
  padding = true,
  titleClass = '',
  showBorder = true,
  className = ''
}) => (
  <div className={`hona-card md:max-w-[544px] ${padding ? 'p-4' : 'p-0'} w-full ${className}`}>
    <div
      className={`${imgSrc ? 'h-full' : ''} overflow-hidden rounded-md ${
        showBorder ? 'border-2 border-gray-200 border-opacity-60 dark:border-surface-accent' : ''
      } dark:bg-surface`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className={`mb-3 text-2xl font-bold leading-8 tracking-tight ${titleClass}`}>
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
          {description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            {linkText || 'Learn more'} &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
