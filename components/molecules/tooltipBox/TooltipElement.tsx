import { TooltipProps, Tooltip } from '@chakra-ui/react'
import { FC } from 'react'

interface ChakraTooltipProps extends TooltipProps {
  tooltipText?: string
  areaLabel?: string
  type?: 'question' | 'warning'
  size?: 'sm' | 'md'
  label?: string
  isOpen?: boolean
}

export const ChakraTooltip: FC<ChakraTooltipProps> = (props: ChakraTooltipProps) => {
  const { tooltipText, areaLabel, isOpen, children, ...rest } = props

  return (
    <Tooltip
      label={tooltipText}
      aria-label={areaLabel}
      bg="gray.600"
      placement="top"
      arrowSize={7}
      hasArrow
      isOpen={isOpen}
      {...rest}>
      {children}
    </Tooltip>
  )
}
