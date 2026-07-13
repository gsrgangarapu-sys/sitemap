import "./iconv-lite.mjs";
import "./whatwg-encoding.mjs";
var State;
(function(State2) {
  State2[State2["Begin"] = 0] = "Begin";
  State2[State2["BOM16BE"] = 1] = "BOM16BE";
  State2[State2["BOM16LE"] = 2] = "BOM16LE";
  State2[State2["BOM8"] = 3] = "BOM8";
  State2[State2["UTF16LE_XML_PREFIX"] = 4] = "UTF16LE_XML_PREFIX";
  State2[State2["BeginLT"] = 5] = "BeginLT";
  State2[State2["UTF16BE_XML_PREFIX"] = 6] = "UTF16BE_XML_PREFIX";
  State2[State2["BeforeTag"] = 7] = "BeforeTag";
  State2[State2["BeforeTagName"] = 8] = "BeforeTagName";
  State2[State2["BeforeCloseTagName"] = 9] = "BeforeCloseTagName";
  State2[State2["CommentStart"] = 10] = "CommentStart";
  State2[State2["CommentEnd"] = 11] = "CommentEnd";
  State2[State2["TagNameMeta"] = 12] = "TagNameMeta";
  State2[State2["TagNameOther"] = 13] = "TagNameOther";
  State2[State2["XMLDeclaration"] = 14] = "XMLDeclaration";
  State2[State2["XMLDeclarationBeforeEncoding"] = 15] = "XMLDeclarationBeforeEncoding";
  State2[State2["XMLDeclarationAfterEncoding"] = 16] = "XMLDeclarationAfterEncoding";
  State2[State2["XMLDeclarationBeforeValue"] = 17] = "XMLDeclarationBeforeValue";
  State2[State2["XMLDeclarationValue"] = 18] = "XMLDeclarationValue";
  State2[State2["WeirdTag"] = 19] = "WeirdTag";
  State2[State2["BeforeAttribute"] = 20] = "BeforeAttribute";
  State2[State2["MetaAttribHttpEquiv"] = 21] = "MetaAttribHttpEquiv";
  State2[State2["MetaAttribHttpEquivValue"] = 22] = "MetaAttribHttpEquivValue";
  State2[State2["MetaAttribC"] = 23] = "MetaAttribC";
  State2[State2["MetaAttribContent"] = 24] = "MetaAttribContent";
  State2[State2["MetaAttribCharset"] = 25] = "MetaAttribCharset";
  State2[State2["MetaAttribAfterName"] = 26] = "MetaAttribAfterName";
  State2[State2["MetaContentValueQuotedBeforeEncoding"] = 27] = "MetaContentValueQuotedBeforeEncoding";
  State2[State2["MetaContentValueQuotedAfterEncoding"] = 28] = "MetaContentValueQuotedAfterEncoding";
  State2[State2["MetaContentValueQuotedBeforeValue"] = 29] = "MetaContentValueQuotedBeforeValue";
  State2[State2["MetaContentValueQuotedValueQuoted"] = 30] = "MetaContentValueQuotedValueQuoted";
  State2[State2["MetaContentValueQuotedValueUnquoted"] = 31] = "MetaContentValueQuotedValueUnquoted";
  State2[State2["MetaContentValueUnquotedBeforeEncoding"] = 32] = "MetaContentValueUnquotedBeforeEncoding";
  State2[State2["MetaContentValueUnquotedBeforeValue"] = 33] = "MetaContentValueUnquotedBeforeValue";
  State2[State2["MetaContentValueUnquotedValueQuoted"] = 34] = "MetaContentValueUnquotedValueQuoted";
  State2[State2["MetaContentValueUnquotedValueUnquoted"] = 35] = "MetaContentValueUnquotedValueUnquoted";
  State2[State2["AnyAttribName"] = 36] = "AnyAttribName";
  State2[State2["AfterAttributeName"] = 37] = "AfterAttributeName";
  State2[State2["BeforeAttributeValue"] = 38] = "BeforeAttributeValue";
  State2[State2["AttributeValueQuoted"] = 39] = "AttributeValueQuoted";
  State2[State2["AttributeValueUnquoted"] = 40] = "AttributeValueUnquoted";
})(State || (State = {}));
var ResultType;
(function(ResultType2) {
  ResultType2[ResultType2["BOM"] = 0] = "BOM";
  ResultType2[ResultType2["PASSED"] = 1] = "PASSED";
  ResultType2[ResultType2["XML_PREFIX"] = 2] = "XML_PREFIX";
  ResultType2[ResultType2["META_TAG"] = 3] = "META_TAG";
  ResultType2[ResultType2["XML_ENCODING"] = 4] = "XML_ENCODING";
  ResultType2[ResultType2["DEFAULT"] = 5] = "DEFAULT";
})(ResultType || (ResultType = {}));
var AttribType;
(function(AttribType2) {
  AttribType2[AttribType2["None"] = 0] = "None";
  AttribType2[AttribType2["HttpEquiv"] = 1] = "HttpEquiv";
  AttribType2[AttribType2["Content"] = 2] = "Content";
  AttribType2[AttribType2["Charset"] = 3] = "Charset";
})(AttribType || (AttribType = {}));
var Chars;
(function(Chars2) {
  Chars2[Chars2["NIL"] = 0] = "NIL";
  Chars2[Chars2["TAB"] = 9] = "TAB";
  Chars2[Chars2["LF"] = 10] = "LF";
  Chars2[Chars2["CR"] = 13] = "CR";
  Chars2[Chars2["SPACE"] = 32] = "SPACE";
  Chars2[Chars2["EXCLAMATION"] = 33] = "EXCLAMATION";
  Chars2[Chars2["DQUOTE"] = 34] = "DQUOTE";
  Chars2[Chars2["SQUOTE"] = 39] = "SQUOTE";
  Chars2[Chars2["DASH"] = 45] = "DASH";
  Chars2[Chars2["SLASH"] = 47] = "SLASH";
  Chars2[Chars2["SEMICOLON"] = 59] = "SEMICOLON";
  Chars2[Chars2["LT"] = 60] = "LT";
  Chars2[Chars2["EQUALS"] = 61] = "EQUALS";
  Chars2[Chars2["GT"] = 62] = "GT";
  Chars2[Chars2["QUESTION"] = 63] = "QUESTION";
  Chars2[Chars2["UpperA"] = 65] = "UpperA";
  Chars2[Chars2["UpperZ"] = 90] = "UpperZ";
  Chars2[Chars2["LowerA"] = 97] = "LowerA";
  Chars2[Chars2["LowerZ"] = 122] = "LowerZ";
})(Chars || (Chars = {}));
/* @__PURE__ */ new Set([Chars.SPACE, Chars.LF, Chars.CR, Chars.TAB]);
/* @__PURE__ */ new Set([
  Chars.SPACE,
  Chars.LF,
  Chars.CR,
  Chars.TAB,
  Chars.GT
]);
function toUint8Array(str) {
  const arr = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i);
  }
  return arr;
}
({
  XML_DECLARATION: toUint8Array("<?xml"),
  ENCODING: toUint8Array("encoding"),
  META: toUint8Array("meta"),
  HTTP_EQUIV: toUint8Array("http-equiv"),
  CONTENT: toUint8Array("content"),
  CONTENT_TYPE: toUint8Array("content-type"),
  CHARSET: toUint8Array("charset"),
  COMMENT_START: toUint8Array("<!--"),
  COMMENT_END: toUint8Array("-->")
});
