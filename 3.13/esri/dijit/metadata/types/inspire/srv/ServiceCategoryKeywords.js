// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/inspire/srv/templates/ServiceCategoryKeywords.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n\t  data-dojo-props\x3d"target:\'gmd:descriptiveKeywords\',showHeader:false,\r\n\t  \tlabel:\'${i18nInspire.keywordSections.serviceCategory}\',\r\n\t  \tmatchTopNode: [\r\n\t  \t  {\r\n\t   \t  qPath:\'gmd:MD_Keywords/gmd:thesaurusName/gmd:CI_Citation/gmd:title/gco:CharacterString\',\r\n\t        qValue:\'ISO 19119 service taxonomy\',\r\n\t        qMode:\'must\'\r\n\t      }  \r\n\t  \t]"\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n\t\t\tdata-dojo-props\x3d"target:\'gmd:MD_Keywords\',minOccurs:0"\x3e\r\n\t\t\t \r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\t\tdata-dojo-props\x3d"target:\'gmd:keyword\',minOccurs:1,maxOccurs:\'unbounded\',\r\n\t\t\t\t\tlabel:\'${i18nInspire.keywordSections.serviceCategory}\'"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectMany"\r\n\t\t\t\t\tdata-dojo-props\x3d"subTarget:\'gco:CharacterString\'"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/inspire/srv/ServiceCategoryOptions"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\r\n\t\t\t\x3c!--\r\n\t\t\t\x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeListReference" data-dojo-props\x3d"target:\'gmd:type\',\r\n\t\t\t\t\tfixed:true,label:\'Do we need the MD_KeywordTypeCode?\'"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeListElement" data-dojo-props\x3d"target:\'gmd:MD_KeywordTypeCode\'"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeSpaceAttribute"\x3e\x3c/div\x3e  \r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeListAttribute"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"value:\'${codeListPrefix}MD_KeywordTypeCode\'"\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeListValueAttribute" \r\n\t\t\t\t\t\tdata-dojo-props\x3d"value:\'theme\'"\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\t\t\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t--\x3e\r\n\t\t\t\r\n\t\t\t\x3c!-- ISO 19119 service taxonomy --\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:thesaurusName\',\r\n\t\t\t\t\tfixed:true,hide:true"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:CI_Citation\'"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:title\'"\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gco:CharacterString\',\r\n\t\t\t\t\t\t\tvalue:\'ISO 19119 service taxonomy\'"\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:date\'"\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:CI_Date\'"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:date\'"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gco:Date\',\r\n\t\t\t\t\t\t\t\t\tvalue:\'2003\'"\x3e\r\n\t\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference" data-dojo-props\x3d"target:\'gmd:dateType\'"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListElement" data-dojo-props\x3d"target:\'gmd:CI_DateTypeCode\'"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c!-- \x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeSpaceAttribute"\x3e\x3c/div\x3e  --\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListAttribute"\r\n\t\t\t\t\t\t\t\t\t\tdata-dojo-props\x3d"value:\'${inspireCodeListPrefix}CI_DateTypeCode\'"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListValueAttribute"\r\n\t\t\t\t\t\t\t\t\t\tdata-dojo-props\x3d"value:\'publication\'"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3c/div\x3e\t\t\r\n\t\t\t\t\t\t\t\x3c/div\x3e\t\t\t\t\t\t\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/inspire/srv/ServiceCategoryKeywords","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/InputSelectMany ../../../form/iso/AbstractObject ../../../form/iso/CodeListAttribute ../../../form/iso/CodeListValueAttribute ../../../form/iso/CodeListElement ../../../form/iso/CodeListReference ../../../form/iso/ObjectReference ./ServiceCategoryOptions dojo/text!./templates/ServiceCategoryKeywords.html ../../../../../kernel".split(" "),
function(a,b,c,d,g,h,k,l,m,n,p,q,r,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.inspire.srv.ServiceCategoryKeywords",a,f);return a});