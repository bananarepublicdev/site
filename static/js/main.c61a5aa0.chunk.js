(this.webpackJsonpbananarepublic=this.webpackJsonpbananarepublic||[]).push([[0],{143:function(e,n,t){},250:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"baseTokenURI","type":"string"},{"internalType":"uint256","name":"mintPrice","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"address","name":"admin2","type":"address"},{"internalType":"address","name":"admin3","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_tokenIdTracker","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getReflectionBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReflectionBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lastDividendAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reflectToOwners","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"reflectionBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"mintPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"setTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDividend","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},265:function(e,n,t){},278:function(e,n){},303:function(e,n){},305:function(e,n){},323:function(e,n){},324:function(e,n){},385:function(e,n){},387:function(e,n){},398:function(e,n){},400:function(e,n){},425:function(e,n){},427:function(e,n){},428:function(e,n){},433:function(e,n){},435:function(e,n){},441:function(e,n){},443:function(e,n){},456:function(e,n){},468:function(e,n){},471:function(e,n){},482:function(e,n){},491:function(e,n){},493:function(e,n){},570:function(e,n,t){"use strict";t.r(n);var a=t(3),s=t.n(a),i=t(247),c=t.n(i),r=(t(143),t(5)),l=t(7),o=t(12),d=t(11),b=(t(265),t(74)),p=t(17),m=t(19),u=t.n(m),j=t(59),y=t(58),x=t(105),h=t.n(x),O=t(250),f=function(){var e=Object(j.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.eth.getAccounts();case 2:return window.user=e.sent[0],window.instanceBananas=new n.eth.Contract(O,"0xA8FAF88DD137e7af6703f13ce7c9191e458D2cEe",{from:window.user}),e.abrupt("return",window.instanceBananas);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=t(589),v=t(585),w=t(587),T=t.p+"static/media/large-banana.5fbc7da4.png",N=t.p+"static/media/solana-banana-01.93b911eb.png",A=t.p+"static/media/solana-banana-10.1a9c60db.png",k=t(0),M=function(e){Object(o.a)(t,e);var n=Object(d.a)(t);function t(e){var a;return Object(r.a)(this,t),(a=n.call(this,e)).state={menuOpen:!1},a}return Object(l.a)(t,[{key:"toggleMenu",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"render",value:function(){var e=this;return Object(k.jsxs)("div",{className:"banana-menu-holder",children:[Object(k.jsxs)("header",{className:"stencil-font ",children:[Object(k.jsx)("div",{className:"header-logo",children:Object(k.jsx)("a",{href:"#banana-republic",children:"BananaRepublic."})}),this.state.menuOpen?Object(k.jsx)("div",{className:"banana-mobile-items-holder",children:Object(k.jsxs)("div",{className:"banana-mobile-menu-row",children:[Object(k.jsx)("div",{className:"header-button5 banana-connect banana-mobile",children:Object(k.jsx)("a",{children:"Connect"})}),Object(k.jsx)("div",{className:"header-button4 banana-team-menu banana-mobile",children:Object(k.jsx)("a",{href:"#banana-team",onClick:function(){return e.toggleMenu()},children:"Team"})}),Object(k.jsx)("div",{className:"header-button3 banana-roadmap-menu banana-mobile",children:Object(k.jsx)("a",{href:"#banana-roadmap",onClick:function(){return e.toggleMenu()},children:"Roadmap"})}),Object(k.jsx)("div",{className:"header-button2 banana-nfts-menu banana-mobile",children:Object(k.jsx)("a",{href:"#banana-nfts",onClick:function(){return e.toggleMenu()},children:"NFTs"})}),Object(k.jsx)("div",{className:"header-button1 banana-mint-menu banana-mobile",children:Object(k.jsx)("a",{href:"#banana-mint",onClick:function(){return e.toggleMenu()},children:"Mint"})}),Object(k.jsx)("div",{className:" banana-twitter-menu banana-mobile",children:Object(k.jsx)("a",{children:"\xa0"})}),Object(k.jsx)("div",{className:"banana-discord-menu banana-mobile",children:Object(k.jsx)("a",{children:" \xa0"})})]})}):null,Object(k.jsx)("div",{className:"header-button5 banana-connect banana-desktop",children:Object(k.jsx)("a",{children:"Connect"})}),Object(k.jsx)("div",{className:" banana-twitter-menu banana-desktop",children:Object(k.jsx)("a",{children:"\xa0"})}),Object(k.jsx)("div",{className:"banana-discord-menu banana-desktop",children:Object(k.jsx)("a",{children:" \xa0"})}),Object(k.jsx)("div",{className:"header-button4 banana-team-menu banana-desktop",children:Object(k.jsx)("a",{href:"#banana-team",children:"Team"})}),Object(k.jsx)("div",{className:"header-button3 banana-roadmap-menu banana-desktop",children:Object(k.jsx)("a",{href:"#banana-roadmap",children:"Roadmap"})}),Object(k.jsx)("div",{className:"header-button2 banana-nfts-menu banana-desktop",children:Object(k.jsx)("a",{href:"#banana-nfts",children:"NFTs"})}),Object(k.jsx)("div",{className:"header-button1 banana-mint-menu banana-desktop",children:Object(k.jsx)("a",{href:"#banana-mint",children:"Mint"})}),Object(k.jsx)("div",{className:"banana-burguer-menu banana-mobile",children:Object(k.jsx)("a",{onClick:function(){return e.toggleMenu()},children:"\u2261"})})]}),Object(k.jsx)("div",{className:"banana-div-1"})]})}}]),t}(s.a.Component),S=function(e){Object(o.a)(t,e);var n=Object(d.a)(t);function t(e){return Object(r.a)(this,t),n.call(this,e)}return Object(l.a)(t,[{key:"render",value:function(){return Object(k.jsx)(g.a,{className:"footer ",children:Object(k.jsxs)(v.a,{container:!0,spacing:2,className:"stencil-font",style:{textAlign:"center"},children:[Object(k.jsx)(v.a,{item:!0,md:4,xs:12,className:"accolade-font",children:"\u24b8 2021 The People's Republic of North Bananas"}),Object(k.jsx)(v.a,{item:!0,md:4,xs:12,className:"accolade-font",children:Object(k.jsx)("div",{className:" banana-twitter-footer",children:Object(k.jsx)("a",{children:"\xa0\xa0\xa0"})})}),Object(k.jsx)(v.a,{item:!0,md:4,xs:12,className:"accolade-font",children:Object(k.jsx)("div",{className:"banana-discord-footer",children:Object(k.jsx)("a",{children:" \xa0\xa0\xa0"})})})]})})}}]),t}(s.a.Component),B=t.p+"static/media/fried.a024fa94.svg",R=t.p+"static/media/menu_hover1.50906347.svg",C=t.p+"static/media/menu_hover2.55cb16f4.svg",F=t.p+"static/media/menu_hover3.bcc5467a.svg",E=t.p+"static/media/menu_hover4.8294a694.svg",I=t.p+"static/media/menu_connect_hover.4668d30b.svg",D=t.p+"static/media/menu_discord_hover.ea44f3bf.svg",Q=t.p+"static/media/menu_twitter_hover.8e664b98.svg",H=t.p+"static/media/button_mint_hover.88adb545.svg",K=t.p+"static/media/button_call_hover.3defc980.svg",q=t.p+"static/media/button_opensea_hover.4d152085.svg",U=function(e){Object(o.a)(t,e);var n=Object(d.a)(t);function t(e){var a;return Object(r.a)(this,t),(a=n.call(this,e)).componentDidMount=Object(j.a)(u.a.mark((function e(){var n,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(){var e=Object(j.a)(u.a.mark((function e(n,t){var a,s,i,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=13;break}return a=new h.a(window.ethereum),e.prev=2,e.next=5,window.ethereum.enable();case 5:n(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),t(e.t0);case 11:e.next=14;break;case 13:window.web3?(s=window.web3,console.log("Injected web3 detected."),n(s)):(i=new h.a.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc"),c=new h.a(i),console.log("No web3 instance injected, using Local web3."),n(c));case 14:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n,t){return e.apply(this,arguments)}}());case 3:return n=e.sent,window.web3=n,e.next=7,f(window.web3);case 7:return t=e.sent,a.setState({user:window.user}),a.setState({contractInstanceBananas:t}),e.next=12,a.loadData();case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("Error",e.t0);case 17:return e.prev=17,a.setState({isLoadingHomepageData:!1}),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,14,17,20]])}))),a.state={hasHomepageData:!1,isLoadingHomepageData:!0,nftIndexBanana:-100,avaxBananaSelect:1,isMintingBanana:!1,isClaimingRewards:!1,myRewards:0,totalSupply:0,price:0,timeLeft:""},a.mint=a.mint.bind(Object(y.a)(a)),a.decreaseSelect=a.decreaseSelect.bind(Object(y.a)(a)),a.increaseSelect=a.increaseSelect.bind(Object(y.a)(a)),a.loadData=a.loadData.bind(Object(y.a)(a)),a}return Object(l.a)(t,[{key:"componentWillUnmount",value:function(){}},{key:"loadData",value:function(){var e=Object(j.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.state.contractInstanceBananas.methods.totalSupply().call();case 3:n=e.sent,this.setState({totalSupply:n}),this.setState({hasHomepageData:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error",e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"increaseSelect",value:function(){this.state.avaxBananaSelect<20&&this.setState({avaxBananaSelect:this.state.avaxBananaSelect+1})}},{key:"decreaseSelect",value:function(){this.state.avaxBananaSelect>1&&this.setState({avaxBananaSelect:this.state.avaxBananaSelect-1})}},{key:"mint",value:function(){var e=Object(j.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({isMinting:!0}),n=window.web3.utils.toWei(.1*this.state.avaxBananaSelect+"","ether"),e.next=5,this.state.contractInstanceBananas.methods.mint(this.state.avaxBananaSelect).send({value:n});case 5:return e.next=7,this.loadData();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error",e.t0);case 12:return e.prev=12,this.setState({isMinting:!1}),e.finish(12);case 15:case"end":return e.stop()}}),e,this,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(M,{}),Object(k.jsx)("a",{class:"banana-anchor",id:"banana-republic"}),Object(k.jsx)("img",{className:"banana-background",src:T}),Object(k.jsx)("div",{className:"banana-div-2"}),Object(k.jsx)("a",{class:"banana-anchor",id:"banana-mint"}),Object(k.jsx)(g.a,{maxWidth:"md",className:"banana-container",children:Object(k.jsxs)(v.a,{container:!0,spacing:2,children:[Object(k.jsxs)(v.a,{item:!0,md:8,xs:12,children:[Object(k.jsx)("div",{className:"stencil-font banana-title",children:"Join the Republic"}),Object(k.jsx)("div",{className:"accolade-font banana-paragraph",children:"Each Banana has been handcrafted by the \u201cartist\u201d that did Manuel Noriega\u2019s tax returns. He spent the last 3 years smuggling the coveted artworks onto the Ethereum blockchain piece by piece. After being pulled over for drunk driving with a trunk full of bananas, he was \u201celected\u201d El Presidente of the People\u2019s Republic of Bananas. He is currently away on a \u201cbusiness trip\u201d after being ousted by the CIA. All proceeds from banana sales will be deployed to secure his immediate release."}),Object(k.jsx)("br",{}),Object(k.jsxs)(v.a,{container:!0,spacing:2,className:"stencil-font",style:{textAlign:"center"},children:[Object(k.jsx)(v.a,{item:!0,md:5,xs:12,children:Object(k.jsx)("div",{className:"banana-mint ",children:Object(k.jsx)("a",{children:"Mint bananas"})})}),Object(k.jsx)(v.a,{item:!0,md:3,xs:12,children:Object(k.jsxs)("div",{className:"banana-mint-selector",children:[Object(k.jsx)("div",{className:"banana-mint-selector-minus",children:Object(k.jsx)("a",{children:"\xa0"})}),Object(k.jsx)("div",{className:"banana-mint-selector-number",children:"1"}),Object(k.jsx)("div",{className:"banana-mint-selector-plus",children:Object(k.jsx)("a",{children:"\xa0"})})]})}),Object(k.jsx)(v.a,{item:!0,md:4,xs:12,children:Object(k.jsxs)("div",{className:"banana-mint-price",children:[Object(k.jsxs)("div",{className:"banana-mint-price-eth",children:["0.50 ",Object(k.jsx)("span",{children:"ETH"})]}),Object(k.jsx)("div",{className:"banana-mint-price-usd",children:"=2.821 USD"})]})})]})]}),Object(k.jsxs)(v.a,{item:!0,md:4,xs:12,children:[Object(k.jsxs)(w.a,{className:"banana-box-small",children:[Object(k.jsx)("img",{className:"banana-box-small-border-1"}),Object(k.jsx)("img",{src:N})]}),Object(k.jsxs)(w.a,{className:"banana-box-small",children:[Object(k.jsx)("img",{className:"banana-box-small-border-2"}),Object(k.jsx)("img",{src:A})]}),Object(k.jsxs)(w.a,{className:"banana-box-small",children:[Object(k.jsx)("img",{className:"banana-box-small-border-3"}),Object(k.jsx)("img",{src:A})]}),Object(k.jsxs)(w.a,{className:"banana-box-small",children:[Object(k.jsx)("img",{className:"banana-box-small-border-4"}),Object(k.jsx)("img",{src:N})]})]})]})}),Object(k.jsx)("div",{className:"banana-div-3"}),Object(k.jsx)("div",{className:"banana-mint-now-container",children:Object(k.jsx)("div",{className:"banana-mint stencil-font banana-opensea",style:{height:"90px"},children:Object(k.jsx)("a",{children:"View collection on Opensea"})})}),Object(k.jsx)("div",{className:"banana-div-2"}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("a",{class:"banana-anchor",id:"banana-nfts"}),Object(k.jsx)(g.a,{maxWidth:"md",children:Object(k.jsxs)(v.a,{container:!0,spacing:2,children:[Object(k.jsxs)(v.a,{item:!0,md:8,xs:12,children:[Object(k.jsx)("div",{className:"stencil-font banana-title",children:"The Banana Republic NFTs"}),Object(k.jsxs)("div",{className:"accolade-font banana-paragraph",children:["All people in the Republic of Bananas are equal, and denying this obvious fact will result in a visit from the Ministry of Truth. Bananas, on the other hand, are all completely unique. Every banana has been designed to highlight specific pitfalls of bourgeois society and has over 120 possible traits. On top of that, 100 bananas have been uniquely animated to prove the superiority of communist technology. The revolutionary workers of the People\u2019s Republic of Bananas have packaged every banana as an ERC-721 token (See Record and Proof).",Object(k.jsx)("br",{}),"To access members-only areas such as The Bunker, Banana Citizens will need to be signed into their Metamask wallet."]}),Object(k.jsx)("br",{})]}),Object(k.jsx)(v.a,{item:!0,md:4,xs:12,children:Object(k.jsxs)(w.a,{className:"banana-box",children:[Object(k.jsx)("img",{className:"banana-box-border-1"}),Object(k.jsx)("img",{src:N})]})})]})}),Object(k.jsx)("br",{}),Object(k.jsx)("a",{class:"banana-anchor",id:"banana-fried"}),Object(k.jsx)(g.a,{maxWidth:"md",children:Object(k.jsxs)(v.a,{container:!0,spacing:2,children:[Object(k.jsxs)(v.a,{item:!0,md:8,xs:12,children:[Object(k.jsx)("div",{className:"stencil-font banana-title",children:"Fried Bananas"}),Object(k.jsx)("div",{className:"accolade-font banana-paragraph",children:"In the People\u2019s Republic of Bananas, fried bananas are considered a national delicacy. The origins of this culinary tradition remain unclear, yet communist idealogues assert that the scorched bananas signify the ravages of capitalism. Critics counter this claim by suggesting the practice is state propaganda designed to reduce supermarket queuing times. One thing is clear \u2014 El Presidente is going to fry 10 random bananas after all of them have been sold, making them highly desirable collector\u2019s items for idealogues and critics alike."}),Object(k.jsx)("br",{})]}),Object(k.jsx)(v.a,{item:!0,md:4,xs:12,children:Object(k.jsxs)(w.a,{className:"banana-box",children:[Object(k.jsx)("img",{className:"banana-box-border-2"}),Object(k.jsx)("img",{style:{paddingLeft:"6px",paddingRight:"4px",paddingTop:"40px"},src:B})]})})]})}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),">",Object(k.jsx)("br",{}),Object(k.jsx)("a",{class:"banana-anchor",id:"banana-roadmap"}),Object(k.jsx)(g.a,{maxWidth:"md",children:Object(k.jsxs)(v.a,{container:!0,spacing:2,children:[Object(k.jsxs)(v.a,{item:!0,md:8,xs:12,children:[Object(k.jsx)("div",{className:"stencil-font banana-title",children:"Roadmap"}),Object(k.jsxs)("div",{className:"accolade-font banana-paragraph",children:[Object(k.jsxs)(v.a,{container:!0,spacing:2,style:{marginBottom:"-15px"},children:[Object(k.jsx)(v.a,{item:!0,md:1,xs:2,className:"comrade-name stencil-font",style:{fontSize:"22px"},children:"10%"}),Object(k.jsx)(v.a,{item:!0,md:11,xs:10,style:{lineHeight:"2.2"},children:"Mount operation to rescue El Presidente "})]}),Object(k.jsxs)(v.a,{container:!0,spacing:2,style:{marginBottom:"-15px"},children:[Object(k.jsx)(v.a,{item:!0,md:1,xs:2,className:"comrade-name stencil-font",style:{fontSize:"22px"},children:"20%"}),Object(k.jsx)(v.a,{item:!0,md:11,xs:10,style:{lineHeight:"2.2"},children:"Exclusive high-quality merch store for holders"})]}),Object(k.jsxs)(v.a,{container:!0,spacing:2,style:{marginBottom:"-15px"},children:[Object(k.jsx)(v.a,{item:!0,md:1,xs:2,className:"comrade-name stencil-font",style:{fontSize:"22px"},children:" 30%"}),Object(k.jsx)(v.a,{item:!0,md:11,xs:10,style:{lineHeight:"2.2"},children:"NFT governance platform "})]}),Object(k.jsxs)(v.a,{container:!0,spacing:2,style:{marginBottom:"-15px"},children:[Object(k.jsx)(v.a,{item:!0,md:1,xs:2,className:"comrade-name stencil-font",style:{fontSize:"22px"},children:" 40%"}),Object(k.jsx)(v.a,{item:!0,md:11,xs:10,style:{lineHeight:"2.2"},children:"xxx NFT airdrop to XX lucky winners"})]}),Object(k.jsxs)(v.a,{container:!0,spacing:2,style:{marginBottom:"-15px"},children:[Object(k.jsx)(v.a,{item:!0,md:1,xs:2,className:"comrade-name stencil-font",style:{fontSize:"22px"},children:" 60%"}),Object(k.jsx)(v.a,{item:!0,md:11,xs:10,style:{lineHeight:"2.2"},children:"Exclusive Bunker spot for NFTs whales"})]}),Object(k.jsxs)(v.a,{container:!0,spacing:2,style:{marginBottom:"-15px"},children:[Object(k.jsx)(v.a,{item:!0,md:1,xs:2,className:"comrade-name stencil-font",style:{fontSize:"22px"},children:" 80%"}),Object(k.jsx)(v.a,{item:!0,md:11,xs:10,style:{lineHeight:"2.2"},children:"Bored Ape Yacht Club airdrop to XX lucky winners"})]}),Object(k.jsxs)(v.a,{container:!0,spacing:2,style:{marginBottom:"-15px"},children:[Object(k.jsx)(v.a,{item:!0,md:1,xs:2,className:"comrade-name stencil-font",style:{fontSize:"22px"},children:" 90%"}),Object(k.jsx)(v.a,{item:!0,md:11,xs:10,style:{lineHeight:"2.2"},children:"Lottery winner announced"})]}),Object(k.jsxs)(v.a,{container:!0,spacing:2,children:[Object(k.jsx)(v.a,{item:!0,md:1,xs:2,className:"comrade-name stencil-font",style:{fontSize:"22px"},children:" 100%"}),Object(k.jsx)(v.a,{item:!0,md:11,xs:10,style:{lineHeight:"2.2"},children:"Ultra rare Fried Bananas art update and reveal"})]})]}),Object(k.jsx)("br",{})]}),Object(k.jsx)(v.a,{item:!0,md:4,xs:12,children:Object(k.jsxs)(w.a,{className:"banana-box",children:[Object(k.jsx)("img",{className:"banana-box-border-3"}),Object(k.jsx)("img",{src:N})]})})]})}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("a",{class:"banana-anchor",id:"banana-team"}),Object(k.jsx)(g.a,{maxWidth:"md",children:Object(k.jsxs)(v.a,{container:!0,spacing:2,children:[Object(k.jsxs)(v.a,{item:!0,md:8,xs:12,children:[Object(k.jsx)("div",{className:"stencil-font banana-title",children:"Government of Banana Republic"}),Object(k.jsxs)("div",{className:"accolade-font banana-paragraph",children:["The Banana Republic was formed in an undisclosed location on November 1st 2021. After liberating K from North Koran guland, the four founding members will use the rest of the minting revenue to strong-arm the UN into recognizing it as a legitimate Republic.",Object(k.jsx)("br",{})," ",Object(k.jsx)("br",{}),Object(k.jsx)("span",{className:"comrade-name",children:"Comrade K:"})," El Presidente (currently on vacation in Langley, Virginia). ",Object(k.jsx)("br",{}),Object(k.jsx)("span",{className:"comrade-name",children:"Comrade Gab:"})," Minister of Truth. ",Object(k.jsx)("br",{}),Object(k.jsx)("span",{className:"comrade-name",children:"Comrade David:"})," Minister of Preemptive Wars. ",Object(k.jsx)("br",{}),Object(k.jsx)("span",{className:"comrade-name",children:"Comrade Pierre:"})," Minister of Censorship. ",Object(k.jsx)("br",{})]}),Object(k.jsx)("br",{})]}),Object(k.jsxs)(v.a,{item:!0,md:4,xs:12,children:[Object(k.jsxs)(w.a,{className:"banana-box-small",children:[Object(k.jsx)("img",{className:"banana-box-small-border-1"}),Object(k.jsx)("img",{src:N})]}),Object(k.jsxs)(w.a,{className:"banana-box-small",children:[Object(k.jsx)("img",{className:"banana-box-small-border-2"}),Object(k.jsx)("img",{src:A})]}),Object(k.jsxs)(w.a,{className:"banana-box-small",children:[Object(k.jsx)("img",{className:"banana-box-small-border-3"}),Object(k.jsx)("img",{src:A})]}),Object(k.jsxs)(w.a,{className:"banana-box-small",children:[Object(k.jsx)("img",{className:"banana-box-small-border-4"}),Object(k.jsx)("img",{src:N})]})]})]})}),Object(k.jsx)("br",{})," ",Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"banana-div-4"}),Object(k.jsx)("div",{className:"banana-mint-now-container",children:Object(k.jsx)("div",{className:"banana-mint-now stencil-font ",style:{height:"90px"},children:Object(k.jsx)("a",{children:" Mint a banana now"})})}),Object(k.jsx)("div",{className:"banana-div-3"}),Object(k.jsx)(S,{}),Object(k.jsxs)("div",{id:"preload",children:[Object(k.jsx)("img",{src:R}),Object(k.jsx)("img",{src:C}),Object(k.jsx)("img",{src:F}),Object(k.jsx)("img",{src:E}),Object(k.jsx)("img",{src:I}),Object(k.jsx)("img",{src:D}),Object(k.jsx)("img",{src:Q}),Object(k.jsx)("img",{src:H}),Object(k.jsx)("img",{src:K}),Object(k.jsx)("img",{src:q}),Object(k.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABPCAYAAAC6VNZaAAAACXBIWXMAAAsSAAALEgHS3X78AAADyElEQVR4nO2bzW7TQBDH/7QIhCVEggQSJ9K+gIN4gAYEN6SEJyBw4Nqol3JBROICF0SeoEHcOCX3CtIHQI1foE1OHDgkEchICBS0ZtZ1Un/vxh8b/6SojePY+8+MZ3Zndy/M53OsAxtrobIQqiCFUNUohKrG2gi9mPQNTejvAQzZS4MxTOq+wj0jE3oFQAtAFcAIQE+D0XN83gDAXk8A9AHUly5xBGDgeF+h63Q1GCOhxjkQEmpCbwI4cPloRlZjjb4t0L6OBqMl8H2b2ELJBXdlNCKADxqMpuhFIgslV+0C2BG9eQQM5v4irhwp6prQq+SSSYpk6ABOyYtiEdqi9DyyG11bpaIQMOs2o0bsUBZ1BJ20RYKsO6A2hSZQqAm97RFZ04T94AdRxHq6rgm9xHJiCs9jVJ5qMLpB33EVSpF1mBFXDUOgWC/X7eZIJMiN2+SFrpyzKKWQ4zRaKwnWzWwt51w3i3r+KjmhTlF5QYeKQkH964bzgJvQWnLtWSkV58UXhJK5hTvQWWTZoq2cRdvQ2EIp2r7KfpNDs/AIOi0ae2SQUXao43MmlA5kvasXB9t43KIVaZfOFnU+huVCq4oKZewyj+VCEys7pkSNC50qLtS2qArdPj9KUiv1L198w7u3363/t7YvYTL5i3J503p/evIbd+5eQam8aX22tX3ZOj6Z/MH9B1fta/BzJFO1hmmyarSPHp7gy+FP4Sa+fnMLe/s3ZEo94q7bCDgxFDJEMj4f/pByHSdcqMi0QR4YbVAfVworeLZkMdqQOXXHAklGGXLXncloX1mSRVfwgw15epEyn7K3f9P6y9LK8ddfVoNZKmGpZUrHnj2/br13g6cddo5MWKGMCx3IEMqEffyUubjGqoJ21JU2s5xBFkYvqgplk8jWsgHVx6Nt/o/KQsfOar3KwzTXKYme+7nqYAklE3eUF4r/Ylnx+h4tcFKBBS/1mgju0kqvvDJmg20Nhh17vCaCW7L6vykwpjVJCwHWVSidlMcA1SdLnhuR+a1KyVtvia8/ck2VfkIDV3pkDE+RvkIp5Rg5EdkPKiAELahq5kRs4ExgqLWAVFeqkvCszbrFX1Dlhwm957KKOg1mtMwmVCyJI7REpZc0Swk8V4Yu7EXeJUHhO80FHR2vXOlHHpaac2aUQmJ1ZGLve6FBwOMEo3JskZCxHQRnz22NXg3Jz6+QJTkr2RFM6ahCKalK869+acmgkuuIAh3/zoAXt0RJdOsz/QAlx2agKe1oWnkpp9jjrRqFUNUohKpGIVQ1CqGqsR5CAfwD6OArZFqeSXEAAAAASUVORK5CYII="}),Object(k.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABPCAYAAAC3SqYdAAAACXBIWXMAAAsSAAALEgHS3X78AAAEkklEQVR4nO2cz2sTURDHxyoVc2la8CAKTSvehE3pH2D+A6OgN2nqwXPxohexxYu91BRP9qAp3hQ0vQum4FFp9iB4apOToGgSkBWLpTLPect2s7+y++Ylm/QDpT822d1vZt682XnzeuLw8BBGibGRUjuKgk/168IWGFkAqAJAGwCWMmA2dFy3nxYuA8AVALgKAHsWGMv0IbDCGrQsMPIAUASAElkSLVqj3/HvE663dACggq/LgFnjuCdlgi0wCiQERRoKTtnE86kWnlgwuWGFXJMDk9wfrd7uq2ASW1Nk0TCku5eTBLjYgi0wcjQmdYh1s0LCe7Z4z4LJqkv05Q46OjFpjNdZBJNFl32ia79AN8/34uKRBFtgYPR9MSAi3aClC1HdOzTxGHCxQDGkFjVpCbQwJQ47Ku+OETMDZj7s9L4WduS6acGwwKjEFkyT/XSKBCMLFhhLQS/wdGkLDIzEbznvjJEOBTHP6crPwuVUSv3PBGVknnQJJuumzZXd+I5nLwsXtN4aHziel91n7xrDFhiNIbCwkxlnJnbEwpRkDJNYoHTYxraw5kc93czJqO0UXGV8iLd587oDa6vfIDt58sjfHz0+B3PzZ7gua+fbQjBFtAWuq0n2dvfh8sUvnsdQ7IePlzgvv5kBszRG+TK7WKSxu+97bOfTb/GBMIJROzdGz7cDQdAHoojiqK08ZFGwloo/kNsmOa6A/FgGzArVgEeBrHTpND8s9EJDCu6p8sfF3u4f9mtoDVrPN34EHsekhJmcNsHPN36GzrPt1gE8uP+VNXjJTAvLIk+SnAhvFkU5QReVIt+/+5X4Zq/fmIC5+QzcvjPVlZpGZF0KxieKh3FvZG31u7CMLhKkoStKXDpsbKomSRoqBbOvvKsmbhoqBYcWsP3Ascuc9CslseCUUZCCY68GYrSMGTETEfeaStqWMGLeutlkmT9nZsfF99zsuPh5Zva0iNJxqyNyWmJr5ZHzc6v1V0xfYUgh+L5W60CUfnDeVcS2FNzWsch9fuqzEBLEy1fTIsFgYl2OYS2rhFEshdMNfijoDSqyMxdtOYbLOupak5PhIQNdGl357r2zHLdQFxammu1AFAFQsAxUDNSdqSVLq1+vMCYxHVxycQrWVtsKgrEYLwzqFJy4rS8MRjFREFUdp2D2Mk8/MjIHYiYaKAszekBHLqbZgnVFasycvEDrP312geuydp5xZEFcRalnQLEXxd0Vj9A+pxSy6dsBQP2KW0MktkNdvzZeNa00dd+FUXI3nfo1ptWHoPVhKwNm11KwX9WyRO6QVpqkoQtPwTRFeb4hJXS5cpiFUTSO5cUUil0J2voT2hGfggZxJ6JxJegFoSsPtGB+LQVjOlQs9LjJI0sNMDn6PghRvEmPfZWoO9iS7FsqUmbWjx0usbfppWlnGtCwwg1aXV2yUVG197BKW2O5aFKTaOL9hyp3l5boplR148rxWaUpUgnK9w/TttpKDOHb5Cl1rr3DwLlhmixejNihu0jTHzta/q0FNbDmaXtBznGoQUFIW9vU8f/xGHaOBQ87x4KHndESDAD/AJTvydJoUyFOAAAAAElFTkSuQmCC"})]})]})}}]),t}(s.a.Component),L=function(e){Object(o.a)(t,e);var n=Object(d.a)(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(k.jsx)(b.b,{children:Object(k.jsxs)(p.c,{children:[Object(k.jsx)(p.a,{exact:!0,path:"/",component:U}),Object(k.jsx)(p.a,{exact:!0,path:"/home",component:U}),Object(k.jsx)(p.a,{render:function(){return Object(k.jsx)("h1",{children:"Not Found"})}})]})})}}]),t}(s.a.Component),J=function(e){Object(o.a)(t,e);var n=Object(d.a)(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(k.jsx)(b.a,{children:Object(k.jsx)(L,{})})}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(k.jsx)(J,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[570,1,2]]]);
//# sourceMappingURL=main.c61a5aa0.chunk.js.map