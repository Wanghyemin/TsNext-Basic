import { FC, useRef, useState } from 'react'
import { Box, Flex, HTMLChakraProps, useOutsideClick } from '@chakra-ui/react'
import { ChakraTooltip } from './TooltipElement'
import { SystemIcon } from '@/src/assets/icons'

interface TooltipBoxProps extends HTMLChakraProps<'div'> {
  tooltipText?: string
  areaLabel?: string
  type?: 'question' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  label?: string
  color?: string
}

export const Tooltip: FC<TooltipBoxProps> = (props: TooltipBoxProps) => {
  const { tooltipText, areaLabel, type, size, label, color, ...rest } = props
  const [isLabelOpen, setIsLabelOpen] = useState<boolean>(false)
  const tooltipRef = useRef()

  useOutsideClick({
    ref: tooltipRef,
    handler: () => {
      setIsLabelOpen(false)
    }
  })

  return (
    <Box ref={tooltipRef} lineHeight="100%" {...rest}>
      <ChakraTooltip
        label={tooltipText}
        area-label={areaLabel}
        isOpen={isLabelOpen}
        fontSize={size === 'sm' ? 'xs' : 'md'}>
        <Flex
          display="inline-flex"
          alignItems="center"
          onMouseEnter={() => setIsLabelOpen(true)}
          onMouseLeave={() => setIsLabelOpen(false)}
          onClick={() => setIsLabelOpen(true)}>
          <SystemIcon icon={type === 'warning' ? 'error' : 'question'} size={size} color={color} />
          {label && (
            <Box
              as="span"
              color={color}
              fontSize={size === 'sm' ? 'md' : 'xl'}
              ml={size === 'sm' ? '4px' : '5px'}
              mt="2px">
              {label}
            </Box>
          )}
        </Flex>
      </ChakraTooltip>
    </Box>
  )
}

Tooltip.defaultProps = {
  size: 'sm',
  type: 'question',
  color: 'gray.600'
}
