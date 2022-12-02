import React, { useEffect, useState } from 'react'
import { forwardRef } from '@chakra-ui/system'
import {
  HTMLChakraProps,
  ThemingProps,
  useMultiStyleConfig,
  Box,
  useControllableState
} from '@chakra-ui/react'
import { ICtgItem } from './types'
import { CategoryItem, CategorySelector } from '.'

export interface CategoryProps
  extends Omit<HTMLChakraProps<'div'>, 'onChange'>,
    ThemingProps<'Category'> {
  data?: ICtgItem[]
  callBack?: any
  value?: string | string[]
  onChange?: (value: string | string[]) => void
}

const Category = forwardRef<CategoryProps, 'div'>((props, ref) => {
  const styles = useMultiStyleConfig('Category', props)
  const { data, callBack, value: valueProp, onChange: onChangeProp, ...rest } = props

  const [dept1, setDept1] = useState<number | null>(null)
  const [dept2, setDept2] = useState<number | null>(null)
  const [dept3, setDept3] = useState<number | null>(null)

  const [activeDept1, setActiveDept1] = useState<number | null>(null)
  const [activeDept2, setActiveDept2] = useState<number | null>(null)

  const [selectedCategory, setSelectedCategory] = useState([])
  const [value, setValue] = useControllableState({
    value: valueProp,
    onChange: onChangeProp
  })

  const handleCategory1 = React.useCallback(
    (e) => {
      const categoryIndex = e.currentTarget.dataset.categoryIndex

      setActiveDept1(categoryIndex)
      setActiveDept2(null)

      setDept1(categoryIndex)
      setDept2(null)
      setDept3(null)
    },
    [setDept1, setDept2, setDept3, setActiveDept1, setActiveDept2]
  )
  const handleCategory2 = React.useCallback(
    (e) => {
      const categoryIndex = e.currentTarget.dataset.categoryIndex

      setActiveDept2(categoryIndex)

      setDept2(categoryIndex)
      setDept3(null)
    },
    [setDept2, setDept3, setActiveDept2]
  )
  const handleCategory3 = React.useCallback(
    (e) => {
      const categoryIndex = e.currentTarget.dataset.categoryIndex
      setDept3(categoryIndex)
    },
    [setDept3]
  )
  const handleRemove = React.useCallback(
    (e) => {
      const _confirm = confirm('삭제하시겠습니까?')
      if (_confirm) {
        const selectedIndex = Number(e.currentTarget.dataset.selectedIndex)
        setSelectedCategory((nextState) =>
          nextState.filter((value, i) => i !== selectedIndex && value)
        )
      }
    },
    [setSelectedCategory]
  )

  // 2depth일때
  useEffect(() => {
    if (!!dept2 && !data[dept1]?.children[dept2]?.children) {
      console.log(`${data[dept1]?.label} > ${data[dept1]?.children[dept2]?.label}`)

      setActiveDept1(null)
      setActiveDept2(null)

      setDept1(null)
      setDept2(null)
      setDept3(null)

      if(selectedCategory.length<3){
        setSelectedCategory((prevState) => [
          ...prevState,
          {
            key: [data[dept1]?.key, data[dept1]?.children[dept2]?.key],
            label: `${data[dept1]?.label} > ${data[dept1]?.children[dept2]?.label}`
          }
        ])
      }else{
        alert("카테고리는 최대 3개까지 선택 가능합니다.")
      }
    }
  }, [dept2, setSelectedCategory, setActiveDept1, setActiveDept2])

  // 3depth일때
  useEffect(() => {
    if (!!dept3) {
      console.log(
        `${data[dept1]?.label} > ${data[dept1]?.children[dept2]?.label} > ${data[dept1]?.children[dept2]?.children[dept3]?.label}`
      )

      setActiveDept1(null)
      setActiveDept2(null)

      setDept1(null)
      setDept2(null)
      setDept3(null)

      if(selectedCategory.length<3){
        return setSelectedCategory((prevState) => [
          ...prevState,
          {
            key: [
              data[dept1]?.key,
              data[dept1]?.children[dept2]?.key,
              data[dept1]?.children[dept2]?.children[dept3]?.key
            ],
            label: `${data[dept1]?.label} > ${data[dept1]?.children[dept2]?.label} > ${data[dept1]?.children[dept2]?.children[dept3]?.label}`
          }
        ])
      }else{
        alert("카테고리는 최대 3개까지 선택 가능합니다.")
      }
    }
  }, [dept3, setSelectedCategory, setActiveDept1, setActiveDept2])

  useEffect(() => {
    if (selectedCategory.length > 1) {
      const arrUnique = selectedCategory.filter((character, idx) => {
        return selectedCategory.findIndex((item) => item.label === character.label) === idx
      })
      if (selectedCategory.length > arrUnique.length) {
        alert('이미 선택한 카테고리 입니다.')
        setSelectedCategory(arrUnique)
      }
    }

    setValue(selectedCategory.map((child) => child.key))
  }, [selectedCategory])

  return (
    <Box value={value} ref={ref} __css={styles} className="chakra-category" {...rest}>
      <Box __css={styles.wrapper}>
        {data && <CategoryItem data={data} callBack={handleCategory1} active={activeDept1} />}
        {!!dept1 && data[dept1].children && (
          <CategoryItem
            data={data[dept1].children}
            callBack={handleCategory2}
            active={activeDept2}
          />
        )}
        {!!dept2 && data[dept1].children[dept2].children && (
          <CategoryItem data={data[dept1].children[dept2].children} callBack={handleCategory3} />
        )}
      </Box>
      <CategorySelector data={selectedCategory} callBack={handleRemove} />
    </Box>
  )
})

export default Category
