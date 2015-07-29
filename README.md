# live-blanket
Run [blanket.js](https://github.com/alex-seville) manually on your webpage sources.

Have a look at the [demo](http://albanm.github.io/live-blanket/).

Blanket is a nice code coverage tool written in Javascript that can be used directly in the browser. This project is a very simple adapter for covering code during some manual testing of a webpage. Handy for a little bit of dead code analysis when you don't have a complete automated test suite.

## Usage

Add this somewhere in the page:

    <script src="https://rawgit.com/alex-seville/blanket/v1.1.7/dist/qunit/blanket.min.js" data-cover-adapter="https://rawgit.com/albanm/live-blanket/master/live-blanket.js" data-cover-only="//.*/" data-cover-timeout="10000"></script>

Then open it and follow instructions from the box that should appear at the top of your page.

Some libraries like angular can trigger instrumentation errors for blanket. In this case you can use the "data-cover-never" to exclude some files. For example:

<script src="https://rawgit.com/alex-seville/blanket/v1.1.7/dist/qunit/blanket.min.js" data-cover-adapter="https://rawgit.com/albanm/live-blanket/master/live-blanket.js" data-cover-only="//.*/" data-cover-never="[angular.js]" data-cover-timeout="10000"></script>
