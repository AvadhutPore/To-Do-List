import './polyfills.server.mjs';
import{A as l,B as N,C as be,D as De,E as p,F as oe,G as d,H as x,I as B,P as se,R as Me,S as Ae,T as Ee,U as we,X as Fe,a as Q,b as ve,ba as ae,c as ye,d as _e,e as j,f as T,g as G,h,i as C,j as M,k as f,l as g,m as S,n as ee,o as te,p as Ce,q as ie,r as ne,s as v,t as a,u as V,v as b,w as A,x as re,y as Ve,z as u}from"./chunk-UOTV7WD6.mjs";import{a as m,b as _}from"./chunk-KRLCULJA.mjs";var Te=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(ne),a(ie))},e.\u0275dir=g({type:e});let t=e;return t})(),gt=(()=>{let e=class e extends Te{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=Ce(e)))(o||e)}})(),e.\u0275dir=g({type:e,features:[b]});let t=e;return t})(),Ge=new C("NgValueAccessor");var vt={provide:Ge,useExisting:j(()=>Y),multi:!0};function yt(){let t=se()?se().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var _t=new C("CompositionEventMode"),Y=(()=>{let e=class e extends Te{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!yt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(ne),a(ie),a(_t,8))},e.\u0275dir=g({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&p("input",function(c){return o._handleInput(c.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(c){return o._compositionEnd(c.target.value)})},features:[B([vt]),b]});let t=e;return t})();function y(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Be(t){return t!=null&&typeof t.length=="number"}var Ue=new C("NgValidators"),Re=new C("NgAsyncValidators"),Ct=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,H=class{static min(e){return Vt(e)}static max(e){return bt(e)}static required(e){return Dt(e)}static requiredTrue(e){return Mt(e)}static email(e){return At(e)}static minLength(e){return Et(e)}static maxLength(e){return wt(e)}static pattern(e){return Ft(e)}static nullValidator(e){return He(e)}static compose(e){return Ze(e)}static composeAsync(e){return Xe(e)}};function Vt(t){return e=>{if(y(e.value)||y(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function bt(t){return e=>{if(y(e.value)||y(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function Dt(t){return y(t.value)?{required:!0}:null}function Mt(t){return t.value===!0?null:{required:!0}}function At(t){return y(t.value)||Ct.test(t.value)?null:{email:!0}}function Et(t){return e=>y(e.value)||!Be(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function wt(t){return e=>Be(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Ft(t){if(!t)return He;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(y(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function He(t){return null}function Le(t){return t!=null}function $e(t){return De(t)?ve(t):t}function We(t){let e={};return t.forEach(n=>{e=n!=null?m(m({},e),n):e}),Object.keys(e).length===0?null:e}function qe(t,e){return e.map(n=>n(t))}function It(t){return!t.validate}function ze(t){return t.map(e=>It(e)?e:n=>e.validate(n))}function Ze(t){if(!t)return null;let e=t.filter(Le);return e.length==0?null:function(n){return We(qe(n,e))}}function Ye(t){return t!=null?Ze(ze(t)):null}function Xe(t){if(!t)return null;let e=t.filter(Le);return e.length==0?null:function(n){let i=qe(n,e).map($e);return _e(i).pipe(ye(We))}}function Ke(t){return t!=null?Xe(ze(t)):null}function Ie(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Je(t){return t._rawValidators}function Qe(t){return t._rawAsyncValidators}function le(t){return t?Array.isArray(t)?t:[t]:[]}function L(t,e){return Array.isArray(t)?t.includes(e):t===e}function Se(t,e){let n=le(e);return le(t).forEach(r=>{L(n,r)||n.push(r)}),n}function Ne(t,e){return le(e).filter(n=>!L(t,n))}var $=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ye(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ke(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},w=class extends ${get formDirective(){return null}get path(){return null}},k=class extends ${constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},W=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},St={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},bi=_(m({},St),{"[class.ng-submitted]":"isSubmitted"}),et=(()=>{let e=class e extends W{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(k,2))},e.\u0275dir=g({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&re("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[b]});let t=e;return t})(),tt=(()=>{let e=class e extends W{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(w,10))},e.\u0275dir=g({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&re("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[b]});let t=e;return t})();var O="VALID",U="INVALID",E="PENDING",P="DISABLED";function ce(t){return(X(t)?t.validators:t)||null}function Nt(t){return Array.isArray(t)?Ye(t):t||null}function he(t,e){return(X(e)?e.asyncValidators:t)||null}function xt(t){return Array.isArray(t)?Ke(t):t||null}function X(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function it(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new T(1e3,"");if(!i[n])throw new T(1001,"")}function nt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new T(1002,"")})}var F=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===O}get invalid(){return this.status===U}get pending(){return this.status==E}get disabled(){return this.status===P}get enabled(){return this.status!==P}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Se(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Se(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ne(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ne(e,this._rawAsyncValidators))}hasValidator(e){return L(this._rawValidators,e)}hasAsyncValidator(e){return L(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=E,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=P,this.errors=null,this._forEachChild(i=>{i.disable(_(m({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_(m({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=O,this._forEachChild(i=>{i.enable(_(m({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(_(m({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===E)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?P:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=E,this._hasOwnPendingAsyncValidator=!0;let n=$e(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new V,this.statusChanges=new V}_calculateStatus(){return this._allControlsDisabled()?P:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(E)?E:this._anyControlsHaveStatus(U)?U:O}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){X(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Nt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=xt(this._rawAsyncValidators)}},q=class extends F{constructor(e,n,i){super(ce(n),he(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){nt(this,!0,e),Object.keys(e).forEach(i=>{it(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ue=class extends q{};var fe=new C("CallSetDisabledState",{providedIn:"root",factory:()=>K}),K="always";function Ot(t,e){return[...e.path,t]}function xe(t,e,n=K){pe(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),kt(t,e),Tt(t,e),jt(t,e),Pt(t,e)}function Oe(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),Z(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function z(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Pt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function pe(t,e){let n=Je(t);e.validator!==null?t.setValidators(Ie(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Qe(t);e.asyncValidator!==null?t.setAsyncValidators(Ie(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();z(e._rawValidators,r),z(e._rawAsyncValidators,r)}function Z(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Je(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=Qe(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return z(e._rawValidators,i),z(e._rawAsyncValidators,i),n}function kt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&rt(t,e)})}function jt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&rt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function rt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Tt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Gt(t,e){t==null,pe(t,e)}function Bt(t,e){return Z(t,e)}function Ut(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Rt(t){return Object.getPrototypeOf(t.constructor)===gt}function Ht(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Lt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===Y?n=o:Rt(o)?i=o:r=o}),r||i||n||null}function $t(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Pe(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function ke(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var R=class extends F{constructor(e=null,n,i){super(ce(n),he(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),X(n)&&(n.nonNullable||n.initialValueIsDefault)&&(ke(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Pe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Pe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ke(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Wt=t=>t instanceof R;var ot=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=g({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var qt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({});let t=e;return t})();var st=new C("NgModelWithFormControlWarning");var zt={provide:w,useExisting:j(()=>me)},me=(()=>{let e=class e extends w{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new V,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Z(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return xe(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){Oe(i.control||null,i,!1),$t(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,Ht(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,o=this.form.get(i.path);r!==o&&(Oe(r||null,i),Wt(o)&&(xe(o,i,this.callSetDisabledState),i.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);Gt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Bt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){pe(this.form,this),this._oldForm&&Z(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(Ue,10),a(Re,10),a(fe,8))},e.\u0275dir=g({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&p("submit",function(c){return o.onSubmit(c)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[B([zt]),b,S]});let t=e;return t})();var Zt={provide:k,useExisting:j(()=>ge)},ge=(()=>{let e=class e extends k{set isDisabled(i){}constructor(i,r,o,s,c){super(),this._ngModelWarningConfig=c,this._added=!1,this.name=null,this.update=new V,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Lt(this,s)}ngOnChanges(i){this._added||this._setUpControl(),Ut(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return Ot(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(w,13),a(Ue,10),a(Re,10),a(Ge,10),a(st,8))},e.\u0275dir=g({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[B([Zt]),b,S]});let t=e;return t})();var at=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[qt]});let t=e;return t})(),de=class extends F{constructor(e,n,i){super(ce(n),he(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){nt(this,!1,e),e.forEach((i,r)=>{it(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function je(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var lt=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let i=new e;return i.useNonNullable=!0,i}group(i,r=null){let o=this._reduceControls(i),s={};return je(r)?s=r:r!==null&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new q(o,s)}record(i,r=null){let o=this._reduceControls(i);return new ue(o,r)}control(i,r,o){let s={};return this.useNonNullable?(je(r)?s=r:(s.validators=r,s.asyncValidators=o),new R(i,_(m({},s),{nonNullable:!0}))):new R(i,r,o)}array(i,r,o){let s=i.map(c=>this._createControl(c));return new de(s,r,o)}_reduceControls(i){let r={};return Object.keys(i).forEach(o=>{r[o]=this._createControl(i[o])}),r}_createControl(i){if(i instanceof R)return i;if(i instanceof F)return i;if(Array.isArray(i)){let r=i[0],o=i.length>1?i[1]:null,s=i.length>2?i[2]:null;return this.control(r,o,s)}else return this.control(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=G({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ut=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:fe,useValue:i.callSetDisabledState??K}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[at]});let t=e;return t})(),dt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:st,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:fe,useValue:i.callSetDisabledState??K}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[at]});let t=e;return t})();var I=(()=>{let e=class e{constructor(){this.notes=[],this.notesSubject=new Q([]),this.isEdit=new Q(!1)}setEditable(i){this.isEdit.next(i)}getEditable(){return this.isEdit.asObservable()}getNotesObservable(){return this.notesSubject.asObservable()}createNote(i){i.id=new Date().getTime(),this.notes.push(i),this.notesSubject.next(this.notes)}updateNote(i){let r=this.notes.findIndex(o=>o.id===i.id);r!==-1&&(this.notes[r]=i,this.notesSubject.next(this.notes))}deleteNote(i){this.notes=this.notes.filter(r=>r.id!==i),this.notesSubject.next(this.notes)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=G({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Xt=[],ht=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[ae.forRoot(Xt),ae]});let t=e;return t})();var ft=(()=>{let e=class e{constructor(i,r){this.noteService=i,this.formBuilder=r,this.noteService.getEditable().subscribe(o=>{this.isEditable=o})}ngOnInit(){this.noteForm=this.formBuilder.group({id:new Date().getTime(),title:["",H.required],content:[""]})}ngOnChanges(i){if(i.selectedNote?.currentValue){let r=i.selectedNote?.currentValue;this.noteForm.patchValue({id:r.id,title:r.title,content:r.content})}}onSubmit(){if(this.noteForm.invalid)return;let i=this.noteForm.value;this.isEditable?(this.noteService.updateNote(i),this.noteService.setEditable(!1)):this.noteService.createNote(i),this.noteForm.reset()}};e.\u0275fac=function(r){return new(r||e)(a(I),a(lt))},e.\u0275cmp=M({type:e,selectors:[["app-note-form"]],inputs:{selectedNote:"selectedNote"},features:[S],decls:14,vars:2,consts:[[1,"form-wrapper"],[3,"formGroup","ngSubmit"],[1,"form-field-wrap"],["for","title"],["type","text","name","title","placeholder","Title","formControlName","title"],["for","content"],["type","text","name","content","placeholder","Content","formControlName","content"],["type","submit",1,"form-field-btn"]],template:function(r,o){r&1&&(u(0,"div",0)(1,"h2"),d(2,"Add New Note"),l(),u(3,"form",1),p("ngSubmit",function(){return o.onSubmit()}),u(4,"div",2)(5,"label",3),d(6,"Note Title :-"),l(),N(7,"input",4),l(),u(8,"div",2)(9,"label",5),d(10,"Content :-"),l(),N(11,"input",6),l(),u(12,"button",7),d(13),l()()()),r&2&&(v(3),A("formGroup",o.noteForm),v(10),x(o.isEditable?"Edit Note":"Add New Note"))},dependencies:[ot,Y,et,tt,me,ge],styles:[".form-wrapper[_ngcontent-%COMP%]{width:50%}.form-field-wrap[_ngcontent-%COMP%]{padding-bottom:15px}.form-field-wrap[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;padding-bottom:10px;font-size:18px}.form-field-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:94%;padding:6px 12px}.form-field-btn[_ngcontent-%COMP%]{font-size:18px;font-weight:400;padding:12px 31px;margin-top:10px;border-radius:6px;outline:none;border:none;background-color:#6495ed;color:#fff;cursor:pointer}.form-field-btn[_ngcontent-%COMP%]:hover{background-color:#3473e4}"]});let t=e;return t})();function Jt(t,e){if(t&1){let n=be();u(0,"div",2)(1,"div",3)(2,"h2"),d(3),l(),u(4,"p"),d(5),l()(),u(6,"div",4)(7,"button",5),p("click",function(){let o=ee(n).$implicit,s=oe();return te(s.editNote(o))}),d(8,"Edit Note"),l(),u(9,"button",6),p("click",function(){let o=ee(n).$implicit,s=oe();return te(s.deleteNote(o.id))}),d(10,"Delete Note"),l()()()}if(t&2){let n=e.$implicit;v(3),x(n.title),v(2),x(n.content)}}var pt=(()=>{let e=class e{constructor(i){this.noteService=i,this.notes=[],this.selectedNote=new V}ngOnInit(){this.noteService.getNotesObservable().subscribe(i=>{this.notes=i})}editNote(i){this.noteService.setEditable(!0),this.selectedNote.emit(i)}deleteNote(i){this.noteService.deleteNote(i)}};e.\u0275fac=function(r){return new(r||e)(a(I))},e.\u0275cmp=M({type:e,selectors:[["app-note-list"]],outputs:{selectedNote:"selectedNote"},decls:2,vars:1,consts:[[1,"note-list-wrapper"],["class","note-list",4,"ngFor","ngForOf"],[1,"note-list"],[1,"note-items"],[1,"note-btn"],[1,"note-list-btn","note-list-edit-btn",3,"click"],[1,"note-list-btn","note-list-delete-btn",3,"click"]],template:function(r,o){r&1&&(u(0,"div",0),Ve(1,Jt,11,2,"div",1),l()),r&2&&(v(1),A("ngForOf",o.notes))},dependencies:[Me],styles:[".note-list[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:30px;margin:40px 0;gap:35px;border-radius:10px;box-shadow:#00000029 0 1px 4px}.note-list-btn[_ngcontent-%COMP%]{padding:12px 20px;margin:10px;border-radius:8px;border:none;cursor:pointer;min-width:115px}.note-list-edit-btn[_ngcontent-%COMP%]{background-color:#90ee90}.note-list-edit-btn[_ngcontent-%COMP%]:hover{background-color:#81f981}.note-list-delete-btn[_ngcontent-%COMP%]{background-color:#ff8787fa}.note-list-delete-btn[_ngcontent-%COMP%]:hover{background-color:#ff6e6efa}"]});let t=e;return t})();var J=(()=>{let e=class e{constructor(){this.title="To-Do-List"}selectedEditableNote(i){this.selectedNoteFromParent=i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=M({type:e,selectors:[["app-root"]],decls:8,vars:1,consts:[[1,"note-app-wrapper"],[1,"container"],[1,"heading"],[1,"note-form-wrapper"],[3,"selectedNote"],[1,"note-list-wrapper"]],template:function(r,o){r&1&&(u(0,"div",0)(1,"div",1)(2,"h1",2),d(3,"Create Your Note"),l(),u(4,"div",3),N(5,"app-note-form",4),l(),u(6,"div",5)(7,"app-note-list",4),p("selectedNote",function(c){return o.selectedEditableNote(c)}),l()()()()),r&2&&(v(5),A("selectedNote",o.selectedNoteFromParent))},dependencies:[ft,pt],styles:[".note-app-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{max-width:800px;margin:auto}.note-app-wrapper[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{text-align:center;padding-bottom:25px}"]});let t=e;return t})();var mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e,bootstrap:[J]}),e.\u0275inj=h({providers:[we(),I],imports:[Ee,ht,Ae,ut,dt]});let t=e;return t})();var ei=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e,bootstrap:[J]}),e.\u0275inj=h({imports:[mt,Fe]});let t=e;return t})();export{ei as a};