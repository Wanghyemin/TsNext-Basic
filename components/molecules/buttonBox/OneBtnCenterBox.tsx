import { Flex, HTMLChakraProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react'

interface ButtonBoxProps extends HTMLChakraProps<'div'> {
	children: ReactNode
	size?: string
	isFullWidth?: boolean | false
}

const OneBtnCenterBox = ({ size, children, isFullWidth, ...props }: ButtonBoxProps) => {
	return (
		<Flex
			minWidth={'100%'}
			justifyContent="center"
			sx={{
					'> button': {
					minW: size === 'xs' || size === 'sm' ? { md: 'auto' } : { md: '120px' },
					flex: isFullWidth === false ? { base: 'none', md: 'none' } : { base: '1', md: '0' }
					},
					'> button:not(:first-of-type)': { ml: '9px' }
			}}
			{...props}>
			{children}
		</Flex>
	)
}

export default OneBtnCenterBox
