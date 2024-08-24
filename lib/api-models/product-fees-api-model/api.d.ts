/**
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
 *
 * The version of the OpenAPI document: v0
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
 * The type of fee, fee amount, and other details.
 * @export
 * @interface FeeDetail
 */
export interface FeeDetail {
    /**
     * The type of fee charged to a seller.
     * @type {string}
     * @memberof FeeDetail
     */
    FeeType: string;
    /**
     *
     * @type {MoneyType}
     * @memberof FeeDetail
     */
    FeeAmount: MoneyType;
    /**
     *
     * @type {MoneyType}
     * @memberof FeeDetail
     */
    FeePromotion?: MoneyType;
    /**
     *
     * @type {MoneyType}
     * @memberof FeeDetail
     */
    TaxAmount?: MoneyType;
    /**
     *
     * @type {MoneyType}
     * @memberof FeeDetail
     */
    FinalFee: MoneyType;
    /**
     * A list of other fees that contribute to a given fee.
     * @type {Array<IncludedFeeDetail>}
     * @memberof FeeDetail
     */
    IncludedFeeDetailList?: Array<IncludedFeeDetail>;
}
/**
 * The total estimated fees for an item and a list of details.
 * @export
 * @interface FeesEstimate
 */
export interface FeesEstimate {
    /**
     * The time at which the fees were estimated. This defaults to the time the request is made.
     * @type {string}
     * @memberof FeesEstimate
     */
    TimeOfFeesEstimation: string;
    /**
     *
     * @type {MoneyType}
     * @memberof FeesEstimate
     */
    TotalFeesEstimate?: MoneyType;
    /**
     * A list of other fees that contribute to a given fee.
     * @type {Array<FeeDetail>}
     * @memberof FeesEstimate
     */
    FeeDetailList?: Array<FeeDetail>;
}
/**
 * A product, marketplace, and proposed price used to request estimated fees.
 * @export
 * @interface FeesEstimateByIdRequest
 */
export interface FeesEstimateByIdRequest {
    /**
     *
     * @type {FeesEstimateRequest}
     * @memberof FeesEstimateByIdRequest
     */
    FeesEstimateRequest?: FeesEstimateRequest;
    /**
     *
     * @type {IdType}
     * @memberof FeesEstimateByIdRequest
     */
    IdType: IdType | 'ASIN' | 'SellerSKU';
    /**
     * The item identifier.
     * @type {string}
     * @memberof FeesEstimateByIdRequest
     */
    IdValue: string;
}
/**
 * An unexpected error occurred during this operation.
 * @export
 * @interface FeesEstimateError
 */
export interface FeesEstimateError {
    /**
     * An error type, identifying either the receiver or the sender as the originator of the error.
     * @type {string}
     * @memberof FeesEstimateError
     */
    Type: string;
    /**
     * An error code that identifies the type of error that occurred.
     * @type {string}
     * @memberof FeesEstimateError
     */
    Code: string;
    /**
     * A message that describes the error condition.
     * @type {string}
     * @memberof FeesEstimateError
     */
    Message: string;
    /**
     * Additional information that can help the caller understand or fix the issue.
     * @type {Array<object>}
     * @memberof FeesEstimateError
     */
    Detail: Array<object>;
}
/**
 * An item identifier, marketplace, time of request, and other details that identify an estimate.
 * @export
 * @interface FeesEstimateIdentifier
 */
export interface FeesEstimateIdentifier {
    /**
     * A marketplace identifier.
     * @type {string}
     * @memberof FeesEstimateIdentifier
     */
    MarketplaceId?: string;
    /**
     * The seller identifier.
     * @type {string}
     * @memberof FeesEstimateIdentifier
     */
    SellerId?: string;
    /**
     *
     * @type {IdType}
     * @memberof FeesEstimateIdentifier
     */
    IdType?: IdType | 'ASIN' | 'SellerSKU';
    /**
     * The item identifier.
     * @type {string}
     * @memberof FeesEstimateIdentifier
     */
    IdValue?: string;
    /**
     * When true, the offer is fulfilled by Amazon.
     * @type {boolean}
     * @memberof FeesEstimateIdentifier
     */
    IsAmazonFulfilled?: boolean;
    /**
     *
     * @type {PriceToEstimateFees}
     * @memberof FeesEstimateIdentifier
     */
    PriceToEstimateFees?: PriceToEstimateFees;
    /**
     * A unique identifier provided by the caller to track this request.
     * @type {string}
     * @memberof FeesEstimateIdentifier
     */
    SellerInputIdentifier?: string;
    /**
     *
     * @type {OptionalFulfillmentProgram}
     * @memberof FeesEstimateIdentifier
     */
    OptionalFulfillmentProgram?: OptionalFulfillmentProgram | 'FBA_CORE' | 'FBA_SNL' | 'FBA_EFN';
}
/**
 * A product, marketplace, and proposed price used to request estimated fees.
 * @export
 * @interface FeesEstimateRequest
 */
export interface FeesEstimateRequest {
    /**
     * A marketplace identifier.
     * @type {string}
     * @memberof FeesEstimateRequest
     */
    MarketplaceId: string;
    /**
     * When true, the offer is fulfilled by Amazon.
     * @type {boolean}
     * @memberof FeesEstimateRequest
     */
    IsAmazonFulfilled?: boolean;
    /**
     *
     * @type {PriceToEstimateFees}
     * @memberof FeesEstimateRequest
     */
    PriceToEstimateFees: PriceToEstimateFees;
    /**
     * A unique identifier provided by the caller to track this request.
     * @type {string}
     * @memberof FeesEstimateRequest
     */
    Identifier: string;
    /**
     *
     * @type {OptionalFulfillmentProgram}
     * @memberof FeesEstimateRequest
     */
    OptionalFulfillmentProgram?: OptionalFulfillmentProgram | 'FBA_CORE' | 'FBA_SNL' | 'FBA_EFN';
}
/**
 * An item identifier and the estimated fees for the item.
 * @export
 * @interface FeesEstimateResult
 */
export interface FeesEstimateResult {
    /**
     * The status of the fee request. Possible values: Success, ClientError, ServiceError.
     * @type {string}
     * @memberof FeesEstimateResult
     */
    Status?: string;
    /**
     *
     * @type {FeesEstimateIdentifier}
     * @memberof FeesEstimateResult
     */
    FeesEstimateIdentifier?: FeesEstimateIdentifier;
    /**
     *
     * @type {FeesEstimate}
     * @memberof FeesEstimateResult
     */
    FeesEstimate?: FeesEstimate;
    /**
     *
     * @type {FeesEstimateError}
     * @memberof FeesEstimateResult
     */
    Error?: FeesEstimateError;
}
/**
 * Request schema.
 * @export
 * @interface GetMyFeesEstimateRequest
 */
export interface GetMyFeesEstimateRequest {
    /**
     *
     * @type {FeesEstimateRequest}
     * @memberof GetMyFeesEstimateRequest
     */
    FeesEstimateRequest?: FeesEstimateRequest;
}
/**
 *
 * @export
 * @interface GetMyFeesEstimateResponse
 */
export interface GetMyFeesEstimateResponse {
    /**
     *
     * @type {GetMyFeesEstimateResult}
     * @memberof GetMyFeesEstimateResponse
     */
    payload?: GetMyFeesEstimateResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetMyFeesEstimateResponse
     */
    errors?: Array<Error>;
}
/**
 * Response schema.
 * @export
 * @interface GetMyFeesEstimateResult
 */
export interface GetMyFeesEstimateResult {
    /**
     *
     * @type {FeesEstimateResult}
     * @memberof GetMyFeesEstimateResult
     */
    FeesEstimateResult?: FeesEstimateResult;
}
/**
 * A list of error responses returned when a request is unsuccessful.
 * @export
 * @interface GetMyFeesEstimatesErrorList
 */
export interface GetMyFeesEstimatesErrorList {
    /**
     *
     * @type {Array<Error>}
     * @memberof GetMyFeesEstimatesErrorList
     */
    errors: Array<Error>;
}
/**
 * The type of product identifier used in a `FeesEstimateByIdRequest`.
 * @export
 * @enum {string}
 */
export declare enum IdType {
    Asin = "ASIN",
    SellerSku = "SellerSKU"
}
/**
 * The type of fee, fee amount, and other details.
 * @export
 * @interface IncludedFeeDetail
 */
export interface IncludedFeeDetail {
    /**
     * The type of fee charged to a seller.
     * @type {string}
     * @memberof IncludedFeeDetail
     */
    FeeType: string;
    /**
     *
     * @type {MoneyType}
     * @memberof IncludedFeeDetail
     */
    FeeAmount: MoneyType;
    /**
     *
     * @type {MoneyType}
     * @memberof IncludedFeeDetail
     */
    FeePromotion?: MoneyType;
    /**
     *
     * @type {MoneyType}
     * @memberof IncludedFeeDetail
     */
    TaxAmount?: MoneyType;
    /**
     *
     * @type {MoneyType}
     * @memberof IncludedFeeDetail
     */
    FinalFee: MoneyType;
}
/**
 *
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
 *
 * @export
 * @interface MoneyType
 */
export interface MoneyType {
    /**
     * The currency code in ISO 4217 format.
     * @type {string}
     * @memberof MoneyType
     */
    CurrencyCode?: string;
    /**
     * The monetary value.
     * @type {number}
     * @memberof MoneyType
     */
    Amount?: number;
}
/**
 * An optional enrollment program to return the estimated fees when the offer is fulfilled by Amazon (IsAmazonFulfilled is set to true).
 * @export
 * @enum {string}
 */
export declare enum OptionalFulfillmentProgram {
    Core = "FBA_CORE",
    Snl = "FBA_SNL",
    Efn = "FBA_EFN"
}
/**
 *
 * @export
 * @interface Points
 */
export interface Points {
    /**
     *
     * @type {number}
     * @memberof Points
     */
    PointsNumber?: number;
    /**
     *
     * @type {MoneyType}
     * @memberof Points
     */
    PointsMonetaryValue?: MoneyType;
}
/**
 * Price information for an item, used to estimate fees.
 * @export
 * @interface PriceToEstimateFees
 */
export interface PriceToEstimateFees {
    /**
     *
     * @type {MoneyType}
     * @memberof PriceToEstimateFees
     */
    ListingPrice: MoneyType;
    /**
     *
     * @type {MoneyType}
     * @memberof PriceToEstimateFees
     */
    Shipping?: MoneyType;
    /**
     *
     * @type {Points}
     * @memberof PriceToEstimateFees
     */
    Points?: Points;
}
/**
 * FeesApi - axios parameter creator
 * @export
 */
export declare const FeesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body.  You can call `getMyFeesEstimateForASIN` for an item on behalf of a selling partner before the selling partner sets the item\'s price. The selling partner can then take estimated fees into account. Each fees request must include an original identifier. This identifier is included in the fees estimate so you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When using the `getMyFeesEstimateForASIN` operation with an ASIN, the fee estimates might be different. This is because these estimates use the item\'s catalog size, which might not always match the actual size of the item sent to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {string} asin The Amazon Standard Identification Number (ASIN) of the item.
     * @param {GetMyFeesEstimateRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMyFeesEstimateForASIN: (asin: string, body: GetMyFeesEstimateRequest, options?: any) => Promise<RequestArgs>;
    /**
     * Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  You can call `getMyFeesEstimateForSKU` for an item on behalf of a selling partner before the selling partner sets the item\'s price. The selling partner can then take any estimated fees into account. Each fees estimate request must include an original identifier. This identifier is included in the fees estimate so that you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When sellers use the `getMyFeesEstimateForSKU` operation with their `SellerSKU`, they get accurate fees based on real item measurements, but only after they\'ve sent their items to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {string} sellerSKU Used to identify an item in the given marketplace. SellerSKU is qualified by the seller\&#39;s SellerId, which is included with every operation that you submit.
     * @param {GetMyFeesEstimateRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMyFeesEstimateForSKU: (sellerSKU: string, body: GetMyFeesEstimateRequest, options?: any) => Promise<RequestArgs>;
    /**
     * Returns the estimated fees for a list of products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Array<FeesEstimateByIdRequest>} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMyFeesEstimates: (body: Array<FeesEstimateByIdRequest>, options?: any) => Promise<RequestArgs>;
};
/**
 * FeesApi - functional programming interface
 * @export
 */
export declare const FeesApiFp: (configuration?: Configuration) => {
    /**
     * Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body.  You can call `getMyFeesEstimateForASIN` for an item on behalf of a selling partner before the selling partner sets the item\'s price. The selling partner can then take estimated fees into account. Each fees request must include an original identifier. This identifier is included in the fees estimate so you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When using the `getMyFeesEstimateForASIN` operation with an ASIN, the fee estimates might be different. This is because these estimates use the item\'s catalog size, which might not always match the actual size of the item sent to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {string} asin The Amazon Standard Identification Number (ASIN) of the item.
     * @param {GetMyFeesEstimateRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMyFeesEstimateForASIN(asin: string, body: GetMyFeesEstimateRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMyFeesEstimateResponse>>;
    /**
     * Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  You can call `getMyFeesEstimateForSKU` for an item on behalf of a selling partner before the selling partner sets the item\'s price. The selling partner can then take any estimated fees into account. Each fees estimate request must include an original identifier. This identifier is included in the fees estimate so that you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When sellers use the `getMyFeesEstimateForSKU` operation with their `SellerSKU`, they get accurate fees based on real item measurements, but only after they\'ve sent their items to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {string} sellerSKU Used to identify an item in the given marketplace. SellerSKU is qualified by the seller\&#39;s SellerId, which is included with every operation that you submit.
     * @param {GetMyFeesEstimateRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMyFeesEstimateForSKU(sellerSKU: string, body: GetMyFeesEstimateRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMyFeesEstimateResponse>>;
    /**
     * Returns the estimated fees for a list of products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Array<FeesEstimateByIdRequest>} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMyFeesEstimates(body: Array<FeesEstimateByIdRequest>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FeesEstimateResult>>>;
};
/**
 * FeesApi - factory interface
 * @export
 */
export declare const FeesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body.  You can call `getMyFeesEstimateForASIN` for an item on behalf of a selling partner before the selling partner sets the item\'s price. The selling partner can then take estimated fees into account. Each fees request must include an original identifier. This identifier is included in the fees estimate so you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When using the `getMyFeesEstimateForASIN` operation with an ASIN, the fee estimates might be different. This is because these estimates use the item\'s catalog size, which might not always match the actual size of the item sent to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {string} asin The Amazon Standard Identification Number (ASIN) of the item.
     * @param {GetMyFeesEstimateRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMyFeesEstimateForASIN(asin: string, body: GetMyFeesEstimateRequest, options?: any): AxiosPromise<GetMyFeesEstimateResponse>;
    /**
     * Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  You can call `getMyFeesEstimateForSKU` for an item on behalf of a selling partner before the selling partner sets the item\'s price. The selling partner can then take any estimated fees into account. Each fees estimate request must include an original identifier. This identifier is included in the fees estimate so that you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When sellers use the `getMyFeesEstimateForSKU` operation with their `SellerSKU`, they get accurate fees based on real item measurements, but only after they\'ve sent their items to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {string} sellerSKU Used to identify an item in the given marketplace. SellerSKU is qualified by the seller\&#39;s SellerId, which is included with every operation that you submit.
     * @param {GetMyFeesEstimateRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMyFeesEstimateForSKU(sellerSKU: string, body: GetMyFeesEstimateRequest, options?: any): AxiosPromise<GetMyFeesEstimateResponse>;
    /**
     * Returns the estimated fees for a list of products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Array<FeesEstimateByIdRequest>} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMyFeesEstimates(body: Array<FeesEstimateByIdRequest>, options?: any): AxiosPromise<Array<FeesEstimateResult>>;
};
/**
 * Request parameters for getMyFeesEstimateForASIN operation in FeesApi.
 * @export
 * @interface FeesApiGetMyFeesEstimateForASINRequest
 */
export interface FeesApiGetMyFeesEstimateForASINRequest {
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof FeesApiGetMyFeesEstimateForASIN
     */
    readonly asin: string;
    /**
     *
     * @type {GetMyFeesEstimateRequest}
     * @memberof FeesApiGetMyFeesEstimateForASIN
     */
    readonly body: GetMyFeesEstimateRequest;
}
/**
 * Request parameters for getMyFeesEstimateForSKU operation in FeesApi.
 * @export
 * @interface FeesApiGetMyFeesEstimateForSKURequest
 */
export interface FeesApiGetMyFeesEstimateForSKURequest {
    /**
     * Used to identify an item in the given marketplace. SellerSKU is qualified by the seller\&#39;s SellerId, which is included with every operation that you submit.
     * @type {string}
     * @memberof FeesApiGetMyFeesEstimateForSKU
     */
    readonly sellerSKU: string;
    /**
     *
     * @type {GetMyFeesEstimateRequest}
     * @memberof FeesApiGetMyFeesEstimateForSKU
     */
    readonly body: GetMyFeesEstimateRequest;
}
/**
 * Request parameters for getMyFeesEstimates operation in FeesApi.
 * @export
 * @interface FeesApiGetMyFeesEstimatesRequest
 */
export interface FeesApiGetMyFeesEstimatesRequest {
    /**
     *
     * @type {Array<FeesEstimateByIdRequest>}
     * @memberof FeesApiGetMyFeesEstimates
     */
    readonly body: Array<FeesEstimateByIdRequest>;
}
/**
 * FeesApi - object-oriented interface
 * @export
 * @class FeesApi
 * @extends {BaseAPI}
 */
export declare class FeesApi extends BaseAPI {
    /**
     * Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body.  You can call `getMyFeesEstimateForASIN` for an item on behalf of a selling partner before the selling partner sets the item\'s price. The selling partner can then take estimated fees into account. Each fees request must include an original identifier. This identifier is included in the fees estimate so you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When using the `getMyFeesEstimateForASIN` operation with an ASIN, the fee estimates might be different. This is because these estimates use the item\'s catalog size, which might not always match the actual size of the item sent to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {FeesApiGetMyFeesEstimateForASINRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeesApi
     */
    getMyFeesEstimateForASIN(requestParameters: FeesApiGetMyFeesEstimateForASINRequest, options?: any): Promise<import("axios").AxiosResponse<GetMyFeesEstimateResponse, any>>;
    /**
     * Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  You can call `getMyFeesEstimateForSKU` for an item on behalf of a selling partner before the selling partner sets the item\'s price. The selling partner can then take any estimated fees into account. Each fees estimate request must include an original identifier. This identifier is included in the fees estimate so that you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When sellers use the `getMyFeesEstimateForSKU` operation with their `SellerSKU`, they get accurate fees based on real item measurements, but only after they\'ve sent their items to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {FeesApiGetMyFeesEstimateForSKURequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeesApi
     */
    getMyFeesEstimateForSKU(requestParameters: FeesApiGetMyFeesEstimateForSKURequest, options?: any): Promise<import("axios").AxiosResponse<GetMyFeesEstimateResponse, any>>;
    /**
     * Returns the estimated fees for a list of products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {FeesApiGetMyFeesEstimatesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeesApi
     */
    getMyFeesEstimates(requestParameters: FeesApiGetMyFeesEstimatesRequest, options?: any): Promise<import("axios").AxiosResponse<FeesEstimateResult[], any>>;
}
