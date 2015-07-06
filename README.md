# live-blanket
Run [blanket.js](https://github.com/alex-seville) manually on your webpage sources.

Blanket is a nice code coverage tool written in Javascript that can be used directly in the browser. This project is a very simple adapter for covering code during some manual testing of a webpage. Handy for a little bit of dead code analysis when you don't have a complete automated test suite.

## Usage

Add this somewhere in the page:

    <script src="https://rawgit.com/alex-seville/blanket/v1.1.7/dist/qunit/blanket.min.js" data-cover-adapter="./live-blanket.js" data-cover-only="//.*/" data-cover-timeout="10000"></script>

Use the webpage, then open the javascript console in the developper tools of your browser and execute this line of code:

    liveBlanket();
