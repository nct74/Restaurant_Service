"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = exports.UserStatus = void 0;
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["INITIALZED"] = 1] = "INITIALZED";
    UserStatus[UserStatus["UNINITIALZED"] = 0] = "UNINITIALZED";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
var UserRole;
(function (UserRole) {
    UserRole[UserRole["ADMIN"] = 0] = "ADMIN";
    UserRole[UserRole["EMPLOYEE"] = 1] = "EMPLOYEE";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
//# sourceMappingURL=user.constant.js.map