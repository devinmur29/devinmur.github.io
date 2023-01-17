import ReactMarkdown from 'https://cdn.skypack.dev/react-markdown';

class Terms extends React.Component {
  constructor(props) {
    super(props)

    this.state = { terms: null }
  }

  componentWillMount() {
    let mrk = new Request('./membranas.md');

    fetch(mrk).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  render() {
    return (
      <div className="content">
        <ReactMarkdown children={this.state.terms} />
      </div>
    )
  }
}

export default Terms;