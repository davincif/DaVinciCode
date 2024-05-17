import {
  DsContainerProps,
  emptyDsContainerProps,
} from '@/desing-sytem/models/ds-container.model'

export default function DsContainer(props: DsContainerProps) {
  if (!props) {
    props = emptyDsContainerProps()
  }

  return <div className={'m-4'}>{props.children}</div>
}
