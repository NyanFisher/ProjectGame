(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b423d4b4"],{"2fef":function(s,r,e){"use strict";e.r(r);var a=function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("div",{staticClass:"container auth"},[e("div",{staticClass:"log-reg"},[e("nav",{staticClass:"log-reg-nav"},[e("ul",{staticClass:"log-reg-ul"},[e("li",{staticClass:"log-reg-li"},[e("h2",{staticClass:"log-reg-h2",class:{deactive:!s.login},on:{click:function(r){return s.swap("signin")}}},[s._v("Войти")])]),e("li",{staticClass:"log-reg-li"},[e("h2",{staticClass:"log-reg-h2",class:{deactive:s.login},on:{click:function(r){return s.swap("signup")}}},[s._v("Регистрация")])])])]),e("SignIn",{directives:[{name:"show",rawName:"v-show",value:s.login,expression:"login"}]}),e("SignUp",{directives:[{name:"show",rawName:"v-show",value:!s.login,expression:"!login"}]})],1)])},t=[],i=function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("form",{staticClass:"form",attrs:{method:"post"},on:{submit:function(r){return r.preventDefault(),s.on_submit(r)}}},[e("label",{staticClass:"form-label visually-hidden",attrs:{for:"email"}},[s._v("Введите email")]),e("div",{staticClass:"form-email-password"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:s.email,expression:"email",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"email",name:"email",placeholder:"Введите email",required:""},domProps:{value:s.email},on:{input:function(r){r.target.composing||(s.email=r.target.value.trim())},blur:function(r){return s.$forceUpdate()}}}),e("span",{staticClass:"form-icon email"})]),e("p",{directives:[{name:"show",rawName:"v-show",value:s.error_email,expression:"error_email"}],staticClass:"input-error"},[s._v(s._s(s.error_email))]),e("label",{staticClass:"form-label visually-hidden",attrs:{for:"password"}},[s._v("Введите пароль")]),e("div",{staticClass:"form-email-password"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:s.password,expression:"password",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"password",name:"password",placeholder:"Введите пароль",required:""},domProps:{value:s.password},on:{input:function(r){r.target.composing||(s.password=r.target.value.trim())},blur:function(r){return s.$forceUpdate()}}}),e("span",{staticClass:"form-icon password"})]),e("p",{directives:[{name:"show",rawName:"v-show",value:s.error_password,expression:"error_password"}],staticClass:"input-error"},[s._v(s._s(s.error_password))]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.value_button,expression:"value_button"}],staticClass:"form-button",attrs:{type:"submit",name:"submit"},domProps:{value:s.value_button},on:{input:function(r){r.target.composing||(s.value_button=r.target.value)}}})])},o=[],n=e("5530"),l=e("2f62");e("ac1f"),e("466d");function u(s,r){if("email"==r){if(s){var e=s.match(/^[0-9a-z-._]+@[0-9a-z-]{2,}\.[a-z]{2,}$/i);if(e)return!0}return!1}if("password"==r){if(s){var a=s.match(/(?=.*[0-9])(?=.*)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z*]{6,}/g);if(a)return!0}return!1}}var m={name:"SignIn",data:function(){return{email:"",password:"",error_email:null,error_password:null}},methods:Object(n["a"])({},Object(l["b"])(["login_user","change_status"]),{check_form:function(){return u(this.email,"email")?this.error_email=null:(this.error_email="Почта указана неверно. Пример: info@mail.ru",this.email=""),this.password?this.error_password=null:(this.error_password="Введите пароль",this.password=""),!this.error_email&&!this.error_password},on_submit:function(){var s=this;if(this.check_form()){var r={email:this.email,password:this.password};this.login_user(r).then((function(){console.log("LOG"),s.change_status("OK"),s.$router.push("/new-game")})).catch((function(r){s.change_status(r.message),s.password="",s.error_password="Неверный пароль"}))}return!1}}),computed:Object(n["a"])({},Object(l["c"])(["loading"]),{value_button:function(){return this.loading?"Загрузка":"Войти"}})},p=m,c=(e("afc2"),e("2877")),d=Object(c["a"])(p,i,o,!1,null,null,null),f=d.exports,v=function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("form",{staticClass:"form",attrs:{method:"post"},on:{submit:function(r){return r.preventDefault(),s.on_submit(r)}}},[e("label",{staticClass:"form-label visually-hidden",attrs:{for:"email"}},[s._v("Введите email")]),e("div",{staticClass:"form-email-password"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:s.email,expression:"email",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"email",name:"email",placeholder:"Введите email",required:""},domProps:{value:s.email},on:{input:function(r){r.target.composing||(s.email=r.target.value.trim())},blur:function(r){return s.$forceUpdate()}}}),e("span",{staticClass:"form-icon email"})]),e("p",{directives:[{name:"show",rawName:"v-show",value:s.error_email,expression:"error_email"}],staticClass:"input-error"},[s._v(s._s(s.error_email))]),e("label",{staticClass:"form-label visually-hidden",attrs:{for:"password"}},[s._v("Введите пароль")]),e("div",{staticClass:"form-email-password"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:s.password,expression:"password",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"password",name:"password",placeholder:"Введите пароль",required:""},domProps:{value:s.password},on:{input:function(r){r.target.composing||(s.password=r.target.value.trim())},blur:function(r){return s.$forceUpdate()}}}),e("span",{staticClass:"form-icon password"})]),e("p",{directives:[{name:"show",rawName:"v-show",value:s.error_password,expression:"error_password"}],staticClass:"input-error"},[s._v(s._s(s.error_password))]),e("label",{staticClass:"form-label visually-hidden",attrs:{for:"password"}},[s._v("Введите пароль")]),e("div",{staticClass:"form-email-password"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:s.repeat_password,expression:"repeat_password",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{type:"password",name:"password",placeholder:"Подтвердите пароль",required:""},domProps:{value:s.repeat_password},on:{input:function(r){r.target.composing||(s.repeat_password=r.target.value.trim())},blur:function(r){return s.$forceUpdate()}}}),e("span",{staticClass:"form-icon password"})]),e("p",{directives:[{name:"show",rawName:"v-show",value:s.error_repeat_password,expression:"error_repeat_password"}],staticClass:"input-error"},[s._v(s._s(s.error_repeat_password))]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.value_button,expression:"value_button"}],staticClass:"form-button",attrs:{type:"submit",name:"submit"},domProps:{value:s.value_button},on:{input:function(r){r.target.composing||(s.value_button=r.target.value)}}})])},w=[],h={name:"SignUp",data:function(){return{email:"",password:"",repeat_password:"",error_email:null,error_password:null,error_repeat_password:null}},methods:Object(n["a"])({},Object(l["b"])(["change_status","register_user"]),{check_form:function(){return u(this.email,"email")?this.error_email=null:(this.error_email="Почта указана неверно. Пример: info@mail.ru",this.email=""),u(this.password,"password")?this.error_password=null:(this.error_password="Пароль должен состоять более чем из 6 символовов. В котором будут использованы символы латиницы, цифры и заглавные буквы",this.password=""),this.password!=this.repeat_password?(this.error_repeat_password="Пароли должны совпадать",this.password="",this.repeat_password=""):this.error_repeat_password=null,!(this.error_email||this.error_password||this.error_repeat_password)},on_submit:function(){var s=this;if(this.check_form()){var r={email:this.email,password:this.password};this.register_user(r).then((function(){console.log("REG"),s.change_status("OK"),s.$router.push("/new-game")})).catch((function(r){s.change_status(r.message)}))}return!1}}),computed:Object(n["a"])({},Object(l["c"])(["loading"]),{value_button:function(){return this.loading?"Загрузка":"Зарегистрироваться"}})},_=h,g=(e("7a48"),Object(c["a"])(_,v,w,!1,null,"eb537d3a",null)),b=g.exports,C={name:"Auth",data:function(){return{login:!0}},methods:{swap:function(s){"signin"==s&&0==this.login&&(this.login=!this.login),"signup"==s&&1==this.login&&(this.login=!this.login)}},components:{SignIn:f,SignUp:b}},x=C,N=(e("4418"),Object(c["a"])(x,a,t,!1,null,"52d9714a",null));r["default"]=N.exports},"3d0c":function(s,r,e){},"3fe9":function(s,r,e){},4418:function(s,r,e){"use strict";var a=e("3d0c"),t=e.n(a);t.a},"7a48":function(s,r,e){"use strict";var a=e("3fe9"),t=e.n(a);t.a},afc2:function(s,r,e){"use strict";var a=e("b31b"),t=e.n(a);t.a},b31b:function(s,r,e){}}]);
//# sourceMappingURL=chunk-b423d4b4.8e6d4c4e.js.map