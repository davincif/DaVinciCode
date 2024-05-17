import { ReactNode } from 'react'

export interface DsPropsModel {
  /**
   * if the current component is currently loading
   * (therefore some other UI is going to appear)
   * */
  loading?: boolean

  children?: ReactNode
  className?: string
}

export function emptyDsProps(): DsPropsModel {
  return {
    className: '',
  }
}
