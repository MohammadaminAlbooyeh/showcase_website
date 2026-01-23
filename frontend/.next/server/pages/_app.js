/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./App.css":
/*!*****************!*\
  !*** ./App.css ***!
  \*****************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./components/FixedBottomBar.css":
/*!***************************************!*\
  !*** ./components/FixedBottomBar.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./components/FixedBottomBar.jsx":
/*!***************************************!*\
  !*** ./components/FixedBottomBar.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FixedBottomBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FixedBottomBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FixedBottomBar.module.css */ \"(pages-dir-node)/./components/FixedBottomBar.module.css\");\n/* harmony import */ var _FixedBottomBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FixedBottomBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction FixedBottomBar() {\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleClose = ()=>{\n        setIsVisible(false);\n        document.body.style.paddingBottom = '0';\n    };\n    const handleKeyDown = (event)=>{\n        if (event.key === 'Escape') {\n            handleClose();\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"FixedBottomBar.useEffect\": ()=>{\n            if (isVisible) {\n                document.body.style.paddingBottom = '80px'; // Adjust to match bar height\n                window.addEventListener('keydown', handleKeyDown);\n            }\n            return ({\n                \"FixedBottomBar.useEffect\": ()=>{\n                    window.removeEventListener('keydown', handleKeyDown);\n                }\n            })[\"FixedBottomBar.useEffect\"];\n        }\n    }[\"FixedBottomBar.useEffect\"], [\n        isVisible\n    ]);\n    if (!isVisible) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed-bottom-bar\",\n        role: \"complementary\",\n        \"aria-label\": \"Fixed bottom bar\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Welcome to our website! This is a fixed bottom bar.\"\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/FixedBottomBar.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"close-button\",\n                    onClick: handleClose,\n                    \"aria-label\": \"Close bottom bar\",\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/FixedBottomBar.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/FixedBottomBar.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/FixedBottomBar.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvRml4ZWRCb3R0b21CYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0s7QUFFbEMsU0FBU0c7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1NLGNBQWM7UUFDbEJELGFBQWE7UUFDYkUsU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLGFBQWEsR0FBRztJQUN0QztJQUVBLE1BQU1DLGdCQUFnQixDQUFDQztRQUNyQixJQUFJQSxNQUFNQyxHQUFHLEtBQUssVUFBVTtZQUMxQlA7UUFDRjtJQUNGO0lBRUFMLGdEQUFTQTtvQ0FBQztZQUNSLElBQUlHLFdBQVc7Z0JBQ2JHLFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxhQUFhLEdBQUcsUUFBUSw2QkFBNkI7Z0JBQ3pFSSxPQUFPQyxnQkFBZ0IsQ0FBQyxXQUFXSjtZQUNyQztZQUNBOzRDQUFPO29CQUNMRyxPQUFPRSxtQkFBbUIsQ0FBQyxXQUFXTDtnQkFDeEM7O1FBQ0Y7bUNBQUc7UUFBQ1A7S0FBVTtJQUVkLElBQUksQ0FBQ0EsV0FBVyxPQUFPO0lBRXZCLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVO1FBQW1CQyxNQUFLO1FBQWdCQyxjQUFXO2tCQUNoRSw0RUFBQ0g7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNHOzhCQUFFOzs7Ozs7OEJBQ0gsOERBQUNDO29CQUFPSixXQUFVO29CQUFlSyxTQUFTakI7b0JBQWFjLGNBQVc7OEJBQW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3RiIsInNvdXJjZXMiOlsiL1VzZXJzL2FtaW4vRGVza3RvcC9NeVByb2plY3RzL3Nob3djYXNlLXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9GaXhlZEJvdHRvbUJhci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9GaXhlZEJvdHRvbUJhci5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRml4ZWRCb3R0b21CYXIoKSB7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRJc1Zpc2libGUoZmFsc2UpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ0JvdHRvbSA9ICcwJztcbiAgfTtcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nQm90dG9tID0gJzgwcHgnOyAvLyBBZGp1c3QgdG8gbWF0Y2ggYmFyIGhlaWdodFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG4gICAgfTtcbiAgfSwgW2lzVmlzaWJsZV0pO1xuXG4gIGlmICghaXNWaXNpYmxlKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtYm90dG9tLWJhclwiIHJvbGU9XCJjb21wbGVtZW50YXJ5XCIgYXJpYS1sYWJlbD1cIkZpeGVkIGJvdHRvbSBiYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8cD5XZWxjb21lIHRvIG91ciB3ZWJzaXRlISBUaGlzIGlzIGEgZml4ZWQgYm90dG9tIGJhci48L3A+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2UtYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWw9XCJDbG9zZSBib3R0b20gYmFyXCI+w5c8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkZpeGVkQm90dG9tQmFyIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwiaGFuZGxlQ2xvc2UiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsInBhZGRpbmdCb3R0b20iLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsInJvbGUiLCJhcmlhLWxhYmVsIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/FixedBottomBar.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./components/FixedBottomBar.module.css":
/*!**********************************************!*\
  !*** ./components/FixedBottomBar.module.css ***!
  \**********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"fixedBottomBar\": \"FixedBottomBar_fixedBottomBar__iALem\",\n\t\"content\": \"FixedBottomBar_content__Wkat_\",\n\t\"closeButton\": \"FixedBottomBar_closeButton__si0wB\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvRml4ZWRCb3R0b21CYXIubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluL0Rlc2t0b3AvTXlQcm9qZWN0cy9zaG93Y2FzZS13ZWJzaXRlL2Zyb250ZW5kL2NvbXBvbmVudHMvRml4ZWRCb3R0b21CYXIubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmaXhlZEJvdHRvbUJhclwiOiBcIkZpeGVkQm90dG9tQmFyX2ZpeGVkQm90dG9tQmFyX19pQUxlbVwiLFxuXHRcImNvbnRlbnRcIjogXCJGaXhlZEJvdHRvbUJhcl9jb250ZW50X19Xa2F0X1wiLFxuXHRcImNsb3NlQnV0dG9uXCI6IFwiRml4ZWRCb3R0b21CYXJfY2xvc2VCdXR0b25fX3NpMHdCXCJcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/FixedBottomBar.module.css\n");

/***/ }),

/***/ "(pages-dir-node)/./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Footer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"\\xa9 \",\n                    new Date().getFullYear(),\n                    \" Amin Albooyeh — Showcase Website\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/Footer.jsx\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/MohammadaminAlbooyeh\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: \"GitHub\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/Footer.jsx\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"mailto:your@email.com\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/Footer.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/Footer.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/Footer.jsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvRm9vdGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0E7SUFDdEIscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7O29CQUFJO29CQUNLLElBQUlDLE9BQU9DLFdBQVc7b0JBQUc7Ozs7Ozs7MEJBRW5DLDhEQUFDRjs7a0NBQ0MsOERBQUNHO3dCQUFFQyxNQUFLO3dCQUEwQ0MsUUFBTzt3QkFBU0MsS0FBSTtrQ0FBc0I7Ozs7OztrQ0FDNUYsOERBQUNIO3dCQUFFQyxNQUFLO2tDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hDIiwic291cmNlcyI6WyIvVXNlcnMvYW1pbi9EZXNrdG9wL015UHJvamVjdHMvc2hvd2Nhc2Utd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL0Zvb3Rlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICAmY29weTsge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQW1pbiBBbGJvb3llaCAmbWRhc2g7IFNob3djYXNlIFdlYnNpdGVcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Nb2hhbW1hZGFtaW5BbGJvb3llaFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5HaXRIdWI8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJtYWlsdG86eW91ckBlbWFpbC5jb21cIj5FbWFpbDwvYT5cbiAgICAgICAgey8qIEFkZCBtb3JlIHNvY2lhbC9jb250YWN0IGxpbmtzIGFzIG5lZWRlZCAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkZvb3RlciIsImZvb3RlciIsImRpdiIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Footer.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/AppBar */ \"(pages-dir-node)/./node_modules/@mui/material/esm/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Box */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Toolbar */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Toolbar/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/IconButton */ \"(pages-dir-node)/./node_modules/@mui/material/esm/IconButton/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Drawer */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Drawer/index.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/List */ \"(pages-dir-node)/./node_modules/@mui/material/esm/List/index.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/ListItem */ \"(pages-dir-node)/./node_modules/@mui/material/esm/ListItem/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/ListItemText */ \"(pages-dir-node)/./node_modules/@mui/material/esm/ListItemText/index.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Menu.js\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Close */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Close.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Container */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Container/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Button */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/LinearProgress */ \"(pages-dir-node)/./node_modules/@mui/material/esm/LinearProgress/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/esm/styles/index.js\");\n/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/useMediaQuery */ \"(pages-dir-node)/./node_modules/@mui/material/esm/useMediaQuery/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__, _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__, _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__, _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__, _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_12__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__, _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_14__, _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_15__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_16__, _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17__, _mui_material_List__WEBPACK_IMPORTED_MODULE_18__, _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_19__, _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_20__]);\n([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__, _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__, _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__, _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__, _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_12__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__, _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_14__, _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_15__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_16__, _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17__, _mui_material_List__WEBPACK_IMPORTED_MODULE_18__, _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_19__, _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst pages = [\n    {\n        label: 'Home',\n        href: '/'\n    },\n    {\n        label: 'Projects',\n        href: '/projects'\n    },\n    {\n        label: 'Resume',\n        href: '/resume'\n    },\n    {\n        label: 'Contact',\n        href: '/contactus'\n    }\n];\nfunction NavBar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [mobileOpen, setMobileOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();\n    const isMobile = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(theme.breakpoints.down('md'));\n    const navRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const [focusedIndex, setFocusedIndex] = react__WEBPACK_IMPORTED_MODULE_1__.useState(-1);\n    // Handle keyboard navigation\n    const handleKeyPress = (e, index)=>{\n        switch(e.key){\n            case 'Escape':\n                if (mobileOpen) {\n                    setMobileOpen(false);\n                }\n                break;\n            case 'ArrowRight':\n            case 'ArrowDown':\n                e.preventDefault();\n                setFocusedIndex((prevIndex)=>{\n                    const newIndex = prevIndex < pages.length - 1 ? prevIndex + 1 : 0;\n                    focusNavItem(newIndex);\n                    return newIndex;\n                });\n                break;\n            case 'ArrowLeft':\n            case 'ArrowUp':\n                e.preventDefault();\n                setFocusedIndex((prevIndex)=>{\n                    const newIndex = prevIndex > 0 ? prevIndex - 1 : pages.length - 1;\n                    focusNavItem(newIndex);\n                    return newIndex;\n                });\n                break;\n            case 'Home':\n                e.preventDefault();\n                setFocusedIndex(0);\n                focusNavItem(0);\n                break;\n            case 'End':\n                e.preventDefault();\n                setFocusedIndex(pages.length - 1);\n                focusNavItem(pages.length - 1);\n                break;\n        }\n    };\n    const focusNavItem = (index)=>{\n        const navItems = navRef.current?.querySelectorAll('button, a[role=\"menuitem\"]');\n        if (navItems?.[index]) {\n            navItems[index].focus();\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect({\n        \"NavBar.useEffect\": ()=>{\n            const handleStart = {\n                \"NavBar.useEffect.handleStart\": ()=>setIsLoading(true)\n            }[\"NavBar.useEffect.handleStart\"];\n            const handleComplete = {\n                \"NavBar.useEffect.handleComplete\": ()=>{\n                    setIsLoading(false);\n                    setMobileOpen(false); // Close mobile menu on navigation\n                }\n            }[\"NavBar.useEffect.handleComplete\"];\n            // Add event listeners for navigation and keyboard events\n            router.events.on('routeChangeStart', handleStart);\n            router.events.on('routeChangeComplete', handleComplete);\n            router.events.on('routeChangeError', handleComplete);\n            window.addEventListener('keydown', handleKeyPress);\n            // Focus management for mobile menu\n            if (mobileOpen && navRef.current) {\n                const focusableElements = navRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])');\n                if (focusableElements.length > 0) {\n                    focusableElements[0].focus();\n                }\n            }\n            return ({\n                \"NavBar.useEffect\": ()=>{\n                    router.events.off('routeChangeStart', handleStart);\n                    router.events.off('routeChangeComplete', handleComplete);\n                    router.events.off('routeChangeError', handleComplete);\n                    window.removeEventListener('keydown', handleKeyPress);\n                    router.events.off('routeChangeError', handleComplete);\n                }\n            })[\"NavBar.useEffect\"];\n        }\n    }[\"NavBar.useEffect\"], [\n        router\n    ]);\n    const toggleMobileMenu = ()=>{\n        setMobileOpen(!mobileOpen);\n    };\n    // Pre-fetch all routes for instant navigation\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect({\n        \"NavBar.useEffect\": ()=>{\n            pages.forEach({\n                \"NavBar.useEffect\": (page)=>router.prefetch(page.href)\n            }[\"NavBar.useEffect\"]);\n        }\n    }[\"NavBar.useEffect\"], []);\n    const isActiveRoute = (href)=>router.pathname === href;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: {\n            opacity: 0,\n            y: -20\n        },\n        animate: {\n            opacity: 1,\n            y: 0\n        },\n        transition: {\n            duration: 0.5\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            position: \"sticky\",\n            color: \"default\",\n            elevation: 2,\n            component: \"nav\",\n            \"aria-label\": \"Main navigation\",\n            sx: {\n                background: 'var(--color-nav-bg)',\n                backdropFilter: 'blur(8px)',\n                borderBottom: '1px solid',\n                borderColor: 'divider'\n            },\n            children: [\n                isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    \"aria-label\": \"Page loading indicator\",\n                    sx: {\n                        position: 'absolute',\n                        top: 0,\n                        left: 0,\n                        right: 0,\n                        height: '2px',\n                        zIndex: 2000\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                    lineNumber: 147,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    maxWidth: \"lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        disableGutters: true,\n                        sx: {\n                            minHeight: {\n                                xs: '56px',\n                                sm: '64px'\n                            },\n                            justifyContent: 'space-between'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                variant: \"h6\",\n                                component: framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div,\n                                whileHover: {\n                                    scale: 1.05\n                                },\n                                sx: {\n                                    flexGrow: {\n                                        xs: 1,\n                                        md: 0\n                                    },\n                                    fontSize: {\n                                        xs: '1.25rem',\n                                        sm: '1.5rem'\n                                    },\n                                    fontWeight: 700,\n                                    textAlign: {\n                                        xs: 'center',\n                                        md: 'left'\n                                    },\n                                    color: 'white'\n                                },\n                                children: \"Welcome to my website\"\n                            }, void 0, false, {\n                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                lineNumber: 168,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                sx: {\n                                    display: {\n                                        xs: 'flex',\n                                        md: 'none'\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                    size: \"large\",\n                                    \"aria-label\": mobileOpen ? 'close menu' : 'open menu',\n                                    onClick: toggleMobileMenu,\n                                    color: \"inherit\",\n                                    edge: \"end\",\n                                    children: mobileOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                        lineNumber: 192,\n                                        columnNumber: 31\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                        lineNumber: 192,\n                                        columnNumber: 47\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                    lineNumber: 185,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                lineNumber: 184,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                sx: {\n                                    flexGrow: 1,\n                                    display: {\n                                        xs: 'none',\n                                        md: 'flex'\n                                    },\n                                    justifyContent: 'flex-end',\n                                    gap: 2\n                                },\n                                children: pages.map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: page.href,\n                                        passHref: true,\n                                        style: {\n                                            textDecoration: 'none'\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n                                            component: framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button,\n                                            whileHover: {\n                                                scale: 1.05\n                                            },\n                                            whileTap: {\n                                                scale: 0.95\n                                            },\n                                            sx: {\n                                                color: 'text.primary',\n                                                position: 'relative',\n                                                '&::after': {\n                                                    content: '\"\"',\n                                                    position: 'absolute',\n                                                    bottom: 0,\n                                                    left: 0,\n                                                    width: '100%',\n                                                    height: '2px',\n                                                    background: 'primary.main',\n                                                    transform: isActiveRoute(page.href) ? 'scaleX(1)' : 'scaleX(0)',\n                                                    transition: 'transform 0.3s ease'\n                                                },\n                                                '&:hover::after': {\n                                                    transform: 'scaleX(1)'\n                                                }\n                                            },\n                                            children: page.label\n                                        }, void 0, false, {\n                                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                            lineNumber: 212,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, page.href, false, {\n                                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                        lineNumber: 206,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                lineNumber: 197,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n                                anchor: \"right\",\n                                open: mobileOpen && isMobile,\n                                onClose: ()=>setMobileOpen(false),\n                                PaperProps: {\n                                    sx: {\n                                        width: '80%',\n                                        maxWidth: '300px',\n                                        background: 'var(--color-nav-bg)',\n                                        backdropFilter: 'blur(8px)'\n                                    }\n                                },\n                                ModalProps: {\n                                    keepMounted: true // Better mobile performance\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n                                    sx: {\n                                        pt: 2\n                                    },\n                                    children: pages.map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {\n                                            component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                            href: page.href,\n                                            onClick: ()=>setMobileOpen(false),\n                                            sx: {\n                                                py: 2,\n                                                borderBottom: '1px solid',\n                                                borderColor: 'divider'\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_20__[\"default\"], {\n                                                primary: page.label,\n                                                sx: {\n                                                    '& .MuiTypography-root': {\n                                                        fontSize: '1.125rem',\n                                                        fontWeight: isActiveRoute(page.href) ? 600 : 400,\n                                                        color: isActiveRoute(page.href) ? 'primary.main' : 'text.primary'\n                                                    }\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                                lineNumber: 271,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, page.href, false, {\n                                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                            lineNumber: 260,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                    lineNumber: 258,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                lineNumber: 242,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                        lineNumber: 160,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                    lineNumber: 159,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n            lineNumber: 133,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n        lineNumber: 128,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDVztBQUNOO0FBQ1E7QUFDTTtBQUNBO0FBQ1I7QUFDSjtBQUNRO0FBQ1E7QUFDTjtBQUNFO0FBQ0Y7QUFDTjtBQUNiO0FBQ1c7QUFDZ0I7QUFDRTtBQUNWO0FBQ1E7QUFFeEQsTUFBTXFCLFFBQVE7SUFDWjtRQUFFQyxPQUFPO1FBQVFDLE1BQU07SUFBSTtJQUMzQjtRQUFFRCxPQUFPO1FBQVlDLE1BQU07SUFBWTtJQUN2QztRQUFFRCxPQUFPO1FBQVVDLE1BQU07SUFBVTtJQUNuQztRQUFFRCxPQUFPO1FBQVdDLE1BQU07SUFBYTtDQUN4QztBQUVjLFNBQVNDO0lBQ3RCLE1BQU1DLFNBQVNWLHNEQUFTQTtJQUN4QixNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBRzNCLDJDQUFjLENBQUM7SUFDbkQsTUFBTSxDQUFDNkIsV0FBV0MsYUFBYSxHQUFHOUIsMkNBQWMsQ0FBQztJQUNqRCxNQUFNK0IsUUFBUVosOERBQVFBO0lBQ3RCLE1BQU1hLFdBQVdaLHVFQUFhQSxDQUFDVyxNQUFNRSxXQUFXLENBQUNDLElBQUksQ0FBQztJQUN0RCxNQUFNQyxTQUFTbkMseUNBQVksQ0FBQztJQUM1QixNQUFNLENBQUNxQyxjQUFjQyxnQkFBZ0IsR0FBR3RDLDJDQUFjLENBQUMsQ0FBQztJQUV4RCw2QkFBNkI7SUFDN0IsTUFBTXVDLGlCQUFpQixDQUFDQyxHQUFHQztRQUN6QixPQUFRRCxFQUFFRSxHQUFHO1lBQ1gsS0FBSztnQkFDSCxJQUFJaEIsWUFBWTtvQkFDZEMsY0FBYztnQkFDaEI7Z0JBQ0E7WUFDRixLQUFLO1lBQ0wsS0FBSztnQkFDSGEsRUFBRUcsY0FBYztnQkFDaEJMLGdCQUFnQixDQUFDTTtvQkFDZixNQUFNQyxXQUFXRCxZQUFZdkIsTUFBTXlCLE1BQU0sR0FBRyxJQUFJRixZQUFZLElBQUk7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bUYsU0FBUyxJQUFNL0UsY0FBYzs0Q0FDN0JxRCxJQUFJO2dEQUNGOEMsSUFBSTtnREFDSjNDLGNBQWM7Z0RBQ2RDLGFBQWE7NENBQ2Y7c0RBRUEsNEVBQUMzRSxtRUFBWUE7Z0RBQ1hzSCxTQUFTL0QsS0FBSzFDLEtBQUs7Z0RBQ25CMEQsSUFBSTtvREFDRix5QkFBeUI7d0RBQ3ZCcUIsVUFBVTt3REFDVkMsWUFBWXBDLGNBQWNGLEtBQUt6QyxJQUFJLElBQUksTUFBTTt3REFDN0NxRCxPQUFPVixjQUFjRixLQUFLekMsSUFBSSxJQUFJLGlCQUFpQjtvREFDckQ7Z0RBQ0Y7Ozs7OzsyQ0FsQkd5QyxLQUFLekMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCbEMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluL0Rlc2t0b3AvTXlQcm9qZWN0cy9zaG93Y2FzZS13ZWJzaXRlL2Zyb250ZW5kL2NvbXBvbmVudHMvTmF2QmFyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5lYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvdXNlTWVkaWFRdWVyeSc7XG5cbmNvbnN0IHBhZ2VzID0gW1xuICB7IGxhYmVsOiAnSG9tZScsIGhyZWY6ICcvJyB9LFxuICB7IGxhYmVsOiAnUHJvamVjdHMnLCBocmVmOiAnL3Byb2plY3RzJyB9LFxuICB7IGxhYmVsOiAnUmVzdW1lJywgaHJlZjogJy9yZXN1bWUnIH0sXG4gIHsgbGFiZWw6ICdDb250YWN0JywgaHJlZjogJy9jb250YWN0dXMnIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbW9iaWxlT3Blbiwgc2V0TW9iaWxlT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJykpO1xuICBjb25zdCBuYXZSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtmb2N1c2VkSW5kZXgsIHNldEZvY3VzZWRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgtMSk7XG5cbiAgLy8gSGFuZGxlIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZSwgaW5kZXgpID0+IHtcbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICBpZiAobW9iaWxlT3Blbikge1xuICAgICAgICAgIHNldE1vYmlsZU9wZW4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldEZvY3VzZWRJbmRleCgocHJldkluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBwcmV2SW5kZXggPCBwYWdlcy5sZW5ndGggLSAxID8gcHJldkluZGV4ICsgMSA6IDA7XG4gICAgICAgICAgZm9jdXNOYXZJdGVtKG5ld0luZGV4KTtcbiAgICAgICAgICByZXR1cm4gbmV3SW5kZXg7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRGb2N1c2VkSW5kZXgoKHByZXZJbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gcHJldkluZGV4ID4gMCA/IHByZXZJbmRleCAtIDEgOiBwYWdlcy5sZW5ndGggLSAxO1xuICAgICAgICAgIGZvY3VzTmF2SXRlbShuZXdJbmRleCk7XG4gICAgICAgICAgcmV0dXJuIG5ld0luZGV4O1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRGb2N1c2VkSW5kZXgoMCk7XG4gICAgICAgIGZvY3VzTmF2SXRlbSgwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFbmQnOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldEZvY3VzZWRJbmRleChwYWdlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgZm9jdXNOYXZJdGVtKHBhZ2VzLmxlbmd0aCAtIDEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZm9jdXNOYXZJdGVtID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgbmF2SXRlbXMgPSBuYXZSZWYuY3VycmVudD8ucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLCBhW3JvbGU9XCJtZW51aXRlbVwiXScpO1xuICAgIGlmIChuYXZJdGVtcz8uW2luZGV4XSkge1xuICAgICAgbmF2SXRlbXNbaW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgc2V0TW9iaWxlT3BlbihmYWxzZSk7IC8vIENsb3NlIG1vYmlsZSBtZW51IG9uIG5hdmlnYXRpb25cbiAgICB9O1xuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVycyBmb3IgbmF2aWdhdGlvbiBhbmQga2V5Ym9hcmQgZXZlbnRzXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlQ29tcGxldGUpO1xuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVDb21wbGV0ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG5cbiAgICAvLyBGb2N1cyBtYW5hZ2VtZW50IGZvciBtb2JpbGUgbWVudVxuICAgIGlmIChtb2JpbGVPcGVuICYmIG5hdlJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IG5hdlJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICdidXR0b24sIFtocmVmXSwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIFt0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKSdcbiAgICAgICk7XG4gICAgICBpZiAoZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb2N1c2FibGVFbGVtZW50c1swXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlQ29tcGxldGUpO1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVDb21wbGV0ZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlQ29tcGxldGUpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXJdKTtcblxuICBjb25zdCB0b2dnbGVNb2JpbGVNZW51ID0gKCkgPT4ge1xuICAgIHNldE1vYmlsZU9wZW4oIW1vYmlsZU9wZW4pO1xuICB9O1xuXG4gIC8vIFByZS1mZXRjaCBhbGwgcm91dGVzIGZvciBpbnN0YW50IG5hdmlnYXRpb25cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBwYWdlcy5mb3JFYWNoKHBhZ2UgPT4gcm91dGVyLnByZWZldGNoKHBhZ2UuaHJlZikpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaXNBY3RpdmVSb3V0ZSA9IChocmVmKSA9PiByb3V0ZXIucGF0aG5hbWUgPT09IGhyZWY7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAtMjAgfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgPlxuICAgICAgPEFwcEJhciBcbiAgICAgICAgcG9zaXRpb249XCJzdGlja3lcIiBcbiAgICAgICAgY29sb3I9XCJkZWZhdWx0XCIgXG4gICAgICAgIGVsZXZhdGlvbj17Mn0gXG4gICAgICAgIGNvbXBvbmVudD1cIm5hdlwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJNYWluIG5hdmlnYXRpb25cIlxuICAgICAgICBzeD17eyBcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAndmFyKC0tY29sb3ItbmF2LWJnKScsIFxuICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiAnYmx1cig4cHgpJyxcbiAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnZGl2aWRlcidcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgPExpbmVhclByb2dyZXNzXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGFnZSBsb2FkaW5nIGluZGljYXRvclwiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgICAgICAgICAgekluZGV4OiAyMDAwXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICAgIDxUb29sYmFyIFxuICAgICAgICAgICAgZGlzYWJsZUd1dHRlcnMgXG4gICAgICAgICAgICBzeD17eyBcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiB7IHhzOiAnNTZweCcsIHNtOiAnNjRweCcgfSxcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogTG9nby9CcmFuZCAqL31cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17bW90aW9uLmRpdn1cbiAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fVxuICAgICAgICAgICAgICBzeD17eyBcbiAgICAgICAgICAgICAgICBmbGV4R3JvdzogeyB4czogMSwgbWQ6IDAgfSxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogJzEuMjVyZW0nLCBzbTogJzEuNXJlbScgfSxcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiB7IHhzOiAnY2VudGVyJywgbWQ6ICdsZWZ0JyB9LFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFdlbGNvbWUgdG8gbXkgd2Vic2l0ZVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICB7LyogTW9iaWxlIG1lbnUgdG9nZ2xlICovfVxuICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiB7IHhzOiAnZmxleCcsIG1kOiAnbm9uZScgfSB9fT5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e21vYmlsZU9wZW4gPyAnY2xvc2UgbWVudScgOiAnb3BlbiBtZW51J31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNb2JpbGVNZW51fVxuICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bW9iaWxlT3BlbiA/IDxDbG9zZUljb24gLz4gOiA8TWVudUljb24gLz59XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICB7LyogRGVza3RvcCBtZW51ICovfVxuICAgICAgICAgICAgPEJveCBcbiAgICAgICAgICAgICAgc3g9e3sgXG4gICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsIFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHsgeHM6ICdub25lJywgbWQ6ICdmbGV4JyB9LFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgICAgICAgICAgICAgIGdhcDogMlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGFnZXMubWFwKChwYWdlKSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGtleT17cGFnZS5ocmVmfVxuICAgICAgICAgICAgICAgICAgaHJlZj17cGFnZS5ocmVmfVxuICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17bW90aW9uLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fVxuICAgICAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45NSB9fVxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndGV4dC5wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdwcmltYXJ5Lm1haW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBpc0FjdGl2ZVJvdXRlKHBhZ2UuaHJlZikgPyAnc2NhbGVYKDEpJyA6ICdzY2FsZVgoMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjNzIGVhc2UnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcjo6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cGFnZS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgey8qIE1vYmlsZSBkcmF3ZXIgKi99XG4gICAgICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgICAgIGFuY2hvcj1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgb3Blbj17bW9iaWxlT3BlbiAmJiBpc01vYmlsZX1cbiAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0TW9iaWxlT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgIFBhcGVyUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzeDoge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6ICc4MCUnLFxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICczMDBweCcsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAndmFyKC0tY29sb3ItbmF2LWJnKScsXG4gICAgICAgICAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogJ2JsdXIoOHB4KSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIE1vZGFsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBrZWVwTW91bnRlZDogdHJ1ZSAvLyBCZXR0ZXIgbW9iaWxlIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaXN0IHN4PXt7IHB0OiAyIH19PlxuICAgICAgICAgICAgICAgIHtwYWdlcy5tYXAoKHBhZ2UpID0+IChcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwYWdlLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17cGFnZS5ocmVmfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgXG4gICAgICAgICAgICAgICAgICAgICAgcHk6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ2RpdmlkZXInXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgXG4gICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17cGFnZS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgJyYgLk11aVR5cG9ncmFwaHktcm9vdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjEyNXJlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGlzQWN0aXZlUm91dGUocGFnZS5ocmVmKSA/IDYwMCA6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGlzQWN0aXZlUm91dGUocGFnZS5ocmVmKSA/ICdwcmltYXJ5Lm1haW4nIDogJ3RleHQucHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBCYXIiLCJCb3giLCJUb29sYmFyIiwiSWNvbkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJEcmF3ZXIiLCJMaXN0IiwiTGlzdEl0ZW0iLCJMaXN0SXRlbVRleHQiLCJNZW51SWNvbiIsIkNsb3NlSWNvbiIsIkNvbnRhaW5lciIsIkJ1dHRvbiIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJMaW5lYXJQcm9ncmVzcyIsInVzZVRoZW1lIiwidXNlTWVkaWFRdWVyeSIsInBhZ2VzIiwibGFiZWwiLCJocmVmIiwiTmF2QmFyIiwicm91dGVyIiwibW9iaWxlT3BlbiIsInNldE1vYmlsZU9wZW4iLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInRoZW1lIiwiaXNNb2JpbGUiLCJicmVha3BvaW50cyIsImRvd24iLCJuYXZSZWYiLCJ1c2VSZWYiLCJmb2N1c2VkSW5kZXgiLCJzZXRGb2N1c2VkSW5kZXgiLCJoYW5kbGVLZXlQcmVzcyIsImUiLCJpbmRleCIsImtleSIsInByZXZlbnREZWZhdWx0IiwicHJldkluZGV4IiwibmV3SW5kZXgiLCJsZW5ndGgiLCJmb2N1c05hdkl0ZW0iLCJuYXZJdGVtcyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9jdXMiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTdGFydCIsImhhbmRsZUNvbXBsZXRlIiwiZXZlbnRzIiwib24iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZm9jdXNhYmxlRWxlbWVudHMiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9nZ2xlTW9iaWxlTWVudSIsImZvckVhY2giLCJwYWdlIiwicHJlZmV0Y2giLCJpc0FjdGl2ZVJvdXRlIiwicGF0aG5hbWUiLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwicG9zaXRpb24iLCJjb2xvciIsImVsZXZhdGlvbiIsImNvbXBvbmVudCIsImFyaWEtbGFiZWwiLCJzeCIsImJhY2tncm91bmQiLCJiYWNrZHJvcEZpbHRlciIsImJvcmRlckJvdHRvbSIsImJvcmRlckNvbG9yIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiaGVpZ2h0IiwiekluZGV4IiwibWF4V2lkdGgiLCJkaXNhYmxlR3V0dGVycyIsIm1pbkhlaWdodCIsInhzIiwic20iLCJqdXN0aWZ5Q29udGVudCIsInZhcmlhbnQiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJmbGV4R3JvdyIsIm1kIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwiZGlzcGxheSIsInNpemUiLCJvbkNsaWNrIiwiZWRnZSIsImdhcCIsIm1hcCIsInBhc3NIcmVmIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsImJ1dHRvbiIsIndoaWxlVGFwIiwiY29udGVudCIsImJvdHRvbSIsIndpZHRoIiwidHJhbnNmb3JtIiwiYW5jaG9yIiwib3BlbiIsIm9uQ2xvc2UiLCJQYXBlclByb3BzIiwiTW9kYWxQcm9wcyIsImtlZXBNb3VudGVkIiwicHQiLCJweSIsInByaW1hcnkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/NavBar.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./components/SEO.jsx":
/*!****************************!*\
  !*** ./components/SEO.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"(pages-dir-node)/./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst SEO = ({ title = 'My Portfolio', description = 'Welcome to my professional portfolio showcasing my projects and skills in web development.', image = '/og-image.jpg', type = 'website' })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const siteName = 'My Portfolio';\n    const baseUrl = 'https://your-portfolio-url.com';\n    const currentUrl = `${baseUrl}${router.asPath}`;\n    const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: `${title} | ${siteName}`\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"title\",\n                content: `${title} | ${siteName}`\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"description\",\n                content: description\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:type\",\n                content: type\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:url\",\n                content: currentUrl\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:title\",\n                content: `${title} | ${siteName}`\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:description\",\n                content: description\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:image\",\n                content: imageUrl\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:site_name\",\n                content: siteName\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:card\",\n                content: \"summary_large_image\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:url\",\n                content: currentUrl\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:title\",\n                content: `${title} | ${siteName}`\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:description\",\n                content: description\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:image\",\n                content: imageUrl\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"twitter:creator\",\n                content: \"@yourusername\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"canonical\",\n                href: currentUrl\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"viewport\",\n                content: \"width=device-width, initial-scale=1.0\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"robots\",\n                content: \"index, follow\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"author\",\n                content: \"Your Name\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"keywords\",\n                content: \"web development, portfolio, react, nextjs, django, full stack developer\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                type: \"application/ld+json\",\n                dangerouslySetInnerHTML: {\n                    __html: JSON.stringify({\n                        '@context': 'https://schema.org',\n                        '@type': 'Person',\n                        name: 'Your Name',\n                        url: currentUrl,\n                        sameAs: [\n                            'https://github.com/yourusername',\n                            'https://linkedin.com/in/yourusername'\n                        ],\n                        jobTitle: 'Full Stack Developer',\n                        image: image,\n                        description: description,\n                        knowsAbout: [\n                            'Web Development',\n                            'React',\n                            'Next.js',\n                            'Django',\n                            'Python',\n                            'JavaScript'\n                        ]\n                    })\n                }\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvU0VPLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUNXO0FBRXhDLE1BQU1FLE1BQU0sQ0FBQyxFQUNYQyxRQUFRLGNBQWMsRUFDdEJDLGNBQWMsNEZBQTRGLEVBQzFHQyxRQUFRLGVBQWUsRUFDdkJDLE9BQU8sU0FBUyxFQUNqQjtJQUNDLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNTyxXQUFXO0lBQ2pCLE1BQU1DLFVBQVU7SUFDaEIsTUFBTUMsYUFBYSxHQUFHRCxVQUFVRixPQUFPSSxNQUFNLEVBQUU7SUFDL0MsTUFBTUMsV0FBV1AsTUFBTVEsVUFBVSxDQUFDLFVBQVVSLFFBQVEsR0FBR0ksVUFBVUosT0FBTztJQUV4RSxxQkFDRSw4REFBQ0wsa0RBQUlBOzswQkFFSCw4REFBQ0c7MEJBQU8sR0FBR0EsTUFBTSxHQUFHLEVBQUVLLFVBQVU7Ozs7OzswQkFDaEMsOERBQUNNO2dCQUFLQyxNQUFLO2dCQUFRQyxTQUFTLEdBQUdiLE1BQU0sR0FBRyxFQUFFSyxVQUFVOzs7Ozs7MEJBQ3BELDhEQUFDTTtnQkFBS0MsTUFBSztnQkFBY0MsU0FBU1o7Ozs7OzswQkFHbEMsOERBQUNVO2dCQUFLRyxVQUFTO2dCQUFVRCxTQUFTVjs7Ozs7OzBCQUNsQyw4REFBQ1E7Z0JBQUtHLFVBQVM7Z0JBQVNELFNBQVNOOzs7Ozs7MEJBQ2pDLDhEQUFDSTtnQkFBS0csVUFBUztnQkFBV0QsU0FBUyxHQUFHYixNQUFNLEdBQUcsRUFBRUssVUFBVTs7Ozs7OzBCQUMzRCw4REFBQ007Z0JBQUtHLFVBQVM7Z0JBQWlCRCxTQUFTWjs7Ozs7OzBCQUN6Qyw4REFBQ1U7Z0JBQUtHLFVBQVM7Z0JBQVdELFNBQVNKOzs7Ozs7MEJBQ25DLDhEQUFDRTtnQkFBS0csVUFBUztnQkFBZUQsU0FBU1I7Ozs7OzswQkFHdkMsOERBQUNNO2dCQUFLRyxVQUFTO2dCQUFlRCxTQUFROzs7Ozs7MEJBQ3RDLDhEQUFDRjtnQkFBS0csVUFBUztnQkFBY0QsU0FBU047Ozs7OzswQkFDdEMsOERBQUNJO2dCQUFLRyxVQUFTO2dCQUFnQkQsU0FBUyxHQUFHYixNQUFNLEdBQUcsRUFBRUssVUFBVTs7Ozs7OzBCQUNoRSw4REFBQ007Z0JBQUtHLFVBQVM7Z0JBQXNCRCxTQUFTWjs7Ozs7OzBCQUM5Qyw4REFBQ1U7Z0JBQUtHLFVBQVM7Z0JBQWdCRCxTQUFTSjs7Ozs7OzBCQUN4Qyw4REFBQ0U7Z0JBQUtDLE1BQUs7Z0JBQWtCQyxTQUFROzs7Ozs7MEJBR3JDLDhEQUFDRTtnQkFBS0MsS0FBSTtnQkFBWUMsTUFBTVY7Ozs7OzswQkFDNUIsOERBQUNJO2dCQUFLQyxNQUFLO2dCQUFXQyxTQUFROzs7Ozs7MEJBQzlCLDhEQUFDRjtnQkFBS0MsTUFBSztnQkFBU0MsU0FBUTs7Ozs7OzBCQUM1Qiw4REFBQ0Y7Z0JBQUtDLE1BQUs7Z0JBQVNDLFNBQVE7Ozs7OzswQkFDNUIsOERBQUNGO2dCQUFLQyxNQUFLO2dCQUFXQyxTQUFROzs7Ozs7MEJBRzlCLDhEQUFDSztnQkFDQ2YsTUFBSztnQkFDTGdCLHlCQUF5QjtvQkFDdkJDLFFBQVFDLEtBQUtDLFNBQVMsQ0FBQzt3QkFDckIsWUFBWTt3QkFDWixTQUFTO3dCQUNUVixNQUFNO3dCQUNOVyxLQUFLaEI7d0JBQ0xpQixRQUFROzRCQUNOOzRCQUNBO3lCQUVEO3dCQUNEQyxVQUFVO3dCQUNWdkIsT0FBT0E7d0JBQ1BELGFBQWFBO3dCQUNieUIsWUFBWTs0QkFDVjs0QkFDQTs0QkFDQTs0QkFDQTs0QkFDQTs0QkFDQTt5QkFDRDtvQkFDSDtnQkFDRjs7Ozs7Ozs7Ozs7O0FBSVI7QUFFQSxpRUFBZTNCLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluL0Rlc2t0b3AvTXlQcm9qZWN0cy9zaG93Y2FzZS13ZWJzaXRlL2Zyb250ZW5kL2NvbXBvbmVudHMvU0VPLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBTRU8gPSAoeyBcbiAgdGl0bGUgPSAnTXkgUG9ydGZvbGlvJywgXG4gIGRlc2NyaXB0aW9uID0gJ1dlbGNvbWUgdG8gbXkgcHJvZmVzc2lvbmFsIHBvcnRmb2xpbyBzaG93Y2FzaW5nIG15IHByb2plY3RzIGFuZCBza2lsbHMgaW4gd2ViIGRldmVsb3BtZW50LicsXG4gIGltYWdlID0gJy9vZy1pbWFnZS5qcGcnLFxuICB0eXBlID0gJ3dlYnNpdGUnXG59KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzaXRlTmFtZSA9ICdNeSBQb3J0Zm9saW8nO1xuICBjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8veW91ci1wb3J0Zm9saW8tdXJsLmNvbSc7XG4gIGNvbnN0IGN1cnJlbnRVcmwgPSBgJHtiYXNlVXJsfSR7cm91dGVyLmFzUGF0aH1gO1xuICBjb25zdCBpbWFnZVVybCA9IGltYWdlLnN0YXJ0c1dpdGgoJ2h0dHAnKSA/IGltYWdlIDogYCR7YmFzZVVybH0ke2ltYWdlfWA7XG4gIFxuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgey8qIFByaW1hcnkgTWV0YSBUYWdzICovfVxuICAgICAgPHRpdGxlPntgJHt0aXRsZX0gfCAke3NpdGVOYW1lfWB9PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9e2Ake3RpdGxlfSB8ICR7c2l0ZU5hbWV9YH0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgXG4gICAgICB7LyogT3BlbiBHcmFwaCAvIEZhY2Vib29rICovfVxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17dHlwZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17Y3VycmVudFVybH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHt0aXRsZX0gfCAke3NpdGVOYW1lfWB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17aW1hZ2VVcmx9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e3NpdGVOYW1lfSAvPlxuICAgICAgXG4gICAgICB7LyogVHdpdHRlciAqL31cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9e2N1cnJlbnRVcmx9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtgJHt0aXRsZX0gfCAke3NpdGVOYW1lfWB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlVXJsfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJAeW91cnVzZXJuYW1lXCIgLz5cbiAgICAgIFxuICAgICAgey8qIEFkZGl0aW9uYWwgU0VPIHRhZ3MgKi99XG4gICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtjdXJyZW50VXJsfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJpbmRleCwgZm9sbG93XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiWW91ciBOYW1lXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJ3ZWIgZGV2ZWxvcG1lbnQsIHBvcnRmb2xpbywgcmVhY3QsIG5leHRqcywgZGphbmdvLCBmdWxsIHN0YWNrIGRldmVsb3BlclwiIC8+XG4gICAgICBcbiAgICAgIHsvKiBTdHJ1Y3R1cmVkIERhdGEgLyBKU09OLUxEICovfVxuICAgICAgPHNjcmlwdFxuICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAnQGNvbnRleHQnOiAnaHR0cHM6Ly9zY2hlbWEub3JnJyxcbiAgICAgICAgICAgICdAdHlwZSc6ICdQZXJzb24nLFxuICAgICAgICAgICAgbmFtZTogJ1lvdXIgTmFtZScsXG4gICAgICAgICAgICB1cmw6IGN1cnJlbnRVcmwsXG4gICAgICAgICAgICBzYW1lQXM6IFtcbiAgICAgICAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS95b3VydXNlcm5hbWUnLFxuICAgICAgICAgICAgICAnaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4veW91cnVzZXJuYW1lJyxcbiAgICAgICAgICAgICAgLy8gQWRkIG90aGVyIHNvY2lhbCBsaW5rc1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGpvYlRpdGxlOiAnRnVsbCBTdGFjayBEZXZlbG9wZXInLFxuICAgICAgICAgICAgaW1hZ2U6IGltYWdlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAga25vd3NBYm91dDogW1xuICAgICAgICAgICAgICAnV2ViIERldmVsb3BtZW50JyxcbiAgICAgICAgICAgICAgJ1JlYWN0JyxcbiAgICAgICAgICAgICAgJ05leHQuanMnLFxuICAgICAgICAgICAgICAnRGphbmdvJyxcbiAgICAgICAgICAgICAgJ1B5dGhvbicsXG4gICAgICAgICAgICAgICdKYXZhU2NyaXB0J1xuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNFTzsiXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsIlNFTyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInR5cGUiLCJyb3V0ZXIiLCJzaXRlTmFtZSIsImJhc2VVcmwiLCJjdXJyZW50VXJsIiwiYXNQYXRoIiwiaW1hZ2VVcmwiLCJzdGFydHNXaXRoIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwicHJvcGVydHkiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNjcmlwdCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiSlNPTiIsInN0cmluZ2lmeSIsInVybCIsInNhbWVBcyIsImpvYlRpdGxlIiwia25vd3NBYm91dCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/SEO.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/esm/styles/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"(pages-dir-node)/./node_modules/@mui/material/esm/CssBaseline/index.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"(pages-dir-node)/./styles/theme.js\");\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/variables.css */ \"(pages-dir-node)/./styles/variables.css\");\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_variables_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FixedBottomBar.css */ \"(pages-dir-node)/./components/FixedBottomBar.css\");\n/* harmony import */ var _components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../App.css */ \"(pages-dir-node)/./App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ \"(pages-dir-node)/./components/NavBar.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ \"(pages-dir-node)/./components/Footer.jsx\");\n/* harmony import */ var _components_FixedBottomBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FixedBottomBar */ \"(pages-dir-node)/./components/FixedBottomBar.jsx\");\n/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SEO */ \"(pages-dir-node)/./components/SEO.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles_theme__WEBPACK_IMPORTED_MODULE_3__, _components_NavBar__WEBPACK_IMPORTED_MODULE_7__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__, _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_12__]);\n([_styles_theme__WEBPACK_IMPORTED_MODULE_3__, _components_NavBar__WEBPACK_IMPORTED_MODULE_7__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__, _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            // Remove the server-side injected CSS\n            const jssStyles = document.querySelector('#jss-server-side');\n            if (jssStyles) {\n                jssStyles.parentElement.removeChild(jssStyles);\n            }\n            // Pre-fetch all routes for instant navigation\n            [\n                '/',\n                '/portfolio',\n                '/projects',\n                '/resume',\n                '/contactus'\n            ].forEach({\n                \"MyApp.useEffect\": (route)=>{\n                    router.prefetch(route);\n                }\n            }[\"MyApp.useEffect\"]);\n        }\n    }[\"MyApp.useEffect\"], []);\n    // Define SEO metadata based on current route\n    const getPageMetadata = ()=>{\n        const path = router.pathname;\n        const baseUrl = 'https://your-portfolio-url.com';\n        const metadata = {\n            '/': {\n                title: 'My Portfolio - Full Stack Developer',\n                description: 'Welcome to my portfolio showcasing my expertise in web development, featuring projects in React, Next.js, and Django.',\n                image: `${baseUrl}/og-home.jpg`,\n                type: 'website'\n            },\n            '/portfolio': {\n                title: 'Portfolio - My Work and Projects',\n                description: 'Explore my portfolio of web development projects, including full-stack applications, responsive websites, and interactive UIs.',\n                image: `${baseUrl}/og-portfolio.jpg`,\n                type: 'website'\n            },\n            '/projects': {\n                title: 'Projects - Web Development Showcase',\n                description: 'View my latest web development projects built with modern technologies like React, Next.js, and Django.',\n                image: `${baseUrl}/og-projects.jpg`,\n                type: 'website'\n            },\n            '/resume': {\n                title: 'Resume - Full Stack Developer',\n                description: 'Professional experience, skills, and qualifications in web development and software engineering.',\n                image: `${baseUrl}/og-resume.jpg`,\n                type: 'profile'\n            },\n            '/contactus': {\n                title: 'Contact Me - Let\\'s Work Together',\n                description: 'Get in touch for collaboration opportunities, project inquiries, or professional connections.',\n                image: `${baseUrl}/og-contact.jpg`,\n                type: 'website'\n            }\n        };\n        return metadata[path] || metadata['/'];\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SEO__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                ...getPageMetadata()\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"content\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNNO0FBQ2E7QUFDRDtBQUNoQjtBQUNIO0FBQ1M7QUFDdEI7QUFDc0I7QUFDQTtBQUNnQjtBQUN0QjtBQUVwQyxTQUFTUyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLE1BQU1DLFNBQVNYLHNEQUFTQTtJQUV4QkQsZ0RBQVNBOzJCQUFDO1lBQ1Isc0NBQXNDO1lBQ3RDLE1BQU1hLFlBQVlDLFNBQVNDLGFBQWEsQ0FBQztZQUN6QyxJQUFJRixXQUFXO2dCQUNiQSxVQUFVRyxhQUFhLENBQUNDLFdBQVcsQ0FBQ0o7WUFDdEM7WUFFQSw4Q0FBOEM7WUFDOUM7Z0JBQUM7Z0JBQUs7Z0JBQWM7Z0JBQWE7Z0JBQVc7YUFBYSxDQUFDSyxPQUFPO21DQUFDQyxDQUFBQTtvQkFDaEVQLE9BQU9RLFFBQVEsQ0FBQ0Q7Z0JBQ2xCOztRQUNGOzBCQUFHLEVBQUU7SUFFTCw2Q0FBNkM7SUFDN0MsTUFBTUUsa0JBQWtCO1FBQ3RCLE1BQU1DLE9BQU9WLE9BQU9XLFFBQVE7UUFDNUIsTUFBTUMsVUFBVTtRQUVoQixNQUFNQyxXQUFXO1lBQ2YsS0FBSztnQkFDSEMsT0FBTztnQkFDUEMsYUFBYTtnQkFDYkMsT0FBTyxHQUFHSixRQUFRLFlBQVksQ0FBQztnQkFDL0JLLE1BQU07WUFDUjtZQUNBLGNBQWM7Z0JBQ1pILE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLE9BQU8sR0FBR0osUUFBUSxpQkFBaUIsQ0FBQztnQkFDcENLLE1BQU07WUFDUjtZQUNBLGFBQWE7Z0JBQ1hILE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLE9BQU8sR0FBR0osUUFBUSxnQkFBZ0IsQ0FBQztnQkFDbkNLLE1BQU07WUFDUjtZQUNBLFdBQVc7Z0JBQ1RILE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLE9BQU8sR0FBR0osUUFBUSxjQUFjLENBQUM7Z0JBQ2pDSyxNQUFNO1lBQ1I7WUFDQSxjQUFjO2dCQUNaSCxPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxPQUFPLEdBQUdKLFFBQVEsZUFBZSxDQUFDO2dCQUNsQ0ssTUFBTTtZQUNSO1FBQ0Y7UUFFQSxPQUFPSixRQUFRLENBQUNILEtBQUssSUFBSUcsUUFBUSxDQUFDLElBQUk7SUFDeEM7SUFFQSxxQkFDRSw4REFBQ3ZCLGdFQUFhQTtRQUFDRSxPQUFPQSxxREFBS0E7OzBCQUN6Qiw4REFBQ0Qsa0VBQVdBOzs7OzswQkFDWiw4REFBQ0ssd0RBQUdBO2dCQUFFLEdBQUdhLGlCQUFpQjs7Ozs7OzBCQUMxQiw4REFBQ2hCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUN5QjtnQkFBS0MsV0FBVTswQkFDZCw0RUFBQ3JCO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OzBCQUUxQiw4REFBQ0wsMERBQU1BOzs7Ozs7Ozs7OztBQUdiO0FBRUEsaUVBQWVHLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluL0Rlc2t0b3AvTXlQcm9qZWN0cy9zaG93Y2FzZS13ZWJzaXRlL2Zyb250ZW5kL3BhZ2VzL19hcHAuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcbmltcG9ydCAnLi4vc3R5bGVzL3ZhcmlhYmxlcy5jc3MnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL0ZpeGVkQm90dG9tQmFyLmNzcyc7XG5pbXBvcnQgJy4uL0FwcC5jc3MnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBGaXhlZEJvdHRvbUJhciBmcm9tICcuLi9jb21wb25lbnRzL0ZpeGVkQm90dG9tQmFyJztcbmltcG9ydCBTRU8gZnJvbSAnLi4vY29tcG9uZW50cy9TRU8nO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTU1xuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKTtcbiAgICBpZiAoanNzU3R5bGVzKSB7XG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xuICAgIH1cblxuICAgIC8vIFByZS1mZXRjaCBhbGwgcm91dGVzIGZvciBpbnN0YW50IG5hdmlnYXRpb25cbiAgICBbJy8nLCAnL3BvcnRmb2xpbycsICcvcHJvamVjdHMnLCAnL3Jlc3VtZScsICcvY29udGFjdHVzJ10uZm9yRWFjaChyb3V0ZSA9PiB7XG4gICAgICByb3V0ZXIucHJlZmV0Y2gocm91dGUpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gRGVmaW5lIFNFTyBtZXRhZGF0YSBiYXNlZCBvbiBjdXJyZW50IHJvdXRlXG4gIGNvbnN0IGdldFBhZ2VNZXRhZGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXRoID0gcm91dGVyLnBhdGhuYW1lO1xuICAgIGNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly95b3VyLXBvcnRmb2xpby11cmwuY29tJztcbiAgICBcbiAgICBjb25zdCBtZXRhZGF0YSA9IHtcbiAgICAgICcvJzoge1xuICAgICAgICB0aXRsZTogJ015IFBvcnRmb2xpbyAtIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdXZWxjb21lIHRvIG15IHBvcnRmb2xpbyBzaG93Y2FzaW5nIG15IGV4cGVydGlzZSBpbiB3ZWIgZGV2ZWxvcG1lbnQsIGZlYXR1cmluZyBwcm9qZWN0cyBpbiBSZWFjdCwgTmV4dC5qcywgYW5kIERqYW5nby4nLFxuICAgICAgICBpbWFnZTogYCR7YmFzZVVybH0vb2ctaG9tZS5qcGdgLFxuICAgICAgICB0eXBlOiAnd2Vic2l0ZSdcbiAgICAgIH0sXG4gICAgICAnL3BvcnRmb2xpbyc6IHtcbiAgICAgICAgdGl0bGU6ICdQb3J0Zm9saW8gLSBNeSBXb3JrIGFuZCBQcm9qZWN0cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRXhwbG9yZSBteSBwb3J0Zm9saW8gb2Ygd2ViIGRldmVsb3BtZW50IHByb2plY3RzLCBpbmNsdWRpbmcgZnVsbC1zdGFjayBhcHBsaWNhdGlvbnMsIHJlc3BvbnNpdmUgd2Vic2l0ZXMsIGFuZCBpbnRlcmFjdGl2ZSBVSXMuJyxcbiAgICAgICAgaW1hZ2U6IGAke2Jhc2VVcmx9L29nLXBvcnRmb2xpby5qcGdgLFxuICAgICAgICB0eXBlOiAnd2Vic2l0ZSdcbiAgICAgIH0sXG4gICAgICAnL3Byb2plY3RzJzoge1xuICAgICAgICB0aXRsZTogJ1Byb2plY3RzIC0gV2ViIERldmVsb3BtZW50IFNob3djYXNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdWaWV3IG15IGxhdGVzdCB3ZWIgZGV2ZWxvcG1lbnQgcHJvamVjdHMgYnVpbHQgd2l0aCBtb2Rlcm4gdGVjaG5vbG9naWVzIGxpa2UgUmVhY3QsIE5leHQuanMsIGFuZCBEamFuZ28uJyxcbiAgICAgICAgaW1hZ2U6IGAke2Jhc2VVcmx9L29nLXByb2plY3RzLmpwZ2AsXG4gICAgICAgIHR5cGU6ICd3ZWJzaXRlJ1xuICAgICAgfSxcbiAgICAgICcvcmVzdW1lJzoge1xuICAgICAgICB0aXRsZTogJ1Jlc3VtZSAtIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdQcm9mZXNzaW9uYWwgZXhwZXJpZW5jZSwgc2tpbGxzLCBhbmQgcXVhbGlmaWNhdGlvbnMgaW4gd2ViIGRldmVsb3BtZW50IGFuZCBzb2Z0d2FyZSBlbmdpbmVlcmluZy4nLFxuICAgICAgICBpbWFnZTogYCR7YmFzZVVybH0vb2ctcmVzdW1lLmpwZ2AsXG4gICAgICAgIHR5cGU6ICdwcm9maWxlJ1xuICAgICAgfSxcbiAgICAgICcvY29udGFjdHVzJzoge1xuICAgICAgICB0aXRsZTogJ0NvbnRhY3QgTWUgLSBMZXRcXCdzIFdvcmsgVG9nZXRoZXInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0dldCBpbiB0b3VjaCBmb3IgY29sbGFib3JhdGlvbiBvcHBvcnR1bml0aWVzLCBwcm9qZWN0IGlucXVpcmllcywgb3IgcHJvZmVzc2lvbmFsIGNvbm5lY3Rpb25zLicsXG4gICAgICAgIGltYWdlOiBgJHtiYXNlVXJsfS9vZy1jb250YWN0LmpwZ2AsXG4gICAgICAgIHR5cGU6ICd3ZWJzaXRlJ1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbWV0YWRhdGFbcGF0aF0gfHwgbWV0YWRhdGFbJy8nXTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgIDxTRU8gey4uLmdldFBhZ2VNZXRhZGF0YSgpfSAvPlxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwidGhlbWUiLCJOYXZCYXIiLCJGb290ZXIiLCJGaXhlZEJvdHRvbUJhciIsIlNFTyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiZm9yRWFjaCIsInJvdXRlIiwicHJlZmV0Y2giLCJnZXRQYWdlTWV0YWRhdGEiLCJwYXRoIiwicGF0aG5hbWUiLCJiYXNlVXJsIiwibWV0YWRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0eXBlIiwibWFpbiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/esm/styles/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__]);\n_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    breakpoints: {\n        values: {\n            xs: 0,\n            sm: 600,\n            md: 960,\n            lg: 1280,\n            xl: 1920\n        }\n    },\n    palette: {\n        mode: 'dark',\n        primary: {\n            main: '#3b82f6',\n            light: '#60a5fa',\n            dark: '#1e40af',\n            contrastText: '#ffffff'\n        },\n        secondary: {\n            main: '#f59e0b',\n            light: '#fbbf24',\n            dark: '#d97706',\n            contrastText: '#000000'\n        },\n        background: {\n            default: '#0f172a',\n            paper: '#1e293b'\n        },\n        text: {\n            primary: '#f1f5f9',\n            secondary: '#cbd5e1'\n        },\n        success: {\n            main: '#10b981',\n            light: '#34d399',\n            dark: '#047857'\n        },\n        error: {\n            main: '#ef4444',\n            light: '#f87171',\n            dark: '#dc2626'\n        },\n        warning: {\n            main: '#f59e0b',\n            light: '#fbbf24',\n            dark: '#d97706'\n        },\n        info: {\n            main: '#06b6d4',\n            light: '#22d3ee',\n            dark: '#0891b2'\n        },\n        divider: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#cbd5e1', 0.1)\n    },\n    typography: {\n        fontFamily: '\"Inter\", \"Roboto\", \"Helvetica\", \"Arial\", sans-serif',\n        h1: {\n            fontSize: 'clamp(2rem, 5vw, 3rem)',\n            fontWeight: 700,\n            lineHeight: 1.2,\n            letterSpacing: '-0.02em',\n            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',\n            background: 'linear-gradient(135deg, #3b82f6 0%, #f59e0b 100%)',\n            backgroundClip: 'text',\n            WebkitBackgroundClip: 'text',\n            WebkitTextFillColor: 'transparent'\n        },\n        h2: {\n            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',\n            fontWeight: 600,\n            lineHeight: 1.3,\n            letterSpacing: '-0.01em',\n            marginBottom: 'clamp(0.75rem, 2.5vw, 1.25rem)'\n        },\n        h3: {\n            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',\n            fontWeight: 600,\n            lineHeight: 1.4,\n            marginBottom: 'clamp(0.5rem, 2vw, 1rem)'\n        },\n        body1: {\n            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',\n            lineHeight: 1.6,\n            marginBottom: 'clamp(0.75rem, 2vw, 1rem)',\n            color: '#cbd5e1'\n        },\n        body2: {\n            fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',\n            lineHeight: 1.5,\n            marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)',\n            color: '#94a3b8'\n        },\n        button: {\n            fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',\n            fontWeight: 600,\n            letterSpacing: '0.02em',\n            textTransform: 'none'\n        }\n    },\n    spacing: (factor)=>`${0.5 * factor}rem`,\n    shape: {\n        borderRadius: 12\n    },\n    components: {\n        MuiCssBaseline: {\n            styleOverrides: {\n                body: {\n                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',\n                    backgroundAttachment: 'fixed'\n                }\n            }\n        },\n        MuiContainer: {\n            styleOverrides: {\n                root: {\n                    paddingLeft: 'clamp(1rem, 5vw, 3rem)',\n                    paddingRight: 'clamp(1rem, 5vw, 3rem)',\n                    '@media (max-width: 600px)': {\n                        paddingLeft: '1rem',\n                        paddingRight: '1rem'\n                    }\n                }\n            }\n        },\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    textTransform: 'none',\n                    fontWeight: 600,\n                    padding: '0.75rem 1.5rem',\n                    borderRadius: '8px',\n                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',\n                    '@media (max-width: 600px)': {\n                        padding: '0.625rem 1rem',\n                        width: '100%'\n                    }\n                },\n                containedPrimary: {\n                    background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',\n                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',\n                    '&:hover': {\n                        boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',\n                        transform: 'translateY(-2px)'\n                    }\n                },\n                containedSecondary: {\n                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',\n                    boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)',\n                    '&:hover': {\n                        boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)',\n                        transform: 'translateY(-2px)'\n                    }\n                },\n                outlined: {\n                    borderColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.5),\n                    color: '#3b82f6',\n                    '&:hover': {\n                        borderColor: '#3b82f6',\n                        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.08)\n                    }\n                }\n            }\n        },\n        MuiCard: {\n            styleOverrides: {\n                root: {\n                    borderRadius: 16,\n                    backgroundColor: 'rgba(30, 41, 59, 0.5)',\n                    backdropFilter: 'blur(10px)',\n                    border: `1px solid ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.1)}`,\n                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',\n                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',\n                    '@media (max-width: 600px)': {\n                        borderRadius: 12\n                    },\n                    '&:hover': {\n                        transform: 'translateY(-8px)',\n                        boxShadow: '0 12px 40px rgba(59, 130, 246, 0.2)',\n                        borderColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.3)\n                    }\n                }\n            }\n        },\n        MuiOutlinedInput: {\n            styleOverrides: {\n                root: {\n                    '& fieldset': {\n                        borderColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.2),\n                        transition: 'all 0.3s ease-in-out'\n                    },\n                    '&:hover fieldset': {\n                        borderColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.4)\n                    },\n                    '&.Mui-focused fieldset': {\n                        borderColor: '#3b82f6',\n                        boxShadow: `0 0 0 3px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.1)}`\n                    }\n                }\n            }\n        },\n        MuiTextField: {\n            styleOverrides: {\n                root: {\n                    '& .MuiInputLabel-root': {\n                        color: '#cbd5e1',\n                        '&.Mui-focused': {\n                            color: '#3b82f6'\n                        }\n                    }\n                }\n            }\n        },\n        MuiChip: {\n            styleOverrides: {\n                root: {\n                    backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.15),\n                    color: '#3b82f6',\n                    border: `1px solid ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.3)}`,\n                    '&:hover': {\n                        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.25)\n                    }\n                }\n            }\n        },\n        MuiPaper: {\n            styleOverrides: {\n                root: {\n                    backgroundColor: 'rgba(30, 41, 59, 0.6)',\n                    backdropFilter: 'blur(10px)',\n                    border: `1px solid ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.1)}`\n                }\n            }\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxXQUFXO29CQUNwQztnQkFDRjtZQUNGO1FBQ0Y7UUFDQTBFLFVBQVU7WUFDUnhCLGdCQUFnQjtnQkFDZEksTUFBTTtvQkFDSmEsaUJBQWlCO29CQUNqQkUsZ0JBQWdCO29CQUNoQkMsUUFBUSxDQUFDLFVBQVUsRUFBRXRFLDJEQUFLQSxDQUFDLFdBQVcsTUFBTTtnQkFDOUM7WUFDRjtRQUNGO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlQyxLQUFLQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYW1pbi9EZXNrdG9wL015UHJvamVjdHMvc2hvd2Nhc2Utd2Vic2l0ZS9mcm9udGVuZC9zdHlsZXMvdGhlbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVGhlbWUsIGFscGhhIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgYnJlYWtwb2ludHM6IHtcbiAgICB2YWx1ZXM6IHtcbiAgICAgIHhzOiAwLCAgICAgIC8vIE1vYmlsZVxuICAgICAgc206IDYwMCwgICAgLy8gVGFibGV0XG4gICAgICBtZDogOTYwLCAgICAvLyBTbWFsbCBsYXB0b3BcbiAgICAgIGxnOiAxMjgwLCAgIC8vIERlc2t0b3BcbiAgICAgIHhsOiAxOTIwLCAgIC8vIExhcmdlIHNjcmVlbnNcbiAgICB9LFxuICB9LFxuICBwYWxldHRlOiB7XG4gICAgbW9kZTogJ2RhcmsnLFxuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjM2I4MmY2JyxcbiAgICAgIGxpZ2h0OiAnIzYwYTVmYScsXG4gICAgICBkYXJrOiAnIzFlNDBhZicsXG4gICAgICBjb250cmFzdFRleHQ6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyNmNTllMGInLFxuICAgICAgbGlnaHQ6ICcjZmJiZjI0JyxcbiAgICAgIGRhcms6ICcjZDk3NzA2JyxcbiAgICAgIGNvbnRyYXN0VGV4dDogJyMwMDAwMDAnLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgZGVmYXVsdDogJyMwZjE3MmEnLFxuICAgICAgcGFwZXI6ICcjMWUyOTNiJyxcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgIHByaW1hcnk6ICcjZjFmNWY5JyxcbiAgICAgIHNlY29uZGFyeTogJyNjYmQ1ZTEnLFxuICAgIH0sXG4gICAgc3VjY2Vzczoge1xuICAgICAgbWFpbjogJyMxMGI5ODEnLFxuICAgICAgbGlnaHQ6ICcjMzRkMzk5JyxcbiAgICAgIGRhcms6ICcjMDQ3ODU3JyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiAnI2VmNDQ0NCcsXG4gICAgICBsaWdodDogJyNmODcxNzEnLFxuICAgICAgZGFyazogJyNkYzI2MjYnLFxuICAgIH0sXG4gICAgd2FybmluZzoge1xuICAgICAgbWFpbjogJyNmNTllMGInLFxuICAgICAgbGlnaHQ6ICcjZmJiZjI0JyxcbiAgICAgIGRhcms6ICcjZDk3NzA2JyxcbiAgICB9LFxuICAgIGluZm86IHtcbiAgICAgIG1haW46ICcjMDZiNmQ0JyxcbiAgICAgIGxpZ2h0OiAnIzIyZDNlZScsXG4gICAgICBkYXJrOiAnIzA4OTFiMicsXG4gICAgfSxcbiAgICBkaXZpZGVyOiBhbHBoYSgnI2NiZDVlMScsIDAuMSksXG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiAnXCJJbnRlclwiLCBcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnLFxuICAgIGgxOiB7XG4gICAgICBmb250U2l6ZTogJ2NsYW1wKDJyZW0sIDV2dywgM3JlbSknLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbGluZUhlaWdodDogMS4yLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjAyZW0nLFxuICAgICAgbWFyZ2luQm90dG9tOiAnY2xhbXAoMXJlbSwgM3Z3LCAxLjVyZW0pJyxcbiAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjM2I4MmY2IDAlLCAjZjU5ZTBiIDEwMCUpJyxcbiAgICAgIGJhY2tncm91bmRDbGlwOiAndGV4dCcsXG4gICAgICBXZWJraXRCYWNrZ3JvdW5kQ2xpcDogJ3RleHQnLFxuICAgICAgV2Via2l0VGV4dEZpbGxDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICBmb250U2l6ZTogJ2NsYW1wKDEuNXJlbSwgNHZ3LCAyLjI1cmVtKScsXG4gICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjMsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDFlbScsXG4gICAgICBtYXJnaW5Cb3R0b206ICdjbGFtcCgwLjc1cmVtLCAyLjV2dywgMS4yNXJlbSknLFxuICAgIH0sXG4gICAgaDM6IHtcbiAgICAgIGZvbnRTaXplOiAnY2xhbXAoMS4yNXJlbSwgM3Z3LCAxLjc1cmVtKScsXG4gICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gICAgICBtYXJnaW5Cb3R0b206ICdjbGFtcCgwLjVyZW0sIDJ2dywgMXJlbSknLFxuICAgIH0sXG4gICAgYm9keTE6IHtcbiAgICAgIGZvbnRTaXplOiAnY2xhbXAoMXJlbSwgMS41dncsIDEuMTI1cmVtKScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjYsXG4gICAgICBtYXJnaW5Cb3R0b206ICdjbGFtcCgwLjc1cmVtLCAydncsIDFyZW0pJyxcbiAgICAgIGNvbG9yOiAnI2NiZDVlMScsXG4gICAgfSxcbiAgICBib2R5Mjoge1xuICAgICAgZm9udFNpemU6ICdjbGFtcCgwLjg3NXJlbSwgMS4ydncsIDFyZW0pJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICAgIG1hcmdpbkJvdHRvbTogJ2NsYW1wKDAuNXJlbSwgMS41dncsIDAuNzVyZW0pJyxcbiAgICAgIGNvbG9yOiAnIzk0YTNiOCcsXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGZvbnRTaXplOiAnY2xhbXAoMC44NzVyZW0sIDEuMnZ3LCAxcmVtKScsXG4gICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wMmVtJyxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICB9LFxuICB9LFxuICBzcGFjaW5nOiAoZmFjdG9yKSA9PiBgJHswLjUgKiBmYWN0b3J9cmVtYCxcbiAgc2hhcGU6IHtcbiAgICBib3JkZXJSYWRpdXM6IDEyLFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgTXVpQ3NzQmFzZWxpbmU6IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzBmMTcyYSAwJSwgIzFlMjkzYiAxMDAlKScsXG4gICAgICAgICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6ICdmaXhlZCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpQ29udGFpbmVyOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgcGFkZGluZ0xlZnQ6ICdjbGFtcCgxcmVtLCA1dncsIDNyZW0pJyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICdjbGFtcCgxcmVtLCA1dncsIDNyZW0pJyxcbiAgICAgICAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSc6IHtcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMXJlbScsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxcmVtJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUJ1dHRvbjoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgcGFkZGluZzogJzAuNzVyZW0gMS41cmVtJyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxuICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpJyxcbiAgICAgICAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSc6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6ICcwLjYyNXJlbSAxcmVtJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbmVkUHJpbWFyeToge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjM2I4MmY2IDAlLCAjMWU0MGFmIDEwMCUpJyxcbiAgICAgICAgICBib3hTaGFkb3c6ICcwIDRweCAxNXB4IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjMpJyxcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzAgOHB4IDI1cHggcmdiYSg1OSwgMTMwLCAyNDYsIDAuNCknLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMnB4KScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbmVkU2Vjb25kYXJ5OiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNTllMGIgMCUsICNkOTc3MDYgMTAwJSknLFxuICAgICAgICAgIGJveFNoYWRvdzogJzAgNHB4IDE1cHggcmdiYSgyNDUsIDE1OCwgMTEsIDAuMyknLFxuICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgYm94U2hhZG93OiAnMCA4cHggMjVweCByZ2JhKDI0NSwgMTU4LCAxMSwgMC40KScsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0ycHgpJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvdXRsaW5lZDoge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiBhbHBoYSgnIzNiODJmNicsIDAuNSksXG4gICAgICAgICAgY29sb3I6ICcjM2I4MmY2JyxcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzNiODJmNicsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFscGhhKCcjM2I4MmY2JywgMC4wOCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlDYXJkOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDMwLCA0MSwgNTksIDAuNSknLFxuICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiAnYmx1cigxMHB4KScsXG4gICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7YWxwaGEoJyMzYjgyZjYnLCAwLjEpfWAsXG4gICAgICAgICAgYm94U2hhZG93OiAnMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMyknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpJyxcbiAgICAgICAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSc6IHtcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLThweCknLFxuICAgICAgICAgICAgYm94U2hhZG93OiAnMCAxMnB4IDQwcHggcmdiYSg1OSwgMTMwLCAyNDYsIDAuMiknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFscGhhKCcjM2I4MmY2JywgMC4zKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aU91dGxpbmVkSW5wdXQ6IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAnJiBmaWVsZHNldCc6IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhbHBoYSgnIzNiODJmNicsIDAuMiksXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZS1pbi1vdXQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6aG92ZXIgZmllbGRzZXQnOiB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcjogYWxwaGEoJyMzYjgyZjYnLCAwLjQpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyYuTXVpLWZvY3VzZWQgZmllbGRzZXQnOiB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyMzYjgyZjYnLFxuICAgICAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgM3B4ICR7YWxwaGEoJyMzYjgyZjYnLCAwLjEpfWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlUZXh0RmllbGQ6IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAnJiAuTXVpSW5wdXRMYWJlbC1yb290Jzoge1xuICAgICAgICAgICAgY29sb3I6ICcjY2JkNWUxJyxcbiAgICAgICAgICAgICcmLk11aS1mb2N1c2VkJzoge1xuICAgICAgICAgICAgICBjb2xvcjogJyMzYjgyZjYnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUNoaXA6IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFscGhhKCcjM2I4MmY2JywgMC4xNSksXG4gICAgICAgICAgY29sb3I6ICcjM2I4MmY2JyxcbiAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHthbHBoYSgnIzNiODJmNicsIDAuMyl9YCxcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWxwaGEoJyMzYjgyZjYnLCAwLjI1KSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVBhcGVyOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgzMCwgNDEsIDU5LCAwLjYpJyxcbiAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogJ2JsdXIoMTBweCknLFxuICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2FscGhhKCcjM2I4MmY2JywgMC4xKX1gLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lOyJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsImFscGhhIiwidGhlbWUiLCJicmVha3BvaW50cyIsInZhbHVlcyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJwYWxldHRlIiwibW9kZSIsInByaW1hcnkiLCJtYWluIiwibGlnaHQiLCJkYXJrIiwiY29udHJhc3RUZXh0Iiwic2Vjb25kYXJ5IiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJwYXBlciIsInRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJ3YXJuaW5nIiwiaW5mbyIsImRpdmlkZXIiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsImgxIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kQ2xpcCIsIldlYmtpdEJhY2tncm91bmRDbGlwIiwiV2Via2l0VGV4dEZpbGxDb2xvciIsImgyIiwiaDMiLCJib2R5MSIsImNvbG9yIiwiYm9keTIiLCJidXR0b24iLCJ0ZXh0VHJhbnNmb3JtIiwic3BhY2luZyIsImZhY3RvciIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwiY29tcG9uZW50cyIsIk11aUNzc0Jhc2VsaW5lIiwic3R5bGVPdmVycmlkZXMiLCJib2R5IiwiYmFja2dyb3VuZEF0dGFjaG1lbnQiLCJNdWlDb250YWluZXIiLCJyb290IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJNdWlCdXR0b24iLCJwYWRkaW5nIiwidHJhbnNpdGlvbiIsIndpZHRoIiwiY29udGFpbmVkUHJpbWFyeSIsImJveFNoYWRvdyIsInRyYW5zZm9ybSIsImNvbnRhaW5lZFNlY29uZGFyeSIsIm91dGxpbmVkIiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNdWlDYXJkIiwiYmFja2Ryb3BGaWx0ZXIiLCJib3JkZXIiLCJNdWlPdXRsaW5lZElucHV0IiwiTXVpVGV4dEZpZWxkIiwiTXVpQ2hpcCIsIk11aVBhcGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./styles/theme.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/variables.css":
/*!******************************!*\
  !*** ./styles/variables.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system");;

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/DefaultPropsProvider");;

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/InitColorSchemeScript");;

/***/ }),

/***/ "@mui/system/RtlProvider":
/*!******************************************!*\
  !*** external "@mui/system/RtlProvider" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/RtlProvider");;

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/colorManipulator");;

/***/ }),

/***/ "@mui/system/createBreakpoints":
/*!************************************************!*\
  !*** external "@mui/system/createBreakpoints" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/createBreakpoints");;

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/createStyled");;

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/createTheme");;

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/cssVars");;

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/spacing");;

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/styleFunctionSx");;

/***/ }),

/***/ "@mui/system/useMediaQuery":
/*!********************************************!*\
  !*** external "@mui/system/useMediaQuery" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/useMediaQuery");;

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/useThemeProps");;

/***/ }),

/***/ "@mui/utils/ClassNameGenerator":
/*!************************************************!*\
  !*** external "@mui/utils/ClassNameGenerator" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/ClassNameGenerator");;

/***/ }),

/***/ "@mui/utils/HTMLElementType":
/*!*********************************************!*\
  !*** external "@mui/utils/HTMLElementType" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/HTMLElementType");;

/***/ }),

/***/ "@mui/utils/appendOwnerState":
/*!**********************************************!*\
  !*** external "@mui/utils/appendOwnerState" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/appendOwnerState");;

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/capitalize");;

/***/ }),

/***/ "@mui/utils/chainPropTypes":
/*!********************************************!*\
  !*** external "@mui/utils/chainPropTypes" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/chainPropTypes");;

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/composeClasses");;

/***/ }),

/***/ "@mui/utils/createChainedFunction":
/*!***************************************************!*\
  !*** external "@mui/utils/createChainedFunction" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/createChainedFunction");;

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/debounce");;

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/deepmerge");;

/***/ }),

/***/ "@mui/utils/deprecatedPropType":
/*!************************************************!*\
  !*** external "@mui/utils/deprecatedPropType" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/deprecatedPropType");;

/***/ }),

/***/ "@mui/utils/elementAcceptingRef":
/*!*************************************************!*\
  !*** external "@mui/utils/elementAcceptingRef" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/elementAcceptingRef");;

/***/ }),

/***/ "@mui/utils/elementTypeAcceptingRef":
/*!*****************************************************!*\
  !*** external "@mui/utils/elementTypeAcceptingRef" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/elementTypeAcceptingRef");;

/***/ }),

/***/ "@mui/utils/exactProp":
/*!***************************************!*\
  !*** external "@mui/utils/exactProp" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/exactProp");;

/***/ }),

/***/ "@mui/utils/extractEventHandlers":
/*!**************************************************!*\
  !*** external "@mui/utils/extractEventHandlers" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/extractEventHandlers");;

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/formatMuiErrorMessage");;

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/generateUtilityClass");;

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/generateUtilityClasses");;

/***/ }),

/***/ "@mui/utils/getActiveElement":
/*!**********************************************!*\
  !*** external "@mui/utils/getActiveElement" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/getActiveElement");;

/***/ }),

/***/ "@mui/utils/getReactElementRef":
/*!************************************************!*\
  !*** external "@mui/utils/getReactElementRef" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/getReactElementRef");;

/***/ }),

/***/ "@mui/utils/getScrollbarSize":
/*!**********************************************!*\
  !*** external "@mui/utils/getScrollbarSize" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/getScrollbarSize");;

/***/ }),

/***/ "@mui/utils/integerPropType":
/*!*********************************************!*\
  !*** external "@mui/utils/integerPropType" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/integerPropType");;

/***/ }),

/***/ "@mui/utils/isFocusVisible":
/*!********************************************!*\
  !*** external "@mui/utils/isFocusVisible" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/isFocusVisible");;

/***/ }),

/***/ "@mui/utils/isHostComponent":
/*!*********************************************!*\
  !*** external "@mui/utils/isHostComponent" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/isHostComponent");;

/***/ }),

/***/ "@mui/utils/isMuiElement":
/*!******************************************!*\
  !*** external "@mui/utils/isMuiElement" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/isMuiElement");;

/***/ }),

/***/ "@mui/utils/mergeSlotProps":
/*!********************************************!*\
  !*** external "@mui/utils/mergeSlotProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/mergeSlotProps");;

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/ownerDocument");;

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/ownerWindow");;

/***/ }),

/***/ "@mui/utils/refType":
/*!*************************************!*\
  !*** external "@mui/utils/refType" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/refType");;

/***/ }),

/***/ "@mui/utils/requirePropFactory":
/*!************************************************!*\
  !*** external "@mui/utils/requirePropFactory" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/requirePropFactory");;

/***/ }),

/***/ "@mui/utils/resolveComponentProps":
/*!***************************************************!*\
  !*** external "@mui/utils/resolveComponentProps" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/resolveComponentProps");;

/***/ }),

/***/ "@mui/utils/resolveProps":
/*!******************************************!*\
  !*** external "@mui/utils/resolveProps" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/resolveProps");;

/***/ }),

/***/ "@mui/utils/setRef":
/*!************************************!*\
  !*** external "@mui/utils/setRef" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/setRef");;

/***/ }),

/***/ "@mui/utils/unsupportedProp":
/*!*********************************************!*\
  !*** external "@mui/utils/unsupportedProp" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/unsupportedProp");;

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useControlled");;

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useEnhancedEffect");;

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useEventCallback");;

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useForkRef");;

/***/ }),

/***/ "@mui/utils/useId":
/*!***********************************!*\
  !*** external "@mui/utils/useId" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useId");;

/***/ }),

/***/ "@mui/utils/useLazyRef":
/*!****************************************!*\
  !*** external "@mui/utils/useLazyRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useLazyRef");;

/***/ }),

/***/ "@mui/utils/useTimeout":
/*!****************************************!*\
  !*** external "@mui/utils/useTimeout" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useTimeout");;

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("clsx");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@mui","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.jsx")));
module.exports = __webpack_exports__;

})();