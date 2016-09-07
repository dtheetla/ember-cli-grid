define('test3/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('test3/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('test3/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('test3/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'test3/tests/helpers/start-app', 'test3/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _test3TestsHelpersStartApp, _test3TestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _test3TestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _test3TestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('test3/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('test3/tests/helpers/resolver', ['exports', 'test3/resolver', 'test3/config/environment'], function (exports, _test3Resolver, _test3ConfigEnvironment) {

  var resolver = _test3Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: _test3ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _test3ConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('test3/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('test3/tests/helpers/start-app', ['exports', 'ember', 'test3/app', 'test3/config/environment'], function (exports, _ember, _test3App, _test3ConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _test3ConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _test3App['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('test3/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('test3/tests/models/sample.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/sample.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/sample.js should pass jshint.');
  });
});
define('test3/tests/models/sample/view.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/sample/view.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/sample/view.js should pass jshint.');
  });
});
define('test3/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('test3/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('test3/tests/routes/sample.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/sample.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/sample.js should pass jshint.\nroutes/sample.js: line 9, col 43, \'model\' is defined but never used.\nroutes/sample.js: line 13, col 15, Missing semicolon.\nroutes/sample.js: line 14, col 13, Expected \'===\' and instead saw \'==\'.\nroutes/sample.js: line 28, col 8, Missing semicolon.\nroutes/sample.js: line 44, col 6, Missing semicolon.\n\n5 errors');
  });
});
define('test3/tests/routes/sample/view.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/sample/view.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sample/view.js should pass jshint.');
  });
});
define('test3/tests/test-helper', ['exports', 'test3/tests/helpers/resolver', 'ember-qunit'], function (exports, _test3TestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_test3TestsHelpersResolver['default']);
});
define('test3/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('test3/tests/unit/models/sample-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('sample', 'Unit | Model | sample', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('test3/tests/unit/models/sample-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/sample-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/sample-test.js should pass jshint.');
  });
});
define('test3/tests/unit/models/sample/view-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('sample/view', 'Unit | Model | sample/view', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('test3/tests/unit/models/sample/view-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/sample/view-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/sample/view-test.js should pass jshint.');
  });
});
define('test3/tests/unit/routes/sample-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:sample', 'Unit | Route | sample', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('test3/tests/unit/routes/sample-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/sample-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sample-test.js should pass jshint.');
  });
});
define('test3/tests/unit/routes/sample/view-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:sample/view', 'Unit | Route | sample/view', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('test3/tests/unit/routes/sample/view-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/sample/view-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sample/view-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('test3/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map