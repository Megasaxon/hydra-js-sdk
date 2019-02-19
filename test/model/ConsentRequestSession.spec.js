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
    instance = new OryHydra.ConsentRequestSession();
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

  describe('ConsentRequestSession', function() {
    it('should create an instance of ConsentRequestSession', function() {
      // uncomment below and update the code to test ConsentRequestSession
      //var instane = new OryHydra.ConsentRequestSession();
      //expect(instance).to.be.a(OryHydra.ConsentRequestSession);
    });

    it('should have the property accessToken (base name: "access_token")', function() {
      // uncomment below and update the code to test the property accessToken
      //var instane = new OryHydra.ConsentRequestSession();
      //expect(instance).to.be();
    });

    it('should have the property idToken (base name: "id_token")', function() {
      // uncomment below and update the code to test the property idToken
      //var instane = new OryHydra.ConsentRequestSession();
      //expect(instance).to.be();
    });

  });

}));
