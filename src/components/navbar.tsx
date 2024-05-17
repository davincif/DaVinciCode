import React from 'react'

import DsButton from '@/desing-sytem/ds-button'
import DsNavbar from '@/desing-sytem/ds-navbar'

export default function Navbar() {
  return (
    <DsNavbar fixed={true}>
      <DsButton>btn1</DsButton>
      <DsButton>btn2</DsButton>
      <DsButton>btn4</DsButton>
    </DsNavbar>
  )
}
