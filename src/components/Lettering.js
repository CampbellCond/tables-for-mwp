import React from 'react'
import styled from 'styled-components'
import Line from './Line'
import AddLine from './AddLine'

const Titles = styled.h2`
  margin: 10px;
  padding: 10px;
`

const LetteringWrap = styled.div``

class Lettering extends React.Component {
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
      <LetteringWrap>
        <h1>Lettering</h1>
        <AddLine onAddLine={this.handleAddLine} />
        <Titles>Item Name | Current Count | Total Needed | Deadline</Titles>
        {this.state.lines && this.state.lines.map((line, index) => <Line onDelete={() => this.handleDelete(index)} />)}
      </LetteringWrap>
    )
  }
}

export default Lettering
