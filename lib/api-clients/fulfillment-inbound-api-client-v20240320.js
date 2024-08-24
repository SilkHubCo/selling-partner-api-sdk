"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentInboundApiClientV20240320 = void 0;
const fulfillment_inbound_api_model_v20240320_1 = require("../api-models/fulfillment-inbound-api-model-v20240320");
const helpers_1 = require("../helpers");
const types_1 = require("../types");
class FulfillmentInboundApiClientV20240320 extends fulfillment_inbound_api_model_v20240320_1.FbaInboundApi {
    constructor(parameters) {
        const axios = helpers_1.ApiClientHelpers.getAxiosInstance(parameters);
        const configuration = new fulfillment_inbound_api_model_v20240320_1.Configuration(parameters);
        super(configuration, types_1.DEFAULT_API_BASE_PATH, axios);
    }
}
exports.FulfillmentInboundApiClientV20240320 = FulfillmentInboundApiClientV20240320;
//# sourceMappingURL=fulfillment-inbound-api-client-v20240320.js.map