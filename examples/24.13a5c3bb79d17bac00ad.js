(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"7TFi":function(n,l,e){"use strict";e.r(l);var t,u=e("LoAr"),i=function(){return function(){}}(),o=e("C9Ky"),r=e("O/wF"),a=e("8dL6"),d=e("IfiR"),s=e("WT9V");!function(n){n.Math="Math",n.Name="Name"}(t||(t={}));var c=function(){function n(l,e,u){this.id=l,this.question=e,this.answer=u,this.formType=t.Math,this.templateDescription=n.templateDescription}return n.templateDescription="Math question",n}(),p=function(){function n(l){this.id=l,this.formType=t.Name,this.templateDescription=n.templateDescription}return n.templateDescription="Name and student ID",n}(),f=function(){function n(){this.edit=new u.EventEmitter}return n.prototype.ngOnChanges=function(){this.form=new d.h({question:new d.f(this.data.question),answer:new d.f(this.data.answer)})},n.prototype.onSubmit=function(){this.edit.emit(new c(this.data.id,this.form.get("question").value,this.form.get("answer").value))},n}(),g=u["\u0275crt"]({encapsulation:2,styles:[],data:{}});function v(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,0,"input",[["type","submit"],["value","Save question"]],null,null,null,null,null))],null,null)}function m(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,26,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var t=!0,i=n.component;return"submit"===l&&(t=!1!==u["\u0275nov"](n,2).onSubmit(e)&&t),"reset"===l&&(t=!1!==u["\u0275nov"](n,2).onReset()&&t),"ngSubmit"===l&&(t=!1!==i.onSubmit()&&t),t},null,null)),u["\u0275did"](1,16384,null,0,d.t,[],null,null),u["\u0275did"](2,540672,null,0,d.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u["\u0275prd"](2048,null,d.c,null,[d.i]),u["\u0275did"](4,16384,null,0,d.n,[[4,d.c]],null,null),(n()(),u["\u0275eld"](5,0,null,null,8,"div",[],null,null,null,null,null)),(n()(),u["\u0275eld"](6,0,null,null,7,"label",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,[" Question: "])),(n()(),u["\u0275eld"](8,0,null,null,5,"input",[["class","title"],["formControlName","question"],["placeholder","Add a card"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,9)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,9).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,9)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,9)._compositionEnd(e.target.value)&&t),t},null,null)),u["\u0275did"](9,16384,null,0,d.d,[u.Renderer2,u.ElementRef,[2,d.a]],null,null),u["\u0275prd"](1024,null,d.k,function(n){return[n]},[d.d]),u["\u0275did"](11,671744,null,0,d.g,[[3,d.c],[8,null],[8,null],[6,d.k],[2,d.v]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,d.l,null,[d.g]),u["\u0275did"](13,16384,null,0,d.m,[[4,d.l]],null,null),(n()(),u["\u0275eld"](14,0,null,null,9,"div",[],null,null,null,null,null)),(n()(),u["\u0275eld"](15,0,null,null,8,"label",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,[" Answer: "])),(n()(),u["\u0275eld"](17,0,null,null,6,"input",[["class","amount"],["formControlName","answer"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,e){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,18)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,18).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,18)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,18)._compositionEnd(e.target.value)&&t),"change"===l&&(t=!1!==u["\u0275nov"](n,19).onChange(e.target.value)&&t),"input"===l&&(t=!1!==u["\u0275nov"](n,19).onChange(e.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,19).onTouched()&&t),t},null,null)),u["\u0275did"](18,16384,null,0,d.d,[u.Renderer2,u.ElementRef,[2,d.a]],null,null),u["\u0275did"](19,16384,null,0,d.s,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,d.k,function(n,l){return[n,l]},[d.d,d.s]),u["\u0275did"](21,671744,null,0,d.g,[[3,d.c],[8,null],[8,null],[6,d.k],[2,d.v]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,d.l,null,[d.g]),u["\u0275did"](23,16384,null,0,d.m,[[4,d.l]],null,null),(n()(),u["\u0275eld"](24,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),u["\u0275and"](16777216,null,null,1,null,v)),u["\u0275did"](26,16384,null,0,s.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,2,0,e.form),n(l,11,0,"question"),n(l,21,0,"answer"),n(l,26,0,e.form.dirty)},function(n,l){n(l,0,0,u["\u0275nov"](l,4).ngClassUntouched,u["\u0275nov"](l,4).ngClassTouched,u["\u0275nov"](l,4).ngClassPristine,u["\u0275nov"](l,4).ngClassDirty,u["\u0275nov"](l,4).ngClassValid,u["\u0275nov"](l,4).ngClassInvalid,u["\u0275nov"](l,4).ngClassPending),n(l,8,0,u["\u0275nov"](l,13).ngClassUntouched,u["\u0275nov"](l,13).ngClassTouched,u["\u0275nov"](l,13).ngClassPristine,u["\u0275nov"](l,13).ngClassDirty,u["\u0275nov"](l,13).ngClassValid,u["\u0275nov"](l,13).ngClassInvalid,u["\u0275nov"](l,13).ngClassPending),n(l,17,0,u["\u0275nov"](l,23).ngClassUntouched,u["\u0275nov"](l,23).ngClassTouched,u["\u0275nov"](l,23).ngClassPristine,u["\u0275nov"](l,23).ngClassDirty,u["\u0275nov"](l,23).ngClassValid,u["\u0275nov"](l,23).ngClassInvalid,u["\u0275nov"](l,23).ngClassPending)})}var h=e("r6jt"),y=function(){return function(n){this.render=n,this.preview=!1,this.edit=new u.EventEmitter}}(),b=e("glzE"),w=u["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.section[_ngcontent-%COMP%]{min-width:0;width:100%;max-width:300px;color:#1111a7;background:#e2ecfa;display:-webkit-box;display:flex}.section--preview[_ngcontent-%COMP%], [_nghost-%COMP%]:not(:last-child)   .section[_ngcontent-%COMP%]{border-bottom:1px solid #7593bf}.section-handle[_ngcontent-%COMP%]{cursor:move;color:#333;margin-right:4px}.section-content[_ngcontent-%COMP%], .section-handle[_ngcontent-%COMP%]{padding:6px}.section--placeholder[_ngcontent-%COMP%]{opacity:.4;background:#eee}"]],data:{}});function C(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"app-math-form",[],null,[[null,"edit"]],function(n,l,e){var t=!0;return"edit"===l&&(t=!1!==n.component.edit.emit(e)&&t),t},m,g)),u["\u0275did"](1,573440,null,0,f,[],{data:[0,"data"]},{edit:"edit"})],function(n,l){n(l,1,0,l.component.question)},null)}function x(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,[" Student enters their name/student id "]))],null,null)}function I(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,11,"div",[["class","section"]],[[2,"section--placeholder",null],[2,"section--preview",null]],null,null,null,null)),u["\u0275did"](1,671744,null,0,h.c,[u.ElementRef,u.NgZone],{dragPreview:[0,"dragPreview"]},null),u["\u0275pid"](131072,s.AsyncPipe,[u.ChangeDetectorRef]),(n()(),u["\u0275eld"](3,0,null,null,2,"span",[["class","section-handle"]],null,null,null,null,null)),u["\u0275did"](4,671744,null,0,h.d,[u.ElementRef,u.NgZone],{dragSource:[0,"dragSource"],noHTML5Preview:[1,"noHTML5Preview"]},null),(n()(),u["\u0275ted"](-1,null,[" \u2630 "])),(n()(),u["\u0275eld"](6,0,null,null,5,"div",[["class","section-content"]],null,null,null,null,null)),u["\u0275did"](7,16384,null,0,s.NgSwitch,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),u["\u0275and"](16777216,null,null,1,null,C)),u["\u0275did"](9,278528,null,0,s.NgSwitchCase,[u.ViewContainerRef,u.TemplateRef,s.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),u["\u0275and"](16777216,null,null,1,null,x)),u["\u0275did"](11,278528,null,0,s.NgSwitchCase,[u.ViewContainerRef,u.TemplateRef,s.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(n,l){var e=l.component;n(l,1,0,null==e.render?null:e.render.source),n(l,4,0,null==e.render?null:e.render.source,!0),n(l,7,0,e.question.formType),n(l,9,0,"Math"),n(l,11,0,"Name")},function(n,l){var e=l.component;n(l,0,0,u["\u0275unv"](l,0,0,u["\u0275nov"](l,2).transform(null==e.render?null:e.render.isDragging$)),e.preview)})}var R=e("lWex"),O=e("yziD"),P=e("w5k/"),S=function(){function n(){}return Object.defineProperty(n.prototype,"formElements",{set:function(n){var l=this;this.sections=n.map(function(n){return{question:n,input:l.getFormGroup(n)}})},enumerable:!0,configurable:!0}),n.prototype.getFormGroup=function(n){switch(n.formType){case t.Math:return new d.h({answer:new d.f(null,[d.q.required,(l=n.answer,function(n){return n.value===l?null:{incorrect:!0}})])});case t.Name:return new d.h({name:new d.f(null,[d.q.required]),studentId:new d.f(null,[d.q.required,d.q.pattern(/^s\d{4}$/)])})}var l},n}(),k=u["\u0275crt"]({encapsulation:0,styles:[".ng-valid[_ngcontent-%COMP%]:not(form)  {\n            border-left: 5px solid #42A948; \n        }\n        .ng-invalid[_ngcontent-%COMP%]:not(form)  {\n            border-left: 5px solid #a94442; \n        }"],data:{}});function E(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["That's not quite right."]))],null,null)}function _(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Correct!"]))],null,null)}function N(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,4,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(n()(),u["\u0275and"](16777216,null,null,1,null,E)),u["\u0275did"](2,16384,null,0,s.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275and"](16777216,null,null,1,null,_)),u["\u0275did"](4,16384,null,0,s.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,l.context.ngIf.invalid&&(l.context.ngIf.touched||l.context.ngIf.dirty)&&l.context.ngIf.errors.incorrect),n(l,4,0,l.context.ngIf.valid)},null)}function T(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,16,"div",[],null,null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),u["\u0275ted"](2,null,["",""])),(n()(),u["\u0275eld"](3,0,null,null,13,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var t=!0;return"submit"===l&&(t=!1!==u["\u0275nov"](n,5).onSubmit(e)&&t),"reset"===l&&(t=!1!==u["\u0275nov"](n,5).onReset()&&t),t},null,null)),u["\u0275did"](4,16384,null,0,d.t,[],null,null),u["\u0275did"](5,540672,null,0,d.i,[[8,null],[8,null]],{form:[0,"form"]},null),u["\u0275prd"](2048,null,d.c,null,[d.i]),u["\u0275did"](7,16384,null,0,d.n,[[4,d.c]],null,null),(n()(),u["\u0275eld"](8,0,null,null,6,"input",[["formControlName","answer"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,e){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,9)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,9).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,9)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,9)._compositionEnd(e.target.value)&&t),"change"===l&&(t=!1!==u["\u0275nov"](n,10).onChange(e.target.value)&&t),"input"===l&&(t=!1!==u["\u0275nov"](n,10).onChange(e.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,10).onTouched()&&t),t},null,null)),u["\u0275did"](9,16384,null,0,d.d,[u.Renderer2,u.ElementRef,[2,d.a]],null,null),u["\u0275did"](10,16384,null,0,d.s,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,d.k,function(n,l){return[n,l]},[d.d,d.s]),u["\u0275did"](12,671744,null,0,d.g,[[3,d.c],[8,null],[8,null],[6,d.k],[2,d.v]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,d.l,null,[d.g]),u["\u0275did"](14,16384,null,0,d.m,[[4,d.l]],null,null),(n()(),u["\u0275and"](16777216,null,null,1,null,N)),u["\u0275did"](16,16384,null,0,s.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,5,0,l.parent.context.$implicit.input),n(l,12,0,"answer");var e=l.parent.context.$implicit.input.get("answer");n(l,16,0,e)},function(n,l){n(l,2,0,l.parent.context.$implicit.question.question),n(l,3,0,u["\u0275nov"](l,7).ngClassUntouched,u["\u0275nov"](l,7).ngClassTouched,u["\u0275nov"](l,7).ngClassPristine,u["\u0275nov"](l,7).ngClassDirty,u["\u0275nov"](l,7).ngClassValid,u["\u0275nov"](l,7).ngClassInvalid,u["\u0275nov"](l,7).ngClassPending),n(l,8,0,u["\u0275nov"](l,14).ngClassUntouched,u["\u0275nov"](l,14).ngClassTouched,u["\u0275nov"](l,14).ngClassPristine,u["\u0275nov"](l,14).ngClassDirty,u["\u0275nov"](l,14).ngClassValid,u["\u0275nov"](l,14).ngClassInvalid,u["\u0275nov"](l,14).ngClassPending)})}function q(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Please enter a student ID in the form 's1234'."]))],null,null)}function M(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(n()(),u["\u0275and"](16777216,null,null,1,null,q)),u["\u0275did"](2,16384,null,0,s.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,l.context.ngIf.invalid&&(l.context.ngIf.touched||l.context.ngIf.dirty)&&l.context.ngIf.errors.pattern)},null)}function D(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,25,"div",[],null,null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Enter your Name and Student Id"])),(n()(),u["\u0275eld"](3,0,null,null,22,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var t=!0;return"submit"===l&&(t=!1!==u["\u0275nov"](n,5).onSubmit(e)&&t),"reset"===l&&(t=!1!==u["\u0275nov"](n,5).onReset()&&t),t},null,null)),u["\u0275did"](4,16384,null,0,d.t,[],null,null),u["\u0275did"](5,540672,null,0,d.i,[[8,null],[8,null]],{form:[0,"form"]},null),u["\u0275prd"](2048,null,d.c,null,[d.i]),u["\u0275did"](7,16384,null,0,d.n,[[4,d.c]],null,null),(n()(),u["\u0275eld"](8,0,null,null,7,"label",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,[" Name "])),(n()(),u["\u0275eld"](10,0,null,null,5,"input",[["formControlName","name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,11)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,11).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,11)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,11)._compositionEnd(e.target.value)&&t),t},null,null)),u["\u0275did"](11,16384,null,0,d.d,[u.Renderer2,u.ElementRef,[2,d.a]],null,null),u["\u0275prd"](1024,null,d.k,function(n){return[n]},[d.d]),u["\u0275did"](13,671744,null,0,d.g,[[3,d.c],[8,null],[8,null],[6,d.k],[2,d.v]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,d.l,null,[d.g]),u["\u0275did"](15,16384,null,0,d.m,[[4,d.l]],null,null),(n()(),u["\u0275eld"](16,0,null,null,7,"label",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,[" Student ID "])),(n()(),u["\u0275eld"](18,0,null,null,5,"input",[["formControlName","studentId"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,19)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,19).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,19)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,19)._compositionEnd(e.target.value)&&t),t},null,null)),u["\u0275did"](19,16384,null,0,d.d,[u.Renderer2,u.ElementRef,[2,d.a]],null,null),u["\u0275prd"](1024,null,d.k,function(n){return[n]},[d.d]),u["\u0275did"](21,671744,null,0,d.g,[[3,d.c],[8,null],[8,null],[6,d.k],[2,d.v]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,d.l,null,[d.g]),u["\u0275did"](23,16384,null,0,d.m,[[4,d.l]],null,null),(n()(),u["\u0275and"](16777216,null,null,1,null,M)),u["\u0275did"](25,16384,null,0,s.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,5,0,l.parent.context.$implicit.input),n(l,13,0,"name"),n(l,21,0,"studentId");var e=l.parent.context.$implicit.input.get("studentId");n(l,25,0,e)},function(n,l){n(l,3,0,u["\u0275nov"](l,7).ngClassUntouched,u["\u0275nov"](l,7).ngClassTouched,u["\u0275nov"](l,7).ngClassPristine,u["\u0275nov"](l,7).ngClassDirty,u["\u0275nov"](l,7).ngClassValid,u["\u0275nov"](l,7).ngClassInvalid,u["\u0275nov"](l,7).ngClassPending),n(l,10,0,u["\u0275nov"](l,15).ngClassUntouched,u["\u0275nov"](l,15).ngClassTouched,u["\u0275nov"](l,15).ngClassPristine,u["\u0275nov"](l,15).ngClassDirty,u["\u0275nov"](l,15).ngClassValid,u["\u0275nov"](l,15).ngClassInvalid,u["\u0275nov"](l,15).ngClassPending),n(l,18,0,u["\u0275nov"](l,23).ngClassUntouched,u["\u0275nov"](l,23).ngClassTouched,u["\u0275nov"](l,23).ngClassPristine,u["\u0275nov"](l,23).ngClassDirty,u["\u0275nov"](l,23).ngClassValid,u["\u0275nov"](l,23).ngClassInvalid,u["\u0275nov"](l,23).ngClassPending)})}function A(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,6,"div",[["class","printout-elem"]],null,null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,5,null,null,null,null,null,null,null)),u["\u0275did"](2,16384,null,0,s.NgSwitch,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),u["\u0275and"](16777216,null,null,1,null,T)),u["\u0275did"](4,278528,null,0,s.NgSwitchCase,[u.ViewContainerRef,u.TemplateRef,s.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),u["\u0275and"](16777216,null,null,1,null,D)),u["\u0275did"](6,278528,null,0,s.NgSwitchCase,[u.ViewContainerRef,u.TemplateRef,s.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(n,l){n(l,2,0,l.context.$implicit.question.formType),n(l,4,0,"Math"),n(l,6,0,"Name")},null)}function j(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","printout-page"]],null,null,null,null,null)),(n()(),u["\u0275and"](16777216,null,null,1,null,A)),u["\u0275did"](2,278528,null,0,s.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.sections)},null)}var V,z,L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},F="undefined"!=typeof Symbol?Symbol("immer-nothing"):((z="immer-nothing")in(V={})?Object.defineProperty(V,z,{value:!0,enumerable:!0,configurable:!0,writable:!0}):V[z]=!0,V),U="undefined"!=typeof Symbol?Symbol("immer-proxy-state"):"__$immer_state",$="An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",Q=!("undefined"!=typeof process||"verifyMinified"!==(function(){}).name),W="undefined"!=typeof Proxy&&"undefined"!=typeof Reflect;function Z(n){return!!n&&!!n[U]}function K(n){if(!n)return!1;if("object"!==(void 0===n?"undefined":L(n)))return!1;if(Array.isArray(n))return!0;var l=Object.getPrototypeOf(n);return null===l||l===Object.prototype}var B=Object.assign||function(n,l){for(var e in l)G(l,e)&&(n[e]=l[e]);return n};function H(n){if(Array.isArray(n))return n.slice();var l=void 0===n.__proto__?Object.create(null):{};return B(l,n)}function J(n,l){if(Array.isArray(n))for(var e=0;e<n.length;e++)l(e,n[e]);else for(var t in n)l(t,n[t])}function G(n,l){return Object.prototype.hasOwnProperty.call(n,l)}function X(n,l,e,t){if(Z(n)){var u=n[U];if(!0===u.modified){if(!0===u.finalized)return u.copy;u.finalized=!0;var i=function(n,l,e,t,u){var i,o=l.base;return J(n,function(i,r){if(r!==o[i]){var a=t&&!G(l.assigned,i);n[i]=X(r,a&&e.concat(i),a&&t,u)}}),i=n,Q&&Object.freeze(i),i}(W?u.copy:u.copy=H(n),u,l,e,t);return function(n,l,e,t,u,i){e&&(Array.isArray(u)?function(n,l,e,t,u,i){for(var o=Math.min(u.length,i.length),r=0;r<o;r++)if(n.assigned[r]&&u[r]!==i[r]){var a=l.concat(r);e.push({op:"replace",path:a,value:i[r]}),t.push({op:"replace",path:a,value:u[r]})}if(o<i.length){for(var d=o;d<i.length;d++){var s=l.concat(d);e.push({op:"add",path:s,value:i[d]})}t.push({op:"replace",path:l.concat("length"),value:u.length})}else if(o<u.length){e.push({op:"replace",path:l.concat("length"),value:i.length});for(var c=o;c<u.length;c++){var p=l.concat(c);t.push({op:"add",path:p,value:u[c]})}}}(n,l,e,t,u,i):function(n,l,e,t,u,i){J(n.assigned,function(n,o){var r=u[n],a=i[n],d=o?n in u?"replace":"add":"remove";if(r!==u||"replace"!==d){var s=l.concat(n);e.push("remove"===d?{op:d,path:s}:{op:d,path:s,value:a}),t.push("add"===d?{op:"remove",path:s}:"remove"===d?{op:"add",path:s,value:r}:{op:"replace",path:s,value:r})}})}(n,l,e,t,u,i))}(u,l,e,t,u.base,i),i}return u.base}return function n(l){K(l)&&(Object.isFrozen(l)||J(l,function(e,t){Z(t)?l[e]=X(t):n(t)}))}(n),n}function Y(n,l){return n===l?0!==n||1/n==1/l:n!=n&&l!=l}var nn=null,ln={get:function(n,l){if(l===U)return n;if(n.modified){var e=n.copy[l];return e===n.base[l]&&K(e)?n.copy[l]=on(n,e):e}if(G(n.proxies,l))return n.proxies[l];var t=n.base[l];return!Z(t)&&K(t)?n.proxies[l]=on(n,t):t},has:function(n,l){return l in tn(n)},ownKeys:function(n){return Reflect.ownKeys(tn(n))},set:function(n,l,e){if(n.assigned[l]=!0,!n.modified){if(l in n.base&&Y(n.base[l],e)||G(n.proxies,l)&&n.proxies[l]===e)return!0;un(n)}return n.copy[l]=e,!0},deleteProperty:function(n,l){return n.assigned[l]=!1,un(n),delete n.copy[l],!0},getOwnPropertyDescriptor:function(n,l){var e=n.modified?n.copy:G(n.proxies,l)?n.proxies:n.base,t=Reflect.getOwnPropertyDescriptor(e,l);return!t||Array.isArray(e)&&"length"===l||(t.configurable=!0),t},defineProperty:function(){throw new Error("Immer does not support defining properties on draft objects.")},setPrototypeOf:function(){throw new Error("Immer does not support `setPrototypeOf()`.")}},en={};function tn(n){return!0===n.modified?n.copy:n.base}function un(n){n.modified||(n.modified=!0,n.copy=H(n.base),Object.assign(n.copy,n.proxies),n.parent&&un(n.parent))}function on(n,l){if(Z(l))throw new Error("Immer bug. Plz report.");var e=function(l,e){return{modified:!1,assigned:{},finalized:!1,parent:n,base:e,copy:void 0,proxies:{}}}(0,l),t=Array.isArray(l)?Proxy.revocable([e],en):Proxy.revocable(e,ln);return nn.push(t),t.proxy}J(ln,function(n,l){en[n]=function(){return arguments[0]=arguments[0][0],l.apply(this,arguments)}}),en.deleteProperty=function(n,l){if(isNaN(parseInt(l)))throw new Error("Immer does not support deleting properties from arrays: "+l);return ln.deleteProperty.call(this,n[0],l)},en.set=function(n,l,e){if("length"!==l&&isNaN(parseInt(l)))throw new Error("Immer does not support setting non-numeric properties on arrays: "+l);return ln.set.call(this,n[0],l,e)};var rn={},an=null;function dn(n){return n.hasCopy?n.copy:n.base}function sn(n){n.modified||(n.modified=!0,n.parent&&sn(n.parent))}function cn(n){n.hasCopy||(n.hasCopy=!0,n.copy=H(n.base))}function pn(n){if(!0===n.finished)throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+JSON.stringify(n.copy||n.base))}function fn(n){for(var l=n.base,e=Object.keys(n.proxy),t=e.length;0!==t;){var u=e[--t];if(void 0===l[u]&&!G(l,u))return!0}return e.length!==Object.keys(l).length}function gn(n){var l=n.proxy;if(l.length!==n.base.length)return!0;var e=Object.getOwnPropertyDescriptor(l,l.length-1);return!(!e||e.get)}function vn(n,l,e){if(arguments.length<1||arguments.length>3)throw new Error("produce expects 1 to 3 arguments, got "+arguments.length);if("function"==typeof n&&"function"!=typeof l){var t=l,u=n;return function(){for(var n=arguments.length,l=Array(n>1?n-1:0),e=1;e<n;e++)l[e-1]=arguments[e];return vn(arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,function(n){return u.call.apply(u,[n,n].concat(l))})}}if("function"!=typeof l)throw new Error("if first argument is not a function, the second argument to produce should be a function");if(void 0!==e&&"function"!=typeof e)throw new Error("the third argument of a producer should not be set or a function");if(!K(n)){var i=l(n);return void 0===i?n:mn(i)}return mn(W?function(n,l,e){if(Z(n)){var t=l.call(n,n);return void 0===t?n:t}var u=nn;nn=[];var i=e&&[],o=e&&[];try{var r=on(void 0,n),a=l.call(r,r),d=void 0;if(void 0!==a&&a!==r){if(r[U].modified)throw new Error($);d=X(a),i&&(i.push({op:"replace",path:[],value:d}),o.push({op:"replace",path:[],value:n}))}else d=X(r,[],i,o);return J(nn,function(n,l){return l.revoke()}),e&&e(i,o),d}finally{nn=u}}(n,l,e):function(n,l,e){if(Z(n)){var t=l.call(n,n);return void 0===t?n:t}var u=an;an=[];var i=e&&[],o=e&&[];try{var r=function n(l,e){var t=H(e);J(e,function(l){var e;Object.defineProperty(t,""+l,rn[e=""+l]||(rn[e]={configurable:!0,enumerable:!0,get:function(){return function(l,e){pn(l);var t=dn(l)[e];return!l.finalizing&&t===l.base[e]&&K(t)?(cn(l),l.copy[e]=n(l,t)):t}(this[U],e)},set:function(n){!function(n,l,e){if(pn(n),n.assigned[l]=!0,!n.modified){if(Y(dn(n)[l],e))return;sn(n),cn(n)}n.copy[l]=e}(this[U],e,n)}}))});var u=function(n,l,e){return{modified:!1,assigned:{},hasCopy:!1,parent:n,base:e,proxy:l,copy:void 0,finished:!1,finalizing:!1,finalized:!1}}(l,t,e);return Object.defineProperty(t,U,{value:u,enumerable:!1,writable:!0}),an.push(u),t}(void 0,n),a=l.call(r,r);J(an,function(n,l){l.finalizing=!0});var d=void 0;if(void 0!==a&&a!==r){if(r[U].modified)throw new Error($);d=X(a),i&&(i.push({op:"replace",path:[],value:d}),o.push({op:"replace",path:[],value:n}))}else e&&function n(l){if(l&&"object"===(void 0===l?"undefined":L(l))){var e=l[U];if(e){var t,u,i,o=e.proxy,r=e.base;if(Array.isArray(l)){if(gn(e)){if(sn(e),e.assigned.length=!0,o.length<r.length)for(var a=o.length;a<r.length;a++)e.assigned[a]=!1;else for(var d=r.length;d<o.length;d++)e.assigned[d]=!0;J(o,function(l,t){e.assigned[l]||n(t)})}}else{var s=(t=o,u=Object.keys(r),{added:(i=Object.keys(t)).filter(function(n){return-1===u.indexOf(n)}),removed:u.filter(function(n){return-1===i.indexOf(n)})}),c=s.added,p=s.removed;(c.length>0||p.length>0)&&sn(e),J(c,function(n,l){e.assigned[l]=!0}),J(p,function(n,l){e.assigned[l]=!1}),J(o,function(l,t){e.assigned[l]||n(t)})}}}}(r),function(){for(var n=an.length-1;n>=0;n--){var l=an[n];!1===l.modified&&(Array.isArray(l.base)?gn(l)&&sn(l):fn(l)&&sn(l))}}(),d=X(r,[],i,o);return J(an,function(n,l){l.finished=!0}),e&&e(i,o),d}finally{an=u}}(n,l,e))}function mn(n){return n===F?void 0:n}vn(function(n,l){for(var e=0;e<l.length;e++){var t=l[e],u=t.path;if(0===u.length&&"replace"===t.op)n=t.value;else{for(var i=n,o=0;o<u.length-1;o++)if(!(i=i[u[o]])||"object"!==(void 0===i?"undefined":L(i)))throw new Error("Cannot apply patch, path doesn't resolve: "+u.join("/"));var r=u[u.length-1];switch(t.op){case"replace":case"add":i[r]=t.value;break;case"remove":if(Array.isArray(i)){if(r!==i.length-1)throw new Error("Remove can only remove the last key of an array, index: "+r+", length: "+i.length);i.length-=1}else delete i[r];break;default:throw new Error("Unsupported patch operation: "+t.op)}}}return n});var hn=function(){return(hn=Object.assign||function(n){for(var l,e=1,t=arguments.length;e<t;e++)for(var u in l=arguments[e])Object.prototype.hasOwnProperty.call(l,u)&&(n[u]=l[u]);return n}).apply(this,arguments)},yn=function(){function n(n){var l=this;this.dnd=n,this.spill=Object(b.i)(this.dnd,"QUIZ_QUESTION",{drop:function(n){n.isInternal&&(l.list=l.tempList=l.remove(n))}}),this.list=[new c(1,"What is 2+2?",4),new c(2,"What is the meaning of life?",42),new c(3,"What is 1137 mod 256?",113)],this.nextId=4,this.tempList=this.list,this.spec={type:"QUIZ_QUESTION",trackBy:function(n){return n.id},hover:function(n){l.tempList=l.move(n)},drop:function(n){l.tempList=l.list=l.move(n)},endDrag:function(n){l.tempList=l.list}},this.nameBlock=hn({},this.spec,{createData:function(){return new p(l.nextId++)}}),this.mathQuestion=hn({},this.spec,{createData:function(){return new c(l.nextId++,"New math question",0)}}),this.questionTemplates=[{spec:this.nameBlock,description:p.templateDescription},{spec:this.mathQuestion,description:c.templateDescription}]}return n.prototype.move=function(n){return vn(this.list,function(l){n.isInternal&&l.splice(n.index,1),l.splice(n.hover.index,0,n.data)})},n.prototype.remove=function(n){return vn(this.list,function(l){l.splice(n.index,1)})},n.prototype.edit=function(n){var l=this.list.findIndex(function(l){return l.id===n.id});if(l>=0){var e=this.list.slice(0);e.splice(l,1,n),this.tempList=this.list=e}},n}(),bn=u["\u0275crt"]({encapsulation:0,styles:[["@media screen and (min-width:480px){.flex[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.flex[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{min-width:0;padding:4px}}h3[_ngcontent-%COMP%]{border-bottom:2px solid #dedede;padding-bottom:6px}.templates-flex[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.external[_ngcontent-%COMP%]{background:#ffe5df;color:#ab4a30;padding:4px;margin-bottom:8px;border-top:2px solid #f9ede9;border-bottom:2px solid #efc5ba;min-width:0}"]],data:{}});function wn(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,1,"quiz-section",[],null,null,null,I,w)),u["\u0275did"](2,49152,null,0,y,[[2,b.f]],{question:[0,"question"],preview:[1,"preview"]},null)],function(n,l){n(l,2,0,l.parent.parent.context.item.data,!0)},null)}function Cn(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","external"]],null,null,null,null,null)),u["\u0275did"](1,278528,null,0,s.NgStyle,[u.KeyValueDiffers,u.ElementRef,u.Renderer2],{ngStyle:[0,"ngStyle"]},null),(n()(),u["\u0275ted"](2,null,[" "," "]))],function(n,l){var e=l.parent.parent.context.item.size.style();n(l,1,0,e)},function(n,l){n(l,2,0,l.parent.parent.context.item.data.templateDescription)})}function xn(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,3,null,null,null,null,null,null,null)),(n()(),u["\u0275and"](16777216,[[1,2]],null,1,null,wn)),u["\u0275did"](2,16384,null,0,s.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),u["\u0275and"](0,[[1,2],["external",2]],null,0,null,Cn))],function(n,l){n(l,2,0,l.parent.context.item.isInternal||"WORK_AREA"===l.parent.context.item.hover.listId,u["\u0275nov"](l,3))},null)}function In(n){return u["\u0275vid"](0,[(n()(),u["\u0275and"](16777216,[[1,2]],null,1,null,xn)),u["\u0275did"](1,16384,null,0,s.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275and"](0,null,null,0))],function(n,l){n(l,1,0,"QUIZ_QUESTION"===l.context.$implicit)},null)}function Rn(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,3,"div",[["class","external"]],null,null,null,null,null)),u["\u0275did"](1,671744,null,0,h.d,[u.ElementRef,u.NgZone],{dragSource:[0,"dragSource"],noHTML5Preview:[1,"noHTML5Preview"]},null),u["\u0275did"](2,671744,[["ext",4]],0,b.c,[h.g,u.ElementRef],{spec:[0,"spec"]},null),(n()(),u["\u0275ted"](3,null,[" "," "]))],function(n,l){n(l,1,0,u["\u0275nov"](l,2).source,!0),n(l,2,0,l.context.$implicit.spec)},function(n,l){n(l,3,0,l.context.$implicit.description)})}function On(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,2,"quiz-section",[],[[4,"display",null]],[[null,"edit"]],function(n,l,e){var t=!0;return"edit"===l&&(t=!1!==n.component.edit(e)&&t),t},I,w)),u["\u0275did"](1,4931584,[["r",4]],0,b.f,[h.g,u.ElementRef],{context:[0,"context"]},null),u["\u0275did"](2,49152,null,0,y,[[2,b.f]],{question:[0,"question"]},{edit:"edit"})],function(n,l){n(l,1,0,l.context.$implicit),n(l,2,0,u["\u0275nov"](l,1).data)},function(n,l){n(l,0,0,l.component.block)})}function Pn(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,3,"skyhook-preview",[],null,null,null,R.b,R.a)),u["\u0275did"](1,180224,null,1,O.c,[h.g,h.b],{allBackends:[0,"allBackends"]},null),u["\u0275qud"](603979776,1,{content:0}),(n()(),u["\u0275and"](0,[[1,2]],null,0,null,In)),(n()(),u["\u0275eld"](4,0,null,null,21,"div",[["class","flex"]],null,null,null,null,null)),u["\u0275did"](5,671744,null,0,h.e,[u.ElementRef,u.NgZone],{dropTarget:[0,"dropTarget"]},null),(n()(),u["\u0275eld"](6,0,null,null,5,"div",[["class","templates"]],null,null,null,null,null)),(n()(),u["\u0275eld"](7,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Drag templates"])),(n()(),u["\u0275eld"](9,0,null,null,2,"div",[["class","templates-flex"]],null,null,null,null,null)),(n()(),u["\u0275and"](16777216,null,null,1,null,Rn)),u["\u0275did"](11,278528,null,0,s.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),u["\u0275eld"](12,0,null,null,8,"div",[["class","work-area"]],null,null,null,null,null)),(n()(),u["\u0275eld"](13,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["...into here; edit them"])),(n()(),u["\u0275eld"](15,0,null,null,5,"skyhook-sortable-list",[["class","list"],["ssSortableListId","WORK_AREA"]],null,null,null,P.b,P.a)),u["\u0275prd"](6144,null,b.b,null,[b.d]),u["\u0275did"](17,6012928,null,1,b.d,[h.g,u.ElementRef,u.ChangeDetectorRef],{listId:[0,"listId"],spec:[1,"spec"],children:[2,"children"]},null),u["\u0275qud"](603979776,2,{ssRenderTemplates:1}),(n()(),u["\u0275and"](0,[[2,2]],null,1,null,On)),u["\u0275did"](20,16384,null,0,b.g,[],null,null),(n()(),u["\u0275eld"](21,0,null,null,4,"div",[["class","printout"]],null,null,null,null,null)),(n()(),u["\u0275eld"](22,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["... then try the quiz out"])),(n()(),u["\u0275eld"](24,0,null,null,1,"app-printout",[],null,null,null,j,k)),u["\u0275did"](25,49152,null,0,S,[],{formElements:[0,"formElements"]},null)],function(n,l){var e=l.component;n(l,1,0,!0),n(l,5,0,e.spill),n(l,11,0,e.questionTemplates),n(l,17,0,"WORK_AREA",e.spec,e.tempList),n(l,25,0,e.list)},null)}var Sn=function(){return function(){}}(),kn=u["\u0275crt"]({encapsulation:2,styles:[],data:{}});function En(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"app-example-link",[["path","sortable/quiz"]],null,null,null,r.b,r.a)),u["\u0275did"](1,49152,null,0,a.a,[],{path:[0,"path"]},null),(n()(),u["\u0275eld"](2,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["This example does the same list operations as the 'Simple list' example, but it does them with "])),(n()(),u["\u0275eld"](4,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["immer"])),(n()(),u["\u0275ted"](-1,null,[" just to shake things up."])),(n()(),u["\u0275eld"](7,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["It also uses the "])),(n()(),u["\u0275eld"](9,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["[ssExternal]"])),(n()(),u["\u0275ted"](-1,null,[" directive to allow dragging in items that aren't already managed by a list."])),(n()(),u["\u0275eld"](12,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["It also uses a 'spillTarget', attached outside the work area, which allows the preview to morph as you drag templates over the work area and out again."])),(n()(),u["\u0275eld"](14,0,null,null,1,"app-external-sortable",[],null,null,null,Pn,bn)),u["\u0275did"](15,49152,null,0,yn,[h.g],null,null)],function(n,l){n(l,1,0,"sortable/quiz")},null)}function _n(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"quiz-container",[],null,null,null,En,kn)),u["\u0275did"](1,49152,null,0,Sn,[],null,null)],null,null)}var Nn=u["\u0275ccf"]("quiz-container",Sn,_n,{},{},[]),Tn=e("JqZp"),qn=e("981U");e.d(l,"QuizModuleNgFactory",function(){return Mn});var Mn=u["\u0275cmf"](i,[],function(n){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,Nn]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[u.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,d.e,d.e,[]),u["\u0275mpd"](4608,d.u,d.u,[]),u["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),u["\u0275mpd"](1073742336,d.r,d.r,[]),u["\u0275mpd"](1073742336,d.p,d.p,[]),u["\u0275mpd"](1073742336,Tn.a,Tn.a,[]),u["\u0275mpd"](1073742336,h.f,h.f,[]),u["\u0275mpd"](1073742336,O.b,O.b,[]),u["\u0275mpd"](1073742336,b.e,b.e,[]),u["\u0275mpd"](1073742336,qn.n,qn.n,[[2,qn.t],[2,qn.k]]),u["\u0275mpd"](1073742336,i,i,[]),u["\u0275mpd"](1024,qn.i,function(){return[[{path:"",component:Sn}]]},[])])})},"O/wF":function(n,l,e){"use strict";e.d(l,"a",function(){return u}),e.d(l,"b",function(){return i});var t=e("LoAr"),u=(e("8dL6"),t["\u0275crt"]({encapsulation:0,styles:[".fab[_ngcontent-%COMP%] { color: black; }\n        p[_ngcontent-%COMP%] {\n            margin-top: 0;\n        }\n        a[_ngcontent-%COMP%] {\n            padding: 8px;\n            display: inline-block;\n            background: rgba(68, 72, 224, 0.14);\n            background: #e5e2fa;\n            background: #e2ecfa;\n            text-decoration: none;\n        }"],data:{}}));function i(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,0,"i",[["class","fab fa-github"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" View the source on GitHub "]))],null,function(n,l){n(l,1,0,l.component.link)})}}}]);