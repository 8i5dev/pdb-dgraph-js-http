"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPError = exports.APIError = exports.CustomError = exports.ERR_BEST_EFFORT_REQUIRED_READ_ONLY = exports.ERR_ABORTED = exports.ERR_FINISHED = exports.ERR_NO_CLIENTS = void 0;
exports.ERR_NO_CLIENTS = new Error("No clients provided in DgraphClient constructor");
exports.ERR_FINISHED = new Error("Transaction has already been committed or discarded");
exports.ERR_ABORTED = new Error("Transaction has been aborted. Please retry");
exports.ERR_BEST_EFFORT_REQUIRED_READ_ONLY = new Error("Best effort only works for read-only queries");
var CustomError = (function (_super) {
    __extends(CustomError, _super);
    function CustomError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.name = _newTarget.name;
        var setPrototypeOf = Object.setPrototypeOf;
        setPrototypeOf !== undefined
            ? setPrototypeOf(_this, _newTarget.prototype)
            : (_this.__proto__ = _newTarget.prototype);
        var captureStackTrace = Error.captureStackTrace;
        if (captureStackTrace !== undefined) {
            captureStackTrace(_this, _this.constructor);
        }
        return _this;
    }
    return CustomError;
}(Error));
exports.CustomError = CustomError;
var APIError = (function (_super) {
    __extends(APIError, _super);
    function APIError(url, errors) {
        var _this = _super.call(this, errors.length > 0 ? errors[0].message : "API returned errors") || this;
        _this.url = url;
        _this.errors = errors;
        return _this;
    }
    return APIError;
}(CustomError));
exports.APIError = APIError;
var HTTPError = (function (_super) {
    __extends(HTTPError, _super);
    function HTTPError(response) {
        var _this = _super.call(this, "Invalid status code = ".concat(response.status)) || this;
        _this.errorResponse = response;
        return _this;
    }
    return HTTPError;
}(CustomError));
exports.HTTPError = HTTPError;
