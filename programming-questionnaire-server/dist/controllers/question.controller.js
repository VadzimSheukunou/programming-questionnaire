"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _dbModels = _interopRequireDefault(require("../db-models"));

/**
 * Question CRUD operations controller
 */
var QuestionController =
/*#__PURE__*/
function () {
  function QuestionController() {
    (0, _classCallCheck2["default"])(this, QuestionController);
  }

  (0, _createClass2["default"])(QuestionController, null, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res.status(501).json('not implemented');

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                res.status(501).json('not implemented');

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                res.status(501).json('not implemented');

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function _delete(_x5, _x6) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
    /**
     * Get a specific Question by ID
     * 
     * @param {Object} req 
     * @param {Object} res 
     */

  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var questionId, question;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                questionId = req.params.questionId;
                _context4.prev = 1;
                _context4.next = 4;
                return _dbModels["default"].Question.findByPk("".concat(questionId));

              case 4:
                question = _context4.sent;
                res.status(200).json(question);
                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](1);
                res.status(400).send({
                  message: "".concat(_context4.t0.message)
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 8]]);
      }));

      function get(_x7, _x8) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
    /**
     * Get all Questions and relevant Answers for a specific Questionnaire
     * 
     * @param {Object} req 
     * @param {Object} res 
     */

  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var questId, items;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                questId = req.params.questId;
                _context5.prev = 1;
                _context5.next = 4;
                return _dbModels["default"].Question.findAll({
                  where: {
                    questionnaireId: questId
                  },
                  include: [{
                    model: _dbModels["default"].Answer,
                    as: 'answers'
                  }]
                });

              case 4:
                items = _context5.sent;
                res.status(200).json(items);
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](1);
                res.status(400).json({
                  message: "".concat(_context5.t0.message)
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 8]]);
      }));

      function getAll(_x9, _x10) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }]);
  return QuestionController;
}();

exports["default"] = QuestionController;
//# sourceMappingURL=question.controller.js.map