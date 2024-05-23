'use strict'

import { stdOrdinaryFont } from '@/app/globals.font'
import { emptyDsButtonProps } from '@/desing-sytem/models/ds-button.model'

export default function DsButton(props = emptyDsButtonProps()) {
  return (
    <button
      {...props}
      className={`${stdOrdinaryFont.className} ${props.className}`}
    >
      {props.children}
    </button>
  )
}
