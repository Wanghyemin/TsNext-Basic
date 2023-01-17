import React from 'react'
import { chakra, Flex, Text, Box, IconButton } from '@chakra-ui/react'
import { ICtgItem } from './types'
import { SystemIcon } from '@/src/assets/icons'


export interface CategoryItemProps extends ICtgItem {
  data?: ICtgItem[]
  callBack?: any
}

const CategorySelector = React.memo((props: CategoryItemProps) => {
  const { data, callBack } = props

  return (
    <Box>
      <Flex alignItems="center" fontSize="md" mt="8px" textStyle="spoqaMedium">
        <Text pr="5px" minW="100px">
          선택 카테고리:
        </Text>
        <chakra.ul display="flex" alignItems="center" flexWrap="wrap">
          {data.map((child, i) => (
            <chakra.li key={`selectedCategory-${i}`} mr="12px">
              <Flex alignItems="center">
                <Text as="span">{child.label}</Text>
                <IconButton
                  minW="22px"
                  h="20px"
                  lineHeight={1}
                  size="sm"
                  icon={<SystemIcon icon="close" size="sm" color="gray.400" />}
                  data-selected-index={i}
                  onClick={callBack}
                  aria-label="카테고리 삭제하기"
                  variant="unstyled"
                />
              </Flex>
            </chakra.li>
          ))}
        </chakra.ul>
      </Flex>
    </Box>
  )
})

export default CategorySelector
