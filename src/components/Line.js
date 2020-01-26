import React from 'react'
import styled from 'styled-components'

const LineWrap = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`

const LineInput = styled.input.attrs({ type: 'text' })``

const Line = ({ text, onDelete }) => (
  <LineWrap>
    <LineInput name="Item" type="text" value={text} autoFocus />
    <LineInput name="Count" type="text" value={text} />
    <LineInput name="Total" type="text" value={text} />
    <LineInput name="Deadline" type="text" value={text} />
    <button onClick={onDelete}>Delete</button>
  </LineWrap>
)

export default Line
