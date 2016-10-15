// import core foundation files
import {foundation} from 'foundation-sites/js/foundation.core';
import 'foundation-sites/js/foundation.util.mediaQuery';
import 'foundation-sites/js/foundation.util.box';
import 'foundation-sites/js/foundation.util.triggers';



/* import here any additional module */

// we need to attach the function we exported above to the jQuery object in use in this file
$.fn.foundation = foundation;

// ready to go
$(document).ready(function() {
    $(document).foundation();
});
