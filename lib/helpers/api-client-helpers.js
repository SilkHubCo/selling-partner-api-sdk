"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClientHelpers = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants");
const types_1 = require("../types");
const api_error_factory_1 = require("./api-error-factory");
const regions = new Map(Object.entries({
    'us-east-1': [
        'https://sellingpartnerapi-na.amazon.com',
        'https://sandbox.sellingpartnerapi-na.amazon.com',
    ],
    'eu-west-1': [
        'https://sellingpartnerapi-eu.amazon.com',
        'https://sandbox.sellingpartnerapi-eu.amazon.com',
    ],
    'us-west-2': [
        'https://sellingpartnerapi-fe.amazon.com',
        'https://sandbox.sellingpartnerapi-fe.amazon.com',
    ],
}));
exports.ApiClientHelpers = {
    getAxiosInstance(parameters) {
        let axiosInstance;
        const { axios } = parameters;
        if (axios) {
            axiosInstance = axios;
        }
        else {
            const { accessToken } = exports.ApiClientHelpers.validateRegion(parameters);
            axiosInstance = axios_1.default.create({
                headers: {
                    'user-agent': constants_1.USER_AGENT,
                    'x-amz-access-token': accessToken !== null && accessToken !== void 0 ? accessToken : '',
                },
            });
        }
        axiosInstance.interceptors.response.use((response) => response, (error) => {
            throw (0, api_error_factory_1.apiErrorFactory)(error);
        });
        return axiosInstance;
    },
    extractRegion(basePath) {
        for (const [region, basePaths] of regions) {
            if (basePaths.includes(basePath)) {
                return region;
            }
        }
        throw new types_1.SellingPartnerNotFoundRegionError(basePath);
    },
    validateRegion(parameters) {
        if (parameters.basePath && !parameters.region) {
            return {
                ...parameters,
                region: exports.ApiClientHelpers.extractRegion(parameters.basePath),
            };
        }
        if (!parameters.basePath && !parameters.region) {
            return {
                ...parameters,
                region: exports.ApiClientHelpers.extractRegion(types_1.DEFAULT_API_BASE_PATH),
            };
        }
        if (!parameters.basePath && parameters.region) {
            const defaultRegion = exports.ApiClientHelpers.extractRegion(types_1.DEFAULT_API_BASE_PATH);
            if (defaultRegion !== parameters.region) {
                throw new types_1.SellingPartnerMismatchRegionError(defaultRegion, parameters.region);
            }
        }
        return parameters;
    },
};
//# sourceMappingURL=api-client-helpers.js.map