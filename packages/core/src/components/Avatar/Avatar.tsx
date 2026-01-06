import {
  useState,
  Children,
  cloneElement,
  isValidElement,
  type ImgHTMLAttributes,
  type ReactNode,
  type ReactElement,
  type HTMLAttributes,
} from 'react'
import clsx from 'clsx'
import {
  avatar,
  sizeStyles,
  variantStyles,
  image,
  fallbackText,
  statusBadge,
  statusOnline,
  statusOffline,
  statusBusy,
  statusAway,
  avatarGroup,
  spacingStyles,
  groupAvatar,
  excessAvatar,
} from './Avatar.css'

export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string
  alt: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'circular' | 'rounded' | 'square'
  status?: 'online' | 'offline' | 'busy' | 'away'
  children?: ReactNode
  className?: string
  onError?: () => void
}

// fallback 텍스트 생성 함수
const getInitials = (name: string): string => {
  if (!name || name.trim() === '') return '?'

  const trimmedName = name.trim()
  // 공백을 기준으로 단어 분리 (공백 자체는 제거)
  const words = trimmedName.split(/\s+/).filter((word) => word.length > 0)

  if (words.length >= 2) {
    // 두 단어 이상: 첫 두 단어의 첫 글자
    return (words[0][0] + words[1][0]).toUpperCase()
  } else {
    // 한 단어: 첫 글자
    return words[0][0].toUpperCase()
  }
}

export const Avatar = ({
  src,
  alt,
  size = 'md',
  variant = 'circular',
  status,
  children,
  className,
  onError,
  ...props
}: AvatarProps) => {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
    onError?.()
  }

  const showImage = src && !imageError

  // 상태 뱃지 스타일 매핑
  const statusBadgeClass = status
    ? {
        online: statusOnline,
        offline: statusOffline,
        busy: statusBusy,
        away: statusAway,
      }[status]
    : null

  return (
    <div className={clsx(avatar, sizeStyles[size], variantStyles[variant], className)}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className={image}
          onError={handleImageError}
          {...props}
        />
      ) : (
        <div role="img" aria-label={alt} className={fallbackText}>
          {children || getInitials(alt)}
        </div>
      )}

      {status && (
        <span className={clsx(statusBadge, statusBadgeClass)} aria-hidden="true" />
      )}
    </div>
  )
}

Avatar.displayName = 'Avatar'

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  max?: number
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  spacing?: 'sm' | 'md' | 'lg'
  className?: string
}

export const AvatarGroup = ({
  children,
  max,
  size,
  spacing = 'md',
  className,
  ...props
}: AvatarGroupProps) => {
  const childrenArray = Children.toArray(children)
  const totalCount = childrenArray.length
  const displayCount = max ? Math.min(max, totalCount) : totalCount
  const excessCount = max && totalCount > max ? totalCount - max : 0

  const displayedChildren = childrenArray.slice(0, displayCount).map((child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<AvatarProps>, {
        key: index,
        size: size || (child.props as AvatarProps).size,
        className: clsx((child.props as AvatarProps).className, groupAvatar, spacingStyles[spacing]),
      })
    }
    return child
  })

  return (
    <div className={clsx(avatarGroup, className)} {...props}>
      {displayedChildren}
      {excessCount > 0 && (
        <div
          role="img"
          aria-label={`${excessCount}명 더 보기`}
          className={clsx(avatar, sizeStyles[size || 'md'], variantStyles.circular, excessAvatar, groupAvatar, spacingStyles[spacing])}
        >
          <span className={fallbackText}>+{excessCount}</span>
        </div>
      )}
    </div>
  )
}

AvatarGroup.displayName = 'AvatarGroup'
