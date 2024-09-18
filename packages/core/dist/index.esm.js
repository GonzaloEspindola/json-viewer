class JsonViewer {
    constructor(options) {
        const defaults = {
            container: null,
            method: '',
            baseUrl: '',
            url: '',
            showHeader: true,
            data: JSON.stringify({}),
            theme: 'dark',
            expand: false,
        };
        this.options = Object.assign(Object.assign({}, defaults), options);
        this.options.data = JSON.stringify(this.options.data);
        if (this.isNull(this.options.container)) {
            throw new Error('Container: DOM element is required');
        }
        if (this.options.showHeader) {
            this.createHeader();
        }
        else {
            this.createEmptyHeader();
        }
        const parsedData = this.parseData();
        this.render(parsedData);
    }
    parseData() {
        const data = this.options.data;
        let dataObj;
        try {
            dataObj = JSON.parse(data);
        }
        catch (error) {
            throw new Error('It is not a valid JSON format');
        }
        return dataObj; // Return parsed data to be rendered
    }
    createHeader() {
        var _a;
        const headerContainer = this.createElement('div');
        headerContainer.className = 'json-viewer-header'; // Estilos opcionales
        // Genera el contenido del encabezado
        const headerContent = `
              <span class="method">${this.options.method}</span>
              <span class="baseUrl">${this.options.baseUrl}</span>
              <span class="url">/${this.options.url}</span>
      `;
        headerContainer.innerHTML = headerContent;
        // Añade el encabezado al contenedor principal
        (_a = this.options.container) === null || _a === void 0 ? void 0 : _a.appendChild(headerContainer);
    }
    createEmptyHeader() {
        var _a;
        const headerContainer = this.createElement('div');
        headerContainer.className = 'json-viewer-empty-header';
        // Añade el encabezado al contenedor principal
        (_a = this.options.container) === null || _a === void 0 ? void 0 : _a.appendChild(headerContainer);
    }
    render(dataObj) {
        const theme = 'jv-' + this.options.theme + '-';
        const indent = 0;
        const parent = this.options.container;
        const key = '';
        parent === null || parent === void 0 ? void 0 : parent.setAttribute('class', theme + 'con');
        const { left, right } = this.createItem(indent, theme, parent, key);
        this.renderChildren(theme, key, dataObj, right, indent, left);
    }
    renderRight(theme, right, val) {
        if (this.isNumber(val)) {
            right.setAttribute('class', theme + 'rightNumber');
        }
        else if (this.isBoolean(val)) {
            right.setAttribute('class', theme + 'rightBoolean');
        }
        else if (val === 'null') {
            right.setAttribute('class', theme + 'rightNull');
        }
        else {
            right.setAttribute('class', theme + 'rightString');
        }
        right.innerText = this.isString(val) && val !== 'null' ? `"${val}"` : val;
    }
    renderChildren(theme, key, val, right, indent, left) {
        const folder = this.createElement('span');
        const rotate90 = this.options.expand ? 'rotate90' : '';
        const addHeight = this.options.expand ? 'add-height' : '';
        folder.setAttribute('class', `${theme}folder ${rotate90}`);
        folder.onclick = (e) => {
            const nextSibling = e.target.parentNode.nextSibling;
            this.toggleItem(nextSibling, e.target);
        };
        const len = this.isObject(val) ? Object.keys(val).length : val.length;
        const isObj = !this.isArray(val);
        left.innerHTML = isObj
            ? `<span class="${theme}left-text">${key}</span><span class="${theme}symbol">:</span> <span class="${theme}symbol">{</span><span class="${theme}len">&nbsp;${len}&nbsp;</span><span class="${theme}symbol">}</span>`
            : `<span class="${theme}left-text">${key}</span><span class="${theme}symbol">:</span> <span class="${theme}symbol">[</span><span class="${theme}len">&nbsp;${len}&nbsp;</span><span class="${theme}symbol">]</span>`;
        left.prepend(folder);
        const rightIs = isObj ? 'rightObj ' : 'rightArr ';
        right.setAttribute('class', theme + rightIs + addHeight);
        this.parse(val, right, indent + 0, theme, isObj ? 'obj' : 'arr');
    }
    parse(dataObj, parent, indent, theme, thisIs) {
        this.forEach(dataObj, (val, key) => {
            const { left, right } = this.createItem(indent, theme, parent, key, typeof val !== 'object', thisIs);
            if (typeof val !== 'object') {
                this.renderRight(theme, right, val);
            }
            else {
                this.renderChildren(theme, key, val, right, indent, left);
            }
        });
    }
    createItem(indent, theme, parent, key, basicType = false, thisIs = '') {
        const currentContainer = this.createElement('div'); // Contenedor para el elemento actual
        currentContainer.classList.add('code-snippet');
        const current = this.createElement('div');
        const left = this.createElement('div');
        const right = this.createElement('div');
        const wrap = this.createElement('div');
        current.style.marginLeft = `${indent * 2}px`;
        left.innerHTML = `<span class="${theme}left-text ${thisIs}-color">${key}</span><span class="${theme}symbol">${key === '' ? '' : ':&nbsp;'}</span>`;
        if (basicType) {
            current.appendChild(wrap);
            wrap.appendChild(left);
            wrap.appendChild(right);
            currentContainer.appendChild(current); // Añadir el elemento actual al contenedor
            parent === null || parent === void 0 ? void 0 : parent.appendChild(currentContainer); // Añadir el contenedor al padre
            current.setAttribute('class', theme + 'current');
            wrap.setAttribute('class', 'jv-wrap');
            left.setAttribute('class', theme + 'left');
        }
        else {
            current.appendChild(left);
            current.appendChild(right);
            currentContainer.appendChild(current); // Añadir el elemento actual al contenedor
            parent === null || parent === void 0 ? void 0 : parent.appendChild(currentContainer); // Añadir el contenedor al padre
            current.setAttribute('class', theme + 'current');
            left.setAttribute('class', theme + 'left jv-folder');
            left.onclick = (e) => {
                const firstSpan = e.currentTarget.querySelector(`span.${theme}folder`);
                const nextDiv = e.currentTarget.nextElementSibling;
                this.toggleItem(nextDiv, firstSpan);
            };
        }
        return { left, right, current };
    }
    toggleItem(ele, target) {
        ele.classList.toggle('add-height');
        target.classList.toggle('rotate90');
    }
    createElement(type) {
        return document.createElement(type);
    }
    forEach(obj, fn) {
        var _a;
        if (this.isUndefined(obj) || this.isNull(obj)) {
            return;
        }
        if (this.isArray(obj)) {
            for (let i = 0; i < obj.length; i++) {
                fn.call(null, obj[i], i, obj);
            }
        }
        else {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    fn.call(null, (_a = obj[key]) !== null && _a !== void 0 ? _a : 'null', key, obj);
                }
            }
        }
    }
    // Type checking functions
    isString(val) { return typeof val === 'string'; }
    isNumber(val) { return typeof val === 'number'; }
    isBoolean(val) { return typeof val === 'boolean'; }
    isUndefined(val) { return typeof val === 'undefined'; }
    isArray(val) { return Array.isArray(val); }
    isObject(val) { return val !== null && typeof val === 'object'; }
    isNull(val) { return val === null; }
}

export { JsonViewer as default };
