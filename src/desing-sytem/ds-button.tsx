'use strict'

import { stdOrdinaryFont } from '@/app/globals.font'
import { emptyDsButtonProps } from '@/desing-sytem/models/ds-button.model'

export default function DsButton(props = emptyDsButtonProps()) {
  return <button onClick={props.onClick} className={stdOrdinaryFont.className}>{props.children}</button>
}
