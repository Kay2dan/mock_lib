"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react.default.createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    className: "table-primary"
  }, /*#__PURE__*/_react.default.createElement("th", {
    scope: "col"
  }, "#"), /*#__PURE__*/_react.default.createElement("th", {
    scope: "col"
  }, "First"), /*#__PURE__*/_react.default.createElement("th", {
    scope: "col"
  }, "Last"), /*#__PURE__*/_react.default.createElement("th", {
    scope: "col"
  }, "Handle"))), /*#__PURE__*/_react.default.createElement("tbody", null, data.map(function (r, i) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("th", {
      scope: "row"
    }, i), /*#__PURE__*/_react.default.createElement("td", null, r.first), /*#__PURE__*/_react.default.createElement("td", null, r.last), /*#__PURE__*/_react.default.createElement("td", null, r.handle));
  })));
};

var _default = Table;
exports.default = _default;