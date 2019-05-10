(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n <div>\n<app-header></app-header>\n</div>\n<hr [style.display]=\"'none'\">\n<!DOCTYPE html>\n<html>\n   \n       <marquee>Smart Manufactureing industrial training program  on industry 4.0.</marquee> \n      \n       <body>\n        <div class=\"\" style=\"text-align:center\">\n         <!-- <div>\n          <marquee>  <img src=\"assets/image/capture2.jpg\" alt=\"1\" style=\"width:50%;\"> </marquee>  \n          <marquee> <img src=\"assets/image/Capture1.PNG\" alt=\"2\" style=\"width:50%;\"></marquee>\n          \n          </div> -->\n          <hr style=\"border-top: 1px solid transparent; background: transparent;\">\n          <div>\n         <app-carousel></app-carousel>\n        </div>\n        </div>\n         <hr style=\"border-top: 1px solid transparent; background: transparent;\">\n<div>\n  <!-- this is space -->\n</div>\n        \n    <!-- <img src=\"assets/image/capture3.png\" alt=\"capture3\"> -->\n     </body>\n     <div>\n     <app-aboutprog></app-aboutprog>\n     <hr style=\"border-top: 1px solid transparent; background: transparent;\">\n    </div>\n    <div>\n\n      <!-- this is space -->\n    </div>\n\n    <!-- <h2>{{title}}</h2>  -->\n\n    <!-- <img [src]=\"'smartmanu\\src\\assets\\capture1.png'\" alt=\"capture1\"> -->\n  \n   <!-- <marquee behavior=\"scroll\" direction=\"left\"> -->\n    <!-- <img src=\"smartmanu\\src\\assets\\Capture1.PNG\"  > -->\n  <!-- </marquee> -->\n \n\n   <div>\n  <app-aboutteachers></app-aboutteachers>\n  <hr style=\"border-top: 1px solid transparent; background: transparent;\">\n</div>\n<div>\n<router-outlet></router-outlet>\n<hr style=\"border-top: 1px solid transparent; background: transparent;\">\n</div>\n<div class=\"clint\">\n <app-clients></app-clients>\n</div>\n<hr style=\"border-top: 1px solid transparent; background: transparent;\">\n<app-footer></app-footer>\n</html>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Smart Manufacturing';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var _components_aboutteachers_aboutteachers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/aboutteachers/aboutteachers.component */ "./src/app/components/aboutteachers/aboutteachers.component.ts");
/* harmony import */ var _components_aboutprog_aboutprog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/aboutprog/aboutprog.component */ "./src/app/components/aboutprog/aboutprog.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/clients/clients.component */ "./src/app/components/clients/clients.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"],
                _components_aboutteachers_aboutteachers_component__WEBPACK_IMPORTED_MODULE_8__["AboutteachersComponent"],
                _components_aboutprog_aboutprog_component__WEBPACK_IMPORTED_MODULE_9__["AboutprogComponent"],
                _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_11__["ClientsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/aboutprog/aboutprog.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/aboutprog/aboutprog.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width: 100%;\r\n    height: 400px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dHByb2cvYWJvdXRwcm9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXRwcm9nL2Fib3V0cHJvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/aboutprog/aboutprog.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/aboutprog/aboutprog.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" style=\"text-align:center;\">\n\n<h1>About The Program</h1>\n<img src =\"assets/image/Capture1.PNG\" > \n</div>"

/***/ }),

/***/ "./src/app/components/aboutprog/aboutprog.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/aboutprog/aboutprog.component.ts ***!
  \*************************************************************/
/*! exports provided: AboutprogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutprogComponent", function() { return AboutprogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutprogComponent = /** @class */ (function () {
    function AboutprogComponent() {
    }
    AboutprogComponent.prototype.ngOnInit = function () {
    };
    AboutprogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutprog',
            template: __webpack_require__(/*! ./aboutprog.component.html */ "./src/app/components/aboutprog/aboutprog.component.html"),
            styles: [__webpack_require__(/*! ./aboutprog.component.css */ "./src/app/components/aboutprog/aboutprog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutprogComponent);
    return AboutprogComponent;
}());



/***/ }),

/***/ "./src/app/components/aboutteachers/aboutteachers.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/aboutteachers/aboutteachers.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXR0ZWFjaGVycy9hYm91dHRlYWNoZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/aboutteachers/aboutteachers.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/aboutteachers/aboutteachers.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"a\" style=\"text-align:center;vertical-align: middle;\">\n<h2>About The Faculty</h2>\n\n<img src=\"assets/image/Capture4.PNG\" alt=\"2\" style=\"width:50%;\" >\n\n\n<img src=\"assets/image/Capture5.PNG\" alt=\"2\" style=\"width:50%;\">\n\n</div>"

/***/ }),

/***/ "./src/app/components/aboutteachers/aboutteachers.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/aboutteachers/aboutteachers.component.ts ***!
  \*********************************************************************/
/*! exports provided: AboutteachersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutteachersComponent", function() { return AboutteachersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutteachersComponent = /** @class */ (function () {
    function AboutteachersComponent() {
    }
    AboutteachersComponent.prototype.ngOnInit = function () {
    };
    AboutteachersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutteachers',
            template: __webpack_require__(/*! ./aboutteachers.component.html */ "./src/app/components/aboutteachers/aboutteachers.component.html"),
            styles: [__webpack_require__(/*! ./aboutteachers.component.css */ "./src/app/components/aboutteachers/aboutteachers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutteachersComponent);
    return AboutteachersComponent;
}());



/***/ }),

/***/ "./src/app/components/carousel/carousel.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width: 100%;\r\n    height: 500px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid' >\n\n  <div class='col-12' >\n  <ngb-carousel>\n  <ng-template ngbSlide>\n    <img src=\"assets/image/capture9.jpg\" alt=\"Random first slide\">\n    <div class=\"carousel-caption\">\n      \n      <p>Welcome to Industry 4.0</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img src=\"assets/image/capture8.jpg\" alt=\"Random second slide\">\n    <div class=\"carousel-caption\">\n      \n      <p>optimize and get the report</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img src=\"assets/image/capture6.jpg\" alt=\"Random third slide\">\n    <div class=\"carousel-caption\">\n      \n      <p>This is helpful for future planing</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img src=\"assets/image/capture7.jpg\" alt=\"Random fourth slide\">\n    <div class=\"carousel-caption\">\n      \n      <p>This Automates the world Manufacturing.</p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n  </div>\n \n  </div>"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-carousel',
//   templateUrl: './carousel.component.html',
//   styleUrls: ['./carousel.component.css']
// })
// export class CarouselComponent implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }
// // import { Component } from '@angular/core';
// // import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
// // @Component({
// //   selector: 'app-carousel',
// //   templateUrl: './carousel.component.html',
// //   providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
// // })
// // export class NgbdCarouselConfig {
// //   images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
// //   constructor(config: NgbCarouselConfig) {
// //     // customize default values of carousels used by this component tree
// //     config.interval = 10000;
// //     config.wrap = false;
// //     config.keyboard = false;
// //     config.pauseOnHover = false;
// //   }
// // }


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config) {
        // customize default values of carousels used by this component tree
        config.interval = 2000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/components/carousel/carousel.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]],
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/components/carousel/carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/clients.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/clients/clients.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width: 30%;\r\n    height: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/clients/clients.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/clients/clients.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"b\"style=\"text-align:center;\">\n\n<h2>Our Client</h2> \n<marquee behavior=\"scroll\" direction=\"left\"> \n  \n\n<img src=\"assets/image/logo1.png\"> \n<img src=\"assets/image/logo2.jpg\"> \n<img src=\"assets/image/logo3.jpg\"> \n<img src=\"assets/image/logo4.jpg\"> \n<img src=\"assets/image/logo5.png\"> \n<img src=\"assets/image/qunts.jpg\"> \n<img src=\"assets/image/KCIG.jpg\"> \n</marquee>\n</div>"

/***/ }),

/***/ "./src/app/components/clients/clients.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/clients/clients.component.ts ***!
  \*********************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/components/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/components/clients/clients.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"background-color: #191970\">\n    <div style = \"text-align:left\">\n      <div style =\"-webkit-text-fill-color: whitesmoke\">\n    <h3>About the program</h3>\n    <div style=\"text-align:right \"> <h1>Indestrial training program on industry 4.0</h1></div>  -->\n    <!-- Footer -->\n<footer class=\"page-footer font-small unique-color-dark\">\n\n    <div style=\"background-color: #696969;\">\n      <div class=\"container\">\n\n        <!-- Grid row-->\n        <div class=\"row py-4 d-flex align-items-center\">\n\n          <!-- Grid column -->\n          <div class=\"col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0\">\n            <h6 class=\"mb-0\">Get connected with us on social networks!</h6>\n          </div>\n          <!-- Grid column -->\n\n          <!-- Grid column -->\n          <div class=\"col-md-6 col-lg-7 text-center text-md-right\">\n\n            <!-- Facebook -->\n            <a class=\"fb-ic\">\n              <i class=\"fab fa-facebook-f white-text mr-4\" > </i>\n            </a>\n            <!-- Twitter -->\n            <a class=\"tw-ic\">\n              <i class=\"fab fa-twitter white-text mr-4\"> </i>\n            </a>\n            <!-- Google +-->\n            <a class=\"gplus-ic\">\n              <i class=\"fab fa-google-plus-g white-text mr-4\"> </i>\n            </a>\n            <!--Linkedin -->\n            <a class=\"li-ic\">\n              <i class=\"fab fa-linkedin-in white-text mr-4\"> </i>\n            </a>\n            <!--Instagram-->\n            <a class=\"ins-ic\">\n              <i class=\"fab fa-instagram white-text\"> </i>\n            </a>\n\n          </div>\n          <!-- Grid column -->\n\n        </div>\n        <!-- Grid row-->\n\n      </div>\n    </div>\n\n    <!-- Footer Links -->\n    <div class=\"container text-center text-md-left mt-5\">\n\n      <!-- Grid row -->\n      <div class=\"row mt-3\">\n\n        <!-- Grid column -->\n        <div class=\"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4\">\n\n          <!-- Content -->\n          <h6 class=\"text-uppercase font-weight-bold\">About The Program</h6>\n          <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n          <p>Industry 4.0 is about adoption of technologies which involves cloud of the things, internet of things, cloud computing, artificial intelligence ,cyber physical system to deploy technology driven on \"smart manufacturing\".</p>\n\n        </div>\n        <!-- Grid column -->\n\n        <!-- Grid column -->\n        <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4\">\n\n          <!-- Links -->\n          <h6 class=\"text-uppercase font-weight-bold\">Elegible Departments</h6>\n          <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n          <p>\n            <a href=\"#!\">Mechanical</a>\n          </p>\n          <p>\n            <a href=\"#!\">Metronics</a>\n          </p>\n          <p>\n            <a href=\"#!\">Electricals</a>\n          </p>\n          <p>\n            <a href=\"#!\">Electronics</a>\n          </p>\n          <p>\n            <a href=\"#!\">Civil</a>\n          </p>\n          <p>\n            <a href=\"#!\">Production</a>\n          </p>\n          <p>\n            <a href=\"#!\">Automobiles</a>\n          </p>\n\n        </div>\n        <!-- Grid column -->\n\n        <!-- Grid column -->\n        <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4\">\n\n          <!-- Links -->\n          <h6 class=\"text-uppercase font-weight-bold\">Useful links</h6>\n          <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n          <p>\n            <a href=\"https://www.caerusskillmatic.com/industry\">Industry</a>\n          </p>\n          <p>\n            <a href =\"https://www.caerusskillmatic.com/experts%20&%20mentors\">Experts & Mentors</a>\n          </p>\n          <p>\n            <a href=\"https://www.caerusskillmatic.com/skill%20seeker\"> skill Seeker</a>\n          </p>\n          <p>\n            <a href=\"https://www.caerusskillmatic.com/skill%20provider\">Skill Provider</a>\n          </p>\n          <p>\n            <a href=\"https://www.caerusskillmatic.com/institutions\">Institutions</a>\n          </p>\n\n        </div>\n        <!-- Grid column -->\n\n        <!-- Grid column -->\n        <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4\">\n\n          <!-- Links -->\n          <h6 class=\"text-uppercase font-weight-bold\">Contact</h6>\n          <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n          <p>\n            <i class=\"fas fa-home mr-3\"></i> Tvs-TS ,Technical Training Center,Ambattur, Chennai</p>\n          <p>\n            <i class=\"fas fa-envelope mr-3\"></i>krishnakumar.p@tvsts.com</p>\n          <p>\n            <i class=\"fas fa-phone mr-3\"></i> 9677760882</p>\n          <p>\n            <i class=\"fas fa-print mr-3\"></i> 044 26136609</p>\n\n        </div>\n        <!-- Grid column -->\n\n      </div>\n      <!-- Grid row -->\n\n    </div>\n    <!-- Footer Links -->\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2019 Copyright:\n      <a href=\"https://caerusskillmatic.com/\"> caerusskillmatic.com</a>\n    </div>\n    <!-- Copyright -->\n\n  </footer>\n  <!-- Footer -->\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"background-color:#191970\" >\n    <div style = \"text-align:left\">\n<h3>The <br>Age<br>of</h3>\n<div style=\"text-align:right \"> <h1>Smart Manufacturing</h1></div>  -->\n<nav class=\"navbar navbar-dark bg-dark mb-5\">\n        <a class=\"navbar-brand\" href=\"https://www.caerusskillmatic.com/\"><img src=\"assets/image/our.jpg\" style=\"height:1%;width: 50px;\">SkillMatic</a>\n        <div class=\"navbar-expand mr-auto\">\n          <div class=\"navbar-nav\">\n            <a class=\"nav-item nav-link active\" href=\"https://lms.caerusskillmatic.com/index\">Tutorials</a>\n            <a class=\"nav-item nav-link\" href=\"#aboutprog\">About The program</a>\n            <a class=\"nav-item nav-link\" href=\"Contact\">Contact</a>\n          </div>\n        </div>\n        <div class=\"navbar-expand ml-auto navbar-nav\">\n          <div class=\"navbar-nav\">\n            \n            <a class=\"nav-item nav-link\" href=\"https://twitter.com/skillmaticindia\" target=\"_blank\">\n              <i class=\"fa fa-twitter\"></i>\n            </a>\n            <a class=\"nav-item nav-link\" href=\"https://www.facebook.com/skillmaticindia/\" target=\"_blank\">\n              <i class=\"fa fa-facebook\"></i>\n            </a>\n          </div>\n        </div>\n      </nav>\n        \n    \n   \n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Akshay Reddy\Desktop\onedrive\OneDrive - Caerus Skillmatic India Pvt Ltd\samrt manufacturing\samrt manufacturing\smartmanu\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map