(this.webpackJsonpbananarepublic=this.webpackJsonpbananarepublic||[]).push([[0],{147:function(e,a,n){},263:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"mintPrice","type":"uint256"},{"internalType":"uint256","name":"marketingMint","type":"uint256"},{"internalType":"string","name":"assetsBaseURI","type":"string"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"address","name":"admin2","type":"address"},{"internalType":"address","name":"admin3","type":"address"},{"internalType":"address","name":"admin4","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FundsDirectlyDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FundsReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"claimedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reflectBalance","type":"uint256"}],"name":"MintRewardsClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"currentSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maxSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reflectBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lotteryPot","type":"uint256"}],"name":"TokensMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"aData","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"airdropMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cData","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimMintRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lotteryPayout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"originalMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setAssetsBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"lWallet","type":"address"}],"name":"setLotteryWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setMaxMintPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"max","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startMinting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamPayout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')},279:function(e,a,n){},292:function(e,a){},317:function(e,a){},319:function(e,a){},337:function(e,a){},338:function(e,a){},399:function(e,a){},401:function(e,a){},412:function(e,a){},414:function(e,a){},439:function(e,a){},441:function(e,a){},442:function(e,a){},447:function(e,a){},449:function(e,a){},455:function(e,a){},457:function(e,a){},470:function(e,a){},482:function(e,a){},485:function(e,a){},496:function(e,a){},505:function(e,a){},507:function(e,a){},604:function(e,a,n){"use strict";n.r(a);var t=n(3),s=n.n(t),i=n(260),c=n.n(i),r=(n(147),n(5)),o=n(7),l=n(12),d=n(11),u=(n(279),n(46)),m=n(18),b=n(17),p=n.n(b),j=n(49),y=n(48),h=n(92),x=n.n(h),O=n(263),f="",v="";f="0x2084e79b5fb196f75965a480eb63a1d17cda703e",v="0xa869";var g=function(){var e=Object(j.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.eth.getAccounts();case 2:return window.user=e.sent[0],window.instanceBananas=new a.eth.Contract(O,f,{from:window.user}),e.abrupt("return",window.instanceBananas);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),w=n(623),T=n(619),N=n(621),k=n(264),A=n.n(k),M=n.p+"static/media/large-banana.5fbc7da4.png",S=n.p+"static/media/solana-banana-01.93b911eb.png",B=n.p+"static/media/solana-banana-10.1a9c60db.png",C=n(35),F=n(0),E=function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(e){var t;return Object(r.a)(this,n),(t=a.call(this,e)).state={menuOpen:!1},t}return Object(o.a)(n,[{key:"toggleMenu",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"render",value:function(){var e=this;return Object(F.jsxs)("div",{className:"banana-menu-holder",children:[Object(F.jsxs)("header",{className:"stencil-font ",children:[Object(F.jsx)("div",{className:"header-logo",children:Object(F.jsx)(C.a,{to:"/#banana-republic",children:"BananaRepublic."})}),this.state.menuOpen?Object(F.jsx)("div",{className:"banana-mobile-items-holder",children:Object(F.jsxs)("div",{className:"banana-mobile-menu-row",children:[Object(F.jsx)("div",{className:"header-button5 banana-connect banana-mobile",children:void 0==window.user?Object(F.jsx)("a",{onClick:function(){void 0!=window.ethereum&&window.ethereum.enable().then((function(){return window.location.reload()}))},children:"Connect"}):Object(F.jsx)("a",{className:"banana-claim",onClick:function(){e.props.claim()},children:"Claim Rewards"})}),Object(F.jsx)("div",{className:"header-button4 banana-team-menu banana-mobile",children:Object(F.jsx)(C.a,{to:"/#banana-team",onClick:function(){return e.toggleMenu()},children:"Team"})}),Object(F.jsx)("div",{className:"header-button3 banana-roadmap-menu banana-mobile",children:Object(F.jsx)(C.a,{to:"/#banana-roadmap",onClick:function(){return e.toggleMenu()},children:"Roadmap"})}),Object(F.jsx)("div",{className:"header-button2 banana-nfts-menu banana-mobile",children:Object(F.jsx)(C.a,{to:"/#banana-nfts",onClick:function(){return e.toggleMenu()},children:"NFTs"})}),Object(F.jsx)("div",{className:"header-button1 banana-mint-menu banana-mobile",children:Object(F.jsx)(C.a,{to:"/#banana-mint",onClick:function(){return e.toggleMenu()},children:"Mint"})}),Object(F.jsx)("div",{className:" banana-twitter-menu banana-mobile",children:Object(F.jsx)("a",{children:"\xa0"})}),Object(F.jsx)("div",{className:"banana-discord-menu banana-mobile",children:Object(F.jsx)("a",{children:" \xa0"})})]})}):null,Object(F.jsx)("div",{className:"header-button5 banana-connect banana-desktop",children:void 0==window.user?Object(F.jsx)("a",{onClick:function(){void 0!=window.ethereum&&window.ethereum.enable().then((function(){return window.location.reload()}))},children:"Connect"}):Object(F.jsx)("a",{className:"banana-claim-desktop",onClick:function(){e.props.claim()},children:"Claim Rewards"})}),Object(F.jsx)("div",{className:" banana-twitter-menu banana-desktop",children:Object(F.jsx)("a",{children:"\xa0"})}),Object(F.jsx)("div",{className:"banana-discord-menu banana-desktop",children:Object(F.jsx)("a",{children:" \xa0"})}),Object(F.jsx)("div",{className:"header-button4 banana-team-menu banana-desktop",children:Object(F.jsx)(C.a,{to:"/#banana-team",children:"Team"})}),Object(F.jsx)("div",{className:"header-button3 banana-roadmap-menu banana-desktop",children:Object(F.jsx)(C.a,{to:"/#banana-roadmap",children:"Roadmap"})}),Object(F.jsx)("div",{className:"header-button2 banana-nfts-menu banana-desktop",children:Object(F.jsx)(C.a,{to:"/#banana-nfts",children:"NFTs"})}),Object(F.jsx)("div",{className:"header-button1 banana-mint-menu banana-desktop",children:Object(F.jsx)(C.a,{to:"/#banana-mint",children:"Mint"})}),Object(F.jsx)("div",{className:"banana-burguer-menu banana-mobile",children:Object(F.jsx)("a",{onClick:function(){return e.toggleMenu()},children:"\u2261"})})]}),Object(F.jsx)("div",{className:"banana-div-1"})]})}}]),n}(s.a.Component),I=function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(e){return Object(r.a)(this,n),a.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return Object(F.jsx)(w.a,{className:"footer ",children:Object(F.jsxs)(T.a,{container:!0,spacing:2,className:"stencil-font",style:{textAlign:"center"},children:[Object(F.jsx)(T.a,{item:!0,md:4,xs:12,className:"accolade-font",children:"\u24b8 2021 The People's Republic of North Bananas"}),Object(F.jsx)(T.a,{item:!0,md:4,xs:12,className:"accolade-font",children:Object(F.jsx)("div",{className:" banana-twitter-footer",children:Object(F.jsx)("a",{children:"\xa0\xa0\xa0"})})}),Object(F.jsx)(T.a,{item:!0,md:4,xs:12,className:"accolade-font",children:Object(F.jsx)("div",{className:"banana-discord-footer",children:Object(F.jsx)("a",{children:" \xa0\xa0\xa0"})})})]})})}}]),n}(s.a.Component),R=n.p+"static/media/fried.a024fa94.svg",D=n(30),Q=n.n(D),K=n.p+"static/media/menu_hover1.50906347.svg",H=n.p+"static/media/menu_hover2.55cb16f4.svg",q=n.p+"static/media/menu_hover3.bcc5467a.svg",P=n.p+"static/media/menu_hover4.8294a694.svg",L=n.p+"static/media/menu_connect_hover.4668d30b.svg",U=n.p+"static/media/menu_discord_hover.ea44f3bf.svg",V=n.p+"static/media/menu_twitter_hover.8e664b98.svg",W=n.p+"static/media/button_mint_hover.88adb545.svg",J=n.p+"static/media/button_call_hover.3defc980.svg",z=n.p+"static/media/button_opensea_hover.4d152085.svg",X=function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(e){var t;return Object(r.a)(this,n),(t=a.call(this,e)).componentDidMount=Object(j.a)(p.a.mark((function e(){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(){var e=Object(j.a)(p.a.mark((function e(a,n){var t,s,i,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return t=new x.a(window.ethereum),e.prev=2,e.next=5,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:v}]});case 5:window.ethereum.on("accountsChanged",(function(e){window.location.reload()})),a(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),n(e.t0);case 12:e.next=15;break;case 14:window.web3?(s=window.web3,console.log("Injected web3 detected."),a(s)):(i=new x.a.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc"),c=new x.a(i),console.log("No web3 instance injected, using Local web3."),a(c));case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(a,n){return e.apply(this,arguments)}}());case 3:return a=e.sent,window.web3=a,e.next=7,g(window.web3);case 7:return n=e.sent,t.setState({user:window.user}),t.setState({contractInstanceBananas:n}),e.next=12,t.loadData();case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("Error",e.t0);case 17:return e.prev=17,t.setState({isLoadingHomepageData:!1}),e.finish(17);case 20:t.interval=setInterval((function(){return t.tick()}),3e3);case 21:case"end":return e.stop()}}),e,null,[[0,14,17,20]])}))),t.state={hasHomepageData:!1,isLoadingHomepageData:!0,nftIndexBanana:-100,avaxBananaSelect:1,isMintingBanana:!1,isClaimingRewards:!1,myRewards:0,totalSupply:0,price:0,timeLeft:"",avaxPrice:1},t.mint=t.mint.bind(Object(y.a)(t)),t.tick=t.tick.bind(Object(y.a)(t)),t.decreaseSelect=t.decreaseSelect.bind(Object(y.a)(t)),t.increaseSelect=t.increaseSelect.bind(Object(y.a)(t)),t.loadData=t.loadData.bind(Object(y.a)(t)),t.claim=t.claim.bind(Object(y.a)(t)),t}return Object(o.a)(n,[{key:"tick",value:function(){var e=Object(j.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=usd");case 2:void 0!=(a=e.sent).data&&this.setState({avaxPrice:a.data["avalanche-2"].usd}),console.log("@@@ price",a);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){}},{key:"loadData",value:function(){var e=Object(j.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.state.contractInstanceBananas.methods.totalSupply().call();case 3:a=e.sent,this.setState({totalSupply:a}),this.setState({hasHomepageData:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error",e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"increaseSelect",value:function(){this.state.avaxBananaSelect<10&&this.setState({avaxBananaSelect:this.state.avaxBananaSelect+1})}},{key:"decreaseSelect",value:function(){this.state.avaxBananaSelect>1&&this.setState({avaxBananaSelect:this.state.avaxBananaSelect-1})}},{key:"mint",value:function(){var e=Object(j.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({isMinting:!0}),a=window.web3.utils.toWei(1*this.state.avaxBananaSelect+"","ether"),e.next=5,this.state.contractInstanceBananas.methods.mint(this.state.avaxBananaSelect).send({value:a});case 5:return e.next=7,this.loadData();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error",e.t0);case 12:return e.prev=12,this.setState({isMinting:!1}),e.finish(12);case 15:case"end":return e.stop()}}),e,this,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"claim",value:function(){var e=Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({isClaiming:!0}),e.next=4,this.state.contractInstanceBananas.methods.claimMintRewards().send();case 4:return e.next=6,this.loadData();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error",e.t0);case 11:return e.prev=11,this.setState({isClaiming:!1}),e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(E,{claim:this.claim}),Object(F.jsx)("a",{class:"banana-anchor",id:"banana-republic"}),Object(F.jsx)("img",{className:"banana-background",src:M}),Object(F.jsx)("div",{className:"banana-div-2"}),Object(F.jsx)("a",{class:"banana-anchor",id:"banana-mint"}),Object(F.jsx)(w.a,{maxWidth:"md",className:"banana-container",children:Object(F.jsxs)(T.a,{container:!0,spacing:2,children:[Object(F.jsx)(T.a,{item:!0,md:8,xs:12,children:Object(F.jsxs)(Q.a,{bottom:!0,children:[Object(F.jsx)("div",{className:"stencil-font banana-title",children:"Join the Republic"}),Object(F.jsx)("div",{className:"accolade-font banana-paragraph",children:"Each Banana has been handcrafted by the \u201cartist\u201d that did Manuel Noriega\u2019s tax returns. He spent the last 3 years smuggling the coveted artworks onto the Ethereum blockchain piece by piece. After being pulled over for drunk driving with a trunk full of bananas, he was \u201celected\u201d El Presidente of the People\u2019s Republic of Bananas. He is currently away on a \u201cbusiness trip\u201d after being ousted by the CIA. All proceeds from banana sales will be deployed to secure his immediate release."}),Object(F.jsx)("br",{}),Object(F.jsxs)(T.a,{container:!0,spacing:2,className:"stencil-font",style:{textAlign:"center"},children:[Object(F.jsx)(T.a,{item:!0,md:5,xs:12,children:Object(F.jsx)("div",{className:"banana-mint ",onClick:function(){e.mint()},children:Object(F.jsx)("a",{children:"Mint bananas"})})}),Object(F.jsx)(T.a,{item:!0,md:3,xs:12,children:Object(F.jsxs)("div",{className:"banana-mint-selector",children:[Object(F.jsx)("div",{onClick:function(){e.decreaseSelect()},className:"banana-mint-selector-minus",children:Object(F.jsx)("a",{children:"\xa0"})}),Object(F.jsx)("div",{className:"banana-mint-selector-number",children:this.state.avaxBananaSelect}),Object(F.jsx)("div",{onClick:function(){e.increaseSelect()},className:"banana-mint-selector-plus",children:Object(F.jsx)("a",{children:"\xa0"})})]})}),Object(F.jsx)(T.a,{item:!0,md:4,xs:12,children:Object(F.jsxs)("div",{className:"banana-mint-price",children:[Object(F.jsxs)("div",{className:"banana-mint-price-eth",children:[1*this.state.avaxBananaSelect,".00 ",Object(F.jsx)("span",{children:"AVAX"})]}),Object(F.jsxs)("div",{className:"banana-mint-price-usd",children:["=",(this.state.avaxPrice*this.state.avaxBananaSelect).toFixed(2)," USD"]})]})})]})]})}),Object(F.jsx)(T.a,{item:!0,md:4,xs:12,children:Object(F.jsxs)(Q.a,{bottom:!0,children:[Object(F.jsxs)(N.a,{className:"banana-box-small",children:[Object(F.jsx)("img",{className:"banana-box-small-border-1"}),Object(F.jsx)("img",{src:S})]}),Object(F.jsxs)(N.a,{className:"banana-box-small",children:[Object(F.jsx)("img",{className:"banana-box-small-border-2"}),Object(F.jsx)("img",{src:B})]}),Object(F.jsxs)(N.a,{className:"banana-box-small",children:[Object(F.jsx)("img",{className:"banana-box-small-border-3"}),Object(F.jsx)("img",{src:B})]}),Object(F.jsxs)(N.a,{className:"banana-box-small",children:[Object(F.jsx)("img",{className:"banana-box-small-border-4"}),Object(F.jsx)("img",{src:S})]})]})})]})}),Object(F.jsx)("div",{className:"banana-div-3"}),Object(F.jsx)("div",{className:"banana-mint-now-container",children:Object(F.jsx)(Q.a,{bottom:!0,children:Object(F.jsx)("div",{className:"banana-mint stencil-font banana-opensea",style:{height:"90px"},children:Object(F.jsx)("a",{children:"View collection on NFTrade"})})})}),Object(F.jsx)("div",{className:"banana-div-2"}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)("a",{class:"banana-anchor",id:"banana-nfts"}),Object(F.jsx)(w.a,{maxWidth:"md",children:Object(F.jsxs)(T.a,{container:!0,spacing:2,children:[Object(F.jsx)(T.a,{item:!0,md:8,xs:12,children:Object(F.jsxs)(Q.a,{bottom:!0,children:[Object(F.jsx)("div",{className:"stencil-font banana-title",children:"The Banana Republic NFTs"}),Object(F.jsxs)("div",{className:"accolade-font banana-paragraph",children:["All people in the Republic of Bananas are equal, and denying this obvious fact will result in a visit from the Ministry of Truth. Bananas, on the other hand, are all completely unique. Every banana has been designed to highlight specific pitfalls of bourgeois society and has over 120 possible traits. On top of that, 100 bananas have been uniquely animated to prove the superiority of communist technology. The revolutionary workers of the People\u2019s Republic of Bananas have packaged every banana as an ERC-721 token (See Record and Proof).",Object(F.jsx)("br",{}),"To access members-only areas such as The Bunker, Banana Citizens will need to be signed into their Metamask wallet."]}),Object(F.jsx)("br",{})]})}),Object(F.jsx)(T.a,{item:!0,md:4,xs:12,children:Object(F.jsx)(Q.a,{bottom:!0,children:Object(F.jsxs)(N.a,{className:"banana-box",children:[Object(F.jsx)("img",{className:"banana-box-border-1"}),Object(F.jsx)("img",{src:S})]})})})]})}),Object(F.jsx)("br",{}),Object(F.jsx)("a",{class:"banana-anchor",id:"banana-fried"}),Object(F.jsx)(w.a,{maxWidth:"md",children:Object(F.jsxs)(T.a,{container:!0,spacing:2,children:[Object(F.jsx)(T.a,{item:!0,md:8,xs:12,children:Object(F.jsxs)(Q.a,{bottom:!0,children:[Object(F.jsx)("div",{className:"stencil-font banana-title",children:"Fried Bananas"}),Object(F.jsx)("div",{className:"accolade-font banana-paragraph",children:"In the People\u2019s Republic of Bananas, fried bananas are considered a national delicacy. The origins of this culinary tradition remain unclear, yet communist idealogues assert that the scorched bananas signify the ravages of capitalism. Critics counter this claim by suggesting the practice is state propaganda designed to reduce supermarket queuing times. One thing is clear \u2014 El Presidente is going to fry 10 random bananas after all of them have been sold, making them highly desirable collector\u2019s items for idealogues and critics alike."}),Object(F.jsx)("br",{})]})}),Object(F.jsx)(T.a,{item:!0,md:4,xs:12,children:Object(F.jsx)(Q.a,{bottom:!0,children:Object(F.jsxs)(N.a,{className:"banana-box",children:[Object(F.jsx)("img",{className:"banana-box-border-2"}),Object(F.jsx)("img",{style:{paddingLeft:"6px",paddingRight:"4px",paddingTop:"40px"},src:R})]})})})]})}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)("a",{class:"banana-anchor",id:"banana-roadmap"}),Object(F.jsx)(w.a,{maxWidth:"md",children:Object(F.jsxs)(T.a,{container:!0,spacing:2,children:[Object(F.jsx)(T.a,{item:!0,md:8,xs:12,children:Object(F.jsxs)(Q.a,{bottom:!0,children:[Object(F.jsx)("div",{className:"stencil-font banana-title",children:"Roadmap"}),Object(F.jsxs)("div",{className:"accolade-font banana-paragraph",children:[Object(F.jsxs)(T.a,{container:!0,spacing:2,style:{marginBottom:"-15px"},children:[Object(F.jsx)(T.a,{item:!0,md:1,xs:2,className:"comrade-name stencil-font",style:{fontSize:"22px"},children:"10%"}),Object(F.jsx)(T.a,{item:!0,md:11,xs:10,style:{lineHeight:"2.2"},children:"Mount operation to rescue El Presidente "})]}),Object(F.jsxs)(T.a,{container:!0,spacing:2,style:{marginBottom:"-15px"},children:[Object(F.jsx)(T.a,{item:!0,md:1,xs:2,className:"comrade-name stencil-font",style:{fontSize:"22px"},children:"20%"}),Object(F.jsx)(T.a,{item:!0,md:11,xs:10,style:{lineHeight:"2.2"},children:"Exclusive high-quality merch store for holders"})]}),Object(F.jsxs)(T.a,{container:!0,spacing:2,style:{marginBottom:"-15px"},children:[Object(F.jsx)(T.a,{item:!0,md:1,xs:2,className:"comrade-name stencil-font",style:{fontSize:"22px"},children:" 30%"}),Object(F.jsx)(T.a,{item:!0,md:11,xs:10,style:{lineHeight:"2.2"},children:"NFT governance platform "})]}),Object(F.jsxs)(T.a,{container:!0,spacing:2,style:{marginBottom:"-15px"},children:[Object(F.jsx)(T.a,{item:!0,md:1,xs:2,className:"comrade-name stencil-font",style:{fontSize:"22px"},children:" 40%"}),Object(F.jsx)(T.a,{item:!0,md:11,xs:10,style:{lineHeight:"2.2"},children:"xxx NFT airdrop to XX lucky winners"})]}),Object(F.jsxs)(T.a,{container:!0,spacing:2,style:{marginBottom:"-15px"},children:[Object(F.jsx)(T.a,{item:!0,md:1,xs:2,className:"comrade-name stencil-font",style:{fontSize:"22px"},children:" 60%"}),Object(F.jsx)(T.a,{item:!0,md:11,xs:10,style:{lineHeight:"2.2"},children:"Exclusive Bunker spot for NFTs whales"})]}),Object(F.jsxs)(T.a,{container:!0,spacing:2,style:{marginBottom:"-15px"},children:[Object(F.jsx)(T.a,{item:!0,md:1,xs:2,className:"comrade-name stencil-font",style:{fontSize:"22px"},children:" 80%"}),Object(F.jsx)(T.a,{item:!0,md:11,xs:10,style:{lineHeight:"2.2"},children:"Bored Ape Yacht Club airdrop to XX lucky winners"})]}),Object(F.jsxs)(T.a,{container:!0,spacing:2,style:{marginBottom:"-15px"},children:[Object(F.jsx)(T.a,{item:!0,md:1,xs:2,className:"comrade-name stencil-font",style:{fontSize:"22px"},children:" 90%"}),Object(F.jsx)(T.a,{item:!0,md:11,xs:10,style:{lineHeight:"2.2"},children:"Lottery winner announced"})]}),Object(F.jsxs)(T.a,{container:!0,spacing:2,children:[Object(F.jsx)(T.a,{item:!0,md:1,xs:2,className:"comrade-name stencil-font",style:{fontSize:"22px"},children:" 100%"}),Object(F.jsx)(T.a,{item:!0,md:11,xs:10,style:{lineHeight:"2.2"},children:"Ultra rare Fried Bananas art update and reveal"})]})]}),Object(F.jsx)("br",{})]})}),Object(F.jsx)(T.a,{item:!0,md:4,xs:12,children:Object(F.jsx)(Q.a,{bottom:!0,children:Object(F.jsxs)(N.a,{className:"banana-box",children:[Object(F.jsx)("img",{className:"banana-box-border-3"}),Object(F.jsx)("img",{src:S})]})})})]})}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)("a",{class:"banana-anchor",id:"banana-team"}),Object(F.jsx)(w.a,{maxWidth:"md",children:Object(F.jsxs)(T.a,{container:!0,spacing:2,children:[Object(F.jsx)(T.a,{item:!0,md:8,xs:12,children:Object(F.jsxs)(Q.a,{bottom:!0,children:[Object(F.jsx)("div",{className:"stencil-font banana-title",children:"Government of Banana Republic"}),Object(F.jsxs)("div",{className:"accolade-font banana-paragraph",children:["The Banana Republic was formed in an undisclosed location on November 1st 2021. After liberating K from North Koran guland, the four founding members will use the rest of the minting revenue to strong-arm the UN into recognizing it as a legitimate Republic.",Object(F.jsx)("br",{})," ",Object(F.jsx)("br",{}),Object(F.jsx)("span",{className:"comrade-name",children:"Comrade K:"})," El Presidente (currently on vacation in Langley, Virginia). ",Object(F.jsx)("br",{}),Object(F.jsx)("span",{className:"comrade-name",children:"Comrade Gab:"})," Minister of Truth. ",Object(F.jsx)("br",{}),Object(F.jsx)("span",{className:"comrade-name",children:"Comrade David:"})," Minister of Preemptive Wars. ",Object(F.jsx)("br",{}),Object(F.jsx)("span",{className:"comrade-name",children:"Comrade Pierre:"})," Minister of Censorship. ",Object(F.jsx)("br",{})]}),Object(F.jsx)("br",{})]})}),Object(F.jsx)(T.a,{item:!0,md:4,xs:12,children:Object(F.jsxs)(Q.a,{bottom:!0,children:[Object(F.jsxs)(N.a,{className:"banana-box-small",children:[Object(F.jsx)("img",{className:"banana-box-small-border-1"}),Object(F.jsx)("img",{src:S})]}),Object(F.jsxs)(N.a,{className:"banana-box-small",children:[Object(F.jsx)("img",{className:"banana-box-small-border-2"}),Object(F.jsx)("img",{src:B})]}),Object(F.jsxs)(N.a,{className:"banana-box-small",children:[Object(F.jsx)("img",{className:"banana-box-small-border-3"}),Object(F.jsx)("img",{src:B})]}),Object(F.jsxs)(N.a,{className:"banana-box-small",children:[Object(F.jsx)("img",{className:"banana-box-small-border-4"}),Object(F.jsx)("img",{src:S})]})]})})]})}),Object(F.jsx)("br",{})," ",Object(F.jsx)("br",{}),Object(F.jsx)("div",{className:"banana-div-4"}),Object(F.jsx)("div",{className:"banana-mint-now-container",children:Object(F.jsx)(Q.a,{bottom:!0,children:Object(F.jsx)("div",{className:"banana-mint-now stencil-font ",style:{height:"90px"},children:Object(F.jsx)(C.a,{to:"/#banana-mint",style:{color:"black"},children:"Mint a banana now"})})})}),Object(F.jsx)("div",{className:"banana-div-3"}),Object(F.jsx)(I,{}),Object(F.jsxs)("div",{id:"preload",children:[Object(F.jsx)("img",{src:K}),Object(F.jsx)("img",{src:H}),Object(F.jsx)("img",{src:q}),Object(F.jsx)("img",{src:P}),Object(F.jsx)("img",{src:L}),Object(F.jsx)("img",{src:U}),Object(F.jsx)("img",{src:V}),Object(F.jsx)("img",{src:W}),Object(F.jsx)("img",{src:J}),Object(F.jsx)("img",{src:z}),Object(F.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABPCAYAAAC6VNZaAAAACXBIWXMAAAsSAAALEgHS3X78AAADyElEQVR4nO2bzW7TQBDH/7QIhCVEggQSJ9K+gIN4gAYEN6SEJyBw4Nqol3JBROICF0SeoEHcOCX3CtIHQI1foE1OHDgkEchICBS0ZtZ1Un/vxh8b/6SojePY+8+MZ3Zndy/M53OsAxtrobIQqiCFUNUohKrG2gi9mPQNTejvAQzZS4MxTOq+wj0jE3oFQAtAFcAIQE+D0XN83gDAXk8A9AHUly5xBGDgeF+h63Q1GCOhxjkQEmpCbwI4cPloRlZjjb4t0L6OBqMl8H2b2ELJBXdlNCKADxqMpuhFIgslV+0C2BG9eQQM5v4irhwp6prQq+SSSYpk6ABOyYtiEdqi9DyyG11bpaIQMOs2o0bsUBZ1BJ20RYKsO6A2hSZQqAm97RFZ04T94AdRxHq6rgm9xHJiCs9jVJ5qMLpB33EVSpF1mBFXDUOgWC/X7eZIJMiN2+SFrpyzKKWQ4zRaKwnWzWwt51w3i3r+KjmhTlF5QYeKQkH964bzgJvQWnLtWSkV58UXhJK5hTvQWWTZoq2cRdvQ2EIp2r7KfpNDs/AIOi0ae2SQUXao43MmlA5kvasXB9t43KIVaZfOFnU+huVCq4oKZewyj+VCEys7pkSNC50qLtS2qArdPj9KUiv1L198w7u3363/t7YvYTL5i3J503p/evIbd+5eQam8aX22tX3ZOj6Z/MH9B1fta/BzJFO1hmmyarSPHp7gy+FP4Sa+fnMLe/s3ZEo94q7bCDgxFDJEMj4f/pByHSdcqMi0QR4YbVAfVworeLZkMdqQOXXHAklGGXLXncloX1mSRVfwgw15epEyn7K3f9P6y9LK8ddfVoNZKmGpZUrHnj2/br13g6cddo5MWKGMCx3IEMqEffyUubjGqoJ21JU2s5xBFkYvqgplk8jWsgHVx6Nt/o/KQsfOar3KwzTXKYme+7nqYAklE3eUF4r/Ylnx+h4tcFKBBS/1mgju0kqvvDJmg20Nhh17vCaCW7L6vykwpjVJCwHWVSidlMcA1SdLnhuR+a1KyVtvia8/ck2VfkIDV3pkDE+RvkIp5Rg5EdkPKiAELahq5kRs4ExgqLWAVFeqkvCszbrFX1Dlhwm957KKOg1mtMwmVCyJI7REpZc0Swk8V4Yu7EXeJUHhO80FHR2vXOlHHpaac2aUQmJ1ZGLve6FBwOMEo3JskZCxHQRnz22NXg3Jz6+QJTkr2RFM6ahCKalK869+acmgkuuIAh3/zoAXt0RJdOsz/QAlx2agKe1oWnkpp9jjrRqFUNUohKpGIVQ1CqGqsR5CAfwD6OArZFqeSXEAAAAASUVORK5CYII="}),Object(F.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABPCAYAAAC3SqYdAAAACXBIWXMAAAsSAAALEgHS3X78AAAEkklEQVR4nO2cz2sTURDHxyoVc2la8CAKTSvehE3pH2D+A6OgN2nqwXPxohexxYu91BRP9qAp3hQ0vQum4FFp9iB4apOToGgSkBWLpTLPect2s7+y++Ylm/QDpT822d1vZt682XnzeuLw8BBGibGRUjuKgk/168IWGFkAqAJAGwCWMmA2dFy3nxYuA8AVALgKAHsWGMv0IbDCGrQsMPIAUASAElkSLVqj3/HvE663dACggq/LgFnjuCdlgi0wCiQERRoKTtnE86kWnlgwuWGFXJMDk9wfrd7uq2ASW1Nk0TCku5eTBLjYgi0wcjQmdYh1s0LCe7Z4z4LJqkv05Q46OjFpjNdZBJNFl32ia79AN8/34uKRBFtgYPR9MSAi3aClC1HdOzTxGHCxQDGkFjVpCbQwJQ47Ku+OETMDZj7s9L4WduS6acGwwKjEFkyT/XSKBCMLFhhLQS/wdGkLDIzEbznvjJEOBTHP6crPwuVUSv3PBGVknnQJJuumzZXd+I5nLwsXtN4aHziel91n7xrDFhiNIbCwkxlnJnbEwpRkDJNYoHTYxraw5kc93czJqO0UXGV8iLd587oDa6vfIDt58sjfHz0+B3PzZ7gua+fbQjBFtAWuq0n2dvfh8sUvnsdQ7IePlzgvv5kBszRG+TK7WKSxu+97bOfTb/GBMIJROzdGz7cDQdAHoojiqK08ZFGwloo/kNsmOa6A/FgGzArVgEeBrHTpND8s9EJDCu6p8sfF3u4f9mtoDVrPN34EHsekhJmcNsHPN36GzrPt1gE8uP+VNXjJTAvLIk+SnAhvFkU5QReVIt+/+5X4Zq/fmIC5+QzcvjPVlZpGZF0KxieKh3FvZG31u7CMLhKkoStKXDpsbKomSRoqBbOvvKsmbhoqBYcWsP3Ascuc9CslseCUUZCCY68GYrSMGTETEfeaStqWMGLeutlkmT9nZsfF99zsuPh5Zva0iNJxqyNyWmJr5ZHzc6v1V0xfYUgh+L5W60CUfnDeVcS2FNzWsch9fuqzEBLEy1fTIsFgYl2OYS2rhFEshdMNfijoDSqyMxdtOYbLOupak5PhIQNdGl357r2zHLdQFxammu1AFAFQsAxUDNSdqSVLq1+vMCYxHVxycQrWVtsKgrEYLwzqFJy4rS8MRjFREFUdp2D2Mk8/MjIHYiYaKAszekBHLqbZgnVFasycvEDrP312geuydp5xZEFcRalnQLEXxd0Vj9A+pxSy6dsBQP2KW0MktkNdvzZeNa00dd+FUXI3nfo1ptWHoPVhKwNm11KwX9WyRO6QVpqkoQtPwTRFeb4hJXS5cpiFUTSO5cUUil0J2voT2hGfggZxJ6JxJegFoSsPtGB+LQVjOlQs9LjJI0sNMDn6PghRvEmPfZWoO9iS7FsqUmbWjx0usbfppWlnGtCwwg1aXV2yUVG197BKW2O5aFKTaOL9hyp3l5boplR148rxWaUpUgnK9w/TttpKDOHb5Cl1rr3DwLlhmixejNihu0jTHzta/q0FNbDmaXtBznGoQUFIW9vU8f/xGHaOBQ87x4KHndESDAD/AJTvydJoUyFOAAAAAElFTkSuQmCC"})]})]})}}]),n}(s.a.Component),G=function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(){return Object(r.a)(this,n),a.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(F.jsx)(u.b,{children:Object(F.jsxs)(m.c,{children:[Object(F.jsx)(m.a,{exact:!0,path:"/",component:X}),Object(F.jsx)(m.a,{exact:!0,path:"/home",component:X}),Object(F.jsx)(m.a,{render:function(){return Object(F.jsx)("h1",{children:"Not Found"})}})]})})}}]),n}(s.a.Component),Z=function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(){return Object(r.a)(this,n),a.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(F.jsx)(u.a,{children:Object(F.jsx)(G,{})})}}]),n}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(F.jsx)(Z,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[604,1,2]]]);
//# sourceMappingURL=main.13f7d2b6.chunk.js.map