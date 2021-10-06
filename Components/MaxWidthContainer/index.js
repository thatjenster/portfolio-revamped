import { _MaxWidthContainer } from './styles'

export default function MaxWidthContainer({ children, className }) {
  return (
    <_MaxWidthContainer>
      {children}
    </_MaxWidthContainer>
  )
}
