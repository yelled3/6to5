"use strict";

var _inherits = function (child, parent) {
  child.prototype = Object.create(parent && parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (parent) child.__proto__ = parent;
};

var Test = (function () {
  var _Foo = Foo;
  var Test = function Test() {
    _Foo.prototype.test.whatever();
    _Foo.prototype.test.call(this);
  };

  _inherits(Test, _Foo);

  Test.test = function () {
    return _Foo.wow.call(this);
  };

  return Test;
})();
