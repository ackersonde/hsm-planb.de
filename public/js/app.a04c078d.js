(function(t){function e(e){for(var a,s,c=e[0],r=e[1],l=e[2],u=0,d=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},o={app:0},i=[];function c(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-03c958ca":"66eba7a8","chunk-0fc02687":"0bb920e5","chunk-12770743":"df22fb0f","chunk-2bfa586a":"7219b662","chunk-336a5daf":"ee57d81c","chunk-3a4572fc":"1fa8c229","chunk-599cdcd7":"66f45c5a","chunk-7378afc2":"6d9bf165","chunk-174e56ee":"2c00c4fe","chunk-547e0232":"3de7e7b2","chunk-96daa546":"6164f439","chunk-e14bb096":"3922663f","chunk-2c162a94":"d9de5cde","chunk-b4b555ea":"e169dab7","chunk-58416f4f":"1b8341ab","chunk-0b7827dd":"cd065686","chunk-2d0c7cc6":"e63bbf88"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n={"chunk-03c958ca":1,"chunk-0fc02687":1,"chunk-12770743":1,"chunk-2bfa586a":1,"chunk-336a5daf":1,"chunk-3a4572fc":1,"chunk-599cdcd7":1,"chunk-7378afc2":1,"chunk-174e56ee":1,"chunk-547e0232":1,"chunk-96daa546":1,"chunk-e14bb096":1,"chunk-2c162a94":1,"chunk-b4b555ea":1,"chunk-58416f4f":1,"chunk-0b7827dd":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-03c958ca":"6ac676eb","chunk-0fc02687":"c309eb75","chunk-12770743":"cab59e1c","chunk-2bfa586a":"116bb928","chunk-336a5daf":"212d48bb","chunk-3a4572fc":"f80a85ca","chunk-599cdcd7":"9630ef27","chunk-7378afc2":"aa316f16","chunk-174e56ee":"377c0b1f","chunk-547e0232":"cc628b86","chunk-96daa546":"9ffe43aa","chunk-e14bb096":"9161b952","chunk-2c162a94":"70f52c3c","chunk-b4b555ea":"97834fe7","chunk-58416f4f":"ca4d3a3d","chunk-0b7827dd":"cf4e34a0","chunk-2d0c7cc6":"31d6cfe0"}[t]+".css",o=r.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete s[t],m.parentNode.removeChild(m),n(i)},m.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){s[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}o[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;i.push(["e2ec","chunk-vendors"]),n()})({"0243":function(t,e,n){},"05cc":function(t,e,n){"use strict";var a=n("2b0e"),s=n("2f62"),o=n("4043"),i=n.n(o),c=n("7ffd");const r={name:null,subtitle:null,logo:null,splash:null,rootContainer:null,impressum:null,isContainerPlattform:!0,isFetchallPlattform:!1,terminalMode:!1,currentLang:"de-at",i18n:{"Gemeinden, Städte, Bezirke":{"de-de":"Gemeinden, Städte und Kreisstädte, Landkreise","de-at":"Gemeinden, Städte, Bezirke"},"Bezirke, Statutarstädte":{"de-de":"Landkreise, kreisfreie Städte","de-at":"Bezirke, Statutarstädte"},"Bundesländer":{"de-de":"Länder","de-at":"Bundesländer"},"Gemeinden, Städte":{"de-de":"Gemeinden, Städte, Kreisstädte","de-at":"Gemeinden, Städte"},"Gemeinden, Städte und Orte":{"de-de":"Gemeinden, Städte und Kreisstädte","de-at":"Gemeinden, Städte und Orte"}}},l={},u={translate:t=>e=>t.i18n[e]&&t.i18n[e][t.currentLang]?t.i18n[e][t.currentLang]:e},d=c["c"].mutations(r),m={namespaced:!0,state:r,mutations:d,actions:l,getters:u};var h=n("d30b");const p={appDrawer:null,appDrawerContent:!1,rightDrawer:null,rightDrawerContent:!1,mapCenter:null,mapBounds:null,mapZoom:null,followPosition:!1,installPrompt:null},g={...c["c"].mutations(p)},f={positionForContainer:()=>t=>{let e=window.localStorage.getItem("position"),n={};if(e)try{n=JSON.parse(e)}catch(s){}const a=n[t];if(a){const t=a.split(",");return Object(h["h"])([parseFloat(t[1]),parseFloat(t[0])])}return null},positionForCurrentContainer:(t,e,n)=>{if(n.containerBackend&&n.containerBackend.container){const t=n.containerBackend.container,a=t.slug;return e.positionForContainer(a)}return null},position:(t,e,n)=>{if(n.containerBackend&&null!=n.containerBackend.container&&e.positionForCurrentContainer)try{return e.positionForCurrentContainer}catch(a){return null}else{if(null!=n.geolocation.lat)return Object(h["h"])([Math.round(1e4*n.geolocation.lng)/1e4,Math.round(1e4*n.geolocation.lat)/1e4]);if(!n.containerBackend||null==n.containerBackend.container||!n.containerBackend.container.slug.startsWith("geo:"))return null;try{const t=n.containerBackend.container.slug.split(":")[1].split(",");return Object(h["h"])([parseFloat(t[1]),parseFloat(t[0])])}catch(a){return null}}},positionBlurred:(t,e)=>{const n=e.position;if(null!=n){const[t,e]=n.geometry.coordinates;return Object(h["h"])([Math.round(100*t)/100,Math.round(100*e)/100])}return null},positionWatchExists:(t,e,n)=>null!=n.geolocation.watchID,mapLayers:(t,e,n)=>t=>{let e="staio";t&&t.startpage_flags.map_layer&&(e=t.startpage_flags.map_layer);const a={name:"Basemap",attribution:"Datenquelle: <a href='https://basemap.at'>basemap.at</a>",url:"https://maps.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png",visible:"basemap"==e},s={name:"Basemap Orthofoto",attribution:"Datenquelle: <a href='https://basemap.at'>basemap.at</a>",url:"https://maps.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg",visible:"basemap_ortho"==e},o={name:n["plattform"].name,attribution:"© <a href='https://www.openstreetmap.org'>OpenStreetMap</a> contributors",url:"https://tiles.sta.io/osm_tiles/{z}/{x}/{y}.png",visible:"staio"==e};window.devicePixelRatio>1&&(a.url="https://maps.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg",o.url="https://tiles.sta.io/retina/{z}/{x}/{y}.png");const i=[o,a,s];return i}},b={savePosition(t,{slug:e,position:n}){if("-1"==n)window.localStorage.removeItem("position");else{let t=window.localStorage.getItem("position"),s={};if(t)try{s=JSON.parse(t)}catch(a){}s[e]=n,window.localStorage.setItem("position",JSON.stringify(s))}}},v={namespaced:!0,state:p,mutations:g,getters:f,actions:b};var _=n("1816"),y=n.n(_),w=n("4dec");let k=null;function x(){try{return null==k&&(k=new w["a"]("geminfo_account"),k.version(7).stores({accounts:"slug, endpoint, _id",events:"_id",messages:"slug",blocks:"slug"})),k}catch(t){return null}}var C=n("74ca"),$=n("2bf2"),A=n("478e");const j=Object(A["a"])({uri:"https://graphql.sta.io/graphql/"}),O=new C["a"]({link:j,cache:new $["a"],connectToDevTools:!1,shouldBatch:!0,fetchOptions:{mode:"no-cors"}});var S=n("5184");S["a"]`
  fragment accountAvatar on Account {
    _id
    name
    about
    mainimage
    slug
    logo
    inside
    fotos {
      image
      width
      height
      hex
    }
    adressen {
      lat
      lng
    }
  }
`,S["a"]`
  fragment accountListDetails on Account {
    _id
    name
    about
    mainimage
    slug
    moved
    logo
    sta_www
    editorial
    expired
    sparten {
      _id
      bezeichnung_einzahl
      depth
    }
    fotos {
      image
      width
      height
      hex
    }
    facebookpages {
      fbid
    }
    instagramprofiles {
      igid
    }
    inside
    adressen {
      label
      lat
      lng
      picture
      strasse
      plz
      ort
      inside
      telefon {
        nummer
        typ
      }
      oeffnungszeiten {
        sonstiges
        termine_nach_vereinbarung
        tage
      }
      geojson
    }
  }
`;const V=S["a"]`
  fragment accountDetails on Account {
    _id
    name
    about
    www
    moved
    sta_www
    editorial
    logo
    mainimage
    slug
    profile
    profile_txt
    canonical_url
    is_contactable
    leistungen
    services {
      name
      url
      icon
      mainimage
      highlighted
      background
      text
      bulletins {
        name
        text_txt
      }
      images {
        image
      }
    }
    rezensionen {
      name
      name_zusatz
      text
      foto
    }
    links {
      label
      url
    }
    impressum {
      name
      value
    }
    images {
      image
    }
    galleries {
      name
      description_txt
      images {
        image
      }
    }
    panoramen {
      image
    }
    jumbotron_images {
      image
    }
    feed_images {
      image
    }
    fotos {
      image
      width
      height
      hex
    }
    inside
    sparten {
      _id
      bezeichnung_einzahl
      depth
    }
    current_events {
      _id
      title
      content_txt
      date_begin
      date_end
      jumbotron
      jumbotron_foreground
      call_to_action_button
    }
    gtag_id
    facebook_pixel
    facebookpages {
      fbid
    }
    instagramprofiles {
      igid
    }
    adressen {
      label
      www
      lat
      lng
      picture
      strasse
      plz
      ort
      country
      inside
      barrierefrei
      parkplatz
      wifi
      rechnung
      kartenzahlung
      telefon {
        nummer
        typ
      }
      oeffnungszeiten {
        name
        sonstiges
        termine_nach_vereinbarung
        tage
      }
      geojson
      sonstiges
    }
    geocontainer {
      name
      slug
      depth
    }
  }
`,z=S["a"]`
  fragment accountMessages on Account {
    messages {
      content
      picture
      subject
      date
      basisdaten_id
      basisdaten_name
      basisdaten_slug
      basisdaten_logo
      model
      link
      locations
      source_name
      source_link
    }
  }
`,B=S["a"]`
  fragment accountProfileBlocks on Account {
    profileblocks {
      title
      content
      background
      image
      expendable
      galleryimages {
        name
        description_txt
        image
      }
    }
  }
`,T=S["a"]`
  query account (
      $slug: String,
      $endpoint: String,
      $_id: String
  ){
    accountsApp {
      account(_id: $_id, slug: $slug, endpoint: $endpoint) {
        ...accountDetails
      }
    }
  }

  ${V}
`,I=S["a"]`
  query accountMessages (
      $slug: String
  ){
    accountsApp {
      account(slug: $slug) {
        _id
        slug
        ...accountMessages
      }
    }
  }

  ${z}
`,P=S["a"]`
  query accountProfileBlocks (
      $slug: String
  ){
    accountsApp {
      account(slug: $slug) {
        _id
        slug
        ...accountProfileBlocks
      }
    }
  }

  ${B}
`,L=S["a"]`
  query event(
    $eventId: String!,
  ){
    accountsApp {
      event(_id: $eventId){
        _id
        title
        content
        date_begin
        date_end
        images {
          image
        }
        services {
          name
          text
          url
          background
          highlighted
          icon
          mainimage
        }
        profileblocks {
          title
          content
          background
          image
          expendable
          galleryimages {
            name
            description_txt
            image
          }
        }
        jumbotron
        jumbotron_foreground
        call_to_action_bg
        call_to_action_text
        call_to_action_button
        facebook_pixel
        gtag_id
        account {
          ...accountDetails
        }
      }
    }
  }

  ${V}
`,D=S["a"]`
  mutation ($accountId: String!, $name: String!, $email: String!, $message: String, $phone: String, $senderUrl: String){
    contactForm(
      account_id: $accountId,
      name: $name,
      email: $email,
      message: $message,
      phone: $phone,
      sender_url: $senderUrl
    ){
      status
      message
    }
  }
`,E=S["a"]`
  mutation (
    $eventId: String!,
    $name: String!,
    $phone: String!,
    $email: String,
    $senderUrl: String
  ){
    eventAction (
      event_id: $eventId,
      name: $name,
      phone: $phone,
      email: $email,
      sender_url: $senderUrl
    ){
      status
      message
      url
      voucher_code
      email
      calendly_link
      _id
    }
  }
`,q=S["a"]`
  query getResponse(
    $eventId: String!,
    $responseId: String!
  ){
    accountsApp {
      event(_id: $eventId){
        _id
        response(_id: $responseId){
          _id
          booked
          calendly_link
        }
      }
    }
  }
`,M=S["a"]`
  mutation (
    $eventId: String!,
    $responseJson: String!
    $responseId: String,
  ){
    eventCalendlyReturn(
      event_id: $eventId,
      response_json: $responseJson
      response_id: $responseId,
    ){
      status
      message
    }
  }
`;var R=n("4227"),F=n("4491");const N=n("89c7"),U=n("5a0c");n("6210"),U.locale("de");const H=n("7e21"),G=n("4208");U.extend(H),U.extend(G);class J{constructor(t){this.openinghours=t}days(){return this.openinghours.tage.map((t,e)=>t?{times:this.getDay(U().weekday(e)).map(t=>t.map(t=>{const e=t.format("HH:mm");return"23:59"==e?"24:00":e})),weekday:U().weekday(e).format("dddd"),sonstiges:t[4]}:{times:null,weekday:U().weekday(e).format("dddd"),sonstiges:null})}today(){const t=U();return this.getDay(t)}dayAfterToday(){const t=U();for(let e=1;e<=7;e++){const n=this.getDay(t.weekday(t.weekday()+e));if(null!=n)return n}return null}currentStatus(){const t=this.today();if(null==t)return{isOpen:null,nextChange:null,untilNextChange:null};const e=U();for(const a of t){const[t,n]=a;if(t.isBefore(e)&&n.isAfter(e))return{isOpen:!0,nextChange:n.format(),untilNextChange:n.fromNow()};if(t.isAfter(e))return{isOpen:!1,nextChange:t.format(),untilNextChange:t.fromNow()}}const n=this.dayAfterToday();return n&&n.length&&n[0].length?{isOpen:!1,nextChange:n[0][0].format(),untilNextChange:n[0][0].fromNow()}:{isOpen:!1,nextChange:null,untilNextChange:null}}getDay(t){const e=this.openinghours.tage[t.weekday()];if(null==e)return null;const n=e.slice(0,4).filter(t=>null!=t).map(e=>U(`${t.year()}-${t.month()+1}-${t.date()} ${e}`,"YYYY-MM-DD HH:mm:ss"));return 1==n.length&&n.push(U(`${t.year()}-${t.month()+1}-${t.date()} 23:59:00`,"YYYY-MM-DD HH:mm:ss")),N(n,2).filter(t=>2==t.length)}}var K=J;const W=n("736a"),Y=n("ad2b"),X=n("e0d5"),Z=({account:t,container:e,insideFromBorders:n})=>(t.adressen.filter(t=>null!=t).map(t=>{t.containerCtx||(t.containerCtx={})}),t.containerCtx||(t.containerCtx={}),e&&(t.adressen.filter(t=>null!=t).map(t=>{const a={distance:null};t.lng&&e&&e.location_feature&&(a.distance=Math.round(100*Object(R["a"])(e.location_feature,t.ctx.point))/100),t.containerCtx[e.slug]=a,n&&e.borders_geojson&&(t.inside=Object(F["a"])(e.borders_geojson,t.ctx.point))}),t.containerCtx[e.slug]={nearest:W(t.adressen.filter(t=>e.slug in t.containerCtx&&t.containerCtx[e.slug].distance),(function(t){return t.containerCtx[e.slug].distance})),inside:t.adressen.filter(t=>t.inside)}),n&&(t.inside=Y(t.adressen.filter(t=>null!=t).map(t=>t.inside))),t),Q=(t,e)=>{t.adressen.filter(t=>null!=t).map(t=>{const n={distance:null};t.lng&&e&&t.ctx&&t.ctx.point&&(n.distance=Math.round(100*Object(R["a"])(e,t.ctx.point))/100),t.position=n});const n=W(t.adressen.filter(t=>null!=t),t=>t.position?t.position.distance:null);return t.position={nearest:n||null},t},tt=t=>(t.adressen.map(t=>{t&&t.oeffnungszeiten&&(t.oeffnungszeiten.map(t=>{const e=new K(t),n={name:t.name,status:e.currentStatus(),open:e.currentStatus().isOpen,termine:t.termine_nach_vereinbarung,days:e.days()};t.ctx=n}),t.open=Y(t.oeffnungszeiten.map(t=>t.ctx.open)))}),t.open=Y(t.adressen.map(t=>t&&t.open)),t),et=t=>{t.imgs=[];const e=[];return t.fotos&&t.fotos.length&&(t.imgs=X(t.fotos).map(t=>t.hex&&!e.includes(t.hex)||!t.hex?(e.push(t.hex),t.image):null).filter(t=>null!=t)),["",null].includes(t.logo)&&t.imgs.length&&(t.logo=t.imgs[0],t.imgs.shift()),["",null].includes(t.mainimage)&&t.imgs.length&&(t.mainimage=t.imgs[0],t.imgs.shift()),t},nt=t=>t?(t.adressen.map(t=>{const e={point:null,geojson_feature:null};t&&t.lng&&(e.point=Object(h["h"])([t.lng,t.lat])),t&&t.geojson&&(e.geojson_feature=JSON.parse(t.geojson)),t&&(t.ctx=e)}),et(t),t):t;function at(t){const e=y()(t);return e.hostname}async function st({eventId:t,container:e,position:n}){const a={eventId:t},s=x();let o=null;try{const t=await O.query({query:L,variables:a,fetchPolicy:"no-cache"});if(t.data&&(o=t.data.accountsApp.event,o)){const t=o.account;nt(t),tt(t),Z({account:t,container:e}),Q(t,n);const a=await s.accounts.get(t.slug);t.endpoint=a?a.endpoint:null,s.accounts.put(t),s.events.put(o)}}catch(i){}return o}async function ot({slug:t}){const e={slug:t},n=x();try{const t=await O.query({query:I,variables:e,fetchPolicy:"no-cache"});if(t.data&&t.data.accountsApp.account){const e=t.data.accountsApp.account.messages,a=t.data.accountsApp.account.slug;return n.messages.put({slug:a,messages:e}),e}return null}catch(a){return null}}async function it({slug:t}){const e={slug:t},n=x();try{const t=await O.query({query:P,variables:e,fetchPolicy:"no-cache"});if(t.data&&t.data.accountsApp.account){const e=t.data.accountsApp.account.profileblocks,a=t.data.accountsApp.account.slug;return n.blocks.put({slug:a,blocks:e}),e}return null}catch(a){return null}}async function ct({slug:t}){const e=x(),n=await e.messages.get(t);return n?n.messages:null}async function rt({slug:t}){const e=x(),n=await e.blocks.get(t);return n?n.blocks:null}async function lt({slug:t,href:e,_id:n,container:a,position:s}){const o={slug:null,endpoint:null,_id:null},i=x();t?o.slug=t:e?o.endpoint=at(e):n&&(o._id=n);let c=null;try{const t=await O.query({query:T,variables:o,fetchPolicy:"no-cache"});t.data&&t.data.accountsApp&&(c=t.data.accountsApp.account,c?(c.endpoint=o.endpoint,nt(c),tt(c),Z({account:c,container:a}),Q(c,s),i.accounts.put(c)):o.slug?i.accounts.delete(o.slug):o.endpoint?i.accounts.delete({endpoint:o.endpoint}):o._id&&i.accounts.delete({_id:o._id}))}catch(r){}return c}async function ut({eventId:t,container:e,position:n}){const a=x(),s=await a.events.get({_id:t});if(s){const t=s.account;tt(t),Z({account:t,container:e}),Q(t,n)}return s}async function dt({slug:t,href:e,_id:n,container:a,position:s}){let o=null;const i=x();if(t?o=await i.accounts.get(t):n&&(o=await i.accounts.get({_id:n})),!o&&e){let t=at(e);o=await i.accounts.get({endpoint:t})}return o&&(tt(o),Z({account:o,container:a}),Q(o,s),o.isCached=!0),o}function mt({account:t,position:e,event:n}){return n?(Q(n.account,e),n):(Q(t,e),t)}async function ht({account:t,name:e,email:n,message:a,phone:s,senderUrl:o}){try{const i=await O.mutate({mutation:D,variables:{accountId:t._id,name:e,email:n,message:a,phone:s,senderUrl:o}});return i.data?i.data.contactForm:{status:!1,message:"Keine Rückmeldung vom Server."}}catch(i){return{status:!1,message:"Keine Verbindung zum Server."}}}async function pt({event:t,name:e,phone:n,email:a,senderUrl:s}){try{const o=await O.mutate({mutation:E,variables:{eventId:t._id,name:e,phone:n,email:a,senderUrl:s}});return o.data?o.data.eventAction:{status:!1,message:"Keine Rückmeldung vom Server."}}catch(o){return{status:!1,message:"Keine Verbindung zum Server."}}}async function gt({event:t,responseJson:e,responseId:n}){try{const a=await O.mutate({mutation:M,variables:{eventId:t._id,responseJson:e,responseId:n}});return a.data?a.data.eventCalendlyReturn:{status:!1,message:"Keine Rückmeldung vom Server."}}catch(a){return{status:!1,message:"Keine Verbindung zum Server."}}}async function ft({event:t,responseId:e}){try{const n=await O.query({query:q,variables:{eventId:t._id,responseId:e},fetchPolicy:"no-cache"});return n.data?n.data.accountsApp.event.response:{status:!1,message:"Keine Rückmeldung vom Server."}}catch(n){return{status:!1,message:"Keine Verbindung zum Server."}}}const bt={event:null,account:null},vt={...c["c"].mutations(bt),SET_ACCOUNT:(t,e)=>{t.account=Object.freeze(e)}},_t={},yt={async fetchEvent({rootGetters:t},{eventId:e}){const n=t["containerBackend/container"];let a=await ut({eventId:e,container:n,position:t["appState/position"]});const s=st({eventId:e,container:n,position:t["appState/position"]}).then(e=>e?mt({event:e,position:t["appState/position"]}):e);return a?new Promise(t=>{t(a)}):s},async fetchMessages(t,{slug:e}){const n=await ot({slug:e});return n?Object.freeze(n):null},async cachedMessages(t,{slug:e}){const n=await ct({slug:e});return n?Object.freeze(n):null},async fetchBlocks(t,{slug:e}){const n=await it({slug:e});return n?Object.freeze(n):null},async cachedBlocks(t,{slug:e}){const n=await rt({slug:e});return n?Object.freeze(n):null},fetchAccount({rootGetters:t},{slug:e,endpoint:n,_id:a}){const s=t["containerBackend/container"],o=dt({slug:e,href:n,_id:a,container:s,position:t["appState/position"]}),i=lt({slug:e,href:n,_id:a,container:s,position:t["appState/position"]}).then(e=>e?mt({account:e,position:t["appState/position"]}):null);return{cached:o,fetched:i}},async positionChanged({commit:t,rootGetters:e,state:n}){const a=n.account;if(a){const n=mt({account:a,position:e["appState/position"]});return t("SET_ACCOUNT",n),n}return null},sendContactForm(t,{account:e,name:n,email:a,message:s,phone:o,senderUrl:i}){return ht({account:e,name:n,email:a,message:s,phone:o,senderUrl:i})},sendEventRequest(t,{event:e,name:n,email:a,phone:s,senderUrl:o}){return pt({event:e,name:n,email:a,phone:s,senderUrl:o})},updateEventCalendly(t,{event:e,responseJson:n,responseId:a}){return gt({event:e,responseJson:n,responseId:a})},getEventResponse(t,{event:e,responseId:n}){return ft({event:e,responseId:n})}},wt={namespaced:!0,state:bt,mutations:vt,getters:_t,actions:yt};a["a"].use(s["a"]);const kt={},xt={},Ct={},$t={},At=new s["a"].Store({strict:!0,plugins:[c["a"].plugin],modules:{plattform:m,appState:v,accountBackend:wt},state:kt,getters:xt,mutations:Ct,actions:$t}),jt=!1,Ot=i.a.sync(At,{autoWatch:jt});a["a"].use(Ot);e["a"]=At},4491:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return o}));n("d30b"),n("8ae5"),n("aff7"),n("5568");var a=n("b7d8");function s(t){return[t.geometry.coordinates[1],t.geometry.coordinates[0]]}function o(t,e){return Object(a["a"])(e,t)}},5610:function(t,e,n){},"56bb":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"grey darken-2 py-lg-2 account-canvas",attrs:{tile:""}},[n("v-card",{ref:"card",staticClass:"account-details-card max-width-container"},[t._t("jumbotron",(function(){return[t.$route.query.hideJumbotron?t._e():n("account-details-top-images",{attrs:{account:t.computedAccount}}),n("account-details-logo",{attrs:{account:t.computedAccount}})]})),t._t("afterJumbotron"),t._t("default"),t._t("leistungen",(function(){return[n("v-lazy",{attrs:{"min-height":"100"}},[n("account-details-leistungen",{attrs:{account:t.computedAccount}})],1)]})),t._t("events",(function(){return[n("account-details-events",{attrs:{account:t.computedAccount}})]})),t.$route.query.slideshow?n("v-lazy",[n("account-details-messages-slideshow",{attrs:{account:t.computedAccount}})],1):t._e(),n("v-lazy",[n("account-details-profile-blocks",{attrs:{account:t.computedAccount}})],1),n("account-details-rezensionen",{attrs:{account:t.computedAccount}}),t._t("afterRezensionen"),n("v-lazy",[n("account-details-messages",{attrs:{account:t.computedAccount}})],1),n("v-lazy",[n("account-details-images",{attrs:{account:t.computedAccount}})],1),n("v-card",{attrs:{flat:"",tile:""}},[n("v-card-title",[n("h2",{staticClass:"title"},[n("v-icon",{staticClass:"mr-3"},[t._v(" mdi-storefront ")]),t._v(" Kontakt ")],1)]),n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[t.computedAccount.is_contactable?n("account-details-contact-form",{attrs:{account:t.computedAccount}}):t._e()],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("account-details-profile",{attrs:{account:t.computedAccount,adresse:t.adresse}})],1)],1),n("v-row",[n("v-col",[n("account-details-links",{attrs:{account:t.computedAccount}})],1)],1)],1)],1),t.adressen.length?n("v-lazy",{attrs:{"min-height":"200"}},[n("v-sheet",{staticStyle:{overflow:"hidden"}},[t.adressen.length>1?[n("v-tabs",{attrs:{grow:"",centered:"","show-arrows":""},model:{value:t.addressTab,callback:function(e){t.addressTab=e},expression:"addressTab"}},t._l(t.adressen,(function(e,a){return n("v-tab",{key:a+"-"+e.lat+"-"+e.lng},[e.label?[t._v(" "+t._s(e.label)+" ")]:[t._v(" "+t._s(e.ort)+" ")]],2)})),1),n("v-tabs-items",{attrs:{touchless:""},model:{value:t.addressTab,callback:function(e){t.addressTab=e},expression:"addressTab"}},t._l(t.adressen,(function(e,a){return n("v-tab-item",{key:a+"-"+e.lat+"-"+e.lng},[n("account-details-address",{attrs:{adresse:e,container:t.container,account:t.computedAccount}})],1)})),1)]:t.adressen.length?[n("account-details-address",{attrs:{adresse:t.adressen[0],container:t.container,account:t.computedAccount}})]:t._e()],2)],1):t._e(),t.isContainerPlattform?n("v-lazy",[n("account-details-container",{attrs:{account:t.computedAccount}})],1):t._e(),n("account-details-impressum",{attrs:{account:t.computedAccount}}),t._t("footer")],2)],1)},s=[],o=n("2b0e"),i=n("d6e6"),c=n.n(i),r=n("4227"),l=n("f7fe"),u=n.n(l),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-container",{staticClass:"py-0 my-0 mb-n8 account-details-top-images",attrs:{fluid:""}},[n("v-row",[t.panos.length?n("v-col",{staticClass:"pa-0 ma-0"},[n("v-carousel",{staticClass:"pa-0 ma-0",attrs:{height:"400","hide-delimiters":"",continuous:"",cycle:"",interval:1e4,"show-arrows":t.panos.length>1}},t._l(t.panos,(function(e){return n("v-carousel-item",{key:e.src,attrs:{"lazy-src":t._f("assets_url")(e.src,"resize=100x50"),src:t._f("assets_url")(e.src,e.filter),height:400,"max-height":400,cover:"",transition:"clazyload"}})})),1)],1):t.images.length?n("v-col",{staticClass:"pa-0"},[n("simplebar",{attrs:{"data-simplebar-auto-hide":"true"}},[n("div",{staticClass:"d-flex"},t._l(t.images,(function(e){return n("v-img",{key:e.src,staticClass:"align-end justify-end text-right",staticStyle:{"max-width":"none"},attrs:{src:t._f("assets_url")(e.src,e.filter),"lazy-src":t._f("assets_url")(e.src,"resize=100x100"),"max-height":400,"min-height":400,height:400,width:e.width,"aspect-ratio":1,position:"center top",cover:"",transition:"clazyload"}})})),1)])],1):t.mainimage?n("v-col",{staticClass:"pa-0 ma-0"},[n("img",{attrs:{src:t._f("assets_url")(t.mainimage,"thumb=1264x400|fixed_blur=1264x400"),"aspect-ratio":21/9}})]):t._e()],1)],1):t._e()},m=[],h=n("94da"),p=n("8d3b");n("f138");const g=n("e0d5"),f=n("b71a");var b={filters:{assets_url:h["a"]},props:["account"],components:{simplebar:p["a"]},computed:{show(){return!!this.panos.length||(this.images.length>=this.minTopImages||!!this.mainimage)},minTopImages(){return this.$vuetify.breakpoint.xlOnly?6:this.$vuetify.breakpoint.lgOnly?5:this.$vuetify.breakpoint.mdOnly?4:this.$vuetify.breakpoint.smOnly?3:this.$vuetify.breakpoint.xsOnly?2:6},mainimage(){return this.account.mainimage},panos(){let t=this.account.panoramen.map(t=>({src:t.image,filter:`faces|resize=${this.jumbotron_image_width}x${this.jumbotron_image_height}`,width:1264}));return t=t.concat(this.account.jumbotron_images.map(t=>({src:t.image,filter:`faces|resize=${this.jumbotron_image_width}x${this.jumbotron_image_height}`,width:1264}))),g(f(t,"src"))},images(){const t=this.account.imgs.map(t=>({src:t,filter:`faces|resize=${this.default_image_width}x${this.default_image_height}|fixed_blur=${this.default_image_width}x${this.default_image_height}`,width:this.default_image_width}));return t},default_image_width(){return 400},default_image_height(){return 400},jumbotron_image_width(){const t=Math.min(this.$vuetify.breakpoint.width,1264);return Math.floor(Math.min(2e3,t))},jumbotron_image_height(){return 400}}},v=b,_=n("2877"),y=n("6544"),w=n.n(y),k=n("5e66"),x=n("3e35"),C=n("62ad"),$=n("a523"),A=n("adda"),j=n("0fd9"),O=Object(_["a"])(v,d,m,!1,null,null,null),S=O.exports;w()(O,{VCarousel:k["a"],VCarouselItem:x["a"],VCol:C["a"],VContainer:$["a"],VImg:A["a"],VRow:j["a"]});var V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{style:t.background,attrs:{fluid:"",id:"account-details-logo-container"}},[n("v-card",{staticClass:"mb-3",attrs:{elevation:"10"}},[n("v-row",[null!=t.image?n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-img",{staticClass:"mx-2",attrs:{src:t._f("assets_url")(t.image,"fixed=ffffff,370x180|quality=100"),"lazy-src":t._f("assets_url")(t.image,"thumb=100x50"),position:"center center","max-height":"200",contain:t.contain}})],1):t._e(),n("v-col",{staticClass:"justify-center d-flex flex-column"},[n("h1",{staticClass:"text-h4 font-weight-medium text-center text-sm-left px-sm-3"},[t._v(" "+t._s(t.account.name)+" ")]),t.account.about?n("h2",{staticClass:"mx-2 mt-2 text-center text-sm-left text-subtitle-1",domProps:{innerHTML:t._s(t.about)}}):t.account.www?n("div",{staticClass:"text-center text-sm-left"},[n("v-btn",{staticClass:"mt-2 mx-sm-2",attrs:{rounded:"",outlined:"",color:"blue-grey",small:"",href:t.account.www,target:"_blank"}},[t._v(t._s(t._f("host")(t.account.www)))])],1):t._e()])],1)],1)],1)},z=[],B=n("1816"),T=n.n(B),I=n("1901"),P=n.n(I),L={name:"AccountDetailsLogo",components:{},filters:{assets_url:h["a"],host(t){const e=T()(t);return e.hostname}},props:["account"],data(){return{}},computed:{background(){return""},contain(){return!!this.account.logo||!this.account.mainimage},image(){return this.account.logo?this.account.logo:this.account.mainimage?this.account.mainimage:null},about(){return P()(this.account.about)}},watch:{},mounted(){},methods:{}},D=L,E=n("8336"),q=n("b0af"),M=Object(_["a"])(D,V,z,!1,null,null,null),R=M.exports;w()(M,{VBtn:E["a"],VCard:q["a"],VCol:C["a"],VContainer:$["a"],VImg:A["a"],VRow:j["a"]});var F=n("a567"),N=n("9459"),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.account.impressum.length>0?n("v-card",{staticClass:"grey lighten-3",attrs:{flat:"",tile:""}},[n("v-card-title",{staticClass:"display"},[n("h2",{staticClass:"title"},[n("v-icon",{staticClass:"mr-3"},[t._v(" mdi-format-section ")]),t._v(" Impressum ")],1)]),n("v-container",{staticClass:"pa-6 pt-0",attrs:{fluid:""}},[n("v-row",{staticClass:"body-2"},t._l(t.impressum,(function(e){return n("v-col",{key:e.name,staticClass:"py-0 my-1",attrs:{cols:"12",sm:"6"}},[t._v(" "+t._s(e.name)+": "),t.$vuetify.breakpoint.sm?n("br"):t._e(),n("span",{staticClass:"font-weight-bold",domProps:{innerHTML:t._s(t.bbcode(e.value))}})])})),1),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("account-details-dsgvo",{attrs:{account:t.account}})],1)],1)],1)],1):t._e()},H=[],G=n("0aea"),J={name:"AccountDetailsImpressum",components:{"account-details-dsgvo":()=>n.e("chunk-599cdcd7").then(n.bind(null,"07a3"))},filters:{},props:["account"],data(){return{}},computed:{impressum(){return this.account.impressum.filter(t=>""!=t.name&&""!=t.value)}},watch:{},mounted(){},methods:{bbcode(t){return G["a"].parse(t)}}},K=J,W=n("99d9"),Y=n("132d"),X=Object(_["a"])(K,U,H,!1,null,null,null),Z=X.exports;w()(X,{VCard:q["a"],VCardTitle:W["d"],VCol:C["a"],VContainer:$["a"],VIcon:Y["a"],VRow:j["a"]});var Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.links.length>0?n("v-card",{staticStyle:{overflow:"hidden"}},[n("v-list",t._l(t.links,(function(e){return n("v-list-item",{key:e.url,class:e.class,attrs:{link:"",href:e.url,target:"_blank"}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-title",[t._v(t._s(e.label))])],1)})),1)],1):t._e()},tt=[],et=n("7ffd");const nt=n("b71a");var at={name:"AccountDetailsLinks",components:{},props:["account"],data(){return{}},computed:{isContainerPlattform:Object(et["b"])("plattform/isContainerPlattform"),links(){let t=[];return t=t.concat(this.account.links.map(t=>{let e=t.label;if(!e){const n=new T.a(t.url);e=n.hostname}return new Object({icon:"mdi-web",label:e,url:t.url})})),this.isContainerPlattform&&!this.account.editorial&&t.push(new Object({url:this.account.sta_www,label:new T.a(this.account.sta_www).hostname,icon:"mdi-information-outline",class:""})),nt(t,"label")}},watch:{},mounted(){},methods:{}},st=at,ot=n("8860"),it=n("da13"),ct=n("34c3"),rt=n("5d23"),lt=Object(_["a"])(st,Q,tt,!1,null,null,null),ut=lt.exports;w()(lt,{VCard:q["a"],VIcon:Y["a"],VList:ot["a"],VListItem:it["a"],VListItemIcon:ct["a"],VListItemTitle:rt["c"]});var dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{elevation:"14"}},[t.mainimage?n("v-img",{attrs:{src:t.mainimage,"max-height":"350"}}):t._e(),t.account.profile?n("div",{staticClass:"black--text pa-4",domProps:{innerHTML:t._s(t.account.profile)}}):t._e(),n("account-details-main-buttons",{attrs:{account:t.account,adresse:t.adresse}})],1)},mt=[],ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"d-flex justify-center align-center flex-row pa-3"},[t.www?n("v-btn",{staticClass:"mr-2 blue",attrs:{href:t.www,target:"_blank",fab:"",large:"",outlined:""}},[n("v-icon",{attrs:{color:"white"}},[t._v(" mdi-web ")])],1):t._e(),t._l(t.account.facebookpages,(function(e){return n("v-btn",{key:e.fbid,staticClass:"mr-2 blue",attrs:{href:"https://www.facebook.com/"+e.fbid,fab:"",large:"",outlined:"",target:"_blank",rel:"noopener"}},[n("v-icon",{attrs:{color:"white"}},[t._v(" mdi-facebook ")])],1)})),t._l(t.account.instagramprofiles,(function(e){return n("v-btn",{key:e.igid,staticClass:"mr-2 blue",attrs:{href:"https://www.instagram.com/"+e.igid,fab:"",large:"",outlined:"",target:"_blank",rel:"noopener"}},[n("v-icon",{attrs:{color:"white"}},[t._v(" mdi-instagram ")])],1)})),t._l(t.telefon,(function(e,a){return n("v-btn",{key:a+"-"+e.typ+"-"+e.nummer,staticClass:"mr-2 blue",attrs:{href:"tel:"+e.nummer,fab:"",large:"",outlined:""}},["Handy"==e.typ?n("v-icon",{attrs:{color:"white"}},[t._v(" mdi-cellphone-android ")]):t._e(),"Telefon"==e.typ?n("v-icon",{attrs:{color:"white"}},[t._v(" mdi-phone ")]):t._e()],1)})),null!=t.adresse?n("v-btn",{staticClass:"mr-2 blue",attrs:{href:"https://www.google.com/maps/dir/?api=1&destination="+t.adresse.lat+","+t.adresse.lng,fab:"",large:"",outlined:"",target:"_blank",rel:"noopener"}},[n("v-icon",{attrs:{color:"white"}},[t._v(" mdi-car ")])],1):t._e()],2)},pt=[];const gt=n("9b22");var ft={name:"AccountDetailsMainButtons",components:{},props:["account","adresse"],data(){return{}},computed:{telefon(){return this.adresse?0==this.adresse.telefon.length?[]:gt(this.adresse.telefon.filter(t=>"Fax"!=t.typ),"typ").slice(0,1):[]},www(){return this.account.www?this.account.www:this.adresse&&this.adresse.www?this.adresse.www:this.account.editorial?null:this.account.sta_www}}},bt=ft,vt=n("8dd9"),_t=Object(_["a"])(bt,ht,pt,!1,null,"2a7b37da",null),yt=_t.exports;w()(_t,{VBtn:E["a"],VIcon:Y["a"],VSheet:vt["a"]});var wt={name:"AccountDetailsProfile",components:{AccountDetailsMainButtons:yt},filters:{nl2br(t){return t.replace("\n","<br>")}},props:{account:{},adresse:{}},data(){return{}},computed:{mainimage(){return this.account.mainimage?this.account.logo?Object(h["a"])(this.account.mainimage,"thumb=600x250|fixed_blur=600x250|quality=100",Object(h["a"])(this.account.logo,"thumb=600x250|fixed_blur=600x250|quality=100")):Object(h["a"])(this.account.mainimage,"thumb=600x250|fixed_blur=600x250|quality=100"):this.account.logo?Object(h["a"])(this.account.logo,"thumb=600x250|fixed_blur=600x250|quality=100"):this.account.panoramen.length?Object(h["a"])(this.account.panoramen[0].image,"thumb=600x250|fixed_blur=600x250|quality=100"):this.account.images.length?Object(h["a"])(this.account.images[0].image,"thumb=600x250|fixed_blur=600x250|quality=100"):this.account.feed_images.length?Object(h["a"])(this.account.feed_images[0].image,"thumb=600x250|fixed_blur=600x250|quality=100"):this.account.jumbotron_images.length?Object(h["a"])(this.account.jumbotron_images[0].image,"thumb=600x250|fixed_blur=600x250|quality=100"):null}},watch:{},mounted(){},methods:{}},kt=wt,xt=Object(_["a"])(kt,dt,mt,!1,null,null,null),Ct=xt.exports;w()(xt,{VCard:q["a"],VImg:A["a"]});const $t=n("22d1"),At=n("3001"),jt=n("9b22"),Ot=n("2fb4");var St={name:"AccountDetails",components:{AccountDetailsTopImages:S,AccountDetailsLogo:R,AccountDetailsLeistungen:F["a"],AccountDetailsContactForm:N["a"],AccountDetailsImpressum:Z,AccountDetailsLinks:ut,AccountDetailsProfile:Ct,"account-details-profile-blocks":()=>Promise.all([n.e("chunk-7378afc2"),n.e("chunk-547e0232")]).then(n.bind(null,"aa43")),"account-details-address":()=>n.e("chunk-3a4572fc").then(n.bind(null,"70a9")),"account-details-images":()=>Promise.all([n.e("chunk-7378afc2"),n.e("chunk-174e56ee")]).then(n.bind(null,"8f9f")),"account-details-events":()=>n.e("chunk-336a5daf").then(n.bind(null,"955c")),"account-details-messages":()=>Promise.all([n.e("chunk-7378afc2"),n.e("chunk-e14bb096")]).then(n.bind(null,"61e8")),"account-details-rezensionen":()=>n.e("chunk-0fc02687").then(n.bind(null,"926a")),"account-details-container":()=>n.e("chunk-12770743").then(n.bind(null,"3fe2")),"account-details-messages-slideshow":()=>n.e("chunk-03c958ca").then(n.bind(null,"f121"))},props:{account:{},showBackLink:{type:Boolean,default:!1}},data(){return{addressTab:null}},created(){this.adresse&&(this.addressTab=`${this.adresse.lat}-${this.adresse.lng}`),this.track()},mounted(){this.debouncedPositionChanged=u()(this.positionChanged)},methods:{positionChanged(){this.$store.dispatch("accountBackend/positionChanged")},track(){if(this.computedAccount.facebook_pixel&&(this.$analytics.fbq.init(this.computedAccount.facebook_pixel),this.$analytics.fbq.event("PageView")),!this.$gtm||!this.$gtm.enabled()){let t=["GTM-MX5382L"];this.computedAccount.gtag_id&&t.push(this.computedAccount.gtag_id),o["a"].use(c.a,{id:t,enabled:!0,debug:!1,loadScript:!0,defer:!0,vueRouter:this.$router})}let t=null;this.container&&(t=this.container.name),this.$gtm.trackEvent({event:null,category:"Landingpage",action:"show",label:this.computedAccount.name,value:100,noninteraction:!1,container:t,userSlug:this.computedAccount.slug}),this.$gtm.trackView("Landingpage",window.location.pathname)}},watch:{positionBlurred(t,e){if(null!=t)if(null!=e){const n=1e3*Object(r["a"])(t,e);n>2e3&&this.debouncedPositionChanged()}else this.debouncedPositionChanged()}},computed:{position:Object(et["b"])("appState/position"),positionBlurred:Object(et["b"])("appState/positionBlurred"),positionWatchExists:Object(et["b"])("appState/positionWatchExists"),isContainerPlattform:Object(et["b"])("plattform/isContainerPlattform"),container(){return this.$store.state.containerBackend?this.$store.get("containerBackend/container"):null},computedAccount(){return this.account},tel(){return Ot(this.adressen.map(t=>t.telefon.filter(t=>"Telefon"==t.typ||"Handy"==t.typ)))},adressen(){let t,e=null;return this.container?e=t=>this.container.slug in t.containerCtx?t.containerCtx[this.container.slug].distance:null:this.position&&(e=t=>{if(null==t.position.distance)return null;t.position.distance}),t=e?jt(this.computedAccount.adressen,[e]):this.computedAccount.adressen,t},logo(){return this.computedAccount.logo},adresse(){const t=this.computedAccount.adressen.find(t=>`${t.lat}-${t.lng}`==this.addressTab);return At(t,$t(this.adressen))},telefon(){return null==this.adresse?null:this.adresse.telefon.length?$t(jt(this.adresse.telefon.filter(t=>"Fax"!=t.typ),"typ")):null}}},Vt=St,zt=(n("9e02"),n("b687")),Bt=n("71a3"),Tt=n("c671"),It=n("fe57"),Pt=n("aac8"),Lt=Object(_["a"])(Vt,a,s,!1,null,null,null);e["a"]=Lt.exports;w()(Lt,{VCard:q["a"],VCardTitle:W["d"],VCol:C["a"],VContainer:$["a"],VIcon:Y["a"],VLazy:zt["a"],VRow:j["a"],VSheet:vt["a"],VTab:Bt["a"],VTabItem:Tt["a"],VTabs:It["a"],VTabsItems:Pt["a"]})},"65ad":function(t,e,n){},"91d8":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("account-details-app-bar",{attrs:{account:t.computedAccount,adresse:t.adresse,"show-back-link":t.showBackLink},on:{tab:function(e){t.topTab=e}}}),n("v-main",{attrs:{app:""}},[n("account-details-top-tabs",{attrs:{account:t.computedAccount,adresse:t.adresse,tab:t.topTab}}),t._t("default",(function(){return[n("account-details",{key:t.computedAccount._id,attrs:{account:t.computedAccount,"show-back-link":t.showBackLink}})]}))],2)],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"grey darken-4",dark:"","hide-on-scroll":!t.ios,dense:""}},[t.showBackLink?n("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-arrow-left")])],1):t._e(),null!=t.account?[n("v-tabs",{attrs:{optional:"",right:""},model:{value:t.tab_value,callback:function(e){t.tab_value=e},expression:"tab_value"}},[t.$vuetify.breakpoint.smAndUp&&t.adresse&&t.adresse.oeffnungszeiten.length?n("v-tab",{staticStyle:{"min-width":"0"},attrs:{href:"#open"}},[n("v-icon",[t._v("mdi-clock")])],1):t._e(),t.account.adressen.length?n("v-tab",{staticStyle:{"min-width":"0"},attrs:{href:"#map"}},[n("v-icon",[t._v("mdi-map-marker")])],1):t._e(),t.account.is_contactable?n("v-tab",{staticStyle:{"min-width":"0"},attrs:{href:"#contact"}},[n("v-btn",{staticClass:"black--text",attrs:{color:"yellow darken-1",rounded:"",small:""}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-email-outline")]),t._v(" Nachricht")],1)],1):t._e()],1),"account"!=t.$route.name?n("account-details-go-to-startpage",{attrs:{account:t.account}}):t._e()]:t._e()],2)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"d-flex justify-end",attrs:{color:"transparent"}},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{icon:""}},a),[n("v-icon",{attrs:{color:"white"}},[t._v(" mdi-dots-vertical ")])],1)]}}])},[n("v-list",[n("v-list-item",{attrs:{to:{name:"account",params:{account_slug:t.account.slug}}}},[n("v-list-item-title",[t._v("Start")])],1)],1)],1)],1)},r=[],l={name:"AccountDetailsGoToStartpage",components:{},props:["account"],data(){return{}},computed:{},watch:{},mounted(){},methods:{}},u=l,d=n("2877"),m=n("6544"),h=n.n(m),p=n("8336"),g=n("132d"),f=n("8860"),b=n("da13"),v=n("5d23"),_=n("e449"),y=n("8dd9"),w=Object(d["a"])(u,c,r,!1,null,null,null),k=w.exports;h()(w,{VBtn:p["a"],VIcon:g["a"],VList:f["a"],VListItem:b["a"],VListItemTitle:v["c"],VMenu:_["a"],VSheet:y["a"]});var x=n("8ba3");const C=n("9b22");var $={name:"AccountDetailsAppBar",props:["account","adresse","showBackLink"],components:{AccountDetailsGoToStartpage:k},data(){return{tab_value:null}},watch:{tab_value(t){null!=t&&this.$vuetify.goTo(0,{offset:0}),this.$emit("tab",t)}},computed:{ios(){return Object(x["a"])()},telefon(){return null==this.adresse||0==this.adresse.telefon.length?[]:C(this.adresse.telefon.filter(t=>"Fax"!=t.typ),"typ").slice(0,1)},www(){return this.account.www?this.account.www:this.adresse&&this.adresse.www?this.adresse.www:this.account.sta_www}}},A=$,j=n("40dc"),O=n("71a3"),S=n("fe57"),V=Object(d["a"])(A,o,i,!1,null,null,null),z=V.exports;h()(V,{VAppBar:j["a"],VBtn:p["a"],VIcon:g["a"],VTab:O["a"],VTabs:S["a"]});var B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"my-0 grey darken-4",attrs:{tile:"",flat:""}},[n("v-expand-transition",["open"==t.tab?n("v-container",{attrs:{fluid:""}},[n("v-row",t._l(t.account.adressen,(function(e){return n("v-col",{key:e.lat+"-"+e.lng},[n("v-card",{staticClass:"fill-height"},[n("v-card-title",[e.label?[t._v(" "+t._s(e.label)+" ")]:[t._v(" "+t._s(e.ort)+" ")]],2),n("account-details-address-opening-hours",{attrs:{openinghours:e.oeffnungszeiten[0]}})],1)],1)})),1)],1):t._e()],1),n("v-expand-transition",["contact"==t.tab&&t.account.is_contactable?n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",[n("account-details-contact-form",{attrs:{account:t.account}})],1)],1)],1):t._e()],1),n("v-expand-transition",["map"==t.tab?n("v-container",{class:{"px-0":t.$vuetify.breakpoint.xsOnly},attrs:{fluid:""}},t._l(t.account.adressen,(function(e){return n("v-row",{key:e.lat+"-"+e.lng},[n("v-col",[n("v-card",[n("account-details-address",{attrs:{adresse:e,container:null,account:t.account}})],1)],1)],1)})),1):t._e()],1)],1)},T=[],I=n("9459"),P={name:"AccountDetailsTopTabs",props:["account","adresse","tab"],components:{AccountDetailsContactForm:I["a"],"account-details-address-opening-hours":()=>n.e("chunk-2bfa586a").then(n.bind(null,"826e")),"account-details-address":()=>n.e("chunk-3a4572fc").then(n.bind(null,"70a9"))}},L=P,D=n("b0af"),E=n("99d9"),q=n("62ad"),M=n("a523"),R=n("0789"),F=n("0fd9"),N=Object(d["a"])(L,B,T,!1,null,null,null),U=N.exports;h()(N,{VCard:D["a"],VCardTitle:E["d"],VCol:q["a"],VContainer:M["a"],VExpandTransition:R["a"],VRow:F["a"]});var H=n("56bb"),G=n("7ffd"),J=n("94da"),K=n("1816"),W=n.n(K);const Y=n("22d1"),X=n("f9cd"),Z=n("3001"),Q=n("9b22"),tt=n("14e8"),et=n("2fb4");var nt={name:"AccountApp",components:{AccountDetailsAppBar:z,AccountDetailsTopTabs:U,AccountDetails:H["a"]},props:{account:{},showBackLink:{type:Boolean,default:!1}},data(){return{addressTab:null,topTab:null}},jsonld(){const t={"@context":"http://schema.org/","@type":"LocalBusiness",name:this.computedAccount.name,currenciesAccepted:"EUR"},e=this.computedAccount.profile_txt||this.computedAccount.about||`Firmenprofil von ${this.computedAccount.name} (`+this.computedAccount.sparten.map(t=>t.bezeichnung_einzahl).slice(0,5).join(", ")+") in "+this.computedAccount.adressen.map(t=>t.ort).slice(0,5).join(", ");if(t["description"]=e,this.adresse&&(t["address"]={"@type":"PostalAddress",streetAddress:this.adresse.strasse,postalCode:this.adresse.plz,addressLocality:this.adresse.ort,addressCountry:this.adresse.country},t["geo"]={"@type":"GeoCoordinates",latitude:this.adresse.ctx.point.geometry.coordinates[1],longitude:this.adresse.ctx.point.geometry.coordinates[0]},this.adresse.oeffnungszeiten.length)){const e=this.adresse.oeffnungszeiten[0],n=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],a=e.tage.map((t,e)=>{if(null==t)return null;let a=t.slice(0,4).filter(t=>null!=t),s=null,o=null;a.length>1&&(s=Y(a),o=X(a));const i={"@type":"OpeningHoursSpecification",dayOfWeek:[n[e]]};return null!=s&&(i["opens"]=s.split(":").slice(0,2).join(":")),null!=o&&(i["closes"]=o.split(":").slice(0,2).join(":")),i}).filter(t=>null!=t);a.length>0&&(t["openingHoursSpecification"]=a)}const n=tt(this.computedAccount.impressum,t=>"Firmenname"==t.name);n&&(t["legalName"]=n.value);const a=Y(this.tel);a&&(t["telephone"]=a.nummer),this.computedAccount.logo&&(t["logo"]=Object(J["a"])(this.computedAccount.logo));const s=this.computedAccount.imgs;if(s.length>0&&(t["image"]=s.slice(0,10).map(t=>Object(J["a"])(t.src))),this.computedAccount.canonical_url)t["url"]=this.computedAccount.canonical_url;else{const e=W()(window.location.href);t["url"]="https://"+e.hostname+this.$router.resolve({name:"account",params:{account_slug:this.computedAccount.slug}}).href}return t["@id"]=t["url"],t},created(){this.adresse&&(this.addressTab=`${this.adresse.lat}-${this.adresse.lng}`)},mounted(){this.positionWatchExists||navigator.permissions&&navigator.permissions.query({name:"geolocation"}).then(t=>{"granted"===t.state&&this.$vuexGeolocation.watchPosition()})},methods:{},computed:{position:Object(G["b"])("appState/position"),positionBlurred:Object(G["b"])("appState/positionBlurred"),positionWatchExists:Object(G["b"])("appState/positionWatchExists"),isContainerPlattform:Object(G["b"])("plattform/isContainerPlattform"),container(){return this.$store.state.containerBackend?this.$store.get("containerBackend/container"):null},computedAccount(){return this.account},tel(){return et(this.adressen.map(t=>t.telefon.filter(t=>"Telefon"==t.typ||"Handy"==t.typ)))},adressen(){let t,e=null;return this.container?e=t=>this.container.slug in t.containerCtx?t.containerCtx[this.container.slug].distance:null:this.position&&(e=t=>{if(null==t.position.distance)return null;t.position.distance}),t=e?Q(this.computedAccount.adressen,[e]):this.computedAccount.adressen,t},logo(){return this.computedAccount.logo},adresse(){const t=this.computedAccount.adressen.find(t=>`${t.lat}-${t.lng}`==this.addressTab);return Z(t,Y(this.adressen))}}},at=nt,st=n("7496"),ot=n("f6c4"),it=Object(d["a"])(at,a,s,!1,null,null,null);e["a"]=it.exports;h()(it,{VApp:st["a"],VMain:ot["a"]})},9459:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{elevation:"14"}},[n("v-card-title",{staticClass:"grey lighten-2 pa-3"},[n("h3",{staticClass:"title"},[n("v-avatar",{staticClass:"mr-3",attrs:{color:"white",size:"32"}},[n("v-icon",{attrs:{small:""}},[t._v(" mdi-message-bulleted ")])],1),t._v(" Anfrage senden ")],1)]),n("v-divider"),n("v-form",{ref:"form",staticClass:"px-3 pt-2",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{dense:""}},[n("v-col",[n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-account-circle",label:"Name",outlined:"",rules:t.nameRules},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-cellphone",label:"Telefon",outlined:""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-col",[n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-email",label:"e-mail",rules:t.emailRules,outlined:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),n("v-row",{attrs:{dense:""}},[n("v-col",[n("v-textarea",{attrs:{"prepend-inner-icon":"mdi-message",label:"Nachricht","auto-grow":"",rows:2,rules:t.messagesRules,outlined:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1)],1)],1),n("v-divider"),n("v-scale-transition",[null!=t.response?n("v-alert",{staticClass:"ma-2",attrs:{type:t.response.status?"info":"error",border:"left"}},[t._v(" "+t._s(t.response.message)+" ")]):t._e()],1),n("v-card-actions",{staticClass:"grey lighten-2 pa-3"},[n("v-spacer"),n("v-btn",{attrs:{color:"yellow darken-1",disabled:!t.valid||null!=t.response&&t.response.status},on:{click:t.send}},[t._v(" absenden ")])],1)],1)},s=[],o={name:"AccountDetailsContactForm",props:["account"],data(){return{name:null,phone:null,email:null,message:null,nameRules:[t=>!!t||"Bitte Namen eingeben"],emailRules:[t=>!!t||"Bitte e-mail Adresse eingeben"],messagesRules:[t=>!!t||"Bitte Nachricht eingeben"],valid:null,response:null}},computed:{},watch:{},mounted(){this.$gtm&&this.$gtm.enabled()&&this.$gtm.trackEvent({event:null,category:"Kontaktformular",action:"show",label:this.account.name,value:1,noninteraction:!1,container:null,userSlug:this.account.slug})},methods:{async send(){const t=await this.$store.dispatch("accountBackend/sendContactForm",{account:this.account,name:this.name,email:this.email,message:this.message,phone:this.phone,senderUrl:window.location.href});this.response=t,this.$gtm&&this.$gtm.enabled()&&this.$gtm.trackEvent({event:null,category:"Kontaktformular",action:"send",label:this.account.name,value:1,noninteraction:!1,container:null,userSlug:this.account.slug})}}},i=o,c=n("2877"),r=n("6544"),l=n.n(r),u=n("0798"),d=n("8212"),m=n("8336"),h=n("b0af"),p=n("99d9"),g=n("62ad"),f=n("a523"),b=n("ce7e"),v=n("4bd4"),_=n("132d"),y=n("0fd9"),w=n("0789"),k=n("2fa4"),x=n("8654"),C=n("a844"),$=Object(c["a"])(i,a,s,!1,null,null,null);e["a"]=$.exports;l()($,{VAlert:u["a"],VAvatar:d["a"],VBtn:m["a"],VCard:h["a"],VCardActions:p["a"],VCardTitle:p["d"],VCol:g["a"],VContainer:f["a"],VDivider:b["a"],VForm:v["a"],VIcon:_["a"],VRow:y["a"],VScaleTransition:w["d"],VSpacer:k["a"],VTextField:x["a"],VTextarea:C["a"]})},"94da":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return o}));var a=n("307d");function s(t,e=null){if(null==t)return null;let n;const s="https://assets.sta.io";if(n=null!=e?"/f:"+e:"",t.startsWith("http")){const e=Object(a["escape"])(Object(a["encode"])(t));let o=`${s}${n}/dl/:b64/${e}?api_key=vjjlhfuw4PebucuhTey4`;return o}return`${s}/site_media${n}/${t}`}function o(t){const e=new Date(t);return e.toLocaleDateString("de-AT",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}},"9e02":function(t,e,n){"use strict";n("5610")},a2a4:function(t,e,n){"use strict";n("65ad")},a567:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[null!=t.services?n("v-card",{staticClass:"justify-center grey darken-1 services-container",attrs:{tile:"",flat:""}},[n("v-container",{attrs:{fluid:""}},t._l(t.services,(function(e,a){return n("v-row",{key:a,attrs:{justify:"center",dense:t.$vuetify.breakpoint.xsOnly}},t._l(e,(function(e){return n("v-col",{key:e.name},[n("v-card",{staticClass:"pa-0 align-center d-flex flex-column fill-height services-card",attrs:{href:e.url}},[e.background?n("v-img",{staticClass:"text-right",attrs:{src:t._f("assets_url")(e.background,"faces|resize=640x440|quality=100"),"lazy-src":t._f("assets_url")(e.background,"resize=100x50"),cover:"",position:"top","aspect-ratio":1.5,width:"100%"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[e.url?n("v-btn",{staticClass:"mt-2 mr-2",attrs:{fab:"",outlined:"","x-small":"",color:"blue-grey"}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-share")])],1):t._e()],1):n("div",{staticClass:"service-icon-avatar"},[e.url?n("v-btn",{attrs:{icon:"",absolute:"",right:""}},[n("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-share")])],1):t._e(),n("v-avatar",{attrs:{color:"grey lighten-3",size:"65"}},[n("v-icon",{attrs:{large:""},domProps:{innerHTML:t._s(e.icon?e.icon:"mdi-star")}})],1)],1),n("v-card-title",{staticClass:"ma-0 pa-3"},[n("h3",{staticClass:"subtitle-1 text-center font-weight-bold"},[t._v(" "+t._s(e.name)+" ")])]),e.text?n("v-card-text",{staticClass:"pb-0",domProps:{innerHTML:t._s(e.text)}}):t._e()],1)],1)})),1)})),1)],1):t._e(),n("v-lazy",[0!=t.highlighted.length?n("v-card",{staticClass:"justify-center grey lighten-1 blurred-bg",attrs:{flat:"",tile:"",img:t._f("assets_url")(t.background,"fixed_blurred=400x200")}},[n("v-container",{attrs:{fluid:""}},[n("v-row",t._l(t.highlighted,(function(e){return n("v-col",{key:e.name,attrs:{cols:"12",sm:"6"}},[n("v-card",{staticClass:"pa-0 align-center justify-center d-flex flex-column fill-height",attrs:{dark:"",color:"grey darken-3",href:e.url}},[e.background?n("v-img",{staticClass:"d-flex justify-center align-end",attrs:{src:t._f("assets_url")(e.background,"faces|thumb=700x350|quality=100"),"lazy-src":t._f("assets_url")(e.background,"resize=100x50"),cover:"","aspect-ratio":t.$vuetify.breakpoint.xsOnly?1.5:2,width:"100%"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[e.url?n("v-btn",{staticClass:"ml-2",attrs:{fab:"",outlined:"","x-small":"",icon:"",color:"blue-grey"}},[n("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-share")])],1):t._e(),e.icon?n("v-icon",{staticClass:"ma-2 pa-2",attrs:{"x-large":""},domProps:{innerHTML:t._s(e.icon)}}):t._e(),n("v-card-title",{staticClass:"ma-2 pa-2 leistungen-text-in-image"},[n("h3",{staticClass:"display-1 text-center"},[t._v(" "+t._s(e.name)+" ")])])],1):[e.url?n("v-btn",{staticClass:"align-self-end mr-2 d-flex",attrs:{icon:"",absolute:""}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-share")])],1):t._e(),e.icon?n("v-icon",{staticClass:"ma-2 pa-2",attrs:{"x-large":""},domProps:{innerHTML:t._s(e.icon)}}):t._e(),n("v-card-title",{staticClass:"ma-2 pa-2 text-center"},[n("h3",{staticClass:"display-1"},[t._v(" "+t._s(e.name)+" ")])])]],2)],1)})),1)],1)],1):t._e()],1),null!=t.sparten&&t.sparten.length>0&&!t.$route.query.hideSparten?n("v-card",{staticClass:"justify-center grey",attrs:{flat:"",tile:""}},[n("v-container",{attrs:{fluid:""}},t._l(t.sparten,(function(e,a){return n("v-row",{key:a,attrs:{dense:"",justify:"center"}},t._l(e,(function(e){return n("v-col",{key:e},[n("v-card",{staticClass:"pa-1 align-center justify-center align-sm-start d-flex flex-column fill-height grey lighten-3",attrs:{outlined:""}},[n("v-card-title",{staticClass:"ma-0 pa-2 subtitle-2",class:{"d-flex flex-column":t.$vuetify.breakpoint.xsOnly,"d-flex flex-row flex-nowrap":t.$vuetify.breakpoint.smAndUp}},[n("v-icon",{staticClass:"pr-sm-3 mb-1 mb-sm-0",attrs:{small:""}},[t._v(" mdi-check-decagram ")]),n("h3",{staticClass:"body-2 block d-flex",class:{"text-center":t.$vuetify.breakpoint.smAndDown}},[t._v(" "+t._s(e)+" ")])],1)],1)],1)})),1)})),1)],1):t._e()],1)},s=[],o=n("94da");const i=n("e0d5"),c=n("89c7"),r=n("af4b"),l=n("9b22"),u=n("c36e");var d={name:"AccountDetailsLeistungen",components:{},filters:{assets_url:o["a"]},props:["account","event"],data(){return{reevaluate:null}},mounted(){this.set_reevaluate()},computed:{background(){const t=this.reevaluate;Math.floor(t);const e=i(this.servicesRaw.filter(t=>null!=t.background&&""!=t.background));return 0!=e.length?e[0].background:null},min_max_columns(){return this.$vuetify.breakpoint.xsOnly?[1]:this.$vuetify.breakpoint.smOnly?[3,2]:this.$vuetify.breakpoint.mdAndUp?[4,3,2]:[3,2]},min_max_columns_sparten(){return this.$vuetify.breakpoint.xsOnly?[2,1]:this.$vuetify.breakpoint.smOnly?[3,2]:this.$vuetify.breakpoint.mdAndUp?[4,3]:[3,2]},highlighted(){return this.servicesRaw.filter(t=>t.highlighted&&""!=t.name)},servicesRaw(){return this.event?this.event.services:this.account.services},services(){const t=this.servicesRaw.filter(t=>!t.highlighted&&""!=t.name);if(0==t.length)return null;if(t.length%3==0&&this.min_max_columns.includes(3))return c(t,3);if(t.length%2==0&&this.min_max_columns.includes(t.length/2))return c(t,t.length/2);let e=r([...this.min_max_columns])[0];for(const n of this.min_max_columns)n<=t.length&&t.length%n!=1&&(e=n);return c(t,e)},sparten(){if(null!=this.services&&this.highlighted&&this.highlighted.length>0)return[];let t=this.account.sparten.filter(t=>t.depth>0);const e=this.account.sparten.filter(t=>0==t.depth);t.length<3&&(t=t.concat(e));const n=u(l(t.map(t=>t.bezeichnung_einzahl)));if(0==n.length)return null;if(n.length%2==0&&this.min_max_columns.includes(n.length/2))return c(n,n.length/2);let a=r([...this.min_max_columns_sparten])[0];for(const s of this.min_max_columns_sparten)s<=n.length&&n.length%s!=1&&(a=s);return c(n,a)}},watch:{},methods:{set_reevaluate(){this.reevaluate=Math.random(),setTimeout(this.set_reevaluate,1e4)}}},m=d,h=(n("c667"),n("2877")),p=n("6544"),g=n.n(p),f=n("8212"),b=n("8336"),v=n("b0af"),_=n("99d9"),y=n("62ad"),w=n("a523"),k=n("132d"),x=n("adda"),C=n("b687"),$=n("490a"),A=n("0fd9"),j=Object(h["a"])(m,a,s,!1,null,null,null);e["a"]=j.exports;g()(j,{VAvatar:f["a"],VBtn:b["a"],VCard:v["a"],VCardText:_["c"],VCardTitle:_["d"],VCol:y["a"],VContainer:w["a"],VIcon:k["a"],VImg:x["a"],VLazy:C["a"],VProgressCircular:$["a"],VRow:A["a"]})},c667:function(t,e,n){"use strict";n("0243")},e2ec:function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},o=[],i=n("f309"),c=n("fcf4");n("5363");a["a"].use(i["a"]);var r=new i["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:c["a"].grey.darken2,secondary:c["a"].blue.base,accent:c["a"].orange.base,error:c["a"].red.base,warning:c["a"].amber.base,info:c["a"].teal.base,success:c["a"].lightGreen.base}}}}),l=n("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("account-app",{key:t.account._id,attrs:{account:t.account,"show-back-link":t.showBackLink}})},d=[],m=n("91d8"),h=n("94da"),p=n("7ffd"),g=n("05cc"),f=n("1816"),b=n.n(f),v={name:"LandingpageAccount",components:{AccountApp:m["a"]},metaInfo(){const t=[],e={meta:t,link:[]},n=this.account.logo||this.account.mainimage||this.$store.get("plattform/logo"),a=b()(window.location.href),s=`${a.protocol}//${a.host}/`;e.title=this.account.name,this.account.adressen.length&&(e.title+=" | "+this.account.adressen[0].ort),this.account.canonical_url&&(e.link.push({href:s,rel:"canonical"}),t.push({property:"og:url",content:s})),n&&(e.link=e.link.concat([{rel:"shortcut icon",type:"image/png",href:Object(h["a"])(n,"resize=32x32"),sizes:"32x32"},{rel:"shortcut icon",type:"image/png",href:Object(h["a"])(n,"resize=96x96"),sizes:"96x96"},{rel:"apple-touch-icon",href:Object(h["a"])(n,"fixed=ffffff,192x192|quality=100")},{rel:"preload",as:"image",href:Object(h["a"])(n,"fixed=ffffff,370x180|quality=100")}]),t.push({property:"og:image",content:Object(h["a"])(n)}));const o={name:this.account.name,short_name:this.account.slug,theme_color:"#000000",icons:[{src:Object(h["a"])(n,"fixed=192x192"),sizes:"192x192",type:"image/png"},{src:Object(h["a"])(n,"fixed=512x512"),sizes:"512x512",type:"image/png"},{src:Object(h["a"])(n,"fixed=192x192"),sizes:"192x192",type:"image/png",purpose:"maskable"},{src:Object(h["a"])(n,"fixed=512x512"),sizes:"512x512",type:"image/png",purpose:"maskable"}],start_url:s,display:"standalone",background_color:"#000000"},i=JSON.stringify(o),c=new Blob([i],{type:"application/json"}),r=URL.createObjectURL(c);e.link.push({rel:"manifest",href:r});const l=this.account.profile_txt||this.account.about||`Firmenprofil von ${this.account.name} (`+this.account.sparten.map(t=>t.bezeichnung_einzahl).slice(0,5).join(", ")+") in "+this.account.adressen.map(t=>t.ort).join(", ");return t.push({name:"description",content:l}),t.push({property:"og:description",content:l}),t.push({name:"author",content:this.account.name}),t.push({name:"robots",content:"index, follow"}),t.push({property:"og:title",content:this.account.name}),t.push({property:"og:type",content:"website"}),e},data(){return{showBackLink:!1}},async beforeRouteEnter(t,e,n){let a=!1;const{cached:s,fetched:o}=await g["a"].dispatch("accountBackend/fetchAccount",{endpoint:window.location.href});let i=await s;i&&(g["a"].set("accountBackend/account",i),n(),a=!0),i=await o,i&&(g["a"].set("accountBackend/account",i),a||n())},computed:{account:Object(p["d"])("accountBackend/account")}},_=v,y=n("2877"),w=Object(y["a"])(_,u,d,!1,null,null,null),k=w.exports;const x=()=>Promise.all([n.e("chunk-7378afc2"),n.e("chunk-96daa546")]).then(n.bind(null,"909c"));a["a"].use(l["a"]);const C=[{path:"",name:"start",components:{default:k}},{path:"",name:"account",components:{default:k}},{path:"/c/:event_id",components:{default:x},props:{default:!0},name:"event",alias:"/campaign/:event_id"},{path:"*",components:{default:k}}];var $=new l["a"]({routes:C,mode:"history",scrollBehavior(t,e,n){return n||{x:0,y:0}}}),A=n("58ca"),j=n("ce04"),O=n.n(j),S=n("67b0"),V=n("b9ad"),z=n.n(V),B=n("ead8");a["a"].use(z.a),a["a"].use(S["a"]),a["a"].use(A["a"]),a["a"].use(O.a),a["a"].use(B["a"]);var T={router:$,vuetify:r,store:g["a"],name:"Landingpage",props:{name:{type:String},isContainerPlattform:{type:Boolean,default:!0},isFetchallPlattform:{type:Boolean,default:!1},logo:{type:String,default:null}},created(){this.$store.set("plattform/name",this.name),this.$store.set("plattform/isContainerPlattform",this.isContainerPlattform),this.$store.set("plattform/isFetchallPlattform",this.isFetchallPlattform),this.$store.set("plattform/logo",this.logo),this.$workbox&&this.$workbox.addEventListener("waiting",()=>{this.$workbox.messageSkipWaiting()})},metaInfo(){const t=[{name:"theme-color",content:"#000000"},{name:"mobile-web-app-capable",content:"yes"}],e={meta:t,title:"Loading..."};return e.titleTemplate="%s | "+this.name,e}},I=T,P=(n("a2a4"),Object(y["a"])(I,s,o,!1,null,null,null)),L=P.exports,D=n("acfa");let E;"serviceWorker"in navigator?(E=new D["a"]("/service-worker.js"),E.addEventListener("controlling",()=>{window.location.reload()}),E.register(),"storage"in navigator&&"estimate"in navigator.storage&&navigator.storage.estimate().then(t=>{})):E=null;var q=E;function M(){const t=b()(window.location.href),e=t.hostname.split("."),n=e.slice(Math.max(e.length-2,0)).join(".");return n.charAt(0).toUpperCase()+n.slice(1)}const R=M();a["a"].prototype.$workbox=q,new a["a"]({render:t=>t(L,{props:{name:R,isContainerPlattform:!1,logo:"u/si/2020/05/06/android-chrome-512x512.png"}})}).$mount("#app")}});