/**
 * Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data
 * The Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data provides programmatic access to vendor direct fulfillment sandbox test data.
 *
 * The version of the OpenAPI document: 2021-10-28
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Configuration } from './configuration';
import { AxiosPromise, AxiosInstance } from 'axios';
import { RequestArgs, BaseAPI } from './base';
/**
 * A list of error responses returned when a request is unsuccessful.
 * @export
 * @interface ErrorList
 */
export interface ErrorList {
    /**
     * An array of individual error objects that contain error details.
     * @type {Array<Error>}
     * @memberof ErrorList
     */
    errors: Array<Error>;
}
/**
 * The `generateOrderScenarios` request body.
 * @export
 * @interface GenerateOrderScenarioRequest
 */
export interface GenerateOrderScenarioRequest {
    /**
     * The list of test orders requested as indicated by party identifiers.
     * @type {Array<OrderScenarioRequest>}
     * @memberof GenerateOrderScenarioRequest
     */
    orders?: Array<OrderScenarioRequest>;
}
/**
 * Error response returned when the request is unsuccessful.
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * An error code that identifies the type of error that occurred.
     * @type {string}
     * @memberof ModelError
     */
    code: string;
    /**
     * A message that describes the error condition.
     * @type {string}
     * @memberof ModelError
     */
    message: string;
    /**
     * Additional details that can help the caller understand or fix the issue.
     * @type {string}
     * @memberof ModelError
     */
    details?: string;
}
/**
 * The party identifiers required to generate the test data.
 * @export
 * @interface OrderScenarioRequest
 */
export interface OrderScenarioRequest {
    /**
     *
     * @type {PartyIdentification}
     * @memberof OrderScenarioRequest
     */
    sellingParty: PartyIdentification;
    /**
     *
     * @type {PartyIdentification}
     * @memberof OrderScenarioRequest
     */
    shipFromParty: PartyIdentification;
}
/**
 * A generated string used to pass information to your next request. If `NextToken` is returned, pass the value of `NextToken` to the next request. If `NextToken` is not returned, there are no more order items to return.
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * A generated token that retrieves the next set of results. This token is specified in the next request.
     * @type {string}
     * @memberof Pagination
     */
    nextToken?: string;
}
/**
 * The identification object for the party information. For example, warehouse code or vendor code.
 * @export
 * @interface PartyIdentification
 */
export interface PartyIdentification {
    /**
     * Assigned identification for the party. For example, warehouse code or vendor code.
     * @type {string}
     * @memberof PartyIdentification
     */
    partyId: string;
}
/**
 * A scenario test case response returned when the request is successful.
 * @export
 * @interface Scenario
 */
export interface Scenario {
    /**
     * An identifier that identifies the type of scenario that user can use for testing.
     * @type {string}
     * @memberof Scenario
     */
    scenarioId: string;
    /**
     * A list of orders that can be used by the caller to test each life cycle or scenario.
     * @type {Array<TestOrder>}
     * @memberof Scenario
     */
    orders: Array<TestOrder>;
}
/**
 * The set of test case data returned in response to the test data request.
 * @export
 * @interface TestCaseData
 */
export interface TestCaseData {
    /**
     * Set of use cases that describes the possible test scenarios.
     * @type {Array<Scenario>}
     * @memberof TestCaseData
     */
    scenarios?: Array<Scenario>;
}
/**
 * Error response returned when the request is unsuccessful.
 * @export
 * @interface TestOrder
 */
export interface TestOrder {
    /**
     * An error code that identifies the type of error that occurred.
     * @type {string}
     * @memberof TestOrder
     */
    orderId: string;
}
/**
 * The transaction details that include the status. If the transaction is successful, also includes the requested test order data.
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * The unique identifier returned in the response for the `generateOrderScenarios` request.
     * @type {string}
     * @memberof Transaction
     */
    transactionId: string;
    /**
     * The current processing status of the transaction.
     * @type {string}
     * @memberof Transaction
     */
    status: TransactionStatusEnum | 'FAILURE' | 'PROCESSING' | 'SUCCESS';
    /**
     *
     * @type {TestCaseData}
     * @memberof Transaction
     */
    testCaseData?: TestCaseData;
}
/**
    * @export
    * @enum {string}
    */
export declare enum TransactionStatusEnum {
    Failure = "FAILURE",
    Processing = "PROCESSING",
    Success = "SUCCESS"
}
/**
 * A GUID assigned by Amazon to identify this transaction.
 * @export
 * @interface TransactionReference
 */
export interface TransactionReference {
    /**
     * A GUID (Globally Unique Identifier) assigned by Amazon to uniquely identify the transaction.
     * @type {string}
     * @memberof TransactionReference
     */
    transactionId?: string;
}
/**
 * The payload for `getOrderScenarios`.
 * @export
 * @interface TransactionStatus
 */
export interface TransactionStatus {
    /**
     *
     * @type {Transaction}
     * @memberof TransactionStatus
     */
    transactionStatus?: Transaction;
}
/**
 * VendorDFSandboxApi - axios parameter creator
 * @export
 */
export declare const VendorDFSandboxApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Submits a request to generate test order data for Vendor Direct Fulfillment API entities.
     * @param {GenerateOrderScenarioRequest} body The request payload that contain parameters to generate test order data scenarios.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateOrderScenarios: (body: GenerateOrderScenarioRequest, options?: any) => Promise<RequestArgs>;
};
/**
 * VendorDFSandboxApi - functional programming interface
 * @export
 */
export declare const VendorDFSandboxApiFp: (configuration?: Configuration) => {
    /**
     * Submits a request to generate test order data for Vendor Direct Fulfillment API entities.
     * @param {GenerateOrderScenarioRequest} body The request payload that contain parameters to generate test order data scenarios.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateOrderScenarios(body: GenerateOrderScenarioRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionReference>>;
};
/**
 * VendorDFSandboxApi - factory interface
 * @export
 */
export declare const VendorDFSandboxApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Submits a request to generate test order data for Vendor Direct Fulfillment API entities.
     * @param {GenerateOrderScenarioRequest} body The request payload that contain parameters to generate test order data scenarios.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateOrderScenarios(body: GenerateOrderScenarioRequest, options?: any): AxiosPromise<TransactionReference>;
};
/**
 * Request parameters for generateOrderScenarios operation in VendorDFSandboxApi.
 * @export
 * @interface VendorDFSandboxApiGenerateOrderScenariosRequest
 */
export interface VendorDFSandboxApiGenerateOrderScenariosRequest {
    /**
     * The request payload that contain parameters to generate test order data scenarios.
     * @type {GenerateOrderScenarioRequest}
     * @memberof VendorDFSandboxApiGenerateOrderScenarios
     */
    readonly body: GenerateOrderScenarioRequest;
}
/**
 * VendorDFSandboxApi - object-oriented interface
 * @export
 * @class VendorDFSandboxApi
 * @extends {BaseAPI}
 */
export declare class VendorDFSandboxApi extends BaseAPI {
    /**
     * Submits a request to generate test order data for Vendor Direct Fulfillment API entities.
     * @param {VendorDFSandboxApiGenerateOrderScenariosRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorDFSandboxApi
     */
    generateOrderScenarios(requestParameters: VendorDFSandboxApiGenerateOrderScenariosRequest, options?: any): Promise<import("axios").AxiosResponse<TransactionReference, any>>;
}
/**
 * VendorDFSandboxtransactionstatusApi - axios parameter creator
 * @export
 */
export declare const VendorDFSandboxtransactionstatusApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Retrieves the transaction status identified by the specified `transactionId`, and returns the requested test order data if the transaction is successful.
     * @param {string} transactionId The transaction identifier returned in the response for the &#x60;generateOrderScenarios&#x60; operation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOrderScenarios: (transactionId: string, options?: any) => Promise<RequestArgs>;
};
/**
 * VendorDFSandboxtransactionstatusApi - functional programming interface
 * @export
 */
export declare const VendorDFSandboxtransactionstatusApiFp: (configuration?: Configuration) => {
    /**
     * Retrieves the transaction status identified by the specified `transactionId`, and returns the requested test order data if the transaction is successful.
     * @param {string} transactionId The transaction identifier returned in the response for the &#x60;generateOrderScenarios&#x60; operation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOrderScenarios(transactionId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionStatus>>;
};
/**
 * VendorDFSandboxtransactionstatusApi - factory interface
 * @export
 */
export declare const VendorDFSandboxtransactionstatusApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Retrieves the transaction status identified by the specified `transactionId`, and returns the requested test order data if the transaction is successful.
     * @param {string} transactionId The transaction identifier returned in the response for the &#x60;generateOrderScenarios&#x60; operation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOrderScenarios(transactionId: string, options?: any): AxiosPromise<TransactionStatus>;
};
/**
 * Request parameters for getOrderScenarios operation in VendorDFSandboxtransactionstatusApi.
 * @export
 * @interface VendorDFSandboxtransactionstatusApiGetOrderScenariosRequest
 */
export interface VendorDFSandboxtransactionstatusApiGetOrderScenariosRequest {
    /**
     * The transaction identifier returned in the response for the &#x60;generateOrderScenarios&#x60; operation.
     * @type {string}
     * @memberof VendorDFSandboxtransactionstatusApiGetOrderScenarios
     */
    readonly transactionId: string;
}
/**
 * VendorDFSandboxtransactionstatusApi - object-oriented interface
 * @export
 * @class VendorDFSandboxtransactionstatusApi
 * @extends {BaseAPI}
 */
export declare class VendorDFSandboxtransactionstatusApi extends BaseAPI {
    /**
     * Retrieves the transaction status identified by the specified `transactionId`, and returns the requested test order data if the transaction is successful.
     * @param {VendorDFSandboxtransactionstatusApiGetOrderScenariosRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorDFSandboxtransactionstatusApi
     */
    getOrderScenarios(requestParameters: VendorDFSandboxtransactionstatusApiGetOrderScenariosRequest, options?: any): Promise<import("axios").AxiosResponse<TransactionStatus, any>>;
}
