(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{Jz1z:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n);function l(e){var t=e.tag;return r.a.createElement("span",{className:"inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full last:mr-0"},"#",t)}},c851:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));a("IGiI"),a("K6vE");var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),s=a("obyI"),c=a.n(s),o=a("TJpk"),i=a.n(o),m=a("Jz1z"),p=function(e){return e.posts.filter((function(e){return"article-page"===e.node.frontmatter.templateKey})).map((function(e){var t=e.node;return r.a.createElement("div",{className:"w-1/3 p-4"},r.a.createElement("div",{className:"overflow-hidden rounded shadow-lg"},r.a.createElement(l.Link,{className:"has-text-primary",to:t.fields.slug,key:t.id},r.a.createElement("img",{className:"w-full",src:t.frontmatter.cover,alt:t.frontmatter.title}),r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"mb-2 text-xl font-bold"},t.frontmatter.title),r.a.createElement("p",{className:"text-base text-gray-700"},t.excerpt)),r.a.createElement("div",{className:"px-6 py-4"},t.frontmatter.tags.map((function(e){return r.a.createElement(m.a,{key:e,tag:e})}))),r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"text-sm"},r.a.createElement("p",{className:"leading-none text-gray-900"},"Blep Team"),r.a.createElement("p",{className:"text-gray-600"},t.frontmatter.date))))))}))},u=a("Zttt");var d=function(e){return e.test?r.a.createElement("span",{disabled:!0,className:"g-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},e.text):r.a.createElement(l.Link,{to:"/blog/"+e.url,className:"button is-rounded"},e.text)},f=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.pageContext,t=e.group,a=e.index,n=e.first,l=e.last,s=a-1==1?"":(a-1).toString(),o=(a+1).toString()+"/",m={"@context":"http://schema.org","@type":"WebSite",url:c.a.siteUrl,name:c.a.siteTitle,alternateName:c.a.siteTitleAlt?c.a.siteTitleAlt:""};return r.a.createElement(u.a,{includePreFooter:!0},r.a.createElement("div",{className:"bg-white flex flex-col"},r.a.createElement("div",{className:"container mx-auto px-8"},r.a.createElement(i.a,null,r.a.createElement("title",null,"Blep Blog"),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m))),r.a.createElement("section",{className:"flex flex-wrap mb-4 my-12"},r.a.createElement(p,{posts:t})),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"buttons is-centered"},r.a.createElement(d,{test:n,url:s,text:"Previous Page"}),r.a.createElement(d,{test:l,url:o,text:"Next Page"}))))))},n}(n.Component)}}]);
//# sourceMappingURL=component---src-templates-blog-js-3aeae3db45ee7cf4a8a7.js.map