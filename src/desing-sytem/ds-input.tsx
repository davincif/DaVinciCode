'use strict'

import { stdOrdinaryFont } from '@/app/globals.font'
import { emptyDsInputModel } from '@/desing-sytem/models/ds-input.model'

export default function DsInput(props = emptyDsInputModel()) {
  return (
    <input
      {...props}
      className={`${stdOrdinaryFont.className} ${props.className}`}
    />
  )
}
