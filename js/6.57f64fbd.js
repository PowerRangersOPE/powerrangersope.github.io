(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{3177:function(t,a,e){"use strict";e("6541")},6541:function(t,a,e){},bb6f:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"lHh Lpr lFf"}},[e("div",{staticClass:"col"},[e("div",{staticClass:"row q-mt-xl"}),e("div",{staticClass:"row-10"},[e("div",{staticClass:"text-center text-h4"},[t._v("\n        O Melhor da moda infantil na sua casa\n      ")]),e("div",[e("q-page-container",[e("q-page",{staticClass:"row justify-center items-center q-mt-xl",staticStyle:{"min-height":"300px"}},[e("div",{staticClass:"column"},[e("div",{staticClass:"row"},[e("q-card",{staticClass:"shadow-5",staticStyle:{width:"350px",height:"450px"},attrs:{square:""}},[e("q-card-section",{staticClass:"bg-deep-purple-7"},[e("h4",{staticClass:"text-h5 text-white q-my-md"},[t._v("\n                      Acesse a sua conta\n                    ")])]),e("q-card-section",[e("q-form",{staticClass:"q-px-sm q-pt-xl q-pb-lg"},[e("q-input",{ref:"email",attrs:{square:"",clearable:"",type:"email",label:"E-mail",rules:[this.required,this.isEmail,this.short]},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),e("q-input",{ref:"password",attrs:{square:"",clearable:"",type:"password",label:"Senha",rules:[this.required,this.short]},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"lock"}})]},proxy:!0}]),model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1)],1),e("q-card-actions",{staticClass:"q-px-lg"},[e("q-btn",{staticClass:"full-width text-white",attrs:{unelevated:"",size:"lg",color:"purple-4",label:"Login"},on:{click:t.login}})],1)],1)],1)])])],1)],1)])])])},o=[],r=e("d6f4"),i=e("bc3a"),n=e.n(i),l={name:"Login",components:{ComponentFooter:r["a"]},data(){return{email:"",password:"",admin:"",baseUrl:"https://power-bag.herokuapp.com"}},methods:{required(t){return t&&t.length>0||"O campo deve ser preenchido"},short(t){return t&&t.length>3||"Mínimo 4 caracters"},isEmail(t){const a=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return a.test(t)||"Por favor digite e-mail válido"},async login(){if(this.$refs.email.validate(),this.$refs.password.validate(),this.$refs.email.hasError||this.$refs.password.hasError)return this.formHasError=!0,void this.$q.dialog({title:"Atenção",message:"Login ou Senha preenchido incorretamente."});try{const t=await n()({method:"POST",url:"https://power-bag.herokuapp.com/login",data:{email:this.email,senha:this.password}});localStorage.setItem("token",t.data.token),localStorage.setItem("clienteId",t.data.clienteId);let a=localStorage.getItem("clienteId"),e=localStorage.getItem("token");const s=await n.a.get(`${this.baseUrl}/cliente/${a}`,{headers:{Authorization:`${e}`}});localStorage.setItem("nome",s.data.nome),localStorage.setItem("email",s.data.email),localStorage.setItem("admin",s.data.adm);const o=s.data.adm;!0===o?setTimeout((()=>{this.$router.push({name:"lista-pedidos"})}),500):setTimeout((()=>{this.$router.push({name:"minhas-bags"})}),500)}catch(t){"Senha didnt match"===t.response.data.error&&(console.log(t.response.data.error),this.$q.dialog({title:"Atenção",message:"Login ou Senha incorreta. Tente novamente."}),this.email="",this.password=""),"Cliente not found"===t.response.data.error&&(console.log(t.response.data.error),this.$q.dialog({title:"Atenção",message:"Login não localizado. Faça seu cadastro!"}),this.email="",this.password="")}}}},c=l,d=e("2877"),m=e("4d5a"),p=e("09e3"),h=e("9989"),u=e("f09f"),g=e("a370"),f=e("0378"),q=e("27f9"),w=e("0016"),b=e("4b7e"),v=e("9c40"),C=e("eebe"),x=e.n(C),S=Object(d["a"])(c,s,o,!1,null,null,null);a["default"]=S.exports;x()(S,"components",{QLayout:m["a"],QPageContainer:p["a"],QPage:h["a"],QCard:u["a"],QCardSection:g["a"],QForm:f["a"],QInput:q["a"],QIcon:w["a"],QCardActions:b["a"],QBtn:v["a"]})},d6f4:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-footer",[e("q-toolbar",{},[e("q-toolbar-title",{},[t._v("PowerBag")]),e("p",{staticClass:"text-caption absolute-center"},[t._v("\n      Todos Direitos Reservados, Bags PowerBag\n    ")]),e("div",{staticClass:"q-mt-md q-mr-md"},[e("div",{staticClass:"q-gutter-md"},[e("a",{attrs:{href:"tel:+5511942692333"}},[e("q-icon",{attrs:{size:"md",name:"call"}})],1),e("a",{attrs:{href:"mailto:powerbag.contato@hotmail.com"}},[e("q-icon",{attrs:{size:"md",name:"email"}})],1),e("a",{attrs:{href:"https://www.instagram.com/powerbagcontato/",target:"_blank"}},[e("q-icon",{attrs:{size:"md",name:"fab fa-instagram"}})],1)])])],1)],1)},o=[],r={name:"ComponentFooter",data(){return{}}},i=r,n=(e("3177"),e("2877")),l=e("7ff0"),c=e("65c6"),d=e("6ac5"),m=e("0016"),p=e("eebe"),h=e.n(p),u=Object(n["a"])(i,s,o,!1,null,"111c1339",null);a["a"]=u.exports;h()(u,"components",{QFooter:l["a"],QToolbar:c["a"],QToolbarTitle:d["a"],QIcon:m["a"]})}}]);