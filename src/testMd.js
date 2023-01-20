var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import ReactMarkdown from 'https://cdn.skypack.dev/react-markdown';

var MdBox = function (_React$Component) {
  _inherits(MdBox, _React$Component);

  function MdBox(props) {
    _classCallCheck(this, MdBox);

    var _this = _possibleConstructorReturn(this, (MdBox.__proto__ || Object.getPrototypeOf(MdBox)).call(this, props));

    console.log(_this.props);
    _this.state = { terms: null };
    return _this;
  }

  _createClass(MdBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var mrk = new Request('./../projects/' + this.props.mdFile + '/' + this.props.mdFile + '.md');

      fetch(mrk).then(function (response) {
        return response.text();
      }).then(function (text) {
        _this2.setState({ terms: text });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { 'class': 'content' },
        React.createElement(ReactMarkdown, { children: this.state.terms })
      );
    }
  }]);

  return MdBox;
}(React.Component);

export default MdBox;