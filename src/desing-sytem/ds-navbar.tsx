'use strict'

import { emptyDsNarbarProps } from '@/desing-sytem/models/ds-navbar.model'

export default function DsNavbar(props = emptyDsNarbarProps()) {

  return (
    <nav
      className={`${props.className} ${
        props.fixed ? 'sticky w-full' : ''
      } px-4 py-2`}
    >
      {props.children}
    </nav>
  )
}
