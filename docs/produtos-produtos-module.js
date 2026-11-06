(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["produtos-produtos-module"],{

/***/ "KhvX":
/*!************************************************!*\
  !*** ./src/app/produtos/produtos.component.ts ***!
  \************************************************/
/*! exports provided: ProdutosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosComponent", function() { return ProdutosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _produtos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../produtos.service */ "x1xk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ProdutosComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Comprar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const produto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/produtos/", produto_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", produto_r1.imagem, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", produto_r1.descricao, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, produto_r1.preco, "BRL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", produto_r1.descricaoPreco, " ");
} }
class ProdutosComponent {
    constructor(produtosService, route) {
        this.produtosService = produtosService;
        this.route = route;
    }
    ngOnInit() {
        const produtos = this.produtosService.getAll();
        this.route.queryParamMap.subscribe(params => {
            var _a;
            const descricao = (_a = params.get("descricao")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            if (descricao) {
                this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
                return;
            }
            this.produtos = produtos;
        });
    }
}
ProdutosComponent.ɵfac = function ProdutosComponent_Factory(t) { return new (t || ProdutosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ProdutosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProdutosComponent, selectors: [["app-produtos"]], decls: 2, vars: 1, consts: [[1, "product-list"], ["class", "product-list__card", 4, "ngFor", "ngForOf"], [1, "product-list__card"], [1, "product-list__link", 3, "routerLink"], [3, "src"], [1, "product-item__name"], [1, "product-item__price"], [1, "product-item__price-description"], [1, "product-item__buy-button"]], template: function ProdutosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProdutosComponent_div_1_Template, 12, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.produtos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".product-list[_ngcontent-%COMP%] {\r\n    padding: 40px 0;\r\n    width: -moz-fit-content;\r\n    width: fit-content;    \r\n    display: flex;\r\n    gap: 20px;\r\n    flex-flow: row wrap;  \r\n    justify-content: space-evenly;\r\n    align-content: center;  \r\n}\r\n\r\n.product-list__card[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n    border-radius: 4px;\r\n    flex: 0 1 270px;\r\n    height: 450px;\r\n    background-color: white;\r\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;       \r\n}\r\n\r\n.product-list__card[_ngcontent-%COMP%]:hover {\r\n    outline: 1px solid var(--blue);\r\n    transform: scale(1.1, 1.1);\r\n    cursor: pointer;\r\n}\r\n\r\n.product-list__link[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;    \r\n    align-items: center;\r\n    row-gap: 10px; \r\n    text-decoration: none;\r\n}\r\n\r\n.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 250px;\r\n    width: 250px;    \r\n    display: block;\r\n    border-radius: 4px;\r\n}\r\n\r\n.product-item__name[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    color: var(--blue);\r\n}\r\n\r\n.product-item__price[_ngcontent-%COMP%] {\r\n    color: var(--orange);\r\n    font-size: 32px;\r\n    font-weight: bold;\r\n}\r\n\r\n.product-item__price-deion[_ngcontent-%COMP%] {\r\n    color: var(--gray);\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n}\r\n\r\n.product-item__buy-button[_ngcontent-%COMP%] {\r\n    background-color: var(--blue);\r\n    border: none;\r\n    color: white;\r\n    font-size: 20px;\r\n    padding: 6px 12px;\r\n}\r\n\r\n.product-item__buy-button[_ngcontent-%COMP%]:hover {\r\n    filter: brightness(1.1);\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1dG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25CIiwiZmlsZSI6InByb2R1dG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1saXN0IHtcclxuICAgIHBhZGRpbmc6IDQwcHggMDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDsgICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDsgIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICBcclxufVxyXG5cclxuLnByb2R1Y3QtbGlzdF9fY2FyZCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZsZXg6IDAgMSAyNzBweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7ICAgICAgIFxyXG59XHJcblxyXG4ucHJvZHVjdC1saXN0X19jYXJkOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJvZHVjdC1saXN0X19saW5rIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICByb3ctZ2FwOiAxMHB4OyBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnByb2R1Y3QtbGlzdF9fY2FyZCBpbWcge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAyNTBweDsgICAgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnByb2R1Y3QtaXRlbV9fbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWl0ZW1fX3ByaWNlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWl0ZW1fX3ByaWNlLWRlaW9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pdGVtX19idXktYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWl0ZW1fX2J1eS1idXR0b246aG92ZXIge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "UrR6":
/*!*************************************************************************!*\
  !*** ./src/app/produtos/detalhes-produto/detalhes-produto.component.ts ***!
  \*************************************************************************/
/*! exports provided: DetalhesProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesProdutoComponent", function() { return DetalhesProdutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_produtos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/produtos.service */ "x1xk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_notificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/notificacao.service */ "RlnM");
/* harmony import */ var src_app_carrinho_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/carrinho.service */ "jtj5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







class DetalhesProdutoComponent {
    constructor(produtosService, route, notificacaoService, carrinhoService) {
        this.produtosService = produtosService;
        this.route = route;
        this.notificacaoService = notificacaoService;
        this.carrinhoService = carrinhoService;
        this.quantidade = 1;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const produtoId = Number(params.get("id"));
            this.produto = this.produtosService.getOne(produtoId);
        });
    }
    adicionarAoCarrinho() {
        this.notificacaoService.notificar("O produto foi adicionado ao carrinho!");
        const produto = Object.assign(Object.assign({}, this.produto), { quantidade: this.quantidade });
        this.carrinhoService.adicionarAoCarrinho(produto);
    }
}
DetalhesProdutoComponent.ɵfac = function DetalhesProdutoComponent_Factory(t) { return new (t || DetalhesProdutoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_notificacao_service__WEBPACK_IMPORTED_MODULE_3__["NotificacaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_carrinho_service__WEBPACK_IMPORTED_MODULE_4__["CarrinhoService"])); };
DetalhesProdutoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetalhesProdutoComponent, selectors: [["app-detalhes-produto"]], decls: 19, vars: 8, consts: [[1, "product__container"], [1, "product-image__container"], [3, "src"], [1, "product-description__container"], [1, "product__name"], [1, "product__price"], ["type", "number", "min", "1", 3, "ngModel", "ngModelChange"], [1, "product__avaiability"], [3, "click"]], template: function DetalhesProdutoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Estoque dispon\u00EDvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Quantidade: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalhesProdutoComponent_Template_input_ngModelChange_13_listener($event) { return ctx.quantidade = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " unidade(s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalhesProdutoComponent_Template_button_click_17_listener() { return ctx.adicionarAoCarrinho(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Adicionar ao carrinho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.produto == null ? null : ctx.produto.imagem, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.produto == null ? null : ctx.produto.descricao);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx.produto == null ? null : ctx.produto.preco, "BRL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quantidade);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.produto == null ? null : ctx.produto.quantidadeEstoque, " unidade(s) em estoque ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: [".product__container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    column-gap: 20px;\r\n    margin: 20px 0;\r\n}\r\n\r\n.product-image__container[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n}\r\n\r\n.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 350px;\r\n    height: 350px;\r\n}\r\n\r\n.product__name[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n}\r\n\r\n.product__price[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n    font-weight: 400;\r\n    margin: 20px 0 20px;\r\n}\r\n\r\n.product-description__container[_ngcontent-%COMP%] {\r\n    border: 1px solid var(--light-gray);\r\n    border-radius: 8px;\r\n    padding: 15px;\r\n    flex: 1;\r\n}\r\n\r\n.product__avaiability[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n    display: block;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    padding: 5px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background-color: var(--blue);\r\n    border: none;\r\n    padding: 10px;\r\n    color: white;\r\n    font-size: 24px;\r\n    transition: .3s all;\r\n    margin: 20px 0;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    filter: brightness(1.3);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsaGVzLXByb2R1dG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsT0FBTztBQUNYOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLFNBQVM7QUFDWDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6ImRldGFsaGVzLXByb2R1dG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0X19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW1hZ2VfX2NvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19jb250YWluZXIgaW1nIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX3ByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDIwcHggMCAyMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1kZXNjcmlwdGlvbl9fY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19hdmFpYWJpbGl0eSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgYWxsO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "eRQt":
/*!*********************************************!*\
  !*** ./src/app/produtos/produtos.module.ts ***!
  \*********************************************/
/*! exports provided: ProdutosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosModule", function() { return ProdutosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _produtos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./produtos-routing.module */ "q/Yj");
/* harmony import */ var _produtos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./produtos.component */ "KhvX");
/* harmony import */ var _detalhes_produto_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalhes-produto/detalhes-produto.component */ "UrR6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ProdutosModule {
}
ProdutosModule.ɵfac = function ProdutosModule_Factory(t) { return new (t || ProdutosModule)(); };
ProdutosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ProdutosModule });
ProdutosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _produtos_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProdutosRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProdutosModule, { declarations: [_produtos_component__WEBPACK_IMPORTED_MODULE_2__["ProdutosComponent"],
        _detalhes_produto_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_3__["DetalhesProdutoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _produtos_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProdutosRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();


/***/ }),

/***/ "q/Yj":
/*!*****************************************************!*\
  !*** ./src/app/produtos/produtos-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProdutosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosRoutingModule", function() { return ProdutosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _produtos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./produtos.component */ "KhvX");
/* harmony import */ var _detalhes_produto_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhes-produto/detalhes-produto.component */ "UrR6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _produtos_component__WEBPACK_IMPORTED_MODULE_1__["ProdutosComponent"] },
    { path: ':id', component: _detalhes_produto_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_2__["DetalhesProdutoComponent"] }
];
class ProdutosRoutingModule {
}
ProdutosRoutingModule.ɵfac = function ProdutosRoutingModule_Factory(t) { return new (t || ProdutosRoutingModule)(); };
ProdutosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProdutosRoutingModule });
ProdutosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProdutosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "sY36":
/*!*****************************!*\
  !*** ./src/app/produtos.ts ***!
  \*****************************/
/*! exports provided: produtos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produtos", function() { return produtos; });
const produtos = [
    { id: 1, descricao: "Mouse gamer", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg", quantidadeEstoque: 7 },
    { id: 2, descricao: "Monitor muito bom", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-1.jpg", quantidadeEstoque: 10 },
    { id: 3, descricao: "Teclado excelente", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg", quantidadeEstoque: 8 },
    { id: 4, descricao: "Fone para quem joga FPS", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 10 },
    { id: 5, descricao: "Fone de ouvido", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 15 },
    { id: 6, descricao: "Fone de ouvido bom", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 1 },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg", quantidadeEstoque: 10 },
    { id: 8, descricao: "Combo de placa de vídeos", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg", quantidadeEstoque: 7 },
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg", quantidadeEstoque: 10 },
    { id: 10, descricao: "Notebook bom", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", quantidadeEstoque: 9 },
    { id: 11, descricao: "Notebook excelente", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg", quantidadeEstoque: 10 },
    { id: 12, descricao: "Mouse barato", preco: 20, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.png", quantidadeEstoque: 1 },
    { id: 13, descricao: "Mouse ótimo", preco: 200, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-2.jpg", quantidadeEstoque: 12 },
    { id: 14, descricao: "Mouse pequeno", preco: 50, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg", quantidadeEstoque: 17 },
    { id: 15, descricao: "Teclado bom", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg", quantidadeEstoque: 10 },
];


/***/ }),

/***/ "x1xk":
/*!*************************************!*\
  !*** ./src/app/produtos.service.ts ***!
  \*************************************/
/*! exports provided: ProdutosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosService", function() { return ProdutosService; });
/* harmony import */ var _produtos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./produtos */ "sY36");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProdutosService {
    constructor() {
        this.produtos = _produtos__WEBPACK_IMPORTED_MODULE_0__["produtos"];
    }
    getAll() {
        return this.produtos;
    }
    getOne(produtoId) {
        return this.produtos.find(produto => produto.id === produtoId);
    }
}
ProdutosService.ɵfac = function ProdutosService_Factory(t) { return new (t || ProdutosService)(); };
ProdutosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProdutosService, factory: ProdutosService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=produtos-produtos-module.js.map