"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingApiClientV2 = void 0;
const shipping_api_model_v2_1 = require("../api-models/shipping-api-model-v2");
const helpers_1 = require("../helpers");
const types_1 = require("../types");
class ShippingApiClientV2 extends shipping_api_model_v2_1.ShippingApi {
    constructor(parameters) {
        const axios = helpers_1.ApiClientHelpers.getAxiosInstance(parameters);
        const configuration = new shipping_api_model_v2_1.Configuration(parameters);
        super(configuration, types_1.DEFAULT_API_BASE_PATH, axios);
    }
}
exports.ShippingApiClientV2 = ShippingApiClientV2;
//# sourceMappingURL=shipping-api-client-v2.js.map