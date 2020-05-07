(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");









var routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    },
    {
        path: 'services',
        component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"]
    },
    {
        path: 'team',
        component: _components_team_team_component__WEBPACK_IMPORTED_MODULE_5__["TeamComponent"]
    },
    {
        path: 'kisan',
        loadChildren: function () { return __webpack_require__.e(/*! import() | modules-auth-auth-module */ "modules-auth-auth-module").then(__webpack_require__.bind(null, /*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts")).then(function (mod) { return mod.AuthModule; }); }
    },
    {
        path: 'dashboard',
        loadChildren: function () { return __webpack_require__.e(/*! import() | modules-dashboard-dashboard-module */ "modules-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./modules/dashboard/dashboard.module */ "./src/app/modules/dashboard/dashboard.module.ts")).then(function (mod) { return mod.DashboardModule; }); }
    },
    {
        path: '**',
        component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _modules_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/core/services/auth.service */ "./src/app/modules/core/services/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_core_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/core/services/storage.service */ "./src/app/modules/core/services/storage.service.ts");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _shared_components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/newsletter/newsletter.component */ "./src/app/shared/components/newsletter/newsletter.component.ts");











function AppComponent_app_newsletter_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-newsletter");
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(authService, translate, storage) {
        this.authService = authService;
        this.translate = translate;
        this.storage = storage;
        this.title = 'Kisan Sewa';
    }
    AppComponent.prototype.ngOnInit = function () {
        var currentLang = this.storage.getCurrentLang();
        if (currentLang) {
            this.translate.setDefaultLang(currentLang);
        }
        else {
            this.translate.setDefaultLang('en');
        }
    };
    AppComponent.prototype.onLanguageChoose = function (lang) {
        this.translate.use(lang);
        this.storage.setCurrentLang(lang);
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_core_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 1, consts: [[1, "my-container"], [4, "ngIf"], [1, "w3-animate-bottom"], [3, "languageEmitter"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_newsletter_6_Template, 1, 0, "app-newsletter", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "footer", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-footer", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("languageEmitter", function AppComponent_Template_app_footer_languageEmitter_8_listener($event) { return ctx.onLanguageChoose($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn);
        } }, directives: [_shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"], _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _shared_components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_9__["NewsletterComponent"]], styles: [".my-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n}\n\n.my-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcUHJvamVjdCBhcHBcXHZlcnNpb24gMihuZXcpL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDSSxPQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5teS1jb250YWluZXIgbWFpbntcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuIiwiLm15LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubXktY29udGFpbmVyIG1haW4ge1xuICBmbGV4OiAxO1xufSJdfQ== */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _modules_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _modules_core_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _shared_components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/components/newsletter/newsletter.component */ "./src/app/shared/components/newsletter/newsletter.component.ts");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _shared_components_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/components/success-dialog/success-dialog.component */ "./src/app/shared/components/success-dialog/success-dialog.component.ts");
/* harmony import */ var _shared_components_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/components/error-dialog/error-dialog.component */ "./src/app/shared/components/error-dialog/error-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _shared_components_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/components/update-password/update-password.component */ "./src/app/shared/components/update-password/update-password.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            {
                provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MAT_SNACK_BAR_DEFAULT_OPTIONS"],
                useValue: {
                    duration: 3000
                }
            }
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                })
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
        _components_services_services_component__WEBPACK_IMPORTED_MODULE_14__["ServicesComponent"],
        _components_team_team_component__WEBPACK_IMPORTED_MODULE_15__["TeamComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
        _shared_components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_17__["NewsletterComponent"],
        _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_18__["LoaderComponent"],
        _shared_components_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_19__["SuccessDialogComponent"],
        _shared_components_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ErrorDialogComponent"],
        _shared_components_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_22__["UpdatePasswordComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                    _components_services_services_component__WEBPACK_IMPORTED_MODULE_14__["ServicesComponent"],
                    _components_team_team_component__WEBPACK_IMPORTED_MODULE_15__["TeamComponent"],
                    _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
                    _shared_components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_17__["NewsletterComponent"],
                    _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_18__["LoaderComponent"],
                    _shared_components_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_19__["SuccessDialogComponent"],
                    _shared_components_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ErrorDialogComponent"],
                    _shared_components_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_22__["UpdatePasswordComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                        }
                    })
                ],
                providers: [
                    {
                        provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MAT_SNACK_BAR_DEFAULT_OPTIONS"],
                        useValue: {
                            duration: 3000
                        }
                    }
                ],
                entryComponents: [
                    _shared_components_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_19__["SuccessDialogComponent"],
                    _shared_components_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ErrorDialogComponent"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();
// required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");



var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 37, vars: 15, consts: [[1, "about-section", "paddingTB60", "gray-bg"], [1, "container"], [1, "row"], [1, "col-md-7", "col-sm-6", "w3-animate-right"], [1, "about-title", "clearfix"], [1, "about-paddingB"], [1, "about-icons"], ["href", "https://www.facebook.com/"], ["id", "social-fb", 1, "fa", "fa-facebook-square", "fa-3x", "social"], ["href", "https://twitter.com/"], ["id", "social-tw", 1, "fa", "fa-twitter-square", "fa-3x", "social"], ["href", "https://plus.google.com/"], ["id", "social-gp", 1, "fa", "fa-google-plus-square", "fa-3x", "social"], ["href", "mailto:utkarshutt2706@gmail.com"], ["id", "social-em", 1, "fa", "fa-envelope-square", "fa-3x", "social"], [1, "col-md-5", "col-sm-6", "w3-animate-left"], [1, "about-img"], ["src", "./assets/images/about.jpg", "alt", "About us", 2, "width", "100%", "height", "auto"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "about.about"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "about.us"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, "about.annapurnas"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, "about.paraFirst"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 13, "about.paraSecond"));
        } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".paddingTB60[_ngcontent-%COMP%] {\n  padding: 60px 0px 60px 0px;\n}\n\n.gray-bg[_ngcontent-%COMP%] {\n  background: #f1f1f1 !important;\n}\n\n.about-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #535353;\n  font-size: 45px;\n  font-weight: 600;\n}\n\n.about-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #af0808;\n  font-size: 45px;\n  font-weight: 700;\n}\n\n.about-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #535353;\n  font-size: 23px;\n  margin-bottom: 24px;\n}\n\n.about-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7a7a7a;\n  line-height: 1.8;\n  margin: 0 0 15px;\n}\n\n.about-paddingB[_ngcontent-%COMP%] {\n  padding-bottom: 12px;\n}\n\n.about-img[_ngcontent-%COMP%] {\n  padding-left: 57px;\n}\n\n\n\n.about-icons[_ngcontent-%COMP%] {\n  margin: 48px 0px 48px 0px;\n}\n\n.about-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 0px;\n  font-size: 35px;\n  color: #323232;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\n}\n\n.about-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0;\n  display: inline-block;\n}\n\n#social-fb[_ngcontent-%COMP%]:hover {\n  color: #3b5998;\n  transition: all 0.001s;\n}\n\n#social-tw[_ngcontent-%COMP%]:hover {\n  color: #4099ff;\n  transition: all 0.001s;\n}\n\n#social-gp[_ngcontent-%COMP%]:hover {\n  color: #d34836;\n  transition: all 0.001s;\n}\n\n#social-em[_ngcontent-%COMP%]:hover {\n  color: #f39c12;\n  transition: all 0.001s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9DOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxQcm9qZWN0IGFwcFxcdmVyc2lvbiAyKG5ldykvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw4QkFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0lGOztBREZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0tGOztBREhBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURKQTtFQUNFLG9CQUFBO0FDT0Y7O0FETEE7RUFDRSxrQkFBQTtBQ1FGOztBRExBLGlCQUFBOztBQUNBO0VBQ0UseUJBQUE7QUNRRjs7QUROQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7QUNTRjs7QURQQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNVRjs7QURSQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtBQ1dGOztBRFRBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0FDWUY7O0FEVkE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7QUNhRjs7QURYQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtBQ2NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkaW5nVEI2MCB7XHJcbiAgcGFkZGluZzogNjBweCAwcHggNjBweCAwcHg7XHJcbn1cclxuLmdyYXktYmcge1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjEgIWltcG9ydGFudDtcclxufVxyXG4uYWJvdXQtdGl0bGUgaDEge1xyXG4gIGNvbG9yOiAjNTM1MzUzO1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5hYm91dC10aXRsZSBzcGFuIHtcclxuICBjb2xvcjogI2FmMDgwODtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uYWJvdXQtdGl0bGUgaDMge1xyXG4gIGNvbG9yOiAjNTM1MzUzO1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcbi5hYm91dC10aXRsZSBwIHtcclxuICBjb2xvcjogIzdhN2E3YTtcclxuICBsaW5lLWhlaWdodDogMS44O1xyXG4gIG1hcmdpbjogMCAwIDE1cHg7XHJcbn1cclxuLmFib3V0LXBhZGRpbmdCIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxufVxyXG4uYWJvdXQtaW1nIHtcclxuICBwYWRkaW5nLWxlZnQ6IDU3cHg7XHJcbn1cclxuXHJcbi8qIFNvY2lhbCBJY29ucyAqL1xyXG4uYWJvdXQtaWNvbnMge1xyXG4gIG1hcmdpbjogNDhweCAwcHggNDhweCAwcHg7XHJcbn1cclxuLmFib3V0LWljb25zIGkge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGNvbG9yOiAjMzIzMjMyO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbi5hYm91dC1pY29ucyBsaSB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuI3NvY2lhbC1mYjpob3ZlciB7XHJcbiAgY29sb3I6ICMzYjU5OTg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMDAxcztcclxufVxyXG4jc29jaWFsLXR3OmhvdmVyIHtcclxuICBjb2xvcjogIzQwOTlmZjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4wMDFzO1xyXG59XHJcbiNzb2NpYWwtZ3A6aG92ZXIge1xyXG4gIGNvbG9yOiAjZDM0ODM2O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjAwMXM7XHJcbn1cclxuI3NvY2lhbC1lbTpob3ZlciB7XHJcbiAgY29sb3I6ICNmMzljMTI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMDAxcztcclxufVxyXG4iLCIucGFkZGluZ1RCNjAge1xuICBwYWRkaW5nOiA2MHB4IDBweCA2MHB4IDBweDtcbn1cblxuLmdyYXktYmcge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxICFpbXBvcnRhbnQ7XG59XG5cbi5hYm91dC10aXRsZSBoMSB7XG4gIGNvbG9yOiAjNTM1MzUzO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hYm91dC10aXRsZSBzcGFuIHtcbiAgY29sb3I6ICNhZjA4MDg7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFib3V0LXRpdGxlIGgzIHtcbiAgY29sb3I6ICM1MzUzNTM7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmFib3V0LXRpdGxlIHAge1xuICBjb2xvcjogIzdhN2E3YTtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbiAgbWFyZ2luOiAwIDAgMTVweDtcbn1cblxuLmFib3V0LXBhZGRpbmdCIHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5hYm91dC1pbWcge1xuICBwYWRkaW5nLWxlZnQ6IDU3cHg7XG59XG5cbi8qIFNvY2lhbCBJY29ucyAqL1xuLmFib3V0LWljb25zIHtcbiAgbWFyZ2luOiA0OHB4IDBweCA0OHB4IDBweDtcbn1cblxuLmFib3V0LWljb25zIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzMyMzIzMjtcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5hYm91dC1pY29ucyBsaSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNzb2NpYWwtZmI6aG92ZXIge1xuICBjb2xvcjogIzNiNTk5ODtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMDAxcztcbn1cblxuI3NvY2lhbC10dzpob3ZlciB7XG4gIGNvbG9yOiAjNDA5OWZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4wMDFzO1xufVxuXG4jc29jaWFsLWdwOmhvdmVyIHtcbiAgY29sb3I6ICNkMzQ4MzY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjAwMXM7XG59XG5cbiNzb2NpYWwtZW06aG92ZXIge1xuICBjb2xvcjogI2YzOWMxMjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMDAxcztcbn0iXX0= */"] });
    return AboutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");




var _c0 = function () { return ["/kisan/login"]; };
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 64, vars: 29, consts: [[1, "container", "w3-animate-zoom", 2, "width", "100%"], [1, "row"], ["id", "carousel-example-generic", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carousel-example-generic", "data-slide-to", "0", 1, "active"], ["data-target", "#carousel-example-generic", "data-slide-to", "1"], ["data-target", "#carousel-example-generic", "data-slide-to", "2"], ["data-target", "#carousel-example-generic", "data-slide-to", "3"], [1, "carousel-inner"], [1, "item", "active"], ["src", "./assets/images/farmer3.jpg", "alt", "First slide"], [1, "header-text", "hidden-xs"], [1, "col-md-12", "text-center"], [1, ""], [1, "btn", "btn-theme", "btn-sm", "btn-min-block", 3, "routerLink"], [1, "item"], ["src", "./assets/images/farmer1.jpg", "alt", "Second slide"], ["src", "./assets/images/farmer2.jpg", "alt", "Third slide"], ["src", "./assets/images/farmer4.jpg", "alt", "Fourth slide"], ["href", "#carousel-example-generic", "data-slide", "prev", 1, "left", "carousel-control"], [1, "glyphicon", "glyphicon-chevron-left"], ["href", "#carousel-example-generic", "data-slide", "next", 1, "right", "carousel-control"], [1, "glyphicon", "glyphicon-chevron-right"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ol", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Get Started");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "span", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, "home.ourVision"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 13, "home.getStarted"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 15, "home.ourVision"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 17, "home.getStarted"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 19, "home.ourVision"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 21, "home.getStarted"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 23, "home.ourVision"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".row[_ngcontent-%COMP%] {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n\n\n.carousel-indicators[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.carousel-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 600px;\n  max-height: 600px;\n}\n\n.carousel-control[_ngcontent-%COMP%] {\n  width: 0;\n}\n\n.carousel-control.left[_ngcontent-%COMP%], .carousel-control.right[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  background-image: none;\n  background-repeat: no-repeat;\n  text-shadow: none;\n}\n\n.carousel-control.left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.carousel-control.right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n.carousel-control[_ngcontent-%COMP%]   .glyphicon-chevron-left[_ngcontent-%COMP%], .carousel-control[_ngcontent-%COMP%]   .glyphicon-chevron-right[_ngcontent-%COMP%], .carousel-control[_ngcontent-%COMP%]   .icon-prev[_ngcontent-%COMP%], .carousel-control[_ngcontent-%COMP%]   .icon-next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 45%;\n  z-index: 5;\n  display: inline-block;\n}\n\n.carousel-control[_ngcontent-%COMP%]   .glyphicon-chevron-left[_ngcontent-%COMP%], .carousel-control[_ngcontent-%COMP%]   .icon-prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.carousel-control[_ngcontent-%COMP%]   .glyphicon-chevron-right[_ngcontent-%COMP%], .carousel-control[_ngcontent-%COMP%]   .icon-next[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.carousel-control.left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover, .carousel-control.right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n  filter: alpha(opacity=70);\n}\n\n\n\n.header-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  left: 1.8%;\n  right: auto;\n  width: 96.6666666667%;\n  color: #fff;\n}\n\n.header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 10px;\n  color: #fff;\n}\n\n.btn-min-block[_ngcontent-%COMP%] {\n  min-width: 170px;\n  line-height: 26px;\n}\n\n.btn-theme[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: transparent;\n  border-color: #fff;\n  margin-right: 15px;\n  border-radius: 0px;\n}\n\n.btn-theme[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: transparent;\n  border-color: #fff;\n}\n\n@media (max-width: 768px) {\n  .carousel-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    min-height: 450px;\n    max-height: 450px;\n  }\n}\n\n@media (max-width: 576px) {\n  .carousel-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    min-height: 350px;\n    max-height: 350px;\n  }\n}\n\n@media (max-width: 400px) {\n  .carousel-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    min-height: 250px;\n    max-height: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXFByb2plY3QgYXBwXFx2ZXJzaW9uIDIobmV3KS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBLG9CQUFBOztBQUNBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxRQUFBO0FDQ0Y7O0FERUE7O0VBRUUsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTs7OztFQUlFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBOztFQUVFLE9BQUE7QUNDRjs7QURFQTs7RUFFRSxRQUFBO0FDQ0Y7O0FERUE7O0VBRUUsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUEsMkJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUdBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7RUNERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLyogQ2Fyb3VzZWwgU3R5bGVzICovXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIC5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbCB7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLmxlZnQsXHJcbi5jYXJvdXNlbC1jb250cm9sLnJpZ2h0IHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wubGVmdCBzcGFuIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wucmlnaHQgc3BhbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tbGVmdCxcclxuLmNhcm91c2VsLWNvbnRyb2wgLmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0LFxyXG4uY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1wcmV2LFxyXG4uY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1uZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0NSU7XHJcbiAgei1pbmRleDogNTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sIC5nbHlwaGljb24tY2hldnJvbi1sZWZ0LFxyXG4uY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1wcmV2IHtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQsXHJcbi5jYXJvdXNlbC1jb250cm9sIC5pY29uLW5leHQge1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC5sZWZ0IHNwYW46aG92ZXIsXHJcbi5jYXJvdXNlbC1jb250cm9sLnJpZ2h0IHNwYW46aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xyXG59XHJcblxyXG4vKiBDYXJvdXNlbCBIZWFkZXIgU3R5bGVzICovXHJcbi5oZWFkZXItdGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzAlO1xyXG4gIGxlZnQ6IDEuOCU7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDk2LjY2NjY2NjY2NjY2NjY2JTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmhlYWRlci10ZXh0IGgyIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5oZWFkZXItdGV4dCBoMiBzcGFuIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYnRuLW1pbi1ibG9jayB7XHJcbiAgbWluLXdpZHRoOiAxNzBweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuLmJ0bi10aGVtZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi5idG4tdGhlbWU6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNhcm91c2VsLWlubmVyIGltZyB7XHJcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmNhcm91c2VsLWlubmVyIGltZyB7XHJcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLmNhcm91c2VsLWlubmVyIGltZyB7XHJcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxufVxyXG4iLCIucm93IHtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xufVxuXG4uaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi8qIENhcm91c2VsIFN0eWxlcyAqL1xuLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5jYXJvdXNlbC1pbm5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbCB7XG4gIHdpZHRoOiAwO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC5sZWZ0LFxuLmNhcm91c2VsLWNvbnRyb2wucmlnaHQge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLmxlZnQgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC5yaWdodCBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tbGVmdCxcbi5jYXJvdXNlbC1jb250cm9sIC5nbHlwaGljb24tY2hldnJvbi1yaWdodCxcbi5jYXJvdXNlbC1jb250cm9sIC5pY29uLXByZXYsXG4uY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1uZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ1JTtcbiAgei1pbmRleDogNTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tbGVmdCxcbi5jYXJvdXNlbC1jb250cm9sIC5pY29uLXByZXYge1xuICBsZWZ0OiAwO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQsXG4uY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1uZXh0IHtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLmxlZnQgc3Bhbjpob3Zlcixcbi5jYXJvdXNlbC1jb250cm9sLnJpZ2h0IHNwYW46aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT03MCk7XG59XG5cbi8qIENhcm91c2VsIEhlYWRlciBTdHlsZXMgKi9cbi5oZWFkZXItdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDEuOCU7XG4gIHJpZ2h0OiBhdXRvO1xuICB3aWR0aDogOTYuNjY2NjY2NjY2NyU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaGVhZGVyLXRleHQgaDIge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZGVyLXRleHQgaDIgc3BhbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLW1pbi1ibG9jayB7XG4gIG1pbi13aWR0aDogMTcwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4uYnRuLXRoZW1lIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5idG4tdGhlbWU6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJvdXNlbC1pbm5lciBpbWcge1xuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmNhcm91c2VsLWlubmVyIGltZyB7XG4gICAgbWluLWhlaWdodDogMzUwcHg7XG4gICAgbWF4LWhlaWdodDogMzUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuY2Fyb3VzZWwtaW5uZXIgaW1nIHtcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgfVxufSJdfQ== */"] });
    return HomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var _c0 = function () { return ["/"]; };
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 6, vars: 2, consts: [[3, "routerLink"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "URL you enetered was not found");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Click here");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to go back");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return PageNotFoundComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");



var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 86, vars: 42, consts: [[1, "container"], [1, "section-container", "why-ola", "max-width"], [1, "w3-animate-zoom", "services"], [1, "section-heading"], [1, "section-sub-heading"], [1, "item-list-wrapper", "clearfix"], [1, "wd-50", "w3-animate-left"], [1, "indiv-item-list", "event-elem"], [1, "wd-30"], [1, "img-holder"], ["src", "./assets/images/pocket.jpg"], [1, "wd-70"], [1, "heading"], [1, "info"], [1, "clearfix"], ["src", "./assets/images/track.jpg"], ["src", "./assets/images/fertilizers.jpg"], [1, "wd-50", "w3-animate-right"], ["src", "./assets/images/experts.jpg"], ["src", "./assets/images/forecasts.jpg"], ["src", "./assets/images/cashless.jpg"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 14, "services.whyHere"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 16, "services.servicesAvail"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 18, "services.pocketFriendly"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 20, "services.rentEquipments"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 22, "services.trackStatus"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 24, "services.trackItem"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 26, "services.fertAndPests"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 28, "services.purchasePests"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 30, "services.tipsAndTricks"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 32, "services.getImportantInfo"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 34, "services.forecasts"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 36, "services.futureReady"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](80, 38, "services.cashless"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 40, "services.goCashless"), " ");
        } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".services[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.why-ola[_ngcontent-%COMP%] {\n  padding: 30px 0 0 0;\n}\n\n.why-ola[_ngcontent-%COMP%]   .item-list-wrapper[_ngcontent-%COMP%] {\n  padding: 20px 0 0 0;\n  width: 100%;\n}\n\n.why-ola[_ngcontent-%COMP%]   .wd-50[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n}\n\n.why-ola[_ngcontent-%COMP%]   .wd-50[_ngcontent-%COMP%]:first-child {\n  padding-right: 20px;\n}\n\n.why-ola[_ngcontent-%COMP%]   .wd-50[_ngcontent-%COMP%]:nth-child(2) {\n  padding-left: 20px;\n}\n\n.why-ola[_ngcontent-%COMP%]   .indiv-item-list[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  border-radius: 4px;\n  margin-left: -16px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  display: block;\n}\n\n.why-ola[_ngcontent-%COMP%]   .indiv-item-list[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n\n.why-ola[_ngcontent-%COMP%]   .indiv-item-list[_ngcontent-%COMP%]:hover   .heading[_ngcontent-%COMP%] {\n  color: #8ec44a;\n}\n\n.why-ola[_ngcontent-%COMP%]   .indiv-item-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.why-ola[_ngcontent-%COMP%]   .indiv-item-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .heading[_ngcontent-%COMP%] {\n  color: #8ec44a;\n}\n\n.why-ola[_ngcontent-%COMP%]   .indiv-item-list[_ngcontent-%COMP%]   .wd-30[_ngcontent-%COMP%] {\n  width: 30%;\n  float: left;\n}\n\n.why-ola[_ngcontent-%COMP%]   .indiv-item-list[_ngcontent-%COMP%]   .wd-30[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  border-radius: 4px;\n  max-height: 110px;\n}\n\n.why-ola[_ngcontent-%COMP%]   .indiv-item-list[_ngcontent-%COMP%]   .wd-70[_ngcontent-%COMP%] {\n  width: 70%;\n  float: left;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.why-ola[_ngcontent-%COMP%]   .indiv-item-list[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 400;\n  margin-bottom: 5px;\n  color: #000000;\n}\n\n.why-ola[_ngcontent-%COMP%]   .indiv-item-list[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 300;\n  line-height: 24px;\n}\n\n.why-ola[_ngcontent-%COMP%]   .last-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.clearfix[_ngcontent-%COMP%]:before, .clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n}\n\n.clearfix[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n\n@media (max-width: 768px) {\n  .why-ola[_ngcontent-%COMP%] {\n    padding: 5px 0;\n  }\n\n  .why-ola[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n\n  .why-ola[_ngcontent-%COMP%]   .section-sub-heading[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n\n  .why-ola[_ngcontent-%COMP%]   .item-list-wrapper[_ngcontent-%COMP%] {\n    padding: 20px 0 35px 0;\n  }\n\n  .why-ola[_ngcontent-%COMP%]   .wd-50[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .why-ola[_ngcontent-%COMP%]   .wd-50[_ngcontent-%COMP%]:first-child {\n    padding-right: 0;\n  }\n\n  .why-ola[_ngcontent-%COMP%]   .wd-50[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 0;\n  }\n\n  .why-ola[_ngcontent-%COMP%]   .indiv-item-list[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n    padding: 16px 16px;\n    float: left;\n    margin-top: 0px;\n    margin-bottom: 0;\n  }\n\n  .why-ola[_ngcontent-%COMP%]   .indiv-item-list[_ngcontent-%COMP%]   .wd-30[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    display: inline-block;\n    vertical-align: top;\n  }\n\n  .why-ola[_ngcontent-%COMP%]   .indiv-item-list[_ngcontent-%COMP%]   .wd-70[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n\n  .why-ola[_ngcontent-%COMP%]   .indiv-item-list[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .why-ola[_ngcontent-%COMP%]   .indiv-item-list[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 16px;\n  }\n\n  .why-ola[_ngcontent-%COMP%]   .xs-last-item[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9DOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxQcm9qZWN0IGFwcFxcdmVyc2lvbiAyKG5ldykvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlcnZpY2VzXFxzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7O0VBRUUsV0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsY0FBQTtFQ0NGOztFRENBO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQ0VGOztFREFBO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQ0dGOztFRERBO0lBQ0Usc0JBQUE7RUNJRjs7RURGQTtJQUNFLFdBQUE7RUNLRjs7RURIQTtJQUNFLGdCQUFBO0VDTUY7O0VESkE7SUFDRSxlQUFBO0VDT0Y7O0VETEE7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNRRjs7RUROQTtJQUNFLGVBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0VDU0Y7O0VEUEE7SUFDRSxnQkFBQTtFQ1VGOztFRFJBO0lBQ0UsZUFBQTtFQ1dGOztFRFRBO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUNZRjs7RURWQTtJQUNFLGdCQUFBO0VDYUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmljZXMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDJ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi53aHktb2xhIHtcclxuICBwYWRkaW5nOiAzMHB4IDAgMCAwO1xyXG59XHJcblxyXG4ud2h5LW9sYSAuaXRlbS1saXN0LXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53aHktb2xhIC53ZC01MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLndoeS1vbGEgLndkLTUwOmZpcnN0LWNoaWxkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ud2h5LW9sYSAud2QtNTA6bnRoLWNoaWxkKDIpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi53aHktb2xhIC5pbmRpdi1pdGVtLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi53aHktb2xhIC5pbmRpdi1pdGVtLWxpc3Q6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbn1cclxuXHJcbi53aHktb2xhIC5pbmRpdi1pdGVtLWxpc3Q6aG92ZXIgLmhlYWRpbmcge1xyXG4gIGNvbG9yOiAjOGVjNDRhO1xyXG59XHJcblxyXG4ud2h5LW9sYSAuaW5kaXYtaXRlbS1saXN0IGEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLndoeS1vbGEgLmluZGl2LWl0ZW0tbGlzdCBhOmhvdmVyIC5oZWFkaW5nIHtcclxuICBjb2xvcjogIzhlYzQ0YTtcclxufVxyXG5cclxuLndoeS1vbGEgLmluZGl2LWl0ZW0tbGlzdCAud2QtMzAge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi53aHktb2xhIC5pbmRpdi1pdGVtLWxpc3QgLndkLTMwIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXgtaGVpZ2h0OiAxMTBweDtcclxufVxyXG5cclxuLndoeS1vbGEgLmluZGl2LWl0ZW0tbGlzdCAud2QtNzAge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi53aHktb2xhIC5pbmRpdi1pdGVtLWxpc3QgLmhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLndoeS1vbGEgLmluZGl2LWl0ZW0tbGlzdCAuaW5mbyB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuLndoeS1vbGEgLmxhc3QtaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmNsZWFyZml4OmJlZm9yZSxcclxuLmNsZWFyZml4OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4uY2xlYXJmaXg6YWZ0ZXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAud2h5LW9sYSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICB9XHJcbiAgLndoeS1vbGEgLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICAud2h5LW9sYSAuc2VjdGlvbi1zdWItaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICAud2h5LW9sYSAuaXRlbS1saXN0LXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMjBweCAwIDM1cHggMDtcclxuICB9XHJcbiAgLndoeS1vbGEgLndkLTUwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAud2h5LW9sYSAud2QtNTA6Zmlyc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcbiAgLndoeS1vbGEgLndkLTUwOm50aC1jaGlsZCgyKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIC53aHktb2xhIC5pbmRpdi1pdGVtLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDE2cHggMTZweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLndoeS1vbGEgLmluZGl2LWl0ZW0tbGlzdCAud2QtMzAgaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG4gIC53aHktb2xhIC5pbmRpdi1pdGVtLWxpc3QgLndkLTcwIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC53aHktb2xhIC5pbmRpdi1pdGVtLWxpc3QgLmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAud2h5LW9sYSAuaW5kaXYtaXRlbS1saXN0IC5pbmZvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAud2h5LW9sYSAueHMtbGFzdC1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcbiIsIi5zZXJ2aWNlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDIge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLndoeS1vbGEge1xuICBwYWRkaW5nOiAzMHB4IDAgMCAwO1xufVxuXG4ud2h5LW9sYSAuaXRlbS1saXN0LXdyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndoeS1vbGEgLndkLTUwIHtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi53aHktb2xhIC53ZC01MDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi53aHktb2xhIC53ZC01MDpudGgtY2hpbGQoMikge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi53aHktb2xhIC5pbmRpdi1pdGVtLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ud2h5LW9sYSAuaW5kaXYtaXRlbS1saXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cblxuLndoeS1vbGEgLmluZGl2LWl0ZW0tbGlzdDpob3ZlciAuaGVhZGluZyB7XG4gIGNvbG9yOiAjOGVjNDRhO1xufVxuXG4ud2h5LW9sYSAuaW5kaXYtaXRlbS1saXN0IGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi53aHktb2xhIC5pbmRpdi1pdGVtLWxpc3QgYTpob3ZlciAuaGVhZGluZyB7XG4gIGNvbG9yOiAjOGVjNDRhO1xufVxuXG4ud2h5LW9sYSAuaW5kaXYtaXRlbS1saXN0IC53ZC0zMCB7XG4gIHdpZHRoOiAzMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ud2h5LW9sYSAuaW5kaXYtaXRlbS1saXN0IC53ZC0zMCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWF4LWhlaWdodDogMTEwcHg7XG59XG5cbi53aHktb2xhIC5pbmRpdi1pdGVtLWxpc3QgLndkLTcwIHtcbiAgd2lkdGg6IDcwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLndoeS1vbGEgLmluZGl2LWl0ZW0tbGlzdCAuaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLndoeS1vbGEgLmluZGl2LWl0ZW0tbGlzdCAuaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi53aHktb2xhIC5sYXN0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2xlYXJmaXg6YmVmb3JlLFxuLmNsZWFyZml4OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5jbGVhcmZpeDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLndoeS1vbGEge1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICB9XG5cbiAgLndoeS1vbGEgLnNlY3Rpb24taGVhZGluZyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cblxuICAud2h5LW9sYSAuc2VjdGlvbi1zdWItaGVhZGluZyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cblxuICAud2h5LW9sYSAuaXRlbS1saXN0LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDIwcHggMCAzNXB4IDA7XG4gIH1cblxuICAud2h5LW9sYSAud2QtNTAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLndoeS1vbGEgLndkLTUwOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG5cbiAgLndoeS1vbGEgLndkLTUwOm50aC1jaGlsZCgyKSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG5cbiAgLndoeS1vbGEgLmluZGl2LWl0ZW0tbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDE2cHggMTZweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC53aHktb2xhIC5pbmRpdi1pdGVtLWxpc3QgLndkLTMwIGltZyB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG5cbiAgLndoeS1vbGEgLmluZGl2LWl0ZW0tbGlzdCAud2QtNzAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cblxuICAud2h5LW9sYSAuaW5kaXYtaXRlbS1saXN0IC5oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAud2h5LW9sYSAuaW5kaXYtaXRlbS1saXN0IC5pbmZvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAud2h5LW9sYSAueHMtbGFzdC1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59Il19 */"] });
    return ServicesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/team/team.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");



var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 114, vars: 54, consts: [[1, "container", "team"], [1, "row"], [1, "heading-title", "text-center"], [1, "text-uppercase"], [1, "p-top-30", "half-txt"], [1, "col-md-6", "col-sm-6"], [1, "team-member"], [1, "team-img"], ["src", "./assets/images/utkarsh.JPG", "alt", "Utkarsh", 1, "img-responsive"], [1, "team-hover"], [1, "desk"], [1, "s-link"], ["href", "#"], [1, "fa", "fa-facebook"], [1, "fa", "fa-twitter"], [1, "fa", "fa-google-plus"], [1, "team-title"], ["src", "./assets/images/rohan.jpeg", "alt", "Rohan", 1, "img-responsive"], ["src", "./assets/images/shivam.jpeg", "alt", "Shivam", 1, "img-responsive"], ["src", "./assets//images/abhishek.jpeg", "alt", "Abhishek", 1, "img-responsive"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](86, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](95, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](98, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](109, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](112, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "hr");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 18, "team.ourProfessionals"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 20, "team.slogan"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 22, "team.hi"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 24, "team.introDev"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 26, "team.utkarsh"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 28, "team.utkarshRole"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 30, "team.hi"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 32, "team.introDesigner"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 34, "team.rohan"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 36, "team.rohanRole"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 38, "team.hi"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 40, "team.introWeb"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 42, "team.shivam"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](86, 44, "team.shivamRole"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](95, 46, "team.hi"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](98, 48, "team.introWeb"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](109, 50, "team.abhishek"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](112, 52, "team.abhishekRole"));
        } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  line-height: 1.5;\n  color: #323232;\n  font-size: 15px;\n  font-weight: 400;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n}\n\nhr[_ngcontent-%COMP%] {\n  width: 80%;\n  border-top: 1px solid gray;\n  margin: 0 auto;\n}\n\n.team[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.heading-title[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.heading-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  letter-spacing: 2px;\n  font-weight: normal;\n}\n\n.p-top-30[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n\n.half-txt[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 0 auto;\n  display: inline-block;\n  line-height: 25px;\n  color: #7e7e7e;\n}\n\n.text-uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.team-member[_ngcontent-%COMP%], .team-member[_ngcontent-%COMP%]   .team-img[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.team-img[_ngcontent-%COMP%] {\n  height: 350px;\n}\n\n.team-member[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.team-member[_ngcontent-%COMP%], .team-member[_ngcontent-%COMP%]   .team-img[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.team-hover[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: 0;\n  border: 20px solid rgba(0, 0, 0, 0.1);\n  background-color: rgba(255, 255, 255, 0.9);\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.team-member[_ngcontent-%COMP%]:hover   .team-hover[_ngcontent-%COMP%]   .desk[_ngcontent-%COMP%] {\n  top: 35%;\n}\n\n.team-member[_ngcontent-%COMP%]:hover   .team-hover[_ngcontent-%COMP%], .team-member[_ngcontent-%COMP%]:hover   .team-hover[_ngcontent-%COMP%]   .desk[_ngcontent-%COMP%], .team-member[_ngcontent-%COMP%]:hover   .team-hover[_ngcontent-%COMP%]   .s-link[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.team-hover[_ngcontent-%COMP%]   .desk[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  width: 100%;\n  opacity: 0;\n  transform: translateY(-55%);\n  transition: all 0.3s 0.2s;\n  padding: 0 20px;\n}\n\n.desk[_ngcontent-%COMP%], .desk[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .team-hover[_ngcontent-%COMP%]   .s-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #222;\n}\n\n.team-member[_ngcontent-%COMP%]:hover   .team-hover[_ngcontent-%COMP%]   .s-link[_ngcontent-%COMP%] {\n  bottom: 10%;\n}\n\n.team-member[_ngcontent-%COMP%]:hover   .team-hover[_ngcontent-%COMP%], .team-member[_ngcontent-%COMP%]:hover   .team-hover[_ngcontent-%COMP%]   .desk[_ngcontent-%COMP%], .team-member[_ngcontent-%COMP%]:hover   .team-hover[_ngcontent-%COMP%]   .s-link[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.team-hover[_ngcontent-%COMP%]   .s-link[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  opacity: 0;\n  text-align: center;\n  transform: translateY(45%);\n  transition: all 0.3s 0.2s;\n  font-size: 35px;\n}\n\n.desk[_ngcontent-%COMP%], .desk[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .team-hover[_ngcontent-%COMP%]   .s-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #222;\n}\n\n.team-member[_ngcontent-%COMP%]   .s-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  color: #333;\n  font-size: 16px;\n}\n\n.team-title[_ngcontent-%COMP%] {\n  position: static;\n  padding: 20px 0;\n  display: inline-block;\n  letter-spacing: 2px;\n  width: 100%;\n}\n\n.team-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  display: block;\n  text-transform: uppercase;\n}\n\n.team-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #a5a5a5;\n  letter-spacing: 1px;\n}\n\n@media (max-width: 1199px) {\n  .team-img[_ngcontent-%COMP%], .team-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n\n  .team-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .team-img[_ngcontent-%COMP%], .team-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 270px;\n  }\n\n  .team-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 400px) {\n  .team-img[_ngcontent-%COMP%], .team-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 230px;\n  }\n\n  .team-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFtL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXFByb2plY3QgYXBwXFx2ZXJzaW9uIDIobmV3KS9zcmNcXGFwcFxcY29tcG9uZW50c1xcdGVhbVxcdGVhbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90ZWFtL3RlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0UsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7QUN2QkY7O0FEeUJBO0VBQ0UsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ3RCRjs7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjs7QUR1QkE7RUFDRSxvQkFBQTtBQ3BCRjs7QURzQkE7RUFDRSxrQkFBQTtBQ25CRjs7QURxQkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNsQkY7O0FEb0JBO0VBQ0UsaUJBQUE7QUNqQkY7O0FEbUJBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ2hCRjs7QURrQkE7RUFDRSx5QkFBQTtBQ2ZGOztBRGtCQTs7RUFFRSxrQkFBQTtBQ2ZGOztBRGlCQTtFQUNFLGFBQUE7QUNkRjs7QURnQkE7RUFDRSxnQkFBQTtBQ2JGOztBRGVBOztFQUVFLGtCQUFBO0FDWkY7O0FEZUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSwwQ0FBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtBQ1pGOztBRGNBO0VBQ0UsUUFBQTtBQ1hGOztBRGFBOzs7RUFHRSxVQUFBO0FDVkY7O0FEWUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUdBLDJCQUFBO0VBRUEseUJBQUE7RUFDQSxlQUFBO0FDVEY7O0FEV0E7OztFQUdFLGtCQUFBO0VBQ0EsV0FBQTtBQ1JGOztBRFVBO0VBQ0UsV0FBQTtBQ1BGOztBRFNBOzs7RUFHRSxVQUFBO0FDTkY7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBR0EsMEJBQUE7RUFFQSx5QkFBQTtFQUNBLGVBQUE7QUNMRjs7QURPQTs7O0VBR0Usa0JBQUE7RUFDQSxXQUFBO0FDSkY7O0FETUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNIRjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDRkY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0RGOztBREdBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRTtJQUNFLGFBQUE7RUNBRjs7RURFQTtJQUNFLFdBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0U7SUFDRSxhQUFBO0VDQUY7O0VERUE7SUFDRSxXQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFO0lBQ0UsYUFBQTtFQ0FGOztFREVBO0lBQ0UsV0FBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlYW0vdGVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jb250YWluZXIge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU2ZGQ7XHJcbi8vICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5jb2wtbWQtNiB7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gQGltcG9ydCB1cmwoXHJcbi8vICAgaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZSArIFNhbnMgKyBQcm86NDAwLFxyXG4vLyAgIDIwMCxcclxuLy8gICAyMDBpdGFsaWMsXHJcbi8vICAgMzAwLFxyXG4vLyAgIDMwMGl0YWxpYyxcclxuLy8gICA0MDBpdGFsaWMsXHJcbi8vICAgNjAwLFxyXG4vLyAgIDYwMGl0YWxpYyxcclxuLy8gICA3MDAsXHJcbi8vICAgNzAwaXRhbGljLFxyXG4vLyAgIDkwMCxcclxuLy8gICA5MDBpdGFsaWNcclxuLy8gKTtcclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICMzMjMyMzI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5ocntcclxuICB3aWR0aDogODAlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi50ZWFte1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLmhlYWRpbmctdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5oZWFkaW5nLXRpdGxlIGgzIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4ucC10b3AtMzAge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcbi5oYWxmLXR4dCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgY29sb3I6ICM3ZTdlN2U7XHJcbn1cclxuLnRleHQtdXBwZXJjYXNlIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4udGVhbS1tZW1iZXIsXHJcbi50ZWFtLW1lbWJlciAudGVhbS1pbWcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udGVhbS1pbWd7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG4udGVhbS1tZW1iZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnRlYW0tbWVtYmVyLFxyXG4udGVhbS1tZW1iZXIgLnRlYW0taW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50ZWFtLWhvdmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXI6IDIwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLnRlYW0tbWVtYmVyOmhvdmVyIC50ZWFtLWhvdmVyIC5kZXNrIHtcclxuICB0b3A6IDM1JTtcclxufVxyXG4udGVhbS1tZW1iZXI6aG92ZXIgLnRlYW0taG92ZXIsXHJcbi50ZWFtLW1lbWJlcjpob3ZlciAudGVhbS1ob3ZlciAuZGVzayxcclxuLnRlYW0tbWVtYmVyOmhvdmVyIC50ZWFtLWhvdmVyIC5zLWxpbmsge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLnRlYW0taG92ZXIgLmRlc2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTU1JSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTUlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTU1JSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcbi5kZXNrLFxyXG4uZGVzayBoNCxcclxuLnRlYW0taG92ZXIgLnMtbGluayBhIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyMjI7XHJcbn1cclxuLnRlYW0tbWVtYmVyOmhvdmVyIC50ZWFtLWhvdmVyIC5zLWxpbmsge1xyXG4gIGJvdHRvbTogMTAlO1xyXG59XHJcbi50ZWFtLW1lbWJlcjpob3ZlciAudGVhbS1ob3ZlcixcclxuLnRlYW0tbWVtYmVyOmhvdmVyIC50ZWFtLWhvdmVyIC5kZXNrLFxyXG4udGVhbS1tZW1iZXI6aG92ZXIgLnRlYW0taG92ZXIgLnMtbGluayB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4udGVhbS1ob3ZlciAucy1saW5rIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQ1JSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0NSUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0NSUpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4ycztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG4uZGVzayxcclxuLmRlc2sgaDQsXHJcbi50ZWFtLWhvdmVyIC5zLWxpbmsgYSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMjIyO1xyXG59XHJcbi50ZWFtLW1lbWJlciAucy1saW5rIGEge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4udGVhbS10aXRsZSB7XHJcbiAgcG9zaXRpb246IHN0YXRpYztcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRlYW0tdGl0bGUgaDUge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi50ZWFtLXRpdGxlIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjYTVhNWE1O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAudGVhbS1pbWcsIC50ZWFtLWltZyBpbWd7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gIH1cclxuICAudGVhbS1pbWcgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC50ZWFtLWltZywgLnRlYW0taW1nIGltZ3tcclxuICAgIGhlaWdodDogMjcwcHg7XHJcbiAgfVxyXG4gIC50ZWFtLWltZyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC50ZWFtLWltZywgLnRlYW0taW1nIGltZ3tcclxuICAgIGhlaWdodDogMjMwcHg7XHJcbiAgfVxyXG4gIC50ZWFtLWltZyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzMyMzIzMjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbmhyIHtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udGVhbSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5oZWFkaW5nLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRpbmctdGl0bGUgaDMge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ucC10b3AtMzAge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmhhbGYtdHh0IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGNvbG9yOiAjN2U3ZTdlO1xufVxuXG4udGV4dC11cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGVhbS1tZW1iZXIsXG4udGVhbS1tZW1iZXIgLnRlYW0taW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGVhbS1pbWcge1xuICBoZWlnaHQ6IDM1MHB4O1xufVxuXG4udGVhbS1tZW1iZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGVhbS1tZW1iZXIsXG4udGVhbS1tZW1iZXIgLnRlYW0taW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGVhbS1ob3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMjBweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi50ZWFtLW1lbWJlcjpob3ZlciAudGVhbS1ob3ZlciAuZGVzayB7XG4gIHRvcDogMzUlO1xufVxuXG4udGVhbS1tZW1iZXI6aG92ZXIgLnRlYW0taG92ZXIsXG4udGVhbS1tZW1iZXI6aG92ZXIgLnRlYW0taG92ZXIgLmRlc2ssXG4udGVhbS1tZW1iZXI6aG92ZXIgLnRlYW0taG92ZXIgLnMtbGluayB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50ZWFtLWhvdmVyIC5kZXNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTU1JSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTU1JSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTUlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5kZXNrLFxuLmRlc2sgaDQsXG4udGVhbS1ob3ZlciAucy1saW5rIGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG4udGVhbS1tZW1iZXI6aG92ZXIgLnRlYW0taG92ZXIgLnMtbGluayB7XG4gIGJvdHRvbTogMTAlO1xufVxuXG4udGVhbS1tZW1iZXI6aG92ZXIgLnRlYW0taG92ZXIsXG4udGVhbS1tZW1iZXI6aG92ZXIgLnRlYW0taG92ZXIgLmRlc2ssXG4udGVhbS1tZW1iZXI6aG92ZXIgLnRlYW0taG92ZXIgLnMtbGluayB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50ZWFtLWhvdmVyIC5zLWxpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDUlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0NSUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDUlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5kZXNrLFxuLmRlc2sgaDQsXG4udGVhbS1ob3ZlciAucy1saW5rIGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG4udGVhbS1tZW1iZXIgLnMtbGluayBhIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50ZWFtLXRpdGxlIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgcGFkZGluZzogMjBweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGVhbS10aXRsZSBoNSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi50ZWFtLXRpdGxlIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjYTVhNWE1O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC50ZWFtLWltZywgLnRlYW0taW1nIGltZyB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxuXG4gIC50ZWFtLWltZyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAudGVhbS1pbWcsIC50ZWFtLWltZyBpbWcge1xuICAgIGhlaWdodDogMjcwcHg7XG4gIH1cblxuICAudGVhbS1pbWcgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC50ZWFtLWltZywgLnRlYW0taW1nIGltZyB7XG4gICAgaGVpZ2h0OiAyMzBweDtcbiAgfVxuXG4gIC50ZWFtLWltZyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"] });
    return TeamComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/constants.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/core/constants.ts ***!
  \*******************************************/
/*! exports provided: regex, apiEndPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regex", function() { return regex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiEndPoint", function() { return apiEndPoint; });
var regex = {
    address: '^[A-Za-z0-9 :&()\\-`.,/\]*$',
    numeric: '[0-9]+',
    alphaNumeric: '[a-zA-Z0-9]+',
    emailId: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-.]{2,}$',
    mobileNo: '^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$',
    emailOrUsername: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-.]{2,}$|[a-zA-Z0-9]+',
    password: new RegExp('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$#%^+=])')
};
var apiURL = 'https://kisan-sewa-api.herokuapp.com/';
// const apiURL = 'http://localhost:3000/';
var apiEndPoint = {
    newsletter: apiURL + "newsletter",
    auth: apiURL + "auth/",
    booth: apiURL + "booth/",
    seller: apiURL + "seller/",
    farmer: apiURL + "farmer/"
};


/***/ }),

/***/ "./src/app/modules/core/services/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/core/services/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/app/modules/core/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "./src/app/modules/core/services/storage.service.ts");





var AuthService = /** @class */ (function () {
    function AuthService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.isLoggedIn = false;
    }
    AuthService.prototype.register = function (form, registerAs) {
        var currentLang = this.storage.getCurrentLang();
        if (currentLang) {
            form.value.lang = currentLang;
        }
        else {
            form.value.lang = 'en';
        }
        form.value.registerAs = registerAs;
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["apiEndPoint"].auth + "register", form.value);
    };
    AuthService.prototype.login = function (form, loginAs) {
        var currentLang = this.storage.getCurrentLang();
        if (currentLang) {
            form.value.lang = currentLang;
        }
        else {
            form.value.lang = 'en';
        }
        form.value.loginAs = loginAs;
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["apiEndPoint"].auth + "login", form.value);
    };
    AuthService.prototype.forgotPassword = function (form, forgotAs) {
        form.value.forgotAs = forgotAs;
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["apiEndPoint"].auth + "forgot-password", form.value);
    };
    AuthService.prototype.resetPassword = function (form, resetAs) {
        form.value.resetAs = resetAs;
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["apiEndPoint"].auth + "reset-password", form.value);
    };
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"])); };
    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    return AuthService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/services/loader.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/core/services/loader.service.ts ***!
  \*********************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loader = {
            show: false,
            pendingService: 0
        };
    }
    LoaderService.prototype.showLoader = function () {
        this.loader.show = true;
        this.loader.pendingService += 1;
    };
    LoaderService.prototype.hideLoader = function () {
        this.loader.pendingService -= 1;
        if (this.loader.pendingService <= 0) {
            this.loader.show = false;
        }
    };
    LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
    LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
    return LoaderService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/services/newsletter.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/core/services/newsletter.service.ts ***!
  \*************************************************************/
/*! exports provided: NewsletterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterService", function() { return NewsletterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/app/modules/core/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "./src/app/modules/core/services/storage.service.ts");





var NewsletterService = /** @class */ (function () {
    function NewsletterService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    NewsletterService.prototype.newsletterSubscribe = function (form) {
        var currentLang = this.storage.getCurrentLang();
        if (currentLang) {
            form.value.lang = currentLang;
        }
        else {
            form.value.lang = 'en';
        }
        return this.http.post("" + _constants__WEBPACK_IMPORTED_MODULE_1__["apiEndPoint"].newsletter, form.value);
    };
    NewsletterService.ɵfac = function NewsletterService_Factory(t) { return new (t || NewsletterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"])); };
    NewsletterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewsletterService, factory: NewsletterService.ɵfac, providedIn: 'root' });
    return NewsletterService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsletterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/services/storage.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/core/services/storage.service.ts ***!
  \**********************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.setCurrentLang = function (lang) {
        localStorage.setItem('currentLang', lang);
    };
    StorageService.prototype.getCurrentLang = function () {
        return localStorage.getItem('currentLang');
    };
    StorageService.prototype.setCurrentUserEmail = function (userEmail) {
        localStorage.setItem('currentUser', userEmail);
    };
    StorageService.prototype.getCurrentUserEmail = function () {
        return localStorage.getItem('currentUser');
    };
    StorageService.prototype.setCurrentUserType = function (type) {
        localStorage.setItem('currentUserType', type);
    };
    StorageService.prototype.getCurrentUserType = function () {
        return localStorage.getItem('currentUserType');
    };
    StorageService.prototype.setCurrentUserVerified = function (status) {
        var isVerified;
        if (status) {
            isVerified = 'true';
        }
        else {
            isVerified = 'false';
        }
        localStorage.setItem('isVerified', isVerified);
    };
    StorageService.prototype.getCurrentUserVerified = function () {
        return localStorage.getItem('isVerified');
    };
    StorageService.prototype.removeCurrentUser = function () {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isVerified');
        localStorage.removeItem('currentUserType');
    };
    StorageService.prototype.clearStorage = function () {
        localStorage.clear();
    };
    StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
    StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
    return StorageService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/error-dialog/error-dialog.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/error-dialog/error-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: ErrorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogComponent", function() { return ErrorDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");




var ErrorDialogComponent = /** @class */ (function () {
    function ErrorDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.title = 'Angular-Interceptor';
        this.message = null;
    }
    ErrorDialogComponent.prototype.ngOnInit = function () {
        this.message = this.data.message;
    };
    ErrorDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    ErrorDialogComponent.ɵfac = function ErrorDialogComponent_Factory(t) { return new (t || ErrorDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
    ErrorDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorDialogComponent, selectors: [["app-error-dialog"]], decls: 10, vars: 1, consts: [[1, "mat-dialog-style"], [1, "error-modal-icon"], ["src", "assets/images/error.svg", "alt", "Error"], ["mat-dialog-content", "", 1, "content-style"], [1, "error-content"], ["align", "center", 1, "text-center"], ["mat-button", "", 1, "btn", "btn-primary", 3, "click"]], template: function ErrorDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-actions", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorDialogComponent_Template_button_click_8_listener() { return ctx.onClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]], styles: [".m-0-auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n  margin-bottom: 20px;\n}\n\n.mat-dialog-style[_ngcontent-%COMP%] {\n  width: 350px;\n}\n\n.content-style[_ngcontent-%COMP%] {\n  color: #999;\n  font-weight: 700;\n  min-height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n\n.http-code[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 80px;\n}\n\n.http-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-top: 10px;\n}\n\n@media screen and (max-width: 767px) {\n  .mat-dialog-style[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .http-code[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 65px;\n  }\n\n  .http-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n\n.error-modal-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZXJyb3ItZGlhbG9nL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXFByb2plY3QgYXBwXFx2ZXJzaW9uIDIobmV3KS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxlcnJvci1kaWFsb2dcXGVycm9yLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZXJyb3ItZGlhbG9nL2Vycm9yLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENJO0VBQ0ksZUFBQTtBQ0VSOztBREVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ1I7O0FERUE7RUFDSTtJQUNJLFdBQUE7RUNDTjs7RURFTTtJQUNJLGVBQUE7RUNDVjs7RURHTTtJQUNJLGVBQUE7RUNBVjtBQUNGOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9lcnJvci1kaWFsb2cvZXJyb3ItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm0tMC1hdXRve1xyXG4gICAgbWFyZ2luIDogMCBhdXRvIDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLXN0eWxle1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG59XHJcbi5jb250ZW50LXN0eWxlIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uaHR0cC1jb2Rle1xyXG4gICAgc3BhbntcclxuICAgICAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICB9XHJcbn1cclxuLmh0dHAtdGV4dHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAubWF0LWRpYWxvZy1zdHlsZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5odHRwLWNvZGV7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5odHRwLXRleHR7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gIFxyXG5cclxuLmVycm9yLW1vZGFsLWljb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0iLCIubS0wLWF1dG8ge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubWF0LWRpYWxvZy1zdHlsZSB7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxuLmNvbnRlbnQtc3R5bGUge1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaHR0cC1jb2RlIHNwYW4ge1xuICBmb250LXNpemU6IDgwcHg7XG59XG5cbi5odHRwLXRleHQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm1hdC1kaWFsb2ctc3R5bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmh0dHAtY29kZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDY1cHg7XG4gIH1cblxuICAuaHR0cC10ZXh0IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgfVxufVxuLmVycm9yLW1vZGFsLWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"] });
    return ErrorDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-dialog',
                templateUrl: './error-dialog.component.html',
                styleUrls: ['./error-dialog.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_modules_core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/core/services/storage.service */ "./src/app/modules/core/services/storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");




function FooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_0_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onLanguageChoose("en"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Click to view in English");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onLanguageChoose("hi"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0939\u093F\u0902\u0926\u0940 \u092E\u0947\u0902 \u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var FooterComponent = /** @class */ (function () {
    function FooterComponent(storage) {
        this.storage = storage;
        this.languageEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FooterComponent.prototype.ngOnInit = function () {
        var currentLanguage = this.storage.getCurrentLang();
        if (currentLanguage) {
            this.currentLang = currentLanguage;
        }
        else {
            this.currentLang = 'en';
        }
    };
    FooterComponent.prototype.onLanguageChoose = function (lang) {
        this.languageEmitter.emit(lang);
        this.currentLang = lang;
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"])); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], outputs: { languageEmitter: "languageEmitter" }, decls: 30, vars: 2, consts: [["class", "lang", 4, "ngIf"], [1, "footer"], [1, "foot-left"], [1, "follow"], [1, "about-icons"], ["href", "https://www.facebook.com/"], ["id", "social-fb", 1, "fa", "fa-facebook-square", "fa-3x", "social"], ["href", "https://twitter.com/"], ["id", "social-tw", 1, "fa", "fa-twitter-square", "fa-3x", "social"], ["href", "https://plus.google.com/"], ["id", "social-gp", 1, "fa", "fa-google-plus-square", "fa-3x", "social"], ["href", "mailto:bootsnipp@gmail.com"], ["id", "social-em", 1, "fa", "fa-envelope-square", "fa-3x", "social"], [1, "copyright"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 25.1 62.8", 2, "height", "18px"], ["id", "colony_c", "data-name", "colony_c"], ["id", "colony_c-2", "data-name", "Layer 2"], ["d", "M25.1,0V23.1H16.7V8.4H8.3v46h8.4V39.7h8.4V62.8H0V0Z", 1, "colony-1"], [1, "foot-right"], ["src", "./assets/images/web-icon.ico", "height", "100px"], [1, "lang"], [3, "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_div_0_Template, 3, 0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_1_Template, 3, 0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " FOLLOW US ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Site by \u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Colony");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLang == "hi");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLang == "en");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  background-color: #b1b1b1;\n}\n\n.lang[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  text-align: center;\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding: 50px 0px;\n}\n\n.foot-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.follow[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Founders Grotesk Text\", \"Work Sans\", sans-serif;\n}\n\n.about-icons[_ngcontent-%COMP%] {\n  margin: 48px 0px 48px 0px;\n}\n\n.about-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 0px;\n  font-size: 35px;\n  color: #323232;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\n}\n\n.about-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0;\n  display: inline-block;\n}\n\n#social-fb[_ngcontent-%COMP%]:hover {\n  color: #3b5998;\n  transition: all 0.001s;\n}\n\n#social-tw[_ngcontent-%COMP%]:hover {\n  color: #4099ff;\n  transition: all 0.001s;\n}\n\n#social-gp[_ngcontent-%COMP%]:hover {\n  color: #d34836;\n  transition: all 0.001s;\n}\n\n#social-em[_ngcontent-%COMP%]:hover {\n  color: #f39c12;\n  transition: all 0.001s;\n}\n\n.foot-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXFByb2plY3QgYXBwXFx2ZXJzaW9uIDIobmV3KS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZEQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQ0dGOztBRERBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0FDSUY7O0FERkE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7QUNLRjs7QURIQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtBQ01GOztBREpBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0FDT0Y7O0FESkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XHJcbn1cclxuXHJcbi5sYW5ne1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHBhZGRpbmc6IDUwcHggMHB4O1xyXG59XHJcblxyXG4uZm9vdC1sZWZ0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9sbG93e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogXCJGb3VuZGVycyBHcm90ZXNrIFRleHRcIixcIldvcmsgU2Fuc1wiLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5hYm91dC1pY29ucyB7XHJcbiAgbWFyZ2luOiA0OHB4IDBweCA0OHB4IDBweDtcclxufVxyXG4uYWJvdXQtaWNvbnMgaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgY29sb3I6ICMzMjMyMzI7XHJcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuLmFib3V0LWljb25zIGxpIHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4jc29jaWFsLWZiOmhvdmVyIHtcclxuICBjb2xvcjogIzNiNTk5ODtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4wMDFzO1xyXG59XHJcbiNzb2NpYWwtdHc6aG92ZXIge1xyXG4gIGNvbG9yOiAjNDA5OWZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjAwMXM7XHJcbn1cclxuI3NvY2lhbC1ncDpob3ZlciB7XHJcbiAgY29sb3I6ICNkMzQ4MzY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMDAxcztcclxufVxyXG4jc29jaWFsLWVtOmhvdmVyIHtcclxuICBjb2xvcjogI2YzOWMxMjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4wMDFzO1xyXG59XHJcblxyXG4uZm9vdC1yaWdodHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSIsIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IxYjFiMTtcbn1cblxuLmxhbmcge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogNTBweCAwcHg7XG59XG5cbi5mb290LWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9sbG93IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiRm91bmRlcnMgR3JvdGVzayBUZXh0XCIsIFwiV29yayBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5hYm91dC1pY29ucyB7XG4gIG1hcmdpbjogNDhweCAwcHggNDhweCAwcHg7XG59XG5cbi5hYm91dC1pY29ucyBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYWJvdXQtaWNvbnMgbGkge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jc29jaWFsLWZiOmhvdmVyIHtcbiAgY29sb3I6ICMzYjU5OTg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjAwMXM7XG59XG5cbiNzb2NpYWwtdHc6aG92ZXIge1xuICBjb2xvcjogIzQwOTlmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMDAxcztcbn1cblxuI3NvY2lhbC1ncDpob3ZlciB7XG4gIGNvbG9yOiAjZDM0ODM2O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4wMDFzO1xufVxuXG4jc29jaWFsLWVtOmhvdmVyIHtcbiAgY29sb3I6ICNmMzljMTI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjAwMXM7XG59XG5cbi5mb290LXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: src_app_modules_core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }]; }, { languageEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_modules_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/services/auth.service */ "./src/app/modules/core/services/auth.service.ts");
/* harmony import */ var src_app_modules_core_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/core/services/storage.service */ "./src/app/modules/core/services/storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");







var _c0 = function (a0) { return { active: a0 }; };
var _c1 = function () { return ["/kisan/login"]; };
function HeaderComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r0.router.url === "/kisan/login"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "navigation.login"), "");
} }
var _c2 = function () { return ["/kisan/register"]; };
function HeaderComponent_li_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r1.router.url === "/kisan/register"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "navigation.register"), "");
} }
function HeaderComponent_li_37_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_37_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.openDashBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r2.router.url === "/kisan/dashboard"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "navigation.dashboard"), "");
} }
function HeaderComponent_li_38_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_38_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "navigation.logout"), "");
} }
var _c3 = function () { return ["/"]; };
var _c4 = function () { return ["/about"]; };
var _c5 = function () { return ["/services"]; };
var _c6 = function () { return ["/team"]; };
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, authService, storage) {
        this.router = router;
        this.authService = authService;
        this.storage = storage;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var currentUser = this.storage.getCurrentUserEmail();
        var currentUserType = this.storage.getCurrentUserType();
        if (currentUser && currentUserType) {
            this.authService.isLoggedIn = true;
            this.authService.currentUserType = currentUserType;
        }
        else {
            this.authService.isLoggedIn = false;
            this.authService.currentUserType = '';
            this.storage.removeCurrentUser();
        }
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.isLoggedIn = false;
        this.authService.currentUserType = '';
        this.storage.removeCurrentUser();
        this.router.navigateByUrl('');
    };
    HeaderComponent.prototype.openDashBoard = function () {
        this.router.navigateByUrl('dashboard/' + this.authService.currentUserType);
    };
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_core_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"])); };
    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 39, vars: 41, consts: [["id", "nav-bloc", 1, "bloc", "l-bloc", "w3-animate-top", "bg-primary"], [1, "container"], [1, "navbar", "row"], [1, "navbar-header"], [1, "navbar-brand", 3, "routerLink"], ["id", "nav-toggle", "type", "button", "data-toggle", "collapse", "data-target", ".navbar-1", 1, "ui-navbar-toggle", "navbar-toggle"], [1, "sr-only"], [1, "icon-bar"], [1, "collapse", "navbar-collapse", "navbar-1"], [1, "site-navigation", "nav"], [3, "ngClass"], ["data-toggle", "collapse", "data-target", ".navbar-1", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-home", 2, "font-size", "25px"], ["aria-hidden", "true", 1, "fa", "fa-info", 2, "font-size", "25px"], ["aria-hidden", "true", 1, "fa", "fa-server", 2, "font-size", "25px"], ["aria-hidden", "true", 1, "fa", "fa-users", 2, "font-size", "25px"], [3, "ngClass", 4, "ngIf"], [4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-sign-in", 2, "font-size", "25px"], ["aria-hidden", "true", 1, "fa", "fa-user-plus", 2, "font-size", "25px"], ["data-toggle", "collapse", "data-target", ".navbar-1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-out", 2, "font-size", "25px"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Toggle navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HeaderComponent_li_35_Template, 5, 8, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HeaderComponent_li_36_Template, 5, 8, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HeaderComponent_li_37_Template, 5, 6, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, HeaderComponent_li_38_Template, 5, 3, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 18, "title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx.router.url === "/"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 20, "navigation.home"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx.router.url === "/about"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c4));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 22, "navigation.aboutUs"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c0, ctx.router.url === "/services"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c5));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 24, "navigation.services"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c0, ctx.router.url === "/team"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c6));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 26, "navigation.team"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".bloc[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n}\n\n#nav-bloc[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  font-weight: 600;\n}\n\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  max-height: 40px;\n  margin: 0px 5px 0 0;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n}\n\n.navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  padding-top: 2px;\n  margin-right: -16px;\n  float: right;\n}\n\n.nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 4px;\n  font-size: 16px;\n}\n\n.nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}\n\n.navbar-toggle[_ngcontent-%COMP%] {\n  margin: 12px;\n  border: 0px;\n}\n\n.navbar-toggle[_ngcontent-%COMP%]:hover {\n  background: transparent !important;\n}\n\n.navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 26px;\n}\n\n.navbar-collapse.in[_ngcontent-%COMP%] {\n  overflow-y: visible;\n  float: left;\n  width: 100%;\n}\n\n.navbar-1[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.site-navigation[_ngcontent-%COMP%]:first-child {\n  float: left;\n}\n\n.site-navigation[_ngcontent-%COMP%]:nth-child(2) {\n  float: right;\n}\n\n.site-navigation[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%] {\n  color: #ccc;\n  font-size: 85%;\n  padding-right: 0px;\n}\n\n.active[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: solid black;\n}\n\n@media (max-width: 768px) {\n  .bloc[_ngcontent-%COMP%] {\n    text-align: center;\n    background-size: auto 200%;\n  }\n\n  .navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    padding-top: 0;\n    border-top: 1px solid rgba(0, 0, 0, 0.2);\n    float: none !important;\n  }\n\n  .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    margin-top: 0;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    background: rgba(0, 0, 0, 0.05);\n    text-align: left;\n    width: 100%;\n  }\n\n  .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n    background: rgba(0, 0, 0, 0.08);\n  }\n\n  .navbar-collapse[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n\n  .btn.pull-left[_ngcontent-%COMP%], .btn.pull-right[_ngcontent-%COMP%] {\n    float: none !important;\n  }\n\n  .bloc-xl[_ngcontent-%COMP%], .bloc-lg[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n}\n\n@media (max-width: 475px) {\n  .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 382px) {\n  .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXFByb2plY3QgYXBwXFx2ZXJzaW9uIDIobmV3KS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNLRjs7QURIQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ01GOztBREpBO0VBQ0UsdUJBQUE7QUNPRjs7QURMQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDUUY7O0FETkE7RUFDRSxrQ0FBQTtBQ1NGOztBRFBBO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0FDVUY7O0FEUkE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDV0Y7O0FEVEE7RUFDRSxZQUFBO0FDWUY7O0FEVkE7RUFDRSxXQUFBO0FDYUY7O0FEWEE7RUFDRSxZQUFBO0FDY0Y7O0FEWkE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDZUY7O0FEWkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDZUY7O0FEWkE7RUFDRTtJQUNFLGtCQUFBO0lBSUEsMEJBQUE7RUNlRjs7RURiQTtJQUNFLGNBQUE7SUFDQSx3Q0FBQTtJQUNBLHNCQUFBO0VDZ0JGOztFRGRBO0lBQ0UsYUFBQTtJQUNBLDJDQUFBO0lBQ0EsK0JBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7RUNpQkY7O0VEZkE7SUFDRSwrQkFBQTtFQ2tCRjs7RURoQkE7SUFFRSxnQkFBQTtFQ21CRjs7RURqQkE7O0lBRUUsc0JBQUE7RUNvQkY7O0VEbEJBOztJQUVFLGVBQUE7RUNxQkY7QUFDRjs7QURsQkE7RUFDRTtJQUNFLGVBQUE7RUNvQkY7QUFDRjs7QURqQkE7RUFDRTtJQUNFLGVBQUE7RUNtQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvYyB7XHJcbiAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuXHJcbiNuYXYtYmxvYyB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ubmF2YmFyLWJyYW5kIGltZyB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogNDBweDtcclxuICBtYXJnaW46IDBweCA1cHggMCAwO1xyXG59XHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcclxufVxyXG4ubmF2YmFyIC5uYXYge1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLm5hdiA+IGxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5uYXYgPiBsaSBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4ubmF2YmFyLXRvZ2dsZSB7XHJcbiAgbWFyZ2luOiAxMnB4O1xyXG4gIGJvcmRlcjogMHB4O1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlIC5pY29uLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHdpZHRoOiAyNnB4O1xyXG59XHJcbi5uYXZiYXItY29sbGFwc2UuaW4ge1xyXG4gIG92ZXJmbG93LXk6IHZpc2libGU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5hdmJhci0xIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnNpdGUtbmF2aWdhdGlvbjpmaXJzdC1jaGlsZCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnNpdGUtbmF2aWdhdGlvbjpudGgtY2hpbGQoMikge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4uc2l0ZS1uYXZpZ2F0aW9uOm50aC1jaGlsZCgyKSBhIHtcclxuICBjb2xvcjogI2NjYztcclxuICBmb250LXNpemU6IDg1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmJsb2Mge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGF1dG8gMjAwJTtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBhdXRvIDIwMCU7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGF1dG8gMjAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAyMDAlO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXYge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5hdiA+IGxpIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLm5hdiA+IGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgfVxyXG4gIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgLmJ0bi5wdWxsLWxlZnQsXHJcbiAgLmJ0bi5wdWxsLXJpZ2h0IHtcclxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5ibG9jLXhsLFxyXG4gIC5ibG9jLWxnIHtcclxuICAgIHBhZGRpbmc6IDQwcHggMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NzVweCkge1xyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MnB4KSB7XHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5ibG9jIHtcbiAgcGFkZGluZzogMjBweCAwcHg7XG59XG5cbiNuYXYtYmxvYyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLm5hdmJhciB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm5hdmJhci1icmFuZCBpbWcge1xuICB3aWR0aDogYXV0bztcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwcHggNXB4IDAgMDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbn1cblxuLm5hdmJhciAubmF2IHtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubmF2ID4gbGkge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5uYXYgPiBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5uYXZiYXItdG9nZ2xlIHtcbiAgbWFyZ2luOiAxMnB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuLm5hdmJhci10b2dnbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHdpZHRoOiAyNnB4O1xufVxuXG4ubmF2YmFyLWNvbGxhcHNlLmluIHtcbiAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2YmFyLTEge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zaXRlLW5hdmlnYXRpb246Zmlyc3QtY2hpbGQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnNpdGUtbmF2aWdhdGlvbjpudGgtY2hpbGQoMikge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zaXRlLW5hdmlnYXRpb246bnRoLWNoaWxkKDIpIGEge1xuICBjb2xvcjogI2NjYztcbiAgZm9udC1zaXplOiA4NSU7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgYmxhY2s7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYmxvYyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBhdXRvIDIwMCU7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGF1dG8gMjAwJTtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGF1dG8gMjAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMjAwJTtcbiAgfVxuXG4gIC5uYXZiYXIgLm5hdiB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdiA+IGxpIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm5hdiA+IGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB9XG5cbiAgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAuYnRuLnB1bGwtbGVmdCxcbi5idG4ucHVsbC1yaWdodCB7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5ibG9jLXhsLFxuLmJsb2MtbGcge1xuICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3NXB4KSB7XG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MnB4KSB7XG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgfVxufSJdfQ== */"] });
    return HeaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_modules_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_modules_core_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_modules_core_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/core/services/loader.service */ "./src/app/modules/core/services/loader.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");




function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_core_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"])); };
    LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 1, consts: [["class", "loading", 4, "ngIf"], [1, "loading"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 2, 0, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaderService.loader.show);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".loading[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.loading[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.8));\n  background: -webkit-radial-gradient(rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.8));\n}\n\n.loading[_ngcontent-%COMP%]:not(:required) {\n  \n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.loading[_ngcontent-%COMP%]:not(:required):after {\n  content: \"\";\n  display: block;\n  font-size: 10px;\n  width: 1em;\n  height: 1em;\n  margin-top: -0.5em;\n  -webkit-animation: spinner 150ms infinite linear;\n  animation: spinner 150ms infinite linear;\n  border-radius: 0.5em;\n  box-shadow: rgba(255, 255, 255, 0.75) 1.5em 0 0 0, rgba(255, 255, 255, 0.75) 1.1em 1.1em 0 0, rgba(255, 255, 255, 0.75) 0 1.5em 0 0, rgba(255, 255, 255, 0.75) -1.1em 1.1em 0 0, rgba(255, 255, 255, 0.75) -1.5em 0 0 0, rgba(255, 255, 255, 0.75) -1.1em -1.1em 0 0, rgba(255, 255, 255, 0.75) 0 -1.5em 0 0, rgba(255, 255, 255, 0.75) 1.1em -1.1em 0 0;\n}\n\n@-webkit-keyframes spinner {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXFByb2plY3QgYXBwXFx2ZXJzaW9uIDIobmV3KS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxsb2FkZXJcXGxvYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRkEsNEJBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNyRkY7QUR3RkEsd0JBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDRSxzRUFBQTtFQUVGLDhFQUFBO0FDdEZGO0FEeUZBLHlEQUFBO0FBQ0E7RUFDRSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0FDdEZGO0FEeUZBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBSUEsd0NBQUE7RUFDQSxvQkFBQTtFQUVGLHdWQUFBO0FDdEZBO0FEeUZBLGNBQUE7QUFFQTtFQUNFO0lBS0UsdUJBQUE7RUN2RkY7RUR5RkE7SUFLRSx5QkFBQTtFQ3ZGRjtBQUNGO0FEeUhBO0VBQ0U7SUFLRSx1QkFBQTtFQ3ZGRjtFRHlGQTtJQUtFLHlCQUFBO0VDdkZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmxkcy1yb2xsZXIge1xyXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgd2lkdGg6IDgwcHg7XHJcbi8vICAgaGVpZ2h0OiA4MHB4O1xyXG4vLyB9XHJcbi8vIC5sZHMtcm9sbGVyIGRpdiB7XHJcbi8vICAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuLy8gICB0cmFuc2Zvcm0tb3JpZ2luOiA0MHB4IDQwcHg7XHJcbi8vIH1cclxuLy8gLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcclxuLy8gICBjb250ZW50OiBcIiBcIjtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgd2lkdGg6IDdweDtcclxuLy8gICBoZWlnaHQ6IDdweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xyXG4vLyAgIG1hcmdpbjogLTRweCAwIDAgLTRweDtcclxuLy8gfVxyXG4vLyAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpIHtcclxuLy8gICBhbmltYXRpb24tZGVsYXk6IC0wLjAzNnM7XHJcbi8vIH1cclxuLy8gLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKTphZnRlciB7XHJcbi8vICAgdG9wOiA2M3B4O1xyXG4vLyAgIGxlZnQ6IDYzcHg7XHJcbi8vIH1cclxuLy8gLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKSB7XHJcbi8vICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xyXG4vLyB9XHJcbi8vIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xyXG4vLyAgIHRvcDogNjhweDtcclxuLy8gICBsZWZ0OiA1NnB4O1xyXG4vLyB9XHJcbi8vIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xyXG4vLyAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTA4cztcclxuLy8gfVxyXG4vLyAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcclxuLy8gICB0b3A6IDcxcHg7XHJcbi8vICAgbGVmdDogNDhweDtcclxuLy8gfVxyXG4vLyAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpIHtcclxuLy8gICBhbmltYXRpb24tZGVsYXk6IC0wLjE0NHM7XHJcbi8vIH1cclxuLy8gLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KTphZnRlciB7XHJcbi8vICAgdG9wOiA3MnB4O1xyXG4vLyAgIGxlZnQ6IDQwcHg7XHJcbi8vIH1cclxuLy8gLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KSB7XHJcbi8vICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XHJcbi8vIH1cclxuLy8gLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XHJcbi8vICAgdG9wOiA3MXB4O1xyXG4vLyAgIGxlZnQ6IDMycHg7XHJcbi8vIH1cclxuLy8gLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XHJcbi8vICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yMTZzO1xyXG4vLyB9XHJcbi8vIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xyXG4vLyAgIHRvcDogNjhweDtcclxuLy8gICBsZWZ0OiAyNHB4O1xyXG4vLyB9XHJcbi8vIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNykge1xyXG4vLyAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjUycztcclxuLy8gfVxyXG4vLyAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpOmFmdGVyIHtcclxuLy8gICB0b3A6IDYzcHg7XHJcbi8vICAgbGVmdDogMTdweDtcclxuLy8gfVxyXG4vLyAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpIHtcclxuLy8gICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XHJcbi8vIH1cclxuLy8gLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciB7XHJcbi8vICAgdG9wOiA1NnB4O1xyXG4vLyAgIGxlZnQ6IDEycHg7XHJcbi8vIH1cclxuLy8gQGtleWZyYW1lcyBsZHMtcm9sbGVyIHtcclxuLy8gICAwJSB7XHJcbi8vICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuLy8gICB9XHJcbi8vICAgMTAwJSB7XHJcbi8vICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi8qIEFic29sdXRlIENlbnRlciBTcGlubmVyICovXHJcbi5sb2FkaW5nIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgb3ZlcmZsb3c6IHNob3c7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLyogVHJhbnNwYXJlbnQgT3ZlcmxheSAqL1xyXG4ubG9hZGluZzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyMCwgMjAsIDIwLC44KSwgcmdiYSgwLCAwLCAwLCAuOCkpO1xyXG5cclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChyZ2JhKDIwLCAyMCwgMjAsLjgpLCByZ2JhKDAsIDAsIDAsLjgpKTtcclxufVxyXG5cclxuLyogOm5vdCg6cmVxdWlyZWQpIGhpZGVzIHRoZXNlIHJ1bGVzIGZyb20gSUU5IGFuZCBiZWxvdyAqL1xyXG4ubG9hZGluZzpub3QoOnJlcXVpcmVkKSB7XHJcbiAgLyogaGlkZSBcImxvYWRpbmcuLi5cIiB0ZXh0ICovXHJcbiAgZm9udDogMC8wIGE7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmxvYWRpbmc6bm90KDpyZXF1aXJlZCk6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIG1hcmdpbi10b3A6IC0wLjVlbTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciAxNTBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgLW1vei1hbmltYXRpb246IHNwaW5uZXIgMTUwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1tcy1hbmltYXRpb246IHNwaW5uZXIgMTUwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1vLWFuaW1hdGlvbjogc3Bpbm5lciAxNTBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uOiBzcGlubmVyIDE1MG1zIGluZmluaXRlIGxpbmVhcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuNWVtIDAgMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAxLjFlbSAxLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS41ZW0gMCAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjFlbSAtMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XHJcbmJveC1zaGFkb3c6IHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuNWVtIDAgMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAxLjFlbSAxLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS41ZW0gMCAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjFlbSAtMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbiAqL1xyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59IiwiLyogQWJzb2x1dGUgQ2VudGVyIFNwaW5uZXIgKi9cbi5sb2FkaW5nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk7XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xuICBvdmVyZmxvdzogc2hvdztcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi8qIFRyYW5zcGFyZW50IE92ZXJsYXkgKi9cbi5sb2FkaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjAsIDIwLCAyMCwgMC44KSwgcmdiYSgwLCAwLCAwLCAwLjgpKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQocmdiYSgyMCwgMjAsIDIwLCAwLjgpLCByZ2JhKDAsIDAsIDAsIDAuOCkpO1xufVxuXG4vKiA6bm90KDpyZXF1aXJlZCkgaGlkZXMgdGhlc2UgcnVsZXMgZnJvbSBJRTkgYW5kIGJlbG93ICovXG4ubG9hZGluZzpub3QoOnJlcXVpcmVkKSB7XG4gIC8qIGhpZGUgXCJsb2FkaW5nLi4uXCIgdGV4dCAqL1xuICBmb250OiAwLzAgYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cblxuLmxvYWRpbmc6bm90KDpyZXF1aXJlZCk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLXRvcDogLTAuNWVtO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciAxNTBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gIC1tb3otYW5pbWF0aW9uOiBzcGlubmVyIDE1MG1zIGluZmluaXRlIGxpbmVhcjtcbiAgLW1zLWFuaW1hdGlvbjogc3Bpbm5lciAxNTBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gIC1vLWFuaW1hdGlvbjogc3Bpbm5lciAxNTBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogc3Bpbm5lciAxNTBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgMS41ZW0gMCAwIDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpIC0xLjFlbSAxLjFlbSAwIDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgLTEuNWVtIDAgMCAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpIC0xLjFlbSAtMS4xZW0gMCAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpIDAgLTEuNWVtIDAgMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAxLjFlbSAtMS4xZW0gMCAwO1xuICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpIDEuNWVtIDAgMCAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpIDEuMWVtIDEuMWVtIDAgMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAwIDEuNWVtIDAgMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpIC0xLjVlbSAwIDAgMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAtMS4xZW0gLTEuMWVtIDAgMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgMS4xZW0gLTEuMWVtIDAgMDtcbn1cblxuLyogQW5pbWF0aW9uICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgc3Bpbm5lciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHNwaW5uZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGlubmVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXX0= */"] });
    return LoaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return [{ type: src_app_modules_core_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/newsletter/newsletter.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/newsletter/newsletter.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterComponent", function() { return NewsletterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _modules_core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/core/constants */ "./src/app/modules/core/constants.ts");
/* harmony import */ var _success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../success-dialog/success-dialog.component */ "./src/app/shared/components/success-dialog/success-dialog.component.ts");
/* harmony import */ var src_app_modules_core_services_newsletter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/core/services/newsletter.service */ "./src/app/modules/core/services/newsletter.service.ts");
/* harmony import */ var src_app_modules_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/core/services/loader.service */ "./src/app/modules/core/services/loader.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");












function NewsletterComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var NewsletterComponent = /** @class */ (function () {
    function NewsletterComponent(newsLetterService, loaderService, dialog, snackBar) {
        this.newsLetterService = newsLetterService;
        this.loaderService = loaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
    }
    NewsletterComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    NewsletterComponent.prototype.initForm = function () {
        this.newsLetterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_modules_core_constants__WEBPACK_IMPORTED_MODULE_2__["regex"].emailId)])
        });
    };
    NewsletterComponent.prototype.onSubscribe = function () {
        var _this = this;
        this.loaderService.showLoader();
        this.newsLetterService.newsletterSubscribe(this.newsLetterForm).subscribe(function (response) {
            _this.loaderService.hideLoader();
            _this.dialog.open(_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SuccessDialogComponent"], {
                data: response
            });
        }, function (error) {
            _this.loaderService.hideLoader();
            _this.snackBar.open(error.error.message);
        }, function () { });
    };
    NewsletterComponent.ɵfac = function NewsletterComponent_Factory(t) { return new (t || NewsletterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_core_services_newsletter_service__WEBPACK_IMPORTED_MODULE_4__["NewsletterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
    NewsletterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsletterComponent, selectors: [["app-newsletter"]], decls: 11, vars: 12, consts: [[1, "newsletter", "w3-animate-zoom"], [1, "newsletter-title"], [1, "newsletter-form"], [3, "formGroup", "ngSubmit"], ["type", "email", "formControlName", "email", 3, "placeholder"], ["class", "alert alert-danger", "style", "width: 70%; margin-top: 10px;", 4, "ngIf"], ["type", "submit", 3, "value", "disabled"], [1, "alert", "alert-danger", 2, "width", "70%", "margin-top", "10px"]], template: function NewsletterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewsletterComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubscribe(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NewsletterComponent_div_8_Template, 2, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "newsletter.signUp"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newsLetterForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "newsletter.enterEmail"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newsLetterForm.controls["email"].invalid && ctx.newsLetterForm.controls["email"].touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, "newsletter.subscribe"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.newsLetterForm.invalid);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: [".newsletter[_ngcontent-%COMP%] {\n  background-image: url('newsletter.jpeg');\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 180px 0px;\n  color: #fff;\n}\n\n.newsletter-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 30px;\n  font-weight: bold;\n  width: 30%;\n}\n\n.newsletter-form[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #fff;\n}\n\ninput[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 70%;\n}\n\ninput[type=email][_ngcontent-%COMP%] {\n  background: transparent;\n  color: #fff;\n  border: none;\n  border-bottom: white solid 1px;\n}\n\ninput[type=email][_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: white;\n}\n\ninput[type=email][_ngcontent-%COMP%]::-moz-placeholder {\n  color: white;\n}\n\ninput[type=email][_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: white;\n}\n\ninput[type=email][_ngcontent-%COMP%]::placeholder {\n  color: white;\n}\n\ninput[type=submit][_ngcontent-%COMP%] {\n  margin-top: 40px;\n  color: black;\n  font-weight: bold;\n  opacity: 0.8;\n}\n\ninput[type=submit][_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n@media (max-width: 767px) {\n  .newsletter[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  input[type=email][_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmV3c2xldHRlci9DOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxQcm9qZWN0IGFwcFxcdmVyc2lvbiAyKG5ldykvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbmV3c2xldHRlclxcbmV3c2xldHRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmV3c2xldHRlci9uZXdzbGV0dGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURGQTtFQUNFLFlBQUE7QUNDRjs7QURGQTtFQUNFLFlBQUE7QUNDRjs7QURGQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0VDQ0Y7O0VERUE7SUFDRSxnQkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uZXdzbGV0dGVyL25ld3NsZXR0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3c2xldHRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbmV3c2xldHRlci5qcGVnKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDE4MHB4IDBweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm5ld3NsZXR0ZXItdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLm5ld3NsZXR0ZXItZm9ybSB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGUgc29saWQgMXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZW1haWxcIl06OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLm5ld3NsZXR0ZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwiZW1haWxcIl17XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxufVxyXG4iLCIubmV3c2xldHRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL25ld3NsZXR0ZXIuanBlZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTgwcHggMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5ld3NsZXR0ZXItdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5uZXdzbGV0dGVyLWZvcm0ge1xuICB3aWR0aDogNzAlO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmlucHV0IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNzAlO1xufVxuXG5pbnB1dFt0eXBlPWVtYWlsXSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiB3aGl0ZSBzb2xpZCAxcHg7XG59XG5cbmlucHV0W3R5cGU9ZW1haWxdOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm5ld3NsZXR0ZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG59Il19 */"] });
    return NewsletterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsletterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-newsletter',
                templateUrl: './newsletter.component.html',
                styleUrls: ['./newsletter.component.scss']
            }]
    }], function () { return [{ type: src_app_modules_core_services_newsletter_service__WEBPACK_IMPORTED_MODULE_4__["NewsletterService"] }, { type: src_app_modules_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/success-dialog/success-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/success-dialog/success-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: SuccessDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessDialogComponent", function() { return SuccessDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





function SuccessDialogComponent_hr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function SuccessDialogComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.detail);
} }
var SuccessDialogComponent = /** @class */ (function () {
    function SuccessDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    SuccessDialogComponent.prototype.ngOnInit = function () {
        if (this.data.message) {
            this.message = this.data.message;
        }
        else {
            this.message = 'Success';
        }
        if (this.data.detail) {
            this.detail = this.data.detail;
        }
    };
    SuccessDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    SuccessDialogComponent.ɵfac = function SuccessDialogComponent_Factory(t) { return new (t || SuccessDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
    SuccessDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessDialogComponent, selectors: [["app-success-dialog"]], decls: 12, vars: 3, consts: [[1, "mat-dialog-style"], [1, "error-modal-icon"], ["src", "assets/images/success.png", "alt", "Success"], ["mat-dialog-content", "", 1, "content-style"], [1, "error-content"], [4, "ngIf"], ["align", "center", 1, "text-center"], ["mat-button", "", 1, "btn", "btn-primary", 3, "click"]], template: function SuccessDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SuccessDialogComponent_hr_7_Template, 1, 0, "hr", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SuccessDialogComponent_p_8_Template, 2, 1, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-actions", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuccessDialogComponent_Template_button_click_10_listener() { return ctx.onClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]], styles: [".m-0-auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n  margin-bottom: 20px;\n}\n\n.mat-dialog-style[_ngcontent-%COMP%] {\n  width: 350px;\n}\n\n.content-style[_ngcontent-%COMP%] {\n  color: #999;\n  font-weight: 700;\n  min-height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n\n.http-code[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 80px;\n}\n\n.http-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-top: 10px;\n}\n\n@media screen and (max-width: 767px) {\n  .mat-dialog-style[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .http-code[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 65px;\n  }\n\n  .http-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n\n.error-modal-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3VjY2Vzcy1kaWFsb2cvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcUHJvamVjdCBhcHBcXHZlcnNpb24gMihuZXcpL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHN1Y2Nlc3MtZGlhbG9nXFxzdWNjZXNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3VjY2Vzcy1kaWFsb2cvc3VjY2Vzcy1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDSTtFQUNJLGVBQUE7QUNFUjs7QURFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NSOztBREVBO0VBQ0k7SUFDSSxXQUFBO0VDQ047O0VERU07SUFDSSxlQUFBO0VDQ1Y7O0VER007SUFDSSxlQUFBO0VDQVY7QUFDRjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3VjY2Vzcy1kaWFsb2cvc3VjY2Vzcy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS0wLWF1dG97XHJcbiAgICBtYXJnaW4gOiAwIGF1dG8gO1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctc3R5bGV7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbn1cclxuLmNvbnRlbnQtc3R5bGUge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5odHRwLWNvZGV7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIH1cclxufVxyXG4uaHR0cC10ZXh0e1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5tYXQtZGlhbG9nLXN0eWxle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmh0dHAtY29kZXtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmh0dHAtdGV4dHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAgXHJcblxyXG4uZXJyb3ItbW9kYWwtaWNvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufSIsIi5tLTAtYXV0byB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tYXQtZGlhbG9nLXN0eWxlIHtcbiAgd2lkdGg6IDM1MHB4O1xufVxuXG4uY29udGVudC1zdHlsZSB7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5odHRwLWNvZGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogODBweDtcbn1cblxuLmh0dHAtdGV4dCBzcGFuIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubWF0LWRpYWxvZy1zdHlsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuaHR0cC1jb2RlIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogNjVweDtcbiAgfVxuXG4gIC5odHRwLXRleHQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG59XG4uZXJyb3ItbW9kYWwtaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"] });
    return SuccessDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-success-dialog',
                templateUrl: './success-dialog.component.html',
                styleUrls: ['./success-dialog.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/update-password/update-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/update-password/update-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: UpdatePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordComponent", function() { return UpdatePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var UpdatePasswordComponent = /** @class */ (function () {
    function UpdatePasswordComponent() {
    }
    UpdatePasswordComponent.prototype.ngOnInit = function () {
    };
    UpdatePasswordComponent.ɵfac = function UpdatePasswordComponent_Factory(t) { return new (t || UpdatePasswordComponent)(); };
    UpdatePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdatePasswordComponent, selectors: [["app-update-password"]], decls: 2, vars: 0, template: function UpdatePasswordComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "update-password works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return UpdatePasswordComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-password',
                templateUrl: './update-password.component.html',
                styleUrls: ['./update-password.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\Desktop\Project app\version 2(new)\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map