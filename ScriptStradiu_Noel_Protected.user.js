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
// @version     5.1.3
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==
test1

var _0xba4a=["","\x72\x65\x70\x6C\x61\x63\x65","\x6D\x61\x74\x63\x68","\x3C\x66\x6F\x6E\x74\x20\x63\x6F\x6C\x6F\x72\x3D","\x3E","\x3C\x2F\x66\x6F\x6E\x74\x3E","\x2E","\x69\x6E\x64\x65\x78\x4F\x66","\x20","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x32\x2E\x66\x6F\x75\x72\x6D\x69\x7A\x7A\x7A\x2E\x66\x72\x2F","\x73\x65\x61\x72\x63\x68","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x74\x61\x67\x5F\x61\x6C\x6C\x69\x61\x6E\x63\x65","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x4E\x4F\x45\x4C","\x70","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x2D\x2D\x2D\x2D\x2D\x3E\x20\x45\x52\x52\x45\x55\x52\x2C\x20\x6D\x65\x72\x63\x69\x20\x64\x65\x20\x73\x75\x70\x70\x72\x69\x6D\x65\x72\x20\x6C\x65\x20\x73\x63\x72\x69\x70\x74\x20\x64\x65\x20\x53\x74\x72\x61\x64\x69\x75\x2C\x20\x74\x75\x20\x6E\x27\x65\x73\x74\x20\x70\x6C\x75\x73\x20\xC3\x20\x20\x6C\x61\x20\x6E\x6F\x65\x6C\x21\x20\x3C\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x4E\x6F\x64\x65","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x6E\x65\x78\x74\x53\x69\x62\x6C\x69\x6E\x67","\x6D\x65\x6E\x75","\x63\x65\x6E\x74\x72\x65","\x63\x68\x69\x6C\x64\x4E\x6F\x64\x65\x73","\x69\x6E\x73\x65\x72\x74\x42\x65\x66\x6F\x72\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x32\x2E\x66\x6F\x75\x72\x6D\x69\x7A\x7A\x7A\x2E\x66\x72\x2F\x52\x65\x73\x73\x6F\x75\x72\x63\x65\x73\x2E\x70\x68\x70","\x71\x75\x61\x6E\x74\x69\x74\x65\x5F\x74\x64\x63","\x76\x61\x6C\x75\x65","\x52\x65\x63\x6F\x6C\x74\x65\x4D\x61\x74\x65\x72\x69\x61\x75\x78","\x63\x6C\x69\x63\x6B","\x23\x43\x68\x61\x6E\x67\x65\x52\x65\x73\x73\x6F\x75\x72\x63\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x32\x2E\x66\x6F\x75\x72\x6D\x69\x7A\x7A\x7A\x2E\x66\x72\x2F\x61\x6C\x6C\x69\x61\x6E\x63\x65\x2E\x70\x68\x70\x3F\x4D\x65\x6D\x62\x72\x65\x73\x26","\x74\x61\x62\x4D\x65\x6D\x62\x72\x65\x73\x41\x6C\x6C\x69\x61\x6E\x63\x65","\x70\x73\x65\x75\x64\x6F","\x74\x72","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65","\x74\x68","\x6C\x65\x6E\x67\x74\x68","\x74\x64","\x66\x69\x72\x73\x74\x43\x68\x69\x6C\x64","\x5F","\x74\x72\x70\x48\x61\x75\x74","\x74\x72\x70\x42\x61\x73","\x6F\x6B","\x62\x6F\x72\x64\x65\x72\x42\x6F\x74\x74\x6F\x6D\x53\x74\x79\x6C\x65","\x73\x74\x79\x6C\x65","\x64\x6F\x74\x74\x65\x64","\x62\x6F\x72\x64\x65\x72\x54\x6F\x70\x53\x74\x79\x6C\x65","\x43\x68\x61\x73\x73\x65\x73","\x6C\x69\x73\x74\x65\x63\x68\x61\x69\x6E\x65","\x30","\x3C\x62\x72\x3E","\x73\x70\x6C\x69\x74","\x23\x64\x64\x34\x34\x37\x33","\x43\x68\x61\x73\x73\x65\x75\x72","\x23\x34\x34\x39\x33\x64\x64","\x50\x61\x73\x73\x65\x75\x72","\x23\x34\x34\x64\x64\x37\x36","\x47\x72\x65\x6E\x69\x65\x72","\x73\x6C\x69\x63\x65","\x62\x6F\x72\x64\x65\x72\x4C\x65\x66\x74\x43\x6F\x6C\x6F\x72","\x62\x6F\x72\x64\x65\x72\x4C\x65\x66\x74\x53\x74\x79\x6C\x65","\x73\x6F\x6C\x69\x64","\x62\x6F\x72\x64\x65\x72\x4C\x65\x66\x74\x57\x69\x64\x74\x68","\x32\x70\x78","\x62\x6F\x72\x64\x65\x72\x52\x69\x67\x68\x74\x43\x6F\x6C\x6F\x72","\x62\x6F\x72\x64\x65\x72\x52\x69\x67\x68\x74\x53\x74\x79\x6C\x65","\x62\x6F\x72\x64\x65\x72\x52\x69\x67\x68\x74\x57\x69\x64\x74\x68","\x62\x6C\x61\x63\x6B","\x23\x65\x33\x30\x32\x62\x31","\x23\x65\x34\x38\x33\x31\x30","\x23\x65\x34\x34\x32\x31\x30","\x23\x63\x36\x30\x30\x66\x66","\x3C","\u21E3\x2E\x2E\x2E\u21E3","\x23\x62\x37\x35\x66\x31\x65","\x72","\x23\x65\x63\x32\x34\x32\x34","\x23\x64\x64\x36\x38\x34\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x32\x2E\x66\x6F\x75\x72\x6D\x69\x7A\x7A\x7A\x2E\x66\x72\x2F\x61\x6C\x6C\x69\x61\x6E\x63\x65\x2E\x70\x68\x70\x3F\x4D\x65\x6D\x62\x72\x65\x73","\x09","\x0D","\x54\x61\x62\x6D\x65\x6D\x62\x72\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x6F\x63\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x66\x6F\x72\x6D\x73\x2F\x64\x2F\x65\x2F\x31\x46\x41\x49\x70\x51\x4C\x53\x63\x65\x44\x6F\x57\x58\x55\x78\x35\x48\x54\x42\x65\x4E\x75\x34\x6E\x4B\x30\x54\x55\x62\x4E\x48\x76\x69\x61\x39\x38\x52\x6E\x39\x78\x36\x6A\x4C\x7A\x44\x6D\x56\x32\x36\x39\x75\x36\x36\x2D\x41\x2F\x76\x69\x65\x77\x66\x6F\x72\x6D","\x61\x73\x73\x69\x67\x6E","\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x55\x54\x43\x53\x74\x72\x69\x6E\x67","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x20","\x6E\x6F\x6E\x65","\x3B","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x63\x68\x61\x72\x41\x74","\x23\x63\x65\x6E\x74\x72\x65\x20\x63\x65\x6E\x74\x65\x72\x20\x2E\x62\x6F\x69\x74\x65\x5F\x6D\x65\x6D\x62\x72\x65","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72\x41\x6C\x6C","\x74\x61\x62\x6C\x65\x20\x74\x62\x6F\x64\x79\x20\x74\x72","\x62\x72","\x4F\x70\x74\x69\x6D\x69\x73\x61\x74\x69\x6F\x6E\x20\x3A","\x63\x6C\x6F\x6E\x65\x4E\x6F\x64\x65","\x63\x65\x6E\x74\x65\x72","\x54\x44\x43\x20\x66\x69\x6E\x61\x6C\x20\x3A\x20","\x4C\x75\x69\x20\x3A\x20","\x4D\x6F\x69\x20\x3A\x20","\x66\x6C\x6F\x6F\x72","\x63\x65\x69\x6C","\x50\x73\x65\x75\x64\x6F\x3D","\x23\x63\x65\x6E\x74\x72\x65\x20\x63\x65\x6E\x74\x65\x72\x20\x2E\x62\x6F\x69\x74\x65\x5F\x6D\x65\x6D\x62\x72\x65\x20\x64\x69\x76","\x23\x71\x75\x61\x6E\x74\x69\x74\x65\x5F\x74\x64\x63","\x74\x65\x73\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x6F\x63\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x66\x6F\x72\x6D\x73\x2F\x64\x2F\x65\x2F\x31\x46\x41\x49\x70\x51\x4C\x53\x63\x65\x44\x6F\x57\x58\x55\x78\x35\x48\x54\x42\x65\x4E\x75\x34\x6E\x4B\x30\x54\x55\x62\x4E\x48\x76\x69\x61\x39\x38\x52\x6E\x39\x78\x36\x6A\x4C\x7A\x44\x6D\x56\x32\x36\x39\x75\x36\x36\x2D\x41\x2F\x66\x6F\x72\x6D\x52\x65\x73\x70\x6F\x6E\x73\x65","\x73\x73\x2D\x66\x6F\x72\x6D\x2D\x64\x65\x73\x63\x20\x73\x73\x2D\x6E\x6F\x2D\x69\x67\x6E\x6F\x72\x65\x2D\x77\x68\x69\x74\x65\x73\x70\x61\x63\x65","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x65\x6E\x74\x72\x79\x5F\x31\x35\x31\x31\x37\x37\x39\x35\x34\x39","\x73\x73\x2D\x73\x75\x62\x6D\x69\x74"];function Convert_txt_to_num(_0xd9b3x2){while(_0xd9b3x2[_0xba4a[2]](/ /)){_0xd9b3x2= _0xd9b3x2[_0xba4a[1]](/ /,_0xba4a[0])};return parseFloat(_0xd9b3x2)}function Add_Font(_0xd9b3x2,_0xd9b3x4){return _0xba4a[3]+ _0xd9b3x4+ _0xba4a[4]+ _0xd9b3x2+ _0xba4a[5]}function Convert_num_to_txt(_0xd9b3x6){var _0xd9b3x7=_0xd9b3x6.toString(),_0xd9b3x8=_0xd9b3x7[_0xba4a[7]](_0xba4a[6]);return _0xd9b3x7[_0xba4a[1]](/\d(?=(?:\d{3})+(?:\.|$))/g,function(_0xd9b3x9,_0xd9b3xa){return _0xd9b3x8< 0|| _0xd9b3xa< _0xd9b3x8?(_0xd9b3x9+ _0xba4a[8]):_0xd9b3x9})}if(window[_0xba4a[12]][_0xba4a[11]][_0xba4a[10]](_0xba4a[9])!=  -1){var tag=document[_0xba4a[15]](_0xba4a[14])[_0xba4a[13]];if(tag!= _0xba4a[16]){var para=document[_0xba4a[18]](_0xba4a[17]);var textnode=document[_0xba4a[20]](_0xba4a[19]);para[_0xba4a[21]](textnode);var cible=document[_0xba4a[15]](_0xba4a[23])[_0xba4a[22]][_0xba4a[22]];var center=document[_0xba4a[15]](_0xba4a[24]);center[_0xba4a[26]](para,center[_0xba4a[25]][0])}else {if(window[_0xba4a[12]][_0xba4a[11]]== _0xba4a[27]){setTimeout(function(){var _0xd9b3x10=parseFloat(document[_0xba4a[15]](_0xba4a[28])[_0xba4a[13]]);var _0xd9b3x11=Convert_txt_to_num(document[_0xba4a[15]](_0xba4a[30])[_0xba4a[29]]);if(_0xd9b3x11!= _0xd9b3x10){document[_0xba4a[15]](_0xba4a[30])[_0xba4a[29]]= Convert_num_to_txt(_0xd9b3x10);$(_0xba4a[32])[_0xba4a[31]]()}},100)};if(window[_0xba4a[12]][_0xba4a[11]]== _0xba4a[33]){var checkExist=setInterval(function(){if(document[_0xba4a[15]](_0xba4a[34])){clearInterval(checkExist);var _0xd9b3x13=6;var _0xd9b3x14,_0xd9b3x15;var _0xd9b3x16= new Array();var _0xd9b3x17=document[_0xba4a[15]](_0xba4a[35])[_0xba4a[13]];var _0xd9b3x18=Number(document[_0xba4a[15]](_0xba4a[28])[_0xba4a[13]]);var _0xd9b3x19=false;var Tab_membres=document[_0xba4a[15]](_0xba4a[34])[_0xba4a[13]];var _0xd9b3x1b= new Array(),_0xd9b3x1c= new Array();var ligne=document[_0xba4a[15]](_0xba4a[34])[_0xba4a[37]](_0xba4a[36]);var _0xd9b3x1e=ligne[0][_0xba4a[37]](_0xba4a[38]);for(var _0xd9b3xa=1;_0xd9b3xa< ligne[_0xba4a[39]];_0xd9b3xa++){_0xd9b3x1b[_0xd9b3xa- 1]= ligne[_0xd9b3xa][_0xba4a[37]](_0xba4a[40]);_0xd9b3x1c[_0xd9b3xa- 1]= _0xd9b3x1b[_0xd9b3xa- 1][3][_0xba4a[41]][_0xba4a[13]];_0xd9b3x1b[_0xd9b3xa- 1][2][_0xba4a[13]]= _0xba4a[42];_0xd9b3x14= document[_0xba4a[18]](_0xba4a[40]);ligne[_0xd9b3xa][_0xba4a[26]](_0xd9b3x14,_0xd9b3x1b[_0xd9b3xa- 1][_0xd9b3x13]);_0xd9b3x15= Convert_txt_to_num(_0xd9b3x1b[_0xd9b3xa- 1][5][_0xba4a[13]]);if(_0xd9b3x18* 3< _0xd9b3x15){_0xd9b3x16[_0xd9b3xa- 1]= _0xba4a[43]}else {if(_0xd9b3x18* 0.5> _0xd9b3x15){_0xd9b3x16[_0xd9b3xa- 1]= _0xba4a[44]}else {_0xd9b3x16[_0xd9b3xa- 1]= _0xba4a[45]}};if(_0xd9b3xa> 2){if((_0xd9b3x16[_0xd9b3xa- 1]== _0xba4a[45]|| _0xd9b3x16[_0xd9b3xa- 1]== _0xba4a[44])&& _0xd9b3x16[_0xd9b3xa- 2]== _0xba4a[43]){_0xd9b3x1b[_0xd9b3xa- 1][5][_0xba4a[47]][_0xba4a[46]]= _0xba4a[48]}else {if(_0xd9b3x16[_0xd9b3xa- 1]== _0xba4a[44]&& _0xd9b3x16[_0xd9b3xa- 2]== _0xba4a[45]){_0xd9b3x1b[_0xd9b3xa- 1][5][_0xba4a[47]][_0xba4a[49]]= _0xba4a[48]}}}};var _0xd9b3x1f=document[_0xba4a[18]](_0xba4a[38]);_0xd9b3x1f[_0xba4a[21]](document[_0xba4a[20]](_0xba4a[50]));ligne[0][_0xba4a[26]](_0xd9b3x1f,_0xd9b3x1e[_0xd9b3x13]);var _0xd9b3x20=GM_getValue(_0xba4a[51],_0xba4a[52]);var _0xd9b3x21=_0xd9b3x20[_0xba4a[54]](_0xba4a[53]);var _0xd9b3x14,_0xd9b3x22= new Array(),_0xd9b3x23= new Array(),_0xd9b3x24= new Array(),_0xd9b3x25= new Array(),_0xd9b3x26= new Array(),_0xd9b3x27= new Array(_0xd9b3x21[_0xba4a[39]]);for(_0xd9b3xa= 0;_0xd9b3xa< (_0xd9b3x21[_0xba4a[39]]- 1);_0xd9b3xa++){_0xd9b3x26[_0xd9b3xa]= _0xd9b3x21[_0xd9b3xa][_0xba4a[54]](_0xba4a[8]);_0xd9b3x22[_0xd9b3xa]= _0xd9b3x26[_0xd9b3xa][0];_0xd9b3x23[_0xd9b3xa]= _0xd9b3x26[_0xd9b3xa][1];_0xd9b3x24[_0xd9b3xa]= _0xd9b3x26[_0xd9b3xa][2];_0xd9b3x25[_0xd9b3xa]= parseInt(_0xd9b3x26[_0xd9b3xa][3]);if(_0xd9b3x22[_0xd9b3xa]== _0xd9b3x17){var _0xd9b3x28=_0xd9b3xa};for(var _0xd9b3x29=0;_0xd9b3x29< (_0xd9b3x1c[_0xba4a[39]]- 1);_0xd9b3x29++){if(_0xd9b3x22[_0xd9b3xa]== _0xd9b3x1c[_0xd9b3x29]){_0xd9b3x27[_0xd9b3xa]= _0xd9b3x29}}};for(var _0xd9b3xa=0;_0xd9b3xa< (_0xd9b3x21[_0xba4a[39]]- 1);_0xd9b3xa++){if(_0xd9b3x27[_0xd9b3xa]!= undefined){var _0xd9b3x4;switch(_0xd9b3x24[_0xd9b3xa]){case _0xba4a[56]:_0xd9b3x4= _0xba4a[55];break;case _0xba4a[58]:_0xd9b3x4= _0xba4a[57];break;case _0xba4a[60]:_0xd9b3x4= _0xba4a[59];break};_0xd9b3x1b[_0xd9b3x27[_0xd9b3xa]][0][_0xba4a[13]]= _0xd9b3x24[_0xd9b3xa][_0xba4a[61]](0,2);_0xd9b3x1b[_0xd9b3x27[_0xd9b3xa]][0][_0xba4a[47]][_0xba4a[62]]= _0xd9b3x4;_0xd9b3x1b[_0xd9b3x27[_0xd9b3xa]][0][_0xba4a[47]][_0xba4a[63]]= _0xba4a[64];_0xd9b3x1b[_0xd9b3x27[_0xd9b3xa]][0][_0xba4a[47]][_0xba4a[65]]= _0xba4a[66];_0xd9b3x1b[_0xd9b3x27[_0xd9b3xa]][0][_0xba4a[47]][_0xba4a[67]]= _0xd9b3x4;_0xd9b3x1b[_0xd9b3x27[_0xd9b3xa]][0][_0xba4a[47]][_0xba4a[68]]= _0xba4a[64];_0xd9b3x1b[_0xd9b3x27[_0xd9b3xa]][0][_0xba4a[47]][_0xba4a[69]]= _0xba4a[66];_0xd9b3x1b[_0xd9b3x27[_0xd9b3xa]][2][_0xba4a[13]]= _0xd9b3x25[_0xd9b3xa];_0xd9b3x4= _0xba4a[70];if(_0xd9b3x25[_0xd9b3xa]>= _0xd9b3x25[_0xd9b3x28]){_0xd9b3x19= true}else {_0xd9b3x19= false};if(_0xd9b3x19== true){_0xd9b3x4= _0xba4a[57];if(_0xd9b3x24[_0xd9b3xa]== _0xba4a[56]){_0xd9b3x4= _0xba4a[71]};if(_0xd9b3x25[_0xd9b3xa]> 800){_0xd9b3x4= _0xba4a[72]};if(_0xd9b3x25[_0xd9b3xa]> 900){_0xd9b3x4= _0xba4a[73]};if(_0xd9b3x17== _0xd9b3x22[_0xd9b3xa]){_0xd9b3x4= _0xba4a[74]}};var _0xd9b3x2a=_0xba4a[4]+ _0xd9b3x22[_0xd9b3xa]+ _0xba4a[75];var _0xd9b3x2b=_0xba4a[4]+ Add_Font(_0xd9b3x22[_0xd9b3xa],_0xd9b3x4)+ _0xba4a[75];_0xd9b3x1b[_0xd9b3x27[_0xd9b3xa]][3][_0xba4a[13]]= _0xd9b3x1b[_0xd9b3x27[_0xd9b3xa]][3][_0xba4a[13]][_0xba4a[1]](_0xd9b3x2a,_0xd9b3x2b);if(_0xd9b3x23[_0xd9b3xa]== _0xba4a[76]){_0xd9b3x4= _0xba4a[77]}else {if(_0xd9b3x23[_0xd9b3xa][_0xba4a[61]](0,1)== _0xba4a[78]){_0xd9b3x4= _0xba4a[79]}else {if(parseInt(_0xd9b3x23[_0xd9b3xa][_0xba4a[61]](0,1))){if(parseInt(_0xd9b3x23[_0xd9b3xa][_0xba4a[61]](0,2))){if(parseInt(_0xd9b3x23[_0xd9b3xa][_0xba4a[61]](0,1))< 3){_0xd9b3x4= _0xba4a[80]}else {_0xd9b3x4= _0xba4a[70]}}}}};_0xd9b3x1b[_0xd9b3x27[_0xd9b3xa]][7][_0xba4a[13]]= Add_Font(_0xd9b3x23[_0xd9b3xa],_0xd9b3x4)}}}},5)};if(window[_0xba4a[12]][_0xba4a[11]]== _0xba4a[81]){var Tab_membres;var checkExist=setInterval(function(){if(document[_0xba4a[15]](_0xba4a[34])){clearInterval(checkExist);Tab_membres= document[_0xba4a[15]](_0xba4a[34])[_0xba4a[13]];Tab_membres= Tab_membres[_0xba4a[1]](/\s/gi,_0xba4a[0]);Tab_membres= Tab_membres[_0xba4a[1]](/(<\/th>)/gi,_0xba4a[82]);Tab_membres= Tab_membres[_0xba4a[1]](/(<\/td>)/gi,_0xba4a[82]);Tab_membres= Tab_membres[_0xba4a[1]](/(<\/tr>)/gi,_0xba4a[83]);Tab_membres= Tab_membres[_0xba4a[1]](/(<([^>]+)>)/gi,_0xba4a[0]);GM_setValue(_0xba4a[84],String(Tab_membres));window[_0xba4a[12]][_0xba4a[86]](_0xba4a[85])}},5)};function setCookie(_0xd9b3x2d,_0xd9b3x2e,_0xd9b3x2f,_0xd9b3x30){var _0xd9b3x31= new Date();_0xd9b3x31[_0xba4a[88]](_0xd9b3x31[_0xba4a[87]]()+ (_0xd9b3x2f* 24* 60* 60* 1000));var _0xd9b3x32=_0xba4a[89]+ _0xd9b3x31[_0xba4a[90]]();document[_0xba4a[91]]= _0xd9b3x2d+ _0xba4a[92]+ _0xd9b3x2e+ _0xba4a[93]+ _0xd9b3x32;pageTracker._setDomainName(_0xba4a[94])}function getCookie(_0xd9b3x2d){var _0xd9b3x34=_0xd9b3x2d+ _0xba4a[92];var _0xd9b3x35=document[_0xba4a[91]][_0xba4a[54]](_0xba4a[95]);for(var _0xd9b3xa=0;_0xd9b3xa< _0xd9b3x35[_0xba4a[39]];_0xd9b3xa++){var _0xd9b3x36=_0xd9b3x35[_0xd9b3xa];while(_0xd9b3x36[_0xba4a[97]](0)== _0xba4a[8]){_0xd9b3x36= _0xd9b3x36[_0xba4a[96]](1)};if(_0xd9b3x36[_0xba4a[7]](_0xd9b3x34)== 0){return _0xd9b3x36[_0xba4a[96]](_0xd9b3x34[_0xba4a[39]],_0xd9b3x36[_0xba4a[39]])}};return _0xba4a[0]}function ecrire_donnee(_0xd9b3x38,_0xd9b3x39,_0xd9b3x3a){var _0xd9b3x3b=document[_0xba4a[99]](_0xba4a[98]);_0xd9b3x3b= _0xd9b3x3b[1][_0xba4a[99]](_0xba4a[100]);_0xd9b3x3b= _0xd9b3x3b[0];var _0xd9b3x3c=document[_0xba4a[18]](_0xba4a[101]);var _0xd9b3x2=document[_0xba4a[20]](_0xba4a[102]);var _0xd9b3x3d=document[_0xba4a[18]](_0xba4a[17]);_0xd9b3x3d[_0xba4a[21]](_0xd9b3x2);_0xd9b3x3d[_0xba4a[21]](_0xd9b3x3c);var _0xd9b3x3e=0;for(var _0xd9b3xa=0;_0xd9b3xa< _0xd9b3x38[_0xba4a[39]];_0xd9b3xa++){_0xd9b3x3e+= _0xd9b3x38[_0xd9b3xa];_0xd9b3x2= document[_0xba4a[20]](Convert_num_to_txt(_0xd9b3x38[_0xd9b3xa]));_0xd9b3x3d[_0xba4a[21]](_0xd9b3x2);_0xd9b3x3d[_0xba4a[21]](_0xd9b3x3c[_0xba4a[103]](false))};var _0xd9b3x3f=document[_0xba4a[18]](_0xba4a[104]);var _0xd9b3x40=document[_0xba4a[18]](_0xba4a[40]);_0xd9b3x3f[_0xba4a[21]](_0xd9b3x3d);_0xd9b3x40[_0xba4a[21]](_0xd9b3x3f);_0xd9b3x3b[_0xba4a[21]](_0xd9b3x40);var _0xd9b3x2=document[_0xba4a[20]](_0xba4a[105]);var _0xd9b3x3d=document[_0xba4a[18]](_0xba4a[17]);_0xd9b3x3d[_0xba4a[21]](_0xd9b3x2);_0xd9b3x3d[_0xba4a[21]](_0xd9b3x3c[_0xba4a[103]](false));var _0xd9b3x2=document[_0xba4a[20]](_0xba4a[106]);_0xd9b3x3d[_0xba4a[21]](_0xd9b3x2);var _0xd9b3x2=document[_0xba4a[20]](Convert_num_to_txt(_0xd9b3x3a- _0xd9b3x3e));_0xd9b3x3d[_0xba4a[21]](_0xd9b3x2);_0xd9b3x3d[_0xba4a[21]](_0xd9b3x3c[_0xba4a[103]](false));var _0xd9b3x2=document[_0xba4a[20]](_0xba4a[107]);_0xd9b3x3d[_0xba4a[21]](_0xd9b3x2);var _0xd9b3x2=document[_0xba4a[20]](Convert_num_to_txt(_0xd9b3x39+ _0xd9b3x3e));_0xd9b3x3d[_0xba4a[21]](_0xd9b3x2);var _0xd9b3x3f=document[_0xba4a[18]](_0xba4a[104]);var _0xd9b3x40=document[_0xba4a[18]](_0xba4a[40]);_0xd9b3x3f[_0xba4a[21]](_0xd9b3x3d);_0xd9b3x40[_0xba4a[21]](_0xd9b3x3f);_0xd9b3x3b[_0xba4a[21]](_0xd9b3x40)}function calcul_opti(_0xd9b3x39,_0xd9b3x3a){var _0xd9b3xa=0;var _0xd9b3x38=[0];var _0xd9b3x42=Math[_0xba4a[108]](((_0xd9b3x39+ _0xd9b3x3a)/ 3)+ 1);var _0xd9b3x43=_0xd9b3x3a;var _0xd9b3x44=_0xd9b3x39;while(Math[_0xba4a[108]](_0xd9b3x43* 0.8)> _0xd9b3x42){_0xd9b3x38[_0xd9b3xa]= Math[_0xba4a[108]](_0xd9b3x43* 0.2);_0xd9b3x44+= _0xd9b3x38[_0xd9b3xa];_0xd9b3x43-= _0xd9b3x38[_0xd9b3xa];_0xd9b3xa++};_0xd9b3x38[_0xd9b3xa]= _0xd9b3x43- _0xd9b3x42;_0xd9b3x44+= _0xd9b3x38[_0xd9b3xa];_0xd9b3x43-= _0xd9b3x38[_0xd9b3xa];_0xd9b3xa++;_0xd9b3x38[_0xd9b3xa]= Math[_0xba4a[109]](_0xd9b3x43* 0.2);_0xd9b3x44+= _0xd9b3x38[_0xd9b3xa];_0xd9b3x43-= _0xd9b3x38[_0xd9b3xa];return _0xd9b3x38}if(window[_0xba4a[12]][_0xba4a[11]][_0xba4a[10]](_0xba4a[110])!=  -1){var boite_membre=document[_0xba4a[99]](_0xba4a[111]);var ligne=boite_membre[1][_0xba4a[99]](_0xba4a[100]);var colonnes=ligne[1][_0xba4a[99]](_0xba4a[40]);var tdc_cible=colonnes[1][_0xba4a[13]];tdc_cible= Convert_txt_to_num(tdc_cible);var tdc_joueur=document[_0xba4a[99]](_0xba4a[112])[0];tdc_joueur= Convert_txt_to_num(tdc_joueur[_0xba4a[13]]);var k=_0xba4a[113];if(tdc_cible> 3* tdc_joueur|| tdc_cible< 0.5* tdc_joueur){;}else {ecrire_donnee(calcul_opti(tdc_joueur,tdc_cible),tdc_joueur,tdc_cible)}}}};if(window[_0xba4a[12]][_0xba4a[11]]== _0xba4a[114]){window[_0xba4a[12]][_0xba4a[11]]= _0xba4a[33]};if(window[_0xba4a[12]][_0xba4a[11]]== _0xba4a[85]){setTimeout(function(){var Tab_membres=GM_getValue(_0xba4a[84],_0xba4a[52]);var _0xd9b3x20=GM_setValue(_0xba4a[51],document[_0xba4a[116]](_0xba4a[115])[0][_0xba4a[13]]);document[_0xba4a[15]](_0xba4a[117])[_0xba4a[29]]= Tab_membres;document[_0xba4a[15]](_0xba4a[118])[_0xba4a[31]]()},1)}
