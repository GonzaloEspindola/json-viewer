(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap";.json-viewer-empty-header{margin-bottom:20px}.add-height{height:auto!important}.rotate90{transform:rotate(0)!important}.jv-wrap{display:flex}.jv-folder{cursor:pointer}.jv-light-con{background:#fff;color:#000;font-family:Space Mono;overflow:auto;height:100%;width:100%}.jv-light-symbol{color:#00f;font-weight:700}.jv-light-current{line-height:30px;padding-left:40px;position:relative}.jv-light-left{display:inline-block}.jv-light-left-text{color:#00008b}.jv-light-left-array-item{color:green}.jv-light-rightString{display:inline-block;color:#d2691e}.jv-light-rightBoolean{display:inline-block;color:green}.jv-light-rightNumber{display:inline-block;color:#ff4500}.jv-light-rightNull{display:inline-block;color:gray}.jv-light-rightObj,.jv-light-rightArr{display:block!important;overflow:hidden;height:0}.jv-light-folder{width:0px;display:inline-block;margin-left:-15px;text-align:center;cursor:pointer;height:0px;border:4px solid transparent;border-top:8px solid #0000ff;position:absolute;top:11px;transform:rotate(-90deg);transform-origin:50% 25%}.jv-light-len{color:#000}.json-viewer-container{display:flex;flex-direction:column;background-color:#1d293b}.json-viewer-header{display:flex;align-items:center;border:2px solid #1d293b;padding:10px}.json-viewer-header span:nth-child(1){font-weight:700}.json-viewer-header span:nth-child(2){font-weight:100}.json-viewer-header span:nth-child(3){font-weight:700;font-size:1rem}.method{color:#b5cea8;padding-right:20px}.baseUrl{color:#fff}.url{color:#b5cea8}.jv-dark-con{color:#000;font-family:Space Mono;overflow:auto;height:100%;width:100%;background-color:#202020}.jv-dark-symbol{color:orchid;font-weight:700}.jv-dark-current{line-height:30px;padding-left:40px;position:relative}.jv-dark-left{display:inline-block}.jv-dark-left-text{color:#9cdcfe}.jv-dark-left-array-item{color:#b5cea8}.jv-dark-rightString{display:inline-block;color:#ce9178}.jv-dark-rightBoolean{display:inline-block;color:#569cd6}.jv-dark-rightNumber{display:inline-block;color:#b5cea8}.jv-dark-rightNull{display:inline-block;color:#569cd6}.jv-dark-rightObj,.jv-dark-rightArr{display:block!important;overflow:hidden;height:0}.jv-dark-folder{width:0px;display:inline-block;margin-left:-15px;text-align:center;cursor:pointer;height:0px;border:4px solid transparent;border-top:8px solid #da70d6;position:absolute;top:11px;transform:rotate(-90deg);transform-origin:50% 25%}.jv-dark-len{color:#fff}.obj-color{color:#9cdcfe}.arr-color{color:#b5cea8}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
class g {
  constructor(t) {
    const e = {
      container: null,
      method: "",
      baseUrl: "",
      url: "",
      showHeader: !0,
      data: JSON.stringify({}),
      theme: "dark",
      expand: !1
    };
    if (this.options = { ...e, ...t }, this.options.data = JSON.stringify(this.options.data), this.isNull(this.options.container))
      throw new Error("Container: DOM element is required");
    this.options.showHeader ? this.createHeader() : this.createEmptyHeader();
    const s = this.parseData();
    this.render(s);
  }
  parseData() {
    const t = this.options.data;
    let e;
    try {
      e = JSON.parse(t);
    } catch {
      throw new Error("It is not a valid JSON format");
    }
    return e;
  }
  createHeader() {
    var s;
    const t = this.createElement("div");
    t.className = "json-viewer-header";
    const e = `
              <span class="method">${this.options.method}</span>
              <span class="baseUrl">${this.options.baseUrl}</span>
              <span class="url">/${this.options.url}</span>
      `;
    t.innerHTML = e, (s = this.options.container) == null || s.appendChild(t);
  }
  createEmptyHeader() {
    var e;
    const t = this.createElement("div");
    t.className = "json-viewer-empty-header", (e = this.options.container) == null || e.appendChild(t);
  }
  render(t) {
    const e = "jv-" + this.options.theme + "-", s = 0, n = this.options.container, o = "";
    n == null || n.setAttribute("class", e + "con");
    const { left: l, right: r } = this.createItem(s, e, n, o);
    this.renderChildren(e, o, t, r, s, l);
  }
  renderRight(t, e, s) {
    this.isNumber(s) ? e.setAttribute("class", t + "rightNumber") : this.isBoolean(s) ? e.setAttribute("class", t + "rightBoolean") : s === "null" ? e.setAttribute("class", t + "rightNull") : e.setAttribute("class", t + "rightString"), e.innerText = this.isString(s) && s !== "null" ? `"${s}"` : s;
  }
  renderChildren(t, e, s, n, o, l) {
    const r = this.createElement("span"), i = this.options.expand ? "rotate90" : "", a = this.options.expand ? "add-height" : "";
    r.setAttribute("class", `${t}folder ${i}`), r.onclick = (h) => {
      const u = h.target.parentNode.nextSibling;
      this.toggleItem(u, h.target);
    };
    const p = this.isObject(s) ? Object.keys(s).length : s.length, c = !this.isArray(s);
    l.innerHTML = c ? `<span class="${t}left-text">${e}</span><span class="${t}symbol">:</span> <span class="${t}symbol">{</span><span class="${t}len">&nbsp;${p}&nbsp;</span><span class="${t}symbol">}</span>` : `<span class="${t}left-text">${e}</span><span class="${t}symbol">:</span> <span class="${t}symbol">[</span><span class="${t}len">&nbsp;${p}&nbsp;</span><span class="${t}symbol">]</span>`, l.prepend(r);
    const d = c ? "rightObj " : "rightArr ";
    n.setAttribute("class", t + d + a), this.parse(s, n, o + 0, t, c ? "obj" : "arr");
  }
  parse(t, e, s, n, o) {
    this.forEach(t, (l, r) => {
      const { left: i, right: a } = this.createItem(s, n, e, r, typeof l != "object", o);
      typeof l != "object" ? this.renderRight(n, a, l) : this.renderChildren(n, r, l, a, s, i);
    });
  }
  createItem(t, e, s, n, o = !1, l = "") {
    const r = this.createElement("div");
    r.classList.add("code-snippet");
    const i = this.createElement("div"), a = this.createElement("div"), p = this.createElement("div"), c = this.createElement("div");
    return i.style.marginLeft = `${t * 2}px`, a.innerHTML = `<span class="${e}left-text ${l}-color">${n}</span><span class="${e}symbol">${n === "" ? "" : ":&nbsp;"}</span>`, o ? (i.appendChild(c), c.appendChild(a), c.appendChild(p), r.appendChild(i), s == null || s.appendChild(r), i.setAttribute("class", e + "current"), c.setAttribute("class", "jv-wrap"), a.setAttribute("class", e + "left")) : (i.appendChild(a), i.appendChild(p), r.appendChild(i), s == null || s.appendChild(r), i.setAttribute("class", e + "current"), a.setAttribute("class", e + "left jv-folder"), a.onclick = (d) => {
      const h = d.currentTarget.querySelector(`span.${e}folder`), u = d.currentTarget.nextElementSibling;
      this.toggleItem(u, h);
    }), { left: a, right: p, current: i };
  }
  toggleItem(t, e) {
    t.classList.toggle("add-height"), e.classList.toggle("rotate90");
  }
  createElement(t) {
    return document.createElement(t);
  }
  forEach(t, e) {
    if (!(this.isUndefined(t) || this.isNull(t)))
      if (this.isArray(t))
        for (let s = 0; s < t.length; s++)
          e.call(null, t[s], s, t);
      else
        for (let s in t)
          t.hasOwnProperty(s) && e.call(null, t[s] ?? "null", s, t);
  }
  // Type checking functions
  isString(t) {
    return typeof t == "string";
  }
  isNumber(t) {
    return typeof t == "number";
  }
  isBoolean(t) {
    return typeof t == "boolean";
  }
  isUndefined(t) {
    return typeof t > "u";
  }
  isArray(t) {
    return Array.isArray(t);
  }
  isObject(t) {
    return t !== null && typeof t == "object";
  }
  isNull(t) {
    return t === null;
  }
}
export {
  g as JsonViewer
};
//# sourceMappingURL=JsonViewer.es.js.map
