/**
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor\'s invoice data.
 *
 * The version of the OpenAPI document: v1
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
 * A field where the selling party provides additional information.
 * @export
 * @interface AdditionalDetails
 */
export interface AdditionalDetails {
    /**
     * The type of the additional information provided by the selling party.
     * @type {string}
     * @memberof AdditionalDetails
     */
    type: AdditionalDetailsTypeEnum | 'SUR' | 'OCR';
    /**
     * The detail of the additional information provided by the selling party.
     * @type {string}
     * @memberof AdditionalDetails
     */
    detail: string;
    /**
     * The language code of the additional information detail.
     * @type {string}
     * @memberof AdditionalDetails
     */
    languageCode?: string;
}
/**
    * @export
    * @enum {string}
    */
export declare enum AdditionalDetailsTypeEnum {
    Sur = "SUR",
    Ocr = "OCR"
}
/**
 * Address of the party.
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * The name of the person, business or institution at that address.
     * @type {string}
     * @memberof Address
     */
    name: string;
    /**
     * First line of the address.
     * @type {string}
     * @memberof Address
     */
    addressLine1: string;
    /**
     * Additional street address information, if required.
     * @type {string}
     * @memberof Address
     */
    addressLine2?: string;
    /**
     * Additional street address information, if required.
     * @type {string}
     * @memberof Address
     */
    addressLine3?: string;
    /**
     * The city where the person, business or institution is located.
     * @type {string}
     * @memberof Address
     */
    city: string;
    /**
     * The county where person, business or institution is located.
     * @type {string}
     * @memberof Address
     */
    county?: string;
    /**
     * The district where person, business or institution is located.
     * @type {string}
     * @memberof Address
     */
    district?: string;
    /**
     * The state or region where person, business or institution is located.
     * @type {string}
     * @memberof Address
     */
    stateOrRegion: string;
    /**
     * The postal code of that address. It conatins a series of letters or digits or both, sometimes including spaces or punctuation.
     * @type {string}
     * @memberof Address
     */
    postalCode: string;
    /**
     * The two digit country code in ISO 3166-1 alpha-2 format.
     * @type {string}
     * @memberof Address
     */
    countryCode: string;
    /**
     * The phone number of the person, business or institution located at that address.
     * @type {string}
     * @memberof Address
     */
    phone?: string;
}
/**
 * Monetary and tax details of the charge.
 * @export
 * @interface ChargeDetails
 */
export interface ChargeDetails {
    /**
     * Type of charge applied.
     * @type {string}
     * @memberof ChargeDetails
     */
    type: ChargeDetailsTypeEnum | 'GIFTWRAP' | 'FULFILLMENT' | 'MARKETINGINSERT' | 'PACKAGING' | 'LOADING' | 'FREIGHTOUT' | 'TAX_COLLECTED_AT_SOURCE';
    /**
     *
     * @type {Money}
     * @memberof ChargeDetails
     */
    chargeAmount: Money;
    /**
     * Individual tax details per line item.
     * @type {Array<TaxDetail>}
     * @memberof ChargeDetails
     */
    taxDetails?: Array<TaxDetail>;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ChargeDetailsTypeEnum {
    Giftwrap = "GIFTWRAP",
    Fulfillment = "FULFILLMENT",
    Marketinginsert = "MARKETINGINSERT",
    Packaging = "PACKAGING",
    Loading = "LOADING",
    Freightout = "FREIGHTOUT",
    TaxCollectedAtSource = "TAX_COLLECTED_AT_SOURCE"
}
/**
 * Represents the invoice details, including the invoice number, date, parties involved, payment terms, totals, taxes, charges, and line items.
 * @export
 * @interface InvoiceDetail
 */
export interface InvoiceDetail {
    /**
     * The unique invoice number.
     * @type {string}
     * @memberof InvoiceDetail
     */
    invoiceNumber: string;
    /**
     * Invoice date.
     * @type {string}
     * @memberof InvoiceDetail
     */
    invoiceDate: string;
    /**
     * An additional unique reference number used for regulatory or other purposes.
     * @type {string}
     * @memberof InvoiceDetail
     */
    referenceNumber?: string;
    /**
     *
     * @type {PartyIdentification}
     * @memberof InvoiceDetail
     */
    remitToParty: PartyIdentification;
    /**
     *
     * @type {PartyIdentification}
     * @memberof InvoiceDetail
     */
    shipFromParty: PartyIdentification;
    /**
     *
     * @type {PartyIdentification}
     * @memberof InvoiceDetail
     */
    billToParty?: PartyIdentification;
    /**
     * Ship-to country code.
     * @type {string}
     * @memberof InvoiceDetail
     */
    shipToCountryCode?: string;
    /**
     * The payment terms for the invoice.
     * @type {string}
     * @memberof InvoiceDetail
     */
    paymentTermsCode?: string;
    /**
     *
     * @type {Money}
     * @memberof InvoiceDetail
     */
    invoiceTotal: Money;
    /**
     * Individual tax details per line item.
     * @type {Array<TaxDetail>}
     * @memberof InvoiceDetail
     */
    taxTotals?: Array<TaxDetail>;
    /**
     * Additional details provided by the selling party, for tax-related or other purposes.
     * @type {Array<AdditionalDetails>}
     * @memberof InvoiceDetail
     */
    additionalDetails?: Array<AdditionalDetails>;
    /**
     * Total charge amount details for all line items.
     * @type {Array<ChargeDetails>}
     * @memberof InvoiceDetail
     */
    chargeDetails?: Array<ChargeDetails>;
    /**
     * Provides the details of the items in this invoice.
     * @type {Array<InvoiceItem>}
     * @memberof InvoiceDetail
     */
    items: Array<InvoiceItem>;
}
/**
 * Details of the invoice items.
 * @export
 * @interface InvoiceItem
 */
export interface InvoiceItem {
    /**
     * Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on.
     * @type {string}
     * @memberof InvoiceItem
     */
    itemSequenceNumber: string;
    /**
     * Buyer\'s standard identification number (ASIN) of an item.
     * @type {string}
     * @memberof InvoiceItem
     */
    buyerProductIdentifier?: string;
    /**
     * The vendor selected product identification of the item.
     * @type {string}
     * @memberof InvoiceItem
     */
    vendorProductIdentifier?: string;
    /**
     *
     * @type {ItemQuantity}
     * @memberof InvoiceItem
     */
    invoicedQuantity: ItemQuantity;
    /**
     *
     * @type {Money}
     * @memberof InvoiceItem
     */
    netCost: Money;
    /**
     * The purchase order number for this order. Formatting Notes: 8-character alpha-numeric code.
     * @type {string}
     * @memberof InvoiceItem
     */
    purchaseOrderNumber: string;
    /**
     * The vendor\'s order number for this order.
     * @type {string}
     * @memberof InvoiceItem
     */
    vendorOrderNumber?: string;
    /**
     * Harmonized System of Nomenclature (HSN) tax code. The HSN number cannot contain alphabets.
     * @type {string}
     * @memberof InvoiceItem
     */
    hsnCode?: string;
    /**
     * Individual tax details per line item.
     * @type {Array<TaxDetail>}
     * @memberof InvoiceItem
     */
    taxDetails?: Array<TaxDetail>;
    /**
     * Individual charge details per line item.
     * @type {Array<ChargeDetails>}
     * @memberof InvoiceItem
     */
    chargeDetails?: Array<ChargeDetails>;
}
/**
 * Details of item quantity.
 * @export
 * @interface ItemQuantity
 */
export interface ItemQuantity {
    /**
     * Quantity of units available for a specific item.
     * @type {number}
     * @memberof ItemQuantity
     */
    amount: number;
    /**
     * Unit of measure for the available quantity.
     * @type {string}
     * @memberof ItemQuantity
     */
    unitOfMeasure: string;
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
 * An amount of money, including units in the form of currency.
 * @export
 * @interface Money
 */
export interface Money {
    /**
     * Three digit currency code in ISO 4217 format.
     * @type {string}
     * @memberof Money
     */
    currencyCode: string;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @type {string}
     * @memberof Money
     */
    amount: string;
}
/**
 * Name, address, and tax details of a party.
 * @export
 * @interface PartyIdentification
 */
export interface PartyIdentification {
    /**
     * Assigned Identification for the party.
     * @type {string}
     * @memberof PartyIdentification
     */
    partyId: string;
    /**
     *
     * @type {Address}
     * @memberof PartyIdentification
     */
    address?: Address;
    /**
     * Tax registration details of the entity.
     * @type {Array<TaxRegistrationDetail>}
     * @memberof PartyIdentification
     */
    taxRegistrationDetails?: Array<TaxRegistrationDetail>;
}
/**
 * The request schema for the submitInvoice operation.
 * @export
 * @interface SubmitInvoiceRequest
 */
export interface SubmitInvoiceRequest {
    /**
     * An array of invoice details you want to submit.
     * @type {Array<InvoiceDetail>}
     * @memberof SubmitInvoiceRequest
     */
    invoices?: Array<InvoiceDetail>;
}
/**
 * The response schema for the submitInvoice operation.
 * @export
 * @interface SubmitInvoiceResponse
 */
export interface SubmitInvoiceResponse {
    /**
     *
     * @type {TransactionReference}
     * @memberof SubmitInvoiceResponse
     */
    payload?: TransactionReference;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof SubmitInvoiceResponse
     */
    errors?: Array<Error>;
}
/**
 * Details of tax amount applied.
 * @export
 * @interface TaxDetail
 */
export interface TaxDetail {
    /**
     * Type of the tax applied.
     * @type {string}
     * @memberof TaxDetail
     */
    taxType: TaxDetailTaxTypeEnum | 'CGST' | 'SGST' | 'CESS' | 'UTGST' | 'IGST' | 'MwSt.' | 'PST' | 'TVA' | 'VAT' | 'GST' | 'ST' | 'Consumption' | 'MutuallyDefined' | 'DomesticVAT';
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @type {string}
     * @memberof TaxDetail
     */
    taxRate?: string;
    /**
     *
     * @type {Money}
     * @memberof TaxDetail
     */
    taxAmount: Money;
    /**
     *
     * @type {Money}
     * @memberof TaxDetail
     */
    taxableAmount?: Money;
}
/**
    * @export
    * @enum {string}
    */
export declare enum TaxDetailTaxTypeEnum {
    Cgst = "CGST",
    Sgst = "SGST",
    Cess = "CESS",
    Utgst = "UTGST",
    Igst = "IGST",
    MwSt = "MwSt.",
    Pst = "PST",
    Tva = "TVA",
    Vat = "VAT",
    Gst = "GST",
    St = "ST",
    Consumption = "Consumption",
    MutuallyDefined = "MutuallyDefined",
    DomesticVat = "DomesticVAT"
}
/**
 * Tax registration details of the entity.
 * @export
 * @interface TaxRegistrationDetail
 */
export interface TaxRegistrationDetail {
    /**
     * Tax registration type for the entity.
     * @type {string}
     * @memberof TaxRegistrationDetail
     */
    taxRegistrationType?: TaxRegistrationDetailTaxRegistrationTypeEnum | 'VAT' | 'GST';
    /**
     * Tax registration number for the entity. For example, VAT ID or Consumption Tax ID.
     * @type {string}
     * @memberof TaxRegistrationDetail
     */
    taxRegistrationNumber: string;
    /**
     *
     * @type {Address}
     * @memberof TaxRegistrationDetail
     */
    taxRegistrationAddress?: Address;
    /**
     * Tax registration message that can be used for additional tax related details.
     * @type {string}
     * @memberof TaxRegistrationDetail
     */
    taxRegistrationMessage?: string;
}
/**
    * @export
    * @enum {string}
    */
export declare enum TaxRegistrationDetailTaxRegistrationTypeEnum {
    Vat = "VAT",
    Gst = "GST"
}
/**
 * Response that contains the transaction ID.
 * @export
 * @interface TransactionReference
 */
export interface TransactionReference {
    /**
     * GUID to identify this transaction. This value can be used with the Transaction Status API to return the status of this transaction.
     * @type {string}
     * @memberof TransactionReference
     */
    transactionId?: string;
}
/**
 * VendorInvoiceApi - axios parameter creator
 * @export
 */
export declare const VendorInvoiceApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Submits one or more invoices for a vendor\'s direct fulfillment orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {SubmitInvoiceRequest} body The request body that contains one or more invoices for vendor orders.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitInvoice: (body: SubmitInvoiceRequest, options?: any) => Promise<RequestArgs>;
};
/**
 * VendorInvoiceApi - functional programming interface
 * @export
 */
export declare const VendorInvoiceApiFp: (configuration?: Configuration) => {
    /**
     * Submits one or more invoices for a vendor\'s direct fulfillment orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {SubmitInvoiceRequest} body The request body that contains one or more invoices for vendor orders.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitInvoice(body: SubmitInvoiceRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubmitInvoiceResponse>>;
};
/**
 * VendorInvoiceApi - factory interface
 * @export
 */
export declare const VendorInvoiceApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Submits one or more invoices for a vendor\'s direct fulfillment orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {SubmitInvoiceRequest} body The request body that contains one or more invoices for vendor orders.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitInvoice(body: SubmitInvoiceRequest, options?: any): AxiosPromise<SubmitInvoiceResponse>;
};
/**
 * Request parameters for submitInvoice operation in VendorInvoiceApi.
 * @export
 * @interface VendorInvoiceApiSubmitInvoiceRequest
 */
export interface VendorInvoiceApiSubmitInvoiceRequest {
    /**
     * The request body that contains one or more invoices for vendor orders.
     * @type {SubmitInvoiceRequest}
     * @memberof VendorInvoiceApiSubmitInvoice
     */
    readonly body: SubmitInvoiceRequest;
}
/**
 * VendorInvoiceApi - object-oriented interface
 * @export
 * @class VendorInvoiceApi
 * @extends {BaseAPI}
 */
export declare class VendorInvoiceApi extends BaseAPI {
    /**
     * Submits one or more invoices for a vendor\'s direct fulfillment orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {VendorInvoiceApiSubmitInvoiceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorInvoiceApi
     */
    submitInvoice(requestParameters: VendorInvoiceApiSubmitInvoiceRequest, options?: any): Promise<import("axios").AxiosResponse<SubmitInvoiceResponse, any>>;
}
