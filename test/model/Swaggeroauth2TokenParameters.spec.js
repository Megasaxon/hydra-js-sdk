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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OryHydra);
  }
}(this, function(expect, OryHydra) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OryHydra.Swaggeroauth2TokenParameters();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Swaggeroauth2TokenParameters', function() {
    it('should create an instance of Swaggeroauth2TokenParameters', function() {
      // uncomment below and update the code to test Swaggeroauth2TokenParameters
      //var instane = new OryHydra.Swaggeroauth2TokenParameters();
      //expect(instance).to.be.a(OryHydra.Swaggeroauth2TokenParameters);
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new OryHydra.Swaggeroauth2TokenParameters();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new OryHydra.Swaggeroauth2TokenParameters();
      //expect(instance).to.be();
    });

    it('should have the property grantType (base name: "grant_type")', function() {
      // uncomment below and update the code to test the property grantType
      //var instane = new OryHydra.Swaggeroauth2TokenParameters();
      //expect(instance).to.be();
    });

    it('should have the property redirectUri (base name: "redirect_uri")', function() {
      // uncomment below and update the code to test the property redirectUri
      //var instane = new OryHydra.Swaggeroauth2TokenParameters();
      //expect(instance).to.be();
    });

  });

}));
