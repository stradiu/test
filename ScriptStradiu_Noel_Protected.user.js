// ==UserScript==
// @name        ScriptStradiu
// @namespace   test
// @author      Stradiu
// @description script noel
// @include     http://s2.fourmizzz.fr/Ressources.php
// @include     http://s2.fourmizzz.fr/Membre.php?Pseudo=*
// @include     http://s2.fourmizzz.fr/alliance.php?Membres*
// @include     https://docs.google.com/forms/d/e/1FAIpQLSceDoWXUx5HTBeNu4nK0TUbNHvia98Rn9x6jLzDmV269u66-A/viewform
// @include     https://docs.google.com/forms/d/e/1FAIpQLSceDoWXUx5HTBeNu4nK0TUbNHvia98Rn9x6jLzDmV269u66-A/formResponse
// @version     5.1.4
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==
var _0xbe71=["","\x72\x65\x70\x6C\x61\x63\x65","\x6D\x61\x74\x63\x68","\x3C\x66\x6F\x6E\x74\x20\x63\x6F\x6C\x6F\x72\x3D","\x20\x3E","\x3C\x2F\x66\x6F\x6E\x74\x3E","\x2E","\x69\x6E\x64\x65\x78\x4F\x66","\x20","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x32\x2E\x66\x6F\x75\x72\x6D\x69\x7A\x7A\x7A\x2E\x66\x72\x2F","\x73\x65\x61\x72\x63\x68","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x74\x61\x67\x5F\x61\x6C\x6C\x69\x61\x6E\x63\x65","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x4E\x4F\x45\x4C","\x70","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x2D\x2D\x2D\x2D\x2D\x3E\x20\x45\x52\x52\x45\x55\x52\x2C\x20\x6D\x65\x72\x63\x69\x20\x64\x65\x20\x73\x75\x70\x70\x72\x69\x6D\x65\x72\x20\x6C\x65\x20\x73\x63\x72\x69\x70\x74\x20\x64\x65\x20\x53\x74\x72\x61\x64\x69\x75\x2C\x20\x74\x75\x20\x6E\x27\x65\x73\x74\x20\x70\x6C\x75\x73\x20\xC3\x20\x20\x6C\x61\x20\x6E\x6F\x65\x6C\x21\x20\x3C\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x4E\x6F\x64\x65","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x6E\x65\x78\x74\x53\x69\x62\x6C\x69\x6E\x67","\x6D\x65\x6E\x75","\x63\x65\x6E\x74\x72\x65","\x63\x68\x69\x6C\x64\x4E\x6F\x64\x65\x73","\x69\x6E\x73\x65\x72\x74\x42\x65\x66\x6F\x72\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x32\x2E\x66\x6F\x75\x72\x6D\x69\x7A\x7A\x7A\x2E\x66\x72\x2F\x52\x65\x73\x73\x6F\x75\x72\x63\x65\x73\x2E\x70\x68\x70","\x71\x75\x61\x6E\x74\x69\x74\x65\x5F\x74\x64\x63","\x76\x61\x6C\x75\x65","\x52\x65\x63\x6F\x6C\x74\x65\x4D\x61\x74\x65\x72\x69\x61\x75\x78","\x63\x6C\x69\x63\x6B","\x23\x43\x68\x61\x6E\x67\x65\x52\x65\x73\x73\x6F\x75\x72\x63\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x32\x2E\x66\x6F\x75\x72\x6D\x69\x7A\x7A\x7A\x2E\x66\x72\x2F\x61\x6C\x6C\x69\x61\x6E\x63\x65\x2E\x70\x68\x70\x3F\x4D\x65\x6D\x62\x72\x65\x73\x26","\x74\x61\x62\x4D\x65\x6D\x62\x72\x65\x73\x41\x6C\x6C\x69\x61\x6E\x63\x65","\x70\x73\x65\x75\x64\x6F","\x74\x72","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65","\x74\x68","\x6C\x65\x6E\x67\x74\x68","\x74\x64","\x66\x69\x72\x73\x74\x43\x68\x69\x6C\x64","\x5F","\x74\x72\x70\x48\x61\x75\x74","\x74\x72\x70\x42\x61\x73","\x6F\x6B","\x62\x6F\x72\x64\x65\x72\x42\x6F\x74\x74\x6F\x6D\x53\x74\x79\x6C\x65","\x73\x74\x79\x6C\x65","\x64\x6F\x74\x74\x65\x64","\x62\x6F\x72\x64\x65\x72\x54\x6F\x70\x53\x74\x79\x6C\x65","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x43\x6F\x6C\x6F\x72","\x23\x63\x66\x62\x63\x39\x30","\x23\x63\x35\x62\x33\x38\x39","\x43\x68\x61\x73\x73\x65\x73","\x6C\x69\x73\x74\x65\x63\x68\x61\x69\x6E\x65","\x30","\x3C\x62\x72\x3E","\x73\x70\x6C\x69\x74","\x23\x64\x64\x34\x34\x37\x33","\x43\x68\x61\x73\x73\x65\x75\x72","\x23\x34\x34\x39\x33\x64\x64","\x50\x61\x73\x73\x65\x75\x72","\x23\x34\x34\x64\x64\x37\x36","\x47\x72\x65\x6E\x69\x65\x72","\x73\x6C\x69\x63\x65","\x62\x6F\x72\x64\x65\x72\x4C\x65\x66\x74\x43\x6F\x6C\x6F\x72","\x62\x6F\x72\x64\x65\x72\x4C\x65\x66\x74\x53\x74\x79\x6C\x65","\x73\x6F\x6C\x69\x64","\x62\x6F\x72\x64\x65\x72\x4C\x65\x66\x74\x57\x69\x64\x74\x68","\x32\x70\x78","\x62\x6F\x72\x64\x65\x72\x52\x69\x67\x68\x74\x43\x6F\x6C\x6F\x72","\x62\x6F\x72\x64\x65\x72\x52\x69\x67\x68\x74\x53\x74\x79\x6C\x65","\x62\x6F\x72\x64\x65\x72\x52\x69\x67\x68\x74\x57\x69\x64\x74\x68","\x62\x6C\x61\x63\x6B","\x23\x32\x31\x61\x61\x30\x31","\x23\x64\x33\x66\x66\x32\x31","\x23\x65\x38\x38\x33\x30\x30","\x23\x65\x38\x32\x31\x30\x30","\x23\x63\x36\x30\x30\x66\x66","\x3E","\x3C","\u21E3\x2E\x2E\x2E\u21E3","\x23\x62\x37\x35\x66\x31\x65","\x72","\x23\x65\x63\x32\x34\x32\x34","\x23\x64\x64\x36\x38\x34\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x32\x2E\x66\x6F\x75\x72\x6D\x69\x7A\x7A\x7A\x2E\x66\x72\x2F\x61\x6C\x6C\x69\x61\x6E\x63\x65\x2E\x70\x68\x70\x3F\x4D\x65\x6D\x62\x72\x65\x73","\x09","\x0D","\x54\x61\x62\x6D\x65\x6D\x62\x72\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x6F\x63\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x66\x6F\x72\x6D\x73\x2F\x64\x2F\x65\x2F\x31\x46\x41\x49\x70\x51\x4C\x53\x63\x65\x44\x6F\x57\x58\x55\x78\x35\x48\x54\x42\x65\x4E\x75\x34\x6E\x4B\x30\x54\x55\x62\x4E\x48\x76\x69\x61\x39\x38\x52\x6E\x39\x78\x36\x6A\x4C\x7A\x44\x6D\x56\x32\x36\x39\x75\x36\x36\x2D\x41\x2F\x76\x69\x65\x77\x66\x6F\x72\x6D","\x61\x73\x73\x69\x67\x6E","\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x55\x54\x43\x53\x74\x72\x69\x6E\x67","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x20","\x6E\x6F\x6E\x65","\x3B","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x63\x68\x61\x72\x41\x74","\x23\x63\x65\x6E\x74\x72\x65\x20\x63\x65\x6E\x74\x65\x72\x20\x2E\x62\x6F\x69\x74\x65\x5F\x6D\x65\x6D\x62\x72\x65","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72\x41\x6C\x6C","\x74\x61\x62\x6C\x65\x20\x74\x62\x6F\x64\x79\x20\x74\x72","\x62\x72","\x4F\x70\x74\x69\x6D\x69\x73\x61\x74\x69\x6F\x6E\x20\x3A","\x63\x6C\x6F\x6E\x65\x4E\x6F\x64\x65","\x63\x65\x6E\x74\x65\x72","\x54\x44\x43\x20\x66\x69\x6E\x61\x6C\x20\x3A\x20","\x4C\x75\x69\x20\x3A\x20","\x4D\x6F\x69\x20\x3A\x20","\x66\x6C\x6F\x6F\x72","\x63\x65\x69\x6C","\x50\x73\x65\x75\x64\x6F\x3D","\x23\x63\x65\x6E\x74\x72\x65\x20\x63\x65\x6E\x74\x65\x72\x20\x2E\x62\x6F\x69\x74\x65\x5F\x6D\x65\x6D\x62\x72\x65\x20\x64\x69\x76","\x23\x71\x75\x61\x6E\x74\x69\x74\x65\x5F\x74\x64\x63","\x74\x65\x73\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x6F\x63\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x66\x6F\x72\x6D\x73\x2F\x64\x2F\x65\x2F\x31\x46\x41\x49\x70\x51\x4C\x53\x63\x65\x44\x6F\x57\x58\x55\x78\x35\x48\x54\x42\x65\x4E\x75\x34\x6E\x4B\x30\x54\x55\x62\x4E\x48\x76\x69\x61\x39\x38\x52\x6E\x39\x78\x36\x6A\x4C\x7A\x44\x6D\x56\x32\x36\x39\x75\x36\x36\x2D\x41\x2F\x66\x6F\x72\x6D\x52\x65\x73\x70\x6F\x6E\x73\x65","\x73\x73\x2D\x66\x6F\x72\x6D\x2D\x64\x65\x73\x63\x20\x73\x73\x2D\x6E\x6F\x2D\x69\x67\x6E\x6F\x72\x65\x2D\x77\x68\x69\x74\x65\x73\x70\x61\x63\x65","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x65\x6E\x74\x72\x79\x5F\x31\x35\x31\x31\x37\x37\x39\x35\x34\x39","\x73\x73\x2D\x73\x75\x62\x6D\x69\x74"];function Convert_txt_to_num(_0x2991x2){while(_0x2991x2[_0xbe71[2]](/ /)){_0x2991x2= _0x2991x2[_0xbe71[1]](/ /,_0xbe71[0])};return parseFloat(_0x2991x2)}function Add_Font(_0x2991x2,_0x2991x4){return _0xbe71[3]+ _0x2991x4+ _0xbe71[4]+ _0x2991x2+ _0xbe71[5]}function Convert_num_to_txt(_0x2991x6){var _0x2991x7=_0x2991x6.toString(),_0x2991x8=_0x2991x7[_0xbe71[7]](_0xbe71[6]);return _0x2991x7[_0xbe71[1]](/\d(?=(?:\d{3})+(?:\.|$))/g,function(_0x2991x9,_0x2991xa){return _0x2991x8< 0|| _0x2991xa< _0x2991x8?(_0x2991x9+ _0xbe71[8]):_0x2991x9})}if(window[_0xbe71[12]][_0xbe71[11]][_0xbe71[10]](_0xbe71[9])!=  -1){var tag=document[_0xbe71[15]](_0xbe71[14])[_0xbe71[13]];if(tag!= _0xbe71[16]){var para=document[_0xbe71[18]](_0xbe71[17]);var textnode=document[_0xbe71[20]](_0xbe71[19]);para[_0xbe71[21]](textnode);var cible=document[_0xbe71[15]](_0xbe71[23])[_0xbe71[22]][_0xbe71[22]];var center=document[_0xbe71[15]](_0xbe71[24]);center[_0xbe71[26]](para,center[_0xbe71[25]][0])}else {if(window[_0xbe71[12]][_0xbe71[11]]== _0xbe71[27]){setTimeout(function(){var _0x2991x10=parseFloat(document[_0xbe71[15]](_0xbe71[28])[_0xbe71[13]]);var _0x2991x11=Convert_txt_to_num(document[_0xbe71[15]](_0xbe71[30])[_0xbe71[29]]);if(_0x2991x11!= _0x2991x10){document[_0xbe71[15]](_0xbe71[30])[_0xbe71[29]]= Convert_num_to_txt(_0x2991x10);$(_0xbe71[32])[_0xbe71[31]]()}},100)};if(window[_0xbe71[12]][_0xbe71[11]]== _0xbe71[33]){var checkExist=setInterval(function(){if(document[_0xbe71[15]](_0xbe71[34])){clearInterval(checkExist);var _0x2991x13=6;var _0x2991x14,_0x2991x15;var _0x2991x16= new Array();var _0x2991x17=document[_0xbe71[15]](_0xbe71[35])[_0xbe71[13]];var _0x2991x18=Number(document[_0xbe71[15]](_0xbe71[28])[_0xbe71[13]]);var _0x2991x19=false;var Tab_membres=document[_0xbe71[15]](_0xbe71[34])[_0xbe71[13]];var _0x2991x1b= new Array(),_0x2991x1c= new Array();var ligne=document[_0xbe71[15]](_0xbe71[34])[_0xbe71[37]](_0xbe71[36]);var _0x2991x1e=ligne[0][_0xbe71[37]](_0xbe71[38]);for(var _0x2991xa=1;_0x2991xa< ligne[_0xbe71[39]];_0x2991xa++){_0x2991x1b[_0x2991xa- 1]= ligne[_0x2991xa][_0xbe71[37]](_0xbe71[40]);_0x2991x1c[_0x2991xa- 1]= _0x2991x1b[_0x2991xa- 1][3][_0xbe71[41]][_0xbe71[13]];_0x2991x1b[_0x2991xa- 1][2][_0xbe71[13]]= _0xbe71[42];_0x2991x14= document[_0xbe71[18]](_0xbe71[40]);ligne[_0x2991xa][_0xbe71[26]](_0x2991x14,_0x2991x1b[_0x2991xa- 1][_0x2991x13]);_0x2991x15= Convert_txt_to_num(_0x2991x1b[_0x2991xa- 1][5][_0xbe71[13]]);if(_0x2991x18* 3< _0x2991x15){_0x2991x16[_0x2991xa- 1]= _0xbe71[43]}else {if(_0x2991x18* 0.5> _0x2991x15){_0x2991x16[_0x2991xa- 1]= _0xbe71[44]}else {_0x2991x16[_0x2991xa- 1]= _0xbe71[45]}};if(_0x2991xa> 2){if((_0x2991x16[_0x2991xa- 1]== _0xbe71[45]|| _0x2991x16[_0x2991xa- 1]== _0xbe71[44])&& _0x2991x16[_0x2991xa- 2]== _0xbe71[43]){_0x2991x1b[_0x2991xa- 1][5][_0xbe71[47]][_0xbe71[46]]= _0xbe71[48]}else {if(_0x2991x16[_0x2991xa- 1]== _0xbe71[44]&& _0x2991x16[_0x2991xa- 2]== _0xbe71[45]){_0x2991x1b[_0x2991xa- 1][5][_0xbe71[47]][_0xbe71[49]]= _0xbe71[48]}}};if(_0x2991xa% 2== 1){ligne[_0x2991xa][_0xbe71[47]][_0xbe71[50]]= _0xbe71[51]}else {ligne[_0x2991xa][_0xbe71[47]][_0xbe71[50]]= _0xbe71[52]}};var _0x2991x1f=document[_0xbe71[18]](_0xbe71[38]);_0x2991x1f[_0xbe71[21]](document[_0xbe71[20]](_0xbe71[53]));ligne[0][_0xbe71[26]](_0x2991x1f,_0x2991x1e[_0x2991x13]);var _0x2991x20=GM_getValue(_0xbe71[54],_0xbe71[55]);var _0x2991x21=_0x2991x20[_0xbe71[57]](_0xbe71[56]);var _0x2991x14,_0x2991x22= new Array(),_0x2991x23= new Array(),_0x2991x24= new Array(),_0x2991x25= new Array(),_0x2991x26= new Array(),_0x2991x27= new Array(_0x2991x21[_0xbe71[39]]);for(_0x2991xa= 0;_0x2991xa< (_0x2991x21[_0xbe71[39]]- 1);_0x2991xa++){_0x2991x26[_0x2991xa]= _0x2991x21[_0x2991xa][_0xbe71[57]](_0xbe71[8]);_0x2991x22[_0x2991xa]= _0x2991x26[_0x2991xa][0];_0x2991x23[_0x2991xa]= _0x2991x26[_0x2991xa][1];_0x2991x24[_0x2991xa]= _0x2991x26[_0x2991xa][2];_0x2991x25[_0x2991xa]= parseInt(_0x2991x26[_0x2991xa][3]);if(_0x2991x22[_0x2991xa]== _0x2991x17){var _0x2991x28=_0x2991xa};for(var _0x2991x29=0;_0x2991x29< (_0x2991x1c[_0xbe71[39]]);_0x2991x29++){if(_0x2991x22[_0x2991xa]== _0x2991x1c[_0x2991x29]){_0x2991x27[_0x2991xa]= _0x2991x29}}};for(var _0x2991xa=0;_0x2991xa< (_0x2991x21[_0xbe71[39]]- 1);_0x2991xa++){if(_0x2991x27[_0x2991xa]!= undefined){var _0x2991x4;switch(_0x2991x24[_0x2991xa]){case _0xbe71[59]:_0x2991x4= _0xbe71[58];break;case _0xbe71[61]:_0x2991x4= _0xbe71[60];break;case _0xbe71[63]:_0x2991x4= _0xbe71[62];break};_0x2991x1b[_0x2991x27[_0x2991xa]][0][_0xbe71[13]]= _0x2991x24[_0x2991xa][_0xbe71[64]](0,2);_0x2991x1b[_0x2991x27[_0x2991xa]][0][_0xbe71[47]][_0xbe71[65]]= _0x2991x4;_0x2991x1b[_0x2991x27[_0x2991xa]][0][_0xbe71[47]][_0xbe71[66]]= _0xbe71[67];_0x2991x1b[_0x2991x27[_0x2991xa]][0][_0xbe71[47]][_0xbe71[68]]= _0xbe71[69];_0x2991x1b[_0x2991x27[_0x2991xa]][0][_0xbe71[47]][_0xbe71[70]]= _0x2991x4;_0x2991x1b[_0x2991x27[_0x2991xa]][0][_0xbe71[47]][_0xbe71[71]]= _0xbe71[67];_0x2991x1b[_0x2991x27[_0x2991xa]][0][_0xbe71[47]][_0xbe71[72]]= _0xbe71[69];_0x2991x1b[_0x2991x27[_0x2991xa]][2][_0xbe71[13]]= _0x2991x25[_0x2991xa];_0x2991x4= _0xbe71[73];if(_0x2991x25[_0x2991xa]>= _0x2991x25[_0x2991x28]){_0x2991x19= true}else {_0x2991x19= false};if(_0x2991x19== true){_0x2991x4= _0xbe71[74];if(_0x2991x24[_0x2991xa]== _0xbe71[59]){_0x2991x4= _0xbe71[75]};if(_0x2991x25[_0x2991xa]> 800){_0x2991x4= _0xbe71[76]};if(_0x2991x25[_0x2991xa]> 900){_0x2991x4= _0xbe71[77]};if(_0x2991x17== _0x2991x22[_0x2991xa]){_0x2991x4= _0xbe71[78]}};var _0x2991x2a=_0xbe71[79]+ _0x2991x22[_0x2991xa]+ _0xbe71[80];var _0x2991x2b=_0xbe71[79]+ Add_Font(_0x2991x22[_0x2991xa],_0x2991x4)+ _0xbe71[80];_0x2991x1b[_0x2991x27[_0x2991xa]][3][_0xbe71[13]]= _0x2991x1b[_0x2991x27[_0x2991xa]][3][_0xbe71[13]][_0xbe71[1]](_0x2991x2a,_0x2991x2b);if(_0x2991x23[_0x2991xa]== _0xbe71[81]){_0x2991x4= _0xbe71[82]}else {if(_0x2991x23[_0x2991xa][_0xbe71[64]](0,1)== _0xbe71[83]){_0x2991x4= _0xbe71[84]}else {if(parseInt(_0x2991x23[_0x2991xa][_0xbe71[64]](0,1))){if(parseInt(_0x2991x23[_0x2991xa][_0xbe71[64]](0,2))){if(parseInt(_0x2991x23[_0x2991xa][_0xbe71[64]](0,1))< 3){_0x2991x4= _0xbe71[85]}else {_0x2991x4= _0xbe71[73]}}}}};_0x2991x1b[_0x2991x27[_0x2991xa]][7][_0xbe71[13]]= Add_Font(_0x2991x23[_0x2991xa],_0x2991x4)}}}},5)};if(window[_0xbe71[12]][_0xbe71[11]]== _0xbe71[86]){var Tab_membres;var checkExist=setInterval(function(){if(document[_0xbe71[15]](_0xbe71[34])){clearInterval(checkExist);Tab_membres= document[_0xbe71[15]](_0xbe71[34])[_0xbe71[13]];Tab_membres= Tab_membres[_0xbe71[1]](/\s/gi,_0xbe71[0]);Tab_membres= Tab_membres[_0xbe71[1]](/(<\/th>)/gi,_0xbe71[87]);Tab_membres= Tab_membres[_0xbe71[1]](/(<\/td>)/gi,_0xbe71[87]);Tab_membres= Tab_membres[_0xbe71[1]](/(<\/tr>)/gi,_0xbe71[88]);Tab_membres= Tab_membres[_0xbe71[1]](/(<([^>]+)>)/gi,_0xbe71[0]);GM_setValue(_0xbe71[89],String(Tab_membres));window[_0xbe71[12]][_0xbe71[91]](_0xbe71[90])}},5)};function setCookie(_0x2991x2d,_0x2991x2e,_0x2991x2f,_0x2991x30){var _0x2991x31= new Date();_0x2991x31[_0xbe71[93]](_0x2991x31[_0xbe71[92]]()+ (_0x2991x2f* 24* 60* 60* 1000));var _0x2991x32=_0xbe71[94]+ _0x2991x31[_0xbe71[95]]();document[_0xbe71[96]]= _0x2991x2d+ _0xbe71[97]+ _0x2991x2e+ _0xbe71[98]+ _0x2991x32;pageTracker._setDomainName(_0xbe71[99])}function getCookie(_0x2991x2d){var _0x2991x34=_0x2991x2d+ _0xbe71[97];var _0x2991x35=document[_0xbe71[96]][_0xbe71[57]](_0xbe71[100]);for(var _0x2991xa=0;_0x2991xa< _0x2991x35[_0xbe71[39]];_0x2991xa++){var _0x2991x36=_0x2991x35[_0x2991xa];while(_0x2991x36[_0xbe71[102]](0)== _0xbe71[8]){_0x2991x36= _0x2991x36[_0xbe71[101]](1)};if(_0x2991x36[_0xbe71[7]](_0x2991x34)== 0){return _0x2991x36[_0xbe71[101]](_0x2991x34[_0xbe71[39]],_0x2991x36[_0xbe71[39]])}};return _0xbe71[0]}function ecrire_donnee(_0x2991x38,_0x2991x39,_0x2991x3a){var _0x2991x3b=document[_0xbe71[104]](_0xbe71[103]);_0x2991x3b= _0x2991x3b[1][_0xbe71[104]](_0xbe71[105]);_0x2991x3b= _0x2991x3b[0];var _0x2991x3c=document[_0xbe71[18]](_0xbe71[106]);var _0x2991x2=document[_0xbe71[20]](_0xbe71[107]);var _0x2991x3d=document[_0xbe71[18]](_0xbe71[17]);_0x2991x3d[_0xbe71[21]](_0x2991x2);_0x2991x3d[_0xbe71[21]](_0x2991x3c);var _0x2991x3e=0;for(var _0x2991xa=0;_0x2991xa< _0x2991x38[_0xbe71[39]];_0x2991xa++){_0x2991x3e+= _0x2991x38[_0x2991xa];_0x2991x2= document[_0xbe71[20]](Convert_num_to_txt(_0x2991x38[_0x2991xa]));_0x2991x3d[_0xbe71[21]](_0x2991x2);_0x2991x3d[_0xbe71[21]](_0x2991x3c[_0xbe71[108]](false))};var _0x2991x3f=document[_0xbe71[18]](_0xbe71[109]);var _0x2991x40=document[_0xbe71[18]](_0xbe71[40]);_0x2991x3f[_0xbe71[21]](_0x2991x3d);_0x2991x40[_0xbe71[21]](_0x2991x3f);_0x2991x3b[_0xbe71[21]](_0x2991x40);var _0x2991x2=document[_0xbe71[20]](_0xbe71[110]);var _0x2991x3d=document[_0xbe71[18]](_0xbe71[17]);_0x2991x3d[_0xbe71[21]](_0x2991x2);_0x2991x3d[_0xbe71[21]](_0x2991x3c[_0xbe71[108]](false));var _0x2991x2=document[_0xbe71[20]](_0xbe71[111]);_0x2991x3d[_0xbe71[21]](_0x2991x2);var _0x2991x2=document[_0xbe71[20]](Convert_num_to_txt(_0x2991x3a- _0x2991x3e));_0x2991x3d[_0xbe71[21]](_0x2991x2);_0x2991x3d[_0xbe71[21]](_0x2991x3c[_0xbe71[108]](false));var _0x2991x2=document[_0xbe71[20]](_0xbe71[112]);_0x2991x3d[_0xbe71[21]](_0x2991x2);var _0x2991x2=document[_0xbe71[20]](Convert_num_to_txt(_0x2991x39+ _0x2991x3e));_0x2991x3d[_0xbe71[21]](_0x2991x2);var _0x2991x3f=document[_0xbe71[18]](_0xbe71[109]);var _0x2991x40=document[_0xbe71[18]](_0xbe71[40]);_0x2991x3f[_0xbe71[21]](_0x2991x3d);_0x2991x40[_0xbe71[21]](_0x2991x3f);_0x2991x3b[_0xbe71[21]](_0x2991x40)}function calcul_opti(_0x2991x39,_0x2991x3a){var _0x2991xa=0;var _0x2991x38=[0];var _0x2991x42=Math[_0xbe71[113]](((_0x2991x39+ _0x2991x3a)/ 3)+ 1);var _0x2991x43=_0x2991x3a;var _0x2991x44=_0x2991x39;while(Math[_0xbe71[113]](_0x2991x43* 0.8)> _0x2991x42){_0x2991x38[_0x2991xa]= Math[_0xbe71[113]](_0x2991x43* 0.2);_0x2991x44+= _0x2991x38[_0x2991xa];_0x2991x43-= _0x2991x38[_0x2991xa];_0x2991xa++};_0x2991x38[_0x2991xa]= _0x2991x43- _0x2991x42;_0x2991x44+= _0x2991x38[_0x2991xa];_0x2991x43-= _0x2991x38[_0x2991xa];_0x2991xa++;_0x2991x38[_0x2991xa]= Math[_0xbe71[114]](_0x2991x43* 0.2);_0x2991x44+= _0x2991x38[_0x2991xa];_0x2991x43-= _0x2991x38[_0x2991xa];return _0x2991x38}if(window[_0xbe71[12]][_0xbe71[11]][_0xbe71[10]](_0xbe71[115])!=  -1){var boite_membre=document[_0xbe71[104]](_0xbe71[116]);var ligne=boite_membre[1][_0xbe71[104]](_0xbe71[105]);var colonnes=ligne[1][_0xbe71[104]](_0xbe71[40]);var tdc_cible=colonnes[1][_0xbe71[13]];tdc_cible= Convert_txt_to_num(tdc_cible);var tdc_joueur=document[_0xbe71[104]](_0xbe71[117])[0];tdc_joueur= Convert_txt_to_num(tdc_joueur[_0xbe71[13]]);var k=_0xbe71[118];if(tdc_cible> 3* tdc_joueur|| tdc_cible< 0.5* tdc_joueur){;}else {ecrire_donnee(calcul_opti(tdc_joueur,tdc_cible),tdc_joueur,tdc_cible)}}}};if(window[_0xbe71[12]][_0xbe71[11]]== _0xbe71[119]){window[_0xbe71[12]][_0xbe71[11]]= _0xbe71[33]};if(window[_0xbe71[12]][_0xbe71[11]]== _0xbe71[90]){setTimeout(function(){var Tab_membres=GM_getValue(_0xbe71[89],_0xbe71[55]);var _0x2991x20=GM_setValue(_0xbe71[54],document[_0xbe71[121]](_0xbe71[120])[0][_0xbe71[13]]);document[_0xbe71[15]](_0xbe71[122])[_0xbe71[29]]= Tab_membres;document[_0xbe71[15]](_0xbe71[123])[_0xbe71[31]]()},1)}
