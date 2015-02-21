+function(e){"use strict";function n(n){return this.each(function(){var r=e(this);var i=r.data("bs.tab");if(!i)r.data("bs.tab",i=new t(this));if(typeof n=="string")i[n]()})}var t=function(t){this.element=e(t)};t.VERSION="3.3.2";t.TRANSITION_DURATION=150;t.prototype.show=function(){var t=this.element;var n=t.closest("ul:not(.dropdown-menu)");var r=t.data("target");if(!r){r=t.attr("href");r=r&&r.replace(/.*(?=#[^\s]*$)/,"")}if(t.parent("li").hasClass("active"))return;var i=n.find(".active:last a");var s=e.Event("hide.bs.tab",{relatedTarget:t[0]});var o=e.Event("show.bs.tab",{relatedTarget:i[0]});i.trigger(s);t.trigger(o);if(o.isDefaultPrevented()||s.isDefaultPrevented())return;var u=e(r);this.activate(t.closest("li"),n);this.activate(u,u.parent(),function(){i.trigger({type:"hidden.bs.tab",relatedTarget:t[0]});t.trigger({type:"shown.bs.tab",relatedTarget:i[0]})})};t.prototype.activate=function(n,r,i){function u(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",false);n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",true);if(o){n[0].offsetWidth;n.addClass("in")}else{n.removeClass("fade")}if(n.parent(".dropdown-menu")){n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",true)}i&&i()}var s=r.find("> .active");var o=i&&e.support.transition&&(s.length&&s.hasClass("fade")||!!r.find("> .fade").length);s.length&&o?s.one("bsTransitionEnd",u).emulateTransitionEnd(t.TRANSITION_DURATION):u();s.removeClass("in")};var r=e.fn.tab;e.fn.tab=n;e.fn.tab.Constructor=t;e.fn.tab.noConflict=function(){e.fn.tab=r;return this};var i=function(t){t.preventDefault();n.call(e(this),"show")};e(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery)