/*! bigSlide - v0.9.0 - 2015-06-20
* http://ascott1.github.io/bigSlide.js/
* Copyright (c) 2015 Adam D. Scott; Licensed MIT */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){"use strict";function e(t,e){for(var i,s=t.split(";"),n=e.split(" "),o="",a=0,r=s.length;r>a;a++){i=!0;for(var u=0,c=n.length;c>u;u++)(""===s[a]||-1!==s[a].indexOf(n[u]))&&(i=!1);i&&(o+=s[a]+"; ")}return o}t.fn.bigSlide=function(i){var s=this,n=t.extend({menu:"#menu",push:".push",side:"left"
	,menuWidth:"15.625em", 
	speed:"300",state:"closed",activeBtn:"active",easyClose:!1,beforeOpen:function(){},afterOpen:function(){},beforeClose:function(){},afterClose:function(){}},i),o="transition -o-transition -ms-transition -moz-transitions webkit-transition "+n.side,a={menuCSSDictionary:o+" position top bottom height width",pushCSSDictionary:o,state:n.state},r={init:function(){u.init()},_destroy:function(){return u._destroy(),delete s.bigSlideAPI,s},changeState:function(){a.state="closed"===a.state?"open":"closed"},getState:function(){return a.state}},u={init:function(){this.$menu=t(n.menu),this.$push=t(n.push),this.width=n.menuWidth;var e={position:"fixed",top:"0",bottom:"0",height:"100%"};e[n.side]="-"+n.menuWidth,e.width=n.menuWidth,"closed"===n.state&&(this.$menu.css(e),this.$push.css(n.side,"0"));var i={"-webkit-transition":n.side+" "+n.speed+"ms ease","-moz-transition":n.side+" "+n.speed+"ms ease","-ms-transition":n.side+" "+n.speed+"ms ease","-o-transition":n.side+" "+n.speed+"ms ease",transition:n.side+" "+n.speed+"ms ease"};this.$menu.css(i),this.$push.css(i),s.on("click.bigSlide touchstart.bigSlide",function(t){t.preventDefault(),"open"===r.getState()?u.toggleClose():u.toggleOpen()}),n.easyClose&&t(document).on("click.bigSlide",function(e){t(e.target).parents().andSelf().is(s)||t(e.target).closest(menu).length||"open"!==r.getState()||u.toggleClose()})},_destroy:function(){this.$menu.each(function(){var i=t(this);i.attr("style",e(i.attr("style"),a.menuCSSDictionary).trim())}),this.$push.each(function(){var i=t(this);i.attr("style",e(i.attr("style"),a.pushCSSDictionary).trim())}),s.removeClass(n.activeBtn).off("click.bigSlide touchstart.bigSlide"),this.$menu=null,this.$push=null},toggleOpen:function(){n.beforeOpen(),r.changeState(),this.$menu.css(n.side,"0"),this.$push.css(n.side,this.width),s.addClass(n.activeBtn),n.afterOpen()},toggleClose:function(){n.beforeClose(),r.changeState(),this.$menu.css(n.side,"-"+this.width),this.$push.css(n.side,"0"),s.removeClass(n.activeBtn),n.afterClose()}};return r.init(),this.bigSlideAPI={settings:n,model:a,controller:r,view:u,destroy:r._destroy},this}});





/******Big Hero Slider*******/


$('.cd-slider-nav li').on('click', function(event){
	event.preventDefault();
	var selectedItem = $(this);
	if(!selectedItem.hasClass('selected')) {
		// if it's not already selected
		var selectedPosition = selectedItem.index(),
			activePosition = $('.cd-hero-slider .selected').index();
		if( activePosition < selectedPosition) {
			nextSlide($('.cd-hero-slider'), $('.cd-slider-nav'), selectedPosition);
		} else {
			prevSlide($('.cd-hero-slider'), $('.cd-slider-nav'), selectedPosition);
		}
		
		updateNavigationMarker(selectedPosition+1);
	}
});