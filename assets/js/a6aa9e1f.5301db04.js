"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7643],{8840:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(6437),l=a(2767),r=a(8676),i=a(2352),o=a(5439),s=a(1586),m=a(8622),c=a(3122),g=a(627);function p(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.A)(),{blogDescription:l,blogTitle:o,permalink:s}=t,m="/"===s?a:o;return n.createElement(n.Fragment,null,n.createElement(i.be,{title:m,description:l}),n.createElement(c.A,{tag:"blog_posts_list"}))}function u(e){const{metadata:t,items:a,sidebar:l}=e;return n.createElement(s.A,{sidebar:l},n.createElement(g.A,{items:a}),n.createElement(m.A,{metadata:t}))}function b(e){return n.createElement(i.e3,{className:(0,l.A)(o.G.wrapper.blogPages,o.G.page.blogListPage)},n.createElement(p,e),n.createElement(u,e))}},8622:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(6437),l=a(9439),r=a(9835);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.A,{permalink:a,title:n.createElement(l.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&n.createElement(r.A,{permalink:i,title:n.createElement(l.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},627:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(6437),l=a(6563),r=a(2869);function i(e){let{items:t,component:a=r.A}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.i,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}}}]);