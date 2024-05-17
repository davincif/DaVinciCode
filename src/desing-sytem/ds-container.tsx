'use strict'

import { emptyDsContainerProps } from '@/desing-sytem/models/ds-container.model'

export default function DsContainer(props = emptyDsContainerProps()) {
  return <div className={'m-4'}>{props.children}</div>
}
