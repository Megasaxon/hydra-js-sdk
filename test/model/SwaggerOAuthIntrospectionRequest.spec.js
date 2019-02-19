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
    instance = new OryHydra.SwaggerOAuthIntrospectionRequest();
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

  describe('SwaggerOAuthIntrospectionRequest', function() {
    it('should create an instance of SwaggerOAuthIntrospectionRequest', function() {
      // uncomment below and update the code to test SwaggerOAuthIntrospectionRequest
      //var instane = new OryHydra.SwaggerOAuthIntrospectionRequest();
      //expect(instance).to.be.a(OryHydra.SwaggerOAuthIntrospectionRequest);
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instane = new OryHydra.SwaggerOAuthIntrospectionRequest();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new OryHydra.SwaggerOAuthIntrospectionRequest();
      //expect(instance).to.be();
    });

  });

}));
