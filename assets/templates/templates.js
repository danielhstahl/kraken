(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['login'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<form onsubmit='return "
    + container.escapeExpression(((helper = (helper = helpers["function"] || (depth0 != null ? depth0["function"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"function","hash":{},"data":data}) : helper)))
    + "(this);'>\n  <div class='block-entries'>\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label fixed-width\">\n          <input class=\"mdl-textfield__input\" type=\"text\" id=\"username\" name='username'>\n          <label class=\"mdl-textfield__label\" for=\"username\">Username</label>\n      </div>\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label  fixed-width\">\n          <input class=\"mdl-textfield__input\" type=\"password\" id=\"password\" name='password'>\n          <label class=\"mdl-textfield__label\" for=\"password\">Password</label>\n      </div>\n      <button class='mdl-button mdl-js-button mdl-button--raised mdl-button--accent  fixed-width'>Submit</button>\n  </div>\n</form>\n";
},"useData":true});
templates['main'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(helpers.lookup.call(depth0 != null ? depth0 : {},depth0,"standard",{"name":"lookup","hash":{},"data":data}),depth0,{"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.login,(depth0 != null ? depth0.credentials : depth0),{"name":"login","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.credentials : depth0)) != null ? stack1.username : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['modal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<dialog id='"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "' class=\"mdl-dialog\">\n    <h4 class=\"mdl-dialog__title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n    <div class=\"mdl-dialog__content\">\n        <p>\n            "
    + alias4(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "\n        </p>\n        <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n            <input class=\"mdl-textfield__input\" type=\"password\" id=\"pswd\">\n            <label class=\"mdl-textfield__label\" for=\"pswd\">Password</label>\n        </div>\n    </div>\n    <div class=\"mdl-dialog__actions\">\n        <button type=\"button\" data-key='"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "' class=\"mdl-button submit\" onclick='"
    + alias4(((helper = (helper = helpers["function"] || (depth0 != null ? depth0["function"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"function","hash":{},"data":data}) : helper)))
    + "(\"pswd\")'>Submit</button>\n        <button type=\"button\" class=\"mdl-button\" onclick='document.getElementById(\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\").close();document.getElementById(\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\").remove();'>Cancel</button>\n    </div>\n</dialog>\n";
},"useData":true});
templates['modalTrade'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<dialog id='"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "' class=\"mdl-dialog\">\n    <h4 class=\"mdl-dialog__title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n    <div class=\"mdl-dialog__content\">\n        <p>\n            "
    + alias4(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "\n        </p>\n        <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n            <input data-key='"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "' class=\"mdl-textfield__input\" id=\"pswd\">\n            <label class=\"mdl-textfield__label\" for=\"pswd\">Amount</label>\n        </div>\n    </div>\n    <div class=\"mdl-dialog__actions\">\n        <button type=\"button\"  class=\"mdl-button submit\" onclick='"
    + alias4(((helper = (helper = helpers["function"] || (depth0 != null ? depth0["function"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"function","hash":{},"data":data}) : helper)))
    + "(\"pswd\")'>Submit</button>\n        <button type=\"button\" class=\"mdl-button\" onclick='document.getElementById(\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\").close();document.getElementById(\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\").remove();'>Cancel</button>\n    </div>\n</dialog>\n";
},"useData":true});
templates['portfolio'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id='container'></div>\n<h3>Total value in "
    + container.escapeExpression(((helper = (helper = helpers.numeraire || (depth0 != null ? depth0.numeraire : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"numeraire","hash":{},"data":data}) : helper)))
    + ": <span id='value'></span></h3>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  <h1>Enter Keys!</h1>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.credentials : depth0)) != null ? stack1.key : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
templates['settings'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <option value='"
    + alias2(alias1((depth0 != null ? depth0.numeraireKey : depth0), depth0))
    + "'>"
    + alias2(alias1((depth0 != null ? depth0.numeraireLabel : depth0), depth0))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class='block-entries'>\n  <ul class=\"demo-list-control mdl-list fixed-width\">\n    <li class=\"mdl-list__item\">\n      <span class=\"mdl-list__item-primary-content\">\n          <i class=\"material-icons large-icon mdl-color-text--orange-800 \">swap_horiz</i>\n          <span >\n              Auto-Rebalance\n          </span>\n      </span>\n      <span class=\"mdl-list__item-secondary-action\">\n        <label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\" for=\"checkbox-1\">\n          <input type=\"checkbox\" id=\"checkbox-1\" class=\"mdl-checkbox__input\" checked />\n        </label>\n      </span>\n    </li>\n    <li class=\"mdl-list__item\">\n        <i class=\"material-icons  large-icon mdl-color-text--orange-800 \">vpn_key</i>\n        <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n              <input class=\"mdl-textfield__input\" type=\"password\" id=\"key\">\n              <label class=\"mdl-textfield__label\" for=\"key\">Api Key</label>\n          </div>\n          <button id='submitkey' class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' data-id='key' onclick='"
    + alias4(((helper = (helper = helpers["function"] || (depth0 != null ? depth0["function"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"function","hash":{},"data":data}) : helper)))
    + "(this)'>Submit</button>\n    </li>\n    <li class=\"mdl-list__item\">\n        <i class=\"material-icons  large-icon mdl-color-text--orange-800\">lock</i>\n        <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"> <!-- fixed-width-->\n              <input class=\"mdl-textfield__input\" type=\"password\" id=\"secret\">\n              <label class=\"mdl-textfield__label\" for=\"secret\">Api Secret</label>\n          </div>\n          <button id='submitsecret' class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' data-id='secret' onclick='"
    + alias4(((helper = (helper = helpers["function"] || (depth0 != null ? depth0["function"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"function","hash":{},"data":data}) : helper)))
    + "(this)'>Submit</button>\n    </li>\n    <li class=\"mdl-list__item \">\n      <div class=\"mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label fixed-width\">\n        <select id=\"chooseNumeraire\" class=\"mdl-selectfield__select\" onchange='"
    + alias4(((helper = (helper = helpers.selectFunction || (depth0 != null ? depth0.selectFunction : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"selectFunction","hash":{},"data":data}) : helper)))
    + "(this)'>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.numeraire : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\n        <label class=\"mdl-selectfield__label\" for=\"chooseNumeraire\">Choose Numeraire</label>\n      </div>\n    </li>\n  </ul>\n</div>\n";
},"useData":true});
templates['trades'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "  <h2>Crypto Exchange</h2>\n  <h3> Sell</h3>\n  <select id='sellcrypto'>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.crypto : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </select>\n  <h3>Buy</h3>\n  <select id='buycrypto'>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.crypto : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </select>\n  <button onclick='"
    + container.escapeExpression(((helper = (helper = helpers.cryptofunction || (depth0 != null ? depth0.cryptofunction : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"cryptofunction","hash":{},"data":data}) : helper)))
    + "(this)'>Trade</button>\n\n  <h2>Currency Exchange</h2>\n  <h3> Sell</h3>\n  <select >\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.currency : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </select>\n  <h3>Buy</h3>\n  <select>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.currency : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </select>\n  <button>Trade</button>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "  <option value='"
    + alias2(alias1((depth0 != null ? depth0.numeraireKey : depth0), depth0))
    + "'>"
    + alias2(alias1((depth0 != null ? depth0.numeraireLabel : depth0), depth0))
    + "</option>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "Wait for connection\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.crypto : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
})();