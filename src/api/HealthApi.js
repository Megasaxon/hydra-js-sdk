/**
 * ORY Hydra
 * Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here.
 *
 * OpenAPI spec version: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import GenericError from '../model/GenericError';
import HealthNotReadyStatus from '../model/HealthNotReadyStatus';
import HealthStatus from '../model/HealthStatus';

/**
* Health service.
* @module api/HealthApi
* @version latest
*/
export default class HealthApi {

    /**
    * Constructs a new HealthApi. 
    * @alias module:api/HealthApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the isInstanceAlive operation.
     * @callback module:api/HealthApi~isInstanceAliveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HealthStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check alive status
     * This endpoint returns a 200 status code when the HTTP server is up running. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
     * @param {module:api/HealthApi~isInstanceAliveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HealthStatus}
     */
    isInstanceAlive(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = HealthStatus;

      return this.apiClient.callApi(
        '/health/alive', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the isInstanceReady operation.
     * @callback module:api/HealthApi~isInstanceReadyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HealthStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check readiness status
     * This endpoint returns a 200 status code when the HTTP server is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
     * @param {module:api/HealthApi~isInstanceReadyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HealthStatus}
     */
    isInstanceReady(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = HealthStatus;

      return this.apiClient.callApi(
        '/health/ready', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}