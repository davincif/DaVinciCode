import { stdOrdinaryFont } from '@/app/globals.font'
import {
  DsButtonProps,
  emptyDsButtonProps,
} from '@/desing-sytem/models/ds-button.model'

export default function DsButton(props?: DsButtonProps) {
  if (!props) {
    props = emptyDsButtonProps()
  }

  return <button className={stdOrdinaryFont.className}>{props.children}</button>
}
