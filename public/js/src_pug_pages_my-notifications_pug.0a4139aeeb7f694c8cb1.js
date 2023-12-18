(self["webpackChunk_1paid_markup"] = self["webpackChunk_1paid_markup"] || []).push([["src_pug_pages_my-notifications_pug"],{

/***/ "./src/pug/components/_navigation-profile.pug":
/*!****************************************************!*\
  !*** ./src/pug/components/_navigation-profile.pug ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var navList = [
  {
    link: '#', label: 'Мои профиль', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.96 8.28496C12.5719 7.06555 13.2053 4.99292 12.5375 3.12364C11.8696 1.25436 10.0475 0 8 0C5.95247 0 4.13036 1.25436 3.46251 3.12364C2.79466 4.99292 3.42813 7.06555 5.04 8.28496C1.99965 9.45436 0.00337721 12.2942 0 15.4548V16.2274C0 16.6541 0.358172 17 0.8 17C1.24183 17 1.6 16.6541 1.6 16.2274V15.4548C1.6 12.0412 4.46538 9.2739 8 9.2739C11.5346 9.2739 14.4 12.0412 14.4 15.4548V16.2274C14.4 16.6541 14.7582 17 15.2 17C15.6418 17 16 16.6541 16 16.2274V15.4548C15.9966 12.2942 14.0003 9.45436 10.96 8.28496ZM4.7998 4.6382C4.7998 2.9314 6.23249 1.54776 7.9998 1.54776C9.76712 1.54776 11.1998 2.9314 11.1998 4.6382C11.1998 6.345 9.76712 7.72864 7.9998 7.72864C7.15111 7.72864 6.33718 7.40304 5.73706 6.82347C5.13695 6.2439 4.7998 5.45783 4.7998 4.6382Z" class="_to-gradient"/><defs><linearGradient id="icon_primary_gradient" x1="3.18182" y1="16.0636" x2="13.4359" y2="5.98946" gradientUnits="userSpaceOnUse"><stop stop-color="#339CFC"/><stop offset="1" stop-color="#1E61EB"/></linearGradient></defs></svg>',
  },
  {
    link: '#', label: 'Мои товары', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.6 0H2.296C1.02978 0.0042394 0.00438903 0.994671 0 2.21773V14.6818C0 15.9621 1.07452 17 2.4 17H13.6C14.9255 17 16 15.9621 16 14.6818V2.31818C16 1.03789 14.9255 0 13.6 0ZM12.7199 1.54546C13.5004 1.50959 14.2007 2.00562 14.3999 2.73546C14.5531 3.27168 14.3961 3.84607 13.9889 4.23941C13.5817 4.63275 12.987 4.78436 12.4319 4.63637C11.6763 4.44397 11.1627 3.76757 11.1999 3.01364V1.54546H12.7199ZM9.60004 1.54546V3.09091C9.60226 3.59138 9.35344 4.06191 8.93235 4.35353C8.51127 4.64515 7.97005 4.72176 7.48004 4.5591C6.80262 4.33535 6.36153 3.70417 6.40004 3.01364V1.54546H9.60004ZM4.79995 1.54546V3.09091C4.80217 3.59138 4.55335 4.06191 4.13226 4.35353C3.71117 4.64515 3.16996 4.72176 2.67995 4.5591C2.00845 4.33694 1.56875 3.71403 1.59995 3.0291V2.31819C1.59995 1.89142 1.95812 1.54546 2.39995 1.54546H4.79995ZM5.6001 15.4545V11.5909C5.59945 10.8999 5.91794 10.2447 6.46877 9.80382C7.01959 9.36294 7.74531 9.18238 8.4481 9.31136C9.61048 9.55255 10.4305 10.5588 10.4001 11.7068V15.4545H5.6001ZM13.6001 15.4545H12.0001V11.5909C12.0003 10.4306 11.4607 9.33157 10.5302 8.59761C9.5998 7.86366 8.37712 7.57248 7.2001 7.80455C5.30355 8.21795 3.96757 9.86003 4.0001 11.7377V15.4545H2.4001C1.95827 15.4545 1.6001 15.1086 1.6001 14.6818V5.76455C2.5154 6.2662 3.62304 6.31783 4.5841 5.90364C4.988 5.72727 5.34401 5.46275 5.6241 5.13091C6.38601 5.95434 7.54488 6.32255 8.6641 6.09682C9.34408 5.96213 9.95634 5.60784 10.4001 5.09228C10.8557 5.63462 11.4969 6.00185 12.2081 6.12773C12.9602 6.2637 13.7379 6.13486 14.4001 5.76455V14.6818C14.4001 15.1086 14.0419 15.4545 13.6001 15.4545Z" fill="#CDD6E6" class="_to-gradient"/><defs><linearGradient id="icon_primary_gradient" x1="3.18182" y1="16.0636" x2="13.4359" y2="5.98946" gradientUnits="userSpaceOnUse"><stop stop-color="#339CFC"/><stop offset="1" stop-color="#1E61EB"/></linearGradient></defs></svg>',
  },
  {
    link: '#', label: 'Стол заказов', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.989 2.89044C13.2737 2.88234 13.5446 3.01157 13.7163 3.23729L15.8254 6.03379C15.9406 6.18286 16.0021 6.3661 15.9999 6.55407V10.6946C15.9999 11.1735 15.6092 11.5617 15.1272 11.5617H13.0909C13.0497 11.5652 13.0084 11.5652 12.9672 11.5617C12.657 12.4243 11.8346 13 10.9127 13C9.99081 13 9.16841 12.4243 8.85815 11.5617H6.41452C6.10134 12.4191 5.28157 12.99 4.36362 12.99C3.44567 12.99 2.6259 12.4191 2.31272 11.5617H2.18181C0.97683 11.5617 0 10.5912 0 9.39392V2.16783C0 0.97057 0.97683 0 2.18181 0H9.45451C10.6595 0 11.6363 0.97057 11.6363 2.16783V2.89044H12.989ZM3.63623 10.8391C3.63623 11.2382 3.96184 11.5618 4.3635 11.5618C4.76516 11.5618 5.09077 11.2382 5.09077 10.8391C5.09077 10.4401 4.76516 10.1165 4.3635 10.1165C3.96184 10.1165 3.63623 10.4401 3.63623 10.8391ZM10.9092 11.5618C10.5075 11.5618 10.1819 11.2382 10.1819 10.8391C10.1819 10.4401 10.5075 10.1165 10.9092 10.1165C11.3108 10.1165 11.6364 10.4401 11.6364 10.8391C11.6364 11.2382 11.3108 11.5618 10.9092 11.5618ZM13.0909 10.1165H14.5455V6.74195L12.7273 4.33566H11.6364V7.2261C11.6364 7.62518 11.3108 7.94871 10.9091 7.94871C10.5074 7.94871 10.1818 7.62518 10.1818 7.2261V2.16783C10.1818 1.76875 9.85622 1.44522 9.45456 1.44522H2.18186C1.7802 1.44522 1.45459 1.76875 1.45459 2.16783V9.39392C1.45459 9.79301 1.7802 10.1165 2.18186 10.1165H2.31277C2.62595 9.25919 3.44572 8.68831 4.36367 8.68831C5.28162 8.68831 6.10139 9.25919 6.41457 10.1165H8.8582C9.16846 9.25399 9.99086 8.67828 10.9127 8.67828C11.8346 8.67828 12.657 9.25399 12.9673 10.1165C13.0084 10.113 13.0498 10.113 13.0909 10.1165Z" fill="#CDD6E6" class="_to-gradient"/><defs><linearGradient id="icon_primary_gradient" x1="3.18182" y1="16.0636" x2="13.4359" y2="5.98946" gradientUnits="userSpaceOnUse"><stop stop-color="#339CFC"/><stop offset="1" stop-color="#1E61EB"/></linearGradient></defs></svg>',
  },
  {
    link: '#', label: 'Достижения', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="19" viewBox="0 0 14 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.58303 6.72918L2.32083 6.28808L0.887514 3.9442C0.394953 3.14351 0.377094 2.14215 0.840797 1.32476C1.3045 0.507366 2.17766 0.00103732 3.12489 0.000256734H10.6149C11.9081 -0.0176245 13.0213 0.900436 13.2368 2.16251C13.3605 2.83867 13.1995 3.5355 12.7911 4.09123L11.1218 6.40917C11.1193 6.42638 11.1193 6.44385 11.1218 6.46106C12.9857 7.78693 14.063 9.94193 13.9971 12.2126C13.9983 14.0572 13.2223 15.8188 11.8559 17.0734C9.11913 19.6721 4.78771 19.6376 2.0936 16.9955C0.649219 15.6401 -0.112735 13.7201 0.0135385 11.7542C0.0968235 9.79068 1.03364 7.95857 2.58303 6.72918ZM1.76172 12.0916C1.76172 14.9576 4.10947 17.281 7.00557 17.281C9.90167 17.281 12.2494 14.9576 12.2494 12.0916C12.2494 9.22553 9.90167 6.90216 7.00557 6.90216C4.10947 6.90216 1.76172 9.22553 1.76172 12.0916ZM9.4088 5.62211C7.67355 4.98337 5.75314 5.0518 4.06881 5.81239C3.94995 5.62211 3.83668 5.43183 3.72341 5.24155C3.55351 4.95613 3.38361 4.67072 3.19483 4.3853L2.37329 3.04471C2.1385 2.66519 2.23302 2.1713 2.59179 1.90304C2.7502 1.78528 2.94435 1.72429 3.14239 1.73006H10.5712C10.9117 1.71369 11.2307 1.89476 11.3884 2.19387C11.5461 2.49297 11.5137 2.85552 11.3053 3.12255L9.55737 5.57021C9.52241 5.62211 9.48745 5.62211 9.4088 5.62211Z" class="_to-gradient" /><path d="M6.48944 11.6937C6.36053 11.7407 6.22926 11.7811 6.09616 11.8148C5.73506 11.854 5.38712 11.668 5.22218 11.3477C5.05608 11.021 5.11557 10.6262 5.37076 10.3617C5.79026 9.94658 6.24473 9.49683 6.63802 9.11627C6.81114 8.92992 7.04153 8.80527 7.2935 8.76166C7.52416 8.73745 7.75508 8.80498 7.9354 8.94936C8.11572 9.09374 8.23065 9.30314 8.25487 9.53142C8.25487 9.59197 8.25487 9.64386 8.25487 9.7044V14.7208C8.27546 15.025 8.13268 15.3175 7.87907 15.4906C7.61936 15.6992 7.26215 15.7428 6.95902 15.6029C6.65588 15.463 6.46 15.1642 6.45449 14.8333C6.45449 13.8213 6.45449 12.818 6.45449 11.8148L6.48944 11.6937Z" class="_to-gradient" /><defs><linearGradient id="icon_primary_gradient" x1="3.18182" y1="16.0636" x2="13.4359" y2="5.98946" gradientUnits="userSpaceOnUse"><stop stop-color="#339CFC"/><stop offset="1" stop-color="#1E61EB"/></linearGradient><linearGradient id="paint1_linear_437_28722" x1="5.8398" y1="14.6134" x2="9.14429" y2="12.6238" gradientUnits="userSpaceOnUse"><stop stop-color="#339CFC"/><stop offset="1" stop-color="#1E61EB"/></linearGradient></defs></svg>'
  },
  {
    link: '#', label: 'Настройки', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.95904 4.75549C6.3604 4.75549 5.06445 5.9721 5.06445 7.47286C5.06445 8.97362 6.3604 10.1902 7.95904 10.1902C9.55768 10.1902 10.8536 8.97362 10.8536 7.47286C10.8536 6.75217 10.5487 6.061 10.0058 5.55139C9.46299 5.04179 8.72674 4.75549 7.95904 4.75549ZM7.95926 8.83155C7.15994 8.83155 6.51196 8.22325 6.51196 7.47287C6.51196 6.72249 7.15994 6.11419 7.95926 6.11419C8.75858 6.11419 9.40655 6.72249 9.40655 7.47287C9.40655 8.22325 8.75858 8.83155 7.95926 8.83155Z" class="_to-gradient"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0316 5.11551C14.6956 4.30361 14.6151 3.15531 13.8435 2.43212L13.3297 1.94978C12.5544 1.20562 11.3064 1.12947 10.4351 1.77315C10.2955 0.772508 9.39685 0.0184441 8.32202 7.44375e-05H7.59838C6.50149 -0.00865932 5.57 0.752121 5.42743 1.77315C4.56258 1.14981 3.33939 1.2254 2.56903 1.94978L2.05524 2.43212C1.28361 3.15531 1.20309 4.30361 1.86709 5.11551C0.796311 5.25764 0.000243134 6.11794 7.92922e-05 7.13316V7.8125C-0.00922407 8.84223 0.801174 9.71669 1.8888 9.85052C1.20313 10.6685 1.28425 11.8401 2.07695 12.5679L2.59074 13.0502C3.36109 13.7746 4.58429 13.8502 5.44914 13.2268C5.5917 14.2479 6.5232 15.0087 7.62009 14.9999H8.34373C9.44062 15.0087 10.3721 14.2479 10.5147 13.2268C11.386 13.8705 12.634 13.7944 13.4093 13.0502L13.9231 12.5679C14.7157 11.8401 14.7969 10.6685 14.1112 9.85052C15.1988 9.71669 16.0092 8.84223 15.9999 7.8125V7.13316C15.9936 6.08568 15.1425 5.21326 14.0316 5.11551ZM14.4732 7.83287C14.4732 8.20806 14.1492 8.51221 13.7495 8.51221C13.2165 8.50934 12.7348 8.81 12.5313 9.27252C12.3279 9.73505 12.4433 10.2672 12.8232 10.6182C13.1038 10.8831 13.1038 11.3111 12.8232 11.576L12.3095 12.0584C12.0272 12.3218 11.5714 12.3218 11.2891 12.0584C10.918 11.7043 10.3564 11.5947 9.86571 11.7804C9.37499 11.9662 9.05152 12.4109 9.04581 12.9076C9.04581 13.2827 8.72182 13.5869 8.32216 13.5869H7.59851C7.19885 13.5869 6.87487 13.2827 6.87487 12.9076C6.87792 12.4072 6.55766 11.9549 6.06497 11.764C5.57228 11.573 5.00545 11.6813 4.63156 12.038C4.34931 12.3014 3.89347 12.3014 3.61122 12.038L3.09743 11.5489C2.81685 11.2839 2.81685 10.856 3.09743 10.591C3.47211 10.2393 3.58421 9.71039 3.38144 9.25087C3.17868 8.79134 2.70098 8.49176 2.17116 8.49183C1.7715 8.49183 1.44751 8.18768 1.44751 7.81249V7.13315C1.44751 6.75796 1.7715 6.45381 2.17116 6.45381C2.70418 6.45668 3.1859 6.15603 3.38933 5.6935C3.59276 5.23098 3.47733 4.69886 3.09743 4.34785C2.82161 4.0837 2.82161 3.66093 3.09743 3.39678L3.61845 2.90765C3.9007 2.64425 4.35654 2.64425 4.63879 2.90765C5.0134 3.25939 5.57684 3.36463 6.06633 3.17428C6.55582 2.98393 6.87495 2.53548 6.87487 2.03809C6.87487 1.6629 7.19885 1.35875 7.59851 1.35875H8.32216C8.72182 1.35875 9.04581 1.6629 9.04581 2.03809C9.04275 2.53848 9.36301 2.99071 9.8557 3.18168C10.3484 3.37266 10.9152 3.2643 11.2891 2.90765C11.5714 2.64425 12.0272 2.64425 12.3095 2.90765L12.8232 3.38998C13.1038 3.65495 13.1038 4.08288 12.8232 4.34785C12.4433 4.69886 12.3279 5.23098 12.5313 5.6935C12.7348 6.15603 13.2165 6.45668 13.7495 6.45381C14.1492 6.45381 14.4732 6.75796 14.4732 7.13315V7.83287Z" class="_to-gradient"/><defs><linearGradient id="icon_primary_gradient" x1="3.18182" y1="16.0636" x2="13.4359" y2="5.98946" gradientUnits="userSpaceOnUse"><stop stop-color="#339CFC"/><stop offset="1" stop-color="#1E61EB"/></linearGradient></defs></svg>',
  },
  {
    link: '#', label: 'Пополение и вывод', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0909 2.15375H11.4545V1.80426C11.4534 1.23808 11.1722 0.705122 10.6947 0.364283C10.2173 0.0234431 9.59879 -0.0859001 9.02364 0.0688552L1.73727 2.03926C1.62982 2.07106 1.5332 2.12928 1.45727 2.20798C0.603057 2.405 0.00139898 3.12895 0 3.96146V11.1923C0 12.1907 0.854729 13 1.90909 13H12.0909C13.1453 13 14 12.1907 14 11.1923V3.96146C14 2.96309 13.1453 2.15375 12.0909 2.15375ZM9.37357 1.22578C9.56938 1.17365 9.77971 1.21328 9.93951 1.33243C10.0993 1.45158 10.1893 1.63589 10.1818 1.82835V2.17784H5.9563L9.37357 1.22578ZM12.7271 8.17945H10.818C10.4665 8.17945 10.1816 7.90967 10.1816 7.57688C10.1816 7.24409 10.4665 6.97431 10.818 6.97431H12.7271V8.17945ZM12.7273 5.76917H10.9136C9.96821 5.74629 9.13951 6.36392 8.94089 7.23944C8.83467 7.76878 8.98336 8.31541 9.34644 8.73029C9.70952 9.14518 10.2491 9.38507 10.8182 9.38458H12.7273V11.1923C12.7273 11.5251 12.4423 11.7949 12.0909 11.7949H1.90907C1.55761 11.7949 1.27271 11.5251 1.27271 11.1923V3.96146C1.27271 3.62867 1.55761 3.35889 1.90907 3.35889H12.0909C12.4423 3.35889 12.7273 3.62867 12.7273 3.96146V5.76917Z" class="_to-gradient"/><defs><linearGradient id="icon_primary_gradient" x1="3.18182" y1="16.0636" x2="13.4359" y2="5.98946" gradientUnits="userSpaceOnUse"><stop stop-color="#339CFC"/><stop offset="1" stop-color="#1E61EB"/></linearGradient></defs></svg>',
  },
  {
    link: '#', label: 'Реферальная система', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.81449 7.15236H8.70567C8.70567 7.13139 8.69116 7.08945 8.69116 7.08945V6.05484C8.69116 5.98494 8.72018 5.98494 8.75645 5.98494C8.9717 5.91019 9.18242 5.82384 9.3876 5.72629C10.4614 5.15071 11.0426 3.98582 10.8385 2.81822C10.6134 1.58131 9.56016 0.64073 8.26314 0.518331C7.33684 0.41438 6.41688 0.756942 5.80383 1.43409C5.20517 2.05016 4.94894 2.90524 5.11464 3.73398C5.25533 4.83342 6.07739 5.73911 7.18946 6.01989C7.23178 6.03013 7.2597 6.06899 7.25475 6.11077V7.08246V7.15935H5.12189C4.9661 7.15913 4.81063 7.17317 4.6576 7.20129C3.70661 7.37776 2.99104 8.13851 2.90198 9.06777V9.60604H2.80767H1.93712C0.861975 9.72009 0.0369038 10.5777 0.000133194 11.6193V12.4023C-0.00412177 12.7654 0.0936406 13.1229 0.283063 13.4369C0.67848 14.1092 1.42555 14.5175 2.2273 14.4994H5.07836C5.2322 14.4863 5.38491 14.4629 5.5354 14.4295C6.43695 14.2484 7.1226 13.5401 7.24749 12.6609C7.26562 12.3582 7.26562 12.0548 7.24749 11.7521C7.25013 11.5976 7.23799 11.4432 7.21122 11.2908C7.02924 10.3885 6.25876 9.70558 5.31051 9.60604H4.44721H4.3529V9.20758C4.37962 8.84074 4.69672 8.55656 5.07836 8.55746H10.8966C11.1275 8.56073 11.343 8.66976 11.4769 8.85106C11.6041 9.08246 11.65 9.3474 11.6075 9.60604H11.4987H10.6427C9.70185 9.68248 8.91949 10.3347 8.70567 11.2209C8.62586 11.6978 8.62586 12.184 8.70567 12.6609C8.84187 13.7171 9.77754 14.5075 10.8821 14.4994H13.7839C14.7852 14.5067 15.6625 13.8547 15.9095 12.9196C16.0097 12.4268 16.0268 11.9216 15.9603 11.4236C15.8441 10.5922 15.2248 9.90753 14.386 9.68294C14.1882 9.63929 13.9867 9.61355 13.7839 9.60604H13.0584V9.46623C13.0695 9.27997 13.0695 9.09325 13.0584 8.90699C12.8874 7.91012 12.003 7.1725 10.9546 7.15236H8.81449ZM5.07828 13.1013H3.62736H2.22722C2.01566 13.1163 1.80789 13.0414 1.65859 12.8961C1.50929 12.7509 1.43343 12.55 1.45097 12.3463V11.7032C1.45097 11.3171 1.77577 11.0041 2.17644 11.0041H5.07828C5.47894 11.0041 5.80374 11.3171 5.80374 11.7032V12.4023C5.80374 12.7883 5.47894 13.1013 5.07828 13.1013ZM12.3328 13.1013H13.8273C14.2109 13.0791 14.5099 12.7725 14.5092 12.4023V11.7032C14.5092 11.3171 14.1844 11.0042 13.7838 11.0042H10.8819C10.5272 10.9986 10.2203 11.2411 10.1565 11.5774C10.1493 11.6751 10.1493 11.7732 10.1565 11.871V12.3673C10.1465 12.5587 10.2185 12.7456 10.3557 12.8844C10.4928 13.0231 10.6831 13.1016 10.8819 13.1013H12.3328ZM7.97998 1.91643C8.7813 1.91643 9.4309 2.54239 9.4309 3.31454C9.4309 4.0867 8.7813 4.71265 7.97998 4.71265C7.17865 4.71265 6.52905 4.0867 6.52905 3.31454C6.52905 2.54239 7.17865 1.91643 7.97998 1.91643Z" class="_to-gradient"/><defs><linearGradient id="icon_primary_gradient" x1="3.18182" y1="16.0636" x2="13.4359" y2="5.98946" gradientUnits="userSpaceOnUse"><stop stop-color="#339CFC"/><stop offset="1" stop-color="#1E61EB"/></linearGradient></defs></svg>',
  },
  {
    link: '#', label: 'Выйти из аккаунта', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.88308 11.5556H1.55323V1.44444H3.88308C4.08905 1.44444 4.28657 1.36834 4.43222 1.2329C4.57786 1.09746 4.65969 0.913767 4.65969 0.722222C4.65969 0.530677 4.57786 0.346987 4.43222 0.211544C4.28657 0.0761015 4.08905 0 3.88308 0H0.776616C0.570644 0 0.37312 0.0761015 0.227477 0.211544C0.081833 0.346987 0 0.530677 0 0.722222V12.2778C0 12.4693 0.081833 12.6531 0.227477 12.7885C0.37312 12.9239 0.570644 13 0.776616 13H3.88308C4.08905 13 4.28657 12.9239 4.43222 12.7885C4.57786 12.6531 4.65969 12.4693 4.65969 12.2778C4.65969 12.0862 4.57786 11.9025 4.43222 11.7671C4.28657 11.6316 4.08905 11.5556 3.88308 11.5556ZM13.7539 5.98721L9.09416 1.65387C8.94586 1.52075 8.74677 1.44789 8.54069 1.45128C8.3346 1.45466 8.13842 1.53403 7.99527 1.67195C7.85212 1.80986 7.77373 1.99498 7.77737 2.18664C7.78101 2.37829 7.86638 2.56075 8.01468 2.69387L11.3463 5.79224H3.88308C3.67711 5.79224 3.47958 5.86829 3.33394 6.00374C3.1883 6.13918 3.10646 6.32291 3.10646 6.51446C3.10646 6.706 3.1883 6.88965 3.33394 7.02509C3.47958 7.16053 3.67711 7.23668 3.88308 7.23668H13.2025C13.36 7.24063 13.5151 7.19993 13.6472 7.11995C13.7792 7.03998 13.882 6.92449 13.9419 6.78891C14.0017 6.65332 14.0157 6.50403 13.9822 6.36084C13.9486 6.21764 13.869 6.08732 13.7539 5.98721ZM10.3756 8.47165L8.04573 10.2772C7.89022 10.4036 7.79509 10.5823 7.78126 10.774C7.76742 10.9657 7.83603 11.1546 7.97197 11.2992C8.10791 11.4438 8.30005 11.5323 8.50613 11.5452C8.71222 11.558 8.91536 11.4942 9.07087 11.3678L11.4007 9.56221C11.5562 9.43579 11.6514 9.25707 11.6652 9.06542C11.679 8.87377 11.6104 8.68486 11.4745 8.54024C11.3386 8.39563 11.1464 8.30723 10.9403 8.29436C10.7342 8.28149 10.5311 8.34523 10.3756 8.47165Z" class="_to-gradient"/><defs><linearGradient id="icon_primary_gradient" x1="3.18182" y1="16.0636" x2="13.4359" y2="5.98946" gradientUnits="userSpaceOnUse"><stop stop-color="#339CFC"/><stop offset="1" stop-color="#1E61EB"/></linearGradient></defs></svg>',
  }
]

pug_html = pug_html + "\u003Cdiv class=\"np\"\u003E\u003Cnav class=\"np-nav\"\u003E";
// iterate navList
;(function(){
  var $$obj = navList;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var item = $$obj[pug_index0];
pug_html = pug_html + "\u003Ca" + (" class=\"np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]\""+pug.attr("href", item.link, true, true)) + "\u003E\u003Cdiv class=\"np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full\"\u003E" + (null == (pug_interp = item.icon) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]\"\u003E" + (pug.escape(null == (pug_interp = item.label) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var item = $$obj[pug_index0];
pug_html = pug_html + "\u003Ca" + (" class=\"np-nav-item h-11 px-6 flex items-center gap-x-3 group duration-200 hover:bg-[#F6F9FF]\""+pug.attr("href", item.link, true, true)) + "\u003E\u003Cdiv class=\"np-nav-icon flex-shrink-0 w-4 flex justify-center [&amp;_svg]:max-w-full\"\u003E" + (null == (pug_interp = item.icon) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"np-nav-label font-primary-med text-sm text-[#8A98B3] duration-200 group-hover:text-[#0C0C0C]\"\u003E" + (pug.escape(null == (pug_interp = item.label) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fnav\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/pug/components/_navigation.pug":
/*!********************************************!*\
  !*** ./src/pug/components/_navigation.pug ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var navList = [
  {label: 'Главная', link: '#'},
  {label: 'Каталог', link: '#'},
  {label: 'Топ юзеров', link: '#'},
  {label: 'Отзывы', link: '#'},
  {label: 'Гарантии', link: '#'},
  {label: 'Случайные предметы', link: '#'},
  {label: 'Форум', link: '#'},
]

pug_html = pug_html + "\u003Cnav class=\"nav flex gap-x-5 gap-y-5 flex-wrap mx-4 3xl:gap-x-2.5 lg:flex-col lg:items-start lg:gap-y-8\"\u003E";
// iterate navList
;(function(){
  var $$obj = navList;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var item = $$obj[pug_index0];
pug_html = pug_html + "\u003Ca" + (" class=\"nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white\u002F30\""+pug.attr("href", item.link, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.label) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var item = $$obj[pug_index0];
pug_html = pug_html + "\u003Ca" + (" class=\"nav-link font-primary-bold text-sm text-[#8A98B3] uppercase 3xl:text-xs lg:text-sm lg:text-white\u002F30\""+pug.attr("href", item.link, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.label) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fnav\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/pug/components/_notifications.pug":
/*!***********************************************!*\
  !*** ./src/pug/components/_notifications.pug ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"notif\"\u003E\u003Cbutton class=\"btn btn-secondary notif-btn rounded-full w-11 h-11 justify-center cursor-pointer lg:w-[50px] lg:h-[50px]\"\u003E\u003Cdiv class=\"btn-icon text-white\"\u003E\u003Csvg width=\"16\" height=\"17\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.1339 15.0561C15.1164 13.6921 14.3309 12.4579 13.1111 11.8778V8.0122C13.1541 5.35225 11.2421 3.07229 8.6421 2.68307C7.17902 2.49536 5.70713 2.95641 4.60455 3.9478C3.50197 4.93918 2.87616 6.36427 2.88786 7.85698V11.7522C1.46861 12.2353 0.509251 13.5775 0.5 15.0931C0.505439 15.3331 0.607572 15.5604 0.782704 15.7223C0.957837 15.8842 1.19075 15.9667 1.4274 15.9505H14.2649C14.4973 15.9485 14.7194 15.8532 14.8824 15.6855C15.0454 15.5177 15.1358 15.2913 15.1339 15.0561ZM7.26932 4.19823C8.3437 3.97626 9.45975 4.25478 10.309 4.95682C11.1583 5.65886 11.6509 6.71009 11.6507 7.81997V11.5156H4.34839V7.97519C4.30883 6.17267 5.5311 4.59219 7.26932 4.19823ZM2.07756 14.4722C2.33643 13.5933 3.13585 12.9917 4.04189 12.9939H11.6509C12.5562 12.9941 13.3543 13.5948 13.6153 14.4722H2.07756Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.73 1.47826V0.73913C8.73 0.33092 8.40306 0 7.99976 0C7.59647 0 7.26953 0.33092 7.26953 0.73913V1.47826C7.26953 1.88647 7.59647 2.21739 7.99976 2.21739C8.40306 2.21739 8.73 1.88647 8.73 1.47826Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.73 16.2609V15.5217C8.73 15.1135 8.40306 14.7826 7.99976 14.7826C7.59647 14.7826 7.26953 15.1135 7.26953 15.5217V16.2609C7.26953 16.6691 7.59647 17 7.99976 17C8.40306 17 8.73 16.6691 8.73 16.2609Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.28745 2.80134C2.42457 2.94126 2.61121 3.01997 2.80592 3.01997C3.00063 3.01997 3.18727 2.94126 3.32438 2.80134C3.60751 2.51305 3.60751 2.04745 3.32438 1.75916L2.80592 1.23438C2.6688 1.09445 2.48216 1.01575 2.28745 1.01575C2.09275 1.01575 1.9061 1.09445 1.76899 1.23438C1.48586 1.52267 1.48586 1.98827 1.76899 2.27655L2.28745 2.80134Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.535709 6.05348L1.26594 6.24565C1.64923 6.33604 2.03434 6.10272 2.13672 5.71808C2.23911 5.33345 2.02193 4.93588 1.64566 4.81913L0.91543 4.62695C0.526359 4.52368 0.128036 4.75831 0.0245458 5.15174C-0.0779904 5.54331 0.149977 5.94547 0.535709 6.05348Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.7535 6.29742L15.4837 6.10525C15.86 5.98849 16.0772 5.59093 15.9748 5.20629C15.8724 4.82166 15.4873 4.58834 15.104 4.67873L14.3738 4.8709C13.9975 4.98766 13.7803 5.38523 13.8827 5.76986C13.9851 6.15449 14.3702 6.38781 14.7535 6.29742Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.0305 2.80134L13.549 2.27655C13.8321 1.98827 13.8321 1.52267 13.549 1.23438C13.4119 1.09445 13.2252 1.01575 13.0305 1.01575C12.8358 1.01575 12.6492 1.09445 12.5121 1.23438L11.9936 1.75916C11.7105 2.04745 11.7105 2.51305 11.9936 2.80134C12.1307 2.94126 12.3174 3.01997 12.5121 3.01997C12.7068 3.01997 12.8934 2.94126 13.0305 2.80134Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"notif-content rounded-xl bg-white w-[290px] py-6\"\u003E\u003Cdiv class=\"notif-h px-3 flex items-center justify-between flex-wrap gap-2.5 font-secondary-bold text-sm\"\u003E\u003Cdiv class=\"notif-heading text-black\"\u003E\u003Cspan\u003EУведомления \u003Cspan class=\"extra text-[color:var(--color-green-main)]\"\u003E(+4)\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"notif-total text-[#C8D5ED]\"\u003E(43)\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"notif-b mt-6\"\u003E";
for(var i = 1; i <= 4; i++)
{
pug_html = pug_html + "\u003Cdiv class=\"notif-item p-3 flex items-center gap-2 cursor-pointer duration-200 hover:bg-[#F6F9FF]\"\u003E\u003Cdiv class=\"notif-item-pic btn btn-secondary flex-shrink-0 rounded-full w-11 h-11 justify-center text-white\"\u003E\u003Cdiv class=\"btn-icon\"\u003E\u003Csvg width=\"16\" height=\"13\" viewBox=\"0 0 16 13\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.20975 3.40829H15.1159C15.3645 3.40497 15.6027 3.50787 15.7707 3.69114C15.9387 3.87442 16.0205 4.12066 15.9956 4.36803L15.2685 11.3479C15.2277 11.7888 14.8606 12.1276 14.4179 12.1332H5.21312C4.7899 12.1315 4.43001 11.8239 4.36244 11.4061L2.90829 4.29532L2.34845 1.95415H0.727073C0.325522 1.95415 0 1.62863 0 1.22707C0 0.825522 0.325522 0.5 0.727073 0.5H2.79923C3.19507 0.507287 3.53728 0.778079 3.63537 1.16164L4.20975 3.40829ZM5.69289 10.679H13.8943L14.4759 4.86244H4.52958L5.69289 10.679Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"notif-item-inf flex-grow\"\u003E\u003Cdiv class=\"notif-item-h flex items-center justify-between flex-wrap gap-2 text-xs\"\u003E\u003Cdiv class=\"notif-item-title font-secondary-bold text-black\"\u003EСтол заказа!\u003C\u002Fdiv\u003E\u003Cdiv class=\"notif-item-time font-secondary-med text-[#C5CFE4]\"\u003E22:15\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"notif-item-text font-secondary-med text-[10px] text-[#A6B1C7]\"\u003EТовар по вашему запросу был выставлен на продажу!\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Ca class=\"notif-btnall mt-5 w-full border-b border-[#ECEDF7] py-1 flex justify-center duration-200 hover:bg-[#F6F9FF]\" href=\"#\"\u003E\u003Cdiv class=\"btn-text font-primary-bold text-sm text-[#C5CFE4]\"\u003EПоказать все\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/pug/components/_pagination.pug":
/*!********************************************!*\
  !*** ./src/pug/components/_pagination.pug ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"pag mt-6 flex justify-center items-center gap-2 2md:mt-4 2md:gap-1\"\u003E\u003Ca class=\"pag-arrow mr-4 2md:mr-1\" href=\"#\"\u003E\u003Csvg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M15 6L9.70711 11.2929C9.31658 11.6834 9.31658 12.3166 9.70711 12.7071L15 18\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\u003Ca class=\"pag-item\" href=\"#\"\u003E1\u003C\u002Fa\u003E\u003Ca class=\"pag-item\" href=\"#\"\u003E2\u003C\u002Fa\u003E\u003Ca class=\"pag-item\" href=\"#\"\u003E3\u003C\u002Fa\u003E\u003Ca class=\"pag-item _active\" href=\"#\"\u003E443\u003C\u002Fa\u003E\u003Ca class=\"pag-arrow ml-4 2md:ml-1\" href=\"#\"\u003E\u003Csvg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M9 6L14.2929 11.2929C14.6834 11.6834 14.6834 12.3166 14.2929 12.7071L9 18\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/pug/components/_total-site-card.pug":
/*!*************************************************!*\
  !*** ./src/pug/components/_total-site-card.pug ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"tsc flex gap-2.5 p-3 flex-wrap xl:p-1.5\"\u003E\u003Cdiv class=\"tsc-item flex gap-x-2.5 items-center\"\u003E\u003Cbutton class=\"btn btn-secondary tsc-item-btn flex-shrink-0 w-[50px] h-[50px] [&amp;_svg]:w-1\u002F3 3xl:w-10 3xl:h-10 xl:w-8 xl:h-8\" disabled\u003E\u003Csvg class=\"tsc-item-btn-icon\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.5455 0H2.45455C1.09894 0 0 1.09894 0 2.45455V15.5455C0 16.9011 1.09894 18 2.45455 18H15.5455C16.9011 18 18 16.9011 18 15.5455V2.45455C18 1.09894 16.9011 0 15.5455 0ZM16.3638 15.5455C16.3638 15.9973 15.9975 16.3636 15.5456 16.3636H2.45471C2.00284 16.3636 1.63652 15.9973 1.63652 15.5455V2.45455C1.63652 2.00268 2.00284 1.63636 2.45471 1.63636H8.23925C8.20409 1.72504 8.1847 1.81919 8.18198 1.91455V5.18727C8.18198 5.63914 8.54829 6.00545 9.00016 6.00545C9.45203 6.00545 9.81834 5.63914 9.81834 5.18727V1.91455C9.81561 1.81919 9.79623 1.72504 9.76107 1.63636H15.5456C15.9975 1.63636 16.3638 2.00268 16.3638 2.45455V15.5455Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.5877 12.2727H12.2241C12.6759 12.2727 13.0423 11.9064 13.0423 11.4545C13.0423 11.0027 12.6759 10.6364 12.2241 10.6364H10.5877C10.1358 10.6364 9.76953 11.0027 9.76953 11.4545C9.76953 11.9064 10.1358 12.2727 10.5877 12.2727Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.8604 13.0909H10.5877C10.1358 13.0909 9.76953 13.4572 9.76953 13.9091C9.76953 14.3609 10.1358 14.7272 10.5877 14.7272H13.8604C14.3123 14.7272 14.6786 14.3609 14.6786 13.9091C14.6786 13.4572 14.3123 13.0909 13.8604 13.0909Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"tsc-item-info\"\u003E\u003Cdiv class=\"tsc-item-value text-black text-sm xl:text-xs\"\u003E181 924 365\u003C\u002Fdiv\u003E\u003Cdiv class=\"tsc-item-label mt-0.5 text-xs xl:text-[10px]\"\u003EКуплено товаров\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"tsc-item flex gap-x-2.5 items-center\"\u003E\u003Cbutton class=\"btn btn-primary tsc-item-btn flex-shrink-0 w-[50px] h-[50px] [&amp;_svg]:w-1\u002F3 3xl:w-10 3xl:h-10 xl:w-8 xl:h-8\" disabled\u003E\u003Csvg viewBox=\"0 0 17 19\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.645 9.11485C13.3576 7.77329 14.0307 5.49305 13.3211 3.43653C12.6115 1.38 10.6755 0 8.5 0C6.3245 0 4.3885 1.38 3.67892 3.43653C2.96933 5.49305 3.64239 7.77329 5.355 9.11485C2.12463 10.4014 0.00358828 13.5257 0 17.0028V17.8528C0 18.3223 0.380558 18.7028 0.85 18.7028C1.31944 18.7028 1.7 18.3223 1.7 17.8528V17.0028C1.7 13.2473 4.74446 10.2028 8.5 10.2028C12.2555 10.2028 15.3 13.2473 15.3 17.0028V17.8528C15.3 18.3223 15.6806 18.7028 16.15 18.7028C16.6194 18.7028 17 18.3223 17 17.8528V17.0028C16.9964 13.5257 14.8754 10.4014 11.645 9.11485ZM5.09991 5.10285C5.09991 3.22508 6.62214 1.70285 8.49991 1.70285C10.3777 1.70285 11.8999 3.22508 11.8999 5.10285C11.8999 6.98062 10.3777 8.50285 8.49991 8.50285C7.59817 8.50285 6.73337 8.14464 6.09575 7.50701C5.45812 6.86939 5.09991 6.00458 5.09991 5.10285Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"tsc-item-info\"\u003E\u003Cdiv class=\"tsc-item-value text-black text-sm xl:text-xs\"\u003E486 532\u003C\u002Fdiv\u003E\u003Cdiv class=\"tsc-item-label mt-0.5 text-xs xl:text-[10px]\"\u003EПользователей\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/pug/pages/my-notifications.pug":
/*!********************************************!*\
  !*** ./src/pug/pages/my-notifications.pug ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (bodyNoScroll, isGameNotSelected, pageModificator, pageTitle) {pug_mixins["image"] = pug_interp = function(name, classes='', alt='picture'){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cimg" + (pug.attr("class", pug.classes([classes], [true]), false, true)+pug.attr("src", __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")(`./${name}`), true, true)+pug.attr("alt", alt, true, true)) + "\u003E";
};

































pug_mixins["rating"] = pug_interp = function(classes, starsCount, rating){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["rating",`flex justify-center items-center ${classes}`], [false,true]), false, true)) + "\u003E";
for (var i = 1; i <= starsCount; i++)
{
pug_html = pug_html + "\u003Cspan" + (pug.attr("class", pug.classes(["rating-star",`flex cursor-pointer mr-[5px] last:mr-0 ${i <= rating ? `rating-full` : ''}`], [false,true]), false, true)) + "\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"23\" height=\"22\" viewBox=\"0 0 23 22\" fill=\"none\"\u003E\n\u003Cpath d=\"M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z\" fill=\"#ECECEC\" \u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear_33_44806\" x1=\"-0.5\" y1=\"12.4138\" x2=\"23.5\" y2=\"12.4138\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#FB9B41\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#F2B96D\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};




pug_mixins["section-header"] = pug_interp = function(title, search, viewBtn, lineType = 'primary'){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": "sh flex justify-between items-center gap-x-3 2md:flex-col-reverse 2md:items-start 2md:gap-y-5"},attributes]), true)) + "\u003E\u003Cdiv class=\"sh-title\"\u003E\u003Ch2 class=\"sh-title-text font-secondary-bold text-2xl text-black 2md:text-xl\"\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cdiv" + (pug.attr("class", pug.classes(["sh-title-line","mt-3 rounded-full w-9 h-1 2md:mt-2","bg-gradient-" + lineType], [false,false,true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
if ((search || viewBtn)) {
pug_html = pug_html + "\u003Cdiv class=\"sh-bar flex items-center gap-2 2md:w-full 2md:flex-row-reverse\"\u003E";
if (viewBtn) {
pug_html = pug_html + "\u003Cdiv class=\"sh-viewbtn view-btn flex-shrink-0 rounded-full w-11 h-11 flex justify-center items-center bg-[#E8EAF7] hover:bg-[#dcdff1] cursor-pointer 2md:w-10 2md:h-10\"\u003E\u003Cdiv class=\"btn-icon _list w-[14px] h-[14px] [&amp;_svg]:w-[100%] [&amp;_svg]:h-[100%] [&amp;_svg]:opacity-20\"\u003E\u003Csvg viewBox=\"0 0 14 11\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M0.5 2H13.5C13.7762 2 14 1.80103 14 1.55556V0.444444C14 0.198972 13.7762 0 13.5 0H0.5C0.223844 0 0 0.198972 0 0.444444V1.55556C0 1.80103 0.223844 2 0.5 2ZM0.5 6.44444H13.5C13.7762 6.44444 14 6.24547 14 6V4.88889C14 4.64342 13.7762 4.44444 13.5 4.44444H0.5C0.223844 4.44444 0 4.64342 0 4.88889V6C0 6.24547 0.223844 6.44444 0.5 6.44444ZM0.5 10.8889H13.5C13.7762 10.8889 14 10.6899 14 10.4444V9.33333C14 9.08786 13.7762 8.88889 13.5 8.88889H0.5C0.223844 8.88889 0 9.08786 0 9.33333V10.4444C0 10.6899 0.223844 10.8889 0.5 10.8889Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn-icon _cards w-1\u002F2 h-1\u002F2 [&amp;_svg]:w-[100%] [&amp;_svg]:h-[100%] [&amp;_svg]:opacity-20\"\u003E\u003Csvg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cg clip-path=\"url(#clip0_1185_39555)\"\u003E\n\u003Cpath d=\"M9.33268 2.6665H3.99935C3.64573 2.6665 3.30659 2.80698 3.05654 3.05703C2.80649 3.30708 2.66602 3.64622 2.66602 3.99984V9.33317C2.66602 9.68679 2.80649 10.0259 3.05654 10.276C3.30659 10.526 3.64573 10.6665 3.99935 10.6665H9.33268C9.6863 10.6665 10.0254 10.526 10.2755 10.276C10.5255 10.0259 10.666 9.68679 10.666 9.33317V3.99984C10.666 3.64622 10.5255 3.30708 10.2755 3.05703C10.0254 2.80698 9.6863 2.6665 9.33268 2.6665ZM3.99935 9.33317V3.99984H9.33268V9.33317H3.99935Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath d=\"M20.0007 2.6665H14.6673C14.3137 2.6665 13.9746 2.80698 13.7245 3.05703C13.4745 3.30708 13.334 3.64622 13.334 3.99984V9.33317C13.334 9.68679 13.4745 10.0259 13.7245 10.276C13.9746 10.526 14.3137 10.6665 14.6673 10.6665H20.0007C20.3543 10.6665 20.6934 10.526 20.9435 10.276C21.1935 10.0259 21.334 9.68679 21.334 9.33317V3.99984C21.334 3.64622 21.1935 3.30708 20.9435 3.05703C20.6934 2.80698 20.3543 2.6665 20.0007 2.6665ZM14.6673 9.33317V3.99984H20.0007V9.33317H14.6673Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath d=\"M9.33268 13.3335H3.99935C3.64573 13.3335 3.30659 13.474 3.05654 13.724C2.80649 13.9741 2.66602 14.3132 2.66602 14.6668V20.0002C2.66602 20.3538 2.80649 20.6929 3.05654 20.943C3.30659 21.193 3.64573 21.3335 3.99935 21.3335H9.33268C9.6863 21.3335 10.0254 21.193 10.2755 20.943C10.5255 20.6929 10.666 20.3538 10.666 20.0002V14.6668C10.666 14.3132 10.5255 13.9741 10.2755 13.724C10.0254 13.474 9.6863 13.3335 9.33268 13.3335ZM3.99935 20.0002V14.6668H9.33268V20.0002H3.99935Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath d=\"M20.0007 13.3335H14.6673C14.3137 13.3335 13.9746 13.474 13.7245 13.724C13.4745 13.9741 13.334 14.3132 13.334 14.6668V20.0002C13.334 20.3538 13.4745 20.6929 13.7245 20.943C13.9746 21.193 14.3137 21.3335 14.6673 21.3335H20.0007C20.3543 21.3335 20.6934 21.193 20.9435 20.943C21.1935 20.6929 21.334 20.3538 21.334 20.0002V14.6668C21.334 14.3132 21.1935 13.9741 20.9435 13.724C20.6934 13.474 20.3543 13.3335 20.0007 13.3335ZM14.6673 20.0002V14.6668H20.0007V20.0002H14.6673Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003Cdefs\u003E\n\u003CclipPath id=\"clip0_1185_39555\"\u003E\n\u003Crect width=\"24\" height=\"24\"\u002F\u003E\n\u003C\u002FclipPath\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
if (search) {
pug_html = pug_html + "\u003Cdiv class=\"sh-search rounded-full h-[50px] px-6 max-w-[270px] w-full flex items-center bg-[#E8EAF7] 2md:max-w-none 2md:flex-grow 2md:h-10 2md:px-3\"\u003E\u003Cbutton class=\"sh-search-icon flex-shrink-0 w-4 h-full [&amp;_svg]:w-full flex justify-center items-center text-[#B8BACF] duration-100 hover:text-black\"\u003E\u003Csvg viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M-3.93136e-07 7.5061C9.71105e-05 10.2352 1.58105 12.7172 4.05425 13.8709C6.52745 15.0247 9.4451 14.6414 11.5364 12.888L14.8814 16.2418C15.1041 16.4645 15.4287 16.5515 15.7329 16.4699C16.0371 16.3884 16.2747 16.1508 16.3562 15.8466C16.4378 15.5424 16.3508 15.2178 16.1281 14.9951L12.7216 11.6149C13.5853 10.4258 14.0495 8.99334 14.0473 7.52366C14.0473 3.6446 10.9027 0.5 7.02366 0.5C3.1446 0.5 -5.61927e-07 3.6446 -3.92368e-07 7.52366L-3.93136e-07 7.5061ZM12.2914 7.50608C12.2914 10.4154 9.93296 12.7738 7.02366 12.7738C4.11436 12.7738 1.75592 10.4154 1.75591 7.50608C1.75591 4.59678 4.11436 2.23833 7.02366 2.23833C8.42075 2.23833 9.76062 2.79333 10.7485 3.78122C11.7364 4.76911 12.2914 6.10899 12.2914 7.50608Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fbutton\u003E\u003Cinput class=\"sh-search-input flex-grow ml-2.5 w-full h-full bg-transparent font-primary-med text-base text-black 2md:text-sm\" placeholder=\"Поиск\"\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};





























pug_mixins["product-card"] = pug_interp = function(type, isEditable, isActive, title, description, details, source, plates, rating){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"pc rounded-lg bg-white\"\u003E";
if ((type === "product" && isActive)) {
pug_html = pug_html + "\u003Cdiv class=\"pc-plate-container\"\u003E";
// iterate plates
;(function(){
  var $$obj = plates;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var item = $$obj[pug_index2];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["pc-plate","bg-gradient-primary _shadow-primary py-1 px-6 3sm:px-2 3sm:py-[1px]",('bg-gradient-' + item.type)], [false,false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.value) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var item = $$obj[pug_index2];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["pc-plate","bg-gradient-primary _shadow-primary py-1 px-6 3sm:px-2 3sm:py-[1px]",('bg-gradient-' + item.type)], [false,false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.value) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"pc-supinfo font-secondary-bold text-[13px] text-black 3sm:text-xs\"\u003E";
if ((type === "product")) {
pug_html = pug_html + "\u003Cdiv class=\"pc-rating flex gap-1 items-center\"\u003E\u003Cdiv class=\"pc-rating-icon flex-shrink-0 w-[22px] h-[22px] [&amp;_svg]:w-full 3sm:w-4 3sm:h-4\"\u003E\u003Csvg viewBox=\"0 0 22 20\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z\" fill=\"url(#paint0_linear_941_19342)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear_941_19342\" x1=\"-5.23312e-08\" y1=\"11.3793\" x2=\"22\" y2=\"11.3793\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#FB9B41\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#F2B96D\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = rating ? rating : '4.8') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
}
if ((type === "history")) {
pug_html = pug_html + "\u003Cdiv class=\"pc-id\"\u003E#23141\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"pc-ibar flex justify-end items-center flex-wrap gap-3\"\u003E";
if ((isEditable)) {
pug_html = pug_html + "\u003Cbutton class=\"pc-btn-edit\"\u003E\u003Cdiv class=\"btn-icon\"\u003E\u003Csvg viewBox=\"0 0 19 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.2006 7.88717L7.96108 17.1267C7.40327 17.6852 6.64649 17.9993 5.85714 18H0.0712891V12.2142C0.071984 11.4248 0.386117 10.668 0.944625 10.1102L10.1841 0.870716C11.3465 -0.290239 13.2296 -0.290239 14.392 0.870716L17.2006 3.67928C18.3615 4.84168 18.3615 6.72477 17.2006 7.88717ZM2.29269 11.4698C2.10934 11.6547 2.00598 11.9042 2.00488 12.1645L2.0545 16.0151H5.8555C6.11585 16.014 6.36535 15.9107 6.5502 15.7273L15.75 6.42828C16.1348 6.04119 16.1348 5.41604 15.75 5.02895L12.9414 2.22039C12.5543 1.8356 11.9292 1.8356 11.5421 2.22039L2.29269 11.4698Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003Clabel class=\"pc-btn-like\"\u003E\u003Cinput type=\"checkbox\"\u003E\u003Cdiv class=\"btn-icon\"\u003E\u003Csvg class=\"_default\" viewBox=\"0 0 23 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.00689 10.4136L11.0819 15.0674V15.0674L16.1568 10.4136V10.4136L19.0394 7.77019C20.4408 6.48508 20.4408 4.4015 19.0394 3.11639C17.638 1.83128 15.3659 1.83128 13.9644 3.11639L11.0819 5.77836L8.19927 3.135C6.79786 1.84989 4.52572 1.84989 3.1243 3.135C1.72289 4.42012 1.72289 6.50369 3.1243 7.78881L6.00689 10.4136ZM12.5024 1.82265C14.6914 -0.184698 18.2405 -0.184698 20.4295 1.82265C22.6185 3.82999 22.6185 7.08454 20.4295 9.09189L18.9882 10.4136V10.4136L11.0814 17.6828V17.6828L3.15434 10.4136V10.4136L1.71305 9.09189C-0.475963 7.08454 -0.475963 3.82999 1.71305 1.82265C3.90205 -0.184698 7.45114 -0.184698 9.64015 1.82265L11.0814 3.14433L12.5024 1.82265Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003Csvg class=\"_checked\" viewBox=\"0 0 22 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.5717 1.5605C14.7284 -0.520167 18.2251 -0.520167 20.3817 1.5605C22.5384 3.64117 22.5384 7.0146 20.3817 9.09527L18.9617 10.4652L11.1717 18L3.36172 10.4652L1.94172 9.09527C-0.214949 7.0146 -0.214949 3.64117 1.94172 1.5605C4.09839 -0.520167 7.59505 -0.520167 9.75172 1.5605L11.1717 2.93046L12.5717 1.5605Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Flabel\u003E";
if ((isEditable)) {
pug_html = pug_html + "\u003Cbutton class=\"pc-btn-remove\"\u003E\u003Cdiv class=\"btn-icon\"\u003E\u003Csvg viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M0.424023 17.576C-0.0462888 17.1028 -0.0462888 16.3387 0.424023 15.8656L15.8656 0.424038C16.1621 0.0778742 16.6275 -0.0729097 17.0706 0.0336795C17.5137 0.140269 17.8597 0.486241 17.9663 0.929353C18.0729 1.37247 17.9221 1.83793 17.5759 2.13438L2.13436 17.576C1.66124 18.0463 0.897141 18.0463 0.424023 17.576Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath d=\"M0.424023 0.424023C0.897141 -0.0462888 1.66124 -0.0462888 2.13436 0.424023L17.5759 15.8656C17.9221 16.1621 18.0729 16.6275 17.9663 17.0706C17.8597 17.5137 17.5137 17.8597 17.0706 17.9663C16.6275 18.0729 16.1621 17.9221 15.8656 17.5759L0.424023 2.13436C-0.0462888 1.66124 -0.0462888 0.897141 0.424023 0.424023Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv" + (pug.attr("class", pug.classes(["pc-preview","flex justify-center items-center",(!isActive && "opacity-50")], [false,false,true]), false, true)) + "\u003E\u003Cdiv class=\"pc-preview-inner max-w-[120px] w-full h-[120px] 3sm:max-w-[80px] 3sm:max-h-[80px]\"\u003E";
pug_mixins["image"]('product-preview-1.png', 'pc-preview-pic w-full');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"pc-info\"\u003E\u003Cdiv" + (pug.attr("class", pug.classes(["pc-title","font-secondary-bold text-[13px] text-black 3sm:text-[12px]",(!isActive && "opacity-30")], [false,false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
if ((description)) {
pug_html = pug_html + "\u003Cdiv class=\"pc-subtitle mt-1 font-secondary-med text-xs text-[#A6B1C7] 3sm:text-[10px]\"\u003E" + (pug.escape(null == (pug_interp = description) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"pc-subinfo text-[#BEC1DB] flex flex-col gap-2 3sm:gap-1\"\u003E";
if ((details.length === 0)) {
pug_html = pug_html + "\u003Cdiv class=\"pc-subinfo-value font-secondary-med text-[10px]\"\u003EОписание товара отстутствует\u003C\u002Fdiv\u003E";
}
else {
// iterate details
;(function(){
  var $$obj = details;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var item = $$obj[pug_index3];
pug_html = pug_html + "\u003Cdiv class=\"pc-subinfo-value font-secondary-med text-[10px]\"\u003E" + (pug.escape(null == (pug_interp = item.label) ? "" : pug_interp)) + ": " + (pug.escape(null == (pug_interp = item.value) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var item = $$obj[pug_index3];
pug_html = pug_html + "\u003Cdiv class=\"pc-subinfo-value font-secondary-med text-[10px]\"\u003E" + (pug.escape(null == (pug_interp = item.label) ? "" : pug_interp)) + ": " + (pug.escape(null == (pug_interp = item.value) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"pc-tbar\"\u003E\u003Cdiv class=\"pc-tbar-inner flex items-center gap-3 3sm:gap-1.5 3sm:flex-col 3sm:items-start\"\u003E\u003Cdiv class=\"pc-source flex-shrink-0 w-11 h-11 3sm:w-10 3sm:h-10\"\u003E";
if ((source === 'user')) {
pug_html = pug_html + "\u003Cdiv class=\"pc-source-user w-full h-full relative\"\u003E\u003Cdiv class=\"pc-source-status _green\"\u003E\u003C\u002Fdiv\u003E";
pug_mixins["image"]('avatar-example-3.png', 'w-full h-full object-cover object-center');
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
if ((source === 'admin')) {
pug_html = pug_html + "\u003Cdiv class=\"pc-source-admin relative rounded-full w-full h-full flex items-center justify-center bg-[#2460EC]\"\u003E\u003Cdiv class=\"pc-source-admin-icon w-[55%] text-white\"\u003E\u003Csvg viewBox=\"0 0 20 14\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.2727 4.33194H16.3636C16.1681 4.33414 15.9732 4.35545 15.7818 4.39557C14.7435 2.13731 12.4855 0.690216 10 0.690216C7.51449 0.690216 5.25645 2.13731 4.21818 4.39557C4.02678 4.35545 3.83191 4.33414 3.63636 4.33194H2.72727C1.22104 4.33194 0 5.55298 0 7.05921V10.6956C0 12.2018 1.22104 13.4228 2.72727 13.4228H3.63636C5.14259 13.4228 6.36364 12.2018 6.36364 10.6956V7.05921C6.35858 6.45136 6.15061 5.86263 5.77273 5.38648C6.45841 3.65157 8.13451 2.51175 10 2.51175C11.8655 2.51175 13.5416 3.65157 14.2273 5.38648C13.8494 5.86263 13.6414 6.45136 13.6364 7.05921V10.6956C13.6364 12.2018 14.8574 13.4228 16.3636 13.4228H17.2727C18.779 13.4228 20 12.2018 20 10.6956V7.05921C20 5.55298 18.779 4.33194 17.2727 4.33194ZM4.54545 10.6956C4.54545 11.1977 4.13844 11.6047 3.63636 11.6047H2.72727C2.2252 11.6047 1.81818 11.1977 1.81818 10.6956V7.05923C1.81818 6.55716 2.2252 6.15014 2.72727 6.15014H3.63636C4.13844 6.15014 4.54545 6.55716 4.54545 7.05923V10.6956ZM17.2727 11.6047C17.7748 11.6047 18.1818 11.1977 18.1818 10.6956V7.05923C18.1818 6.55716 17.7748 6.15014 17.2727 6.15014H16.3636C15.8616 6.15014 15.4545 6.55716 15.4545 7.05923V10.6956C15.4545 11.1977 15.8616 11.6047 16.3636 11.6047H17.2727Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"pc-source-status _green\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
if ((source === 'case')) {
pug_html = pug_html + "\u003Cdiv class=\"pc-source-case relative rounded-full w-full h-full flex items-center justify-center\"\u003E";
pug_mixins["image"]('case-pink.png', 'w-full object-cover object-center');
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"pc-total flex-grow h-11 rounded-full border border-solid border-[#F3F7FF] flex items-center justify-between pl-4 gap-2 3sm:h-10 3sm:pl-3 3sm:w-full\"\u003E\u003Cdiv class=\"pc-total-inf flex flex-wrap gap-x-[5px] font-secondary-bold text-xs 3sm:text-[10px]\"\u003E";
if ((isActive)) {
pug_html = pug_html + "\u003Cspan class=\"text-[#BEC1DB]\"\u003EЦена\u003C\u002Fspan\u003E";
}
else {
pug_html = pug_html + "\u003Cspan class=\"text-[#83b945]\"\u003EКуплен\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003Cspan class=\"text-[#83b945]\"\u003E120.00 \u003Cb\u003E₽\u003C\u002Fb\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"pc-total-btn-wrap flex-shrink-0 w-11 h-11 3sm:w-10 3sm:h-10\"\u003E";
if ((type === "product")) {
pug_html = pug_html + "\u003Ca class=\"btn btn-secondary pc-total-btn rounded-full w-full h-full justify-center\" href=\"#\"\u003E\u003Cdiv class=\"btn-icon w-1\u002F2 [&amp;_svg]:w-full text-white\"\u003E\u003Csvg viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.7671 8.36089H13.0736C13.4234 8.36089 13.6981 8.07175 13.6981 7.72307C13.6981 7.3659 13.4234 7.08526 13.0736 7.08526H10.7671C10.4174 7.08526 10.1426 7.3659 10.1426 7.72307C10.1426 8.07175 10.4174 8.36089 10.7671 8.36089ZM15.8132 3.93954C16.3211 3.93954 16.6542 4.11813 16.9872 4.50932C17.3203 4.90052 17.3786 5.4618 17.3037 5.9712L16.5126 11.55C16.3627 12.6224 15.4634 13.4124 14.4059 13.4124H5.32134C4.21387 13.4124 3.29792 12.5458 3.20632 11.4233L2.44025 2.1528L1.1829 1.93169C0.849824 1.87216 0.616673 1.54049 0.67496 1.20032C0.733248 0.852497 1.058 0.622032 1.3994 0.673908L3.38535 0.97921C3.66846 1.03109 3.87663 1.26835 3.90161 1.5575L4.05982 3.46245C4.0848 3.73544 4.3013 3.93954 4.56776 3.93954H15.8132ZM5.18794 14.7565C4.48849 14.7565 3.92226 15.3348 3.92226 16.0492C3.92226 16.755 4.48849 17.3333 5.18794 17.3333C5.87907 17.3333 6.4453 16.755 6.4453 16.0492C6.4453 15.3348 5.87907 14.7565 5.18794 14.7565ZM14.5556 14.7565C13.8562 14.7565 13.29 15.3348 13.29 16.0492C13.29 16.755 13.8562 17.3333 14.5556 17.3333C15.2468 17.3333 15.813 16.755 15.813 16.0492C15.813 15.3348 15.2468 14.7565 14.5556 14.7565Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
}
if ((type === "history")) {
pug_html = pug_html + "\u003Ca class=\"btn btn-primary pc-total-btn rounded-full w-full h-full justify-center\" href=\"#\"\u003E\u003Cdiv class=\"btn-icon w-1\u002F2 [&amp;_svg]:w-full text-white\"\u003E\u003Csvg  viewBox=\"0 0 21 20\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.25657 0H17.802C19.3083 0 20.5293 1.4396 20.5293 3.21543V12.8617C20.5293 14.6376 19.3083 16.0772 17.802 16.0772H10.9838L8.89293 19.3569C8.6354 19.7617 8.23124 20 7.80202 20C7.37281 20 6.96864 19.7617 6.71112 19.3569L4.62021 16.0772H3.25657C1.75034 16.0772 0.529297 14.6376 0.529297 12.8617V3.21543C0.529297 1.4396 1.75034 0 3.25657 0ZM17.8022 13.9336C18.3043 13.9336 18.7113 13.4538 18.7113 12.8618V3.21551C18.7113 2.62356 18.3043 2.1437 17.8022 2.1437H3.25675C2.75467 2.1437 2.34766 2.62356 2.34766 3.21551V12.8618C2.34766 13.4538 2.75467 13.9336 3.25675 13.9336H5.52947L7.8022 17.5028L10.0749 13.9336H17.8022Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath d=\"M5.07511 6.43085H9.62056C10.1226 6.43085 10.5297 5.95099 10.5297 5.35904C10.5297 4.7671 10.1226 4.28723 9.62056 4.28723H5.07511C4.57303 4.28723 4.16602 4.7671 4.16602 5.35904C4.16602 5.95099 4.57303 6.43085 5.07511 6.43085Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath d=\"M15.0751 8.57446H5.07511C4.57303 8.57446 4.16602 9.05433 4.16602 9.64627C4.16602 10.2382 4.57303 10.7181 5.07511 10.7181H15.0751C15.5772 10.7181 15.9842 10.2382 15.9842 9.64627C15.9842 9.05433 15.5772 8.57446 15.0751 8.57446Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};




















































pug_mixins["notification-card"] = pug_interp = function(item){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"nc rounded-xl p-6 bg-white xl:p-4 md:rounded-lg md:p-3 md:pb-1\"\u003E\u003Cdiv class=\"nc-icon rounded-full w-[50px] h-[50px] flex items-center justify-center text-white [&amp;_svg]:max-w-[50%] bg-gradient-secondary xl:w-10 xl:h-10 md:w-7 md:h-7 md:p-1\"\u003E\u003Csvg width=\"16\" height=\"17\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.1339 15.0561C15.1164 13.6921 14.3309 12.4579 13.1111 11.8778V8.0122C13.1541 5.35225 11.2421 3.07229 8.6421 2.68307C7.17902 2.49536 5.70713 2.95641 4.60455 3.9478C3.50197 4.93918 2.87616 6.36427 2.88786 7.85698V11.7522C1.46861 12.2353 0.509251 13.5775 0.5 15.0931C0.505439 15.3331 0.607572 15.5604 0.782704 15.7223C0.957837 15.8842 1.19075 15.9667 1.4274 15.9505H14.2649C14.4973 15.9485 14.7194 15.8532 14.8824 15.6855C15.0454 15.5177 15.1358 15.2913 15.1339 15.0561ZM7.26932 4.19823C8.3437 3.97626 9.45975 4.25478 10.309 4.95682C11.1583 5.65886 11.6509 6.71009 11.6507 7.81997V11.5156H4.34839V7.97519C4.30883 6.17267 5.5311 4.59219 7.26932 4.19823ZM2.07756 14.4722C2.33643 13.5933 3.13585 12.9917 4.04189 12.9939H11.6509C12.5562 12.9941 13.3543 13.5948 13.6153 14.4722H2.07756Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.73 1.47826V0.73913C8.73 0.33092 8.40306 0 7.99976 0C7.59647 0 7.26953 0.33092 7.26953 0.73913V1.47826C7.26953 1.88647 7.59647 2.21739 7.99976 2.21739C8.40306 2.21739 8.73 1.88647 8.73 1.47826Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.73 16.2609V15.5217C8.73 15.1135 8.40306 14.7826 7.99976 14.7826C7.59647 14.7826 7.26953 15.1135 7.26953 15.5217V16.2609C7.26953 16.6691 7.59647 17 7.99976 17C8.40306 17 8.73 16.6691 8.73 16.2609Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.28745 2.80134C2.42457 2.94126 2.61121 3.01997 2.80592 3.01997C3.00063 3.01997 3.18727 2.94126 3.32438 2.80134C3.60751 2.51305 3.60751 2.04745 3.32438 1.75916L2.80592 1.23438C2.6688 1.09445 2.48216 1.01575 2.28745 1.01575C2.09275 1.01575 1.9061 1.09445 1.76899 1.23438C1.48586 1.52267 1.48586 1.98827 1.76899 2.27655L2.28745 2.80134Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.535709 6.05348L1.26594 6.24565C1.64923 6.33604 2.03434 6.10272 2.13672 5.71808C2.23911 5.33345 2.02193 4.93588 1.64566 4.81913L0.91543 4.62695C0.526359 4.52368 0.128036 4.75831 0.0245458 5.15174C-0.0779904 5.54331 0.149977 5.94547 0.535709 6.05348Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.7535 6.29742L15.4837 6.10525C15.86 5.98849 16.0772 5.59093 15.9748 5.20629C15.8724 4.82166 15.4873 4.58834 15.104 4.67873L14.3738 4.8709C13.9975 4.98766 13.7803 5.38523 13.8827 5.76986C13.9851 6.15449 14.3702 6.38781 14.7535 6.29742Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.0305 2.80134L13.549 2.27655C13.8321 1.98827 13.8321 1.52267 13.549 1.23438C13.4119 1.09445 13.2252 1.01575 13.0305 1.01575C12.8358 1.01575 12.6492 1.09445 12.5121 1.23438L11.9936 1.75916C11.7105 2.04745 11.7105 2.51305 11.9936 2.80134C12.1307 2.94126 12.3174 3.01997 12.5121 3.01997C12.7068 3.01997 12.8934 2.94126 13.0305 2.80134Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv" + (pug.attr("class", pug.classes(["nc-text","font-secondary-bold text-lg text-[#1D222C] [&amp;_a]:text-[#1E61EB] xl:text-base md:text-sm 2sm:text-xs",(item.isMore && 'overflow-hidden text-ellipsis whitespace-nowrap')], [false,false,true]), false, true)) + "\u003E" + (null == (pug_interp = item.text) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"nc-date\"\u003E\u003Cdiv class=\"nc-date-label font-secondary-med text-xs text-[#969BA5] md:hidden\"\u003EДата\u003C\u002Fdiv\u003E\u003Cdiv class=\"nc-date-value font-secondary-bold text-base text-[#1D222C] xl:text-sm md:text-[10px]\"\u003E" + (pug.escape(null == (pug_interp = item.datetime) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cbutton" + (pug.attr("class", pug.classes(["nc-btn","rounded-full w-11 h-11 border border-solid border-black\u002F10 flex items-center justify-center md:w-6 md:h-6",(item.isMore && 'hover:bg-black/5')], [false,false,true]), false, true)+pug.attr("disabled", !item.isMore, true, true)) + "\u003E\u003Cdiv" + (pug.attr("class", pug.classes(["btn-icon","[&amp;_svg]:w-4 md:[&amp;_svg]:w-3",(item.isMore ? '[&_svg]:text-black' : '[&_svg]:text-black/10')], [false,false,true]), false, true)) + "\u003E\u003Csvg viewBox=\"0 0 16 10\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M0.944329 5.62321L13.4 5.62321L11.1809 8.44201C11.0235 8.64128 10.9509 8.89608 10.9793 9.14987C11.0077 9.40366 11.1346 9.63547 11.3319 9.79388C11.7393 10.1202 12.3297 10.0517 12.654 9.64048L15.7514 5.71908C16.0829 5.29876 16.0829 4.70124 15.7514 4.28092L12.654 0.359522C12.3297 -0.0517052 11.7393 -0.120209 11.3319 0.206118C11.1346 0.364527 11.0077 0.596337 10.9793 0.85013C10.9509 1.10392 11.0235 1.35872 11.1809 1.55799L12.8806 3.70565L0.944329 3.70565C0.42279 3.70565 0 4.13491 0 4.66443C0 5.19395 0.42279 5.62321 0.944329 5.62321Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
};
































pug_mixins["tabs"] = pug_interp = function(list){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"tabs flex items-center font-primary-bold text-[14px] h-[54px] overflow-hidden flex-wrap text-[#8A98B3] p-[24px]\"\u003E";
// iterate list
;(function(){
  var $$obj = list;
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var item = $$obj[pug_index6];
pug_html = pug_html + "\u003Cbutton class=\"tabs-tab block uppercase mr-4 last:mr-0\"\u003E\u003Cdiv" + (pug.attr("class", pug.classes(["tabs-tab-text",`${item.active ? "text-black/90" : "text-[#8A98B3]"}`], [false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.label) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv" + (pug.attr("class", pug.classes(["tabs-tab-line",`mt-1 mx-auto rounded-full w-full h-1 ${item.active && "bg-gradient-primary"}`], [false,true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbutton\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var item = $$obj[pug_index6];
pug_html = pug_html + "\u003Cbutton class=\"tabs-tab block uppercase mr-4 last:mr-0\"\u003E\u003Cdiv" + (pug.attr("class", pug.classes(["tabs-tab-text",`${item.active ? "text-black/90" : "text-[#8A98B3]"}`], [false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.label) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv" + (pug.attr("class", pug.classes(["tabs-tab-line",`mt-1 mx-auto rounded-full w-full h-1 ${item.active && "bg-gradient-primary"}`], [false,true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbutton\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};


























pug_mixins["chat-message"] = pug_interp = function(avatar, type, text, status){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["chat-message",`flex items-center max-w-[364px] ${avatar ? "chat-message-last" : "chat-message-first"} ${type === "out" && "chat-message-out"}`], [false,true]), false, true)) + "\u003E";
if ((avatar)) {
pug_html = pug_html + "\u003Cdiv class=\"chat-message-user flex self-end\"\u003E\u003Ca class=\"fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative bg-white rounded-full p-[6px]\" href=\"#\"\u003E\u003Cdiv class=\"fm-message-avatar flex-shrink-0 w-[40px] h-[40px] overflow-hidden rounded-full\"\u003E";
pug_mixins["image"](avatar, 'sps-avatar-pic w-full h-full object-cover', 'user');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"chat-message-content block items-end text-black p-[8px] text-[14px] break-words whitespace-pre-wrap rounded-[12px] relative\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003Cdiv class=\"chat-message-info flex items-center float-right bottom-0 ml-[4px] mr-[-4px] mt-[6px]\"\u003E\u003Cspan" + (pug.attr("class", pug.classes(["chat-message-time",`${type === "out" ? "text-white" : "text-[#8A959F]"} text-[12px] mr-[4px]`], [false,true]), false, true)) + "\u003E22:03\u003C\u002Fspan\u003E";
if ((type === "out")) {
pug_html = pug_html + "\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"17\" height=\"8\" viewBox=\"0 0 17 8\" fill=\"none\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.0616 0.284467C13.1937 0.440295 13.259 0.642692 13.2432 0.847126C13.2274 1.05156 13.1318 1.24129 12.9774 1.37456L5.63181 7.73729C5.25296 8.06325 4.68587 8.02555 4.35265 7.65225L1.14327 4.08819C0.958555 3.8838 0.895905 3.59546 0.97892 3.33181C1.06193 3.06815 1.278 2.86922 1.54573 2.80995C1.81346 2.75069 2.09218 2.84009 2.27689 3.04449L5.08797 6.13694L11.9816 0.176231C12.1389 0.0456458 12.3412 -0.0163417 12.5439 0.00396851C12.7466 0.0242787 12.9329 0.125214 13.0616 0.284467Z\" fill=\"#E7E7E7\"\u002F\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.7598 0.284467C16.8919 0.440295 16.9572 0.642692 16.9414 0.847126C16.9256 1.05156 16.8299 1.24129 16.6755 1.37456L9.32996 7.73729C8.95111 8.06325 8.07399 8.1106 7.74078 7.7373L6.40994 6.16377C6.22523 5.95938 6.32694 5.65431 6.40995 5.39065C6.49297 5.127 6.52521 5.06336 6.79294 5.0041C7.06067 4.94483 7.37418 4.7997 7.5589 5.0041L8.78613 6.13694L15.6798 0.176231C15.8371 0.0456458 16.0394 -0.0163417 16.2421 0.00396851C16.4447 0.0242787 16.631 0.125214 16.7598 0.284467Z\" fill=\"#E7E7E7\"\u002F\u003E\n\u003C\u002Fsvg\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
if ((type === "out")) {
pug_html = pug_html + "\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"15\" height=\"19\" viewBox=\"0 0 15 19\" fill=\"none\"\u003E\n\u003Cpath d=\"M8.44287 0C8.44287 15 12.1095 17.3333 14.4429 19C6.44287 19 2.94287 14 0.942871 11.5L3.44287 7C3.44287 6.83333 6.44287 2.4 8.44287 0Z\" fill=\"#1F62EC\"\u002F\u003E\n\u003C\u002Fsvg\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["chat-input"] = pug_interp = function(classes, placeholder){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["chat-input",`flex items-center bg-white font-secondary-med p-[16px] border border-[#E4E9F4] rounded-[12px] ${classes}`], [false,true]), false, true)) + "\u003E\u003Cinput" + (" class=\"chat-input-input text-black w-full h-full outline-none placeholder:text-[#BAC9E5] text-[14px]\""+pug.attr("placeholder", placeholder, true, true)) + "\u003E\u003Cbutton class=\"chat-input-btn flex-shrink-0 flex justify-center items-center w-[26px] h-[20px] mr-[24px]\"\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"26\" height=\"20\" viewBox=\"0 0 26 20\" fill=\"none\"\u003E\n\u003Cpath opacity=\"0.45\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M24.7514 3.62722L20.5503 3.53974L18.4953 0.562867C18.3774 0.390809 18.2172 0.249349 18.0289 0.151157C17.8406 0.0529645 17.6299 0.00106581 17.4157 0H8.6363C8.42208 0.00106581 8.21146 0.0529645 8.02313 0.151157C7.8348 0.249349 7.6746 0.390809 7.55678 0.562867L5.50177 3.53974L1.30065 3.62722C0.955697 3.62722 0.62485 3.75902 0.380931 3.99359C0.137012 4.22815 0 4.54628 0 4.87801V18.7492C0 19.0809 0.137012 19.3991 0.380931 19.6336C0.62485 19.8682 0.955697 20 1.30065 20H13.0065C13.3515 20 13.6823 19.8682 13.9262 19.6336C14.1701 19.3991 14.3072 19.0809 14.3072 18.7492V16.085C15.5332 15.7806 16.6018 15.0566 17.3125 14.0488C18.0231 13.0409 18.3272 11.8184 18.1676 10.6104C18.0081 9.40233 17.3959 8.29174 16.4457 7.48675C15.4956 6.68177 14.2728 6.23765 13.0065 6.23765C11.7402 6.23765 10.5174 6.68177 9.56729 7.48675C8.61716 8.29174 8.00494 9.40233 7.84538 10.6104C7.68583 11.8184 7.98987 13.0409 8.70056 14.0488C9.41126 15.0566 10.4798 15.7806 11.7059 16.085V17.4984H2.6013V6.07878L6.20409 6.00374C6.41389 5.99862 6.61928 5.94479 6.80274 5.84678C6.98619 5.74877 7.14226 5.60947 7.25762 5.44087L9.31267 2.48904H16.7004L18.7424 5.44087C18.8577 5.60947 19.0138 5.74877 19.1973 5.84678C19.3807 5.94479 19.5861 5.99862 19.7959 6.00374L23.3987 6.07878V17.4984H18.1961C17.8511 17.4984 17.5203 17.6302 17.2764 17.8648C17.0325 18.0994 16.8954 18.4175 16.8954 18.7492C16.8954 19.0809 17.0325 19.3991 17.2764 19.6336C17.5203 19.8682 17.8511 20 18.1961 20H24.6993C25.0443 20 25.3751 19.8682 25.6191 19.6336C25.863 19.3991 26 19.0809 26 18.7492V4.86556C25.9969 4.54449 25.8656 4.23684 25.6332 4.00634C25.4007 3.77583 25.085 3.64005 24.7514 3.62722ZM10.4442 11.2445C10.4442 10.7498 10.5968 10.2661 10.8826 9.85472C11.1685 9.44334 11.5747 9.12269 12.05 8.93335C12.5254 8.74402 13.0484 8.69453 13.553 8.79105C14.0576 8.88758 14.5211 9.12583 14.8849 9.47569C15.2487 9.82553 15.4965 10.2712 15.5969 10.7565C15.6972 11.2417 15.6457 11.7447 15.4488 12.2018C15.2519 12.6589 14.9185 13.0497 14.4907 13.3245C14.063 13.5994 13.56 13.7461 13.0455 13.7461C12.3556 13.7461 11.694 13.4825 11.2061 13.0134C10.7183 12.5442 10.4442 11.908 10.4442 11.2445Z\" fill=\"#AFB8CC\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003Cbutton class=\"chat-input-btn flex-shrink-0 flex justify-center items-center w-[w-22px] h-[20px]\"\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"22\" height=\"20\" viewBox=\"0 0 22 20\" fill=\"none\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.2954 8.88263L1.88775 0.115735C1.66621 0.0165446 1.42026 -0.019988 1.1782 0.0103992C0.936147 0.0407864 0.707896 0.136965 0.519832 0.287575C0.331769 0.438186 0.191524 0.637181 0.115349 0.861649C0.0391743 1.08612 0.0302038 1.32682 0.0893681 1.55604L1.38321 6.5657C1.46728 6.88789 1.68012 7.16457 1.97493 7.33485C2.26974 7.50513 2.62233 7.55505 2.95518 7.47367C3.28803 7.39229 3.57386 7.18634 3.74977 6.90097C3.92569 6.6156 3.97725 6.27422 3.89318 5.95203L3.25921 3.4472L17.6985 9.97223L3.37569 16.4473L4.91537 11.2246H9.1074C9.45055 11.2246 9.77962 11.0927 10.0223 10.8579C10.2649 10.623 10.4012 10.3044 10.4012 9.97223C10.4012 9.64007 10.2649 9.3216 10.0223 9.08673C9.77962 8.85186 9.45055 8.71981 9.1074 8.71981H3.93204C3.64164 8.70942 3.35604 8.79398 3.12133 8.95984C2.88662 9.12569 2.71646 9.36315 2.6382 9.63405L0.050515 18.4009C-0.01842 18.6327 -0.0167635 18.8789 0.0552532 19.1097C0.12727 19.3406 0.266586 19.5462 0.456499 19.7023C0.646411 19.8583 0.878839 19.9581 1.12585 19.9894C1.37285 20.0207 1.62395 19.9823 1.84897 19.8789L21.2566 11.112C21.4789 11.0108 21.6668 10.8505 21.7985 10.6498C21.9301 10.4491 22 10.2162 22 9.97849C22 9.74075 21.9301 9.5079 21.7985 9.30719C21.6668 9.10648 21.4789 8.94632 21.2566 8.84518L21.2954 8.88263Z\" fill=\"url(#paint0_linear_94_50409)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear_94_50409\" x1=\"-8.19564e-08\" y1=\"10\" x2=\"22\" y2=\"10\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#8CD23C\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#417A00\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
};








pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"ru\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1\"\u003E\u003Ctitle\u003E" + (pug.escape(null == (pug_interp = pageTitle) ? "" : pug_interp)) + " - 1paid\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody" + (pug.attr("class", pug.classes([bodyNoScroll && 'overflow-y-hidden'], [true]), false, true)) + "\u003E\u003Cdiv id=\"root\"\u003E\u003Cdiv" + (pug.attr("class", pug.classes(["layout",pageModificator], [false,true]), false, true)) + "\u003E\u003Cdiv class=\"layout-grid\"\u003E\u003Cdiv class=\"layout-sidebar menu\"\u003E\u003Cdiv class=\"cm\"\u003E\u003Cdiv class=\"cm-inner\"\u003E\u003Cdiv class=\"cm-h px-10 pt-8 3xl:px-5 3xl:pt-5\"\u003E\u003Cdiv class=\"cm-h-inner flex justify-between items-center\"\u003E\u003Cdiv class=\"logo w-[180px] 3xl:w-[150px] xl:w-[120px] lg:w-auto lg:flex-shrink-1 lg:basis-[130px]\"\u003E";
pug_mixins["image"]('dots-1.svg', 'logo__dots lg:h-[100%] xl:w-1/2', '1paid.ru');
pug_mixins["image"]('logo.svg', 'logo-pic', '1paid.ru');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"cm-b py-10 3xl:py-5\"\u003E\u003Cdiv class=\"cm-container\"\u003E" + (null == (pug_interp = (__webpack_require__(/*! ../components/_total-site-card.pug */ "./src/pug/components/_total-site-card.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Cdiv class=\"cm-nav mt-10 3xl:mt-8 xl:mt-6\"\u003E";
var navLinks = [
  {
    label: 'Продать товар',
    link: '#',
    icon: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.0161 24.9999C23.5605 24.9999 24.8125 23.728 24.8125 22.159C24.8125 20.59 23.5605 19.3181 22.0161 19.3181C20.4717 19.3181 19.2197 20.59 19.2197 22.159C19.2197 23.728 20.4717 24.9999 22.0161 24.9999ZM22.016 22.7272C21.7096 22.7211 21.4627 22.4702 21.4568 22.159C21.4568 21.8452 21.7071 21.5908 22.016 21.5908C22.3249 21.5908 22.5753 21.8452 22.5753 22.159C22.5753 22.4728 22.3249 22.7272 22.016 22.7272Z" fill="currentColor"/><path d="M24.8111 16.3636C25.4289 16.3636 25.9297 16.8724 25.9297 17.5C25.9297 18.1276 25.4289 18.6364 24.8111 18.6364H14.5092L13.0327 24.1591C12.869 24.7647 12.2531 25.1209 11.6569 24.9545C11.0608 24.7882 10.7102 24.1625 10.8739 23.5568L12.1938 18.6364H10.4489C9.83296 18.6382 9.29627 18.2104 9.15135 17.6023L6.60105 7.27273H4.11785C3.50009 7.27273 2.9993 6.76396 2.9993 6.13636C2.9993 5.50877 3.50009 5 4.11785 5H7.30574C7.92026 5.00231 8.45475 5.42829 8.60326 6.03409L11.1424 16.3636H24.8111Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0735 15.2273C24.7097 15.2307 25.2608 14.7799 25.3934 14.1477L26.9705 6.64773C27.0548 6.24596 26.9562 5.82701 26.7023 5.50732C26.4484 5.18763 26.0662 5.00126 25.6618 5H11.6463C11.2459 5.00801 10.8699 5.19724 10.6211 5.51602C10.3722 5.83479 10.2765 6.24981 10.36 6.64773L11.9371 14.1477C12.0697 14.7799 12.6208 15.2307 13.257 15.2273H24.0735ZM13.9618 12.9545L12.7649 7.27268H24.5545L23.3577 12.9545H13.9618Z" fill="currentColor"/></svg>'
  },
  {
    label: 'Закладки',
    link: '#',
    icon: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1525 16.8475L15.1525 21.8475L10.1525 16.8475L7.3125 14.0075C5.93178 12.6268 5.93178 10.3882 7.3125 9.0075C8.69321 7.62679 10.9318 7.62679 12.3125 9.0075L15.1525 11.8675L17.9925 9.0275C19.3732 7.64679 21.6118 7.64679 22.9925 9.0275C24.3732 10.4082 24.3732 12.6468 22.9925 14.0275L20.1525 16.8475ZM13.7525 7.6175C11.5958 5.46083 8.09917 5.46083 5.9425 7.6175C3.78582 9.77418 3.78582 13.2708 5.9425 15.4275L7.3625 16.8475L15.1525 24.6575L22.9625 16.8475L24.3825 15.4275C26.5392 13.2708 26.5392 9.77418 24.3825 7.6175C22.2258 5.46083 18.7292 5.46083 16.5725 7.6175L15.1525 9.0375L13.7525 7.6175Z" fill="currentColor"/></svg>'
  },
  {
    label: 'История просмотра',
    link: '#',
    icon: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 16C24.6569 16 26 14.6569 26 13V9C26 7.34315 24.6569 6 23 6H19C17.3431 6 16 7.34315 16 9V13C16 14.6569 17.3431 16 19 16H23ZM24 13C24 13.5523 23.5523 14 23 14H19C18.4477 14 18 13.5523 18 13V9C18 8.44772 18.4477 8 19 8H23C23.5523 8 24 8.44772 24 9V13Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 16C12.6569 16 14 14.6569 14 13V9C14 7.34315 12.6569 6 11 6H7C5.34315 6 4 7.34315 4 9V13C4 14.6569 5.34315 16 7 16H11ZM12 13C12 13.5523 11.5523 14 11 14H7C6.44772 14 6 13.5523 6 13V9C6 8.44772 6.44772 8 7 8H11C11.5523 8 12 8.44772 12 9V13Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25 19C25 18.4477 24.5523 18 24 18H18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20H24C24.5523 20 25 19.5523 25 19Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25 23C25 22.4477 24.5523 22 24 22H20C19.4477 22 19 22.4477 19 23C19 23.5523 19.4477 24 20 24H24C24.5523 24 25 23.5523 25 23Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 19C13 18.4477 12.5523 18 12 18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H12C12.5523 20 13 19.5523 13 19Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 23C13 22.4477 12.5523 22 12 22H8C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24H12C12.5523 24 13 23.5523 13 23Z" fill="currentColor"/></svg>'
  },
  {
    label: 'История покупок и продаж',
    link: '#',
    icon: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H9C8.20435 4 7.44129 4.31607 6.87868 4.87868C6.31607 5.44129 6 6.20435 6 7V24.8C6.00064 25.2303 6.25209 25.6207 6.64357 25.7992C7.03506 25.9777 7.4947 25.9116 7.82 25.63L10.5 23.33L13.29 25.72C13.6649 26.0427 14.2091 26.0754 14.62 25.8L18.42 23.26L21.18 25.63C21.5053 25.9116 21.9649 25.9777 22.3564 25.7992C22.7479 25.6207 22.9994 25.2303 23 24.8V7C23 5.34315 21.6569 4 20 4ZM9.78 21.3L8 22.83V7C8 6.44772 8.44771 6 9 6H20C20.5523 6 21 6.44772 21 7V22.84L19.21 21.29C18.8337 20.9706 18.2918 20.938 17.88 21.21L14.08 23.75L11.22 21.3C10.8036 20.9505 10.1964 20.9505 9.78 21.3Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H9C8.20435 4 7.44129 4.31607 6.87868 4.87868C6.31607 5.44129 6 6.20435 6 7V24.8C6.00064 25.2303 6.25209 25.6207 6.64357 25.7992C7.03506 25.9777 7.4947 25.9116 7.82 25.63L10.5 23.33L13.29 25.72C13.6649 26.0427 14.2091 26.0754 14.62 25.8L18.42 23.26L21.18 25.63C21.5053 25.9116 21.9649 25.9777 22.3564 25.7992C22.7479 25.6207 22.9994 25.2303 23 24.8V7C23 5.34315 21.6569 4 20 4ZM9.78 21.3L8 22.83V7C8 6.44772 8.44771 6 9 6H20C20.5523 6 21 6.44772 21 7V22.84L19.21 21.29C18.8337 20.9706 18.2918 20.938 17.88 21.21L14.08 23.75L11.22 21.3C10.8036 20.9505 10.1964 20.9505 9.78 21.3Z" fill="currentColor"/><path d="M19 10H12C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10Z" fill="currentColor"/><path d="M19 10H12C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10Z" fill="currentColor"/><path d="M19 14H15C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14Z" fill="currentColor"/><path d="M19 14H15C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14Z" fill="currentColor"/><path d="M11 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H11C10.4477 18 10 17.5523 10 17C10 16.4477 10.4477 16 11 16Z" fill="currentColor"/><path d="M11 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H11C10.4477 18 10 17.5523 10 17C10 16.4477 10.4477 16 11 16Z" fill="currentColor"/></svg>'
  },
]

pug_html = pug_html + "\u003Cdiv class=\"navpin\"\u003E";
// iterate navLinks
;(function(){
  var $$obj = navLinks;
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var item = $$obj[pug_index8];
pug_html = pug_html + "\u003Ca" + (" class=\"navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4\""+pug.attr("href", item.link, true, true)) + "\u003E\u003Cdiv class=\"navpin-plate\"\u003E";
pug_mixins["image"]('link-pin-plate.svg', 'navpin-plate-pic', 'dots');
pug_mixins["image"]('dots-1.svg', 'navpin-plate__dots-1', 'dots');
pug_mixins["image"]('dots-1.svg', 'navpin-plate__dots-2', 'dots');
pug_html = pug_html + "\u003Cdiv class=\"navpin-plate-icon\"\u003E" + (null == (pug_interp = item.icon) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"navpin-text text-sm uppercase ml-7 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs\"\u003E" + (pug.escape(null == (pug_interp = item.label) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var item = $$obj[pug_index8];
pug_html = pug_html + "\u003Ca" + (" class=\"navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4\""+pug.attr("href", item.link, true, true)) + "\u003E\u003Cdiv class=\"navpin-plate\"\u003E";
pug_mixins["image"]('link-pin-plate.svg', 'navpin-plate-pic', 'dots');
pug_mixins["image"]('dots-1.svg', 'navpin-plate__dots-1', 'dots');
pug_mixins["image"]('dots-1.svg', 'navpin-plate__dots-2', 'dots');
pug_html = pug_html + "\u003Cdiv class=\"navpin-plate-icon\"\u003E" + (null == (pug_interp = item.icon) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"navpin-text text-sm uppercase ml-7 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs\"\u003E" + (pug.escape(null == (pug_interp = item.label) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"cm-f pb-10\"\u003E\u003Cdiv class=\"cm-container flex flex-col items-center\"\u003E";
if (isGameNotSelected) {
pug_html = pug_html + "\u003Ca class=\"rounded-full border-[1px] border-solid border-[#C0C2DC59] max-w-[160px] w-full h-12 px-3 flex justify-center items-center hover:bg-slate-100 xl:max-w-none xl:h-10\" href=\"#\"\u003E\u003Cdiv class=\"btn-text font-secondary-bold text-sm text-[#A1AEC8]\"\u003EВыбор игры\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + "\u003Ca class=\"btn btn-secondary rounded-full w-full h-15 px-3 justify-center 3xl:h-12\" href=\"#\"\u003E\u003Cdiv class=\"btn-text font-secondary-bold text-sm text-white\"\u003EWarface\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"cm-f-bar mt-3 overflow-hidden flex w-full h-16 rounded-full border-[1px] border-solid border-[#C0C2DC59] 3xl:h-12 xl:flex-col xl:h-auto xl:rounded-xl\"\u003E\u003Ca class=\"cm-f-bar-item h-full flex items-center gap-x-2 px-4 text-[#A1AEC8] hover:bg-slate-100 3xl:px-2 xl:h-10\" href=\"#\"\u003E\u003Cdiv class=\"cm-f-bar-item-icon flex-shrink-0\"\u003E\u003Csvg width=\"20\" height=\"18\" viewBox=\"0 0 20 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.2727 5.10197H14.5455V3.28379C14.5455 1.77756 13.3244 0.556519 11.8182 0.556519H2.72727C1.22104 0.556519 0 1.77756 0 3.28379V8.73834C0 10.2446 1.22104 11.4656 2.72727 11.4656H4.13636L5.45455 12.9292V13.2565C5.45455 14.7628 6.67559 15.9838 8.18182 15.9838H11.4091L12.7818 17.5383C13.0407 17.8319 13.4132 18 13.8045 18C14.1959 18 14.5684 17.8319 14.8273 17.5383L16.2 15.9838H17.2727C18.779 15.9838 20 14.7628 20 13.2565V7.80197C19.985 6.3064 18.7684 5.1019 17.2727 5.10197ZM2.72727 9.64743C2.2252 9.64743 1.81818 9.24041 1.81818 8.73834V3.28379C1.81818 2.78171 2.2252 2.3747 2.72727 2.3747H11.8182C12.3203 2.3747 12.7273 2.78171 12.7273 3.28379V8.73834C12.7273 9.24041 12.3203 9.64743 11.8182 9.64743H8.11818L6.53636 11.4656L4.95455 9.64743H2.72727ZM17.2727 14.1929C17.7748 14.1929 18.1818 13.7859 18.1818 13.2838V7.84742C18.1818 7.34534 17.7748 6.93833 17.2727 6.93833H14.5455V8.75651C14.5455 10.2627 13.3244 11.4838 11.8182 11.4838H8.92727L7.55455 13.0383C7.4717 13.1321 7.37696 13.2146 7.27273 13.2838C7.27273 13.7859 7.67974 14.1929 8.18182 14.1929H12.2273L13.8091 16.0838L15.3909 14.1929H17.2727Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"cm-f-bar-item-label font-secondary-bold text-sm 3xl:text-xs\"\u003EМои Сообщения\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Cdiv class=\"cm-f-bar-sep w-[1px] h-full flex-shrink-0 bg-[#C0C2DC59] xl:h-[1px] xl:w-full\"\u003E\u003C\u002Fdiv\u003E\u003Ca class=\"cm-f-bar-item h-full flex items-center gap-x-2 px-4 text-[#A1AEC8] hover:bg-slate-100 3xl:px-2 xl:h-10\" href=\"#\"\u003E\u003Cdiv class=\"cm-f-bar-item-icon flex-shrink-0\"\u003E\u003Csvg width=\"20\" height=\"14\" viewBox=\"0 0 20 14\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.2727 4.33194H16.3636C16.1681 4.33414 15.9732 4.35545 15.7818 4.39557C14.7435 2.13731 12.4855 0.690216 10 0.690216C7.51449 0.690216 5.25645 2.13731 4.21818 4.39557C4.02678 4.35545 3.83191 4.33414 3.63636 4.33194H2.72727C1.22104 4.33194 0 5.55298 0 7.05921V10.6956C0 12.2018 1.22104 13.4228 2.72727 13.4228H3.63636C5.14259 13.4228 6.36364 12.2018 6.36364 10.6956V7.05921C6.35858 6.45136 6.15061 5.86263 5.77273 5.38648C6.45841 3.65157 8.13451 2.51175 10 2.51175C11.8655 2.51175 13.5416 3.65157 14.2273 5.38648C13.8494 5.86263 13.6414 6.45136 13.6364 7.05921V10.6956C13.6364 12.2018 14.8574 13.4228 16.3636 13.4228H17.2727C18.779 13.4228 20 12.2018 20 10.6956V7.05921C20 5.55298 18.779 4.33194 17.2727 4.33194ZM4.54545 10.6956C4.54545 11.1977 4.13844 11.6047 3.63636 11.6047H2.72727C2.2252 11.6047 1.81818 11.1977 1.81818 10.6956V7.05923C1.81818 6.55716 2.2252 6.15014 2.72727 6.15014H3.63636C4.13844 6.15014 4.54545 6.55716 4.54545 7.05923V10.6956ZM17.2727 11.6047C17.7748 11.6047 18.1818 11.1977 18.1818 10.6956V7.05923C18.1818 6.55716 17.7748 6.15014 17.2727 6.15014H16.3636C15.8616 6.15014 15.4545 6.55716 15.4545 7.05923V10.6956C15.4545 11.1977 15.8616 11.6047 16.3636 11.6047H17.2727Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"cm-f-bar-item-label font-secondary-bold text-sm 3xl:text-xs\"\u003EТех. Поддержка\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"layout-page\"\u003E\u003Cdiv class=\"layout-lf\"\u003E\u003Cdiv class=\"lf\"\u003E\u003Cdiv class=\"lf-h\"\u003E\u003Cdiv class=\"lf-bar\"\u003E\u003Cdiv class=\"lf-inf\"\u003E\u003Cdiv class=\"lf-inf-ind\"\u003E\u003Cdiv class=\"lf-inf-ind-point\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"lf-inf-inner\"\u003E\u003Cdiv class=\"lf-inf-ind-value\"\u003E2 381\u003C\u002Fdiv\u003E\u003Cdiv class=\"lf-inf-ind-label\"\u003EOnline\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"lf-toggle\" title=\"Переключить вид\"\u003E\u003Csvg width=\"4\" height=\"22\" viewBox=\"0 0 4 22\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Ccircle cx=\"2\" cy=\"20\" r=\"2\" transform=\"rotate(-90 2 20)\" fill=\"currentColor\"\u002F\u003E\n\u003Ccircle cx=\"2\" cy=\"11\" r=\"2\" transform=\"rotate(-90 2 11)\" fill=\"currentColor\"\u002F\u003E\n\u003Ccircle cx=\"2\" cy=\"2\" r=\"2\" transform=\"rotate(-90 2 2)\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"lf-change\"\u003E\u003Clabel class=\"lf-change-item\"\u003E\u003Cinput type=\"radio\" name=\"lf_type\" value=\"1\" checked\u003E\u003Cdiv class=\"lf-change-btn\"\u003E\u003Cdiv class=\"lf-change-icon\"\u003E\u003Csvg width=\"17\" height=\"19\" viewBox=\"0 0 17 19\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.645 9.11485C13.3576 7.77329 14.0307 5.49305 13.3211 3.43653C12.6115 1.38 10.6755 0 8.5 0C6.3245 0 4.3885 1.38 3.67892 3.43653C2.96933 5.49305 3.64239 7.77329 5.355 9.11485C2.12463 10.4014 0.00358828 13.5257 0 17.0028V17.8528C0 18.3223 0.380558 18.7028 0.85 18.7028C1.31944 18.7028 1.7 18.3223 1.7 17.8528V17.0028C1.7 13.2473 4.74446 10.2028 8.5 10.2028C12.2555 10.2028 15.3 13.2473 15.3 17.0028V17.8528C15.3 18.3223 15.6806 18.7028 16.15 18.7028C16.6194 18.7028 17 18.3223 17 17.8528V17.0028C16.9964 13.5257 14.8754 10.4014 11.645 9.11485ZM5.09991 5.10285C5.09991 3.22508 6.62214 1.70285 8.49991 1.70285C10.3777 1.70285 11.8999 3.22508 11.8999 5.10285C11.8999 6.98062 10.3777 8.50285 8.49991 8.50285C7.59817 8.50285 6.73337 8.14464 6.09575 7.50701C5.45812 6.86939 5.09991 6.00458 5.09991 5.10285Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Flabel\u003E\u003Clabel class=\"lf-change-item\"\u003E\u003Cinput type=\"radio\" name=\"lf_type\" value=\"1\"\u003E\u003Cdiv class=\"lf-change-btn\"\u003E\u003Cdiv class=\"lf-change-icon\"\u003E\u003Csvg width=\"17\" height=\"17\" viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.98 3.24842H14.8835C14.9276 3.12599 14.9589 2.99925 14.977 2.87025C15.1372 1.84138 14.6456 0.820701 13.7457 0.313902C12.8458 -0.192898 11.7287 -0.0781714 10.948 0.601242L8.262 2.92182L5.5845 0.601242C4.80375 -0.0781714 3.68672 -0.192898 2.78682 0.313902C1.88691 0.820701 1.39528 1.84138 1.5555 2.87025C1.57358 2.99925 1.60491 3.12599 1.649 3.24842H1.02C0.45667 3.24842 0 3.71018 0 4.27979V7.3739C0 7.9435 0.45667 8.40526 1.02 8.40526H1.7V14.4216C1.7 15.8456 2.84167 17 4.25 17H12.75C14.1583 17 15.3 15.8456 15.3 14.4216V8.40526H15.98C16.5433 8.40526 17 7.9435 17 7.3739V4.27979C17 3.71018 16.5433 3.24842 15.98 3.24842ZM12.0529 1.90764C12.3064 1.68352 12.6759 1.65582 12.9593 1.83968C13.2428 2.02354 13.3719 2.37469 13.2761 2.70112C13.1803 3.02754 12.8826 3.25064 12.5459 3.24842H10.4974L12.0529 1.90764ZM3.67281 1.79177C3.40454 1.91541 3.23174 2.18537 3.23007 2.48348C3.23007 2.90594 3.56877 3.24841 3.98657 3.24841H6.03507L4.47957 1.90763C4.25596 1.71335 3.94109 1.66813 3.67281 1.79177ZM13.6003 14.4216C13.6003 14.8962 13.2198 15.281 12.7503 15.281H4.25032C3.78088 15.281 3.40032 14.8962 3.40032 14.4216V8.40524H13.6003V14.4216ZM1.70016 6.68629H15.3002V4.96735H1.70016V6.68629Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"lf-feed\"\u003E\u003Cdiv class=\"lf-feed-track\"\u003E";
for (var i = 1; i <= 3; i++)
{
pug_html = pug_html + "\u003Cdiv class=\"lf-item\"\u003E";
pug_mixins["image"]('case-blue.png', 'lf-item-pic', 'case');
pug_html = pug_html + "\u003Cdiv class=\"lf-item-plate\"\u003E\u003Cdiv class=\"lf-item-avatar\"\u003E";
pug_mixins["image"]('avatar-example-1.png', '', 'case');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"lf-item-name\" title=\"Santcese\"\u003ESantcese\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"lf-item\"\u003E";
pug_mixins["image"]('case-violet.png', 'lf-item-pic', 'case');
pug_html = pug_html + "\u003Cdiv class=\"lf-item-plate\"\u003E\u003Cdiv class=\"lf-item-avatar\"\u003E";
pug_mixins["image"]('avatar-example-1.png', '', 'case');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"lf-item-name\" title=\"Santcese\"\u003ESantcese\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"lf-item\"\u003E";
pug_mixins["image"]('case-pink.png', 'lf-item-pic', 'case');
pug_html = pug_html + "\u003Cdiv class=\"lf-item-plate\"\u003E\u003Cdiv class=\"lf-item-avatar\"\u003E";
pug_mixins["image"]('avatar-example-1.png', '', 'case');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"lf-item-name\" title=\"Santcese\"\u003ESantcese\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"lf-item\"\u003E";
pug_mixins["image"]('case-gold.png', 'lf-item-pic', 'case');
pug_html = pug_html + "\u003Cdiv class=\"lf-item-plate\"\u003E\u003Cdiv class=\"lf-item-avatar\"\u003E";
pug_mixins["image"]('avatar-example-1.png', '', 'case');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"lf-item-name\" title=\"Santcese\"\u003ESantcese\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"layout-h px-9 pt-6 3xl:px-4 3xl:pt-4 lg:p-0\"\u003E\u003Cdiv class=\"h-wrapper\"\u003E\u003Cheader class=\"h\"\u003E\u003Ca class=\"h-backlink\" href=\"#\"\u003E\u003Csvg viewBox=\"0 0 26 13\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M0.469669 5.96967C0.176777 6.26257 0.176777 6.73744 0.469669 7.03033L5.24264 11.8033C5.53553 12.0962 6.01041 12.0962 6.3033 11.8033C6.59619 11.5104 6.59619 11.0355 6.3033 10.7426L2.06066 6.5L6.3033 2.25736C6.59619 1.96447 6.59619 1.48959 6.3033 1.1967C6.01041 0.903807 5.53553 0.903808 5.24264 1.1967L0.469669 5.96967ZM26 5.75L1 5.75L1 7.25L26 7.25L26 5.75Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E" + (null == (pug_interp = (__webpack_require__(/*! ../components/_navigation.pug */ "./src/pug/components/_navigation.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Cdiv class=\"h-bar ml-auto flex items-center gap-x-3\"\u003E\u003Cbutton class=\"h-openmenu menu-open\"\u003E\u003Cspan\u003E\u003C\u002Fspan\u003E\u003Cspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"h-notif flex-shrink-0\"\u003E" + (null == (pug_interp = (__webpack_require__(/*! ../components/_notifications.pug */ "./src/pug/components/_notifications.pug").call)(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"h-profile min-w-[300px]\"\u003E\u003Cdiv class=\"pmc h-14 rounded-full px-3 flex items-center gap-x-3 bg-white lg:mx-3 lg:bg-[#f6f9ff] lg:h-auto lg:min-h-[50px] lg:py-2\"\u003E\u003Cdiv class=\"pmc-avatar flex-shrink-0 rounded-full w-8 h-8 lg:w-10 lg:h-10\"\u003E";
pug_mixins["image"]('avatar-example-2.png', 'w-full h-full object-cover', 'user avatar');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"pmc-chip-bar flex gap-x-3 gap-y-2 items-center lg:flex-wrap lg:ml-auto\"\u003E\u003Ca class=\"pmc-chip border rounded-full border-[#DCF1C4] px-2 py-1 flex items-center gap-x-2 duration-200 hover:bg-[#DCF1C4]\" href=\"#\"\u003E\u003Cspan class=\"font-primary-bold text-xs text-black whitespace-nowrap\"\u003E1 521 100PD\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003Ca class=\"pmc-chip border rounded-full border-[#D2DFFB] px-2 py-1 flex items-center gap-x-2 duration-200 hover:bg-[#D2DFFB]\" href=\"#\"\u003E\u003Cspan class=\"font-primary-bold text-xs text-black whitespace-nowrap\"\u003E533 100₽\u003C\u002Fspan\u003E";
pug_mixins["image"]('icon-plus-blue.svg', 'pmc-chip-icon w-4 h-4');
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"pmc-card-arrow h-profile-btn-open ml-auto text-[#D6D9EA] cursor-pointer hover:text-black lg:hidden\"\u003E\u003Csvg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M18 9L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L6 9\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"h-profile-content rounded-[22px] min-w-[290px] py-3 bg-white shadow-sm overflow-hidden\"\u003E" + (null == (pug_interp = (__webpack_require__(/*! ../components/_navigation-profile.pug */ "./src/pug/components/_navigation-profile.pug").call)(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hm\"\u003E\u003Cdiv class=\"hm-inner px-5 flex items-center justify-between\"\u003E\u003Cdiv class=\"hm-logo\"\u003E\u003Cdiv class=\"logo w-[180px] 3xl:w-[150px] xl:w-[120px] lg:w-auto lg:flex-shrink-1 lg:basis-[130px]\"\u003E";
pug_mixins["image"]('dots-1.svg', 'logo__dots lg:h-[100%] xl:w-1/2', '1paid.ru');
pug_mixins["image"]('logo.svg', 'logo-pic', '1paid.ru');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hm-bar flex items-center gap-2.5\"\u003E\u003Cdiv class=\"hm-notif flex-shrink-0\"\u003E" + (null == (pug_interp = (__webpack_require__(/*! ../components/_notifications.pug */ "./src/pug/components/_notifications.pug").call)(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"hm-profile flex-shrink-0\"\u003E\u003Cbutton class=\"btn btn-orange hm-profile-btn flex-shrink-0 rounded-full w-[50px] h-[50px] flex items-center justify-center text-white\"\u003E\u003Csvg width=\"17\" height=\"19\" viewBox=\"0 0 17 19\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.645 9.11485C13.3576 7.77329 14.0307 5.49305 13.3211 3.43653C12.6115 1.38 10.6755 0 8.5 0C6.3245 0 4.3885 1.38 3.67892 3.43653C2.96933 5.49305 3.64239 7.77329 5.355 9.11485C2.12463 10.4014 0.00358828 13.5257 0 17.0028V17.8528C0 18.3223 0.380558 18.7028 0.85 18.7028C1.31944 18.7028 1.7 18.3223 1.7 17.8528V17.0028C1.7 13.2473 4.74446 10.2028 8.5 10.2028C12.2555 10.2028 15.3 13.2473 15.3 17.0028V17.8528C15.3 18.3223 15.6806 18.7028 16.15 18.7028C16.6194 18.7028 17 18.3223 17 17.8528V17.0028C16.9964 13.5257 14.8754 10.4014 11.645 9.11485ZM5.09991 5.10285C5.09991 3.22508 6.62214 1.70285 8.49991 1.70285C10.3777 1.70285 11.8999 3.22508 11.8999 5.10285C11.8999 6.98062 10.3777 8.50285 8.49991 8.50285C7.59817 8.50285 6.73337 8.14464 6.09575 7.50701C5.45812 6.86939 5.09991 6.00458 5.09991 5.10285Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fbutton\u003E\u003Cdiv class=\"hm-profile-content rounded-xl bg-white w-[290px] py-3 lg:w-[320px]\"\u003E\u003Cdiv class=\"pmc h-14 rounded-full px-3 flex items-center gap-x-3 bg-white lg:mx-3 lg:bg-[#f6f9ff] lg:h-auto lg:min-h-[50px] lg:py-2\"\u003E\u003Cdiv class=\"pmc-avatar flex-shrink-0 rounded-full w-8 h-8 lg:w-10 lg:h-10\"\u003E";
pug_mixins["image"]('avatar-example-2.png', 'w-full h-full object-cover', 'user avatar');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"pmc-chip-bar flex gap-x-3 gap-y-2 items-center lg:flex-wrap lg:ml-auto\"\u003E\u003Ca class=\"pmc-chip border rounded-full border-[#DCF1C4] px-2 py-1 flex items-center gap-x-2 duration-200 hover:bg-[#DCF1C4]\" href=\"#\"\u003E\u003Cspan class=\"font-primary-bold text-xs text-black whitespace-nowrap\"\u003E1 521 100PD\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003Ca class=\"pmc-chip border rounded-full border-[#D2DFFB] px-2 py-1 flex items-center gap-x-2 duration-200 hover:bg-[#D2DFFB]\" href=\"#\"\u003E\u003Cspan class=\"font-primary-bold text-xs text-black whitespace-nowrap\"\u003E533 100₽\u003C\u002Fspan\u003E";
pug_mixins["image"]('icon-plus-blue.svg', 'pmc-chip-icon w-4 h-4');
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"pmc-card-arrow h-profile-btn-open ml-auto text-[#D6D9EA] cursor-pointer hover:text-black lg:hidden\"\u003E\u003Csvg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M18 9L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L6 9\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"mt-3\"\u003E\u003C\u002Fdiv\u003E" + (null == (pug_interp = (__webpack_require__(/*! ../components/_navigation-profile.pug */ "./src/pug/components/_navigation-profile.pug").call)(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hm-btn-menu mmenu-open flex-shrink-0 w-[50px] h-[50px] flex justify-center items-center flex-col gap-4 cursor-pointer\"\u003E\u003Cspan class=\"w-[30px] h-[3px] bg-white rounded-full\"\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"w-[30px] h-[3px] bg-white rounded-full\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"layout-b pb-4 px-9 3xl:px-4 min-w-0 sm:px-3\"\u003E";
var notifList = [
  {
    text: 'Вы получили бонус + 500 рублей.',
    datetime: '27.02.2020 15:34'
  },
  {
    text: '<a href="#">Lacoste17</a> ответил(а) в теме <a href="#">Бесплатная бесконечная</a>',
    datetime: '27.02.2020 15:34',
    isMore: true
  },
  {
    text: '<a href="#">Lacoste17</a> ответил(а) в теме <a href="#">Бесплатная бесконечная накрутка лайков на пост ВК. Подскажу как сделать накрутку легально</a>',
    datetime: '27.02.2020 15:34',
    isMore: true
  },
  {
    text: 'Вы получили бонус + 500 рублей.',
    datetime: '27.02.2020 15:34'
  },
  {
    text: 'Вы получили бонус + 500 рублей.',
    datetime: '27.02.2020 15:34'
  },
  {
    text: 'Вы получили бонус + 500 рублей.',
    datetime: '27.02.2020 15:34'
  },
  {
    text: '<a href="#">Lacoste17</a> ответил(а) в теме <a href="#">Бесплатная бесконечная накрутка лайков на пост ВК.</a> ',
    datetime: '27.02.2020 15:34',
    isMore: true
  },
]

pug_html = pug_html + "\u003Cdiv class=\"sntf mt-5\"\u003E";
pug_mixins["section-header"]('Ваши уведомления', true);
pug_html = pug_html + "\u003Cdiv class=\"sntf-grid mt-11 grid grid-cols-1 gap-3 2md:mt-5\"\u003E";
// iterate notifList
;(function(){
  var $$obj = notifList;
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var item = $$obj[pug_index9];
pug_mixins["notification-card"](item);
      }
  } else {
    var $$l = 0;
    for (var pug_index9 in $$obj) {
      $$l++;
      var item = $$obj[pug_index9];
pug_mixins["notification-card"](item);
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E" + (null == (pug_interp = (__webpack_require__(/*! ../components/_pagination.pug */ "./src/pug/components/_pagination.pug").call)(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"layout-b-f flex justify-between mt-6 3sm:mt-3\"\u003E\u003Cbutton class=\"layout-btn-totop scroll-to-top rounded-full w-16 h-16 flex items-center justify-center bg-[#D7DFF5] hover:bg-[#d0d8f3] shadow-2xl 3sm:w-11 3sm:h-11\"\u003E\u003Cdiv class=\"btn-icon text-[#BDC6E0] w-1\u002F2 h-1\u002F2 [&amp;_svg]:w-full [&amp;_svg]:h-full\"\u003E\u003Csvg viewBox=\"0 0 16 26\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M8.70711 0.292648C8.31658 -0.0978756 7.68342 -0.0978756 7.29289 0.292648L0.928931 6.65661C0.538407 7.04713 0.538407 7.6803 0.928931 8.07082C1.31946 8.46135 1.95262 8.46135 2.34315 8.07082L8 2.41397L13.6569 8.07082C14.0474 8.46135 14.6805 8.46135 15.0711 8.07082C15.4616 7.6803 15.4616 7.04713 15.0711 6.65661L8.70711 0.292648ZM9 25.9998L9 0.999756L7 0.999756L7 25.9998L9 25.9998Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Fbutton\u003E\u003Cbutton class=\"layout-btn-openchat open-fast-chat rounded-full rounded-br-none w-[65px] h-[65px] flex items-center justify-center bg-gradient-primary shadow-2xl 3sm:w-11 3sm:h-11\"\u003E\u003Cdiv class=\"btn-icon text-[#BDC6E0] w-[22px] h-[19px] [&amp;_svg]:w-full [&amp;_svg]:h-full text-white\"\u003E\u003Csvg  viewBox=\"0 0 21 20\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.25657 0H17.802C19.3083 0 20.5293 1.4396 20.5293 3.21543V12.8617C20.5293 14.6376 19.3083 16.0772 17.802 16.0772H10.9838L8.89293 19.3569C8.6354 19.7617 8.23124 20 7.80202 20C7.37281 20 6.96864 19.7617 6.71112 19.3569L4.62021 16.0772H3.25657C1.75034 16.0772 0.529297 14.6376 0.529297 12.8617V3.21543C0.529297 1.4396 1.75034 0 3.25657 0ZM17.8022 13.9336C18.3043 13.9336 18.7113 13.4538 18.7113 12.8618V3.21551C18.7113 2.62356 18.3043 2.1437 17.8022 2.1437H3.25675C2.75467 2.1437 2.34766 2.62356 2.34766 3.21551V12.8618C2.34766 13.4538 2.75467 13.9336 3.25675 13.9336H5.52947L7.8022 17.5028L10.0749 13.9336H17.8022Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath d=\"M5.07511 6.43085H9.62056C10.1226 6.43085 10.5297 5.95099 10.5297 5.35904C10.5297 4.7671 10.1226 4.28723 9.62056 4.28723H5.07511C4.57303 4.28723 4.16602 4.7671 4.16602 5.35904C4.16602 5.95099 4.57303 6.43085 5.07511 6.43085Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath d=\"M15.0751 8.57446H5.07511C4.57303 8.57446 4.16602 9.05433 4.16602 9.64627C4.16602 10.2382 4.57303 10.7181 5.07511 10.7181H15.0751C15.5772 10.7181 15.9842 10.2382 15.9842 9.64627C15.9842 9.05433 15.5772 8.57446 15.0751 8.57446Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
var tabsList = [
  {
      label: "Чат с поддержкой",
      active: true
  },
  {
      label: "мои диалоги",
      active: false
  },
]

pug_html = pug_html + "\u003Cdiv class=\"fa-wrapper bg-white\u002F30 top-0 left-0 min-h-screen h-full w-full absolute z-20\"\u003E\u003Cdiv class=\"fa flex flex-col items-center bg-white h-full w-full max-w-[440px] float-right right-0 relative\"\u003E\u003Cdiv class=\"fa-head relative w-full mb-[12px]\"\u003E\u003Cdiv class=\"pc-plate-container\"\u003E\u003Cdiv class=\"pc-plate bg-gradient-primary _shadow-primary py-1 px-6 3sm:px-2 3sm:py-[1px] rounded-b-[22px]\"\u003EБыстрый доступ\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"fa-btn-close flex-shrink-0 w-4 h-4 [&amp;_svg]:w-[100%] [&amp;_svg]:h-[100%] text-[#D6D9EA] cursor-pointer float-right mr-[30px] mt-[30px] 2md:block\"\u003E\u003Csvg viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M0.424023 17.576C-0.0462888 17.1028 -0.0462888 16.3387 0.424023 15.8656L15.8656 0.424038C16.1621 0.0778742 16.6275 -0.0729097 17.0706 0.0336795C17.5137 0.140269 17.8597 0.486241 17.9663 0.929353C18.0729 1.37247 17.9221 1.83793 17.5759 2.13438L2.13436 17.576C1.66124 18.0463 0.897141 18.0463 0.424023 17.576Z\" fill=\"currentColor\"\u002F\u003E\n\u003Cpath d=\"M0.424023 0.424023C0.897141 -0.0462888 1.66124 -0.0462888 2.13436 0.424023L17.5759 15.8656C17.9221 16.1621 18.0729 16.6275 17.9663 17.0706C17.8597 17.5137 17.5137 17.8597 17.0706 17.9663C16.6275 18.0729 16.1621 17.9221 15.8656 17.5759L0.424023 2.13436C-0.0462888 1.66124 -0.0462888 0.897141 0.424023 0.424023Z\" fill=\"currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["tabs"](tabsList);
pug_html = pug_html + "\u003Cdiv class=\"fa-content flex-grow w-full overflow-hidden\"\u003E\u003Cdiv class=\"chat flex flex-col bg-white font-primary-med px-[22px] text-[#8FA0C3] w-full\"\u003E\u003Cdiv class=\"chat-head-wrapper flex justify-between items-center text-[14px] mb-[22px]\"\u003E\u003Cdiv class=\"chat-head flex items-center\"\u003E\u003Cdiv class=\"chat-head-avatars flex\"\u003E\u003Cdiv class=\"fm-message-avatar-wrapper flex-shrink-0 overflow-hidden relative bg-white rounded-full p-[6px]\"\u003E\u003Cdiv class=\"fm-message-avatar flex-shrink-0 w-[40px] h-[40px] overflow-hidden rounded-full\"\u003E";
pug_mixins["image"]('avatar-example-bot.png', 'sps-avatar-pic w-full h-full object-cover', 'user');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chat-head-user flex flex-col\"\u003E\u003Cdiv class=\"chat-head-username flex font-secondary-bold text-md text-black\"\u003ESupport\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chat-messages flex flex-col flex-grow justify-end text-[12px]\"\u003E";
pug_mixins["chat-message"]('avatar-example-bot.png', "income", "Привет, как дела ?");
pug_mixins["chat-message"]('', "income", "Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой ");
pug_mixins["chat-message"]('avatar-example-bot.png', "income", "Привет, как дела ?");
pug_mixins["chat-message"]('avatar-example-bot.png', "income", "Привет, как дела ?");
pug_mixins["chat-message"]('', "out", "Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в 19:00 я готов продать дома буду как раз и мы все сделаем с тобой ");
pug_mixins["chat-message"]('avatar-example-1.png', "out", "Привет, как дела ?");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"chat-form flex flex-col mt-[24px]\"\u003E";
pug_mixins["rating"]("w-full mx-auto mb-[24px]", 5, 4);
pug_html = pug_html + "\u003Cdiv class=\"chat-tech-types no-scrollbar flex items-center mx-auto mb-[24px] px-[12px] max-w-[100%] font-secondary-med text-[14px] overflow-x-scroll\"\u003E\u003Cdiv class=\"chat-tech-types flex items-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black mr-[12px] py-[8px] px-[16px] rounded-full cursor-pointer\"\u003EФинансы\u003C\u002Fdiv\u003E\u003Cdiv class=\"chat-tech-types flex items-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black mr-[12px] py-[8px] px-[16px] rounded-full cursor-pointer\"\u003EСделка\u003C\u002Fdiv\u003E\u003Cdiv class=\"chat-tech-types flex items-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black mr-[12px] py-[8px] px-[16px] rounded-full cursor-pointer\"\u003EФорум\u003C\u002Fdiv\u003E\u003Cdiv class=\"chat-tech-types flex items-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black mr-[12px] py-[8px] px-[16px] rounded-full whitespace-nowrap cursor-pointer\"\u003EНашел ошибку\u003C\u002Fdiv\u003E\u003Cdiv class=\"chat-tech-types flex items-center bg-[#E9EDF5] hover:bg-[#D1D5DB] text-black py-[8px] px-[16px] rounded-full cursor-pointer\"\u003EДругое\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["chat-input"]('w-full', 'Вставьте содержимое товара...');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
var navList = [
  {link: '#', label: 'Пользовательское соглашение'},
  {link: '#', label: 'Контакты'},
  {link: '#', label: 'Частые вопросы'},
]

var socialList = [
  {link: '#', label: 'instagram', icon: 'icon-inst-grey.svg'},
  {link: '#', label: 'discrod', icon: 'icon-discord-grey.svg'},
  {link: '#', label: 'vk', icon: 'icon-vk-grey.svg'},
  {link: '#', label: 'youtube', icon: 'icon-yt-grey.svg'},
]

pug_html = pug_html + "\u003Cfooter class=\"footer flex justify-between items-center flex-wrap gap-8 text-sm py-10 px-20 3xl:px-10 2md:flex-col 2md:p-5 2md:gap-4 2md:text-center\"\u003E\u003Cdiv class=\"footer-copy max-w-sm 2md:max-w-none 2md:order-1 2md:text-xs \"\u003E1paid.ru — Маркетплейс по продажам цифровых товаров. © 2023, Все права защищены.\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-list flex flex-wrap gap-x-8 gap-y-2.5 2md:flex-col\"\u003E";
// iterate navList
;(function(){
  var $$obj = navList;
  if ('number' == typeof $$obj.length) {
      for (var pug_index10 = 0, $$l = $$obj.length; pug_index10 < $$l; pug_index10++) {
        var item = $$obj[pug_index10];
pug_html = pug_html + "\u003Ca" + (" class=\"hover:text-white duration-200\""+pug.attr("href", item.link, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.label) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index10 in $$obj) {
      $$l++;
      var item = $$obj[pug_index10];
pug_html = pug_html + "\u003Ca" + (" class=\"hover:text-white duration-200\""+pug.attr("href", item.link, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.label) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-soc flex gap-5 2md:flex-wrap 2md:justify-center\"\u003E";
// iterate socialList
;(function(){
  var $$obj = socialList;
  if ('number' == typeof $$obj.length) {
      for (var pug_index11 = 0, $$l = $$obj.length; pug_index11 < $$l; pug_index11++) {
        var item = $$obj[pug_index11];
pug_html = pug_html + "\u003Ca" + (" class=\"shrink-0 leading-none duration-200\""+pug.attr("href", item.link, true, true)) + "\u003E";
pug_mixins["image"](item.icon, 'footer-soc-icon' , item.label);
pug_html = pug_html + "\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index11 in $$obj) {
      $$l++;
      var item = $$obj[pug_index11];
pug_html = pug_html + "\u003Ca" + (" class=\"shrink-0 leading-none duration-200\""+pug.attr("href", item.link, true, true)) + "\u003E";
pug_mixins["image"](item.icon, 'footer-soc-icon' , item.label);
pug_html = pug_html + "\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"mmenu pt-8 pb-8 px-12\"\u003E\u003Cdiv class=\"mmenu-close flex-shrink-0 w-[50px] h-[50px] flex justify-center items-center flex-col gap-4 cursor-pointer\"\u003E\u003Cspan class=\"w-[30px] h-[3px] bg-white rounded-full\"\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"w-[30px] h-[3px] bg-white rounded-full\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"mmenu-nav flex gap-x-4\"\u003E" + (null == (pug_interp = (__webpack_require__(/*! ../components/_navigation.pug */ "./src/pug/components/_navigation.pug").call)(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"mmenu-pnav pt-8 max-w-[400px]\"\u003E";
var navLinks = [
  {
    label: 'Продать товар',
    link: '#',
    icon: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.0161 24.9999C23.5605 24.9999 24.8125 23.728 24.8125 22.159C24.8125 20.59 23.5605 19.3181 22.0161 19.3181C20.4717 19.3181 19.2197 20.59 19.2197 22.159C19.2197 23.728 20.4717 24.9999 22.0161 24.9999ZM22.016 22.7272C21.7096 22.7211 21.4627 22.4702 21.4568 22.159C21.4568 21.8452 21.7071 21.5908 22.016 21.5908C22.3249 21.5908 22.5753 21.8452 22.5753 22.159C22.5753 22.4728 22.3249 22.7272 22.016 22.7272Z" fill="currentColor"/><path d="M24.8111 16.3636C25.4289 16.3636 25.9297 16.8724 25.9297 17.5C25.9297 18.1276 25.4289 18.6364 24.8111 18.6364H14.5092L13.0327 24.1591C12.869 24.7647 12.2531 25.1209 11.6569 24.9545C11.0608 24.7882 10.7102 24.1625 10.8739 23.5568L12.1938 18.6364H10.4489C9.83296 18.6382 9.29627 18.2104 9.15135 17.6023L6.60105 7.27273H4.11785C3.50009 7.27273 2.9993 6.76396 2.9993 6.13636C2.9993 5.50877 3.50009 5 4.11785 5H7.30574C7.92026 5.00231 8.45475 5.42829 8.60326 6.03409L11.1424 16.3636H24.8111Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0735 15.2273C24.7097 15.2307 25.2608 14.7799 25.3934 14.1477L26.9705 6.64773C27.0548 6.24596 26.9562 5.82701 26.7023 5.50732C26.4484 5.18763 26.0662 5.00126 25.6618 5H11.6463C11.2459 5.00801 10.8699 5.19724 10.6211 5.51602C10.3722 5.83479 10.2765 6.24981 10.36 6.64773L11.9371 14.1477C12.0697 14.7799 12.6208 15.2307 13.257 15.2273H24.0735ZM13.9618 12.9545L12.7649 7.27268H24.5545L23.3577 12.9545H13.9618Z" fill="currentColor"/></svg>'
  },
  {
    label: 'Закладки',
    link: '#',
    icon: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1525 16.8475L15.1525 21.8475L10.1525 16.8475L7.3125 14.0075C5.93178 12.6268 5.93178 10.3882 7.3125 9.0075C8.69321 7.62679 10.9318 7.62679 12.3125 9.0075L15.1525 11.8675L17.9925 9.0275C19.3732 7.64679 21.6118 7.64679 22.9925 9.0275C24.3732 10.4082 24.3732 12.6468 22.9925 14.0275L20.1525 16.8475ZM13.7525 7.6175C11.5958 5.46083 8.09917 5.46083 5.9425 7.6175C3.78582 9.77418 3.78582 13.2708 5.9425 15.4275L7.3625 16.8475L15.1525 24.6575L22.9625 16.8475L24.3825 15.4275C26.5392 13.2708 26.5392 9.77418 24.3825 7.6175C22.2258 5.46083 18.7292 5.46083 16.5725 7.6175L15.1525 9.0375L13.7525 7.6175Z" fill="currentColor"/></svg>'
  },
  {
    label: 'История просмотра',
    link: '#',
    icon: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 16C24.6569 16 26 14.6569 26 13V9C26 7.34315 24.6569 6 23 6H19C17.3431 6 16 7.34315 16 9V13C16 14.6569 17.3431 16 19 16H23ZM24 13C24 13.5523 23.5523 14 23 14H19C18.4477 14 18 13.5523 18 13V9C18 8.44772 18.4477 8 19 8H23C23.5523 8 24 8.44772 24 9V13Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 16C12.6569 16 14 14.6569 14 13V9C14 7.34315 12.6569 6 11 6H7C5.34315 6 4 7.34315 4 9V13C4 14.6569 5.34315 16 7 16H11ZM12 13C12 13.5523 11.5523 14 11 14H7C6.44772 14 6 13.5523 6 13V9C6 8.44772 6.44772 8 7 8H11C11.5523 8 12 8.44772 12 9V13Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25 19C25 18.4477 24.5523 18 24 18H18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20H24C24.5523 20 25 19.5523 25 19Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25 23C25 22.4477 24.5523 22 24 22H20C19.4477 22 19 22.4477 19 23C19 23.5523 19.4477 24 20 24H24C24.5523 24 25 23.5523 25 23Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 19C13 18.4477 12.5523 18 12 18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H12C12.5523 20 13 19.5523 13 19Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 23C13 22.4477 12.5523 22 12 22H8C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24H12C12.5523 24 13 23.5523 13 23Z" fill="currentColor"/></svg>'
  },
  {
    label: 'История покупок и продаж',
    link: '#',
    icon: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H9C8.20435 4 7.44129 4.31607 6.87868 4.87868C6.31607 5.44129 6 6.20435 6 7V24.8C6.00064 25.2303 6.25209 25.6207 6.64357 25.7992C7.03506 25.9777 7.4947 25.9116 7.82 25.63L10.5 23.33L13.29 25.72C13.6649 26.0427 14.2091 26.0754 14.62 25.8L18.42 23.26L21.18 25.63C21.5053 25.9116 21.9649 25.9777 22.3564 25.7992C22.7479 25.6207 22.9994 25.2303 23 24.8V7C23 5.34315 21.6569 4 20 4ZM9.78 21.3L8 22.83V7C8 6.44772 8.44771 6 9 6H20C20.5523 6 21 6.44772 21 7V22.84L19.21 21.29C18.8337 20.9706 18.2918 20.938 17.88 21.21L14.08 23.75L11.22 21.3C10.8036 20.9505 10.1964 20.9505 9.78 21.3Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H9C8.20435 4 7.44129 4.31607 6.87868 4.87868C6.31607 5.44129 6 6.20435 6 7V24.8C6.00064 25.2303 6.25209 25.6207 6.64357 25.7992C7.03506 25.9777 7.4947 25.9116 7.82 25.63L10.5 23.33L13.29 25.72C13.6649 26.0427 14.2091 26.0754 14.62 25.8L18.42 23.26L21.18 25.63C21.5053 25.9116 21.9649 25.9777 22.3564 25.7992C22.7479 25.6207 22.9994 25.2303 23 24.8V7C23 5.34315 21.6569 4 20 4ZM9.78 21.3L8 22.83V7C8 6.44772 8.44771 6 9 6H20C20.5523 6 21 6.44772 21 7V22.84L19.21 21.29C18.8337 20.9706 18.2918 20.938 17.88 21.21L14.08 23.75L11.22 21.3C10.8036 20.9505 10.1964 20.9505 9.78 21.3Z" fill="currentColor"/><path d="M19 10H12C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10Z" fill="currentColor"/><path d="M19 10H12C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10Z" fill="currentColor"/><path d="M19 14H15C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14Z" fill="currentColor"/><path d="M19 14H15C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14Z" fill="currentColor"/><path d="M11 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H11C10.4477 18 10 17.5523 10 17C10 16.4477 10.4477 16 11 16Z" fill="currentColor"/><path d="M11 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H11C10.4477 18 10 17.5523 10 17C10 16.4477 10.4477 16 11 16Z" fill="currentColor"/></svg>'
  },
]

pug_html = pug_html + "\u003Cdiv class=\"navpin\"\u003E";
// iterate navLinks
;(function(){
  var $$obj = navLinks;
  if ('number' == typeof $$obj.length) {
      for (var pug_index12 = 0, $$l = $$obj.length; pug_index12 < $$l; pug_index12++) {
        var item = $$obj[pug_index12];
pug_html = pug_html + "\u003Ca" + (" class=\"navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4\""+pug.attr("href", item.link, true, true)) + "\u003E\u003Cdiv class=\"navpin-plate\"\u003E";
pug_mixins["image"]('link-pin-plate.svg', 'navpin-plate-pic', 'dots');
pug_mixins["image"]('dots-1.svg', 'navpin-plate__dots-1', 'dots');
pug_mixins["image"]('dots-1.svg', 'navpin-plate__dots-2', 'dots');
pug_html = pug_html + "\u003Cdiv class=\"navpin-plate-icon\"\u003E" + (null == (pug_interp = item.icon) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"navpin-text text-sm uppercase ml-7 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs\"\u003E" + (pug.escape(null == (pug_interp = item.label) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index12 in $$obj) {
      $$l++;
      var item = $$obj[pug_index12];
pug_html = pug_html + "\u003Ca" + (" class=\"navpin-item mt-[30px] first-of-type:mt-0 3xl:mt-4\""+pug.attr("href", item.link, true, true)) + "\u003E\u003Cdiv class=\"navpin-plate\"\u003E";
pug_mixins["image"]('link-pin-plate.svg', 'navpin-plate-pic', 'dots');
pug_mixins["image"]('dots-1.svg', 'navpin-plate__dots-1', 'dots');
pug_mixins["image"]('dots-1.svg', 'navpin-plate__dots-2', 'dots');
pug_html = pug_html + "\u003Cdiv class=\"navpin-plate-icon\"\u003E" + (null == (pug_interp = item.icon) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"navpin-text text-sm uppercase ml-7 3xl:text-xs 3xl:ml-4 xl:ml-2 xl:text-[10px] lg:text-xs\"\u003E" + (pug.escape(null == (pug_interp = item.label) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"bodyNoScroll" in locals_for_with?locals_for_with.bodyNoScroll:typeof bodyNoScroll!=="undefined"?bodyNoScroll:undefined,"isGameNotSelected" in locals_for_with?locals_for_with.isGameNotSelected:typeof isGameNotSelected!=="undefined"?isGameNotSelected:undefined,"pageModificator" in locals_for_with?locals_for_with.pageModificator:typeof pageModificator!=="undefined"?pageModificator:undefined,"pageTitle" in locals_for_with?locals_for_with.pageTitle:typeof pageTitle!=="undefined"?pageTitle:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./achievements-example.png": "./src/assets/images/achievements-example.png",
	"./actions-star.svg": "./src/assets/images/actions-star.svg",
	"./avatar-example-1.png": "./src/assets/images/avatar-example-1.png",
	"./avatar-example-2.png": "./src/assets/images/avatar-example-2.png",
	"./avatar-example-3.png": "./src/assets/images/avatar-example-3.png",
	"./avatar-example-4.png": "./src/assets/images/avatar-example-4.png",
	"./avatar-example-5.png": "./src/assets/images/avatar-example-5.png",
	"./avatar-example-bot.png": "./src/assets/images/avatar-example-bot.png",
	"./banner-bg-1.png": "./src/assets/images/banner-bg-1.png",
	"./card-find.png": "./src/assets/images/card-find.png",
	"./case-blue.png": "./src/assets/images/case-blue.png",
	"./case-card-bg-blue.png": "./src/assets/images/case-card-bg-blue.png",
	"./case-card-bg-gold.png": "./src/assets/images/case-card-bg-gold.png",
	"./case-card-bg-pink.png": "./src/assets/images/case-card-bg-pink.png",
	"./case-gold.png": "./src/assets/images/case-gold.png",
	"./case-item.png": "./src/assets/images/case-item.png",
	"./case-pink.png": "./src/assets/images/case-pink.png",
	"./case-roulette-point.svg": "./src/assets/images/case-roulette-point.svg",
	"./case-violet.png": "./src/assets/images/case-violet.png",
	"./deal-item.png": "./src/assets/images/deal-item.png",
	"./dots-1.svg": "./src/assets/images/dots-1.svg",
	"./eclipse-seperator.svg": "./src/assets/images/eclipse-seperator.svg",
	"./favicon.png": "./src/assets/images/favicon.png",
	"./game-card-bg-csgo.png": "./src/assets/images/game-card-bg-csgo.png",
	"./game-card-bg-dota2.png": "./src/assets/images/game-card-bg-dota2.png",
	"./game-card-bg-fortnite.png": "./src/assets/images/game-card-bg-fortnite.png",
	"./game-card-bg-gta5.png": "./src/assets/images/game-card-bg-gta5.png",
	"./game-card-bg-warface.png": "./src/assets/images/game-card-bg-warface.png",
	"./game-card-bg-wot.png": "./src/assets/images/game-card-bg-wot.png",
	"./giveaway-item.png": "./src/assets/images/giveaway-item.png",
	"./header-shape.svg": "./src/assets/images/header-shape.svg",
	"./icon-add.svg": "./src/assets/images/icon-add.svg",
	"./icon-alarm.svg": "./src/assets/images/icon-alarm.svg",
	"./icon-arrow-angle-down.svg": "./src/assets/images/icon-arrow-angle-down.svg",
	"./icon-arrow-angle-left.svg": "./src/assets/images/icon-arrow-angle-left.svg",
	"./icon-arrow-angle-right.svg": "./src/assets/images/icon-arrow-angle-right.svg",
	"./icon-arrow-left.svg": "./src/assets/images/icon-arrow-left.svg",
	"./icon-arrow-right-2.svg": "./src/assets/images/icon-arrow-right-2.svg",
	"./icon-arrow-right.svg": "./src/assets/images/icon-arrow-right.svg",
	"./icon-arrow-top.svg": "./src/assets/images/icon-arrow-top.svg",
	"./icon-buy.svg": "./src/assets/images/icon-buy.svg",
	"./icon-camera.svg": "./src/assets/images/icon-camera.svg",
	"./icon-cards.svg": "./src/assets/images/icon-cards.svg",
	"./icon-chat-message.svg": "./src/assets/images/icon-chat-message.svg",
	"./icon-chats.svg": "./src/assets/images/icon-chats.svg",
	"./icon-check-primary.svg": "./src/assets/images/icon-check-primary.svg",
	"./icon-close.svg": "./src/assets/images/icon-close.svg",
	"./icon-comparation.svg": "./src/assets/images/icon-comparation.svg",
	"./icon-copy.svg": "./src/assets/images/icon-copy.svg",
	"./icon-csgo.png": "./src/assets/images/icon-csgo.png",
	"./icon-delivery-secondary.svg": "./src/assets/images/icon-delivery-secondary.svg",
	"./icon-discord-grey.svg": "./src/assets/images/icon-discord-grey.svg",
	"./icon-dota2.png": "./src/assets/images/icon-dota2.png",
	"./icon-dots-1.svg": "./src/assets/images/icon-dots-1.svg",
	"./icon-dots-2.svg": "./src/assets/images/icon-dots-2.svg",
	"./icon-edit.svg": "./src/assets/images/icon-edit.svg",
	"./icon-eye.svg": "./src/assets/images/icon-eye.svg",
	"./icon-filter.svg": "./src/assets/images/icon-filter.svg",
	"./icon-fortnite.png": "./src/assets/images/icon-fortnite.png",
	"./icon-game-rank-1.svg": "./src/assets/images/icon-game-rank-1.svg",
	"./icon-gift.svg": "./src/assets/images/icon-gift.svg",
	"./icon-gta5.png": "./src/assets/images/icon-gta5.png",
	"./icon-headphones-secondary.svg": "./src/assets/images/icon-headphones-secondary.svg",
	"./icon-headphones.svg": "./src/assets/images/icon-headphones.svg",
	"./icon-inst-grey.svg": "./src/assets/images/icon-inst-grey.svg",
	"./icon-lightning-primary.svg": "./src/assets/images/icon-lightning-primary.svg",
	"./icon-like-fill.svg": "./src/assets/images/icon-like-fill.svg",
	"./icon-like-outline.svg": "./src/assets/images/icon-like-outline.svg",
	"./icon-like-secondary.svg": "./src/assets/images/icon-like-secondary.svg",
	"./icon-like.svg": "./src/assets/images/icon-like.svg",
	"./icon-list.svg": "./src/assets/images/icon-list.svg",
	"./icon-lock-primary.svg": "./src/assets/images/icon-lock-primary.svg",
	"./icon-newspaper.svg": "./src/assets/images/icon-newspaper.svg",
	"./icon-play-video.svg": "./src/assets/images/icon-play-video.svg",
	"./icon-plus-blue.svg": "./src/assets/images/icon-plus-blue.svg",
	"./icon-question.svg": "./src/assets/images/icon-question.svg",
	"./icon-search.svg": "./src/assets/images/icon-search.svg",
	"./icon-send-end.svg": "./src/assets/images/icon-send-end.svg",
	"./icon-send.svg": "./src/assets/images/icon-send.svg",
	"./icon-shopping-box.svg": "./src/assets/images/icon-shopping-box.svg",
	"./icon-shopping-card-gradient.svg": "./src/assets/images/icon-shopping-card-gradient.svg",
	"./icon-shopping-cart-2.svg": "./src/assets/images/icon-shopping-cart-2.svg",
	"./icon-shopping-cart-3.svg": "./src/assets/images/icon-shopping-cart-3.svg",
	"./icon-shopping-cart.svg": "./src/assets/images/icon-shopping-cart.svg",
	"./icon-star-yellow.svg": "./src/assets/images/icon-star-yellow.svg",
	"./icon-user.svg": "./src/assets/images/icon-user.svg",
	"./icon-vk-grey.svg": "./src/assets/images/icon-vk-grey.svg",
	"./icon-wallet-secondary.svg": "./src/assets/images/icon-wallet-secondary.svg",
	"./icon-warface.png": "./src/assets/images/icon-warface.png",
	"./icon-wot.png": "./src/assets/images/icon-wot.png",
	"./icon-yt-grey.svg": "./src/assets/images/icon-yt-grey.svg",
	"./link-pin-plate.svg": "./src/assets/images/link-pin-plate.svg",
	"./logo.svg": "./src/assets/images/logo.svg",
	"./message-deal-item.png": "./src/assets/images/message-deal-item.png",
	"./oc-drum-item.svg": "./src/assets/images/oc-drum-item.svg",
	"./ocd-bg-1.png": "./src/assets/images/ocd-bg-1.png",
	"./ocd-bg-2.png": "./src/assets/images/ocd-bg-2.png",
	"./product-preview-1.png": "./src/assets/images/product-preview-1.png",
	"./raffle.png": "./src/assets/images/raffle.png",
	"./vk-icon-white.svg": "./src/assets/images/vk-icon-white.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/images/achievements-example.png":
/*!****************************************************!*\
  !*** ./src/assets/images/achievements-example.png ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/achievements-example.7996faae.png";

/***/ }),

/***/ "./src/assets/images/actions-star.svg":
/*!********************************************!*\
  !*** ./src/assets/images/actions-star.svg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/actions-star.3fe01b73.svg";

/***/ }),

/***/ "./src/assets/images/avatar-example-1.png":
/*!************************************************!*\
  !*** ./src/assets/images/avatar-example-1.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/avatar-example-1.efb6cc72.png";

/***/ }),

/***/ "./src/assets/images/avatar-example-2.png":
/*!************************************************!*\
  !*** ./src/assets/images/avatar-example-2.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/avatar-example-2.9f0c98b7.png";

/***/ }),

/***/ "./src/assets/images/avatar-example-3.png":
/*!************************************************!*\
  !*** ./src/assets/images/avatar-example-3.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/avatar-example-3.347bde69.png";

/***/ }),

/***/ "./src/assets/images/avatar-example-4.png":
/*!************************************************!*\
  !*** ./src/assets/images/avatar-example-4.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/avatar-example-4.6cd623f4.png";

/***/ }),

/***/ "./src/assets/images/avatar-example-5.png":
/*!************************************************!*\
  !*** ./src/assets/images/avatar-example-5.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/avatar-example-5.00d4721a.png";

/***/ }),

/***/ "./src/assets/images/avatar-example-bot.png":
/*!**************************************************!*\
  !*** ./src/assets/images/avatar-example-bot.png ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/avatar-example-bot.1e9be783.png";

/***/ }),

/***/ "./src/assets/images/card-find.png":
/*!*****************************************!*\
  !*** ./src/assets/images/card-find.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/card-find.d3de9e6d.png";

/***/ }),

/***/ "./src/assets/images/case-blue.png":
/*!*****************************************!*\
  !*** ./src/assets/images/case-blue.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/case-blue.6568b466.png";

/***/ }),

/***/ "./src/assets/images/case-card-bg-blue.png":
/*!*************************************************!*\
  !*** ./src/assets/images/case-card-bg-blue.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/case-card-bg-blue.3960969d.png";

/***/ }),

/***/ "./src/assets/images/case-card-bg-gold.png":
/*!*************************************************!*\
  !*** ./src/assets/images/case-card-bg-gold.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/case-card-bg-gold.c93e1483.png";

/***/ }),

/***/ "./src/assets/images/case-card-bg-pink.png":
/*!*************************************************!*\
  !*** ./src/assets/images/case-card-bg-pink.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/case-card-bg-pink.97f9baea.png";

/***/ }),

/***/ "./src/assets/images/case-gold.png":
/*!*****************************************!*\
  !*** ./src/assets/images/case-gold.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/case-gold.dea4179e.png";

/***/ }),

/***/ "./src/assets/images/case-item.png":
/*!*****************************************!*\
  !*** ./src/assets/images/case-item.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/case-item.d663c019.png";

/***/ }),

/***/ "./src/assets/images/case-pink.png":
/*!*****************************************!*\
  !*** ./src/assets/images/case-pink.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/case-pink.17c520f2.png";

/***/ }),

/***/ "./src/assets/images/case-roulette-point.svg":
/*!***************************************************!*\
  !*** ./src/assets/images/case-roulette-point.svg ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/case-roulette-point.4197bd5f.svg";

/***/ }),

/***/ "./src/assets/images/case-violet.png":
/*!*******************************************!*\
  !*** ./src/assets/images/case-violet.png ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/case-violet.2050f5bf.png";

/***/ }),

/***/ "./src/assets/images/deal-item.png":
/*!*****************************************!*\
  !*** ./src/assets/images/deal-item.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/deal-item.7a8dcb46.png";

/***/ }),

/***/ "./src/assets/images/dots-1.svg":
/*!**************************************!*\
  !*** ./src/assets/images/dots-1.svg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/dots-1.82560447.svg";

/***/ }),

/***/ "./src/assets/images/eclipse-seperator.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/eclipse-seperator.svg ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/eclipse-seperator.dbb00748.svg";

/***/ }),

/***/ "./src/assets/images/favicon.png":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.png ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/favicon.b50e37b5.png";

/***/ }),

/***/ "./src/assets/images/game-card-bg-csgo.png":
/*!*************************************************!*\
  !*** ./src/assets/images/game-card-bg-csgo.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/game-card-bg-csgo.6235c5a2.png";

/***/ }),

/***/ "./src/assets/images/game-card-bg-dota2.png":
/*!**************************************************!*\
  !*** ./src/assets/images/game-card-bg-dota2.png ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/game-card-bg-dota2.badc2a3f.png";

/***/ }),

/***/ "./src/assets/images/game-card-bg-fortnite.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/game-card-bg-fortnite.png ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/game-card-bg-fortnite.6a6e51b5.png";

/***/ }),

/***/ "./src/assets/images/game-card-bg-gta5.png":
/*!*************************************************!*\
  !*** ./src/assets/images/game-card-bg-gta5.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/game-card-bg-gta5.99ca99e5.png";

/***/ }),

/***/ "./src/assets/images/game-card-bg-warface.png":
/*!****************************************************!*\
  !*** ./src/assets/images/game-card-bg-warface.png ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/game-card-bg-warface.9e636275.png";

/***/ }),

/***/ "./src/assets/images/game-card-bg-wot.png":
/*!************************************************!*\
  !*** ./src/assets/images/game-card-bg-wot.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/game-card-bg-wot.f2291c2b.png";

/***/ }),

/***/ "./src/assets/images/giveaway-item.png":
/*!*********************************************!*\
  !*** ./src/assets/images/giveaway-item.png ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/giveaway-item.19f85331.png";

/***/ }),

/***/ "./src/assets/images/icon-add.svg":
/*!****************************************!*\
  !*** ./src/assets/images/icon-add.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-add.d1ff6240.svg";

/***/ }),

/***/ "./src/assets/images/icon-alarm.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icon-alarm.svg ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-alarm.82625dcf.svg";

/***/ }),

/***/ "./src/assets/images/icon-arrow-angle-left.svg":
/*!*****************************************************!*\
  !*** ./src/assets/images/icon-arrow-angle-left.svg ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-arrow-angle-left.ab4f4b63.svg";

/***/ }),

/***/ "./src/assets/images/icon-arrow-angle-right.svg":
/*!******************************************************!*\
  !*** ./src/assets/images/icon-arrow-angle-right.svg ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-arrow-angle-right.2aa5e5e8.svg";

/***/ }),

/***/ "./src/assets/images/icon-arrow-left.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/icon-arrow-left.svg ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-arrow-left.7dcdef30.svg";

/***/ }),

/***/ "./src/assets/images/icon-arrow-right-2.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/icon-arrow-right-2.svg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-arrow-right-2.6bdbe536.svg";

/***/ }),

/***/ "./src/assets/images/icon-arrow-right.svg":
/*!************************************************!*\
  !*** ./src/assets/images/icon-arrow-right.svg ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-arrow-right.ebc1a443.svg";

/***/ }),

/***/ "./src/assets/images/icon-arrow-top.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/icon-arrow-top.svg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-arrow-top.b230df78.svg";

/***/ }),

/***/ "./src/assets/images/icon-buy.svg":
/*!****************************************!*\
  !*** ./src/assets/images/icon-buy.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-buy.5c571de4.svg";

/***/ }),

/***/ "./src/assets/images/icon-camera.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icon-camera.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-camera.10a7ffab.svg";

/***/ }),

/***/ "./src/assets/images/icon-cards.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icon-cards.svg ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-cards.4975d414.svg";

/***/ }),

/***/ "./src/assets/images/icon-chat-message.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/icon-chat-message.svg ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-chat-message.4bbc419d.svg";

/***/ }),

/***/ "./src/assets/images/icon-chats.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icon-chats.svg ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-chats.d2264a51.svg";

/***/ }),

/***/ "./src/assets/images/icon-check-primary.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/icon-check-primary.svg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-check-primary.05bcc017.svg";

/***/ }),

/***/ "./src/assets/images/icon-close.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icon-close.svg ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-close.4b51423d.svg";

/***/ }),

/***/ "./src/assets/images/icon-comparation.svg":
/*!************************************************!*\
  !*** ./src/assets/images/icon-comparation.svg ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-comparation.fa23f971.svg";

/***/ }),

/***/ "./src/assets/images/icon-copy.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/icon-copy.svg ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-copy.a08c63a1.svg";

/***/ }),

/***/ "./src/assets/images/icon-csgo.png":
/*!*****************************************!*\
  !*** ./src/assets/images/icon-csgo.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-csgo.b5c3b06d.png";

/***/ }),

/***/ "./src/assets/images/icon-delivery-secondary.svg":
/*!*******************************************************!*\
  !*** ./src/assets/images/icon-delivery-secondary.svg ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-delivery-secondary.dee57dc4.svg";

/***/ }),

/***/ "./src/assets/images/icon-discord-grey.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/icon-discord-grey.svg ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-discord-grey.c77ff220.svg";

/***/ }),

/***/ "./src/assets/images/icon-dota2.png":
/*!******************************************!*\
  !*** ./src/assets/images/icon-dota2.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-dota2.c7d69ebf.png";

/***/ }),

/***/ "./src/assets/images/icon-dots-1.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icon-dots-1.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-dots-1.e06c751d.svg";

/***/ }),

/***/ "./src/assets/images/icon-dots-2.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icon-dots-2.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-dots-2.f2b42082.svg";

/***/ }),

/***/ "./src/assets/images/icon-edit.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/icon-edit.svg ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-edit.d209ae4e.svg";

/***/ }),

/***/ "./src/assets/images/icon-eye.svg":
/*!****************************************!*\
  !*** ./src/assets/images/icon-eye.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-eye.991bb475.svg";

/***/ }),

/***/ "./src/assets/images/icon-filter.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icon-filter.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-filter.c4f437a0.svg";

/***/ }),

/***/ "./src/assets/images/icon-fortnite.png":
/*!*********************************************!*\
  !*** ./src/assets/images/icon-fortnite.png ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-fortnite.2e93362c.png";

/***/ }),

/***/ "./src/assets/images/icon-game-rank-1.svg":
/*!************************************************!*\
  !*** ./src/assets/images/icon-game-rank-1.svg ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-game-rank-1.476389b0.svg";

/***/ }),

/***/ "./src/assets/images/icon-gift.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/icon-gift.svg ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-gift.a3bca206.svg";

/***/ }),

/***/ "./src/assets/images/icon-gta5.png":
/*!*****************************************!*\
  !*** ./src/assets/images/icon-gta5.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-gta5.a916b090.png";

/***/ }),

/***/ "./src/assets/images/icon-headphones-secondary.svg":
/*!*********************************************************!*\
  !*** ./src/assets/images/icon-headphones-secondary.svg ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-headphones-secondary.a7c30ce4.svg";

/***/ }),

/***/ "./src/assets/images/icon-headphones.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/icon-headphones.svg ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-headphones.4729b8b8.svg";

/***/ }),

/***/ "./src/assets/images/icon-inst-grey.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/icon-inst-grey.svg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-inst-grey.62109207.svg";

/***/ }),

/***/ "./src/assets/images/icon-lightning-primary.svg":
/*!******************************************************!*\
  !*** ./src/assets/images/icon-lightning-primary.svg ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-lightning-primary.5efe4c7b.svg";

/***/ }),

/***/ "./src/assets/images/icon-like-fill.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/icon-like-fill.svg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-like-fill.044d25d3.svg";

/***/ }),

/***/ "./src/assets/images/icon-like-outline.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/icon-like-outline.svg ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-like-outline.2159d425.svg";

/***/ }),

/***/ "./src/assets/images/icon-like-secondary.svg":
/*!***************************************************!*\
  !*** ./src/assets/images/icon-like-secondary.svg ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-like-secondary.c45a0825.svg";

/***/ }),

/***/ "./src/assets/images/icon-like.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/icon-like.svg ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-like.c5e36b40.svg";

/***/ }),

/***/ "./src/assets/images/icon-list.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/icon-list.svg ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-list.9c260d4f.svg";

/***/ }),

/***/ "./src/assets/images/icon-lock-primary.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/icon-lock-primary.svg ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-lock-primary.1be6e59a.svg";

/***/ }),

/***/ "./src/assets/images/icon-newspaper.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/icon-newspaper.svg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-newspaper.08f130cd.svg";

/***/ }),

/***/ "./src/assets/images/icon-play-video.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/icon-play-video.svg ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-play-video.9c53fbf5.svg";

/***/ }),

/***/ "./src/assets/images/icon-plus-blue.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/icon-plus-blue.svg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-plus-blue.a12eb4f0.svg";

/***/ }),

/***/ "./src/assets/images/icon-question.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/icon-question.svg ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-question.2b631bf1.svg";

/***/ }),

/***/ "./src/assets/images/icon-search.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icon-search.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-search.62bb3b88.svg";

/***/ }),

/***/ "./src/assets/images/icon-send-end.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/icon-send-end.svg ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-send-end.7ae631d7.svg";

/***/ }),

/***/ "./src/assets/images/icon-send.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/icon-send.svg ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-send.a431dce4.svg";

/***/ }),

/***/ "./src/assets/images/icon-shopping-box.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/icon-shopping-box.svg ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-shopping-box.b0a00ec1.svg";

/***/ }),

/***/ "./src/assets/images/icon-shopping-card-gradient.svg":
/*!***********************************************************!*\
  !*** ./src/assets/images/icon-shopping-card-gradient.svg ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-shopping-card-gradient.ff3dca76.svg";

/***/ }),

/***/ "./src/assets/images/icon-shopping-cart-2.svg":
/*!****************************************************!*\
  !*** ./src/assets/images/icon-shopping-cart-2.svg ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-shopping-cart-2.77b63ad2.svg";

/***/ }),

/***/ "./src/assets/images/icon-shopping-cart-3.svg":
/*!****************************************************!*\
  !*** ./src/assets/images/icon-shopping-cart-3.svg ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-shopping-cart-3.952b8c75.svg";

/***/ }),

/***/ "./src/assets/images/icon-shopping-cart.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/icon-shopping-cart.svg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-shopping-cart.2b2b0fcb.svg";

/***/ }),

/***/ "./src/assets/images/icon-star-yellow.svg":
/*!************************************************!*\
  !*** ./src/assets/images/icon-star-yellow.svg ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-star-yellow.ad54e220.svg";

/***/ }),

/***/ "./src/assets/images/icon-user.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/icon-user.svg ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-user.bc28b2b5.svg";

/***/ }),

/***/ "./src/assets/images/icon-vk-grey.svg":
/*!********************************************!*\
  !*** ./src/assets/images/icon-vk-grey.svg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-vk-grey.349c1aa3.svg";

/***/ }),

/***/ "./src/assets/images/icon-wallet-secondary.svg":
/*!*****************************************************!*\
  !*** ./src/assets/images/icon-wallet-secondary.svg ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-wallet-secondary.50c98ee7.svg";

/***/ }),

/***/ "./src/assets/images/icon-warface.png":
/*!********************************************!*\
  !*** ./src/assets/images/icon-warface.png ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-warface.75063d1d.png";

/***/ }),

/***/ "./src/assets/images/icon-wot.png":
/*!****************************************!*\
  !*** ./src/assets/images/icon-wot.png ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-wot.78a9639e.png";

/***/ }),

/***/ "./src/assets/images/icon-yt-grey.svg":
/*!********************************************!*\
  !*** ./src/assets/images/icon-yt-grey.svg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/icon-yt-grey.4134affa.svg";

/***/ }),

/***/ "./src/assets/images/link-pin-plate.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/link-pin-plate.svg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/link-pin-plate.6d928d3b.svg";

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/logo.7fb09570.svg";

/***/ }),

/***/ "./src/assets/images/message-deal-item.png":
/*!*************************************************!*\
  !*** ./src/assets/images/message-deal-item.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/message-deal-item.e14abc38.png";

/***/ }),

/***/ "./src/assets/images/oc-drum-item.svg":
/*!********************************************!*\
  !*** ./src/assets/images/oc-drum-item.svg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/oc-drum-item.a8b5ff35.svg";

/***/ }),

/***/ "./src/assets/images/product-preview-1.png":
/*!*************************************************!*\
  !*** ./src/assets/images/product-preview-1.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/product-preview-1.fcb96f91.png";

/***/ }),

/***/ "./src/assets/images/raffle.png":
/*!**************************************!*\
  !*** ./src/assets/images/raffle.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/raffle.161f3412.png";

/***/ }),

/***/ "./src/assets/images/vk-icon-white.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/vk-icon-white.svg ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/vk-icon-white.ba8322e8.svg";

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3B1Z19wYWdlc19teS1ub3RpZmljYXRpb25zX3B1Zy4wYTQxMzlhZWViN2Y2OTRjOGNiMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFVBQVUsbUJBQU8sQ0FBQyx3RkFBNkM7O0FBRS9ELDJCQUEyQixrQ0FBa0MsYUFBYTtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLG1EQUFtRCxrQkFBa0I7QUFDckU7QUFDQSxrUUFBa1E7QUFDbFE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrUUFBa1E7QUFDbFE7QUFDQTtBQUNBLENBQUM7O0FBRUQsb0VBQW9FO0FBQ3BFOzs7Ozs7Ozs7O0FDakRBLFVBQVUsbUJBQU8sQ0FBQyx3RkFBNkM7O0FBRS9ELDJCQUEyQixrQ0FBa0MsYUFBYTtBQUMxRSxHQUFHLDRCQUE0QjtBQUMvQixHQUFHLDRCQUE0QjtBQUMvQixHQUFHLCtCQUErQjtBQUNsQyxHQUFHLDJCQUEyQjtBQUM5QixHQUFHLDZCQUE2QjtBQUNoQyxHQUFHLHVDQUF1QztBQUMxQyxHQUFHLDBCQUEwQjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxtREFBbUQsa0JBQWtCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsK0NBQStDO0FBQy9DOzs7Ozs7Ozs7O0FDaENBLFVBQVUsbUJBQU8sQ0FBQyx3RkFBNkM7O0FBRS9ELDJCQUEyQixrQ0FBa0MsYUFBYTtBQUMxRSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0Esc1dBQXNXO0FBQ3RXOzs7Ozs7Ozs7O0FDUkEsVUFBVSxtQkFBTyxDQUFDLHdGQUE2Qzs7QUFFL0QsMkJBQTJCLGtDQUFrQyxhQUFhLG1wQ0FBbXBDO0FBQzd0Qzs7Ozs7Ozs7OztBQ0hBLFVBQVUsbUJBQU8sQ0FBQyx3RkFBNkM7O0FBRS9ELDJCQUEyQixrQ0FBa0MsYUFBYSxnUEFBZ1AscWdFQUFxZ0UsZzVDQUFnNUM7QUFDL3NIOzs7Ozs7Ozs7O0FDSEEsVUFBVSxtQkFBTyxDQUFDLHdGQUE2Qzs7QUFFL0QsMkJBQTJCLGtDQUFrQyxjQUFjLG1DQUFtQyxFQUFFLHlFQUF5RTtBQUN6TDtBQUNBLG9IQUFvSCxxRUFBUSxHQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ0E7QUFDQTtBQUNBLGlIQUFpSCxRQUFRO0FBQ3pILGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQSw2SEFBNkgsaUNBQWlDO0FBQzlKO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0EsMkRBQTJELHlHQUF5RztBQUNwSztBQUNBO0FBQ0E7QUFDQSxvUUFBb1EscUJBQXFCLHFCQUFxQixtekJBQW16QixxQkFBcUIscUJBQXFCO0FBQzNvQztBQUNBO0FBQ0EsMlBBQTJQO0FBQzNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLG1EQUFtRCxrQkFBa0I7QUFDckU7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlKQUF5SjtBQUN6SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLG1EQUFtRCxrQkFBa0I7QUFDckU7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4S0FBOEs7QUFDOUs7QUFDQTtBQUNBLDRLQUE0SztBQUM1SztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcURBO0FBQ0E7QUFDQSwwTkFBME4scXpHQUFxekcsNjlCQUE2OUIsbUJBQW1CO0FBQy8vSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxtREFBbUQsa0JBQWtCO0FBQ3JFO0FBQ0EsMkpBQTJKLGlEQUFpRCw2T0FBNk8scUNBQXFDO0FBQzlkO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkpBQTJKLGlEQUFpRCw2T0FBNk8scUNBQXFDO0FBQzlkO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBQ0Esc0hBQXNILHFEQUFxRCxFQUFFLHFDQUFxQztBQUNsTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa2FBQWthLGtEQUFrRDtBQUNwZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0xBQWtMLFFBQVE7QUFDMUw7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBLG9NQUFvTSxpSEFBa0Q7QUFDdFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxtREFBbUQsa0JBQWtCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHkyQkFBeTJCLHVHQUE2QyxzVUFBc1UsNkdBQWdEO0FBQzV3QztBQUNBO0FBQ0E7QUFDQSw0ckJBQTRyQix1SEFBcUQ7QUFDanZCO0FBQ0E7QUFDQSxzTUFBc00sNkdBQWdEO0FBQ3RQO0FBQ0E7QUFDQTtBQUNBLCtuQkFBK25CLHVIQUFxRDtBQUNwckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLG1EQUFtRCxrQkFBa0I7QUFDckU7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCx1RUFBdUUsdUdBQTZDLHdYQUF3WCxtQkFBbUIsdzNCQUF3M0IsbUJBQW1CO0FBQzE0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsNGtCQUE0a0IscUJBQXFCO0FBQ2ptQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZ0RBQWdEO0FBQ25ELEdBQUcsNkJBQTZCO0FBQ2hDLEdBQUcsbUNBQW1DO0FBQ3RDOztBQUVBO0FBQ0EsR0FBRywwREFBMEQ7QUFDN0QsR0FBRywyREFBMkQ7QUFDOUQsR0FBRyxpREFBaUQ7QUFDcEQsR0FBRyxzREFBc0Q7QUFDekQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0Esb0RBQW9ELG1CQUFtQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLG9EQUFvRCxtQkFBbUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDBoQkFBMGhCLHVHQUE2QztBQUN2a0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxvREFBb0QsbUJBQW1CO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDBKQUEwSixrZ0JBQWtnQjtBQUM1cEI7Ozs7Ozs7Ozs7O0FDdm9CYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGlEQUFpRCxhQUFhO0FBQzlEO0FBQ0EsaURBQWlELGFBQWE7QUFDOUQ7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtEQUFrRDtBQUM3RCxXQUFXLGlCQUFpQjtBQUM1QixZQUFZO0FBQ1o7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtDQUFrQztBQUM3QyxZQUFZO0FBQ1o7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFlBQVk7QUFDWjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLGlCQUFpQjtBQUM5RDtBQUNBLCtCQUErQixHQUFHO0FBQ2xDLDhCQUE4QixHQUFHO0FBQ2pDLDZCQUE2QixHQUFHO0FBQ2hDLDZCQUE2QixHQUFHO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxREFBMEI7QUFDM0MsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzdQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xcGFpZC1tYXJrdXAvLi9zcmMvcHVnL2NvbXBvbmVudHMvX25hdmlnYXRpb24tcHJvZmlsZS5wdWciLCJ3ZWJwYWNrOi8vMXBhaWQtbWFya3VwLy4vc3JjL3B1Zy9jb21wb25lbnRzL19uYXZpZ2F0aW9uLnB1ZyIsIndlYnBhY2s6Ly8xcGFpZC1tYXJrdXAvLi9zcmMvcHVnL2NvbXBvbmVudHMvX25vdGlmaWNhdGlvbnMucHVnIiwid2VicGFjazovLzFwYWlkLW1hcmt1cC8uL3NyYy9wdWcvY29tcG9uZW50cy9fcGFnaW5hdGlvbi5wdWciLCJ3ZWJwYWNrOi8vMXBhaWQtbWFya3VwLy4vc3JjL3B1Zy9jb21wb25lbnRzL190b3RhbC1zaXRlLWNhcmQucHVnIiwid2VicGFjazovLzFwYWlkLW1hcmt1cC8uL3NyYy9wdWcvcGFnZXMvbXktbm90aWZpY2F0aW9ucy5wdWciLCJ3ZWJwYWNrOi8vMXBhaWQtbWFya3VwLy4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovLzFwYWlkLW1hcmt1cC8uL3NyYy9hc3NldHMvaW1hZ2VzLyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vMXBhaWQtbWFya3VwL2lnbm9yZWR8RDpcXDFwYWlkLW1hc3Rlclxcbm9kZV9tb2R1bGVzXFxwdWctcnVudGltZXxmcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgbmF2TGlzdCA9IFtcbiAge1xuICAgIGxpbms6ICcjJywgbGFiZWw6ICfQnNC+0Lgg0L/RgNC+0YTQuNC70YwnLCBpY29uOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE3XCIgdmlld0JveD1cIjAgMCAxNiAxN1wiIGZpbGw9XCJub25lXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEwLjk2IDguMjg0OTZDMTIuNTcxOSA3LjA2NTU1IDEzLjIwNTMgNC45OTI5MiAxMi41Mzc1IDMuMTIzNjRDMTEuODY5NiAxLjI1NDM2IDEwLjA0NzUgMCA4IDBDNS45NTI0NyAwIDQuMTMwMzYgMS4yNTQzNiAzLjQ2MjUxIDMuMTIzNjRDMi43OTQ2NiA0Ljk5MjkyIDMuNDI4MTMgNy4wNjU1NSA1LjA0IDguMjg0OTZDMS45OTk2NSA5LjQ1NDM2IDAuMDAzMzc3MjEgMTIuMjk0MiAwIDE1LjQ1NDhWMTYuMjI3NEMwIDE2LjY1NDEgMC4zNTgxNzIgMTcgMC44IDE3QzEuMjQxODMgMTcgMS42IDE2LjY1NDEgMS42IDE2LjIyNzRWMTUuNDU0OEMxLjYgMTIuMDQxMiA0LjQ2NTM4IDkuMjczOSA4IDkuMjczOUMxMS41MzQ2IDkuMjczOSAxNC40IDEyLjA0MTIgMTQuNCAxNS40NTQ4VjE2LjIyNzRDMTQuNCAxNi42NTQxIDE0Ljc1ODIgMTcgMTUuMiAxN0MxNS42NDE4IDE3IDE2IDE2LjY1NDEgMTYgMTYuMjI3NFYxNS40NTQ4QzE1Ljk5NjYgMTIuMjk0MiAxNC4wMDAzIDkuNDU0MzYgMTAuOTYgOC4yODQ5NlpNNC43OTk4IDQuNjM4MkM0Ljc5OTggMi45MzE0IDYuMjMyNDkgMS41NDc3NiA3Ljk5OTggMS41NDc3NkM5Ljc2NzEyIDEuNTQ3NzYgMTEuMTk5OCAyLjkzMTQgMTEuMTk5OCA0LjYzODJDMTEuMTk5OCA2LjM0NSA5Ljc2NzEyIDcuNzI4NjQgNy45OTk4IDcuNzI4NjRDNy4xNTExMSA3LjcyODY0IDYuMzM3MTggNy40MDMwNCA1LjczNzA2IDYuODIzNDdDNS4xMzY5NSA2LjI0MzkgNC43OTk4IDUuNDU3ODMgNC43OTk4IDQuNjM4MlpcIiBjbGFzcz1cIl90by1ncmFkaWVudFwiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJpY29uX3ByaW1hcnlfZ3JhZGllbnRcIiB4MT1cIjMuMTgxODJcIiB5MT1cIjE2LjA2MzZcIiB4Mj1cIjEzLjQzNTlcIiB5Mj1cIjUuOTg5NDZcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48c3RvcCBzdG9wLWNvbG9yPVwiIzMzOUNGQ1wiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiMxRTYxRUJcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+JyxcbiAgfSxcbiAge1xuICAgIGxpbms6ICcjJywgbGFiZWw6ICfQnNC+0Lgg0YLQvtCy0LDRgNGLJywgaWNvbjogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxN1wiIHZpZXdCb3g9XCIwIDAgMTYgMTdcIiBmaWxsPVwibm9uZVwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMy42IDBIMi4yOTZDMS4wMjk3OCAwLjAwNDIzOTQgMC4wMDQzODkwMyAwLjk5NDY3MSAwIDIuMjE3NzNWMTQuNjgxOEMwIDE1Ljk2MjEgMS4wNzQ1MiAxNyAyLjQgMTdIMTMuNkMxNC45MjU1IDE3IDE2IDE1Ljk2MjEgMTYgMTQuNjgxOFYyLjMxODE4QzE2IDEuMDM3ODkgMTQuOTI1NSAwIDEzLjYgMFpNMTIuNzE5OSAxLjU0NTQ2QzEzLjUwMDQgMS41MDk1OSAxNC4yMDA3IDIuMDA1NjIgMTQuMzk5OSAyLjczNTQ2QzE0LjU1MzEgMy4yNzE2OCAxNC4zOTYxIDMuODQ2MDcgMTMuOTg4OSA0LjIzOTQxQzEzLjU4MTcgNC42MzI3NSAxMi45ODcgNC43ODQzNiAxMi40MzE5IDQuNjM2MzdDMTEuNjc2MyA0LjQ0Mzk3IDExLjE2MjcgMy43Njc1NyAxMS4xOTk5IDMuMDEzNjRWMS41NDU0NkgxMi43MTk5Wk05LjYwMDA0IDEuNTQ1NDZWMy4wOTA5MUM5LjYwMjI2IDMuNTkxMzggOS4zNTM0NCA0LjA2MTkxIDguOTMyMzUgNC4zNTM1M0M4LjUxMTI3IDQuNjQ1MTUgNy45NzAwNSA0LjcyMTc2IDcuNDgwMDQgNC41NTkxQzYuODAyNjIgNC4zMzUzNSA2LjM2MTUzIDMuNzA0MTcgNi40MDAwNCAzLjAxMzY0VjEuNTQ1NDZIOS42MDAwNFpNNC43OTk5NSAxLjU0NTQ2VjMuMDkwOTFDNC44MDIxNyAzLjU5MTM4IDQuNTUzMzUgNC4wNjE5MSA0LjEzMjI2IDQuMzUzNTNDMy43MTExNyA0LjY0NTE1IDMuMTY5OTYgNC43MjE3NiAyLjY3OTk1IDQuNTU5MUMyLjAwODQ1IDQuMzM2OTQgMS41Njg3NSAzLjcxNDAzIDEuNTk5OTUgMy4wMjkxVjIuMzE4MTlDMS41OTk5NSAxLjg5MTQyIDEuOTU4MTIgMS41NDU0NiAyLjM5OTk1IDEuNTQ1NDZINC43OTk5NVpNNS42MDAxIDE1LjQ1NDVWMTEuNTkwOUM1LjU5OTQ1IDEwLjg5OTkgNS45MTc5NCAxMC4yNDQ3IDYuNDY4NzcgOS44MDM4MkM3LjAxOTU5IDkuMzYyOTQgNy43NDUzMSA5LjE4MjM4IDguNDQ4MSA5LjMxMTM2QzkuNjEwNDggOS41NTI1NSAxMC40MzA1IDEwLjU1ODggMTAuNDAwMSAxMS43MDY4VjE1LjQ1NDVINS42MDAxWk0xMy42MDAxIDE1LjQ1NDVIMTIuMDAwMVYxMS41OTA5QzEyLjAwMDMgMTAuNDMwNiAxMS40NjA3IDkuMzMxNTcgMTAuNTMwMiA4LjU5NzYxQzkuNTk5OCA3Ljg2MzY2IDguMzc3MTIgNy41NzI0OCA3LjIwMDEgNy44MDQ1NUM1LjMwMzU1IDguMjE3OTUgMy45Njc1NyA5Ljg2MDAzIDQuMDAwMSAxMS43Mzc3VjE1LjQ1NDVIMi40MDAxQzEuOTU4MjcgMTUuNDU0NSAxLjYwMDEgMTUuMTA4NiAxLjYwMDEgMTQuNjgxOFY1Ljc2NDU1QzIuNTE1NCA2LjI2NjIgMy42MjMwNCA2LjMxNzgzIDQuNTg0MSA1LjkwMzY0QzQuOTg4IDUuNzI3MjcgNS4zNDQwMSA1LjQ2Mjc1IDUuNjI0MSA1LjEzMDkxQzYuMzg2MDEgNS45NTQzNCA3LjU0NDg4IDYuMzIyNTUgOC42NjQxIDYuMDk2ODJDOS4zNDQwOCA1Ljk2MjEzIDkuOTU2MzQgNS42MDc4NCAxMC40MDAxIDUuMDkyMjhDMTAuODU1NyA1LjYzNDYyIDExLjQ5NjkgNi4wMDE4NSAxMi4yMDgxIDYuMTI3NzNDMTIuOTYwMiA2LjI2MzcgMTMuNzM3OSA2LjEzNDg2IDE0LjQwMDEgNS43NjQ1NVYxNC42ODE4QzE0LjQwMDEgMTUuMTA4NiAxNC4wNDE5IDE1LjQ1NDUgMTMuNjAwMSAxNS40NTQ1WlwiIGZpbGw9XCIjQ0RENkU2XCIgY2xhc3M9XCJfdG8tZ3JhZGllbnRcIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVwiaWNvbl9wcmltYXJ5X2dyYWRpZW50XCIgeDE9XCIzLjE4MTgyXCIgeTE9XCIxNi4wNjM2XCIgeDI9XCIxMy40MzU5XCIgeTI9XCI1Ljk4OTQ2XCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHN0b3Agc3RvcC1jb2xvcj1cIiMzMzlDRkNcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjMUU2MUVCXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPicsXG4gIH0sXG4gIHtcbiAgICBsaW5rOiAnIycsIGxhYmVsOiAn0KHRgtC+0Lsg0LfQsNC60LDQt9C+0LInLCBpY29uOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjEzXCIgdmlld0JveD1cIjAgMCAxNiAxM1wiIGZpbGw9XCJub25lXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyLjk4OSAyLjg5MDQ0QzEzLjI3MzcgMi44ODIzNCAxMy41NDQ2IDMuMDExNTcgMTMuNzE2MyAzLjIzNzI5TDE1LjgyNTQgNi4wMzM3OUMxNS45NDA2IDYuMTgyODYgMTYuMDAyMSA2LjM2NjEgMTUuOTk5OSA2LjU1NDA3VjEwLjY5NDZDMTUuOTk5OSAxMS4xNzM1IDE1LjYwOTIgMTEuNTYxNyAxNS4xMjcyIDExLjU2MTdIMTMuMDkwOUMxMy4wNDk3IDExLjU2NTIgMTMuMDA4NCAxMS41NjUyIDEyLjk2NzIgMTEuNTYxN0MxMi42NTcgMTIuNDI0MyAxMS44MzQ2IDEzIDEwLjkxMjcgMTNDOS45OTA4MSAxMyA5LjE2ODQxIDEyLjQyNDMgOC44NTgxNSAxMS41NjE3SDYuNDE0NTJDNi4xMDEzNCAxMi40MTkxIDUuMjgxNTcgMTIuOTkgNC4zNjM2MiAxMi45OUMzLjQ0NTY3IDEyLjk5IDIuNjI1OSAxMi40MTkxIDIuMzEyNzIgMTEuNTYxN0gyLjE4MTgxQzAuOTc2ODMgMTEuNTYxNyAwIDEwLjU5MTIgMCA5LjM5MzkyVjIuMTY3ODNDMCAwLjk3MDU3IDAuOTc2ODMgMCAyLjE4MTgxIDBIOS40NTQ1MUMxMC42NTk1IDAgMTEuNjM2MyAwLjk3MDU3IDExLjYzNjMgMi4xNjc4M1YyLjg5MDQ0SDEyLjk4OVpNMy42MzYyMyAxMC44MzkxQzMuNjM2MjMgMTEuMjM4MiAzLjk2MTg0IDExLjU2MTggNC4zNjM1IDExLjU2MThDNC43NjUxNiAxMS41NjE4IDUuMDkwNzcgMTEuMjM4MiA1LjA5MDc3IDEwLjgzOTFDNS4wOTA3NyAxMC40NDAxIDQuNzY1MTYgMTAuMTE2NSA0LjM2MzUgMTAuMTE2NUMzLjk2MTg0IDEwLjExNjUgMy42MzYyMyAxMC40NDAxIDMuNjM2MjMgMTAuODM5MVpNMTAuOTA5MiAxMS41NjE4QzEwLjUwNzUgMTEuNTYxOCAxMC4xODE5IDExLjIzODIgMTAuMTgxOSAxMC44MzkxQzEwLjE4MTkgMTAuNDQwMSAxMC41MDc1IDEwLjExNjUgMTAuOTA5MiAxMC4xMTY1QzExLjMxMDggMTAuMTE2NSAxMS42MzY0IDEwLjQ0MDEgMTEuNjM2NCAxMC44MzkxQzExLjYzNjQgMTEuMjM4MiAxMS4zMTA4IDExLjU2MTggMTAuOTA5MiAxMS41NjE4Wk0xMy4wOTA5IDEwLjExNjVIMTQuNTQ1NVY2Ljc0MTk1TDEyLjcyNzMgNC4zMzU2NkgxMS42MzY0VjcuMjI2MUMxMS42MzY0IDcuNjI1MTggMTEuMzEwOCA3Ljk0ODcxIDEwLjkwOTEgNy45NDg3MUMxMC41MDc0IDcuOTQ4NzEgMTAuMTgxOCA3LjYyNTE4IDEwLjE4MTggNy4yMjYxVjIuMTY3ODNDMTAuMTgxOCAxLjc2ODc1IDkuODU2MjIgMS40NDUyMiA5LjQ1NDU2IDEuNDQ1MjJIMi4xODE4NkMxLjc4MDIgMS40NDUyMiAxLjQ1NDU5IDEuNzY4NzUgMS40NTQ1OSAyLjE2NzgzVjkuMzkzOTJDMS40NTQ1OSA5Ljc5MzAxIDEuNzgwMiAxMC4xMTY1IDIuMTgxODYgMTAuMTE2NUgyLjMxMjc3QzIuNjI1OTUgOS4yNTkxOSAzLjQ0NTcyIDguNjg4MzEgNC4zNjM2NyA4LjY4ODMxQzUuMjgxNjIgOC42ODgzMSA2LjEwMTM5IDkuMjU5MTkgNi40MTQ1NyAxMC4xMTY1SDguODU4MkM5LjE2ODQ2IDkuMjUzOTkgOS45OTA4NiA4LjY3ODI4IDEwLjkxMjcgOC42NzgyOEMxMS44MzQ2IDguNjc4MjggMTIuNjU3IDkuMjUzOTkgMTIuOTY3MyAxMC4xMTY1QzEzLjAwODQgMTAuMTEzIDEzLjA0OTggMTAuMTEzIDEzLjA5MDkgMTAuMTE2NVpcIiBmaWxsPVwiI0NERDZFNlwiIGNsYXNzPVwiX3RvLWdyYWRpZW50XCIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cImljb25fcHJpbWFyeV9ncmFkaWVudFwiIHgxPVwiMy4xODE4MlwiIHkxPVwiMTYuMDYzNlwiIHgyPVwiMTMuNDM1OVwiIHkyPVwiNS45ODk0NlwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIHN0b3AtY29sb3I9XCIjMzM5Q0ZDXCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzFFNjFFQlwiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4nLFxuICB9LFxuICB7XG4gICAgbGluazogJyMnLCBsYWJlbDogJ9CU0L7RgdGC0LjQttC10L3QuNGPJywgaWNvbjogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxOVwiIHZpZXdCb3g9XCIwIDAgMTQgMTlcIiBmaWxsPVwibm9uZVwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yLjU4MzAzIDYuNzI5MThMMi4zMjA4MyA2LjI4ODA4TDAuODg3NTE0IDMuOTQ0MkMwLjM5NDk1MyAzLjE0MzUxIDAuMzc3MDk0IDIuMTQyMTUgMC44NDA3OTcgMS4zMjQ3NkMxLjMwNDUgMC41MDczNjYgMi4xNzc2NiAwLjAwMTAzNzMyIDMuMTI0ODkgMC4wMDAyNTY3MzRIMTAuNjE0OUMxMS45MDgxIC0wLjAxNzYyNDUgMTMuMDIxMyAwLjkwMDQzNiAxMy4yMzY4IDIuMTYyNTFDMTMuMzYwNSAyLjgzODY3IDEzLjE5OTUgMy41MzU1IDEyLjc5MTEgNC4wOTEyM0wxMS4xMjE4IDYuNDA5MTdDMTEuMTE5MyA2LjQyNjM4IDExLjExOTMgNi40NDM4NSAxMS4xMjE4IDYuNDYxMDZDMTIuOTg1NyA3Ljc4NjkzIDE0LjA2MyA5Ljk0MTkzIDEzLjk5NzEgMTIuMjEyNkMxMy45OTgzIDE0LjA1NzIgMTMuMjIyMyAxNS44MTg4IDExLjg1NTkgMTcuMDczNEM5LjExOTEzIDE5LjY3MjEgNC43ODc3MSAxOS42Mzc2IDIuMDkzNiAxNi45OTU1QzAuNjQ5MjE5IDE1LjY0MDEgLTAuMTEyNzM1IDEzLjcyMDEgMC4wMTM1Mzg1IDExLjc1NDJDMC4wOTY4MjM1IDkuNzkwNjggMS4wMzM2NCA3Ljk1ODU3IDIuNTgzMDMgNi43MjkxOFpNMS43NjE3MiAxMi4wOTE2QzEuNzYxNzIgMTQuOTU3NiA0LjEwOTQ3IDE3LjI4MSA3LjAwNTU3IDE3LjI4MUM5LjkwMTY3IDE3LjI4MSAxMi4yNDk0IDE0Ljk1NzYgMTIuMjQ5NCAxMi4wOTE2QzEyLjI0OTQgOS4yMjU1MyA5LjkwMTY3IDYuOTAyMTYgNy4wMDU1NyA2LjkwMjE2QzQuMTA5NDcgNi45MDIxNiAxLjc2MTcyIDkuMjI1NTMgMS43NjE3MiAxMi4wOTE2Wk05LjQwODggNS42MjIxMUM3LjY3MzU1IDQuOTgzMzcgNS43NTMxNCA1LjA1MTggNC4wNjg4MSA1LjgxMjM5QzMuOTQ5OTUgNS42MjIxMSAzLjgzNjY4IDUuNDMxODMgMy43MjM0MSA1LjI0MTU1QzMuNTUzNTEgNC45NTYxMyAzLjM4MzYxIDQuNjcwNzIgMy4xOTQ4MyA0LjM4NTNMMi4zNzMyOSAzLjA0NDcxQzIuMTM4NSAyLjY2NTE5IDIuMjMzMDIgMi4xNzEzIDIuNTkxNzkgMS45MDMwNEMyLjc1MDIgMS43ODUyOCAyLjk0NDM1IDEuNzI0MjkgMy4xNDIzOSAxLjczMDA2SDEwLjU3MTJDMTAuOTExNyAxLjcxMzY5IDExLjIzMDcgMS44OTQ3NiAxMS4zODg0IDIuMTkzODdDMTEuNTQ2MSAyLjQ5Mjk3IDExLjUxMzcgMi44NTU1MiAxMS4zMDUzIDMuMTIyNTVMOS41NTczNyA1LjU3MDIxQzkuNTIyNDEgNS42MjIxMSA5LjQ4NzQ1IDUuNjIyMTEgOS40MDg4IDUuNjIyMTFaXCIgY2xhc3M9XCJfdG8tZ3JhZGllbnRcIiAvPjxwYXRoIGQ9XCJNNi40ODk0NCAxMS42OTM3QzYuMzYwNTMgMTEuNzQwNyA2LjIyOTI2IDExLjc4MTEgNi4wOTYxNiAxMS44MTQ4QzUuNzM1MDYgMTEuODU0IDUuMzg3MTIgMTEuNjY4IDUuMjIyMTggMTEuMzQ3N0M1LjA1NjA4IDExLjAyMSA1LjExNTU3IDEwLjYyNjIgNS4zNzA3NiAxMC4zNjE3QzUuNzkwMjYgOS45NDY1OCA2LjI0NDczIDkuNDk2ODMgNi42MzgwMiA5LjExNjI3QzYuODExMTQgOC45Mjk5MiA3LjA0MTUzIDguODA1MjcgNy4yOTM1IDguNzYxNjZDNy41MjQxNiA4LjczNzQ1IDcuNzU1MDggOC44MDQ5OCA3LjkzNTQgOC45NDkzNkM4LjExNTcyIDkuMDkzNzQgOC4yMzA2NSA5LjMwMzE0IDguMjU0ODcgOS41MzE0MkM4LjI1NDg3IDkuNTkxOTcgOC4yNTQ4NyA5LjY0Mzg2IDguMjU0ODcgOS43MDQ0VjE0LjcyMDhDOC4yNzU0NiAxNS4wMjUgOC4xMzI2OCAxNS4zMTc1IDcuODc5MDcgMTUuNDkwNkM3LjYxOTM2IDE1LjY5OTIgNy4yNjIxNSAxNS43NDI4IDYuOTU5MDIgMTUuNjAyOUM2LjY1NTg4IDE1LjQ2MyA2LjQ2IDE1LjE2NDIgNi40NTQ0OSAxNC44MzMzQzYuNDU0NDkgMTMuODIxMyA2LjQ1NDQ5IDEyLjgxOCA2LjQ1NDQ5IDExLjgxNDhMNi40ODk0NCAxMS42OTM3WlwiIGNsYXNzPVwiX3RvLWdyYWRpZW50XCIgLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJpY29uX3ByaW1hcnlfZ3JhZGllbnRcIiB4MT1cIjMuMTgxODJcIiB5MT1cIjE2LjA2MzZcIiB4Mj1cIjEzLjQzNTlcIiB5Mj1cIjUuOTg5NDZcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48c3RvcCBzdG9wLWNvbG9yPVwiIzMzOUNGQ1wiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiMxRTYxRUJcIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9XCJwYWludDFfbGluZWFyXzQzN18yODcyMlwiIHgxPVwiNS44Mzk4XCIgeTE9XCIxNC42MTM0XCIgeDI9XCI5LjE0NDI5XCIgeTI9XCIxMi42MjM4XCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHN0b3Agc3RvcC1jb2xvcj1cIiMzMzlDRkNcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjMUU2MUVCXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPidcbiAgfSxcbiAge1xuICAgIGxpbms6ICcjJywgbGFiZWw6ICfQndCw0YHRgtGA0L7QudC60LgnLCBpY29uOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE1XCIgdmlld0JveD1cIjAgMCAxNiAxNVwiIGZpbGw9XCJub25lXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTcuOTU5MDQgNC43NTU0OUM2LjM2MDQgNC43NTU0OSA1LjA2NDQ1IDUuOTcyMSA1LjA2NDQ1IDcuNDcyODZDNS4wNjQ0NSA4Ljk3MzYyIDYuMzYwNCAxMC4xOTAyIDcuOTU5MDQgMTAuMTkwMkM5LjU1NzY4IDEwLjE5MDIgMTAuODUzNiA4Ljk3MzYyIDEwLjg1MzYgNy40NzI4NkMxMC44NTM2IDYuNzUyMTcgMTAuNTQ4NyA2LjA2MSAxMC4wMDU4IDUuNTUxMzlDOS40NjI5OSA1LjA0MTc5IDguNzI2NzQgNC43NTU0OSA3Ljk1OTA0IDQuNzU1NDlaTTcuOTU5MjYgOC44MzE1NUM3LjE1OTk0IDguODMxNTUgNi41MTE5NiA4LjIyMzI1IDYuNTExOTYgNy40NzI4N0M2LjUxMTk2IDYuNzIyNDkgNy4xNTk5NCA2LjExNDE5IDcuOTU5MjYgNi4xMTQxOUM4Ljc1ODU4IDYuMTE0MTkgOS40MDY1NSA2LjcyMjQ5IDkuNDA2NTUgNy40NzI4N0M5LjQwNjU1IDguMjIzMjUgOC43NTg1OCA4LjgzMTU1IDcuOTU5MjYgOC44MzE1NVpcIiBjbGFzcz1cIl90by1ncmFkaWVudFwiLz48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTQuMDMxNiA1LjExNTUxQzE0LjY5NTYgNC4zMDM2MSAxNC42MTUxIDMuMTU1MzEgMTMuODQzNSAyLjQzMjEyTDEzLjMyOTcgMS45NDk3OEMxMi41NTQ0IDEuMjA1NjIgMTEuMzA2NCAxLjEyOTQ3IDEwLjQzNTEgMS43NzMxNUMxMC4yOTU1IDAuNzcyNTA4IDkuMzk2ODUgMC4wMTg0NDQxIDguMzIyMDIgNy40NDM3NWUtMDVINy41OTgzOEM2LjUwMTQ5IC0wLjAwODY1OTMyIDUuNTcgMC43NTIxMjEgNS40Mjc0MyAxLjc3MzE1QzQuNTYyNTggMS4xNDk4MSAzLjMzOTM5IDEuMjI1NCAyLjU2OTAzIDEuOTQ5NzhMMi4wNTUyNCAyLjQzMjEyQzEuMjgzNjEgMy4xNTUzMSAxLjIwMzA5IDQuMzAzNjEgMS44NjcwOSA1LjExNTUxQzAuNzk2MzExIDUuMjU3NjQgMC4wMDAyNDMxMzQgNi4xMTc5NCA3LjkyOTIyZS0wNSA3LjEzMzE2VjcuODEyNUMtMC4wMDkyMjQwNyA4Ljg0MjIzIDAuODAxMTc0IDkuNzE2NjkgMS44ODg4IDkuODUwNTJDMS4yMDMxMyAxMC42Njg1IDEuMjg0MjUgMTEuODQwMSAyLjA3Njk1IDEyLjU2NzlMMi41OTA3NCAxMy4wNTAyQzMuMzYxMDkgMTMuNzc0NiA0LjU4NDI5IDEzLjg1MDIgNS40NDkxNCAxMy4yMjY4QzUuNTkxNyAxNC4yNDc5IDYuNTIzMiAxNS4wMDg3IDcuNjIwMDkgMTQuOTk5OUg4LjM0MzczQzkuNDQwNjIgMTUuMDA4NyAxMC4zNzIxIDE0LjI0NzkgMTAuNTE0NyAxMy4yMjY4QzExLjM4NiAxMy44NzA1IDEyLjYzNCAxMy43OTQ0IDEzLjQwOTMgMTMuMDUwMkwxMy45MjMxIDEyLjU2NzlDMTQuNzE1NyAxMS44NDAxIDE0Ljc5NjkgMTAuNjY4NSAxNC4xMTEyIDkuODUwNTJDMTUuMTk4OCA5LjcxNjY5IDE2LjAwOTIgOC44NDIyMyAxNS45OTk5IDcuODEyNVY3LjEzMzE2QzE1Ljk5MzYgNi4wODU2OCAxNS4xNDI1IDUuMjEzMjYgMTQuMDMxNiA1LjExNTUxWk0xNC40NzMyIDcuODMyODdDMTQuNDczMiA4LjIwODA2IDE0LjE0OTIgOC41MTIyMSAxMy43NDk1IDguNTEyMjFDMTMuMjE2NSA4LjUwOTM0IDEyLjczNDggOC44MSAxMi41MzEzIDkuMjcyNTJDMTIuMzI3OSA5LjczNTA1IDEyLjQ0MzMgMTAuMjY3MiAxMi44MjMyIDEwLjYxODJDMTMuMTAzOCAxMC44ODMxIDEzLjEwMzggMTEuMzExMSAxMi44MjMyIDExLjU3NkwxMi4zMDk1IDEyLjA1ODRDMTIuMDI3MiAxMi4zMjE4IDExLjU3MTQgMTIuMzIxOCAxMS4yODkxIDEyLjA1ODRDMTAuOTE4IDExLjcwNDMgMTAuMzU2NCAxMS41OTQ3IDkuODY1NzEgMTEuNzgwNEM5LjM3NDk5IDExLjk2NjIgOS4wNTE1MiAxMi40MTA5IDkuMDQ1ODEgMTIuOTA3NkM5LjA0NTgxIDEzLjI4MjcgOC43MjE4MiAxMy41ODY5IDguMzIyMTYgMTMuNTg2OUg3LjU5ODUxQzcuMTk4ODUgMTMuNTg2OSA2Ljg3NDg3IDEzLjI4MjcgNi44NzQ4NyAxMi45MDc2QzYuODc3OTIgMTIuNDA3MiA2LjU1NzY2IDExLjk1NDkgNi4wNjQ5NyAxMS43NjRDNS41NzIyOCAxMS41NzMgNS4wMDU0NSAxMS42ODEzIDQuNjMxNTYgMTIuMDM4QzQuMzQ5MzEgMTIuMzAxNCAzLjg5MzQ3IDEyLjMwMTQgMy42MTEyMiAxMi4wMzhMMy4wOTc0MyAxMS41NDg5QzIuODE2ODUgMTEuMjgzOSAyLjgxNjg1IDEwLjg1NiAzLjA5NzQzIDEwLjU5MUMzLjQ3MjExIDEwLjIzOTMgMy41ODQyMSA5LjcxMDM5IDMuMzgxNDQgOS4yNTA4N0MzLjE3ODY4IDguNzkxMzQgMi43MDA5OCA4LjQ5MTc2IDIuMTcxMTYgOC40OTE4M0MxLjc3MTUgOC40OTE4MyAxLjQ0NzUxIDguMTg3NjggMS40NDc1MSA3LjgxMjQ5VjcuMTMzMTVDMS40NDc1MSA2Ljc1Nzk2IDEuNzcxNSA2LjQ1MzgxIDIuMTcxMTYgNi40NTM4MUMyLjcwNDE4IDYuNDU2NjggMy4xODU5IDYuMTU2MDMgMy4zODkzMyA1LjY5MzVDMy41OTI3NiA1LjIzMDk4IDMuNDc3MzMgNC42OTg4NiAzLjA5NzQzIDQuMzQ3ODVDMi44MjE2MSA0LjA4MzcgMi44MjE2MSAzLjY2MDkzIDMuMDk3NDMgMy4zOTY3OEwzLjYxODQ1IDIuOTA3NjVDMy45MDA3IDIuNjQ0MjUgNC4zNTY1NCAyLjY0NDI1IDQuNjM4NzkgMi45MDc2NUM1LjAxMzQgMy4yNTkzOSA1LjU3Njg0IDMuMzY0NjMgNi4wNjYzMyAzLjE3NDI4QzYuNTU1ODIgMi45ODM5MyA2Ljg3NDk1IDIuNTM1NDggNi44NzQ4NyAyLjAzODA5QzYuODc0ODcgMS42NjI5IDcuMTk4ODUgMS4zNTg3NSA3LjU5ODUxIDEuMzU4NzVIOC4zMjIxNkM4LjcyMTgyIDEuMzU4NzUgOS4wNDU4MSAxLjY2MjkgOS4wNDU4MSAyLjAzODA5QzkuMDQyNzUgMi41Mzg0OCA5LjM2MzAxIDIuOTkwNzEgOS44NTU3IDMuMTgxNjhDMTAuMzQ4NCAzLjM3MjY2IDEwLjkxNTIgMy4yNjQzIDExLjI4OTEgMi45MDc2NUMxMS41NzE0IDIuNjQ0MjUgMTIuMDI3MiAyLjY0NDI1IDEyLjMwOTUgMi45MDc2NUwxMi44MjMyIDMuMzg5OThDMTMuMTAzOCAzLjY1NDk1IDEzLjEwMzggNC4wODI4OCAxMi44MjMyIDQuMzQ3ODVDMTIuNDQzMyA0LjY5ODg2IDEyLjMyNzkgNS4yMzA5OCAxMi41MzEzIDUuNjkzNUMxMi43MzQ4IDYuMTU2MDMgMTMuMjE2NSA2LjQ1NjY4IDEzLjc0OTUgNi40NTM4MUMxNC4xNDkyIDYuNDUzODEgMTQuNDczMiA2Ljc1Nzk2IDE0LjQ3MzIgNy4xMzMxNVY3LjgzMjg3WlwiIGNsYXNzPVwiX3RvLWdyYWRpZW50XCIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cImljb25fcHJpbWFyeV9ncmFkaWVudFwiIHgxPVwiMy4xODE4MlwiIHkxPVwiMTYuMDYzNlwiIHgyPVwiMTMuNDM1OVwiIHkyPVwiNS45ODk0NlwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIHN0b3AtY29sb3I9XCIjMzM5Q0ZDXCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzFFNjFFQlwiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4nLFxuICB9LFxuICB7XG4gICAgbGluazogJyMnLCBsYWJlbDogJ9Cf0L7Qv9C+0LvQtdC90LjQtSDQuCDQstGL0LLQvtC0JywgaWNvbjogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxM1wiIHZpZXdCb3g9XCIwIDAgMTQgMTNcIiBmaWxsPVwibm9uZVwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMi4wOTA5IDIuMTUzNzVIMTEuNDU0NVYxLjgwNDI2QzExLjQ1MzQgMS4yMzgwOCAxMS4xNzIyIDAuNzA1MTIyIDEwLjY5NDcgMC4zNjQyODNDMTAuMjE3MyAwLjAyMzQ0MzEgOS41OTg3OSAtMC4wODU5MDAxIDkuMDIzNjQgMC4wNjg4NTUyTDEuNzM3MjcgMi4wMzkyNkMxLjYyOTgyIDIuMDcxMDYgMS41MzMyIDIuMTI5MjggMS40NTcyNyAyLjIwNzk4QzAuNjAzMDU3IDIuNDA1IDAuMDAxMzk4OTggMy4xMjg5NSAwIDMuOTYxNDZWMTEuMTkyM0MwIDEyLjE5MDcgMC44NTQ3MjkgMTMgMS45MDkwOSAxM0gxMi4wOTA5QzEzLjE0NTMgMTMgMTQgMTIuMTkwNyAxNCAxMS4xOTIzVjMuOTYxNDZDMTQgMi45NjMwOSAxMy4xNDUzIDIuMTUzNzUgMTIuMDkwOSAyLjE1Mzc1Wk05LjM3MzU3IDEuMjI1NzhDOS41NjkzOCAxLjE3MzY1IDkuNzc5NzEgMS4yMTMyOCA5LjkzOTUxIDEuMzMyNDNDMTAuMDk5MyAxLjQ1MTU4IDEwLjE4OTMgMS42MzU4OSAxMC4xODE4IDEuODI4MzVWMi4xNzc4NEg1Ljk1NjNMOS4zNzM1NyAxLjIyNTc4Wk0xMi43MjcxIDguMTc5NDVIMTAuODE4QzEwLjQ2NjUgOC4xNzk0NSAxMC4xODE2IDcuOTA5NjcgMTAuMTgxNiA3LjU3Njg4QzEwLjE4MTYgNy4yNDQwOSAxMC40NjY1IDYuOTc0MzEgMTAuODE4IDYuOTc0MzFIMTIuNzI3MVY4LjE3OTQ1Wk0xMi43MjczIDUuNzY5MTdIMTAuOTEzNkM5Ljk2ODIxIDUuNzQ2MjkgOS4xMzk1MSA2LjM2MzkyIDguOTQwODkgNy4yMzk0NEM4LjgzNDY3IDcuNzY4NzggOC45ODMzNiA4LjMxNTQxIDkuMzQ2NDQgOC43MzAyOUM5LjcwOTUyIDkuMTQ1MTggMTAuMjQ5MSA5LjM4NTA3IDEwLjgxODIgOS4zODQ1OEgxMi43MjczVjExLjE5MjNDMTIuNzI3MyAxMS41MjUxIDEyLjQ0MjMgMTEuNzk0OSAxMi4wOTA5IDExLjc5NDlIMS45MDkwN0MxLjU1NzYxIDExLjc5NDkgMS4yNzI3MSAxMS41MjUxIDEuMjcyNzEgMTEuMTkyM1YzLjk2MTQ2QzEuMjcyNzEgMy42Mjg2NyAxLjU1NzYxIDMuMzU4ODkgMS45MDkwNyAzLjM1ODg5SDEyLjA5MDlDMTIuNDQyMyAzLjM1ODg5IDEyLjcyNzMgMy42Mjg2NyAxMi43MjczIDMuOTYxNDZWNS43NjkxN1pcIiBjbGFzcz1cIl90by1ncmFkaWVudFwiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJpY29uX3ByaW1hcnlfZ3JhZGllbnRcIiB4MT1cIjMuMTgxODJcIiB5MT1cIjE2LjA2MzZcIiB4Mj1cIjEzLjQzNTlcIiB5Mj1cIjUuOTg5NDZcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48c3RvcCBzdG9wLWNvbG9yPVwiIzMzOUNGQ1wiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiMxRTYxRUJcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+JyxcbiAgfSxcbiAge1xuICAgIGxpbms6ICcjJywgbGFiZWw6ICfQoNC10YTQtdGA0LDQu9GM0L3QsNGPINGB0LjRgdGC0LXQvNCwJywgaWNvbjogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNVwiIHZpZXdCb3g9XCIwIDAgMTYgMTVcIiBmaWxsPVwibm9uZVwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04LjgxNDQ5IDcuMTUyMzZIOC43MDU2N0M4LjcwNTY3IDcuMTMxMzkgOC42OTExNiA3LjA4OTQ1IDguNjkxMTYgNy4wODk0NVY2LjA1NDg0QzguNjkxMTYgNS45ODQ5NCA4LjcyMDE4IDUuOTg0OTQgOC43NTY0NSA1Ljk4NDk0QzguOTcxNyA1LjkxMDE5IDkuMTgyNDIgNS44MjM4NCA5LjM4NzYgNS43MjYyOUMxMC40NjE0IDUuMTUwNzEgMTEuMDQyNiAzLjk4NTgyIDEwLjgzODUgMi44MTgyMkMxMC42MTM0IDEuNTgxMzEgOS41NjAxNiAwLjY0MDczIDguMjYzMTQgMC41MTgzMzFDNy4zMzY4NCAwLjQxNDM4IDYuNDE2ODggMC43NTY5NDIgNS44MDM4MyAxLjQzNDA5QzUuMjA1MTcgMi4wNTAxNiA0Ljk0ODk0IDIuOTA1MjQgNS4xMTQ2NCAzLjczMzk4QzUuMjU1MzMgNC44MzM0MiA2LjA3NzM5IDUuNzM5MTEgNy4xODk0NiA2LjAxOTg5QzcuMjMxNzggNi4wMzAxMyA3LjI1OTcgNi4wNjg5OSA3LjI1NDc1IDYuMTEwNzdWNy4wODI0NlY3LjE1OTM1SDUuMTIxODlDNC45NjYxIDcuMTU5MTMgNC44MTA2MyA3LjE3MzE3IDQuNjU3NiA3LjIwMTI5QzMuNzA2NjEgNy4zNzc3NiAyLjk5MTA0IDguMTM4NTEgMi45MDE5OCA5LjA2Nzc3VjkuNjA2MDRIMi44MDc2N0gxLjkzNzEyQzAuODYxOTc1IDkuNzIwMDkgMC4wMzY5MDM4IDEwLjU3NzcgMC4wMDAxMzMxOTQgMTEuNjE5M1YxMi40MDIzQy0wLjAwNDEyMTc3IDEyLjc2NTQgMC4wOTM2NDA2IDEzLjEyMjkgMC4yODMwNjMgMTMuNDM2OUMwLjY3ODQ4IDE0LjEwOTIgMS40MjU1NSAxNC41MTc1IDIuMjI3MyAxNC40OTk0SDUuMDc4MzZDNS4yMzIyIDE0LjQ4NjMgNS4zODQ5MSAxNC40NjI5IDUuNTM1NCAxNC40Mjk1QzYuNDM2OTUgMTQuMjQ4NCA3LjEyMjYgMTMuNTQwMSA3LjI0NzQ5IDEyLjY2MDlDNy4yNjU2MiAxMi4zNTgyIDcuMjY1NjIgMTIuMDU0OCA3LjI0NzQ5IDExLjc1MjFDNy4yNTAxMyAxMS41OTc2IDcuMjM3OTkgMTEuNDQzMiA3LjIxMTIyIDExLjI5MDhDNy4wMjkyNCAxMC4zODg1IDYuMjU4NzYgOS43MDU1OCA1LjMxMDUxIDkuNjA2MDRINC40NDcyMUg0LjM1MjlWOS4yMDc1OEM0LjM3OTYyIDguODQwNzQgNC42OTY3MiA4LjU1NjU2IDUuMDc4MzYgOC41NTc0NkgxMC44OTY2QzExLjEyNzUgOC41NjA3MyAxMS4zNDMgOC42Njk3NiAxMS40NzY5IDguODUxMDZDMTEuNjA0MSA5LjA4MjQ2IDExLjY1IDkuMzQ3NCAxMS42MDc1IDkuNjA2MDRIMTEuNDk4N0gxMC42NDI3QzkuNzAxODUgOS42ODI0OCA4LjkxOTQ5IDEwLjMzNDcgOC43MDU2NyAxMS4yMjA5QzguNjI1ODYgMTEuNjk3OCA4LjYyNTg2IDEyLjE4NCA4LjcwNTY3IDEyLjY2MDlDOC44NDE4NyAxMy43MTcxIDkuNzc3NTQgMTQuNTA3NSAxMC44ODIxIDE0LjQ5OTRIMTMuNzgzOUMxNC43ODUyIDE0LjUwNjcgMTUuNjYyNSAxMy44NTQ3IDE1LjkwOTUgMTIuOTE5NkMxNi4wMDk3IDEyLjQyNjggMTYuMDI2OCAxMS45MjE2IDE1Ljk2MDMgMTEuNDIzNkMxNS44NDQxIDEwLjU5MjIgMTUuMjI0OCA5LjkwNzUzIDE0LjM4NiA5LjY4Mjk0QzE0LjE4ODIgOS42MzkyOSAxMy45ODY3IDkuNjEzNTUgMTMuNzgzOSA5LjYwNjA0SDEzLjA1ODRWOS40NjYyM0MxMy4wNjk1IDkuMjc5OTcgMTMuMDY5NSA5LjA5MzI1IDEzLjA1ODQgOC45MDY5OUMxMi44ODc0IDcuOTEwMTIgMTIuMDAzIDcuMTcyNSAxMC45NTQ2IDcuMTUyMzZIOC44MTQ0OVpNNS4wNzgyOCAxMy4xMDEzSDMuNjI3MzZIMi4yMjcyMkMyLjAxNTY2IDEzLjExNjMgMS44MDc4OSAxMy4wNDE0IDEuNjU4NTkgMTIuODk2MUMxLjUwOTI5IDEyLjc1MDkgMS40MzM0MyAxMi41NSAxLjQ1MDk3IDEyLjM0NjNWMTEuNzAzMkMxLjQ1MDk3IDExLjMxNzEgMS43NzU3NyAxMS4wMDQxIDIuMTc2NDQgMTEuMDA0MUg1LjA3ODI4QzUuNDc4OTQgMTEuMDA0MSA1LjgwMzc0IDExLjMxNzEgNS44MDM3NCAxMS43MDMyVjEyLjQwMjNDNS44MDM3NCAxMi43ODgzIDUuNDc4OTQgMTMuMTAxMyA1LjA3ODI4IDEzLjEwMTNaTTEyLjMzMjggMTMuMTAxM0gxMy44MjczQzE0LjIxMDkgMTMuMDc5MSAxNC41MDk5IDEyLjc3MjUgMTQuNTA5MiAxMi40MDIzVjExLjcwMzJDMTQuNTA5MiAxMS4zMTcxIDE0LjE4NDQgMTEuMDA0MiAxMy43ODM4IDExLjAwNDJIMTAuODgxOUMxMC41MjcyIDEwLjk5ODYgMTAuMjIwMyAxMS4yNDExIDEwLjE1NjUgMTEuNTc3NEMxMC4xNDkzIDExLjY3NTEgMTAuMTQ5MyAxMS43NzMyIDEwLjE1NjUgMTEuODcxVjEyLjM2NzNDMTAuMTQ2NSAxMi41NTg3IDEwLjIxODUgMTIuNzQ1NiAxMC4zNTU3IDEyLjg4NDRDMTAuNDkyOCAxMy4wMjMxIDEwLjY4MzEgMTMuMTAxNiAxMC44ODE5IDEzLjEwMTNIMTIuMzMyOFpNNy45Nzk5OCAxLjkxNjQzQzguNzgxMyAxLjkxNjQzIDkuNDMwOSAyLjU0MjM5IDkuNDMwOSAzLjMxNDU0QzkuNDMwOSA0LjA4NjcgOC43ODEzIDQuNzEyNjUgNy45Nzk5OCA0LjcxMjY1QzcuMTc4NjUgNC43MTI2NSA2LjUyOTA1IDQuMDg2NyA2LjUyOTA1IDMuMzE0NTRDNi41MjkwNSAyLjU0MjM5IDcuMTc4NjUgMS45MTY0MyA3Ljk3OTk4IDEuOTE2NDNaXCIgY2xhc3M9XCJfdG8tZ3JhZGllbnRcIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVwiaWNvbl9wcmltYXJ5X2dyYWRpZW50XCIgeDE9XCIzLjE4MTgyXCIgeTE9XCIxNi4wNjM2XCIgeDI9XCIxMy40MzU5XCIgeTI9XCI1Ljk4OTQ2XCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHN0b3Agc3RvcC1jb2xvcj1cIiMzMzlDRkNcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjMUU2MUVCXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPicsXG4gIH0sXG4gIHtcbiAgICBsaW5rOiAnIycsIGxhYmVsOiAn0JLRi9C50YLQuCDQuNC3INCw0LrQutCw0YPQvdGC0LAnLCBpY29uOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjEzXCIgdmlld0JveD1cIjAgMCAxNCAxM1wiIGZpbGw9XCJub25lXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTMuODgzMDggMTEuNTU1NkgxLjU1MzIzVjEuNDQ0NDRIMy44ODMwOEM0LjA4OTA1IDEuNDQ0NDQgNC4yODY1NyAxLjM2ODM0IDQuNDMyMjIgMS4yMzI5QzQuNTc3ODYgMS4wOTc0NiA0LjY1OTY5IDAuOTEzNzY3IDQuNjU5NjkgMC43MjIyMjJDNC42NTk2OSAwLjUzMDY3NyA0LjU3Nzg2IDAuMzQ2OTg3IDQuNDMyMjIgMC4yMTE1NDRDNC4yODY1NyAwLjA3NjEwMTUgNC4wODkwNSAwIDMuODgzMDggMEgwLjc3NjYxNkMwLjU3MDY0NCAwIDAuMzczMTIgMC4wNzYxMDE1IDAuMjI3NDc3IDAuMjExNTQ0QzAuMDgxODMzIDAuMzQ2OTg3IDAgMC41MzA2NzcgMCAwLjcyMjIyMlYxMi4yNzc4QzAgMTIuNDY5MyAwLjA4MTgzMyAxMi42NTMxIDAuMjI3NDc3IDEyLjc4ODVDMC4zNzMxMiAxMi45MjM5IDAuNTcwNjQ0IDEzIDAuNzc2NjE2IDEzSDMuODgzMDhDNC4wODkwNSAxMyA0LjI4NjU3IDEyLjkyMzkgNC40MzIyMiAxMi43ODg1QzQuNTc3ODYgMTIuNjUzMSA0LjY1OTY5IDEyLjQ2OTMgNC42NTk2OSAxMi4yNzc4QzQuNjU5NjkgMTIuMDg2MiA0LjU3Nzg2IDExLjkwMjUgNC40MzIyMiAxMS43NjcxQzQuMjg2NTcgMTEuNjMxNiA0LjA4OTA1IDExLjU1NTYgMy44ODMwOCAxMS41NTU2Wk0xMy43NTM5IDUuOTg3MjFMOS4wOTQxNiAxLjY1Mzg3QzguOTQ1ODYgMS41MjA3NSA4Ljc0Njc3IDEuNDQ3ODkgOC41NDA2OSAxLjQ1MTI4QzguMzM0NiAxLjQ1NDY2IDguMTM4NDIgMS41MzQwMyA3Ljk5NTI3IDEuNjcxOTVDNy44NTIxMiAxLjgwOTg2IDcuNzczNzMgMS45OTQ5OCA3Ljc3NzM3IDIuMTg2NjRDNy43ODEwMSAyLjM3ODI5IDcuODY2MzggMi41NjA3NSA4LjAxNDY4IDIuNjkzODdMMTEuMzQ2MyA1Ljc5MjI0SDMuODgzMDhDMy42NzcxMSA1Ljc5MjI0IDMuNDc5NTggNS44NjgyOSAzLjMzMzk0IDYuMDAzNzRDMy4xODgzIDYuMTM5MTggMy4xMDY0NiA2LjMyMjkxIDMuMTA2NDYgNi41MTQ0NkMzLjEwNjQ2IDYuNzA2IDMuMTg4MyA2Ljg4OTY1IDMuMzMzOTQgNy4wMjUwOUMzLjQ3OTU4IDcuMTYwNTMgMy42NzcxMSA3LjIzNjY4IDMuODgzMDggNy4yMzY2OEgxMy4yMDI1QzEzLjM2IDcuMjQwNjMgMTMuNTE1MSA3LjE5OTkzIDEzLjY0NzIgNy4xMTk5NUMxMy43NzkyIDcuMDM5OTggMTMuODgyIDYuOTI0NDkgMTMuOTQxOSA2Ljc4ODkxQzE0LjAwMTcgNi42NTMzMiAxNC4wMTU3IDYuNTA0MDMgMTMuOTgyMiA2LjM2MDg0QzEzLjk0ODYgNi4yMTc2NCAxMy44NjkgNi4wODczMiAxMy43NTM5IDUuOTg3MjFaTTEwLjM3NTYgOC40NzE2NUw4LjA0NTczIDEwLjI3NzJDNy44OTAyMiAxMC40MDM2IDcuNzk1MDkgMTAuNTgyMyA3Ljc4MTI2IDEwLjc3NEM3Ljc2NzQyIDEwLjk2NTcgNy44MzYwMyAxMS4xNTQ2IDcuOTcxOTcgMTEuMjk5MkM4LjEwNzkxIDExLjQ0MzggOC4zMDAwNSAxMS41MzIzIDguNTA2MTMgMTEuNTQ1MkM4LjcxMjIyIDExLjU1OCA4LjkxNTM2IDExLjQ5NDIgOS4wNzA4NyAxMS4zNjc4TDExLjQwMDcgOS41NjIyMUMxMS41NTYyIDkuNDM1NzkgMTEuNjUxNCA5LjI1NzA3IDExLjY2NTIgOS4wNjU0MkMxMS42NzkgOC44NzM3NyAxMS42MTA0IDguNjg0ODYgMTEuNDc0NSA4LjU0MDI0QzExLjMzODYgOC4zOTU2MyAxMS4xNDY0IDguMzA3MjMgMTAuOTQwMyA4LjI5NDM2QzEwLjczNDIgOC4yODE0OSAxMC41MzExIDguMzQ1MjMgMTAuMzc1NiA4LjQ3MTY1WlwiIGNsYXNzPVwiX3RvLWdyYWRpZW50XCIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cImljb25fcHJpbWFyeV9ncmFkaWVudFwiIHgxPVwiMy4xODE4MlwiIHkxPVwiMTYuMDYzNlwiIHgyPVwiMTMuNDM1OVwiIHkyPVwiNS45ODk0NlwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIHN0b3AtY29sb3I9XCIjMzM5Q0ZDXCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzFFNjFFQlwiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4nLFxuICB9XG5dXG5cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcIm5wXFxcIlxcdTAwM0VcXHUwMDNDbmF2IGNsYXNzPVxcXCJucC1uYXZcXFwiXFx1MDAzRVwiO1xuLy8gaXRlcmF0ZSBuYXZMaXN0XG47KGZ1bmN0aW9uKCl7XG4gIHZhciAkJG9iaiA9IG5hdkxpc3Q7XG4gIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgJCRvYmoubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBwdWdfaW5kZXgwID0gMCwgJCRsID0gJCRvYmoubGVuZ3RoOyBwdWdfaW5kZXgwIDwgJCRsOyBwdWdfaW5kZXgwKyspIHtcbiAgICAgICAgdmFyIGl0ZW0gPSAkJG9ialtwdWdfaW5kZXgwXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NhXCIgKyAoXCIgY2xhc3M9XFxcIm5wLW5hdi1pdGVtIGgtMTEgcHgtNiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0zIGdyb3VwIGR1cmF0aW9uLTIwMCBob3ZlcjpiZy1bI0Y2RjlGRl1cXFwiXCIrcHVnLmF0dHIoXCJocmVmXCIsIGl0ZW0ubGluaywgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibnAtbmF2LWljb24gZmxleC1zaHJpbmstMCB3LTQgZmxleCBqdXN0aWZ5LWNlbnRlciBbJmFtcDtfc3ZnXTptYXgtdy1mdWxsXFxcIlxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS5pY29uKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibnAtbmF2LWxhYmVsIGZvbnQtcHJpbWFyeS1tZWQgdGV4dC1zbSB0ZXh0LVsjOEE5OEIzXSBkdXJhdGlvbi0yMDAgZ3JvdXAtaG92ZXI6dGV4dC1bIzBDMEMwQ11cXFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGl0ZW0ubGFiZWwpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVwiO1xuICAgICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciAkJGwgPSAwO1xuICAgIGZvciAodmFyIHB1Z19pbmRleDAgaW4gJCRvYmopIHtcbiAgICAgICQkbCsrO1xuICAgICAgdmFyIGl0ZW0gPSAkJG9ialtwdWdfaW5kZXgwXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NhXCIgKyAoXCIgY2xhc3M9XFxcIm5wLW5hdi1pdGVtIGgtMTEgcHgtNiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0zIGdyb3VwIGR1cmF0aW9uLTIwMCBob3ZlcjpiZy1bI0Y2RjlGRl1cXFwiXCIrcHVnLmF0dHIoXCJocmVmXCIsIGl0ZW0ubGluaywgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibnAtbmF2LWljb24gZmxleC1zaHJpbmstMCB3LTQgZmxleCBqdXN0aWZ5LWNlbnRlciBbJmFtcDtfc3ZnXTptYXgtdy1mdWxsXFxcIlxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS5pY29uKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibnAtbmF2LWxhYmVsIGZvbnQtcHJpbWFyeS1tZWQgdGV4dC1zbSB0ZXh0LVsjOEE5OEIzXSBkdXJhdGlvbi0yMDAgZ3JvdXAtaG92ZXI6dGV4dC1bIzBDMEMwQ11cXFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGl0ZW0ubGFiZWwpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVwiO1xuICAgIH1cbiAgfVxufSkuY2FsbCh0aGlzKTtcblxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZuYXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgbmF2TGlzdCA9IFtcbiAge2xhYmVsOiAn0JPQu9Cw0LLQvdCw0Y8nLCBsaW5rOiAnIyd9LFxuICB7bGFiZWw6ICfQmtCw0YLQsNC70L7QsycsIGxpbms6ICcjJ30sXG4gIHtsYWJlbDogJ9Ci0L7QvyDRjtC30LXRgNC+0LInLCBsaW5rOiAnIyd9LFxuICB7bGFiZWw6ICfQntGC0LfRi9Cy0YsnLCBsaW5rOiAnIyd9LFxuICB7bGFiZWw6ICfQk9Cw0YDQsNC90YLQuNC4JywgbGluazogJyMnfSxcbiAge2xhYmVsOiAn0KHQu9GD0YfQsNC50L3Ri9C1INC/0YDQtdC00LzQtdGC0YsnLCBsaW5rOiAnIyd9LFxuICB7bGFiZWw6ICfQpNC+0YDRg9C8JywgbGluazogJyMnfSxcbl1cblxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ25hdiBjbGFzcz1cXFwibmF2IGZsZXggZ2FwLXgtNSBnYXAteS01IGZsZXgtd3JhcCBteC00IDN4bDpnYXAteC0yLjUgbGc6ZmxleC1jb2wgbGc6aXRlbXMtc3RhcnQgbGc6Z2FwLXktOFxcXCJcXHUwMDNFXCI7XG4vLyBpdGVyYXRlIG5hdkxpc3RcbjsoZnVuY3Rpb24oKXtcbiAgdmFyICQkb2JqID0gbmF2TGlzdDtcbiAgaWYgKCdudW1iZXInID09IHR5cGVvZiAkJG9iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIHB1Z19pbmRleDAgPSAwLCAkJGwgPSAkJG9iai5sZW5ndGg7IHB1Z19pbmRleDAgPCAkJGw7IHB1Z19pbmRleDArKykge1xuICAgICAgICB2YXIgaXRlbSA9ICQkb2JqW3B1Z19pbmRleDBdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2FcIiArIChcIiBjbGFzcz1cXFwibmF2LWxpbmsgZm9udC1wcmltYXJ5LWJvbGQgdGV4dC1zbSB0ZXh0LVsjOEE5OEIzXSB1cHBlcmNhc2UgM3hsOnRleHQteHMgbGc6dGV4dC1zbSBsZzp0ZXh0LXdoaXRlXFx1MDAyRjMwXFxcIlwiK3B1Zy5hdHRyKFwiaHJlZlwiLCBpdGVtLmxpbmssIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGl0ZW0ubGFiZWwpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVwiO1xuICAgICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciAkJGwgPSAwO1xuICAgIGZvciAodmFyIHB1Z19pbmRleDAgaW4gJCRvYmopIHtcbiAgICAgICQkbCsrO1xuICAgICAgdmFyIGl0ZW0gPSAkJG9ialtwdWdfaW5kZXgwXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NhXCIgKyAoXCIgY2xhc3M9XFxcIm5hdi1saW5rIGZvbnQtcHJpbWFyeS1ib2xkIHRleHQtc20gdGV4dC1bIzhBOThCM10gdXBwZXJjYXNlIDN4bDp0ZXh0LXhzIGxnOnRleHQtc20gbGc6dGV4dC13aGl0ZVxcdTAwMkYzMFxcXCJcIitwdWcuYXR0cihcImhyZWZcIiwgaXRlbS5saW5rLCB0cnVlLCB0cnVlKSkgKyBcIlxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBpdGVtLmxhYmVsKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcIjtcbiAgICB9XG4gIH1cbn0pLmNhbGwodGhpcyk7XG5cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGbmF2XFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwibm90aWZcXFwiXFx1MDAzRVxcdTAwM0NidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IG5vdGlmLWJ0biByb3VuZGVkLWZ1bGwgdy0xMSBoLTExIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyIGxnOnctWzUwcHhdIGxnOmgtWzUwcHhdXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJidG4taWNvbiB0ZXh0LXdoaXRlXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCIxNlxcXCIgaGVpZ2h0PVxcXCIxN1xcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE3XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTUuMTMzOSAxNS4wNTYxQzE1LjExNjQgMTMuNjkyMSAxNC4zMzA5IDEyLjQ1NzkgMTMuMTExMSAxMS44Nzc4VjguMDEyMkMxMy4xNTQxIDUuMzUyMjUgMTEuMjQyMSAzLjA3MjI5IDguNjQyMSAyLjY4MzA3QzcuMTc5MDIgMi40OTUzNiA1LjcwNzEzIDIuOTU2NDEgNC42MDQ1NSAzLjk0NzhDMy41MDE5NyA0LjkzOTE4IDIuODc2MTYgNi4zNjQyNyAyLjg4Nzg2IDcuODU2OThWMTEuNzUyMkMxLjQ2ODYxIDEyLjIzNTMgMC41MDkyNTEgMTMuNTc3NSAwLjUgMTUuMDkzMUMwLjUwNTQzOSAxNS4zMzMxIDAuNjA3NTcyIDE1LjU2MDQgMC43ODI3MDQgMTUuNzIyM0MwLjk1NzgzNyAxNS44ODQyIDEuMTkwNzUgMTUuOTY2NyAxLjQyNzQgMTUuOTUwNUgxNC4yNjQ5QzE0LjQ5NzMgMTUuOTQ4NSAxNC43MTk0IDE1Ljg1MzIgMTQuODgyNCAxNS42ODU1QzE1LjA0NTQgMTUuNTE3NyAxNS4xMzU4IDE1LjI5MTMgMTUuMTMzOSAxNS4wNTYxWk03LjI2OTMyIDQuMTk4MjNDOC4zNDM3IDMuOTc2MjYgOS40NTk3NSA0LjI1NDc4IDEwLjMwOSA0Ljk1NjgyQzExLjE1ODMgNS42NTg4NiAxMS42NTA5IDYuNzEwMDkgMTEuNjUwNyA3LjgxOTk3VjExLjUxNTZINC4zNDgzOVY3Ljk3NTE5QzQuMzA4ODMgNi4xNzI2NyA1LjUzMTEgNC41OTIxOSA3LjI2OTMyIDQuMTk4MjNaTTIuMDc3NTYgMTQuNDcyMkMyLjMzNjQzIDEzLjU5MzMgMy4xMzU4NSAxMi45OTE3IDQuMDQxODkgMTIuOTkzOUgxMS42NTA5QzEyLjU1NjIgMTIuOTk0MSAxMy4zNTQzIDEzLjU5NDggMTMuNjE1MyAxNC40NzIySDIuMDc3NTZaXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTguNzMgMS40NzgyNlYwLjczOTEzQzguNzMgMC4zMzA5MiA4LjQwMzA2IDAgNy45OTk3NiAwQzcuNTk2NDcgMCA3LjI2OTUzIDAuMzMwOTIgNy4yNjk1MyAwLjczOTEzVjEuNDc4MjZDNy4yNjk1MyAxLjg4NjQ3IDcuNTk2NDcgMi4yMTczOSA3Ljk5OTc2IDIuMjE3MzlDOC40MDMwNiAyLjIxNzM5IDguNzMgMS44ODY0NyA4LjczIDEuNDc4MjZaXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTguNzMgMTYuMjYwOVYxNS41MjE3QzguNzMgMTUuMTEzNSA4LjQwMzA2IDE0Ljc4MjYgNy45OTk3NiAxNC43ODI2QzcuNTk2NDcgMTQuNzgyNiA3LjI2OTUzIDE1LjExMzUgNy4yNjk1MyAxNS41MjE3VjE2LjI2MDlDNy4yNjk1MyAxNi42NjkxIDcuNTk2NDcgMTcgNy45OTk3NiAxN0M4LjQwMzA2IDE3IDguNzMgMTYuNjY5MSA4LjczIDE2LjI2MDlaXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTIuMjg3NDUgMi44MDEzNEMyLjQyNDU3IDIuOTQxMjYgMi42MTEyMSAzLjAxOTk3IDIuODA1OTIgMy4wMTk5N0MzLjAwMDYzIDMuMDE5OTcgMy4xODcyNyAyLjk0MTI2IDMuMzI0MzggMi44MDEzNEMzLjYwNzUxIDIuNTEzMDUgMy42MDc1MSAyLjA0NzQ1IDMuMzI0MzggMS43NTkxNkwyLjgwNTkyIDEuMjM0MzhDMi42Njg4IDEuMDk0NDUgMi40ODIxNiAxLjAxNTc1IDIuMjg3NDUgMS4wMTU3NUMyLjA5Mjc1IDEuMDE1NzUgMS45MDYxIDEuMDk0NDUgMS43Njg5OSAxLjIzNDM4QzEuNDg1ODYgMS41MjI2NyAxLjQ4NTg2IDEuOTg4MjcgMS43Njg5OSAyLjI3NjU1TDIuMjg3NDUgMi44MDEzNFpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMC41MzU3MDkgNi4wNTM0OEwxLjI2NTk0IDYuMjQ1NjVDMS42NDkyMyA2LjMzNjA0IDIuMDM0MzQgNi4xMDI3MiAyLjEzNjcyIDUuNzE4MDhDMi4yMzkxMSA1LjMzMzQ1IDIuMDIxOTMgNC45MzU4OCAxLjY0NTY2IDQuODE5MTNMMC45MTU0MyA0LjYyNjk1QzAuNTI2MzU5IDQuNTIzNjggMC4xMjgwMzYgNC43NTgzMSAwLjAyNDU0NTggNS4xNTE3NEMtMC4wNzc5OTA0IDUuNTQzMzEgMC4xNDk5NzcgNS45NDU0NyAwLjUzNTcwOSA2LjA1MzQ4WlxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xNC43NTM1IDYuMjk3NDJMMTUuNDgzNyA2LjEwNTI1QzE1Ljg2IDUuOTg4NDkgMTYuMDc3MiA1LjU5MDkzIDE1Ljk3NDggNS4yMDYyOUMxNS44NzI0IDQuODIxNjYgMTUuNDg3MyA0LjU4ODM0IDE1LjEwNCA0LjY3ODczTDE0LjM3MzggNC44NzA5QzEzLjk5NzUgNC45ODc2NiAxMy43ODAzIDUuMzg1MjMgMTMuODgyNyA1Ljc2OTg2QzEzLjk4NTEgNi4xNTQ0OSAxNC4zNzAyIDYuMzg3ODEgMTQuNzUzNSA2LjI5NzQyWlxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xMy4wMzA1IDIuODAxMzRMMTMuNTQ5IDIuMjc2NTVDMTMuODMyMSAxLjk4ODI3IDEzLjgzMjEgMS41MjI2NyAxMy41NDkgMS4yMzQzOEMxMy40MTE5IDEuMDk0NDUgMTMuMjI1MiAxLjAxNTc1IDEzLjAzMDUgMS4wMTU3NUMxMi44MzU4IDEuMDE1NzUgMTIuNjQ5MiAxLjA5NDQ1IDEyLjUxMjEgMS4yMzQzOEwxMS45OTM2IDEuNzU5MTZDMTEuNzEwNSAyLjA0NzQ1IDExLjcxMDUgMi41MTMwNSAxMS45OTM2IDIuODAxMzRDMTIuMTMwNyAyLjk0MTI2IDEyLjMxNzQgMy4wMTk5NyAxMi41MTIxIDMuMDE5OTdDMTIuNzA2OCAzLjAxOTk3IDEyLjg5MzQgMi45NDEyNiAxMy4wMzA1IDIuODAxMzRaXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmJ1dHRvblxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJub3RpZi1jb250ZW50IHJvdW5kZWQteGwgYmctd2hpdGUgdy1bMjkwcHhdIHB5LTZcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm5vdGlmLWggcHgtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZmxleC13cmFwIGdhcC0yLjUgZm9udC1zZWNvbmRhcnktYm9sZCB0ZXh0LXNtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJub3RpZi1oZWFkaW5nIHRleHQtYmxhY2tcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCj0LLQtdC00L7QvNC70LXQvdC40Y8gXFx1MDAzQ3NwYW4gY2xhc3M9XFxcImV4dHJhIHRleHQtW2NvbG9yOnZhcigtLWNvbG9yLWdyZWVuLW1haW4pXVxcXCJcXHUwMDNFKCs0KVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibm90aWYtdG90YWwgdGV4dC1bI0M4RDVFRF1cXFwiXFx1MDAzRSg0MylcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJub3RpZi1iIG10LTZcXFwiXFx1MDAzRVwiO1xuZm9yKHZhciBpID0gMTsgaSA8PSA0OyBpKyspXG57XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJub3RpZi1pdGVtIHAtMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBjdXJzb3ItcG9pbnRlciBkdXJhdGlvbi0yMDAgaG92ZXI6YmctWyNGNkY5RkZdXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJub3RpZi1pdGVtLXBpYyBidG4gYnRuLXNlY29uZGFyeSBmbGV4LXNocmluay0wIHJvdW5kZWQtZnVsbCB3LTExIGgtMTEganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYnRuLWljb25cXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjE2XFxcIiBoZWlnaHQ9XFxcIjEzXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTNcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk00LjIwOTc1IDMuNDA4MjlIMTUuMTE1OUMxNS4zNjQ1IDMuNDA0OTcgMTUuNjAyNyAzLjUwNzg3IDE1Ljc3MDcgMy42OTExNEMxNS45Mzg3IDMuODc0NDIgMTYuMDIwNSA0LjEyMDY2IDE1Ljk5NTYgNC4zNjgwM0wxNS4yNjg1IDExLjM0NzlDMTUuMjI3NyAxMS43ODg4IDE0Ljg2MDYgMTIuMTI3NiAxNC40MTc5IDEyLjEzMzJINS4yMTMxMkM0Ljc4OTkgMTIuMTMxNSA0LjQzMDAxIDExLjgyMzkgNC4zNjI0NCAxMS40MDYxTDIuOTA4MjkgNC4yOTUzMkwyLjM0ODQ1IDEuOTU0MTVIMC43MjcwNzNDMC4zMjU1MjIgMS45NTQxNSAwIDEuNjI4NjMgMCAxLjIyNzA3QzAgMC44MjU1MjIgMC4zMjU1MjIgMC41IDAuNzI3MDczIDAuNUgyLjc5OTIzQzMuMTk1MDcgMC41MDcyODcgMy41MzcyOCAwLjc3ODA3OSAzLjYzNTM3IDEuMTYxNjRMNC4yMDk3NSAzLjQwODI5Wk01LjY5Mjg5IDEwLjY3OUgxMy44OTQzTDE0LjQ3NTkgNC44NjI0NEg0LjUyOTU4TDUuNjkyODkgMTAuNjc5WlxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibm90aWYtaXRlbS1pbmYgZmxleC1ncm93XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJub3RpZi1pdGVtLWggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZsZXgtd3JhcCBnYXAtMiB0ZXh0LXhzXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJub3RpZi1pdGVtLXRpdGxlIGZvbnQtc2Vjb25kYXJ5LWJvbGQgdGV4dC1ibGFja1xcXCJcXHUwMDNF0KHRgtC+0Lsg0LfQsNC60LDQt9CwIVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm5vdGlmLWl0ZW0tdGltZSBmb250LXNlY29uZGFyeS1tZWQgdGV4dC1bI0M1Q0ZFNF1cXFwiXFx1MDAzRTIyOjE1XFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibm90aWYtaXRlbS10ZXh0IGZvbnQtc2Vjb25kYXJ5LW1lZCB0ZXh0LVsxMHB4XSB0ZXh0LVsjQTZCMUM3XVxcXCJcXHUwMDNF0KLQvtCy0LDRgCDQv9C+INCy0LDRiNC10LzRgyDQt9Cw0L/RgNC+0YHRgyDQsdGL0Lsg0LLRi9GB0YLQsNCy0LvQtdC9INC90LAg0L/RgNC+0LTQsNC20YMhXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG59XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwibm90aWYtYnRuYWxsIG10LTUgdy1mdWxsIGJvcmRlci1iIGJvcmRlci1bI0VDRURGN10gcHktMSBmbGV4IGp1c3RpZnktY2VudGVyIGR1cmF0aW9uLTIwMCBob3ZlcjpiZy1bI0Y2RjlGRl1cXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImJ0bi10ZXh0IGZvbnQtcHJpbWFyeS1ib2xkIHRleHQtc20gdGV4dC1bI0M1Q0ZFNF1cXFwiXFx1MDAzRdCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1XFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGFnIG10LTYgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTIgMm1kOm10LTQgMm1kOmdhcC0xXFxcIlxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwicGFnLWFycm93IG1yLTQgMm1kOm1yLTFcXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRVxcdTAwM0Nzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xNSA2TDkuNzA3MTEgMTEuMjkyOUM5LjMxNjU4IDExLjY4MzQgOS4zMTY1OCAxMi4zMTY2IDkuNzA3MTEgMTIuNzA3MUwxNSAxOFxcXCIgc3Ryb2tlPVxcXCJjdXJyZW50Q29sb3JcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS41XFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcInBhZy1pdGVtXFxcIiBocmVmPVxcXCIjXFxcIlxcdTAwM0UxXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJwYWctaXRlbVxcXCIgaHJlZj1cXFwiI1xcXCJcXHUwMDNFMlxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwicGFnLWl0ZW1cXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRTNcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcInBhZy1pdGVtIF9hY3RpdmVcXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRTQ0M1xcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwicGFnLWFycm93IG1sLTQgMm1kOm1sLTFcXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRVxcdTAwM0Nzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk05IDZMMTQuMjkyOSAxMS4yOTI5QzE0LjY4MzQgMTEuNjgzNCAxNC42ODM0IDEyLjMxNjYgMTQuMjkyOSAxMi43MDcxTDkgMThcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjEuNVxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwidHNjIGZsZXggZ2FwLTIuNSBwLTMgZmxleC13cmFwIHhsOnAtMS41XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ0c2MtaXRlbSBmbGV4IGdhcC14LTIuNSBpdGVtcy1jZW50ZXJcXFwiXFx1MDAzRVxcdTAwM0NidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IHRzYy1pdGVtLWJ0biBmbGV4LXNocmluay0wIHctWzUwcHhdIGgtWzUwcHhdIFsmYW1wO19zdmddOnctMVxcdTAwMkYzIDN4bDp3LTEwIDN4bDpoLTEwIHhsOnctOCB4bDpoLThcXFwiIGRpc2FibGVkXFx1MDAzRVxcdTAwM0NzdmcgY2xhc3M9XFxcInRzYy1pdGVtLWJ0bi1pY29uXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTggMThcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xNS41NDU1IDBIMi40NTQ1NUMxLjA5ODk0IDAgMCAxLjA5ODk0IDAgMi40NTQ1NVYxNS41NDU1QzAgMTYuOTAxMSAxLjA5ODk0IDE4IDIuNDU0NTUgMThIMTUuNTQ1NUMxNi45MDExIDE4IDE4IDE2LjkwMTEgMTggMTUuNTQ1NVYyLjQ1NDU1QzE4IDEuMDk4OTQgMTYuOTAxMSAwIDE1LjU0NTUgMFpNMTYuMzYzOCAxNS41NDU1QzE2LjM2MzggMTUuOTk3MyAxNS45OTc1IDE2LjM2MzYgMTUuNTQ1NiAxNi4zNjM2SDIuNDU0NzFDMi4wMDI4NCAxNi4zNjM2IDEuNjM2NTIgMTUuOTk3MyAxLjYzNjUyIDE1LjU0NTVWMi40NTQ1NUMxLjYzNjUyIDIuMDAyNjggMi4wMDI4NCAxLjYzNjM2IDIuNDU0NzEgMS42MzYzNkg4LjIzOTI1QzguMjA0MDkgMS43MjUwNCA4LjE4NDcgMS44MTkxOSA4LjE4MTk4IDEuOTE0NTVWNS4xODcyN0M4LjE4MTk4IDUuNjM5MTQgOC41NDgyOSA2LjAwNTQ1IDkuMDAwMTYgNi4wMDU0NUM5LjQ1MjAzIDYuMDA1NDUgOS44MTgzNCA1LjYzOTE0IDkuODE4MzQgNS4xODcyN1YxLjkxNDU1QzkuODE1NjEgMS44MTkxOSA5Ljc5NjIzIDEuNzI1MDQgOS43NjEwNyAxLjYzNjM2SDE1LjU0NTZDMTUuOTk3NSAxLjYzNjM2IDE2LjM2MzggMi4wMDI2OCAxNi4zNjM4IDIuNDU0NTVWMTUuNTQ1NVpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTAuNTg3NyAxMi4yNzI3SDEyLjIyNDFDMTIuNjc1OSAxMi4yNzI3IDEzLjA0MjMgMTEuOTA2NCAxMy4wNDIzIDExLjQ1NDVDMTMuMDQyMyAxMS4wMDI3IDEyLjY3NTkgMTAuNjM2NCAxMi4yMjQxIDEwLjYzNjRIMTAuNTg3N0MxMC4xMzU4IDEwLjYzNjQgOS43Njk1MyAxMS4wMDI3IDkuNzY5NTMgMTEuNDU0NUM5Ljc2OTUzIDExLjkwNjQgMTAuMTM1OCAxMi4yNzI3IDEwLjU4NzcgMTIuMjcyN1pcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTMuODYwNCAxMy4wOTA5SDEwLjU4NzdDMTAuMTM1OCAxMy4wOTA5IDkuNzY5NTMgMTMuNDU3MiA5Ljc2OTUzIDEzLjkwOTFDOS43Njk1MyAxNC4zNjA5IDEwLjEzNTggMTQuNzI3MiAxMC41ODc3IDE0LjcyNzJIMTMuODYwNEMxNC4zMTIzIDE0LjcyNzIgMTQuNjc4NiAxNC4zNjA5IDE0LjY3ODYgMTMuOTA5MUMxNC42Nzg2IDEzLjQ1NzIgMTQuMzEyMyAxMy4wOTA5IDEzLjg2MDQgMTMuMDkwOVpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInRzYy1pdGVtLWluZm9cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInRzYy1pdGVtLXZhbHVlIHRleHQtYmxhY2sgdGV4dC1zbSB4bDp0ZXh0LXhzXFxcIlxcdTAwM0UxODEgOTI0IDM2NVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInRzYy1pdGVtLWxhYmVsIG10LTAuNSB0ZXh0LXhzIHhsOnRleHQtWzEwcHhdXFxcIlxcdTAwM0XQmtGD0L/Qu9C10L3QviDRgtC+0LLQsNGA0L7QslxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInRzYy1pdGVtIGZsZXggZ2FwLXgtMi41IGl0ZW1zLWNlbnRlclxcXCJcXHUwMDNFXFx1MDAzQ2J1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHRzYy1pdGVtLWJ0biBmbGV4LXNocmluay0wIHctWzUwcHhdIGgtWzUwcHhdIFsmYW1wO19zdmddOnctMVxcdTAwMkYzIDN4bDp3LTEwIDN4bDpoLTEwIHhsOnctOCB4bDpoLThcXFwiIGRpc2FibGVkXFx1MDAzRVxcdTAwM0Nzdmcgdmlld0JveD1cXFwiMCAwIDE3IDE5XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTEuNjQ1IDkuMTE0ODVDMTMuMzU3NiA3Ljc3MzI5IDE0LjAzMDcgNS40OTMwNSAxMy4zMjExIDMuNDM2NTNDMTIuNjExNSAxLjM4IDEwLjY3NTUgMCA4LjUgMEM2LjMyNDUgMCA0LjM4ODUgMS4zOCAzLjY3ODkyIDMuNDM2NTNDMi45NjkzMyA1LjQ5MzA1IDMuNjQyMzkgNy43NzMyOSA1LjM1NSA5LjExNDg1QzIuMTI0NjMgMTAuNDAxNCAwLjAwMzU4ODI4IDEzLjUyNTcgMCAxNy4wMDI4VjE3Ljg1MjhDMCAxOC4zMjIzIDAuMzgwNTU4IDE4LjcwMjggMC44NSAxOC43MDI4QzEuMzE5NDQgMTguNzAyOCAxLjcgMTguMzIyMyAxLjcgMTcuODUyOFYxNy4wMDI4QzEuNyAxMy4yNDczIDQuNzQ0NDYgMTAuMjAyOCA4LjUgMTAuMjAyOEMxMi4yNTU1IDEwLjIwMjggMTUuMyAxMy4yNDczIDE1LjMgMTcuMDAyOFYxNy44NTI4QzE1LjMgMTguMzIyMyAxNS42ODA2IDE4LjcwMjggMTYuMTUgMTguNzAyOEMxNi42MTk0IDE4LjcwMjggMTcgMTguMzIyMyAxNyAxNy44NTI4VjE3LjAwMjhDMTYuOTk2NCAxMy41MjU3IDE0Ljg3NTQgMTAuNDAxNCAxMS42NDUgOS4xMTQ4NVpNNS4wOTk5MSA1LjEwMjg1QzUuMDk5OTEgMy4yMjUwOCA2LjYyMjE0IDEuNzAyODUgOC40OTk5MSAxLjcwMjg1QzEwLjM3NzcgMS43MDI4NSAxMS44OTk5IDMuMjI1MDggMTEuODk5OSA1LjEwMjg1QzExLjg5OTkgNi45ODA2MiAxMC4zNzc3IDguNTAyODUgOC40OTk5MSA4LjUwMjg1QzcuNTk4MTcgOC41MDI4NSA2LjczMzM3IDguMTQ0NjQgNi4wOTU3NSA3LjUwNzAxQzUuNDU4MTIgNi44NjkzOSA1LjA5OTkxIDYuMDA0NTggNS4wOTk5MSA1LjEwMjg1WlxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwidHNjLWl0ZW0taW5mb1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwidHNjLWl0ZW0tdmFsdWUgdGV4dC1ibGFjayB0ZXh0LXNtIHhsOnRleHQteHNcXFwiXFx1MDAzRTQ4NiA1MzJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ0c2MtaXRlbS1sYWJlbCBtdC0wLjUgdGV4dC14cyB4bDp0ZXh0LVsxMHB4XVxcXCJcXHUwMDNF0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwOzt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChib2R5Tm9TY3JvbGwsIGlzR2FtZU5vdFNlbGVjdGVkLCBwYWdlTW9kaWZpY2F0b3IsIHBhZ2VUaXRsZSkge3B1Z19taXhpbnNbXCJpbWFnZVwiXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbihuYW1lLCBjbGFzc2VzPScnLCBhbHQ9J3BpY3R1cmUnKXtcbnZhciBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFtjbGFzc2VzXSwgW3RydWVdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYGFzc2V0cy9pbWFnZXMvJHtuYW1lfWApLCB0cnVlLCB0cnVlKStwdWcuYXR0cihcImFsdFwiLCBhbHQsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVwiO1xufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnB1Z19taXhpbnNbXCJyYXRpbmdcIl0gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24oY2xhc3Nlcywgc3RhcnNDb3VudCwgcmF0aW5nKXtcbnZhciBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXZcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFtcInJhdGluZ1wiLGBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAke2NsYXNzZXN9YF0sIFtmYWxzZSx0cnVlXSksIGZhbHNlLCB0cnVlKSkgKyBcIlxcdTAwM0VcIjtcbmZvciAodmFyIGkgPSAxOyBpIDw9IHN0YXJzQ291bnQ7IGkrKylcbntcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NzcGFuXCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbXCJyYXRpbmctc3RhclwiLGBmbGV4IGN1cnNvci1wb2ludGVyIG1yLVs1cHhdIGxhc3Q6bXItMCAke2kgPD0gcmF0aW5nID8gYHJhdGluZy1mdWxsYCA6ICcnfWBdLCBbZmFsc2UsdHJ1ZV0pLCBmYWxzZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ3N2ZyB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHdpZHRoPVxcXCIyM1xcXCIgaGVpZ2h0PVxcXCIyMlxcXCIgdmlld0JveD1cXFwiMCAwIDIzIDIyXFxcIiBmaWxsPVxcXCJub25lXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTEuNSAwTDE0LjE5NDIgOC4yOTE4SDIyLjkxMjdMMTUuODU5MyAxMy40MTY0TDE4LjU1MzQgMjEuNzA4MkwxMS41IDE2LjU4MzZMNC40NDY1OCAyMS43MDgyTDcuMTQwNzQgMTMuNDE2NEwwLjA4NzMyMjIgOC4yOTE4SDguODA1ODNMMTEuNSAwWlxcXCIgZmlsbD1cXFwiI0VDRUNFQ1xcXCIgXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDZGVmc1xcdTAwM0VcXG5cXHUwMDNDbGluZWFyR3JhZGllbnQgaWQ9XFxcInBhaW50MF9saW5lYXJfMzNfNDQ4MDZcXFwiIHgxPVxcXCItMC41XFxcIiB5MT1cXFwiMTIuNDEzOFxcXCIgeDI9XFxcIjIzLjVcXFwiIHkyPVxcXCIxMi40MTM4XFxcIiBncmFkaWVudFVuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCJcXHUwMDNFXFxuXFx1MDAzQ3N0b3Agc3RvcC1jb2xvcj1cXFwiI0ZCOUI0MVxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NzdG9wIG9mZnNldD1cXFwiMVxcXCIgc3RvcC1jb2xvcj1cXFwiI0YyQjk2RFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGbGluZWFyR3JhZGllbnRcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkZWZzXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcIjtcbn1cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufTtcblxuXG5cblxucHVnX21peGluc1tcInNlY3Rpb24taGVhZGVyXCJdID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKHRpdGxlLCBzZWFyY2gsIHZpZXdCdG4sIGxpbmVUeXBlID0gJ3ByaW1hcnknKXtcbnZhciBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXZcIiArIChwdWcuYXR0cnMocHVnLm1lcmdlKFt7XCJjbGFzc1wiOiBcInNoIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBnYXAteC0zIDJtZDpmbGV4LWNvbC1yZXZlcnNlIDJtZDppdGVtcy1zdGFydCAybWQ6Z2FwLXktNVwifSxhdHRyaWJ1dGVzXSksIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNoLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDaDIgY2xhc3M9XFxcInNoLXRpdGxlLXRleHQgZm9udC1zZWNvbmRhcnktYm9sZCB0ZXh0LTJ4bCB0ZXh0LWJsYWNrIDJtZDp0ZXh0LXhsXFxcIlxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSB0aXRsZSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmgyXFx1MDAzRVxcdTAwM0NkaXZcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFtcInNoLXRpdGxlLWxpbmVcIixcIm10LTMgcm91bmRlZC1mdWxsIHctOSBoLTEgMm1kOm10LTJcIixcImJnLWdyYWRpZW50LVwiICsgbGluZVR5cGVdLCBbZmFsc2UsZmFsc2UsdHJ1ZV0pLCBmYWxzZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG5pZiAoKHNlYXJjaCB8fCB2aWV3QnRuKSkge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2gtYmFyIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIDJtZDp3LWZ1bGwgMm1kOmZsZXgtcm93LXJldmVyc2VcXFwiXFx1MDAzRVwiO1xuaWYgKHZpZXdCdG4pIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcInNoLXZpZXdidG4gdmlldy1idG4gZmxleC1zaHJpbmstMCByb3VuZGVkLWZ1bGwgdy0xMSBoLTExIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLVsjRThFQUY3XSBob3ZlcjpiZy1bI2RjZGZmMV0gY3Vyc29yLXBvaW50ZXIgMm1kOnctMTAgMm1kOmgtMTBcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImJ0bi1pY29uIF9saXN0IHctWzE0cHhdIGgtWzE0cHhdIFsmYW1wO19zdmddOnctWzEwMCVdIFsmYW1wO19zdmddOmgtWzEwMCVdIFsmYW1wO19zdmddOm9wYWNpdHktMjBcXFwiXFx1MDAzRVxcdTAwM0Nzdmcgdmlld0JveD1cXFwiMCAwIDE0IDExXFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0wLjUgMkgxMy41QzEzLjc3NjIgMiAxNCAxLjgwMTAzIDE0IDEuNTU1NTZWMC40NDQ0NDRDMTQgMC4xOTg5NzIgMTMuNzc2MiAwIDEzLjUgMEgwLjVDMC4yMjM4NDQgMCAwIDAuMTk4OTcyIDAgMC40NDQ0NDRWMS41NTU1NkMwIDEuODAxMDMgMC4yMjM4NDQgMiAwLjUgMlpNMC41IDYuNDQ0NDRIMTMuNUMxMy43NzYyIDYuNDQ0NDQgMTQgNi4yNDU0NyAxNCA2VjQuODg4ODlDMTQgNC42NDM0MiAxMy43NzYyIDQuNDQ0NDQgMTMuNSA0LjQ0NDQ0SDAuNUMwLjIyMzg0NCA0LjQ0NDQ0IDAgNC42NDM0MiAwIDQuODg4ODlWNkMwIDYuMjQ1NDcgMC4yMjM4NDQgNi40NDQ0NCAwLjUgNi40NDQ0NFpNMC41IDEwLjg4ODlIMTMuNUMxMy43NzYyIDEwLjg4ODkgMTQgMTAuNjg5OSAxNCAxMC40NDQ0VjkuMzMzMzNDMTQgOS4wODc4NiAxMy43NzYyIDguODg4ODkgMTMuNSA4Ljg4ODg5SDAuNUMwLjIyMzg0NCA4Ljg4ODg5IDAgOS4wODc4NiAwIDkuMzMzMzNWMTAuNDQ0NEMwIDEwLjY4OTkgMC4yMjM4NDQgMTAuODg4OSAwLjUgMTAuODg4OVpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImJ0bi1pY29uIF9jYXJkcyB3LTFcXHUwMDJGMiBoLTFcXHUwMDJGMiBbJmFtcDtfc3ZnXTp3LVsxMDAlXSBbJmFtcDtfc3ZnXTpoLVsxMDAlXSBbJmFtcDtfc3ZnXTpvcGFjaXR5LTIwXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDZyBjbGlwLXBhdGg9XFxcInVybCgjY2xpcDBfMTE4NV8zOTU1NSlcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk05LjMzMjY4IDIuNjY2NUgzLjk5OTM1QzMuNjQ1NzMgMi42NjY1IDMuMzA2NTkgMi44MDY5OCAzLjA1NjU0IDMuMDU3MDNDMi44MDY0OSAzLjMwNzA4IDIuNjY2MDIgMy42NDYyMiAyLjY2NjAyIDMuOTk5ODRWOS4zMzMxN0MyLjY2NjAyIDkuNjg2NzkgMi44MDY0OSAxMC4wMjU5IDMuMDU2NTQgMTAuMjc2QzMuMzA2NTkgMTAuNTI2IDMuNjQ1NzMgMTAuNjY2NSAzLjk5OTM1IDEwLjY2NjVIOS4zMzI2OEM5LjY4NjMgMTAuNjY2NSAxMC4wMjU0IDEwLjUyNiAxMC4yNzU1IDEwLjI3NkMxMC41MjU1IDEwLjAyNTkgMTAuNjY2IDkuNjg2NzkgMTAuNjY2IDkuMzMzMTdWMy45OTk4NEMxMC42NjYgMy42NDYyMiAxMC41MjU1IDMuMzA3MDggMTAuMjc1NSAzLjA1NzAzQzEwLjAyNTQgMi44MDY5OCA5LjY4NjMgMi42NjY1IDkuMzMyNjggMi42NjY1Wk0zLjk5OTM1IDkuMzMzMTdWMy45OTk4NEg5LjMzMjY4VjkuMzMzMTdIMy45OTkzNVpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0yMC4wMDA3IDIuNjY2NUgxNC42NjczQzE0LjMxMzcgMi42NjY1IDEzLjk3NDYgMi44MDY5OCAxMy43MjQ1IDMuMDU3MDNDMTMuNDc0NSAzLjMwNzA4IDEzLjMzNCAzLjY0NjIyIDEzLjMzNCAzLjk5OTg0VjkuMzMzMTdDMTMuMzM0IDkuNjg2NzkgMTMuNDc0NSAxMC4wMjU5IDEzLjcyNDUgMTAuMjc2QzEzLjk3NDYgMTAuNTI2IDE0LjMxMzcgMTAuNjY2NSAxNC42NjczIDEwLjY2NjVIMjAuMDAwN0MyMC4zNTQzIDEwLjY2NjUgMjAuNjkzNCAxMC41MjYgMjAuOTQzNSAxMC4yNzZDMjEuMTkzNSAxMC4wMjU5IDIxLjMzNCA5LjY4Njc5IDIxLjMzNCA5LjMzMzE3VjMuOTk5ODRDMjEuMzM0IDMuNjQ2MjIgMjEuMTkzNSAzLjMwNzA4IDIwLjk0MzUgMy4wNTcwM0MyMC42OTM0IDIuODA2OTggMjAuMzU0MyAyLjY2NjUgMjAuMDAwNyAyLjY2NjVaTTE0LjY2NzMgOS4zMzMxN1YzLjk5OTg0SDIwLjAwMDdWOS4zMzMxN0gxNC42NjczWlxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTkuMzMyNjggMTMuMzMzNUgzLjk5OTM1QzMuNjQ1NzMgMTMuMzMzNSAzLjMwNjU5IDEzLjQ3NCAzLjA1NjU0IDEzLjcyNEMyLjgwNjQ5IDEzLjk3NDEgMi42NjYwMiAxNC4zMTMyIDIuNjY2MDIgMTQuNjY2OFYyMC4wMDAyQzIuNjY2MDIgMjAuMzUzOCAyLjgwNjQ5IDIwLjY5MjkgMy4wNTY1NCAyMC45NDNDMy4zMDY1OSAyMS4xOTMgMy42NDU3MyAyMS4zMzM1IDMuOTk5MzUgMjEuMzMzNUg5LjMzMjY4QzkuNjg2MyAyMS4zMzM1IDEwLjAyNTQgMjEuMTkzIDEwLjI3NTUgMjAuOTQzQzEwLjUyNTUgMjAuNjkyOSAxMC42NjYgMjAuMzUzOCAxMC42NjYgMjAuMDAwMlYxNC42NjY4QzEwLjY2NiAxNC4zMTMyIDEwLjUyNTUgMTMuOTc0MSAxMC4yNzU1IDEzLjcyNEMxMC4wMjU0IDEzLjQ3NCA5LjY4NjMgMTMuMzMzNSA5LjMzMjY4IDEzLjMzMzVaTTMuOTk5MzUgMjAuMDAwMlYxNC42NjY4SDkuMzMyNjhWMjAuMDAwMkgzLjk5OTM1WlxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTIwLjAwMDcgMTMuMzMzNUgxNC42NjczQzE0LjMxMzcgMTMuMzMzNSAxMy45NzQ2IDEzLjQ3NCAxMy43MjQ1IDEzLjcyNEMxMy40NzQ1IDEzLjk3NDEgMTMuMzM0IDE0LjMxMzIgMTMuMzM0IDE0LjY2NjhWMjAuMDAwMkMxMy4zMzQgMjAuMzUzOCAxMy40NzQ1IDIwLjY5MjkgMTMuNzI0NSAyMC45NDNDMTMuOTc0NiAyMS4xOTMgMTQuMzEzNyAyMS4zMzM1IDE0LjY2NzMgMjEuMzMzNUgyMC4wMDA3QzIwLjM1NDMgMjEuMzMzNSAyMC42OTM0IDIxLjE5MyAyMC45NDM1IDIwLjk0M0MyMS4xOTM1IDIwLjY5MjkgMjEuMzM0IDIwLjM1MzggMjEuMzM0IDIwLjAwMDJWMTQuNjY2OEMyMS4zMzQgMTQuMzEzMiAyMS4xOTM1IDEzLjk3NDEgMjAuOTQzNSAxMy43MjRDMjAuNjkzNCAxMy40NzQgMjAuMzU0MyAxMy4zMzM1IDIwLjAwMDcgMTMuMzMzNVpNMTQuNjY3MyAyMC4wMDAyVjE0LjY2NjhIMjAuMDAwN1YyMC4wMDAySDE0LjY2NzNaXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2RlZnNcXHUwMDNFXFxuXFx1MDAzQ2NsaXBQYXRoIGlkPVxcXCJjbGlwMF8xMTg1XzM5NTU1XFxcIlxcdTAwM0VcXG5cXHUwMDNDcmVjdCB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmNsaXBQYXRoXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGVmc1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbn1cbmlmIChzZWFyY2gpIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcInNoLXNlYXJjaCByb3VuZGVkLWZ1bGwgaC1bNTBweF0gcHgtNiBtYXgtdy1bMjcwcHhdIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBiZy1bI0U4RUFGN10gMm1kOm1heC13LW5vbmUgMm1kOmZsZXgtZ3JvdyAybWQ6aC0xMCAybWQ6cHgtM1xcXCJcXHUwMDNFXFx1MDAzQ2J1dHRvbiBjbGFzcz1cXFwic2gtc2VhcmNoLWljb24gZmxleC1zaHJpbmstMCB3LTQgaC1mdWxsIFsmYW1wO19zdmddOnctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LVsjQjhCQUNGXSBkdXJhdGlvbi0xMDAgaG92ZXI6dGV4dC1ibGFja1xcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB2aWV3Qm94PVxcXCIwIDAgMTcgMTdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0tMy45MzEzNmUtMDcgNy41MDYxQzkuNzExMDVlLTA1IDEwLjIzNTIgMS41ODEwNSAxMi43MTcyIDQuMDU0MjUgMTMuODcwOUM2LjUyNzQ1IDE1LjAyNDcgOS40NDUxIDE0LjY0MTQgMTEuNTM2NCAxMi44ODhMMTQuODgxNCAxNi4yNDE4QzE1LjEwNDEgMTYuNDY0NSAxNS40Mjg3IDE2LjU1MTUgMTUuNzMyOSAxNi40Njk5QzE2LjAzNzEgMTYuMzg4NCAxNi4yNzQ3IDE2LjE1MDggMTYuMzU2MiAxNS44NDY2QzE2LjQzNzggMTUuNTQyNCAxNi4zNTA4IDE1LjIxNzggMTYuMTI4MSAxNC45OTUxTDEyLjcyMTYgMTEuNjE0OUMxMy41ODUzIDEwLjQyNTggMTQuMDQ5NSA4Ljk5MzM0IDE0LjA0NzMgNy41MjM2NkMxNC4wNDczIDMuNjQ0NiAxMC45MDI3IDAuNSA3LjAyMzY2IDAuNUMzLjE0NDYgMC41IC01LjYxOTI3ZS0wNyAzLjY0NDYgLTMuOTIzNjhlLTA3IDcuNTIzNjZMLTMuOTMxMzZlLTA3IDcuNTA2MVpNMTIuMjkxNCA3LjUwNjA4QzEyLjI5MTQgMTAuNDE1NCA5LjkzMjk2IDEyLjc3MzggNy4wMjM2NiAxMi43NzM4QzQuMTE0MzYgMTIuNzczOCAxLjc1NTkyIDEwLjQxNTQgMS43NTU5MSA3LjUwNjA4QzEuNzU1OTEgNC41OTY3OCA0LjExNDM2IDIuMjM4MzMgNy4wMjM2NiAyLjIzODMzQzguNDIwNzUgMi4yMzgzMyA5Ljc2MDYyIDIuNzkzMzMgMTAuNzQ4NSAzLjc4MTIyQzExLjczNjQgNC43NjkxMSAxMi4yOTE0IDYuMTA4OTkgMTIuMjkxNCA3LjUwNjA4WlxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFXFx1MDAzQ2lucHV0IGNsYXNzPVxcXCJzaC1zZWFyY2gtaW5wdXQgZmxleC1ncm93IG1sLTIuNSB3LWZ1bGwgaC1mdWxsIGJnLXRyYW5zcGFyZW50IGZvbnQtcHJpbWFyeS1tZWQgdGV4dC1iYXNlIHRleHQtYmxhY2sgMm1kOnRleHQtc21cXFwiIHBsYWNlaG9sZGVyPVxcXCLQn9C+0LjRgdC6XFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbn1cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufVxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnB1Z19taXhpbnNbXCJwcm9kdWN0LWNhcmRcIl0gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24odHlwZSwgaXNFZGl0YWJsZSwgaXNBY3RpdmUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGV0YWlscywgc291cmNlLCBwbGF0ZXMsIHJhdGluZyl7XG52YXIgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYyByb3VuZGVkLWxnIGJnLXdoaXRlXFxcIlxcdTAwM0VcIjtcbmlmICgodHlwZSA9PT0gXCJwcm9kdWN0XCIgJiYgaXNBY3RpdmUpKSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYy1wbGF0ZS1jb250YWluZXJcXFwiXFx1MDAzRVwiO1xuLy8gaXRlcmF0ZSBwbGF0ZXNcbjsoZnVuY3Rpb24oKXtcbiAgdmFyICQkb2JqID0gcGxhdGVzO1xuICBpZiAoJ251bWJlcicgPT0gdHlwZW9mICQkb2JqLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgcHVnX2luZGV4MiA9IDAsICQkbCA9ICQkb2JqLmxlbmd0aDsgcHVnX2luZGV4MiA8ICQkbDsgcHVnX2luZGV4MisrKSB7XG4gICAgICAgIHZhciBpdGVtID0gJCRvYmpbcHVnX2luZGV4Ml07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2XCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbXCJwYy1wbGF0ZVwiLFwiYmctZ3JhZGllbnQtcHJpbWFyeSBfc2hhZG93LXByaW1hcnkgcHktMSBweC02IDNzbTpweC0yIDNzbTpweS1bMXB4XVwiLCgnYmctZ3JhZGllbnQtJyArIGl0ZW0udHlwZSldLCBbZmFsc2UsZmFsc2UsdHJ1ZV0pLCBmYWxzZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS52YWx1ZSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbiAgICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgJCRsID0gMDtcbiAgICBmb3IgKHZhciBwdWdfaW5kZXgyIGluICQkb2JqKSB7XG4gICAgICAkJGwrKztcbiAgICAgIHZhciBpdGVtID0gJCRvYmpbcHVnX2luZGV4Ml07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2XCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbXCJwYy1wbGF0ZVwiLFwiYmctZ3JhZGllbnQtcHJpbWFyeSBfc2hhZG93LXByaW1hcnkgcHktMSBweC02IDNzbTpweC0yIDNzbTpweS1bMXB4XVwiLCgnYmctZ3JhZGllbnQtJyArIGl0ZW0udHlwZSldLCBbZmFsc2UsZmFsc2UsdHJ1ZV0pLCBmYWxzZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS52YWx1ZSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbiAgICB9XG4gIH1cbn0pLmNhbGwodGhpcyk7XG5cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufVxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGMtc3VwaW5mbyBmb250LXNlY29uZGFyeS1ib2xkIHRleHQtWzEzcHhdIHRleHQtYmxhY2sgM3NtOnRleHQteHNcXFwiXFx1MDAzRVwiO1xuaWYgKCh0eXBlID09PSBcInByb2R1Y3RcIikpIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcInBjLXJhdGluZyBmbGV4IGdhcC0xIGl0ZW1zLWNlbnRlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGMtcmF0aW5nLWljb24gZmxleC1zaHJpbmstMCB3LVsyMnB4XSBoLVsyMnB4XSBbJmFtcDtfc3ZnXTp3LWZ1bGwgM3NtOnctNCAzc206aC00XFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHZpZXdCb3g9XFxcIjAgMCAyMiAyMFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTEgMEwxMy40Njk3IDcuNjAwODFIMjEuNDYxNkwxNC45OTYgMTIuMjk4NEwxNy40NjU2IDE5Ljg5OTJMMTEgMTUuMjAxNkw0LjUzNDM2IDE5Ljg5OTJMNy4wMDQwMiAxMi4yOTg0TDAuNTM4Mzc5IDcuNjAwODFIOC41MzAzNUwxMSAwWlxcXCIgZmlsbD1cXFwidXJsKCNwYWludDBfbGluZWFyXzk0MV8xOTM0MilcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDZGVmc1xcdTAwM0VcXG5cXHUwMDNDbGluZWFyR3JhZGllbnQgaWQ9XFxcInBhaW50MF9saW5lYXJfOTQxXzE5MzQyXFxcIiB4MT1cXFwiLTUuMjMzMTJlLTA4XFxcIiB5MT1cXFwiMTEuMzc5M1xcXCIgeDI9XFxcIjIyXFxcIiB5Mj1cXFwiMTEuMzc5M1xcXCIgZ3JhZGllbnRVbml0cz1cXFwidXNlclNwYWNlT25Vc2VcXFwiXFx1MDAzRVxcblxcdTAwM0NzdG9wIHN0b3AtY29sb3I9XFxcIiNGQjlCNDFcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDc3RvcCBvZmZzZXQ9XFxcIjFcXFwiIHN0b3AtY29sb3I9XFxcIiNGMkI5NkRcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmxpbmVhckdyYWRpZW50XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGVmc1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByYXRpbmcgPyByYXRpbmcgOiAnNC44JykgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG59XG5pZiAoKHR5cGUgPT09IFwiaGlzdG9yeVwiKSkge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGMtaWRcXFwiXFx1MDAzRSMyMzE0MVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufVxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGMtaWJhciBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBmbGV4LXdyYXAgZ2FwLTNcXFwiXFx1MDAzRVwiO1xuaWYgKChpc0VkaXRhYmxlKSkge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2J1dHRvbiBjbGFzcz1cXFwicGMtYnRuLWVkaXRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImJ0bi1pY29uXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHZpZXdCb3g9XFxcIjAgMCAxOSAxOFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTE3LjIwMDYgNy44ODcxN0w3Ljk2MTA4IDE3LjEyNjdDNy40MDMyNyAxNy42ODUyIDYuNjQ2NDkgMTcuOTk5MyA1Ljg1NzE0IDE4SDAuMDcxMjg5MVYxMi4yMTQyQzAuMDcxOTg0IDExLjQyNDggMC4zODYxMTcgMTAuNjY4IDAuOTQ0NjI1IDEwLjExMDJMMTAuMTg0MSAwLjg3MDcxNkMxMS4zNDY1IC0wLjI5MDIzOSAxMy4yMjk2IC0wLjI5MDIzOSAxNC4zOTIgMC44NzA3MTZMMTcuMjAwNiAzLjY3OTI4QzE4LjM2MTUgNC44NDE2OCAxOC4zNjE1IDYuNzI0NzcgMTcuMjAwNiA3Ljg4NzE3Wk0yLjI5MjY5IDExLjQ2OThDMi4xMDkzNCAxMS42NTQ3IDIuMDA1OTggMTEuOTA0MiAyLjAwNDg4IDEyLjE2NDVMMi4wNTQ1IDE2LjAxNTFINS44NTU1QzYuMTE1ODUgMTYuMDE0IDYuMzY1MzUgMTUuOTEwNyA2LjU1MDIgMTUuNzI3M0wxNS43NSA2LjQyODI4QzE2LjEzNDggNi4wNDExOSAxNi4xMzQ4IDUuNDE2MDQgMTUuNzUgNS4wMjg5NUwxMi45NDE0IDIuMjIwMzlDMTIuNTU0MyAxLjgzNTYgMTEuOTI5MiAxLjgzNTYgMTEuNTQyMSAyLjIyMDM5TDIuMjkyNjkgMTEuNDY5OFpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVwiO1xufVxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2xhYmVsIGNsYXNzPVxcXCJwYy1idG4tbGlrZVxcXCJcXHUwMDNFXFx1MDAzQ2lucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJidG4taWNvblxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyBjbGFzcz1cXFwiX2RlZmF1bHRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMyAxOFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTYuMDA2ODkgMTAuNDEzNkwxMS4wODE5IDE1LjA2NzRWMTUuMDY3NEwxNi4xNTY4IDEwLjQxMzZWMTAuNDEzNkwxOS4wMzk0IDcuNzcwMTlDMjAuNDQwOCA2LjQ4NTA4IDIwLjQ0MDggNC40MDE1IDE5LjAzOTQgMy4xMTYzOUMxNy42MzggMS44MzEyOCAxNS4zNjU5IDEuODMxMjggMTMuOTY0NCAzLjExNjM5TDExLjA4MTkgNS43NzgzNkw4LjE5OTI3IDMuMTM1QzYuNzk3ODYgMS44NDk4OSA0LjUyNTcyIDEuODQ5ODkgMy4xMjQzIDMuMTM1QzEuNzIyODkgNC40MjAxMiAxLjcyMjg5IDYuNTAzNjkgMy4xMjQzIDcuNzg4ODFMNi4wMDY4OSAxMC40MTM2Wk0xMi41MDI0IDEuODIyNjVDMTQuNjkxNCAtMC4xODQ2OTggMTguMjQwNSAtMC4xODQ2OTggMjAuNDI5NSAxLjgyMjY1QzIyLjYxODUgMy44Mjk5OSAyMi42MTg1IDcuMDg0NTQgMjAuNDI5NSA5LjA5MTg5TDE4Ljk4ODIgMTAuNDEzNlYxMC40MTM2TDExLjA4MTQgMTcuNjgyOFYxNy42ODI4TDMuMTU0MzQgMTAuNDEzNlYxMC40MTM2TDEuNzEzMDUgOS4wOTE4OUMtMC40NzU5NjMgNy4wODQ1NCAtMC40NzU5NjMgMy44Mjk5OSAxLjcxMzA1IDEuODIyNjVDMy45MDIwNSAtMC4xODQ2OTggNy40NTExNCAtMC4xODQ2OTggOS42NDAxNSAxLjgyMjY1TDExLjA4MTQgMy4xNDQzM0wxMi41MDI0IDEuODIyNjVaXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDc3ZnIGNsYXNzPVxcXCJfY2hlY2tlZFxcXCIgdmlld0JveD1cXFwiMCAwIDIyIDE4XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTIuNTcxNyAxLjU2MDVDMTQuNzI4NCAtMC41MjAxNjcgMTguMjI1MSAtMC41MjAxNjcgMjAuMzgxNyAxLjU2MDVDMjIuNTM4NCAzLjY0MTE3IDIyLjUzODQgNy4wMTQ2IDIwLjM4MTcgOS4wOTUyN0wxOC45NjE3IDEwLjQ2NTJMMTEuMTcxNyAxOEwzLjM2MTcyIDEwLjQ2NTJMMS45NDE3MiA5LjA5NTI3Qy0wLjIxNDk0OSA3LjAxNDYgLTAuMjE0OTQ5IDMuNjQxMTcgMS45NDE3MiAxLjU2MDVDNC4wOTgzOSAtMC41MjAxNjcgNy41OTUwNSAtMC41MjAxNjcgOS43NTE3MiAxLjU2MDVMMTEuMTcxNyAyLjkzMDQ2TDEyLjU3MTcgMS41NjA1WlxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsYWJlbFxcdTAwM0VcIjtcbmlmICgoaXNFZGl0YWJsZSkpIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NidXR0b24gY2xhc3M9XFxcInBjLWJ0bi1yZW1vdmVcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImJ0bi1pY29uXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHZpZXdCb3g9XFxcIjAgMCAxOCAxOFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMC40MjQwMjMgMTcuNTc2Qy0wLjA0NjI4ODggMTcuMTAyOCAtMC4wNDYyODg4IDE2LjMzODcgMC40MjQwMjMgMTUuODY1NkwxNS44NjU2IDAuNDI0MDM4QzE2LjE2MjEgMC4wNzc4NzQyIDE2LjYyNzUgLTAuMDcyOTA5NyAxNy4wNzA2IDAuMDMzNjc5NUMxNy41MTM3IDAuMTQwMjY5IDE3Ljg1OTcgMC40ODYyNDEgMTcuOTY2MyAwLjkyOTM1M0MxOC4wNzI5IDEuMzcyNDcgMTcuOTIyMSAxLjgzNzkzIDE3LjU3NTkgMi4xMzQzOEwyLjEzNDM2IDE3LjU3NkMxLjY2MTI0IDE4LjA0NjMgMC44OTcxNDEgMTguMDQ2MyAwLjQyNDAyMyAxNy41NzZaXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMC40MjQwMjMgMC40MjQwMjNDMC44OTcxNDEgLTAuMDQ2Mjg4OCAxLjY2MTI0IC0wLjA0NjI4ODggMi4xMzQzNiAwLjQyNDAyM0wxNy41NzU5IDE1Ljg2NTZDMTcuOTIyMSAxNi4xNjIxIDE4LjA3MjkgMTYuNjI3NSAxNy45NjYzIDE3LjA3MDZDMTcuODU5NyAxNy41MTM3IDE3LjUxMzcgMTcuODU5NyAxNy4wNzA2IDE3Ljk2NjNDMTYuNjI3NSAxOC4wNzI5IDE2LjE2MjEgMTcuOTIyMSAxNS44NjU2IDE3LjU3NTlMMC40MjQwMjMgMi4xMzQzNkMtMC4wNDYyODg4IDEuNjYxMjQgLTAuMDQ2Mjg4OCAwLjg5NzE0MSAwLjQyNDAyMyAwLjQyNDAyM1pcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVwiO1xufVxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdlwiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW1wicGMtcHJldmlld1wiLFwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIiwoIWlzQWN0aXZlICYmIFwib3BhY2l0eS01MFwiKV0sIFtmYWxzZSxmYWxzZSx0cnVlXSksIGZhbHNlLCB0cnVlKSkgKyBcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYy1wcmV2aWV3LWlubmVyIG1heC13LVsxMjBweF0gdy1mdWxsIGgtWzEyMHB4XSAzc206bWF4LXctWzgwcHhdIDNzbTptYXgtaC1bODBweF1cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdwcm9kdWN0LXByZXZpZXctMS5wbmcnLCAncGMtcHJldmlldy1waWMgdy1mdWxsJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYy1pbmZvXFxcIlxcdTAwM0VcXHUwMDNDZGl2XCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbXCJwYy10aXRsZVwiLFwiZm9udC1zZWNvbmRhcnktYm9sZCB0ZXh0LVsxM3B4XSB0ZXh0LWJsYWNrIDNzbTp0ZXh0LVsxMnB4XVwiLCghaXNBY3RpdmUgJiYgXCJvcGFjaXR5LTMwXCIpXSwgW2ZhbHNlLGZhbHNlLHRydWVdKSwgZmFsc2UsIHRydWUpKSArIFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IHRpdGxlKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xuaWYgKChkZXNjcmlwdGlvbikpIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcInBjLXN1YnRpdGxlIG10LTEgZm9udC1zZWNvbmRhcnktbWVkIHRleHQteHMgdGV4dC1bI0E2QjFDN10gM3NtOnRleHQtWzEwcHhdXFxcIlxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBkZXNjcmlwdGlvbikgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbn1cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBjLXN1YmluZm8gdGV4dC1bI0JFQzFEQl0gZmxleCBmbGV4LWNvbCBnYXAtMiAzc206Z2FwLTFcXFwiXFx1MDAzRVwiO1xuaWYgKChkZXRhaWxzLmxlbmd0aCA9PT0gMCkpIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcInBjLXN1YmluZm8tdmFsdWUgZm9udC1zZWNvbmRhcnktbWVkIHRleHQtWzEwcHhdXFxcIlxcdTAwM0XQntC/0LjRgdCw0L3QuNC1INGC0L7QstCw0YDQsCDQvtGC0YHRgtGD0YLRgdGC0LLRg9C10YJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbn1cbmVsc2Uge1xuLy8gaXRlcmF0ZSBkZXRhaWxzXG47KGZ1bmN0aW9uKCl7XG4gIHZhciAkJG9iaiA9IGRldGFpbHM7XG4gIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgJCRvYmoubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBwdWdfaW5kZXgzID0gMCwgJCRsID0gJCRvYmoubGVuZ3RoOyBwdWdfaW5kZXgzIDwgJCRsOyBwdWdfaW5kZXgzKyspIHtcbiAgICAgICAgdmFyIGl0ZW0gPSAkJG9ialtwdWdfaW5kZXgzXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcInBjLXN1YmluZm8tdmFsdWUgZm9udC1zZWNvbmRhcnktbWVkIHRleHQtWzEwcHhdXFxcIlxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBpdGVtLmxhYmVsKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIjogXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS52YWx1ZSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbiAgICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgJCRsID0gMDtcbiAgICBmb3IgKHZhciBwdWdfaW5kZXgzIGluICQkb2JqKSB7XG4gICAgICAkJGwrKztcbiAgICAgIHZhciBpdGVtID0gJCRvYmpbcHVnX2luZGV4M107XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYy1zdWJpbmZvLXZhbHVlIGZvbnQtc2Vjb25kYXJ5LW1lZCB0ZXh0LVsxMHB4XVxcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS5sYWJlbCkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCI6IFwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGl0ZW0udmFsdWUpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG4gICAgfVxuICB9XG59KS5jYWxsKHRoaXMpO1xuXG59XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYy10YmFyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYy10YmFyLWlubmVyIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIDNzbTpnYXAtMS41IDNzbTpmbGV4LWNvbCAzc206aXRlbXMtc3RhcnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBjLXNvdXJjZSBmbGV4LXNocmluay0wIHctMTEgaC0xMSAzc206dy0xMCAzc206aC0xMFxcXCJcXHUwMDNFXCI7XG5pZiAoKHNvdXJjZSA9PT0gJ3VzZXInKSkge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGMtc291cmNlLXVzZXIgdy1mdWxsIGgtZnVsbCByZWxhdGl2ZVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGMtc291cmNlLXN0YXR1cyBfZ3JlZW5cXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdhdmF0YXItZXhhbXBsZS0zLnBuZycsICd3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbn1cbmlmICgoc291cmNlID09PSAnYWRtaW4nKSkge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGMtc291cmNlLWFkbWluIHJlbGF0aXZlIHJvdW5kZWQtZnVsbCB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLVsjMjQ2MEVDXVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGMtc291cmNlLWFkbWluLWljb24gdy1bNTUlXSB0ZXh0LXdoaXRlXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHZpZXdCb3g9XFxcIjAgMCAyMCAxNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTE3LjI3MjcgNC4zMzE5NEgxNi4zNjM2QzE2LjE2ODEgNC4zMzQxNCAxNS45NzMyIDQuMzU1NDUgMTUuNzgxOCA0LjM5NTU3QzE0Ljc0MzUgMi4xMzczMSAxMi40ODU1IDAuNjkwMjE2IDEwIDAuNjkwMjE2QzcuNTE0NDkgMC42OTAyMTYgNS4yNTY0NSAyLjEzNzMxIDQuMjE4MTggNC4zOTU1N0M0LjAyNjc4IDQuMzU1NDUgMy44MzE5MSA0LjMzNDE0IDMuNjM2MzYgNC4zMzE5NEgyLjcyNzI3QzEuMjIxMDQgNC4zMzE5NCAwIDUuNTUyOTggMCA3LjA1OTIxVjEwLjY5NTZDMCAxMi4yMDE4IDEuMjIxMDQgMTMuNDIyOCAyLjcyNzI3IDEzLjQyMjhIMy42MzYzNkM1LjE0MjU5IDEzLjQyMjggNi4zNjM2NCAxMi4yMDE4IDYuMzYzNjQgMTAuNjk1NlY3LjA1OTIxQzYuMzU4NTggNi40NTEzNiA2LjE1MDYxIDUuODYyNjMgNS43NzI3MyA1LjM4NjQ4QzYuNDU4NDEgMy42NTE1NyA4LjEzNDUxIDIuNTExNzUgMTAgMi41MTE3NUMxMS44NjU1IDIuNTExNzUgMTMuNTQxNiAzLjY1MTU3IDE0LjIyNzMgNS4zODY0OEMxMy44NDk0IDUuODYyNjMgMTMuNjQxNCA2LjQ1MTM2IDEzLjYzNjQgNy4wNTkyMVYxMC42OTU2QzEzLjYzNjQgMTIuMjAxOCAxNC44NTc0IDEzLjQyMjggMTYuMzYzNiAxMy40MjI4SDE3LjI3MjdDMTguNzc5IDEzLjQyMjggMjAgMTIuMjAxOCAyMCAxMC42OTU2VjcuMDU5MjFDMjAgNS41NTI5OCAxOC43NzkgNC4zMzE5NCAxNy4yNzI3IDQuMzMxOTRaTTQuNTQ1NDUgMTAuNjk1NkM0LjU0NTQ1IDExLjE5NzcgNC4xMzg0NCAxMS42MDQ3IDMuNjM2MzYgMTEuNjA0N0gyLjcyNzI3QzIuMjI1MiAxMS42MDQ3IDEuODE4MTggMTEuMTk3NyAxLjgxODE4IDEwLjY5NTZWNy4wNTkyM0MxLjgxODE4IDYuNTU3MTYgMi4yMjUyIDYuMTUwMTQgMi43MjcyNyA2LjE1MDE0SDMuNjM2MzZDNC4xMzg0NCA2LjE1MDE0IDQuNTQ1NDUgNi41NTcxNiA0LjU0NTQ1IDcuMDU5MjNWMTAuNjk1NlpNMTcuMjcyNyAxMS42MDQ3QzE3Ljc3NDggMTEuNjA0NyAxOC4xODE4IDExLjE5NzcgMTguMTgxOCAxMC42OTU2VjcuMDU5MjNDMTguMTgxOCA2LjU1NzE2IDE3Ljc3NDggNi4xNTAxNCAxNy4yNzI3IDYuMTUwMTRIMTYuMzYzNkMxNS44NjE2IDYuMTUwMTQgMTUuNDU0NSA2LjU1NzE2IDE1LjQ1NDUgNy4wNTkyM1YxMC42OTU2QzE1LjQ1NDUgMTEuMTk3NyAxNS44NjE2IDExLjYwNDcgMTYuMzYzNiAxMS42MDQ3SDE3LjI3MjdaXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYy1zb3VyY2Utc3RhdHVzIF9ncmVlblxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG59XG5pZiAoKHNvdXJjZSA9PT0gJ2Nhc2UnKSkge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGMtc291cmNlLWNhc2UgcmVsYXRpdmUgcm91bmRlZC1mdWxsIHctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdjYXNlLXBpbmsucG5nJywgJ3ctZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlcicpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG59XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYy10b3RhbCBmbGV4LWdyb3cgaC0xMSByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItWyNGM0Y3RkZdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwbC00IGdhcC0yIDNzbTpoLTEwIDNzbTpwbC0zIDNzbTp3LWZ1bGxcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBjLXRvdGFsLWluZiBmbGV4IGZsZXgtd3JhcCBnYXAteC1bNXB4XSBmb250LXNlY29uZGFyeS1ib2xkIHRleHQteHMgM3NtOnRleHQtWzEwcHhdXFxcIlxcdTAwM0VcIjtcbmlmICgoaXNBY3RpdmUpKSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDc3BhbiBjbGFzcz1cXFwidGV4dC1bI0JFQzFEQl1cXFwiXFx1MDAzRdCm0LXQvdCwXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVwiO1xufVxuZWxzZSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDc3BhbiBjbGFzcz1cXFwidGV4dC1bIzgzYjk0NV1cXFwiXFx1MDAzRdCa0YPQv9C70LXQvVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcIjtcbn1cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NzcGFuIGNsYXNzPVxcXCJ0ZXh0LVsjODNiOTQ1XVxcXCJcXHUwMDNFMTIwLjAwIFxcdTAwM0NiXFx1MDAzReKCvVxcdTAwM0NcXHUwMDJGYlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGMtdG90YWwtYnRuLXdyYXAgZmxleC1zaHJpbmstMCB3LTExIGgtMTEgM3NtOnctMTAgM3NtOmgtMTBcXFwiXFx1MDAzRVwiO1xuaWYgKCh0eXBlID09PSBcInByb2R1Y3RcIikpIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NhIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBwYy10b3RhbC1idG4gcm91bmRlZC1mdWxsIHctZnVsbCBoLWZ1bGwganVzdGlmeS1jZW50ZXJcXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImJ0bi1pY29uIHctMVxcdTAwMkYyIFsmYW1wO19zdmddOnctZnVsbCB0ZXh0LXdoaXRlXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHZpZXdCb3g9XFxcIjAgMCAxOCAxOFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTEwLjc2NzEgOC4zNjA4OUgxMy4wNzM2QzEzLjQyMzQgOC4zNjA4OSAxMy42OTgxIDguMDcxNzUgMTMuNjk4MSA3LjcyMzA3QzEzLjY5ODEgNy4zNjU5IDEzLjQyMzQgNy4wODUyNiAxMy4wNzM2IDcuMDg1MjZIMTAuNzY3MUMxMC40MTc0IDcuMDg1MjYgMTAuMTQyNiA3LjM2NTkgMTAuMTQyNiA3LjcyMzA3QzEwLjE0MjYgOC4wNzE3NSAxMC40MTc0IDguMzYwODkgMTAuNzY3MSA4LjM2MDg5Wk0xNS44MTMyIDMuOTM5NTRDMTYuMzIxMSAzLjkzOTU0IDE2LjY1NDIgNC4xMTgxMyAxNi45ODcyIDQuNTA5MzJDMTcuMzIwMyA0LjkwMDUyIDE3LjM3ODYgNS40NjE4IDE3LjMwMzcgNS45NzEyTDE2LjUxMjYgMTEuNTVDMTYuMzYyNyAxMi42MjI0IDE1LjQ2MzQgMTMuNDEyNCAxNC40MDU5IDEzLjQxMjRINS4zMjEzNEM0LjIxMzg3IDEzLjQxMjQgMy4yOTc5MiAxMi41NDU4IDMuMjA2MzIgMTEuNDIzM0wyLjQ0MDI1IDIuMTUyOEwxLjE4MjkgMS45MzE2OUMwLjg0OTgyNCAxLjg3MjE2IDAuNjE2NjczIDEuNTQwNDkgMC42NzQ5NiAxLjIwMDMyQzAuNzMzMjQ4IDAuODUyNDk3IDEuMDU4IDAuNjIyMDMyIDEuMzk5NCAwLjY3MzkwOEwzLjM4NTM1IDAuOTc5MjFDMy42Njg0NiAxLjAzMTA5IDMuODc2NjMgMS4yNjgzNSAzLjkwMTYxIDEuNTU3NUw0LjA1OTgyIDMuNDYyNDVDNC4wODQ4IDMuNzM1NDQgNC4zMDEzIDMuOTM5NTQgNC41Njc3NiAzLjkzOTU0SDE1LjgxMzJaTTUuMTg3OTQgMTQuNzU2NUM0LjQ4ODQ5IDE0Ljc1NjUgMy45MjIyNiAxNS4zMzQ4IDMuOTIyMjYgMTYuMDQ5MkMzLjkyMjI2IDE2Ljc1NSA0LjQ4ODQ5IDE3LjMzMzMgNS4xODc5NCAxNy4zMzMzQzUuODc5MDcgMTcuMzMzMyA2LjQ0NTMgMTYuNzU1IDYuNDQ1MyAxNi4wNDkyQzYuNDQ1MyAxNS4zMzQ4IDUuODc5MDcgMTQuNzU2NSA1LjE4Nzk0IDE0Ljc1NjVaTTE0LjU1NTYgMTQuNzU2NUMxMy44NTYyIDE0Ljc1NjUgMTMuMjkgMTUuMzM0OCAxMy4yOSAxNi4wNDkyQzEzLjI5IDE2Ljc1NSAxMy44NTYyIDE3LjMzMzMgMTQuNTU1NiAxNy4zMzMzQzE1LjI0NjggMTcuMzMzMyAxNS44MTMgMTYuNzU1IDE1LjgxMyAxNi4wNDkyQzE1LjgxMyAxNS4zMzQ4IDE1LjI0NjggMTQuNzU2NSAxNC41NTU2IDE0Ljc1NjVaXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXCI7XG59XG5pZiAoKHR5cGUgPT09IFwiaGlzdG9yeVwiKSkge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2EgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBwYy10b3RhbC1idG4gcm91bmRlZC1mdWxsIHctZnVsbCBoLWZ1bGwganVzdGlmeS1jZW50ZXJcXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImJ0bi1pY29uIHctMVxcdTAwMkYyIFsmYW1wO19zdmddOnctZnVsbCB0ZXh0LXdoaXRlXFxcIlxcdTAwM0VcXHUwMDNDc3ZnICB2aWV3Qm94PVxcXCIwIDAgMjEgMjBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0zLjI1NjU3IDBIMTcuODAyQzE5LjMwODMgMCAyMC41MjkzIDEuNDM5NiAyMC41MjkzIDMuMjE1NDNWMTIuODYxN0MyMC41MjkzIDE0LjYzNzYgMTkuMzA4MyAxNi4wNzcyIDE3LjgwMiAxNi4wNzcySDEwLjk4MzhMOC44OTI5MyAxOS4zNTY5QzguNjM1NCAxOS43NjE3IDguMjMxMjQgMjAgNy44MDIwMiAyMEM3LjM3MjgxIDIwIDYuOTY4NjQgMTkuNzYxNyA2LjcxMTEyIDE5LjM1NjlMNC42MjAyMSAxNi4wNzcySDMuMjU2NTdDMS43NTAzNCAxNi4wNzcyIDAuNTI5Mjk3IDE0LjYzNzYgMC41MjkyOTcgMTIuODYxN1YzLjIxNTQzQzAuNTI5Mjk3IDEuNDM5NiAxLjc1MDM0IDAgMy4yNTY1NyAwWk0xNy44MDIyIDEzLjkzMzZDMTguMzA0MyAxMy45MzM2IDE4LjcxMTMgMTMuNDUzOCAxOC43MTEzIDEyLjg2MThWMy4yMTU1MUMxOC43MTEzIDIuNjIzNTYgMTguMzA0MyAyLjE0MzcgMTcuODAyMiAyLjE0MzdIMy4yNTY3NUMyLjc1NDY3IDIuMTQzNyAyLjM0NzY2IDIuNjIzNTYgMi4zNDc2NiAzLjIxNTUxVjEyLjg2MThDMi4zNDc2NiAxMy40NTM4IDIuNzU0NjcgMTMuOTMzNiAzLjI1Njc1IDEzLjkzMzZINS41Mjk0N0w3LjgwMjIgMTcuNTAyOEwxMC4wNzQ5IDEzLjkzMzZIMTcuODAyMlpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk01LjA3NTExIDYuNDMwODVIOS42MjA1NkMxMC4xMjI2IDYuNDMwODUgMTAuNTI5NyA1Ljk1MDk5IDEwLjUyOTcgNS4zNTkwNEMxMC41Mjk3IDQuNzY3MSAxMC4xMjI2IDQuMjg3MjMgOS42MjA1NiA0LjI4NzIzSDUuMDc1MTFDNC41NzMwMyA0LjI4NzIzIDQuMTY2MDIgNC43NjcxIDQuMTY2MDIgNS4zNTkwNEM0LjE2NjAyIDUuOTUwOTkgNC41NzMwMyA2LjQzMDg1IDUuMDc1MTEgNi40MzA4NVpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xNS4wNzUxIDguNTc0NDZINS4wNzUxMUM0LjU3MzAzIDguNTc0NDYgNC4xNjYwMiA5LjA1NDMzIDQuMTY2MDIgOS42NDYyN0M0LjE2NjAyIDEwLjIzODIgNC41NzMwMyAxMC43MTgxIDUuMDc1MTEgMTAuNzE4MUgxNS4wNzUxQzE1LjU3NzIgMTAuNzE4MSAxNS45ODQyIDEwLjIzODIgMTUuOTg0MiA5LjY0NjI3QzE1Ljk4NDIgOS4wNTQzMyAxNS41NzcyIDguNTc0NDYgMTUuMDc1MSA4LjU3NDQ2WlxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVwiO1xufVxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5wdWdfbWl4aW5zW1wibm90aWZpY2F0aW9uLWNhcmRcIl0gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24oaXRlbSl7XG52YXIgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJuYyByb3VuZGVkLXhsIHAtNiBiZy13aGl0ZSB4bDpwLTQgbWQ6cm91bmRlZC1sZyBtZDpwLTMgbWQ6cGItMVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmMtaWNvbiByb3VuZGVkLWZ1bGwgdy1bNTBweF0gaC1bNTBweF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBbJmFtcDtfc3ZnXTptYXgtdy1bNTAlXSBiZy1ncmFkaWVudC1zZWNvbmRhcnkgeGw6dy0xMCB4bDpoLTEwIG1kOnctNyBtZDpoLTcgbWQ6cC0xXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCIxNlxcXCIgaGVpZ2h0PVxcXCIxN1xcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE3XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTUuMTMzOSAxNS4wNTYxQzE1LjExNjQgMTMuNjkyMSAxNC4zMzA5IDEyLjQ1NzkgMTMuMTExMSAxMS44Nzc4VjguMDEyMkMxMy4xNTQxIDUuMzUyMjUgMTEuMjQyMSAzLjA3MjI5IDguNjQyMSAyLjY4MzA3QzcuMTc5MDIgMi40OTUzNiA1LjcwNzEzIDIuOTU2NDEgNC42MDQ1NSAzLjk0NzhDMy41MDE5NyA0LjkzOTE4IDIuODc2MTYgNi4zNjQyNyAyLjg4Nzg2IDcuODU2OThWMTEuNzUyMkMxLjQ2ODYxIDEyLjIzNTMgMC41MDkyNTEgMTMuNTc3NSAwLjUgMTUuMDkzMUMwLjUwNTQzOSAxNS4zMzMxIDAuNjA3NTcyIDE1LjU2MDQgMC43ODI3MDQgMTUuNzIyM0MwLjk1NzgzNyAxNS44ODQyIDEuMTkwNzUgMTUuOTY2NyAxLjQyNzQgMTUuOTUwNUgxNC4yNjQ5QzE0LjQ5NzMgMTUuOTQ4NSAxNC43MTk0IDE1Ljg1MzIgMTQuODgyNCAxNS42ODU1QzE1LjA0NTQgMTUuNTE3NyAxNS4xMzU4IDE1LjI5MTMgMTUuMTMzOSAxNS4wNTYxWk03LjI2OTMyIDQuMTk4MjNDOC4zNDM3IDMuOTc2MjYgOS40NTk3NSA0LjI1NDc4IDEwLjMwOSA0Ljk1NjgyQzExLjE1ODMgNS42NTg4NiAxMS42NTA5IDYuNzEwMDkgMTEuNjUwNyA3LjgxOTk3VjExLjUxNTZINC4zNDgzOVY3Ljk3NTE5QzQuMzA4ODMgNi4xNzI2NyA1LjUzMTEgNC41OTIxOSA3LjI2OTMyIDQuMTk4MjNaTTIuMDc3NTYgMTQuNDcyMkMyLjMzNjQzIDEzLjU5MzMgMy4xMzU4NSAxMi45OTE3IDQuMDQxODkgMTIuOTkzOUgxMS42NTA5QzEyLjU1NjIgMTIuOTk0MSAxMy4zNTQzIDEzLjU5NDggMTMuNjE1MyAxNC40NzIySDIuMDc3NTZaXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTguNzMgMS40NzgyNlYwLjczOTEzQzguNzMgMC4zMzA5MiA4LjQwMzA2IDAgNy45OTk3NiAwQzcuNTk2NDcgMCA3LjI2OTUzIDAuMzMwOTIgNy4yNjk1MyAwLjczOTEzVjEuNDc4MjZDNy4yNjk1MyAxLjg4NjQ3IDcuNTk2NDcgMi4yMTczOSA3Ljk5OTc2IDIuMjE3MzlDOC40MDMwNiAyLjIxNzM5IDguNzMgMS44ODY0NyA4LjczIDEuNDc4MjZaXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTguNzMgMTYuMjYwOVYxNS41MjE3QzguNzMgMTUuMTEzNSA4LjQwMzA2IDE0Ljc4MjYgNy45OTk3NiAxNC43ODI2QzcuNTk2NDcgMTQuNzgyNiA3LjI2OTUzIDE1LjExMzUgNy4yNjk1MyAxNS41MjE3VjE2LjI2MDlDNy4yNjk1MyAxNi42NjkxIDcuNTk2NDcgMTcgNy45OTk3NiAxN0M4LjQwMzA2IDE3IDguNzMgMTYuNjY5MSA4LjczIDE2LjI2MDlaXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTIuMjg3NDUgMi44MDEzNEMyLjQyNDU3IDIuOTQxMjYgMi42MTEyMSAzLjAxOTk3IDIuODA1OTIgMy4wMTk5N0MzLjAwMDYzIDMuMDE5OTcgMy4xODcyNyAyLjk0MTI2IDMuMzI0MzggMi44MDEzNEMzLjYwNzUxIDIuNTEzMDUgMy42MDc1MSAyLjA0NzQ1IDMuMzI0MzggMS43NTkxNkwyLjgwNTkyIDEuMjM0MzhDMi42Njg4IDEuMDk0NDUgMi40ODIxNiAxLjAxNTc1IDIuMjg3NDUgMS4wMTU3NUMyLjA5Mjc1IDEuMDE1NzUgMS45MDYxIDEuMDk0NDUgMS43Njg5OSAxLjIzNDM4QzEuNDg1ODYgMS41MjI2NyAxLjQ4NTg2IDEuOTg4MjcgMS43Njg5OSAyLjI3NjU1TDIuMjg3NDUgMi44MDEzNFpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMC41MzU3MDkgNi4wNTM0OEwxLjI2NTk0IDYuMjQ1NjVDMS42NDkyMyA2LjMzNjA0IDIuMDM0MzQgNi4xMDI3MiAyLjEzNjcyIDUuNzE4MDhDMi4yMzkxMSA1LjMzMzQ1IDIuMDIxOTMgNC45MzU4OCAxLjY0NTY2IDQuODE5MTNMMC45MTU0MyA0LjYyNjk1QzAuNTI2MzU5IDQuNTIzNjggMC4xMjgwMzYgNC43NTgzMSAwLjAyNDU0NTggNS4xNTE3NEMtMC4wNzc5OTA0IDUuNTQzMzEgMC4xNDk5NzcgNS45NDU0NyAwLjUzNTcwOSA2LjA1MzQ4WlxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xNC43NTM1IDYuMjk3NDJMMTUuNDgzNyA2LjEwNTI1QzE1Ljg2IDUuOTg4NDkgMTYuMDc3MiA1LjU5MDkzIDE1Ljk3NDggNS4yMDYyOUMxNS44NzI0IDQuODIxNjYgMTUuNDg3MyA0LjU4ODM0IDE1LjEwNCA0LjY3ODczTDE0LjM3MzggNC44NzA5QzEzLjk5NzUgNC45ODc2NiAxMy43ODAzIDUuMzg1MjMgMTMuODgyNyA1Ljc2OTg2QzEzLjk4NTEgNi4xNTQ0OSAxNC4zNzAyIDYuMzg3ODEgMTQuNzUzNSA2LjI5NzQyWlxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xMy4wMzA1IDIuODAxMzRMMTMuNTQ5IDIuMjc2NTVDMTMuODMyMSAxLjk4ODI3IDEzLjgzMjEgMS41MjI2NyAxMy41NDkgMS4yMzQzOEMxMy40MTE5IDEuMDk0NDUgMTMuMjI1MiAxLjAxNTc1IDEzLjAzMDUgMS4wMTU3NUMxMi44MzU4IDEuMDE1NzUgMTIuNjQ5MiAxLjA5NDQ1IDEyLjUxMjEgMS4yMzQzOEwxMS45OTM2IDEuNzU5MTZDMTEuNzEwNSAyLjA0NzQ1IDExLjcxMDUgMi41MTMwNSAxMS45OTM2IDIuODAxMzRDMTIuMTMwNyAyLjk0MTI2IDEyLjMxNzQgMy4wMTk5NyAxMi41MTIxIDMuMDE5OTdDMTIuNzA2OCAzLjAxOTk3IDEyLjg5MzQgMi45NDEyNiAxMy4wMzA1IDIuODAxMzRaXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2XCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbXCJuYy10ZXh0XCIsXCJmb250LXNlY29uZGFyeS1ib2xkIHRleHQtbGcgdGV4dC1bIzFEMjIyQ10gWyZhbXA7X2FdOnRleHQtWyMxRTYxRUJdIHhsOnRleHQtYmFzZSBtZDp0ZXh0LXNtIDJzbTp0ZXh0LXhzXCIsKGl0ZW0uaXNNb3JlICYmICdvdmVyZmxvdy1oaWRkZW4gdGV4dC1lbGxpcHNpcyB3aGl0ZXNwYWNlLW5vd3JhcCcpXSwgW2ZhbHNlLGZhbHNlLHRydWVdKSwgZmFsc2UsIHRydWUpKSArIFwiXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBpdGVtLnRleHQpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJuYy1kYXRlXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJuYy1kYXRlLWxhYmVsIGZvbnQtc2Vjb25kYXJ5LW1lZCB0ZXh0LXhzIHRleHQtWyM5NjlCQTVdIG1kOmhpZGRlblxcXCJcXHUwMDNF0JTQsNGC0LBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJuYy1kYXRlLXZhbHVlIGZvbnQtc2Vjb25kYXJ5LWJvbGQgdGV4dC1iYXNlIHRleHQtWyMxRDIyMkNdIHhsOnRleHQtc20gbWQ6dGV4dC1bMTBweF1cXFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGl0ZW0uZGF0ZXRpbWUpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2J1dHRvblwiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW1wibmMtYnRuXCIsXCJyb3VuZGVkLWZ1bGwgdy0xMSBoLTExIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWJsYWNrXFx1MDAyRjEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1kOnctNiBtZDpoLTZcIiwoaXRlbS5pc01vcmUgJiYgJ2hvdmVyOmJnLWJsYWNrLzUnKV0sIFtmYWxzZSxmYWxzZSx0cnVlXSksIGZhbHNlLCB0cnVlKStwdWcuYXR0cihcImRpc2FibGVkXCIsICFpdGVtLmlzTW9yZSwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ2RpdlwiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW1wiYnRuLWljb25cIixcIlsmYW1wO19zdmddOnctNCBtZDpbJmFtcDtfc3ZnXTp3LTNcIiwoaXRlbS5pc01vcmUgPyAnWyZfc3ZnXTp0ZXh0LWJsYWNrJyA6ICdbJl9zdmddOnRleHQtYmxhY2svMTAnKV0sIFtmYWxzZSxmYWxzZSx0cnVlXSksIGZhbHNlLCB0cnVlKSkgKyBcIlxcdTAwM0VcXHUwMDNDc3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxMFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMC45NDQzMjkgNS42MjMyMUwxMy40IDUuNjIzMjFMMTEuMTgwOSA4LjQ0MjAxQzExLjAyMzUgOC42NDEyOCAxMC45NTA5IDguODk2MDggMTAuOTc5MyA5LjE0OTg3QzExLjAwNzcgOS40MDM2NiAxMS4xMzQ2IDkuNjM1NDcgMTEuMzMxOSA5Ljc5Mzg4QzExLjczOTMgMTAuMTIwMiAxMi4zMjk3IDEwLjA1MTcgMTIuNjU0IDkuNjQwNDhMMTUuNzUxNCA1LjcxOTA4QzE2LjA4MjkgNS4yOTg3NiAxNi4wODI5IDQuNzAxMjQgMTUuNzUxNCA0LjI4MDkyTDEyLjY1NCAwLjM1OTUyMkMxMi4zMjk3IC0wLjA1MTcwNTIgMTEuNzM5MyAtMC4xMjAyMDkgMTEuMzMxOSAwLjIwNjExOEMxMS4xMzQ2IDAuMzY0NTI3IDExLjAwNzcgMC41OTYzMzcgMTAuOTc5MyAwLjg1MDEzQzEwLjk1MDkgMS4xMDM5MiAxMS4wMjM1IDEuMzU4NzIgMTEuMTgwOSAxLjU1Nzk5TDEyLjg4MDYgMy43MDU2NUwwLjk0NDMyOSAzLjcwNTY1QzAuNDIyNzkgMy43MDU2NSAwIDQuMTM0OTEgMCA0LjY2NDQzQzAgNS4xOTM5NSAwLjQyMjc5IDUuNjIzMjEgMC45NDQzMjkgNS42MjMyMVpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5wdWdfbWl4aW5zW1widGFic1wiXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbihsaXN0KXtcbnZhciBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcInRhYnMgZmxleCBpdGVtcy1jZW50ZXIgZm9udC1wcmltYXJ5LWJvbGQgdGV4dC1bMTRweF0gaC1bNTRweF0gb3ZlcmZsb3ctaGlkZGVuIGZsZXgtd3JhcCB0ZXh0LVsjOEE5OEIzXSBwLVsyNHB4XVxcXCJcXHUwMDNFXCI7XG4vLyBpdGVyYXRlIGxpc3RcbjsoZnVuY3Rpb24oKXtcbiAgdmFyICQkb2JqID0gbGlzdDtcbiAgaWYgKCdudW1iZXInID09IHR5cGVvZiAkJG9iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIHB1Z19pbmRleDYgPSAwLCAkJGwgPSAkJG9iai5sZW5ndGg7IHB1Z19pbmRleDYgPCAkJGw7IHB1Z19pbmRleDYrKykge1xuICAgICAgICB2YXIgaXRlbSA9ICQkb2JqW3B1Z19pbmRleDZdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2J1dHRvbiBjbGFzcz1cXFwidGFicy10YWIgYmxvY2sgdXBwZXJjYXNlIG1yLTQgbGFzdDptci0wXFxcIlxcdTAwM0VcXHUwMDNDZGl2XCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbXCJ0YWJzLXRhYi10ZXh0XCIsYCR7aXRlbS5hY3RpdmUgPyBcInRleHQtYmxhY2svOTBcIiA6IFwidGV4dC1bIzhBOThCM11cIn1gXSwgW2ZhbHNlLHRydWVdKSwgZmFsc2UsIHRydWUpKSArIFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGl0ZW0ubGFiZWwpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdlwiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW1widGFicy10YWItbGluZVwiLGBtdC0xIG14LWF1dG8gcm91bmRlZC1mdWxsIHctZnVsbCBoLTEgJHtpdGVtLmFjdGl2ZSAmJiBcImJnLWdyYWRpZW50LXByaW1hcnlcIn1gXSwgW2ZhbHNlLHRydWVdKSwgZmFsc2UsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVwiO1xuICAgICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciAkJGwgPSAwO1xuICAgIGZvciAodmFyIHB1Z19pbmRleDYgaW4gJCRvYmopIHtcbiAgICAgICQkbCsrO1xuICAgICAgdmFyIGl0ZW0gPSAkJG9ialtwdWdfaW5kZXg2XTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NidXR0b24gY2xhc3M9XFxcInRhYnMtdGFiIGJsb2NrIHVwcGVyY2FzZSBtci00IGxhc3Q6bXItMFxcXCJcXHUwMDNFXFx1MDAzQ2RpdlwiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW1widGFicy10YWItdGV4dFwiLGAke2l0ZW0uYWN0aXZlID8gXCJ0ZXh0LWJsYWNrLzkwXCIgOiBcInRleHQtWyM4QTk4QjNdXCJ9YF0sIFtmYWxzZSx0cnVlXSksIGZhbHNlLCB0cnVlKSkgKyBcIlxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBpdGVtLmxhYmVsKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXZcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFtcInRhYnMtdGFiLWxpbmVcIixgbXQtMSBteC1hdXRvIHJvdW5kZWQtZnVsbCB3LWZ1bGwgaC0xICR7aXRlbS5hY3RpdmUgJiYgXCJiZy1ncmFkaWVudC1wcmltYXJ5XCJ9YF0sIFtmYWxzZSx0cnVlXSksIGZhbHNlLCB0cnVlKSkgKyBcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmJ1dHRvblxcdTAwM0VcIjtcbiAgICB9XG4gIH1cbn0pLmNhbGwodGhpcyk7XG5cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5wdWdfbWl4aW5zW1wiY2hhdC1tZXNzYWdlXCJdID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKGF2YXRhciwgdHlwZSwgdGV4dCwgc3RhdHVzKXtcbnZhciBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXZcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFtcImNoYXQtbWVzc2FnZVwiLGBmbGV4IGl0ZW1zLWNlbnRlciBtYXgtdy1bMzY0cHhdICR7YXZhdGFyID8gXCJjaGF0LW1lc3NhZ2UtbGFzdFwiIDogXCJjaGF0LW1lc3NhZ2UtZmlyc3RcIn0gJHt0eXBlID09PSBcIm91dFwiICYmIFwiY2hhdC1tZXNzYWdlLW91dFwifWBdLCBbZmFsc2UsdHJ1ZV0pLCBmYWxzZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXCI7XG5pZiAoKGF2YXRhcikpIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImNoYXQtbWVzc2FnZS11c2VyIGZsZXggc2VsZi1lbmRcXFwiXFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJmbS1tZXNzYWdlLWF2YXRhci13cmFwcGVyIGZsZXgtc2hyaW5rLTAgb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBwLVs2cHhdXFxcIiBocmVmPVxcXCIjXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmbS1tZXNzYWdlLWF2YXRhciBmbGV4LXNocmluay0wIHctWzQwcHhdIGgtWzQwcHhdIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWZ1bGxcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKGF2YXRhciwgJ3Nwcy1hdmF0YXItcGljIHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyJywgJ3VzZXInKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbn1cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImNoYXQtbWVzc2FnZS1jb250ZW50IGJsb2NrIGl0ZW1zLWVuZCB0ZXh0LWJsYWNrIHAtWzhweF0gdGV4dC1bMTRweF0gYnJlYWstd29yZHMgd2hpdGVzcGFjZS1wcmUtd3JhcCByb3VuZGVkLVsxMnB4XSByZWxhdGl2ZVxcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gdGV4dCkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaGF0LW1lc3NhZ2UtaW5mbyBmbGV4IGl0ZW1zLWNlbnRlciBmbG9hdC1yaWdodCBib3R0b20tMCBtbC1bNHB4XSBtci1bLTRweF0gbXQtWzZweF1cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbXCJjaGF0LW1lc3NhZ2UtdGltZVwiLGAke3R5cGUgPT09IFwib3V0XCIgPyBcInRleHQtd2hpdGVcIiA6IFwidGV4dC1bIzhBOTU5Rl1cIn0gdGV4dC1bMTJweF0gbXItWzRweF1gXSwgW2ZhbHNlLHRydWVdKSwgZmFsc2UsIHRydWUpKSArIFwiXFx1MDAzRTIyOjAzXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVwiO1xuaWYgKCh0eXBlID09PSBcIm91dFwiKSkge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ3N2ZyB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHdpZHRoPVxcXCIxN1xcXCIgaGVpZ2h0PVxcXCI4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTcgOFxcXCIgZmlsbD1cXFwibm9uZVxcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xMy4wNjE2IDAuMjg0NDY3QzEzLjE5MzcgMC40NDAyOTUgMTMuMjU5IDAuNjQyNjkyIDEzLjI0MzIgMC44NDcxMjZDMTMuMjI3NCAxLjA1MTU2IDEzLjEzMTggMS4yNDEyOSAxMi45Nzc0IDEuMzc0NTZMNS42MzE4MSA3LjczNzI5QzUuMjUyOTYgOC4wNjMyNSA0LjY4NTg3IDguMDI1NTUgNC4zNTI2NSA3LjY1MjI1TDEuMTQzMjcgNC4wODgxOUMwLjk1ODU1NSAzLjg4MzggMC44OTU5MDUgMy41OTU0NiAwLjk3ODkyIDMuMzMxODFDMS4wNjE5MyAzLjA2ODE1IDEuMjc4IDIuODY5MjIgMS41NDU3MyAyLjgwOTk1QzEuODEzNDYgMi43NTA2OSAyLjA5MjE4IDIuODQwMDkgMi4yNzY4OSAzLjA0NDQ5TDUuMDg3OTcgNi4xMzY5NEwxMS45ODE2IDAuMTc2MjMxQzEyLjEzODkgMC4wNDU2NDU4IDEyLjM0MTIgLTAuMDE2MzQxNyAxMi41NDM5IDAuMDAzOTY4NTFDMTIuNzQ2NiAwLjAyNDI3ODcgMTIuOTMyOSAwLjEyNTIxNCAxMy4wNjE2IDAuMjg0NDY3WlxcXCIgZmlsbD1cXFwiI0U3RTdFN1xcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTYuNzU5OCAwLjI4NDQ2N0MxNi44OTE5IDAuNDQwMjk1IDE2Ljk1NzIgMC42NDI2OTIgMTYuOTQxNCAwLjg0NzEyNkMxNi45MjU2IDEuMDUxNTYgMTYuODI5OSAxLjI0MTI5IDE2LjY3NTUgMS4zNzQ1Nkw5LjMyOTk2IDcuNzM3MjlDOC45NTExMSA4LjA2MzI1IDguMDczOTkgOC4xMTA2IDcuNzQwNzggNy43MzczTDYuNDA5OTQgNi4xNjM3N0M2LjIyNTIzIDUuOTU5MzggNi4zMjY5NCA1LjY1NDMxIDYuNDA5OTUgNS4zOTA2NUM2LjQ5Mjk3IDUuMTI3IDYuNTI1MjEgNS4wNjMzNiA2Ljc5Mjk0IDUuMDA0MUM3LjA2MDY3IDQuOTQ0ODMgNy4zNzQxOCA0Ljc5OTcgNy41NTg5IDUuMDA0MUw4Ljc4NjEzIDYuMTM2OTRMMTUuNjc5OCAwLjE3NjIzMUMxNS44MzcxIDAuMDQ1NjQ1OCAxNi4wMzk0IC0wLjAxNjM0MTcgMTYuMjQyMSAwLjAwMzk2ODUxQzE2LjQ0NDcgMC4wMjQyNzg3IDE2LjYzMSAwLjEyNTIxNCAxNi43NTk4IDAuMjg0NDY3WlxcXCIgZmlsbD1cXFwiI0U3RTdFN1xcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVwiO1xufVxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG5pZiAoKHR5cGUgPT09IFwib3V0XCIpKSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDc3ZnIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCIgd2lkdGg9XFxcIjE1XFxcIiBoZWlnaHQ9XFxcIjE5XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTUgMTlcXFwiIGZpbGw9XFxcIm5vbmVcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk04LjQ0Mjg3IDBDOC40NDI4NyAxNSAxMi4xMDk1IDE3LjMzMzMgMTQuNDQyOSAxOUM2LjQ0Mjg3IDE5IDIuOTQyODcgMTQgMC45NDI4NzEgMTEuNUwzLjQ0Mjg3IDdDMy40NDI4NyA2LjgzMzMzIDYuNDQyODcgMi40IDguNDQyODcgMFpcXFwiIGZpbGw9XFxcIiMxRjYyRUNcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcIjtcbn1cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufTtcbnB1Z19taXhpbnNbXCJjaGF0LWlucHV0XCJdID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKGNsYXNzZXMsIHBsYWNlaG9sZGVyKXtcbnZhciBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXZcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFtcImNoYXQtaW5wdXRcIixgZmxleCBpdGVtcy1jZW50ZXIgYmctd2hpdGUgZm9udC1zZWNvbmRhcnktbWVkIHAtWzE2cHhdIGJvcmRlciBib3JkZXItWyNFNEU5RjRdIHJvdW5kZWQtWzEycHhdICR7Y2xhc3Nlc31gXSwgW2ZhbHNlLHRydWVdKSwgZmFsc2UsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NpbnB1dFwiICsgKFwiIGNsYXNzPVxcXCJjaGF0LWlucHV0LWlucHV0IHRleHQtYmxhY2sgdy1mdWxsIGgtZnVsbCBvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXI6dGV4dC1bI0JBQzlFNV0gdGV4dC1bMTRweF1cXFwiXCIrcHVnLmF0dHIoXCJwbGFjZWhvbGRlclwiLCBwbGFjZWhvbGRlciwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ2J1dHRvbiBjbGFzcz1cXFwiY2hhdC1pbnB1dC1idG4gZmxleC1zaHJpbmstMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LVsyNnB4XSBoLVsyMHB4XSBtci1bMjRweF1cXFwiXFx1MDAzRVxcdTAwM0NzdmcgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIiB3aWR0aD1cXFwiMjZcXFwiIGhlaWdodD1cXFwiMjBcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNiAyMFxcXCIgZmlsbD1cXFwibm9uZVxcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggb3BhY2l0eT1cXFwiMC40NVxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0yNC43NTE0IDMuNjI3MjJMMjAuNTUwMyAzLjUzOTc0TDE4LjQ5NTMgMC41NjI4NjdDMTguMzc3NCAwLjM5MDgwOSAxOC4yMTcyIDAuMjQ5MzQ5IDE4LjAyODkgMC4xNTExNTdDMTcuODQwNiAwLjA1Mjk2NDUgMTcuNjI5OSAwLjAwMTA2NTgxIDE3LjQxNTcgMEg4LjYzNjNDOC40MjIwOCAwLjAwMTA2NTgxIDguMjExNDYgMC4wNTI5NjQ1IDguMDIzMTMgMC4xNTExNTdDNy44MzQ4IDAuMjQ5MzQ5IDcuNjc0NiAwLjM5MDgwOSA3LjU1Njc4IDAuNTYyODY3TDUuNTAxNzcgMy41Mzk3NEwxLjMwMDY1IDMuNjI3MjJDMC45NTU2OTcgMy42MjcyMiAwLjYyNDg1IDMuNzU5MDIgMC4zODA5MzEgMy45OTM1OUMwLjEzNzAxMiA0LjIyODE1IDAgNC41NDYyOCAwIDQuODc4MDFWMTguNzQ5MkMwIDE5LjA4MDkgMC4xMzcwMTIgMTkuMzk5MSAwLjM4MDkzMSAxOS42MzM2QzAuNjI0ODUgMTkuODY4MiAwLjk1NTY5NyAyMCAxLjMwMDY1IDIwSDEzLjAwNjVDMTMuMzUxNSAyMCAxMy42ODIzIDE5Ljg2ODIgMTMuOTI2MiAxOS42MzM2QzE0LjE3MDEgMTkuMzk5MSAxNC4zMDcyIDE5LjA4MDkgMTQuMzA3MiAxOC43NDkyVjE2LjA4NUMxNS41MzMyIDE1Ljc4MDYgMTYuNjAxOCAxNS4wNTY2IDE3LjMxMjUgMTQuMDQ4OEMxOC4wMjMxIDEzLjA0MDkgMTguMzI3MiAxMS44MTg0IDE4LjE2NzYgMTAuNjEwNEMxOC4wMDgxIDkuNDAyMzMgMTcuMzk1OSA4LjI5MTc0IDE2LjQ0NTcgNy40ODY3NUMxNS40OTU2IDYuNjgxNzcgMTQuMjcyOCA2LjIzNzY1IDEzLjAwNjUgNi4yMzc2NUMxMS43NDAyIDYuMjM3NjUgMTAuNTE3NCA2LjY4MTc3IDkuNTY3MjkgNy40ODY3NUM4LjYxNzE2IDguMjkxNzQgOC4wMDQ5NCA5LjQwMjMzIDcuODQ1MzggMTAuNjEwNEM3LjY4NTgzIDExLjgxODQgNy45ODk4NyAxMy4wNDA5IDguNzAwNTYgMTQuMDQ4OEM5LjQxMTI2IDE1LjA1NjYgMTAuNDc5OCAxNS43ODA2IDExLjcwNTkgMTYuMDg1VjE3LjQ5ODRIMi42MDEzVjYuMDc4NzhMNi4yMDQwOSA2LjAwMzc0QzYuNDEzODkgNS45OTg2MiA2LjYxOTI4IDUuOTQ0NzkgNi44MDI3NCA1Ljg0Njc4QzYuOTg2MTkgNS43NDg3NyA3LjE0MjI2IDUuNjA5NDcgNy4yNTc2MiA1LjQ0MDg3TDkuMzEyNjcgMi40ODkwNEgxNi43MDA0TDE4Ljc0MjQgNS40NDA4N0MxOC44NTc3IDUuNjA5NDcgMTkuMDEzOCA1Ljc0ODc3IDE5LjE5NzMgNS44NDY3OEMxOS4zODA3IDUuOTQ0NzkgMTkuNTg2MSA1Ljk5ODYyIDE5Ljc5NTkgNi4wMDM3NEwyMy4zOTg3IDYuMDc4NzhWMTcuNDk4NEgxOC4xOTYxQzE3Ljg1MTEgMTcuNDk4NCAxNy41MjAzIDE3LjYzMDIgMTcuMjc2NCAxNy44NjQ4QzE3LjAzMjUgMTguMDk5NCAxNi44OTU0IDE4LjQxNzUgMTYuODk1NCAxOC43NDkyQzE2Ljg5NTQgMTkuMDgwOSAxNy4wMzI1IDE5LjM5OTEgMTcuMjc2NCAxOS42MzM2QzE3LjUyMDMgMTkuODY4MiAxNy44NTExIDIwIDE4LjE5NjEgMjBIMjQuNjk5M0MyNS4wNDQzIDIwIDI1LjM3NTEgMTkuODY4MiAyNS42MTkxIDE5LjYzMzZDMjUuODYzIDE5LjM5OTEgMjYgMTkuMDgwOSAyNiAxOC43NDkyVjQuODY1NTZDMjUuOTk2OSA0LjU0NDQ5IDI1Ljg2NTYgNC4yMzY4NCAyNS42MzMyIDQuMDA2MzRDMjUuNDAwNyAzLjc3NTgzIDI1LjA4NSAzLjY0MDA1IDI0Ljc1MTQgMy42MjcyMlpNMTAuNDQ0MiAxMS4yNDQ1QzEwLjQ0NDIgMTAuNzQ5OCAxMC41OTY4IDEwLjI2NjEgMTAuODgyNiA5Ljg1NDcyQzExLjE2ODUgOS40NDMzNCAxMS41NzQ3IDkuMTIyNjkgMTIuMDUgOC45MzMzNUMxMi41MjU0IDguNzQ0MDIgMTMuMDQ4NCA4LjY5NDUzIDEzLjU1MyA4Ljc5MTA1QzE0LjA1NzYgOC44ODc1OCAxNC41MjExIDkuMTI1ODMgMTQuODg0OSA5LjQ3NTY5QzE1LjI0ODcgOS44MjU1MyAxNS40OTY1IDEwLjI3MTIgMTUuNTk2OSAxMC43NTY1QzE1LjY5NzIgMTEuMjQxNyAxNS42NDU3IDExLjc0NDcgMTUuNDQ4OCAxMi4yMDE4QzE1LjI1MTkgMTIuNjU4OSAxNC45MTg1IDEzLjA0OTcgMTQuNDkwNyAxMy4zMjQ1QzE0LjA2MyAxMy41OTk0IDEzLjU2IDEzLjc0NjEgMTMuMDQ1NSAxMy43NDYxQzEyLjM1NTYgMTMuNzQ2MSAxMS42OTQgMTMuNDgyNSAxMS4yMDYxIDEzLjAxMzRDMTAuNzE4MyAxMi41NDQyIDEwLjQ0NDIgMTEuOTA4IDEwLjQ0NDIgMTEuMjQ0NVpcXFwiIGZpbGw9XFxcIiNBRkI4Q0NcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmJ1dHRvblxcdTAwM0VcXHUwMDNDYnV0dG9uIGNsYXNzPVxcXCJjaGF0LWlucHV0LWJ0biBmbGV4LXNocmluay0wIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctW3ctMjJweF0gaC1bMjBweF1cXFwiXFx1MDAzRVxcdTAwM0NzdmcgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIiB3aWR0aD1cXFwiMjJcXFwiIGhlaWdodD1cXFwiMjBcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMiAyMFxcXCIgZmlsbD1cXFwibm9uZVxcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0yMS4yOTU0IDguODgyNjNMMS44ODc3NSAwLjExNTczNUMxLjY2NjIxIDAuMDE2NTQ0NiAxLjQyMDI2IC0wLjAxOTk4OCAxLjE3ODIgMC4wMTAzOTkyQzAuOTM2MTQ3IDAuMDQwNzg2NCAwLjcwNzg5NiAwLjEzNjk2NSAwLjUxOTgzMiAwLjI4NzU3NUMwLjMzMTc2OSAwLjQzODE4NiAwLjE5MTUyNCAwLjYzNzE4MSAwLjExNTM0OSAwLjg2MTY0OUMwLjAzOTE3NDMgMS4wODYxMiAwLjAzMDIwMzggMS4zMjY4MiAwLjA4OTM2ODEgMS41NTYwNEwxLjM4MzIxIDYuNTY1N0MxLjQ2NzI4IDYuODg3ODkgMS42ODAxMiA3LjE2NDU3IDEuOTc0OTMgNy4zMzQ4NUMyLjI2OTc0IDcuNTA1MTMgMi42MjIzMyA3LjU1NTA1IDIuOTU1MTggNy40NzM2N0MzLjI4ODAzIDcuMzkyMjkgMy41NzM4NiA3LjE4NjM0IDMuNzQ5NzcgNi45MDA5N0MzLjkyNTY5IDYuNjE1NiAzLjk3NzI1IDYuMjc0MjIgMy44OTMxOCA1Ljk1MjAzTDMuMjU5MjEgMy40NDcyTDE3LjY5ODUgOS45NzIyM0wzLjM3NTY5IDE2LjQ0NzNMNC45MTUzNyAxMS4yMjQ2SDkuMTA3NEM5LjQ1MDU1IDExLjIyNDYgOS43Nzk2MiAxMS4wOTI3IDEwLjAyMjMgMTAuODU3OUMxMC4yNjQ5IDEwLjYyMyAxMC40MDEyIDEwLjMwNDQgMTAuNDAxMiA5Ljk3MjIzQzEwLjQwMTIgOS42NDAwNyAxMC4yNjQ5IDkuMzIxNiAxMC4wMjIzIDkuMDg2NzNDOS43Nzk2MiA4Ljg1MTg2IDkuNDUwNTUgOC43MTk4MSA5LjEwNzQgOC43MTk4MUgzLjkzMjA0QzMuNjQxNjQgOC43MDk0MiAzLjM1NjA0IDguNzkzOTggMy4xMjEzMyA4Ljk1OTg0QzIuODg2NjIgOS4xMjU2OSAyLjcxNjQ2IDkuMzYzMTUgMi42MzgyIDkuNjM0MDVMMC4wNTA1MTUgMTguNDAwOUMtMC4wMTg0MiAxOC42MzI3IC0wLjAxNjc2MzUgMTguODc4OSAwLjA1NTI1MzIgMTkuMTA5N0MwLjEyNzI3IDE5LjM0MDYgMC4yNjY1ODYgMTkuNTQ2MiAwLjQ1NjQ5OSAxOS43MDIzQzAuNjQ2NDExIDE5Ljg1ODMgMC44Nzg4MzkgMTkuOTU4MSAxLjEyNTg1IDE5Ljk4OTRDMS4zNzI4NSAyMC4wMjA3IDEuNjIzOTUgMTkuOTgyMyAxLjg0ODk3IDE5Ljg3ODlMMjEuMjU2NiAxMS4xMTJDMjEuNDc4OSAxMS4wMTA4IDIxLjY2NjggMTAuODUwNSAyMS43OTg1IDEwLjY0OThDMjEuOTMwMSAxMC40NDkxIDIyIDEwLjIxNjIgMjIgOS45Nzg0OUMyMiA5Ljc0MDc1IDIxLjkzMDEgOS41MDc5IDIxLjc5ODUgOS4zMDcxOUMyMS42NjY4IDkuMTA2NDggMjEuNDc4OSA4Ljk0NjMyIDIxLjI1NjYgOC44NDUxOEwyMS4yOTU0IDguODgyNjNaXFxcIiBmaWxsPVxcXCJ1cmwoI3BhaW50MF9saW5lYXJfOTRfNTA0MDkpXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ2RlZnNcXHUwMDNFXFxuXFx1MDAzQ2xpbmVhckdyYWRpZW50IGlkPVxcXCJwYWludDBfbGluZWFyXzk0XzUwNDA5XFxcIiB4MT1cXFwiLTguMTk1NjRlLTA4XFxcIiB5MT1cXFwiMTBcXFwiIHgyPVxcXCIyMlxcXCIgeTI9XFxcIjEwXFxcIiBncmFkaWVudFVuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCJcXHUwMDNFXFxuXFx1MDAzQ3N0b3Agc3RvcC1jb2xvcj1cXFwiIzhDRDIzQ1xcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NzdG9wIG9mZnNldD1cXFwiMVxcXCIgc3RvcC1jb2xvcj1cXFwiIzQxN0EwMFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGbGluZWFyR3JhZGllbnRcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkZWZzXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufTtcblxuXG5cblxuXG5cblxuXG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDIURPQ1RZUEUgaHRtbFxcdTAwM0VcXHUwMDNDaHRtbCBsYW5nPVxcXCJydVxcXCJcXHUwMDNFXFx1MDAzQ2hlYWRcXHUwMDNFXFx1MDAzQ21ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiXFx1MDAzRVxcdTAwM0NtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MVxcXCJcXHUwMDNFXFx1MDAzQ3RpdGxlXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IHBhZ2VUaXRsZSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCIgLSAxcGFpZFxcdTAwM0NcXHUwMDJGdGl0bGVcXHUwMDNFXFx1MDAzQ1xcdTAwMkZoZWFkXFx1MDAzRVxcdTAwM0Nib2R5XCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbYm9keU5vU2Nyb2xsICYmICdvdmVyZmxvdy15LWhpZGRlbiddLCBbdHJ1ZV0pLCBmYWxzZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ2RpdiBpZD1cXFwicm9vdFxcXCJcXHUwMDNFXFx1MDAzQ2RpdlwiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW1wibGF5b3V0XCIscGFnZU1vZGlmaWNhdG9yXSwgW2ZhbHNlLHRydWVdKSwgZmFsc2UsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImxheW91dC1ncmlkXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJsYXlvdXQtc2lkZWJhciBtZW51XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjbVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY20taW5uZXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNtLWggcHgtMTAgcHQtOCAzeGw6cHgtNSAzeGw6cHQtNVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY20taC1pbm5lciBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImxvZ28gdy1bMTgwcHhdIDN4bDp3LVsxNTBweF0geGw6dy1bMTIwcHhdIGxnOnctYXV0byBsZzpmbGV4LXNocmluay0xIGxnOmJhc2lzLVsxMzBweF1cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdkb3RzLTEuc3ZnJywgJ2xvZ29fX2RvdHMgbGc6aC1bMTAwJV0geGw6dy0xLzInLCAnMXBhaWQucnUnKTtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnbG9nby5zdmcnLCAnbG9nby1waWMnLCAnMXBhaWQucnUnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNtLWIgcHktMTAgM3hsOnB5LTVcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNtLWNvbnRhaW5lclxcXCJcXHUwMDNFXCIgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL190b3RhbC1zaXRlLWNhcmQucHVnXCIpLmNhbGwodGhpcywgbG9jYWxzKSkgPyBcIlwiIDogcHVnX2ludGVycCkgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImNtLW5hdiBtdC0xMCAzeGw6bXQtOCB4bDptdC02XFxcIlxcdTAwM0VcIjtcbnZhciBuYXZMaW5rcyA9IFtcbiAge1xuICAgIGxhYmVsOiAn0J/RgNC+0LTQsNGC0Ywg0YLQvtCy0LDRgCcsXG4gICAgbGluazogJyMnLFxuICAgIGljb246ICc8c3ZnIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIHZpZXdCb3g9XCIwIDAgMzAgMzBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjIuMDE2MSAyNC45OTk5QzIzLjU2MDUgMjQuOTk5OSAyNC44MTI1IDIzLjcyOCAyNC44MTI1IDIyLjE1OUMyNC44MTI1IDIwLjU5IDIzLjU2MDUgMTkuMzE4MSAyMi4wMTYxIDE5LjMxODFDMjAuNDcxNyAxOS4zMTgxIDE5LjIxOTcgMjAuNTkgMTkuMjE5NyAyMi4xNTlDMTkuMjE5NyAyMy43MjggMjAuNDcxNyAyNC45OTk5IDIyLjAxNjEgMjQuOTk5OVpNMjIuMDE2IDIyLjcyNzJDMjEuNzA5NiAyMi43MjExIDIxLjQ2MjcgMjIuNDcwMiAyMS40NTY4IDIyLjE1OUMyMS40NTY4IDIxLjg0NTIgMjEuNzA3MSAyMS41OTA4IDIyLjAxNiAyMS41OTA4QzIyLjMyNDkgMjEuNTkwOCAyMi41NzUzIDIxLjg0NTIgMjIuNTc1MyAyMi4xNTlDMjIuNTc1MyAyMi40NzI4IDIyLjMyNDkgMjIuNzI3MiAyMi4wMTYgMjIuNzI3MlpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjxwYXRoIGQ9XCJNMjQuODExMSAxNi4zNjM2QzI1LjQyODkgMTYuMzYzNiAyNS45Mjk3IDE2Ljg3MjQgMjUuOTI5NyAxNy41QzI1LjkyOTcgMTguMTI3NiAyNS40Mjg5IDE4LjYzNjQgMjQuODExMSAxOC42MzY0SDE0LjUwOTJMMTMuMDMyNyAyNC4xNTkxQzEyLjg2OSAyNC43NjQ3IDEyLjI1MzEgMjUuMTIwOSAxMS42NTY5IDI0Ljk1NDVDMTEuMDYwOCAyNC43ODgyIDEwLjcxMDIgMjQuMTYyNSAxMC44NzM5IDIzLjU1NjhMMTIuMTkzOCAxOC42MzY0SDEwLjQ0ODlDOS44MzI5NiAxOC42MzgyIDkuMjk2MjcgMTguMjEwNCA5LjE1MTM1IDE3LjYwMjNMNi42MDEwNSA3LjI3MjczSDQuMTE3ODVDMy41MDAwOSA3LjI3MjczIDIuOTk5MyA2Ljc2Mzk2IDIuOTk5MyA2LjEzNjM2QzIuOTk5MyA1LjUwODc3IDMuNTAwMDkgNSA0LjExNzg1IDVINy4zMDU3NEM3LjkyMDI2IDUuMDAyMzEgOC40NTQ3NSA1LjQyODI5IDguNjAzMjYgNi4wMzQwOUwxMS4xNDI0IDE2LjM2MzZIMjQuODExMVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yNC4wNzM1IDE1LjIyNzNDMjQuNzA5NyAxNS4yMzA3IDI1LjI2MDggMTQuNzc5OSAyNS4zOTM0IDE0LjE0NzdMMjYuOTcwNSA2LjY0NzczQzI3LjA1NDggNi4yNDU5NiAyNi45NTYyIDUuODI3MDEgMjYuNzAyMyA1LjUwNzMyQzI2LjQ0ODQgNS4xODc2MyAyNi4wNjYyIDUuMDAxMjYgMjUuNjYxOCA1SDExLjY0NjNDMTEuMjQ1OSA1LjAwODAxIDEwLjg2OTkgNS4xOTcyNCAxMC42MjExIDUuNTE2MDJDMTAuMzcyMiA1LjgzNDc5IDEwLjI3NjUgNi4yNDk4MSAxMC4zNiA2LjY0NzczTDExLjkzNzEgMTQuMTQ3N0MxMi4wNjk3IDE0Ljc3OTkgMTIuNjIwOCAxNS4yMzA3IDEzLjI1NyAxNS4yMjczSDI0LjA3MzVaTTEzLjk2MTggMTIuOTU0NUwxMi43NjQ5IDcuMjcyNjhIMjQuNTU0NUwyMy4zNTc3IDEyLjk1NDVIMTMuOTYxOFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjwvc3ZnPidcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAn0JfQsNC60LvQsNC00LrQuCcsXG4gICAgbGluazogJyMnLFxuICAgIGljb246ICc8c3ZnIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIHZpZXdCb3g9XCIwIDAgMzAgMzBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjAuMTUyNSAxNi44NDc1TDE1LjE1MjUgMjEuODQ3NUwxMC4xNTI1IDE2Ljg0NzVMNy4zMTI1IDE0LjAwNzVDNS45MzE3OCAxMi42MjY4IDUuOTMxNzggMTAuMzg4MiA3LjMxMjUgOS4wMDc1QzguNjkzMjEgNy42MjY3OSAxMC45MzE4IDcuNjI2NzkgMTIuMzEyNSA5LjAwNzVMMTUuMTUyNSAxMS44Njc1TDE3Ljk5MjUgOS4wMjc1QzE5LjM3MzIgNy42NDY3OSAyMS42MTE4IDcuNjQ2NzkgMjIuOTkyNSA5LjAyNzVDMjQuMzczMiAxMC40MDgyIDI0LjM3MzIgMTIuNjQ2OCAyMi45OTI1IDE0LjAyNzVMMjAuMTUyNSAxNi44NDc1Wk0xMy43NTI1IDcuNjE3NUMxMS41OTU4IDUuNDYwODMgOC4wOTkxNyA1LjQ2MDgzIDUuOTQyNSA3LjYxNzVDMy43ODU4MiA5Ljc3NDE4IDMuNzg1ODIgMTMuMjcwOCA1Ljk0MjUgMTUuNDI3NUw3LjM2MjUgMTYuODQ3NUwxNS4xNTI1IDI0LjY1NzVMMjIuOTYyNSAxNi44NDc1TDI0LjM4MjUgMTUuNDI3NUMyNi41MzkyIDEzLjI3MDggMjYuNTM5MiA5Ljc3NDE4IDI0LjM4MjUgNy42MTc1QzIyLjIyNTggNS40NjA4MyAxOC43MjkyIDUuNDYwODMgMTYuNTcyNSA3LjYxNzVMMTUuMTUyNSA5LjAzNzVMMTMuNzUyNSA3LjYxNzVaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48L3N2Zz4nXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ9CY0YHRgtC+0YDQuNGPINC/0YDQvtGB0LzQvtGC0YDQsCcsXG4gICAgbGluazogJyMnLFxuICAgIGljb246ICc8c3ZnIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIHZpZXdCb3g9XCIwIDAgMzAgMzBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjMgMTZDMjQuNjU2OSAxNiAyNiAxNC42NTY5IDI2IDEzVjlDMjYgNy4zNDMxNSAyNC42NTY5IDYgMjMgNkgxOUMxNy4zNDMxIDYgMTYgNy4zNDMxNSAxNiA5VjEzQzE2IDE0LjY1NjkgMTcuMzQzMSAxNiAxOSAxNkgyM1pNMjQgMTNDMjQgMTMuNTUyMyAyMy41NTIzIDE0IDIzIDE0SDE5QzE4LjQ0NzcgMTQgMTggMTMuNTUyMyAxOCAxM1Y5QzE4IDguNDQ3NzIgMTguNDQ3NyA4IDE5IDhIMjNDMjMuNTUyMyA4IDI0IDguNDQ3NzIgMjQgOVYxM1pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMSAxNkMxMi42NTY5IDE2IDE0IDE0LjY1NjkgMTQgMTNWOUMxNCA3LjM0MzE1IDEyLjY1NjkgNiAxMSA2SDdDNS4zNDMxNSA2IDQgNy4zNDMxNSA0IDlWMTNDNCAxNC42NTY5IDUuMzQzMTUgMTYgNyAxNkgxMVpNMTIgMTNDMTIgMTMuNTUyMyAxMS41NTIzIDE0IDExIDE0SDdDNi40NDc3MiAxNCA2IDEzLjU1MjMgNiAxM1Y5QzYgOC40NDc3MiA2LjQ0NzcyIDggNyA4SDExQzExLjU1MjMgOCAxMiA4LjQ0NzcyIDEyIDlWMTNaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjUgMTlDMjUgMTguNDQ3NyAyNC41NTIzIDE4IDI0IDE4SDE4QzE3LjQ0NzcgMTggMTcgMTguNDQ3NyAxNyAxOUMxNyAxOS41NTIzIDE3LjQ0NzcgMjAgMTggMjBIMjRDMjQuNTUyMyAyMCAyNSAxOS41NTIzIDI1IDE5WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTI1IDIzQzI1IDIyLjQ0NzcgMjQuNTUyMyAyMiAyNCAyMkgyMEMxOS40NDc3IDIyIDE5IDIyLjQ0NzcgMTkgMjNDMTkgMjMuNTUyMyAxOS40NDc3IDI0IDIwIDI0SDI0QzI0LjU1MjMgMjQgMjUgMjMuNTUyMyAyNSAyM1pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMyAxOUMxMyAxOC40NDc3IDEyLjU1MjMgMTggMTIgMThINkM1LjQ0NzcyIDE4IDUgMTguNDQ3NyA1IDE5QzUgMTkuNTUyMyA1LjQ0NzcyIDIwIDYgMjBIMTJDMTIuNTUyMyAyMCAxMyAxOS41NTIzIDEzIDE5WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEzIDIzQzEzIDIyLjQ0NzcgMTIuNTUyMyAyMiAxMiAyMkg4QzcuNDQ3NzIgMjIgNyAyMi40NDc3IDcgMjNDNyAyMy41NTIzIDcuNDQ3NzIgMjQgOCAyNEgxMkMxMi41NTIzIDI0IDEzIDIzLjU1MjMgMTMgMjNaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48L3N2Zz4nXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ9CY0YHRgtC+0YDQuNGPINC/0L7QutGD0L/QvtC6INC4INC/0YDQvtC00LDQticsXG4gICAgbGluazogJyMnLFxuICAgIGljb246ICc8c3ZnIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIHZpZXdCb3g9XCIwIDAgMzAgMzBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjAgNEg5QzguMjA0MzUgNCA3LjQ0MTI5IDQuMzE2MDcgNi44Nzg2OCA0Ljg3ODY4QzYuMzE2MDcgNS40NDEyOSA2IDYuMjA0MzUgNiA3VjI0LjhDNi4wMDA2NCAyNS4yMzAzIDYuMjUyMDkgMjUuNjIwNyA2LjY0MzU3IDI1Ljc5OTJDNy4wMzUwNiAyNS45Nzc3IDcuNDk0NyAyNS45MTE2IDcuODIgMjUuNjNMMTAuNSAyMy4zM0wxMy4yOSAyNS43MkMxMy42NjQ5IDI2LjA0MjcgMTQuMjA5MSAyNi4wNzU0IDE0LjYyIDI1LjhMMTguNDIgMjMuMjZMMjEuMTggMjUuNjNDMjEuNTA1MyAyNS45MTE2IDIxLjk2NDkgMjUuOTc3NyAyMi4zNTY0IDI1Ljc5OTJDMjIuNzQ3OSAyNS42MjA3IDIyLjk5OTQgMjUuMjMwMyAyMyAyNC44VjdDMjMgNS4zNDMxNSAyMS42NTY5IDQgMjAgNFpNOS43OCAyMS4zTDggMjIuODNWN0M4IDYuNDQ3NzIgOC40NDc3MSA2IDkgNkgyMEMyMC41NTIzIDYgMjEgNi40NDc3MiAyMSA3VjIyLjg0TDE5LjIxIDIxLjI5QzE4LjgzMzcgMjAuOTcwNiAxOC4yOTE4IDIwLjkzOCAxNy44OCAyMS4yMUwxNC4wOCAyMy43NUwxMS4yMiAyMS4zQzEwLjgwMzYgMjAuOTUwNSAxMC4xOTY0IDIwLjk1MDUgOS43OCAyMS4zWlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIwIDRIOUM4LjIwNDM1IDQgNy40NDEyOSA0LjMxNjA3IDYuODc4NjggNC44Nzg2OEM2LjMxNjA3IDUuNDQxMjkgNiA2LjIwNDM1IDYgN1YyNC44QzYuMDAwNjQgMjUuMjMwMyA2LjI1MjA5IDI1LjYyMDcgNi42NDM1NyAyNS43OTkyQzcuMDM1MDYgMjUuOTc3NyA3LjQ5NDcgMjUuOTExNiA3LjgyIDI1LjYzTDEwLjUgMjMuMzNMMTMuMjkgMjUuNzJDMTMuNjY0OSAyNi4wNDI3IDE0LjIwOTEgMjYuMDc1NCAxNC42MiAyNS44TDE4LjQyIDIzLjI2TDIxLjE4IDI1LjYzQzIxLjUwNTMgMjUuOTExNiAyMS45NjQ5IDI1Ljk3NzcgMjIuMzU2NCAyNS43OTkyQzIyLjc0NzkgMjUuNjIwNyAyMi45OTk0IDI1LjIzMDMgMjMgMjQuOFY3QzIzIDUuMzQzMTUgMjEuNjU2OSA0IDIwIDRaTTkuNzggMjEuM0w4IDIyLjgzVjdDOCA2LjQ0NzcyIDguNDQ3NzEgNiA5IDZIMjBDMjAuNTUyMyA2IDIxIDYuNDQ3NzIgMjEgN1YyMi44NEwxOS4yMSAyMS4yOUMxOC44MzM3IDIwLjk3MDYgMTguMjkxOCAyMC45MzggMTcuODggMjEuMjFMMTQuMDggMjMuNzVMMTEuMjIgMjEuM0MxMC44MDM2IDIwLjk1MDUgMTAuMTk2NCAyMC45NTA1IDkuNzggMjEuM1pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjxwYXRoIGQ9XCJNMTkgMTBIMTJDMTEuNDQ3NyAxMCAxMSA5LjU1MjI4IDExIDlDMTEgOC40NDc3MiAxMS40NDc3IDggMTIgOEgxOUMxOS41NTIzIDggMjAgOC40NDc3MiAyMCA5QzIwIDkuNTUyMjggMTkuNTUyMyAxMCAxOSAxMFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjxwYXRoIGQ9XCJNMTkgMTBIMTJDMTEuNDQ3NyAxMCAxMSA5LjU1MjI4IDExIDlDMTEgOC40NDc3MiAxMS40NDc3IDggMTIgOEgxOUMxOS41NTIzIDggMjAgOC40NDc3MiAyMCA5QzIwIDkuNTUyMjggMTkuNTUyMyAxMCAxOSAxMFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjxwYXRoIGQ9XCJNMTkgMTRIMTVDMTQuNDQ3NyAxNCAxNCAxMy41NTIzIDE0IDEzQzE0IDEyLjQ0NzcgMTQuNDQ3NyAxMiAxNSAxMkgxOUMxOS41NTIzIDEyIDIwIDEyLjQ0NzcgMjAgMTNDMjAgMTMuNTUyMyAxOS41NTIzIDE0IDE5IDE0WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PHBhdGggZD1cIk0xOSAxNEgxNUMxNC40NDc3IDE0IDE0IDEzLjU1MjMgMTQgMTNDMTQgMTIuNDQ3NyAxNC40NDc3IDEyIDE1IDEySDE5QzE5LjU1MjMgMTIgMjAgMTIuNDQ3NyAyMCAxM0MyMCAxMy41NTIzIDE5LjU1MjMgMTQgMTkgMTRaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48cGF0aCBkPVwiTTExIDE2SDE5QzE5LjU1MjMgMTYgMjAgMTYuNDQ3NyAyMCAxN0MyMCAxNy41NTIzIDE5LjU1MjMgMTggMTkgMThIMTFDMTAuNDQ3NyAxOCAxMCAxNy41NTIzIDEwIDE3QzEwIDE2LjQ0NzcgMTAuNDQ3NyAxNiAxMSAxNlpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjxwYXRoIGQ9XCJNMTEgMTZIMTlDMTkuNTUyMyAxNiAyMCAxNi40NDc3IDIwIDE3QzIwIDE3LjU1MjMgMTkuNTUyMyAxOCAxOSAxOEgxMUMxMC40NDc3IDE4IDEwIDE3LjU1MjMgMTAgMTdDMTAgMTYuNDQ3NyAxMC40NDc3IDE2IDExIDE2WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PC9zdmc+J1xuICB9LFxuXVxuXG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJuYXZwaW5cXFwiXFx1MDAzRVwiO1xuLy8gaXRlcmF0ZSBuYXZMaW5rc1xuOyhmdW5jdGlvbigpe1xuICB2YXIgJCRvYmogPSBuYXZMaW5rcztcbiAgaWYgKCdudW1iZXInID09IHR5cGVvZiAkJG9iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIHB1Z19pbmRleDggPSAwLCAkJGwgPSAkJG9iai5sZW5ndGg7IHB1Z19pbmRleDggPCAkJGw7IHB1Z19pbmRleDgrKykge1xuICAgICAgICB2YXIgaXRlbSA9ICQkb2JqW3B1Z19pbmRleDhdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2FcIiArIChcIiBjbGFzcz1cXFwibmF2cGluLWl0ZW0gbXQtWzMwcHhdIGZpcnN0LW9mLXR5cGU6bXQtMCAzeGw6bXQtNFxcXCJcIitwdWcuYXR0cihcImhyZWZcIiwgaXRlbS5saW5rLCB0cnVlLCB0cnVlKSkgKyBcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJuYXZwaW4tcGxhdGVcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdsaW5rLXBpbi1wbGF0ZS5zdmcnLCAnbmF2cGluLXBsYXRlLXBpYycsICdkb3RzJyk7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2RvdHMtMS5zdmcnLCAnbmF2cGluLXBsYXRlX19kb3RzLTEnLCAnZG90cycpO1xucHVnX21peGluc1tcImltYWdlXCJdKCdkb3RzLTEuc3ZnJywgJ25hdnBpbi1wbGF0ZV9fZG90cy0yJywgJ2RvdHMnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcIm5hdnBpbi1wbGF0ZS1pY29uXFxcIlxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS5pY29uKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmF2cGluLXRleHQgdGV4dC1zbSB1cHBlcmNhc2UgbWwtNyAzeGw6dGV4dC14cyAzeGw6bWwtNCB4bDptbC0yIHhsOnRleHQtWzEwcHhdIGxnOnRleHQteHNcXFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGl0ZW0ubGFiZWwpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVwiO1xuICAgICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciAkJGwgPSAwO1xuICAgIGZvciAodmFyIHB1Z19pbmRleDggaW4gJCRvYmopIHtcbiAgICAgICQkbCsrO1xuICAgICAgdmFyIGl0ZW0gPSAkJG9ialtwdWdfaW5kZXg4XTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NhXCIgKyAoXCIgY2xhc3M9XFxcIm5hdnBpbi1pdGVtIG10LVszMHB4XSBmaXJzdC1vZi10eXBlOm10LTAgM3hsOm10LTRcXFwiXCIrcHVnLmF0dHIoXCJocmVmXCIsIGl0ZW0ubGluaywgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmF2cGluLXBsYXRlXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnbGluay1waW4tcGxhdGUuc3ZnJywgJ25hdnBpbi1wbGF0ZS1waWMnLCAnZG90cycpO1xucHVnX21peGluc1tcImltYWdlXCJdKCdkb3RzLTEuc3ZnJywgJ25hdnBpbi1wbGF0ZV9fZG90cy0xJywgJ2RvdHMnKTtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnZG90cy0xLnN2ZycsICduYXZwaW4tcGxhdGVfX2RvdHMtMicsICdkb3RzJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJuYXZwaW4tcGxhdGUtaWNvblxcXCJcXHUwMDNFXCIgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IGl0ZW0uaWNvbikgPyBcIlwiIDogcHVnX2ludGVycCkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm5hdnBpbi10ZXh0IHRleHQtc20gdXBwZXJjYXNlIG1sLTcgM3hsOnRleHQteHMgM3hsOm1sLTQgeGw6bWwtMiB4bDp0ZXh0LVsxMHB4XSBsZzp0ZXh0LXhzXFxcIlxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBpdGVtLmxhYmVsKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcIjtcbiAgICB9XG4gIH1cbn0pLmNhbGwodGhpcyk7XG5cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNtLWYgcGItMTBcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNtLWNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclxcXCJcXHUwMDNFXCI7XG5pZiAoaXNHYW1lTm90U2VsZWN0ZWQpIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NhIGNsYXNzPVxcXCJyb3VuZGVkLWZ1bGwgYm9yZGVyLVsxcHhdIGJvcmRlci1zb2xpZCBib3JkZXItWyNDMEMyREM1OV0gbWF4LXctWzE2MHB4XSB3LWZ1bGwgaC0xMiBweC0zIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGhvdmVyOmJnLXNsYXRlLTEwMCB4bDptYXgtdy1ub25lIHhsOmgtMTBcXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImJ0bi10ZXh0IGZvbnQtc2Vjb25kYXJ5LWJvbGQgdGV4dC1zbSB0ZXh0LVsjQTFBRUM4XVxcXCJcXHUwMDNF0JLRi9Cx0L7RgCDQuNCz0YDRi1xcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcIjtcbn1cbmVsc2Uge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2EgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IHJvdW5kZWQtZnVsbCB3LWZ1bGwgaC0xNSBweC0zIGp1c3RpZnktY2VudGVyIDN4bDpoLTEyXFxcIiBocmVmPVxcXCIjXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJidG4tdGV4dCBmb250LXNlY29uZGFyeS1ib2xkIHRleHQtc20gdGV4dC13aGl0ZVxcXCJcXHUwMDNFV2FyZmFjZVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcIjtcbn1cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImNtLWYtYmFyIG10LTMgb3ZlcmZsb3ctaGlkZGVuIGZsZXggdy1mdWxsIGgtMTYgcm91bmRlZC1mdWxsIGJvcmRlci1bMXB4XSBib3JkZXItc29saWQgYm9yZGVyLVsjQzBDMkRDNTldIDN4bDpoLTEyIHhsOmZsZXgtY29sIHhsOmgtYXV0byB4bDpyb3VuZGVkLXhsXFxcIlxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiY20tZi1iYXItaXRlbSBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMiBweC00IHRleHQtWyNBMUFFQzhdIGhvdmVyOmJnLXNsYXRlLTEwMCAzeGw6cHgtMiB4bDpoLTEwXFxcIiBocmVmPVxcXCIjXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjbS1mLWJhci1pdGVtLWljb24gZmxleC1zaHJpbmstMFxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiMThcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMCAxOFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTE3LjI3MjcgNS4xMDE5N0gxNC41NDU1VjMuMjgzNzlDMTQuNTQ1NSAxLjc3NzU2IDEzLjMyNDQgMC41NTY1MTkgMTEuODE4MiAwLjU1NjUxOUgyLjcyNzI3QzEuMjIxMDQgMC41NTY1MTkgMCAxLjc3NzU2IDAgMy4yODM3OVY4LjczODM0QzAgMTAuMjQ0NiAxLjIyMTA0IDExLjQ2NTYgMi43MjcyNyAxMS40NjU2SDQuMTM2MzZMNS40NTQ1NSAxMi45MjkyVjEzLjI1NjVDNS40NTQ1NSAxNC43NjI4IDYuNjc1NTkgMTUuOTgzOCA4LjE4MTgyIDE1Ljk4MzhIMTEuNDA5MUwxMi43ODE4IDE3LjUzODNDMTMuMDQwNyAxNy44MzE5IDEzLjQxMzIgMTggMTMuODA0NSAxOEMxNC4xOTU5IDE4IDE0LjU2ODQgMTcuODMxOSAxNC44MjczIDE3LjUzODNMMTYuMiAxNS45ODM4SDE3LjI3MjdDMTguNzc5IDE1Ljk4MzggMjAgMTQuNzYyOCAyMCAxMy4yNTY1VjcuODAxOTdDMTkuOTg1IDYuMzA2NCAxOC43Njg0IDUuMTAxOSAxNy4yNzI3IDUuMTAxOTdaTTIuNzI3MjcgOS42NDc0M0MyLjIyNTIgOS42NDc0MyAxLjgxODE4IDkuMjQwNDEgMS44MTgxOCA4LjczODM0VjMuMjgzNzlDMS44MTgxOCAyLjc4MTcxIDIuMjI1MiAyLjM3NDcgMi43MjcyNyAyLjM3NDdIMTEuODE4MkMxMi4zMjAzIDIuMzc0NyAxMi43MjczIDIuNzgxNzEgMTIuNzI3MyAzLjI4Mzc5VjguNzM4MzRDMTIuNzI3MyA5LjI0MDQxIDEyLjMyMDMgOS42NDc0MyAxMS44MTgyIDkuNjQ3NDNIOC4xMTgxOEw2LjUzNjM2IDExLjQ2NTZMNC45NTQ1NSA5LjY0NzQzSDIuNzI3MjdaTTE3LjI3MjcgMTQuMTkyOUMxNy43NzQ4IDE0LjE5MjkgMTguMTgxOCAxMy43ODU5IDE4LjE4MTggMTMuMjgzOFY3Ljg0NzQyQzE4LjE4MTggNy4zNDUzNCAxNy43NzQ4IDYuOTM4MzMgMTcuMjcyNyA2LjkzODMzSDE0LjU0NTVWOC43NTY1MUMxNC41NDU1IDEwLjI2MjcgMTMuMzI0NCAxMS40ODM4IDExLjgxODIgMTEuNDgzOEg4LjkyNzI3TDcuNTU0NTUgMTMuMDM4M0M3LjQ3MTcgMTMuMTMyMSA3LjM3Njk2IDEzLjIxNDYgNy4yNzI3MyAxMy4yODM4QzcuMjcyNzMgMTMuNzg1OSA3LjY3OTc0IDE0LjE5MjkgOC4xODE4MiAxNC4xOTI5SDEyLjIyNzNMMTMuODA5MSAxNi4wODM4TDE1LjM5MDkgMTQuMTkyOUgxNy4yNzI3WlxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY20tZi1iYXItaXRlbS1sYWJlbCBmb250LXNlY29uZGFyeS1ib2xkIHRleHQtc20gM3hsOnRleHQteHNcXFwiXFx1MDAzRdCc0L7QuCDQodC+0L7QsdGJ0LXQvdC40Y9cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY20tZi1iYXItc2VwIHctWzFweF0gaC1mdWxsIGZsZXgtc2hyaW5rLTAgYmctWyNDMEMyREM1OV0geGw6aC1bMXB4XSB4bDp3LWZ1bGxcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJjbS1mLWJhci1pdGVtIGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0yIHB4LTQgdGV4dC1bI0ExQUVDOF0gaG92ZXI6Ymctc2xhdGUtMTAwIDN4bDpweC0yIHhsOmgtMTBcXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNtLWYtYmFyLWl0ZW0taWNvbiBmbGV4LXNocmluay0wXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCIxNFxcXCIgdmlld0JveD1cXFwiMCAwIDIwIDE0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTcuMjcyNyA0LjMzMTk0SDE2LjM2MzZDMTYuMTY4MSA0LjMzNDE0IDE1Ljk3MzIgNC4zNTU0NSAxNS43ODE4IDQuMzk1NTdDMTQuNzQzNSAyLjEzNzMxIDEyLjQ4NTUgMC42OTAyMTYgMTAgMC42OTAyMTZDNy41MTQ0OSAwLjY5MDIxNiA1LjI1NjQ1IDIuMTM3MzEgNC4yMTgxOCA0LjM5NTU3QzQuMDI2NzggNC4zNTU0NSAzLjgzMTkxIDQuMzM0MTQgMy42MzYzNiA0LjMzMTk0SDIuNzI3MjdDMS4yMjEwNCA0LjMzMTk0IDAgNS41NTI5OCAwIDcuMDU5MjFWMTAuNjk1NkMwIDEyLjIwMTggMS4yMjEwNCAxMy40MjI4IDIuNzI3MjcgMTMuNDIyOEgzLjYzNjM2QzUuMTQyNTkgMTMuNDIyOCA2LjM2MzY0IDEyLjIwMTggNi4zNjM2NCAxMC42OTU2VjcuMDU5MjFDNi4zNTg1OCA2LjQ1MTM2IDYuMTUwNjEgNS44NjI2MyA1Ljc3MjczIDUuMzg2NDhDNi40NTg0MSAzLjY1MTU3IDguMTM0NTEgMi41MTE3NSAxMCAyLjUxMTc1QzExLjg2NTUgMi41MTE3NSAxMy41NDE2IDMuNjUxNTcgMTQuMjI3MyA1LjM4NjQ4QzEzLjg0OTQgNS44NjI2MyAxMy42NDE0IDYuNDUxMzYgMTMuNjM2NCA3LjA1OTIxVjEwLjY5NTZDMTMuNjM2NCAxMi4yMDE4IDE0Ljg1NzQgMTMuNDIyOCAxNi4zNjM2IDEzLjQyMjhIMTcuMjcyN0MxOC43NzkgMTMuNDIyOCAyMCAxMi4yMDE4IDIwIDEwLjY5NTZWNy4wNTkyMUMyMCA1LjU1Mjk4IDE4Ljc3OSA0LjMzMTk0IDE3LjI3MjcgNC4zMzE5NFpNNC41NDU0NSAxMC42OTU2QzQuNTQ1NDUgMTEuMTk3NyA0LjEzODQ0IDExLjYwNDcgMy42MzYzNiAxMS42MDQ3SDIuNzI3MjdDMi4yMjUyIDExLjYwNDcgMS44MTgxOCAxMS4xOTc3IDEuODE4MTggMTAuNjk1NlY3LjA1OTIzQzEuODE4MTggNi41NTcxNiAyLjIyNTIgNi4xNTAxNCAyLjcyNzI3IDYuMTUwMTRIMy42MzYzNkM0LjEzODQ0IDYuMTUwMTQgNC41NDU0NSA2LjU1NzE2IDQuNTQ1NDUgNy4wNTkyM1YxMC42OTU2Wk0xNy4yNzI3IDExLjYwNDdDMTcuNzc0OCAxMS42MDQ3IDE4LjE4MTggMTEuMTk3NyAxOC4xODE4IDEwLjY5NTZWNy4wNTkyM0MxOC4xODE4IDYuNTU3MTYgMTcuNzc0OCA2LjE1MDE0IDE3LjI3MjcgNi4xNTAxNEgxNi4zNjM2QzE1Ljg2MTYgNi4xNTAxNCAxNS40NTQ1IDYuNTU3MTYgMTUuNDU0NSA3LjA1OTIzVjEwLjY5NTZDMTUuNDU0NSAxMS4xOTc3IDE1Ljg2MTYgMTEuNjA0NyAxNi4zNjM2IDExLjYwNDdIMTcuMjcyN1pcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNtLWYtYmFyLWl0ZW0tbGFiZWwgZm9udC1zZWNvbmRhcnktYm9sZCB0ZXh0LXNtIDN4bDp0ZXh0LXhzXFxcIlxcdTAwM0XQotC10YUuINCf0L7QtNC00LXRgNC20LrQsFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJsYXlvdXQtcGFnZVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibGF5b3V0LWxmXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJsZlxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibGYtaFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibGYtYmFyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJsZi1pbmZcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImxmLWluZi1pbmRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImxmLWluZi1pbmQtcG9pbnRcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImxmLWluZi1pbm5lclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibGYtaW5mLWluZC12YWx1ZVxcXCJcXHUwMDNFMiAzODFcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJsZi1pbmYtaW5kLWxhYmVsXFxcIlxcdTAwM0VPbmxpbmVcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJsZi10b2dnbGVcXFwiIHRpdGxlPVxcXCLQn9C10YDQtdC60LvRjtGH0LjRgtGMINCy0LjQtFxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiNFxcXCIgaGVpZ2h0PVxcXCIyMlxcXCIgdmlld0JveD1cXFwiMCAwIDQgMjJcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ2NpcmNsZSBjeD1cXFwiMlxcXCIgY3k9XFxcIjIwXFxcIiByPVxcXCIyXFxcIiB0cmFuc2Zvcm09XFxcInJvdGF0ZSgtOTAgMiAyMClcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NjaXJjbGUgY3g9XFxcIjJcXFwiIGN5PVxcXCIxMVxcXCIgcj1cXFwiMlxcXCIgdHJhbnNmb3JtPVxcXCJyb3RhdGUoLTkwIDIgMTEpXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDY2lyY2xlIGN4PVxcXCIyXFxcIiBjeT1cXFwiMlxcXCIgcj1cXFwiMlxcXCIgdHJhbnNmb3JtPVxcXCJyb3RhdGUoLTkwIDIgMilcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImxmLWNoYW5nZVxcXCJcXHUwMDNFXFx1MDAzQ2xhYmVsIGNsYXNzPVxcXCJsZi1jaGFuZ2UtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2lucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJsZl90eXBlXFxcIiB2YWx1ZT1cXFwiMVxcXCIgY2hlY2tlZFxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJsZi1jaGFuZ2UtYnRuXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJsZi1jaGFuZ2UtaWNvblxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMTdcXFwiIGhlaWdodD1cXFwiMTlcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNyAxOVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTExLjY0NSA5LjExNDg1QzEzLjM1NzYgNy43NzMyOSAxNC4wMzA3IDUuNDkzMDUgMTMuMzIxMSAzLjQzNjUzQzEyLjYxMTUgMS4zOCAxMC42NzU1IDAgOC41IDBDNi4zMjQ1IDAgNC4zODg1IDEuMzggMy42Nzg5MiAzLjQzNjUzQzIuOTY5MzMgNS40OTMwNSAzLjY0MjM5IDcuNzczMjkgNS4zNTUgOS4xMTQ4NUMyLjEyNDYzIDEwLjQwMTQgMC4wMDM1ODgyOCAxMy41MjU3IDAgMTcuMDAyOFYxNy44NTI4QzAgMTguMzIyMyAwLjM4MDU1OCAxOC43MDI4IDAuODUgMTguNzAyOEMxLjMxOTQ0IDE4LjcwMjggMS43IDE4LjMyMjMgMS43IDE3Ljg1MjhWMTcuMDAyOEMxLjcgMTMuMjQ3MyA0Ljc0NDQ2IDEwLjIwMjggOC41IDEwLjIwMjhDMTIuMjU1NSAxMC4yMDI4IDE1LjMgMTMuMjQ3MyAxNS4zIDE3LjAwMjhWMTcuODUyOEMxNS4zIDE4LjMyMjMgMTUuNjgwNiAxOC43MDI4IDE2LjE1IDE4LjcwMjhDMTYuNjE5NCAxOC43MDI4IDE3IDE4LjMyMjMgMTcgMTcuODUyOFYxNy4wMDI4QzE2Ljk5NjQgMTMuNTI1NyAxNC44NzU0IDEwLjQwMTQgMTEuNjQ1IDkuMTE0ODVaTTUuMDk5OTEgNS4xMDI4NUM1LjA5OTkxIDMuMjI1MDggNi42MjIxNCAxLjcwMjg1IDguNDk5OTEgMS43MDI4NUMxMC4zNzc3IDEuNzAyODUgMTEuODk5OSAzLjIyNTA4IDExLjg5OTkgNS4xMDI4NUMxMS44OTk5IDYuOTgwNjIgMTAuMzc3NyA4LjUwMjg1IDguNDk5OTEgOC41MDI4NUM3LjU5ODE3IDguNTAyODUgNi43MzMzNyA4LjE0NDY0IDYuMDk1NzUgNy41MDcwMUM1LjQ1ODEyIDYuODY5MzkgNS4wOTk5MSA2LjAwNDU4IDUuMDk5OTEgNS4xMDI4NVpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGbGFiZWxcXHUwMDNFXFx1MDAzQ2xhYmVsIGNsYXNzPVxcXCJsZi1jaGFuZ2UtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2lucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJsZl90eXBlXFxcIiB2YWx1ZT1cXFwiMVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibGYtY2hhbmdlLWJ0blxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibGYtY2hhbmdlLWljb25cXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjE3XFxcIiBoZWlnaHQ9XFxcIjE3XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTcgMTdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xNS45OCAzLjI0ODQySDE0Ljg4MzVDMTQuOTI3NiAzLjEyNTk5IDE0Ljk1ODkgMi45OTkyNSAxNC45NzcgMi44NzAyNUMxNS4xMzcyIDEuODQxMzggMTQuNjQ1NiAwLjgyMDcwMSAxMy43NDU3IDAuMzEzOTAyQzEyLjg0NTggLTAuMTkyODk4IDExLjcyODcgLTAuMDc4MTcxNCAxMC45NDggMC42MDEyNDJMOC4yNjIgMi45MjE4Mkw1LjU4NDUgMC42MDEyNDJDNC44MDM3NSAtMC4wNzgxNzE0IDMuNjg2NzIgLTAuMTkyODk4IDIuNzg2ODIgMC4zMTM5MDJDMS44ODY5MSAwLjgyMDcwMSAxLjM5NTI4IDEuODQxMzggMS41NTU1IDIuODcwMjVDMS41NzM1OCAyLjk5OTI1IDEuNjA0OTEgMy4xMjU5OSAxLjY0OSAzLjI0ODQySDEuMDJDMC40NTY2NyAzLjI0ODQyIDAgMy43MTAxOCAwIDQuMjc5NzlWNy4zNzM5QzAgNy45NDM1IDAuNDU2NjcgOC40MDUyNiAxLjAyIDguNDA1MjZIMS43VjE0LjQyMTZDMS43IDE1Ljg0NTYgMi44NDE2NyAxNyA0LjI1IDE3SDEyLjc1QzE0LjE1ODMgMTcgMTUuMyAxNS44NDU2IDE1LjMgMTQuNDIxNlY4LjQwNTI2SDE1Ljk4QzE2LjU0MzMgOC40MDUyNiAxNyA3Ljk0MzUgMTcgNy4zNzM5VjQuMjc5NzlDMTcgMy43MTAxOCAxNi41NDMzIDMuMjQ4NDIgMTUuOTggMy4yNDg0MlpNMTIuMDUyOSAxLjkwNzY0QzEyLjMwNjQgMS42ODM1MiAxMi42NzU5IDEuNjU1ODIgMTIuOTU5MyAxLjgzOTY4QzEzLjI0MjggMi4wMjM1NCAxMy4zNzE5IDIuMzc0NjkgMTMuMjc2MSAyLjcwMTEyQzEzLjE4MDMgMy4wMjc1NCAxMi44ODI2IDMuMjUwNjQgMTIuNTQ1OSAzLjI0ODQySDEwLjQ5NzRMMTIuMDUyOSAxLjkwNzY0Wk0zLjY3MjgxIDEuNzkxNzdDMy40MDQ1NCAxLjkxNTQxIDMuMjMxNzQgMi4xODUzNyAzLjIzMDA3IDIuNDgzNDhDMy4yMzAwNyAyLjkwNTk0IDMuNTY4NzcgMy4yNDg0MSAzLjk4NjU3IDMuMjQ4NDFINi4wMzUwN0w0LjQ3OTU3IDEuOTA3NjNDNC4yNTU5NiAxLjcxMzM1IDMuOTQxMDkgMS42NjgxMyAzLjY3MjgxIDEuNzkxNzdaTTEzLjYwMDMgMTQuNDIxNkMxMy42MDAzIDE0Ljg5NjIgMTMuMjE5OCAxNS4yODEgMTIuNzUwMyAxNS4yODFINC4yNTAzMkMzLjc4MDg4IDE1LjI4MSAzLjQwMDMyIDE0Ljg5NjIgMy40MDAzMiAxNC40MjE2VjguNDA1MjRIMTMuNjAwM1YxNC40MjE2Wk0xLjcwMDE2IDYuNjg2MjlIMTUuMzAwMlY0Ljk2NzM1SDEuNzAwMTZWNi42ODYyOVpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGbGFiZWxcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibGYtZmVlZFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibGYtZmVlZC10cmFja1xcXCJcXHUwMDNFXCI7XG5mb3IgKHZhciBpID0gMTsgaSA8PSAzOyBpKyspXG57XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJsZi1pdGVtXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnY2FzZS1ibHVlLnBuZycsICdsZi1pdGVtLXBpYycsICdjYXNlJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJsZi1pdGVtLXBsYXRlXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJsZi1pdGVtLWF2YXRhclxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2F2YXRhci1leGFtcGxlLTEucG5nJywgJycsICdjYXNlJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJsZi1pdGVtLW5hbWVcXFwiIHRpdGxlPVxcXCJTYW50Y2VzZVxcXCJcXHUwMDNFU2FudGNlc2VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJsZi1pdGVtXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnY2FzZS12aW9sZXQucG5nJywgJ2xmLWl0ZW0tcGljJywgJ2Nhc2UnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImxmLWl0ZW0tcGxhdGVcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImxmLWl0ZW0tYXZhdGFyXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnYXZhdGFyLWV4YW1wbGUtMS5wbmcnLCAnJywgJ2Nhc2UnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImxmLWl0ZW0tbmFtZVxcXCIgdGl0bGU9XFxcIlNhbnRjZXNlXFxcIlxcdTAwM0VTYW50Y2VzZVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImxmLWl0ZW1cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdjYXNlLXBpbmsucG5nJywgJ2xmLWl0ZW0tcGljJywgJ2Nhc2UnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImxmLWl0ZW0tcGxhdGVcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImxmLWl0ZW0tYXZhdGFyXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnYXZhdGFyLWV4YW1wbGUtMS5wbmcnLCAnJywgJ2Nhc2UnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImxmLWl0ZW0tbmFtZVxcXCIgdGl0bGU9XFxcIlNhbnRjZXNlXFxcIlxcdTAwM0VTYW50Y2VzZVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImxmLWl0ZW1cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdjYXNlLWdvbGQucG5nJywgJ2xmLWl0ZW0tcGljJywgJ2Nhc2UnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImxmLWl0ZW0tcGxhdGVcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImxmLWl0ZW0tYXZhdGFyXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnYXZhdGFyLWV4YW1wbGUtMS5wbmcnLCAnJywgJ2Nhc2UnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImxmLWl0ZW0tbmFtZVxcXCIgdGl0bGU9XFxcIlNhbnRjZXNlXFxcIlxcdTAwM0VTYW50Y2VzZVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufVxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibGF5b3V0LWggcHgtOSBwdC02IDN4bDpweC00IDN4bDpwdC00IGxnOnAtMFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaC13cmFwcGVyXFxcIlxcdTAwM0VcXHUwMDNDaGVhZGVyIGNsYXNzPVxcXCJoXFxcIlxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiaC1iYWNrbGlua1xcXCIgaHJlZj1cXFwiI1xcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB2aWV3Qm94PVxcXCIwIDAgMjYgMTNcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTAuNDY5NjY5IDUuOTY5NjdDMC4xNzY3NzcgNi4yNjI1NyAwLjE3Njc3NyA2LjczNzQ0IDAuNDY5NjY5IDcuMDMwMzNMNS4yNDI2NCAxMS44MDMzQzUuNTM1NTMgMTIuMDk2MiA2LjAxMDQxIDEyLjA5NjIgNi4zMDMzIDExLjgwMzNDNi41OTYxOSAxMS41MTA0IDYuNTk2MTkgMTEuMDM1NSA2LjMwMzMgMTAuNzQyNkwyLjA2MDY2IDYuNUw2LjMwMzMgMi4yNTczNkM2LjU5NjE5IDEuOTY0NDcgNi41OTYxOSAxLjQ4OTU5IDYuMzAzMyAxLjE5NjdDNi4wMTA0MSAwLjkwMzgwNyA1LjUzNTUzIDAuOTAzODA4IDUuMjQyNjQgMS4xOTY3TDAuNDY5NjY5IDUuOTY5NjdaTTI2IDUuNzVMMSA1Ljc1TDEgNy4yNUwyNiA3LjI1TDI2IDUuNzVaXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXCIgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL19uYXZpZ2F0aW9uLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJoLWJhciBtbC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGdhcC14LTNcXFwiXFx1MDAzRVxcdTAwM0NidXR0b24gY2xhc3M9XFxcImgtb3Blbm1lbnUgbWVudS1vcGVuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImgtbm90aWYgZmxleC1zaHJpbmstMFxcXCJcXHUwMDNFXCIgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL19ub3RpZmljYXRpb25zLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoLXByb2ZpbGUgbWluLXctWzMwMHB4XVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicG1jIGgtMTQgcm91bmRlZC1mdWxsIHB4LTMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMyBiZy13aGl0ZSBsZzpteC0zIGxnOmJnLVsjZjZmOWZmXSBsZzpoLWF1dG8gbGc6bWluLWgtWzUwcHhdIGxnOnB5LTJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBtYy1hdmF0YXIgZmxleC1zaHJpbmstMCByb3VuZGVkLWZ1bGwgdy04IGgtOCBsZzp3LTEwIGxnOmgtMTBcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdhdmF0YXItZXhhbXBsZS0yLnBuZycsICd3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlcicsICd1c2VyIGF2YXRhcicpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicG1jLWNoaXAtYmFyIGZsZXggZ2FwLXgtMyBnYXAteS0yIGl0ZW1zLWNlbnRlciBsZzpmbGV4LXdyYXAgbGc6bWwtYXV0b1xcXCJcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcInBtYy1jaGlwIGJvcmRlciByb3VuZGVkLWZ1bGwgYm9yZGVyLVsjRENGMUM0XSBweC0yIHB5LTEgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMiBkdXJhdGlvbi0yMDAgaG92ZXI6YmctWyNEQ0YxQzRdXFxcIiBocmVmPVxcXCIjXFxcIlxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwiZm9udC1wcmltYXJ5LWJvbGQgdGV4dC14cyB0ZXh0LWJsYWNrIHdoaXRlc3BhY2Utbm93cmFwXFxcIlxcdTAwM0UxIDUyMSAxMDBQRFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcInBtYy1jaGlwIGJvcmRlciByb3VuZGVkLWZ1bGwgYm9yZGVyLVsjRDJERkZCXSBweC0yIHB5LTEgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMiBkdXJhdGlvbi0yMDAgaG92ZXI6YmctWyNEMkRGRkJdXFxcIiBocmVmPVxcXCIjXFxcIlxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwiZm9udC1wcmltYXJ5LWJvbGQgdGV4dC14cyB0ZXh0LWJsYWNrIHdoaXRlc3BhY2Utbm93cmFwXFxcIlxcdTAwM0U1MzMgMTAw4oK9XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29uLXBsdXMtYmx1ZS5zdmcnLCAncG1jLWNoaXAtaWNvbiB3LTQgaC00Jyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicG1jLWNhcmQtYXJyb3cgaC1wcm9maWxlLWJ0bi1vcGVuIG1sLWF1dG8gdGV4dC1bI0Q2RDlFQV0gY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ibGFjayBsZzpoaWRkZW5cXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTE4IDlMMTIuNzA3MSAxNC4yOTI5QzEyLjMxNjYgMTQuNjgzNCAxMS42ODM0IDE0LjY4MzQgMTEuMjkyOSAxNC4yOTI5TDYgOVxcXCIgc3Ryb2tlPVxcXCJjdXJyZW50Q29sb3JcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS41XFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoLXByb2ZpbGUtY29udGVudCByb3VuZGVkLVsyMnB4XSBtaW4tdy1bMjkwcHhdIHB5LTMgYmctd2hpdGUgc2hhZG93LXNtIG92ZXJmbG93LWhpZGRlblxcXCJcXHUwMDNFXCIgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL19uYXZpZ2F0aW9uLXByb2ZpbGUucHVnXCIpLmNhbGwodGhpcywgbG9jYWxzKSkgPyBcIlwiIDogcHVnX2ludGVycCkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGaGVhZGVyXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJobS1pbm5lciBweC01IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG0tbG9nb1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibG9nbyB3LVsxODBweF0gM3hsOnctWzE1MHB4XSB4bDp3LVsxMjBweF0gbGc6dy1hdXRvIGxnOmZsZXgtc2hyaW5rLTEgbGc6YmFzaXMtWzEzMHB4XVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2RvdHMtMS5zdmcnLCAnbG9nb19fZG90cyBsZzpoLVsxMDAlXSB4bDp3LTEvMicsICcxcGFpZC5ydScpO1xucHVnX21peGluc1tcImltYWdlXCJdKCdsb2dvLnN2ZycsICdsb2dvLXBpYycsICcxcGFpZC5ydScpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG0tYmFyIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yLjVcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhtLW5vdGlmIGZsZXgtc2hyaW5rLTBcXFwiXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9fbm90aWZpY2F0aW9ucy5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG0tcHJvZmlsZSBmbGV4LXNocmluay0wXFxcIlxcdTAwM0VcXHUwMDNDYnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLW9yYW5nZSBobS1wcm9maWxlLWJ0biBmbGV4LXNocmluay0wIHJvdW5kZWQtZnVsbCB3LVs1MHB4XSBoLVs1MHB4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCIxN1xcXCIgaGVpZ2h0PVxcXCIxOVxcXCIgdmlld0JveD1cXFwiMCAwIDE3IDE5XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTEuNjQ1IDkuMTE0ODVDMTMuMzU3NiA3Ljc3MzI5IDE0LjAzMDcgNS40OTMwNSAxMy4zMjExIDMuNDM2NTNDMTIuNjExNSAxLjM4IDEwLjY3NTUgMCA4LjUgMEM2LjMyNDUgMCA0LjM4ODUgMS4zOCAzLjY3ODkyIDMuNDM2NTNDMi45NjkzMyA1LjQ5MzA1IDMuNjQyMzkgNy43NzMyOSA1LjM1NSA5LjExNDg1QzIuMTI0NjMgMTAuNDAxNCAwLjAwMzU4ODI4IDEzLjUyNTcgMCAxNy4wMDI4VjE3Ljg1MjhDMCAxOC4zMjIzIDAuMzgwNTU4IDE4LjcwMjggMC44NSAxOC43MDI4QzEuMzE5NDQgMTguNzAyOCAxLjcgMTguMzIyMyAxLjcgMTcuODUyOFYxNy4wMDI4QzEuNyAxMy4yNDczIDQuNzQ0NDYgMTAuMjAyOCA4LjUgMTAuMjAyOEMxMi4yNTU1IDEwLjIwMjggMTUuMyAxMy4yNDczIDE1LjMgMTcuMDAyOFYxNy44NTI4QzE1LjMgMTguMzIyMyAxNS42ODA2IDE4LjcwMjggMTYuMTUgMTguNzAyOEMxNi42MTk0IDE4LjcwMjggMTcgMTguMzIyMyAxNyAxNy44NTI4VjE3LjAwMjhDMTYuOTk2NCAxMy41MjU3IDE0Ljg3NTQgMTAuNDAxNCAxMS42NDUgOS4xMTQ4NVpNNS4wOTk5MSA1LjEwMjg1QzUuMDk5OTEgMy4yMjUwOCA2LjYyMjE0IDEuNzAyODUgOC40OTk5MSAxLjcwMjg1QzEwLjM3NzcgMS43MDI4NSAxMS44OTk5IDMuMjI1MDggMTEuODk5OSA1LjEwMjg1QzExLjg5OTkgNi45ODA2MiAxMC4zNzc3IDguNTAyODUgOC40OTk5MSA4LjUwMjg1QzcuNTk4MTcgOC41MDI4NSA2LjczMzM3IDguMTQ0NjQgNi4wOTU3NSA3LjUwNzAxQzUuNDU4MTIgNi44NjkzOSA1LjA5OTkxIDYuMDA0NTggNS4wOTk5MSA1LjEwMjg1WlxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG0tcHJvZmlsZS1jb250ZW50IHJvdW5kZWQteGwgYmctd2hpdGUgdy1bMjkwcHhdIHB5LTMgbGc6dy1bMzIwcHhdXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwbWMgaC0xNCByb3VuZGVkLWZ1bGwgcHgtMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0zIGJnLXdoaXRlIGxnOm14LTMgbGc6YmctWyNmNmY5ZmZdIGxnOmgtYXV0byBsZzptaW4taC1bNTBweF0gbGc6cHktMlxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicG1jLWF2YXRhciBmbGV4LXNocmluay0wIHJvdW5kZWQtZnVsbCB3LTggaC04IGxnOnctMTAgbGc6aC0xMFxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2F2YXRhci1leGFtcGxlLTIucG5nJywgJ3ctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyJywgJ3VzZXIgYXZhdGFyJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwbWMtY2hpcC1iYXIgZmxleCBnYXAteC0zIGdhcC15LTIgaXRlbXMtY2VudGVyIGxnOmZsZXgtd3JhcCBsZzptbC1hdXRvXFxcIlxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwicG1jLWNoaXAgYm9yZGVyIHJvdW5kZWQtZnVsbCBib3JkZXItWyNEQ0YxQzRdIHB4LTIgcHktMSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0yIGR1cmF0aW9uLTIwMCBob3ZlcjpiZy1bI0RDRjFDNF1cXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJmb250LXByaW1hcnktYm9sZCB0ZXh0LXhzIHRleHQtYmxhY2sgd2hpdGVzcGFjZS1ub3dyYXBcXFwiXFx1MDAzRTEgNTIxIDEwMFBEXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwicG1jLWNoaXAgYm9yZGVyIHJvdW5kZWQtZnVsbCBib3JkZXItWyNEMkRGRkJdIHB4LTIgcHktMSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0yIGR1cmF0aW9uLTIwMCBob3ZlcjpiZy1bI0QyREZGQl1cXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJmb250LXByaW1hcnktYm9sZCB0ZXh0LXhzIHRleHQtYmxhY2sgd2hpdGVzcGFjZS1ub3dyYXBcXFwiXFx1MDAzRTUzMyAxMDDigr1cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2ljb24tcGx1cy1ibHVlLnN2ZycsICdwbWMtY2hpcC1pY29uIHctNCBoLTQnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwbWMtY2FyZC1hcnJvdyBoLXByb2ZpbGUtYnRuLW9wZW4gbWwtYXV0byB0ZXh0LVsjRDZEOUVBXSBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWJsYWNrIGxnOmhpZGRlblxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTggOUwxMi43MDcxIDE0LjI5MjlDMTIuMzE2NiAxNC42ODM0IDExLjY4MzQgMTQuNjgzNCAxMS4yOTI5IDE0LjI5MjlMNiA5XFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxLjVcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm10LTNcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9fbmF2aWdhdGlvbi1wcm9maWxlLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJobS1idG4tbWVudSBtbWVudS1vcGVuIGZsZXgtc2hyaW5rLTAgdy1bNTBweF0gaC1bNTBweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wgZ2FwLTQgY3Vyc29yLXBvaW50ZXJcXFwiXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJ3LVszMHB4XSBoLVszcHhdIGJnLXdoaXRlIHJvdW5kZWQtZnVsbFxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJ3LVszMHB4XSBoLVszcHhdIGJnLXdoaXRlIHJvdW5kZWQtZnVsbFxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImxheW91dC1iIHBiLTQgcHgtOSAzeGw6cHgtNCBtaW4tdy0wIHNtOnB4LTNcXFwiXFx1MDAzRVwiO1xudmFyIG5vdGlmTGlzdCA9IFtcbiAge1xuICAgIHRleHQ6ICfQktGLINC/0L7Qu9GD0YfQuNC70Lgg0LHQvtC90YPRgSArIDUwMCDRgNGD0LHQu9C10LkuJyxcbiAgICBkYXRldGltZTogJzI3LjAyLjIwMjAgMTU6MzQnXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnPGEgaHJlZj1cIiNcIj5MYWNvc3RlMTc8L2E+INC+0YLQstC10YLQuNC7KNCwKSDQsiDRgtC10LzQtSA8YSBocmVmPVwiI1wiPtCR0LXRgdC/0LvQsNGC0L3QsNGPINCx0LXRgdC60L7QvdC10YfQvdCw0Y88L2E+JyxcbiAgICBkYXRldGltZTogJzI3LjAyLjIwMjAgMTU6MzQnLFxuICAgIGlzTW9yZTogdHJ1ZVxuICB9LFxuICB7XG4gICAgdGV4dDogJzxhIGhyZWY9XCIjXCI+TGFjb3N0ZTE3PC9hPiDQvtGC0LLQtdGC0LjQuyjQsCkg0LIg0YLQtdC80LUgPGEgaHJlZj1cIiNcIj7QkdC10YHQv9C70LDRgtC90LDRjyDQsdC10YHQutC+0L3QtdGH0L3QsNGPINC90LDQutGA0YPRgtC60LAg0LvQsNC50LrQvtCyINC90LAg0L/QvtGB0YIg0JLQmi4g0J/QvtC00YHQutCw0LbRgyDQutCw0Log0YHQtNC10LvQsNGC0Ywg0L3QsNC60YDRg9GC0LrRgyDQu9C10LPQsNC70YzQvdC+PC9hPicsXG4gICAgZGF0ZXRpbWU6ICcyNy4wMi4yMDIwIDE1OjM0JyxcbiAgICBpc01vcmU6IHRydWVcbiAgfSxcbiAge1xuICAgIHRleHQ6ICfQktGLINC/0L7Qu9GD0YfQuNC70Lgg0LHQvtC90YPRgSArIDUwMCDRgNGD0LHQu9C10LkuJyxcbiAgICBkYXRldGltZTogJzI3LjAyLjIwMjAgMTU6MzQnXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAn0JLRiyDQv9C+0LvRg9GH0LjQu9C4INCx0L7QvdGD0YEgKyA1MDAg0YDRg9Cx0LvQtdC5LicsXG4gICAgZGF0ZXRpbWU6ICcyNy4wMi4yMDIwIDE1OjM0J1xuICB9LFxuICB7XG4gICAgdGV4dDogJ9CS0Ysg0L/QvtC70YPRh9C40LvQuCDQsdC+0L3Rg9GBICsgNTAwINGA0YPQsdC70LXQuS4nLFxuICAgIGRhdGV0aW1lOiAnMjcuMDIuMjAyMCAxNTozNCdcbiAgfSxcbiAge1xuICAgIHRleHQ6ICc8YSBocmVmPVwiI1wiPkxhY29zdGUxNzwvYT4g0L7RgtCy0LXRgtC40Lso0LApINCyINGC0LXQvNC1IDxhIGhyZWY9XCIjXCI+0JHQtdGB0L/Qu9Cw0YLQvdCw0Y8g0LHQtdGB0LrQvtC90LXRh9C90LDRjyDQvdCw0LrRgNGD0YLQutCwINC70LDQudC60L7QsiDQvdCwINC/0L7RgdGCINCS0JouPC9hPiAnLFxuICAgIGRhdGV0aW1lOiAnMjcuMDIuMjAyMCAxNTozNCcsXG4gICAgaXNNb3JlOiB0cnVlXG4gIH0sXG5dXG5cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcInNudGYgbXQtNVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wic2VjdGlvbi1oZWFkZXJcIl0oJ9CS0LDRiNC4INGD0LLQtdC00L7QvNC70LXQvdC40Y8nLCB0cnVlKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcInNudGYtZ3JpZCBtdC0xMSBncmlkIGdyaWQtY29scy0xIGdhcC0zIDJtZDptdC01XFxcIlxcdTAwM0VcIjtcbi8vIGl0ZXJhdGUgbm90aWZMaXN0XG47KGZ1bmN0aW9uKCl7XG4gIHZhciAkJG9iaiA9IG5vdGlmTGlzdDtcbiAgaWYgKCdudW1iZXInID09IHR5cGVvZiAkJG9iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIHB1Z19pbmRleDkgPSAwLCAkJGwgPSAkJG9iai5sZW5ndGg7IHB1Z19pbmRleDkgPCAkJGw7IHB1Z19pbmRleDkrKykge1xuICAgICAgICB2YXIgaXRlbSA9ICQkb2JqW3B1Z19pbmRleDldO1xucHVnX21peGluc1tcIm5vdGlmaWNhdGlvbi1jYXJkXCJdKGl0ZW0pO1xuICAgICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciAkJGwgPSAwO1xuICAgIGZvciAodmFyIHB1Z19pbmRleDkgaW4gJCRvYmopIHtcbiAgICAgICQkbCsrO1xuICAgICAgdmFyIGl0ZW0gPSAkJG9ialtwdWdfaW5kZXg5XTtcbnB1Z19taXhpbnNbXCJub3RpZmljYXRpb24tY2FyZFwiXShpdGVtKTtcbiAgICB9XG4gIH1cbn0pLmNhbGwodGhpcyk7XG5cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9fcGFnaW5hdGlvbi5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibGF5b3V0LWItZiBmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC02IDNzbTptdC0zXFxcIlxcdTAwM0VcXHUwMDNDYnV0dG9uIGNsYXNzPVxcXCJsYXlvdXQtYnRuLXRvdG9wIHNjcm9sbC10by10b3Agcm91bmRlZC1mdWxsIHctMTYgaC0xNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1bI0Q3REZGNV0gaG92ZXI6YmctWyNkMGQ4ZjNdIHNoYWRvdy0yeGwgM3NtOnctMTEgM3NtOmgtMTFcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImJ0bi1pY29uIHRleHQtWyNCREM2RTBdIHctMVxcdTAwMkYyIGgtMVxcdTAwMkYyIFsmYW1wO19zdmddOnctZnVsbCBbJmFtcDtfc3ZnXTpoLWZ1bGxcXFwiXFx1MDAzRVxcdTAwM0Nzdmcgdmlld0JveD1cXFwiMCAwIDE2IDI2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk04LjcwNzExIDAuMjkyNjQ4QzguMzE2NTggLTAuMDk3ODc1NiA3LjY4MzQyIC0wLjA5Nzg3NTYgNy4yOTI4OSAwLjI5MjY0OEwwLjkyODkzMSA2LjY1NjYxQzAuNTM4NDA3IDcuMDQ3MTMgMC41Mzg0MDcgNy42ODAzIDAuOTI4OTMxIDguMDcwODJDMS4zMTk0NiA4LjQ2MTM1IDEuOTUyNjIgOC40NjEzNSAyLjM0MzE1IDguMDcwODJMOCAyLjQxMzk3TDEzLjY1NjkgOC4wNzA4MkMxNC4wNDc0IDguNDYxMzUgMTQuNjgwNSA4LjQ2MTM1IDE1LjA3MTEgOC4wNzA4MkMxNS40NjE2IDcuNjgwMyAxNS40NjE2IDcuMDQ3MTMgMTUuMDcxMSA2LjY1NjYxTDguNzA3MTEgMC4yOTI2NDhaTTkgMjUuOTk5OEw5IDAuOTk5NzU2TDcgMC45OTk3NTZMNyAyNS45OTk4TDkgMjUuOTk5OFpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcdTAwM0NidXR0b24gY2xhc3M9XFxcImxheW91dC1idG4tb3BlbmNoYXQgb3Blbi1mYXN0LWNoYXQgcm91bmRlZC1mdWxsIHJvdW5kZWQtYnItbm9uZSB3LVs2NXB4XSBoLVs2NXB4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmFkaWVudC1wcmltYXJ5IHNoYWRvdy0yeGwgM3NtOnctMTEgM3NtOmgtMTFcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImJ0bi1pY29uIHRleHQtWyNCREM2RTBdIHctWzIycHhdIGgtWzE5cHhdIFsmYW1wO19zdmddOnctZnVsbCBbJmFtcDtfc3ZnXTpoLWZ1bGwgdGV4dC13aGl0ZVxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyAgdmlld0JveD1cXFwiMCAwIDIxIDIwXFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMy4yNTY1NyAwSDE3LjgwMkMxOS4zMDgzIDAgMjAuNTI5MyAxLjQzOTYgMjAuNTI5MyAzLjIxNTQzVjEyLjg2MTdDMjAuNTI5MyAxNC42Mzc2IDE5LjMwODMgMTYuMDc3MiAxNy44MDIgMTYuMDc3MkgxMC45ODM4TDguODkyOTMgMTkuMzU2OUM4LjYzNTQgMTkuNzYxNyA4LjIzMTI0IDIwIDcuODAyMDIgMjBDNy4zNzI4MSAyMCA2Ljk2ODY0IDE5Ljc2MTcgNi43MTExMiAxOS4zNTY5TDQuNjIwMjEgMTYuMDc3MkgzLjI1NjU3QzEuNzUwMzQgMTYuMDc3MiAwLjUyOTI5NyAxNC42Mzc2IDAuNTI5Mjk3IDEyLjg2MTdWMy4yMTU0M0MwLjUyOTI5NyAxLjQzOTYgMS43NTAzNCAwIDMuMjU2NTcgMFpNMTcuODAyMiAxMy45MzM2QzE4LjMwNDMgMTMuOTMzNiAxOC43MTEzIDEzLjQ1MzggMTguNzExMyAxMi44NjE4VjMuMjE1NTFDMTguNzExMyAyLjYyMzU2IDE4LjMwNDMgMi4xNDM3IDE3LjgwMjIgMi4xNDM3SDMuMjU2NzVDMi43NTQ2NyAyLjE0MzcgMi4zNDc2NiAyLjYyMzU2IDIuMzQ3NjYgMy4yMTU1MVYxMi44NjE4QzIuMzQ3NjYgMTMuNDUzOCAyLjc1NDY3IDEzLjkzMzYgMy4yNTY3NSAxMy45MzM2SDUuNTI5NDdMNy44MDIyIDE3LjUwMjhMMTAuMDc0OSAxMy45MzM2SDE3LjgwMjJaXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNNS4wNzUxMSA2LjQzMDg1SDkuNjIwNTZDMTAuMTIyNiA2LjQzMDg1IDEwLjUyOTcgNS45NTA5OSAxMC41Mjk3IDUuMzU5MDRDMTAuNTI5NyA0Ljc2NzEgMTAuMTIyNiA0LjI4NzIzIDkuNjIwNTYgNC4yODcyM0g1LjA3NTExQzQuNTczMDMgNC4yODcyMyA0LjE2NjAyIDQuNzY3MSA0LjE2NjAyIDUuMzU5MDRDNC4xNjYwMiA1Ljk1MDk5IDQuNTczMDMgNi40MzA4NSA1LjA3NTExIDYuNDMwODVaXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTUuMDc1MSA4LjU3NDQ2SDUuMDc1MTFDNC41NzMwMyA4LjU3NDQ2IDQuMTY2MDIgOS4wNTQzMyA0LjE2NjAyIDkuNjQ2MjdDNC4xNjYwMiAxMC4yMzgyIDQuNTczMDMgMTAuNzE4MSA1LjA3NTExIDEwLjcxODFIMTUuMDc1MUMxNS41NzcyIDEwLjcxODEgMTUuOTg0MiAxMC4yMzgyIDE1Ljk4NDIgOS42NDYyN0MxNS45ODQyIDkuMDU0MzMgMTUuNTc3MiA4LjU3NDQ2IDE1LjA3NTEgOC41NzQ0NlpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xudmFyIHRhYnNMaXN0ID0gW1xuICB7XG4gICAgICBsYWJlbDogXCLQp9Cw0YIg0YEg0L/QvtC00LTQtdGA0LbQutC+0LlcIixcbiAgICAgIGFjdGl2ZTogdHJ1ZVxuICB9LFxuICB7XG4gICAgICBsYWJlbDogXCLQvNC+0Lgg0LTQuNCw0LvQvtCz0LhcIixcbiAgICAgIGFjdGl2ZTogZmFsc2VcbiAgfSxcbl1cblxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZmEtd3JhcHBlciBiZy13aGl0ZVxcdTAwMkYzMCB0b3AtMCBsZWZ0LTAgbWluLWgtc2NyZWVuIGgtZnVsbCB3LWZ1bGwgYWJzb2x1dGUgei0yMFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZmEgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctd2hpdGUgaC1mdWxsIHctZnVsbCBtYXgtdy1bNDQwcHhdIGZsb2F0LXJpZ2h0IHJpZ2h0LTAgcmVsYXRpdmVcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZhLWhlYWQgcmVsYXRpdmUgdy1mdWxsIG1iLVsxMnB4XVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGMtcGxhdGUtY29udGFpbmVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYy1wbGF0ZSBiZy1ncmFkaWVudC1wcmltYXJ5IF9zaGFkb3ctcHJpbWFyeSBweS0xIHB4LTYgM3NtOnB4LTIgM3NtOnB5LVsxcHhdIHJvdW5kZWQtYi1bMjJweF1cXFwiXFx1MDAzRdCR0YvRgdGC0YDRi9C5INC00L7RgdGC0YPQv1xcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZhLWJ0bi1jbG9zZSBmbGV4LXNocmluay0wIHctNCBoLTQgWyZhbXA7X3N2Z106dy1bMTAwJV0gWyZhbXA7X3N2Z106aC1bMTAwJV0gdGV4dC1bI0Q2RDlFQV0gY3Vyc29yLXBvaW50ZXIgZmxvYXQtcmlnaHQgbXItWzMwcHhdIG10LVszMHB4XSAybWQ6YmxvY2tcXFwiXFx1MDAzRVxcdTAwM0Nzdmcgdmlld0JveD1cXFwiMCAwIDE4IDE4XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0wLjQyNDAyMyAxNy41NzZDLTAuMDQ2Mjg4OCAxNy4xMDI4IC0wLjA0NjI4ODggMTYuMzM4NyAwLjQyNDAyMyAxNS44NjU2TDE1Ljg2NTYgMC40MjQwMzhDMTYuMTYyMSAwLjA3Nzg3NDIgMTYuNjI3NSAtMC4wNzI5MDk3IDE3LjA3MDYgMC4wMzM2Nzk1QzE3LjUxMzcgMC4xNDAyNjkgMTcuODU5NyAwLjQ4NjI0MSAxNy45NjYzIDAuOTI5MzUzQzE4LjA3MjkgMS4zNzI0NyAxNy45MjIxIDEuODM3OTMgMTcuNTc1OSAyLjEzNDM4TDIuMTM0MzYgMTcuNTc2QzEuNjYxMjQgMTguMDQ2MyAwLjg5NzE0MSAxOC4wNDYzIDAuNDI0MDIzIDE3LjU3NlpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0wLjQyNDAyMyAwLjQyNDAyM0MwLjg5NzE0MSAtMC4wNDYyODg4IDEuNjYxMjQgLTAuMDQ2Mjg4OCAyLjEzNDM2IDAuNDI0MDIzTDE3LjU3NTkgMTUuODY1NkMxNy45MjIxIDE2LjE2MjEgMTguMDcyOSAxNi42Mjc1IDE3Ljk2NjMgMTcuMDcwNkMxNy44NTk3IDE3LjUxMzcgMTcuNTEzNyAxNy44NTk3IDE3LjA3MDYgMTcuOTY2M0MxNi42Mjc1IDE4LjA3MjkgMTYuMTYyMSAxNy45MjIxIDE1Ljg2NTYgMTcuNTc1OUwwLjQyNDAyMyAyLjEzNDM2Qy0wLjA0NjI4ODggMS42NjEyNCAtMC4wNDYyODg4IDAuODk3MTQxIDAuNDI0MDIzIDAuNDI0MDIzWlxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1widGFic1wiXSh0YWJzTGlzdCk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJmYS1jb250ZW50IGZsZXgtZ3JvdyB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaGF0IGZsZXggZmxleC1jb2wgYmctd2hpdGUgZm9udC1wcmltYXJ5LW1lZCBweC1bMjJweF0gdGV4dC1bIzhGQTBDM10gdy1mdWxsXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaGF0LWhlYWQtd3JhcHBlciBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC1bMTRweF0gbWItWzIycHhdXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaGF0LWhlYWQgZmxleCBpdGVtcy1jZW50ZXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNoYXQtaGVhZC1hdmF0YXJzIGZsZXhcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZtLW1lc3NhZ2UtYXZhdGFyLXdyYXBwZXIgZmxleC1zaHJpbmstMCBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgYmctd2hpdGUgcm91bmRlZC1mdWxsIHAtWzZweF1cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZtLW1lc3NhZ2UtYXZhdGFyIGZsZXgtc2hyaW5rLTAgdy1bNDBweF0gaC1bNDBweF0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtZnVsbFxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2F2YXRhci1leGFtcGxlLWJvdC5wbmcnLCAnc3BzLWF2YXRhci1waWMgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXInLCAndXNlcicpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2hhdC1oZWFkLXVzZXIgZmxleCBmbGV4LWNvbFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2hhdC1oZWFkLXVzZXJuYW1lIGZsZXggZm9udC1zZWNvbmRhcnktYm9sZCB0ZXh0LW1kIHRleHQtYmxhY2tcXFwiXFx1MDAzRVN1cHBvcnRcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaGF0LW1lc3NhZ2VzIGZsZXggZmxleC1jb2wgZmxleC1ncm93IGp1c3RpZnktZW5kIHRleHQtWzEycHhdXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJjaGF0LW1lc3NhZ2VcIl0oJ2F2YXRhci1leGFtcGxlLWJvdC5wbmcnLCBcImluY29tZVwiLCBcItCf0YDQuNCy0LXRgiwg0LrQsNC6INC00LXQu9CwID9cIik7XG5wdWdfbWl4aW5zW1wiY2hhdC1tZXNzYWdlXCJdKCcnLCBcImluY29tZVwiLCBcItCf0YDQuNCy0LXRgiwg0LrQsNC6INC00LXQu9CwID8g0YLRiyDQutC+0LPQtNCwINGA0LXRiNC40Lsg0L/QvtC60YPQv9Cw0YLRjCDRgtC+0LLQsNGAINGN0YLQvtGCINCx0YPQtNC10YjRjC4g0JTQsNCy0LDQuSDQt9Cw0LLRgtGA0LAg0LLQtdGH0LXRgNC+0Lwg0LIgMTk6MDAg0Y8g0LPQvtGC0L7QsiDQv9GA0L7QtNCw0YLRjCDQtNC+0LzQsCDQsdGD0LTRgyDQutCw0Log0YDQsNC3INC4INC80Ysg0LLRgdC1INGB0LTQtdC70LDQtdC8INGBINGC0L7QsdC+0LkgXCIpO1xucHVnX21peGluc1tcImNoYXQtbWVzc2FnZVwiXSgnYXZhdGFyLWV4YW1wbGUtYm90LnBuZycsIFwiaW5jb21lXCIsIFwi0J/RgNC40LLQtdGCLCDQutCw0Log0LTQtdC70LAgP1wiKTtcbnB1Z19taXhpbnNbXCJjaGF0LW1lc3NhZ2VcIl0oJ2F2YXRhci1leGFtcGxlLWJvdC5wbmcnLCBcImluY29tZVwiLCBcItCf0YDQuNCy0LXRgiwg0LrQsNC6INC00LXQu9CwID9cIik7XG5wdWdfbWl4aW5zW1wiY2hhdC1tZXNzYWdlXCJdKCcnLCBcIm91dFwiLCBcItCf0YDQuNCy0LXRgiwg0LrQsNC6INC00LXQu9CwID8g0YLRiyDQutC+0LPQtNCwINGA0LXRiNC40Lsg0L/QvtC60YPQv9Cw0YLRjCDRgtC+0LLQsNGAINGN0YLQvtGCINCx0YPQtNC10YjRjC4g0JTQsNCy0LDQuSDQt9Cw0LLRgtGA0LAg0LLQtdGH0LXRgNC+0Lwg0LIgMTk6MDAg0Y8g0LPQvtGC0L7QsiDQv9GA0L7QtNCw0YLRjCDQtNC+0LzQsCDQsdGD0LTRgyDQutCw0Log0YDQsNC3INC4INC80Ysg0LLRgdC1INGB0LTQtdC70LDQtdC8INGBINGC0L7QsdC+0LkgXCIpO1xucHVnX21peGluc1tcImNoYXQtbWVzc2FnZVwiXSgnYXZhdGFyLWV4YW1wbGUtMS5wbmcnLCBcIm91dFwiLCBcItCf0YDQuNCy0LXRgiwg0LrQsNC6INC00LXQu9CwID9cIik7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaGF0LWZvcm0gZmxleCBmbGV4LWNvbCBtdC1bMjRweF1cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcInJhdGluZ1wiXShcInctZnVsbCBteC1hdXRvIG1iLVsyNHB4XVwiLCA1LCA0KTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImNoYXQtdGVjaC10eXBlcyBuby1zY3JvbGxiYXIgZmxleCBpdGVtcy1jZW50ZXIgbXgtYXV0byBtYi1bMjRweF0gcHgtWzEycHhdIG1heC13LVsxMDAlXSBmb250LXNlY29uZGFyeS1tZWQgdGV4dC1bMTRweF0gb3ZlcmZsb3cteC1zY3JvbGxcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNoYXQtdGVjaC10eXBlcyBmbGV4IGl0ZW1zLWNlbnRlciBiZy1bI0U5RURGNV0gaG92ZXI6YmctWyNEMUQ1REJdIHRleHQtYmxhY2sgbXItWzEycHhdIHB5LVs4cHhdIHB4LVsxNnB4XSByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXJcXFwiXFx1MDAzRdCk0LjQvdCw0L3RgdGLXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2hhdC10ZWNoLXR5cGVzIGZsZXggaXRlbXMtY2VudGVyIGJnLVsjRTlFREY1XSBob3ZlcjpiZy1bI0QxRDVEQl0gdGV4dC1ibGFjayBtci1bMTJweF0gcHktWzhweF0gcHgtWzE2cHhdIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlclxcXCJcXHUwMDNF0KHQtNC10LvQutCwXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2hhdC10ZWNoLXR5cGVzIGZsZXggaXRlbXMtY2VudGVyIGJnLVsjRTlFREY1XSBob3ZlcjpiZy1bI0QxRDVEQl0gdGV4dC1ibGFjayBtci1bMTJweF0gcHktWzhweF0gcHgtWzE2cHhdIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlclxcXCJcXHUwMDNF0KTQvtGA0YPQvFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNoYXQtdGVjaC10eXBlcyBmbGV4IGl0ZW1zLWNlbnRlciBiZy1bI0U5RURGNV0gaG92ZXI6YmctWyNEMUQ1REJdIHRleHQtYmxhY2sgbXItWzEycHhdIHB5LVs4cHhdIHB4LVsxNnB4XSByb3VuZGVkLWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXAgY3Vyc29yLXBvaW50ZXJcXFwiXFx1MDAzRdCd0LDRiNC10Lsg0L7RiNC40LHQutGDXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2hhdC10ZWNoLXR5cGVzIGZsZXggaXRlbXMtY2VudGVyIGJnLVsjRTlFREY1XSBob3ZlcjpiZy1bI0QxRDVEQl0gdGV4dC1ibGFjayBweS1bOHB4XSBweC1bMTZweF0gcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyXFxcIlxcdTAwM0XQlNGA0YPQs9C+0LVcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJjaGF0LWlucHV0XCJdKCd3LWZ1bGwnLCAn0JLRgdGC0LDQstGM0YLQtSDRgdC+0LTQtdGA0LbQuNC80L7QtSDRgtC+0LLQsNGA0LAuLi4nKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xudmFyIG5hdkxpc3QgPSBbXG4gIHtsaW5rOiAnIycsIGxhYmVsOiAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC+0LUg0YHQvtCz0LvQsNGI0LXQvdC40LUnfSxcbiAge2xpbms6ICcjJywgbGFiZWw6ICfQmtC+0L3RgtCw0LrRgtGLJ30sXG4gIHtsaW5rOiAnIycsIGxhYmVsOiAn0KfQsNGB0YLRi9C1INCy0L7Qv9GA0L7RgdGLJ30sXG5dXG5cbnZhciBzb2NpYWxMaXN0ID0gW1xuICB7bGluazogJyMnLCBsYWJlbDogJ2luc3RhZ3JhbScsIGljb246ICdpY29uLWluc3QtZ3JleS5zdmcnfSxcbiAge2xpbms6ICcjJywgbGFiZWw6ICdkaXNjcm9kJywgaWNvbjogJ2ljb24tZGlzY29yZC1ncmV5LnN2Zyd9LFxuICB7bGluazogJyMnLCBsYWJlbDogJ3ZrJywgaWNvbjogJ2ljb24tdmstZ3JleS5zdmcnfSxcbiAge2xpbms6ICcjJywgbGFiZWw6ICd5b3V0dWJlJywgaWNvbjogJ2ljb24teXQtZ3JleS5zdmcnfSxcbl1cblxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2Zvb3RlciBjbGFzcz1cXFwiZm9vdGVyIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBmbGV4LXdyYXAgZ2FwLTggdGV4dC1zbSBweS0xMCBweC0yMCAzeGw6cHgtMTAgMm1kOmZsZXgtY29sIDJtZDpwLTUgMm1kOmdhcC00IDJtZDp0ZXh0LWNlbnRlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vdGVyLWNvcHkgbWF4LXctc20gMm1kOm1heC13LW5vbmUgMm1kOm9yZGVyLTEgMm1kOnRleHQteHMgXFxcIlxcdTAwM0UxcGFpZC5ydSDigJQg0JzQsNGA0LrQtdGC0L/Qu9C10LnRgSDQv9C+INC/0YDQvtC00LDQttCw0Lwg0YbQuNGE0YDQvtCy0YvRhSDRgtC+0LLQsNGA0L7Qsi4gwqkgMjAyMywg0JLRgdC1INC/0YDQsNCy0LAg0LfQsNGJ0LjRidC10L3Riy5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmb290ZXItbGlzdCBmbGV4IGZsZXgtd3JhcCBnYXAteC04IGdhcC15LTIuNSAybWQ6ZmxleC1jb2xcXFwiXFx1MDAzRVwiO1xuLy8gaXRlcmF0ZSBuYXZMaXN0XG47KGZ1bmN0aW9uKCl7XG4gIHZhciAkJG9iaiA9IG5hdkxpc3Q7XG4gIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgJCRvYmoubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBwdWdfaW5kZXgxMCA9IDAsICQkbCA9ICQkb2JqLmxlbmd0aDsgcHVnX2luZGV4MTAgPCAkJGw7IHB1Z19pbmRleDEwKyspIHtcbiAgICAgICAgdmFyIGl0ZW0gPSAkJG9ialtwdWdfaW5kZXgxMF07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDYVwiICsgKFwiIGNsYXNzPVxcXCJob3Zlcjp0ZXh0LXdoaXRlIGR1cmF0aW9uLTIwMFxcXCJcIitwdWcuYXR0cihcImhyZWZcIiwgaXRlbS5saW5rLCB0cnVlLCB0cnVlKSkgKyBcIlxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBpdGVtLmxhYmVsKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcIjtcbiAgICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgJCRsID0gMDtcbiAgICBmb3IgKHZhciBwdWdfaW5kZXgxMCBpbiAkJG9iaikge1xuICAgICAgJCRsKys7XG4gICAgICB2YXIgaXRlbSA9ICQkb2JqW3B1Z19pbmRleDEwXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NhXCIgKyAoXCIgY2xhc3M9XFxcImhvdmVyOnRleHQtd2hpdGUgZHVyYXRpb24tMjAwXFxcIlwiK3B1Zy5hdHRyKFwiaHJlZlwiLCBpdGVtLmxpbmssIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGl0ZW0ubGFiZWwpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVwiO1xuICAgIH1cbiAgfVxufSkuY2FsbCh0aGlzKTtcblxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vdGVyLXNvYyBmbGV4IGdhcC01IDJtZDpmbGV4LXdyYXAgMm1kOmp1c3RpZnktY2VudGVyXFxcIlxcdTAwM0VcIjtcbi8vIGl0ZXJhdGUgc29jaWFsTGlzdFxuOyhmdW5jdGlvbigpe1xuICB2YXIgJCRvYmogPSBzb2NpYWxMaXN0O1xuICBpZiAoJ251bWJlcicgPT0gdHlwZW9mICQkb2JqLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgcHVnX2luZGV4MTEgPSAwLCAkJGwgPSAkJG9iai5sZW5ndGg7IHB1Z19pbmRleDExIDwgJCRsOyBwdWdfaW5kZXgxMSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gJCRvYmpbcHVnX2luZGV4MTFdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2FcIiArIChcIiBjbGFzcz1cXFwic2hyaW5rLTAgbGVhZGluZy1ub25lIGR1cmF0aW9uLTIwMFxcXCJcIitwdWcuYXR0cihcImhyZWZcIiwgaXRlbS5saW5rLCB0cnVlLCB0cnVlKSkgKyBcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXShpdGVtLmljb24sICdmb290ZXItc29jLWljb24nICwgaXRlbS5sYWJlbCk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXCI7XG4gICAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyICQkbCA9IDA7XG4gICAgZm9yICh2YXIgcHVnX2luZGV4MTEgaW4gJCRvYmopIHtcbiAgICAgICQkbCsrO1xuICAgICAgdmFyIGl0ZW0gPSAkJG9ialtwdWdfaW5kZXgxMV07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDYVwiICsgKFwiIGNsYXNzPVxcXCJzaHJpbmstMCBsZWFkaW5nLW5vbmUgZHVyYXRpb24tMjAwXFxcIlwiK3B1Zy5hdHRyKFwiaHJlZlwiLCBpdGVtLmxpbmssIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKGl0ZW0uaWNvbiwgJ2Zvb3Rlci1zb2MtaWNvbicgLCBpdGVtLmxhYmVsKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcIjtcbiAgICB9XG4gIH1cbn0pLmNhbGwodGhpcyk7XG5cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZm9vdGVyXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1tZW51IHB0LTggcGItOCBweC0xMlxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibW1lbnUtY2xvc2UgZmxleC1zaHJpbmstMCB3LVs1MHB4XSBoLVs1MHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCBnYXAtNCBjdXJzb3ItcG9pbnRlclxcXCJcXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcInctWzMwcHhdIGgtWzNweF0gYmctd2hpdGUgcm91bmRlZC1mdWxsXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcInctWzMwcHhdIGgtWzNweF0gYmctd2hpdGUgcm91bmRlZC1mdWxsXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibW1lbnUtbmF2IGZsZXggZ2FwLXgtNFxcXCJcXHUwMDNFXCIgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL19uYXZpZ2F0aW9uLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtbWVudS1wbmF2IHB0LTggbWF4LXctWzQwMHB4XVxcXCJcXHUwMDNFXCI7XG52YXIgbmF2TGlua3MgPSBbXG4gIHtcbiAgICBsYWJlbDogJ9Cf0YDQvtC00LDRgtGMINGC0L7QstCw0YAnLFxuICAgIGxpbms6ICcjJyxcbiAgICBpY29uOiAnPHN2ZyB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiB2aWV3Qm94PVwiMCAwIDMwIDMwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIyLjAxNjEgMjQuOTk5OUMyMy41NjA1IDI0Ljk5OTkgMjQuODEyNSAyMy43MjggMjQuODEyNSAyMi4xNTlDMjQuODEyNSAyMC41OSAyMy41NjA1IDE5LjMxODEgMjIuMDE2MSAxOS4zMTgxQzIwLjQ3MTcgMTkuMzE4MSAxOS4yMTk3IDIwLjU5IDE5LjIxOTcgMjIuMTU5QzE5LjIxOTcgMjMuNzI4IDIwLjQ3MTcgMjQuOTk5OSAyMi4wMTYxIDI0Ljk5OTlaTTIyLjAxNiAyMi43MjcyQzIxLjcwOTYgMjIuNzIxMSAyMS40NjI3IDIyLjQ3MDIgMjEuNDU2OCAyMi4xNTlDMjEuNDU2OCAyMS44NDUyIDIxLjcwNzEgMjEuNTkwOCAyMi4wMTYgMjEuNTkwOEMyMi4zMjQ5IDIxLjU5MDggMjIuNTc1MyAyMS44NDUyIDIyLjU3NTMgMjIuMTU5QzIyLjU3NTMgMjIuNDcyOCAyMi4zMjQ5IDIyLjcyNzIgMjIuMDE2IDIyLjcyNzJaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48cGF0aCBkPVwiTTI0LjgxMTEgMTYuMzYzNkMyNS40Mjg5IDE2LjM2MzYgMjUuOTI5NyAxNi44NzI0IDI1LjkyOTcgMTcuNUMyNS45Mjk3IDE4LjEyNzYgMjUuNDI4OSAxOC42MzY0IDI0LjgxMTEgMTguNjM2NEgxNC41MDkyTDEzLjAzMjcgMjQuMTU5MUMxMi44NjkgMjQuNzY0NyAxMi4yNTMxIDI1LjEyMDkgMTEuNjU2OSAyNC45NTQ1QzExLjA2MDggMjQuNzg4MiAxMC43MTAyIDI0LjE2MjUgMTAuODczOSAyMy41NTY4TDEyLjE5MzggMTguNjM2NEgxMC40NDg5QzkuODMyOTYgMTguNjM4MiA5LjI5NjI3IDE4LjIxMDQgOS4xNTEzNSAxNy42MDIzTDYuNjAxMDUgNy4yNzI3M0g0LjExNzg1QzMuNTAwMDkgNy4yNzI3MyAyLjk5OTMgNi43NjM5NiAyLjk5OTMgNi4xMzYzNkMyLjk5OTMgNS41MDg3NyAzLjUwMDA5IDUgNC4xMTc4NSA1SDcuMzA1NzRDNy45MjAyNiA1LjAwMjMxIDguNDU0NzUgNS40MjgyOSA4LjYwMzI2IDYuMDM0MDlMMTEuMTQyNCAxNi4zNjM2SDI0LjgxMTFaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjQuMDczNSAxNS4yMjczQzI0LjcwOTcgMTUuMjMwNyAyNS4yNjA4IDE0Ljc3OTkgMjUuMzkzNCAxNC4xNDc3TDI2Ljk3MDUgNi42NDc3M0MyNy4wNTQ4IDYuMjQ1OTYgMjYuOTU2MiA1LjgyNzAxIDI2LjcwMjMgNS41MDczMkMyNi40NDg0IDUuMTg3NjMgMjYuMDY2MiA1LjAwMTI2IDI1LjY2MTggNUgxMS42NDYzQzExLjI0NTkgNS4wMDgwMSAxMC44Njk5IDUuMTk3MjQgMTAuNjIxMSA1LjUxNjAyQzEwLjM3MjIgNS44MzQ3OSAxMC4yNzY1IDYuMjQ5ODEgMTAuMzYgNi42NDc3M0wxMS45MzcxIDE0LjE0NzdDMTIuMDY5NyAxNC43Nzk5IDEyLjYyMDggMTUuMjMwNyAxMy4yNTcgMTUuMjI3M0gyNC4wNzM1Wk0xMy45NjE4IDEyLjk1NDVMMTIuNzY0OSA3LjI3MjY4SDI0LjU1NDVMMjMuMzU3NyAxMi45NTQ1SDEzLjk2MThaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48L3N2Zz4nXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ9CX0LDQutC70LDQtNC60LgnLFxuICAgIGxpbms6ICcjJyxcbiAgICBpY29uOiAnPHN2ZyB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiB2aWV3Qm94PVwiMCAwIDMwIDMwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIwLjE1MjUgMTYuODQ3NUwxNS4xNTI1IDIxLjg0NzVMMTAuMTUyNSAxNi44NDc1TDcuMzEyNSAxNC4wMDc1QzUuOTMxNzggMTIuNjI2OCA1LjkzMTc4IDEwLjM4ODIgNy4zMTI1IDkuMDA3NUM4LjY5MzIxIDcuNjI2NzkgMTAuOTMxOCA3LjYyNjc5IDEyLjMxMjUgOS4wMDc1TDE1LjE1MjUgMTEuODY3NUwxNy45OTI1IDkuMDI3NUMxOS4zNzMyIDcuNjQ2NzkgMjEuNjExOCA3LjY0Njc5IDIyLjk5MjUgOS4wMjc1QzI0LjM3MzIgMTAuNDA4MiAyNC4zNzMyIDEyLjY0NjggMjIuOTkyNSAxNC4wMjc1TDIwLjE1MjUgMTYuODQ3NVpNMTMuNzUyNSA3LjYxNzVDMTEuNTk1OCA1LjQ2MDgzIDguMDk5MTcgNS40NjA4MyA1Ljk0MjUgNy42MTc1QzMuNzg1ODIgOS43NzQxOCAzLjc4NTgyIDEzLjI3MDggNS45NDI1IDE1LjQyNzVMNy4zNjI1IDE2Ljg0NzVMMTUuMTUyNSAyNC42NTc1TDIyLjk2MjUgMTYuODQ3NUwyNC4zODI1IDE1LjQyNzVDMjYuNTM5MiAxMy4yNzA4IDI2LjUzOTIgOS43NzQxOCAyNC4zODI1IDcuNjE3NUMyMi4yMjU4IDUuNDYwODMgMTguNzI5MiA1LjQ2MDgzIDE2LjU3MjUgNy42MTc1TDE1LjE1MjUgOS4wMzc1TDEzLjc1MjUgNy42MTc1WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PC9zdmc+J1xuICB9LFxuICB7XG4gICAgbGFiZWw6ICfQmNGB0YLQvtGA0LjRjyDQv9GA0L7RgdC80L7RgtGA0LAnLFxuICAgIGxpbms6ICcjJyxcbiAgICBpY29uOiAnPHN2ZyB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiB2aWV3Qm94PVwiMCAwIDMwIDMwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIzIDE2QzI0LjY1NjkgMTYgMjYgMTQuNjU2OSAyNiAxM1Y5QzI2IDcuMzQzMTUgMjQuNjU2OSA2IDIzIDZIMTlDMTcuMzQzMSA2IDE2IDcuMzQzMTUgMTYgOVYxM0MxNiAxNC42NTY5IDE3LjM0MzEgMTYgMTkgMTZIMjNaTTI0IDEzQzI0IDEzLjU1MjMgMjMuNTUyMyAxNCAyMyAxNEgxOUMxOC40NDc3IDE0IDE4IDEzLjU1MjMgMTggMTNWOUMxOCA4LjQ0NzcyIDE4LjQ0NzcgOCAxOSA4SDIzQzIzLjU1MjMgOCAyNCA4LjQ0NzcyIDI0IDlWMTNaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEgMTZDMTIuNjU2OSAxNiAxNCAxNC42NTY5IDE0IDEzVjlDMTQgNy4zNDMxNSAxMi42NTY5IDYgMTEgNkg3QzUuMzQzMTUgNiA0IDcuMzQzMTUgNCA5VjEzQzQgMTQuNjU2OSA1LjM0MzE1IDE2IDcgMTZIMTFaTTEyIDEzQzEyIDEzLjU1MjMgMTEuNTUyMyAxNCAxMSAxNEg3QzYuNDQ3NzIgMTQgNiAxMy41NTIzIDYgMTNWOUM2IDguNDQ3NzIgNi40NDc3MiA4IDcgOEgxMUMxMS41NTIzIDggMTIgOC40NDc3MiAxMiA5VjEzWlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTI1IDE5QzI1IDE4LjQ0NzcgMjQuNTUyMyAxOCAyNCAxOEgxOEMxNy40NDc3IDE4IDE3IDE4LjQ0NzcgMTcgMTlDMTcgMTkuNTUyMyAxNy40NDc3IDIwIDE4IDIwSDI0QzI0LjU1MjMgMjAgMjUgMTkuNTUyMyAyNSAxOVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yNSAyM0MyNSAyMi40NDc3IDI0LjU1MjMgMjIgMjQgMjJIMjBDMTkuNDQ3NyAyMiAxOSAyMi40NDc3IDE5IDIzQzE5IDIzLjU1MjMgMTkuNDQ3NyAyNCAyMCAyNEgyNEMyNC41NTIzIDI0IDI1IDIzLjU1MjMgMjUgMjNaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTMgMTlDMTMgMTguNDQ3NyAxMi41NTIzIDE4IDEyIDE4SDZDNS40NDc3MiAxOCA1IDE4LjQ0NzcgNSAxOUM1IDE5LjU1MjMgNS40NDc3MiAyMCA2IDIwSDEyQzEyLjU1MjMgMjAgMTMgMTkuNTUyMyAxMyAxOVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMyAyM0MxMyAyMi40NDc3IDEyLjU1MjMgMjIgMTIgMjJIOEM3LjQ0NzcyIDIyIDcgMjIuNDQ3NyA3IDIzQzcgMjMuNTUyMyA3LjQ0NzcyIDI0IDggMjRIMTJDMTIuNTUyMyAyNCAxMyAyMy41NTIzIDEzIDIzWlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PC9zdmc+J1xuICB9LFxuICB7XG4gICAgbGFiZWw6ICfQmNGB0YLQvtGA0LjRjyDQv9C+0LrRg9C/0L7QuiDQuCDQv9GA0L7QtNCw0LYnLFxuICAgIGxpbms6ICcjJyxcbiAgICBpY29uOiAnPHN2ZyB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiB2aWV3Qm94PVwiMCAwIDMwIDMwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIwIDRIOUM4LjIwNDM1IDQgNy40NDEyOSA0LjMxNjA3IDYuODc4NjggNC44Nzg2OEM2LjMxNjA3IDUuNDQxMjkgNiA2LjIwNDM1IDYgN1YyNC44QzYuMDAwNjQgMjUuMjMwMyA2LjI1MjA5IDI1LjYyMDcgNi42NDM1NyAyNS43OTkyQzcuMDM1MDYgMjUuOTc3NyA3LjQ5NDcgMjUuOTExNiA3LjgyIDI1LjYzTDEwLjUgMjMuMzNMMTMuMjkgMjUuNzJDMTMuNjY0OSAyNi4wNDI3IDE0LjIwOTEgMjYuMDc1NCAxNC42MiAyNS44TDE4LjQyIDIzLjI2TDIxLjE4IDI1LjYzQzIxLjUwNTMgMjUuOTExNiAyMS45NjQ5IDI1Ljk3NzcgMjIuMzU2NCAyNS43OTkyQzIyLjc0NzkgMjUuNjIwNyAyMi45OTk0IDI1LjIzMDMgMjMgMjQuOFY3QzIzIDUuMzQzMTUgMjEuNjU2OSA0IDIwIDRaTTkuNzggMjEuM0w4IDIyLjgzVjdDOCA2LjQ0NzcyIDguNDQ3NzEgNiA5IDZIMjBDMjAuNTUyMyA2IDIxIDYuNDQ3NzIgMjEgN1YyMi44NEwxOS4yMSAyMS4yOUMxOC44MzM3IDIwLjk3MDYgMTguMjkxOCAyMC45MzggMTcuODggMjEuMjFMMTQuMDggMjMuNzVMMTEuMjIgMjEuM0MxMC44MDM2IDIwLjk1MDUgMTAuMTk2NCAyMC45NTA1IDkuNzggMjEuM1pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yMCA0SDlDOC4yMDQzNSA0IDcuNDQxMjkgNC4zMTYwNyA2Ljg3ODY4IDQuODc4NjhDNi4zMTYwNyA1LjQ0MTI5IDYgNi4yMDQzNSA2IDdWMjQuOEM2LjAwMDY0IDI1LjIzMDMgNi4yNTIwOSAyNS42MjA3IDYuNjQzNTcgMjUuNzk5MkM3LjAzNTA2IDI1Ljk3NzcgNy40OTQ3IDI1LjkxMTYgNy44MiAyNS42M0wxMC41IDIzLjMzTDEzLjI5IDI1LjcyQzEzLjY2NDkgMjYuMDQyNyAxNC4yMDkxIDI2LjA3NTQgMTQuNjIgMjUuOEwxOC40MiAyMy4yNkwyMS4xOCAyNS42M0MyMS41MDUzIDI1LjkxMTYgMjEuOTY0OSAyNS45Nzc3IDIyLjM1NjQgMjUuNzk5MkMyMi43NDc5IDI1LjYyMDcgMjIuOTk5NCAyNS4yMzAzIDIzIDI0LjhWN0MyMyA1LjM0MzE1IDIxLjY1NjkgNCAyMCA0Wk05Ljc4IDIxLjNMOCAyMi44M1Y3QzggNi40NDc3MiA4LjQ0NzcxIDYgOSA2SDIwQzIwLjU1MjMgNiAyMSA2LjQ0NzcyIDIxIDdWMjIuODRMMTkuMjEgMjEuMjlDMTguODMzNyAyMC45NzA2IDE4LjI5MTggMjAuOTM4IDE3Ljg4IDIxLjIxTDE0LjA4IDIzLjc1TDExLjIyIDIxLjNDMTAuODAzNiAyMC45NTA1IDEwLjE5NjQgMjAuOTUwNSA5Ljc4IDIxLjNaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48cGF0aCBkPVwiTTE5IDEwSDEyQzExLjQ0NzcgMTAgMTEgOS41NTIyOCAxMSA5QzExIDguNDQ3NzIgMTEuNDQ3NyA4IDEyIDhIMTlDMTkuNTUyMyA4IDIwIDguNDQ3NzIgMjAgOUMyMCA5LjU1MjI4IDE5LjU1MjMgMTAgMTkgMTBaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48cGF0aCBkPVwiTTE5IDEwSDEyQzExLjQ0NzcgMTAgMTEgOS41NTIyOCAxMSA5QzExIDguNDQ3NzIgMTEuNDQ3NyA4IDEyIDhIMTlDMTkuNTUyMyA4IDIwIDguNDQ3NzIgMjAgOUMyMCA5LjU1MjI4IDE5LjU1MjMgMTAgMTkgMTBaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48cGF0aCBkPVwiTTE5IDE0SDE1QzE0LjQ0NzcgMTQgMTQgMTMuNTUyMyAxNCAxM0MxNCAxMi40NDc3IDE0LjQ0NzcgMTIgMTUgMTJIMTlDMTkuNTUyMyAxMiAyMCAxMi40NDc3IDIwIDEzQzIwIDEzLjU1MjMgMTkuNTUyMyAxNCAxOSAxNFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjxwYXRoIGQ9XCJNMTkgMTRIMTVDMTQuNDQ3NyAxNCAxNCAxMy41NTIzIDE0IDEzQzE0IDEyLjQ0NzcgMTQuNDQ3NyAxMiAxNSAxMkgxOUMxOS41NTIzIDEyIDIwIDEyLjQ0NzcgMjAgMTNDMjAgMTMuNTUyMyAxOS41NTIzIDE0IDE5IDE0WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PHBhdGggZD1cIk0xMSAxNkgxOUMxOS41NTIzIDE2IDIwIDE2LjQ0NzcgMjAgMTdDMjAgMTcuNTUyMyAxOS41NTIzIDE4IDE5IDE4SDExQzEwLjQ0NzcgMTggMTAgMTcuNTUyMyAxMCAxN0MxMCAxNi40NDc3IDEwLjQ0NzcgMTYgMTEgMTZaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48cGF0aCBkPVwiTTExIDE2SDE5QzE5LjU1MjMgMTYgMjAgMTYuNDQ3NyAyMCAxN0MyMCAxNy41NTIzIDE5LjU1MjMgMTggMTkgMThIMTFDMTAuNDQ3NyAxOCAxMCAxNy41NTIzIDEwIDE3QzEwIDE2LjQ0NzcgMTAuNDQ3NyAxNiAxMSAxNlpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjwvc3ZnPidcbiAgfSxcbl1cblxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmF2cGluXFxcIlxcdTAwM0VcIjtcbi8vIGl0ZXJhdGUgbmF2TGlua3NcbjsoZnVuY3Rpb24oKXtcbiAgdmFyICQkb2JqID0gbmF2TGlua3M7XG4gIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgJCRvYmoubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBwdWdfaW5kZXgxMiA9IDAsICQkbCA9ICQkb2JqLmxlbmd0aDsgcHVnX2luZGV4MTIgPCAkJGw7IHB1Z19pbmRleDEyKyspIHtcbiAgICAgICAgdmFyIGl0ZW0gPSAkJG9ialtwdWdfaW5kZXgxMl07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDYVwiICsgKFwiIGNsYXNzPVxcXCJuYXZwaW4taXRlbSBtdC1bMzBweF0gZmlyc3Qtb2YtdHlwZTptdC0wIDN4bDptdC00XFxcIlwiK3B1Zy5hdHRyKFwiaHJlZlwiLCBpdGVtLmxpbmssIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm5hdnBpbi1wbGF0ZVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2xpbmstcGluLXBsYXRlLnN2ZycsICduYXZwaW4tcGxhdGUtcGljJywgJ2RvdHMnKTtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnZG90cy0xLnN2ZycsICduYXZwaW4tcGxhdGVfX2RvdHMtMScsICdkb3RzJyk7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2RvdHMtMS5zdmcnLCAnbmF2cGluLXBsYXRlX19kb3RzLTInLCAnZG90cycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmF2cGluLXBsYXRlLWljb25cXFwiXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBpdGVtLmljb24pID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJuYXZwaW4tdGV4dCB0ZXh0LXNtIHVwcGVyY2FzZSBtbC03IDN4bDp0ZXh0LXhzIDN4bDptbC00IHhsOm1sLTIgeGw6dGV4dC1bMTBweF0gbGc6dGV4dC14c1xcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS5sYWJlbCkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXCI7XG4gICAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyICQkbCA9IDA7XG4gICAgZm9yICh2YXIgcHVnX2luZGV4MTIgaW4gJCRvYmopIHtcbiAgICAgICQkbCsrO1xuICAgICAgdmFyIGl0ZW0gPSAkJG9ialtwdWdfaW5kZXgxMl07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDYVwiICsgKFwiIGNsYXNzPVxcXCJuYXZwaW4taXRlbSBtdC1bMzBweF0gZmlyc3Qtb2YtdHlwZTptdC0wIDN4bDptdC00XFxcIlwiK3B1Zy5hdHRyKFwiaHJlZlwiLCBpdGVtLmxpbmssIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm5hdnBpbi1wbGF0ZVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2xpbmstcGluLXBsYXRlLnN2ZycsICduYXZwaW4tcGxhdGUtcGljJywgJ2RvdHMnKTtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnZG90cy0xLnN2ZycsICduYXZwaW4tcGxhdGVfX2RvdHMtMScsICdkb3RzJyk7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2RvdHMtMS5zdmcnLCAnbmF2cGluLXBsYXRlX19kb3RzLTInLCAnZG90cycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmF2cGluLXBsYXRlLWljb25cXFwiXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBpdGVtLmljb24pID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJuYXZwaW4tdGV4dCB0ZXh0LXNtIHVwcGVyY2FzZSBtbC03IDN4bDp0ZXh0LXhzIDN4bDptbC00IHhsOm1sLTIgeGw6dGV4dC1bMTBweF0gbGc6dGV4dC14c1xcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS5sYWJlbCkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXCI7XG4gICAgfVxuICB9XG59KS5jYWxsKHRoaXMpO1xuXG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmJvZHlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZodG1sXFx1MDAzRVwiO30uY2FsbCh0aGlzLFwiYm9keU5vU2Nyb2xsXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5ib2R5Tm9TY3JvbGw6dHlwZW9mIGJvZHlOb1Njcm9sbCE9PVwidW5kZWZpbmVkXCI/Ym9keU5vU2Nyb2xsOnVuZGVmaW5lZCxcImlzR2FtZU5vdFNlbGVjdGVkXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5pc0dhbWVOb3RTZWxlY3RlZDp0eXBlb2YgaXNHYW1lTm90U2VsZWN0ZWQhPT1cInVuZGVmaW5lZFwiP2lzR2FtZU5vdFNlbGVjdGVkOnVuZGVmaW5lZCxcInBhZ2VNb2RpZmljYXRvclwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgucGFnZU1vZGlmaWNhdG9yOnR5cGVvZiBwYWdlTW9kaWZpY2F0b3IhPT1cInVuZGVmaW5lZFwiP3BhZ2VNb2RpZmljYXRvcjp1bmRlZmluZWQsXCJwYWdlVGl0bGVcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLnBhZ2VUaXRsZTp0eXBlb2YgcGFnZVRpdGxlIT09XCJ1bmRlZmluZWRcIj9wYWdlVGl0bGU6dW5kZWZpbmVkKSk7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBwdWdfaGFzX293bl9wcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogTWVyZ2UgdHdvIGF0dHJpYnV0ZSBvYmplY3RzIGdpdmluZyBwcmVjZWRlbmNlXG4gKiB0byB2YWx1ZXMgaW4gb2JqZWN0IGBiYC4gQ2xhc3NlcyBhcmUgc3BlY2lhbC1jYXNlZFxuICogYWxsb3dpbmcgZm9yIGFycmF5cyBhbmQgbWVyZ2luZy9qb2luaW5nIGFwcHJvcHJpYXRlbHlcbiAqIHJlc3VsdGluZyBpbiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtPYmplY3R9IGJcbiAqIEByZXR1cm4ge09iamVjdH0gYVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5tZXJnZSA9IHB1Z19tZXJnZTtcbmZ1bmN0aW9uIHB1Z19tZXJnZShhLCBiKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIGF0dHJzID0gYVswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGF0dHJzID0gcHVnX21lcmdlKGF0dHJzLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJzO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoa2V5ID09PSAnY2xhc3MnKSB7XG4gICAgICB2YXIgdmFsQSA9IGFba2V5XSB8fCBbXTtcbiAgICAgIGFba2V5XSA9IChBcnJheS5pc0FycmF5KHZhbEEpID8gdmFsQSA6IFt2YWxBXSkuY29uY2F0KGJba2V5XSB8fCBbXSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgIHZhciB2YWxBID0gcHVnX3N0eWxlKGFba2V5XSk7XG4gICAgICB2YWxBID0gdmFsQSAmJiB2YWxBW3ZhbEEubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEEgKyAnOycgOiB2YWxBO1xuICAgICAgdmFyIHZhbEIgPSBwdWdfc3R5bGUoYltrZXldKTtcbiAgICAgIHZhbEIgPSB2YWxCICYmIHZhbEJbdmFsQi5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQiArICc7JyA6IHZhbEI7XG4gICAgICBhW2tleV0gPSB2YWxBICsgdmFsQjtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gYltrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhO1xufTtcblxuLyoqXG4gKiBQcm9jZXNzIGFycmF5LCBvYmplY3QsIG9yIHN0cmluZyBhcyBhIHN0cmluZyBvZiBjbGFzc2VzIGRlbGltaXRlZCBieSBhIHNwYWNlLlxuICpcbiAqIElmIGB2YWxgIGlzIGFuIGFycmF5LCBhbGwgbWVtYmVycyBvZiBpdCBhbmQgaXRzIHN1YmFycmF5cyBhcmUgY291bnRlZCBhc1xuICogY2xhc3Nlcy4gSWYgYGVzY2FwaW5nYCBpcyBhbiBhcnJheSwgdGhlbiB3aGV0aGVyIG9yIG5vdCB0aGUgaXRlbSBpbiBgdmFsYCBpc1xuICogZXNjYXBlZCBkZXBlbmRzIG9uIHRoZSBjb3JyZXNwb25kaW5nIGl0ZW0gaW4gYGVzY2FwaW5nYC4gSWYgYGVzY2FwaW5nYCBpc1xuICogbm90IGFuIGFycmF5LCBubyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIElmIGB2YWxgIGlzIGFuIG9iamVjdCwgYWxsIHRoZSBrZXlzIHdob3NlIHZhbHVlIGlzIHRydXRoeSBhcmUgY291bnRlZCBhc1xuICogY2xhc3Nlcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhIHN0cmluZywgaXQgaXMgY291bnRlZCBhcyBhIGNsYXNzLiBObyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIEBwYXJhbSB7KEFycmF5LjxzdHJpbmc+fE9iamVjdC48c3RyaW5nLCBib29sZWFuPnxzdHJpbmcpfSB2YWxcbiAqIEBwYXJhbSB7P0FycmF5LjxzdHJpbmc+fSBlc2NhcGluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmNsYXNzZXMgPSBwdWdfY2xhc3NlcztcbmZ1bmN0aW9uIHB1Z19jbGFzc2VzX2FycmF5KHZhbCwgZXNjYXBpbmcpIHtcbiAgdmFyIGNsYXNzU3RyaW5nID0gJycsIGNsYXNzTmFtZSwgcGFkZGluZyA9ICcnLCBlc2NhcGVFbmFibGVkID0gQXJyYXkuaXNBcnJheShlc2NhcGluZyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgY2xhc3NOYW1lID0gcHVnX2NsYXNzZXModmFsW2ldKTtcbiAgICBpZiAoIWNsYXNzTmFtZSkgY29udGludWU7XG4gICAgZXNjYXBlRW5hYmxlZCAmJiBlc2NhcGluZ1tpXSAmJiAoY2xhc3NOYW1lID0gcHVnX2VzY2FwZShjbGFzc05hbWUpKTtcbiAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGNsYXNzTmFtZTtcbiAgICBwYWRkaW5nID0gJyAnO1xuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzX29iamVjdCh2YWwpIHtcbiAgdmFyIGNsYXNzU3RyaW5nID0gJycsIHBhZGRpbmcgPSAnJztcbiAgZm9yICh2YXIga2V5IGluIHZhbCkge1xuICAgIGlmIChrZXkgJiYgdmFsW2tleV0gJiYgcHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIGtleSkpIHtcbiAgICAgIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgKyBwYWRkaW5nICsga2V5O1xuICAgICAgcGFkZGluZyA9ICcgJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNsYXNzU3RyaW5nO1xufVxuZnVuY3Rpb24gcHVnX2NsYXNzZXModmFsLCBlc2NhcGluZykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuIHB1Z19jbGFzc2VzX2FycmF5KHZhbCwgZXNjYXBpbmcpO1xuICB9IGVsc2UgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsIHx8ICcnO1xuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBvYmplY3Qgb3Igc3RyaW5nIHRvIGEgc3RyaW5nIG9mIENTUyBzdHlsZXMgZGVsaW1pdGVkIGJ5IGEgc2VtaWNvbG9uLlxuICpcbiAqIEBwYXJhbSB7KE9iamVjdC48c3RyaW5nLCBzdHJpbmc+fHN0cmluZyl9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMuc3R5bGUgPSBwdWdfc3R5bGU7XG5mdW5jdGlvbiBwdWdfc3R5bGUodmFsKSB7XG4gIGlmICghdmFsKSByZXR1cm4gJyc7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBvdXQgPSAnJztcbiAgICBmb3IgKHZhciBzdHlsZSBpbiB2YWwpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIHN0eWxlKSkge1xuICAgICAgICBvdXQgPSBvdXQgKyBzdHlsZSArICc6JyArIHZhbFtzdHlsZV0gKyAnOyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCArICcnO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXNjYXBlZFxuICogQHBhcmFtIHtCb29sZWFufSB0ZXJzZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHIgPSBwdWdfYXR0cjtcbmZ1bmN0aW9uIHB1Z19hdHRyKGtleSwgdmFsLCBlc2NhcGVkLCB0ZXJzZSkge1xuICBpZiAodmFsID09PSBmYWxzZSB8fCB2YWwgPT0gbnVsbCB8fCAhdmFsICYmIChrZXkgPT09ICdjbGFzcycgfHwga2V5ID09PSAnc3R5bGUnKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgcmV0dXJuICcgJyArICh0ZXJzZSA/IGtleSA6IGtleSArICc9XCInICsga2V5ICsgJ1wiJyk7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAoKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiB2YWwudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFsID0gdmFsLnRvSlNPTigpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEpTT04uc3RyaW5naWZ5KHZhbCk7XG4gICAgaWYgKCFlc2NhcGVkICYmIHZhbC5pbmRleE9mKCdcIicpICE9PSAtMSkge1xuICAgICAgcmV0dXJuICcgJyArIGtleSArICc9XFwnJyArIHZhbC5yZXBsYWNlKC8nL2csICcmIzM5OycpICsgJ1xcJyc7XG4gICAgfVxuICB9XG4gIGlmIChlc2NhcGVkKSB2YWwgPSBwdWdfZXNjYXBlKHZhbCk7XG4gIHJldHVybiAnICcgKyBrZXkgKyAnPVwiJyArIHZhbCArICdcIic7XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtPYmplY3R9IHRlcnNlIHdoZXRoZXIgdG8gdXNlIEhUTUw1IHRlcnNlIGJvb2xlYW4gYXR0cmlidXRlc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHJzID0gcHVnX2F0dHJzO1xuZnVuY3Rpb24gcHVnX2F0dHJzKG9iaiwgdGVyc2Upe1xuICB2YXIgYXR0cnMgPSAnJztcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmICgnY2xhc3MnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX2NsYXNzZXModmFsKTtcbiAgICAgICAgYXR0cnMgPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKSArIGF0dHJzO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICgnc3R5bGUnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX3N0eWxlKHZhbCk7XG4gICAgICB9XG4gICAgICBhdHRycyArPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0cnM7XG59O1xuXG4vKipcbiAqIEVzY2FwZSB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGBodG1sYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHB1Z19tYXRjaF9odG1sID0gL1tcIiY8Pl0vO1xuZXhwb3J0cy5lc2NhcGUgPSBwdWdfZXNjYXBlO1xuZnVuY3Rpb24gcHVnX2VzY2FwZShfaHRtbCl7XG4gIHZhciBodG1sID0gJycgKyBfaHRtbDtcbiAgdmFyIHJlZ2V4UmVzdWx0ID0gcHVnX21hdGNoX2h0bWwuZXhlYyhodG1sKTtcbiAgaWYgKCFyZWdleFJlc3VsdCkgcmV0dXJuIF9odG1sO1xuXG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGksIGxhc3RJbmRleCwgZXNjYXBlO1xuICBmb3IgKGkgPSByZWdleFJlc3VsdC5pbmRleCwgbGFzdEluZGV4ID0gMDsgaSA8IGh0bWwubGVuZ3RoOyBpKyspIHtcbiAgICBzd2l0Y2ggKGh0bWwuY2hhckNvZGVBdChpKSkge1xuICAgICAgY2FzZSAzNDogZXNjYXBlID0gJyZxdW90Oyc7IGJyZWFrO1xuICAgICAgY2FzZSAzODogZXNjYXBlID0gJyZhbXA7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYwOiBlc2NhcGUgPSAnJmx0Oyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MjogZXNjYXBlID0gJyZndDsnOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXN1bHQgKz0gaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICBsYXN0SW5kZXggPSBpICsgMTtcbiAgICByZXN1bHQgKz0gZXNjYXBlO1xuICB9XG4gIGlmIChsYXN0SW5kZXggIT09IGkpIHJldHVybiByZXN1bHQgKyBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICBlbHNlIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlLXRocm93IHRoZSBnaXZlbiBgZXJyYCBpbiBjb250ZXh0IHRvIHRoZVxuICogdGhlIHB1ZyBpbiBgZmlsZW5hbWVgIGF0IHRoZSBnaXZlbiBgbGluZW5vYC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGxpbmVub1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBvcmlnaW5hbCBzb3VyY2VcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmV0aHJvdyA9IHB1Z19yZXRocm93O1xuZnVuY3Rpb24gcHVnX3JldGhyb3coZXJyLCBmaWxlbmFtZSwgbGluZW5vLCBzdHIpe1xuICBpZiAoIShlcnIgaW5zdGFuY2VvZiBFcnJvcikpIHRocm93IGVycjtcbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnIHx8ICFmaWxlbmFtZSkgJiYgIXN0cikge1xuICAgIGVyci5tZXNzYWdlICs9ICcgb24gbGluZSAnICsgbGluZW5vO1xuICAgIHRocm93IGVycjtcbiAgfVxuICB0cnkge1xuICAgIHN0ciA9IHN0ciB8fCByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgJ3V0ZjgnKVxuICB9IGNhdGNoIChleCkge1xuICAgIHB1Z19yZXRocm93KGVyciwgbnVsbCwgbGluZW5vKVxuICB9XG4gIHZhciBjb250ZXh0ID0gM1xuICAgICwgbGluZXMgPSBzdHIuc3BsaXQoJ1xcbicpXG4gICAgLCBzdGFydCA9IE1hdGgubWF4KGxpbmVubyAtIGNvbnRleHQsIDApXG4gICAgLCBlbmQgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIGxpbmVubyArIGNvbnRleHQpO1xuXG4gIC8vIEVycm9yIGNvbnRleHRcbiAgdmFyIGNvbnRleHQgPSBsaW5lcy5zbGljZShzdGFydCwgZW5kKS5tYXAoZnVuY3Rpb24obGluZSwgaSl7XG4gICAgdmFyIGN1cnIgPSBpICsgc3RhcnQgKyAxO1xuICAgIHJldHVybiAoY3VyciA9PSBsaW5lbm8gPyAnICA+ICcgOiAnICAgICcpXG4gICAgICArIGN1cnJcbiAgICAgICsgJ3wgJ1xuICAgICAgKyBsaW5lO1xuICB9KS5qb2luKCdcXG4nKTtcblxuICAvLyBBbHRlciBleGNlcHRpb24gbWVzc2FnZVxuICBlcnIucGF0aCA9IGZpbGVuYW1lO1xuICBlcnIubWVzc2FnZSA9IChmaWxlbmFtZSB8fCAnUHVnJykgKyAnOicgKyBsaW5lbm9cbiAgICArICdcXG4nICsgY29udGV4dCArICdcXG5cXG4nICsgZXJyLm1lc3NhZ2U7XG4gIHRocm93IGVycjtcbn07XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWNoaWV2ZW1lbnRzLWV4YW1wbGUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9hY2hpZXZlbWVudHMtZXhhbXBsZS5wbmdcIixcblx0XCIuL2FjdGlvbnMtc3Rhci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2FjdGlvbnMtc3Rhci5zdmdcIixcblx0XCIuL2F2YXRhci1leGFtcGxlLTEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9hdmF0YXItZXhhbXBsZS0xLnBuZ1wiLFxuXHRcIi4vYXZhdGFyLWV4YW1wbGUtMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2F2YXRhci1leGFtcGxlLTIucG5nXCIsXG5cdFwiLi9hdmF0YXItZXhhbXBsZS0zLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYXZhdGFyLWV4YW1wbGUtMy5wbmdcIixcblx0XCIuL2F2YXRhci1leGFtcGxlLTQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9hdmF0YXItZXhhbXBsZS00LnBuZ1wiLFxuXHRcIi4vYXZhdGFyLWV4YW1wbGUtNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2F2YXRhci1leGFtcGxlLTUucG5nXCIsXG5cdFwiLi9hdmF0YXItZXhhbXBsZS1ib3QucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9hdmF0YXItZXhhbXBsZS1ib3QucG5nXCIsXG5cdFwiLi9iYW5uZXItYmctMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Jhbm5lci1iZy0xLnBuZ1wiLFxuXHRcIi4vY2FyZC1maW5kLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2FyZC1maW5kLnBuZ1wiLFxuXHRcIi4vY2FzZS1ibHVlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2FzZS1ibHVlLnBuZ1wiLFxuXHRcIi4vY2FzZS1jYXJkLWJnLWJsdWUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jYXNlLWNhcmQtYmctYmx1ZS5wbmdcIixcblx0XCIuL2Nhc2UtY2FyZC1iZy1nb2xkLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2FzZS1jYXJkLWJnLWdvbGQucG5nXCIsXG5cdFwiLi9jYXNlLWNhcmQtYmctcGluay5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Nhc2UtY2FyZC1iZy1waW5rLnBuZ1wiLFxuXHRcIi4vY2FzZS1nb2xkLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2FzZS1nb2xkLnBuZ1wiLFxuXHRcIi4vY2FzZS1pdGVtLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2FzZS1pdGVtLnBuZ1wiLFxuXHRcIi4vY2FzZS1waW5rLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2FzZS1waW5rLnBuZ1wiLFxuXHRcIi4vY2FzZS1yb3VsZXR0ZS1wb2ludC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Nhc2Utcm91bGV0dGUtcG9pbnQuc3ZnXCIsXG5cdFwiLi9jYXNlLXZpb2xldC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Nhc2UtdmlvbGV0LnBuZ1wiLFxuXHRcIi4vZGVhbC1pdGVtLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVhbC1pdGVtLnBuZ1wiLFxuXHRcIi4vZG90cy0xLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZG90cy0xLnN2Z1wiLFxuXHRcIi4vZWNsaXBzZS1zZXBlcmF0b3Iuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9lY2xpcHNlLXNlcGVyYXRvci5zdmdcIixcblx0XCIuL2Zhdmljb24ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZ1wiLFxuXHRcIi4vZ2FtZS1jYXJkLWJnLWNzZ28ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9nYW1lLWNhcmQtYmctY3Nnby5wbmdcIixcblx0XCIuL2dhbWUtY2FyZC1iZy1kb3RhMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2dhbWUtY2FyZC1iZy1kb3RhMi5wbmdcIixcblx0XCIuL2dhbWUtY2FyZC1iZy1mb3J0bml0ZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2dhbWUtY2FyZC1iZy1mb3J0bml0ZS5wbmdcIixcblx0XCIuL2dhbWUtY2FyZC1iZy1ndGE1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZ2FtZS1jYXJkLWJnLWd0YTUucG5nXCIsXG5cdFwiLi9nYW1lLWNhcmQtYmctd2FyZmFjZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2dhbWUtY2FyZC1iZy13YXJmYWNlLnBuZ1wiLFxuXHRcIi4vZ2FtZS1jYXJkLWJnLXdvdC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2dhbWUtY2FyZC1iZy13b3QucG5nXCIsXG5cdFwiLi9naXZlYXdheS1pdGVtLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZ2l2ZWF3YXktaXRlbS5wbmdcIixcblx0XCIuL2hlYWRlci1zaGFwZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2hlYWRlci1zaGFwZS5zdmdcIixcblx0XCIuL2ljb24tYWRkLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1hZGQuc3ZnXCIsXG5cdFwiLi9pY29uLWFsYXJtLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1hbGFybS5zdmdcIixcblx0XCIuL2ljb24tYXJyb3ctYW5nbGUtZG93bi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tYXJyb3ctYW5nbGUtZG93bi5zdmdcIixcblx0XCIuL2ljb24tYXJyb3ctYW5nbGUtbGVmdC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tYXJyb3ctYW5nbGUtbGVmdC5zdmdcIixcblx0XCIuL2ljb24tYXJyb3ctYW5nbGUtcmlnaHQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWFycm93LWFuZ2xlLXJpZ2h0LnN2Z1wiLFxuXHRcIi4vaWNvbi1hcnJvdy1sZWZ0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1hcnJvdy1sZWZ0LnN2Z1wiLFxuXHRcIi4vaWNvbi1hcnJvdy1yaWdodC0yLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1hcnJvdy1yaWdodC0yLnN2Z1wiLFxuXHRcIi4vaWNvbi1hcnJvdy1yaWdodC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tYXJyb3ctcmlnaHQuc3ZnXCIsXG5cdFwiLi9pY29uLWFycm93LXRvcC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tYXJyb3ctdG9wLnN2Z1wiLFxuXHRcIi4vaWNvbi1idXkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWJ1eS5zdmdcIixcblx0XCIuL2ljb24tY2FtZXJhLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1jYW1lcmEuc3ZnXCIsXG5cdFwiLi9pY29uLWNhcmRzLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1jYXJkcy5zdmdcIixcblx0XCIuL2ljb24tY2hhdC1tZXNzYWdlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1jaGF0LW1lc3NhZ2Uuc3ZnXCIsXG5cdFwiLi9pY29uLWNoYXRzLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1jaGF0cy5zdmdcIixcblx0XCIuL2ljb24tY2hlY2stcHJpbWFyeS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tY2hlY2stcHJpbWFyeS5zdmdcIixcblx0XCIuL2ljb24tY2xvc2Uuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWNsb3NlLnN2Z1wiLFxuXHRcIi4vaWNvbi1jb21wYXJhdGlvbi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tY29tcGFyYXRpb24uc3ZnXCIsXG5cdFwiLi9pY29uLWNvcHkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWNvcHkuc3ZnXCIsXG5cdFwiLi9pY29uLWNzZ28ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWNzZ28ucG5nXCIsXG5cdFwiLi9pY29uLWRlbGl2ZXJ5LXNlY29uZGFyeS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tZGVsaXZlcnktc2Vjb25kYXJ5LnN2Z1wiLFxuXHRcIi4vaWNvbi1kaXNjb3JkLWdyZXkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWRpc2NvcmQtZ3JleS5zdmdcIixcblx0XCIuL2ljb24tZG90YTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWRvdGEyLnBuZ1wiLFxuXHRcIi4vaWNvbi1kb3RzLTEuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWRvdHMtMS5zdmdcIixcblx0XCIuL2ljb24tZG90cy0yLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1kb3RzLTIuc3ZnXCIsXG5cdFwiLi9pY29uLWVkaXQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWVkaXQuc3ZnXCIsXG5cdFwiLi9pY29uLWV5ZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tZXllLnN2Z1wiLFxuXHRcIi4vaWNvbi1maWx0ZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWZpbHRlci5zdmdcIixcblx0XCIuL2ljb24tZm9ydG5pdGUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWZvcnRuaXRlLnBuZ1wiLFxuXHRcIi4vaWNvbi1nYW1lLXJhbmstMS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tZ2FtZS1yYW5rLTEuc3ZnXCIsXG5cdFwiLi9pY29uLWdpZnQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWdpZnQuc3ZnXCIsXG5cdFwiLi9pY29uLWd0YTUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWd0YTUucG5nXCIsXG5cdFwiLi9pY29uLWhlYWRwaG9uZXMtc2Vjb25kYXJ5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1oZWFkcGhvbmVzLXNlY29uZGFyeS5zdmdcIixcblx0XCIuL2ljb24taGVhZHBob25lcy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24taGVhZHBob25lcy5zdmdcIixcblx0XCIuL2ljb24taW5zdC1ncmV5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1pbnN0LWdyZXkuc3ZnXCIsXG5cdFwiLi9pY29uLWxpZ2h0bmluZy1wcmltYXJ5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1saWdodG5pbmctcHJpbWFyeS5zdmdcIixcblx0XCIuL2ljb24tbGlrZS1maWxsLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1saWtlLWZpbGwuc3ZnXCIsXG5cdFwiLi9pY29uLWxpa2Utb3V0bGluZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tbGlrZS1vdXRsaW5lLnN2Z1wiLFxuXHRcIi4vaWNvbi1saWtlLXNlY29uZGFyeS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tbGlrZS1zZWNvbmRhcnkuc3ZnXCIsXG5cdFwiLi9pY29uLWxpa2Uuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWxpa2Uuc3ZnXCIsXG5cdFwiLi9pY29uLWxpc3Quc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWxpc3Quc3ZnXCIsXG5cdFwiLi9pY29uLWxvY2stcHJpbWFyeS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tbG9jay1wcmltYXJ5LnN2Z1wiLFxuXHRcIi4vaWNvbi1uZXdzcGFwZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLW5ld3NwYXBlci5zdmdcIixcblx0XCIuL2ljb24tcGxheS12aWRlby5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tcGxheS12aWRlby5zdmdcIixcblx0XCIuL2ljb24tcGx1cy1ibHVlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1wbHVzLWJsdWUuc3ZnXCIsXG5cdFwiLi9pY29uLXF1ZXN0aW9uLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1xdWVzdGlvbi5zdmdcIixcblx0XCIuL2ljb24tc2VhcmNoLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1zZWFyY2guc3ZnXCIsXG5cdFwiLi9pY29uLXNlbmQtZW5kLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1zZW5kLWVuZC5zdmdcIixcblx0XCIuL2ljb24tc2VuZC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tc2VuZC5zdmdcIixcblx0XCIuL2ljb24tc2hvcHBpbmctYm94LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1zaG9wcGluZy1ib3guc3ZnXCIsXG5cdFwiLi9pY29uLXNob3BwaW5nLWNhcmQtZ3JhZGllbnQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLXNob3BwaW5nLWNhcmQtZ3JhZGllbnQuc3ZnXCIsXG5cdFwiLi9pY29uLXNob3BwaW5nLWNhcnQtMi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tc2hvcHBpbmctY2FydC0yLnN2Z1wiLFxuXHRcIi4vaWNvbi1zaG9wcGluZy1jYXJ0LTMuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLXNob3BwaW5nLWNhcnQtMy5zdmdcIixcblx0XCIuL2ljb24tc2hvcHBpbmctY2FydC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tc2hvcHBpbmctY2FydC5zdmdcIixcblx0XCIuL2ljb24tc3Rhci15ZWxsb3cuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLXN0YXIteWVsbG93LnN2Z1wiLFxuXHRcIi4vaWNvbi11c2VyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi11c2VyLnN2Z1wiLFxuXHRcIi4vaWNvbi12ay1ncmV5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi12ay1ncmV5LnN2Z1wiLFxuXHRcIi4vaWNvbi13YWxsZXQtc2Vjb25kYXJ5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi13YWxsZXQtc2Vjb25kYXJ5LnN2Z1wiLFxuXHRcIi4vaWNvbi13YXJmYWNlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi13YXJmYWNlLnBuZ1wiLFxuXHRcIi4vaWNvbi13b3QucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLXdvdC5wbmdcIixcblx0XCIuL2ljb24teXQtZ3JleS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24teXQtZ3JleS5zdmdcIixcblx0XCIuL2xpbmstcGluLXBsYXRlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGluay1waW4tcGxhdGUuc3ZnXCIsXG5cdFwiLi9sb2dvLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmdcIixcblx0XCIuL21lc3NhZ2UtZGVhbC1pdGVtLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbWVzc2FnZS1kZWFsLWl0ZW0ucG5nXCIsXG5cdFwiLi9vYy1kcnVtLWl0ZW0uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9vYy1kcnVtLWl0ZW0uc3ZnXCIsXG5cdFwiLi9vY2QtYmctMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL29jZC1iZy0xLnBuZ1wiLFxuXHRcIi4vb2NkLWJnLTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9vY2QtYmctMi5wbmdcIixcblx0XCIuL3Byb2R1Y3QtcHJldmlldy0xLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcHJvZHVjdC1wcmV2aWV3LTEucG5nXCIsXG5cdFwiLi9yYWZmbGUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9yYWZmbGUucG5nXCIsXG5cdFwiLi92ay1pY29uLXdoaXRlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdmstaWNvbi13aGl0ZS5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==