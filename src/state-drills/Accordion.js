import React from "react";

export default class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: null
    }
  }

  handleButtonClick(index) {
    this.setState({ currentIndex: index })
  }

  renderContent(index) {
    if (index === this.state.currentIndex) {
      return <p>{this.props.sections[index].content}</p>
    }
  }

  renderList() {
      return this.props.sections.map((item, index) => (
          <li key={index}>
            <button onClick={() => this.handleButtonClick(index)}>{item.title}
            </button>
            {this.renderContent(index)}
          </li>)
      )
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}