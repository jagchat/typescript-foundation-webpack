import './main.scss';
import * as $ from 'jquery';
window['jQuery'] = $;
import 'foundation-sites';

$(() => {

    $('.has-tip').on('click', function () {
        console.log('clicked tip');
    });
    $(document).foundation();
});

