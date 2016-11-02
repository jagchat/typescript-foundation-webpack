import * as $ from 'jquery';
import * as _ from 'lodash';
(() => {
    $('body').append("<p>" + _.now() + "</p>");
})();

function testFunction(num: number): boolean {
    if(num>0) {
        return true;
    } else {
        return false;
    }
}

export {testFunction}