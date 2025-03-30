"use strict";(self.webpackChunkcrud_pedidos=self.webpackChunkcrud_pedidos||[]).push([[736],{1015:(e,i,n)=>{n.d(i,{A:()=>x});var r=n(366),o=n(2483),t=n(4015),a=n(7013),d=n(4584);const l=d.i7`${a.ni}`,s=d.Ay.div`
  display: flex;
  flex-direction: column;

  div {
    justify-content: space-between;

    flex-wrap: nowrap;
    padding-left: 2px;
    padding-right: 2px;
    width: 100%;

    height: auto;

    label {
      color: ${t.T.cinza};
      font-weight: ${e=>e.isRequired?600:500};
      white-space: nowrap;
    }
  }
`,c=(d.Ay.label`
  color: ${t.T.cinza};
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 600;
`,d.Ay.input`
  border-radius: 6px;
  border: 1px solid ${e=>e.invalid?"red":"#cac8c8"};
  font-weight: bold;
  line-height: 1.3;
  color: ${t.T.cinza};
  background-color: ${t.T.branco};
  width: 100%;
  text-transform: ${e=>e.uppercase?"uppercase":"none"};

  ${e=>e.invalid&&d.AH`
      animation: 0.6s ${l};
    `}

  &:focus {
    background-color: ${t.T.branco};
    border: 1px solid ${e=>e.invalid?"red":"#8e93eb"};
    outline: 0;
    box-shadow: 0 0 0 1px ${e=>e.invalid?"#ff8484":"#8e93eb"};
  }

  &:read-only {
    background-color: #f9f9f9;
    border: 1px solid ${e=>e.invalid?"red":"#cac8c8"};
    outline: 0;
    box-shadow: none;
  }

  @media (max-width: 599px) {
    padding: 4px 8px;
    font-size: 12px;
  }

  @media (min-width: 600px) {
    padding: 4px 8px;
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    padding: 4px 8px;
    font-size: 14px;
  }

  @media (min-width: 1440px) {
    padding: 6px 10px;
    font-size: 15px;
  }
`);var p=n(6723);const x=e=>{let{name:i,label:n,isUppercase:a=!0,isRequired:d,onChangeExternal:l,maxLength:x,...u}=e;const h=(0,o.useRef)(null),{fieldName:f,defaultValue:m="",registerField:g,error:b}=(0,r.Mt)(i);(0,o.useEffect)((()=>{g({name:f,ref:h.current,path:"value"})}),[f,g]);return(0,p.jsxs)(s,{isRequired:Boolean(d),children:[(0,p.jsx)("div",{children:(0,p.jsx)("label",{htmlFor:f,children:n})}),(0,p.jsx)(c,{ref:h,name:f,id:f,defaultValue:m,onBlur:e=>{a&&(e.target.value=`${e.target.value}`.toUpperCase())},uppercase:Boolean(a),invalid:b,maxLength:x,onChange:l&&u.onChange,...u}),b&&(0,p.jsx)("div",{children:(0,p.jsx)("span",{style:{color:t.T.vermelhoErro,display:"block"},children:b})})]})}},4736:(e,i,n)=>{n.r(i),n.d(i,{default:()=>U});var r=n(2483),o=n.t(r,2),t=n(344),a=n(1366);var d=n(7162);function l(e,i,n,o,a){const[d,l]=r.useState((()=>a&&n?n(e).matches:o?o(e).matches:i));return(0,t.A)((()=>{let i=!0;if(!n)return;const r=n(e),o=()=>{i&&l(r.matches)};return o(),r.addListener(o),()=>{i=!1,r.removeListener(o)}}),[e,n]),d}const s=o.useSyncExternalStore;function c(e,i,n,o,t){const a=r.useCallback((()=>i),[i]),d=r.useMemo((()=>{if(t&&n)return()=>n(e).matches;if(null!==o){const{matches:i}=o(e);return()=>i}return a}),[a,e,o,t,n]),[l,c]=r.useMemo((()=>{if(null===n)return[a,()=>()=>{}];const i=n(e);return[()=>i.matches,e=>(i.addListener(e),()=>{i.removeListener(e)})]}),[a,n,e]);return s(c,l,d)}function p(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=(0,d.A)(),r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:o=!1,matchMedia:t=(r?window.matchMedia:null),ssrMatchMedia:p=null,noSsr:x=!1}=function(e){const{theme:i,name:n,props:r}=e;return i&&i.components&&i.components[n]&&i.components[n].defaultProps?(0,a.A)(i.components[n].defaultProps,r):r}({name:"MuiUseMediaQuery",props:i,theme:n});let u="function"===typeof e?e(n):e;u=u.replace(/^@media( ?)/m,"");return(void 0!==s?c:l)(u,o,t,p,x)}var x=n(7679),u=n(3376),h=n(1015),f=n(1735),m=n(6736),g=n(5809),b=n(947);const y=b.Ik().shape({nome_usuario:b.Yj().required("Campo Obrigat\xf3rio"),senha_usuario:b.Yj().required("Campo Obrigat\xf3rio")});var v=n(4584),w=n(4015);const j=v.Ay.div`
  display: flex;
  width: 100%;
  height: 100dvh;
`,A=v.Ay.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: ${w.T.primaria};
  justify-content: center;
  align-items: center;
  padding-inline: 20px;
`,$=v.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: fit-content;
  margin-bottom: 80px;
`,k=v.Ay.h1`
  margin: 0;
  font-size: 32px;
  font-weight: bold;
  color: ${w.T.branco};
`,z=v.Ay.div`
  display: flex;
  width: 450px;
  height: 450px;
  border: 1px solid ${w.T.branco};
  border-radius: 100%;
  position: fixed;
  bottom: -220px;
  left: -150px;
`,T=v.Ay.div`
  display: flex;
  width: 450px;
  height: 450px;
  border: 1px solid ${w.T.branco};
  border-radius: 100%;
  position: fixed;
  bottom: -240px;
  left: -100px;
`,_=v.Ay.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: center;
  align-items: center;
  padding-inline: 20px;
  background-color: ${w.T.primariaBranca};
`,M=v.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 70%;
`,E=v.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,C=v.Ay.h2`
  margin: 0px;
  font-size: 20px;
`,F=v.Ay.button`
  display: inline-block;
  padding: .65rem 1.0rem;
  border-radius: 10rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: .15rem;
  transition: all .3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border: none;
  cursor: pointer;

  /* Pseudo-elemento ::after */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1E1E1E;
    border-radius: 10rem;
    z-index: -2;
  }

  /* Pseudo-elemento ::before */
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #00A9FF;
    transition: all .5s;
    border-radius: 10rem;
    z-index: -1;
  }

  /* Efeito de hover */
  &:hover {
    color: #000000;

    &::before {
      width: 100%;
    }
  }
`,S=v.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  margin-left: 0px;
  padding-inline: 20px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: linear-gradient(
    to bottom,
    ${w.T.primaria} 50%,
    ${w.T.primariaBranca} 50%
  );
`,L=(v.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,v.Ay.img`
  display: flex;
  width: 200px;
`,v.Ay.h1`
  font-size: 28px;
  color: ${w.T.branco};
  text-align: center;
`,v.Ay.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 90px;
  border-radius: 6px;
  box-shadow: 12px 12px 12px 12px rgba(0, 0, 0, 0.1);
  background-color: ${w.T.branco};
`),q=v.Ay.h2`
  text-align: center;
  font-size: 24px;
`,B=v.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
`,P=v.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;var R=n(6723);function U(){const e=p("(max-width: 680px)"),{setIsLoading:i}=(0,f.A)(),n=(0,r.useRef)(null),o=(0,u.Zp)(),t=async()=>{try{const e={nome_usuario:n.current.getFieldValue("nome_usuario"),senha_usuario:n.current.getFieldValue("senha_usuario")};if(!await(0,g.aW)(y,e,n))return;i(!0),o("/pedidos")}catch(e){(0,g.Yx)(e)}finally{i(!1)}};return(0,R.jsxs)(R.Fragment,{children:[!e&&(0,R.jsxs)(j,{children:[(0,R.jsxs)(A,{children:[(0,R.jsx)($,{children:(0,R.jsx)(k,{children:"Gest\xe3o de Pedidos"})}),(0,R.jsx)(z,{}),(0,R.jsx)(T,{})]}),(0,R.jsx)(_,{children:(0,R.jsxs)(M,{children:[(0,R.jsx)(E,{children:(0,R.jsx)(C,{children:"Fa\xe7a seu login"})}),(0,R.jsx)(x.l,{onSubmit:t,ref:n,children:(0,R.jsxs)(m.eH,{fDirection:"column",children:[(0,R.jsx)(m.Jf,{children:(0,R.jsx)(h.A,{name:"nome_usuario",label:"Usu\xe1rio"})}),(0,R.jsx)(m.Jf,{children:(0,R.jsx)(h.A,{name:"senha_usuario",label:"Senha",type:"password"})}),(0,R.jsx)(F,{children:"Entrar"})]})})]})})]}),e&&(0,R.jsx)(S,{children:(0,R.jsxs)(L,{children:[(0,R.jsx)(q,{children:"Fa\xe7a seu login"}),(0,R.jsxs)(x.l,{onSubmit:t,ref:n,style:{width:"100%"},children:[(0,R.jsxs)(B,{children:[(0,R.jsx)(m.Jf,{children:(0,R.jsx)(h.A,{name:"nome_usuario",label:"Usu\xe1rio"})}),(0,R.jsx)(m.Jf,{children:(0,R.jsx)(h.A,{name:"senha_usuario",label:"Senha",type:"password"})})]}),(0,R.jsx)(P,{children:(0,R.jsx)(F,{children:"Entrar"})})]})]})})]})}}}]);
//# sourceMappingURL=736.7559d75c.chunk.js.map