import{c as E,g as z}from"./app-1232777b.js";var q={exports:{}},Q;function R(){return Q||(Q=1,function(D,w){(function(h,c){D.exports=c()})(E,function(){var h=1e3,c=6e4,Y=36e5,M="millisecond",f="second",O="minute",p="hour",S="day",j="week",v="month",I="quarter",g="year",L="date",V="Invalid Date",et=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,rt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,nt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var r=["th","st","nd","rd"],t=s%100;return"["+s+(r[(t-20)%10]||r[t]||r[0])+"]"}},J=function(s,r,t){var n=String(s);return!n||n.length>=r?s:""+Array(r+1-n.length).join(t)+s},st={s:J,z:function(s){var r=-s.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),e=t%60;return(r<=0?"+":"-")+J(n,2,"0")+":"+J(e,2,"0")},m:function s(r,t){if(r.date()<t.date())return-s(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),e=r.clone().add(n,v),i=t-e<0,a=r.clone().add(n+(i?-1:1),v);return+(-(n+(t-e)/(i?e-a:a-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:v,y:g,w:j,d:S,D:L,h:p,m:O,s:f,ms:M,Q:I}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},W="en",b={};b[W]=nt;var G="$isDayjsObject",Z=function(s){return s instanceof N||!(!s||!s[G])},F=function s(r,t,n){var e;if(!r)return W;if(typeof r=="string"){var i=r.toLowerCase();b[i]&&(e=i),t&&(b[i]=t,e=i);var a=r.split("-");if(!e&&a.length>1)return s(a[0])}else{var o=r.name;b[o]=r,e=o}return!n&&e&&(W=e),e||!n&&W},l=function(s,r){if(Z(s))return s.clone();var t=typeof r=="object"?r:{};return t.date=s,t.args=arguments,new N(t)},u=st;u.l=F,u.i=Z,u.w=function(s,r){return l(s,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var N=function(){function s(t){this.$L=F(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[G]=!0}var r=s.prototype;return r.parse=function(t){this.$d=function(n){var e=n.date,i=n.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var a=e.match(et);if(a){var o=a[2]-1||0,d=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,d)):new Date(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,d)}}return new Date(e)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return u},r.isValid=function(){return this.$d.toString()!==V},r.isSame=function(t,n){var e=l(t);return this.startOf(n)<=e&&e<=this.endOf(n)},r.isAfter=function(t,n){return l(t)<this.startOf(n)},r.isBefore=function(t,n){return this.endOf(n)<l(t)},r.$g=function(t,n,e){return u.u(t)?this[n]:this.set(e,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,n){var e=this,i=!!u.u(n)||n,a=u.p(t),o=function(H,_){var x=u.w(e.$u?Date.UTC(e.$y,_,H):new Date(e.$y,_,H),e);return i?x:x.endOf(S)},d=function(H,_){return u.w(e.toDate()[H].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(_)),e)},m=this.$W,$=this.$M,y=this.$D,T="set"+(this.$u?"UTC":"");switch(a){case g:return i?o(1,0):o(31,11);case v:return i?o(1,$):o(0,$+1);case j:var k=this.$locale().weekStart||0,B=(m<k?m+7:m)-k;return o(i?y-B:y+(6-B),$);case S:case L:return d(T+"Hours",0);case p:return d(T+"Minutes",1);case O:return d(T+"Seconds",2);case f:return d(T+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,n){var e,i=u.p(t),a="set"+(this.$u?"UTC":""),o=(e={},e[S]=a+"Date",e[L]=a+"Date",e[v]=a+"Month",e[g]=a+"FullYear",e[p]=a+"Hours",e[O]=a+"Minutes",e[f]=a+"Seconds",e[M]=a+"Milliseconds",e)[i],d=i===S?this.$D+(n-this.$W):n;if(i===v||i===g){var m=this.clone().set(L,1);m.$d[o](d),m.init(),this.$d=m.set(L,Math.min(this.$D,m.daysInMonth())).$d}else o&&this.$d[o](d);return this.init(),this},r.set=function(t,n){return this.clone().$set(t,n)},r.get=function(t){return this[u.p(t)]()},r.add=function(t,n){var e,i=this;t=Number(t);var a=u.p(n),o=function($){var y=l(i);return u.w(y.date(y.date()+Math.round($*t)),i)};if(a===v)return this.set(v,this.$M+t);if(a===g)return this.set(g,this.$y+t);if(a===S)return o(1);if(a===j)return o(7);var d=(e={},e[O]=c,e[p]=Y,e[f]=h,e)[a]||1,m=this.$d.getTime()+t*d;return u.w(m,this)},r.subtract=function(t,n){return this.add(-1*t,n)},r.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||V;var i=t||"YYYY-MM-DDTHH:mm:ssZ",a=u.z(this),o=this.$H,d=this.$m,m=this.$M,$=e.weekdays,y=e.months,T=e.meridiem,k=function(_,x,A,U){return _&&(_[x]||_(n,i))||A[x].slice(0,U)},B=function(_){return u.s(o%12||12,_,"0")},H=T||function(_,x,A){var U=_<12?"AM":"PM";return A?U.toLowerCase():U};return i.replace(rt,function(_,x){return x||function(A){switch(A){case"YY":return String(n.$y).slice(-2);case"YYYY":return u.s(n.$y,4,"0");case"M":return m+1;case"MM":return u.s(m+1,2,"0");case"MMM":return k(e.monthsShort,m,y,3);case"MMMM":return k(y,m);case"D":return n.$D;case"DD":return u.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return k(e.weekdaysMin,n.$W,$,2);case"ddd":return k(e.weekdaysShort,n.$W,$,3);case"dddd":return $[n.$W];case"H":return String(o);case"HH":return u.s(o,2,"0");case"h":return B(1);case"hh":return B(2);case"a":return H(o,d,!0);case"A":return H(o,d,!1);case"m":return String(d);case"mm":return u.s(d,2,"0");case"s":return String(n.$s);case"ss":return u.s(n.$s,2,"0");case"SSS":return u.s(n.$ms,3,"0");case"Z":return a}return null}(_)||a.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,n,e){var i,a=this,o=u.p(n),d=l(t),m=(d.utcOffset()-this.utcOffset())*c,$=this-d,y=function(){return u.m(a,d)};switch(o){case g:i=y()/12;break;case v:i=y();break;case I:i=y()/3;break;case j:i=($-m)/6048e5;break;case S:i=($-m)/864e5;break;case p:i=$/Y;break;case O:i=$/c;break;case f:i=$/h;break;default:i=$}return e?i:u.a(i)},r.daysInMonth=function(){return this.endOf(v).$D},r.$locale=function(){return b[this.$L]},r.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),i=F(t,n,!0);return i&&(e.$L=i),e},r.clone=function(){return u.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},s}(),P=N.prototype;return l.prototype=P,[["$ms",M],["$s",f],["$m",O],["$H",p],["$W",S],["$M",v],["$y",g],["$D",L]].forEach(function(s){P[s[1]]=function(r){return this.$g(r,s[0],s[1])}}),l.extend=function(s,r){return s.$i||(s(r,N,l),s.$i=!0),l},l.locale=F,l.isDayjs=Z,l.unix=function(s){return l(1e3*s)},l.en=b[W],l.Ls=b,l.p={},l})}(q)),q.exports}var it=R();const C=z(it);var K={exports:{}};(function(D,w){(function(h,c){D.exports=c()})(E,function(){return function(h,c){c.prototype.isSameOrBefore=function(Y,M){return this.isSame(Y,M)||this.isBefore(Y,M)}}})})(K);var at=K.exports;const ut=z(at);var X={exports:{}};(function(D,w){(function(h,c){D.exports=c()})(E,function(){return function(h,c,Y){c.prototype.isToday=function(){var M="YYYY-MM-DD",f=Y();return this.format(M)===f.format(M)}}})})(X);var ot=X.exports;const ct=z(ot);var tt={exports:{}};(function(D,w){(function(h,c){D.exports=c()})(E,function(){var h="week",c="year";return function(Y,M,f){var O=M.prototype;O.week=function(p){if(p===void 0&&(p=null),p!==null)return this.add(7*(p-this.week()),"day");var S=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var j=f(this).startOf(c).add(1,c).date(S),v=f(this).endOf(h);if(j.isBefore(v))return 1}var I=f(this).startOf(c).date(S).startOf(h).subtract(1,"millisecond"),g=this.diff(I,h,!0);return g<0?f(this).startOf("week").week():Math.ceil(g)},O.weeks=function(p){return p===void 0&&(p=null),this.week(p)}}})})(tt);var ft=tt.exports;const dt=z(ft);var ht={exports:{}};(function(D,w){(function(h,c){D.exports=c(R())})(E,function(h){function c(f){return f&&typeof f=="object"&&"default"in f?f:{default:f}}var Y=c(h),M={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(f){return f+"º"}};return Y.default.locale(M,null,!0),M})})(ht);C.extend(dt);C.extend(ut);C.extend(ct);C.locale("es");function mt(D){const w=C(D),h=C();return w.isToday()?"hoy a "+w.format("HH:mm"):w.isSameOrBefore(h,"week")&&w.week()===h.week()?w.format("dddd [a las] HH:mm"):w.format("DD/MM/YYYY HH:mm")}export{mt as f};
