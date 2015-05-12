'use strict';

describe('Service: bootyChecker', function () {

  // load the service's module
  beforeEach(module('piratesbootyApp'));

  // instantiate service
  var bootyChecker;
  beforeEach(inject(function (_bootyChecker_) {
    bootyChecker = _bootyChecker_;
  }));

  it('should do something', function () {
    expect(!!bootyChecker).toBe(true);
  });

});
