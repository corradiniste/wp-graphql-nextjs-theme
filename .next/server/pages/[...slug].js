"use strict";
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
exports.id = "pages/[...slug]";
exports.ids = ["pages/[...slug]"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: process.env.WP_GRAPHQL_URL,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZEO0FBRTdELE1BQU1FLE1BQU0sR0FBRyxJQUFJRix3REFBWSxDQUFDO0lBQzlCRyxHQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjO0lBQy9CQyxLQUFLLEVBQUUsSUFBSU4seURBQWEsRUFBRTtDQUMzQixDQUFDO0FBRUYsaUVBQWVDLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvdC1kYW5nLWhvbWVzLWNvdXJzZS8uL2NsaWVudC5qcz85NzE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgdXJpOiBwcm9jZXNzLmVudi5XUF9HUkFQSFFMX1VSTCxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJjbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiV1BfR1JBUEhRTF9VUkwiLCJjYWNoZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/[...slug].js":
/*!****************************!*\
  !*** ./pages/[...slug].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client */ \"./client.js\");\n\n\nconst getStaticPaths = async ()=>{\n    const { data  } = await client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query({\n        query: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n      query AllPagesQuery {\n        pages {\n          nodes {\n            uri\n          }\n        }\n    `\n    });\n    return {\n        paths: [\n            ...data.pages.nodes,\n            ...data.properties.nodes\n        ].filter((page)=>page.uri !== \"/\"\n        ).map((page)=>({\n                params: {\n                    slug: page.uri.substring(1, page.uri.length - 1).split(\"/\")\n                }\n            })\n        ),\n        fallback: false\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bLi4uc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxQztBQUNUO0FBRXJCLE1BQU1FLGNBQWMsR0FBRyxVQUFZO0lBQ3hDLE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUcsTUFBTUYsb0RBQVksQ0FBQztRQUNsQ0csS0FBSyxFQUFFSiwrQ0FBRyxDQUFDOzs7Ozs7O0lBT1gsQ0FBQztLQUNGLENBQUM7SUFFRixPQUFPO1FBQ0xLLEtBQUssRUFBRTtlQUFJRixJQUFJLENBQUNHLEtBQUssQ0FBQ0MsS0FBSztlQUFLSixJQUFJLENBQUNLLFVBQVUsQ0FBQ0QsS0FBSztTQUFDLENBQ25ERSxNQUFNLENBQUMsQ0FBQ0MsSUFBSSxHQUFLQSxJQUFJLENBQUNDLEdBQUcsS0FBSyxHQUFHO1FBQUEsQ0FBQyxDQUNsQ0MsR0FBRyxDQUFDLENBQUNGLElBQUksR0FBSyxDQUFDO2dCQUNkRyxNQUFNLEVBQUU7b0JBQ05DLElBQUksRUFBRUosSUFBSSxDQUFDQyxHQUFHLENBQUNJLFNBQVMsQ0FBQyxDQUFDLEVBQUVMLElBQUksQ0FBQ0MsR0FBRyxDQUFDSyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQzVEO2FBQ0YsQ0FBQztRQUFBLENBQUM7UUFDTEMsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3QtZGFuZy1ob21lcy1jb3Vyc2UvLi9wYWdlcy9bLi4uc2x1Z10uanM/YTYxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcImNsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgQWxsUGFnZXNRdWVyeSB7XG4gICAgICAgIHBhZ2VzIHtcbiAgICAgICAgICBub2RlcyB7XG4gICAgICAgICAgICB1cmlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBbLi4uZGF0YS5wYWdlcy5ub2RlcywgLi4uZGF0YS5wcm9wZXJ0aWVzLm5vZGVzXVxuICAgICAgLmZpbHRlcigocGFnZSkgPT4gcGFnZS51cmkgIT09IFwiL1wiKVxuICAgICAgLm1hcCgocGFnZSkgPT4gKHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgc2x1ZzogcGFnZS51cmkuc3Vic3RyaW5nKDEsIHBhZ2UudXJpLmxlbmd0aCAtIDEpLnNwbGl0KFwiL1wiKSxcbiAgICAgICAgfSxcbiAgICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59OyJdLCJuYW1lcyI6WyJncWwiLCJjbGllbnQiLCJnZXRTdGF0aWNQYXRocyIsImRhdGEiLCJxdWVyeSIsInBhdGhzIiwicGFnZXMiLCJub2RlcyIsInByb3BlcnRpZXMiLCJmaWx0ZXIiLCJwYWdlIiwidXJpIiwibWFwIiwicGFyYW1zIiwic2x1ZyIsInN1YnN0cmluZyIsImxlbmd0aCIsInNwbGl0IiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[...slug].js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[...slug].js"));
module.exports = __webpack_exports__;

})();