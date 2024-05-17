import { ReactNode } from 'react'

export interface DsBaseModel {
  /**
   * if the current component is currently loading
   * (therefore some other UI is going to appear)
   * */
  loading?: boolean

  children?: ReactNode
  className?: string
}

export function emptyDsBaseProps(): DsBaseModel {
  return {
    className: '',
  }
}
