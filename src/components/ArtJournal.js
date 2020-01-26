import React from 'react'
import styled from 'styled-components'
import Line from './Line'
import AddLine from './AddLine'

const Titles = styled.h2`
  margin: 10px;
  padding: 10px;
`

const JournalWrap = styled.div``

class Journal extends React.Component {
  state = {
    lines: [{}]
  }

  handleAddLine = () => {
    this.setState({ lines: [...this.state.lines, {}] })
  }

  handleDelete = index => {
    const lines = this.state.lines
    lines.splice(index, 1)
    this.setState({ lines })
  }

  render() {
    return (
      <JournalWrap>
        <h1>Art Journal</h1>
        <AddLine onAddLine={this.handleAddLine} />
        <Titles>Item Name | Current Count | Total Needed | Deadline</Titles>
        {this.state.lines && this.state.lines.map((line, index) => <Line onDelete={() => this.handleDelete(index)} />)}
      </JournalWrap>
    )
  }
}

export default Journal
