(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{21:function(e){e.exports=JSON.parse('[{"productName":"Electronics-Product-1","productPrice":100,"description":"This is a Product from electronics category","img_url":"https://icons.iconarchive.com/icons/icons-land/vista-hardware-devices/256/TV-Set-Retro-icon.png","category":"electronics","quantity":5},{"productName":"Electronics-Product-2","productPrice":100,"description":"This is a Product from electronics category","img_url":"https://icons.iconarchive.com/icons/icons-land/vista-hardware-devices/256/TV-Set-Retro-icon.png","category":"electronics","quantity":5},{"productName":"Electronics-Product-3","productPrice":100,"description":"This is a Product from electronics category","img_url":"https://www.google.com/search?q=beauty+product&tbm=isch&ved=2ahUKEwjYk--9rIToAhWM4oUKHaXFDpAQ2-cCegQIABAA&oq=beauty+product&gs_l=img.3..0l10.35746.37372..37468...0.0..0.123.1363.3j10......0....1..gws-wiz-img.......35i39j0i67.8eIo1rMyQqo&ei=a3hhXpiyNIzFlwSli7uACQ&bih=855&biw=852&tbs=isz%3Ai&hl=en#imgrc=HaoyKxSPCpgwlM","category":"electronics","quantity":5},{"productName":"Beauty-Product-1","productPrice":15,"description":"This is a Product from beauty category","img_url":"https://cdn.flptitan.com/content/products/images/forever_argi___pd_category_256_X_256_1554897484730.png","category":"beauty","quantity":5},{"productName":"Beauty-Product-2","productPrice":15,"description":"This is a Product from beauty category","img_url":"https://cdn.flptitan.com/content/products/images/forever_argi___pd_category_256_X_256_1554897484730.png","category":"beauty","quantity":5},{"productName":"Beauty-Product-3","productPrice":15,"description":"This is a Product from beauty category","img_url":"https://cdn.flptitan.com/content/products/images/forever_argi___pd_category_256_X_256_1554897484730.png","category":"beauty","quantity":5},{"productName":"Sports-Product-1","productPrice":25,"description":"This is a Product from sports category","img_url":"","category":"sports","quantity":5},{"productName":"Sports-Product-2","productPrice":25,"description":"This is a Product from sports category","img_url":"https://images-na.ssl-images-amazon.com/images/I/817Ux2L6-NL._SY355_.jpg","category":"sports","quantity":5},{"productName":"Sports-Product-3","productPrice":25,"description":"This is a Product from sports category","img_url":"https://images-na.ssl-images-amazon.com/images/I/817Ux2L6-NL._SY355_.jpg","category":"sports","quantity":5},{"productName":"House-Product-1","productPrice":50,"description":"This is a Product from house category","img_url":"https://images-na.ssl-images-amazon.com/images/I/813tMa1%2B4cL._SX466_.jpg","category":"house","quantity":5},{"productName":"House-Product-2","productPrice":50,"description":"This is a Product from house category","img_url":"https://images-na.ssl-images-amazon.com/images/I/813tMa1%2B4cL._SX466_.jpg","category":"house","quantity":5},{"productName":"House-Product-3","productPrice":50,"description":"This is a Product from house category","img_url":"https://images-na.ssl-images-amazon.com/images/I/813tMa1%2B4cL._SX466_.jpg","category":"house","quantity":5}]')},37:function(e,t,a){e.exports=a(85)},59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),c=a.n(o),i=a(6),l=a(1),u=a(2),s=a(4),m=a(3),d=a(5),p=a(7),h=a.n(p),g=new(function(){function e(){Object(l.a)(this,e),this.auth=h.a.create({baseURL:"https://e-commerce-ih-m3.herokuapp.com",withCredentials:!0})}return Object(u.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.email,n=e.password;return this.auth.post("/auth/signup",{username:t,email:a,password:n}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.email,a=e.password;return this.auth.post("/auth/login",{email:t,password:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}},{key:"admin",value:function(){return this.auth.get("/auth/admin").then((function(e){return e.data}))}}]),e}()),f=r.a.createContext(),b=f.Consumer,E=f.Provider,y=function(e){return function(t){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,t),Object(u.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(b,null,(function(a){return r.a.createElement(e,Object.assign({user:a.user,isLoggedIn:a.isLoggedIn,login:a.login,signup:a.signup,logout:a.logout,admin:a.admin},t.props))}))}}]),a}(n.Component)},v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:!1,user:null,isLoading:!0},a.signup=function(e,t,n){g.signup({username:e,email:t,password:n}).then((function(e){return a.setState({isLoggedIn:!0,user:e})})).catch((function(e){return console.log(e)}))},a.login=function(e,t){g.login({email:e,password:t}).then((function(e){return a.setState({isLoggedIn:!0,user:e})})).catch((function(e){return console.log(e)}))},a.logout=function(){g.logout().then((function(){return a.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedIn,n=e.user,o=this.login,c=this.logout,i=this.signup;return r.a.createElement(E,{value:{isLoading:t,isLoggedIn:a,user:n,login:o,logout:c,signup:i}},this.props.children)}}]),t}(r.a.Component),P=(a(59),a(15)),O=a(21),j=(a(60),y(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showSearchBar:!0},a.hideMenuOnClick=function(){document.getElementById("checkBoxId").checked=!1},a.logoutAndHide=function(){a.props.logout(),a.hideMenuOnClick()},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=(e.logout,e.isLoggedIn);return r.a.createElement("nav",{className:"navbar",id:"navBar",role:"navigation"},r.a.createElement("div",{id:"menuToggle"},r.a.createElement("input",{type:"checkbox",id:"checkBoxId"}),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("ul",{id:"menu"},r.a.createElement(i.b,{to:"/",className:"nav-btn",onClick:this.hideMenuOnClick},r.a.createElement("li",null,"Home")),r.a.createElement(i.b,{to:"#",className:"nav-btn",onClick:this.hideMenuOnClick},r.a.createElement("li",null,"Categories")),a&&t.isAdmin?r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/adminPage",className:"nav-btn",onClick:this.hideMenuOnClick},r.a.createElement("li",null,"Admin Page")),r.a.createElement(i.b,{to:"/adminAddProduct",className:"nav-btn",onClick:this.hideMenuOnClick},r.a.createElement("li",null,"Add Product")),r.a.createElement("p",null,"username: ",t.username),r.a.createElement("button",{onClick:this.logoutAndHide},"Logout")):r.a.createElement(r.a.Fragment,null),a&&!t.isAdmin?r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/profilePage",className:"nav-btn",onClick:this.hideMenuOnClick},r.a.createElement("li",null,"Profile")),r.a.createElement("p",null,"username: ",t.username),r.a.createElement("button",{onClick:this.logoutAndHide},"Logout"),r.a.createElement(i.b,{to:"/myCartPage",className:"nav-btn",onClick:this.hideMenuOnClick},r.a.createElement("h4",null,"MyCartPage"))):r.a.createElement(r.a.Fragment,null),a?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/login"},r.a.createElement("button",{className:"navbar-button",onClick:this.hideMenuOnClick},"Login")," "),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/signup"},r.a.createElement("button",{className:"navbar-button",onClick:this.hideMenuOnClick},"Sign Up")," "))),r.a.createElement("p",null)))}}]),t}(n.Component)));a(66);var C=function(){return r.a.createElement("div",{id:"home-container"},r.a.createElement("h1",null,"Shop Mate"),r.a.createElement("h3",null,"Expect More. Pay Less"),r.a.createElement("section",{id:"hero-img"}),r.a.createElement("h4",{id:"catch-phrase"},"All your favourite brands in one place"),r.a.createElement("div",{className:"category-img",id:"box1"}),r.a.createElement("h4",{className:"category-title"},"SPORTS"),r.a.createElement("div",{className:"category-img",id:"box2"}),r.a.createElement("h4",{className:"category-title"},"BEAUTY"),r.a.createElement("div",{className:"category-img",id:"box3"}),r.a.createElement("h4",{className:"category-title"},"HOUSE"),r.a.createElement("div",{className:"category-img",id:"box4"}),r.a.createElement("h4",{className:"category-title"},"ELECTRONICS"))},S=a(12),w=(a(67),y(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.email,o=t.password;a.props.signup(n,r,o)},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(S.a)({},n,r))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.password;return r.a.createElement("div",{id:"signup-container"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("form",{onSubmit:this.handleFormSubmit,id:"signup-form"},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",value:a,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Signup",id:"signup-btn"})),r.a.createElement("p",null,"Already have account?"),r.a.createElement(i.b,{to:"/login",id:"login-link"}," Login"))}}]),t}(n.Component))),k=(a(68),y(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password;a.props.login(n,r)},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(S.a)({},n,r))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",{id:"login-container"},r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleFormSubmit,id:"login-form"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Login",id:"login-btn"})),r.a.createElement("p",null,"Don't have account?"),r.a.createElement(i.b,{to:"/signup",id:"signup-link"}," Signup"))}}]),t}(n.Component))),N=a(19);var _=y((function(e){var t=e.component,a=e.isLoggedIn,n=Object(N.a)(e,["component","isLoggedIn"]);return(r.a.createElement(P.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(P.a,{to:"/private"}):a?void 0:r.a.createElement(t,e)}})))}));var A=y((function(e){var t=e.component,a=e.isLoggedIn,n=Object(N.a)(e,["component","isLoggedIn"]);return r.a.createElement(P.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):a?void 0:r.a.createElement(P.a,{to:"/login"})}}))})),I=a(16),L=(a(69),y(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},orders:[],showForm:!1},a.toggleForm=function(){a.setState({showForm:!a.state.showForm})},a.editUser=function(e){e.preventDefault(),a.toggleForm();var t=e.target,n=t.username,r=t.email,o=t.password;h.a.post("/auth/edit",{username:n,email:r,password:o}).then((function(e){var t=e.data;a.setState({user:{userData:t}})})).catch((function(e){console.log(e)}))},a.pastOrders=function(){h.a.get("https://e-commerce-ih-m3.herokuapp.com/order/allOrders",{withCredentials:!0}).then((function(e){var t=[],n=[];e.data.forEach((function(e){e.isDone&&(e.orderProducts.map((function(e){t=[{productInfo:e.id}].concat(Object(I.a)(t))})),n=[{orderId:e._id,orderProducts:t}].concat(Object(I.a)(n)))})),a.setState({orders:n})})).catch((function(e){console.log(e)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.user,t=e.username,a=e.password,n=e.email;this.setState({user:{username:t,password:a,email:n}}),this.pastOrders()}},{key:"render",value:function(){return console.log("this.state",this.state),r.a.createElement(r.a.Fragment,null,this.state.showForm?r.a.createElement("div",{id:"edit-info-container"},r.a.createElement("p",null,"Edit your personal information"),r.a.createElement("form",{onSubmit:this.editUser,id:"edit-info-form"},r.a.createElement("input",{type:"text",id:"username",name:"username",placeholder:this.state.user.username}),r.a.createElement("input",{type:"text",id:"email",name:"email",placeholder:this.state.user.email}),r.a.createElement("input",{type:"text",id:"password",name:"password",placeholder:this.state.user.password}),r.a.createElement("button",{type:"submit",className:"edit-profile-btn",id:"submit-edit"},"Submit Edit")),r.a.createElement("form",{onSubmit:this.toggleForm},r.a.createElement("button",{id:"cancel-btn"},"Cancel"))):r.a.createElement("div",{id:"profile-page-container"},r.a.createElement("h1",null,this.state.user.username,"'s profile"),r.a.createElement("h4",null,this.state.user.email),r.a.createElement("p",null,"Edit your personal information"),r.a.createElement("form",{onSubmit:this.toggleForm},r.a.createElement("button",{type:"submit",className:"edit-profile-btn"},"edit")),r.a.createElement("h3",{className:"orders-title"},"Past Orders"),this.state.orders.map((function(e,t){return r.a.createElement("div",{className:"order-card"},r.a.createElement("h3",null,"Order number #",t+1," "),e.orderProducts.map((function(e){return r.a.createElement("p",null,e.productInfo.productName)})))}))))}}]),t}(n.Component))),D=a(18),x=a.n(D),B=(a(81),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],productsMatches:[],isLoading:!0},a.searchResult=function(e){h.a.get("https://e-commerce-ih-m3.herokuapp.com/product/allProducts").then((function(t){var n=a.productMatch(e,t.data);a.setState({products:t.data,productsMatches:n,isLoading:!1})})).catch((function(e){console.log(e)}))},a.productMatch=function(e,t){var a=[];return console.log(t),t.forEach((function(t){t.productName.includes(e)&&(a=[].concat(Object(I.a)(a),[t]))})),a},a.submitProdDetails=function(e){e.preventDefault();var t=e.target[0].value;a.props.history.push("/productDetails?productD=".concat(t))},a.addToCart=function(e){e.preventDefault(),console.log(e.target[0]);var t=e.target[0].value;h.a.post("https://e-commerce-ih-m3.herokuapp.com/order/create",{productId:t},{withCredentials:!0}).then((function(e){console.log("result",e)})).catch((function(e){console.log(e)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=x.a.parse(this.props.location.search).product;this.searchResult(e)}},{key:"componentDidUpdate",value:function(e,t){if(e.location.search!==this.props.location.search){var a=x.a.parse(this.props.location.search).product;this.searchResult(a)}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"page-container"},r.a.createElement("h1",{id:"search-page-title"},"Your Search Results"),r.a.createElement("h3",{id:"subtitle"},"Happy Shopping!"),this.state.isLoading?r.a.createElement("div",null,"loading..."):this.state.productsMatches.map((function(t){return r.a.createElement("div",{id:"container",key:t._id},r.a.createElement("form",{onSubmit:e.submitProdDetails},r.a.createElement("div",{id:"card-container"},r.a.createElement("img",{src:t.img_url,alt:"product"}),r.a.createElement("h3",null," ",t.productName," "),r.a.createElement("div",{className:"prod-price-row"},r.a.createElement("p",null,"Price: $",t.productPrice),r.a.createElement("button",{type:"submit",value:t.productName,className:"button1"},"Details")))),r.a.createElement("form",{onSubmit:e.addToCart,className:"add-product-form"},r.a.createElement("button",{type:"submit",value:t._id,className:"button1",id:"to-cart-btn"},"Add to cart")))})))}}]),t}(n.Component)),M=(a(82),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={orderProducts:[],orderId:""},a.handlePaymentBtn=function(e){a.orderIsDone(e),a.props.history.push("/paymentPage")},a.getOrderId=function(){h.a.get("https://e-commerce-ih-m3.herokuapp.com/order/allOrders",{withCredentials:!0}).then((function(e){console.log(e.data),e.data.map((function(e){if(!e.isDone){var t=[];e.orderProducts.map((function(e){t=[{productInfo:e}].concat(Object(I.a)(t))})),a.setState({orderId:e._id,orderProducts:t})}}))})).catch((function(e){console.log(e)}))},a.orderIsDone=function(e){e.preventDefault(),h.a.put("https://e-commerce-ih-m3.herokuapp.com/order/oneOrder",{orderId:a.state.orderId},{withCredentials:!0}).then((function(e){})).catch((function(e){console.log(e)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getOrderId()}},{key:"render",value:function(){return r.a.createElement("div",{id:"mycartpage-container"},r.a.createElement("h1",null,"MyCartPage"),r.a.createElement("h3",null," Current Orders"),0==!this.state.orderProducts.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,this.state.orderProducts.map((function(e){return r.a.createElement("div",{key:e.productInfo.id._id},r.a.createElement("p",null,e.productInfo.id.productName),r.a.createElement("p",null,e.productInfo.id.productPrice),r.a.createElement("img",{src:e.productInfo.id.img_url,alt:""}),r.a.createElement("p",null,e.productInfo.id.productPrice),r.a.createElement("p",null,e.productInfo.id.productPrice))}))),r.a.createElement("form",{onSubmit:this.handlePaymentBtn},r.a.createElement("button",{type:"submit"},"proceed to payment"))):r.a.createElement("p",null,"There is no Current Orders"))}}]),t}(n.Component)),F=Object(P.g)(y(M)),T=(a(83),y(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={productDetails:[]},a.oneProductDetails=function(e){h.a.post("https://e-commerce-ih-m3.herokuapp.com/product/searchPage",{productName:e},{withCredentials:!0}).then((function(e){a.setState({productDetails:e.data[0]})})).catch((function(e){console.log(e)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=x.a.parse(this.props.location.search).productD;this.oneProductDetails(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,this.state.productDetails.productName),r.a.createElement("img",{src:this.state.productDetails.img_url,id:"details-img",alt:""}),r.a.createElement("p",null,this.state.productDetails.description),r.a.createElement("p",null,this.state.productDetails.productPrice),r.a.createElement("form",{onSubmit:function(){return!0}},r.a.createElement("button",{type:"submit"},"add to cart"),r.a.createElement("input",{type:"number",min:"1",max:"30"})))}}]),t}(n.Component))),q=(a(84),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={productName:"",productsList:[]},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(S.a)({},n,r))},a.handleSubmitSearch=function(e){e.preventDefault();var t=a.state.productName;a.props.history.push("/searchPage?product=".concat(t))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{id:"searchbar-container",onSubmit:this.handleSubmitSearch},r.a.createElement("label",{className:"searchbar-label"},r.a.createElement("div",{id:"searchbar-title"}),r.a.createElement("input",{type:"text",name:"productName",value:this.state.value,onChange:this.handleChange})),r.a.createElement("button",{type:"submit"},r.a.createElement("img",{id:"search-mag-glass",src:"../.././public-images/search.svg",alt:"search"})))}}]),t}(r.a.Component)),U=y(Object(P.g)(q)),H=y(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={productName:"",productsList:[]},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(S.a)({},n,r))},a.handleSubmitSearch=function(e){e.preventDefault();var t=a.state.productName;a.props.history.push("/adminAddProducts?product=".concat(t))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"AdminPage"),r.a.createElement("h2",null,"Hello Admin!"),r.a.createElement(i.b,{to:"/adminAddProduct",className:"nav-btn",onClick:this.props.show},r.a.createElement("button",null,"Add Product")),r.a.createElement(i.b,{to:"/adminEditProduct",className:"nav-btn",onClick:this.props.show},r.a.createElement("button",null,"Edit Products")))}}]),t}(n.Component)),R=h.a.create({baseURL:"https://e-commerce-ih-m3.herokuapp.com/product",withCredentials:!0}),z=function(e){throw e},X=function(e){return R.post("/upload",e).then((function(e){return e.data})).catch(z)},G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={productName:"",productPrice:0,description:"",category:"",quantity:0,img_url:void 0},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.productName,r=t.productPrice,o=t.description,c=t.category,i=t.quantity,l=t.img_url;h.a.post("https://e-commerce-ih-m3.herokuapp.com/product/adminAddProduct",{productName:n,productPrice:r,description:o,category:c,quantity:i,img_url:l},{withCredentials:!0}).then((function(e){return console.log("result from handleFormSubmit",e),e})).catch((function(e){console.log(e)})),a.props.history.push("/AdminAddProduct")},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(S.a)({},n,r))},a.handleFileUpload=function(e){console.log("The file to be uploaded is: ",e.target.files[0]);var t=new FormData;t.append("imageUrl",e.target.files[0]),X(t).then((function(e){a.setState({img_url:e.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.productName,n=t.productPrice,o=t.description,c=t.category,l=t.quantity;return console.log(l),r.a.createElement("div",null,r.a.createElement("h1",null,"Add Product Page"),r.a.createElement("form",{onSubmit:this.handleFormSubmit,encType:"multipart/form-data"},r.a.createElement("label",null,"Product name:"),r.a.createElement("input",{type:"text",name:"productName",value:a,onChange:this.handleChange,placeholder:"Enter Product Name",autoComplete:"off"}),r.a.createElement("label",null,"Product price:"),r.a.createElement("input",{type:"number",name:"productPrice",value:n,onChange:this.handleChange,placeholder:"Enter Product Price",autoComplete:"off"}),r.a.createElement("label",null,"Quantity:"),r.a.createElement("input",{type:"number",name:"quantity",value:l,onChange:this.handleChange,placeholder:"Enter Product Quantity",autoComplete:"off"}),r.a.createElement("label",null,"Category:"),r.a.createElement("input",{list:"categories_options",name:"category",value:c,onChange:this.handleChange,placeholder:"select"}),r.a.createElement("datalist",{id:"categories_options"},r.a.createElement("option",{value:"Beauty"},"Beauty"),r.a.createElement("option",{value:"Electronics"},"Electronics"),r.a.createElement("option",{value:"Sports"},"Sports"),r.a.createElement("option",{value:"House"},"House")),r.a.createElement("label",null,"Product description:"),r.a.createElement("input",{type:"textarea",name:"description",value:o,onChange:this.handleChange,autoComplete:"off"}),r.a.createElement("label",null,"Upload Photo JPG or PNG format only:"),r.a.createElement("input",{type:"file",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("button",{type:"submit"},"Create Product!")),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/adminEditProduct",className:"nav-btn"},r.a.createElement("button",null,"Go to Edit Products")),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/adminPage",className:"nav-btn",onClick:this.props.show},r.a.createElement("button",null,"Back to Admin Page")))}}]),t}(r.a.Component),Q=y(Object(P.g)(G)),Y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Edit Product Page (Admin)"),r.a.createElement("form",{action:"/adminEditProduct",method:"post",enctype:"multipart/form-data"},r.a.createElement("label",{for:""},"Product name:"),r.a.createElement("input",{type:"text",name:"productName",required:!0,placeholder:"Enter Product Name",autocomplete:"off"}),r.a.createElement("label",{for:""},"Category:"),r.a.createElement("input",{list:"type_options",name:"category",required:!0,placeholder:"select"}),r.a.createElement("datalist",{id:"categories_options"},r.a.createElement("option",{value:"Beauty"},"Beauty"),r.a.createElement("option",{value:"Electronics"},"Electronics"),r.a.createElement("option",{value:"Sports"},"Sports"),r.a.createElement("option",{value:"House"},"House")),r.a.createElement("label",{for:""},"Product description:"),r.a.createElement("input",{type:"textarea",name:"description",autocomplete:"off"}),r.a.createElement("label",{for:"photo"},"Upload Photo JPG or PNG format only:"),r.a.createElement("input",{type:"file",name:"photo",autocomplete:"off"}),r.a.createElement("button",{type:"submit"},"Edit Product!")),r.a.createElement("form",null,r.a.createElement("button",{type:"submit"},"Delete Product!")),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/adminAddProduct",className:"nav-btn",onClick:this.props.show},r.a.createElement("button",null,"Go to Add Products")),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/adminPage",className:"nav-btn",onClick:this.props.show},r.a.createElement("button",null,"Back to Admin Page")))}}]),t}(r.a.Component),J=y(Object(P.g)(Y)),K=y(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({user:this.props.user})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.user?this.state.user.isAdmin?r.a.createElement(H,null):r.a.createElement(C,null):null)}}]),t}(n.Component)),V=y(function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Dear costumer"),r.a.createElement("p",null,"Your payment has been accepted "),r.a.createElement("p",null,"thanks for you purchase"))}}]),t}(n.Component)),W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={products:O,filterProductList:O,showSearchBar:!0},a.hideSearchBar=function(){a.setState({showSearchBar:!1})},a.showSearchBar=function(){a.setState({showSearchBar:!0})},a.searchResult=function(e){h.a.post("http://localhost:5000/product/searchPage",{productName:e},{withCredentials:!0}).then((function(e){return e})).catch((function(e){console.log(e)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(j,{hide:this.hideSearchBar,show:this.showSearchBar,className:"nav-bar"}),this.state.showSearchBar?r.a.createElement(U,{id:"search-bar-in-app",productByName:this.searchResult}):console.log("This is searchResult function on App."),r.a.createElement(P.d,null,r.a.createElement(P.b,{exact:!0,path:"/",component:C}),r.a.createElement(P.b,{exact:!0,path:"/searchPage",component:B}),r.a.createElement(P.b,{exact:!0,path:"/productDetails",component:T}),r.a.createElement(_,{exact:!0,path:"/signup",component:w}),r.a.createElement(_,{exact:!0,path:"/login",component:k}),r.a.createElement(A,{exact:!0,path:"/profilePage",component:L}),r.a.createElement(A,{exact:!0,path:"/myCartPage",component:F}),r.a.createElement(A,{exact:!0,path:"/private",component:K}),r.a.createElement(A,{exact:!0,path:"/paymentPage",component:V}),r.a.createElement(A,{exact:!0,path:"/adminPage",component:H}),r.a.createElement(A,{exact:!0,path:"/adminAddProduct",component:Q}),r.a.createElement(A,{exact:!0,path:"/adminEditProduct",component:J})))}}]),t}(n.Component);c.a.render(r.a.createElement(i.a,null,r.a.createElement(v,null,r.a.createElement(W,null))),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.0eaa604d.chunk.js.map