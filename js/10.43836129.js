(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"7e2f":function(a,e,o){"use strict";o.r(e);var t=function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("div",[o("q-item-label",{staticClass:"text-h5",staticStyle:{}},[a._v("\n    Endereço\n  ")]),o("div",{staticClass:"row q-mt-lg"},[o("div",{staticClass:"col-12 col-sm"},[o("q-input",{staticClass:"q-mr-lg",attrs:{label:"CEP",mask:"#####-###",pattern:"[a-zA-Z0-9]+"},on:{keyup:function(e){return a.searchCep()}},model:{value:a.cadastroEndereco.cep,callback:function(e){a.$set(a.cadastroEndereco,"cep",e)},expression:"cadastroEndereco.cep"}})],1),o("div",{staticClass:"col-12 col-sm"},[o("q-input",{attrs:{label:"UF"},model:{value:a.cadastroEndereco.uf,callback:function(e){a.$set(a.cadastroEndereco,"uf",e)},expression:"cadastroEndereco.uf"}})],1)]),o("div",{staticClass:"row q-mt-lg"},[o("div",{staticClass:"col-12 col-sm"},[o("q-input",{staticClass:"q-mr-lg",attrs:{label:"Cidade"},model:{value:a.cadastroEndereco.cidade,callback:function(e){a.$set(a.cadastroEndereco,"cidade",e)},expression:"cadastroEndereco.cidade"}})],1),o("div",{staticClass:"col-12 col-sm"},[o("q-input",{attrs:{label:"Bairro"},model:{value:a.cadastroEndereco.bairro,callback:function(e){a.$set(a.cadastroEndereco,"bairro",e)},expression:"cadastroEndereco.bairro"}})],1)]),o("div",{staticClass:"row q-mt-lg"},[o("div",{staticClass:"col-12 col-sm"},[o("q-input",{staticClass:"q-mr-lg",attrs:{label:"Rua"},model:{value:a.cadastroEndereco.rua,callback:function(e){a.$set(a.cadastroEndereco,"rua",e)},expression:"cadastroEndereco.rua"}})],1),o("div",{staticClass:"col-12 col-sm"},[o("q-input",{attrs:{label:"Número"},model:{value:a.cadastroEndereco.numero,callback:function(e){a.$set(a.cadastroEndereco,"numero",e)},expression:"cadastroEndereco.numero"}})],1)]),o("div",{staticClass:"row q-mt-lg"},[o("div",{staticClass:"col-12 col-sm"},[o("q-input",{staticClass:"q-mr-lg",attrs:{label:"Complemento"},model:{value:a.cadastroEndereco.complemento,callback:function(e){a.$set(a.cadastroEndereco,"complemento",e)},expression:"cadastroEndereco.complemento"}})],1),o("div",{staticClass:"col-12 col-sm"},[o("q-input",{attrs:{label:"Observações"},model:{value:a.cadastroEndereco.observacoes,callback:function(e){a.$set(a.cadastroEndereco,"observacoes",e)},expression:"cadastroEndereco.observacoes"}})],1)]),o("div",{staticClass:"col q-mt-xl"},[o("q-btn",{attrs:{color:"black",label:"Salvar"},on:{click:function(e){return a.confirmaSalvar()}}})],1),o("q-dialog",{attrs:{persistent:""},model:{value:a.confirm,callback:function(e){a.confirm=e},expression:"confirm"}},[o("q-card",[o("q-card-section",{staticClass:"row items-center"},[o("q-avatar",{attrs:{icon:"announcement",color:"primary","text-color":"white"}}),o("span",{staticClass:"q-ml-sm"},[a._v("Deseja salvar os dados?")])],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Sim",color:"primary"},on:{click:function(e){return a.salvar()}}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Não",color:"primary"}})],1)],1)],1)],1)},c=[],s=o("bc3a"),r=o.n(s);const n={rua:"",numero:"",bairro:"",cidade:"",uf:"",cep:"",complemento:"",observacoes:""};var l={name:"endereco",data(){return{cadastroEndereco:n,baseUrl:"https://power-bag-back.herokuapp.com",token:localStorage.getItem("token"),clienteId:localStorage.getItem("clienteId"),confirm:!1}},mounted(){this.buscarDados()},methods:{confirmaSalvar(){this.confirm=!0},salvar(){let a=localStorage.getItem("token");r()({method:"POST",url:`${this.baseUrl}/endereco`,headers:{Authorization:`${a}`},data:{rua:this.cadastroEndereco.rua,numero:this.cadastroEndereco.numero,bairro:this.cadastroEndereco.bairro,cidade:this.cadastroEndereco.cidade,uf:this.cadastroEndereco.uf,cep:this.cadastroEndereco.cep,complemento:this.cadastroEndereco.complemento,observacoes:this.cadastroEndereco.observacoes}}),setTimeout((()=>{this.$q.dialog({title:"Parabéns!",message:"Dados salvo com sucesso!"}),this.buscarDados()}),500)},async buscarDados(){const a=await r()({method:"GET",url:`${this.baseUrl}/endereco`,headers:{Authorization:`${this.token}`}}),e=Object.assign(this.cadastroEndereco,a.data);this.cadastroEndereco=e},async searchCep(){if(9===this.cadastroEndereco.cep.length)try{const{data:a}=await r.a.get(`https://viacep.com.br/ws/${this.cadastroEndereco.cep}/json/`);this.cadastroEndereco=a,this.cadastroEndereco.uf=a.uf,this.cadastroEndereco.cidade=a.localidade,this.cadastroEndereco.bairro=a.bairro,this.cadastroEndereco.rua=a.logradouro,this.cadastroEndereco.complemento=a.complemento}catch(a){console.log(a)}}}},d=l,i=o("2877"),m=o("0170"),u=o("27f9"),p=o("9c40"),b=o("24e8"),v=o("f09f"),E=o("a370"),h=o("cb32"),f=o("4b7e"),C=o("7f67"),q=o("eebe"),g=o.n(q),k=Object(i["a"])(d,t,c,!1,null,null,null);e["default"]=k.exports;g()(k,"components",{QItemLabel:m["a"],QInput:u["a"],QBtn:p["a"],QDialog:b["a"],QCard:v["a"],QCardSection:E["a"],QAvatar:h["a"],QCardActions:f["a"]}),g()(k,"directives",{ClosePopup:C["a"]})}}]);