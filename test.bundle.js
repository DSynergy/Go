/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	mocha.setup("bdd");
	__webpack_require__(9)
	__webpack_require__(50);
	if(false) {
		module.hot.accept();
		module.hot.dispose(function() {
			mocha.suite.suites.length = 0;
			var stats = document.getElementById('mocha-stats');
			var report = document.getElementById('mocha-report');
			stats.parentNode.removeChild(stats);
			report.parentNode.removeChild(report);
		});
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	if (! document.getElementById("mocha")) { document.write("<div id=\"mocha\"></div>"); }

	__webpack_require__(2);
	__webpack_require__(6);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/jgu2160/Turing/js/Go/node_modules/mocha-loader/node_modules/css-loader/index.js!/Users/jgu2160/Turing/js/Go/node_modules/mocha/mocha.css", function() {
			var newContent = require("!!/Users/jgu2160/Turing/js/Go/node_modules/mocha-loader/node_modules/css-loader/index.js!/Users/jgu2160/Turing/js/Go/node_modules/mocha/mocha.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	exports.push([module.id, "@charset \"utf-8\";\n\nbody {\n  margin:0;\n}\n\n#mocha {\n  font: 20px/1.5 \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  margin: 60px 50px;\n}\n\n#mocha ul,\n#mocha li {\n  margin: 0;\n  padding: 0;\n}\n\n#mocha ul {\n  list-style: none;\n}\n\n#mocha h1,\n#mocha h2 {\n  margin: 0;\n}\n\n#mocha h1 {\n  margin-top: 15px;\n  font-size: 1em;\n  font-weight: 200;\n}\n\n#mocha h1 a {\n  text-decoration: none;\n  color: inherit;\n}\n\n#mocha h1 a:hover {\n  text-decoration: underline;\n}\n\n#mocha .suite .suite h1 {\n  margin-top: 0;\n  font-size: .8em;\n}\n\n#mocha .hidden {\n  display: none;\n}\n\n#mocha h2 {\n  font-size: 12px;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n#mocha .suite {\n  margin-left: 15px;\n}\n\n#mocha .test {\n  margin-left: 15px;\n  overflow: hidden;\n}\n\n#mocha .test.pending:hover h2::after {\n  content: '(pending)';\n  font-family: arial, sans-serif;\n}\n\n#mocha .test.pass.medium .duration {\n  background: #c09853;\n}\n\n#mocha .test.pass.slow .duration {\n  background: #b94a48;\n}\n\n#mocha .test.pass::before {\n  content: '✓';\n  font-size: 12px;\n  display: block;\n  float: left;\n  margin-right: 5px;\n  color: #00d6b2;\n}\n\n#mocha .test.pass .duration {\n  font-size: 9px;\n  margin-left: 5px;\n  padding: 2px 5px;\n  color: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.2);\n  -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,.2);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.2);\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  -o-border-radius: 5px;\n  border-radius: 5px;\n}\n\n#mocha .test.pass.fast .duration {\n  display: none;\n}\n\n#mocha .test.pending {\n  color: #0b97c4;\n}\n\n#mocha .test.pending::before {\n  content: '◦';\n  color: #0b97c4;\n}\n\n#mocha .test.fail {\n  color: #c00;\n}\n\n#mocha .test.fail pre {\n  color: black;\n}\n\n#mocha .test.fail::before {\n  content: '✖';\n  font-size: 12px;\n  display: block;\n  float: left;\n  margin-right: 5px;\n  color: #c00;\n}\n\n#mocha .test pre.error {\n  color: #c00;\n  max-height: 300px;\n  overflow: auto;\n}\n\n/**\n * (1): approximate for browsers not supporting calc\n * (2): 42 = 2*15 + 2*10 + 2*1 (padding + margin + border)\n *      ^^ seriously\n */\n#mocha .test pre {\n  display: block;\n  float: left;\n  clear: left;\n  font: 12px/1.5 monaco, monospace;\n  margin: 5px;\n  padding: 15px;\n  border: 1px solid #eee;\n  max-width: 85%; /*(1)*/\n  max-width: calc(100% - 42px); /*(2)*/\n  word-wrap: break-word;\n  border-bottom-color: #ddd;\n  -webkit-border-radius: 3px;\n  -webkit-box-shadow: 0 1px 3px #eee;\n  -moz-border-radius: 3px;\n  -moz-box-shadow: 0 1px 3px #eee;\n  border-radius: 3px;\n}\n\n#mocha .test h2 {\n  position: relative;\n}\n\n#mocha .test a.replay {\n  position: absolute;\n  top: 3px;\n  right: 0;\n  text-decoration: none;\n  vertical-align: middle;\n  display: block;\n  width: 15px;\n  height: 15px;\n  line-height: 15px;\n  text-align: center;\n  background: #eee;\n  font-size: 15px;\n  -moz-border-radius: 15px;\n  border-radius: 15px;\n  -webkit-transition: opacity 200ms;\n  -moz-transition: opacity 200ms;\n  transition: opacity 200ms;\n  opacity: 0.3;\n  color: #888;\n}\n\n#mocha .test:hover a.replay {\n  opacity: 1;\n}\n\n#mocha-report.pass .test.fail {\n  display: none;\n}\n\n#mocha-report.fail .test.pass {\n  display: none;\n}\n\n#mocha-report.pending .test.pass,\n#mocha-report.pending .test.fail {\n  display: none;\n}\n#mocha-report.pending .test.pass.pending {\n  display: block;\n}\n\n#mocha-error {\n  color: #c00;\n  font-size: 1.5em;\n  font-weight: 100;\n  letter-spacing: 1px;\n}\n\n#mocha-stats {\n  position: fixed;\n  top: 15px;\n  right: 10px;\n  font-size: 12px;\n  margin: 0;\n  color: #888;\n  z-index: 1;\n}\n\n#mocha-stats .progress {\n  float: right;\n  padding-top: 0;\n}\n\n#mocha-stats em {\n  color: black;\n}\n\n#mocha-stats a {\n  text-decoration: none;\n  color: inherit;\n}\n\n#mocha-stats a:hover {\n  border-bottom: 1px solid #eee;\n}\n\n#mocha-stats li {\n  display: inline-block;\n  margin: 0 5px;\n  list-style: none;\n  padding-top: 11px;\n}\n\n#mocha-stats canvas {\n  width: 40px;\n  height: 40px;\n}\n\n#mocha code .comment { color: #ddd; }\n#mocha code .init { color: #2f6fad; }\n#mocha code .string { color: #5890ad; }\n#mocha code .keyword { color: #8a6343; }\n#mocha code .number { color: #2f6fad; }\n\n@media screen and (max-device-width: 480px) {\n  #mocha {\n    margin: 60px 0px;\n  }\n\n  #mocha #stats {\n    position: absolute;\n  }\n}\n", ""]);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7)(__webpack_require__(8))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript === "function")
			execScript(src);
		else
			eval.call(null, src);
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = ";(function(){\n\n// CommonJS require()\n\nfunction require(p){\n    var path = require.resolve(p)\n      , mod = require.modules[path];\n    if (!mod) throw new Error('failed to require \"' + p + '\"');\n    if (!mod.exports) {\n      mod.exports = {};\n      mod.call(mod.exports, mod, mod.exports, require.relative(path));\n    }\n    return mod.exports;\n  }\n\nrequire.modules = {};\n\nrequire.resolve = function (path){\n    var orig = path\n      , reg = path + '.js'\n      , index = path + '/index.js';\n    return require.modules[reg] && reg\n      || require.modules[index] && index\n      || orig;\n  };\n\nrequire.register = function (path, fn){\n    require.modules[path] = fn;\n  };\n\nrequire.relative = function (parent) {\n    return function(p){\n      if ('.' != p.charAt(0)) return require(p);\n\n      var path = parent.split('/')\n        , segs = p.split('/');\n      path.pop();\n\n      for (var i = 0; i < segs.length; i++) {\n        var seg = segs[i];\n        if ('..' == seg) path.pop();\n        else if ('.' != seg) path.push(seg);\n      }\n\n      return require(path.join('/'));\n    };\n  };\n\n\nrequire.register(\"browser/debug.js\", function(module, exports, require){\nmodule.exports = function(type){\n  return function(){\n  }\n};\n\n}); // module: browser/debug.js\n\nrequire.register(\"browser/diff.js\", function(module, exports, require){\n/* See LICENSE file for terms of use */\n\n/*\n * Text diff implementation.\n *\n * This library supports the following APIS:\n * JsDiff.diffChars: Character by character diff\n * JsDiff.diffWords: Word (as defined by \\b regex) diff which ignores whitespace\n * JsDiff.diffLines: Line based diff\n *\n * JsDiff.diffCss: Diff targeted at CSS content\n *\n * These methods are based on the implementation proposed in\n * \"An O(ND) Difference Algorithm and its Variations\" (Myers, 1986).\n * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927\n */\nvar JsDiff = (function() {\n  /*jshint maxparams: 5*/\n  function clonePath(path) {\n    return { newPos: path.newPos, components: path.components.slice(0) };\n  }\n  function removeEmpty(array) {\n    var ret = [];\n    for (var i = 0; i < array.length; i++) {\n      if (array[i]) {\n        ret.push(array[i]);\n      }\n    }\n    return ret;\n  }\n  function escapeHTML(s) {\n    var n = s;\n    n = n.replace(/&/g, '&amp;');\n    n = n.replace(/</g, '&lt;');\n    n = n.replace(/>/g, '&gt;');\n    n = n.replace(/\"/g, '&quot;');\n\n    return n;\n  }\n\n  var Diff = function(ignoreWhitespace) {\n    this.ignoreWhitespace = ignoreWhitespace;\n  };\n  Diff.prototype = {\n      diff: function(oldString, newString) {\n        // Handle the identity case (this is due to unrolling editLength == 0\n        if (newString === oldString) {\n          return [{ value: newString }];\n        }\n        if (!newString) {\n          return [{ value: oldString, removed: true }];\n        }\n        if (!oldString) {\n          return [{ value: newString, added: true }];\n        }\n\n        newString = this.tokenize(newString);\n        oldString = this.tokenize(oldString);\n\n        var newLen = newString.length, oldLen = oldString.length;\n        var maxEditLength = newLen + oldLen;\n        var bestPath = [{ newPos: -1, components: [] }];\n\n        // Seed editLength = 0\n        var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);\n        if (bestPath[0].newPos+1 >= newLen && oldPos+1 >= oldLen) {\n          return bestPath[0].components;\n        }\n\n        for (var editLength = 1; editLength <= maxEditLength; editLength++) {\n          for (var diagonalPath = -1*editLength; diagonalPath <= editLength; diagonalPath+=2) {\n            var basePath;\n            var addPath = bestPath[diagonalPath-1],\n                removePath = bestPath[diagonalPath+1];\n            oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;\n            if (addPath) {\n              // No one else is going to attempt to use this value, clear it\n              bestPath[diagonalPath-1] = undefined;\n            }\n\n            var canAdd = addPath && addPath.newPos+1 < newLen;\n            var canRemove = removePath && 0 <= oldPos && oldPos < oldLen;\n            if (!canAdd && !canRemove) {\n              bestPath[diagonalPath] = undefined;\n              continue;\n            }\n\n            // Select the diagonal that we want to branch from. We select the prior\n            // path whose position in the new string is the farthest from the origin\n            // and does not pass the bounds of the diff graph\n            if (!canAdd || (canRemove && addPath.newPos < removePath.newPos)) {\n              basePath = clonePath(removePath);\n              this.pushComponent(basePath.components, oldString[oldPos], undefined, true);\n            } else {\n              basePath = clonePath(addPath);\n              basePath.newPos++;\n              this.pushComponent(basePath.components, newString[basePath.newPos], true, undefined);\n            }\n\n            var oldPos = this.extractCommon(basePath, newString, oldString, diagonalPath);\n\n            if (basePath.newPos+1 >= newLen && oldPos+1 >= oldLen) {\n              return basePath.components;\n            } else {\n              bestPath[diagonalPath] = basePath;\n            }\n          }\n        }\n      },\n\n      pushComponent: function(components, value, added, removed) {\n        var last = components[components.length-1];\n        if (last && last.added === added && last.removed === removed) {\n          // We need to clone here as the component clone operation is just\n          // as shallow array clone\n          components[components.length-1] =\n            {value: this.join(last.value, value), added: added, removed: removed };\n        } else {\n          components.push({value: value, added: added, removed: removed });\n        }\n      },\n      extractCommon: function(basePath, newString, oldString, diagonalPath) {\n        var newLen = newString.length,\n            oldLen = oldString.length,\n            newPos = basePath.newPos,\n            oldPos = newPos - diagonalPath;\n        while (newPos+1 < newLen && oldPos+1 < oldLen && this.equals(newString[newPos+1], oldString[oldPos+1])) {\n          newPos++;\n          oldPos++;\n\n          this.pushComponent(basePath.components, newString[newPos], undefined, undefined);\n        }\n        basePath.newPos = newPos;\n        return oldPos;\n      },\n\n      equals: function(left, right) {\n        var reWhitespace = /\\S/;\n        if (this.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right)) {\n          return true;\n        } else {\n          return left === right;\n        }\n      },\n      join: function(left, right) {\n        return left + right;\n      },\n      tokenize: function(value) {\n        return value;\n      }\n  };\n\n  var CharDiff = new Diff();\n\n  var WordDiff = new Diff(true);\n  var WordWithSpaceDiff = new Diff();\n  WordDiff.tokenize = WordWithSpaceDiff.tokenize = function(value) {\n    return removeEmpty(value.split(/(\\s+|\\b)/));\n  };\n\n  var CssDiff = new Diff(true);\n  CssDiff.tokenize = function(value) {\n    return removeEmpty(value.split(/([{}:;,]|\\s+)/));\n  };\n\n  var LineDiff = new Diff();\n  LineDiff.tokenize = function(value) {\n    var retLines = [],\n        lines = value.split(/^/m);\n\n    for(var i = 0; i < lines.length; i++) {\n      var line = lines[i],\n          lastLine = lines[i - 1];\n\n      // Merge lines that may contain windows new lines\n      if (line == '\\n' && lastLine && lastLine[lastLine.length - 1] === '\\r') {\n        retLines[retLines.length - 1] += '\\n';\n      } else if (line) {\n        retLines.push(line);\n      }\n    }\n\n    return retLines;\n  };\n\n  return {\n    Diff: Diff,\n\n    diffChars: function(oldStr, newStr) { return CharDiff.diff(oldStr, newStr); },\n    diffWords: function(oldStr, newStr) { return WordDiff.diff(oldStr, newStr); },\n    diffWordsWithSpace: function(oldStr, newStr) { return WordWithSpaceDiff.diff(oldStr, newStr); },\n    diffLines: function(oldStr, newStr) { return LineDiff.diff(oldStr, newStr); },\n\n    diffCss: function(oldStr, newStr) { return CssDiff.diff(oldStr, newStr); },\n\n    createPatch: function(fileName, oldStr, newStr, oldHeader, newHeader) {\n      var ret = [];\n\n      ret.push('Index: ' + fileName);\n      ret.push('===================================================================');\n      ret.push('--- ' + fileName + (typeof oldHeader === 'undefined' ? '' : '\\t' + oldHeader));\n      ret.push('+++ ' + fileName + (typeof newHeader === 'undefined' ? '' : '\\t' + newHeader));\n\n      var diff = LineDiff.diff(oldStr, newStr);\n      if (!diff[diff.length-1].value) {\n        diff.pop();   // Remove trailing newline add\n      }\n      diff.push({value: '', lines: []});   // Append an empty value to make cleanup easier\n\n      function contextLines(lines) {\n        return lines.map(function(entry) { return ' ' + entry; });\n      }\n      function eofNL(curRange, i, current) {\n        var last = diff[diff.length-2],\n            isLast = i === diff.length-2,\n            isLastOfType = i === diff.length-3 && (current.added !== last.added || current.removed !== last.removed);\n\n        // Figure out if this is the last line for the given file and missing NL\n        if (!/\\n$/.test(current.value) && (isLast || isLastOfType)) {\n          curRange.push('\\\\ No newline at end of file');\n        }\n      }\n\n      var oldRangeStart = 0, newRangeStart = 0, curRange = [],\n          oldLine = 1, newLine = 1;\n      for (var i = 0; i < diff.length; i++) {\n        var current = diff[i],\n            lines = current.lines || current.value.replace(/\\n$/, '').split('\\n');\n        current.lines = lines;\n\n        if (current.added || current.removed) {\n          if (!oldRangeStart) {\n            var prev = diff[i-1];\n            oldRangeStart = oldLine;\n            newRangeStart = newLine;\n\n            if (prev) {\n              curRange = contextLines(prev.lines.slice(-4));\n              oldRangeStart -= curRange.length;\n              newRangeStart -= curRange.length;\n            }\n          }\n          curRange.push.apply(curRange, lines.map(function(entry) { return (current.added?'+':'-') + entry; }));\n          eofNL(curRange, i, current);\n\n          if (current.added) {\n            newLine += lines.length;\n          } else {\n            oldLine += lines.length;\n          }\n        } else {\n          if (oldRangeStart) {\n            // Close out any changes that have been output (or join overlapping)\n            if (lines.length <= 8 && i < diff.length-2) {\n              // Overlapping\n              curRange.push.apply(curRange, contextLines(lines));\n            } else {\n              // end the range and output\n              var contextSize = Math.min(lines.length, 4);\n              ret.push(\n                  '@@ -' + oldRangeStart + ',' + (oldLine-oldRangeStart+contextSize)\n                  + ' +' + newRangeStart + ',' + (newLine-newRangeStart+contextSize)\n                  + ' @@');\n              ret.push.apply(ret, curRange);\n              ret.push.apply(ret, contextLines(lines.slice(0, contextSize)));\n              if (lines.length <= 4) {\n                eofNL(ret, i, current);\n              }\n\n              oldRangeStart = 0;  newRangeStart = 0; curRange = [];\n            }\n          }\n          oldLine += lines.length;\n          newLine += lines.length;\n        }\n      }\n\n      return ret.join('\\n') + '\\n';\n    },\n\n    applyPatch: function(oldStr, uniDiff) {\n      var diffstr = uniDiff.split('\\n');\n      var diff = [];\n      var remEOFNL = false,\n          addEOFNL = false;\n\n      for (var i = (diffstr[0][0]==='I'?4:0); i < diffstr.length; i++) {\n        if(diffstr[i][0] === '@') {\n          var meh = diffstr[i].split(/@@ -(\\d+),(\\d+) \\+(\\d+),(\\d+) @@/);\n          diff.unshift({\n            start:meh[3],\n            oldlength:meh[2],\n            oldlines:[],\n            newlength:meh[4],\n            newlines:[]\n          });\n        } else if(diffstr[i][0] === '+') {\n          diff[0].newlines.push(diffstr[i].substr(1));\n        } else if(diffstr[i][0] === '-') {\n          diff[0].oldlines.push(diffstr[i].substr(1));\n        } else if(diffstr[i][0] === ' ') {\n          diff[0].newlines.push(diffstr[i].substr(1));\n          diff[0].oldlines.push(diffstr[i].substr(1));\n        } else if(diffstr[i][0] === '\\\\') {\n          if (diffstr[i-1][0] === '+') {\n            remEOFNL = true;\n          } else if(diffstr[i-1][0] === '-') {\n            addEOFNL = true;\n          }\n        }\n      }\n\n      var str = oldStr.split('\\n');\n      for (var i = diff.length - 1; i >= 0; i--) {\n        var d = diff[i];\n        for (var j = 0; j < d.oldlength; j++) {\n          if(str[d.start-1+j] !== d.oldlines[j]) {\n            return false;\n          }\n        }\n        Array.prototype.splice.apply(str,[d.start-1,+d.oldlength].concat(d.newlines));\n      }\n\n      if (remEOFNL) {\n        while (!str[str.length-1]) {\n          str.pop();\n        }\n      } else if (addEOFNL) {\n        str.push('');\n      }\n      return str.join('\\n');\n    },\n\n    convertChangesToXML: function(changes){\n      var ret = [];\n      for ( var i = 0; i < changes.length; i++) {\n        var change = changes[i];\n        if (change.added) {\n          ret.push('<ins>');\n        } else if (change.removed) {\n          ret.push('<del>');\n        }\n\n        ret.push(escapeHTML(change.value));\n\n        if (change.added) {\n          ret.push('</ins>');\n        } else if (change.removed) {\n          ret.push('</del>');\n        }\n      }\n      return ret.join('');\n    },\n\n    // See: http://code.google.com/p/google-diff-match-patch/wiki/API\n    convertChangesToDMP: function(changes){\n      var ret = [], change;\n      for ( var i = 0; i < changes.length; i++) {\n        change = changes[i];\n        ret.push([(change.added ? 1 : change.removed ? -1 : 0), change.value]);\n      }\n      return ret;\n    }\n  };\n})();\n\nif (typeof module !== 'undefined') {\n    module.exports = JsDiff;\n}\n\n}); // module: browser/diff.js\n\nrequire.register(\"browser/escape-string-regexp.js\", function(module, exports, require){\n'use strict';\n\nvar matchOperatorsRe = /[|\\\\{}()[\\]^$+*?.]/g;\n\nmodule.exports = function (str) {\n  if (typeof str !== 'string') {\n    throw new TypeError('Expected a string');\n  }\n\n  return str.replace(matchOperatorsRe,  '\\\\$&');\n};\n\n}); // module: browser/escape-string-regexp.js\n\nrequire.register(\"browser/events.js\", function(module, exports, require){\n/**\n * Module exports.\n */\n\nexports.EventEmitter = EventEmitter;\n\n/**\n * Check if `obj` is an array.\n */\n\nfunction isArray(obj) {\n  return '[object Array]' == {}.toString.call(obj);\n}\n\n/**\n * Event emitter constructor.\n *\n * @api public\n */\n\nfunction EventEmitter(){};\n\n/**\n * Adds a listener.\n *\n * @api public\n */\n\nEventEmitter.prototype.on = function (name, fn) {\n  if (!this.$events) {\n    this.$events = {};\n  }\n\n  if (!this.$events[name]) {\n    this.$events[name] = fn;\n  } else if (isArray(this.$events[name])) {\n    this.$events[name].push(fn);\n  } else {\n    this.$events[name] = [this.$events[name], fn];\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.addListener = EventEmitter.prototype.on;\n\n/**\n * Adds a volatile listener.\n *\n * @api public\n */\n\nEventEmitter.prototype.once = function (name, fn) {\n  var self = this;\n\n  function on () {\n    self.removeListener(name, on);\n    fn.apply(this, arguments);\n  };\n\n  on.listener = fn;\n  this.on(name, on);\n\n  return this;\n};\n\n/**\n * Removes a listener.\n *\n * @api public\n */\n\nEventEmitter.prototype.removeListener = function (name, fn) {\n  if (this.$events && this.$events[name]) {\n    var list = this.$events[name];\n\n    if (isArray(list)) {\n      var pos = -1;\n\n      for (var i = 0, l = list.length; i < l; i++) {\n        if (list[i] === fn || (list[i].listener && list[i].listener === fn)) {\n          pos = i;\n          break;\n        }\n      }\n\n      if (pos < 0) {\n        return this;\n      }\n\n      list.splice(pos, 1);\n\n      if (!list.length) {\n        delete this.$events[name];\n      }\n    } else if (list === fn || (list.listener && list.listener === fn)) {\n      delete this.$events[name];\n    }\n  }\n\n  return this;\n};\n\n/**\n * Removes all listeners for an event.\n *\n * @api public\n */\n\nEventEmitter.prototype.removeAllListeners = function (name) {\n  if (name === undefined) {\n    this.$events = {};\n    return this;\n  }\n\n  if (this.$events && this.$events[name]) {\n    this.$events[name] = null;\n  }\n\n  return this;\n};\n\n/**\n * Gets all listeners for a certain event.\n *\n * @api public\n */\n\nEventEmitter.prototype.listeners = function (name) {\n  if (!this.$events) {\n    this.$events = {};\n  }\n\n  if (!this.$events[name]) {\n    this.$events[name] = [];\n  }\n\n  if (!isArray(this.$events[name])) {\n    this.$events[name] = [this.$events[name]];\n  }\n\n  return this.$events[name];\n};\n\n/**\n * Emits an event.\n *\n * @api public\n */\n\nEventEmitter.prototype.emit = function (name) {\n  if (!this.$events) {\n    return false;\n  }\n\n  var handler = this.$events[name];\n\n  if (!handler) {\n    return false;\n  }\n\n  var args = [].slice.call(arguments, 1);\n\n  if ('function' == typeof handler) {\n    handler.apply(this, args);\n  } else if (isArray(handler)) {\n    var listeners = handler.slice();\n\n    for (var i = 0, l = listeners.length; i < l; i++) {\n      listeners[i].apply(this, args);\n    }\n  } else {\n    return false;\n  }\n\n  return true;\n};\n\n}); // module: browser/events.js\n\nrequire.register(\"browser/fs.js\", function(module, exports, require){\n\n}); // module: browser/fs.js\n\nrequire.register(\"browser/glob.js\", function(module, exports, require){\n\n}); // module: browser/glob.js\n\nrequire.register(\"browser/path.js\", function(module, exports, require){\n\n}); // module: browser/path.js\n\nrequire.register(\"browser/progress.js\", function(module, exports, require){\n/**\n * Expose `Progress`.\n */\n\nmodule.exports = Progress;\n\n/**\n * Initialize a new `Progress` indicator.\n */\n\nfunction Progress() {\n  this.percent = 0;\n  this.size(0);\n  this.fontSize(11);\n  this.font('helvetica, arial, sans-serif');\n}\n\n/**\n * Set progress size to `n`.\n *\n * @param {Number} n\n * @return {Progress} for chaining\n * @api public\n */\n\nProgress.prototype.size = function(n){\n  this._size = n;\n  return this;\n};\n\n/**\n * Set text to `str`.\n *\n * @param {String} str\n * @return {Progress} for chaining\n * @api public\n */\n\nProgress.prototype.text = function(str){\n  this._text = str;\n  return this;\n};\n\n/**\n * Set font size to `n`.\n *\n * @param {Number} n\n * @return {Progress} for chaining\n * @api public\n */\n\nProgress.prototype.fontSize = function(n){\n  this._fontSize = n;\n  return this;\n};\n\n/**\n * Set font `family`.\n *\n * @param {String} family\n * @return {Progress} for chaining\n */\n\nProgress.prototype.font = function(family){\n  this._font = family;\n  return this;\n};\n\n/**\n * Update percentage to `n`.\n *\n * @param {Number} n\n * @return {Progress} for chaining\n */\n\nProgress.prototype.update = function(n){\n  this.percent = n;\n  return this;\n};\n\n/**\n * Draw on `ctx`.\n *\n * @param {CanvasRenderingContext2d} ctx\n * @return {Progress} for chaining\n */\n\nProgress.prototype.draw = function(ctx){\n  try {\n    var percent = Math.min(this.percent, 100)\n      , size = this._size\n      , half = size / 2\n      , x = half\n      , y = half\n      , rad = half - 1\n      , fontSize = this._fontSize;\n\n    ctx.font = fontSize + 'px ' + this._font;\n\n    var angle = Math.PI * 2 * (percent / 100);\n    ctx.clearRect(0, 0, size, size);\n\n    // outer circle\n    ctx.strokeStyle = '#9f9f9f';\n    ctx.beginPath();\n    ctx.arc(x, y, rad, 0, angle, false);\n    ctx.stroke();\n\n    // inner circle\n    ctx.strokeStyle = '#eee';\n    ctx.beginPath();\n    ctx.arc(x, y, rad - 1, 0, angle, true);\n    ctx.stroke();\n\n    // text\n    var text = this._text || (percent | 0) + '%'\n      , w = ctx.measureText(text).width;\n\n    ctx.fillText(\n        text\n      , x - w / 2 + 1\n      , y + fontSize / 2 - 1);\n  } catch (ex) {} //don't fail if we can't render progress\n  return this;\n};\n\n}); // module: browser/progress.js\n\nrequire.register(\"browser/tty.js\", function(module, exports, require){\nexports.isatty = function(){\n  return true;\n};\n\nexports.getWindowSize = function(){\n  if ('innerHeight' in global) {\n    return [global.innerHeight, global.innerWidth];\n  } else {\n    // In a Web Worker, the DOM Window is not available.\n    return [640, 480];\n  }\n};\n\n}); // module: browser/tty.js\n\nrequire.register(\"context.js\", function(module, exports, require){\n/**\n * Expose `Context`.\n */\n\nmodule.exports = Context;\n\n/**\n * Initialize a new `Context`.\n *\n * @api private\n */\n\nfunction Context(){}\n\n/**\n * Set or get the context `Runnable` to `runnable`.\n *\n * @param {Runnable} runnable\n * @return {Context}\n * @api private\n */\n\nContext.prototype.runnable = function(runnable){\n  if (0 == arguments.length) return this._runnable;\n  this.test = this._runnable = runnable;\n  return this;\n};\n\n/**\n * Set test timeout `ms`.\n *\n * @param {Number} ms\n * @return {Context} self\n * @api private\n */\n\nContext.prototype.timeout = function(ms){\n  if (arguments.length === 0) return this.runnable().timeout();\n  this.runnable().timeout(ms);\n  return this;\n};\n\n/**\n * Set test timeout `enabled`.\n *\n * @param {Boolean} enabled\n * @return {Context} self\n * @api private\n */\n\nContext.prototype.enableTimeouts = function (enabled) {\n  this.runnable().enableTimeouts(enabled);\n  return this;\n};\n\n\n/**\n * Set test slowness threshold `ms`.\n *\n * @param {Number} ms\n * @return {Context} self\n * @api private\n */\n\nContext.prototype.slow = function(ms){\n  this.runnable().slow(ms);\n  return this;\n};\n\n/**\n * Mark a test as skipped.\n *\n * @return {Context} self\n * @api private\n */\n\nContext.prototype.skip = function(){\n    this.runnable().skip();\n    return this;\n};\n\n/**\n * Inspect the context void of `._runnable`.\n *\n * @return {String}\n * @api private\n */\n\nContext.prototype.inspect = function(){\n  return JSON.stringify(this, function(key, val){\n    if ('_runnable' == key) return;\n    if ('test' == key) return;\n    return val;\n  }, 2);\n};\n\n}); // module: context.js\n\nrequire.register(\"hook.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Runnable = require('./runnable');\n\n/**\n * Expose `Hook`.\n */\n\nmodule.exports = Hook;\n\n/**\n * Initialize a new `Hook` with the given `title` and callback `fn`.\n *\n * @param {String} title\n * @param {Function} fn\n * @api private\n */\n\nfunction Hook(title, fn) {\n  Runnable.call(this, title, fn);\n  this.type = 'hook';\n}\n\n/**\n * Inherit from `Runnable.prototype`.\n */\n\nfunction F(){};\nF.prototype = Runnable.prototype;\nHook.prototype = new F;\nHook.prototype.constructor = Hook;\n\n\n/**\n * Get or set the test `err`.\n *\n * @param {Error} err\n * @return {Error}\n * @api public\n */\n\nHook.prototype.error = function(err){\n  if (0 == arguments.length) {\n    var err = this._error;\n    this._error = null;\n    return err;\n  }\n\n  this._error = err;\n};\n\n}); // module: hook.js\n\nrequire.register(\"interfaces/bdd.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Suite = require('../suite')\n  , Test = require('../test')\n  , utils = require('../utils')\n  , escapeRe = require('browser/escape-string-regexp');\n\n/**\n * BDD-style interface:\n *\n *      describe('Array', function(){\n *        describe('#indexOf()', function(){\n *          it('should return -1 when not present', function(){\n *\n *          });\n *\n *          it('should return the index when present', function(){\n *\n *          });\n *        });\n *      });\n *\n */\n\nmodule.exports = function(suite){\n  var suites = [suite];\n\n  suite.on('pre-require', function(context, file, mocha){\n\n    var common = require('./common')(suites, context);\n\n    context.before = common.before;\n    context.after = common.after;\n    context.beforeEach = common.beforeEach;\n    context.afterEach = common.afterEach;\n    context.run = mocha.options.delay && common.runWithSuite(suite);\n    /**\n     * Describe a \"suite\" with the given `title`\n     * and callback `fn` containing nested suites\n     * and/or tests.\n     */\n\n    context.describe = context.context = function(title, fn){\n      var suite = Suite.create(suites[0], title);\n      suite.file = file;\n      suites.unshift(suite);\n      fn.call(suite);\n      suites.shift();\n      return suite;\n    };\n\n    /**\n     * Pending describe.\n     */\n\n    context.xdescribe =\n    context.xcontext =\n    context.describe.skip = function(title, fn){\n      var suite = Suite.create(suites[0], title);\n      suite.pending = true;\n      suites.unshift(suite);\n      fn.call(suite);\n      suites.shift();\n    };\n\n    /**\n     * Exclusive suite.\n     */\n\n    context.describe.only = function(title, fn){\n      var suite = context.describe(title, fn);\n      mocha.grep(suite.fullTitle());\n      return suite;\n    };\n\n    /**\n     * Describe a specification or test-case\n     * with the given `title` and callback `fn`\n     * acting as a thunk.\n     */\n\n    context.it = context.specify = function(title, fn){\n      var suite = suites[0];\n      if (suite.pending) fn = null;\n      var test = new Test(title, fn);\n      test.file = file;\n      suite.addTest(test);\n      return test;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.it.only = function(title, fn){\n      var test = context.it(title, fn);\n      var reString = '^' + escapeRe(test.fullTitle()) + '$';\n      mocha.grep(new RegExp(reString));\n      return test;\n    };\n\n    /**\n     * Pending test case.\n     */\n\n    context.xit =\n    context.xspecify =\n    context.it.skip = function(title){\n      context.it(title);\n    };\n\n  });\n};\n\n}); // module: interfaces/bdd.js\n\nrequire.register(\"interfaces/common.js\", function(module, exports, require){\n/**\n * Functions common to more than one interface\n * @module lib/interfaces/common\n */\n\n'use strict';\n\nmodule.exports = function (suites, context) {\n\n  return {\n    /**\n     * This is only present if flag --delay is passed into Mocha.  It triggers\n     * root suite execution.  Returns a function which runs the root suite.\n     */\n    runWithSuite: function runWithSuite(suite) {\n      return function run() {\n        suite.run();\n      };\n    },\n\n    /**\n     * Execute before running tests.\n     */\n    before: function (name, fn) {\n      suites[0].beforeAll(name, fn);\n    },\n\n    /**\n     * Execute after running tests.\n     */\n    after: function (name, fn) {\n      suites[0].afterAll(name, fn);\n    },\n\n    /**\n     * Execute before each test case.\n     */\n    beforeEach: function (name, fn) {\n      suites[0].beforeEach(name, fn);\n    },\n\n    /**\n     * Execute after each test case.\n     */\n    afterEach: function (name, fn) {\n      suites[0].afterEach(name, fn);\n    },\n\n    test: {\n      /**\n       * Pending test case.\n       */\n      skip: function (title) {\n        context.test(title);\n      }\n    }\n  }\n};\n\n}); // module: interfaces/common.js\n\nrequire.register(\"interfaces/exports.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Suite = require('../suite')\n  , Test = require('../test');\n\n/**\n * TDD-style interface:\n *\n *     exports.Array = {\n *       '#indexOf()': {\n *         'should return -1 when the value is not present': function(){\n *\n *         },\n *\n *         'should return the correct index when the value is present': function(){\n *\n *         }\n *       }\n *     };\n *\n */\n\nmodule.exports = function(suite){\n  var suites = [suite];\n\n  suite.on('require', visit);\n\n  function visit(obj, file) {\n    var suite;\n    for (var key in obj) {\n      if ('function' == typeof obj[key]) {\n        var fn = obj[key];\n        switch (key) {\n          case 'before':\n            suites[0].beforeAll(fn);\n            break;\n          case 'after':\n            suites[0].afterAll(fn);\n            break;\n          case 'beforeEach':\n            suites[0].beforeEach(fn);\n            break;\n          case 'afterEach':\n            suites[0].afterEach(fn);\n            break;\n          default:\n            var test = new Test(key, fn);\n            test.file = file;\n            suites[0].addTest(test);\n        }\n      } else {\n        suite = Suite.create(suites[0], key);\n        suites.unshift(suite);\n        visit(obj[key]);\n        suites.shift();\n      }\n    }\n  }\n};\n\n}); // module: interfaces/exports.js\n\nrequire.register(\"interfaces/index.js\", function(module, exports, require){\nexports.bdd = require('./bdd');\nexports.tdd = require('./tdd');\nexports.qunit = require('./qunit');\nexports.exports = require('./exports');\n\n}); // module: interfaces/index.js\n\nrequire.register(\"interfaces/qunit.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Suite = require('../suite')\n  , Test = require('../test')\n  , escapeRe = require('browser/escape-string-regexp')\n  , utils = require('../utils');\n\n/**\n * QUnit-style interface:\n *\n *     suite('Array');\n *\n *     test('#length', function(){\n *       var arr = [1,2,3];\n *       ok(arr.length == 3);\n *     });\n *\n *     test('#indexOf()', function(){\n *       var arr = [1,2,3];\n *       ok(arr.indexOf(1) == 0);\n *       ok(arr.indexOf(2) == 1);\n *       ok(arr.indexOf(3) == 2);\n *     });\n *\n *     suite('String');\n *\n *     test('#length', function(){\n *       ok('foo'.length == 3);\n *     });\n *\n */\n\nmodule.exports = function(suite){\n  var suites = [suite];\n\n  suite.on('pre-require', function(context, file, mocha){\n\n    var common = require('./common')(suites, context);\n\n    context.before = common.before;\n    context.after = common.after;\n    context.beforeEach = common.beforeEach;\n    context.afterEach = common.afterEach;\n    context.run = mocha.options.delay && common.runWithSuite(suite);\n    /**\n     * Describe a \"suite\" with the given `title`.\n     */\n\n    context.suite = function(title){\n      if (suites.length > 1) suites.shift();\n      var suite = Suite.create(suites[0], title);\n      suite.file = file;\n      suites.unshift(suite);\n      return suite;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.suite.only = function(title, fn){\n      var suite = context.suite(title, fn);\n      mocha.grep(suite.fullTitle());\n    };\n\n    /**\n     * Describe a specification or test-case\n     * with the given `title` and callback `fn`\n     * acting as a thunk.\n     */\n\n    context.test = function(title, fn){\n      var test = new Test(title, fn);\n      test.file = file;\n      suites[0].addTest(test);\n      return test;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.test.only = function(title, fn){\n      var test = context.test(title, fn);\n      var reString = '^' + escapeRe(test.fullTitle()) + '$';\n      mocha.grep(new RegExp(reString));\n    };\n\n    context.test.skip = common.test.skip;\n\n  });\n};\n\n}); // module: interfaces/qunit.js\n\nrequire.register(\"interfaces/tdd.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Suite = require('../suite')\n  , Test = require('../test')\n  , escapeRe = require('browser/escape-string-regexp')\n  , utils = require('../utils');\n\n/**\n * TDD-style interface:\n *\n *      suite('Array', function(){\n *        suite('#indexOf()', function(){\n *          suiteSetup(function(){\n *\n *          });\n *\n *          test('should return -1 when not present', function(){\n *\n *          });\n *\n *          test('should return the index when present', function(){\n *\n *          });\n *\n *          suiteTeardown(function(){\n *\n *          });\n *        });\n *      });\n *\n */\n\nmodule.exports = function(suite){\n  var suites = [suite];\n\n  suite.on('pre-require', function(context, file, mocha){\n\n    var common = require('./common')(suites, context);\n\n    context.setup = common.beforeEach;\n    context.teardown = common.afterEach;\n    context.suiteSetup = common.before;\n    context.suiteTeardown = common.after;\n    context.run = mocha.options.delay && common.runWithSuite(suite);\n    /**\n     * Describe a \"suite\" with the given `title`\n     * and callback `fn` containing nested suites\n     * and/or tests.\n     */\n\n    context.suite = function(title, fn){\n      var suite = Suite.create(suites[0], title);\n      suite.file = file;\n      suites.unshift(suite);\n      fn.call(suite);\n      suites.shift();\n      return suite;\n    };\n\n    /**\n     * Pending suite.\n     */\n    context.suite.skip = function(title, fn) {\n      var suite = Suite.create(suites[0], title);\n      suite.pending = true;\n      suites.unshift(suite);\n      fn.call(suite);\n      suites.shift();\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.suite.only = function(title, fn){\n      var suite = context.suite(title, fn);\n      mocha.grep(suite.fullTitle());\n    };\n\n    /**\n     * Describe a specification or test-case\n     * with the given `title` and callback `fn`\n     * acting as a thunk.\n     */\n\n    context.test = function(title, fn){\n      var suite = suites[0];\n      if (suite.pending) fn = null;\n      var test = new Test(title, fn);\n      test.file = file;\n      suite.addTest(test);\n      return test;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.test.only = function(title, fn){\n      var test = context.test(title, fn);\n      var reString = '^' + escapeRe(test.fullTitle()) + '$';\n      mocha.grep(new RegExp(reString));\n    };\n\n    context.test.skip = common.test.skip;\n  });\n};\n\n}); // module: interfaces/tdd.js\n\nrequire.register(\"mocha.js\", function(module, exports, require){\n/*!\n * mocha\n * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>\n * MIT Licensed\n */\n\n/**\n * Module dependencies.\n */\n\nvar path = require('browser/path')\n  , escapeRe = require('browser/escape-string-regexp')\n  , utils = require('./utils');\n\n/**\n * Expose `Mocha`.\n */\n\nexports = module.exports = Mocha;\n\n/**\n * To require local UIs and reporters when running in node.\n */\n\nif (typeof process !== 'undefined' && typeof process.cwd === 'function') {\n  var join = path.join\n    , cwd = process.cwd();\n  module.paths.push(cwd, join(cwd, 'node_modules'));\n}\n\n/**\n * Expose internals.\n */\n\nexports.utils = utils;\nexports.interfaces = require('./interfaces');\nexports.reporters = require('./reporters');\nexports.Runnable = require('./runnable');\nexports.Context = require('./context');\nexports.Runner = require('./runner');\nexports.Suite = require('./suite');\nexports.Hook = require('./hook');\nexports.Test = require('./test');\n\n/**\n * Return image `name` path.\n *\n * @param {String} name\n * @return {String}\n * @api private\n */\n\nfunction image(name) {\n  return __dirname + '/../images/' + name + '.png';\n}\n\n/**\n * Setup mocha with `options`.\n *\n * Options:\n *\n *   - `ui` name \"bdd\", \"tdd\", \"exports\" etc\n *   - `reporter` reporter instance, defaults to `mocha.reporters.spec`\n *   - `globals` array of accepted globals\n *   - `timeout` timeout in milliseconds\n *   - `bail` bail on the first test failure\n *   - `slow` milliseconds to wait before considering a test slow\n *   - `ignoreLeaks` ignore global leaks\n *   - `fullTrace` display the full stack-trace on failing\n *   - `grep` string or regexp to filter tests with\n *\n * @param {Object} options\n * @api public\n */\n\nfunction Mocha(options) {\n  options = options || {};\n  this.files = [];\n  this.options = options;\n  if (options.grep) this.grep(new RegExp(options.grep));\n  if (options.fgrep) this.grep(options.fgrep);\n  this.suite = new exports.Suite('', new exports.Context);\n  this.ui(options.ui);\n  this.bail(options.bail);\n  this.reporter(options.reporter, options.reporterOptions);\n  if (null != options.timeout) this.timeout(options.timeout);\n  this.useColors(options.useColors);\n  if (options.enableTimeouts !== null) this.enableTimeouts(options.enableTimeouts);\n  if (options.slow) this.slow(options.slow);\n\n  this.suite.on('pre-require', function (context) {\n    exports.afterEach = context.afterEach || context.teardown;\n    exports.after = context.after || context.suiteTeardown;\n    exports.beforeEach = context.beforeEach || context.setup;\n    exports.before = context.before || context.suiteSetup;\n    exports.describe = context.describe || context.suite;\n    exports.it = context.it || context.test;\n    exports.setup = context.setup || context.beforeEach;\n    exports.suiteSetup = context.suiteSetup || context.before;\n    exports.suiteTeardown = context.suiteTeardown || context.after;\n    exports.suite = context.suite || context.describe;\n    exports.teardown = context.teardown || context.afterEach;\n    exports.test = context.test || context.it;\n    exports.run = context.run;\n  });\n}\n\n/**\n * Enable or disable bailing on the first failure.\n *\n * @param {Boolean} [bail]\n * @api public\n */\n\nMocha.prototype.bail = function(bail){\n  if (0 == arguments.length) bail = true;\n  this.suite.bail(bail);\n  return this;\n};\n\n/**\n * Add test `file`.\n *\n * @param {String} file\n * @api public\n */\n\nMocha.prototype.addFile = function(file){\n  this.files.push(file);\n  return this;\n};\n\n/**\n * Set reporter to `reporter`, defaults to \"spec\".\n *\n * @param {String|Function} reporter name or constructor\n * @param {Object} reporterOptions optional options\n * @api public\n */\nMocha.prototype.reporter = function(reporter, reporterOptions){\n  if ('function' == typeof reporter) {\n    this._reporter = reporter;\n  } else {\n    reporter = reporter || 'spec';\n    var _reporter;\n    try { _reporter = require('./reporters/' + reporter); } catch (err) {}\n    if (!_reporter) try { _reporter = require(reporter); } catch (err) {\n      err.message.indexOf('Cannot find module') !== -1\n        ? console.warn('\"' + reporter + '\" reporter not found')\n        : console.warn('\"' + reporter + '\" reporter blew up with error:\\n' + err.stack);\n    }\n    if (!_reporter && reporter === 'teamcity')\n      console.warn('The Teamcity reporter was moved to a package named ' +\n        'mocha-teamcity-reporter ' +\n        '(https://npmjs.org/package/mocha-teamcity-reporter).');\n    if (!_reporter) throw new Error('invalid reporter \"' + reporter + '\"');\n    this._reporter = _reporter;\n  }\n  this.options.reporterOptions = reporterOptions;\n  return this;\n};\n\n/**\n * Set test UI `name`, defaults to \"bdd\".\n *\n * @param {String} bdd\n * @api public\n */\n\nMocha.prototype.ui = function(name){\n  name = name || 'bdd';\n  this._ui = exports.interfaces[name];\n  if (!this._ui) try { this._ui = require(name); } catch (err) {}\n  if (!this._ui) throw new Error('invalid interface \"' + name + '\"');\n  this._ui = this._ui(this.suite);\n  return this;\n};\n\n/**\n * Load registered files.\n *\n * @api private\n */\n\nMocha.prototype.loadFiles = function(fn){\n  var self = this;\n  var suite = this.suite;\n  var pending = this.files.length;\n  this.files.forEach(function(file){\n    file = path.resolve(file);\n    suite.emit('pre-require', global, file, self);\n    suite.emit('require', require(file), file, self);\n    suite.emit('post-require', global, file, self);\n    --pending || (fn && fn());\n  });\n};\n\n/**\n * Enable growl support.\n *\n * @api private\n */\n\nMocha.prototype._growl = function(runner, reporter) {\n  var notify = require('growl');\n\n  runner.on('end', function(){\n    var stats = reporter.stats;\n    if (stats.failures) {\n      var msg = stats.failures + ' of ' + runner.total + ' tests failed';\n      notify(msg, { name: 'mocha', title: 'Failed', image: image('error') });\n    } else {\n      notify(stats.passes + ' tests passed in ' + stats.duration + 'ms', {\n          name: 'mocha'\n        , title: 'Passed'\n        , image: image('ok')\n      });\n    }\n  });\n};\n\n/**\n * Add regexp to grep, if `re` is a string it is escaped.\n *\n * @param {RegExp|String} re\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.grep = function(re){\n  this.options.grep = 'string' == typeof re\n    ? new RegExp(escapeRe(re))\n    : re;\n  return this;\n};\n\n/**\n * Invert `.grep()` matches.\n *\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.invert = function(){\n  this.options.invert = true;\n  return this;\n};\n\n/**\n * Ignore global leaks.\n *\n * @param {Boolean} ignore\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.ignoreLeaks = function(ignore){\n  this.options.ignoreLeaks = !!ignore;\n  return this;\n};\n\n/**\n * Enable global leak checking.\n *\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.checkLeaks = function(){\n  this.options.ignoreLeaks = false;\n  return this;\n};\n\n/**\n * Display long stack-trace on failing\n *\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.fullTrace = function() {\n  this.options.fullStackTrace = true;\n  return this;\n};\n\n/**\n * Enable growl support.\n *\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.growl = function(){\n  this.options.growl = true;\n  return this;\n};\n\n/**\n * Ignore `globals` array or string.\n *\n * @param {Array|String} globals\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.globals = function(globals){\n  this.options.globals = (this.options.globals || []).concat(globals);\n  return this;\n};\n\n/**\n * Emit color output.\n *\n * @param {Boolean} colors\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.useColors = function(colors){\n  if (colors !== undefined) {\n    this.options.useColors = colors;\n  }\n  return this;\n};\n\n/**\n * Use inline diffs rather than +/-.\n *\n * @param {Boolean} inlineDiffs\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.useInlineDiffs = function(inlineDiffs) {\n  this.options.useInlineDiffs = arguments.length && inlineDiffs != undefined\n  ? inlineDiffs\n  : false;\n  return this;\n};\n\n/**\n * Set the timeout in milliseconds.\n *\n * @param {Number} timeout\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.timeout = function(timeout){\n  this.suite.timeout(timeout);\n  return this;\n};\n\n/**\n * Set slowness threshold in milliseconds.\n *\n * @param {Number} slow\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.slow = function(slow){\n  this.suite.slow(slow);\n  return this;\n};\n\n/**\n * Enable timeouts.\n *\n * @param {Boolean} enabled\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.enableTimeouts = function(enabled) {\n  this.suite.enableTimeouts(arguments.length && enabled !== undefined\n    ? enabled\n    : true);\n  return this\n};\n\n/**\n * Makes all tests async (accepting a callback)\n *\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.asyncOnly = function(){\n  this.options.asyncOnly = true;\n  return this;\n};\n\n/**\n * Disable syntax highlighting (in browser).\n * @returns {Mocha}\n * @api public\n */\nMocha.prototype.noHighlighting = function() {\n  this.options.noHighlighting = true;\n  return this;\n};\n\n/**\n * Delay root suite execution.\n * @returns {Mocha}\n * @api public\n */\nMocha.prototype.delay = function delay() {\n  this.options.delay = true;\n  return this;\n};\n\n/**\n * Run tests and invoke `fn()` when complete.\n *\n * @param {Function} fn\n * @return {Runner}\n * @api public\n */\nMocha.prototype.run = function(fn){\n  if (this.files.length) this.loadFiles();\n  var suite = this.suite;\n  var options = this.options;\n  options.files = this.files;\n  var runner = new exports.Runner(suite, options.delay);\n  var reporter = new this._reporter(runner, options);\n  runner.ignoreLeaks = false !== options.ignoreLeaks;\n  runner.fullStackTrace = options.fullStackTrace;\n  runner.asyncOnly = options.asyncOnly;\n  if (options.grep) runner.grep(options.grep, options.invert);\n  if (options.globals) runner.globals(options.globals);\n  if (options.growl) this._growl(runner, reporter);\n  if (options.useColors !== undefined) {\n    exports.reporters.Base.useColors = options.useColors;\n  }\n  exports.reporters.Base.inlineDiffs = options.useInlineDiffs;\n\n  function done(failures) {\n      if (reporter.done) {\n          reporter.done(failures, fn);\n      } else fn && fn(failures);\n  }\n\n  return runner.run(done);\n};\n\n}); // module: mocha.js\n\nrequire.register(\"ms.js\", function(module, exports, require){\n/**\n * Helpers.\n */\n\nvar s = 1000;\nvar m = s * 60;\nvar h = m * 60;\nvar d = h * 24;\nvar y = d * 365.25;\n\n/**\n * Parse or format the given `val`.\n *\n * Options:\n *\n *  - `long` verbose formatting [false]\n *\n * @param {String|Number} val\n * @param {Object} options\n * @return {String|Number}\n * @api public\n */\n\nmodule.exports = function(val, options){\n  options = options || {};\n  if ('string' == typeof val) return parse(val);\n  return options['long'] ? longFormat(val) : shortFormat(val);\n};\n\n/**\n * Parse the given `str` and return milliseconds.\n *\n * @param {String} str\n * @return {Number}\n * @api private\n */\n\nfunction parse(str) {\n  var match = /^((?:\\d+)?\\.?\\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);\n  if (!match) return;\n  var n = parseFloat(match[1]);\n  var type = (match[2] || 'ms').toLowerCase();\n  switch (type) {\n    case 'years':\n    case 'year':\n    case 'y':\n      return n * y;\n    case 'days':\n    case 'day':\n    case 'd':\n      return n * d;\n    case 'hours':\n    case 'hour':\n    case 'h':\n      return n * h;\n    case 'minutes':\n    case 'minute':\n    case 'm':\n      return n * m;\n    case 'seconds':\n    case 'second':\n    case 's':\n      return n * s;\n    case 'ms':\n      return n;\n  }\n}\n\n/**\n * Short format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction shortFormat(ms) {\n  if (ms >= d) return Math.round(ms / d) + 'd';\n  if (ms >= h) return Math.round(ms / h) + 'h';\n  if (ms >= m) return Math.round(ms / m) + 'm';\n  if (ms >= s) return Math.round(ms / s) + 's';\n  return ms + 'ms';\n}\n\n/**\n * Long format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction longFormat(ms) {\n  return plural(ms, d, 'day')\n    || plural(ms, h, 'hour')\n    || plural(ms, m, 'minute')\n    || plural(ms, s, 'second')\n    || ms + ' ms';\n}\n\n/**\n * Pluralization helper.\n */\n\nfunction plural(ms, n, name) {\n  if (ms < n) return;\n  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;\n  return Math.ceil(ms / n) + ' ' + name + 's';\n}\n\n}); // module: ms.js\n\nrequire.register(\"pending.js\", function(module, exports, require){\n\n/**\n * Expose `Pending`.\n */\n\nmodule.exports = Pending;\n\n/**\n * Initialize a new `Pending` error with the given message.\n *\n * @param {String} message\n */\n\nfunction Pending(message) {\n    this.message = message;\n}\n\n}); // module: pending.js\n\nrequire.register(\"reporters/base.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar tty = require('browser/tty')\n  , diff = require('browser/diff')\n  , ms = require('../ms')\n  , utils = require('../utils')\n  , supportsColor = process.env ? require('supports-color') : null;\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date\n  , setTimeout = global.setTimeout\n  , setInterval = global.setInterval\n  , clearTimeout = global.clearTimeout\n  , clearInterval = global.clearInterval;\n\n/**\n * Check if both stdio streams are associated with a tty.\n */\n\nvar isatty = tty.isatty(1) && tty.isatty(2);\n\n/**\n * Expose `Base`.\n */\n\nexports = module.exports = Base;\n\n/**\n * Enable coloring by default, except in the browser interface.\n */\n\nexports.useColors = process.env\n  ? (supportsColor || (process.env.MOCHA_COLORS !== undefined))\n  : false;\n\n/**\n * Inline diffs instead of +/-\n */\n\nexports.inlineDiffs = false;\n\n/**\n * Default color map.\n */\n\nexports.colors = {\n    'pass': 90\n  , 'fail': 31\n  , 'bright pass': 92\n  , 'bright fail': 91\n  , 'bright yellow': 93\n  , 'pending': 36\n  , 'suite': 0\n  , 'error title': 0\n  , 'error message': 31\n  , 'error stack': 90\n  , 'checkmark': 32\n  , 'fast': 90\n  , 'medium': 33\n  , 'slow': 31\n  , 'green': 32\n  , 'light': 90\n  , 'diff gutter': 90\n  , 'diff added': 42\n  , 'diff removed': 41\n};\n\n/**\n * Default symbol map.\n */\n\nexports.symbols = {\n  ok: '✓',\n  err: '✖',\n  dot: '․'\n};\n\n// With node.js on Windows: use symbols available in terminal default fonts\nif ('win32' == process.platform) {\n  exports.symbols.ok = '\\u221A';\n  exports.symbols.err = '\\u00D7';\n  exports.symbols.dot = '.';\n}\n\n/**\n * Color `str` with the given `type`,\n * allowing colors to be disabled,\n * as well as user-defined color\n * schemes.\n *\n * @param {String} type\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nvar color = exports.color = function(type, str) {\n  if (!exports.useColors) return String(str);\n  return '\\u001b[' + exports.colors[type] + 'm' + str + '\\u001b[0m';\n};\n\n/**\n * Expose term window size, with some\n * defaults for when stderr is not a tty.\n */\n\nexports.window = {\n  width: isatty\n    ? process.stdout.getWindowSize\n      ? process.stdout.getWindowSize(1)[0]\n      : tty.getWindowSize()[1]\n    : 75\n};\n\n/**\n * Expose some basic cursor interactions\n * that are common among reporters.\n */\n\nexports.cursor = {\n  hide: function(){\n    isatty && process.stdout.write('\\u001b[?25l');\n  },\n\n  show: function(){\n    isatty && process.stdout.write('\\u001b[?25h');\n  },\n\n  deleteLine: function(){\n    isatty && process.stdout.write('\\u001b[2K');\n  },\n\n  beginningOfLine: function(){\n    isatty && process.stdout.write('\\u001b[0G');\n  },\n\n  CR: function(){\n    if (isatty) {\n      exports.cursor.deleteLine();\n      exports.cursor.beginningOfLine();\n    } else {\n      process.stdout.write('\\r');\n    }\n  }\n};\n\n/**\n * Outut the given `failures` as a list.\n *\n * @param {Array} failures\n * @api public\n */\n\nexports.list = function(failures){\n  console.log();\n  failures.forEach(function(test, i){\n    // format\n    var fmt = color('error title', '  %s) %s:\\n')\n      + color('error message', '     %s')\n      + color('error stack', '\\n%s\\n');\n\n    // msg\n    var err = test.err\n      , message = err.message || ''\n      , stack = err.stack || message\n      , index = stack.indexOf(message)\n      , actual = err.actual\n      , expected = err.expected\n      , escape = true;\n    if (index === -1) {\n      msg = message;\n    } else {\n      index += message.length;\n      msg = stack.slice(0, index);\n      // remove msg from stack\n      stack = stack.slice(index + 1);\n    }\n\n    // uncaught\n    if (err.uncaught) {\n      msg = 'Uncaught ' + msg;\n    }\n    // explicitly show diff\n    if (err.showDiff !== false && sameType(actual, expected)\n        && expected !== undefined) {\n\n      if ('string' !== typeof actual) {\n        escape = false;\n        err.actual = actual = utils.stringify(actual);\n        err.expected = expected = utils.stringify(expected);\n      }\n\n      fmt = color('error title', '  %s) %s:\\n%s') + color('error stack', '\\n%s\\n');\n      var match = message.match(/^([^:]+): expected/);\n      msg = '\\n      ' + color('error message', match ? match[1] : msg);\n\n      if (exports.inlineDiffs) {\n        msg += inlineDiff(err, escape);\n      } else {\n        msg += unifiedDiff(err, escape);\n      }\n    }\n\n    // indent stack trace\n    stack = stack.replace(/^/gm, '  ');\n\n    console.log(fmt, (i + 1), test.fullTitle(), msg, stack);\n  });\n};\n\n/**\n * Initialize a new `Base` reporter.\n *\n * All other reporters generally\n * inherit from this reporter, providing\n * stats such as test duration, number\n * of tests passed / failed etc.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Base(runner) {\n  var self = this\n    , stats = this.stats = { suites: 0, tests: 0, passes: 0, pending: 0, failures: 0 }\n    , failures = this.failures = [];\n\n  if (!runner) return;\n  this.runner = runner;\n\n  runner.stats = stats;\n\n  runner.on('start', function(){\n    stats.start = new Date;\n  });\n\n  runner.on('suite', function(suite){\n    stats.suites = stats.suites || 0;\n    suite.root || stats.suites++;\n  });\n\n  runner.on('test end', function(test){\n    stats.tests = stats.tests || 0;\n    stats.tests++;\n  });\n\n  runner.on('pass', function(test){\n    stats.passes = stats.passes || 0;\n\n    var medium = test.slow() / 2;\n    test.speed = test.duration > test.slow()\n      ? 'slow'\n      : test.duration > medium\n        ? 'medium'\n        : 'fast';\n\n    stats.passes++;\n  });\n\n  runner.on('fail', function(test, err){\n    stats.failures = stats.failures || 0;\n    stats.failures++;\n    test.err = err;\n    failures.push(test);\n  });\n\n  runner.on('end', function(){\n    stats.end = new Date;\n    stats.duration = new Date - stats.start;\n  });\n\n  runner.on('pending', function(){\n    stats.pending++;\n  });\n}\n\n/**\n * Output common epilogue used by many of\n * the bundled reporters.\n *\n * @api public\n */\n\nBase.prototype.epilogue = function(){\n  var stats = this.stats;\n  var tests;\n  var fmt;\n\n  console.log();\n\n  // passes\n  fmt = color('bright pass', ' ')\n    + color('green', ' %d passing')\n    + color('light', ' (%s)');\n\n  console.log(fmt,\n    stats.passes || 0,\n    ms(stats.duration));\n\n  // pending\n  if (stats.pending) {\n    fmt = color('pending', ' ')\n      + color('pending', ' %d pending');\n\n    console.log(fmt, stats.pending);\n  }\n\n  // failures\n  if (stats.failures) {\n    fmt = color('fail', '  %d failing');\n\n    console.log(fmt, stats.failures);\n\n    Base.list(this.failures);\n    console.log();\n  }\n\n  console.log();\n};\n\n/**\n * Pad the given `str` to `len`.\n *\n * @param {String} str\n * @param {String} len\n * @return {String}\n * @api private\n */\n\nfunction pad(str, len) {\n  str = String(str);\n  return Array(len - str.length + 1).join(' ') + str;\n}\n\n\n/**\n * Returns an inline diff between 2 strings with coloured ANSI output\n *\n * @param {Error} Error with actual/expected\n * @return {String} Diff\n * @api private\n */\n\nfunction inlineDiff(err, escape) {\n  var msg = errorDiff(err, 'WordsWithSpace', escape);\n\n  // linenos\n  var lines = msg.split('\\n');\n  if (lines.length > 4) {\n    var width = String(lines.length).length;\n    msg = lines.map(function(str, i){\n      return pad(++i, width) + ' |' + ' ' + str;\n    }).join('\\n');\n  }\n\n  // legend\n  msg = '\\n'\n    + color('diff removed', 'actual')\n    + ' '\n    + color('diff added', 'expected')\n    + '\\n\\n'\n    + msg\n    + '\\n';\n\n  // indent\n  msg = msg.replace(/^/gm, '      ');\n  return msg;\n}\n\n/**\n * Returns a unified diff between 2 strings\n *\n * @param {Error} Error with actual/expected\n * @return {String} Diff\n * @api private\n */\n\nfunction unifiedDiff(err, escape) {\n  var indent = '      ';\n  function cleanUp(line) {\n    if (escape) {\n      line = escapeInvisibles(line);\n    }\n    if (line[0] === '+') return indent + colorLines('diff added', line);\n    if (line[0] === '-') return indent + colorLines('diff removed', line);\n    if (line.match(/\\@\\@/)) return null;\n    if (line.match(/\\\\ No newline/)) return null;\n    else return indent + line;\n  }\n  function notBlank(line) {\n    return line != null;\n  }\n  var msg = diff.createPatch('string', err.actual, err.expected);\n  var lines = msg.split('\\n').splice(4);\n  return '\\n      '\n         + colorLines('diff added',   '+ expected') + ' '\n         + colorLines('diff removed', '- actual')\n         + '\\n\\n'\n         + lines.map(cleanUp).filter(notBlank).join('\\n');\n}\n\n/**\n * Return a character diff for `err`.\n *\n * @param {Error} err\n * @return {String}\n * @api private\n */\n\nfunction errorDiff(err, type, escape) {\n  var actual   = escape ? escapeInvisibles(err.actual)   : err.actual;\n  var expected = escape ? escapeInvisibles(err.expected) : err.expected;\n  return diff['diff' + type](actual, expected).map(function(str){\n    if (str.added) return colorLines('diff added', str.value);\n    if (str.removed) return colorLines('diff removed', str.value);\n    return str.value;\n  }).join('');\n}\n\n/**\n * Returns a string with all invisible characters in plain text\n *\n * @param {String} line\n * @return {String}\n * @api private\n */\nfunction escapeInvisibles(line) {\n    return line.replace(/\\t/g, '<tab>')\n               .replace(/\\r/g, '<CR>')\n               .replace(/\\n/g, '<LF>\\n');\n}\n\n/**\n * Color lines for `str`, using the color `name`.\n *\n * @param {String} name\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nfunction colorLines(name, str) {\n  return str.split('\\n').map(function(str){\n    return color(name, str);\n  }).join('\\n');\n}\n\n/**\n * Check that a / b have the same type.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Boolean}\n * @api private\n */\n\nfunction sameType(a, b) {\n  a = Object.prototype.toString.call(a);\n  b = Object.prototype.toString.call(b);\n  return a == b;\n}\n\n}); // module: reporters/base.js\n\nrequire.register(\"reporters/doc.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , utils = require('../utils');\n\n/**\n * Expose `Doc`.\n */\n\nexports = module.exports = Doc;\n\n/**\n * Initialize a new `Doc` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Doc(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , total = runner.total\n    , indents = 2;\n\n  function indent() {\n    return Array(indents).join('  ');\n  }\n\n  runner.on('suite', function(suite){\n    if (suite.root) return;\n    ++indents;\n    console.log('%s<section class=\"suite\">', indent());\n    ++indents;\n    console.log('%s<h1>%s</h1>', indent(), utils.escape(suite.title));\n    console.log('%s<dl>', indent());\n  });\n\n  runner.on('suite end', function(suite){\n    if (suite.root) return;\n    console.log('%s</dl>', indent());\n    --indents;\n    console.log('%s</section>', indent());\n    --indents;\n  });\n\n  runner.on('pass', function(test){\n    console.log('%s  <dt>%s</dt>', indent(), utils.escape(test.title));\n    var code = utils.escape(utils.clean(test.fn.toString()));\n    console.log('%s  <dd><pre><code>%s</code></pre></dd>', indent(), code);\n  });\n\n  runner.on('fail', function(test, err){\n    console.log('%s  <dt class=\"error\">%s</dt>', indent(), utils.escape(test.title));\n    var code = utils.escape(utils.clean(test.fn.toString()));\n    console.log('%s  <dd class=\"error\"><pre><code>%s</code></pre></dd>', indent(), code);\n    console.log('%s  <dd class=\"error\">%s</dd>', indent(), utils.escape(err));\n  });\n}\n\n}); // module: reporters/doc.js\n\nrequire.register(\"reporters/dot.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , color = Base.color;\n\n/**\n * Expose `Dot`.\n */\n\nexports = module.exports = Dot;\n\n/**\n * Initialize a new `Dot` matrix test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Dot(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , width = Base.window.width * .75 | 0\n    , n = -1;\n\n  runner.on('start', function(){\n    process.stdout.write('\\n');\n  });\n\n  runner.on('pending', function(test){\n    if (++n % width == 0) process.stdout.write('\\n  ');\n    process.stdout.write(color('pending', Base.symbols.dot));\n  });\n\n  runner.on('pass', function(test){\n    if (++n % width == 0) process.stdout.write('\\n  ');\n    if ('slow' == test.speed) {\n      process.stdout.write(color('bright yellow', Base.symbols.dot));\n    } else {\n      process.stdout.write(color(test.speed, Base.symbols.dot));\n    }\n  });\n\n  runner.on('fail', function(test, err){\n    if (++n % width == 0) process.stdout.write('\\n  ');\n    process.stdout.write(color('fail', Base.symbols.dot));\n  });\n\n  runner.on('end', function(){\n    console.log();\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nDot.prototype = new F;\nDot.prototype.constructor = Dot;\n\n\n}); // module: reporters/dot.js\n\nrequire.register(\"reporters/html-cov.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar JSONCov = require('./json-cov')\n  , fs = require('browser/fs');\n\n/**\n * Expose `HTMLCov`.\n */\n\nexports = module.exports = HTMLCov;\n\n/**\n * Initialize a new `JsCoverage` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction HTMLCov(runner) {\n  var jade = require('jade')\n    , file = __dirname + '/templates/coverage.jade'\n    , str = fs.readFileSync(file, 'utf8')\n    , fn = jade.compile(str, { filename: file })\n    , self = this;\n\n  JSONCov.call(this, runner, false);\n\n  runner.on('end', function(){\n    process.stdout.write(fn({\n        cov: self.cov\n      , coverageClass: coverageClass\n    }));\n  });\n}\n\n/**\n * Return coverage class for `n`.\n *\n * @return {String}\n * @api private\n */\n\nfunction coverageClass(n) {\n  if (n >= 75) return 'high';\n  if (n >= 50) return 'medium';\n  if (n >= 25) return 'low';\n  return 'terrible';\n}\n\n}); // module: reporters/html-cov.js\n\nrequire.register(\"reporters/html.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , utils = require('../utils')\n  , Progress = require('../browser/progress')\n  , escape = utils.escape;\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date\n  , setTimeout = global.setTimeout\n  , setInterval = global.setInterval\n  , clearTimeout = global.clearTimeout\n  , clearInterval = global.clearInterval;\n\n/**\n * Expose `HTML`.\n */\n\nexports = module.exports = HTML;\n\n/**\n * Stats template.\n */\n\nvar statsTemplate = '<ul id=\"mocha-stats\">'\n  + '<li class=\"progress\"><canvas width=\"40\" height=\"40\"></canvas></li>'\n  + '<li class=\"passes\"><a href=\"#\">passes:</a> <em>0</em></li>'\n  + '<li class=\"failures\"><a href=\"#\">failures:</a> <em>0</em></li>'\n  + '<li class=\"duration\">duration: <em>0</em>s</li>'\n  + '</ul>';\n\n/**\n * Initialize a new `HTML` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction HTML(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , total = runner.total\n    , stat = fragment(statsTemplate)\n    , items = stat.getElementsByTagName('li')\n    , passes = items[1].getElementsByTagName('em')[0]\n    , passesLink = items[1].getElementsByTagName('a')[0]\n    , failures = items[2].getElementsByTagName('em')[0]\n    , failuresLink = items[2].getElementsByTagName('a')[0]\n    , duration = items[3].getElementsByTagName('em')[0]\n    , canvas = stat.getElementsByTagName('canvas')[0]\n    , report = fragment('<ul id=\"mocha-report\"></ul>')\n    , stack = [report]\n    , progress\n    , ctx\n    , root = document.getElementById('mocha');\n\n  if (canvas.getContext) {\n    var ratio = window.devicePixelRatio || 1;\n    canvas.style.width = canvas.width;\n    canvas.style.height = canvas.height;\n    canvas.width *= ratio;\n    canvas.height *= ratio;\n    ctx = canvas.getContext('2d');\n    ctx.scale(ratio, ratio);\n    progress = new Progress;\n  }\n\n  if (!root) return error('#mocha div missing, add it to your document');\n\n  // pass toggle\n  on(passesLink, 'click', function(){\n    unhide();\n    var name = /pass/.test(report.className) ? '' : ' pass';\n    report.className = report.className.replace(/fail|pass/g, '') + name;\n    if (report.className.trim()) hideSuitesWithout('test pass');\n  });\n\n  // failure toggle\n  on(failuresLink, 'click', function(){\n    unhide();\n    var name = /fail/.test(report.className) ? '' : ' fail';\n    report.className = report.className.replace(/fail|pass/g, '') + name;\n    if (report.className.trim()) hideSuitesWithout('test fail');\n  });\n\n  root.appendChild(stat);\n  root.appendChild(report);\n\n  if (progress) progress.size(40);\n\n  runner.on('suite', function(suite){\n    if (suite.root) return;\n\n    // suite\n    var url = self.suiteURL(suite);\n    var el = fragment('<li class=\"suite\"><h1><a href=\"%s\">%s</a></h1></li>', url, escape(suite.title));\n\n    // container\n    stack[0].appendChild(el);\n    stack.unshift(document.createElement('ul'));\n    el.appendChild(stack[0]);\n  });\n\n  runner.on('suite end', function(suite){\n    if (suite.root) return;\n    stack.shift();\n  });\n\n  runner.on('fail', function(test, err){\n    if ('hook' == test.type) runner.emit('test end', test);\n  });\n\n  runner.on('test end', function(test){\n    // TODO: add to stats\n    var percent = stats.tests / this.total * 100 | 0;\n    if (progress) progress.update(percent).draw(ctx);\n\n    // update stats\n    var ms = new Date - stats.start;\n    text(passes, stats.passes);\n    text(failures, stats.failures);\n    text(duration, (ms / 1000).toFixed(2));\n\n    // test\n    if ('passed' == test.state) {\n      var url = self.testURL(test);\n      var el = fragment('<li class=\"test pass %e\"><h2>%e<span class=\"duration\">%ems</span> <a href=\"%s\" class=\"replay\">‣</a></h2></li>', test.speed, test.title, test.duration, url);\n    } else if (test.pending) {\n      var el = fragment('<li class=\"test pass pending\"><h2>%e</h2></li>', test.title);\n    } else {\n      var el = fragment('<li class=\"test fail\"><h2>%e <a href=\"%e\" class=\"replay\">‣</a></h2></li>', test.title, self.testURL(test));\n      var str = test.err.stack || test.err.toString();\n\n      // FF / Opera do not add the message\n      if (!~str.indexOf(test.err.message)) {\n        str = test.err.message + '\\n' + str;\n      }\n\n      // <=IE7 stringifies to [Object Error]. Since it can be overloaded, we\n      // check for the result of the stringifying.\n      if ('[object Error]' == str) str = test.err.message;\n\n      // Safari doesn't give you a stack. Let's at least provide a source line.\n      if (!test.err.stack && test.err.sourceURL && test.err.line !== undefined) {\n        str += \"\\n(\" + test.err.sourceURL + \":\" + test.err.line + \")\";\n      }\n\n      el.appendChild(fragment('<pre class=\"error\">%e</pre>', str));\n    }\n\n    // toggle code\n    // TODO: defer\n    if (!test.pending) {\n      var h2 = el.getElementsByTagName('h2')[0];\n\n      on(h2, 'click', function(){\n        pre.style.display = 'none' == pre.style.display\n          ? 'block'\n          : 'none';\n      });\n\n      var pre = fragment('<pre><code>%e</code></pre>', utils.clean(test.fn.toString()));\n      el.appendChild(pre);\n      pre.style.display = 'none';\n    }\n\n    // Don't call .appendChild if #mocha-report was already .shift()'ed off the stack.\n    if (stack[0]) stack[0].appendChild(el);\n  });\n}\n\n/**\n * Makes a URL, preserving querystring (\"search\") parameters.\n * @param {string} s\n * @returns {string} your new URL\n */\nvar makeUrl = function makeUrl(s) {\n  var search = window.location.search;\n\n  // Remove previous grep query parameter if present\n  if (search) {\n    search = search.replace(/[?&]grep=[^&\\s]*/g, '').replace(/^&/, '?');\n  }\n\n  return window.location.pathname + (search ? search + '&' : '?' ) + 'grep=' + encodeURIComponent(s);\n};\n\n/**\n * Provide suite URL\n *\n * @param {Object} [suite]\n */\nHTML.prototype.suiteURL = function(suite){\n  return makeUrl(suite.fullTitle());\n};\n\n/**\n * Provide test URL\n *\n * @param {Object} [test]\n */\n\nHTML.prototype.testURL = function(test){\n  return makeUrl(test.fullTitle());\n};\n\n/**\n * Display error `msg`.\n */\n\nfunction error(msg) {\n  document.body.appendChild(fragment('<div id=\"mocha-error\">%s</div>', msg));\n}\n\n/**\n * Return a DOM fragment from `html`.\n */\n\nfunction fragment(html) {\n  var args = arguments\n    , div = document.createElement('div')\n    , i = 1;\n\n  div.innerHTML = html.replace(/%([se])/g, function(_, type){\n    switch (type) {\n      case 's': return String(args[i++]);\n      case 'e': return escape(args[i++]);\n    }\n  });\n\n  return div.firstChild;\n}\n\n/**\n * Check for suites that do not have elements\n * with `classname`, and hide them.\n */\n\nfunction hideSuitesWithout(classname) {\n  var suites = document.getElementsByClassName('suite');\n  for (var i = 0; i < suites.length; i++) {\n    var els = suites[i].getElementsByClassName(classname);\n    if (0 == els.length) suites[i].className += ' hidden';\n  }\n}\n\n/**\n * Unhide .hidden suites.\n */\n\nfunction unhide() {\n  var els = document.getElementsByClassName('suite hidden');\n  for (var i = 0; i < els.length; ++i) {\n    els[i].className = els[i].className.replace('suite hidden', 'suite');\n  }\n}\n\n/**\n * Set `el` text to `str`.\n */\n\nfunction text(el, str) {\n  if (el.textContent) {\n    el.textContent = str;\n  } else {\n    el.innerText = str;\n  }\n}\n\n/**\n * Listen on `event` with callback `fn`.\n */\n\nfunction on(el, event, fn) {\n  if (el.addEventListener) {\n    el.addEventListener(event, fn, false);\n  } else {\n    el.attachEvent('on' + event, fn);\n  }\n}\n\n}); // module: reporters/html.js\n\nrequire.register(\"reporters/index.js\", function(module, exports, require){\nexports.Base = require('./base');\nexports.Dot = require('./dot');\nexports.Doc = require('./doc');\nexports.TAP = require('./tap');\nexports.JSON = require('./json');\nexports.HTML = require('./html');\nexports.List = require('./list');\nexports.Min = require('./min');\nexports.Spec = require('./spec');\nexports.Nyan = require('./nyan');\nexports.XUnit = require('./xunit');\nexports.Markdown = require('./markdown');\nexports.Progress = require('./progress');\nexports.Landing = require('./landing');\nexports.JSONCov = require('./json-cov');\nexports.HTMLCov = require('./html-cov');\nexports.JSONStream = require('./json-stream');\n\n}); // module: reporters/index.js\n\nrequire.register(\"reporters/json-cov.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\n\n/**\n * Expose `JSONCov`.\n */\n\nexports = module.exports = JSONCov;\n\n/**\n * Initialize a new `JsCoverage` reporter.\n *\n * @param {Runner} runner\n * @param {Boolean} output\n * @api public\n */\n\nfunction JSONCov(runner, output) {\n  var self = this\n    , output = 1 == arguments.length ? true : output;\n\n  Base.call(this, runner);\n\n  var tests = []\n    , failures = []\n    , passes = [];\n\n  runner.on('test end', function(test){\n    tests.push(test);\n  });\n\n  runner.on('pass', function(test){\n    passes.push(test);\n  });\n\n  runner.on('fail', function(test){\n    failures.push(test);\n  });\n\n  runner.on('end', function(){\n    var cov = global._$jscoverage || {};\n    var result = self.cov = map(cov);\n    result.stats = self.stats;\n    result.tests = tests.map(clean);\n    result.failures = failures.map(clean);\n    result.passes = passes.map(clean);\n    if (!output) return;\n    process.stdout.write(JSON.stringify(result, null, 2 ));\n  });\n}\n\n/**\n * Map jscoverage data to a JSON structure\n * suitable for reporting.\n *\n * @param {Object} cov\n * @return {Object}\n * @api private\n */\n\nfunction map(cov) {\n  var ret = {\n      instrumentation: 'node-jscoverage'\n    , sloc: 0\n    , hits: 0\n    , misses: 0\n    , coverage: 0\n    , files: []\n  };\n\n  for (var filename in cov) {\n    var data = coverage(filename, cov[filename]);\n    ret.files.push(data);\n    ret.hits += data.hits;\n    ret.misses += data.misses;\n    ret.sloc += data.sloc;\n  }\n\n  ret.files.sort(function(a, b) {\n    return a.filename.localeCompare(b.filename);\n  });\n\n  if (ret.sloc > 0) {\n    ret.coverage = (ret.hits / ret.sloc) * 100;\n  }\n\n  return ret;\n}\n\n/**\n * Map jscoverage data for a single source file\n * to a JSON structure suitable for reporting.\n *\n * @param {String} filename name of the source file\n * @param {Object} data jscoverage coverage data\n * @return {Object}\n * @api private\n */\n\nfunction coverage(filename, data) {\n  var ret = {\n    filename: filename,\n    coverage: 0,\n    hits: 0,\n    misses: 0,\n    sloc: 0,\n    source: {}\n  };\n\n  data.source.forEach(function(line, num){\n    num++;\n\n    if (data[num] === 0) {\n      ret.misses++;\n      ret.sloc++;\n    } else if (data[num] !== undefined) {\n      ret.hits++;\n      ret.sloc++;\n    }\n\n    ret.source[num] = {\n        source: line\n      , coverage: data[num] === undefined\n        ? ''\n        : data[num]\n    };\n  });\n\n  ret.coverage = ret.hits / ret.sloc * 100;\n\n  return ret;\n}\n\n/**\n * Return a plain-object representation of `test`\n * free of cyclic properties etc.\n *\n * @param {Object} test\n * @return {Object}\n * @api private\n */\n\nfunction clean(test) {\n  return {\n      title: test.title\n    , fullTitle: test.fullTitle()\n    , duration: test.duration\n  }\n}\n\n}); // module: reporters/json-cov.js\n\nrequire.register(\"reporters/json-stream.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , color = Base.color;\n\n/**\n * Expose `List`.\n */\n\nexports = module.exports = List;\n\n/**\n * Initialize a new `List` test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction List(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , total = runner.total;\n\n  runner.on('start', function(){\n    console.log(JSON.stringify(['start', { total: total }]));\n  });\n\n  runner.on('pass', function(test){\n    console.log(JSON.stringify(['pass', clean(test)]));\n  });\n\n  runner.on('fail', function(test, err){\n    test = clean(test);\n    test.err = err.message;\n    console.log(JSON.stringify(['fail', test]));\n  });\n\n  runner.on('end', function(){\n    process.stdout.write(JSON.stringify(['end', self.stats]));\n  });\n}\n\n/**\n * Return a plain-object representation of `test`\n * free of cyclic properties etc.\n *\n * @param {Object} test\n * @return {Object}\n * @api private\n */\n\nfunction clean(test) {\n  return {\n      title: test.title\n    , fullTitle: test.fullTitle()\n    , duration: test.duration\n  }\n}\n\n}); // module: reporters/json-stream.js\n\nrequire.register(\"reporters/json.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `JSON`.\n */\n\nexports = module.exports = JSONReporter;\n\n/**\n * Initialize a new `JSON` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction JSONReporter(runner) {\n  var self = this;\n  Base.call(this, runner);\n\n  var tests = []\n    , pending = []\n    , failures = []\n    , passes = [];\n\n  runner.on('test end', function(test){\n    tests.push(test);\n  });\n\n  runner.on('pass', function(test){\n    passes.push(test);\n  });\n\n  runner.on('fail', function(test){\n    failures.push(test);\n  });\n\n  runner.on('pending', function(test){\n    pending.push(test);\n  });\n\n  runner.on('end', function(){\n    var obj = {\n      stats: self.stats,\n      tests: tests.map(clean),\n      pending: pending.map(clean),\n      failures: failures.map(clean),\n      passes: passes.map(clean)\n    };\n\n    runner.testResults = obj;\n\n    process.stdout.write(JSON.stringify(obj, null, 2));\n  });\n}\n\n/**\n * Return a plain-object representation of `test`\n * free of cyclic properties etc.\n *\n * @param {Object} test\n * @return {Object}\n * @api private\n */\n\nfunction clean(test) {\n  return {\n    title: test.title,\n    fullTitle: test.fullTitle(),\n    duration: test.duration,\n    err: errorJSON(test.err || {})\n  }\n}\n\n/**\n * Transform `error` into a JSON object.\n * @param {Error} err\n * @return {Object}\n */\n\nfunction errorJSON(err) {\n  var res = {};\n  Object.getOwnPropertyNames(err).forEach(function(key) {\n    res[key] = err[key];\n  }, err);\n  return res;\n}\n\n}); // module: reporters/json.js\n\nrequire.register(\"reporters/landing.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `Landing`.\n */\n\nexports = module.exports = Landing;\n\n/**\n * Airplane color.\n */\n\nBase.colors.plane = 0;\n\n/**\n * Airplane crash color.\n */\n\nBase.colors['plane crash'] = 31;\n\n/**\n * Runway color.\n */\n\nBase.colors.runway = 90;\n\n/**\n * Initialize a new `Landing` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Landing(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , width = Base.window.width * .75 | 0\n    , total = runner.total\n    , stream = process.stdout\n    , plane = color('plane', '✈')\n    , crashed = -1\n    , n = 0;\n\n  function runway() {\n    var buf = Array(width).join('-');\n    return '  ' + color('runway', buf);\n  }\n\n  runner.on('start', function(){\n    stream.write('\\n\\n\\n  ');\n    cursor.hide();\n  });\n\n  runner.on('test end', function(test){\n    // check if the plane crashed\n    var col = -1 == crashed\n      ? width * ++n / total | 0\n      : crashed;\n\n    // show the crash\n    if ('failed' == test.state) {\n      plane = color('plane crash', '✈');\n      crashed = col;\n    }\n\n    // render landing strip\n    stream.write('\\u001b['+(width+1)+'D\\u001b[2A');\n    stream.write(runway());\n    stream.write('\\n  ');\n    stream.write(color('runway', Array(col).join('⋅')));\n    stream.write(plane)\n    stream.write(color('runway', Array(width - col).join('⋅') + '\\n'));\n    stream.write(runway());\n    stream.write('\\u001b[0m');\n  });\n\n  runner.on('end', function(){\n    cursor.show();\n    console.log();\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nLanding.prototype = new F;\nLanding.prototype.constructor = Landing;\n\n\n}); // module: reporters/landing.js\n\nrequire.register(\"reporters/list.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `List`.\n */\n\nexports = module.exports = List;\n\n/**\n * Initialize a new `List` test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction List(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , n = 0;\n\n  runner.on('start', function(){\n    console.log();\n  });\n\n  runner.on('test', function(test){\n    process.stdout.write(color('pass', '    ' + test.fullTitle() + ': '));\n  });\n\n  runner.on('pending', function(test){\n    var fmt = color('checkmark', '  -')\n      + color('pending', ' %s');\n    console.log(fmt, test.fullTitle());\n  });\n\n  runner.on('pass', function(test){\n    var fmt = color('checkmark', '  '+Base.symbols.dot)\n      + color('pass', ' %s: ')\n      + color(test.speed, '%dms');\n    cursor.CR();\n    console.log(fmt, test.fullTitle(), test.duration);\n  });\n\n  runner.on('fail', function(test, err){\n    cursor.CR();\n    console.log(color('fail', '  %d) %s'), ++n, test.fullTitle());\n  });\n\n  runner.on('end', self.epilogue.bind(self));\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nList.prototype = new F;\nList.prototype.constructor = List;\n\n\n}); // module: reporters/list.js\n\nrequire.register(\"reporters/markdown.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , utils = require('../utils');\n\n/**\n * Constants\n */\n\nvar SUITE_PREFIX = '$';\n\n/**\n * Expose `Markdown`.\n */\n\nexports = module.exports = Markdown;\n\n/**\n * Initialize a new `Markdown` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Markdown(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , level = 0\n    , buf = '';\n\n  function title(str) {\n    return Array(level).join('#') + ' ' + str;\n  }\n\n  function indent() {\n    return Array(level).join('  ');\n  }\n\n  function mapTOC(suite, obj) {\n    var ret = obj,\n        key = SUITE_PREFIX + suite.title;\n    obj = obj[key] = obj[key] || { suite: suite };\n    suite.suites.forEach(function(suite){\n      mapTOC(suite, obj);\n    });\n    return ret;\n  }\n\n  function stringifyTOC(obj, level) {\n    ++level;\n    var buf = '';\n    var link;\n    for (var key in obj) {\n      if ('suite' == key) continue;\n      if (key !== SUITE_PREFIX) {\n        link = ' - [' + key.substring(1) + ']';\n        link += '(#' + utils.slug(obj[key].suite.fullTitle()) + ')\\n';\n        buf += Array(level).join('  ') + link;\n      }\n      buf += stringifyTOC(obj[key], level);\n    }\n    return buf;\n  }\n\n  function generateTOC(suite) {\n    var obj = mapTOC(suite, {});\n    return stringifyTOC(obj, 0);\n  }\n\n  generateTOC(runner.suite);\n\n  runner.on('suite', function(suite){\n    ++level;\n    var slug = utils.slug(suite.fullTitle());\n    buf += '<a name=\"' + slug + '\"></a>' + '\\n';\n    buf += title(suite.title) + '\\n';\n  });\n\n  runner.on('suite end', function(suite){\n    --level;\n  });\n\n  runner.on('pass', function(test){\n    var code = utils.clean(test.fn.toString());\n    buf += test.title + '.\\n';\n    buf += '\\n```js\\n';\n    buf += code + '\\n';\n    buf += '```\\n\\n';\n  });\n\n  runner.on('end', function(){\n    process.stdout.write('# TOC\\n');\n    process.stdout.write(generateTOC(runner.suite));\n    process.stdout.write(buf);\n  });\n}\n\n}); // module: reporters/markdown.js\n\nrequire.register(\"reporters/min.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\n\n/**\n * Expose `Min`.\n */\n\nexports = module.exports = Min;\n\n/**\n * Initialize a new `Min` minimal test reporter (best used with --watch).\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Min(runner) {\n  Base.call(this, runner);\n\n  runner.on('start', function(){\n    // clear screen\n    process.stdout.write('\\u001b[2J');\n    // set cursor position\n    process.stdout.write('\\u001b[1;3H');\n  });\n\n  runner.on('end', this.epilogue.bind(this));\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nMin.prototype = new F;\nMin.prototype.constructor = Min;\n\n\n}); // module: reporters/min.js\n\nrequire.register(\"reporters/nyan.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\n\n/**\n * Expose `Dot`.\n */\n\nexports = module.exports = NyanCat;\n\n/**\n * Initialize a new `Dot` matrix test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction NyanCat(runner) {\n  Base.call(this, runner);\n  var self = this\n    , stats = this.stats\n    , width = Base.window.width * .75 | 0\n    , rainbowColors = this.rainbowColors = self.generateColors()\n    , colorIndex = this.colorIndex = 0\n    , numerOfLines = this.numberOfLines = 4\n    , trajectories = this.trajectories = [[], [], [], []]\n    , nyanCatWidth = this.nyanCatWidth = 11\n    , trajectoryWidthMax = this.trajectoryWidthMax = (width - nyanCatWidth)\n    , scoreboardWidth = this.scoreboardWidth = 5\n    , tick = this.tick = 0\n    , n = 0;\n\n  runner.on('start', function(){\n    Base.cursor.hide();\n    self.draw();\n  });\n\n  runner.on('pending', function(test){\n    self.draw();\n  });\n\n  runner.on('pass', function(test){\n    self.draw();\n  });\n\n  runner.on('fail', function(test, err){\n    self.draw();\n  });\n\n  runner.on('end', function(){\n    Base.cursor.show();\n    for (var i = 0; i < self.numberOfLines; i++) write('\\n');\n    self.epilogue();\n  });\n}\n\n/**\n * Draw the nyan cat\n *\n * @api private\n */\n\nNyanCat.prototype.draw = function(){\n  this.appendRainbow();\n  this.drawScoreboard();\n  this.drawRainbow();\n  this.drawNyanCat();\n  this.tick = !this.tick;\n};\n\n/**\n * Draw the \"scoreboard\" showing the number\n * of passes, failures and pending tests.\n *\n * @api private\n */\n\nNyanCat.prototype.drawScoreboard = function(){\n  var stats = this.stats;\n\n  function draw(type, n) {\n    write(' ');\n    write(Base.color(type, n));\n    write('\\n');\n  }\n\n  draw('green', stats.passes);\n  draw('fail', stats.failures);\n  draw('pending', stats.pending);\n  write('\\n');\n\n  this.cursorUp(this.numberOfLines);\n};\n\n/**\n * Append the rainbow.\n *\n * @api private\n */\n\nNyanCat.prototype.appendRainbow = function(){\n  var segment = this.tick ? '_' : '-';\n  var rainbowified = this.rainbowify(segment);\n\n  for (var index = 0; index < this.numberOfLines; index++) {\n    var trajectory = this.trajectories[index];\n    if (trajectory.length >= this.trajectoryWidthMax) trajectory.shift();\n    trajectory.push(rainbowified);\n  }\n};\n\n/**\n * Draw the rainbow.\n *\n * @api private\n */\n\nNyanCat.prototype.drawRainbow = function(){\n  var self = this;\n\n  this.trajectories.forEach(function(line, index) {\n    write('\\u001b[' + self.scoreboardWidth + 'C');\n    write(line.join(''));\n    write('\\n');\n  });\n\n  this.cursorUp(this.numberOfLines);\n};\n\n/**\n * Draw the nyan cat\n *\n * @api private\n */\n\nNyanCat.prototype.drawNyanCat = function() {\n  var self = this;\n  var startWidth = this.scoreboardWidth + this.trajectories[0].length;\n  var dist = '\\u001b[' + startWidth + 'C';\n  var padding = '';\n\n  write(dist);\n  write('_,------,');\n  write('\\n');\n\n  write(dist);\n  padding = self.tick ? '  ' : '   ';\n  write('_|' + padding + '/\\\\_/\\\\ ');\n  write('\\n');\n\n  write(dist);\n  padding = self.tick ? '_' : '__';\n  var tail = self.tick ? '~' : '^';\n  var face;\n  write(tail + '|' + padding + this.face() + ' ');\n  write('\\n');\n\n  write(dist);\n  padding = self.tick ? ' ' : '  ';\n  write(padding + '\"\"  \"\" ');\n  write('\\n');\n\n  this.cursorUp(this.numberOfLines);\n};\n\n/**\n * Draw nyan cat face.\n *\n * @return {String}\n * @api private\n */\n\nNyanCat.prototype.face = function() {\n  var stats = this.stats;\n  if (stats.failures) {\n    return '( x .x)';\n  } else if (stats.pending) {\n    return '( o .o)';\n  } else if(stats.passes) {\n    return '( ^ .^)';\n  } else {\n    return '( - .-)';\n  }\n};\n\n/**\n * Move cursor up `n`.\n *\n * @param {Number} n\n * @api private\n */\n\nNyanCat.prototype.cursorUp = function(n) {\n  write('\\u001b[' + n + 'A');\n};\n\n/**\n * Move cursor down `n`.\n *\n * @param {Number} n\n * @api private\n */\n\nNyanCat.prototype.cursorDown = function(n) {\n  write('\\u001b[' + n + 'B');\n};\n\n/**\n * Generate rainbow colors.\n *\n * @return {Array}\n * @api private\n */\n\nNyanCat.prototype.generateColors = function(){\n  var colors = [];\n\n  for (var i = 0; i < (6 * 7); i++) {\n    var pi3 = Math.floor(Math.PI / 3);\n    var n = (i * (1.0 / 6));\n    var r = Math.floor(3 * Math.sin(n) + 3);\n    var g = Math.floor(3 * Math.sin(n + 2 * pi3) + 3);\n    var b = Math.floor(3 * Math.sin(n + 4 * pi3) + 3);\n    colors.push(36 * r + 6 * g + b + 16);\n  }\n\n  return colors;\n};\n\n/**\n * Apply rainbow to the given `str`.\n *\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nNyanCat.prototype.rainbowify = function(str){\n  if (!Base.useColors)\n    return str;\n  var color = this.rainbowColors[this.colorIndex % this.rainbowColors.length];\n  this.colorIndex += 1;\n  return '\\u001b[38;5;' + color + 'm' + str + '\\u001b[0m';\n};\n\n/**\n * Stdout helper.\n */\n\nfunction write(string) {\n  process.stdout.write(string);\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nNyanCat.prototype = new F;\nNyanCat.prototype.constructor = NyanCat;\n\n\n}); // module: reporters/nyan.js\n\nrequire.register(\"reporters/progress.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `Progress`.\n */\n\nexports = module.exports = Progress;\n\n/**\n * General progress bar color.\n */\n\nBase.colors.progress = 90;\n\n/**\n * Initialize a new `Progress` bar test reporter.\n *\n * @param {Runner} runner\n * @param {Object} options\n * @api public\n */\n\nfunction Progress(runner, options) {\n  Base.call(this, runner);\n\n  var self = this\n    , options = options || {}\n    , stats = this.stats\n    , width = Base.window.width * .50 | 0\n    , total = runner.total\n    , complete = 0\n    , max = Math.max\n    , lastN = -1;\n\n  // default chars\n  options.open = options.open || '[';\n  options.complete = options.complete || '▬';\n  options.incomplete = options.incomplete || Base.symbols.dot;\n  options.close = options.close || ']';\n  options.verbose = false;\n\n  // tests started\n  runner.on('start', function(){\n    console.log();\n    cursor.hide();\n  });\n\n  // tests complete\n  runner.on('test end', function(){\n    complete++;\n    var incomplete = total - complete\n      , percent = complete / total\n      , n = width * percent | 0\n      , i = width - n;\n\n    if (lastN === n && !options.verbose) {\n      // Don't re-render the line if it hasn't changed\n      return;\n    }\n    lastN = n;\n\n    cursor.CR();\n    process.stdout.write('\\u001b[J');\n    process.stdout.write(color('progress', '  ' + options.open));\n    process.stdout.write(Array(n).join(options.complete));\n    process.stdout.write(Array(i).join(options.incomplete));\n    process.stdout.write(color('progress', options.close));\n    if (options.verbose) {\n      process.stdout.write(color('progress', ' ' + complete + ' of ' + total));\n    }\n  });\n\n  // tests are complete, output some stats\n  // and the failures if any\n  runner.on('end', function(){\n    cursor.show();\n    console.log();\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nProgress.prototype = new F;\nProgress.prototype.constructor = Progress;\n\n\n}); // module: reporters/progress.js\n\nrequire.register(\"reporters/spec.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `Spec`.\n */\n\nexports = module.exports = Spec;\n\n/**\n * Initialize a new `Spec` test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Spec(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , indents = 0\n    , n = 0;\n\n  function indent() {\n    return Array(indents).join('  ')\n  }\n\n  runner.on('start', function(){\n    console.log();\n  });\n\n  runner.on('suite', function(suite){\n    ++indents;\n    console.log(color('suite', '%s%s'), indent(), suite.title);\n  });\n\n  runner.on('suite end', function(suite){\n    --indents;\n    if (1 == indents) console.log();\n  });\n\n  runner.on('pending', function(test){\n    var fmt = indent() + color('pending', '  - %s');\n    console.log(fmt, test.title);\n  });\n\n  runner.on('pass', function(test){\n    if ('fast' == test.speed) {\n      var fmt = indent()\n        + color('checkmark', '  ' + Base.symbols.ok)\n        + color('pass', ' %s');\n      cursor.CR();\n      console.log(fmt, test.title);\n    } else {\n      var fmt = indent()\n        + color('checkmark', '  ' + Base.symbols.ok)\n        + color('pass', ' %s')\n        + color(test.speed, ' (%dms)');\n      cursor.CR();\n      console.log(fmt, test.title, test.duration);\n    }\n  });\n\n  runner.on('fail', function(test, err){\n    cursor.CR();\n    console.log(indent() + color('fail', '  %d) %s'), ++n, test.title);\n  });\n\n  runner.on('end', self.epilogue.bind(self));\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nSpec.prototype = new F;\nSpec.prototype.constructor = Spec;\n\n\n}); // module: reporters/spec.js\n\nrequire.register(\"reporters/tap.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `TAP`.\n */\n\nexports = module.exports = TAP;\n\n/**\n * Initialize a new `TAP` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction TAP(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , n = 1\n    , passes = 0\n    , failures = 0;\n\n  runner.on('start', function(){\n    var total = runner.grepTotal(runner.suite);\n    console.log('%d..%d', 1, total);\n  });\n\n  runner.on('test end', function(){\n    ++n;\n  });\n\n  runner.on('pending', function(test){\n    console.log('ok %d %s # SKIP -', n, title(test));\n  });\n\n  runner.on('pass', function(test){\n    passes++;\n    console.log('ok %d %s', n, title(test));\n  });\n\n  runner.on('fail', function(test, err){\n    failures++;\n    console.log('not ok %d %s', n, title(test));\n    if (err.stack) console.log(err.stack.replace(/^/gm, '  '));\n  });\n\n  runner.on('end', function(){\n    console.log('# tests ' + (passes + failures));\n    console.log('# pass ' + passes);\n    console.log('# fail ' + failures);\n  });\n}\n\n/**\n * Return a TAP-safe title of `test`\n *\n * @param {Object} test\n * @return {String}\n * @api private\n */\n\nfunction title(test) {\n  return test.fullTitle().replace(/#/g, '');\n}\n\n}); // module: reporters/tap.js\n\nrequire.register(\"reporters/xunit.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , utils = require('../utils')\n  , fs = require('browser/fs')\n  , escape = utils.escape;\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date\n  , setTimeout = global.setTimeout\n  , setInterval = global.setInterval\n  , clearTimeout = global.clearTimeout\n  , clearInterval = global.clearInterval;\n\n/**\n * Expose `XUnit`.\n */\n\nexports = module.exports = XUnit;\n\n/**\n * Initialize a new `XUnit` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction XUnit(runner, options) {\n  Base.call(this, runner);\n  var stats = this.stats\n    , tests = []\n    , self = this;\n\n  if (options.reporterOptions && options.reporterOptions.output) {\n      if (! fs.createWriteStream) {\n          throw new Error('file output not supported in browser');\n      }\n      self.fileStream = fs.createWriteStream(options.reporterOptions.output);\n  }\n\n  runner.on('pending', function(test){\n    tests.push(test);\n  });\n\n  runner.on('pass', function(test){\n    tests.push(test);\n  });\n\n  runner.on('fail', function(test){\n    tests.push(test);\n  });\n\n  runner.on('end', function(){\n    self.write(tag('testsuite', {\n        name: 'Mocha Tests'\n      , tests: stats.tests\n      , failures: stats.failures\n      , errors: stats.failures\n      , skipped: stats.tests - stats.failures - stats.passes\n      , timestamp: (new Date).toUTCString()\n      , time: (stats.duration / 1000) || 0\n    }, false));\n\n    tests.forEach(function(t) { self.test(t); });\n    self.write('</testsuite>');\n  });\n}\n\n/**\n * Override done to close the stream (if it's a file).\n */\nXUnit.prototype.done = function(failures, fn) {\n    if (this.fileStream) {\n        this.fileStream.end(function() {\n            fn(failures);\n        });\n    } else {\n        fn(failures);\n    }\n};\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nXUnit.prototype = new F;\nXUnit.prototype.constructor = XUnit;\n\n\n/**\n * Write out the given line\n */\nXUnit.prototype.write = function(line) {\n    if (this.fileStream) {\n        this.fileStream.write(line + '\\n');\n    } else {\n        console.log(line);\n    }\n};\n\n/**\n * Output tag for the given `test.`\n */\n\nXUnit.prototype.test = function(test, ostream) {\n  var attrs = {\n      classname: test.parent.fullTitle()\n    , name: test.title\n    , time: (test.duration / 1000) || 0\n  };\n\n  if ('failed' == test.state) {\n    var err = test.err;\n    this.write(tag('testcase', attrs, false, tag('failure', {}, false, cdata(escape(err.message) + \"\\n\" + err.stack))));\n  } else if (test.pending) {\n    this.write(tag('testcase', attrs, false, tag('skipped', {}, true)));\n  } else {\n    this.write(tag('testcase', attrs, true) );\n  }\n};\n\n/**\n * HTML tag helper.\n */\n\nfunction tag(name, attrs, close, content) {\n  var end = close ? '/>' : '>'\n    , pairs = []\n    , tag;\n\n  for (var key in attrs) {\n    pairs.push(key + '=\"' + escape(attrs[key]) + '\"');\n  }\n\n  tag = '<' + name + (pairs.length ? ' ' + pairs.join(' ') : '') + end;\n  if (content) tag += content + '</' + name + end;\n  return tag;\n}\n\n/**\n * Return cdata escaped CDATA `str`.\n */\n\nfunction cdata(str) {\n  return '<![CDATA[' + escape(str) + ']]>';\n}\n\n}); // module: reporters/xunit.js\n\nrequire.register(\"runnable.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar EventEmitter = require('browser/events').EventEmitter\n  , debug = require('browser/debug')('mocha:runnable')\n  , Pending = require('./pending')\n  , milliseconds = require('./ms')\n  , utils = require('./utils');\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date\n  , setTimeout = global.setTimeout\n  , setInterval = global.setInterval\n  , clearTimeout = global.clearTimeout\n  , clearInterval = global.clearInterval;\n\n/**\n * Object#toString().\n */\n\nvar toString = Object.prototype.toString;\n\n/**\n * Expose `Runnable`.\n */\n\nmodule.exports = Runnable;\n\n/**\n * Initialize a new `Runnable` with the given `title` and callback `fn`.\n *\n * @param {String} title\n * @param {Function} fn\n * @api private\n */\n\nfunction Runnable(title, fn) {\n  this.title = title;\n  this.fn = fn;\n  this.async = fn && fn.length;\n  this.sync = ! this.async;\n  this._timeout = 2000;\n  this._slow = 75;\n  this._enableTimeouts = true;\n  this.timedOut = false;\n  this._trace = new Error('done() called multiple times')\n}\n\n/**\n * Inherit from `EventEmitter.prototype`.\n */\n\nfunction F(){};\nF.prototype = EventEmitter.prototype;\nRunnable.prototype = new F;\nRunnable.prototype.constructor = Runnable;\n\n\n/**\n * Set & get timeout `ms`.\n *\n * @param {Number|String} ms\n * @return {Runnable|Number} ms or self\n * @api private\n */\n\nRunnable.prototype.timeout = function(ms){\n  if (0 == arguments.length) return this._timeout;\n  if (ms === 0) this._enableTimeouts = false;\n  if ('string' == typeof ms) ms = milliseconds(ms);\n  debug('timeout %d', ms);\n  this._timeout = ms;\n  if (this.timer) this.resetTimeout();\n  return this;\n};\n\n/**\n * Set & get slow `ms`.\n *\n * @param {Number|String} ms\n * @return {Runnable|Number} ms or self\n * @api private\n */\n\nRunnable.prototype.slow = function(ms){\n  if (0 === arguments.length) return this._slow;\n  if ('string' == typeof ms) ms = milliseconds(ms);\n  debug('timeout %d', ms);\n  this._slow = ms;\n  return this;\n};\n\n/**\n * Set and & get timeout `enabled`.\n *\n * @param {Boolean} enabled\n * @return {Runnable|Boolean} enabled or self\n * @api private\n */\n\nRunnable.prototype.enableTimeouts = function(enabled){\n  if (arguments.length === 0) return this._enableTimeouts;\n  debug('enableTimeouts %s', enabled);\n  this._enableTimeouts = enabled;\n  return this;\n};\n\n/**\n * Halt and mark as pending.\n *\n * @api private\n */\n\nRunnable.prototype.skip = function(){\n    throw new Pending();\n};\n\n/**\n * Return the full title generated by recursively\n * concatenating the parent's full title.\n *\n * @return {String}\n * @api public\n */\n\nRunnable.prototype.fullTitle = function(){\n  return this.parent.fullTitle() + ' ' + this.title;\n};\n\n/**\n * Clear the timeout.\n *\n * @api private\n */\n\nRunnable.prototype.clearTimeout = function(){\n  clearTimeout(this.timer);\n};\n\n/**\n * Inspect the runnable void of private properties.\n *\n * @return {String}\n * @api private\n */\n\nRunnable.prototype.inspect = function(){\n  return JSON.stringify(this, function(key, val){\n    if ('_' == key[0]) return;\n    if ('parent' == key) return '#<Suite>';\n    if ('ctx' == key) return '#<Context>';\n    return val;\n  }, 2);\n};\n\n/**\n * Reset the timeout.\n *\n * @api private\n */\n\nRunnable.prototype.resetTimeout = function(){\n  var self = this;\n  var ms = this.timeout() || 1e9;\n\n  if (!this._enableTimeouts) return;\n  this.clearTimeout();\n  this.timer = setTimeout(function(){\n    if (!self._enableTimeouts) return;\n    self.callback(new Error('timeout of ' + ms + 'ms exceeded. Ensure the done() callback is being called in this test.'));\n    self.timedOut = true;\n  }, ms);\n};\n\n/**\n * Whitelist these globals for this test run\n *\n * @api private\n */\nRunnable.prototype.globals = function(arr){\n  var self = this;\n  this._allowedGlobals = arr;\n};\n\n/**\n * Run the test and invoke `fn(err)`.\n *\n * @param {Function} fn\n * @api private\n */\n\nRunnable.prototype.run = function(fn){\n  var self = this\n    , start = new Date\n    , ctx = this.ctx\n    , finished\n    , emitted;\n\n  // Some times the ctx exists but it is not runnable\n  if (ctx && ctx.runnable) ctx.runnable(this);\n\n  // called multiple times\n  function multiple(err) {\n    if (emitted) return;\n    emitted = true;\n    self.emit('error', err || new Error('done() called multiple times; stacktrace may be inaccurate'));\n  }\n\n  // finished\n  function done(err) {\n    var ms = self.timeout();\n    if (self.timedOut) return;\n    if (finished) return multiple(err || self._trace);\n\n    // Discard the resolution if this test has already failed asynchronously\n    if (self.state) return;\n\n    self.clearTimeout();\n    self.duration = new Date - start;\n    finished = true;\n    if (!err && self.duration > ms && self._enableTimeouts) err = new Error('timeout of ' + ms + 'ms exceeded. Ensure the done() callback is being called in this test.');\n    fn(err);\n  }\n\n  // for .resetTimeout()\n  this.callback = done;\n\n  // explicit async with `done` argument\n  if (this.async) {\n    this.resetTimeout();\n\n    try {\n      this.fn.call(ctx, function(err){\n        if (err instanceof Error || toString.call(err) === \"[object Error]\") return done(err);\n        if (null != err) {\n          if (Object.prototype.toString.call(err) === '[object Object]') {\n            return done(new Error('done() invoked with non-Error: ' + JSON.stringify(err)));\n          } else {\n            return done(new Error('done() invoked with non-Error: ' + err));\n          }\n        }\n        done();\n      });\n    } catch (err) {\n      done(utils.getError(err));\n    }\n    return;\n  }\n\n  if (this.asyncOnly) {\n    return done(new Error('--async-only option in use without declaring `done()`'));\n  }\n\n  // sync or promise-returning\n  try {\n    if (this.pending) {\n      done();\n    } else {\n      callFn(this.fn);\n    }\n  } catch (err) {\n    done(utils.getError(err));\n  }\n\n  function callFn(fn) {\n    var result = fn.call(ctx);\n    if (result && typeof result.then === 'function') {\n      self.resetTimeout();\n      result\n        .then(function() {\n          done()\n        },\n        function(reason) {\n          done(reason || new Error('Promise rejected with no or falsy reason'))\n        });\n    } else {\n      done();\n    }\n  }\n};\n\n}); // module: runnable.js\n\nrequire.register(\"runner.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar EventEmitter = require('browser/events').EventEmitter\n  , debug = require('browser/debug')('mocha:runner')\n  , Pending = require('./pending')\n  , Test = require('./test')\n  , utils = require('./utils')\n  , filter = utils.filter\n  , keys = utils.keys\n  , type = utils.type\n  , stringify = utils.stringify\n  , stackFilter = utils.stackTraceFilter();\n\n/**\n * Non-enumerable globals.\n */\n\nvar globals = [\n  'setTimeout',\n  'clearTimeout',\n  'setInterval',\n  'clearInterval',\n  'XMLHttpRequest',\n  'Date',\n  'setImmediate',\n  'clearImmediate'\n];\n\n/**\n * Expose `Runner`.\n */\n\nmodule.exports = Runner;\n\n/**\n * Initialize a `Runner` for the given `suite`.\n *\n * Events:\n *\n *   - `start`  execution started\n *   - `end`  execution complete\n *   - `suite`  (suite) test suite execution started\n *   - `suite end`  (suite) all tests (and sub-suites) have finished\n *   - `test`  (test) test execution started\n *   - `test end`  (test) test completed\n *   - `hook`  (hook) hook execution started\n *   - `hook end`  (hook) hook complete\n *   - `pass`  (test) test passed\n *   - `fail`  (test, err) test failed\n *   - `pending`  (test) test pending\n *\n * @param {Suite} suite Root suite\n * @param {boolean} [delay] Whether or not to delay execution of root suite\n *   until ready.\n * @api public\n */\n\nfunction Runner(suite, delay) {\n  var self = this;\n  this._globals = [];\n  this._abort = false;\n  this._delay = delay;\n  this.suite = suite;\n  this.total = suite.total();\n  this.failures = 0;\n  this.on('test end', function(test){ self.checkGlobals(test); });\n  this.on('hook end', function(hook){ self.checkGlobals(hook); });\n  this.grep(/.*/);\n  this.globals(this.globalProps().concat(extraGlobals()));\n}\n\n/**\n * Wrapper for setImmediate, process.nextTick, or browser polyfill.\n *\n * @param {Function} fn\n * @api private\n */\n\nRunner.immediately = global.setImmediate || process.nextTick;\n\n/**\n * Inherit from `EventEmitter.prototype`.\n */\n\nfunction F(){};\nF.prototype = EventEmitter.prototype;\nRunner.prototype = new F;\nRunner.prototype.constructor = Runner;\n\n\n/**\n * Run tests with full titles matching `re`. Updates runner.total\n * with number of tests matched.\n *\n * @param {RegExp} re\n * @param {Boolean} invert\n * @return {Runner} for chaining\n * @api public\n */\n\nRunner.prototype.grep = function(re, invert){\n  debug('grep %s', re);\n  this._grep = re;\n  this._invert = invert;\n  this.total = this.grepTotal(this.suite);\n  return this;\n};\n\n/**\n * Returns the number of tests matching the grep search for the\n * given suite.\n *\n * @param {Suite} suite\n * @return {Number}\n * @api public\n */\n\nRunner.prototype.grepTotal = function(suite) {\n  var self = this;\n  var total = 0;\n\n  suite.eachTest(function(test){\n    var match = self._grep.test(test.fullTitle());\n    if (self._invert) match = !match;\n    if (match) total++;\n  });\n\n  return total;\n};\n\n/**\n * Return a list of global properties.\n *\n * @return {Array}\n * @api private\n */\n\nRunner.prototype.globalProps = function() {\n  var props = utils.keys(global);\n\n  // non-enumerables\n  for (var i = 0; i < globals.length; ++i) {\n    if (~utils.indexOf(props, globals[i])) continue;\n    props.push(globals[i]);\n  }\n\n  return props;\n};\n\n/**\n * Allow the given `arr` of globals.\n *\n * @param {Array} arr\n * @return {Runner} for chaining\n * @api public\n */\n\nRunner.prototype.globals = function(arr){\n  if (0 == arguments.length) return this._globals;\n  debug('globals %j', arr);\n  this._globals = this._globals.concat(arr);\n  return this;\n};\n\n/**\n * Check for global variable leaks.\n *\n * @api private\n */\n\nRunner.prototype.checkGlobals = function(test){\n  if (this.ignoreLeaks) return;\n  var ok = this._globals;\n\n  var globals = this.globalProps();\n  var leaks;\n\n  if (test) {\n    ok = ok.concat(test._allowedGlobals || []);\n  }\n\n  if(this.prevGlobalsLength == globals.length) return;\n  this.prevGlobalsLength = globals.length;\n\n  leaks = filterLeaks(ok, globals);\n  this._globals = this._globals.concat(leaks);\n\n  if (leaks.length > 1) {\n    this.fail(test, new Error('global leaks detected: ' + leaks.join(', ') + ''));\n  } else if (leaks.length) {\n    this.fail(test, new Error('global leak detected: ' + leaks[0]));\n  }\n};\n\n/**\n * Fail the given `test`.\n *\n * @param {Test} test\n * @param {Error} err\n * @api private\n */\n\nRunner.prototype.fail = function(test, err) {\n  ++this.failures;\n  test.state = 'failed';\n\n  if (!(err instanceof Error)) {\n    err = new Error('the ' + type(err) + ' ' + stringify(err) + ' was thrown, throw an Error :)');\n  }\n\n  err.stack = (this.fullStackTrace || !err.stack)\n    ? err.stack\n    : stackFilter(err.stack);\n\n  this.emit('fail', test, err);\n};\n\n/**\n * Fail the given `hook` with `err`.\n *\n * Hook failures work in the following pattern:\n * - If bail, then exit\n * - Failed `before` hook skips all tests in a suite and subsuites,\n *   but jumps to corresponding `after` hook\n * - Failed `before each` hook skips remaining tests in a\n *   suite and jumps to corresponding `after each` hook,\n *   which is run only once\n * - Failed `after` hook does not alter\n *   execution order\n * - Failed `after each` hook skips remaining tests in a\n *   suite and subsuites, but executes other `after each`\n *   hooks\n *\n * @param {Hook} hook\n * @param {Error} err\n * @api private\n */\n\nRunner.prototype.failHook = function(hook, err){\n  this.fail(hook, err);\n  if (this.suite.bail()) {\n    this.emit('end');\n  }\n};\n\n/**\n * Run hook `name` callbacks and then invoke `fn()`.\n *\n * @param {String} name\n * @param {Function} function\n * @api private\n */\n\nRunner.prototype.hook = function(name, fn){\n  var suite = this.suite\n    , hooks = suite['_' + name]\n    , self = this\n    , timer;\n\n  function next(i) {\n    var hook = hooks[i];\n    if (!hook) return fn();\n    self.currentRunnable = hook;\n\n    hook.ctx.currentTest = self.test;\n\n    self.emit('hook', hook);\n\n    hook.on('error', function(err){\n      self.failHook(hook, err);\n    });\n\n    hook.run(function(err){\n      hook.removeAllListeners('error');\n      var testError = hook.error();\n      if (testError) self.fail(self.test, testError);\n      if (err) {\n        if (err instanceof Pending) {\n          suite.pending = true;\n        } else {\n          self.failHook(hook, err);\n\n          // stop executing hooks, notify callee of hook err\n          return fn(err);\n        }\n      }\n      self.emit('hook end', hook);\n      delete hook.ctx.currentTest;\n      next(++i);\n    });\n  }\n\n  Runner.immediately(function(){\n    next(0);\n  });\n};\n\n/**\n * Run hook `name` for the given array of `suites`\n * in order, and callback `fn(err, errSuite)`.\n *\n * @param {String} name\n * @param {Array} suites\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.hooks = function(name, suites, fn){\n  var self = this\n    , orig = this.suite;\n\n  function next(suite) {\n    self.suite = suite;\n\n    if (!suite) {\n      self.suite = orig;\n      return fn();\n    }\n\n    self.hook(name, function(err){\n      if (err) {\n        var errSuite = self.suite;\n        self.suite = orig;\n        return fn(err, errSuite);\n      }\n\n      next(suites.pop());\n    });\n  }\n\n  next(suites.pop());\n};\n\n/**\n * Run hooks from the top level down.\n *\n * @param {String} name\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.hookUp = function(name, fn){\n  var suites = [this.suite].concat(this.parents()).reverse();\n  this.hooks(name, suites, fn);\n};\n\n/**\n * Run hooks from the bottom up.\n *\n * @param {String} name\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.hookDown = function(name, fn){\n  var suites = [this.suite].concat(this.parents());\n  this.hooks(name, suites, fn);\n};\n\n/**\n * Return an array of parent Suites from\n * closest to furthest.\n *\n * @return {Array}\n * @api private\n */\n\nRunner.prototype.parents = function(){\n  var suite = this.suite\n    , suites = [];\n  while (suite = suite.parent) suites.push(suite);\n  return suites;\n};\n\n/**\n * Run the current test and callback `fn(err)`.\n *\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.runTest = function(fn){\n  var test = this.test\n    , self = this;\n\n  if (this.asyncOnly) test.asyncOnly = true;\n\n  try {\n    test.on('error', function(err){\n      self.fail(test, err);\n    });\n    test.run(fn);\n  } catch (err) {\n    fn(err);\n  }\n};\n\n/**\n * Run tests in the given `suite` and invoke\n * the callback `fn()` when complete.\n *\n * @param {Suite} suite\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.runTests = function(suite, fn){\n  var self = this\n    , tests = suite.tests.slice()\n    , test;\n\n\n  function hookErr(err, errSuite, after) {\n    // before/after Each hook for errSuite failed:\n    var orig = self.suite;\n\n    // for failed 'after each' hook start from errSuite parent,\n    // otherwise start from errSuite itself\n    self.suite = after ? errSuite.parent : errSuite;\n\n    if (self.suite) {\n      // call hookUp afterEach\n      self.hookUp('afterEach', function(err2, errSuite2) {\n        self.suite = orig;\n        // some hooks may fail even now\n        if (err2) return hookErr(err2, errSuite2, true);\n        // report error suite\n        fn(errSuite);\n      });\n    } else {\n      // there is no need calling other 'after each' hooks\n      self.suite = orig;\n      fn(errSuite);\n    }\n  }\n\n  function next(err, errSuite) {\n    // if we bail after first err\n    if (self.failures && suite._bail) return fn();\n\n    if (self._abort) return fn();\n\n    if (err) return hookErr(err, errSuite, true);\n\n    // next test\n    test = tests.shift();\n\n    // all done\n    if (!test) return fn();\n\n    // grep\n    var match = self._grep.test(test.fullTitle());\n    if (self._invert) match = !match;\n    if (!match) return next();\n\n    // pending\n    if (test.pending) {\n      self.emit('pending', test);\n      self.emit('test end', test);\n      return next();\n    }\n\n    // execute test and hook(s)\n    self.emit('test', self.test = test);\n    self.hookDown('beforeEach', function(err, errSuite){\n\n      if (suite.pending) {\n        self.emit('pending', test);\n        self.emit('test end', test);\n        return next();\n      }\n      if (err) return hookErr(err, errSuite, false);\n\n      self.currentRunnable = self.test;\n      self.runTest(function(err){\n        test = self.test;\n\n        if (err) {\n          if (err instanceof Pending) {\n            self.emit('pending', test);\n          } else {\n            self.fail(test, err);\n          }\n          self.emit('test end', test);\n\n          if (err instanceof Pending) {\n            return next();\n          }\n\n          return self.hookUp('afterEach', next);\n        }\n\n        test.state = 'passed';\n        self.emit('pass', test);\n        self.emit('test end', test);\n        self.hookUp('afterEach', next);\n      });\n    });\n  }\n\n  this.next = next;\n  next();\n};\n\n/**\n * Run the given `suite` and invoke the\n * callback `fn()` when complete.\n *\n * @param {Suite} suite\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.runSuite = function(suite, fn){\n  var total = this.grepTotal(suite)\n    , self = this\n    , i = 0;\n\n  debug('run suite %s', suite.fullTitle());\n\n  if (!total) return fn();\n\n  this.emit('suite', this.suite = suite);\n\n  function next(errSuite) {\n    if (errSuite) {\n      // current suite failed on a hook from errSuite\n      if (errSuite == suite) {\n        // if errSuite is current suite\n        // continue to the next sibling suite\n        return done();\n      } else {\n        // errSuite is among the parents of current suite\n        // stop execution of errSuite and all sub-suites\n        return done(errSuite);\n      }\n    }\n\n    if (self._abort) return done();\n\n    var curr = suite.suites[i++];\n    if (!curr) return done();\n    self.runSuite(curr, next);\n  }\n\n  function done(errSuite) {\n    self.suite = suite;\n    self.hook('afterAll', function(){\n      self.emit('suite end', suite);\n      fn(errSuite);\n    });\n  }\n\n  this.hook('beforeAll', function(err){\n    if (err) return done();\n    self.runTests(suite, next);\n  });\n};\n\n/**\n * Handle uncaught exceptions.\n *\n * @param {Error} err\n * @api private\n */\n\nRunner.prototype.uncaught = function(err){\n  if (err) {\n    debug('uncaught exception %s', err !== function () {\n      return this;\n    }.call(err) ? err : ( err.message || err ));\n  } else {\n    debug('uncaught undefined exception');\n    err = utils.undefinedError();\n  }\n  err.uncaught = true;\n\n  var runnable = this.currentRunnable;\n  if (!runnable) return;\n\n  runnable.clearTimeout();\n\n  // Ignore errors if complete\n  if (runnable.state) return;\n  this.fail(runnable, err);\n\n  // recover from test\n  if ('test' == runnable.type) {\n    this.emit('test end', runnable);\n    this.hookUp('afterEach', this.next);\n    return;\n  }\n\n  // bail on hooks\n  this.emit('end');\n};\n\n/**\n * Run the root suite and invoke `fn(failures)`\n * on completion.\n *\n * @param {Function} fn\n * @return {Runner} for chaining\n * @api public\n */\n\nRunner.prototype.run = function(fn){\n  var self = this,\n    rootSuite = this.suite;\n\n  fn = fn || function(){};\n\n  function uncaught(err){\n    self.uncaught(err);\n  }\n\n  function start() {\n    self.emit('start');\n    self.runSuite(rootSuite, function(){\n      debug('finished running');\n      self.emit('end');\n    });\n  }\n\n  debug('start');\n\n  // callback\n  this.on('end', function(){\n    debug('end');\n    process.removeListener('uncaughtException', uncaught);\n    fn(self.failures);\n  });\n\n  // uncaught exception\n  process.on('uncaughtException', uncaught);\n\n  if (this._delay) {\n    // for reporters, I guess.\n    // might be nice to debounce some dots while we wait.\n    this.emit('waiting', rootSuite);\n    rootSuite.once('run', start);\n  }\n  else {\n    start();\n  }\n\n  return this;\n};\n\n/**\n * Cleanly abort execution\n *\n * @return {Runner} for chaining\n * @api public\n */\nRunner.prototype.abort = function(){\n  debug('aborting');\n  this._abort = true;\n};\n\n/**\n * Filter leaks with the given globals flagged as `ok`.\n *\n * @param {Array} ok\n * @param {Array} globals\n * @return {Array}\n * @api private\n */\n\nfunction filterLeaks(ok, globals) {\n  return filter(globals, function(key){\n    // Firefox and Chrome exposes iframes as index inside the window object\n    if (/^d+/.test(key)) return false;\n\n    // in firefox\n    // if runner runs in an iframe, this iframe's window.getInterface method not init at first\n    // it is assigned in some seconds\n    if (global.navigator && /^getInterface/.test(key)) return false;\n\n    // an iframe could be approached by window[iframeIndex]\n    // in ie6,7,8 and opera, iframeIndex is enumerable, this could cause leak\n    if (global.navigator && /^\\d+/.test(key)) return false;\n\n    // Opera and IE expose global variables for HTML element IDs (issue #243)\n    if (/^mocha-/.test(key)) return false;\n\n    var matched = filter(ok, function(ok){\n      if (~ok.indexOf('*')) return 0 == key.indexOf(ok.split('*')[0]);\n      return key == ok;\n    });\n    return matched.length == 0 && (!global.navigator || 'onerror' !== key);\n  });\n}\n\n/**\n * Array of globals dependent on the environment.\n *\n * @return {Array}\n * @api private\n */\n\nfunction extraGlobals() {\n if (typeof(process) === 'object' &&\n     typeof(process.version) === 'string') {\n\n   var nodeVersion = process.version.split('.').reduce(function(a, v) {\n     return a << 8 | v;\n   });\n\n   // 'errno' was renamed to process._errno in v0.9.11.\n\n   if (nodeVersion < 0x00090B) {\n     return ['errno'];\n   }\n }\n\n return [];\n}\n\n}); // module: runner.js\n\nrequire.register(\"suite.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar EventEmitter = require('browser/events').EventEmitter\n  , debug = require('browser/debug')('mocha:suite')\n  , milliseconds = require('./ms')\n  , utils = require('./utils')\n  , Hook = require('./hook');\n\n/**\n * Expose `Suite`.\n */\n\nexports = module.exports = Suite;\n\n/**\n * Create a new `Suite` with the given `title`\n * and parent `Suite`. When a suite with the\n * same title is already present, that suite\n * is returned to provide nicer reporter\n * and more flexible meta-testing.\n *\n * @param {Suite} parent\n * @param {String} title\n * @return {Suite}\n * @api public\n */\n\nexports.create = function(parent, title){\n  var suite = new Suite(title, parent.ctx);\n  suite.parent = parent;\n  if (parent.pending) suite.pending = true;\n  title = suite.fullTitle();\n  parent.addSuite(suite);\n  return suite;\n};\n\n/**\n * Initialize a new `Suite` with the given\n * `title` and `ctx`.\n *\n * @param {String} title\n * @param {Context} ctx\n * @api private\n */\n\nfunction Suite(title, parentContext) {\n  this.title = title;\n  var context = function() {};\n  context.prototype = parentContext;\n  this.ctx = new context();\n  this.suites = [];\n  this.tests = [];\n  this.pending = false;\n  this._beforeEach = [];\n  this._beforeAll = [];\n  this._afterEach = [];\n  this._afterAll = [];\n  this.root = !title;\n  this._timeout = 2000;\n  this._enableTimeouts = true;\n  this._slow = 75;\n  this._bail = false;\n  this.delayed = false;\n}\n\n/**\n * Inherit from `EventEmitter.prototype`.\n */\n\nfunction F(){};\nF.prototype = EventEmitter.prototype;\nSuite.prototype = new F;\nSuite.prototype.constructor = Suite;\n\n\n/**\n * Return a clone of this `Suite`.\n *\n * @return {Suite}\n * @api private\n */\n\nSuite.prototype.clone = function(){\n  var suite = new Suite(this.title);\n  debug('clone');\n  suite.ctx = this.ctx;\n  suite.timeout(this.timeout());\n  suite.enableTimeouts(this.enableTimeouts());\n  suite.slow(this.slow());\n  suite.bail(this.bail());\n  return suite;\n};\n\n/**\n * Set timeout `ms` or short-hand such as \"2s\".\n *\n * @param {Number|String} ms\n * @return {Suite|Number} for chaining\n * @api private\n */\n\nSuite.prototype.timeout = function(ms){\n  if (0 == arguments.length) return this._timeout;\n  if (ms.toString() === '0') this._enableTimeouts = false;\n  if ('string' == typeof ms) ms = milliseconds(ms);\n  debug('timeout %d', ms);\n  this._timeout = parseInt(ms, 10);\n  return this;\n};\n\n/**\n  * Set timeout `enabled`.\n  *\n  * @param {Boolean} enabled\n  * @return {Suite|Boolean} self or enabled\n  * @api private\n  */\n\nSuite.prototype.enableTimeouts = function(enabled){\n  if (arguments.length === 0) return this._enableTimeouts;\n  debug('enableTimeouts %s', enabled);\n  this._enableTimeouts = enabled;\n  return this;\n};\n\n/**\n * Set slow `ms` or short-hand such as \"2s\".\n *\n * @param {Number|String} ms\n * @return {Suite|Number} for chaining\n * @api private\n */\n\nSuite.prototype.slow = function(ms){\n  if (0 === arguments.length) return this._slow;\n  if ('string' == typeof ms) ms = milliseconds(ms);\n  debug('slow %d', ms);\n  this._slow = ms;\n  return this;\n};\n\n/**\n * Sets whether to bail after first error.\n *\n * @param {Boolean} bail\n * @return {Suite|Number} for chaining\n * @api private\n */\n\nSuite.prototype.bail = function(bail){\n  if (0 == arguments.length) return this._bail;\n  debug('bail %s', bail);\n  this._bail = bail;\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` before running tests.\n *\n * @param {Function} fn\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.beforeAll = function(title, fn){\n  if (this.pending) return this;\n  if ('function' === typeof title) {\n    fn = title;\n    title = fn.name;\n  }\n  title = '\"before all\" hook' + (title ? ': ' + title : '');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._beforeAll.push(hook);\n  this.emit('beforeAll', hook);\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` after running tests.\n *\n * @param {Function} fn\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.afterAll = function(title, fn){\n  if (this.pending) return this;\n  if ('function' === typeof title) {\n    fn = title;\n    title = fn.name;\n  }\n  title = '\"after all\" hook' + (title ? ': ' + title : '');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._afterAll.push(hook);\n  this.emit('afterAll', hook);\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` before each test case.\n *\n * @param {Function} fn\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.beforeEach = function(title, fn){\n  if (this.pending) return this;\n  if ('function' === typeof title) {\n    fn = title;\n    title = fn.name;\n  }\n  title = '\"before each\" hook' + (title ? ': ' + title : '');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._beforeEach.push(hook);\n  this.emit('beforeEach', hook);\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` after each test case.\n *\n * @param {Function} fn\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.afterEach = function(title, fn){\n  if (this.pending) return this;\n  if ('function' === typeof title) {\n    fn = title;\n    title = fn.name;\n  }\n  title = '\"after each\" hook' + (title ? ': ' + title : '');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._afterEach.push(hook);\n  this.emit('afterEach', hook);\n  return this;\n};\n\n/**\n * Add a test `suite`.\n *\n * @param {Suite} suite\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.addSuite = function(suite){\n  suite.parent = this;\n  suite.timeout(this.timeout());\n  suite.enableTimeouts(this.enableTimeouts());\n  suite.slow(this.slow());\n  suite.bail(this.bail());\n  this.suites.push(suite);\n  this.emit('suite', suite);\n  return this;\n};\n\n/**\n * Add a `test` to this suite.\n *\n * @param {Test} test\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.addTest = function(test){\n  test.parent = this;\n  test.timeout(this.timeout());\n  test.enableTimeouts(this.enableTimeouts());\n  test.slow(this.slow());\n  test.ctx = this.ctx;\n  this.tests.push(test);\n  this.emit('test', test);\n  return this;\n};\n\n/**\n * Return the full title generated by recursively\n * concatenating the parent's full title.\n *\n * @return {String}\n * @api public\n */\n\nSuite.prototype.fullTitle = function(){\n  if (this.parent) {\n    var full = this.parent.fullTitle();\n    if (full) return full + ' ' + this.title;\n  }\n  return this.title;\n};\n\n/**\n * Return the total number of tests.\n *\n * @return {Number}\n * @api public\n */\n\nSuite.prototype.total = function(){\n  return utils.reduce(this.suites, function(sum, suite){\n    return sum + suite.total();\n  }, 0) + this.tests.length;\n};\n\n/**\n * Iterates through each suite recursively to find\n * all tests. Applies a function in the format\n * `fn(test)`.\n *\n * @param {Function} fn\n * @return {Suite}\n * @api private\n */\n\nSuite.prototype.eachTest = function(fn){\n  utils.forEach(this.tests, fn);\n  utils.forEach(this.suites, function(suite){\n    suite.eachTest(fn);\n  });\n  return this;\n};\n\n/**\n * This will run the root suite if we happen to be running in delayed mode.\n */\nSuite.prototype.run = function run() {\n  if (this.root) {\n    this.emit('run');\n  }\n};\n\n}); // module: suite.js\n\nrequire.register(\"test.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Runnable = require('./runnable');\n\n/**\n * Expose `Test`.\n */\n\nmodule.exports = Test;\n\n/**\n * Initialize a new `Test` with the given `title` and callback `fn`.\n *\n * @param {String} title\n * @param {Function} fn\n * @api private\n */\n\nfunction Test(title, fn) {\n  Runnable.call(this, title, fn);\n  this.pending = !fn;\n  this.type = 'test';\n}\n\n/**\n * Inherit from `Runnable.prototype`.\n */\n\nfunction F(){};\nF.prototype = Runnable.prototype;\nTest.prototype = new F;\nTest.prototype.constructor = Test;\n\n\n}); // module: test.js\n\nrequire.register(\"utils.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar fs = require('browser/fs')\n  , path = require('browser/path')\n  , basename = path.basename\n  , exists = fs.existsSync || path.existsSync\n  , glob = require('browser/glob')\n  , join = path.join\n  , debug = require('browser/debug')('mocha:watch');\n\n/**\n * Ignored directories.\n */\n\nvar ignore = ['node_modules', '.git'];\n\n/**\n * Escape special characters in the given string of html.\n *\n * @param  {String} html\n * @return {String}\n * @api private\n */\n\nexports.escape = function(html){\n  return String(html)\n    .replace(/&/g, '&amp;')\n    .replace(/\"/g, '&quot;')\n    .replace(/</g, '&lt;')\n    .replace(/>/g, '&gt;');\n};\n\n/**\n * Array#forEach (<=IE8)\n *\n * @param {Array} array\n * @param {Function} fn\n * @param {Object} scope\n * @api private\n */\n\nexports.forEach = function(arr, fn, scope){\n  for (var i = 0, l = arr.length; i < l; i++)\n    fn.call(scope, arr[i], i);\n};\n\n/**\n * Array#map (<=IE8)\n *\n * @param {Array} array\n * @param {Function} fn\n * @param {Object} scope\n * @api private\n */\n\nexports.map = function(arr, fn, scope){\n  var result = [];\n  for (var i = 0, l = arr.length; i < l; i++)\n    result.push(fn.call(scope, arr[i], i, arr));\n  return result;\n};\n\n/**\n * Array#indexOf (<=IE8)\n *\n * @parma {Array} arr\n * @param {Object} obj to find index of\n * @param {Number} start\n * @api private\n */\n\nexports.indexOf = function(arr, obj, start){\n  for (var i = start || 0, l = arr.length; i < l; i++) {\n    if (arr[i] === obj)\n      return i;\n  }\n  return -1;\n};\n\n/**\n * Array#reduce (<=IE8)\n *\n * @param {Array} array\n * @param {Function} fn\n * @param {Object} initial value\n * @api private\n */\n\nexports.reduce = function(arr, fn, val){\n  var rval = val;\n\n  for (var i = 0, l = arr.length; i < l; i++) {\n    rval = fn(rval, arr[i], i, arr);\n  }\n\n  return rval;\n};\n\n/**\n * Array#filter (<=IE8)\n *\n * @param {Array} array\n * @param {Function} fn\n * @api private\n */\n\nexports.filter = function(arr, fn){\n  var ret = [];\n\n  for (var i = 0, l = arr.length; i < l; i++) {\n    var val = arr[i];\n    if (fn(val, i, arr)) ret.push(val);\n  }\n\n  return ret;\n};\n\n/**\n * Object.keys (<=IE8)\n *\n * @param {Object} obj\n * @return {Array} keys\n * @api private\n */\n\nexports.keys = Object.keys || function(obj) {\n  var keys = []\n    , has = Object.prototype.hasOwnProperty; // for `window` on <=IE8\n\n  for (var key in obj) {\n    if (has.call(obj, key)) {\n      keys.push(key);\n    }\n  }\n\n  return keys;\n};\n\n/**\n * Watch the given `files` for changes\n * and invoke `fn(file)` on modification.\n *\n * @param {Array} files\n * @param {Function} fn\n * @api private\n */\n\nexports.watch = function(files, fn){\n  var options = { interval: 100 };\n  files.forEach(function(file){\n    debug('file %s', file);\n    fs.watchFile(file, options, function(curr, prev){\n      if (prev.mtime < curr.mtime) fn(file);\n    });\n  });\n};\n\n/**\n * Array.isArray (<=IE8)\n *\n * @param {Object} obj\n * @return {Boolean}\n * @api private\n */\nvar isArray = Array.isArray || function (obj) {\n  return '[object Array]' == {}.toString.call(obj);\n};\n\n/**\n * @description\n * Buffer.prototype.toJSON polyfill\n * @type {Function}\n */\nif(typeof Buffer !== 'undefined' && Buffer.prototype) {\n  Buffer.prototype.toJSON = Buffer.prototype.toJSON || function () {\n    return Array.prototype.slice.call(this, 0);\n  };\n}\n\n/**\n * Ignored files.\n */\n\nfunction ignored(path){\n  return !~ignore.indexOf(path);\n}\n\n/**\n * Lookup files in the given `dir`.\n *\n * @return {Array}\n * @api private\n */\n\nexports.files = function(dir, ext, ret){\n  ret = ret || [];\n  ext = ext || ['js'];\n\n  var re = new RegExp('\\\\.(' + ext.join('|') + ')$');\n\n  fs.readdirSync(dir)\n    .filter(ignored)\n    .forEach(function(path){\n      path = join(dir, path);\n      if (fs.statSync(path).isDirectory()) {\n        exports.files(path, ext, ret);\n      } else if (path.match(re)) {\n        ret.push(path);\n      }\n    });\n\n  return ret;\n};\n\n/**\n * Compute a slug from the given `str`.\n *\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nexports.slug = function(str){\n  return str\n    .toLowerCase()\n    .replace(/ +/g, '-')\n    .replace(/[^-\\w]/g, '');\n};\n\n/**\n * Strip the function definition from `str`,\n * and re-indent for pre whitespace.\n */\n\nexports.clean = function(str) {\n  str = str\n    .replace(/\\r\\n?|[\\n\\u2028\\u2029]/g, \"\\n\").replace(/^\\uFEFF/, '')\n    .replace(/^function *\\(.*\\)\\s*{|\\(.*\\) *=> *{?/, '')\n    .replace(/\\s+\\}$/, '');\n\n  var spaces = str.match(/^\\n?( *)/)[1].length\n    , tabs = str.match(/^\\n?(\\t*)/)[1].length\n    , re = new RegExp('^\\n?' + (tabs ? '\\t' : ' ') + '{' + (tabs ? tabs : spaces) + '}', 'gm');\n\n  str = str.replace(re, '');\n\n  return exports.trim(str);\n};\n\n/**\n * Trim the given `str`.\n *\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nexports.trim = function(str){\n  return str.replace(/^\\s+|\\s+$/g, '');\n};\n\n/**\n * Parse the given `qs`.\n *\n * @param {String} qs\n * @return {Object}\n * @api private\n */\n\nexports.parseQuery = function(qs){\n  return exports.reduce(qs.replace('?', '').split('&'), function(obj, pair){\n    var i = pair.indexOf('=')\n      , key = pair.slice(0, i)\n      , val = pair.slice(++i);\n\n    obj[key] = decodeURIComponent(val);\n    return obj;\n  }, {});\n};\n\n/**\n * Highlight the given string of `js`.\n *\n * @param {String} js\n * @return {String}\n * @api private\n */\n\nfunction highlight(js) {\n  return js\n    .replace(/</g, '&lt;')\n    .replace(/>/g, '&gt;')\n    .replace(/\\/\\/(.*)/gm, '<span class=\"comment\">//$1</span>')\n    .replace(/('.*?')/gm, '<span class=\"string\">$1</span>')\n    .replace(/(\\d+\\.\\d+)/gm, '<span class=\"number\">$1</span>')\n    .replace(/(\\d+)/gm, '<span class=\"number\">$1</span>')\n    .replace(/\\bnew[ \\t]+(\\w+)/gm, '<span class=\"keyword\">new</span> <span class=\"init\">$1</span>')\n    .replace(/\\b(function|new|throw|return|var|if|else)\\b/gm, '<span class=\"keyword\">$1</span>')\n}\n\n/**\n * Highlight the contents of tag `name`.\n *\n * @param {String} name\n * @api private\n */\n\nexports.highlightTags = function(name) {\n  var code = document.getElementById('mocha').getElementsByTagName(name);\n  for (var i = 0, len = code.length; i < len; ++i) {\n    code[i].innerHTML = highlight(code[i].innerHTML);\n  }\n};\n\n/**\n * If a value could have properties, and has none, this function is called, which returns\n * a string representation of the empty value.\n *\n * Functions w/ no properties return `'[Function]'`\n * Arrays w/ length === 0 return `'[]'`\n * Objects w/ no properties return `'{}'`\n * All else: return result of `value.toString()`\n *\n * @param {*} value Value to inspect\n * @param {string} [type] The type of the value, if known.\n * @returns {string}\n */\nvar emptyRepresentation = function emptyRepresentation(value, type) {\n  type = type || exports.type(value);\n\n  switch(type) {\n    case 'function':\n      return '[Function]';\n    case 'object':\n      return '{}';\n    case 'array':\n      return '[]';\n    default:\n      return value.toString();\n  }\n};\n\n/**\n * Takes some variable and asks `{}.toString()` what it thinks it is.\n * @param {*} value Anything\n * @example\n * type({}) // 'object'\n * type([]) // 'array'\n * type(1) // 'number'\n * type(false) // 'boolean'\n * type(Infinity) // 'number'\n * type(null) // 'null'\n * type(new Date()) // 'date'\n * type(/foo/) // 'regexp'\n * type('type') // 'string'\n * type(global) // 'global'\n * @api private\n * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString\n * @returns {string}\n */\nexports.type = function type(value) {\n  if (typeof Buffer !== 'undefined' && Buffer.isBuffer(value)) {\n    return 'buffer';\n  }\n  return Object.prototype.toString.call(value)\n    .replace(/^\\[.+\\s(.+?)\\]$/, '$1')\n    .toLowerCase();\n};\n\n/**\n * @summary Stringify `value`.\n * @description Different behavior depending on type of value.\n * - If `value` is undefined or null, return `'[undefined]'` or `'[null]'`, respectively.\n * - If `value` is not an object, function or array, return result of `value.toString()` wrapped in double-quotes.\n * - If `value` is an *empty* object, function, or array, return result of function\n *   {@link emptyRepresentation}.\n * - If `value` has properties, call {@link exports.canonicalize} on it, then return result of\n *   JSON.stringify().\n *\n * @see exports.type\n * @param {*} value\n * @return {string}\n * @api private\n */\n\nexports.stringify = function(value) {\n  var type = exports.type(value);\n\n  if (!~exports.indexOf(['object', 'array', 'function'], type)) {\n    if(type != 'buffer') {\n      return jsonStringify(value);\n    }\n    var json = value.toJSON();\n    // Based on the toJSON result\n    return jsonStringify(json.data && json.type ? json.data : json, 2)\n      .replace(/,(\\n|$)/g, '$1');\n  }\n\n  for (var prop in value) {\n    if (Object.prototype.hasOwnProperty.call(value, prop)) {\n      return jsonStringify(exports.canonicalize(value), 2).replace(/,(\\n|$)/g, '$1');\n    }\n  }\n\n  return emptyRepresentation(value, type);\n};\n\n/**\n * @description\n * like JSON.stringify but more sense.\n * @param {Object}  object\n * @param {Number=} spaces\n * @param {number=} depth\n * @returns {*}\n * @private\n */\nfunction jsonStringify(object, spaces, depth) {\n  if(typeof spaces == 'undefined') return _stringify(object);  // primitive types\n\n  depth = depth || 1;\n  var space = spaces * depth\n    , str = isArray(object) ? '[' : '{'\n    , end = isArray(object) ? ']' : '}'\n    , length = object.length || exports.keys(object).length\n    , repeat = function(s, n) { return new Array(n).join(s); }; // `.repeat()` polyfill\n\n  function _stringify(val) {\n    switch (exports.type(val)) {\n      case 'null':\n      case 'undefined':\n        val = '[' + val + ']';\n        break;\n      case 'array':\n      case 'object':\n        val = jsonStringify(val, spaces, depth + 1);\n        break;\n      case 'boolean':\n      case 'regexp':\n      case 'number':\n        val = val === 0 && (1/val) === -Infinity // `-0`\n          ? '-0'\n          : val.toString();\n        break;\n      case 'date':\n        val = '[Date: ' + val.toISOString() + ']';\n        break;\n      case 'buffer':\n        var json = val.toJSON();\n        // Based on the toJSON result\n        json = json.data && json.type ? json.data : json;\n        val = '[Buffer: ' + jsonStringify(json, 2, depth + 1) + ']';\n        break;\n      default:\n        val = (val == '[Function]' || val == '[Circular]')\n          ? val\n          : '\"' + val + '\"'; //string\n    }\n    return val;\n  }\n\n  for(var i in object) {\n    if(!object.hasOwnProperty(i)) continue;        // not my business\n    --length;\n    str += '\\n ' + repeat(' ', space)\n      + (isArray(object) ? '' : '\"' + i + '\": ') // key\n      +  _stringify(object[i])                   // value\n      + (length ? ',' : '');                     // comma\n  }\n\n  return str + (str.length != 1                    // [], {}\n    ? '\\n' + repeat(' ', --space) + end\n    : end);\n}\n\n/**\n * Return if obj is a Buffer\n * @param {Object} arg\n * @return {Boolean}\n * @api private\n */\nexports.isBuffer = function (arg) {\n  return typeof Buffer !== 'undefined' && Buffer.isBuffer(arg);\n};\n\n/**\n * @summary Return a new Thing that has the keys in sorted order.  Recursive.\n * @description If the Thing...\n * - has already been seen, return string `'[Circular]'`\n * - is `undefined`, return string `'[undefined]'`\n * - is `null`, return value `null`\n * - is some other primitive, return the value\n * - is not a primitive or an `Array`, `Object`, or `Function`, return the value of the Thing's `toString()` method\n * - is a non-empty `Array`, `Object`, or `Function`, return the result of calling this function again.\n * - is an empty `Array`, `Object`, or `Function`, return the result of calling `emptyRepresentation()`\n *\n * @param {*} value Thing to inspect.  May or may not have properties.\n * @param {Array} [stack=[]] Stack of seen values\n * @return {(Object|Array|Function|string|undefined)}\n * @see {@link exports.stringify}\n * @api private\n */\n\nexports.canonicalize = function(value, stack) {\n  var canonicalizedObj,\n    type = exports.type(value),\n    prop,\n    withStack = function withStack(value, fn) {\n      stack.push(value);\n      fn();\n      stack.pop();\n    };\n\n  stack = stack || [];\n\n  if (exports.indexOf(stack, value) !== -1) {\n    return '[Circular]';\n  }\n\n  switch(type) {\n    case 'undefined':\n    case 'buffer':\n    case 'null':\n      canonicalizedObj = value;\n      break;\n    case 'array':\n      withStack(value, function () {\n        canonicalizedObj = exports.map(value, function (item) {\n          return exports.canonicalize(item, stack);\n        });\n      });\n      break;\n    case 'function':\n      for (prop in value) {\n        canonicalizedObj = {};\n        break;\n      }\n      if (!canonicalizedObj) {\n        canonicalizedObj = emptyRepresentation(value, type);\n        break;\n      }\n    /* falls through */\n    case 'object':\n      canonicalizedObj = canonicalizedObj || {};\n      withStack(value, function () {\n        exports.forEach(exports.keys(value).sort(), function (key) {\n          canonicalizedObj[key] = exports.canonicalize(value[key], stack);\n        });\n      });\n      break;\n    case 'date':\n    case 'number':\n    case 'regexp':\n    case 'boolean':\n      canonicalizedObj = value;\n      break;\n    default:\n      canonicalizedObj = value.toString();\n  }\n\n  return canonicalizedObj;\n};\n\n/**\n * Lookup file names at the given `path`.\n */\nexports.lookupFiles = function lookupFiles(path, extensions, recursive) {\n  var files = [];\n  var re = new RegExp('\\\\.(' + extensions.join('|') + ')$');\n\n  if (!exists(path)) {\n    if (exists(path + '.js')) {\n      path += '.js';\n    } else {\n      files = glob.sync(path);\n      if (!files.length) throw new Error(\"cannot resolve path (or pattern) '\" + path + \"'\");\n      return files;\n    }\n  }\n\n  try {\n    var stat = fs.statSync(path);\n    if (stat.isFile()) return path;\n  }\n  catch (ignored) {\n    return;\n  }\n\n  fs.readdirSync(path).forEach(function(file) {\n    file = join(path, file);\n    try {\n      var stat = fs.statSync(file);\n      if (stat.isDirectory()) {\n        if (recursive) {\n          files = files.concat(lookupFiles(file, extensions, recursive));\n        }\n        return;\n      }\n    }\n    catch (ignored) {\n      return;\n    }\n    if (!stat.isFile() || !re.test(file) || basename(file)[0] === '.') return;\n    files.push(file);\n  });\n\n  return files;\n};\n\n/**\n * Generate an undefined error with a message warning the user.\n *\n * @return {Error}\n */\n\nexports.undefinedError = function() {\n  return new Error('Caught undefined error, did you throw without specifying what?');\n};\n\n/**\n * Generate an undefined error if `err` is not defined.\n *\n * @param {Error} err\n * @return {Error}\n */\n\nexports.getError = function(err) {\n  return err || exports.undefinedError();\n};\n\n\n/**\n * @summary\n * This Filter based on `mocha-clean` module.(see: `github.com/rstacruz/mocha-clean`)\n * @description\n * When invoking this function you get a filter function that get the Error.stack as an input,\n * and return a prettify output.\n * (i.e: strip Mocha, node_modules, bower and componentJS from stack trace).\n * @returns {Function}\n */\n\nexports.stackTraceFilter = function() {\n  var slash = '/'\n    , is = typeof document === 'undefined'\n      ? { node: true }\n      : { browser: true }\n    , cwd = is.node\n      ? process.cwd() + slash\n      : location.href.replace(/\\/[^\\/]*$/, '/');\n\n  function isNodeModule (line) {\n    return (~line.indexOf('node_modules'));\n  }\n\n  function isMochaInternal (line) {\n    return (~line.indexOf('node_modules' + slash + 'mocha'))  ||\n      (~line.indexOf('components' + slash + 'mochajs'))       ||\n      (~line.indexOf('components' + slash + 'mocha'));\n  }\n\n  // node_modules, bower, componentJS\n  function isBrowserModule(line) {\n    return (~line.indexOf('node_modules')) ||\n      (~line.indexOf('components'));\n  }\n\n  function isNodeInternal (line) {\n    return (~line.indexOf('(timers.js:')) ||\n      (~line.indexOf('(events.js:'))      ||\n      (~line.indexOf('(node.js:'))        ||\n      (~line.indexOf('(module.js:'))      ||\n      (~line.indexOf('GeneratorFunctionPrototype.next (native)')) ||\n      false\n  }\n\n  return function(stack) {\n    stack = stack.split('\\n');\n\n    stack = exports.reduce(stack, function(list, line) {\n      if (is.node && (isNodeModule(line) ||\n        isMochaInternal(line) ||\n        isNodeInternal(line)))\n        return list;\n\n      if (is.browser && (isBrowserModule(line)))\n        return list;\n\n      // Clean up cwd(absolute)\n      list.push(line.replace(cwd, ''));\n      return list;\n    }, []);\n\n    return stack.join('\\n');\n  }\n};\n}); // module: utils.js\n// The global object is \"self\" in Web Workers.\nvar global = (function() { return this; })();\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date;\nvar setTimeout = global.setTimeout;\nvar setInterval = global.setInterval;\nvar clearTimeout = global.clearTimeout;\nvar clearInterval = global.clearInterval;\n\n/**\n * Node shims.\n *\n * These are meant only to allow\n * mocha.js to run untouched, not\n * to allow running node code in\n * the browser.\n */\n\nvar process = {};\nprocess.exit = function(status){};\nprocess.stdout = {};\n\nvar uncaughtExceptionHandlers = [];\n\nvar originalOnerrorHandler = global.onerror;\n\n/**\n * Remove uncaughtException listener.\n * Revert to original onerror handler if previously defined.\n */\n\nprocess.removeListener = function(e, fn){\n  if ('uncaughtException' == e) {\n    if (originalOnerrorHandler) {\n      global.onerror = originalOnerrorHandler;\n    } else {\n      global.onerror = function() {};\n    }\n    var i = Mocha.utils.indexOf(uncaughtExceptionHandlers, fn);\n    if (i != -1) { uncaughtExceptionHandlers.splice(i, 1); }\n  }\n};\n\n/**\n * Implements uncaughtException listener.\n */\n\nprocess.on = function(e, fn){\n  if ('uncaughtException' == e) {\n    global.onerror = function(err, url, line){\n      fn(new Error(err + ' (' + url + ':' + line + ')'));\n      return true;\n    };\n    uncaughtExceptionHandlers.push(fn);\n  }\n};\n\n/**\n * Expose mocha.\n */\n\nvar Mocha = global.Mocha = require('mocha'),\n    mocha = global.mocha = new Mocha({ reporter: 'html' });\n\n// The BDD UI is registered by default, but no UI will be functional in the\n// browser without an explicit call to the overridden `mocha.ui` (see below).\n// Ensure that this default UI does not expose its methods to the global scope.\nmocha.suite.removeAllListeners('pre-require');\n\nvar immediateQueue = []\n  , immediateTimeout;\n\nfunction timeslice() {\n  var immediateStart = new Date().getTime();\n  while (immediateQueue.length && (new Date().getTime() - immediateStart) < 100) {\n    immediateQueue.shift()();\n  }\n  if (immediateQueue.length) {\n    immediateTimeout = setTimeout(timeslice, 0);\n  } else {\n    immediateTimeout = null;\n  }\n}\n\n/**\n * High-performance override of Runner.immediately.\n */\n\nMocha.Runner.immediately = function(callback) {\n  immediateQueue.push(callback);\n  if (!immediateTimeout) {\n    immediateTimeout = setTimeout(timeslice, 0);\n  }\n};\n\n/**\n * Function to allow assertion libraries to throw errors directly into mocha.\n * This is useful when running tests in a browser because window.onerror will\n * only receive the 'message' attribute of the Error.\n */\nmocha.throwError = function(err) {\n  Mocha.utils.forEach(uncaughtExceptionHandlers, function (fn) {\n    fn(err);\n  });\n  throw err;\n};\n\n/**\n * Override ui to ensure that the ui functions are initialized.\n * Normally this would happen in Mocha.prototype.loadFiles.\n */\n\nmocha.ui = function(ui){\n  Mocha.prototype.ui.call(this, ui);\n  this.suite.emit('pre-require', global, null, this);\n  return this;\n};\n\n/**\n * Setup mocha with the given setting options.\n */\n\nmocha.setup = function(opts){\n  if ('string' == typeof opts) opts = { ui: opts };\n  for (var opt in opts) this[opt](opts[opt]);\n  return this;\n};\n\n/**\n * Run mocha, returning the Runner.\n */\n\nmocha.run = function(fn){\n  var options = mocha.options;\n  mocha.globals('location');\n\n  var query = Mocha.utils.parseQuery(global.location.search || '');\n  if (query.grep) mocha.grep(new RegExp(query.grep));\n  if (query.fgrep) mocha.grep(query.fgrep);\n  if (query.invert) mocha.invert();\n\n  return Mocha.prototype.run.call(mocha, function(err){\n    // The DOM Document is not available in Web Workers.\n    var document = global.document;\n    if (document && document.getElementById('mocha') && options.noHighlighting !== true) {\n      Mocha.utils.highlightTags('code');\n    }\n    if (fn) fn(err);\n  });\n};\n\n/**\n * Expose the process shim.\n */\n\nMocha.process = process;\n})();\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var mocha = __webpack_require__(10);
	var chai = __webpack_require__(16);
	var expect = chai.expect;

	describe('board', function(){
	  it('exists', function() {
	    //var board = $('#board');
	    //expect(board.exists()).not..to.be.ok;
	  });
	});


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process, __dirname, Buffer) {;(function(){

	// CommonJS require()

	function require(p){
	    var path = require.resolve(p)
	      , mod = require.modules[path];
	    if (!mod) throw new Error('failed to require "' + p + '"');
	    if (!mod.exports) {
	      mod.exports = {};
	      mod.call(mod.exports, mod, mod.exports, require.relative(path));
	    }
	    return mod.exports;
	  }

	require.modules = {};

	require.resolve = function (path){
	    var orig = path
	      , reg = path + '.js'
	      , index = path + '/index.js';
	    return require.modules[reg] && reg
	      || require.modules[index] && index
	      || orig;
	  };

	require.register = function (path, fn){
	    require.modules[path] = fn;
	  };

	require.relative = function (parent) {
	    return function(p){
	      if ('.' != p.charAt(0)) return require(p);

	      var path = parent.split('/')
	        , segs = p.split('/');
	      path.pop();

	      for (var i = 0; i < segs.length; i++) {
	        var seg = segs[i];
	        if ('..' == seg) path.pop();
	        else if ('.' != seg) path.push(seg);
	      }

	      return require(path.join('/'));
	    };
	  };


	require.register("browser/debug.js", function(module, exports, require){
	module.exports = function(type){
	  return function(){
	  }
	};

	}); // module: browser/debug.js

	require.register("browser/diff.js", function(module, exports, require){
	/* See LICENSE file for terms of use */

	/*
	 * Text diff implementation.
	 *
	 * This library supports the following APIS:
	 * JsDiff.diffChars: Character by character diff
	 * JsDiff.diffWords: Word (as defined by \b regex) diff which ignores whitespace
	 * JsDiff.diffLines: Line based diff
	 *
	 * JsDiff.diffCss: Diff targeted at CSS content
	 *
	 * These methods are based on the implementation proposed in
	 * "An O(ND) Difference Algorithm and its Variations" (Myers, 1986).
	 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927
	 */
	var JsDiff = (function() {
	  /*jshint maxparams: 5*/
	  function clonePath(path) {
	    return { newPos: path.newPos, components: path.components.slice(0) };
	  }
	  function removeEmpty(array) {
	    var ret = [];
	    for (var i = 0; i < array.length; i++) {
	      if (array[i]) {
	        ret.push(array[i]);
	      }
	    }
	    return ret;
	  }
	  function escapeHTML(s) {
	    var n = s;
	    n = n.replace(/&/g, '&amp;');
	    n = n.replace(/</g, '&lt;');
	    n = n.replace(/>/g, '&gt;');
	    n = n.replace(/"/g, '&quot;');

	    return n;
	  }

	  var Diff = function(ignoreWhitespace) {
	    this.ignoreWhitespace = ignoreWhitespace;
	  };
	  Diff.prototype = {
	      diff: function(oldString, newString) {
	        // Handle the identity case (this is due to unrolling editLength == 0
	        if (newString === oldString) {
	          return [{ value: newString }];
	        }
	        if (!newString) {
	          return [{ value: oldString, removed: true }];
	        }
	        if (!oldString) {
	          return [{ value: newString, added: true }];
	        }

	        newString = this.tokenize(newString);
	        oldString = this.tokenize(oldString);

	        var newLen = newString.length, oldLen = oldString.length;
	        var maxEditLength = newLen + oldLen;
	        var bestPath = [{ newPos: -1, components: [] }];

	        // Seed editLength = 0
	        var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
	        if (bestPath[0].newPos+1 >= newLen && oldPos+1 >= oldLen) {
	          return bestPath[0].components;
	        }

	        for (var editLength = 1; editLength <= maxEditLength; editLength++) {
	          for (var diagonalPath = -1*editLength; diagonalPath <= editLength; diagonalPath+=2) {
	            var basePath;
	            var addPath = bestPath[diagonalPath-1],
	                removePath = bestPath[diagonalPath+1];
	            oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
	            if (addPath) {
	              // No one else is going to attempt to use this value, clear it
	              bestPath[diagonalPath-1] = undefined;
	            }

	            var canAdd = addPath && addPath.newPos+1 < newLen;
	            var canRemove = removePath && 0 <= oldPos && oldPos < oldLen;
	            if (!canAdd && !canRemove) {
	              bestPath[diagonalPath] = undefined;
	              continue;
	            }

	            // Select the diagonal that we want to branch from. We select the prior
	            // path whose position in the new string is the farthest from the origin
	            // and does not pass the bounds of the diff graph
	            if (!canAdd || (canRemove && addPath.newPos < removePath.newPos)) {
	              basePath = clonePath(removePath);
	              this.pushComponent(basePath.components, oldString[oldPos], undefined, true);
	            } else {
	              basePath = clonePath(addPath);
	              basePath.newPos++;
	              this.pushComponent(basePath.components, newString[basePath.newPos], true, undefined);
	            }

	            var oldPos = this.extractCommon(basePath, newString, oldString, diagonalPath);

	            if (basePath.newPos+1 >= newLen && oldPos+1 >= oldLen) {
	              return basePath.components;
	            } else {
	              bestPath[diagonalPath] = basePath;
	            }
	          }
	        }
	      },

	      pushComponent: function(components, value, added, removed) {
	        var last = components[components.length-1];
	        if (last && last.added === added && last.removed === removed) {
	          // We need to clone here as the component clone operation is just
	          // as shallow array clone
	          components[components.length-1] =
	            {value: this.join(last.value, value), added: added, removed: removed };
	        } else {
	          components.push({value: value, added: added, removed: removed });
	        }
	      },
	      extractCommon: function(basePath, newString, oldString, diagonalPath) {
	        var newLen = newString.length,
	            oldLen = oldString.length,
	            newPos = basePath.newPos,
	            oldPos = newPos - diagonalPath;
	        while (newPos+1 < newLen && oldPos+1 < oldLen && this.equals(newString[newPos+1], oldString[oldPos+1])) {
	          newPos++;
	          oldPos++;

	          this.pushComponent(basePath.components, newString[newPos], undefined, undefined);
	        }
	        basePath.newPos = newPos;
	        return oldPos;
	      },

	      equals: function(left, right) {
	        var reWhitespace = /\S/;
	        if (this.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right)) {
	          return true;
	        } else {
	          return left === right;
	        }
	      },
	      join: function(left, right) {
	        return left + right;
	      },
	      tokenize: function(value) {
	        return value;
	      }
	  };

	  var CharDiff = new Diff();

	  var WordDiff = new Diff(true);
	  var WordWithSpaceDiff = new Diff();
	  WordDiff.tokenize = WordWithSpaceDiff.tokenize = function(value) {
	    return removeEmpty(value.split(/(\s+|\b)/));
	  };

	  var CssDiff = new Diff(true);
	  CssDiff.tokenize = function(value) {
	    return removeEmpty(value.split(/([{}:;,]|\s+)/));
	  };

	  var LineDiff = new Diff();
	  LineDiff.tokenize = function(value) {
	    var retLines = [],
	        lines = value.split(/^/m);

	    for(var i = 0; i < lines.length; i++) {
	      var line = lines[i],
	          lastLine = lines[i - 1];

	      // Merge lines that may contain windows new lines
	      if (line == '\n' && lastLine && lastLine[lastLine.length - 1] === '\r') {
	        retLines[retLines.length - 1] += '\n';
	      } else if (line) {
	        retLines.push(line);
	      }
	    }

	    return retLines;
	  };

	  return {
	    Diff: Diff,

	    diffChars: function(oldStr, newStr) { return CharDiff.diff(oldStr, newStr); },
	    diffWords: function(oldStr, newStr) { return WordDiff.diff(oldStr, newStr); },
	    diffWordsWithSpace: function(oldStr, newStr) { return WordWithSpaceDiff.diff(oldStr, newStr); },
	    diffLines: function(oldStr, newStr) { return LineDiff.diff(oldStr, newStr); },

	    diffCss: function(oldStr, newStr) { return CssDiff.diff(oldStr, newStr); },

	    createPatch: function(fileName, oldStr, newStr, oldHeader, newHeader) {
	      var ret = [];

	      ret.push('Index: ' + fileName);
	      ret.push('===================================================================');
	      ret.push('--- ' + fileName + (typeof oldHeader === 'undefined' ? '' : '\t' + oldHeader));
	      ret.push('+++ ' + fileName + (typeof newHeader === 'undefined' ? '' : '\t' + newHeader));

	      var diff = LineDiff.diff(oldStr, newStr);
	      if (!diff[diff.length-1].value) {
	        diff.pop();   // Remove trailing newline add
	      }
	      diff.push({value: '', lines: []});   // Append an empty value to make cleanup easier

	      function contextLines(lines) {
	        return lines.map(function(entry) { return ' ' + entry; });
	      }
	      function eofNL(curRange, i, current) {
	        var last = diff[diff.length-2],
	            isLast = i === diff.length-2,
	            isLastOfType = i === diff.length-3 && (current.added !== last.added || current.removed !== last.removed);

	        // Figure out if this is the last line for the given file and missing NL
	        if (!/\n$/.test(current.value) && (isLast || isLastOfType)) {
	          curRange.push('\\ No newline at end of file');
	        }
	      }

	      var oldRangeStart = 0, newRangeStart = 0, curRange = [],
	          oldLine = 1, newLine = 1;
	      for (var i = 0; i < diff.length; i++) {
	        var current = diff[i],
	            lines = current.lines || current.value.replace(/\n$/, '').split('\n');
	        current.lines = lines;

	        if (current.added || current.removed) {
	          if (!oldRangeStart) {
	            var prev = diff[i-1];
	            oldRangeStart = oldLine;
	            newRangeStart = newLine;

	            if (prev) {
	              curRange = contextLines(prev.lines.slice(-4));
	              oldRangeStart -= curRange.length;
	              newRangeStart -= curRange.length;
	            }
	          }
	          curRange.push.apply(curRange, lines.map(function(entry) { return (current.added?'+':'-') + entry; }));
	          eofNL(curRange, i, current);

	          if (current.added) {
	            newLine += lines.length;
	          } else {
	            oldLine += lines.length;
	          }
	        } else {
	          if (oldRangeStart) {
	            // Close out any changes that have been output (or join overlapping)
	            if (lines.length <= 8 && i < diff.length-2) {
	              // Overlapping
	              curRange.push.apply(curRange, contextLines(lines));
	            } else {
	              // end the range and output
	              var contextSize = Math.min(lines.length, 4);
	              ret.push(
	                  '@@ -' + oldRangeStart + ',' + (oldLine-oldRangeStart+contextSize)
	                  + ' +' + newRangeStart + ',' + (newLine-newRangeStart+contextSize)
	                  + ' @@');
	              ret.push.apply(ret, curRange);
	              ret.push.apply(ret, contextLines(lines.slice(0, contextSize)));
	              if (lines.length <= 4) {
	                eofNL(ret, i, current);
	              }

	              oldRangeStart = 0;  newRangeStart = 0; curRange = [];
	            }
	          }
	          oldLine += lines.length;
	          newLine += lines.length;
	        }
	      }

	      return ret.join('\n') + '\n';
	    },

	    applyPatch: function(oldStr, uniDiff) {
	      var diffstr = uniDiff.split('\n');
	      var diff = [];
	      var remEOFNL = false,
	          addEOFNL = false;

	      for (var i = (diffstr[0][0]==='I'?4:0); i < diffstr.length; i++) {
	        if(diffstr[i][0] === '@') {
	          var meh = diffstr[i].split(/@@ -(\d+),(\d+) \+(\d+),(\d+) @@/);
	          diff.unshift({
	            start:meh[3],
	            oldlength:meh[2],
	            oldlines:[],
	            newlength:meh[4],
	            newlines:[]
	          });
	        } else if(diffstr[i][0] === '+') {
	          diff[0].newlines.push(diffstr[i].substr(1));
	        } else if(diffstr[i][0] === '-') {
	          diff[0].oldlines.push(diffstr[i].substr(1));
	        } else if(diffstr[i][0] === ' ') {
	          diff[0].newlines.push(diffstr[i].substr(1));
	          diff[0].oldlines.push(diffstr[i].substr(1));
	        } else if(diffstr[i][0] === '\\') {
	          if (diffstr[i-1][0] === '+') {
	            remEOFNL = true;
	          } else if(diffstr[i-1][0] === '-') {
	            addEOFNL = true;
	          }
	        }
	      }

	      var str = oldStr.split('\n');
	      for (var i = diff.length - 1; i >= 0; i--) {
	        var d = diff[i];
	        for (var j = 0; j < d.oldlength; j++) {
	          if(str[d.start-1+j] !== d.oldlines[j]) {
	            return false;
	          }
	        }
	        Array.prototype.splice.apply(str,[d.start-1,+d.oldlength].concat(d.newlines));
	      }

	      if (remEOFNL) {
	        while (!str[str.length-1]) {
	          str.pop();
	        }
	      } else if (addEOFNL) {
	        str.push('');
	      }
	      return str.join('\n');
	    },

	    convertChangesToXML: function(changes){
	      var ret = [];
	      for ( var i = 0; i < changes.length; i++) {
	        var change = changes[i];
	        if (change.added) {
	          ret.push('<ins>');
	        } else if (change.removed) {
	          ret.push('<del>');
	        }

	        ret.push(escapeHTML(change.value));

	        if (change.added) {
	          ret.push('</ins>');
	        } else if (change.removed) {
	          ret.push('</del>');
	        }
	      }
	      return ret.join('');
	    },

	    // See: http://code.google.com/p/google-diff-match-patch/wiki/API
	    convertChangesToDMP: function(changes){
	      var ret = [], change;
	      for ( var i = 0; i < changes.length; i++) {
	        change = changes[i];
	        ret.push([(change.added ? 1 : change.removed ? -1 : 0), change.value]);
	      }
	      return ret;
	    }
	  };
	})();

	if (typeof module !== 'undefined') {
	    module.exports = JsDiff;
	}

	}); // module: browser/diff.js

	require.register("browser/escape-string-regexp.js", function(module, exports, require){
	'use strict';

	var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

	module.exports = function (str) {
	  if (typeof str !== 'string') {
	    throw new TypeError('Expected a string');
	  }

	  return str.replace(matchOperatorsRe,  '\\$&');
	};

	}); // module: browser/escape-string-regexp.js

	require.register("browser/events.js", function(module, exports, require){
	/**
	 * Module exports.
	 */

	exports.EventEmitter = EventEmitter;

	/**
	 * Check if `obj` is an array.
	 */

	function isArray(obj) {
	  return '[object Array]' == {}.toString.call(obj);
	}

	/**
	 * Event emitter constructor.
	 *
	 * @api public
	 */

	function EventEmitter(){};

	/**
	 * Adds a listener.
	 *
	 * @api public
	 */

	EventEmitter.prototype.on = function (name, fn) {
	  if (!this.$events) {
	    this.$events = {};
	  }

	  if (!this.$events[name]) {
	    this.$events[name] = fn;
	  } else if (isArray(this.$events[name])) {
	    this.$events[name].push(fn);
	  } else {
	    this.$events[name] = [this.$events[name], fn];
	  }

	  return this;
	};

	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	/**
	 * Adds a volatile listener.
	 *
	 * @api public
	 */

	EventEmitter.prototype.once = function (name, fn) {
	  var self = this;

	  function on () {
	    self.removeListener(name, on);
	    fn.apply(this, arguments);
	  };

	  on.listener = fn;
	  this.on(name, on);

	  return this;
	};

	/**
	 * Removes a listener.
	 *
	 * @api public
	 */

	EventEmitter.prototype.removeListener = function (name, fn) {
	  if (this.$events && this.$events[name]) {
	    var list = this.$events[name];

	    if (isArray(list)) {
	      var pos = -1;

	      for (var i = 0, l = list.length; i < l; i++) {
	        if (list[i] === fn || (list[i].listener && list[i].listener === fn)) {
	          pos = i;
	          break;
	        }
	      }

	      if (pos < 0) {
	        return this;
	      }

	      list.splice(pos, 1);

	      if (!list.length) {
	        delete this.$events[name];
	      }
	    } else if (list === fn || (list.listener && list.listener === fn)) {
	      delete this.$events[name];
	    }
	  }

	  return this;
	};

	/**
	 * Removes all listeners for an event.
	 *
	 * @api public
	 */

	EventEmitter.prototype.removeAllListeners = function (name) {
	  if (name === undefined) {
	    this.$events = {};
	    return this;
	  }

	  if (this.$events && this.$events[name]) {
	    this.$events[name] = null;
	  }

	  return this;
	};

	/**
	 * Gets all listeners for a certain event.
	 *
	 * @api public
	 */

	EventEmitter.prototype.listeners = function (name) {
	  if (!this.$events) {
	    this.$events = {};
	  }

	  if (!this.$events[name]) {
	    this.$events[name] = [];
	  }

	  if (!isArray(this.$events[name])) {
	    this.$events[name] = [this.$events[name]];
	  }

	  return this.$events[name];
	};

	/**
	 * Emits an event.
	 *
	 * @api public
	 */

	EventEmitter.prototype.emit = function (name) {
	  if (!this.$events) {
	    return false;
	  }

	  var handler = this.$events[name];

	  if (!handler) {
	    return false;
	  }

	  var args = [].slice.call(arguments, 1);

	  if ('function' == typeof handler) {
	    handler.apply(this, args);
	  } else if (isArray(handler)) {
	    var listeners = handler.slice();

	    for (var i = 0, l = listeners.length; i < l; i++) {
	      listeners[i].apply(this, args);
	    }
	  } else {
	    return false;
	  }

	  return true;
	};

	}); // module: browser/events.js

	require.register("browser/fs.js", function(module, exports, require){

	}); // module: browser/fs.js

	require.register("browser/glob.js", function(module, exports, require){

	}); // module: browser/glob.js

	require.register("browser/path.js", function(module, exports, require){

	}); // module: browser/path.js

	require.register("browser/progress.js", function(module, exports, require){
	/**
	 * Expose `Progress`.
	 */

	module.exports = Progress;

	/**
	 * Initialize a new `Progress` indicator.
	 */

	function Progress() {
	  this.percent = 0;
	  this.size(0);
	  this.fontSize(11);
	  this.font('helvetica, arial, sans-serif');
	}

	/**
	 * Set progress size to `n`.
	 *
	 * @param {Number} n
	 * @return {Progress} for chaining
	 * @api public
	 */

	Progress.prototype.size = function(n){
	  this._size = n;
	  return this;
	};

	/**
	 * Set text to `str`.
	 *
	 * @param {String} str
	 * @return {Progress} for chaining
	 * @api public
	 */

	Progress.prototype.text = function(str){
	  this._text = str;
	  return this;
	};

	/**
	 * Set font size to `n`.
	 *
	 * @param {Number} n
	 * @return {Progress} for chaining
	 * @api public
	 */

	Progress.prototype.fontSize = function(n){
	  this._fontSize = n;
	  return this;
	};

	/**
	 * Set font `family`.
	 *
	 * @param {String} family
	 * @return {Progress} for chaining
	 */

	Progress.prototype.font = function(family){
	  this._font = family;
	  return this;
	};

	/**
	 * Update percentage to `n`.
	 *
	 * @param {Number} n
	 * @return {Progress} for chaining
	 */

	Progress.prototype.update = function(n){
	  this.percent = n;
	  return this;
	};

	/**
	 * Draw on `ctx`.
	 *
	 * @param {CanvasRenderingContext2d} ctx
	 * @return {Progress} for chaining
	 */

	Progress.prototype.draw = function(ctx){
	  try {
	    var percent = Math.min(this.percent, 100)
	      , size = this._size
	      , half = size / 2
	      , x = half
	      , y = half
	      , rad = half - 1
	      , fontSize = this._fontSize;

	    ctx.font = fontSize + 'px ' + this._font;

	    var angle = Math.PI * 2 * (percent / 100);
	    ctx.clearRect(0, 0, size, size);

	    // outer circle
	    ctx.strokeStyle = '#9f9f9f';
	    ctx.beginPath();
	    ctx.arc(x, y, rad, 0, angle, false);
	    ctx.stroke();

	    // inner circle
	    ctx.strokeStyle = '#eee';
	    ctx.beginPath();
	    ctx.arc(x, y, rad - 1, 0, angle, true);
	    ctx.stroke();

	    // text
	    var text = this._text || (percent | 0) + '%'
	      , w = ctx.measureText(text).width;

	    ctx.fillText(
	        text
	      , x - w / 2 + 1
	      , y + fontSize / 2 - 1);
	  } catch (ex) {} //don't fail if we can't render progress
	  return this;
	};

	}); // module: browser/progress.js

	require.register("browser/tty.js", function(module, exports, require){
	exports.isatty = function(){
	  return true;
	};

	exports.getWindowSize = function(){
	  if ('innerHeight' in global) {
	    return [global.innerHeight, global.innerWidth];
	  } else {
	    // In a Web Worker, the DOM Window is not available.
	    return [640, 480];
	  }
	};

	}); // module: browser/tty.js

	require.register("context.js", function(module, exports, require){
	/**
	 * Expose `Context`.
	 */

	module.exports = Context;

	/**
	 * Initialize a new `Context`.
	 *
	 * @api private
	 */

	function Context(){}

	/**
	 * Set or get the context `Runnable` to `runnable`.
	 *
	 * @param {Runnable} runnable
	 * @return {Context}
	 * @api private
	 */

	Context.prototype.runnable = function(runnable){
	  if (0 == arguments.length) return this._runnable;
	  this.test = this._runnable = runnable;
	  return this;
	};

	/**
	 * Set test timeout `ms`.
	 *
	 * @param {Number} ms
	 * @return {Context} self
	 * @api private
	 */

	Context.prototype.timeout = function(ms){
	  if (arguments.length === 0) return this.runnable().timeout();
	  this.runnable().timeout(ms);
	  return this;
	};

	/**
	 * Set test timeout `enabled`.
	 *
	 * @param {Boolean} enabled
	 * @return {Context} self
	 * @api private
	 */

	Context.prototype.enableTimeouts = function (enabled) {
	  this.runnable().enableTimeouts(enabled);
	  return this;
	};


	/**
	 * Set test slowness threshold `ms`.
	 *
	 * @param {Number} ms
	 * @return {Context} self
	 * @api private
	 */

	Context.prototype.slow = function(ms){
	  this.runnable().slow(ms);
	  return this;
	};

	/**
	 * Mark a test as skipped.
	 *
	 * @return {Context} self
	 * @api private
	 */

	Context.prototype.skip = function(){
	    this.runnable().skip();
	    return this;
	};

	/**
	 * Inspect the context void of `._runnable`.
	 *
	 * @return {String}
	 * @api private
	 */

	Context.prototype.inspect = function(){
	  return JSON.stringify(this, function(key, val){
	    if ('_runnable' == key) return;
	    if ('test' == key) return;
	    return val;
	  }, 2);
	};

	}); // module: context.js

	require.register("hook.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Runnable = require('./runnable');

	/**
	 * Expose `Hook`.
	 */

	module.exports = Hook;

	/**
	 * Initialize a new `Hook` with the given `title` and callback `fn`.
	 *
	 * @param {String} title
	 * @param {Function} fn
	 * @api private
	 */

	function Hook(title, fn) {
	  Runnable.call(this, title, fn);
	  this.type = 'hook';
	}

	/**
	 * Inherit from `Runnable.prototype`.
	 */

	function F(){};
	F.prototype = Runnable.prototype;
	Hook.prototype = new F;
	Hook.prototype.constructor = Hook;


	/**
	 * Get or set the test `err`.
	 *
	 * @param {Error} err
	 * @return {Error}
	 * @api public
	 */

	Hook.prototype.error = function(err){
	  if (0 == arguments.length) {
	    var err = this._error;
	    this._error = null;
	    return err;
	  }

	  this._error = err;
	};

	}); // module: hook.js

	require.register("interfaces/bdd.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Suite = require('../suite')
	  , Test = require('../test')
	  , utils = require('../utils')
	  , escapeRe = require('browser/escape-string-regexp');

	/**
	 * BDD-style interface:
	 *
	 *      describe('Array', function(){
	 *        describe('#indexOf()', function(){
	 *          it('should return -1 when not present', function(){
	 *
	 *          });
	 *
	 *          it('should return the index when present', function(){
	 *
	 *          });
	 *        });
	 *      });
	 *
	 */

	module.exports = function(suite){
	  var suites = [suite];

	  suite.on('pre-require', function(context, file, mocha){

	    var common = require('./common')(suites, context);

	    context.before = common.before;
	    context.after = common.after;
	    context.beforeEach = common.beforeEach;
	    context.afterEach = common.afterEach;
	    context.run = mocha.options.delay && common.runWithSuite(suite);
	    /**
	     * Describe a "suite" with the given `title`
	     * and callback `fn` containing nested suites
	     * and/or tests.
	     */

	    context.describe = context.context = function(title, fn){
	      var suite = Suite.create(suites[0], title);
	      suite.file = file;
	      suites.unshift(suite);
	      fn.call(suite);
	      suites.shift();
	      return suite;
	    };

	    /**
	     * Pending describe.
	     */

	    context.xdescribe =
	    context.xcontext =
	    context.describe.skip = function(title, fn){
	      var suite = Suite.create(suites[0], title);
	      suite.pending = true;
	      suites.unshift(suite);
	      fn.call(suite);
	      suites.shift();
	    };

	    /**
	     * Exclusive suite.
	     */

	    context.describe.only = function(title, fn){
	      var suite = context.describe(title, fn);
	      mocha.grep(suite.fullTitle());
	      return suite;
	    };

	    /**
	     * Describe a specification or test-case
	     * with the given `title` and callback `fn`
	     * acting as a thunk.
	     */

	    context.it = context.specify = function(title, fn){
	      var suite = suites[0];
	      if (suite.pending) fn = null;
	      var test = new Test(title, fn);
	      test.file = file;
	      suite.addTest(test);
	      return test;
	    };

	    /**
	     * Exclusive test-case.
	     */

	    context.it.only = function(title, fn){
	      var test = context.it(title, fn);
	      var reString = '^' + escapeRe(test.fullTitle()) + '$';
	      mocha.grep(new RegExp(reString));
	      return test;
	    };

	    /**
	     * Pending test case.
	     */

	    context.xit =
	    context.xspecify =
	    context.it.skip = function(title){
	      context.it(title);
	    };

	  });
	};

	}); // module: interfaces/bdd.js

	require.register("interfaces/common.js", function(module, exports, require){
	/**
	 * Functions common to more than one interface
	 * @module lib/interfaces/common
	 */

	'use strict';

	module.exports = function (suites, context) {

	  return {
	    /**
	     * This is only present if flag --delay is passed into Mocha.  It triggers
	     * root suite execution.  Returns a function which runs the root suite.
	     */
	    runWithSuite: function runWithSuite(suite) {
	      return function run() {
	        suite.run();
	      };
	    },

	    /**
	     * Execute before running tests.
	     */
	    before: function (name, fn) {
	      suites[0].beforeAll(name, fn);
	    },

	    /**
	     * Execute after running tests.
	     */
	    after: function (name, fn) {
	      suites[0].afterAll(name, fn);
	    },

	    /**
	     * Execute before each test case.
	     */
	    beforeEach: function (name, fn) {
	      suites[0].beforeEach(name, fn);
	    },

	    /**
	     * Execute after each test case.
	     */
	    afterEach: function (name, fn) {
	      suites[0].afterEach(name, fn);
	    },

	    test: {
	      /**
	       * Pending test case.
	       */
	      skip: function (title) {
	        context.test(title);
	      }
	    }
	  }
	};

	}); // module: interfaces/common.js

	require.register("interfaces/exports.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Suite = require('../suite')
	  , Test = require('../test');

	/**
	 * TDD-style interface:
	 *
	 *     exports.Array = {
	 *       '#indexOf()': {
	 *         'should return -1 when the value is not present': function(){
	 *
	 *         },
	 *
	 *         'should return the correct index when the value is present': function(){
	 *
	 *         }
	 *       }
	 *     };
	 *
	 */

	module.exports = function(suite){
	  var suites = [suite];

	  suite.on('require', visit);

	  function visit(obj, file) {
	    var suite;
	    for (var key in obj) {
	      if ('function' == typeof obj[key]) {
	        var fn = obj[key];
	        switch (key) {
	          case 'before':
	            suites[0].beforeAll(fn);
	            break;
	          case 'after':
	            suites[0].afterAll(fn);
	            break;
	          case 'beforeEach':
	            suites[0].beforeEach(fn);
	            break;
	          case 'afterEach':
	            suites[0].afterEach(fn);
	            break;
	          default:
	            var test = new Test(key, fn);
	            test.file = file;
	            suites[0].addTest(test);
	        }
	      } else {
	        suite = Suite.create(suites[0], key);
	        suites.unshift(suite);
	        visit(obj[key]);
	        suites.shift();
	      }
	    }
	  }
	};

	}); // module: interfaces/exports.js

	require.register("interfaces/index.js", function(module, exports, require){
	exports.bdd = require('./bdd');
	exports.tdd = require('./tdd');
	exports.qunit = require('./qunit');
	exports.exports = require('./exports');

	}); // module: interfaces/index.js

	require.register("interfaces/qunit.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Suite = require('../suite')
	  , Test = require('../test')
	  , escapeRe = require('browser/escape-string-regexp')
	  , utils = require('../utils');

	/**
	 * QUnit-style interface:
	 *
	 *     suite('Array');
	 *
	 *     test('#length', function(){
	 *       var arr = [1,2,3];
	 *       ok(arr.length == 3);
	 *     });
	 *
	 *     test('#indexOf()', function(){
	 *       var arr = [1,2,3];
	 *       ok(arr.indexOf(1) == 0);
	 *       ok(arr.indexOf(2) == 1);
	 *       ok(arr.indexOf(3) == 2);
	 *     });
	 *
	 *     suite('String');
	 *
	 *     test('#length', function(){
	 *       ok('foo'.length == 3);
	 *     });
	 *
	 */

	module.exports = function(suite){
	  var suites = [suite];

	  suite.on('pre-require', function(context, file, mocha){

	    var common = require('./common')(suites, context);

	    context.before = common.before;
	    context.after = common.after;
	    context.beforeEach = common.beforeEach;
	    context.afterEach = common.afterEach;
	    context.run = mocha.options.delay && common.runWithSuite(suite);
	    /**
	     * Describe a "suite" with the given `title`.
	     */

	    context.suite = function(title){
	      if (suites.length > 1) suites.shift();
	      var suite = Suite.create(suites[0], title);
	      suite.file = file;
	      suites.unshift(suite);
	      return suite;
	    };

	    /**
	     * Exclusive test-case.
	     */

	    context.suite.only = function(title, fn){
	      var suite = context.suite(title, fn);
	      mocha.grep(suite.fullTitle());
	    };

	    /**
	     * Describe a specification or test-case
	     * with the given `title` and callback `fn`
	     * acting as a thunk.
	     */

	    context.test = function(title, fn){
	      var test = new Test(title, fn);
	      test.file = file;
	      suites[0].addTest(test);
	      return test;
	    };

	    /**
	     * Exclusive test-case.
	     */

	    context.test.only = function(title, fn){
	      var test = context.test(title, fn);
	      var reString = '^' + escapeRe(test.fullTitle()) + '$';
	      mocha.grep(new RegExp(reString));
	    };

	    context.test.skip = common.test.skip;

	  });
	};

	}); // module: interfaces/qunit.js

	require.register("interfaces/tdd.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Suite = require('../suite')
	  , Test = require('../test')
	  , escapeRe = require('browser/escape-string-regexp')
	  , utils = require('../utils');

	/**
	 * TDD-style interface:
	 *
	 *      suite('Array', function(){
	 *        suite('#indexOf()', function(){
	 *          suiteSetup(function(){
	 *
	 *          });
	 *
	 *          test('should return -1 when not present', function(){
	 *
	 *          });
	 *
	 *          test('should return the index when present', function(){
	 *
	 *          });
	 *
	 *          suiteTeardown(function(){
	 *
	 *          });
	 *        });
	 *      });
	 *
	 */

	module.exports = function(suite){
	  var suites = [suite];

	  suite.on('pre-require', function(context, file, mocha){

	    var common = require('./common')(suites, context);

	    context.setup = common.beforeEach;
	    context.teardown = common.afterEach;
	    context.suiteSetup = common.before;
	    context.suiteTeardown = common.after;
	    context.run = mocha.options.delay && common.runWithSuite(suite);
	    /**
	     * Describe a "suite" with the given `title`
	     * and callback `fn` containing nested suites
	     * and/or tests.
	     */

	    context.suite = function(title, fn){
	      var suite = Suite.create(suites[0], title);
	      suite.file = file;
	      suites.unshift(suite);
	      fn.call(suite);
	      suites.shift();
	      return suite;
	    };

	    /**
	     * Pending suite.
	     */
	    context.suite.skip = function(title, fn) {
	      var suite = Suite.create(suites[0], title);
	      suite.pending = true;
	      suites.unshift(suite);
	      fn.call(suite);
	      suites.shift();
	    };

	    /**
	     * Exclusive test-case.
	     */

	    context.suite.only = function(title, fn){
	      var suite = context.suite(title, fn);
	      mocha.grep(suite.fullTitle());
	    };

	    /**
	     * Describe a specification or test-case
	     * with the given `title` and callback `fn`
	     * acting as a thunk.
	     */

	    context.test = function(title, fn){
	      var suite = suites[0];
	      if (suite.pending) fn = null;
	      var test = new Test(title, fn);
	      test.file = file;
	      suite.addTest(test);
	      return test;
	    };

	    /**
	     * Exclusive test-case.
	     */

	    context.test.only = function(title, fn){
	      var test = context.test(title, fn);
	      var reString = '^' + escapeRe(test.fullTitle()) + '$';
	      mocha.grep(new RegExp(reString));
	    };

	    context.test.skip = common.test.skip;
	  });
	};

	}); // module: interfaces/tdd.js

	require.register("mocha.js", function(module, exports, require){
	/*!
	 * mocha
	 * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>
	 * MIT Licensed
	 */

	/**
	 * Module dependencies.
	 */

	var path = require('browser/path')
	  , escapeRe = require('browser/escape-string-regexp')
	  , utils = require('./utils');

	/**
	 * Expose `Mocha`.
	 */

	exports = module.exports = Mocha;

	/**
	 * To require local UIs and reporters when running in node.
	 */

	if (typeof process !== 'undefined' && typeof process.cwd === 'function') {
	  var join = path.join
	    , cwd = process.cwd();
	  module.paths.push(cwd, join(cwd, 'node_modules'));
	}

	/**
	 * Expose internals.
	 */

	exports.utils = utils;
	exports.interfaces = require('./interfaces');
	exports.reporters = require('./reporters');
	exports.Runnable = require('./runnable');
	exports.Context = require('./context');
	exports.Runner = require('./runner');
	exports.Suite = require('./suite');
	exports.Hook = require('./hook');
	exports.Test = require('./test');

	/**
	 * Return image `name` path.
	 *
	 * @param {String} name
	 * @return {String}
	 * @api private
	 */

	function image(name) {
	  return __dirname + '/../images/' + name + '.png';
	}

	/**
	 * Setup mocha with `options`.
	 *
	 * Options:
	 *
	 *   - `ui` name "bdd", "tdd", "exports" etc
	 *   - `reporter` reporter instance, defaults to `mocha.reporters.spec`
	 *   - `globals` array of accepted globals
	 *   - `timeout` timeout in milliseconds
	 *   - `bail` bail on the first test failure
	 *   - `slow` milliseconds to wait before considering a test slow
	 *   - `ignoreLeaks` ignore global leaks
	 *   - `fullTrace` display the full stack-trace on failing
	 *   - `grep` string or regexp to filter tests with
	 *
	 * @param {Object} options
	 * @api public
	 */

	function Mocha(options) {
	  options = options || {};
	  this.files = [];
	  this.options = options;
	  if (options.grep) this.grep(new RegExp(options.grep));
	  if (options.fgrep) this.grep(options.fgrep);
	  this.suite = new exports.Suite('', new exports.Context);
	  this.ui(options.ui);
	  this.bail(options.bail);
	  this.reporter(options.reporter, options.reporterOptions);
	  if (null != options.timeout) this.timeout(options.timeout);
	  this.useColors(options.useColors);
	  if (options.enableTimeouts !== null) this.enableTimeouts(options.enableTimeouts);
	  if (options.slow) this.slow(options.slow);

	  this.suite.on('pre-require', function (context) {
	    exports.afterEach = context.afterEach || context.teardown;
	    exports.after = context.after || context.suiteTeardown;
	    exports.beforeEach = context.beforeEach || context.setup;
	    exports.before = context.before || context.suiteSetup;
	    exports.describe = context.describe || context.suite;
	    exports.it = context.it || context.test;
	    exports.setup = context.setup || context.beforeEach;
	    exports.suiteSetup = context.suiteSetup || context.before;
	    exports.suiteTeardown = context.suiteTeardown || context.after;
	    exports.suite = context.suite || context.describe;
	    exports.teardown = context.teardown || context.afterEach;
	    exports.test = context.test || context.it;
	    exports.run = context.run;
	  });
	}

	/**
	 * Enable or disable bailing on the first failure.
	 *
	 * @param {Boolean} [bail]
	 * @api public
	 */

	Mocha.prototype.bail = function(bail){
	  if (0 == arguments.length) bail = true;
	  this.suite.bail(bail);
	  return this;
	};

	/**
	 * Add test `file`.
	 *
	 * @param {String} file
	 * @api public
	 */

	Mocha.prototype.addFile = function(file){
	  this.files.push(file);
	  return this;
	};

	/**
	 * Set reporter to `reporter`, defaults to "spec".
	 *
	 * @param {String|Function} reporter name or constructor
	 * @param {Object} reporterOptions optional options
	 * @api public
	 */
	Mocha.prototype.reporter = function(reporter, reporterOptions){
	  if ('function' == typeof reporter) {
	    this._reporter = reporter;
	  } else {
	    reporter = reporter || 'spec';
	    var _reporter;
	    try { _reporter = require('./reporters/' + reporter); } catch (err) {}
	    if (!_reporter) try { _reporter = require(reporter); } catch (err) {
	      err.message.indexOf('Cannot find module') !== -1
	        ? console.warn('"' + reporter + '" reporter not found')
	        : console.warn('"' + reporter + '" reporter blew up with error:\n' + err.stack);
	    }
	    if (!_reporter && reporter === 'teamcity')
	      console.warn('The Teamcity reporter was moved to a package named ' +
	        'mocha-teamcity-reporter ' +
	        '(https://npmjs.org/package/mocha-teamcity-reporter).');
	    if (!_reporter) throw new Error('invalid reporter "' + reporter + '"');
	    this._reporter = _reporter;
	  }
	  this.options.reporterOptions = reporterOptions;
	  return this;
	};

	/**
	 * Set test UI `name`, defaults to "bdd".
	 *
	 * @param {String} bdd
	 * @api public
	 */

	Mocha.prototype.ui = function(name){
	  name = name || 'bdd';
	  this._ui = exports.interfaces[name];
	  if (!this._ui) try { this._ui = require(name); } catch (err) {}
	  if (!this._ui) throw new Error('invalid interface "' + name + '"');
	  this._ui = this._ui(this.suite);
	  return this;
	};

	/**
	 * Load registered files.
	 *
	 * @api private
	 */

	Mocha.prototype.loadFiles = function(fn){
	  var self = this;
	  var suite = this.suite;
	  var pending = this.files.length;
	  this.files.forEach(function(file){
	    file = path.resolve(file);
	    suite.emit('pre-require', global, file, self);
	    suite.emit('require', require(file), file, self);
	    suite.emit('post-require', global, file, self);
	    --pending || (fn && fn());
	  });
	};

	/**
	 * Enable growl support.
	 *
	 * @api private
	 */

	Mocha.prototype._growl = function(runner, reporter) {
	  var notify = require('growl');

	  runner.on('end', function(){
	    var stats = reporter.stats;
	    if (stats.failures) {
	      var msg = stats.failures + ' of ' + runner.total + ' tests failed';
	      notify(msg, { name: 'mocha', title: 'Failed', image: image('error') });
	    } else {
	      notify(stats.passes + ' tests passed in ' + stats.duration + 'ms', {
	          name: 'mocha'
	        , title: 'Passed'
	        , image: image('ok')
	      });
	    }
	  });
	};

	/**
	 * Add regexp to grep, if `re` is a string it is escaped.
	 *
	 * @param {RegExp|String} re
	 * @return {Mocha}
	 * @api public
	 */

	Mocha.prototype.grep = function(re){
	  this.options.grep = 'string' == typeof re
	    ? new RegExp(escapeRe(re))
	    : re;
	  return this;
	};

	/**
	 * Invert `.grep()` matches.
	 *
	 * @return {Mocha}
	 * @api public
	 */

	Mocha.prototype.invert = function(){
	  this.options.invert = true;
	  return this;
	};

	/**
	 * Ignore global leaks.
	 *
	 * @param {Boolean} ignore
	 * @return {Mocha}
	 * @api public
	 */

	Mocha.prototype.ignoreLeaks = function(ignore){
	  this.options.ignoreLeaks = !!ignore;
	  return this;
	};

	/**
	 * Enable global leak checking.
	 *
	 * @return {Mocha}
	 * @api public
	 */

	Mocha.prototype.checkLeaks = function(){
	  this.options.ignoreLeaks = false;
	  return this;
	};

	/**
	 * Display long stack-trace on failing
	 *
	 * @return {Mocha}
	 * @api public
	 */

	Mocha.prototype.fullTrace = function() {
	  this.options.fullStackTrace = true;
	  return this;
	};

	/**
	 * Enable growl support.
	 *
	 * @return {Mocha}
	 * @api public
	 */

	Mocha.prototype.growl = function(){
	  this.options.growl = true;
	  return this;
	};

	/**
	 * Ignore `globals` array or string.
	 *
	 * @param {Array|String} globals
	 * @return {Mocha}
	 * @api public
	 */

	Mocha.prototype.globals = function(globals){
	  this.options.globals = (this.options.globals || []).concat(globals);
	  return this;
	};

	/**
	 * Emit color output.
	 *
	 * @param {Boolean} colors
	 * @return {Mocha}
	 * @api public
	 */

	Mocha.prototype.useColors = function(colors){
	  if (colors !== undefined) {
	    this.options.useColors = colors;
	  }
	  return this;
	};

	/**
	 * Use inline diffs rather than +/-.
	 *
	 * @param {Boolean} inlineDiffs
	 * @return {Mocha}
	 * @api public
	 */

	Mocha.prototype.useInlineDiffs = function(inlineDiffs) {
	  this.options.useInlineDiffs = arguments.length && inlineDiffs != undefined
	  ? inlineDiffs
	  : false;
	  return this;
	};

	/**
	 * Set the timeout in milliseconds.
	 *
	 * @param {Number} timeout
	 * @return {Mocha}
	 * @api public
	 */

	Mocha.prototype.timeout = function(timeout){
	  this.suite.timeout(timeout);
	  return this;
	};

	/**
	 * Set slowness threshold in milliseconds.
	 *
	 * @param {Number} slow
	 * @return {Mocha}
	 * @api public
	 */

	Mocha.prototype.slow = function(slow){
	  this.suite.slow(slow);
	  return this;
	};

	/**
	 * Enable timeouts.
	 *
	 * @param {Boolean} enabled
	 * @return {Mocha}
	 * @api public
	 */

	Mocha.prototype.enableTimeouts = function(enabled) {
	  this.suite.enableTimeouts(arguments.length && enabled !== undefined
	    ? enabled
	    : true);
	  return this
	};

	/**
	 * Makes all tests async (accepting a callback)
	 *
	 * @return {Mocha}
	 * @api public
	 */

	Mocha.prototype.asyncOnly = function(){
	  this.options.asyncOnly = true;
	  return this;
	};

	/**
	 * Disable syntax highlighting (in browser).
	 * @returns {Mocha}
	 * @api public
	 */
	Mocha.prototype.noHighlighting = function() {
	  this.options.noHighlighting = true;
	  return this;
	};

	/**
	 * Delay root suite execution.
	 * @returns {Mocha}
	 * @api public
	 */
	Mocha.prototype.delay = function delay() {
	  this.options.delay = true;
	  return this;
	};

	/**
	 * Run tests and invoke `fn()` when complete.
	 *
	 * @param {Function} fn
	 * @return {Runner}
	 * @api public
	 */
	Mocha.prototype.run = function(fn){
	  if (this.files.length) this.loadFiles();
	  var suite = this.suite;
	  var options = this.options;
	  options.files = this.files;
	  var runner = new exports.Runner(suite, options.delay);
	  var reporter = new this._reporter(runner, options);
	  runner.ignoreLeaks = false !== options.ignoreLeaks;
	  runner.fullStackTrace = options.fullStackTrace;
	  runner.asyncOnly = options.asyncOnly;
	  if (options.grep) runner.grep(options.grep, options.invert);
	  if (options.globals) runner.globals(options.globals);
	  if (options.growl) this._growl(runner, reporter);
	  if (options.useColors !== undefined) {
	    exports.reporters.Base.useColors = options.useColors;
	  }
	  exports.reporters.Base.inlineDiffs = options.useInlineDiffs;

	  function done(failures) {
	      if (reporter.done) {
	          reporter.done(failures, fn);
	      } else fn && fn(failures);
	  }

	  return runner.run(done);
	};

	}); // module: mocha.js

	require.register("ms.js", function(module, exports, require){
	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options['long'] ? longFormat(val) : shortFormat(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  var match = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 's':
	      return n * s;
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function shortFormat(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function longFormat(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}

	}); // module: ms.js

	require.register("pending.js", function(module, exports, require){

	/**
	 * Expose `Pending`.
	 */

	module.exports = Pending;

	/**
	 * Initialize a new `Pending` error with the given message.
	 *
	 * @param {String} message
	 */

	function Pending(message) {
	    this.message = message;
	}

	}); // module: pending.js

	require.register("reporters/base.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var tty = require('browser/tty')
	  , diff = require('browser/diff')
	  , ms = require('../ms')
	  , utils = require('../utils')
	  , supportsColor = process.env ? require('supports-color') : null;

	/**
	 * Save timer references to avoid Sinon interfering (see GH-237).
	 */

	var Date = global.Date
	  , setTimeout = global.setTimeout
	  , setInterval = global.setInterval
	  , clearTimeout = global.clearTimeout
	  , clearInterval = global.clearInterval;

	/**
	 * Check if both stdio streams are associated with a tty.
	 */

	var isatty = tty.isatty(1) && tty.isatty(2);

	/**
	 * Expose `Base`.
	 */

	exports = module.exports = Base;

	/**
	 * Enable coloring by default, except in the browser interface.
	 */

	exports.useColors = process.env
	  ? (supportsColor || (process.env.MOCHA_COLORS !== undefined))
	  : false;

	/**
	 * Inline diffs instead of +/-
	 */

	exports.inlineDiffs = false;

	/**
	 * Default color map.
	 */

	exports.colors = {
	    'pass': 90
	  , 'fail': 31
	  , 'bright pass': 92
	  , 'bright fail': 91
	  , 'bright yellow': 93
	  , 'pending': 36
	  , 'suite': 0
	  , 'error title': 0
	  , 'error message': 31
	  , 'error stack': 90
	  , 'checkmark': 32
	  , 'fast': 90
	  , 'medium': 33
	  , 'slow': 31
	  , 'green': 32
	  , 'light': 90
	  , 'diff gutter': 90
	  , 'diff added': 42
	  , 'diff removed': 41
	};

	/**
	 * Default symbol map.
	 */

	exports.symbols = {
	  ok: '✓',
	  err: '✖',
	  dot: '․'
	};

	// With node.js on Windows: use symbols available in terminal default fonts
	if ('win32' == process.platform) {
	  exports.symbols.ok = '\u221A';
	  exports.symbols.err = '\u00D7';
	  exports.symbols.dot = '.';
	}

	/**
	 * Color `str` with the given `type`,
	 * allowing colors to be disabled,
	 * as well as user-defined color
	 * schemes.
	 *
	 * @param {String} type
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	var color = exports.color = function(type, str) {
	  if (!exports.useColors) return String(str);
	  return '\u001b[' + exports.colors[type] + 'm' + str + '\u001b[0m';
	};

	/**
	 * Expose term window size, with some
	 * defaults for when stderr is not a tty.
	 */

	exports.window = {
	  width: isatty
	    ? process.stdout.getWindowSize
	      ? process.stdout.getWindowSize(1)[0]
	      : tty.getWindowSize()[1]
	    : 75
	};

	/**
	 * Expose some basic cursor interactions
	 * that are common among reporters.
	 */

	exports.cursor = {
	  hide: function(){
	    isatty && process.stdout.write('\u001b[?25l');
	  },

	  show: function(){
	    isatty && process.stdout.write('\u001b[?25h');
	  },

	  deleteLine: function(){
	    isatty && process.stdout.write('\u001b[2K');
	  },

	  beginningOfLine: function(){
	    isatty && process.stdout.write('\u001b[0G');
	  },

	  CR: function(){
	    if (isatty) {
	      exports.cursor.deleteLine();
	      exports.cursor.beginningOfLine();
	    } else {
	      process.stdout.write('\r');
	    }
	  }
	};

	/**
	 * Outut the given `failures` as a list.
	 *
	 * @param {Array} failures
	 * @api public
	 */

	exports.list = function(failures){
	  console.log();
	  failures.forEach(function(test, i){
	    // format
	    var fmt = color('error title', '  %s) %s:\n')
	      + color('error message', '     %s')
	      + color('error stack', '\n%s\n');

	    // msg
	    var err = test.err
	      , message = err.message || ''
	      , stack = err.stack || message
	      , index = stack.indexOf(message)
	      , actual = err.actual
	      , expected = err.expected
	      , escape = true;
	    if (index === -1) {
	      msg = message;
	    } else {
	      index += message.length;
	      msg = stack.slice(0, index);
	      // remove msg from stack
	      stack = stack.slice(index + 1);
	    }

	    // uncaught
	    if (err.uncaught) {
	      msg = 'Uncaught ' + msg;
	    }
	    // explicitly show diff
	    if (err.showDiff !== false && sameType(actual, expected)
	        && expected !== undefined) {

	      if ('string' !== typeof actual) {
	        escape = false;
	        err.actual = actual = utils.stringify(actual);
	        err.expected = expected = utils.stringify(expected);
	      }

	      fmt = color('error title', '  %s) %s:\n%s') + color('error stack', '\n%s\n');
	      var match = message.match(/^([^:]+): expected/);
	      msg = '\n      ' + color('error message', match ? match[1] : msg);

	      if (exports.inlineDiffs) {
	        msg += inlineDiff(err, escape);
	      } else {
	        msg += unifiedDiff(err, escape);
	      }
	    }

	    // indent stack trace
	    stack = stack.replace(/^/gm, '  ');

	    console.log(fmt, (i + 1), test.fullTitle(), msg, stack);
	  });
	};

	/**
	 * Initialize a new `Base` reporter.
	 *
	 * All other reporters generally
	 * inherit from this reporter, providing
	 * stats such as test duration, number
	 * of tests passed / failed etc.
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function Base(runner) {
	  var self = this
	    , stats = this.stats = { suites: 0, tests: 0, passes: 0, pending: 0, failures: 0 }
	    , failures = this.failures = [];

	  if (!runner) return;
	  this.runner = runner;

	  runner.stats = stats;

	  runner.on('start', function(){
	    stats.start = new Date;
	  });

	  runner.on('suite', function(suite){
	    stats.suites = stats.suites || 0;
	    suite.root || stats.suites++;
	  });

	  runner.on('test end', function(test){
	    stats.tests = stats.tests || 0;
	    stats.tests++;
	  });

	  runner.on('pass', function(test){
	    stats.passes = stats.passes || 0;

	    var medium = test.slow() / 2;
	    test.speed = test.duration > test.slow()
	      ? 'slow'
	      : test.duration > medium
	        ? 'medium'
	        : 'fast';

	    stats.passes++;
	  });

	  runner.on('fail', function(test, err){
	    stats.failures = stats.failures || 0;
	    stats.failures++;
	    test.err = err;
	    failures.push(test);
	  });

	  runner.on('end', function(){
	    stats.end = new Date;
	    stats.duration = new Date - stats.start;
	  });

	  runner.on('pending', function(){
	    stats.pending++;
	  });
	}

	/**
	 * Output common epilogue used by many of
	 * the bundled reporters.
	 *
	 * @api public
	 */

	Base.prototype.epilogue = function(){
	  var stats = this.stats;
	  var tests;
	  var fmt;

	  console.log();

	  // passes
	  fmt = color('bright pass', ' ')
	    + color('green', ' %d passing')
	    + color('light', ' (%s)');

	  console.log(fmt,
	    stats.passes || 0,
	    ms(stats.duration));

	  // pending
	  if (stats.pending) {
	    fmt = color('pending', ' ')
	      + color('pending', ' %d pending');

	    console.log(fmt, stats.pending);
	  }

	  // failures
	  if (stats.failures) {
	    fmt = color('fail', '  %d failing');

	    console.log(fmt, stats.failures);

	    Base.list(this.failures);
	    console.log();
	  }

	  console.log();
	};

	/**
	 * Pad the given `str` to `len`.
	 *
	 * @param {String} str
	 * @param {String} len
	 * @return {String}
	 * @api private
	 */

	function pad(str, len) {
	  str = String(str);
	  return Array(len - str.length + 1).join(' ') + str;
	}


	/**
	 * Returns an inline diff between 2 strings with coloured ANSI output
	 *
	 * @param {Error} Error with actual/expected
	 * @return {String} Diff
	 * @api private
	 */

	function inlineDiff(err, escape) {
	  var msg = errorDiff(err, 'WordsWithSpace', escape);

	  // linenos
	  var lines = msg.split('\n');
	  if (lines.length > 4) {
	    var width = String(lines.length).length;
	    msg = lines.map(function(str, i){
	      return pad(++i, width) + ' |' + ' ' + str;
	    }).join('\n');
	  }

	  // legend
	  msg = '\n'
	    + color('diff removed', 'actual')
	    + ' '
	    + color('diff added', 'expected')
	    + '\n\n'
	    + msg
	    + '\n';

	  // indent
	  msg = msg.replace(/^/gm, '      ');
	  return msg;
	}

	/**
	 * Returns a unified diff between 2 strings
	 *
	 * @param {Error} Error with actual/expected
	 * @return {String} Diff
	 * @api private
	 */

	function unifiedDiff(err, escape) {
	  var indent = '      ';
	  function cleanUp(line) {
	    if (escape) {
	      line = escapeInvisibles(line);
	    }
	    if (line[0] === '+') return indent + colorLines('diff added', line);
	    if (line[0] === '-') return indent + colorLines('diff removed', line);
	    if (line.match(/\@\@/)) return null;
	    if (line.match(/\\ No newline/)) return null;
	    else return indent + line;
	  }
	  function notBlank(line) {
	    return line != null;
	  }
	  var msg = diff.createPatch('string', err.actual, err.expected);
	  var lines = msg.split('\n').splice(4);
	  return '\n      '
	         + colorLines('diff added',   '+ expected') + ' '
	         + colorLines('diff removed', '- actual')
	         + '\n\n'
	         + lines.map(cleanUp).filter(notBlank).join('\n');
	}

	/**
	 * Return a character diff for `err`.
	 *
	 * @param {Error} err
	 * @return {String}
	 * @api private
	 */

	function errorDiff(err, type, escape) {
	  var actual   = escape ? escapeInvisibles(err.actual)   : err.actual;
	  var expected = escape ? escapeInvisibles(err.expected) : err.expected;
	  return diff['diff' + type](actual, expected).map(function(str){
	    if (str.added) return colorLines('diff added', str.value);
	    if (str.removed) return colorLines('diff removed', str.value);
	    return str.value;
	  }).join('');
	}

	/**
	 * Returns a string with all invisible characters in plain text
	 *
	 * @param {String} line
	 * @return {String}
	 * @api private
	 */
	function escapeInvisibles(line) {
	    return line.replace(/\t/g, '<tab>')
	               .replace(/\r/g, '<CR>')
	               .replace(/\n/g, '<LF>\n');
	}

	/**
	 * Color lines for `str`, using the color `name`.
	 *
	 * @param {String} name
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	function colorLines(name, str) {
	  return str.split('\n').map(function(str){
	    return color(name, str);
	  }).join('\n');
	}

	/**
	 * Check that a / b have the same type.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Boolean}
	 * @api private
	 */

	function sameType(a, b) {
	  a = Object.prototype.toString.call(a);
	  b = Object.prototype.toString.call(b);
	  return a == b;
	}

	}); // module: reporters/base.js

	require.register("reporters/doc.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base')
	  , utils = require('../utils');

	/**
	 * Expose `Doc`.
	 */

	exports = module.exports = Doc;

	/**
	 * Initialize a new `Doc` reporter.
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function Doc(runner) {
	  Base.call(this, runner);

	  var self = this
	    , stats = this.stats
	    , total = runner.total
	    , indents = 2;

	  function indent() {
	    return Array(indents).join('  ');
	  }

	  runner.on('suite', function(suite){
	    if (suite.root) return;
	    ++indents;
	    console.log('%s<section class="suite">', indent());
	    ++indents;
	    console.log('%s<h1>%s</h1>', indent(), utils.escape(suite.title));
	    console.log('%s<dl>', indent());
	  });

	  runner.on('suite end', function(suite){
	    if (suite.root) return;
	    console.log('%s</dl>', indent());
	    --indents;
	    console.log('%s</section>', indent());
	    --indents;
	  });

	  runner.on('pass', function(test){
	    console.log('%s  <dt>%s</dt>', indent(), utils.escape(test.title));
	    var code = utils.escape(utils.clean(test.fn.toString()));
	    console.log('%s  <dd><pre><code>%s</code></pre></dd>', indent(), code);
	  });

	  runner.on('fail', function(test, err){
	    console.log('%s  <dt class="error">%s</dt>', indent(), utils.escape(test.title));
	    var code = utils.escape(utils.clean(test.fn.toString()));
	    console.log('%s  <dd class="error"><pre><code>%s</code></pre></dd>', indent(), code);
	    console.log('%s  <dd class="error">%s</dd>', indent(), utils.escape(err));
	  });
	}

	}); // module: reporters/doc.js

	require.register("reporters/dot.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base')
	  , color = Base.color;

	/**
	 * Expose `Dot`.
	 */

	exports = module.exports = Dot;

	/**
	 * Initialize a new `Dot` matrix test reporter.
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function Dot(runner) {
	  Base.call(this, runner);

	  var self = this
	    , stats = this.stats
	    , width = Base.window.width * .75 | 0
	    , n = -1;

	  runner.on('start', function(){
	    process.stdout.write('\n');
	  });

	  runner.on('pending', function(test){
	    if (++n % width == 0) process.stdout.write('\n  ');
	    process.stdout.write(color('pending', Base.symbols.dot));
	  });

	  runner.on('pass', function(test){
	    if (++n % width == 0) process.stdout.write('\n  ');
	    if ('slow' == test.speed) {
	      process.stdout.write(color('bright yellow', Base.symbols.dot));
	    } else {
	      process.stdout.write(color(test.speed, Base.symbols.dot));
	    }
	  });

	  runner.on('fail', function(test, err){
	    if (++n % width == 0) process.stdout.write('\n  ');
	    process.stdout.write(color('fail', Base.symbols.dot));
	  });

	  runner.on('end', function(){
	    console.log();
	    self.epilogue();
	  });
	}

	/**
	 * Inherit from `Base.prototype`.
	 */

	function F(){};
	F.prototype = Base.prototype;
	Dot.prototype = new F;
	Dot.prototype.constructor = Dot;


	}); // module: reporters/dot.js

	require.register("reporters/html-cov.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var JSONCov = require('./json-cov')
	  , fs = require('browser/fs');

	/**
	 * Expose `HTMLCov`.
	 */

	exports = module.exports = HTMLCov;

	/**
	 * Initialize a new `JsCoverage` reporter.
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function HTMLCov(runner) {
	  var jade = require('jade')
	    , file = __dirname + '/templates/coverage.jade'
	    , str = fs.readFileSync(file, 'utf8')
	    , fn = jade.compile(str, { filename: file })
	    , self = this;

	  JSONCov.call(this, runner, false);

	  runner.on('end', function(){
	    process.stdout.write(fn({
	        cov: self.cov
	      , coverageClass: coverageClass
	    }));
	  });
	}

	/**
	 * Return coverage class for `n`.
	 *
	 * @return {String}
	 * @api private
	 */

	function coverageClass(n) {
	  if (n >= 75) return 'high';
	  if (n >= 50) return 'medium';
	  if (n >= 25) return 'low';
	  return 'terrible';
	}

	}); // module: reporters/html-cov.js

	require.register("reporters/html.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base')
	  , utils = require('../utils')
	  , Progress = require('../browser/progress')
	  , escape = utils.escape;

	/**
	 * Save timer references to avoid Sinon interfering (see GH-237).
	 */

	var Date = global.Date
	  , setTimeout = global.setTimeout
	  , setInterval = global.setInterval
	  , clearTimeout = global.clearTimeout
	  , clearInterval = global.clearInterval;

	/**
	 * Expose `HTML`.
	 */

	exports = module.exports = HTML;

	/**
	 * Stats template.
	 */

	var statsTemplate = '<ul id="mocha-stats">'
	  + '<li class="progress"><canvas width="40" height="40"></canvas></li>'
	  + '<li class="passes"><a href="#">passes:</a> <em>0</em></li>'
	  + '<li class="failures"><a href="#">failures:</a> <em>0</em></li>'
	  + '<li class="duration">duration: <em>0</em>s</li>'
	  + '</ul>';

	/**
	 * Initialize a new `HTML` reporter.
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function HTML(runner) {
	  Base.call(this, runner);

	  var self = this
	    , stats = this.stats
	    , total = runner.total
	    , stat = fragment(statsTemplate)
	    , items = stat.getElementsByTagName('li')
	    , passes = items[1].getElementsByTagName('em')[0]
	    , passesLink = items[1].getElementsByTagName('a')[0]
	    , failures = items[2].getElementsByTagName('em')[0]
	    , failuresLink = items[2].getElementsByTagName('a')[0]
	    , duration = items[3].getElementsByTagName('em')[0]
	    , canvas = stat.getElementsByTagName('canvas')[0]
	    , report = fragment('<ul id="mocha-report"></ul>')
	    , stack = [report]
	    , progress
	    , ctx
	    , root = document.getElementById('mocha');

	  if (canvas.getContext) {
	    var ratio = window.devicePixelRatio || 1;
	    canvas.style.width = canvas.width;
	    canvas.style.height = canvas.height;
	    canvas.width *= ratio;
	    canvas.height *= ratio;
	    ctx = canvas.getContext('2d');
	    ctx.scale(ratio, ratio);
	    progress = new Progress;
	  }

	  if (!root) return error('#mocha div missing, add it to your document');

	  // pass toggle
	  on(passesLink, 'click', function(){
	    unhide();
	    var name = /pass/.test(report.className) ? '' : ' pass';
	    report.className = report.className.replace(/fail|pass/g, '') + name;
	    if (report.className.trim()) hideSuitesWithout('test pass');
	  });

	  // failure toggle
	  on(failuresLink, 'click', function(){
	    unhide();
	    var name = /fail/.test(report.className) ? '' : ' fail';
	    report.className = report.className.replace(/fail|pass/g, '') + name;
	    if (report.className.trim()) hideSuitesWithout('test fail');
	  });

	  root.appendChild(stat);
	  root.appendChild(report);

	  if (progress) progress.size(40);

	  runner.on('suite', function(suite){
	    if (suite.root) return;

	    // suite
	    var url = self.suiteURL(suite);
	    var el = fragment('<li class="suite"><h1><a href="%s">%s</a></h1></li>', url, escape(suite.title));

	    // container
	    stack[0].appendChild(el);
	    stack.unshift(document.createElement('ul'));
	    el.appendChild(stack[0]);
	  });

	  runner.on('suite end', function(suite){
	    if (suite.root) return;
	    stack.shift();
	  });

	  runner.on('fail', function(test, err){
	    if ('hook' == test.type) runner.emit('test end', test);
	  });

	  runner.on('test end', function(test){
	    // TODO: add to stats
	    var percent = stats.tests / this.total * 100 | 0;
	    if (progress) progress.update(percent).draw(ctx);

	    // update stats
	    var ms = new Date - stats.start;
	    text(passes, stats.passes);
	    text(failures, stats.failures);
	    text(duration, (ms / 1000).toFixed(2));

	    // test
	    if ('passed' == test.state) {
	      var url = self.testURL(test);
	      var el = fragment('<li class="test pass %e"><h2>%e<span class="duration">%ems</span> <a href="%s" class="replay">‣</a></h2></li>', test.speed, test.title, test.duration, url);
	    } else if (test.pending) {
	      var el = fragment('<li class="test pass pending"><h2>%e</h2></li>', test.title);
	    } else {
	      var el = fragment('<li class="test fail"><h2>%e <a href="%e" class="replay">‣</a></h2></li>', test.title, self.testURL(test));
	      var str = test.err.stack || test.err.toString();

	      // FF / Opera do not add the message
	      if (!~str.indexOf(test.err.message)) {
	        str = test.err.message + '\n' + str;
	      }

	      // <=IE7 stringifies to [Object Error]. Since it can be overloaded, we
	      // check for the result of the stringifying.
	      if ('[object Error]' == str) str = test.err.message;

	      // Safari doesn't give you a stack. Let's at least provide a source line.
	      if (!test.err.stack && test.err.sourceURL && test.err.line !== undefined) {
	        str += "\n(" + test.err.sourceURL + ":" + test.err.line + ")";
	      }

	      el.appendChild(fragment('<pre class="error">%e</pre>', str));
	    }

	    // toggle code
	    // TODO: defer
	    if (!test.pending) {
	      var h2 = el.getElementsByTagName('h2')[0];

	      on(h2, 'click', function(){
	        pre.style.display = 'none' == pre.style.display
	          ? 'block'
	          : 'none';
	      });

	      var pre = fragment('<pre><code>%e</code></pre>', utils.clean(test.fn.toString()));
	      el.appendChild(pre);
	      pre.style.display = 'none';
	    }

	    // Don't call .appendChild if #mocha-report was already .shift()'ed off the stack.
	    if (stack[0]) stack[0].appendChild(el);
	  });
	}

	/**
	 * Makes a URL, preserving querystring ("search") parameters.
	 * @param {string} s
	 * @returns {string} your new URL
	 */
	var makeUrl = function makeUrl(s) {
	  var search = window.location.search;

	  // Remove previous grep query parameter if present
	  if (search) {
	    search = search.replace(/[?&]grep=[^&\s]*/g, '').replace(/^&/, '?');
	  }

	  return window.location.pathname + (search ? search + '&' : '?' ) + 'grep=' + encodeURIComponent(s);
	};

	/**
	 * Provide suite URL
	 *
	 * @param {Object} [suite]
	 */
	HTML.prototype.suiteURL = function(suite){
	  return makeUrl(suite.fullTitle());
	};

	/**
	 * Provide test URL
	 *
	 * @param {Object} [test]
	 */

	HTML.prototype.testURL = function(test){
	  return makeUrl(test.fullTitle());
	};

	/**
	 * Display error `msg`.
	 */

	function error(msg) {
	  document.body.appendChild(fragment('<div id="mocha-error">%s</div>', msg));
	}

	/**
	 * Return a DOM fragment from `html`.
	 */

	function fragment(html) {
	  var args = arguments
	    , div = document.createElement('div')
	    , i = 1;

	  div.innerHTML = html.replace(/%([se])/g, function(_, type){
	    switch (type) {
	      case 's': return String(args[i++]);
	      case 'e': return escape(args[i++]);
	    }
	  });

	  return div.firstChild;
	}

	/**
	 * Check for suites that do not have elements
	 * with `classname`, and hide them.
	 */

	function hideSuitesWithout(classname) {
	  var suites = document.getElementsByClassName('suite');
	  for (var i = 0; i < suites.length; i++) {
	    var els = suites[i].getElementsByClassName(classname);
	    if (0 == els.length) suites[i].className += ' hidden';
	  }
	}

	/**
	 * Unhide .hidden suites.
	 */

	function unhide() {
	  var els = document.getElementsByClassName('suite hidden');
	  for (var i = 0; i < els.length; ++i) {
	    els[i].className = els[i].className.replace('suite hidden', 'suite');
	  }
	}

	/**
	 * Set `el` text to `str`.
	 */

	function text(el, str) {
	  if (el.textContent) {
	    el.textContent = str;
	  } else {
	    el.innerText = str;
	  }
	}

	/**
	 * Listen on `event` with callback `fn`.
	 */

	function on(el, event, fn) {
	  if (el.addEventListener) {
	    el.addEventListener(event, fn, false);
	  } else {
	    el.attachEvent('on' + event, fn);
	  }
	}

	}); // module: reporters/html.js

	require.register("reporters/index.js", function(module, exports, require){
	exports.Base = require('./base');
	exports.Dot = require('./dot');
	exports.Doc = require('./doc');
	exports.TAP = require('./tap');
	exports.JSON = require('./json');
	exports.HTML = require('./html');
	exports.List = require('./list');
	exports.Min = require('./min');
	exports.Spec = require('./spec');
	exports.Nyan = require('./nyan');
	exports.XUnit = require('./xunit');
	exports.Markdown = require('./markdown');
	exports.Progress = require('./progress');
	exports.Landing = require('./landing');
	exports.JSONCov = require('./json-cov');
	exports.HTMLCov = require('./html-cov');
	exports.JSONStream = require('./json-stream');

	}); // module: reporters/index.js

	require.register("reporters/json-cov.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');

	/**
	 * Expose `JSONCov`.
	 */

	exports = module.exports = JSONCov;

	/**
	 * Initialize a new `JsCoverage` reporter.
	 *
	 * @param {Runner} runner
	 * @param {Boolean} output
	 * @api public
	 */

	function JSONCov(runner, output) {
	  var self = this
	    , output = 1 == arguments.length ? true : output;

	  Base.call(this, runner);

	  var tests = []
	    , failures = []
	    , passes = [];

	  runner.on('test end', function(test){
	    tests.push(test);
	  });

	  runner.on('pass', function(test){
	    passes.push(test);
	  });

	  runner.on('fail', function(test){
	    failures.push(test);
	  });

	  runner.on('end', function(){
	    var cov = global._$jscoverage || {};
	    var result = self.cov = map(cov);
	    result.stats = self.stats;
	    result.tests = tests.map(clean);
	    result.failures = failures.map(clean);
	    result.passes = passes.map(clean);
	    if (!output) return;
	    process.stdout.write(JSON.stringify(result, null, 2 ));
	  });
	}

	/**
	 * Map jscoverage data to a JSON structure
	 * suitable for reporting.
	 *
	 * @param {Object} cov
	 * @return {Object}
	 * @api private
	 */

	function map(cov) {
	  var ret = {
	      instrumentation: 'node-jscoverage'
	    , sloc: 0
	    , hits: 0
	    , misses: 0
	    , coverage: 0
	    , files: []
	  };

	  for (var filename in cov) {
	    var data = coverage(filename, cov[filename]);
	    ret.files.push(data);
	    ret.hits += data.hits;
	    ret.misses += data.misses;
	    ret.sloc += data.sloc;
	  }

	  ret.files.sort(function(a, b) {
	    return a.filename.localeCompare(b.filename);
	  });

	  if (ret.sloc > 0) {
	    ret.coverage = (ret.hits / ret.sloc) * 100;
	  }

	  return ret;
	}

	/**
	 * Map jscoverage data for a single source file
	 * to a JSON structure suitable for reporting.
	 *
	 * @param {String} filename name of the source file
	 * @param {Object} data jscoverage coverage data
	 * @return {Object}
	 * @api private
	 */

	function coverage(filename, data) {
	  var ret = {
	    filename: filename,
	    coverage: 0,
	    hits: 0,
	    misses: 0,
	    sloc: 0,
	    source: {}
	  };

	  data.source.forEach(function(line, num){
	    num++;

	    if (data[num] === 0) {
	      ret.misses++;
	      ret.sloc++;
	    } else if (data[num] !== undefined) {
	      ret.hits++;
	      ret.sloc++;
	    }

	    ret.source[num] = {
	        source: line
	      , coverage: data[num] === undefined
	        ? ''
	        : data[num]
	    };
	  });

	  ret.coverage = ret.hits / ret.sloc * 100;

	  return ret;
	}

	/**
	 * Return a plain-object representation of `test`
	 * free of cyclic properties etc.
	 *
	 * @param {Object} test
	 * @return {Object}
	 * @api private
	 */

	function clean(test) {
	  return {
	      title: test.title
	    , fullTitle: test.fullTitle()
	    , duration: test.duration
	  }
	}

	}); // module: reporters/json-cov.js

	require.register("reporters/json-stream.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base')
	  , color = Base.color;

	/**
	 * Expose `List`.
	 */

	exports = module.exports = List;

	/**
	 * Initialize a new `List` test reporter.
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function List(runner) {
	  Base.call(this, runner);

	  var self = this
	    , stats = this.stats
	    , total = runner.total;

	  runner.on('start', function(){
	    console.log(JSON.stringify(['start', { total: total }]));
	  });

	  runner.on('pass', function(test){
	    console.log(JSON.stringify(['pass', clean(test)]));
	  });

	  runner.on('fail', function(test, err){
	    test = clean(test);
	    test.err = err.message;
	    console.log(JSON.stringify(['fail', test]));
	  });

	  runner.on('end', function(){
	    process.stdout.write(JSON.stringify(['end', self.stats]));
	  });
	}

	/**
	 * Return a plain-object representation of `test`
	 * free of cyclic properties etc.
	 *
	 * @param {Object} test
	 * @return {Object}
	 * @api private
	 */

	function clean(test) {
	  return {
	      title: test.title
	    , fullTitle: test.fullTitle()
	    , duration: test.duration
	  }
	}

	}); // module: reporters/json-stream.js

	require.register("reporters/json.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base')
	  , cursor = Base.cursor
	  , color = Base.color;

	/**
	 * Expose `JSON`.
	 */

	exports = module.exports = JSONReporter;

	/**
	 * Initialize a new `JSON` reporter.
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function JSONReporter(runner) {
	  var self = this;
	  Base.call(this, runner);

	  var tests = []
	    , pending = []
	    , failures = []
	    , passes = [];

	  runner.on('test end', function(test){
	    tests.push(test);
	  });

	  runner.on('pass', function(test){
	    passes.push(test);
	  });

	  runner.on('fail', function(test){
	    failures.push(test);
	  });

	  runner.on('pending', function(test){
	    pending.push(test);
	  });

	  runner.on('end', function(){
	    var obj = {
	      stats: self.stats,
	      tests: tests.map(clean),
	      pending: pending.map(clean),
	      failures: failures.map(clean),
	      passes: passes.map(clean)
	    };

	    runner.testResults = obj;

	    process.stdout.write(JSON.stringify(obj, null, 2));
	  });
	}

	/**
	 * Return a plain-object representation of `test`
	 * free of cyclic properties etc.
	 *
	 * @param {Object} test
	 * @return {Object}
	 * @api private
	 */

	function clean(test) {
	  return {
	    title: test.title,
	    fullTitle: test.fullTitle(),
	    duration: test.duration,
	    err: errorJSON(test.err || {})
	  }
	}

	/**
	 * Transform `error` into a JSON object.
	 * @param {Error} err
	 * @return {Object}
	 */

	function errorJSON(err) {
	  var res = {};
	  Object.getOwnPropertyNames(err).forEach(function(key) {
	    res[key] = err[key];
	  }, err);
	  return res;
	}

	}); // module: reporters/json.js

	require.register("reporters/landing.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base')
	  , cursor = Base.cursor
	  , color = Base.color;

	/**
	 * Expose `Landing`.
	 */

	exports = module.exports = Landing;

	/**
	 * Airplane color.
	 */

	Base.colors.plane = 0;

	/**
	 * Airplane crash color.
	 */

	Base.colors['plane crash'] = 31;

	/**
	 * Runway color.
	 */

	Base.colors.runway = 90;

	/**
	 * Initialize a new `Landing` reporter.
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function Landing(runner) {
	  Base.call(this, runner);

	  var self = this
	    , stats = this.stats
	    , width = Base.window.width * .75 | 0
	    , total = runner.total
	    , stream = process.stdout
	    , plane = color('plane', '✈')
	    , crashed = -1
	    , n = 0;

	  function runway() {
	    var buf = Array(width).join('-');
	    return '  ' + color('runway', buf);
	  }

	  runner.on('start', function(){
	    stream.write('\n\n\n  ');
	    cursor.hide();
	  });

	  runner.on('test end', function(test){
	    // check if the plane crashed
	    var col = -1 == crashed
	      ? width * ++n / total | 0
	      : crashed;

	    // show the crash
	    if ('failed' == test.state) {
	      plane = color('plane crash', '✈');
	      crashed = col;
	    }

	    // render landing strip
	    stream.write('\u001b['+(width+1)+'D\u001b[2A');
	    stream.write(runway());
	    stream.write('\n  ');
	    stream.write(color('runway', Array(col).join('⋅')));
	    stream.write(plane)
	    stream.write(color('runway', Array(width - col).join('⋅') + '\n'));
	    stream.write(runway());
	    stream.write('\u001b[0m');
	  });

	  runner.on('end', function(){
	    cursor.show();
	    console.log();
	    self.epilogue();
	  });
	}

	/**
	 * Inherit from `Base.prototype`.
	 */

	function F(){};
	F.prototype = Base.prototype;
	Landing.prototype = new F;
	Landing.prototype.constructor = Landing;


	}); // module: reporters/landing.js

	require.register("reporters/list.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base')
	  , cursor = Base.cursor
	  , color = Base.color;

	/**
	 * Expose `List`.
	 */

	exports = module.exports = List;

	/**
	 * Initialize a new `List` test reporter.
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function List(runner) {
	  Base.call(this, runner);

	  var self = this
	    , stats = this.stats
	    , n = 0;

	  runner.on('start', function(){
	    console.log();
	  });

	  runner.on('test', function(test){
	    process.stdout.write(color('pass', '    ' + test.fullTitle() + ': '));
	  });

	  runner.on('pending', function(test){
	    var fmt = color('checkmark', '  -')
	      + color('pending', ' %s');
	    console.log(fmt, test.fullTitle());
	  });

	  runner.on('pass', function(test){
	    var fmt = color('checkmark', '  '+Base.symbols.dot)
	      + color('pass', ' %s: ')
	      + color(test.speed, '%dms');
	    cursor.CR();
	    console.log(fmt, test.fullTitle(), test.duration);
	  });

	  runner.on('fail', function(test, err){
	    cursor.CR();
	    console.log(color('fail', '  %d) %s'), ++n, test.fullTitle());
	  });

	  runner.on('end', self.epilogue.bind(self));
	}

	/**
	 * Inherit from `Base.prototype`.
	 */

	function F(){};
	F.prototype = Base.prototype;
	List.prototype = new F;
	List.prototype.constructor = List;


	}); // module: reporters/list.js

	require.register("reporters/markdown.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base')
	  , utils = require('../utils');

	/**
	 * Constants
	 */

	var SUITE_PREFIX = '$';

	/**
	 * Expose `Markdown`.
	 */

	exports = module.exports = Markdown;

	/**
	 * Initialize a new `Markdown` reporter.
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function Markdown(runner) {
	  Base.call(this, runner);

	  var self = this
	    , stats = this.stats
	    , level = 0
	    , buf = '';

	  function title(str) {
	    return Array(level).join('#') + ' ' + str;
	  }

	  function indent() {
	    return Array(level).join('  ');
	  }

	  function mapTOC(suite, obj) {
	    var ret = obj,
	        key = SUITE_PREFIX + suite.title;
	    obj = obj[key] = obj[key] || { suite: suite };
	    suite.suites.forEach(function(suite){
	      mapTOC(suite, obj);
	    });
	    return ret;
	  }

	  function stringifyTOC(obj, level) {
	    ++level;
	    var buf = '';
	    var link;
	    for (var key in obj) {
	      if ('suite' == key) continue;
	      if (key !== SUITE_PREFIX) {
	        link = ' - [' + key.substring(1) + ']';
	        link += '(#' + utils.slug(obj[key].suite.fullTitle()) + ')\n';
	        buf += Array(level).join('  ') + link;
	      }
	      buf += stringifyTOC(obj[key], level);
	    }
	    return buf;
	  }

	  function generateTOC(suite) {
	    var obj = mapTOC(suite, {});
	    return stringifyTOC(obj, 0);
	  }

	  generateTOC(runner.suite);

	  runner.on('suite', function(suite){
	    ++level;
	    var slug = utils.slug(suite.fullTitle());
	    buf += '<a name="' + slug + '"></a>' + '\n';
	    buf += title(suite.title) + '\n';
	  });

	  runner.on('suite end', function(suite){
	    --level;
	  });

	  runner.on('pass', function(test){
	    var code = utils.clean(test.fn.toString());
	    buf += test.title + '.\n';
	    buf += '\n```js\n';
	    buf += code + '\n';
	    buf += '```\n\n';
	  });

	  runner.on('end', function(){
	    process.stdout.write('# TOC\n');
	    process.stdout.write(generateTOC(runner.suite));
	    process.stdout.write(buf);
	  });
	}

	}); // module: reporters/markdown.js

	require.register("reporters/min.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');

	/**
	 * Expose `Min`.
	 */

	exports = module.exports = Min;

	/**
	 * Initialize a new `Min` minimal test reporter (best used with --watch).
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function Min(runner) {
	  Base.call(this, runner);

	  runner.on('start', function(){
	    // clear screen
	    process.stdout.write('\u001b[2J');
	    // set cursor position
	    process.stdout.write('\u001b[1;3H');
	  });

	  runner.on('end', this.epilogue.bind(this));
	}

	/**
	 * Inherit from `Base.prototype`.
	 */

	function F(){};
	F.prototype = Base.prototype;
	Min.prototype = new F;
	Min.prototype.constructor = Min;


	}); // module: reporters/min.js

	require.register("reporters/nyan.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base');

	/**
	 * Expose `Dot`.
	 */

	exports = module.exports = NyanCat;

	/**
	 * Initialize a new `Dot` matrix test reporter.
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function NyanCat(runner) {
	  Base.call(this, runner);
	  var self = this
	    , stats = this.stats
	    , width = Base.window.width * .75 | 0
	    , rainbowColors = this.rainbowColors = self.generateColors()
	    , colorIndex = this.colorIndex = 0
	    , numerOfLines = this.numberOfLines = 4
	    , trajectories = this.trajectories = [[], [], [], []]
	    , nyanCatWidth = this.nyanCatWidth = 11
	    , trajectoryWidthMax = this.trajectoryWidthMax = (width - nyanCatWidth)
	    , scoreboardWidth = this.scoreboardWidth = 5
	    , tick = this.tick = 0
	    , n = 0;

	  runner.on('start', function(){
	    Base.cursor.hide();
	    self.draw();
	  });

	  runner.on('pending', function(test){
	    self.draw();
	  });

	  runner.on('pass', function(test){
	    self.draw();
	  });

	  runner.on('fail', function(test, err){
	    self.draw();
	  });

	  runner.on('end', function(){
	    Base.cursor.show();
	    for (var i = 0; i < self.numberOfLines; i++) write('\n');
	    self.epilogue();
	  });
	}

	/**
	 * Draw the nyan cat
	 *
	 * @api private
	 */

	NyanCat.prototype.draw = function(){
	  this.appendRainbow();
	  this.drawScoreboard();
	  this.drawRainbow();
	  this.drawNyanCat();
	  this.tick = !this.tick;
	};

	/**
	 * Draw the "scoreboard" showing the number
	 * of passes, failures and pending tests.
	 *
	 * @api private
	 */

	NyanCat.prototype.drawScoreboard = function(){
	  var stats = this.stats;

	  function draw(type, n) {
	    write(' ');
	    write(Base.color(type, n));
	    write('\n');
	  }

	  draw('green', stats.passes);
	  draw('fail', stats.failures);
	  draw('pending', stats.pending);
	  write('\n');

	  this.cursorUp(this.numberOfLines);
	};

	/**
	 * Append the rainbow.
	 *
	 * @api private
	 */

	NyanCat.prototype.appendRainbow = function(){
	  var segment = this.tick ? '_' : '-';
	  var rainbowified = this.rainbowify(segment);

	  for (var index = 0; index < this.numberOfLines; index++) {
	    var trajectory = this.trajectories[index];
	    if (trajectory.length >= this.trajectoryWidthMax) trajectory.shift();
	    trajectory.push(rainbowified);
	  }
	};

	/**
	 * Draw the rainbow.
	 *
	 * @api private
	 */

	NyanCat.prototype.drawRainbow = function(){
	  var self = this;

	  this.trajectories.forEach(function(line, index) {
	    write('\u001b[' + self.scoreboardWidth + 'C');
	    write(line.join(''));
	    write('\n');
	  });

	  this.cursorUp(this.numberOfLines);
	};

	/**
	 * Draw the nyan cat
	 *
	 * @api private
	 */

	NyanCat.prototype.drawNyanCat = function() {
	  var self = this;
	  var startWidth = this.scoreboardWidth + this.trajectories[0].length;
	  var dist = '\u001b[' + startWidth + 'C';
	  var padding = '';

	  write(dist);
	  write('_,------,');
	  write('\n');

	  write(dist);
	  padding = self.tick ? '  ' : '   ';
	  write('_|' + padding + '/\\_/\\ ');
	  write('\n');

	  write(dist);
	  padding = self.tick ? '_' : '__';
	  var tail = self.tick ? '~' : '^';
	  var face;
	  write(tail + '|' + padding + this.face() + ' ');
	  write('\n');

	  write(dist);
	  padding = self.tick ? ' ' : '  ';
	  write(padding + '""  "" ');
	  write('\n');

	  this.cursorUp(this.numberOfLines);
	};

	/**
	 * Draw nyan cat face.
	 *
	 * @return {String}
	 * @api private
	 */

	NyanCat.prototype.face = function() {
	  var stats = this.stats;
	  if (stats.failures) {
	    return '( x .x)';
	  } else if (stats.pending) {
	    return '( o .o)';
	  } else if(stats.passes) {
	    return '( ^ .^)';
	  } else {
	    return '( - .-)';
	  }
	};

	/**
	 * Move cursor up `n`.
	 *
	 * @param {Number} n
	 * @api private
	 */

	NyanCat.prototype.cursorUp = function(n) {
	  write('\u001b[' + n + 'A');
	};

	/**
	 * Move cursor down `n`.
	 *
	 * @param {Number} n
	 * @api private
	 */

	NyanCat.prototype.cursorDown = function(n) {
	  write('\u001b[' + n + 'B');
	};

	/**
	 * Generate rainbow colors.
	 *
	 * @return {Array}
	 * @api private
	 */

	NyanCat.prototype.generateColors = function(){
	  var colors = [];

	  for (var i = 0; i < (6 * 7); i++) {
	    var pi3 = Math.floor(Math.PI / 3);
	    var n = (i * (1.0 / 6));
	    var r = Math.floor(3 * Math.sin(n) + 3);
	    var g = Math.floor(3 * Math.sin(n + 2 * pi3) + 3);
	    var b = Math.floor(3 * Math.sin(n + 4 * pi3) + 3);
	    colors.push(36 * r + 6 * g + b + 16);
	  }

	  return colors;
	};

	/**
	 * Apply rainbow to the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	NyanCat.prototype.rainbowify = function(str){
	  if (!Base.useColors)
	    return str;
	  var color = this.rainbowColors[this.colorIndex % this.rainbowColors.length];
	  this.colorIndex += 1;
	  return '\u001b[38;5;' + color + 'm' + str + '\u001b[0m';
	};

	/**
	 * Stdout helper.
	 */

	function write(string) {
	  process.stdout.write(string);
	}

	/**
	 * Inherit from `Base.prototype`.
	 */

	function F(){};
	F.prototype = Base.prototype;
	NyanCat.prototype = new F;
	NyanCat.prototype.constructor = NyanCat;


	}); // module: reporters/nyan.js

	require.register("reporters/progress.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base')
	  , cursor = Base.cursor
	  , color = Base.color;

	/**
	 * Expose `Progress`.
	 */

	exports = module.exports = Progress;

	/**
	 * General progress bar color.
	 */

	Base.colors.progress = 90;

	/**
	 * Initialize a new `Progress` bar test reporter.
	 *
	 * @param {Runner} runner
	 * @param {Object} options
	 * @api public
	 */

	function Progress(runner, options) {
	  Base.call(this, runner);

	  var self = this
	    , options = options || {}
	    , stats = this.stats
	    , width = Base.window.width * .50 | 0
	    , total = runner.total
	    , complete = 0
	    , max = Math.max
	    , lastN = -1;

	  // default chars
	  options.open = options.open || '[';
	  options.complete = options.complete || '▬';
	  options.incomplete = options.incomplete || Base.symbols.dot;
	  options.close = options.close || ']';
	  options.verbose = false;

	  // tests started
	  runner.on('start', function(){
	    console.log();
	    cursor.hide();
	  });

	  // tests complete
	  runner.on('test end', function(){
	    complete++;
	    var incomplete = total - complete
	      , percent = complete / total
	      , n = width * percent | 0
	      , i = width - n;

	    if (lastN === n && !options.verbose) {
	      // Don't re-render the line if it hasn't changed
	      return;
	    }
	    lastN = n;

	    cursor.CR();
	    process.stdout.write('\u001b[J');
	    process.stdout.write(color('progress', '  ' + options.open));
	    process.stdout.write(Array(n).join(options.complete));
	    process.stdout.write(Array(i).join(options.incomplete));
	    process.stdout.write(color('progress', options.close));
	    if (options.verbose) {
	      process.stdout.write(color('progress', ' ' + complete + ' of ' + total));
	    }
	  });

	  // tests are complete, output some stats
	  // and the failures if any
	  runner.on('end', function(){
	    cursor.show();
	    console.log();
	    self.epilogue();
	  });
	}

	/**
	 * Inherit from `Base.prototype`.
	 */

	function F(){};
	F.prototype = Base.prototype;
	Progress.prototype = new F;
	Progress.prototype.constructor = Progress;


	}); // module: reporters/progress.js

	require.register("reporters/spec.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base')
	  , cursor = Base.cursor
	  , color = Base.color;

	/**
	 * Expose `Spec`.
	 */

	exports = module.exports = Spec;

	/**
	 * Initialize a new `Spec` test reporter.
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function Spec(runner) {
	  Base.call(this, runner);

	  var self = this
	    , stats = this.stats
	    , indents = 0
	    , n = 0;

	  function indent() {
	    return Array(indents).join('  ')
	  }

	  runner.on('start', function(){
	    console.log();
	  });

	  runner.on('suite', function(suite){
	    ++indents;
	    console.log(color('suite', '%s%s'), indent(), suite.title);
	  });

	  runner.on('suite end', function(suite){
	    --indents;
	    if (1 == indents) console.log();
	  });

	  runner.on('pending', function(test){
	    var fmt = indent() + color('pending', '  - %s');
	    console.log(fmt, test.title);
	  });

	  runner.on('pass', function(test){
	    if ('fast' == test.speed) {
	      var fmt = indent()
	        + color('checkmark', '  ' + Base.symbols.ok)
	        + color('pass', ' %s');
	      cursor.CR();
	      console.log(fmt, test.title);
	    } else {
	      var fmt = indent()
	        + color('checkmark', '  ' + Base.symbols.ok)
	        + color('pass', ' %s')
	        + color(test.speed, ' (%dms)');
	      cursor.CR();
	      console.log(fmt, test.title, test.duration);
	    }
	  });

	  runner.on('fail', function(test, err){
	    cursor.CR();
	    console.log(indent() + color('fail', '  %d) %s'), ++n, test.title);
	  });

	  runner.on('end', self.epilogue.bind(self));
	}

	/**
	 * Inherit from `Base.prototype`.
	 */

	function F(){};
	F.prototype = Base.prototype;
	Spec.prototype = new F;
	Spec.prototype.constructor = Spec;


	}); // module: reporters/spec.js

	require.register("reporters/tap.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base')
	  , cursor = Base.cursor
	  , color = Base.color;

	/**
	 * Expose `TAP`.
	 */

	exports = module.exports = TAP;

	/**
	 * Initialize a new `TAP` reporter.
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function TAP(runner) {
	  Base.call(this, runner);

	  var self = this
	    , stats = this.stats
	    , n = 1
	    , passes = 0
	    , failures = 0;

	  runner.on('start', function(){
	    var total = runner.grepTotal(runner.suite);
	    console.log('%d..%d', 1, total);
	  });

	  runner.on('test end', function(){
	    ++n;
	  });

	  runner.on('pending', function(test){
	    console.log('ok %d %s # SKIP -', n, title(test));
	  });

	  runner.on('pass', function(test){
	    passes++;
	    console.log('ok %d %s', n, title(test));
	  });

	  runner.on('fail', function(test, err){
	    failures++;
	    console.log('not ok %d %s', n, title(test));
	    if (err.stack) console.log(err.stack.replace(/^/gm, '  '));
	  });

	  runner.on('end', function(){
	    console.log('# tests ' + (passes + failures));
	    console.log('# pass ' + passes);
	    console.log('# fail ' + failures);
	  });
	}

	/**
	 * Return a TAP-safe title of `test`
	 *
	 * @param {Object} test
	 * @return {String}
	 * @api private
	 */

	function title(test) {
	  return test.fullTitle().replace(/#/g, '');
	}

	}); // module: reporters/tap.js

	require.register("reporters/xunit.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Base = require('./base')
	  , utils = require('../utils')
	  , fs = require('browser/fs')
	  , escape = utils.escape;

	/**
	 * Save timer references to avoid Sinon interfering (see GH-237).
	 */

	var Date = global.Date
	  , setTimeout = global.setTimeout
	  , setInterval = global.setInterval
	  , clearTimeout = global.clearTimeout
	  , clearInterval = global.clearInterval;

	/**
	 * Expose `XUnit`.
	 */

	exports = module.exports = XUnit;

	/**
	 * Initialize a new `XUnit` reporter.
	 *
	 * @param {Runner} runner
	 * @api public
	 */

	function XUnit(runner, options) {
	  Base.call(this, runner);
	  var stats = this.stats
	    , tests = []
	    , self = this;

	  if (options.reporterOptions && options.reporterOptions.output) {
	      if (! fs.createWriteStream) {
	          throw new Error('file output not supported in browser');
	      }
	      self.fileStream = fs.createWriteStream(options.reporterOptions.output);
	  }

	  runner.on('pending', function(test){
	    tests.push(test);
	  });

	  runner.on('pass', function(test){
	    tests.push(test);
	  });

	  runner.on('fail', function(test){
	    tests.push(test);
	  });

	  runner.on('end', function(){
	    self.write(tag('testsuite', {
	        name: 'Mocha Tests'
	      , tests: stats.tests
	      , failures: stats.failures
	      , errors: stats.failures
	      , skipped: stats.tests - stats.failures - stats.passes
	      , timestamp: (new Date).toUTCString()
	      , time: (stats.duration / 1000) || 0
	    }, false));

	    tests.forEach(function(t) { self.test(t); });
	    self.write('</testsuite>');
	  });
	}

	/**
	 * Override done to close the stream (if it's a file).
	 */
	XUnit.prototype.done = function(failures, fn) {
	    if (this.fileStream) {
	        this.fileStream.end(function() {
	            fn(failures);
	        });
	    } else {
	        fn(failures);
	    }
	};

	/**
	 * Inherit from `Base.prototype`.
	 */

	function F(){};
	F.prototype = Base.prototype;
	XUnit.prototype = new F;
	XUnit.prototype.constructor = XUnit;


	/**
	 * Write out the given line
	 */
	XUnit.prototype.write = function(line) {
	    if (this.fileStream) {
	        this.fileStream.write(line + '\n');
	    } else {
	        console.log(line);
	    }
	};

	/**
	 * Output tag for the given `test.`
	 */

	XUnit.prototype.test = function(test, ostream) {
	  var attrs = {
	      classname: test.parent.fullTitle()
	    , name: test.title
	    , time: (test.duration / 1000) || 0
	  };

	  if ('failed' == test.state) {
	    var err = test.err;
	    this.write(tag('testcase', attrs, false, tag('failure', {}, false, cdata(escape(err.message) + "\n" + err.stack))));
	  } else if (test.pending) {
	    this.write(tag('testcase', attrs, false, tag('skipped', {}, true)));
	  } else {
	    this.write(tag('testcase', attrs, true) );
	  }
	};

	/**
	 * HTML tag helper.
	 */

	function tag(name, attrs, close, content) {
	  var end = close ? '/>' : '>'
	    , pairs = []
	    , tag;

	  for (var key in attrs) {
	    pairs.push(key + '="' + escape(attrs[key]) + '"');
	  }

	  tag = '<' + name + (pairs.length ? ' ' + pairs.join(' ') : '') + end;
	  if (content) tag += content + '</' + name + end;
	  return tag;
	}

	/**
	 * Return cdata escaped CDATA `str`.
	 */

	function cdata(str) {
	  return '<![CDATA[' + escape(str) + ']]>';
	}

	}); // module: reporters/xunit.js

	require.register("runnable.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var EventEmitter = require('browser/events').EventEmitter
	  , debug = require('browser/debug')('mocha:runnable')
	  , Pending = require('./pending')
	  , milliseconds = require('./ms')
	  , utils = require('./utils');

	/**
	 * Save timer references to avoid Sinon interfering (see GH-237).
	 */

	var Date = global.Date
	  , setTimeout = global.setTimeout
	  , setInterval = global.setInterval
	  , clearTimeout = global.clearTimeout
	  , clearInterval = global.clearInterval;

	/**
	 * Object#toString().
	 */

	var toString = Object.prototype.toString;

	/**
	 * Expose `Runnable`.
	 */

	module.exports = Runnable;

	/**
	 * Initialize a new `Runnable` with the given `title` and callback `fn`.
	 *
	 * @param {String} title
	 * @param {Function} fn
	 * @api private
	 */

	function Runnable(title, fn) {
	  this.title = title;
	  this.fn = fn;
	  this.async = fn && fn.length;
	  this.sync = ! this.async;
	  this._timeout = 2000;
	  this._slow = 75;
	  this._enableTimeouts = true;
	  this.timedOut = false;
	  this._trace = new Error('done() called multiple times')
	}

	/**
	 * Inherit from `EventEmitter.prototype`.
	 */

	function F(){};
	F.prototype = EventEmitter.prototype;
	Runnable.prototype = new F;
	Runnable.prototype.constructor = Runnable;


	/**
	 * Set & get timeout `ms`.
	 *
	 * @param {Number|String} ms
	 * @return {Runnable|Number} ms or self
	 * @api private
	 */

	Runnable.prototype.timeout = function(ms){
	  if (0 == arguments.length) return this._timeout;
	  if (ms === 0) this._enableTimeouts = false;
	  if ('string' == typeof ms) ms = milliseconds(ms);
	  debug('timeout %d', ms);
	  this._timeout = ms;
	  if (this.timer) this.resetTimeout();
	  return this;
	};

	/**
	 * Set & get slow `ms`.
	 *
	 * @param {Number|String} ms
	 * @return {Runnable|Number} ms or self
	 * @api private
	 */

	Runnable.prototype.slow = function(ms){
	  if (0 === arguments.length) return this._slow;
	  if ('string' == typeof ms) ms = milliseconds(ms);
	  debug('timeout %d', ms);
	  this._slow = ms;
	  return this;
	};

	/**
	 * Set and & get timeout `enabled`.
	 *
	 * @param {Boolean} enabled
	 * @return {Runnable|Boolean} enabled or self
	 * @api private
	 */

	Runnable.prototype.enableTimeouts = function(enabled){
	  if (arguments.length === 0) return this._enableTimeouts;
	  debug('enableTimeouts %s', enabled);
	  this._enableTimeouts = enabled;
	  return this;
	};

	/**
	 * Halt and mark as pending.
	 *
	 * @api private
	 */

	Runnable.prototype.skip = function(){
	    throw new Pending();
	};

	/**
	 * Return the full title generated by recursively
	 * concatenating the parent's full title.
	 *
	 * @return {String}
	 * @api public
	 */

	Runnable.prototype.fullTitle = function(){
	  return this.parent.fullTitle() + ' ' + this.title;
	};

	/**
	 * Clear the timeout.
	 *
	 * @api private
	 */

	Runnable.prototype.clearTimeout = function(){
	  clearTimeout(this.timer);
	};

	/**
	 * Inspect the runnable void of private properties.
	 *
	 * @return {String}
	 * @api private
	 */

	Runnable.prototype.inspect = function(){
	  return JSON.stringify(this, function(key, val){
	    if ('_' == key[0]) return;
	    if ('parent' == key) return '#<Suite>';
	    if ('ctx' == key) return '#<Context>';
	    return val;
	  }, 2);
	};

	/**
	 * Reset the timeout.
	 *
	 * @api private
	 */

	Runnable.prototype.resetTimeout = function(){
	  var self = this;
	  var ms = this.timeout() || 1e9;

	  if (!this._enableTimeouts) return;
	  this.clearTimeout();
	  this.timer = setTimeout(function(){
	    if (!self._enableTimeouts) return;
	    self.callback(new Error('timeout of ' + ms + 'ms exceeded. Ensure the done() callback is being called in this test.'));
	    self.timedOut = true;
	  }, ms);
	};

	/**
	 * Whitelist these globals for this test run
	 *
	 * @api private
	 */
	Runnable.prototype.globals = function(arr){
	  var self = this;
	  this._allowedGlobals = arr;
	};

	/**
	 * Run the test and invoke `fn(err)`.
	 *
	 * @param {Function} fn
	 * @api private
	 */

	Runnable.prototype.run = function(fn){
	  var self = this
	    , start = new Date
	    , ctx = this.ctx
	    , finished
	    , emitted;

	  // Some times the ctx exists but it is not runnable
	  if (ctx && ctx.runnable) ctx.runnable(this);

	  // called multiple times
	  function multiple(err) {
	    if (emitted) return;
	    emitted = true;
	    self.emit('error', err || new Error('done() called multiple times; stacktrace may be inaccurate'));
	  }

	  // finished
	  function done(err) {
	    var ms = self.timeout();
	    if (self.timedOut) return;
	    if (finished) return multiple(err || self._trace);

	    // Discard the resolution if this test has already failed asynchronously
	    if (self.state) return;

	    self.clearTimeout();
	    self.duration = new Date - start;
	    finished = true;
	    if (!err && self.duration > ms && self._enableTimeouts) err = new Error('timeout of ' + ms + 'ms exceeded. Ensure the done() callback is being called in this test.');
	    fn(err);
	  }

	  // for .resetTimeout()
	  this.callback = done;

	  // explicit async with `done` argument
	  if (this.async) {
	    this.resetTimeout();

	    try {
	      this.fn.call(ctx, function(err){
	        if (err instanceof Error || toString.call(err) === "[object Error]") return done(err);
	        if (null != err) {
	          if (Object.prototype.toString.call(err) === '[object Object]') {
	            return done(new Error('done() invoked with non-Error: ' + JSON.stringify(err)));
	          } else {
	            return done(new Error('done() invoked with non-Error: ' + err));
	          }
	        }
	        done();
	      });
	    } catch (err) {
	      done(utils.getError(err));
	    }
	    return;
	  }

	  if (this.asyncOnly) {
	    return done(new Error('--async-only option in use without declaring `done()`'));
	  }

	  // sync or promise-returning
	  try {
	    if (this.pending) {
	      done();
	    } else {
	      callFn(this.fn);
	    }
	  } catch (err) {
	    done(utils.getError(err));
	  }

	  function callFn(fn) {
	    var result = fn.call(ctx);
	    if (result && typeof result.then === 'function') {
	      self.resetTimeout();
	      result
	        .then(function() {
	          done()
	        },
	        function(reason) {
	          done(reason || new Error('Promise rejected with no or falsy reason'))
	        });
	    } else {
	      done();
	    }
	  }
	};

	}); // module: runnable.js

	require.register("runner.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var EventEmitter = require('browser/events').EventEmitter
	  , debug = require('browser/debug')('mocha:runner')
	  , Pending = require('./pending')
	  , Test = require('./test')
	  , utils = require('./utils')
	  , filter = utils.filter
	  , keys = utils.keys
	  , type = utils.type
	  , stringify = utils.stringify
	  , stackFilter = utils.stackTraceFilter();

	/**
	 * Non-enumerable globals.
	 */

	var globals = [
	  'setTimeout',
	  'clearTimeout',
	  'setInterval',
	  'clearInterval',
	  'XMLHttpRequest',
	  'Date',
	  'setImmediate',
	  'clearImmediate'
	];

	/**
	 * Expose `Runner`.
	 */

	module.exports = Runner;

	/**
	 * Initialize a `Runner` for the given `suite`.
	 *
	 * Events:
	 *
	 *   - `start`  execution started
	 *   - `end`  execution complete
	 *   - `suite`  (suite) test suite execution started
	 *   - `suite end`  (suite) all tests (and sub-suites) have finished
	 *   - `test`  (test) test execution started
	 *   - `test end`  (test) test completed
	 *   - `hook`  (hook) hook execution started
	 *   - `hook end`  (hook) hook complete
	 *   - `pass`  (test) test passed
	 *   - `fail`  (test, err) test failed
	 *   - `pending`  (test) test pending
	 *
	 * @param {Suite} suite Root suite
	 * @param {boolean} [delay] Whether or not to delay execution of root suite
	 *   until ready.
	 * @api public
	 */

	function Runner(suite, delay) {
	  var self = this;
	  this._globals = [];
	  this._abort = false;
	  this._delay = delay;
	  this.suite = suite;
	  this.total = suite.total();
	  this.failures = 0;
	  this.on('test end', function(test){ self.checkGlobals(test); });
	  this.on('hook end', function(hook){ self.checkGlobals(hook); });
	  this.grep(/.*/);
	  this.globals(this.globalProps().concat(extraGlobals()));
	}

	/**
	 * Wrapper for setImmediate, process.nextTick, or browser polyfill.
	 *
	 * @param {Function} fn
	 * @api private
	 */

	Runner.immediately = global.setImmediate || process.nextTick;

	/**
	 * Inherit from `EventEmitter.prototype`.
	 */

	function F(){};
	F.prototype = EventEmitter.prototype;
	Runner.prototype = new F;
	Runner.prototype.constructor = Runner;


	/**
	 * Run tests with full titles matching `re`. Updates runner.total
	 * with number of tests matched.
	 *
	 * @param {RegExp} re
	 * @param {Boolean} invert
	 * @return {Runner} for chaining
	 * @api public
	 */

	Runner.prototype.grep = function(re, invert){
	  debug('grep %s', re);
	  this._grep = re;
	  this._invert = invert;
	  this.total = this.grepTotal(this.suite);
	  return this;
	};

	/**
	 * Returns the number of tests matching the grep search for the
	 * given suite.
	 *
	 * @param {Suite} suite
	 * @return {Number}
	 * @api public
	 */

	Runner.prototype.grepTotal = function(suite) {
	  var self = this;
	  var total = 0;

	  suite.eachTest(function(test){
	    var match = self._grep.test(test.fullTitle());
	    if (self._invert) match = !match;
	    if (match) total++;
	  });

	  return total;
	};

	/**
	 * Return a list of global properties.
	 *
	 * @return {Array}
	 * @api private
	 */

	Runner.prototype.globalProps = function() {
	  var props = utils.keys(global);

	  // non-enumerables
	  for (var i = 0; i < globals.length; ++i) {
	    if (~utils.indexOf(props, globals[i])) continue;
	    props.push(globals[i]);
	  }

	  return props;
	};

	/**
	 * Allow the given `arr` of globals.
	 *
	 * @param {Array} arr
	 * @return {Runner} for chaining
	 * @api public
	 */

	Runner.prototype.globals = function(arr){
	  if (0 == arguments.length) return this._globals;
	  debug('globals %j', arr);
	  this._globals = this._globals.concat(arr);
	  return this;
	};

	/**
	 * Check for global variable leaks.
	 *
	 * @api private
	 */

	Runner.prototype.checkGlobals = function(test){
	  if (this.ignoreLeaks) return;
	  var ok = this._globals;

	  var globals = this.globalProps();
	  var leaks;

	  if (test) {
	    ok = ok.concat(test._allowedGlobals || []);
	  }

	  if(this.prevGlobalsLength == globals.length) return;
	  this.prevGlobalsLength = globals.length;

	  leaks = filterLeaks(ok, globals);
	  this._globals = this._globals.concat(leaks);

	  if (leaks.length > 1) {
	    this.fail(test, new Error('global leaks detected: ' + leaks.join(', ') + ''));
	  } else if (leaks.length) {
	    this.fail(test, new Error('global leak detected: ' + leaks[0]));
	  }
	};

	/**
	 * Fail the given `test`.
	 *
	 * @param {Test} test
	 * @param {Error} err
	 * @api private
	 */

	Runner.prototype.fail = function(test, err) {
	  ++this.failures;
	  test.state = 'failed';

	  if (!(err instanceof Error)) {
	    err = new Error('the ' + type(err) + ' ' + stringify(err) + ' was thrown, throw an Error :)');
	  }

	  err.stack = (this.fullStackTrace || !err.stack)
	    ? err.stack
	    : stackFilter(err.stack);

	  this.emit('fail', test, err);
	};

	/**
	 * Fail the given `hook` with `err`.
	 *
	 * Hook failures work in the following pattern:
	 * - If bail, then exit
	 * - Failed `before` hook skips all tests in a suite and subsuites,
	 *   but jumps to corresponding `after` hook
	 * - Failed `before each` hook skips remaining tests in a
	 *   suite and jumps to corresponding `after each` hook,
	 *   which is run only once
	 * - Failed `after` hook does not alter
	 *   execution order
	 * - Failed `after each` hook skips remaining tests in a
	 *   suite and subsuites, but executes other `after each`
	 *   hooks
	 *
	 * @param {Hook} hook
	 * @param {Error} err
	 * @api private
	 */

	Runner.prototype.failHook = function(hook, err){
	  this.fail(hook, err);
	  if (this.suite.bail()) {
	    this.emit('end');
	  }
	};

	/**
	 * Run hook `name` callbacks and then invoke `fn()`.
	 *
	 * @param {String} name
	 * @param {Function} function
	 * @api private
	 */

	Runner.prototype.hook = function(name, fn){
	  var suite = this.suite
	    , hooks = suite['_' + name]
	    , self = this
	    , timer;

	  function next(i) {
	    var hook = hooks[i];
	    if (!hook) return fn();
	    self.currentRunnable = hook;

	    hook.ctx.currentTest = self.test;

	    self.emit('hook', hook);

	    hook.on('error', function(err){
	      self.failHook(hook, err);
	    });

	    hook.run(function(err){
	      hook.removeAllListeners('error');
	      var testError = hook.error();
	      if (testError) self.fail(self.test, testError);
	      if (err) {
	        if (err instanceof Pending) {
	          suite.pending = true;
	        } else {
	          self.failHook(hook, err);

	          // stop executing hooks, notify callee of hook err
	          return fn(err);
	        }
	      }
	      self.emit('hook end', hook);
	      delete hook.ctx.currentTest;
	      next(++i);
	    });
	  }

	  Runner.immediately(function(){
	    next(0);
	  });
	};

	/**
	 * Run hook `name` for the given array of `suites`
	 * in order, and callback `fn(err, errSuite)`.
	 *
	 * @param {String} name
	 * @param {Array} suites
	 * @param {Function} fn
	 * @api private
	 */

	Runner.prototype.hooks = function(name, suites, fn){
	  var self = this
	    , orig = this.suite;

	  function next(suite) {
	    self.suite = suite;

	    if (!suite) {
	      self.suite = orig;
	      return fn();
	    }

	    self.hook(name, function(err){
	      if (err) {
	        var errSuite = self.suite;
	        self.suite = orig;
	        return fn(err, errSuite);
	      }

	      next(suites.pop());
	    });
	  }

	  next(suites.pop());
	};

	/**
	 * Run hooks from the top level down.
	 *
	 * @param {String} name
	 * @param {Function} fn
	 * @api private
	 */

	Runner.prototype.hookUp = function(name, fn){
	  var suites = [this.suite].concat(this.parents()).reverse();
	  this.hooks(name, suites, fn);
	};

	/**
	 * Run hooks from the bottom up.
	 *
	 * @param {String} name
	 * @param {Function} fn
	 * @api private
	 */

	Runner.prototype.hookDown = function(name, fn){
	  var suites = [this.suite].concat(this.parents());
	  this.hooks(name, suites, fn);
	};

	/**
	 * Return an array of parent Suites from
	 * closest to furthest.
	 *
	 * @return {Array}
	 * @api private
	 */

	Runner.prototype.parents = function(){
	  var suite = this.suite
	    , suites = [];
	  while (suite = suite.parent) suites.push(suite);
	  return suites;
	};

	/**
	 * Run the current test and callback `fn(err)`.
	 *
	 * @param {Function} fn
	 * @api private
	 */

	Runner.prototype.runTest = function(fn){
	  var test = this.test
	    , self = this;

	  if (this.asyncOnly) test.asyncOnly = true;

	  try {
	    test.on('error', function(err){
	      self.fail(test, err);
	    });
	    test.run(fn);
	  } catch (err) {
	    fn(err);
	  }
	};

	/**
	 * Run tests in the given `suite` and invoke
	 * the callback `fn()` when complete.
	 *
	 * @param {Suite} suite
	 * @param {Function} fn
	 * @api private
	 */

	Runner.prototype.runTests = function(suite, fn){
	  var self = this
	    , tests = suite.tests.slice()
	    , test;


	  function hookErr(err, errSuite, after) {
	    // before/after Each hook for errSuite failed:
	    var orig = self.suite;

	    // for failed 'after each' hook start from errSuite parent,
	    // otherwise start from errSuite itself
	    self.suite = after ? errSuite.parent : errSuite;

	    if (self.suite) {
	      // call hookUp afterEach
	      self.hookUp('afterEach', function(err2, errSuite2) {
	        self.suite = orig;
	        // some hooks may fail even now
	        if (err2) return hookErr(err2, errSuite2, true);
	        // report error suite
	        fn(errSuite);
	      });
	    } else {
	      // there is no need calling other 'after each' hooks
	      self.suite = orig;
	      fn(errSuite);
	    }
	  }

	  function next(err, errSuite) {
	    // if we bail after first err
	    if (self.failures && suite._bail) return fn();

	    if (self._abort) return fn();

	    if (err) return hookErr(err, errSuite, true);

	    // next test
	    test = tests.shift();

	    // all done
	    if (!test) return fn();

	    // grep
	    var match = self._grep.test(test.fullTitle());
	    if (self._invert) match = !match;
	    if (!match) return next();

	    // pending
	    if (test.pending) {
	      self.emit('pending', test);
	      self.emit('test end', test);
	      return next();
	    }

	    // execute test and hook(s)
	    self.emit('test', self.test = test);
	    self.hookDown('beforeEach', function(err, errSuite){

	      if (suite.pending) {
	        self.emit('pending', test);
	        self.emit('test end', test);
	        return next();
	      }
	      if (err) return hookErr(err, errSuite, false);

	      self.currentRunnable = self.test;
	      self.runTest(function(err){
	        test = self.test;

	        if (err) {
	          if (err instanceof Pending) {
	            self.emit('pending', test);
	          } else {
	            self.fail(test, err);
	          }
	          self.emit('test end', test);

	          if (err instanceof Pending) {
	            return next();
	          }

	          return self.hookUp('afterEach', next);
	        }

	        test.state = 'passed';
	        self.emit('pass', test);
	        self.emit('test end', test);
	        self.hookUp('afterEach', next);
	      });
	    });
	  }

	  this.next = next;
	  next();
	};

	/**
	 * Run the given `suite` and invoke the
	 * callback `fn()` when complete.
	 *
	 * @param {Suite} suite
	 * @param {Function} fn
	 * @api private
	 */

	Runner.prototype.runSuite = function(suite, fn){
	  var total = this.grepTotal(suite)
	    , self = this
	    , i = 0;

	  debug('run suite %s', suite.fullTitle());

	  if (!total) return fn();

	  this.emit('suite', this.suite = suite);

	  function next(errSuite) {
	    if (errSuite) {
	      // current suite failed on a hook from errSuite
	      if (errSuite == suite) {
	        // if errSuite is current suite
	        // continue to the next sibling suite
	        return done();
	      } else {
	        // errSuite is among the parents of current suite
	        // stop execution of errSuite and all sub-suites
	        return done(errSuite);
	      }
	    }

	    if (self._abort) return done();

	    var curr = suite.suites[i++];
	    if (!curr) return done();
	    self.runSuite(curr, next);
	  }

	  function done(errSuite) {
	    self.suite = suite;
	    self.hook('afterAll', function(){
	      self.emit('suite end', suite);
	      fn(errSuite);
	    });
	  }

	  this.hook('beforeAll', function(err){
	    if (err) return done();
	    self.runTests(suite, next);
	  });
	};

	/**
	 * Handle uncaught exceptions.
	 *
	 * @param {Error} err
	 * @api private
	 */

	Runner.prototype.uncaught = function(err){
	  if (err) {
	    debug('uncaught exception %s', err !== function () {
	      return this;
	    }.call(err) ? err : ( err.message || err ));
	  } else {
	    debug('uncaught undefined exception');
	    err = utils.undefinedError();
	  }
	  err.uncaught = true;

	  var runnable = this.currentRunnable;
	  if (!runnable) return;

	  runnable.clearTimeout();

	  // Ignore errors if complete
	  if (runnable.state) return;
	  this.fail(runnable, err);

	  // recover from test
	  if ('test' == runnable.type) {
	    this.emit('test end', runnable);
	    this.hookUp('afterEach', this.next);
	    return;
	  }

	  // bail on hooks
	  this.emit('end');
	};

	/**
	 * Run the root suite and invoke `fn(failures)`
	 * on completion.
	 *
	 * @param {Function} fn
	 * @return {Runner} for chaining
	 * @api public
	 */

	Runner.prototype.run = function(fn){
	  var self = this,
	    rootSuite = this.suite;

	  fn = fn || function(){};

	  function uncaught(err){
	    self.uncaught(err);
	  }

	  function start() {
	    self.emit('start');
	    self.runSuite(rootSuite, function(){
	      debug('finished running');
	      self.emit('end');
	    });
	  }

	  debug('start');

	  // callback
	  this.on('end', function(){
	    debug('end');
	    process.removeListener('uncaughtException', uncaught);
	    fn(self.failures);
	  });

	  // uncaught exception
	  process.on('uncaughtException', uncaught);

	  if (this._delay) {
	    // for reporters, I guess.
	    // might be nice to debounce some dots while we wait.
	    this.emit('waiting', rootSuite);
	    rootSuite.once('run', start);
	  }
	  else {
	    start();
	  }

	  return this;
	};

	/**
	 * Cleanly abort execution
	 *
	 * @return {Runner} for chaining
	 * @api public
	 */
	Runner.prototype.abort = function(){
	  debug('aborting');
	  this._abort = true;
	};

	/**
	 * Filter leaks with the given globals flagged as `ok`.
	 *
	 * @param {Array} ok
	 * @param {Array} globals
	 * @return {Array}
	 * @api private
	 */

	function filterLeaks(ok, globals) {
	  return filter(globals, function(key){
	    // Firefox and Chrome exposes iframes as index inside the window object
	    if (/^d+/.test(key)) return false;

	    // in firefox
	    // if runner runs in an iframe, this iframe's window.getInterface method not init at first
	    // it is assigned in some seconds
	    if (global.navigator && /^getInterface/.test(key)) return false;

	    // an iframe could be approached by window[iframeIndex]
	    // in ie6,7,8 and opera, iframeIndex is enumerable, this could cause leak
	    if (global.navigator && /^\d+/.test(key)) return false;

	    // Opera and IE expose global variables for HTML element IDs (issue #243)
	    if (/^mocha-/.test(key)) return false;

	    var matched = filter(ok, function(ok){
	      if (~ok.indexOf('*')) return 0 == key.indexOf(ok.split('*')[0]);
	      return key == ok;
	    });
	    return matched.length == 0 && (!global.navigator || 'onerror' !== key);
	  });
	}

	/**
	 * Array of globals dependent on the environment.
	 *
	 * @return {Array}
	 * @api private
	 */

	function extraGlobals() {
	 if (typeof(process) === 'object' &&
	     typeof(process.version) === 'string') {

	   var nodeVersion = process.version.split('.').reduce(function(a, v) {
	     return a << 8 | v;
	   });

	   // 'errno' was renamed to process._errno in v0.9.11.

	   if (nodeVersion < 0x00090B) {
	     return ['errno'];
	   }
	 }

	 return [];
	}

	}); // module: runner.js

	require.register("suite.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var EventEmitter = require('browser/events').EventEmitter
	  , debug = require('browser/debug')('mocha:suite')
	  , milliseconds = require('./ms')
	  , utils = require('./utils')
	  , Hook = require('./hook');

	/**
	 * Expose `Suite`.
	 */

	exports = module.exports = Suite;

	/**
	 * Create a new `Suite` with the given `title`
	 * and parent `Suite`. When a suite with the
	 * same title is already present, that suite
	 * is returned to provide nicer reporter
	 * and more flexible meta-testing.
	 *
	 * @param {Suite} parent
	 * @param {String} title
	 * @return {Suite}
	 * @api public
	 */

	exports.create = function(parent, title){
	  var suite = new Suite(title, parent.ctx);
	  suite.parent = parent;
	  if (parent.pending) suite.pending = true;
	  title = suite.fullTitle();
	  parent.addSuite(suite);
	  return suite;
	};

	/**
	 * Initialize a new `Suite` with the given
	 * `title` and `ctx`.
	 *
	 * @param {String} title
	 * @param {Context} ctx
	 * @api private
	 */

	function Suite(title, parentContext) {
	  this.title = title;
	  var context = function() {};
	  context.prototype = parentContext;
	  this.ctx = new context();
	  this.suites = [];
	  this.tests = [];
	  this.pending = false;
	  this._beforeEach = [];
	  this._beforeAll = [];
	  this._afterEach = [];
	  this._afterAll = [];
	  this.root = !title;
	  this._timeout = 2000;
	  this._enableTimeouts = true;
	  this._slow = 75;
	  this._bail = false;
	  this.delayed = false;
	}

	/**
	 * Inherit from `EventEmitter.prototype`.
	 */

	function F(){};
	F.prototype = EventEmitter.prototype;
	Suite.prototype = new F;
	Suite.prototype.constructor = Suite;


	/**
	 * Return a clone of this `Suite`.
	 *
	 * @return {Suite}
	 * @api private
	 */

	Suite.prototype.clone = function(){
	  var suite = new Suite(this.title);
	  debug('clone');
	  suite.ctx = this.ctx;
	  suite.timeout(this.timeout());
	  suite.enableTimeouts(this.enableTimeouts());
	  suite.slow(this.slow());
	  suite.bail(this.bail());
	  return suite;
	};

	/**
	 * Set timeout `ms` or short-hand such as "2s".
	 *
	 * @param {Number|String} ms
	 * @return {Suite|Number} for chaining
	 * @api private
	 */

	Suite.prototype.timeout = function(ms){
	  if (0 == arguments.length) return this._timeout;
	  if (ms.toString() === '0') this._enableTimeouts = false;
	  if ('string' == typeof ms) ms = milliseconds(ms);
	  debug('timeout %d', ms);
	  this._timeout = parseInt(ms, 10);
	  return this;
	};

	/**
	  * Set timeout `enabled`.
	  *
	  * @param {Boolean} enabled
	  * @return {Suite|Boolean} self or enabled
	  * @api private
	  */

	Suite.prototype.enableTimeouts = function(enabled){
	  if (arguments.length === 0) return this._enableTimeouts;
	  debug('enableTimeouts %s', enabled);
	  this._enableTimeouts = enabled;
	  return this;
	};

	/**
	 * Set slow `ms` or short-hand such as "2s".
	 *
	 * @param {Number|String} ms
	 * @return {Suite|Number} for chaining
	 * @api private
	 */

	Suite.prototype.slow = function(ms){
	  if (0 === arguments.length) return this._slow;
	  if ('string' == typeof ms) ms = milliseconds(ms);
	  debug('slow %d', ms);
	  this._slow = ms;
	  return this;
	};

	/**
	 * Sets whether to bail after first error.
	 *
	 * @param {Boolean} bail
	 * @return {Suite|Number} for chaining
	 * @api private
	 */

	Suite.prototype.bail = function(bail){
	  if (0 == arguments.length) return this._bail;
	  debug('bail %s', bail);
	  this._bail = bail;
	  return this;
	};

	/**
	 * Run `fn(test[, done])` before running tests.
	 *
	 * @param {Function} fn
	 * @return {Suite} for chaining
	 * @api private
	 */

	Suite.prototype.beforeAll = function(title, fn){
	  if (this.pending) return this;
	  if ('function' === typeof title) {
	    fn = title;
	    title = fn.name;
	  }
	  title = '"before all" hook' + (title ? ': ' + title : '');

	  var hook = new Hook(title, fn);
	  hook.parent = this;
	  hook.timeout(this.timeout());
	  hook.enableTimeouts(this.enableTimeouts());
	  hook.slow(this.slow());
	  hook.ctx = this.ctx;
	  this._beforeAll.push(hook);
	  this.emit('beforeAll', hook);
	  return this;
	};

	/**
	 * Run `fn(test[, done])` after running tests.
	 *
	 * @param {Function} fn
	 * @return {Suite} for chaining
	 * @api private
	 */

	Suite.prototype.afterAll = function(title, fn){
	  if (this.pending) return this;
	  if ('function' === typeof title) {
	    fn = title;
	    title = fn.name;
	  }
	  title = '"after all" hook' + (title ? ': ' + title : '');

	  var hook = new Hook(title, fn);
	  hook.parent = this;
	  hook.timeout(this.timeout());
	  hook.enableTimeouts(this.enableTimeouts());
	  hook.slow(this.slow());
	  hook.ctx = this.ctx;
	  this._afterAll.push(hook);
	  this.emit('afterAll', hook);
	  return this;
	};

	/**
	 * Run `fn(test[, done])` before each test case.
	 *
	 * @param {Function} fn
	 * @return {Suite} for chaining
	 * @api private
	 */

	Suite.prototype.beforeEach = function(title, fn){
	  if (this.pending) return this;
	  if ('function' === typeof title) {
	    fn = title;
	    title = fn.name;
	  }
	  title = '"before each" hook' + (title ? ': ' + title : '');

	  var hook = new Hook(title, fn);
	  hook.parent = this;
	  hook.timeout(this.timeout());
	  hook.enableTimeouts(this.enableTimeouts());
	  hook.slow(this.slow());
	  hook.ctx = this.ctx;
	  this._beforeEach.push(hook);
	  this.emit('beforeEach', hook);
	  return this;
	};

	/**
	 * Run `fn(test[, done])` after each test case.
	 *
	 * @param {Function} fn
	 * @return {Suite} for chaining
	 * @api private
	 */

	Suite.prototype.afterEach = function(title, fn){
	  if (this.pending) return this;
	  if ('function' === typeof title) {
	    fn = title;
	    title = fn.name;
	  }
	  title = '"after each" hook' + (title ? ': ' + title : '');

	  var hook = new Hook(title, fn);
	  hook.parent = this;
	  hook.timeout(this.timeout());
	  hook.enableTimeouts(this.enableTimeouts());
	  hook.slow(this.slow());
	  hook.ctx = this.ctx;
	  this._afterEach.push(hook);
	  this.emit('afterEach', hook);
	  return this;
	};

	/**
	 * Add a test `suite`.
	 *
	 * @param {Suite} suite
	 * @return {Suite} for chaining
	 * @api private
	 */

	Suite.prototype.addSuite = function(suite){
	  suite.parent = this;
	  suite.timeout(this.timeout());
	  suite.enableTimeouts(this.enableTimeouts());
	  suite.slow(this.slow());
	  suite.bail(this.bail());
	  this.suites.push(suite);
	  this.emit('suite', suite);
	  return this;
	};

	/**
	 * Add a `test` to this suite.
	 *
	 * @param {Test} test
	 * @return {Suite} for chaining
	 * @api private
	 */

	Suite.prototype.addTest = function(test){
	  test.parent = this;
	  test.timeout(this.timeout());
	  test.enableTimeouts(this.enableTimeouts());
	  test.slow(this.slow());
	  test.ctx = this.ctx;
	  this.tests.push(test);
	  this.emit('test', test);
	  return this;
	};

	/**
	 * Return the full title generated by recursively
	 * concatenating the parent's full title.
	 *
	 * @return {String}
	 * @api public
	 */

	Suite.prototype.fullTitle = function(){
	  if (this.parent) {
	    var full = this.parent.fullTitle();
	    if (full) return full + ' ' + this.title;
	  }
	  return this.title;
	};

	/**
	 * Return the total number of tests.
	 *
	 * @return {Number}
	 * @api public
	 */

	Suite.prototype.total = function(){
	  return utils.reduce(this.suites, function(sum, suite){
	    return sum + suite.total();
	  }, 0) + this.tests.length;
	};

	/**
	 * Iterates through each suite recursively to find
	 * all tests. Applies a function in the format
	 * `fn(test)`.
	 *
	 * @param {Function} fn
	 * @return {Suite}
	 * @api private
	 */

	Suite.prototype.eachTest = function(fn){
	  utils.forEach(this.tests, fn);
	  utils.forEach(this.suites, function(suite){
	    suite.eachTest(fn);
	  });
	  return this;
	};

	/**
	 * This will run the root suite if we happen to be running in delayed mode.
	 */
	Suite.prototype.run = function run() {
	  if (this.root) {
	    this.emit('run');
	  }
	};

	}); // module: suite.js

	require.register("test.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var Runnable = require('./runnable');

	/**
	 * Expose `Test`.
	 */

	module.exports = Test;

	/**
	 * Initialize a new `Test` with the given `title` and callback `fn`.
	 *
	 * @param {String} title
	 * @param {Function} fn
	 * @api private
	 */

	function Test(title, fn) {
	  Runnable.call(this, title, fn);
	  this.pending = !fn;
	  this.type = 'test';
	}

	/**
	 * Inherit from `Runnable.prototype`.
	 */

	function F(){};
	F.prototype = Runnable.prototype;
	Test.prototype = new F;
	Test.prototype.constructor = Test;


	}); // module: test.js

	require.register("utils.js", function(module, exports, require){
	/**
	 * Module dependencies.
	 */

	var fs = require('browser/fs')
	  , path = require('browser/path')
	  , basename = path.basename
	  , exists = fs.existsSync || path.existsSync
	  , glob = require('browser/glob')
	  , join = path.join
	  , debug = require('browser/debug')('mocha:watch');

	/**
	 * Ignored directories.
	 */

	var ignore = ['node_modules', '.git'];

	/**
	 * Escape special characters in the given string of html.
	 *
	 * @param  {String} html
	 * @return {String}
	 * @api private
	 */

	exports.escape = function(html){
	  return String(html)
	    .replace(/&/g, '&amp;')
	    .replace(/"/g, '&quot;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;');
	};

	/**
	 * Array#forEach (<=IE8)
	 *
	 * @param {Array} array
	 * @param {Function} fn
	 * @param {Object} scope
	 * @api private
	 */

	exports.forEach = function(arr, fn, scope){
	  for (var i = 0, l = arr.length; i < l; i++)
	    fn.call(scope, arr[i], i);
	};

	/**
	 * Array#map (<=IE8)
	 *
	 * @param {Array} array
	 * @param {Function} fn
	 * @param {Object} scope
	 * @api private
	 */

	exports.map = function(arr, fn, scope){
	  var result = [];
	  for (var i = 0, l = arr.length; i < l; i++)
	    result.push(fn.call(scope, arr[i], i, arr));
	  return result;
	};

	/**
	 * Array#indexOf (<=IE8)
	 *
	 * @parma {Array} arr
	 * @param {Object} obj to find index of
	 * @param {Number} start
	 * @api private
	 */

	exports.indexOf = function(arr, obj, start){
	  for (var i = start || 0, l = arr.length; i < l; i++) {
	    if (arr[i] === obj)
	      return i;
	  }
	  return -1;
	};

	/**
	 * Array#reduce (<=IE8)
	 *
	 * @param {Array} array
	 * @param {Function} fn
	 * @param {Object} initial value
	 * @api private
	 */

	exports.reduce = function(arr, fn, val){
	  var rval = val;

	  for (var i = 0, l = arr.length; i < l; i++) {
	    rval = fn(rval, arr[i], i, arr);
	  }

	  return rval;
	};

	/**
	 * Array#filter (<=IE8)
	 *
	 * @param {Array} array
	 * @param {Function} fn
	 * @api private
	 */

	exports.filter = function(arr, fn){
	  var ret = [];

	  for (var i = 0, l = arr.length; i < l; i++) {
	    var val = arr[i];
	    if (fn(val, i, arr)) ret.push(val);
	  }

	  return ret;
	};

	/**
	 * Object.keys (<=IE8)
	 *
	 * @param {Object} obj
	 * @return {Array} keys
	 * @api private
	 */

	exports.keys = Object.keys || function(obj) {
	  var keys = []
	    , has = Object.prototype.hasOwnProperty; // for `window` on <=IE8

	  for (var key in obj) {
	    if (has.call(obj, key)) {
	      keys.push(key);
	    }
	  }

	  return keys;
	};

	/**
	 * Watch the given `files` for changes
	 * and invoke `fn(file)` on modification.
	 *
	 * @param {Array} files
	 * @param {Function} fn
	 * @api private
	 */

	exports.watch = function(files, fn){
	  var options = { interval: 100 };
	  files.forEach(function(file){
	    debug('file %s', file);
	    fs.watchFile(file, options, function(curr, prev){
	      if (prev.mtime < curr.mtime) fn(file);
	    });
	  });
	};

	/**
	 * Array.isArray (<=IE8)
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	var isArray = Array.isArray || function (obj) {
	  return '[object Array]' == {}.toString.call(obj);
	};

	/**
	 * @description
	 * Buffer.prototype.toJSON polyfill
	 * @type {Function}
	 */
	if(typeof Buffer !== 'undefined' && Buffer.prototype) {
	  Buffer.prototype.toJSON = Buffer.prototype.toJSON || function () {
	    return Array.prototype.slice.call(this, 0);
	  };
	}

	/**
	 * Ignored files.
	 */

	function ignored(path){
	  return !~ignore.indexOf(path);
	}

	/**
	 * Lookup files in the given `dir`.
	 *
	 * @return {Array}
	 * @api private
	 */

	exports.files = function(dir, ext, ret){
	  ret = ret || [];
	  ext = ext || ['js'];

	  var re = new RegExp('\\.(' + ext.join('|') + ')$');

	  fs.readdirSync(dir)
	    .filter(ignored)
	    .forEach(function(path){
	      path = join(dir, path);
	      if (fs.statSync(path).isDirectory()) {
	        exports.files(path, ext, ret);
	      } else if (path.match(re)) {
	        ret.push(path);
	      }
	    });

	  return ret;
	};

	/**
	 * Compute a slug from the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	exports.slug = function(str){
	  return str
	    .toLowerCase()
	    .replace(/ +/g, '-')
	    .replace(/[^-\w]/g, '');
	};

	/**
	 * Strip the function definition from `str`,
	 * and re-indent for pre whitespace.
	 */

	exports.clean = function(str) {
	  str = str
	    .replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, '')
	    .replace(/^function *\(.*\)\s*{|\(.*\) *=> *{?/, '')
	    .replace(/\s+\}$/, '');

	  var spaces = str.match(/^\n?( *)/)[1].length
	    , tabs = str.match(/^\n?(\t*)/)[1].length
	    , re = new RegExp('^\n?' + (tabs ? '\t' : ' ') + '{' + (tabs ? tabs : spaces) + '}', 'gm');

	  str = str.replace(re, '');

	  return exports.trim(str);
	};

	/**
	 * Trim the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	exports.trim = function(str){
	  return str.replace(/^\s+|\s+$/g, '');
	};

	/**
	 * Parse the given `qs`.
	 *
	 * @param {String} qs
	 * @return {Object}
	 * @api private
	 */

	exports.parseQuery = function(qs){
	  return exports.reduce(qs.replace('?', '').split('&'), function(obj, pair){
	    var i = pair.indexOf('=')
	      , key = pair.slice(0, i)
	      , val = pair.slice(++i);

	    obj[key] = decodeURIComponent(val);
	    return obj;
	  }, {});
	};

	/**
	 * Highlight the given string of `js`.
	 *
	 * @param {String} js
	 * @return {String}
	 * @api private
	 */

	function highlight(js) {
	  return js
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/\/\/(.*)/gm, '<span class="comment">//$1</span>')
	    .replace(/('.*?')/gm, '<span class="string">$1</span>')
	    .replace(/(\d+\.\d+)/gm, '<span class="number">$1</span>')
	    .replace(/(\d+)/gm, '<span class="number">$1</span>')
	    .replace(/\bnew[ \t]+(\w+)/gm, '<span class="keyword">new</span> <span class="init">$1</span>')
	    .replace(/\b(function|new|throw|return|var|if|else)\b/gm, '<span class="keyword">$1</span>')
	}

	/**
	 * Highlight the contents of tag `name`.
	 *
	 * @param {String} name
	 * @api private
	 */

	exports.highlightTags = function(name) {
	  var code = document.getElementById('mocha').getElementsByTagName(name);
	  for (var i = 0, len = code.length; i < len; ++i) {
	    code[i].innerHTML = highlight(code[i].innerHTML);
	  }
	};

	/**
	 * If a value could have properties, and has none, this function is called, which returns
	 * a string representation of the empty value.
	 *
	 * Functions w/ no properties return `'[Function]'`
	 * Arrays w/ length === 0 return `'[]'`
	 * Objects w/ no properties return `'{}'`
	 * All else: return result of `value.toString()`
	 *
	 * @param {*} value Value to inspect
	 * @param {string} [type] The type of the value, if known.
	 * @returns {string}
	 */
	var emptyRepresentation = function emptyRepresentation(value, type) {
	  type = type || exports.type(value);

	  switch(type) {
	    case 'function':
	      return '[Function]';
	    case 'object':
	      return '{}';
	    case 'array':
	      return '[]';
	    default:
	      return value.toString();
	  }
	};

	/**
	 * Takes some variable and asks `{}.toString()` what it thinks it is.
	 * @param {*} value Anything
	 * @example
	 * type({}) // 'object'
	 * type([]) // 'array'
	 * type(1) // 'number'
	 * type(false) // 'boolean'
	 * type(Infinity) // 'number'
	 * type(null) // 'null'
	 * type(new Date()) // 'date'
	 * type(/foo/) // 'regexp'
	 * type('type') // 'string'
	 * type(global) // 'global'
	 * @api private
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
	 * @returns {string}
	 */
	exports.type = function type(value) {
	  if (typeof Buffer !== 'undefined' && Buffer.isBuffer(value)) {
	    return 'buffer';
	  }
	  return Object.prototype.toString.call(value)
	    .replace(/^\[.+\s(.+?)\]$/, '$1')
	    .toLowerCase();
	};

	/**
	 * @summary Stringify `value`.
	 * @description Different behavior depending on type of value.
	 * - If `value` is undefined or null, return `'[undefined]'` or `'[null]'`, respectively.
	 * - If `value` is not an object, function or array, return result of `value.toString()` wrapped in double-quotes.
	 * - If `value` is an *empty* object, function, or array, return result of function
	 *   {@link emptyRepresentation}.
	 * - If `value` has properties, call {@link exports.canonicalize} on it, then return result of
	 *   JSON.stringify().
	 *
	 * @see exports.type
	 * @param {*} value
	 * @return {string}
	 * @api private
	 */

	exports.stringify = function(value) {
	  var type = exports.type(value);

	  if (!~exports.indexOf(['object', 'array', 'function'], type)) {
	    if(type != 'buffer') {
	      return jsonStringify(value);
	    }
	    var json = value.toJSON();
	    // Based on the toJSON result
	    return jsonStringify(json.data && json.type ? json.data : json, 2)
	      .replace(/,(\n|$)/g, '$1');
	  }

	  for (var prop in value) {
	    if (Object.prototype.hasOwnProperty.call(value, prop)) {
	      return jsonStringify(exports.canonicalize(value), 2).replace(/,(\n|$)/g, '$1');
	    }
	  }

	  return emptyRepresentation(value, type);
	};

	/**
	 * @description
	 * like JSON.stringify but more sense.
	 * @param {Object}  object
	 * @param {Number=} spaces
	 * @param {number=} depth
	 * @returns {*}
	 * @private
	 */
	function jsonStringify(object, spaces, depth) {
	  if(typeof spaces == 'undefined') return _stringify(object);  // primitive types

	  depth = depth || 1;
	  var space = spaces * depth
	    , str = isArray(object) ? '[' : '{'
	    , end = isArray(object) ? ']' : '}'
	    , length = object.length || exports.keys(object).length
	    , repeat = function(s, n) { return new Array(n).join(s); }; // `.repeat()` polyfill

	  function _stringify(val) {
	    switch (exports.type(val)) {
	      case 'null':
	      case 'undefined':
	        val = '[' + val + ']';
	        break;
	      case 'array':
	      case 'object':
	        val = jsonStringify(val, spaces, depth + 1);
	        break;
	      case 'boolean':
	      case 'regexp':
	      case 'number':
	        val = val === 0 && (1/val) === -Infinity // `-0`
	          ? '-0'
	          : val.toString();
	        break;
	      case 'date':
	        val = '[Date: ' + val.toISOString() + ']';
	        break;
	      case 'buffer':
	        var json = val.toJSON();
	        // Based on the toJSON result
	        json = json.data && json.type ? json.data : json;
	        val = '[Buffer: ' + jsonStringify(json, 2, depth + 1) + ']';
	        break;
	      default:
	        val = (val == '[Function]' || val == '[Circular]')
	          ? val
	          : '"' + val + '"'; //string
	    }
	    return val;
	  }

	  for(var i in object) {
	    if(!object.hasOwnProperty(i)) continue;        // not my business
	    --length;
	    str += '\n ' + repeat(' ', space)
	      + (isArray(object) ? '' : '"' + i + '": ') // key
	      +  _stringify(object[i])                   // value
	      + (length ? ',' : '');                     // comma
	  }

	  return str + (str.length != 1                    // [], {}
	    ? '\n' + repeat(' ', --space) + end
	    : end);
	}

	/**
	 * Return if obj is a Buffer
	 * @param {Object} arg
	 * @return {Boolean}
	 * @api private
	 */
	exports.isBuffer = function (arg) {
	  return typeof Buffer !== 'undefined' && Buffer.isBuffer(arg);
	};

	/**
	 * @summary Return a new Thing that has the keys in sorted order.  Recursive.
	 * @description If the Thing...
	 * - has already been seen, return string `'[Circular]'`
	 * - is `undefined`, return string `'[undefined]'`
	 * - is `null`, return value `null`
	 * - is some other primitive, return the value
	 * - is not a primitive or an `Array`, `Object`, or `Function`, return the value of the Thing's `toString()` method
	 * - is a non-empty `Array`, `Object`, or `Function`, return the result of calling this function again.
	 * - is an empty `Array`, `Object`, or `Function`, return the result of calling `emptyRepresentation()`
	 *
	 * @param {*} value Thing to inspect.  May or may not have properties.
	 * @param {Array} [stack=[]] Stack of seen values
	 * @return {(Object|Array|Function|string|undefined)}
	 * @see {@link exports.stringify}
	 * @api private
	 */

	exports.canonicalize = function(value, stack) {
	  var canonicalizedObj,
	    type = exports.type(value),
	    prop,
	    withStack = function withStack(value, fn) {
	      stack.push(value);
	      fn();
	      stack.pop();
	    };

	  stack = stack || [];

	  if (exports.indexOf(stack, value) !== -1) {
	    return '[Circular]';
	  }

	  switch(type) {
	    case 'undefined':
	    case 'buffer':
	    case 'null':
	      canonicalizedObj = value;
	      break;
	    case 'array':
	      withStack(value, function () {
	        canonicalizedObj = exports.map(value, function (item) {
	          return exports.canonicalize(item, stack);
	        });
	      });
	      break;
	    case 'function':
	      for (prop in value) {
	        canonicalizedObj = {};
	        break;
	      }
	      if (!canonicalizedObj) {
	        canonicalizedObj = emptyRepresentation(value, type);
	        break;
	      }
	    /* falls through */
	    case 'object':
	      canonicalizedObj = canonicalizedObj || {};
	      withStack(value, function () {
	        exports.forEach(exports.keys(value).sort(), function (key) {
	          canonicalizedObj[key] = exports.canonicalize(value[key], stack);
	        });
	      });
	      break;
	    case 'date':
	    case 'number':
	    case 'regexp':
	    case 'boolean':
	      canonicalizedObj = value;
	      break;
	    default:
	      canonicalizedObj = value.toString();
	  }

	  return canonicalizedObj;
	};

	/**
	 * Lookup file names at the given `path`.
	 */
	exports.lookupFiles = function lookupFiles(path, extensions, recursive) {
	  var files = [];
	  var re = new RegExp('\\.(' + extensions.join('|') + ')$');

	  if (!exists(path)) {
	    if (exists(path + '.js')) {
	      path += '.js';
	    } else {
	      files = glob.sync(path);
	      if (!files.length) throw new Error("cannot resolve path (or pattern) '" + path + "'");
	      return files;
	    }
	  }

	  try {
	    var stat = fs.statSync(path);
	    if (stat.isFile()) return path;
	  }
	  catch (ignored) {
	    return;
	  }

	  fs.readdirSync(path).forEach(function(file) {
	    file = join(path, file);
	    try {
	      var stat = fs.statSync(file);
	      if (stat.isDirectory()) {
	        if (recursive) {
	          files = files.concat(lookupFiles(file, extensions, recursive));
	        }
	        return;
	      }
	    }
	    catch (ignored) {
	      return;
	    }
	    if (!stat.isFile() || !re.test(file) || basename(file)[0] === '.') return;
	    files.push(file);
	  });

	  return files;
	};

	/**
	 * Generate an undefined error with a message warning the user.
	 *
	 * @return {Error}
	 */

	exports.undefinedError = function() {
	  return new Error('Caught undefined error, did you throw without specifying what?');
	};

	/**
	 * Generate an undefined error if `err` is not defined.
	 *
	 * @param {Error} err
	 * @return {Error}
	 */

	exports.getError = function(err) {
	  return err || exports.undefinedError();
	};


	/**
	 * @summary
	 * This Filter based on `mocha-clean` module.(see: `github.com/rstacruz/mocha-clean`)
	 * @description
	 * When invoking this function you get a filter function that get the Error.stack as an input,
	 * and return a prettify output.
	 * (i.e: strip Mocha, node_modules, bower and componentJS from stack trace).
	 * @returns {Function}
	 */

	exports.stackTraceFilter = function() {
	  var slash = '/'
	    , is = typeof document === 'undefined'
	      ? { node: true }
	      : { browser: true }
	    , cwd = is.node
	      ? process.cwd() + slash
	      : location.href.replace(/\/[^\/]*$/, '/');

	  function isNodeModule (line) {
	    return (~line.indexOf('node_modules'));
	  }

	  function isMochaInternal (line) {
	    return (~line.indexOf('node_modules' + slash + 'mocha'))  ||
	      (~line.indexOf('components' + slash + 'mochajs'))       ||
	      (~line.indexOf('components' + slash + 'mocha'));
	  }

	  // node_modules, bower, componentJS
	  function isBrowserModule(line) {
	    return (~line.indexOf('node_modules')) ||
	      (~line.indexOf('components'));
	  }

	  function isNodeInternal (line) {
	    return (~line.indexOf('(timers.js:')) ||
	      (~line.indexOf('(events.js:'))      ||
	      (~line.indexOf('(node.js:'))        ||
	      (~line.indexOf('(module.js:'))      ||
	      (~line.indexOf('GeneratorFunctionPrototype.next (native)')) ||
	      false
	  }

	  return function(stack) {
	    stack = stack.split('\n');

	    stack = exports.reduce(stack, function(list, line) {
	      if (is.node && (isNodeModule(line) ||
	        isMochaInternal(line) ||
	        isNodeInternal(line)))
	        return list;

	      if (is.browser && (isBrowserModule(line)))
	        return list;

	      // Clean up cwd(absolute)
	      list.push(line.replace(cwd, ''));
	      return list;
	    }, []);

	    return stack.join('\n');
	  }
	};
	}); // module: utils.js
	// The global object is "self" in Web Workers.
	var global = (function() { return this; })();

	/**
	 * Save timer references to avoid Sinon interfering (see GH-237).
	 */

	var Date = global.Date;
	var setTimeout = global.setTimeout;
	var setInterval = global.setInterval;
	var clearTimeout = global.clearTimeout;
	var clearInterval = global.clearInterval;

	/**
	 * Node shims.
	 *
	 * These are meant only to allow
	 * mocha.js to run untouched, not
	 * to allow running node code in
	 * the browser.
	 */

	var process = {};
	process.exit = function(status){};
	process.stdout = {};

	var uncaughtExceptionHandlers = [];

	var originalOnerrorHandler = global.onerror;

	/**
	 * Remove uncaughtException listener.
	 * Revert to original onerror handler if previously defined.
	 */

	process.removeListener = function(e, fn){
	  if ('uncaughtException' == e) {
	    if (originalOnerrorHandler) {
	      global.onerror = originalOnerrorHandler;
	    } else {
	      global.onerror = function() {};
	    }
	    var i = Mocha.utils.indexOf(uncaughtExceptionHandlers, fn);
	    if (i != -1) { uncaughtExceptionHandlers.splice(i, 1); }
	  }
	};

	/**
	 * Implements uncaughtException listener.
	 */

	process.on = function(e, fn){
	  if ('uncaughtException' == e) {
	    global.onerror = function(err, url, line){
	      fn(new Error(err + ' (' + url + ':' + line + ')'));
	      return true;
	    };
	    uncaughtExceptionHandlers.push(fn);
	  }
	};

	/**
	 * Expose mocha.
	 */

	var Mocha = global.Mocha = require('mocha'),
	    mocha = global.mocha = new Mocha({ reporter: 'html' });

	// The BDD UI is registered by default, but no UI will be functional in the
	// browser without an explicit call to the overridden `mocha.ui` (see below).
	// Ensure that this default UI does not expose its methods to the global scope.
	mocha.suite.removeAllListeners('pre-require');

	var immediateQueue = []
	  , immediateTimeout;

	function timeslice() {
	  var immediateStart = new Date().getTime();
	  while (immediateQueue.length && (new Date().getTime() - immediateStart) < 100) {
	    immediateQueue.shift()();
	  }
	  if (immediateQueue.length) {
	    immediateTimeout = setTimeout(timeslice, 0);
	  } else {
	    immediateTimeout = null;
	  }
	}

	/**
	 * High-performance override of Runner.immediately.
	 */

	Mocha.Runner.immediately = function(callback) {
	  immediateQueue.push(callback);
	  if (!immediateTimeout) {
	    immediateTimeout = setTimeout(timeslice, 0);
	  }
	};

	/**
	 * Function to allow assertion libraries to throw errors directly into mocha.
	 * This is useful when running tests in a browser because window.onerror will
	 * only receive the 'message' attribute of the Error.
	 */
	mocha.throwError = function(err) {
	  Mocha.utils.forEach(uncaughtExceptionHandlers, function (fn) {
	    fn(err);
	  });
	  throw err;
	};

	/**
	 * Override ui to ensure that the ui functions are initialized.
	 * Normally this would happen in Mocha.prototype.loadFiles.
	 */

	mocha.ui = function(ui){
	  Mocha.prototype.ui.call(this, ui);
	  this.suite.emit('pre-require', global, null, this);
	  return this;
	};

	/**
	 * Setup mocha with the given setting options.
	 */

	mocha.setup = function(opts){
	  if ('string' == typeof opts) opts = { ui: opts };
	  for (var opt in opts) this[opt](opts[opt]);
	  return this;
	};

	/**
	 * Run mocha, returning the Runner.
	 */

	mocha.run = function(fn){
	  var options = mocha.options;
	  mocha.globals('location');

	  var query = Mocha.utils.parseQuery(global.location.search || '');
	  if (query.grep) mocha.grep(new RegExp(query.grep));
	  if (query.fgrep) mocha.grep(query.fgrep);
	  if (query.invert) mocha.invert();

	  return Mocha.prototype.run.call(mocha, function(err){
	    // The DOM Document is not available in Web Workers.
	    var document = global.document;
	    if (document && document.getElementById('mocha') && options.noHighlighting !== true) {
	      Mocha.utils.highlightTags('code');
	    }
	    if (fn) fn(err);
	  });
	};

	/**
	 * Expose the process shim.
	 */

	Mocha.process = process;
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(11), "/", __webpack_require__(12).Buffer))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */

	var base64 = __webpack_require__(13)
	var ieee754 = __webpack_require__(14)
	var isArray = __webpack_require__(15)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation

	var kMaxLength = 0x3fffffff
	var rootParent = {}

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Note:
	 *
	 * - Implementation must support adding new properties to `Uint8Array` instances.
	 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
	 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *    incorrect length in some situations.
	 *
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
	 * get the Object implementation, which is slower but will work correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = (function () {
	  try {
	    var buf = new ArrayBuffer(0)
	    var arr = new Uint8Array(buf)
	    arr.foo = function () { return 42 }
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	})()

	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (arg) {
	  if (!(this instanceof Buffer)) {
	    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
	    if (arguments.length > 1) return new Buffer(arg, arguments[1])
	    return new Buffer(arg)
	  }

	  this.length = 0
	  this.parent = undefined

	  // Common case.
	  if (typeof arg === 'number') {
	    return fromNumber(this, arg)
	  }

	  // Slightly less common case.
	  if (typeof arg === 'string') {
	    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
	  }

	  // Unusual.
	  return fromObject(this, arg)
	}

	function fromNumber (that, length) {
	  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < length; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

	  // Assumption: byteLength() return value is always < kMaxLength.
	  var length = byteLength(string, encoding) | 0
	  that = allocate(that, length)

	  that.write(string, encoding)
	  return that
	}

	function fromObject (that, object) {
	  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

	  if (isArray(object)) return fromArray(that, object)

	  if (object == null) {
	    throw new TypeError('must start with number, buffer, array or string')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && object.buffer instanceof ArrayBuffer) {
	    return fromTypedArray(that, object)
	  }

	  if (object.length) return fromArrayLike(that, object)

	  return fromJsonObject(that, object)
	}

	function fromBuffer (that, buffer) {
	  var length = checked(buffer.length) | 0
	  that = allocate(that, length)
	  buffer.copy(that, 0, 0, length)
	  return that
	}

	function fromArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Duplicate of fromArray() to keep fromArray() monomorphic.
	function fromTypedArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  // Truncating the elements is probably not what people expect from typed
	  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
	  // of the old Buffer constructor.
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
	// Returns a zero-length buffer for inputs that don't conform to the spec.
	function fromJsonObject (that, object) {
	  var array
	  var length = 0

	  if (object.type === 'Buffer' && isArray(object.data)) {
	    array = object.data
	    length = checked(array.length) | 0
	  }
	  that = allocate(that, length)

	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function allocate (that, length) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = Buffer._augment(new Uint8Array(length))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that.length = length
	    that._isBuffer = true
	  }

	  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
	  if (fromPool) that.parent = rootParent

	  return that
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength.toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  var i = 0
	  var len = Math.min(x, y)
	  while (i < len) {
	    if (a[i] !== b[i]) break

	    ++i
	  }

	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

	  if (list.length === 0) {
	    return new Buffer(0)
	  } else if (list.length === 1) {
	    return list[0]
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }

	  var buf = new Buffer(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}

	function byteLength (string, encoding) {
	  if (typeof string !== 'string') string = String(string)

	  if (string.length === 0) return 0

	  switch (encoding || 'utf8') {
	    case 'ascii':
	    case 'binary':
	    case 'raw':
	      return string.length
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return string.length * 2
	    case 'hex':
	      return string.length >>> 1
	    case 'utf8':
	    case 'utf-8':
	      return utf8ToBytes(string).length
	    case 'base64':
	      return base64ToBytes(string).length
	    default:
	      return string.length
	  }
	}
	Buffer.byteLength = byteLength

	// pre-set for values that may exist in the future
	Buffer.prototype.length = undefined
	Buffer.prototype.parent = undefined

	// toString(encoding, start=0, end=buffer.length)
	Buffer.prototype.toString = function toString (encoding, start, end) {
	  var loweredCase = false

	  start = start | 0
	  end = end === undefined || end === Infinity ? this.length : end | 0

	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'binary':
	        return binarySlice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0

	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1

	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }

	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	// `get` will be removed in Node 0.13+
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}

	// `set` will be removed in Node 0.13+
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    var swap = encoding
	    encoding = offset
	    offset = length | 0
	    length = swap
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'binary':
	        return binaryWrite(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  var res = ''
	  var tmp = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    if (buf[i] <= 0x7F) {
	      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
	      tmp = ''
	    } else {
	      tmp += '%' + buf[i].toString(16)
	    }
	  }

	  return res + decodeUtf8Char(tmp)
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  if (newBuf.length) newBuf.parent = this.parent || this

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = value
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = value
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = value
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = value
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = value
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = value
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = value
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start

	  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < len; i++) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), targetStart)
	  }

	  return len
	}

	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length

	  if (end < start) throw new RangeError('end < start')

	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return

	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }

	  return this
	}

	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}

	// HELPER FUNCTIONS
	// ================

	var BP = Buffer.prototype

	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true

	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set

	  // deprecated, will be removed in node 0.13+
	  arr.get = BP.get
	  arr.set = BP.set

	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer

	  return arr
	}

	var INVALID_BASE64_RE = /[^+\/0-9A-z\-]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	  var i = 0

	  for (; i < length; i++) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (leadSurrogate) {
	        // 2 leads in a row
	        if (codePoint < 0xDC00) {
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          leadSurrogate = codePoint
	          continue
	        } else {
	          // valid surrogate pair
	          codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000
	          leadSurrogate = null
	        }
	      } else {
	        // no lead yet

	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else {
	          // valid lead
	          leadSurrogate = codePoint
	          continue
	        }
	      }
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	      leadSurrogate = null
	    }

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x200000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function decodeUtf8Char (str) {
	  try {
	    return decodeURIComponent(str)
	  } catch (err) {
	    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12).Buffer))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	;(function (exports) {
		'use strict';

	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array

		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
		var PLUS_URL_SAFE = '-'.charCodeAt(0)
		var SLASH_URL_SAFE = '_'.charCodeAt(0)

		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS ||
			    code === PLUS_URL_SAFE)
				return 62 // '+'
			if (code === SLASH ||
			    code === SLASH_URL_SAFE)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}

		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr

			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}

			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)

			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length

			var L = 0

			function push (v) {
				arr[L++] = v
			}

			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}

			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}

			return arr
		}

		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length

			function encode (num) {
				return lookup.charAt(num)
			}

			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}

			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}

			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}

			return output
		}

		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}(false ? (this.base64js = {}) : exports))


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m,
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      nBits = -7,
	      i = isLE ? (nBytes - 1) : 0,
	      d = isLE ? -1 : 1,
	      s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c,
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
	      i = isLE ? 0 : (nBytes - 1),
	      d = isLE ? 1 : -1,
	      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * isArray
	 */

	var isArray = Array.isArray;

	/**
	 * toString
	 */

	var str = Object.prototype.toString;

	/**
	 * Whether or not the given `val`
	 * is an array.
	 *
	 * example:
	 *
	 *        isArray([]);
	 *        // > true
	 *        isArray(arguments);
	 *        // > false
	 *        isArray('');
	 *        // > false
	 *
	 * @param {mixed} val
	 * @return {bool}
	 */

	module.exports = isArray || function (val) {
	  return !! val && '[object Array]' == str.call(val);
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var used = []
	  , exports = module.exports = {};

	/*!
	 * Chai version
	 */

	exports.version = '2.3.0';

	/*!
	 * Assertion Error
	 */

	exports.AssertionError = __webpack_require__(19);

	/*!
	 * Utils for plugins (not exported)
	 */

	var util = __webpack_require__(20);

	/**
	 * # .use(function)
	 *
	 * Provides a way to extend the internals of Chai
	 *
	 * @param {Function}
	 * @returns {this} for chaining
	 * @api public
	 */

	exports.use = function (fn) {
	  if (!~used.indexOf(fn)) {
	    fn(this, util);
	    used.push(fn);
	  }

	  return this;
	};

	/*!
	 * Utility Functions
	 */

	exports.util = util;

	/*!
	 * Configuration
	 */

	var config = __webpack_require__(31);
	exports.config = config;

	/*!
	 * Primary `Assertion` prototype
	 */

	var assertion = __webpack_require__(46);
	exports.use(assertion);

	/*!
	 * Core Assertions
	 */

	var core = __webpack_require__(18);
	exports.use(core);

	/*!
	 * Expect interface
	 */

	var expect = __webpack_require__(47);
	exports.use(expect);

	/*!
	 * Should interface
	 */

	var should = __webpack_require__(48);
	exports.use(should);

	/*!
	 * Assert interface
	 */

	var assert = __webpack_require__(49);
	exports.use(assert);


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	module.exports = function (chai, _) {
	  var Assertion = chai.Assertion
	    , toString = Object.prototype.toString
	    , flag = _.flag;

	  /**
	   * ### Language Chains
	   *
	   * The following are provided as chainable getters to
	   * improve the readability of your assertions. They
	   * do not provide testing capabilities unless they
	   * have been overwritten by a plugin.
	   *
	   * **Chains**
	   *
	   * - to
	   * - be
	   * - been
	   * - is
	   * - that
	   * - which
	   * - and
	   * - has
	   * - have
	   * - with
	   * - at
	   * - of
	   * - same
	   *
	   * @name language chains
	   * @api public
	   */

	  [ 'to', 'be', 'been'
	  , 'is', 'and', 'has', 'have'
	  , 'with', 'that', 'which', 'at'
	  , 'of', 'same' ].forEach(function (chain) {
	    Assertion.addProperty(chain, function () {
	      return this;
	    });
	  });

	  /**
	   * ### .not
	   *
	   * Negates any of assertions following in the chain.
	   *
	   *     expect(foo).to.not.equal('bar');
	   *     expect(goodFn).to.not.throw(Error);
	   *     expect({ foo: 'baz' }).to.have.property('foo')
	   *       .and.not.equal('bar');
	   *
	   * @name not
	   * @api public
	   */

	  Assertion.addProperty('not', function () {
	    flag(this, 'negate', true);
	  });

	  /**
	   * ### .deep
	   *
	   * Sets the `deep` flag, later used by the `equal` and
	   * `property` assertions.
	   *
	   *     expect(foo).to.deep.equal({ bar: 'baz' });
	   *     expect({ foo: { bar: { baz: 'quux' } } })
	   *       .to.have.deep.property('foo.bar.baz', 'quux');
	   *
	   * `.deep.property` special characters can be escaped
	   * by adding two slashes before the `.` or `[]`.
	   *
	   *     var deepCss = { '.link': { '[target]': 42 }};
	   *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
	   *
	   * @name deep
	   * @api public
	   */

	  Assertion.addProperty('deep', function () {
	    flag(this, 'deep', true);
	  });

	  /**
	   * ### .any
	   *
	   * Sets the `any` flag, (opposite of the `all` flag)
	   * later used in the `keys` assertion.
	   *
	   *     expect(foo).to.have.any.keys('bar', 'baz');
	   *
	   * @name any
	   * @api public
	   */

	  Assertion.addProperty('any', function () {
	    flag(this, 'any', true);
	    flag(this, 'all', false)
	  });


	  /**
	   * ### .all
	   *
	   * Sets the `all` flag (opposite of the `any` flag)
	   * later used by the `keys` assertion.
	   *
	   *     expect(foo).to.have.all.keys('bar', 'baz');
	   *
	   * @name all
	   * @api public
	   */

	  Assertion.addProperty('all', function () {
	    flag(this, 'all', true);
	    flag(this, 'any', false);
	  });

	  /**
	   * ### .a(type)
	   *
	   * The `a` and `an` assertions are aliases that can be
	   * used either as language chains or to assert a value's
	   * type.
	   *
	   *     // typeof
	   *     expect('test').to.be.a('string');
	   *     expect({ foo: 'bar' }).to.be.an('object');
	   *     expect(null).to.be.a('null');
	   *     expect(undefined).to.be.an('undefined');
	   *
	   *     // language chain
	   *     expect(foo).to.be.an.instanceof(Foo);
	   *
	   * @name a
	   * @alias an
	   * @param {String} type
	   * @param {String} message _optional_
	   * @api public
	   */

	  function an (type, msg) {
	    if (msg) flag(this, 'message', msg);
	    type = type.toLowerCase();
	    var obj = flag(this, 'object')
	      , article = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(type.charAt(0)) ? 'an ' : 'a ';

	    this.assert(
	        type === _.type(obj)
	      , 'expected #{this} to be ' + article + type
	      , 'expected #{this} not to be ' + article + type
	    );
	  }

	  Assertion.addChainableMethod('an', an);
	  Assertion.addChainableMethod('a', an);

	  /**
	   * ### .include(value)
	   *
	   * The `include` and `contain` assertions can be used as either property
	   * based language chains or as methods to assert the inclusion of an object
	   * in an array or a substring in a string. When used as language chains,
	   * they toggle the `contains` flag for the `keys` assertion.
	   *
	   *     expect([1,2,3]).to.include(2);
	   *     expect('foobar').to.contain('foo');
	   *     expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
	   *
	   * @name include
	   * @alias contain
	   * @alias includes
	   * @alias contains
	   * @param {Object|String|Number} obj
	   * @param {String} message _optional_
	   * @api public
	   */

	  function includeChainingBehavior () {
	    flag(this, 'contains', true);
	  }

	  function include (val, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var expected = false;
	    if (_.type(obj) === 'array' && _.type(val) === 'object') {
	      for (var i in obj) {
	        if (_.eql(obj[i], val)) {
	          expected = true;
	          break;
	        }
	      }
	    } else if (_.type(val) === 'object') {
	      if (!flag(this, 'negate')) {
	        for (var k in val) new Assertion(obj).property(k, val[k]);
	        return;
	      }
	      var subset = {};
	      for (var k in val) subset[k] = obj[k];
	      expected = _.eql(subset, val);
	    } else {
	      expected = obj && ~obj.indexOf(val);
	    }
	    this.assert(
	        expected
	      , 'expected #{this} to include ' + _.inspect(val)
	      , 'expected #{this} to not include ' + _.inspect(val));
	  }

	  Assertion.addChainableMethod('include', include, includeChainingBehavior);
	  Assertion.addChainableMethod('contain', include, includeChainingBehavior);
	  Assertion.addChainableMethod('contains', include, includeChainingBehavior);
	  Assertion.addChainableMethod('includes', include, includeChainingBehavior);

	  /**
	   * ### .ok
	   *
	   * Asserts that the target is truthy.
	   *
	   *     expect('everthing').to.be.ok;
	   *     expect(1).to.be.ok;
	   *     expect(false).to.not.be.ok;
	   *     expect(undefined).to.not.be.ok;
	   *     expect(null).to.not.be.ok;
	   *
	   * @name ok
	   * @api public
	   */

	  Assertion.addProperty('ok', function () {
	    this.assert(
	        flag(this, 'object')
	      , 'expected #{this} to be truthy'
	      , 'expected #{this} to be falsy');
	  });

	  /**
	   * ### .true
	   *
	   * Asserts that the target is `true`.
	   *
	   *     expect(true).to.be.true;
	   *     expect(1).to.not.be.true;
	   *
	   * @name true
	   * @api public
	   */

	  Assertion.addProperty('true', function () {
	    this.assert(
	        true === flag(this, 'object')
	      , 'expected #{this} to be true'
	      , 'expected #{this} to be false'
	      , this.negate ? false : true
	    );
	  });

	  /**
	   * ### .false
	   *
	   * Asserts that the target is `false`.
	   *
	   *     expect(false).to.be.false;
	   *     expect(0).to.not.be.false;
	   *
	   * @name false
	   * @api public
	   */

	  Assertion.addProperty('false', function () {
	    this.assert(
	        false === flag(this, 'object')
	      , 'expected #{this} to be false'
	      , 'expected #{this} to be true'
	      , this.negate ? true : false
	    );
	  });

	  /**
	   * ### .null
	   *
	   * Asserts that the target is `null`.
	   *
	   *     expect(null).to.be.null;
	   *     expect(undefined).to.not.be.null;
	   *
	   * @name null
	   * @api public
	   */

	  Assertion.addProperty('null', function () {
	    this.assert(
	        null === flag(this, 'object')
	      , 'expected #{this} to be null'
	      , 'expected #{this} not to be null'
	    );
	  });

	  /**
	   * ### .undefined
	   *
	   * Asserts that the target is `undefined`.
	   *
	   *     expect(undefined).to.be.undefined;
	   *     expect(null).to.not.be.undefined;
	   *
	   * @name undefined
	   * @api public
	   */

	  Assertion.addProperty('undefined', function () {
	    this.assert(
	        undefined === flag(this, 'object')
	      , 'expected #{this} to be undefined'
	      , 'expected #{this} not to be undefined'
	    );
	  });

	  /**
	   * ### .exist
	   *
	   * Asserts that the target is neither `null` nor `undefined`.
	   *
	   *     var foo = 'hi'
	   *       , bar = null
	   *       , baz;
	   *
	   *     expect(foo).to.exist;
	   *     expect(bar).to.not.exist;
	   *     expect(baz).to.not.exist;
	   *
	   * @name exist
	   * @api public
	   */

	  Assertion.addProperty('exist', function () {
	    this.assert(
	        null != flag(this, 'object')
	      , 'expected #{this} to exist'
	      , 'expected #{this} to not exist'
	    );
	  });


	  /**
	   * ### .empty
	   *
	   * Asserts that the target's length is `0`. For arrays and strings, it checks
	   * the `length` property. For objects, it gets the count of
	   * enumerable keys.
	   *
	   *     expect([]).to.be.empty;
	   *     expect('').to.be.empty;
	   *     expect({}).to.be.empty;
	   *
	   * @name empty
	   * @api public
	   */

	  Assertion.addProperty('empty', function () {
	    var obj = flag(this, 'object')
	      , expected = obj;

	    if (Array.isArray(obj) || 'string' === typeof object) {
	      expected = obj.length;
	    } else if (typeof obj === 'object') {
	      expected = Object.keys(obj).length;
	    }

	    this.assert(
	        !expected
	      , 'expected #{this} to be empty'
	      , 'expected #{this} not to be empty'
	    );
	  });

	  /**
	   * ### .arguments
	   *
	   * Asserts that the target is an arguments object.
	   *
	   *     function test () {
	   *       expect(arguments).to.be.arguments;
	   *     }
	   *
	   * @name arguments
	   * @alias Arguments
	   * @api public
	   */

	  function checkArguments () {
	    var obj = flag(this, 'object')
	      , type = Object.prototype.toString.call(obj);
	    this.assert(
	        '[object Arguments]' === type
	      , 'expected #{this} to be arguments but got ' + type
	      , 'expected #{this} to not be arguments'
	    );
	  }

	  Assertion.addProperty('arguments', checkArguments);
	  Assertion.addProperty('Arguments', checkArguments);

	  /**
	   * ### .equal(value)
	   *
	   * Asserts that the target is strictly equal (`===`) to `value`.
	   * Alternately, if the `deep` flag is set, asserts that
	   * the target is deeply equal to `value`.
	   *
	   *     expect('hello').to.equal('hello');
	   *     expect(42).to.equal(42);
	   *     expect(1).to.not.equal(true);
	   *     expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
	   *     expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
	   *
	   * @name equal
	   * @alias equals
	   * @alias eq
	   * @alias deep.equal
	   * @param {Mixed} value
	   * @param {String} message _optional_
	   * @api public
	   */

	  function assertEqual (val, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'deep')) {
	      return this.eql(val);
	    } else {
	      this.assert(
	          val === obj
	        , 'expected #{this} to equal #{exp}'
	        , 'expected #{this} to not equal #{exp}'
	        , val
	        , this._obj
	        , true
	      );
	    }
	  }

	  Assertion.addMethod('equal', assertEqual);
	  Assertion.addMethod('equals', assertEqual);
	  Assertion.addMethod('eq', assertEqual);

	  /**
	   * ### .eql(value)
	   *
	   * Asserts that the target is deeply equal to `value`.
	   *
	   *     expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
	   *     expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
	   *
	   * @name eql
	   * @alias eqls
	   * @param {Mixed} value
	   * @param {String} message _optional_
	   * @api public
	   */

	  function assertEql(obj, msg) {
	    if (msg) flag(this, 'message', msg);
	    this.assert(
	        _.eql(obj, flag(this, 'object'))
	      , 'expected #{this} to deeply equal #{exp}'
	      , 'expected #{this} to not deeply equal #{exp}'
	      , obj
	      , this._obj
	      , true
	    );
	  }

	  Assertion.addMethod('eql', assertEql);
	  Assertion.addMethod('eqls', assertEql);

	  /**
	   * ### .above(value)
	   *
	   * Asserts that the target is greater than `value`.
	   *
	   *     expect(10).to.be.above(5);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a minimum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.above(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
	   *
	   * @name above
	   * @alias gt
	   * @alias greaterThan
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @api public
	   */

	  function assertAbove (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len > n
	        , 'expected #{this} to have a length above #{exp} but got #{act}'
	        , 'expected #{this} to not have a length above #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj > n
	        , 'expected #{this} to be above ' + n
	        , 'expected #{this} to be at most ' + n
	      );
	    }
	  }

	  Assertion.addMethod('above', assertAbove);
	  Assertion.addMethod('gt', assertAbove);
	  Assertion.addMethod('greaterThan', assertAbove);

	  /**
	   * ### .least(value)
	   *
	   * Asserts that the target is greater than or equal to `value`.
	   *
	   *     expect(10).to.be.at.least(10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a minimum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.of.at.least(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
	   *
	   * @name least
	   * @alias gte
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @api public
	   */

	  function assertLeast (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len >= n
	        , 'expected #{this} to have a length at least #{exp} but got #{act}'
	        , 'expected #{this} to have a length below #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj >= n
	        , 'expected #{this} to be at least ' + n
	        , 'expected #{this} to be below ' + n
	      );
	    }
	  }

	  Assertion.addMethod('least', assertLeast);
	  Assertion.addMethod('gte', assertLeast);

	  /**
	   * ### .below(value)
	   *
	   * Asserts that the target is less than `value`.
	   *
	   *     expect(5).to.be.below(10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a maximum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.below(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
	   *
	   * @name below
	   * @alias lt
	   * @alias lessThan
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @api public
	   */

	  function assertBelow (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len < n
	        , 'expected #{this} to have a length below #{exp} but got #{act}'
	        , 'expected #{this} to not have a length below #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj < n
	        , 'expected #{this} to be below ' + n
	        , 'expected #{this} to be at least ' + n
	      );
	    }
	  }

	  Assertion.addMethod('below', assertBelow);
	  Assertion.addMethod('lt', assertBelow);
	  Assertion.addMethod('lessThan', assertBelow);

	  /**
	   * ### .most(value)
	   *
	   * Asserts that the target is less than or equal to `value`.
	   *
	   *     expect(5).to.be.at.most(5);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a maximum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.of.at.most(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
	   *
	   * @name most
	   * @alias lte
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @api public
	   */

	  function assertMost (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len <= n
	        , 'expected #{this} to have a length at most #{exp} but got #{act}'
	        , 'expected #{this} to have a length above #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj <= n
	        , 'expected #{this} to be at most ' + n
	        , 'expected #{this} to be above ' + n
	      );
	    }
	  }

	  Assertion.addMethod('most', assertMost);
	  Assertion.addMethod('lte', assertMost);

	  /**
	   * ### .within(start, finish)
	   *
	   * Asserts that the target is within a range.
	   *
	   *     expect(7).to.be.within(5,10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a length range. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.within(2,4);
	   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
	   *
	   * @name within
	   * @param {Number} start lowerbound inclusive
	   * @param {Number} finish upperbound inclusive
	   * @param {String} message _optional_
	   * @api public
	   */

	  Assertion.addMethod('within', function (start, finish, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object')
	      , range = start + '..' + finish;
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len >= start && len <= finish
	        , 'expected #{this} to have a length within ' + range
	        , 'expected #{this} to not have a length within ' + range
	      );
	    } else {
	      this.assert(
	          obj >= start && obj <= finish
	        , 'expected #{this} to be within ' + range
	        , 'expected #{this} to not be within ' + range
	      );
	    }
	  });

	  /**
	   * ### .instanceof(constructor)
	   *
	   * Asserts that the target is an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , Chai = new Tea('chai');
	   *
	   *     expect(Chai).to.be.an.instanceof(Tea);
	   *     expect([ 1, 2, 3 ]).to.be.instanceof(Array);
	   *
	   * @name instanceof
	   * @param {Constructor} constructor
	   * @param {String} message _optional_
	   * @alias instanceOf
	   * @api public
	   */

	  function assertInstanceOf (constructor, msg) {
	    if (msg) flag(this, 'message', msg);
	    var name = _.getName(constructor);
	    this.assert(
	        flag(this, 'object') instanceof constructor
	      , 'expected #{this} to be an instance of ' + name
	      , 'expected #{this} to not be an instance of ' + name
	    );
	  };

	  Assertion.addMethod('instanceof', assertInstanceOf);
	  Assertion.addMethod('instanceOf', assertInstanceOf);

	  /**
	   * ### .property(name, [value])
	   *
	   * Asserts that the target has a property `name`, optionally asserting that
	   * the value of that property is strictly equal to  `value`.
	   * If the `deep` flag is set, you can use dot- and bracket-notation for deep
	   * references into objects and arrays.
	   *
	   *     // simple referencing
	   *     var obj = { foo: 'bar' };
	   *     expect(obj).to.have.property('foo');
	   *     expect(obj).to.have.property('foo', 'bar');
	   *
	   *     // deep referencing
	   *     var deepObj = {
	   *         green: { tea: 'matcha' }
	   *       , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
	   *     };
	   *
	   *     expect(deepObj).to.have.deep.property('green.tea', 'matcha');
	   *     expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
	   *     expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
	   *
	   * You can also use an array as the starting point of a `deep.property`
	   * assertion, or traverse nested arrays.
	   *
	   *     var arr = [
	   *         [ 'chai', 'matcha', 'konacha' ]
	   *       , [ { tea: 'chai' }
	   *         , { tea: 'matcha' }
	   *         , { tea: 'konacha' } ]
	   *     ];
	   *
	   *     expect(arr).to.have.deep.property('[0][1]', 'matcha');
	   *     expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
	   *
	   * Furthermore, `property` changes the subject of the assertion
	   * to be the value of that property from the original object. This
	   * permits for further chainable assertions on that property.
	   *
	   *     expect(obj).to.have.property('foo')
	   *       .that.is.a('string');
	   *     expect(deepObj).to.have.property('green')
	   *       .that.is.an('object')
	   *       .that.deep.equals({ tea: 'matcha' });
	   *     expect(deepObj).to.have.property('teas')
	   *       .that.is.an('array')
	   *       .with.deep.property('[2]')
	   *         .that.deep.equals({ tea: 'konacha' });
	   *
	   * Note that dots and bracket in `name` must be backslash-escaped when
	   * the `deep` flag is set, while they must NOT be escaped when the `deep`
	   * flag is not set.
	   *
	   *     // simple referencing
	   *     var css = { '.link[target]': 42 };
	   *     expect(css).to.have.property('.link[target]', 42);
	   *
	   *     // deep referencing
	   *     var deepCss = { '.link': { '[target]': 42 }};
	   *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
	   *
	   * @name property
	   * @alias deep.property
	   * @param {String} name
	   * @param {Mixed} value (optional)
	   * @param {String} message _optional_
	   * @returns value of property for chaining
	   * @api public
	   */

	  Assertion.addMethod('property', function (name, val, msg) {
	    if (msg) flag(this, 'message', msg);

	    var isDeep = !!flag(this, 'deep')
	      , descriptor = isDeep ? 'deep property ' : 'property '
	      , negate = flag(this, 'negate')
	      , obj = flag(this, 'object')
	      , pathInfo = isDeep ? _.getPathInfo(name, obj) : null
	      , hasProperty = isDeep
	        ? pathInfo.exists
	        : _.hasProperty(name, obj)
	      , value = isDeep
	        ? pathInfo.value
	        : obj[name];

	    if (negate && undefined !== val) {
	      if (undefined === value) {
	        msg = (msg != null) ? msg + ': ' : '';
	        throw new Error(msg + _.inspect(obj) + ' has no ' + descriptor + _.inspect(name));
	      }
	    } else {
	      this.assert(
	          hasProperty
	        , 'expected #{this} to have a ' + descriptor + _.inspect(name)
	        , 'expected #{this} to not have ' + descriptor + _.inspect(name));
	    }

	    if (undefined !== val) {
	      this.assert(
	          val === value
	        , 'expected #{this} to have a ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}'
	        , 'expected #{this} to not have a ' + descriptor + _.inspect(name) + ' of #{act}'
	        , val
	        , value
	      );
	    }

	    flag(this, 'object', value);
	  });


	  /**
	   * ### .ownProperty(name)
	   *
	   * Asserts that the target has an own property `name`.
	   *
	   *     expect('test').to.have.ownProperty('length');
	   *
	   * @name ownProperty
	   * @alias haveOwnProperty
	   * @param {String} name
	   * @param {String} message _optional_
	   * @api public
	   */

	  function assertOwnProperty (name, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(
	        obj.hasOwnProperty(name)
	      , 'expected #{this} to have own property ' + _.inspect(name)
	      , 'expected #{this} to not have own property ' + _.inspect(name)
	    );
	  }

	  Assertion.addMethod('ownProperty', assertOwnProperty);
	  Assertion.addMethod('haveOwnProperty', assertOwnProperty);

	  /**
	   * ### .ownPropertyDescriptor(name[, descriptor[, message]])
	   *
	   * Asserts that the target has an own property descriptor `name`, that optionally matches `descriptor`.
	   *
	   *     expect('test').to.have.ownPropertyDescriptor('length');
	   *     expect('test').to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 4 });
	   *     expect('test').not.to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 3 });
	   *     expect('test').ownPropertyDescriptor('length').to.have.property('enumerable', false);
	   *     expect('test').ownPropertyDescriptor('length').to.have.keys('value');
	   *
	   * @name ownPropertyDescriptor
	   * @alias haveOwnPropertyDescriptor
	   * @param {String} name
	   * @param {Object} descriptor _optional_
	   * @param {String} message _optional_
	   * @api public
	   */

	  function assertOwnPropertyDescriptor (name, descriptor, msg) {
	    if (typeof descriptor === 'string') {
	      msg = descriptor;
	      descriptor = null;
	    }
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
	    if (actualDescriptor && descriptor) {
	      this.assert(
	          _.eql(descriptor, actualDescriptor)
	        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to match ' + _.inspect(descriptor) + ', got ' + _.inspect(actualDescriptor)
	        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to not match ' + _.inspect(descriptor)
	        , descriptor
	        , actualDescriptor
	        , true
	      );
	    } else {
	      this.assert(
	          actualDescriptor
	        , 'expected #{this} to have an own property descriptor for ' + _.inspect(name)
	        , 'expected #{this} to not have an own property descriptor for ' + _.inspect(name)
	      );
	    }
	    flag(this, 'object', actualDescriptor);
	  }

	  Assertion.addMethod('ownPropertyDescriptor', assertOwnPropertyDescriptor);
	  Assertion.addMethod('haveOwnPropertyDescriptor', assertOwnPropertyDescriptor);

	  /**
	   * ### .length(value)
	   *
	   * Asserts that the target's `length` property has
	   * the expected value.
	   *
	   *     expect([ 1, 2, 3]).to.have.length(3);
	   *     expect('foobar').to.have.length(6);
	   *
	   * Can also be used as a chain precursor to a value
	   * comparison for the length property.
	   *
	   *     expect('foo').to.have.length.above(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
	   *     expect('foo').to.have.length.below(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
	   *     expect('foo').to.have.length.within(2,4);
	   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
	   *
	   * @name length
	   * @alias lengthOf
	   * @param {Number} length
	   * @param {String} message _optional_
	   * @api public
	   */

	  function assertLengthChain () {
	    flag(this, 'doLength', true);
	  }

	  function assertLength (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).to.have.property('length');
	    var len = obj.length;

	    this.assert(
	        len == n
	      , 'expected #{this} to have a length of #{exp} but got #{act}'
	      , 'expected #{this} to not have a length of #{act}'
	      , n
	      , len
	    );
	  }

	  Assertion.addChainableMethod('length', assertLength, assertLengthChain);
	  Assertion.addMethod('lengthOf', assertLength);

	  /**
	   * ### .match(regexp)
	   *
	   * Asserts that the target matches a regular expression.
	   *
	   *     expect('foobar').to.match(/^foo/);
	   *
	   * @name match
	   * @param {RegExp} RegularExpression
	   * @param {String} message _optional_
	   * @api public
	   */

	  Assertion.addMethod('match', function (re, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(
	        re.exec(obj)
	      , 'expected #{this} to match ' + re
	      , 'expected #{this} not to match ' + re
	    );
	  });

	  /**
	   * ### .string(string)
	   *
	   * Asserts that the string target contains another string.
	   *
	   *     expect('foobar').to.have.string('bar');
	   *
	   * @name string
	   * @param {String} string
	   * @param {String} message _optional_
	   * @api public
	   */

	  Assertion.addMethod('string', function (str, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).is.a('string');

	    this.assert(
	        ~obj.indexOf(str)
	      , 'expected #{this} to contain ' + _.inspect(str)
	      , 'expected #{this} to not contain ' + _.inspect(str)
	    );
	  });


	  /**
	   * ### .keys(key1, [key2], [...])
	   *
	   * Asserts that the target contains any or all of the passed-in keys.
	   * Use in combination with `any`, `all`, `contains`, or `have` will affect
	   * what will pass.
	   *
	   * When used in conjunction with `any`, at least one key that is passed
	   * in must exist in the target object. This is regardless whether or not
	   * the `have` or `contain` qualifiers are used. Note, either `any` or `all`
	   * should be used in the assertion. If neither are used, the assertion is
	   * defaulted to `all`.
	   *
	   * When both `all` and `contain` are used, the target object must have at
	   * least all of the passed-in keys but may have more keys not listed.
	   *
	   * When both `all` and `have` are used, the target object must both contain
	   * all of the passed-in keys AND the number of keys in the target object must
	   * match the number of keys passed in (in other words, a target object must
	   * have all and only all of the passed-in keys).
	   *
	   *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo', 'baz');
	   *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo');
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys('bar', 'baz');
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys(['foo']);
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys({'foo': 6});
	   *     expect({ foo: 1, bar: 2 }).to.have.all.keys(['bar', 'foo']);
	   *     expect({ foo: 1, bar: 2 }).to.have.all.keys({'bar': 6, 'foo': 7});
	   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys(['bar', 'foo']);
	   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys([{'bar': 6}}]);
	   *
	   *
	   * @name keys
	   * @alias key
	   * @param {String...|Array|Object} keys
	   * @api public
	   */

	  function assertKeys (keys) {
	    var obj = flag(this, 'object')
	      , str
	      , ok = true
	      , mixedArgsMsg = 'keys must be given single argument of Array|Object|String, or multiple String arguments';

	    switch (_.type(keys)) {
	      case "array":
	        if (arguments.length > 1) throw (new Error(mixedArgsMsg));
	        break;
	      case "object":
	        if (arguments.length > 1) throw (new Error(mixedArgsMsg));
	        keys = Object.keys(keys);
	        break;
	      default:
	        keys = Array.prototype.slice.call(arguments);
	    }

	    if (!keys.length) throw new Error('keys required');

	    var actual = Object.keys(obj)
	      , expected = keys
	      , len = keys.length
	      , any = flag(this, 'any')
	      , all = flag(this, 'all');

	    if (!any && !all) {
	      all = true;
	    }

	    // Has any
	    if (any) {
	      var intersection = expected.filter(function(key) {
	        return ~actual.indexOf(key);
	      });
	      ok = intersection.length > 0;
	    }

	    // Has all
	    if (all) {
	      ok = keys.every(function(key){
	        return ~actual.indexOf(key);
	      });
	      if (!flag(this, 'negate') && !flag(this, 'contains')) {
	        ok = ok && keys.length == actual.length;
	      }
	    }

	    // Key string
	    if (len > 1) {
	      keys = keys.map(function(key){
	        return _.inspect(key);
	      });
	      var last = keys.pop();
	      if (all) {
	        str = keys.join(', ') + ', and ' + last;
	      }
	      if (any) {
	        str = keys.join(', ') + ', or ' + last;
	      }
	    } else {
	      str = _.inspect(keys[0]);
	    }

	    // Form
	    str = (len > 1 ? 'keys ' : 'key ') + str;

	    // Have / include
	    str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;

	    // Assertion
	    this.assert(
	        ok
	      , 'expected #{this} to ' + str
	      , 'expected #{this} to not ' + str
	      , expected.slice(0).sort()
	      , actual.sort()
	      , true
	    );
	  }

	  Assertion.addMethod('keys', assertKeys);
	  Assertion.addMethod('key', assertKeys);

	  /**
	   * ### .throw(constructor)
	   *
	   * Asserts that the function target will throw a specific error, or specific type of error
	   * (as determined using `instanceof`), optionally with a RegExp or string inclusion test
	   * for the error's message.
	   *
	   *     var err = new ReferenceError('This is a bad function.');
	   *     var fn = function () { throw err; }
	   *     expect(fn).to.throw(ReferenceError);
	   *     expect(fn).to.throw(Error);
	   *     expect(fn).to.throw(/bad function/);
	   *     expect(fn).to.not.throw('good function');
	   *     expect(fn).to.throw(ReferenceError, /bad function/);
	   *     expect(fn).to.throw(err);
	   *     expect(fn).to.not.throw(new RangeError('Out of range.'));
	   *
	   * Please note that when a throw expectation is negated, it will check each
	   * parameter independently, starting with error constructor type. The appropriate way
	   * to check for the existence of a type of error but for a message that does not match
	   * is to use `and`.
	   *
	   *     expect(fn).to.throw(ReferenceError)
	   *        .and.not.throw(/good function/);
	   *
	   * @name throw
	   * @alias throws
	   * @alias Throw
	   * @param {ErrorConstructor} constructor
	   * @param {String|RegExp} expected error message
	   * @param {String} message _optional_
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @returns error for chaining (null if no error)
	   * @api public
	   */

	  function assertThrows (constructor, errMsg, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).is.a('function');

	    var thrown = false
	      , desiredError = null
	      , name = null
	      , thrownError = null;

	    if (arguments.length === 0) {
	      errMsg = null;
	      constructor = null;
	    } else if (constructor && (constructor instanceof RegExp || 'string' === typeof constructor)) {
	      errMsg = constructor;
	      constructor = null;
	    } else if (constructor && constructor instanceof Error) {
	      desiredError = constructor;
	      constructor = null;
	      errMsg = null;
	    } else if (typeof constructor === 'function') {
	      name = constructor.prototype.name || constructor.name;
	      if (name === 'Error' && constructor !== Error) {
	        name = (new constructor()).name;
	      }
	    } else {
	      constructor = null;
	    }

	    try {
	      obj();
	    } catch (err) {
	      // first, check desired error
	      if (desiredError) {
	        this.assert(
	            err === desiredError
	          , 'expected #{this} to throw #{exp} but #{act} was thrown'
	          , 'expected #{this} to not throw #{exp}'
	          , (desiredError instanceof Error ? desiredError.toString() : desiredError)
	          , (err instanceof Error ? err.toString() : err)
	        );

	        flag(this, 'object', err);
	        return this;
	      }

	      // next, check constructor
	      if (constructor) {
	        this.assert(
	            err instanceof constructor
	          , 'expected #{this} to throw #{exp} but #{act} was thrown'
	          , 'expected #{this} to not throw #{exp} but #{act} was thrown'
	          , name
	          , (err instanceof Error ? err.toString() : err)
	        );

	        if (!errMsg) {
	          flag(this, 'object', err);
	          return this;
	        }
	      }

	      // next, check message
	      var message = 'object' === _.type(err) && "message" in err
	        ? err.message
	        : '' + err;

	      if ((message != null) && errMsg && errMsg instanceof RegExp) {
	        this.assert(
	            errMsg.exec(message)
	          , 'expected #{this} to throw error matching #{exp} but got #{act}'
	          , 'expected #{this} to throw error not matching #{exp}'
	          , errMsg
	          , message
	        );

	        flag(this, 'object', err);
	        return this;
	      } else if ((message != null) && errMsg && 'string' === typeof errMsg) {
	        this.assert(
	            ~message.indexOf(errMsg)
	          , 'expected #{this} to throw error including #{exp} but got #{act}'
	          , 'expected #{this} to throw error not including #{act}'
	          , errMsg
	          , message
	        );

	        flag(this, 'object', err);
	        return this;
	      } else {
	        thrown = true;
	        thrownError = err;
	      }
	    }

	    var actuallyGot = ''
	      , expectedThrown = name !== null
	        ? name
	        : desiredError
	          ? '#{exp}' //_.inspect(desiredError)
	          : 'an error';

	    if (thrown) {
	      actuallyGot = ' but #{act} was thrown'
	    }

	    this.assert(
	        thrown === true
	      , 'expected #{this} to throw ' + expectedThrown + actuallyGot
	      , 'expected #{this} to not throw ' + expectedThrown + actuallyGot
	      , (desiredError instanceof Error ? desiredError.toString() : desiredError)
	      , (thrownError instanceof Error ? thrownError.toString() : thrownError)
	    );

	    flag(this, 'object', thrownError);
	  };

	  Assertion.addMethod('throw', assertThrows);
	  Assertion.addMethod('throws', assertThrows);
	  Assertion.addMethod('Throw', assertThrows);

	  /**
	   * ### .respondTo(method)
	   *
	   * Asserts that the object or class target will respond to a method.
	   *
	   *     Klass.prototype.bar = function(){};
	   *     expect(Klass).to.respondTo('bar');
	   *     expect(obj).to.respondTo('bar');
	   *
	   * To check if a constructor will respond to a static function,
	   * set the `itself` flag.
	   *
	   *     Klass.baz = function(){};
	   *     expect(Klass).itself.to.respondTo('baz');
	   *
	   * @name respondTo
	   * @param {String} method
	   * @param {String} message _optional_
	   * @api public
	   */

	  Assertion.addMethod('respondTo', function (method, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object')
	      , itself = flag(this, 'itself')
	      , context = ('function' === _.type(obj) && !itself)
	        ? obj.prototype[method]
	        : obj[method];

	    this.assert(
	        'function' === typeof context
	      , 'expected #{this} to respond to ' + _.inspect(method)
	      , 'expected #{this} to not respond to ' + _.inspect(method)
	    );
	  });

	  /**
	   * ### .itself
	   *
	   * Sets the `itself` flag, later used by the `respondTo` assertion.
	   *
	   *     function Foo() {}
	   *     Foo.bar = function() {}
	   *     Foo.prototype.baz = function() {}
	   *
	   *     expect(Foo).itself.to.respondTo('bar');
	   *     expect(Foo).itself.not.to.respondTo('baz');
	   *
	   * @name itself
	   * @api public
	   */

	  Assertion.addProperty('itself', function () {
	    flag(this, 'itself', true);
	  });

	  /**
	   * ### .satisfy(method)
	   *
	   * Asserts that the target passes a given truth test.
	   *
	   *     expect(1).to.satisfy(function(num) { return num > 0; });
	   *
	   * @name satisfy
	   * @param {Function} matcher
	   * @param {String} message _optional_
	   * @api public
	   */

	  Assertion.addMethod('satisfy', function (matcher, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var result = matcher(obj);
	    this.assert(
	        result
	      , 'expected #{this} to satisfy ' + _.objDisplay(matcher)
	      , 'expected #{this} to not satisfy' + _.objDisplay(matcher)
	      , this.negate ? false : true
	      , result
	    );
	  });

	  /**
	   * ### .closeTo(expected, delta)
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     expect(1.5).to.be.closeTo(1, 0.5);
	   *
	   * @name closeTo
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message _optional_
	   * @api public
	   */

	  Assertion.addMethod('closeTo', function (expected, delta, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');

	    new Assertion(obj, msg).is.a('number');
	    if (_.type(expected) !== 'number' || _.type(delta) !== 'number') {
	      throw new Error('the arguments to closeTo must be numbers');
	    }

	    this.assert(
	        Math.abs(obj - expected) <= delta
	      , 'expected #{this} to be close to ' + expected + ' +/- ' + delta
	      , 'expected #{this} not to be close to ' + expected + ' +/- ' + delta
	    );
	  });

	  function isSubsetOf(subset, superset, cmp) {
	    return subset.every(function(elem) {
	      if (!cmp) return superset.indexOf(elem) !== -1;

	      return superset.some(function(elem2) {
	        return cmp(elem, elem2);
	      });
	    })
	  }

	  /**
	   * ### .members(set)
	   *
	   * Asserts that the target is a superset of `set`,
	   * or that the target and `set` have the same strictly-equal (===) members.
	   * Alternately, if the `deep` flag is set, set members are compared for deep
	   * equality.
	   *
	   *     expect([1, 2, 3]).to.include.members([3, 2]);
	   *     expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
	   *
	   *     expect([4, 2]).to.have.members([2, 4]);
	   *     expect([5, 2]).to.not.have.members([5, 2, 1]);
	   *
	   *     expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);
	   *
	   * @name members
	   * @param {Array} set
	   * @param {String} message _optional_
	   * @api public
	   */

	  Assertion.addMethod('members', function (subset, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');

	    new Assertion(obj).to.be.an('array');
	    new Assertion(subset).to.be.an('array');

	    var cmp = flag(this, 'deep') ? _.eql : undefined;

	    if (flag(this, 'contains')) {
	      return this.assert(
	          isSubsetOf(subset, obj, cmp)
	        , 'expected #{this} to be a superset of #{act}'
	        , 'expected #{this} to not be a superset of #{act}'
	        , obj
	        , subset
	      );
	    }

	    this.assert(
	        isSubsetOf(obj, subset, cmp) && isSubsetOf(subset, obj, cmp)
	        , 'expected #{this} to have the same members as #{act}'
	        , 'expected #{this} to not have the same members as #{act}'
	        , obj
	        , subset
	    );
	  });

	  /**
	   * ### .change(function)
	   *
	   * Asserts that a function changes an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val += 3 };
	   *     var noChangeFn = function() { return 'foo' + 'bar'; }
	   *     expect(fn).to.change(obj, 'val');
	   *     expect(noChangFn).to.not.change(obj, 'val')
	   *
	   * @name change
	   * @alias changes
	   * @alias Change
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @api public
	   */

	  function assertChanges (object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');

	    var initial = object[prop];
	    fn();

	    this.assert(
	      initial !== object[prop]
	      , 'expected .' + prop + ' to change'
	      , 'expected .' + prop + ' to not change'
	    );
	  }

	  Assertion.addChainableMethod('change', assertChanges);
	  Assertion.addChainableMethod('changes', assertChanges);

	  /**
	   * ### .increase(function)
	   *
	   * Asserts that a function increases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 15 };
	   *     expect(fn).to.increase(obj, 'val');
	   *
	   * @name increase
	   * @alias increases
	   * @alias Increase
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @api public
	   */

	  function assertIncreases (object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');

	    var initial = object[prop];
	    fn();

	    this.assert(
	      object[prop] - initial > 0
	      , 'expected .' + prop + ' to increase'
	      , 'expected .' + prop + ' to not increase'
	    );
	  }

	  Assertion.addChainableMethod('increase', assertIncreases);
	  Assertion.addChainableMethod('increases', assertIncreases);

	  /**
	   * ### .decrease(function)
	   *
	   * Asserts that a function decreases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 5 };
	   *     expect(fn).to.decrease(obj, 'val');
	   *
	   * @name decrease
	   * @alias decreases
	   * @alias Decrease
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @api public
	   */

	  function assertDecreases (object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');

	    var initial = object[prop];
	    fn();

	    this.assert(
	      object[prop] - initial < 0
	      , 'expected .' + prop + ' to decrease'
	      , 'expected .' + prop + ' to not decrease'
	    );
	  }

	  Assertion.addChainableMethod('decrease', assertDecreases);
	  Assertion.addChainableMethod('decreases', assertDecreases);

	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * assertion-error
	 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
	 * MIT Licensed
	 */

	/*!
	 * Return a function that will copy properties from
	 * one object to another excluding any originally
	 * listed. Returned function will create a new `{}`.
	 *
	 * @param {String} excluded properties ...
	 * @return {Function}
	 */

	function exclude () {
	  var excludes = [].slice.call(arguments);

	  function excludeProps (res, obj) {
	    Object.keys(obj).forEach(function (key) {
	      if (!~excludes.indexOf(key)) res[key] = obj[key];
	    });
	  }

	  return function extendExclude () {
	    var args = [].slice.call(arguments)
	      , i = 0
	      , res = {};

	    for (; i < args.length; i++) {
	      excludeProps(res, args[i]);
	    }

	    return res;
	  };
	};

	/*!
	 * Primary Exports
	 */

	module.exports = AssertionError;

	/**
	 * ### AssertionError
	 *
	 * An extension of the JavaScript `Error` constructor for
	 * assertion and validation scenarios.
	 *
	 * @param {String} message
	 * @param {Object} properties to include (optional)
	 * @param {callee} start stack function (optional)
	 */

	function AssertionError (message, _props, ssf) {
	  var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON')
	    , props = extend(_props || {});

	  // default values
	  this.message = message || 'Unspecified AssertionError';
	  this.showDiff = false;

	  // copy from properties
	  for (var key in props) {
	    this[key] = props[key];
	  }

	  // capture stack trace
	  ssf = ssf || arguments.callee;
	  if (ssf && Error.captureStackTrace) {
	    Error.captureStackTrace(this, ssf);
	  }
	}

	/*!
	 * Inherit from Error.prototype
	 */

	AssertionError.prototype = Object.create(Error.prototype);

	/*!
	 * Statically set name
	 */

	AssertionError.prototype.name = 'AssertionError';

	/*!
	 * Ensure correct constructor
	 */

	AssertionError.prototype.constructor = AssertionError;

	/**
	 * Allow errors to be converted to JSON for static transfer.
	 *
	 * @param {Boolean} include stack (default: `true`)
	 * @return {Object} object that can be `JSON.stringify`
	 */

	AssertionError.prototype.toJSON = function (stack) {
	  var extend = exclude('constructor', 'toJSON', 'stack')
	    , props = extend({ name: this.name }, this);

	  // include stack if exists and not turned off
	  if (false !== stack && this.stack) {
	    props.stack = this.stack;
	  }

	  return props;
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Main exports
	 */

	var exports = module.exports = {};

	/*!
	 * test utility
	 */

	exports.test = __webpack_require__(21);

	/*!
	 * type utility
	 */

	exports.type = __webpack_require__(23);

	/*!
	 * message utility
	 */

	exports.getMessage = __webpack_require__(24);

	/*!
	 * actual utility
	 */

	exports.getActual = __webpack_require__(25);

	/*!
	 * Inspect util
	 */

	exports.inspect = __webpack_require__(26);

	/*!
	 * Object Display util
	 */

	exports.objDisplay = __webpack_require__(30);

	/*!
	 * Flag utility
	 */

	exports.flag = __webpack_require__(22);

	/*!
	 * Flag transferring utility
	 */

	exports.transferFlags = __webpack_require__(32);

	/*!
	 * Deep equal utility
	 */

	exports.eql = __webpack_require__(33);

	/*!
	 * Deep path value
	 */

	exports.getPathValue = __webpack_require__(37);

	/*!
	 * Deep path info
	 */

	exports.getPathInfo = __webpack_require__(38);

	/*!
	 * Check if a property exists
	 */

	exports.hasProperty = __webpack_require__(39);

	/*!
	 * Function name
	 */

	exports.getName = __webpack_require__(27);

	/*!
	 * add Property
	 */

	exports.addProperty = __webpack_require__(40);

	/*!
	 * add Method
	 */

	exports.addMethod = __webpack_require__(41);

	/*!
	 * overwrite Property
	 */

	exports.overwriteProperty = __webpack_require__(42);

	/*!
	 * overwrite Method
	 */

	exports.overwriteMethod = __webpack_require__(43);

	/*!
	 * Add a chainable method
	 */

	exports.addChainableMethod = __webpack_require__(44);

	/*!
	 * Overwrite chainable method
	 */

	exports.overwriteChainableMethod = __webpack_require__(45);



/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - test utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependancies
	 */

	var flag = __webpack_require__(22);

	/**
	 * # test(object, expression)
	 *
	 * Test and object for expression.
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 */

	module.exports = function (obj, args) {
	  var negate = flag(obj, 'negate')
	    , expr = args[0];
	  return negate ? !expr : expr;
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### flag(object, key, [value])
	 *
	 * Get or set a flag value on an object. If a
	 * value is provided it will be set, else it will
	 * return the currently set value or `undefined` if
	 * the value is not set.
	 *
	 *     utils.flag(this, 'foo', 'bar'); // setter
	 *     utils.flag(this, 'foo'); // getter, returns `bar`
	 *
	 * @param {Object} object constructed Assertion
	 * @param {String} key
	 * @param {Mixed} value (optional)
	 * @name flag
	 * @api private
	 */

	module.exports = function (obj, key, value) {
	  var flags = obj.__flags || (obj.__flags = Object.create(null));
	  if (arguments.length === 3) {
	    flags[key] = value;
	  } else {
	    return flags[key];
	  }
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - type utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Detectable javascript natives
	 */

	var natives = {
	    '[object Arguments]': 'arguments'
	  , '[object Array]': 'array'
	  , '[object Date]': 'date'
	  , '[object Function]': 'function'
	  , '[object Number]': 'number'
	  , '[object RegExp]': 'regexp'
	  , '[object String]': 'string'
	};

	/**
	 * ### type(object)
	 *
	 * Better implementation of `typeof` detection that can
	 * be used cross-browser. Handles the inconsistencies of
	 * Array, `null`, and `undefined` detection.
	 *
	 *     utils.type({}) // 'object'
	 *     utils.type(null) // `null'
	 *     utils.type(undefined) // `undefined`
	 *     utils.type([]) // `array`
	 *
	 * @param {Mixed} object to detect type of
	 * @name type
	 * @api private
	 */

	module.exports = function (obj) {
	  var str = Object.prototype.toString.call(obj);
	  if (natives[str]) return natives[str];
	  if (obj === null) return 'null';
	  if (obj === undefined) return 'undefined';
	  if (obj === Object(obj)) return 'object';
	  return typeof obj;
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - message composition utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependancies
	 */

	var flag = __webpack_require__(22)
	  , getActual = __webpack_require__(25)
	  , inspect = __webpack_require__(26)
	  , objDisplay = __webpack_require__(30);

	/**
	 * ### .getMessage(object, message, negateMessage)
	 *
	 * Construct the error message based on flags
	 * and template tags. Template tags will return
	 * a stringified inspection of the object referenced.
	 *
	 * Message template tags:
	 * - `#{this}` current asserted object
	 * - `#{act}` actual value
	 * - `#{exp}` expected value
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @name getMessage
	 * @api public
	 */

	module.exports = function (obj, args) {
	  var negate = flag(obj, 'negate')
	    , val = flag(obj, 'object')
	    , expected = args[3]
	    , actual = getActual(obj, args)
	    , msg = negate ? args[2] : args[1]
	    , flagMsg = flag(obj, 'message');

	  if(typeof msg === "function") msg = msg();
	  msg = msg || '';
	  msg = msg
	    .replace(/#{this}/g, objDisplay(val))
	    .replace(/#{act}/g, objDisplay(actual))
	    .replace(/#{exp}/g, objDisplay(expected));

	  return flagMsg ? flagMsg + ': ' + msg : msg;
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getActual utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * # getActual(object, [actual])
	 *
	 * Returns the `actual` value for an Assertion
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 */

	module.exports = function (obj, args) {
	  return args.length > 4 ? args[4] : obj._obj;
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// This is (almost) directly from Node.js utils
	// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

	var getName = __webpack_require__(27);
	var getProperties = __webpack_require__(28);
	var getEnumerableProperties = __webpack_require__(29);

	module.exports = inspect;

	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
	 *    properties of objects.
	 * @param {Number} depth Depth in which to descend in object. Default is 2.
	 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
	 *    output. Default is false (no coloring).
	 */
	function inspect(obj, showHidden, depth, colors) {
	  var ctx = {
	    showHidden: showHidden,
	    seen: [],
	    stylize: function (str) { return str; }
	  };
	  return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
	}

	// Returns true if object is a DOM element.
	var isDOMElement = function (object) {
	  if (typeof HTMLElement === 'object') {
	    return object instanceof HTMLElement;
	  } else {
	    return object &&
	      typeof object === 'object' &&
	      object.nodeType === 1 &&
	      typeof object.nodeName === 'string';
	  }
	};

	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (value && typeof value.inspect === 'function' &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes);
	    if (typeof ret !== 'string') {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // If this is a DOM element, try to get the outer HTML.
	  if (isDOMElement(value)) {
	    if ('outerHTML' in value) {
	      return value.outerHTML;
	      // This value does not have an outerHTML attribute,
	      //   it could still be an XML element
	    } else {
	      // Attempt to serialize it
	      try {
	        if (document.xmlVersion) {
	          var xmlSerializer = new XMLSerializer();
	          return xmlSerializer.serializeToString(value);
	        } else {
	          // Firefox 11- do not support outerHTML
	          //   It does, however, support innerHTML
	          //   Use the following to render the element
	          var ns = "http://www.w3.org/1999/xhtml";
	          var container = document.createElementNS(ns, '_');

	          container.appendChild(value.cloneNode(false));
	          html = container.innerHTML
	            .replace('><', '>' + value.innerHTML + '<');
	          container.innerHTML = '';
	          return html;
	        }
	      } catch (err) {
	        // This could be a non-native DOM implementation,
	        //   continue with the normal flow:
	        //   printing the element as if it is an object.
	      }
	    }
	  }

	  // Look up the keys of the object.
	  var visibleKeys = getEnumerableProperties(value);
	  var keys = ctx.showHidden ? getProperties(value) : visibleKeys;

	  // Some type of object without properties can be shortcutted.
	  // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
	  // a `stack` plus `description` property; ignore those for consistency.
	  if (keys.length === 0 || (isError(value) && (
	      (keys.length === 1 && keys[0] === 'stack') ||
	      (keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')
	     ))) {
	    if (typeof value === 'function') {
	      var name = getName(value);
	      var nameSuffix = name ? ': ' + name : '';
	      return ctx.stylize('[Function' + nameSuffix + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (typeof value === 'function') {
	    var name = getName(value);
	    var nameSuffix = name ? ': ' + name : '';
	    base = ' [Function' + nameSuffix + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    return formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  switch (typeof value) {
	    case 'undefined':
	      return ctx.stylize('undefined', 'undefined');

	    case 'string':
	      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                               .replace(/'/g, "\\'")
	                                               .replace(/\\"/g, '"') + '\'';
	      return ctx.stylize(simple, 'string');

	    case 'number':
	      if (value === 0 && (1/value) === -Infinity) {
	        return ctx.stylize('-0', 'number');
	      }
	      return ctx.stylize('' + value, 'number');

	    case 'boolean':
	      return ctx.stylize('' + value, 'boolean');
	  }
	  // For some reason typeof null is "object", so special case here.
	  if (value === null) {
	    return ctx.stylize('null', 'null');
	  }
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (Object.prototype.hasOwnProperty.call(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str;
	  if (value.__lookupGetter__) {
	    if (value.__lookupGetter__(key)) {
	      if (value.__lookupSetter__(key)) {
	        str = ctx.stylize('[Getter/Setter]', 'special');
	      } else {
	        str = ctx.stylize('[Getter]', 'special');
	      }
	    } else {
	      if (value.__lookupSetter__(key)) {
	        str = ctx.stylize('[Setter]', 'special');
	      }
	    }
	  }
	  if (visibleKeys.indexOf(key) < 0) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(value[key]) < 0) {
	      if (recurseTimes === null) {
	        str = formatValue(ctx, value[key], null);
	      } else {
	        str = formatValue(ctx, value[key], recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (typeof name === 'undefined') {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}

	function isArray(ar) {
	  return Array.isArray(ar) ||
	         (typeof ar === 'object' && objectToString(ar) === '[object Array]');
	}

	function isRegExp(re) {
	  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
	}

	function isDate(d) {
	  return typeof d === 'object' && objectToString(d) === '[object Date]';
	}

	function isError(e) {
	  return typeof e === 'object' && objectToString(e) === '[object Error]';
	}

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getName utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * # getName(func)
	 *
	 * Gets the name of a function, in a cross-browser way.
	 *
	 * @param {Function} a function (usually a constructor)
	 */

	module.exports = function (func) {
	  if (func.name) return func.name;

	  var match = /^\s?function ([^(]*)\(/.exec(func);
	  return match && match[1] ? match[1] : "";
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### .getProperties(object)
	 *
	 * This allows the retrieval of property names of an object, enumerable or not,
	 * inherited or not.
	 *
	 * @param {Object} object
	 * @returns {Array}
	 * @name getProperties
	 * @api public
	 */

	module.exports = function getProperties(object) {
	  var result = Object.getOwnPropertyNames(subject);

	  function addProperty(property) {
	    if (result.indexOf(property) === -1) {
	      result.push(property);
	    }
	  }

	  var proto = Object.getPrototypeOf(subject);
	  while (proto !== null) {
	    Object.getOwnPropertyNames(proto).forEach(addProperty);
	    proto = Object.getPrototypeOf(proto);
	  }

	  return result;
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getEnumerableProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### .getEnumerableProperties(object)
	 *
	 * This allows the retrieval of enumerable property names of an object,
	 * inherited or not.
	 *
	 * @param {Object} object
	 * @returns {Array}
	 * @name getEnumerableProperties
	 * @api public
	 */

	module.exports = function getEnumerableProperties(object) {
	  var result = [];
	  for (var name in object) {
	    result.push(name);
	  }
	  return result;
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependancies
	 */

	var inspect = __webpack_require__(26);
	var config = __webpack_require__(31);

	/**
	 * ### .objDisplay (object)
	 *
	 * Determines if an object or an array matches
	 * criteria to be inspected in-line for error
	 * messages or should be truncated.
	 *
	 * @param {Mixed} javascript object to inspect
	 * @name objDisplay
	 * @api public
	 */

	module.exports = function (obj) {
	  var str = inspect(obj)
	    , type = Object.prototype.toString.call(obj);

	  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
	    if (type === '[object Function]') {
	      return !obj.name || obj.name === ''
	        ? '[Function]'
	        : '[Function: ' + obj.name + ']';
	    } else if (type === '[object Array]') {
	      return '[ Array(' + obj.length + ') ]';
	    } else if (type === '[object Object]') {
	      var keys = Object.keys(obj)
	        , kstr = keys.length > 2
	          ? keys.splice(0, 2).join(', ') + ', ...'
	          : keys.join(', ');
	      return '{ Object (' + kstr + ') }';
	    } else {
	      return str;
	    }
	  } else {
	    return str;
	  }
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {

	  /**
	   * ### config.includeStack
	   *
	   * User configurable property, influences whether stack trace
	   * is included in Assertion error message. Default of false
	   * suppresses stack trace in the error message.
	   *
	   *     chai.config.includeStack = true;  // enable stack on error
	   *
	   * @param {Boolean}
	   * @api public
	   */

	   includeStack: false,

	  /**
	   * ### config.showDiff
	   *
	   * User configurable property, influences whether or not
	   * the `showDiff` flag should be included in the thrown
	   * AssertionErrors. `false` will always be `false`; `true`
	   * will be true when the assertion has requested a diff
	   * be shown.
	   *
	   * @param {Boolean}
	   * @api public
	   */

	  showDiff: true,

	  /**
	   * ### config.truncateThreshold
	   *
	   * User configurable property, sets length threshold for actual and
	   * expected values in assertion errors. If this threshold is exceeded, for
	   * example for large data structures, the value is replaced with something
	   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
	   *
	   * Set it to zero if you want to disable truncating altogether.
	   *
	   * This is especially userful when doing assertions on arrays: having this
	   * set to a reasonable large value makes the failure messages readily
	   * inspectable.
	   *
	   *     chai.config.truncateThreshold = 0;  // disable truncating
	   *
	   * @param {Number}
	   * @api public
	   */

	  truncateThreshold: 40

	};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - transferFlags utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### transferFlags(assertion, object, includeAll = true)
	 *
	 * Transfer all the flags for `assertion` to `object`. If
	 * `includeAll` is set to `false`, then the base Chai
	 * assertion flags (namely `object`, `ssfi`, and `message`)
	 * will not be transferred.
	 *
	 *
	 *     var newAssertion = new Assertion();
	 *     utils.transferFlags(assertion, newAssertion);
	 *
	 *     var anotherAsseriton = new Assertion(myObj);
	 *     utils.transferFlags(assertion, anotherAssertion, false);
	 *
	 * @param {Assertion} assertion the assertion to transfer the flags from
	 * @param {Object} object the object to transfer the flags to; usually a new assertion
	 * @param {Boolean} includeAll
	 * @name transferFlags
	 * @api private
	 */

	module.exports = function (assertion, object, includeAll) {
	  var flags = assertion.__flags || (assertion.__flags = Object.create(null));

	  if (!object.__flags) {
	    object.__flags = Object.create(null);
	  }

	  includeAll = arguments.length === 3 ? includeAll : true;

	  for (var flag in flags) {
	    if (includeAll ||
	        (flag !== 'object' && flag !== 'ssfi' && flag != 'message')) {
	      object.__flags[flag] = flags[flag];
	    }
	  }
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(34);


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * deep-eql
	 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependencies
	 */

	var type = __webpack_require__(35);

	/*!
	 * Buffer.isBuffer browser shim
	 */

	var Buffer;
	try { Buffer = __webpack_require__(12).Buffer; }
	catch(ex) {
	  Buffer = {};
	  Buffer.isBuffer = function() { return false; }
	}

	/*!
	 * Primary Export
	 */

	module.exports = deepEqual;

	/**
	 * Assert super-strict (egal) equality between
	 * two objects of any type.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @param {Array} memoised (optional)
	 * @return {Boolean} equal match
	 */

	function deepEqual(a, b, m) {
	  if (sameValue(a, b)) {
	    return true;
	  } else if ('date' === type(a)) {
	    return dateEqual(a, b);
	  } else if ('regexp' === type(a)) {
	    return regexpEqual(a, b);
	  } else if (Buffer.isBuffer(a)) {
	    return bufferEqual(a, b);
	  } else if ('arguments' === type(a)) {
	    return argumentsEqual(a, b, m);
	  } else if (!typeEqual(a, b)) {
	    return false;
	  } else if (('object' !== type(a) && 'object' !== type(b))
	  && ('array' !== type(a) && 'array' !== type(b))) {
	    return sameValue(a, b);
	  } else {
	    return objectEqual(a, b, m);
	  }
	}

	/*!
	 * Strict (egal) equality test. Ensures that NaN always
	 * equals NaN and `-0` does not equal `+0`.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} equal match
	 */

	function sameValue(a, b) {
	  if (a === b) return a !== 0 || 1 / a === 1 / b;
	  return a !== a && b !== b;
	}

	/*!
	 * Compare the types of two given objects and
	 * return if they are equal. Note that an Array
	 * has a type of `array` (not `object`) and arguments
	 * have a type of `arguments` (not `array`/`object`).
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */

	function typeEqual(a, b) {
	  return type(a) === type(b);
	}

	/*!
	 * Compare two Date objects by asserting that
	 * the time values are equal using `saveValue`.
	 *
	 * @param {Date} a
	 * @param {Date} b
	 * @return {Boolean} result
	 */

	function dateEqual(a, b) {
	  if ('date' !== type(b)) return false;
	  return sameValue(a.getTime(), b.getTime());
	}

	/*!
	 * Compare two regular expressions by converting them
	 * to string and checking for `sameValue`.
	 *
	 * @param {RegExp} a
	 * @param {RegExp} b
	 * @return {Boolean} result
	 */

	function regexpEqual(a, b) {
	  if ('regexp' !== type(b)) return false;
	  return sameValue(a.toString(), b.toString());
	}

	/*!
	 * Assert deep equality of two `arguments` objects.
	 * Unfortunately, these must be sliced to arrays
	 * prior to test to ensure no bad behavior.
	 *
	 * @param {Arguments} a
	 * @param {Arguments} b
	 * @param {Array} memoize (optional)
	 * @return {Boolean} result
	 */

	function argumentsEqual(a, b, m) {
	  if ('arguments' !== type(b)) return false;
	  a = [].slice.call(a);
	  b = [].slice.call(b);
	  return deepEqual(a, b, m);
	}

	/*!
	 * Get enumerable properties of a given object.
	 *
	 * @param {Object} a
	 * @return {Array} property names
	 */

	function enumerable(a) {
	  var res = [];
	  for (var key in a) res.push(key);
	  return res;
	}

	/*!
	 * Simple equality for flat iterable objects
	 * such as Arrays or Node.js buffers.
	 *
	 * @param {Iterable} a
	 * @param {Iterable} b
	 * @return {Boolean} result
	 */

	function iterableEqual(a, b) {
	  if (a.length !==  b.length) return false;

	  var i = 0;
	  var match = true;

	  for (; i < a.length; i++) {
	    if (a[i] !== b[i]) {
	      match = false;
	      break;
	    }
	  }

	  return match;
	}

	/*!
	 * Extension to `iterableEqual` specifically
	 * for Node.js Buffers.
	 *
	 * @param {Buffer} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */

	function bufferEqual(a, b) {
	  if (!Buffer.isBuffer(b)) return false;
	  return iterableEqual(a, b);
	}

	/*!
	 * Block for `objectEqual` ensuring non-existing
	 * values don't get in.
	 *
	 * @param {Mixed} object
	 * @return {Boolean} result
	 */

	function isValue(a) {
	  return a !== null && a !== undefined;
	}

	/*!
	 * Recursively check the equality of two objects.
	 * Once basic sameness has been established it will
	 * defer to `deepEqual` for each enumerable key
	 * in the object.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */

	function objectEqual(a, b, m) {
	  if (!isValue(a) || !isValue(b)) {
	    return false;
	  }

	  if (a.prototype !== b.prototype) {
	    return false;
	  }

	  var i;
	  if (m) {
	    for (i = 0; i < m.length; i++) {
	      if ((m[i][0] === a && m[i][1] === b)
	      ||  (m[i][0] === b && m[i][1] === a)) {
	        return true;
	      }
	    }
	  } else {
	    m = [];
	  }

	  try {
	    var ka = enumerable(a);
	    var kb = enumerable(b);
	  } catch (ex) {
	    return false;
	  }

	  ka.sort();
	  kb.sort();

	  if (!iterableEqual(ka, kb)) {
	    return false;
	  }

	  m.push([ a, b ]);

	  var key;
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], m)) {
	      return false;
	    }
	  }

	  return true;
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(36);


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * type-detect
	 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Primary Exports
	 */

	var exports = module.exports = getType;

	/*!
	 * Detectable javascript natives
	 */

	var natives = {
	    '[object Array]': 'array'
	  , '[object RegExp]': 'regexp'
	  , '[object Function]': 'function'
	  , '[object Arguments]': 'arguments'
	  , '[object Date]': 'date'
	};

	/**
	 * ### typeOf (obj)
	 *
	 * Use several different techniques to determine
	 * the type of object being tested.
	 *
	 *
	 * @param {Mixed} object
	 * @return {String} object type
	 * @api public
	 */

	function getType (obj) {
	  var str = Object.prototype.toString.call(obj);
	  if (natives[str]) return natives[str];
	  if (obj === null) return 'null';
	  if (obj === undefined) return 'undefined';
	  if (obj === Object(obj)) return 'object';
	  return typeof obj;
	}

	exports.Library = Library;

	/**
	 * ### Library
	 *
	 * Create a repository for custom type detection.
	 *
	 * ```js
	 * var lib = new type.Library;
	 * ```
	 *
	 */

	function Library () {
	  this.tests = {};
	}

	/**
	 * #### .of (obj)
	 *
	 * Expose replacement `typeof` detection to the library.
	 *
	 * ```js
	 * if ('string' === lib.of('hello world')) {
	 *   // ...
	 * }
	 * ```
	 *
	 * @param {Mixed} object to test
	 * @return {String} type
	 */

	Library.prototype.of = getType;

	/**
	 * #### .define (type, test)
	 *
	 * Add a test to for the `.test()` assertion.
	 *
	 * Can be defined as a regular expression:
	 *
	 * ```js
	 * lib.define('int', /^[0-9]+$/);
	 * ```
	 *
	 * ... or as a function:
	 *
	 * ```js
	 * lib.define('bln', function (obj) {
	 *   if ('boolean' === lib.of(obj)) return true;
	 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
	 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
	 *   return !! ~blns.indexOf(obj);
	 * });
	 * ```
	 *
	 * @param {String} type
	 * @param {RegExp|Function} test
	 * @api public
	 */

	Library.prototype.define = function (type, test) {
	  if (arguments.length === 1) return this.tests[type];
	  this.tests[type] = test;
	  return this;
	};

	/**
	 * #### .test (obj, test)
	 *
	 * Assert that an object is of type. Will first
	 * check natives, and if that does not pass it will
	 * use the user defined custom tests.
	 *
	 * ```js
	 * assert(lib.test('1', 'int'));
	 * assert(lib.test('yes', 'bln'));
	 * ```
	 *
	 * @param {Mixed} object
	 * @param {String} type
	 * @return {Boolean} result
	 * @api public
	 */

	Library.prototype.test = function (obj, type) {
	  if (type === getType(obj)) return true;
	  var test = this.tests[type];

	  if (test && 'regexp' === getType(test)) {
	    return test.test(obj);
	  } else if (test && 'function' === getType(test)) {
	    return test(obj);
	  } else {
	    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
	  }
	};


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getPathValue utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * @see https://github.com/logicalparadox/filtr
	 * MIT Licensed
	 */

	var getPathInfo = __webpack_require__(38);

	/**
	 * ### .getPathValue(path, object)
	 *
	 * This allows the retrieval of values in an
	 * object given a string path.
	 *
	 *     var obj = {
	 *         prop1: {
	 *             arr: ['a', 'b', 'c']
	 *           , str: 'Hello'
	 *         }
	 *       , prop2: {
	 *             arr: [ { nested: 'Universe' } ]
	 *           , str: 'Hello again!'
	 *         }
	 *     }
	 *
	 * The following would be the results.
	 *
	 *     getPathValue('prop1.str', obj); // Hello
	 *     getPathValue('prop1.att[2]', obj); // b
	 *     getPathValue('prop2.arr[0].nested', obj); // Universe
	 *
	 * @param {String} path
	 * @param {Object} object
	 * @returns {Object} value or `undefined`
	 * @name getPathValue
	 * @api public
	 */
	module.exports = function(path, obj) {
	  var info = getPathInfo(path, obj);
	  return info.value;
	}; 


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getPathInfo utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var hasProperty = __webpack_require__(39);

	/**
	 * ### .getPathInfo(path, object)
	 *
	 * This allows the retrieval of property info in an
	 * object given a string path.
	 *
	 * The path info consists of an object with the
	 * following properties:
	 *
	 * * parent - The parent object of the property referenced by `path`
	 * * name - The name of the final property, a number if it was an array indexer
	 * * value - The value of the property, if it exists, otherwise `undefined`
	 * * exists - Whether the property exists or not
	 *
	 * @param {String} path
	 * @param {Object} object
	 * @returns {Object} info
	 * @name getPathInfo
	 * @api public
	 */

	module.exports = function getPathInfo(path, obj) {
	  var parsed = parsePath(path),
	      last = parsed[parsed.length - 1];

	  var info = {
	    parent: parsed.length > 1 ? _getPathValue(parsed, obj, parsed.length - 1) : obj,
	    name: last.p || last.i,
	    value: _getPathValue(parsed, obj),
	  };
	  info.exists = hasProperty(info.name, info.parent);

	  return info;
	};


	/*!
	 * ## parsePath(path)
	 *
	 * Helper function used to parse string object
	 * paths. Use in conjunction with `_getPathValue`.
	 *
	 *      var parsed = parsePath('myobject.property.subprop');
	 *
	 * ### Paths:
	 *
	 * * Can be as near infinitely deep and nested
	 * * Arrays are also valid using the formal `myobject.document[3].property`.
	 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
	 *
	 * @param {String} path
	 * @returns {Object} parsed
	 * @api private
	 */

	function parsePath (path) {
	  var str = path.replace(/([^\\])\[/g, '$1.[')
	    , parts = str.match(/(\\\.|[^.]+?)+/g);
	  return parts.map(function (value) {
	    var re = /^\[(\d+)\]$/
	      , mArr = re.exec(value);
	    if (mArr) return { i: parseFloat(mArr[1]) };
	    else return { p: value.replace(/\\([.\[\]])/g, '$1') };
	  });
	}


	/*!
	 * ## _getPathValue(parsed, obj)
	 *
	 * Helper companion function for `.parsePath` that returns
	 * the value located at the parsed address.
	 *
	 *      var value = getPathValue(parsed, obj);
	 *
	 * @param {Object} parsed definition from `parsePath`.
	 * @param {Object} object to search against
	 * @param {Number} object to search against
	 * @returns {Object|Undefined} value
	 * @api private
	 */

	function _getPathValue (parsed, obj, index) {
	  var tmp = obj
	    , res;

	  index = (index === undefined ? parsed.length : index);

	  for (var i = 0, l = index; i < l; i++) {
	    var part = parsed[i];
	    if (tmp) {
	      if ('undefined' !== typeof part.p)
	        tmp = tmp[part.p];
	      else if ('undefined' !== typeof part.i)
	        tmp = tmp[part.i];
	      if (i == (l - 1)) res = tmp;
	    } else {
	      res = undefined;
	    }
	  }
	  return res;
	}


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - hasProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var type = __webpack_require__(23);

	/**
	 * ### .hasProperty(object, name)
	 *
	 * This allows checking whether an object has
	 * named property or numeric array index.
	 *
	 * Basically does the same thing as the `in`
	 * operator but works properly with natives
	 * and null/undefined values.
	 *
	 *     var obj = {
	 *         arr: ['a', 'b', 'c']
	 *       , str: 'Hello'
	 *     }
	 *
	 * The following would be the results.
	 *
	 *     hasProperty('str', obj);  // true
	 *     hasProperty('constructor', obj);  // true
	 *     hasProperty('bar', obj);  // false
	 *     
	 *     hasProperty('length', obj.str); // true
	 *     hasProperty(1, obj.str);  // true
	 *     hasProperty(5, obj.str);  // false
	 *
	 *     hasProperty('length', obj.arr);  // true
	 *     hasProperty(2, obj.arr);  // true
	 *     hasProperty(3, obj.arr);  // false
	 *
	 * @param {Objuect} object
	 * @param {String|Number} name
	 * @returns {Boolean} whether it exists
	 * @name getPathInfo
	 * @api public
	 */

	var literals = {
	    'number': Number
	  , 'string': String
	};

	module.exports = function hasProperty(name, obj) {
	  var ot = type(obj);

	  // Bad Object, obviously no props at all
	  if(ot === 'null' || ot === 'undefined')
	    return false;

	  // The `in` operator does not work with certain literals
	  // box these before the check
	  if(literals[ot] && typeof obj !== 'object')
	    obj = new literals[ot](obj);

	  return name in obj;
	};


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### addProperty (ctx, name, getter)
	 *
	 * Adds a property to the prototype of an object.
	 *
	 *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.instanceof(Foo);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addProperty('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.be.foo;
	 *
	 * @param {Object} ctx object to which the property is added
	 * @param {String} name of property to add
	 * @param {Function} getter function to be used for name
	 * @name addProperty
	 * @api public
	 */

	module.exports = function (ctx, name, getter) {
	  Object.defineProperty(ctx, name,
	    { get: function () {
	        var result = getter.call(this);
	        return result === undefined ? this : result;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var config = __webpack_require__(31);

	/**
	 * ### .addMethod (ctx, name, method)
	 *
	 * Adds a method to the prototype of an object.
	 *
	 *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.equal(str);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addMethod('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(fooStr).to.be.foo('bar');
	 *
	 * @param {Object} ctx object to which the method is added
	 * @param {String} name of method to add
	 * @param {Function} method function to be used for name
	 * @name addMethod
	 * @api public
	 */
	var flag = __webpack_require__(22);

	module.exports = function (ctx, name, method) {
	  ctx[name] = function () {
	    var old_ssfi = flag(this, 'ssfi');
	    if (old_ssfi && config.includeStack === false)
	      flag(this, 'ssfi', ctx[name]);
	    var result = method.apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - overwriteProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### overwriteProperty (ctx, name, fn)
	 *
	 * Overwites an already existing property getter and provides
	 * access to previous value. Must return function to use as getter.
	 *
	 *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
	 *       return function () {
	 *         var obj = utils.flag(this, 'object');
	 *         if (obj instanceof Foo) {
	 *           new chai.Assertion(obj.name).to.equal('bar');
	 *         } else {
	 *           _super.call(this);
	 *         }
	 *       }
	 *     });
	 *
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteProperty('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.be.ok;
	 *
	 * @param {Object} ctx object whose property is to be overwritten
	 * @param {String} name of property to overwrite
	 * @param {Function} getter function that returns a getter function to be used for name
	 * @name overwriteProperty
	 * @api public
	 */

	module.exports = function (ctx, name, getter) {
	  var _get = Object.getOwnPropertyDescriptor(ctx, name)
	    , _super = function () {};

	  if (_get && 'function' === typeof _get.get)
	    _super = _get.get

	  Object.defineProperty(ctx, name,
	    { get: function () {
	        var result = getter(_super).call(this);
	        return result === undefined ? this : result;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - overwriteMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### overwriteMethod (ctx, name, fn)
	 *
	 * Overwites an already existing method and provides
	 * access to previous function. Must return function
	 * to be used for name.
	 *
	 *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
	 *       return function (str) {
	 *         var obj = utils.flag(this, 'object');
	 *         if (obj instanceof Foo) {
	 *           new chai.Assertion(obj.value).to.equal(str);
	 *         } else {
	 *           _super.apply(this, arguments);
	 *         }
	 *       }
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteMethod('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.equal('bar');
	 *
	 * @param {Object} ctx object whose method is to be overwritten
	 * @param {String} name of method to overwrite
	 * @param {Function} method function that returns a function to be used for name
	 * @name overwriteMethod
	 * @api public
	 */

	module.exports = function (ctx, name, method) {
	  var _method = ctx[name]
	    , _super = function () { return this; };

	  if (_method && 'function' === typeof _method)
	    _super = _method;

	  ctx[name] = function () {
	    var result = method(_super).apply(this, arguments);
	    return result === undefined ? this : result;
	  }
	};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addChainingMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependencies
	 */

	var transferFlags = __webpack_require__(32);
	var flag = __webpack_require__(22);
	var config = __webpack_require__(31);

	/*!
	 * Module variables
	 */

	// Check whether `__proto__` is supported
	var hasProtoSupport = '__proto__' in Object;

	// Without `__proto__` support, this module will need to add properties to a function.
	// However, some Function.prototype methods cannot be overwritten,
	// and there seems no easy cross-platform way to detect them (@see chaijs/chai/issues/69).
	var excludeNames = /^(?:length|name|arguments|caller)$/;

	// Cache `Function` properties
	var call  = Function.prototype.call,
	    apply = Function.prototype.apply;

	/**
	 * ### addChainableMethod (ctx, name, method, chainingBehavior)
	 *
	 * Adds a method to an object, such that the method can also be chained.
	 *
	 *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.equal(str);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
	 *
	 * The result can then be used as both a method assertion, executing both `method` and
	 * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
	 *
	 *     expect(fooStr).to.be.foo('bar');
	 *     expect(fooStr).to.be.foo.equal('foo');
	 *
	 * @param {Object} ctx object to which the method is added
	 * @param {String} name of method to add
	 * @param {Function} method function to be used for `name`, when called
	 * @param {Function} chainingBehavior function to be called every time the property is accessed
	 * @name addChainableMethod
	 * @api public
	 */

	module.exports = function (ctx, name, method, chainingBehavior) {
	  if (typeof chainingBehavior !== 'function') {
	    chainingBehavior = function () { };
	  }

	  var chainableBehavior = {
	      method: method
	    , chainingBehavior: chainingBehavior
	  };

	  // save the methods so we can overwrite them later, if we need to.
	  if (!ctx.__methods) {
	    ctx.__methods = {};
	  }
	  ctx.__methods[name] = chainableBehavior;

	  Object.defineProperty(ctx, name,
	    { get: function () {
	        chainableBehavior.chainingBehavior.call(this);

	        var assert = function assert() {
	          var old_ssfi = flag(this, 'ssfi');
	          if (old_ssfi && config.includeStack === false)
	            flag(this, 'ssfi', assert);
	          var result = chainableBehavior.method.apply(this, arguments);
	          return result === undefined ? this : result;
	        };

	        // Use `__proto__` if available
	        if (hasProtoSupport) {
	          // Inherit all properties from the object by replacing the `Function` prototype
	          var prototype = assert.__proto__ = Object.create(this);
	          // Restore the `call` and `apply` methods from `Function`
	          prototype.call = call;
	          prototype.apply = apply;
	        }
	        // Otherwise, redefine all properties (slow!)
	        else {
	          var asserterNames = Object.getOwnPropertyNames(ctx);
	          asserterNames.forEach(function (asserterName) {
	            if (!excludeNames.test(asserterName)) {
	              var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
	              Object.defineProperty(assert, asserterName, pd);
	            }
	          });
	        }

	        transferFlags(this, assert);
	        return assert;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - overwriteChainableMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### overwriteChainableMethod (ctx, name, method, chainingBehavior)
	 *
	 * Overwites an already existing chainable method
	 * and provides access to the previous function or
	 * property.  Must return functions to be used for
	 * name.
	 *
	 *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'length',
	 *       function (_super) {
	 *       }
	 *     , function (_super) {
	 *       }
	 *     );
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.have.length(3);
	 *     expect(myFoo).to.have.length.above(3);
	 *
	 * @param {Object} ctx object whose method / property is to be overwritten
	 * @param {String} name of method / property to overwrite
	 * @param {Function} method function that returns a function to be used for name
	 * @param {Function} chainingBehavior function that returns a function to be used for property
	 * @name overwriteChainableMethod
	 * @api public
	 */

	module.exports = function (ctx, name, method, chainingBehavior) {
	  var chainableBehavior = ctx.__methods[name];

	  var _chainingBehavior = chainableBehavior.chainingBehavior;
	  chainableBehavior.chainingBehavior = function () {
	    var result = chainingBehavior(_chainingBehavior).call(this);
	    return result === undefined ? this : result;
	  };

	  var _method = chainableBehavior.method;
	  chainableBehavior.method = function () {
	    var result = method(_method).apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var config = __webpack_require__(31);

	module.exports = function (_chai, util) {
	  /*!
	   * Module dependencies.
	   */

	  var AssertionError = _chai.AssertionError
	    , flag = util.flag;

	  /*!
	   * Module export.
	   */

	  _chai.Assertion = Assertion;

	  /*!
	   * Assertion Constructor
	   *
	   * Creates object for chaining.
	   *
	   * @api private
	   */

	  function Assertion (obj, msg, stack) {
	    flag(this, 'ssfi', stack || arguments.callee);
	    flag(this, 'object', obj);
	    flag(this, 'message', msg);
	  }

	  Object.defineProperty(Assertion, 'includeStack', {
	    get: function() {
	      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
	      return config.includeStack;
	    },
	    set: function(value) {
	      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
	      config.includeStack = value;
	    }
	  });

	  Object.defineProperty(Assertion, 'showDiff', {
	    get: function() {
	      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
	      return config.showDiff;
	    },
	    set: function(value) {
	      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
	      config.showDiff = value;
	    }
	  });

	  Assertion.addProperty = function (name, fn) {
	    util.addProperty(this.prototype, name, fn);
	  };

	  Assertion.addMethod = function (name, fn) {
	    util.addMethod(this.prototype, name, fn);
	  };

	  Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
	    util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
	  };

	  Assertion.overwriteProperty = function (name, fn) {
	    util.overwriteProperty(this.prototype, name, fn);
	  };

	  Assertion.overwriteMethod = function (name, fn) {
	    util.overwriteMethod(this.prototype, name, fn);
	  };

	  Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
	    util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
	  };

	  /*!
	   * ### .assert(expression, message, negateMessage, expected, actual)
	   *
	   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
	   *
	   * @name assert
	   * @param {Philosophical} expression to be tested
	   * @param {String or Function} message or function that returns message to display if expression fails
	   * @param {String or Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
	   * @param {Mixed} expected value (remember to check for negation)
	   * @param {Mixed} actual (optional) will default to `this.obj`
	   * @param {Boolean} showDiff (optional) when set to `true`, assert will display a diff in addition to the message if expression fails
	   * @api private
	   */

	  Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
	    var ok = util.test(this, arguments);
	    if (true !== showDiff) showDiff = false;
	    if (true !== config.showDiff) showDiff = false;

	    if (!ok) {
	      var msg = util.getMessage(this, arguments)
	        , actual = util.getActual(this, arguments);
	      throw new AssertionError(msg, {
	          actual: actual
	        , expected: expected
	        , showDiff: showDiff
	      }, (config.includeStack) ? this.assert : flag(this, 'ssfi'));
	    }
	  };

	  /*!
	   * ### ._obj
	   *
	   * Quick reference to stored `actual` value for plugin developers.
	   *
	   * @api private
	   */

	  Object.defineProperty(Assertion.prototype, '_obj',
	    { get: function () {
	        return flag(this, 'object');
	      }
	    , set: function (val) {
	        flag(this, 'object', val);
	      }
	  });
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	module.exports = function (chai, util) {
	  chai.expect = function (val, message) {
	    return new chai.Assertion(val, message);
	  };

	  /**
	   * ### .fail(actual, expected, [message], [operator])
	   *
	   * Throw a failure.
	   *
	   * @name fail
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @param {String} operator
	   * @api public
	   */

	  chai.expect.fail = function (actual, expected, message, operator) {
	    message = message || 'expect.fail()';
	    throw new chai.AssertionError(message, {
	        actual: actual
	      , expected: expected
	      , operator: operator
	    }, chai.expect.fail);
	  };
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	module.exports = function (chai, util) {
	  var Assertion = chai.Assertion;

	  function loadShould () {
	    // explicitly define this method as function as to have it's name to include as `ssfi`
	    function shouldGetter() {
	      if (this instanceof String || this instanceof Number || this instanceof Boolean ) {
	        return new Assertion(this.valueOf(), null, shouldGetter);
	      }
	      return new Assertion(this, null, shouldGetter);
	    }
	    function shouldSetter(value) {
	      // See https://github.com/chaijs/chai/issues/86: this makes
	      // `whatever.should = someValue` actually set `someValue`, which is
	      // especially useful for `global.should = require('chai').should()`.
	      //
	      // Note that we have to use [[DefineProperty]] instead of [[Put]]
	      // since otherwise we would trigger this very setter!
	      Object.defineProperty(this, 'should', {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	    }
	    // modify Object.prototype to have `should`
	    Object.defineProperty(Object.prototype, 'should', {
	      set: shouldSetter
	      , get: shouldGetter
	      , configurable: true
	    });

	    var should = {};

	    /**
	     * ### .fail(actual, expected, [message], [operator])
	     *
	     * Throw a failure.
	     *
	     * @name fail
	     * @param {Mixed} actual
	     * @param {Mixed} expected
	     * @param {String} message
	     * @param {String} operator
	     * @api public
	     */

	    should.fail = function (actual, expected, message, operator) {
	      message = message || 'should.fail()';
	      throw new chai.AssertionError(message, {
	          actual: actual
	        , expected: expected
	        , operator: operator
	      }, should.fail);
	    };

	    should.equal = function (val1, val2, msg) {
	      new Assertion(val1, msg).to.equal(val2);
	    };

	    should.Throw = function (fn, errt, errs, msg) {
	      new Assertion(fn, msg).to.Throw(errt, errs);
	    };

	    should.exist = function (val, msg) {
	      new Assertion(val, msg).to.exist;
	    }

	    // negation
	    should.not = {}

	    should.not.equal = function (val1, val2, msg) {
	      new Assertion(val1, msg).to.not.equal(val2);
	    };

	    should.not.Throw = function (fn, errt, errs, msg) {
	      new Assertion(fn, msg).to.not.Throw(errt, errs);
	    };

	    should.not.exist = function (val, msg) {
	      new Assertion(val, msg).to.not.exist;
	    }

	    should['throw'] = should['Throw'];
	    should.not['throw'] = should.not['Throw'];

	    return should;
	  };

	  chai.should = loadShould;
	  chai.Should = loadShould;
	};


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */


	module.exports = function (chai, util) {

	  /*!
	   * Chai dependencies.
	   */

	  var Assertion = chai.Assertion
	    , flag = util.flag;

	  /*!
	   * Module export.
	   */

	  /**
	   * ### assert(expression, message)
	   *
	   * Write your own test expressions.
	   *
	   *     assert('foo' !== 'bar', 'foo is not bar');
	   *     assert(Array.isArray([]), 'empty arrays are arrays');
	   *
	   * @param {Mixed} expression to test for truthiness
	   * @param {String} message to display on error
	   * @name assert
	   * @api public
	   */

	  var assert = chai.assert = function (express, errmsg) {
	    var test = new Assertion(null, null, chai.assert);
	    test.assert(
	        express
	      , errmsg
	      , '[ negation message unavailable ]'
	    );
	  };

	  /**
	   * ### .fail(actual, expected, [message], [operator])
	   *
	   * Throw a failure. Node.js `assert` module-compatible.
	   *
	   * @name fail
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @param {String} operator
	   * @api public
	   */

	  assert.fail = function (actual, expected, message, operator) {
	    message = message || 'assert.fail()';
	    throw new chai.AssertionError(message, {
	        actual: actual
	      , expected: expected
	      , operator: operator
	    }, assert.fail);
	  };

	  /**
	   * ### .ok(object, [message])
	   *
	   * Asserts that `object` is truthy.
	   *
	   *     assert.ok('everything', 'everything is ok');
	   *     assert.ok(false, 'this will fail');
	   *
	   * @name ok
	   * @param {Mixed} object to test
	   * @param {String} message
	   * @api public
	   */

	  assert.ok = function (val, msg) {
	    new Assertion(val, msg).is.ok;
	  };

	  /**
	   * ### .notOk(object, [message])
	   *
	   * Asserts that `object` is falsy.
	   *
	   *     assert.notOk('everything', 'this will fail');
	   *     assert.notOk(false, 'this will pass');
	   *
	   * @name notOk
	   * @param {Mixed} object to test
	   * @param {String} message
	   * @api public
	   */

	  assert.notOk = function (val, msg) {
	    new Assertion(val, msg).is.not.ok;
	  };

	  /**
	   * ### .equal(actual, expected, [message])
	   *
	   * Asserts non-strict equality (`==`) of `actual` and `expected`.
	   *
	   *     assert.equal(3, '3', '== coerces values to strings');
	   *
	   * @name equal
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */

	  assert.equal = function (act, exp, msg) {
	    var test = new Assertion(act, msg, assert.equal);

	    test.assert(
	        exp == flag(test, 'object')
	      , 'expected #{this} to equal #{exp}'
	      , 'expected #{this} to not equal #{act}'
	      , exp
	      , act
	    );
	  };

	  /**
	   * ### .notEqual(actual, expected, [message])
	   *
	   * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
	   *
	   *     assert.notEqual(3, 4, 'these numbers are not equal');
	   *
	   * @name notEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */

	  assert.notEqual = function (act, exp, msg) {
	    var test = new Assertion(act, msg, assert.notEqual);

	    test.assert(
	        exp != flag(test, 'object')
	      , 'expected #{this} to not equal #{exp}'
	      , 'expected #{this} to equal #{act}'
	      , exp
	      , act
	    );
	  };

	  /**
	   * ### .strictEqual(actual, expected, [message])
	   *
	   * Asserts strict equality (`===`) of `actual` and `expected`.
	   *
	   *     assert.strictEqual(true, true, 'these booleans are strictly equal');
	   *
	   * @name strictEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */

	  assert.strictEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.equal(exp);
	  };

	  /**
	   * ### .notStrictEqual(actual, expected, [message])
	   *
	   * Asserts strict inequality (`!==`) of `actual` and `expected`.
	   *
	   *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
	   *
	   * @name notStrictEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */

	  assert.notStrictEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.not.equal(exp);
	  };

	  /**
	   * ### .deepEqual(actual, expected, [message])
	   *
	   * Asserts that `actual` is deeply equal to `expected`.
	   *
	   *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
	   *
	   * @name deepEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */

	  assert.deepEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.eql(exp);
	  };

	  /**
	   * ### .notDeepEqual(actual, expected, [message])
	   *
	   * Assert that `actual` is not deeply equal to `expected`.
	   *
	   *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
	   *
	   * @name notDeepEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */

	  assert.notDeepEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.not.eql(exp);
	  };

	  /**
	   * ### .isTrue(value, [message])
	   *
	   * Asserts that `value` is true.
	   *
	   *     var teaServed = true;
	   *     assert.isTrue(teaServed, 'the tea has been served');
	   *
	   * @name isTrue
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isAbove = function (val, abv, msg) {
	    new Assertion(val, msg).to.be.above(abv);
	  };

	   /**
	   * ### .isAbove(valueToCheck, valueToBeAbove, [message])
	   *
	   * Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`
	   *
	   *     assert.isAbove(5, 2, '5 is strictly greater than 2');
	   *
	   * @name isAbove
	   * @param {Mixed} valueToCheck
	   * @param {Mixed} valueToBeAbove
	   * @param {String} message
	   * @api public
	   */

	  assert.isBelow = function (val, blw, msg) {
	    new Assertion(val, msg).to.be.below(blw);
	  };

	   /**
	   * ### .isBelow(valueToCheck, valueToBeBelow, [message])
	   *
	   * Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`
	   *
	   *     assert.isBelow(3, 6, '3 is strictly less than 6');
	   *
	   * @name isBelow
	   * @param {Mixed} valueToCheck
	   * @param {Mixed} valueToBeBelow
	   * @param {String} message
	   * @api public
	   */

	  assert.isTrue = function (val, msg) {
	    new Assertion(val, msg).is['true'];
	  };

	  /**
	   * ### .isFalse(value, [message])
	   *
	   * Asserts that `value` is false.
	   *
	   *     var teaServed = false;
	   *     assert.isFalse(teaServed, 'no tea yet? hmm...');
	   *
	   * @name isFalse
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isFalse = function (val, msg) {
	    new Assertion(val, msg).is['false'];
	  };

	  /**
	   * ### .isNull(value, [message])
	   *
	   * Asserts that `value` is null.
	   *
	   *     assert.isNull(err, 'there was no error');
	   *
	   * @name isNull
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isNull = function (val, msg) {
	    new Assertion(val, msg).to.equal(null);
	  };

	  /**
	   * ### .isNotNull(value, [message])
	   *
	   * Asserts that `value` is not null.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotNull(tea, 'great, time for tea!');
	   *
	   * @name isNotNull
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isNotNull = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(null);
	  };

	  /**
	   * ### .isUndefined(value, [message])
	   *
	   * Asserts that `value` is `undefined`.
	   *
	   *     var tea;
	   *     assert.isUndefined(tea, 'no tea defined');
	   *
	   * @name isUndefined
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isUndefined = function (val, msg) {
	    new Assertion(val, msg).to.equal(undefined);
	  };

	  /**
	   * ### .isDefined(value, [message])
	   *
	   * Asserts that `value` is not `undefined`.
	   *
	   *     var tea = 'cup of chai';
	   *     assert.isDefined(tea, 'tea has been defined');
	   *
	   * @name isDefined
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isDefined = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(undefined);
	  };

	  /**
	   * ### .isFunction(value, [message])
	   *
	   * Asserts that `value` is a function.
	   *
	   *     function serveTea() { return 'cup of tea'; };
	   *     assert.isFunction(serveTea, 'great, we can have tea now');
	   *
	   * @name isFunction
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isFunction = function (val, msg) {
	    new Assertion(val, msg).to.be.a('function');
	  };

	  /**
	   * ### .isNotFunction(value, [message])
	   *
	   * Asserts that `value` is _not_ a function.
	   *
	   *     var serveTea = [ 'heat', 'pour', 'sip' ];
	   *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
	   *
	   * @name isNotFunction
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isNotFunction = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('function');
	  };

	  /**
	   * ### .isObject(value, [message])
	   *
	   * Asserts that `value` is an object (as revealed by
	   * `Object.prototype.toString`).
	   *
	   *     var selection = { name: 'Chai', serve: 'with spices' };
	   *     assert.isObject(selection, 'tea selection is an object');
	   *
	   * @name isObject
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isObject = function (val, msg) {
	    new Assertion(val, msg).to.be.a('object');
	  };

	  /**
	   * ### .isNotObject(value, [message])
	   *
	   * Asserts that `value` is _not_ an object.
	   *
	   *     var selection = 'chai'
	   *     assert.isNotObject(selection, 'tea selection is not an object');
	   *     assert.isNotObject(null, 'null is not an object');
	   *
	   * @name isNotObject
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isNotObject = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('object');
	  };

	  /**
	   * ### .isArray(value, [message])
	   *
	   * Asserts that `value` is an array.
	   *
	   *     var menu = [ 'green', 'chai', 'oolong' ];
	   *     assert.isArray(menu, 'what kind of tea do we want?');
	   *
	   * @name isArray
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isArray = function (val, msg) {
	    new Assertion(val, msg).to.be.an('array');
	  };

	  /**
	   * ### .isNotArray(value, [message])
	   *
	   * Asserts that `value` is _not_ an array.
	   *
	   *     var menu = 'green|chai|oolong';
	   *     assert.isNotArray(menu, 'what kind of tea do we want?');
	   *
	   * @name isNotArray
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isNotArray = function (val, msg) {
	    new Assertion(val, msg).to.not.be.an('array');
	  };

	  /**
	   * ### .isString(value, [message])
	   *
	   * Asserts that `value` is a string.
	   *
	   *     var teaOrder = 'chai';
	   *     assert.isString(teaOrder, 'order placed');
	   *
	   * @name isString
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isString = function (val, msg) {
	    new Assertion(val, msg).to.be.a('string');
	  };

	  /**
	   * ### .isNotString(value, [message])
	   *
	   * Asserts that `value` is _not_ a string.
	   *
	   *     var teaOrder = 4;
	   *     assert.isNotString(teaOrder, 'order placed');
	   *
	   * @name isNotString
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isNotString = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('string');
	  };

	  /**
	   * ### .isNumber(value, [message])
	   *
	   * Asserts that `value` is a number.
	   *
	   *     var cups = 2;
	   *     assert.isNumber(cups, 'how many cups');
	   *
	   * @name isNumber
	   * @param {Number} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isNumber = function (val, msg) {
	    new Assertion(val, msg).to.be.a('number');
	  };

	  /**
	   * ### .isNotNumber(value, [message])
	   *
	   * Asserts that `value` is _not_ a number.
	   *
	   *     var cups = '2 cups please';
	   *     assert.isNotNumber(cups, 'how many cups');
	   *
	   * @name isNotNumber
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isNotNumber = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('number');
	  };

	  /**
	   * ### .isBoolean(value, [message])
	   *
	   * Asserts that `value` is a boolean.
	   *
	   *     var teaReady = true
	   *       , teaServed = false;
	   *
	   *     assert.isBoolean(teaReady, 'is the tea ready');
	   *     assert.isBoolean(teaServed, 'has tea been served');
	   *
	   * @name isBoolean
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isBoolean = function (val, msg) {
	    new Assertion(val, msg).to.be.a('boolean');
	  };

	  /**
	   * ### .isNotBoolean(value, [message])
	   *
	   * Asserts that `value` is _not_ a boolean.
	   *
	   *     var teaReady = 'yep'
	   *       , teaServed = 'nope';
	   *
	   *     assert.isNotBoolean(teaReady, 'is the tea ready');
	   *     assert.isNotBoolean(teaServed, 'has tea been served');
	   *
	   * @name isNotBoolean
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.isNotBoolean = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('boolean');
	  };

	  /**
	   * ### .typeOf(value, name, [message])
	   *
	   * Asserts that `value`'s type is `name`, as determined by
	   * `Object.prototype.toString`.
	   *
	   *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
	   *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
	   *     assert.typeOf('tea', 'string', 'we have a string');
	   *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
	   *     assert.typeOf(null, 'null', 'we have a null');
	   *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
	   *
	   * @name typeOf
	   * @param {Mixed} value
	   * @param {String} name
	   * @param {String} message
	   * @api public
	   */

	  assert.typeOf = function (val, type, msg) {
	    new Assertion(val, msg).to.be.a(type);
	  };

	  /**
	   * ### .notTypeOf(value, name, [message])
	   *
	   * Asserts that `value`'s type is _not_ `name`, as determined by
	   * `Object.prototype.toString`.
	   *
	   *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
	   *
	   * @name notTypeOf
	   * @param {Mixed} value
	   * @param {String} typeof name
	   * @param {String} message
	   * @api public
	   */

	  assert.notTypeOf = function (val, type, msg) {
	    new Assertion(val, msg).to.not.be.a(type);
	  };

	  /**
	   * ### .instanceOf(object, constructor, [message])
	   *
	   * Asserts that `value` is an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , chai = new Tea('chai');
	   *
	   *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
	   *
	   * @name instanceOf
	   * @param {Object} object
	   * @param {Constructor} constructor
	   * @param {String} message
	   * @api public
	   */

	  assert.instanceOf = function (val, type, msg) {
	    new Assertion(val, msg).to.be.instanceOf(type);
	  };

	  /**
	   * ### .notInstanceOf(object, constructor, [message])
	   *
	   * Asserts `value` is not an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , chai = new String('chai');
	   *
	   *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
	   *
	   * @name notInstanceOf
	   * @param {Object} object
	   * @param {Constructor} constructor
	   * @param {String} message
	   * @api public
	   */

	  assert.notInstanceOf = function (val, type, msg) {
	    new Assertion(val, msg).to.not.be.instanceOf(type);
	  };

	  /**
	   * ### .include(haystack, needle, [message])
	   *
	   * Asserts that `haystack` includes `needle`. Works
	   * for strings and arrays.
	   *
	   *     assert.include('foobar', 'bar', 'foobar contains string "bar"');
	   *     assert.include([ 1, 2, 3 ], 3, 'array contains value');
	   *
	   * @name include
	   * @param {Array|String} haystack
	   * @param {Mixed} needle
	   * @param {String} message
	   * @api public
	   */

	  assert.include = function (exp, inc, msg) {
	    new Assertion(exp, msg, assert.include).include(inc);
	  };

	  /**
	   * ### .notInclude(haystack, needle, [message])
	   *
	   * Asserts that `haystack` does not include `needle`. Works
	   * for strings and arrays.
	   *i
	   *     assert.notInclude('foobar', 'baz', 'string not include substring');
	   *     assert.notInclude([ 1, 2, 3 ], 4, 'array not include contain value');
	   *
	   * @name notInclude
	   * @param {Array|String} haystack
	   * @param {Mixed} needle
	   * @param {String} message
	   * @api public
	   */

	  assert.notInclude = function (exp, inc, msg) {
	    new Assertion(exp, msg, assert.notInclude).not.include(inc);
	  };

	  /**
	   * ### .match(value, regexp, [message])
	   *
	   * Asserts that `value` matches the regular expression `regexp`.
	   *
	   *     assert.match('foobar', /^foo/, 'regexp matches');
	   *
	   * @name match
	   * @param {Mixed} value
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @api public
	   */

	  assert.match = function (exp, re, msg) {
	    new Assertion(exp, msg).to.match(re);
	  };

	  /**
	   * ### .notMatch(value, regexp, [message])
	   *
	   * Asserts that `value` does not match the regular expression `regexp`.
	   *
	   *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
	   *
	   * @name notMatch
	   * @param {Mixed} value
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @api public
	   */

	  assert.notMatch = function (exp, re, msg) {
	    new Assertion(exp, msg).to.not.match(re);
	  };

	  /**
	   * ### .property(object, property, [message])
	   *
	   * Asserts that `object` has a property named by `property`.
	   *
	   *     assert.property({ tea: { green: 'matcha' }}, 'tea');
	   *
	   * @name property
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @api public
	   */

	  assert.property = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.have.property(prop);
	  };

	  /**
	   * ### .notProperty(object, property, [message])
	   *
	   * Asserts that `object` does _not_ have a property named by `property`.
	   *
	   *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
	   *
	   * @name notProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @api public
	   */

	  assert.notProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.not.have.property(prop);
	  };

	  /**
	   * ### .deepProperty(object, property, [message])
	   *
	   * Asserts that `object` has a property named by `property`, which can be a
	   * string using dot- and bracket-notation for deep reference.
	   *
	   *     assert.deepProperty({ tea: { green: 'matcha' }}, 'tea.green');
	   *
	   * @name deepProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @api public
	   */

	  assert.deepProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.have.deep.property(prop);
	  };

	  /**
	   * ### .notDeepProperty(object, property, [message])
	   *
	   * Asserts that `object` does _not_ have a property named by `property`, which
	   * can be a string using dot- and bracket-notation for deep reference.
	   *
	   *     assert.notDeepProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
	   *
	   * @name notDeepProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @api public
	   */

	  assert.notDeepProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.not.have.deep.property(prop);
	  };

	  /**
	   * ### .propertyVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property` with value given
	   * by `value`.
	   *
	   *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
	   *
	   * @name propertyVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.propertyVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.have.property(prop, val);
	  };

	  /**
	   * ### .propertyNotVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property`, but with a value
	   * different from that given by `value`.
	   *
	   *     assert.propertyNotVal({ tea: 'is good' }, 'tea', 'is bad');
	   *
	   * @name propertyNotVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.propertyNotVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.not.have.property(prop, val);
	  };

	  /**
	   * ### .deepPropertyVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property` with value given
	   * by `value`. `property` can use dot- and bracket-notation for deep
	   * reference.
	   *
	   *     assert.deepPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
	   *
	   * @name deepPropertyVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.deepPropertyVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.have.deep.property(prop, val);
	  };

	  /**
	   * ### .deepPropertyNotVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property`, but with a value
	   * different from that given by `value`. `property` can use dot- and
	   * bracket-notation for deep reference.
	   *
	   *     assert.deepPropertyNotVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
	   *
	   * @name deepPropertyNotVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */

	  assert.deepPropertyNotVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.not.have.deep.property(prop, val);
	  };

	  /**
	   * ### .lengthOf(object, length, [message])
	   *
	   * Asserts that `object` has a `length` property with the expected value.
	   *
	   *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
	   *     assert.lengthOf('foobar', 5, 'string has length of 6');
	   *
	   * @name lengthOf
	   * @param {Mixed} object
	   * @param {Number} length
	   * @param {String} message
	   * @api public
	   */

	  assert.lengthOf = function (exp, len, msg) {
	    new Assertion(exp, msg).to.have.length(len);
	  };

	  /**
	   * ### .throws(function, [constructor/string/regexp], [string/regexp], [message])
	   *
	   * Asserts that `function` will throw an error that is an instance of
	   * `constructor`, or alternately that it will throw an error with message
	   * matching `regexp`.
	   *
	   *     assert.throw(fn, 'function throws a reference error');
	   *     assert.throw(fn, /function throws a reference error/);
	   *     assert.throw(fn, ReferenceError);
	   *     assert.throw(fn, ReferenceError, 'function throws a reference error');
	   *     assert.throw(fn, ReferenceError, /function throws a reference error/);
	   *
	   * @name throws
	   * @alias throw
	   * @alias Throw
	   * @param {Function} function
	   * @param {ErrorConstructor} constructor
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @api public
	   */

	  assert.Throw = function (fn, errt, errs, msg) {
	    if ('string' === typeof errt || errt instanceof RegExp) {
	      errs = errt;
	      errt = null;
	    }

	    var assertErr = new Assertion(fn, msg).to.Throw(errt, errs);
	    return flag(assertErr, 'object');
	  };

	  /**
	   * ### .doesNotThrow(function, [constructor/regexp], [message])
	   *
	   * Asserts that `function` will _not_ throw an error that is an instance of
	   * `constructor`, or alternately that it will not throw an error with message
	   * matching `regexp`.
	   *
	   *     assert.doesNotThrow(fn, Error, 'function does not throw');
	   *
	   * @name doesNotThrow
	   * @param {Function} function
	   * @param {ErrorConstructor} constructor
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @api public
	   */

	  assert.doesNotThrow = function (fn, type, msg) {
	    if ('string' === typeof type) {
	      msg = type;
	      type = null;
	    }

	    new Assertion(fn, msg).to.not.Throw(type);
	  };

	  /**
	   * ### .operator(val1, operator, val2, [message])
	   *
	   * Compares two values using `operator`.
	   *
	   *     assert.operator(1, '<', 2, 'everything is ok');
	   *     assert.operator(1, '>', 2, 'this will fail');
	   *
	   * @name operator
	   * @param {Mixed} val1
	   * @param {String} operator
	   * @param {Mixed} val2
	   * @param {String} message
	   * @api public
	   */

	  assert.operator = function (val, operator, val2, msg) {
	    var ok;
	    switch(operator) {
	      case '==':
	        ok = val == val2;
	        break;
	      case '===':
	        ok = val === val2;
	        break;
	      case '>':
	        ok = val > val2;
	        break;
	      case '>=':
	        ok = val >= val2;
	        break;
	      case '<':
	        ok = val < val2;
	        break;
	      case '<=':
	        ok = val <= val2;
	        break;
	      case '!=':
	        ok = val != val2;
	        break;
	      case '!==':
	        ok = val !== val2;
	        break;
	      default:
	        throw new Error('Invalid operator "' + operator + '"');
	    }
	    var test = new Assertion(ok, msg);
	    test.assert(
	        true === flag(test, 'object')
	      , 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2)
	      , 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2) );
	  };

	  /**
	   * ### .closeTo(actual, expected, delta, [message])
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
	   *
	   * @name closeTo
	   * @param {Number} actual
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message
	   * @api public
	   */

	  assert.closeTo = function (act, exp, delta, msg) {
	    new Assertion(act, msg).to.be.closeTo(exp, delta);
	  };

	  /**
	   * ### .sameMembers(set1, set2, [message])
	   *
	   * Asserts that `set1` and `set2` have the same members.
	   * Order is not taken into account.
	   *
	   *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
	   *
	   * @name sameMembers
	   * @param {Array} set1
	   * @param {Array} set2
	   * @param {String} message
	   * @api public
	   */

	  assert.sameMembers = function (set1, set2, msg) {
	    new Assertion(set1, msg).to.have.same.members(set2);
	  }

	  /**
	   * ### .sameDeepMembers(set1, set2, [message])
	   *
	   * Asserts that `set1` and `set2` have the same members - using a deep equality checking.
	   * Order is not taken into account.
	   *
	   *     assert.sameDeepMembers([ {b: 3}, {a: 2}, {c: 5} ], [ {c: 5}, {b: 3}, {a: 2} ], 'same deep members');
	   *
	   * @name sameDeepMembers
	   * @param {Array} set1
	   * @param {Array} set2
	   * @param {String} message
	   * @api public
	   */

	  assert.sameDeepMembers = function (set1, set2, msg) {
	    new Assertion(set1, msg).to.have.same.deep.members(set2);
	  }

	  /**
	   * ### .includeMembers(superset, subset, [message])
	   *
	   * Asserts that `subset` is included in `superset`.
	   * Order is not taken into account.
	   *
	   *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1 ], 'include members');
	   *
	   * @name includeMembers
	   * @param {Array} superset
	   * @param {Array} subset
	   * @param {String} message
	   * @api public
	   */

	  assert.includeMembers = function (superset, subset, msg) {
	    new Assertion(superset, msg).to.include.members(subset);
	  }

	   /**
	   * ### .changes(function, object, property)
	   *
	   * Asserts that a function changes the value of a property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 22 };
	   *     assert.changes(fn, obj, 'val');
	   *
	   * @name changes
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @api public
	   */

	  assert.changes = function (fn, obj, prop) {
	    new Assertion(fn).to.change(obj, prop);
	  }

	   /**
	   * ### .doesNotChange(function, object, property)
	   *
	   * Asserts that a function does not changes the value of a property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { console.log('foo'); };
	   *     assert.doesNotChange(fn, obj, 'val');
	   *
	   * @name doesNotChange
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @api public
	   */

	  assert.doesNotChange = function (fn, obj, prop) {
	    new Assertion(fn).to.not.change(obj, prop);
	  }

	   /**
	   * ### .increases(function, object, property)
	   *
	   * Asserts that a function increases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 13 };
	   *     assert.increases(fn, obj, 'val');
	   *
	   * @name increases
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @api public
	   */

	  assert.increases = function (fn, obj, prop) {
	    new Assertion(fn).to.increase(obj, prop);
	  }

	   /**
	   * ### .doesNotIncrease(function, object, property)
	   *
	   * Asserts that a function does not increase object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 8 };
	   *     assert.doesNotIncrease(fn, obj, 'val');
	   *
	   * @name doesNotIncrease
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @api public
	   */

	  assert.doesNotIncrease = function (fn, obj, prop) {
	    new Assertion(fn).to.not.increase(obj, prop);
	  }

	   /**
	   * ### .decreases(function, object, property)
	   *
	   * Asserts that a function decreases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 5 };
	   *     assert.decreases(fn, obj, 'val');
	   *
	   * @name decreases
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @api public
	   */

	  assert.decreases = function (fn, obj, prop) {
	    new Assertion(fn).to.decrease(obj, prop);
	  }

	   /**
	   * ### .doesNotDecrease(function, object, property)
	   *
	   * Asserts that a function does not decreases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 15 };
	   *     assert.doesNotDecrease(fn, obj, 'val');
	   *
	   * @name doesNotDecrease
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @api public
	   */

	  assert.doesNotDecrease = function (fn, obj, prop) {
	    new Assertion(fn).to.not.decrease(obj, prop);
	  }

	  /*!
	   * Undocumented / untested
	   */

	  assert.ifError = function (val, msg) {
	    new Assertion(val, msg).to.not.be.ok;
	  };

	  /*!
	   * Aliases.
	   */

	  (function alias(name, as){
	    assert[as] = assert[name];
	    return alias;
	  })
	  ('Throw', 'throw')
	  ('Throw', 'throws');
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {process.nextTick(function() {
		delete __webpack_require__.c[module.id];
		if(typeof window !== "undefined" && window.mochaPhantomJS)
			mochaPhantomJS.run();
		else
			mocha.run();
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }
/******/ ]);