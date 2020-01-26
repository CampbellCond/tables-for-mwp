import React from 'react'
import styled from 'styled-components'

const AddLineWrap = styled.div``

const AddLineButton = styled.button``

const AddLine = ({ onAddLine }) => (
  <AddLineWrap>
    <AddLineButton onClick={onAddLine}>Add a line!</AddLineButton>
  </AddLineWrap>
)

export default AddLine
