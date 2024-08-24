"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmazonWarehousingAndDistributionClient = void 0;
const amazon_warehousing_and_distribution_model_1 = require("../api-models/amazon-warehousing-and-distribution-model");
const helpers_1 = require("../helpers");
const types_1 = require("../types");
class AmazonWarehousingAndDistributionClient extends amazon_warehousing_and_distribution_model_1.AwdApi {
    constructor(parameters) {
        const axios = helpers_1.ApiClientHelpers.getAxiosInstance(parameters);
        const configuration = new amazon_warehousing_and_distribution_model_1.Configuration(parameters);
        super(configuration, types_1.DEFAULT_API_BASE_PATH, axios);
    }
}
exports.AmazonWarehousingAndDistributionClient = AmazonWarehousingAndDistributionClient;
//# sourceMappingURL=amazon-warehousing-and-distribution-client.js.map