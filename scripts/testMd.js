import ReactMarkdown from 'react-markdown';
import React from 'react';
import rehypeRaw from 'rehype-raw';

class MdBox extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = { terms: null }
  }

  componentDidMount() {
    let mrk = new Request('./'+this.props.mdFile);
    console.log(mrk)
    fetch(mrk).then((response) => response.text()).then((text) => {
      console.log(text)
      this.setState({ terms: text })
    })
  }

  render() {
    return (
      <div class="content">
        <ReactMarkdown children={this.state.terms} rehypePlugins={[rehypeRaw]}/>
      </div>
    )
  }
}

export default MdBox;