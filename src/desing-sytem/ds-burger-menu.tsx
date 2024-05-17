'use strict'

import { emptyDsBurgerMenuProps } from '@/desing-sytem/models/ds-burger-menu.model'

export default function DsBurgerMenu(props = emptyDsBurgerMenuProps()) {
  return <div className={props.className}>{props.children}</div>
}
