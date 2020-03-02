import React from 'react'
import styled from 'styled-components'

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`

const AcutalInput = styled.input``

const LoginInput = ({ onSetValue }) => (
  <InputWrap>
    <AcutalInput name="PasswordInput" type="text" onChange={onSetValue} />
  </InputWrap>
)

export default LoginInput
