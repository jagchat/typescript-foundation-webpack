import './main.scss';
import * as $ from 'jquery';
(<any>window).jQuery = $;
import * as _ from "lodash";
import 'foundation-sites';


$(() => {
    $('.has-tip').on('click', function () {
        console.log(_.now());
    });
    $(document).foundation();
});

