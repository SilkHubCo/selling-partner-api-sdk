"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationManagementApiClient = void 0;
const application_management_api_model_1 = require("../api-models/application-management-api-model");
const helpers_1 = require("../helpers");
const types_1 = require("../types");
class ApplicationManagementApiClient extends application_management_api_model_1.ApplicationsApi {
    constructor(parameters) {
        const axios = helpers_1.ApiClientHelpers.getAxiosInstance(parameters);
        const configuration = new application_management_api_model_1.Configuration(parameters);
        super(configuration, types_1.DEFAULT_API_BASE_PATH, axios);
    }
}
exports.ApplicationManagementApiClient = ApplicationManagementApiClient;
//# sourceMappingURL=application-management-api-client.js.map