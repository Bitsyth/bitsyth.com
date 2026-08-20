import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DQXSjQ1C.js
var import_jsx_runtime = require_jsx_runtime();
var portals = [{
	href: "https://lifeisagame.com",
	label: "Life is a Game",
	src: "/logos/lifeisagame.jpg"
}, {
	href: "https://eternalrhythm.com",
	label: "Eternal Rhythm",
	src: "/logos/eternalrhythm.jpg"
}];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stage",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "flex flex-1 items-center justify-center px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "sr-only",
				children: "Bitsyth"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "portal-row",
				"aria-label": "Destinations",
				children: portals.map((portal) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "portal-tile",
					href: portal.href,
					target: "_blank",
					rel: "noopener noreferrer",
					"aria-label": `${portal.label} — ${portal.href.replace("https://", "")}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: portal.src,
							alt: "",
							width: 560,
							height: 560
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sheen",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rim",
							"aria-hidden": "true"
						})
					]
				}, portal.href))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "legal",
			children: [
				"Copyright ©2026",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://bitsyth.com",
					target: "_blank",
					rel: "noopener noreferrer",
					children: "Bitsyth.com"
				}),
				" ",
				"All rights reserved"
			]
		}) })]
	});
}
//#endregion
export { Home as component };
