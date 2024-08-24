/**
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Configuration } from "./configuration";
import { RequestArgs } from "./base";
import { AxiosInstance } from 'axios';
/**
 *
 * @export
 */
export declare const DUMMY_BASE_URL = "https://example.com";
/**
 *
 * @throws {RequiredError}
 * @export
 */
export declare const assertParamExists: (functionName: string, paramName: string, paramValue: unknown) => void;
/**
 *
 * @export
 */
export declare const setApiKeyToObject: (object: any, keyParamName: string, configuration?: Configuration) => Promise<void>;
/**
 *
 * @export
 */
export declare const setBasicAuthToObject: (object: any, configuration?: Configuration) => void;
/**
 *
 * @export
 */
export declare const setBearerAuthToObject: (object: any, configuration?: Configuration) => Promise<void>;
/**
 *
 * @export
 */
export declare const setOAuthToObject: (object: any, name: string, scopes: string[], configuration?: Configuration) => Promise<void>;
/**
 *
 * @export
 */
export declare const setSearchParams: (url: URL, ...objects: any[]) => void;
/**
 *
 * @export
 */
export declare const serializeDataIfNeeded: (value: any, requestOptions: any, configuration?: Configuration) => any;
/**
 *
 * @export
 */
export declare const toPathString: (url: URL) => string;
/**
 *
 * @export
 */
export declare const createRequestFunction: (axiosArgs: RequestArgs, globalAxios: AxiosInstance, BASE_PATH: string, configuration?: Configuration) => (axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any, any>>;
