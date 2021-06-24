"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseTable = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Table = _interopRequireDefault(require("./Table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Component/Table",
  component: "Table"
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Table.default, args);
};

var BaseTable = Template.bind({});
exports.BaseTable = BaseTable;
BaseTable.args = {
  data: [{
    first: "Mark",
    last: "Sullivan",
    handle: "@arsw"
  }, {
    first: "Jacob",
    last: "Atchison",
    handle: "@qars"
  }, {
    first: "Steven",
    last: "Camel",
    handle: "@qqqqq"
  }, {
    first: "Ahmad",
    last: "Kimbel",
    handle: "@asaf"
  }, {
    first: "Olay",
    last: "Zens",
    handle: "@fats"
  }, {
    first: "Stacey",
    last: "Maghrib",
    handle: "@mdo"
  }, {
    first: "Jen",
    last: "Antario",
    handle: "@bird"
  }, {
    first: "Phillip",
    last: "Hawk",
    handle: "@hawk"
  }, {
    first: "Tracey",
    last: "Stone",
    handle: "@larry"
  }, {
    first: "Ayesha",
    last: "Bilal",
    handle: "@achi"
  }, {
    first: "Stone",
    last: "Maha",
    handle: "@maha"
  }, {
    first: "Killian",
    last: "Niger",
    handle: "@tarht"
  }, {
    first: "Otto",
    last: "Zonda",
    handle: "@fffw"
  }, {
    first: "Liu",
    last: "Otoshi",
    handle: "@awar"
  }, {
    first: "Zhen",
    last: "Li",
    handle: "@hjhs"
  }, {
    first: "Olaf",
    last: "Creb",
    handle: "@grag"
  }, {
    first: "Addy",
    last: "Ralf",
    handle: "@jajjja"
  }, {
    first: "Motombo",
    last: "Sea",
    handle: "@maaam"
  }]
};