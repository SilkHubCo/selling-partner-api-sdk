"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiErrorFactory = apiErrorFactory;
const http_status_codes_1 = require("http-status-codes");
const types_1 = require("../types");
function isAPIModelError(data) {
    var _a;
    return (_a = data.errors) === null || _a === void 0 ? void 0 : _a.every((element) => 'code' in element && 'message' in element);
}
function apiErrorFactory(error) {
    const { response, code, message } = error;
    if (response) {
        const { headers, data, status } = response;
        if (isAPIModelError(data)) {
            const modelError = data.errors.shift();
            if (modelError === undefined) {
                return new types_1.SellingPartnerUnknownError({
                    modelError: {
                        code: code || 'UnknownError',
                        message,
                    },
                    headers,
                    cause: error,
                });
            }
            const errorParameters = { modelError, headers, cause: error };
            switch (status) {
                case http_status_codes_1.StatusCodes.BAD_REQUEST: {
                    return new types_1.SellingPartnerBadRequestError(errorParameters);
                }
                case http_status_codes_1.StatusCodes.FORBIDDEN: {
                    return new types_1.SellingPartnerForbiddenError(errorParameters);
                }
                case http_status_codes_1.StatusCodes.NOT_FOUND: {
                    return new types_1.SellingPartnerNotFoundError(errorParameters);
                }
                case http_status_codes_1.StatusCodes.REQUEST_TOO_LONG: {
                    return new types_1.SellingPartnerRequestTooLongError(errorParameters);
                }
                case http_status_codes_1.StatusCodes.UNSUPPORTED_MEDIA_TYPE: {
                    return new types_1.SellingPartnerUnsupportedMediaTypeError(errorParameters);
                }
                case http_status_codes_1.StatusCodes.TOO_MANY_REQUESTS: {
                    return new types_1.SellingPartnerTooManyRequestsError(errorParameters);
                }
                case http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR: {
                    return new types_1.SellingPartnerInternalServerError(errorParameters);
                }
                case http_status_codes_1.StatusCodes.SERVICE_UNAVAILABLE: {
                    return new types_1.SellingPartnerServiceUnavailableError(errorParameters);
                }
                default: {
                    return new types_1.SellingPartnerGenericError(errorParameters);
                }
            }
        }
    }
    return error;
}
//# sourceMappingURL=api-error-factory.js.map