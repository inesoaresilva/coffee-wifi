import { Icon } from '@/types/icon'

const ExternalLinkIcon = ({ size = '12', color = '#583c33' }: Icon) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_234_2)">
      <path
        d="M4.00004 4V5.33333H9.72671L3.33337 11.7267L4.27337 12.6667L10.6667 6.27333V12H12V4H4.00004Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_234_2">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default ExternalLinkIcon
