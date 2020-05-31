"use strict";
exports.__esModule = true;
var Observable = /** @class */ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        //
    };
    return Observable;
}());
exports.Observable = Observable;
