import React from 'react'
import styled from 'styled-components'

const LineWrap = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`

const LineInput = styled.input.attrs({ type: 'text' })``

const Line = ({ data, onSetValue, onDelete, handleSetValue, onUpdate }) => (
  <LineWrap>
    <LineInput name="Item" type="text" value={data.item} onChange={e => onSetValue({ item: e.target.value })} autoFocus />
    <LineInput name="Count" type="text" value={data.count} onChange={e => onSetValue({ count: e.target.value })} />
    <LineInput name="Total" type="text" value={data.total} onChange={e => onSetValue({ total: e.target.value })} />
    <LineInput name="Deadline" type="text" value={data.deadline} onChange={e => onSetValue({ deadline: e.target.value })} />
    <button onClick={onDelete}>Delete</button>
  </LineWrap>
)

export default Line
