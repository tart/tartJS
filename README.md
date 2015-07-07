tartJS
======

tartJS is a performance-focused JavaScript framework based on well-tested Google Closure Tools suite.
It provides rapid and responsive mobile app infrastructure.

Check out [the documentation](http://tart.js.org/docs) and join us on [![tartJS Slack](http://slack.tartjs.org/badge.svg)](http://slack.tartjs.org) for anything about tartJS.

Track issues on [![tartJS HuBoard](https://img.shields.io/github/issues/tart/tartjs.svg?style=flat&label=HuBoard)](https://huboard.com/tart/tartJS)

Closure Compiler optimizes, checks and cleans up your annotated JavaScript code with best minification rates while helping you to catch errors.


## Getting Started

### From scratch

Add tartJS to your project as a submodule:

```sh
    git submodule add git@github.com:tart/tartJS.git js/lib/tartJS
```

### Boilerplates/Examples

* For TodoMVC implementation and generic boilerplate:

    http://github.com/tart/tartjs-todomvc

* For working mobile project:

    https://github.com/tart/tartjs-mobile-demo

* Generic boilerplate:

    https://github.com/tart/BoilerPlate


## Documentation

(More coming soon)


### Annotation

With help of Closure Compiler, class based inheritance and type safety is widely used in tartJS.
See [Annotating JavaScript for the Closure Compiler](https://developers.google.com/closure/compiler/docs/js-for-compiler) how JSDoc annotation works.


### Directory structure

* [tart](https://github.com/tart/tartJS/tree/master/tart) : Contains core Tart libraries
* tools : Contains tools like Google Closure Compiler, Google Closure Linter etc (submodule to [tart/GUI-Tools](https://github.com/tart/GUI-Tools))
* [third_party](https://github.com/tart/tartJS/tree/master/third_party) : Contains third party libraries like Google Closure Library, Jasmine, jQuery etc. 


## Examples

* Outstanding web audio processor for guitar players:

    [Pedalboard.js](http://dashersw.github.io/pedalboard.js/)

* Example TodoMVC application (useful as a web application boilerplate):

    [tartjs-todomvc](https://github.com/tart/tartjs-todomvc)

* Example TV show mobile app (useful as a mobile boilerplate):

    [tartjs-mobile-demo](https://github.com/tart/tartjs-mobile-demo)

## Contributing

Want to contribute? Great! Fork it, create a branch, make your changes, push and [open pull request](https://github.com/tart/tartJS/pulls) to contribute.
Your pull request may not be merged immediately until necessary changes were made to match coding-style, pass tests.
We do follow [Google JavaScript Style Guide](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml).



## License

Copyright 2014 Startup Kitchen. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
