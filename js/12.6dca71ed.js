(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{f810:function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",[e("div",{staticClass:"col q-mb-md"},[e("q-btn",{attrs:{color:"green",label:"Solicitar nova Bag"},on:{click:function(t){return a.confirmarPedido()}}})],1)]),e("div",[e("q-table",{staticClass:"col",attrs:{dense:"",data:a.bag,columns:a.columns,"row-key":"id","rows-per-page-options":[10]},scopedSlots:a._u([{key:"body-cell-action",fn:function(t){return[e("q-td",{attrs:{props:t}},[e("div",["Recebido"!==t.row.status?e("q-btn",{attrs:{icon:"published_with_changes",color:"grey",size:"sm",dense:"",disable:""}}):e("q-btn",{attrs:{icon:"published_with_changes",color:"info",size:"sm",dense:""},on:{click:function(e){return a.abrirModalAlterarStatus(t.row.id)}}},[e("q-tooltip",{attrs:{anchor:"center left",self:"center right"}},[a._v("\n                Alterar status da minha Bag\n              ")])],1)],1)])]}},{key:"body-cell-feedback",fn:function(t){return[e("q-td",{attrs:{props:t}},[e("div",["Compra total"===t.row.status||"Finalizado"===t.row.status?e("q-btn",{attrs:{icon:"chat",color:"info",size:"sm",dense:""},on:{click:function(e){return a.abrirModalFeedback(t.row.observacoes)}}},[e("q-tooltip",{attrs:{anchor:"center left",self:"center right"}},[a._v("\n                  Deixe o seu feedback do atendimento\n                ")])],1):e("q-btn",{attrs:{icon:"chat",color:"grey",size:"sm",dense:"",disable:""}})],1)])]}}])})],1),e("q-dialog",{attrs:{persistent:""},model:{value:a.confirm,callback:function(t){a.confirm=t},expression:"confirm"}},[e("q-card",[e("q-card-section",{staticClass:"row items-center"},[e("q-avatar",{attrs:{icon:"announcement",color:"primary","text-color":"white"}}),e("span",{staticClass:"q-ml-sm"},[a._v("Deseja continuar com a solicitação da Bag?\n        ")])],1),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Sim",color:"primary"},on:{click:function(t){return a.solicitarBag()}}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Não",color:"primary"}})],1)],1)],1),e("q-dialog",{model:{value:a.modalAlterarStatus,callback:function(t){a.modalAlterarStatus=t},expression:"modalAlterarStatus"}},[e("q-card",{staticStyle:{width:"600px","max-width":"80vw"}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[a._v("O que vai fazer com a sua bag?")])]),e("q-card-section",{staticClass:"q-pt-none"},[e("li",[a._v("A opção "),e("u",[e("b",[a._v("Compra Total")])]),a._v(" você irá ficar com todos as peças de roupa da sua bag (inclusive a bag). O valor cobrado será o que já foi debitado do seu cartão.")]),e("br"),e("br"),e("li",[a._v("A opção "),e("u",[e("b",[a._v("Solicitado a Retirada")])]),a._v(", você já escolheu quais peças que irá ficar da Bag e precisa solicar a retirada das restantes. Após alterar o status iremos recolher a Bag com os itens restantes, assim será realizado o estorno do valor correspondente. ")]),e("p")]),e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"q-gutter-y-md column",staticStyle:{"max-width":"500px"}},[e("q-select",{attrs:{clearable:"",filled:"",color:"purple-12",options:a.options,label:"Escolha status"},model:{value:a.novoStatusBag,callback:function(t){a.novoStatusBag=t},expression:"novoStatusBag"}})],1)]),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Salvar",color:"primary"},on:{click:function(t){return a.alterarStatusBag()}}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"primary"}})],1)],1)],1),e("q-dialog",{model:{value:a.modalFeedback,callback:function(t){a.modalFeedback=t},expression:"modalFeedback"}},[e("q-card",[e("q-card-section",[e("div",{staticClass:"text-h6"},[a._v("Deixe um Feedback para o nosso atendimento")])]),e("div",{staticClass:"q-pa-md"},[e("q-input",{attrs:{filled:"",clearable:"",type:"textarea",color:"red-12",label:"Seu feedback"},model:{value:a.textFeedback,callback:function(t){a.textFeedback=t},expression:"textFeedback"}})],1),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Salvar",color:"primary"},on:{click:function(t){return a.feedbackBag()}}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"primary"}})],1)],1)],1)],1)},s=[],r=(e("5319"),e("bc3a")),i=e.n(r),l={name:"minhasBags",data:()=>({token:localStorage.getItem("token"),baseUrl:"https://power-bag-back.herokuapp.com",confirm:!1,columns:[{name:"createdAt",label:"Data",field:"createdAt",sortable:!0,type:"date",align:"center",width:"auto",headerClasses:"bg-primary text-white text-uppercase",format:a=>`${a.replace(/(\d*)-(\d*)-(\d*).*/,"$3/$2/$1")}`},{name:"status",label:"Status",field:"status",align:"center",width:"auto",headerClasses:"bg-primary text-white text-uppercase text-bold"},{name:"valor",label:"Valor",field:"valor",align:"center",width:"auto",headerClasses:"bg-primary text-white text-uppercase text-bold",format:a=>"R$ "+a.toString().replace(".",",")},{name:"action",label:"Alterar Status da BAG",align:"center",width:"auto",headerClasses:"bg-primary text-white text-uppercase text-bold "},{name:"feedback",label:"Feedback",align:"center",width:"auto",headerClasses:"bg-primary text-white text-uppercase text-bold "}],bag:[],model:null,options:["Compra total","Solicitado a retirada"],selected:[],modalCartao:!1,modalAlterarStatus:!1,modalFeedback:!1,idBagAtual:null,novoStatusBag:null,textFeedback:""}),computed:{buttonColor(){return this.$q.screen.lt.md?"primary":"secondary"}},mounted(){this.buscarBags(),this.confirmarUsuarioAdmin()},methods:{confirmarPedido(){this.confirm=!0},async solicitarBag(){const a=await i()({method:"GET",url:`${this.baseUrl}/cliente/validate`,headers:{Authorization:`${this.token}`}}),t=a.data.reason;return"solicitacao em aberto"===t?(this.$q.dialog({title:"Atenção!",message:"Para solicitar nova Bag é necessário é necessário aguardar a finalização do último pedido"}),!1):"dados cadastrais"===t?(this.$q.dialog({title:"Atenção!",message:"Para solicitar a Bag é necessário ter todos os cadastros preenchidos"}),!1):(i()({method:"POST",url:`${this.baseUrl}/bag`,headers:{Authorization:`${this.token}`}}).then((a=>{localStorage.setItem("bag",JSON.stringify(a.data))})),void setTimeout((()=>{this.$q.dialog({title:"Parabéns!!!",message:"Sua bag foi solicitada com sucesso!"}),this.buscarBags()}),500))},async buscarBags(){const a=await i()({method:"GET",url:`${this.baseUrl}/bag/detail`,headers:{Authorization:`${this.token}`}});this.bag=Object.assign(a.data)},abrirModalAlterarStatus(a){this.modalAlterarStatus=!0,this.idBagAtual=a},alterarStatusBag(){i()({method:"PUT",url:`${this.baseUrl}/bag`,headers:{Authorization:`${this.token}`},data:{status:this.novoStatusBag,id_bag:this.idBagAtual}}),setTimeout((()=>{this.$q.dialog({title:"Atenção!",message:"O status da bag foi alterado com sucesso!"}),this.buscarBags()}),500)},abrirModalFeedback(a){console.log(a),this.modalFeedback=!0,this.textFeedback=a},feedbackBag(){i()({method:"PUT",url:`${this.baseUrl}/bag`,headers:{Authorization:`${this.token}`},data:{observacoes:this.textFeedback,id_bag:this.idBagAtual}}),setTimeout((()=>{this.$q.dialog({title:"Atenção!",message:"O seu feedback foi inserido com sucesso!"}),this.buscarBags()}),500)},confirmarUsuarioAdmin(){let a=localStorage.getItem("admin");"true"===a&&(localStorage.clear(),this.$router.push({name:"home"}))}}},c=l,n=e("2877"),d=e("9c40"),u=e("eaac"),b=e("db86"),m=e("05c0"),p=e("24e8"),h=e("f09f"),g=e("a370"),f=e("cb32"),v=e("4b7e"),q=e("ddd8"),k=e("27f9"),w=e("7f67"),x=e("eebe"),S=e.n(x),A=Object(n["a"])(c,o,s,!1,null,null,null);t["default"]=A.exports;S()(A,"components",{QBtn:d["a"],QTable:u["a"],QTd:b["a"],QTooltip:m["a"],QDialog:p["a"],QCard:h["a"],QCardSection:g["a"],QAvatar:f["a"],QCardActions:v["a"],QSelect:q["a"],QInput:k["a"]}),S()(A,"directives",{ClosePopup:w["a"]})}}]);