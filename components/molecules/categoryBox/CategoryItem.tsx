import React from 'react'
import {
  Box,
  HTMLChakraProps,
  omitThemingProps,
  ThemingProps,
  useMultiStyleConfig
} from '@chakra-ui/react'
import { ICtgItem } from './types'
import { cx } from '@chakra-ui/utils'

export interface CategoryItemProps extends HTMLChakraProps<'div'>, ThemingProps<'Category'> {
  data?: ICtgItem[]
  callBack?: any
  active?: number
}

export const CategoryItem = React.memo((props: CategoryItemProps) => {
  const styles = useMultiStyleConfig('Category', props)
  const ownProps = omitThemingProps(props)
  const { data, callBack, className, active } = ownProps

  const _className = cx('chakra-category-active', className)

  return (
    <Box __css={styles.list}>
      {data.map((child, i) => (
        <Box
          key={child.key}
          data-category-index={i}
          __css={styles.item}
          className={!!active && i === Number(active) ? _className : null}
          onClick={callBack}>
          {child.label}
        </Box>
      ))}
    </Box>
  )
})

export default CategoryItem
