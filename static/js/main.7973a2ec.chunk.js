(this.webpackJsonphashdex=this.webpackJsonphashdex||[]).push([[0],{124:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var s=a(32),l=a(75),o=a.n(l),r=a(112),i=a.n(r),n=a(113),c=a(114),d=a(108),u=a(116),h=a(115),v=(a(124),a(117)),m=a(74),b=a(61),p=a(118),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).sym="btcusdt",null!==localStorage.getItem("selected")?s.state={selectValue:localStorage.getItem("selected")}:s.state={selectValue:"BTC"},s.handleChange=s.handleChange.bind(Object(d.a)(s)),s}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.title="Hashdex",null!==this.state.selectValue?this.sym=this.state.selectValue.toLowerCase()+"usdt":this.sym="btcusdt",console.log(localStorage.getItem("selected"));var e=new WebSocket("wss://stream.binance.com:9443/ws/"+this.sym+"@trade"),t=new Request("https://api.hashdex.io/prod/marketdata/v1/index/HDAI/last"),a=new WebSocket("wss://stream.binance.com:9443/ws/"+this.sym+"@depth10");fetch(t).then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.constituents.length;t++)document.getElementById("lista").innerHTML+=e.constituents[t].assetId+":    "+e.constituents[t].currentPrice+"<br>",document.getElementById("asset").innerHTML+="<option value="+e.constituents[t].assetId+">"+e.constituents[t].assetId+"</option>"}));var s=Object(v.a)(document.getElementById("chart"),{width:935,height:550,layout:{textColor:"#d1d4dc",backgroundColor:"#000000"},rightPriceScale:{scaleMargins:{top:.3,bottom:.25}},crosshair:{vertLine:{width:5,color:"rgba(224, 227, 235, 0.1)",style:0},horzLine:{visible:!1,labelVisible:!1}},grid:{vertLines:{color:"rgba(42, 46, 57, 0)"},horzLines:{color:"rgba(42, 46, 57, 0)"}}}).addAreaSeries({topColor:"rgba(38, 198, 218, 0.56)",bottomColor:"rgba(38, 198, 218, 0.04)",lineColor:"rgba(38, 198, 218, 1)",lineWidth:2,crossHairMarkerVisible:!1});e.onmessage=function(e){var t=JSON.parse(e.data);s.update({time:t.t/1e3,value:t.p})},m.c(p.a);var l=m.b("orderChart",b.e);l.dataSource.url="https://api.binance.com/api/v3/depth?symbol="+this.state.selectValue+"USDT&limit=100",l.dataSource.reloadFrequency=3e4,l.dataSource.adapter.add("parsedData",(function(e){function t(e,t,s){for(var l=0;l<e.length;l++)e[l]={value:Number(e[l][0]),volume:Number(e[l][1])};if(e.sort((function(e,t){return e.value>t.value?1:e.value<t.value?-1:0})),s)for(l=e.length-1;l>=0;l--){l<e.length-1?e[l].totalvolume=e[l+1].totalvolume+e[l].volume:e[l].totalvolume=e[l].volume,(o={}).value=e[l].value,o[t+"volume"]=e[l].volume,o[t+"totalvolume"]=e[l].totalvolume,a.unshift(o)}else for(l=0;l<e.length;l++){var o;e[l].totalvolume=l>0?e[l-1].totalvolume+e[l].volume:e[l].volume,(o={}).value=e[l].value,o[t+"volume"]=e[l].volume,o[t+"totalvolume"]=e[l].totalvolume,a.push(o)}}var a=[];return t(e.bids,"bids",!0),t(e.asks,"asks",!1),a})),l.numberFormatter.numberFormat="#,###.####";var o=l.xAxes.push(new b.a);o.dataFields.category="value",o.renderer.minGridDistance=70,null!==this.state.selectValue?o.title.text=this.state.selectValue.toUpperCase()+"/USDT":o.title.text="BTC/USDT",l.yAxes.push(new b.d).title.text="Volume";var r=l.series.push(new b.c);r.dataFields.categoryX="value",r.dataFields.valueY="bidstotalvolume",r.strokeWidth=2,r.stroke=m.a("#0f0"),r.fill=r.stroke,r.fillOpacity=.1,r.tooltipText="Bid: [bold]{categoryX}[/]\nTotal volume: [bold]{valueY}[/]\nVolume: [bold]{bidsvolume}[/]";var i=l.series.push(new b.c);i.dataFields.categoryX="value",i.dataFields.valueY="askstotalvolume",i.strokeWidth=2,i.stroke=m.a("#f00"),i.fill=i.stroke,i.fillOpacity=.1,i.tooltipText="Ask: [bold]{categoryX}[/]\nTotal volume: [bold]{valueY}[/]\nVolume: [bold]{asksvolume}[/]";var n=l.series.push(new b.b);n.dataFields.categoryX="value",n.dataFields.valueY="bidsvolume",n.strokeWidth=0,n.fill=m.a("#000"),n.fillOpacity=.2;var c=l.series.push(new b.b);c.dataFields.categoryX="value",c.dataFields.valueY="asksvolume",c.strokeWidth=0,c.fill=m.a("#000"),c.fillOpacity=.2,l.cursor=new b.f;var d=document.getElementById("buy"),u=document.getElementById("sell");a.onmessage=function(e){d.innerHTML="Buy<br>",u.innerHTML="Sell<br>";for(var t=JSON.parse(e.data),a=0;a<10;a++)d.innerHTML+="Price: "+t.bids[a][0]+"          Volume: "+t.bids[a][1]+"<br>",u.innerHTML+="Price: "+t.asks[a][0]+"          Volume: "+t.asks[a][1]+"<br>"}}},{key:"handleChange",value:function(e){console.log("Asset selected"),this.setState({selectValue:e.target.value}),localStorage.setItem("selected",e.target.value),window.location.reload()}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h2",{children:"HashDex Dashboard"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("select",{id:"asset",onChange:this.handleChange,children:Object(s.jsx)("option",{children:"Select"})}),Object(s.jsx)("h3",{children:this.state.selectValue})]}),Object(s.jsx)("div",{className:"App-firstRow",children:Object(s.jsxs)("div",{className:"App-lista-container",children:[Object(s.jsx)("h4",{children:"Constituents prices"}),Object(s.jsx)("div",{id:"lista",className:"App-lista"}),Object(s.jsx)("div",{className:"App-chart",id:"chart"})]})}),Object(s.jsxs)("div",{className:"App-secondRow",children:[Object(s.jsxs)("div",{id:"order",className:"App-order",children:[Object(s.jsx)("h4",{children:"Order Book"}),Object(s.jsx)("div",{id:"buy",className:"App-buy"}),Object(s.jsx)("div",{id:"sell",className:"App-sell"})]}),Object(s.jsx)("div",{id:"orderChart",className:"App-orderchart"})]})]})}}]),a}(l.Component);i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[125,1,4]]]);
//# sourceMappingURL=main.7973a2ec.chunk.js.map