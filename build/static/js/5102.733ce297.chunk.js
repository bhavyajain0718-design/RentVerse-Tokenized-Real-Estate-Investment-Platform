"use strict";(globalThis.webpackChunkRentVerse=globalThis.webpackChunkRentVerse||[]).push([[5102],{5102(e,t,r){r.r(t),r.d(t,{AppKitModal:()=>Ur,W3mListWallet:()=>Lr,W3mModal:()=>Or,W3mModalBase:()=>Wr,W3mRouterContainer:()=>Zr,W3mUsageExceededView:()=>Mr});var i=r(7022),o=r(8117),n=r(6440),a=r(1786),s=r(6132),c=r(4451),l=r(5015),u=r(6496),d=r(1139),p=r(4274),h=r(3237);const m={isUnsupportedChainView:()=>"UnsupportedChain"===d.I.state.view||"SwitchNetwork"===d.I.state.view&&d.I.state.history.includes("UnsupportedChain"),async safeClose(){if(this.isUnsupportedChainView())return void s.W.shake();await h.U.isSIWXCloseDisabled()?s.W.shake():("DataCapture"!==d.I.state.view&&"DataCaptureOtpConfirm"!==d.I.state.view||p.x.disconnect(),s.W.close())}};var w=r(6141),g=r(7258),y=r(4551),f=r(4463),b=r(268),v=r(883),k=r(9979),x=r(6609),S=r(205),T=r(9351),A=r(4657),P=r(3801);const I={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,r){const i=I.getGasPriceInEther(t,r);return b.S.bigNumber(e).times(i).toNumber()},getPriceImpact(e){let{sourceTokenAmount:t,sourceTokenPriceInUSD:r,toTokenPriceInUSD:i,toTokenAmount:o}=e;const n=b.S.bigNumber(t).times(r),a=b.S.bigNumber(o).times(i);return n.minus(a).div(n).times(100).toNumber()},getMaxSlippage(e,t){const r=b.S.bigNumber(e).div(100);return b.S.multiply(t,r).toNumber()},getProviderFee(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.0085;return b.S.bigNumber(e).times(t).toString()},isInsufficientNetworkTokenForGas(e,t){const r=t||"0";return!!b.S.bigNumber(e).eq(0)||b.S.bigNumber(b.S.bigNumber(r)).gt(e)},isInsufficientSourceTokenForSwap(e,t,r){const i=r?.find(e=>e.address===t)?.quantity?.numeric;return b.S.bigNumber(i||"0").lt(e)}};var C=r(8882),$=r(3542),E=r(5618),N=r(9323);const R=15e4;Error;const q={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,switchingTokens:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:T.oU.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},W=(0,y.BX)({...q}),O={state:W,subscribe:e=>(0,y.B1)(W,()=>e(W)),subscribeKey:(e,t)=>(0,f.u$)(W,e,t),getParams(){const e=c.W.state.activeChain,t=c.W.getAccountData(e)?.caipAddress??c.W.state.activeCaipAddress,r=A.w.getPlainAddress(t),i=(0,S.K1)(),o=l.a.getConnectorId(c.W.state.activeChain);if(!r)throw new Error("No address found to swap the tokens from.");const n=!W.toToken?.address||!W.toToken?.decimals,a=!W.sourceToken?.address||!W.sourceToken?.decimals||!b.S.bigNumber(W.sourceTokenAmount).gt(0),s=!W.sourceTokenAmount;return{networkAddress:i,fromAddress:r,fromCaipAddress:t,sourceTokenAddress:W.sourceToken?.address,toTokenAddress:W.toToken?.address,toTokenAmount:W.toTokenAmount,toTokenDecimals:W.toToken?.decimals,sourceTokenAmount:W.sourceTokenAmount,sourceTokenDecimals:W.sourceToken?.decimals,invalidToToken:n,invalidSourceToken:a,invalidSourceTokenAmount:s,availableToSwap:t&&!n&&!a&&!s,isAuthConnector:o===v.o.CONNECTOR_ID.AUTH}},async setSourceToken(e){if(!e)return W.sourceToken=e,W.sourceTokenAmount="",void(W.sourceTokenPriceInUSD=0);W.sourceToken=e,await U.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){W.sourceTokenAmount=e},async setToToken(e){if(!e)return W.toToken=e,W.toTokenAmount="",void(W.toTokenPriceInUSD=0);W.toToken=e,await U.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){W.toTokenAmount=e?b.S.toFixed(e,6):""},async setTokenPrice(e,t){let r=W.tokensPriceMap[e]||0;r||(W.loadingPrices=!0,r=await U.getAddressPrice(e)),"sourceToken"===t?W.sourceTokenPriceInUSD=r:"toToken"===t&&(W.toTokenPriceInUSD=r),W.loadingPrices&&(W.loadingPrices=!1),U.getParams().availableToSwap&&!W.switchingTokens&&U.swapTokens()},async switchTokens(){if(!W.initializing&&W.initialized&&!W.switchingTokens){W.switchingTokens=!0;try{const e=W.toToken?{...W.toToken}:void 0,t=W.sourceToken?{...W.sourceToken}:void 0,r=e&&""===W.toTokenAmount?"1":W.toTokenAmount;U.setSourceTokenAmount(r),U.setToTokenAmount(""),await U.setSourceToken(e),await U.setToToken(t),W.switchingTokens=!1,U.swapTokens()}catch(e){throw W.switchingTokens=!1,e}}},resetState(){W.myTokensWithBalance=q.myTokensWithBalance,W.tokensPriceMap=q.tokensPriceMap,W.initialized=q.initialized,W.initializing=q.initializing,W.switchingTokens=q.switchingTokens,W.sourceToken=q.sourceToken,W.sourceTokenAmount=q.sourceTokenAmount,W.sourceTokenPriceInUSD=q.sourceTokenPriceInUSD,W.toToken=q.toToken,W.toTokenAmount=q.toTokenAmount,W.toTokenPriceInUSD=q.toTokenPriceInUSD,W.networkPrice=q.networkPrice,W.networkTokenSymbol=q.networkTokenSymbol,W.networkBalanceInUSD=q.networkBalanceInUSD,W.inputError=q.inputError},resetValues(){const{networkAddress:e}=U.getParams(),t=W.tokens?.find(t=>t.address===e);U.setSourceToken(t),U.setToToken(void 0)},getApprovalLoadingState:()=>W.loadingApprovalTransaction,clearError(){W.transactionError=void 0},async initializeState(){if(!W.initializing){if(W.initializing=!0,!W.initialized)try{await U.fetchTokens(),W.initialized=!0}catch(e){W.initialized=!1,g.P.showError("Failed to initialize swap"),d.I.goBack()}W.initializing=!1}},async fetchTokens(){const{networkAddress:e}=U.getParams();await U.getNetworkTokenPrice(),await U.getMyTokensWithBalance();const t=W.myTokensWithBalance?.find(t=>t.address===e);t&&(W.networkTokenSymbol=t.symbol,U.setSourceToken(t),U.setSourceTokenAmount("0"))},async getTokenList(){const e=c.W.state.activeCaipNetwork?.caipNetworkId;if(W.caipNetworkId!==e||!W.tokens)try{W.tokensLoading=!0;const t=await P.s.getTokenList(e);W.tokens=t,W.caipNetworkId=e,W.popularTokens=t.sort((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0);const r=(e&&T.oU.SUGGESTED_TOKENS_BY_CHAIN?.[e]||[]).map(e=>t.find(t=>t.symbol===e)).filter(e=>Boolean(e)),i=(T.oU.SWAP_SUGGESTED_TOKENS||[]).map(e=>t.find(t=>t.symbol===e)).filter(e=>Boolean(e)).filter(e=>!r.some(t=>t.address===e.address));W.suggestedTokens=[...r,...i]}catch(t){W.tokens=[],W.popularTokens=[],W.suggestedTokens=[]}finally{W.tokensLoading=!1}},async getAddressPrice(e){const t=W.tokensPriceMap[e];if(t)return t;const r=await E.T.fetchTokenPrice({addresses:[e]}),i=r?.fungibles||[],o=[...W.tokens||[],...W.myTokensWithBalance||[]],n=o?.find(t=>t.address===e)?.symbol,a=i.find(e=>e.symbol.toLowerCase()===n?.toLowerCase())?.price||0,s=parseFloat(a.toString());return W.tokensPriceMap[e]=s,s},async getNetworkTokenPrice(){const{networkAddress:e}=U.getParams(),t=await E.T.fetchTokenPrice({addresses:[e]}).catch(()=>(g.P.showError("Failed to fetch network token price"),{fungibles:[]})),r=t.fungibles?.[0],i=r?.price.toString()||"0";W.tokensPriceMap[e]=parseFloat(i),W.networkTokenSymbol=r?.symbol||"",W.networkPrice=i},async getMyTokensWithBalance(e){const t=await x.Z.getMyTokensWithBalance({forceUpdate:e,caipNetwork:c.W.state.activeCaipNetwork,address:c.W.getAccountData()?.address}),r=P.s.mapBalancesToSwapTokens(t);r&&(await U.getInitialGasPrice(),U.setBalances(r))},setBalances(e){const{networkAddress:t}=U.getParams(),r=c.W.state.activeCaipNetwork;if(!r)return;const i=e.find(e=>e.address===t);e.forEach(e=>{W.tokensPriceMap[e.address]=e.price||0}),W.myTokensWithBalance=e.filter(e=>e.address.startsWith(r.caipNetworkId)),W.networkBalanceInUSD=i?b.S.multiply(i.quantity.numeric,i.price).toString():"0"},async getInitialGasPrice(){const e=await P.s.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch(c.W.state?.activeCaipNetwork?.chainNamespace){case v.o.CHAIN.SOLANA:return W.gasFee=e.standard??"0",W.gasPriceInUSD=b.S.multiply(e.standard,W.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(W.gasFee),gasPriceInUSD:Number(W.gasPriceInUSD)};case v.o.CHAIN.EVM:default:const t=e.standard??"0",r=BigInt(t),i=BigInt(R),o=I.getGasPriceInUSD(W.networkPrice,i,r);return W.gasFee=t,W.gasPriceInUSD=o,{gasPrice:r,gasPriceInUSD:o}}},async swapTokens(){const e=c.W.getAccountData()?.address,t=W.sourceToken,r=W.toToken,i=b.S.bigNumber(W.sourceTokenAmount).gt(0);if(i||U.setToTokenAmount(""),!r||!t||W.loadingPrices||!i||!e)return;W.loadingQuote=!0;const o=b.S.bigNumber(W.sourceTokenAmount).times(10**t.decimals).round(0).toFixed(0);try{const i=await E.T.fetchSwapQuote({userAddress:e,from:t.address,to:r.address,gasPrice:W.gasFee,amount:o.toString()});W.loadingQuote=!1;const n=i?.quotes?.[0]?.toAmount;if(!n)return void $.h.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");const a=b.S.bigNumber(n).div(10**r.decimals).toString();U.setToTokenAmount(a);U.hasInsufficientToken(W.sourceTokenAmount,t.address)?W.inputError="Insufficient balance":(W.inputError=void 0,U.setTransactionDetails())}catch(n){const e=await P.s.handleSwapError(n);W.loadingQuote=!1,W.inputError=e||"Insufficient balance"}},async getTransaction(){const{fromCaipAddress:e,availableToSwap:t}=U.getParams(),r=W.sourceToken,i=W.toToken;if(e&&t&&r&&i&&!W.loadingQuote)try{W.loadingBuildTransaction=!0;let t;return t=await P.s.fetchSwapAllowance({userAddress:e,tokenAddress:r.address,sourceTokenAmount:W.sourceTokenAmount,sourceTokenDecimals:r.decimals})?await U.createSwapTransaction():await U.createAllowanceTransaction(),W.loadingBuildTransaction=!1,W.fetchError=!1,t}catch(o){return d.I.goBack(),g.P.showError("Failed to check allowance"),W.loadingBuildTransaction=!1,W.approvalTransaction=void 0,W.swapTransaction=void 0,void(W.fetchError=!0)}},async createAllowanceTransaction(){const{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:r}=U.getParams();if(e&&r){if(!t)throw new Error("createAllowanceTransaction - No source token address found.");try{const i=await E.T.generateApproveCalldata({from:t,to:r,userAddress:e}),o=A.w.getPlainAddress(i.tx.from);if(!o)throw new Error("SwapController:createAllowanceTransaction - address is required");const n={data:i.tx.data,to:o,gasPrice:BigInt(i.tx.eip155.gasPrice),value:BigInt(i.tx.value),toAmount:W.toTokenAmount};return W.swapTransaction=void 0,W.approvalTransaction={data:n.data,to:n.to,gasPrice:n.gasPrice,value:n.value,toAmount:n.toAmount},{data:n.data,to:n.to,gasPrice:n.gasPrice,value:n.value,toAmount:n.toAmount}}catch(i){return d.I.goBack(),g.P.showError("Failed to create approval transaction"),W.approvalTransaction=void 0,W.swapTransaction=void 0,void(W.fetchError=!0)}}},async createSwapTransaction(){const{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:r}=U.getParams(),i=W.sourceToken,o=W.toToken;if(!t||!r||!i||!o)return;const n=p.x.parseUnits(r,i.decimals)?.toString();try{const r=await E.T.generateSwapCalldata({userAddress:t,from:i.address,to:o.address,amount:n,disableEstimate:!0}),a=i.address===e,s=BigInt(r.tx.eip155.gas),c=BigInt(r.tx.eip155.gasPrice),l=A.w.getPlainAddress(r.tx.to);if(!l)throw new Error("SwapController:createSwapTransaction - address is required");const u={data:r.tx.data,to:l,gas:s,gasPrice:c,value:a?BigInt(n??"0"):BigInt("0"),toAmount:W.toTokenAmount};return W.gasPriceInUSD=I.getGasPriceInUSD(W.networkPrice,s,c),W.approvalTransaction=void 0,W.swapTransaction=u,u}catch(a){return d.I.goBack(),g.P.showError("Failed to create transaction"),W.approvalTransaction=void 0,W.swapTransaction=void 0,void(W.fetchError=!0)}},onEmbeddedWalletApprovalSuccess(){g.P.showLoading("Approve limit increase in your wallet"),d.I.replace("SwapPreview")},async sendTransactionForApproval(e){const{fromAddress:t,isAuthConnector:r}=U.getParams();W.loadingApprovalTransaction=!0;r?d.I.pushTransactionStack({onSuccess:U.onEmbeddedWalletApprovalSuccess}):g.P.showLoading("Approve limit increase in your wallet");try{await p.x.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:v.o.CHAIN.EVM}),await U.swapTokens(),await U.getTransaction(),W.approvalTransaction=void 0,W.loadingApprovalTransaction=!1}catch(i){const e=i;W.transactionError=e?.displayMessage,W.loadingApprovalTransaction=!1,g.P.showError(e?.displayMessage||"Transaction error"),N.E.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:c.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:U.state.sourceToken?.symbol||"",swapToToken:U.state.toToken?.symbol||"",swapFromAmount:U.state.sourceTokenAmount||"",swapToAmount:U.state.toTokenAmount||"",isSmartAccount:(0,S.lj)(v.o.CHAIN.EVM)===k.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){if(!e)return;const{fromAddress:t,toTokenAmount:r,isAuthConnector:i}=U.getParams();W.loadingTransaction=!0;const o=`Swapping ${W.sourceToken?.symbol} to ${b.S.formatNumberToLocalString(r,3)} ${W.toToken?.symbol}`,n=`Swapped ${W.sourceToken?.symbol} to ${b.S.formatNumberToLocalString(r,3)} ${W.toToken?.symbol}`;i?d.I.pushTransactionStack({onSuccess(){d.I.replace("Account"),g.P.showLoading(o),O.resetState()}}):g.P.showLoading("Confirm transaction in your wallet");try{const r=[W.sourceToken?.address,W.toToken?.address].join(","),o=await p.x.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:v.o.CHAIN.EVM});return W.loadingTransaction=!1,g.P.showSuccess(n),N.E.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:c.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:U.state.sourceToken?.symbol||"",swapToToken:U.state.toToken?.symbol||"",swapFromAmount:U.state.sourceTokenAmount||"",swapToAmount:U.state.toTokenAmount||"",isSmartAccount:(0,S.lj)(v.o.CHAIN.EVM)===k.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),O.resetState(),i||d.I.replace("Account"),O.getMyTokensWithBalance(r),o}catch(a){const e=a;return W.transactionError=e?.displayMessage,W.loadingTransaction=!1,g.P.showError(e?.displayMessage||"Transaction error"),void N.E.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:c.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:U.state.sourceToken?.symbol||"",swapToToken:U.state.toToken?.symbol||"",swapFromAmount:U.state.sourceTokenAmount||"",swapToAmount:U.state.toTokenAmount||"",isSmartAccount:(0,S.lj)(v.o.CHAIN.EVM)===k.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},hasInsufficientToken:(e,t)=>I.isInsufficientSourceTokenForSwap(e,t,W.myTokensWithBalance),setTransactionDetails(){const{toTokenAddress:e,toTokenDecimals:t}=U.getParams();e&&t&&(W.gasPriceInUSD=I.getGasPriceInUSD(W.networkPrice,BigInt(W.gasFee),BigInt(R)),W.priceImpact=I.getPriceImpact({sourceTokenAmount:W.sourceTokenAmount,sourceTokenPriceInUSD:W.sourceTokenPriceInUSD,toTokenPriceInUSD:W.toTokenPriceInUSD,toTokenAmount:W.toTokenAmount}),W.maxSlippage=I.getMaxSlippage(W.slippage,W.toTokenAmount),W.providerFee=I.getProviderFee(W.sourceTokenAmount))}},U=(0,C.X)(O);var D=r(282),z=r(9446),M=r(7845),F=r(9406);const B=F.AH`
  :host {
    display: block;
    border-radius: clamp(0px, ${e=>{let{borderRadius:t}=e;return t[8]}}, 44px);
    box-shadow: 0 0 0 1px ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    overflow: hidden;
  }
`;var j=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let L=class extends i.WF{render(){return i.qy`<slot></slot>`}};L.styles=[z.W5,B],L=j([(0,M.E)("wui-card")],L);r(4107),r(2805),r(7836),r(2574);const _=F.AH`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${e=>{let{spacing:t}=e;return t[2]}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[6]}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
    box-sizing: border-box;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};

      wui-icon {
        color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundSuccess}};

      wui-icon {
        color: ${e=>{let{tokens:t}=e;return t.core.borderSuccess}};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundWarning}};

      wui-icon {
        color: ${e=>{let{tokens:t}=e;return t.core.borderWarning}};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundError}};

      wui-icon {
        color: ${e=>{let{tokens:t}=e;return t.core.borderError}};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
    background-color: var(--local-icon-bg-value);
  }
`;var H=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};const Z={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let V=class extends i.WF{constructor(){super(...arguments),this.message="",this.type="info"}render(){return i.qy`
      <wui-flex
        data-type=${(0,n.J)(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${Z[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){$.h.close()}};V.styles=[z.W5,_],H([(0,o.MZ)()],V.prototype,"message",void 0),H([(0,o.MZ)()],V.prototype,"type",void 0),V=H([(0,M.E)("wui-alertbar")],V);const K=D.AH`
  :host {
    display: block;
    position: absolute;
    top: ${e=>{let{spacing:t}=e;return t[3]}};
    left: ${e=>{let{spacing:t}=e;return t[4]}};
    right: ${e=>{let{spacing:t}=e;return t[4]}};
    opacity: 0;
    pointer-events: none;
  }
`;var Q=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};const G={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let Y=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.open=$.h.state.open,this.onOpen(!0),this.unsubscribe.push($.h.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=$.h.state,r=G[t];return i.qy`
      <wui-alertbar
        message=${e}
        backgroundColor=${r?.backgroundColor}
        iconColor=${r?.iconColor}
        icon=${r?.icon}
        type=${t}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};Y.styles=K,Q([(0,o.wk)()],Y.prototype,"open",void 0),Y=Q([(0,D.EM)("w3m-alertbar")],Y);var J=r(1348),X=r(6596);const ee=F.AH`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.core.iconAccentPrimary}};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.theme.iconInverse}};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
  }

  button[data-type='success'] wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.core.iconSuccess}};
  }

  button[data-type='error'] wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.core.iconError}};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${e=>{let{borderRadius:t}=e;return t[1]}};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[1]}};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.core.foregroundAccent010}};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundSuccess}};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundError}};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent020}};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var te=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let re=class extends i.WF{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return i.qy`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,n.J)(this.iconSize)}></wui-icon>
    </button>`}};re.styles=[z.W5,z.fD,ee],te([(0,o.MZ)()],re.prototype,"icon",void 0),te([(0,o.MZ)()],re.prototype,"variant",void 0),te([(0,o.MZ)()],re.prototype,"type",void 0),te([(0,o.MZ)()],re.prototype,"size",void 0),te([(0,o.MZ)()],re.prototype,"iconSize",void 0),te([(0,o.MZ)({type:Boolean})],re.prototype,"fullWidth",void 0),te([(0,o.MZ)({type:Boolean})],re.prototype,"disabled",void 0),re=te([(0,M.E)("wui-icon-button")],re);r(1056);const ie=F.AH`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[32]}};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${e=>{let{spacing:t}=e;return t[1]}};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    box-shadow: 0 0 0 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    opacity: 0.5;
  }
`;var oe=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};const ne={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},ae={lg:"lg",md:"md",sm:"sm"};let se=class extends i.WF{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return i.qy`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const e=ne[this.size];return this.text?i.qy`<wui-text color="primary" variant=${e}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return i.qy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const e=ae[this.size];return i.qy` <wui-flex class="left-icon-container">
      <wui-icon size=${e} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};se.styles=[z.W5,z.fD,ie],oe([(0,o.MZ)()],se.prototype,"imageSrc",void 0),oe([(0,o.MZ)()],se.prototype,"text",void 0),oe([(0,o.MZ)()],se.prototype,"size",void 0),oe([(0,o.MZ)()],se.prototype,"type",void 0),oe([(0,o.MZ)({type:Boolean})],se.prototype,"disabled",void 0),se=oe([(0,M.E)("wui-select")],se);r(9319),r(4875);const ce={ACCOUNT_TABS:[{label:"Tokens"},{label:"Activity"}],SECURE_SITE_ORIGIN:("undefined"!==typeof r(2285)?{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SEPOLIA_RPC_URL:"https://eth-sepolia.g.alchemy.com/v2/a-L_jB8U7BOoVUz1HDeLN",REACT_APP_WALLETCONNECT_PROJECT_ID:"f821c122fb62a89922aa23933dfd4ce6"}.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150},VIEWS_WITH_LEGAL_FOOTER:["Connect","ConnectWallets","OnRampTokenSelect","OnRampFiatSelect","OnRampProviders"],VIEWS_WITH_DEFAULT_FOOTER:["Networks"]};r(9635),r(477);const le=F.AH`
  button {
    background-color: transparent;
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent020}};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${e=>{let{tokens:t}=e;return t.core.foregroundAccent010}};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[1]}};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var ue=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let de=class extends i.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return i.qy`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${{accent:"accent-primary",primary:"inverse",secondary:"default"}[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};de.styles=[z.W5,z.fD,le],ue([(0,o.MZ)()],de.prototype,"size",void 0),ue([(0,o.MZ)({type:Boolean})],de.prototype,"disabled",void 0),ue([(0,o.MZ)()],de.prototype,"icon",void 0),ue([(0,o.MZ)()],de.prototype,"iconColor",void 0),ue([(0,o.MZ)()],de.prototype,"variant",void 0),de=ue([(0,M.E)("wui-icon-link")],de);r(5770),r(4582);const pe=i.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var he=r(3113);const me=i.JW`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,we=F.AH`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: 100%;
    outline: 1px solid ${e=>{let{tokens:t}=e;return t.core.glass010}};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var ge=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ye=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:me,md:he.a,lg:pe},this.selected=!1,this.round=!1}render(){const e={sm:"4",md:"6",lg:"10"};return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--apkt-spacing-10);\n      --local-height: var(--apkt-spacing-10);\n      --local-icon-size: var(--apkt-spacing-4);\n    "):this.style.cssText=`\n\n      --local-path: var(--apkt-path-network-${this.size});\n      --local-width:  var(--apkt-width-network-${this.size});\n      --local-height:  var(--apkt-height-network-${this.size});\n      --local-icon-size:  var(--apkt-spacing-${e[this.size]});\n    `,i.qy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:i.qy`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};ye.styles=[z.W5,we],ge([(0,o.MZ)()],ye.prototype,"size",void 0),ge([(0,o.MZ)()],ye.prototype,"name",void 0),ge([(0,o.MZ)({type:Object})],ye.prototype,"networkImagesBySize",void 0),ge([(0,o.MZ)()],ye.prototype,"imageSrc",void 0),ge([(0,o.MZ)({type:Boolean})],ye.prototype,"selected",void 0),ge([(0,o.MZ)({type:Boolean})],ye.prototype,"round",void 0),ye=ge([(0,M.E)("wui-network-image")],ye);const fe=F.AH`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }
`;var be=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ve=class extends i.WF{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,i.qy`${this.template()}`}template(){return this.text?i.qy`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};ve.styles=[z.W5,fe],be([(0,o.MZ)()],ve.prototype,"text",void 0),be([(0,o.MZ)()],ve.prototype,"bgColor",void 0),ve=be([(0,M.E)("wui-separator")],ve);r(3777);var ke=r(1769),xe=r(9251);const Se="INVALID_PAYMENT_CONFIG",Te="INVALID_RECIPIENT",Ae="INVALID_ASSET",Pe="INVALID_AMOUNT",Ie="UNKNOWN_ERROR",Ce="UNABLE_TO_INITIATE_PAYMENT",$e="INVALID_CHAIN_NAMESPACE",Ee="GENERIC_PAYMENT_ERROR",Ne="UNABLE_TO_GET_EXCHANGES",Re="ASSET_NOT_SUPPORTED",qe="UNABLE_TO_GET_PAY_URL",We="UNABLE_TO_GET_BUY_STATUS",Oe="UNABLE_TO_GET_TOKEN_BALANCES",Ue="UNABLE_TO_GET_QUOTE",De="UNABLE_TO_GET_QUOTE_STATUS",ze="INVALID_RECIPIENT_ADDRESS_FOR_ASSET",Me={[Se]:"Invalid payment configuration",[Te]:"Invalid recipient address",[Ae]:"Invalid asset specified",[Pe]:"Invalid payment amount",[ze]:"Invalid recipient address for the asset selected",[Ie]:"Unknown payment error occurred",[Ce]:"Unable to initiate payment",[$e]:"Invalid chain namespace",[Ee]:"Unable to process payment",[Ne]:"Unable to get exchanges",[Re]:"Asset not supported by the selected exchange",[qe]:"Unable to get payment URL",[We]:"Unable to get buy status",[Oe]:"Unable to get token balances",[Ue]:"Unable to get quote. Please choose a different token",[De]:"Unable to get quote status"};class Fe extends Error{get message(){return Me[this.code]}constructor(e,t){super(Me[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,Fe)}}var Be=r(4564);const je="reown_test";var Le=r(3255),_e=r(5851);function He(e){if(!e)return null;const t=e.steps[0];return t&&t.type===at?t:null}function Ze(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!e)return[];const r=e.steps.filter(e=>e.type===st),i=r.filter((e,r)=>r+1>t);return r.length>0&&r.length<3?i:[]}const Ve=new Be.Z({baseUrl:A.w.getApiUrl(),clientId:null});class Ke extends Error{}function Qe(){const{projectId:e,sdkType:t,sdkVersion:r}=a.H.state;return{projectId:e,st:t||"appkit",sv:r||"html-wagmi-4.2.2"}}async function Ge(e,t){const r=`https://rpc.walletconnect.org/v1/json-rpc?projectId=${a.H.getSnapshot().projectId}`,{sdkType:i,sdkVersion:o,projectId:n}=a.H.getSnapshot(),s={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:i,sv:o,projectId:n}},c=await fetch(r,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}),l=await c.json();if(l.error)throw new Ke(l.error.message);return l}async function Ye(e){return(await Ge("reown_getExchanges",e)).result}async function Je(e){return(await Ge("reown_getExchangePayUrl",e)).result}async function Xe(e){const t=xe.y.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),r=xe.y.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&r?async function(e){let{sourceToken:t,toToken:r,amount:i,recipient:o}=e;const n=p.x.parseUnits(i,t.metadata.decimals),a=p.x.parseUnits(i,r.metadata.decimals);return Promise.resolve({type:nt,origin:{amount:n?.toString()??"0",currency:t},destination:{amount:a?.toString()??"0",currency:r},fees:[{id:"service",label:"Service Fee",amount:"0",currency:r}],steps:[{requestId:nt,type:"deposit",deposit:{amount:n?.toString()??"0",currency:t.asset,receiver:o}}],timeInSeconds:6})}(e):async function(e){const t=b.S.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:r,chainNamespace:i}=ke.C.parseCaipNetworkId(e.sourceToken.network),{chainId:o,chainNamespace:n}=ke.C.parseCaipNetworkId(e.toToken.network),a="native"===e.sourceToken.asset?(0,S.NH)(i):e.sourceToken.asset,s="native"===e.toToken.asset?(0,S.NH)(n):e.toToken.asset;return await Ve.post({path:"/appkit/v1/transfers/quote",body:{user:e.address,originChainId:r.toString(),originCurrency:a,destinationChainId:o.toString(),destinationCurrency:s,recipient:e.recipient,amount:t},params:Qe()})}(e)}const et=["eip155","solana"],tt={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function rt(e,t){const{chainNamespace:r,chainId:i}=ke.C.parseCaipNetworkId(e),o=tt[r];if(!o)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${r}`);let n=o.native.assetNamespace,a=o.native.assetReference;"native"!==t&&(n=o.defaultTokenNamespace,a=t);return`${`${r}:${i}`}/${n}:${a}`}function it(e){const t=b.S.bigNumber(e,{safe:!0});return t.lt(.001)?"<0.001":t.round(4).toString()}const ot="unknown",nt="direct-transfer",at="deposit",st="transaction",ct=(0,y.BX)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[v.o.CHAIN.EVM]:[],[v.o.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),lt={state:ct,subscribe:e=>(0,y.B1)(ct,()=>e(ct)),subscribeKey:(e,t)=>(0,f.u$)(ct,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.initializeAnalytics(),function(){const{chainNamespace:e}=ke.C.parseCaipNetworkId(lt.state.paymentAsset.network);if(!A.w.isAddress(lt.state.recipient,e))throw new Fe(ze,`Provide valid recipient address for namespace "${e}"`)}(),await this.prepareTokenLogo(),ct.isConfigured=!0,N.E.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:ct.exchanges,configuration:{network:ct.paymentAsset.network,asset:ct.paymentAsset.asset,recipient:ct.recipient,amount:ct.amount}}}),await s.W.open({view:"Pay"})},resetState(){ct.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},ct.recipient="0x0",ct.amount=0,ct.isConfigured=!1,ct.error=null,ct.isPaymentInProgress=!1,ct.isLoading=!1,ct.currentPayment=void 0,ct.selectedExchange=void 0,ct.exchangeUrlForQuote=void 0,ct.requestId=void 0},resetQuoteState(){ct.quote=void 0,ct.quoteStatus="waiting",ct.quoteError=null,ct.isFetchingQuote=!1,ct.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new Fe(Se);try{ct.choice=e.choice??"pay",ct.paymentAsset=e.paymentAsset,ct.recipient=e.recipient,ct.amount=e.amount,ct.openInNewTab=e.openInNewTab??!0,ct.redirectUrl=e.redirectUrl,ct.payWithExchange=e.payWithExchange,ct.error=null}catch(t){throw new Fe(Se,t.message)}},setSelectedPaymentAsset(e){ct.selectedPaymentAsset=e},setSelectedExchange(e){ct.selectedExchange=e},setRequestId(e){ct.requestId=e},setPaymentInProgress(e){ct.isPaymentInProgress=e},getPaymentAsset:()=>ct.paymentAsset,getExchanges:()=>ct.exchanges,async fetchExchanges(){try{ct.isLoading=!0;const e=await Ye({page:0});ct.exchanges=e.exchanges.slice(0,2)}catch(e){throw g.P.showError(Me.UNABLE_TO_GET_EXCHANGES),new Fe(Ne)}finally{ct.isLoading=!1}},async getAvailableExchanges(e){try{const t=e?.asset&&e?.network?rt(e.network,e.asset):void 0;return await Ye({page:e?.page??0,asset:t,amount:e?.amount?.toString()})}catch(t){throw new Fe(Ne)}},async getPayUrl(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{const i=Number(t.amount),o=await Je({exchangeId:e,asset:rt(t.network,t.asset),amount:i.toString(),recipient:`${t.network}:${t.recipient}`});return N.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:i},currentPayment:{type:"exchange",exchangeId:e},headless:r}}),r&&(this.initiatePayment(),N.E.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:ct.paymentId||ot,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:i},currentPayment:{type:"exchange",exchangeId:e}}})),o}catch(i){if(i instanceof Error&&i.message.includes("is not supported"))throw new Fe(Re);throw new Error(i.message)}},async generateExchangeUrlForQuote(e){let{exchangeId:t,paymentAsset:r,amount:i,recipient:o}=e;const n=await Je({exchangeId:t,asset:rt(r.network,r.asset),amount:i.toString(),recipient:o});ct.exchangeSessionId=n.sessionId,ct.exchangeUrlForQuote=n.url},async openPayUrl(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{const i=await this.getPayUrl(e.exchangeId,t,r);if(!i)throw new Fe(qe);const o=e.openInNewTab??!0?"_blank":"_self";return A.w.openHref(i.url,o),i}catch(i){throw ct.error=i instanceof Fe?i.message:Me.GENERIC_PAYMENT_ERROR,new Fe(qe)}},async onTransfer(e){let{chainNamespace:t,fromAddress:r,toAddress:i,amount:o,paymentAsset:n}=e;if(ct.currentPayment={type:"wallet",status:"IN_PROGRESS"},!ct.isPaymentInProgress)try{this.initiatePayment();const e=c.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===n.network);if(!e)throw new Error("Target network not found");const a=c.W.state.activeCaipNetwork;switch(xe.y.isLowerCaseMatch(a?.caipNetworkId,e.caipNetworkId)||await c.W.switchActiveNetwork(e),t){case v.o.CHAIN.EVM:"native"===n.asset&&(ct.currentPayment.result=await async function(e,t,r){if(t!==v.o.CHAIN.EVM)throw new Fe($e);if(!r.fromAddress)throw new Fe(Se,"fromAddress is required for native EVM payments.");const i="string"===typeof r.amount?parseFloat(r.amount):r.amount;if(isNaN(i))throw new Fe(Se);const o=e.metadata?.decimals??18,n=p.x.parseUnits(i.toString(),o);if("bigint"!==typeof n)throw new Fe(Ee);return await p.x.sendTransaction({chainNamespace:t,to:r.recipient,address:r.fromAddress,value:n,data:"0x"})??void 0}(n,t,{recipient:i,amount:o,fromAddress:r})),n.asset.startsWith("0x")&&(ct.currentPayment.result=await async function(e,t){if(!t.fromAddress)throw new Fe(Se,"fromAddress is required for ERC20 EVM payments.");const r=e.asset,i=t.recipient,o=Number(e.metadata.decimals),n=p.x.parseUnits(t.amount.toString(),o);if(void 0===n)throw new Fe(Ee);return await p.x.writeContract({fromAddress:t.fromAddress,tokenAddress:r,args:[i,n],method:"transfer",abi:Le.v.getERC20Abi(r),chainNamespace:v.o.CHAIN.EVM})??void 0}(n,{recipient:i,amount:o,fromAddress:r})),ct.currentPayment.status="SUCCESS";break;case v.o.CHAIN.SOLANA:ct.currentPayment.result=await async function(e,t){if(e!==v.o.CHAIN.SOLANA)throw new Fe($e);if(!t.fromAddress)throw new Fe(Se,"fromAddress is required for Solana payments.");const r="string"===typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(r)||r<=0)throw new Fe(Se,"Invalid payment amount.");try{if(!_e.G.getProvider(e))throw new Fe(Ee,"No Solana provider available.");const i=await p.x.sendTransaction({chainNamespace:v.o.CHAIN.SOLANA,to:t.recipient,value:r,tokenMint:t.tokenMint});if(!i)throw new Fe(Ee,"Transaction failed.");return i}catch(i){if(i instanceof Fe)throw i;throw new Fe(Ee,`Solana payment failed: ${i}`)}}(t,{recipient:i,amount:o,fromAddress:r,tokenMint:"native"===n.asset?void 0:n.asset}),ct.currentPayment.status="SUCCESS";break;default:throw new Fe($e)}}catch(a){throw ct.error=a instanceof Fe?a.message:Me.GENERIC_PAYMENT_ERROR,ct.currentPayment.status="FAILED",g.P.showError(ct.error),a}finally{ct.isPaymentInProgress=!1}},async onSendTransaction(e){try{const{namespace:t,transactionStep:r}=e;lt.initiatePayment();const i=c.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===ct.paymentAsset?.network);if(!i)throw new Error("Target network not found");const o=c.W.state.activeCaipNetwork;if(xe.y.isLowerCaseMatch(o?.caipNetworkId,i.caipNetworkId)||await c.W.switchActiveNetwork(i),t===v.o.CHAIN.EVM){const{from:e,to:i,data:o,value:n}=r.transaction;await p.x.sendTransaction({address:e,to:i,data:o,value:BigInt(n),chainNamespace:t})}else if(t===v.o.CHAIN.SOLANA){const{instructions:e}=r.transaction;await p.x.writeSolanaTransaction({instructions:e})}}catch(t){throw ct.error=t instanceof Fe?t.message:Me.GENERIC_PAYMENT_ERROR,g.P.showError(ct.error),t}finally{ct.isPaymentInProgress=!1}},getExchangeById:e=>ct.exchanges.find(t=>t.id===e),validatePayConfig(e){const{paymentAsset:t,recipient:r,amount:i}=e;if(!t)throw new Fe(Se);if(!r)throw new Fe(Te);if(!t.asset)throw new Fe(Ae);if(void 0===i||null===i||i<=0)throw new Fe(Pe)},async handlePayWithExchange(e){try{ct.currentPayment={type:"exchange",exchangeId:e};const{network:t,asset:r}=ct.paymentAsset,i={network:t,asset:r,amount:ct.amount,recipient:ct.recipient},o=await this.getPayUrl(e,i);if(!o)throw new Fe(Ce);return ct.currentPayment.sessionId=o.sessionId,ct.currentPayment.status="IN_PROGRESS",ct.currentPayment.exchangeId=e,this.initiatePayment(),{url:o.url,openInNewTab:ct.openInNewTab}}catch(t){return ct.error=t instanceof Fe?t.message:Me.GENERIC_PAYMENT_ERROR,ct.isPaymentInProgress=!1,g.P.showError(ct.error),null}},async getBuyStatus(e,t){try{const r=await async function(e){return(await Ge("reown_getExchangeBuyStatus",e)).result}({sessionId:t,exchangeId:e});return"SUCCESS"!==r.status&&"FAILED"!==r.status||N.E.sendEvent({type:"track",event:"SUCCESS"===r.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===r.status?A.w.parseError(ct.error):void 0,source:"pay",paymentId:ct.paymentId||ot,configuration:{network:ct.paymentAsset.network,asset:ct.paymentAsset.asset,recipient:ct.recipient,amount:ct.amount},currentPayment:{type:"exchange",exchangeId:ct.currentPayment?.exchangeId,sessionId:ct.currentPayment?.sessionId,result:r.txHash}}}),r}catch(r){throw new Fe(We)}},async fetchTokensFromEOA(e){let{caipAddress:t,caipNetwork:r,namespace:i}=e;if(!t)return[];const{address:o}=ke.C.parseCaipAddress(t);let n=r;i===v.o.CHAIN.EVM&&(n=void 0);return await x.Z.getMyTokensWithBalance({address:o,caipNetwork:n})},async fetchTokensFromExchange(){if(!ct.selectedExchange)return[];const e=await async function(e){return await Ve.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:Qe()})}(ct.selectedExchange.id),t=Object.values(e.assets).flat();return await Promise.all(t.map(async e=>{const t={chainId:(r=e).network,address:`${r.network}:${r.asset}`,symbol:r.metadata.symbol,name:r.metadata.name,iconUrl:r.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:r.metadata.decimals.toString()}};var r;const{chainNamespace:i}=ke.C.parseCaipNetworkId(t.chainId);let o=t.address;if(A.w.isCaipAddress(o)){const{address:e}=ke.C.parseCaipAddress(o);o=e}const n=await J.$.getImageByToken(o??"",i).catch(()=>{});return t.iconUrl=n??"",t}))},async fetchTokens(e){let{caipAddress:t,caipNetwork:r,namespace:i}=e;try{ct.isFetchingTokenBalances=!0;const e=Boolean(ct.selectedExchange)?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:t,caipNetwork:r,namespace:i}),o=await e;ct.tokenBalances={...ct.tokenBalances,[i]:o}}catch(o){const e=o instanceof Error?o.message:"Unable to get token balances";g.P.showError(e)}finally{ct.isFetchingTokenBalances=!1}},async fetchQuote(e){let{amount:t,address:r,sourceToken:i,toToken:o,recipient:n}=e;try{lt.resetQuoteState(),ct.isFetchingQuote=!0;const e=await Xe({amount:t,address:ct.selectedExchange?void 0:r,sourceToken:i,toToken:o,recipient:n});if(ct.selectedExchange){const t=He(e);if(t){const e=`${i.network}:${t.deposit.receiver}`,r=b.S.formatNumber(t.deposit.amount,{decimals:i.metadata.decimals??0,round:8});await lt.generateExchangeUrlForQuote({exchangeId:ct.selectedExchange.id,paymentAsset:i,amount:r.toString(),recipient:e})}}ct.quote=e}catch(a){let e=Me.UNABLE_TO_GET_QUOTE;if(a instanceof Error&&a.cause&&a.cause instanceof Response)try{const t=await a.cause.json();t.error&&"string"===typeof t.error&&(e=t.error)}catch{}throw ct.quoteError=e,g.P.showError(e),new Fe(Ue)}finally{ct.isFetchingQuote=!1}},async fetchQuoteStatus(e){let{requestId:t}=e;try{if(t===nt){const e=ct.selectedExchange,t=ct.exchangeSessionId;if(e&&t){switch((await this.getBuyStatus(e.id,t)).status){case"IN_PROGRESS":case"UNKNOWN":default:ct.quoteStatus="waiting";break;case"SUCCESS":ct.quoteStatus="success",ct.isPaymentInProgress=!1;break;case"FAILED":ct.quoteStatus="failure",ct.isPaymentInProgress=!1}return}return void(ct.quoteStatus="success")}const{status:e}=await async function(e){return await Ve.get({path:"/appkit/v1/transfers/status",params:{requestId:e.requestId,...Qe()}})}({requestId:t});ct.quoteStatus=e}catch{throw ct.quoteStatus="failure",new Fe(De)}},initiatePayment(){ct.isPaymentInProgress=!0,ct.paymentId=crypto.randomUUID()},initializeAnalytics(){ct.analyticsSet||(ct.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",e=>{if(ct.currentPayment?.status&&"UNKNOWN"!==ct.currentPayment.status){const e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[ct.currentPayment.status];N.E.sendEvent({type:"track",event:e,properties:{message:"FAILED"===ct.currentPayment.status?A.w.parseError(ct.error):void 0,source:"pay",paymentId:ct.paymentId||ot,configuration:{network:ct.paymentAsset.network,asset:ct.paymentAsset.asset,recipient:ct.recipient,amount:ct.amount},currentPayment:{type:ct.currentPayment.type,exchangeId:ct.currentPayment.exchangeId,sessionId:ct.currentPayment.sessionId,result:ct.currentPayment.result}}})}}))},async prepareTokenLogo(){if(!ct.paymentAsset.metadata.logoURI)try{const{chainNamespace:e}=ke.C.parseCaipNetworkId(ct.paymentAsset.network),t=await J.$.getImageByToken(ct.paymentAsset.asset,e);ct.paymentAsset.metadata.logoURI=t}catch{}}},ut=D.AH`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    border: 2px solid ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
  }

  .payment-methods-container {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-top-right-radius: ${e=>{let{borderRadius:t}=e;return t[8]}};
    border-top-left-radius: ${e=>{let{borderRadius:t}=e;return t[8]}};
  }
`;var dt=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let pt=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.amount=lt.state.amount,this.namespace=void 0,this.paymentAsset=lt.state.paymentAsset,this.activeConnectorIds=l.a.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=lt.state.exchanges,this.isLoading=lt.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(lt.subscribeKey("amount",e=>this.amount=e)),this.unsubscribe.push(l.a.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e)),this.unsubscribe.push(lt.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(lt.subscribeKey("isLoading",e=>this.isLoading=e)),lt.fetchExchanges(),lt.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.qy`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return i.qy`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){const e=c.W.state.activeChain;this.namespace=e,this.caipAddress=c.W.getAccountData(e)?.caipAddress,this.unsubscribe.push(c.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},e))}paymentDetailsTemplate(){const e=c.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network);return i.qy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${it(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${e?.name||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${(0,n.J)(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${(0,n.J)(J.$.getNetworkImage(e))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return function(e){const{chainNamespace:t}=ke.C.parseCaipNetworkId(e);return et.includes(t)}(this.paymentAsset.network)?this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate():i.qy``}connectedWalletTemplate(){const{name:e,image:t}=this.getWalletProperties({namespace:this.namespace});return i.qy`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${!1}
          ?chevron=${!0}
          ?fullSize=${!1}
          ?rounded=${!0}
          data-testid="wallet-payment-option"
          imageSrc=${(0,n.J)(t)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${!1}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return i.qy`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return i.qy`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;const e=this.exchanges.filter(e=>function(e){const t=c.W.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===e.network);return!!t&&Boolean(t.testnet)}(this.paymentAsset)?e.id===je:e.id!==je);return 0===e.length?i.qy`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map(e=>i.qy`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(e)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          imageSrc=${(0,n.J)(e.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${e.name}
          </wui-text>
        </wui-list-item>
      `)}templateSeparator(){return i.qy`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw new Error("Namespace not found");this.caipAddress?d.I.push("PayQuote"):(await l.a.connect(),await s.W.open({view:"PayQuote"}))}onExchangePayment(e){lt.setSelectedExchange(e),d.I.push("PayQuote")}async onDisconnect(){try{await p.x.disconnect(),await s.W.open({view:"Pay"})}catch{console.error("Failed to disconnect"),g.P.showError("Failed to disconnect")}}getWalletProperties(e){let{namespace:t}=e;if(!t)return{name:void 0,image:void 0};const r=this.activeConnectorIds[t];if(!r)return{name:void 0,image:void 0};const i=l.a.getConnector({id:r,namespace:t});if(!i)return{name:void 0,image:void 0};const o=J.$.getConnectorImage(i);return{name:i.name,image:o}}};pt.styles=ut,dt([(0,o.wk)()],pt.prototype,"amount",void 0),dt([(0,o.wk)()],pt.prototype,"namespace",void 0),dt([(0,o.wk)()],pt.prototype,"paymentAsset",void 0),dt([(0,o.wk)()],pt.prototype,"activeConnectorIds",void 0),dt([(0,o.wk)()],pt.prototype,"caipAddress",void 0),dt([(0,o.wk)()],pt.prototype,"exchanges",void 0),dt([(0,o.wk)()],pt.prototype,"isLoading",void 0),pt=dt([(0,D.EM)("w3m-pay-view")],pt);var ht=r(1286);const mt=F.AH`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;var wt=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};const gt={"accent-primary":F.f.tokens.core.backgroundAccentPrimary};let yt=class extends i.WF{constructor(){super(...arguments),this.rings=3,this.duration=2,this.opacity=.3,this.size="200px",this.variant="accent-primary"}render(){const e=gt[this.variant];this.style.cssText=`\n      --pulse-size: ${this.size};\n      --pulse-duration: ${this.duration}s;\n      --pulse-color: ${e};\n      --pulse-opacity: ${this.opacity};\n    `;const t=Array.from({length:this.rings},(e,t)=>this.renderRing(t,this.rings));return i.qy`
      <div class="pulse-container">
        <div class="pulse-rings">${t}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,t){const r=`animation-delay: ${e/t*this.duration}s;`;return i.qy`<div class="pulse-ring" style=${r}></div>`}};yt.styles=[z.W5,mt],wt([(0,o.MZ)({type:Number})],yt.prototype,"rings",void 0),wt([(0,o.MZ)({type:Number})],yt.prototype,"duration",void 0),wt([(0,o.MZ)({type:Number})],yt.prototype,"opacity",void 0),wt([(0,o.MZ)()],yt.prototype,"size",void 0),wt([(0,o.MZ)()],yt.prototype,"variant",void 0),yt=wt([(0,M.E)("wui-pulse")],yt);const ft=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],bt=["success","submitted","failure","timeout","refund"],vt=D.AH`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border: 3px solid ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
  }

  .token-badge-container.success {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border: 3px solid ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  .token-image.error {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  .token-image.loading {
    background: ${e=>{let{colors:t}=e;return t.accent010}};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-top-right-radius: ${e=>{let{borderRadius:t}=e;return t[6]}};
    border-top-left-radius: ${e=>{let{borderRadius:t}=e;return t[6]}};
  }

  .payment-step-badge {
    padding: ${e=>{let{spacing:t}=e;return t[1]}} ${e=>{let{spacing:t}=e;return t[2]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[1]}};
  }

  .payment-step-badge.loading {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  .payment-step-badge.error {
    background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundError}};
  }

  .payment-step-badge.success {
    background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundSuccess}};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    border: 2px solid ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  .step-icon-box.success {
    background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundSuccess}};
  }
`;var kt=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};const xt={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]};let St=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=lt.state.paymentAsset,this.quoteStatus=lt.state.quoteStatus,this.quote=lt.state.quote,this.amount=lt.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=l.a.state.activeConnectorIds,this.selectedExchange=lt.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(lt.subscribeKey("quoteStatus",e=>this.quoteStatus=e),lt.subscribeKey("quote",e=>this.quote=e),l.a.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e),lt.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach(e=>e())}render(){return i.qy`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){const e=it(this.amount||"0"),t=this.paymentAsset.metadata.symbol??"Unknown",r=c.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network),o="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus;return"success"===this.quoteStatus||"submitted"===this.quoteStatus?i.qy`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:o?i.qy`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:i.qy`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${(0,n.J)(J.$.getNetworkImage(r))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${e} ${t}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return i.qy`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){const e=this.getStepsWithStatus();return i.qy`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${e.map(e=>this.renderStep(e))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){const e="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus,t="success"===this.quoteStatus||"submitted"===this.quoteStatus;if(e)return i.qy`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(t)return i.qy`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;const r=this.quote?.timeInSeconds??0;return i.qy`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${r} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){const e=c.W.getAllRequestedCaipNetworks().find(e=>{const t=this.quote?.origin.currency.network;if(!t)return!1;const{chainId:r}=ke.C.parseCaipNetworkId(t);return xe.y.isLowerCaseMatch(e.id.toString(),r.toString())}),t=it(b.S.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString()),r=this.quote?.origin.currency.metadata.symbol??"Unknown";return i.qy`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${t}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${r}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${(0,n.J)(J.$.getNetworkImage(e))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${e?.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return i.qy`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Wallet</wui-text>

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){const{image:e}=this.getWalletProperties({namespace:this.namespace}),{address:t}=this.caipAddress?ke.C.parseCaipAddress(this.caipAddress):{},r=this.selectedExchange?.name;return this.selectedExchange?i.qy`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${r}</wui-text>
          <wui-image src=${(0,n.J)(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:i.qy`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${D.Zv.getTruncateString({string:this.profileName||t||r||"",charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${(0,n.J)(e)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return"failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus?ft.map(e=>({...e,status:"failed"})):ft.map(e=>{const t=(xt[e.id]??[]).includes(this.quoteStatus)?"completed":"pending";return{...e,status:t}})}renderStep(e){let{title:t,icon:r,status:o}=e;const n={"step-icon-box":!0,success:"completed"===o};return i.qy`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${r} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${(0,ht.H)(n)}>
            ${this.renderStatusIndicator(o)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${t}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return"completed"===e?i.qy`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:"failed"===e?i.qy`<wui-icon size="sm" color="error" name="close"></wui-icon>`:"pending"===e?i.qy`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval(()=>{this.fetchQuoteStatus()},3e3))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async fetchQuoteStatus(){const e=lt.state.requestId;if(!e||bt.includes(this.quoteStatus))this.stopPolling();else try{await lt.fetchQuoteStatus({requestId:e}),bt.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){const e=c.W.state.activeChain;this.namespace=e,this.caipAddress=c.W.getAccountData(e)?.caipAddress,this.profileName=c.W.getAccountData(e)?.profileName??null,this.unsubscribe.push(c.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null},e))}getWalletProperties(e){let{namespace:t}=e;if(!t)return{name:void 0,image:void 0};const r=this.activeConnectorIds[t];if(!r)return{name:void 0,image:void 0};const i=l.a.getConnector({id:r,namespace:t});if(!i)return{name:void 0,image:void 0};const o=J.$.getConnectorImage(i);return{name:i.name,image:o}}};St.styles=vt,kt([(0,o.wk)()],St.prototype,"paymentAsset",void 0),kt([(0,o.wk)()],St.prototype,"quoteStatus",void 0),kt([(0,o.wk)()],St.prototype,"quote",void 0),kt([(0,o.wk)()],St.prototype,"amount",void 0),kt([(0,o.wk)()],St.prototype,"namespace",void 0),kt([(0,o.wk)()],St.prototype,"caipAddress",void 0),kt([(0,o.wk)()],St.prototype,"profileName",void 0),kt([(0,o.wk)()],St.prototype,"activeConnectorIds",void 0),kt([(0,o.wk)()],St.prototype,"selectedExchange",void 0),St=kt([(0,D.EM)("w3m-pay-loading-view")],St);var Tt=r(9929);const At=F.AH`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${e=>{let{spacing:t}=e;return t[2]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    column-gap: ${e=>{let{spacing:t}=e;return t[1]}};
    background-color: transparent;
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${e=>{let{spacing:t}=e;return t[6]}};
    height: ${e=>{let{spacing:t}=e;return t[6]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${e=>{let{tokens:t}=e;return t.core.textSuccess}};
    box-shadow: 0 0 0 2px ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    }
  }
`;var Pt=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let It=class extends i.WF{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.enableGreenCircle=!0,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return i.qy`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const e=this.icon?i.qy`<wui-icon
          size=${(0,n.J)(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:i.qy`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return i.qy`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${Boolean(this.icon)}
      >
        ${e}
        ${this.enableGreenCircle?i.qy`<wui-flex class="circle"></wui-flex>`:null}
      </wui-flex>
    `}textTemplate(){return i.qy`
      <wui-text variant="lg-regular" color="primary">
        ${Tt.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return i.qy`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};It.styles=[z.W5,z.fD,At],Pt([(0,o.MZ)()],It.prototype,"address",void 0),Pt([(0,o.MZ)()],It.prototype,"profileName",void 0),Pt([(0,o.MZ)()],It.prototype,"alt",void 0),Pt([(0,o.MZ)()],It.prototype,"imageSrc",void 0),Pt([(0,o.MZ)()],It.prototype,"icon",void 0),Pt([(0,o.MZ)()],It.prototype,"iconSize",void 0),Pt([(0,o.MZ)({type:Boolean})],It.prototype,"enableGreenCircle",void 0),Pt([(0,o.MZ)({type:Boolean})],It.prototype,"loading",void 0),Pt([(0,o.MZ)({type:Number})],It.prototype,"charsStart",void 0),Pt([(0,o.MZ)({type:Number})],It.prototype,"charsEnd",void 0),It=Pt([(0,M.E)("wui-wallet-switch")],It);r(3625);const Ct=i.AH`
  :host {
    display: block;
  }
`;var $t=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let Et=class extends i.WF{render(){return i.qy`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};Et.styles=[Ct],Et=$t([(0,D.EM)("w3m-pay-fees-skeleton")],Et);const Nt=D.AH`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }
`;var Rt=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let qt=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.quote=lt.state.quote,this.unsubscribe.push(lt.subscribeKey("quote",e=>this.quote=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=b.S.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0,round:6}).toString();return i.qy`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${e} ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map(e=>this.renderFee(e)):null}
      </wui-flex>
    `}renderFee(e){const t="network"===e.id,r=b.S.formatNumber(e.amount||"0",{decimals:e.currency.metadata.decimals??0,round:6}).toString();if(t){const t=c.W.getAllRequestedCaipNetworks().find(t=>xe.y.isLowerCaseMatch(t.caipNetworkId,e.currency.network));return i.qy`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${r} ${e.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${(0,n.J)(J.$.getNetworkImage(t))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${t?.name||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return i.qy`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${r} ${e.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};qt.styles=[Nt],Rt([(0,o.wk)()],qt.prototype,"quote",void 0),qt=Rt([(0,D.EM)("w3m-pay-fees")],qt);const Wt=D.AH`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${e=>{let{spacing:t}=e;return t[2]}};
    min-height: 168px;
  }

  wui-icon {
    width: ${e=>{let{spacing:t}=e;return t[8]}};
    height: ${e=>{let{spacing:t}=e;return t[8]}};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`;var Ot=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let Ut=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.selectedExchange=lt.state.selectedExchange,this.unsubscribe.push(lt.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=Boolean(this.selectedExchange);return i.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${e?null:i.qy`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};Ut.styles=[Wt],Ot([(0,o.MZ)({type:Array})],Ut.prototype,"selectedExchange",void 0),Ut=Ot([(0,D.EM)("w3m-pay-options-empty")],Ut);const Dt=D.AH`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }
`;var zt=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let Mt=class extends i.WF{render(){return i.qy`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return i.qy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}};Mt.styles=[Dt],Mt=zt([(0,D.EM)("w3m-pay-options-skeleton")],Mt);const Ft=D.AH`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    border: 2px solid ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    }
  }
`;var Bt=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let jt=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect();const e=this.shadowRoot?.querySelector(".pay-options-container");e?.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){const e=this.shadowRoot?.querySelector(".pay-options-container");e&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),e?.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleOptionsListScroll()}),this.resizeObserver?.observe(e),this.handleOptionsListScroll())}render(){return i.qy`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(e=>this.payOptionTemplate(e))}
      </wui-flex>
    `}payOptionTemplate(e){const{network:t,metadata:r,asset:o,amount:a="0"}=e,s=c.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===t),l=`${t}:${o}`===`${this.selectedPaymentAsset?.network}:${this.selectedPaymentAsset?.asset}`,u=b.S.bigNumber(a,{safe:!0}),d=u.gt(0);return i.qy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>this.onSelect?.(e)}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${(0,n.J)(r.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${(0,n.J)(J.$.getNetworkImage(s))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${r.symbol}</wui-text>
            ${d?i.qy`<wui-text variant="sm-regular" color="secondary">
                  ${u.round(6).toString()} ${r.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${l?i.qy`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){const e=this.shadowRoot?.querySelector(".pay-options-container");if(!e)return;e.scrollHeight>300?(e.style.setProperty("--options-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,\n          black 50px,\n          black calc(100% - 50px),\n          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%\n        )"),e.style.setProperty("--options-scroll--top-opacity",D.z8.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--options-scroll--bottom-opacity",D.z8.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--options-mask-image","none"),e.style.setProperty("--options-scroll--top-opacity","0"),e.style.setProperty("--options-scroll--bottom-opacity","0"))}};jt.styles=[Ft],Bt([(0,o.MZ)({type:Array})],jt.prototype,"options",void 0),Bt([(0,o.MZ)()],jt.prototype,"selectedPaymentAsset",void 0),Bt([(0,o.MZ)()],jt.prototype,"onSelect",void 0),jt=Bt([(0,D.EM)("w3m-pay-options")],jt);const Lt=D.AH`
  .payment-methods-container {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-top-right-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    border-top-left-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
  }

  .pay-options-container {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;var _t=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};const Ht={eip155:{icon:"ethereum",label:"EVM"},solana:{icon:"solana",label:"Solana"},bip122:{icon:"bitcoin",label:"Bitcoin"},ton:{icon:"ton",label:"Ton"}};let Zt=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=lt.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=lt.state.amount,this.recipient=lt.state.recipient,this.activeConnectorIds=l.a.state.activeConnectorIds,this.selectedPaymentAsset=lt.state.selectedPaymentAsset,this.selectedExchange=lt.state.selectedExchange,this.isFetchingQuote=lt.state.isFetchingQuote,this.quoteError=lt.state.quoteError,this.quote=lt.state.quote,this.isFetchingTokenBalances=lt.state.isFetchingTokenBalances,this.tokenBalances=lt.state.tokenBalances,this.isPaymentInProgress=lt.state.isPaymentInProgress,this.exchangeUrlForQuote=lt.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(lt.subscribeKey("paymentAsset",e=>this.paymentAsset=e)),this.unsubscribe.push(lt.subscribeKey("tokenBalances",e=>this.onTokenBalancesChanged(e))),this.unsubscribe.push(lt.subscribeKey("isFetchingTokenBalances",e=>this.isFetchingTokenBalances=e)),this.unsubscribe.push(l.a.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e)),this.unsubscribe.push(lt.subscribeKey("selectedPaymentAsset",e=>this.selectedPaymentAsset=e)),this.unsubscribe.push(lt.subscribeKey("isFetchingQuote",e=>this.isFetchingQuote=e)),this.unsubscribe.push(lt.subscribeKey("quoteError",e=>this.quoteError=e)),this.unsubscribe.push(lt.subscribeKey("quote",e=>this.quote=e)),this.unsubscribe.push(lt.subscribeKey("amount",e=>this.amount=e)),this.unsubscribe.push(lt.subscribeKey("recipient",e=>this.recipient=e)),this.unsubscribe.push(lt.subscribeKey("isPaymentInProgress",e=>this.isPaymentInProgress=e)),this.unsubscribe.push(lt.subscribeKey("selectedExchange",e=>this.selectedExchange=e)),this.unsubscribe.push(lt.subscribeKey("exchangeUrlForQuote",e=>this.exchangeUrlForQuote=e)),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach(e=>e())}updated(e){super.updated(e);e.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return i.qy`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${["4","4","5","4"]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${["1","0","1","0"]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){if(this.selectedExchange){const e=b.S.formatNumber(this.quote?.origin.amount,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return i.qy`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?i.qy`<wui-text variant="lg-regular" color="primary">
                ${b.S.bigNumber(e,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:i.qy`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}const e=A.w.getPlainAddress(this.caipAddress)??"",{name:t,image:r}=this.getWalletProperties({namespace:this.namespace}),{icon:o,label:a}=Ht[this.namespace]??{};return i.qy`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${(0,n.J)(this.profileName)}
          address=${(0,n.J)(e)}
          imageSrc=${(0,n.J)(r)}
          alt=${(0,n.J)(t)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${(0,n.J)(a)}
          address=${(0,n.J)(e)}
          icon=${(0,n.J)(o)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${(0,n.J)(a)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){const e=c.W.state.activeChain;this.namespace=e,this.caipAddress=c.W.getAccountData(e)?.caipAddress,this.profileName=c.W.getAccountData(e)?.profileName??null,this.unsubscribe.push(c.W.subscribeChainProp("accountState",e=>this.onAccountStateChanged(e),e))}async fetchTokens(){if(this.namespace){let e;if(this.caipAddress){const{chainId:t,chainNamespace:r}=ke.C.parseCaipAddress(this.caipAddress),i=`${r}:${t}`;e=c.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===i)}await lt.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){const{address:e}=this.caipAddress?ke.C.parseCaipAddress(this.caipAddress):{};lt.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties(e){let{namespace:t}=e;if(!t)return{name:void 0,image:void 0};const r=this.activeConnectorIds[t];if(!r)return{name:void 0,image:void 0};const i=l.a.getConnector({id:r,namespace:t});if(!i)return{name:void 0,image:void 0};const o=J.$.getConnectorImage(i);return{name:i.name,image:o}}paymentOptionsViewTemplate(){return i.qy`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){const e=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return i.qy`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(0===e.length)return i.qy`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;const t={disabled:this.isFetchingQuote};return i.qy`<w3m-pay-options
      class=${(0,ht.H)(t)}
      .options=${e}
      .selectedPaymentAsset=${(0,n.J)(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?i.qy`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:i.qy`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){const e=this.isFetchingQuote||this.isFetchingTokenBalances,t=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||Boolean(this.quoteError),r=b.S.formatNumber(this.quote?.origin.amount??0,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return this.selectedExchange?e||t?i.qy`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:i.qy`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:i.qy`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${e||t?i.qy`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:i.qy`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${it(r)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:e,isDisabled:t})}
      </wui-flex>
    `}actionButtonTemplate(e){const t=Ze(this.quote),{isLoading:r,isDisabled:o}=e;let n="Pay";return t.length>1&&0===this.completedTransactionsCount&&(n="Approve"),i.qy`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${r||this.isPaymentInProgress}
        ?disabled=${o||this.isPaymentInProgress}
        @click=${()=>{t.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${n}
        ${r?null:i.qy`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){if(!this.namespace)return[];return(this.tokenBalances[this.namespace]??[]).map(e=>{try{return function(e){const t=c.W.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===e.chainId);let r=e.address;if(!t)throw new Error(`Target network not found for balance chainId "${e.chainId}"`);if(xe.y.isLowerCaseMatch(e.symbol,t.nativeCurrency.symbol))r="native";else if(A.w.isCaipAddress(r)){const{address:e}=ke.C.parseCaipAddress(r);r=e}else if(!r)throw new Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:t.caipNetworkId,asset:r,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}(e)}catch(t){return null}}).filter(e=>Boolean(e)).filter(e=>{const{chainId:t}=ke.C.parseCaipNetworkId(e.network),{chainId:r}=ke.C.parseCaipNetworkId(this.paymentAsset.network);return!!xe.y.isLowerCaseMatch(e.asset,this.paymentAsset.asset)||(!this.selectedExchange||!xe.y.isLowerCaseMatch(t.toString(),r.toString()))})}onTokenBalancesChanged(e){this.tokenBalances=e;const[t]=this.getPaymentAssetFromTokenBalances();t&&lt.setSelectedPaymentAsset(t)}async onConnectOtherWallet(){await l.a.connect(),await s.W.open({view:"PayQuote"})}onAccountStateChanged(e){const{address:t}=this.caipAddress?ke.C.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null,t){const{address:e}=this.caipAddress?ke.C.parseCaipAddress(this.caipAddress):{};e?xe.y.isLowerCaseMatch(e,t)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):s.W.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||lt.setSelectedPaymentAsset(e)}async onTransfer(){const e=He(this.quote);if(e){if(!xe.y.isLowerCaseMatch(this.selectedPaymentAsset?.asset,e.deposit.currency))throw new Error("Quote asset is not the same as the selected payment asset");const t=this.selectedPaymentAsset?.amount??"0",r=b.S.formatNumber(e.deposit.amount,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!b.S.bigNumber(t).gte(r))return void g.P.showError("Insufficient funds");if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){const{address:t}=ke.C.parseCaipAddress(this.caipAddress);await lt.onTransfer({chainNamespace:this.namespace,fromAddress:t,toAddress:e.deposit.receiver,amount:r,paymentAsset:this.selectedPaymentAsset}),lt.setRequestId(e.requestId),d.I.push("PayLoading")}}}async onSendTransactions(){const e=this.selectedPaymentAsset?.amount??"0",t=b.S.formatNumber(this.quote?.origin.amount??0,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!b.S.bigNumber(e).gte(t))return void g.P.showError("Insufficient funds");const r=Ze(this.quote),[i]=Ze(this.quote,this.completedTransactionsCount);if(i&&this.namespace){await lt.onSendTransaction({namespace:this.namespace,transactionStep:i}),this.completedTransactionsCount+=1;this.completedTransactionsCount===r.length&&(lt.setRequestId(i.requestId),d.I.push("PayLoading"))}}onPayWithExchange(){if(this.exchangeUrlForQuote){const e=A.w.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!e)throw new Error("Could not create popup window");e.location.href=this.exchangeUrlForQuote;const t=He(this.quote);t&&lt.setRequestId(t.requestId),lt.initiatePayment(),d.I.push("PayLoading")}}resetAssetsState(){lt.setSelectedPaymentAsset(null)}resetQuoteState(){lt.resetQuoteState()}};Zt.styles=Lt,_t([(0,o.wk)()],Zt.prototype,"profileName",void 0),_t([(0,o.wk)()],Zt.prototype,"paymentAsset",void 0),_t([(0,o.wk)()],Zt.prototype,"namespace",void 0),_t([(0,o.wk)()],Zt.prototype,"caipAddress",void 0),_t([(0,o.wk)()],Zt.prototype,"amount",void 0),_t([(0,o.wk)()],Zt.prototype,"recipient",void 0),_t([(0,o.wk)()],Zt.prototype,"activeConnectorIds",void 0),_t([(0,o.wk)()],Zt.prototype,"selectedPaymentAsset",void 0),_t([(0,o.wk)()],Zt.prototype,"selectedExchange",void 0),_t([(0,o.wk)()],Zt.prototype,"isFetchingQuote",void 0),_t([(0,o.wk)()],Zt.prototype,"quoteError",void 0),_t([(0,o.wk)()],Zt.prototype,"quote",void 0),_t([(0,o.wk)()],Zt.prototype,"isFetchingTokenBalances",void 0),_t([(0,o.wk)()],Zt.prototype,"tokenBalances",void 0),_t([(0,o.wk)()],Zt.prototype,"isPaymentInProgress",void 0),_t([(0,o.wk)()],Zt.prototype,"exchangeUrlForQuote",void 0),_t([(0,o.wk)()],Zt.prototype,"completedTransactionsCount",void 0),Zt=_t([(0,D.EM)("w3m-pay-quote-view")],Zt);const Vt=D.AH`
  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }

  .transfers-badge {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }
`;var Kt=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let Qt=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.paymentAsset=lt.state.paymentAsset,this.amount=lt.state.amount,this.unsubscribe.push(lt.subscribeKey("paymentAsset",e=>{this.paymentAsset=e}),lt.subscribeKey("amount",e=>{this.amount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=c.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network);return i.qy`<wui-flex
      alignItems="center"
      gap="1"
      .padding=${["1","2","1","1"]}
      class="transfers-badge"
    >
      <wui-image src=${(0,n.J)(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${e?.name??"Unknown"}
      </wui-text>
    </wui-flex>`}};Qt.styles=[Vt],Kt([(0,o.MZ)()],Qt.prototype,"paymentAsset",void 0),Kt([(0,o.MZ)()],Qt.prototype,"amount",void 0),Qt=Kt([(0,D.EM)("w3m-pay-header")],Qt);const Gt=D.AH`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      slide-down-in 120ms forwards ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      slide-up-in 120ms forwards ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var Yt=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};const Jt=["SmartSessionList"],Xt={PayWithExchange:D.f.tokens.theme.foregroundPrimary};function er(){const e=d.I.state.data?.connector?.name,t=d.I.state.data?.wallet?.name,r=d.I.state.data?.network?.name,i=t??e,o=l.a.getConnectors(),n=1===o.length&&"w3m-email"===o[0]?.id,a=c.W.getAccountData()?.socialProvider;return{Connect:`Connect ${n?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",UsageExceeded:"Usage Exceeded",ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:i?`Get ${i}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:r??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:a?a.charAt(0).toUpperCase()+a.slice(1):"Connect Social",ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Processing payment...",PayQuote:"Payment Quote",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset",SmartAccountSettings:"Smart Account Settings"}}let tr=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.heading=er()[d.I.state.view],this.network=c.W.state.activeCaipNetwork,this.networkImage=J.$.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=d.I.state.view,this.viewDirection="",this.unsubscribe.push(X.j.subscribeNetworkImages(()=>{this.networkImage=J.$.getNetworkImage(this.network)}),d.I.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.heading=er()[e]},ce.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),c.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=J.$.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=Xt[d.I.state.view]??D.f.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",e),i.qy`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){N.E.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),d.I.push("WhatIsAWallet")}async onClose(){await m.safeClose()}rightHeaderTemplate(){const e=a.H?.state?.features?.smartSessions;return"Account"===d.I.state.view&&e?i.qy`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>d.I.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return i.qy`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){if("PayQuote"===this.view)return i.qy`<w3m-pay-header></w3m-pay-header>`;const e=Jt.includes(this.view);return i.qy`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${e?i.qy`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=d.I.state,t="Connect"===e,r=a.H.state.enableEmbedded,o="ApproveTransaction"===e,s="ConnectingSiwe"===e,c="Account"===e,l=a.H.state.enableNetworkSwitch,u=o||s||t&&r;return c&&l?i.qy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,n.J)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,n.J)(this.networkImage)}
      ></wui-select>`:this.showBack&&!u?i.qy`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:i.qy`<wui-icon-button
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(N.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),d.I.push("Networks"))}isAllowedNetworkSwitch(){const e=c.W.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,r=e?.find(e=>{let{id:t}=e;return t===this.network?.id});return t||!r}onViewChange(){const{history:e}=d.I.state;let t=ce.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=ce.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){const{history:e}=d.I.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){d.I.goBack()}};tr.styles=Gt,Yt([(0,o.wk)()],tr.prototype,"heading",void 0),Yt([(0,o.wk)()],tr.prototype,"network",void 0),Yt([(0,o.wk)()],tr.prototype,"networkImage",void 0),Yt([(0,o.wk)()],tr.prototype,"showBack",void 0),Yt([(0,o.wk)()],tr.prototype,"prevHistoryLength",void 0),Yt([(0,o.wk)()],tr.prototype,"view",void 0),Yt([(0,o.wk)()],tr.prototype,"viewDirection",void 0),tr=Yt([(0,D.EM)("w3m-header")],tr);r(3723),r(702);const rr=F.AH`
  :host {
    display: flex;
    align-items: center;
    gap: ${e=>{let{spacing:t}=e;return t[1]}};
    padding: ${e=>{let{spacing:t}=e;return t[2]}} ${e=>{let{spacing:t}=e;return t[3]}}
      ${e=>{let{spacing:t}=e;return t[2]}} ${e=>{let{spacing:t}=e;return t[2]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[20]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
    background-color: ${e=>{let{tokens:t}=e;return t.core.foregroundAccent010}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}} !important;
  }
`;var ir=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let or=class extends i.WF{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return i.qy`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return"loading"===this.variant?i.qy`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:i.qy`<wui-icon-box
      size="md"
      color=${{success:"success",error:"error",warning:"warning",info:"default"}[this.variant]}
      icon=${{success:"checkmark",error:"warning",warning:"warningCircle",info:"info"}[this.variant]}
    ></wui-icon-box>`}};or.styles=[z.W5,rr],ir([(0,o.MZ)()],or.prototype,"message",void 0),ir([(0,o.MZ)()],or.prototype,"variant",void 0),or=ir([(0,M.E)("wui-snackbar")],or);const nr=i.AH`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ar=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let sr=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=g.P.state.open,this.unsubscribe.push(g.P.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=g.P.state;return i.qy` <wui-snackbar message=${e} variant=${t}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),g.P.state.autoClose&&(this.timeout=setTimeout(()=>g.P.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};sr.styles=nr,ar([(0,o.wk)()],sr.prototype,"open",void 0),sr=ar([(0,D.EM)("w3m-snackbar")],sr);const cr=(0,y.BX)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),lr={state:cr,subscribe:e=>(0,y.B1)(cr,()=>e(cr)),subscribeKey:(e,t)=>(0,f.u$)(cr,e,t),showTooltip(e){let{message:t,triggerRect:r,variant:i}=e;cr.open=!0,cr.message=t,cr.triggerRect=r,cr.variant=i},hide(){cr.open=!1,cr.message="",cr.triggerRect={width:0,height:0,top:0,left:0}}},ur=(0,C.X)(lr),dr=i.AH`
  :host {
    width: 100%;
    display: block;
  }
`;var pr=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let hr=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.text="",this.open=ur.state.open,this.unsubscribe.push(d.I.subscribeKey("view",()=>{ur.hide()}),s.W.subscribeKey("open",e=>{e||ur.hide()}),ur.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),ur.hide()}render(){return i.qy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return i.qy`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();if(!this.open){const t=document.querySelector("w3m-modal"),r={width:e.width,height:e.height,left:e.left,top:e.top};if(t){const i=t.getBoundingClientRect();r.left=e.left-(window.innerWidth-i.width)/2,r.top=e.top-(window.innerHeight-i.height)/2}ur.showTooltip({message:this.text,triggerRect:r,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||ur.hide()}};hr.styles=[dr],pr([(0,o.MZ)()],hr.prototype,"text",void 0),pr([(0,o.wk)()],hr.prototype,"open",void 0),hr=pr([(0,D.EM)("w3m-tooltip-trigger")],hr);const mr=D.AH`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${e=>{let{spacing:t}=e;return t[3]}} 10px ${e=>{let{spacing:t}=e;return t[3]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[3]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${e=>{let{spacing:t}=e;return t[5]}});
    transition: opacity ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${e=>{let{durations:t}=e;return t.xl}};
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var wr=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let gr=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.open=ur.state.open,this.message=ur.state.message,this.triggerRect=ur.state.triggerRect,this.variant=ur.state.variant,this.unsubscribe.push(ur.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,i.qy`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};gr.styles=[mr],wr([(0,o.wk)()],gr.prototype,"open",void 0),wr([(0,o.wk)()],gr.prototype,"message",void 0),wr([(0,o.wk)()],gr.prototype,"triggerRect",void 0),wr([(0,o.wk)()],gr.prototype,"variant",void 0),gr=wr([(0,D.EM)("w3m-tooltip")],gr);const yr={getTabsByNamespace:e=>Boolean(e)&&e===v.o.CHAIN.EVM?!1===a.H.state.remoteFeatures?.activity?ce.ACCOUNT_TABS.filter(e=>"Activity"!==e.label):ce.ACCOUNT_TABS:[],isValidReownName:e=>/^[a-zA-Z0-9]+$/gu.test(e),isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e),validateReownName:e=>e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){const e=d.I.state.view;if(ce.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state,r=a.H.state.features?.legalCheckbox;return!(!e&&!t||r)}return ce.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}};r(478);const fr=D.AH`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${e=>{let{spacing:t}=e;return t[3]}};
  }

  a {
    text-decoration: none;
    color: ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
    font-weight: 500;
  }
`;var br=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let vr=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=a.H.state.remoteFeatures,this.unsubscribe.push(a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state,r=a.H.state.features?.legalCheckbox;return!e&&!t||r?i.qy`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:i.qy`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=a.H.state;return e?i.qy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:e}=a.H.state;return e?i.qy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.remoteFeatures?.reownBranding?e?i.qy`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:i.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}};vr.styles=[fr],br([(0,o.wk)()],vr.prototype,"remoteFeatures",void 0),vr=br([(0,D.EM)("w3m-legal-footer")],vr);r(6282);const kr=i.AH``;var xr=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let Sr=class extends i.WF{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state;return e||t?i.qy`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return i.qy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){N.E.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,S.lj)(c.W.state.activeChain)===k.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),d.I.push("WhatIsABuy")}};Sr.styles=[kr],Sr=xr([(0,D.EM)("w3m-onramp-providers-footer")],Sr);const Tr=D.AH`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var Ar=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let Pr=class extends i.WF{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=d.I.state.view}firstUpdated(){this.status=yr.hasFooter()?"show":"hide",this.unsubscribe.push(d.I.subscribeKey("view",e=>{if(this.view=e,this.status=yr.hasFooter()?"show":"hide","hide"===this.status){document.documentElement.style.setProperty("--apkt-footer-height","0px")}})),this.resizeObserver=new ResizeObserver(e=>{for(const t of e)if(t.target===this.getWrapper()){const e=`${t.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",e)}}),this.resizeObserver.observe(this.getWrapper())}render(){return i.qy`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return yr.hasFooter()?i.qy` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return i.qy`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return i.qy`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return i.qy` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){N.E.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),d.I.push("WhatIsANetwork")}getWrapper(){return this.shadowRoot?.querySelector("div.container")}};Pr.styles=[Tr],Ar([(0,o.wk)()],Pr.prototype,"status",void 0),Ar([(0,o.wk)()],Pr.prototype,"view",void 0),Pr=Ar([(0,D.EM)("w3m-footer")],Pr);const Ir=D.AH`
  :host {
    display: block;
    width: inherit;
  }
`;var Cr=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let $r=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.viewState=d.I.state.view,this.history=d.I.state.history.join(","),this.unsubscribe.push(d.I.subscribeKey("view",()=>{this.history=d.I.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return i.qy`${this.templatePageContainer()}`}templatePageContainer(){return i.qy`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=d.I.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(e){switch(e){case"AccountSettings":return i.qy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return i.qy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return i.qy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return i.qy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return i.qy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return i.qy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return i.qy`<w3m-connect-view></w3m-connect-view>`;case"Create":return i.qy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return i.qy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return i.qy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return i.qy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return i.qy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return i.qy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return i.qy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return i.qy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return i.qy`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return i.qy`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return i.qy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return i.qy`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return i.qy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return i.qy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return i.qy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return i.qy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return i.qy`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return i.qy`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return i.qy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return i.qy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return i.qy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return i.qy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return i.qy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return i.qy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return i.qy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return i.qy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return i.qy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return i.qy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return i.qy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return i.qy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return i.qy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return i.qy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return i.qy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return i.qy`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return i.qy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return i.qy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return i.qy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return i.qy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return i.qy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return i.qy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return i.qy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return i.qy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return i.qy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return i.qy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return i.qy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return i.qy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return i.qy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return i.qy`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return i.qy`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"PayQuote":return i.qy`<w3m-pay-quote-view></w3m-pay-quote-view>`;case"FundWallet":return i.qy`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return i.qy`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return i.qy`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case"UsageExceeded":return i.qy`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;case"SmartAccountSettings":return i.qy`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`}}};$r.styles=[Ir],Cr([(0,o.wk)()],$r.prototype,"viewState",void 0),Cr([(0,o.wk)()],$r.prototype,"history",void 0),$r=Cr([(0,D.EM)("w3m-router")],$r);const Er=D.AH`
  :host {
    z-index: ${e=>{let{tokens:t}=e;return t.core.zIndex}};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.overlay}};
    backdrop-filter: blur(0px);
    transition:
      opacity ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      backdrop-filter ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      border-radius ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}},
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}},
      box-shadow ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    transition-delay: ${e=>{let{durations:t}=e;return t.md}};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${e=>{let{tokens:t}=e;return t.theme.borderPrimaryDark}};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      card-background-border var(--apkt-duration-dynamic)
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      card-background-default var(--apkt-duration-dynamic)
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      w3m-shake ${e=>{let{durations:t}=e;return t.xl}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    }
    to {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
    to {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    }
  }
`;var Nr=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};const Rr="scroll-lock",qr={PayWithExchange:"0",PayWithExchangeSelectAsset:"0",Pay:"0",PayQuote:"0",PayLoading:"0"};class Wr extends i.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=a.H.state.enableEmbedded,this.open=s.W.state.open,this.caipAddress=c.W.state.activeCaipAddress,this.caipNetwork=c.W.state.activeCaipNetwork,this.shake=s.W.state.shake,this.filterByNamespace=l.a.state.filterByNamespace,this.padding=D.f.spacing[1],this.mobileFullScreen=a.H.state.enableMobileFullScreen,this.initializeTheming(),u.N.prefetchAnalyticsConfig(),this.unsubscribe.push(s.W.subscribeKey("open",e=>e?this.onOpen():this.onClose()),s.W.subscribeKey("shake",e=>this.shake=e),c.W.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),c.W.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),a.H.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),l.a.subscribeKey("filterByNamespace",e=>{this.filterByNamespace===e||c.W.getAccountData(e)?.caipAddress||(u.N.fetchRecommendedWallets(),this.filterByNamespace=e)}),d.I.subscribeKey("view",()=>{this.dataset.border=yr.hasFooter()?"true":"false",this.padding=qr[d.I.state.view]??D.f.spacing[1]}))}firstUpdated(){if(this.dataset.border=yr.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded)return s.W.close(),void this.prefetch();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded?i.qy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?i.qy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return i.qy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,n.J)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){if(e.target===e.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await m.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=w.W.state,r=D.Zv.getColorTheme(t);(0,D.RF)(e,r)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),g.P.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Rr,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${Rr}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){const t=c.W.state.isSwitchingNamespace,r="ProfileWallets"===d.I.state.view;!e&&!t&&!r&&s.W.close(),await h.U.initializeIfEnabled(e),this.caipAddress=e,c.W.setIsSwitchingNamespace(!1)}onNewNetwork(e){const t=this.caipNetwork,r=t?.caipNetworkId?.toString(),i=e?.caipNetworkId?.toString(),o=r!==i,n="UnsupportedChain"===d.I.state.view,a=s.W.state.open;let c=!1;this.enableEmbedded&&"SwitchNetwork"===d.I.state.view&&(c=!0),o&&U.resetState(),a&&n&&(c=!0),c&&"SIWXSignMessage"!==d.I.state.view&&d.I.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(u.N.prefetch(),u.N.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}Wr.styles=Er,Nr([(0,o.MZ)({type:Boolean})],Wr.prototype,"enableEmbedded",void 0),Nr([(0,o.wk)()],Wr.prototype,"open",void 0),Nr([(0,o.wk)()],Wr.prototype,"caipAddress",void 0),Nr([(0,o.wk)()],Wr.prototype,"caipNetwork",void 0),Nr([(0,o.wk)()],Wr.prototype,"shake",void 0),Nr([(0,o.wk)()],Wr.prototype,"filterByNamespace",void 0),Nr([(0,o.wk)()],Wr.prototype,"padding",void 0),Nr([(0,o.wk)()],Wr.prototype,"mobileFullScreen",void 0);let Or=class extends Wr{};Or=Nr([(0,D.EM)("w3m-modal")],Or);let Ur=class extends Wr{};Ur=Nr([(0,D.EM)("appkit-modal")],Ur);const Dr=D.AH`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    background-color: ${e=>{let{colors:t}=e;return t.semanticError010}};
  }
`;var zr=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let Mr=class extends i.WF{constructor(){super()}render(){return i.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="error" name="warningCircle"></wui-icon>
        </wui-flex>

        <wui-text variant="lg-medium" color="primary" align="center">
          The app isn't responding as expected
        </wui-text>
        <wui-text variant="md-regular" color="secondary" align="center">
          Try again or reach out to the app team for help.
        </wui-text>

        <wui-button
          variant="neutral-secondary"
          size="md"
          @click=${this.onTryAgainClick.bind(this)}
          data-testid="w3m-usage-exceeded-button"
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try Again
        </wui-button>
      </wui-flex>
    `}onTryAgainClick(){d.I.goBack()}};Mr.styles=Dr,Mr=zr([(0,D.EM)("w3m-usage-exceeded-view")],Mr);var Fr=r(8140);r(115);const Br=D.AH`
  :host {
    width: 100%;
  }
`;var jr=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let Lr=class extends i.WF{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0,this.namespaces=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(e){super.updated(e),(e.has("name")||e.has("imageSrc")||e.has("walletRank"))&&(this.hasImpressionSent=!1);e.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{!e.isIntersecting||this.loading||this.hasImpressionSent||this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){this.name&&!this.hasImpressionSent&&this.walletRank&&(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&N.E.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:d.I.state.view,displayIndex:this.displayIndex}))}handleGetWalletNamespaces(){return Object.keys(Fr.q.state.adapters).length>1?this.namespaces:[]}render(){return i.qy`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${(0,n.J)(this.imageSrc)}
        name=${this.name}
        size=${(0,n.J)(this.size)}
        tagLabel=${(0,n.J)(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `}};Lr.styles=Br,jr([(0,o.MZ)({type:Array})],Lr.prototype,"walletImages",void 0),jr([(0,o.MZ)()],Lr.prototype,"imageSrc",void 0),jr([(0,o.MZ)()],Lr.prototype,"name",void 0),jr([(0,o.MZ)()],Lr.prototype,"size",void 0),jr([(0,o.MZ)()],Lr.prototype,"tagLabel",void 0),jr([(0,o.MZ)()],Lr.prototype,"tagVariant",void 0),jr([(0,o.MZ)()],Lr.prototype,"walletIcon",void 0),jr([(0,o.MZ)()],Lr.prototype,"tabIdx",void 0),jr([(0,o.MZ)({type:Boolean})],Lr.prototype,"disabled",void 0),jr([(0,o.MZ)({type:Boolean})],Lr.prototype,"showAllWallets",void 0),jr([(0,o.MZ)({type:Boolean})],Lr.prototype,"loading",void 0),jr([(0,o.MZ)({type:String})],Lr.prototype,"loadingSpinnerColor",void 0),jr([(0,o.MZ)()],Lr.prototype,"rdnsId",void 0),jr([(0,o.MZ)()],Lr.prototype,"displayIndex",void 0),jr([(0,o.MZ)()],Lr.prototype,"walletRank",void 0),jr([(0,o.MZ)({type:Array})],Lr.prototype,"namespaces",void 0),Lr=jr([(0,D.EM)("w3m-list-wallet")],Lr);const _r=D.AH`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${e=>{let{durations:t}=e;return t.lg}};
    --local-transition: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${e=>{let{durations:t}=e;return t.lg}});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${e=>{let{durations:t}=e;return t.lg}});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var Hr=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let Zr=class extends i.WF{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=a.H.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(e){if(e.has("history")){const e=this.history;""!==this.historyState&&this.historyState!==e&&this.onViewChange(e)}e.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),e.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(e=>{for(const t of e)if(t.target===this.getWrapper()){let e=t.contentRect.height;const r=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");if(this.mobileFullScreen){e=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-r,this.style.setProperty("--local-border-bottom-radius","0px")}else{e=e+r,this.style.setProperty("--local-border-bottom-radius",r?"var(--apkt-borderRadius-5)":"0px")}this.style.setProperty("--local-container-height",`${e}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${e}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),window.visualViewport?.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){const e=this.getWrapper();e&&this.resizeObserver&&this.resizeObserver.unobserve(e),window.removeEventListener("resize",this.onViewportResize),window.visualViewport?.removeEventListener("resize",this.onViewportResize)}render(){return i.qy`
      <div class="container" data-mobile-fullscreen="${(0,n.J)(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${(0,n.J)(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(e){const t=e.split(",").filter(Boolean),r=this.historyState.split(",").filter(Boolean),i=r.length,o=t.length,n=t[t.length-1]||"",a=D.Zv.cssDurationToNumber(this.transitionDuration);let s="";o>i?s="next":o<i?s="prev":o===i&&t[o-1]!==r[i-1]&&(s="next"),this.viewDirection=`${s}-${n}`,setTimeout(()=>{this.historyState=e,this.setView?.(n)},a),setTimeout(()=>{this.viewDirection=""},2*a)}getWrapper(){return this.shadowRoot?.querySelector("div.page")}updateContainerHeight(){const e=this.getWrapper();if(!e)return;const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");let r=0;if(this.mobileFullScreen){r=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-t,this.style.setProperty("--local-border-bottom-radius","0px")}else r=e.getBoundingClientRect().height+t,this.style.setProperty("--local-border-bottom-radius",t?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${r}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${r}px`}getHeaderHeight(){return 60}};Zr.styles=[_r],Hr([(0,o.MZ)({type:String})],Zr.prototype,"transitionDuration",void 0),Hr([(0,o.MZ)({type:String})],Zr.prototype,"transitionFunction",void 0),Hr([(0,o.MZ)({type:String})],Zr.prototype,"history",void 0),Hr([(0,o.MZ)({type:String})],Zr.prototype,"view",void 0),Hr([(0,o.MZ)({attribute:!1})],Zr.prototype,"setView",void 0),Hr([(0,o.wk)()],Zr.prototype,"viewDirection",void 0),Hr([(0,o.wk)()],Zr.prototype,"historyState",void 0),Hr([(0,o.wk)()],Zr.prototype,"previousHeight",void 0),Hr([(0,o.wk)()],Zr.prototype,"mobileFullScreen",void 0),Zr=Hr([(0,D.EM)("w3m-router-container")],Zr)}}]);
//# sourceMappingURL=5102.733ce297.chunk.js.map