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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FixedBottomBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FixedBottomBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FixedBottomBar.module.css */ \"(pages-dir-node)/./components/FixedBottomBar.module.css\");\n/* harmony import */ var _FixedBottomBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FixedBottomBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction FixedBottomBar() {\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleClose = ()=>{\n        setIsVisible(false);\n        document.body.style.paddingBottom = '0';\n    };\n    const handleKeyDown = (event)=>{\n        if (event.key === 'Escape') {\n            handleClose();\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"FixedBottomBar.useEffect\": ()=>{\n            if (isVisible) {\n                document.body.style.paddingBottom = '80px'; // Adjust to match bar height\n                window.addEventListener('keydown', handleKeyDown);\n            }\n            return ({\n                \"FixedBottomBar.useEffect\": ()=>{\n                    window.removeEventListener('keydown', handleKeyDown);\n                }\n            })[\"FixedBottomBar.useEffect\"];\n        }\n    }[\"FixedBottomBar.useEffect\"], [\n        isVisible\n    ]);\n    if (!isVisible) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed-bottom-bar\",\n        role: \"complementary\",\n        \"aria-label\": \"Fixed bottom bar\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Welcome to our website! This is a fixed bottom bar.\"\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/FixedBottomBar.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"close-button\",\n                    onClick: handleClose,\n                    \"aria-label\": \"Close bottom bar\",\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/FixedBottomBar.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/FixedBottomBar.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/FixedBottomBar.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvRml4ZWRCb3R0b21CYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0s7QUFFbEMsU0FBU0c7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1NLGNBQWM7UUFDbEJELGFBQWE7UUFDYkUsU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLGFBQWEsR0FBRztJQUN0QztJQUVBLE1BQU1DLGdCQUFnQixDQUFDQztRQUNyQixJQUFJQSxNQUFNQyxHQUFHLEtBQUssVUFBVTtZQUMxQlA7UUFDRjtJQUNGO0lBRUFMLGdEQUFTQTtvQ0FBQztZQUNSLElBQUlHLFdBQVc7Z0JBQ2JHLFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxhQUFhLEdBQUcsUUFBUSw2QkFBNkI7Z0JBQ3pFSSxPQUFPQyxnQkFBZ0IsQ0FBQyxXQUFXSjtZQUNyQztZQUNBOzRDQUFPO29CQUNMRyxPQUFPRSxtQkFBbUIsQ0FBQyxXQUFXTDtnQkFDeEM7O1FBQ0Y7bUNBQUc7UUFBQ1A7S0FBVTtJQUVkLElBQUksQ0FBQ0EsV0FBVyxPQUFPO0lBRXZCLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVO1FBQW1CQyxNQUFLO1FBQWdCQyxjQUFXO2tCQUNoRSw0RUFBQ0g7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNHOzhCQUFFOzs7Ozs7OEJBQ0gsOERBQUNDO29CQUFPSixXQUFVO29CQUFlSyxTQUFTakI7b0JBQWFjLGNBQVc7OEJBQW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3RiIsInNvdXJjZXMiOlsiL1VzZXJzL2FtaW4vRG9jdW1lbnRzL015UHJvamVjdHMvc2hvd2Nhc2Vfd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL0ZpeGVkQm90dG9tQmFyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZpeGVkQm90dG9tQmFyLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXhlZEJvdHRvbUJhcigpIHtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldElzVmlzaWJsZShmYWxzZSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nQm90dG9tID0gJzAnO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAnODBweCc7IC8vIEFkanVzdCB0byBtYXRjaCBiYXIgaGVpZ2h0XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICB9O1xuICB9LCBbaXNWaXNpYmxlXSk7XG5cbiAgaWYgKCFpc1Zpc2libGUpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZC1ib3R0b20tYmFyXCIgcm9sZT1cImNvbXBsZW1lbnRhcnlcIiBhcmlhLWxhYmVsPVwiRml4ZWQgYm90dG9tIGJhclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDxwPldlbGNvbWUgdG8gb3VyIHdlYnNpdGUhIFRoaXMgaXMgYSBmaXhlZCBib3R0b20gYmFyLjwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gYXJpYS1sYWJlbD1cIkNsb3NlIGJvdHRvbSBiYXJcIj7DlzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiRml4ZWRCb3R0b21CYXIiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJoYW5kbGVDbG9zZSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwicGFkZGluZ0JvdHRvbSIsImhhbmRsZUtleURvd24iLCJldmVudCIsImtleSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwicm9sZSIsImFyaWEtbGFiZWwiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/FixedBottomBar.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./components/FixedBottomBar.module.css":
/*!**********************************************!*\
  !*** ./components/FixedBottomBar.module.css ***!
  \**********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"fixedBottomBar\": \"FixedBottomBar_fixedBottomBar__iALem\",\n\t\"content\": \"FixedBottomBar_content__Wkat_\",\n\t\"closeButton\": \"FixedBottomBar_closeButton__si0wB\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvRml4ZWRCb3R0b21CYXIubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluL0RvY3VtZW50cy9NeVByb2plY3RzL3Nob3djYXNlX3dlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9GaXhlZEJvdHRvbUJhci5tb2R1bGUuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZpeGVkQm90dG9tQmFyXCI6IFwiRml4ZWRCb3R0b21CYXJfZml4ZWRCb3R0b21CYXJfX2lBTGVtXCIsXG5cdFwiY29udGVudFwiOiBcIkZpeGVkQm90dG9tQmFyX2NvbnRlbnRfX1drYXRfXCIsXG5cdFwiY2xvc2VCdXR0b25cIjogXCJGaXhlZEJvdHRvbUJhcl9jbG9zZUJ1dHRvbl9fc2kwd0JcIlxufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/FixedBottomBar.module.css\n");

/***/ }),

/***/ "(pages-dir-node)/./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,Divider,Grid,IconButton,Link,Stack,Typography!=!@mui/material */ \"(pages-dir-node)/__barrel_optimize__?names=Box,Container,Divider,Grid,IconButton,Link,Stack,Typography!=!./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/GitHub */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/GitHub.js\");\n/* harmony import */ var _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/LinkedIn */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/LinkedIn.js\");\n/* harmony import */ var _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Twitter */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Twitter.js\");\n/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Email */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Email.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__, _mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_3__, _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_4__, _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_5__, _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_6__]);\n([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__, _mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_3__, _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_4__, _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_5__, _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction Footer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        component: \"footer\",\n        sx: {\n            py: 6,\n            background: 'rgba(15, 23, 42, 0.95)',\n            backdropFilter: 'blur(10px)',\n            borderTop: '1px solid rgba(255, 255, 255, 0.05)',\n            mt: 'auto',\n            textAlign: 'center'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            maxWidth: \"lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    direction: \"row\",\n                    spacing: 3,\n                    justifyContent: \"center\",\n                    sx: {\n                        mb: 4\n                    },\n                    children: [\n                        {\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/Footer.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, this),\n                            href: 'https://github.com/MohammadaminAlbooyeh'\n                        },\n                        {\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/Footer.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, this),\n                            href: '#'\n                        },\n                        {\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/Footer.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, this),\n                            href: '#'\n                        },\n                        {\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/Footer.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, this),\n                            href: 'mailto:hello@amin.dev'\n                        }\n                    ].map((social, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                            component: framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.a,\n                            href: social.href,\n                            target: \"_blank\",\n                            whileHover: {\n                                y: -5,\n                                color: '#60a5fa'\n                            },\n                            sx: {\n                                color: 'text.secondary',\n                                p: 1.5,\n                                background: 'rgba(255, 255, 255, 0.03)',\n                                border: '1px solid rgba(255, 255, 255, 0.05)',\n                                '&:hover': {\n                                    background: 'rgba(96, 165, 250, 0.1)',\n                                    borderColor: 'rgba(96, 165, 250, 0.3)'\n                                }\n                            },\n                            children: social.icon\n                        }, idx, false, {\n                            fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/Footer.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/Footer.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    sx: {\n                        display: 'flex',\n                        justifyContent: 'center',\n                        alignItems: 'center',\n                        flexWrap: 'wrap',\n                        gap: 2\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        variant: \"caption\",\n                        sx: {\n                            color: 'text.secondary',\n                            opacity: 0.6\n                        },\n                        children: [\n                            \"\\xa9 \",\n                            new Date().getFullYear(),\n                            \" Amin Albooyeh. All rights reserved.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/Footer.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/Footer.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/Footer.jsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/Footer.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvRm9vdGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1HO0FBQy9DO0FBQ0k7QUFDRjtBQUNKO0FBQ1g7QUFFeEIsU0FBU2E7SUFDdEIscUJBQ0UsOERBQUNiLGdJQUFHQTtRQUNGYyxXQUFVO1FBQ1ZDLElBQUk7WUFDRkMsSUFBSTtZQUNKQyxZQUFZO1lBQ1pDLGdCQUFnQjtZQUNoQkMsV0FBVztZQUNYQyxJQUFJO1lBQ0pDLFdBQVc7UUFDYjtrQkFFQSw0RUFBQ3BCLHNJQUFTQTtZQUFDcUIsVUFBUzs7OEJBQ2xCLDhEQUFDZixrSUFBS0E7b0JBQ0pnQixXQUFVO29CQUNWQyxTQUFTO29CQUNUQyxnQkFBZTtvQkFDZlYsSUFBSTt3QkFBRVcsSUFBSTtvQkFBRTs4QkFFWDt3QkFDQzs0QkFBRUMsb0JBQU0sOERBQUNuQixrRUFBVUE7Ozs7OzRCQUFLb0IsTUFBTTt3QkFBMEM7d0JBQ3hFOzRCQUFFRCxvQkFBTSw4REFBQ2xCLG9FQUFZQTs7Ozs7NEJBQUttQixNQUFNO3dCQUFJO3dCQUNwQzs0QkFBRUQsb0JBQU0sOERBQUNqQixtRUFBV0E7Ozs7OzRCQUFLa0IsTUFBTTt3QkFBSTt3QkFDbkM7NEJBQUVELG9CQUFNLDhEQUFDaEIsaUVBQVNBOzs7Ozs0QkFBS2lCLE1BQU07d0JBQXdCO3FCQUN0RCxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsb0JBQ2IsOERBQUMzQix1SUFBVUE7NEJBRVRVLFdBQVdGLGlEQUFNQSxDQUFDb0IsQ0FBQzs0QkFDbkJKLE1BQU1FLE9BQU9GLElBQUk7NEJBQ2pCSyxRQUFPOzRCQUNQQyxZQUFZO2dDQUFFQyxHQUFHLENBQUM7Z0NBQUdDLE9BQU87NEJBQVU7NEJBQ3RDckIsSUFBSTtnQ0FDRnFCLE9BQU87Z0NBQ1BDLEdBQUc7Z0NBQ0hwQixZQUFZO2dDQUNacUIsUUFBUTtnQ0FDUixXQUFXO29DQUNUckIsWUFBWTtvQ0FDWnNCLGFBQWE7Z0NBQ2Y7NEJBQ0Y7c0NBRUNULE9BQU9ILElBQUk7MkJBaEJQSTs7Ozs7Ozs7Ozs4QkFxQlgsOERBQUMvQixnSUFBR0E7b0JBQUNlLElBQUk7d0JBQUV5QixTQUFTO3dCQUFRZixnQkFBZ0I7d0JBQVVnQixZQUFZO3dCQUFVQyxVQUFVO3dCQUFRQyxLQUFLO29CQUFFOzhCQUNuRyw0RUFBQ3hDLHVJQUFVQTt3QkFBQ3lDLFNBQVE7d0JBQVU3QixJQUFJOzRCQUFFcUIsT0FBTzs0QkFBa0JTLFNBQVM7d0JBQUk7OzRCQUFHOzRCQUNuRSxJQUFJQyxPQUFPQyxXQUFXOzRCQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU03QyIsInNvdXJjZXMiOlsiL1VzZXJzL2FtaW4vRG9jdW1lbnRzL015UHJvamVjdHMvc2hvd2Nhc2Vfd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL0Zvb3Rlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHksIEljb25CdXR0b24sIExpbmssIERpdmlkZXIsIFN0YWNrIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0dpdEh1Yic7XG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTGlua2VkSW4nO1xuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVHdpdHRlcic7XG5pbXBvcnQgRW1haWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRW1haWwnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb21wb25lbnQ9XCJmb290ZXJcIlxuICAgICAgc3g9e3tcbiAgICAgICAgcHk6IDYsXG4gICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDE1LCAyMywgNDIsIDAuOTUpJyxcbiAgICAgICAgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDEwcHgpJyxcbiAgICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSknLFxuICAgICAgICBtdDogJ2F1dG8nLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICA8U3RhY2sgXG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCIgXG4gICAgICAgICAgc3BhY2luZz17M30gXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBcbiAgICAgICAgICBzeD17eyBtYjogNCB9fVxuICAgICAgICA+XG4gICAgICAgICAge1tcbiAgICAgICAgICAgIHsgaWNvbjogPEdpdEh1Ykljb24gLz4sIGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vTW9oYW1tYWRhbWluQWxib295ZWgnIH0sXG4gICAgICAgICAgICB7IGljb246IDxMaW5rZWRJbkljb24gLz4sIGhyZWY6ICcjJyB9LFxuICAgICAgICAgICAgeyBpY29uOiA8VHdpdHRlckljb24gLz4sIGhyZWY6ICcjJyB9LFxuICAgICAgICAgICAgeyBpY29uOiA8RW1haWxJY29uIC8+LCBocmVmOiAnbWFpbHRvOmhlbGxvQGFtaW4uZGV2JyB9LFxuICAgICAgICAgIF0ubWFwKChzb2NpYWwsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD17bW90aW9uLmF9XG4gICAgICAgICAgICAgIGhyZWY9e3NvY2lhbC5ocmVmfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC01LCBjb2xvcjogJyM2MGE1ZmEnIH19XG4gICAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICAgIGNvbG9yOiAndGV4dC5zZWNvbmRhcnknLCBcbiAgICAgICAgICAgICAgICBwOiAxLjUsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyknLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpJyxcbiAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDk2LCAxNjUsIDI1MCwgMC4xKScsXG4gICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoOTYsIDE2NSwgMjUwLCAwLjMpJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NvY2lhbC5pY29ufVxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBmbGV4V3JhcDogJ3dyYXAnLCBnYXA6IDIgfX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBzeD17eyBjb2xvcjogJ3RleHQuc2Vjb25kYXJ5Jywgb3BhY2l0eTogMC42IH19PlxuICAgICAgICAgICAgJmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEFtaW4gQWxib295ZWguIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufVxuXG4iXSwibmFtZXMiOlsiQm94IiwiQ29udGFpbmVyIiwiR3JpZCIsIlR5cG9ncmFwaHkiLCJJY29uQnV0dG9uIiwiTGluayIsIkRpdmlkZXIiLCJTdGFjayIsIkdpdEh1Ykljb24iLCJMaW5rZWRJbkljb24iLCJUd2l0dGVySWNvbiIsIkVtYWlsSWNvbiIsIm1vdGlvbiIsIkZvb3RlciIsImNvbXBvbmVudCIsInN4IiwicHkiLCJiYWNrZ3JvdW5kIiwiYmFja2Ryb3BGaWx0ZXIiLCJib3JkZXJUb3AiLCJtdCIsInRleHRBbGlnbiIsIm1heFdpZHRoIiwiZGlyZWN0aW9uIiwic3BhY2luZyIsImp1c3RpZnlDb250ZW50IiwibWIiLCJpY29uIiwiaHJlZiIsIm1hcCIsInNvY2lhbCIsImlkeCIsImEiLCJ0YXJnZXQiLCJ3aGlsZUhvdmVyIiwieSIsImNvbG9yIiwicCIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4V3JhcCIsImdhcCIsInZhcmlhbnQiLCJvcGFjaXR5IiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Footer.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/AppBar */ \"(pages-dir-node)/./node_modules/@mui/material/esm/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Box */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Toolbar */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Toolbar/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/IconButton */ \"(pages-dir-node)/./node_modules/@mui/material/esm/IconButton/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Drawer */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Drawer/index.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/List */ \"(pages-dir-node)/./node_modules/@mui/material/esm/List/index.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/ListItem */ \"(pages-dir-node)/./node_modules/@mui/material/esm/ListItem/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/ListItemText */ \"(pages-dir-node)/./node_modules/@mui/material/esm/ListItemText/index.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Menu.js\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Close */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Close.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Container */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Container/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Button */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/LinearProgress */ \"(pages-dir-node)/./node_modules/@mui/material/esm/LinearProgress/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/esm/styles/index.js\");\n/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/useMediaQuery */ \"(pages-dir-node)/./node_modules/@mui/material/esm/useMediaQuery/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__, _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__, _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__, _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__, _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_12__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__, _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_14__, _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_15__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_16__, _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17__, _mui_material_List__WEBPACK_IMPORTED_MODULE_18__, _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_19__, _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_20__]);\n([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__, _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__, _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__, _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__, _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_12__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__, _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_14__, _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_15__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_16__, _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17__, _mui_material_List__WEBPACK_IMPORTED_MODULE_18__, _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_19__, _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst pages = [\n    {\n        label: 'Home',\n        href: '/'\n    },\n    {\n        label: 'Projects',\n        href: '/projects'\n    },\n    {\n        label: 'Resume',\n        href: '/resume'\n    },\n    {\n        label: 'Contact',\n        href: '/contactus'\n    }\n];\nfunction NavBar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [mobileOpen, setMobileOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [scrolled, setScrolled] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();\n    const isMobile = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(theme.breakpoints.down('md'));\n    const navRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const [focusedIndex, setFocusedIndex] = react__WEBPACK_IMPORTED_MODULE_1__.useState(-1);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect({\n        \"NavBar.useEffect\": ()=>{\n            const handleScroll = {\n                \"NavBar.useEffect.handleScroll\": ()=>{\n                    setScrolled(window.scrollY > 20);\n                }\n            }[\"NavBar.useEffect.handleScroll\"];\n            window.addEventListener('scroll', handleScroll);\n            return ({\n                \"NavBar.useEffect\": ()=>window.removeEventListener('scroll', handleScroll)\n            })[\"NavBar.useEffect\"];\n        }\n    }[\"NavBar.useEffect\"], []);\n    // Handle keyboard navigation\n    const handleKeyPress = (e, index)=>{\n        switch(e.key){\n            case 'Escape':\n                if (mobileOpen) {\n                    setMobileOpen(false);\n                }\n                break;\n            case 'ArrowRight':\n            case 'ArrowDown':\n                e.preventDefault();\n                setFocusedIndex((prevIndex)=>{\n                    const newIndex = prevIndex < pages.length - 1 ? prevIndex + 1 : 0;\n                    focusNavItem(newIndex);\n                    return newIndex;\n                });\n                break;\n            case 'ArrowLeft':\n            case 'ArrowUp':\n                e.preventDefault();\n                setFocusedIndex((prevIndex)=>{\n                    const newIndex = prevIndex > 0 ? prevIndex - 1 : pages.length - 1;\n                    focusNavItem(newIndex);\n                    return newIndex;\n                });\n                break;\n            case 'Home':\n                e.preventDefault();\n                setFocusedIndex(0);\n                focusNavItem(0);\n                break;\n            case 'End':\n                e.preventDefault();\n                setFocusedIndex(pages.length - 1);\n                focusNavItem(pages.length - 1);\n                break;\n        }\n    };\n    const focusNavItem = (index)=>{\n        const navItems = navRef.current?.querySelectorAll('button, a[role=\"menuitem\"]');\n        if (navItems?.[index]) {\n            navItems[index].focus();\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect({\n        \"NavBar.useEffect\": ()=>{\n            const handleStart = {\n                \"NavBar.useEffect.handleStart\": ()=>setIsLoading(true)\n            }[\"NavBar.useEffect.handleStart\"];\n            const handleComplete = {\n                \"NavBar.useEffect.handleComplete\": ()=>{\n                    setIsLoading(false);\n                    setMobileOpen(false); // Close mobile menu on navigation\n                }\n            }[\"NavBar.useEffect.handleComplete\"];\n            // Add event listeners for navigation and keyboard events\n            router.events.on('routeChangeStart', handleStart);\n            router.events.on('routeChangeComplete', handleComplete);\n            router.events.on('routeChangeError', handleComplete);\n            window.addEventListener('keydown', handleKeyPress);\n            // Focus management for mobile menu\n            if (mobileOpen && navRef.current) {\n                const focusableElements = navRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])');\n                if (focusableElements.length > 0) {\n                    focusableElements[0].focus();\n                }\n            }\n            return ({\n                \"NavBar.useEffect\": ()=>{\n                    router.events.off('routeChangeStart', handleStart);\n                    router.events.off('routeChangeComplete', handleComplete);\n                    router.events.off('routeChangeError', handleComplete);\n                    window.removeEventListener('keydown', handleKeyPress);\n                    router.events.off('routeChangeError', handleComplete);\n                }\n            })[\"NavBar.useEffect\"];\n        }\n    }[\"NavBar.useEffect\"], [\n        router\n    ]);\n    const toggleMobileMenu = ()=>{\n        setMobileOpen(!mobileOpen);\n    };\n    // Pre-fetch all routes for instant navigation\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect({\n        \"NavBar.useEffect\": ()=>{\n            pages.forEach({\n                \"NavBar.useEffect\": (page)=>router.prefetch(page.href)\n            }[\"NavBar.useEffect\"]);\n        }\n    }[\"NavBar.useEffect\"], []);\n    const isActiveRoute = (href)=>router.pathname === href;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: {\n            opacity: 0,\n            y: -20\n        },\n        animate: {\n            opacity: 1,\n            y: 0\n        },\n        transition: {\n            duration: 0.5\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            position: \"fixed\",\n            color: \"default\",\n            elevation: scrolled ? 4 : 0,\n            component: \"nav\",\n            \"aria-label\": \"Main navigation\",\n            sx: {\n                background: scrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',\n                backdropFilter: scrolled ? 'blur(12px)' : 'none',\n                borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',\n                transition: 'all 0.3s ease-in-out'\n            },\n            children: [\n                isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    \"aria-label\": \"Page loading indicator\",\n                    sx: {\n                        position: 'absolute',\n                        top: 0,\n                        left: 0,\n                        right: 0,\n                        height: '2px',\n                        zIndex: 2000\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n                    lineNumber: 156,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    maxWidth: false,\n                    sx: {\n                        px: {\n                            xs: 2,\n                            md: 8\n                        }\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        disableGutters: true,\n                        sx: {\n                            minHeight: {\n                                xs: '56px',\n                                sm: '64px'\n                            },\n                            justifyContent: 'space-between'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                variant: \"h6\",\n                                component: framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div,\n                                whileHover: {\n                                    scale: 1.05\n                                },\n                                sx: {\n                                    flexGrow: {\n                                        xs: 1,\n                                        md: 0\n                                    },\n                                    fontSize: {\n                                        xs: '1.25rem',\n                                        sm: '1.5rem'\n                                    },\n                                    fontWeight: 700,\n                                    textAlign: {\n                                        xs: 'center',\n                                        md: 'left'\n                                    },\n                                    color: 'white'\n                                },\n                                children: \"Welcome to my website\"\n                            }, void 0, false, {\n                                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n                                lineNumber: 177,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                sx: {\n                                    display: {\n                                        xs: 'flex',\n                                        md: 'none'\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                    size: \"large\",\n                                    \"aria-label\": mobileOpen ? 'close menu' : 'open menu',\n                                    onClick: toggleMobileMenu,\n                                    color: \"inherit\",\n                                    edge: \"end\",\n                                    children: mobileOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n                                        lineNumber: 201,\n                                        columnNumber: 31\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n                                        lineNumber: 201,\n                                        columnNumber: 47\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n                                    lineNumber: 194,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n                                lineNumber: 193,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                sx: {\n                                    flexGrow: 1,\n                                    display: {\n                                        xs: 'none',\n                                        md: 'flex'\n                                    },\n                                    justifyContent: 'flex-end',\n                                    gap: 2\n                                },\n                                children: pages.map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: page.href,\n                                        passHref: true,\n                                        style: {\n                                            textDecoration: 'none'\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n                                            component: framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button,\n                                            whileHover: {\n                                                scale: 1.05\n                                            },\n                                            whileTap: {\n                                                scale: 0.95\n                                            },\n                                            sx: {\n                                                color: 'text.primary',\n                                                position: 'relative',\n                                                '&::after': {\n                                                    content: '\"\"',\n                                                    position: 'absolute',\n                                                    bottom: 0,\n                                                    left: 0,\n                                                    width: '100%',\n                                                    height: '2px',\n                                                    background: 'primary.main',\n                                                    transform: isActiveRoute(page.href) ? 'scaleX(1)' : 'scaleX(0)',\n                                                    transition: 'transform 0.3s ease'\n                                                },\n                                                '&:hover::after': {\n                                                    transform: 'scaleX(1)'\n                                                }\n                                            },\n                                            children: page.label\n                                        }, void 0, false, {\n                                            fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n                                            lineNumber: 221,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, page.href, false, {\n                                        fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n                                        lineNumber: 215,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n                                lineNumber: 206,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n                                anchor: \"right\",\n                                open: mobileOpen && isMobile,\n                                onClose: ()=>setMobileOpen(false),\n                                PaperProps: {\n                                    sx: {\n                                        width: '80%',\n                                        maxWidth: '300px',\n                                        background: 'var(--color-nav-bg)',\n                                        backdropFilter: 'blur(8px)'\n                                    }\n                                },\n                                ModalProps: {\n                                    keepMounted: true // Better mobile performance\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n                                    sx: {\n                                        pt: 2\n                                    },\n                                    children: pages.map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {\n                                            component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                            href: page.href,\n                                            onClick: ()=>setMobileOpen(false),\n                                            sx: {\n                                                py: 2,\n                                                borderBottom: '1px solid',\n                                                borderColor: 'divider'\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_20__[\"default\"], {\n                                                primary: page.label,\n                                                sx: {\n                                                    '& .MuiTypography-root': {\n                                                        fontSize: '1.125rem',\n                                                        fontWeight: isActiveRoute(page.href) ? 600 : 400,\n                                                        color: isActiveRoute(page.href) ? 'primary.main' : 'text.primary'\n                                                    }\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n                                                lineNumber: 280,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, page.href, false, {\n                                            fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n                                            lineNumber: 269,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n                                    lineNumber: 267,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n                                lineNumber: 251,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n                        lineNumber: 169,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n                    lineNumber: 168,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n            lineNumber: 142,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/NavBar.jsx\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDVztBQUNOO0FBQ1E7QUFDTTtBQUNBO0FBQ1I7QUFDSjtBQUNRO0FBQ1E7QUFDTjtBQUNFO0FBQ0Y7QUFDTjtBQUNiO0FBQ1c7QUFDZ0I7QUFDRTtBQUNWO0FBQ1E7QUFFeEQsTUFBTXFCLFFBQVE7SUFDWjtRQUFFQyxPQUFPO1FBQVFDLE1BQU07SUFBSTtJQUMzQjtRQUFFRCxPQUFPO1FBQVlDLE1BQU07SUFBWTtJQUN2QztRQUFFRCxPQUFPO1FBQVVDLE1BQU07SUFBVTtJQUNuQztRQUFFRCxPQUFPO1FBQVdDLE1BQU07SUFBYTtDQUN4QztBQUVjLFNBQVNDO0lBQ3RCLE1BQU1DLFNBQVNWLHNEQUFTQTtJQUN4QixNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBRzNCLDJDQUFjLENBQUM7SUFDbkQsTUFBTSxDQUFDNkIsV0FBV0MsYUFBYSxHQUFHOUIsMkNBQWMsQ0FBQztJQUNqRCxNQUFNLENBQUMrQixVQUFVQyxZQUFZLEdBQUdoQywyQ0FBYyxDQUFDO0lBQy9DLE1BQU1pQyxRQUFRZCw4REFBUUE7SUFDdEIsTUFBTWUsV0FBV2QsdUVBQWFBLENBQUNhLE1BQU1FLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDO0lBQ3RELE1BQU1DLFNBQVNyQyx5Q0FBWSxDQUFDO0lBQzVCLE1BQU0sQ0FBQ3VDLGNBQWNDLGdCQUFnQixHQUFHeEMsMkNBQWMsQ0FBQyxDQUFDO0lBRXhEQSw0Q0FBZTs0QkFBQztZQUNkLE1BQU0wQztpREFBZTtvQkFDbkJWLFlBQVlXLE9BQU9DLE9BQU8sR0FBRztnQkFDL0I7O1lBQ0FELE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1lBQ2xDO29DQUFPLElBQU1DLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKOztRQUNwRDsyQkFBRyxFQUFFO0lBRUwsNkJBQTZCO0lBQzdCLE1BQU1LLGlC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QUFNbEcsY0FBY1E7Z0NBQ3BCMkYsU0FBUyxJQUFNbEcsY0FBYztnQ0FDN0JtRyxZQUFZO29DQUNWMUMsSUFBSTt3Q0FDRnFDLE9BQU87d0NBQ1A1QixVQUFVO3dDQUNWUixZQUFZO3dDQUNaQyxnQkFBZ0I7b0NBQ2xCO2dDQUNGO2dDQUNBeUMsWUFBWTtvQ0FDVkMsYUFBYSxLQUFLLDRCQUE0QjtnQ0FDaEQ7MENBRUEsNEVBQUN6SCwyREFBSUE7b0NBQUM2RSxJQUFJO3dDQUFFNkMsSUFBSTtvQ0FBRTs4Q0FDZjVHLE1BQU00RixHQUFHLENBQUMsQ0FBQzdDLHFCQUNWLDhEQUFDNUQsK0RBQVFBOzRDQUVQMEUsV0FBV3BFLGtEQUFJQTs0Q0FDZlMsTUFBTTZDLEtBQUs3QyxJQUFJOzRDQUNmdUYsU0FBUyxJQUFNbkYsY0FBYzs0Q0FDN0J5RCxJQUFJO2dEQUNGOEMsSUFBSTtnREFDSjNDLGNBQWM7Z0RBQ2Q0QyxhQUFhOzRDQUNmO3NEQUVBLDRFQUFDMUgsbUVBQVlBO2dEQUNYMkgsU0FBU2hFLEtBQUs5QyxLQUFLO2dEQUNuQjhELElBQUk7b0RBQ0YseUJBQXlCO3dEQUN2QnFCLFVBQVU7d0RBQ1ZDLFlBQVlwQyxjQUFjRixLQUFLN0MsSUFBSSxJQUFJLE1BQU07d0RBQzdDeUQsT0FBT1YsY0FBY0YsS0FBSzdDLElBQUksSUFBSSxpQkFBaUI7b0RBQ3JEO2dEQUNGOzs7Ozs7MkNBbEJHNkMsS0FBSzdDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QmxDIiwic291cmNlcyI6WyIvVXNlcnMvYW1pbi9Eb2N1bWVudHMvTXlQcm9qZWN0cy9zaG93Y2FzZV93ZWJzaXRlL2Zyb250ZW5kL2NvbXBvbmVudHMvTmF2QmFyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5lYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvdXNlTWVkaWFRdWVyeSc7XG5cbmNvbnN0IHBhZ2VzID0gW1xuICB7IGxhYmVsOiAnSG9tZScsIGhyZWY6ICcvJyB9LFxuICB7IGxhYmVsOiAnUHJvamVjdHMnLCBocmVmOiAnL3Byb2plY3RzJyB9LFxuICB7IGxhYmVsOiAnUmVzdW1lJywgaHJlZjogJy9yZXN1bWUnIH0sXG4gIHsgbGFiZWw6ICdDb250YWN0JywgaHJlZjogJy9jb250YWN0dXMnIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbW9iaWxlT3Blbiwgc2V0TW9iaWxlT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpKTtcbiAgY29uc3QgbmF2UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBbZm9jdXNlZEluZGV4LCBzZXRGb2N1c2VkSW5kZXhdID0gUmVhY3QudXNlU3RhdGUoLTEpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsZWQod2luZG93LnNjcm9sbFkgPiAyMCk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gIH0sIFtdKTtcblxuICAvLyBIYW5kbGUga2V5Ym9hcmQgbmF2aWdhdGlvblxuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChlLCBpbmRleCkgPT4ge1xuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgIGlmIChtb2JpbGVPcGVuKSB7XG4gICAgICAgICAgc2V0TW9iaWxlT3BlbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0Rm9jdXNlZEluZGV4KChwcmV2SW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHByZXZJbmRleCA8IHBhZ2VzLmxlbmd0aCAtIDEgPyBwcmV2SW5kZXggKyAxIDogMDtcbiAgICAgICAgICBmb2N1c05hdkl0ZW0obmV3SW5kZXgpO1xuICAgICAgICAgIHJldHVybiBuZXdJbmRleDtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldEZvY3VzZWRJbmRleCgocHJldkluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBwcmV2SW5kZXggPiAwID8gcHJldkluZGV4IC0gMSA6IHBhZ2VzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgZm9jdXNOYXZJdGVtKG5ld0luZGV4KTtcbiAgICAgICAgICByZXR1cm4gbmV3SW5kZXg7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldEZvY3VzZWRJbmRleCgwKTtcbiAgICAgICAgZm9jdXNOYXZJdGVtKDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0Rm9jdXNlZEluZGV4KHBhZ2VzLmxlbmd0aCAtIDEpO1xuICAgICAgICBmb2N1c05hdkl0ZW0ocGFnZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmb2N1c05hdkl0ZW0gPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBuYXZJdGVtcyA9IG5hdlJlZi5jdXJyZW50Py5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24sIGFbcm9sZT1cIm1lbnVpdGVtXCJdJyk7XG4gICAgaWYgKG5hdkl0ZW1zPy5baW5kZXhdKSB7XG4gICAgICBuYXZJdGVtc1tpbmRleF0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCBoYW5kbGVDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBzZXRNb2JpbGVPcGVuKGZhbHNlKTsgLy8gQ2xvc2UgbW9iaWxlIG1lbnUgb24gbmF2aWdhdGlvblxuICAgIH07XG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIGZvciBuYXZpZ2F0aW9uIGFuZCBrZXlib2FyZCBldmVudHNcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlU3RhcnQpO1xuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVDb21wbGV0ZSk7XG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcblxuICAgIC8vIEZvY3VzIG1hbmFnZW1lbnQgZm9yIG1vYmlsZSBtZW51XG4gICAgaWYgKG1vYmlsZU9wZW4gJiYgbmF2UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gbmF2UmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgJ2J1dHRvbiwgW2hyZWZdLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pJ1xuICAgICAgKTtcbiAgICAgIGlmIChmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvY3VzYWJsZUVsZW1lbnRzWzBdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlU3RhcnQpO1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVDb21wbGV0ZSk7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVDb21wbGV0ZSk7XG4gICAgfTtcbiAgfSwgW3JvdXRlcl0pO1xuXG4gIGNvbnN0IHRvZ2dsZU1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0TW9iaWxlT3BlbighbW9iaWxlT3Blbik7XG4gIH07XG5cbiAgLy8gUHJlLWZldGNoIGFsbCByb3V0ZXMgZm9yIGluc3RhbnQgbmF2aWdhdGlvblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBhZ2VzLmZvckVhY2gocGFnZSA9PiByb3V0ZXIucHJlZmV0Y2gocGFnZS5ocmVmKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBpc0FjdGl2ZVJvdXRlID0gKGhyZWYpID0+IHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZjtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0yMCB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICA+XG4gICAgICA8QXBwQmFyIFxuICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCIgXG4gICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiIFxuICAgICAgICBlbGV2YXRpb249e3Njcm9sbGVkID8gNCA6IDB9IFxuICAgICAgICBjb21wb25lbnQ9XCJuYXZcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiTWFpbiBuYXZpZ2F0aW9uXCJcbiAgICAgICAgc3g9e3sgXG4gICAgICAgICAgYmFja2dyb3VuZDogc2Nyb2xsZWQgPyAncmdiYSgxNSwgMjMsIDQyLCAwLjgpJyA6ICd0cmFuc3BhcmVudCcsIFxuICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiBzY3JvbGxlZCA/ICdibHVyKDEycHgpJyA6ICdub25lJyxcbiAgICAgICAgICBib3JkZXJCb3R0b206IHNjcm9sbGVkID8gJzFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSknIDogJ25vbmUnLFxuICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlLWluLW91dCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxMaW5lYXJQcm9ncmVzc1xuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBhZ2UgbG9hZGluZyBpbmRpY2F0b3JcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgIGhlaWdodDogJzJweCcsXG4gICAgICAgICAgICAgIHpJbmRleDogMjAwMFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPXtmYWxzZX0gc3g9e3sgcHg6IHsgeHM6IDIsIG1kOiA4IH0gfX0+XG4gICAgICAgICAgPFRvb2xiYXIgXG4gICAgICAgICAgICBkaXNhYmxlR3V0dGVycyBcbiAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHsgeHM6ICc1NnB4Jywgc206ICc2NHB4JyB9LFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiBMb2dvL0JyYW5kICovfVxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXttb3Rpb24uZGl2fVxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XG4gICAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICAgIGZsZXhHcm93OiB7IHhzOiAxLCBtZDogMCB9LFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiAnMS4yNXJlbScsIHNtOiAnMS41cmVtJyB9LFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IHsgeHM6ICdjZW50ZXInLCBtZDogJ2xlZnQnIH0sXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgV2VsY29tZSB0byBteSB3ZWJzaXRlXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgIHsvKiBNb2JpbGUgbWVudSB0b2dnbGUgKi99XG4gICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IHsgeHM6ICdmbGV4JywgbWQ6ICdub25lJyB9IH19PlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17bW9iaWxlT3BlbiA/ICdjbG9zZSBtZW51JyA6ICdvcGVuIG1lbnUnfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1vYmlsZU1lbnV9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttb2JpbGVPcGVuID8gPENsb3NlSWNvbiAvPiA6IDxNZW51SWNvbiAvPn1cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgIHsvKiBEZXNrdG9wIG1lbnUgKi99XG4gICAgICAgICAgICA8Qm94IFxuICAgICAgICAgICAgICBzeD17eyBcbiAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSwgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogeyB4czogJ25vbmUnLCBtZDogJ2ZsZXgnIH0sXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgICAgICAgICAgICAgZ2FwOiAyXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwYWdlcy5tYXAoKHBhZ2UpID0+IChcbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAga2V5PXtwYWdlLmhyZWZ9XG4gICAgICAgICAgICAgICAgICBocmVmPXtwYWdlLmhyZWZ9XG4gICAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXttb3Rpb24uYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk1IH19XG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd0ZXh0LnByaW1hcnknLFxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICcmOjphZnRlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcycHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3ByaW1hcnkubWFpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGlzQWN0aXZlUm91dGUocGFnZS5ocmVmKSA/ICdzY2FsZVgoMSknIDogJ3NjYWxlWCgwKScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuM3MgZWFzZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICcmOmhvdmVyOjphZnRlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwYWdlLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICB7LyogTW9iaWxlIGRyYXdlciAqL31cbiAgICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgICAgYW5jaG9yPVwicmlnaHRcIlxuICAgICAgICAgICAgICBvcGVuPXttb2JpbGVPcGVuICYmIGlzTW9iaWxlfVxuICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRNb2JpbGVPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgUGFwZXJQcm9wcz17e1xuICAgICAgICAgICAgICAgIHN4OiB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzgwJScsXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzMwMHB4JyxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd2YXIoLS1jb2xvci1uYXYtYmcpJyxcbiAgICAgICAgICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiAnYmx1cig4cHgpJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgTW9kYWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIGtlZXBNb3VudGVkOiB0cnVlIC8vIEJldHRlciBtb2JpbGUgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpc3Qgc3g9e3sgcHQ6IDIgfX0+XG4gICAgICAgICAgICAgICAge3BhZ2VzLm1hcCgocGFnZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIFxuICAgICAgICAgICAgICAgICAgICBrZXk9e3BhZ2UuaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtwYWdlLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICBzeD17eyBcbiAgICAgICAgICAgICAgICAgICAgICBweTogMixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnZGl2aWRlcidcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBcbiAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtwYWdlLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpVHlwb2dyYXBoeS1yb290Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEuMTI1cmVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogaXNBY3RpdmVSb3V0ZShwYWdlLmhyZWYpID8gNjAwIDogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaXNBY3RpdmVSb3V0ZShwYWdlLmhyZWYpID8gJ3ByaW1hcnkubWFpbicgOiAndGV4dC5wcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9BcHBCYXI+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcEJhciIsIkJveCIsIlRvb2xiYXIiLCJJY29uQnV0dG9uIiwiVHlwb2dyYXBoeSIsIkRyYXdlciIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtVGV4dCIsIk1lbnVJY29uIiwiQ2xvc2VJY29uIiwiQ29udGFpbmVyIiwiQnV0dG9uIiwiTGluayIsInVzZVJvdXRlciIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIkxpbmVhclByb2dyZXNzIiwidXNlVGhlbWUiLCJ1c2VNZWRpYVF1ZXJ5IiwicGFnZXMiLCJsYWJlbCIsImhyZWYiLCJOYXZCYXIiLCJyb3V0ZXIiLCJtb2JpbGVPcGVuIiwic2V0TW9iaWxlT3BlbiIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsInRoZW1lIiwiaXNNb2JpbGUiLCJicmVha3BvaW50cyIsImRvd24iLCJuYXZSZWYiLCJ1c2VSZWYiLCJmb2N1c2VkSW5kZXgiLCJzZXRGb2N1c2VkSW5kZXgiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlQcmVzcyIsImUiLCJpbmRleCIsImtleSIsInByZXZlbnREZWZhdWx0IiwicHJldkluZGV4IiwibmV3SW5kZXgiLCJsZW5ndGgiLCJmb2N1c05hdkl0ZW0iLCJuYXZJdGVtcyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9jdXMiLCJoYW5kbGVTdGFydCIsImhhbmRsZUNvbXBsZXRlIiwiZXZlbnRzIiwib24iLCJmb2N1c2FibGVFbGVtZW50cyIsIm9mZiIsInRvZ2dsZU1vYmlsZU1lbnUiLCJmb3JFYWNoIiwicGFnZSIsInByZWZldGNoIiwiaXNBY3RpdmVSb3V0ZSIsInBhdGhuYW1lIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInBvc2l0aW9uIiwiY29sb3IiLCJlbGV2YXRpb24iLCJjb21wb25lbnQiLCJhcmlhLWxhYmVsIiwic3giLCJiYWNrZ3JvdW5kIiwiYmFja2Ryb3BGaWx0ZXIiLCJib3JkZXJCb3R0b20iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJoZWlnaHQiLCJ6SW5kZXgiLCJtYXhXaWR0aCIsInB4IiwieHMiLCJtZCIsImRpc2FibGVHdXR0ZXJzIiwibWluSGVpZ2h0Iiwic20iLCJqdXN0aWZ5Q29udGVudCIsInZhcmlhbnQiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJmbGV4R3JvdyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJzaXplIiwib25DbGljayIsImVkZ2UiLCJnYXAiLCJtYXAiLCJwYXNzSHJlZiIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJidXR0b24iLCJ3aGlsZVRhcCIsImNvbnRlbnQiLCJib3R0b20iLCJ3aWR0aCIsInRyYW5zZm9ybSIsImFuY2hvciIsIm9wZW4iLCJvbkNsb3NlIiwiUGFwZXJQcm9wcyIsIk1vZGFsUHJvcHMiLCJrZWVwTW91bnRlZCIsInB0IiwicHkiLCJib3JkZXJDb2xvciIsInByaW1hcnkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/NavBar.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./components/SEO.jsx":
/*!****************************!*\
  !*** ./components/SEO.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"(pages-dir-node)/./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst SEO = ({ title = 'My Portfolio', description = 'Welcome to my professional portfolio showcasing my projects and skills in web development.', image = '/og-image.jpg', type = 'website' })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const siteName = 'My Portfolio';\n    const baseUrl = 'https://your-portfolio-url.com';\n    const currentUrl = `${baseUrl}${router.asPath}`;\n    const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: `${title} | ${siteName}`\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"title\",\n                content: `${title} | ${siteName}`\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"description\",\n                content: description\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:type\",\n                content: type\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:url\",\n                content: currentUrl\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:title\",\n                content: `${title} | ${siteName}`\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:description\",\n                content: description\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:image\",\n                content: imageUrl\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:site_name\",\n                content: siteName\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:card\",\n                content: \"summary_large_image\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:url\",\n                content: currentUrl\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:title\",\n                content: `${title} | ${siteName}`\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:description\",\n                content: description\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:image\",\n                content: imageUrl\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"twitter:creator\",\n                content: \"@yourusername\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"canonical\",\n                href: currentUrl\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"viewport\",\n                content: \"width=device-width, initial-scale=1.0\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"robots\",\n                content: \"index, follow\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"author\",\n                content: \"Your Name\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"keywords\",\n                content: \"web development, portfolio, react, nextjs, django, full stack developer\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                type: \"application/ld+json\",\n                dangerouslySetInnerHTML: {\n                    __html: JSON.stringify({\n                        '@context': 'https://schema.org',\n                        '@type': 'Person',\n                        name: 'Your Name',\n                        url: currentUrl,\n                        sameAs: [\n                            'https://github.com/yourusername',\n                            'https://linkedin.com/in/yourusername'\n                        ],\n                        jobTitle: 'Full Stack Developer',\n                        image: image,\n                        description: description,\n                        knowsAbout: [\n                            'Web Development',\n                            'React',\n                            'Next.js',\n                            'Django',\n                            'Python',\n                            'JavaScript'\n                        ]\n                    })\n                }\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/components/SEO.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvU0VPLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUNXO0FBRXhDLE1BQU1FLE1BQU0sQ0FBQyxFQUNYQyxRQUFRLGNBQWMsRUFDdEJDLGNBQWMsNEZBQTRGLEVBQzFHQyxRQUFRLGVBQWUsRUFDdkJDLE9BQU8sU0FBUyxFQUNqQjtJQUNDLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNTyxXQUFXO0lBQ2pCLE1BQU1DLFVBQVU7SUFDaEIsTUFBTUMsYUFBYSxHQUFHRCxVQUFVRixPQUFPSSxNQUFNLEVBQUU7SUFDL0MsTUFBTUMsV0FBV1AsTUFBTVEsVUFBVSxDQUFDLFVBQVVSLFFBQVEsR0FBR0ksVUFBVUosT0FBTztJQUV4RSxxQkFDRSw4REFBQ0wsa0RBQUlBOzswQkFFSCw4REFBQ0c7MEJBQU8sR0FBR0EsTUFBTSxHQUFHLEVBQUVLLFVBQVU7Ozs7OzswQkFDaEMsOERBQUNNO2dCQUFLQyxNQUFLO2dCQUFRQyxTQUFTLEdBQUdiLE1BQU0sR0FBRyxFQUFFSyxVQUFVOzs7Ozs7MEJBQ3BELDhEQUFDTTtnQkFBS0MsTUFBSztnQkFBY0MsU0FBU1o7Ozs7OzswQkFHbEMsOERBQUNVO2dCQUFLRyxVQUFTO2dCQUFVRCxTQUFTVjs7Ozs7OzBCQUNsQyw4REFBQ1E7Z0JBQUtHLFVBQVM7Z0JBQVNELFNBQVNOOzs7Ozs7MEJBQ2pDLDhEQUFDSTtnQkFBS0csVUFBUztnQkFBV0QsU0FBUyxHQUFHYixNQUFNLEdBQUcsRUFBRUssVUFBVTs7Ozs7OzBCQUMzRCw4REFBQ007Z0JBQUtHLFVBQVM7Z0JBQWlCRCxTQUFTWjs7Ozs7OzBCQUN6Qyw4REFBQ1U7Z0JBQUtHLFVBQVM7Z0JBQVdELFNBQVNKOzs7Ozs7MEJBQ25DLDhEQUFDRTtnQkFBS0csVUFBUztnQkFBZUQsU0FBU1I7Ozs7OzswQkFHdkMsOERBQUNNO2dCQUFLRyxVQUFTO2dCQUFlRCxTQUFROzs7Ozs7MEJBQ3RDLDhEQUFDRjtnQkFBS0csVUFBUztnQkFBY0QsU0FBU047Ozs7OzswQkFDdEMsOERBQUNJO2dCQUFLRyxVQUFTO2dCQUFnQkQsU0FBUyxHQUFHYixNQUFNLEdBQUcsRUFBRUssVUFBVTs7Ozs7OzBCQUNoRSw4REFBQ007Z0JBQUtHLFVBQVM7Z0JBQXNCRCxTQUFTWjs7Ozs7OzBCQUM5Qyw4REFBQ1U7Z0JBQUtHLFVBQVM7Z0JBQWdCRCxTQUFTSjs7Ozs7OzBCQUN4Qyw4REFBQ0U7Z0JBQUtDLE1BQUs7Z0JBQWtCQyxTQUFROzs7Ozs7MEJBR3JDLDhEQUFDRTtnQkFBS0MsS0FBSTtnQkFBWUMsTUFBTVY7Ozs7OzswQkFDNUIsOERBQUNJO2dCQUFLQyxNQUFLO2dCQUFXQyxTQUFROzs7Ozs7MEJBQzlCLDhEQUFDRjtnQkFBS0MsTUFBSztnQkFBU0MsU0FBUTs7Ozs7OzBCQUM1Qiw4REFBQ0Y7Z0JBQUtDLE1BQUs7Z0JBQVNDLFNBQVE7Ozs7OzswQkFDNUIsOERBQUNGO2dCQUFLQyxNQUFLO2dCQUFXQyxTQUFROzs7Ozs7MEJBRzlCLDhEQUFDSztnQkFDQ2YsTUFBSztnQkFDTGdCLHlCQUF5QjtvQkFDdkJDLFFBQVFDLEtBQUtDLFNBQVMsQ0FBQzt3QkFDckIsWUFBWTt3QkFDWixTQUFTO3dCQUNUVixNQUFNO3dCQUNOVyxLQUFLaEI7d0JBQ0xpQixRQUFROzRCQUNOOzRCQUNBO3lCQUVEO3dCQUNEQyxVQUFVO3dCQUNWdkIsT0FBT0E7d0JBQ1BELGFBQWFBO3dCQUNieUIsWUFBWTs0QkFDVjs0QkFDQTs0QkFDQTs0QkFDQTs0QkFDQTs0QkFDQTt5QkFDRDtvQkFDSDtnQkFDRjs7Ozs7Ozs7Ozs7O0FBSVI7QUFFQSxpRUFBZTNCLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluL0RvY3VtZW50cy9NeVByb2plY3RzL3Nob3djYXNlX3dlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9TRU8uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IFNFTyA9ICh7IFxuICB0aXRsZSA9ICdNeSBQb3J0Zm9saW8nLCBcbiAgZGVzY3JpcHRpb24gPSAnV2VsY29tZSB0byBteSBwcm9mZXNzaW9uYWwgcG9ydGZvbGlvIHNob3djYXNpbmcgbXkgcHJvamVjdHMgYW5kIHNraWxscyBpbiB3ZWIgZGV2ZWxvcG1lbnQuJyxcbiAgaW1hZ2UgPSAnL29nLWltYWdlLmpwZycsXG4gIHR5cGUgPSAnd2Vic2l0ZSdcbn0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHNpdGVOYW1lID0gJ015IFBvcnRmb2xpbyc7XG4gIGNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly95b3VyLXBvcnRmb2xpby11cmwuY29tJztcbiAgY29uc3QgY3VycmVudFVybCA9IGAke2Jhc2VVcmx9JHtyb3V0ZXIuYXNQYXRofWA7XG4gIGNvbnN0IGltYWdlVXJsID0gaW1hZ2Uuc3RhcnRzV2l0aCgnaHR0cCcpID8gaW1hZ2UgOiBgJHtiYXNlVXJsfSR7aW1hZ2V9YDtcbiAgXG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICB7LyogUHJpbWFyeSBNZXRhIFRhZ3MgKi99XG4gICAgICA8dGl0bGU+e2Ake3RpdGxlfSB8ICR7c2l0ZU5hbWV9YH08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD17YCR7dGl0bGV9IHwgJHtzaXRlTmFtZX1gfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICBcbiAgICAgIHsvKiBPcGVuIEdyYXBoIC8gRmFjZWJvb2sgKi99XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PXt0eXBlfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtjdXJyZW50VXJsfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Ake3RpdGxlfSB8ICR7c2l0ZU5hbWV9YH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtpbWFnZVVybH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17c2l0ZU5hbWV9IC8+XG4gICAgICBcbiAgICAgIHsvKiBUd2l0dGVyICovfVxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dXJsXCIgY29udGVudD17Y3VycmVudFVybH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e2Ake3RpdGxlfSB8ICR7c2l0ZU5hbWV9YH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17aW1hZ2VVcmx9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cIkB5b3VydXNlcm5hbWVcIiAvPlxuICAgICAgXG4gICAgICB7LyogQWRkaXRpb25hbCBTRU8gdGFncyAqL31cbiAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2N1cnJlbnRVcmx9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImluZGV4LCBmb2xsb3dcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJZb3VyIE5hbWVcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIndlYiBkZXZlbG9wbWVudCwgcG9ydGZvbGlvLCByZWFjdCwgbmV4dGpzLCBkamFuZ28sIGZ1bGwgc3RhY2sgZGV2ZWxvcGVyXCIgLz5cbiAgICAgIFxuICAgICAgey8qIFN0cnVjdHVyZWQgRGF0YSAvIEpTT04tTEQgKi99XG4gICAgICA8c2NyaXB0XG4gICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICdAY29udGV4dCc6ICdodHRwczovL3NjaGVtYS5vcmcnLFxuICAgICAgICAgICAgJ0B0eXBlJzogJ1BlcnNvbicsXG4gICAgICAgICAgICBuYW1lOiAnWW91ciBOYW1lJyxcbiAgICAgICAgICAgIHVybDogY3VycmVudFVybCxcbiAgICAgICAgICAgIHNhbWVBczogW1xuICAgICAgICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL3lvdXJ1c2VybmFtZScsXG4gICAgICAgICAgICAgICdodHRwczovL2xpbmtlZGluLmNvbS9pbi95b3VydXNlcm5hbWUnLFxuICAgICAgICAgICAgICAvLyBBZGQgb3RoZXIgc29jaWFsIGxpbmtzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgam9iVGl0bGU6ICdGdWxsIFN0YWNrIERldmVsb3BlcicsXG4gICAgICAgICAgICBpbWFnZTogaW1hZ2UsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBrbm93c0Fib3V0OiBbXG4gICAgICAgICAgICAgICdXZWIgRGV2ZWxvcG1lbnQnLFxuICAgICAgICAgICAgICAnUmVhY3QnLFxuICAgICAgICAgICAgICAnTmV4dC5qcycsXG4gICAgICAgICAgICAgICdEamFuZ28nLFxuICAgICAgICAgICAgICAnUHl0aG9uJyxcbiAgICAgICAgICAgICAgJ0phdmFTY3JpcHQnXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9IZWFkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU0VPOyJdLCJuYW1lcyI6WyJIZWFkIiwidXNlUm91dGVyIiwiU0VPIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidHlwZSIsInJvdXRlciIsInNpdGVOYW1lIiwiYmFzZVVybCIsImN1cnJlbnRVcmwiLCJhc1BhdGgiLCJpbWFnZVVybCIsInN0YXJ0c1dpdGgiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJwcm9wZXJ0eSIsImxpbmsiLCJyZWwiLCJocmVmIiwic2NyaXB0IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJKU09OIiwic3RyaW5naWZ5IiwidXJsIiwic2FtZUFzIiwiam9iVGl0bGUiLCJrbm93c0Fib3V0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/SEO.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/esm/styles/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"(pages-dir-node)/./node_modules/@mui/material/esm/CssBaseline/index.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"(pages-dir-node)/./styles/theme.js\");\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/variables.css */ \"(pages-dir-node)/./styles/variables.css\");\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_variables_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FixedBottomBar.css */ \"(pages-dir-node)/./components/FixedBottomBar.css\");\n/* harmony import */ var _components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../App.css */ \"(pages-dir-node)/./App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ \"(pages-dir-node)/./components/NavBar.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ \"(pages-dir-node)/./components/Footer.jsx\");\n/* harmony import */ var _components_FixedBottomBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FixedBottomBar */ \"(pages-dir-node)/./components/FixedBottomBar.jsx\");\n/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SEO */ \"(pages-dir-node)/./components/SEO.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles_theme__WEBPACK_IMPORTED_MODULE_3__, _components_NavBar__WEBPACK_IMPORTED_MODULE_7__, _components_Footer__WEBPACK_IMPORTED_MODULE_8__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__, _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_12__]);\n([_styles_theme__WEBPACK_IMPORTED_MODULE_3__, _components_NavBar__WEBPACK_IMPORTED_MODULE_7__, _components_Footer__WEBPACK_IMPORTED_MODULE_8__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__, _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            // Remove the server-side injected CSS\n            const jssStyles = document.querySelector('#jss-server-side');\n            if (jssStyles) {\n                jssStyles.parentElement.removeChild(jssStyles);\n            }\n            // Pre-fetch all routes for instant navigation\n            [\n                '/',\n                '/portfolio',\n                '/projects',\n                '/resume',\n                '/contactus'\n            ].forEach({\n                \"MyApp.useEffect\": (route)=>{\n                    router.prefetch(route);\n                }\n            }[\"MyApp.useEffect\"]);\n        }\n    }[\"MyApp.useEffect\"], []);\n    // Define SEO metadata based on current route\n    const getPageMetadata = ()=>{\n        const path = router.pathname;\n        const baseUrl = 'https://your-portfolio-url.com';\n        const metadata = {\n            '/': {\n                title: 'My Portfolio - Full Stack Developer',\n                description: 'Welcome to my portfolio showcasing my expertise in web development, featuring projects in React, Next.js, and Django.',\n                image: `${baseUrl}/og-home.jpg`,\n                type: 'website'\n            },\n            '/portfolio': {\n                title: 'Portfolio - My Work and Projects',\n                description: 'Explore my portfolio of web development projects, including full-stack applications, responsive websites, and interactive UIs.',\n                image: `${baseUrl}/og-portfolio.jpg`,\n                type: 'website'\n            },\n            '/projects': {\n                title: 'Projects - Web Development Showcase',\n                description: 'View my latest web development projects built with modern technologies like React, Next.js, and Django.',\n                image: `${baseUrl}/og-projects.jpg`,\n                type: 'website'\n            },\n            '/resume': {\n                title: 'Resume - Full Stack Developer',\n                description: 'Professional experience, skills, and qualifications in web development and software engineering.',\n                image: `${baseUrl}/og-resume.jpg`,\n                type: 'profile'\n            },\n            '/contactus': {\n                title: 'Contact Me - Let\\'s Work Together',\n                description: 'Get in touch for collaboration opportunities, project inquiries, or professional connections.',\n                image: `${baseUrl}/og-contact.jpg`,\n                type: 'website'\n            }\n        };\n        return metadata[path] || metadata['/'];\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/pages/_app.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SEO__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                ...getPageMetadata()\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/pages/_app.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/pages/_app.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"content\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/pages/_app.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/pages/_app.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/pages/_app.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amin/Documents/MyProjects/showcase_website/frontend/pages/_app.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNNO0FBQ2E7QUFDRDtBQUNoQjtBQUNIO0FBQ1M7QUFDdEI7QUFDc0I7QUFDQTtBQUNnQjtBQUN0QjtBQUVwQyxTQUFTUyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLE1BQU1DLFNBQVNYLHNEQUFTQTtJQUV4QkQsZ0RBQVNBOzJCQUFDO1lBQ1Isc0NBQXNDO1lBQ3RDLE1BQU1hLFlBQVlDLFNBQVNDLGFBQWEsQ0FBQztZQUN6QyxJQUFJRixXQUFXO2dCQUNiQSxVQUFVRyxhQUFhLENBQUNDLFdBQVcsQ0FBQ0o7WUFDdEM7WUFFQSw4Q0FBOEM7WUFDOUM7Z0JBQUM7Z0JBQUs7Z0JBQWM7Z0JBQWE7Z0JBQVc7YUFBYSxDQUFDSyxPQUFPO21DQUFDQyxDQUFBQTtvQkFDaEVQLE9BQU9RLFFBQVEsQ0FBQ0Q7Z0JBQ2xCOztRQUNGOzBCQUFHLEVBQUU7SUFFTCw2Q0FBNkM7SUFDN0MsTUFBTUUsa0JBQWtCO1FBQ3RCLE1BQU1DLE9BQU9WLE9BQU9XLFFBQVE7UUFDNUIsTUFBTUMsVUFBVTtRQUVoQixNQUFNQyxXQUFXO1lBQ2YsS0FBSztnQkFDSEMsT0FBTztnQkFDUEMsYUFBYTtnQkFDYkMsT0FBTyxHQUFHSixRQUFRLFlBQVksQ0FBQztnQkFDL0JLLE1BQU07WUFDUjtZQUNBLGNBQWM7Z0JBQ1pILE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLE9BQU8sR0FBR0osUUFBUSxpQkFBaUIsQ0FBQztnQkFDcENLLE1BQU07WUFDUjtZQUNBLGFBQWE7Z0JBQ1hILE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLE9BQU8sR0FBR0osUUFBUSxnQkFBZ0IsQ0FBQztnQkFDbkNLLE1BQU07WUFDUjtZQUNBLFdBQVc7Z0JBQ1RILE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLE9BQU8sR0FBR0osUUFBUSxjQUFjLENBQUM7Z0JBQ2pDSyxNQUFNO1lBQ1I7WUFDQSxjQUFjO2dCQUNaSCxPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxPQUFPLEdBQUdKLFFBQVEsZUFBZSxDQUFDO2dCQUNsQ0ssTUFBTTtZQUNSO1FBQ0Y7UUFFQSxPQUFPSixRQUFRLENBQUNILEtBQUssSUFBSUcsUUFBUSxDQUFDLElBQUk7SUFDeEM7SUFFQSxxQkFDRSw4REFBQ3ZCLGdFQUFhQTtRQUFDRSxPQUFPQSxxREFBS0E7OzBCQUN6Qiw4REFBQ0Qsa0VBQVdBOzs7OzswQkFDWiw4REFBQ0ssd0RBQUdBO2dCQUFFLEdBQUdhLGlCQUFpQjs7Ozs7OzBCQUMxQiw4REFBQ2hCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUN5QjtnQkFBS0MsV0FBVTswQkFDZCw0RUFBQ3JCO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OzBCQUUxQiw4REFBQ0wsMERBQU1BOzs7Ozs7Ozs7OztBQUdiO0FBRUEsaUVBQWVHLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluL0RvY3VtZW50cy9NeVByb2plY3RzL3Nob3djYXNlX3dlYnNpdGUvZnJvbnRlbmQvcGFnZXMvX2FwcC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xuaW1wb3J0ICcuLi9zdHlsZXMvdmFyaWFibGVzLmNzcyc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvRml4ZWRCb3R0b21CYXIuY3NzJztcbmltcG9ydCAnLi4vQXBwLmNzcyc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IEZpeGVkQm90dG9tQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvRml4ZWRCb3R0b21CYXInO1xuaW1wb3J0IFNFTyBmcm9tICcuLi9jb21wb25lbnRzL1NFTyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xuICAgIGlmIChqc3NTdHlsZXMpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XG4gICAgfVxuXG4gICAgLy8gUHJlLWZldGNoIGFsbCByb3V0ZXMgZm9yIGluc3RhbnQgbmF2aWdhdGlvblxuICAgIFsnLycsICcvcG9ydGZvbGlvJywgJy9wcm9qZWN0cycsICcvcmVzdW1lJywgJy9jb250YWN0dXMnXS5mb3JFYWNoKHJvdXRlID0+IHtcbiAgICAgIHJvdXRlci5wcmVmZXRjaChyb3V0ZSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyBEZWZpbmUgU0VPIG1ldGFkYXRhIGJhc2VkIG9uIGN1cnJlbnQgcm91dGVcbiAgY29uc3QgZ2V0UGFnZU1ldGFkYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSByb3V0ZXIucGF0aG5hbWU7XG4gICAgY29uc3QgYmFzZVVybCA9ICdodHRwczovL3lvdXItcG9ydGZvbGlvLXVybC5jb20nO1xuICAgIFxuICAgIGNvbnN0IG1ldGFkYXRhID0ge1xuICAgICAgJy8nOiB7XG4gICAgICAgIHRpdGxlOiAnTXkgUG9ydGZvbGlvIC0gRnVsbCBTdGFjayBEZXZlbG9wZXInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1dlbGNvbWUgdG8gbXkgcG9ydGZvbGlvIHNob3djYXNpbmcgbXkgZXhwZXJ0aXNlIGluIHdlYiBkZXZlbG9wbWVudCwgZmVhdHVyaW5nIHByb2plY3RzIGluIFJlYWN0LCBOZXh0LmpzLCBhbmQgRGphbmdvLicsXG4gICAgICAgIGltYWdlOiBgJHtiYXNlVXJsfS9vZy1ob21lLmpwZ2AsXG4gICAgICAgIHR5cGU6ICd3ZWJzaXRlJ1xuICAgICAgfSxcbiAgICAgICcvcG9ydGZvbGlvJzoge1xuICAgICAgICB0aXRsZTogJ1BvcnRmb2xpbyAtIE15IFdvcmsgYW5kIFByb2plY3RzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdFeHBsb3JlIG15IHBvcnRmb2xpbyBvZiB3ZWIgZGV2ZWxvcG1lbnQgcHJvamVjdHMsIGluY2x1ZGluZyBmdWxsLXN0YWNrIGFwcGxpY2F0aW9ucywgcmVzcG9uc2l2ZSB3ZWJzaXRlcywgYW5kIGludGVyYWN0aXZlIFVJcy4nLFxuICAgICAgICBpbWFnZTogYCR7YmFzZVVybH0vb2ctcG9ydGZvbGlvLmpwZ2AsXG4gICAgICAgIHR5cGU6ICd3ZWJzaXRlJ1xuICAgICAgfSxcbiAgICAgICcvcHJvamVjdHMnOiB7XG4gICAgICAgIHRpdGxlOiAnUHJvamVjdHMgLSBXZWIgRGV2ZWxvcG1lbnQgU2hvd2Nhc2UnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1ZpZXcgbXkgbGF0ZXN0IHdlYiBkZXZlbG9wbWVudCBwcm9qZWN0cyBidWlsdCB3aXRoIG1vZGVybiB0ZWNobm9sb2dpZXMgbGlrZSBSZWFjdCwgTmV4dC5qcywgYW5kIERqYW5nby4nLFxuICAgICAgICBpbWFnZTogYCR7YmFzZVVybH0vb2ctcHJvamVjdHMuanBnYCxcbiAgICAgICAgdHlwZTogJ3dlYnNpdGUnXG4gICAgICB9LFxuICAgICAgJy9yZXN1bWUnOiB7XG4gICAgICAgIHRpdGxlOiAnUmVzdW1lIC0gRnVsbCBTdGFjayBEZXZlbG9wZXInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2Zlc3Npb25hbCBleHBlcmllbmNlLCBza2lsbHMsIGFuZCBxdWFsaWZpY2F0aW9ucyBpbiB3ZWIgZGV2ZWxvcG1lbnQgYW5kIHNvZnR3YXJlIGVuZ2luZWVyaW5nLicsXG4gICAgICAgIGltYWdlOiBgJHtiYXNlVXJsfS9vZy1yZXN1bWUuanBnYCxcbiAgICAgICAgdHlwZTogJ3Byb2ZpbGUnXG4gICAgICB9LFxuICAgICAgJy9jb250YWN0dXMnOiB7XG4gICAgICAgIHRpdGxlOiAnQ29udGFjdCBNZSAtIExldFxcJ3MgV29yayBUb2dldGhlcicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnR2V0IGluIHRvdWNoIGZvciBjb2xsYWJvcmF0aW9uIG9wcG9ydHVuaXRpZXMsIHByb2plY3QgaW5xdWlyaWVzLCBvciBwcm9mZXNzaW9uYWwgY29ubmVjdGlvbnMuJyxcbiAgICAgICAgaW1hZ2U6IGAke2Jhc2VVcmx9L29nLWNvbnRhY3QuanBnYCxcbiAgICAgICAgdHlwZTogJ3dlYnNpdGUnXG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBtZXRhZGF0YVtwYXRoXSB8fCBtZXRhZGF0YVsnLyddO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgPFNFTyB7Li4uZ2V0UGFnZU1ldGFkYXRhKCl9IC8+XG4gICAgICA8TmF2QmFyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJUaGVtZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJ0aGVtZSIsIk5hdkJhciIsIkZvb3RlciIsIkZpeGVkQm90dG9tQmFyIiwiU0VPIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJmb3JFYWNoIiwicm91dGUiLCJwcmVmZXRjaCIsImdldFBhZ2VNZXRhZGF0YSIsInBhdGgiLCJwYXRobmFtZSIsImJhc2VVcmwiLCJtZXRhZGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInR5cGUiLCJtYWluIiwiY2xhc3NOYW1lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/esm/styles/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__]);\n_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    breakpoints: {\n        values: {\n            xs: 0,\n            sm: 600,\n            md: 960,\n            lg: 1280,\n            xl: 1920\n        }\n    },\n    palette: {\n        mode: 'dark',\n        primary: {\n            main: '#3b82f6',\n            light: '#60a5fa',\n            dark: '#1e40af',\n            contrastText: '#ffffff'\n        },\n        secondary: {\n            main: '#f59e0b',\n            light: '#fbbf24',\n            dark: '#d97706',\n            contrastText: '#000000'\n        },\n        background: {\n            default: '#0f172a',\n            paper: '#1e293b'\n        },\n        text: {\n            primary: '#f1f5f9',\n            secondary: '#cbd5e1'\n        },\n        success: {\n            main: '#10b981',\n            light: '#34d399',\n            dark: '#047857'\n        },\n        error: {\n            main: '#ef4444',\n            light: '#f87171',\n            dark: '#dc2626'\n        },\n        warning: {\n            main: '#f59e0b',\n            light: '#fbbf24',\n            dark: '#d97706'\n        },\n        info: {\n            main: '#06b6d4',\n            light: '#22d3ee',\n            dark: '#0891b2'\n        },\n        divider: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#cbd5e1', 0.1)\n    },\n    typography: {\n        fontFamily: '\"Inter\", \"Roboto\", \"Helvetica\", \"Arial\", sans-serif',\n        h1: {\n            fontSize: 'clamp(2rem, 5vw, 3rem)',\n            fontWeight: 700,\n            lineHeight: 1.2,\n            letterSpacing: '-0.02em',\n            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',\n            background: 'linear-gradient(135deg, #3b82f6 0%, #f59e0b 100%)',\n            backgroundClip: 'text',\n            WebkitBackgroundClip: 'text',\n            WebkitTextFillColor: 'transparent'\n        },\n        h2: {\n            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',\n            fontWeight: 600,\n            lineHeight: 1.3,\n            letterSpacing: '-0.01em',\n            marginBottom: 'clamp(0.75rem, 2.5vw, 1.25rem)'\n        },\n        h3: {\n            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',\n            fontWeight: 600,\n            lineHeight: 1.4,\n            marginBottom: 'clamp(0.5rem, 2vw, 1rem)'\n        },\n        body1: {\n            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',\n            lineHeight: 1.6,\n            marginBottom: 'clamp(0.75rem, 2vw, 1rem)',\n            color: '#cbd5e1'\n        },\n        body2: {\n            fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',\n            lineHeight: 1.5,\n            marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)',\n            color: '#94a3b8'\n        },\n        button: {\n            fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',\n            fontWeight: 600,\n            letterSpacing: '0.02em',\n            textTransform: 'none'\n        }\n    },\n    spacing: (factor)=>`${0.5 * factor}rem`,\n    shape: {\n        borderRadius: 12\n    },\n    components: {\n        MuiCssBaseline: {\n            styleOverrides: {\n                body: {\n                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',\n                    backgroundAttachment: 'fixed'\n                }\n            }\n        },\n        MuiContainer: {\n            styleOverrides: {\n                root: {\n                    paddingLeft: 'clamp(1rem, 5vw, 3rem)',\n                    paddingRight: 'clamp(1rem, 5vw, 3rem)',\n                    '@media (max-width: 600px)': {\n                        paddingLeft: '1rem',\n                        paddingRight: '1rem'\n                    }\n                }\n            }\n        },\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    textTransform: 'none',\n                    fontWeight: 600,\n                    padding: '0.75rem 1.5rem',\n                    borderRadius: '8px',\n                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',\n                    '@media (max-width: 600px)': {\n                        padding: '0.625rem 1rem',\n                        width: '100%'\n                    }\n                },\n                containedPrimary: {\n                    background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',\n                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',\n                    '&:hover': {\n                        boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',\n                        transform: 'translateY(-2px)'\n                    }\n                },\n                containedSecondary: {\n                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',\n                    boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)',\n                    '&:hover': {\n                        boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)',\n                        transform: 'translateY(-2px)'\n                    }\n                },\n                outlined: {\n                    borderColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.5),\n                    color: '#3b82f6',\n                    '&:hover': {\n                        borderColor: '#3b82f6',\n                        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.08)\n                    }\n                }\n            }\n        },\n        MuiCard: {\n            styleOverrides: {\n                root: {\n                    borderRadius: 16,\n                    backgroundColor: 'rgba(30, 41, 59, 0.5)',\n                    backdropFilter: 'blur(10px)',\n                    border: `1px solid ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.1)}`,\n                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',\n                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',\n                    '@media (max-width: 600px)': {\n                        borderRadius: 12\n                    },\n                    '&:hover': {\n                        transform: 'translateY(-8px)',\n                        boxShadow: '0 12px 40px rgba(59, 130, 246, 0.2)',\n                        borderColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.3)\n                    }\n                }\n            }\n        },\n        MuiOutlinedInput: {\n            styleOverrides: {\n                root: {\n                    '& fieldset': {\n                        borderColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.2),\n                        transition: 'all 0.3s ease-in-out'\n                    },\n                    '&:hover fieldset': {\n                        borderColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.4)\n                    },\n                    '&.Mui-focused fieldset': {\n                        borderColor: '#3b82f6',\n                        boxShadow: `0 0 0 3px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.1)}`\n                    }\n                }\n            }\n        },\n        MuiTextField: {\n            styleOverrides: {\n                root: {\n                    '& .MuiInputLabel-root': {\n                        color: '#cbd5e1',\n                        '&.Mui-focused': {\n                            color: '#3b82f6'\n                        }\n                    }\n                }\n            }\n        },\n        MuiChip: {\n            styleOverrides: {\n                root: {\n                    backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.15),\n                    color: '#3b82f6',\n                    border: `1px solid ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.3)}`,\n                    '&:hover': {\n                        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.25)\n                    }\n                }\n            }\n        },\n        MuiPaper: {\n            styleOverrides: {\n                root: {\n                    backgroundColor: 'rgba(30, 41, 59, 0.6)',\n                    backdropFilter: 'blur(10px)',\n                    border: `1px solid ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#3b82f6', 0.1)}`\n                }\n            }\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxXQUFXO29CQUNwQztnQkFDRjtZQUNGO1FBQ0Y7UUFDQTBFLFVBQVU7WUFDUnhCLGdCQUFnQjtnQkFDZEksTUFBTTtvQkFDSmEsaUJBQWlCO29CQUNqQkUsZ0JBQWdCO29CQUNoQkMsUUFBUSxDQUFDLFVBQVUsRUFBRXRFLDJEQUFLQSxDQUFDLFdBQVcsTUFBTTtnQkFDOUM7WUFDRjtRQUNGO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlQyxLQUFLQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYW1pbi9Eb2N1bWVudHMvTXlQcm9qZWN0cy9zaG93Y2FzZV93ZWJzaXRlL2Zyb250ZW5kL3N0eWxlcy90aGVtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSwgYWxwaGEgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICBicmVha3BvaW50czoge1xuICAgIHZhbHVlczoge1xuICAgICAgeHM6IDAsICAgICAgLy8gTW9iaWxlXG4gICAgICBzbTogNjAwLCAgICAvLyBUYWJsZXRcbiAgICAgIG1kOiA5NjAsICAgIC8vIFNtYWxsIGxhcHRvcFxuICAgICAgbGc6IDEyODAsICAgLy8gRGVza3RvcFxuICAgICAgeGw6IDE5MjAsICAgLy8gTGFyZ2Ugc2NyZWVuc1xuICAgIH0sXG4gIH0sXG4gIHBhbGV0dGU6IHtcbiAgICBtb2RlOiAnZGFyaycsXG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyMzYjgyZjYnLFxuICAgICAgbGlnaHQ6ICcjNjBhNWZhJyxcbiAgICAgIGRhcms6ICcjMWU0MGFmJyxcbiAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnI2Y1OWUwYicsXG4gICAgICBsaWdodDogJyNmYmJmMjQnLFxuICAgICAgZGFyazogJyNkOTc3MDYnLFxuICAgICAgY29udHJhc3RUZXh0OiAnIzAwMDAwMCcsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiAnIzBmMTcyYScsXG4gICAgICBwYXBlcjogJyMxZTI5M2InLFxuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgcHJpbWFyeTogJyNmMWY1ZjknLFxuICAgICAgc2Vjb25kYXJ5OiAnI2NiZDVlMScsXG4gICAgfSxcbiAgICBzdWNjZXNzOiB7XG4gICAgICBtYWluOiAnIzEwYjk4MScsXG4gICAgICBsaWdodDogJyMzNGQzOTknLFxuICAgICAgZGFyazogJyMwNDc4NTcnLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG1haW46ICcjZWY0NDQ0JyxcbiAgICAgIGxpZ2h0OiAnI2Y4NzE3MScsXG4gICAgICBkYXJrOiAnI2RjMjYyNicsXG4gICAgfSxcbiAgICB3YXJuaW5nOiB7XG4gICAgICBtYWluOiAnI2Y1OWUwYicsXG4gICAgICBsaWdodDogJyNmYmJmMjQnLFxuICAgICAgZGFyazogJyNkOTc3MDYnLFxuICAgIH0sXG4gICAgaW5mbzoge1xuICAgICAgbWFpbjogJyMwNmI2ZDQnLFxuICAgICAgbGlnaHQ6ICcjMjJkM2VlJyxcbiAgICAgIGRhcms6ICcjMDg5MWIyJyxcbiAgICB9LFxuICAgIGRpdmlkZXI6IGFscGhhKCcjY2JkNWUxJywgMC4xKSxcbiAgfSxcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6ICdcIkludGVyXCIsIFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZicsXG4gICAgaDE6IHtcbiAgICAgIGZvbnRTaXplOiAnY2xhbXAoMnJlbSwgNXZ3LCAzcmVtKScsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDJlbScsXG4gICAgICBtYXJnaW5Cb3R0b206ICdjbGFtcCgxcmVtLCAzdncsIDEuNXJlbSknLFxuICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzYjgyZjYgMCUsICNmNTllMGIgMTAwJSknLFxuICAgICAgYmFja2dyb3VuZENsaXA6ICd0ZXh0JyxcbiAgICAgIFdlYmtpdEJhY2tncm91bmRDbGlwOiAndGV4dCcsXG4gICAgICBXZWJraXRUZXh0RmlsbENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRTaXplOiAnY2xhbXAoMS41cmVtLCA0dncsIDIuMjVyZW0pJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC4wMWVtJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogJ2NsYW1wKDAuNzVyZW0sIDIuNXZ3LCAxLjI1cmVtKScsXG4gICAgfSxcbiAgICBoMzoge1xuICAgICAgZm9udFNpemU6ICdjbGFtcCgxLjI1cmVtLCAzdncsIDEuNzVyZW0pJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcbiAgICAgIG1hcmdpbkJvdHRvbTogJ2NsYW1wKDAuNXJlbSwgMnZ3LCAxcmVtKScsXG4gICAgfSxcbiAgICBib2R5MToge1xuICAgICAgZm9udFNpemU6ICdjbGFtcCgxcmVtLCAxLjV2dywgMS4xMjVyZW0pJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNixcbiAgICAgIG1hcmdpbkJvdHRvbTogJ2NsYW1wKDAuNzVyZW0sIDJ2dywgMXJlbSknLFxuICAgICAgY29sb3I6ICcjY2JkNWUxJyxcbiAgICB9LFxuICAgIGJvZHkyOiB7XG4gICAgICBmb250U2l6ZTogJ2NsYW1wKDAuODc1cmVtLCAxLjJ2dywgMXJlbSknLFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgbWFyZ2luQm90dG9tOiAnY2xhbXAoMC41cmVtLCAxLjV2dywgMC43NXJlbSknLFxuICAgICAgY29sb3I6ICcjOTRhM2I4JyxcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgZm9udFNpemU6ICdjbGFtcCgwLjg3NXJlbSwgMS4ydncsIDFyZW0pJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6ICcwLjAyZW0nLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG4gIHNwYWNpbmc6IChmYWN0b3IpID0+IGAkezAuNSAqIGZhY3Rvcn1yZW1gLFxuICBzaGFwZToge1xuICAgIGJvcmRlclJhZGl1czogMTIsXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNdWlDc3NCYXNlbGluZToge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGYxNzJhIDAlLCAjMWUyOTNiIDEwMCUpJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQXR0YWNobWVudDogJ2ZpeGVkJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlDb250YWluZXI6IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBwYWRkaW5nTGVmdDogJ2NsYW1wKDFyZW0sIDV2dywgM3JlbSknLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogJ2NsYW1wKDFyZW0sIDV2dywgM3JlbSknLFxuICAgICAgICAgICdAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpJzoge1xuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxcmVtJyxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFyZW0nLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpQnV0dG9uOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICBwYWRkaW5nOiAnMC43NXJlbSAxLjVyZW0nLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSknLFxuICAgICAgICAgICdAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpJzoge1xuICAgICAgICAgICAgcGFkZGluZzogJzAuNjI1cmVtIDFyZW0nLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjb250YWluZWRQcmltYXJ5OiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzYjgyZjYgMCUsICMxZTQwYWYgMTAwJSknLFxuICAgICAgICAgIGJveFNoYWRvdzogJzAgNHB4IDE1cHggcmdiYSg1OSwgMTMwLCAyNDYsIDAuMyknLFxuICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgYm94U2hhZG93OiAnMCA4cHggMjVweCByZ2JhKDU5LCAxMzAsIDI0NiwgMC40KScsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0ycHgpJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjb250YWluZWRTZWNvbmRhcnk6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1OWUwYiAwJSwgI2Q5NzcwNiAxMDAlKScsXG4gICAgICAgICAgYm94U2hhZG93OiAnMCA0cHggMTVweCByZ2JhKDI0NSwgMTU4LCAxMSwgMC4zKScsXG4gICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwIDhweCAyNXB4IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjQpJyxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTJweCknLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dGxpbmVkOiB7XG4gICAgICAgICAgYm9yZGVyQ29sb3I6IGFscGhhKCcjM2I4MmY2JywgMC41KSxcbiAgICAgICAgICBjb2xvcjogJyMzYjgyZjYnLFxuICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjM2I4MmY2JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWxwaGEoJyMzYjgyZjYnLCAwLjA4KSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUNhcmQ6IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDE2LFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMzAsIDQxLCA1OSwgMC41KScsXG4gICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDEwcHgpJyxcbiAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHthbHBoYSgnIzNiODJmNicsIDAuMSl9YCxcbiAgICAgICAgICBib3hTaGFkb3c6ICcwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSknLFxuICAgICAgICAgICdAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpJzoge1xuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMixcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtOHB4KScsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwIDEycHggNDBweCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4yKScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogYWxwaGEoJyMzYjgyZjYnLCAwLjMpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpT3V0bGluZWRJbnB1dDoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICcmIGZpZWxkc2V0Jzoge1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFscGhhKCcjM2I4MmY2JywgMC4yKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlLWluLW91dCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjpob3ZlciBmaWVsZHNldCc6IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhbHBoYSgnIzNiODJmNicsIDAuNCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJi5NdWktZm9jdXNlZCBmaWVsZHNldCc6IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzNiODJmNicsXG4gICAgICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAzcHggJHthbHBoYSgnIzNiODJmNicsIDAuMSl9YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVRleHRGaWVsZDoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICcmIC5NdWlJbnB1dExhYmVsLXJvb3QnOiB7XG4gICAgICAgICAgICBjb2xvcjogJyNjYmQ1ZTEnLFxuICAgICAgICAgICAgJyYuTXVpLWZvY3VzZWQnOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAnIzNiODJmNicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpQ2hpcDoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWxwaGEoJyMzYjgyZjYnLCAwLjE1KSxcbiAgICAgICAgICBjb2xvcjogJyMzYjgyZjYnLFxuICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2FscGhhKCcjM2I4MmY2JywgMC4zKX1gLFxuICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhbHBoYSgnIzNiODJmNicsIDAuMjUpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpUGFwZXI6IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDMwLCA0MSwgNTksIDAuNiknLFxuICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiAnYmx1cigxMHB4KScsXG4gICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7YWxwaGEoJyMzYjgyZjYnLCAwLjEpfWAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7Il0sIm5hbWVzIjpbImNyZWF0ZVRoZW1lIiwiYWxwaGEiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwidmFsdWVzIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsInBhbGV0dGUiLCJtb2RlIiwicHJpbWFyeSIsIm1haW4iLCJsaWdodCIsImRhcmsiLCJjb250cmFzdFRleHQiLCJzZWNvbmRhcnkiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsInBhcGVyIiwidGV4dCIsInN1Y2Nlc3MiLCJlcnJvciIsIndhcm5pbmciLCJpbmZvIiwiZGl2aWRlciIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwiaDEiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsImJhY2tncm91bmRDbGlwIiwiV2Via2l0QmFja2dyb3VuZENsaXAiLCJXZWJraXRUZXh0RmlsbENvbG9yIiwiaDIiLCJoMyIsImJvZHkxIiwiY29sb3IiLCJib2R5MiIsImJ1dHRvbiIsInRleHRUcmFuc2Zvcm0iLCJzcGFjaW5nIiwiZmFjdG9yIiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJjb21wb25lbnRzIiwiTXVpQ3NzQmFzZWxpbmUiLCJzdHlsZU92ZXJyaWRlcyIsImJvZHkiLCJiYWNrZ3JvdW5kQXR0YWNobWVudCIsIk11aUNvbnRhaW5lciIsInJvb3QiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIk11aUJ1dHRvbiIsInBhZGRpbmciLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJjb250YWluZWRQcmltYXJ5IiwiYm94U2hhZG93IiwidHJhbnNmb3JtIiwiY29udGFpbmVkU2Vjb25kYXJ5Iiwib3V0bGluZWQiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmRDb2xvciIsIk11aUNhcmQiLCJiYWNrZHJvcEZpbHRlciIsImJvcmRlciIsIk11aU91dGxpbmVkSW5wdXQiLCJNdWlUZXh0RmllbGQiLCJNdWlDaGlwIiwiTXVpUGFwZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./styles/theme.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/variables.css":
/*!******************************!*\
  !*** ./styles/variables.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Box,Container,Divider,Grid,IconButton,Link,Stack,Typography!=!./node_modules/@mui/material/esm/index.js":
/*!*****************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=Box,Container,Divider,Grid,IconButton,Link,Stack,Typography!=!./node_modules/@mui/material/esm/index.js ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Box: () => (/* reexport safe */ _Box_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Container: () => (/* reexport safe */ _Container_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Divider: () => (/* reexport safe */ _Divider_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   Grid: () => (/* reexport safe */ _Grid_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   IconButton: () => (/* reexport safe */ _IconButton_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   Link: () => (/* reexport safe */ _Link_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   Stack: () => (/* reexport safe */ _Stack_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   Typography: () => (/* reexport safe */ _Typography_index_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Box_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Box/index.js\");\n/* harmony import */ var _Container_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Container/index.js\");\n/* harmony import */ var _Divider_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Divider/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Divider/index.js\");\n/* harmony import */ var _Grid_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Grid/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Grid/index.js\");\n/* harmony import */ var _IconButton_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IconButton/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/IconButton/index.js\");\n/* harmony import */ var _Link_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Link/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Link/index.js\");\n/* harmony import */ var _Stack_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Stack/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Stack/index.js\");\n/* harmony import */ var _Typography_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Typography/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Typography/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box_index_js__WEBPACK_IMPORTED_MODULE_0__, _Container_index_js__WEBPACK_IMPORTED_MODULE_1__, _Divider_index_js__WEBPACK_IMPORTED_MODULE_2__, _Grid_index_js__WEBPACK_IMPORTED_MODULE_3__, _IconButton_index_js__WEBPACK_IMPORTED_MODULE_4__, _Link_index_js__WEBPACK_IMPORTED_MODULE_5__, _Stack_index_js__WEBPACK_IMPORTED_MODULE_6__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_7__]);\n([_Box_index_js__WEBPACK_IMPORTED_MODULE_0__, _Container_index_js__WEBPACK_IMPORTED_MODULE_1__, _Divider_index_js__WEBPACK_IMPORTED_MODULE_2__, _Grid_index_js__WEBPACK_IMPORTED_MODULE_3__, _IconButton_index_js__WEBPACK_IMPORTED_MODULE_4__, _Link_index_js__WEBPACK_IMPORTED_MODULE_5__, _Stack_index_js__WEBPACK_IMPORTED_MODULE_6__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPUJveCxDb250YWluZXIsRGl2aWRlcixHcmlkLEljb25CdXR0b24sTGluayxTdGFjayxUeXBvZ3JhcGh5IT0hLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDK0M7QUFDWTtBQUNKO0FBQ047QUFDWTtBQUNaO0FBQ0UiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluL0RvY3VtZW50cy9NeVByb2plY3RzL3Nob3djYXNlX3dlYnNpdGUvZnJvbnRlbmQvbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvZXNtL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3ggfSBmcm9tIFwiLi9Cb3gvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb250YWluZXIgfSBmcm9tIFwiLi9Db250YWluZXIvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEaXZpZGVyIH0gZnJvbSBcIi4vRGl2aWRlci9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdyaWQgfSBmcm9tIFwiLi9HcmlkL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvbkJ1dHRvbiB9IGZyb20gXCIuL0ljb25CdXR0b24vaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rIH0gZnJvbSBcIi4vTGluay9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0YWNrIH0gZnJvbSBcIi4vU3RhY2svaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUeXBvZ3JhcGh5IH0gZnJvbSBcIi4vVHlwb2dyYXBoeS9pbmRleC5qc1wiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=Box,Container,Divider,Grid,IconButton,Link,Stack,Typography!=!./node_modules/@mui/material/esm/index.js\n");

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

/***/ "@mui/system/Grid":
/*!***********************************!*\
  !*** external "@mui/system/Grid" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/Grid");;

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

/***/ "@mui/system/style":
/*!************************************!*\
  !*** external "@mui/system/style" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/style");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@mui","vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.jsx")));
module.exports = __webpack_exports__;

})();