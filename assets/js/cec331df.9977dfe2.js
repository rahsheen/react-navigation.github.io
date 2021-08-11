(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[8873],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98257:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var i=n(74034),r=n(79973),a=(n(67294),n(3905)),o={id:"testing",title:"Testing with Jest",sidebar_label:"Testing with Jest"},s={unversionedId:"testing",id:"version-5.x/testing",isDocsHomePage:!1,title:"Testing with Jest",description:"Testing code using React Navigation takes some setup since we need to mock some native dependencies used in the navigators. We recommend using Jest to write unit tests.",source:"@site/versioned_docs/version-5.x/testing.md",sourceDirName:".",slug:"/testing",permalink:"/docs/5.x/testing",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/testing.md",version:"5.x",sidebar_label:"Testing with Jest",frontMatter:{id:"testing",title:"Testing with Jest",sidebar_label:"Testing with Jest"},sidebar:"version-5.x/docs",previous:{title:"State persistence",permalink:"/docs/5.x/state-persistence"},next:{title:"Type checking with TypeScript",permalink:"/docs/5.x/typescript"}},c=[{value:"Mocking native modules",id:"mocking-native-modules",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Testing code using React Navigation takes some setup since we need to mock some native dependencies used in the navigators. We recommend using ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io"},"Jest")," to write unit tests."),(0,a.kt)("h2",{id:"mocking-native-modules"},"Mocking native modules"),(0,a.kt)("p",null,"To be able to test React Navigation components, we need to mock the following dependencies including native code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"react-native-reanimated")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"react-native-gesture-handler"))),(0,a.kt)("p",null,"To add the mocks, create a file ",(0,a.kt)("inlineCode",{parentName:"p"},"jest/setup.js")," (or any other file name of your choice) and paste the following code in it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import 'react-native-gesture-handler/jestSetup';\n\njest.mock('react-native-reanimated', () => {\n  const Reanimated = require('react-native-reanimated/mock');\n\n  // The mock for `call` immediately calls the callback which is incorrect\n  // So we override it with a no-op\n  Reanimated.default.call = () => {};\n\n  return Reanimated;\n});\n\n// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing\njest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');\n\n// As of react-native@0.64.X file has moved\njest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');\n\n")),(0,a.kt)("p",null,"Then we need to use this setup file in our jest config. You can add it under ",(0,a.kt)("inlineCode",{parentName:"p"},"setupFiles")," option in a ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.config.js")," file or the ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," key in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "preset": "react-native",\n  "setupFiles": [\n    "<rootDir>/jest/setup.js"\n  ],\n}\n')),(0,a.kt)("p",null,"Make sure that the path to the file in ",(0,a.kt)("inlineCode",{parentName:"p"},"setupFiles")," is correct. Jest will run these files before running your tests, so it's the best place to put your global mocks."),(0,a.kt)("p",null,"If you're not using Jest, then you'll need to mock these modules according to the test framework you are using."))}u.isMDXComponent=!0}}]);