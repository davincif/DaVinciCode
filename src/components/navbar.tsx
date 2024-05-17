import React from 'react'

import DsBurgerMenu from '@/desing-sytem/ds-burger-menu'
import DsButton from '@/desing-sytem/ds-button'
import DsNavbar from '@/desing-sytem/ds-navbar'

export default function Navbar() {
  return (
    <DsNavbar fixed={true} className={'flex justify-between'}>
      <div>
        <p>Leonardo Da Vinci</p>
      </div>
      <DsBurgerMenu>
        {/*TODO: SEARCH HOW TO DETECED SCREEN SIZE GLOBALLY*/}
        <DsButton>My History</DsButton>
        <DsButton>Contact</DsButton>
      </DsBurgerMenu>
      {/*<div className={'flex justify-end gap-3'}>*/}
      {/*  <DsButton>My History</DsButton>*/}
      {/*  <DsButton>Contact</DsButton>*/}
      {/*</div>*/}
    </DsNavbar>
  )
}
