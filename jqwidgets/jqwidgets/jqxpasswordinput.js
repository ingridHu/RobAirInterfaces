/*
jQWidgets v3.7.1 (2015-Feb)
Copyright (c) 2011-2015 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxPasswordInput","",{});a.extend(a.jqx._jqxPasswordInput.prototype,{defineInstance:function(){var b={width:null,height:null,disabled:false,rtl:false,placeHolder:null,showStrength:false,showStrengthPosition:"right",maxLength:null,minLength:null,showPasswordIcon:true,strengthTypeRenderer:null,passwordStrength:null,localization:{passwordStrengthString:"Password strength",tooShort:"Too short",weak:"Weak",fair:"Fair",good:"Good",strong:"Strong",showPasswordString:"Show Password"},strengthColors:{tooShort:"rgb(170, 0, 51)",weak:"rgb(170, 0, 51)",fair:"rgb(255, 204, 51)",good:"rgb(45, 152, 243)",strong:"rgb(118, 194, 97)"}};a.extend(true,this,b);return b},createInstance:function(b){this.render()},render:function(){var e=this;var c=a.jqx.browser.browser;var b=a.jqx.browser.version;this._browserCheck=c!="msie"||(b!="7.0"&&b!="8.0");this.widgetID=e.element.id;var f=e.host;var d="Invalid input type. Please set the type attribute of the input element to password.";if(f.attr("type")!="password"){throw d}e._hidden=true;e._setTheme();e._setAttributes();e._showPassword();e._showStrength()},refresh:function(c){var b=this;if(c==true){return}b.removeHandler(b.host,"focus.passwordinput"+b.widgetID);b.removeHandler(b.host,"blur.passwordinput"+b.widgetID);b.removeHandler(b.host,"click.passwordinput"+b.widgetID);b.removeHandler(a(window),"resize.passwordinput"+b.widgetID);b.removeHandler(b.host,"keyup.passwordinput"+b.widgetID);b.removeHandler(b.icon,"mousedown.passwordinput"+b.iconID);b.removeHandler(b.icon,"mouseup.passwordinput"+b.iconID);b.removeHandler(a(document),"mousedown.passwordinput"+b.iconID);b._setAttributes();b._setTheme();b._showPassword();b._showStrength()},val:function(b){if(a.isEmptyObject(b)&&b!=""){return this.element.value}else{this.element.value=b}},propertyChangedHandler:function(b,c,f,e){var d=this.host;if(c=="disabled"){if(b.disabled==true){b.host.attr("disabled","disabled");b.host.addClass(b.toThemeProperty("jqx-fill-state-disabled"))}else{b.host.removeAttr("disabled");b.host.removeClass(b.toThemeProperty("jqx-fill-state-disabled"))}return}if(c=="placeHolder"){if(this._browserCheck){if("placeholder" in this.element){d.attr("placeholder",this.placeHolder)}else{if(d.val()==""){d.attr("type","text");d.val(this.placeHolder)}else{if(d.val()==f){d.val(this.placeHolder)}}}}}else{this.refresh()}},resize:function(c,b){this.width=c;this.height=b;this.host.width(this.width);this.host.height(this.height)},_setAttributes:function(){var b=this;var c=b.host;c.width(b.width);c.height(b.height);if(b.maxLength){c.attr("maxlength",b.maxLength)}if(b.minLength){c.attr("minLength",b.minLength)}if(b.placeHolder&&b._browserCheck){if("placeholder" in b.element){c.attr("placeholder",b.placeHolder)}else{if(c.val()==""){c.attr("type","text");c.val(b.placeHolder)}}}if(b.disabled==true){c.attr("disabled","disabled");c.addClass(this.toThemeProperty("jqx-fill-state-disabled"))}else{c.removeAttr("disabled");c.removeClass(b.toThemeProperty("jqx-fill-state-disabled"))}b.addHandler(c,"click.passwordinput"+b.widgetID,function(){if(b.showPasswordIcon&&b.icon){b.icon.show();b._positionIcon()}});b.interval=null;b.addHandler(c,"keydown.passwordinput"+b.widgetID,function(){if(b.showPasswordIcon&&b.icon){if(b.interval){clearInterval(b.interval)}var d=0;b.interval=setInterval(function(){if(b.icon[0].style.display!="none"){b._positionIcon();d++;if(d>5){clearInterval(b.interval)}}else{clearInterval(b.interval)}},100)}});b.addHandler(c,"focus.passwordinput"+b.widgetID,function(){b._focused=true;b.host.addClass(b.toThemeProperty("jqx-fill-state-focus"));if(b.placeHolder&&b._browserCheck&&!("placeholder" in b.element)&&c.val()==b.placeHolder){c.val("");if(b._hidden==true){c.attr("type","password")}}if(b.val().length>0){if(b.showStrength==true){var d=c.jqxTooltip("content");if(d){c.jqxTooltip("open")}}}if(b.showPasswordIcon&&b.icon){b.icon.show();b._positionIcon()}});b.addHandler(c,"blur.passwordinput"+b.widgetID,function(){b._focused=false;b.host.removeClass(b.toThemeProperty("jqx-fill-state-focus"));if(b.placeHolder&&b._browserCheck&&!("placeholder" in b.element)&&c.val()==""){c.val(b.placeHolder);c.attr("type","text")}if(b.showPasswordIcon==true&&b._browserCheck){if(b.rtl==false){b.host.removeClass(b.toThemeProperty("jqx-passwordinput-password-icon-ltr"))}else{b.host.removeClass(b.toThemeProperty("jqx-passwordinput-password-icon-rtl"))}}if(b.showStrength==true){c.jqxTooltip("close")}if(b.showPasswordIcon&&b.icon){b.icon.hide()}})},destroy:function(){if(this.host.jqxTooltip){this.host.jqxTooltip("destroy")}this.host.remove()},_setTheme:function(){var c=this.host;var b=this;c.addClass(b.toThemeProperty("jqx-widget"));c.addClass(b.toThemeProperty("jqx-widget-content"));c.addClass(b.toThemeProperty("jqx-input"));c.addClass(b.toThemeProperty("jqx-rc-all"));if(b.rtl==true){c.addClass(b.toThemeProperty("jqx-rtl"));c.css("direction","rtl")}else{c.removeClass(b.toThemeProperty("jqx-rtl"));c.css("direction","ltr")}},_showPassword:function(){if(this.showPasswordIcon==true&&this._browserCheck){var e=this;this.iconID=this.widgetID+"-password-icon";a("<span tabindex='-1' hasfocus='false' style='position: absolute; display: none;' id='"+e.iconID+"'></span>").insertAfter(e.host);var d=a("#"+e.iconID);e.icon=d;d.addClass(e.toThemeProperty("jqx-passwordinput-password-icon"));d.attr("title",e.localization.showPasswordString);e._positionIcon();var c=function(){e.host.attr("type","password");e._hidden=true;d.attr("title",e.localization.showPasswordString)};var b=function(){if(e._hidden==false){c()}else{if(e._hidden==true){e.host.attr("type","text");e._hidden=false}}};e.addHandler(e.icon,"mousedown.passwordinput"+e.iconID,function(f){b();return false});e.addHandler(e.icon,"mouseup.passwordinput"+e.iconID,function(f){c();return false});e.addHandler(a(document),"mousedown.passwordinput"+e.iconID,function(f){if(e._focused){c()}})}},_positionIcon:function(){var c=this.host.offset();var b=this.host.outerWidth();var d=this.host.outerHeight();if(this.rtl==true){this.icon.offset({top:parseInt(c.top+d/2-10/2),left:c.left+2})}else{this.icon.offset({top:parseInt(c.top+d/2-10/2),left:c.left+b-18})}},_showStrength:function(){var g=this;if(g.showStrength==true){if(g.host.jqxTooltip!=undefined){var e=g.widgetID+"Strength";var i=e+"Value";var c=e+"Indicator";var f;if(!g.strengthTypeRenderer){f="<div style='width: 220px;' id='"+e+"'><div><span style='font-weight: bold;'>"+g.localization.passwordStrengthString+": </span><span id='"+i+"'></span></div><div id='"+c+"'></div></div>"}else{var d=g.host.val();if(!("placeholder" in g.element)&&g._browserCheck&&d==g.placeHolder){d=""}g._countCharacters();var b=g.localization.tooShort;var h=g.strengthTypeRenderer(d,{letters:g.letters,numbers:g.numbers,specialKeys:g.specials},b);f=h}g.host.jqxTooltip({theme:g.theme,position:g.showStrengthPosition,content:f,trigger:"none",autoHide:false,rtl:g.rtl});if(!g.strengthTypeRenderer){a("#"+i).html(g.localization.tooShort);a("#"+c).addClass("jqx-passwordinput-password-strength-inicator").css("background-color",g.strengthColors.tooShort);if(g.rtl==false){a("#"+c).css("float","left")}else{a("#"+c).css("float","right")}}g._checkStrength()}else{throw new Error("jqxPasswordInput: Missing reference to jqxtooltip.js")}}},_checkStrength:function(){var b=this;var c=this.host;b.addHandler(a(window),"resize.passwordinput"+b.widgetID,function(){if(b.icon){b.icon.hide()}});b.addHandler(this.host,"keyup.passwordinput"+b.widgetID,function(){var f=b.host.val();var g=f.length;b._countCharacters();if(g>0){if(b.showStrength==true){var j=!c.jqxTooltip("opened");if(j){c.jqxTooltip("open")}}}var e=b.letters+b.numbers+2*b.specials+b.letters*b.numbers/2+g;var d;if(g<8){d=b.localization.tooShort}else{if(e<20){d=b.localization.weak}else{if(e<30){d=b.localization.fair}else{if(e<40){d=b.localization.good}else{d=b.localization.strong}}}}if(b.strengthTypeRenderer){var i=b.strengthTypeRenderer(f,{letters:b.letters,numbers:b.numbers,specialKeys:b.specials},d);b.host.jqxTooltip({content:i})}else{if(b.passwordStrength){var i=b.passwordStrength(f,{letters:b.letters,numbers:b.numbers,specialKeys:b.specials},d);a.each(b.localization,function(){var k=this;if(i==k){d=i;return false}})}a("#"+b.widgetID+"StrengthValue").html(d);var h=a("#"+b.widgetID+"StrengthIndicator");switch(d){case b.localization.tooShort:h.css({width:"20%","background-color":b.strengthColors.tooShort});break;case b.localization.weak:h.css({width:"40%","background-color":b.strengthColors.weak});break;case b.localization.fair:h.css({width:"60%","background-color":b.strengthColors.fair});break;case b.localization.good:h.css({width:"80%","background-color":b.strengthColors.good});break;case b.localization.strong:h.css({width:"100%","background-color":b.strengthColors.strong});break}}})},_countCharacters:function(){var g=this;g.letters=0;g.numbers=0;g.specials=0;var d="<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";var b=g.host.val();var f=b.length;for(var c=0;c<f;c++){var h=b.charAt(c);var e=b.charCodeAt(c);if((e>64&&e<91)||(e>96&&e<123)||(e>127&&e<155)||(e>159&&e<166)){g.letters+=1;continue}if(isNaN(h)==false){g.numbers+=1;continue}if(d.indexOf(h)!=-1){g.specials+=1;continue}}}})})(jqxBaseFramework);