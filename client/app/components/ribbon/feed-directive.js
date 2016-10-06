/**
 * Created by Lena on 16/09/28.
 */
(function(){
    var app = angular.module('ribbon', []);
    app.controller('data', function(){
        this.info= {
            "name": "Лента-пример"
        };
        this.content={
            images: [{
                src: "temp/5462824_xlarge.jpg",
                alt: "Пристань",
                class: "winter-in-norway__img"
            }, {
                src: "temp/68944142.jpg",
                alt: "Вода и горы",
                class: "winter-in-norway__img"
            }, {
                src: "temp/askwallpapers.com-23338.jpg",
                alt: "Фьорды вечером",
                class: "winter-in-norway__img"
            }, {
                src: "temp/motto.net.ua-88619.jpg",
                alt: "Лес на закате",
                class: "winter-in-norway__img"
            }]
        };
    });
})();