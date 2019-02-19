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
    instance = new OryHydra.OpenIDConnectContext();
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

  describe('OpenIDConnectContext', function() {
    it('should create an instance of OpenIDConnectContext', function() {
      // uncomment below and update the code to test OpenIDConnectContext
      //var instane = new OryHydra.OpenIDConnectContext();
      //expect(instance).to.be.a(OryHydra.OpenIDConnectContext);
    });

    it('should have the property acrValues (base name: "acr_values")', function() {
      // uncomment below and update the code to test the property acrValues
      //var instane = new OryHydra.OpenIDConnectContext();
      //expect(instance).to.be();
    });

    it('should have the property display (base name: "display")', function() {
      // uncomment below and update the code to test the property display
      //var instane = new OryHydra.OpenIDConnectContext();
      //expect(instance).to.be();
    });

    it('should have the property idTokenHintClaims (base name: "id_token_hint_claims")', function() {
      // uncomment below and update the code to test the property idTokenHintClaims
      //var instane = new OryHydra.OpenIDConnectContext();
      //expect(instance).to.be();
    });

    it('should have the property loginHint (base name: "login_hint")', function() {
      // uncomment below and update the code to test the property loginHint
      //var instane = new OryHydra.OpenIDConnectContext();
      //expect(instance).to.be();
    });

    it('should have the property uiLocales (base name: "ui_locales")', function() {
      // uncomment below and update the code to test the property uiLocales
      //var instane = new OryHydra.OpenIDConnectContext();
      //expect(instance).to.be();
    });

  });

}));
