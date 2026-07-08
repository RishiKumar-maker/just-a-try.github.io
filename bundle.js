(()=>{var Mu=0,kl=1,Su=2;var bs=1,bu=2,Mr=3,Sr=0,Gt=1,rn=2,Ln=0,Ni=1,Ui=2,Vl=3,Hl=4,Tu=5;var br=100,Eu=101,wu=102,Au=103,Cu=104,Ru=200,Pu=201,Iu=202,Lu=203,Du=204,Nu=205,Uu=206,Ou=207,Fu=208,Bu=209,zu=210,Gu=211,ku=212,Vu=213,Hu=214,Wl=0,Xl=1,jl=2,ho=3,ql=4,Yl=5,Zl=6,Jl=7,Wu=0,Xu=1,ju=2,xn=0,Kl=1,$l=2,Ql=3,ec=4,tc=5,nc=6,ic=7;var rc=300,Tr=301,Oi=302,uo=303,po=304,Ts=306,Ii=1e3,di=1001,va=1002,Qt=1003,qu=1004;var Es=1005;var wt=1006,mo=1007;var $n=1008;var Yt=1009,sc=1010,ac=1011,Er=1012,fo=1013,Qn=1014,sn=1015,Dn=1016,go=1017,_o=1018,wr=1020,oc=35902,lc=35899,Yu=1021,Zu=1022,yn=1023,_i=1026,Fi=1027,vo=1028,xo=1029,Bi=1030,cc=1031;var hc=1033,yo=33776,Mo=33777,So=33778,bo=33779,uc=35840,dc=35841,pc=35842,mc=35843,fc=36196,gc=37492,_c=37496,vc=37488,xc=37489,To=37490,yc=37491,Mc=37808,Sc=37809,bc=37810,Tc=37811,Ec=37812,wc=37813,Ac=37814,Cc=37815,Rc=37816,Pc=37817,Ic=37818,Lc=37819,Dc=37820,Nc=37821,Uc=36492,Oc=36494,Fc=36495,Bc=36283,zc=36284,Eo=36285,Gc=36286;var qr=2300,xa=2301,ga=2302,Rl=2303,Pl=2400,Il=2401,Ll=2402;var kc=0,Ju=1,zi="",pt="srgb",Yr="srgb-linear",Zr="linear",Ye="srgb";var Ri=7680;var Ku=512,$u=513,Qu=514,wo=515,ed=516,td=517,Ao=518,nd=519,ya=35044;var Vc="300 es",Xn=2e3,hr=2001;function nm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function id(){let i=Jr("canvas");return i.style.display="block",i}var Gh={},ur=null;function Kr(...i){let e="THREE."+i.shift();ur?ur("log",e,...i):console.log(e,...i)}function rd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Te(...i){let e="THREE."+(i=rd(i)).shift();if(ur)ur("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function be(...i){let e="THREE."+(i=rd(i)).shift();if(ur)ur("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Pi(...i){let e=i.join(" ");e in Gh||(Gh[e]=!0,Te(...i))}function sd(i,e,t){return new Promise(function(n,r){setTimeout(function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}},t)})}var ad={[Wl]:1,[jl]:6,[ql]:7,[ho]:5,[Xl]:0,[Zl]:2,[Jl]:4,[Yl]:3},Pn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _a=Math.PI/180,Ma=180/Math.PI;function Hn(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Lt[255&i]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[255&e]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[63&t|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[255&n]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function ze(i,e,t){return Math.max(e,Math.min(t,i))}function im(i,e){return(i%e+e)%e}function el(i,e,t){return(1-t)*i+t*e}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $e(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ee=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},en=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],m=n[r+3],d=s[a+0],u=s[a+1],g=s[a+2],p=s[a+3];if(m!==p||c!==d||l!==u||h!==g){let v=c*d+l*u+h*g+m*p;v<0&&(d=-d,u=-u,g=-g,p=-p,v=-v);let f=1-o;if(v<.9995){let _=Math.acos(v),y=Math.sin(_);f=Math.sin(f*_)/y,c=c*f+d*(o=Math.sin(o*_)/y),l=l*f+u*o,h=h*f+g*o,m=m*f+p*o}else{c=c*f+d*o,l=l*f+u*o,h=h*f+g*o,m=m*f+p*o;let _=1/Math.sqrt(c*c+l*l+h*h+m*m);c*=_,l*=_,h*=_,m*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],m=s[a],d=s[a+1],u=s[a+2],g=s[a+3];return e[t]=o*g+h*m+c*u-l*d,e[t+1]=c*g+h*d+l*m-o*u,e[t+2]=l*g+h*u+o*d-c*m,e[t+3]=h*g-o*m-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),m=o(s/2),d=c(n/2),u=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*m+l*u*g,this._y=l*u*m-d*h*g,this._z=l*h*g+d*u*m,this._w=l*h*m-d*u*g;break;case"YXZ":this._x=d*h*m+l*u*g,this._y=l*u*m-d*h*g,this._z=l*h*g-d*u*m,this._w=l*h*m+d*u*g;break;case"ZXY":this._x=d*h*m-l*u*g,this._y=l*u*m+d*h*g,this._z=l*h*g+d*u*m,this._w=l*h*m-d*u*g;break;case"ZYX":this._x=d*h*m-l*u*g,this._y=l*u*m+d*h*g,this._z=l*h*g-d*u*m,this._w=l*h*m+d*u*g;break;case"YZX":this._x=d*h*m+l*u*g,this._y=l*u*m+d*h*g,this._z=l*h*g-d*u*m,this._w=l*h*m-d*u*g;break;case"XZY":this._x=d*h*m-l*u*g,this._y=l*u*m-d*h*g,this._z=l*h*g+d*u*m,this._w=l*h*m+d*u*g;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],m=t[10],d=n+o+m;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(s-l)*u,this._z=(a-r)*u}else if(n>o&&n>m){let u=2*Math.sqrt(1+n-o-m);this._w=(h-c)/u,this._x=.25*u,this._y=(r+a)/u,this._z=(s+l)/u}else if(o>m){let u=2*Math.sqrt(1+o-n-m);this._w=(s-l)/u,this._x=(r+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+m-n-o);this._w=(a-r)/u,this._x=(s+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),m=2*(s*n-a*t);return this.x=t+c*l+a*m-o*h,this.y=n+c*h+o*l-s*m,this.z=r+c*m+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tl.copy(this).projectOnVector(e),this.sub(tl)}reflect(e){return this.sub(tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tl=new w,kh=new en,Le=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],m=n[7],d=n[2],u=n[5],g=n[8],p=r[0],v=r[3],f=r[6],_=r[1],y=r[4],S=r[7],E=r[2],M=r[5],P=r[8];return s[0]=a*p+o*_+c*E,s[3]=a*v+o*y+c*M,s[6]=a*f+o*S+c*P,s[1]=l*p+h*_+m*E,s[4]=l*v+h*y+m*M,s[7]=l*f+h*S+m*P,s[2]=d*p+u*_+g*E,s[5]=d*v+u*y+g*M,s[8]=d*f+u*S+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],m=h*a-o*l,d=o*c-h*s,u=l*s-a*c,g=t*m+n*d+r*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return e[0]=m*p,e[1]=(r*l-h*n)*p,e[2]=(o*n-r*a)*p,e[3]=d*p,e[4]=(h*t-r*c)*p,e[5]=(r*s-o*t)*p,e[6]=u*p,e[7]=(n*c-l*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Pi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nl.makeScale(e,t)),this}rotate(e){return Pi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nl.makeRotation(-e)),this}translate(e,t){return Pi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nl=new Le,Vh=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hh=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rm(){let i={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Ye&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ye&&(r.r=cr(r.r),r.g=cr(r.g),r.b=cr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Zr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Pi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Pi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yr]:{primaries:e,whitePoint:n,transfer:Zr,toXYZ:Vh,fromXYZ:Hh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:n,transfer:Ye,toXYZ:Vh,fromXYZ:Hh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),i}var ke=rm();function Wn(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function cr(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var qi,Sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qi===void 0&&(qi=Jr("canvas")),qi.width=e.width,qi.height=e.height;let r=qi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Wn(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Wn(t[n]/255)):t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sm=0,dr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(il(r[a].image)):s.push(il(r[a]))}else s=il(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var am=0,rl=new w,Bt=class i extends Pn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,c=1009,l=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Hn(),this.name="",this.source=new dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rl).x}get height(){return this.source.getSize(rl).y}get depth(){return this.source.getSize(rl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n:Te(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null,Bt.DEFAULT_MAPPING=rc,Bt.DEFAULT_ANISOTROPY=1;var Qe=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],m=c[8],d=c[1],u=c[5],g=c[9],p=c[2],v=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(m-p)<.01&&Math.abs(g-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(m+p)<.1&&Math.abs(g+v)<.1&&Math.abs(l+u+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,S=(u+1)/2,E=(f+1)/2,M=(h+d)/4,P=(m+p)/4,O=(g+v)/4;return y>S&&y>E?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=M/n,s=P/n):S>E?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=M/r,s=O/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=P/s,r=O/s),this.set(n,r,s,t),this}let _=Math.sqrt((v-g)*(v-g)+(m-p)*(m-p)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(v-g)/_,this.y=(m-p)/_,this.z=(d-h)/_,this.w=Math.acos((l+u+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ba=class extends Pn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new Bt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new dr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends ba{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$r=class extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ta=class extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oe=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,o,c,l,h,m,d,u,g,p,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,m,d,u,g,p,v)}set(e,t,n,r,s,a,o,c,l,h,m,d,u,g,p,v){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=m,f[14]=d,f[3]=u,f[7]=g,f[11]=p,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Yi.setFromMatrixColumn(e,0).length(),s=1/Yi.setFromMatrixColumn(e,1).length(),a=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){let d=a*h,u=a*m,g=o*h,p=o*m;t[0]=c*h,t[4]=-c*m,t[8]=l,t[1]=u+g*l,t[5]=d-p*l,t[9]=-o*c,t[2]=p-d*l,t[6]=g+u*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,u=c*m,g=l*h,p=l*m;t[0]=d+p*o,t[4]=g*o-u,t[8]=a*l,t[1]=a*m,t[5]=a*h,t[9]=-o,t[2]=u*o-g,t[6]=p+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,u=c*m,g=l*h,p=l*m;t[0]=d-p*o,t[4]=-a*m,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*h,t[9]=p-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,u=a*m,g=o*h,p=o*m;t[0]=c*h,t[4]=g*l-u,t[8]=d*l+p,t[1]=c*m,t[5]=p*l+d,t[9]=u*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,u=a*l,g=o*c,p=o*l;t[0]=c*h,t[4]=p-d*m,t[8]=g*m+u,t[1]=m,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*m+g,t[10]=d-p*m}else if(e.order==="XZY"){let d=a*c,u=a*l,g=o*c,p=o*l;t[0]=c*h,t[4]=-m,t[8]=l*h,t[1]=d*m+p,t[5]=a*h,t[9]=u*m-g,t[2]=g*m-u,t[6]=o*h,t[10]=p*m+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(om,e,lm)}lookAt(e,t,n){let r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),ri.crossVectors(n,Vt),ri.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),ri.crossVectors(n,Vt)),ri.normalize(),ks.crossVectors(Vt,ri),r[0]=ri.x,r[4]=ks.x,r[8]=Vt.x,r[1]=ri.y,r[5]=ks.y,r[9]=Vt.y,r[2]=ri.z,r[6]=ks.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],m=n[5],d=n[9],u=n[13],g=n[2],p=n[6],v=n[10],f=n[14],_=n[3],y=n[7],S=n[11],E=n[15],M=r[0],P=r[4],O=r[8],L=r[12],N=r[1],V=r[5],F=r[9],Z=r[13],H=r[2],k=r[6],q=r[10],W=r[14],ne=r[3],de=r[7],Se=r[11],ge=r[15];return s[0]=a*M+o*N+c*H+l*ne,s[4]=a*P+o*V+c*k+l*de,s[8]=a*O+o*F+c*q+l*Se,s[12]=a*L+o*Z+c*W+l*ge,s[1]=h*M+m*N+d*H+u*ne,s[5]=h*P+m*V+d*k+u*de,s[9]=h*O+m*F+d*q+u*Se,s[13]=h*L+m*Z+d*W+u*ge,s[2]=g*M+p*N+v*H+f*ne,s[6]=g*P+p*V+v*k+f*de,s[10]=g*O+p*F+v*q+f*Se,s[14]=g*L+p*Z+v*W+f*ge,s[3]=_*M+y*N+S*H+E*ne,s[7]=_*P+y*V+S*k+E*de,s[11]=_*O+y*F+S*q+E*Se,s[15]=_*L+y*Z+S*W+E*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],m=e[6],d=e[10],u=e[14],g=e[3],p=e[7],v=e[11],f=e[15],_=c*u-l*d,y=o*u-l*m,S=o*d-c*m,E=a*u-l*h,M=a*d-c*h,P=a*m-o*h;return t*(p*_-v*y+f*S)-n*(g*_-v*E+f*M)+r*(g*y-p*E+f*P)-s*(g*S-p*M+v*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(s*h-o*c)+r*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],m=e[9],d=e[10],u=e[11],g=e[12],p=e[13],v=e[14],f=e[15],_=t*o-n*a,y=t*c-r*a,S=t*l-s*a,E=n*c-r*o,M=n*l-s*o,P=r*l-s*c,O=h*p-m*g,L=h*v-d*g,N=h*f-u*g,V=m*v-d*p,F=m*f-u*p,Z=d*f-u*v,H=_*Z-y*F+S*V+E*N-M*L+P*O;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/H;return e[0]=(o*Z-c*F+l*V)*k,e[1]=(r*F-n*Z-s*V)*k,e[2]=(p*P-v*M+f*E)*k,e[3]=(d*M-m*P-u*E)*k,e[4]=(c*N-a*Z-l*L)*k,e[5]=(t*Z-r*N+s*L)*k,e[6]=(v*S-g*P-f*y)*k,e[7]=(h*P-d*S+u*y)*k,e[8]=(a*F-o*N+l*O)*k,e[9]=(n*N-t*F-s*O)*k,e[10]=(g*M-p*S+f*_)*k,e[11]=(m*S-h*M-u*_)*k,e[12]=(o*L-a*V-c*O)*k,e[13]=(t*V-n*L+r*O)*k,e[14]=(p*y-g*E-v*_)*k,e[15]=(h*E-m*y+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,m=o+o,d=s*l,u=s*h,g=s*m,p=a*h,v=a*m,f=o*m,_=c*l,y=c*h,S=c*m,E=n.x,M=n.y,P=n.z;return r[0]=(1-(p+f))*E,r[1]=(u+S)*E,r[2]=(g-y)*E,r[3]=0,r[4]=(u-S)*M,r[5]=(1-(d+f))*M,r[6]=(v+_)*M,r[7]=0,r[8]=(g+y)*P,r[9]=(v-_)*P,r[10]=(1-(d+p))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Yi.set(r[0],r[1],r[2]).length(),o=Yi.set(r[4],r[5],r[6]).length(),c=Yi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),mn.copy(this);let l=1/a,h=1/o,m=1/c;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=m,mn.elements[9]*=m,mn.elements[10]*=m,t.setFromRotationMatrix(mn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),m=2*s/(n-r),d=(t+e)/(t-e),u=(n+r)/(n-r),g,p;if(c)g=s/(a-s),p=a*s/(a-s);else if(o===Xn)g=-(a+s)/(a-s),p=-2*a*s/(a-s);else{if(o!==hr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);g=-a/(a-s),p=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=m,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),m=2/(n-r),d=-(t+e)/(t-e),u=-(n+r)/(n-r),g,p;if(c)g=1/(a-s),p=a/(a-s);else if(o===Xn)g=-2/(a-s),p=-(a+s)/(a-s);else{if(o!==hr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);g=-1/(a-s),p=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=m,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Yi=new w,mn=new Oe,om=new w(0,0,0),lm=new w(1,1,1),ri=new w,ks=new w,Vt=new w,Wh=new Oe,Xh=new en,jn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],m=r[2],d=r[6],u=r[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ze(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jn.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},cm=0,jh=new w,Zi=new en,Bn=new Oe,Vs=new w,Ur=new w,hm=new w,um=new en,qh=new w(1,0,0),Yh=new w(0,1,0),Zh=new w(0,0,1),Jh={type:"added"},dm={type:"removed"},Ji={type:"childadded",child:null},sl={type:"childremoved",child:null},yt=class i extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new w,t=new jn,n=new en,r=new w(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Le}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(qh,e)}rotateY(e){return this.rotateOnAxis(Yh,e)}rotateZ(e){return this.rotateOnAxis(Zh,e)}translateOnAxis(e,t){return jh.copy(e).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qh,e)}translateY(e){return this.translateOnAxis(Yh,e)}translateZ(e){return this.translateOnAxis(Zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Ur,Vs,this.up):Bn.lookAt(Vs,Ur,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),Zi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jh),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dm),sl.child=e,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jh),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,hm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,um,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let m=c[l];s(e.shapes,m)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),m=a(e.shapes),d=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};yt.DEFAULT_UP=new w(0,1,0),yt.DEFAULT_MATRIX_AUTO_UPDATE=!0,yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pt=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},pm={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let p of e.hand.values()){let v=t.getJointPose(p,n),f=this._getHandJoint(l,p);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}let h=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],d=h.position.distanceTo(m.position),u=.02,g=.005;l.inputState.pinching&&d>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pm)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ke.workingColorSpace){if(e=im(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=al(a,s,e+1/3),this.g=al(a,s,e),this.b=al(a,s,e-1/3)}return ke.colorSpaceToWorking(this,r),this}setStyle(e,t=pt){function n(s){s!==void 0&&parseFloat(s)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return ke.workingToColorSpace(Dt.copy(this),e),65536*Math.round(ze(255*Dt.r,0,255))+256*Math.round(ze(255*Dt.g,0,255))+Math.round(ze(255*Dt.b,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(Dt.copy(this),t);let n=Dt.r,r=Dt.g,s=Dt.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let m=a-o;switch(l=h<=.5?m/(a+o):m/(2-a-o),a){case n:c=(r-s)/m+(r<s?6:0);break;case r:c=(s-n)/m+2;break;case s:c=(n-r)/m+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=pt){ke.workingToColorSpace(Dt.copy(this),e);let t=Dt.r,n=Dt.g,r=Dt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Hs);let n=el(si.h,Hs.h,t),r=el(si.s,Hs.s,t),s=el(si.l,Hs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dt=new Ne;Ne.NAMES=od;var Qr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},es=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},fn=new w,zn=new w,ol=new w,Gn=new w,Ki=new w,$i=new w,Kh=new w,ll=new w,cl=new w,hl=new w,ul=new Qe,dl=new Qe,pl=new Qe,Cn=class i{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),fn.subVectors(e,t),r.cross(fn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){fn.subVectors(r,t),zn.subVectors(n,t),ol.subVectors(e,t);let a=fn.dot(fn),o=fn.dot(zn),c=fn.dot(ol),l=zn.dot(zn),h=zn.dot(ol),m=a*l-o*o;if(m===0)return s.set(0,0,0),null;let d=1/m,u=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-u-g,g,u)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Gn)!==null&&Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(o,Gn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return ul.setScalar(0),dl.setScalar(0),pl.setScalar(0),ul.fromBufferAttribute(e,t),dl.fromBufferAttribute(e,n),pl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ul,s.x),a.addScaledVector(dl,s.y),a.addScaledVector(pl,s.z),a}static isFrontFacing(e,t,n,r){return fn.subVectors(n,t),zn.subVectors(e,t),fn.cross(zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),.5*fn.cross(zn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Ki.subVectors(r,n),$i.subVectors(s,n),ll.subVectors(e,n);let c=Ki.dot(ll),l=$i.dot(ll);if(c<=0&&l<=0)return t.copy(n);cl.subVectors(e,r);let h=Ki.dot(cl),m=$i.dot(cl);if(h>=0&&m<=h)return t.copy(r);let d=c*m-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ki,a);hl.subVectors(e,s);let u=Ki.dot(hl),g=$i.dot(hl);if(g>=0&&u<=g)return t.copy(s);let p=u*l-c*g;if(p<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector($i,o);let v=h*g-u*m;if(v<=0&&m-h>=0&&u-g>=0)return Kh.subVectors(s,r),o=(m-h)/(m-h+(u-g)),t.copy(r).addScaledVector(Kh,o);let f=1/(v+p+d);return a=p*f,o=d*f,t.copy(n).addScaledVector(Ki,a).addScaledVector($i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tn=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(e.matrixWorld),this.union(Ws)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),Xs.subVectors(this.max,Or),Qi.subVectors(e.a,Or),er.subVectors(e.b,Or),tr.subVectors(e.c,Or),ai.subVectors(er,Qi),oi.subVectors(tr,er),Ei.subVectors(Qi,tr);let t=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Ei.z,Ei.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Ei.z,0,-Ei.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Ei.y,Ei.x,0];return!!ml(t,Qi,er,tr,Xs)&&(t=[1,0,0,0,1,0,0,0,1],!!ml(t,Qi,er,tr,Xs)&&(js.crossVectors(ai,oi),t=[js.x,js.y,js.z],ml(t,Qi,er,tr,Xs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(gn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},kn=[new w,new w,new w,new w,new w,new w,new w,new w],gn=new w,Ws=new tn,Qi=new w,er=new w,tr=new w,ai=new w,oi=new w,Ei=new w,Or=new w,Xs=new w,js=new w,wi=new w;function ml(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){wi.fromArray(i,s);let o=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var M0=mm();function mm(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,r[c]=24,r[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,r[c]=-l-1,r[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,r[c]=13,r[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,r[c]=24,r[256|c]=24):(n[c]=31744,n[256|c]=64512,r[c]=13,r[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var _t=new w,qs=new ee,fm=0,zt=class extends Pn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ya,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ya&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var ts=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ns=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var we=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},gm=new tn,Fr=new w,fl=new w,nn=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);let t=Fr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(Fr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(fl)),this.expandByPoint(Fr.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_m=0,$t=new Oe,gl=new yt,nr=new w,Ht=new tn,Br=new tn,Et=new w,it=class i extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let n=t.length-1;n>=0;--n)if(t[n]>=65535)return!0;return!1})(e)?ns:ts)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return gl.lookAt(e),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new w,1/0);if(e){let n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Ht.min,Br.min),Ht.expandByPoint(Et),Et.addVectors(Ht.max,Br.max),Ht.expandByPoint(Et)):(Ht.expandByPoint(Br.min),Ht.expandByPoint(Br.max))}Ht.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Et.fromBufferAttribute(o,l),c&&(nr.fromBufferAttribute(e,l),Et.add(nr)),r=Math.max(r,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");a!==void 0&&a.count===n.count||(a=new zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let O=0;O<n.count;O++)o[O]=new w,c[O]=new w;let l=new w,h=new w,m=new w,d=new ee,u=new ee,g=new ee,p=new w,v=new w;function f(O,L,N){l.fromBufferAttribute(n,O),h.fromBufferAttribute(n,L),m.fromBufferAttribute(n,N),d.fromBufferAttribute(s,O),u.fromBufferAttribute(s,L),g.fromBufferAttribute(s,N),h.sub(l),m.sub(l),u.sub(d),g.sub(d);let V=1/(u.x*g.y-g.x*u.y);isFinite(V)&&(p.copy(h).multiplyScalar(g.y).addScaledVector(m,-u.y).multiplyScalar(V),v.copy(m).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(V),o[O].add(p),o[L].add(p),o[N].add(p),c[O].add(v),c[L].add(v),c[N].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let O=0,L=_.length;O<L;++O){let N=_[O],V=N.start;for(let F=V,Z=V+N.count;F<Z;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let y=new w,S=new w,E=new w,M=new w;function P(O){E.fromBufferAttribute(r,O),M.copy(E);let L=o[O];y.copy(L),y.sub(E.multiplyScalar(E.dot(L))).normalize(),S.crossVectors(M,L);let N=S.dot(c[O])<0?-1:1;a.setXYZW(O,y.x,y.y,y.z,N)}for(let O=0,L=_.length;O<L;++O){let N=_[O],V=N.start;for(let F=V,Z=V+N.count;F<Z;F+=3)P(e.getX(F+0)),P(e.getX(F+1)),P(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new zt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let r=new w,s=new w,a=new w,o=new w,c=new w,l=new w,h=new w,m=new w;if(e)for(let d=0,u=e.count;d<u;d+=3){let g=e.getX(d+0),p=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,v),h.subVectors(a,s),m.subVectors(r,s),h.cross(m),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),m.subVectors(r,s),h.cross(m),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,m=o.normalized,d=new l.constructor(c.length*h),u=0,g=0;for(let p=0,v=c.length;p<v;p++){u=o.isInterleavedBufferAttribute?c[p]*o.data.stride+o.offset:c[p]*h;for(let f=0;f<h;f++)d[g++]=l[u++]}return new zt(d,h,m)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=e(r[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,m=l.length;h<m;h++){let d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let m=0,d=l.length;m<d;m++){let u=l[m];h.push(u.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],m=s[l];for(let d=0,u=m.length;d<u;d++)h.push(m[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ea=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ya,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ft=new w,is=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Kr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Kr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ir,vm=0,qn=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:Te(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},_n=class extends qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zr=new w,rr=new w,sr=new w,ar=new ee,Gr=new ee,ld=new Oe,Ys=new w,kr=new w,Zs=new w,$h=new ee,_l=new ee,Qh=new ee,In=class extends yt{constructor(e=new _n){if(super(),this.isSprite=!0,this.type="Sprite",ir===void 0){ir=new it;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ea(t,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new is(n,3,0,!1)),ir.setAttribute("uv",new is(n,2,3,!1))}this.geometry=ir,this.material=e,this.center=new ee(.5,.5),this.count=1}raycast(e,t){e.camera===null&&be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),ld.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-sr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;Js(Ys.set(-.5,-.5,0),sr,a,rr,r,s),Js(kr.set(.5,-.5,0),sr,a,rr,r,s),Js(Zs.set(.5,.5,0),sr,a,rr,r,s),$h.set(0,0),_l.set(1,0),Qh.set(1,1);let o=e.ray.intersectTriangle(Ys,kr,Zs,!1,zr);if(o===null&&(Js(kr.set(-.5,.5,0),sr,a,rr,r,s),_l.set(0,1),o=e.ray.intersectTriangle(Ys,Zs,kr,!1,zr),o===null))return;let c=e.ray.origin.distanceTo(zr);c<e.near||c>e.far||t.push({distance:c,point:zr.clone(),uv:Cn.getInterpolation(zr,Ys,kr,Zs,$h,_l,Qh,new ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Js(i,e,t,n,r,s){ar.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Gr.x=s*ar.x-r*ar.y,Gr.y=r*ar.x+s*ar.y):Gr.copy(ar),i.copy(e),i.x+=Gr.x,i.y+=Gr.y,i.applyMatrix4(ld)}var S0=new w,b0=new w;var Vn=new w,vl=new w,Ks=new w,li=new w,xl=new w,$s=new w,yl=new w,pi=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){vl.copy(e).add(t).multiplyScalar(.5),Ks.copy(t).sub(e).normalize(),li.copy(this.origin).sub(vl);let s=.5*e.distanceTo(t),a=-this.direction.dot(Ks),o=li.dot(this.direction),c=-li.dot(Ks),l=li.lengthSq(),h=Math.abs(1-a*a),m,d,u,g;if(h>0)if(m=a*c-o,d=a*o-c,g=s*h,m>=0)if(d>=-g)if(d<=g){let p=1/h;m*=p,d*=p,u=m*(m+a*d+2*o)+d*(a*m+d+2*c)+l}else d=s,m=Math.max(0,-(a*d+o)),u=-m*m+d*(d+2*c)+l;else d=-s,m=Math.max(0,-(a*d+o)),u=-m*m+d*(d+2*c)+l;else d<=-g?(m=Math.max(0,-(-a*s+o)),d=m>0?-s:Math.min(Math.max(-s,-c),s),u=-m*m+d*(d+2*c)+l):d<=g?(m=0,d=Math.min(Math.max(-s,-c),s),u=d*(d+2*c)+l):(m=Math.max(0,-(a*s+o)),d=m>0?s:Math.min(Math.max(-s,-c),s),u=-m*m+d*(d+2*c)+l);else d=a>0?-s:s,m=Math.max(0,-(a*d+o)),u=-m*m+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(vl).addScaledVector(Ks,d),u}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);let n=Vn.dot(this.direction),r=Vn.dot(Vn)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(e.min.z-d.z)*m,c=(e.max.z-d.z)*m):(o=(e.max.z-d.z)*m,c=(e.min.z-d.z)*m),n>c||o>r?null:((o>n||n!=n)&&(n=o),(c<r||r!=r)&&(r=c),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,r,s){xl.subVectors(t,e),$s.subVectors(n,e),yl.crossVectors(xl,$s);let a,o=this.direction.dot(yl);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}li.subVectors(this.origin,e);let c=a*this.direction.dot($s.crossVectors(li,$s));if(c<0)return null;let l=a*this.direction.dot(xl.cross(li));if(l<0||c+l>o)return null;let h=-a*li.dot(yl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Li=class extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},eu=new Oe,Ai=new pi,Qs=new nn,tu=new w,ea=new w,ta=new w,na=new w,Ml=new w,ia=new w,nu=new w,ra=new w,Ke=class extends yt{constructor(e=new it,t=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){ia.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],m=s[c];h!==0&&(Ml.fromBufferAttribute(m,e),a?ia.addScaledVector(Ml,h):ia.addScaledVector(Ml.sub(t),h))}t.add(ia)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),Qs.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Qs,tu)===null||Ai.origin.distanceToSquared(tu)>(e.far-e.near)**2))return;eu.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(eu),n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Ai)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,m=s.attributes.normal,d=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,p=d.length;g<p;g++){let v=d[g],f=a[v.materialIndex];for(let _=Math.max(v.start,u.start),y=Math.min(o.count,Math.min(v.start+v.count,u.start+u.count));_<y;_+=3)r=sa(this,f,e,n,l,h,m,o.getX(_),o.getX(_+1),o.getX(_+2)),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}else for(let g=Math.max(0,u.start),p=Math.min(o.count,u.start+u.count);g<p;g+=3)r=sa(this,a,e,n,l,h,m,o.getX(g),o.getX(g+1),o.getX(g+2)),r&&(r.faceIndex=Math.floor(g/3),t.push(r));else if(c!==void 0)if(Array.isArray(a))for(let g=0,p=d.length;g<p;g++){let v=d[g],f=a[v.materialIndex];for(let _=Math.max(v.start,u.start),y=Math.min(c.count,Math.min(v.start+v.count,u.start+u.count));_<y;_+=3)r=sa(this,f,e,n,l,h,m,_,_+1,_+2),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}else for(let g=Math.max(0,u.start),p=Math.min(c.count,u.start+u.count);g<p;g+=3)r=sa(this,a,e,n,l,h,m,g,g+1,g+2),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}};function sa(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,ea),i.getVertexPosition(c,ta),i.getVertexPosition(l,na);let h=(function(m,d,u,g,p,v,f,_){let y;if(y=d.side===1?g.intersectTriangle(f,v,p,!0,_):g.intersectTriangle(p,v,f,d.side===0,_),y===null)return null;ra.copy(_),ra.applyMatrix4(m.matrixWorld);let S=u.ray.origin.distanceTo(ra);return S<u.near||S>u.far?null:{distance:S,point:ra.clone(),object:m}})(i,e,t,n,ea,ta,na,nu);if(h){let m=new w;Cn.getBarycoord(nu,ea,ta,na,m),r&&(h.uv=Cn.getInterpolatedAttribute(r,o,c,l,m,new ee)),s&&(h.uv1=Cn.getInterpolatedAttribute(s,o,c,l,m,new ee)),a&&(h.normal=Cn.getInterpolatedAttribute(a,o,c,l,m,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new w,materialIndex:0};Cn.getNormal(ea,ta,na,d.normal),h.face=d,h.barycoord=m}return h}var T0=new Qe,E0=new Qe,w0=new Qe,A0=new Qe,C0=new Oe,R0=new w,P0=new nn,I0=new Oe,L0=new pi;var rs=class extends Bt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=1003,h=1003,m,d){super(null,a,o,c,l,h,r,s,m,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},D0=new Oe,N0=new Oe;var ss=class extends zt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},or=new Oe,iu=new Oe,aa=[],ru=new tn,xm=new Oe,Vr=new Ke,Hr=new nn,as=class extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ss(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,xm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),ru.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(ru)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),Hr.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=r[s+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),e.ray.intersectsSphere(Hr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,or),iu.multiplyMatrices(n,or),Vr.matrixWorld=iu,Vr.raycast(e,aa);for(let a=0,o=aa.length;a<o;a++){let c=aa[a];c.instanceId=s,c.object=this,t.push(c)}aa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ss(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,16*e),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new rs(new Float32Array(r*this.count),r,this.count,vo,sn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Sl=new w,ym=new w,Mm=new Le,wn=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Sl.subVectors(n,t).cross(ym.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Sl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mm.getNormalMatrix(e),r=this.coplanarPoint(Sl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new nn,Sm=new ee(.5,.5),oa=new w,Yn=class{constructor(e=new wn,t=new wn,n=new wn,r=new wn,s=new wn,a=new wn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],m=s[5],d=s[6],u=s[7],g=s[8],p=s[9],v=s[10],f=s[11],_=s[12],y=s[13],S=s[14],E=s[15];if(r[0].setComponents(l-a,u-h,f-g,E-_).normalize(),r[1].setComponents(l+a,u+h,f+g,E+_).normalize(),r[2].setComponents(l+o,u+m,f+p,E+y).normalize(),r[3].setComponents(l-o,u-m,f-p,E-y).normalize(),n)r[4].setComponents(c,d,v,S).normalize(),r[5].setComponents(l-c,u-d,f-v,E-S).normalize();else if(r[4].setComponents(l-c,u-d,f-v,E-S).normalize(),t===Xn)r[5].setComponents(l+c,u+d,f+v,E+S).normalize();else{if(t!==hr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(c,d,v,S).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){Ci.center.set(0,0,0);let t=Sm.distanceTo(e.center);return Ci.radius=.7071067811865476+t,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(oa.x=r.normal.x>0?e.max.x:e.min.x,oa.y=r.normal.y>0?e.max.y:e.min.y,oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},su=new Oe,wa=class i{constructor(){this.coordinateSystem=Xn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];su.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new Yn),n[r].setFromProjectionMatrix(su,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Yn),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Dl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},U0=new Oe,O0=new Ne(1,1,1),F0=new Yn,B0=new wa,z0=new tn,G0=new nn,k0=new w,V0=new w,H0=new w,W0=new Dl,X0=new Ke;var j0=new w,q0=new w,Y0=new Oe,Z0=new pi,J0=new nn,K0=new w,$0=new w;var Q0=new w,e_=new w;var t_=new Oe,n_=new pi,i_=new nn,r_=new w;var os=class extends Bt{constructor(e=[],t=301,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zn=class extends Bt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Jn=class extends Bt{constructor(e,t,n=1014,r,s,a,o=1003,c=1003,l,h=1026,m=1){if(h!==_i&&h!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:m},r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Aa=class extends Jn{constructor(e,t=1014,n=301,r,s,a=1003,o=1003,c,l=1026){let h={width:e,height:e,depth:1},m=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,c,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ls=class extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Mt=class i extends it{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],m=[],d=0,u=0;function g(p,v,f,_,y,S,E,M,P,O,L){let N=S/P,V=E/O,F=S/2,Z=E/2,H=M/2,k=P+1,q=O+1,W=0,ne=0,de=new w;for(let Se=0;Se<q;Se++){let ge=Se*V-Z;for(let _e=0;_e<k;_e++){let te=_e*N-F;de[p]=te*_,de[v]=ge*y,de[f]=H,l.push(de.x,de.y,de.z),de[p]=0,de[v]=0,de[f]=M>0?1:-1,h.push(de.x,de.y,de.z),m.push(_e/P),m.push(1-Se/O),W+=1}}for(let Se=0;Se<O;Se++)for(let ge=0;ge<P;ge++){let _e=d+ge+k*Se,te=d+ge+k*(Se+1),ce=d+(ge+1)+k*(Se+1),oe=d+(ge+1)+k*Se;c.push(_e,te,oe),c.push(te,ce,oe),ne+=6}o.addGroup(u,ne,L),u+=ne,d+=W}g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ca=class i extends it{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,m=Math.PI/2*e,d=t,u=2*m+d,g=2*n+s,p=r+1,v=new w,f=new w;for(let _=0;_<=g;_++){let y=0,S=0,E=0,M=0;if(_<=n){let L=_/n,N=L*Math.PI/2;S=-h-e*Math.cos(N),E=e*Math.sin(N),M=-e*Math.cos(N),y=L*m}else if(_<=n+s){let L=(_-n)/s;S=L*t-h,E=e,M=0,y=m+L*d}else{let L=(_-n-s)/n,N=L*Math.PI/2;S=h+e*Math.sin(N),E=e*Math.cos(N),M=e*Math.sin(N),y=m+d+L*m}let P=Math.max(0,Math.min(1,y/u)),O=0;_===0?O=.5/r:_===g&&(O=-.5/r);for(let L=0;L<=r;L++){let N=L/r,V=N*Math.PI*2,F=Math.sin(V),Z=Math.cos(V);f.x=-E*Z,f.y=S,f.z=E*F,o.push(f.x,f.y,f.z),v.set(-E*Z,M,E*F),v.normalize(),c.push(v.x,v.y,v.z),l.push(N+O,P)}if(_>0){let L=(_-1)*p;for(let N=0;N<r;N++){let V=L+N,F=L+N+1,Z=_*p+N,H=_*p+N+1;a.push(V,F,Z),a.push(F,H,Z)}}}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ra=class i extends it{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new w,h=new ee;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let m=0,d=3;m<=t;m++,d+=3){let u=n+m/t*r;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let m=1;m<=t;m++)s.push(m,m+1,0);this.setIndex(s),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vn=class i extends it{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],m=[],d=[],u=[],g=0,p=[],v=n/2,f=0;function _(y){let S=g,E=new ee,M=new w,P=0,O=y===!0?e:t,L=y===!0?1:-1;for(let V=1;V<=r;V++)m.push(0,v*L,0),d.push(0,L,0),u.push(.5,.5),g++;let N=g;for(let V=0;V<=r;V++){let F=V/r*c+o,Z=Math.cos(F),H=Math.sin(F);M.x=O*H,M.y=v*L,M.z=O*Z,m.push(M.x,M.y,M.z),d.push(0,L,0),E.x=.5*Z+.5,E.y=.5*H*L+.5,u.push(E.x,E.y),g++}for(let V=0;V<r;V++){let F=S+V,Z=N+V;y===!0?h.push(Z,Z+1,F):h.push(Z+1,Z,F),P+=3}l.addGroup(f,P,y===!0?1:2),f+=P}(function(){let y=new w,S=new w,E=0,M=(t-e)/n;for(let P=0;P<=s;P++){let O=[],L=P/s,N=L*(t-e)+e;for(let V=0;V<=r;V++){let F=V/r,Z=F*c+o,H=Math.sin(Z),k=Math.cos(Z);S.x=N*H,S.y=-L*n+v,S.z=N*k,m.push(S.x,S.y,S.z),y.set(H,M,k).normalize(),d.push(y.x,y.y,y.z),u.push(F,1-L),O.push(g++)}p.push(O)}for(let P=0;P<r;P++)for(let O=0;O<s;O++){let L=p[O][P],N=p[O+1][P],V=p[O+1][P+1],F=p[O][P+1];(e>0||O!==0)&&(h.push(L,N,F),E+=3),(t>0||O!==s-1)&&(h.push(N,V,F),E+=3)}l.addGroup(f,E,0),f+=E})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new we(m,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Pa=class i extends vn{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mi=class i extends it{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(u,g,p,v){let f=v+1,_=[];for(let y=0;y<=f;y++){_[y]=[];let S=u.clone().lerp(p,y/f),E=g.clone().lerp(p,y/f),M=f-y;for(let P=0;P<=M;P++)_[y][P]=P===0&&y===f?S:S.clone().lerp(E,P/M)}for(let y=0;y<f;y++)for(let S=0;S<2*(f-y)-1;S++){let E=Math.floor(S/2);S%2==0?(c(_[y][E+1]),c(_[y+1][E]),c(_[y][E])):(c(_[y][E+1]),c(_[y+1][E+1]),c(_[y+1][E]))}}function c(u){s.push(u.x,u.y,u.z)}function l(u,g){let p=3*u;g.x=e[p+0],g.y=e[p+1],g.z=e[p+2]}function h(u,g,p,v){v<0&&u.x===1&&(a[g]=u.x-1),p.x===0&&p.z===0&&(a[g]=v/2/Math.PI+.5)}function m(u){return Math.atan2(u.z,-u.x)}function d(u){return Math.atan2(-u.y,Math.sqrt(u.x*u.x+u.z*u.z))}(function(u){let g=new w,p=new w,v=new w;for(let f=0;f<t.length;f+=3)l(t[f+0],g),l(t[f+1],p),l(t[f+2],v),o(g,p,v,u)})(r),(function(u){let g=new w;for(let p=0;p<s.length;p+=3)g.x=s[p+0],g.y=s[p+1],g.z=s[p+2],g.normalize().multiplyScalar(u),s[p+0]=g.x,s[p+1]=g.y,s[p+2]=g.z})(n),(function(){let u=new w;for(let g=0;g<s.length;g+=3){u.x=s[g+0],u.y=s[g+1],u.z=s[g+2];let p=m(u)/2/Math.PI+.5,v=d(u)/Math.PI+.5;a.push(p,1-v)}(function(){let g=new w,p=new w,v=new w,f=new w,_=new ee,y=new ee,S=new ee;for(let E=0,M=0;E<s.length;E+=9,M+=6){g.set(s[E+0],s[E+1],s[E+2]),p.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),_.set(a[M+0],a[M+1]),y.set(a[M+2],a[M+3]),S.set(a[M+4],a[M+5]),f.copy(g).add(p).add(v).divideScalar(3);let P=m(f);h(_,M+0,g,P),h(y,M+2,p,P),h(S,M+4,v,P)}})(),(function(){for(let g=0;g<a.length;g+=6){let p=a[g+0],v=a[g+2],f=a[g+4],_=Math.max(p,v,f),y=Math.min(p,v,f);_>.9&&y<.1&&(p<.2&&(a[g+0]+=1),v<.2&&(a[g+2]+=1),f<.2&&(a[g+4]+=1))}})()})(),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(s.slice(),3)),this.setAttribute("uv",new we(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Ia=class i extends mi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},la=new w,ca=new w,bl=new w,ha=new Cn,La=class extends it{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(_a*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],m=new Array(3),d={},u=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:p,b:v,c:f}=ha;if(p.fromBufferAttribute(o,l[0]),v.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),ha.getNormal(bl),m[0]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,m[1]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,m[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,m[0]!==m[1]&&m[1]!==m[2]&&m[2]!==m[0])for(let _=0;_<3;_++){let y=(_+1)%3,S=m[_],E=m[y],M=ha[h[_]],P=ha[h[y]],O=`${S}_${E}`,L=`${E}_${S}`;L in d&&d[L]?(bl.dot(d[L].normal)<=s&&(u.push(M.x,M.y,M.z),u.push(P.x,P.y,P.z)),d[L]=null):O in d||(d[O]={index0:l[_],index1:l[y],normal:bl.clone()})}}for(let g in d)if(d[g]){let{index0:p,index1:v}=d[g];la.fromBufferAttribute(o,p),ca.fromBufferAttribute(o,v),u.push(la.x,la.y,la.z),u.push(ca.x,ca.y,ca.z)}this.setAttribute("position",new we(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},jt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Te("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(r=Math.floor(c+(l-c)/2),o=n[r]-a,o<0)c=r+1;else{if(!(o>0)){l=r;break}l=r-1}if(r=l,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new ee:new w);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new w,r=[],s=[],a=[],o=new w,c=new Oe;for(let u=0;u<=e;u++){let g=u/e;r[u]=this.getTangentAt(g,new w)}s[0]=new w,a[0]=new w;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),m=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),m<=l&&(l=m,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(r[u-1],r[u]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ze(r[u-1].dot(r[u]),-1,1));s[u].applyMatrix4(c.makeRotationAxis(o,g))}a[u].crossVectors(r[u],s[u])}if(t===!0){let u=Math.acos(ze(s[0].dot(s[e]),-1,1));u/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(u=-u);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],u*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fr=class extends jt{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ee){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*m+this.aX,l=d*m+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Da=class extends fr{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Hc(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,m){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+m)+(c-o)/m;d*=h,u*=h,r(a,o,d,u)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var au=new w,ou=new w,Tl=new Hc,El=new Hc,wl=new Hc,Na=class extends jt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new w){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=r[(l-1)%s]:(ou.subVectors(r[0],r[1]).add(r[0]),o=ou);let m=r[l%s],d=r[(l+1)%s];if(this.closed||l+2<s?c=r[(l+2)%s]:(au.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=au),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(o.distanceToSquared(m),u),p=Math.pow(m.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(c),u);p<1e-4&&(p=1),g<1e-4&&(g=p),v<1e-4&&(v=p),Tl.initNonuniformCatmullRom(o.x,m.x,d.x,c.x,g,p,v),El.initNonuniformCatmullRom(o.y,m.y,d.y,c.y,g,p,v),wl.initNonuniformCatmullRom(o.z,m.z,d.z,c.z,g,p,v)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(o.x,m.x,d.x,c.x,this.tension),El.initCatmullRom(o.y,m.y,d.y,c.y,this.tension),wl.initCatmullRom(o.z,m.z,d.z,c.z,this.tension));return n.set(Tl.calc(h),El.calc(h),wl.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new w().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function lu(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function Xr(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function jr(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var cs=class extends jt{constructor(e=new ee,t=new ee,n=new ee,r=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ee){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(jr(e,r.x,s.x,a.x,o.x),jr(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ua=class extends jt{constructor(e=new w,t=new w,n=new w,r=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new w){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(jr(e,r.x,s.x,a.x,o.x),jr(e,r.y,s.y,a.y,o.y),jr(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hs=class extends jt{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends jt{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},us=class extends jt{constructor(e=new ee,t=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Xr(e,r.x,s.x,a.x),Xr(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ds=class extends jt{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Xr(e,r.x,s.x,a.x),Xr(e,r.y,s.y,a.y),Xr(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ps=class extends jt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],m=r[a>r.length-3?r.length-1:a+2];return n.set(lu(o,c.x,l.x,h.x,m.x),lu(o,c.y,l.y,h.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ee().fromArray(r))}return this}},Fa=Object.freeze({__proto__:null,ArcCurve:Da,CatmullRomCurve3:Na,CubicBezierCurve:cs,CubicBezierCurve3:Ua,EllipseCurve:fr,LineCurve:hs,LineCurve3:Oa,QuadraticBezierCurve:us,QuadraticBezierCurve3:ds,SplineCurve:ps}),Ba=class extends jt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Fa[r.type]().fromJSON(r))}return this}},ms=class extends Ba{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new hs(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new us(this.currentPoint.clone(),new ee(e,t),new ee(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new cs(this.currentPoint.clone(),new ee(e,t),new ee(n,r),new ee(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ps(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){let l=new fr(e,t,n,r,s,a,o,c);if(this.curves.length>0){let m=l.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fs=class extends ms{constructor(e){super(e),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new ms().fromJSON(r))}return this}};function bm(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=cu(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=(function(h,m,d,u){let g=[];for(let p=0,v=m.length;p<v;p++){let f=cu(h,m[p]*u,p<v-1?m[p+1]*u:h.length,u,!1);f===f.next&&(f.steiner=!0),g.push(Im(f))}g.sort(Cm);for(let p=0;p<g.length;p++)d=Rm(g[p],d);return d})(i,e,s,t)),i.length>80*t){o=i[0],c=i[1];let h=o,m=c;for(let d=t;d<r;d+=t){let u=i[d],g=i[d+1];u<o&&(o=u),g<c&&(c=g),u>h&&(h=u),g>m&&(m=g)}l=Math.max(h-o,m-c),l=l!==0?32767/l:0}return gs(s,a,t,o,c,l,0),a}function cu(i,e,t,n,r){let s;if(r===(function(a,o,c,l){let h=0;for(let m=o,d=c-l;m<c;m+=l)h+=(a[d]-a[m])*(a[m+1]+a[d+1]),d=m;return h})(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=hu(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=hu(a/n|0,i[a],i[a+1],s);return s&&gr(s,s.next)&&(vs(s),s=s.next),s}function Di(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!gr(n,n.next)&&lt(n.prev,n,n.next)!==0)n=n.next;else{if(vs(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function gs(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(c,l,h,m){let d=c;do d.z===0&&(d.z=Nl(d.x,d.y,l,h,m)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(u){let g,p=1;do{let v,f=u;u=null;let _=null;for(g=0;f;){g++;let y=f,S=0;for(let M=0;M<p&&(S++,y=y.nextZ,y);M++);let E=p;for(;S>0||E>0&&y;)S!==0&&(E===0||!y||f.z<=y.z)?(v=f,f=f.nextZ,S--):(v=y,y=y.nextZ,E--),_?_.nextZ=v:u=v,v.prevZ=_,_=v;f=y}_.nextZ=null,p*=2}while(g>1)})(d)})(i,n,r,s);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(s?Em(i,n,r,s):Tm(i))e.push(c.i,i.i,l.i),vs(i),i=l.next,o=l.next;else if((i=l)===o){a?a===1?gs(i=wm(Di(i),e),e,t,n,r,s,2):a===2&&Am(i,e,t,n,r,s):gs(Di(i),e,t,n,r,s,1);break}}}function Tm(i){let e=i.prev,t=i,n=i.next;if(lt(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(r,s,a),m=Math.min(o,c,l),d=Math.max(r,s,a),u=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=m&&g.y<=u&&Wr(r,o,s,c,a,l,g.x,g.y)&&lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Em(i,e,t,n){let r=i.prev,s=i,a=i.next;if(lt(r,s,a)>=0)return!1;let o=r.x,c=s.x,l=a.x,h=r.y,m=s.y,d=a.y,u=Math.min(o,c,l),g=Math.min(h,m,d),p=Math.max(o,c,l),v=Math.max(h,m,d),f=Nl(u,g,e,t,n),_=Nl(p,v,e,t,n),y=i.prevZ,S=i.nextZ;for(;y&&y.z>=f&&S&&S.z<=_;){if(y.x>=u&&y.x<=p&&y.y>=g&&y.y<=v&&y!==r&&y!==a&&Wr(o,h,c,m,l,d,y.x,y.y)&&lt(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=u&&S.x<=p&&S.y>=g&&S.y<=v&&S!==r&&S!==a&&Wr(o,h,c,m,l,d,S.x,S.y)&&lt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=f;){if(y.x>=u&&y.x<=p&&y.y>=g&&y.y<=v&&y!==r&&y!==a&&Wr(o,h,c,m,l,d,y.x,y.y)&&lt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=_;){if(S.x>=u&&S.x<=p&&S.y>=g&&S.y<=v&&S!==r&&S!==a&&Wr(o,h,c,m,l,d,S.x,S.y)&&lt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function wm(i,e){let t=i;do{let n=t.prev,r=t.next.next;!gr(n,r)&&hd(n,t,t.next,r)&&_s(n,r)&&_s(r,n)&&(e.push(n.i,t.i,r.i),vs(t),vs(t.next),t=i=r),t=t.next}while(t!==i);return Di(t)}function Am(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Lm(a,o)){let c=ud(a,o);return a=Di(a,a.next),c=Di(c,c.next),gs(a,e,t,n,r,s,0),void gs(c,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function Cm(i,e){let t=i.x-e.x;return t===0&&(t=i.y-e.y,t===0)&&(t=(i.next.y-i.y)/(i.next.x-i.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Rm(i,e){let t=(function(r,s){let a=s,o=r.x,c=r.y,l,h=-1/0;if(gr(r,a))return a;do{if(gr(r,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let p=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(p<=o&&p>h&&(h=p,l=a.x<a.next.x?a:a.next,p===o))return l}a=a.next}while(a!==s);if(!l)return null;let m=l,d=l.x,u=l.y,g=1/0;a=l;do{if(o>=a.x&&a.x>=d&&o!==a.x&&cd(c<u?o:h,c,d,u,c<u?h:o,c,a.x,a.y)){let p=Math.abs(c-a.y)/(o-a.x);_s(a,r)&&(p<g||p===g&&(a.x>l.x||a.x===l.x&&Pm(l,a)))&&(l=a,g=p)}a=a.next}while(a!==m);return l})(i,e);if(!t)return e;let n=ud(t,i);return Di(n,n.next),Di(t,t.next)}function Pm(i,e){return lt(i.prev,i,e.prev)<0&&lt(e.next,i,i.next)<0}function Nl(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Im(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function cd(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Wr(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&cd(i,e,t,n,r,s,a,o)}function Lm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&hd(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(_s(i,e)&&_s(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(lt(i.prev,i,e.prev)||lt(i,e.prev,e))||gr(i,e)&&lt(i.prev,i,i.next)>0&&lt(e.prev,e,e.next)>0)}function lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function gr(i,e){return i.x===e.x&&i.y===e.y}function hd(i,e,t,n){let r=da(lt(i,e,t)),s=da(lt(i,e,n)),a=da(lt(t,n,i)),o=da(lt(t,n,e));return r!==s&&a!==o||!(r!==0||!ua(i,t,e))||!(s!==0||!ua(i,n,e))||!(a!==0||!ua(t,i,n))||!(o!==0||!ua(t,e,n))}function ua(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function da(i){return i>0?1:i<0?-1:0}function _s(i,e){return lt(i.prev,i,i.next)<0?lt(i,e,i.next)>=0&&lt(i,i.prev,e)>=0:lt(i,e,i.prev)<0||lt(i,i.next,e)<0}function ud(i,e){let t=Ul(i.i,i.x,i.y),n=Ul(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function hu(i,e,t,n){let r=Ul(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ul(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Ol=class{static triangulate(e,t,n=2){return bm(e,t,n)}},Rn=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];uu(e),du(n,e);let a=e.length;t.forEach(uu);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,du(n,t[c]);let o=Ol.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function uu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function du(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var za=class i extends it{constructor(e=new fs([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,m=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:u-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Dm,y,S,E,M,P,O=!1;if(f){y=f.getSpacedPoints(h),O=!0,d=!1;let C=!!f.isCatmullRomCurve3&&f.closed;S=f.computeFrenetFrames(h,C),E=new w,M=new w,P=new w}d||(v=0,u=0,g=0,p=0);let L=o.extractPoints(l),N=L.shape,V=L.holes;if(!Rn.isClockWise(N)){N=N.reverse();for(let C=0,U=V.length;C<U;C++){let x=V[C];Rn.isClockWise(x)&&(V[C]=x.reverse())}}function F(C){let U=10000000000000001e-36,x=C[0];for(let D=1;D<=C.length;D++){let I=D%C.length,A=C[I],G=A.x-x.x,X=A.y-x.y,Y=G*G+X*X,re=Math.max(Math.abs(A.x),Math.abs(A.y),Math.abs(x.x),Math.abs(x.y));Y<=U*re*re?(C.splice(I,1),D--):x=A}}F(N),V.forEach(F);let Z=V.length,H=N;for(let C=0;C<Z;C++){let U=V[C];N=N.concat(U)}function k(C,U,x){return U||be("ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(U,x)}let q=N.length;function W(C,U,x){let D,I,A,G=C.x-U.x,X=C.y-U.y,Y=x.x-C.x,re=x.y-C.y,ve=G*G+X*X,xe=G*re-X*Y;if(Math.abs(xe)>Number.EPSILON){let he=Math.sqrt(ve),Ae=Math.sqrt(Y*Y+re*re),Q=U.x-X/he,se=U.y+G/he,ie=((x.x-re/Ae-Q)*re-(x.y+Y/Ae-se)*Y)/(G*re-X*Y);D=Q+G*ie-C.x,I=se+X*ie-C.y;let pe=D*D+I*I;if(pe<=2)return new ee(D,I);A=Math.sqrt(pe/2)}else{let he=!1;G>Number.EPSILON?Y>Number.EPSILON&&(he=!0):G<-Number.EPSILON?Y<-Number.EPSILON&&(he=!0):Math.sign(X)===Math.sign(re)&&(he=!0),he?(D=-X,I=G,A=Math.sqrt(ve)):(D=G,I=X,A=Math.sqrt(ve/2))}return new ee(D/A,I/A)}let ne=[];for(let C=0,U=H.length,x=U-1,D=C+1;C<U;C++,x++,D++)x===U&&(x=0),D===U&&(D=0),ne[C]=W(H[C],H[x],H[D]);let de=[],Se,ge,_e=ne.concat();for(let C=0,U=Z;C<U;C++){let x=V[C];Se=[];for(let D=0,I=x.length,A=I-1,G=D+1;D<I;D++,A++,G++)A===I&&(A=0),G===I&&(G=0),Se[D]=W(x[D],x[A],x[G]);de.push(Se),_e=_e.concat(Se)}if(v===0)ge=Rn.triangulateShape(H,V);else{let C=[],U=[];for(let x=0;x<v;x++){let D=x/v,I=u*Math.cos(D*Math.PI/2),A=g*Math.sin(D*Math.PI/2)+p;for(let G=0,X=H.length;G<X;G++){let Y=k(H[G],ne[G],A);me(Y.x,Y.y,-I),D===0&&C.push(Y)}for(let G=0,X=Z;G<X;G++){let Y=V[G];Se=de[G];let re=[];for(let ve=0,xe=Y.length;ve<xe;ve++){let he=k(Y[ve],Se[ve],A);me(he.x,he.y,-I),D===0&&re.push(he)}D===0&&U.push(re)}}ge=Rn.triangulateShape(C,U)}let te=ge.length,ce=g+p;for(let C=0;C<q;C++){let U=d?k(N[C],_e[C],ce):N[C];O?(M.copy(S.normals[0]).multiplyScalar(U.x),E.copy(S.binormals[0]).multiplyScalar(U.y),P.copy(y[0]).add(M).add(E),me(P.x,P.y,P.z)):me(U.x,U.y,0)}for(let C=1;C<=h;C++)for(let U=0;U<q;U++){let x=d?k(N[U],_e[U],ce):N[U];O?(M.copy(S.normals[C]).multiplyScalar(x.x),E.copy(S.binormals[C]).multiplyScalar(x.y),P.copy(y[C]).add(M).add(E),me(P.x,P.y,P.z)):me(x.x,x.y,m/h*C)}for(let C=v-1;C>=0;C--){let U=C/v,x=u*Math.cos(U*Math.PI/2),D=g*Math.sin(U*Math.PI/2)+p;for(let I=0,A=H.length;I<A;I++){let G=k(H[I],ne[I],D);me(G.x,G.y,m+x)}for(let I=0,A=V.length;I<A;I++){let G=V[I];Se=de[I];for(let X=0,Y=G.length;X<Y;X++){let re=k(G[X],Se[X],D);O?me(re.x,re.y+y[h-1].y,y[h-1].x+x):me(re.x,re.y,m+x)}}}function oe(C,U){let x=C.length;for(;--x>=0;){let D=x,I=x-1;I<0&&(I=C.length-1);for(let A=0,G=h+2*v;A<G;A++){let X=q*A,Y=q*(A+1);$(U+D+X,U+I+X,U+I+Y,U+D+Y)}}}function me(C,U,x){c.push(C),c.push(U),c.push(x)}function Ue(C,U,x){R(C),R(U),R(x);let D=r.length/3,I=_.generateTopUV(n,r,D-3,D-2,D-1);b(I[0]),b(I[1]),b(I[2])}function $(C,U,x,D){R(C),R(U),R(D),R(U),R(x),R(D);let I=r.length/3,A=_.generateSideWallUV(n,r,I-6,I-3,I-2,I-1);b(A[0]),b(A[1]),b(A[3]),b(A[1]),b(A[2]),b(A[3])}function R(C){r.push(c[3*C+0]),r.push(c[3*C+1]),r.push(c[3*C+2])}function b(C){s.push(C.x),s.push(C.y)}(function(){let C=r.length/3;if(d){let U=0,x=q*U;for(let D=0;D<te;D++){let I=ge[D];Ue(I[2]+x,I[1]+x,I[0]+x)}U=h+2*v,x=q*U;for(let D=0;D<te;D++){let I=ge[D];Ue(I[0]+x,I[1]+x,I[2]+x)}}else{for(let U=0;U<te;U++){let x=ge[U];Ue(x[2],x[1],x[0])}for(let U=0;U<te;U++){let x=ge[U];Ue(x[0]+q*h,x[1]+q*h,x[2]+q*h)}}n.addGroup(C,r.length/3-C,0)})(),(function(){let C=r.length/3,U=0;oe(H,U),U+=H.length;for(let x=0,D=V.length;x<D;x++){let I=V[x];oe(I,U),U+=I.length}n.addGroup(C,r.length/3-C,1)})()}this.setAttribute("position",new we(r,3)),this.setAttribute("uv",new we(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Fa[r.type]().fromJSON(r)),new i(n,e.options)}},Dm={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*r],h=e[3*r+1];return[new ee(s,a),new ee(o,c),new ee(l,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],m=e[3*n+2],d=e[3*r],u=e[3*r+1],g=e[3*r+2],p=e[3*s],v=e[3*s+1],f=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new ee(a,1-c),new ee(l,1-m),new ee(d,1-g),new ee(p,1-f)]:[new ee(o,1-c),new ee(h,1-m),new ee(u,1-g),new ee(v,1-f)]}},Ga=class i extends mi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ka=class i extends it{constructor(e=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ze(r,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,m=new w,d=new ee,u=new w,g=new w,p=new w,v=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:v=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,u.x=1*f,u.y=-v,u.z=0*f,p.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(p.x,p.y,p.z);break;default:v=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,u.x=1*f,u.y=-v,u.z=0*f,g.copy(u),u.x+=p.x,u.y+=p.y,u.z+=p.z,u.normalize(),c.push(u.x,u.y,u.z),p.copy(g)}for(let _=0;_<=t;_++){let y=n+_*h*r,S=Math.sin(y),E=Math.cos(y);for(let M=0;M<=e.length-1;M++){m.x=e[M].x*S,m.y=e[M].y,m.z=e[M].x*E,a.push(m.x,m.y,m.z),d.x=_/t,d.y=M/(e.length-1),o.push(d.x,d.y);let P=c[3*M+0]*S,O=c[3*M+1],L=c[3*M+0]*E;l.push(P,O,L)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let S=y+_*e.length,E=S,M=S+e.length,P=S+e.length+1,O=S+1;s.push(E,M,O),s.push(P,O,M)}this.setIndex(s),this.setAttribute("position",new we(a,3)),this.setAttribute("uv",new we(o,2)),this.setAttribute("normal",new we(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},_r=class i extends mi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Kn=class i extends it{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,m=e/o,d=t/c,u=[],g=[],p=[],v=[];for(let f=0;f<h;f++){let _=f*d-a;for(let y=0;y<l;y++){let S=y*m-s;g.push(S,-_,0),p.push(0,0,1),v.push(y/o),v.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<o;_++){let y=_+l*f,S=_+l*(f+1),E=_+1+l*(f+1),M=_+1+l*f;u.push(y,S,M),u.push(S,E,M)}this.setIndex(u),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(p,3)),this.setAttribute("uv",new we(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Va=class i extends it{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],m=e,d=(t-e)/(r=Math.max(1,r)),u=new w,g=new ee;for(let p=0;p<=r;p++){for(let v=0;v<=n;v++){let f=s+v/n*a;u.x=m*Math.cos(f),u.y=m*Math.sin(f),c.push(u.x,u.y,u.z),l.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,h.push(g.x,g.y)}m+=d}for(let p=0;p<r;p++){let v=p*(n+1);for(let f=0;f<n;f++){let _=f+v,y=_,S=_+n+1,E=_+n+2,M=_+1;o.push(y,S,M),o.push(S,E,M)}}this.setIndex(o),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ha=class i extends it{constructor(e=new fs([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let m=r.length/3,d=h.extractPoints(t),u=d.shape,g=d.holes;Rn.isClockWise(u)===!1&&(u=u.reverse());for(let v=0,f=g.length;v<f;v++){let _=g[v];Rn.isClockWise(_)===!0&&(g[v]=_.reverse())}let p=Rn.triangulateShape(u,g);for(let v=0,f=g.length;v<f;v++){let _=g[v];u=u.concat(_)}for(let v=0,f=u.length;v<f;v++){let _=u[v];r.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let v=0,f=p.length;v<f;v++){let _=p[v],y=_[0]+m,S=_[1]+m,E=_[2]+m;n.push(y,S,E),c+=3}}this.setIndex(n),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(s,3)),this.setAttribute("uv",new we(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},fi=class i extends it{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],m=new w,d=new w,u=[],g=[],p=[],v=[];for(let f=0;f<=n;f++){let _=[],y=f/n,S=a+y*o,E=e*Math.cos(S),M=Math.sqrt(e*e-E*E),P=0;f===0&&a===0?P=.5/t:f===n&&c===Math.PI&&(P=-.5/t);for(let O=0;O<=t;O++){let L=O/t,N=r+L*s;m.x=-M*Math.cos(N),m.y=E,m.z=M*Math.sin(N),g.push(m.x,m.y,m.z),d.copy(m).normalize(),p.push(d.x,d.y,d.z),v.push(L+P,1-y),_.push(l++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){let y=h[f][_+1],S=h[f][_],E=h[f+1][_],M=h[f+1][_+1];(f!==0||a>0)&&u.push(y,S,M),(f!==n-1||c<Math.PI)&&u.push(S,E,M)}this.setIndex(u),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(p,3)),this.setAttribute("uv",new we(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Wa=class i extends mi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Xa=class i extends it{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let c=[],l=[],h=[],m=[],d=new w,u=new w,g=new w;for(let p=0;p<=n;p++){let v=a+p/n*o;for(let f=0;f<=r;f++){let _=f/r*s;u.x=(e+t*Math.cos(v))*Math.cos(_),u.y=(e+t*Math.cos(v))*Math.sin(_),u.z=t*Math.sin(v),l.push(u.x,u.y,u.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(u,d).normalize(),h.push(g.x,g.y,g.z),m.push(f/r),m.push(p/n)}}for(let p=1;p<=n;p++)for(let v=1;v<=r;v++){let f=(r+1)*p+v-1,_=(r+1)*(p-1)+v-1,y=(r+1)*(p-1)+v,S=(r+1)*p+v;c.push(f,_,S),c.push(_,y,S)}this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ja=class i extends it{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],c=[],l=[],h=[],m=new w,d=new w,u=new w,g=new w,p=new w,v=new w,f=new w;for(let y=0;y<=n;++y){let S=y/n*s*Math.PI*2;_(S,s,a,e,u),_(S+.01,s,a,e,g),v.subVectors(g,u),f.addVectors(g,u),p.crossVectors(v,f),f.crossVectors(p,v),p.normalize(),f.normalize();for(let E=0;E<=r;++E){let M=E/r*Math.PI*2,P=-t*Math.cos(M),O=t*Math.sin(M);m.x=u.x+(P*f.x+O*p.x),m.y=u.y+(P*f.y+O*p.y),m.z=u.z+(P*f.z+O*p.z),c.push(m.x,m.y,m.z),d.subVectors(m,u).normalize(),l.push(d.x,d.y,d.z),h.push(y/n),h.push(E/r)}}for(let y=1;y<=n;y++)for(let S=1;S<=r;S++){let E=(r+1)*(y-1)+(S-1),M=(r+1)*y+(S-1),P=(r+1)*y+S,O=(r+1)*(y-1)+S;o.push(E,M,O),o.push(M,P,O)}function _(y,S,E,M,P){let O=Math.cos(y),L=Math.sin(y),N=E/S*y,V=Math.cos(N);P.x=M*(2+V)*.5*O,P.y=M*(2+V)*L*.5,P.z=M*Math.sin(N)*.5}this.setIndex(o),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},qa=class i extends it{constructor(e=new ds(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,c=new w,l=new ee,h=new w,m=[],d=[],u=[],g=[];function p(v){h=e.getPointAt(v/t,h);let f=a.normals[v],_=a.binormals[v];for(let y=0;y<=r;y++){let S=y/r*Math.PI*2,E=Math.sin(S),M=-Math.cos(S);c.x=M*f.x+E*_.x,c.y=M*f.y+E*_.y,c.z=M*f.z+E*_.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,m.push(o.x,o.y,o.z)}}(function(){for(let v=0;v<t;v++)p(v);p(s===!1?t:0),(function(){for(let v=0;v<=t;v++)for(let f=0;f<=r;f++)l.x=v/t,l.y=f/r,u.push(l.x,l.y)})(),(function(){for(let v=1;v<=t;v++)for(let f=1;f<=r;f++){let _=(r+1)*(v-1)+(f-1),y=(r+1)*v+(f-1),S=(r+1)*v+f,E=(r+1)*(v-1)+f;g.push(_,y,E),g.push(y,S,E)}})()})(),this.setIndex(g),this.setAttribute("position",new we(m,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Fa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Ya=class extends it{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new w,s=new w;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let m=c[l],d=m.start;for(let u=d,g=d+m.count;u<g;u+=3)for(let p=0;p<3;p++){let v=o.getX(u+p),f=o.getX(u+(p+1)%3);r.fromBufferAttribute(a,v),s.fromBufferAttribute(a,f),pu(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,m=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,m),pu(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new we(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function pu(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var s_=Object.freeze({__proto__:null,BoxGeometry:Mt,CapsuleGeometry:Ca,CircleGeometry:Ra,ConeGeometry:Pa,CylinderGeometry:vn,DodecahedronGeometry:Ia,EdgesGeometry:La,ExtrudeGeometry:za,IcosahedronGeometry:Ga,LatheGeometry:ka,OctahedronGeometry:_r,PlaneGeometry:Kn,PolyhedronGeometry:mi,RingGeometry:Va,ShapeGeometry:Ha,SphereGeometry:fi,TetrahedronGeometry:Wa,TorusGeometry:Xa,TorusKnotGeometry:ja,TubeGeometry:qa,WireframeGeometry:Ya});function Gi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(mu(r))r.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(mu(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Ut(i){let e={};for(let t=0;t<i.length;t++){let n=Gi(i[t]);for(let r in n)e[r]=n[r]}return e}function mu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Wc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}var dd={clone:Gi,merge:Ut},qt=class extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(r.value);break;case"v2":this.uniforms[n].value=new ee().fromArray(r.value);break;case"v3":this.uniforms[n].value=new w().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Qe().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Oe().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Za=class extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var It=class extends qn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ja=class extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ka=class extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function pa(i,e){return i&&i.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i):i}var gi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$a=class extends gi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Il:s=e,o=2*t-n;break;case Ll:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Il:a=e,c=2*n-t;break;case Ll:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,m=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-t)/(r-t),p=g*g,v=p*g,f=-d*v+2*d*p-d*g,_=(1+d)*v+(-1.5-2*d)*p+(-.5+d)*g+1,y=(-1-u)*v+(1.5+u)*p+.5*g,S=u*v-u*p;for(let E=0;E!==o;++E)s[E]=f*a[h+E]+_*a[l+E]+y*a[c+E]+S*a[m+E];return s}},Qa=class extends gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(r-t),m=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*m+a[c+d]*h;return s}},eo=class extends gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},to=class extends gi{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,m=this.outTangents;if(!h||!m){let g=(n-t)/(r-t),p=1-g;for(let v=0;v!==o;++v)s[v]=a[l+v]*p+a[c+v]*g;return s}let d=2*o,u=e-1;for(let g=0;g!==o;++g){let p=a[l+g],v=a[c+g],f=u*d+2*g,_=m[f],y=m[f+1],S=e*d+2*g,E=h[S],M=h[S+1],P,O,L,N,V,F=(n-t)/(r-t);for(let Z=0;Z<8;Z++){P=F*F,O=P*F,L=1-F,N=L*L,V=N*L;let H=V*t+3*N*F*_+3*L*P*E+O*r-n;if(Math.abs(H)<1e-10)break;let k=3*N*(_-t)+6*L*F*(E-_)+3*P*(r-E);if(Math.abs(k)<1e-10)break;F-=H/k,F=Math.max(0,Math.min(1,F))}s[g]=V*p+3*N*F*y+3*L*P*M+O*v}return s}},Wt=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pa(t,this.TimeBufferType),this.values=pa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pa(e.times,Array),values:pa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new to(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case xa:t=this.InterpolantFactoryMethodLinear;break;case ga:t=this.InterpolantFactoryMethodSmooth;break;case Rl:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return Te("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return xa;case this.InterpolantFactoryMethodSmooth:return ga;case this.InterpolantFactoryMethodBezier:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(be("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(be("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){be("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){be("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&nm(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){be("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ga,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*n,m=h-n,d=h+n;for(let u=0;u!==n;++u){let g=t[h+u];if(g!==t[m+u]||g!==t[d+u]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,m=a*n;for(let d=0;d!==n;++d)t[m+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Wt.prototype.ValueTypeName="",Wt.prototype.TimeBufferType=Float32Array,Wt.prototype.ValueBufferType=Float32Array,Wt.prototype.DefaultInterpolation=xa;var hi=class extends Wt{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="bool",hi.prototype.ValueBufferType=Array,hi.prototype.DefaultInterpolation=qr,hi.prototype.InterpolantFactoryMethodLinear=void 0,hi.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends Wt{constructor(e,t,n,r){super(e,t,n,r)}};no.prototype.ValueTypeName="color";var io=class extends Wt{constructor(e,t,n,r){super(e,t,n,r)}};io.prototype.ValueTypeName="number";var ro=class extends gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)en.slerpFlat(s,0,a,l-o,a,l,c);return s}},xs=class extends Wt{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ro(this.times,this.values,this.getValueSize(),e)}};xs.prototype.ValueTypeName="quaternion",xs.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends Wt{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="string",ui.prototype.ValueBufferType=Array,ui.prototype.DefaultInterpolation=qr,ui.prototype.InterpolantFactoryMethodLinear=void 0,ui.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends Wt{constructor(e,t,n,r){super(e,t,n,r)}};so.prototype.ValueTypeName="vector";var ao=class{constructor(e,t,n){let r=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){c++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,c),o===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,m){return l.push(h,m),this},this.removeHandler=function(h){let m=l.indexOf(h);return m!==-1&&l.splice(m,2),this},this.getHandler=function(h){for(let m=0,d=l.length;m<d;m+=2){let u=l[m],g=l[m+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pd=new ao,oo=class{constructor(e){this.manager=e!==void 0?e:pd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ys=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ms=class extends ys{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Al=new Oe,fu=new w,gu=new w,Fl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yn,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fu.setFromMatrixPosition(e.matrixWorld),t.position.copy(fu),gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gu),t.updateMatrixWorld(),Al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===hr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ma=new w,fa=new en,En=new w,vr=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ma,fa,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,fa,En.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ma,fa,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,fa,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ci=new w,_u=new ee,vu=new ee,Nt=class extends vr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Ma*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*_a*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ma*Math.atan(Math.tan(.5*_a*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,_u,vu),t.subVectors(vu,_u)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*_a*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var xr=class extends vr{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bl=class extends Fl{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yr=class extends ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Bl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var a_=new Oe,o_=new Oe,l_=new Oe;var lr=-90,lo=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Nt(lr,1,e,t);r.layers=this.layers,this.add(r);let s=new Nt(lr,1,e,t);s.layers=this.layers,this.add(s);let a=new Nt(lr,1,e,t);a.layers=this.layers,this.add(a);let o=new Nt(lr,1,e,t);o.layers=this.layers,this.add(o);let c=new Nt(lr,1,e,t);c.layers=this.layers,this.add(c);let l=new Nt(lr,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==hr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,m=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let v=!1;v=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(m,d,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},co=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var c_=new w,h_=new en,u_=new w,d_=new w,p_=new w;var m_=new w,f_=new en,g_=new w,__=new w;var Xc="\\[\\]\\.:\\/",Nm=new RegExp("["+Xc+"]","g"),Cl="[^"+Xc+"]",Um="[^"+Xc.replace("\\.","")+"]",Om=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Cl)+/(WCOD+)?/.source.replace("WCOD",Um)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cl)+"$"),Fm=["material","materials","bones","map"],nt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nm,"")}static parseTrackName(e){let t=Om.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Fm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Te("PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void be("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void be("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void be("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[r];if(a===void 0)return void be("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nt.Composite=class{constructor(i,e,t){let n=t||nt.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray],nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var v_=new Float32Array(1);var xu=new Oe,Ss=class{constructor(e,t,n=0,r=1/0){this.ray=new pi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):be("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xu),this}intersectObject(e,t=!0,n=[]){return zl(e,this,n,t),n.sort(yu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)zl(e[r],this,n,t);return n.sort(yu),n}};function yu(i,e){return i.distance-e.distance}function zl(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)zl(s[a],e,t,!0)}}var Gl=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}},x_=new ee;var y_=new w,M_=new w,S_=new w,b_=new w,T_=new w,E_=new w,w_=new w;var A_=new w;var C_=new w,R_=new Oe,P_=new Oe;var I_=new w,L_=new Ne,D_=new Ne;var N_=new w,U_=new w,O_=new w;var F_=new w,B_=new vr;var z_=new tn;var G_=new w;function jc(i,e,t,n){let r=(function(s){switch(s){case Yt:case sc:return{byteLength:1,components:1};case Er:case ac:case Dn:return{byteLength:2,components:1};case go:case _o:return{byteLength:2,components:4};case Qn:case fo:case sn:return{byteLength:4,components:1};case oc:case lc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)})(n);switch(t){case 1021:return i*e;case vo:case xo:return i*e/r.components*r.byteLength;case 1030:case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case yn:case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}})),typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Od(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function zm(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=i.createBuffer(),m;if(i.bindBuffer(a,h),i.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)m=i.HALF_FLOAT;else if(o instanceof Uint16Array)m=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)m=i.SHORT;else if(o instanceof Uint32Array)m=i.UNSIGNED_INT;else if(o instanceof Int32Array)m=i.INT;else if(o instanceof Int8Array)m=i.BYTE;else if(o instanceof Uint8Array)m=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);m=i.UNSIGNED_BYTE}return{buffer:h,type:m,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(i.bindBuffer(o,s),l.length===0)i.bufferSubData(o,0,c);else{l.sort((m,d)=>m.start-d.start);let h=0;for(let m=1;m<l.length;m++){let d=l[h],u=l[m];u.start<=d.start+d.count+1?d.count=Math.max(d.count,u.start+u.count-d.start):(++h,l[h]=u)}l.length=h+1;for(let m=0,d=l.length;m<d;m++){let u=l[m];i.bufferSubData(o,u.start*c.BYTES_PER_ELEMENT,c,u.start,u.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var Fe={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},le={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new w},probesMax:{value:new w},probesResolution:{value:new w}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Un={basic:{uniforms:Ut([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Ut([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Ut([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Ut([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Ut([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Ut([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Ut([le.points,le.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Ut([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Ut([le.common,le.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Ut([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Ut([le.sprite,le.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Ut([le.common,le.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Ut([le.lights,le.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Un.physical={uniforms:Ut([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};var Co={r:0,b:0,g:0},Gm=new Oe,Fd=new Le;function km(i,e,t,n,r,s){let a=new Ne(0),o,c,l=r===!0?0:1,h=null,m=0,d=null;function u(p){let v=p.isScene===!0?p.background:null;if(v&&v.isTexture){let f=p.backgroundBlurriness>0;v=e.get(v,f)}return v}function g(p,v){p.getRGB(Co,Wc(i)),t.buffers.color.setClear(Co.r,Co.g,Co.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(p,v=1){a.set(p),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:function(p){let v=!1,f=u(p);f===null?g(a,l):f&&f.isColor&&(g(f,1),v=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(p,v){let f=u(v);f&&(f.isCubeTexture||f.mapping===Ts)?(c===void 0&&(c=new Ke(new Mt(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:Gi(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,y,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=f,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(v.backgroundRotation)).transpose(),f.isCubeTexture&&f.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fd),c.material.toneMapped=ke.getTransfer(f.colorSpace)!==Ye,h===f&&m===f.version&&d===i.toneMapping||(c.material.needsUpdate=!0,h=f,m=f.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):f&&f.isTexture&&(o===void 0&&(o=new Ke(new Kn(2,2),new qt({name:"BackgroundMaterial",uniforms:Gi(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=f,o.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,o.material.toneMapped=ke.getTransfer(f.colorSpace)!==Ye,f.matrixAutoUpdate===!0&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),h===f&&m===f.version&&d===i.toneMapping||(o.material.needsUpdate=!0,h=f,m=f.version,d=i.toneMapping),o.layers.enableAll(),p.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function Vm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=l(null),s=r,a=!1;function o(f){return i.bindVertexArray(f)}function c(f){return i.deleteVertexArray(f)}function l(f){let _=[],y=[],S=[];for(let E=0;E<t;E++)_[E]=0,y[E]=0,S[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:y,attributeDivisors:S,object:f,attributes:{},index:null}}function h(){let f=s.newAttributes;for(let _=0,y=f.length;_<y;_++)f[_]=0}function m(f){d(f,0)}function d(f,_){let y=s.newAttributes,S=s.enabledAttributes,E=s.attributeDivisors;y[f]=1,S[f]===0&&(i.enableVertexAttribArray(f),S[f]=1),E[f]!==_&&(i.vertexAttribDivisor(f,_),E[f]=_)}function u(){let f=s.newAttributes,_=s.enabledAttributes;for(let y=0,S=_.length;y<S;y++)_[y]!==f[y]&&(i.disableVertexAttribArray(y),_[y]=0)}function g(f,_,y,S,E,M,P){P===!0?i.vertexAttribIPointer(f,_,y,E,M):i.vertexAttribPointer(f,_,y,S,E,M)}function p(){v(),a=!0,s!==r&&(s=r,o(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(f,_,y,S,E){let M=!1,P=(function(O,L,N,V){let F=V.wireframe===!0,Z=n[L.id];Z===void 0&&(Z={},n[L.id]=Z);let H=O.isInstancedMesh===!0?O.id:0,k=Z[H];k===void 0&&(k={},Z[H]=k);let q=k[N.id];q===void 0&&(q={},k[N.id]=q);let W=q[F];return W===void 0&&(W=l(i.createVertexArray()),q[F]=W),W})(f,S,y,_);s!==P&&(s=P,o(s.object)),M=(function(O,L,N,V){let F=s.attributes,Z=L.attributes,H=0,k=N.getAttributes();for(let q in k)if(k[q].location>=0){let W=F[q],ne=Z[q];if(ne===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor)),W===void 0||W.attribute!==ne||ne&&W.data!==ne.data)return!0;H++}return s.attributesNum!==H||s.index!==V})(f,S,y,E),M&&(function(O,L,N,V){let F={},Z=L.attributes,H=0,k=N.getAttributes();for(let q in k)if(k[q].location>=0){let W=Z[q];W===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(W=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(W=O.instanceColor));let ne={};ne.attribute=W,W&&W.data&&(ne.data=W.data),F[q]=ne,H++}s.attributes=F,s.attributesNum=H,s.index=V})(f,S,y,E),E!==null&&e.update(E,i.ELEMENT_ARRAY_BUFFER),(M||a)&&(a=!1,(function(O,L,N,V){h();let F=V.attributes,Z=N.getAttributes(),H=L.defaultAttributeValues;for(let k in Z){let q=Z[k];if(q.location>=0){let W=F[k];if(W===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(W=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(W=O.instanceColor)),W!==void 0){let ne=W.normalized,de=W.itemSize,Se=e.get(W);if(Se===void 0)continue;let ge=Se.buffer,_e=Se.type,te=Se.bytesPerElement,ce=_e===i.INT||_e===i.UNSIGNED_INT||W.gpuType===fo;if(W.isInterleavedBufferAttribute){let oe=W.data,me=oe.stride,Ue=W.offset;if(oe.isInstancedInterleavedBuffer){for(let $=0;$<q.locationSize;$++)d(q.location+$,oe.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let $=0;$<q.locationSize;$++)m(q.location+$);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let $=0;$<q.locationSize;$++)g(q.location+$,de/q.locationSize,_e,ne,me*te,(Ue+de/q.locationSize*$)*te,ce)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<q.locationSize;oe++)d(q.location+oe,W.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<q.locationSize;oe++)m(q.location+oe);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let oe=0;oe<q.locationSize;oe++)g(q.location+oe,de/q.locationSize,_e,ne,de*te,de/q.locationSize*oe*te,ce)}}else if(H!==void 0){let ne=H[k];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(q.location,ne);break;case 3:i.vertexAttrib3fv(q.location,ne);break;case 4:i.vertexAttrib4fv(q.location,ne);break;default:i.vertexAttrib1fv(q.location,ne)}}}}u()})(f,_,y,S),E!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))},reset:p,resetDefaultState:v,dispose:function(){p();for(let f in n){let _=n[f];for(let y in _){let S=_[y];for(let E in S){let M=S[E];for(let P in M)c(M[P].object),delete M[P];delete S[E]}}delete n[f]}},releaseStatesOfGeometry:function(f){if(n[f.id]===void 0)return;let _=n[f.id];for(let y in _){let S=_[y];for(let E in S){let M=S[E];for(let P in M)c(M[P].object),delete M[P];delete S[E]}}delete n[f.id]},releaseStatesOfObject:function(f){for(let _ in n){let y=n[_],S=f.isInstancedMesh===!0?f.id:0,E=y[S];if(E!==void 0){for(let M in E){let P=E[M];for(let O in P)c(P[O].object),delete P[O];delete E[M]}delete y[S],Object.keys(y).length===0&&delete n[_]}}},releaseStatesOfProgram:function(f){for(let _ in n){let y=n[_];for(let S in y){let E=y[S];if(E[f.id]===void 0)continue;let M=E[f.id];for(let P in M)c(M[P].object),delete M[P];delete E[f.id]}}},initAttributes:h,enableAttribute:m,disableUnusedAttributes:u}}function Hm(i,e,t){let n;this.setMode=function(r){n=r},this.render=function(r,s){i.drawArrays(n,r,s),t.update(s,n,1)},this.renderInstances=function(r,s,a){a!==0&&(i.drawArraysInstanced(n,r,s,a),t.update(s,n,a))},this.renderMultiDraw=function(r,s,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,r,0,s,0,a);let o=0;for(let c=0;c<a;c++)o+=s[c];t.update(o,n,1)}}function Wm(i,e,t,n){let r;function s(h){if(h==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(Te("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");return t.reversedDepthBuffer===!0&&l===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let h=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(h){return h===yn||n.convert(h)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let m=h===Dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==Yt&&n.convert(h)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&h!==sn&&!m)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:i.getParameter(i.MAX_SAMPLES),samples:i.getParameter(i.SAMPLES)}}function Xm(i){let e=this,t=null,n=0,r=!1,s=!1,a=new wn,o=new Le,c={value:null,needsUpdate:!1};function l(h,m,d,u){let g=h!==null?h.length:0,p=null;if(g!==0){if(p=c.value,u!==!0||p===null){let v=d+4*g,f=m.matrixWorldInverse;o.getNormalMatrix(f),(p===null||p.length<v)&&(p=new Float32Array(v));for(let _=0,y=d;_!==g;++_,y+=4)a.copy(h[_]).applyMatrix4(f,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,m){let d=h.length!==0||m||n!==0||r;return r=m,n=h.length,d},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,m){t=l(h,m,0)},this.setState=function(h,m,d){let u=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,v=i.get(h);if(!r||u===null||u.length===0||s&&!p)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let f=s?0:n,_=4*f,y=v.clippingState||null;c.value=y,y=l(u,m,_,d);for(let S=0;S!==_;++S)y[S]=t[S];v.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=f}}}Fd.set(-1,0,0,0,1,0,0,0,1);var md=[.125,.215,.35,.446,.526,.582],ws=20,As=new xr,fd=new Ne,qc=null,Yc=0,Zc=0,Jc=!1,jm=new w,Po=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=jm}=s;qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Yc,Zc),this._renderer.xr.enabled=Jc,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Dn,format:yn,colorSpace:Yr,depthBuffer:!1},r=gd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,m=a-4+1+md.length;for(let d=0;d<m;d++){let u=Math.pow(2,h);o.push(u);let g=1/u;d>a-4?g=md[d-a+4-1]:d===0&&(g=0),c.push(g);let p=1/(u-2),v=-p,f=1+p,_=[v,v,f,v,f,f,v,v,f,f,v,f],y=6,S=6,E=3,M=2,P=1,O=new Float32Array(E*S*y),L=new Float32Array(M*S*y),N=new Float32Array(P*S*y);for(let F=0;F<y;F++){let Z=F%3*2/3-1,H=F>2?0:-1,k=[Z,H,0,Z+2/3,H,0,Z+2/3,H+1,0,Z,H,0,Z+2/3,H+1,0,Z,H+1,0];O.set(k,E*S*F),L.set(_,M*S*F);let q=[F,F,F,F,F,F];N.set(q,P*S*F)}let V=new it;V.setAttribute("position",new zt(O,E)),V.setAttribute("uv",new zt(L,M)),V.setAttribute("faceIndex",new zt(N,P)),l.push(new Ke(V,null)),h>4&&h--}return{lodMeshes:l,sizeLods:o,sigmas:c}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(ws),h=new w(0,1,0);return new qt({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,c){return new qt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Io(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new Ke(new it,e);this._renderer.compile(t,As)}_sceneToCubeUV(e,t,n,r,s){let a=new Nt(90,1,t,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,m=l.toneMapping;l.getClearColor(fd),l.toneMapping=xn,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ke(new Mt,new Li({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,u=d.material,g=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,g=!0):(u.color.copy(fd),g=!0);for(let v=0;v<6;v++){let f=v%3;f===0?(a.up.set(0,o[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[v],s.y,s.z)):f===1?(a.up.set(0,0,o[v]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[v],s.z)):(a.up.set(0,o[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[v]));let _=this._cubeSize;Ar(r,f*_,v>2?_:0,_,_),l.setRenderTarget(r),g&&l.render(d,a),l.render(e,a)}l.toneMapping=m,l.autoClear=h,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Tr||e.mapping===Oi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_d());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;Ar(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,As)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),m=Math.sqrt(l*l-h*h)*(0+1.25*l),{_lodMax:d}=this,u=this._sizeLods[n],g=3*u*(n>d-4?n-d+4:0),p=4*(this._cubeSize-u);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=d-t,Ar(s,g,p,3*u,2*u),r.setRenderTarget(s),r.render(o,As),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=d-n,Ar(e,g,p,3*u,2*u),r.setRenderTarget(e),r.render(o,As)}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&be("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=l;let m=l.uniforms,d=this._sizeLods[n]-1,u=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,g=s/u,p=isFinite(s)?1+Math.floor(3*g):ws;p>ws&&Te(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to 20`);let v=[],f=0;for(let S=0;S<ws;++S){let E=S/g,M=Math.exp(-E*E/2);v.push(M),S===0?f+=M:S<p&&(f+=2*M)}for(let S=0;S<v.length;S++)v[S]=v[S]/f;m.envMap.value=e.texture,m.samples.value=p,m.weights.value=v,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);let{_lodMax:_}=this;m.dTheta.value=u,m.mipInt.value=_-n;let y=this._sizeLods[r];Ar(t,3*y*(r>_-4?r-_+4:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(h,As)}};function gd(i,e,t){let n=new Xt(i,e,t);return n.texture.mapping=Ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function _d(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function vd(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Io(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Lo=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new os(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mt(5,5,5),s=new qt({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Ln});s.uniforms.tEquirect.value=t;let a=new Ke(r,s),o=t.minFilter;return t.minFilter===$n&&(t.minFilter=wt),new lo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function qm(i){let e=new WeakMap,t=new WeakMap,n=null;function r(o,c){return c===uo?o.mapping=Tr:c===po&&(o.mapping=Oi),o}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(o){let c=o.target;c.removeEventListener("dispose",a);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}return{get:function(o,c=!1){return o==null?null:c?(function(l){if(l&&l.isTexture){let h=l.mapping,m=h===uo||h===po,d=h===Tr||h===Oi;if(m||d){let u=t.get(l),g=u!==void 0?u.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==g)return n===null&&(n=new Po(i)),u=m?n.fromEquirectangular(l,u):n.fromCubemap(l,u),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),u.texture;if(u!==void 0)return u.texture;{let p=l.image;return m&&p&&p.height>0||d&&p&&(function(v){let f=0,_=6;for(let y=0;y<_;y++)v[y]!==void 0&&f++;return f===_})(p)?(n===null&&(n=new Po(i)),u=m?n.fromEquirectangular(l):n.fromCubemap(l),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),l.addEventListener("dispose",a),u.texture):null}}}return l})(o):(function(l){if(l&&l.isTexture){let h=l.mapping;if(h===uo||h===po){if(e.has(l))return r(e.get(l).texture,l.mapping);{let m=l.image;if(m&&m.height>0){let d=new Lo(m.height);return d.fromEquirectangularTexture(i,l),e.set(l,d),l.addEventListener("dispose",s),r(d.texture,l.mapping)}return null}}}return l})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}}}function Ym(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Pi("WebGLRenderer: "+n+" extension not supported."),r}}}function Zm(i,e,t,n){let r={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let m in l.attributes)e.remove(l.attributes[m]);l.removeEventListener("dispose",a),delete r[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,m=c.attributes.position,d=0;if(m===void 0)return;if(h!==null){let p=h.array;d=h.version;for(let v=0,f=p.length;v<f;v+=3){let _=p[v+0],y=p[v+1],S=p[v+2];l.push(_,y,y,S,S,_)}}else{let p=m.array;d=m.version;for(let v=0,f=p.length/3-1;v<f;v+=3){let _=v+0,y=v+1,S=v+2;l.push(_,y,y,S,S,_)}}let u=new(m.count>=65535?ns:ts)(l,1);u.version=d;let g=s.get(c);g&&e.remove(g),s.set(c,u)}return{get:function(c,l){return r[l.id]===!0||(l.addEventListener("dispose",a),r[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],i.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Jm(i,e,t){let n,r,s;this.setMode=function(a){n=a},this.setIndex=function(a){r=a.type,s=a.bytesPerElement},this.render=function(a,o){i.drawElements(n,o,r,a*s),t.update(o,n,1)},this.renderInstances=function(a,o,c){c!==0&&(i.drawElementsInstanced(n,o,r,a*s,c),t.update(o,n,c))},this.renderMultiDraw=function(a,o,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,o,0,r,a,0,c);let l=0;for(let h=0;h<c;h++)l+=o[h];t.update(l,n,1)}}function Km(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:be("WebGLInfo: Unknown draw mode:",n)}}}}function $m(i,e,t){let n=new WeakMap,r=new Qe;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,m=n.get(a);if(m===void 0||m.count!==h){let O=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",O)};m!==void 0&&m.texture.dispose();let d=a.morphAttributes.position!==void 0,u=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],f=a.morphAttributes.color||[],_=0;d===!0&&(_=1),u===!0&&(_=2),g===!0&&(_=3);let y=a.attributes.position.count*_,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*S*4*h),M=new $r(E,y,S,h);M.type=sn,M.needsUpdate=!0;let P=4*_;for(let L=0;L<h;L++){let N=p[L],V=v[L],F=f[L],Z=y*S*4*L;for(let H=0;H<N.count;H++){let k=H*P;d===!0&&(r.fromBufferAttribute(N,H),E[Z+k+0]=r.x,E[Z+k+1]=r.y,E[Z+k+2]=r.z,E[Z+k+3]=0),u===!0&&(r.fromBufferAttribute(V,H),E[Z+k+4]=r.x,E[Z+k+5]=r.y,E[Z+k+6]=r.z,E[Z+k+7]=0),g===!0&&(r.fromBufferAttribute(F,H),E[Z+k+8]=r.x,E[Z+k+9]=r.y,E[Z+k+10]=r.z,E[Z+k+11]=F.itemSize===4?r.w:1)}}m={count:h,texture:M,size:new ee(y,S)},n.set(a,m),a.addEventListener("dispose",O)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let u=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",u),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}}}function Qm(i,e,t,n,r){let s=new WeakMap;function a(o){let c=o.target;c.removeEventListener("dispose",a),n.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:function(o){let c=r.render.frame,l=o.geometry,h=e.get(o,l);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==c&&(t.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,i.ARRAY_BUFFER),s.set(o,c))),o.isSkinnedMesh){let m=o.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return h},dispose:function(){s=new WeakMap}}}var ef={[Kl]:"LINEAR_TONE_MAPPING",[$l]:"REINHARD_TONE_MAPPING",[Ql]:"CINEON_TONE_MAPPING",[ec]:"ACES_FILMIC_TONE_MAPPING",[nc]:"AGX_TONE_MAPPING",[ic]:"NEUTRAL_TONE_MAPPING",[tc]:"CUSTOM_TONE_MAPPING"};function tf(i,e,t,n,r,s){let a=new Xt(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new Jn(e,t):void 0}),o=new Xt(e,t,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),c=new it;c.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new we([0,2,0,0,2,0],2));let l=new Za({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ke(c,l),m=new xr(-1,1,1,-1,0,1),d,u=null,g=null,p=!1,v=null,f=[],_=!1;this.setSize=function(y,S){a.setSize(y,S),o.setSize(y,S);for(let E=0;E<f.length;E++){let M=f[E];M.setSize&&M.setSize(y,S)}},this.setEffects=function(y){f=y,_=f.length>0&&f[0].isRenderPass===!0;let S=a.width,E=a.height;for(let M=0;M<f.length;M++){let P=f[M];P.setSize&&P.setSize(S,E)}},this.begin=function(y,S){if(p||y.toneMapping===xn&&f.length===0)return!1;if(v=S,S!==null){let E=S.width,M=S.height;a.width===E&&a.height===M||this.setSize(E,M)}return _===!1&&y.setRenderTarget(a),d=y.toneMapping,y.toneMapping=xn,!0},this.hasRenderPass=function(){return _},this.end=function(y,S){y.toneMapping=d,p=!0;let E=a,M=o;for(let P=0;P<f.length;P++){let O=f[P];if(O.enabled!==!1&&(O.render(y,M,E,S),O.needsSwap!==!1)){let L=E;E=M,M=L}}if(u!==y.outputColorSpace||g!==y.toneMapping){u=y.outputColorSpace,g=y.toneMapping,l.defines={},ke.getTransfer(u)===Ye&&(l.defines.SRGB_TRANSFER="");let P=ef[g];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(v),y.render(h,m),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}var Bd=new Bt,Qc=new Jn(1,1),zd=new $r,Gd=new Ta,kd=new os,xd=[],yd=[],Md=new Float32Array(16),Sd=new Float32Array(9),bd=new Float32Array(4);function Rr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=xd[r];if(s===void 0&&(s=new Float32Array(r),xd[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function No(i,e){let t=yd[e];t===void 0&&(t=new Int32Array(e),yd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rf(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function sf(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function af(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function of(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;bd.set(n),i.uniformMatrix2fv(this.addr,!1,bd),bt(t,n)}}function lf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;Sd.set(n),i.uniformMatrix3fv(this.addr,!1,Sd),bt(t,n)}}function cf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;Md.set(n),i.uniformMatrix4fv(this.addr,!1,Md),bt(t,n)}}function hf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function uf(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function df(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function pf(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function mf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ff(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function gf(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function _f(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function vf(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(Qc.compareFunction=t.isReversedDepthBuffer()?Ao:wo,s=Qc):s=Bd,t.setTexture2D(e||s,r)}function xf(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Gd,r)}function yf(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||kd,r)}function Mf(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||zd,r)}function Sf(i,e){i.uniform1fv(this.addr,e)}function bf(i,e){let t=Rr(e,this.size,2);i.uniform2fv(this.addr,t)}function Tf(i,e){let t=Rr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ef(i,e){let t=Rr(e,this.size,4);i.uniform4fv(this.addr,t)}function wf(i,e){let t=Rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Af(i,e){let t=Rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cf(i,e){let t=Rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Rf(i,e){i.uniform1iv(this.addr,e)}function Pf(i,e){i.uniform2iv(this.addr,e)}function If(i,e){i.uniform3iv(this.addr,e)}function Lf(i,e){i.uniform4iv(this.addr,e)}function Df(i,e){i.uniform1uiv(this.addr,e)}function Nf(i,e){i.uniform2uiv(this.addr,e)}function Uf(i,e){i.uniform3uiv(this.addr,e)}function Of(i,e){i.uniform4uiv(this.addr,e)}function Ff(i,e,t){let n=this.cache,r=e.length,s=No(t,r),a;St(n,s)||(i.uniform1iv(this.addr,s),bt(n,s)),a=this.type===i.SAMPLER_2D_SHADOW?Qc:Bd;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Bf(i,e,t){let n=this.cache,r=e.length,s=No(t,r);St(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Gd,s[a])}function zf(i,e,t){let n=this.cache,r=e.length,s=No(t,r);St(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||kd,s[a])}function Gf(i,e,t){let n=this.cache,r=e.length,s=No(t,r);St(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||zd,s[a])}var eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return nf;case 35664:return rf;case 35665:return sf;case 35666:return af;case 35674:return of;case 35675:return lf;case 35676:return cf;case 5124:case 35670:return hf;case 35667:case 35671:return uf;case 35668:case 35672:return df;case 35669:case 35673:return pf;case 5125:return mf;case 36294:return ff;case 36295:return gf;case 36296:return _f;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return xf;case 35680:case 36300:case 36308:case 36293:return yf;case 36289:case 36303:case 36311:case 36292:return Mf}})(t.type)}},th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return Sf;case 35664:return bf;case 35665:return Tf;case 35666:return Ef;case 35674:return wf;case 35675:return Af;case 35676:return Cf;case 5124:case 35670:return Rf;case 35667:case 35671:return Pf;case 35668:case 35672:return If;case 35669:case 35673:return Lf;case 5125:return Df;case 36294:return Nf;case 36295:return Uf;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Bf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Gf}})(t.type)}},nh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Kc=/(\w+)(\])?(\[|\.)?/g;function Td(i,e){i.seq.push(e),i.map[e.id]=e}function kf(i,e,t){let n=i.name,r=n.length;for(Kc.lastIndex=0;;){let s=Kc.exec(n),a=Kc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===r){Td(t,l===void 0?new eh(o,i,e):new th(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new nh(o),Td(t,h)),t=h}}}var Cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a);kf(o,e.getUniformLocation(t,o.name),this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Ed(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Vf=0,wd=new Le;function Ad(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,c){let l=o.split(`
`),h=[],m=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let u=m;u<d;u++){let g=u+1;h.push(`${g===c?">":" "} ${g}: ${l[u]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function Hf(i,e){let t=(function(n){ke._getMatrix(wd,ke.workingColorSpace,n);let r=`mat3( ${wd.elements.map(s=>s.toFixed(4))} )`;switch(ke.getTransfer(n)){case Zr:return[r,"LinearTransferOETF"];case Ye:return[r,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Wf={[Kl]:"Linear",[$l]:"Reinhard",[Ql]:"Cineon",[ec]:"ACESFilmic",[nc]:"AgX",[ic]:"Neutral",[tc]:"Custom"};function Xf(i,e){let t=Wf[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ro=new w;function jf(){return ke.getLuminanceCoefficients(Ro),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ro.x.toFixed(4)}, ${Ro.y.toFixed(4)}, ${Ro.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cs(i){return i!==""}function Cd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(i){return i.replace(qf,Zf)}var Yf=new Map;function Zf(i,e){let t=Fe[e];if(t===void 0){let n=Yf.get(e);if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");t=Fe[n],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return ih(t)}var Jf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(i){return i.replace(Jf,Kf)}function Kf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Id(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var $f={[bs]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"},Qf={[Tr]:"ENVMAP_TYPE_CUBE",[Oi]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE_UV"},eg={[Oi]:"ENVMAP_MODE_REFRACTION"},tg={[Wu]:"ENVMAP_BLENDING_MULTIPLY",[Xu]:"ENVMAP_BLENDING_MIX",[ju]:"ENVMAP_BLENDING_ADD"};function ng(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(V){return $f[V.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),l=(function(V){return V.envMap===!1?"ENVMAP_TYPE_CUBE":Qf[V.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(V){return V.envMap===!1?"ENVMAP_MODE_REFLECTION":eg[V.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),m=(function(V){return V.envMap===!1?"ENVMAP_BLENDING_NONE":tg[V.combine]||"ENVMAP_BLENDING_NONE"})(t),d=(function(V){let F=V.envMapCubeUVHeight;if(F===null)return null;let Z=Math.log2(F)-2,H=1/F;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:H,maxMip:Z}})(t),u=(function(V){return[V.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",V.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)})(t),g=(function(V){let F=[];for(let Z in V){let H=V[Z];H!==!1&&F.push("#define "+Z+" "+H)}return F.join(`
`)})(s),p=r.createProgram(),v,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),f.length>0&&(f+=`
`)):(v=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),f=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==xn?Xf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Hf("linearToOutputTexel",t.outputColorSpace),jf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),a=ih(a),a=Cd(a,t),a=Rd(a,t),o=ih(o),o=Cd(o,t),o=Rd(o,t),a=Pd(a),o=Pd(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",t.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=_+v+a,S=_+f+o,E=Ed(r,r.VERTEX_SHADER,y),M=Ed(r,r.FRAGMENT_SHADER,S);function P(V){if(i.debug.checkShaderErrors){let F=r.getProgramInfoLog(p)||"",Z=r.getShaderInfoLog(E)||"",H=r.getShaderInfoLog(M)||"",k=F.trim(),q=Z.trim(),W=H.trim(),ne=!0,de=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,E,M);else{let Se=Ad(r,E,"vertex"),ge=Ad(r,M,"fragment");be("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+k+`
`+Se+`
`+ge)}else k!==""?Te("WebGLProgram: Program Info Log:",k):q!==""&&W!==""||(de=!1);de&&(V.diagnostics={runnable:ne,programLog:k,vertexShader:{log:q,prefix:v},fragmentShader:{log:W,prefix:f}})}r.deleteShader(E),r.deleteShader(M),O=new Cr(r,p),L=(function(F,Z){let H={},k=F.getProgramParameter(Z,F.ACTIVE_ATTRIBUTES);for(let q=0;q<k;q++){let W=F.getActiveAttrib(Z,q),ne=W.name,de=1;W.type===F.FLOAT_MAT2&&(de=2),W.type===F.FLOAT_MAT3&&(de=3),W.type===F.FLOAT_MAT4&&(de=4),H[ne]={type:W.type,location:F.getAttribLocation(Z,ne),locationSize:de}}return H})(r,p)}let O,L;r.attachShader(p,E),r.attachShader(p,M),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),this.getUniforms=function(){return O===void 0&&P(this),O},this.getAttributes=function(){return L===void 0&&P(this),L};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(p,37297)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=M,this}var ig=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sh(e),t.set(e,n)),n}},sh=class{constructor(e){this.id=ig++,this.code=e,this.usedTimes=0}};function rg(i,e,t,n,r,s){let a=new pr,o=new rh,c=new Set,l=[],h=new Map,m=n.logarithmicDepthBuffer,d=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(p){return c.add(p),p===0?"uv":`uv${p}`}return{getParameters:function(p,v,f,_,y,S){let E=_.fog,M=y.geometry,P=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?_.environment:null,O=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,L=e.get(p.envMap||P,O),N=L&&L.mapping===Ts?L.image.height:null,V=u[p.type];p.precision!==null&&(d=n.getMaxPrecision(p.precision),d!==p.precision&&Te("WebGLProgram.getParameters:",p.precision,"not supported, using",d,"instead."));let F=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,Z=F!==void 0?F.length:0,H,k,q,W,ne=0;if(M.morphAttributes.position!==void 0&&(ne=1),M.morphAttributes.normal!==void 0&&(ne=2),M.morphAttributes.color!==void 0&&(ne=3),V){let hn=Un[V];H=hn.vertexShader,k=hn.fragmentShader}else{H=p.vertexShader,k=p.fragmentShader;let hn=o.getVertexShaderStage(p),Si=o.getFragmentShaderStage(p);o.update(p,hn,Si),q=hn.id,W=Si.id}let de=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),ge=y.isInstancedMesh===!0,_e=y.isBatchedMesh===!0,te=!!p.map,ce=!!p.matcap,oe=!!L,me=!!p.aoMap,Ue=!!p.lightMap,$=!!p.bumpMap&&p.wireframe===!1,R=!!p.normalMap,b=!!p.displacementMap,C=!!p.emissiveMap,U=!!p.metalnessMap,x=!!p.roughnessMap,D=p.anisotropy>0,I=p.clearcoat>0,A=p.dispersion>0,G=p.iridescence>0,X=p.sheen>0,Y=p.transmission>0,re=D&&!!p.anisotropyMap,ve=I&&!!p.clearcoatMap,xe=I&&!!p.clearcoatNormalMap,he=I&&!!p.clearcoatRoughnessMap,Ae=G&&!!p.iridescenceMap,Q=G&&!!p.iridescenceThicknessMap,se=X&&!!p.sheenColorMap,ie=X&&!!p.sheenRoughnessMap,pe=!!p.specularMap,et=!!p.specularColorMap,qe=!!p.specularIntensityMap,dt=Y&&!!p.transmissionMap,Ot=Y&&!!p.thicknessMap,Me=!!p.gradientMap,Je=!!p.alphaMap,Be=p.alphaTest>0,Ct=!!p.alphaHash,tt=!!p.extensions,vt=xn;p.toneMapped&&(de!==null&&de.isXRRenderTarget!==!0||(vt=i.toneMapping));let ut={shaderID:V,shaderType:p.type,shaderName:p.name,vertexShader:H,fragmentShader:k,defines:p.defines,customVertexShaderID:q,customFragmentShaderID:W,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:d,batching:_e,batchingColor:_e&&y._colorsTexture!==null,instancing:ge,instancingColor:ge&&y.instanceColor!==null,instancingMorph:ge&&y.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ke.workingColorSpace,alphaToCoverage:!!p.alphaToCoverage,map:te,matcap:ce,envMap:oe,envMapMode:oe&&L.mapping,envMapCubeUVHeight:N,aoMap:me,lightMap:Ue,bumpMap:$,normalMap:R,displacementMap:b,emissiveMap:C,normalMapObjectSpace:R&&p.normalMapType===Ju,normalMapTangentSpace:R&&p.normalMapType===kc,packedNormalMap:R&&p.normalMapType===kc&&(Jt=p.normalMap.format,Jt===Bi||Jt===To||Jt===Eo),metalnessMap:U,roughnessMap:x,anisotropy:D,anisotropyMap:re,clearcoat:I,clearcoatMap:ve,clearcoatNormalMap:xe,clearcoatRoughnessMap:he,dispersion:A,iridescence:G,iridescenceMap:Ae,iridescenceThicknessMap:Q,sheen:X,sheenColorMap:se,sheenRoughnessMap:ie,specularMap:pe,specularColorMap:et,specularIntensityMap:qe,transmission:Y,transmissionMap:dt,thicknessMap:Ot,gradientMap:Me,opaque:p.transparent===!1&&p.blending===Ni&&p.alphaToCoverage===!1,alphaMap:Je,alphaTest:Be,alphaHash:Ct,combine:p.combine,mapUv:te&&g(p.map.channel),aoMapUv:me&&g(p.aoMap.channel),lightMapUv:Ue&&g(p.lightMap.channel),bumpMapUv:$&&g(p.bumpMap.channel),normalMapUv:R&&g(p.normalMap.channel),displacementMapUv:b&&g(p.displacementMap.channel),emissiveMapUv:C&&g(p.emissiveMap.channel),metalnessMapUv:U&&g(p.metalnessMap.channel),roughnessMapUv:x&&g(p.roughnessMap.channel),anisotropyMapUv:re&&g(p.anisotropyMap.channel),clearcoatMapUv:ve&&g(p.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(p.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(p.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(p.iridescenceThicknessMap.channel),sheenColorMapUv:se&&g(p.sheenColorMap.channel),sheenRoughnessMapUv:ie&&g(p.sheenRoughnessMap.channel),specularMapUv:pe&&g(p.specularMap.channel),specularColorMapUv:et&&g(p.specularColorMap.channel),specularIntensityMapUv:qe&&g(p.specularIntensityMap.channel),transmissionMapUv:dt&&g(p.transmissionMap.channel),thicknessMapUv:Ot&&g(p.thicknessMap.channel),alphaMapUv:Je&&g(p.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(R||D),vertexNormals:!!M.attributes.normal,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!M.attributes.uv&&(te||Je),fog:!!E,useFog:p.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:p.wireframe===!1&&(p.flatShading===!0||M.attributes.normal===void 0&&R===!1&&(p.isMeshLambertMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isMeshPhysicalMaterial)),sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Se,skinning:y.isSkinnedMesh===!0,hasPositionAttribute:M.attributes.position!==void 0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ne,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:S.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:p.dithering,shadowMapEnabled:i.shadowMap.enabled&&f.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,decodeVideoTexture:te&&p.map.isVideoTexture===!0&&ke.getTransfer(p.map.colorSpace)===Ye,decodeVideoTextureEmissive:C&&p.emissiveMap.isVideoTexture===!0&&ke.getTransfer(p.emissiveMap.colorSpace)===Ye,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===rn,flipSided:p.side===Gt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:tt&&p.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&p.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};var Jt;return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut},getProgramCacheKey:function(p){let v=[];if(p.shaderID?v.push(p.shaderID):(v.push(p.customVertexShaderID),v.push(p.customFragmentShaderID)),p.defines!==void 0)for(let f in p.defines)v.push(f),v.push(p.defines[f]);return p.isRawShaderMaterial===!1&&((function(f,_){f.push(_.precision),f.push(_.outputColorSpace),f.push(_.envMapMode),f.push(_.envMapCubeUVHeight),f.push(_.mapUv),f.push(_.alphaMapUv),f.push(_.lightMapUv),f.push(_.aoMapUv),f.push(_.bumpMapUv),f.push(_.normalMapUv),f.push(_.displacementMapUv),f.push(_.emissiveMapUv),f.push(_.metalnessMapUv),f.push(_.roughnessMapUv),f.push(_.anisotropyMapUv),f.push(_.clearcoatMapUv),f.push(_.clearcoatNormalMapUv),f.push(_.clearcoatRoughnessMapUv),f.push(_.iridescenceMapUv),f.push(_.iridescenceThicknessMapUv),f.push(_.sheenColorMapUv),f.push(_.sheenRoughnessMapUv),f.push(_.specularMapUv),f.push(_.specularColorMapUv),f.push(_.specularIntensityMapUv),f.push(_.transmissionMapUv),f.push(_.thicknessMapUv),f.push(_.combine),f.push(_.fogExp2),f.push(_.sizeAttenuation),f.push(_.morphTargetsCount),f.push(_.morphAttributeCount),f.push(_.numDirLights),f.push(_.numPointLights),f.push(_.numSpotLights),f.push(_.numSpotLightMaps),f.push(_.numHemiLights),f.push(_.numRectAreaLights),f.push(_.numDirLightShadows),f.push(_.numPointLightShadows),f.push(_.numSpotLightShadows),f.push(_.numSpotLightShadowsWithMaps),f.push(_.numLightProbes),f.push(_.shadowMapType),f.push(_.toneMapping),f.push(_.numClippingPlanes),f.push(_.numClipIntersection),f.push(_.depthPacking)})(v,p),(function(f,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),f.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),f.push(a.mask)})(v,p),v.push(i.outputColorSpace)),v.push(p.customProgramCacheKey),v.join()},getUniforms:function(p){let v=u[p.type],f;if(v){let _=Un[v];f=dd.clone(_.uniforms)}else f=p.uniforms;return f},acquireProgram:function(p,v){let f=h.get(v);return f!==void 0?++f.usedTimes:(f=new ng(i,v,p,r),l.push(f),h.set(v,f)),f},releaseProgram:function(p){if(--p.usedTimes===0){let v=l.indexOf(p);l[v]=l[l.length-1],l.pop(),h.delete(p.cacheKey),p.destroy()}},releaseShaderCache:function(p){o.remove(p)},programs:l,dispose:function(){o.dispose()}}}function sg(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function ag(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ld(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dd(){let i=[],e=0,t=[],n=[],r=[];function s(o){let c=0;return o.isInstancedMesh&&(c+=2),o.isSkinnedMesh&&(c+=1),c}function a(o,c,l,h,m,d){let u=i[e];return u===void 0?(u={id:o.id,object:o,geometry:c,material:l,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:m,group:d},i[e]=u):(u.id=o.id,u.object=o,u.geometry=c,u.material=l,u.materialVariant=s(o),u.groupOrder=h,u.renderOrder=o.renderOrder,u.z=m,u.group=d),e++,u}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(o,c,l,h,m,d){let u=a(o,c,l,h,m,d);l.transmission>0?n.push(u):l.transparent===!0?r.push(u):t.push(u)},unshift:function(o,c,l,h,m,d){let u=a(o,c,l,h,m,d);l.transmission>0?n.unshift(u):l.transparent===!0?r.unshift(u):t.unshift(u)},finish:function(){for(let o=e,c=i.length;o<c;o++){let l=i[o];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(o,c,l){t.length>1&&t.sort(o||ag),n.length>1&&n.sort(c||Ld),r.length>1&&r.sort(c||Ld),l&&(t.reverse(),n.reverse(),r.reverse())}}}function og(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new Dd,i.set(e,[r])):t>=n.length?(r=new Dd,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function lg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Ne};break;case"SpotLight":t={position:new w,direction:new w,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new w,halfWidth:new w,halfHeight:new w}}return i[e.id]=t,t}}}var cg=0;function hg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ug(i){let e=new lg,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new w);let r=new w,s=new Oe,a=new Oe;return{setup:function(o){let c=0,l=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let m=0,d=0,u=0,g=0,p=0,v=0,f=0,_=0,y=0,S=0,E=0;o.sort(hg);for(let P=0,O=o.length;P<O;P++){let L=o[P],N=L.color,V=L.intensity,F=L.distance,Z=null;if(L.shadow&&L.shadow.map&&(Z=L.shadow.map.texture.format===Bi?L.shadow.map.texture:L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=N.r*V,l+=N.g*V,h+=N.b*V;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],V);E++}else if(L.isDirectionalLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let k=L.shadow,q=t.get(L);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=L.shadow.matrix,v++}n.directional[m]=H,m++}else if(L.isSpotLight){let H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(N).multiplyScalar(V),H.distance=F,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[u]=H;let k=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,k.updateMatrices(L),L.castShadow&&S++),n.spotLightMatrix[u]=k.matrix,L.castShadow){let q=t.get(L);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,n.spotShadow[u]=q,n.spotShadowMap[u]=Z,_++}u++}else if(L.isRectAreaLight){let H=e.get(L);H.color.copy(N).multiplyScalar(V),H.halfWidth.set(.5*L.width,0,0),H.halfHeight.set(0,.5*L.height,0),n.rectArea[g]=H,g++}else if(L.isPointLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let k=L.shadow,q=t.get(L);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,n.pointShadow[d]=q,n.pointShadowMap[d]=Z,n.pointShadowMatrix[d]=L.shadow.matrix,f++}n.point[d]=H,d++}else if(L.isHemisphereLight){let H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(V),H.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[p]=H,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=h;let M=n.hash;M.directionalLength===m&&M.pointLength===d&&M.spotLength===u&&M.rectAreaLength===g&&M.hemiLength===p&&M.numDirectionalShadows===v&&M.numPointShadows===f&&M.numSpotShadows===_&&M.numSpotMaps===y&&M.numLightProbes===E||(n.directional.length=m,n.spot.length=u,n.rectArea.length=g,n.point.length=d,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=f,n.pointShadowMap.length=f,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=f,n.spotLightMatrix.length=_+y-S,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,M.directionalLength=m,M.pointLength=d,M.spotLength=u,M.rectAreaLength=g,M.hemiLength=p,M.numDirectionalShadows=v,M.numPointShadows=f,M.numSpotShadows=_,M.numSpotMaps=y,M.numLightProbes=E,n.version=cg++)},setupView:function(o,c){let l=0,h=0,m=0,d=0,u=0,g=c.matrixWorldInverse;for(let p=0,v=o.length;p<v;p++){let f=o[p];if(f.isDirectionalLight){let _=n.directional[l];_.direction.setFromMatrixPosition(f.matrixWorld),r.setFromMatrixPosition(f.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),l++}else if(f.isSpotLight){let _=n.spot[m];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(f.matrixWorld),r.setFromMatrixPosition(f.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),m++}else if(f.isRectAreaLight){let _=n.rectArea[d];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(f.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(.5*f.width,0,0),_.halfHeight.set(0,.5*f.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),d++}else if(f.isPointLight){let _=n.point[h];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(g),h++}else if(f.isHemisphereLight){let _=n.hemi[u];_.direction.setFromMatrixPosition(f.matrixWorld),_.direction.transformDirection(g),u++}}},state:n}}function Nd(i){let e=new ug(i),t=[],n=[],r=[],s={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){s.camera=a,t.length=0,n.length=0,r.length=0},state:s,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){n.push(a)},pushLightProbeGrid:function(a){r.push(a)}}}function dg(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new Nd(i),e.set(t,[s])):n>=r.length?(s=new Nd(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}var pg=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],mg=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],Ud=new Oe,Rs=new w,$c=new w;function fg(i,e,t){let n=new Yn,r=new ee,s=new ee,a=new Qe,o=new Ja,c=new Ka,l={},h=t.maxTextureSize,m={[Sr]:Gt,[Gt]:Sr,[rn]:rn},d=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new it;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new Ke(g,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bs;let f=this.type;function _(M,P){let O=e.update(p);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,u.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Xt(r.x,r.y,{format:Bi,type:Dn})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(P,null,O,d,p,null),u.uniforms.shadow_pass.value=M.mapPass.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(P,null,O,u,p,null)}function y(M,P,O,L){let N=null,V=O.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(V!==void 0)N=V;else if(N=O.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=N.uuid,Z=P.uuid,H=l[F];H===void 0&&(H={},l[F]=H);let k=H[Z];k===void 0&&(k=N.clone(),H[Z]=k,P.addEventListener("dispose",E)),N=k}return N.visible=P.visible,N.wireframe=P.wireframe,N.side=L===Mr?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:m[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,O.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(i.properties.get(N).light=O),N}function S(M,P,O,L,N){if(M.visible===!1)return;if(M.layers.test(P.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&N===Mr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld);let F=e.update(M),Z=M.material;if(Array.isArray(Z)){let H=F.groups;for(let k=0,q=H.length;k<q;k++){let W=H[k],ne=Z[W.materialIndex];if(ne&&ne.visible){let de=y(M,ne,L,N);M.onBeforeShadow(i,M,P,O,F,de,W),i.renderBufferDirect(O,null,F,de,M,W),M.onAfterShadow(i,M,P,O,F,de,W)}}}else if(Z.visible){let H=y(M,Z,L,N);M.onBeforeShadow(i,M,P,O,F,H,null),i.renderBufferDirect(O,null,F,H,M,null),M.onAfterShadow(i,M,P,O,F,H,null)}}let V=M.children;for(let F=0,Z=V.length;F<Z;F++)S(V[F],P,O,L,N)}function E(M){M.target.removeEventListener("dispose",E);for(let P in l){let O=l[P],L=M.target.uuid;L in O&&(O[L].dispose(),delete O[L])}}this.render=function(M,P,O){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||M.length===0)return;this.type===bu&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=bs);let L=i.getRenderTarget(),N=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ln),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Z=f!==this.type;Z&&P.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(k=>k.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,k=M.length;H<k;H++){let q=M[H],W=q.shadow;if(W===void 0){Te("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let ne=W.getFrameExtents();r.multiply(ne),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ne.x),r.x=s.x*ne.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ne.y),r.y=s.y*ne.y,W.mapSize.y=s.y));let de=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=de,W.map===null||Z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Mr){if(q.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Xt(r.x,r.y,{format:Bi,type:Dn,minFilter:wt,magFilter:wt,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new Jn(r.x,r.y,sn),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=_i,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Qt,W.map.depthTexture.magFilter=Qt}else q.isPointLight?(W.map=new Lo(r.x),W.map.depthTexture=new Aa(r.x,Qn)):(W.map=new Xt(r.x,r.y),W.map.depthTexture=new Jn(r.x,r.y,Qn)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=_i,this.type===bs?(W.map.depthTexture.compareFunction=de?Ao:wo,W.map.depthTexture.minFilter=wt,W.map.depthTexture.magFilter=wt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Qt,W.map.depthTexture.magFilter=Qt);W.camera.updateProjectionMatrix()}let Se=W.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<Se;ge++){if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,ge),i.clear();else{ge===0&&(i.setRenderTarget(W.map),i.clear());let _e=W.getViewport(ge);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),F.viewport(a)}if(q.isPointLight){let _e=W.camera,te=W.matrix,ce=q.distance||_e.far;ce!==_e.far&&(_e.far=ce,_e.updateProjectionMatrix()),Rs.setFromMatrixPosition(q.matrixWorld),_e.position.copy(Rs),$c.copy(_e.position),$c.add(pg[ge]),_e.up.copy(mg[ge]),_e.lookAt($c),_e.updateMatrixWorld(),te.makeTranslation(-Rs.x,-Rs.y,-Rs.z),Ud.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Ud,_e.coordinateSystem,_e.reversedDepth)}else W.updateMatrices(q);n=W.getFrustum(),S(P,O,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Mr&&_(W,O),W.needsUpdate=!1}f=this.type,v.needsUpdate=!1,i.setRenderTarget(L,N,V)}}function gg(i,e){let t=new function(){let x=!1,D=new Qe,I=null,A=new Qe(0,0,0,0);return{setMask:function(G){I===G||x||(i.colorMask(G,G,G,G),I=G)},setLocked:function(G){x=G},setClear:function(G,X,Y,re,ve){ve===!0&&(G*=re,X*=re,Y*=re),D.set(G,X,Y,re),A.equals(D)===!1&&(i.clearColor(G,X,Y,re),A.copy(D))},reset:function(){x=!1,I=null,A.set(-1,0,0,0)}}},n=new function(){let x=!1,D=!1,I=null,A=null,G=null;return{setReversed:function(X){if(D!==X){let Y=e.get("EXT_clip_control");X?Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.ZERO_TO_ONE_EXT):Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.NEGATIVE_ONE_TO_ONE_EXT),D=X;let re=G;G=null,this.setClear(re)}},getReversed:function(){return D},setTest:function(X){X?oe(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(X){I===X||x||(i.depthMask(X),I=X)},setFunc:function(X){if(D&&(X=ad[X]),A!==X){switch(X){case Wl:i.depthFunc(i.NEVER);break;case Xl:i.depthFunc(i.ALWAYS);break;case jl:i.depthFunc(i.LESS);break;case ho:i.depthFunc(i.LEQUAL);break;case ql:i.depthFunc(i.EQUAL);break;case Yl:i.depthFunc(i.GEQUAL);break;case Zl:i.depthFunc(i.GREATER);break;case Jl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}A=X}},setLocked:function(X){x=X},setClear:function(X){G!==X&&(G=X,D&&(X=1-X),i.clearDepth(X))},reset:function(){x=!1,I=null,A=null,G=null,D=!1}}},r=new function(){let x=!1,D=null,I=null,A=null,G=null,X=null,Y=null,re=null,ve=null;return{setTest:function(xe){x||(xe?oe(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(xe){D===xe||x||(i.stencilMask(xe),D=xe)},setFunc:function(xe,he,Ae){I===xe&&A===he&&G===Ae||(i.stencilFunc(xe,he,Ae),I=xe,A=he,G=Ae)},setOp:function(xe,he,Ae){X===xe&&Y===he&&re===Ae||(i.stencilOp(xe,he,Ae),X=xe,Y=he,re=Ae)},setLocked:function(xe){x=xe},setClear:function(xe){ve!==xe&&(i.clearStencil(xe),ve=xe)},reset:function(){x=!1,D=null,I=null,A=null,G=null,X=null,Y=null,re=null,ve=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l={},h=new WeakMap,m=[],d=null,u=!1,g=null,p=null,v=null,f=null,_=null,y=null,S=null,E=new Ne(0,0,0),M=0,P=!1,O=null,L=null,N=null,V=null,F=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,k=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=k>=2);let W=null,ne={},de=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),ge=new Qe().fromArray(de),_e=new Qe().fromArray(Se);function te(x,D,I,A){let G=new Uint8Array(4),X=i.createTexture();i.bindTexture(x,X),i.texParameteri(x,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(x,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Y=0;Y<I;Y++)x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?i.texImage3D(D,0,i.RGBA,1,1,A,0,i.RGBA,i.UNSIGNED_BYTE,G):i.texImage2D(D+Y,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,G);return X}let ce={};function oe(x){o[x]!==!0&&(i.enable(x),o[x]=!0)}function me(x){o[x]!==!1&&(i.disable(x),o[x]=!1)}ce[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),oe(i.DEPTH_TEST),n.setFunc(ho),b(!1),C(kl),oe(i.CULL_FACE),R(Ln);let Ue={[br]:i.FUNC_ADD,[Eu]:i.FUNC_SUBTRACT,[wu]:i.FUNC_REVERSE_SUBTRACT};Ue[Au]=i.MIN,Ue[Cu]=i.MAX;let $={[Ru]:i.ZERO,[Pu]:i.ONE,[Iu]:i.SRC_COLOR,[Du]:i.SRC_ALPHA,[zu]:i.SRC_ALPHA_SATURATE,[Fu]:i.DST_COLOR,[Uu]:i.DST_ALPHA,[Lu]:i.ONE_MINUS_SRC_COLOR,[Nu]:i.ONE_MINUS_SRC_ALPHA,[Bu]:i.ONE_MINUS_DST_COLOR,[Ou]:i.ONE_MINUS_DST_ALPHA,[Gu]:i.CONSTANT_COLOR,[ku]:i.ONE_MINUS_CONSTANT_COLOR,[Vu]:i.CONSTANT_ALPHA,[Hu]:i.ONE_MINUS_CONSTANT_ALPHA};function R(x,D,I,A,G,X,Y,re,ve,xe){if(x!==Ln){if(u===!1&&(oe(i.BLEND),u=!0),x===Tu)G=G||D,X=X||I,Y=Y||A,D===p&&G===_||(i.blendEquationSeparate(Ue[D],Ue[G]),p=D,_=G),I===v&&A===f&&X===y&&Y===S||(i.blendFuncSeparate($[I],$[A],$[X],$[Y]),v=I,f=A,y=X,S=Y),re.equals(E)!==!1&&ve===M||(i.blendColor(re.r,re.g,re.b,ve),E.copy(re),M=ve),g=x,P=!1;else if(x!==g||xe!==P){if(p===br&&_===br||(i.blendEquation(i.FUNC_ADD),p=br,_=br),xe)switch(x){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:be("WebGLState: Invalid blending: ",x)}else switch(x){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vl:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",x)}v=null,f=null,y=null,S=null,E.set(0,0,0),M=0,g=x,P=xe}}else u===!0&&(me(i.BLEND),u=!1)}function b(x){O!==x&&(x?i.frontFace(i.CW):i.frontFace(i.CCW),O=x)}function C(x){x!==Mu?(oe(i.CULL_FACE),x!==L&&(x===kl?i.cullFace(i.BACK):x===Su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),L=x}function U(x,D,I){x?(oe(i.POLYGON_OFFSET_FILL),V===D&&F===I||(V=D,F=I,n.getReversed()&&(D=-D),i.polygonOffset(D,I))):me(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:oe,disable:me,bindFramebuffer:function(x,D){return l[x]!==D&&(i.bindFramebuffer(x,D),l[x]=D,x===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=D),x===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=D),!0)},drawBuffers:function(x,D){let I=m,A=!1;if(x){I=h.get(D),I===void 0&&(I=[],h.set(D,I));let G=x.textures;if(I.length!==G.length||I[0]!==i.COLOR_ATTACHMENT0){for(let X=0,Y=G.length;X<Y;X++)I[X]=i.COLOR_ATTACHMENT0+X;I.length=G.length,A=!0}}else I[0]!==i.BACK&&(I[0]=i.BACK,A=!0);A&&i.drawBuffers(I)},useProgram:function(x){return d!==x&&(i.useProgram(x),d=x,!0)},setBlending:R,setMaterial:function(x,D){x.side===rn?me(i.CULL_FACE):oe(i.CULL_FACE);let I=x.side===Gt;D&&(I=!I),b(I),x.blending===Ni&&x.transparent===!1?R(Ln):R(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),n.setFunc(x.depthFunc),n.setTest(x.depthTest),n.setMask(x.depthWrite),t.setMask(x.colorWrite);let A=x.stencilWrite;r.setTest(A),A&&(r.setMask(x.stencilWriteMask),r.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),r.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),U(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:b,setCullFace:C,setLineWidth:function(x){x!==N&&(H&&i.lineWidth(x),N=x)},setPolygonOffset:U,setScissorTest:function(x){x?oe(i.SCISSOR_TEST):me(i.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=i.TEXTURE0+Z-1),W!==x&&(i.activeTexture(x),W=x)},bindTexture:function(x,D,I){I===void 0&&(I=W===null?i.TEXTURE0+Z-1:W);let A=ne[I];A===void 0&&(A={type:void 0,texture:void 0},ne[I]=A),A.type===x&&A.texture===D||(W!==I&&(i.activeTexture(I),W=I),i.bindTexture(x,D||ce[x]),A.type=x,A.texture=D)},unbindTexture:function(){let x=ne[W];x!==void 0&&x.type!==void 0&&(i.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D(...arguments)}catch(x){be("WebGLState:",x)}},compressedTexImage3D:function(){try{i.compressedTexImage3D(...arguments)}catch(x){be("WebGLState:",x)}},texImage2D:function(){try{i.texImage2D(...arguments)}catch(x){be("WebGLState:",x)}},texImage3D:function(){try{i.texImage3D(...arguments)}catch(x){be("WebGLState:",x)}},pixelStorei:function(x,D){c[x]!==D&&(i.pixelStorei(x,D),c[x]=D)},getParameter:function(x){return c[x]!==void 0?c[x]:i.getParameter(x)},updateUBOMapping:function(x,D){let I=a.get(D);I===void 0&&(I=new WeakMap,a.set(D,I));let A=I.get(x);A===void 0&&(A=i.getUniformBlockIndex(D,x.name),I.set(x,A))},uniformBlockBinding:function(x,D){let I=a.get(D).get(x);s.get(D)!==I&&(i.uniformBlockBinding(D,I,x.__bindingPointIndex),s.set(D,I))},texStorage2D:function(){try{i.texStorage2D(...arguments)}catch(x){be("WebGLState:",x)}},texStorage3D:function(){try{i.texStorage3D(...arguments)}catch(x){be("WebGLState:",x)}},texSubImage2D:function(){try{i.texSubImage2D(...arguments)}catch(x){be("WebGLState:",x)}},texSubImage3D:function(){try{i.texSubImage3D(...arguments)}catch(x){be("WebGLState:",x)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D(...arguments)}catch(x){be("WebGLState:",x)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D(...arguments)}catch(x){be("WebGLState:",x)}},scissor:function(x){ge.equals(x)===!1&&(i.scissor(x.x,x.y,x.z,x.w),ge.copy(x))},viewport:function(x){_e.equals(x)===!1&&(i.viewport(x.x,x.y,x.z,x.w),_e.copy(x))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),o={},c={},W=null,ne={},l={},h=new WeakMap,m=[],d=null,u=!1,g=null,p=null,v=null,f=null,_=null,y=null,S=null,E=new Ne(0,0,0),M=0,P=!1,O=null,L=null,N=null,V=null,F=null,ge.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function _g(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new ee,h=new WeakMap,m=new Set,d,u=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,b){return g?new OffscreenCanvas(R,b):Jr("canvas")}function v(R,b,C){let U=1,x=$(R);if((x.width>C||x.height>C)&&(U=C/Math.max(x.width,x.height)),U<1){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let D=Math.floor(U*x.width),I=Math.floor(U*x.height);d===void 0&&(d=p(D,I));let A=b?p(D,I):d;return A.width=D,A.height=I,A.getContext("2d").drawImage(R,0,0,D,I),Te("WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+D+"x"+I+")."),A}return"data"in R&&Te("WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),R}return R}function f(R){return R.generateMipmaps}function _(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,b,C,U,x,D=!1){if(R!==null){if(i[R]!==void 0)return i[R];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let I;U&&(I=e.get("EXT_texture_norm16"),I||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let A=b;if(b===i.RED&&(C===i.FLOAT&&(A=i.R32F),C===i.HALF_FLOAT&&(A=i.R16F),C===i.UNSIGNED_BYTE&&(A=i.R8),C===i.UNSIGNED_SHORT&&I&&(A=I.R16_EXT),C===i.SHORT&&I&&(A=I.R16_SNORM_EXT)),b===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(A=i.R8UI),C===i.UNSIGNED_SHORT&&(A=i.R16UI),C===i.UNSIGNED_INT&&(A=i.R32UI),C===i.BYTE&&(A=i.R8I),C===i.SHORT&&(A=i.R16I),C===i.INT&&(A=i.R32I)),b===i.RG&&(C===i.FLOAT&&(A=i.RG32F),C===i.HALF_FLOAT&&(A=i.RG16F),C===i.UNSIGNED_BYTE&&(A=i.RG8),C===i.UNSIGNED_SHORT&&I&&(A=I.RG16_EXT),C===i.SHORT&&I&&(A=I.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(A=i.RG8UI),C===i.UNSIGNED_SHORT&&(A=i.RG16UI),C===i.UNSIGNED_INT&&(A=i.RG32UI),C===i.BYTE&&(A=i.RG8I),C===i.SHORT&&(A=i.RG16I),C===i.INT&&(A=i.RG32I)),b===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(A=i.RGB8UI),C===i.UNSIGNED_SHORT&&(A=i.RGB16UI),C===i.UNSIGNED_INT&&(A=i.RGB32UI),C===i.BYTE&&(A=i.RGB8I),C===i.SHORT&&(A=i.RGB16I),C===i.INT&&(A=i.RGB32I)),b===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(A=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(A=i.RGBA16UI),C===i.UNSIGNED_INT&&(A=i.RGBA32UI),C===i.BYTE&&(A=i.RGBA8I),C===i.SHORT&&(A=i.RGBA16I),C===i.INT&&(A=i.RGBA32I)),b===i.RGB&&(C===i.UNSIGNED_SHORT&&I&&(A=I.RGB16_EXT),C===i.SHORT&&I&&(A=I.RGB16_SNORM_EXT),C===i.UNSIGNED_INT_5_9_9_9_REV&&(A=i.RGB9_E5),C===i.UNSIGNED_INT_10F_11F_11F_REV&&(A=i.R11F_G11F_B10F)),b===i.RGBA){let G=D?Zr:ke.getTransfer(x);C===i.FLOAT&&(A=i.RGBA32F),C===i.HALF_FLOAT&&(A=i.RGBA16F),C===i.UNSIGNED_BYTE&&(A=G===Ye?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT&&I&&(A=I.RGBA16_EXT),C===i.SHORT&&I&&(A=I.RGBA16_SNORM_EXT),C===i.UNSIGNED_SHORT_4_4_4_4&&(A=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(A=i.RGB5_A1)}return A!==i.R16F&&A!==i.R32F&&A!==i.RG16F&&A!==i.RG32F&&A!==i.RGBA16F&&A!==i.RGBA32F||e.get("EXT_color_buffer_float"),A}function E(R,b){let C;return R?b===null||b===Qn||b===wr?C=i.DEPTH24_STENCIL8:b===sn?C=i.DEPTH32F_STENCIL8:b===Er&&(C=i.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Qn||b===wr?C=i.DEPTH_COMPONENT24:b===sn?C=i.DEPTH_COMPONENT32F:b===Er&&(C=i.DEPTH_COMPONENT16),C}function M(R,b){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qt&&R.minFilter!==wt?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function P(R){let b=R.target;b.removeEventListener("dispose",P),(function(C){let U=n.get(C);if(U.__webglInit===void 0)return;let x=C.source,D=u.get(x);if(D){let I=D[U.__cacheKey];I.usedTimes--,I.usedTimes===0&&L(C),Object.keys(D).length===0&&u.delete(x)}n.remove(C)})(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&m.delete(b)}function O(R){let b=R.target;b.removeEventListener("dispose",O),(function(C){let U=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(U.__webglFramebuffer[D]))for(let I=0;I<U.__webglFramebuffer[D].length;I++)i.deleteFramebuffer(U.__webglFramebuffer[D][I]);else i.deleteFramebuffer(U.__webglFramebuffer[D]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[D])}else{if(Array.isArray(U.__webglFramebuffer))for(let D=0;D<U.__webglFramebuffer.length;D++)i.deleteFramebuffer(U.__webglFramebuffer[D]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let D=0;D<U.__webglColorRenderbuffer.length;D++)U.__webglColorRenderbuffer[D]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[D]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}let x=C.textures;for(let D=0,I=x.length;D<I;D++){let A=n.get(x[D]);A.__webglTexture&&(i.deleteTexture(A.__webglTexture),a.memory.textures--),n.remove(x[D])}n.remove(C)})(b)}function L(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let C=R.source;delete u.get(C)[b.__cacheKey],a.memory.textures--}let N=0;function V(R,b){let C=n.get(R);if(R.isVideoTexture&&(function(U){let x=a.render.frame;h.get(U)!==x&&(h.set(U,x),U.update())})(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&C.__version!==R.version){let U=R.image;if(U===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else{if(U.complete!==!1)return void ne(C,R,b);Te("WebGLRenderer: Texture marked for update but image is incomplete")}}else R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+b)}let F={[Ii]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},Z={[Qt]:i.NEAREST,[qu]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[mo]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},H={[Ku]:i.NEVER,[nd]:i.ALWAYS,[$u]:i.LESS,[wo]:i.LEQUAL,[Qu]:i.EQUAL,[Ao]:i.GEQUAL,[ed]:i.GREATER,[td]:i.NOTEQUAL};function k(R,b){if(b.type!==sn||e.has("OES_texture_float_linear")!==!1||b.magFilter!==wt&&b.magFilter!==mo&&b.magFilter!==Es&&b.magFilter!==$n&&b.minFilter!==wt&&b.minFilter!==mo&&b.minFilter!==Es&&b.minFilter!==$n||Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,F[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,F[b.wrapT]),R!==i.TEXTURE_3D&&R!==i.TEXTURE_2D_ARRAY||i.texParameteri(R,i.TEXTURE_WRAP_R,F[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Z[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Z[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,H[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qt||b.minFilter!==Es&&b.minFilter!==$n||b.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let C=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function q(R,b){let C=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",P));let U=b.source,x=u.get(U);x===void 0&&(x={},u.set(U,x));let D=(function(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()})(b);if(D!==R.__cacheKey){x[D]===void 0&&(x[D]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,C=!0),x[D].usedTimes++;let I=x[R.__cacheKey];I!==void 0&&(x[R.__cacheKey].usedTimes--,I.usedTimes===0&&L(b)),R.__cacheKey=D,R.__webglTexture=x[D].texture}return C}function W(R,b,C){return Math.floor(Math.floor(R/C)/b)}function ne(R,b,C){let U=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(U=i.TEXTURE_3D);let x=q(R,b),D=b.source;t.bindTexture(U,R.__webglTexture,i.TEXTURE0+C);let I=n.get(D);if(D.version!==I.__version||x===!0){if(t.activeTexture(i.TEXTURE0+C),!(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)){let se=ke.getPrimaries(ke.workingColorSpace),ie=b.colorSpace===zi?null:ke.getPrimaries(b.colorSpace),pe=b.colorSpace===zi||se===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let A=v(b.image,!1,r.maxTextureSize);A=Ue(b,A);let G=s.convert(b.format,b.colorSpace),X=s.convert(b.type),Y,re=S(b.internalFormat,G,X,b.normalized,b.colorSpace,b.isVideoTexture);k(U,b);let ve=b.mipmaps,xe=b.isVideoTexture!==!0,he=I.__version===void 0||x===!0,Ae=D.dataReady,Q=M(b,A);if(b.isDepthTexture)re=E(b.format===Fi,b.type),he&&(xe?t.texStorage2D(i.TEXTURE_2D,1,re,A.width,A.height):t.texImage2D(i.TEXTURE_2D,0,re,A.width,A.height,0,G,X,null));else if(b.isDataTexture)if(ve.length>0){xe&&he&&t.texStorage2D(i.TEXTURE_2D,Q,re,ve[0].width,ve[0].height);for(let se=0,ie=ve.length;se<ie;se++)Y=ve[se],xe?Ae&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Y.width,Y.height,G,X,Y.data):t.texImage2D(i.TEXTURE_2D,se,re,Y.width,Y.height,0,G,X,Y.data);b.generateMipmaps=!1}else xe?(he&&t.texStorage2D(i.TEXTURE_2D,Q,re,A.width,A.height),Ae&&(function(se,ie,pe,et){let qe=se.updateRanges;if(qe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,pe,et,ie.data);else{qe.sort((Be,Ct)=>Be.start-Ct.start);let dt=0;for(let Be=1;Be<qe.length;Be++){let Ct=qe[dt],tt=qe[Be],vt=Ct.start+Ct.count,ut=W(tt.start,ie.width,4),Jt=W(Ct.start,ie.width,4);tt.start<=vt+1&&ut===Jt&&W(tt.start+tt.count-1,ie.width,4)===ut?Ct.count=Math.max(Ct.count,tt.start+tt.count-Ct.start):(++dt,qe[dt]=tt)}qe.length=dt+1;let Ot=t.getParameter(i.UNPACK_ROW_LENGTH),Me=t.getParameter(i.UNPACK_SKIP_PIXELS),Je=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,ie.width);for(let Be=0,Ct=qe.length;Be<Ct;Be++){let tt=qe[Be],vt=Math.floor(tt.start/4),ut=Math.ceil(tt.count/4),Jt=vt%ie.width,hn=Math.floor(vt/ie.width),Si=ut;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),t.pixelStorei(i.UNPACK_SKIP_ROWS,hn),t.texSubImage2D(i.TEXTURE_2D,0,Jt,hn,Si,1,pe,et,ie.data)}se.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Ot),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(i.UNPACK_SKIP_ROWS,Je)}})(b,A,G,X)):t.texImage2D(i.TEXTURE_2D,0,re,A.width,A.height,0,G,X,A.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){xe&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Q,re,ve[0].width,ve[0].height,A.depth);for(let se=0,ie=ve.length;se<ie;se++)if(Y=ve[se],b.format!==yn)if(G!==null)if(xe){if(Ae)if(b.layerUpdates.size>0){let pe=jc(Y.width,Y.height,b.format,b.type);for(let et of b.layerUpdates){let qe=Y.data.subarray(et*pe/Y.data.BYTES_PER_ELEMENT,(et+1)*pe/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,et,Y.width,Y.height,1,G,qe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,A.depth,G,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,re,Y.width,Y.height,A.depth,0,Y.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?Ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,A.depth,G,X,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,re,Y.width,Y.height,A.depth,0,G,X,Y.data)}else{xe&&he&&t.texStorage2D(i.TEXTURE_2D,Q,re,ve[0].width,ve[0].height);for(let se=0,ie=ve.length;se<ie;se++)Y=ve[se],b.format!==yn?G!==null?xe?Ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Y.width,Y.height,G,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,se,re,Y.width,Y.height,0,Y.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?Ae&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Y.width,Y.height,G,X,Y.data):t.texImage2D(i.TEXTURE_2D,se,re,Y.width,Y.height,0,G,X,Y.data)}else if(b.isDataArrayTexture)if(xe){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Q,re,A.width,A.height,A.depth),Ae)if(b.layerUpdates.size>0){let se=jc(A.width,A.height,b.format,b.type);for(let ie of b.layerUpdates){let pe=A.data.subarray(ie*se/A.data.BYTES_PER_ELEMENT,(ie+1)*se/A.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,A.width,A.height,1,G,X,pe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,A.width,A.height,A.depth,G,X,A.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,re,A.width,A.height,A.depth,0,G,X,A.data);else if(b.isData3DTexture)xe?(he&&t.texStorage3D(i.TEXTURE_3D,Q,re,A.width,A.height,A.depth),Ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,A.width,A.height,A.depth,G,X,A.data)):t.texImage3D(i.TEXTURE_3D,0,re,A.width,A.height,A.depth,0,G,X,A.data);else if(b.isFramebufferTexture){if(he)if(xe)t.texStorage2D(i.TEXTURE_2D,Q,re,A.width,A.height);else{let se=A.width,ie=A.height;for(let pe=0;pe<Q;pe++)t.texImage2D(i.TEXTURE_2D,pe,re,se,ie,0,G,X,null),se>>=1,ie>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),A.parentNode!==se)return se.appendChild(A),m.add(b),se.onpaint=ie=>{let pe=ie.changedElements;for(let et of m)pe.includes(et.image)&&(et.needsUpdate=!0)},void se.requestPaint();if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,A);else{let pe=i.RGBA,et=i.RGBA,qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,et,qe,A)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ve.length>0){if(xe&&he){let se=$(ve[0]);t.texStorage2D(i.TEXTURE_2D,Q,re,se.width,se.height)}for(let se=0,ie=ve.length;se<ie;se++)Y=ve[se],xe?Ae&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,G,X,Y):t.texImage2D(i.TEXTURE_2D,se,re,G,X,Y);b.generateMipmaps=!1}else if(xe){if(he){let se=$(A);t.texStorage2D(i.TEXTURE_2D,Q,re,se.width,se.height)}Ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,G,X,A)}else t.texImage2D(i.TEXTURE_2D,0,re,G,X,A);f(b)&&_(U),I.__version=D.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function de(R,b,C,U,x,D){let I=s.convert(C.format,C.colorSpace),A=s.convert(C.type),G=S(C.internalFormat,I,A,C.normalized,C.colorSpace),X=n.get(b),Y=n.get(C);if(Y.__renderTarget=b,!X.__hasExternalTextures){let re=Math.max(1,b.width>>D),ve=Math.max(1,b.height>>D);x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?t.texImage3D(x,D,G,re,ve,b.depth,0,I,A,null):t.texImage2D(x,D,G,re,ve,0,I,A,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,x,Y.__webglTexture,0,oe(b)):(x===i.TEXTURE_2D||x>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&x<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,x,Y.__webglTexture,D),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(R,b,C){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let U=b.depthTexture,x=U&&U.isDepthTexture?U.type:null,D=E(b.stencilBuffer,x),I=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe(b),D,b.width,b.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe(b),D,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,D,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,R)}else{let U=b.textures;for(let x=0;x<U.length;x++){let D=U[x],I=s.convert(D.format,D.colorSpace),A=s.convert(D.type),G=S(D.internalFormat,I,A,D.normalized,D.colorSpace);me(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe(b),G,b.width,b.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe(b),G,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,G,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(R,b,C){let U=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!b.depthTexture||!b.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let x=n.get(b.depthTexture);if(x.__renderTarget=b,x.__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),U){if(x.__webglInit===void 0&&(x.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),x.__webglTexture===void 0){x.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture),k(i.TEXTURE_CUBE_MAP,b.depthTexture);let X=s.convert(b.depthTexture.format),Y=s.convert(b.depthTexture.type),re;b.depthTexture.format===_i?re=i.DEPTH_COMPONENT24:b.depthTexture.format===Fi&&(re=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,re,b.width,b.height,0,X,Y,null)}}else V(b.depthTexture,0);let D=x.__webglTexture,I=oe(b),A=U?i.TEXTURE_CUBE_MAP_POSITIVE_X+C:i.TEXTURE_2D,G=b.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===_i)me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,A,D,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,G,A,D,0);else{if(b.depthTexture.format!==Fi)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,A,D,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,G,A,D,0)}}function _e(R){let b=n.get(R),C=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let U=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),U){let x=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,U.removeEventListener("dispose",x)};U.addEventListener("dispose",x),b.__depthDisposeCallback=x}b.__boundDepthTexture=U}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(C)for(let U=0;U<6;U++)ge(b.__webglFramebuffer[U],R,U);else{let U=R.texture.mipmaps;U&&U.length>0?ge(b.__webglFramebuffer[0],R,0):ge(b.__webglFramebuffer,R,0)}else if(C){b.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[U]),b.__webglDepthbuffer[U]===void 0)b.__webglDepthbuffer[U]=i.createRenderbuffer(),Se(b.__webglDepthbuffer[U],R,!1);else{let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=b.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,D),i.framebufferRenderbuffer(i.FRAMEBUFFER,x,i.RENDERBUFFER,D)}}else{let U=R.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Se(b.__webglDepthbuffer,R,!1);else{let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,D),i.framebufferRenderbuffer(i.FRAMEBUFFER,x,i.RENDERBUFFER,D)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}let te=[],ce=[];function oe(R){return Math.min(r.maxSamples,R.samples)}function me(R){let b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ue(R,b){let C=R.colorSpace,U=R.format,x=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||C!==Yr&&C!==zi&&(ke.getTransfer(C)===Ye?U===yn&&x===Yt||Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",C)),b}function $(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=function(){let R=N;return R>=r.maxTextures&&Te("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R},this.resetTextureUnits=function(){N=0},this.getTextureUnits=function(){return N},this.setTextureUnits=function(R){N=R},this.setTexture2D=V,this.setTexture2DArray=function(R,b){let C=n.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?ne(C,R,b):(R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null),t.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+b))},this.setTexture3D=function(R,b){let C=n.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?ne(C,R,b):t.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+b)},this.setTextureCube=function(R,b){let C=n.get(R);R.isCubeDepthTexture!==!0&&R.version>0&&C.__version!==R.version?(function(U,x,D){if(x.image.length!==6)return;let I=q(U,x),A=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+D);let G=n.get(A);if(A.version!==G.__version||I===!0){t.activeTexture(i.TEXTURE0+D);let X=ke.getPrimaries(ke.workingColorSpace),Y=x.colorSpace===zi?null:ke.getPrimaries(x.colorSpace),re=x.colorSpace===zi||X===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ve=x.isCompressedTexture||x.image[0].isCompressedTexture,xe=x.image[0]&&x.image[0].isDataTexture,he=[];for(let Me=0;Me<6;Me++)he[Me]=ve||xe?xe?x.image[Me].image:x.image[Me]:v(x.image[Me],!0,r.maxCubemapSize),he[Me]=Ue(x,he[Me]);let Ae=he[0],Q=s.convert(x.format,x.colorSpace),se=s.convert(x.type),ie=S(x.internalFormat,Q,se,x.normalized,x.colorSpace),pe=x.isVideoTexture!==!0,et=G.__version===void 0||I===!0,qe=A.dataReady,dt,Ot=M(x,Ae);if(k(i.TEXTURE_CUBE_MAP,x),ve){pe&&et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,ie,Ae.width,Ae.height);for(let Me=0;Me<6;Me++){dt=he[Me].mipmaps;for(let Je=0;Je<dt.length;Je++){let Be=dt[Je];x.format!==yn?Q!==null?pe?qe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,0,0,Be.width,Be.height,Q,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,ie,Be.width,Be.height,0,Be.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,0,0,Be.width,Be.height,Q,se,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,ie,Be.width,Be.height,0,Q,se,Be.data)}}}else{if(dt=x.mipmaps,pe&&et){dt.length>0&&Ot++;let Me=$(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,ie,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(xe){pe?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,he[Me].width,he[Me].height,Q,se,he[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ie,he[Me].width,he[Me].height,0,Q,se,he[Me].data);for(let Je=0;Je<dt.length;Je++){let Be=dt[Je].image[Me].image;pe?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,0,0,Be.width,Be.height,Q,se,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,ie,Be.width,Be.height,0,Q,se,Be.data)}}else{pe?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Q,se,he[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ie,Q,se,he[Me]);for(let Je=0;Je<dt.length;Je++){let Be=dt[Je];pe?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,0,0,Q,se,Be.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,ie,Q,se,Be.image[Me])}}}f(x)&&_(i.TEXTURE_CUBE_MAP),G.__version=A.version,x.onUpdate&&x.onUpdate(x)}U.__version=x.version})(C,R,b):t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+b)},this.rebindTextures=function(R,b,C){let U=n.get(R);b!==void 0&&de(U.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&_e(R)},this.setupRenderTarget=function(R){let b=R.texture,C=n.get(R),U=n.get(b);R.addEventListener("dispose",O);let x=R.textures,D=R.isWebGLCubeRenderTarget===!0,I=x.length>1;if(I||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=b.version,a.memory.textures++),D){C.__webglFramebuffer=[];for(let A=0;A<6;A++)if(b.mipmaps&&b.mipmaps.length>0){C.__webglFramebuffer[A]=[];for(let G=0;G<b.mipmaps.length;G++)C.__webglFramebuffer[A][G]=i.createFramebuffer()}else C.__webglFramebuffer[A]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){C.__webglFramebuffer=[];for(let A=0;A<b.mipmaps.length;A++)C.__webglFramebuffer[A]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(I)for(let A=0,G=x.length;A<G;A++){let X=n.get(x[A]);X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&me(R)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let A=0;A<x.length;A++){let G=x[A];C.__webglColorRenderbuffer[A]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[A]);let X=s.convert(G.format,G.colorSpace),Y=s.convert(G.type),re=S(G.internalFormat,X,Y,G.normalized,G.colorSpace,R.isXRRenderTarget===!0),ve=oe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,re,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+A,i.RENDERBUFFER,C.__webglColorRenderbuffer[A])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(C.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(D){t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),k(i.TEXTURE_CUBE_MAP,b);for(let A=0;A<6;A++)if(b.mipmaps&&b.mipmaps.length>0)for(let G=0;G<b.mipmaps.length;G++)de(C.__webglFramebuffer[A][G],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+A,G);else de(C.__webglFramebuffer[A],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+A,0);f(b)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(I){for(let A=0,G=x.length;A<G;A++){let X=x[A],Y=n.get(X),re=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),k(re,X),de(C.__webglFramebuffer,R,X,i.COLOR_ATTACHMENT0+A,re,0),f(X)&&_(re)}t.unbindTexture()}else{let A=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(A=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(A,U.__webglTexture),k(A,b),b.mipmaps&&b.mipmaps.length>0)for(let G=0;G<b.mipmaps.length;G++)de(C.__webglFramebuffer[G],R,b,i.COLOR_ATTACHMENT0,A,G);else de(C.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,A,0);f(b)&&_(A),t.unbindTexture()}R.depthBuffer&&_e(R)},this.updateRenderTargetMipmap=function(R){let b=R.textures;for(let C=0,U=b.length;C<U;C++){let x=b[C];if(f(x)){let D=y(R),I=n.get(x).__webglTexture;t.bindTexture(D,I),_(D),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(R.samples>0){if(me(R)===!1){let b=R.textures,C=R.width,U=R.height,x=i.COLOR_BUFFER_BIT,D=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=n.get(R),A=b.length>1;if(A)for(let X=0;X<b.length;X++)t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,I.__webglMultisampledFramebuffer);let G=R.texture.mipmaps;G&&G.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglFramebuffer);for(let X=0;X<b.length;X++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(x|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(x|=i.STENCIL_BUFFER_BIT)),A){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,I.__webglColorRenderbuffer[X]);let Y=n.get(b[X]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Y,0)}i.blitFramebuffer(0,0,C,U,0,0,C,U,x,i.NEAREST),c===!0&&(te.length=0,ce.length=0,te.push(i.COLOR_ATTACHMENT0+X),R.depthBuffer&&R.resolveDepthBuffer===!1&&(te.push(D),ce.push(D),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),A)for(let X=0;X<b.length;X++){t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,I.__webglColorRenderbuffer[X]);let Y=n.get(b[X]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D,Y,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}},this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=de,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function vg(i,e){return{convert:function(t,n=zi){let r,s=ke.getTransfer(n);if(t===Yt)return i.UNSIGNED_BYTE;if(t===go)return i.UNSIGNED_SHORT_4_4_4_4;if(t===_o)return i.UNSIGNED_SHORT_5_5_5_1;if(t===oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===lc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(t===sc)return i.BYTE;if(t===ac)return i.SHORT;if(t===Er)return i.UNSIGNED_SHORT;if(t===fo)return i.INT;if(t===Qn)return i.UNSIGNED_INT;if(t===sn)return i.FLOAT;if(t===Dn)return i.HALF_FLOAT;if(t===Yu)return i.ALPHA;if(t===Zu)return i.RGB;if(t===yn)return i.RGBA;if(t===_i)return i.DEPTH_COMPONENT;if(t===Fi)return i.DEPTH_STENCIL;if(t===vo)return i.RED;if(t===xo)return i.RED_INTEGER;if(t===Bi)return i.RG;if(t===cc)return i.RG_INTEGER;if(t===hc)return i.RGBA_INTEGER;if(t===yo||t===Mo||t===So||t===bo)if(s===Ye){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===uc||t===dc||t===pc||t===mc){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===fc||t===gc||t===_c||t===vc||t===xc||t===To||t===yc){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===fc||t===gc)return s===Ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===_c)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(t===vc)return r.COMPRESSED_R11_EAC;if(t===xc)return r.COMPRESSED_SIGNED_R11_EAC;if(t===To)return r.COMPRESSED_RG11_EAC;if(t===yc)return r.COMPRESSED_SIGNED_RG11_EAC}if(t===Mc||t===Sc||t===bc||t===Tc||t===Ec||t===wc||t===Ac||t===Cc||t===Rc||t===Pc||t===Ic||t===Lc||t===Dc||t===Nc){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Mc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Sc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===bc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Tc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Ec)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===wc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Ac)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Cc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Rc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Pc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Ic)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Lc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Dc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Nc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Uc||t===Oc||t===Fc){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Uc)return s===Ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Bc||t===zc||t===Eo||t===Gc){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Bc)return r.COMPRESSED_RED_RGTC1_EXT;if(t===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===wr?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ls(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends Pn{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,m=null,d=null,u=null,g=null,p=typeof XRWebGLBinding<"u",v=new ah,f={},_=t.getContextAttributes(),y=null,S=null,E=[],M=[],P=new ee,O=null,L=new Nt;L.viewport=new Qe;let N=new Nt;N.viewport=new Qe;let V=[L,N],F=new co,Z=null,H=null;function k(te){let ce=M.indexOf(te.inputSource);if(ce===-1)return;let oe=E[ce];oe!==void 0&&(oe.update(te.inputSource,te.frame,l||a),oe.dispatchEvent({type:te.type,data:te.inputSource}))}function q(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",W);for(let te=0;te<E.length;te++){let ce=M[te];ce!==null&&(M[te]=null,E[te].disconnect(ce))}Z=null,H=null,v.reset();for(let te in f)delete f[te];e.setRenderTarget(y),u=null,d=null,m=null,r=null,S=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}function W(te){for(let ce=0;ce<te.removed.length;ce++){let oe=te.removed[ce],me=M.indexOf(oe);me>=0&&(M[me]=null,E[me].disconnect(oe))}for(let ce=0;ce<te.added.length;ce++){let oe=te.added[ce],me=M.indexOf(oe);if(me===-1){for(let $=0;$<E.length;$++){if($>=M.length){M.push(oe),me=$;break}if(M[$]===null){M[$]=oe,me=$;break}}if(me===-1)break}let Ue=E[me];Ue&&Ue.connect(oe)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=E[te];return ce===void 0&&(ce=new mr,E[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=E[te];return ce===void 0&&(ce=new mr,E[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=E[te];return ce===void 0&&(ce=new mr,E[te]=ce),ce.getHandSpace()},this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return m===null&&p&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",q),r.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(P),p&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,oe=null,me=null;_.depth&&(me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=_.stencil?Fi:_i,oe=_.stencil?wr:Qn);let Ue={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};m=this.getBinding(),d=m.createProjectionLayer(Ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Xt(d.textureWidth,d.textureHeight,{format:yn,type:Yt,depthTexture:new Jn(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new Xt(u.framebufferWidth,u.framebufferHeight,{format:yn,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),_e.setContext(r),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let ne=new w,de=new w;function Se(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ce=te.near,oe=te.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(oe=v.depthFar)),F.near=N.near=L.near=ce,F.far=N.far=L.far=oe,Z===F.near&&H===F.far||(r.updateRenderState({depthNear:F.near,depthFar:F.far}),Z=F.near,H=F.far),F.layers.mask=6|te.layers.mask,L.layers.mask=-5&F.layers.mask,N.layers.mask=-3&F.layers.mask;let me=te.parent,Ue=F.cameras;Se(F,me);for(let $=0;$<Ue.length;$++)Se(Ue[$],me);Ue.length===2?(function($,R,b){ne.setFromMatrixPosition(R.matrixWorld),de.setFromMatrixPosition(b.matrixWorld);let C=ne.distanceTo(de),U=R.projectionMatrix.elements,x=b.projectionMatrix.elements,D=U[14]/(U[10]-1),I=U[14]/(U[10]+1),A=(U[9]+1)/U[5],G=(U[9]-1)/U[5],X=(U[8]-1)/U[0],Y=(x[8]+1)/x[0],re=D*X,ve=D*Y,xe=C/(-X+Y),he=xe*-X;if(R.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(he),$.translateZ(xe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),U[10]===-1)$.projectionMatrix.copy(R.projectionMatrix),$.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let Ae=D+xe,Q=I+xe,se=re-he,ie=ve+(C-he),pe=A*I/Q*Ae,et=G*I/Q*Ae;$.projectionMatrix.makePerspective(se,ie,pe,et,Ae,Q),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}})(F,L,N):F.projectionMatrix.copy(L.projectionMatrix),(function($,R,b){b===null?$.matrix.copy(R.matrixWorld):($.matrix.copy(b.matrixWorld),$.matrix.invert(),$.matrix.multiply(R.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(R.projectionMatrix),$.projectionMatrixInverse.copy(R.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=2*Ma*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)})(te,F,me)},this.getCamera=function(){return F},this.getFoveation=function(){if(d!==null||u!==null)return c},this.setFoveation=function(te){c=te,d!==null&&(d.fixedFoveation=te),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(F)},this.getCameraTexture=function(te){return f[te]};let ge=null,_e=new Od;_e.setAnimationLoop(function(te,ce){if(h=ce.getViewerPose(l||a),g=ce,h!==null){let oe=h.views;u!==null&&(e.setRenderTargetFramebuffer(S,u.framebuffer),e.setRenderTarget(S));let me=!1;oe.length!==F.cameras.length&&(F.cameras.length=0,me=!0);for(let $=0;$<oe.length;$++){let R=oe[$],b=null;if(u!==null)b=u.getViewport(R);else{let U=m.getViewSubImage(d,R);b=U.viewport,$===0&&(e.setRenderTargetTextures(S,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(S))}let C=V[$];C===void 0&&(C=new Nt,C.layers.enable($),C.viewport=new Qe,V[$]=C),C.matrix.fromArray(R.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(R.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(b.x,b.y,b.width,b.height),$===0&&(F.matrix.copy(C.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),me===!0&&F.cameras.push(C)}let Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&p){m=n.getBinding();let $=m.getDepthInformation(oe[0]);$&&$.isValid&&$.texture&&v.init($,r.renderState)}if(Ue&&Ue.includes("camera-access")&&p){e.state.unbindTexture(),m=n.getBinding();for(let $=0;$<oe.length;$++){let R=oe[$].camera;if(R){let b=f[R];b||(b=new ls,f[R]=b);let C=m.getCameraImage(R);b.sourceTexture=C}}}}for(let oe=0;oe<E.length;oe++){let me=M[oe],Ue=E[oe];me!==null&&Ue!==void 0&&Ue.update(me,ce,l||a)}ge&&ge(te,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),g=null}),this.setAnimationLoop=function(te){ge=te},this.dispose=function(){}}},xg=new Oe,Vd=new Le;function yg(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Gt&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Gt&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(r.envMap.value=o,r.envMapRotation.value.setFromMatrix4(xg.makeRotationFromEuler(c)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&r.envMapRotation.value.premultiply(Vd),r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Wc(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,c){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?n(r,s):s.isMeshLambertMaterial?(n(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(n(r,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(n(r,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(l,h,m){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Gt&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=m.texture,l.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(r,s,c)):s.isMeshMatcapMaterial?(n(r,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(l,h){let m=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(m.matrixWorld),l.nearDistance.value=m.shadow.camera.near,l.farDistance.value=m.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(l,h,m,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*m,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Mg(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(d,u,g,p){if((function(v,f,_,y){let S=v.value,E=f+"_"+_;if(y[E]===void 0)return typeof S=="number"||typeof S=="boolean"?y[E]=S:ArrayBuffer.isView(S)?y[E]=S.slice():y[E]=S.clone(),!0;{let M=y[E];if(typeof S=="number"||typeof S=="boolean"){if(M!==S)return y[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(M.equals(S)===!1)return M.copy(S),!0}}return!1})(d,u,g,p)===!0){let v=d.__offset,f=d.value;if(Array.isArray(f)){let _=0;for(let y=0;y<f.length;y++){let S=f[y],E=h(S);l(S,d.__data,_),typeof S=="number"||typeof S=="boolean"||S.isMatrix3||ArrayBuffer.isView(S)||(_+=E.storage/Float32Array.BYTES_PER_ELEMENT)}}else l(f,d.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,d.__data)}}function l(d,u,g){typeof d=="number"||typeof d=="boolean"?u[0]=d:d.isMatrix3?(u[0]=d.elements[0],u[1]=d.elements[1],u[2]=d.elements[2],u[3]=0,u[4]=d.elements[3],u[5]=d.elements[4],u[6]=d.elements[5],u[7]=0,u[8]=d.elements[6],u[9]=d.elements[7],u[10]=d.elements[8],u[11]=0):ArrayBuffer.isView(d)?u.set(new d.constructor(d.buffer,d.byteOffset,u.length)):d.toArray(u,g)}function h(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(d)?(u.boundary=16,u.storage=d.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",d),u}function m(d){let u=d.target;u.removeEventListener("dispose",m);let g=a.indexOf(u.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(r[u.id]),delete r[u.id],delete s[u.id]}return{bind:function(d,u){let g=u.program;n.uniformBlockBinding(d,g)},update:function(d,u){let g=r[d.id];g===void 0&&((function(f){let _=f.uniforms,y=0,S=16;for(let M=0,P=_.length;M<P;M++){let O=Array.isArray(_[M])?_[M]:[_[M]];for(let L=0,N=O.length;L<N;L++){let V=O[L],F=Array.isArray(V.value)?V.value:[V.value];for(let Z=0,H=F.length;Z<H;Z++){let k=h(F[Z]),q=y%S,W=q%k.boundary,ne=q+W;y+=W,ne!==0&&S-ne<k.storage&&(y+=S-ne),V.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=k.storage}}}let E=y%S;E>0&&(y+=S-E),f.__size=y,f.__cache={}})(d),g=(function(f){let _=(function(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=_;let y=i.createBuffer(),S=f.__size,E=f.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y})(d),r[d.id]=g,d.addEventListener("dispose",m));let p=u.program;n.updateUBOMapping(d,p);let v=e.render.frame;s[d.id]!==v&&((function(f){let _=r[f.id],y=f.uniforms,S=f.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,M=y.length;E<M;E++){let P=y[E];if(Array.isArray(P))for(let O=0,L=P.length;O<L;O++)c(P[O],E,O,S);else c(P,E,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)})(d),s[d.id]=v)},dispose:function(){for(let d in r)i.deleteBuffer(r[d]);a=[],r={},s={}}}}Vd.set(-1,0,0,0,1,0,0,0,1);var Sg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Nn=null,Do=class{constructor(e={}){let{canvas:t=id(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Yt}=e,g;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let p=u,v=new Set([hc,cc,xo]),f=new Set([Yt,Qn,Er,wr,go,_o]),_=new Uint32Array(4),y=new Int32Array(4),S=new w,E=null,M=null,P=[],O=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,V=!1,F=null,Z=null,H=null,k=null;this._outputColorSpace=pt;let q=0,W=0,ne=null,de=-1,Se=null,ge=new Qe,_e=new Qe,te=null,ce=new Ne(0),oe=0,me=t.width,Ue=t.height,$=1,R=null,b=null,C=new Qe(0,0,me,Ue),U=new Qe(0,0,me,Ue),x=!1,D=new Yn,I=!1,A=!1,G=new Oe,X=new w,Y=new Qe,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function xe(){return ne===null?$:1}let he,Ae,Q,se,ie,pe,et,qe,dt,Ot,Me,Je,Be,Ct,tt,vt,ut,Jt,hn,Si,Mn,ni,Fs,B=n;function bh(T,z){return t.getContext(T,z)}try{let T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Eh,!1),t.addEventListener("webglcontextrestored",wh,!1),t.addEventListener("webglcontextcreationerror",Ah,!1),B===null){let z="webgl2";if(B=bh(z,T),B===null)throw bh(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw be("WebGLRenderer: "+T.message),T}function Th(){he=new Ym(B),he.init(),Mn=new vg(B,he),Ae=new Wm(B,he,e,Mn),Q=new gg(B,he),Ae.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),Z=B.createFramebuffer(),H=B.createFramebuffer(),k=B.createFramebuffer(),se=new Km(B),ie=new sg,pe=new _g(B,he,Q,ie,Ae,Mn,se),et=new qm(N),qe=new zm(B),ni=new Vm(B,qe),dt=new Zm(B,qe,se,ni),Ot=new Qm(B,dt,qe,ni,se),Jt=new $m(B,Ae,pe),tt=new Xm(ie),Me=new rg(N,et,he,Ae,ni,tt),Je=new yg(N,ie),Be=new og,Ct=new dg(he),ut=new km(N,et,Q,Ot,g,c),vt=new fg(N,Ot,Ae),Fs=new Mg(B,se,Ae,Q),hn=new Hm(B,he,se),Si=new Jm(B,he,se),se.programs=Me.programs,N.capabilities=Ae,N.extensions=he,N.properties=ie,N.renderLists=Be,N.shadowMap=vt,N.state=Q,N.info=se}Th(),p!==Yt&&(L=new tf(p,t.width,t.height,o,r,s));let mt=new oh(N,B);function Eh(T){T.preventDefault(),Kr("WebGLRenderer: Context Lost."),V=!0}function wh(){Kr("WebGLRenderer: Context Restored."),V=!1;let T=se.autoReset,z=vt.enabled,j=vt.autoUpdate,K=vt.needsUpdate,J=vt.type;Th(),se.autoReset=T,vt.enabled=z,vt.autoUpdate=j,vt.needsUpdate=K,vt.type=J}function Ah(T){be("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ch(T){let z=T.target;z.removeEventListener("dispose",Ch),(function(j){(function(K){let J=ie.get(K).programs;J!==void 0&&(J.forEach(function(ae){Me.releaseProgram(ae)}),K.isShaderMaterial&&Me.releaseShaderCache(K))})(j),ie.remove(j)})(z)}function Rh(T,z,j){T.transparent===!0&&T.side===rn&&T.forceSinglePass===!1?(T.side=Gt,T.needsUpdate=!0,zs(T,z,j),T.side=Sr,T.needsUpdate=!0,zs(T,z,j),T.side=rn):zs(T,z,j)}this.xr=mt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=he.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=he.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(me,Ue,!1))},this.getSize=function(T){return T.set(me,Ue)},this.setSize=function(T,z,j=!0){mt.isPresenting?Te("WebGLRenderer: Can't change size while VR device is presenting."):(me=T,Ue=z,t.width=Math.floor(T*$),t.height=Math.floor(z*$),j===!0&&(t.style.width=T+"px",t.style.height=z+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,T,z))},this.getDrawingBufferSize=function(T){return T.set(me*$,Ue*$).floor()},this.setDrawingBufferSize=function(T,z,j){me=T,Ue=z,$=j,t.width=Math.floor(T*j),t.height=Math.floor(z*j),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(p!==Yt){if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])}else be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(T){return T.copy(ge)},this.getViewport=function(T){return T.copy(C)},this.setViewport=function(T,z,j,K){T.isVector4?C.set(T.x,T.y,T.z,T.w):C.set(T,z,j,K),Q.viewport(ge.copy(C).multiplyScalar($).round())},this.getScissor=function(T){return T.copy(U)},this.setScissor=function(T,z,j,K){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,z,j,K),Q.scissor(_e.copy(U).multiplyScalar($).round())},this.getScissorTest=function(){return x},this.setScissorTest=function(T){Q.setScissorTest(x=T)},this.setOpaqueSort=function(T){R=T},this.setTransparentSort=function(T){b=T},this.getClearColor=function(T){return T.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,j=!0){let K=0;if(T){let J=!1;if(ne!==null){let ae=ne.texture.format;J=v.has(ae)}if(J){let ae=ne.texture.type,ue=f.has(ae),fe=ut.getClearColor(),ye=ut.getClearAlpha(),Re=fe.r,Ve=fe.g,He=fe.b;ue?(_[0]=Re,_[1]=Ve,_[2]=He,_[3]=ye,B.clearBufferuiv(B.COLOR,0,_)):(y[0]=Re,y[1]=Ve,y[2]=He,y[3]=ye,B.clearBufferiv(B.COLOR,0,y))}else K|=B.COLOR_BUFFER_BIT}z&&(K|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Eh,!1),t.removeEventListener("webglcontextrestored",wh,!1),t.removeEventListener("webglcontextcreationerror",Ah,!1),ut.dispose(),Be.dispose(),Ct.dispose(),ie.dispose(),et.dispose(),Ot.dispose(),ni.dispose(),Fs.dispose(),Me.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Ph),mt.removeEventListener("sessionend",Ih),bi.stop()},this.renderBufferDirect=function(T,z,j,K,J,ae){z===null&&(z=re);let ue=J.isMesh&&J.matrixWorld.determinantAffine()<0,fe=(function(Ge,at,Rt,Pe,De){at.isScene!==!0&&(at=re),pe.resetTextureUnits();let un=at.fog,Yo=Pe.isMeshStandardMaterial||Pe.isMeshLambertMaterial||Pe.isMeshPhongMaterial?at.environment:null,Gs=ne===null?N.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ke.workingColorSpace,Nr=Pe.isMeshStandardMaterial||Pe.isMeshLambertMaterial&&!Pe.envMap||Pe.isMeshPhongMaterial&&!Pe.envMap,Sn=et.get(Pe.envMap||Yo,Nr),Hi=Pe.vertexColors===!0&&!!Rt.attributes.color&&Rt.attributes.color.itemSize===4,Fn=!!Rt.attributes.tangent&&(!!Pe.normalMap||Pe.anisotropy>0),Zo=!!Rt.morphAttributes.position,Wi=!!Rt.morphAttributes.normal,Qp=!!Rt.morphAttributes.color,Fh=xn;Pe.toneMapped&&(ne!==null&&ne.isXRRenderTarget!==!0||(Fh=N.toneMapping));let Bh=Rt.morphAttributes.position||Rt.morphAttributes.normal||Rt.morphAttributes.color,em=Bh!==void 0?Bh.length:0,Ie=ie.get(Pe),Ti=M.state.lights;if(I===!0&&(A===!0||Ge!==Se)){let gt=Ge===Se&&Pe.id===de;tt.setState(Pe,Ge,gt)}let dn=!1;Pe.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==Ti.state.version||Ie.outputColorSpace!==Gs||De.isBatchedMesh&&Ie.batching===!1?dn=!0:De.isBatchedMesh||Ie.batching!==!0?De.isBatchedMesh&&Ie.batchingColor===!0&&De.colorTexture===null||De.isBatchedMesh&&Ie.batchingColor===!1&&De.colorTexture!==null||De.isInstancedMesh&&Ie.instancing===!1?dn=!0:De.isInstancedMesh||Ie.instancing!==!0?De.isSkinnedMesh&&Ie.skinning===!1?dn=!0:De.isSkinnedMesh||Ie.skinning!==!0?De.isInstancedMesh&&Ie.instancingColor===!0&&De.instanceColor===null||De.isInstancedMesh&&Ie.instancingColor===!1&&De.instanceColor!==null||De.isInstancedMesh&&Ie.instancingMorph===!0&&De.morphTexture===null||De.isInstancedMesh&&Ie.instancingMorph===!1&&De.morphTexture!==null||Ie.envMap!==Sn||Pe.fog===!0&&Ie.fog!==un?dn=!0:Ie.numClippingPlanes===void 0||Ie.numClippingPlanes===tt.numPlanes&&Ie.numIntersection===tt.numIntersection?(Ie.vertexAlphas!==Hi||Ie.vertexTangents!==Fn||Ie.morphTargets!==Zo||Ie.morphNormals!==Wi||Ie.morphColors!==Qp||Ie.toneMapping!==Fh||Ie.morphTargetsCount!==em||!!Ie.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(dn=!0):dn=!0:dn=!0:dn=!0:dn=!0:(dn=!0,Ie.__version=Pe.version);let ii=Ie.currentProgram;dn===!0&&(ii=zs(Pe,at,De),F&&Pe.isNodeMaterial&&F.onUpdateProgram(Pe,ii,Ie));let zh=!1,Xi=!1,Jo=!1,ot=ii.getUniforms(),Kt=Ie.uniforms;if(Q.useProgram(ii.program)&&(zh=!0,Xi=!0,Jo=!0),Pe.id!==de&&(de=Pe.id,Xi=!0),Ie.needsLights){let gt=(function(Tn,$o){if(Tn.length===0)return null;if(Tn.length===1)return Tn[0].texture!==null?Tn[0]:null;S.setFromMatrixPosition($o.matrixWorld);for(let ji=0,tm=Tn.length;ji<tm;ji++){let Qo=Tn[ji];if(Qo.texture!==null&&Qo.boundingBox.containsPoint(S))return Qo}return null})(M.state.lightProbeGridArray,De);Ie.lightProbeGrid!==gt&&(Ie.lightProbeGrid=gt,Xi=!0)}if(zh||Se!==Ge){Q.buffers.depth.getReversed()&&Ge.reversedDepth!==!0&&(Ge._reversedDepth=!0,Ge.updateProjectionMatrix()),ot.setValue(B,"projectionMatrix",Ge.projectionMatrix),ot.setValue(B,"viewMatrix",Ge.matrixWorldInverse);let gt=ot.map.cameraPosition;gt!==void 0&&gt.setValue(B,X.setFromMatrixPosition(Ge.matrixWorld)),Ae.logarithmicDepthBuffer&&ot.setValue(B,"logDepthBufFC",2/(Math.log(Ge.far+1)/Math.LN2)),(Pe.isMeshPhongMaterial||Pe.isMeshToonMaterial||Pe.isMeshLambertMaterial||Pe.isMeshBasicMaterial||Pe.isMeshStandardMaterial||Pe.isShaderMaterial)&&ot.setValue(B,"isOrthographic",Ge.isOrthographicCamera===!0),Se!==Ge&&(Se=Ge,Xi=!0,Jo=!0)}if(Ie.needsLights&&(Ti.state.directionalShadowMap.length>0&&ot.setValue(B,"directionalShadowMap",Ti.state.directionalShadowMap,pe),Ti.state.spotShadowMap.length>0&&ot.setValue(B,"spotShadowMap",Ti.state.spotShadowMap,pe),Ti.state.pointShadowMap.length>0&&ot.setValue(B,"pointShadowMap",Ti.state.pointShadowMap,pe)),De.isSkinnedMesh){ot.setOptional(B,De,"bindMatrix"),ot.setOptional(B,De,"bindMatrixInverse");let gt=De.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),ot.setValue(B,"boneTexture",gt.boneTexture,pe))}De.isBatchedMesh&&(ot.setOptional(B,De,"batchingTexture"),ot.setValue(B,"batchingTexture",De._matricesTexture,pe),ot.setOptional(B,De,"batchingIdTexture"),ot.setValue(B,"batchingIdTexture",De._indirectTexture,pe),ot.setOptional(B,De,"batchingColorTexture"),De._colorsTexture!==null&&ot.setValue(B,"batchingColorTexture",De._colorsTexture,pe));let Ko=Rt.morphAttributes;if(Ko.position===void 0&&Ko.normal===void 0&&Ko.color===void 0||Jt.update(De,Rt,ii),(Xi||Ie.receiveShadow!==De.receiveShadow)&&(Ie.receiveShadow=De.receiveShadow,ot.setValue(B,"receiveShadow",De.receiveShadow)),(Pe.isMeshStandardMaterial||Pe.isMeshLambertMaterial||Pe.isMeshPhongMaterial)&&Pe.envMap===null&&at.environment!==null&&(Kt.envMapIntensity.value=at.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=(Nn===null&&(Nn=new rs(Sg,16,16,Bi,Dn),Nn.name="DFG_LUT",Nn.minFilter=wt,Nn.magFilter=wt,Nn.wrapS=di,Nn.wrapT=di,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn)),Xi){if(ot.setValue(B,"toneMappingExposure",N.toneMappingExposure),Ie.needsLights&&(pn=Jo,(bn=Kt).ambientLightColor.needsUpdate=pn,bn.lightProbe.needsUpdate=pn,bn.directionalLights.needsUpdate=pn,bn.directionalLightShadows.needsUpdate=pn,bn.pointLights.needsUpdate=pn,bn.pointLightShadows.needsUpdate=pn,bn.spotLights.needsUpdate=pn,bn.spotLightShadows.needsUpdate=pn,bn.rectAreaLights.needsUpdate=pn,bn.hemisphereLights.needsUpdate=pn),un&&Pe.fog===!0&&Je.refreshFogUniforms(Kt,un),Je.refreshMaterialUniforms(Kt,Pe,$,Ue,M.state.transmissionRenderTarget[Ge.id]),Ie.needsLights&&Ie.lightProbeGrid){let gt=Ie.lightProbeGrid;Kt.probesSH.value=gt.texture,Kt.probesMin.value.copy(gt.boundingBox.min),Kt.probesMax.value.copy(gt.boundingBox.max),Kt.probesResolution.value.copy(gt.resolution)}Cr.upload(B,Uh(Ie),Kt,pe)}var bn,pn;if(Pe.isShaderMaterial&&Pe.uniformsNeedUpdate===!0&&(Cr.upload(B,Uh(Ie),Kt,pe),Pe.uniformsNeedUpdate=!1),Pe.isSpriteMaterial&&ot.setValue(B,"center",De.center),ot.setValue(B,"modelViewMatrix",De.modelViewMatrix),ot.setValue(B,"normalMatrix",De.normalMatrix),ot.setValue(B,"modelMatrix",De.matrixWorld),Pe.uniformsGroups!==void 0){let gt=Pe.uniformsGroups;for(let Tn=0,$o=gt.length;Tn<$o;Tn++){let ji=gt[Tn];Fs.update(ji,ii),Fs.bind(ji,ii)}}return ii})(T,z,j,K,J);Q.setMaterial(K,ue);let ye=j.index,Re=1;if(K.wireframe===!0){if(ye=dt.getWireframeAttribute(j),ye===void 0)return;Re=2}let Ve=j.drawRange,He=j.attributes.position,Ee=Ve.start*Re,We=(Ve.start+Ve.count)*Re;ae!==null&&(Ee=Math.max(Ee,ae.start*Re),We=Math.min(We,(ae.start+ae.count)*Re)),ye!==null?(Ee=Math.max(Ee,0),We=Math.min(We,ye.count)):He!=null&&(Ee=Math.max(Ee,0),We=Math.min(We,He.count));let xt=We-Ee;if(xt<0||xt===1/0)return;let ft;ni.setup(J,K,fe,j,ye);let st=hn;if(ye!==null&&(ft=qe.get(ye),st=Si,st.setIndex(ft)),J.isMesh)K.wireframe===!0?(Q.setLineWidth(K.wireframeLinewidth*xe()),st.setMode(B.LINES)):st.setMode(B.TRIANGLES);else if(J.isLine){let Ge=K.linewidth;Ge===void 0&&(Ge=1),Q.setLineWidth(Ge*xe()),J.isLineSegments?st.setMode(B.LINES):J.isLineLoop?st.setMode(B.LINE_LOOP):st.setMode(B.LINE_STRIP)}else J.isPoints?st.setMode(B.POINTS):J.isSprite&&st.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(he.get("WEBGL_multi_draw"))st.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Ge=J._multiDrawStarts,at=J._multiDrawCounts,Rt=J._multiDrawCount,Pe=ye?qe.get(ye).bytesPerElement:1,De=ie.get(K).currentProgram.getUniforms();for(let un=0;un<Rt;un++)De.setValue(B,"_gl_DrawID",un),st.render(Ge[un]/Pe,at[un])}else if(J.isInstancedMesh)st.renderInstances(Ee,xt,J.count);else if(j.isInstancedBufferGeometry){let Ge=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,at=Math.min(j.instanceCount,Ge);st.renderInstances(Ee,xt,at)}else st.render(Ee,xt)},this.compile=function(T,z,j=null){j===null&&(j=T),M=Ct.get(j),M.init(z),O.push(M),j.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),T!==j&&T.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),M.setupLights();let K=new Set;return T.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let ae=J.material;if(ae)if(Array.isArray(ae))for(let ue=0;ue<ae.length;ue++){let fe=ae[ue];Rh(fe,j,J),K.add(fe)}else Rh(ae,j,J),K.add(ae)}),M=O.pop(),K},this.compileAsync=function(T,z,j=null){let K=this.compile(T,z,j);return new Promise(J=>{function ae(){K.forEach(function(ue){ie.get(ue).currentProgram.isReady()&&K.delete(ue)}),K.size!==0?setTimeout(ae,10):J(T)}he.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let jo=null;function Ph(){bi.stop()}function Ih(){bi.start()}let bi=new Od;function qo(T,z,j,K){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||D.intersectsSprite(T)){K&&Y.setFromMatrixPosition(T.matrixWorld).applyMatrix4(G);let ae=Ot.update(T),ue=T.material;ue.visible&&E.push(T,ae,ue,j,Y.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||D.intersectsObject(T))){let ae=Ot.update(T),ue=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Y.copy(T.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Y.copy(ae.boundingSphere.center)),Y.applyMatrix4(T.matrixWorld).applyMatrix4(G)),Array.isArray(ue)){let fe=ae.groups;for(let ye=0,Re=fe.length;ye<Re;ye++){let Ve=fe[ye],He=ue[Ve.materialIndex];He&&He.visible&&E.push(T,ae,He,j,Y.z,Ve)}}else ue.visible&&E.push(T,ae,ue,j,Y.z,null)}}let J=T.children;for(let ae=0,ue=J.length;ae<ue;ae++)qo(J[ae],z,j,K)}function Lh(T,z,j,K){let{opaque:J,transmissive:ae,transparent:ue}=T;M.setupLightsView(j),I===!0&&tt.setGlobalState(N.clippingPlanes,j),K&&Q.viewport(ge.copy(K)),J.length>0&&Bs(J,z,j),ae.length>0&&Bs(ae,z,j),ue.length>0&&Bs(ue,z,j),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Dh(T,z,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[K.id]===void 0){let He=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[K.id]=new Xt(1,1,{generateMipmaps:!0,type:He?Dn:Yt,minFilter:$n,samples:Math.max(4,Ae.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace})}let J=M.state.transmissionRenderTarget[K.id],ae=K.viewport||ge;J.setSize(ae.z*N.transmissionResolutionScale,ae.w*N.transmissionResolutionScale);let ue=N.getRenderTarget(),fe=N.getActiveCubeFace(),ye=N.getActiveMipmapLevel();N.setRenderTarget(J),N.getClearColor(ce),oe=N.getClearAlpha(),oe<1&&N.setClearColor(16777215,.5),N.clear(),ve&&ut.render(j);let Re=N.toneMapping;N.toneMapping=xn;let Ve=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),M.setupLightsView(K),I===!0&&tt.setGlobalState(N.clippingPlanes,K),Bs(T,j,K),pe.updateMultisampleRenderTarget(J),pe.updateRenderTargetMipmap(J),he.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ee=0,We=z.length;Ee<We;Ee++){let xt=z[Ee],{object:ft,geometry:st,material:Ge,group:at}=xt;if(Ge.side===rn&&ft.layers.test(K.layers)){let Rt=Ge.side;Ge.side=Gt,Ge.needsUpdate=!0,Nh(ft,j,K,st,Ge,at),Ge.side=Rt,Ge.needsUpdate=!0,He=!0}}He===!0&&(pe.updateMultisampleRenderTarget(J),pe.updateRenderTargetMipmap(J))}N.setRenderTarget(ue,fe,ye),N.setClearColor(ce,oe),Ve!==void 0&&(K.viewport=Ve),N.toneMapping=Re}function Bs(T,z,j){let K=z.isScene===!0?z.overrideMaterial:null;for(let J=0,ae=T.length;J<ae;J++){let ue=T[J],{object:fe,geometry:ye,group:Re}=ue,Ve=ue.material;Ve.allowOverride===!0&&K!==null&&(Ve=K),fe.layers.test(j.layers)&&Nh(fe,z,j,ye,Ve,Re)}}function Nh(T,z,j,K,J,ae){T.onBeforeRender(N,z,j,K,J,ae),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(N,z,j,K,T,ae),J.transparent===!0&&J.side===rn&&J.forceSinglePass===!1?(J.side=Gt,J.needsUpdate=!0,N.renderBufferDirect(j,z,K,J,T,ae),J.side=Sr,J.needsUpdate=!0,N.renderBufferDirect(j,z,K,J,T,ae),J.side=rn):N.renderBufferDirect(j,z,K,J,T,ae),T.onAfterRender(N,z,j,K,J,ae)}function zs(T,z,j){z.isScene!==!0&&(z=re);let K=ie.get(T),J=M.state.lights,ae=M.state.shadowsArray,ue=J.state.version,fe=Me.getParameters(T,J.state,ae,z,j,M.state.lightProbeGridArray),ye=Me.getProgramCacheKey(fe),Re=K.programs;K.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,K.fog=z.fog;let Ve=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;K.envMap=et.get(T.envMap||K.environment,Ve),K.envMapRotation=K.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Re===void 0&&(T.addEventListener("dispose",Ch),Re=new Map,K.programs=Re);let He=Re.get(ye);if(He!==void 0){if(K.currentProgram===He&&K.lightsStateVersion===ue)return Oh(T,fe),He}else fe.uniforms=Me.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,j,fe),T.onBeforeCompile(fe,N),He=Me.acquireProgram(fe,ye),Re.set(ye,He),K.uniforms=fe.uniforms;let Ee=K.uniforms;return(T.isShaderMaterial||T.isRawShaderMaterial)&&T.clipping!==!0||(Ee.clippingPlanes=tt.uniform),Oh(T,fe),K.needsLights=(function(We){return We.isMeshLambertMaterial||We.isMeshToonMaterial||We.isMeshPhongMaterial||We.isMeshStandardMaterial||We.isShadowMaterial||We.isShaderMaterial&&We.lights===!0})(T),K.lightsStateVersion=ue,K.needsLights&&(Ee.ambientLightColor.value=J.state.ambient,Ee.lightProbe.value=J.state.probe,Ee.directionalLights.value=J.state.directional,Ee.directionalLightShadows.value=J.state.directionalShadow,Ee.spotLights.value=J.state.spot,Ee.spotLightShadows.value=J.state.spotShadow,Ee.rectAreaLights.value=J.state.rectArea,Ee.ltc_1.value=J.state.rectAreaLTC1,Ee.ltc_2.value=J.state.rectAreaLTC2,Ee.pointLights.value=J.state.point,Ee.pointLightShadows.value=J.state.pointShadow,Ee.hemisphereLights.value=J.state.hemi,Ee.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ee.spotLightMatrix.value=J.state.spotLightMatrix,Ee.spotLightMap.value=J.state.spotLightMap,Ee.pointShadowMatrix.value=J.state.pointShadowMatrix),K.lightProbeGrid=M.state.lightProbeGridArray.length>0,K.currentProgram=He,K.uniformsList=null,He}function Uh(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=Cr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Oh(T,z){let j=ie.get(T);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}bi.setAnimationLoop(function(T){jo&&jo(T)}),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(T){jo=T,mt.setAnimationLoop(T),T===null?bi.stop():bi.start()},mt.addEventListener("sessionstart",Ph),mt.addEventListener("sessionend",Ih),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0)return void be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(V===!0)return;F!==null&&F.renderStart(T,z);let j=mt.enabled===!0&&mt.isPresenting===!0,K=L!==null&&(ne===null||j)&&L.begin(N,ne);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),mt.enabled!==!0||mt.isPresenting!==!0||L!==null&&L.isCompositing()!==!1||(mt.cameraAutoUpdate===!0&&mt.updateCamera(z),z=mt.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,z,ne),M=Ct.get(T,O.length),M.init(z),M.state.textureUnits=pe.getTextureUnits(),O.push(M),G.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),D.setFromProjectionMatrix(G,Xn,z.reversedDepth),A=this.localClippingEnabled,I=tt.init(this.clippingPlanes,A),E=Be.get(T,P.length),E.init(),P.push(E),mt.enabled===!0&&mt.isPresenting===!0){let ae=N.xr.getDepthSensingMesh();ae!==null&&qo(ae,z,-1/0,N.sortObjects)}qo(T,z,0,N.sortObjects),E.finish(),N.sortObjects===!0&&E.sort(R,b,z.reversedDepth),ve=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,ve&&ut.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),I===!0&&tt.beginShadows();let J=M.state.shadowsArray;if(vt.render(J,T,z),I===!0&&tt.endShadows(),(K&&L.hasRenderPass())===!1){let ae=E.opaque,ue=E.transmissive;if(M.setupLights(),z.isArrayCamera){let fe=z.cameras;if(ue.length>0)for(let ye=0,Re=fe.length;ye<Re;ye++)Dh(ae,ue,T,fe[ye]);ve&&ut.render(T);for(let ye=0,Re=fe.length;ye<Re;ye++){let Ve=fe[ye];Lh(E,T,Ve,Ve.viewport)}}else ue.length>0&&Dh(ae,ue,T,z),ve&&ut.render(T),Lh(E,T,z)}ne!==null&&W===0&&(pe.updateMultisampleRenderTarget(ne),pe.updateRenderTargetMipmap(ne)),K&&L.end(N),T.isScene===!0&&T.onAfterRender(N,T,z),ni.resetDefaultState(),de=-1,Se=null,O.pop(),O.length>0?(M=O[O.length-1],pe.setTextureUnits(M.state.textureUnits),I===!0&&tt.setGlobalState(N.clippingPlanes,M.state.camera)):M=null,P.pop(),E=P.length>0?P[P.length-1]:null,F!==null&&F.renderEnd()},this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(T,z,j){let K=ie.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ie.get(T.texture).__webglTexture=z,ie.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){let j=ie.get(T);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,j=0){ne=T,q=z,W=j;let K=null,J=!1,ae=!1;if(T){let ue=ie.get(T);if(ue.__useDefaultFramebuffer!==void 0)return Q.bindFramebuffer(B.FRAMEBUFFER,ue.__webglFramebuffer),ge.copy(T.viewport),_e.copy(T.scissor),te=T.scissorTest,Q.viewport(ge),Q.scissor(_e),Q.setScissorTest(te),void(de=-1);if(ue.__webglFramebuffer===void 0)pe.setupRenderTarget(T);else if(ue.__hasExternalTextures)pe.rebindTextures(T,ie.get(T.texture).__webglTexture,ie.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Re=T.depthTexture;if(ue.__boundDepthTexture!==Re){if(Re!==null&&ie.has(Re)&&(T.width!==Re.image.width||T.height!==Re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(T)}}let fe=T.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(ae=!0);let ye=ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(K=Array.isArray(ye[z])?ye[z][j]:ye[z],J=!0):K=T.samples>0&&pe.useMultisampledRTT(T)===!1?ie.get(T).__webglMultisampledFramebuffer:Array.isArray(ye)?ye[j]:ye,ge.copy(T.viewport),_e.copy(T.scissor),te=T.scissorTest}else ge.copy(C).multiplyScalar($).floor(),_e.copy(U).multiplyScalar($).floor(),te=x;if(j!==0&&(K=Z),Q.bindFramebuffer(B.FRAMEBUFFER,K)&&Q.drawBuffers(T,K),Q.viewport(ge),Q.scissor(_e),Q.setScissorTest(te),J){let ue=ie.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,ue.__webglTexture,j)}else if(ae){let ue=z;for(let fe=0;fe<T.textures.length;fe++){let ye=ie.get(T.textures[fe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+fe,ye.__webglTexture,j,ue)}}else if(T!==null&&j!==0){let ue=ie.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ue.__webglTexture,j)}de=-1},this.readRenderTargetPixels=function(T,z,j,K,J,ae,ue,fe=0){if(!T||!T.isWebGLRenderTarget)return void be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(ye=ye[ue]),ye){Q.bindFramebuffer(B.FRAMEBUFFER,ye);try{let Re=T.textures[fe],Ve=Re.format,He=Re.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe),!Ae.textureFormatReadable(Ve))return void be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(He))return void be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");z>=0&&z<=T.width-K&&j>=0&&j<=T.height-J&&B.readPixels(z,j,K,J,Mn.convert(Ve),Mn.convert(He),ae)}finally{let Re=ne!==null?ie.get(ne).__webglFramebuffer:null;Q.bindFramebuffer(B.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(T,z,j,K,J,ae,ue,fe=0){if(!T||!T.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(ye=ye[ue]),ye){if(z>=0&&z<=T.width-K&&j>=0&&j<=T.height-J){Q.bindFramebuffer(B.FRAMEBUFFER,ye);let Re=T.textures[fe],Ve=Re.format,He=Re.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe),!Ae.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.bufferData(B.PIXEL_PACK_BUFFER,ae.byteLength,B.STREAM_READ),B.readPixels(z,j,K,J,Mn.convert(Ve),Mn.convert(He),0);let We=ne!==null?ie.get(ne).__webglFramebuffer:null;Q.bindFramebuffer(B.FRAMEBUFFER,We);let xt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await sd(B,xt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ae),B.deleteBuffer(Ee),B.deleteSync(xt),ae}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,j=0){let K=Math.pow(2,-j),J=Math.floor(T.image.width*K),ae=Math.floor(T.image.height*K),ue=z!==null?z.x:0,fe=z!==null?z.y:0;pe.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,ue,fe,J,ae),Q.unbindTexture()},this.copyTextureToTexture=function(T,z,j=null,K=null,J=0,ae=0){let ue,fe,ye,Re,Ve,He,Ee,We,xt,ft=T.isCompressedTexture?T.mipmaps[ae]:T.image;if(j!==null)ue=j.max.x-j.min.x,fe=j.max.y-j.min.y,ye=j.isBox3?j.max.z-j.min.z:1,Re=j.min.x,Ve=j.min.y,He=j.isBox3?j.min.z:0;else{let Sn=Math.pow(2,-J);ue=Math.floor(ft.width*Sn),fe=Math.floor(ft.height*Sn),ye=T.isDataArrayTexture?ft.depth:T.isData3DTexture?Math.floor(ft.depth*Sn):1,Re=0,Ve=0,He=0}K!==null?(Ee=K.x,We=K.y,xt=K.z):(Ee=0,We=0,xt=0);let st=Mn.convert(z.format),Ge=Mn.convert(z.type),at;z.isData3DTexture?(pe.setTexture3D(z,0),at=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(pe.setTexture2DArray(z,0),at=B.TEXTURE_2D_ARRAY):(pe.setTexture2D(z,0),at=B.TEXTURE_2D),Q.activeTexture(B.TEXTURE0),Q.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),Q.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Q.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);let Rt=Q.getParameter(B.UNPACK_ROW_LENGTH),Pe=Q.getParameter(B.UNPACK_IMAGE_HEIGHT),De=Q.getParameter(B.UNPACK_SKIP_PIXELS),un=Q.getParameter(B.UNPACK_SKIP_ROWS),Yo=Q.getParameter(B.UNPACK_SKIP_IMAGES);Q.pixelStorei(B.UNPACK_ROW_LENGTH,ft.width),Q.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ft.height),Q.pixelStorei(B.UNPACK_SKIP_PIXELS,Re),Q.pixelStorei(B.UNPACK_SKIP_ROWS,Ve),Q.pixelStorei(B.UNPACK_SKIP_IMAGES,He);let Gs=T.isDataArrayTexture||T.isData3DTexture,Nr=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){let Sn=ie.get(T),Hi=ie.get(z),Fn=ie.get(Sn.__renderTarget),Zo=ie.get(Hi.__renderTarget);Q.bindFramebuffer(B.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,Zo.__webglFramebuffer);for(let Wi=0;Wi<ye;Wi++)Gs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ie.get(T).__webglTexture,J,He+Wi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ie.get(z).__webglTexture,ae,xt+Wi)),B.blitFramebuffer(Re,Ve,ue,fe,Ee,We,ue,fe,B.DEPTH_BUFFER_BIT,B.NEAREST);Q.bindFramebuffer(B.READ_FRAMEBUFFER,null),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||T.isRenderTargetTexture||ie.has(T)){let Sn=ie.get(T),Hi=ie.get(z);Q.bindFramebuffer(B.READ_FRAMEBUFFER,H),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,k);for(let Fn=0;Fn<ye;Fn++)Gs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Sn.__webglTexture,J,He+Fn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Sn.__webglTexture,J),Nr?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Hi.__webglTexture,ae,xt+Fn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Hi.__webglTexture,ae),J!==0?B.blitFramebuffer(Re,Ve,ue,fe,Ee,We,ue,fe,B.COLOR_BUFFER_BIT,B.NEAREST):Nr?B.copyTexSubImage3D(at,ae,Ee,We,xt+Fn,Re,Ve,ue,fe):B.copyTexSubImage2D(at,ae,Ee,We,Re,Ve,ue,fe);Q.bindFramebuffer(B.READ_FRAMEBUFFER,null),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Nr?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(at,ae,Ee,We,xt,ue,fe,ye,st,Ge,ft.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(at,ae,Ee,We,xt,ue,fe,ye,st,ft.data):B.texSubImage3D(at,ae,Ee,We,xt,ue,fe,ye,st,Ge,ft):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ae,Ee,We,ue,fe,st,Ge,ft.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ae,Ee,We,ft.width,ft.height,st,ft.data):B.texSubImage2D(B.TEXTURE_2D,ae,Ee,We,ue,fe,st,Ge,ft);Q.pixelStorei(B.UNPACK_ROW_LENGTH,Rt),Q.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pe),Q.pixelStorei(B.UNPACK_SKIP_PIXELS,De),Q.pixelStorei(B.UNPACK_SKIP_ROWS,un),Q.pixelStorei(B.UNPACK_SKIP_IMAGES,Yo),ae===0&&z.generateMipmaps&&B.generateMipmap(at),Q.unbindTexture()},this.initRenderTarget=function(T){ie.get(T).__webglFramebuffer===void 0&&pe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?pe.setTextureCube(T,0):T.isData3DTexture?pe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?pe.setTexture2DArray(T,0):pe.setTexture2D(T,0),Q.unbindTexture()},this.resetState=function(){q=0,W=0,ne=null,Q.reset(),ni.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}};var Ce={FLOOR:0,CONCRETE:1,METAL:2,CRATE:3,BRICK:4},Oo={[Ce.CONCRETE]:2.6,[Ce.METAL]:2.6,[Ce.BRICK]:2.6,[Ce.CRATE]:1.15},Fy={[Ce.CONCRETE]:7040872,[Ce.METAL]:5924466,[Ce.CRATE]:9071164,[Ce.BRICK]:8013368},Xe=24;function bg(){let i=[];for(let n=0;n<Xe;n++)i.push(new Array(Xe).fill(Ce.FLOOR));let e=(n,r,s,a,o)=>{for(let c=r;c<=a;c++)for(let l=n;l<=s;l++)l>=0&&l<Xe&&c>=0&&c<Xe&&(i[c][l]=o)},t=(n,r,s,a,o,c)=>{for(let l=n;l<=s;l++)i[r][l]=o,i[a][l]=o;for(let l=r;l<=a;l++)i[l][n]=o,i[l][s]=o;c.forEach(([l,h])=>{i[h][l]=Ce.FLOOR})};return e(0,0,Xe-1,0,Ce.CONCRETE),e(0,Xe-1,Xe-1,Xe-1,Ce.CONCRETE),e(0,0,0,Xe-1,Ce.CONCRETE),e(Xe-1,0,Xe-1,Xe-1,Ce.CONCRETE),t(3,3,7,7,Ce.CONCRETE,[[5,3],[5,7]]),i[5][5]=Ce.BRICK,t(16,3,20,7,Ce.METAL,[[18,3],[18,7]]),i[5][18]=Ce.BRICK,t(3,16,7,20,Ce.METAL,[[5,16],[5,20]]),i[18][5]=Ce.BRICK,t(16,16,20,20,Ce.CONCRETE,[[18,16],[18,20]]),i[18][18]=Ce.BRICK,i[10][10]=Ce.CRATE,i[10][13]=Ce.CRATE,i[13][10]=Ce.CRATE,i[13][13]=Ce.CRATE,i[9][12]=Ce.CRATE,i[14][12]=Ce.CRATE,i[12][9]=Ce.CRATE,i[12][14]=Ce.CRATE,e(9,6,9,7,Ce.CONCRETE),e(14,6,14,7,Ce.CONCRETE),e(9,16,9,17,Ce.CONCRETE),e(14,16,14,17,Ce.CONCRETE),[[12,3],[12,20],[3,12],[20,12]].forEach(([n,r])=>{i[r][n]=Ce.BRICK}),i}var ki=bg();function Tg(i,e){let t=Math.floor(i),n=Math.floor(e);return t<0||n<0||t>=Xe||n>=Xe?Ce.CONCRETE:ki[n][t]}function an(i,e){return Tg(i,e)!==Ce.FLOOR}function Hd(i,e,t,n){let r=t-i,s=n-e,a=Math.hypot(r,s),o=Math.ceil(a*4);for(let c=1;c<o;c++){let l=c/o;if(an(i+r*l,e+s*l))return!1}return!0}var Uo=[{x:2.5,z:2.5},{x:21.5,z:2.5},{x:2.5,z:21.5},{x:21.5,z:21.5},{x:12,z:2.5},{x:2.5,z:12},{x:21.5,z:12},{x:12,z:21.5}],Wd=[{x:5,z:4,type:"health"},{x:19,z:5,type:"ammo"},{x:6,z:18,type:"ammo"},{x:18,z:17,type:"health"},{x:12,z:7.5,type:"smoke"},{x:12,z:16.5,type:"smoke"},{x:7.5,z:12,type:"ammo"},{x:16.5,z:12,type:"health"}];function Eg(i,e){let t=Uo[0],n=-1;for(let r of Uo){let s=Math.hypot(r.x-i,r.z-e);s>n&&(n=s,t=r)}return t}function Ps(i,e,t,n=40){for(let r=0;r<n;r++){let s=1.5+Math.random()*(Xe-3),a=1.5+Math.random()*(Xe-3);if(!vi(s,a,.35)&&!(Math.hypot(s-i,a-e)<t))return{x:s,z:a}}return Eg(i,e)}function vi(i,e,t){return an(i-t,e)||an(i+t,e)||an(i,e-t)||an(i,e+t)||an(i-t*.7,e-t*.7)||an(i+t*.7,e+t*.7)||an(i-t*.7,e+t*.7)||an(i+t*.7,e-t*.7)}function xi(i,e,t,n){vi(e,i.z,n)||(i.x=e),vi(i.x,t,n)||(i.z=t)}function Xd(){for(let i=0;i<12;i++){let e=2+Math.random()*(Xe-4),t=2+Math.random()*(Xe-4);if(!an(e,t))return{x:e,z:t}}return{x:12,z:12}}function Is(i,e,t,n){let r=document.createElement("canvas");r.width=r.height=i;let s=r.getContext("2d");s.fillStyle=e,s.fillRect(0,0,i,i);let a=s.getImageData(0,0,i,i),o=a.data;for(let c=0;c<o.length;c+=4){let l=(Math.random()-.5)*t;o[c]=Math.min(255,Math.max(0,o[c]+l)),o[c+1]=Math.min(255,Math.max(0,o[c+1]+l)),o[c+2]=Math.min(255,Math.max(0,o[c+2]+l))}return s.putImageData(a,0,0),n&&n(s,i),r}function Ls(i,e=1,t=1){let n=new Zn(i);return n.colorSpace=pt,n.wrapS=Ii,n.wrapT=Ii,n.repeat.set(e,t),n.magFilter=wt,n.minFilter=$n,n.generateMipmaps=!0,n}function qd(){let i=Is(128,"#6b6f68",22,(e,t)=>{e.strokeStyle="rgba(0,0,0,0.15)",e.lineWidth=1;for(let n=0;n<4;n++){let r=t/4*n+4;e.beginPath(),e.moveTo(0,r),e.lineTo(t,r),e.stroke()}});return Ls(i)}function Yd(){let i=Is(128,"#5a6672",14,(e,t)=>{e.strokeStyle="rgba(15,18,20,0.5)",e.lineWidth=2;for(let n=1;n<3;n++){let r=t/3*n;e.beginPath(),e.moveTo(0,r),e.lineTo(t,r),e.stroke()}e.fillStyle="rgba(20,22,24,0.6)";for(let n=0;n<3;n++)for(let r=0;r<3;r++)e.beginPath(),e.arc(12+r*(t-24)/2,12+n*(t-24)/2,2.4,0,Math.PI*2),e.fill()});return Ls(i)}function Zd(){let i=Is(128,"#8a6a3c",18,(e,t)=>{e.strokeStyle="rgba(50,32,14,0.55)",e.lineWidth=3,e.strokeRect(6,6,t-12,t-12),e.beginPath(),e.moveTo(6,t/2),e.lineTo(t-6,t/2),e.stroke();for(let n=0;n<5;n++){let r=10+n*((t-20)/4);e.strokeStyle="rgba(50,32,14,0.25)",e.lineWidth=1,e.beginPath(),e.moveTo(r,8),e.lineTo(r,t-8),e.stroke()}});return Ls(i)}function Jd(){let i=Is(128,"#7a4638",16,(e,t)=>{e.strokeStyle="rgba(40,20,14,0.5)",e.lineWidth=2;let n=6;for(let r=0;r<=n;r++){let s=t/n*r;e.beginPath(),e.moveTo(0,s),e.lineTo(t,s),e.stroke()}for(let r=0;r<n;r++){let s=t/n*r,a=r%2*(t/8);for(let o=a;o<t;o+=t/4)e.beginPath(),e.moveTo(o,s),e.lineTo(o,s+t/n),e.stroke()}});return Ls(i)}var jd=24;function Kd(){let i=Is(128,"#33362f",12,(e,t)=>{e.strokeStyle="rgba(0,0,0,0.12)";for(let n=0;n<6;n++)e.beginPath(),e.moveTo(Math.random()*t,0),e.lineTo(Math.random()*t,t),e.stroke()});return Ls(i,jd,jd)}function $d(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(128/2,128/2,128*.05,128/2,128/2,128*.5);n.addColorStop(0,"rgba(220,220,215,0.9)"),n.addColorStop(.6,"rgba(200,200,195,0.45)"),n.addColorStop(1,"rgba(200,200,195,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new Zn(e);return r.colorSpace=pt,r}function Ds(i){let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d"),r=n.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);r.addColorStop(0,i),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,64,64);let s=new Zn(t);return s.colorSpace=pt,s}function Qd(i){let e=new Do({canvas:i,antialias:!1,powerPreference:"high-performance",alpha:!1});return e.setPixelRatio(Math.min(window.devicePixelRatio||1,1)),e.outputColorSpace=pt,e.shadowMap.enabled=!1,e}function ep(){let i=new es;return i.background=new Ne(856592),i.fog=new Qr(856592,6,21),i}function tp(i){let e=new Nt(75,i,.05,40);return e.rotation.order="YXZ",e}function np(i){let e=new Ms(9414832,1709842,1.15);i.add(e);let t=new yr(16773336,1.3);t.position.set(8,14,5),t.castShadow=!1,i.add(t);let n=new yr(8425632,.4);n.position.set(-6,8,-8),i.add(n)}var lh={};function Cg(i){return lh[i]||(lh[i]=new Mt(1,Oo[i],1)),lh[i]}function Rg(i){switch(i){case Ce.CONCRETE:return qd();case Ce.METAL:return Yd();case Ce.CRATE:return Zd();case Ce.BRICK:return Jd();default:return null}}function ip(i){let e={};for(let c=0;c<Xe;c++)for(let l=0;l<Xe;l++){let h=ki[c][l];h!==Ce.FLOOR&&(e[h]=(e[h]||0)+1)}let t=[],n=new yt;for(let c of Object.keys(e)){let l=Number(c),h=e[l],m=new It({map:Rg(l),color:16777215}),d=new as(Cg(l),m,h);d.userData.isWall=!0;let u=0;for(let g=0;g<Xe;g++)for(let p=0;p<Xe;p++)ki[g][p]===l&&(n.position.set(p+.5,Oo[l]/2,g+.5),n.rotation.set(0,0,0),n.updateMatrix(),d.setMatrixAt(u,n.matrix),u++);d.instanceMatrix.needsUpdate=!0,i.add(d),t.push(d)}let r=new It({map:Kd(),color:16777215}),s=new Ke(new Kn(Xe,Xe),r);s.rotation.x=-Math.PI/2,s.position.set(Xe/2,0,Xe/2),i.add(s);let a=new It({color:1844256,side:rn}),o=new Ke(new Kn(6,6),a);return o.rotation.x=Math.PI/2,o.position.set(12,Oo[Ce.METAL],12),i.add(o),{wallMeshes:t,floor:s}}function rp(i,e){function t(){let n=window.innerWidth,r=window.innerHeight;i.setSize(n,r),e.aspect=n/r,e.updateProjectionMatrix()}window.addEventListener("resize",t),t()}var kt={rifle:{name:"ASSAULT RIFLE",auto:!0,damage:20,fireRate:120,mag:30,reserveMax:150,reloadTime:1500,spread:.018,moveSpreadMul:1.8,pellets:1,falloff:!1,color:3820090},smg:{name:"SMG",auto:!0,damage:13,fireRate:75,mag:35,reserveMax:175,reloadTime:1300,spread:.032,moveSpreadMul:1.4,pellets:1,falloff:!1,color:4539455},shotgun:{name:"SHOTGUN",auto:!1,damage:16,fireRate:700,mag:6,reserveMax:30,reloadTime:2e3,spread:.11,moveSpreadMul:1.3,pellets:8,falloff:!0,falloffRange:8,color:4864554},sniper:{name:"SNIPER",auto:!1,damage:100,fireRate:1150,mag:5,reserveMax:25,reloadTime:1900,spread:.004,moveSpreadMul:4,scopeSpread:3e-4,pellets:1,falloff:!1,color:3027758}},ln=["rifle","smg","shotgun","sniper"],sp={head:2.2,body:1,limb:.68};function on(i,e,t,n,r=0,s=0,a=0){let o=new Ke(new Mt(i,e,t),new It({color:n}));return o.position.set(r,s,a),o}function Fo(i,e,t,n,r,s,a=Math.PI/2){let o=new Ke(new vn(i,i,e,8),new It({color:t}));return o.position.set(n,r,s),o.rotation.x=a,o}function Ig(){let i=new Pt;return i.add(on(.07,.09,.55,3820090,0,0,-.1)),i.add(Fo(.018,.35,1842714,0,.01,-.5)),i.add(on(.06,.16,.09,2896682,0,-.11,.12)),i.add(on(.05,.07,.18,2304035,.005,-.02,.28)),i.userData.muzzleZ=-.68,i}function Lg(){let i=new Pt;return i.add(on(.065,.08,.34,4539455,0,0,-.02)),i.add(Fo(.016,.2,1842714,0,.005,-.32)),i.add(on(.05,.14,.07,3552559,0,-.1,.1)),i.add(on(.045,.16,.05,2828838,0,-.14,-.14)),i.userData.muzzleZ=-.42,i}function Dg(){let i=new Pt;return i.add(on(.075,.08,.5,4864554,0,0,-.05)),i.add(Fo(.026,.4,2367514,0,-.01,-.42)),i.add(on(.06,.05,.28,3089948,0,-.06,-.3)),i.add(on(.065,.17,.1,3484706,0,-.12,.15)),i.userData.muzzleZ=-.62,i}function Ng(){let i=new Pt;return i.add(on(.06,.075,.72,3027758,0,0,-.15)),i.add(Fo(.015,.42,1513754,0,.005,-.65)),i.add(on(.045,.045,.32,1908765,0,.075,-.2)),i.add(on(.055,.15,.09,2237983,0,-.11,.18)),i.userData.muzzleZ=-.85,i}var Ug={rifle:Ig,smg:Lg,shotgun:Dg,sniper:Ng};function ap(){let i=new Pt;i.position.set(.22,-.2,-.42);let e={};for(let t of ln){let n=Ug[t]();n.visible=!1,i.add(n),e[t]=n}return{root:i,weapons:e}}function op(i){let e=new _n({map:i,color:16765578,transparent:!0,blending:Ui,depthWrite:!1,opacity:0}),t=new In(e);return t.scale.set(.22,.22,.22),t}var lp=new w;function Bo(i,e){if(e<=0)return i.clone();lp.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();let t=(Math.random()-.5)*2*e;return i.clone().applyAxisAngle(lp,t).normalize()}function cp(i){let e=Math.max(0,Math.floor(i/1e3));return String(Math.floor(e/60)).padStart(2,"0")+":"+String(e%60).padStart(2,"0")}var ct=null,ch=null;function hp(){if(ct)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;ct=new i;let e=ct.sampleRate*.5;ch=ct.createBuffer(1,e,ct.sampleRate);let t=ch.getChannelData(0);for(let n=0;n<e;n++)t[n]=Math.random()*2-1}function Ns({duration:i=.08,freq:e=1200,q:t=.8,gain:n=.35,type:r="bandpass"}){if(!ct)return;let s=ct.createBufferSource();s.buffer=ch;let a=ct.createBiquadFilter();a.type=r,a.frequency.value=e,a.Q.value=t;let o=ct.createGain();o.gain.setValueAtTime(n,ct.currentTime),o.gain.exponentialRampToValueAtTime(.001,ct.currentTime+i),s.connect(a),a.connect(o),o.connect(ct.destination),s.start(),s.stop(ct.currentTime+i+.02)}function ti({freq:i=900,freq2:e=null,duration:t=.06,gain:n=.2,type:r="sine"}){if(!ct)return;let s=ct.createOscillator();s.type=r,s.frequency.setValueAtTime(i,ct.currentTime),e&&s.frequency.exponentialRampToValueAtTime(e,ct.currentTime+t);let a=ct.createGain();a.gain.setValueAtTime(n,ct.currentTime),a.gain.exponentialRampToValueAtTime(.001,ct.currentTime+t),s.connect(a),a.connect(ct.destination),s.start(),s.stop(ct.currentTime+t+.02)}function On(i,e){if(!ct)return;let t=e?.4:1,n=e?.6:1;switch(i){case"rifle":Ns({duration:.09,freq:1400*n,gain:.32*t});break;case"smg":Ns({duration:.06,freq:1700*n,gain:.26*t});break;case"shotgun":Ns({duration:.18,freq:500*n,q:.5,gain:.4*t}),ti({freq:90,duration:.15,gain:.25*t,type:"sine"});break;case"sniper":Ns({duration:.05,freq:2600*n,q:1.2,gain:.4*t,type:"highpass"}),ti({freq:140,duration:.28,gain:.3*t,type:"sine"});break;case"hitmarker":ti({freq:1900,duration:.045,gain:.22});break;case"kill":ti({freq:900,freq2:1500,duration:.14,gain:.25});break;case"reload":ti({freq:260,duration:.04,gain:.18,type:"square"}),setTimeout(()=>ti({freq:320,duration:.05,gain:.16,type:"square"}),160);break;case"throw":Ns({duration:.2,freq:800,q:.4,gain:.12,type:"lowpass"});break;case"pickup":ti({freq:700,freq2:1050,duration:.12,gain:.2});break;case"jump":ti({freq:220,freq2:340,duration:.09,gain:.12});break;case"land":ti({freq:160,duration:.07,gain:.16,type:"triangle"});break}}var dh=.3,pp=1.62,Fg=3.1,Bg=1.55,zg=4.2,Gg=11.5,mp=.5,kg=9,Vg=.11,dp=.14,Hg=75,Wg=20,Vi=new w,hh=new w,fp=new w(0,1,0),Us=new w,Hy=new w;function ph(){let i={};for(let e of ln){let t=kt[e];i[e]={mag:t.mag,reserve:Math.floor(t.reserveMax*.6)}}return i.rifle.mag=kt.rifle.mag,i}function gp(i){return{x:i.x,z:i.z,vy:0,jumpY:0,grounded:!0,_spaceHeld:!1,lean:0,leanTarget:0,eyeY:pp,health:100,maxHealth:100,alive:!0,respawnAt:0,spawnProtectedUntil:0,weapon:"rifle",loadout:ph(),smoke:3,reloading:!1,reloadEndAt:0,lastFireAt:0,moving:!1,sprinting:!1,scoped:!1,_scopedPrev:!1,viewKick:0,bobPhase:0,kills:0,deaths:0,_firedThisClick:!1}}function _p(i,e,t,n){i.rotation.y-=e*n,i.rotation.x-=t*n,i.rotation.x=Math.max(-1.25,Math.min(1.25,i.rotation.x))}function Xg(i,e){return e.set(0,0,-1).applyAxisAngle(fp,i.rotation.y),e}function uh(i,e){return e.set(1,0,0).applyAxisAngle(fp,i.rotation.y),e}function vp(i,e,t,n,r){let s=Xg(e,Vi),a=uh(e,hh),o=0,c=0;n.KeyW&&(o+=s.x,c+=s.z),n.KeyS&&(o-=s.x,c-=s.z),n.KeyA&&(o-=a.x,c-=a.z),n.KeyD&&(o+=a.x,c+=a.z);let l=Math.hypot(o,c);if(i.moving=l>.01,i.sprinting=i.moving&&(n.ShiftLeft||n.ShiftRight)&&!r,i.moving){o/=l,c/=l;let u=Fg*(i.sprinting?Bg:1)*t;xi(i,i.x+o*u,i.z+c*u,dh),i.bobPhase+=t*(i.sprinting?14:9)}n.Space&&i.grounded&&!i._spaceHeld&&(i.vy=zg,i.grounded=!1,i._spaceHeld=!0,On("jump")),n.Space||(i._spaceHeld=!1),i.vy-=Gg*t,i.jumpY+=i.vy*t,i.jumpY<=0&&(i.jumpY=0,i.grounded||On("land"),i.vy=0,i.grounded=!0);let h=0;n.KeyQ&&(h-=1),n.KeyE&&(h+=1),i.leanTarget=h*mp,i.lean+=(i.leanTarget-i.lean)*Math.min(1,t*kg);let m=uh(e,hh),d=i.lean;if(vi(i.x+m.x*d,i.z+m.z*d,dp)){let u=0,g=d;for(let p=0;p<6;p++){let v=(u+g)/2;vi(i.x+m.x*v,i.z+m.z*v,dp)?g=v:u=v}d=u}i.lean=d,i.scoped=r&&i.weapon==="sniper",i.scoped!==i._scopedPrev&&(e.fov=i.scoped?Wg:Hg,e.updateProjectionMatrix(),i._scopedPrev=i.scoped),i.viewKick*=.85}function xp(i,e){let t=uh(e,hh),n=i.moving&&i.grounded?Math.sin(i.bobPhase)*.035:0;i.eyeY=pp+i.jumpY+n,e.position.set(i.x+t.x*i.lean,i.eyeY,i.z+t.z*i.lean),e.rotation.z=-(i.lean/mp)*Vg}function Pr(i,e,t){if(!(i.weapon===e||!i.alive)){i.reloading&&(i.reloading=!1),i.weapon=e;for(let n of ln)t.weapons[n].visible=n===e}}function zo(i){if(!i.alive||i.reloading)return;let e=kt[i.weapon],t=i.loadout[i.weapon];t.mag>=e.mag||t.reserve<=0||(i.reloading=!0,i.reloadEndAt=performance.now()+e.reloadTime,On("reload"))}function jg(i){let e=kt[i.weapon],t=i.loadout[i.weapon],n=e.mag-t.mag,r=Math.min(n,t.reserve);t.mag+=r,t.reserve-=r,i.reloading=!1}function yp(i,e){i.reloading&&e>=i.reloadEndAt&&jg(i)}function Mp(i,e,t,n,r,s,a,o){let c=kt[i.weapon],l=i.loadout[i.weapon];if(!i.alive||i.reloading)return!1;if(l.mag<=0)return zo(i),!1;if(a-i.lastFireAt<c.fireRate)return!1;i.lastFireAt=a,l.mag--;let h=o.rightHeld,m=c.spread*(i.moving?c.moveSpreadMul:1);h&&(m*=i.weapon==="sniper"?.05:.55),i.weapon==="sniper"&&h&&(m=c.scopeSpread),e.getWorldPosition(Us),e.getWorldDirection(Vi);let d=c.pellets||1,u=n.concat(r);for(let g=0;g<d;g++){let p=Bo(Vi,m);t.set(Us,p),t.far=40,t.near=.01;let v=t.intersectObjects(u,!1);if(v.length===0)continue;let f=v[0],_=f.point;if(s.spawnTracer(Us.clone(),_.clone(),!1),f.object.userData.botRef){let y=f.object.userData.zone||"body",S=c.damage*(sp[y]||1);c.falloff&&(S*=Math.max(.35,1-f.distance/c.falloffRange)),o.onDamageBot(f.object.userData.botRef,S,y),s.spawnImpact(_,!0,!1)}else s.spawnImpact(_,!1,!1)}return i.viewKick=Math.min(1,i.viewKick+(c.pellets>1?.9:.45)),On(i.weapon),l.mag<=0&&zo(i),!0}function Sp(i,e,t,n,r){if(!i.alive||i.smoke<=0)return;i.smoke--;let s=4.5;e.getWorldPosition(Us),e.getWorldDirection(Vi),t.set(Us,Vi),t.far=s,t.near=.01;let a=t.intersectObjects(n,!1),o=Math.min(s,a.length?a[0].distance-.3:s),c=i.x+Vi.x*o,l=i.z+Vi.z*o;r.spawnGrenadeArc(i.x,i.z,c,l),On("throw")}function bp(i,e,t,n,r,s){i.alive&&(i.health-=e,n(),i.health<=0&&(i.health=0,i.alive=!1,i.respawnAt=performance.now()+3e3,i.deaths++,r(t+" ELIMINATED YOU","death"),s(!0)))}var Lr=.3,fh=1.35,Yg=3.1,Zg=4e3,Jg=1,Tp=["rifle","smg","shotgun"];function Ep(i,e){let t=Ps(e.x,e.z,6),n=Jg++;return{id:n,name:"BOT-"+String(n).padStart(2,"0"),x:t.x,z:t.z,health:i.botHealth,maxHealth:i.botHealth,alive:!0,respawnAt:0,state:"patrol",waypoint:null,lastKnown:null,searchUntil:0,combatUntil:0,combatMode:"open",coverSpot:null,coverPeekSpot:null,modeUntil:0,aimYaw:Math.random()*Math.PI*2,engagedAt:0,weapon:Tp[Math.floor(Math.random()*Tp.length)],lastFireAt:0,strafeDir:Math.random()<.5?1:-1,strafeChangeAt:0,hitFlashT:0,kills:0,deaths:0,animPhase:Math.random()*10,mesh:null,deathAnim:null}}function Kg(i,e){let t=Ps(e.x,e.z,6);i.x=t.x,i.z=t.z,i.health=i.maxHealth,i.alive=!0,i.state="patrol",i.waypoint=null,i.deathAnim=null,i.combatMode="open",i.coverSpot=null,i.combatUntil=0,i.mesh&&(i.mesh.group.visible=!0,i.mesh.group.rotation.set(0,0,0),i.mesh.group.position.set(i.x,0,i.z),gh(i.mesh,1))}function $g(){let i=document.createElement("canvas");i.width=64,i.height=10;let e=i.getContext("2d"),t=new Zn(i);t.colorSpace=pt;let n=new _n({map:t,depthTest:!0,transparent:!0}),r=new In(n);return r.scale.set(.5,.08,1),r.position.set(0,1.75,0),{sprite:r,canvas:i,ctx:e,tex:t}}function gh(i,e){let{ctx:t,canvas:n,tex:r}=i.healthBar;t.clearRect(0,0,n.width,n.height),t.fillStyle="rgba(0,0,0,0.55)",t.fillRect(0,0,n.width,n.height),t.fillStyle=e>.4?"#6fbf3f":"#e2432c",t.fillRect(1,1,(n.width-2)*Math.max(0,e),n.height-2),r.needsUpdate=!0}function Os(i,e,t,n,r,s){let a=new It({color:e}),o=new Ke(i,a);return o.position.set(t,n,r),o.userData.zone=s,o.userData.baseColor=e,o}function wp(){let i=new Pt,e=Os(new Mt(.34,.72,.24),3026728,0,.36,0,"limb"),t=Os(new Mt(.42,.5,.26),4870720,0,.97,0,"body"),n=Os(new Mt(.14,.46,.16),4870720,-.26,.95,0,"limb"),r=Os(new Mt(.14,.46,.16),4870720,.26,.95,0,"limb"),s=Os(new fi(.16,10,8),10254940,0,1.38,0,"head");i.add(e,t,n,r,s);let a=new It({color:1842202}),o=new Ke(new Mt(.08,.08,.42),a);o.position.set(.32,.95,.14),i.add(o);let c=$g();return i.add(c.sprite),{group:i,head:s,torso:t,legs:e,armL:n,armR:r,gun:o,hitParts:[s,t,e,n,r],healthBar:c}}function Ap(i,e){for(let t of i.hitParts)t.userData.botRef=e}function Cp(i,e){let t=i.mesh;if(!t)return;if(i.deathAnim){let r=Math.min(1,(performance.now()-i.deathAnim.t0)/450);t.group.rotation.z=r*(Math.PI/2.1),t.group.position.y=-r*.5,r>=1&&(t.group.visible=!1);return}if(!i.alive)return;t.group.position.set(i.x,0,i.z),i.moving&&(i.animPhase+=e*.006);let n=i.moving?Math.abs(Math.sin(i.animPhase))*.05:0;if(t.group.position.y=n,i.hitFlashT>0){i.hitFlashT-=e;for(let r of t.hitParts)r.material.color.setHex(16777215)}else for(let r of t.hitParts)r.material.color.setHex(r.userData.baseColor)}function Ir(i,e,t){if(!i.mesh)return;let n=e-i.x,r=t-i.z;Math.hypot(n,r)<.01||(i.mesh.group.rotation.y=Math.atan2(-n,-r))}function Qg(i,e,t){let n=null,r=1/0,s=[1.5,2.5,3.5,4.5],a=10;for(let m of s)for(let d=0;d<a;d++){let u=d/a*Math.PI*2,g=i.x+Math.cos(u)*m,p=i.z+Math.sin(u)*m;if(an(g,p)||vi(g,p,Lr)||Hd(g,p,e,t))continue;let v=m;v<r&&(r=v,n={x:g,z:p})}if(!n)return null;let o=e-n.x,c=t-n.z,l=Math.hypot(o,c)||1,h={x:n.x+o/l*1.1,z:n.z+c/l*1.1};return{hide:n,peek:h}}function Rp(i,e,t){let n=e/1e3;t._dt=n;let r=t.player;if(!i.alive){t.now>=i.respawnAt&&Kg(i,{x:r.x,z:r.z});return}let s=r.x-i.x,a=r.z-i.z,o=Math.hypot(s,a),c=!1;if(r.alive&&o<16){let m=new w(i.x,fh,i.z),u=new w(r.x,r.eyeY,r.z).clone().sub(m),g=u.length();if(u.normalize(),t.raycaster.set(m,u),t.raycaster.far=g-.05,t.raycaster.near=.01,c=t.raycaster.intersectObjects(t.wallMeshes,!1).length===0,c&&t.smokes){for(let v of t.smokes)if(v.active&&t0(i.x,i.z,r.x,r.z,v.x,v.z)<v.radius){c=!1;break}}}c&&(i.combatUntil=t.now+Zg),t.now<i.combatUntil&&r.alive?i.state!=="attack"&&(i.state="attack",i.combatMode="open",i.modeUntil=0,i.engagedAt=t.now):i.state==="attack"?(i.state="search",i.searchUntil=t.now+1800,i.lastKnown={x:r.x,z:r.z}):i.state==="search"&&t.now>i.searchUntil&&(i.state="patrol",i.waypoint=null);let h=Yg*.82*t.diffCfg.speedMul*n;if(i.moving=!1,i.state==="patrol"){(!i.waypoint||Math.hypot(i.waypoint.x-i.x,i.waypoint.z-i.z)<.4)&&(i.waypoint=Xd());let m=i.waypoint.x-i.x,d=i.waypoint.z-i.z,u=Math.hypot(m,d)||1;xi(i,i.x+m/u*h*.6,i.z+d/u*h*.6,Lr),Ir(i,i.waypoint.x,i.waypoint.z),i.moving=!0}else if(i.state==="search"){let m=i.lastKnown.x-i.x,d=i.lastKnown.z-i.z,u=Math.hypot(m,d)||1;u>.3&&(xi(i,i.x+m/u*h,i.z+d/u*h,Lr),i.moving=!0),Ir(i,i.lastKnown.x,i.lastKnown.z)}else i.state==="attack"&&e0(i,r,o,c,h,t)}function e0(i,e,t,n,r,s){let a=s.now;if(t<2.6&&i.combatMode!=="open"&&(i.combatMode="open",i.modeUntil=0),i.combatMode==="open"){Ir(i,e.x,e.z);let o=i.weapon==="shotgun"?3.2:i.weapon==="smg"?5:7.5,c=0,l=0,h=(e.x-i.x)/(t||1),m=(e.z-i.z)/(t||1);t<o-1?(c=-h,l=-m):t>o+1&&(c=h,l=m),a>i.strafeChangeAt&&(i.strafeDir*=-1,i.strafeChangeAt=a+1200+Math.random()*1e3),c+=-m*i.strafeDir*.6,l+=h*i.strafeDir*.6;let d=Math.hypot(c,l);if(d>.05&&(xi(i,i.x+c/d*r*.7,i.z+l/d*r*.7,Lr),i.moving=!0),t>4&&a>i.modeUntil){let u=Qg(i,e.x,e.z);u&&Math.random()<.6?(i.coverSpot=u.hide,i.coverPeekSpot=u.peek,i.combatMode="seeking",i.modeUntil=a+6e3):i.modeUntil=a+2e3+Math.random()*1500}mh(i,e,t,n,s);return}if(i.combatMode==="seeking"){if(!i.coverSpot){i.combatMode="open";return}let o=i.coverSpot.x-i.x,c=i.coverSpot.z-i.z,l=Math.hypot(o,c);Ir(i,e.x,e.z),l<.35||a>i.modeUntil?(i.combatMode="hiding",i.modeUntil=a+500+Math.random()*700):(xi(i,i.x+o/l*r,i.z+c/l*r,Lr),i.moving=!0),n&&mh(i,e,t,n,s);return}if(i.combatMode==="hiding"){a>i.modeUntil&&(i.combatMode="peeking",i.modeUntil=a+700+Math.random()*500,i.engagedAt=a),Ir(i,e.x,e.z);return}if(i.combatMode==="peeking"){let o=i.coverPeekSpot||i.coverSpot;if(o){let c=o.x-i.x,l=o.z-i.z,h=Math.hypot(c,l);h>.2&&(xi(i,i.x+c/h*r*.8,i.z+l/h*r*.8,Lr),i.moving=!0)}Ir(i,e.x,e.z),n&&mh(i,e,t,n,s),a>i.modeUntil&&(i.combatMode="hiding",i.modeUntil=a+600+Math.random()*600,Math.random()<.35&&(i.coverSpot=null))}}function mh(i,e,t,n,r){if(!n||!e.alive)return;let s=r.now,a=kt[i.weapon],o=r.diffCfg,l=Math.atan2(e.x-i.x,e.z-i.z)-i.aimYaw;l=Math.atan2(Math.sin(l),Math.cos(l));let h=o.turnRate*(r._dt||.016);if(i.aimYaw+=Math.max(-h,Math.min(h,l))+(Math.random()-.5)*o.wobble,s-i.engagedAt<o.reaction||s-i.lastFireAt<a.fireRate*1.15)return;i.lastFireAt=s;let m=e.eyeY-fh,d=new w(e.x-i.x,m,e.z-i.z).normalize(),u=Math.sqrt(Math.max(0,1-d.y*d.y)),g=new w(Math.sin(i.aimYaw)*u,d.y,Math.cos(i.aimYaw)*u).normalize(),p=a.spread*o.spreadMul,v=a.pellets||1,f=new w(i.x,fh,i.z),_=Math.atan2(dh,t);for(let y=0;y<v;y++){let S=Bo(g,p),E=S.angleTo(d);r.raycaster.set(f,S),r.raycaster.far=t+5,r.raycaster.near=.01;let M=r.raycaster.intersectObjects(r.wallMeshes,!1),P=M.length?M[0].distance:1/0,O=f.clone().addScaledVector(S,Math.min(P,t+2));if(E<=_&&P>t){let L=a.damage*.38;a.falloff&&(L*=Math.max(.35,1-t/a.falloffRange)),r.onDamagePlayer(L,i.name),r.onTracer(f,new w(e.x,e.eyeY,e.z),!0),r.onImpact(new w(e.x,e.eyeY,e.z),!1,!0)}else r.onTracer(f,O,!0),M.length&&r.onImpact(M[0].point,!1,!1)}r.playSound(i.weapon,!0)}function t0(i,e,t,n,r,s){let a=t-i,o=n-e,c=a*a+o*o,l=c===0?0:((r-i)*a+(s-e)*o)/c;l=Math.max(0,Math.min(1,l));let h=i+a*l,m=e+o*l;return Math.hypot(r-h,s-m)}var Pp={health:7323455,ammo:14721587,smoke:12041650},i0=15e3;function r0(i){let e;i==="health"?e=new _r(.22,0):i==="ammo"?e=new Mt(.3,.22,.18):e=new vn(.14,.14,.3,10);let t=new It({color:Pp[i],emissive:Pp[i],emissiveIntensity:.25}),n=new Ke(e,t);return n.position.y=.9,n}function Ip(i){return Wd.map(e=>{let t=r0(e.type);return t.position.x=e.x,t.position.z=e.z,i.add(t),{...e,active:!0,respawnAt:0,bob:Math.random()*Math.PI*2,mesh:t}})}function Lp(i){let e=performance.now();for(let t of i)t.active=!0,t.mesh.visible=!0,t.respawnAt=e}function Dp(i,e,t,n,r){for(let s of i){if(!s.active){n>=s.respawnAt&&(s.active=!0,s.mesh.visible=!0);continue}if(s.bob+=t*.0022,s.mesh.position.y=.85+Math.sin(s.bob)*.08,s.mesh.rotation.y+=t*.0012,!e.alive)continue;if(Math.hypot(e.x-s.x,e.z-s.z)<.6){if(s.type==="health")e.health=Math.min(e.maxHealth,e.health+50),r("+50 HEALTH");else if(s.type==="ammo"){for(let o of ln){let c=e.loadout[o],l=kt[o];c.reserve=Math.min(l.reserveMax,c.reserve+Math.floor(l.reserveMax*.4))}r("AMMO RESUPPLIED")}else s.type==="smoke"&&(e.smoke=Math.min(5,e.smoke+2),r("+2 SMOKE"));s.active=!1,s.mesh.visible=!1,s.respawnAt=n+i0}}}var ht=i=>document.getElementById(i),Ze={health:ht("healthBar"),healthVal:ht("healthValue"),ammoMag:ht("ammoMag"),ammoReserve:ht("ammoReserve"),weaponName:ht("weaponName"),smokeCount:ht("smokeCount"),statKills:ht("statKills"),statDeaths:ht("statDeaths"),timer:ht("matchTimer"),diffBadge:ht("diffbadge"),killfeed:ht("killfeed"),hitmarker:ht("hitmarker"),vignette:ht("vignette-damage"),smokeOverlay:ht("smoke-overlay"),reloadInd:ht("reload-indicator"),deathscreen:ht("deathscreen"),respawnCd:ht("respawnCountdown"),spawnProtected:ht("spawnProtected"),scoreboard:ht("scoreboard"),scoreboardBody:ht("scoreboardBody"),crosshair:ht("crosshair"),scopeMask:ht("scope-mask"),minimap:ht("minimap")},At=Ze.minimap.getContext("2d"),Go=[],_h=0,Np=!1;function ko(i,e){Go.push({text:i,cls:e||"",t:performance.now()}),Go.length>6&&Go.shift()}function Up(i){_h=performance.now()+180,Np=!!i}function Op(){Ze.vignette.classList.remove("hit"),Ze.vignette.offsetWidth,Ze.vignette.classList.add("hit")}function vh(i){Ze.deathscreen.classList.toggle("hidden",!i)}function Fp(i){Ze.respawnCd.textContent="RESPAWNING IN "+Math.max(0,Math.ceil(i/1e3))}function xh(i,e,t){i&&Bp(e,t),Ze.scoreboard.classList.toggle("hidden",!i)}function Bp(i,e){let t=[{name:"YOU",k:i.kills,d:i.deaths,you:!0}].concat(e.map(n=>({name:n.name,k:n.kills,d:n.deaths})));t.sort((n,r)=>r.k-n.k),Ze.scoreboardBody.innerHTML=t.map(n=>`<tr${n.you?' style="color:#ff6b1a"':""}><td>${n.name}</td><td>${n.k}</td><td>${n.d}</td></tr>`).join("")}function zp(){let i=Ze.minimap.getBoundingClientRect(),e=Math.round(i.width)||150;Ze.minimap.width=e,Ze.minimap.height=e}window.addEventListener("resize",zp);zp();function a0(i,e,t){let n=Ze.minimap.width,r=n/Xe;At.clearRect(0,0,n,n);for(let s=0;s<Xe;s++)for(let a=0;a<Xe;a++)ki[s][a]!==Ce.FLOOR&&(At.fillStyle=ki[s][a]===Ce.CRATE?"rgba(224,162,51,0.55)":"rgba(180,190,175,0.55)",At.fillRect(a*r,s*r,r,r));for(let s of e)s.alive&&(At.fillStyle="#e2432c",At.beginPath(),At.arc(s.x*r,s.z*r,3,0,Math.PI*2),At.fill());At.save(),At.translate(i.x*r,i.z*r),At.rotate(-(t||0)),At.fillStyle="#6fbf3f",At.beginPath(),At.moveTo(0,-6),At.lineTo(4,4),At.lineTo(-4,4),At.closePath(),At.fill(),At.restore()}function o0(i,e,t){return t.some(n=>n.active&&Math.hypot(i-n.x,e-n.z)<n.radius)}function Gp(i,e,t,n,r){let s=kt[i.weapon],a=i.loadout[i.weapon],o=Math.max(0,i.health/i.maxHealth)*100;Ze.health.style.width=o+"%",Ze.healthVal.textContent=Math.ceil(Math.max(0,i.health)),Ze.ammoMag.textContent=i.reloading?"--":a.mag,Ze.ammoReserve.textContent=a.reserve,Ze.weaponName.textContent=s.name,Ze.smokeCount.textContent="SMOKE x"+i.smoke,Ze.statKills.textContent=i.kills,Ze.statDeaths.textContent=i.deaths,Ze.timer.textContent=cp(e),Ze.reloadInd.classList.toggle("hidden",!i.reloading);let c=performance.now();Ze.spawnProtected.classList.toggle("hidden",c>=i.spawnProtectedUntil),Ze.hitmarker.classList.toggle("show",c<_h),Ze.hitmarker.classList.toggle("headshot",c<_h&&Np);let l=o0(i.x,i.z,n);Ze.smokeOverlay.style.background=l?"rgba(200,200,195,0.35)":"rgba(200,200,195,0)",Ze.scopeMask.classList.toggle("hidden",!i.scoped);let h=1+(i.moving?i.sprinting?.35:.18:0);Ze.crosshair.style.transform=`translate(-50%,-50%) scale(${i.scoped?0:h})`,Ze.killfeed.innerHTML=Go.map(m=>{let d=c-m.t;return`<div class="${"feed-msg "+m.cls+(d>3200?" fade":"")}">${m.text}</div>`}).join(""),Ze.scoreboard.classList.contains("hidden")||Bp(i,t),a0(i,t,r)}var c0=2.2,kp=9e3,Vp=260;function Hp(i){let e=Ds("rgba(255,200,90,1)"),t=Ds("rgba(200,40,30,1)"),n=$d(),r=[],s=[],a=[],o=[];function c(g,p,v){let f=p.clone().sub(g),_=f.length();if(_<.01)return;f.normalize();let y=g.clone().addScaledVector(f,_/2),S=new vn(.007,.007,_,4,1,!0),E=new Li({color:v?14828332:16769430,transparent:!0,opacity:.85,depthWrite:!1}),M=new Ke(S,E);M.position.copy(y),M.quaternion.setFromUnitVectors(new w(0,1,0),f),i.add(M),r.push({mesh:M,t0:performance.now(),t1:performance.now()+90})}function l(g,p,v){let f=p||v?t:e,_=new _n({map:f,transparent:!0,depthWrite:!1,blending:p||v?Ni:Ui}),y=new In(_);y.position.copy(g);let S=p||v?.35:.22;y.scale.set(S,S,S),i.add(y),s.push({sprite:y,t0:performance.now(),t1:performance.now()+(p||v?320:220),baseScale:S})}function h(g,p,v,f){let _=new Ke(new fi(.06,6,6),new It({color:3815988}));_.position.set(g,1.2,p),i.add(_),o.push({mesh:_,x0:g,z0:p,x1:v,z1:f,t0:performance.now(),t1:performance.now()+Vp})}function m(g,p){let v=new Pt,f=[];for(let S=0;S<4;S++){let E=new _n({map:n,transparent:!0,opacity:0,depthWrite:!1}),M=new In(E),P=(Math.random()-.5)*1.4,O=(Math.random()-.5)*1.4,L=.4+Math.random()*.8,N=1.6+Math.random()*.8;M.position.set(P,L,O),M.scale.set(N,N,N),v.add(M),f.push(M)}v.position.set(g,0,p),i.add(v);let _=performance.now(),y={x:g,z:p,active:!1,popAt:_+Vp,createdAt:0,radius:c0,group:v,sprites:f};return a.push(y),y}function d(){let g=performance.now();for(let p=r.length-1;p>=0;p--){let v=r[p],f=1-(g-v.t0)/(v.t1-v.t0);if(f<=0){i.remove(v.mesh),v.mesh.geometry.dispose(),v.mesh.material.dispose(),r.splice(p,1);continue}v.mesh.material.opacity=.85*f}for(let p=s.length-1;p>=0;p--){let v=s[p],f=1-(g-v.t0)/(v.t1-v.t0);if(f<=0){i.remove(v.sprite),v.sprite.material.dispose(),s.splice(p,1);continue}v.sprite.material.opacity=f;let _=v.baseScale*(1+(1-f)*.8);v.sprite.scale.set(_,_,_)}for(let p=o.length-1;p>=0;p--){let v=o[p],f=Math.min(1,(g-v.t0)/(v.t1-v.t0));v.mesh.position.x=v.x0+(v.x1-v.x0)*f,v.mesh.position.z=v.z0+(v.z1-v.z0)*f,v.mesh.position.y=1.2-Math.abs(f-.5)*1.8+.3,f>=1&&(i.remove(v.mesh),v.mesh.geometry.dispose(),v.mesh.material.dispose(),o.splice(p,1),m(v.x1,v.z1))}for(let p=a.length-1;p>=0;p--){let v=a[p];if(!v.active&&g>=v.popAt&&(v.active=!0,v.createdAt=g),v.active){let f=g-v.createdAt,_=Math.min(1,f/400),y=1-Math.max(0,(f-(kp-800))/800),S=Math.max(0,Math.min(_,y))*.8;v.sprites.forEach((E,M)=>{E.material.opacity=S,E.rotation.z+=2e-4*(M%2?1:-1)}),f>kp&&(i.remove(v.group),v.sprites.forEach(E=>E.material.dispose()),a.splice(p,1))}}}function u(){for(let g of r)i.remove(g.mesh),g.mesh.geometry.dispose(),g.mesh.material.dispose();r.length=0;for(let g of s)i.remove(g.sprite),g.sprite.material.dispose();s.length=0;for(let g of o)i.remove(g.mesh),g.mesh.geometry.dispose(),g.mesh.material.dispose();o.length=0;for(let g of a)i.remove(g.group),g.sprites.forEach(p=>p.material.dispose());a.length=0}return{spawnTracer:c,spawnImpact:l,spawnGrenadeArc:h,update:d,smokes:a,clearAll:u}}function h0(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl")||i.getContext("experimental-webgl")))}catch{return!1}}if(!h0())throw document.getElementById("webglfail").classList.remove("hidden"),new Error("WebGL unavailable");var jp={easy:{bots:4,botHealth:55,turnRate:1.4,wobble:.04,spreadMul:1.8,reaction:1e3,respawn:4500,speedMul:.85},normal:{bots:6,botHealth:80,turnRate:2.4,wobble:.025,spreadMul:1.3,reaction:650,respawn:3500,speedMul:1},hard:{bots:8,botHealth:100,turnRate:3.6,wobble:.014,spreadMul:1,reaction:380,respawn:2600,speedMul:1.1}},Ho=document.getElementById("scene"),qp=Qd(Ho),Mi=ep(),Zt=tp(window.innerWidth/window.innerHeight);Mi.add(Zt);np(Mi);var{wallMeshes:yh}=ip(Mi);rp(qp,Zt);var Mh=new Ss,yi=Hp(Mi),Yp=Ip(Mi),cn=ap();Zt.add(cn.root);var Vo=op(Ds("rgba(255,210,120,1)"));cn.root.add(Vo);var Wp=0,rt={screen:"menu",difficulty:"normal",startTime:0,elapsed:0,pointerLocked:!1},je={player:null,bots:[],diffCfg:jp.normal};function u0(){return gp(Uo[0])}function d0(i,e){let t=Ep(i,e),n=wp();return Ap(n,t),t.mesh=n,n.group.position.set(t.x,0,t.z),Mi.add(n.group),t}function p0(i){Mi.remove(i.group),i.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),i.healthBar&&i.healthBar.tex.dispose()}function Zp(i){rt.difficulty=i,je.diffCfg=jp[i],document.getElementById("diffbadge").textContent=i.toUpperCase(),je.player=u0(),je.player.spawnProtectedUntil=performance.now()+2200,Zt.rotation.set(0,0,0),Zt.fov=75,Zt.updateProjectionMatrix();for(let e of je.bots)e.mesh&&p0(e.mesh);je.bots=[];for(let e=0;e<je.diffCfg.bots;e++)je.bots.push(d0(je.diffCfg,je.player));Lp(Yp),yi.clearAll();for(let e of ln)cn.weapons[e].visible=e==="rifle";rt.startTime=performance.now(),rt.elapsed=0}var Tt={keys:{},mouseDX:0,mouseDY:0,left:!1,right:!1,sensitivity:.0022};window.addEventListener("keydown",i=>{Tt.keys[i.code]=!0,i.code==="Space"&&rt.screen==="playing"&&i.preventDefault(),rt.screen==="playing"&&(i.code==="Digit1"&&Pr(je.player,"rifle",cn),i.code==="Digit2"&&Pr(je.player,"smg",cn),i.code==="Digit3"&&Pr(je.player,"shotgun",cn),i.code==="Digit4"&&Pr(je.player,"sniper",cn),i.code==="KeyR"&&zo(je.player),i.code==="KeyG"&&Sp(je.player,Zt,Mh,yh,yi),i.code==="Tab"&&(i.preventDefault(),xh(!0,je.player,je.bots)))});window.addEventListener("keyup",i=>{Tt.keys[i.code]=!1,i.code==="Tab"&&xh(!1,je.player,je.bots)});window.addEventListener("mousemove",i=>{rt.pointerLocked&&(Tt.mouseDX+=i.movementX||0,Tt.mouseDY+=i.movementY||0)});window.addEventListener("mousedown",i=>{rt.screen!=="playing"||!rt.pointerLocked||(i.button===0&&(Tt.left=!0),i.button===2&&(Tt.right=!0))});window.addEventListener("mouseup",i=>{i.button===0&&(Tt.left=!1),i.button===2&&(Tt.right=!1)});window.addEventListener("contextmenu",i=>i.preventDefault());window.addEventListener("wheel",i=>{if(rt.screen!=="playing")return;let e=ln.indexOf(je.player.weapon),t=i.deltaY>0?1:-1,n=ln[(e+t+ln.length)%ln.length];Pr(je.player,n,cn)});function m0(i,e,t){i.alive&&(i.health-=e,i.hitFlashT=130,gh(i.mesh,Math.max(0,i.health/i.maxHealth)),i.health<=0?(i.alive=!1,i.deathAnim={t0:performance.now()},i.respawnAt=performance.now()+je.diffCfg.respawn,je.player.kills++,ko((t==="head"?"HEADSHOT \u2014 ":"")+"YOU ELIMINATED "+i.name,"you"),On("kill")):On("hitmarker"),Up(t==="head"))}function f0(){Op()}function g0(){vh(!0)}function _0(i,e){ko(i,e)}function v0(i){let e=je.player;if(!e.alive)if(i>=e.respawnAt){let t=je.bots.filter(a=>a.alive),n=t.length?t.reduce((a,o)=>a+o.x,0)/t.length:12,r=t.length?t.reduce((a,o)=>a+o.z,0)/t.length:12,s=Ps(n,r,5);e.x=s.x,e.z=s.z,e.health=e.maxHealth,e.alive=!0,e.reloading=!1,e.jumpY=0,e.vy=0,e.lean=0,e.loadout=ph(),e.spawnProtectedUntil=i+2200,vh(!1)}else Fp(e.respawnAt-i)}var Wo={mainmenu:document.getElementById("mainmenu"),pausemenu:document.getElementById("pausemenu"),summaryscreen:document.getElementById("summaryscreen")},Sh=document.getElementById("hud"),Jp="normal";function Dr(){Object.values(Wo).forEach(i=>i.classList.add("hidden"))}function Kp(){rt.screen="menu",Dr(),Wo.mainmenu.classList.remove("hidden"),Sh.classList.add("hidden");try{document.exitPointerLock&&document.exitPointerLock()}catch{}}document.getElementById("diffOptions").addEventListener("click",i=>{let e=i.target.closest(".diff-btn");e&&(document.querySelectorAll(".diff-btn").forEach(t=>t.classList.remove("selected")),e.classList.add("selected"),Jp=e.dataset.diff)});document.getElementById("controlsToggle").addEventListener("click",()=>{document.getElementById("controlsPanel").classList.toggle("hidden")});document.getElementById("startBtn").addEventListener("click",()=>{hp(),Zp(Jp),Dr(),Sh.classList.remove("hidden"),rt.screen="playing",Xo()});document.getElementById("resumeBtn").addEventListener("click",()=>{Dr(),rt.screen="playing",Xo()});document.getElementById("restartBtn").addEventListener("click",()=>{Zp(rt.difficulty),Dr(),rt.screen="playing",Xo()});document.getElementById("quitBtn").addEventListener("click",x0);document.getElementById("backToMenuBtn").addEventListener("click",Kp);function x0(){let i=je.player;rt.screen="summary",Dr(),Sh.classList.add("hidden"),document.getElementById("sumKills").textContent=i.kills,document.getElementById("sumDeaths").textContent=i.deaths,document.getElementById("sumKD").textContent=(i.kills/Math.max(1,i.deaths)).toFixed(2),document.getElementById("sumTime").textContent=document.getElementById("matchTimer").textContent,Wo.summaryscreen.classList.remove("hidden");try{document.exitPointerLock&&document.exitPointerLock()}catch{}}function Xo(){try{Ho.requestPointerLock()}catch{}}document.addEventListener("pointerlockchange",()=>{rt.pointerLocked=document.pointerLockElement===Ho,!rt.pointerLocked&&rt.screen==="playing"&&(rt.screen="paused",Dr(),Wo.pausemenu.classList.remove("hidden"))});Ho.addEventListener("click",()=>{rt.screen==="playing"&&!rt.pointerLocked&&Xo()});var Xp=performance.now();function $p(i){let e=i-Xp;Xp=i,e>100&&(e=100),rt.screen==="playing"&&y0(e,i),qp.render(Mi,Zt),requestAnimationFrame($p)}function y0(i,e){let t=je.player,n=i/1e3;if(v0(e),t.alive)if(_p(Zt,Tt.mouseDX,Tt.mouseDY,Tt.sensitivity),Tt.mouseDX=0,Tt.mouseDY=0,vp(t,Zt,n,Tt.keys,Tt.right),yp(t,e),Tt.left){if(kt[t.weapon].auto||!t._firedThisClick){let l=je.bots.filter(m=>m.alive).flatMap(m=>m.mesh.hitParts);Mp(t,Zt,Mh,yh,l,yi,e,{rightHeld:Tt.right,onDamageBot:m0})&&(Vo.position.z=cn.weapons[t.weapon].userData.muzzleZ,Vo.material.opacity=1,Wp=e+70),t._firedThisClick=!0}}else t._firedThisClick=!1;else Tt.mouseDX=0,Tt.mouseDY=0;xp(t,Zt);let r=t.moving&&t.grounded?Math.sin(t.bobPhase)*.012:0,s=t.moving&&t.grounded?Math.abs(Math.cos(t.bobPhase))*.01:0,a=t.viewKick;cn.root.position.set(.22+r,-.2+s-a*.05,-.42+a*.05),cn.root.rotation.x=-a*.3,cn.weapons[t.weapon].visible=!t.scoped,e>Wp&&(Vo.material.opacity=0);let o={player:t,raycaster:Mh,wallMeshes:yh,smokes:yi.smokes,diffCfg:je.diffCfg,now:e,onDamagePlayer:(c,l)=>{e<t.spawnProtectedUntil||bp(t,c,l,f0,_0,g0)},onTracer:(c,l,h)=>yi.spawnTracer(c,l,h),onImpact:(c,l,h)=>yi.spawnImpact(c,l,h),playSound:On};for(let c of je.bots)Rp(c,i,o),Cp(c,i);Dp(Yp,t,i,e,c=>ko(c,"you")),yi.update(),rt.elapsed=e-rt.startTime,Gp(t,rt.elapsed,je.bots,yi.smokes,Zt.rotation.y)}requestAnimationFrame($p);"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("sw.js").catch(()=>{})});Kp();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
