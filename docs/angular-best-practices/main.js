(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/lia":
/*!*****************************************!*\
  !*** ./src/layouts/user/user.module.ts ***!
  \*****************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_layouts_user_pages_settings_page_settings_page_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/layouts/user/pages/settings-page/settings-page.module */ "Jmzi");
/* harmony import */ var src_layouts_user_user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/layouts/user/user-routing.module */ "WnFd");
/* harmony import */ var src_layouts_user_user_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/layouts/user/user-layout.component */ "jcAY");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/shared.module */ "KZX/");







class UserModule {
}
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserModule_Factory(t) { return new (t || UserModule)(); }, imports: [[
            src_layouts_user_user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_layouts_user_pages_settings_page_settings_page_module__WEBPACK_IMPORTED_MODULE_2__["SettingsPageModule"],
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, { declarations: [src_layouts_user_user_layout_component__WEBPACK_IMPORTED_MODULE_4__["UserLayoutComponent"]], imports: [src_layouts_user_user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_layouts_user_pages_settings_page_settings_page_module__WEBPACK_IMPORTED_MODULE_2__["SettingsPageModule"],
        src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [src_layouts_user_user_layout_component__WEBPACK_IMPORTED_MODULE_4__["UserLayoutComponent"]],
                imports: [
                    src_layouts_user_user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_layouts_user_pages_settings_page_settings_page_module__WEBPACK_IMPORTED_MODULE_2__["SettingsPageModule"],
                    src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yury/Desktop/PROJECTS/ANGULAR/angular-best-practices/src/main.ts */"zUnb");


/***/ }),

/***/ "0Ho1":
/*!******************************************************!*\
  !*** ./src/shared/components/svg-icon/icons-list.ts ***!
  \******************************************************/
/*! exports provided: ICONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return ICONS; });
var ICONS;
(function (ICONS) {
    ICONS["ANGULAR"] = "angular";
    ICONS["ADD"] = "add";
    ICONS["SEARCH"] = "search";
    ICONS["CURSOR"] = "cursor";
    ICONS["BELL"] = "bell";
    ICONS["LIST"] = "list";
})(ICONS || (ICONS = {}));


/***/ }),

/***/ "2BPS":
/*!***************************************************!*\
  !*** ./src/layouts/auth/auth-layout.component.ts ***!
  \***************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["auth-layout"]], decls: 2, vars: 0, consts: [[1, "layout-wrapper"]], template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".layout-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.layout-wrapper[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.layout-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  grid-template-rows: auto;\n  background-color: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvdGVtcGxhdGVzLnNjc3MiLCJzcmMvbGF5b3V0cy9hdXRoL2F1dGgtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FEUUE7RUFFRSx1QkFBQTtBQ05GOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBRUEsd0JBQUE7RUFDQSx5QkNMdUI7QURZekIiLCJmaWxlIjoic3JjL2xheW91dHMvYXV0aC9hdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRmxleGJveFxuJWQtZmxleC1hbGlnbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4lZC1mbGV4LXN0YXJ0IHtcbiAgQGV4dGVuZCAlZC1mbGV4LWFsaWduLWNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4lZC1mbGV4LWNlbnRlciB7XG4gIEBleHRlbmQgJWQtZmxleC1hbGlnbi1jZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4lZC1mbGV4LWJldHdlZW4ge1xuICBAZXh0ZW5kICVkLWZsZXgtYWxpZ24tY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiVkLWZsZXgtY29sdW1uLWJldHdlZW4ge1xuICBAZXh0ZW5kICVkLWZsZXgtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuJWQtZmxleC1jb2x1bW4tY2VudGVyIHtcbiAgQGV4dGVuZCAlZC1mbGV4LWNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLy9Hcmlkc1xuJWQtZ3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLy9TaGFkb3dzXG4lc2hhZG93LW1hdGVyaWFsIHtcbiAgYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDAgMXB4IDJweCAwLCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDAgMXB4IDNweCAxcHg7XG59XG4iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy90aGVtZVwiO1xuXG4ubGF5b3V0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgQGV4dGVuZCAlZC1mbGV4LWNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXV0aC1sYXlvdXQtYmFja2dyb3VuZDtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzL2Z1bmN0aW9uc1wiO1xuQGltcG9ydCBcInNyYy9zdHlsZXMvdGVtcGxhdGVzXCI7XG5cblxuLy9BdXRoIGxheW91dFxuJGF1dGgtbGF5b3V0LWJhY2tncm91bmQ6ICNlZWVlZWU7XG4kYXV0aC1mb3JtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG5cbi8vSGVhZGVyIENvbG9yc1xuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXG4vL0Zvb3RlciBDb2xvcnNcbiRmb290ZXItYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuJGxheW91dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZjdmNWY5O1xuJHNldHRpbmctYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuLy9Gb250c1xuJGJhc2UtcmVndWxhci1mb250OiAnQXJpYWwnO1xuJGJhc2UtbGluay1jb2xvcjogIzg3ODc4NztcblxuLy9HdXR0ZXJzXG4kbGctc2NyZWVuLWd1dHRlcjogcHgyZW0oNTYpOyAvLyBmcm9tIDE5MjBweFxuJG1kLXNjcmVlbi1ndXR0ZXI6IHB4MmVtKDU2KTsgLy8gZnJvbSAxMjgwcHggdG8gMTkxOXB4XG4kc20tc2NyZWVuLWd1dHRlcjogcHgyZW0oNTYpOyAvLyBmcm9tIDc2MHB4IHRvIDEyMTlweFxuJHhzLXNjcmVlbi1ndXR0ZXI6IHB4MmVtKDI0KTsgLy8gZnJvbSAwcHggdG8gNzU5cHhcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'auth-layout',
                templateUrl: './auth-layout.component.html',
                styleUrls: ['./auth-layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3g2r":
/*!**************************************************************!*\
  !*** ./src/shared/components/svg-icon/svg-icon.component.ts ***!
  \**************************************************************/
/*! exports provided: SvgIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconComponent", function() { return SvgIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SvgIconComponent {
    constructor() {
        this._width = '16';
        this._height = '16';
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    set width(value) {
        this._width = value;
    }
    get width() {
        return this._width;
    }
    set height(value) {
        this._height = value;
    }
    get height() {
        return this._height;
    }
    ngOnInit() {
    }
}
SvgIconComponent.ɵfac = function SvgIconComponent_Factory(t) { return new (t || SvgIconComponent)(); };
SvgIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SvgIconComponent, selectors: [["svg-icon"]], inputs: { name: "name", width: "width", height: "height" }, decls: 2, vars: 5, template: function SvgIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width)("height", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", "/assets/icons/sprites.svg#" + ctx.name, null, "xlink");
    } }, styles: ["svg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\nsvg[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvdGVtcGxhdGVzLnNjc3MiLCJzcmMvc2hhcmVkL2NvbXBvbmVudHMvc3ZnLWljb24vc3ZnLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURRQTtFQUVFLHVCQUFBO0FDTkYiLCJmaWxlIjoic3JjL3NoYXJlZC9jb21wb25lbnRzL3N2Zy1pY29uL3N2Zy1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9GbGV4Ym94XG4lZC1mbGV4LWFsaWduLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiVkLWZsZXgtc3RhcnQge1xuICBAZXh0ZW5kICVkLWZsZXgtYWxpZ24tY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbiVkLWZsZXgtY2VudGVyIHtcbiAgQGV4dGVuZCAlZC1mbGV4LWFsaWduLWNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiVkLWZsZXgtYmV0d2VlbiB7XG4gIEBleHRlbmQgJWQtZmxleC1hbGlnbi1jZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuJWQtZmxleC1jb2x1bW4tYmV0d2VlbiB7XG4gIEBleHRlbmQgJWQtZmxleC1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4lZC1mbGV4LWNvbHVtbi1jZW50ZXIge1xuICBAZXh0ZW5kICVkLWZsZXgtY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vL0dyaWRzXG4lZC1ncmlkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4vL1NoYWRvd3NcbiVzaGFkb3ctbWF0ZXJpYWwge1xuICBib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMCAxcHggMnB4IDAsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMCAxcHggM3B4IDFweDtcbn1cbiIsInN2ZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnN2ZyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SvgIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'svg-icon',
                templateUrl: './svg-icon.component.html',
                styleUrls: ['./svg-icon.component.scss']
            }]
    }], function () { return []; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "4/Ee":
/*!*****************************************!*\
  !*** ./src/layouts/auth/auth.module.ts ***!
  \*****************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "vpgl");
/* harmony import */ var src_layouts_auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/layouts/auth/auth-routing.module */ "iXJi");
/* harmony import */ var src_layouts_auth_pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/layouts/auth/pages/register/register.component */ "5TcF");
/* harmony import */ var src_layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/layouts/auth/auth-layout.component */ "2BPS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var src_layouts_auth_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/layouts/auth/components/auth-form/auth-form.component */ "i0Sj");













class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_layouts_auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], src_layouts_auth_pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], src_layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"], src_layouts_auth_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_11__["AuthFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_layouts_auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], src_layouts_auth_pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], src_layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"], src_layouts_auth_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_11__["AuthFormComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_layouts_auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "5TcF":
/*!***************************************************************!*\
  !*** ./src/layouts/auth/pages/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_layouts_auth_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/layouts/auth/components/auth-form/auth-form.component */ "i0Sj");



class RegisterComponent {
    constructor() {
        this.formData = {
            title: 'Sign Up',
            oppositeFormName: 'Sign In',
            oppositeFormLink: '/login',
            submitButtonLink: '/user'
        };
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["register-form"]], decls: 1, vars: 1, consts: [[3, "data"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "auth-form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.formData);
    } }, directives: [src_layouts_auth_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_1__["AuthFormComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'register-form',
                template: '<auth-form [data]="formData"></auth-form>',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Jmzi":
/*!**********************************************************************!*\
  !*** ./src/layouts/user/pages/settings-page/settings-page.module.ts ***!
  \**********************************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_layouts_user_pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/layouts/user/pages/settings-page/settings-page.component */ "L27f");




class SettingsPageModule {
}
SettingsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SettingsPageModule });
SettingsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SettingsPageModule_Factory(t) { return new (t || SettingsPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsPageModule, { declarations: [src_layouts_user_pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_2__["SettingsPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [src_layouts_user_pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_2__["SettingsPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [src_layouts_user_pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_2__["SettingsPageComponent"]],
                exports: [
                    src_layouts_user_pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_2__["SettingsPageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "KZX/":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/components/header/header.component */ "rp/s");
/* harmony import */ var src_shared_components_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/components/svg-icon/svg-icon.component */ "3g2r");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [src_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], src_shared_components_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_2__["SvgIconComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]], exports: [src_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], src_shared_components_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_2__["SvgIconComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [src_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], src_shared_components_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_2__["SvgIconComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                exports: [
                    src_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], src_shared_components_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_2__["SvgIconComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "L27f":
/*!*************************************************************************!*\
  !*** ./src/layouts/user/pages/settings-page/settings-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: SettingsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageComponent", function() { return SettingsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SettingsPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsPageComponent.ɵfac = function SettingsPageComponent_Factory(t) { return new (t || SettingsPageComponent)(); };
SettingsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsPageComponent, selectors: [["settings-page"]], decls: 10, vars: 0, consts: [[1, "wrapper"], [1, "page"], [1, "title"], [1, "main"], [1, "left-block"], [1, "right-block"]], template: function SettingsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right-block[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .left-block[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right-block[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .left-block[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #ffffff;\n}\n\n.wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\n  grid-template-rows: 3.75em auto;\n}\n\n.wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 100%;\n  font-family: \"Arial\";\n  font-size: 1.25em;\n  font-weight: 300;\n}\n\n.wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 3.5em;\n}\n\n.wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  grid-template-columns: 7fr 5fr;\n  grid-column-gap: 3.5em;\n}\n\n.wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .left-block[_ngcontent-%COMP%] {\n  background-color: #eee;\n}\n\n.wrapper[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right-block[_ngcontent-%COMP%] {\n  background-color: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvdGVtcGxhdGVzLnNjc3MiLCJzcmMvbGF5b3V0cy91c2VyL3BhZ2VzL3NldHRpbmdzLXBhZ2Uvc2V0dGluZ3MtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBRUUsMkJBQUE7QUNERjs7QURJQTtFQUVFLHVCQUFBO0FDRkY7O0FEcUJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNsQkY7O0FBZEE7RUFDRSxZQUFBO0VBQ0EseUJDV3lCO0FETTNCOztBQWZFO0VBRUUsK0JBQUE7QUFnQko7O0FBZEk7RUFFRSxZQUFBO0VBRUUsb0JDSVk7RURIWixpQkFBQTtFQUNBLGdCQUFBO0FBY1I7O0FBWE07RUFDRSxrQkNFVztBRFduQjs7QUFUSTtFQUVFLDhCQUFBO0VBQ0Esc0JDTGE7QURlbkI7O0FBUk07RUFFRSxzQkFBQTtBQVNSOztBQU5NO0VBRUUsc0JBQUE7QUFPUiIsImZpbGUiOiJzcmMvbGF5b3V0cy91c2VyL3BhZ2VzL3NldHRpbmdzLXBhZ2Uvc2V0dGluZ3MtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRmxleGJveFxuJWQtZmxleC1hbGlnbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4lZC1mbGV4LXN0YXJ0IHtcbiAgQGV4dGVuZCAlZC1mbGV4LWFsaWduLWNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4lZC1mbGV4LWNlbnRlciB7XG4gIEBleHRlbmQgJWQtZmxleC1hbGlnbi1jZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4lZC1mbGV4LWJldHdlZW4ge1xuICBAZXh0ZW5kICVkLWZsZXgtYWxpZ24tY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiVkLWZsZXgtY29sdW1uLWJldHdlZW4ge1xuICBAZXh0ZW5kICVkLWZsZXgtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuJWQtZmxleC1jb2x1bW4tY2VudGVyIHtcbiAgQGV4dGVuZCAlZC1mbGV4LWNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLy9Hcmlkc1xuJWQtZ3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLy9TaGFkb3dzXG4lc2hhZG93LW1hdGVyaWFsIHtcbiAgYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDAgMXB4IDJweCAwLCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDAgMXB4IDNweCAxcHg7XG59XG4iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy90aGVtZVwiO1xuXG4ud3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNldHRpbmctYmFja2dyb3VuZC1jb2xvcjtcblxuICAucGFnZSB7XG4gICAgQGV4dGVuZCAlZC1ncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcHgyZW0oNjApIGF1dG87XG5cbiAgICAudGl0bGUge1xuICAgICAgQGV4dGVuZCAlZC1mbGV4LXN0YXJ0O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZm9udDoge1xuICAgICAgICBmYW1pbHk6ICRiYXNlLXJlZ3VsYXItZm9udDtcbiAgICAgICAgc2l6ZTogcHgyZW0oMjApO1xuICAgICAgICB3ZWlnaHQ6IDMwMDtcbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbGctc2NyZWVuLWd1dHRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWFpbiB7XG4gICAgICBAZXh0ZW5kICVkLWdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDdmciA1ZnI7XG4gICAgICBncmlkLWNvbHVtbi1nYXA6ICRsZy1zY3JlZW4tZ3V0dGVyO1xuXG4gICAgICAubGVmdC1ibG9jayB7XG4gICAgICAgIEBleHRlbmQgJWQtZmxleC1jZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7IC8vdG9kbzogUkVNT1ZFIFRFTVBPUkFSWSEhIVxuICAgICAgfVxuXG4gICAgICAucmlnaHQtYmxvY2sge1xuICAgICAgICBAZXh0ZW5kICVkLWZsZXgtY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlOyAvL3RvZG86IFJFTU9WRSBURU1QT1JBUlkhISFcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIiwiQGltcG9ydCBcInNyYy9zdHlsZXMvZnVuY3Rpb25zXCI7XG5AaW1wb3J0IFwic3JjL3N0eWxlcy90ZW1wbGF0ZXNcIjtcblxuXG4vL0F1dGggbGF5b3V0XG4kYXV0aC1sYXlvdXQtYmFja2dyb3VuZDogI2VlZWVlZTtcbiRhdXRoLWZvcm0tYmFja2dyb3VuZDogI2ZmZmZmZjtcblxuLy9IZWFkZXIgQ29sb3JzXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cbi8vRm9vdGVyIENvbG9yc1xuJGZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXG4kbGF5b3V0LWJhY2tncm91bmQtY29sb3I6ICNmN2Y1Zjk7XG4kc2V0dGluZy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXG4vL0ZvbnRzXG4kYmFzZS1yZWd1bGFyLWZvbnQ6ICdBcmlhbCc7XG4kYmFzZS1saW5rLWNvbG9yOiAjODc4Nzg3O1xuXG4vL0d1dHRlcnNcbiRsZy1zY3JlZW4tZ3V0dGVyOiBweDJlbSg1Nik7IC8vIGZyb20gMTkyMHB4XG4kbWQtc2NyZWVuLWd1dHRlcjogcHgyZW0oNTYpOyAvLyBmcm9tIDEyODBweCB0byAxOTE5cHhcbiRzbS1zY3JlZW4tZ3V0dGVyOiBweDJlbSg1Nik7IC8vIGZyb20gNzYwcHggdG8gMTIxOXB4XG4keHMtc2NyZWVuLWd1dHRlcjogcHgyZW0oMjQpOyAvLyBmcm9tIDBweCB0byA3NTlweFxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'settings-page',
                templateUrl: './settings-page.component.html',
                styleUrls: ['./settings-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: '<router-outlet></router-outlet>',
            }]
    }], null, null); })();


/***/ }),

/***/ "WnFd":
/*!*************************************************!*\
  !*** ./src/layouts/user/user-routing.module.ts ***!
  \*************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_layouts_user_pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/layouts/user/pages/settings-page/settings-page.component */ "L27f");
/* harmony import */ var src_layouts_user_user_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/layouts/user/user-layout.component */ "jcAY");






const routes = [
    {
        path: '',
        component: src_layouts_user_user_layout_component__WEBPACK_IMPORTED_MODULE_3__["UserLayoutComponent"],
        children: [
            {
                path: 'settings',
                component: src_layouts_user_pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_2__["SettingsPageComponent"],
            },
        ],
    }
];
class UserRoutingModule {
}
UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-routing.module */ "vY5A");
/* harmony import */ var src_layouts_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/layouts/auth/auth.module */ "4/Ee");
/* harmony import */ var src_layouts_user_user_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/layouts/user/user.module */ "/lia");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            src_layouts_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"],
            src_layouts_user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        src_layouts_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"],
        src_layouts_user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    src_layouts_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"],
                    src_layouts_user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ],
                bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "i0Sj":
/*!**********************************************************************!*\
  !*** ./src/layouts/auth/components/auth-form/auth-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: AuthFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFormComponent", function() { return AuthFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function AuthFormComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage("email"));
} }
class AuthFormComponent {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.hide = true;
    }
    set data(value) {
        this._data = value;
    }
    get data() {
        return this._data;
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigateByUrl(this.data.submitButtonLink);
        });
    }
    getErrorMessage(controlName) {
        if (this.form.get(controlName).hasError('required')) {
            return 'You must enter a value';
        }
        return this.form.get(controlName).hasError(controlName) ? `Not a valid ${controlName}` : '';
    }
}
AuthFormComponent.ɵfac = function AuthFormComponent_Factory(t) { return new (t || AuthFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthFormComponent, selectors: [["auth-form"]], inputs: { data: "data" }, decls: 24, vars: 10, consts: [[1, "login-form-wrapper"], [3, "formGroup", "ngSubmit"], [1, "inputs-wrapper"], ["matInput", "", "placeholder", "pat@example.com", "formControlName", "email", "required", ""], [4, "ngIf"], ["matInput", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-stroked-button", "", "color", "primary"], [1, "register-link-block"], [3, "routerLink"]], template: function AuthFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AuthFormComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Enter your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AuthFormComponent_mat_error_9_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Enter your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthFormComponent_Template_i_click_14_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("email").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.data.oppositeFormLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.oppositeFormName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: [".login-form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%], .login-form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], .login-form-wrapper[_ngcontent-%COMP%]   .register-link-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.login-form-wrapper[_ngcontent-%COMP%]   .register-link-block[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.login-form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%], .login-form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.login-form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%], .login-form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.login-form-wrapper[_ngcontent-%COMP%]   .register-link-block[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.login-form-wrapper[_ngcontent-%COMP%] {\n  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 1px 3px 1px;\n}\n\n.login-form-wrapper[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 0.625em;\n}\n\n.login-form-wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 1.25em;\n}\n\n.login-form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 0 2.5em;\n}\n\n.login-form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%] {\n  min-height: 9.375em;\n}\n\n.login-form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  min-width: 18.75em;\n}\n\n.login-form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.login-form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 1.875em 0;\n}\n\n.login-form-wrapper[_ngcontent-%COMP%]   .register-link-block[_ngcontent-%COMP%] {\n  padding-bottom: 0.625em;\n  font-size: 1em;\n}\n\n.login-form-wrapper[_ngcontent-%COMP%]   .register-link-block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.625em;\n  color: #878787;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.login-form-wrapper[_ngcontent-%COMP%]   .register-link-block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #545454;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvdGVtcGxhdGVzLnNjc3MiLCJzcmMvbGF5b3V0cy9hdXRoL2NvbXBvbmVudHMvYXV0aC1mb3JtL2F1dGgtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0FGOztBRFFBO0VBRUUsdUJBQUE7QUNORjs7QURTQTtFQUVFLDhCQUFBO0FDUEY7O0FEVUE7RUFFRSxzQkFBQTtBQ1JGOztBRFdBO0VBRUUsc0JBQUE7QUNURjs7QURtQkE7RUFDRSxtRkFBQTtBQ2hCRjs7QUFyQkE7RUFDRSx5QkNHcUI7RURGckIsc0JBQUE7QUF3QkY7O0FBckJFO0VBQ0UsZUFBQTtBQXVCSjs7QUFwQkU7RUFFRSxnQkFBQTtBQXFCSjs7QUFuQkk7RUFFRSxtQkFBQTtBQW9CTjs7QUFsQk07RUFDRSxrQkFBQTtBQW9CUjs7QUFsQlE7RUFDRSxlQUFBO0FBb0JWOztBQWZJO0VBQ0UsaUJBQUE7QUFpQk47O0FBYkU7RUFFRSx1QkFBQTtFQUVFLGNBQUE7QUFhTjs7QUFWSTtFQUNFLGdCQUFBO0VBQ0EsY0N2Qlk7RUR3QlosMEJBQUE7RUFDQSxlQUFBO0FBWU47O0FBVk07RUFDRSxjQUFBO0FBWVIiLCJmaWxlIjoic3JjL2xheW91dHMvYXV0aC9jb21wb25lbnRzL2F1dGgtZm9ybS9hdXRoLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0ZsZXhib3hcbiVkLWZsZXgtYWxpZ24tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuJWQtZmxleC1zdGFydCB7XG4gIEBleHRlbmQgJWQtZmxleC1hbGlnbi1jZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuJWQtZmxleC1jZW50ZXIge1xuICBAZXh0ZW5kICVkLWZsZXgtYWxpZ24tY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuJWQtZmxleC1iZXR3ZWVuIHtcbiAgQGV4dGVuZCAlZC1mbGV4LWFsaWduLWNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4lZC1mbGV4LWNvbHVtbi1iZXR3ZWVuIHtcbiAgQGV4dGVuZCAlZC1mbGV4LWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiVkLWZsZXgtY29sdW1uLWNlbnRlciB7XG4gIEBleHRlbmQgJWQtZmxleC1jZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8vR3JpZHNcbiVkLWdyaWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi8vU2hhZG93c1xuJXNoYWRvdy1tYXRlcmlhbCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwIDFweCAycHggMCwgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwIDFweCAzcHggMXB4O1xufVxuIiwiQGltcG9ydCBcInNyYy9zdHlsZXMvdGhlbWVcIjtcblxuLmxvZ2luLWZvcm0td3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRhdXRoLWZvcm0tYmFja2dyb3VuZDtcbiAgYm9yZGVyLXJhZGl1czogcHgyZW0oMTApO1xuICBAZXh0ZW5kICVzaGFkb3ctbWF0ZXJpYWw7XG5cbiAgaDMge1xuICAgIHBhZGRpbmc6IHB4MmVtKDIwKTtcbiAgfVxuXG4gIGZvcm0ge1xuICAgIEBleHRlbmQgJWQtZmxleC1jb2x1bW4tYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIHB4MmVtKDQwKTtcblxuICAgIC5pbnB1dHMtd3JhcHBlciB7XG4gICAgICBAZXh0ZW5kICVkLWZsZXgtY29sdW1uLWJldHdlZW47XG4gICAgICBtaW4taGVpZ2h0OiBweDJlbSgxNTApO1xuXG4gICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIG1pbi13aWR0aDogcHgyZW0oMzAwKTtcblxuICAgICAgICBpIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luOiBweDJlbSgzMCkgMDtcbiAgICB9XG4gIH1cblxuICAucmVnaXN0ZXItbGluay1ibG9jayB7XG4gICAgQGV4dGVuZCAlZC1mbGV4LWNvbHVtbi1jZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IHB4MmVtKDEwKTtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBweDJlbSgxNik7XG4gICAgfTtcblxuICAgIHNwYW4ge1xuICAgICAgcGFkZGluZzogcHgyZW0oMTApO1xuICAgICAgY29sb3I6ICRiYXNlLWxpbmstY29sb3I7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4oJGJhc2UtbGluay1jb2xvciwgMjAlKTtcblxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy9mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJzcmMvc3R5bGVzL3RlbXBsYXRlc1wiO1xuXG5cbi8vQXV0aCBsYXlvdXRcbiRhdXRoLWxheW91dC1iYWNrZ3JvdW5kOiAjZWVlZWVlO1xuJGF1dGgtZm9ybS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuXG4vL0hlYWRlciBDb2xvcnNcbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuLy9Gb290ZXIgQ29sb3JzXG4kZm9vdGVyLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cbiRsYXlvdXQtYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjVmOTtcbiRzZXR0aW5nLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cbi8vRm9udHNcbiRiYXNlLXJlZ3VsYXItZm9udDogJ0FyaWFsJztcbiRiYXNlLWxpbmstY29sb3I6ICM4Nzg3ODc7XG5cbi8vR3V0dGVyc1xuJGxnLXNjcmVlbi1ndXR0ZXI6IHB4MmVtKDU2KTsgLy8gZnJvbSAxOTIwcHhcbiRtZC1zY3JlZW4tZ3V0dGVyOiBweDJlbSg1Nik7IC8vIGZyb20gMTI4MHB4IHRvIDE5MTlweFxuJHNtLXNjcmVlbi1ndXR0ZXI6IHB4MmVtKDU2KTsgLy8gZnJvbSA3NjBweCB0byAxMjE5cHhcbiR4cy1zY3JlZW4tZ3V0dGVyOiBweDJlbSgyNCk7IC8vIGZyb20gMHB4IHRvIDc1OXB4XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'auth-form',
                templateUrl: './auth-form.component.html',
                styleUrls: ['./auth-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "iXJi":
/*!*************************************************!*\
  !*** ./src/layouts/auth/auth-routing.module.ts ***!
  \*************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_layouts_auth_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/layouts/auth/pages/login/login.component */ "vpgl");
/* harmony import */ var src_layouts_auth_pages_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/layouts/auth/pages/register/register.component */ "5TcF");
/* harmony import */ var src_layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/layouts/auth/auth-layout.component */ "2BPS");







const routes = [
    {
        path: '',
        component: src_layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"],
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: src_layouts_auth_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
            },
            {
                path: 'register',
                component: src_layouts_auth_pages_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
            },
        ],
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jcAY":
/*!***************************************************!*\
  !*** ./src/layouts/user/user-layout.component.ts ***!
  \***************************************************/
/*! exports provided: UserLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLayoutComponent", function() { return UserLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/components/header/header.component */ "rp/s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class UserLayoutComponent {
    constructor() {
        this.title = 'Angular Best Practices';
    }
    ngOnInit() {
    }
}
UserLayoutComponent.ɵfac = function UserLayoutComponent_Factory(t) { return new (t || UserLayoutComponent)(); };
UserLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserLayoutComponent, selectors: [["user-layout"]], decls: 7, vars: 1, consts: [[1, "grid-container"], [3, "title"], [1, "main"]], template: function UserLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "shared-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title);
    } }, directives: [src_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".grid-container[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.grid-container[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  grid-gap: 0.625em;\n  grid-template-rows: 3.75em auto 2.5em;\n  background-color: #f7f5f9;\n}\n\n.grid-container[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n\n.grid-container[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 3.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvdGVtcGxhdGVzLnNjc3MiLCJzcmMvbGF5b3V0cy91c2VyL3VzZXItbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFFRSwyQkFBQTtBQ0RGOztBQU5FO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJDUXNCO0FEQzFCOztBQVBJO0VBRUUseUJDRW9CO0FETTFCOztBQU5NO0VBQ0Usa0JDU1c7QUREbkIiLCJmaWxlIjoic3JjL2xheW91dHMvdXNlci91c2VyLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRmxleGJveFxuJWQtZmxleC1hbGlnbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4lZC1mbGV4LXN0YXJ0IHtcbiAgQGV4dGVuZCAlZC1mbGV4LWFsaWduLWNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4lZC1mbGV4LWNlbnRlciB7XG4gIEBleHRlbmQgJWQtZmxleC1hbGlnbi1jZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4lZC1mbGV4LWJldHdlZW4ge1xuICBAZXh0ZW5kICVkLWZsZXgtYWxpZ24tY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiVkLWZsZXgtY29sdW1uLWJldHdlZW4ge1xuICBAZXh0ZW5kICVkLWZsZXgtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuJWQtZmxleC1jb2x1bW4tY2VudGVyIHtcbiAgQGV4dGVuZCAlZC1mbGV4LWNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLy9Hcmlkc1xuJWQtZ3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLy9TaGFkb3dzXG4lc2hhZG93LW1hdGVyaWFsIHtcbiAgYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDAgMXB4IDJweCAwLCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDAgMXB4IDNweCAxcHg7XG59XG4iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy90aGVtZVwiO1xuICAuZ3JpZC1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiBweDJlbSgxMCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBweDJlbSg2MCkgYXV0byBweDJlbSg0MCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxheW91dC1iYWNrZ3JvdW5kLWNvbG9yO1xuXG4gICAgZm9vdGVyIHtcbiAgICAgIEBleHRlbmQgJWQtZmxleC1zdGFydDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmb290ZXItYmFja2dyb3VuZC1jb2xvcjtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbGctc2NyZWVuLWd1dHRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzL2Z1bmN0aW9uc1wiO1xuQGltcG9ydCBcInNyYy9zdHlsZXMvdGVtcGxhdGVzXCI7XG5cblxuLy9BdXRoIGxheW91dFxuJGF1dGgtbGF5b3V0LWJhY2tncm91bmQ6ICNlZWVlZWU7XG4kYXV0aC1mb3JtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG5cbi8vSGVhZGVyIENvbG9yc1xuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXG4vL0Zvb3RlciBDb2xvcnNcbiRmb290ZXItYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuJGxheW91dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZjdmNWY5O1xuJHNldHRpbmctYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuLy9Gb250c1xuJGJhc2UtcmVndWxhci1mb250OiAnQXJpYWwnO1xuJGJhc2UtbGluay1jb2xvcjogIzg3ODc4NztcblxuLy9HdXR0ZXJzXG4kbGctc2NyZWVuLWd1dHRlcjogcHgyZW0oNTYpOyAvLyBmcm9tIDE5MjBweFxuJG1kLXNjcmVlbi1ndXR0ZXI6IHB4MmVtKDU2KTsgLy8gZnJvbSAxMjgwcHggdG8gMTkxOXB4XG4kc20tc2NyZWVuLWd1dHRlcjogcHgyZW0oNTYpOyAvLyBmcm9tIDc2MHB4IHRvIDEyMTlweFxuJHhzLXNjcmVlbi1ndXR0ZXI6IHB4MmVtKDI0KTsgLy8gZnJvbSAwcHggdG8gNzU5cHhcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'user-layout',
                templateUrl: './user-layout.component.html',
                styleUrls: ['./user-layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rp/s":
/*!**********************************************************!*\
  !*** ./src/shared/components/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_shared_components_svg_icon_icons_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/components/svg-icon/icons-list */ "0Ho1");
/* harmony import */ var src_shared_components_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/components/svg-icon/svg-icon.component */ "3g2r");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HeaderComponent_svg_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "svg-icon", 6);
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", icon_r1);
} }
class HeaderComponent {
    constructor() {
        this._logo = src_shared_components_svg_icon_icons_list__WEBPACK_IMPORTED_MODULE_1__["ICONS"].ANGULAR;
        this._rightIcons = [
            src_shared_components_svg_icon_icons_list__WEBPACK_IMPORTED_MODULE_1__["ICONS"].SEARCH,
            src_shared_components_svg_icon_icons_list__WEBPACK_IMPORTED_MODULE_1__["ICONS"].CURSOR,
            src_shared_components_svg_icon_icons_list__WEBPACK_IMPORTED_MODULE_1__["ICONS"].BELL,
            src_shared_components_svg_icon_icons_list__WEBPACK_IMPORTED_MODULE_1__["ICONS"].LIST,
        ];
    }
    get logoIcon() {
        return this._logo;
    }
    get rightIcons() {
        return this._rightIcons;
    }
    set title(value) {
        this._title = value;
    }
    get title() {
        return this._title;
    }
    ngOnInit() {
    }
    iconByName(index, name) {
        return name;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["shared-header"]], inputs: { title: "title" }, decls: 7, vars: 4, consts: [[1, "wrapper"], [1, "left-block"], ["width", "40", "height", "40", 3, "name"], [1, "title"], [1, "right-block"], ["width", "20", "height", "20", 3, "name", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["width", "20", "height", "20", 3, "name"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "svg-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_svg_icon_6_Template, 1, 1, "svg-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.logoIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rightIcons)("ngForTrackBy", ctx.iconByName);
    } }, directives: [src_shared_components_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_2__["SvgIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".wrapper[_ngcontent-%COMP%]   .right-block[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .left-block[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.wrapper[_ngcontent-%COMP%]   .right-block[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .left-block[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #ffffff;\n}\n\n.wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"Arial\";\n  font-size: 1.25em;\n}\n\n.wrapper[_ngcontent-%COMP%]   .left-block[_ngcontent-%COMP%] {\n  margin-left: 3.5em;\n}\n\n.wrapper[_ngcontent-%COMP%]   .left-block[_ngcontent-%COMP%]   svg-icon[_ngcontent-%COMP%] {\n  margin-right: 0.625em;\n}\n\n.wrapper[_ngcontent-%COMP%]   .right-block[_ngcontent-%COMP%] {\n  width: auto;\n  margin-right: 3.5em;\n}\n\n.wrapper[_ngcontent-%COMP%]   .right-block[_ngcontent-%COMP%]   svg-icon[_ngcontent-%COMP%] {\n  margin-right: 1.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvdGVtcGxhdGVzLnNjc3MiLCJzcmMvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0FGOztBRGFBO0VBRUUsOEJBQUE7QUNYRjs7QUFMQTtFQUNFLFlBQUE7RUFDQSx5QkNLd0I7QURHMUI7O0FBTEU7RUFFSSxvQkNTYztFRFJkLGlCQUFBO0FBTU47O0FBRkU7RUFFRSxrQkNNZTtBREhuQjs7QUFESTtFQUNFLHFCQUFBO0FBR047O0FBQ0U7RUFFRSxXQUFBO0VBQ0EsbUJDSmU7QURJbkI7O0FBRUk7RUFDRSxvQkFBQTtBQUFOIiwiZmlsZSI6InNyYy9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9GbGV4Ym94XG4lZC1mbGV4LWFsaWduLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiVkLWZsZXgtc3RhcnQge1xuICBAZXh0ZW5kICVkLWZsZXgtYWxpZ24tY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbiVkLWZsZXgtY2VudGVyIHtcbiAgQGV4dGVuZCAlZC1mbGV4LWFsaWduLWNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiVkLWZsZXgtYmV0d2VlbiB7XG4gIEBleHRlbmQgJWQtZmxleC1hbGlnbi1jZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuJWQtZmxleC1jb2x1bW4tYmV0d2VlbiB7XG4gIEBleHRlbmQgJWQtZmxleC1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4lZC1mbGV4LWNvbHVtbi1jZW50ZXIge1xuICBAZXh0ZW5kICVkLWZsZXgtY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vL0dyaWRzXG4lZC1ncmlkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4vL1NoYWRvd3NcbiVzaGFkb3ctbWF0ZXJpYWwge1xuICBib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMCAxcHggMnB4IDAsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMCAxcHggM3B4IDFweDtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzL3RoZW1lXCI7XG5cbi53cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyLWJhY2tncm91bmQtY29sb3I7XG4gIEBleHRlbmQgJWQtZmxleC1iZXR3ZWVuO1xuXG4gIC50aXRsZSAge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogJGJhc2UtcmVndWxhci1mb250O1xuICAgICAgc2l6ZTogcHgyZW0oMjApO1xuICAgIH07XG4gIH1cblxuICAubGVmdC1ibG9jayB7XG4gICAgQGV4dGVuZCAlZC1mbGV4LWJldHdlZW47XG4gICAgbWFyZ2luLWxlZnQ6ICRsZy1zY3JlZW4tZ3V0dGVyO1xuXG4gICAgc3ZnLWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBweDJlbSgxMCk7XG4gICAgfVxuICB9XG5cbiAgLnJpZ2h0LWJsb2NrIHtcbiAgICBAZXh0ZW5kICVkLWZsZXgtYmV0d2VlbjtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6ICRsZy1zY3JlZW4tZ3V0dGVyO1xuXG4gICAgc3ZnLWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBweDJlbSgyMCk7XG4gICAgfVxuXG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzL2Z1bmN0aW9uc1wiO1xuQGltcG9ydCBcInNyYy9zdHlsZXMvdGVtcGxhdGVzXCI7XG5cblxuLy9BdXRoIGxheW91dFxuJGF1dGgtbGF5b3V0LWJhY2tncm91bmQ6ICNlZWVlZWU7XG4kYXV0aC1mb3JtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG5cbi8vSGVhZGVyIENvbG9yc1xuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXG4vL0Zvb3RlciBDb2xvcnNcbiRmb290ZXItYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuJGxheW91dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZjdmNWY5O1xuJHNldHRpbmctYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuLy9Gb250c1xuJGJhc2UtcmVndWxhci1mb250OiAnQXJpYWwnO1xuJGJhc2UtbGluay1jb2xvcjogIzg3ODc4NztcblxuLy9HdXR0ZXJzXG4kbGctc2NyZWVuLWd1dHRlcjogcHgyZW0oNTYpOyAvLyBmcm9tIDE5MjBweFxuJG1kLXNjcmVlbi1ndXR0ZXI6IHB4MmVtKDU2KTsgLy8gZnJvbSAxMjgwcHggdG8gMTkxOXB4XG4kc20tc2NyZWVuLWd1dHRlcjogcHgyZW0oNTYpOyAvLyBmcm9tIDc2MHB4IHRvIDEyMTlweFxuJHhzLXNjcmVlbi1ndXR0ZXI6IHB4MmVtKDI0KTsgLy8gZnJvbSAwcHggdG8gNzU5cHhcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'shared-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/layouts/auth/auth.module */ "4/Ee")).then(m => m.AuthModule)
    },
    {
        path: 'user',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/layouts/user/user.module */ "/lia")).then(m => m.UserModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vpgl":
/*!*********************************************************!*\
  !*** ./src/layouts/auth/pages/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_layouts_auth_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/layouts/auth/components/auth-form/auth-form.component */ "i0Sj");



class LoginComponent {
    constructor() {
        this.formData = {
            title: 'Sign In',
            oppositeFormName: 'Sign Up',
            oppositeFormLink: '/register',
            submitButtonLink: '/user'
        };
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login-form"]], decls: 1, vars: 1, consts: [[3, "data"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "auth-form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.formData);
    } }, directives: [src_layouts_auth_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_1__["AuthFormComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'login-form',
                template: '<auth-form [data]="formData"></auth-form>',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map