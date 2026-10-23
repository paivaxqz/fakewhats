"use client";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// registry/fakewhats/whatsapp-chat/whatsapp-chat.tsx
import { useLayoutEffect as useLayoutEffect2, useRef as useRef2, useState as useState2 } from "react";

// registry/fakewhats/whatsapp-chat/icons.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Svg(_a) {
  var _b = _a, { size = 24, children } = _b, props = __objRest(_b, ["size", "children"]);
  return /* @__PURE__ */ jsx(
    "svg",
    __spreadProps(__spreadValues({
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": true
    }, props), {
      children
    })
  );
}
var ChevronLeft = (p) => /* @__PURE__ */ jsx(Svg, __spreadProps(__spreadValues({}, p), { children: /* @__PURE__ */ jsx("path", { d: "M15 4 7 12l8 8" }) }));
var Plus = (p) => /* @__PURE__ */ jsx(Svg, __spreadProps(__spreadValues({}, p), { children: /* @__PURE__ */ jsx("path", { d: "M12 4v16M4 12h16" }) }));
var MicFilled = (p) => /* @__PURE__ */ jsxs(Svg, __spreadProps(__spreadValues({}, p), { fill: "currentColor", stroke: "none", children: [
  /* @__PURE__ */ jsx("rect", { x: "8.5", y: "2", width: "7", height: "13", rx: "3.5" }),
  /* @__PURE__ */ jsx("path", { d: "M5 11a1 1 0 1 1 2 0 5 5 0 0 0 10 0 1 1 0 1 1 2 0 7 7 0 0 1-6 6.93V21a1 1 0 1 1-2 0v-3.07A7 7 0 0 1 5 11Z" })
] }));
var Send = (p) => /* @__PURE__ */ jsx(Svg, __spreadProps(__spreadValues({}, p), { fill: "currentColor", stroke: "none", children: /* @__PURE__ */ jsx("path", { d: "M3.4 20.4 21 12 3.4 3.6 3.4 10.2 15 12 3.4 13.8Z" }) }));
var Play = (p) => /* @__PURE__ */ jsx(Svg, __spreadProps(__spreadValues({}, p), { fill: "currentColor", stroke: "none", children: /* @__PURE__ */ jsx("path", { d: "M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z" }) }));
var Reply = (p) => /* @__PURE__ */ jsx(Svg, __spreadProps(__spreadValues({}, p), { children: /* @__PURE__ */ jsx("path", { d: "M10 6 4 12l6 6M4 12h10a6 6 0 0 1 6 6" }) }));
var ListIcon = (p) => /* @__PURE__ */ jsxs(Svg, __spreadProps(__spreadValues({}, p), { children: [
  /* @__PURE__ */ jsx("path", { d: "M9 6h11M9 12h11M9 18h11" }),
  /* @__PURE__ */ jsx("circle", { cx: "4.5", cy: "6", r: ".8", fill: "currentColor" }),
  /* @__PURE__ */ jsx("circle", { cx: "4.5", cy: "12", r: ".8", fill: "currentColor" }),
  /* @__PURE__ */ jsx("circle", { cx: "4.5", cy: "18", r: ".8", fill: "currentColor" })
] }));
var Forward = (p) => /* @__PURE__ */ jsx(Svg, __spreadProps(__spreadValues({}, p), { children: /* @__PURE__ */ jsx("path", { d: "m14 6 6 6-6 6M20 12H10a6 6 0 0 0-6 6" }) }));
var Star = (p) => /* @__PURE__ */ jsx(Svg, __spreadProps(__spreadValues({}, p), { fill: "currentColor", stroke: "none", children: /* @__PURE__ */ jsx("path", { d: "m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" }) }));
var Lock = (p) => /* @__PURE__ */ jsxs(Svg, __spreadProps(__spreadValues({}, p), { children: [
  /* @__PURE__ */ jsx("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ jsx("path", { d: "M8 11V8a4 4 0 0 1 8 0v3" })
] }));
var Verified = (p) => /* @__PURE__ */ jsxs(Svg, __spreadProps(__spreadValues({}, p), { stroke: "none", children: [
  /* @__PURE__ */ jsx(
    "path",
    {
      fill: "#25d366",
      d: "m12 1.5 2.6 1.9 3.2-.1 1 3 2.6 1.9-1 3.1 1 3.1-2.6 1.9-1 3-3.2-.1L12 22.5l-2.6-1.9-3.2.1-1-3-2.6-1.9 1-3.1-1-3.1 2.6-1.9 1-3 3.2.1Z"
    }
  ),
  /* @__PURE__ */ jsx("path", { d: "m7.8 12.2 2.8 2.8 5.6-5.6", stroke: "#fff", strokeWidth: 2.2, fill: "none" })
] }));
var Clock = (p) => /* @__PURE__ */ jsxs(Svg, __spreadProps(__spreadValues({}, p), { strokeWidth: 1.8, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "8" }),
  /* @__PURE__ */ jsx("path", { d: "M12 7.5V12l3 2" })
] }));
var Check = (p) => {
  var _a, _b;
  return /* @__PURE__ */ jsx("svg", { width: (_a = p.size) != null ? _a : 16, height: ((_b = p.size) != null ? _b : 16) * 11 / 16, viewBox: "0 0 16 11", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsx("path", { d: "M11.07.65 4.6 7.3 1.9 4.6.6 5.9l4 4L12.4 1.95Z" }) });
};
var DoubleCheck = (p) => {
  var _a, _b;
  return /* @__PURE__ */ jsxs("svg", { width: (_a = p.size) != null ? _a : 16, height: ((_b = p.size) != null ? _b : 16) * 11 / 16, viewBox: "0 0 16 11", fill: "currentColor", "aria-hidden": true, children: [
    /* @__PURE__ */ jsx("path", { d: "M11.07.65 4.6 7.3 1.9 4.6.6 5.9l4 4L12.4 1.95Z" }),
    /* @__PURE__ */ jsx("path", { d: "M15.07.65 8.6 7.3l-.9-.9-1.3 1.3 2.2 2.2L16.4 1.95Z" })
  ] });
};
var Signal = ({ bars = 4, size = 17 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size * 11 / 17, viewBox: "0 0 17 11", fill: "currentColor", "aria-hidden": true, children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsx("rect", { x: i * 4.5, y: 8 - i * 2.6, width: "3", height: 3 + i * 2.6, rx: ".8", opacity: i < bars ? 1 : 0.3 }, i)) });
var ChevronDown = (p) => /* @__PURE__ */ jsx(Svg, __spreadProps(__spreadValues({}, p), { children: /* @__PURE__ */ jsx("path", { d: "m6 9 6 6 6-6" }) }));
var Moon = ({ size = 16 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsx("path", { d: "M6.2 1.2a.6.6 0 0 1 .6.8 5.6 5.6 0 0 0 7.2 7.2.6.6 0 0 1 .8.6A7 7 0 1 1 6.2 1.2Z" }) });
var Pin = ({ size = 18 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 18 18", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsx("path", { d: "M4.6 2h8.8a.9.9 0 0 1 .6 1.6l-1.6 1.2.9 4.3 2 1.4a.9.9 0 0 1-.5 1.6H9.6l-.4 4.6a.2.2 0 0 1-.4 0l-.4-4.6H3.2a.9.9 0 0 1-.5-1.6l2-1.4.9-4.3L4 3.6A.9.9 0 0 1 4.6 2Z" }) });
var LinkIcon = (p) => /* @__PURE__ */ jsxs(Svg, __spreadProps(__spreadValues({}, p), { strokeWidth: 2, children: [
  /* @__PURE__ */ jsx("path", { d: "M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1.2 1.2" }),
  /* @__PURE__ */ jsx("path", { d: "M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1.2-1.2" })
] }));
var ShareArrow = ({ size = 18 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 18 18", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsx("path", { d: "M10.4 2.4a.6.6 0 0 1 .65.1l5.6 5.2a.6.6 0 0 1 0 .9l-5.6 5.2a.6.6 0 0 1-1-.45V10.9c-3.6 0-6 .9-8 3.6a.4.4 0 0 1-.7-.3C2.1 8.9 5 6.1 10.05 5.8V2.95a.6.6 0 0 1 .35-.55Z" }) });
var PersonFilled = ({ size = 18 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 18 18", fill: "currentColor", "aria-hidden": true, children: [
  /* @__PURE__ */ jsx("circle", { cx: "9", cy: "5.6", r: "3.6" }),
  /* @__PURE__ */ jsx("path", { d: "M2.2 15.4c0-3.2 3-5.2 6.8-5.2s6.8 2 6.8 5.2c0 .5-.4.8-.9.8H3.1c-.5 0-.9-.3-.9-.8Z" })
] });
var StickerIOS = (p) => /* @__PURE__ */ jsxs(Svg, __spreadProps(__spreadValues({}, p), { strokeWidth: 1.9, children: [
  /* @__PURE__ */ jsx("path", { d: "M20.5 12.6V8a4.5 4.5 0 0 0-4.5-4.5H8A4.5 4.5 0 0 0 3.5 8v8A4.5 4.5 0 0 0 8 20.5h4.6c.9 0 1.6-.3 2.2-.9l5.3-5.3c.6-.6.9-1.3.9-2.2Z" }),
  /* @__PURE__ */ jsx("path", { d: "M12.8 20.4c.1-1.8.4-3.6 1.6-4.8s3-1.5 4.8-1.6" })
] }));
var CameraIOS = (p) => /* @__PURE__ */ jsxs(Svg, __spreadProps(__spreadValues({}, p), { strokeWidth: 1.8, children: [
  /* @__PURE__ */ jsx("path", { d: "M3 9a2.5 2.5 0 0 1 2.5-2.5h1.6c.6 0 1.1-.3 1.4-.8l.7-1.2c.3-.5.8-.8 1.4-.8h2.8c.6 0 1.1.3 1.4.8l.7 1.2c.3.5.8.8 1.4.8h1.6A2.5 2.5 0 0 1 21 9v8.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5Z" }),
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "13", r: "3.7" })
] }));
var PhoneOutline = (p) => /* @__PURE__ */ jsx(Svg, __spreadProps(__spreadValues({}, p), { strokeWidth: 1.7, children: /* @__PURE__ */ jsx("path", { d: "M7.4 3.2 9 3a1.2 1.2 0 0 1 1.2.7l1.3 3a1.2 1.2 0 0 1-.3 1.4L9.8 9.3a10.6 10.6 0 0 0 4.9 4.9l1.2-1.4a1.2 1.2 0 0 1 1.4-.3l3 1.3a1.2 1.2 0 0 1 .7 1.2l-.2 1.6a3.4 3.4 0 0 1-3.5 3A15.5 15.5 0 0 1 4.4 6.7a3.4 3.4 0 0 1 3-3.5Z" }) }));
var SignalIOS = ({ bars = 4 }) => /* @__PURE__ */ jsx("svg", { width: "18", height: "12", viewBox: "0 0 18 12", fill: "currentColor", "aria-hidden": true, children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsx("rect", { x: i * 4.8, y: 9 - i * 3, width: "3.2", height: 3 + i * 3, rx: "1", opacity: i < bars ? 1 : 0.35 }, i)) });
var BatteryIOS = ({
  level = 0.8,
  showPercent = true,
  charging = false
}) => {
  const pct = Math.round(Math.max(0, Math.min(1, level)) * 100);
  return /* @__PURE__ */ jsxs("span", { className: "relative inline-flex items-center", children: [
    /* @__PURE__ */ jsxs("span", { className: "relative flex h-[13px] w-[25px] items-center justify-center overflow-hidden rounded-[4.3px] bg-current/35", children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "absolute inset-y-0 left-0",
          style: { width: `${pct}%`, background: charging ? "#45b55f" : pct <= 20 ? "#ff453a" : "currentColor" }
        }
      ),
      showPercent && /* @__PURE__ */ jsx(
        "span",
        {
          className: "relative text-[12.5px] font-bold leading-none tracking-[-0.04em] text-[var(--wa-batt-text,#000)] [font-variant-numeric:tabular-nums]",
          style: charging ? { color: "#ffffff" } : pct <= 20 ? { color: "currentColor" } : void 0,
          children: pct
        }
      ),
      charging && /* @__PURE__ */ jsx("svg", { width: "6", height: "9", viewBox: "0 0 6 9", className: "relative -mr-[1px] ml-[0.5px]", "aria-hidden": true, children: /* @__PURE__ */ jsx("path", { d: "M3.6 0 0 5h2.4L1.9 9 6 3.6H3.5Z", fill: "#ffffff" }) })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "ml-[1px] h-[4px] w-[1.5px] rounded-r-full bg-current opacity-40" })
  ] });
};
var ContactCard = ({ size = 24 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, "aria-hidden": true, children: [
  /* @__PURE__ */ jsx("rect", { x: "3.5", y: "7", width: "17", height: "14", rx: "2.5" }),
  /* @__PURE__ */ jsx("path", { d: "M6 4.6h12M8 2.4h8", strokeLinecap: "round" }),
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12.4", r: "2.6" }),
  /* @__PURE__ */ jsx("path", { d: "M7.2 19.5c.6-2.3 2.6-3.6 4.8-3.6s4.2 1.3 4.8 3.6", strokeLinecap: "round" })
] });
var VideoIOS = ({ size = 24 }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinejoin: "round",
    "aria-hidden": true,
    children: [
      /* @__PURE__ */ jsx("rect", { x: "1.5", y: "5.5", width: "15", height: "13", rx: "3" }),
      /* @__PURE__ */ jsx("path", { d: "M16.5 10.2 22 6.8v10.4l-5.5-3.4Z" })
    ]
  }
);
var TicksIOS = ({ double = true }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: "17",
    height: "11",
    viewBox: "0 0 17 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    children: [
      /* @__PURE__ */ jsx("path", { d: "m1 6.2 2.8 3.1L10.2 1.2" }),
      double && /* @__PURE__ */ jsx("path", { d: "M8.3 9.3 15.6 1.2" })
    ]
  }
);
var SignalDualIOS = ({ bars = 4, bars2 = 4 }) => /* @__PURE__ */ jsx("svg", { width: "17", height: "13", viewBox: "0 0 16.5 13", fill: "currentColor", "aria-hidden": true, children: [3.9, 5, 6.4, 8].map((h, i) => /* @__PURE__ */ jsxs("g", { opacity: 1, children: [
  /* @__PURE__ */ jsx("rect", { x: i * 4.5, y: 8 - h, width: "3", height: h, rx: "1", opacity: i < bars ? 1 : 0.3 }),
  /* @__PURE__ */ jsx("rect", { x: i * 4.5, y: "9.75", width: "3", height: "3.25", rx: "0.9", opacity: i < bars2 ? 1 : 0.3 })
] }, i)) });
var WifiIOS = ({ bars = 3 }) => /* @__PURE__ */ jsxs("svg", { width: "16", height: "12.6", viewBox: "0 0 16 12.6", "aria-hidden": true, children: [
  /* @__PURE__ */ jsxs("g", { fill: "none", stroke: "currentColor", strokeWidth: "2.6", strokeLinecap: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M1.5 3.93A10.6 10.6 0 0 1 14.5 3.93", opacity: bars >= 3 ? 1 : 0.3 }),
    /* @__PURE__ */ jsx("path", { d: "M4.08 7.24A6.4 6.4 0 0 1 11.92 7.24", opacity: bars >= 2 ? 1 : 0.3 })
  ] }),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M8 12.3 5.59 9.63A3.6 3.6 0 0 1 10.41 9.63Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: "0.8",
      strokeLinejoin: "round",
      opacity: bars >= 1 ? 1 : 0.3
    }
  )
] });
var CameraFilled = ({ size = 16 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsx(
  "path",
  {
    d: "M9.2 3.5h5.6c.6 0 1.1.3 1.4.8l1 1.7H20a2.5 2.5 0 0 1 2.5 2.5v9.5A2.5 2.5 0 0 1 20 20.5H4A2.5 2.5 0 0 1 1.5 18V8.5A2.5 2.5 0 0 1 4 6h2.8l1-1.7c.3-.5.8-.8 1.4-.8ZM12 17.3a4.3 4.3 0 1 0 0-8.6 4.3 4.3 0 0 0 0 8.6Zm0-2.3a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z",
    fillRule: "evenodd"
  }
) });
var ArrowBackAndroid = ({ size = 24 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsx("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z" }) });
var CallAndroid = ({ size = 24 }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinejoin: "round",
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx("path", { d: "M6.6 3.5h-2a1.5 1.5 0 0 0-1.5 1.6A16.5 16.5 0 0 0 18.9 20.9a1.5 1.5 0 0 0 1.6-1.5v-2.2a1.3 1.3 0 0 0-1-1.3l-3.2-.8a1.3 1.3 0 0 0-1.3.4l-1.4 1.6a12.3 12.3 0 0 1-5.6-5.6l1.6-1.4a1.3 1.3 0 0 0 .4-1.3l-.8-3.2a1.3 1.3 0 0 0-1.3-1Z" })
  }
);
var CaretDown = ({ size = 8 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size * 0.6, viewBox: "0 0 10 6", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsx("path", { d: "M0 0h10L5 6Z" }) });
var DotsAndroid = ({ size = 24 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "5.5", r: "1.9" }),
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "1.9" }),
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "18.5", r: "1.9" })
] });
var StickerSmile = ({ size = 24 }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M21 12.5A9 9 0 1 0 12.5 21c1 0 1.6-.3 2.3-1l5.2-5.2c.7-.7 1-1.3 1-2.3Z" }),
      /* @__PURE__ */ jsx("path", { d: "M13 21c.1-1.9.4-3.4 1.6-4.6S17.3 14.9 21 14.8" }),
      /* @__PURE__ */ jsx("path", { d: "M8 14.2c.9 1.2 2.4 1.9 4 1.7" }),
      /* @__PURE__ */ jsx("circle", { cx: "9", cy: "9.8", r: ".9", fill: "currentColor", stroke: "none" }),
      /* @__PURE__ */ jsx("circle", { cx: "15", cy: "9.8", r: ".9", fill: "currentColor", stroke: "none" })
    ]
  }
);
var PaperclipAndroid = ({ size = 24 }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx("path", { d: "M15.5 6.5v10a3.5 3.5 0 0 1-7 0V5a2.3 2.3 0 0 1 4.6 0v10.5a1.1 1.1 0 0 1-2.2 0V7" })
  }
);
var CameraAndroid = ({ size = 24 }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinejoin: "round",
    "aria-hidden": true,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M3 8.5A1.5 1.5 0 0 1 4.5 7h3l1.6-2.2h5.8L16.5 7h3A1.5 1.5 0 0 1 21 8.5v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5Z" }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "13.3", r: "3.6" })
    ]
  }
);
var NavRecents = () => /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor", "aria-hidden": true, children: [
  /* @__PURE__ */ jsx("rect", { x: "0.5", y: "0", width: "1.6", height: "14", rx: ".8" }),
  /* @__PURE__ */ jsx("rect", { x: "6.2", y: "0", width: "1.6", height: "14", rx: ".8" }),
  /* @__PURE__ */ jsx("rect", { x: "11.9", y: "0", width: "1.6", height: "14", rx: ".8" })
] });
var NavHome = () => /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.6, "aria-hidden": true, children: /* @__PURE__ */ jsx("rect", { x: "1", y: "1", width: "14", height: "14", rx: "5" }) });
var NavBack = () => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "9",
    height: "16",
    viewBox: "0 0 9 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx("path", { d: "M8 1 1 8l7 7" })
  }
);
var BatteryAndroid = ({ level = 0.8, charging = false }) => {
  const pct = Math.max(0, Math.min(1, level));
  const top = 1.6 + 10.4 * (1 - pct);
  return /* @__PURE__ */ jsxs("svg", { width: "8", height: "12", viewBox: "0 0 8 12", "aria-hidden": true, children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "wa-batt-android", children: /* @__PURE__ */ jsx("rect", { x: ".25", y: "1.6", width: "7.5", height: "10.4", rx: "1.7" }) }) }),
    /* @__PURE__ */ jsx("rect", { x: "2.25", y: "0", width: "3.5", height: "2", rx: ".7", fill: "currentColor", opacity: pct >= 0.98 ? 1 : 0.35 }),
    /* @__PURE__ */ jsx("rect", { x: ".25", y: "1.6", width: "7.5", height: "10.4", rx: "1.7", fill: "currentColor", opacity: ".35" }),
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "0",
        y: top,
        width: "8",
        height: 12 - top,
        clipPath: "url(#wa-batt-android)",
        fill: charging ? "#21c063" : "currentColor"
      }
    )
  ] });
};

// registry/fakewhats/whatsapp-chat/wallpaper.tsx
import { useId } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var objects = {
  laptop: {
    w: 60,
    h: 42,
    d: "M7 0h46a3 3 0 0 1 3 3v31H4V3a3 3 0 0 1 3-3ZM8 4h44v26H8ZM13 24l8-7 6 5 9-10 7 4M0 36h60l-3 5a1.5 1.5 0 0 1-1.4 1H4.4A1.5 1.5 0 0 1 3 41ZM25 36v1.5h10V36"
  },
  basket: {
    w: 46,
    h: 34,
    d: "M10 12 18 1M36 12 28 1M3 12h40a3 3 0 0 1 0 6H3a3 3 0 0 1 0-6ZM3 18l3 15h34l3-15M15 18v15M23 18v15M31 18v15M5 25.5h36"
  },
  phone: {
    w: 26,
    h: 46,
    d: "M5 0h16a5 5 0 0 1 5 5v36a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5ZM10 4h6M10 41h6M13 28c-5-3.5-7-6-7-8.5a3.5 3.5 0 0 1 7-1 3.5 3.5 0 0 1 7 1c0 2.5-2 5-7 8.5Z"
  },
  scooter: {
    w: 56,
    h: 36,
    d: "M8 35a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM8 30.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM48 35a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM48 30.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM15 28h17l6-6h10M48 28 40 3h-7M10 20h15a3 3 0 0 0 0-6H12M25 20c5 0 8 2 9 7"
  },
  burger: {
    w: 42,
    h: 34,
    d: "M2 14a19 12 0 0 1 38 0ZM14 7l2 1M21 5l2 1M28 8l2 1M1 18q3-3 6 0t6 0 6 0 6 0 6 0 6 0 6 0M5 20h32a3 3 0 0 1 0 6H5a3 3 0 0 1 0-6ZM2 28h38v1a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5Z"
  },
  rocket: {
    w: 30,
    h: 50,
    d: "M15 0c8 7 10 18 9 30H6C5 18 7 7 15 0ZM15 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM6 24 0 34v6l7-4M24 24l6 10v6l-7-4M10 34q5 16 5 16t5-16"
  },
  plant: {
    w: 34,
    h: 46,
    d: "M6 30h22l-3 16H9ZM5.5 26h23a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 4 29.5v-2A1.5 1.5 0 0 1 5.5 26ZM17 26V12M17 18C9 18 4 13 4 6c7 0 13 4 13 12ZM17 14c0-8 5-12 13-12 0 8-5 12-13 12Z"
  },
  gamepad: {
    w: 54,
    h: 32,
    d: "M14 0h26a14 14 0 0 1 13.5 17L51 27a6 6 0 0 1-10 2.5L36 24H18l-5 5.5A6 6 0 0 1 3 27L.5 17A14 14 0 0 1 14 0ZM14 8v10M9 13h10M38 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM43 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM33 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM38 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
  },
  coffee: {
    w: 30,
    h: 44,
    d: "M2 8h26V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2ZM8 3l2-3h10l2 3M3 8l3 36h18l3-36M4.5 18h21l-1 12h-19Z"
  },
  camera: {
    w: 48,
    h: 36,
    d: "M5 6h38a5 5 0 0 1 5 5v20a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5ZM14 6l3-6h14l3 6M24 30a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM24 26a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM39 11h5v3h-5Z"
  },
  sneaker: {
    w: 54,
    h: 28,
    d: "M2 22c0-6 2-14 8-20l5 6c4 2 10 3 14 2l8 4c8 3 15 2 20 6a5 5 0 0 1 2 6H4a2 2 0 0 1-2-2ZM2 24h52M16 9l3-3M20 11l3-3M24 12l3-3"
  },
  icecream: {
    w: 26,
    h: 46,
    d: "M4 20l9 26 9-26M6 24l12 8M20 24 8 32M4 20a9 9 0 1 1 18 0ZM13 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
  },
  planet: {
    w: 44,
    h: 30,
    d: "M22 26a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6 20C-3 24 2 27 12 25c10-2 22-7 28-12 5-4 2-6-6-4"
  },
  headphones: {
    w: 40,
    h: 40,
    d: "M5 26v-6a15 15 0 0 1 30 0v6M5 24h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3ZM35 24h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3Z"
  },
  bag: {
    w: 34,
    h: 40,
    d: "M3 12h28l2 28H1ZM11 16V8a6 6 0 0 1 12 0v8"
  },
  plane: {
    w: 42,
    h: 30,
    d: "M0 13 42 0 30 30 19 19ZM19 19 42 0M19 19v10l5-5"
  }
};
var TILE = 420;
var smalls = {
  lock: {
    w: 16,
    h: 20,
    d: "M3 9h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2ZM4.5 9V6a3.5 3.5 0 0 1 7 0v3M8 13v3"
  },
  tag: { w: 22, h: 22, d: "M2 3v8l10 10 9-9L11 2H3a1 1 0 0 0-1 1ZM7 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" },
  heart: { w: 22, h: 20, d: "M11 19S1 13 1 6.5A5 5 0 0 1 11 4a5 5 0 0 1 10 2.5C21 13 11 19 11 19Z" },
  star: { w: 22, h: 21, d: "m11 1 3 6.3 7 1-5 4.8 1.2 6.9L11 16.8 4.8 20l1.2-6.9-5-4.8 7-1Z" },
  bottle: { w: 14, h: 26, d: "M5 1h4v5l3 4v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10l3-4ZM2 15h10" },
  coin: {
    w: 22,
    h: 22,
    d: "M11 21a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM14 8c-.6-1.2-1.7-1.8-3-1.8-1.7 0-3 .9-3 2.3 0 3.3 6 1.6 6 4.8 0 1.4-1.3 2.3-3 2.3-1.5 0-2.7-.6-3.2-1.8M11 4.5v1.7M11 15.8v1.7"
  },
  note: { w: 20, h: 22, d: "M7 17V3l12-2v14M7 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" },
  cloud: { w: 28, h: 18, d: "M7 17a6 6 0 0 1-.6-12A8 8 0 0 1 21.5 7 5 5 0 0 1 21 17Z" },
  bulb: {
    w: 16,
    h: 24,
    d: "M5 19h6M6 23h4M8 1a7 7 0 0 0-4.3 12.5c.8.7 1.3 1.6 1.3 2.6h6c0-1 .5-1.9 1.3-2.6A7 7 0 0 0 8 1Z"
  },
  pin: { w: 18, h: 24, d: "M9 23s8-7 8-13.5a8 8 0 0 0-16 0C1 16 9 23 9 23ZM9 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" },
  chat: { w: 24, h: 20, d: "M2 2h20v13H8l-6 4ZM6 7h12M6 11h8" },
  mail: { w: 24, h: 16, d: "M1 1h22v14H1ZM1 2l11 8 11-8" },
  key: { w: 24, h: 12, d: "M6 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM11 6h12M20 6v4M16.5 6v3" },
  clock: { w: 22, h: 22, d: "M11 21a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM11 5.5V11l4 2.5" },
  dice: {
    w: 20,
    h: 20,
    d: "M3 1h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2ZM6 6h.01M14 6h.01M10 10h.01M6 14h.01M14 14h.01"
  },
  cupcake: {
    w: 20,
    h: 24,
    d: "M3 12h14l-2 11H5ZM2 12c0-4 3-5 5-5 0-3 2-5 3-6 1 1 3 3 3 6 2 0 5 1 5 5ZM7 12l1 11M13 12l-1 11"
  },
  pie: { w: 24, h: 24, d: "M11 3a10 10 0 1 0 10 10H11ZM14 1v9h9a9 9 0 0 0-9-9Z" },
  bolt: { w: 14, h: 24, d: "M9 1 1 14h6l-2 9 8-13H7Z" }
};
var SPARKLE = "M7 0c.8 4.5 2.5 6.2 7 7-4.5.8-6.2 2.5-7 7-.8-4.5-2.5-6.2-7-7 4.5-.8 6.2-2.5 7-7Z";
var STEPS = "M0 10h5v5H0ZM5 5h5v5H5ZM10 0h5v5h-5Z";
var OFFSETS = [-TILE, 0, TILE];
function scatter() {
  const boxes = [];
  let seed = 11;
  const rand = () => ((seed = seed * 16807 % 2147483647) - 1) / 2147483646;
  const clear = (x, y, w, h, pad) => !boxes.some(
    (b) => OFFSETS.some(
      (ox) => OFFSETS.some(
        (oy) => x < b.x + ox + b.w + pad && x + w + pad > b.x + ox && y < b.y + oy + b.h + pad && y + h + pad > b.y + oy
      )
    )
  );
  const place = (pool, count, minScale, maxScale, pad, tilt) => {
    const out = [];
    for (let i = 0; i < 2e4 && out.length < count; i++) {
      const shape = pool[out.length % pool.length];
      const scale = minScale + rand() * (maxScale - minScale);
      const w = shape.w * scale;
      const h = shape.h * scale;
      const x = rand() * TILE;
      const y = rand() * TILE;
      if (!clear(x, y, w, h, pad)) continue;
      boxes.push({ x, y, w, h });
      out.push({ d: shape.d, x, y, w, h, r: (rand() - 0.5) * 2 * tilt, s: scale });
    }
    return out;
  };
  const bigPool = Object.values(objects);
  const big = place([...bigPool, ...bigPool], bigPool.length * 2, 0.85, 1.1, 5, 22);
  const small = place(Object.values(smalls), 100, 1.2, 1.55, 4, 25);
  const fill = [];
  for (let i = 0; i < 2e4 && fill.length < 280; i++) {
    const roll = rand();
    const kind = roll < 0.1 ? "sparkle" : roll < 0.2 ? "steps" : "circle";
    const r = kind === "circle" ? 2.2 + rand() * 2.8 : 7.5;
    const x = rand() * TILE;
    const y = rand() * TILE;
    if (!clear(x - r, y - r, 2 * r, 2 * r, 3.5)) continue;
    const near = fill.some(
      (f) => OFFSETS.some((ox) => OFFSETS.some((oy) => Math.hypot(f.x + ox - x, f.y + oy - y) < f.r + r + 8))
    );
    if (near) continue;
    boxes.push({ x: x - r, y: y - r, w: 2 * r, h: 2 * r });
    fill.push({ kind, x, y, r });
  }
  return { shapes: [...big, ...small], fill };
}
var { shapes: SHAPES, fill: FILLERS } = scatter();
function wraps(x, y, w, h) {
  const out = [];
  for (const ox of OFFSETS)
    for (const oy of OFFSETS) {
      const nx = x + ox;
      const ny = y + oy;
      if (nx < TILE && nx + w > 0 && ny < TILE && ny + h > 0) out.push([nx, ny]);
    }
  return out;
}
function DoodleWallpaper() {
  const id = useId().replace(/:/g, "");
  return /* @__PURE__ */ jsxs2("svg", { className: "pointer-events-none absolute inset-0 h-full w-full text-[var(--wa-doodle)]", "aria-hidden": true, children: [
    /* @__PURE__ */ jsx2("defs", { children: /* @__PURE__ */ jsx2("pattern", { id: `wa-doodle-${id}`, width: TILE, height: TILE, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxs2("g", { fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
      SHAPES.flatMap(
        (o, i) => wraps(o.x, o.y, o.w, o.h).map(([x, y], j) => /* @__PURE__ */ jsx2(
          "path",
          {
            vectorEffect: "non-scaling-stroke",
            d: o.d,
            transform: `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${o.r.toFixed(1)} ${(o.w / 2).toFixed(1)} ${(o.h / 2).toFixed(1)}) scale(${o.s.toFixed(2)})`
          },
          `s${i}-${j}`
        ))
      ),
      FILLERS.flatMap(
        (f, i) => wraps(f.x - 8, f.y - 8, 16, 16).map(
          ([x, y], j) => f.kind === "circle" ? /* @__PURE__ */ jsx2("circle", { cx: (x + 8).toFixed(1), cy: (y + 8).toFixed(1), r: f.r.toFixed(1) }, `f${i}-${j}`) : /* @__PURE__ */ jsx2(
            "path",
            {
              d: f.kind === "sparkle" ? SPARKLE : STEPS,
              transform: `translate(${(x + 1).toFixed(1)} ${(y + 1).toFixed(1)})`
            },
            `f${i}-${j}`
          )
        )
      )
    ] }) }) }),
    /* @__PURE__ */ jsx2("rect", { width: "100%", height: "100%", fill: `url(#wa-doodle-${id})` })
  ] });
}

// registry/fakewhats/whatsapp-chat/theme.tsx
import { createContext, useContext, useSyncExternalStore } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var palettes = {
  android: {
    light: {
      "--wa-bg": "#efeae2",
      "--wa-header": "#ffffff",
      "--wa-header-fg": "#111b21",
      "--wa-header-muted": "#667781",
      "--wa-icon": "#54656f",
      "--wa-in": "#ffffff",
      "--wa-out": "#d9fdd3",
      "--wa-fg": "#111b21",
      "--wa-muted": "#667781",
      "--wa-link": "#027eb5",
      "--wa-accent": "#008069",
      "--wa-tick-read": "#53bdeb",
      "--wa-composer": "#efeae2",
      "--wa-input": "#ffffff",
      "--wa-pill": "#ffffff",
      "--wa-system": "#ffeecd",
      "--wa-system-fg": "#54656f",
      "--wa-quote-in": "#f5f6f6",
      "--wa-quote-out": "#d1f4cc",
      "--wa-divider": "rgba(11,20,26,0.1)",
      "--wa-sheet": "#ffffff",
      "--wa-statusbar": "#ffffff",
      "--wa-preview": "#f5f6f6",
      "--wa-share": "rgba(11,20,26,0.3)",
      "--wa-unread-bg": "rgba(255,255,255,0.7)",
      "--wa-unread-fg": "#54656f",
      "--wa-pin-box": "#e9edef",
      "--wa-pin-icon": "#667781",
      "--wa-avatar-bg": "#dfe5e7",
      "--wa-avatar-fg": "#ffffff",
      "--wa-doodle": "#ded4c6"
    },
    // Measured from a WhatsApp for Android screenshot (dark mode, default wallpaper).
    dark: {
      "--wa-bg": "#0b1014",
      "--wa-header": "#0b1014",
      "--wa-header-fg": "#f2f5f7",
      "--wa-header-muted": "#8c9599",
      "--wa-icon": "#f2f5f7",
      "--wa-in": "#1f272a",
      "--wa-out": "#134d37",
      "--wa-fg": "#f4fbfb",
      "--wa-muted": "#98a0a3",
      "--wa-meta-out": "#91bdac",
      "--wa-link": "#53bdeb",
      "--wa-accent": "#21c063",
      "--wa-tick-read": "#53bdeb",
      "--wa-composer": "#0b1014",
      "--wa-input": "#1f272a",
      "--wa-input-fg": "#939b9e",
      "--wa-input-icon": "#90989b",
      "--wa-mic-bg": "#21c063",
      "--wa-mic-fg": "#001403",
      "--wa-pill": "#1f272a",
      "--wa-system": "#1f272a",
      "--wa-system-fg": "#ffd279",
      "--wa-quote-in": "#1c2329",
      "--wa-quote-out": "#0f3b2b",
      "--wa-quote-text": "#90979d",
      "--wa-quote-you": "#23be62",
      "--wa-quote-contact": "#a690ff",
      "--wa-quote-you-name": "#b5e4cd",
      "--wa-quote-contact-name": "#d6d5f6",
      "--wa-divider": "rgba(233,237,239,0.08)",
      "--wa-sheet": "#1f272a",
      "--wa-statusbar": "#0b1014",
      "--wa-navbar": "#000000",
      "--wa-navbar-icon": "#b4b4b4",
      "--wa-preview": "#1c2329",
      "--wa-share": "rgba(233,237,239,0.25)",
      "--wa-unread-bg": "#1f272a",
      "--wa-unread-fg": "#e9edef",
      "--wa-pin-box": "#1f272a",
      "--wa-pin-icon": "#8696a0",
      "--wa-avatar-bg": "#0b2643",
      "--wa-avatar-fg": "#52a7ff",
      "--wa-doodle": "#22272b"
    }
  },
  // Matches WhatsApp for iOS 26 (glass header buttons, pill bubbles).
  ios: {
    // Measured from a WhatsApp for iOS 26 screenshot (light mode, default wallpaper).
    light: {
      "--wa-bg": "#f4f1eb",
      "--wa-header": "rgba(243,241,236,0.85)",
      "--wa-header-fg": "#000000",
      "--wa-header-muted": "#8a8a8e",
      "--wa-icon": "#000000",
      "--wa-glass": "#f7f5f4",
      "--wa-glass-strong": "#f7f7f7",
      "--wa-glass-edge": "#ffffff",
      "--wa-glass-ring": "rgba(0,0,0,0.05)",
      "--wa-in": "#ffffff",
      "--wa-out": "#d9fbd2",
      "--wa-fg": "#000000",
      "--wa-muted": "#5f5f5f",
      "--wa-meta-out": "#466441",
      "--wa-link": "#000000",
      "--wa-accent": "#1daa62",
      "--wa-tick-read": "#34b7f1",
      "--wa-composer": "#f4f1eb",
      "--wa-input": "#ffffff",
      "--wa-input-edge": "#cfcbca",
      "--wa-mic-bg": "#1daa62",
      "--wa-mic-fg": "#ffffff",
      "--wa-pill": "#fdfdfd",
      "--wa-date-fg": "#000000",
      "--wa-system": "#fff5c4",
      "--wa-system-fg": "#5b5b5b",
      "--wa-quote-in": "#f2f2f2",
      "--wa-quote-out": "#c9efc1",
      "--wa-divider": "rgba(0,0,0,0.1)",
      "--wa-sheet": "#ffffff",
      "--wa-statusbar": "transparent",
      "--wa-preview": "#f2f2f2",
      "--wa-share": "rgba(0,0,0,0.22)",
      "--wa-unread-bg": "rgba(255,255,255,0.6)",
      "--wa-unread-fg": "#3c3c43",
      "--wa-unread-line": "rgba(0,0,0,0.08)",
      "--wa-scroll-btn": "#ffffff",
      "--wa-quote-text": "rgba(0,0,0,0.55)",
      "--wa-pin-box": "#e5e5ea",
      "--wa-pin-icon": "#8e8e93",
      "--wa-avatar-bg": "#cee5fb",
      "--wa-avatar-fg": "#0261c7",
      "--wa-batt-text": "#ffffff",
      "--wa-doodle": "#e4e0d7",
      "--wa-button": "#1daa62"
    },
    dark: {
      "--wa-bg": "#0a0a0a",
      "--wa-header": "rgba(17,17,17,0.8)",
      "--wa-header-fg": "#ffffff",
      "--wa-header-muted": "#9a9a9e",
      "--wa-icon": "#ffffff",
      "--wa-glass": "#1e1e1e",
      "--wa-glass-strong": "#1e1e1e",
      "--wa-glass-edge": "rgba(255,255,255,0.06)",
      "--wa-glass-ring": "rgba(255,255,255,0.15)",
      "--wa-in": "#242626",
      "--wa-out": "#144d37",
      "--wa-fg": "#f3f3f3",
      "--wa-muted": "rgba(255,255,255,0.6)",
      "--wa-link": "#f3f3f3",
      "--wa-accent": "#21c063",
      "--wa-tick-read": "#53bdeb",
      "--wa-composer": "#101010",
      "--wa-input": "#282828",
      "--wa-input-edge": "#3d3e3e",
      "--wa-mic-bg": "#ffffff",
      "--wa-mic-fg": "#000000",
      "--wa-pill": "#242626",
      "--wa-system": "#242626",
      "--wa-system-fg": "#ffd279",
      "--wa-quote-in": "#1c1e1e",
      "--wa-quote-out": "#0f3d2c",
      "--wa-divider": "rgba(255,255,255,0.1)",
      "--wa-sheet": "#1c1c1e",
      "--wa-statusbar": "transparent",
      "--wa-preview": "#1f1f1f",
      "--wa-share": "#767779",
      "--wa-unread-bg": "rgba(0,0,0,0.5)",
      "--wa-unread-fg": "#d7d7d7",
      "--wa-unread-line": "rgba(255,255,255,0.14)",
      "--wa-quote-text": "rgba(255,255,255,0.7)",
      "--wa-pin-box": "#2b2a29",
      "--wa-pin-icon": "#a3a3a3",
      "--wa-avatar-bg": "#092743",
      "--wa-avatar-fg": "#4c88bc",
      "--wa-story-seen": "#4f5151",
      "--wa-story-new": "#21c063",
      "--wa-button": "#21c063",
      "--wa-doodle": "#222222"
    }
  }
};
var fonts = {
  // SF Pro on Apple devices. Elsewhere set --wa-font-fallback (e.g. to Inter) for the closest look.
  ios: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", var(--wa-font-fallback, "Inter"), "Helvetica Neue", Helvetica, Arial, sans-serif',
  // Roboto on Android. Elsewhere set --wa-font-fallback-android (the site loads Roboto).
  android: 'Roboto, var(--wa-font-fallback-android, "Roboto Flex"), "Segoe UI", "Helvetica Neue", Arial, sans-serif'
};
var nonAppleText = { "--wa-text-weight": 340 };
var noSubscribe = () => () => {
};
var plainOverrides = {
  ios: {
    dark: {
      "--wa-bg": "#171717",
      "--wa-header": "linear-gradient(180deg, #262525 0%, #24221f 55%, #201e1e 100%)",
      "--wa-glass": "#393939",
      "--wa-glass-strong": "#45403e",
      "--wa-glass-edge": "rgba(255,255,255,0.09)",
      "--wa-glass-ring": "rgba(0,0,0,0.55)",
      "--wa-in": "#242625",
      "--wa-composer": "#1b1b1b",
      "--wa-input": "#323232",
      "--wa-input-edge": "#373737",
      "--wa-pin-box": "#333333",
      "--wa-muted": "rgba(255,255,255,0.5)"
    }
  }
};
function themeStyle(variant, theme, wallpaper = "doodle") {
  var _a;
  return __spreadProps(__spreadValues(__spreadValues({}, palettes[variant][theme]), wallpaper === "none" ? (_a = plainOverrides[variant]) == null ? void 0 : _a[theme] : void 0), {
    fontFamily: fonts[variant]
  });
}
var strings = {
  en: {
    placeholder: "Message",
    forwarded: "Forwarded",
    edited: "Edited",
    you: "You"
  },
  pt: {
    placeholder: "Mensagem",
    forwarded: "Encaminhada",
    edited: "Editada",
    you: "Voc\xEA"
  },
  es: {
    placeholder: "Mensaje",
    forwarded: "Reenviado",
    edited: "Editado",
    you: "T\xFA"
  }
};
var textMetrics = {
  ios: {
    small: { size: 15.8, line: 21, padTop: 6.5, padBottom: 7.5, timeDrop: 8 },
    medium: { size: 16.8, line: 22, padTop: 7, padBottom: 9, timeDrop: 8.5 },
    large: { size: 19, line: 24.5, padTop: 8, padBottom: 10, timeDrop: 9.5 }
  },
  android: {
    // Roboto sized so widths *and* heights match WhatsApp on a Samsung phone (font test against a screenshot).
    small: { size: 13, line: 18.5, padTop: 4.5, padBottom: 4, timeDrop: 4.5 },
    medium: { size: 14.3, line: 20, padTop: 4.5, padBottom: 4, timeDrop: 4.5 },
    large: { size: 16, line: 22.5, padTop: 5, padBottom: 4.5, timeDrop: 5 }
  }
};
var ChatContext = createContext({
  variant: "ios",
  theme: "light",
  wallpaper: "doodle",
  text: textMetrics.ios.medium,
  t: strings.en
});
function ChatProvider({
  variant = "ios",
  theme = "light",
  locale = "en",
  wallpaper = "doodle",
  textSize = "medium",
  className,
  style,
  children
}) {
  const appleFont = useSyncExternalStore(
    noSubscribe,
    () => /Mac|iPhone|iPad|iPod/.test(navigator.userAgent),
    () => true
  );
  return /* @__PURE__ */ jsx3(
    ChatContext.Provider,
    {
      value: { variant, theme, wallpaper, text: textMetrics[variant][textSize], t: strings[locale] },
      children: /* @__PURE__ */ jsx3(
        "div",
        {
          className,
          style: __spreadValues(__spreadValues(__spreadValues({}, themeStyle(variant, theme, wallpaper)), appleFont || variant !== "ios" ? null : nonAppleText), style),
          children
        }
      )
    }
  );
}
function useChat() {
  return useContext(ChatContext);
}
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

// registry/fakewhats/whatsapp-chat/chrome.tsx
import { Fragment, jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function ContactAvatar({ contact, size }) {
  if (!contact.avatar) {
    return /* @__PURE__ */ jsx4(
      "span",
      {
        className: "flex shrink-0 items-center justify-center rounded-full bg-[var(--wa-avatar-bg)] text-[var(--wa-avatar-fg)]",
        style: { width: size, height: size },
        children: /* @__PURE__ */ jsx4(PersonFilled, { size: Math.round(size * 0.42) })
      }
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    /* @__PURE__ */ jsx4(
      "img",
      {
        src: contact.avatar,
        alt: "",
        width: size,
        height: size,
        className: "shrink-0 rounded-full object-cover",
        style: { width: size, height: size }
      }
    )
  );
}
function StoryAvatar({ contact }) {
  if (!contact.story) return /* @__PURE__ */ jsx4(ContactAvatar, { contact, size: 40 });
  const ring = contact.story === "new" ? "var(--wa-story-new,#21c063)" : "var(--wa-story-seen,#8e8e93)";
  return /* @__PURE__ */ jsx4(
    "span",
    {
      className: "flex h-[45px] w-[45px] items-center justify-center rounded-full",
      style: { boxShadow: `inset 0 0 0 2px ${ring}` },
      children: /* @__PURE__ */ jsx4(ContactAvatar, { contact, size: 37 })
    }
  );
}
function Glass({ className, children }) {
  return /* @__PURE__ */ jsx4(
    "span",
    {
      className: cx(
        "flex h-[43px] shrink-0 items-center justify-center rounded-full text-[var(--wa-icon)]",
        "shadow-[inset_0_1px_0_var(--wa-glass-edge),0_0_0_1px_var(--wa-glass-ring,rgba(0,0,0,0.3)),0_6px_16px_rgba(0,0,0,0.12)]",
        className
      ),
      children
    }
  );
}
function ChatHeader({ contact, unreadCount }) {
  const { variant } = useChat();
  if (variant === "ios") {
    return /* @__PURE__ */ jsxs3("div", { className: "flex h-[49px] shrink-0 items-start gap-[8px] px-[16px] pt-[4.5px] @min-[410px]:px-[20px]", children: [
      /* @__PURE__ */ jsxs3(Glass, { className: cx("bg-[var(--wa-glass)]", unreadCount ? "pl-[1px] pr-[5.5px]" : "w-[43px]"), children: [
        /* @__PURE__ */ jsx4(
          ChevronLeft,
          {
            size: unreadCount ? 24 : 28,
            strokeWidth: 2.3,
            className: unreadCount ? "-ml-[1.2px]" : "-ml-[2px]"
          }
        ),
        unreadCount ? /* @__PURE__ */ jsx4("span", { className: "-ml-[3.5px] text-[16.5px]", children: unreadCount }) : null
      ] }),
      /* @__PURE__ */ jsx4("span", { className: cx("shrink-0", contact.story ? "-ml-[2px] -mt-[0.5px]" : "pt-[2px]"), children: /* @__PURE__ */ jsx4(StoryAvatar, { contact }) }),
      /* @__PURE__ */ jsxs3(
        "div",
        {
          className: cx(
            "flex min-w-0 flex-1 flex-col justify-center self-stretch pb-[2px] leading-tight",
            contact.story && "-ml-[3px]"
          ),
          children: [
            /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx4("span", { className: "truncate text-[15.5px] font-semibold text-[var(--wa-header-fg)]", children: contact.name }),
              contact.verified && /* @__PURE__ */ jsx4(Verified, { size: 15, className: "shrink-0" })
            ] }),
            contact.status && // Clipped without an ellipsis, like WhatsApp.
            /* @__PURE__ */ jsx4("div", { className: "overflow-hidden whitespace-nowrap text-[12px] text-[var(--wa-header-muted)]", children: contact.status })
          ]
        }
      ),
      contact.business ? /* @__PURE__ */ jsxs3(Glass, { className: "w-[51px] gap-[1px] bg-[var(--wa-glass-strong)] pl-[3px]", children: [
        /* @__PURE__ */ jsx4(PhoneOutline, { size: 22 }),
        /* @__PURE__ */ jsx4(ChevronDown, { size: 12, strokeWidth: 2.6 })
      ] }) : /* @__PURE__ */ jsxs3(Glass, { className: "ml-[3px] w-[153px] bg-[var(--wa-glass-strong)]", children: [
        /* @__PURE__ */ jsx4("span", { className: "flex w-[51px] justify-center pr-[4px]", children: /* @__PURE__ */ jsx4(ContactCard, { size: 28.5 }) }),
        /* @__PURE__ */ jsx4("span", { className: "flex w-[51px] justify-center pl-[2px]", children: /* @__PURE__ */ jsx4(VideoIOS, { size: 29.5 }) }),
        /* @__PURE__ */ jsx4("span", { className: "flex w-[51px] justify-center", children: /* @__PURE__ */ jsx4(PhoneOutline, { size: 27 }) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs3("div", { className: "flex h-[56px] shrink-0 items-center bg-[var(--wa-header)] pl-[11.5px] pr-[12px] text-[var(--wa-header-fg)]", children: [
    /* @__PURE__ */ jsx4(ArrowBackAndroid, { size: 21 }),
    /* @__PURE__ */ jsx4("span", { className: "ml-[14px]", children: /* @__PURE__ */ jsx4(ContactAvatar, { contact, size: 34 }) }),
    /* @__PURE__ */ jsxs3("div", { className: "ml-[11.5px] min-w-0 flex-1 leading-tight", children: [
      /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx4("span", { className: "truncate text-[15px]", children: contact.name }),
        contact.verified && /* @__PURE__ */ jsx4(Verified, { size: 15, className: "shrink-0" })
      ] }),
      contact.status && /* @__PURE__ */ jsx4("div", { className: "truncate text-[13px] text-[var(--wa-header-muted)]", children: contact.status })
    ] }),
    /* @__PURE__ */ jsxs3("span", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx4(CallAndroid, { size: 20 }),
      /* @__PURE__ */ jsx4("span", { className: "ml-[9px]", children: /* @__PURE__ */ jsx4(CaretDown, { size: 8 }) })
    ] }),
    /* @__PURE__ */ jsx4("span", { className: "ml-[13px]", children: /* @__PURE__ */ jsx4(DotsAndroid, { size: 24 }) })
  ] });
}
function PinnedBar({ text, total = 1 }) {
  const { variant } = useChat();
  const marks = Math.max(1, Math.min(3, total));
  const ios = variant === "ios";
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      className: cx(
        "relative flex shrink-0 items-center",
        ios ? "pb-[9px] pl-[16.5px] pr-4 pt-[20px] @min-[410px]:pl-[20px]" : "border-t border-[var(--wa-divider)] bg-[var(--wa-header)] px-4 py-[7px]"
      ),
      children: [
        marks > 1 && /* @__PURE__ */ jsx4("span", { className: cx("absolute flex flex-col", ios ? "left-[10.5px] gap-[2.5px]" : "left-[6px] gap-[3px]"), children: Array.from({ length: marks }, (_, i) => /* @__PURE__ */ jsx4(
          "span",
          {
            className: cx("rounded-full bg-[var(--wa-header-fg)]", ios ? "h-[9px] w-[2.75px]" : "h-[7.5px] w-[2px]"),
            style: { opacity: i === marks - 1 ? 1 : 0.35 }
          },
          i
        )) }),
        /* @__PURE__ */ jsx4(
          "span",
          {
            className: cx(
              "flex shrink-0 items-center justify-center bg-[var(--wa-pin-box)] text-[var(--wa-pin-icon)]",
              ios ? "h-[30px] w-[30px] rounded-[8px] @min-[410px]:h-[32px] @min-[410px]:w-[32px]" : "h-[30px] w-[30px] rounded-[6px]"
            ),
            children: /* @__PURE__ */ jsx4(Pin, { size: 17 })
          }
        ),
        /* @__PURE__ */ jsx4(
          "span",
          {
            className: cx(
              "min-w-0 flex-1 truncate text-[var(--wa-header-fg)]",
              ios ? "ml-[13px] text-[14.5px]" : "ml-3 text-[14.5px]"
            ),
            children: text
          }
        )
      ]
    }
  );
}
function ChatComposer({ draft, safeArea = false }) {
  const { variant, t, wallpaper } = useChat();
  const text = draft ? /* @__PURE__ */ jsx4("span", { className: "truncate text-[var(--wa-fg)]", children: draft }) : /* @__PURE__ */ jsx4("span", { className: "truncate text-[var(--wa-muted)]", children: t.placeholder });
  if (variant === "ios") {
    return /* @__PURE__ */ jsxs3(
      "div",
      {
        className: cx(
          "flex shrink-0 items-center bg-[var(--wa-composer)] pr-[8.75px] pt-[8px] text-[var(--wa-icon)]",
          safeArea ? "pb-[41px]" : "pb-[8px]"
        ),
        children: [
          /* @__PURE__ */ jsx4("span", { className: "ml-[11px] flex w-[24px] justify-center", children: /* @__PURE__ */ jsx4(Plus, { size: 30, strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsxs3("div", { className: "ml-[12px] flex h-[30px] min-w-0 flex-1 items-center rounded-full bg-[var(--wa-input)] pl-[12px] pr-[8.5px] text-[17px] shadow-[inset_0_1px_0_var(--wa-input-edge,transparent)]", children: [
            /* @__PURE__ */ jsx4("div", { className: "min-w-0 flex-1 truncate", children: draft ? text : null }),
            /* @__PURE__ */ jsx4(StickerIOS, { size: 23 })
          ] }),
          draft ? /* @__PURE__ */ jsx4("span", { className: "ml-[12px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[var(--wa-accent)] text-white", children: /* @__PURE__ */ jsx4(Send, { size: 16 }) }) : /* @__PURE__ */ jsxs3(Fragment, { children: [
            /* @__PURE__ */ jsx4("span", { className: "ml-[17.25px] flex w-[26px] justify-center", children: /* @__PURE__ */ jsx4(CameraIOS, { size: 28 }) }),
            /* @__PURE__ */ jsx4("span", { className: "ml-[11.25px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[var(--wa-mic-bg)] text-[var(--wa-mic-fg)]", children: /* @__PURE__ */ jsx4(MicFilled, { size: 18 }) })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs3("div", { className: "relative flex shrink-0 items-center bg-[var(--wa-composer)] pb-[4px] pl-[6px] pr-[8px] pt-[4px]", children: [
    wallpaper === "doodle" && /* @__PURE__ */ jsx4(DoodleWallpaper, {}),
    /* @__PURE__ */ jsxs3("div", { className: "relative flex h-[44px] min-w-0 flex-1 items-center rounded-full bg-[var(--wa-input)] pl-[11px] pr-[9px] text-[var(--wa-input-icon,var(--wa-muted))]", children: [
      /* @__PURE__ */ jsx4(StickerSmile, { size: 23 }),
      /* @__PURE__ */ jsx4(
        "div",
        {
          className: cx(
            "ml-[10px] min-w-0 flex-1 truncate text-[16px]",
            draft ? "text-[var(--wa-fg)]" : "text-[var(--wa-input-fg,var(--wa-muted))]"
          ),
          children: draft || t.placeholder
        }
      ),
      /* @__PURE__ */ jsx4(PaperclipAndroid, { size: 21 }),
      !draft && /* @__PURE__ */ jsx4("span", { className: "ml-[23px]", children: /* @__PURE__ */ jsx4(CameraAndroid, { size: 23 }) })
    ] }),
    /* @__PURE__ */ jsx4("span", { className: "relative ml-[8px] flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[var(--wa-mic-bg,var(--wa-accent))] text-[var(--wa-mic-fg,#fff)]", children: draft ? /* @__PURE__ */ jsx4(Send, { size: 20 }) : /* @__PURE__ */ jsx4(MicFilled, { size: 20 }) })
  ] });
}
function StatusBar({
  time = "9:41",
  battery = 0.8,
  batteryPercent = true,
  signal = 4,
  wifi = true,
  network,
  focus = false,
  wifiBars = 3,
  dualSim,
  notch = false,
  charging = false
}) {
  const { variant } = useChat();
  if (variant === "ios") {
    return /* @__PURE__ */ jsxs3(
      "div",
      {
        className: cx(
          "relative flex shrink-0 items-center justify-between bg-[var(--wa-statusbar)] text-[var(--wa-header-fg)]",
          notch ? "h-[44px] pr-[17px] pt-[6px] @max-[409px]:pr-[27px]" : "h-[54px] pl-[42px] pr-[30px] pt-[5px]"
        ),
        children: [
          /* @__PURE__ */ jsxs3(
            "span",
            {
              className: cx(
                "flex items-center gap-[5px]",
                notch && "w-[103px] justify-center @max-[409px]:w-auto @max-[409px]:justify-start @max-[409px]:pl-[42px]"
              ),
              children: [
                /* @__PURE__ */ jsx4("span", { className: "text-[15.5px] font-[560] tracking-[0.025em]", children: time }),
                focus && /* @__PURE__ */ jsx4(Moon, { size: 15 })
              ]
            }
          ),
          /* @__PURE__ */ jsxs3("span", { className: "flex items-center gap-[7px]", children: [
            dualSim === void 0 ? /* @__PURE__ */ jsx4(SignalIOS, { bars: signal }) : /* @__PURE__ */ jsx4(SignalDualIOS, { bars: signal, bars2: dualSim }),
            network ? /* @__PURE__ */ jsx4("span", { className: "text-[13.5px] font-semibold", children: network }) : wifi && /* @__PURE__ */ jsx4(WifiIOS, { bars: wifiBars }),
            /* @__PURE__ */ jsx4(BatteryIOS, { level: battery, showPercent: batteryPercent, charging })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs3("div", { className: "flex h-[27px] shrink-0 items-center justify-between bg-[var(--wa-statusbar)] pl-[20px] pr-[19.5px] pt-[9px] text-[13.5px] text-[var(--wa-header-fg)]", children: [
    /* @__PURE__ */ jsx4("span", { children: time }),
    /* @__PURE__ */ jsxs3("span", { className: "flex items-center gap-[5px]", children: [
      network ? /* @__PURE__ */ jsx4("span", { className: "text-[11px] font-medium", children: network }) : wifi && /* @__PURE__ */ jsx4(WifiIOS, { bars: wifiBars }),
      /* @__PURE__ */ jsx4(Signal, { bars: signal, size: 14 }),
      /* @__PURE__ */ jsxs3("span", { children: [
        Math.round(battery * 100),
        "%"
      ] }),
      /* @__PURE__ */ jsx4(BatteryAndroid, { level: battery, charging })
    ] })
  ] });
}
function NavBar() {
  return /* @__PURE__ */ jsxs3("div", { className: "flex h-[43.5px] shrink-0 items-center justify-between bg-[var(--wa-navbar,#000)] px-[73px] text-[var(--wa-navbar-icon,#b4b4b4)]", children: [
    /* @__PURE__ */ jsx4(NavRecents, {}),
    /* @__PURE__ */ jsx4(NavHome, {}),
    /* @__PURE__ */ jsx4(NavBack, {})
  ] });
}
function PhoneFrame({ children }) {
  const { variant } = useChat();
  const ios = variant === "ios";
  return /* @__PURE__ */ jsx4(
    "div",
    {
      className: cx(
        "relative shrink-0 bg-[#1b1b1d] p-[11px] shadow-[0_0_0_2px_#3a3a3c,0_30px_60px_-20px_rgba(0,0,0,0.45)]",
        ios ? "rounded-[58px]" : "rounded-[44px]"
      ),
      children: /* @__PURE__ */ jsxs3(
        "div",
        {
          className: cx(
            "relative flex flex-col overflow-hidden",
            ios ? "h-[844px] w-[390px] rounded-[47px]" : "h-[860px] w-[396px] rounded-[34px]"
          ),
          children: [
            children,
            ios ? /* @__PURE__ */ jsx4(Fragment, { children: /* @__PURE__ */ jsx4("span", { className: "pointer-events-none absolute left-1/2 top-[11px] h-[34px] w-[122px] -translate-x-1/2 rounded-full bg-black" }) }) : /* @__PURE__ */ jsx4("span", { className: "pointer-events-none absolute left-1/2 top-[9px] h-[13px] w-[13px] -translate-x-1/2 rounded-full bg-black" })
          ]
        }
      )
    }
  );
}
function HomeIndicator() {
  const { theme } = useChat();
  return /* @__PURE__ */ jsx4(
    "span",
    {
      className: cx(
        "pointer-events-none absolute bottom-[8px] left-1/2 z-10 h-[5px] w-[134px] -translate-x-1/2 rounded-full @min-[410px]:w-[148px]",
        theme === "dark" ? "bg-white" : "bg-black"
      )
    }
  );
}
function ScrollDownButton() {
  return /* @__PURE__ */ jsx4("span", { className: "pointer-events-none absolute bottom-[25.5px] right-[10px] z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[var(--wa-scroll-btn,#252525)] text-[var(--wa-icon)] shadow-[inset_0_1px_0_var(--wa-glass-edge)]", children: /* @__PURE__ */ jsx4(ChevronDown, { size: 18, strokeWidth: 2.4 }) });
}
function ListSheet({ message }) {
  var _a;
  const { variant } = useChat();
  return /* @__PURE__ */ jsx4("div", { className: "absolute inset-0 z-20 flex flex-col justify-end bg-black/40", children: /* @__PURE__ */ jsxs3("div", { className: "max-h-[75%] overflow-hidden rounded-t-[18px] bg-[var(--wa-sheet)] text-[var(--wa-fg)]", children: [
    /* @__PURE__ */ jsxs3("div", { className: "relative flex items-center justify-center border-b border-[var(--wa-divider)] px-4 py-3.5", children: [
      /* @__PURE__ */ jsx4("span", { className: "absolute left-4 text-[22px] leading-none text-[var(--wa-muted)]", children: "\xD7" }),
      /* @__PURE__ */ jsx4("span", { className: cx("text-[16px]", variant === "ios" ? "font-semibold" : "font-medium"), children: message.buttonLabel })
    ] }),
    /* @__PURE__ */ jsx4("div", { className: "max-h-[520px] overflow-hidden pb-6", children: ((_a = message.sections) != null ? _a : []).map((section, si) => /* @__PURE__ */ jsxs3("div", { children: [
      section.title && /* @__PURE__ */ jsx4("div", { className: "px-5 pb-1 pt-4 text-[13px] font-medium text-[var(--wa-accent)]", children: section.title }),
      section.rows.map((row, ri) => {
        const selected = row.title === message.selected;
        return /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-3 px-5 py-2.5", children: [
          /* @__PURE__ */ jsxs3("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsx4("div", { className: "text-[15.5px]", children: row.title }),
            row.description && /* @__PURE__ */ jsx4("div", { className: "text-[13px] text-[var(--wa-muted)]", children: row.description })
          ] }),
          /* @__PURE__ */ jsx4(
            "span",
            {
              className: cx(
                "flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full border-2",
                selected ? "border-[var(--wa-accent)]" : "border-[var(--wa-muted)]"
              ),
              children: selected && /* @__PURE__ */ jsx4("span", { className: "h-[10px] w-[10px] rounded-full bg-[var(--wa-accent)]" })
            }
          )
        ] }, ri);
      })
    ] }, si)) }),
    message.selected && /* @__PURE__ */ jsx4("div", { className: "absolute bottom-6 right-5", children: /* @__PURE__ */ jsx4("span", { className: "flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[var(--wa-accent)] text-white shadow-lg", children: /* @__PURE__ */ jsx4(Send, { size: 22 }) }) })
  ] }) });
}

// registry/fakewhats/whatsapp-chat/message.tsx
import { useLayoutEffect, useRef, useState } from "react";

// registry/fakewhats/whatsapp-chat/format.tsx
import { Fragment as Fragment2 } from "react";
import { Fragment as Fragment3, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var BLOCK = /```([\s\S]+?)```/g;
var LINK = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
var INLINE = /(^|[^\w])([*_~`])(?!\s)([^\n]*?[^\s\\])\2(?![\w])/;
var tags = {
  "*": (c, k) => /* @__PURE__ */ jsx5("strong", { className: "font-semibold", children: c }, k),
  _: (c, k) => /* @__PURE__ */ jsx5("em", { children: c }, k),
  "~": (c, k) => /* @__PURE__ */ jsx5("s", { children: c }, k),
  "`": (c, k) => /* @__PURE__ */ jsx5("code", { className: "rounded bg-[var(--wa-divider)] px-1 font-mono text-[0.92em]", children: c }, k)
};
function BreakAfterSlashes({ text }) {
  return /* @__PURE__ */ jsx5(Fragment3, { children: text.split(new RegExp("(?<=\\/)")).map((piece, j) => /* @__PURE__ */ jsxs4(Fragment2, { children: [
    j > 0 && /* @__PURE__ */ jsx5("wbr", {}),
    piece
  ] }, j)) });
}
function links(text, keyBase) {
  return text.split(LINK).map(
    (part, i) => i % 2 === 1 ? /* @__PURE__ */ jsx5("span", { className: "text-[var(--wa-link)] underline decoration-1 underline-offset-[3px]", children: /* @__PURE__ */ jsx5(BreakAfterSlashes, { text: part }) }, `${keyBase}-l${i}`) : /* @__PURE__ */ jsx5(Fragment2, { children: part }, `${keyBase}-t${i}`)
  );
}
function inline(text, keyBase = "f") {
  const out = [];
  let rest = text;
  let n = 0;
  while (rest) {
    const m = INLINE.exec(rest);
    if (!m) {
      out.push(...links(rest, `${keyBase}${n}`));
      break;
    }
    const [whole, before, marker, inner] = m;
    out.push(...links(rest.slice(0, m.index) + before, `${keyBase}${n}`));
    const children = marker === "`" ? inner : inline(inner, `${keyBase}${n}i`);
    out.push(tags[marker](children, n));
    rest = rest.slice(m.index + whole.length);
    n++;
  }
  return out;
}
function FormattedText({ text }) {
  var _a;
  const parts = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(BLOCK)) {
    parts.push(/* @__PURE__ */ jsx5(Fragment2, { children: inline(text.slice(last, m.index), `p${i}`) }, `p${i}`));
    parts.push(
      /* @__PURE__ */ jsx5("code", { className: "font-mono text-[0.92em]", children: m[1] }, `b${i}`)
    );
    last = ((_a = m.index) != null ? _a : 0) + m[0].length;
    i++;
  }
  parts.push(/* @__PURE__ */ jsx5(Fragment2, { children: inline(text.slice(last), "e") }, "end"));
  return /* @__PURE__ */ jsx5(Fragment3, { children: parts });
}

// registry/fakewhats/whatsapp-chat/message.tsx
import { Fragment as Fragment4, jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function Ticks({ status }) {
  const { variant } = useChat();
  if (!status) return null;
  if (variant === "ios" && status !== "pending") {
    return /* @__PURE__ */ jsx6("span", { className: cx(status === "read" && "text-[var(--wa-tick-read)]"), children: /* @__PURE__ */ jsx6(TicksIOS, { double: status !== "sent" }) });
  }
  if (status === "pending") return /* @__PURE__ */ jsx6(Clock, { size: 13 });
  if (status === "sent") return /* @__PURE__ */ jsx6(Check, { size: 16 });
  return /* @__PURE__ */ jsx6("span", { className: status === "read" ? "text-[var(--wa-tick-read)]" : void 0, children: /* @__PURE__ */ jsx6(DoubleCheck, { size: 15 }) });
}
function MessageMeta({ message, overlay = false }) {
  const { t, variant } = useChat();
  return /* @__PURE__ */ jsxs5(
    "span",
    {
      className: cx(
        "inline-flex items-center gap-[3px] whitespace-nowrap leading-none",
        variant === "ios" ? "text-[0.726em] tracking-[0.065em]" : "text-[11px]",
        overlay ? "text-white/90" : message.from === "me" ? "text-[var(--wa-meta-out,var(--wa-muted))]" : "text-[var(--wa-muted)]"
      ),
      children: [
        message.starred && /* @__PURE__ */ jsx6(Star, { size: 10 }),
        message.edited && /* @__PURE__ */ jsx6("span", { children: t.edited }),
        message.time && /* @__PURE__ */ jsx6("span", { children: message.time }),
        message.from === "me" && /* @__PURE__ */ jsx6(Ticks, { status: message.status })
      ]
    }
  );
}
function TextWithMeta({ text, message }) {
  const { variant, text: metrics } = useChat();
  const ios = variant === "ios";
  const boxRef = useRef(null);
  const flowRef = useRef(null);
  const markerRef = useRef(null);
  const spacerRef = useRef(null);
  const [wrapped, setWrapped] = useState(false);
  useLayoutEffect(() => {
    const box = boxRef.current;
    const flow = flowRef.current;
    if (!box || !flow) return;
    const measure = () => {
      box.style.width = "";
      const range = document.createRange();
      range.selectNodeContents(flow);
      const rects = Array.from(range.getClientRects()).filter((r) => r.width > 0);
      const left = box.getBoundingClientRect().left;
      const lines = new Set(rects.map((r) => Math.round(r.top)));
      if (lines.size > 1) box.style.width = `${Math.ceil(Math.max(...rects.map((r) => r.right)) - left)}px`;
      const marker = markerRef.current;
      const spacer = spacerRef.current;
      if (marker && spacer) setWrapped(spacer.offsetTop > marker.offsetTop + 4);
    };
    measure();
    const row = box.closest("[data-wa-row]");
    if (!row) return;
    const observer = new ResizeObserver(measure);
    observer.observe(row);
    return () => observer.disconnect();
  }, [text]);
  const drop = wrapped ? ios ? 0.5 : -2.5 : metrics.timeDrop;
  const wrappedPull = ios ? -(metrics.padBottom - 0.5) : -metrics.padBottom;
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      ref: boxRef,
      className: "relative whitespace-pre-wrap break-words",
      style: wrapped ? { marginBottom: wrappedPull } : void 0,
      children: [
        /* @__PURE__ */ jsxs5("span", { ref: flowRef, children: [
          /* @__PURE__ */ jsx6(FormattedText, { text }),
          /* @__PURE__ */ jsx6("span", { ref: markerRef }),
          /* @__PURE__ */ jsx6(
            "span",
            {
              ref: spacerRef,
              className: cx("invisible inline-block select-none", ios ? "ml-[15px]" : "ml-[12.5px]"),
              "aria-hidden": true,
              children: /* @__PURE__ */ jsx6(MessageMeta, { message })
            }
          )
        ] }),
        /* @__PURE__ */ jsx6("span", { className: "absolute right-0", style: { bottom: -drop }, children: /* @__PURE__ */ jsx6(MessageMeta, { message }) })
      ]
    }
  );
}
function Tail({ side }) {
  const { variant } = useChat();
  const color = side === "in" ? "var(--wa-in)" : "var(--wa-out)";
  if (variant === "ios") {
    return /* @__PURE__ */ jsx6(
      "svg",
      {
        width: "20",
        height: "18",
        viewBox: "0 0 20 18",
        className: cx("absolute bottom-0", side === "out" ? "-right-[6px]" : "-left-[6px]"),
        style: side === "in" ? { transform: "scaleX(-1)" } : void 0,
        "aria-hidden": true,
        children: /* @__PURE__ */ jsx6("path", { d: "M14 0C14 8 15.6 14.2 20 18 16.2 18 12.4 16.8 7 14.6 5.6 16.8 3.4 18 0 18V0Z", fill: color })
      }
    );
  }
  return /* @__PURE__ */ jsx6(
    "svg",
    {
      width: "7",
      height: "10",
      viewBox: "0 0 7 10",
      className: cx("absolute top-0", side === "in" ? "-left-[6.5px]" : "-right-[6.5px]"),
      style: side === "out" ? { transform: "scaleX(-1)" } : void 0,
      "aria-hidden": true,
      children: /* @__PURE__ */ jsx6("path", { d: "M7 0H1.3C.3 0-.2 1.2.5 2 2.8 4.3 4.9 6.8 7 9.5Z", fill: color })
    }
  );
}
function Bubble({
  message,
  tail = false,
  className,
  style,
  children
}) {
  const { variant } = useChat();
  const side = message.from === "me" ? "out" : "in";
  const corner = variant === "ios" ? void 0 : side === "in" ? "rounded-tl-none" : "rounded-tr-none";
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      className: cx(
        "relative text-[var(--wa-fg)]",
        variant === "ios" ? "rounded-[20px] shadow-[0_0.5px_0.5px_rgba(0,0,0,0.1)]" : "rounded-[7.5px] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)]",
        side === "in" ? "bg-[var(--wa-in)]" : "bg-[var(--wa-out)]",
        tail && corner,
        className
      ),
      style,
      children: [
        tail && /* @__PURE__ */ jsx6(Tail, { side }),
        children
      ]
    }
  );
}
function Quote({ author, text, image, side }) {
  const { variant, theme, t } = useChat();
  if (variant === "ios") {
    const mine2 = author === t.you;
    const color2 = mine2 ? theme === "dark" ? "#a693f7" : "#7c5ce0" : theme === "dark" ? "#42c7b8" : "#0a8f7f";
    return /* @__PURE__ */ jsxs5(
      "div",
      {
        className: cx(
          "flex min-h-[64px] overflow-hidden rounded-[15px]",
          side === "in" ? "bg-[var(--wa-quote-in)]" : "bg-[var(--wa-quote-out)]"
        ),
        children: [
          /* @__PURE__ */ jsx6("span", { className: "w-[3.5px] shrink-0", style: { background: color2 } }),
          /* @__PURE__ */ jsxs5("div", { className: "min-w-0 flex-1 pb-[12.5px] pl-[11.5px] pr-[10px] pt-[11.6px]", children: [
            /* @__PURE__ */ jsx6("div", { className: "mb-[3.6px] truncate text-[0.893em] font-semibold leading-[19px]", style: { color: color2 }, children: author }),
            /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-[5px] text-[0.79em] leading-[1.3] text-[var(--wa-quote-text,var(--wa-muted))]", children: [
              image && /* @__PURE__ */ jsx6(CameraFilled, { size: 17 }),
              /* @__PURE__ */ jsx6("span", { className: "line-clamp-2", children: text })
            ] })
          ] }),
          image && // eslint-disable-next-line @next/next/no-img-element
          /* @__PURE__ */ jsx6("img", { src: image, alt: "", className: "w-[52px] shrink-0 object-cover" })
        ]
      }
    );
  }
  const mine = author === t.you;
  const color = mine ? "var(--wa-quote-you,#06cf9c)" : "var(--wa-quote-contact,#a690ff)";
  const nameColor = mine ? "var(--wa-quote-you-name,var(--wa-quote-you,#06cf9c))" : "var(--wa-quote-contact-name,var(--wa-quote-contact,#a690ff))";
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      className: cx(
        "flex overflow-hidden rounded-[7px]",
        side === "in" ? "bg-[var(--wa-quote-in)]" : "bg-[var(--wa-quote-out)]"
      ),
      children: [
        /* @__PURE__ */ jsx6("span", { className: "w-[4.5px] shrink-0", style: { background: color } }),
        /* @__PURE__ */ jsxs5("div", { className: "min-w-0 flex-1 py-[6.75px] pl-[8px] pr-[10px]", children: [
          /* @__PURE__ */ jsx6("div", { className: "truncate text-[11.8px] font-medium leading-[16px]", style: { color: nameColor }, children: author }),
          /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-[5px] text-[12.45px] leading-[15px] text-[var(--wa-quote-text,var(--wa-muted))]", children: [
            image && /* @__PURE__ */ jsx6(CameraFilled, { size: 15 }),
            /* @__PURE__ */ jsx6("span", { className: "line-clamp-2", children: text })
          ] })
        ] }),
        image && // eslint-disable-next-line @next/next/no-img-element
        /* @__PURE__ */ jsx6("img", { src: image, alt: "", className: "h-[47px] w-[46px] shrink-0 object-cover" })
      ]
    }
  );
}
function Forwarded() {
  const { t } = useChat();
  return /* @__PURE__ */ jsxs5("div", { className: "mb-0.5 flex items-center gap-1 text-[12px] italic text-[var(--wa-muted)]", children: [
    /* @__PURE__ */ jsx6(Forward, { size: 13 }),
    t.forwarded
  ] });
}
function Extras({ message, skipReply = false }) {
  const side = message.from === "me" ? "out" : "in";
  return /* @__PURE__ */ jsxs5(Fragment4, { children: [
    message.forwarded && /* @__PURE__ */ jsx6(Forwarded, {}),
    message.reply && !skipReply && /* @__PURE__ */ jsx6(Quote, { author: message.reply.author, text: message.reply.text, image: message.reply.image, side })
  ] });
}
function ShareButton({ inset = 0, side = "in" }) {
  const offset = `calc(100% + ${9.5 + inset}px)`;
  return /* @__PURE__ */ jsx6(
    "span",
    {
      className: "absolute top-1/2 flex h-[32px] w-[32px] -translate-y-1/2 items-center justify-center rounded-full bg-[var(--wa-share)] text-white",
      style: side === "in" ? { left: offset } : { right: offset },
      children: /* @__PURE__ */ jsx6(ShareArrow, { size: 17 })
    }
  );
}
function LinkPreviewCard({
  preview,
  share,
  side = "in"
}) {
  const { variant } = useChat();
  const ios = variant === "ios";
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      className: cx(
        "relative bg-[var(--wa-preview)]",
        ios ? "rounded-[17px] px-[9px] pb-[8px] pt-[10px]" : "rounded-[6px] px-[8px] pb-[8px] pt-[7px]"
      ),
      children: [
        preview.image && // eslint-disable-next-line @next/next/no-img-element
        /* @__PURE__ */ jsx6(
          "img",
          {
            src: preview.image,
            alt: "",
            className: cx(
              "-mx-[9px] -mt-[10px] mb-[8px] block aspect-[1.91] w-[calc(100%+18px)] max-w-none object-cover",
              ios ? "rounded-t-[17px]" : "rounded-t-[6px]"
            )
          }
        ),
        /* @__PURE__ */ jsx6(
          "div",
          {
            className: cx("truncate font-semibold", ios ? "text-[0.75em] leading-[1.45]" : "text-[14px] leading-[19px]"),
            children: preview.title
          }
        ),
        preview.description && /* @__PURE__ */ jsx6(
          "div",
          {
            className: cx(
              "mt-[3px] line-clamp-2 text-[var(--wa-muted)] [overflow-wrap:anywhere]",
              ios ? "text-[0.74em] leading-[1.35]" : "text-[13px] leading-[16px]"
            ),
            children: /* @__PURE__ */ jsx6(BreakAfterSlashes, { text: preview.description })
          }
        ),
        preview.domain && /* @__PURE__ */ jsxs5(
          "div",
          {
            className: cx(
              "flex items-center gap-[7px] opacity-90",
              ios ? "mt-[12px] text-[0.725em] leading-[1.4]" : "mt-[8px] text-[13px] text-[var(--wa-muted)]"
            ),
            children: [
              /* @__PURE__ */ jsx6(LinkIcon, { size: ios ? 12 : 13, className: "shrink-0 -rotate-45" }),
              /* @__PURE__ */ jsx6("span", { className: "truncate", children: preview.domain })
            ]
          }
        ),
        share && /* @__PURE__ */ jsx6(ShareButton, { inset: 3, side })
      ]
    }
  );
}
function TextBody({ message, text }) {
  const { variant, text: metrics } = useChat();
  const ios = variant === "ios";
  return /* @__PURE__ */ jsxs5(Fragment4, { children: [
    message.reply && /* @__PURE__ */ jsx6("div", { className: ios ? "p-[3.5px] pb-0" : "p-[3px] pb-0", children: /* @__PURE__ */ jsx6(
      Quote,
      {
        author: message.reply.author,
        text: message.reply.text,
        image: message.reply.image,
        side: message.from === "me" ? "out" : "in"
      }
    ) }),
    message.preview && /* @__PURE__ */ jsx6("div", { className: "p-[3px] pb-0", children: /* @__PURE__ */ jsx6(
      LinkPreviewCard,
      {
        preview: message.preview,
        share: message.share,
        side: message.from === "me" ? "out" : "in"
      }
    ) }),
    /* @__PURE__ */ jsxs5(
      "div",
      {
        className: ios ? "px-[12px]" : "pl-[9px] pr-[7px]",
        style: {
          paddingTop: message.preview || message.reply ? ios ? 5 : 3 : metrics.padTop,
          paddingBottom: metrics.padBottom
        },
        children: [
          /* @__PURE__ */ jsx6(Extras, { message, skipReply: true }),
          /* @__PURE__ */ jsx6(TextWithMeta, { text, message })
        ]
      }
    )
  ] });
}
function ImageBody({ message }) {
  var _a, _b;
  const { variant } = useChat();
  return /* @__PURE__ */ jsxs5("div", { className: "w-[260px] max-w-full p-[3px]", children: [
    (message.forwarded || message.reply) && /* @__PURE__ */ jsx6("div", { className: "px-[6px] pt-[3px]", children: /* @__PURE__ */ jsx6(Extras, { message }) }),
    /* @__PURE__ */ jsxs5("div", { className: cx("relative overflow-hidden", variant === "ios" ? "rounded-[15px]" : "rounded-[6px]"), children: [
      /* @__PURE__ */ jsx6(
        "img",
        {
          src: message.src,
          alt: (_a = message.caption) != null ? _a : "",
          className: "block w-full object-cover",
          style: { aspectRatio: (_b = message.aspectRatio) != null ? _b : 4 / 3 }
        }
      ),
      !message.caption && /* @__PURE__ */ jsx6("span", { className: "absolute bottom-0 right-0 rounded-tl-lg bg-gradient-to-t from-black/50 to-transparent px-2 pb-[5px] pt-3", children: /* @__PURE__ */ jsx6(MessageMeta, { message, overlay: true }) })
    ] }),
    message.caption && /* @__PURE__ */ jsx6("div", { className: "px-[6px] pb-[3px] pt-[5px]", children: /* @__PURE__ */ jsx6(TextWithMeta, { text: message.caption, message }) })
  ] });
}
function waveform(seed, count = 34) {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return Array.from({ length: count }, (_, i) => {
    h = Math.imul(h ^ i + 1, 16777619);
    const r = (h >>> 0) % 1e3 / 1e3;
    return 0.2 + 0.8 * Math.abs(Math.sin(i * 0.45 + r * 2)) * (0.45 + r * 0.55);
  });
}
function AudioBody({ message }) {
  var _a, _b, _c;
  const bars = waveform(`${(_a = message.id) != null ? _a : ""}${message.duration}${(_b = message.time) != null ? _b : ""}`);
  const progress = (_c = message.progress) != null ? _c : 0;
  const micColor = message.played ? "var(--wa-tick-read)" : "var(--wa-accent)";
  return /* @__PURE__ */ jsxs5("div", { className: "w-[270px] max-w-full px-[9px] pb-[6px] pt-[8px]", children: [
    /* @__PURE__ */ jsx6(Extras, { message }),
    /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsx6("div", { className: "relative shrink-0", children: /* @__PURE__ */ jsx6(Play, { size: 26, className: "text-[var(--wa-icon)]" }) }),
      /* @__PURE__ */ jsxs5("div", { className: "relative flex h-7 flex-1 items-center gap-[2px]", children: [
        bars.map((v, i) => /* @__PURE__ */ jsx6(
          "span",
          {
            className: "w-[3px] shrink-0 rounded-full",
            style: {
              height: `${Math.round(v * 24)}px`,
              background: i / bars.length < progress ? "var(--wa-tick-read)" : "var(--wa-muted)",
              opacity: i / bars.length < progress ? 1 : 0.55
            }
          },
          i
        )),
        /* @__PURE__ */ jsx6(
          "span",
          {
            className: "absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full",
            style: { left: `calc(${progress * 100}% - 6px)`, background: micColor }
          }
        )
      ] }),
      /* @__PURE__ */ jsx6(MicFilled, { size: 18, style: { color: micColor } })
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "mt-0.5 flex items-center justify-between pl-[36px]", children: [
      /* @__PURE__ */ jsx6("span", { className: "text-[11px] text-[var(--wa-muted)]", children: message.duration }),
      /* @__PURE__ */ jsx6(MessageMeta, { message })
    ] })
  ] });
}
function InteractiveText({ message }) {
  return /* @__PURE__ */ jsxs5("div", { className: "px-[9px] pb-[6px] pt-[6px]", children: [
    /* @__PURE__ */ jsx6(Extras, { message }),
    message.header && /* @__PURE__ */ jsx6("div", { className: "mb-0.5 font-semibold", children: message.header }),
    message.footer ? /* @__PURE__ */ jsxs5(Fragment4, { children: [
      /* @__PURE__ */ jsx6("div", { className: "whitespace-pre-wrap break-words", children: /* @__PURE__ */ jsx6(FormattedText, { text: message.text }) }),
      /* @__PURE__ */ jsx6("div", { className: "mt-1 text-[12.5px] text-[var(--wa-muted)]", children: /* @__PURE__ */ jsx6(TextWithMeta, { text: message.footer, message }) })
    ] }) : /* @__PURE__ */ jsx6(TextWithMeta, { text: message.text, message })
  ] });
}
function ButtonsBody({ message, tail }) {
  return /* @__PURE__ */ jsxs5("div", { className: "flex min-w-[220px] flex-col gap-[2px]", children: [
    /* @__PURE__ */ jsx6(Bubble, { message, tail, children: /* @__PURE__ */ jsx6(InteractiveText, { message }) }),
    message.buttons.map((label, i) => /* @__PURE__ */ jsx6(Bubble, { message, children: /* @__PURE__ */ jsxs5("div", { className: "flex items-center justify-center gap-1.5 px-3 py-[9px] text-[14px] font-medium text-[var(--wa-button,var(--wa-link))]", children: [
      /* @__PURE__ */ jsx6(Reply, { size: 15 }),
      label
    ] }) }, i))
  ] });
}
function ListBody({ message, tail }) {
  return /* @__PURE__ */ jsxs5(Bubble, { message, tail, className: "min-w-[220px]", children: [
    /* @__PURE__ */ jsx6(InteractiveText, { message }),
    /* @__PURE__ */ jsxs5("div", { className: "flex items-center justify-center gap-1.5 border-t border-[var(--wa-divider)] px-3 py-[9px] text-[14px] font-medium text-[var(--wa-button,var(--wa-link))]", children: [
      /* @__PURE__ */ jsx6(ListIcon, { size: 16 }),
      message.buttonLabel
    ] })
  ] });
}
function DateSeparator({ text }) {
  const { variant } = useChat();
  if (variant === "ios") {
    return /* @__PURE__ */ jsx6("div", { className: "my-[12px] flex justify-center", children: /* @__PURE__ */ jsx6("span", { className: "flex h-[18.5px] items-center rounded-full bg-[var(--wa-pill)] px-[36px] text-[13px] font-semibold text-[var(--wa-date-fg,var(--wa-fg))]", children: text }) });
  }
  return /* @__PURE__ */ jsx6("div", { className: "my-2 flex justify-center", children: /* @__PURE__ */ jsx6("span", { className: "rounded-[8px] bg-[var(--wa-pill)] px-3 py-[5px] text-[12px] font-medium uppercase tracking-wide text-[var(--wa-muted)] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)]", children: text }) });
}
function SystemNotice({ text }) {
  return /* @__PURE__ */ jsx6("div", { className: "my-2 flex justify-center px-6", children: /* @__PURE__ */ jsxs5("span", { className: "rounded-[8px] bg-[var(--wa-system)] px-3 py-[6px] text-center text-[12px] leading-[1.35] text-[var(--wa-system-fg)] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)]", children: [
    /encrypt|criptograf|cifrad/i.test(text) && /* @__PURE__ */ jsx6(Lock, { size: 11, className: "mr-1 inline -translate-y-px" }),
    text
  ] }) });
}
function UnreadBanner({ text }) {
  const { variant } = useChat();
  return /* @__PURE__ */ jsx6(
    "div",
    {
      "data-unread": true,
      className: cx(
        "flex items-center justify-center bg-[var(--wa-unread-bg)] text-[var(--wa-unread-fg)]",
        variant === "ios" ? (
          // As the last row it sits flush on the input bar, as WhatsApp shows it.
          "h-[33px] border-t-[0.5px] border-[var(--wa-unread-line,transparent)] text-[14.5px] font-semibold last:-mb-[10px]"
        ) : "my-2 h-[28px] text-[13px] font-medium uppercase"
      ),
      children: text
    }
  );
}
function Reactions({ reactions, side }) {
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      className: cx(
        "absolute -bottom-[18px] z-10 flex items-center gap-0.5 rounded-full border-2 border-[var(--wa-bg)] bg-[var(--wa-pill)] px-1.5 py-[1px] text-[13px] leading-[18px] shadow-sm",
        side === "in" ? "left-2" : "right-2"
      ),
      children: [
        reactions.slice(0, 3).map((r, i) => /* @__PURE__ */ jsx6("span", { children: r }, i)),
        reactions.length > 1 && /* @__PURE__ */ jsx6("span", { className: "ml-0.5 text-[11px] text-[var(--wa-muted)]", children: reactions.length })
      ]
    }
  );
}
function MessageRow({
  message,
  first = true,
  last = true
}) {
  var _a;
  const { variant, text: metrics } = useChat();
  if (message.type === "date") return /* @__PURE__ */ jsx6(DateSeparator, { text: message.text });
  if (message.type === "system") return /* @__PURE__ */ jsx6(SystemNotice, { text: message.text });
  if (message.type === "unread") return /* @__PURE__ */ jsx6(UnreadBanner, { text: message.text });
  const side = message.from === "me" ? "out" : "in";
  const ios = variant === "ios";
  const tail = ios ? last : first;
  const hasReactions = !!((_a = message.reactions) == null ? void 0 : _a.length);
  const hasPreview = message.type !== "image" && message.type !== "audio" && "preview" in message && !!message.preview;
  let body;
  switch (message.type) {
    case "image":
      body = /* @__PURE__ */ jsx6(Bubble, { message, tail, children: /* @__PURE__ */ jsx6(ImageBody, { message }) });
      break;
    case "audio":
      body = /* @__PURE__ */ jsx6(Bubble, { message, tail, children: /* @__PURE__ */ jsx6(AudioBody, { message }) });
      break;
    case "buttons":
      body = /* @__PURE__ */ jsx6(ButtonsBody, { message, tail });
      break;
    case "list":
      body = /* @__PURE__ */ jsx6(ListBody, { message, tail });
      break;
    default:
      body = /* @__PURE__ */ jsx6(Bubble, { message, tail, children: /* @__PURE__ */ jsx6(TextBody, { message, text: message.text }) });
  }
  return /* @__PURE__ */ jsx6(
    "div",
    {
      "data-wa-row": true,
      className: cx(
        "flex",
        side === "in" ? "justify-start" : "justify-end",
        ios ? first ? "mt-[13.5px]" : "mt-[4.5px]" : first ? "mt-[10px]" : "mt-[2.5px]",
        hasReactions && "mb-[18px]",
        ios ? "px-[16.5px]" : "px-[16px]"
      ),
      children: /* @__PURE__ */ jsxs5(
        "div",
        {
          className: cx("relative", ios ? "max-w-[calc(100%-75px)] tracking-[-0.025em]" : "max-w-[calc(100%-37px)]"),
          style: { fontSize: metrics.size, lineHeight: `${metrics.line}px`, fontWeight: "var(--wa-text-weight, 400)" },
          children: [
            body,
            message.share && !hasPreview && /* @__PURE__ */ jsx6(ShareButton, { side }),
            hasReactions && /* @__PURE__ */ jsx6(Reactions, { reactions: message.reactions, side })
          ]
        }
      )
    }
  );
}

// registry/fakewhats/whatsapp-chat/whatsapp-chat.tsx
import { Fragment as Fragment5, jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function sender(m) {
  return m.type === "date" || m.type === "system" || m.type === "unread" ? null : m.from;
}
function MessageList({ messages, topInset = 0 }) {
  const { variant, wallpaper } = useChat();
  const ref = useRef2(null);
  useLayoutEffect2(() => {
    const list = ref.current;
    const banner = list == null ? void 0 : list.querySelector("[data-unread]");
    if (!list || !banner) return;
    list.scrollTop += banner.getBoundingClientRect().top - list.getBoundingClientRect().top - topInset;
  }, [messages, topInset]);
  return /* @__PURE__ */ jsxs6("div", { className: "relative flex min-h-0 flex-1 flex-col bg-[var(--wa-bg)]", children: [
    wallpaper === "doodle" ? /* @__PURE__ */ jsx7(DoodleWallpaper, {}) : wallpaper !== "none" ? /* @__PURE__ */ jsx7(
      "div",
      {
        className: "pointer-events-none absolute inset-0 bg-cover bg-center",
        style: { backgroundImage: `url(${JSON.stringify(wallpaper)})` }
      }
    ) : null,
    /* @__PURE__ */ jsx7("div", { ref, className: "relative flex min-h-0 flex-1 flex-col-reverse overflow-y-auto [scrollbar-width:none]", children: /* @__PURE__ */ jsx7("div", { className: cx(variant === "ios" ? "pb-[10px] pt-2" : "pb-[4px] pt-1"), style: { marginTop: topInset }, children: messages.map((m, i) => {
      var _a;
      const from = sender(m);
      const first = from === null || sender((_a = messages[i - 1]) != null ? _a : m) !== from || i === 0;
      const last = from === null || i === messages.length - 1 || sender(messages[i + 1]) !== from;
      return /* @__PURE__ */ jsx7(MessageRow, { message: m, first, last }, "id" in m && m.id || i);
    }) }) })
  ] });
}
function ChatScreen({
  data,
  statusBar,
  framed
}) {
  const { variant, wallpaper } = useChat();
  const openList = data.messages.find((m) => m.type === "list" && !!m.open);
  const pinned = data.pinned && /* @__PURE__ */ jsx7(PinnedBar, { text: data.pinned.text, total: data.pinned.total });
  const topRef = useRef2(null);
  const [topInset, setTopInset] = useState2(0);
  useLayoutEffect2(() => {
    const el = topRef.current;
    if (!el) return;
    const update = () => setTopInset(el.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    // @container lets the iOS header use 20pt margins on wide (414pt+) phones, like iOS does.
    /* @__PURE__ */ jsxs6("div", { className: "@container relative flex h-full min-h-0 flex-col", children: [
      variant === "ios" ? (
        // iOS 26: status bar, header and pinned bar are one frosted-glass layer and
        // the messages scroll underneath it, tinting it with whatever is behind.
        /* @__PURE__ */ jsxs6("div", { className: "relative flex min-h-0 flex-1 flex-col", children: [
          /* @__PURE__ */ jsx7(MessageList, { messages: data.messages, topInset }),
          data.scrollButton && /* @__PURE__ */ jsx7(ScrollDownButton, {}),
          /* @__PURE__ */ jsxs6(
            "div",
            {
              ref: topRef,
              className: cx(
                "absolute inset-x-0 top-0 z-10 [background:var(--wa-header)] [backdrop-filter:blur(24px)_saturate(1.4)]",
                wallpaper === "none" && "border-b-[0.5px] border-[var(--wa-divider)]"
              ),
              children: [
                statusBar && /* @__PURE__ */ jsx7(StatusBar, __spreadValues({}, statusBar)),
                /* @__PURE__ */ jsx7(ChatHeader, { contact: data.contact, unreadCount: data.unreadCount }),
                pinned || /* @__PURE__ */ jsx7("div", { className: "h-[10px]" })
              ]
            }
          )
        ] })
      ) : /* @__PURE__ */ jsxs6(Fragment5, { children: [
        statusBar && /* @__PURE__ */ jsx7(StatusBar, __spreadValues({}, statusBar)),
        /* @__PURE__ */ jsx7(ChatHeader, { contact: data.contact, unreadCount: data.unreadCount }),
        pinned,
        /* @__PURE__ */ jsx7(MessageList, { messages: data.messages })
      ] }),
      /* @__PURE__ */ jsx7(ChatComposer, { draft: data.draft, safeArea: framed || !!statusBar }),
      variant === "ios" && (framed || !!statusBar) && (statusBar == null ? void 0 : statusBar.homeIndicator) !== false && /* @__PURE__ */ jsx7(HomeIndicator, {}),
      variant === "android" && !!statusBar && statusBar.navBar !== false && /* @__PURE__ */ jsx7(NavBar, {}),
      openList && /* @__PURE__ */ jsx7(ListSheet, { message: openList })
    ] })
  );
}
function WhatsAppChat({
  data,
  variant = "ios",
  theme = "light",
  locale = "en",
  wallpaper = "doodle",
  textSize = "medium",
  frame = false,
  statusBar,
  className,
  style
}) {
  const showStatusBar = statusBar != null ? statusBar : frame;
  const statusBarOptions = showStatusBar ? showStatusBar === true ? {} : showStatusBar : null;
  return /* @__PURE__ */ jsx7(
    ChatProvider,
    {
      variant,
      theme,
      locale,
      wallpaper,
      textSize,
      className: cx(frame ? "inline-block" : "h-full w-full overflow-hidden", className),
      style,
      children: frame ? /* @__PURE__ */ jsx7(PhoneFrame, { children: /* @__PURE__ */ jsx7(ChatScreen, { data, statusBar: statusBarOptions, framed: true }) }) : /* @__PURE__ */ jsx7(ChatScreen, { data, statusBar: statusBarOptions })
    }
  );
}

// registry/fakewhats/whatsapp-chat/schema.ts
import { z } from "zod";
var MessageStatusSchema = z.enum(["pending", "sent", "delivered", "read"]).describe(
  "Delivery ticks for outgoing messages: pending = clock, sent = one grey tick, delivered = two grey ticks, read = two blue ticks. Ignored on incoming messages."
);
var BaseMessageSchema = z.object({
  id: z.string().optional().describe("Optional stable id. Not rendered."),
  from: z.enum(["me", "them"]).describe('"me" = outgoing (right side, green bubble). "them" = the contact (left side).'),
  time: z.string().optional().describe('Time shown inside the bubble, e.g. "10:42" or "9:05 PM".'),
  status: MessageStatusSchema.optional(),
  reply: z.object({
    author: z.string().describe('Name shown on the quote, e.g. "You" or the contact name.'),
    text: z.string().describe('Quoted text, e.g. "Photo" when quoting an image.'),
    image: z.string().optional().describe(
      "Thumbnail of the quoted photo, shown on the right of the quote (with a camera icon before the text)."
    )
  }).optional().describe("Shows a quoted message at the top of the bubble."),
  reactions: z.array(z.string()).optional().describe('Emoji reactions shown under the bubble, e.g. ["\u2764\uFE0F", "\u{1F602}"].'),
  forwarded: z.boolean().optional().describe('Shows the "Forwarded" label.'),
  edited: z.boolean().optional().describe('Shows the "Edited" label next to the time.'),
  starred: z.boolean().optional().describe("Shows a star next to the time."),
  share: z.boolean().optional().describe("Shows the round forward/share button next to the bubble (WhatsApp shows it on links and media).")
});
var LinkPreviewSchema = z.object({
  title: z.string().describe('Bold first line, usually the page title or the domain, e.g. "example.com".'),
  description: z.string().optional().describe("Grey text under the title (up to 2 lines), e.g. the full URL."),
  domain: z.string().optional().describe('Domain shown with a link icon at the bottom, e.g. "example.com".'),
  image: z.string().optional().describe("Optional thumbnail URL shown on top of the card.")
}).describe("Link preview card drawn at the top of the bubble.");
var TextMessageSchema = BaseMessageSchema.extend({
  type: z.literal("text").optional().describe("Optional. Messages without a type are text."),
  text: z.string().describe(
    "Message text. Supports WhatsApp formatting: *bold*, _italic_, ~strike~, `inline code`, ```monospace```, and links. Use \\n for line breaks."
  ),
  preview: LinkPreviewSchema.optional()
});
var ImageMessageSchema = BaseMessageSchema.extend({
  type: z.literal("image"),
  src: z.string().describe("Image URL (absolute URL, /public path, or data URI)."),
  caption: z.string().optional().describe("Text under the image. Same formatting as text messages."),
  aspectRatio: z.number().positive().optional().describe("Width / height. Defaults to 4/3. Use 0.75 for portrait photos.")
});
var AudioMessageSchema = BaseMessageSchema.extend({
  type: z.literal("audio"),
  duration: z.string().describe('Voice note length, e.g. "0:42".'),
  played: z.boolean().optional().describe("If true the mic icon is blue (listened). Defaults to false."),
  progress: z.number().min(0).max(1).optional().describe("Playback position from 0 to 1. Defaults to 0.")
});
var ButtonsMessageSchema = BaseMessageSchema.extend({
  type: z.literal("buttons"),
  header: z.string().optional().describe("Bold line above the text."),
  text: z.string().describe("Body text. Same formatting as text messages."),
  footer: z.string().optional().describe("Small grey line under the text."),
  buttons: z.array(z.string()).min(1).max(3).describe("Quick reply button labels (1 to 3), rendered under the bubble.")
});
var ListMessageSchema = BaseMessageSchema.extend({
  type: z.literal("list"),
  header: z.string().optional().describe("Bold line above the text."),
  text: z.string().describe("Body text. Same formatting as text messages."),
  footer: z.string().optional().describe("Small grey line under the text."),
  buttonLabel: z.string().describe('Label of the button that opens the list, e.g. "See menu".'),
  sections: z.array(
    z.object({
      title: z.string().optional(),
      rows: z.array(
        z.object({
          title: z.string(),
          description: z.string().optional()
        })
      )
    })
  ).optional().describe("List options. Only rendered when `open` is true."),
  open: z.boolean().optional().describe("If true, renders the options sheet open over the chat (only one list should be open)."),
  selected: z.string().optional().describe("Title of the row shown as selected when the sheet is open.")
});
var DateMessageSchema = z.object({
  type: z.literal("date"),
  text: z.string().describe('Day separator pill, e.g. "Today", "Yesterday", "12 March 2026".')
});
var SystemMessageSchema = z.object({
  type: z.literal("system"),
  text: z.string().describe('Centered yellow notice, e.g. the encryption notice or "This chat is with a business account."')
});
var UnreadMessageSchema = z.object({
  type: z.literal("unread"),
  text: z.string().describe('Full-width banner, e.g. "6 unread messages".')
});
var MessageSchema = z.union([
  TextMessageSchema,
  ImageMessageSchema,
  AudioMessageSchema,
  ButtonsMessageSchema,
  ListMessageSchema,
  DateMessageSchema,
  SystemMessageSchema,
  UnreadMessageSchema
]);
var ContactSchema = z.object({
  name: z.string().describe("Contact or business name shown in the header."),
  avatar: z.string().optional().describe("Avatar image URL. If omitted, a default silhouette is shown."),
  status: z.string().optional().describe('Subtitle under the name, e.g. "online", "typing...", "last seen today at 10:00".'),
  verified: z.boolean().optional().describe("Shows the green verified badge next to the name."),
  story: z.enum(["new", "seen"]).optional().describe('Status (story) ring around the avatar: "new" = green ring, "seen" = grey ring.'),
  business: z.boolean().optional().describe(
    "Business chat header: iOS shows a single call button with a menu arrow instead of the contact/video/call buttons."
  )
});
var ConversationSchema = z.object({
  $schema: z.string().optional().describe("Optional JSON Schema URL, for editor autocomplete."),
  contact: ContactSchema,
  messages: z.array(MessageSchema).describe("Messages from top (oldest) to bottom (newest)."),
  pinned: z.object({
    text: z.string().describe("Text of the pinned message."),
    total: z.number().int().min(1).max(3).optional().describe("How many messages are pinned (1 to 3). Draws that many marks on the left. Default 1.")
  }).optional().describe("Pinned message bar under the header."),
  draft: z.string().optional().describe("Text typed in the input bar. When set, the send button replaces the mic."),
  scrollButton: z.boolean().optional().describe('Shows the round "scroll to latest message" button above the input bar.'),
  unreadCount: z.number().int().min(0).optional().describe("Unread number shown next to the back arrow.")
}).describe("A fake WhatsApp conversation rendered by <WhatsAppChat data={...} />.");
export {
  Bubble,
  ChatComposer,
  ChatHeader,
  ChatProvider,
  ConversationSchema,
  FormattedText,
  ListSheet,
  MessageList,
  MessageRow,
  PhoneFrame,
  StatusBar,
  WhatsAppChat,
  themeStyle,
  useChat
};
//# sourceMappingURL=index.js.map