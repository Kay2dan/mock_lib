"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultCard = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("./Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _Card.default,
  title: "Component/Card"
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Card.default, args);
};

var DefaultCard = Template.bind({});
exports.DefaultCard = DefaultCard;
DefaultCard.args = {
  cardData: {
    title: "Test title",
    text: "Test text to show in the body."
  }
};