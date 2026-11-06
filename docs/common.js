(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "RlnM":
/*!****************************************!*\
  !*** ./src/app/notificacao.service.ts ***!
  \****************************************/
/*! exports provided: NotificacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacaoService", function() { return NotificacaoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");


class NotificacaoService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    notificar(mensagem) {
        this.snackBar.open(mensagem, "Okay", {
            duration: 2000,
            verticalPosition: "top",
            horizontalPosition: "center"
        });
    }
}
NotificacaoService.ɵfac = function NotificacaoService_Factory(t) { return new (t || NotificacaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
NotificacaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificacaoService, factory: NotificacaoService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map