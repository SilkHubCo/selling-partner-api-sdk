"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplySourcesApiClient = void 0;
const supply_sources_api_model_1 = require("../api-models/supply-sources-api-model");
const helpers_1 = require("../helpers");
const types_1 = require("../types");
class SupplySourcesApiClient extends supply_sources_api_model_1.SupplySourcesApi {
    constructor(parameters) {
        const axios = helpers_1.ApiClientHelpers.getAxiosInstance(parameters);
        const configuration = new supply_sources_api_model_1.Configuration(parameters);
        super(configuration, types_1.DEFAULT_API_BASE_PATH, axios);
    }
}
exports.SupplySourcesApiClient = SupplySourcesApiClient;
//# sourceMappingURL=supply-sources-api-client.js.map