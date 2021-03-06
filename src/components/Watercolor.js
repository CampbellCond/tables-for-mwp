import React from 'react'
import styled from 'styled-components'
import Line from './Line'
import AddLine from './AddLine'

const Titles = styled.h2`
  margin: 10px;
  padding: 10px;
`

const WatercolorWrap = styled.div``

class Watercolor extends React.Component {
  state = {
    lines: [{}]
  }

  handleSetValue = (val, index) => {
    const lines = [...this.state.lines]
    const line = {...lines[index], ...val}
    lines[index] = line
    this.setState({ lines }, () => console.log(this.state.lines))
  }

  handleAddLine = () => {
    this.setState({ lines: [...this.state.lines, {}] })
  }

  handleDelete = index => {
    const lines = this.state.lines
    lines.splice(index, 1)
    this.setState(({ lines }), () => console.log(this.state.lines))
  }

  render() {
    return (
      <WatercolorWrap>
        <h1>Watercolor</h1>
        <AddLine onAddLine={this.handleAddLine} />
        <Titles>Item Name | Current Count | Total Needed | Deadline</Titles>
        {this.state.lines && this.state.lines.map((line, index) => <Line data={line} key={index} onSetValue={val => this.handleSetValue(val, index)} onDelete={() => this.handleDelete(index)} />)}
      </WatercolorWrap>
    )
  }
}

export default Watercolor
