"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(_ref) {
  var cardData = _ref.cardData;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: ""
  }, cardData.title), /*#__PURE__*/_react.default.createElement("p", {
    className: ""
  }, cardData.text), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: ""
  }, "link")));
};

var _default = Card;
exports.default = _default;