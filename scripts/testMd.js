import ReactMarkdown from 'https://cdn.skypack.dev/react-markdown';

class MdBox extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = { terms: null }
  }

  componentDidMount() {
    let mrk = new Request('./../projects/'+this.props.mdFile+'/'+this.props.mdFile+'.md');

    fetch(mrk).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  render() {
    return (
      <div class="content">
        <ReactMarkdown children={this.state.terms} />
      </div>
    )
  }
}

export default MdBox;