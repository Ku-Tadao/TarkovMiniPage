// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/graphql-request/build/cjs/defaultJsonSerializer.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultJsonSerializer = void 0;
exports.defaultJsonSerializer = JSON;

},{}],"../node_modules/graphql-request/build/cjs/helpers.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadersInstanceToPlainObject = exports.uppercase = void 0;
const uppercase = (str) => str.toUpperCase();
exports.uppercase = uppercase;
/**
 * Convert Headers instance into regular object
 */
const HeadersInstanceToPlainObject = (headers) => {
    const o = {};
    headers.forEach((v, k) => {
        o[k] = v;
    });
    return o;
};
exports.HeadersInstanceToPlainObject = HeadersInstanceToPlainObject;

},{}],"../node_modules/graphql-request/build/cjs/parseArgs.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRawRequestExtendedArgs = exports.parseRequestExtendedArgs = exports.parseBatchRequestArgs = exports.parseRawRequestArgs = exports.parseRequestArgs = void 0;
const parseRequestArgs = (documentOrOptions, variables, requestHeaders) => {
    return documentOrOptions.document
        ? documentOrOptions
        : {
            document: documentOrOptions,
            variables: variables,
            requestHeaders: requestHeaders,
            signal: undefined,
        };
};
exports.parseRequestArgs = parseRequestArgs;
const parseRawRequestArgs = (queryOrOptions, variables, requestHeaders) => {
    return queryOrOptions.query
        ? queryOrOptions
        : {
            query: queryOrOptions,
            variables: variables,
            requestHeaders: requestHeaders,
            signal: undefined,
        };
};
exports.parseRawRequestArgs = parseRawRequestArgs;
const parseBatchRequestArgs = (documentsOrOptions, requestHeaders) => {
    return documentsOrOptions.documents
        ? documentsOrOptions
        : {
            documents: documentsOrOptions,
            requestHeaders: requestHeaders,
            signal: undefined,
        };
};
exports.parseBatchRequestArgs = parseBatchRequestArgs;
const parseRequestExtendedArgs = (urlOrOptions, document, ...variablesAndRequestHeaders) => {
    const [variables, requestHeaders] = variablesAndRequestHeaders;
    return urlOrOptions.document
        ? urlOrOptions
        : {
            url: urlOrOptions,
            document: document,
            variables,
            requestHeaders,
            signal: undefined,
        };
};
exports.parseRequestExtendedArgs = parseRequestExtendedArgs;
const parseRawRequestExtendedArgs = (urlOrOptions, query, ...variablesAndRequestHeaders) => {
    const [variables, requestHeaders] = variablesAndRequestHeaders;
    return urlOrOptions.query
        ? urlOrOptions
        : {
            url: urlOrOptions,
            query: query,
            variables,
            requestHeaders,
            signal: undefined,
        };
};
exports.parseRawRequestExtendedArgs = parseRawRequestExtendedArgs;

},{}],"../node_modules/graphql/version.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.versionInfo = exports.version = void 0;
// Note: This file is autogenerated using "resources/gen-version.js" script and
// automatically updated by "npm version" command.

/**
 * A string containing the version of the GraphQL.js library
 */
var version = exports.version = '16.8.1';
/**
 * An object containing the components of the GraphQL.js version string
 */

var versionInfo = exports.versionInfo = Object.freeze({
  major: 16,
  minor: 8,
  patch: 1,
  preReleaseTag: null
});
},{}],"../node_modules/graphql/jsutils/devAssert.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.devAssert = devAssert;
function devAssert(condition, message) {
  var booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message);
  }
}
},{}],"../node_modules/graphql/jsutils/isPromise.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromise = isPromise;
/**
 * Returns true if the value acts like a Promise, i.e. has a "then" function,
 * otherwise returns false.
 */
function isPromise(value) {
  return typeof (value === null || value === void 0 ? void 0 : value.then) === 'function';
}
},{}],"../node_modules/graphql/jsutils/isObjectLike.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObjectLike = isObjectLike;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return _typeof(value) == 'object' && value !== null;
}
},{}],"../node_modules/graphql/jsutils/invariant.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invariant = invariant;
function invariant(condition, message) {
  var booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message != null ? message : 'Unexpected invariant triggered.');
  }
}
},{}],"../node_modules/graphql/language/location.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocation = getLocation;
var _invariant = require("../jsutils/invariant.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var LineRegExp = /\r\n|[\n\r]/g;
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lastLineStart = 0;
  var line = 1;
  var _iterator = _createForOfIteratorHelper(source.body.matchAll(LineRegExp)),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var match = _step.value;
      typeof match.index === 'number' || (0, _invariant.invariant)(false);
      if (match.index >= position) {
        break;
      }
      lastLineStart = match.index + match[0].length;
      line += 1;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return {
    line: line,
    column: position + 1 - lastLineStart
  };
}
},{"../jsutils/invariant.mjs":"../node_modules/graphql/jsutils/invariant.mjs"}],"../node_modules/graphql/language/printLocation.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printLocation = printLocation;
exports.printSourceLocation = printSourceLocation;
var _location = require("./location.mjs");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */
function printLocation(location) {
  return printSourceLocation(location.source, (0, _location.getLocation)(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = ''.padStart(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var subLineIndex = Math.floor(columnNum / 80);
    var subLineColumnNum = columnNum % 80;
    var subLines = [];
    for (var i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }
    return locationStr + printPrefixedLines([["".concat(lineNum, " |"), subLines[0]]].concat(_toConsumableArray(subLines.slice(1, subLineIndex + 1).map(function (subLine) {
      return ['|', subLine];
    })), [['|', '^'.padStart(subLineColumnNum)], ['|', subLines[subLineIndex + 1]]]));
  }
  return locationStr + printPrefixedLines([
  // Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1, " |"), lines[lineIndex - 1]], ["".concat(lineNum, " |"), locationLine], ['|', '^'.padStart(columnNum)], ["".concat(lineNum + 1, " |"), lines[lineIndex + 1]]]);
}
function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      _ = _ref2[0],
      line = _ref2[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, _toConsumableArray(existingLines.map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
      prefix = _ref4[0];
    return prefix.length;
  })));
  return existingLines.map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      prefix = _ref6[0],
      line = _ref6[1];
    return prefix.padStart(padLen) + (line ? ' ' + line : '');
  }).join('\n');
}
},{"./location.mjs":"../node_modules/graphql/language/location.mjs"}],"../node_modules/graphql/error/GraphQLError.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLError = void 0;
exports.formatError = formatError;
exports.printError = printError;
var _isObjectLike = require("../jsutils/isObjectLike.mjs");
var _location = require("../language/location.mjs");
var _printLocation = require("../language/printLocation.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function toNormalizedOptions(args) {
  var firstArg = args[0];
  if (firstArg == null || 'kind' in firstArg || 'length' in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5]
    };
  }
  return firstArg;
}
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */
var GraphQLError = exports.GraphQLError = /*#__PURE__*/function (_Error, _Symbol$toStringTag) {
  _inherits(GraphQLError, _Error);
  var _super = _createSuper(GraphQLError);
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */

  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  function GraphQLError(message) {
    var _this;
    _classCallCheck(this, GraphQLError);
    var _this$nodes, _nodeLocations$, _ref;
    for (var _len = arguments.length, rawArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rawArgs[_key - 1] = arguments[_key];
    }
    var _toNormalizedOptions = toNormalizedOptions(rawArgs),
      nodes = _toNormalizedOptions.nodes,
      source = _toNormalizedOptions.source,
      positions = _toNormalizedOptions.positions,
      path = _toNormalizedOptions.path,
      originalError = _toNormalizedOptions.originalError,
      extensions = _toNormalizedOptions.extensions;
    _this = _super.call(this, message);
    _this.name = 'GraphQLError';
    _this.path = path !== null && path !== void 0 ? path : undefined;
    _this.originalError = originalError !== null && originalError !== void 0 ? originalError : undefined; // Compute list of blame nodes.

    _this.nodes = undefinedIfEmpty(Array.isArray(nodes) ? nodes : nodes ? [nodes] : undefined);
    var nodeLocations = undefinedIfEmpty((_this$nodes = _this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map(function (node) {
      return node.loc;
    }).filter(function (loc) {
      return loc != null;
    })); // Compute locations in the source for the given nodes/positions.

    _this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
    _this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map(function (loc) {
      return loc.start;
    });
    _this.locations = positions && source ? positions.map(function (pos) {
      return (0, _location.getLocation)(source, pos);
    }) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map(function (loc) {
      return (0, _location.getLocation)(loc.source, loc.start);
    });
    var originalExtensions = (0, _isObjectLike.isObjectLike)(originalError === null || originalError === void 0 ? void 0 : originalError.extensions) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : undefined;
    _this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : Object.create(null); // Only properties prescribed by the spec should be enumerable.
    // Keep the rest as non-enumerable.

    Object.defineProperties(_assertThisInitialized(_this), {
      message: {
        writable: true,
        enumerable: true
      },
      name: {
        enumerable: false
      },
      nodes: {
        enumerable: false
      },
      source: {
        enumerable: false
      },
      positions: {
        enumerable: false
      },
      originalError: {
        enumerable: false
      }
    }); // Include (non-enumerable) stack trace.

    /* c8 ignore start */
    // FIXME: https://github.com/graphql/graphql-js/issues/2317

    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError);
    } else {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }
    /* c8 ignore stop */
    return _this;
  }
  _createClass(GraphQLError, [{
    key: _Symbol$toStringTag,
    get: function get() {
      return 'GraphQLError';
    }
  }, {
    key: "toString",
    value: function toString() {
      var output = this.message;
      if (this.nodes) {
        var _iterator = _createForOfIteratorHelper(this.nodes),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var node = _step.value;
            if (node.loc) {
              output += '\n\n' + (0, _printLocation.printLocation)(node.loc);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else if (this.source && this.locations) {
        var _iterator2 = _createForOfIteratorHelper(this.locations),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var location = _step2.value;
            output += '\n\n' + (0, _printLocation.printSourceLocation)(this.source, location);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return output;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var formattedError = {
        message: this.message
      };
      if (this.locations != null) {
        formattedError.locations = this.locations;
      }
      if (this.path != null) {
        formattedError.path = this.path;
      }
      if (this.extensions != null && Object.keys(this.extensions).length > 0) {
        formattedError.extensions = this.extensions;
      }
      return formattedError;
    }
  }]);
  return GraphQLError;
}( /*#__PURE__*/_wrapNativeSuper(Error), Symbol.toStringTag);
function undefinedIfEmpty(array) {
  return array === undefined || array.length === 0 ? undefined : array;
}
/**
 * See: https://spec.graphql.org/draft/#sec-Errors
 */

/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 *
 * @deprecated Please use `error.toString` instead. Will be removed in v17
 */
function printError(error) {
  return error.toString();
}
/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 *
 * @deprecated Please use `error.toJSON` instead. Will be removed in v17
 */

function formatError(error) {
  return error.toJSON();
}
},{"../jsutils/isObjectLike.mjs":"../node_modules/graphql/jsutils/isObjectLike.mjs","../language/location.mjs":"../node_modules/graphql/language/location.mjs","../language/printLocation.mjs":"../node_modules/graphql/language/printLocation.mjs"}],"../node_modules/graphql/error/syntaxError.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syntaxError = syntaxError;
var _GraphQLError = require("./GraphQLError.mjs");
/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new _GraphQLError.GraphQLError("Syntax Error: ".concat(description), {
    source: source,
    positions: [position]
  });
}
},{"./GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/language/ast.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Token = exports.QueryDocumentKeys = exports.OperationTypeNode = exports.Location = void 0;
exports.isNode = isNode;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
var Location = exports.Location = /*#__PURE__*/function (_Symbol$toStringTag) {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  function Location(startToken, endToken, source) {
    _classCallCheck(this, Location);
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }
  _createClass(Location, [{
    key: _Symbol$toStringTag,
    get: function get() {
      return 'Location';
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        start: this.start,
        end: this.end
      };
    }
  }]);
  return Location;
}(Symbol.toStringTag);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */
var Token = exports.Token = /*#__PURE__*/function (_Symbol$toStringTag2) {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  function Token(kind, start, end, line, column, value) {
    _classCallCheck(this, Token);
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

    this.value = value;
    this.prev = null;
    this.next = null;
  }
  _createClass(Token, [{
    key: _Symbol$toStringTag2,
    get: function get() {
      return 'Token';
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        kind: this.kind,
        value: this.value,
        line: this.line,
        column: this.column
      };
    }
  }]);
  return Token;
}(Symbol.toStringTag);
/**
 * The list of all possible AST node types.
 */
/**
 * @internal
 */
var QueryDocumentKeys = exports.QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name',
  // Note: fragment variable definitions are deprecated and will removed in v17.0.0
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['description', 'directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
var kindValues = new Set(Object.keys(QueryDocumentKeys));
/**
 * @internal
 */

function isNode(maybeNode) {
  var maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
  return typeof maybeKind === 'string' && kindValues.has(maybeKind);
}
/** Name */

var OperationTypeNode;
(function (OperationTypeNode) {
  OperationTypeNode['QUERY'] = 'query';
  OperationTypeNode['MUTATION'] = 'mutation';
  OperationTypeNode['SUBSCRIPTION'] = 'subscription';
})(OperationTypeNode || (exports.OperationTypeNode = OperationTypeNode = {}));
},{}],"../node_modules/graphql/language/directiveLocation.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectiveLocation = void 0;
/**
 * The set of allowed directive location values.
 */
var DirectiveLocation;
(function (DirectiveLocation) {
  DirectiveLocation['QUERY'] = 'QUERY';
  DirectiveLocation['MUTATION'] = 'MUTATION';
  DirectiveLocation['SUBSCRIPTION'] = 'SUBSCRIPTION';
  DirectiveLocation['FIELD'] = 'FIELD';
  DirectiveLocation['FRAGMENT_DEFINITION'] = 'FRAGMENT_DEFINITION';
  DirectiveLocation['FRAGMENT_SPREAD'] = 'FRAGMENT_SPREAD';
  DirectiveLocation['INLINE_FRAGMENT'] = 'INLINE_FRAGMENT';
  DirectiveLocation['VARIABLE_DEFINITION'] = 'VARIABLE_DEFINITION';
  DirectiveLocation['SCHEMA'] = 'SCHEMA';
  DirectiveLocation['SCALAR'] = 'SCALAR';
  DirectiveLocation['OBJECT'] = 'OBJECT';
  DirectiveLocation['FIELD_DEFINITION'] = 'FIELD_DEFINITION';
  DirectiveLocation['ARGUMENT_DEFINITION'] = 'ARGUMENT_DEFINITION';
  DirectiveLocation['INTERFACE'] = 'INTERFACE';
  DirectiveLocation['UNION'] = 'UNION';
  DirectiveLocation['ENUM'] = 'ENUM';
  DirectiveLocation['ENUM_VALUE'] = 'ENUM_VALUE';
  DirectiveLocation['INPUT_OBJECT'] = 'INPUT_OBJECT';
  DirectiveLocation['INPUT_FIELD_DEFINITION'] = 'INPUT_FIELD_DEFINITION';
})(DirectiveLocation || (exports.DirectiveLocation = DirectiveLocation = {}));

/**
 * The enum type representing the directive location values.
 *
 * @deprecated Please use `DirectiveLocation`. Will be remove in v17.
 */
},{}],"../node_modules/graphql/language/kinds.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Kind = void 0;
/**
 * The set of allowed kind values for AST nodes.
 */
var Kind;
(function (Kind) {
  Kind['NAME'] = 'Name';
  Kind['DOCUMENT'] = 'Document';
  Kind['OPERATION_DEFINITION'] = 'OperationDefinition';
  Kind['VARIABLE_DEFINITION'] = 'VariableDefinition';
  Kind['SELECTION_SET'] = 'SelectionSet';
  Kind['FIELD'] = 'Field';
  Kind['ARGUMENT'] = 'Argument';
  Kind['FRAGMENT_SPREAD'] = 'FragmentSpread';
  Kind['INLINE_FRAGMENT'] = 'InlineFragment';
  Kind['FRAGMENT_DEFINITION'] = 'FragmentDefinition';
  Kind['VARIABLE'] = 'Variable';
  Kind['INT'] = 'IntValue';
  Kind['FLOAT'] = 'FloatValue';
  Kind['STRING'] = 'StringValue';
  Kind['BOOLEAN'] = 'BooleanValue';
  Kind['NULL'] = 'NullValue';
  Kind['ENUM'] = 'EnumValue';
  Kind['LIST'] = 'ListValue';
  Kind['OBJECT'] = 'ObjectValue';
  Kind['OBJECT_FIELD'] = 'ObjectField';
  Kind['DIRECTIVE'] = 'Directive';
  Kind['NAMED_TYPE'] = 'NamedType';
  Kind['LIST_TYPE'] = 'ListType';
  Kind['NON_NULL_TYPE'] = 'NonNullType';
  Kind['SCHEMA_DEFINITION'] = 'SchemaDefinition';
  Kind['OPERATION_TYPE_DEFINITION'] = 'OperationTypeDefinition';
  Kind['SCALAR_TYPE_DEFINITION'] = 'ScalarTypeDefinition';
  Kind['OBJECT_TYPE_DEFINITION'] = 'ObjectTypeDefinition';
  Kind['FIELD_DEFINITION'] = 'FieldDefinition';
  Kind['INPUT_VALUE_DEFINITION'] = 'InputValueDefinition';
  Kind['INTERFACE_TYPE_DEFINITION'] = 'InterfaceTypeDefinition';
  Kind['UNION_TYPE_DEFINITION'] = 'UnionTypeDefinition';
  Kind['ENUM_TYPE_DEFINITION'] = 'EnumTypeDefinition';
  Kind['ENUM_VALUE_DEFINITION'] = 'EnumValueDefinition';
  Kind['INPUT_OBJECT_TYPE_DEFINITION'] = 'InputObjectTypeDefinition';
  Kind['DIRECTIVE_DEFINITION'] = 'DirectiveDefinition';
  Kind['SCHEMA_EXTENSION'] = 'SchemaExtension';
  Kind['SCALAR_TYPE_EXTENSION'] = 'ScalarTypeExtension';
  Kind['OBJECT_TYPE_EXTENSION'] = 'ObjectTypeExtension';
  Kind['INTERFACE_TYPE_EXTENSION'] = 'InterfaceTypeExtension';
  Kind['UNION_TYPE_EXTENSION'] = 'UnionTypeExtension';
  Kind['ENUM_TYPE_EXTENSION'] = 'EnumTypeExtension';
  Kind['INPUT_OBJECT_TYPE_EXTENSION'] = 'InputObjectTypeExtension';
})(Kind || (exports.Kind = Kind = {}));

/**
 * The enum type representing the possible kind values of AST nodes.
 *
 * @deprecated Please use `Kind`. Will be remove in v17.
 */
},{}],"../node_modules/graphql/language/characterClasses.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDigit = isDigit;
exports.isLetter = isLetter;
exports.isNameContinue = isNameContinue;
exports.isNameStart = isNameStart;
exports.isWhiteSpace = isWhiteSpace;
/**
 * ```
 * WhiteSpace ::
 *   - "Horizontal Tab (U+0009)"
 *   - "Space (U+0020)"
 * ```
 * @internal
 */
function isWhiteSpace(code) {
  return code === 0x0009 || code === 0x0020;
}
/**
 * ```
 * Digit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 * ```
 * @internal
 */

function isDigit(code) {
  return code >= 0x0030 && code <= 0x0039;
}
/**
 * ```
 * Letter :: one of
 *   - `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M`
 *   - `N` `O` `P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z`
 *   - `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `l` `m`
 *   - `n` `o` `p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z`
 * ```
 * @internal
 */

function isLetter(code) {
  return code >= 0x0061 && code <= 0x007a ||
  // A-Z
  code >= 0x0041 && code <= 0x005a // a-z
  ;
}
/**
 * ```
 * NameStart ::
 *   - Letter
 *   - `_`
 * ```
 * @internal
 */

function isNameStart(code) {
  return isLetter(code) || code === 0x005f;
}
/**
 * ```
 * NameContinue ::
 *   - Letter
 *   - Digit
 *   - `_`
 * ```
 * @internal
 */

function isNameContinue(code) {
  return isLetter(code) || isDigit(code) || code === 0x005f;
}
},{}],"../node_modules/graphql/language/blockString.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dedentBlockStringLines = dedentBlockStringLines;
exports.isPrintableAsBlockString = isPrintableAsBlockString;
exports.printBlockString = printBlockString;
var _characterClasses = require("./characterClasses.mjs");
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */

function dedentBlockStringLines(lines) {
  var _firstNonEmptyLine2;
  var commonIndent = Number.MAX_SAFE_INTEGER;
  var firstNonEmptyLine = null;
  var lastNonEmptyLine = -1;
  for (var i = 0; i < lines.length; ++i) {
    var _firstNonEmptyLine;
    var line = lines[i];
    var indent = leadingWhitespace(line);
    if (indent === line.length) {
      continue; // skip empty lines
    }

    firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
    lastNonEmptyLine = i;
    if (i !== 0 && indent < commonIndent) {
      commonIndent = indent;
    }
  }
  return lines // Remove common indentation from all lines but first.
  .map(function (line, i) {
    return i === 0 ? line : line.slice(commonIndent);
  }) // Remove leading and trailing blank lines.
  .slice((_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0, lastNonEmptyLine + 1);
}
function leadingWhitespace(str) {
  var i = 0;
  while (i < str.length && (0, _characterClasses.isWhiteSpace)(str.charCodeAt(i))) {
    ++i;
  }
  return i;
}
/**
 * @internal
 */

function isPrintableAsBlockString(value) {
  if (value === '') {
    return true; // empty string is printable
  }

  var isEmptyLine = true;
  var hasIndent = false;
  var hasCommonIndent = true;
  var seenNonEmptyLine = false;
  for (var i = 0; i < value.length; ++i) {
    switch (value.codePointAt(i)) {
      case 0x0000:
      case 0x0001:
      case 0x0002:
      case 0x0003:
      case 0x0004:
      case 0x0005:
      case 0x0006:
      case 0x0007:
      case 0x0008:
      case 0x000b:
      case 0x000c:
      case 0x000e:
      case 0x000f:
        return false;
      // Has non-printable characters

      case 0x000d:
        //  \r
        return false;
      // Has \r or \r\n which will be replaced as \n

      case 10:
        //  \n
        if (isEmptyLine && !seenNonEmptyLine) {
          return false; // Has leading new line
        }

        seenNonEmptyLine = true;
        isEmptyLine = true;
        hasIndent = false;
        break;
      case 9: //   \t

      case 32:
        //  <space>
        hasIndent || (hasIndent = isEmptyLine);
        break;
      default:
        hasCommonIndent && (hasCommonIndent = hasIndent);
        isEmptyLine = false;
    }
  }
  if (isEmptyLine) {
    return false; // Has trailing empty lines
  }

  if (hasCommonIndent && seenNonEmptyLine) {
    return false; // Has internal indent
  }

  return true;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */

function printBlockString(value, options) {
  var escapedValue = value.replace(/"""/g, '\\"""'); // Expand a block string's raw value into independent lines.

  var lines = escapedValue.split(/\r\n|[\n\r]/g);
  var isSingleLine = lines.length === 1; // If common indentation is found we can fix some of those cases by adding leading new line

  var forceLeadingNewLine = lines.length > 1 && lines.slice(1).every(function (line) {
    return line.length === 0 || (0, _characterClasses.isWhiteSpace)(line.charCodeAt(0));
  }); // Trailing triple quotes just looks confusing but doesn't force trailing new line

  var hasTrailingTripleQuotes = escapedValue.endsWith('\\"""'); // Trailing quote (single or double) or slash forces trailing new line

  var hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
  var hasTrailingSlash = value.endsWith('\\');
  var forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
  var printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && (
  // add leading and trailing new lines only if it improves readability
  !isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
  var result = ''; // Format a multi-line block quote to account for leading space.

  var skipLeadingNewLine = isSingleLine && (0, _characterClasses.isWhiteSpace)(value.charCodeAt(0));
  if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
    result += '\n';
  }
  result += escapedValue;
  if (printAsMultipleLines || forceTrailingNewline) {
    result += '\n';
  }
  return '"""' + result + '"""';
}
},{"./characterClasses.mjs":"../node_modules/graphql/language/characterClasses.mjs"}],"../node_modules/graphql/language/tokenKind.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenKind = void 0;
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind;
(function (TokenKind) {
  TokenKind['SOF'] = '<SOF>';
  TokenKind['EOF'] = '<EOF>';
  TokenKind['BANG'] = '!';
  TokenKind['DOLLAR'] = '$';
  TokenKind['AMP'] = '&';
  TokenKind['PAREN_L'] = '(';
  TokenKind['PAREN_R'] = ')';
  TokenKind['SPREAD'] = '...';
  TokenKind['COLON'] = ':';
  TokenKind['EQUALS'] = '=';
  TokenKind['AT'] = '@';
  TokenKind['BRACKET_L'] = '[';
  TokenKind['BRACKET_R'] = ']';
  TokenKind['BRACE_L'] = '{';
  TokenKind['PIPE'] = '|';
  TokenKind['BRACE_R'] = '}';
  TokenKind['NAME'] = 'Name';
  TokenKind['INT'] = 'Int';
  TokenKind['FLOAT'] = 'Float';
  TokenKind['STRING'] = 'String';
  TokenKind['BLOCK_STRING'] = 'BlockString';
  TokenKind['COMMENT'] = 'Comment';
})(TokenKind || (exports.TokenKind = TokenKind = {}));

/**
 * The enum type representing the token kinds values.
 *
 * @deprecated Please use `TokenKind`. Will be remove in v17.
 */
},{}],"../node_modules/graphql/language/lexer.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lexer = void 0;
exports.isPunctuatorTokenKind = isPunctuatorTokenKind;
var _syntaxError = require("../error/syntaxError.mjs");
var _ast = require("./ast.mjs");
var _blockString = require("./blockString.mjs");
var _characterClasses = require("./characterClasses.mjs");
var _tokenKind = require("./tokenKind.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
var Lexer = exports.Lexer = /*#__PURE__*/function (_Symbol$toStringTag) {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   */

  /**
   * The character offset at which the current line begins.
   */
  function Lexer(source) {
    _classCallCheck(this, Lexer);
    var startOfFileToken = new _ast.Token(_tokenKind.TokenKind.SOF, 0, 0, 0, 0);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  _createClass(Lexer, [{
    key: _Symbol$toStringTag,
    get: function get() {
      return 'Lexer';
    }
    /**
     * Advances the token stream to the next non-ignored token.
     */
  }, {
    key: "advance",
    value: function advance() {
      this.lastToken = this.token;
      var token = this.token = this.lookahead();
      return token;
    }
    /**
     * Looks ahead and returns the next non-ignored token, but does not change
     * the state of Lexer.
     */
  }, {
    key: "lookahead",
    value: function lookahead() {
      var token = this.token;
      if (token.kind !== _tokenKind.TokenKind.EOF) {
        do {
          if (token.next) {
            token = token.next;
          } else {
            // Read the next token and form a link in the token linked-list.
            var nextToken = readNextToken(this, token.end); // @ts-expect-error next is only mutable during parsing.

            token.next = nextToken; // @ts-expect-error prev is only mutable during parsing.

            nextToken.prev = token;
            token = nextToken;
          }
        } while (token.kind === _tokenKind.TokenKind.COMMENT);
      }
      return token;
    }
  }]);
  return Lexer;
}(Symbol.toStringTag);
/**
 * @internal
 */
function isPunctuatorTokenKind(kind) {
  return kind === _tokenKind.TokenKind.BANG || kind === _tokenKind.TokenKind.DOLLAR || kind === _tokenKind.TokenKind.AMP || kind === _tokenKind.TokenKind.PAREN_L || kind === _tokenKind.TokenKind.PAREN_R || kind === _tokenKind.TokenKind.SPREAD || kind === _tokenKind.TokenKind.COLON || kind === _tokenKind.TokenKind.EQUALS || kind === _tokenKind.TokenKind.AT || kind === _tokenKind.TokenKind.BRACKET_L || kind === _tokenKind.TokenKind.BRACKET_R || kind === _tokenKind.TokenKind.BRACE_L || kind === _tokenKind.TokenKind.PIPE || kind === _tokenKind.TokenKind.BRACE_R;
}
/**
 * A Unicode scalar value is any Unicode code point except surrogate code
 * points. In other words, the inclusive ranges of values 0x0000 to 0xD7FF and
 * 0xE000 to 0x10FFFF.
 *
 * SourceCharacter ::
 *   - "Any Unicode scalar value"
 */

function isUnicodeScalarValue(code) {
  return code >= 0x0000 && code <= 0xd7ff || code >= 0xe000 && code <= 0x10ffff;
}
/**
 * The GraphQL specification defines source text as a sequence of unicode scalar
 * values (which Unicode defines to exclude surrogate code points). However
 * JavaScript defines strings as a sequence of UTF-16 code units which may
 * include surrogates. A surrogate pair is a valid source character as it
 * encodes a supplementary code point (above U+FFFF), but unpaired surrogate
 * code points are not valid source characters.
 */

function isSupplementaryCodePoint(body, location) {
  return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
}
function isLeadingSurrogate(code) {
  return code >= 0xd800 && code <= 0xdbff;
}
function isTrailingSurrogate(code) {
  return code >= 0xdc00 && code <= 0xdfff;
}
/**
 * Prints the code point (or end of file reference) at a given location in a
 * source for use in error messages.
 *
 * Printable ASCII is printed quoted, while other points are printed in Unicode
 * code point form (ie. U+1234).
 */

function printCodePointAt(lexer, location) {
  var code = lexer.source.body.codePointAt(location);
  if (code === undefined) {
    return _tokenKind.TokenKind.EOF;
  } else if (code >= 0x0020 && code <= 0x007e) {
    // Printable ASCII
    var char = String.fromCodePoint(code);
    return char === '"' ? "'\"'" : "\"".concat(char, "\"");
  } // Unicode code point

  return 'U+' + code.toString(16).toUpperCase().padStart(4, '0');
}
/**
 * Create a token with line and column location information.
 */

function createToken(lexer, kind, start, end, value) {
  var line = lexer.line;
  var col = 1 + start - lexer.lineStart;
  return new _ast.Token(kind, start, end, line, col, value);
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */

function readNextToken(lexer, start) {
  var body = lexer.source.body;
  var bodyLength = body.length;
  var position = start;
  while (position < bodyLength) {
    var code = body.charCodeAt(position); // SourceCharacter

    switch (code) {
      // Ignored ::
      //   - UnicodeBOM
      //   - WhiteSpace
      //   - LineTerminator
      //   - Comment
      //   - Comma
      //
      // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
      //
      // WhiteSpace ::
      //   - "Horizontal Tab (U+0009)"
      //   - "Space (U+0020)"
      //
      // Comma :: ,
      case 0xfeff: // <BOM>

      case 0x0009: // \t

      case 0x0020: // <space>

      case 0x002c:
        // ,
        ++position;
        continue;
      // LineTerminator ::
      //   - "New Line (U+000A)"
      //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
      //   - "Carriage Return (U+000D)" "New Line (U+000A)"

      case 0x000a:
        // \n
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      case 0x000d:
        // \r
        if (body.charCodeAt(position + 1) === 0x000a) {
          position += 2;
        } else {
          ++position;
        }
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      // Comment

      case 0x0023:
        // #
        return readComment(lexer, position);
      // Token ::
      //   - Punctuator
      //   - Name
      //   - IntValue
      //   - FloatValue
      //   - StringValue
      //
      // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }

      case 0x0021:
        // !
        return createToken(lexer, _tokenKind.TokenKind.BANG, position, position + 1);
      case 0x0024:
        // $
        return createToken(lexer, _tokenKind.TokenKind.DOLLAR, position, position + 1);
      case 0x0026:
        // &
        return createToken(lexer, _tokenKind.TokenKind.AMP, position, position + 1);
      case 0x0028:
        // (
        return createToken(lexer, _tokenKind.TokenKind.PAREN_L, position, position + 1);
      case 0x0029:
        // )
        return createToken(lexer, _tokenKind.TokenKind.PAREN_R, position, position + 1);
      case 0x002e:
        // .
        if (body.charCodeAt(position + 1) === 0x002e && body.charCodeAt(position + 2) === 0x002e) {
          return createToken(lexer, _tokenKind.TokenKind.SPREAD, position, position + 3);
        }
        break;
      case 0x003a:
        // :
        return createToken(lexer, _tokenKind.TokenKind.COLON, position, position + 1);
      case 0x003d:
        // =
        return createToken(lexer, _tokenKind.TokenKind.EQUALS, position, position + 1);
      case 0x0040:
        // @
        return createToken(lexer, _tokenKind.TokenKind.AT, position, position + 1);
      case 0x005b:
        // [
        return createToken(lexer, _tokenKind.TokenKind.BRACKET_L, position, position + 1);
      case 0x005d:
        // ]
        return createToken(lexer, _tokenKind.TokenKind.BRACKET_R, position, position + 1);
      case 0x007b:
        // {
        return createToken(lexer, _tokenKind.TokenKind.BRACE_L, position, position + 1);
      case 0x007c:
        // |
        return createToken(lexer, _tokenKind.TokenKind.PIPE, position, position + 1);
      case 0x007d:
        // }
        return createToken(lexer, _tokenKind.TokenKind.BRACE_R, position, position + 1);
      // StringValue

      case 0x0022:
        // "
        if (body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022) {
          return readBlockString(lexer, position);
        }
        return readString(lexer, position);
    } // IntValue | FloatValue (Digit | -)

    if ((0, _characterClasses.isDigit)(code) || code === 0x002d) {
      return readNumber(lexer, position, code);
    } // Name

    if ((0, _characterClasses.isNameStart)(code)) {
      return readName(lexer, position);
    }
    throw (0, _syntaxError.syntaxError)(lexer.source, position, code === 0x0027 ? 'Unexpected single quote character (\'), did you mean to use a double quote (")?' : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? "Unexpected character: ".concat(printCodePointAt(lexer, position), ".") : "Invalid character: ".concat(printCodePointAt(lexer, position), "."));
  }
  return createToken(lexer, _tokenKind.TokenKind.EOF, bodyLength, bodyLength);
}
/**
 * Reads a comment token from the source file.
 *
 * ```
 * Comment :: # CommentChar* [lookahead != CommentChar]
 *
 * CommentChar :: SourceCharacter but not LineTerminator
 * ```
 */

function readComment(lexer, start) {
  var body = lexer.source.body;
  var bodyLength = body.length;
  var position = start + 1;
  while (position < bodyLength) {
    var code = body.charCodeAt(position); // LineTerminator (\n | \r)

    if (code === 0x000a || code === 0x000d) {
      break;
    } // SourceCharacter

    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      break;
    }
  }
  return createToken(lexer, _tokenKind.TokenKind.COMMENT, start, position, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a FloatValue or an IntValue
 * depending on whether a FractionalPart or ExponentPart is encountered.
 *
 * ```
 * IntValue :: IntegerPart [lookahead != {Digit, `.`, NameStart}]
 *
 * IntegerPart ::
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit Digit*
 *
 * NegativeSign :: -
 *
 * NonZeroDigit :: Digit but not `0`
 *
 * FloatValue ::
 *   - IntegerPart FractionalPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart FractionalPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *
 * FractionalPart :: . Digit+
 *
 * ExponentPart :: ExponentIndicator Sign? Digit+
 *
 * ExponentIndicator :: one of `e` `E`
 *
 * Sign :: one of + -
 * ```
 */

function readNumber(lexer, start, firstCode) {
  var body = lexer.source.body;
  var position = start;
  var code = firstCode;
  var isFloat = false; // NegativeSign (-)

  if (code === 0x002d) {
    code = body.charCodeAt(++position);
  } // Zero (0)

  if (code === 0x0030) {
    code = body.charCodeAt(++position);
    if ((0, _characterClasses.isDigit)(code)) {
      throw (0, _syntaxError.syntaxError)(lexer.source, position, "Invalid number, unexpected digit after 0: ".concat(printCodePointAt(lexer, position), "."));
    }
  } else {
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  } // Full stop (.)

  if (code === 0x002e) {
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  } // E e

  if (code === 0x0045 || code === 0x0065) {
    isFloat = true;
    code = body.charCodeAt(++position); // + -

    if (code === 0x002b || code === 0x002d) {
      code = body.charCodeAt(++position);
    }
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or NameStart

  if (code === 0x002e || (0, _characterClasses.isNameStart)(code)) {
    throw (0, _syntaxError.syntaxError)(lexer.source, position, "Invalid number, expected digit but got: ".concat(printCodePointAt(lexer, position), "."));
  }
  return createToken(lexer, isFloat ? _tokenKind.TokenKind.FLOAT : _tokenKind.TokenKind.INT, start, position, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading one or more digits.
 */

function readDigits(lexer, start, firstCode) {
  if (!(0, _characterClasses.isDigit)(firstCode)) {
    throw (0, _syntaxError.syntaxError)(lexer.source, start, "Invalid number, expected digit but got: ".concat(printCodePointAt(lexer, start), "."));
  }
  var body = lexer.source.body;
  var position = start + 1; // +1 to skip first firstCode

  while ((0, _characterClasses.isDigit)(body.charCodeAt(position))) {
    ++position;
  }
  return position;
}
/**
 * Reads a single-quote string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `""` [lookahead != `"`]
 *   - `"` StringCharacter+ `"`
 *
 * StringCharacter ::
 *   - SourceCharacter but not `"` or `\` or LineTerminator
 *   - `\u` EscapedUnicode
 *   - `\` EscapedCharacter
 *
 * EscapedUnicode ::
 *   - `{` HexDigit+ `}`
 *   - HexDigit HexDigit HexDigit HexDigit
 *
 * EscapedCharacter :: one of `"` `\` `/` `b` `f` `n` `r` `t`
 * ```
 */

function readString(lexer, start) {
  var body = lexer.source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var chunkStart = position;
  var value = '';
  while (position < bodyLength) {
    var code = body.charCodeAt(position); // Closing Quote (")

    if (code === 0x0022) {
      value += body.slice(chunkStart, position);
      return createToken(lexer, _tokenKind.TokenKind.STRING, start, position + 1, value);
    } // Escape Sequence (\)

    if (code === 0x005c) {
      value += body.slice(chunkStart, position);
      var _escape = body.charCodeAt(position + 1) === 0x0075 // u
      ? body.charCodeAt(position + 2) === 0x007b // {
      ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
      value += _escape.value;
      position += _escape.size;
      chunkStart = position;
      continue;
    } // LineTerminator (\n | \r)

    if (code === 0x000a || code === 0x000d) {
      break;
    } // SourceCharacter

    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw (0, _syntaxError.syntaxError)(lexer.source, position, "Invalid character within String: ".concat(printCodePointAt(lexer, position), "."));
    }
  }
  throw (0, _syntaxError.syntaxError)(lexer.source, position, 'Unterminated string.');
} // The string value and lexed size of an escape sequence.

function readEscapedUnicodeVariableWidth(lexer, position) {
  var body = lexer.source.body;
  var point = 0;
  var size = 3; // Cannot be larger than 12 chars (\u{00000000}).

  while (size < 12) {
    var code = body.charCodeAt(position + size++); // Closing Brace (})

    if (code === 0x007d) {
      // Must be at least 5 chars (\u{0}) and encode a Unicode scalar value.
      if (size < 5 || !isUnicodeScalarValue(point)) {
        break;
      }
      return {
        value: String.fromCodePoint(point),
        size: size
      };
    } // Append this hex digit to the code point.

    point = point << 4 | readHexDigit(code);
    if (point < 0) {
      break;
    }
  }
  throw (0, _syntaxError.syntaxError)(lexer.source, position, "Invalid Unicode escape sequence: \"".concat(body.slice(position, position + size), "\"."));
}
function readEscapedUnicodeFixedWidth(lexer, position) {
  var body = lexer.source.body;
  var code = read16BitHexCode(body, position + 2);
  if (isUnicodeScalarValue(code)) {
    return {
      value: String.fromCodePoint(code),
      size: 6
    };
  } // GraphQL allows JSON-style surrogate pair escape sequences, but only when
  // a valid pair is formed.

  if (isLeadingSurrogate(code)) {
    // \u
    if (body.charCodeAt(position + 6) === 0x005c && body.charCodeAt(position + 7) === 0x0075) {
      var trailingCode = read16BitHexCode(body, position + 8);
      if (isTrailingSurrogate(trailingCode)) {
        // JavaScript defines strings as a sequence of UTF-16 code units and
        // encodes Unicode code points above U+FFFF using a surrogate pair of
        // code units. Since this is a surrogate pair escape sequence, just
        // include both codes into the JavaScript string value. Had JavaScript
        // not been internally based on UTF-16, then this surrogate pair would
        // be decoded to retrieve the supplementary code point.
        return {
          value: String.fromCodePoint(code, trailingCode),
          size: 12
        };
      }
    }
  }
  throw (0, _syntaxError.syntaxError)(lexer.source, position, "Invalid Unicode escape sequence: \"".concat(body.slice(position, position + 6), "\"."));
}
/**
 * Reads four hexadecimal characters and returns the positive integer that 16bit
 * hexadecimal string represents. For example, "000f" will return 15, and "dead"
 * will return 57005.
 *
 * Returns a negative number if any char was not a valid hexadecimal digit.
 */

function read16BitHexCode(body, position) {
  // readHexDigit() returns -1 on error. ORing a negative value with any other
  // value always produces a negative value.
  return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
}
/**
 * Reads a hexadecimal character and returns its positive integer value (0-15).
 *
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 if the provided character code was not a valid hexadecimal digit.
 *
 * HexDigit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 *   - `A` `B` `C` `D` `E` `F`
 *   - `a` `b` `c` `d` `e` `f`
 */

function readHexDigit(code) {
  return code >= 0x0030 && code <= 0x0039 // 0-9
  ? code - 0x0030 : code >= 0x0041 && code <= 0x0046 // A-F
  ? code - 0x0037 : code >= 0x0061 && code <= 0x0066 // a-f
  ? code - 0x0057 : -1;
}
/**
 * | Escaped Character | Code Point | Character Name               |
 * | ----------------- | ---------- | ---------------------------- |
 * | `"`               | U+0022     | double quote                 |
 * | `\`               | U+005C     | reverse solidus (back slash) |
 * | `/`               | U+002F     | solidus (forward slash)      |
 * | `b`               | U+0008     | backspace                    |
 * | `f`               | U+000C     | form feed                    |
 * | `n`               | U+000A     | line feed (new line)         |
 * | `r`               | U+000D     | carriage return              |
 * | `t`               | U+0009     | horizontal tab               |
 */

function readEscapedCharacter(lexer, position) {
  var body = lexer.source.body;
  var code = body.charCodeAt(position + 1);
  switch (code) {
    case 0x0022:
      // "
      return {
        value: "\"",
        size: 2
      };
    case 0x005c:
      // \
      return {
        value: "\\",
        size: 2
      };
    case 0x002f:
      // /
      return {
        value: "/",
        size: 2
      };
    case 0x0062:
      // b
      return {
        value: "\b",
        size: 2
      };
    case 0x0066:
      // f
      return {
        value: "\f",
        size: 2
      };
    case 0x006e:
      // n
      return {
        value: "\n",
        size: 2
      };
    case 0x0072:
      // r
      return {
        value: "\r",
        size: 2
      };
    case 0x0074:
      // t
      return {
        value: "\t",
        size: 2
      };
  }
  throw (0, _syntaxError.syntaxError)(lexer.source, position, "Invalid character escape sequence: \"".concat(body.slice(position, position + 2), "\"."));
}
/**
 * Reads a block string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `"""` BlockStringCharacter* `"""`
 *
 * BlockStringCharacter ::
 *   - SourceCharacter but not `"""` or `\"""`
 *   - `\"""`
 * ```
 */

function readBlockString(lexer, start) {
  var body = lexer.source.body;
  var bodyLength = body.length;
  var lineStart = lexer.lineStart;
  var position = start + 3;
  var chunkStart = position;
  var currentLine = '';
  var blockLines = [];
  while (position < bodyLength) {
    var code = body.charCodeAt(position); // Closing Triple-Quote (""")

    if (code === 0x0022 && body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      var token = createToken(lexer, _tokenKind.TokenKind.BLOCK_STRING, start, position + 3,
      // Return a string of the lines joined with U+000A.
      (0, _blockString.dedentBlockStringLines)(blockLines).join('\n'));
      lexer.line += blockLines.length - 1;
      lexer.lineStart = lineStart;
      return token;
    } // Escaped Triple-Quote (\""")

    if (code === 0x005c && body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022 && body.charCodeAt(position + 3) === 0x0022) {
      currentLine += body.slice(chunkStart, position);
      chunkStart = position + 1; // skip only slash

      position += 4;
      continue;
    } // LineTerminator

    if (code === 0x000a || code === 0x000d) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      if (code === 0x000d && body.charCodeAt(position + 1) === 0x000a) {
        position += 2;
      } else {
        ++position;
      }
      currentLine = '';
      chunkStart = position;
      lineStart = position;
      continue;
    } // SourceCharacter

    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw (0, _syntaxError.syntaxError)(lexer.source, position, "Invalid character within String: ".concat(printCodePointAt(lexer, position), "."));
    }
  }
  throw (0, _syntaxError.syntaxError)(lexer.source, position, 'Unterminated string.');
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * ```
 * Name ::
 *   - NameStart NameContinue* [lookahead != NameContinue]
 * ```
 */

function readName(lexer, start) {
  var body = lexer.source.body;
  var bodyLength = body.length;
  var position = start + 1;
  while (position < bodyLength) {
    var code = body.charCodeAt(position);
    if ((0, _characterClasses.isNameContinue)(code)) {
      ++position;
    } else {
      break;
    }
  }
  return createToken(lexer, _tokenKind.TokenKind.NAME, start, position, body.slice(start, position));
}
},{"../error/syntaxError.mjs":"../node_modules/graphql/error/syntaxError.mjs","./ast.mjs":"../node_modules/graphql/language/ast.mjs","./blockString.mjs":"../node_modules/graphql/language/blockString.mjs","./characterClasses.mjs":"../node_modules/graphql/language/characterClasses.mjs","./tokenKind.mjs":"../node_modules/graphql/language/tokenKind.mjs"}],"../node_modules/graphql/jsutils/inspect.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inspect = inspect;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}
function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);
    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';
    case 'object':
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}
function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return 'null';
  }
  if (previouslySeenValues.includes(value)) {
    return '[Circular]';
  }
  var seenValues = [].concat(_toConsumableArray(previouslySeenValues), [value]);
  if (isJSONable(value)) {
    var jsonValue = value.toJSON(); // check for infinite recursion

    if (jsonValue !== value) {
      return typeof jsonValue === 'string' ? jsonValue : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }
  return formatObject(value, seenValues);
}
function isJSONable(value) {
  return typeof value.toJSON === 'function';
}
function formatObject(object, seenValues) {
  var entries = Object.entries(object);
  if (entries.length === 0) {
    return '{}';
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }
  var properties = entries.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return key + ': ' + formatValue(value, seenValues);
  });
  return '{ ' + properties.join(', ') + ' }';
}
function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }
  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];
  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }
  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }
  return '[' + items.join(', ') + ']';
}
function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');
  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;
    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }
  return tag;
}
},{}],"../node_modules/graphql/jsutils/instanceOf.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instanceOf = void 0;
var _inspect = require("./inspect.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 * See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
 * See: https://webpack.js.org/guides/production/
 */

var instanceOf = exports.instanceOf = /* c8 ignore next 6 */
// FIXME: https://github.com/graphql/graphql-js/issues/2317
globalThis.process && globalThis.process.env.NODE_ENV === 'production' ? function instanceOf(value, constructor) {
  return value instanceof constructor;
} : function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }
  if (_typeof(value) === 'object' && value !== null) {
    var _value$constructor;

    // Prefer Symbol.toStringTag since it is immune to minification.
    var className = constructor.prototype[Symbol.toStringTag];
    var valueClassName =
    // We still need to support constructor's name to detect conflicts with older versions of this library.
    Symbol.toStringTag in value // @ts-expect-error TS bug see, https://github.com/microsoft/TypeScript/issues/38009
    ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;
    if (className === valueClassName) {
      var stringifiedValue = (0, _inspect.inspect)(value);
      throw new Error("Cannot use ".concat(className, " \"").concat(stringifiedValue, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
    }
  }
  return false;
};
},{"./inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs"}],"../node_modules/graphql/language/source.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Source = void 0;
exports.isSource = isSource;
var _devAssert = require("../jsutils/devAssert.mjs");
var _inspect = require("../jsutils/inspect.mjs");
var _instanceOf = require("../jsutils/instanceOf.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */
var Source = exports.Source = /*#__PURE__*/function (_Symbol$toStringTag) {
  function Source(body) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphQL request';
    var locationOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      line: 1,
      column: 1
    };
    _classCallCheck(this, Source);
    typeof body === 'string' || (0, _devAssert.devAssert)(false, "Body must be a string. Received: ".concat((0, _inspect.inspect)(body), "."));
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || (0, _devAssert.devAssert)(false, 'line in locationOffset is 1-indexed and must be positive.');
    this.locationOffset.column > 0 || (0, _devAssert.devAssert)(false, 'column in locationOffset is 1-indexed and must be positive.');
  }
  _createClass(Source, [{
    key: _Symbol$toStringTag,
    get: function get() {
      return 'Source';
    }
  }]);
  return Source;
}(Symbol.toStringTag);
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */
function isSource(source) {
  return (0, _instanceOf.instanceOf)(source, Source);
}
},{"../jsutils/devAssert.mjs":"../node_modules/graphql/jsutils/devAssert.mjs","../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/instanceOf.mjs":"../node_modules/graphql/jsutils/instanceOf.mjs"}],"../node_modules/graphql/language/parser.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parser = void 0;
exports.parse = parse;
exports.parseConstValue = parseConstValue;
exports.parseType = parseType;
exports.parseValue = parseValue;
var _syntaxError = require("../error/syntaxError.mjs");
var _ast = require("./ast.mjs");
var _directiveLocation = require("./directiveLocation.mjs");
var _kinds = require("./kinds.mjs");
var _lexer = require("./lexer.mjs");
var _source = require("./source.mjs");
var _tokenKind = require("./tokenKind.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind.TokenKind.SOF);
  var value = parser.parseValueLiteral(false);
  parser.expectToken(_tokenKind.TokenKind.EOF);
  return value;
}
/**
 * Similar to parseValue(), but raises a parse error if it encounters a
 * variable. The return type will be a constant value.
 */

function parseConstValue(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind.TokenKind.SOF);
  var value = parser.parseConstValueLiteral();
  parser.expectToken(_tokenKind.TokenKind.EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind.TokenKind.SOF);
  var type = parser.parseTypeReference();
  parser.expectToken(_tokenKind.TokenKind.EOF);
  return type;
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */
var Parser = exports.Parser = /*#__PURE__*/function () {
  function Parser(source) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Parser);
    var sourceObj = (0, _source.isSource)(source) ? source : new _source.Source(source);
    this._lexer = new _lexer.Lexer(sourceObj);
    this._options = options;
    this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  _createClass(Parser, [{
    key: "parseName",
    value: function parseName() {
      var token = this.expectToken(_tokenKind.TokenKind.NAME);
      return this.node(token, {
        kind: _kinds.Kind.NAME,
        value: token.value
      });
    } // Implements the parsing rules in the Document section.

    /**
     * Document : Definition+
     */
  }, {
    key: "parseDocument",
    value: function parseDocument() {
      return this.node(this._lexer.token, {
        kind: _kinds.Kind.DOCUMENT,
        definitions: this.many(_tokenKind.TokenKind.SOF, this.parseDefinition, _tokenKind.TokenKind.EOF)
      });
    }
    /**
     * Definition :
     *   - ExecutableDefinition
     *   - TypeSystemDefinition
     *   - TypeSystemExtension
     *
     * ExecutableDefinition :
     *   - OperationDefinition
     *   - FragmentDefinition
     *
     * TypeSystemDefinition :
     *   - SchemaDefinition
     *   - TypeDefinition
     *   - DirectiveDefinition
     *
     * TypeDefinition :
     *   - ScalarTypeDefinition
     *   - ObjectTypeDefinition
     *   - InterfaceTypeDefinition
     *   - UnionTypeDefinition
     *   - EnumTypeDefinition
     *   - InputObjectTypeDefinition
     */
  }, {
    key: "parseDefinition",
    value: function parseDefinition() {
      if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
        return this.parseOperationDefinition();
      } // Many definitions begin with a description and require a lookahead.

      var hasDescription = this.peekDescription();
      var keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
      if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
        switch (keywordToken.value) {
          case 'schema':
            return this.parseSchemaDefinition();
          case 'scalar':
            return this.parseScalarTypeDefinition();
          case 'type':
            return this.parseObjectTypeDefinition();
          case 'interface':
            return this.parseInterfaceTypeDefinition();
          case 'union':
            return this.parseUnionTypeDefinition();
          case 'enum':
            return this.parseEnumTypeDefinition();
          case 'input':
            return this.parseInputObjectTypeDefinition();
          case 'directive':
            return this.parseDirectiveDefinition();
        }
        if (hasDescription) {
          throw (0, _syntaxError.syntaxError)(this._lexer.source, this._lexer.token.start, 'Unexpected description, descriptions are supported only on type definitions.');
        }
        switch (keywordToken.value) {
          case 'query':
          case 'mutation':
          case 'subscription':
            return this.parseOperationDefinition();
          case 'fragment':
            return this.parseFragmentDefinition();
          case 'extend':
            return this.parseTypeSystemExtension();
        }
      }
      throw this.unexpected(keywordToken);
    } // Implements the parsing rules in the Operations section.

    /**
     * OperationDefinition :
     *  - SelectionSet
     *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
     */
  }, {
    key: "parseOperationDefinition",
    value: function parseOperationDefinition() {
      var start = this._lexer.token;
      if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
        return this.node(start, {
          kind: _kinds.Kind.OPERATION_DEFINITION,
          operation: _ast.OperationTypeNode.QUERY,
          name: undefined,
          variableDefinitions: [],
          directives: [],
          selectionSet: this.parseSelectionSet()
        });
      }
      var operation = this.parseOperationType();
      var name;
      if (this.peek(_tokenKind.TokenKind.NAME)) {
        name = this.parseName();
      }
      return this.node(start, {
        kind: _kinds.Kind.OPERATION_DEFINITION,
        operation: operation,
        name: name,
        variableDefinitions: this.parseVariableDefinitions(),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet()
      });
    }
    /**
     * OperationType : one of query mutation subscription
     */
  }, {
    key: "parseOperationType",
    value: function parseOperationType() {
      var operationToken = this.expectToken(_tokenKind.TokenKind.NAME);
      switch (operationToken.value) {
        case 'query':
          return _ast.OperationTypeNode.QUERY;
        case 'mutation':
          return _ast.OperationTypeNode.MUTATION;
        case 'subscription':
          return _ast.OperationTypeNode.SUBSCRIPTION;
      }
      throw this.unexpected(operationToken);
    }
    /**
     * VariableDefinitions : ( VariableDefinition+ )
     */
  }, {
    key: "parseVariableDefinitions",
    value: function parseVariableDefinitions() {
      return this.optionalMany(_tokenKind.TokenKind.PAREN_L, this.parseVariableDefinition, _tokenKind.TokenKind.PAREN_R);
    }
    /**
     * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
     */
  }, {
    key: "parseVariableDefinition",
    value: function parseVariableDefinition() {
      return this.node(this._lexer.token, {
        kind: _kinds.Kind.VARIABLE_DEFINITION,
        variable: this.parseVariable(),
        type: (this.expectToken(_tokenKind.TokenKind.COLON), this.parseTypeReference()),
        defaultValue: this.expectOptionalToken(_tokenKind.TokenKind.EQUALS) ? this.parseConstValueLiteral() : undefined,
        directives: this.parseConstDirectives()
      });
    }
    /**
     * Variable : $ Name
     */
  }, {
    key: "parseVariable",
    value: function parseVariable() {
      var start = this._lexer.token;
      this.expectToken(_tokenKind.TokenKind.DOLLAR);
      return this.node(start, {
        kind: _kinds.Kind.VARIABLE,
        name: this.parseName()
      });
    }
    /**
     * ```
     * SelectionSet : { Selection+ }
     * ```
     */
  }, {
    key: "parseSelectionSet",
    value: function parseSelectionSet() {
      return this.node(this._lexer.token, {
        kind: _kinds.Kind.SELECTION_SET,
        selections: this.many(_tokenKind.TokenKind.BRACE_L, this.parseSelection, _tokenKind.TokenKind.BRACE_R)
      });
    }
    /**
     * Selection :
     *   - Field
     *   - FragmentSpread
     *   - InlineFragment
     */
  }, {
    key: "parseSelection",
    value: function parseSelection() {
      return this.peek(_tokenKind.TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
    }
    /**
     * Field : Alias? Name Arguments? Directives? SelectionSet?
     *
     * Alias : Name :
     */
  }, {
    key: "parseField",
    value: function parseField() {
      var start = this._lexer.token;
      var nameOrAlias = this.parseName();
      var alias;
      var name;
      if (this.expectOptionalToken(_tokenKind.TokenKind.COLON)) {
        alias = nameOrAlias;
        name = this.parseName();
      } else {
        name = nameOrAlias;
      }
      return this.node(start, {
        kind: _kinds.Kind.FIELD,
        alias: alias,
        name: name,
        arguments: this.parseArguments(false),
        directives: this.parseDirectives(false),
        selectionSet: this.peek(_tokenKind.TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined
      });
    }
    /**
     * Arguments[Const] : ( Argument[?Const]+ )
     */
  }, {
    key: "parseArguments",
    value: function parseArguments(isConst) {
      var item = isConst ? this.parseConstArgument : this.parseArgument;
      return this.optionalMany(_tokenKind.TokenKind.PAREN_L, item, _tokenKind.TokenKind.PAREN_R);
    }
    /**
     * Argument[Const] : Name : Value[?Const]
     */
  }, {
    key: "parseArgument",
    value: function parseArgument() {
      var isConst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var start = this._lexer.token;
      var name = this.parseName();
      this.expectToken(_tokenKind.TokenKind.COLON);
      return this.node(start, {
        kind: _kinds.Kind.ARGUMENT,
        name: name,
        value: this.parseValueLiteral(isConst)
      });
    }
  }, {
    key: "parseConstArgument",
    value: function parseConstArgument() {
      return this.parseArgument(true);
    } // Implements the parsing rules in the Fragments section.

    /**
     * Corresponds to both FragmentSpread and InlineFragment in the spec.
     *
     * FragmentSpread : ... FragmentName Directives?
     *
     * InlineFragment : ... TypeCondition? Directives? SelectionSet
     */
  }, {
    key: "parseFragment",
    value: function parseFragment() {
      var start = this._lexer.token;
      this.expectToken(_tokenKind.TokenKind.SPREAD);
      var hasTypeCondition = this.expectOptionalKeyword('on');
      if (!hasTypeCondition && this.peek(_tokenKind.TokenKind.NAME)) {
        return this.node(start, {
          kind: _kinds.Kind.FRAGMENT_SPREAD,
          name: this.parseFragmentName(),
          directives: this.parseDirectives(false)
        });
      }
      return this.node(start, {
        kind: _kinds.Kind.INLINE_FRAGMENT,
        typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet()
      });
    }
    /**
     * FragmentDefinition :
     *   - fragment FragmentName on TypeCondition Directives? SelectionSet
     *
     * TypeCondition : NamedType
     */
  }, {
    key: "parseFragmentDefinition",
    value: function parseFragmentDefinition() {
      var start = this._lexer.token;
      this.expectKeyword('fragment'); // Legacy support for defining variables within fragments changes
      // the grammar of FragmentDefinition:
      //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

      if (this._options.allowLegacyFragmentVariables === true) {
        return this.node(start, {
          kind: _kinds.Kind.FRAGMENT_DEFINITION,
          name: this.parseFragmentName(),
          variableDefinitions: this.parseVariableDefinitions(),
          typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet()
        });
      }
      return this.node(start, {
        kind: _kinds.Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet()
      });
    }
    /**
     * FragmentName : Name but not `on`
     */
  }, {
    key: "parseFragmentName",
    value: function parseFragmentName() {
      if (this._lexer.token.value === 'on') {
        throw this.unexpected();
      }
      return this.parseName();
    } // Implements the parsing rules in the Values section.

    /**
     * Value[Const] :
     *   - [~Const] Variable
     *   - IntValue
     *   - FloatValue
     *   - StringValue
     *   - BooleanValue
     *   - NullValue
     *   - EnumValue
     *   - ListValue[?Const]
     *   - ObjectValue[?Const]
     *
     * BooleanValue : one of `true` `false`
     *
     * NullValue : `null`
     *
     * EnumValue : Name but not `true`, `false` or `null`
     */
  }, {
    key: "parseValueLiteral",
    value: function parseValueLiteral(isConst) {
      var token = this._lexer.token;
      switch (token.kind) {
        case _tokenKind.TokenKind.BRACKET_L:
          return this.parseList(isConst);
        case _tokenKind.TokenKind.BRACE_L:
          return this.parseObject(isConst);
        case _tokenKind.TokenKind.INT:
          this.advanceLexer();
          return this.node(token, {
            kind: _kinds.Kind.INT,
            value: token.value
          });
        case _tokenKind.TokenKind.FLOAT:
          this.advanceLexer();
          return this.node(token, {
            kind: _kinds.Kind.FLOAT,
            value: token.value
          });
        case _tokenKind.TokenKind.STRING:
        case _tokenKind.TokenKind.BLOCK_STRING:
          return this.parseStringLiteral();
        case _tokenKind.TokenKind.NAME:
          this.advanceLexer();
          switch (token.value) {
            case 'true':
              return this.node(token, {
                kind: _kinds.Kind.BOOLEAN,
                value: true
              });
            case 'false':
              return this.node(token, {
                kind: _kinds.Kind.BOOLEAN,
                value: false
              });
            case 'null':
              return this.node(token, {
                kind: _kinds.Kind.NULL
              });
            default:
              return this.node(token, {
                kind: _kinds.Kind.ENUM,
                value: token.value
              });
          }
        case _tokenKind.TokenKind.DOLLAR:
          if (isConst) {
            this.expectToken(_tokenKind.TokenKind.DOLLAR);
            if (this._lexer.token.kind === _tokenKind.TokenKind.NAME) {
              var varName = this._lexer.token.value;
              throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Unexpected variable \"$".concat(varName, "\" in constant value."));
            } else {
              throw this.unexpected(token);
            }
          }
          return this.parseVariable();
        default:
          throw this.unexpected();
      }
    }
  }, {
    key: "parseConstValueLiteral",
    value: function parseConstValueLiteral() {
      return this.parseValueLiteral(true);
    }
  }, {
    key: "parseStringLiteral",
    value: function parseStringLiteral() {
      var token = this._lexer.token;
      this.advanceLexer();
      return this.node(token, {
        kind: _kinds.Kind.STRING,
        value: token.value,
        block: token.kind === _tokenKind.TokenKind.BLOCK_STRING
      });
    }
    /**
     * ListValue[Const] :
     *   - [ ]
     *   - [ Value[?Const]+ ]
     */
  }, {
    key: "parseList",
    value: function parseList(isConst) {
      var _this = this;
      var item = function item() {
        return _this.parseValueLiteral(isConst);
      };
      return this.node(this._lexer.token, {
        kind: _kinds.Kind.LIST,
        values: this.any(_tokenKind.TokenKind.BRACKET_L, item, _tokenKind.TokenKind.BRACKET_R)
      });
    }
    /**
     * ```
     * ObjectValue[Const] :
     *   - { }
     *   - { ObjectField[?Const]+ }
     * ```
     */
  }, {
    key: "parseObject",
    value: function parseObject(isConst) {
      var _this2 = this;
      var item = function item() {
        return _this2.parseObjectField(isConst);
      };
      return this.node(this._lexer.token, {
        kind: _kinds.Kind.OBJECT,
        fields: this.any(_tokenKind.TokenKind.BRACE_L, item, _tokenKind.TokenKind.BRACE_R)
      });
    }
    /**
     * ObjectField[Const] : Name : Value[?Const]
     */
  }, {
    key: "parseObjectField",
    value: function parseObjectField(isConst) {
      var start = this._lexer.token;
      var name = this.parseName();
      this.expectToken(_tokenKind.TokenKind.COLON);
      return this.node(start, {
        kind: _kinds.Kind.OBJECT_FIELD,
        name: name,
        value: this.parseValueLiteral(isConst)
      });
    } // Implements the parsing rules in the Directives section.

    /**
     * Directives[Const] : Directive[?Const]+
     */
  }, {
    key: "parseDirectives",
    value: function parseDirectives(isConst) {
      var directives = [];
      while (this.peek(_tokenKind.TokenKind.AT)) {
        directives.push(this.parseDirective(isConst));
      }
      return directives;
    }
  }, {
    key: "parseConstDirectives",
    value: function parseConstDirectives() {
      return this.parseDirectives(true);
    }
    /**
     * ```
     * Directive[Const] : @ Name Arguments[?Const]?
     * ```
     */
  }, {
    key: "parseDirective",
    value: function parseDirective(isConst) {
      var start = this._lexer.token;
      this.expectToken(_tokenKind.TokenKind.AT);
      return this.node(start, {
        kind: _kinds.Kind.DIRECTIVE,
        name: this.parseName(),
        arguments: this.parseArguments(isConst)
      });
    } // Implements the parsing rules in the Types section.

    /**
     * Type :
     *   - NamedType
     *   - ListType
     *   - NonNullType
     */
  }, {
    key: "parseTypeReference",
    value: function parseTypeReference() {
      var start = this._lexer.token;
      var type;
      if (this.expectOptionalToken(_tokenKind.TokenKind.BRACKET_L)) {
        var innerType = this.parseTypeReference();
        this.expectToken(_tokenKind.TokenKind.BRACKET_R);
        type = this.node(start, {
          kind: _kinds.Kind.LIST_TYPE,
          type: innerType
        });
      } else {
        type = this.parseNamedType();
      }
      if (this.expectOptionalToken(_tokenKind.TokenKind.BANG)) {
        return this.node(start, {
          kind: _kinds.Kind.NON_NULL_TYPE,
          type: type
        });
      }
      return type;
    }
    /**
     * NamedType : Name
     */
  }, {
    key: "parseNamedType",
    value: function parseNamedType() {
      return this.node(this._lexer.token, {
        kind: _kinds.Kind.NAMED_TYPE,
        name: this.parseName()
      });
    } // Implements the parsing rules in the Type Definition section.
  }, {
    key: "peekDescription",
    value: function peekDescription() {
      return this.peek(_tokenKind.TokenKind.STRING) || this.peek(_tokenKind.TokenKind.BLOCK_STRING);
    }
    /**
     * Description : StringValue
     */
  }, {
    key: "parseDescription",
    value: function parseDescription() {
      if (this.peekDescription()) {
        return this.parseStringLiteral();
      }
    }
    /**
     * ```
     * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
     * ```
     */
  }, {
    key: "parseSchemaDefinition",
    value: function parseSchemaDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword('schema');
      var directives = this.parseConstDirectives();
      var operationTypes = this.many(_tokenKind.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind.TokenKind.BRACE_R);
      return this.node(start, {
        kind: _kinds.Kind.SCHEMA_DEFINITION,
        description: description,
        directives: directives,
        operationTypes: operationTypes
      });
    }
    /**
     * OperationTypeDefinition : OperationType : NamedType
     */
  }, {
    key: "parseOperationTypeDefinition",
    value: function parseOperationTypeDefinition() {
      var start = this._lexer.token;
      var operation = this.parseOperationType();
      this.expectToken(_tokenKind.TokenKind.COLON);
      var type = this.parseNamedType();
      return this.node(start, {
        kind: _kinds.Kind.OPERATION_TYPE_DEFINITION,
        operation: operation,
        type: type
      });
    }
    /**
     * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
     */
  }, {
    key: "parseScalarTypeDefinition",
    value: function parseScalarTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword('scalar');
      var name = this.parseName();
      var directives = this.parseConstDirectives();
      return this.node(start, {
        kind: _kinds.Kind.SCALAR_TYPE_DEFINITION,
        description: description,
        name: name,
        directives: directives
      });
    }
    /**
     * ObjectTypeDefinition :
     *   Description?
     *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
     */
  }, {
    key: "parseObjectTypeDefinition",
    value: function parseObjectTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword('type');
      var name = this.parseName();
      var interfaces = this.parseImplementsInterfaces();
      var directives = this.parseConstDirectives();
      var fields = this.parseFieldsDefinition();
      return this.node(start, {
        kind: _kinds.Kind.OBJECT_TYPE_DEFINITION,
        description: description,
        name: name,
        interfaces: interfaces,
        directives: directives,
        fields: fields
      });
    }
    /**
     * ImplementsInterfaces :
     *   - implements `&`? NamedType
     *   - ImplementsInterfaces & NamedType
     */
  }, {
    key: "parseImplementsInterfaces",
    value: function parseImplementsInterfaces() {
      return this.expectOptionalKeyword('implements') ? this.delimitedMany(_tokenKind.TokenKind.AMP, this.parseNamedType) : [];
    }
    /**
     * ```
     * FieldsDefinition : { FieldDefinition+ }
     * ```
     */
  }, {
    key: "parseFieldsDefinition",
    value: function parseFieldsDefinition() {
      return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseFieldDefinition, _tokenKind.TokenKind.BRACE_R);
    }
    /**
     * FieldDefinition :
     *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
     */
  }, {
    key: "parseFieldDefinition",
    value: function parseFieldDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      var name = this.parseName();
      var args = this.parseArgumentDefs();
      this.expectToken(_tokenKind.TokenKind.COLON);
      var type = this.parseTypeReference();
      var directives = this.parseConstDirectives();
      return this.node(start, {
        kind: _kinds.Kind.FIELD_DEFINITION,
        description: description,
        name: name,
        arguments: args,
        type: type,
        directives: directives
      });
    }
    /**
     * ArgumentsDefinition : ( InputValueDefinition+ )
     */
  }, {
    key: "parseArgumentDefs",
    value: function parseArgumentDefs() {
      return this.optionalMany(_tokenKind.TokenKind.PAREN_L, this.parseInputValueDef, _tokenKind.TokenKind.PAREN_R);
    }
    /**
     * InputValueDefinition :
     *   - Description? Name : Type DefaultValue? Directives[Const]?
     */
  }, {
    key: "parseInputValueDef",
    value: function parseInputValueDef() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      var name = this.parseName();
      this.expectToken(_tokenKind.TokenKind.COLON);
      var type = this.parseTypeReference();
      var defaultValue;
      if (this.expectOptionalToken(_tokenKind.TokenKind.EQUALS)) {
        defaultValue = this.parseConstValueLiteral();
      }
      var directives = this.parseConstDirectives();
      return this.node(start, {
        kind: _kinds.Kind.INPUT_VALUE_DEFINITION,
        description: description,
        name: name,
        type: type,
        defaultValue: defaultValue,
        directives: directives
      });
    }
    /**
     * InterfaceTypeDefinition :
     *   - Description? interface Name Directives[Const]? FieldsDefinition?
     */
  }, {
    key: "parseInterfaceTypeDefinition",
    value: function parseInterfaceTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword('interface');
      var name = this.parseName();
      var interfaces = this.parseImplementsInterfaces();
      var directives = this.parseConstDirectives();
      var fields = this.parseFieldsDefinition();
      return this.node(start, {
        kind: _kinds.Kind.INTERFACE_TYPE_DEFINITION,
        description: description,
        name: name,
        interfaces: interfaces,
        directives: directives,
        fields: fields
      });
    }
    /**
     * UnionTypeDefinition :
     *   - Description? union Name Directives[Const]? UnionMemberTypes?
     */
  }, {
    key: "parseUnionTypeDefinition",
    value: function parseUnionTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword('union');
      var name = this.parseName();
      var directives = this.parseConstDirectives();
      var types = this.parseUnionMemberTypes();
      return this.node(start, {
        kind: _kinds.Kind.UNION_TYPE_DEFINITION,
        description: description,
        name: name,
        directives: directives,
        types: types
      });
    }
    /**
     * UnionMemberTypes :
     *   - = `|`? NamedType
     *   - UnionMemberTypes | NamedType
     */
  }, {
    key: "parseUnionMemberTypes",
    value: function parseUnionMemberTypes() {
      return this.expectOptionalToken(_tokenKind.TokenKind.EQUALS) ? this.delimitedMany(_tokenKind.TokenKind.PIPE, this.parseNamedType) : [];
    }
    /**
     * EnumTypeDefinition :
     *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
     */
  }, {
    key: "parseEnumTypeDefinition",
    value: function parseEnumTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword('enum');
      var name = this.parseName();
      var directives = this.parseConstDirectives();
      var values = this.parseEnumValuesDefinition();
      return this.node(start, {
        kind: _kinds.Kind.ENUM_TYPE_DEFINITION,
        description: description,
        name: name,
        directives: directives,
        values: values
      });
    }
    /**
     * ```
     * EnumValuesDefinition : { EnumValueDefinition+ }
     * ```
     */
  }, {
    key: "parseEnumValuesDefinition",
    value: function parseEnumValuesDefinition() {
      return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseEnumValueDefinition, _tokenKind.TokenKind.BRACE_R);
    }
    /**
     * EnumValueDefinition : Description? EnumValue Directives[Const]?
     */
  }, {
    key: "parseEnumValueDefinition",
    value: function parseEnumValueDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      var name = this.parseEnumValueName();
      var directives = this.parseConstDirectives();
      return this.node(start, {
        kind: _kinds.Kind.ENUM_VALUE_DEFINITION,
        description: description,
        name: name,
        directives: directives
      });
    }
    /**
     * EnumValue : Name but not `true`, `false` or `null`
     */
  }, {
    key: "parseEnumValueName",
    value: function parseEnumValueName() {
      if (this._lexer.token.value === 'true' || this._lexer.token.value === 'false' || this._lexer.token.value === 'null') {
        throw (0, _syntaxError.syntaxError)(this._lexer.source, this._lexer.token.start, "".concat(getTokenDesc(this._lexer.token), " is reserved and cannot be used for an enum value."));
      }
      return this.parseName();
    }
    /**
     * InputObjectTypeDefinition :
     *   - Description? input Name Directives[Const]? InputFieldsDefinition?
     */
  }, {
    key: "parseInputObjectTypeDefinition",
    value: function parseInputObjectTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword('input');
      var name = this.parseName();
      var directives = this.parseConstDirectives();
      var fields = this.parseInputFieldsDefinition();
      return this.node(start, {
        kind: _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION,
        description: description,
        name: name,
        directives: directives,
        fields: fields
      });
    }
    /**
     * ```
     * InputFieldsDefinition : { InputValueDefinition+ }
     * ```
     */
  }, {
    key: "parseInputFieldsDefinition",
    value: function parseInputFieldsDefinition() {
      return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseInputValueDef, _tokenKind.TokenKind.BRACE_R);
    }
    /**
     * TypeSystemExtension :
     *   - SchemaExtension
     *   - TypeExtension
     *
     * TypeExtension :
     *   - ScalarTypeExtension
     *   - ObjectTypeExtension
     *   - InterfaceTypeExtension
     *   - UnionTypeExtension
     *   - EnumTypeExtension
     *   - InputObjectTypeDefinition
     */
  }, {
    key: "parseTypeSystemExtension",
    value: function parseTypeSystemExtension() {
      var keywordToken = this._lexer.lookahead();
      if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
        switch (keywordToken.value) {
          case 'schema':
            return this.parseSchemaExtension();
          case 'scalar':
            return this.parseScalarTypeExtension();
          case 'type':
            return this.parseObjectTypeExtension();
          case 'interface':
            return this.parseInterfaceTypeExtension();
          case 'union':
            return this.parseUnionTypeExtension();
          case 'enum':
            return this.parseEnumTypeExtension();
          case 'input':
            return this.parseInputObjectTypeExtension();
        }
      }
      throw this.unexpected(keywordToken);
    }
    /**
     * ```
     * SchemaExtension :
     *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
     *  - extend schema Directives[Const]
     * ```
     */
  }, {
    key: "parseSchemaExtension",
    value: function parseSchemaExtension() {
      var start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('schema');
      var directives = this.parseConstDirectives();
      var operationTypes = this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind.TokenKind.BRACE_R);
      if (directives.length === 0 && operationTypes.length === 0) {
        throw this.unexpected();
      }
      return this.node(start, {
        kind: _kinds.Kind.SCHEMA_EXTENSION,
        directives: directives,
        operationTypes: operationTypes
      });
    }
    /**
     * ScalarTypeExtension :
     *   - extend scalar Name Directives[Const]
     */
  }, {
    key: "parseScalarTypeExtension",
    value: function parseScalarTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('scalar');
      var name = this.parseName();
      var directives = this.parseConstDirectives();
      if (directives.length === 0) {
        throw this.unexpected();
      }
      return this.node(start, {
        kind: _kinds.Kind.SCALAR_TYPE_EXTENSION,
        name: name,
        directives: directives
      });
    }
    /**
     * ObjectTypeExtension :
     *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
     *  - extend type Name ImplementsInterfaces? Directives[Const]
     *  - extend type Name ImplementsInterfaces
     */
  }, {
    key: "parseObjectTypeExtension",
    value: function parseObjectTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('type');
      var name = this.parseName();
      var interfaces = this.parseImplementsInterfaces();
      var directives = this.parseConstDirectives();
      var fields = this.parseFieldsDefinition();
      if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
        throw this.unexpected();
      }
      return this.node(start, {
        kind: _kinds.Kind.OBJECT_TYPE_EXTENSION,
        name: name,
        interfaces: interfaces,
        directives: directives,
        fields: fields
      });
    }
    /**
     * InterfaceTypeExtension :
     *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
     *  - extend interface Name ImplementsInterfaces? Directives[Const]
     *  - extend interface Name ImplementsInterfaces
     */
  }, {
    key: "parseInterfaceTypeExtension",
    value: function parseInterfaceTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('interface');
      var name = this.parseName();
      var interfaces = this.parseImplementsInterfaces();
      var directives = this.parseConstDirectives();
      var fields = this.parseFieldsDefinition();
      if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
        throw this.unexpected();
      }
      return this.node(start, {
        kind: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
        name: name,
        interfaces: interfaces,
        directives: directives,
        fields: fields
      });
    }
    /**
     * UnionTypeExtension :
     *   - extend union Name Directives[Const]? UnionMemberTypes
     *   - extend union Name Directives[Const]
     */
  }, {
    key: "parseUnionTypeExtension",
    value: function parseUnionTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('union');
      var name = this.parseName();
      var directives = this.parseConstDirectives();
      var types = this.parseUnionMemberTypes();
      if (directives.length === 0 && types.length === 0) {
        throw this.unexpected();
      }
      return this.node(start, {
        kind: _kinds.Kind.UNION_TYPE_EXTENSION,
        name: name,
        directives: directives,
        types: types
      });
    }
    /**
     * EnumTypeExtension :
     *   - extend enum Name Directives[Const]? EnumValuesDefinition
     *   - extend enum Name Directives[Const]
     */
  }, {
    key: "parseEnumTypeExtension",
    value: function parseEnumTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('enum');
      var name = this.parseName();
      var directives = this.parseConstDirectives();
      var values = this.parseEnumValuesDefinition();
      if (directives.length === 0 && values.length === 0) {
        throw this.unexpected();
      }
      return this.node(start, {
        kind: _kinds.Kind.ENUM_TYPE_EXTENSION,
        name: name,
        directives: directives,
        values: values
      });
    }
    /**
     * InputObjectTypeExtension :
     *   - extend input Name Directives[Const]? InputFieldsDefinition
     *   - extend input Name Directives[Const]
     */
  }, {
    key: "parseInputObjectTypeExtension",
    value: function parseInputObjectTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('input');
      var name = this.parseName();
      var directives = this.parseConstDirectives();
      var fields = this.parseInputFieldsDefinition();
      if (directives.length === 0 && fields.length === 0) {
        throw this.unexpected();
      }
      return this.node(start, {
        kind: _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION,
        name: name,
        directives: directives,
        fields: fields
      });
    }
    /**
     * ```
     * DirectiveDefinition :
     *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
     * ```
     */
  }, {
    key: "parseDirectiveDefinition",
    value: function parseDirectiveDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword('directive');
      this.expectToken(_tokenKind.TokenKind.AT);
      var name = this.parseName();
      var args = this.parseArgumentDefs();
      var repeatable = this.expectOptionalKeyword('repeatable');
      this.expectKeyword('on');
      var locations = this.parseDirectiveLocations();
      return this.node(start, {
        kind: _kinds.Kind.DIRECTIVE_DEFINITION,
        description: description,
        name: name,
        arguments: args,
        repeatable: repeatable,
        locations: locations
      });
    }
    /**
     * DirectiveLocations :
     *   - `|`? DirectiveLocation
     *   - DirectiveLocations | DirectiveLocation
     */
  }, {
    key: "parseDirectiveLocations",
    value: function parseDirectiveLocations() {
      return this.delimitedMany(_tokenKind.TokenKind.PIPE, this.parseDirectiveLocation);
    }
    /*
     * DirectiveLocation :
     *   - ExecutableDirectiveLocation
     *   - TypeSystemDirectiveLocation
     *
     * ExecutableDirectiveLocation : one of
     *   `QUERY`
     *   `MUTATION`
     *   `SUBSCRIPTION`
     *   `FIELD`
     *   `FRAGMENT_DEFINITION`
     *   `FRAGMENT_SPREAD`
     *   `INLINE_FRAGMENT`
     *
     * TypeSystemDirectiveLocation : one of
     *   `SCHEMA`
     *   `SCALAR`
     *   `OBJECT`
     *   `FIELD_DEFINITION`
     *   `ARGUMENT_DEFINITION`
     *   `INTERFACE`
     *   `UNION`
     *   `ENUM`
     *   `ENUM_VALUE`
     *   `INPUT_OBJECT`
     *   `INPUT_FIELD_DEFINITION`
     */
  }, {
    key: "parseDirectiveLocation",
    value: function parseDirectiveLocation() {
      var start = this._lexer.token;
      var name = this.parseName();
      if (Object.prototype.hasOwnProperty.call(_directiveLocation.DirectiveLocation, name.value)) {
        return name;
      }
      throw this.unexpected(start);
    } // Core parsing utility functions

    /**
     * Returns a node that, if configured to do so, sets a "loc" field as a
     * location object, used to identify the place in the source that created a
     * given parsed object.
     */
  }, {
    key: "node",
    value: function node(startToken, _node) {
      if (this._options.noLocation !== true) {
        _node.loc = new _ast.Location(startToken, this._lexer.lastToken, this._lexer.source);
      }
      return _node;
    }
    /**
     * Determines if the next token is of a given kind
     */
  }, {
    key: "peek",
    value: function peek(kind) {
      return this._lexer.token.kind === kind;
    }
    /**
     * If the next token is of the given kind, return that token after advancing the lexer.
     * Otherwise, do not change the parser state and throw an error.
     */
  }, {
    key: "expectToken",
    value: function expectToken(kind) {
      var token = this._lexer.token;
      if (token.kind === kind) {
        this.advanceLexer();
        return token;
      }
      throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
    }
    /**
     * If the next token is of the given kind, return "true" after advancing the lexer.
     * Otherwise, do not change the parser state and return "false".
     */
  }, {
    key: "expectOptionalToken",
    value: function expectOptionalToken(kind) {
      var token = this._lexer.token;
      if (token.kind === kind) {
        this.advanceLexer();
        return true;
      }
      return false;
    }
    /**
     * If the next token is a given keyword, advance the lexer.
     * Otherwise, do not change the parser state and throw an error.
     */
  }, {
    key: "expectKeyword",
    value: function expectKeyword(value) {
      var token = this._lexer.token;
      if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
        this.advanceLexer();
      } else {
        throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token), "."));
      }
    }
    /**
     * If the next token is a given keyword, return "true" after advancing the lexer.
     * Otherwise, do not change the parser state and return "false".
     */
  }, {
    key: "expectOptionalKeyword",
    value: function expectOptionalKeyword(value) {
      var token = this._lexer.token;
      if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
        this.advanceLexer();
        return true;
      }
      return false;
    }
    /**
     * Helper function for creating an error when an unexpected lexed token is encountered.
     */
  }, {
    key: "unexpected",
    value: function unexpected(atToken) {
      var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
      return (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
    }
    /**
     * Returns a possibly empty list of parse nodes, determined by the parseFn.
     * This list begins with a lex token of openKind and ends with a lex token of closeKind.
     * Advances the parser to the next lex token after the closing token.
     */
  }, {
    key: "any",
    value: function any(openKind, parseFn, closeKind) {
      this.expectToken(openKind);
      var nodes = [];
      while (!this.expectOptionalToken(closeKind)) {
        nodes.push(parseFn.call(this));
      }
      return nodes;
    }
    /**
     * Returns a list of parse nodes, determined by the parseFn.
     * It can be empty only if open token is missing otherwise it will always return non-empty list
     * that begins with a lex token of openKind and ends with a lex token of closeKind.
     * Advances the parser to the next lex token after the closing token.
     */
  }, {
    key: "optionalMany",
    value: function optionalMany(openKind, parseFn, closeKind) {
      if (this.expectOptionalToken(openKind)) {
        var nodes = [];
        do {
          nodes.push(parseFn.call(this));
        } while (!this.expectOptionalToken(closeKind));
        return nodes;
      }
      return [];
    }
    /**
     * Returns a non-empty list of parse nodes, determined by the parseFn.
     * This list begins with a lex token of openKind and ends with a lex token of closeKind.
     * Advances the parser to the next lex token after the closing token.
     */
  }, {
    key: "many",
    value: function many(openKind, parseFn, closeKind) {
      this.expectToken(openKind);
      var nodes = [];
      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));
      return nodes;
    }
    /**
     * Returns a non-empty list of parse nodes, determined by the parseFn.
     * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
     * Advances the parser to the next lex token after last item in the list.
     */
  }, {
    key: "delimitedMany",
    value: function delimitedMany(delimiterKind, parseFn) {
      this.expectOptionalToken(delimiterKind);
      var nodes = [];
      do {
        nodes.push(parseFn.call(this));
      } while (this.expectOptionalToken(delimiterKind));
      return nodes;
    }
  }, {
    key: "advanceLexer",
    value: function advanceLexer() {
      var maxTokens = this._options.maxTokens;
      var token = this._lexer.advance();
      if (maxTokens !== undefined && token.kind !== _tokenKind.TokenKind.EOF) {
        ++this._tokenCounter;
        if (this._tokenCounter > maxTokens) {
          throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Document contains more that ".concat(maxTokens, " tokens. Parsing aborted."));
        }
      }
    }
  }]);
  return Parser;
}();
/**
 * A helper function to describe a token as a string for debugging.
 */
function getTokenDesc(token) {
  var value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? " \"".concat(value, "\"") : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */

function getTokenKindDesc(kind) {
  return (0, _lexer.isPunctuatorTokenKind)(kind) ? "\"".concat(kind, "\"") : kind;
}
},{"../error/syntaxError.mjs":"../node_modules/graphql/error/syntaxError.mjs","./ast.mjs":"../node_modules/graphql/language/ast.mjs","./directiveLocation.mjs":"../node_modules/graphql/language/directiveLocation.mjs","./kinds.mjs":"../node_modules/graphql/language/kinds.mjs","./lexer.mjs":"../node_modules/graphql/language/lexer.mjs","./source.mjs":"../node_modules/graphql/language/source.mjs","./tokenKind.mjs":"../node_modules/graphql/language/tokenKind.mjs"}],"../node_modules/graphql/jsutils/didYouMean.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.didYouMean = didYouMean;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MAX_SUGGESTIONS = 5;
/**
 * Given [ A, B, C ] return ' Did you mean A, B, or C?'.
 */

function didYouMean(firstArg, secondArg) {
  var _ref = secondArg ? [firstArg, secondArg] : [undefined, firstArg],
    _ref2 = _slicedToArray(_ref, 2),
    subMessage = _ref2[0],
    suggestionsArg = _ref2[1];
  var message = ' Did you mean ';
  if (subMessage) {
    message += subMessage + ' ';
  }
  var suggestions = suggestionsArg.map(function (x) {
    return "\"".concat(x, "\"");
  });
  switch (suggestions.length) {
    case 0:
      return '';
    case 1:
      return message + suggestions[0] + '?';
    case 2:
      return message + suggestions[0] + ' or ' + suggestions[1] + '?';
  }
  var selected = suggestions.slice(0, MAX_SUGGESTIONS);
  var lastItem = selected.pop();
  return message + selected.join(', ') + ', or ' + lastItem + '?';
}
},{}],"../node_modules/graphql/jsutils/identityFunc.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identityFunc = identityFunc;
/**
 * Returns the first argument it receives.
 */
function identityFunc(x) {
  return x;
}
},{}],"../node_modules/graphql/jsutils/keyMap.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyMap = keyMap;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * for each value in the array.
 *
 * This provides a convenient lookup for the array items if the key function
 * produces unique results.
 * ```ts
 * const phoneBook = [
 *   { name: 'Jon', num: '555-1234' },
 *   { name: 'Jenny', num: '867-5309' }
 * ]
 *
 * const entriesByName = keyMap(
 *   phoneBook,
 *   entry => entry.name
 * )
 *
 * // {
 * //   Jon: { name: 'Jon', num: '555-1234' },
 * //   Jenny: { name: 'Jenny', num: '867-5309' }
 * // }
 *
 * const jennyEntry = entriesByName['Jenny']
 *
 * // { name: 'Jenny', num: '857-6309' }
 * ```
 */
function keyMap(list, keyFn) {
  var result = Object.create(null);
  var _iterator = _createForOfIteratorHelper(list),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      result[keyFn(item)] = item;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
}
},{}],"../node_modules/graphql/jsutils/keyValMap.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyValMap = keyValMap;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 * ```ts
 * const phoneBook = [
 *   { name: 'Jon', num: '555-1234' },
 *   { name: 'Jenny', num: '867-5309' }
 * ]
 *
 * // { Jon: '555-1234', Jenny: '867-5309' }
 * const phonesByName = keyValMap(
 *   phoneBook,
 *   entry => entry.name,
 *   entry => entry.num
 * )
 * ```
 */
function keyValMap(list, keyFn, valFn) {
  var result = Object.create(null);
  var _iterator = _createForOfIteratorHelper(list),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      result[keyFn(item)] = valFn(item);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
}
},{}],"../node_modules/graphql/jsutils/mapValue.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapValue = mapValue;
/**
 * Creates an object map with the same keys as `map` and values generated by
 * running each value of `map` thru `fn`.
 */
function mapValue(map, fn) {
  var result = Object.create(null);
  for (var _i = 0, _Object$keys = Object.keys(map); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    result[key] = fn(map[key], key);
  }
  return result;
}
},{}],"../node_modules/graphql/jsutils/naturalCompare.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.naturalCompare = naturalCompare;
/**
 * Returns a number indicating whether a reference string comes before, or after,
 * or is the same as the given string in natural sort order.
 *
 * See: https://en.wikipedia.org/wiki/Natural_sort_order
 *
 */
function naturalCompare(aStr, bStr) {
  var aIndex = 0;
  var bIndex = 0;
  while (aIndex < aStr.length && bIndex < bStr.length) {
    var aChar = aStr.charCodeAt(aIndex);
    var bChar = bStr.charCodeAt(bIndex);
    if (isDigit(aChar) && isDigit(bChar)) {
      var aNum = 0;
      do {
        ++aIndex;
        aNum = aNum * 10 + aChar - DIGIT_0;
        aChar = aStr.charCodeAt(aIndex);
      } while (isDigit(aChar) && aNum > 0);
      var bNum = 0;
      do {
        ++bIndex;
        bNum = bNum * 10 + bChar - DIGIT_0;
        bChar = bStr.charCodeAt(bIndex);
      } while (isDigit(bChar) && bNum > 0);
      if (aNum < bNum) {
        return -1;
      }
      if (aNum > bNum) {
        return 1;
      }
    } else {
      if (aChar < bChar) {
        return -1;
      }
      if (aChar > bChar) {
        return 1;
      }
      ++aIndex;
      ++bIndex;
    }
  }
  return aStr.length - bStr.length;
}
var DIGIT_0 = 48;
var DIGIT_9 = 57;
function isDigit(code) {
  return !isNaN(code) && DIGIT_0 <= code && code <= DIGIT_9;
}
},{}],"../node_modules/graphql/jsutils/suggestionList.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suggestionList = suggestionList;
var _naturalCompare = require("./naturalCompare.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Given an invalid input string and a list of valid options, returns a filtered
 * list of valid options sorted based on their similarity with the input.
 */

function suggestionList(input, options) {
  var optionsByDistance = Object.create(null);
  var lexicalDistance = new LexicalDistance(input);
  var threshold = Math.floor(input.length * 0.4) + 1;
  var _iterator = _createForOfIteratorHelper(options),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var option = _step.value;
      var distance = lexicalDistance.measure(option, threshold);
      if (distance !== undefined) {
        optionsByDistance[option] = distance;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return Object.keys(optionsByDistance).sort(function (a, b) {
    var distanceDiff = optionsByDistance[a] - optionsByDistance[b];
    return distanceDiff !== 0 ? distanceDiff : (0, _naturalCompare.naturalCompare)(a, b);
  });
}
/**
 * Computes the lexical distance between strings A and B.
 *
 * The "distance" between two strings is given by counting the minimum number
 * of edits needed to transform string A into string B. An edit can be an
 * insertion, deletion, or substitution of a single character, or a swap of two
 * adjacent characters.
 *
 * Includes a custom alteration from Damerau-Levenshtein to treat case changes
 * as a single edit which helps identify mis-cased values with an edit distance
 * of 1.
 *
 * This distance can be useful for detecting typos in input or sorting
 */
var LexicalDistance = /*#__PURE__*/function () {
  function LexicalDistance(input) {
    _classCallCheck(this, LexicalDistance);
    this._input = input;
    this._inputLowerCase = input.toLowerCase();
    this._inputArray = stringToArray(this._inputLowerCase);
    this._rows = [new Array(input.length + 1).fill(0), new Array(input.length + 1).fill(0), new Array(input.length + 1).fill(0)];
  }
  _createClass(LexicalDistance, [{
    key: "measure",
    value: function measure(option, threshold) {
      if (this._input === option) {
        return 0;
      }
      var optionLowerCase = option.toLowerCase(); // Any case change counts as a single edit

      if (this._inputLowerCase === optionLowerCase) {
        return 1;
      }
      var a = stringToArray(optionLowerCase);
      var b = this._inputArray;
      if (a.length < b.length) {
        var tmp = a;
        a = b;
        b = tmp;
      }
      var aLength = a.length;
      var bLength = b.length;
      if (aLength - bLength > threshold) {
        return undefined;
      }
      var rows = this._rows;
      for (var j = 0; j <= bLength; j++) {
        rows[0][j] = j;
      }
      for (var i = 1; i <= aLength; i++) {
        var upRow = rows[(i - 1) % 3];
        var currentRow = rows[i % 3];
        var smallestCell = currentRow[0] = i;
        for (var _j = 1; _j <= bLength; _j++) {
          var cost = a[i - 1] === b[_j - 1] ? 0 : 1;
          var currentCell = Math.min(upRow[_j] + 1,
          // delete
          currentRow[_j - 1] + 1,
          // insert
          upRow[_j - 1] + cost // substitute
          );

          if (i > 1 && _j > 1 && a[i - 1] === b[_j - 2] && a[i - 2] === b[_j - 1]) {
            // transposition
            var doubleDiagonalCell = rows[(i - 2) % 3][_j - 2];
            currentCell = Math.min(currentCell, doubleDiagonalCell + 1);
          }
          if (currentCell < smallestCell) {
            smallestCell = currentCell;
          }
          currentRow[_j] = currentCell;
        } // Early exit, since distance can't go smaller than smallest element of the previous row.

        if (smallestCell > threshold) {
          return undefined;
        }
      }
      var distance = rows[aLength % 3][bLength];
      return distance <= threshold ? distance : undefined;
    }
  }]);
  return LexicalDistance;
}();
function stringToArray(str) {
  var strLength = str.length;
  var array = new Array(strLength);
  for (var i = 0; i < strLength; ++i) {
    array[i] = str.charCodeAt(i);
  }
  return array;
}
},{"./naturalCompare.mjs":"../node_modules/graphql/jsutils/naturalCompare.mjs"}],"../node_modules/graphql/jsutils/toObjMap.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toObjMap = toObjMap;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function toObjMap(obj) {
  if (obj == null) {
    return Object.create(null);
  }
  if (Object.getPrototypeOf(obj) === null) {
    return obj;
  }
  var map = Object.create(null);
  for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    map[key] = value;
  }
  return map;
}
},{}],"../node_modules/graphql/language/printString.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printString = printString;
/**
 * Prints a string as a GraphQL StringValue literal. Replaces control characters
 * and excluded characters (" U+0022 and \\ U+005C) with escape sequences.
 */
function printString(str) {
  return "\"".concat(str.replace(escapedRegExp, escapedReplacer), "\"");
} // eslint-disable-next-line no-control-regex

var escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function escapedReplacer(str) {
  return escapeSequences[str.charCodeAt(0)];
} // prettier-ignore

var escapeSequences = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", '\\b', '\\t', '\\n', "\\u000B", '\\f', '\\r', "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", '', '', '\\"', '', '', '', '', '', '', '', '', '', '', '', '', '',
// 2F
'', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
// 3F
'', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
// 4F
'', '', '', '', '', '', '', '', '', '', '', '', '\\\\', '', '', '',
// 5F
'', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
// 6F
'', '', '', '', '', '', '', '', '', '', '', '', '', '', '', "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"];
},{}],"../node_modules/graphql/language/visitor.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BREAK = void 0;
exports.getEnterLeaveForKind = getEnterLeaveForKind;
exports.getVisitFn = getVisitFn;
exports.visit = visit;
exports.visitInParallel = visitInParallel;
var _devAssert = require("../jsutils/devAssert.mjs");
var _inspect = require("../jsutils/inspect.mjs");
var _ast = require("./ast.mjs");
var _kinds = require("./kinds.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */

var BREAK = exports.BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 * ```ts
 * const editedAST = visit(ast, {
 *   enter(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: skip visiting this node
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   },
 *   leave(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: no action
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   }
 * });
 * ```
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to three permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind(node) {
 *     // enter the "Kind" node
 *   }
 * })
 * ```
 *
 * 2) Named visitors that trigger upon entering and leaving a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind: {
 *     enter(node) {
 *       // enter the "Kind" node
 *     }
 *     leave(node) {
 *       // leave the "Kind" node
 *     }
 *   }
 * })
 * ```
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 * ```ts
 * visit(ast, {
 *   enter(node) {
 *     // enter any node
 *   },
 *   leave(node) {
 *     // leave any node
 *   }
 * })
 * ```
 */

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _ast.QueryDocumentKeys;
  var enterLeaveMap = new Map();
  for (var _i = 0, _Object$values = Object.values(_kinds.Kind); _i < _Object$values.length; _i++) {
    var kind = _Object$values[_i];
    enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
  }
  /* eslint-disable no-undef-init */

  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = root;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
          var editOffset = 0;
          var _iterator = _createForOfIteratorHelper(edits),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                editKey = _step$value[0],
                editValue = _step$value[1];
              var arrayKey = editKey - editOffset;
              if (editValue === null) {
                node.splice(arrayKey, 1);
                editOffset++;
              } else {
                node[arrayKey] = editValue;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          node = Object.defineProperties({}, Object.getOwnPropertyDescriptors(node));
          var _iterator2 = _createForOfIteratorHelper(edits),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _step2$value = _slicedToArray(_step2.value, 2),
                _editKey = _step2$value[0],
                _editValue = _step2$value[1];
              node[_editKey] = _editValue;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else if (parent) {
      key = inArray ? index : keys[index];
      node = parent[key];
      if (node === null || node === undefined) {
        continue;
      }
      path.push(key);
    }
    var result = void 0;
    if (!Array.isArray(node)) {
      var _enterLeaveMap$get, _enterLeaveMap$get2;
      (0, _ast.isNode)(node) || (0, _devAssert.devAssert)(false, "Invalid AST Node: ".concat((0, _inspect.inspect)(node), "."));
      var visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
      result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
      if (result === BREAK) {
        break;
      }
      if (result === false) {
        if (!isLeaving) {
          path.pop();
          continue;
        }
      } else if (result !== undefined) {
        edits.push([key, result]);
        if (!isLeaving) {
          if ((0, _ast.isNode)(result)) {
            node = result;
          } else {
            path.pop();
            continue;
          }
        }
      }
    }
    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }
    if (isLeaving) {
      path.pop();
    } else {
      var _node$kind;
      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== undefined);
  if (edits.length !== 0) {
    // New root
    return edits[edits.length - 1][1];
  }
  return root;
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */

function visitInParallel(visitors) {
  var skipping = new Array(visitors.length).fill(null);
  var mergedVisitor = Object.create(null);
  var _loop = function _loop() {
    var kind = _Object$values2[_i2];
    var hasVisitor = false;
    var enterList = new Array(visitors.length).fill(undefined);
    var leaveList = new Array(visitors.length).fill(undefined);
    for (var i = 0; i < visitors.length; ++i) {
      var _getEnterLeaveForKind = getEnterLeaveForKind(visitors[i], kind),
        enter = _getEnterLeaveForKind.enter,
        leave = _getEnterLeaveForKind.leave;
      hasVisitor || (hasVisitor = enter != null || leave != null);
      enterList[i] = enter;
      leaveList[i] = leave;
    }
    if (!hasVisitor) {
      return 1; // continue
    }
    var mergedEnterLeave = {
      enter: function enter() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var node = args[0];
        for (var _i3 = 0; _i3 < visitors.length; _i3++) {
          if (skipping[_i3] === null) {
            var _enterList$i;
            var result = (_enterList$i = enterList[_i3]) === null || _enterList$i === void 0 ? void 0 : _enterList$i.apply(visitors[_i3], args);
            if (result === false) {
              skipping[_i3] = node;
            } else if (result === BREAK) {
              skipping[_i3] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      },
      leave: function leave() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        var node = args[0];
        for (var _i4 = 0; _i4 < visitors.length; _i4++) {
          if (skipping[_i4] === null) {
            var _leaveList$i;
            var result = (_leaveList$i = leaveList[_i4]) === null || _leaveList$i === void 0 ? void 0 : _leaveList$i.apply(visitors[_i4], args);
            if (result === BREAK) {
              skipping[_i4] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          } else if (skipping[_i4] === node) {
            skipping[_i4] = null;
          }
        }
      }
    };
    mergedVisitor[kind] = mergedEnterLeave;
  };
  for (var _i2 = 0, _Object$values2 = Object.values(_kinds.Kind); _i2 < _Object$values2.length; _i2++) {
    if (_loop()) continue;
  }
  return mergedVisitor;
}
/**
 * Given a visitor instance and a node kind, return EnterLeaveVisitor for that kind.
 */

function getEnterLeaveForKind(visitor, kind) {
  var kindVisitor = visitor[kind];
  if (_typeof(kindVisitor) === 'object') {
    // { Kind: { enter() {}, leave() {} } }
    return kindVisitor;
  } else if (typeof kindVisitor === 'function') {
    // { Kind() {} }
    return {
      enter: kindVisitor,
      leave: undefined
    };
  } // { enter() {}, leave() {} }

  return {
    enter: visitor.enter,
    leave: visitor.leave
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 *
 * @deprecated Please use `getEnterLeaveForKind` instead. Will be removed in v17
 */

/* c8 ignore next 8 */

function getVisitFn(visitor, kind, isLeaving) {
  var _getEnterLeaveForKind2 = getEnterLeaveForKind(visitor, kind),
    enter = _getEnterLeaveForKind2.enter,
    leave = _getEnterLeaveForKind2.leave;
  return isLeaving ? leave : enter;
}
},{"../jsutils/devAssert.mjs":"../node_modules/graphql/jsutils/devAssert.mjs","../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","./ast.mjs":"../node_modules/graphql/language/ast.mjs","./kinds.mjs":"../node_modules/graphql/language/kinds.mjs"}],"../node_modules/graphql/language/printer.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = print;
var _blockString = require("./blockString.mjs");
var _printString = require("./printString.mjs");
var _visitor = require("./visitor.mjs");
/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return (0, _visitor.visit)(ast, printDocASTReducer);
}
var MAX_LINE_LENGTH = 80;
var printDocASTReducer = {
  Name: {
    leave: function leave(node) {
      return node.value;
    }
  },
  Variable: {
    leave: function leave(node) {
      return '$' + node.name;
    }
  },
  // Document
  Document: {
    leave: function leave(node) {
      return join(node.definitions, '\n\n');
    }
  },
  OperationDefinition: {
    leave: function leave(node) {
      var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
      var prefix = join([node.operation, join([node.name, varDefs]), join(node.directives, ' ')], ' '); // Anonymous queries with no directives or variable definitions can use
      // the query short form.

      return (prefix === 'query' ? '' : prefix + ' ') + node.selectionSet;
    }
  },
  VariableDefinition: {
    leave: function leave(_ref) {
      var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
      return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
    }
  },
  SelectionSet: {
    leave: function leave(_ref2) {
      var selections = _ref2.selections;
      return block(selections);
    }
  },
  Field: {
    leave: function leave(_ref3) {
      var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
      var prefix = wrap('', alias, ': ') + name;
      var argsLine = prefix + wrap('(', join(args, ', '), ')');
      if (argsLine.length > MAX_LINE_LENGTH) {
        argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
      }
      return join([argsLine, join(directives, ' '), selectionSet], ' ');
    }
  },
  Argument: {
    leave: function leave(_ref4) {
      var name = _ref4.name,
        value = _ref4.value;
      return name + ': ' + value;
    }
  },
  // Fragments
  FragmentSpread: {
    leave: function leave(_ref5) {
      var name = _ref5.name,
        directives = _ref5.directives;
      return '...' + name + wrap(' ', join(directives, ' '));
    }
  },
  InlineFragment: {
    leave: function leave(_ref6) {
      var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
      return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
    }
  },
  FragmentDefinition: {
    leave: function leave(_ref7 // Note: fragment variable definitions are experimental and may be changed
    ) {
      var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
      return (
        // or removed in the future.
        "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
      );
    }
  },
  // Value
  IntValue: {
    leave: function leave(_ref8) {
      var value = _ref8.value;
      return value;
    }
  },
  FloatValue: {
    leave: function leave(_ref9) {
      var value = _ref9.value;
      return value;
    }
  },
  StringValue: {
    leave: function leave(_ref10) {
      var value = _ref10.value,
        isBlockString = _ref10.block;
      return isBlockString ? (0, _blockString.printBlockString)(value) : (0, _printString.printString)(value);
    }
  },
  BooleanValue: {
    leave: function leave(_ref11) {
      var value = _ref11.value;
      return value ? 'true' : 'false';
    }
  },
  NullValue: {
    leave: function leave() {
      return 'null';
    }
  },
  EnumValue: {
    leave: function leave(_ref12) {
      var value = _ref12.value;
      return value;
    }
  },
  ListValue: {
    leave: function leave(_ref13) {
      var values = _ref13.values;
      return '[' + join(values, ', ') + ']';
    }
  },
  ObjectValue: {
    leave: function leave(_ref14) {
      var fields = _ref14.fields;
      return '{' + join(fields, ', ') + '}';
    }
  },
  ObjectField: {
    leave: function leave(_ref15) {
      var name = _ref15.name,
        value = _ref15.value;
      return name + ': ' + value;
    }
  },
  // Directive
  Directive: {
    leave: function leave(_ref16) {
      var name = _ref16.name,
        args = _ref16.arguments;
      return '@' + name + wrap('(', join(args, ', '), ')');
    }
  },
  // Type
  NamedType: {
    leave: function leave(_ref17) {
      var name = _ref17.name;
      return name;
    }
  },
  ListType: {
    leave: function leave(_ref18) {
      var type = _ref18.type;
      return '[' + type + ']';
    }
  },
  NonNullType: {
    leave: function leave(_ref19) {
      var type = _ref19.type;
      return type + '!';
    }
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: function leave(_ref20) {
      var description = _ref20.description,
        directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
      return wrap('', description, '\n') + join(['schema', join(directives, ' '), block(operationTypes)], ' ');
    }
  },
  OperationTypeDefinition: {
    leave: function leave(_ref21) {
      var operation = _ref21.operation,
        type = _ref21.type;
      return operation + ': ' + type;
    }
  },
  ScalarTypeDefinition: {
    leave: function leave(_ref22) {
      var description = _ref22.description,
        name = _ref22.name,
        directives = _ref22.directives;
      return wrap('', description, '\n') + join(['scalar', name, join(directives, ' ')], ' ');
    }
  },
  ObjectTypeDefinition: {
    leave: function leave(_ref23) {
      var description = _ref23.description,
        name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
      return wrap('', description, '\n') + join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
    }
  },
  FieldDefinition: {
    leave: function leave(_ref24) {
      var description = _ref24.description,
        name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
      return wrap('', description, '\n') + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
    }
  },
  InputValueDefinition: {
    leave: function leave(_ref25) {
      var description = _ref25.description,
        name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
      return wrap('', description, '\n') + join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
    }
  },
  InterfaceTypeDefinition: {
    leave: function leave(_ref26) {
      var description = _ref26.description,
        name = _ref26.name,
        interfaces = _ref26.interfaces,
        directives = _ref26.directives,
        fields = _ref26.fields;
      return wrap('', description, '\n') + join(['interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
    }
  },
  UnionTypeDefinition: {
    leave: function leave(_ref27) {
      var description = _ref27.description,
        name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
      return wrap('', description, '\n') + join(['union', name, join(directives, ' '), wrap('= ', join(types, ' | '))], ' ');
    }
  },
  EnumTypeDefinition: {
    leave: function leave(_ref28) {
      var description = _ref28.description,
        name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
      return wrap('', description, '\n') + join(['enum', name, join(directives, ' '), block(values)], ' ');
    }
  },
  EnumValueDefinition: {
    leave: function leave(_ref29) {
      var description = _ref29.description,
        name = _ref29.name,
        directives = _ref29.directives;
      return wrap('', description, '\n') + join([name, join(directives, ' ')], ' ');
    }
  },
  InputObjectTypeDefinition: {
    leave: function leave(_ref30) {
      var description = _ref30.description,
        name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
      return wrap('', description, '\n') + join(['input', name, join(directives, ' '), block(fields)], ' ');
    }
  },
  DirectiveDefinition: {
    leave: function leave(_ref31) {
      var description = _ref31.description,
        name = _ref31.name,
        args = _ref31.arguments,
        repeatable = _ref31.repeatable,
        locations = _ref31.locations;
      return wrap('', description, '\n') + 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
    }
  },
  SchemaExtension: {
    leave: function leave(_ref32) {
      var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
      return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
    }
  },
  ScalarTypeExtension: {
    leave: function leave(_ref33) {
      var name = _ref33.name,
        directives = _ref33.directives;
      return join(['extend scalar', name, join(directives, ' ')], ' ');
    }
  },
  ObjectTypeExtension: {
    leave: function leave(_ref34) {
      var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
      return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
    }
  },
  InterfaceTypeExtension: {
    leave: function leave(_ref35) {
      var name = _ref35.name,
        interfaces = _ref35.interfaces,
        directives = _ref35.directives,
        fields = _ref35.fields;
      return join(['extend interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
    }
  },
  UnionTypeExtension: {
    leave: function leave(_ref36) {
      var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
      return join(['extend union', name, join(directives, ' '), wrap('= ', join(types, ' | '))], ' ');
    }
  },
  EnumTypeExtension: {
    leave: function leave(_ref37) {
      var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
      return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
    }
  },
  InputObjectTypeExtension: {
    leave: function leave(_ref38) {
      var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
      return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
    }
  }
};
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */

function join(maybeArray) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var _maybeArray$filter$jo;
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function (x) {
    return x;
  }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : '';
}
/**
 * Given array, print each item on its own line, wrapped in an indented `{ }` block.
 */

function block(array) {
  return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */

function wrap(start, maybeString) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return maybeString != null && maybeString !== '' ? start + maybeString + end : '';
}
function indent(str) {
  return wrap('  ', str.replace(/\n/g, '\n  '));
}
function hasMultilineItems(maybeArray) {
  var _maybeArray$some;

  // FIXME: https://github.com/graphql/graphql-js/issues/2203

  /* c8 ignore next */
  return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some(function (str) {
    return str.includes('\n');
  })) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}
},{"./blockString.mjs":"../node_modules/graphql/language/blockString.mjs","./printString.mjs":"../node_modules/graphql/language/printString.mjs","./visitor.mjs":"../node_modules/graphql/language/visitor.mjs"}],"../node_modules/graphql/utilities/valueFromASTUntyped.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueFromASTUntyped = valueFromASTUntyped;
var _keyValMap = require("../jsutils/keyValMap.mjs");
var _kinds = require("../language/kinds.mjs");
/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
 * will reflect the provided GraphQL value AST.
 *
 * | GraphQL Value        | JavaScript Value |
 * | -------------------- | ---------------- |
 * | Input Object         | Object           |
 * | List                 | Array            |
 * | Boolean              | Boolean          |
 * | String / Enum        | String           |
 * | Int / Float          | Number           |
 * | Null                 | null             |
 *
 */

function valueFromASTUntyped(valueNode, variables) {
  switch (valueNode.kind) {
    case _kinds.Kind.NULL:
      return null;
    case _kinds.Kind.INT:
      return parseInt(valueNode.value, 10);
    case _kinds.Kind.FLOAT:
      return parseFloat(valueNode.value);
    case _kinds.Kind.STRING:
    case _kinds.Kind.ENUM:
    case _kinds.Kind.BOOLEAN:
      return valueNode.value;
    case _kinds.Kind.LIST:
      return valueNode.values.map(function (node) {
        return valueFromASTUntyped(node, variables);
      });
    case _kinds.Kind.OBJECT:
      return (0, _keyValMap.keyValMap)(valueNode.fields, function (field) {
        return field.name.value;
      }, function (field) {
        return valueFromASTUntyped(field.value, variables);
      });
    case _kinds.Kind.VARIABLE:
      return variables === null || variables === void 0 ? void 0 : variables[valueNode.name.value];
  }
}
},{"../jsutils/keyValMap.mjs":"../node_modules/graphql/jsutils/keyValMap.mjs","../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs"}],"../node_modules/graphql/type/assertName.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertEnumValueName = assertEnumValueName;
exports.assertName = assertName;
var _devAssert = require("../jsutils/devAssert.mjs");
var _GraphQLError = require("../error/GraphQLError.mjs");
var _characterClasses = require("../language/characterClasses.mjs");
/**
 * Upholds the spec rules about naming.
 */

function assertName(name) {
  name != null || (0, _devAssert.devAssert)(false, 'Must provide name.');
  typeof name === 'string' || (0, _devAssert.devAssert)(false, 'Expected name to be a string.');
  if (name.length === 0) {
    throw new _GraphQLError.GraphQLError('Expected name to be a non-empty string.');
  }
  for (var i = 1; i < name.length; ++i) {
    if (!(0, _characterClasses.isNameContinue)(name.charCodeAt(i))) {
      throw new _GraphQLError.GraphQLError("Names must only contain [_a-zA-Z0-9] but \"".concat(name, "\" does not."));
    }
  }
  if (!(0, _characterClasses.isNameStart)(name.charCodeAt(0))) {
    throw new _GraphQLError.GraphQLError("Names must start with [_a-zA-Z] but \"".concat(name, "\" does not."));
  }
  return name;
}
/**
 * Upholds the spec rules about naming enum values.
 *
 * @internal
 */

function assertEnumValueName(name) {
  if (name === 'true' || name === 'false' || name === 'null') {
    throw new _GraphQLError.GraphQLError("Enum values cannot be named: ".concat(name));
  }
  return assertName(name);
}
},{"../jsutils/devAssert.mjs":"../node_modules/graphql/jsutils/devAssert.mjs","../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../language/characterClasses.mjs":"../node_modules/graphql/language/characterClasses.mjs"}],"../node_modules/graphql/type/definition.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLUnionType = exports.GraphQLScalarType = exports.GraphQLObjectType = exports.GraphQLNonNull = exports.GraphQLList = exports.GraphQLInterfaceType = exports.GraphQLInputObjectType = exports.GraphQLEnumType = void 0;
exports.argsToArgsConfig = argsToArgsConfig;
exports.assertAbstractType = assertAbstractType;
exports.assertCompositeType = assertCompositeType;
exports.assertEnumType = assertEnumType;
exports.assertInputObjectType = assertInputObjectType;
exports.assertInputType = assertInputType;
exports.assertInterfaceType = assertInterfaceType;
exports.assertLeafType = assertLeafType;
exports.assertListType = assertListType;
exports.assertNamedType = assertNamedType;
exports.assertNonNullType = assertNonNullType;
exports.assertNullableType = assertNullableType;
exports.assertObjectType = assertObjectType;
exports.assertOutputType = assertOutputType;
exports.assertScalarType = assertScalarType;
exports.assertType = assertType;
exports.assertUnionType = assertUnionType;
exports.assertWrappingType = assertWrappingType;
exports.defineArguments = defineArguments;
exports.getNamedType = getNamedType;
exports.getNullableType = getNullableType;
exports.isAbstractType = isAbstractType;
exports.isCompositeType = isCompositeType;
exports.isEnumType = isEnumType;
exports.isInputObjectType = isInputObjectType;
exports.isInputType = isInputType;
exports.isInterfaceType = isInterfaceType;
exports.isLeafType = isLeafType;
exports.isListType = isListType;
exports.isNamedType = isNamedType;
exports.isNonNullType = isNonNullType;
exports.isNullableType = isNullableType;
exports.isObjectType = isObjectType;
exports.isOutputType = isOutputType;
exports.isRequiredArgument = isRequiredArgument;
exports.isRequiredInputField = isRequiredInputField;
exports.isScalarType = isScalarType;
exports.isType = isType;
exports.isUnionType = isUnionType;
exports.isWrappingType = isWrappingType;
exports.resolveObjMapThunk = resolveObjMapThunk;
exports.resolveReadonlyArrayThunk = resolveReadonlyArrayThunk;
var _devAssert = require("../jsutils/devAssert.mjs");
var _didYouMean = require("../jsutils/didYouMean.mjs");
var _identityFunc = require("../jsutils/identityFunc.mjs");
var _inspect = require("../jsutils/inspect.mjs");
var _instanceOf = require("../jsutils/instanceOf.mjs");
var _isObjectLike = require("../jsutils/isObjectLike.mjs");
var _keyMap = require("../jsutils/keyMap.mjs");
var _keyValMap = require("../jsutils/keyValMap.mjs");
var _mapValue = require("../jsutils/mapValue.mjs");
var _suggestionList = require("../jsutils/suggestionList.mjs");
var _toObjMap = require("../jsutils/toObjMap.mjs");
var _GraphQLError = require("../error/GraphQLError.mjs");
var _kinds = require("../language/kinds.mjs");
var _printer = require("../language/printer.mjs");
var _valueFromASTUntyped = require("../utilities/valueFromASTUntyped.mjs");
var _assertName = require("./assertName.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function isType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type) || isListType(type) || isNonNullType(type);
}
function assertType(type) {
  if (!isType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL type."));
  }
  return type;
}
/**
 * There are predicates for each kind of GraphQL type.
 */

function isScalarType(type) {
  return (0, _instanceOf.instanceOf)(type, GraphQLScalarType);
}
function assertScalarType(type) {
  if (!isScalarType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL Scalar type."));
  }
  return type;
}
function isObjectType(type) {
  return (0, _instanceOf.instanceOf)(type, GraphQLObjectType);
}
function assertObjectType(type) {
  if (!isObjectType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL Object type."));
  }
  return type;
}
function isInterfaceType(type) {
  return (0, _instanceOf.instanceOf)(type, GraphQLInterfaceType);
}
function assertInterfaceType(type) {
  if (!isInterfaceType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL Interface type."));
  }
  return type;
}
function isUnionType(type) {
  return (0, _instanceOf.instanceOf)(type, GraphQLUnionType);
}
function assertUnionType(type) {
  if (!isUnionType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL Union type."));
  }
  return type;
}
function isEnumType(type) {
  return (0, _instanceOf.instanceOf)(type, GraphQLEnumType);
}
function assertEnumType(type) {
  if (!isEnumType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL Enum type."));
  }
  return type;
}
function isInputObjectType(type) {
  return (0, _instanceOf.instanceOf)(type, GraphQLInputObjectType);
}
function assertInputObjectType(type) {
  if (!isInputObjectType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL Input Object type."));
  }
  return type;
}
function isListType(type) {
  return (0, _instanceOf.instanceOf)(type, GraphQLList);
}
function assertListType(type) {
  if (!isListType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL List type."));
  }
  return type;
}
function isNonNullType(type) {
  return (0, _instanceOf.instanceOf)(type, GraphQLNonNull);
}
function assertNonNullType(type) {
  if (!isNonNullType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL Non-Null type."));
  }
  return type;
}
/**
 * These types may be used as input types for arguments and directives.
 */

function isInputType(type) {
  return isScalarType(type) || isEnumType(type) || isInputObjectType(type) || isWrappingType(type) && isInputType(type.ofType);
}
function assertInputType(type) {
  if (!isInputType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL input type."));
  }
  return type;
}
/**
 * These types may be used as output types as the result of fields.
 */

function isOutputType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isWrappingType(type) && isOutputType(type.ofType);
}
function assertOutputType(type) {
  if (!isOutputType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL output type."));
  }
  return type;
}
/**
 * These types may describe types which may be leaf values.
 */

function isLeafType(type) {
  return isScalarType(type) || isEnumType(type);
}
function assertLeafType(type) {
  if (!isLeafType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL leaf type."));
  }
  return type;
}
/**
 * These types may describe the parent context of a selection set.
 */

function isCompositeType(type) {
  return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
}
function assertCompositeType(type) {
  if (!isCompositeType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL composite type."));
  }
  return type;
}
/**
 * These types may describe the parent context of a selection set.
 */

function isAbstractType(type) {
  return isInterfaceType(type) || isUnionType(type);
}
function assertAbstractType(type) {
  if (!isAbstractType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL abstract type."));
  }
  return type;
}
/**
 * List Type Wrapper
 *
 * A list is a wrapping type which points to another type.
 * Lists are often created within the context of defining the fields of
 * an object type.
 *
 * Example:
 *
 * ```ts
 * const PersonType = new GraphQLObjectType({
 *   name: 'Person',
 *   fields: () => ({
 *     parents: { type: new GraphQLList(PersonType) },
 *     children: { type: new GraphQLList(PersonType) },
 *   })
 * })
 * ```
 */
var GraphQLList = exports.GraphQLList = /*#__PURE__*/function (_Symbol$toStringTag) {
  function GraphQLList(ofType) {
    _classCallCheck(this, GraphQLList);
    isType(ofType) || (0, _devAssert.devAssert)(false, "Expected ".concat((0, _inspect.inspect)(ofType), " to be a GraphQL type."));
    this.ofType = ofType;
  }
  _createClass(GraphQLList, [{
    key: _Symbol$toStringTag,
    get: function get() {
      return 'GraphQLList';
    }
  }, {
    key: "toString",
    value: function toString() {
      return '[' + String(this.ofType) + ']';
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
  }]);
  return GraphQLList;
}(Symbol.toStringTag);
/**
 * Non-Null Type Wrapper
 *
 * A non-null is a wrapping type which points to another type.
 * Non-null types enforce that their values are never null and can ensure
 * an error is raised if this ever occurs during a request. It is useful for
 * fields which you can make a strong guarantee on non-nullability, for example
 * usually the id field of a database row will never be null.
 *
 * Example:
 *
 * ```ts
 * const RowType = new GraphQLObjectType({
 *   name: 'Row',
 *   fields: () => ({
 *     id: { type: new GraphQLNonNull(GraphQLString) },
 *   })
 * })
 * ```
 * Note: the enforcement of non-nullability occurs within the executor.
 */
var GraphQLNonNull = exports.GraphQLNonNull = /*#__PURE__*/function (_Symbol$toStringTag2) {
  function GraphQLNonNull(ofType) {
    _classCallCheck(this, GraphQLNonNull);
    isNullableType(ofType) || (0, _devAssert.devAssert)(false, "Expected ".concat((0, _inspect.inspect)(ofType), " to be a GraphQL nullable type."));
    this.ofType = ofType;
  }
  _createClass(GraphQLNonNull, [{
    key: _Symbol$toStringTag2,
    get: function get() {
      return 'GraphQLNonNull';
    }
  }, {
    key: "toString",
    value: function toString() {
      return String(this.ofType) + '!';
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
  }]);
  return GraphQLNonNull;
}(Symbol.toStringTag);
/**
 * These types wrap and modify other types
 */
function isWrappingType(type) {
  return isListType(type) || isNonNullType(type);
}
function assertWrappingType(type) {
  if (!isWrappingType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL wrapping type."));
  }
  return type;
}
/**
 * These types can all accept null as a value.
 */

function isNullableType(type) {
  return isType(type) && !isNonNullType(type);
}
function assertNullableType(type) {
  if (!isNullableType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL nullable type."));
  }
  return type;
}
function getNullableType(type) {
  if (type) {
    return isNonNullType(type) ? type.ofType : type;
  }
}
/**
 * These named types do not include modifiers like List or NonNull.
 */

function isNamedType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type);
}
function assertNamedType(type) {
  if (!isNamedType(type)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(type), " to be a GraphQL named type."));
  }
  return type;
}
function getNamedType(type) {
  if (type) {
    var unwrappedType = type;
    while (isWrappingType(unwrappedType)) {
      unwrappedType = unwrappedType.ofType;
    }
    return unwrappedType;
  }
}
/**
 * Used while defining GraphQL types to allow for circular references in
 * otherwise immutable type definitions.
 */

function resolveReadonlyArrayThunk(thunk) {
  return typeof thunk === 'function' ? thunk() : thunk;
}
function resolveObjMapThunk(thunk) {
  return typeof thunk === 'function' ? thunk() : thunk;
}
/**
 * Custom extensions
 *
 * @remarks
 * Use a unique identifier name for your extension, for example the name of
 * your library or project. Do not use a shortened identifier as this increases
 * the risk of conflicts. We recommend you add at most one extension field,
 * an object which can contain all the values you need.
 */

/**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * If a type's serialize function returns `null` or does not return a value
 * (i.e. it returns `undefined`) then an error will be raised and a `null`
 * value will be returned in the response. It is always better to validate
 *
 * Example:
 *
 * ```ts
 * const OddType = new GraphQLScalarType({
 *   name: 'Odd',
 *   serialize(value) {
 *     if (!Number.isFinite(value)) {
 *       throw new Error(
 *         `Scalar "Odd" cannot represent "${value}" since it is not a finite number.`,
 *       );
 *     }
 *
 *     if (value % 2 === 0) {
 *       throw new Error(`Scalar "Odd" cannot represent "${value}" since it is even.`);
 *     }
 *     return value;
 *   }
 * });
 * ```
 */
var GraphQLScalarType = exports.GraphQLScalarType = /*#__PURE__*/function (_Symbol$toStringTag3) {
  function GraphQLScalarType(config) {
    _classCallCheck(this, GraphQLScalarType);
    var _config$parseValue, _config$serialize, _config$parseLiteral, _config$extensionASTN;
    var parseValue = (_config$parseValue = config.parseValue) !== null && _config$parseValue !== void 0 ? _config$parseValue : _identityFunc.identityFunc;
    this.name = (0, _assertName.assertName)(config.name);
    this.description = config.description;
    this.specifiedByURL = config.specifiedByURL;
    this.serialize = (_config$serialize = config.serialize) !== null && _config$serialize !== void 0 ? _config$serialize : _identityFunc.identityFunc;
    this.parseValue = parseValue;
    this.parseLiteral = (_config$parseLiteral = config.parseLiteral) !== null && _config$parseLiteral !== void 0 ? _config$parseLiteral : function (node, variables) {
      return parseValue((0, _valueFromASTUntyped.valueFromASTUntyped)(node, variables));
    };
    this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = (_config$extensionASTN = config.extensionASTNodes) !== null && _config$extensionASTN !== void 0 ? _config$extensionASTN : [];
    config.specifiedByURL == null || typeof config.specifiedByURL === 'string' || (0, _devAssert.devAssert)(false, "".concat(this.name, " must provide \"specifiedByURL\" as a string, ") + "but got: ".concat((0, _inspect.inspect)(config.specifiedByURL), "."));
    config.serialize == null || typeof config.serialize === 'function' || (0, _devAssert.devAssert)(false, "".concat(this.name, " must provide \"serialize\" function. If this custom Scalar is also used as an input type, ensure \"parseValue\" and \"parseLiteral\" functions are also provided."));
    if (config.parseLiteral) {
      typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function' || (0, _devAssert.devAssert)(false, "".concat(this.name, " must provide both \"parseValue\" and \"parseLiteral\" functions."));
    }
  }
  _createClass(GraphQLScalarType, [{
    key: _Symbol$toStringTag3,
    get: function get() {
      return 'GraphQLScalarType';
    }
  }, {
    key: "toConfig",
    value: function toConfig() {
      return {
        name: this.name,
        description: this.description,
        specifiedByURL: this.specifiedByURL,
        serialize: this.serialize,
        parseValue: this.parseValue,
        parseLiteral: this.parseLiteral,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.name;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
  }]);
  return GraphQLScalarType;
}(Symbol.toStringTag);
/**
 * Object Type Definition
 *
 * Almost all of the GraphQL types you define will be object types. Object types
 * have a name, but most importantly describe their fields.
 *
 * Example:
 *
 * ```ts
 * const AddressType = new GraphQLObjectType({
 *   name: 'Address',
 *   fields: {
 *     street: { type: GraphQLString },
 *     number: { type: GraphQLInt },
 *     formatted: {
 *       type: GraphQLString,
 *       resolve(obj) {
 *         return obj.number + ' ' + obj.street
 *       }
 *     }
 *   }
 * });
 * ```
 *
 * When two types need to refer to each other, or a type needs to refer to
 * itself in a field, you can use a function expression (aka a closure or a
 * thunk) to supply the fields lazily.
 *
 * Example:
 *
 * ```ts
 * const PersonType = new GraphQLObjectType({
 *   name: 'Person',
 *   fields: () => ({
 *     name: { type: GraphQLString },
 *     bestFriend: { type: PersonType },
 *   })
 * });
 * ```
 */
var GraphQLObjectType = exports.GraphQLObjectType = /*#__PURE__*/function (_Symbol$toStringTag4) {
  function GraphQLObjectType(config) {
    _classCallCheck(this, GraphQLObjectType);
    var _config$extensionASTN2;
    this.name = (0, _assertName.assertName)(config.name);
    this.description = config.description;
    this.isTypeOf = config.isTypeOf;
    this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = (_config$extensionASTN2 = config.extensionASTNodes) !== null && _config$extensionASTN2 !== void 0 ? _config$extensionASTN2 : [];
    this._fields = function () {
      return defineFieldMap(config);
    };
    this._interfaces = function () {
      return defineInterfaces(config);
    };
    config.isTypeOf == null || typeof config.isTypeOf === 'function' || (0, _devAssert.devAssert)(false, "".concat(this.name, " must provide \"isTypeOf\" as a function, ") + "but got: ".concat((0, _inspect.inspect)(config.isTypeOf), "."));
  }
  _createClass(GraphQLObjectType, [{
    key: _Symbol$toStringTag4,
    get: function get() {
      return 'GraphQLObjectType';
    }
  }, {
    key: "getFields",
    value: function getFields() {
      if (typeof this._fields === 'function') {
        this._fields = this._fields();
      }
      return this._fields;
    }
  }, {
    key: "getInterfaces",
    value: function getInterfaces() {
      if (typeof this._interfaces === 'function') {
        this._interfaces = this._interfaces();
      }
      return this._interfaces;
    }
  }, {
    key: "toConfig",
    value: function toConfig() {
      return {
        name: this.name,
        description: this.description,
        interfaces: this.getInterfaces(),
        fields: fieldsToFieldsConfig(this.getFields()),
        isTypeOf: this.isTypeOf,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.name;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
  }]);
  return GraphQLObjectType;
}(Symbol.toStringTag);
function defineInterfaces(config) {
  var _config$interfaces;
  var interfaces = resolveReadonlyArrayThunk((_config$interfaces = config.interfaces) !== null && _config$interfaces !== void 0 ? _config$interfaces : []);
  Array.isArray(interfaces) || (0, _devAssert.devAssert)(false, "".concat(config.name, " interfaces must be an Array or a function which returns an Array."));
  return interfaces;
}
function defineFieldMap(config) {
  var fieldMap = resolveObjMapThunk(config.fields);
  isPlainObj(fieldMap) || (0, _devAssert.devAssert)(false, "".concat(config.name, " fields must be an object with field names as keys or a function which returns such an object."));
  return (0, _mapValue.mapValue)(fieldMap, function (fieldConfig, fieldName) {
    var _fieldConfig$args;
    isPlainObj(fieldConfig) || (0, _devAssert.devAssert)(false, "".concat(config.name, ".").concat(fieldName, " field config must be an object."));
    fieldConfig.resolve == null || typeof fieldConfig.resolve === 'function' || (0, _devAssert.devAssert)(false, "".concat(config.name, ".").concat(fieldName, " field resolver must be a function if ") + "provided, but got: ".concat((0, _inspect.inspect)(fieldConfig.resolve), "."));
    var argsConfig = (_fieldConfig$args = fieldConfig.args) !== null && _fieldConfig$args !== void 0 ? _fieldConfig$args : {};
    isPlainObj(argsConfig) || (0, _devAssert.devAssert)(false, "".concat(config.name, ".").concat(fieldName, " args must be an object with argument names as keys."));
    return {
      name: (0, _assertName.assertName)(fieldName),
      description: fieldConfig.description,
      type: fieldConfig.type,
      args: defineArguments(argsConfig),
      resolve: fieldConfig.resolve,
      subscribe: fieldConfig.subscribe,
      deprecationReason: fieldConfig.deprecationReason,
      extensions: (0, _toObjMap.toObjMap)(fieldConfig.extensions),
      astNode: fieldConfig.astNode
    };
  });
}
function defineArguments(config) {
  return Object.entries(config).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      argName = _ref2[0],
      argConfig = _ref2[1];
    return {
      name: (0, _assertName.assertName)(argName),
      description: argConfig.description,
      type: argConfig.type,
      defaultValue: argConfig.defaultValue,
      deprecationReason: argConfig.deprecationReason,
      extensions: (0, _toObjMap.toObjMap)(argConfig.extensions),
      astNode: argConfig.astNode
    };
  });
}
function isPlainObj(obj) {
  return (0, _isObjectLike.isObjectLike)(obj) && !Array.isArray(obj);
}
function fieldsToFieldsConfig(fields) {
  return (0, _mapValue.mapValue)(fields, function (field) {
    return {
      description: field.description,
      type: field.type,
      args: argsToArgsConfig(field.args),
      resolve: field.resolve,
      subscribe: field.subscribe,
      deprecationReason: field.deprecationReason,
      extensions: field.extensions,
      astNode: field.astNode
    };
  });
}
/**
 * @internal
 */

function argsToArgsConfig(args) {
  return (0, _keyValMap.keyValMap)(args, function (arg) {
    return arg.name;
  }, function (arg) {
    return {
      description: arg.description,
      type: arg.type,
      defaultValue: arg.defaultValue,
      deprecationReason: arg.deprecationReason,
      extensions: arg.extensions,
      astNode: arg.astNode
    };
  });
}
function isRequiredArgument(arg) {
  return isNonNullType(arg.type) && arg.defaultValue === undefined;
}

/**
 * Interface Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Interface type
 * is used to describe what types are possible, what fields are in common across
 * all types, as well as a function to determine which type is actually used
 * when the field is resolved.
 *
 * Example:
 *
 * ```ts
 * const EntityType = new GraphQLInterfaceType({
 *   name: 'Entity',
 *   fields: {
 *     name: { type: GraphQLString }
 *   }
 * });
 * ```
 */
var GraphQLInterfaceType = exports.GraphQLInterfaceType = /*#__PURE__*/function (_Symbol$toStringTag5) {
  function GraphQLInterfaceType(config) {
    _classCallCheck(this, GraphQLInterfaceType);
    var _config$extensionASTN3;
    this.name = (0, _assertName.assertName)(config.name);
    this.description = config.description;
    this.resolveType = config.resolveType;
    this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = (_config$extensionASTN3 = config.extensionASTNodes) !== null && _config$extensionASTN3 !== void 0 ? _config$extensionASTN3 : [];
    this._fields = defineFieldMap.bind(undefined, config);
    this._interfaces = defineInterfaces.bind(undefined, config);
    config.resolveType == null || typeof config.resolveType === 'function' || (0, _devAssert.devAssert)(false, "".concat(this.name, " must provide \"resolveType\" as a function, ") + "but got: ".concat((0, _inspect.inspect)(config.resolveType), "."));
  }
  _createClass(GraphQLInterfaceType, [{
    key: _Symbol$toStringTag5,
    get: function get() {
      return 'GraphQLInterfaceType';
    }
  }, {
    key: "getFields",
    value: function getFields() {
      if (typeof this._fields === 'function') {
        this._fields = this._fields();
      }
      return this._fields;
    }
  }, {
    key: "getInterfaces",
    value: function getInterfaces() {
      if (typeof this._interfaces === 'function') {
        this._interfaces = this._interfaces();
      }
      return this._interfaces;
    }
  }, {
    key: "toConfig",
    value: function toConfig() {
      return {
        name: this.name,
        description: this.description,
        interfaces: this.getInterfaces(),
        fields: fieldsToFieldsConfig(this.getFields()),
        resolveType: this.resolveType,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.name;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
  }]);
  return GraphQLInterfaceType;
}(Symbol.toStringTag);
/**
 * Union Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Union type
 * is used to describe what types are possible as well as providing a function
 * to determine which type is actually used when the field is resolved.
 *
 * Example:
 *
 * ```ts
 * const PetType = new GraphQLUnionType({
 *   name: 'Pet',
 *   types: [ DogType, CatType ],
 *   resolveType(value) {
 *     if (value instanceof Dog) {
 *       return DogType;
 *     }
 *     if (value instanceof Cat) {
 *       return CatType;
 *     }
 *   }
 * });
 * ```
 */
var GraphQLUnionType = exports.GraphQLUnionType = /*#__PURE__*/function (_Symbol$toStringTag6) {
  function GraphQLUnionType(config) {
    _classCallCheck(this, GraphQLUnionType);
    var _config$extensionASTN4;
    this.name = (0, _assertName.assertName)(config.name);
    this.description = config.description;
    this.resolveType = config.resolveType;
    this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = (_config$extensionASTN4 = config.extensionASTNodes) !== null && _config$extensionASTN4 !== void 0 ? _config$extensionASTN4 : [];
    this._types = defineTypes.bind(undefined, config);
    config.resolveType == null || typeof config.resolveType === 'function' || (0, _devAssert.devAssert)(false, "".concat(this.name, " must provide \"resolveType\" as a function, ") + "but got: ".concat((0, _inspect.inspect)(config.resolveType), "."));
  }
  _createClass(GraphQLUnionType, [{
    key: _Symbol$toStringTag6,
    get: function get() {
      return 'GraphQLUnionType';
    }
  }, {
    key: "getTypes",
    value: function getTypes() {
      if (typeof this._types === 'function') {
        this._types = this._types();
      }
      return this._types;
    }
  }, {
    key: "toConfig",
    value: function toConfig() {
      return {
        name: this.name,
        description: this.description,
        types: this.getTypes(),
        resolveType: this.resolveType,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.name;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
  }]);
  return GraphQLUnionType;
}(Symbol.toStringTag);
function defineTypes(config) {
  var types = resolveReadonlyArrayThunk(config.types);
  Array.isArray(types) || (0, _devAssert.devAssert)(false, "Must provide Array of types or a function which returns such an array for Union ".concat(config.name, "."));
  return types;
}

/**
 * Enum Type Definition
 *
 * Some leaf values of requests and input values are Enums. GraphQL serializes
 * Enum values as strings, however internally Enums can be represented by any
 * kind of type, often integers.
 *
 * Example:
 *
 * ```ts
 * const RGBType = new GraphQLEnumType({
 *   name: 'RGB',
 *   values: {
 *     RED: { value: 0 },
 *     GREEN: { value: 1 },
 *     BLUE: { value: 2 }
 *   }
 * });
 * ```
 *
 * Note: If a value is not provided in a definition, the name of the enum value
 * will be used as its internal value.
 */
var GraphQLEnumType = exports.GraphQLEnumType = /*#__PURE__*/function (_Symbol$toStringTag7) {
  /* <T> */
  function GraphQLEnumType(config) {
    _classCallCheck(this, GraphQLEnumType);
    var _config$extensionASTN5;
    this.name = (0, _assertName.assertName)(config.name);
    this.description = config.description;
    this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = (_config$extensionASTN5 = config.extensionASTNodes) !== null && _config$extensionASTN5 !== void 0 ? _config$extensionASTN5 : [];
    this._values = defineEnumValues(this.name, config.values);
    this._valueLookup = new Map(this._values.map(function (enumValue) {
      return [enumValue.value, enumValue];
    }));
    this._nameLookup = (0, _keyMap.keyMap)(this._values, function (value) {
      return value.name;
    });
  }
  _createClass(GraphQLEnumType, [{
    key: _Symbol$toStringTag7,
    get: function get() {
      return 'GraphQLEnumType';
    }
  }, {
    key: "getValues",
    value: function getValues() {
      return this._values;
    }
  }, {
    key: "getValue",
    value: function getValue(name) {
      return this._nameLookup[name];
    }
  }, {
    key: "serialize",
    value: function serialize(outputValue) {
      var enumValue = this._valueLookup.get(outputValue);
      if (enumValue === undefined) {
        throw new _GraphQLError.GraphQLError("Enum \"".concat(this.name, "\" cannot represent value: ").concat((0, _inspect.inspect)(outputValue)));
      }
      return enumValue.name;
    }
  }, {
    key: "parseValue",
    value: function parseValue(inputValue) /* T */
    {
      if (typeof inputValue !== 'string') {
        var valueStr = (0, _inspect.inspect)(inputValue);
        throw new _GraphQLError.GraphQLError("Enum \"".concat(this.name, "\" cannot represent non-string value: ").concat(valueStr, ".") + didYouMeanEnumValue(this, valueStr));
      }
      var enumValue = this.getValue(inputValue);
      if (enumValue == null) {
        throw new _GraphQLError.GraphQLError("Value \"".concat(inputValue, "\" does not exist in \"").concat(this.name, "\" enum.") + didYouMeanEnumValue(this, inputValue));
      }
      return enumValue.value;
    }
  }, {
    key: "parseLiteral",
    value: function parseLiteral(valueNode, _variables) /* T */
    {
      // Note: variables will be resolved to a value before calling this function.
      if (valueNode.kind !== _kinds.Kind.ENUM) {
        var valueStr = (0, _printer.print)(valueNode);
        throw new _GraphQLError.GraphQLError("Enum \"".concat(this.name, "\" cannot represent non-enum value: ").concat(valueStr, ".") + didYouMeanEnumValue(this, valueStr), {
          nodes: valueNode
        });
      }
      var enumValue = this.getValue(valueNode.value);
      if (enumValue == null) {
        var _valueStr = (0, _printer.print)(valueNode);
        throw new _GraphQLError.GraphQLError("Value \"".concat(_valueStr, "\" does not exist in \"").concat(this.name, "\" enum.") + didYouMeanEnumValue(this, _valueStr), {
          nodes: valueNode
        });
      }
      return enumValue.value;
    }
  }, {
    key: "toConfig",
    value: function toConfig() {
      var values = (0, _keyValMap.keyValMap)(this.getValues(), function (value) {
        return value.name;
      }, function (value) {
        return {
          description: value.description,
          value: value.value,
          deprecationReason: value.deprecationReason,
          extensions: value.extensions,
          astNode: value.astNode
        };
      });
      return {
        name: this.name,
        description: this.description,
        values: values,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.name;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
  }]);
  return GraphQLEnumType;
}(Symbol.toStringTag);
function didYouMeanEnumValue(enumType, unknownValueStr) {
  var allNames = enumType.getValues().map(function (value) {
    return value.name;
  });
  var suggestedValues = (0, _suggestionList.suggestionList)(unknownValueStr, allNames);
  return (0, _didYouMean.didYouMean)('the enum value', suggestedValues);
}
function defineEnumValues(typeName, valueMap) {
  isPlainObj(valueMap) || (0, _devAssert.devAssert)(false, "".concat(typeName, " values must be an object with value names as keys."));
  return Object.entries(valueMap).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      valueName = _ref4[0],
      valueConfig = _ref4[1];
    isPlainObj(valueConfig) || (0, _devAssert.devAssert)(false, "".concat(typeName, ".").concat(valueName, " must refer to an object with a \"value\" key ") + "representing an internal value but got: ".concat((0, _inspect.inspect)(valueConfig), "."));
    return {
      name: (0, _assertName.assertEnumValueName)(valueName),
      description: valueConfig.description,
      value: valueConfig.value !== undefined ? valueConfig.value : valueName,
      deprecationReason: valueConfig.deprecationReason,
      extensions: (0, _toObjMap.toObjMap)(valueConfig.extensions),
      astNode: valueConfig.astNode
    };
  });
}

/**
 * Input Object Type Definition
 *
 * An input object defines a structured collection of fields which may be
 * supplied to a field argument.
 *
 * Using `NonNull` will ensure that a value must be provided by the query
 *
 * Example:
 *
 * ```ts
 * const GeoPoint = new GraphQLInputObjectType({
 *   name: 'GeoPoint',
 *   fields: {
 *     lat: { type: new GraphQLNonNull(GraphQLFloat) },
 *     lon: { type: new GraphQLNonNull(GraphQLFloat) },
 *     alt: { type: GraphQLFloat, defaultValue: 0 },
 *   }
 * });
 * ```
 */
var GraphQLInputObjectType = exports.GraphQLInputObjectType = /*#__PURE__*/function (_Symbol$toStringTag8) {
  function GraphQLInputObjectType(config) {
    _classCallCheck(this, GraphQLInputObjectType);
    var _config$extensionASTN6;
    this.name = (0, _assertName.assertName)(config.name);
    this.description = config.description;
    this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = (_config$extensionASTN6 = config.extensionASTNodes) !== null && _config$extensionASTN6 !== void 0 ? _config$extensionASTN6 : [];
    this._fields = defineInputFieldMap.bind(undefined, config);
  }
  _createClass(GraphQLInputObjectType, [{
    key: _Symbol$toStringTag8,
    get: function get() {
      return 'GraphQLInputObjectType';
    }
  }, {
    key: "getFields",
    value: function getFields() {
      if (typeof this._fields === 'function') {
        this._fields = this._fields();
      }
      return this._fields;
    }
  }, {
    key: "toConfig",
    value: function toConfig() {
      var fields = (0, _mapValue.mapValue)(this.getFields(), function (field) {
        return {
          description: field.description,
          type: field.type,
          defaultValue: field.defaultValue,
          deprecationReason: field.deprecationReason,
          extensions: field.extensions,
          astNode: field.astNode
        };
      });
      return {
        name: this.name,
        description: this.description,
        fields: fields,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.name;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
  }]);
  return GraphQLInputObjectType;
}(Symbol.toStringTag);
function defineInputFieldMap(config) {
  var fieldMap = resolveObjMapThunk(config.fields);
  isPlainObj(fieldMap) || (0, _devAssert.devAssert)(false, "".concat(config.name, " fields must be an object with field names as keys or a function which returns such an object."));
  return (0, _mapValue.mapValue)(fieldMap, function (fieldConfig, fieldName) {
    !('resolve' in fieldConfig) || (0, _devAssert.devAssert)(false, "".concat(config.name, ".").concat(fieldName, " field has a resolve property, but Input Types cannot define resolvers."));
    return {
      name: (0, _assertName.assertName)(fieldName),
      description: fieldConfig.description,
      type: fieldConfig.type,
      defaultValue: fieldConfig.defaultValue,
      deprecationReason: fieldConfig.deprecationReason,
      extensions: (0, _toObjMap.toObjMap)(fieldConfig.extensions),
      astNode: fieldConfig.astNode
    };
  });
}
function isRequiredInputField(field) {
  return isNonNullType(field.type) && field.defaultValue === undefined;
}
},{"../jsutils/devAssert.mjs":"../node_modules/graphql/jsutils/devAssert.mjs","../jsutils/didYouMean.mjs":"../node_modules/graphql/jsutils/didYouMean.mjs","../jsutils/identityFunc.mjs":"../node_modules/graphql/jsutils/identityFunc.mjs","../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/instanceOf.mjs":"../node_modules/graphql/jsutils/instanceOf.mjs","../jsutils/isObjectLike.mjs":"../node_modules/graphql/jsutils/isObjectLike.mjs","../jsutils/keyMap.mjs":"../node_modules/graphql/jsutils/keyMap.mjs","../jsutils/keyValMap.mjs":"../node_modules/graphql/jsutils/keyValMap.mjs","../jsutils/mapValue.mjs":"../node_modules/graphql/jsutils/mapValue.mjs","../jsutils/suggestionList.mjs":"../node_modules/graphql/jsutils/suggestionList.mjs","../jsutils/toObjMap.mjs":"../node_modules/graphql/jsutils/toObjMap.mjs","../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../language/printer.mjs":"../node_modules/graphql/language/printer.mjs","../utilities/valueFromASTUntyped.mjs":"../node_modules/graphql/utilities/valueFromASTUntyped.mjs","./assertName.mjs":"../node_modules/graphql/type/assertName.mjs"}],"../node_modules/graphql/utilities/typeComparators.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doTypesOverlap = doTypesOverlap;
exports.isEqualType = isEqualType;
exports.isTypeSubTypeOf = isTypeSubTypeOf;
var _definition = require("../type/definition.mjs");
/**
 * Provided two types, return true if the types are equal (invariant).
 */
function isEqualType(typeA, typeB) {
  // Equivalent types are equal.
  if (typeA === typeB) {
    return true;
  } // If either type is non-null, the other must also be non-null.

  if ((0, _definition.isNonNullType)(typeA) && (0, _definition.isNonNullType)(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  } // If either type is a list, the other must also be a list.

  if ((0, _definition.isListType)(typeA) && (0, _definition.isListType)(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  } // Otherwise the types are not equal.

  return false;
}
/**
 * Provided a type and a super type, return true if the first type is either
 * equal or a subset of the second super type (covariant).
 */

function isTypeSubTypeOf(schema, maybeSubType, superType) {
  // Equivalent type is a valid subtype
  if (maybeSubType === superType) {
    return true;
  } // If superType is non-null, maybeSubType must also be non-null.

  if ((0, _definition.isNonNullType)(superType)) {
    if ((0, _definition.isNonNullType)(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }
    return false;
  }
  if ((0, _definition.isNonNullType)(maybeSubType)) {
    // If superType is nullable, maybeSubType may be non-null or nullable.
    return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
  } // If superType type is a list, maybeSubType type must also be a list.

  if ((0, _definition.isListType)(superType)) {
    if ((0, _definition.isListType)(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }
    return false;
  }
  if ((0, _definition.isListType)(maybeSubType)) {
    // If superType is not a list, maybeSubType must also be not a list.
    return false;
  } // If superType type is an abstract type, check if it is super type of maybeSubType.
  // Otherwise, the child type is not a valid subtype of the parent type.

  return (0, _definition.isAbstractType)(superType) && ((0, _definition.isInterfaceType)(maybeSubType) || (0, _definition.isObjectType)(maybeSubType)) && schema.isSubType(superType, maybeSubType);
}
/**
 * Provided two composite types, determine if they "overlap". Two composite
 * types overlap when the Sets of possible concrete types for each intersect.
 *
 * This is often used to determine if a fragment of a given type could possibly
 * be visited in a context of another type.
 *
 * This function is commutative.
 */

function doTypesOverlap(schema, typeA, typeB) {
  // Equivalent types overlap
  if (typeA === typeB) {
    return true;
  }
  if ((0, _definition.isAbstractType)(typeA)) {
    if ((0, _definition.isAbstractType)(typeB)) {
      // If both types are abstract, then determine if there is any intersection
      // between possible concrete types of each.
      return schema.getPossibleTypes(typeA).some(function (type) {
        return schema.isSubType(typeB, type);
      });
    } // Determine if the latter type is a possible concrete type of the former.

    return schema.isSubType(typeA, typeB);
  }
  if ((0, _definition.isAbstractType)(typeB)) {
    // Determine if the former type is a possible concrete type of the latter.
    return schema.isSubType(typeB, typeA);
  } // Otherwise the types do not overlap.

  return false;
}
},{"../type/definition.mjs":"../node_modules/graphql/type/definition.mjs"}],"../node_modules/graphql/type/scalars.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLString = exports.GraphQLInt = exports.GraphQLID = exports.GraphQLFloat = exports.GraphQLBoolean = exports.GRAPHQL_MIN_INT = exports.GRAPHQL_MAX_INT = void 0;
exports.isSpecifiedScalarType = isSpecifiedScalarType;
exports.specifiedScalarTypes = void 0;
var _inspect = require("../jsutils/inspect.mjs");
var _isObjectLike = require("../jsutils/isObjectLike.mjs");
var _GraphQLError = require("../error/GraphQLError.mjs");
var _kinds = require("../language/kinds.mjs");
var _printer = require("../language/printer.mjs");
var _definition = require("./definition.mjs");
/**
 * Maximum possible Int value as per GraphQL Spec (32-bit signed integer).
 * n.b. This differs from JavaScript's numbers that are IEEE 754 doubles safe up-to 2^53 - 1
 * */

var GRAPHQL_MAX_INT = exports.GRAPHQL_MAX_INT = 2147483647;
/**
 * Minimum possible Int value as per GraphQL Spec (32-bit signed integer).
 * n.b. This differs from JavaScript's numbers that are IEEE 754 doubles safe starting at -(2^53 - 1)
 * */

var GRAPHQL_MIN_INT = exports.GRAPHQL_MIN_INT = -2147483648;
var GraphQLInt = exports.GraphQLInt = new _definition.GraphQLScalarType({
  name: 'Int',
  description: 'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
  serialize: function serialize(outputValue) {
    var coercedValue = serializeObject(outputValue);
    if (typeof coercedValue === 'boolean') {
      return coercedValue ? 1 : 0;
    }
    var num = coercedValue;
    if (typeof coercedValue === 'string' && coercedValue !== '') {
      num = Number(coercedValue);
    }
    if (typeof num !== 'number' || !Number.isInteger(num)) {
      throw new _GraphQLError.GraphQLError("Int cannot represent non-integer value: ".concat((0, _inspect.inspect)(coercedValue)));
    }
    if (num > GRAPHQL_MAX_INT || num < GRAPHQL_MIN_INT) {
      throw new _GraphQLError.GraphQLError('Int cannot represent non 32-bit signed integer value: ' + (0, _inspect.inspect)(coercedValue));
    }
    return num;
  },
  parseValue: function parseValue(inputValue) {
    if (typeof inputValue !== 'number' || !Number.isInteger(inputValue)) {
      throw new _GraphQLError.GraphQLError("Int cannot represent non-integer value: ".concat((0, _inspect.inspect)(inputValue)));
    }
    if (inputValue > GRAPHQL_MAX_INT || inputValue < GRAPHQL_MIN_INT) {
      throw new _GraphQLError.GraphQLError("Int cannot represent non 32-bit signed integer value: ".concat(inputValue));
    }
    return inputValue;
  },
  parseLiteral: function parseLiteral(valueNode) {
    if (valueNode.kind !== _kinds.Kind.INT) {
      throw new _GraphQLError.GraphQLError("Int cannot represent non-integer value: ".concat((0, _printer.print)(valueNode)), {
        nodes: valueNode
      });
    }
    var num = parseInt(valueNode.value, 10);
    if (num > GRAPHQL_MAX_INT || num < GRAPHQL_MIN_INT) {
      throw new _GraphQLError.GraphQLError("Int cannot represent non 32-bit signed integer value: ".concat(valueNode.value), {
        nodes: valueNode
      });
    }
    return num;
  }
});
var GraphQLFloat = exports.GraphQLFloat = new _definition.GraphQLScalarType({
  name: 'Float',
  description: 'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).',
  serialize: function serialize(outputValue) {
    var coercedValue = serializeObject(outputValue);
    if (typeof coercedValue === 'boolean') {
      return coercedValue ? 1 : 0;
    }
    var num = coercedValue;
    if (typeof coercedValue === 'string' && coercedValue !== '') {
      num = Number(coercedValue);
    }
    if (typeof num !== 'number' || !Number.isFinite(num)) {
      throw new _GraphQLError.GraphQLError("Float cannot represent non numeric value: ".concat((0, _inspect.inspect)(coercedValue)));
    }
    return num;
  },
  parseValue: function parseValue(inputValue) {
    if (typeof inputValue !== 'number' || !Number.isFinite(inputValue)) {
      throw new _GraphQLError.GraphQLError("Float cannot represent non numeric value: ".concat((0, _inspect.inspect)(inputValue)));
    }
    return inputValue;
  },
  parseLiteral: function parseLiteral(valueNode) {
    if (valueNode.kind !== _kinds.Kind.FLOAT && valueNode.kind !== _kinds.Kind.INT) {
      throw new _GraphQLError.GraphQLError("Float cannot represent non numeric value: ".concat((0, _printer.print)(valueNode)), valueNode);
    }
    return parseFloat(valueNode.value);
  }
});
var GraphQLString = exports.GraphQLString = new _definition.GraphQLScalarType({
  name: 'String',
  description: 'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
  serialize: function serialize(outputValue) {
    var coercedValue = serializeObject(outputValue); // Serialize string, boolean and number values to a string, but do not
    // attempt to coerce object, function, symbol, or other types as strings.

    if (typeof coercedValue === 'string') {
      return coercedValue;
    }
    if (typeof coercedValue === 'boolean') {
      return coercedValue ? 'true' : 'false';
    }
    if (typeof coercedValue === 'number' && Number.isFinite(coercedValue)) {
      return coercedValue.toString();
    }
    throw new _GraphQLError.GraphQLError("String cannot represent value: ".concat((0, _inspect.inspect)(outputValue)));
  },
  parseValue: function parseValue(inputValue) {
    if (typeof inputValue !== 'string') {
      throw new _GraphQLError.GraphQLError("String cannot represent a non string value: ".concat((0, _inspect.inspect)(inputValue)));
    }
    return inputValue;
  },
  parseLiteral: function parseLiteral(valueNode) {
    if (valueNode.kind !== _kinds.Kind.STRING) {
      throw new _GraphQLError.GraphQLError("String cannot represent a non string value: ".concat((0, _printer.print)(valueNode)), {
        nodes: valueNode
      });
    }
    return valueNode.value;
  }
});
var GraphQLBoolean = exports.GraphQLBoolean = new _definition.GraphQLScalarType({
  name: 'Boolean',
  description: 'The `Boolean` scalar type represents `true` or `false`.',
  serialize: function serialize(outputValue) {
    var coercedValue = serializeObject(outputValue);
    if (typeof coercedValue === 'boolean') {
      return coercedValue;
    }
    if (Number.isFinite(coercedValue)) {
      return coercedValue !== 0;
    }
    throw new _GraphQLError.GraphQLError("Boolean cannot represent a non boolean value: ".concat((0, _inspect.inspect)(coercedValue)));
  },
  parseValue: function parseValue(inputValue) {
    if (typeof inputValue !== 'boolean') {
      throw new _GraphQLError.GraphQLError("Boolean cannot represent a non boolean value: ".concat((0, _inspect.inspect)(inputValue)));
    }
    return inputValue;
  },
  parseLiteral: function parseLiteral(valueNode) {
    if (valueNode.kind !== _kinds.Kind.BOOLEAN) {
      throw new _GraphQLError.GraphQLError("Boolean cannot represent a non boolean value: ".concat((0, _printer.print)(valueNode)), {
        nodes: valueNode
      });
    }
    return valueNode.value;
  }
});
var GraphQLID = exports.GraphQLID = new _definition.GraphQLScalarType({
  name: 'ID',
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize: function serialize(outputValue) {
    var coercedValue = serializeObject(outputValue);
    if (typeof coercedValue === 'string') {
      return coercedValue;
    }
    if (Number.isInteger(coercedValue)) {
      return String(coercedValue);
    }
    throw new _GraphQLError.GraphQLError("ID cannot represent value: ".concat((0, _inspect.inspect)(outputValue)));
  },
  parseValue: function parseValue(inputValue) {
    if (typeof inputValue === 'string') {
      return inputValue;
    }
    if (typeof inputValue === 'number' && Number.isInteger(inputValue)) {
      return inputValue.toString();
    }
    throw new _GraphQLError.GraphQLError("ID cannot represent value: ".concat((0, _inspect.inspect)(inputValue)));
  },
  parseLiteral: function parseLiteral(valueNode) {
    if (valueNode.kind !== _kinds.Kind.STRING && valueNode.kind !== _kinds.Kind.INT) {
      throw new _GraphQLError.GraphQLError('ID cannot represent a non-string and non-integer value: ' + (0, _printer.print)(valueNode), {
        nodes: valueNode
      });
    }
    return valueNode.value;
  }
});
var specifiedScalarTypes = exports.specifiedScalarTypes = Object.freeze([GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLID]);
function isSpecifiedScalarType(type) {
  return specifiedScalarTypes.some(function (_ref) {
    var name = _ref.name;
    return type.name === name;
  });
} // Support serializing objects with custom valueOf() or toJSON() functions -
// a common way to represent a complex value which can be represented as
// a string (ex: MongoDB id objects).

function serializeObject(outputValue) {
  if ((0, _isObjectLike.isObjectLike)(outputValue)) {
    if (typeof outputValue.valueOf === 'function') {
      var valueOfResult = outputValue.valueOf();
      if (!(0, _isObjectLike.isObjectLike)(valueOfResult)) {
        return valueOfResult;
      }
    }
    if (typeof outputValue.toJSON === 'function') {
      return outputValue.toJSON();
    }
  }
  return outputValue;
}
},{"../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/isObjectLike.mjs":"../node_modules/graphql/jsutils/isObjectLike.mjs","../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../language/printer.mjs":"../node_modules/graphql/language/printer.mjs","./definition.mjs":"../node_modules/graphql/type/definition.mjs"}],"../node_modules/graphql/type/directives.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLSpecifiedByDirective = exports.GraphQLSkipDirective = exports.GraphQLIncludeDirective = exports.GraphQLDirective = exports.GraphQLDeprecatedDirective = exports.DEFAULT_DEPRECATION_REASON = void 0;
exports.assertDirective = assertDirective;
exports.isDirective = isDirective;
exports.isSpecifiedDirective = isSpecifiedDirective;
exports.specifiedDirectives = void 0;
var _devAssert = require("../jsutils/devAssert.mjs");
var _inspect = require("../jsutils/inspect.mjs");
var _instanceOf = require("../jsutils/instanceOf.mjs");
var _isObjectLike = require("../jsutils/isObjectLike.mjs");
var _toObjMap = require("../jsutils/toObjMap.mjs");
var _directiveLocation = require("../language/directiveLocation.mjs");
var _assertName = require("./assertName.mjs");
var _definition = require("./definition.mjs");
var _scalars = require("./scalars.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Test if the given value is a GraphQL directive.
 */

function isDirective(directive) {
  return (0, _instanceOf.instanceOf)(directive, GraphQLDirective);
}
function assertDirective(directive) {
  if (!isDirective(directive)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(directive), " to be a GraphQL directive."));
  }
  return directive;
}
/**
 * Custom extensions
 *
 * @remarks
 * Use a unique identifier name for your extension, for example the name of
 * your library or project. Do not use a shortened identifier as this increases
 * the risk of conflicts. We recommend you add at most one extension field,
 * an object which can contain all the values you need.
 */

/**
 * Directives are used by the GraphQL runtime as a way of modifying execution
 * behavior. Type system creators will usually not create these directly.
 */
var GraphQLDirective = exports.GraphQLDirective = /*#__PURE__*/function (_Symbol$toStringTag) {
  function GraphQLDirective(config) {
    _classCallCheck(this, GraphQLDirective);
    var _config$isRepeatable, _config$args;
    this.name = (0, _assertName.assertName)(config.name);
    this.description = config.description;
    this.locations = config.locations;
    this.isRepeatable = (_config$isRepeatable = config.isRepeatable) !== null && _config$isRepeatable !== void 0 ? _config$isRepeatable : false;
    this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
    this.astNode = config.astNode;
    Array.isArray(config.locations) || (0, _devAssert.devAssert)(false, "@".concat(config.name, " locations must be an Array."));
    var args = (_config$args = config.args) !== null && _config$args !== void 0 ? _config$args : {};
    (0, _isObjectLike.isObjectLike)(args) && !Array.isArray(args) || (0, _devAssert.devAssert)(false, "@".concat(config.name, " args must be an object with argument names as keys."));
    this.args = (0, _definition.defineArguments)(args);
  }
  _createClass(GraphQLDirective, [{
    key: _Symbol$toStringTag,
    get: function get() {
      return 'GraphQLDirective';
    }
  }, {
    key: "toConfig",
    value: function toConfig() {
      return {
        name: this.name,
        description: this.description,
        locations: this.locations,
        args: (0, _definition.argsToArgsConfig)(this.args),
        isRepeatable: this.isRepeatable,
        extensions: this.extensions,
        astNode: this.astNode
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return '@' + this.name;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
  }]);
  return GraphQLDirective;
}(Symbol.toStringTag);
/**
 * Used to conditionally include fields or fragments.
 */
var GraphQLIncludeDirective = exports.GraphQLIncludeDirective = new GraphQLDirective({
  name: 'include',
  description: 'Directs the executor to include this field or fragment only when the `if` argument is true.',
  locations: [_directiveLocation.DirectiveLocation.FIELD, _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD, _directiveLocation.DirectiveLocation.INLINE_FRAGMENT],
  args: {
    if: {
      type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
      description: 'Included when true.'
    }
  }
});
/**
 * Used to conditionally skip (exclude) fields or fragments.
 */

var GraphQLSkipDirective = exports.GraphQLSkipDirective = new GraphQLDirective({
  name: 'skip',
  description: 'Directs the executor to skip this field or fragment when the `if` argument is true.',
  locations: [_directiveLocation.DirectiveLocation.FIELD, _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD, _directiveLocation.DirectiveLocation.INLINE_FRAGMENT],
  args: {
    if: {
      type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
      description: 'Skipped when true.'
    }
  }
});
/**
 * Constant string used for default reason for a deprecation.
 */

var DEFAULT_DEPRECATION_REASON = exports.DEFAULT_DEPRECATION_REASON = 'No longer supported';
/**
 * Used to declare element of a GraphQL schema as deprecated.
 */

var GraphQLDeprecatedDirective = exports.GraphQLDeprecatedDirective = new GraphQLDirective({
  name: 'deprecated',
  description: 'Marks an element of a GraphQL schema as no longer supported.',
  locations: [_directiveLocation.DirectiveLocation.FIELD_DEFINITION, _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION, _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION, _directiveLocation.DirectiveLocation.ENUM_VALUE],
  args: {
    reason: {
      type: _scalars.GraphQLString,
      description: 'Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).',
      defaultValue: DEFAULT_DEPRECATION_REASON
    }
  }
});
/**
 * Used to provide a URL for specifying the behavior of custom scalar definitions.
 */

var GraphQLSpecifiedByDirective = exports.GraphQLSpecifiedByDirective = new GraphQLDirective({
  name: 'specifiedBy',
  description: 'Exposes a URL that specifies the behavior of this scalar.',
  locations: [_directiveLocation.DirectiveLocation.SCALAR],
  args: {
    url: {
      type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
      description: 'The URL that specifies the behavior of this scalar.'
    }
  }
});
/**
 * The full list of specified directives.
 */

var specifiedDirectives = exports.specifiedDirectives = Object.freeze([GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective, GraphQLSpecifiedByDirective]);
function isSpecifiedDirective(directive) {
  return specifiedDirectives.some(function (_ref) {
    var name = _ref.name;
    return name === directive.name;
  });
}
},{"../jsutils/devAssert.mjs":"../node_modules/graphql/jsutils/devAssert.mjs","../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/instanceOf.mjs":"../node_modules/graphql/jsutils/instanceOf.mjs","../jsutils/isObjectLike.mjs":"../node_modules/graphql/jsutils/isObjectLike.mjs","../jsutils/toObjMap.mjs":"../node_modules/graphql/jsutils/toObjMap.mjs","../language/directiveLocation.mjs":"../node_modules/graphql/language/directiveLocation.mjs","./assertName.mjs":"../node_modules/graphql/type/assertName.mjs","./definition.mjs":"../node_modules/graphql/type/definition.mjs","./scalars.mjs":"../node_modules/graphql/type/scalars.mjs"}],"../node_modules/graphql/jsutils/isIterableObject.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIterableObject = isIterableObject;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Returns true if the provided object is an Object (i.e. not a string literal)
 * and implements the Iterator protocol.
 *
 * This may be used in place of [Array.isArray()][isArray] to determine if
 * an object should be iterated-over e.g. Array, Map, Set, Int8Array,
 * TypedArray, etc. but excludes string literals.
 *
 * @example
 * ```ts
 * isIterableObject([ 1, 2, 3 ]) // true
 * isIterableObject(new Map()) // true
 * isIterableObject('ABC') // false
 * isIterableObject({ key: 'value' }) // false
 * isIterableObject({ length: 1, 0: 'Alpha' }) // false
 * ```
 */
function isIterableObject(maybeIterable) {
  return _typeof(maybeIterable) === 'object' && typeof (maybeIterable === null || maybeIterable === void 0 ? void 0 : maybeIterable[Symbol.iterator]) === 'function';
}
},{}],"../node_modules/graphql/utilities/astFromValue.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.astFromValue = astFromValue;
var _inspect = require("../jsutils/inspect.mjs");
var _invariant = require("../jsutils/invariant.mjs");
var _isIterableObject = require("../jsutils/isIterableObject.mjs");
var _isObjectLike = require("../jsutils/isObjectLike.mjs");
var _kinds = require("../language/kinds.mjs");
var _definition = require("../type/definition.mjs");
var _scalars = require("../type/scalars.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Produces a GraphQL Value AST given a JavaScript object.
 * Function will match JavaScript/JSON values to GraphQL AST schema format
 * by using suggested GraphQLInputType. For example:
 *
 *     astFromValue("value", GraphQLString)
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * JavaScript values.
 *
 * | JSON Value    | GraphQL Value        |
 * | ------------- | -------------------- |
 * | Object        | Input Object         |
 * | Array         | List                 |
 * | Boolean       | Boolean              |
 * | String        | String / Enum Value  |
 * | Number        | Int / Float          |
 * | Unknown       | Enum Value           |
 * | null          | NullValue            |
 *
 */

function astFromValue(value, type) {
  if ((0, _definition.isNonNullType)(type)) {
    var astValue = astFromValue(value, type.ofType);
    if ((astValue === null || astValue === void 0 ? void 0 : astValue.kind) === _kinds.Kind.NULL) {
      return null;
    }
    return astValue;
  } // only explicit null, not undefined, NaN

  if (value === null) {
    return {
      kind: _kinds.Kind.NULL
    };
  } // undefined

  if (value === undefined) {
    return null;
  } // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
  // the value is not an array, convert the value using the list's item type.

  if ((0, _definition.isListType)(type)) {
    var itemType = type.ofType;
    if ((0, _isIterableObject.isIterableObject)(value)) {
      var valuesNodes = [];
      var _iterator = _createForOfIteratorHelper(value),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var itemNode = astFromValue(item, itemType);
          if (itemNode != null) {
            valuesNodes.push(itemNode);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return {
        kind: _kinds.Kind.LIST,
        values: valuesNodes
      };
    }
    return astFromValue(value, itemType);
  } // Populate the fields of the input object by creating ASTs from each value
  // in the JavaScript object according to the fields in the input type.

  if ((0, _definition.isInputObjectType)(type)) {
    if (!(0, _isObjectLike.isObjectLike)(value)) {
      return null;
    }
    var fieldNodes = [];
    for (var _i = 0, _Object$values = Object.values(type.getFields()); _i < _Object$values.length; _i++) {
      var field = _Object$values[_i];
      var fieldValue = astFromValue(value[field.name], field.type);
      if (fieldValue) {
        fieldNodes.push({
          kind: _kinds.Kind.OBJECT_FIELD,
          name: {
            kind: _kinds.Kind.NAME,
            value: field.name
          },
          value: fieldValue
        });
      }
    }
    return {
      kind: _kinds.Kind.OBJECT,
      fields: fieldNodes
    };
  }
  if ((0, _definition.isLeafType)(type)) {
    // Since value is an internally represented value, it must be serialized
    // to an externally represented value before converting into an AST.
    var serialized = type.serialize(value);
    if (serialized == null) {
      return null;
    } // Others serialize based on their corresponding JavaScript scalar types.

    if (typeof serialized === 'boolean') {
      return {
        kind: _kinds.Kind.BOOLEAN,
        value: serialized
      };
    } // JavaScript numbers can be Int or Float values.

    if (typeof serialized === 'number' && Number.isFinite(serialized)) {
      var stringNum = String(serialized);
      return integerStringRegExp.test(stringNum) ? {
        kind: _kinds.Kind.INT,
        value: stringNum
      } : {
        kind: _kinds.Kind.FLOAT,
        value: stringNum
      };
    }
    if (typeof serialized === 'string') {
      // Enum types use Enum literals.
      if ((0, _definition.isEnumType)(type)) {
        return {
          kind: _kinds.Kind.ENUM,
          value: serialized
        };
      } // ID types can use Int literals.

      if (type === _scalars.GraphQLID && integerStringRegExp.test(serialized)) {
        return {
          kind: _kinds.Kind.INT,
          value: serialized
        };
      }
      return {
        kind: _kinds.Kind.STRING,
        value: serialized
      };
    }
    throw new TypeError("Cannot convert value to AST: ".concat((0, _inspect.inspect)(serialized), "."));
  }
  /* c8 ignore next 3 */
  // Not reachable, all possible types have been considered.

  false || (0, _invariant.invariant)(false, 'Unexpected input type: ' + (0, _inspect.inspect)(type));
}
/**
 * IntValue:
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit ( Digit+ )?
 */

var integerStringRegExp = /^-?(?:0|[1-9][0-9]*)$/;
},{"../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/invariant.mjs":"../node_modules/graphql/jsutils/invariant.mjs","../jsutils/isIterableObject.mjs":"../node_modules/graphql/jsutils/isIterableObject.mjs","../jsutils/isObjectLike.mjs":"../node_modules/graphql/jsutils/isObjectLike.mjs","../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../type/scalars.mjs":"../node_modules/graphql/type/scalars.mjs"}],"../node_modules/graphql/type/introspection.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.introspectionTypes = exports.__TypeKind = exports.__Type = exports.__Schema = exports.__InputValue = exports.__Field = exports.__EnumValue = exports.__DirectiveLocation = exports.__Directive = exports.TypeNameMetaFieldDef = exports.TypeMetaFieldDef = exports.TypeKind = exports.SchemaMetaFieldDef = void 0;
exports.isIntrospectionType = isIntrospectionType;
var _inspect = require("../jsutils/inspect.mjs");
var _invariant = require("../jsutils/invariant.mjs");
var _directiveLocation = require("../language/directiveLocation.mjs");
var _printer = require("../language/printer.mjs");
var _astFromValue = require("../utilities/astFromValue.mjs");
var _definition = require("./definition.mjs");
var _scalars = require("./scalars.mjs");
var __Schema = exports.__Schema = new _definition.GraphQLObjectType({
  name: '__Schema',
  description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
  fields: function fields() {
    return {
      description: {
        type: _scalars.GraphQLString,
        resolve: function resolve(schema) {
          return schema.description;
        }
      },
      types: {
        description: 'A list of all types supported by this server.',
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type))),
        resolve: function resolve(schema) {
          return Object.values(schema.getTypeMap());
        }
      },
      queryType: {
        description: 'The type that query operations will be rooted at.',
        type: new _definition.GraphQLNonNull(__Type),
        resolve: function resolve(schema) {
          return schema.getQueryType();
        }
      },
      mutationType: {
        description: 'If this server supports mutation, the type that mutation operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getMutationType();
        }
      },
      subscriptionType: {
        description: 'If this server support subscription, the type that subscription operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getSubscriptionType();
        }
      },
      directives: {
        description: 'A list of all directives supported by this server.',
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Directive))),
        resolve: function resolve(schema) {
          return schema.getDirectives();
        }
      }
    };
  }
});
var __Directive = exports.__Directive = new _definition.GraphQLObjectType({
  name: '__Directive',
  description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
  fields: function fields() {
    return {
      name: {
        type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
        resolve: function resolve(directive) {
          return directive.name;
        }
      },
      description: {
        type: _scalars.GraphQLString,
        resolve: function resolve(directive) {
          return directive.description;
        }
      },
      isRepeatable: {
        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
        resolve: function resolve(directive) {
          return directive.isRepeatable;
        }
      },
      locations: {
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__DirectiveLocation))),
        resolve: function resolve(directive) {
          return directive.locations;
        }
      },
      args: {
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
        args: {
          includeDeprecated: {
            type: _scalars.GraphQLBoolean,
            defaultValue: false
          }
        },
        resolve: function resolve(field, _ref) {
          var includeDeprecated = _ref.includeDeprecated;
          return includeDeprecated ? field.args : field.args.filter(function (arg) {
            return arg.deprecationReason == null;
          });
        }
      }
    };
  }
});
var __DirectiveLocation = exports.__DirectiveLocation = new _definition.GraphQLEnumType({
  name: '__DirectiveLocation',
  description: 'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
  values: {
    QUERY: {
      value: _directiveLocation.DirectiveLocation.QUERY,
      description: 'Location adjacent to a query operation.'
    },
    MUTATION: {
      value: _directiveLocation.DirectiveLocation.MUTATION,
      description: 'Location adjacent to a mutation operation.'
    },
    SUBSCRIPTION: {
      value: _directiveLocation.DirectiveLocation.SUBSCRIPTION,
      description: 'Location adjacent to a subscription operation.'
    },
    FIELD: {
      value: _directiveLocation.DirectiveLocation.FIELD,
      description: 'Location adjacent to a field.'
    },
    FRAGMENT_DEFINITION: {
      value: _directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION,
      description: 'Location adjacent to a fragment definition.'
    },
    FRAGMENT_SPREAD: {
      value: _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD,
      description: 'Location adjacent to a fragment spread.'
    },
    INLINE_FRAGMENT: {
      value: _directiveLocation.DirectiveLocation.INLINE_FRAGMENT,
      description: 'Location adjacent to an inline fragment.'
    },
    VARIABLE_DEFINITION: {
      value: _directiveLocation.DirectiveLocation.VARIABLE_DEFINITION,
      description: 'Location adjacent to a variable definition.'
    },
    SCHEMA: {
      value: _directiveLocation.DirectiveLocation.SCHEMA,
      description: 'Location adjacent to a schema definition.'
    },
    SCALAR: {
      value: _directiveLocation.DirectiveLocation.SCALAR,
      description: 'Location adjacent to a scalar definition.'
    },
    OBJECT: {
      value: _directiveLocation.DirectiveLocation.OBJECT,
      description: 'Location adjacent to an object type definition.'
    },
    FIELD_DEFINITION: {
      value: _directiveLocation.DirectiveLocation.FIELD_DEFINITION,
      description: 'Location adjacent to a field definition.'
    },
    ARGUMENT_DEFINITION: {
      value: _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION,
      description: 'Location adjacent to an argument definition.'
    },
    INTERFACE: {
      value: _directiveLocation.DirectiveLocation.INTERFACE,
      description: 'Location adjacent to an interface definition.'
    },
    UNION: {
      value: _directiveLocation.DirectiveLocation.UNION,
      description: 'Location adjacent to a union definition.'
    },
    ENUM: {
      value: _directiveLocation.DirectiveLocation.ENUM,
      description: 'Location adjacent to an enum definition.'
    },
    ENUM_VALUE: {
      value: _directiveLocation.DirectiveLocation.ENUM_VALUE,
      description: 'Location adjacent to an enum value definition.'
    },
    INPUT_OBJECT: {
      value: _directiveLocation.DirectiveLocation.INPUT_OBJECT,
      description: 'Location adjacent to an input object type definition.'
    },
    INPUT_FIELD_DEFINITION: {
      value: _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION,
      description: 'Location adjacent to an input object field definition.'
    }
  }
});
var __Type = exports.__Type = new _definition.GraphQLObjectType({
  name: '__Type',
  description: 'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
  fields: function fields() {
    return {
      kind: {
        type: new _definition.GraphQLNonNull(__TypeKind),
        resolve: function resolve(type) {
          if ((0, _definition.isScalarType)(type)) {
            return TypeKind.SCALAR;
          }
          if ((0, _definition.isObjectType)(type)) {
            return TypeKind.OBJECT;
          }
          if ((0, _definition.isInterfaceType)(type)) {
            return TypeKind.INTERFACE;
          }
          if ((0, _definition.isUnionType)(type)) {
            return TypeKind.UNION;
          }
          if ((0, _definition.isEnumType)(type)) {
            return TypeKind.ENUM;
          }
          if ((0, _definition.isInputObjectType)(type)) {
            return TypeKind.INPUT_OBJECT;
          }
          if ((0, _definition.isListType)(type)) {
            return TypeKind.LIST;
          }
          if ((0, _definition.isNonNullType)(type)) {
            return TypeKind.NON_NULL;
          }
          /* c8 ignore next 3 */
          // Not reachable, all possible types have been considered)

          false || (0, _invariant.invariant)(false, "Unexpected type: \"".concat((0, _inspect.inspect)(type), "\"."));
        }
      },
      name: {
        type: _scalars.GraphQLString,
        resolve: function resolve(type) {
          return 'name' in type ? type.name : undefined;
        }
      },
      description: {
        type: _scalars.GraphQLString,
        resolve: function resolve(type // FIXME: add test case
        ) {
          return (/* c8 ignore next */
            'description' in type ? type.description : undefined
          );
        }
      },
      specifiedByURL: {
        type: _scalars.GraphQLString,
        resolve: function resolve(obj) {
          return 'specifiedByURL' in obj ? obj.specifiedByURL : undefined;
        }
      },
      fields: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Field)),
        args: {
          includeDeprecated: {
            type: _scalars.GraphQLBoolean,
            defaultValue: false
          }
        },
        resolve: function resolve(type, _ref2) {
          var includeDeprecated = _ref2.includeDeprecated;
          if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
            var fields = Object.values(type.getFields());
            return includeDeprecated ? fields : fields.filter(function (field) {
              return field.deprecationReason == null;
            });
          }
        }
      },
      interfaces: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
        resolve: function resolve(type) {
          if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
            return type.getInterfaces();
          }
        }
      },
      possibleTypes: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
        resolve: function resolve(type, _args, _context, _ref3) {
          var schema = _ref3.schema;
          if ((0, _definition.isAbstractType)(type)) {
            return schema.getPossibleTypes(type);
          }
        }
      },
      enumValues: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__EnumValue)),
        args: {
          includeDeprecated: {
            type: _scalars.GraphQLBoolean,
            defaultValue: false
          }
        },
        resolve: function resolve(type, _ref4) {
          var includeDeprecated = _ref4.includeDeprecated;
          if ((0, _definition.isEnumType)(type)) {
            var values = type.getValues();
            return includeDeprecated ? values : values.filter(function (field) {
              return field.deprecationReason == null;
            });
          }
        }
      },
      inputFields: {
        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue)),
        args: {
          includeDeprecated: {
            type: _scalars.GraphQLBoolean,
            defaultValue: false
          }
        },
        resolve: function resolve(type, _ref5) {
          var includeDeprecated = _ref5.includeDeprecated;
          if ((0, _definition.isInputObjectType)(type)) {
            var values = Object.values(type.getFields());
            return includeDeprecated ? values : values.filter(function (field) {
              return field.deprecationReason == null;
            });
          }
        }
      },
      ofType: {
        type: __Type,
        resolve: function resolve(type) {
          return 'ofType' in type ? type.ofType : undefined;
        }
      }
    };
  }
});
var __Field = exports.__Field = new _definition.GraphQLObjectType({
  name: '__Field',
  description: 'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
  fields: function fields() {
    return {
      name: {
        type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
        resolve: function resolve(field) {
          return field.name;
        }
      },
      description: {
        type: _scalars.GraphQLString,
        resolve: function resolve(field) {
          return field.description;
        }
      },
      args: {
        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
        args: {
          includeDeprecated: {
            type: _scalars.GraphQLBoolean,
            defaultValue: false
          }
        },
        resolve: function resolve(field, _ref6) {
          var includeDeprecated = _ref6.includeDeprecated;
          return includeDeprecated ? field.args : field.args.filter(function (arg) {
            return arg.deprecationReason == null;
          });
        }
      },
      type: {
        type: new _definition.GraphQLNonNull(__Type),
        resolve: function resolve(field) {
          return field.type;
        }
      },
      isDeprecated: {
        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
        resolve: function resolve(field) {
          return field.deprecationReason != null;
        }
      },
      deprecationReason: {
        type: _scalars.GraphQLString,
        resolve: function resolve(field) {
          return field.deprecationReason;
        }
      }
    };
  }
});
var __InputValue = exports.__InputValue = new _definition.GraphQLObjectType({
  name: '__InputValue',
  description: 'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
  fields: function fields() {
    return {
      name: {
        type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
        resolve: function resolve(inputValue) {
          return inputValue.name;
        }
      },
      description: {
        type: _scalars.GraphQLString,
        resolve: function resolve(inputValue) {
          return inputValue.description;
        }
      },
      type: {
        type: new _definition.GraphQLNonNull(__Type),
        resolve: function resolve(inputValue) {
          return inputValue.type;
        }
      },
      defaultValue: {
        type: _scalars.GraphQLString,
        description: 'A GraphQL-formatted string representing the default value for this input value.',
        resolve: function resolve(inputValue) {
          var type = inputValue.type,
            defaultValue = inputValue.defaultValue;
          var valueAST = (0, _astFromValue.astFromValue)(defaultValue, type);
          return valueAST ? (0, _printer.print)(valueAST) : null;
        }
      },
      isDeprecated: {
        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
        resolve: function resolve(field) {
          return field.deprecationReason != null;
        }
      },
      deprecationReason: {
        type: _scalars.GraphQLString,
        resolve: function resolve(obj) {
          return obj.deprecationReason;
        }
      }
    };
  }
});
var __EnumValue = exports.__EnumValue = new _definition.GraphQLObjectType({
  name: '__EnumValue',
  description: 'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
  fields: function fields() {
    return {
      name: {
        type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
        resolve: function resolve(enumValue) {
          return enumValue.name;
        }
      },
      description: {
        type: _scalars.GraphQLString,
        resolve: function resolve(enumValue) {
          return enumValue.description;
        }
      },
      isDeprecated: {
        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
        resolve: function resolve(enumValue) {
          return enumValue.deprecationReason != null;
        }
      },
      deprecationReason: {
        type: _scalars.GraphQLString,
        resolve: function resolve(enumValue) {
          return enumValue.deprecationReason;
        }
      }
    };
  }
});
var TypeKind;
(function (TypeKind) {
  TypeKind['SCALAR'] = 'SCALAR';
  TypeKind['OBJECT'] = 'OBJECT';
  TypeKind['INTERFACE'] = 'INTERFACE';
  TypeKind['UNION'] = 'UNION';
  TypeKind['ENUM'] = 'ENUM';
  TypeKind['INPUT_OBJECT'] = 'INPUT_OBJECT';
  TypeKind['LIST'] = 'LIST';
  TypeKind['NON_NULL'] = 'NON_NULL';
})(TypeKind || (exports.TypeKind = TypeKind = {}));
var __TypeKind = exports.__TypeKind = new _definition.GraphQLEnumType({
  name: '__TypeKind',
  description: 'An enum describing what kind of type a given `__Type` is.',
  values: {
    SCALAR: {
      value: TypeKind.SCALAR,
      description: 'Indicates this type is a scalar.'
    },
    OBJECT: {
      value: TypeKind.OBJECT,
      description: 'Indicates this type is an object. `fields` and `interfaces` are valid fields.'
    },
    INTERFACE: {
      value: TypeKind.INTERFACE,
      description: 'Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.'
    },
    UNION: {
      value: TypeKind.UNION,
      description: 'Indicates this type is a union. `possibleTypes` is a valid field.'
    },
    ENUM: {
      value: TypeKind.ENUM,
      description: 'Indicates this type is an enum. `enumValues` is a valid field.'
    },
    INPUT_OBJECT: {
      value: TypeKind.INPUT_OBJECT,
      description: 'Indicates this type is an input object. `inputFields` is a valid field.'
    },
    LIST: {
      value: TypeKind.LIST,
      description: 'Indicates this type is a list. `ofType` is a valid field.'
    },
    NON_NULL: {
      value: TypeKind.NON_NULL,
      description: 'Indicates this type is a non-null. `ofType` is a valid field.'
    }
  }
});
/**
 * Note that these are GraphQLField and not GraphQLFieldConfig,
 * so the format for args is different.
 */

var SchemaMetaFieldDef = exports.SchemaMetaFieldDef = {
  name: '__schema',
  type: new _definition.GraphQLNonNull(__Schema),
  description: 'Access the current type schema of this server.',
  args: [],
  resolve: function resolve(_source, _args, _context, _ref7) {
    var schema = _ref7.schema;
    return schema;
  },
  deprecationReason: undefined,
  extensions: Object.create(null),
  astNode: undefined
};
var TypeMetaFieldDef = exports.TypeMetaFieldDef = {
  name: '__type',
  type: __Type,
  description: 'Request the type information of a single type.',
  args: [{
    name: 'name',
    description: undefined,
    type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
    defaultValue: undefined,
    deprecationReason: undefined,
    extensions: Object.create(null),
    astNode: undefined
  }],
  resolve: function resolve(_source, _ref8, _context, _ref9) {
    var name = _ref8.name;
    var schema = _ref9.schema;
    return schema.getType(name);
  },
  deprecationReason: undefined,
  extensions: Object.create(null),
  astNode: undefined
};
var TypeNameMetaFieldDef = exports.TypeNameMetaFieldDef = {
  name: '__typename',
  type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
  description: 'The name of the current Object type at runtime.',
  args: [],
  resolve: function resolve(_source, _args, _context, _ref10) {
    var parentType = _ref10.parentType;
    return parentType.name;
  },
  deprecationReason: undefined,
  extensions: Object.create(null),
  astNode: undefined
};
var introspectionTypes = exports.introspectionTypes = Object.freeze([__Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind]);
function isIntrospectionType(type) {
  return introspectionTypes.some(function (_ref11) {
    var name = _ref11.name;
    return type.name === name;
  });
}
},{"../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/invariant.mjs":"../node_modules/graphql/jsutils/invariant.mjs","../language/directiveLocation.mjs":"../node_modules/graphql/language/directiveLocation.mjs","../language/printer.mjs":"../node_modules/graphql/language/printer.mjs","../utilities/astFromValue.mjs":"../node_modules/graphql/utilities/astFromValue.mjs","./definition.mjs":"../node_modules/graphql/type/definition.mjs","./scalars.mjs":"../node_modules/graphql/type/scalars.mjs"}],"../node_modules/graphql/type/schema.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLSchema = void 0;
exports.assertSchema = assertSchema;
exports.isSchema = isSchema;
var _devAssert = require("../jsutils/devAssert.mjs");
var _inspect = require("../jsutils/inspect.mjs");
var _instanceOf = require("../jsutils/instanceOf.mjs");
var _isObjectLike = require("../jsutils/isObjectLike.mjs");
var _toObjMap = require("../jsutils/toObjMap.mjs");
var _ast = require("../language/ast.mjs");
var _definition = require("./definition.mjs");
var _directives = require("./directives.mjs");
var _introspection = require("./introspection.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Test if the given value is a GraphQL schema.
 */

function isSchema(schema) {
  return (0, _instanceOf.instanceOf)(schema, GraphQLSchema);
}
function assertSchema(schema) {
  if (!isSchema(schema)) {
    throw new Error("Expected ".concat((0, _inspect.inspect)(schema), " to be a GraphQL schema."));
  }
  return schema;
}
/**
 * Custom extensions
 *
 * @remarks
 * Use a unique identifier name for your extension, for example the name of
 * your library or project. Do not use a shortened identifier as this increases
 * the risk of conflicts. We recommend you add at most one extension field,
 * an object which can contain all the values you need.
 */

/**
 * Schema Definition
 *
 * A Schema is created by supplying the root types of each type of operation,
 * query and mutation (optional). A schema definition is then supplied to the
 * validator and executor.
 *
 * Example:
 *
 * ```ts
 * const MyAppSchema = new GraphQLSchema({
 *   query: MyAppQueryRootType,
 *   mutation: MyAppMutationRootType,
 * })
 * ```
 *
 * Note: When the schema is constructed, by default only the types that are
 * reachable by traversing the root types are included, other types must be
 * explicitly referenced.
 *
 * Example:
 *
 * ```ts
 * const characterInterface = new GraphQLInterfaceType({
 *   name: 'Character',
 *   ...
 * });
 *
 * const humanType = new GraphQLObjectType({
 *   name: 'Human',
 *   interfaces: [characterInterface],
 *   ...
 * });
 *
 * const droidType = new GraphQLObjectType({
 *   name: 'Droid',
 *   interfaces: [characterInterface],
 *   ...
 * });
 *
 * const schema = new GraphQLSchema({
 *   query: new GraphQLObjectType({
 *     name: 'Query',
 *     fields: {
 *       hero: { type: characterInterface, ... },
 *     }
 *   }),
 *   ...
 *   // Since this schema references only the `Character` interface it's
 *   // necessary to explicitly list the types that implement it if
 *   // you want them to be included in the final schema.
 *   types: [humanType, droidType],
 * })
 * ```
 *
 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
 * the exact list of directives represented and allowed. If `directives` is not
 * provided then a default set of the specified directives (e.g. `@include` and
 * `@skip`) will be used. If you wish to provide *additional* directives to these
 * specified directives, you must explicitly declare them. Example:
 *
 * ```ts
 * const MyAppSchema = new GraphQLSchema({
 *   ...
 *   directives: specifiedDirectives.concat([ myCustomDirective ]),
 * })
 * ```
 */
var GraphQLSchema = exports.GraphQLSchema = /*#__PURE__*/function (_Symbol$toStringTag) {
  // Used as a cache for validateSchema().
  function GraphQLSchema(config) {
    _classCallCheck(this, GraphQLSchema);
    var _config$extensionASTN, _config$directives;

    // If this schema was built from a source known to be valid, then it may be
    // marked with assumeValid to avoid an additional type system validation.
    this.__validationErrors = config.assumeValid === true ? [] : undefined; // Check for common mistakes during construction to produce early errors.

    (0, _isObjectLike.isObjectLike)(config) || (0, _devAssert.devAssert)(false, 'Must provide configuration object.');
    !config.types || Array.isArray(config.types) || (0, _devAssert.devAssert)(false, "\"types\" must be Array if provided but got: ".concat((0, _inspect.inspect)(config.types), "."));
    !config.directives || Array.isArray(config.directives) || (0, _devAssert.devAssert)(false, '"directives" must be Array if provided but got: ' + "".concat((0, _inspect.inspect)(config.directives), "."));
    this.description = config.description;
    this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = (_config$extensionASTN = config.extensionASTNodes) !== null && _config$extensionASTN !== void 0 ? _config$extensionASTN : [];
    this._queryType = config.query;
    this._mutationType = config.mutation;
    this._subscriptionType = config.subscription; // Provide specified directives (e.g. @include and @skip) by default.

    this._directives = (_config$directives = config.directives) !== null && _config$directives !== void 0 ? _config$directives : _directives.specifiedDirectives; // To preserve order of user-provided types, we add first to add them to
    // the set of "collected" types, so `collectReferencedTypes` ignore them.

    var allReferencedTypes = new Set(config.types);
    if (config.types != null) {
      var _iterator = _createForOfIteratorHelper(config.types),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var type = _step.value;
          // When we ready to process this type, we remove it from "collected" types
          // and then add it together with all dependent types in the correct position.
          allReferencedTypes.delete(type);
          collectReferencedTypes(type, allReferencedTypes);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (this._queryType != null) {
      collectReferencedTypes(this._queryType, allReferencedTypes);
    }
    if (this._mutationType != null) {
      collectReferencedTypes(this._mutationType, allReferencedTypes);
    }
    if (this._subscriptionType != null) {
      collectReferencedTypes(this._subscriptionType, allReferencedTypes);
    }
    var _iterator2 = _createForOfIteratorHelper(this._directives),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var directive = _step2.value;
        // Directives are not validated until validateSchema() is called.
        if ((0, _directives.isDirective)(directive)) {
          var _iterator4 = _createForOfIteratorHelper(directive.args),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var arg = _step4.value;
              collectReferencedTypes(arg.type, allReferencedTypes);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    collectReferencedTypes(_introspection.__Schema, allReferencedTypes); // Storing the resulting map for reference by the schema.

    this._typeMap = Object.create(null);
    this._subTypeMap = Object.create(null); // Keep track of all implementations by interface name.

    this._implementationsMap = Object.create(null);
    var _iterator3 = _createForOfIteratorHelper(allReferencedTypes),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var namedType = _step3.value;
        if (namedType == null) {
          continue;
        }
        var typeName = namedType.name;
        typeName || (0, _devAssert.devAssert)(false, 'One of the provided types for building the Schema is missing a name.');
        if (this._typeMap[typeName] !== undefined) {
          throw new Error("Schema must contain uniquely named types but contains multiple types named \"".concat(typeName, "\"."));
        }
        this._typeMap[typeName] = namedType;
        if ((0, _definition.isInterfaceType)(namedType)) {
          // Store implementations by interface.
          var _iterator5 = _createForOfIteratorHelper(namedType.getInterfaces()),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var iface = _step5.value;
              if ((0, _definition.isInterfaceType)(iface)) {
                var implementations = this._implementationsMap[iface.name];
                if (implementations === undefined) {
                  implementations = this._implementationsMap[iface.name] = {
                    objects: [],
                    interfaces: []
                  };
                }
                implementations.interfaces.push(namedType);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        } else if ((0, _definition.isObjectType)(namedType)) {
          // Store implementations by objects.
          var _iterator6 = _createForOfIteratorHelper(namedType.getInterfaces()),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _iface = _step6.value;
              if ((0, _definition.isInterfaceType)(_iface)) {
                var _implementations = this._implementationsMap[_iface.name];
                if (_implementations === undefined) {
                  _implementations = this._implementationsMap[_iface.name] = {
                    objects: [],
                    interfaces: []
                  };
                }
                _implementations.objects.push(namedType);
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
  _createClass(GraphQLSchema, [{
    key: _Symbol$toStringTag,
    get: function get() {
      return 'GraphQLSchema';
    }
  }, {
    key: "getQueryType",
    value: function getQueryType() {
      return this._queryType;
    }
  }, {
    key: "getMutationType",
    value: function getMutationType() {
      return this._mutationType;
    }
  }, {
    key: "getSubscriptionType",
    value: function getSubscriptionType() {
      return this._subscriptionType;
    }
  }, {
    key: "getRootType",
    value: function getRootType(operation) {
      switch (operation) {
        case _ast.OperationTypeNode.QUERY:
          return this.getQueryType();
        case _ast.OperationTypeNode.MUTATION:
          return this.getMutationType();
        case _ast.OperationTypeNode.SUBSCRIPTION:
          return this.getSubscriptionType();
      }
    }
  }, {
    key: "getTypeMap",
    value: function getTypeMap() {
      return this._typeMap;
    }
  }, {
    key: "getType",
    value: function getType(name) {
      return this.getTypeMap()[name];
    }
  }, {
    key: "getPossibleTypes",
    value: function getPossibleTypes(abstractType) {
      return (0, _definition.isUnionType)(abstractType) ? abstractType.getTypes() : this.getImplementations(abstractType).objects;
    }
  }, {
    key: "getImplementations",
    value: function getImplementations(interfaceType) {
      var implementations = this._implementationsMap[interfaceType.name];
      return implementations !== null && implementations !== void 0 ? implementations : {
        objects: [],
        interfaces: []
      };
    }
  }, {
    key: "isSubType",
    value: function isSubType(abstractType, maybeSubType) {
      var map = this._subTypeMap[abstractType.name];
      if (map === undefined) {
        map = Object.create(null);
        if ((0, _definition.isUnionType)(abstractType)) {
          var _iterator7 = _createForOfIteratorHelper(abstractType.getTypes()),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var type = _step7.value;
              map[type.name] = true;
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        } else {
          var implementations = this.getImplementations(abstractType);
          var _iterator8 = _createForOfIteratorHelper(implementations.objects),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _type = _step8.value;
              map[_type.name] = true;
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          var _iterator9 = _createForOfIteratorHelper(implementations.interfaces),
            _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var _type2 = _step9.value;
              map[_type2.name] = true;
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
        this._subTypeMap[abstractType.name] = map;
      }
      return map[maybeSubType.name] !== undefined;
    }
  }, {
    key: "getDirectives",
    value: function getDirectives() {
      return this._directives;
    }
  }, {
    key: "getDirective",
    value: function getDirective(name) {
      return this.getDirectives().find(function (directive) {
        return directive.name === name;
      });
    }
  }, {
    key: "toConfig",
    value: function toConfig() {
      return {
        description: this.description,
        query: this.getQueryType(),
        mutation: this.getMutationType(),
        subscription: this.getSubscriptionType(),
        types: Object.values(this.getTypeMap()),
        directives: this.getDirectives(),
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes,
        assumeValid: this.__validationErrors !== undefined
      };
    }
  }]);
  return GraphQLSchema;
}(Symbol.toStringTag);
function collectReferencedTypes(type, typeSet) {
  var namedType = (0, _definition.getNamedType)(type);
  if (!typeSet.has(namedType)) {
    typeSet.add(namedType);
    if ((0, _definition.isUnionType)(namedType)) {
      var _iterator10 = _createForOfIteratorHelper(namedType.getTypes()),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var memberType = _step10.value;
          collectReferencedTypes(memberType, typeSet);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    } else if ((0, _definition.isObjectType)(namedType) || (0, _definition.isInterfaceType)(namedType)) {
      var _iterator11 = _createForOfIteratorHelper(namedType.getInterfaces()),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var interfaceType = _step11.value;
          collectReferencedTypes(interfaceType, typeSet);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      for (var _i = 0, _Object$values = Object.values(namedType.getFields()); _i < _Object$values.length; _i++) {
        var field = _Object$values[_i];
        collectReferencedTypes(field.type, typeSet);
        var _iterator12 = _createForOfIteratorHelper(field.args),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var arg = _step12.value;
            collectReferencedTypes(arg.type, typeSet);
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }
    } else if ((0, _definition.isInputObjectType)(namedType)) {
      for (var _i2 = 0, _Object$values2 = Object.values(namedType.getFields()); _i2 < _Object$values2.length; _i2++) {
        var _field = _Object$values2[_i2];
        collectReferencedTypes(_field.type, typeSet);
      }
    }
  }
  return typeSet;
}
},{"../jsutils/devAssert.mjs":"../node_modules/graphql/jsutils/devAssert.mjs","../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/instanceOf.mjs":"../node_modules/graphql/jsutils/instanceOf.mjs","../jsutils/isObjectLike.mjs":"../node_modules/graphql/jsutils/isObjectLike.mjs","../jsutils/toObjMap.mjs":"../node_modules/graphql/jsutils/toObjMap.mjs","../language/ast.mjs":"../node_modules/graphql/language/ast.mjs","./definition.mjs":"../node_modules/graphql/type/definition.mjs","./directives.mjs":"../node_modules/graphql/type/directives.mjs","./introspection.mjs":"../node_modules/graphql/type/introspection.mjs"}],"../node_modules/graphql/type/validate.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertValidSchema = assertValidSchema;
exports.validateSchema = validateSchema;
var _inspect = require("../jsutils/inspect.mjs");
var _GraphQLError = require("../error/GraphQLError.mjs");
var _ast = require("../language/ast.mjs");
var _typeComparators = require("../utilities/typeComparators.mjs");
var _definition = require("./definition.mjs");
var _directives = require("./directives.mjs");
var _introspection = require("./introspection.mjs");
var _schema = require("./schema.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Implements the "Type Validation" sub-sections of the specification's
 * "Type System" section.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the Schema is valid.
 */

function validateSchema(schema) {
  // First check to ensure the provided value is in fact a GraphQLSchema.
  (0, _schema.assertSchema)(schema); // If this Schema has already been validated, return the previous results.

  if (schema.__validationErrors) {
    return schema.__validationErrors;
  } // Validate the schema, producing a list of errors.

  var context = new SchemaValidationContext(schema);
  validateRootTypes(context);
  validateDirectives(context);
  validateTypes(context); // Persist the results of validation before returning to ensure validation
  // does not run multiple times for this schema.

  var errors = context.getErrors();
  schema.__validationErrors = errors;
  return errors;
}
/**
 * Utility function which asserts a schema is valid by throwing an error if
 * it is invalid.
 */

function assertValidSchema(schema) {
  var errors = validateSchema(schema);
  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}
var SchemaValidationContext = /*#__PURE__*/function () {
  function SchemaValidationContext(schema) {
    _classCallCheck(this, SchemaValidationContext);
    this._errors = [];
    this.schema = schema;
  }
  _createClass(SchemaValidationContext, [{
    key: "reportError",
    value: function reportError(message, nodes) {
      var _nodes = Array.isArray(nodes) ? nodes.filter(Boolean) : nodes;
      this._errors.push(new _GraphQLError.GraphQLError(message, {
        nodes: _nodes
      }));
    }
  }, {
    key: "getErrors",
    value: function getErrors() {
      return this._errors;
    }
  }]);
  return SchemaValidationContext;
}();
function validateRootTypes(context) {
  var schema = context.schema;
  var queryType = schema.getQueryType();
  if (!queryType) {
    context.reportError('Query root type must be provided.', schema.astNode);
  } else if (!(0, _definition.isObjectType)(queryType)) {
    var _getOperationTypeNode;
    context.reportError("Query root type must be Object type, it cannot be ".concat((0, _inspect.inspect)(queryType), "."), (_getOperationTypeNode = getOperationTypeNode(schema, _ast.OperationTypeNode.QUERY)) !== null && _getOperationTypeNode !== void 0 ? _getOperationTypeNode : queryType.astNode);
  }
  var mutationType = schema.getMutationType();
  if (mutationType && !(0, _definition.isObjectType)(mutationType)) {
    var _getOperationTypeNode2;
    context.reportError('Mutation root type must be Object type if provided, it cannot be ' + "".concat((0, _inspect.inspect)(mutationType), "."), (_getOperationTypeNode2 = getOperationTypeNode(schema, _ast.OperationTypeNode.MUTATION)) !== null && _getOperationTypeNode2 !== void 0 ? _getOperationTypeNode2 : mutationType.astNode);
  }
  var subscriptionType = schema.getSubscriptionType();
  if (subscriptionType && !(0, _definition.isObjectType)(subscriptionType)) {
    var _getOperationTypeNode3;
    context.reportError('Subscription root type must be Object type if provided, it cannot be ' + "".concat((0, _inspect.inspect)(subscriptionType), "."), (_getOperationTypeNode3 = getOperationTypeNode(schema, _ast.OperationTypeNode.SUBSCRIPTION)) !== null && _getOperationTypeNode3 !== void 0 ? _getOperationTypeNode3 : subscriptionType.astNode);
  }
}
function getOperationTypeNode(schema, operation) {
  var _flatMap$find;
  return (_flatMap$find = [schema.astNode].concat(_toConsumableArray(schema.extensionASTNodes)).flatMap(
  // FIXME: https://github.com/graphql/graphql-js/issues/2203
  function (schemaNode) {
    var _schemaNode$operation;
    return (/* c8 ignore next */
      (_schemaNode$operation = schemaNode === null || schemaNode === void 0 ? void 0 : schemaNode.operationTypes) !== null && _schemaNode$operation !== void 0 ? _schemaNode$operation : []
    );
  }).find(function (operationNode) {
    return operationNode.operation === operation;
  })) === null || _flatMap$find === void 0 ? void 0 : _flatMap$find.type;
}
function validateDirectives(context) {
  var _iterator = _createForOfIteratorHelper(context.schema.getDirectives()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var directive = _step.value;
      // Ensure all directives are in fact GraphQL directives.
      if (!(0, _directives.isDirective)(directive)) {
        context.reportError("Expected directive but got: ".concat((0, _inspect.inspect)(directive), "."), directive === null || directive === void 0 ? void 0 : directive.astNode);
        continue;
      } // Ensure they are named correctly.

      validateName(context, directive); // TODO: Ensure proper locations.
      // Ensure the arguments are valid.
      var _iterator2 = _createForOfIteratorHelper(directive.args),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var arg = _step2.value;
          // Ensure they are named correctly.
          validateName(context, arg); // Ensure the type is an input type.

          if (!(0, _definition.isInputType)(arg.type)) {
            context.reportError("The type of @".concat(directive.name, "(").concat(arg.name, ":) must be Input Type ") + "but got: ".concat((0, _inspect.inspect)(arg.type), "."), arg.astNode);
          }
          if ((0, _definition.isRequiredArgument)(arg) && arg.deprecationReason != null) {
            var _arg$astNode;
            context.reportError("Required argument @".concat(directive.name, "(").concat(arg.name, ":) cannot be deprecated."), [getDeprecatedDirectiveNode(arg.astNode), (_arg$astNode = arg.astNode) === null || _arg$astNode === void 0 ? void 0 : _arg$astNode.type]);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function validateName(context, node) {
  // Ensure names are valid, however introspection types opt out.
  if (node.name.startsWith('__')) {
    context.reportError("Name \"".concat(node.name, "\" must not begin with \"__\", which is reserved by GraphQL introspection."), node.astNode);
  }
}
function validateTypes(context) {
  var validateInputObjectCircularRefs = createInputObjectCircularRefsValidator(context);
  var typeMap = context.schema.getTypeMap();
  for (var _i = 0, _Object$values = Object.values(typeMap); _i < _Object$values.length; _i++) {
    var type = _Object$values[_i];
    // Ensure all provided types are in fact GraphQL type.
    if (!(0, _definition.isNamedType)(type)) {
      context.reportError("Expected GraphQL named type but got: ".concat((0, _inspect.inspect)(type), "."), type.astNode);
      continue;
    } // Ensure it is named correctly (excluding introspection types).

    if (!(0, _introspection.isIntrospectionType)(type)) {
      validateName(context, type);
    }
    if ((0, _definition.isObjectType)(type)) {
      // Ensure fields are valid
      validateFields(context, type); // Ensure objects implement the interfaces they claim to.

      validateInterfaces(context, type);
    } else if ((0, _definition.isInterfaceType)(type)) {
      // Ensure fields are valid.
      validateFields(context, type); // Ensure interfaces implement the interfaces they claim to.

      validateInterfaces(context, type);
    } else if ((0, _definition.isUnionType)(type)) {
      // Ensure Unions include valid member types.
      validateUnionMembers(context, type);
    } else if ((0, _definition.isEnumType)(type)) {
      // Ensure Enums have valid values.
      validateEnumValues(context, type);
    } else if ((0, _definition.isInputObjectType)(type)) {
      // Ensure Input Object fields are valid.
      validateInputFields(context, type); // Ensure Input Objects do not contain non-nullable circular references

      validateInputObjectCircularRefs(type);
    }
  }
}
function validateFields(context, type) {
  var fields = Object.values(type.getFields()); // Objects and Interfaces both must define one or more fields.

  if (fields.length === 0) {
    context.reportError("Type ".concat(type.name, " must define one or more fields."), [type.astNode].concat(_toConsumableArray(type.extensionASTNodes)));
  }
  for (var _i2 = 0, _fields = fields; _i2 < _fields.length; _i2++) {
    var field = _fields[_i2];
    // Ensure they are named correctly.
    validateName(context, field); // Ensure the type is an output type

    if (!(0, _definition.isOutputType)(field.type)) {
      var _field$astNode;
      context.reportError("The type of ".concat(type.name, ".").concat(field.name, " must be Output Type ") + "but got: ".concat((0, _inspect.inspect)(field.type), "."), (_field$astNode = field.astNode) === null || _field$astNode === void 0 ? void 0 : _field$astNode.type);
    } // Ensure the arguments are valid
    var _iterator3 = _createForOfIteratorHelper(field.args),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var arg = _step3.value;
        var argName = arg.name; // Ensure they are named correctly.

        validateName(context, arg); // Ensure the type is an input type

        if (!(0, _definition.isInputType)(arg.type)) {
          var _arg$astNode2;
          context.reportError("The type of ".concat(type.name, ".").concat(field.name, "(").concat(argName, ":) must be Input ") + "Type but got: ".concat((0, _inspect.inspect)(arg.type), "."), (_arg$astNode2 = arg.astNode) === null || _arg$astNode2 === void 0 ? void 0 : _arg$astNode2.type);
        }
        if ((0, _definition.isRequiredArgument)(arg) && arg.deprecationReason != null) {
          var _arg$astNode3;
          context.reportError("Required argument ".concat(type.name, ".").concat(field.name, "(").concat(argName, ":) cannot be deprecated."), [getDeprecatedDirectiveNode(arg.astNode), (_arg$astNode3 = arg.astNode) === null || _arg$astNode3 === void 0 ? void 0 : _arg$astNode3.type]);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
}
function validateInterfaces(context, type) {
  var ifaceTypeNames = Object.create(null);
  var _iterator4 = _createForOfIteratorHelper(type.getInterfaces()),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var iface = _step4.value;
      if (!(0, _definition.isInterfaceType)(iface)) {
        context.reportError("Type ".concat((0, _inspect.inspect)(type), " must only implement Interface types, ") + "it cannot implement ".concat((0, _inspect.inspect)(iface), "."), getAllImplementsInterfaceNodes(type, iface));
        continue;
      }
      if (type === iface) {
        context.reportError("Type ".concat(type.name, " cannot implement itself because it would create a circular reference."), getAllImplementsInterfaceNodes(type, iface));
        continue;
      }
      if (ifaceTypeNames[iface.name]) {
        context.reportError("Type ".concat(type.name, " can only implement ").concat(iface.name, " once."), getAllImplementsInterfaceNodes(type, iface));
        continue;
      }
      ifaceTypeNames[iface.name] = true;
      validateTypeImplementsAncestors(context, type, iface);
      validateTypeImplementsInterface(context, type, iface);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}
function validateTypeImplementsInterface(context, type, iface) {
  var typeFieldMap = type.getFields(); // Assert each interface field is implemented.

  for (var _i3 = 0, _Object$values2 = Object.values(iface.getFields()); _i3 < _Object$values2.length; _i3++) {
    var ifaceField = _Object$values2[_i3];
    var fieldName = ifaceField.name;
    var typeField = typeFieldMap[fieldName]; // Assert interface field exists on type.

    if (!typeField) {
      context.reportError("Interface field ".concat(iface.name, ".").concat(fieldName, " expected but ").concat(type.name, " does not provide it."), [ifaceField.astNode, type.astNode].concat(_toConsumableArray(type.extensionASTNodes)));
      continue;
    } // Assert interface field type is satisfied by type field type, by being
    // a valid subtype. (covariant)

    if (!(0, _typeComparators.isTypeSubTypeOf)(context.schema, typeField.type, ifaceField.type)) {
      var _ifaceField$astNode, _typeField$astNode;
      context.reportError("Interface field ".concat(iface.name, ".").concat(fieldName, " expects type ") + "".concat((0, _inspect.inspect)(ifaceField.type), " but ").concat(type.name, ".").concat(fieldName, " ") + "is type ".concat((0, _inspect.inspect)(typeField.type), "."), [(_ifaceField$astNode = ifaceField.astNode) === null || _ifaceField$astNode === void 0 ? void 0 : _ifaceField$astNode.type, (_typeField$astNode = typeField.astNode) === null || _typeField$astNode === void 0 ? void 0 : _typeField$astNode.type]);
    } // Assert each interface field arg is implemented.
    var _iterator5 = _createForOfIteratorHelper(ifaceField.args),
      _step5;
    try {
      var _loop = function _loop() {
          var ifaceArg = _step5.value;
          var argName = ifaceArg.name;
          var typeArg = typeField.args.find(function (arg) {
            return arg.name === argName;
          }); // Assert interface field arg exists on object field.

          if (!typeArg) {
            context.reportError("Interface field argument ".concat(iface.name, ".").concat(fieldName, "(").concat(argName, ":) expected but ").concat(type.name, ".").concat(fieldName, " does not provide it."), [ifaceArg.astNode, typeField.astNode]);
            return 1; // continue
          } // Assert interface field arg type matches object field arg type.
          // (invariant)
          // TODO: change to contravariant?

          if (!(0, _typeComparators.isEqualType)(ifaceArg.type, typeArg.type)) {
            context.reportError("Interface field argument ".concat(iface.name, ".").concat(fieldName, "(").concat(argName, ":) ") + "expects type ".concat((0, _inspect.inspect)(ifaceArg.type), " but ") + "".concat(type.name, ".").concat(fieldName, "(").concat(argName, ":) is type ") + "".concat((0, _inspect.inspect)(typeArg.type), "."), [(_ifaceArg$astNode = ifaceArg.astNode) === null || _ifaceArg$astNode === void 0 ? void 0 : _ifaceArg$astNode.type, (_typeArg$astNode = typeArg.astNode) === null || _typeArg$astNode === void 0 ? void 0 : _typeArg$astNode.type]);
          } // TODO: validate default values?
        },
        _ifaceArg$astNode,
        _typeArg$astNode;
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        if (_loop()) continue;
      } // Assert additional arguments must not be required.
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    var _iterator6 = _createForOfIteratorHelper(typeField.args),
      _step6;
    try {
      var _loop2 = function _loop2() {
        var typeArg = _step6.value;
        var argName = typeArg.name;
        var ifaceArg = ifaceField.args.find(function (arg) {
          return arg.name === argName;
        });
        if (!ifaceArg && (0, _definition.isRequiredArgument)(typeArg)) {
          context.reportError("Object field ".concat(type.name, ".").concat(fieldName, " includes required argument ").concat(argName, " that is missing from the Interface field ").concat(iface.name, ".").concat(fieldName, "."), [typeArg.astNode, ifaceField.astNode]);
        }
      };
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }
}
function validateTypeImplementsAncestors(context, type, iface) {
  var ifaceInterfaces = type.getInterfaces();
  var _iterator7 = _createForOfIteratorHelper(iface.getInterfaces()),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var transitive = _step7.value;
      if (!ifaceInterfaces.includes(transitive)) {
        context.reportError(transitive === type ? "Type ".concat(type.name, " cannot implement ").concat(iface.name, " because it would create a circular reference.") : "Type ".concat(type.name, " must implement ").concat(transitive.name, " because it is implemented by ").concat(iface.name, "."), [].concat(_toConsumableArray(getAllImplementsInterfaceNodes(iface, transitive)), _toConsumableArray(getAllImplementsInterfaceNodes(type, iface))));
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
}
function validateUnionMembers(context, union) {
  var memberTypes = union.getTypes();
  if (memberTypes.length === 0) {
    context.reportError("Union type ".concat(union.name, " must define one or more member types."), [union.astNode].concat(_toConsumableArray(union.extensionASTNodes)));
  }
  var includedTypeNames = Object.create(null);
  var _iterator8 = _createForOfIteratorHelper(memberTypes),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var memberType = _step8.value;
      if (includedTypeNames[memberType.name]) {
        context.reportError("Union type ".concat(union.name, " can only include type ").concat(memberType.name, " once."), getUnionMemberTypeNodes(union, memberType.name));
        continue;
      }
      includedTypeNames[memberType.name] = true;
      if (!(0, _definition.isObjectType)(memberType)) {
        context.reportError("Union type ".concat(union.name, " can only include Object types, ") + "it cannot include ".concat((0, _inspect.inspect)(memberType), "."), getUnionMemberTypeNodes(union, String(memberType)));
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
}
function validateEnumValues(context, enumType) {
  var enumValues = enumType.getValues();
  if (enumValues.length === 0) {
    context.reportError("Enum type ".concat(enumType.name, " must define one or more values."), [enumType.astNode].concat(_toConsumableArray(enumType.extensionASTNodes)));
  }
  var _iterator9 = _createForOfIteratorHelper(enumValues),
    _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var enumValue = _step9.value;
      // Ensure valid name.
      validateName(context, enumValue);
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
}
function validateInputFields(context, inputObj) {
  var fields = Object.values(inputObj.getFields());
  if (fields.length === 0) {
    context.reportError("Input Object type ".concat(inputObj.name, " must define one or more fields."), [inputObj.astNode].concat(_toConsumableArray(inputObj.extensionASTNodes)));
  } // Ensure the arguments are valid

  for (var _i4 = 0, _fields2 = fields; _i4 < _fields2.length; _i4++) {
    var field = _fields2[_i4];
    // Ensure they are named correctly.
    validateName(context, field); // Ensure the type is an input type

    if (!(0, _definition.isInputType)(field.type)) {
      var _field$astNode2;
      context.reportError("The type of ".concat(inputObj.name, ".").concat(field.name, " must be Input Type ") + "but got: ".concat((0, _inspect.inspect)(field.type), "."), (_field$astNode2 = field.astNode) === null || _field$astNode2 === void 0 ? void 0 : _field$astNode2.type);
    }
    if ((0, _definition.isRequiredInputField)(field) && field.deprecationReason != null) {
      var _field$astNode3;
      context.reportError("Required input field ".concat(inputObj.name, ".").concat(field.name, " cannot be deprecated."), [getDeprecatedDirectiveNode(field.astNode), (_field$astNode3 = field.astNode) === null || _field$astNode3 === void 0 ? void 0 : _field$astNode3.type]);
    }
  }
}
function createInputObjectCircularRefsValidator(context) {
  // Modified copy of algorithm from 'src/validation/rules/NoFragmentCycles.js'.
  // Tracks already visited types to maintain O(N) and to ensure that cycles
  // are not redundantly reported.
  var visitedTypes = Object.create(null); // Array of types nodes used to produce meaningful errors

  var fieldPath = []; // Position in the type path

  var fieldPathIndexByTypeName = Object.create(null);
  return detectCycleRecursive; // This does a straight-forward DFS to find cycles.
  // It does not terminate when a cycle was found but continues to explore
  // the graph to find all possible cycles.

  function detectCycleRecursive(inputObj) {
    if (visitedTypes[inputObj.name]) {
      return;
    }
    visitedTypes[inputObj.name] = true;
    fieldPathIndexByTypeName[inputObj.name] = fieldPath.length;
    var fields = Object.values(inputObj.getFields());
    for (var _i5 = 0, _fields3 = fields; _i5 < _fields3.length; _i5++) {
      var field = _fields3[_i5];
      if ((0, _definition.isNonNullType)(field.type) && (0, _definition.isInputObjectType)(field.type.ofType)) {
        var fieldType = field.type.ofType;
        var cycleIndex = fieldPathIndexByTypeName[fieldType.name];
        fieldPath.push(field);
        if (cycleIndex === undefined) {
          detectCycleRecursive(fieldType);
        } else {
          var cyclePath = fieldPath.slice(cycleIndex);
          var pathStr = cyclePath.map(function (fieldObj) {
            return fieldObj.name;
          }).join('.');
          context.reportError("Cannot reference Input Object \"".concat(fieldType.name, "\" within itself through a series of non-null fields: \"").concat(pathStr, "\"."), cyclePath.map(function (fieldObj) {
            return fieldObj.astNode;
          }));
        }
        fieldPath.pop();
      }
    }
    fieldPathIndexByTypeName[inputObj.name] = undefined;
  }
}
function getAllImplementsInterfaceNodes(type, iface) {
  var astNode = type.astNode,
    extensionASTNodes = type.extensionASTNodes;
  var nodes = astNode != null ? [astNode].concat(_toConsumableArray(extensionASTNodes)) : extensionASTNodes; // FIXME: https://github.com/graphql/graphql-js/issues/2203

  return nodes.flatMap(function (typeNode) {
    var _typeNode$interfaces;
    return (/* c8 ignore next */
      (_typeNode$interfaces = typeNode.interfaces) !== null && _typeNode$interfaces !== void 0 ? _typeNode$interfaces : []
    );
  }).filter(function (ifaceNode) {
    return ifaceNode.name.value === iface.name;
  });
}
function getUnionMemberTypeNodes(union, typeName) {
  var astNode = union.astNode,
    extensionASTNodes = union.extensionASTNodes;
  var nodes = astNode != null ? [astNode].concat(_toConsumableArray(extensionASTNodes)) : extensionASTNodes; // FIXME: https://github.com/graphql/graphql-js/issues/2203

  return nodes.flatMap(function (unionNode) {
    var _unionNode$types;
    return (/* c8 ignore next */
      (_unionNode$types = unionNode.types) !== null && _unionNode$types !== void 0 ? _unionNode$types : []
    );
  }).filter(function (typeNode) {
    return typeNode.name.value === typeName;
  });
}
function getDeprecatedDirectiveNode(definitionNode) {
  var _definitionNode$direc;
  return definitionNode === null || definitionNode === void 0 ? void 0 : (_definitionNode$direc = definitionNode.directives) === null || _definitionNode$direc === void 0 ? void 0 : _definitionNode$direc.find(function (node) {
    return node.name.value === _directives.GraphQLDeprecatedDirective.name;
  });
}
},{"../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../language/ast.mjs":"../node_modules/graphql/language/ast.mjs","../utilities/typeComparators.mjs":"../node_modules/graphql/utilities/typeComparators.mjs","./definition.mjs":"../node_modules/graphql/type/definition.mjs","./directives.mjs":"../node_modules/graphql/type/directives.mjs","./introspection.mjs":"../node_modules/graphql/type/introspection.mjs","./schema.mjs":"../node_modules/graphql/type/schema.mjs"}],"../node_modules/graphql/utilities/typeFromAST.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeFromAST = typeFromAST;
var _kinds = require("../language/kinds.mjs");
var _definition = require("../type/definition.mjs");
function typeFromAST(schema, typeNode) {
  switch (typeNode.kind) {
    case _kinds.Kind.LIST_TYPE:
      {
        var innerType = typeFromAST(schema, typeNode.type);
        return innerType && new _definition.GraphQLList(innerType);
      }
    case _kinds.Kind.NON_NULL_TYPE:
      {
        var _innerType = typeFromAST(schema, typeNode.type);
        return _innerType && new _definition.GraphQLNonNull(_innerType);
      }
    case _kinds.Kind.NAMED_TYPE:
      return schema.getType(typeNode.name.value);
  }
}
},{"../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../type/definition.mjs":"../node_modules/graphql/type/definition.mjs"}],"../node_modules/graphql/utilities/TypeInfo.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeInfo = void 0;
exports.visitWithTypeInfo = visitWithTypeInfo;
var _ast = require("../language/ast.mjs");
var _kinds = require("../language/kinds.mjs");
var _visitor = require("../language/visitor.mjs");
var _definition = require("../type/definition.mjs");
var _introspection = require("../type/introspection.mjs");
var _typeFromAST = require("./typeFromAST.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */
var TypeInfo = exports.TypeInfo = /*#__PURE__*/function (_Symbol$toStringTag) {
  function TypeInfo(schema,
  /**
   * Initial type may be provided in rare cases to facilitate traversals
   *  beginning somewhere other than documents.
   */
  initialType, /** @deprecated will be removed in 17.0.0 */
  getFieldDefFn) {
    _classCallCheck(this, TypeInfo);
    this._schema = schema;
    this._typeStack = [];
    this._parentTypeStack = [];
    this._inputTypeStack = [];
    this._fieldDefStack = [];
    this._defaultValueStack = [];
    this._directive = null;
    this._argument = null;
    this._enumValue = null;
    this._getFieldDef = getFieldDefFn !== null && getFieldDefFn !== void 0 ? getFieldDefFn : getFieldDef;
    if (initialType) {
      if ((0, _definition.isInputType)(initialType)) {
        this._inputTypeStack.push(initialType);
      }
      if ((0, _definition.isCompositeType)(initialType)) {
        this._parentTypeStack.push(initialType);
      }
      if ((0, _definition.isOutputType)(initialType)) {
        this._typeStack.push(initialType);
      }
    }
  }
  _createClass(TypeInfo, [{
    key: _Symbol$toStringTag,
    get: function get() {
      return 'TypeInfo';
    }
  }, {
    key: "getType",
    value: function getType() {
      if (this._typeStack.length > 0) {
        return this._typeStack[this._typeStack.length - 1];
      }
    }
  }, {
    key: "getParentType",
    value: function getParentType() {
      if (this._parentTypeStack.length > 0) {
        return this._parentTypeStack[this._parentTypeStack.length - 1];
      }
    }
  }, {
    key: "getInputType",
    value: function getInputType() {
      if (this._inputTypeStack.length > 0) {
        return this._inputTypeStack[this._inputTypeStack.length - 1];
      }
    }
  }, {
    key: "getParentInputType",
    value: function getParentInputType() {
      if (this._inputTypeStack.length > 1) {
        return this._inputTypeStack[this._inputTypeStack.length - 2];
      }
    }
  }, {
    key: "getFieldDef",
    value: function getFieldDef() {
      if (this._fieldDefStack.length > 0) {
        return this._fieldDefStack[this._fieldDefStack.length - 1];
      }
    }
  }, {
    key: "getDefaultValue",
    value: function getDefaultValue() {
      if (this._defaultValueStack.length > 0) {
        return this._defaultValueStack[this._defaultValueStack.length - 1];
      }
    }
  }, {
    key: "getDirective",
    value: function getDirective() {
      return this._directive;
    }
  }, {
    key: "getArgument",
    value: function getArgument() {
      return this._argument;
    }
  }, {
    key: "getEnumValue",
    value: function getEnumValue() {
      return this._enumValue;
    }
  }, {
    key: "enter",
    value: function enter(node) {
      var schema = this._schema; // Note: many of the types below are explicitly typed as "unknown" to drop
      // any assumptions of a valid schema to ensure runtime types are properly
      // checked before continuing since TypeInfo is used as part of validation
      // which occurs before guarantees of schema and document validity.

      switch (node.kind) {
        case _kinds.Kind.SELECTION_SET:
          {
            var namedType = (0, _definition.getNamedType)(this.getType());
            this._parentTypeStack.push((0, _definition.isCompositeType)(namedType) ? namedType : undefined);
            break;
          }
        case _kinds.Kind.FIELD:
          {
            var parentType = this.getParentType();
            var fieldDef;
            var fieldType;
            if (parentType) {
              fieldDef = this._getFieldDef(schema, parentType, node);
              if (fieldDef) {
                fieldType = fieldDef.type;
              }
            }
            this._fieldDefStack.push(fieldDef);
            this._typeStack.push((0, _definition.isOutputType)(fieldType) ? fieldType : undefined);
            break;
          }
        case _kinds.Kind.DIRECTIVE:
          this._directive = schema.getDirective(node.name.value);
          break;
        case _kinds.Kind.OPERATION_DEFINITION:
          {
            var rootType = schema.getRootType(node.operation);
            this._typeStack.push((0, _definition.isObjectType)(rootType) ? rootType : undefined);
            break;
          }
        case _kinds.Kind.INLINE_FRAGMENT:
        case _kinds.Kind.FRAGMENT_DEFINITION:
          {
            var typeConditionAST = node.typeCondition;
            var outputType = typeConditionAST ? (0, _typeFromAST.typeFromAST)(schema, typeConditionAST) : (0, _definition.getNamedType)(this.getType());
            this._typeStack.push((0, _definition.isOutputType)(outputType) ? outputType : undefined);
            break;
          }
        case _kinds.Kind.VARIABLE_DEFINITION:
          {
            var inputType = (0, _typeFromAST.typeFromAST)(schema, node.type);
            this._inputTypeStack.push((0, _definition.isInputType)(inputType) ? inputType : undefined);
            break;
          }
        case _kinds.Kind.ARGUMENT:
          {
            var _this$getDirective;
            var argDef;
            var argType;
            var fieldOrDirective = (_this$getDirective = this.getDirective()) !== null && _this$getDirective !== void 0 ? _this$getDirective : this.getFieldDef();
            if (fieldOrDirective) {
              argDef = fieldOrDirective.args.find(function (arg) {
                return arg.name === node.name.value;
              });
              if (argDef) {
                argType = argDef.type;
              }
            }
            this._argument = argDef;
            this._defaultValueStack.push(argDef ? argDef.defaultValue : undefined);
            this._inputTypeStack.push((0, _definition.isInputType)(argType) ? argType : undefined);
            break;
          }
        case _kinds.Kind.LIST:
          {
            var listType = (0, _definition.getNullableType)(this.getInputType());
            var itemType = (0, _definition.isListType)(listType) ? listType.ofType : listType; // List positions never have a default value.

            this._defaultValueStack.push(undefined);
            this._inputTypeStack.push((0, _definition.isInputType)(itemType) ? itemType : undefined);
            break;
          }
        case _kinds.Kind.OBJECT_FIELD:
          {
            var objectType = (0, _definition.getNamedType)(this.getInputType());
            var inputFieldType;
            var inputField;
            if ((0, _definition.isInputObjectType)(objectType)) {
              inputField = objectType.getFields()[node.name.value];
              if (inputField) {
                inputFieldType = inputField.type;
              }
            }
            this._defaultValueStack.push(inputField ? inputField.defaultValue : undefined);
            this._inputTypeStack.push((0, _definition.isInputType)(inputFieldType) ? inputFieldType : undefined);
            break;
          }
        case _kinds.Kind.ENUM:
          {
            var enumType = (0, _definition.getNamedType)(this.getInputType());
            var enumValue;
            if ((0, _definition.isEnumType)(enumType)) {
              enumValue = enumType.getValue(node.value);
            }
            this._enumValue = enumValue;
            break;
          }
        default: // Ignore other nodes
      }
    }
  }, {
    key: "leave",
    value: function leave(node) {
      switch (node.kind) {
        case _kinds.Kind.SELECTION_SET:
          this._parentTypeStack.pop();
          break;
        case _kinds.Kind.FIELD:
          this._fieldDefStack.pop();
          this._typeStack.pop();
          break;
        case _kinds.Kind.DIRECTIVE:
          this._directive = null;
          break;
        case _kinds.Kind.OPERATION_DEFINITION:
        case _kinds.Kind.INLINE_FRAGMENT:
        case _kinds.Kind.FRAGMENT_DEFINITION:
          this._typeStack.pop();
          break;
        case _kinds.Kind.VARIABLE_DEFINITION:
          this._inputTypeStack.pop();
          break;
        case _kinds.Kind.ARGUMENT:
          this._argument = null;
          this._defaultValueStack.pop();
          this._inputTypeStack.pop();
          break;
        case _kinds.Kind.LIST:
        case _kinds.Kind.OBJECT_FIELD:
          this._defaultValueStack.pop();
          this._inputTypeStack.pop();
          break;
        case _kinds.Kind.ENUM:
          this._enumValue = null;
          break;
        default: // Ignore other nodes
      }
    }
  }]);
  return TypeInfo;
}(Symbol.toStringTag);
/**
 * Not exactly the same as the executor's definition of getFieldDef, in this
 * statically evaluated environment we do not always have an Object type,
 * and need to handle Interface and Union types.
 */
function getFieldDef(schema, parentType, fieldNode) {
  var name = fieldNode.name.value;
  if (name === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _introspection.SchemaMetaFieldDef;
  }
  if (name === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _introspection.TypeMetaFieldDef;
  }
  if (name === _introspection.TypeNameMetaFieldDef.name && (0, _definition.isCompositeType)(parentType)) {
    return _introspection.TypeNameMetaFieldDef;
  }
  if ((0, _definition.isObjectType)(parentType) || (0, _definition.isInterfaceType)(parentType)) {
    return parentType.getFields()[name];
  }
}
/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */

function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var node = args[0];
      typeInfo.enter(node);
      var fn = (0, _visitor.getEnterLeaveForKind)(visitor, node.kind).enter;
      if (fn) {
        var result = fn.apply(visitor, args);
        if (result !== undefined) {
          typeInfo.leave(node);
          if ((0, _ast.isNode)(result)) {
            typeInfo.enter(result);
          }
        }
        return result;
      }
    },
    leave: function leave() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      var node = args[0];
      var fn = (0, _visitor.getEnterLeaveForKind)(visitor, node.kind).leave;
      var result;
      if (fn) {
        result = fn.apply(visitor, args);
      }
      typeInfo.leave(node);
      return result;
    }
  };
}
},{"../language/ast.mjs":"../node_modules/graphql/language/ast.mjs","../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../language/visitor.mjs":"../node_modules/graphql/language/visitor.mjs","../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../type/introspection.mjs":"../node_modules/graphql/type/introspection.mjs","./typeFromAST.mjs":"../node_modules/graphql/utilities/typeFromAST.mjs"}],"../node_modules/graphql/language/predicates.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isConstValueNode = isConstValueNode;
exports.isDefinitionNode = isDefinitionNode;
exports.isExecutableDefinitionNode = isExecutableDefinitionNode;
exports.isSelectionNode = isSelectionNode;
exports.isTypeDefinitionNode = isTypeDefinitionNode;
exports.isTypeExtensionNode = isTypeExtensionNode;
exports.isTypeNode = isTypeNode;
exports.isTypeSystemDefinitionNode = isTypeSystemDefinitionNode;
exports.isTypeSystemExtensionNode = isTypeSystemExtensionNode;
exports.isValueNode = isValueNode;
var _kinds = require("./kinds.mjs");
function isDefinitionNode(node) {
  return isExecutableDefinitionNode(node) || isTypeSystemDefinitionNode(node) || isTypeSystemExtensionNode(node);
}
function isExecutableDefinitionNode(node) {
  return node.kind === _kinds.Kind.OPERATION_DEFINITION || node.kind === _kinds.Kind.FRAGMENT_DEFINITION;
}
function isSelectionNode(node) {
  return node.kind === _kinds.Kind.FIELD || node.kind === _kinds.Kind.FRAGMENT_SPREAD || node.kind === _kinds.Kind.INLINE_FRAGMENT;
}
function isValueNode(node) {
  return node.kind === _kinds.Kind.VARIABLE || node.kind === _kinds.Kind.INT || node.kind === _kinds.Kind.FLOAT || node.kind === _kinds.Kind.STRING || node.kind === _kinds.Kind.BOOLEAN || node.kind === _kinds.Kind.NULL || node.kind === _kinds.Kind.ENUM || node.kind === _kinds.Kind.LIST || node.kind === _kinds.Kind.OBJECT;
}
function isConstValueNode(node) {
  return isValueNode(node) && (node.kind === _kinds.Kind.LIST ? node.values.some(isConstValueNode) : node.kind === _kinds.Kind.OBJECT ? node.fields.some(function (field) {
    return isConstValueNode(field.value);
  }) : node.kind !== _kinds.Kind.VARIABLE);
}
function isTypeNode(node) {
  return node.kind === _kinds.Kind.NAMED_TYPE || node.kind === _kinds.Kind.LIST_TYPE || node.kind === _kinds.Kind.NON_NULL_TYPE;
}
function isTypeSystemDefinitionNode(node) {
  return node.kind === _kinds.Kind.SCHEMA_DEFINITION || isTypeDefinitionNode(node) || node.kind === _kinds.Kind.DIRECTIVE_DEFINITION;
}
function isTypeDefinitionNode(node) {
  return node.kind === _kinds.Kind.SCALAR_TYPE_DEFINITION || node.kind === _kinds.Kind.OBJECT_TYPE_DEFINITION || node.kind === _kinds.Kind.INTERFACE_TYPE_DEFINITION || node.kind === _kinds.Kind.UNION_TYPE_DEFINITION || node.kind === _kinds.Kind.ENUM_TYPE_DEFINITION || node.kind === _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION;
}
function isTypeSystemExtensionNode(node) {
  return node.kind === _kinds.Kind.SCHEMA_EXTENSION || isTypeExtensionNode(node);
}
function isTypeExtensionNode(node) {
  return node.kind === _kinds.Kind.SCALAR_TYPE_EXTENSION || node.kind === _kinds.Kind.OBJECT_TYPE_EXTENSION || node.kind === _kinds.Kind.INTERFACE_TYPE_EXTENSION || node.kind === _kinds.Kind.UNION_TYPE_EXTENSION || node.kind === _kinds.Kind.ENUM_TYPE_EXTENSION || node.kind === _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION;
}
},{"./kinds.mjs":"../node_modules/graphql/language/kinds.mjs"}],"../node_modules/graphql/validation/rules/ExecutableDefinitionsRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExecutableDefinitionsRule = ExecutableDefinitionsRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _kinds = require("../../language/kinds.mjs");
var _predicates = require("../../language/predicates.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Executable definitions
 *
 * A GraphQL document is only valid for execution if all definitions are either
 * operation or fragment definitions.
 *
 * See https://spec.graphql.org/draft/#sec-Executable-Definitions
 */
function ExecutableDefinitionsRule(context) {
  return {
    Document: function Document(node) {
      var _iterator = _createForOfIteratorHelper(node.definitions),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var definition = _step.value;
          if (!(0, _predicates.isExecutableDefinitionNode)(definition)) {
            var defName = definition.kind === _kinds.Kind.SCHEMA_DEFINITION || definition.kind === _kinds.Kind.SCHEMA_EXTENSION ? 'schema' : '"' + definition.name.value + '"';
            context.reportError(new _GraphQLError.GraphQLError("The ".concat(defName, " definition is not executable."), {
              nodes: definition
            }));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return false;
    }
  };
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../../language/predicates.mjs":"../node_modules/graphql/language/predicates.mjs"}],"../node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldsOnCorrectTypeRule = FieldsOnCorrectTypeRule;
var _didYouMean = require("../../jsutils/didYouMean.mjs");
var _naturalCompare = require("../../jsutils/naturalCompare.mjs");
var _suggestionList = require("../../jsutils/suggestionList.mjs");
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _definition = require("../../type/definition.mjs");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Fields on correct type
 *
 * A GraphQL document is only valid if all fields selected are defined by the
 * parent type, or are an allowed meta field such as __typename.
 *
 * See https://spec.graphql.org/draft/#sec-Field-Selections
 */
function FieldsOnCorrectTypeRule(context) {
  return {
    Field: function Field(node) {
      var type = context.getParentType();
      if (type) {
        var fieldDef = context.getFieldDef();
        if (!fieldDef) {
          // This field doesn't exist, lets look for suggestions.
          var schema = context.getSchema();
          var fieldName = node.name.value; // First determine if there are any suggested types to condition on.

          var suggestion = (0, _didYouMean.didYouMean)('to use an inline fragment on', getSuggestedTypeNames(schema, type, fieldName)); // If there are no suggested types, then perhaps this was a typo?

          if (suggestion === '') {
            suggestion = (0, _didYouMean.didYouMean)(getSuggestedFieldNames(type, fieldName));
          } // Report an error, including helpful suggestions.

          context.reportError(new _GraphQLError.GraphQLError("Cannot query field \"".concat(fieldName, "\" on type \"").concat(type.name, "\".") + suggestion, {
            nodes: node
          }));
        }
      }
    }
  };
}
/**
 * Go through all of the implementations of type, as well as the interfaces that
 * they implement. If any of those types include the provided field, suggest them,
 * sorted by how often the type is referenced.
 */

function getSuggestedTypeNames(schema, type, fieldName) {
  if (!(0, _definition.isAbstractType)(type)) {
    // Must be an Object type, which does not have possible fields.
    return [];
  }
  var suggestedTypes = new Set();
  var usageCount = Object.create(null);
  var _iterator = _createForOfIteratorHelper(schema.getPossibleTypes(type)),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var possibleType = _step.value;
      if (!possibleType.getFields()[fieldName]) {
        continue;
      } // This object type defines this field.

      suggestedTypes.add(possibleType);
      usageCount[possibleType.name] = 1;
      var _iterator2 = _createForOfIteratorHelper(possibleType.getInterfaces()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var possibleInterface = _step2.value;
          var _usageCount$possibleI;
          if (!possibleInterface.getFields()[fieldName]) {
            continue;
          } // This interface type defines this field.

          suggestedTypes.add(possibleInterface);
          usageCount[possibleInterface.name] = ((_usageCount$possibleI = usageCount[possibleInterface.name]) !== null && _usageCount$possibleI !== void 0 ? _usageCount$possibleI : 0) + 1;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return _toConsumableArray(suggestedTypes).sort(function (typeA, typeB) {
    // Suggest both interface and object types based on how common they are.
    var usageCountDiff = usageCount[typeB.name] - usageCount[typeA.name];
    if (usageCountDiff !== 0) {
      return usageCountDiff;
    } // Suggest super types first followed by subtypes

    if ((0, _definition.isInterfaceType)(typeA) && schema.isSubType(typeA, typeB)) {
      return -1;
    }
    if ((0, _definition.isInterfaceType)(typeB) && schema.isSubType(typeB, typeA)) {
      return 1;
    }
    return (0, _naturalCompare.naturalCompare)(typeA.name, typeB.name);
  }).map(function (x) {
    return x.name;
  });
}
/**
 * For the field name provided, determine if there are any similar field names
 * that may be the result of a typo.
 */

function getSuggestedFieldNames(type, fieldName) {
  if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
    var possibleFieldNames = Object.keys(type.getFields());
    return (0, _suggestionList.suggestionList)(fieldName, possibleFieldNames);
  } // Otherwise, must be a Union type, which does not define fields.

  return [];
}
},{"../../jsutils/didYouMean.mjs":"../node_modules/graphql/jsutils/didYouMean.mjs","../../jsutils/naturalCompare.mjs":"../node_modules/graphql/jsutils/naturalCompare.mjs","../../jsutils/suggestionList.mjs":"../node_modules/graphql/jsutils/suggestionList.mjs","../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../type/definition.mjs":"../node_modules/graphql/type/definition.mjs"}],"../node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FragmentsOnCompositeTypesRule = FragmentsOnCompositeTypesRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _printer = require("../../language/printer.mjs");
var _definition = require("../../type/definition.mjs");
var _typeFromAST = require("../../utilities/typeFromAST.mjs");
/**
 * Fragments on composite type
 *
 * Fragments use a type condition to determine if they apply, since fragments
 * can only be spread into a composite type (object, interface, or union), the
 * type condition must also be a composite type.
 *
 * See https://spec.graphql.org/draft/#sec-Fragments-On-Composite-Types
 */
function FragmentsOnCompositeTypesRule(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var typeCondition = node.typeCondition;
      if (typeCondition) {
        var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), typeCondition);
        if (type && !(0, _definition.isCompositeType)(type)) {
          var typeStr = (0, _printer.print)(typeCondition);
          context.reportError(new _GraphQLError.GraphQLError("Fragment cannot condition on non composite type \"".concat(typeStr, "\"."), {
            nodes: typeCondition
          }));
        }
      }
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), node.typeCondition);
      if (type && !(0, _definition.isCompositeType)(type)) {
        var typeStr = (0, _printer.print)(node.typeCondition);
        context.reportError(new _GraphQLError.GraphQLError("Fragment \"".concat(node.name.value, "\" cannot condition on non composite type \"").concat(typeStr, "\"."), {
          nodes: node.typeCondition
        }));
      }
    }
  };
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../language/printer.mjs":"../node_modules/graphql/language/printer.mjs","../../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../../utilities/typeFromAST.mjs":"../node_modules/graphql/utilities/typeFromAST.mjs"}],"../node_modules/graphql/validation/rules/KnownArgumentNamesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KnownArgumentNamesOnDirectivesRule = KnownArgumentNamesOnDirectivesRule;
exports.KnownArgumentNamesRule = KnownArgumentNamesRule;
var _didYouMean = require("../../jsutils/didYouMean.mjs");
var _suggestionList = require("../../jsutils/suggestionList.mjs");
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _kinds = require("../../language/kinds.mjs");
var _directives = require("../../type/directives.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Known argument names
 *
 * A GraphQL field is only valid if all supplied arguments are defined by
 * that field.
 *
 * See https://spec.graphql.org/draft/#sec-Argument-Names
 * See https://spec.graphql.org/draft/#sec-Directives-Are-In-Valid-Locations
 */
function KnownArgumentNamesRule(context) {
  return _objectSpread(_objectSpread({}, KnownArgumentNamesOnDirectivesRule(context)), {}, {
    Argument: function Argument(argNode) {
      var argDef = context.getArgument();
      var fieldDef = context.getFieldDef();
      var parentType = context.getParentType();
      if (!argDef && fieldDef && parentType) {
        var argName = argNode.name.value;
        var knownArgsNames = fieldDef.args.map(function (arg) {
          return arg.name;
        });
        var suggestions = (0, _suggestionList.suggestionList)(argName, knownArgsNames);
        context.reportError(new _GraphQLError.GraphQLError("Unknown argument \"".concat(argName, "\" on field \"").concat(parentType.name, ".").concat(fieldDef.name, "\".") + (0, _didYouMean.didYouMean)(suggestions), {
          nodes: argNode
        }));
      }
    }
  });
}
/**
 * @internal
 */

function KnownArgumentNamesOnDirectivesRule(context) {
  var directiveArgs = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _directives.specifiedDirectives;
  var _iterator = _createForOfIteratorHelper(definedDirectives),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var directive = _step.value;
      directiveArgs[directive.name] = directive.args.map(function (arg) {
        return arg.name;
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var astDefinitions = context.getDocument().definitions;
  var _iterator2 = _createForOfIteratorHelper(astDefinitions),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var def = _step2.value;
      if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
        var _def$arguments;

        // FIXME: https://github.com/graphql/graphql-js/issues/2203

        /* c8 ignore next */
        var argsNodes = (_def$arguments = def.arguments) !== null && _def$arguments !== void 0 ? _def$arguments : [];
        directiveArgs[def.name.value] = argsNodes.map(function (arg) {
          return arg.name.value;
        });
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return {
    Directive: function Directive(directiveNode) {
      var directiveName = directiveNode.name.value;
      var knownArgs = directiveArgs[directiveName];
      if (directiveNode.arguments && knownArgs) {
        var _iterator3 = _createForOfIteratorHelper(directiveNode.arguments),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var argNode = _step3.value;
            var argName = argNode.name.value;
            if (!knownArgs.includes(argName)) {
              var suggestions = (0, _suggestionList.suggestionList)(argName, knownArgs);
              context.reportError(new _GraphQLError.GraphQLError("Unknown argument \"".concat(argName, "\" on directive \"@").concat(directiveName, "\".") + (0, _didYouMean.didYouMean)(suggestions), {
                nodes: argNode
              }));
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return false;
    }
  };
}
},{"../../jsutils/didYouMean.mjs":"../node_modules/graphql/jsutils/didYouMean.mjs","../../jsutils/suggestionList.mjs":"../node_modules/graphql/jsutils/suggestionList.mjs","../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../../type/directives.mjs":"../node_modules/graphql/type/directives.mjs"}],"../node_modules/graphql/validation/rules/KnownDirectivesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KnownDirectivesRule = KnownDirectivesRule;
var _inspect = require("../../jsutils/inspect.mjs");
var _invariant = require("../../jsutils/invariant.mjs");
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _ast = require("../../language/ast.mjs");
var _directiveLocation = require("../../language/directiveLocation.mjs");
var _kinds = require("../../language/kinds.mjs");
var _directives = require("../../type/directives.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Known directives
 *
 * A GraphQL document is only valid if all `@directives` are known by the
 * schema and legally positioned.
 *
 * See https://spec.graphql.org/draft/#sec-Directives-Are-Defined
 */
function KnownDirectivesRule(context) {
  var locationsMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _directives.specifiedDirectives;
  var _iterator = _createForOfIteratorHelper(definedDirectives),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var directive = _step.value;
      locationsMap[directive.name] = directive.locations;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var astDefinitions = context.getDocument().definitions;
  var _iterator2 = _createForOfIteratorHelper(astDefinitions),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var def = _step2.value;
      if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
        locationsMap[def.name.value] = def.locations.map(function (name) {
          return name.value;
        });
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return {
    Directive: function Directive(node, _key, _parent, _path, ancestors) {
      var name = node.name.value;
      var locations = locationsMap[name];
      if (!locations) {
        context.reportError(new _GraphQLError.GraphQLError("Unknown directive \"@".concat(name, "\"."), {
          nodes: node
        }));
        return;
      }
      var candidateLocation = getDirectiveLocationForASTPath(ancestors);
      if (candidateLocation && !locations.includes(candidateLocation)) {
        context.reportError(new _GraphQLError.GraphQLError("Directive \"@".concat(name, "\" may not be used on ").concat(candidateLocation, "."), {
          nodes: node
        }));
      }
    }
  };
}
function getDirectiveLocationForASTPath(ancestors) {
  var appliedTo = ancestors[ancestors.length - 1];
  'kind' in appliedTo || (0, _invariant.invariant)(false);
  switch (appliedTo.kind) {
    case _kinds.Kind.OPERATION_DEFINITION:
      return getDirectiveLocationForOperation(appliedTo.operation);
    case _kinds.Kind.FIELD:
      return _directiveLocation.DirectiveLocation.FIELD;
    case _kinds.Kind.FRAGMENT_SPREAD:
      return _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD;
    case _kinds.Kind.INLINE_FRAGMENT:
      return _directiveLocation.DirectiveLocation.INLINE_FRAGMENT;
    case _kinds.Kind.FRAGMENT_DEFINITION:
      return _directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION;
    case _kinds.Kind.VARIABLE_DEFINITION:
      return _directiveLocation.DirectiveLocation.VARIABLE_DEFINITION;
    case _kinds.Kind.SCHEMA_DEFINITION:
    case _kinds.Kind.SCHEMA_EXTENSION:
      return _directiveLocation.DirectiveLocation.SCHEMA;
    case _kinds.Kind.SCALAR_TYPE_DEFINITION:
    case _kinds.Kind.SCALAR_TYPE_EXTENSION:
      return _directiveLocation.DirectiveLocation.SCALAR;
    case _kinds.Kind.OBJECT_TYPE_DEFINITION:
    case _kinds.Kind.OBJECT_TYPE_EXTENSION:
      return _directiveLocation.DirectiveLocation.OBJECT;
    case _kinds.Kind.FIELD_DEFINITION:
      return _directiveLocation.DirectiveLocation.FIELD_DEFINITION;
    case _kinds.Kind.INTERFACE_TYPE_DEFINITION:
    case _kinds.Kind.INTERFACE_TYPE_EXTENSION:
      return _directiveLocation.DirectiveLocation.INTERFACE;
    case _kinds.Kind.UNION_TYPE_DEFINITION:
    case _kinds.Kind.UNION_TYPE_EXTENSION:
      return _directiveLocation.DirectiveLocation.UNION;
    case _kinds.Kind.ENUM_TYPE_DEFINITION:
    case _kinds.Kind.ENUM_TYPE_EXTENSION:
      return _directiveLocation.DirectiveLocation.ENUM;
    case _kinds.Kind.ENUM_VALUE_DEFINITION:
      return _directiveLocation.DirectiveLocation.ENUM_VALUE;
    case _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION:
    case _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
      return _directiveLocation.DirectiveLocation.INPUT_OBJECT;
    case _kinds.Kind.INPUT_VALUE_DEFINITION:
      {
        var parentNode = ancestors[ancestors.length - 3];
        'kind' in parentNode || (0, _invariant.invariant)(false);
        return parentNode.kind === _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION ? _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION : _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION;
      }
    // Not reachable, all possible types have been considered.

    /* c8 ignore next */

    default:
      false || (0, _invariant.invariant)(false, 'Unexpected kind: ' + (0, _inspect.inspect)(appliedTo.kind));
  }
}
function getDirectiveLocationForOperation(operation) {
  switch (operation) {
    case _ast.OperationTypeNode.QUERY:
      return _directiveLocation.DirectiveLocation.QUERY;
    case _ast.OperationTypeNode.MUTATION:
      return _directiveLocation.DirectiveLocation.MUTATION;
    case _ast.OperationTypeNode.SUBSCRIPTION:
      return _directiveLocation.DirectiveLocation.SUBSCRIPTION;
  }
}
},{"../../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../../jsutils/invariant.mjs":"../node_modules/graphql/jsutils/invariant.mjs","../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../language/ast.mjs":"../node_modules/graphql/language/ast.mjs","../../language/directiveLocation.mjs":"../node_modules/graphql/language/directiveLocation.mjs","../../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../../type/directives.mjs":"../node_modules/graphql/type/directives.mjs"}],"../node_modules/graphql/validation/rules/KnownFragmentNamesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KnownFragmentNamesRule = KnownFragmentNamesRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
/**
 * Known fragment names
 *
 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
 * to fragments defined in the same document.
 *
 * See https://spec.graphql.org/draft/#sec-Fragment-spread-target-defined
 */
function KnownFragmentNamesRule(context) {
  return {
    FragmentSpread: function FragmentSpread(node) {
      var fragmentName = node.name.value;
      var fragment = context.getFragment(fragmentName);
      if (!fragment) {
        context.reportError(new _GraphQLError.GraphQLError("Unknown fragment \"".concat(fragmentName, "\"."), {
          nodes: node.name
        }));
      }
    }
  };
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KnownTypeNamesRule = KnownTypeNamesRule;
var _didYouMean = require("../../jsutils/didYouMean.mjs");
var _suggestionList = require("../../jsutils/suggestionList.mjs");
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _predicates = require("../../language/predicates.mjs");
var _introspection = require("../../type/introspection.mjs");
var _scalars = require("../../type/scalars.mjs");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Known type names
 *
 * A GraphQL document is only valid if referenced types (specifically
 * variable definitions and fragment conditions) are defined by the type schema.
 *
 * See https://spec.graphql.org/draft/#sec-Fragment-Spread-Type-Existence
 */
function KnownTypeNamesRule(context) {
  var schema = context.getSchema();
  var existingTypesMap = schema ? schema.getTypeMap() : Object.create(null);
  var definedTypes = Object.create(null);
  var _iterator = _createForOfIteratorHelper(context.getDocument().definitions),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var def = _step.value;
      if ((0, _predicates.isTypeDefinitionNode)(def)) {
        definedTypes[def.name.value] = true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var typeNames = [].concat(_toConsumableArray(Object.keys(existingTypesMap)), _toConsumableArray(Object.keys(definedTypes)));
  return {
    NamedType: function NamedType(node, _1, parent, _2, ancestors) {
      var typeName = node.name.value;
      if (!existingTypesMap[typeName] && !definedTypes[typeName]) {
        var _ancestors$;
        var definitionNode = (_ancestors$ = ancestors[2]) !== null && _ancestors$ !== void 0 ? _ancestors$ : parent;
        var isSDL = definitionNode != null && isSDLNode(definitionNode);
        if (isSDL && standardTypeNames.includes(typeName)) {
          return;
        }
        var suggestedTypes = (0, _suggestionList.suggestionList)(typeName, isSDL ? standardTypeNames.concat(typeNames) : typeNames);
        context.reportError(new _GraphQLError.GraphQLError("Unknown type \"".concat(typeName, "\".") + (0, _didYouMean.didYouMean)(suggestedTypes), {
          nodes: node
        }));
      }
    }
  };
}
var standardTypeNames = [].concat(_toConsumableArray(_scalars.specifiedScalarTypes), _toConsumableArray(_introspection.introspectionTypes)).map(function (type) {
  return type.name;
});
function isSDLNode(value) {
  return 'kind' in value && ((0, _predicates.isTypeSystemDefinitionNode)(value) || (0, _predicates.isTypeSystemExtensionNode)(value));
}
},{"../../jsutils/didYouMean.mjs":"../node_modules/graphql/jsutils/didYouMean.mjs","../../jsutils/suggestionList.mjs":"../node_modules/graphql/jsutils/suggestionList.mjs","../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../language/predicates.mjs":"../node_modules/graphql/language/predicates.mjs","../../type/introspection.mjs":"../node_modules/graphql/type/introspection.mjs","../../type/scalars.mjs":"../node_modules/graphql/type/scalars.mjs"}],"../node_modules/graphql/validation/rules/LoneAnonymousOperationRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoneAnonymousOperationRule = LoneAnonymousOperationRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _kinds = require("../../language/kinds.mjs");
/**
 * Lone anonymous operation
 *
 * A GraphQL document is only valid if when it contains an anonymous operation
 * (the query short-hand) that it contains only that one operation definition.
 *
 * See https://spec.graphql.org/draft/#sec-Lone-Anonymous-Operation
 */
function LoneAnonymousOperationRule(context) {
  var operationCount = 0;
  return {
    Document: function Document(node) {
      operationCount = node.definitions.filter(function (definition) {
        return definition.kind === _kinds.Kind.OPERATION_DEFINITION;
      }).length;
    },
    OperationDefinition: function OperationDefinition(node) {
      if (!node.name && operationCount > 1) {
        context.reportError(new _GraphQLError.GraphQLError('This anonymous operation must be the only defined operation.', {
          nodes: node
        }));
      }
    }
  };
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs"}],"../node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoneSchemaDefinitionRule = LoneSchemaDefinitionRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
/**
 * Lone Schema definition
 *
 * A GraphQL document is only valid if it contains only one schema definition.
 */
function LoneSchemaDefinitionRule(context) {
  var _ref, _ref2, _oldSchema$astNode;
  var oldSchema = context.getSchema();
  var alreadyDefined = (_ref = (_ref2 = (_oldSchema$astNode = oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.astNode) !== null && _oldSchema$astNode !== void 0 ? _oldSchema$astNode : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getQueryType()) !== null && _ref2 !== void 0 ? _ref2 : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getMutationType()) !== null && _ref !== void 0 ? _ref : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getSubscriptionType();
  var schemaDefinitionsCount = 0;
  return {
    SchemaDefinition: function SchemaDefinition(node) {
      if (alreadyDefined) {
        context.reportError(new _GraphQLError.GraphQLError('Cannot define a new schema within a schema extension.', {
          nodes: node
        }));
        return;
      }
      if (schemaDefinitionsCount > 0) {
        context.reportError(new _GraphQLError.GraphQLError('Must provide only one schema definition.', {
          nodes: node
        }));
      }
      ++schemaDefinitionsCount;
    }
  };
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/validation/rules/NoFragmentCyclesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoFragmentCyclesRule = NoFragmentCyclesRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * No fragment cycles
 *
 * The graph of fragment spreads must not form any cycles including spreading itself.
 * Otherwise an operation could infinitely spread or infinitely execute on cycles in the underlying data.
 *
 * See https://spec.graphql.org/draft/#sec-Fragment-spreads-must-not-form-cycles
 */
function NoFragmentCyclesRule(context) {
  // Tracks already visited fragments to maintain O(N) and to ensure that cycles
  // are not redundantly reported.
  var visitedFrags = Object.create(null); // Array of AST nodes used to produce meaningful errors

  var spreadPath = []; // Position in the spread path

  var spreadPathIndexByName = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      detectCycleRecursive(node);
      return false;
    }
  }; // This does a straight-forward DFS to find cycles.
  // It does not terminate when a cycle was found but continues to explore
  // the graph to find all possible cycles.

  function detectCycleRecursive(fragment) {
    if (visitedFrags[fragment.name.value]) {
      return;
    }
    var fragmentName = fragment.name.value;
    visitedFrags[fragmentName] = true;
    var spreadNodes = context.getFragmentSpreads(fragment.selectionSet);
    if (spreadNodes.length === 0) {
      return;
    }
    spreadPathIndexByName[fragmentName] = spreadPath.length;
    var _iterator = _createForOfIteratorHelper(spreadNodes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var spreadNode = _step.value;
        var spreadName = spreadNode.name.value;
        var cycleIndex = spreadPathIndexByName[spreadName];
        spreadPath.push(spreadNode);
        if (cycleIndex === undefined) {
          var spreadFragment = context.getFragment(spreadName);
          if (spreadFragment) {
            detectCycleRecursive(spreadFragment);
          }
        } else {
          var cyclePath = spreadPath.slice(cycleIndex);
          var viaPath = cyclePath.slice(0, -1).map(function (s) {
            return '"' + s.name.value + '"';
          }).join(', ');
          context.reportError(new _GraphQLError.GraphQLError("Cannot spread fragment \"".concat(spreadName, "\" within itself") + (viaPath !== '' ? " via ".concat(viaPath, ".") : '.'), {
            nodes: cyclePath
          }));
        }
        spreadPath.pop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    spreadPathIndexByName[fragmentName] = undefined;
  }
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/validation/rules/NoUndefinedVariablesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoUndefinedVariablesRule = NoUndefinedVariablesRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * No undefined variables
 *
 * A GraphQL operation is only valid if all variables encountered, both directly
 * and via fragment spreads, are defined by that operation.
 *
 * See https://spec.graphql.org/draft/#sec-All-Variable-Uses-Defined
 */
function NoUndefinedVariablesRule(context) {
  var variableNameDefined = Object.create(null);
  return {
    OperationDefinition: {
      enter: function enter() {
        variableNameDefined = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);
        var _iterator = _createForOfIteratorHelper(usages),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var node = _step.value.node;
            var varName = node.name.value;
            if (variableNameDefined[varName] !== true) {
              context.reportError(new _GraphQLError.GraphQLError(operation.name ? "Variable \"$".concat(varName, "\" is not defined by operation \"").concat(operation.name.value, "\".") : "Variable \"$".concat(varName, "\" is not defined."), {
                nodes: [node, operation]
              }));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      variableNameDefined[node.variable.name.value] = true;
    }
  };
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/validation/rules/NoUnusedFragmentsRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoUnusedFragmentsRule = NoUnusedFragmentsRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * No unused fragments
 *
 * A GraphQL document is only valid if all fragment definitions are spread
 * within operations, or spread within other fragments spread within operations.
 *
 * See https://spec.graphql.org/draft/#sec-Fragments-Must-Be-Used
 */
function NoUnusedFragmentsRule(context) {
  var operationDefs = [];
  var fragmentDefs = [];
  return {
    OperationDefinition: function OperationDefinition(node) {
      operationDefs.push(node);
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fragmentDefs.push(node);
      return false;
    },
    Document: {
      leave: function leave() {
        var fragmentNameUsed = Object.create(null);
        for (var _i = 0, _operationDefs = operationDefs; _i < _operationDefs.length; _i++) {
          var operation = _operationDefs[_i];
          var _iterator = _createForOfIteratorHelper(context.getRecursivelyReferencedFragments(operation)),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var fragment = _step.value;
              fragmentNameUsed[fragment.name.value] = true;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        for (var _i2 = 0, _fragmentDefs = fragmentDefs; _i2 < _fragmentDefs.length; _i2++) {
          var fragmentDef = _fragmentDefs[_i2];
          var fragName = fragmentDef.name.value;
          if (fragmentNameUsed[fragName] !== true) {
            context.reportError(new _GraphQLError.GraphQLError("Fragment \"".concat(fragName, "\" is never used."), {
              nodes: fragmentDef
            }));
          }
        }
      }
    }
  };
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/validation/rules/NoUnusedVariablesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoUnusedVariablesRule = NoUnusedVariablesRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * No unused variables
 *
 * A GraphQL operation is only valid if all variables defined by an operation
 * are used, either directly or within a spread fragment.
 *
 * See https://spec.graphql.org/draft/#sec-All-Variables-Used
 */
function NoUnusedVariablesRule(context) {
  var variableDefs = [];
  return {
    OperationDefinition: {
      enter: function enter() {
        variableDefs = [];
      },
      leave: function leave(operation) {
        var variableNameUsed = Object.create(null);
        var usages = context.getRecursiveVariableUsages(operation);
        var _iterator = _createForOfIteratorHelper(usages),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var node = _step.value.node;
            variableNameUsed[node.name.value] = true;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        for (var _i = 0, _variableDefs = variableDefs; _i < _variableDefs.length; _i++) {
          var variableDef = _variableDefs[_i];
          var variableName = variableDef.variable.name.value;
          if (variableNameUsed[variableName] !== true) {
            context.reportError(new _GraphQLError.GraphQLError(operation.name ? "Variable \"$".concat(variableName, "\" is never used in operation \"").concat(operation.name.value, "\".") : "Variable \"$".concat(variableName, "\" is never used."), {
              nodes: variableDef
            }));
          }
        }
      }
    },
    VariableDefinition: function VariableDefinition(def) {
      variableDefs.push(def);
    }
  };
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/utilities/sortValueNode.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortValueNode = sortValueNode;
var _naturalCompare = require("../jsutils/naturalCompare.mjs");
var _kinds = require("../language/kinds.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Sort ValueNode.
 *
 * This function returns a sorted copy of the given ValueNode.
 *
 * @internal
 */

function sortValueNode(valueNode) {
  switch (valueNode.kind) {
    case _kinds.Kind.OBJECT:
      return _objectSpread(_objectSpread({}, valueNode), {}, {
        fields: sortFields(valueNode.fields)
      });
    case _kinds.Kind.LIST:
      return _objectSpread(_objectSpread({}, valueNode), {}, {
        values: valueNode.values.map(sortValueNode)
      });
    case _kinds.Kind.INT:
    case _kinds.Kind.FLOAT:
    case _kinds.Kind.STRING:
    case _kinds.Kind.BOOLEAN:
    case _kinds.Kind.NULL:
    case _kinds.Kind.ENUM:
    case _kinds.Kind.VARIABLE:
      return valueNode;
  }
}
function sortFields(fields) {
  return fields.map(function (fieldNode) {
    return _objectSpread(_objectSpread({}, fieldNode), {}, {
      value: sortValueNode(fieldNode.value)
    });
  }).sort(function (fieldA, fieldB) {
    return (0, _naturalCompare.naturalCompare)(fieldA.name.value, fieldB.name.value);
  });
}
},{"../jsutils/naturalCompare.mjs":"../node_modules/graphql/jsutils/naturalCompare.mjs","../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs"}],"../node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlappingFieldsCanBeMergedRule = OverlappingFieldsCanBeMergedRule;
var _inspect = require("../../jsutils/inspect.mjs");
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _kinds = require("../../language/kinds.mjs");
var _printer = require("../../language/printer.mjs");
var _definition = require("../../type/definition.mjs");
var _sortValueNode = require("../../utilities/sortValueNode.mjs");
var _typeFromAST = require("../../utilities/typeFromAST.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function reasonMessage(reason) {
  if (Array.isArray(reason)) {
    return reason.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        responseName = _ref2[0],
        subReason = _ref2[1];
      return "subfields \"".concat(responseName, "\" conflict because ") + reasonMessage(subReason);
    }).join(' and ');
  }
  return reason;
}
/**
 * Overlapping fields can be merged
 *
 * A selection set is only valid if all fields (including spreading any
 * fragments) either correspond to distinct response names or can be merged
 * without ambiguity.
 *
 * See https://spec.graphql.org/draft/#sec-Field-Selection-Merging
 */

function OverlappingFieldsCanBeMergedRule(context) {
  // A memoization for when two fragments are compared "between" each other for
  // conflicts. Two fragments may be compared many times, so memoizing this can
  // dramatically improve the performance of this validator.
  var comparedFragmentPairs = new PairSet(); // A cache for the "field map" and list of fragment names found in any given
  // selection set. Selection sets may be asked for this information multiple
  // times, so this improves the performance of this validator.

  var cachedFieldsAndFragmentNames = new Map();
  return {
    SelectionSet: function SelectionSet(selectionSet) {
      var conflicts = findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, context.getParentType(), selectionSet);
      var _iterator = _createForOfIteratorHelper(conflicts),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 3),
            _step$value$ = _slicedToArray(_step$value[0], 2),
            responseName = _step$value$[0],
            reason = _step$value$[1],
            fields1 = _step$value[1],
            fields2 = _step$value[2];
          var reasonMsg = reasonMessage(reason);
          context.reportError(new _GraphQLError.GraphQLError("Fields \"".concat(responseName, "\" conflict because ").concat(reasonMsg, ". Use different aliases on the fields to fetch both if this was intentional."), {
            nodes: fields1.concat(fields2)
          }));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };
}

/**
 * Algorithm:
 *
 * Conflicts occur when two fields exist in a query which will produce the same
 * response name, but represent differing values, thus creating a conflict.
 * The algorithm below finds all conflicts via making a series of comparisons
 * between fields. In order to compare as few fields as possible, this makes
 * a series of comparisons "within" sets of fields and "between" sets of fields.
 *
 * Given any selection set, a collection produces both a set of fields by
 * also including all inline fragments, as well as a list of fragments
 * referenced by fragment spreads.
 *
 * A) Each selection set represented in the document first compares "within" its
 * collected set of fields, finding any conflicts between every pair of
 * overlapping fields.
 * Note: This is the *only time* that a the fields "within" a set are compared
 * to each other. After this only fields "between" sets are compared.
 *
 * B) Also, if any fragment is referenced in a selection set, then a
 * comparison is made "between" the original set of fields and the
 * referenced fragment.
 *
 * C) Also, if multiple fragments are referenced, then comparisons
 * are made "between" each referenced fragment.
 *
 * D) When comparing "between" a set of fields and a referenced fragment, first
 * a comparison is made between each field in the original set of fields and
 * each field in the the referenced set of fields.
 *
 * E) Also, if any fragment is referenced in the referenced selection set,
 * then a comparison is made "between" the original set of fields and the
 * referenced fragment (recursively referring to step D).
 *
 * F) When comparing "between" two fragments, first a comparison is made between
 * each field in the first referenced set of fields and each field in the the
 * second referenced set of fields.
 *
 * G) Also, any fragments referenced by the first must be compared to the
 * second, and any fragments referenced by the second must be compared to the
 * first (recursively referring to step F).
 *
 * H) When comparing two fields, if both have selection sets, then a comparison
 * is made "between" both selection sets, first comparing the set of fields in
 * the first selection set with the set of fields in the second.
 *
 * I) Also, if any fragment is referenced in either selection set, then a
 * comparison is made "between" the other set of fields and the
 * referenced fragment.
 *
 * J) Also, if two fragments are referenced in both selection sets, then a
 * comparison is made "between" the two fragments.
 *
 */
// Find all conflicts found "within" a selection set, including those found
// via spreading in fragments. Called when visiting each SelectionSet in the
// GraphQL Document.
function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentType, selectionSet) {
  var conflicts = [];
  var _getFieldsAndFragment = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet),
    _getFieldsAndFragment2 = _slicedToArray(_getFieldsAndFragment, 2),
    fieldMap = _getFieldsAndFragment2[0],
    fragmentNames = _getFieldsAndFragment2[1]; // (A) Find find all conflicts "within" the fields of this selection set.
  // Note: this is the *only place* `collectConflictsWithin` is called.

  collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap);
  if (fragmentNames.length !== 0) {
    // (B) Then collect conflicts between these fields and those represented by
    // each spread fragment name found.
    for (var i = 0; i < fragmentNames.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fieldMap, fragmentNames[i]); // (C) Then compare this fragment with all other fragments found in this
      // selection set to collect conflicts between fragments spread together.
      // This compares each item in the list of fragment names to every other
      // item in that same list (except for itself).

      for (var j = i + 1; j < fragmentNames.length; j++) {
        collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fragmentNames[i], fragmentNames[j]);
      }
    }
  }
  return conflicts;
} // Collect all conflicts found between a set of fields and a fragment reference
// including via spreading in any nested fragments.

function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentName) {
  var fragment = context.getFragment(fragmentName);
  if (!fragment) {
    return;
  }
  var _getReferencedFieldsA = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment),
    _getReferencedFieldsA2 = _slicedToArray(_getReferencedFieldsA, 2),
    fieldMap2 = _getReferencedFieldsA2[0],
    referencedFragmentNames = _getReferencedFieldsA2[1]; // Do not compare a fragment's fieldMap to itself.

  if (fieldMap === fieldMap2) {
    return;
  } // (D) First collect any conflicts between the provided collection of fields
  // and the collection of fields represented by the given fragment.

  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fieldMap2); // (E) Then collect any conflicts between the provided collection of fields
  // and any fragment names found in the given fragment.
  var _iterator2 = _createForOfIteratorHelper(referencedFragmentNames),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var referencedFragmentName = _step2.value;
      // Memoize so two fragments are not compared for conflicts more than once.
      if (comparedFragmentPairs.has(referencedFragmentName, fragmentName, areMutuallyExclusive)) {
        continue;
      }
      comparedFragmentPairs.add(referencedFragmentName, fragmentName, areMutuallyExclusive);
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, referencedFragmentName);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
} // Collect all conflicts found between two fragments, including via spreading in
// any nested fragments.

function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2) {
  // No need to compare a fragment to itself.
  if (fragmentName1 === fragmentName2) {
    return;
  } // Memoize so two fragments are not compared for conflicts more than once.

  if (comparedFragmentPairs.has(fragmentName1, fragmentName2, areMutuallyExclusive)) {
    return;
  }
  comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);
  var fragment1 = context.getFragment(fragmentName1);
  var fragment2 = context.getFragment(fragmentName2);
  if (!fragment1 || !fragment2) {
    return;
  }
  var _getReferencedFieldsA3 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment1),
    _getReferencedFieldsA4 = _slicedToArray(_getReferencedFieldsA3, 2),
    fieldMap1 = _getReferencedFieldsA4[0],
    referencedFragmentNames1 = _getReferencedFieldsA4[1];
  var _getReferencedFieldsA5 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment2),
    _getReferencedFieldsA6 = _slicedToArray(_getReferencedFieldsA5, 2),
    fieldMap2 = _getReferencedFieldsA6[0],
    referencedFragmentNames2 = _getReferencedFieldsA6[1]; // (F) First, collect all conflicts between these two collections of fields
  // (not including any nested fragments).

  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2); // (G) Then collect conflicts between the first fragment and any nested
  // fragments spread in the second fragment.
  var _iterator3 = _createForOfIteratorHelper(referencedFragmentNames2),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var referencedFragmentName2 = _step3.value;
      collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, referencedFragmentName2);
    } // (G) Then collect conflicts between the second fragment and any nested
    // fragments spread in the first fragment.
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var _iterator4 = _createForOfIteratorHelper(referencedFragmentNames1),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var referencedFragmentName1 = _step4.value;
      collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, referencedFragmentName1, fragmentName2);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
} // Find all conflicts found between two selection sets, including those found
// via spreading in fragments. Called when determining if conflicts exist
// between the sub-fields of two overlapping fields.

function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
  var conflicts = [];
  var _getFieldsAndFragment3 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType1, selectionSet1),
    _getFieldsAndFragment4 = _slicedToArray(_getFieldsAndFragment3, 2),
    fieldMap1 = _getFieldsAndFragment4[0],
    fragmentNames1 = _getFieldsAndFragment4[1];
  var _getFieldsAndFragment5 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType2, selectionSet2),
    _getFieldsAndFragment6 = _slicedToArray(_getFieldsAndFragment5, 2),
    fieldMap2 = _getFieldsAndFragment6[0],
    fragmentNames2 = _getFieldsAndFragment6[1]; // (H) First, collect all conflicts between these two collections of field.

  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2); // (I) Then collect conflicts between the first collection of fields and
  // those referenced by each fragment name associated with the second.
  var _iterator5 = _createForOfIteratorHelper(fragmentNames2),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var fragmentName2 = _step5.value;
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fragmentName2);
    } // (I) Then collect conflicts between the second collection of fields and
    // those referenced by each fragment name associated with the first.
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  var _iterator6 = _createForOfIteratorHelper(fragmentNames1),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var fragmentName1 = _step6.value;
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap2, fragmentName1);
    } // (J) Also collect conflicts between any fragment names by the first and
    // fragment names by the second. This compares each item in the first set of
    // names to each item in the second set of names.
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  var _iterator7 = _createForOfIteratorHelper(fragmentNames1),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var _fragmentName = _step7.value;
      var _iterator8 = _createForOfIteratorHelper(fragmentNames2),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _fragmentName2 = _step8.value;
          collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, _fragmentName, _fragmentName2);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  return conflicts;
} // Collect all Conflicts "within" one collection of fields.

function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For every response name, if there are multiple fields, they
  // must be compared to find a potential conflict.
  for (var _i = 0, _Object$entries = Object.entries(fieldMap); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      responseName = _Object$entries$_i[0],
      fields = _Object$entries$_i[1];
    // This compares every field in the list to every other field in this list
    // (except to itself). If the list only has one item, nothing needs to
    // be compared.
    if (fields.length > 1) {
      for (var i = 0; i < fields.length; i++) {
        for (var j = i + 1; j < fields.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, false,
          // within one collection is never mutually exclusive
          responseName, fields[i], fields[j]);
          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  }
} // Collect all Conflicts between two collections of fields. This is similar to,
// but different from the `collectConflictsWithin` function above. This check
// assumes that `collectConflictsWithin` has already been called on each
// provided collection of fields. This is true because this validator traverses
// each individual selection set.

function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For any response name which appears in both provided field
  // maps, each field from the first field map must be compared to every field
  // in the second field map to find potential conflicts.
  for (var _i2 = 0, _Object$entries2 = Object.entries(fieldMap1); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
      responseName = _Object$entries2$_i[0],
      fields1 = _Object$entries2$_i[1];
    var fields2 = fieldMap2[responseName];
    if (fields2) {
      var _iterator9 = _createForOfIteratorHelper(fields1),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var field1 = _step9.value;
          var _iterator10 = _createForOfIteratorHelper(fields2),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var field2 = _step10.value;
              var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2);
              if (conflict) {
                conflicts.push(conflict);
              }
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  }
} // Determines if there is a conflict between two particular fields, including
// comparing their sub-fields.

function findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
  var _field = _slicedToArray(field1, 3),
    parentType1 = _field[0],
    node1 = _field[1],
    def1 = _field[2];
  var _field2 = _slicedToArray(field2, 3),
    parentType2 = _field2[0],
    node2 = _field2[1],
    def2 = _field2[2]; // If it is known that two fields could not possibly apply at the same
  // time, due to the parent types, then it is safe to permit them to diverge
  // in aliased field or arguments used as they will not present any ambiguity
  // by differing.
  // It is known that two parent types could never overlap if they are
  // different Object types. Interface or Union types might overlap - if not
  // in the current state of the schema, then perhaps in some future version,
  // thus may not safely diverge.

  var areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && (0, _definition.isObjectType)(parentType1) && (0, _definition.isObjectType)(parentType2);
  if (!areMutuallyExclusive) {
    // Two aliases must refer to the same field.
    var name1 = node1.name.value;
    var name2 = node2.name.value;
    if (name1 !== name2) {
      return [[responseName, "\"".concat(name1, "\" and \"").concat(name2, "\" are different fields")], [node1], [node2]];
    } // Two field calls must have the same arguments.

    if (!sameArguments(node1, node2)) {
      return [[responseName, 'they have differing arguments'], [node1], [node2]];
    }
  } // The return type for each field.

  var type1 = def1 === null || def1 === void 0 ? void 0 : def1.type;
  var type2 = def2 === null || def2 === void 0 ? void 0 : def2.type;
  if (type1 && type2 && doTypesConflict(type1, type2)) {
    return [[responseName, "they return conflicting types \"".concat((0, _inspect.inspect)(type1), "\" and \"").concat((0, _inspect.inspect)(type2), "\"")], [node1], [node2]];
  } // Collect and compare sub-fields. Use the same "visited fragment names" list
  // for both collections so fields in a fragment reference are never
  // compared to themselves.

  var selectionSet1 = node1.selectionSet;
  var selectionSet2 = node2.selectionSet;
  if (selectionSet1 && selectionSet2) {
    var conflicts = findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, (0, _definition.getNamedType)(type1), selectionSet1, (0, _definition.getNamedType)(type2), selectionSet2);
    return subfieldConflicts(conflicts, responseName, node1, node2);
  }
}
function sameArguments(node1, node2) {
  var args1 = node1.arguments;
  var args2 = node2.arguments;
  if (args1 === undefined || args1.length === 0) {
    return args2 === undefined || args2.length === 0;
  }
  if (args2 === undefined || args2.length === 0) {
    return false;
  }
  /* c8 ignore next */

  if (args1.length !== args2.length) {
    /* c8 ignore next */
    return false;
    /* c8 ignore next */
  }

  var values2 = new Map(args2.map(function (_ref3) {
    var name = _ref3.name,
      value = _ref3.value;
    return [name.value, value];
  }));
  return args1.every(function (arg1) {
    var value1 = arg1.value;
    var value2 = values2.get(arg1.name.value);
    if (value2 === undefined) {
      return false;
    }
    return stringifyValue(value1) === stringifyValue(value2);
  });
}
function stringifyValue(value) {
  return (0, _printer.print)((0, _sortValueNode.sortValueNode)(value));
} // Two types conflict if both types could not apply to a value simultaneously.
// Composite types are ignored as their individual field types will be compared
// later recursively. However List and Non-Null types must match.

function doTypesConflict(type1, type2) {
  if ((0, _definition.isListType)(type1)) {
    return (0, _definition.isListType)(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }
  if ((0, _definition.isListType)(type2)) {
    return true;
  }
  if ((0, _definition.isNonNullType)(type1)) {
    return (0, _definition.isNonNullType)(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }
  if ((0, _definition.isNonNullType)(type2)) {
    return true;
  }
  if ((0, _definition.isLeafType)(type1) || (0, _definition.isLeafType)(type2)) {
    return type1 !== type2;
  }
  return false;
} // Given a selection set, return the collection of fields (a mapping of response
// name to field nodes and definitions) as well as a list of fragment names
// referenced via fragment spreads.

function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
  var cached = cachedFieldsAndFragmentNames.get(selectionSet);
  if (cached) {
    return cached;
  }
  var nodeAndDefs = Object.create(null);
  var fragmentNames = Object.create(null);
  _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames);
  var result = [nodeAndDefs, Object.keys(fragmentNames)];
  cachedFieldsAndFragmentNames.set(selectionSet, result);
  return result;
} // Given a reference to a fragment, return the represented collection of fields
// as well as a list of nested fragment names referenced via fragment spreads.

function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
  // Short-circuit building a type from the node if possible.
  var cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);
  if (cached) {
    return cached;
  }
  var fragmentType = (0, _typeFromAST.typeFromAST)(context.getSchema(), fragment.typeCondition);
  return getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragmentType, fragment.selectionSet);
}
function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
  var _iterator11 = _createForOfIteratorHelper(selectionSet.selections),
    _step11;
  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var selection = _step11.value;
      switch (selection.kind) {
        case _kinds.Kind.FIELD:
          {
            var fieldName = selection.name.value;
            var fieldDef = void 0;
            if ((0, _definition.isObjectType)(parentType) || (0, _definition.isInterfaceType)(parentType)) {
              fieldDef = parentType.getFields()[fieldName];
            }
            var responseName = selection.alias ? selection.alias.value : fieldName;
            if (!nodeAndDefs[responseName]) {
              nodeAndDefs[responseName] = [];
            }
            nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
            break;
          }
        case _kinds.Kind.FRAGMENT_SPREAD:
          fragmentNames[selection.name.value] = true;
          break;
        case _kinds.Kind.INLINE_FRAGMENT:
          {
            var typeCondition = selection.typeCondition;
            var inlineFragmentType = typeCondition ? (0, _typeFromAST.typeFromAST)(context.getSchema(), typeCondition) : parentType;
            _collectFieldsAndFragmentNames(context, inlineFragmentType, selection.selectionSet, nodeAndDefs, fragmentNames);
            break;
          }
      }
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
} // Given a series of Conflicts which occurred between two sub-fields, generate
// a single Conflict.

function subfieldConflicts(conflicts, responseName, node1, node2) {
  if (conflicts.length > 0) {
    return [[responseName, conflicts.map(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 1),
        reason = _ref5[0];
      return reason;
    })], [node1].concat(_toConsumableArray(conflicts.map(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
        fields1 = _ref7[1];
      return fields1;
    }).flat())), [node2].concat(_toConsumableArray(conflicts.map(function (_ref8) {
      var _ref9 = _slicedToArray(_ref8, 3),
        fields2 = _ref9[2];
      return fields2;
    }).flat()))];
  }
}
/**
 * A way to keep track of pairs of things when the ordering of the pair does not matter.
 */
var PairSet = /*#__PURE__*/function () {
  function PairSet() {
    _classCallCheck(this, PairSet);
    this._data = new Map();
  }
  _createClass(PairSet, [{
    key: "has",
    value: function has(a, b, areMutuallyExclusive) {
      var _this$_data$get;
      var _ref10 = a < b ? [a, b] : [b, a],
        _ref11 = _slicedToArray(_ref10, 2),
        key1 = _ref11[0],
        key2 = _ref11[1];
      var result = (_this$_data$get = this._data.get(key1)) === null || _this$_data$get === void 0 ? void 0 : _this$_data$get.get(key2);
      if (result === undefined) {
        return false;
      } // areMutuallyExclusive being false is a superset of being true, hence if
      // we want to know if this PairSet "has" these two with no exclusivity,
      // we have to ensure it was added as such.

      return areMutuallyExclusive ? true : areMutuallyExclusive === result;
    }
  }, {
    key: "add",
    value: function add(a, b, areMutuallyExclusive) {
      var _ref12 = a < b ? [a, b] : [b, a],
        _ref13 = _slicedToArray(_ref12, 2),
        key1 = _ref13[0],
        key2 = _ref13[1];
      var map = this._data.get(key1);
      if (map === undefined) {
        this._data.set(key1, new Map([[key2, areMutuallyExclusive]]));
      } else {
        map.set(key2, areMutuallyExclusive);
      }
    }
  }]);
  return PairSet;
}();
},{"../../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../../language/printer.mjs":"../node_modules/graphql/language/printer.mjs","../../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../../utilities/sortValueNode.mjs":"../node_modules/graphql/utilities/sortValueNode.mjs","../../utilities/typeFromAST.mjs":"../node_modules/graphql/utilities/typeFromAST.mjs"}],"../node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PossibleFragmentSpreadsRule = PossibleFragmentSpreadsRule;
var _inspect = require("../../jsutils/inspect.mjs");
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _definition = require("../../type/definition.mjs");
var _typeComparators = require("../../utilities/typeComparators.mjs");
var _typeFromAST = require("../../utilities/typeFromAST.mjs");
/**
 * Possible fragment spread
 *
 * A fragment spread is only valid if the type condition could ever possibly
 * be true: if there is a non-empty intersection of the possible parent types,
 * and possible types which pass the type condition.
 */
function PossibleFragmentSpreadsRule(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var fragType = context.getType();
      var parentType = context.getParentType();
      if ((0, _definition.isCompositeType)(fragType) && (0, _definition.isCompositeType)(parentType) && !(0, _typeComparators.doTypesOverlap)(context.getSchema(), fragType, parentType)) {
        var parentTypeStr = (0, _inspect.inspect)(parentType);
        var fragTypeStr = (0, _inspect.inspect)(fragType);
        context.reportError(new _GraphQLError.GraphQLError("Fragment cannot be spread here as objects of type \"".concat(parentTypeStr, "\" can never be of type \"").concat(fragTypeStr, "\"."), {
          nodes: node
        }));
      }
    },
    FragmentSpread: function FragmentSpread(node) {
      var fragName = node.name.value;
      var fragType = getFragmentType(context, fragName);
      var parentType = context.getParentType();
      if (fragType && parentType && !(0, _typeComparators.doTypesOverlap)(context.getSchema(), fragType, parentType)) {
        var parentTypeStr = (0, _inspect.inspect)(parentType);
        var fragTypeStr = (0, _inspect.inspect)(fragType);
        context.reportError(new _GraphQLError.GraphQLError("Fragment \"".concat(fragName, "\" cannot be spread here as objects of type \"").concat(parentTypeStr, "\" can never be of type \"").concat(fragTypeStr, "\"."), {
          nodes: node
        }));
      }
    }
  };
}
function getFragmentType(context, name) {
  var frag = context.getFragment(name);
  if (frag) {
    var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), frag.typeCondition);
    if ((0, _definition.isCompositeType)(type)) {
      return type;
    }
  }
}
},{"../../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../../utilities/typeComparators.mjs":"../node_modules/graphql/utilities/typeComparators.mjs","../../utilities/typeFromAST.mjs":"../node_modules/graphql/utilities/typeFromAST.mjs"}],"../node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PossibleTypeExtensionsRule = PossibleTypeExtensionsRule;
var _didYouMean = require("../../jsutils/didYouMean.mjs");
var _inspect = require("../../jsutils/inspect.mjs");
var _invariant = require("../../jsutils/invariant.mjs");
var _suggestionList = require("../../jsutils/suggestionList.mjs");
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _kinds = require("../../language/kinds.mjs");
var _predicates = require("../../language/predicates.mjs");
var _definition = require("../../type/definition.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Possible type extension
 *
 * A type extension is only valid if the type is defined and has the same kind.
 */
function PossibleTypeExtensionsRule(context) {
  var schema = context.getSchema();
  var definedTypes = Object.create(null);
  var _iterator = _createForOfIteratorHelper(context.getDocument().definitions),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var def = _step.value;
      if ((0, _predicates.isTypeDefinitionNode)(def)) {
        definedTypes[def.name.value] = def;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return {
    ScalarTypeExtension: checkExtension,
    ObjectTypeExtension: checkExtension,
    InterfaceTypeExtension: checkExtension,
    UnionTypeExtension: checkExtension,
    EnumTypeExtension: checkExtension,
    InputObjectTypeExtension: checkExtension
  };
  function checkExtension(node) {
    var typeName = node.name.value;
    var defNode = definedTypes[typeName];
    var existingType = schema === null || schema === void 0 ? void 0 : schema.getType(typeName);
    var expectedKind;
    if (defNode) {
      expectedKind = defKindToExtKind[defNode.kind];
    } else if (existingType) {
      expectedKind = typeToExtKind(existingType);
    }
    if (expectedKind) {
      if (expectedKind !== node.kind) {
        var kindStr = extensionKindToTypeName(node.kind);
        context.reportError(new _GraphQLError.GraphQLError("Cannot extend non-".concat(kindStr, " type \"").concat(typeName, "\"."), {
          nodes: defNode ? [defNode, node] : node
        }));
      }
    } else {
      var allTypeNames = Object.keys(_objectSpread(_objectSpread({}, definedTypes), schema === null || schema === void 0 ? void 0 : schema.getTypeMap()));
      var suggestedTypes = (0, _suggestionList.suggestionList)(typeName, allTypeNames);
      context.reportError(new _GraphQLError.GraphQLError("Cannot extend type \"".concat(typeName, "\" because it is not defined.") + (0, _didYouMean.didYouMean)(suggestedTypes), {
        nodes: node.name
      }));
    }
  }
}
var defKindToExtKind = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, _kinds.Kind.SCALAR_TYPE_DEFINITION, _kinds.Kind.SCALAR_TYPE_EXTENSION), _kinds.Kind.OBJECT_TYPE_DEFINITION, _kinds.Kind.OBJECT_TYPE_EXTENSION), _kinds.Kind.INTERFACE_TYPE_DEFINITION, _kinds.Kind.INTERFACE_TYPE_EXTENSION), _kinds.Kind.UNION_TYPE_DEFINITION, _kinds.Kind.UNION_TYPE_EXTENSION), _kinds.Kind.ENUM_TYPE_DEFINITION, _kinds.Kind.ENUM_TYPE_EXTENSION), _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION, _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION);
function typeToExtKind(type) {
  if ((0, _definition.isScalarType)(type)) {
    return _kinds.Kind.SCALAR_TYPE_EXTENSION;
  }
  if ((0, _definition.isObjectType)(type)) {
    return _kinds.Kind.OBJECT_TYPE_EXTENSION;
  }
  if ((0, _definition.isInterfaceType)(type)) {
    return _kinds.Kind.INTERFACE_TYPE_EXTENSION;
  }
  if ((0, _definition.isUnionType)(type)) {
    return _kinds.Kind.UNION_TYPE_EXTENSION;
  }
  if ((0, _definition.isEnumType)(type)) {
    return _kinds.Kind.ENUM_TYPE_EXTENSION;
  }
  if ((0, _definition.isInputObjectType)(type)) {
    return _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION;
  }
  /* c8 ignore next 3 */
  // Not reachable. All possible types have been considered

  false || (0, _invariant.invariant)(false, 'Unexpected type: ' + (0, _inspect.inspect)(type));
}
function extensionKindToTypeName(kind) {
  switch (kind) {
    case _kinds.Kind.SCALAR_TYPE_EXTENSION:
      return 'scalar';
    case _kinds.Kind.OBJECT_TYPE_EXTENSION:
      return 'object';
    case _kinds.Kind.INTERFACE_TYPE_EXTENSION:
      return 'interface';
    case _kinds.Kind.UNION_TYPE_EXTENSION:
      return 'union';
    case _kinds.Kind.ENUM_TYPE_EXTENSION:
      return 'enum';
    case _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
      return 'input object';
    // Not reachable. All possible types have been considered

    /* c8 ignore next */

    default:
      false || (0, _invariant.invariant)(false, 'Unexpected kind: ' + (0, _inspect.inspect)(kind));
  }
}
},{"../../jsutils/didYouMean.mjs":"../node_modules/graphql/jsutils/didYouMean.mjs","../../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../../jsutils/invariant.mjs":"../node_modules/graphql/jsutils/invariant.mjs","../../jsutils/suggestionList.mjs":"../node_modules/graphql/jsutils/suggestionList.mjs","../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../../language/predicates.mjs":"../node_modules/graphql/language/predicates.mjs","../../type/definition.mjs":"../node_modules/graphql/type/definition.mjs"}],"../node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProvidedRequiredArgumentsOnDirectivesRule = ProvidedRequiredArgumentsOnDirectivesRule;
exports.ProvidedRequiredArgumentsRule = ProvidedRequiredArgumentsRule;
var _inspect = require("../../jsutils/inspect.mjs");
var _keyMap = require("../../jsutils/keyMap.mjs");
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _kinds = require("../../language/kinds.mjs");
var _printer = require("../../language/printer.mjs");
var _definition = require("../../type/definition.mjs");
var _directives = require("../../type/directives.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Provided required arguments
 *
 * A field or directive is only valid if all required (non-null without a
 * default value) field arguments have been provided.
 */
function ProvidedRequiredArgumentsRule(context) {
  return _objectSpread(_objectSpread({}, ProvidedRequiredArgumentsOnDirectivesRule(context)), {}, {
    Field: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(fieldNode) {
        var _fieldNode$arguments;
        var fieldDef = context.getFieldDef();
        if (!fieldDef) {
          return false;
        }
        var providedArgs = new Set(
        // FIXME: https://github.com/graphql/graphql-js/issues/2203
        /* c8 ignore next */
        (_fieldNode$arguments = fieldNode.arguments) === null || _fieldNode$arguments === void 0 ? void 0 : _fieldNode$arguments.map(function (arg) {
          return arg.name.value;
        }));
        var _iterator = _createForOfIteratorHelper(fieldDef.args),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var argDef = _step.value;
            if (!providedArgs.has(argDef.name) && (0, _definition.isRequiredArgument)(argDef)) {
              var argTypeStr = (0, _inspect.inspect)(argDef.type);
              context.reportError(new _GraphQLError.GraphQLError("Field \"".concat(fieldDef.name, "\" argument \"").concat(argDef.name, "\" of type \"").concat(argTypeStr, "\" is required, but it was not provided."), {
                nodes: fieldNode
              }));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  });
}
/**
 * @internal
 */

function ProvidedRequiredArgumentsOnDirectivesRule(context) {
  var _schema$getDirectives;
  var requiredArgsMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = (_schema$getDirectives = schema === null || schema === void 0 ? void 0 : schema.getDirectives()) !== null && _schema$getDirectives !== void 0 ? _schema$getDirectives : _directives.specifiedDirectives;
  var _iterator2 = _createForOfIteratorHelper(definedDirectives),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var directive = _step2.value;
      requiredArgsMap[directive.name] = (0, _keyMap.keyMap)(directive.args.filter(_definition.isRequiredArgument), function (arg) {
        return arg.name;
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var astDefinitions = context.getDocument().definitions;
  var _iterator3 = _createForOfIteratorHelper(astDefinitions),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var def = _step3.value;
      if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
        var _def$arguments;

        // FIXME: https://github.com/graphql/graphql-js/issues/2203

        /* c8 ignore next */
        var argNodes = (_def$arguments = def.arguments) !== null && _def$arguments !== void 0 ? _def$arguments : [];
        requiredArgsMap[def.name.value] = (0, _keyMap.keyMap)(argNodes.filter(isRequiredArgumentNode), function (arg) {
          return arg.name.value;
        });
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return {
    Directive: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(directiveNode) {
        var directiveName = directiveNode.name.value;
        var requiredArgs = requiredArgsMap[directiveName];
        if (requiredArgs) {
          var _directiveNode$argume;

          // FIXME: https://github.com/graphql/graphql-js/issues/2203

          /* c8 ignore next */
          var argNodes = (_directiveNode$argume = directiveNode.arguments) !== null && _directiveNode$argume !== void 0 ? _directiveNode$argume : [];
          var argNodeMap = new Set(argNodes.map(function (arg) {
            return arg.name.value;
          }));
          for (var _i = 0, _Object$entries = Object.entries(requiredArgs); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              argName = _Object$entries$_i[0],
              argDef = _Object$entries$_i[1];
            if (!argNodeMap.has(argName)) {
              var argType = (0, _definition.isType)(argDef.type) ? (0, _inspect.inspect)(argDef.type) : (0, _printer.print)(argDef.type);
              context.reportError(new _GraphQLError.GraphQLError("Directive \"@".concat(directiveName, "\" argument \"").concat(argName, "\" of type \"").concat(argType, "\" is required, but it was not provided."), {
                nodes: directiveNode
              }));
            }
          }
        }
      }
    }
  };
}
function isRequiredArgumentNode(arg) {
  return arg.type.kind === _kinds.Kind.NON_NULL_TYPE && arg.defaultValue == null;
}
},{"../../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../../jsutils/keyMap.mjs":"../node_modules/graphql/jsutils/keyMap.mjs","../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../../language/printer.mjs":"../node_modules/graphql/language/printer.mjs","../../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../../type/directives.mjs":"../node_modules/graphql/type/directives.mjs"}],"../node_modules/graphql/validation/rules/ScalarLeafsRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScalarLeafsRule = ScalarLeafsRule;
var _inspect = require("../../jsutils/inspect.mjs");
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _definition = require("../../type/definition.mjs");
/**
 * Scalar leafs
 *
 * A GraphQL document is valid only if all leaf fields (fields without
 * sub selections) are of scalar or enum types.
 */
function ScalarLeafsRule(context) {
  return {
    Field: function Field(node) {
      var type = context.getType();
      var selectionSet = node.selectionSet;
      if (type) {
        if ((0, _definition.isLeafType)((0, _definition.getNamedType)(type))) {
          if (selectionSet) {
            var fieldName = node.name.value;
            var typeStr = (0, _inspect.inspect)(type);
            context.reportError(new _GraphQLError.GraphQLError("Field \"".concat(fieldName, "\" must not have a selection since type \"").concat(typeStr, "\" has no subfields."), {
              nodes: selectionSet
            }));
          }
        } else if (!selectionSet) {
          var _fieldName = node.name.value;
          var _typeStr = (0, _inspect.inspect)(type);
          context.reportError(new _GraphQLError.GraphQLError("Field \"".concat(_fieldName, "\" of type \"").concat(_typeStr, "\" must have a selection of subfields. Did you mean \"").concat(_fieldName, " { ... }\"?"), {
            nodes: node
          }));
        }
      }
    }
  };
}
},{"../../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../type/definition.mjs":"../node_modules/graphql/type/definition.mjs"}],"../node_modules/graphql/jsutils/printPathArray.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printPathArray = printPathArray;
/**
 * Build a string describing the path.
 */
function printPathArray(path) {
  return path.map(function (key) {
    return typeof key === 'number' ? '[' + key.toString() + ']' : '.' + key;
  }).join('');
}
},{}],"../node_modules/graphql/jsutils/Path.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPath = addPath;
exports.pathToArray = pathToArray;
/**
 * Given a Path and a key, return a new Path containing the new key.
 */
function addPath(prev, key, typename) {
  return {
    prev: prev,
    key: key,
    typename: typename
  };
}
/**
 * Given a Path, return an Array of the path keys.
 */

function pathToArray(path) {
  var flattened = [];
  var curr = path;
  while (curr) {
    flattened.push(curr.key);
    curr = curr.prev;
  }
  return flattened.reverse();
}
},{}],"../node_modules/graphql/utilities/coerceInputValue.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coerceInputValue = coerceInputValue;
var _didYouMean = require("../jsutils/didYouMean.mjs");
var _inspect = require("../jsutils/inspect.mjs");
var _invariant = require("../jsutils/invariant.mjs");
var _isIterableObject = require("../jsutils/isIterableObject.mjs");
var _isObjectLike = require("../jsutils/isObjectLike.mjs");
var _Path = require("../jsutils/Path.mjs");
var _printPathArray = require("../jsutils/printPathArray.mjs");
var _suggestionList = require("../jsutils/suggestionList.mjs");
var _GraphQLError = require("../error/GraphQLError.mjs");
var _definition = require("../type/definition.mjs");
/**
 * Coerces a JavaScript value given a GraphQL Input Type.
 */
function coerceInputValue(inputValue, type) {
  var onError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultOnError;
  return coerceInputValueImpl(inputValue, type, onError, undefined);
}
function defaultOnError(path, invalidValue, error) {
  var errorPrefix = 'Invalid value ' + (0, _inspect.inspect)(invalidValue);
  if (path.length > 0) {
    errorPrefix += " at \"value".concat((0, _printPathArray.printPathArray)(path), "\"");
  }
  error.message = errorPrefix + ': ' + error.message;
  throw error;
}
function coerceInputValueImpl(inputValue, type, onError, path) {
  if ((0, _definition.isNonNullType)(type)) {
    if (inputValue != null) {
      return coerceInputValueImpl(inputValue, type.ofType, onError, path);
    }
    onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError("Expected non-nullable type \"".concat((0, _inspect.inspect)(type), "\" not to be null.")));
    return;
  }
  if (inputValue == null) {
    // Explicitly return the value null.
    return null;
  }
  if ((0, _definition.isListType)(type)) {
    var itemType = type.ofType;
    if ((0, _isIterableObject.isIterableObject)(inputValue)) {
      return Array.from(inputValue, function (itemValue, index) {
        var itemPath = (0, _Path.addPath)(path, index, undefined);
        return coerceInputValueImpl(itemValue, itemType, onError, itemPath);
      });
    } // Lists accept a non-list value as a list of one.

    return [coerceInputValueImpl(inputValue, itemType, onError, path)];
  }
  if ((0, _definition.isInputObjectType)(type)) {
    if (!(0, _isObjectLike.isObjectLike)(inputValue)) {
      onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError("Expected type \"".concat(type.name, "\" to be an object.")));
      return;
    }
    var coercedValue = {};
    var fieldDefs = type.getFields();
    for (var _i = 0, _Object$values = Object.values(fieldDefs); _i < _Object$values.length; _i++) {
      var field = _Object$values[_i];
      var fieldValue = inputValue[field.name];
      if (fieldValue === undefined) {
        if (field.defaultValue !== undefined) {
          coercedValue[field.name] = field.defaultValue;
        } else if ((0, _definition.isNonNullType)(field.type)) {
          var typeStr = (0, _inspect.inspect)(field.type);
          onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError("Field \"".concat(field.name, "\" of required type \"").concat(typeStr, "\" was not provided.")));
        }
        continue;
      }
      coercedValue[field.name] = coerceInputValueImpl(fieldValue, field.type, onError, (0, _Path.addPath)(path, field.name, type.name));
    } // Ensure every provided field is defined.

    for (var _i2 = 0, _Object$keys = Object.keys(inputValue); _i2 < _Object$keys.length; _i2++) {
      var fieldName = _Object$keys[_i2];
      if (!fieldDefs[fieldName]) {
        var suggestions = (0, _suggestionList.suggestionList)(fieldName, Object.keys(type.getFields()));
        onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError("Field \"".concat(fieldName, "\" is not defined by type \"").concat(type.name, "\".") + (0, _didYouMean.didYouMean)(suggestions)));
      }
    }
    return coercedValue;
  }
  if ((0, _definition.isLeafType)(type)) {
    var parseResult; // Scalars and Enums determine if a input value is valid via parseValue(),
    // which can throw to indicate failure. If it throws, maintain a reference
    // to the original error.

    try {
      parseResult = type.parseValue(inputValue);
    } catch (error) {
      if (error instanceof _GraphQLError.GraphQLError) {
        onError((0, _Path.pathToArray)(path), inputValue, error);
      } else {
        onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError("Expected type \"".concat(type.name, "\". ") + error.message, {
          originalError: error
        }));
      }
      return;
    }
    if (parseResult === undefined) {
      onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError("Expected type \"".concat(type.name, "\".")));
    }
    return parseResult;
  }
  /* c8 ignore next 3 */
  // Not reachable, all possible types have been considered.

  false || (0, _invariant.invariant)(false, 'Unexpected input type: ' + (0, _inspect.inspect)(type));
}
},{"../jsutils/didYouMean.mjs":"../node_modules/graphql/jsutils/didYouMean.mjs","../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/invariant.mjs":"../node_modules/graphql/jsutils/invariant.mjs","../jsutils/isIterableObject.mjs":"../node_modules/graphql/jsutils/isIterableObject.mjs","../jsutils/isObjectLike.mjs":"../node_modules/graphql/jsutils/isObjectLike.mjs","../jsutils/Path.mjs":"../node_modules/graphql/jsutils/Path.mjs","../jsutils/printPathArray.mjs":"../node_modules/graphql/jsutils/printPathArray.mjs","../jsutils/suggestionList.mjs":"../node_modules/graphql/jsutils/suggestionList.mjs","../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../type/definition.mjs":"../node_modules/graphql/type/definition.mjs"}],"../node_modules/graphql/utilities/valueFromAST.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueFromAST = valueFromAST;
var _inspect = require("../jsutils/inspect.mjs");
var _invariant = require("../jsutils/invariant.mjs");
var _keyMap = require("../jsutils/keyMap.mjs");
var _kinds = require("../language/kinds.mjs");
var _definition = require("../type/definition.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * GraphQL Value literals.
 *
 * Returns `undefined` when the value could not be validly coerced according to
 * the provided type.
 *
 * | GraphQL Value        | JSON Value    |
 * | -------------------- | ------------- |
 * | Input Object         | Object        |
 * | List                 | Array         |
 * | Boolean              | Boolean       |
 * | String               | String        |
 * | Int / Float          | Number        |
 * | Enum Value           | Unknown       |
 * | NullValue            | null          |
 *
 */

function valueFromAST(valueNode, type, variables) {
  if (!valueNode) {
    // When there is no node, then there is also no value.
    // Importantly, this is different from returning the value null.
    return;
  }
  if (valueNode.kind === _kinds.Kind.VARIABLE) {
    var variableName = valueNode.name.value;
    if (variables == null || variables[variableName] === undefined) {
      // No valid return value.
      return;
    }
    var variableValue = variables[variableName];
    if (variableValue === null && (0, _definition.isNonNullType)(type)) {
      return; // Invalid: intentionally return no value.
    } // Note: This does no further checking that this variable is correct.
    // This assumes that this query has been validated and the variable
    // usage here is of the correct type.

    return variableValue;
  }
  if ((0, _definition.isNonNullType)(type)) {
    if (valueNode.kind === _kinds.Kind.NULL) {
      return; // Invalid: intentionally return no value.
    }

    return valueFromAST(valueNode, type.ofType, variables);
  }
  if (valueNode.kind === _kinds.Kind.NULL) {
    // This is explicitly returning the value null.
    return null;
  }
  if ((0, _definition.isListType)(type)) {
    var itemType = type.ofType;
    if (valueNode.kind === _kinds.Kind.LIST) {
      var coercedValues = [];
      var _iterator = _createForOfIteratorHelper(valueNode.values),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var itemNode = _step.value;
          if (isMissingVariable(itemNode, variables)) {
            // If an array contains a missing variable, it is either coerced to
            // null or if the item type is non-null, it considered invalid.
            if ((0, _definition.isNonNullType)(itemType)) {
              return; // Invalid: intentionally return no value.
            }

            coercedValues.push(null);
          } else {
            var itemValue = valueFromAST(itemNode, itemType, variables);
            if (itemValue === undefined) {
              return; // Invalid: intentionally return no value.
            }

            coercedValues.push(itemValue);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return coercedValues;
    }
    var coercedValue = valueFromAST(valueNode, itemType, variables);
    if (coercedValue === undefined) {
      return; // Invalid: intentionally return no value.
    }

    return [coercedValue];
  }
  if ((0, _definition.isInputObjectType)(type)) {
    if (valueNode.kind !== _kinds.Kind.OBJECT) {
      return; // Invalid: intentionally return no value.
    }

    var coercedObj = Object.create(null);
    var fieldNodes = (0, _keyMap.keyMap)(valueNode.fields, function (field) {
      return field.name.value;
    });
    for (var _i = 0, _Object$values = Object.values(type.getFields()); _i < _Object$values.length; _i++) {
      var field = _Object$values[_i];
      var fieldNode = fieldNodes[field.name];
      if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
        if (field.defaultValue !== undefined) {
          coercedObj[field.name] = field.defaultValue;
        } else if ((0, _definition.isNonNullType)(field.type)) {
          return; // Invalid: intentionally return no value.
        }

        continue;
      }
      var fieldValue = valueFromAST(fieldNode.value, field.type, variables);
      if (fieldValue === undefined) {
        return; // Invalid: intentionally return no value.
      }

      coercedObj[field.name] = fieldValue;
    }
    return coercedObj;
  }
  if ((0, _definition.isLeafType)(type)) {
    // Scalars and Enums fulfill parsing a literal value via parseLiteral().
    // Invalid values represent a failure to parse correctly, in which case
    // no value is returned.
    var result;
    try {
      result = type.parseLiteral(valueNode, variables);
    } catch (_error) {
      return; // Invalid: intentionally return no value.
    }

    if (result === undefined) {
      return; // Invalid: intentionally return no value.
    }

    return result;
  }
  /* c8 ignore next 3 */
  // Not reachable, all possible input types have been considered.

  false || (0, _invariant.invariant)(false, 'Unexpected input type: ' + (0, _inspect.inspect)(type));
} // Returns true if the provided valueNode is a variable which is not defined
// in the set of variables.

function isMissingVariable(valueNode, variables) {
  return valueNode.kind === _kinds.Kind.VARIABLE && (variables == null || variables[valueNode.name.value] === undefined);
}
},{"../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/invariant.mjs":"../node_modules/graphql/jsutils/invariant.mjs","../jsutils/keyMap.mjs":"../node_modules/graphql/jsutils/keyMap.mjs","../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../type/definition.mjs":"../node_modules/graphql/type/definition.mjs"}],"../node_modules/graphql/execution/values.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArgumentValues = getArgumentValues;
exports.getDirectiveValues = getDirectiveValues;
exports.getVariableValues = getVariableValues;
var _inspect = require("../jsutils/inspect.mjs");
var _keyMap = require("../jsutils/keyMap.mjs");
var _printPathArray = require("../jsutils/printPathArray.mjs");
var _GraphQLError = require("../error/GraphQLError.mjs");
var _kinds = require("../language/kinds.mjs");
var _printer = require("../language/printer.mjs");
var _definition = require("../type/definition.mjs");
var _coerceInputValue = require("../utilities/coerceInputValue.mjs");
var _typeFromAST = require("../utilities/typeFromAST.mjs");
var _valueFromAST = require("../utilities/valueFromAST.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Prepares an object map of variableValues of the correct type based on the
 * provided variable definitions and arbitrary input. If the input cannot be
 * parsed to match the variable definitions, a GraphQLError will be thrown.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
function getVariableValues(schema, varDefNodes, inputs, options) {
  var errors = [];
  var maxErrors = options === null || options === void 0 ? void 0 : options.maxErrors;
  try {
    var coerced = coerceVariableValues(schema, varDefNodes, inputs, function (error) {
      if (maxErrors != null && errors.length >= maxErrors) {
        throw new _GraphQLError.GraphQLError('Too many errors processing variables, error limit reached. Execution aborted.');
      }
      errors.push(error);
    });
    if (errors.length === 0) {
      return {
        coerced: coerced
      };
    }
  } catch (error) {
    errors.push(error);
  }
  return {
    errors: errors
  };
}
function coerceVariableValues(schema, varDefNodes, inputs, onError) {
  var coercedValues = {};
  var _iterator = _createForOfIteratorHelper(varDefNodes),
    _step;
  try {
    var _loop = function _loop() {
        var varDefNode = _step.value;
        var varName = varDefNode.variable.name.value;
        var varType = (0, _typeFromAST.typeFromAST)(schema, varDefNode.type);
        if (!(0, _definition.isInputType)(varType)) {
          // Must use input types for variables. This should be caught during
          // validation, however is checked again here for safety.
          var varTypeStr = (0, _printer.print)(varDefNode.type);
          onError(new _GraphQLError.GraphQLError("Variable \"$".concat(varName, "\" expected value of type \"").concat(varTypeStr, "\" which cannot be used as an input type."), {
            nodes: varDefNode.type
          }));
          return 0; // continue
        }
        if (!hasOwnProperty(inputs, varName)) {
          if (varDefNode.defaultValue) {
            coercedValues[varName] = (0, _valueFromAST.valueFromAST)(varDefNode.defaultValue, varType);
          } else if ((0, _definition.isNonNullType)(varType)) {
            var _varTypeStr = (0, _inspect.inspect)(varType);
            onError(new _GraphQLError.GraphQLError("Variable \"$".concat(varName, "\" of required type \"").concat(_varTypeStr, "\" was not provided."), {
              nodes: varDefNode
            }));
          }
          return 0; // continue
        }
        var value = inputs[varName];
        if (value === null && (0, _definition.isNonNullType)(varType)) {
          var _varTypeStr2 = (0, _inspect.inspect)(varType);
          onError(new _GraphQLError.GraphQLError("Variable \"$".concat(varName, "\" of non-null type \"").concat(_varTypeStr2, "\" must not be null."), {
            nodes: varDefNode
          }));
          return 0; // continue
        }
        coercedValues[varName] = (0, _coerceInputValue.coerceInputValue)(value, varType, function (path, invalidValue, error) {
          var prefix = "Variable \"$".concat(varName, "\" got invalid value ") + (0, _inspect.inspect)(invalidValue);
          if (path.length > 0) {
            prefix += " at \"".concat(varName).concat((0, _printPathArray.printPathArray)(path), "\"");
          }
          onError(new _GraphQLError.GraphQLError(prefix + '; ' + error.message, {
            nodes: varDefNode,
            originalError: error
          }));
        });
      },
      _ret;
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _ret = _loop();
      if (_ret === 0) continue;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return coercedValues;
}
/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */

function getArgumentValues(def, node, variableValues) {
  var _node$arguments;
  var coercedValues = {}; // FIXME: https://github.com/graphql/graphql-js/issues/2203

  /* c8 ignore next */

  var argumentNodes = (_node$arguments = node.arguments) !== null && _node$arguments !== void 0 ? _node$arguments : [];
  var argNodeMap = (0, _keyMap.keyMap)(argumentNodes, function (arg) {
    return arg.name.value;
  });
  var _iterator2 = _createForOfIteratorHelper(def.args),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var argDef = _step2.value;
      var name = argDef.name;
      var argType = argDef.type;
      var argumentNode = argNodeMap[name];
      if (!argumentNode) {
        if (argDef.defaultValue !== undefined) {
          coercedValues[name] = argDef.defaultValue;
        } else if ((0, _definition.isNonNullType)(argType)) {
          throw new _GraphQLError.GraphQLError("Argument \"".concat(name, "\" of required type \"").concat((0, _inspect.inspect)(argType), "\" ") + 'was not provided.', {
            nodes: node
          });
        }
        continue;
      }
      var valueNode = argumentNode.value;
      var isNull = valueNode.kind === _kinds.Kind.NULL;
      if (valueNode.kind === _kinds.Kind.VARIABLE) {
        var variableName = valueNode.name.value;
        if (variableValues == null || !hasOwnProperty(variableValues, variableName)) {
          if (argDef.defaultValue !== undefined) {
            coercedValues[name] = argDef.defaultValue;
          } else if ((0, _definition.isNonNullType)(argType)) {
            throw new _GraphQLError.GraphQLError("Argument \"".concat(name, "\" of required type \"").concat((0, _inspect.inspect)(argType), "\" ") + "was provided the variable \"$".concat(variableName, "\" which was not provided a runtime value."), {
              nodes: valueNode
            });
          }
          continue;
        }
        isNull = variableValues[variableName] == null;
      }
      if (isNull && (0, _definition.isNonNullType)(argType)) {
        throw new _GraphQLError.GraphQLError("Argument \"".concat(name, "\" of non-null type \"").concat((0, _inspect.inspect)(argType), "\" ") + 'must not be null.', {
          nodes: valueNode
        });
      }
      var coercedValue = (0, _valueFromAST.valueFromAST)(valueNode, argType, variableValues);
      if (coercedValue === undefined) {
        // Note: ValuesOfCorrectTypeRule validation should catch this before
        // execution. This is a runtime check to ensure execution does not
        // continue with an invalid argument value.
        throw new _GraphQLError.GraphQLError("Argument \"".concat(name, "\" has invalid value ").concat((0, _printer.print)(valueNode), "."), {
          nodes: valueNode
        });
      }
      coercedValues[name] = coercedValue;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return coercedValues;
}
/**
 * Prepares an object map of argument values given a directive definition
 * and a AST node which may contain directives. Optionally also accepts a map
 * of variable values.
 *
 * If the directive does not exist on the node, returns undefined.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */

function getDirectiveValues(directiveDef, node, variableValues) {
  var _node$directives;
  var directiveNode = (_node$directives = node.directives) === null || _node$directives === void 0 ? void 0 : _node$directives.find(function (directive) {
    return directive.name.value === directiveDef.name;
  });
  if (directiveNode) {
    return getArgumentValues(directiveDef, directiveNode, variableValues);
  }
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
},{"../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/keyMap.mjs":"../node_modules/graphql/jsutils/keyMap.mjs","../jsutils/printPathArray.mjs":"../node_modules/graphql/jsutils/printPathArray.mjs","../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../language/printer.mjs":"../node_modules/graphql/language/printer.mjs","../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../utilities/coerceInputValue.mjs":"../node_modules/graphql/utilities/coerceInputValue.mjs","../utilities/typeFromAST.mjs":"../node_modules/graphql/utilities/typeFromAST.mjs","../utilities/valueFromAST.mjs":"../node_modules/graphql/utilities/valueFromAST.mjs"}],"../node_modules/graphql/execution/collectFields.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collectFields = collectFields;
exports.collectSubfields = collectSubfields;
var _kinds = require("../language/kinds.mjs");
var _definition = require("../type/definition.mjs");
var _directives = require("../type/directives.mjs");
var _typeFromAST = require("../utilities/typeFromAST.mjs");
var _values = require("./values.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Given a selectionSet, collects all of the fields and returns them.
 *
 * CollectFields requires the "runtime type" of an object. For a field that
 * returns an Interface or Union type, the "runtime type" will be the actual
 * object type returned by that field.
 *
 * @internal
 */

function collectFields(schema, fragments, variableValues, runtimeType, selectionSet) {
  var fields = new Map();
  collectFieldsImpl(schema, fragments, variableValues, runtimeType, selectionSet, fields, new Set());
  return fields;
}
/**
 * Given an array of field nodes, collects all of the subfields of the passed
 * in fields, and returns them at the end.
 *
 * CollectSubFields requires the "return type" of an object. For a field that
 * returns an Interface or Union type, the "return type" will be the actual
 * object type returned by that field.
 *
 * @internal
 */

function collectSubfields(schema, fragments, variableValues, returnType, fieldNodes) {
  var subFieldNodes = new Map();
  var visitedFragmentNames = new Set();
  var _iterator = _createForOfIteratorHelper(fieldNodes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      if (node.selectionSet) {
        collectFieldsImpl(schema, fragments, variableValues, returnType, node.selectionSet, subFieldNodes, visitedFragmentNames);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return subFieldNodes;
}
function collectFieldsImpl(schema, fragments, variableValues, runtimeType, selectionSet, fields, visitedFragmentNames) {
  var _iterator2 = _createForOfIteratorHelper(selectionSet.selections),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var selection = _step2.value;
      switch (selection.kind) {
        case _kinds.Kind.FIELD:
          {
            if (!shouldIncludeNode(variableValues, selection)) {
              continue;
            }
            var name = getFieldEntryKey(selection);
            var fieldList = fields.get(name);
            if (fieldList !== undefined) {
              fieldList.push(selection);
            } else {
              fields.set(name, [selection]);
            }
            break;
          }
        case _kinds.Kind.INLINE_FRAGMENT:
          {
            if (!shouldIncludeNode(variableValues, selection) || !doesFragmentConditionMatch(schema, selection, runtimeType)) {
              continue;
            }
            collectFieldsImpl(schema, fragments, variableValues, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
            break;
          }
        case _kinds.Kind.FRAGMENT_SPREAD:
          {
            var fragName = selection.name.value;
            if (visitedFragmentNames.has(fragName) || !shouldIncludeNode(variableValues, selection)) {
              continue;
            }
            visitedFragmentNames.add(fragName);
            var fragment = fragments[fragName];
            if (!fragment || !doesFragmentConditionMatch(schema, fragment, runtimeType)) {
              continue;
            }
            collectFieldsImpl(schema, fragments, variableValues, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
            break;
          }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
/**
 * Determines if a field should be included based on the `@include` and `@skip`
 * directives, where `@skip` has higher precedence than `@include`.
 */

function shouldIncludeNode(variableValues, node) {
  var skip = (0, _values.getDirectiveValues)(_directives.GraphQLSkipDirective, node, variableValues);
  if ((skip === null || skip === void 0 ? void 0 : skip.if) === true) {
    return false;
  }
  var include = (0, _values.getDirectiveValues)(_directives.GraphQLIncludeDirective, node, variableValues);
  if ((include === null || include === void 0 ? void 0 : include.if) === false) {
    return false;
  }
  return true;
}
/**
 * Determines if a fragment is applicable to the given type.
 */

function doesFragmentConditionMatch(schema, fragment, type) {
  var typeConditionNode = fragment.typeCondition;
  if (!typeConditionNode) {
    return true;
  }
  var conditionalType = (0, _typeFromAST.typeFromAST)(schema, typeConditionNode);
  if (conditionalType === type) {
    return true;
  }
  if ((0, _definition.isAbstractType)(conditionalType)) {
    return schema.isSubType(conditionalType, type);
  }
  return false;
}
/**
 * Implements the logic to compute the key of a given field's entry
 */

function getFieldEntryKey(node) {
  return node.alias ? node.alias.value : node.name.value;
}
},{"../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../type/directives.mjs":"../node_modules/graphql/type/directives.mjs","../utilities/typeFromAST.mjs":"../node_modules/graphql/utilities/typeFromAST.mjs","./values.mjs":"../node_modules/graphql/execution/values.mjs"}],"../node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleFieldSubscriptionsRule = SingleFieldSubscriptionsRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _kinds = require("../../language/kinds.mjs");
var _collectFields = require("../../execution/collectFields.mjs");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Subscriptions must only include a non-introspection field.
 *
 * A GraphQL subscription is valid only if it contains a single root field and
 * that root field is not an introspection field.
 *
 * See https://spec.graphql.org/draft/#sec-Single-root-field
 */
function SingleFieldSubscriptionsRule(context) {
  return {
    OperationDefinition: function OperationDefinition(node) {
      if (node.operation === 'subscription') {
        var schema = context.getSchema();
        var subscriptionType = schema.getSubscriptionType();
        if (subscriptionType) {
          var operationName = node.name ? node.name.value : null;
          var variableValues = Object.create(null);
          var document = context.getDocument();
          var fragments = Object.create(null);
          var _iterator = _createForOfIteratorHelper(document.definitions),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var definition = _step.value;
              if (definition.kind === _kinds.Kind.FRAGMENT_DEFINITION) {
                fragments[definition.name.value] = definition;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var fields = (0, _collectFields.collectFields)(schema, fragments, variableValues, subscriptionType, node.selectionSet);
          if (fields.size > 1) {
            var fieldSelectionLists = _toConsumableArray(fields.values());
            var extraFieldSelectionLists = fieldSelectionLists.slice(1);
            var extraFieldSelections = extraFieldSelectionLists.flat();
            context.reportError(new _GraphQLError.GraphQLError(operationName != null ? "Subscription \"".concat(operationName, "\" must select only one top level field.") : 'Anonymous Subscription must select only one top level field.', {
              nodes: extraFieldSelections
            }));
          }
          var _iterator2 = _createForOfIteratorHelper(fields.values()),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var fieldNodes = _step2.value;
              var field = fieldNodes[0];
              var fieldName = field.name.value;
              if (fieldName.startsWith('__')) {
                context.reportError(new _GraphQLError.GraphQLError(operationName != null ? "Subscription \"".concat(operationName, "\" must not select an introspection top level field.") : 'Anonymous Subscription must not select an introspection top level field.', {
                  nodes: fieldNodes
                }));
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    }
  };
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../../execution/collectFields.mjs":"../node_modules/graphql/execution/collectFields.mjs"}],"../node_modules/graphql/jsutils/groupBy.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupBy = groupBy;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Groups array items into a Map, given a function to produce grouping key.
 */
function groupBy(list, keyFn) {
  var result = new Map();
  var _iterator = _createForOfIteratorHelper(list),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var key = keyFn(item);
      var group = result.get(key);
      if (group === undefined) {
        result.set(key, [item]);
      } else {
        group.push(item);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
}
},{}],"../node_modules/graphql/validation/rules/UniqueArgumentDefinitionNamesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniqueArgumentDefinitionNamesRule = UniqueArgumentDefinitionNamesRule;
var _groupBy = require("../../jsutils/groupBy.mjs");
var _GraphQLError = require("../../error/GraphQLError.mjs");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Unique argument definition names
 *
 * A GraphQL Object or Interface type is only valid if all its fields have uniquely named arguments.
 * A GraphQL Directive is only valid if all its arguments are uniquely named.
 */
function UniqueArgumentDefinitionNamesRule(context) {
  return {
    DirectiveDefinition: function DirectiveDefinition(directiveNode) {
      var _directiveNode$argume;

      // FIXME: https://github.com/graphql/graphql-js/issues/2203

      /* c8 ignore next */
      var argumentNodes = (_directiveNode$argume = directiveNode.arguments) !== null && _directiveNode$argume !== void 0 ? _directiveNode$argume : [];
      return checkArgUniqueness("@".concat(directiveNode.name.value), argumentNodes);
    },
    InterfaceTypeDefinition: checkArgUniquenessPerField,
    InterfaceTypeExtension: checkArgUniquenessPerField,
    ObjectTypeDefinition: checkArgUniquenessPerField,
    ObjectTypeExtension: checkArgUniquenessPerField
  };
  function checkArgUniquenessPerField(typeNode) {
    var _typeNode$fields;
    var typeName = typeNode.name.value; // FIXME: https://github.com/graphql/graphql-js/issues/2203

    /* c8 ignore next */

    var fieldNodes = (_typeNode$fields = typeNode.fields) !== null && _typeNode$fields !== void 0 ? _typeNode$fields : [];
    var _iterator = _createForOfIteratorHelper(fieldNodes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var fieldDef = _step.value;
        var _fieldDef$arguments;
        var fieldName = fieldDef.name.value; // FIXME: https://github.com/graphql/graphql-js/issues/2203

        /* c8 ignore next */

        var argumentNodes = (_fieldDef$arguments = fieldDef.arguments) !== null && _fieldDef$arguments !== void 0 ? _fieldDef$arguments : [];
        checkArgUniqueness("".concat(typeName, ".").concat(fieldName), argumentNodes);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return false;
  }
  function checkArgUniqueness(parentName, argumentNodes) {
    var seenArgs = (0, _groupBy.groupBy)(argumentNodes, function (arg) {
      return arg.name.value;
    });
    var _iterator2 = _createForOfIteratorHelper(seenArgs),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
          argName = _step2$value[0],
          argNodes = _step2$value[1];
        if (argNodes.length > 1) {
          context.reportError(new _GraphQLError.GraphQLError("Argument \"".concat(parentName, "(").concat(argName, ":)\" can only be defined once."), {
            nodes: argNodes.map(function (node) {
              return node.name;
            })
          }));
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return false;
  }
}
},{"../../jsutils/groupBy.mjs":"../node_modules/graphql/jsutils/groupBy.mjs","../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/validation/rules/UniqueArgumentNamesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniqueArgumentNamesRule = UniqueArgumentNamesRule;
var _groupBy = require("../../jsutils/groupBy.mjs");
var _GraphQLError = require("../../error/GraphQLError.mjs");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Unique argument names
 *
 * A GraphQL field or directive is only valid if all supplied arguments are
 * uniquely named.
 *
 * See https://spec.graphql.org/draft/#sec-Argument-Names
 */
function UniqueArgumentNamesRule(context) {
  return {
    Field: checkArgUniqueness,
    Directive: checkArgUniqueness
  };
  function checkArgUniqueness(parentNode) {
    var _parentNode$arguments;

    // FIXME: https://github.com/graphql/graphql-js/issues/2203

    /* c8 ignore next */
    var argumentNodes = (_parentNode$arguments = parentNode.arguments) !== null && _parentNode$arguments !== void 0 ? _parentNode$arguments : [];
    var seenArgs = (0, _groupBy.groupBy)(argumentNodes, function (arg) {
      return arg.name.value;
    });
    var _iterator = _createForOfIteratorHelper(seenArgs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          argName = _step$value[0],
          argNodes = _step$value[1];
        if (argNodes.length > 1) {
          context.reportError(new _GraphQLError.GraphQLError("There can be only one argument named \"".concat(argName, "\"."), {
            nodes: argNodes.map(function (node) {
              return node.name;
            })
          }));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}
},{"../../jsutils/groupBy.mjs":"../node_modules/graphql/jsutils/groupBy.mjs","../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniqueDirectiveNamesRule = UniqueDirectiveNamesRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
/**
 * Unique directive names
 *
 * A GraphQL document is only valid if all defined directives have unique names.
 */
function UniqueDirectiveNamesRule(context) {
  var knownDirectiveNames = Object.create(null);
  var schema = context.getSchema();
  return {
    DirectiveDefinition: function DirectiveDefinition(node) {
      var directiveName = node.name.value;
      if (schema !== null && schema !== void 0 && schema.getDirective(directiveName)) {
        context.reportError(new _GraphQLError.GraphQLError("Directive \"@".concat(directiveName, "\" already exists in the schema. It cannot be redefined."), {
          nodes: node.name
        }));
        return;
      }
      if (knownDirectiveNames[directiveName]) {
        context.reportError(new _GraphQLError.GraphQLError("There can be only one directive named \"@".concat(directiveName, "\"."), {
          nodes: [knownDirectiveNames[directiveName], node.name]
        }));
      } else {
        knownDirectiveNames[directiveName] = node.name;
      }
      return false;
    }
  };
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniqueDirectivesPerLocationRule = UniqueDirectivesPerLocationRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _kinds = require("../../language/kinds.mjs");
var _predicates = require("../../language/predicates.mjs");
var _directives = require("../../type/directives.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Unique directive names per location
 *
 * A GraphQL document is only valid if all non-repeatable directives at
 * a given location are uniquely named.
 *
 * See https://spec.graphql.org/draft/#sec-Directives-Are-Unique-Per-Location
 */
function UniqueDirectivesPerLocationRule(context) {
  var uniqueDirectiveMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _directives.specifiedDirectives;
  var _iterator = _createForOfIteratorHelper(definedDirectives),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var directive = _step.value;
      uniqueDirectiveMap[directive.name] = !directive.isRepeatable;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var astDefinitions = context.getDocument().definitions;
  var _iterator2 = _createForOfIteratorHelper(astDefinitions),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var def = _step2.value;
      if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
        uniqueDirectiveMap[def.name.value] = !def.repeatable;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var schemaDirectives = Object.create(null);
  var typeDirectivesMap = Object.create(null);
  return {
    // Many different AST nodes may contain directives. Rather than listing
    // them all, just listen for entering any node, and check to see if it
    // defines any directives.
    enter: function enter(node) {
      if (!('directives' in node) || !node.directives) {
        return;
      }
      var seenDirectives;
      if (node.kind === _kinds.Kind.SCHEMA_DEFINITION || node.kind === _kinds.Kind.SCHEMA_EXTENSION) {
        seenDirectives = schemaDirectives;
      } else if ((0, _predicates.isTypeDefinitionNode)(node) || (0, _predicates.isTypeExtensionNode)(node)) {
        var typeName = node.name.value;
        seenDirectives = typeDirectivesMap[typeName];
        if (seenDirectives === undefined) {
          typeDirectivesMap[typeName] = seenDirectives = Object.create(null);
        }
      } else {
        seenDirectives = Object.create(null);
      }
      var _iterator3 = _createForOfIteratorHelper(node.directives),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var directive = _step3.value;
          var directiveName = directive.name.value;
          if (uniqueDirectiveMap[directiveName]) {
            if (seenDirectives[directiveName]) {
              context.reportError(new _GraphQLError.GraphQLError("The directive \"@".concat(directiveName, "\" can only be used once at this location."), {
                nodes: [seenDirectives[directiveName], directive]
              }));
            } else {
              seenDirectives[directiveName] = directive;
            }
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  };
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../../language/predicates.mjs":"../node_modules/graphql/language/predicates.mjs","../../type/directives.mjs":"../node_modules/graphql/type/directives.mjs"}],"../node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniqueEnumValueNamesRule = UniqueEnumValueNamesRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _definition = require("../../type/definition.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Unique enum value names
 *
 * A GraphQL enum type is only valid if all its values are uniquely named.
 */
function UniqueEnumValueNamesRule(context) {
  var schema = context.getSchema();
  var existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
  var knownValueNames = Object.create(null);
  return {
    EnumTypeDefinition: checkValueUniqueness,
    EnumTypeExtension: checkValueUniqueness
  };
  function checkValueUniqueness(node) {
    var _node$values;
    var typeName = node.name.value;
    if (!knownValueNames[typeName]) {
      knownValueNames[typeName] = Object.create(null);
    } // FIXME: https://github.com/graphql/graphql-js/issues/2203

    /* c8 ignore next */

    var valueNodes = (_node$values = node.values) !== null && _node$values !== void 0 ? _node$values : [];
    var valueNames = knownValueNames[typeName];
    var _iterator = _createForOfIteratorHelper(valueNodes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var valueDef = _step.value;
        var valueName = valueDef.name.value;
        var existingType = existingTypeMap[typeName];
        if ((0, _definition.isEnumType)(existingType) && existingType.getValue(valueName)) {
          context.reportError(new _GraphQLError.GraphQLError("Enum value \"".concat(typeName, ".").concat(valueName, "\" already exists in the schema. It cannot also be defined in this type extension."), {
            nodes: valueDef.name
          }));
        } else if (valueNames[valueName]) {
          context.reportError(new _GraphQLError.GraphQLError("Enum value \"".concat(typeName, ".").concat(valueName, "\" can only be defined once."), {
            nodes: [valueNames[valueName], valueDef.name]
          }));
        } else {
          valueNames[valueName] = valueDef.name;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return false;
  }
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../type/definition.mjs":"../node_modules/graphql/type/definition.mjs"}],"../node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniqueFieldDefinitionNamesRule = UniqueFieldDefinitionNamesRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _definition = require("../../type/definition.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Unique field definition names
 *
 * A GraphQL complex type is only valid if all its fields are uniquely named.
 */
function UniqueFieldDefinitionNamesRule(context) {
  var schema = context.getSchema();
  var existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
  var knownFieldNames = Object.create(null);
  return {
    InputObjectTypeDefinition: checkFieldUniqueness,
    InputObjectTypeExtension: checkFieldUniqueness,
    InterfaceTypeDefinition: checkFieldUniqueness,
    InterfaceTypeExtension: checkFieldUniqueness,
    ObjectTypeDefinition: checkFieldUniqueness,
    ObjectTypeExtension: checkFieldUniqueness
  };
  function checkFieldUniqueness(node) {
    var _node$fields;
    var typeName = node.name.value;
    if (!knownFieldNames[typeName]) {
      knownFieldNames[typeName] = Object.create(null);
    } // FIXME: https://github.com/graphql/graphql-js/issues/2203

    /* c8 ignore next */

    var fieldNodes = (_node$fields = node.fields) !== null && _node$fields !== void 0 ? _node$fields : [];
    var fieldNames = knownFieldNames[typeName];
    var _iterator = _createForOfIteratorHelper(fieldNodes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var fieldDef = _step.value;
        var fieldName = fieldDef.name.value;
        if (hasField(existingTypeMap[typeName], fieldName)) {
          context.reportError(new _GraphQLError.GraphQLError("Field \"".concat(typeName, ".").concat(fieldName, "\" already exists in the schema. It cannot also be defined in this type extension."), {
            nodes: fieldDef.name
          }));
        } else if (fieldNames[fieldName]) {
          context.reportError(new _GraphQLError.GraphQLError("Field \"".concat(typeName, ".").concat(fieldName, "\" can only be defined once."), {
            nodes: [fieldNames[fieldName], fieldDef.name]
          }));
        } else {
          fieldNames[fieldName] = fieldDef.name;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return false;
  }
}
function hasField(type, fieldName) {
  if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type) || (0, _definition.isInputObjectType)(type)) {
    return type.getFields()[fieldName] != null;
  }
  return false;
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../type/definition.mjs":"../node_modules/graphql/type/definition.mjs"}],"../node_modules/graphql/validation/rules/UniqueFragmentNamesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniqueFragmentNamesRule = UniqueFragmentNamesRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
/**
 * Unique fragment names
 *
 * A GraphQL document is only valid if all defined fragments have unique names.
 *
 * See https://spec.graphql.org/draft/#sec-Fragment-Name-Uniqueness
 */
function UniqueFragmentNamesRule(context) {
  var knownFragmentNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var fragmentName = node.name.value;
      if (knownFragmentNames[fragmentName]) {
        context.reportError(new _GraphQLError.GraphQLError("There can be only one fragment named \"".concat(fragmentName, "\"."), {
          nodes: [knownFragmentNames[fragmentName], node.name]
        }));
      } else {
        knownFragmentNames[fragmentName] = node.name;
      }
      return false;
    }
  };
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniqueInputFieldNamesRule = UniqueInputFieldNamesRule;
var _invariant = require("../../jsutils/invariant.mjs");
var _GraphQLError = require("../../error/GraphQLError.mjs");
/**
 * Unique input field names
 *
 * A GraphQL input object value is only valid if all supplied fields are
 * uniquely named.
 *
 * See https://spec.graphql.org/draft/#sec-Input-Object-Field-Uniqueness
 */
function UniqueInputFieldNamesRule(context) {
  var knownNameStack = [];
  var knownNames = Object.create(null);
  return {
    ObjectValue: {
      enter: function enter() {
        knownNameStack.push(knownNames);
        knownNames = Object.create(null);
      },
      leave: function leave() {
        var prevKnownNames = knownNameStack.pop();
        prevKnownNames || (0, _invariant.invariant)(false);
        knownNames = prevKnownNames;
      }
    },
    ObjectField: function ObjectField(node) {
      var fieldName = node.name.value;
      if (knownNames[fieldName]) {
        context.reportError(new _GraphQLError.GraphQLError("There can be only one input field named \"".concat(fieldName, "\"."), {
          nodes: [knownNames[fieldName], node.name]
        }));
      } else {
        knownNames[fieldName] = node.name;
      }
    }
  };
}
},{"../../jsutils/invariant.mjs":"../node_modules/graphql/jsutils/invariant.mjs","../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/validation/rules/UniqueOperationNamesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniqueOperationNamesRule = UniqueOperationNamesRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
/**
 * Unique operation names
 *
 * A GraphQL document is only valid if all defined operations have unique names.
 *
 * See https://spec.graphql.org/draft/#sec-Operation-Name-Uniqueness
 */
function UniqueOperationNamesRule(context) {
  var knownOperationNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition(node) {
      var operationName = node.name;
      if (operationName) {
        if (knownOperationNames[operationName.value]) {
          context.reportError(new _GraphQLError.GraphQLError("There can be only one operation named \"".concat(operationName.value, "\"."), {
            nodes: [knownOperationNames[operationName.value], operationName]
          }));
        } else {
          knownOperationNames[operationName.value] = operationName;
        }
      }
      return false;
    },
    FragmentDefinition: function FragmentDefinition() {
      return false;
    }
  };
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/validation/rules/UniqueOperationTypesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniqueOperationTypesRule = UniqueOperationTypesRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Unique operation types
 *
 * A GraphQL document is only valid if it has only one type per operation.
 */
function UniqueOperationTypesRule(context) {
  var schema = context.getSchema();
  var definedOperationTypes = Object.create(null);
  var existingOperationTypes = schema ? {
    query: schema.getQueryType(),
    mutation: schema.getMutationType(),
    subscription: schema.getSubscriptionType()
  } : {};
  return {
    SchemaDefinition: checkOperationTypes,
    SchemaExtension: checkOperationTypes
  };
  function checkOperationTypes(node) {
    var _node$operationTypes;

    // See: https://github.com/graphql/graphql-js/issues/2203

    /* c8 ignore next */
    var operationTypesNodes = (_node$operationTypes = node.operationTypes) !== null && _node$operationTypes !== void 0 ? _node$operationTypes : [];
    var _iterator = _createForOfIteratorHelper(operationTypesNodes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var operationType = _step.value;
        var operation = operationType.operation;
        var alreadyDefinedOperationType = definedOperationTypes[operation];
        if (existingOperationTypes[operation]) {
          context.reportError(new _GraphQLError.GraphQLError("Type for ".concat(operation, " already defined in the schema. It cannot be redefined."), {
            nodes: operationType
          }));
        } else if (alreadyDefinedOperationType) {
          context.reportError(new _GraphQLError.GraphQLError("There can be only one ".concat(operation, " type in schema."), {
            nodes: [alreadyDefinedOperationType, operationType]
          }));
        } else {
          definedOperationTypes[operation] = operationType;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return false;
  }
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/validation/rules/UniqueTypeNamesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniqueTypeNamesRule = UniqueTypeNamesRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
/**
 * Unique type names
 *
 * A GraphQL document is only valid if all defined types have unique names.
 */
function UniqueTypeNamesRule(context) {
  var knownTypeNames = Object.create(null);
  var schema = context.getSchema();
  return {
    ScalarTypeDefinition: checkTypeName,
    ObjectTypeDefinition: checkTypeName,
    InterfaceTypeDefinition: checkTypeName,
    UnionTypeDefinition: checkTypeName,
    EnumTypeDefinition: checkTypeName,
    InputObjectTypeDefinition: checkTypeName
  };
  function checkTypeName(node) {
    var typeName = node.name.value;
    if (schema !== null && schema !== void 0 && schema.getType(typeName)) {
      context.reportError(new _GraphQLError.GraphQLError("Type \"".concat(typeName, "\" already exists in the schema. It cannot also be defined in this type definition."), {
        nodes: node.name
      }));
      return;
    }
    if (knownTypeNames[typeName]) {
      context.reportError(new _GraphQLError.GraphQLError("There can be only one type named \"".concat(typeName, "\"."), {
        nodes: [knownTypeNames[typeName], node.name]
      }));
    } else {
      knownTypeNames[typeName] = node.name;
    }
    return false;
  }
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/validation/rules/UniqueVariableNamesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniqueVariableNamesRule = UniqueVariableNamesRule;
var _groupBy = require("../../jsutils/groupBy.mjs");
var _GraphQLError = require("../../error/GraphQLError.mjs");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Unique variable names
 *
 * A GraphQL operation is only valid if all its variables are uniquely named.
 */
function UniqueVariableNamesRule(context) {
  return {
    OperationDefinition: function OperationDefinition(operationNode) {
      var _operationNode$variab;

      // See: https://github.com/graphql/graphql-js/issues/2203

      /* c8 ignore next */
      var variableDefinitions = (_operationNode$variab = operationNode.variableDefinitions) !== null && _operationNode$variab !== void 0 ? _operationNode$variab : [];
      var seenVariableDefinitions = (0, _groupBy.groupBy)(variableDefinitions, function (node) {
        return node.variable.name.value;
      });
      var _iterator = _createForOfIteratorHelper(seenVariableDefinitions),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            variableName = _step$value[0],
            variableNodes = _step$value[1];
          if (variableNodes.length > 1) {
            context.reportError(new _GraphQLError.GraphQLError("There can be only one variable named \"$".concat(variableName, "\"."), {
              nodes: variableNodes.map(function (node) {
                return node.variable.name;
              })
            }));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };
}
},{"../../jsutils/groupBy.mjs":"../node_modules/graphql/jsutils/groupBy.mjs","../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValuesOfCorrectTypeRule = ValuesOfCorrectTypeRule;
var _didYouMean = require("../../jsutils/didYouMean.mjs");
var _inspect = require("../../jsutils/inspect.mjs");
var _keyMap = require("../../jsutils/keyMap.mjs");
var _suggestionList = require("../../jsutils/suggestionList.mjs");
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _printer = require("../../language/printer.mjs");
var _definition = require("../../type/definition.mjs");
/**
 * Value literals of correct type
 *
 * A GraphQL document is only valid if all value literals are of the type
 * expected at their position.
 *
 * See https://spec.graphql.org/draft/#sec-Values-of-Correct-Type
 */
function ValuesOfCorrectTypeRule(context) {
  return {
    ListValue: function ListValue(node) {
      // Note: TypeInfo will traverse into a list's item type, so look to the
      // parent input type to check if it is a list.
      var type = (0, _definition.getNullableType)(context.getParentInputType());
      if (!(0, _definition.isListType)(type)) {
        isValidValueNode(context, node);
        return false; // Don't traverse further.
      }
    },
    ObjectValue: function ObjectValue(node) {
      var type = (0, _definition.getNamedType)(context.getInputType());
      if (!(0, _definition.isInputObjectType)(type)) {
        isValidValueNode(context, node);
        return false; // Don't traverse further.
      } // Ensure every required field exists.

      var fieldNodeMap = (0, _keyMap.keyMap)(node.fields, function (field) {
        return field.name.value;
      });
      for (var _i = 0, _Object$values = Object.values(type.getFields()); _i < _Object$values.length; _i++) {
        var fieldDef = _Object$values[_i];
        var fieldNode = fieldNodeMap[fieldDef.name];
        if (!fieldNode && (0, _definition.isRequiredInputField)(fieldDef)) {
          var typeStr = (0, _inspect.inspect)(fieldDef.type);
          context.reportError(new _GraphQLError.GraphQLError("Field \"".concat(type.name, ".").concat(fieldDef.name, "\" of required type \"").concat(typeStr, "\" was not provided."), {
            nodes: node
          }));
        }
      }
    },
    ObjectField: function ObjectField(node) {
      var parentType = (0, _definition.getNamedType)(context.getParentInputType());
      var fieldType = context.getInputType();
      if (!fieldType && (0, _definition.isInputObjectType)(parentType)) {
        var suggestions = (0, _suggestionList.suggestionList)(node.name.value, Object.keys(parentType.getFields()));
        context.reportError(new _GraphQLError.GraphQLError("Field \"".concat(node.name.value, "\" is not defined by type \"").concat(parentType.name, "\".") + (0, _didYouMean.didYouMean)(suggestions), {
          nodes: node
        }));
      }
    },
    NullValue: function NullValue(node) {
      var type = context.getInputType();
      if ((0, _definition.isNonNullType)(type)) {
        context.reportError(new _GraphQLError.GraphQLError("Expected value of type \"".concat((0, _inspect.inspect)(type), "\", found ").concat((0, _printer.print)(node), "."), {
          nodes: node
        }));
      }
    },
    EnumValue: function EnumValue(node) {
      return isValidValueNode(context, node);
    },
    IntValue: function IntValue(node) {
      return isValidValueNode(context, node);
    },
    FloatValue: function FloatValue(node) {
      return isValidValueNode(context, node);
    },
    StringValue: function StringValue(node) {
      return isValidValueNode(context, node);
    },
    BooleanValue: function BooleanValue(node) {
      return isValidValueNode(context, node);
    }
  };
}
/**
 * Any value literal may be a valid representation of a Scalar, depending on
 * that scalar type.
 */

function isValidValueNode(context, node) {
  // Report any error at the full type expected by the location.
  var locationType = context.getInputType();
  if (!locationType) {
    return;
  }
  var type = (0, _definition.getNamedType)(locationType);
  if (!(0, _definition.isLeafType)(type)) {
    var typeStr = (0, _inspect.inspect)(locationType);
    context.reportError(new _GraphQLError.GraphQLError("Expected value of type \"".concat(typeStr, "\", found ").concat((0, _printer.print)(node), "."), {
      nodes: node
    }));
    return;
  } // Scalars and Enums determine if a literal value is valid via parseLiteral(),
  // which may throw or return an invalid value to indicate failure.

  try {
    var parseResult = type.parseLiteral(node, undefined
    /* variables */);

    if (parseResult === undefined) {
      var _typeStr = (0, _inspect.inspect)(locationType);
      context.reportError(new _GraphQLError.GraphQLError("Expected value of type \"".concat(_typeStr, "\", found ").concat((0, _printer.print)(node), "."), {
        nodes: node
      }));
    }
  } catch (error) {
    var _typeStr2 = (0, _inspect.inspect)(locationType);
    if (error instanceof _GraphQLError.GraphQLError) {
      context.reportError(error);
    } else {
      context.reportError(new _GraphQLError.GraphQLError("Expected value of type \"".concat(_typeStr2, "\", found ").concat((0, _printer.print)(node), "; ") + error.message, {
        nodes: node,
        originalError: error
      }));
    }
  }
}
},{"../../jsutils/didYouMean.mjs":"../node_modules/graphql/jsutils/didYouMean.mjs","../../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../../jsutils/keyMap.mjs":"../node_modules/graphql/jsutils/keyMap.mjs","../../jsutils/suggestionList.mjs":"../node_modules/graphql/jsutils/suggestionList.mjs","../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../language/printer.mjs":"../node_modules/graphql/language/printer.mjs","../../type/definition.mjs":"../node_modules/graphql/type/definition.mjs"}],"../node_modules/graphql/validation/rules/VariablesAreInputTypesRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariablesAreInputTypesRule = VariablesAreInputTypesRule;
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _printer = require("../../language/printer.mjs");
var _definition = require("../../type/definition.mjs");
var _typeFromAST = require("../../utilities/typeFromAST.mjs");
/**
 * Variables are input types
 *
 * A GraphQL operation is only valid if all the variables it defines are of
 * input types (scalar, enum, or input object).
 *
 * See https://spec.graphql.org/draft/#sec-Variables-Are-Input-Types
 */
function VariablesAreInputTypesRule(context) {
  return {
    VariableDefinition: function VariableDefinition(node) {
      var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), node.type);
      if (type !== undefined && !(0, _definition.isInputType)(type)) {
        var variableName = node.variable.name.value;
        var typeName = (0, _printer.print)(node.type);
        context.reportError(new _GraphQLError.GraphQLError("Variable \"$".concat(variableName, "\" cannot be non-input type \"").concat(typeName, "\"."), {
          nodes: node.type
        }));
      }
    }
  };
}
},{"../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../language/printer.mjs":"../node_modules/graphql/language/printer.mjs","../../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../../utilities/typeFromAST.mjs":"../node_modules/graphql/utilities/typeFromAST.mjs"}],"../node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariablesInAllowedPositionRule = VariablesInAllowedPositionRule;
var _inspect = require("../../jsutils/inspect.mjs");
var _GraphQLError = require("../../error/GraphQLError.mjs");
var _kinds = require("../../language/kinds.mjs");
var _definition = require("../../type/definition.mjs");
var _typeComparators = require("../../utilities/typeComparators.mjs");
var _typeFromAST = require("../../utilities/typeFromAST.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Variables in allowed position
 *
 * Variable usages must be compatible with the arguments they are passed to.
 *
 * See https://spec.graphql.org/draft/#sec-All-Variable-Usages-are-Allowed
 */
function VariablesInAllowedPositionRule(context) {
  var varDefMap = Object.create(null);
  return {
    OperationDefinition: {
      enter: function enter() {
        varDefMap = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);
        var _iterator = _createForOfIteratorHelper(usages),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _step.value,
              node = _step$value.node,
              type = _step$value.type,
              defaultValue = _step$value.defaultValue;
            var varName = node.name.value;
            var varDef = varDefMap[varName];
            if (varDef && type) {
              // A var type is allowed if it is the same or more strict (e.g. is
              // a subtype of) than the expected type. It can be more strict if
              // the variable type is non-null when the expected type is nullable.
              // If both are list types, the variable item type can be more strict
              // than the expected item type (contravariant).
              var schema = context.getSchema();
              var varType = (0, _typeFromAST.typeFromAST)(schema, varDef.type);
              if (varType && !allowedVariableUsage(schema, varType, varDef.defaultValue, type, defaultValue)) {
                var varTypeStr = (0, _inspect.inspect)(varType);
                var typeStr = (0, _inspect.inspect)(type);
                context.reportError(new _GraphQLError.GraphQLError("Variable \"$".concat(varName, "\" of type \"").concat(varTypeStr, "\" used in position expecting type \"").concat(typeStr, "\"."), {
                  nodes: [varDef, node]
                }));
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      varDefMap[node.variable.name.value] = node;
    }
  };
}
/**
 * Returns true if the variable is allowed in the location it was found,
 * which includes considering if default values exist for either the variable
 * or the location at which it is located.
 */

function allowedVariableUsage(schema, varType, varDefaultValue, locationType, locationDefaultValue) {
  if ((0, _definition.isNonNullType)(locationType) && !(0, _definition.isNonNullType)(varType)) {
    var hasNonNullVariableDefaultValue = varDefaultValue != null && varDefaultValue.kind !== _kinds.Kind.NULL;
    var hasLocationDefaultValue = locationDefaultValue !== undefined;
    if (!hasNonNullVariableDefaultValue && !hasLocationDefaultValue) {
      return false;
    }
    var nullableLocationType = locationType.ofType;
    return (0, _typeComparators.isTypeSubTypeOf)(schema, varType, nullableLocationType);
  }
  return (0, _typeComparators.isTypeSubTypeOf)(schema, varType, locationType);
}
},{"../../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../../utilities/typeComparators.mjs":"../node_modules/graphql/utilities/typeComparators.mjs","../../utilities/typeFromAST.mjs":"../node_modules/graphql/utilities/typeFromAST.mjs"}],"../node_modules/graphql/validation/specifiedRules.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specifiedSDLRules = exports.specifiedRules = void 0;
var _ExecutableDefinitionsRule = require("./rules/ExecutableDefinitionsRule.mjs");
var _FieldsOnCorrectTypeRule = require("./rules/FieldsOnCorrectTypeRule.mjs");
var _FragmentsOnCompositeTypesRule = require("./rules/FragmentsOnCompositeTypesRule.mjs");
var _KnownArgumentNamesRule = require("./rules/KnownArgumentNamesRule.mjs");
var _KnownDirectivesRule = require("./rules/KnownDirectivesRule.mjs");
var _KnownFragmentNamesRule = require("./rules/KnownFragmentNamesRule.mjs");
var _KnownTypeNamesRule = require("./rules/KnownTypeNamesRule.mjs");
var _LoneAnonymousOperationRule = require("./rules/LoneAnonymousOperationRule.mjs");
var _LoneSchemaDefinitionRule = require("./rules/LoneSchemaDefinitionRule.mjs");
var _NoFragmentCyclesRule = require("./rules/NoFragmentCyclesRule.mjs");
var _NoUndefinedVariablesRule = require("./rules/NoUndefinedVariablesRule.mjs");
var _NoUnusedFragmentsRule = require("./rules/NoUnusedFragmentsRule.mjs");
var _NoUnusedVariablesRule = require("./rules/NoUnusedVariablesRule.mjs");
var _OverlappingFieldsCanBeMergedRule = require("./rules/OverlappingFieldsCanBeMergedRule.mjs");
var _PossibleFragmentSpreadsRule = require("./rules/PossibleFragmentSpreadsRule.mjs");
var _PossibleTypeExtensionsRule = require("./rules/PossibleTypeExtensionsRule.mjs");
var _ProvidedRequiredArgumentsRule = require("./rules/ProvidedRequiredArgumentsRule.mjs");
var _ScalarLeafsRule = require("./rules/ScalarLeafsRule.mjs");
var _SingleFieldSubscriptionsRule = require("./rules/SingleFieldSubscriptionsRule.mjs");
var _UniqueArgumentDefinitionNamesRule = require("./rules/UniqueArgumentDefinitionNamesRule.mjs");
var _UniqueArgumentNamesRule = require("./rules/UniqueArgumentNamesRule.mjs");
var _UniqueDirectiveNamesRule = require("./rules/UniqueDirectiveNamesRule.mjs");
var _UniqueDirectivesPerLocationRule = require("./rules/UniqueDirectivesPerLocationRule.mjs");
var _UniqueEnumValueNamesRule = require("./rules/UniqueEnumValueNamesRule.mjs");
var _UniqueFieldDefinitionNamesRule = require("./rules/UniqueFieldDefinitionNamesRule.mjs");
var _UniqueFragmentNamesRule = require("./rules/UniqueFragmentNamesRule.mjs");
var _UniqueInputFieldNamesRule = require("./rules/UniqueInputFieldNamesRule.mjs");
var _UniqueOperationNamesRule = require("./rules/UniqueOperationNamesRule.mjs");
var _UniqueOperationTypesRule = require("./rules/UniqueOperationTypesRule.mjs");
var _UniqueTypeNamesRule = require("./rules/UniqueTypeNamesRule.mjs");
var _UniqueVariableNamesRule = require("./rules/UniqueVariableNamesRule.mjs");
var _ValuesOfCorrectTypeRule = require("./rules/ValuesOfCorrectTypeRule.mjs");
var _VariablesAreInputTypesRule = require("./rules/VariablesAreInputTypesRule.mjs");
var _VariablesInAllowedPositionRule = require("./rules/VariablesInAllowedPositionRule.mjs");
// Spec Section: "Executable Definitions"
// Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"

// Spec Section: "Fragments on Composite Types"

// Spec Section: "Argument Names"

// Spec Section: "Directives Are Defined"

// Spec Section: "Fragment spread target defined"

// Spec Section: "Fragment Spread Type Existence"

// Spec Section: "Lone Anonymous Operation"

// SDL-specific validation rules

// Spec Section: "Fragments must not form cycles"

// Spec Section: "All Variable Used Defined"

// Spec Section: "Fragments must be used"

// Spec Section: "All Variables Used"

// Spec Section: "Field Selection Merging"

// Spec Section: "Fragment spread is possible"

// Spec Section: "Argument Optionality"

// Spec Section: "Leaf Field Selections"

// Spec Section: "Subscriptions with Single Root Field"

// Spec Section: "Argument Uniqueness"

// Spec Section: "Directives Are Unique Per Location"

// Spec Section: "Fragment Name Uniqueness"

// Spec Section: "Input Object Field Uniqueness"

// Spec Section: "Operation Name Uniqueness"

// Spec Section: "Variable Uniqueness"

// Spec Section: "Value Type Correctness"

// Spec Section: "Variables are Input Types"

// Spec Section: "All Variable Usages Are Allowed"

/**
 * This set includes all validation rules defined by the GraphQL spec.
 *
 * The order of the rules in this list has been adjusted to lead to the
 * most clear output when encountering multiple validation errors.
 */
var specifiedRules = exports.specifiedRules = Object.freeze([_ExecutableDefinitionsRule.ExecutableDefinitionsRule, _UniqueOperationNamesRule.UniqueOperationNamesRule, _LoneAnonymousOperationRule.LoneAnonymousOperationRule, _SingleFieldSubscriptionsRule.SingleFieldSubscriptionsRule, _KnownTypeNamesRule.KnownTypeNamesRule, _FragmentsOnCompositeTypesRule.FragmentsOnCompositeTypesRule, _VariablesAreInputTypesRule.VariablesAreInputTypesRule, _ScalarLeafsRule.ScalarLeafsRule, _FieldsOnCorrectTypeRule.FieldsOnCorrectTypeRule, _UniqueFragmentNamesRule.UniqueFragmentNamesRule, _KnownFragmentNamesRule.KnownFragmentNamesRule, _NoUnusedFragmentsRule.NoUnusedFragmentsRule, _PossibleFragmentSpreadsRule.PossibleFragmentSpreadsRule, _NoFragmentCyclesRule.NoFragmentCyclesRule, _UniqueVariableNamesRule.UniqueVariableNamesRule, _NoUndefinedVariablesRule.NoUndefinedVariablesRule, _NoUnusedVariablesRule.NoUnusedVariablesRule, _KnownDirectivesRule.KnownDirectivesRule, _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule, _KnownArgumentNamesRule.KnownArgumentNamesRule, _UniqueArgumentNamesRule.UniqueArgumentNamesRule, _ValuesOfCorrectTypeRule.ValuesOfCorrectTypeRule, _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsRule, _VariablesInAllowedPositionRule.VariablesInAllowedPositionRule, _OverlappingFieldsCanBeMergedRule.OverlappingFieldsCanBeMergedRule, _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule]);
/**
 * @internal
 */

var specifiedSDLRules = exports.specifiedSDLRules = Object.freeze([_LoneSchemaDefinitionRule.LoneSchemaDefinitionRule, _UniqueOperationTypesRule.UniqueOperationTypesRule, _UniqueTypeNamesRule.UniqueTypeNamesRule, _UniqueEnumValueNamesRule.UniqueEnumValueNamesRule, _UniqueFieldDefinitionNamesRule.UniqueFieldDefinitionNamesRule, _UniqueArgumentDefinitionNamesRule.UniqueArgumentDefinitionNamesRule, _UniqueDirectiveNamesRule.UniqueDirectiveNamesRule, _KnownTypeNamesRule.KnownTypeNamesRule, _KnownDirectivesRule.KnownDirectivesRule, _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule, _PossibleTypeExtensionsRule.PossibleTypeExtensionsRule, _KnownArgumentNamesRule.KnownArgumentNamesOnDirectivesRule, _UniqueArgumentNamesRule.UniqueArgumentNamesRule, _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule, _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsOnDirectivesRule]);
},{"./rules/ExecutableDefinitionsRule.mjs":"../node_modules/graphql/validation/rules/ExecutableDefinitionsRule.mjs","./rules/FieldsOnCorrectTypeRule.mjs":"../node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.mjs","./rules/FragmentsOnCompositeTypesRule.mjs":"../node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.mjs","./rules/KnownArgumentNamesRule.mjs":"../node_modules/graphql/validation/rules/KnownArgumentNamesRule.mjs","./rules/KnownDirectivesRule.mjs":"../node_modules/graphql/validation/rules/KnownDirectivesRule.mjs","./rules/KnownFragmentNamesRule.mjs":"../node_modules/graphql/validation/rules/KnownFragmentNamesRule.mjs","./rules/KnownTypeNamesRule.mjs":"../node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs","./rules/LoneAnonymousOperationRule.mjs":"../node_modules/graphql/validation/rules/LoneAnonymousOperationRule.mjs","./rules/LoneSchemaDefinitionRule.mjs":"../node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.mjs","./rules/NoFragmentCyclesRule.mjs":"../node_modules/graphql/validation/rules/NoFragmentCyclesRule.mjs","./rules/NoUndefinedVariablesRule.mjs":"../node_modules/graphql/validation/rules/NoUndefinedVariablesRule.mjs","./rules/NoUnusedFragmentsRule.mjs":"../node_modules/graphql/validation/rules/NoUnusedFragmentsRule.mjs","./rules/NoUnusedVariablesRule.mjs":"../node_modules/graphql/validation/rules/NoUnusedVariablesRule.mjs","./rules/OverlappingFieldsCanBeMergedRule.mjs":"../node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.mjs","./rules/PossibleFragmentSpreadsRule.mjs":"../node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.mjs","./rules/PossibleTypeExtensionsRule.mjs":"../node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs","./rules/ProvidedRequiredArgumentsRule.mjs":"../node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.mjs","./rules/ScalarLeafsRule.mjs":"../node_modules/graphql/validation/rules/ScalarLeafsRule.mjs","./rules/SingleFieldSubscriptionsRule.mjs":"../node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.mjs","./rules/UniqueArgumentDefinitionNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueArgumentDefinitionNamesRule.mjs","./rules/UniqueArgumentNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueArgumentNamesRule.mjs","./rules/UniqueDirectiveNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.mjs","./rules/UniqueDirectivesPerLocationRule.mjs":"../node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.mjs","./rules/UniqueEnumValueNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.mjs","./rules/UniqueFieldDefinitionNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.mjs","./rules/UniqueFragmentNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueFragmentNamesRule.mjs","./rules/UniqueInputFieldNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.mjs","./rules/UniqueOperationNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueOperationNamesRule.mjs","./rules/UniqueOperationTypesRule.mjs":"../node_modules/graphql/validation/rules/UniqueOperationTypesRule.mjs","./rules/UniqueTypeNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueTypeNamesRule.mjs","./rules/UniqueVariableNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueVariableNamesRule.mjs","./rules/ValuesOfCorrectTypeRule.mjs":"../node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.mjs","./rules/VariablesAreInputTypesRule.mjs":"../node_modules/graphql/validation/rules/VariablesAreInputTypesRule.mjs","./rules/VariablesInAllowedPositionRule.mjs":"../node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.mjs"}],"../node_modules/graphql/validation/ValidationContext.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationContext = exports.SDLValidationContext = exports.ASTValidationContext = void 0;
var _kinds = require("../language/kinds.mjs");
var _visitor = require("../language/visitor.mjs");
var _TypeInfo = require("../utilities/TypeInfo.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * An instance of this class is passed as the "this" context to all validators,
 * allowing access to commonly useful contextual information from within a
 * validation rule.
 */
var ASTValidationContext = exports.ASTValidationContext = /*#__PURE__*/function (_Symbol$toStringTag) {
  function ASTValidationContext(ast, onError) {
    _classCallCheck(this, ASTValidationContext);
    this._ast = ast;
    this._fragments = undefined;
    this._fragmentSpreads = new Map();
    this._recursivelyReferencedFragments = new Map();
    this._onError = onError;
  }
  _createClass(ASTValidationContext, [{
    key: _Symbol$toStringTag,
    get: function get() {
      return 'ASTValidationContext';
    }
  }, {
    key: "reportError",
    value: function reportError(error) {
      this._onError(error);
    }
  }, {
    key: "getDocument",
    value: function getDocument() {
      return this._ast;
    }
  }, {
    key: "getFragment",
    value: function getFragment(name) {
      var fragments;
      if (this._fragments) {
        fragments = this._fragments;
      } else {
        fragments = Object.create(null);
        var _iterator = _createForOfIteratorHelper(this.getDocument().definitions),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var defNode = _step.value;
            if (defNode.kind === _kinds.Kind.FRAGMENT_DEFINITION) {
              fragments[defNode.name.value] = defNode;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this._fragments = fragments;
      }
      return fragments[name];
    }
  }, {
    key: "getFragmentSpreads",
    value: function getFragmentSpreads(node) {
      var spreads = this._fragmentSpreads.get(node);
      if (!spreads) {
        spreads = [];
        var setsToVisit = [node];
        var set;
        while (set = setsToVisit.pop()) {
          var _iterator2 = _createForOfIteratorHelper(set.selections),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var selection = _step2.value;
              if (selection.kind === _kinds.Kind.FRAGMENT_SPREAD) {
                spreads.push(selection);
              } else if (selection.selectionSet) {
                setsToVisit.push(selection.selectionSet);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        this._fragmentSpreads.set(node, spreads);
      }
      return spreads;
    }
  }, {
    key: "getRecursivelyReferencedFragments",
    value: function getRecursivelyReferencedFragments(operation) {
      var fragments = this._recursivelyReferencedFragments.get(operation);
      if (!fragments) {
        fragments = [];
        var collectedNames = Object.create(null);
        var nodesToVisit = [operation.selectionSet];
        var node;
        while (node = nodesToVisit.pop()) {
          var _iterator3 = _createForOfIteratorHelper(this.getFragmentSpreads(node)),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var spread = _step3.value;
              var fragName = spread.name.value;
              if (collectedNames[fragName] !== true) {
                collectedNames[fragName] = true;
                var fragment = this.getFragment(fragName);
                if (fragment) {
                  fragments.push(fragment);
                  nodesToVisit.push(fragment.selectionSet);
                }
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
        this._recursivelyReferencedFragments.set(operation, fragments);
      }
      return fragments;
    }
  }]);
  return ASTValidationContext;
}(Symbol.toStringTag);
var SDLValidationContext = exports.SDLValidationContext = /*#__PURE__*/function (_ASTValidationContext, _Symbol$toStringTag2) {
  _inherits(SDLValidationContext, _ASTValidationContext);
  var _super = _createSuper(SDLValidationContext);
  function SDLValidationContext(ast, schema, onError) {
    var _this;
    _classCallCheck(this, SDLValidationContext);
    _this = _super.call(this, ast, onError);
    _this._schema = schema;
    return _this;
  }
  _createClass(SDLValidationContext, [{
    key: _Symbol$toStringTag2,
    get: function get() {
      return 'SDLValidationContext';
    }
  }, {
    key: "getSchema",
    value: function getSchema() {
      return this._schema;
    }
  }]);
  return SDLValidationContext;
}(ASTValidationContext, Symbol.toStringTag);
var ValidationContext = exports.ValidationContext = /*#__PURE__*/function (_ASTValidationContext2, _Symbol$toStringTag3) {
  _inherits(ValidationContext, _ASTValidationContext2);
  var _super2 = _createSuper(ValidationContext);
  function ValidationContext(schema, ast, typeInfo, onError) {
    var _this2;
    _classCallCheck(this, ValidationContext);
    _this2 = _super2.call(this, ast, onError);
    _this2._schema = schema;
    _this2._typeInfo = typeInfo;
    _this2._variableUsages = new Map();
    _this2._recursiveVariableUsages = new Map();
    return _this2;
  }
  _createClass(ValidationContext, [{
    key: _Symbol$toStringTag3,
    get: function get() {
      return 'ValidationContext';
    }
  }, {
    key: "getSchema",
    value: function getSchema() {
      return this._schema;
    }
  }, {
    key: "getVariableUsages",
    value: function getVariableUsages(node) {
      var usages = this._variableUsages.get(node);
      if (!usages) {
        var newUsages = [];
        var typeInfo = new _TypeInfo.TypeInfo(this._schema);
        (0, _visitor.visit)(node, (0, _TypeInfo.visitWithTypeInfo)(typeInfo, {
          VariableDefinition: function VariableDefinition() {
            return false;
          },
          Variable: function Variable(variable) {
            newUsages.push({
              node: variable,
              type: typeInfo.getInputType(),
              defaultValue: typeInfo.getDefaultValue()
            });
          }
        }));
        usages = newUsages;
        this._variableUsages.set(node, usages);
      }
      return usages;
    }
  }, {
    key: "getRecursiveVariableUsages",
    value: function getRecursiveVariableUsages(operation) {
      var usages = this._recursiveVariableUsages.get(operation);
      if (!usages) {
        usages = this.getVariableUsages(operation);
        var _iterator4 = _createForOfIteratorHelper(this.getRecursivelyReferencedFragments(operation)),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var frag = _step4.value;
            usages = usages.concat(this.getVariableUsages(frag));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        this._recursiveVariableUsages.set(operation, usages);
      }
      return usages;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this._typeInfo.getType();
    }
  }, {
    key: "getParentType",
    value: function getParentType() {
      return this._typeInfo.getParentType();
    }
  }, {
    key: "getInputType",
    value: function getInputType() {
      return this._typeInfo.getInputType();
    }
  }, {
    key: "getParentInputType",
    value: function getParentInputType() {
      return this._typeInfo.getParentInputType();
    }
  }, {
    key: "getFieldDef",
    value: function getFieldDef() {
      return this._typeInfo.getFieldDef();
    }
  }, {
    key: "getDirective",
    value: function getDirective() {
      return this._typeInfo.getDirective();
    }
  }, {
    key: "getArgument",
    value: function getArgument() {
      return this._typeInfo.getArgument();
    }
  }, {
    key: "getEnumValue",
    value: function getEnumValue() {
      return this._typeInfo.getEnumValue();
    }
  }]);
  return ValidationContext;
}(ASTValidationContext, Symbol.toStringTag);
},{"../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../language/visitor.mjs":"../node_modules/graphql/language/visitor.mjs","../utilities/TypeInfo.mjs":"../node_modules/graphql/utilities/TypeInfo.mjs"}],"../node_modules/graphql/validation/validate.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertValidSDL = assertValidSDL;
exports.assertValidSDLExtension = assertValidSDLExtension;
exports.validate = validate;
exports.validateSDL = validateSDL;
var _devAssert = require("../jsutils/devAssert.mjs");
var _GraphQLError = require("../error/GraphQLError.mjs");
var _visitor = require("../language/visitor.mjs");
var _validate = require("../type/validate.mjs");
var _TypeInfo = require("../utilities/TypeInfo.mjs");
var _specifiedRules = require("./specifiedRules.mjs");
var _ValidationContext = require("./ValidationContext.mjs");
/**
 * Implements the "Validation" section of the spec.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the document is valid.
 *
 * A list of specific validation rules may be provided. If not provided, the
 * default list of rules defined by the GraphQL specification will be used.
 *
 * Each validation rules is a function which returns a visitor
 * (see the language/visitor API). Visitor methods are expected to return
 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
 *
 * Validate will stop validation after a `maxErrors` limit has been reached.
 * Attackers can send pathologically invalid queries to induce a DoS attack,
 * so by default `maxErrors` set to 100 errors.
 *
 * Optionally a custom TypeInfo instance may be provided. If not provided, one
 * will be created from the provided schema.
 */

function validate(schema, documentAST) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _specifiedRules.specifiedRules;
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var typeInfo = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new _TypeInfo.TypeInfo(schema);
  var _options$maxErrors;
  var maxErrors = (_options$maxErrors = options === null || options === void 0 ? void 0 : options.maxErrors) !== null && _options$maxErrors !== void 0 ? _options$maxErrors : 100;
  documentAST || (0, _devAssert.devAssert)(false, 'Must provide document.'); // If the schema used for validation is invalid, throw an error.

  (0, _validate.assertValidSchema)(schema);
  var abortObj = Object.freeze({});
  var errors = [];
  var context = new _ValidationContext.ValidationContext(schema, documentAST, typeInfo, function (error) {
    if (errors.length >= maxErrors) {
      errors.push(new _GraphQLError.GraphQLError('Too many validation errors, error limit reached. Validation aborted.')); // eslint-disable-next-line @typescript-eslint/no-throw-literal

      throw abortObj;
    }
    errors.push(error);
  }); // This uses a specialized visitor which runs multiple visitors in parallel,
  // while maintaining the visitor skip and break API.

  var visitor = (0, _visitor.visitInParallel)(rules.map(function (rule) {
    return rule(context);
  })); // Visit the whole document with each instance of all provided rules.

  try {
    (0, _visitor.visit)(documentAST, (0, _TypeInfo.visitWithTypeInfo)(typeInfo, visitor));
  } catch (e) {
    if (e !== abortObj) {
      throw e;
    }
  }
  return errors;
}
/**
 * @internal
 */

function validateSDL(documentAST, schemaToExtend) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _specifiedRules.specifiedSDLRules;
  var errors = [];
  var context = new _ValidationContext.SDLValidationContext(documentAST, schemaToExtend, function (error) {
    errors.push(error);
  });
  var visitors = rules.map(function (rule) {
    return rule(context);
  });
  (0, _visitor.visit)(documentAST, (0, _visitor.visitInParallel)(visitors));
  return errors;
}
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */

function assertValidSDL(documentAST) {
  var errors = validateSDL(documentAST);
  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */

function assertValidSDLExtension(documentAST, schema) {
  var errors = validateSDL(documentAST, schema);
  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}
},{"../jsutils/devAssert.mjs":"../node_modules/graphql/jsutils/devAssert.mjs","../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../language/visitor.mjs":"../node_modules/graphql/language/visitor.mjs","../type/validate.mjs":"../node_modules/graphql/type/validate.mjs","../utilities/TypeInfo.mjs":"../node_modules/graphql/utilities/TypeInfo.mjs","./specifiedRules.mjs":"../node_modules/graphql/validation/specifiedRules.mjs","./ValidationContext.mjs":"../node_modules/graphql/validation/ValidationContext.mjs"}],"../node_modules/graphql/jsutils/memoize3.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.memoize3 = memoize3;
/**
 * Memoizes the provided three-argument function.
 */
function memoize3(fn) {
  var cache0;
  return function memoized(a1, a2, a3) {
    if (cache0 === undefined) {
      cache0 = new WeakMap();
    }
    var cache1 = cache0.get(a1);
    if (cache1 === undefined) {
      cache1 = new WeakMap();
      cache0.set(a1, cache1);
    }
    var cache2 = cache1.get(a2);
    if (cache2 === undefined) {
      cache2 = new WeakMap();
      cache1.set(a2, cache2);
    }
    var fnResult = cache2.get(a3);
    if (fnResult === undefined) {
      fnResult = fn(a1, a2, a3);
      cache2.set(a3, fnResult);
    }
    return fnResult;
  };
}
},{}],"../node_modules/graphql/jsutils/promiseForObject.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promiseForObject = promiseForObject;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * This function transforms a JS object `ObjMap<Promise<T>>` into
 * a `Promise<ObjMap<T>>`
 *
 * This is akin to bluebird's `Promise.props`, but implemented only using
 * `Promise.all` so it will work with any implementation of ES6 promises.
 */
function promiseForObject(object) {
  return Promise.all(Object.values(object)).then(function (resolvedValues) {
    var resolvedObject = Object.create(null);
    var _iterator = _createForOfIteratorHelper(Object.keys(object).entries()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          i = _step$value[0],
          key = _step$value[1];
        resolvedObject[key] = resolvedValues[i];
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return resolvedObject;
  });
}
},{}],"../node_modules/graphql/jsutils/promiseReduce.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promiseReduce = promiseReduce;
var _isPromise = require("./isPromise.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Similar to Array.prototype.reduce(), however the reducing callback may return
 * a Promise, in which case reduction will continue after each promise resolves.
 *
 * If the callback does not return a Promise, then this function will also not
 * return a Promise.
 */
function promiseReduce(values, callbackFn, initialValue) {
  var accumulator = initialValue;
  var _iterator = _createForOfIteratorHelper(values),
    _step;
  try {
    var _loop = function _loop() {
      var value = _step.value;
      accumulator = (0, _isPromise.isPromise)(accumulator) ? accumulator.then(function (resolved) {
        return callbackFn(resolved, value);
      }) : callbackFn(accumulator, value);
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return accumulator;
}
},{"./isPromise.mjs":"../node_modules/graphql/jsutils/isPromise.mjs"}],"../node_modules/graphql/jsutils/toError.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toError = toError;
var _inspect = require("./inspect.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * Sometimes a non-error is thrown, wrap it as an Error instance to ensure a consistent Error interface.
 */

function toError(thrownValue) {
  return thrownValue instanceof Error ? thrownValue : new NonErrorThrown(thrownValue);
}
var NonErrorThrown = /*#__PURE__*/function (_Error) {
  _inherits(NonErrorThrown, _Error);
  var _super = _createSuper(NonErrorThrown);
  function NonErrorThrown(thrownValue) {
    var _this;
    _classCallCheck(this, NonErrorThrown);
    _this = _super.call(this, 'Unexpected error value: ' + (0, _inspect.inspect)(thrownValue));
    _this.name = 'NonErrorThrown';
    _this.thrownValue = thrownValue;
    return _this;
  }
  return _createClass(NonErrorThrown);
}( /*#__PURE__*/_wrapNativeSuper(Error));
},{"./inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs"}],"../node_modules/graphql/error/locatedError.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locatedError = locatedError;
var _toError = require("../jsutils/toError.mjs");
var _GraphQLError = require("./GraphQLError.mjs");
/**
 * Given an arbitrary value, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */

function locatedError(rawOriginalError, nodes, path) {
  var _nodes;
  var originalError = (0, _toError.toError)(rawOriginalError); // Note: this uses a brand-check to support GraphQL errors originating from other contexts.

  if (isLocatedGraphQLError(originalError)) {
    return originalError;
  }
  return new _GraphQLError.GraphQLError(originalError.message, {
    nodes: (_nodes = originalError.nodes) !== null && _nodes !== void 0 ? _nodes : nodes,
    source: originalError.source,
    positions: originalError.positions,
    path: path,
    originalError: originalError
  });
}
function isLocatedGraphQLError(error) {
  return Array.isArray(error.path);
}
},{"../jsutils/toError.mjs":"../node_modules/graphql/jsutils/toError.mjs","./GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/execution/execute.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertValidExecutionArguments = assertValidExecutionArguments;
exports.buildExecutionContext = buildExecutionContext;
exports.buildResolveInfo = buildResolveInfo;
exports.defaultTypeResolver = exports.defaultFieldResolver = void 0;
exports.execute = execute;
exports.executeSync = executeSync;
exports.getFieldDef = getFieldDef;
var _devAssert = require("../jsutils/devAssert.mjs");
var _inspect = require("../jsutils/inspect.mjs");
var _invariant = require("../jsutils/invariant.mjs");
var _isIterableObject = require("../jsutils/isIterableObject.mjs");
var _isObjectLike = require("../jsutils/isObjectLike.mjs");
var _isPromise = require("../jsutils/isPromise.mjs");
var _memoize = require("../jsutils/memoize3.mjs");
var _Path = require("../jsutils/Path.mjs");
var _promiseForObject = require("../jsutils/promiseForObject.mjs");
var _promiseReduce = require("../jsutils/promiseReduce.mjs");
var _GraphQLError = require("../error/GraphQLError.mjs");
var _locatedError = require("../error/locatedError.mjs");
var _ast = require("../language/ast.mjs");
var _kinds = require("../language/kinds.mjs");
var _definition = require("../type/definition.mjs");
var _introspection = require("../type/introspection.mjs");
var _validate = require("../type/validate.mjs");
var _collectFields = require("./collectFields.mjs");
var _values = require("./values.mjs");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * A memoized collection of relevant subfields with regard to the return
 * type. Memoizing ensures the subfields are not repeatedly calculated, which
 * saves overhead when resolving lists of values.
 */

var collectSubfields = (0, _memoize.memoize3)(function (exeContext, returnType, fieldNodes) {
  return (0, _collectFields.collectSubfields)(exeContext.schema, exeContext.fragments, exeContext.variableValues, returnType, fieldNodes);
});
/**
 * Terminology
 *
 * "Definitions" are the generic name for top-level statements in the document.
 * Examples of this include:
 * 1) Operations (such as a query)
 * 2) Fragments
 *
 * "Operations" are a generic name for requests in the document.
 * Examples of this include:
 * 1) query,
 * 2) mutation
 *
 * "Selections" are the definitions that can appear legally and at
 * single level of the query. These include:
 * 1) field references e.g `a`
 * 2) fragment "spreads" e.g. `...c`
 * 3) inline fragment "spreads" e.g. `...on Type { a }`
 */

/**
 * Data that must be available at all points during query execution.
 *
 * Namely, schema of the type system that is currently executing,
 * and the fragments defined in the query document
 */

/**
 * Implements the "Executing requests" section of the GraphQL specification.
 *
 * Returns either a synchronous ExecutionResult (if all encountered resolvers
 * are synchronous), or a Promise of an ExecutionResult that will eventually be
 * resolved and never rejected.
 *
 * If the arguments to this function do not result in a legal execution context,
 * a GraphQLError will be thrown immediately explaining the invalid input.
 */
function execute(args) {
  // Temporary for v15 to v16 migration. Remove in v17
  arguments.length < 2 || (0, _devAssert.devAssert)(false, 'graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.');
  var schema = args.schema,
    document = args.document,
    variableValues = args.variableValues,
    rootValue = args.rootValue; // If arguments are missing or incorrect, throw an error.

  assertValidExecutionArguments(schema, document, variableValues); // If a valid execution context cannot be created due to incorrect arguments,
  // a "Response" with only errors is returned.

  var exeContext = buildExecutionContext(args); // Return early errors if execution context failed.

  if (!('schema' in exeContext)) {
    return {
      errors: exeContext
    };
  } // Return a Promise that will eventually resolve to the data described by
  // The "Response" section of the GraphQL specification.
  //
  // If errors are encountered while executing a GraphQL field, only that
  // field and its descendants will be omitted, and sibling fields will still
  // be executed. An execution which encounters errors will still result in a
  // resolved Promise.
  //
  // Errors from sub-fields of a NonNull type may propagate to the top level,
  // at which point we still log the error and null the parent field, which
  // in this case is the entire response.

  try {
    var operation = exeContext.operation;
    var result = executeOperation(exeContext, operation, rootValue);
    if ((0, _isPromise.isPromise)(result)) {
      return result.then(function (data) {
        return buildResponse(data, exeContext.errors);
      }, function (error) {
        exeContext.errors.push(error);
        return buildResponse(null, exeContext.errors);
      });
    }
    return buildResponse(result, exeContext.errors);
  } catch (error) {
    exeContext.errors.push(error);
    return buildResponse(null, exeContext.errors);
  }
}
/**
 * Also implements the "Executing requests" section of the GraphQL specification.
 * However, it guarantees to complete synchronously (or throw an error) assuming
 * that all field resolvers are also synchronous.
 */

function executeSync(args) {
  var result = execute(args); // Assert that the execution was synchronous.

  if ((0, _isPromise.isPromise)(result)) {
    throw new Error('GraphQL execution failed to complete synchronously.');
  }
  return result;
}
/**
 * Given a completed execution context and data, build the `{ errors, data }`
 * response defined by the "Response" section of the GraphQL specification.
 */

function buildResponse(data, errors) {
  return errors.length === 0 ? {
    data: data
  } : {
    errors: errors,
    data: data
  };
}
/**
 * Essential assertions before executing to provide developer feedback for
 * improper use of the GraphQL library.
 *
 * @internal
 */

function assertValidExecutionArguments(schema, document, rawVariableValues) {
  document || (0, _devAssert.devAssert)(false, 'Must provide document.'); // If the schema used for execution is invalid, throw an error.

  (0, _validate.assertValidSchema)(schema); // Variables, if provided, must be an object.

  rawVariableValues == null || (0, _isObjectLike.isObjectLike)(rawVariableValues) || (0, _devAssert.devAssert)(false, 'Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.');
}
/**
 * Constructs a ExecutionContext object from the arguments passed to
 * execute, which we will pass throughout the other execution methods.
 *
 * Throws a GraphQLError if a valid execution context cannot be created.
 *
 * @internal
 */

function buildExecutionContext(args) {
  var _definition$name, _operation$variableDe;
  var schema = args.schema,
    document = args.document,
    rootValue = args.rootValue,
    contextValue = args.contextValue,
    rawVariableValues = args.variableValues,
    operationName = args.operationName,
    fieldResolver = args.fieldResolver,
    typeResolver = args.typeResolver,
    subscribeFieldResolver = args.subscribeFieldResolver;
  var operation;
  var fragments = Object.create(null);
  var _iterator = _createForOfIteratorHelper(document.definitions),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var definition = _step.value;
      switch (definition.kind) {
        case _kinds.Kind.OPERATION_DEFINITION:
          if (operationName == null) {
            if (operation !== undefined) {
              return [new _GraphQLError.GraphQLError('Must provide operation name if query contains multiple operations.')];
            }
            operation = definition;
          } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
            operation = definition;
          }
          break;
        case _kinds.Kind.FRAGMENT_DEFINITION:
          fragments[definition.name.value] = definition;
          break;
        default: // ignore non-executable definitions
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (!operation) {
    if (operationName != null) {
      return [new _GraphQLError.GraphQLError("Unknown operation named \"".concat(operationName, "\"."))];
    }
    return [new _GraphQLError.GraphQLError('Must provide an operation.')];
  } // FIXME: https://github.com/graphql/graphql-js/issues/2203

  /* c8 ignore next */

  var variableDefinitions = (_operation$variableDe = operation.variableDefinitions) !== null && _operation$variableDe !== void 0 ? _operation$variableDe : [];
  var coercedVariableValues = (0, _values.getVariableValues)(schema, variableDefinitions, rawVariableValues !== null && rawVariableValues !== void 0 ? rawVariableValues : {}, {
    maxErrors: 50
  });
  if (coercedVariableValues.errors) {
    return coercedVariableValues.errors;
  }
  return {
    schema: schema,
    fragments: fragments,
    rootValue: rootValue,
    contextValue: contextValue,
    operation: operation,
    variableValues: coercedVariableValues.coerced,
    fieldResolver: fieldResolver !== null && fieldResolver !== void 0 ? fieldResolver : defaultFieldResolver,
    typeResolver: typeResolver !== null && typeResolver !== void 0 ? typeResolver : defaultTypeResolver,
    subscribeFieldResolver: subscribeFieldResolver !== null && subscribeFieldResolver !== void 0 ? subscribeFieldResolver : defaultFieldResolver,
    errors: []
  };
}
/**
 * Implements the "Executing operations" section of the spec.
 */

function executeOperation(exeContext, operation, rootValue) {
  var rootType = exeContext.schema.getRootType(operation.operation);
  if (rootType == null) {
    throw new _GraphQLError.GraphQLError("Schema is not configured to execute ".concat(operation.operation, " operation."), {
      nodes: operation
    });
  }
  var rootFields = (0, _collectFields.collectFields)(exeContext.schema, exeContext.fragments, exeContext.variableValues, rootType, operation.selectionSet);
  var path = undefined;
  switch (operation.operation) {
    case _ast.OperationTypeNode.QUERY:
      return executeFields(exeContext, rootType, rootValue, path, rootFields);
    case _ast.OperationTypeNode.MUTATION:
      return executeFieldsSerially(exeContext, rootType, rootValue, path, rootFields);
    case _ast.OperationTypeNode.SUBSCRIPTION:
      // TODO: deprecate `subscribe` and move all logic here
      // Temporary solution until we finish merging execute and subscribe together
      return executeFields(exeContext, rootType, rootValue, path, rootFields);
  }
}
/**
 * Implements the "Executing selection sets" section of the spec
 * for fields that must be executed serially.
 */

function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
  return (0, _promiseReduce.promiseReduce)(fields.entries(), function (results, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      responseName = _ref2[0],
      fieldNodes = _ref2[1];
    var fieldPath = (0, _Path.addPath)(path, responseName, parentType.name);
    var result = executeField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
    if (result === undefined) {
      return results;
    }
    if ((0, _isPromise.isPromise)(result)) {
      return result.then(function (resolvedResult) {
        results[responseName] = resolvedResult;
        return results;
      });
    }
    results[responseName] = result;
    return results;
  }, Object.create(null));
}
/**
 * Implements the "Executing selection sets" section of the spec
 * for fields that may be executed in parallel.
 */

function executeFields(exeContext, parentType, sourceValue, path, fields) {
  var results = Object.create(null);
  var containsPromise = false;
  try {
    var _iterator2 = _createForOfIteratorHelper(fields.entries()),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
          responseName = _step2$value[0],
          fieldNodes = _step2$value[1];
        var fieldPath = (0, _Path.addPath)(path, responseName, parentType.name);
        var result = executeField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
        if (result !== undefined) {
          results[responseName] = result;
          if ((0, _isPromise.isPromise)(result)) {
            containsPromise = true;
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  } catch (error) {
    if (containsPromise) {
      // Ensure that any promises returned by other fields are handled, as they may also reject.
      return (0, _promiseForObject.promiseForObject)(results).finally(function () {
        throw error;
      });
    }
    throw error;
  } // If there are no promises, we can just return the object

  if (!containsPromise) {
    return results;
  } // Otherwise, results is a map from field name to the result of resolving that
  // field, which is possibly a promise. Return a promise that will return this
  // same map, but with any promises replaced with the values they resolved to.

  return (0, _promiseForObject.promiseForObject)(results);
}
/**
 * Implements the "Executing fields" section of the spec
 * In particular, this function figures out the value that the field returns by
 * calling its resolve function, then calls completeValue to complete promises,
 * serialize scalars, or execute the sub-selection-set for objects.
 */

function executeField(exeContext, parentType, source, fieldNodes, path) {
  var _fieldDef$resolve;
  var fieldDef = getFieldDef(exeContext.schema, parentType, fieldNodes[0]);
  if (!fieldDef) {
    return;
  }
  var returnType = fieldDef.type;
  var resolveFn = (_fieldDef$resolve = fieldDef.resolve) !== null && _fieldDef$resolve !== void 0 ? _fieldDef$resolve : exeContext.fieldResolver;
  var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path); // Get the resolve function, regardless of if its result is normal or abrupt (error).

  try {
    // Build a JS object of arguments from the field.arguments AST, using the
    // variables scope to fulfill any variable references.
    // TODO: find a way to memoize, in case this field is within a List type.
    var args = (0, _values.getArgumentValues)(fieldDef, fieldNodes[0], exeContext.variableValues); // The resolve function's optional third argument is a context value that
    // is provided to every resolve function within an execution. It is commonly
    // used to represent an authenticated user, or request-specific caches.

    var contextValue = exeContext.contextValue;
    var result = resolveFn(source, args, contextValue, info);
    var completed;
    if ((0, _isPromise.isPromise)(result)) {
      completed = result.then(function (resolved) {
        return completeValue(exeContext, returnType, fieldNodes, info, path, resolved);
      });
    } else {
      completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
    }
    if ((0, _isPromise.isPromise)(completed)) {
      // Note: we don't rely on a `catch` method, but we do expect "thenable"
      // to take a second callback for the error case.
      return completed.then(undefined, function (rawError) {
        var error = (0, _locatedError.locatedError)(rawError, fieldNodes, (0, _Path.pathToArray)(path));
        return handleFieldError(error, returnType, exeContext);
      });
    }
    return completed;
  } catch (rawError) {
    var error = (0, _locatedError.locatedError)(rawError, fieldNodes, (0, _Path.pathToArray)(path));
    return handleFieldError(error, returnType, exeContext);
  }
}
/**
 * @internal
 */

function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
  // The resolve function's optional fourth argument is a collection of
  // information about the current execution state.
  return {
    fieldName: fieldDef.name,
    fieldNodes: fieldNodes,
    returnType: fieldDef.type,
    parentType: parentType,
    path: path,
    schema: exeContext.schema,
    fragments: exeContext.fragments,
    rootValue: exeContext.rootValue,
    operation: exeContext.operation,
    variableValues: exeContext.variableValues
  };
}
function handleFieldError(error, returnType, exeContext) {
  // If the field type is non-nullable, then it is resolved without any
  // protection from errors, however it still properly locates the error.
  if ((0, _definition.isNonNullType)(returnType)) {
    throw error;
  } // Otherwise, error protection is applied, logging the error and resolving
  // a null value for this field if one is encountered.

  exeContext.errors.push(error);
  return null;
}
/**
 * Implements the instructions for completeValue as defined in the
 * "Value Completion" section of the spec.
 *
 * If the field type is Non-Null, then this recursively completes the value
 * for the inner type. It throws a field error if that completion returns null,
 * as per the "Nullability" section of the spec.
 *
 * If the field type is a List, then this recursively completes the value
 * for the inner type on each item in the list.
 *
 * If the field type is a Scalar or Enum, ensures the completed value is a legal
 * value of the type by calling the `serialize` method of GraphQL type
 * definition.
 *
 * If the field is an abstract type, determine the runtime type of the value
 * and then complete based on that type
 *
 * Otherwise, the field type expects a sub-selection set, and will complete the
 * value by executing all sub-selections.
 */

function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If result is an Error, throw a located error.
  if (result instanceof Error) {
    throw result;
  } // If field type is NonNull, complete for inner type, and throw field error
  // if result is null.

  if ((0, _definition.isNonNullType)(returnType)) {
    var completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);
    if (completed === null) {
      throw new Error("Cannot return null for non-nullable field ".concat(info.parentType.name, ".").concat(info.fieldName, "."));
    }
    return completed;
  } // If result value is null or undefined then return null.

  if (result == null) {
    return null;
  } // If field type is List, complete each item in the list with the inner type

  if ((0, _definition.isListType)(returnType)) {
    return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
  } // If field type is a leaf type, Scalar or Enum, serialize to a valid value,
  // returning null if serialization is not possible.

  if ((0, _definition.isLeafType)(returnType)) {
    return completeLeafValue(returnType, result);
  } // If field type is an abstract type, Interface or Union, determine the
  // runtime Object type and complete for that type.

  if ((0, _definition.isAbstractType)(returnType)) {
    return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
  } // If field type is Object, execute and complete all sub-selections.

  if ((0, _definition.isObjectType)(returnType)) {
    return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
  }
  /* c8 ignore next 6 */
  // Not reachable, all possible output types have been considered.

  false || (0, _invariant.invariant)(false, 'Cannot complete value of unexpected output type: ' + (0, _inspect.inspect)(returnType));
}
/**
 * Complete a list value by completing each item in the list with the
 * inner type
 */

function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
  if (!(0, _isIterableObject.isIterableObject)(result)) {
    throw new _GraphQLError.GraphQLError("Expected Iterable, but did not find one for field \"".concat(info.parentType.name, ".").concat(info.fieldName, "\"."));
  } // This is specified as a simple map, however we're optimizing the path
  // where the list contains no Promises by avoiding creating another Promise.

  var itemType = returnType.ofType;
  var containsPromise = false;
  var completedResults = Array.from(result, function (item, index) {
    // No need to modify the info object containing the path,
    // since from here on it is not ever accessed by resolver functions.
    var itemPath = (0, _Path.addPath)(path, index, undefined);
    try {
      var completedItem;
      if ((0, _isPromise.isPromise)(item)) {
        completedItem = item.then(function (resolved) {
          return completeValue(exeContext, itemType, fieldNodes, info, itemPath, resolved);
        });
      } else {
        completedItem = completeValue(exeContext, itemType, fieldNodes, info, itemPath, item);
      }
      if ((0, _isPromise.isPromise)(completedItem)) {
        containsPromise = true; // Note: we don't rely on a `catch` method, but we do expect "thenable"
        // to take a second callback for the error case.

        return completedItem.then(undefined, function (rawError) {
          var error = (0, _locatedError.locatedError)(rawError, fieldNodes, (0, _Path.pathToArray)(itemPath));
          return handleFieldError(error, itemType, exeContext);
        });
      }
      return completedItem;
    } catch (rawError) {
      var error = (0, _locatedError.locatedError)(rawError, fieldNodes, (0, _Path.pathToArray)(itemPath));
      return handleFieldError(error, itemType, exeContext);
    }
  });
  return containsPromise ? Promise.all(completedResults) : completedResults;
}
/**
 * Complete a Scalar or Enum by serializing to a valid value, returning
 * null if serialization is not possible.
 */

function completeLeafValue(returnType, result) {
  var serializedResult = returnType.serialize(result);
  if (serializedResult == null) {
    throw new Error("Expected `".concat((0, _inspect.inspect)(returnType), ".serialize(").concat((0, _inspect.inspect)(result), ")` to ") + "return non-nullable value, returned: ".concat((0, _inspect.inspect)(serializedResult)));
  }
  return serializedResult;
}
/**
 * Complete a value of an abstract type by determining the runtime object type
 * of that value, then complete the value for that type.
 */

function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
  var _returnType$resolveTy;
  var resolveTypeFn = (_returnType$resolveTy = returnType.resolveType) !== null && _returnType$resolveTy !== void 0 ? _returnType$resolveTy : exeContext.typeResolver;
  var contextValue = exeContext.contextValue;
  var runtimeType = resolveTypeFn(result, contextValue, info, returnType);
  if ((0, _isPromise.isPromise)(runtimeType)) {
    return runtimeType.then(function (resolvedRuntimeType) {
      return completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
    });
  }
  return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
}
function ensureValidRuntimeType(runtimeTypeName, exeContext, returnType, fieldNodes, info, result) {
  if (runtimeTypeName == null) {
    throw new _GraphQLError.GraphQLError("Abstract type \"".concat(returnType.name, "\" must resolve to an Object type at runtime for field \"").concat(info.parentType.name, ".").concat(info.fieldName, "\". Either the \"").concat(returnType.name, "\" type should provide a \"resolveType\" function or each possible type should provide an \"isTypeOf\" function."), fieldNodes);
  } // releases before 16.0.0 supported returning `GraphQLObjectType` from `resolveType`
  // TODO: remove in 17.0.0 release

  if ((0, _definition.isObjectType)(runtimeTypeName)) {
    throw new _GraphQLError.GraphQLError('Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.');
  }
  if (typeof runtimeTypeName !== 'string') {
    throw new _GraphQLError.GraphQLError("Abstract type \"".concat(returnType.name, "\" must resolve to an Object type at runtime for field \"").concat(info.parentType.name, ".").concat(info.fieldName, "\" with ") + "value ".concat((0, _inspect.inspect)(result), ", received \"").concat((0, _inspect.inspect)(runtimeTypeName), "\"."));
  }
  var runtimeType = exeContext.schema.getType(runtimeTypeName);
  if (runtimeType == null) {
    throw new _GraphQLError.GraphQLError("Abstract type \"".concat(returnType.name, "\" was resolved to a type \"").concat(runtimeTypeName, "\" that does not exist inside the schema."), {
      nodes: fieldNodes
    });
  }
  if (!(0, _definition.isObjectType)(runtimeType)) {
    throw new _GraphQLError.GraphQLError("Abstract type \"".concat(returnType.name, "\" was resolved to a non-object type \"").concat(runtimeTypeName, "\"."), {
      nodes: fieldNodes
    });
  }
  if (!exeContext.schema.isSubType(returnType, runtimeType)) {
    throw new _GraphQLError.GraphQLError("Runtime Object type \"".concat(runtimeType.name, "\" is not a possible type for \"").concat(returnType.name, "\"."), {
      nodes: fieldNodes
    });
  }
  return runtimeType;
}
/**
 * Complete an Object value by executing all sub-selections.
 */

function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
  // Collect sub-fields to execute to complete this value.
  var subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes); // If there is an isTypeOf predicate function, call it with the
  // current result. If isTypeOf returns false, then raise an error rather
  // than continuing execution.

  if (returnType.isTypeOf) {
    var isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);
    if ((0, _isPromise.isPromise)(isTypeOf)) {
      return isTypeOf.then(function (resolvedIsTypeOf) {
        if (!resolvedIsTypeOf) {
          throw invalidReturnTypeError(returnType, result, fieldNodes);
        }
        return executeFields(exeContext, returnType, result, path, subFieldNodes);
      });
    }
    if (!isTypeOf) {
      throw invalidReturnTypeError(returnType, result, fieldNodes);
    }
  }
  return executeFields(exeContext, returnType, result, path, subFieldNodes);
}
function invalidReturnTypeError(returnType, result, fieldNodes) {
  return new _GraphQLError.GraphQLError("Expected value of type \"".concat(returnType.name, "\" but got: ").concat((0, _inspect.inspect)(result), "."), {
    nodes: fieldNodes
  });
}
/**
 * If a resolveType function is not given, then a default resolve behavior is
 * used which attempts two strategies:
 *
 * First, See if the provided value has a `__typename` field defined, if so, use
 * that value as name of the resolved type.
 *
 * Otherwise, test each possible type for the abstract type by calling
 * isTypeOf for the object being coerced, returning the first type that matches.
 */

var defaultTypeResolver = exports.defaultTypeResolver = function defaultTypeResolver(value, contextValue, info, abstractType) {
  // First, look for `__typename`.
  if ((0, _isObjectLike.isObjectLike)(value) && typeof value.__typename === 'string') {
    return value.__typename;
  } // Otherwise, test each possible type.

  var possibleTypes = info.schema.getPossibleTypes(abstractType);
  var promisedIsTypeOfResults = [];
  for (var i = 0; i < possibleTypes.length; i++) {
    var type = possibleTypes[i];
    if (type.isTypeOf) {
      var isTypeOfResult = type.isTypeOf(value, contextValue, info);
      if ((0, _isPromise.isPromise)(isTypeOfResult)) {
        promisedIsTypeOfResults[i] = isTypeOfResult;
      } else if (isTypeOfResult) {
        return type.name;
      }
    }
  }
  if (promisedIsTypeOfResults.length) {
    return Promise.all(promisedIsTypeOfResults).then(function (isTypeOfResults) {
      for (var _i = 0; _i < isTypeOfResults.length; _i++) {
        if (isTypeOfResults[_i]) {
          return possibleTypes[_i].name;
        }
      }
    });
  }
};
/**
 * If a resolve function is not given, then a default resolve behavior is used
 * which takes the property of the source object of the same name as the field
 * and returns it as the result, or if it's a function, returns the result
 * of calling that function while passing along args and context value.
 */

var defaultFieldResolver = exports.defaultFieldResolver = function defaultFieldResolver(source, args, contextValue, info) {
  // ensure source is a value for which property access is acceptable.
  if ((0, _isObjectLike.isObjectLike)(source) || typeof source === 'function') {
    var property = source[info.fieldName];
    if (typeof property === 'function') {
      return source[info.fieldName](args, contextValue, info);
    }
    return property;
  }
};
/**
 * This method looks up the field on the given type definition.
 * It has special casing for the three introspection fields,
 * __schema, __type and __typename. __typename is special because
 * it can always be queried as a field, even in situations where no
 * other fields are allowed, like on a Union. __schema and __type
 * could get automatically added to the query type, but that would
 * require mutating type definitions, which would cause issues.
 *
 * @internal
 */

function getFieldDef(schema, parentType, fieldNode) {
  var fieldName = fieldNode.name.value;
  if (fieldName === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _introspection.SchemaMetaFieldDef;
  } else if (fieldName === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _introspection.TypeMetaFieldDef;
  } else if (fieldName === _introspection.TypeNameMetaFieldDef.name) {
    return _introspection.TypeNameMetaFieldDef;
  }
  return parentType.getFields()[fieldName];
}
},{"../jsutils/devAssert.mjs":"../node_modules/graphql/jsutils/devAssert.mjs","../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/invariant.mjs":"../node_modules/graphql/jsutils/invariant.mjs","../jsutils/isIterableObject.mjs":"../node_modules/graphql/jsutils/isIterableObject.mjs","../jsutils/isObjectLike.mjs":"../node_modules/graphql/jsutils/isObjectLike.mjs","../jsutils/isPromise.mjs":"../node_modules/graphql/jsutils/isPromise.mjs","../jsutils/memoize3.mjs":"../node_modules/graphql/jsutils/memoize3.mjs","../jsutils/Path.mjs":"../node_modules/graphql/jsutils/Path.mjs","../jsutils/promiseForObject.mjs":"../node_modules/graphql/jsutils/promiseForObject.mjs","../jsutils/promiseReduce.mjs":"../node_modules/graphql/jsutils/promiseReduce.mjs","../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../error/locatedError.mjs":"../node_modules/graphql/error/locatedError.mjs","../language/ast.mjs":"../node_modules/graphql/language/ast.mjs","../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../type/introspection.mjs":"../node_modules/graphql/type/introspection.mjs","../type/validate.mjs":"../node_modules/graphql/type/validate.mjs","./collectFields.mjs":"../node_modules/graphql/execution/collectFields.mjs","./values.mjs":"../node_modules/graphql/execution/values.mjs"}],"../node_modules/graphql/graphql.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphql = graphql;
exports.graphqlSync = graphqlSync;
var _devAssert = require("./jsutils/devAssert.mjs");
var _isPromise = require("./jsutils/isPromise.mjs");
var _parser = require("./language/parser.mjs");
var _validate = require("./type/validate.mjs");
var _validate2 = require("./validation/validate.mjs");
var _execute = require("./execution/execute.mjs");
/**
 * This is the primary entry point function for fulfilling GraphQL operations
 * by parsing, validating, and executing a GraphQL document along side a
 * GraphQL schema.
 *
 * More sophisticated GraphQL servers, such as those which persist queries,
 * may wish to separate the validation and execution phases to a static time
 * tooling step, and a server runtime step.
 *
 * Accepts either an object with named arguments, or individual arguments:
 *
 * schema:
 *    The GraphQL type system to use when validating and executing a query.
 * source:
 *    A GraphQL language formatted string representing the requested operation.
 * rootValue:
 *    The value provided as the first argument to resolver functions on the top
 *    level type (e.g. the query object type).
 * contextValue:
 *    The context value is provided as an argument to resolver functions after
 *    field arguments. It is used to pass shared information useful at any point
 *    during executing this query, for example the currently logged in user and
 *    connections to databases or other services.
 * variableValues:
 *    A mapping of variable name to runtime value to use for all variables
 *    defined in the requestString.
 * operationName:
 *    The name of the operation to use if requestString contains multiple
 *    possible operations. Can be omitted if requestString contains only
 *    one operation.
 * fieldResolver:
 *    A resolver function to use when one is not provided by the schema.
 *    If not provided, the default field resolver is used (which looks for a
 *    value or method on the source value with the field's name).
 * typeResolver:
 *    A type resolver function to use when none is provided by the schema.
 *    If not provided, the default type resolver is used (which looks for a
 *    `__typename` field or alternatively calls the `isTypeOf` method).
 */

function graphql(args) {
  // Always return a Promise for a consistent API.
  return new Promise(function (resolve) {
    return resolve(graphqlImpl(args));
  });
}
/**
 * The graphqlSync function also fulfills GraphQL operations by parsing,
 * validating, and executing a GraphQL document along side a GraphQL schema.
 * However, it guarantees to complete synchronously (or throw an error) assuming
 * that all field resolvers are also synchronous.
 */

function graphqlSync(args) {
  var result = graphqlImpl(args); // Assert that the execution was synchronous.

  if ((0, _isPromise.isPromise)(result)) {
    throw new Error('GraphQL execution failed to complete synchronously.');
  }
  return result;
}
function graphqlImpl(args) {
  // Temporary for v15 to v16 migration. Remove in v17
  arguments.length < 2 || (0, _devAssert.devAssert)(false, 'graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.');
  var schema = args.schema,
    source = args.source,
    rootValue = args.rootValue,
    contextValue = args.contextValue,
    variableValues = args.variableValues,
    operationName = args.operationName,
    fieldResolver = args.fieldResolver,
    typeResolver = args.typeResolver; // Validate Schema

  var schemaValidationErrors = (0, _validate.validateSchema)(schema);
  if (schemaValidationErrors.length > 0) {
    return {
      errors: schemaValidationErrors
    };
  } // Parse

  var document;
  try {
    document = (0, _parser.parse)(source);
  } catch (syntaxError) {
    return {
      errors: [syntaxError]
    };
  } // Validate

  var validationErrors = (0, _validate2.validate)(schema, document);
  if (validationErrors.length > 0) {
    return {
      errors: validationErrors
    };
  } // Execute

  return (0, _execute.execute)({
    schema: schema,
    document: document,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    typeResolver: typeResolver
  });
}
},{"./jsutils/devAssert.mjs":"../node_modules/graphql/jsutils/devAssert.mjs","./jsutils/isPromise.mjs":"../node_modules/graphql/jsutils/isPromise.mjs","./language/parser.mjs":"../node_modules/graphql/language/parser.mjs","./type/validate.mjs":"../node_modules/graphql/type/validate.mjs","./validation/validate.mjs":"../node_modules/graphql/validation/validate.mjs","./execution/execute.mjs":"../node_modules/graphql/execution/execute.mjs"}],"../node_modules/graphql/type/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DEFAULT_DEPRECATION_REASON", {
  enumerable: true,
  get: function () {
    return _directives.DEFAULT_DEPRECATION_REASON;
  }
});
Object.defineProperty(exports, "GRAPHQL_MAX_INT", {
  enumerable: true,
  get: function () {
    return _scalars.GRAPHQL_MAX_INT;
  }
});
Object.defineProperty(exports, "GRAPHQL_MIN_INT", {
  enumerable: true,
  get: function () {
    return _scalars.GRAPHQL_MIN_INT;
  }
});
Object.defineProperty(exports, "GraphQLBoolean", {
  enumerable: true,
  get: function () {
    return _scalars.GraphQLBoolean;
  }
});
Object.defineProperty(exports, "GraphQLDeprecatedDirective", {
  enumerable: true,
  get: function () {
    return _directives.GraphQLDeprecatedDirective;
  }
});
Object.defineProperty(exports, "GraphQLDirective", {
  enumerable: true,
  get: function () {
    return _directives.GraphQLDirective;
  }
});
Object.defineProperty(exports, "GraphQLEnumType", {
  enumerable: true,
  get: function () {
    return _definition.GraphQLEnumType;
  }
});
Object.defineProperty(exports, "GraphQLFloat", {
  enumerable: true,
  get: function () {
    return _scalars.GraphQLFloat;
  }
});
Object.defineProperty(exports, "GraphQLID", {
  enumerable: true,
  get: function () {
    return _scalars.GraphQLID;
  }
});
Object.defineProperty(exports, "GraphQLIncludeDirective", {
  enumerable: true,
  get: function () {
    return _directives.GraphQLIncludeDirective;
  }
});
Object.defineProperty(exports, "GraphQLInputObjectType", {
  enumerable: true,
  get: function () {
    return _definition.GraphQLInputObjectType;
  }
});
Object.defineProperty(exports, "GraphQLInt", {
  enumerable: true,
  get: function () {
    return _scalars.GraphQLInt;
  }
});
Object.defineProperty(exports, "GraphQLInterfaceType", {
  enumerable: true,
  get: function () {
    return _definition.GraphQLInterfaceType;
  }
});
Object.defineProperty(exports, "GraphQLList", {
  enumerable: true,
  get: function () {
    return _definition.GraphQLList;
  }
});
Object.defineProperty(exports, "GraphQLNonNull", {
  enumerable: true,
  get: function () {
    return _definition.GraphQLNonNull;
  }
});
Object.defineProperty(exports, "GraphQLObjectType", {
  enumerable: true,
  get: function () {
    return _definition.GraphQLObjectType;
  }
});
Object.defineProperty(exports, "GraphQLScalarType", {
  enumerable: true,
  get: function () {
    return _definition.GraphQLScalarType;
  }
});
Object.defineProperty(exports, "GraphQLSchema", {
  enumerable: true,
  get: function () {
    return _schema.GraphQLSchema;
  }
});
Object.defineProperty(exports, "GraphQLSkipDirective", {
  enumerable: true,
  get: function () {
    return _directives.GraphQLSkipDirective;
  }
});
Object.defineProperty(exports, "GraphQLSpecifiedByDirective", {
  enumerable: true,
  get: function () {
    return _directives.GraphQLSpecifiedByDirective;
  }
});
Object.defineProperty(exports, "GraphQLString", {
  enumerable: true,
  get: function () {
    return _scalars.GraphQLString;
  }
});
Object.defineProperty(exports, "GraphQLUnionType", {
  enumerable: true,
  get: function () {
    return _definition.GraphQLUnionType;
  }
});
Object.defineProperty(exports, "SchemaMetaFieldDef", {
  enumerable: true,
  get: function () {
    return _introspection.SchemaMetaFieldDef;
  }
});
Object.defineProperty(exports, "TypeKind", {
  enumerable: true,
  get: function () {
    return _introspection.TypeKind;
  }
});
Object.defineProperty(exports, "TypeMetaFieldDef", {
  enumerable: true,
  get: function () {
    return _introspection.TypeMetaFieldDef;
  }
});
Object.defineProperty(exports, "TypeNameMetaFieldDef", {
  enumerable: true,
  get: function () {
    return _introspection.TypeNameMetaFieldDef;
  }
});
Object.defineProperty(exports, "__Directive", {
  enumerable: true,
  get: function () {
    return _introspection.__Directive;
  }
});
Object.defineProperty(exports, "__DirectiveLocation", {
  enumerable: true,
  get: function () {
    return _introspection.__DirectiveLocation;
  }
});
Object.defineProperty(exports, "__EnumValue", {
  enumerable: true,
  get: function () {
    return _introspection.__EnumValue;
  }
});
Object.defineProperty(exports, "__Field", {
  enumerable: true,
  get: function () {
    return _introspection.__Field;
  }
});
Object.defineProperty(exports, "__InputValue", {
  enumerable: true,
  get: function () {
    return _introspection.__InputValue;
  }
});
Object.defineProperty(exports, "__Schema", {
  enumerable: true,
  get: function () {
    return _introspection.__Schema;
  }
});
Object.defineProperty(exports, "__Type", {
  enumerable: true,
  get: function () {
    return _introspection.__Type;
  }
});
Object.defineProperty(exports, "__TypeKind", {
  enumerable: true,
  get: function () {
    return _introspection.__TypeKind;
  }
});
Object.defineProperty(exports, "assertAbstractType", {
  enumerable: true,
  get: function () {
    return _definition.assertAbstractType;
  }
});
Object.defineProperty(exports, "assertCompositeType", {
  enumerable: true,
  get: function () {
    return _definition.assertCompositeType;
  }
});
Object.defineProperty(exports, "assertDirective", {
  enumerable: true,
  get: function () {
    return _directives.assertDirective;
  }
});
Object.defineProperty(exports, "assertEnumType", {
  enumerable: true,
  get: function () {
    return _definition.assertEnumType;
  }
});
Object.defineProperty(exports, "assertEnumValueName", {
  enumerable: true,
  get: function () {
    return _assertName.assertEnumValueName;
  }
});
Object.defineProperty(exports, "assertInputObjectType", {
  enumerable: true,
  get: function () {
    return _definition.assertInputObjectType;
  }
});
Object.defineProperty(exports, "assertInputType", {
  enumerable: true,
  get: function () {
    return _definition.assertInputType;
  }
});
Object.defineProperty(exports, "assertInterfaceType", {
  enumerable: true,
  get: function () {
    return _definition.assertInterfaceType;
  }
});
Object.defineProperty(exports, "assertLeafType", {
  enumerable: true,
  get: function () {
    return _definition.assertLeafType;
  }
});
Object.defineProperty(exports, "assertListType", {
  enumerable: true,
  get: function () {
    return _definition.assertListType;
  }
});
Object.defineProperty(exports, "assertName", {
  enumerable: true,
  get: function () {
    return _assertName.assertName;
  }
});
Object.defineProperty(exports, "assertNamedType", {
  enumerable: true,
  get: function () {
    return _definition.assertNamedType;
  }
});
Object.defineProperty(exports, "assertNonNullType", {
  enumerable: true,
  get: function () {
    return _definition.assertNonNullType;
  }
});
Object.defineProperty(exports, "assertNullableType", {
  enumerable: true,
  get: function () {
    return _definition.assertNullableType;
  }
});
Object.defineProperty(exports, "assertObjectType", {
  enumerable: true,
  get: function () {
    return _definition.assertObjectType;
  }
});
Object.defineProperty(exports, "assertOutputType", {
  enumerable: true,
  get: function () {
    return _definition.assertOutputType;
  }
});
Object.defineProperty(exports, "assertScalarType", {
  enumerable: true,
  get: function () {
    return _definition.assertScalarType;
  }
});
Object.defineProperty(exports, "assertSchema", {
  enumerable: true,
  get: function () {
    return _schema.assertSchema;
  }
});
Object.defineProperty(exports, "assertType", {
  enumerable: true,
  get: function () {
    return _definition.assertType;
  }
});
Object.defineProperty(exports, "assertUnionType", {
  enumerable: true,
  get: function () {
    return _definition.assertUnionType;
  }
});
Object.defineProperty(exports, "assertValidSchema", {
  enumerable: true,
  get: function () {
    return _validate.assertValidSchema;
  }
});
Object.defineProperty(exports, "assertWrappingType", {
  enumerable: true,
  get: function () {
    return _definition.assertWrappingType;
  }
});
Object.defineProperty(exports, "getNamedType", {
  enumerable: true,
  get: function () {
    return _definition.getNamedType;
  }
});
Object.defineProperty(exports, "getNullableType", {
  enumerable: true,
  get: function () {
    return _definition.getNullableType;
  }
});
Object.defineProperty(exports, "introspectionTypes", {
  enumerable: true,
  get: function () {
    return _introspection.introspectionTypes;
  }
});
Object.defineProperty(exports, "isAbstractType", {
  enumerable: true,
  get: function () {
    return _definition.isAbstractType;
  }
});
Object.defineProperty(exports, "isCompositeType", {
  enumerable: true,
  get: function () {
    return _definition.isCompositeType;
  }
});
Object.defineProperty(exports, "isDirective", {
  enumerable: true,
  get: function () {
    return _directives.isDirective;
  }
});
Object.defineProperty(exports, "isEnumType", {
  enumerable: true,
  get: function () {
    return _definition.isEnumType;
  }
});
Object.defineProperty(exports, "isInputObjectType", {
  enumerable: true,
  get: function () {
    return _definition.isInputObjectType;
  }
});
Object.defineProperty(exports, "isInputType", {
  enumerable: true,
  get: function () {
    return _definition.isInputType;
  }
});
Object.defineProperty(exports, "isInterfaceType", {
  enumerable: true,
  get: function () {
    return _definition.isInterfaceType;
  }
});
Object.defineProperty(exports, "isIntrospectionType", {
  enumerable: true,
  get: function () {
    return _introspection.isIntrospectionType;
  }
});
Object.defineProperty(exports, "isLeafType", {
  enumerable: true,
  get: function () {
    return _definition.isLeafType;
  }
});
Object.defineProperty(exports, "isListType", {
  enumerable: true,
  get: function () {
    return _definition.isListType;
  }
});
Object.defineProperty(exports, "isNamedType", {
  enumerable: true,
  get: function () {
    return _definition.isNamedType;
  }
});
Object.defineProperty(exports, "isNonNullType", {
  enumerable: true,
  get: function () {
    return _definition.isNonNullType;
  }
});
Object.defineProperty(exports, "isNullableType", {
  enumerable: true,
  get: function () {
    return _definition.isNullableType;
  }
});
Object.defineProperty(exports, "isObjectType", {
  enumerable: true,
  get: function () {
    return _definition.isObjectType;
  }
});
Object.defineProperty(exports, "isOutputType", {
  enumerable: true,
  get: function () {
    return _definition.isOutputType;
  }
});
Object.defineProperty(exports, "isRequiredArgument", {
  enumerable: true,
  get: function () {
    return _definition.isRequiredArgument;
  }
});
Object.defineProperty(exports, "isRequiredInputField", {
  enumerable: true,
  get: function () {
    return _definition.isRequiredInputField;
  }
});
Object.defineProperty(exports, "isScalarType", {
  enumerable: true,
  get: function () {
    return _definition.isScalarType;
  }
});
Object.defineProperty(exports, "isSchema", {
  enumerable: true,
  get: function () {
    return _schema.isSchema;
  }
});
Object.defineProperty(exports, "isSpecifiedDirective", {
  enumerable: true,
  get: function () {
    return _directives.isSpecifiedDirective;
  }
});
Object.defineProperty(exports, "isSpecifiedScalarType", {
  enumerable: true,
  get: function () {
    return _scalars.isSpecifiedScalarType;
  }
});
Object.defineProperty(exports, "isType", {
  enumerable: true,
  get: function () {
    return _definition.isType;
  }
});
Object.defineProperty(exports, "isUnionType", {
  enumerable: true,
  get: function () {
    return _definition.isUnionType;
  }
});
Object.defineProperty(exports, "isWrappingType", {
  enumerable: true,
  get: function () {
    return _definition.isWrappingType;
  }
});
Object.defineProperty(exports, "resolveObjMapThunk", {
  enumerable: true,
  get: function () {
    return _definition.resolveObjMapThunk;
  }
});
Object.defineProperty(exports, "resolveReadonlyArrayThunk", {
  enumerable: true,
  get: function () {
    return _definition.resolveReadonlyArrayThunk;
  }
});
Object.defineProperty(exports, "specifiedDirectives", {
  enumerable: true,
  get: function () {
    return _directives.specifiedDirectives;
  }
});
Object.defineProperty(exports, "specifiedScalarTypes", {
  enumerable: true,
  get: function () {
    return _scalars.specifiedScalarTypes;
  }
});
Object.defineProperty(exports, "validateSchema", {
  enumerable: true,
  get: function () {
    return _validate.validateSchema;
  }
});
var _schema = require("./schema.mjs");
var _definition = require("./definition.mjs");
var _directives = require("./directives.mjs");
var _scalars = require("./scalars.mjs");
var _introspection = require("./introspection.mjs");
var _validate = require("./validate.mjs");
var _assertName = require("./assertName.mjs");
},{"./schema.mjs":"../node_modules/graphql/type/schema.mjs","./definition.mjs":"../node_modules/graphql/type/definition.mjs","./directives.mjs":"../node_modules/graphql/type/directives.mjs","./scalars.mjs":"../node_modules/graphql/type/scalars.mjs","./introspection.mjs":"../node_modules/graphql/type/introspection.mjs","./validate.mjs":"../node_modules/graphql/type/validate.mjs","./assertName.mjs":"../node_modules/graphql/type/assertName.mjs"}],"../node_modules/graphql/language/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BREAK", {
  enumerable: true,
  get: function () {
    return _visitor.BREAK;
  }
});
Object.defineProperty(exports, "DirectiveLocation", {
  enumerable: true,
  get: function () {
    return _directiveLocation.DirectiveLocation;
  }
});
Object.defineProperty(exports, "Kind", {
  enumerable: true,
  get: function () {
    return _kinds.Kind;
  }
});
Object.defineProperty(exports, "Lexer", {
  enumerable: true,
  get: function () {
    return _lexer.Lexer;
  }
});
Object.defineProperty(exports, "Location", {
  enumerable: true,
  get: function () {
    return _ast.Location;
  }
});
Object.defineProperty(exports, "OperationTypeNode", {
  enumerable: true,
  get: function () {
    return _ast.OperationTypeNode;
  }
});
Object.defineProperty(exports, "Source", {
  enumerable: true,
  get: function () {
    return _source.Source;
  }
});
Object.defineProperty(exports, "Token", {
  enumerable: true,
  get: function () {
    return _ast.Token;
  }
});
Object.defineProperty(exports, "TokenKind", {
  enumerable: true,
  get: function () {
    return _tokenKind.TokenKind;
  }
});
Object.defineProperty(exports, "getEnterLeaveForKind", {
  enumerable: true,
  get: function () {
    return _visitor.getEnterLeaveForKind;
  }
});
Object.defineProperty(exports, "getLocation", {
  enumerable: true,
  get: function () {
    return _location.getLocation;
  }
});
Object.defineProperty(exports, "getVisitFn", {
  enumerable: true,
  get: function () {
    return _visitor.getVisitFn;
  }
});
Object.defineProperty(exports, "isConstValueNode", {
  enumerable: true,
  get: function () {
    return _predicates.isConstValueNode;
  }
});
Object.defineProperty(exports, "isDefinitionNode", {
  enumerable: true,
  get: function () {
    return _predicates.isDefinitionNode;
  }
});
Object.defineProperty(exports, "isExecutableDefinitionNode", {
  enumerable: true,
  get: function () {
    return _predicates.isExecutableDefinitionNode;
  }
});
Object.defineProperty(exports, "isSelectionNode", {
  enumerable: true,
  get: function () {
    return _predicates.isSelectionNode;
  }
});
Object.defineProperty(exports, "isTypeDefinitionNode", {
  enumerable: true,
  get: function () {
    return _predicates.isTypeDefinitionNode;
  }
});
Object.defineProperty(exports, "isTypeExtensionNode", {
  enumerable: true,
  get: function () {
    return _predicates.isTypeExtensionNode;
  }
});
Object.defineProperty(exports, "isTypeNode", {
  enumerable: true,
  get: function () {
    return _predicates.isTypeNode;
  }
});
Object.defineProperty(exports, "isTypeSystemDefinitionNode", {
  enumerable: true,
  get: function () {
    return _predicates.isTypeSystemDefinitionNode;
  }
});
Object.defineProperty(exports, "isTypeSystemExtensionNode", {
  enumerable: true,
  get: function () {
    return _predicates.isTypeSystemExtensionNode;
  }
});
Object.defineProperty(exports, "isValueNode", {
  enumerable: true,
  get: function () {
    return _predicates.isValueNode;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function () {
    return _parser.parse;
  }
});
Object.defineProperty(exports, "parseConstValue", {
  enumerable: true,
  get: function () {
    return _parser.parseConstValue;
  }
});
Object.defineProperty(exports, "parseType", {
  enumerable: true,
  get: function () {
    return _parser.parseType;
  }
});
Object.defineProperty(exports, "parseValue", {
  enumerable: true,
  get: function () {
    return _parser.parseValue;
  }
});
Object.defineProperty(exports, "print", {
  enumerable: true,
  get: function () {
    return _printer.print;
  }
});
Object.defineProperty(exports, "printLocation", {
  enumerable: true,
  get: function () {
    return _printLocation.printLocation;
  }
});
Object.defineProperty(exports, "printSourceLocation", {
  enumerable: true,
  get: function () {
    return _printLocation.printSourceLocation;
  }
});
Object.defineProperty(exports, "visit", {
  enumerable: true,
  get: function () {
    return _visitor.visit;
  }
});
Object.defineProperty(exports, "visitInParallel", {
  enumerable: true,
  get: function () {
    return _visitor.visitInParallel;
  }
});
var _source = require("./source.mjs");
var _location = require("./location.mjs");
var _printLocation = require("./printLocation.mjs");
var _kinds = require("./kinds.mjs");
var _tokenKind = require("./tokenKind.mjs");
var _lexer = require("./lexer.mjs");
var _parser = require("./parser.mjs");
var _printer = require("./printer.mjs");
var _visitor = require("./visitor.mjs");
var _ast = require("./ast.mjs");
var _predicates = require("./predicates.mjs");
var _directiveLocation = require("./directiveLocation.mjs");
},{"./source.mjs":"../node_modules/graphql/language/source.mjs","./location.mjs":"../node_modules/graphql/language/location.mjs","./printLocation.mjs":"../node_modules/graphql/language/printLocation.mjs","./kinds.mjs":"../node_modules/graphql/language/kinds.mjs","./tokenKind.mjs":"../node_modules/graphql/language/tokenKind.mjs","./lexer.mjs":"../node_modules/graphql/language/lexer.mjs","./parser.mjs":"../node_modules/graphql/language/parser.mjs","./printer.mjs":"../node_modules/graphql/language/printer.mjs","./visitor.mjs":"../node_modules/graphql/language/visitor.mjs","./ast.mjs":"../node_modules/graphql/language/ast.mjs","./predicates.mjs":"../node_modules/graphql/language/predicates.mjs","./directiveLocation.mjs":"../node_modules/graphql/language/directiveLocation.mjs"}],"../node_modules/graphql/jsutils/isAsyncIterable.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAsyncIterable = isAsyncIterable;
/**
 * Returns true if the provided object implements the AsyncIterator protocol via
 * implementing a `Symbol.asyncIterator` method.
 */
function isAsyncIterable(maybeAsyncIterable) {
  return typeof (maybeAsyncIterable === null || maybeAsyncIterable === void 0 ? void 0 : maybeAsyncIterable[Symbol.asyncIterator]) === 'function';
}
},{}],"../node_modules/graphql/execution/mapAsyncIterator.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapAsyncIterator = mapAsyncIterator;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */
function mapAsyncIterator(iterable, callback) {
  var iterator = iterable[Symbol.asyncIterator]();
  function mapResult(_x) {
    return _mapResult.apply(this, arguments);
  }
  function _mapResult() {
    _mapResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(result) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!result.done) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return", result);
          case 2:
            _context4.prev = 2;
            _context4.next = 5;
            return callback(result.value);
          case 5:
            _context4.t0 = _context4.sent;
            return _context4.abrupt("return", {
              value: _context4.t0,
              done: false
            });
          case 9:
            _context4.prev = 9;
            _context4.t1 = _context4["catch"](2);
            if (!(typeof iterator.return === 'function')) {
              _context4.next = 19;
              break;
            }
            _context4.prev = 12;
            _context4.next = 15;
            return iterator.return();
          case 15:
            _context4.next = 19;
            break;
          case 17:
            _context4.prev = 17;
            _context4.t2 = _context4["catch"](12);
          case 19:
            throw _context4.t1;
          case 20:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[2, 9], [12, 17]]);
    }));
    return _mapResult.apply(this, arguments);
  }
  return _defineProperty({
    next: function next() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = mapResult;
              _context.next = 3;
              return iterator.next();
            case 3:
              _context.t1 = _context.sent;
              return _context.abrupt("return", (0, _context.t0)(_context.t1));
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    return: function _return() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(typeof iterator.return === 'function')) {
                _context2.next = 8;
                break;
              }
              _context2.t1 = mapResult;
              _context2.next = 4;
              return iterator.return();
            case 4:
              _context2.t2 = _context2.sent;
              _context2.t0 = (0, _context2.t1)(_context2.t2);
              _context2.next = 9;
              break;
            case 8:
              _context2.t0 = {
                value: undefined,
                done: true
              };
            case 9:
              return _context2.abrupt("return", _context2.t0);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    throw: function _throw(error) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(typeof iterator.throw === 'function')) {
                _context3.next = 6;
                break;
              }
              _context3.t0 = mapResult;
              _context3.next = 4;
              return iterator.throw(error);
            case 4:
              _context3.t1 = _context3.sent;
              return _context3.abrupt("return", (0, _context3.t0)(_context3.t1));
            case 6:
              throw error;
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    }
  }, Symbol.asyncIterator, function () {
    return this;
  });
}
},{}],"../node_modules/graphql/execution/subscribe.mjs":[function(require,module,exports) {
var define;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSourceEventStream = createSourceEventStream;
exports.subscribe = subscribe;
var _devAssert = require("../jsutils/devAssert.mjs");
var _inspect = require("../jsutils/inspect.mjs");
var _isAsyncIterable = require("../jsutils/isAsyncIterable.mjs");
var _Path = require("../jsutils/Path.mjs");
var _GraphQLError = require("../error/GraphQLError.mjs");
var _locatedError = require("../error/locatedError.mjs");
var _collectFields = require("./collectFields.mjs");
var _execute = require("./execute.mjs");
var _mapAsyncIterator = require("./mapAsyncIterator.mjs");
var _values = require("./values.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * Implements the "Subscribe" algorithm described in the GraphQL specification.
 *
 * Returns a Promise which resolves to either an AsyncIterator (if successful)
 * or an ExecutionResult (error). The promise will be rejected if the schema or
 * other arguments to this function are invalid, or if the resolved event stream
 * is not an async iterable.
 *
 * If the client-provided arguments to this function do not result in a
 * compliant subscription, a GraphQL Response (ExecutionResult) with
 * descriptive errors and no data will be returned.
 *
 * If the source stream could not be created due to faulty subscription
 * resolver logic or underlying systems, the promise will resolve to a single
 * ExecutionResult containing `errors` and no `data`.
 *
 * If the operation succeeded, the promise resolves to an AsyncIterator, which
 * yields a stream of ExecutionResults representing the response stream.
 *
 * Accepts either an object with named arguments, or individual arguments.
 */
function subscribe(_x) {
  return _subscribe.apply(this, arguments);
}
function _subscribe() {
  _subscribe = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
    var resultOrStream,
      mapSourceToResponse,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // Temporary for v15 to v16 migration. Remove in v17
          _args.length < 2 || (0, _devAssert.devAssert)(false, 'graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.');
          _context.next = 3;
          return createSourceEventStream(args);
        case 3:
          resultOrStream = _context.sent;
          if ((0, _isAsyncIterable.isAsyncIterable)(resultOrStream)) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", resultOrStream);
        case 6:
          // For each payload yielded from a subscription, map it over the normal
          // GraphQL `execute` function, with `payload` as the rootValue.
          // This implements the "MapSourceToResponseEvent" algorithm described in
          // the GraphQL specification. The `execute` function provides the
          // "ExecuteSubscriptionEvent" algorithm, as it is nearly identical to the
          // "ExecuteQuery" algorithm, for which `execute` is also used.
          mapSourceToResponse = function mapSourceToResponse(payload) {
            return (0, _execute.execute)(_objectSpread(_objectSpread({}, args), {}, {
              rootValue: payload
            }));
          }; // Map every source value to a ExecutionResult value as described above.
          return _context.abrupt("return", (0, _mapAsyncIterator.mapAsyncIterator)(resultOrStream, mapSourceToResponse));
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _subscribe.apply(this, arguments);
}
function toNormalizedArgs(args) {
  var firstArg = args[0];
  if (firstArg && 'document' in firstArg) {
    return firstArg;
  }
  return {
    schema: firstArg,
    // FIXME: when underlying TS bug fixed, see https://github.com/microsoft/TypeScript/issues/31613
    document: args[1],
    rootValue: args[2],
    contextValue: args[3],
    variableValues: args[4],
    operationName: args[5],
    subscribeFieldResolver: args[6]
  };
}
/**
 * Implements the "CreateSourceEventStream" algorithm described in the
 * GraphQL specification, resolving the subscription source event stream.
 *
 * Returns a Promise which resolves to either an AsyncIterable (if successful)
 * or an ExecutionResult (error). The promise will be rejected if the schema or
 * other arguments to this function are invalid, or if the resolved event stream
 * is not an async iterable.
 *
 * If the client-provided arguments to this function do not result in a
 * compliant subscription, a GraphQL Response (ExecutionResult) with
 * descriptive errors and no data will be returned.
 *
 * If the the source stream could not be created due to faulty subscription
 * resolver logic or underlying systems, the promise will resolve to a single
 * ExecutionResult containing `errors` and no `data`.
 *
 * If the operation succeeded, the promise resolves to the AsyncIterable for the
 * event stream returned by the resolver.
 *
 * A Source Event Stream represents a sequence of events, each of which triggers
 * a GraphQL execution for that event.
 *
 * This may be useful when hosting the stateful subscription service in a
 * different process or machine than the stateless GraphQL execution engine,
 * or otherwise separating these two steps. For more on this, see the
 * "Supporting Subscriptions at Scale" information in the GraphQL specification.
 */
function createSourceEventStream() {
  return _createSourceEventStream.apply(this, arguments);
}
function _createSourceEventStream() {
  _createSourceEventStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var _len,
      rawArgs,
      _key,
      args,
      schema,
      document,
      variableValues,
      exeContext,
      eventStream,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          for (_len = _args2.length, rawArgs = new Array(_len), _key = 0; _key < _len; _key++) {
            rawArgs[_key] = _args2[_key];
          }
          args = toNormalizedArgs(rawArgs);
          schema = args.schema, document = args.document, variableValues = args.variableValues; // If arguments are missing or incorrectly typed, this is an internal
          // developer mistake which should throw an early error.
          (0, _execute.assertValidExecutionArguments)(schema, document, variableValues); // If a valid execution context cannot be created due to incorrect arguments,
          // a "Response" with only errors is returned.
          exeContext = (0, _execute.buildExecutionContext)(args); // Return early errors if execution context failed.
          if ('schema' in exeContext) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", {
            errors: exeContext
          });
        case 7:
          _context2.prev = 7;
          _context2.next = 10;
          return executeSubscription(exeContext);
        case 10:
          eventStream = _context2.sent;
          if ((0, _isAsyncIterable.isAsyncIterable)(eventStream)) {
            _context2.next = 13;
            break;
          }
          throw new Error('Subscription field must return Async Iterable. ' + "Received: ".concat((0, _inspect.inspect)(eventStream), "."));
        case 13:
          return _context2.abrupt("return", eventStream);
        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](7);
          if (!(_context2.t0 instanceof _GraphQLError.GraphQLError)) {
            _context2.next = 20;
            break;
          }
          return _context2.abrupt("return", {
            errors: [_context2.t0]
          });
        case 20:
          throw _context2.t0;
        case 21:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[7, 16]]);
  }));
  return _createSourceEventStream.apply(this, arguments);
}
function executeSubscription(_x2) {
  return _executeSubscription.apply(this, arguments);
}
function _executeSubscription() {
  _executeSubscription = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(exeContext) {
    var schema, fragments, operation, variableValues, rootValue, rootType, rootFields, _, responseName, fieldNodes, fieldDef, fieldName, path, info, _fieldDef$subscribe, args, contextValue, resolveFn, eventStream;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          schema = exeContext.schema, fragments = exeContext.fragments, operation = exeContext.operation, variableValues = exeContext.variableValues, rootValue = exeContext.rootValue;
          rootType = schema.getSubscriptionType();
          if (!(rootType == null)) {
            _context3.next = 4;
            break;
          }
          throw new _GraphQLError.GraphQLError('Schema is not configured to execute subscription operation.', {
            nodes: operation
          });
        case 4:
          rootFields = (0, _collectFields.collectFields)(schema, fragments, variableValues, rootType, operation.selectionSet);
          _ = _slicedToArray(_toConsumableArray(rootFields.entries())[0], 2), responseName = _[0], fieldNodes = _[1];
          fieldDef = (0, _execute.getFieldDef)(schema, rootType, fieldNodes[0]);
          if (fieldDef) {
            _context3.next = 10;
            break;
          }
          fieldName = fieldNodes[0].name.value;
          throw new _GraphQLError.GraphQLError("The subscription field \"".concat(fieldName, "\" is not defined."), {
            nodes: fieldNodes
          });
        case 10:
          path = (0, _Path.addPath)(undefined, responseName, rootType.name);
          info = (0, _execute.buildResolveInfo)(exeContext, fieldDef, fieldNodes, rootType, path);
          _context3.prev = 12;
          // Implements the "ResolveFieldEventStream" algorithm from GraphQL specification.
          // It differs from "ResolveFieldValue" due to providing a different `resolveFn`.
          // Build a JS object of arguments from the field.arguments AST, using the
          // variables scope to fulfill any variable references.
          args = (0, _values.getArgumentValues)(fieldDef, fieldNodes[0], variableValues); // The resolve function's optional third argument is a context value that
          // is provided to every resolve function within an execution. It is commonly
          // used to represent an authenticated user, or request-specific caches.
          contextValue = exeContext.contextValue; // Call the `subscribe()` resolver or the default resolver to produce an
          // AsyncIterable yielding raw payloads.
          resolveFn = (_fieldDef$subscribe = fieldDef.subscribe) !== null && _fieldDef$subscribe !== void 0 ? _fieldDef$subscribe : exeContext.subscribeFieldResolver;
          _context3.next = 18;
          return resolveFn(rootValue, args, contextValue, info);
        case 18:
          eventStream = _context3.sent;
          if (!(eventStream instanceof Error)) {
            _context3.next = 21;
            break;
          }
          throw eventStream;
        case 21:
          return _context3.abrupt("return", eventStream);
        case 24:
          _context3.prev = 24;
          _context3.t0 = _context3["catch"](12);
          throw (0, _locatedError.locatedError)(_context3.t0, fieldNodes, (0, _Path.pathToArray)(path));
        case 27:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[12, 24]]);
  }));
  return _executeSubscription.apply(this, arguments);
}
},{"../jsutils/devAssert.mjs":"../node_modules/graphql/jsutils/devAssert.mjs","../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/isAsyncIterable.mjs":"../node_modules/graphql/jsutils/isAsyncIterable.mjs","../jsutils/Path.mjs":"../node_modules/graphql/jsutils/Path.mjs","../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../error/locatedError.mjs":"../node_modules/graphql/error/locatedError.mjs","./collectFields.mjs":"../node_modules/graphql/execution/collectFields.mjs","./execute.mjs":"../node_modules/graphql/execution/execute.mjs","./mapAsyncIterator.mjs":"../node_modules/graphql/execution/mapAsyncIterator.mjs","./values.mjs":"../node_modules/graphql/execution/values.mjs"}],"../node_modules/graphql/execution/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createSourceEventStream", {
  enumerable: true,
  get: function () {
    return _subscribe.createSourceEventStream;
  }
});
Object.defineProperty(exports, "defaultFieldResolver", {
  enumerable: true,
  get: function () {
    return _execute.defaultFieldResolver;
  }
});
Object.defineProperty(exports, "defaultTypeResolver", {
  enumerable: true,
  get: function () {
    return _execute.defaultTypeResolver;
  }
});
Object.defineProperty(exports, "execute", {
  enumerable: true,
  get: function () {
    return _execute.execute;
  }
});
Object.defineProperty(exports, "executeSync", {
  enumerable: true,
  get: function () {
    return _execute.executeSync;
  }
});
Object.defineProperty(exports, "getArgumentValues", {
  enumerable: true,
  get: function () {
    return _values.getArgumentValues;
  }
});
Object.defineProperty(exports, "getDirectiveValues", {
  enumerable: true,
  get: function () {
    return _values.getDirectiveValues;
  }
});
Object.defineProperty(exports, "getVariableValues", {
  enumerable: true,
  get: function () {
    return _values.getVariableValues;
  }
});
Object.defineProperty(exports, "responsePathAsArray", {
  enumerable: true,
  get: function () {
    return _Path.pathToArray;
  }
});
Object.defineProperty(exports, "subscribe", {
  enumerable: true,
  get: function () {
    return _subscribe.subscribe;
  }
});
var _Path = require("../jsutils/Path.mjs");
var _execute = require("./execute.mjs");
var _subscribe = require("./subscribe.mjs");
var _values = require("./values.mjs");
},{"../jsutils/Path.mjs":"../node_modules/graphql/jsutils/Path.mjs","./execute.mjs":"../node_modules/graphql/execution/execute.mjs","./subscribe.mjs":"../node_modules/graphql/execution/subscribe.mjs","./values.mjs":"../node_modules/graphql/execution/values.mjs"}],"../node_modules/graphql/validation/rules/custom/NoDeprecatedCustomRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoDeprecatedCustomRule = NoDeprecatedCustomRule;
var _invariant = require("../../../jsutils/invariant.mjs");
var _GraphQLError = require("../../../error/GraphQLError.mjs");
var _definition = require("../../../type/definition.mjs");
/**
 * No deprecated
 *
 * A GraphQL document is only valid if all selected fields and all used enum values have not been
 * deprecated.
 *
 * Note: This rule is optional and is not part of the Validation section of the GraphQL
 * Specification. The main purpose of this rule is detection of deprecated usages and not
 * necessarily to forbid their use when querying a service.
 */
function NoDeprecatedCustomRule(context) {
  return {
    Field: function Field(node) {
      var fieldDef = context.getFieldDef();
      var deprecationReason = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.deprecationReason;
      if (fieldDef && deprecationReason != null) {
        var parentType = context.getParentType();
        parentType != null || (0, _invariant.invariant)(false);
        context.reportError(new _GraphQLError.GraphQLError("The field ".concat(parentType.name, ".").concat(fieldDef.name, " is deprecated. ").concat(deprecationReason), {
          nodes: node
        }));
      }
    },
    Argument: function Argument(node) {
      var argDef = context.getArgument();
      var deprecationReason = argDef === null || argDef === void 0 ? void 0 : argDef.deprecationReason;
      if (argDef && deprecationReason != null) {
        var directiveDef = context.getDirective();
        if (directiveDef != null) {
          context.reportError(new _GraphQLError.GraphQLError("Directive \"@".concat(directiveDef.name, "\" argument \"").concat(argDef.name, "\" is deprecated. ").concat(deprecationReason), {
            nodes: node
          }));
        } else {
          var parentType = context.getParentType();
          var fieldDef = context.getFieldDef();
          parentType != null && fieldDef != null || (0, _invariant.invariant)(false);
          context.reportError(new _GraphQLError.GraphQLError("Field \"".concat(parentType.name, ".").concat(fieldDef.name, "\" argument \"").concat(argDef.name, "\" is deprecated. ").concat(deprecationReason), {
            nodes: node
          }));
        }
      }
    },
    ObjectField: function ObjectField(node) {
      var inputObjectDef = (0, _definition.getNamedType)(context.getParentInputType());
      if ((0, _definition.isInputObjectType)(inputObjectDef)) {
        var inputFieldDef = inputObjectDef.getFields()[node.name.value];
        var deprecationReason = inputFieldDef === null || inputFieldDef === void 0 ? void 0 : inputFieldDef.deprecationReason;
        if (deprecationReason != null) {
          context.reportError(new _GraphQLError.GraphQLError("The input field ".concat(inputObjectDef.name, ".").concat(inputFieldDef.name, " is deprecated. ").concat(deprecationReason), {
            nodes: node
          }));
        }
      }
    },
    EnumValue: function EnumValue(node) {
      var enumValueDef = context.getEnumValue();
      var deprecationReason = enumValueDef === null || enumValueDef === void 0 ? void 0 : enumValueDef.deprecationReason;
      if (enumValueDef && deprecationReason != null) {
        var enumTypeDef = (0, _definition.getNamedType)(context.getInputType());
        enumTypeDef != null || (0, _invariant.invariant)(false);
        context.reportError(new _GraphQLError.GraphQLError("The enum value \"".concat(enumTypeDef.name, ".").concat(enumValueDef.name, "\" is deprecated. ").concat(deprecationReason), {
          nodes: node
        }));
      }
    }
  };
}
},{"../../../jsutils/invariant.mjs":"../node_modules/graphql/jsutils/invariant.mjs","../../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../../type/definition.mjs":"../node_modules/graphql/type/definition.mjs"}],"../node_modules/graphql/validation/rules/custom/NoSchemaIntrospectionCustomRule.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoSchemaIntrospectionCustomRule = NoSchemaIntrospectionCustomRule;
var _GraphQLError = require("../../../error/GraphQLError.mjs");
var _definition = require("../../../type/definition.mjs");
var _introspection = require("../../../type/introspection.mjs");
/**
 * Prohibit introspection queries
 *
 * A GraphQL document is only valid if all fields selected are not fields that
 * return an introspection type.
 *
 * Note: This rule is optional and is not part of the Validation section of the
 * GraphQL Specification. This rule effectively disables introspection, which
 * does not reflect best practices and should only be done if absolutely necessary.
 */
function NoSchemaIntrospectionCustomRule(context) {
  return {
    Field: function Field(node) {
      var type = (0, _definition.getNamedType)(context.getType());
      if (type && (0, _introspection.isIntrospectionType)(type)) {
        context.reportError(new _GraphQLError.GraphQLError("GraphQL introspection has been disabled, but the requested query contained the field \"".concat(node.name.value, "\"."), {
          nodes: node
        }));
      }
    }
  };
}
},{"../../../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../../../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../../../type/introspection.mjs":"../node_modules/graphql/type/introspection.mjs"}],"../node_modules/graphql/validation/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ExecutableDefinitionsRule", {
  enumerable: true,
  get: function () {
    return _ExecutableDefinitionsRule.ExecutableDefinitionsRule;
  }
});
Object.defineProperty(exports, "FieldsOnCorrectTypeRule", {
  enumerable: true,
  get: function () {
    return _FieldsOnCorrectTypeRule.FieldsOnCorrectTypeRule;
  }
});
Object.defineProperty(exports, "FragmentsOnCompositeTypesRule", {
  enumerable: true,
  get: function () {
    return _FragmentsOnCompositeTypesRule.FragmentsOnCompositeTypesRule;
  }
});
Object.defineProperty(exports, "KnownArgumentNamesRule", {
  enumerable: true,
  get: function () {
    return _KnownArgumentNamesRule.KnownArgumentNamesRule;
  }
});
Object.defineProperty(exports, "KnownDirectivesRule", {
  enumerable: true,
  get: function () {
    return _KnownDirectivesRule.KnownDirectivesRule;
  }
});
Object.defineProperty(exports, "KnownFragmentNamesRule", {
  enumerable: true,
  get: function () {
    return _KnownFragmentNamesRule.KnownFragmentNamesRule;
  }
});
Object.defineProperty(exports, "KnownTypeNamesRule", {
  enumerable: true,
  get: function () {
    return _KnownTypeNamesRule.KnownTypeNamesRule;
  }
});
Object.defineProperty(exports, "LoneAnonymousOperationRule", {
  enumerable: true,
  get: function () {
    return _LoneAnonymousOperationRule.LoneAnonymousOperationRule;
  }
});
Object.defineProperty(exports, "LoneSchemaDefinitionRule", {
  enumerable: true,
  get: function () {
    return _LoneSchemaDefinitionRule.LoneSchemaDefinitionRule;
  }
});
Object.defineProperty(exports, "NoDeprecatedCustomRule", {
  enumerable: true,
  get: function () {
    return _NoDeprecatedCustomRule.NoDeprecatedCustomRule;
  }
});
Object.defineProperty(exports, "NoFragmentCyclesRule", {
  enumerable: true,
  get: function () {
    return _NoFragmentCyclesRule.NoFragmentCyclesRule;
  }
});
Object.defineProperty(exports, "NoSchemaIntrospectionCustomRule", {
  enumerable: true,
  get: function () {
    return _NoSchemaIntrospectionCustomRule.NoSchemaIntrospectionCustomRule;
  }
});
Object.defineProperty(exports, "NoUndefinedVariablesRule", {
  enumerable: true,
  get: function () {
    return _NoUndefinedVariablesRule.NoUndefinedVariablesRule;
  }
});
Object.defineProperty(exports, "NoUnusedFragmentsRule", {
  enumerable: true,
  get: function () {
    return _NoUnusedFragmentsRule.NoUnusedFragmentsRule;
  }
});
Object.defineProperty(exports, "NoUnusedVariablesRule", {
  enumerable: true,
  get: function () {
    return _NoUnusedVariablesRule.NoUnusedVariablesRule;
  }
});
Object.defineProperty(exports, "OverlappingFieldsCanBeMergedRule", {
  enumerable: true,
  get: function () {
    return _OverlappingFieldsCanBeMergedRule.OverlappingFieldsCanBeMergedRule;
  }
});
Object.defineProperty(exports, "PossibleFragmentSpreadsRule", {
  enumerable: true,
  get: function () {
    return _PossibleFragmentSpreadsRule.PossibleFragmentSpreadsRule;
  }
});
Object.defineProperty(exports, "PossibleTypeExtensionsRule", {
  enumerable: true,
  get: function () {
    return _PossibleTypeExtensionsRule.PossibleTypeExtensionsRule;
  }
});
Object.defineProperty(exports, "ProvidedRequiredArgumentsRule", {
  enumerable: true,
  get: function () {
    return _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsRule;
  }
});
Object.defineProperty(exports, "ScalarLeafsRule", {
  enumerable: true,
  get: function () {
    return _ScalarLeafsRule.ScalarLeafsRule;
  }
});
Object.defineProperty(exports, "SingleFieldSubscriptionsRule", {
  enumerable: true,
  get: function () {
    return _SingleFieldSubscriptionsRule.SingleFieldSubscriptionsRule;
  }
});
Object.defineProperty(exports, "UniqueArgumentDefinitionNamesRule", {
  enumerable: true,
  get: function () {
    return _UniqueArgumentDefinitionNamesRule.UniqueArgumentDefinitionNamesRule;
  }
});
Object.defineProperty(exports, "UniqueArgumentNamesRule", {
  enumerable: true,
  get: function () {
    return _UniqueArgumentNamesRule.UniqueArgumentNamesRule;
  }
});
Object.defineProperty(exports, "UniqueDirectiveNamesRule", {
  enumerable: true,
  get: function () {
    return _UniqueDirectiveNamesRule.UniqueDirectiveNamesRule;
  }
});
Object.defineProperty(exports, "UniqueDirectivesPerLocationRule", {
  enumerable: true,
  get: function () {
    return _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule;
  }
});
Object.defineProperty(exports, "UniqueEnumValueNamesRule", {
  enumerable: true,
  get: function () {
    return _UniqueEnumValueNamesRule.UniqueEnumValueNamesRule;
  }
});
Object.defineProperty(exports, "UniqueFieldDefinitionNamesRule", {
  enumerable: true,
  get: function () {
    return _UniqueFieldDefinitionNamesRule.UniqueFieldDefinitionNamesRule;
  }
});
Object.defineProperty(exports, "UniqueFragmentNamesRule", {
  enumerable: true,
  get: function () {
    return _UniqueFragmentNamesRule.UniqueFragmentNamesRule;
  }
});
Object.defineProperty(exports, "UniqueInputFieldNamesRule", {
  enumerable: true,
  get: function () {
    return _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule;
  }
});
Object.defineProperty(exports, "UniqueOperationNamesRule", {
  enumerable: true,
  get: function () {
    return _UniqueOperationNamesRule.UniqueOperationNamesRule;
  }
});
Object.defineProperty(exports, "UniqueOperationTypesRule", {
  enumerable: true,
  get: function () {
    return _UniqueOperationTypesRule.UniqueOperationTypesRule;
  }
});
Object.defineProperty(exports, "UniqueTypeNamesRule", {
  enumerable: true,
  get: function () {
    return _UniqueTypeNamesRule.UniqueTypeNamesRule;
  }
});
Object.defineProperty(exports, "UniqueVariableNamesRule", {
  enumerable: true,
  get: function () {
    return _UniqueVariableNamesRule.UniqueVariableNamesRule;
  }
});
Object.defineProperty(exports, "ValidationContext", {
  enumerable: true,
  get: function () {
    return _ValidationContext.ValidationContext;
  }
});
Object.defineProperty(exports, "ValuesOfCorrectTypeRule", {
  enumerable: true,
  get: function () {
    return _ValuesOfCorrectTypeRule.ValuesOfCorrectTypeRule;
  }
});
Object.defineProperty(exports, "VariablesAreInputTypesRule", {
  enumerable: true,
  get: function () {
    return _VariablesAreInputTypesRule.VariablesAreInputTypesRule;
  }
});
Object.defineProperty(exports, "VariablesInAllowedPositionRule", {
  enumerable: true,
  get: function () {
    return _VariablesInAllowedPositionRule.VariablesInAllowedPositionRule;
  }
});
Object.defineProperty(exports, "specifiedRules", {
  enumerable: true,
  get: function () {
    return _specifiedRules.specifiedRules;
  }
});
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function () {
    return _validate.validate;
  }
});
var _validate = require("./validate.mjs");
var _ValidationContext = require("./ValidationContext.mjs");
var _specifiedRules = require("./specifiedRules.mjs");
var _ExecutableDefinitionsRule = require("./rules/ExecutableDefinitionsRule.mjs");
var _FieldsOnCorrectTypeRule = require("./rules/FieldsOnCorrectTypeRule.mjs");
var _FragmentsOnCompositeTypesRule = require("./rules/FragmentsOnCompositeTypesRule.mjs");
var _KnownArgumentNamesRule = require("./rules/KnownArgumentNamesRule.mjs");
var _KnownDirectivesRule = require("./rules/KnownDirectivesRule.mjs");
var _KnownFragmentNamesRule = require("./rules/KnownFragmentNamesRule.mjs");
var _KnownTypeNamesRule = require("./rules/KnownTypeNamesRule.mjs");
var _LoneAnonymousOperationRule = require("./rules/LoneAnonymousOperationRule.mjs");
var _NoFragmentCyclesRule = require("./rules/NoFragmentCyclesRule.mjs");
var _NoUndefinedVariablesRule = require("./rules/NoUndefinedVariablesRule.mjs");
var _NoUnusedFragmentsRule = require("./rules/NoUnusedFragmentsRule.mjs");
var _NoUnusedVariablesRule = require("./rules/NoUnusedVariablesRule.mjs");
var _OverlappingFieldsCanBeMergedRule = require("./rules/OverlappingFieldsCanBeMergedRule.mjs");
var _PossibleFragmentSpreadsRule = require("./rules/PossibleFragmentSpreadsRule.mjs");
var _ProvidedRequiredArgumentsRule = require("./rules/ProvidedRequiredArgumentsRule.mjs");
var _ScalarLeafsRule = require("./rules/ScalarLeafsRule.mjs");
var _SingleFieldSubscriptionsRule = require("./rules/SingleFieldSubscriptionsRule.mjs");
var _UniqueArgumentNamesRule = require("./rules/UniqueArgumentNamesRule.mjs");
var _UniqueDirectivesPerLocationRule = require("./rules/UniqueDirectivesPerLocationRule.mjs");
var _UniqueFragmentNamesRule = require("./rules/UniqueFragmentNamesRule.mjs");
var _UniqueInputFieldNamesRule = require("./rules/UniqueInputFieldNamesRule.mjs");
var _UniqueOperationNamesRule = require("./rules/UniqueOperationNamesRule.mjs");
var _UniqueVariableNamesRule = require("./rules/UniqueVariableNamesRule.mjs");
var _ValuesOfCorrectTypeRule = require("./rules/ValuesOfCorrectTypeRule.mjs");
var _VariablesAreInputTypesRule = require("./rules/VariablesAreInputTypesRule.mjs");
var _VariablesInAllowedPositionRule = require("./rules/VariablesInAllowedPositionRule.mjs");
var _LoneSchemaDefinitionRule = require("./rules/LoneSchemaDefinitionRule.mjs");
var _UniqueOperationTypesRule = require("./rules/UniqueOperationTypesRule.mjs");
var _UniqueTypeNamesRule = require("./rules/UniqueTypeNamesRule.mjs");
var _UniqueEnumValueNamesRule = require("./rules/UniqueEnumValueNamesRule.mjs");
var _UniqueFieldDefinitionNamesRule = require("./rules/UniqueFieldDefinitionNamesRule.mjs");
var _UniqueArgumentDefinitionNamesRule = require("./rules/UniqueArgumentDefinitionNamesRule.mjs");
var _UniqueDirectiveNamesRule = require("./rules/UniqueDirectiveNamesRule.mjs");
var _PossibleTypeExtensionsRule = require("./rules/PossibleTypeExtensionsRule.mjs");
var _NoDeprecatedCustomRule = require("./rules/custom/NoDeprecatedCustomRule.mjs");
var _NoSchemaIntrospectionCustomRule = require("./rules/custom/NoSchemaIntrospectionCustomRule.mjs");
},{"./validate.mjs":"../node_modules/graphql/validation/validate.mjs","./ValidationContext.mjs":"../node_modules/graphql/validation/ValidationContext.mjs","./specifiedRules.mjs":"../node_modules/graphql/validation/specifiedRules.mjs","./rules/ExecutableDefinitionsRule.mjs":"../node_modules/graphql/validation/rules/ExecutableDefinitionsRule.mjs","./rules/FieldsOnCorrectTypeRule.mjs":"../node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.mjs","./rules/FragmentsOnCompositeTypesRule.mjs":"../node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.mjs","./rules/KnownArgumentNamesRule.mjs":"../node_modules/graphql/validation/rules/KnownArgumentNamesRule.mjs","./rules/KnownDirectivesRule.mjs":"../node_modules/graphql/validation/rules/KnownDirectivesRule.mjs","./rules/KnownFragmentNamesRule.mjs":"../node_modules/graphql/validation/rules/KnownFragmentNamesRule.mjs","./rules/KnownTypeNamesRule.mjs":"../node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs","./rules/LoneAnonymousOperationRule.mjs":"../node_modules/graphql/validation/rules/LoneAnonymousOperationRule.mjs","./rules/NoFragmentCyclesRule.mjs":"../node_modules/graphql/validation/rules/NoFragmentCyclesRule.mjs","./rules/NoUndefinedVariablesRule.mjs":"../node_modules/graphql/validation/rules/NoUndefinedVariablesRule.mjs","./rules/NoUnusedFragmentsRule.mjs":"../node_modules/graphql/validation/rules/NoUnusedFragmentsRule.mjs","./rules/NoUnusedVariablesRule.mjs":"../node_modules/graphql/validation/rules/NoUnusedVariablesRule.mjs","./rules/OverlappingFieldsCanBeMergedRule.mjs":"../node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.mjs","./rules/PossibleFragmentSpreadsRule.mjs":"../node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.mjs","./rules/ProvidedRequiredArgumentsRule.mjs":"../node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.mjs","./rules/ScalarLeafsRule.mjs":"../node_modules/graphql/validation/rules/ScalarLeafsRule.mjs","./rules/SingleFieldSubscriptionsRule.mjs":"../node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.mjs","./rules/UniqueArgumentNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueArgumentNamesRule.mjs","./rules/UniqueDirectivesPerLocationRule.mjs":"../node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.mjs","./rules/UniqueFragmentNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueFragmentNamesRule.mjs","./rules/UniqueInputFieldNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.mjs","./rules/UniqueOperationNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueOperationNamesRule.mjs","./rules/UniqueVariableNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueVariableNamesRule.mjs","./rules/ValuesOfCorrectTypeRule.mjs":"../node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.mjs","./rules/VariablesAreInputTypesRule.mjs":"../node_modules/graphql/validation/rules/VariablesAreInputTypesRule.mjs","./rules/VariablesInAllowedPositionRule.mjs":"../node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.mjs","./rules/LoneSchemaDefinitionRule.mjs":"../node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.mjs","./rules/UniqueOperationTypesRule.mjs":"../node_modules/graphql/validation/rules/UniqueOperationTypesRule.mjs","./rules/UniqueTypeNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueTypeNamesRule.mjs","./rules/UniqueEnumValueNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.mjs","./rules/UniqueFieldDefinitionNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.mjs","./rules/UniqueArgumentDefinitionNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueArgumentDefinitionNamesRule.mjs","./rules/UniqueDirectiveNamesRule.mjs":"../node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.mjs","./rules/PossibleTypeExtensionsRule.mjs":"../node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs","./rules/custom/NoDeprecatedCustomRule.mjs":"../node_modules/graphql/validation/rules/custom/NoDeprecatedCustomRule.mjs","./rules/custom/NoSchemaIntrospectionCustomRule.mjs":"../node_modules/graphql/validation/rules/custom/NoSchemaIntrospectionCustomRule.mjs"}],"../node_modules/graphql/error/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "GraphQLError", {
  enumerable: true,
  get: function () {
    return _GraphQLError.GraphQLError;
  }
});
Object.defineProperty(exports, "formatError", {
  enumerable: true,
  get: function () {
    return _GraphQLError.formatError;
  }
});
Object.defineProperty(exports, "locatedError", {
  enumerable: true,
  get: function () {
    return _locatedError.locatedError;
  }
});
Object.defineProperty(exports, "printError", {
  enumerable: true,
  get: function () {
    return _GraphQLError.printError;
  }
});
Object.defineProperty(exports, "syntaxError", {
  enumerable: true,
  get: function () {
    return _syntaxError.syntaxError;
  }
});
var _GraphQLError = require("./GraphQLError.mjs");
var _syntaxError = require("./syntaxError.mjs");
var _locatedError = require("./locatedError.mjs");
},{"./GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","./syntaxError.mjs":"../node_modules/graphql/error/syntaxError.mjs","./locatedError.mjs":"../node_modules/graphql/error/locatedError.mjs"}],"../node_modules/graphql/utilities/getIntrospectionQuery.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntrospectionQuery = getIntrospectionQuery;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Produce the GraphQL query recommended for a full schema introspection.
 * Accepts optional IntrospectionOptions.
 */
function getIntrospectionQuery(options) {
  var optionsWithDefault = _objectSpread({
    descriptions: true,
    specifiedByUrl: false,
    directiveIsRepeatable: false,
    schemaDescription: false,
    inputValueDeprecation: false
  }, options);
  var descriptions = optionsWithDefault.descriptions ? 'description' : '';
  var specifiedByUrl = optionsWithDefault.specifiedByUrl ? 'specifiedByURL' : '';
  var directiveIsRepeatable = optionsWithDefault.directiveIsRepeatable ? 'isRepeatable' : '';
  var schemaDescription = optionsWithDefault.schemaDescription ? descriptions : '';
  function inputDeprecation(str) {
    return optionsWithDefault.inputValueDeprecation ? str : '';
  }
  return "\n    query IntrospectionQuery {\n      __schema {\n        ".concat(schemaDescription, "\n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ").concat(descriptions, "\n          ").concat(directiveIsRepeatable, "\n          locations\n          args").concat(inputDeprecation('(includeDeprecated: true)'), " {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ").concat(descriptions, "\n      ").concat(specifiedByUrl, "\n      fields(includeDeprecated: true) {\n        name\n        ").concat(descriptions, "\n        args").concat(inputDeprecation('(includeDeprecated: true)'), " {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields").concat(inputDeprecation('(includeDeprecated: true)'), " {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ").concat(descriptions, "\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ").concat(descriptions, "\n      type { ...TypeRef }\n      defaultValue\n      ").concat(inputDeprecation('isDeprecated'), "\n      ").concat(inputDeprecation('deprecationReason'), "\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                    ofType {\n                      kind\n                      name\n                      ofType {\n                        kind\n                        name\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ");
}
},{}],"../node_modules/graphql/utilities/getOperationAST.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOperationAST = getOperationAST;
var _kinds = require("../language/kinds.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Returns an operation AST given a document AST and optionally an operation
 * name. If a name is not provided, an operation is only returned if only one is
 * provided in the document.
 */

function getOperationAST(documentAST, operationName) {
  var operation = null;
  var _iterator = _createForOfIteratorHelper(documentAST.definitions),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var definition = _step.value;
      if (definition.kind === _kinds.Kind.OPERATION_DEFINITION) {
        var _definition$name;
        if (operationName == null) {
          // If no operation name was provided, only return an Operation if there
          // is one defined in the document. Upon encountering the second, return
          // null.
          if (operation) {
            return null;
          }
          operation = definition;
        } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
          return definition;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return operation;
}
},{"../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs"}],"../node_modules/graphql/utilities/getOperationRootType.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOperationRootType = getOperationRootType;
var _GraphQLError = require("../error/GraphQLError.mjs");
/**
 * Extracts the root type of the operation from the schema.
 *
 * @deprecated Please use `GraphQLSchema.getRootType` instead. Will be removed in v17
 */
function getOperationRootType(schema, operation) {
  if (operation.operation === 'query') {
    var queryType = schema.getQueryType();
    if (!queryType) {
      throw new _GraphQLError.GraphQLError('Schema does not define the required query root type.', {
        nodes: operation
      });
    }
    return queryType;
  }
  if (operation.operation === 'mutation') {
    var mutationType = schema.getMutationType();
    if (!mutationType) {
      throw new _GraphQLError.GraphQLError('Schema is not configured for mutations.', {
        nodes: operation
      });
    }
    return mutationType;
  }
  if (operation.operation === 'subscription') {
    var subscriptionType = schema.getSubscriptionType();
    if (!subscriptionType) {
      throw new _GraphQLError.GraphQLError('Schema is not configured for subscriptions.', {
        nodes: operation
      });
    }
    return subscriptionType;
  }
  throw new _GraphQLError.GraphQLError('Can only have query, mutation and subscription operations.', {
    nodes: operation
  });
}
},{"../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs"}],"../node_modules/graphql/utilities/introspectionFromSchema.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.introspectionFromSchema = introspectionFromSchema;
var _invariant = require("../jsutils/invariant.mjs");
var _parser = require("../language/parser.mjs");
var _execute = require("../execution/execute.mjs");
var _getIntrospectionQuery = require("./getIntrospectionQuery.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Build an IntrospectionQuery from a GraphQLSchema
 *
 * IntrospectionQuery is useful for utilities that care about type and field
 * relationships, but do not need to traverse through those relationships.
 *
 * This is the inverse of buildClientSchema. The primary use case is outside
 * of the server context, for instance when doing schema comparisons.
 */

function introspectionFromSchema(schema, options) {
  var optionsWithDefaults = _objectSpread({
    specifiedByUrl: true,
    directiveIsRepeatable: true,
    schemaDescription: true,
    inputValueDeprecation: true
  }, options);
  var document = (0, _parser.parse)((0, _getIntrospectionQuery.getIntrospectionQuery)(optionsWithDefaults));
  var result = (0, _execute.executeSync)({
    schema: schema,
    document: document
  });
  !result.errors && result.data || (0, _invariant.invariant)(false);
  return result.data;
}
},{"../jsutils/invariant.mjs":"../node_modules/graphql/jsutils/invariant.mjs","../language/parser.mjs":"../node_modules/graphql/language/parser.mjs","../execution/execute.mjs":"../node_modules/graphql/execution/execute.mjs","./getIntrospectionQuery.mjs":"../node_modules/graphql/utilities/getIntrospectionQuery.mjs"}],"../node_modules/graphql/utilities/buildClientSchema.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildClientSchema = buildClientSchema;
var _devAssert = require("../jsutils/devAssert.mjs");
var _inspect = require("../jsutils/inspect.mjs");
var _isObjectLike = require("../jsutils/isObjectLike.mjs");
var _keyValMap = require("../jsutils/keyValMap.mjs");
var _parser = require("../language/parser.mjs");
var _definition = require("../type/definition.mjs");
var _directives = require("../type/directives.mjs");
var _introspection = require("../type/introspection.mjs");
var _scalars = require("../type/scalars.mjs");
var _schema = require("../type/schema.mjs");
var _valueFromAST = require("./valueFromAST.mjs");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 *
 * This function expects a complete introspection result. Don't forget to check
 * the "errors" field of a server response before calling this function.
 */

function buildClientSchema(introspection, options) {
  (0, _isObjectLike.isObjectLike)(introspection) && (0, _isObjectLike.isObjectLike)(introspection.__schema) || (0, _devAssert.devAssert)(false, "Invalid or incomplete introspection result. Ensure that you are passing \"data\" property of introspection response and no \"errors\" was returned alongside: ".concat((0, _inspect.inspect)(introspection), ".")); // Get the schema from the introspection result.

  var schemaIntrospection = introspection.__schema; // Iterate through all types, getting the type definition for each.

  var typeMap = (0, _keyValMap.keyValMap)(schemaIntrospection.types, function (typeIntrospection) {
    return typeIntrospection.name;
  }, function (typeIntrospection) {
    return buildType(typeIntrospection);
  }); // Include standard types only if they are used.

  for (var _i = 0, _arr = [].concat(_toConsumableArray(_scalars.specifiedScalarTypes), _toConsumableArray(_introspection.introspectionTypes)); _i < _arr.length; _i++) {
    var stdType = _arr[_i];
    if (typeMap[stdType.name]) {
      typeMap[stdType.name] = stdType;
    }
  } // Get the root Query, Mutation, and Subscription types.

  var queryType = schemaIntrospection.queryType ? getObjectType(schemaIntrospection.queryType) : null;
  var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;
  var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null; // Get the directives supported by Introspection, assuming empty-set if
  // directives were not queried for.

  var directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : []; // Then produce and return a Schema with these types.

  return new _schema.GraphQLSchema({
    description: schemaIntrospection.description,
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: Object.values(typeMap),
    directives: directives,
    assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
  }); // Given a type reference in introspection, return the GraphQLType instance.
  // preferring cached instances before building new instances.

  function getType(typeRef) {
    if (typeRef.kind === _introspection.TypeKind.LIST) {
      var itemRef = typeRef.ofType;
      if (!itemRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }
      return new _definition.GraphQLList(getType(itemRef));
    }
    if (typeRef.kind === _introspection.TypeKind.NON_NULL) {
      var nullableRef = typeRef.ofType;
      if (!nullableRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }
      var nullableType = getType(nullableRef);
      return new _definition.GraphQLNonNull((0, _definition.assertNullableType)(nullableType));
    }
    return getNamedType(typeRef);
  }
  function getNamedType(typeRef) {
    var typeName = typeRef.name;
    if (!typeName) {
      throw new Error("Unknown type reference: ".concat((0, _inspect.inspect)(typeRef), "."));
    }
    var type = typeMap[typeName];
    if (!type) {
      throw new Error("Invalid or incomplete schema, unknown type: ".concat(typeName, ". Ensure that a full introspection query is used in order to build a client schema."));
    }
    return type;
  }
  function getObjectType(typeRef) {
    return (0, _definition.assertObjectType)(getNamedType(typeRef));
  }
  function getInterfaceType(typeRef) {
    return (0, _definition.assertInterfaceType)(getNamedType(typeRef));
  } // Given a type's introspection result, construct the correct
  // GraphQLType instance.

  function buildType(type) {
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (type != null && type.name != null && type.kind != null) {
      // FIXME: Properly type IntrospectionType, it's a breaking change so fix in v17
      // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
      switch (type.kind) {
        case _introspection.TypeKind.SCALAR:
          return buildScalarDef(type);
        case _introspection.TypeKind.OBJECT:
          return buildObjectDef(type);
        case _introspection.TypeKind.INTERFACE:
          return buildInterfaceDef(type);
        case _introspection.TypeKind.UNION:
          return buildUnionDef(type);
        case _introspection.TypeKind.ENUM:
          return buildEnumDef(type);
        case _introspection.TypeKind.INPUT_OBJECT:
          return buildInputObjectDef(type);
      }
    }
    var typeStr = (0, _inspect.inspect)(type);
    throw new Error("Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ".concat(typeStr, "."));
  }
  function buildScalarDef(scalarIntrospection) {
    return new _definition.GraphQLScalarType({
      name: scalarIntrospection.name,
      description: scalarIntrospection.description,
      specifiedByURL: scalarIntrospection.specifiedByURL
    });
  }
  function buildImplementationsList(implementingIntrospection) {
    // TODO: Temporary workaround until GraphQL ecosystem will fully support
    // 'interfaces' on interface types.
    if (implementingIntrospection.interfaces === null && implementingIntrospection.kind === _introspection.TypeKind.INTERFACE) {
      return [];
    }
    if (!implementingIntrospection.interfaces) {
      var implementingIntrospectionStr = (0, _inspect.inspect)(implementingIntrospection);
      throw new Error("Introspection result missing interfaces: ".concat(implementingIntrospectionStr, "."));
    }
    return implementingIntrospection.interfaces.map(getInterfaceType);
  }
  function buildObjectDef(objectIntrospection) {
    return new _definition.GraphQLObjectType({
      name: objectIntrospection.name,
      description: objectIntrospection.description,
      interfaces: function interfaces() {
        return buildImplementationsList(objectIntrospection);
      },
      fields: function fields() {
        return buildFieldDefMap(objectIntrospection);
      }
    });
  }
  function buildInterfaceDef(interfaceIntrospection) {
    return new _definition.GraphQLInterfaceType({
      name: interfaceIntrospection.name,
      description: interfaceIntrospection.description,
      interfaces: function interfaces() {
        return buildImplementationsList(interfaceIntrospection);
      },
      fields: function fields() {
        return buildFieldDefMap(interfaceIntrospection);
      }
    });
  }
  function buildUnionDef(unionIntrospection) {
    if (!unionIntrospection.possibleTypes) {
      var unionIntrospectionStr = (0, _inspect.inspect)(unionIntrospection);
      throw new Error("Introspection result missing possibleTypes: ".concat(unionIntrospectionStr, "."));
    }
    return new _definition.GraphQLUnionType({
      name: unionIntrospection.name,
      description: unionIntrospection.description,
      types: function types() {
        return unionIntrospection.possibleTypes.map(getObjectType);
      }
    });
  }
  function buildEnumDef(enumIntrospection) {
    if (!enumIntrospection.enumValues) {
      var enumIntrospectionStr = (0, _inspect.inspect)(enumIntrospection);
      throw new Error("Introspection result missing enumValues: ".concat(enumIntrospectionStr, "."));
    }
    return new _definition.GraphQLEnumType({
      name: enumIntrospection.name,
      description: enumIntrospection.description,
      values: (0, _keyValMap.keyValMap)(enumIntrospection.enumValues, function (valueIntrospection) {
        return valueIntrospection.name;
      }, function (valueIntrospection) {
        return {
          description: valueIntrospection.description,
          deprecationReason: valueIntrospection.deprecationReason
        };
      })
    });
  }
  function buildInputObjectDef(inputObjectIntrospection) {
    if (!inputObjectIntrospection.inputFields) {
      var inputObjectIntrospectionStr = (0, _inspect.inspect)(inputObjectIntrospection);
      throw new Error("Introspection result missing inputFields: ".concat(inputObjectIntrospectionStr, "."));
    }
    return new _definition.GraphQLInputObjectType({
      name: inputObjectIntrospection.name,
      description: inputObjectIntrospection.description,
      fields: function fields() {
        return buildInputValueDefMap(inputObjectIntrospection.inputFields);
      }
    });
  }
  function buildFieldDefMap(typeIntrospection) {
    if (!typeIntrospection.fields) {
      throw new Error("Introspection result missing fields: ".concat((0, _inspect.inspect)(typeIntrospection), "."));
    }
    return (0, _keyValMap.keyValMap)(typeIntrospection.fields, function (fieldIntrospection) {
      return fieldIntrospection.name;
    }, buildField);
  }
  function buildField(fieldIntrospection) {
    var type = getType(fieldIntrospection.type);
    if (!(0, _definition.isOutputType)(type)) {
      var typeStr = (0, _inspect.inspect)(type);
      throw new Error("Introspection must provide output type for fields, but received: ".concat(typeStr, "."));
    }
    if (!fieldIntrospection.args) {
      var fieldIntrospectionStr = (0, _inspect.inspect)(fieldIntrospection);
      throw new Error("Introspection result missing field args: ".concat(fieldIntrospectionStr, "."));
    }
    return {
      description: fieldIntrospection.description,
      deprecationReason: fieldIntrospection.deprecationReason,
      type: type,
      args: buildInputValueDefMap(fieldIntrospection.args)
    };
  }
  function buildInputValueDefMap(inputValueIntrospections) {
    return (0, _keyValMap.keyValMap)(inputValueIntrospections, function (inputValue) {
      return inputValue.name;
    }, buildInputValue);
  }
  function buildInputValue(inputValueIntrospection) {
    var type = getType(inputValueIntrospection.type);
    if (!(0, _definition.isInputType)(type)) {
      var typeStr = (0, _inspect.inspect)(type);
      throw new Error("Introspection must provide input type for arguments, but received: ".concat(typeStr, "."));
    }
    var defaultValue = inputValueIntrospection.defaultValue != null ? (0, _valueFromAST.valueFromAST)((0, _parser.parseValue)(inputValueIntrospection.defaultValue), type) : undefined;
    return {
      description: inputValueIntrospection.description,
      type: type,
      defaultValue: defaultValue,
      deprecationReason: inputValueIntrospection.deprecationReason
    };
  }
  function buildDirective(directiveIntrospection) {
    if (!directiveIntrospection.args) {
      var directiveIntrospectionStr = (0, _inspect.inspect)(directiveIntrospection);
      throw new Error("Introspection result missing directive args: ".concat(directiveIntrospectionStr, "."));
    }
    if (!directiveIntrospection.locations) {
      var _directiveIntrospectionStr = (0, _inspect.inspect)(directiveIntrospection);
      throw new Error("Introspection result missing directive locations: ".concat(_directiveIntrospectionStr, "."));
    }
    return new _directives.GraphQLDirective({
      name: directiveIntrospection.name,
      description: directiveIntrospection.description,
      isRepeatable: directiveIntrospection.isRepeatable,
      locations: directiveIntrospection.locations.slice(),
      args: buildInputValueDefMap(directiveIntrospection.args)
    });
  }
}
},{"../jsutils/devAssert.mjs":"../node_modules/graphql/jsutils/devAssert.mjs","../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/isObjectLike.mjs":"../node_modules/graphql/jsutils/isObjectLike.mjs","../jsutils/keyValMap.mjs":"../node_modules/graphql/jsutils/keyValMap.mjs","../language/parser.mjs":"../node_modules/graphql/language/parser.mjs","../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../type/directives.mjs":"../node_modules/graphql/type/directives.mjs","../type/introspection.mjs":"../node_modules/graphql/type/introspection.mjs","../type/scalars.mjs":"../node_modules/graphql/type/scalars.mjs","../type/schema.mjs":"../node_modules/graphql/type/schema.mjs","./valueFromAST.mjs":"../node_modules/graphql/utilities/valueFromAST.mjs"}],"../node_modules/graphql/utilities/extendSchema.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendSchema = extendSchema;
exports.extendSchemaImpl = extendSchemaImpl;
var _devAssert = require("../jsutils/devAssert.mjs");
var _inspect = require("../jsutils/inspect.mjs");
var _invariant = require("../jsutils/invariant.mjs");
var _keyMap = require("../jsutils/keyMap.mjs");
var _mapValue = require("../jsutils/mapValue.mjs");
var _kinds = require("../language/kinds.mjs");
var _predicates = require("../language/predicates.mjs");
var _definition = require("../type/definition.mjs");
var _directives = require("../type/directives.mjs");
var _introspection = require("../type/introspection.mjs");
var _scalars = require("../type/scalars.mjs");
var _schema = require("../type/schema.mjs");
var _validate = require("../validation/validate.mjs");
var _values = require("../execution/values.mjs");
var _valueFromAST = require("./valueFromAST.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Produces a new schema given an existing schema and a document which may
 * contain GraphQL type extensions and definitions. The original schema will
 * remain unaltered.
 *
 * Because a schema represents a graph of references, a schema cannot be
 * extended without effectively making an entire copy. We do not know until it's
 * too late if subgraphs remain unchanged.
 *
 * This algorithm copies the provided schema, applying extensions while
 * producing the copy. The original schema remains unaltered.
 */
function extendSchema(schema, documentAST, options) {
  (0, _schema.assertSchema)(schema);
  documentAST != null && documentAST.kind === _kinds.Kind.DOCUMENT || (0, _devAssert.devAssert)(false, 'Must provide valid Document AST.');
  if ((options === null || options === void 0 ? void 0 : options.assumeValid) !== true && (options === null || options === void 0 ? void 0 : options.assumeValidSDL) !== true) {
    (0, _validate.assertValidSDLExtension)(documentAST, schema);
  }
  var schemaConfig = schema.toConfig();
  var extendedConfig = extendSchemaImpl(schemaConfig, documentAST, options);
  return schemaConfig === extendedConfig ? schema : new _schema.GraphQLSchema(extendedConfig);
}
/**
 * @internal
 */

function extendSchemaImpl(schemaConfig, documentAST, options) {
  var _schemaDef, _schemaDef$descriptio, _schemaDef2, _options$assumeValid;

  // Collect the type definitions and extensions found in the document.
  var typeDefs = [];
  var typeExtensionsMap = Object.create(null); // New directives and types are separate because a directives and types can
  // have the same name. For example, a type named "skip".

  var directiveDefs = [];
  var schemaDef; // Schema extensions are collected which may add additional operation types.

  var schemaExtensions = [];
  var _iterator = _createForOfIteratorHelper(documentAST.definitions),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var def = _step.value;
      if (def.kind === _kinds.Kind.SCHEMA_DEFINITION) {
        schemaDef = def;
      } else if (def.kind === _kinds.Kind.SCHEMA_EXTENSION) {
        schemaExtensions.push(def);
      } else if ((0, _predicates.isTypeDefinitionNode)(def)) {
        typeDefs.push(def);
      } else if ((0, _predicates.isTypeExtensionNode)(def)) {
        var extendedTypeName = def.name.value;
        var existingTypeExtensions = typeExtensionsMap[extendedTypeName];
        typeExtensionsMap[extendedTypeName] = existingTypeExtensions ? existingTypeExtensions.concat([def]) : [def];
      } else if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
        directiveDefs.push(def);
      }
    } // If this document contains no new types, extensions, or directives then
    // return the same unmodified GraphQLSchema instance.
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (Object.keys(typeExtensionsMap).length === 0 && typeDefs.length === 0 && directiveDefs.length === 0 && schemaExtensions.length === 0 && schemaDef == null) {
    return schemaConfig;
  }
  var typeMap = Object.create(null);
  var _iterator2 = _createForOfIteratorHelper(schemaConfig.types),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var existingType = _step2.value;
      typeMap[existingType.name] = extendNamedType(existingType);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  for (var _i = 0, _typeDefs = typeDefs; _i < _typeDefs.length; _i++) {
    var typeNode = _typeDefs[_i];
    var _stdTypeMap$name;
    var name = typeNode.name.value;
    typeMap[name] = (_stdTypeMap$name = stdTypeMap[name]) !== null && _stdTypeMap$name !== void 0 ? _stdTypeMap$name : buildType(typeNode);
  }
  var operationTypes = _objectSpread(_objectSpread({
    // Get the extended root operation types.
    query: schemaConfig.query && replaceNamedType(schemaConfig.query),
    mutation: schemaConfig.mutation && replaceNamedType(schemaConfig.mutation),
    subscription: schemaConfig.subscription && replaceNamedType(schemaConfig.subscription)
  }, schemaDef && getOperationTypes([schemaDef])), getOperationTypes(schemaExtensions)); // Then produce and return a Schema config with these types.

  return _objectSpread(_objectSpread({
    description: (_schemaDef = schemaDef) === null || _schemaDef === void 0 ? void 0 : (_schemaDef$descriptio = _schemaDef.description) === null || _schemaDef$descriptio === void 0 ? void 0 : _schemaDef$descriptio.value
  }, operationTypes), {}, {
    types: Object.values(typeMap),
    directives: [].concat(_toConsumableArray(schemaConfig.directives.map(replaceDirective)), _toConsumableArray(directiveDefs.map(buildDirective))),
    extensions: Object.create(null),
    astNode: (_schemaDef2 = schemaDef) !== null && _schemaDef2 !== void 0 ? _schemaDef2 : schemaConfig.astNode,
    extensionASTNodes: schemaConfig.extensionASTNodes.concat(schemaExtensions),
    assumeValid: (_options$assumeValid = options === null || options === void 0 ? void 0 : options.assumeValid) !== null && _options$assumeValid !== void 0 ? _options$assumeValid : false
  }); // Below are functions used for producing this schema that have closed over
  // this scope and have access to the schema, cache, and newly defined types.

  function replaceType(type) {
    if ((0, _definition.isListType)(type)) {
      // @ts-expect-error
      return new _definition.GraphQLList(replaceType(type.ofType));
    }
    if ((0, _definition.isNonNullType)(type)) {
      // @ts-expect-error
      return new _definition.GraphQLNonNull(replaceType(type.ofType));
    } // @ts-expect-error FIXME

    return replaceNamedType(type);
  }
  function replaceNamedType(type) {
    // Note: While this could make early assertions to get the correctly
    // typed values, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.
    return typeMap[type.name];
  }
  function replaceDirective(directive) {
    var config = directive.toConfig();
    return new _directives.GraphQLDirective(_objectSpread(_objectSpread({}, config), {}, {
      args: (0, _mapValue.mapValue)(config.args, extendArg)
    }));
  }
  function extendNamedType(type) {
    if ((0, _introspection.isIntrospectionType)(type) || (0, _scalars.isSpecifiedScalarType)(type)) {
      // Builtin types are not extended.
      return type;
    }
    if ((0, _definition.isScalarType)(type)) {
      return extendScalarType(type);
    }
    if ((0, _definition.isObjectType)(type)) {
      return extendObjectType(type);
    }
    if ((0, _definition.isInterfaceType)(type)) {
      return extendInterfaceType(type);
    }
    if ((0, _definition.isUnionType)(type)) {
      return extendUnionType(type);
    }
    if ((0, _definition.isEnumType)(type)) {
      return extendEnumType(type);
    }
    if ((0, _definition.isInputObjectType)(type)) {
      return extendInputObjectType(type);
    }
    /* c8 ignore next 3 */
    // Not reachable, all possible type definition nodes have been considered.

    false || (0, _invariant.invariant)(false, 'Unexpected type: ' + (0, _inspect.inspect)(type));
  }
  function extendInputObjectType(type) {
    var _typeExtensionsMap$co;
    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$co = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co !== void 0 ? _typeExtensionsMap$co : [];
    return new _definition.GraphQLInputObjectType(_objectSpread(_objectSpread({}, config), {}, {
      fields: function fields() {
        return _objectSpread(_objectSpread({}, (0, _mapValue.mapValue)(config.fields, function (field) {
          return _objectSpread(_objectSpread({}, field), {}, {
            type: replaceType(field.type)
          });
        })), buildInputFieldMap(extensions));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }
  function extendEnumType(type) {
    var _typeExtensionsMap$ty;
    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$ty = typeExtensionsMap[type.name]) !== null && _typeExtensionsMap$ty !== void 0 ? _typeExtensionsMap$ty : [];
    return new _definition.GraphQLEnumType(_objectSpread(_objectSpread({}, config), {}, {
      values: _objectSpread(_objectSpread({}, config.values), buildEnumValueMap(extensions)),
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }
  function extendScalarType(type) {
    var _typeExtensionsMap$co2;
    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$co2 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co2 !== void 0 ? _typeExtensionsMap$co2 : [];
    var specifiedByURL = config.specifiedByURL;
    var _iterator3 = _createForOfIteratorHelper(extensions),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var extensionNode = _step3.value;
        var _getSpecifiedByURL;
        specifiedByURL = (_getSpecifiedByURL = getSpecifiedByURL(extensionNode)) !== null && _getSpecifiedByURL !== void 0 ? _getSpecifiedByURL : specifiedByURL;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return new _definition.GraphQLScalarType(_objectSpread(_objectSpread({}, config), {}, {
      specifiedByURL: specifiedByURL,
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }
  function extendObjectType(type) {
    var _typeExtensionsMap$co3;
    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$co3 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co3 !== void 0 ? _typeExtensionsMap$co3 : [];
    return new _definition.GraphQLObjectType(_objectSpread(_objectSpread({}, config), {}, {
      interfaces: function interfaces() {
        return [].concat(_toConsumableArray(type.getInterfaces().map(replaceNamedType)), _toConsumableArray(buildInterfaces(extensions)));
      },
      fields: function fields() {
        return _objectSpread(_objectSpread({}, (0, _mapValue.mapValue)(config.fields, extendField)), buildFieldMap(extensions));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }
  function extendInterfaceType(type) {
    var _typeExtensionsMap$co4;
    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$co4 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co4 !== void 0 ? _typeExtensionsMap$co4 : [];
    return new _definition.GraphQLInterfaceType(_objectSpread(_objectSpread({}, config), {}, {
      interfaces: function interfaces() {
        return [].concat(_toConsumableArray(type.getInterfaces().map(replaceNamedType)), _toConsumableArray(buildInterfaces(extensions)));
      },
      fields: function fields() {
        return _objectSpread(_objectSpread({}, (0, _mapValue.mapValue)(config.fields, extendField)), buildFieldMap(extensions));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }
  function extendUnionType(type) {
    var _typeExtensionsMap$co5;
    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$co5 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co5 !== void 0 ? _typeExtensionsMap$co5 : [];
    return new _definition.GraphQLUnionType(_objectSpread(_objectSpread({}, config), {}, {
      types: function types() {
        return [].concat(_toConsumableArray(type.getTypes().map(replaceNamedType)), _toConsumableArray(buildUnionTypes(extensions)));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }
  function extendField(field) {
    return _objectSpread(_objectSpread({}, field), {}, {
      type: replaceType(field.type),
      args: field.args && (0, _mapValue.mapValue)(field.args, extendArg)
    });
  }
  function extendArg(arg) {
    return _objectSpread(_objectSpread({}, arg), {}, {
      type: replaceType(arg.type)
    });
  }
  function getOperationTypes(nodes) {
    var opTypes = {};
    var _iterator4 = _createForOfIteratorHelper(nodes),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var node = _step4.value;
        var _node$operationTypes;

        // FIXME: https://github.com/graphql/graphql-js/issues/2203
        var operationTypesNodes = /* c8 ignore next */
        (_node$operationTypes = node.operationTypes) !== null && _node$operationTypes !== void 0 ? _node$operationTypes : [];
        var _iterator5 = _createForOfIteratorHelper(operationTypesNodes),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var operationType = _step5.value;
            // Note: While this could make early assertions to get the correctly
            // typed values below, that would throw immediately while type system
            // validation with validateSchema() will produce more actionable results.
            // @ts-expect-error
            opTypes[operationType.operation] = getNamedType(operationType.type);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return opTypes;
  }
  function getNamedType(node) {
    var _stdTypeMap$name2;
    var name = node.name.value;
    var type = (_stdTypeMap$name2 = stdTypeMap[name]) !== null && _stdTypeMap$name2 !== void 0 ? _stdTypeMap$name2 : typeMap[name];
    if (type === undefined) {
      throw new Error("Unknown type: \"".concat(name, "\"."));
    }
    return type;
  }
  function getWrappedType(node) {
    if (node.kind === _kinds.Kind.LIST_TYPE) {
      return new _definition.GraphQLList(getWrappedType(node.type));
    }
    if (node.kind === _kinds.Kind.NON_NULL_TYPE) {
      return new _definition.GraphQLNonNull(getWrappedType(node.type));
    }
    return getNamedType(node);
  }
  function buildDirective(node) {
    var _node$description;
    return new _directives.GraphQLDirective({
      name: node.name.value,
      description: (_node$description = node.description) === null || _node$description === void 0 ? void 0 : _node$description.value,
      // @ts-expect-error
      locations: node.locations.map(function (_ref) {
        var value = _ref.value;
        return value;
      }),
      isRepeatable: node.repeatable,
      args: buildArgumentMap(node.arguments),
      astNode: node
    });
  }
  function buildFieldMap(nodes) {
    var fieldConfigMap = Object.create(null);
    var _iterator6 = _createForOfIteratorHelper(nodes),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var node = _step6.value;
        var _node$fields;

        // FIXME: https://github.com/graphql/graphql-js/issues/2203
        var nodeFields = /* c8 ignore next */
        (_node$fields = node.fields) !== null && _node$fields !== void 0 ? _node$fields : [];
        var _iterator7 = _createForOfIteratorHelper(nodeFields),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var field = _step7.value;
            var _field$description;
            fieldConfigMap[field.name.value] = {
              // Note: While this could make assertions to get the correctly typed
              // value, that would throw immediately while type system validation
              // with validateSchema() will produce more actionable results.
              type: getWrappedType(field.type),
              description: (_field$description = field.description) === null || _field$description === void 0 ? void 0 : _field$description.value,
              args: buildArgumentMap(field.arguments),
              deprecationReason: getDeprecationReason(field),
              astNode: field
            };
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return fieldConfigMap;
  }
  function buildArgumentMap(args) {
    // FIXME: https://github.com/graphql/graphql-js/issues/2203
    var argsNodes = /* c8 ignore next */
    args !== null && args !== void 0 ? args : [];
    var argConfigMap = Object.create(null);
    var _iterator8 = _createForOfIteratorHelper(argsNodes),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var arg = _step8.value;
        var _arg$description;

        // Note: While this could make assertions to get the correctly typed
        // value, that would throw immediately while type system validation
        // with validateSchema() will produce more actionable results.
        var type = getWrappedType(arg.type);
        argConfigMap[arg.name.value] = {
          type: type,
          description: (_arg$description = arg.description) === null || _arg$description === void 0 ? void 0 : _arg$description.value,
          defaultValue: (0, _valueFromAST.valueFromAST)(arg.defaultValue, type),
          deprecationReason: getDeprecationReason(arg),
          astNode: arg
        };
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    return argConfigMap;
  }
  function buildInputFieldMap(nodes) {
    var inputFieldMap = Object.create(null);
    var _iterator9 = _createForOfIteratorHelper(nodes),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var node = _step9.value;
        var _node$fields2;

        // FIXME: https://github.com/graphql/graphql-js/issues/2203
        var fieldsNodes = /* c8 ignore next */
        (_node$fields2 = node.fields) !== null && _node$fields2 !== void 0 ? _node$fields2 : [];
        var _iterator10 = _createForOfIteratorHelper(fieldsNodes),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var field = _step10.value;
            var _field$description2;

            // Note: While this could make assertions to get the correctly typed
            // value, that would throw immediately while type system validation
            // with validateSchema() will produce more actionable results.
            var type = getWrappedType(field.type);
            inputFieldMap[field.name.value] = {
              type: type,
              description: (_field$description2 = field.description) === null || _field$description2 === void 0 ? void 0 : _field$description2.value,
              defaultValue: (0, _valueFromAST.valueFromAST)(field.defaultValue, type),
              deprecationReason: getDeprecationReason(field),
              astNode: field
            };
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    return inputFieldMap;
  }
  function buildEnumValueMap(nodes) {
    var enumValueMap = Object.create(null);
    var _iterator11 = _createForOfIteratorHelper(nodes),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var node = _step11.value;
        var _node$values;

        // FIXME: https://github.com/graphql/graphql-js/issues/2203
        var valuesNodes = /* c8 ignore next */
        (_node$values = node.values) !== null && _node$values !== void 0 ? _node$values : [];
        var _iterator12 = _createForOfIteratorHelper(valuesNodes),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var value = _step12.value;
            var _value$description;
            enumValueMap[value.name.value] = {
              description: (_value$description = value.description) === null || _value$description === void 0 ? void 0 : _value$description.value,
              deprecationReason: getDeprecationReason(value),
              astNode: value
            };
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    return enumValueMap;
  }
  function buildInterfaces(nodes) {
    // Note: While this could make assertions to get the correctly typed
    // values below, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.
    // @ts-expect-error
    return nodes.flatMap(
    // FIXME: https://github.com/graphql/graphql-js/issues/2203
    function (node) {
      var _node$interfaces$map, _node$interfaces;
      return (/* c8 ignore next */
        (_node$interfaces$map = (_node$interfaces = node.interfaces) === null || _node$interfaces === void 0 ? void 0 : _node$interfaces.map(getNamedType)) !== null && _node$interfaces$map !== void 0 ? _node$interfaces$map : []
      );
    });
  }
  function buildUnionTypes(nodes) {
    // Note: While this could make assertions to get the correctly typed
    // values below, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.
    // @ts-expect-error
    return nodes.flatMap(
    // FIXME: https://github.com/graphql/graphql-js/issues/2203
    function (node) {
      var _node$types$map, _node$types;
      return (/* c8 ignore next */
        (_node$types$map = (_node$types = node.types) === null || _node$types === void 0 ? void 0 : _node$types.map(getNamedType)) !== null && _node$types$map !== void 0 ? _node$types$map : []
      );
    });
  }
  function buildType(astNode) {
    var _typeExtensionsMap$na;
    var name = astNode.name.value;
    var extensionASTNodes = (_typeExtensionsMap$na = typeExtensionsMap[name]) !== null && _typeExtensionsMap$na !== void 0 ? _typeExtensionsMap$na : [];
    switch (astNode.kind) {
      case _kinds.Kind.OBJECT_TYPE_DEFINITION:
        {
          var _astNode$description;
          var allNodes = [astNode].concat(_toConsumableArray(extensionASTNodes));
          return new _definition.GraphQLObjectType({
            name: name,
            description: (_astNode$description = astNode.description) === null || _astNode$description === void 0 ? void 0 : _astNode$description.value,
            interfaces: function interfaces() {
              return buildInterfaces(allNodes);
            },
            fields: function fields() {
              return buildFieldMap(allNodes);
            },
            astNode: astNode,
            extensionASTNodes: extensionASTNodes
          });
        }
      case _kinds.Kind.INTERFACE_TYPE_DEFINITION:
        {
          var _astNode$description2;
          var _allNodes = [astNode].concat(_toConsumableArray(extensionASTNodes));
          return new _definition.GraphQLInterfaceType({
            name: name,
            description: (_astNode$description2 = astNode.description) === null || _astNode$description2 === void 0 ? void 0 : _astNode$description2.value,
            interfaces: function interfaces() {
              return buildInterfaces(_allNodes);
            },
            fields: function fields() {
              return buildFieldMap(_allNodes);
            },
            astNode: astNode,
            extensionASTNodes: extensionASTNodes
          });
        }
      case _kinds.Kind.ENUM_TYPE_DEFINITION:
        {
          var _astNode$description3;
          var _allNodes2 = [astNode].concat(_toConsumableArray(extensionASTNodes));
          return new _definition.GraphQLEnumType({
            name: name,
            description: (_astNode$description3 = astNode.description) === null || _astNode$description3 === void 0 ? void 0 : _astNode$description3.value,
            values: buildEnumValueMap(_allNodes2),
            astNode: astNode,
            extensionASTNodes: extensionASTNodes
          });
        }
      case _kinds.Kind.UNION_TYPE_DEFINITION:
        {
          var _astNode$description4;
          var _allNodes3 = [astNode].concat(_toConsumableArray(extensionASTNodes));
          return new _definition.GraphQLUnionType({
            name: name,
            description: (_astNode$description4 = astNode.description) === null || _astNode$description4 === void 0 ? void 0 : _astNode$description4.value,
            types: function types() {
              return buildUnionTypes(_allNodes3);
            },
            astNode: astNode,
            extensionASTNodes: extensionASTNodes
          });
        }
      case _kinds.Kind.SCALAR_TYPE_DEFINITION:
        {
          var _astNode$description5;
          return new _definition.GraphQLScalarType({
            name: name,
            description: (_astNode$description5 = astNode.description) === null || _astNode$description5 === void 0 ? void 0 : _astNode$description5.value,
            specifiedByURL: getSpecifiedByURL(astNode),
            astNode: astNode,
            extensionASTNodes: extensionASTNodes
          });
        }
      case _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION:
        {
          var _astNode$description6;
          var _allNodes4 = [astNode].concat(_toConsumableArray(extensionASTNodes));
          return new _definition.GraphQLInputObjectType({
            name: name,
            description: (_astNode$description6 = astNode.description) === null || _astNode$description6 === void 0 ? void 0 : _astNode$description6.value,
            fields: function fields() {
              return buildInputFieldMap(_allNodes4);
            },
            astNode: astNode,
            extensionASTNodes: extensionASTNodes
          });
        }
    }
  }
}
var stdTypeMap = (0, _keyMap.keyMap)([].concat(_toConsumableArray(_scalars.specifiedScalarTypes), _toConsumableArray(_introspection.introspectionTypes)), function (type) {
  return type.name;
});
/**
 * Given a field or enum value node, returns the string value for the
 * deprecation reason.
 */

function getDeprecationReason(node) {
  var deprecated = (0, _values.getDirectiveValues)(_directives.GraphQLDeprecatedDirective, node); // @ts-expect-error validated by `getDirectiveValues`

  return deprecated === null || deprecated === void 0 ? void 0 : deprecated.reason;
}
/**
 * Given a scalar node, returns the string value for the specifiedByURL.
 */

function getSpecifiedByURL(node) {
  var specifiedBy = (0, _values.getDirectiveValues)(_directives.GraphQLSpecifiedByDirective, node); // @ts-expect-error validated by `getDirectiveValues`

  return specifiedBy === null || specifiedBy === void 0 ? void 0 : specifiedBy.url;
}
},{"../jsutils/devAssert.mjs":"../node_modules/graphql/jsutils/devAssert.mjs","../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/invariant.mjs":"../node_modules/graphql/jsutils/invariant.mjs","../jsutils/keyMap.mjs":"../node_modules/graphql/jsutils/keyMap.mjs","../jsutils/mapValue.mjs":"../node_modules/graphql/jsutils/mapValue.mjs","../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../language/predicates.mjs":"../node_modules/graphql/language/predicates.mjs","../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../type/directives.mjs":"../node_modules/graphql/type/directives.mjs","../type/introspection.mjs":"../node_modules/graphql/type/introspection.mjs","../type/scalars.mjs":"../node_modules/graphql/type/scalars.mjs","../type/schema.mjs":"../node_modules/graphql/type/schema.mjs","../validation/validate.mjs":"../node_modules/graphql/validation/validate.mjs","../execution/values.mjs":"../node_modules/graphql/execution/values.mjs","./valueFromAST.mjs":"../node_modules/graphql/utilities/valueFromAST.mjs"}],"../node_modules/graphql/utilities/buildASTSchema.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildASTSchema = buildASTSchema;
exports.buildSchema = buildSchema;
var _devAssert = require("../jsutils/devAssert.mjs");
var _kinds = require("../language/kinds.mjs");
var _parser = require("../language/parser.mjs");
var _directives = require("../type/directives.mjs");
var _schema = require("../type/schema.mjs");
var _validate = require("../validation/validate.mjs");
var _extendSchema = require("./extendSchema.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * This takes the ast of a schema document produced by the parse function in
 * src/language/parser.js.
 *
 * If no schema definition is provided, then it will look for types named Query,
 * Mutation and Subscription.
 *
 * Given that AST it constructs a GraphQLSchema. The resulting schema
 * has no resolve methods, so execution will use default resolvers.
 */
function buildASTSchema(documentAST, options) {
  documentAST != null && documentAST.kind === _kinds.Kind.DOCUMENT || (0, _devAssert.devAssert)(false, 'Must provide valid Document AST.');
  if ((options === null || options === void 0 ? void 0 : options.assumeValid) !== true && (options === null || options === void 0 ? void 0 : options.assumeValidSDL) !== true) {
    (0, _validate.assertValidSDL)(documentAST);
  }
  var emptySchemaConfig = {
    description: undefined,
    types: [],
    directives: [],
    extensions: Object.create(null),
    extensionASTNodes: [],
    assumeValid: false
  };
  var config = (0, _extendSchema.extendSchemaImpl)(emptySchemaConfig, documentAST, options);
  if (config.astNode == null) {
    var _iterator = _createForOfIteratorHelper(config.types),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var type = _step.value;
        switch (type.name) {
          // Note: While this could make early assertions to get the correctly
          // typed values below, that would throw immediately while type system
          // validation with validateSchema() will produce more actionable results.
          case 'Query':
            // @ts-expect-error validated in `validateSchema`
            config.query = type;
            break;
          case 'Mutation':
            // @ts-expect-error validated in `validateSchema`
            config.mutation = type;
            break;
          case 'Subscription':
            // @ts-expect-error validated in `validateSchema`
            config.subscription = type;
            break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  var directives = [].concat(_toConsumableArray(config.directives), _toConsumableArray(_directives.specifiedDirectives.filter(function (stdDirective) {
    return config.directives.every(function (directive) {
      return directive.name !== stdDirective.name;
    });
  })));
  return new _schema.GraphQLSchema(_objectSpread(_objectSpread({}, config), {}, {
    directives: directives
  }));
}
/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
 */

function buildSchema(source, options) {
  var document = (0, _parser.parse)(source, {
    noLocation: options === null || options === void 0 ? void 0 : options.noLocation,
    allowLegacyFragmentVariables: options === null || options === void 0 ? void 0 : options.allowLegacyFragmentVariables
  });
  return buildASTSchema(document, {
    assumeValidSDL: options === null || options === void 0 ? void 0 : options.assumeValidSDL,
    assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
  });
}
},{"../jsutils/devAssert.mjs":"../node_modules/graphql/jsutils/devAssert.mjs","../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../language/parser.mjs":"../node_modules/graphql/language/parser.mjs","../type/directives.mjs":"../node_modules/graphql/type/directives.mjs","../type/schema.mjs":"../node_modules/graphql/type/schema.mjs","../validation/validate.mjs":"../node_modules/graphql/validation/validate.mjs","./extendSchema.mjs":"../node_modules/graphql/utilities/extendSchema.mjs"}],"../node_modules/graphql/utilities/lexicographicSortSchema.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lexicographicSortSchema = lexicographicSortSchema;
var _inspect = require("../jsutils/inspect.mjs");
var _invariant = require("../jsutils/invariant.mjs");
var _keyValMap = require("../jsutils/keyValMap.mjs");
var _naturalCompare = require("../jsutils/naturalCompare.mjs");
var _definition = require("../type/definition.mjs");
var _directives = require("../type/directives.mjs");
var _introspection = require("../type/introspection.mjs");
var _schema = require("../type/schema.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Sort GraphQLSchema.
 *
 * This function returns a sorted copy of the given GraphQLSchema.
 */

function lexicographicSortSchema(schema) {
  var schemaConfig = schema.toConfig();
  var typeMap = (0, _keyValMap.keyValMap)(sortByName(schemaConfig.types), function (type) {
    return type.name;
  }, sortNamedType);
  return new _schema.GraphQLSchema(_objectSpread(_objectSpread({}, schemaConfig), {}, {
    types: Object.values(typeMap),
    directives: sortByName(schemaConfig.directives).map(sortDirective),
    query: replaceMaybeType(schemaConfig.query),
    mutation: replaceMaybeType(schemaConfig.mutation),
    subscription: replaceMaybeType(schemaConfig.subscription)
  }));
  function replaceType(type) {
    if ((0, _definition.isListType)(type)) {
      // @ts-expect-error
      return new _definition.GraphQLList(replaceType(type.ofType));
    } else if ((0, _definition.isNonNullType)(type)) {
      // @ts-expect-error
      return new _definition.GraphQLNonNull(replaceType(type.ofType));
    } // @ts-expect-error FIXME: TS Conversion

    return replaceNamedType(type);
  }
  function replaceNamedType(type) {
    return typeMap[type.name];
  }
  function replaceMaybeType(maybeType) {
    return maybeType && replaceNamedType(maybeType);
  }
  function sortDirective(directive) {
    var config = directive.toConfig();
    return new _directives.GraphQLDirective(_objectSpread(_objectSpread({}, config), {}, {
      locations: sortBy(config.locations, function (x) {
        return x;
      }),
      args: sortArgs(config.args)
    }));
  }
  function sortArgs(args) {
    return sortObjMap(args, function (arg) {
      return _objectSpread(_objectSpread({}, arg), {}, {
        type: replaceType(arg.type)
      });
    });
  }
  function sortFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return _objectSpread(_objectSpread({}, field), {}, {
        type: replaceType(field.type),
        args: field.args && sortArgs(field.args)
      });
    });
  }
  function sortInputFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return _objectSpread(_objectSpread({}, field), {}, {
        type: replaceType(field.type)
      });
    });
  }
  function sortTypes(array) {
    return sortByName(array).map(replaceNamedType);
  }
  function sortNamedType(type) {
    if ((0, _definition.isScalarType)(type) || (0, _introspection.isIntrospectionType)(type)) {
      return type;
    }
    if ((0, _definition.isObjectType)(type)) {
      var config = type.toConfig();
      return new _definition.GraphQLObjectType(_objectSpread(_objectSpread({}, config), {}, {
        interfaces: function interfaces() {
          return sortTypes(config.interfaces);
        },
        fields: function fields() {
          return sortFields(config.fields);
        }
      }));
    }
    if ((0, _definition.isInterfaceType)(type)) {
      var _config = type.toConfig();
      return new _definition.GraphQLInterfaceType(_objectSpread(_objectSpread({}, _config), {}, {
        interfaces: function interfaces() {
          return sortTypes(_config.interfaces);
        },
        fields: function fields() {
          return sortFields(_config.fields);
        }
      }));
    }
    if ((0, _definition.isUnionType)(type)) {
      var _config2 = type.toConfig();
      return new _definition.GraphQLUnionType(_objectSpread(_objectSpread({}, _config2), {}, {
        types: function types() {
          return sortTypes(_config2.types);
        }
      }));
    }
    if ((0, _definition.isEnumType)(type)) {
      var _config3 = type.toConfig();
      return new _definition.GraphQLEnumType(_objectSpread(_objectSpread({}, _config3), {}, {
        values: sortObjMap(_config3.values, function (value) {
          return value;
        })
      }));
    }
    if ((0, _definition.isInputObjectType)(type)) {
      var _config4 = type.toConfig();
      return new _definition.GraphQLInputObjectType(_objectSpread(_objectSpread({}, _config4), {}, {
        fields: function fields() {
          return sortInputFields(_config4.fields);
        }
      }));
    }
    /* c8 ignore next 3 */
    // Not reachable, all possible types have been considered.

    false || (0, _invariant.invariant)(false, 'Unexpected type: ' + (0, _inspect.inspect)(type));
  }
}
function sortObjMap(map, sortValueFn) {
  var sortedMap = Object.create(null);
  var _iterator = _createForOfIteratorHelper(Object.keys(map).sort(_naturalCompare.naturalCompare)),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      sortedMap[key] = sortValueFn(map[key]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return sortedMap;
}
function sortByName(array) {
  return sortBy(array, function (obj) {
    return obj.name;
  });
}
function sortBy(array, mapToKey) {
  return array.slice().sort(function (obj1, obj2) {
    var key1 = mapToKey(obj1);
    var key2 = mapToKey(obj2);
    return (0, _naturalCompare.naturalCompare)(key1, key2);
  });
}
},{"../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/invariant.mjs":"../node_modules/graphql/jsutils/invariant.mjs","../jsutils/keyValMap.mjs":"../node_modules/graphql/jsutils/keyValMap.mjs","../jsutils/naturalCompare.mjs":"../node_modules/graphql/jsutils/naturalCompare.mjs","../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../type/directives.mjs":"../node_modules/graphql/type/directives.mjs","../type/introspection.mjs":"../node_modules/graphql/type/introspection.mjs","../type/schema.mjs":"../node_modules/graphql/type/schema.mjs"}],"../node_modules/graphql/utilities/printSchema.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printIntrospectionSchema = printIntrospectionSchema;
exports.printSchema = printSchema;
exports.printType = printType;
var _inspect = require("../jsutils/inspect.mjs");
var _invariant = require("../jsutils/invariant.mjs");
var _blockString = require("../language/blockString.mjs");
var _kinds = require("../language/kinds.mjs");
var _printer = require("../language/printer.mjs");
var _definition = require("../type/definition.mjs");
var _directives = require("../type/directives.mjs");
var _introspection = require("../type/introspection.mjs");
var _scalars = require("../type/scalars.mjs");
var _astFromValue = require("./astFromValue.mjs");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function printSchema(schema) {
  return printFilteredSchema(schema, function (n) {
    return !(0, _directives.isSpecifiedDirective)(n);
  }, isDefinedType);
}
function printIntrospectionSchema(schema) {
  return printFilteredSchema(schema, _directives.isSpecifiedDirective, _introspection.isIntrospectionType);
}
function isDefinedType(type) {
  return !(0, _scalars.isSpecifiedScalarType)(type) && !(0, _introspection.isIntrospectionType)(type);
}
function printFilteredSchema(schema, directiveFilter, typeFilter) {
  var directives = schema.getDirectives().filter(directiveFilter);
  var types = Object.values(schema.getTypeMap()).filter(typeFilter);
  return [printSchemaDefinition(schema)].concat(_toConsumableArray(directives.map(function (directive) {
    return printDirective(directive);
  })), _toConsumableArray(types.map(function (type) {
    return printType(type);
  }))).filter(Boolean).join('\n\n');
}
function printSchemaDefinition(schema) {
  if (schema.description == null && isSchemaOfCommonNames(schema)) {
    return;
  }
  var operationTypes = [];
  var queryType = schema.getQueryType();
  if (queryType) {
    operationTypes.push("  query: ".concat(queryType.name));
  }
  var mutationType = schema.getMutationType();
  if (mutationType) {
    operationTypes.push("  mutation: ".concat(mutationType.name));
  }
  var subscriptionType = schema.getSubscriptionType();
  if (subscriptionType) {
    operationTypes.push("  subscription: ".concat(subscriptionType.name));
  }
  return printDescription(schema) + "schema {\n".concat(operationTypes.join('\n'), "\n}");
}
/**
 * GraphQL schema define root types for each type of operation. These types are
 * the same as any other type and can be named in any manner, however there is
 * a common naming convention:
 *
 * ```graphql
 *   schema {
 *     query: Query
 *     mutation: Mutation
 *     subscription: Subscription
 *   }
 * ```
 *
 * When using this naming convention, the schema description can be omitted.
 */

function isSchemaOfCommonNames(schema) {
  var queryType = schema.getQueryType();
  if (queryType && queryType.name !== 'Query') {
    return false;
  }
  var mutationType = schema.getMutationType();
  if (mutationType && mutationType.name !== 'Mutation') {
    return false;
  }
  var subscriptionType = schema.getSubscriptionType();
  if (subscriptionType && subscriptionType.name !== 'Subscription') {
    return false;
  }
  return true;
}
function printType(type) {
  if ((0, _definition.isScalarType)(type)) {
    return printScalar(type);
  }
  if ((0, _definition.isObjectType)(type)) {
    return printObject(type);
  }
  if ((0, _definition.isInterfaceType)(type)) {
    return printInterface(type);
  }
  if ((0, _definition.isUnionType)(type)) {
    return printUnion(type);
  }
  if ((0, _definition.isEnumType)(type)) {
    return printEnum(type);
  }
  if ((0, _definition.isInputObjectType)(type)) {
    return printInputObject(type);
  }
  /* c8 ignore next 3 */
  // Not reachable, all possible types have been considered.

  false || (0, _invariant.invariant)(false, 'Unexpected type: ' + (0, _inspect.inspect)(type));
}
function printScalar(type) {
  return printDescription(type) + "scalar ".concat(type.name) + printSpecifiedByURL(type);
}
function printImplementedInterfaces(type) {
  var interfaces = type.getInterfaces();
  return interfaces.length ? ' implements ' + interfaces.map(function (i) {
    return i.name;
  }).join(' & ') : '';
}
function printObject(type) {
  return printDescription(type) + "type ".concat(type.name) + printImplementedInterfaces(type) + printFields(type);
}
function printInterface(type) {
  return printDescription(type) + "interface ".concat(type.name) + printImplementedInterfaces(type) + printFields(type);
}
function printUnion(type) {
  var types = type.getTypes();
  var possibleTypes = types.length ? ' = ' + types.join(' | ') : '';
  return printDescription(type) + 'union ' + type.name + possibleTypes;
}
function printEnum(type) {
  var values = type.getValues().map(function (value, i) {
    return printDescription(value, '  ', !i) + '  ' + value.name + printDeprecated(value.deprecationReason);
  });
  return printDescription(type) + "enum ".concat(type.name) + printBlock(values);
}
function printInputObject(type) {
  var fields = Object.values(type.getFields()).map(function (f, i) {
    return printDescription(f, '  ', !i) + '  ' + printInputValue(f);
  });
  return printDescription(type) + "input ".concat(type.name) + printBlock(fields);
}
function printFields(type) {
  var fields = Object.values(type.getFields()).map(function (f, i) {
    return printDescription(f, '  ', !i) + '  ' + f.name + printArgs(f.args, '  ') + ': ' + String(f.type) + printDeprecated(f.deprecationReason);
  });
  return printBlock(fields);
}
function printBlock(items) {
  return items.length !== 0 ? ' {\n' + items.join('\n') + '\n}' : '';
}
function printArgs(args) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (args.length === 0) {
    return '';
  } // If every arg does not have a description, print them on one line.

  if (args.every(function (arg) {
    return !arg.description;
  })) {
    return '(' + args.map(printInputValue).join(', ') + ')';
  }
  return '(\n' + args.map(function (arg, i) {
    return printDescription(arg, '  ' + indentation, !i) + '  ' + indentation + printInputValue(arg);
  }).join('\n') + '\n' + indentation + ')';
}
function printInputValue(arg) {
  var defaultAST = (0, _astFromValue.astFromValue)(arg.defaultValue, arg.type);
  var argDecl = arg.name + ': ' + String(arg.type);
  if (defaultAST) {
    argDecl += " = ".concat((0, _printer.print)(defaultAST));
  }
  return argDecl + printDeprecated(arg.deprecationReason);
}
function printDirective(directive) {
  return printDescription(directive) + 'directive @' + directive.name + printArgs(directive.args) + (directive.isRepeatable ? ' repeatable' : '') + ' on ' + directive.locations.join(' | ');
}
function printDeprecated(reason) {
  if (reason == null) {
    return '';
  }
  if (reason !== _directives.DEFAULT_DEPRECATION_REASON) {
    var astValue = (0, _printer.print)({
      kind: _kinds.Kind.STRING,
      value: reason
    });
    return " @deprecated(reason: ".concat(astValue, ")");
  }
  return ' @deprecated';
}
function printSpecifiedByURL(scalar) {
  if (scalar.specifiedByURL == null) {
    return '';
  }
  var astValue = (0, _printer.print)({
    kind: _kinds.Kind.STRING,
    value: scalar.specifiedByURL
  });
  return " @specifiedBy(url: ".concat(astValue, ")");
}
function printDescription(def) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var firstInBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var description = def.description;
  if (description == null) {
    return '';
  }
  var blockString = (0, _printer.print)({
    kind: _kinds.Kind.STRING,
    value: description,
    block: (0, _blockString.isPrintableAsBlockString)(description)
  });
  var prefix = indentation && !firstInBlock ? '\n' + indentation : indentation;
  return prefix + blockString.replace(/\n/g, '\n' + indentation) + '\n';
}
},{"../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/invariant.mjs":"../node_modules/graphql/jsutils/invariant.mjs","../language/blockString.mjs":"../node_modules/graphql/language/blockString.mjs","../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../language/printer.mjs":"../node_modules/graphql/language/printer.mjs","../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../type/directives.mjs":"../node_modules/graphql/type/directives.mjs","../type/introspection.mjs":"../node_modules/graphql/type/introspection.mjs","../type/scalars.mjs":"../node_modules/graphql/type/scalars.mjs","./astFromValue.mjs":"../node_modules/graphql/utilities/astFromValue.mjs"}],"../node_modules/graphql/utilities/concatAST.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatAST = concatAST;
var _kinds = require("../language/kinds.mjs");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Provided a collection of ASTs, presumably each from different files,
 * concatenate the ASTs together into batched AST, useful for validating many
 * GraphQL source files which together represent one conceptual application.
 */

function concatAST(documents) {
  var definitions = [];
  var _iterator = _createForOfIteratorHelper(documents),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var doc = _step.value;
      definitions.push.apply(definitions, _toConsumableArray(doc.definitions));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return {
    kind: _kinds.Kind.DOCUMENT,
    definitions: definitions
  };
}
},{"../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs"}],"../node_modules/graphql/utilities/separateOperations.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separateOperations = separateOperations;
var _kinds = require("../language/kinds.mjs");
var _visitor = require("../language/visitor.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * separateOperations accepts a single AST document which may contain many
 * operations and fragments and returns a collection of AST documents each of
 * which contains a single operation as well the fragment definitions it
 * refers to.
 */

function separateOperations(documentAST) {
  var operations = [];
  var depGraph = Object.create(null); // Populate metadata and build a dependency graph.
  var _iterator = _createForOfIteratorHelper(documentAST.definitions),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var definitionNode = _step.value;
      switch (definitionNode.kind) {
        case _kinds.Kind.OPERATION_DEFINITION:
          operations.push(definitionNode);
          break;
        case _kinds.Kind.FRAGMENT_DEFINITION:
          depGraph[definitionNode.name.value] = collectDependencies(definitionNode.selectionSet);
          break;
        default: // ignore non-executable definitions
      }
    } // For each operation, produce a new synthesized AST which includes only what
    // is necessary for completing that operation.
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var separatedDocumentASTs = Object.create(null);
  var _loop = function _loop() {
    var operation = _operations[_i];
    var dependencies = new Set();
    var _iterator2 = _createForOfIteratorHelper(collectDependencies(operation.selectionSet)),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var fragmentName = _step2.value;
        collectTransitiveDependencies(dependencies, depGraph, fragmentName);
      } // Provides the empty string for anonymous operations.
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var operationName = operation.name ? operation.name.value : ''; // The list of definition nodes to be included for this operation, sorted
    // to retain the same order as the original document.

    separatedDocumentASTs[operationName] = {
      kind: _kinds.Kind.DOCUMENT,
      definitions: documentAST.definitions.filter(function (node) {
        return node === operation || node.kind === _kinds.Kind.FRAGMENT_DEFINITION && dependencies.has(node.name.value);
      })
    };
  };
  for (var _i = 0, _operations = operations; _i < _operations.length; _i++) {
    _loop();
  }
  return separatedDocumentASTs;
}

// From a dependency graph, collects a list of transitive dependencies by
// recursing through a dependency graph.
function collectTransitiveDependencies(collected, depGraph, fromName) {
  if (!collected.has(fromName)) {
    collected.add(fromName);
    var immediateDeps = depGraph[fromName];
    if (immediateDeps !== undefined) {
      var _iterator3 = _createForOfIteratorHelper(immediateDeps),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var toName = _step3.value;
          collectTransitiveDependencies(collected, depGraph, toName);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }
}
function collectDependencies(selectionSet) {
  var dependencies = [];
  (0, _visitor.visit)(selectionSet, {
    FragmentSpread: function FragmentSpread(node) {
      dependencies.push(node.name.value);
    }
  });
  return dependencies;
}
},{"../language/kinds.mjs":"../node_modules/graphql/language/kinds.mjs","../language/visitor.mjs":"../node_modules/graphql/language/visitor.mjs"}],"../node_modules/graphql/utilities/stripIgnoredCharacters.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stripIgnoredCharacters = stripIgnoredCharacters;
var _blockString = require("../language/blockString.mjs");
var _lexer = require("../language/lexer.mjs");
var _source = require("../language/source.mjs");
var _tokenKind = require("../language/tokenKind.mjs");
/**
 * Strips characters that are not significant to the validity or execution
 * of a GraphQL document:
 *   - UnicodeBOM
 *   - WhiteSpace
 *   - LineTerminator
 *   - Comment
 *   - Comma
 *   - BlockString indentation
 *
 * Note: It is required to have a delimiter character between neighboring
 * non-punctuator tokens and this function always uses single space as delimiter.
 *
 * It is guaranteed that both input and output documents if parsed would result
 * in the exact same AST except for nodes location.
 *
 * Warning: It is guaranteed that this function will always produce stable results.
 * However, it's not guaranteed that it will stay the same between different
 * releases due to bugfixes or changes in the GraphQL specification.
 *
 * Query example:
 *
 * ```graphql
 * query SomeQuery($foo: String!, $bar: String) {
 *   someField(foo: $foo, bar: $bar) {
 *     a
 *     b {
 *       c
 *       d
 *     }
 *   }
 * }
 * ```
 *
 * Becomes:
 *
 * ```graphql
 * query SomeQuery($foo:String!$bar:String){someField(foo:$foo bar:$bar){a b{c d}}}
 * ```
 *
 * SDL example:
 *
 * ```graphql
 * """
 * Type description
 * """
 * type Foo {
 *   """
 *   Field description
 *   """
 *   bar: String
 * }
 * ```
 *
 * Becomes:
 *
 * ```graphql
 * """Type description""" type Foo{"""Field description""" bar:String}
 * ```
 */

function stripIgnoredCharacters(source) {
  var sourceObj = (0, _source.isSource)(source) ? source : new _source.Source(source);
  var body = sourceObj.body;
  var lexer = new _lexer.Lexer(sourceObj);
  var strippedBody = '';
  var wasLastAddedTokenNonPunctuator = false;
  while (lexer.advance().kind !== _tokenKind.TokenKind.EOF) {
    var currentToken = lexer.token;
    var tokenKind = currentToken.kind;
    /**
     * Every two non-punctuator tokens should have space between them.
     * Also prevent case of non-punctuator token following by spread resulting
     * in invalid token (e.g. `1...` is invalid Float token).
     */

    var isNonPunctuator = !(0, _lexer.isPunctuatorTokenKind)(currentToken.kind);
    if (wasLastAddedTokenNonPunctuator) {
      if (isNonPunctuator || currentToken.kind === _tokenKind.TokenKind.SPREAD) {
        strippedBody += ' ';
      }
    }
    var tokenBody = body.slice(currentToken.start, currentToken.end);
    if (tokenKind === _tokenKind.TokenKind.BLOCK_STRING) {
      strippedBody += (0, _blockString.printBlockString)(currentToken.value, {
        minimize: true
      });
    } else {
      strippedBody += tokenBody;
    }
    wasLastAddedTokenNonPunctuator = isNonPunctuator;
  }
  return strippedBody;
}
},{"../language/blockString.mjs":"../node_modules/graphql/language/blockString.mjs","../language/lexer.mjs":"../node_modules/graphql/language/lexer.mjs","../language/source.mjs":"../node_modules/graphql/language/source.mjs","../language/tokenKind.mjs":"../node_modules/graphql/language/tokenKind.mjs"}],"../node_modules/graphql/utilities/assertValidName.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertValidName = assertValidName;
exports.isValidNameError = isValidNameError;
var _devAssert = require("../jsutils/devAssert.mjs");
var _GraphQLError = require("../error/GraphQLError.mjs");
var _assertName = require("../type/assertName.mjs");
/* c8 ignore start */

/**
 * Upholds the spec rules about naming.
 * @deprecated Please use `assertName` instead. Will be removed in v17
 */

function assertValidName(name) {
  var error = isValidNameError(name);
  if (error) {
    throw error;
  }
  return name;
}
/**
 * Returns an Error if a name is invalid.
 * @deprecated Please use `assertName` instead. Will be removed in v17
 */

function isValidNameError(name) {
  typeof name === 'string' || (0, _devAssert.devAssert)(false, 'Expected name to be a string.');
  if (name.startsWith('__')) {
    return new _GraphQLError.GraphQLError("Name \"".concat(name, "\" must not begin with \"__\", which is reserved by GraphQL introspection."));
  }
  try {
    (0, _assertName.assertName)(name);
  } catch (error) {
    return error;
  }
}
/* c8 ignore stop */
},{"../jsutils/devAssert.mjs":"../node_modules/graphql/jsutils/devAssert.mjs","../error/GraphQLError.mjs":"../node_modules/graphql/error/GraphQLError.mjs","../type/assertName.mjs":"../node_modules/graphql/type/assertName.mjs"}],"../node_modules/graphql/utilities/findBreakingChanges.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DangerousChangeType = exports.BreakingChangeType = void 0;
exports.findBreakingChanges = findBreakingChanges;
exports.findDangerousChanges = findDangerousChanges;
var _inspect = require("../jsutils/inspect.mjs");
var _invariant = require("../jsutils/invariant.mjs");
var _keyMap = require("../jsutils/keyMap.mjs");
var _printer = require("../language/printer.mjs");
var _definition = require("../type/definition.mjs");
var _scalars = require("../type/scalars.mjs");
var _astFromValue = require("./astFromValue.mjs");
var _sortValueNode = require("./sortValueNode.mjs");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var BreakingChangeType;
(function (BreakingChangeType) {
  BreakingChangeType['TYPE_REMOVED'] = 'TYPE_REMOVED';
  BreakingChangeType['TYPE_CHANGED_KIND'] = 'TYPE_CHANGED_KIND';
  BreakingChangeType['TYPE_REMOVED_FROM_UNION'] = 'TYPE_REMOVED_FROM_UNION';
  BreakingChangeType['VALUE_REMOVED_FROM_ENUM'] = 'VALUE_REMOVED_FROM_ENUM';
  BreakingChangeType['REQUIRED_INPUT_FIELD_ADDED'] = 'REQUIRED_INPUT_FIELD_ADDED';
  BreakingChangeType['IMPLEMENTED_INTERFACE_REMOVED'] = 'IMPLEMENTED_INTERFACE_REMOVED';
  BreakingChangeType['FIELD_REMOVED'] = 'FIELD_REMOVED';
  BreakingChangeType['FIELD_CHANGED_KIND'] = 'FIELD_CHANGED_KIND';
  BreakingChangeType['REQUIRED_ARG_ADDED'] = 'REQUIRED_ARG_ADDED';
  BreakingChangeType['ARG_REMOVED'] = 'ARG_REMOVED';
  BreakingChangeType['ARG_CHANGED_KIND'] = 'ARG_CHANGED_KIND';
  BreakingChangeType['DIRECTIVE_REMOVED'] = 'DIRECTIVE_REMOVED';
  BreakingChangeType['DIRECTIVE_ARG_REMOVED'] = 'DIRECTIVE_ARG_REMOVED';
  BreakingChangeType['REQUIRED_DIRECTIVE_ARG_ADDED'] = 'REQUIRED_DIRECTIVE_ARG_ADDED';
  BreakingChangeType['DIRECTIVE_REPEATABLE_REMOVED'] = 'DIRECTIVE_REPEATABLE_REMOVED';
  BreakingChangeType['DIRECTIVE_LOCATION_REMOVED'] = 'DIRECTIVE_LOCATION_REMOVED';
})(BreakingChangeType || (exports.BreakingChangeType = BreakingChangeType = {}));
var DangerousChangeType;
(function (DangerousChangeType) {
  DangerousChangeType['VALUE_ADDED_TO_ENUM'] = 'VALUE_ADDED_TO_ENUM';
  DangerousChangeType['TYPE_ADDED_TO_UNION'] = 'TYPE_ADDED_TO_UNION';
  DangerousChangeType['OPTIONAL_INPUT_FIELD_ADDED'] = 'OPTIONAL_INPUT_FIELD_ADDED';
  DangerousChangeType['OPTIONAL_ARG_ADDED'] = 'OPTIONAL_ARG_ADDED';
  DangerousChangeType['IMPLEMENTED_INTERFACE_ADDED'] = 'IMPLEMENTED_INTERFACE_ADDED';
  DangerousChangeType['ARG_DEFAULT_VALUE_CHANGE'] = 'ARG_DEFAULT_VALUE_CHANGE';
})(DangerousChangeType || (exports.DangerousChangeType = DangerousChangeType = {}));
/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of breaking changes covered by the other functions down below.
 */
function findBreakingChanges(oldSchema, newSchema) {
  // @ts-expect-error
  return findSchemaChanges(oldSchema, newSchema).filter(function (change) {
    return change.type in BreakingChangeType;
  });
}
/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of potentially dangerous changes covered by the other functions down below.
 */

function findDangerousChanges(oldSchema, newSchema) {
  // @ts-expect-error
  return findSchemaChanges(oldSchema, newSchema).filter(function (change) {
    return change.type in DangerousChangeType;
  });
}
function findSchemaChanges(oldSchema, newSchema) {
  return [].concat(_toConsumableArray(findTypeChanges(oldSchema, newSchema)), _toConsumableArray(findDirectiveChanges(oldSchema, newSchema)));
}
function findDirectiveChanges(oldSchema, newSchema) {
  var schemaChanges = [];
  var directivesDiff = diff(oldSchema.getDirectives(), newSchema.getDirectives());
  var _iterator = _createForOfIteratorHelper(directivesDiff.removed),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var oldDirective = _step.value;
      schemaChanges.push({
        type: BreakingChangeType.DIRECTIVE_REMOVED,
        description: "".concat(oldDirective.name, " was removed.")
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(directivesDiff.persisted),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
        _oldDirective = _step2$value[0],
        newDirective = _step2$value[1];
      var argsDiff = diff(_oldDirective.args, newDirective.args);
      var _iterator3 = _createForOfIteratorHelper(argsDiff.added),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var newArg = _step3.value;
          if ((0, _definition.isRequiredArgument)(newArg)) {
            schemaChanges.push({
              type: BreakingChangeType.REQUIRED_DIRECTIVE_ARG_ADDED,
              description: "A required arg ".concat(newArg.name, " on directive ").concat(_oldDirective.name, " was added.")
            });
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper(argsDiff.removed),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var oldArg = _step4.value;
          schemaChanges.push({
            type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
            description: "".concat(oldArg.name, " was removed from ").concat(_oldDirective.name, ".")
          });
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      if (_oldDirective.isRepeatable && !newDirective.isRepeatable) {
        schemaChanges.push({
          type: BreakingChangeType.DIRECTIVE_REPEATABLE_REMOVED,
          description: "Repeatable flag was removed from ".concat(_oldDirective.name, ".")
        });
      }
      var _iterator5 = _createForOfIteratorHelper(_oldDirective.locations),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var location = _step5.value;
          if (!newDirective.locations.includes(location)) {
            schemaChanges.push({
              type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
              description: "".concat(location, " was removed from ").concat(_oldDirective.name, ".")
            });
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return schemaChanges;
}
function findTypeChanges(oldSchema, newSchema) {
  var schemaChanges = [];
  var typesDiff = diff(Object.values(oldSchema.getTypeMap()), Object.values(newSchema.getTypeMap()));
  var _iterator6 = _createForOfIteratorHelper(typesDiff.removed),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var oldType = _step6.value;
      schemaChanges.push({
        type: BreakingChangeType.TYPE_REMOVED,
        description: (0, _scalars.isSpecifiedScalarType)(oldType) ? "Standard scalar ".concat(oldType.name, " was removed because it is not referenced anymore.") : "".concat(oldType.name, " was removed.")
      });
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  var _iterator7 = _createForOfIteratorHelper(typesDiff.persisted),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var _step7$value = _slicedToArray(_step7.value, 2),
        _oldType = _step7$value[0],
        newType = _step7$value[1];
      if ((0, _definition.isEnumType)(_oldType) && (0, _definition.isEnumType)(newType)) {
        schemaChanges.push.apply(schemaChanges, _toConsumableArray(findEnumTypeChanges(_oldType, newType)));
      } else if ((0, _definition.isUnionType)(_oldType) && (0, _definition.isUnionType)(newType)) {
        schemaChanges.push.apply(schemaChanges, _toConsumableArray(findUnionTypeChanges(_oldType, newType)));
      } else if ((0, _definition.isInputObjectType)(_oldType) && (0, _definition.isInputObjectType)(newType)) {
        schemaChanges.push.apply(schemaChanges, _toConsumableArray(findInputObjectTypeChanges(_oldType, newType)));
      } else if ((0, _definition.isObjectType)(_oldType) && (0, _definition.isObjectType)(newType)) {
        schemaChanges.push.apply(schemaChanges, _toConsumableArray(findFieldChanges(_oldType, newType)).concat(_toConsumableArray(findImplementedInterfacesChanges(_oldType, newType))));
      } else if ((0, _definition.isInterfaceType)(_oldType) && (0, _definition.isInterfaceType)(newType)) {
        schemaChanges.push.apply(schemaChanges, _toConsumableArray(findFieldChanges(_oldType, newType)).concat(_toConsumableArray(findImplementedInterfacesChanges(_oldType, newType))));
      } else if (_oldType.constructor !== newType.constructor) {
        schemaChanges.push({
          type: BreakingChangeType.TYPE_CHANGED_KIND,
          description: "".concat(_oldType.name, " changed from ") + "".concat(typeKindName(_oldType), " to ").concat(typeKindName(newType), ".")
        });
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  return schemaChanges;
}
function findInputObjectTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var fieldsDiff = diff(Object.values(oldType.getFields()), Object.values(newType.getFields()));
  var _iterator8 = _createForOfIteratorHelper(fieldsDiff.added),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var newField = _step8.value;
      if ((0, _definition.isRequiredInputField)(newField)) {
        schemaChanges.push({
          type: BreakingChangeType.REQUIRED_INPUT_FIELD_ADDED,
          description: "A required field ".concat(newField.name, " on input type ").concat(oldType.name, " was added.")
        });
      } else {
        schemaChanges.push({
          type: DangerousChangeType.OPTIONAL_INPUT_FIELD_ADDED,
          description: "An optional field ".concat(newField.name, " on input type ").concat(oldType.name, " was added.")
        });
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  var _iterator9 = _createForOfIteratorHelper(fieldsDiff.removed),
    _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var oldField = _step9.value;
      schemaChanges.push({
        type: BreakingChangeType.FIELD_REMOVED,
        description: "".concat(oldType.name, ".").concat(oldField.name, " was removed.")
      });
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
  var _iterator10 = _createForOfIteratorHelper(fieldsDiff.persisted),
    _step10;
  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var _step10$value = _slicedToArray(_step10.value, 2),
        _oldField = _step10$value[0],
        _newField = _step10$value[1];
      var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(_oldField.type, _newField.type);
      if (!isSafe) {
        schemaChanges.push({
          type: BreakingChangeType.FIELD_CHANGED_KIND,
          description: "".concat(oldType.name, ".").concat(_oldField.name, " changed type from ") + "".concat(String(_oldField.type), " to ").concat(String(_newField.type), ".")
        });
      }
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }
  return schemaChanges;
}
function findUnionTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var possibleTypesDiff = diff(oldType.getTypes(), newType.getTypes());
  var _iterator11 = _createForOfIteratorHelper(possibleTypesDiff.added),
    _step11;
  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var newPossibleType = _step11.value;
      schemaChanges.push({
        type: DangerousChangeType.TYPE_ADDED_TO_UNION,
        description: "".concat(newPossibleType.name, " was added to union type ").concat(oldType.name, ".")
      });
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
  var _iterator12 = _createForOfIteratorHelper(possibleTypesDiff.removed),
    _step12;
  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var oldPossibleType = _step12.value;
      schemaChanges.push({
        type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
        description: "".concat(oldPossibleType.name, " was removed from union type ").concat(oldType.name, ".")
      });
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
  return schemaChanges;
}
function findEnumTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var valuesDiff = diff(oldType.getValues(), newType.getValues());
  var _iterator13 = _createForOfIteratorHelper(valuesDiff.added),
    _step13;
  try {
    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      var newValue = _step13.value;
      schemaChanges.push({
        type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
        description: "".concat(newValue.name, " was added to enum type ").concat(oldType.name, ".")
      });
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }
  var _iterator14 = _createForOfIteratorHelper(valuesDiff.removed),
    _step14;
  try {
    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
      var oldValue = _step14.value;
      schemaChanges.push({
        type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
        description: "".concat(oldValue.name, " was removed from enum type ").concat(oldType.name, ".")
      });
    }
  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }
  return schemaChanges;
}
function findImplementedInterfacesChanges(oldType, newType) {
  var schemaChanges = [];
  var interfacesDiff = diff(oldType.getInterfaces(), newType.getInterfaces());
  var _iterator15 = _createForOfIteratorHelper(interfacesDiff.added),
    _step15;
  try {
    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
      var newInterface = _step15.value;
      schemaChanges.push({
        type: DangerousChangeType.IMPLEMENTED_INTERFACE_ADDED,
        description: "".concat(newInterface.name, " added to interfaces implemented by ").concat(oldType.name, ".")
      });
    }
  } catch (err) {
    _iterator15.e(err);
  } finally {
    _iterator15.f();
  }
  var _iterator16 = _createForOfIteratorHelper(interfacesDiff.removed),
    _step16;
  try {
    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
      var oldInterface = _step16.value;
      schemaChanges.push({
        type: BreakingChangeType.IMPLEMENTED_INTERFACE_REMOVED,
        description: "".concat(oldType.name, " no longer implements interface ").concat(oldInterface.name, ".")
      });
    }
  } catch (err) {
    _iterator16.e(err);
  } finally {
    _iterator16.f();
  }
  return schemaChanges;
}
function findFieldChanges(oldType, newType) {
  var schemaChanges = [];
  var fieldsDiff = diff(Object.values(oldType.getFields()), Object.values(newType.getFields()));
  var _iterator17 = _createForOfIteratorHelper(fieldsDiff.removed),
    _step17;
  try {
    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
      var oldField = _step17.value;
      schemaChanges.push({
        type: BreakingChangeType.FIELD_REMOVED,
        description: "".concat(oldType.name, ".").concat(oldField.name, " was removed.")
      });
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
  }
  var _iterator18 = _createForOfIteratorHelper(fieldsDiff.persisted),
    _step18;
  try {
    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
      var _step18$value = _slicedToArray(_step18.value, 2),
        _oldField2 = _step18$value[0],
        newField = _step18$value[1];
      schemaChanges.push.apply(schemaChanges, _toConsumableArray(findArgChanges(oldType, _oldField2, newField)));
      var isSafe = isChangeSafeForObjectOrInterfaceField(_oldField2.type, newField.type);
      if (!isSafe) {
        schemaChanges.push({
          type: BreakingChangeType.FIELD_CHANGED_KIND,
          description: "".concat(oldType.name, ".").concat(_oldField2.name, " changed type from ") + "".concat(String(_oldField2.type), " to ").concat(String(newField.type), ".")
        });
      }
    }
  } catch (err) {
    _iterator18.e(err);
  } finally {
    _iterator18.f();
  }
  return schemaChanges;
}
function findArgChanges(oldType, oldField, newField) {
  var schemaChanges = [];
  var argsDiff = diff(oldField.args, newField.args);
  var _iterator19 = _createForOfIteratorHelper(argsDiff.removed),
    _step19;
  try {
    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
      var oldArg = _step19.value;
      schemaChanges.push({
        type: BreakingChangeType.ARG_REMOVED,
        description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(oldArg.name, " was removed.")
      });
    }
  } catch (err) {
    _iterator19.e(err);
  } finally {
    _iterator19.f();
  }
  var _iterator20 = _createForOfIteratorHelper(argsDiff.persisted),
    _step20;
  try {
    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
      var _step20$value = _slicedToArray(_step20.value, 2),
        _oldArg = _step20$value[0],
        newArg = _step20$value[1];
      var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(_oldArg.type, newArg.type);
      if (!isSafe) {
        schemaChanges.push({
          type: BreakingChangeType.ARG_CHANGED_KIND,
          description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " has changed type from ") + "".concat(String(_oldArg.type), " to ").concat(String(newArg.type), ".")
        });
      } else if (_oldArg.defaultValue !== undefined) {
        if (newArg.defaultValue === undefined) {
          schemaChanges.push({
            type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
            description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " defaultValue was removed.")
          });
        } else {
          // Since we looking only for client's observable changes we should
          // compare default values in the same representation as they are
          // represented inside introspection.
          var oldValueStr = stringifyValue(_oldArg.defaultValue, _oldArg.type);
          var newValueStr = stringifyValue(newArg.defaultValue, newArg.type);
          if (oldValueStr !== newValueStr) {
            schemaChanges.push({
              type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
              description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " has changed defaultValue from ").concat(oldValueStr, " to ").concat(newValueStr, ".")
            });
          }
        }
      }
    }
  } catch (err) {
    _iterator20.e(err);
  } finally {
    _iterator20.f();
  }
  var _iterator21 = _createForOfIteratorHelper(argsDiff.added),
    _step21;
  try {
    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
      var _newArg = _step21.value;
      if ((0, _definition.isRequiredArgument)(_newArg)) {
        schemaChanges.push({
          type: BreakingChangeType.REQUIRED_ARG_ADDED,
          description: "A required arg ".concat(_newArg.name, " on ").concat(oldType.name, ".").concat(oldField.name, " was added.")
        });
      } else {
        schemaChanges.push({
          type: DangerousChangeType.OPTIONAL_ARG_ADDED,
          description: "An optional arg ".concat(_newArg.name, " on ").concat(oldType.name, ".").concat(oldField.name, " was added.")
        });
      }
    }
  } catch (err) {
    _iterator21.e(err);
  } finally {
    _iterator21.f();
  }
  return schemaChanges;
}
function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
  if ((0, _definition.isListType)(oldType)) {
    return (
      // if they're both lists, make sure the underlying types are compatible
      (0, _definition.isListType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) ||
      // moving from nullable to non-null of the same underlying type is safe
      (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
    );
  }
  if ((0, _definition.isNonNullType)(oldType)) {
    // if they're both non-null, make sure the underlying types are compatible
    return (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
  }
  return (
    // if they're both named types, see if their names are equivalent
    (0, _definition.isNamedType)(newType) && oldType.name === newType.name ||
    // moving from nullable to non-null of the same underlying type is safe
    (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
  );
}
function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
  if ((0, _definition.isListType)(oldType)) {
    // if they're both lists, make sure the underlying types are compatible
    return (0, _definition.isListType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
  }
  if ((0, _definition.isNonNullType)(oldType)) {
    return (
      // if they're both non-null, make sure the underlying types are
      // compatible
      (0, _definition.isNonNullType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) ||
      // moving from non-null to nullable of the same underlying type is safe
      !(0, _definition.isNonNullType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType)
    );
  } // if they're both named types, see if their names are equivalent

  return (0, _definition.isNamedType)(newType) && oldType.name === newType.name;
}
function typeKindName(type) {
  if ((0, _definition.isScalarType)(type)) {
    return 'a Scalar type';
  }
  if ((0, _definition.isObjectType)(type)) {
    return 'an Object type';
  }
  if ((0, _definition.isInterfaceType)(type)) {
    return 'an Interface type';
  }
  if ((0, _definition.isUnionType)(type)) {
    return 'a Union type';
  }
  if ((0, _definition.isEnumType)(type)) {
    return 'an Enum type';
  }
  if ((0, _definition.isInputObjectType)(type)) {
    return 'an Input type';
  }
  /* c8 ignore next 3 */
  // Not reachable, all possible types have been considered.

  false || (0, _invariant.invariant)(false, 'Unexpected type: ' + (0, _inspect.inspect)(type));
}
function stringifyValue(value, type) {
  var ast = (0, _astFromValue.astFromValue)(value, type);
  ast != null || (0, _invariant.invariant)(false);
  return (0, _printer.print)((0, _sortValueNode.sortValueNode)(ast));
}
function diff(oldArray, newArray) {
  var added = [];
  var removed = [];
  var persisted = [];
  var oldMap = (0, _keyMap.keyMap)(oldArray, function (_ref) {
    var name = _ref.name;
    return name;
  });
  var newMap = (0, _keyMap.keyMap)(newArray, function (_ref2) {
    var name = _ref2.name;
    return name;
  });
  var _iterator22 = _createForOfIteratorHelper(oldArray),
    _step22;
  try {
    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
      var oldItem = _step22.value;
      var newItem = newMap[oldItem.name];
      if (newItem === undefined) {
        removed.push(oldItem);
      } else {
        persisted.push([oldItem, newItem]);
      }
    }
  } catch (err) {
    _iterator22.e(err);
  } finally {
    _iterator22.f();
  }
  var _iterator23 = _createForOfIteratorHelper(newArray),
    _step23;
  try {
    for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
      var _newItem = _step23.value;
      if (oldMap[_newItem.name] === undefined) {
        added.push(_newItem);
      }
    }
  } catch (err) {
    _iterator23.e(err);
  } finally {
    _iterator23.f();
  }
  return {
    added: added,
    persisted: persisted,
    removed: removed
  };
}
},{"../jsutils/inspect.mjs":"../node_modules/graphql/jsutils/inspect.mjs","../jsutils/invariant.mjs":"../node_modules/graphql/jsutils/invariant.mjs","../jsutils/keyMap.mjs":"../node_modules/graphql/jsutils/keyMap.mjs","../language/printer.mjs":"../node_modules/graphql/language/printer.mjs","../type/definition.mjs":"../node_modules/graphql/type/definition.mjs","../type/scalars.mjs":"../node_modules/graphql/type/scalars.mjs","./astFromValue.mjs":"../node_modules/graphql/utilities/astFromValue.mjs","./sortValueNode.mjs":"../node_modules/graphql/utilities/sortValueNode.mjs"}],"../node_modules/graphql/utilities/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BreakingChangeType", {
  enumerable: true,
  get: function () {
    return _findBreakingChanges.BreakingChangeType;
  }
});
Object.defineProperty(exports, "DangerousChangeType", {
  enumerable: true,
  get: function () {
    return _findBreakingChanges.DangerousChangeType;
  }
});
Object.defineProperty(exports, "TypeInfo", {
  enumerable: true,
  get: function () {
    return _TypeInfo.TypeInfo;
  }
});
Object.defineProperty(exports, "assertValidName", {
  enumerable: true,
  get: function () {
    return _assertValidName.assertValidName;
  }
});
Object.defineProperty(exports, "astFromValue", {
  enumerable: true,
  get: function () {
    return _astFromValue.astFromValue;
  }
});
Object.defineProperty(exports, "buildASTSchema", {
  enumerable: true,
  get: function () {
    return _buildASTSchema.buildASTSchema;
  }
});
Object.defineProperty(exports, "buildClientSchema", {
  enumerable: true,
  get: function () {
    return _buildClientSchema.buildClientSchema;
  }
});
Object.defineProperty(exports, "buildSchema", {
  enumerable: true,
  get: function () {
    return _buildASTSchema.buildSchema;
  }
});
Object.defineProperty(exports, "coerceInputValue", {
  enumerable: true,
  get: function () {
    return _coerceInputValue.coerceInputValue;
  }
});
Object.defineProperty(exports, "concatAST", {
  enumerable: true,
  get: function () {
    return _concatAST.concatAST;
  }
});
Object.defineProperty(exports, "doTypesOverlap", {
  enumerable: true,
  get: function () {
    return _typeComparators.doTypesOverlap;
  }
});
Object.defineProperty(exports, "extendSchema", {
  enumerable: true,
  get: function () {
    return _extendSchema.extendSchema;
  }
});
Object.defineProperty(exports, "findBreakingChanges", {
  enumerable: true,
  get: function () {
    return _findBreakingChanges.findBreakingChanges;
  }
});
Object.defineProperty(exports, "findDangerousChanges", {
  enumerable: true,
  get: function () {
    return _findBreakingChanges.findDangerousChanges;
  }
});
Object.defineProperty(exports, "getIntrospectionQuery", {
  enumerable: true,
  get: function () {
    return _getIntrospectionQuery.getIntrospectionQuery;
  }
});
Object.defineProperty(exports, "getOperationAST", {
  enumerable: true,
  get: function () {
    return _getOperationAST.getOperationAST;
  }
});
Object.defineProperty(exports, "getOperationRootType", {
  enumerable: true,
  get: function () {
    return _getOperationRootType.getOperationRootType;
  }
});
Object.defineProperty(exports, "introspectionFromSchema", {
  enumerable: true,
  get: function () {
    return _introspectionFromSchema.introspectionFromSchema;
  }
});
Object.defineProperty(exports, "isEqualType", {
  enumerable: true,
  get: function () {
    return _typeComparators.isEqualType;
  }
});
Object.defineProperty(exports, "isTypeSubTypeOf", {
  enumerable: true,
  get: function () {
    return _typeComparators.isTypeSubTypeOf;
  }
});
Object.defineProperty(exports, "isValidNameError", {
  enumerable: true,
  get: function () {
    return _assertValidName.isValidNameError;
  }
});
Object.defineProperty(exports, "lexicographicSortSchema", {
  enumerable: true,
  get: function () {
    return _lexicographicSortSchema.lexicographicSortSchema;
  }
});
Object.defineProperty(exports, "printIntrospectionSchema", {
  enumerable: true,
  get: function () {
    return _printSchema.printIntrospectionSchema;
  }
});
Object.defineProperty(exports, "printSchema", {
  enumerable: true,
  get: function () {
    return _printSchema.printSchema;
  }
});
Object.defineProperty(exports, "printType", {
  enumerable: true,
  get: function () {
    return _printSchema.printType;
  }
});
Object.defineProperty(exports, "separateOperations", {
  enumerable: true,
  get: function () {
    return _separateOperations.separateOperations;
  }
});
Object.defineProperty(exports, "stripIgnoredCharacters", {
  enumerable: true,
  get: function () {
    return _stripIgnoredCharacters.stripIgnoredCharacters;
  }
});
Object.defineProperty(exports, "typeFromAST", {
  enumerable: true,
  get: function () {
    return _typeFromAST.typeFromAST;
  }
});
Object.defineProperty(exports, "valueFromAST", {
  enumerable: true,
  get: function () {
    return _valueFromAST.valueFromAST;
  }
});
Object.defineProperty(exports, "valueFromASTUntyped", {
  enumerable: true,
  get: function () {
    return _valueFromASTUntyped.valueFromASTUntyped;
  }
});
Object.defineProperty(exports, "visitWithTypeInfo", {
  enumerable: true,
  get: function () {
    return _TypeInfo.visitWithTypeInfo;
  }
});
var _getIntrospectionQuery = require("./getIntrospectionQuery.mjs");
var _getOperationAST = require("./getOperationAST.mjs");
var _getOperationRootType = require("./getOperationRootType.mjs");
var _introspectionFromSchema = require("./introspectionFromSchema.mjs");
var _buildClientSchema = require("./buildClientSchema.mjs");
var _buildASTSchema = require("./buildASTSchema.mjs");
var _extendSchema = require("./extendSchema.mjs");
var _lexicographicSortSchema = require("./lexicographicSortSchema.mjs");
var _printSchema = require("./printSchema.mjs");
var _typeFromAST = require("./typeFromAST.mjs");
var _valueFromAST = require("./valueFromAST.mjs");
var _valueFromASTUntyped = require("./valueFromASTUntyped.mjs");
var _astFromValue = require("./astFromValue.mjs");
var _TypeInfo = require("./TypeInfo.mjs");
var _coerceInputValue = require("./coerceInputValue.mjs");
var _concatAST = require("./concatAST.mjs");
var _separateOperations = require("./separateOperations.mjs");
var _stripIgnoredCharacters = require("./stripIgnoredCharacters.mjs");
var _typeComparators = require("./typeComparators.mjs");
var _assertValidName = require("./assertValidName.mjs");
var _findBreakingChanges = require("./findBreakingChanges.mjs");
},{"./getIntrospectionQuery.mjs":"../node_modules/graphql/utilities/getIntrospectionQuery.mjs","./getOperationAST.mjs":"../node_modules/graphql/utilities/getOperationAST.mjs","./getOperationRootType.mjs":"../node_modules/graphql/utilities/getOperationRootType.mjs","./introspectionFromSchema.mjs":"../node_modules/graphql/utilities/introspectionFromSchema.mjs","./buildClientSchema.mjs":"../node_modules/graphql/utilities/buildClientSchema.mjs","./buildASTSchema.mjs":"../node_modules/graphql/utilities/buildASTSchema.mjs","./extendSchema.mjs":"../node_modules/graphql/utilities/extendSchema.mjs","./lexicographicSortSchema.mjs":"../node_modules/graphql/utilities/lexicographicSortSchema.mjs","./printSchema.mjs":"../node_modules/graphql/utilities/printSchema.mjs","./typeFromAST.mjs":"../node_modules/graphql/utilities/typeFromAST.mjs","./valueFromAST.mjs":"../node_modules/graphql/utilities/valueFromAST.mjs","./valueFromASTUntyped.mjs":"../node_modules/graphql/utilities/valueFromASTUntyped.mjs","./astFromValue.mjs":"../node_modules/graphql/utilities/astFromValue.mjs","./TypeInfo.mjs":"../node_modules/graphql/utilities/TypeInfo.mjs","./coerceInputValue.mjs":"../node_modules/graphql/utilities/coerceInputValue.mjs","./concatAST.mjs":"../node_modules/graphql/utilities/concatAST.mjs","./separateOperations.mjs":"../node_modules/graphql/utilities/separateOperations.mjs","./stripIgnoredCharacters.mjs":"../node_modules/graphql/utilities/stripIgnoredCharacters.mjs","./typeComparators.mjs":"../node_modules/graphql/utilities/typeComparators.mjs","./assertValidName.mjs":"../node_modules/graphql/utilities/assertValidName.mjs","./findBreakingChanges.mjs":"../node_modules/graphql/utilities/findBreakingChanges.mjs"}],"../node_modules/graphql/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BREAK", {
  enumerable: true,
  get: function () {
    return _index2.BREAK;
  }
});
Object.defineProperty(exports, "BreakingChangeType", {
  enumerable: true,
  get: function () {
    return _index6.BreakingChangeType;
  }
});
Object.defineProperty(exports, "DEFAULT_DEPRECATION_REASON", {
  enumerable: true,
  get: function () {
    return _index.DEFAULT_DEPRECATION_REASON;
  }
});
Object.defineProperty(exports, "DangerousChangeType", {
  enumerable: true,
  get: function () {
    return _index6.DangerousChangeType;
  }
});
Object.defineProperty(exports, "DirectiveLocation", {
  enumerable: true,
  get: function () {
    return _index2.DirectiveLocation;
  }
});
Object.defineProperty(exports, "ExecutableDefinitionsRule", {
  enumerable: true,
  get: function () {
    return _index4.ExecutableDefinitionsRule;
  }
});
Object.defineProperty(exports, "FieldsOnCorrectTypeRule", {
  enumerable: true,
  get: function () {
    return _index4.FieldsOnCorrectTypeRule;
  }
});
Object.defineProperty(exports, "FragmentsOnCompositeTypesRule", {
  enumerable: true,
  get: function () {
    return _index4.FragmentsOnCompositeTypesRule;
  }
});
Object.defineProperty(exports, "GRAPHQL_MAX_INT", {
  enumerable: true,
  get: function () {
    return _index.GRAPHQL_MAX_INT;
  }
});
Object.defineProperty(exports, "GRAPHQL_MIN_INT", {
  enumerable: true,
  get: function () {
    return _index.GRAPHQL_MIN_INT;
  }
});
Object.defineProperty(exports, "GraphQLBoolean", {
  enumerable: true,
  get: function () {
    return _index.GraphQLBoolean;
  }
});
Object.defineProperty(exports, "GraphQLDeprecatedDirective", {
  enumerable: true,
  get: function () {
    return _index.GraphQLDeprecatedDirective;
  }
});
Object.defineProperty(exports, "GraphQLDirective", {
  enumerable: true,
  get: function () {
    return _index.GraphQLDirective;
  }
});
Object.defineProperty(exports, "GraphQLEnumType", {
  enumerable: true,
  get: function () {
    return _index.GraphQLEnumType;
  }
});
Object.defineProperty(exports, "GraphQLError", {
  enumerable: true,
  get: function () {
    return _index5.GraphQLError;
  }
});
Object.defineProperty(exports, "GraphQLFloat", {
  enumerable: true,
  get: function () {
    return _index.GraphQLFloat;
  }
});
Object.defineProperty(exports, "GraphQLID", {
  enumerable: true,
  get: function () {
    return _index.GraphQLID;
  }
});
Object.defineProperty(exports, "GraphQLIncludeDirective", {
  enumerable: true,
  get: function () {
    return _index.GraphQLIncludeDirective;
  }
});
Object.defineProperty(exports, "GraphQLInputObjectType", {
  enumerable: true,
  get: function () {
    return _index.GraphQLInputObjectType;
  }
});
Object.defineProperty(exports, "GraphQLInt", {
  enumerable: true,
  get: function () {
    return _index.GraphQLInt;
  }
});
Object.defineProperty(exports, "GraphQLInterfaceType", {
  enumerable: true,
  get: function () {
    return _index.GraphQLInterfaceType;
  }
});
Object.defineProperty(exports, "GraphQLList", {
  enumerable: true,
  get: function () {
    return _index.GraphQLList;
  }
});
Object.defineProperty(exports, "GraphQLNonNull", {
  enumerable: true,
  get: function () {
    return _index.GraphQLNonNull;
  }
});
Object.defineProperty(exports, "GraphQLObjectType", {
  enumerable: true,
  get: function () {
    return _index.GraphQLObjectType;
  }
});
Object.defineProperty(exports, "GraphQLScalarType", {
  enumerable: true,
  get: function () {
    return _index.GraphQLScalarType;
  }
});
Object.defineProperty(exports, "GraphQLSchema", {
  enumerable: true,
  get: function () {
    return _index.GraphQLSchema;
  }
});
Object.defineProperty(exports, "GraphQLSkipDirective", {
  enumerable: true,
  get: function () {
    return _index.GraphQLSkipDirective;
  }
});
Object.defineProperty(exports, "GraphQLSpecifiedByDirective", {
  enumerable: true,
  get: function () {
    return _index.GraphQLSpecifiedByDirective;
  }
});
Object.defineProperty(exports, "GraphQLString", {
  enumerable: true,
  get: function () {
    return _index.GraphQLString;
  }
});
Object.defineProperty(exports, "GraphQLUnionType", {
  enumerable: true,
  get: function () {
    return _index.GraphQLUnionType;
  }
});
Object.defineProperty(exports, "Kind", {
  enumerable: true,
  get: function () {
    return _index2.Kind;
  }
});
Object.defineProperty(exports, "KnownArgumentNamesRule", {
  enumerable: true,
  get: function () {
    return _index4.KnownArgumentNamesRule;
  }
});
Object.defineProperty(exports, "KnownDirectivesRule", {
  enumerable: true,
  get: function () {
    return _index4.KnownDirectivesRule;
  }
});
Object.defineProperty(exports, "KnownFragmentNamesRule", {
  enumerable: true,
  get: function () {
    return _index4.KnownFragmentNamesRule;
  }
});
Object.defineProperty(exports, "KnownTypeNamesRule", {
  enumerable: true,
  get: function () {
    return _index4.KnownTypeNamesRule;
  }
});
Object.defineProperty(exports, "Lexer", {
  enumerable: true,
  get: function () {
    return _index2.Lexer;
  }
});
Object.defineProperty(exports, "Location", {
  enumerable: true,
  get: function () {
    return _index2.Location;
  }
});
Object.defineProperty(exports, "LoneAnonymousOperationRule", {
  enumerable: true,
  get: function () {
    return _index4.LoneAnonymousOperationRule;
  }
});
Object.defineProperty(exports, "LoneSchemaDefinitionRule", {
  enumerable: true,
  get: function () {
    return _index4.LoneSchemaDefinitionRule;
  }
});
Object.defineProperty(exports, "NoDeprecatedCustomRule", {
  enumerable: true,
  get: function () {
    return _index4.NoDeprecatedCustomRule;
  }
});
Object.defineProperty(exports, "NoFragmentCyclesRule", {
  enumerable: true,
  get: function () {
    return _index4.NoFragmentCyclesRule;
  }
});
Object.defineProperty(exports, "NoSchemaIntrospectionCustomRule", {
  enumerable: true,
  get: function () {
    return _index4.NoSchemaIntrospectionCustomRule;
  }
});
Object.defineProperty(exports, "NoUndefinedVariablesRule", {
  enumerable: true,
  get: function () {
    return _index4.NoUndefinedVariablesRule;
  }
});
Object.defineProperty(exports, "NoUnusedFragmentsRule", {
  enumerable: true,
  get: function () {
    return _index4.NoUnusedFragmentsRule;
  }
});
Object.defineProperty(exports, "NoUnusedVariablesRule", {
  enumerable: true,
  get: function () {
    return _index4.NoUnusedVariablesRule;
  }
});
Object.defineProperty(exports, "OperationTypeNode", {
  enumerable: true,
  get: function () {
    return _index2.OperationTypeNode;
  }
});
Object.defineProperty(exports, "OverlappingFieldsCanBeMergedRule", {
  enumerable: true,
  get: function () {
    return _index4.OverlappingFieldsCanBeMergedRule;
  }
});
Object.defineProperty(exports, "PossibleFragmentSpreadsRule", {
  enumerable: true,
  get: function () {
    return _index4.PossibleFragmentSpreadsRule;
  }
});
Object.defineProperty(exports, "PossibleTypeExtensionsRule", {
  enumerable: true,
  get: function () {
    return _index4.PossibleTypeExtensionsRule;
  }
});
Object.defineProperty(exports, "ProvidedRequiredArgumentsRule", {
  enumerable: true,
  get: function () {
    return _index4.ProvidedRequiredArgumentsRule;
  }
});
Object.defineProperty(exports, "ScalarLeafsRule", {
  enumerable: true,
  get: function () {
    return _index4.ScalarLeafsRule;
  }
});
Object.defineProperty(exports, "SchemaMetaFieldDef", {
  enumerable: true,
  get: function () {
    return _index.SchemaMetaFieldDef;
  }
});
Object.defineProperty(exports, "SingleFieldSubscriptionsRule", {
  enumerable: true,
  get: function () {
    return _index4.SingleFieldSubscriptionsRule;
  }
});
Object.defineProperty(exports, "Source", {
  enumerable: true,
  get: function () {
    return _index2.Source;
  }
});
Object.defineProperty(exports, "Token", {
  enumerable: true,
  get: function () {
    return _index2.Token;
  }
});
Object.defineProperty(exports, "TokenKind", {
  enumerable: true,
  get: function () {
    return _index2.TokenKind;
  }
});
Object.defineProperty(exports, "TypeInfo", {
  enumerable: true,
  get: function () {
    return _index6.TypeInfo;
  }
});
Object.defineProperty(exports, "TypeKind", {
  enumerable: true,
  get: function () {
    return _index.TypeKind;
  }
});
Object.defineProperty(exports, "TypeMetaFieldDef", {
  enumerable: true,
  get: function () {
    return _index.TypeMetaFieldDef;
  }
});
Object.defineProperty(exports, "TypeNameMetaFieldDef", {
  enumerable: true,
  get: function () {
    return _index.TypeNameMetaFieldDef;
  }
});
Object.defineProperty(exports, "UniqueArgumentDefinitionNamesRule", {
  enumerable: true,
  get: function () {
    return _index4.UniqueArgumentDefinitionNamesRule;
  }
});
Object.defineProperty(exports, "UniqueArgumentNamesRule", {
  enumerable: true,
  get: function () {
    return _index4.UniqueArgumentNamesRule;
  }
});
Object.defineProperty(exports, "UniqueDirectiveNamesRule", {
  enumerable: true,
  get: function () {
    return _index4.UniqueDirectiveNamesRule;
  }
});
Object.defineProperty(exports, "UniqueDirectivesPerLocationRule", {
  enumerable: true,
  get: function () {
    return _index4.UniqueDirectivesPerLocationRule;
  }
});
Object.defineProperty(exports, "UniqueEnumValueNamesRule", {
  enumerable: true,
  get: function () {
    return _index4.UniqueEnumValueNamesRule;
  }
});
Object.defineProperty(exports, "UniqueFieldDefinitionNamesRule", {
  enumerable: true,
  get: function () {
    return _index4.UniqueFieldDefinitionNamesRule;
  }
});
Object.defineProperty(exports, "UniqueFragmentNamesRule", {
  enumerable: true,
  get: function () {
    return _index4.UniqueFragmentNamesRule;
  }
});
Object.defineProperty(exports, "UniqueInputFieldNamesRule", {
  enumerable: true,
  get: function () {
    return _index4.UniqueInputFieldNamesRule;
  }
});
Object.defineProperty(exports, "UniqueOperationNamesRule", {
  enumerable: true,
  get: function () {
    return _index4.UniqueOperationNamesRule;
  }
});
Object.defineProperty(exports, "UniqueOperationTypesRule", {
  enumerable: true,
  get: function () {
    return _index4.UniqueOperationTypesRule;
  }
});
Object.defineProperty(exports, "UniqueTypeNamesRule", {
  enumerable: true,
  get: function () {
    return _index4.UniqueTypeNamesRule;
  }
});
Object.defineProperty(exports, "UniqueVariableNamesRule", {
  enumerable: true,
  get: function () {
    return _index4.UniqueVariableNamesRule;
  }
});
Object.defineProperty(exports, "ValidationContext", {
  enumerable: true,
  get: function () {
    return _index4.ValidationContext;
  }
});
Object.defineProperty(exports, "ValuesOfCorrectTypeRule", {
  enumerable: true,
  get: function () {
    return _index4.ValuesOfCorrectTypeRule;
  }
});
Object.defineProperty(exports, "VariablesAreInputTypesRule", {
  enumerable: true,
  get: function () {
    return _index4.VariablesAreInputTypesRule;
  }
});
Object.defineProperty(exports, "VariablesInAllowedPositionRule", {
  enumerable: true,
  get: function () {
    return _index4.VariablesInAllowedPositionRule;
  }
});
Object.defineProperty(exports, "__Directive", {
  enumerable: true,
  get: function () {
    return _index.__Directive;
  }
});
Object.defineProperty(exports, "__DirectiveLocation", {
  enumerable: true,
  get: function () {
    return _index.__DirectiveLocation;
  }
});
Object.defineProperty(exports, "__EnumValue", {
  enumerable: true,
  get: function () {
    return _index.__EnumValue;
  }
});
Object.defineProperty(exports, "__Field", {
  enumerable: true,
  get: function () {
    return _index.__Field;
  }
});
Object.defineProperty(exports, "__InputValue", {
  enumerable: true,
  get: function () {
    return _index.__InputValue;
  }
});
Object.defineProperty(exports, "__Schema", {
  enumerable: true,
  get: function () {
    return _index.__Schema;
  }
});
Object.defineProperty(exports, "__Type", {
  enumerable: true,
  get: function () {
    return _index.__Type;
  }
});
Object.defineProperty(exports, "__TypeKind", {
  enumerable: true,
  get: function () {
    return _index.__TypeKind;
  }
});
Object.defineProperty(exports, "assertAbstractType", {
  enumerable: true,
  get: function () {
    return _index.assertAbstractType;
  }
});
Object.defineProperty(exports, "assertCompositeType", {
  enumerable: true,
  get: function () {
    return _index.assertCompositeType;
  }
});
Object.defineProperty(exports, "assertDirective", {
  enumerable: true,
  get: function () {
    return _index.assertDirective;
  }
});
Object.defineProperty(exports, "assertEnumType", {
  enumerable: true,
  get: function () {
    return _index.assertEnumType;
  }
});
Object.defineProperty(exports, "assertEnumValueName", {
  enumerable: true,
  get: function () {
    return _index.assertEnumValueName;
  }
});
Object.defineProperty(exports, "assertInputObjectType", {
  enumerable: true,
  get: function () {
    return _index.assertInputObjectType;
  }
});
Object.defineProperty(exports, "assertInputType", {
  enumerable: true,
  get: function () {
    return _index.assertInputType;
  }
});
Object.defineProperty(exports, "assertInterfaceType", {
  enumerable: true,
  get: function () {
    return _index.assertInterfaceType;
  }
});
Object.defineProperty(exports, "assertLeafType", {
  enumerable: true,
  get: function () {
    return _index.assertLeafType;
  }
});
Object.defineProperty(exports, "assertListType", {
  enumerable: true,
  get: function () {
    return _index.assertListType;
  }
});
Object.defineProperty(exports, "assertName", {
  enumerable: true,
  get: function () {
    return _index.assertName;
  }
});
Object.defineProperty(exports, "assertNamedType", {
  enumerable: true,
  get: function () {
    return _index.assertNamedType;
  }
});
Object.defineProperty(exports, "assertNonNullType", {
  enumerable: true,
  get: function () {
    return _index.assertNonNullType;
  }
});
Object.defineProperty(exports, "assertNullableType", {
  enumerable: true,
  get: function () {
    return _index.assertNullableType;
  }
});
Object.defineProperty(exports, "assertObjectType", {
  enumerable: true,
  get: function () {
    return _index.assertObjectType;
  }
});
Object.defineProperty(exports, "assertOutputType", {
  enumerable: true,
  get: function () {
    return _index.assertOutputType;
  }
});
Object.defineProperty(exports, "assertScalarType", {
  enumerable: true,
  get: function () {
    return _index.assertScalarType;
  }
});
Object.defineProperty(exports, "assertSchema", {
  enumerable: true,
  get: function () {
    return _index.assertSchema;
  }
});
Object.defineProperty(exports, "assertType", {
  enumerable: true,
  get: function () {
    return _index.assertType;
  }
});
Object.defineProperty(exports, "assertUnionType", {
  enumerable: true,
  get: function () {
    return _index.assertUnionType;
  }
});
Object.defineProperty(exports, "assertValidName", {
  enumerable: true,
  get: function () {
    return _index6.assertValidName;
  }
});
Object.defineProperty(exports, "assertValidSchema", {
  enumerable: true,
  get: function () {
    return _index.assertValidSchema;
  }
});
Object.defineProperty(exports, "assertWrappingType", {
  enumerable: true,
  get: function () {
    return _index.assertWrappingType;
  }
});
Object.defineProperty(exports, "astFromValue", {
  enumerable: true,
  get: function () {
    return _index6.astFromValue;
  }
});
Object.defineProperty(exports, "buildASTSchema", {
  enumerable: true,
  get: function () {
    return _index6.buildASTSchema;
  }
});
Object.defineProperty(exports, "buildClientSchema", {
  enumerable: true,
  get: function () {
    return _index6.buildClientSchema;
  }
});
Object.defineProperty(exports, "buildSchema", {
  enumerable: true,
  get: function () {
    return _index6.buildSchema;
  }
});
Object.defineProperty(exports, "coerceInputValue", {
  enumerable: true,
  get: function () {
    return _index6.coerceInputValue;
  }
});
Object.defineProperty(exports, "concatAST", {
  enumerable: true,
  get: function () {
    return _index6.concatAST;
  }
});
Object.defineProperty(exports, "createSourceEventStream", {
  enumerable: true,
  get: function () {
    return _index3.createSourceEventStream;
  }
});
Object.defineProperty(exports, "defaultFieldResolver", {
  enumerable: true,
  get: function () {
    return _index3.defaultFieldResolver;
  }
});
Object.defineProperty(exports, "defaultTypeResolver", {
  enumerable: true,
  get: function () {
    return _index3.defaultTypeResolver;
  }
});
Object.defineProperty(exports, "doTypesOverlap", {
  enumerable: true,
  get: function () {
    return _index6.doTypesOverlap;
  }
});
Object.defineProperty(exports, "execute", {
  enumerable: true,
  get: function () {
    return _index3.execute;
  }
});
Object.defineProperty(exports, "executeSync", {
  enumerable: true,
  get: function () {
    return _index3.executeSync;
  }
});
Object.defineProperty(exports, "extendSchema", {
  enumerable: true,
  get: function () {
    return _index6.extendSchema;
  }
});
Object.defineProperty(exports, "findBreakingChanges", {
  enumerable: true,
  get: function () {
    return _index6.findBreakingChanges;
  }
});
Object.defineProperty(exports, "findDangerousChanges", {
  enumerable: true,
  get: function () {
    return _index6.findDangerousChanges;
  }
});
Object.defineProperty(exports, "formatError", {
  enumerable: true,
  get: function () {
    return _index5.formatError;
  }
});
Object.defineProperty(exports, "getArgumentValues", {
  enumerable: true,
  get: function () {
    return _index3.getArgumentValues;
  }
});
Object.defineProperty(exports, "getDirectiveValues", {
  enumerable: true,
  get: function () {
    return _index3.getDirectiveValues;
  }
});
Object.defineProperty(exports, "getEnterLeaveForKind", {
  enumerable: true,
  get: function () {
    return _index2.getEnterLeaveForKind;
  }
});
Object.defineProperty(exports, "getIntrospectionQuery", {
  enumerable: true,
  get: function () {
    return _index6.getIntrospectionQuery;
  }
});
Object.defineProperty(exports, "getLocation", {
  enumerable: true,
  get: function () {
    return _index2.getLocation;
  }
});
Object.defineProperty(exports, "getNamedType", {
  enumerable: true,
  get: function () {
    return _index.getNamedType;
  }
});
Object.defineProperty(exports, "getNullableType", {
  enumerable: true,
  get: function () {
    return _index.getNullableType;
  }
});
Object.defineProperty(exports, "getOperationAST", {
  enumerable: true,
  get: function () {
    return _index6.getOperationAST;
  }
});
Object.defineProperty(exports, "getOperationRootType", {
  enumerable: true,
  get: function () {
    return _index6.getOperationRootType;
  }
});
Object.defineProperty(exports, "getVariableValues", {
  enumerable: true,
  get: function () {
    return _index3.getVariableValues;
  }
});
Object.defineProperty(exports, "getVisitFn", {
  enumerable: true,
  get: function () {
    return _index2.getVisitFn;
  }
});
Object.defineProperty(exports, "graphql", {
  enumerable: true,
  get: function () {
    return _graphql.graphql;
  }
});
Object.defineProperty(exports, "graphqlSync", {
  enumerable: true,
  get: function () {
    return _graphql.graphqlSync;
  }
});
Object.defineProperty(exports, "introspectionFromSchema", {
  enumerable: true,
  get: function () {
    return _index6.introspectionFromSchema;
  }
});
Object.defineProperty(exports, "introspectionTypes", {
  enumerable: true,
  get: function () {
    return _index.introspectionTypes;
  }
});
Object.defineProperty(exports, "isAbstractType", {
  enumerable: true,
  get: function () {
    return _index.isAbstractType;
  }
});
Object.defineProperty(exports, "isCompositeType", {
  enumerable: true,
  get: function () {
    return _index.isCompositeType;
  }
});
Object.defineProperty(exports, "isConstValueNode", {
  enumerable: true,
  get: function () {
    return _index2.isConstValueNode;
  }
});
Object.defineProperty(exports, "isDefinitionNode", {
  enumerable: true,
  get: function () {
    return _index2.isDefinitionNode;
  }
});
Object.defineProperty(exports, "isDirective", {
  enumerable: true,
  get: function () {
    return _index.isDirective;
  }
});
Object.defineProperty(exports, "isEnumType", {
  enumerable: true,
  get: function () {
    return _index.isEnumType;
  }
});
Object.defineProperty(exports, "isEqualType", {
  enumerable: true,
  get: function () {
    return _index6.isEqualType;
  }
});
Object.defineProperty(exports, "isExecutableDefinitionNode", {
  enumerable: true,
  get: function () {
    return _index2.isExecutableDefinitionNode;
  }
});
Object.defineProperty(exports, "isInputObjectType", {
  enumerable: true,
  get: function () {
    return _index.isInputObjectType;
  }
});
Object.defineProperty(exports, "isInputType", {
  enumerable: true,
  get: function () {
    return _index.isInputType;
  }
});
Object.defineProperty(exports, "isInterfaceType", {
  enumerable: true,
  get: function () {
    return _index.isInterfaceType;
  }
});
Object.defineProperty(exports, "isIntrospectionType", {
  enumerable: true,
  get: function () {
    return _index.isIntrospectionType;
  }
});
Object.defineProperty(exports, "isLeafType", {
  enumerable: true,
  get: function () {
    return _index.isLeafType;
  }
});
Object.defineProperty(exports, "isListType", {
  enumerable: true,
  get: function () {
    return _index.isListType;
  }
});
Object.defineProperty(exports, "isNamedType", {
  enumerable: true,
  get: function () {
    return _index.isNamedType;
  }
});
Object.defineProperty(exports, "isNonNullType", {
  enumerable: true,
  get: function () {
    return _index.isNonNullType;
  }
});
Object.defineProperty(exports, "isNullableType", {
  enumerable: true,
  get: function () {
    return _index.isNullableType;
  }
});
Object.defineProperty(exports, "isObjectType", {
  enumerable: true,
  get: function () {
    return _index.isObjectType;
  }
});
Object.defineProperty(exports, "isOutputType", {
  enumerable: true,
  get: function () {
    return _index.isOutputType;
  }
});
Object.defineProperty(exports, "isRequiredArgument", {
  enumerable: true,
  get: function () {
    return _index.isRequiredArgument;
  }
});
Object.defineProperty(exports, "isRequiredInputField", {
  enumerable: true,
  get: function () {
    return _index.isRequiredInputField;
  }
});
Object.defineProperty(exports, "isScalarType", {
  enumerable: true,
  get: function () {
    return _index.isScalarType;
  }
});
Object.defineProperty(exports, "isSchema", {
  enumerable: true,
  get: function () {
    return _index.isSchema;
  }
});
Object.defineProperty(exports, "isSelectionNode", {
  enumerable: true,
  get: function () {
    return _index2.isSelectionNode;
  }
});
Object.defineProperty(exports, "isSpecifiedDirective", {
  enumerable: true,
  get: function () {
    return _index.isSpecifiedDirective;
  }
});
Object.defineProperty(exports, "isSpecifiedScalarType", {
  enumerable: true,
  get: function () {
    return _index.isSpecifiedScalarType;
  }
});
Object.defineProperty(exports, "isType", {
  enumerable: true,
  get: function () {
    return _index.isType;
  }
});
Object.defineProperty(exports, "isTypeDefinitionNode", {
  enumerable: true,
  get: function () {
    return _index2.isTypeDefinitionNode;
  }
});
Object.defineProperty(exports, "isTypeExtensionNode", {
  enumerable: true,
  get: function () {
    return _index2.isTypeExtensionNode;
  }
});
Object.defineProperty(exports, "isTypeNode", {
  enumerable: true,
  get: function () {
    return _index2.isTypeNode;
  }
});
Object.defineProperty(exports, "isTypeSubTypeOf", {
  enumerable: true,
  get: function () {
    return _index6.isTypeSubTypeOf;
  }
});
Object.defineProperty(exports, "isTypeSystemDefinitionNode", {
  enumerable: true,
  get: function () {
    return _index2.isTypeSystemDefinitionNode;
  }
});
Object.defineProperty(exports, "isTypeSystemExtensionNode", {
  enumerable: true,
  get: function () {
    return _index2.isTypeSystemExtensionNode;
  }
});
Object.defineProperty(exports, "isUnionType", {
  enumerable: true,
  get: function () {
    return _index.isUnionType;
  }
});
Object.defineProperty(exports, "isValidNameError", {
  enumerable: true,
  get: function () {
    return _index6.isValidNameError;
  }
});
Object.defineProperty(exports, "isValueNode", {
  enumerable: true,
  get: function () {
    return _index2.isValueNode;
  }
});
Object.defineProperty(exports, "isWrappingType", {
  enumerable: true,
  get: function () {
    return _index.isWrappingType;
  }
});
Object.defineProperty(exports, "lexicographicSortSchema", {
  enumerable: true,
  get: function () {
    return _index6.lexicographicSortSchema;
  }
});
Object.defineProperty(exports, "locatedError", {
  enumerable: true,
  get: function () {
    return _index5.locatedError;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function () {
    return _index2.parse;
  }
});
Object.defineProperty(exports, "parseConstValue", {
  enumerable: true,
  get: function () {
    return _index2.parseConstValue;
  }
});
Object.defineProperty(exports, "parseType", {
  enumerable: true,
  get: function () {
    return _index2.parseType;
  }
});
Object.defineProperty(exports, "parseValue", {
  enumerable: true,
  get: function () {
    return _index2.parseValue;
  }
});
Object.defineProperty(exports, "print", {
  enumerable: true,
  get: function () {
    return _index2.print;
  }
});
Object.defineProperty(exports, "printError", {
  enumerable: true,
  get: function () {
    return _index5.printError;
  }
});
Object.defineProperty(exports, "printIntrospectionSchema", {
  enumerable: true,
  get: function () {
    return _index6.printIntrospectionSchema;
  }
});
Object.defineProperty(exports, "printLocation", {
  enumerable: true,
  get: function () {
    return _index2.printLocation;
  }
});
Object.defineProperty(exports, "printSchema", {
  enumerable: true,
  get: function () {
    return _index6.printSchema;
  }
});
Object.defineProperty(exports, "printSourceLocation", {
  enumerable: true,
  get: function () {
    return _index2.printSourceLocation;
  }
});
Object.defineProperty(exports, "printType", {
  enumerable: true,
  get: function () {
    return _index6.printType;
  }
});
Object.defineProperty(exports, "resolveObjMapThunk", {
  enumerable: true,
  get: function () {
    return _index.resolveObjMapThunk;
  }
});
Object.defineProperty(exports, "resolveReadonlyArrayThunk", {
  enumerable: true,
  get: function () {
    return _index.resolveReadonlyArrayThunk;
  }
});
Object.defineProperty(exports, "responsePathAsArray", {
  enumerable: true,
  get: function () {
    return _index3.responsePathAsArray;
  }
});
Object.defineProperty(exports, "separateOperations", {
  enumerable: true,
  get: function () {
    return _index6.separateOperations;
  }
});
Object.defineProperty(exports, "specifiedDirectives", {
  enumerable: true,
  get: function () {
    return _index.specifiedDirectives;
  }
});
Object.defineProperty(exports, "specifiedRules", {
  enumerable: true,
  get: function () {
    return _index4.specifiedRules;
  }
});
Object.defineProperty(exports, "specifiedScalarTypes", {
  enumerable: true,
  get: function () {
    return _index.specifiedScalarTypes;
  }
});
Object.defineProperty(exports, "stripIgnoredCharacters", {
  enumerable: true,
  get: function () {
    return _index6.stripIgnoredCharacters;
  }
});
Object.defineProperty(exports, "subscribe", {
  enumerable: true,
  get: function () {
    return _index3.subscribe;
  }
});
Object.defineProperty(exports, "syntaxError", {
  enumerable: true,
  get: function () {
    return _index5.syntaxError;
  }
});
Object.defineProperty(exports, "typeFromAST", {
  enumerable: true,
  get: function () {
    return _index6.typeFromAST;
  }
});
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function () {
    return _index4.validate;
  }
});
Object.defineProperty(exports, "validateSchema", {
  enumerable: true,
  get: function () {
    return _index.validateSchema;
  }
});
Object.defineProperty(exports, "valueFromAST", {
  enumerable: true,
  get: function () {
    return _index6.valueFromAST;
  }
});
Object.defineProperty(exports, "valueFromASTUntyped", {
  enumerable: true,
  get: function () {
    return _index6.valueFromASTUntyped;
  }
});
Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function () {
    return _version.version;
  }
});
Object.defineProperty(exports, "versionInfo", {
  enumerable: true,
  get: function () {
    return _version.versionInfo;
  }
});
Object.defineProperty(exports, "visit", {
  enumerable: true,
  get: function () {
    return _index2.visit;
  }
});
Object.defineProperty(exports, "visitInParallel", {
  enumerable: true,
  get: function () {
    return _index2.visitInParallel;
  }
});
Object.defineProperty(exports, "visitWithTypeInfo", {
  enumerable: true,
  get: function () {
    return _index6.visitWithTypeInfo;
  }
});
var _version = require("./version.mjs");
var _graphql = require("./graphql.mjs");
var _index = require("./type/index.mjs");
var _index2 = require("./language/index.mjs");
var _index3 = require("./execution/index.mjs");
var _index4 = require("./validation/index.mjs");
var _index5 = require("./error/index.mjs");
var _index6 = require("./utilities/index.mjs");
},{"./version.mjs":"../node_modules/graphql/version.mjs","./graphql.mjs":"../node_modules/graphql/graphql.mjs","./type/index.mjs":"../node_modules/graphql/type/index.mjs","./language/index.mjs":"../node_modules/graphql/language/index.mjs","./execution/index.mjs":"../node_modules/graphql/execution/index.mjs","./validation/index.mjs":"../node_modules/graphql/validation/index.mjs","./error/index.mjs":"../node_modules/graphql/error/index.mjs","./utilities/index.mjs":"../node_modules/graphql/utilities/index.mjs"}],"../node_modules/graphql-request/build/cjs/resolveRequestDocument.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveRequestDocument = void 0;
const graphql_1 = require("graphql");
/**
 * helpers
 */
const extractOperationName = (document) => {
    let operationName = undefined;
    const operationDefinitions = document.definitions.filter((definition) => definition.kind === `OperationDefinition`);
    if (operationDefinitions.length === 1) {
        operationName = operationDefinitions[0]?.name?.value;
    }
    return operationName;
};
const resolveRequestDocument = (document) => {
    if (typeof document === `string`) {
        let operationName = undefined;
        try {
            const parsedDocument = (0, graphql_1.parse)(document);
            operationName = extractOperationName(parsedDocument);
        }
        catch (err) {
            // Failed parsing the document, the operationName will be undefined
        }
        return { query: document, operationName };
    }
    const operationName = extractOperationName(document);
    return { query: (0, graphql_1.print)(document), operationName };
};
exports.resolveRequestDocument = resolveRequestDocument;

},{"graphql":"../node_modules/graphql/index.mjs"}],"../node_modules/graphql-request/build/cjs/types.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientError = void 0;
class ClientError extends Error {
    constructor(response, request) {
        const message = `${ClientError.extractMessage(response)}: ${JSON.stringify({
            response,
            request,
        })}`;
        super(message);
        Object.setPrototypeOf(this, ClientError.prototype);
        this.response = response;
        this.request = request;
        // this is needed as Safari doesn't support .captureStackTrace
        if (typeof Error.captureStackTrace === `function`) {
            Error.captureStackTrace(this, ClientError);
        }
    }
    static extractMessage(response) {
        return response.errors?.[0]?.message ?? `GraphQL Error (Code: ${response.status})`;
    }
}
exports.ClientError = ClientError;

},{}],"../node_modules/cross-fetch/dist/browser-ponyfill.js":[function(require,module,exports) {

var global = typeof self !== 'undefined' ? self : this;
var __self__ = (function () {
function F() {
this.fetch = false;
this.DOMException = global.DOMException
}
F.prototype = global;
return new F();
})();
(function(self) {

var irrelevant = (function (exports) {

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
exports.default = ctx.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers
exports.Request = ctx.Request
exports.Response = ctx.Response
module.exports = exports

},{}],"../node_modules/graphql-request/build/cjs/graphql-ws.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLWebSocketClient = void 0;
/* eslint-disable */
const resolveRequestDocument_js_1 = require("./resolveRequestDocument.js");
const types_js_1 = require("./types.js");
// import type WebSocket from 'ws'
const CONNECTION_INIT = `connection_init`;
const CONNECTION_ACK = `connection_ack`;
const PING = `ping`;
const PONG = `pong`;
const SUBSCRIBE = `subscribe`;
const NEXT = `next`;
const ERROR = `error`;
const COMPLETE = `complete`;
class GraphQLWebSocketMessage {
    get type() {
        return this._type;
    }
    get id() {
        return this._id;
    }
    get payload() {
        return this._payload;
    }
    constructor(type, payload, id) {
        this._type = type;
        this._payload = payload;
        this._id = id;
    }
    get text() {
        const result = { type: this.type };
        if (this.id != null && this.id != undefined)
            result.id = this.id;
        if (this.payload != null && this.payload != undefined)
            result.payload = this.payload;
        return JSON.stringify(result);
    }
    static parse(data, f) {
        const { type, payload, id } = JSON.parse(data);
        return new GraphQLWebSocketMessage(type, f(payload), id);
    }
}
class GraphQLWebSocketClient {
    constructor(socket, { onInit, onAcknowledged, onPing, onPong }) {
        this.socketState = { acknowledged: false, lastRequestId: 0, subscriptions: {} };
        this.socket = socket;
        socket.addEventListener(`open`, async (e) => {
            this.socketState.acknowledged = false;
            this.socketState.subscriptions = {};
            socket.send(ConnectionInit(onInit ? await onInit() : null).text);
        });
        socket.addEventListener(`close`, (e) => {
            this.socketState.acknowledged = false;
            this.socketState.subscriptions = {};
        });
        socket.addEventListener(`error`, (e) => {
            console.error(e);
        });
        socket.addEventListener(`message`, (e) => {
            try {
                const message = parseMessage(e.data);
                switch (message.type) {
                    case CONNECTION_ACK: {
                        if (this.socketState.acknowledged) {
                            console.warn(`Duplicate CONNECTION_ACK message ignored`);
                        }
                        else {
                            this.socketState.acknowledged = true;
                            if (onAcknowledged)
                                onAcknowledged(message.payload);
                        }
                        return;
                    }
                    case PING: {
                        if (onPing)
                            onPing(message.payload).then((r) => socket.send(Pong(r).text));
                        else
                            socket.send(Pong(null).text);
                        return;
                    }
                    case PONG: {
                        if (onPong)
                            onPong(message.payload);
                        return;
                    }
                }
                if (!this.socketState.acknowledged) {
                    // Web-socket connection not acknowledged
                    return;
                }
                if (message.id === undefined || message.id === null || !this.socketState.subscriptions[message.id]) {
                    // No subscription identifer or subscription indentifier is not found
                    return;
                }
                const { query, variables, subscriber } = this.socketState.subscriptions[message.id];
                switch (message.type) {
                    case NEXT: {
                        if (!message.payload.errors && message.payload.data) {
                            subscriber.next && subscriber.next(message.payload.data);
                        }
                        if (message.payload.errors) {
                            subscriber.error &&
                                subscriber.error(new types_js_1.ClientError({ ...message.payload, status: 200 }, { query, variables }));
                        }
                        else {
                        }
                        return;
                    }
                    case ERROR: {
                        subscriber.error &&
                            subscriber.error(new types_js_1.ClientError({ errors: message.payload, status: 200 }, { query, variables }));
                        return;
                    }
                    case COMPLETE: {
                        subscriber.complete && subscriber.complete();
                        delete this.socketState.subscriptions[message.id];
                        return;
                    }
                }
            }
            catch (e) {
                // Unexpected errors while handling graphql-ws message
                console.error(e);
                socket.close(1006);
            }
            socket.close(4400, `Unknown graphql-ws message.`);
        });
    }
    makeSubscribe(query, operationName, subscriber, variables) {
        const subscriptionId = (this.socketState.lastRequestId++).toString();
        this.socketState.subscriptions[subscriptionId] = { query, variables, subscriber };
        this.socket.send(Subscribe(subscriptionId, { query, operationName, variables }).text);
        return () => {
            this.socket.send(Complete(subscriptionId).text);
            delete this.socketState.subscriptions[subscriptionId];
        };
    }
    rawRequest(query, variables) {
        return new Promise((resolve, reject) => {
            let result;
            this.rawSubscribe(query, {
                next: (data, extensions) => (result = { data, extensions }),
                error: reject,
                complete: () => resolve(result),
            }, variables);
        });
    }
    request(document, variables) {
        return new Promise((resolve, reject) => {
            let result;
            this.subscribe(document, {
                next: (data) => (result = data),
                error: reject,
                complete: () => resolve(result),
            }, variables);
        });
    }
    subscribe(document, subscriber, variables) {
        const { query, operationName } = (0, resolveRequestDocument_js_1.resolveRequestDocument)(document);
        return this.makeSubscribe(query, operationName, subscriber, variables);
    }
    rawSubscribe(query, subscriber, variables) {
        return this.makeSubscribe(query, undefined, subscriber, variables);
    }
    ping(payload) {
        this.socket.send(Ping(payload).text);
    }
    close() {
        this.socket.close(1000);
    }
}
GraphQLWebSocketClient.PROTOCOL = `graphql-transport-ws`;
exports.GraphQLWebSocketClient = GraphQLWebSocketClient;
// Helper functions
function parseMessage(data, f = (a) => a) {
    const m = GraphQLWebSocketMessage.parse(data, f);
    return m;
}
function ConnectionInit(payload) {
    return new GraphQLWebSocketMessage(CONNECTION_INIT, payload);
}
function Ping(payload) {
    return new GraphQLWebSocketMessage(PING, payload, undefined);
}
function Pong(payload) {
    return new GraphQLWebSocketMessage(PONG, payload, undefined);
}
function Subscribe(id, payload) {
    return new GraphQLWebSocketMessage(SUBSCRIBE, payload, id);
}
function Complete(id) {
    return new GraphQLWebSocketMessage(COMPLETE, undefined, id);
}

},{"./resolveRequestDocument.js":"../node_modules/graphql-request/build/cjs/resolveRequestDocument.js","./types.js":"../node_modules/graphql-request/build/cjs/types.js"}],"../node_modules/graphql-request/build/cjs/index.js":[function(require,module,exports) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = exports.rawRequest = exports.GraphQLClient = exports.ClientError = exports.batchRequests = exports.resolveRequestDocument = exports.GraphQLWebSocketClient = exports.gql = void 0;
const defaultJsonSerializer_js_1 = require("./defaultJsonSerializer.js");
const helpers_js_1 = require("./helpers.js");
const parseArgs_js_1 = require("./parseArgs.js");
const resolveRequestDocument_js_1 = require("./resolveRequestDocument.js");
const types_js_1 = require("./types.js");
Object.defineProperty(exports, "ClientError", { enumerable: true, get: function () { return types_js_1.ClientError; } });
const cross_fetch_1 = __importStar(require("cross-fetch")), CrossFetch = cross_fetch_1;
/**
 * Convert the given headers configuration into a plain object.
 */
const resolveHeaders = (headers) => {
    let oHeaders = {};
    if (headers) {
        if ((typeof Headers !== `undefined` && headers instanceof Headers) ||
            (CrossFetch && CrossFetch.Headers && headers instanceof CrossFetch.Headers)) {
            oHeaders = (0, helpers_js_1.HeadersInstanceToPlainObject)(headers);
        }
        else if (Array.isArray(headers)) {
            headers.forEach(([name, value]) => {
                if (name && value !== undefined) {
                    oHeaders[name] = value;
                }
            });
        }
        else {
            oHeaders = headers;
        }
    }
    return oHeaders;
};
/**
 * Clean a GraphQL document to send it via a GET query
 */
const cleanQuery = (str) => str.replace(/([\s,]|#[^\n\r]+)+/g, ` `).trim();
/**
 * Create query string for GraphQL request
 */
const buildRequestConfig = (params) => {
    if (!Array.isArray(params.query)) {
        const params_ = params;
        const search = [`query=${encodeURIComponent(cleanQuery(params_.query))}`];
        if (params.variables) {
            search.push(`variables=${encodeURIComponent(params_.jsonSerializer.stringify(params_.variables))}`);
        }
        if (params_.operationName) {
            search.push(`operationName=${encodeURIComponent(params_.operationName)}`);
        }
        return search.join(`&`);
    }
    if (typeof params.variables !== `undefined` && !Array.isArray(params.variables)) {
        throw new Error(`Cannot create query with given variable type, array expected`);
    }
    // Batch support
    const params_ = params;
    const payload = params.query.reduce((acc, currentQuery, index) => {
        acc.push({
            query: cleanQuery(currentQuery),
            variables: params_.variables ? params_.jsonSerializer.stringify(params_.variables[index]) : undefined,
        });
        return acc;
    }, []);
    return `query=${encodeURIComponent(params_.jsonSerializer.stringify(payload))}`;
};
const createHttpMethodFetcher = (method) => async (params) => {
    const { url, query, variables, operationName, fetch, fetchOptions, middleware } = params;
    const headers = { ...params.headers };
    let queryParams = ``;
    let body = undefined;
    if (method === `POST`) {
        body = createRequestBody(query, variables, operationName, fetchOptions.jsonSerializer);
        if (typeof body === `string`) {
            // @ts-expect-error todo
            headers[`Content-Type`] = `application/json`;
        }
    }
    else {
        // @ts-expect-error todo needs ADT for TS to understand the different states
        queryParams = buildRequestConfig({
            query,
            variables,
            operationName,
            jsonSerializer: fetchOptions.jsonSerializer ?? defaultJsonSerializer_js_1.defaultJsonSerializer,
        });
    }
    const init = {
        method,
        headers,
        body,
        ...fetchOptions,
    };
    let urlResolved = url;
    let initResolved = init;
    if (middleware) {
        const result = await Promise.resolve(middleware({ ...init, url, operationName, variables }));
        const { url: urlNew, ...initNew } = result;
        urlResolved = urlNew;
        initResolved = initNew;
    }
    if (queryParams) {
        urlResolved = `${urlResolved}?${queryParams}`;
    }
    return await fetch(urlResolved, initResolved);
};
/**
 * GraphQL Client.
 */
class GraphQLClient {
    constructor(url, requestConfig = {}) {
        this.url = url;
        this.requestConfig = requestConfig;
        /**
         * Send a GraphQL query to the server.
         */
        this.rawRequest = async (...args) => {
            const [queryOrOptions, variables, requestHeaders] = args;
            const rawRequestOptions = (0, parseArgs_js_1.parseRawRequestArgs)(queryOrOptions, variables, requestHeaders);
            const { headers, fetch = cross_fetch_1.default, method = `POST`, requestMiddleware, responseMiddleware, ...fetchOptions } = this.requestConfig;
            const { url } = this;
            if (rawRequestOptions.signal !== undefined) {
                fetchOptions.signal = rawRequestOptions.signal;
            }
            const { operationName } = (0, resolveRequestDocument_js_1.resolveRequestDocument)(rawRequestOptions.query);
            return makeRequest({
                url,
                query: rawRequestOptions.query,
                variables: rawRequestOptions.variables,
                headers: {
                    ...resolveHeaders(callOrIdentity(headers)),
                    ...resolveHeaders(rawRequestOptions.requestHeaders),
                },
                operationName,
                fetch,
                method,
                fetchOptions,
                middleware: requestMiddleware,
            })
                .then((response) => {
                if (responseMiddleware) {
                    responseMiddleware(response);
                }
                return response;
            })
                .catch((error) => {
                if (responseMiddleware) {
                    responseMiddleware(error);
                }
                throw error;
            });
        };
    }
    async request(documentOrOptions, ...variablesAndRequestHeaders) {
        const [variables, requestHeaders] = variablesAndRequestHeaders;
        const requestOptions = (0, parseArgs_js_1.parseRequestArgs)(documentOrOptions, variables, requestHeaders);
        const { headers, fetch = cross_fetch_1.default, method = `POST`, requestMiddleware, responseMiddleware, ...fetchOptions } = this.requestConfig;
        const { url } = this;
        if (requestOptions.signal !== undefined) {
            fetchOptions.signal = requestOptions.signal;
        }
        const { query, operationName } = (0, resolveRequestDocument_js_1.resolveRequestDocument)(requestOptions.document);
        return makeRequest({
            url,
            query,
            variables: requestOptions.variables,
            headers: {
                ...resolveHeaders(callOrIdentity(headers)),
                ...resolveHeaders(requestOptions.requestHeaders),
            },
            operationName,
            fetch,
            method,
            fetchOptions,
            middleware: requestMiddleware,
        })
            .then((response) => {
            if (responseMiddleware) {
                responseMiddleware(response);
            }
            return response.data;
        })
            .catch((error) => {
            if (responseMiddleware) {
                responseMiddleware(error);
            }
            throw error;
        });
    }
    // prettier-ignore
    batchRequests(documentsOrOptions, requestHeaders) {
        const batchRequestOptions = (0, parseArgs_js_1.parseBatchRequestArgs)(documentsOrOptions, requestHeaders);
        const { headers, ...fetchOptions } = this.requestConfig;
        if (batchRequestOptions.signal !== undefined) {
            fetchOptions.signal = batchRequestOptions.signal;
        }
        const queries = batchRequestOptions.documents.map(({ document }) => (0, resolveRequestDocument_js_1.resolveRequestDocument)(document).query);
        const variables = batchRequestOptions.documents.map(({ variables }) => variables);
        return makeRequest({
            url: this.url,
            query: queries,
            // @ts-expect-error TODO reconcile batch variables into system.
            variables,
            headers: {
                ...resolveHeaders(callOrIdentity(headers)),
                ...resolveHeaders(batchRequestOptions.requestHeaders),
            },
            operationName: undefined,
            fetch: this.requestConfig.fetch ?? cross_fetch_1.default,
            method: this.requestConfig.method || `POST`,
            fetchOptions,
            middleware: this.requestConfig.requestMiddleware,
        })
            .then((response) => {
            if (this.requestConfig.responseMiddleware) {
                this.requestConfig.responseMiddleware(response);
            }
            return response.data;
        })
            .catch((error) => {
            if (this.requestConfig.responseMiddleware) {
                this.requestConfig.responseMiddleware(error);
            }
            throw error;
        });
    }
    setHeaders(headers) {
        this.requestConfig.headers = headers;
        return this;
    }
    /**
     * Attach a header to the client. All subsequent requests will have this header.
     */
    setHeader(key, value) {
        const { headers } = this.requestConfig;
        if (headers) {
            // todo what if headers is in nested array form... ?
            //@ts-expect-error todo
            headers[key] = value;
        }
        else {
            this.requestConfig.headers = { [key]: value };
        }
        return this;
    }
    /**
     * Change the client endpoint. All subsequent requests will send to this endpoint.
     */
    setEndpoint(value) {
        this.url = value;
        return this;
    }
}
exports.GraphQLClient = GraphQLClient;
const makeRequest = async (params) => {
    const { query, variables, fetchOptions } = params;
    const fetcher = createHttpMethodFetcher((0, helpers_js_1.uppercase)(params.method ?? `post`));
    const isBatchingQuery = Array.isArray(params.query);
    const response = await fetcher(params);
    const result = await getResult(response, fetchOptions.jsonSerializer ?? defaultJsonSerializer_js_1.defaultJsonSerializer);
    const successfullyReceivedData = Array.isArray(result)
        ? !result.some(({ data }) => !data)
        : Boolean(result.data);
    const successfullyPassedErrorPolicy = Array.isArray(result) ||
        !result.errors ||
        (Array.isArray(result.errors) && !result.errors.length) ||
        fetchOptions.errorPolicy === `all` ||
        fetchOptions.errorPolicy === `ignore`;
    if (response.ok && successfullyPassedErrorPolicy && successfullyReceivedData) {
        // @ts-expect-error TODO fixme
        const { errors: _, ...rest } = Array.isArray(result) ? result : result;
        const data = fetchOptions.errorPolicy === `ignore` ? rest : result;
        const dataEnvelope = isBatchingQuery ? { data } : data;
        // @ts-expect-error TODO
        return {
            ...dataEnvelope,
            headers: response.headers,
            status: response.status,
        };
    }
    else {
        const errorResult = typeof result === `string`
            ? {
                error: result,
            }
            : result;
        throw new types_js_1.ClientError(
        // @ts-expect-error TODO
        { ...errorResult, status: response.status, headers: response.headers }, { query, variables });
    }
};
/**
 * Send a GraphQL Query to the GraphQL server for execution.
 */
const rawRequest = async (...args) => {
    const [urlOrOptions, query, ...variablesAndRequestHeaders] = args;
    const requestOptions = (0, parseArgs_js_1.parseRawRequestExtendedArgs)(urlOrOptions, query, ...variablesAndRequestHeaders);
    const client = new GraphQLClient(requestOptions.url);
    return client.rawRequest({
        ...requestOptions,
    });
};
exports.rawRequest = rawRequest;
// prettier-ignore
// eslint-disable-next-line
async function request(urlOrOptions, document, ...variablesAndRequestHeaders) {
    const requestOptions = (0, parseArgs_js_1.parseRequestExtendedArgs)(urlOrOptions, document, ...variablesAndRequestHeaders);
    const client = new GraphQLClient(requestOptions.url);
    return client.request({
        ...requestOptions,
    });
}
exports.request = request;
/**
 * Send a batch of GraphQL Document to the GraphQL server for execution.
 *
 * @example
 *
 * ```ts
 * // You can pass a raw string
 *
 * await batchRequests('https://foo.bar/graphql', [
 * {
 *  query: `
 *   {
 *     query {
 *       users
 *     }
 *   }`
 * },
 * {
 *   query: `
 *   {
 *     query {
 *       users
 *     }
 *   }`
 * }])
 *
 * // You can also pass a GraphQL DocumentNode as query. Convenient if you
 * // are using graphql-tag package.
 *
 * import gql from 'graphql-tag'
 *
 * await batchRequests('https://foo.bar/graphql', [{ query: gql`...` }])
 * ```
 */
const batchRequests = async (...args) => {
    const params = parseBatchRequestsArgsExtended(args);
    const client = new GraphQLClient(params.url);
    return client.batchRequests(params);
};
exports.batchRequests = batchRequests;
const parseBatchRequestsArgsExtended = (args) => {
    if (args.length === 1) {
        return args[0];
    }
    else {
        return {
            url: args[0],
            documents: args[1],
            requestHeaders: args[2],
            signal: undefined,
        };
    }
};
const createRequestBody = (query, variables, operationName, jsonSerializer) => {
    const jsonSerializer_ = jsonSerializer ?? defaultJsonSerializer_js_1.defaultJsonSerializer;
    if (!Array.isArray(query)) {
        return jsonSerializer_.stringify({ query, variables, operationName });
    }
    if (typeof variables !== `undefined` && !Array.isArray(variables)) {
        throw new Error(`Cannot create request body with given variable type, array expected`);
    }
    // Batch support
    const payload = query.reduce((acc, currentQuery, index) => {
        acc.push({ query: currentQuery, variables: variables ? variables[index] : undefined });
        return acc;
    }, []);
    return jsonSerializer_.stringify(payload);
};
const getResult = async (response, jsonSerializer) => {
    let contentType;
    response.headers.forEach((value, key) => {
        if (key.toLowerCase() === `content-type`) {
            contentType = value;
        }
    });
    if (contentType &&
        (contentType.toLowerCase().startsWith(`application/json`) ||
            contentType.toLowerCase().startsWith(`application/graphql+json`) ||
            contentType.toLowerCase().startsWith(`application/graphql-response+json`))) {
        return jsonSerializer.parse(await response.text());
    }
    else {
        return response.text();
    }
};
const callOrIdentity = (value) => {
    return typeof value === `function` ? value() : value;
};
/**
 * Convenience passthrough template tag to get the benefits of tooling for the gql template tag. This does not actually parse the input into a GraphQL DocumentNode like graphql-tag package does. It just returns the string with any variables given interpolated. Can save you a bit of performance and having to install another package.
 *
 * @example
 * ```
 * import { gql } from 'graphql-request'
 *
 * await request('https://foo.bar/graphql', gql`...`)
 * ```
 *
 * @remarks
 *
 * Several tools in the Node GraphQL ecosystem are hardcoded to specially treat any template tag named "gql". For example see this prettier issue: https://github.com/prettier/prettier/issues/4360. Using this template tag has no runtime effect beyond variable interpolation.
 */
const gql = (chunks, ...variables) => {
    return chunks.reduce((acc, chunk, index) => `${acc}${chunk}${index in variables ? String(variables[index]) : ``}`, ``);
};
exports.gql = gql;
var graphql_ws_js_1 = require("./graphql-ws.js");
Object.defineProperty(exports, "GraphQLWebSocketClient", { enumerable: true, get: function () { return graphql_ws_js_1.GraphQLWebSocketClient; } });
var resolveRequestDocument_js_2 = require("./resolveRequestDocument.js");
Object.defineProperty(exports, "resolveRequestDocument", { enumerable: true, get: function () { return resolveRequestDocument_js_2.resolveRequestDocument; } });
exports.default = request;

},{"./defaultJsonSerializer.js":"../node_modules/graphql-request/build/cjs/defaultJsonSerializer.js","./helpers.js":"../node_modules/graphql-request/build/cjs/helpers.js","./parseArgs.js":"../node_modules/graphql-request/build/cjs/parseArgs.js","./resolveRequestDocument.js":"../node_modules/graphql-request/build/cjs/resolveRequestDocument.js","./types.js":"../node_modules/graphql-request/build/cjs/types.js","cross-fetch":"../node_modules/cross-fetch/dist/browser-ponyfill.js","./graphql-ws.js":"../node_modules/graphql-request/build/cjs/graphql-ws.js"}],"../src/api/tarkov.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _graphqlRequest = require("graphql-request");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; } // tarkov.js
// Import the request and gql functions from graphql-request
// Define the API endpoint
var API_ENDPOINT = 'https://api.tarkov.dev/graphql';

// Function to fetch data from the Tarkov API
function fetchData(_x) {
  return _fetchData.apply(this, arguments);
} // Export the fetchData function
function _fetchData() {
  _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(query) {
    var variables,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          variables = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          _context.next = 3;
          return (0, _graphqlRequest.request)(API_ENDPOINT, query, variables);
        case 3:
          return _context.abrupt("return", _context.sent);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _fetchData.apply(this, arguments);
}
var _default = exports.default = fetchData;
},{"graphql-request":"../node_modules/graphql-request/build/cjs/index.js"}],"../src/components/MainContent.js":[function(require,module,exports) {
"use strict";

var _tarkov = _interopRequireDefault(require("../api/tarkov.js"));
var _graphqlRequest = require("graphql-request");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // MainContent.js
// Import the fetchData function
// Define your GraphQL query and variables
var query = (0, _graphqlRequest.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nquery ($name: ItemType!){\n  items(type: $name) {\n    id\n    name\n    shortName\n    basePrice\n    width\n    height\n    weight\n    containsItems {\n      item {\n        description\n      }\n    }\n    image512pxLink\n    gridImageLink\n    wikiLink\n  }\n}\n\n"])));
var variables = {
  name: 'preset'
};

// Use the fetchData function to get data from the Tarkov API
(0, _tarkov.default)(query, variables).then(function (data) {
  // Get the weapons-list tbody
  var weaponsList = document.getElementById('weapons-list');

  // Loop through the items array
  data.items.forEach(function (item) {
    // Create a new tr for the row
    var row = document.createElement('tr');

    // Create td elements for each piece of data
    var name = document.createElement('td');
    name.setAttribute('data-sort', item.name); // Add this line
    var img = document.createElement('img');
    img.src = item.image512pxLink; // Set the src to the image link
    img.alt = item.name; // Set the alt text to the weapon name
    img.title = item.name; // Set the title to the weapon name for the tooltip
    name.appendChild(img);
    row.appendChild(name);
    var basePrice = document.createElement('td');
    basePrice.textContent = item.basePrice;
    row.appendChild(basePrice);
    var gridSpace = document.createElement('td');
    gridSpace.textContent = item.width * item.height;
    row.appendChild(gridSpace);
    var weight = document.createElement('td');
    weight.textContent = item.weight;
    row.appendChild(weight);
    var wikiLink = document.createElement('td');
    var link = document.createElement('a');
    link.href = item.wikiLink;
    link.textContent = 'Go to Wiki';
    wikiLink.appendChild(link);
    row.appendChild(wikiLink);

    // Append the row to the weapons-list tbody
    weaponsList.appendChild(row);
  });
  $('#weapons-table').DataTable({
    columnDefs: [{
      targets: 0,
      type: 'alt-string'
    }]
  });
}).catch(function (error) {
  console.error('Error:', error);
});
},{"../api/tarkov.js":"../src/api/tarkov.js","graphql-request":"../node_modules/graphql-request/build/cjs/index.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("../src/components/MainContent.js");
},{"../src/components/MainContent.js":"../src/components/MainContent.js"}],"../../../AppData/Roaming/nvm/v16.16.0/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53230" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/nvm/v16.16.0/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/public.e31bb0bc.js.map