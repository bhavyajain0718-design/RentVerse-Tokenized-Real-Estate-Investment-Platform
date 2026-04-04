/*! For license information please see 1216.7f9ad8a0.chunk.js.LICENSE.txt */
(globalThis.webpackChunkRentVerse=globalThis.webpackChunkRentVerse||[]).push([[1216],{6972(e,t,r){const n=r(2666),i=r(8250),o=r(5204),s=r(9257);function a(e,t,r,o,s){const a=[].slice.call(arguments,1),l=a.length,c="function"===typeof a[l-1];if(!c&&!n())throw new Error("Callback required as last argument");if(!c){if(l<1)throw new Error("Too few arguments provided");return 1===l?(r=t,t=o=void 0):2!==l||t.getContext||(o=r,r=t,t=void 0),new Promise(function(n,s){try{const s=i.create(r,o);n(e(s,t,o))}catch(a){s(a)}})}if(l<2)throw new Error("Too few arguments provided");2===l?(s=r,r=t,t=o=void 0):3===l&&(t.getContext&&"undefined"===typeof s?(s=o,o=void 0):(s=o,o=r,r=t,t=void 0));try{const n=i.create(r,o);s(null,e(n,t,o))}catch(u){s(u)}}t.create=i.create,t.toCanvas=a.bind(null,o.render),t.toDataURL=a.bind(null,o.renderToDataURL),t.toString=a.bind(null,function(e,t,r){return s.render(e,r)})},2666(e){e.exports=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then}},4280(e,t,r){const n=r(4915).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];const t=Math.floor(e/7)+2,r=n(e),i=145===r?26:2*Math.ceil((r-13)/(2*t-2)),o=[r-7];for(let n=1;n<t-1;n++)o[n]=o[n-1]-i;return o.push(6),o.reverse()},t.getPositions=function(e){const r=[],n=t.getRowColCoords(e),i=n.length;for(let t=0;t<i;t++)for(let e=0;e<i;e++)0===t&&0===e||0===t&&e===i-1||t===i-1&&0===e||r.push([n[t],n[e]]);return r}},3004(e,t,r){const n=r(755),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=n.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*i.indexOf(this.data[t]);r+=i.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(i.indexOf(this.data[t]),6)},e.exports=o},2652(e){function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){const t=Math.floor(e/8);return 1===(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(let r=0;r<t;r++)this.putBit(1===(e>>>t-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},4431(e){function t(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,n){const i=e*this.size+t;this.data[i]=r,n&&(this.reservedBit[i]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},771(e,t,r){const n=r(5558),i=r(755);function o(e){this.mode=i.BYTE,"string"===typeof e&&(e=n(e)),this.data=new Uint8Array(e)}o.getBitsLength=function(e){return 8*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=o},6735(e,t,r){const n=r(2242),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case n.L:return i[4*(e-1)+0];case n.M:return i[4*(e-1)+1];case n.Q:return i[4*(e-1)+2];case n.H:return i[4*(e-1)+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case n.L:return o[4*(e-1)+0];case n.M:return o[4*(e-1)+1];case n.Q:return o[4*(e-1)+2];case n.H:return o[4*(e-1)+3];default:return}}},2242(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&"undefined"!==typeof e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!==typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(n){return r}}},3931(e,t,r){const n=r(4915).getSymbolSize;t.getPositions=function(e){const t=n(e);return[[0,0],[t-7,0],[0,t-7]]}},8412(e,t,r){const n=r(4915),i=n.getBCHDigit(1335);t.getEncodedBits=function(e,t){const r=e.bit<<3|t;let o=r<<10;for(;n.getBCHDigit(o)-i>=0;)o^=1335<<n.getBCHDigit(o)-i;return 21522^(r<<10|o)}},6872(e,t){const r=new Uint8Array(512),n=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)r[t]=e,n[e]=t,e<<=1,256&e&&(e^=285);for(let t=255;t<512;t++)r[t]=r[t-255]}(),t.log=function(e){if(e<1)throw new Error("log("+e+")");return n[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[n[e]+n[t]]}},7790(e,t,r){const n=r(755),i=r(4915);function o(e){this.mode=n.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=i.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),e.put(r,13)}},e.exports=o},4467(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const r=3,n=3,i=40,o=10;function s(e,r,n){switch(e){case t.Patterns.PATTERN000:return(r+n)%2===0;case t.Patterns.PATTERN001:return r%2===0;case t.Patterns.PATTERN010:return n%3===0;case t.Patterns.PATTERN011:return(r+n)%3===0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case t.Patterns.PATTERN101:return r*n%2+r*n%3===0;case t.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case t.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){const t=e.size;let n=0,i=0,o=0,s=null,a=null;for(let l=0;l<t;l++){i=o=0,s=a=null;for(let c=0;c<t;c++){let t=e.get(l,c);t===s?i++:(i>=5&&(n+=r+(i-5)),s=t,i=1),t=e.get(c,l),t===a?o++:(o>=5&&(n+=r+(o-5)),a=t,o=1)}i>=5&&(n+=r+(i-5)),o>=5&&(n+=r+(o-5))}return n},t.getPenaltyN2=function(e){const t=e.size;let r=0;for(let n=0;n<t-1;n++)for(let i=0;i<t-1;i++){const t=e.get(n,i)+e.get(n,i+1)+e.get(n+1,i)+e.get(n+1,i+1);4!==t&&0!==t||r++}return r*n},t.getPenaltyN3=function(e){const t=e.size;let r=0,n=0,o=0;for(let i=0;i<t;i++){n=o=0;for(let s=0;s<t;s++)n=n<<1&2047|e.get(i,s),s>=10&&(1488===n||93===n)&&r++,o=o<<1&2047|e.get(s,i),s>=10&&(1488===o||93===o)&&r++}return r*i},t.getPenaltyN4=function(e){let t=0;const r=e.data.length;for(let n=0;n<r;n++)t+=e.data[n];return Math.abs(Math.ceil(100*t/r/5)-10)*o},t.applyMask=function(e,t){const r=t.size;for(let n=0;n<r;n++)for(let i=0;i<r;i++)t.isReserved(i,n)||t.xor(i,n,s(e,i,n))},t.getBestMask=function(e,r){const n=Object.keys(t.Patterns).length;let i=0,o=1/0;for(let s=0;s<n;s++){r(s),t.applyMask(s,e);const n=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(s,e),n<o&&(o=n,i=s)}return i}},755(e,t,r){const n=r(8095),i=r(4325);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!n.isValid(t))throw new Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return i.testNumeric(e)?t.NUMERIC:i.testAlphanumeric(e)?t.ALPHANUMERIC:i.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!==typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(n){return r}}},5738(e,t,r){const n=r(755);function i(e){this.mode=n.NUMERIC,this.data=e.toString()}i.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t,r,n;for(t=0;t+3<=this.data.length;t+=3)r=this.data.substr(t,3),n=parseInt(r,10),e.put(n,10);const i=this.data.length-t;i>0&&(r=this.data.substr(t),n=parseInt(r,10),e.put(n,3*i+1))},e.exports=i},5582(e,t,r){const n=r(6872);t.mul=function(e,t){const r=new Uint8Array(e.length+t.length-1);for(let i=0;i<e.length;i++)for(let o=0;o<t.length;o++)r[i+o]^=n.mul(e[i],t[o]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){const e=r[0];for(let o=0;o<t.length;o++)r[o]^=n.mul(t[o],e);let i=0;for(;i<r.length&&0===r[i];)i++;r=r.slice(i)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let i=0;i<e;i++)r=t.mul(r,new Uint8Array([1,n.exp(i)]));return r}},8250(e,t,r){const n=r(4915),i=r(2242),o=r(2652),s=r(4431),a=r(4280),l=r(3931),c=r(4467),u=r(6735),d=r(5307),h=r(6806),p=r(8412),g=r(755),f=r(4641);function w(e,t,r){const n=e.size,i=p.getEncodedBits(t,r);let o,s;for(o=0;o<15;o++)s=1===(i>>o&1),o<6?e.set(o,8,s,!0):o<8?e.set(o+1,8,s,!0):e.set(n-15+o,8,s,!0),o<8?e.set(8,n-o-1,s,!0):o<9?e.set(8,15-o-1+1,s,!0):e.set(8,15-o-1,s,!0);e.set(n-8,8,1,!0)}function m(e,t,r){const i=new o;r.forEach(function(t){i.put(t.mode.bit,4),i.put(t.getLength(),g.getCharCountIndicator(t.mode,e)),t.write(i)});const s=8*(n.getSymbolTotalCodewords(e)-u.getTotalCodewordsCount(e,t));for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const a=(s-i.getLengthInBits())/8;for(let n=0;n<a;n++)i.put(n%2?17:236,8);return function(e,t,r){const i=n.getSymbolTotalCodewords(t),o=u.getTotalCodewordsCount(t,r),s=i-o,a=u.getBlocksCount(t,r),l=i%a,c=a-l,h=Math.floor(i/a),p=Math.floor(s/a),g=p+1,f=h-p,w=new d(f);let m=0;const y=new Array(a),b=new Array(a);let v=0;const x=new Uint8Array(e.buffer);for(let n=0;n<a;n++){const e=n<c?p:g;y[n]=x.slice(m,m+e),b[n]=w.encode(y[n]),m+=e,v=Math.max(v,e)}const $=new Uint8Array(i);let k,C,E=0;for(k=0;k<v;k++)for(C=0;C<a;C++)k<y[C].length&&($[E++]=y[C][k]);for(k=0;k<f;k++)for(C=0;C<a;C++)$[E++]=b[C][k];return $}(i,e,t)}function y(e,t,r,i){let o;if(Array.isArray(e))o=f.fromArray(e);else{if("string"!==typeof e)throw new Error("Invalid data");{let n=t;if(!n){const t=f.rawSplit(e);n=h.getBestVersionForData(t,r)}o=f.fromString(e,n||40)}}const u=h.getBestVersionForData(o,r);if(!u)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<u)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+u+".\n")}else t=u;const d=m(t,r,o),p=n.getSymbolSize(t),g=new s(p);return function(e,t){const r=e.size,n=l.getPositions(t);for(let i=0;i<n.length;i++){const t=n[i][0],o=n[i][1];for(let n=-1;n<=7;n++)if(!(t+n<=-1||r<=t+n))for(let i=-1;i<=7;i++)o+i<=-1||r<=o+i||(n>=0&&n<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===n||6===n)||n>=2&&n<=4&&i>=2&&i<=4?e.set(t+n,o+i,!0,!0):e.set(t+n,o+i,!1,!0))}}(g,t),function(e){const t=e.size;for(let r=8;r<t-8;r++){const t=r%2===0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(g),function(e,t){const r=a.getPositions(t);for(let n=0;n<r.length;n++){const t=r[n][0],i=r[n][1];for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)-2===r||2===r||-2===n||2===n||0===r&&0===n?e.set(t+r,i+n,!0,!0):e.set(t+r,i+n,!1,!0)}}(g,t),w(g,r,0),t>=7&&function(e,t){const r=e.size,n=h.getEncodedBits(t);let i,o,s;for(let a=0;a<18;a++)i=Math.floor(a/3),o=a%3+r-8-3,s=1===(n>>a&1),e.set(i,o,s,!0),e.set(o,i,s,!0)}(g,t),function(e,t){const r=e.size;let n=-1,i=r-1,o=7,s=0;for(let a=r-1;a>0;a-=2)for(6===a&&a--;;){for(let r=0;r<2;r++)if(!e.isReserved(i,a-r)){let n=!1;s<t.length&&(n=1===(t[s]>>>o&1)),e.set(i,a-r,n),o--,-1===o&&(s++,o=7)}if(i+=n,i<0||r<=i){i-=n,n=-n;break}}}(g,d),isNaN(i)&&(i=c.getBestMask(g,w.bind(null,g,r))),c.applyMask(i,g),w(g,r,i),{modules:g,version:t,errorCorrectionLevel:r,maskPattern:i,segments:o}}t.create=function(e,t){if("undefined"===typeof e||""===e)throw new Error("No input text");let r,o,s=i.M;return"undefined"!==typeof t&&(s=i.from(t.errorCorrectionLevel,i.M),r=h.from(t.version),o=c.from(t.maskPattern),t.toSJISFunc&&n.setToSJISFunction(t.toSJISFunc)),y(e,r,s,o)}},5307(e,t,r){const n=r(5582);function i(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},i.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){const e=new Uint8Array(this.degree);return e.set(r,i),e}return r},e.exports=i},4325(e,t){const r="[0-9]+";let n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";n=n.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+")(?:.|[\r\n]))+";t.KANJI=new RegExp(n,"g"),t.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=new RegExp(i,"g"),t.NUMERIC=new RegExp(r,"g"),t.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const o=new RegExp("^"+n+"$"),s=new RegExp("^"+r+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return s.test(e)},t.testAlphanumeric=function(e){return a.test(e)}},4641(e,t,r){const n=r(755),i=r(5738),o=r(3004),s=r(771),a=r(7790),l=r(4325),c=r(4915),u=r(7347);function d(e){return unescape(encodeURIComponent(e)).length}function h(e,t,r){const n=[];let i;for(;null!==(i=e.exec(r));)n.push({data:i[0],index:i.index,mode:t,length:i[0].length});return n}function p(e){const t=h(l.NUMERIC,n.NUMERIC,e),r=h(l.ALPHANUMERIC,n.ALPHANUMERIC,e);let i,o;c.isKanjiModeEnabled()?(i=h(l.BYTE,n.BYTE,e),o=h(l.KANJI,n.KANJI,e)):(i=h(l.BYTE_KANJI,n.BYTE,e),o=[]);return t.concat(r,i,o).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function g(e,t){switch(t){case n.NUMERIC:return i.getBitsLength(e);case n.ALPHANUMERIC:return o.getBitsLength(e);case n.KANJI:return a.getBitsLength(e);case n.BYTE:return s.getBitsLength(e)}}function f(e,t){let r;const l=n.getBestModeForData(e);if(r=n.from(t,l),r!==n.BYTE&&r.bit<l.bit)throw new Error('"'+e+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(l));switch(r!==n.KANJI||c.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new i(e);case n.ALPHANUMERIC:return new o(e);case n.KANJI:return new a(e);case n.BYTE:return new s(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"===typeof t?e.push(f(t,null)):t.data&&e.push(f(t.data,t.mode)),e},[])},t.fromString=function(e,r){const i=function(e){const t=[];for(let r=0;r<e.length;r++){const i=e[r];switch(i.mode){case n.NUMERIC:t.push([i,{data:i.data,mode:n.ALPHANUMERIC,length:i.length},{data:i.data,mode:n.BYTE,length:i.length}]);break;case n.ALPHANUMERIC:t.push([i,{data:i.data,mode:n.BYTE,length:i.length}]);break;case n.KANJI:t.push([i,{data:i.data,mode:n.BYTE,length:d(i.data)}]);break;case n.BYTE:t.push([{data:i.data,mode:n.BYTE,length:d(i.data)}])}}return t}(p(e,c.isKanjiModeEnabled())),o=function(e,t){const r={},i={start:{}};let o=["start"];for(let s=0;s<e.length;s++){const a=e[s],l=[];for(let e=0;e<a.length;e++){const c=a[e],u=""+s+e;l.push(u),r[u]={node:c,lastCount:0},i[u]={};for(let e=0;e<o.length;e++){const s=o[e];r[s]&&r[s].node.mode===c.mode?(i[s][u]=g(r[s].lastCount+c.length,c.mode)-g(r[s].lastCount,c.mode),r[s].lastCount+=c.length):(r[s]&&(r[s].lastCount=c.length),i[s][u]=g(c.length,c.mode)+4+n.getCharCountIndicator(c.mode,t))}}o=l}for(let n=0;n<o.length;n++)i[o[n]].end=0;return{map:i,table:r}}(i,r),s=u.find_path(o.map,"start","end"),a=[];for(let t=1;t<s.length-1;t++)a.push(o.table[s[t]].node);return t.fromArray(function(e){return e.reduce(function(e,t){const r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}(a))},t.rawSplit=function(e){return t.fromArray(p(e,c.isKanjiModeEnabled()))}},4915(e,t){let r;const n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return n[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!==typeof e)throw new Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return"undefined"!==typeof r},t.toSJIS=function(e){return r(e)}},8095(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},6806(e,t,r){const n=r(4915),i=r(6735),o=r(2242),s=r(755),a=r(8095),l=n.getBCHDigit(7973);function c(e,t){return s.getCharCountIndicator(e,t)+4}function u(e,t){let r=0;return e.forEach(function(e){const n=c(e.mode,t);r+=n+e.getBitsLength()}),r}t.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!a.isValid(e))throw new Error("Invalid QR Code version");"undefined"===typeof r&&(r=s.BYTE);const o=8*(n.getSymbolTotalCodewords(e)-i.getTotalCodewordsCount(e,t));if(r===s.MIXED)return o;const l=o-c(r,e);switch(r){case s.NUMERIC:return Math.floor(l/10*3);case s.ALPHANUMERIC:return Math.floor(l/11*2);case s.KANJI:return Math.floor(l/13);case s.BYTE:default:return Math.floor(l/8)}},t.getBestVersionForData=function(e,r){let n;const i=o.from(r,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let n=1;n<=40;n++)if(u(e,n)<=t.getCapacity(n,r,s.MIXED))return n}(e,i);if(0===e.length)return 1;n=e[0]}else n=e;return function(e,r,n){for(let i=1;i<=40;i++)if(r<=t.getCapacity(i,n,e))return i}(n.mode,n.getLength(),i)},t.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw new Error("Invalid QR Code version");let t=e<<12;for(;n.getBCHDigit(t)-l>=0;)t^=7973<<n.getBCHDigit(t)-l;return e<<12|t}},5204(e,t,r){const n=r(3707);t.render=function(e,t,r){let i=r,o=t;"undefined"!==typeof i||t&&t.getContext||(i=t,t=void 0),t||(o=function(){try{return document.createElement("canvas")}catch(e){throw new Error("You need to specify a canvas element")}}()),i=n.getOptions(i);const s=n.getImageWidth(e.modules.size,i),a=o.getContext("2d"),l=a.createImageData(s,s);return n.qrToImageData(l.data,e,i),function(e,t,r){e.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=r,t.width=r,t.style.height=r+"px",t.style.width=r+"px"}(a,o,s),a.putImageData(l,0,0),o},t.renderToDataURL=function(e,r,n){let i=n;"undefined"!==typeof i||r&&r.getContext||(i=r,r=void 0),i||(i={});const o=t.render(e,r,i),s=i.type||"image/png",a=i.rendererOpts||{};return o.toDataURL(s,a.quality)}},9257(e,t,r){const n=r(3707);function i(e,t){const r=e.a/255,n=t+'="'+e.hex+'"';return r<1?n+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function o(e,t,r){let n=e+t;return"undefined"!==typeof r&&(n+=" "+r),n}t.render=function(e,t,r){const s=n.getOptions(t),a=e.modules.size,l=e.modules.data,c=a+2*s.margin,u=s.color.light.a?"<path "+i(s.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",d="<path "+i(s.color.dark,"stroke")+' d="'+function(e,t,r){let n="",i=0,s=!1,a=0;for(let l=0;l<e.length;l++){const c=Math.floor(l%t),u=Math.floor(l/t);c||s||(s=!0),e[l]?(a++,l>0&&c>0&&e[l-1]||(n+=s?o("M",c+r,.5+u+r):o("m",i,0),i=0,s=!1),c+1<t&&e[l+1]||(n+=o("h",a),a=0)):i++}return n}(l,a,s.margin)+'"/>',h='viewBox="0 0 '+c+" "+c+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(s.width?'width="'+s.width+'" height="'+s.width+'" ':"")+h+' shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"===typeof r&&r(null,p),p}},3707(e,t){function r(e){if("number"===typeof e&&(e=e.toString()),"string"!==typeof e)throw new Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw new Error("Invalid hex color: "+e);3!==t.length&&4!==t.length||(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");const r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});const t="undefined"===typeof e.margin||null===e.margin||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:n,scale:n?4:i,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){const n=t.getScale(e,r);return Math.floor((e+2*r.margin)*n)},t.qrToImageData=function(e,r,n){const i=r.modules.size,o=r.modules.data,s=t.getScale(i,n),a=Math.floor((i+2*n.margin)*s),l=n.margin*s,c=[n.color.light,n.color.dark];for(let t=0;t<a;t++)for(let r=0;r<a;r++){let u=4*(t*a+r),d=n.color.light;if(t>=l&&r>=l&&t<a-l&&r<a-l){d=c[o[Math.floor((t-l)/s)*i+Math.floor((r-l)/s)]?1:0]}e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}},7347(e){"use strict";var t={single_source_shortest_paths:function(e,r,n){var i={},o={};o[r]=0;var s,a,l,c,u,d,h,p=t.PriorityQueue.make();for(p.push(r,0);!p.empty();)for(l in a=(s=p.pop()).value,c=s.cost,u=e[a]||{})u.hasOwnProperty(l)&&(d=c+u[l],h=o[l],("undefined"===typeof o[l]||h>d)&&(o[l]=d,p.push(l,d),i[l]=a));if("undefined"!==typeof n&&"undefined"===typeof o[n]){var g=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(g)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],n=t;n;)r.push(n),e[n],n=e[n];return r.reverse(),r},find_path:function(e,r,n){var i=t.single_source_shortest_paths(e,r,n);return t.extract_shortest_path_from_predecessor_list(i,n)},PriorityQueue:{make:function(e){var r,n=t.PriorityQueue,i={};for(r in e=e||{},n)n.hasOwnProperty(r)&&(i[r]=n[r]);return i.queue=[],i.sorter=e.sorter||n.default_sorter,i},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var r={value:e,cost:t};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},5558(e){"use strict";e.exports=function(e){for(var t=[],r=e.length,n=0;n<r;n++){var i=e.charCodeAt(n);if(i>=55296&&i<=56319&&r>n+1){var o=e.charCodeAt(n+1);o>=56320&&o<=57343&&(i=1024*(i-55296)+o-56320+65536,n+=1)}i<128?t.push(i):i<2048?(t.push(i>>6|192),t.push(63&i|128)):i<55296||i>=57344&&i<65536?(t.push(i>>12|224),t.push(i>>6&63|128),t.push(63&i|128)):i>=65536&&i<=1114111?(t.push(i>>18|240),t.push(i>>12&63|128),t.push(i>>6&63|128),t.push(63&i|128)):t.push(239,191,189)}return new Uint8Array(t).buffer}},1216(e,t,r){"use strict";r.r(t),r.d(t,{W3mAllWalletsView:()=>xt,W3mConnectingWcBasicView:()=>Ae,W3mDownloadsView:()=>kt});var n=r(7022),i=r(8117),o=r(4657),s=r(1786),a=r(6496),l=r(8861),c=r(282),u=(r(4107),r(6440)),d=r(883),h=r(5015),p=r(4274),g=r(9323),f=r(1139),w=(r(115),function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s});let m=class extends n.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=h.a.state.connectors,this.count=a.N.state.count,this.filteredCount=a.N.state.filteredWallets.length,this.isFetchingRecommendedWallets=a.N.state.isFetchingRecommendedWallets,this.unsubscribe.push(h.a.subscribeKey("connectors",e=>this.connectors=e),a.N.subscribeKey("count",e=>this.count=e),a.N.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),a.N.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:t}=s.H.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!o.w.isMobile())return null;const r=a.N.state.featured.length,i=this.count+r,l=i<10?i:10*Math.floor(i/10),c=this.filteredCount>0?this.filteredCount:l;let h=`${c}`;this.filteredCount>0?h=`${this.filteredCount}`:c<i&&(h=`${c}+`);const g=p.x.hasAnyConnection(d.o.CONNECTOR_ID.WALLET_CONNECT);return n.qy`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${h}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,u.J)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${g}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){g.E.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),f.I.push("AllWallets",{redirectView:f.I.state.data?.redirectView})}};w([(0,i.MZ)()],m.prototype,"tabIdx",void 0),w([(0,i.wk)()],m.prototype,"connectors",void 0),w([(0,i.wk)()],m.prototype,"count",void 0),w([(0,i.wk)()],m.prototype,"filteredCount",void 0),w([(0,i.wk)()],m.prototype,"isFetchingRecommendedWallets",void 0),m=w([(0,c.EM)("w3m-all-wallets-widget")],m);var y=r(6596),b=r(555),v=r(1348),x=r(4451),$=r(9251);const k=c.AH`
  :host {
    margin-top: ${e=>{let{spacing:t}=e;return t[1]}};
  }
  wui-separator {
    margin: ${e=>{let{spacing:t}=e;return t[3]}} calc(${e=>{let{spacing:t}=e;return t[3]}} * -1)
      ${e=>{let{spacing:t}=e;return t[2]}} calc(${e=>{let{spacing:t}=e;return t[3]}} * -1);
    width: calc(100% + ${e=>{let{spacing:t}=e;return t[3]}} * 2);
  }
`;var C=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let E=class extends n.WF{constructor(){super(),this.unsubscribe=[],this.explorerWallets=a.N.state.explorerWallets,this.connections=p.x.state.connections,this.connectorImages=y.j.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(p.x.subscribeKey("connections",e=>this.connections=e),y.j.subscribeKey("connectorImages",e=>this.connectorImages=e),a.N.subscribeKey("explorerFilteredWallets",e=>{this.explorerWallets=e?.length?e:a.N.state.explorerWallets}),a.N.subscribeKey("explorerWallets",e=>{this.explorerWallets?.length||(this.explorerWallets=e)})),o.w.isTelegram()&&o.w.isIos()&&(this.loadingTelegram=!p.x.state.wcUri,this.unsubscribe.push(p.x.subscribeKey("wcUri",e=>this.loadingTelegram=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return n.qy`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){return b.g.connectorList().map((e,t)=>"connector"===e.kind?this.renderConnector(e,t):this.renderWallet(e,t))}getConnectorNamespaces(e){return"walletConnect"===e.subtype?[]:"multiChain"===e.subtype?e.connector.connectors?.map(e=>e.chain)||[]:[e.connector.chain]}renderConnector(e,t){const r=e.connector,i=v.$.getConnectorImage(r)||this.connectorImages[r?.imageId??""],o=(this.connections.get(r.chain)??[]).some(e=>$.y.isLowerCaseMatch(e.connectorId,r.id));let s,a;"walletConnect"===e.subtype?(s="qr code",a="accent"):"injected"===e.subtype||"announced"===e.subtype?(s=o?"connected":"installed",a=o?"info":"success"):(s=void 0,a=void 0);const l=p.x.hasAnyConnection(d.o.CONNECTOR_ID.WALLET_CONNECT),c=("walletConnect"===e.subtype||"external"===e.subtype)&&l;return n.qy`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,u.J)(i)}
        .installed=${!0}
        name=${r.name??"Unknown"}
        .tagVariant=${a}
        tagLabel=${(0,u.J)(s)}
        data-testid=${`wallet-selector-${r.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${(0,u.J)(this.tabIdx)}
        ?disabled=${c}
        rdnsId=${(0,u.J)(r.explorerWallet?.rdns||void 0)}
        walletRank=${(0,u.J)(r.explorerWallet?.order)}
        .namespaces=${this.getConnectorNamespaces(e)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){const t=f.I.state.data?.redirectView;return"walletConnect"===e.subtype?(h.a.setActiveConnector(e.connector),void(o.w.isMobile()?f.I.push("AllWallets"):f.I.push("ConnectingWalletConnect",{redirectView:t}))):"multiChain"===e.subtype?(h.a.setActiveConnector(e.connector),void f.I.push("ConnectingMultiChain",{redirectView:t})):"injected"===e.subtype?(h.a.setActiveConnector(e.connector),void f.I.push("ConnectingExternal",{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet})):"announced"===e.subtype?"walletConnect"===e.connector.id?void(o.w.isMobile()?f.I.push("AllWallets"):f.I.push("ConnectingWalletConnect",{redirectView:t})):void f.I.push("ConnectingExternal",{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet}):void f.I.push("ConnectingExternal",{connector:e.connector,redirectView:t})}renderWallet(e,t){const r=e.wallet,i=v.$.getWalletImage(r),o=p.x.hasAnyConnection(d.o.CONNECTOR_ID.WALLET_CONNECT),s=this.loadingTelegram,a="recent"===e.subtype?"recent":void 0,l="recent"===e.subtype?"info":void 0;return n.qy`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,u.J)(i)}
        name=${r.name??"Unknown"}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${r.id}`}
        tabIdx=${(0,u.J)(this.tabIdx)}
        ?loading=${s}
        ?disabled=${o}
        rdnsId=${(0,u.J)(r.rdns||void 0)}
        walletRank=${(0,u.J)(r.order)}
        tagLabel=${(0,u.J)(a)}
        .tagVariant=${l}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){const t=f.I.state.data?.redirectView,r=x.W.state.activeChain;if("featured"===e.subtype)return void h.a.selectWalletConnector(e.wallet);if("recent"===e.subtype){if(this.loadingTelegram)return;return void h.a.selectWalletConnector(e.wallet)}if("custom"===e.subtype){if(this.loadingTelegram)return;return void f.I.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:t})}if(this.loadingTelegram)return;const n=r?h.a.getConnector({id:e.wallet.id,namespace:r}):void 0;n?f.I.push("ConnectingExternal",{connector:n,redirectView:t}):f.I.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:t})}};E.styles=k,C([(0,i.MZ)({type:Number})],E.prototype,"tabIdx",void 0),C([(0,i.wk)()],E.prototype,"explorerWallets",void 0),C([(0,i.wk)()],E.prototype,"connections",void 0),C([(0,i.wk)()],E.prototype,"connectorImages",void 0),C([(0,i.wk)()],E.prototype,"loadingTelegram",void 0),E=C([(0,c.EM)("w3m-connector-list")],E);var R=r(5536),I=r(7258),A=r(6132),T=r(8882),P=r(9569),M=r(9446),S=r(7845),W=(r(2805),r(7836),r(9406));const L=W.AH`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${e=>{let{spacing:t}=e;return t[1]}} ${e=>{let{spacing:t}=e;return t[2]}};
    column-gap: ${e=>{let{spacing:t}=e;return t[1]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[20]}};
    background-color: transparent;
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundTertiary}};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    }
  }
`;var N=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const O={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},B={lg:"md",md:"sm",sm:"sm"};let j=class extends n.WF{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return n.qy`
      <button data-active=${this.active}>
        ${this.icon?n.qy`<wui-icon size=${B[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${O[this.size]}> ${this.label} </wui-text>
      </button>
    `}};j.styles=[M.W5,M.fD,L],N([(0,i.MZ)()],j.prototype,"icon",void 0),N([(0,i.MZ)()],j.prototype,"size",void 0),N([(0,i.MZ)()],j.prototype,"label",void 0),N([(0,i.MZ)({type:Boolean})],j.prototype,"active",void 0),j=N([(0,S.E)("wui-tab-item")],j);const q=W.AH`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[32]}};
    padding: ${e=>{let{spacing:t}=e;return t["01"]}};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var _=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let z=class extends n.WF{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,t)=>{const r=t===this.activeTab;return n.qy`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${r}
          data-active=${r}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};z.styles=[M.W5,M.fD,q],_([(0,i.MZ)({type:Array})],z.prototype,"tabs",void 0),_([(0,i.MZ)()],z.prototype,"onTabChange",void 0),_([(0,i.MZ)()],z.prototype,"size",void 0),_([(0,i.wk)()],z.prototype,"activeTab",void 0),z=_([(0,S.E)("wui-tabs")],z);var D=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let U=class extends n.WF{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return n.qy`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(e=>{let{platform:t}=e;return t}),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};D([(0,i.MZ)({type:Array})],U.prototype,"platforms",void 0),D([(0,i.MZ)()],U.prototype,"onSelectPlatfrom",void 0),U=D([(0,c.EM)("w3m-connecting-header")],U);var F=r(6141);r(9635),r(477),r(702),r(6282);const H=W.AH`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Z=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let V=class extends n.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,r=116+t,i=245+t,o=360+1.75*t;return n.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${r} ${i}"
          stroke-dashoffset=${o}
        />
      </svg>
    `}};V.styles=[M.W5,H],Z([(0,i.MZ)({type:Number})],V.prototype,"radius",void 0),V=Z([(0,S.E)("wui-loading-thumbnail")],V);r(4875),r(3777),r(2574),r(1354);const J=W.AH`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    padding-left: ${e=>{let{spacing:t}=e;return t[3]}};
    padding-right: ${e=>{let{spacing:t}=e;return t[3]}};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${e=>{let{spacing:t}=e;return t[6]}};
  }

  wui-text {
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var K=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Y=class extends n.WF{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return n.qy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Y.styles=[M.W5,M.fD,J],K([(0,i.MZ)({type:Boolean})],Y.prototype,"disabled",void 0),K([(0,i.MZ)()],Y.prototype,"label",void 0),K([(0,i.MZ)()],Y.prototype,"buttonLabel",void 0),Y=K([(0,S.E)("wui-cta-button")],Y);const Q=c.AH`
  :host {
    display: block;
    padding: 0 ${e=>{let{spacing:t}=e;return t[5]}} ${e=>{let{spacing:t}=e;return t[5]}};
  }
`;var G=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let X=class extends n.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:r,chrome_store:i,homepage:s}=this.wallet,a=o.w.isMobile(),l=o.w.isIos(),u=o.w.isAndroid(),d=[t,r,s,i].filter(Boolean).length>1,h=c.Zv.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return d&&!a?n.qy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>f.I.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&s?n.qy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&l?n.qy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&u?n.qy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&o.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&o.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&o.w.openHref(this.wallet.homepage,"_blank")}};X.styles=[Q],G([(0,i.MZ)({type:Object})],X.prototype,"wallet",void 0),X=G([(0,c.EM)("w3m-mobile-download-links")],X);const ee=c.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${e=>{let{spacing:t}=e;return t[1]}} * -1);
    bottom: calc(${e=>{let{spacing:t}=e;return t[1]}} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${e=>{let{durations:t}=e;return t.lg}};
    transition-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${e=>{let{spacing:t}=e;return t[4]}};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var te=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};class re extends n.WF{constructor(){super(),this.wallet=f.I.state.data?.wallet,this.connector=f.I.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=v.$.getConnectorImage(this.connector)??v.$.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=p.x.state.wcUri,this.error=p.x.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(p.x.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),p.x.subscribeKey("wcError",e=>this.error=e)),(o.w.isTelegram()||o.w.isSafari())&&o.w.isIos()&&p.x.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),p.x.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t="";return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t="Connection declined")),n.qy`
      <wui-flex
        data-error=${(0,u.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,u.J)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?n.qy`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?n.qy`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){p.x.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const e=F.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return n.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(o.w.copyToClopboard(this.uri),I.P.showSuccess("Link copied"))}catch{I.P.showError("Failed to copy")}}}re.styles=ee,te([(0,i.wk)()],re.prototype,"isRetrying",void 0),te([(0,i.wk)()],re.prototype,"uri",void 0),te([(0,i.wk)()],re.prototype,"error",void 0),te([(0,i.wk)()],re.prototype,"ready",void 0),te([(0,i.wk)()],re.prototype,"showRetry",void 0),te([(0,i.wk)()],re.prototype,"label",void 0),te([(0,i.wk)()],re.prototype,"secondaryBtnLabel",void 0),te([(0,i.wk)()],re.prototype,"secondaryLabel",void 0),te([(0,i.wk)()],re.prototype,"isLoading",void 0),te([(0,i.MZ)({type:Boolean})],re.prototype,"isMobile",void 0),te([(0,i.MZ)()],re.prototype,"onRetry",void 0);var ne=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ie=class extends re{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),g.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:f.I.state.view}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=h.a.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name);if(!t)throw new Error("w3m-connecting-wc-browser: No connector found");await p.x.connectExternal(t,t.chain),A.W.close()}catch(e){e instanceof T.A&&e.originalName===R.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?g.E.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):g.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};ie=ne([(0,c.EM)("w3m-connecting-wc-browser")],ie);var oe=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let se=class extends re{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),g.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:f.I.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:r,href:n}=o.w.formatNativeUrl(e,this.uri);p.x.setWcLinking({name:t,href:n}),p.x.setRecentWallet(this.wallet),o.w.openHref(r,"_blank")}catch{this.error=!0}}};se=oe([(0,c.EM)("w3m-connecting-wc-desktop")],se);var ae=r(7306),le=r(9351),ce=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ue=class extends re{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=s.H.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{ae.b.onConnectMobile(this.wallet)},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=le.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(p.x.subscribeKey("wcUri",()=>{this.onHandleURI()})),g.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:f.I.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){p.x.setWcError(!1),this.onConnect?.()}};ce([(0,i.wk)()],ue.prototype,"redirectDeeplink",void 0),ce([(0,i.wk)()],ue.prototype,"redirectUniversalLink",void 0),ce([(0,i.wk)()],ue.prototype,"target",void 0),ce([(0,i.wk)()],ue.prototype,"preferUniversalLinks",void 0),ce([(0,i.wk)()],ue.prototype,"isLoading",void 0),ue=ce([(0,c.EM)("w3m-connecting-wc-mobile")],ue);r(1056);var de=r(6972);function he(e,t,r){if(e===t)return!1;return(e-t<0?t-e:e-t)<=r+.1}const pe={generate(e){let{uri:t,size:r,logoSize:i,padding:o=8,dotColor:s="var(--apkt-colors-black)"}=e;const a=10,l=[],c=function(e,t){const r=Array.prototype.slice.call(de.create(e,{errorCorrectionLevel:t}).modules.data,0),n=Math.sqrt(r.length);return r.reduce((e,t,r)=>(r%n===0?e.push([t]):e[e.length-1].push(t))&&e,[])}(t,"Q"),u=(r-2*o)/c.length,d=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];d.forEach(e=>{let{x:t,y:r}=e;const i=(c.length-7)*u*t+o,h=(c.length-7)*u*r+o,p=.45;for(let o=0;o<d.length;o+=1){const e=u*(7-2*o);l.push(n.JW`
            <rect
              fill=${2===o?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${0===o?e-a:e}
              rx= ${0===o?(e-a)*p:e*p}
              ry= ${0===o?(e-a)*p:e*p}
              stroke=${s}
              stroke-width=${0===o?a:0}
              height=${0===o?e-a:e}
              x= ${0===o?h+u*o+5:h+u*o}
              y= ${0===o?i+u*o+5:i+u*o}
            />
          `)}});const h=Math.floor((i+25)/u),p=c.length/2-h/2,g=c.length/2+h/2-1,f=[];c.forEach((e,t)=>{e.forEach((e,r)=>{if(c[t][r]&&!(t<7&&r<7||t>c.length-8&&r<7||t<7&&r>c.length-8)&&!(t>p&&t<g&&r>p&&r<g)){const e=t*u+u/2+o,n=r*u+u/2+o;f.push([e,n])}})});const w={};return f.forEach(e=>{let[t,r]=e;w[t]?w[t]?.push(r):w[t]=[r]}),Object.entries(w).map(e=>{let[t,r]=e;const n=r.filter(e=>r.every(t=>!he(e,t,u)));return[Number(t),n]}).forEach(e=>{let[t,r]=e;r.forEach(e=>{l.push(n.JW`<circle cx=${t} cy=${e} fill=${s} r=${u/2.5} />`)})}),Object.entries(w).filter(e=>{let[t,r]=e;return r.length>1}).map(e=>{let[t,r]=e;const n=r.filter(e=>r.some(t=>he(e,t,u)));return[Number(t),n]}).map(e=>{let[t,r]=e;r.sort((e,t)=>e<t?-1:1);const n=[];for(const i of r){const e=n.find(e=>e.some(e=>he(i,e,u)));e?e.push(i):n.push([i])}return[t,n.map(e=>[e[0],e[e.length-1]])]}).forEach(e=>{let[t,r]=e;r.forEach(e=>{let[r,i]=e;l.push(n.JW`
              <line
                x1=${t}
                x2=${t}
                y1=${r}
                y2=${i}
                stroke=${s}
                stroke-width=${u/1.25}
                stroke-linecap="round"
              />
            `)})}),l}},ge=W.AH`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${e=>{let{colors:t}=e;return t.white}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
  }

  :host {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    box-shadow: inset 0 0 0 4px ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[6]}};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var fe=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let we=class extends n.WF{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),n.qy`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return n.JW`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${pe.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?n.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?n.qy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:n.qy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};we.styles=[M.W5,ge],fe([(0,i.MZ)()],we.prototype,"uri",void 0),fe([(0,i.MZ)({type:Number})],we.prototype,"size",void 0),fe([(0,i.MZ)()],we.prototype,"theme",void 0),fe([(0,i.MZ)()],we.prototype,"imageSrc",void 0),fe([(0,i.MZ)()],we.prototype,"alt",void 0),fe([(0,i.MZ)({type:Boolean})],we.prototype,"arenaClear",void 0),fe([(0,i.MZ)({type:Boolean})],we.prototype,"farcaster",void 0),we=fe([(0,S.E)("wui-qr-code")],we);r(3625),r(478);const me=c.AH`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${e=>{let{durations:t}=e;return t.xl}};
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var ye=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let be=class extends re{constructor(){super(),this.basic=!1}firstUpdated(){this.basic||g.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:f.I.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e())}render(){return this.onRenderProxy(),n.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.wallet?this.wallet.name:void 0;p.x.setWcLinking(void 0),p.x.setRecentWallet(this.wallet);const t=F.W.state.themeVariables["--apkt-qr-color"]??F.W.state.themeVariables["--w3m-qr-color"];return n.qy` <wui-qr-code
      theme=${F.W.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,u.J)(v.$.getWalletImage(this.wallet))}
      color=${(0,u.J)(t)}
      alt=${(0,u.J)(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return n.qy`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};be.styles=me,ye([(0,i.MZ)({type:Boolean})],be.prototype,"basic",void 0),be=ye([(0,c.EM)("w3m-connecting-wc-qrcode")],be);var ve=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let xe=class extends n.WF{constructor(){if(super(),this.wallet=f.I.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");g.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:f.I.state.view}})}render(){return n.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,u.J)(v.$.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};xe=ve([(0,c.EM)("w3m-connecting-wc-unsupported")],xe);var $e=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ke=class extends re{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=le.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(p.x.subscribeKey("wcUri",()=>{this.updateLoadingState()})),g.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:f.I.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:r,href:n}=o.w.formatUniversalUrl(e,this.uri);p.x.setWcLinking({name:t,href:n}),p.x.setRecentWallet(this.wallet),o.w.openHref(r,"_blank")}catch{this.error=!0}}};$e([(0,i.wk)()],ke.prototype,"isLoading",void 0),ke=$e([(0,c.EM)("w3m-connecting-wc-web")],ke);const Ce=c.AH`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var Ee=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Re=class extends n.WF{constructor(){super(),this.wallet=f.I.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(s.H.state.siwx),this.remoteFeatures=s.H.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(s.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return s.H.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),n.qy`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding&&this.displayBranding?n.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if("browser"!==this.platform&&(!s.H.state.manualWCControl||e))try{const{wcPairingExpiry:t,status:r}=p.x.state,{redirectView:n}=f.I.state.data??{};if(e||s.H.state.enableEmbedded||o.w.isPairingExpired(t)||"connecting"===r){const e=p.x.getConnections(x.W.state.activeChain),t=this.remoteFeatures?.multiWallet,r=e.length>0;await p.x.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(r&&t?(f.I.replace("ProfileWallets"),I.P.showSuccess("New Wallet Added")):n?f.I.replace(n):A.W.close())}}catch(t){if(t instanceof Error&&t.message.includes("An error occurred when attempting to switch chain")&&!s.H.state.enableNetworkSwitch&&x.W.state.activeChain)return x.W.setActiveCaipNetwork(P.R.getUnsupportedNetwork(`${x.W.state.activeChain}:${x.W.state.activeCaipNetwork?.id}`)),void x.W.showUnsupportedChainUI();t instanceof T.A&&t.originalName===R.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?g.E.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:t.message}}):g.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),p.x.setWcError(!0),I.P.showError(t.message??"Connection error"),p.x.resetWcConnection(),f.I.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:r,injected:n,rdns:i}=this.wallet,a=n?.map(e=>{let{injected_id:t}=e;return t}).filter(Boolean),l=[...i?[i]:a??[]],c=!s.H.state.isUniversalProvider&&l.length,u=e,d=r,h=p.x.checkInstalled(l),g=c&&h,f=t&&!o.w.isMobile();g&&!x.W.state.noAdapters&&this.platforms.push("browser"),u&&this.platforms.push(o.w.isMobile()?"mobile":"qrcode"),d&&this.platforms.push("web"),f&&this.platforms.push("desktop"),g||!c||x.W.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return n.qy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return n.qy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return n.qy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return n.qy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return n.qy`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return n.qy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?n.qy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Re.styles=Ce,Ee([(0,i.wk)()],Re.prototype,"platform",void 0),Ee([(0,i.wk)()],Re.prototype,"platforms",void 0),Ee([(0,i.wk)()],Re.prototype,"isSiwxEnabled",void 0),Ee([(0,i.wk)()],Re.prototype,"remoteFeatures",void 0),Ee([(0,i.MZ)({type:Boolean})],Re.prototype,"displayBranding",void 0),Ee([(0,i.MZ)({type:Boolean})],Re.prototype,"basic",void 0),Re=Ee([(0,c.EM)("w3m-connecting-wc-view")],Re);var Ie=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ae=class extends n.WF{constructor(){super(),this.unsubscribe=[],this.isMobile=o.w.isMobile(),this.remoteFeatures=s.H.state.remoteFeatures,this.unsubscribe.push(s.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){const{featured:e,recommended:t}=a.N.state,{customWallets:r}=s.H.state,i=l.i.getRecentWallets(),o=e.length||t.length||r?.length||i.length;return n.qy`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${o?n.qy`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return n.qy`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?n.qy` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};Ie([(0,i.wk)()],Ae.prototype,"isMobile",void 0),Ie([(0,i.wk)()],Ae.prototype,"remoteFeatures",void 0),Ae=Ie([(0,c.EM)("w3m-connecting-wc-basic-view")],Ae);var Te=r(8531);const{I:Pe}=Te.ge;var Me=r(533);const Se=(e,t)=>{const r=e._$AN;if(void 0===r)return!1;for(const n of r)n._$AO?.(t,!1),Se(n,t);return!0},We=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===r?.size)},Le=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Be(t)}};function Ne(e){void 0!==this._$AN?(We(this),this._$AM=e,Le(this)):this._$AM=e}function Oe(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(n))for(let o=r;o<n.length;o++)Se(n[o],!1),We(n[o]);else null!=n&&(Se(n,!1),We(n));else Se(this,e)}const Be=e=>{e.type==Me.OA.CHILD&&(e._$AP??=Oe,e._$AQ??=Ne)};class je extends Me.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Le(this),this.isConnected=e._$AU}_$AO(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Se(this,e),We(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const qe=()=>new _e;class _e{}const ze=new WeakMap,De=(0,Me.u$)(class extends je{render(e){return Te.s6}update(e,t){let[r]=t;const n=r!==this.G;return n&&void 0!==this.G&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=r,this.ht=e.options?.host,this.rt(this.ct=e.element)),Te.s6}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){const t=this.ht??globalThis;let r=ze.get(t);void 0===r&&(r=new WeakMap,ze.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ht,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?ze.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Ue=W.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      color ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      border ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      box-shadow ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      width ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      height ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      transform ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      opacity ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${e=>{let{colors:t}=e;return t.neutrals300}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      color ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      border ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      box-shadow ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      width ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      height ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      transform ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      opacity ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${e=>{let{colors:t}=e;return t.white}};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${e=>{let{tokens:t}=e;return t.core.iconAccentPrimary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.textTertiary}};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${e=>{let{tokens:t}=e;return t.core.iconAccentPrimary}};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${e=>{let{tokens:t}=e;return t.core.iconAccentPrimary}};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${e=>{let{colors:t}=e;return t.neutrals400}};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${e=>{let{colors:t}=e;return t.accent080}};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${e=>{let{colors:t}=e;return t.neutrals700}};
  }

  input:checked:disabled + span {
    background-color: ${e=>{let{colors:t}=e;return t.neutrals700}};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${e=>{let{colors:t}=e;return t.neutrals400}};
  }

  input:checked:disabled + span::before {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.textTertiary}};
  }
`;var Fe=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let He=class extends n.WF{constructor(){super(...arguments),this.inputElementRef=qe(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return n.qy`
      <label data-size=${this.size}>
        <input
          ${De(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};He.styles=[M.W5,M.fD,Ue],Fe([(0,i.MZ)({type:Boolean})],He.prototype,"checked",void 0),Fe([(0,i.MZ)({type:Boolean})],He.prototype,"disabled",void 0),Fe([(0,i.MZ)()],He.prototype,"size",void 0),He=Fe([(0,S.E)("wui-toggle")],He);const Ze=W.AH`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${e=>{let{spacing:t}=e;return t[2]}};
    padding: ${e=>{let{spacing:t}=e;return t[2]}} ${e=>{let{spacing:t}=e;return t[3]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    box-shadow: inset 0 0 0 1px ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var Ve=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Je=class extends n.WF{constructor(){super(...arguments),this.checked=!1}render(){return n.qy`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};Je.styles=[M.W5,M.fD,Ze],Ve([(0,i.MZ)({type:Boolean})],Je.prototype,"checked",void 0),Je=Ve([(0,S.E)("wui-certified-switch")],Je);const Ke=W.AH`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${e=>{let{spacing:t}=e;return t[3]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    caret-color: ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    color: inherit;
    background: transparent;
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
    caret-color: ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}} ${e=>{let{spacing:t}=e;return t[3]}}
      ${e=>{let{spacing:t}=e;return t[3]}} ${e=>{let{spacing:t}=e;return t[10]}};
    font-size: ${e=>{let{textSize:t}=e;return t.large}};
    line-height: ${e=>{let{typography:t}=e;return t["lg-regular"].lineHeight}};
    letter-spacing: ${e=>{let{typography:t}=e;return t["lg-regular"].letterSpacing}};
    font-weight: ${e=>{let{fontWeight:t}=e;return t.regular}};
    font-family: ${e=>{let{fontFamily:t}=e;return t.regular}};
  }

  input[data-size='lg'] {
    padding: ${e=>{let{spacing:t}=e;return t[4]}} ${e=>{let{spacing:t}=e;return t[3]}}
      ${e=>{let{spacing:t}=e;return t[4]}} ${e=>{let{spacing:t}=e;return t[10]}};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderSecondary}};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
  }

  input::placeholder {
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
  }

  input:focus:enabled {
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderSecondary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    -webkit-box-shadow: 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
    -moz-box-shadow: 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
    box-shadow: 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${e=>{let{spacing:t}=e;return t[4]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${e=>{let{spacing:t}=e;return t[3]}};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
    color: ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${e=>{let{tokens:t}=e;return t.core.foregroundAccent010}};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${e=>{let{spacing:t}=e;return t[12]}};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var Ye=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Qe=class extends n.WF{constructor(){super(...arguments),this.inputElementRef=qe(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return n.qy` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${De(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,u.J)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?n.qy`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?n.qy`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?n.qy`<wui-icon name="spinner" size="md"></wui-icon>`:n.qy`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?n.qy`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?n.qy`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};Qe.styles=[M.W5,M.fD,Ke],Ye([(0,i.MZ)()],Qe.prototype,"icon",void 0),Ye([(0,i.MZ)({type:Boolean})],Qe.prototype,"disabled",void 0),Ye([(0,i.MZ)({type:Boolean})],Qe.prototype,"loading",void 0),Ye([(0,i.MZ)()],Qe.prototype,"placeholder",void 0),Ye([(0,i.MZ)()],Qe.prototype,"type",void 0),Ye([(0,i.MZ)()],Qe.prototype,"value",void 0),Ye([(0,i.MZ)()],Qe.prototype,"errorText",void 0),Ye([(0,i.MZ)()],Qe.prototype,"warningText",void 0),Ye([(0,i.MZ)()],Qe.prototype,"onSubmit",void 0),Ye([(0,i.MZ)()],Qe.prototype,"size",void 0),Ye([(0,i.MZ)({attribute:!1})],Qe.prototype,"onKeyDown",void 0),Qe=Ye([(0,S.E)("wui-input-text")],Qe);const Ge=W.AH`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${e=>{let{spacing:t}=e;return t[3]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
    cursor: pointer;
    padding: ${e=>{let{spacing:t}=e;return t[2]}};
    background-color: transparent;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
  }
`;var Xe=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let et=class extends n.WF{constructor(){super(...arguments),this.inputComponentRef=qe(),this.inputValue=""}render(){return n.qy`
      <wui-input-text
        ${De(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?n.qy`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){const e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",this.inputValue="",t.focus(),t.dispatchEvent(new Event("input")))}};et.styles=[M.W5,Ge],Xe([(0,i.MZ)()],et.prototype,"inputValue",void 0),et=Xe([(0,S.E)("wui-search-bar")],et);var tt=r(8631),rt=r(3113);r(9970);const nt=W.AH`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${e=>{let{spacing:t}=e;return t[2]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var it=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ot=class extends n.WF{constructor(){super(...arguments),this.type="wallet"}render(){return n.qy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?n.qy` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${rt.a}`:n.qy`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};ot.styles=[M.W5,M.fD,nt],it([(0,i.MZ)()],ot.prototype,"type",void 0),ot=it([(0,S.E)("wui-card-select-loader")],ot);var st=r(9929);const at=n.AH`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var lt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ct=class extends n.WF{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};\n      padding-top: ${this.padding&&st.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&st.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&st.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&st.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&st.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&st.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&st.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&st.Z.getSpacingStyles(this.margin,3)};\n    `,n.qy`<slot></slot>`}};ct.styles=[M.W5,at],lt([(0,i.MZ)()],ct.prototype,"gridTemplateRows",void 0),lt([(0,i.MZ)()],ct.prototype,"gridTemplateColumns",void 0),lt([(0,i.MZ)()],ct.prototype,"justifyItems",void 0),lt([(0,i.MZ)()],ct.prototype,"alignItems",void 0),lt([(0,i.MZ)()],ct.prototype,"justifyContent",void 0),lt([(0,i.MZ)()],ct.prototype,"alignContent",void 0),lt([(0,i.MZ)()],ct.prototype,"columnGap",void 0),lt([(0,i.MZ)()],ct.prototype,"rowGap",void 0),lt([(0,i.MZ)()],ct.prototype,"gap",void 0),lt([(0,i.MZ)()],ct.prototype,"padding",void 0),lt([(0,i.MZ)()],ct.prototype,"margin",void 0),ct=lt([(0,S.E)("wui-grid")],ct);const ut=c.AH`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${e=>{let{spacing:t}=e;return t[2]}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}} ${e=>{let{spacing:t}=e;return t[0]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: clamp(0px, ${e=>{let{borderRadius:t}=e;return t[4]}}, 20px);
    transition:
      color ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}},
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}},
      border-radius ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${e=>{let{tokens:t}=e;return t.core.glass010}};
  }

  [data-selected='true'] {
    background-color: ${e=>{let{colors:t}=e;return t.accent020}};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${e=>{let{colors:t}=e;return t.accent010}};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${e=>{let{colors:t}=e;return t.accent010}};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var dt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ht=class extends n.WF{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const e="certified"===this.wallet?.badge_type;return n.qy`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,u.J)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?n.qy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():n.qy`
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,u.J)(this.imageSrc)}
        name=${(0,u.J)(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return n.qy`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=v.$.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await v.$.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,g.E.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:f.I.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};ht.styles=ut,dt([(0,i.wk)()],ht.prototype,"visible",void 0),dt([(0,i.wk)()],ht.prototype,"imageSrc",void 0),dt([(0,i.wk)()],ht.prototype,"imageLoading",void 0),dt([(0,i.wk)()],ht.prototype,"isImpressed",void 0),dt([(0,i.MZ)()],ht.prototype,"explorerId",void 0),dt([(0,i.MZ)()],ht.prototype,"walletQuery",void 0),dt([(0,i.MZ)()],ht.prototype,"certified",void 0),dt([(0,i.MZ)()],ht.prototype,"displayIndex",void 0),dt([(0,i.MZ)({type:Object})],ht.prototype,"wallet",void 0),ht=dt([(0,c.EM)("w3m-all-wallets-list-item")],ht);const pt=c.AH`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${e=>{let{durations:t}=e;return t.xl}};
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-inout-power-2"]}};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${e=>{let{spacing:t}=e;return t[4]}};
    padding-bottom: ${e=>{let{spacing:t}=e;return t[4]}};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var gt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const ft="local-paginator";let wt=class extends n.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!a.N.state.wallets.length,this.wallets=a.N.state.wallets,this.mobileFullScreen=s.H.state.enableMobileFullScreen,this.unsubscribe.push(a.N.subscribeKey("wallets",e=>this.wallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),n.qy`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const e=this.shadowRoot?.querySelector("wui-grid");e&&(await a.N.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>n.qy`
        <wui-card-select-loader type="wallet" id=${(0,u.J)(t)}></wui-card-select-loader>
      `)}walletsTemplate(){return tt.A.getWalletConnectWallets(this.wallets).map((e,t)=>n.qy`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${"certified"===this.badge}
          displayIndex=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:r,count:n,mobileFilteredOutWalletsLength:i}=a.N.state,o=window.innerWidth<352?3:4,s=e.length+t.length;let l=Math.ceil(s/o)*o-s+o;return l-=e.length?r.length%o:0,0===n&&r.length>0?null:0===n||[...r,...e,...t].length<n-(i??0)?this.shimmerTemplate(l,ft):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${ft}`);e&&(this.paginationObserver=new IntersectionObserver(e=>{let[t]=e;if(t?.isIntersecting&&!this.loading){const{page:e,count:t,wallets:r}=a.N.state;r.length<t&&a.N.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){h.a.selectWalletConnector(e)}};wt.styles=pt,gt([(0,i.wk)()],wt.prototype,"loading",void 0),gt([(0,i.wk)()],wt.prototype,"wallets",void 0),gt([(0,i.wk)()],wt.prototype,"badge",void 0),gt([(0,i.wk)()],wt.prototype,"mobileFullScreen",void 0),wt=gt([(0,c.EM)("w3m-all-wallets-list")],wt);r(4582);const mt=n.AH`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var yt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let bt=class extends n.WF{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=s.H.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?n.qy`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await a.N.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=a.N.state,t=tt.A.markWalletsAsInstalled(e),r=tt.A.filterWalletsByWcSupport(t);return r.length?n.qy`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${r.map((e,t)=>n.qy`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${"certified"===this.badge}
              walletQuery=${this.query}
              displayIndex=${t}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:n.qy`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){h.a.selectWalletConnector(e)}};bt.styles=mt,yt([(0,i.wk)()],bt.prototype,"loading",void 0),yt([(0,i.wk)()],bt.prototype,"mobileFullScreen",void 0),yt([(0,i.MZ)()],bt.prototype,"query",void 0),yt([(0,i.MZ)()],bt.prototype,"badge",void 0),bt=yt([(0,c.EM)("w3m-all-wallets-search")],bt);var vt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let xt=class extends n.WF{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=o.w.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return n.qy`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?n.qy`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:n.qy`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",I.P.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return o.w.isMobile()?n.qy`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){f.I.push("ConnectingWalletConnect")}};vt([(0,i.wk)()],xt.prototype,"search",void 0),vt([(0,i.wk)()],xt.prototype,"badge",void 0),xt=vt([(0,c.EM)("w3m-all-wallets-view")],xt);r(5770);var $t=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let kt=class extends n.WF{constructor(){super(...arguments),this.wallet=f.I.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return n.qy`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?n.qy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?n.qy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?n.qy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?n.qy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(g.E.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),o.w.openHref(e.href,"_blank"))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};kt=$t([(0,c.EM)("w3m-downloads-view")],kt)}}]);
//# sourceMappingURL=1216.7f9ad8a0.chunk.js.map