// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/editor/util/templates/TransformPane.html":'\x3cdiv class\x3d"gxePrimaryPane gxeTransformPane" data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv class\x3d"gxePrompt" data-dojo-attach-point\x3d"promptNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"gxeSection" data-dojo-attach-point\x3d"typesSection"\x3e\r\n  \t\x3cdiv data-dojo-attach-point\x3d"typesNode"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/editor/util/TransformPane","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/has ../../base/Templated dojo/text!./templates/TransformPane.html dojo/i18n!../../nls/i18nBase ../../../../kernel".split(" "),function(a,c,e,d,f,g,h,l,k){a=a([g],{editor:null,dialogBroker:null,documentTypes:null,prompt:null,templateString:h,postCreate:function(){this.inherited(arguments);this._initialize()},onSelect:function(b){},_addDocType:function(b){var a=d.create("div",
{},this.typesNode),a=d.create("div",{"class":"gxeClickableText gxeLine",onclick:c.hitch(this,function(){this._selectDocType(b)})},a);this.setI18nNodeText(a,b.caption)},_initialize:function(){null!==this.prompt&&(this.setI18nNodeText(this.promptNode,this.prompt),this.promptNode.style.display="");e.forEach(this.documentTypes,function(a){this._addDocType(a)},this)},_selectDocType:function(a){this.onSelect(a)}});f("extend-esri")&&c.setObject("dijit.metadata.editor.util.TransformPane",a,k);return a});