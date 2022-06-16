/*!
 * @form-create/element-ui v2.5.22
 * (c) 2018-2022 xaboy
 * Github https://github.com/xaboy/form-create
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
        typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
            (global = global || self, factory(global.formCreate = {}, global.Vue));
}(this, (function (exports, Vue) { 'use strict';

    Vue = Vue && Object.prototype.hasOwnProperty.call(Vue, 'default') ? Vue['default'] : Vue;

    function _extends() {
        return _extends = Object.assign || function (a) {
            for (var b, c = 1; c < arguments.length; c++) {
                for (var d in b = arguments[c], b) {
                    Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
                }
            }
            return a;
        }, _extends.apply(this, arguments);
    }
    var normalMerge = ["attrs", "props", "domProps"],
        toArrayMerge = ["class", "style", "directives"],
        functionalMerge = ["on", "nativeOn"],
        mergeJsxProps = function mergeJsxProps(a) {
            return a.reduce(function (c, a) {
                for (var b in a) {
                    if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge.indexOf(b)) c[b] = _extends({}, c[b], a[b]);else if (-1 !== toArrayMerge.indexOf(b)) {
                        var d = c[b] instanceof Array ? c[b] : [c[b]],
                            e = a[b] instanceof Array ? a[b] : [a[b]];
                        c[b] = d.concat(e);
                    } else if (-1 !== functionalMerge.indexOf(b)) {
                        for (var f in a[b]) {
                            if (c[b][f]) {
                                var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
                                    h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
                                c[b][f] = g.concat(h);
                            } else c[b][f] = a[b][f];
                        }
                    } else if ("hook" == b) for (var i in a[b]) {
                        c[b][i] = c[b][i] ? mergeFn(c[b][i], a[b][i]) : a[b][i];
                    } else c[b] = a[b];
                }
                return c;
            }, {});
        },
        mergeFn = function mergeFn(a, b) {
            return function () {
                a && a.apply(this, arguments), b && b.apply(this, arguments);
            };
        };
    var helper = mergeJsxProps;

    function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function (obj) {
                return typeof obj;
            };
        } else {
            _typeof = function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }

        return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }

        return keys;
    }

    function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
                ownKeys(Object(source), true).forEach(function (key) {
                    _defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function (key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }

        return target;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };

        return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
    }

    function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
            return call;
        }

        return _assertThisInitialized(self);
    }

    function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();

        return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
                result;

            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;

                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }

            return _possibleConstructorReturn(this, result);
        };
    }

    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }

    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
    }

    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

        return arr2;
    }

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function getSlot(slots, exclude) {
        return Object.keys(slots).reduce(function (lst, name) {
            if (!exclude || exclude.indexOf(name) === -1) {
                lst.push(slots[name]);
            }
            return lst;
        }, []);
    }

    var NAME = 'fcCheckbox';
    var Checkbox = {
        name: NAME,
        props: {
            formCreateInject: {
                type: Object,
                required: true
            },
            value: {
                type: Array,
                "default": function _default() {
                    return [];
                }
            },
            type: String
        },
        watch: {
            'formCreateInject.options': {
                handler: function handler() {
                    this.update();
                },
                deep: true
            },
            value: function value() {
                this.update();
            }
        },
        data: function data() {
            return {
                trueValue: []
            };
        },
        methods: {
            options: function options() {
                var opt = this.formCreateInject.options;
                return Array.isArray(opt) ? opt : [];
            },
            onInput: function onInput(n) {
                this.$emit('input', this.options().filter(function (opt) {
                    return n.indexOf(opt.label) !== -1;
                }).map(function (opt) {
                    return opt.value;
                }).filter(function (v) {
                    return v !== undefined;
                }));
            },
            update: function update() {
                var _this = this;
                this.trueValue = this.value ? this.options().filter(function (opt) {
                    return _this.value.indexOf(opt.value) !== -1;
                }).map(function (option) {
                    return option.label;
                }) : [];
            }
        },
        created: function created() {
            this.update();
        },
        render: function render() {
            var _this2 = this;
            var h = arguments[0];
            return h("ElCheckboxGroup", helper([{}, this.formCreateInject.prop, {
                "attrs": {
                    "value": this.trueValue
                },
                "on": {
                    "input": this.onInput
                }
            }]), [this.options().map(function (opt, index) {
                var props = _objectSpread2({}, opt);
                var Type = _this2.type === 'button' ? 'ElCheckboxButton' : 'ElCheckbox';
                delete props.value;
                return h(Type, {
                    "props": _objectSpread2({}, props),
                    "key": Type + index + opt.value
                });
            }), getSlot(this.$slots)]);
        }
    };

    function toArray(value) {
        return Array.isArray(value) ? value : [null, undefined, ''].indexOf(value) > -1 ? [] : [value];
    }

    function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === 'undefined') {
            return;
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (insertAt === 'top') {
            if (head.firstChild) {
                head.insertBefore(style, head.firstChild);
            } else {
                head.appendChild(style);
            }
        } else {
            head.appendChild(style);
        }
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }

    var css_248z = "._fc-frame .fc-files img {\n    width: 100%;\n    height: 100%;\n    display: inline-block;\n    vertical-align: top;\n}\n\n._fc-frame .fc-upload-btn {\n    border: 1px dashed #c0ccda;\n    cursor: pointer;\n}\n\n._fc-frame .fc-upload-cover {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, .6);\n    -webkit-transition: opacity .3s;\n    -o-transition: opacity .3s;\n    transition: opacity .3s;\n}\n\n._fc-frame .fc-upload-cover i {\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n\n._fc-frame .fc-files:hover .fc-upload-cover {\n    opacity: 1;\n}\n\n._fc-frame .el-upload {\n    display: block;\n}\n\n._fc-frame .fc-upload-btn, .fc-files {\n    display: inline-block;\n    width: 58px;\n    height: 58px;\n    text-align: center;\n    line-height: 58px;\n    border: 1px solid #c0ccda;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fff;\n    position: relative;\n    -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);\n    margin-right: 4px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n";
    styleInject(css_248z);

    var NAME$1 = 'fcFrame';
    var Frame = {
        name: NAME$1,
        props: {
            formCreateInject: {
                type: Object,
                required: true
            },
            type: {
                type: String,
                "default": 'input'
            },
            field: String,
            helper: {
                type: Boolean,
                "default": true
            },
            disabled: {
                type: Boolean,
                "default": false
            },
            src: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                "default": 'el-icon-upload2'
            },
            width: {
                type: String,
                "default": '500px'
            },
            height: {
                type: String,
                "default": '370px'
            },
            maxLength: {
                type: Number,
                "default": 0
            },
            okBtnText: {
                type: String,
                "default": '确定'
            },
            closeBtnText: {
                type: String,
                "default": '关闭'
            },
            modalTitle: String,
            handleIcon: {
                type: [String, Boolean],
                "default": undefined
            },
            title: String,
            allowRemove: {
                type: Boolean,
                "default": true
            },
            onOpen: {
                type: Function,
                "default": function _default() {}
            },
            onOk: {
                type: Function,
                "default": function _default() {}
            },
            onCancel: {
                type: Function,
                "default": function _default() {}
            },
            onLoad: {
                type: Function,
                "default": function _default() {}
            },
            onBeforeRemove: {
                type: Function,
                "default": function _default() {}
            },
            onRemove: {
                type: Function,
                "default": function _default() {}
            },
            onHandle: {
                type: Function,
                "default": function _default(src) {
                    this.previewImage = this.getSrc(src);
                    this.previewVisible = true;
                }
            },
            modal: {
                type: Object,
                "default": function _default() {
                    return {};
                }
            },
            srcKey: {
                type: [String, Number]
            },
            value: [Array, String, Number, Object],
            previewMask: undefined,
            footer: {
                type: Boolean,
                "default": true
            },
            reload: {
                type: Boolean,
                "default": true
            },
            closeBtn: {
                type: Boolean,
                "default": true
            },
            okBtn: {
                type: Boolean,
                "default": true
            }
        },
        data: function data() {
            return {
                fileList: toArray(this.value),
                previewVisible: false,
                frameVisible: false,
                previewImage: ''
            };
        },
        watch: {
            value: function value(n) {
                this.fileList = toArray(n);
            },
            fileList: function fileList(n) {
                var val = this.maxLength === 1 ? n[0] || '' : n;
                this.$emit('input', val);
                this.$emit('change', val);
            },
            src: function src(n) {
                this.modalVm && (this.modalVm.src = n);
            }
        },
        methods: {
            key: function key(unique) {
                return unique;
            },
            closeModel: function closeModel(close) {
                this.$emit(close ? '$close' : '$ok');
                if (this.reload) {
                    this.$off('$ok');
                    this.$off('$close');
                }
                this.frameVisible = false;
            },
            handleCancel: function handleCancel() {
                this.previewVisible = false;
            },
            showModel: function showModel() {
                if (this.disabled || false === this.onOpen()) {
                    return;
                }
                this.frameVisible = true;
            },
            makeInput: function makeInput() {
                var _this = this;
                var h = this.$createElement;
                var props = {
                    type: 'text',
                    value: this.fileList.map(function (v) {
                        return _this.getSrc(v);
                    }).toString(),
                    readonly: true
                };
                return h("ElInput", helper([{}, {
                    "props": props
                }, {
                    "key": this.key('input')
                }]), [this.fileList.length ? h("i", {
                    "slot": "suffix",
                    "class": "el-input__icon el-icon-circle-close",
                    "on": {
                        "click": function click() {
                            return _this.fileList = [];
                        }
                    }
                }) : null, h("ElButton", helper([{
                    "attrs": {
                        "icon": this.icon
                    }
                }, {
                    "on": {
                        'click': function click() {
                            return _this.showModel();
                        }
                    }
                }, {
                    "slot": "append"
                }]))]);
            },
            makeGroup: function makeGroup(children) {
                var h = this.$createElement;
                if (!this.maxLength || this.fileList.length < this.maxLength) {
                    children.push(this.makeBtn());
                }
                return h("div", {
                    "key": this.key('group')
                }, _toConsumableArray(children));
            },
            makeItem: function makeItem(index, children) {
                var h = this.$createElement;
                return h("div", {
                    "class": 'fc-files',
                    "key": this.key('file' + index)
                }, _toConsumableArray(children));
            },
            valid: function valid(f) {
                var field = this.formCreateInject.field || this.field;
                if (field && f !== field) {
                    throw new Error('[frame]无效的字段值');
                }
            },
            makeIcons: function makeIcons(val, index) {
                var h = this.$createElement;
                if (this.handleIcon !== false || this.allowRemove === true) {
                    var icons = [];
                    if (this.type !== 'file' && this.handleIcon !== false || this.type === 'file' && this.handleIcon) {
                        icons.push(this.makeHandleIcon(val, index));
                    }
                    if (this.allowRemove) {
                        icons.push(this.makeRemoveIcon(val, index));
                    }
                    return h("div", {
                        "class": 'fc-upload-cover',
                        "key": this.key('uc')
                    }, [icons]);
                }
            },
            makeHandleIcon: function makeHandleIcon(val, index) {
                var _this2 = this;
                var h = this.$createElement;
                return h("i", {
                    "class": this.handleIcon === true || this.handleIcon === undefined ? 'el-icon-view' : this.handleIcon,
                    "on": {
                        "click": function click() {
                            return _this2.handleClick(val);
                        }
                    },
                    "key": this.key('hi' + index)
                });
            },
            makeRemoveIcon: function makeRemoveIcon(val, index) {
                var _this3 = this;
                var h = this.$createElement;
                return h("i", {
                    "class": "el-icon-delete",
                    "on": {
                        "click": function click() {
                            return _this3.handleRemove(val);
                        }
                    },
                    "key": this.key('ri' + index)
                });
            },
            makeFiles: function makeFiles() {
                var _this4 = this;
                var h = this.$createElement;
                return this.makeGroup(this.fileList.map(function (src, index) {
                    return _this4.makeItem(index, [h("i", {
                        "class": "el-icon-tickets",
                        "on": {
                            "click": function click() {
                                return _this4.handleClick(src);
                            }
                        }
                    }), _this4.makeIcons(src, index)]);
                }));
            },
            makeImages: function makeImages() {
                var _this5 = this;
                var h = this.$createElement;
                return this.makeGroup(this.fileList.map(function (src, index) {
                    return _this5.makeItem(index, [h("img", {
                        "attrs": {
                            "src": _this5.getSrc(src)
                        }
                    }), _this5.makeIcons(src, index)]);
                }));
            },
            makeBtn: function makeBtn() {
                var _this6 = this;
                var h = this.$createElement;
                return h("div", {
                    "class": 'fc-upload-btn',
                    "on": {
                        "click": function click() {
                            return _this6.showModel();
                        }
                    },
                    "key": this.key('btn')
                }, [h("i", {
                    "class": this.icon
                })]);
            },
            handleClick: function handleClick(src) {
                return this.onHandle(src);
            },
            handleRemove: function handleRemove(src) {
                if (this.disabled) {
                    return;
                }
                if (false !== this.onBeforeRemove(src)) {
                    this.fileList.splice(this.fileList.indexOf(src), 1);
                    this.onRemove(src);
                }
            },
            getSrc: function getSrc(src) {
                return !this.srcKey ? src : src[this.srcKey];
            },
            frameLoad: function frameLoad(iframe) {
                var _this7 = this;
                this.onLoad(iframe);
                try {
                    if (this.helper === true) {
                        iframe['form_create_helper'] = {
                            api: this.formCreateInject.api,
                            close: function close(field) {
                                _this7.valid(field);
                                _this7.closeModel();
                            },
                            set: function set(field, value) {
                                _this7.valid(field);
                                if (!_this7.disabled) _this7.$emit('input', value);
                            },
                            get: function get(field) {
                                _this7.valid(field);
                                return _this7.value;
                            },
                            onOk: function onOk(fn) {
                                return _this7.$on('$ok', fn);
                            },
                            onClose: function onClose(fn) {
                                return _this7.$on('$close', fn);
                            }
                        };
                    }
                } catch (e) {
                    console.log(e);
                }
            },
            makeFooter: function makeFooter() {
                var _this8 = this;
                var h = this.$createElement;
                var _this$$props = this.$props,
                    okBtnText = _this$$props.okBtnText,
                    closeBtnText = _this$$props.closeBtnText,
                    closeBtn = _this$$props.closeBtn,
                    okBtn = _this$$props.okBtn,
                    footer = _this$$props.footer;
                if (!footer) {
                    return;
                }
                return h("div", {
                    "slot": "footer"
                }, [closeBtn ? h("ElButton", {
                    "on": {
                        "click": function click() {
                            return _this8.onCancel() !== false && (_this8.frameVisible = false);
                        }
                    }
                }, [closeBtnText]) : null, okBtn ? h("ElButton", {
                    "attrs": {
                        "type": "primary"
                    },
                    "on": {
                        "click": function click() {
                            return _this8.onOk() !== false && _this8.closeModel();
                        }
                    }
                }, [okBtnText]) : null]);
            }
        },
        render: function render() {
            var _this9 = this;
            var h = arguments[0];
            var type = this.type;
            var node;
            if (type === 'input') {
                node = this.makeInput();
            } else if (type === 'image') {
                node = this.makeImages();
            } else {
                node = this.makeFiles();
            }
            var _this$$props2 = this.$props,
                _this$$props2$width = _this$$props2.width,
                width = _this$$props2$width === void 0 ? '30%' : _this$$props2$width,
                height = _this$$props2.height,
                src = _this$$props2.src,
                title = _this$$props2.title,
                modalTitle = _this$$props2.modalTitle;
            this.$nextTick(function () {
                if (_this9.$refs.frame) {
                    _this9.frameLoad(_this9.$refs.frame.contentWindow || {});
                }
            });
            return h("div", {
                "class": "_fc-frame"
            }, [node, h("el-dialog", {
                "attrs": {
                    "appendToBody": true,
                    "modal": this.previewMask,
                    "title": modalTitle,
                    "visible": this.previewVisible
                },
                "on": {
                    "close": this.handleCancel
                }
            }, [h("img", {
                "style": "width: 100%",
                "attrs": {
                    "src": this.previewImage
                }
            })]), h("el-dialog", {
                "attrs": {
                    "appendToBody": true,
                    "visible": this.frameVisible
                },
                "props": _objectSpread2({}, _objectSpread2({
                    width: width,
                    title: title
                }, this.modal)),
                "on": {
                    "close": function close() {
                        return _this9.closeModel(true);
                    }
                }
            }, [this.frameVisible || !this.reload ? h("iframe", {
                "ref": "frame",
                "attrs": {
                    "src": src,
                    "frameBorder": "0"
                },
                "style": {
                    'height': height,
                    'border': '0 none',
                    'width': '100%'
                }
            }) : null, this.makeFooter()])]);
        },
        mounted: function mounted() {
            this.$on('fc.closeModal', this.closeModal);
        }
    };

    var NAME$2 = 'fcRadio';
    var Radio = {
        name: NAME$2,
        props: {
            formCreateInject: {
                type: Object,
                required: true
            },
            value: {},
            type: String
        },
        watch: {
            'formCreateInject.options': {
                handler: function handler() {
                    this.update();
                },
                deep: true
            },
            value: function value() {
                this.update();
            }
        },
        data: function data() {
            return {
                trueValue: []
            };
        },
        methods: {
            options: function options() {
                var opt = this.formCreateInject.options;
                return Array.isArray(opt) ? opt : [];
            },
            onInput: function onInput(n) {
                this.$emit('input', this.options().filter(function (opt) {
                    return opt.label === n;
                }).reduce(function (initial, opt) {
                    return opt.value;
                }, ''));
            },
            update: function update() {
                var _this = this;
                this.trueValue = this.options().filter(function (opt) {
                    return opt.value === _this.value;
                }).reduce(function (initial, opt) {
                    return opt.label;
                }, '');
            }
        },
        created: function created() {
            this.update();
        },
        render: function render() {
            var _this2 = this;
            var h = arguments[0];
            return h("ElRadioGroup", helper([{}, this.formCreateInject.prop, {
                "attrs": {
                    "value": this.trueValue
                },
                "on": {
                    "input": this.onInput
                }
            }]), [this.options().map(function (opt, index) {
                var props = _objectSpread2({}, opt);
                var Type = _this2.type === 'button' ? 'ElRadioButton' : 'ElRadio';
                delete props.value;
                return h(Type, {
                    "props": _objectSpread2({}, props),
                    "key": Type + index + opt.value
                });
            }), getSlot(this.$slots)]);
        }
    };

    var is = {
        type: function type(arg, _type) {
            return Object.prototype.toString.call(arg) === '[object ' + _type + ']';
        },
        Undef: function Undef(v) {
            return v === undefined || v === null;
        },
        Element: function Element(arg) {
            return _typeof(arg) === 'object' && arg !== null && arg.nodeType === 1 && !is.Object(arg);
        },
        trueArray: function trueArray(data) {
            return Array.isArray(data) && data.length > 0;
        },
        Function: function Function(v) {
            var type = this.getType(v);
            return type === 'Function' || type === 'AsyncFunction';
        },
        getType: function getType(v) {
            var str = Object.prototype.toString.call(v);
            return /^\[object (.*)\]$/.exec(str)[1];
        },
        empty: function empty(value) {
            if (value === undefined || value === null) {
                return true;
            }
            if (Array.isArray(value) && Array.isArray(value) && !value.length) {
                return true;
            }
            return typeof value === 'string' && !value;
        }
    };
    ['Date', 'Object', 'String', 'Boolean', 'Array', 'Number'].forEach(function (t) {
        is[t] = function (arg) {
            return is.type(arg, t);
        };
    });
    function hasProperty(rule, k) {
        return {}.hasOwnProperty.call(rule, k);
    }

    var NAME$3 = 'fcSelect';
    var Select = {
        name: NAME$3,
        functional: true,
        props: {
            formCreateInject: {
                type: Object,
                required: true
            }
        },
        render: function render(h, ctx) {
            var options = ctx.props.formCreateInject.options;
            return h("ElSelect", helper([{}, ctx.data]), [(Array.isArray(options) ? options : []).map(function (props, index) {
                var slot = props.slot;
                return h("ElOption", {
                    "props": _objectSpread2({}, props),
                    "key": '' + index + props.value
                }, [slot ? h("template", {
                    "slot": props.slotName || 'default'
                }, [is.Function(slot) ? props.slot(h) : slot]) : null]);
            }), ctx.children]);
        }
    };

    var NAME$4 = 'fcTree';
    var Tree = {
        name: NAME$4,
        formCreateParser: {
            mergeProp: function mergeProp(ctx) {
                var props = ctx.prop.props;
                if (!props.nodeKey) props.nodeKey = 'id';
                if (!props.props) props.props = {
                    label: 'title'
                };
            }
        },
        props: {
            formCreateInject: {
                type: Object,
                required: true
            },
            type: {
                type: String,
                "default": 'checked'
            },
            value: {
                type: [Array, String, Number],
                "default": function _default() {
                    return [];
                }
            }
        },
        watch: {
            value: function value() {
                this.setValue();
            }
        },
        methods: {
            onChange: function onChange() {
                this.updateValue();
            },
            updateValue: function updateValue() {
                if (!this.$refs.tree) return;
                var type = this.type.toLocaleLowerCase();
                var value;
                if (type === 'selected') {
                    value = this.$refs.tree.getCurrentKey();
                } else {
                    value = this.$refs.tree.getCheckedKeys();
                }
                this.$emit('input', value);
            },
            setValue: function setValue() {
                var type = this.type.toLocaleLowerCase();
                if (type === 'selected') {
                    this.$refs.tree.setCurrentKey(this.value);
                } else {
                    this.$refs.tree.setCheckedKeys(toArray(this.value));
                }
            }
        },
        render: function render() {
            var _this = this;
            var h = arguments[0];
            return h("ElTree", helper([{}, this.formCreateInject.prop, {
                "ref": "tree",
                "on": {
                    "check": function check() {
                        return _this.updateValue();
                    },
                    "node-click": function nodeClick() {
                        return _this.updateValue();
                    }
                }
            }]), [getSlot(this.$slots)]);
        },
        mounted: function mounted() {
            this.setValue();
        }
    };

    var css_248z$1 = "._fc-upload .fc-files img {\n    width: 100%;\n    height: 100%;\n    display: inline-block;\n    vertical-align: top;\n}\n\n._fc-upload .fc-upload-btn {\n    border: 1px dashed #c0ccda;\n    cursor: pointer;\n}\n\n._fc-upload .fc-upload-cover {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, .6);\n    -webkit-transition: opacity .3s;\n    -o-transition: opacity .3s;\n    transition: opacity .3s;\n}\n\n._fc-upload .fc-upload-cover i {\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n\n._fc-upload .fc-files:hover .fc-upload-cover {\n    opacity: 1;\n}\n\n._fc-upload .el-upload {\n    display: block;\n}\n\n._fc-upload .fc-upload-btn, ._fc-upload .fc-files {\n    display: inline-block;\n    width: 58px;\n    height: 58px;\n    text-align: center;\n    line-height: 58px;\n    border: 1px solid #c0ccda;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fff;\n    position: relative;\n    -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);\n    margin-right: 4px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n";
    styleInject(css_248z$1);

    function parseFile(file, i) {
        return {
            url: file,
            name: getFileName(file),
            uid: i
        };
    }
    function getFileName(file) {
        return ('' + file).split('/').pop();
    }
    var NAME$5 = 'fcUpload';
    var Upload = {
        name: NAME$5,
        props: {
            formCreateInject: {
                type: Object,
                required: true
            },
            onHandle: {
                type: Function,
                "default": function _default(file) {
                    this.previewImage = file.url;
                    this.previewVisible = true;
                }
            },
            uploadType: {
                type: String,
                "default": 'file'
            },
            limit: {
                type: Number,
                "default": 0
            },
            allowRemove: {
                type: Boolean,
                "default": true
            },
            previewMask: undefined,
            modalTitle: String,
            handleIcon: {
                type: [String, Boolean],
                "default": function _default() {
                    return undefined;
                }
            },
            value: [Array, String]
        },
        data: function data() {
            return {
                uploadList: [],
                previewVisible: false,
                previewImage: '',
                cacheFiles: []
            };
        },
        created: function created() {
            if (this.formCreateInject.prop.props.showFileList === undefined) {
                this.formCreateInject.prop.props.showFileList = false;
            }
            this.formCreateInject.prop.props.fileList = toArray(this.value).map(parseFile);
        },
        watch: {
            value: function value(n) {
                if (this.$refs.upload.uploadFiles.every(function (file) {
                    return !file.status || file.status === 'success';
                })) {
                    this.$refs.upload.uploadFiles = toArray(n).map(parseFile);
                    this.uploadList = this.$refs.upload.uploadFiles;
                }
            },
            limit: function limit(n, o) {
                if (o === 1 || n === 1) {
                    this.update();
                }
            }
        },
        methods: {
            key: function key(unique) {
                return unique;
            },
            isDisabled: function isDisabled() {
                return this.formCreateInject.prop.props.disabled === true;
            },
            onRemove: function onRemove(file) {
                if (this.isDisabled()) {
                    return;
                }
                this.$refs.upload.handleRemove(file);
            },
            handleClick: function handleClick(file) {
                this.onHandle(file);
            },
            makeItem: function makeItem(file, index) {
                var h = this.$createElement;
                return this.uploadType === 'image' ? h("img", {
                    "attrs": {
                        "src": file.url
                    },
                    "key": this.key('img' + index)
                }) : h("i", {
                    "class": "el-icon-tickets",
                    "key": this.key('i' + index)
                });
            },
            makeRemoveIcon: function makeRemoveIcon(file, index) {
                var _this = this;
                var h = this.$createElement;
                return h("i", {
                    "class": "el-icon-delete",
                    "on": {
                        "click": function click() {
                            return _this.onRemove(file);
                        }
                    },
                    "key": this.key('ri' + index)
                });
            },
            makeHandleIcon: function makeHandleIcon(file, index) {
                var _this2 = this;
                var h = this.$createElement;
                return h("i", {
                    "class": this.handleIcon === true || this.handleIcon === undefined ? 'el-icon-view' : this.handleIcon,
                    "on": {
                        "click": function click() {
                            return _this2.handleClick(file);
                        }
                    },
                    "key": this.key('hi' + index)
                });
            },
            makeProgress: function makeProgress(file, index) {
                var h = this.$createElement;
                return h("ElProgress", helper([{}, {
                    "props": {
                        percentage: file.percentage,
                        type: 'circle',
                        width: 52
                    }
                }, {
                    "style": "margin-top:2px;",
                    "key": this.key('pg' + index)
                }]));
            },
            makeIcons: function makeIcons(file, index) {
                var h = this.$createElement;
                var icons = [];
                if (this.allowRemove || this.handleIcon !== false) {
                    if (this.uploadType !== 'file' && this.handleIcon !== false || this.uploadType === 'file' && this.handleIcon) {
                        icons.push(this.makeHandleIcon(file, index));
                    }
                    if (this.allowRemove) {
                        icons.push(this.makeRemoveIcon(file, index));
                    }
                    return h("div", {
                        "class": 'fc-upload-cover'
                    }, [icons]);
                }
            },
            makeFiles: function makeFiles() {
                var _this3 = this;
                var h = this.$createElement;
                return this.uploadList.map(function (file, index) {
                    return _this3.$scopedSlots.fileList ? _this3.$scopedSlots.fileList({
                        file: file,
                        index: index,
                        vm: _this3
                    }) : h("div", {
                        "key": _this3.key(index),
                        "class": 'fc-files'
                    }, [file.percentage !== undefined && file.status !== 'success' ? _this3.makeProgress(file, index) : [_this3.makeItem(file, index), _this3.makeIcons(file, index)]]);
                });
            },
            makeUpload: function makeUpload() {
                var h = this.$createElement;
                var isShow = !this.limit || this.limit > this.uploadList.length;
                return h("ElUpload", helper([{}, this.formCreateInject.prop, {
                    "ref": "upload",
                    "style": {
                        display: 'inline-block'
                    },
                    "key": this.key('upload')
                }]), [isShow ? h("template", {
                    "slot": "default"
                }, [this.$slots["default"] || h("div", {
                    "class": 'fc-upload-btn'
                }, [h("i", {
                    "class": "el-icon-upload2"
                })])]) : null, getSlot(this.$slots, ['default'])]);
            },
            update: function update() {
                var files = this.$refs.upload.uploadFiles.map(function (file) {
                    return file.url;
                }).filter(function (url) {
                    return url !== undefined;
                });
                if (this.cacheFiles.length !== files.length) {
                    this.cacheFiles = _toConsumableArray(files);
                    this.$emit('input', this.limit === 1 ? files[0] || '' : files);
                }
            },
            handleCancel: function handleCancel() {
                this.previewVisible = false;
            }
        },
        render: function render() {
            var h = arguments[0];
            if (this.$refs.upload) {
                if (this.formCreateInject.prop.props.showFileList === undefined) {
                    this.formCreateInject.prop.props.showFileList = this.$refs.upload.showFileList;
                }
                this.formCreateInject.prop.props.fileList = this.$refs.upload.fileList;
            }
            return h("div", {
                "class": '_fc-upload'
            }, [[this.formCreateInject.prop.props.showFileList ? [] : this.makeFiles(), this.makeUpload()], h("el-dialog", {
                "attrs": {
                    "appendToBody": true,
                    "modal": this.previewMask,
                    "title": this.modalTitle,
                    "visible": this.previewVisible
                },
                "on": {
                    "close": this.handleCancel
                }
            }, [h("img", {
                "attrs": {
                    "alt": "example",
                    "src": this.previewImage
                },
                "style": "width: 100%"
            })])]);
        },
        mounted: function mounted() {
            var _this4 = this;
            this.uploadList = this.$refs.upload.uploadFiles;
            this.$watch(function () {
                return _this4.$refs.upload.uploadFiles;
            }, function () {
                _this4.update();
            }, {
                deep: true
            });
        }
    };

    function $set(target, field, value) {
        Vue.set(target, field, value);
    }
    function $del(target, field) {
        Vue["delete"](target, field);
    }

    function deepExtend(origin) {
        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var mode = arguments.length > 2 ? arguments[2] : undefined;
        var isArr = false;
        for (var key in target) {
            if (Object.prototype.hasOwnProperty.call(target, key)) {
                var clone = target[key];
                if ((isArr = Array.isArray(clone)) || is.Object(clone)) {
                    var nst = origin[key] === undefined;
                    if (isArr) {
                        isArr = false;
                        nst && $set(origin, key, []);
                    } else if (clone._clone && mode !== undefined) {
                        if (mode) {
                            clone = clone.getRule();
                            nst && $set(origin, key, {});
                        } else {
                            $set(origin, key, clone._clone());
                            continue;
                        }
                    } else {
                        nst && $set(origin, key, {});
                    }
                    origin[key] = deepExtend(origin[key], clone, mode);
                } else {
                    $set(origin, key, clone);
                    if (!is.Undef(clone)) {
                        if (!is.Undef(clone.__json)) {
                            origin[key].__json = clone.__json;
                        }
                        if (!is.Undef(clone.__origin)) {
                            origin[key].__origin = clone.__origin;
                        }
                    }
                }
            }
        }
        return mode !== undefined && Array.isArray(origin) ? origin.filter(function (v) {
            return !v || !v.__ctrl;
        }) : origin;
    }
    function deepCopy(value) {
        return deepExtend({}, {
            value: value
        }).value;
    }

    var _extends$1 = Object.assign || function (a) {
        for (var b, c = 1; c < arguments.length; c++) {
            for (var d in b = arguments[c], b) {
                Object.prototype.hasOwnProperty.call(b, d) && $set(a, d, b[d]);
            }
        }
        return a;
    };
    function extend() {
        return _extends$1.apply(this, arguments);
    }

    var NAME$6 = 'fcGroup';
    var Group = {
        name: NAME$6,
        props: {
            field: String,
            rule: [Array, Object],
            rules: Array,
            expand: Number,
            options: Object,
            formCreateInject: {
                type: Object,
                required: true
            },
            button: {
                type: Boolean,
                "default": true
            },
            max: {
                type: Number,
                "default": 0
            },
            min: {
                type: Number,
                "default": 0
            },
            value: {
                type: Array,
                "default": function _default() {
                    return [];
                }
            },
            defaultValue: Object,
            disabled: {
                type: Boolean,
                "default": false
            },
            syncDisabled: {
                type: Boolean,
                "default": true
            },
            fontSize: {
                type: Number,
                "default": 28
            },
            onBeforeRemove: {
                type: Function,
                "default": function _default() {}
            },
            onBeforeAdd: {
                type: Function,
                "default": function _default() {}
            }
        },
        data: function data() {
            return {
                len: 0,
                cacheRule: {},
                cacheValue: {},
                type: undefined
            };
        },
        computed: {
            formRule: function formRule() {
                if (this.rules) {
                    return this.rules;
                }
                if (this.rule) {
                    return Array.isArray(this.rule) ? this.rule : [this.rule];
                }
                return [];
            }
        },
        watch: {
            formRule: {
                handler: function handler(n, o) {
                    var _this = this;
                    Object.keys(this.cacheRule).forEach(function (v) {
                        var item = _this.cacheRule[v];
                        if (item.$f) {
                            var val = item.$f.formData();
                            if (n === o) {
                                item.$f.deferSyncValue(function () {
                                    deepExtend(item.rule, n);
                                    item.$f.setValue(val);
                                }, true);
                            } else {
                                var _val = item.$f.formData();
                                item.$f.once('reloading', function () {
                                    item.$f.setValue(_val);
                                });
                                item.rule = deepCopy(n);
                            }
                        }
                    });
                },
                deep: true
            },
            disabled: function disabled(n) {
                if (this.syncDisabled) {
                    var lst = this.cacheRule;
                    Object.keys(lst).forEach(function (k) {
                        lst[k].$f.disabled(n);
                    });
                }
            },
            expand: function expand(n) {
                var d = n - this.value.length;
                if (d > 0) {
                    this.expandRule(d);
                }
            },
            value: function value(n) {
                var _this2 = this;
                n = n || [];
                var keys = Object.keys(this.cacheRule),
                    total = keys.length,
                    len = total - n.length;
                if (len < 0) {
                    for (var i = len; i < 0; i++) {
                        this.addRule(n.length + i);
                    }
                    for (var _i = 0; _i < total; _i++) {
                        this.setValue(keys[_i], n[_i]);
                    }
                } else {
                    if (len > 0) {
                        for (var _i2 = 0; _i2 < len; _i2++) {
                            this.removeRule(keys[total - _i2 - 1]);
                        }
                    }
                    n.forEach(function (val, i) {
                        _this2.setValue(keys[i], n[i]);
                    });
                }
            }
        },
        methods: {
            _value: function _value(v) {
                return v && hasProperty(v, this.field) ? v[this.field] : v;
            },
            cache: function cache(k, val) {
                this.cacheValue[k] = JSON.stringify(val);
            },
            input: function input(value) {
                this.$emit('input', value);
                this.$emit('change', value);
            },
            formData: function formData(key, _formData) {
                var _this3 = this;
                var cacheRule = this.cacheRule;
                var keys = Object.keys(cacheRule);
                if (keys.filter(function (k) {
                    return cacheRule[k].$f;
                }).length !== keys.length) {
                    return;
                }
                var value = keys.map(function (k) {
                    var data = key === k ? _formData : _objectSpread2({}, _this3.cacheRule[k].$f.form);
                    var value = _this3.field ? data[_this3.field] || null : data;
                    _this3.cache(k, value);
                    return value;
                });
                this.input(value);
            },
            setValue: function setValue(key, value) {
                var field = this.field,
                    $f = this.cacheRule[key].$f;
                if (field) {
                    value = _defineProperty({}, field, this._value(value));
                }
                if (this.cacheValue[key] === JSON.stringify(field ? value[field] : value)) {
                    return;
                }
                this.cache(key, value);
                $f.coverValue(value || {});
            },
            addRule: function addRule(i, emit) {
                var _this4 = this;
                var rule = this.formCreateInject.form.copyRules(this.formRule);
                var options = this.options ? _objectSpread2({}, this.options) : {
                    submitBtn: false,
                    resetBtn: false
                };
                if (this.defaultValue) {
                    if (!options.formData) options.formData = {};
                    var defVal = deepCopy(this.defaultValue);
                    extend(options.formData, this.field ? _defineProperty({}, this.field, defVal) : defVal);
                }
                this.$set(this.cacheRule, ++this.len, {
                    rule: rule,
                    options: options
                });
                if (emit) {
                    this.$nextTick(function () {
                        return _this4.$emit('add', rule, Object.keys(_this4.cacheRule).length - 1);
                    });
                }
            },
            add$f: function add$f(i, key, $f) {
                var _this5 = this;
                this.cacheRule[key].$f = $f;
                this.formData(key, $f.formData());
                this.$nextTick(function () {
                    if (_this5.syncDisabled) {
                        $f.disabled(_this5.disabled);
                    }
                    _this5.$emit('itemMounted', $f, Object.keys(_this5.cacheRule).indexOf(key));
                });
            },
            removeRule: function removeRule(key, emit) {
                var _this6 = this;
                var index = Object.keys(this.cacheRule).indexOf(key);
                this.$delete(this.cacheRule, key);
                this.$delete(this.cacheValue, key);
                if (emit) {
                    this.$nextTick(function () {
                        return _this6.$emit('remove', index);
                    });
                }
            },
            add: function add(i) {
                if (this.disabled || false === this.onBeforeAdd(this.value)) {
                    return;
                }
                this.addRule(i, true);
            },
            del: function del(index, key) {
                if (this.disabled || false === this.onBeforeRemove(this.value, index)) {
                    return;
                }
                this.removeRule(key, true);
                this.value.splice(index, 1);
                this.input(this.value);
            },
            addIcon: function addIcon(key) {
                var h = this.$createElement;
                return h("i", {
                    "key": "a".concat(key),
                    "class": "el-icon-circle-plus-outline",
                    "style": "font-size:".concat(this.fontSize, "px;cursor:").concat(this.disabled ? 'not-allowed;color:#c9cdd4' : 'pointer', ";"),
                    "on": {
                        "click": this.add
                    }
                });
            },
            delIcon: function delIcon(index, key) {
                var _this7 = this;
                var h = this.$createElement;
                return h("i", {
                    "key": "d".concat(key),
                    "class": "el-icon-remove-outline",
                    "style": "font-size:".concat(this.fontSize, "px;cursor:").concat(this.disabled ? 'not-allowed;color:#c9cdd4' : 'pointer;color:#606266', ";"),
                    "on": {
                        "click": function click() {
                            return _this7.del(index, key);
                        }
                    }
                });
            },
            makeIcon: function makeIcon(total, index, key) {
                var _this8 = this;
                if (this.$scopedSlots.button) {
                    return this.$scopedSlots.button({
                        total: total,
                        index: index,
                        vm: this,
                        key: key,
                        del: function del() {
                            return _this8.del(index, key);
                        },
                        add: this.add
                    });
                }
                if (index === 0) {
                    return [this.max !== 0 && total >= this.max ? null : this.addIcon(key), this.min === 0 || total > this.min ? this.delIcon(index, key) : null];
                }
                if (index >= this.min) {
                    return this.delIcon(index, key);
                }
            },
            emitEvent: function emitEvent(name, args, index, key) {
                this.$emit.apply(this, [name].concat(_toConsumableArray(args), [this.cacheRule[key].$f, index]));
            },
            expandRule: function expandRule(n) {
                for (var i = 0; i < n; i++) {
                    this.value.push(this.field ? null : {});
                }
            }
        },
        created: function created() {
            this.type = this.formCreateInject.form.$form();
            var d = (this.expand || 0) - this.value.length;
            if (d > 0) {
                this.expandRule(d);
            }
            for (var i = 0; i < this.value.length; i++) {
                this.addRule(i);
            }
        },
        render: function render() {
            var _this9 = this;
            var h = arguments[0];
            var keys = Object.keys(this.cacheRule);
            var button = this.button;
            var Type = this.type;
            return keys.length === 0 ? this.$scopedSlots["default"] ? this.$scopedSlots["default"]({
                vm: this,
                add: this.add
            }) : h("i", {
                "key": 'a_def',
                "class": "el-icon-circle-plus-outline",
                "style": "font-size:".concat(this.fontSize, "px;vertical-align:middle;color:").concat(this.disabled ? '#c9cdd4;cursor: not-allowed' : '#606266;cursor:pointer', ";"),
                "on": {
                    "click": this.add
                }
            }) : h("div", {
                "key": 'con'
            }, [keys.map(function (key, index) {
                var _this9$cacheRule$key = _this9.cacheRule[key],
                    rule = _this9$cacheRule$key.rule,
                    options = _this9$cacheRule$key.options;
                return h("ElRow", {
                    "attrs": {
                        "align": "middle",
                        "type": "flex"
                    },
                    "key": key,
                    "style": "border-bottom:1px dashed #DCDFE6;margin-bottom:10px;"
                }, [h("ElCol", {
                    "attrs": {
                        "span": button ? 20 : 24
                    }
                }, [h("ElFormItem", [h(Type, helper([{
                    "key": key,
                    "attrs": {
                        "inFor": true
                    }
                }, {
                    "on": {
                        'update:value': function updateValue(formData) {
                            return _this9.formData(key, formData);
                        },
                        'emit-event': function emitEvent(name) {
                            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                                args[_key - 1] = arguments[_key];
                            }
                            return _this9.emitEvent(name, args, index, key);
                        },
                        input: function input($f) {
                            return _this9.add$f(index, key, $f);
                        }
                    }
                }, {
                    "attrs": {
                        "value": _this9.field ? _defineProperty({}, _this9.field, _this9._value(_this9.value[index])) : _this9.value[index],
                        "rule": rule,
                        "option": options,
                        "extendOption": true
                    }
                }]))])]), button ? h("ElCol", {
                    "attrs": {
                        "span": 2,
                        "pull": 1,
                        "push": 1
                    }
                }, [_this9.makeIcon(keys.length, index, key)]) : null]);
            })]);
        }
    };

    var NAME$7 = 'fcSubForm';
    var Sub = {
        name: NAME$7,
        props: {
            rule: Array,
            options: Object,
            formCreateInject: {
                type: Object,
                required: true
            },
            value: {
                type: Object,
                "default": function _default() {
                    return {};
                }
            },
            disabled: {
                type: Boolean,
                "default": false
            },
            syncDisabled: {
                type: Boolean,
                "default": true
            }
        },
        data: function data() {
            return {
                cacheRule: {},
                cacheValue: {},
                type: undefined
            };
        },
        watch: {
            disabled: function disabled(n) {
                this.syncDisabled && this.cacheRule.$f.disabled(n);
            },
            value: function value(n) {
                this.setValue(n);
            }
        },
        methods: {
            formData: function formData(value) {
                this.cacheValue = JSON.stringify(value);
                this.$emit('input', value);
                this.$emit('change', value);
            },
            setValue: function setValue(value) {
                var str = JSON.stringify(value);
                if (this.cacheValue === str) {
                    return;
                }
                this.cacheValue = str;
                this.cacheRule.$f.coverValue(value || {});
            },
            addRule: function addRule() {
                var options = this.options ? this.options : {
                    submitBtn: false,
                    resetBtn: false
                };
                options.formData = _objectSpread2({}, this.value || {});
                this.cacheRule = {
                    rule: this.rule,
                    options: options
                };
            },
            add$f: function add$f($f) {
                var _this = this;
                this.cacheRule.$f = $f;
                this.$nextTick(function () {
                    _this.syncDisabled && $f.disabled(_this.disabled);
                    _this.$emit('itemMounted', $f);
                });
            },
            emitEvent: function emitEvent(name) {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }
                this.$emit.apply(this, [name].concat(args));
            }
        },
        created: function created() {
            this.addRule();
            this.type = this.formCreateInject.form.$form();
        },
        render: function render() {
            var h = arguments[0];
            var _this$cacheRule = this.cacheRule,
                rule = _this$cacheRule.rule,
                options = _this$cacheRule.options;
            var Type = this.type;
            return h(Type, helper([{}, {
                "on": {
                    'update:value': this.formData,
                    'emit-event': this.emitEvent,
                    input: this.add$f
                }
            }, {
                "attrs": {
                    "rule": rule,
                    "option": options,
                    "extendOption": true
                }
            }]));
        }
    };

    var components = [Checkbox, Frame, Radio, Select, Tree, Upload, Group, Sub];

    var NAME$8 = 'FormCreate';
    var getRuleInject = function getRuleInject(vm, parent) {
        if (!vm || vm === parent) {
            return;
        }
        if (vm.formCreateInject) {
            return vm.formCreateInject;
        }
        if (vm.$parent) {
            return getRuleInject(vm.$parent, parent);
        }
    };
    function $FormCreate(FormCreate) {
        return {
            name: NAME$8,
            componentName: NAME$8,
            model: {
                prop: 'api'
            },
            provide: function provide() {
                return {
                    $pfc: this
                };
            },
            inject: {
                $pfc: {
                    "default": null
                }
            },
            props: {
                rule: {
                    type: Array,
                    required: true
                },
                option: {
                    type: Object,
                    "default": function _default() {
                        return {};
                    }
                },
                extendOption: Boolean,
                value: Object,
                api: Object,
                name: String,
                subForm: {
                    type: Boolean,
                    "default": true
                },
                inFor: Boolean
            },
            data: function data() {
                return {
                    formData: undefined,
                    destroyed: false,
                    validate: {},
                    $f: undefined,
                    isShow: true,
                    unique: 1,
                    renderRule: _toConsumableArray(this.rule || []),
                    ctxInject: {},
                    updateValue: JSON.stringify(this.value || {}),
                    isMore: !!this.inFor
                };
            },
            render: function render() {
                return this.formCreate.render();
            },
            methods: {
                _refresh: function _refresh() {
                    ++this.unique;
                },
                _renderRule: function _renderRule() {
                    this.renderRule = _toConsumableArray(this.rule || []);
                },
                _updateValue: function _updateValue(value) {
                    if (this.destroyed) return;
                    this.updateValue = JSON.stringify(value);
                    this.$emit('update:value', value);
                }
            },
            watch: {
                value: {
                    handler: function handler(n) {
                        if (JSON.stringify(n || {}) === this.updateValue) return;
                        this.$f.setValue(n || {});
                    },
                    deep: true
                },
                option: {
                    handler: function handler(n) {
                        this.formCreate.initOptions(n);
                        this.$f.refresh();
                    },
                    deep: true
                },
                rule: function rule(n) {
                    var _this = this;
                    if (n.length === this.renderRule.length && n.every(function (v) {
                        return _this.renderRule.indexOf(v) > -1;
                    })) return;
                    this.formCreate.$handle.reloadRule(n);
                    this._renderRule();
                }
            },
            beforeCreate: function beforeCreate() {
                var _this2 = this;
                var _this$$options$propsD = this.$options.propsData,
                    rule = _this$$options$propsD.rule,
                    option = _this$$options$propsD.option;
                this.formCreate = new FormCreate(this, rule, option);
                Object.keys(this.formCreate.prop).forEach(function (k) {
                    extend(_this2.$options[k], _this2.formCreate.prop[k]);
                });
                this.$emit('beforeCreate', this.formCreate.api());
            },
            created: function created() {
                var _this3 = this;
                var vm = this,
                    fapi = this.formCreate.api();
                var addSubForm = function addSubForm() {
                    if (vm.$pfc) {
                        var inject = getRuleInject(vm, vm.$pfc);
                        if (inject) {
                            var sub;
                            if (vm.isMore) {
                                sub = toArray(inject.getSubForm());
                                sub.push(fapi);
                            } else {
                                sub = fapi;
                            }
                            inject.subForm(sub);
                        }
                    }
                };
                var rmSubForm = function rmSubForm() {
                    var inject = getRuleInject(vm, vm.$pfc);
                    if (inject) {
                        if (vm.isMore) {
                            var sub = toArray(inject.getSubForm());
                            var idx = sub.indexOf(fapi);
                            if (idx > -1) {
                                sub.splice(idx, 1);
                            }
                        } else {
                            inject.subForm();
                        }
                    }
                };
                vm.$on('hook:beforeDestroy', function () {
                    rmSubForm();
                });
                this.$watch(function () {
                    return _this3.subForm;
                }, function (n) {
                    n ? addSubForm() : rmSubForm();
                }, {
                    immediate: true
                });
            }
        };
    }

    var normalMerge$1 = ['attrs', 'props', 'domProps', 'scopedSlots'];
    var toArrayMerge$1 = ['class', 'style', 'directives'];
    var functionalMerge$1 = ['on', 'nativeOn'];
    var mergeProps = function mergeProps(objects) {
        var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var _normalMerge = [].concat(normalMerge$1, _toConsumableArray(opt['normal'] || []));
        var _toArrayMerge = [].concat(toArrayMerge$1, _toConsumableArray(opt['array'] || []));
        var _functionalMerge = [].concat(functionalMerge$1, _toConsumableArray(opt['functional'] || []));
        var propsMerge = opt['props'] || [];
        return objects.reduce(function (a, b) {
            for (var key in b) {
                if (a[key]) {
                    if (propsMerge.indexOf(key) > -1) {
                        a[key] = mergeProps([b[key]], a[key]);
                    } else if (_normalMerge.indexOf(key) > -1) {
                        a[key] = _objectSpread2(_objectSpread2({}, a[key]), b[key]);
                    } else if (_toArrayMerge.indexOf(key) > -1) {
                        var arrA = a[key] instanceof Array ? a[key] : [a[key]];
                        var arrB = b[key] instanceof Array ? b[key] : [b[key]];
                        a[key] = [].concat(_toConsumableArray(arrA), _toConsumableArray(arrB));
                    } else if (_functionalMerge.indexOf(key) > -1) {
                        for (var event in b[key]) {
                            if (a[key][event]) {
                                var _arrA = a[key][event] instanceof Array ? a[key][event] : [a[key][event]];
                                var _arrB = b[key][event] instanceof Array ? b[key][event] : [b[key][event]];
                                a[key][event] = [].concat(_toConsumableArray(_arrA), _toConsumableArray(_arrB));
                            } else {
                                a[key][event] = b[key][event];
                            }
                        }
                    } else if (key === 'hook') {
                        for (var hook in b[key]) {
                            if (a[key][hook]) {
                                a[key][hook] = mergeFn$1(a[key][hook], b[key][hook]);
                            } else {
                                a[key][hook] = b[key][hook];
                            }
                        }
                    } else {
                        a[key] = b[key];
                    }
                } else {
                    if (_normalMerge.indexOf(key) > -1 || _functionalMerge.indexOf(key) > -1 || propsMerge.indexOf(key) > -1) {
                        a[key] = _objectSpread2({}, b[key]);
                    } else if (_toArrayMerge.indexOf(key) > -1) {
                        a[key] = b[key] instanceof Array ? _toConsumableArray(b[key]) : _typeof(b[key]) === 'object' ? _objectSpread2({}, b[key]) : b[key];
                    } else a[key] = b[key];
                }
            }
            return a;
        }, initial);
    };
    var mergeFn$1 = function mergeFn(fn1, fn2) {
        return function () {
            fn1 && fn1.apply(this, arguments);
            fn2 && fn2.apply(this, arguments);
        };
    };

    var keyAttrs = ['type', 'slot', 'emitPrefix', 'value', 'name', 'native', 'hidden', 'display', 'inject', 'options', 'emit', 'nativeEmit', 'link', 'prefix', 'suffix', 'update', 'sync', 'optionsTo', 'key', 'preview', 'component', 'cache'];
    var arrayAttrs = ['validate', 'children', 'control'];
    var normalAttrs = ['effect', 'deep'];
    function attrs() {
        return [].concat(keyAttrs, _toConsumableArray(normalMerge$1), _toConsumableArray(toArrayMerge$1), _toConsumableArray(functionalMerge$1), arrayAttrs, normalAttrs);
    }

    function format(type, msg, rule) {
        return "[form-create ".concat(type, "]: ").concat(msg) + (rule ? '\n\nrule: ' + JSON.stringify(rule.getRule ? rule.getRule() : rule) : '');
    }
    function tip(msg, rule) {
        console.warn(format('tip', msg, rule));
    }
    function err(msg, rule) {
        console.error(format('err', msg, rule));
    }
    function logError(e) {
        err(e.toString());
        console.error(e);
    }

    var PREFIX = '[[FORM-CREATE-PREFIX-';
    var SUFFIX = '-FORM-CREATE-SUFFIX]]';
    var $T = '$FN:';
    var $TX = '$FNX:';
    var FUNCTION = 'function';
    function toJson(obj, space) {
        return JSON.stringify(deepExtend([], obj, true), function (key, val) {
            if (val && val._isVue === true) return undefined;
            if (_typeof(val) !== FUNCTION) {
                return val;
            }
            if (val.__json) {
                return val.__json;
            }
            if (val.__origin) val = val.__origin;
            if (val.__emit) return undefined;
            return PREFIX + val + SUFFIX;
        }, space);
    }
    function makeFn(fn) {
        return eval('(' + FUNCTION + '(){return ' + fn + ' })()');
    }
    function parseFn(fn, mode) {
        if (fn && is.String(fn) && fn.length > 4) {
            var v = fn.trim();
            var flag = false;
            try {
                if (v.indexOf(SUFFIX) > 0 && v.indexOf(PREFIX) === 0) {
                    v = v.replace(SUFFIX, '').replace(PREFIX, '');
                    flag = true;
                } else if (v.indexOf($T) === 0) {
                    v = v.replace($T, '');
                    flag = true;
                } else if (v.indexOf($TX) === 0) {
                    v = makeFn('function($inject){' + v.replace($TX, '') + '}');
                    v.__json = fn;
                    v.__inject = true;
                    return v;
                } else if (!mode && v.indexOf(FUNCTION) === 0 && v !== FUNCTION) {
                    flag = true;
                }
                if (!flag) return fn;
                var val = makeFn(v.indexOf(FUNCTION) === -1 && v.indexOf('(') !== 0 ? FUNCTION + ' ' + v : v);
                val.__json = fn;
                return val;
            } catch (e) {
                err("\u89E3\u6790\u5931\u8D25:".concat(v, "\n\nerr: ").concat(e));
                return undefined;
            }
        }
        return fn;
    }
    function parseJson(json, mode) {
        return JSON.parse(json, function (k, v) {
            if (is.Undef(v) || !v.indexOf) return v;
            return parseFn(v, mode);
        });
    }

    function enumerable(value, writable) {
        return {
            value: value,
            enumerable: false,
            configurable: false,
            writable: !!writable
        };
    }
    function copyRule(rule) {
        return copyRules([rule])[0];
    }
    function copyRules(rules, mode) {
        return deepExtend([], _toConsumableArray(rules), mode || false);
    }
    function mergeRule(rule, merge) {
        mergeProps(Array.isArray(merge) ? merge : [merge], rule, {
            array: arrayAttrs,
            normal: normalAttrs
        });
        return rule;
    }
    function getRule(rule) {
        return is.Function(rule.getRule) ? rule.getRule() : rule;
    }
    function mergeGlobal(target, merge) {
        if (!target) return merge;
        Object.keys(merge || {}).forEach(function (k) {
            if (merge[k]) {
                target[k] = mergeRule(target[k] || {}, merge[k]);
            }
        });
        return target;
    }
    function funcProxy(that, proxy) {
        Object.defineProperties(that, Object.keys(proxy).reduce(function (initial, k) {
            initial[k] = {
                get: function get() {
                    return proxy[k]();
                }
            };
            return initial;
        }, {}));
    }
    function byCtx(rule) {
        return rule.__fc__ || (rule.__origin__ ? rule.__origin__.__fc__ : null);
    }
    function invoke(fn, def) {
        try {
            def = fn();
        } catch (e) {
            logError(e);
        }
        return def;
    }

    function baseRule() {
        return {
            props: {},
            on: {},
            options: [],
            children: [],
            hidden: false,
            display: true,
            value: undefined
        };
    }
    function creatorFactory(name, init) {
        return function (title, field, value) {
            var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var maker = new Creator(name, title, field, value, props);
            if (init) {
                if (is.Function(init)) init(maker);else maker.props(init);
            }
            return maker;
        };
    }
    function Creator(type, title, field, value, props) {
        this._data = extend(baseRule(), {
            type: type,
            title: title,
            field: field,
            value: value,
            props: props || {}
        });
        this.event = this.on;
    }
    extend(Creator.prototype, {
        getRule: function getRule() {
            return this._data;
        },
        setProp: function setProp(key, value) {
            $set(this._data, key, value);
            return this;
        },
        _clone: function _clone() {
            var clone = new this.constructor();
            clone._data = copyRule(this._data);
            return clone;
        }
    });
    function appendProto(attrs) {
        attrs.forEach(function (name) {
            Creator.prototype[name] = function (key) {
                mergeRule(this._data, _defineProperty({}, name, arguments.length < 2 ? key : _defineProperty({}, key, arguments[1])));
                return this;
            };
        });
    }
    appendProto(attrs());

    var commonMaker = creatorFactory('');
    function create(type, field, title) {
        var make = commonMaker('', field);
        make._data.type = type;
        make._data.title = title;
        return make;
    }
    function createTmp(template, vm, field, title) {
        var make = commonMaker('', field);
        make._data.type = 'template';
        make._data.template = template;
        make._data.title = title;
        make._data.vm = vm;
        return make;
    }
    function makerFactory() {
        return {
            create: create,
            createTmp: createTmp,
            template: createTmp,
            factory: creatorFactory
        };
    }

    function copy(value) {
        return deepCopy(value);
    }
    function Api(h) {
        function tidyFields(fields) {
            if (is.Undef(fields)) fields = h.fields();else if (!Array.isArray(fields)) fields = [fields];
            return fields;
        }
        function props(fields, key, val) {
            tidyFields(fields).forEach(function (field) {
                h.getCtxs(field).forEach(function (ctx) {
                    $set(ctx.rule, key, val);
                    h.$render.clearCache(ctx);
                });
            });
        }
        function allSubForm() {
            var subs = h.subForm;
            return Object.keys(subs).reduce(function (initial, k) {
                var sub = subs[k];
                if (!sub) return initial;
                if (Array.isArray(sub)) initial.push.apply(initial, _toConsumableArray(sub));else initial.push(sub);
                return initial;
            }, []);
        }
        var api = {
            get config() {
                return h.options;
            },
            get options() {
                return h.options;
            },
            get form() {
                return h.form;
            },
            get rule() {
                return h.rules;
            },
            get parent() {
                return h.vm.$pfc && h.vm.$pfc.$f;
            },
            get children() {
                return allSubForm();
            },
            formData: function formData(fields) {
                return tidyFields(fields).reduce(function (initial, id) {
                    var ctx = h.getFieldCtx(id);
                    if (!ctx) return initial;
                    initial[ctx.field] = copy(ctx.rule.value);
                    return initial;
                }, h.options.appendValue ? copy(h.appendData) : {});
            },
            getValue: function getValue(field) {
                var ctx = h.getFieldCtx(field);
                if (!ctx) return;
                return copy(ctx.rule.value);
            },
            coverValue: function coverValue(formData) {
                h.deferSyncValue(function () {
                    api.fields().forEach(function (key) {
                        var ctxs = h.fieldCtx[key];
                        if (!ctxs) return h.appendData[key] = formData[key];
                        var flag = hasProperty(formData, key);
                        ctxs.forEach(function (ctx) {
                            ctx.rule.value = flag ? formData[key] : undefined;
                        });
                    });
                });
            },
            setValue: function setValue(field) {
                var formData = field;
                if (arguments.length >= 2) formData = _defineProperty({}, field, arguments[1]);
                h.deferSyncValue(function () {
                    Object.keys(formData).forEach(function (key) {
                        var ctxs = h.fieldCtx[key];
                        if (!ctxs) return h.appendData[key] = formData[key];
                        ctxs.forEach(function (ctx) {
                            ctx.rule.value = formData[key];
                        });
                    });
                });
            },
            removeField: function removeField(field) {
                var ctx = h.getCtx(field);
                h.deferSyncValue(function () {
                    h.getCtxs(field).forEach(function (ctx) {
                        ctx.rm();
                    });
                }, true);
                return ctx ? ctx.origin : undefined;
            },
            removeRule: function removeRule(rule) {
                var ctx = rule && byCtx(rule);
                if (!ctx) return;
                ctx.rm();
                return ctx.origin;
            },
            destroy: function destroy() {
                h.vm.$el.parentNode && h.vm.$el.parentNode.removeChild(h.vm.$el);
                h.vm.$destroy();
            },
            fields: function fields() {
                return h.fields();
            },
            append: function append(rule, after, child) {
                var index = h.sort.length - 1,
                    rules;
                var ctx = h.getCtx(after);
                if (ctx) {
                    if (child) {
                        rules = ctx.rule.children;
                        index = ctx.rule.children.length - 1;
                    } else {
                        index = ctx.root.indexOf(ctx.origin);
                        rules = ctx.root;
                    }
                } else rules = h.rules;
                rules.splice(index + 1, 0, rule);
            },
            prepend: function prepend(rule, after, child) {
                var index = 0,
                    rules;
                var ctx = h.getCtx(after);
                if (ctx) {
                    if (child) {
                        rules = ctx.rule.children;
                    } else {
                        index = ctx.root.indexOf(ctx.origin);
                        rules = ctx.root;
                    }
                } else rules = h.rules;
                rules.splice(index, 0, rule);
            },
            hidden: function hidden(state, fields) {
                props(fields, 'hidden', !!state);
                h.refresh();
            },
            hiddenStatus: function hiddenStatus(id) {
                var ctx = h.getCtx(id);
                if (!ctx) return;
                return !!ctx.rule.hidden;
            },
            display: function display(state, fields) {
                props(fields, 'display', !!state);
                h.refresh();
            },
            displayStatus: function displayStatus(id) {
                var ctx = h.getCtx(id);
                if (!ctx) return;
                return !!ctx.rule.display;
            },
            disabled: function disabled(_disabled, fields) {
                tidyFields(fields).forEach(function (field) {
                    h.getCtxs(field).forEach(function (ctx) {
                        ctx.rule.props && $set(ctx.rule.props, 'disabled', !!_disabled);
                    });
                });
                h.refresh();
            },
            all: function all(origin) {
                return Object.keys(h.ctxs).map(function (k) {
                    var ctx = h.ctxs[k];
                    return origin ? ctx.origin : ctx.rule;
                });
            },
            model: function model(origin) {
                return h.fields().reduce(function (initial, key) {
                    var ctx = h.fieldCtx[key][0];
                    initial[key] = origin ? ctx.origin : ctx.rule;
                    return initial;
                }, {});
            },
            component: function component(origin) {
                return Object.keys(h.nameCtx).reduce(function (initial, key) {
                    var ctx = h.nameCtx[key].map(function (ctx) {
                        return origin ? ctx.origin : ctx.rule;
                    });
                    initial[key] = ctx.length === 1 ? ctx[0] : ctx;
                    return initial;
                }, {});
            },
            bind: function bind() {
                return api.form;
            },
            reload: function reload(rules) {
                h.reloadRule(rules);
            },
            updateOptions: function updateOptions(options) {
                h.fc.updateOptions(options);
                api.refresh();
            },
            onSubmit: function onSubmit(fn) {
                api.updateOptions({
                    onSubmit: fn
                });
            },
            sync: function sync(field) {
                if (Array.isArray(field)) {
                    field.forEach(function (v) {
                        return api.sync(v);
                    });
                    return;
                }
                var ctxs = is.Object(field) ? byCtx(field) : h.getCtxs(field);
                if (!ctxs) {
                    return;
                }
                ctxs = Array.isArray(ctxs) ? ctxs : [ctxs];
                ctxs.forEach(function (ctx) {
                    if (!ctx.deleted) {
                        var subForm = h.subForm[ctx.id];
                        if (subForm) {
                            if (Array.isArray(subForm)) {
                                subForm.forEach(function (form) {
                                    form.refresh();
                                });
                            } else if (subForm) {
                                subForm.refresh();
                            }
                        }
                        h.$render.clearCache(ctx);
                    }
                });
                h.refresh();
            },
            refresh: function refresh() {
                allSubForm().forEach(function (sub) {
                    sub.refresh();
                });
                h.$render.clearCacheAll();
                h.refresh();
            },
            refreshOptions: function refreshOptions() {
                h.$manager.updateOptions(h.options);
                api.refresh();
            },
            hideForm: function hideForm(hide) {
                $set(h.vm, 'isShow', !hide);
            },
            changeStatus: function changeStatus() {
                return h.changeStatus;
            },
            clearChangeStatus: function clearChangeStatus() {
                h.changeStatus = false;
            },
            updateRule: function updateRule(id, rule) {
                h.getCtxs(id).forEach(function (ctx) {
                    extend(ctx.rule, rule);
                });
            },
            updateRules: function updateRules(rules) {
                Object.keys(rules).forEach(function (id) {
                    api.updateRule(id, rules[id]);
                });
            },
            mergeRule: function mergeRule$1(id, rule) {
                h.getCtxs(id).forEach(function (ctx) {
                    mergeRule(ctx.rule, rule);
                });
            },
            mergeRules: function mergeRules(rules) {
                Object.keys(rules).forEach(function (id) {
                    api.mergeRule(id, rules[id]);
                });
            },
            getRule: function getRule(id, origin) {
                var ctx = h.getCtx(id);
                if (ctx) {
                    return origin ? ctx.origin : ctx.rule;
                }
            },
            setEffect: function setEffect(id, attr, value) {
                var ctx = h.getCtx(id);
                if (ctx && attr) {
                    if (attr[0] === '$') {
                        attr = attr.substr(1);
                    }
                    if (hasProperty(ctx.rule, '$' + attr)) {
                        $set(ctx.rule, '$' + attr, value);
                    }
                    if (!hasProperty(ctx.rule, 'effect')) {
                        ctx.rule.effect = {};
                    }
                    $set(ctx.rule.effect, attr, value);
                }
            },
            updateValidate: function updateValidate(id, validate, merge) {
                if (merge) {
                    api.mergeRule(id, {
                        validate: validate
                    });
                } else {
                    props(id, 'validate', validate);
                }
            },
            updateValidates: function updateValidates(validates, merge) {
                Object.keys(validates).forEach(function (id) {
                    api.updateValidate(id, validates[id], merge);
                });
            },
            refreshValidate: function refreshValidate() {
                h.vm.validate = {};
                api.refresh();
            },
            resetFields: function resetFields(fields) {
                tidyFields(fields).forEach(function (field) {
                    h.getCtxs(field).forEach(function (ctx) {
                        h.$render.clearCache(ctx);
                        ctx.rule.value = copy(ctx.defaultValue);
                        h.refreshControl(ctx);
                    });
                });
            },
            method: function method(id, name) {
                var el = api.el(id);
                if (!el || !el[name]) throw new Error(format('err', "".concat(name, "\u65B9\u6CD5\u4E0D\u5B58\u5728")));
                return function () {
                    return el[name].apply(el, arguments);
                };
            },
            exec: function exec(id, name) {
                for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    args[_key - 2] = arguments[_key];
                }
                return invoke(function () {
                    return api.method(id, name).apply(void 0, args);
                });
            },
            toJson: function toJson$1(space) {
                return toJson(api.rule, space);
            },
            trigger: function trigger(id, event) {
                var el = api.el(id);
                for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                    args[_key2 - 2] = arguments[_key2];
                }
                el && el.$emit.apply(el, [event].concat(args));
            },
            el: function el(id) {
                var ctx = h.getCtx(id);
                if (ctx) return ctx.el || h.vm.$refs[ctx.ref];
            },
            closeModal: function closeModal(id) {
                var el = api.el(id);
                el && el.$emit && el.$emit('close-modal');
            },
            getSubForm: function getSubForm(field) {
                var ctx = h.getCtx(field);
                return ctx ? h.subForm[ctx.id] : undefined;
            },
            nextTick: function nextTick(fn) {
                h.bus.$once('next-tick', fn);
                h.refresh();
            },
            nextRefresh: function nextRefresh(fn) {
                h.nextRefresh();
                fn && invoke(fn);
            },
            emit: function emit(name) {
                var _h$vm;
                for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                    args[_key3 - 1] = arguments[_key3];
                }
                (_h$vm = h.vm).$emit.apply(_h$vm, [name].concat(args));
            },
            deferSyncValue: function deferSyncValue(fn, sync) {
                h.deferSyncValue(fn, sync);
            },
            helper: {
                tidyFields: tidyFields,
                props: props
            }
        };
        ['on', 'once', 'off', 'set'].forEach(function (n) {
            api[n] = function () {
                var _h$vm2;
                (_h$vm2 = h.vm)["$".concat(n)].apply(_h$vm2, arguments);
            };
        });
        api.changeValue = api.changeField = api.setValue;
        return api;
    }

    function useCache(Render) {
        extend(Render.prototype, {
            initCache: function initCache() {
                this.clearCacheAll();
            },
            clearCache: function clearCache(ctx) {
                if (!this.cache[ctx.id]) {
                    ctx.parent && this.clearCache(ctx.parent);
                    return;
                }
                if (this.cache[ctx.id].use === true || this.cache[ctx.id].parent) {
                    this.$handle.refresh();
                }
                var parent = this.cache[ctx.id].parent;
                this.cache[ctx.id] = null;
                parent && this.clearCache(parent);
            },
            clearCacheAll: function clearCacheAll() {
                this.cache = {};
            },
            setCache: function setCache(ctx, vnode, parent) {
                this.cache[ctx.id] = {
                    vnode: vnode,
                    use: false,
                    parent: parent,
                    slot: ctx.rule.slot
                };
            },
            getCache: function getCache(ctx) {
                var cache = this.cache[ctx.id];
                cache.use = true;
                return cache.vnode;
            }
        });
    }

    function toCase(str) {
        var to = str.replace(/(-[a-z])/g, function (v) {
            return v.replace('-', '').toLocaleUpperCase();
        });
        return lower(to);
    }
    function lower(str) {
        return str.replace(str[0], str[0].toLowerCase());
    }

    function toString(val) {
        return val == null ? '' : _typeof(val) === 'object' ? JSON.stringify(val, null, 2) : String(val);
    }

    function toLine(name) {
        var line = name.replace(/([A-Z])/g, '-$1').toLocaleLowerCase();
        if (line.indexOf('-') === 0) line = line.substr(1);
        return line;
    }

    var id = 0;
    function uniqueId() {
        return Math.random().toString(36).substr(3, 3) + Number("".concat(Date.now()).concat(++id)).toString(36);
    }

    function deepSet(data, idx, val) {
        var _data = data,
            to;
        (idx || '').split('.').forEach(function (v) {
            if (to) {
                if (!_data[to] || _typeof(_data[to]) != 'object') {
                    _data[to] = {};
                }
                _data = _data[to];
            }
            to = v;
        });
        _data[to] = val;
        return _data;
    }

    function useRender(Render) {
        extend(Render.prototype, {
            initRender: function initRender() {
                this.tempList = {};
                this.clearOrgChildren();
            },
            initOrgChildren: function initOrgChildren() {
                var ctxs = this.$handle.ctxs;
                this.orgChildren = Object.keys(ctxs).reduce(function (initial, id) {
                    if (ctxs[id].parser.loadChildren !== false) {
                        var children = ctxs[id].rule.children;
                        initial[id] = is.trueArray(children) ? _toConsumableArray(children) : [];
                    }
                    return initial;
                }, {});
            },
            clearOrgChildren: function clearOrgChildren() {
                this.orgChildren = {};
            },
            getTypeSlot: function getTypeSlot(type) {
                var name = 'type-' + toLine(type);
                var _fn = function _fn(vm) {
                    if (vm) {
                        var slot = vm.$scopedSlots[name] || vm.$scopedSlots['type-' + type];
                        if (slot) {
                            return slot;
                        }
                        return _fn(vm.$pfc);
                    }
                };
                return _fn(this.vm);
            },
            render: function render() {
                var _this = this;
                if (!this.vm.isShow) {
                    return;
                }
                this.$h = this.vm.$createElement;
                this.$manager.beforeRender();
                var vn;
                var make = function make() {
                    return _this.renderList();
                };
                make.renderSlot = function (slot) {
                    return _this.renderList(slot);
                };
                make.renderName = function (name) {
                    return _this.renderId(name);
                };
                make.renderField = function (field) {
                    return _this.renderId(field, 'field');
                };
                if (this.vm.$scopedSlots.container) {
                    vn = [this.vm.$scopedSlots.container(make)];
                } else {
                    vn = make();
                }
                return this.$manager.render(vn);
            },
            renderList: function renderList(slot) {
                var _this2 = this;
                return this.sort.map(function (id) {
                    return slot ? _this2.renderSlot(_this2.$handle.ctxs[id], slot) : _this2.renderCtx(_this2.$handle.ctxs[id]);
                }).filter(function (val) {
                    return val !== undefined;
                });
            },
            makeVm: function makeVm(rule) {
                var _this3 = this;
                var vm = rule.vm;
                if (!vm) return new _vue();else if (is.Function(vm)) return invoke(function () {
                    return rule.vm(_this3.$handle.getInjectData(rule));
                });else if (!vm._isVue) return new _vue(vm);
                return vm;
            },
            mergeGlobal: function mergeGlobal(ctx) {
                var g = this.$handle.options.global;
                if (!g) return;
                if (!ctx.cacheConfig) ctx.cacheConfig = g[ctx.originType] || g[ctx.type] || g[ctx.trueType] || {};
                ctx.prop = mergeRule({}, [g['*'], ctx.cacheConfig, ctx.prop]);
            },
            setOptions: function setOptions(ctx) {
                if (ctx.prop.optionsTo && ctx.prop.options) {
                    deepSet(ctx.prop, ctx.prop.optionsTo, ctx.prop.options);
                }
            },
            deepSet: function deepSet$1(ctx) {
                var deep = ctx.rule.deep;
                deep && Object.keys(deep).sort(function (a, b) {
                    return a.length < b.length ? -1 : 1;
                }).forEach(function (str) {
                    deepSet(ctx.prop, str, deep[str]);
                });
            },
            setTempProps: function setTempProps(vm, ctx) {
                if (!vm.$props) return;
                var prop = ctx.prop;
                var keys = Object.keys(vm.$props);
                var inject = this.injectProp(ctx);
                var injectKeys = Object.keys(inject);
                keys.forEach(function (key) {
                    if (hasProperty(prop.props, key)) vm.$props[key] = prop.props[key];else if (injectKeys.indexOf(key) > -1) vm.$props[key] = inject[key];
                });
                var key = vm.$options.model && vm.$options.model.prop || 'value';
                if (keys.indexOf(key) > -1) {
                    vm.$props[key] = prop.value;
                }
            },
            renderTemp: function renderTemp(ctx) {
                var _this4 = this;
                if (!_vue.compile) {
                    tip('当前使用的Vue构建版本不支持compile,无法使用template功能');
                    return [];
                }
                var rule = ctx.prop;
                var id = ctx.id,
                    key = ctx.key;
                if (!this.tempList[id]) {
                    if (!ctx.el) {
                        ctx.el = this.makeVm(rule);
                        this.vm.$nextTick(function () {
                            return ctx.parser.mounted(ctx);
                        });
                    }
                    var _vm = ctx.el;
                    if (ctx.input) _vm.$on(_vm.$options.model && _vm.$options.model.event || 'input', function (value) {
                        _this4.onInput(ctx, value);
                    });
                    this.tempList[id] = {
                        vm: _vm,
                        template: _vue.compile(rule.template)
                    };
                }
                var _this$tempList$id = this.tempList[id],
                    vm = _this$tempList$id.vm,
                    template = _this$tempList$id.template;
                this.setTempProps(vm, ctx);
                var vn = template.render.call(vm);
                if (is.Undef(vn.data)) vn.data = {};
                vn.key = key;
                vn.data.ref = ctx.ref;
                vn.data.key = key;
                return vn;
            },
            parseSide: function parseSide(side) {
                return is.Object(side) ? mergeRule({}, side) : side;
            },
            renderSides: function renderSides(vn, ctx, temp) {
                var prop = ctx[temp ? 'rule' : 'prop'];
                return [this.renderRule(this.parseSide(prop.prefix)), vn, this.renderRule(this.parseSide(prop.suffix))];
            },
            renderSlot: function renderSlot(ctx, slot) {
                return ctx.rule.slot === slot ? this.renderCtx(ctx) : undefined;
            },
            renderId: function renderId(name, type) {
                var _this5 = this;
                var ctxs = this.$handle[type === 'field' ? 'fieldCtx' : 'nameCtx'][name];
                return ctxs ? ctxs.map(function (ctx) {
                    return _this5.renderCtx(ctx, ctx.parent);
                }) : undefined;
            },
            renderCtx: function renderCtx(ctx, parent) {
                if (ctx.type === 'hidden') return;
                var rule = ctx.rule;
                if (!this.cache[ctx.id] || this.cache[ctx.id].slot !== rule.slot) {
                    var vn;
                    var cacheFlag = rule.cache !== false;
                    var _type = ctx.trueType;
                    var none = !(is.Undef(rule.display) || !!rule.display);
                    if (_type === 'template' && !rule.template) {
                        vn = this.renderSides(this.renderChildren(ctx), ctx, true);
                        if (none) {
                            this.display(vn);
                        }
                        vn = this.item(ctx, vn);
                    } else if (_type === 'fcFragment') {
                        vn = this.renderChildren(ctx);
                    } else {
                        ctx.initProp();
                        this.mergeGlobal(ctx);
                        this.$manager.tidyRule(ctx);
                        this.deepSet(ctx);
                        this.setOptions(ctx);
                        this.ctxProp(ctx);
                        var prop = ctx.prop;
                        prop.preview = !!(hasProperty(prop, 'preview') ? prop.preview : this.options.preview || false);
                        prop.props.formCreateInject = this.injectProp(ctx);
                        var preview = prop.preview;
                        if (prop.hidden) {
                            this.setCache(ctx, undefined, parent);
                            return;
                        }
                        if (_type === 'template' && prop.template) {
                            vn = this.renderTemp(ctx);
                            cacheFlag = false;
                        } else {
                            var children = [];
                            if (ctx.parser.renderChildren) {
                                children = ctx.parser.renderChildren(ctx);
                            } else if (ctx.parser.loadChildren !== false) {
                                children = this.renderChildren(ctx);
                            }
                            var slot = this.getTypeSlot(ctx.type);
                            if (slot) {
                                vn = slot({
                                    rule: rule,
                                    prop: prop,
                                    preview: preview,
                                    children: children,
                                    api: this.$handle.api,
                                    model: prop.model || {}
                                });
                            } else {
                                vn = preview ? ctx.parser.preview(children, ctx) : ctx.parser.render(children, ctx);
                            }
                        }
                        vn = this.renderSides(vn, ctx);
                        if (!(!ctx.input && is.Undef(prop["native"])) && prop["native"] !== true) {
                            vn = this.$manager.makeWrap(ctx, vn);
                        }
                        if (none) {
                            vn = this.display(vn);
                        }
                        vn = this.item(ctx, vn);
                    }
                    if (cacheFlag) {
                        this.setCache(ctx, vn, parent);
                    }
                    return vn;
                }
                return this.getCache(ctx);
            },
            display: function display(vn) {
                var _this6 = this;
                if (Array.isArray(vn)) {
                    var data = [];
                    vn.forEach(function (v) {
                        if (Array.isArray(v)) return _this6.display(v);
                        if (_this6.none(v)) data.push(v);
                    });
                    return data;
                } else {
                    return this.none(vn);
                }
            },
            none: function none(vn) {
                if (vn && vn.data) {
                    if (Array.isArray(vn.data.style)) {
                        vn.data.style.push({
                            display: 'none'
                        });
                    } else if (is.String(vn.data.style)) {
                        vn.data.style += ';display:none;';
                    } else {
                        vn.data.style = [vn.data.style, {
                            display: 'none'
                        }];
                    }
                    return vn;
                }
            },
            item: function item(ctx, vn) {
                return this.$h('fcFragment', {
                    slot: ctx.rule.slot,
                    key: ctx.key
                }, [vn]);
            },
            injectProp: function injectProp(ctx) {
                var _this7 = this;
                if (!this.vm.ctxInject[ctx.id]) {
                    $set(this.vm.ctxInject, ctx.id, {
                        api: this.$handle.api,
                        form: this.fc.create,
                        subForm: function subForm(_subForm) {
                            _this7.$handle.addSubForm(ctx, _subForm);
                        },
                        getSubForm: function getSubForm() {
                            return _this7.$handle.subForm[ctx.id];
                        },
                        options: [],
                        children: [],
                        prop: {},
                        preview: false,
                        field: ctx.field,
                        rule: ctx.rule,
                        input: ctx.input
                    });
                }
                var inject = this.vm.ctxInject[ctx.id];
                extend(inject, {
                    preview: ctx.prop.preview,
                    options: ctx.prop.options,
                    children: ctx.rule.children,
                    prop: function () {
                        var temp = _objectSpread2({}, ctx.prop);
                        temp.on = temp.on ? _objectSpread2({}, temp.on) : {};
                        delete temp.model;
                        return temp;
                    }()
                });
                return inject;
            },
            ctxProp: function ctxProp(ctx, custom) {
                var _this8 = this;
                var ref = ctx.ref,
                    key = ctx.key,
                    rule = ctx.rule;
                this.$manager.mergeProp(ctx, custom);
                ctx.parser.mergeProp(ctx, custom);
                var props = [{
                    ref: ref,
                    key: rule.key || "".concat(key, "fc"),
                    slot: undefined,
                    on: {
                        'hook:mounted': function hookMounted() {
                            _this8.onMounted(ctx);
                        },
                        'fc.sub-form': function fcSubForm(subForm) {
                            _this8.$handle.addSubForm(ctx, subForm);
                        }
                    }
                }];
                if (!custom && ctx.input) {
                    ctx.prop.model = {
                        value: this.$handle.getFormData(ctx),
                        callback: function callback(value) {
                            _this8.onInput(ctx, value);
                        },
                        expression: "formData.".concat(ctx.id)
                    };
                }
                mergeProps(props, ctx.prop);
                return ctx.prop;
            },
            onMounted: function onMounted(ctx) {
                ctx.el = this.vm.$refs[ctx.ref];
                if (ctx.el) {
                    (ctx.el.$el || ctx.el).__rule__ = ctx.rule;
                }
                ctx.parser.mounted(ctx);
                this.$handle.effect(ctx, 'mounted');
            },
            onInput: function onInput(ctx, value) {
                this.$handle.onInput(ctx, value);
            },
            renderChildren: function renderChildren(ctx) {
                var _this9 = this;
                var children = ctx.rule.children,
                    orgChildren = this.orgChildren[ctx.id];
                var isRm = function isRm(child) {
                    return !is.String(child) && child.__fc__ && !_this9.$handle.ctxs[child.__fc__.id];
                };
                if (!is.trueArray(children) && orgChildren) {
                    this.$handle.deferSyncValue(function () {
                        orgChildren.forEach(function (child) {
                            if (!child) return;
                            if (isRm(child)) {
                                _this9.$handle.rmCtx(child.__fc__);
                            }
                        });
                    });
                    this.orgChildren[ctx.id] = [];
                    return [];
                }
                orgChildren && this.$handle.deferSyncValue(function () {
                    orgChildren.forEach(function (child) {
                        if (!child) return;
                        if (children.indexOf(child) === -1 && isRm(child)) {
                            _this9.$handle.rmCtx(child.__fc__);
                        }
                    });
                });
                return children.map(function (child) {
                    if (!child) return;
                    if (is.String(child)) return child;
                    if (child.__fc__) {
                        return _this9.renderCtx(child.__fc__, ctx);
                    }
                    if (child.type) {
                        _this9.vm.$nextTick(function () {
                            _this9.$handle.loadChildren(children, ctx);
                            _this9.$handle.refresh();
                        });
                    }
                });
            },
            defaultRender: function defaultRender(ctx, children) {
                var prop = ctx.prop;
                if (prop.component) return this.vNode.makeComponent(prop.component, prop, children);
                if (this.vNode[ctx.type]) return this.vNode[ctx.type](prop, children);
                if (this.vNode[ctx.originType]) return this.vNode[ctx.originType](prop, children);
                return this.vNode.make(lower(ctx.originType), prop, children);
            },
            renderRule: function renderRule(rule, children, origin) {
                var _this10 = this;
                if (!rule) return undefined;
                if (is.String(rule)) return rule;
                var type;
                if (origin) {
                    type = rule.type;
                } else {
                    type = rule.is;
                    if (rule.type) {
                        type = toCase(rule.type);
                        var alias = this.vNode.aliasMap[type];
                        if (alias) type = toCase(alias);
                    }
                }
                if (!type) return undefined;
                var data = [[children]];
                if (is.trueArray(rule.children)) {
                    data.push(rule.children.map(function (v) {
                        return _this10.renderRule(v);
                    }));
                }
                return this.$h(type, _objectSpread2({}, rule), data);
            }
        });
    }

    function Render(handle) {
        extend(this, {
            $handle: handle,
            fc: handle.fc,
            vm: handle.vm,
            $manager: handle.$manager,
            vNode: new handle.fc.CreateNode(handle.vm)
        });
        funcProxy(this, {
            options: function options() {
                return handle.options;
            },
            sort: function sort() {
                return handle.sort;
            }
        });
        this.initCache();
        this.initRender();
    }
    useCache(Render);
    useRender(Render);

    function useInject(Handler) {
        extend(Handler.prototype, {
            parseInjectEvent: function parseInjectEvent(rule, on) {
                var inject = rule.inject || this.options.injectEvent;
                return this.parseEventLst(rule, on, inject);
            },
            parseEventLst: function parseEventLst(rule, data, inject, deep) {
                var _this = this;
                Object.keys(data).forEach(function (k) {
                    var fn = _this.parseEvent(rule, data[k], inject, deep);
                    if (fn) {
                        data[k] = fn;
                    }
                });
                return data;
            },
            parseEvent: function parseEvent(rule, fn, inject, deep) {
                if (is.Function(fn) && (inject !== false && !is.Undef(inject) || fn.__inject)) {
                    return this.inject(rule, fn, inject);
                } else if (!deep && Array.isArray(fn) && fn[0] && (is.String(fn[0]) || is.Function(fn[0]))) {
                    return this.parseEventLst(rule, fn, inject, true);
                } else if (is.String(fn)) {
                    var val = parseFn(fn);
                    if (val && fn !== val) {
                        return val.__inject ? this.parseEvent(rule, val, inject, true) : val;
                    }
                }
            },
            parseEmit: function parseEmit(ctx, on) {
                var _this2 = this;
                var event = {},
                    rule = ctx.rule,
                    emitPrefix = rule.emitPrefix,
                    field = rule.field,
                    name = rule.name,
                    inject = rule.inject;
                var emit = rule[on ? 'emit' : 'nativeEmit'] || [];
                if (is.trueArray(emit)) {
                    var emitKey = emitPrefix || field || name;
                    if (emitKey) {
                        if (!on) emitKey = "native-".concat(emitKey);
                        emit.forEach(function (eventName) {
                            if (!eventName) return;
                            var eventInject;
                            if (is.Object(eventName)) {
                                eventInject = eventName.inject;
                                eventName = eventName.name;
                            }
                            var fieldKey = toLine("".concat(emitKey, "-").concat(eventName));
                            var fn = function fn() {
                                var _this2$vm, _this2$vm2;
                                for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
                                    arg[_key] = arguments[_key];
                                }
                                (_this2$vm = _this2.vm).$emit.apply(_this2$vm, [fieldKey].concat(arg));
                                (_this2$vm2 = _this2.vm).$emit.apply(_this2$vm2, ['emit-event', fieldKey].concat(arg));
                            };
                            fn.__emit = true;
                            if (!eventInject && inject === false) {
                                event[eventName] = fn;
                            } else {
                                var _inject = eventInject || inject || _this2.options.injectEvent;
                                event[eventName] = is.Undef(_inject) ? fn : _this2.inject(rule, fn, _inject);
                            }
                        });
                    }
                }
                ctx.computed[on ? 'on' : 'nativeOn'] = event;
                return event;
            },
            getInjectData: function getInjectData(self, inject) {
                var _this$vm$$options$pro = this.vm.$options.propsData,
                    option = _this$vm$$options$pro.option,
                    rule = _this$vm$$options$pro.rule;
                return {
                    api: this.api,
                    $f: this.api,
                    rule: rule,
                    self: self.__origin__,
                    option: option,
                    inject: inject
                };
            },
            inject: function inject(self, _fn, _inject2) {
                if (_fn.__origin) {
                    if (this.watching && !this.loading) return _fn;
                    _fn = _fn.__origin;
                }
                var h = this;
                var fn = function fn() {
                    var data = h.getInjectData(self, _inject2);
                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        args[_key2] = arguments[_key2];
                    }
                    data.args = [].concat(args);
                    args.unshift(data);
                    return _fn.apply(this, args);
                };
                fn.__origin = _fn;
                fn.__json = _fn.__json;
                return fn;
            }
        });
    }

    var EVENT = ['hook:updated', 'hook:mounted'];
    function usePage(Handler) {
        extend(Handler.prototype, {
            usePage: function usePage() {
                var _this = this;
                var page = this.options.page;
                if (!page) return;
                var first = 25;
                var limit = getLimit(this.rules);
                if (is.Object(page)) {
                    if (page.first) first = parseInt(page.first, 10) || first;
                    if (page.limit) limit = parseInt(page.limit, 10) || limit;
                }
                extend(this, {
                    first: first,
                    limit: limit,
                    pageEnd: this.rules.length <= first
                });
                this.bus.$on('page-end', function () {
                    return _this.vm.$emit('page-end', _this.api);
                });
                this.pageLoad();
            },
            pageLoad: function pageLoad() {
                var _this2 = this;
                var pageFn = function pageFn() {
                    if (_this2.pageEnd) {
                        _this2.vm.$off(EVENT, pageFn);
                        _this2.bus.$emit('page-end');
                    } else {
                        _this2.first += _this2.limit;
                        _this2.pageEnd = _this2.rules.length <= _this2.first;
                        _this2.loadRule();
                        _this2.refresh();
                    }
                };
                this.vm.$on(EVENT, pageFn);
            }
        });
    }
    function getLimit(rules) {
        return rules.length < 31 ? 31 : Math.ceil(rules.length / 3);
    }

    function useRender$1(Handler) {
        extend(Handler.prototype, {
            clearNextTick: function clearNextTick() {
                this.nextTick && clearTimeout(this.nextTick);
                this.nextTick = null;
            },
            bindNextTick: function bindNextTick(fn) {
                var _this = this;
                this.clearNextTick();
                this.nextTick = setTimeout(function () {
                    fn();
                    _this.nextTick = null;
                }, 10);
            },
            render: function render() {
                ++this.loadedId;
                if (this.vm.unique > 0) return this.$render.render();else {
                    this.vm.unique = 1;
                    return [];
                }
            }
        });
    }

    function bind(ctx) {
        Object.defineProperties(ctx.origin, {
            __fc__: enumerable(ctx, true)
        });
    }
    function RuleContext(handle, rule) {
        var id = uniqueId();
        extend(this, {
            id: id,
            ref: id,
            wrapRef: id + 'fi',
            rule: rule,
            origin: rule.__origin__ || rule,
            name: rule.name,
            watch: [],
            linkOn: [],
            root: [],
            ctrlRule: [],
            parent: null,
            cacheConfig: null,
            prop: _objectSpread2({}, rule),
            computed: {},
            payload: {},
            input: !!rule.field,
            el: undefined,
            defaultValue: rule.field ? deepCopy(rule.value) : undefined,
            field: rule.field || undefined
        });
        this.updateType();
        this.updateKey();
        bind(this);
        this.update(handle, true);
    }
    extend(RuleContext.prototype, {
        effectData: function effectData(name) {
            if (!this.payload[name]) {
                this.payload[name] = {};
            }
            return this.payload[name];
        },
        clearEffectData: function clearEffectData(name) {
            delete this.payload[name];
        },
        updateKey: function updateKey(flag) {
            this.key = uniqueId();
            flag && this.parent && this.parent.updateKey(flag);
        },
        updateType: function updateType() {
            this.originType = this.rule.type;
            this.type = toCase(this.rule.type);
        },
        setParser: function setParser(parser) {
            this.parser = parser;
            parser.init(this);
        },
        initProp: function initProp() {
            var _this = this;
            var rule = _objectSpread2({}, this.rule);
            delete rule.children;
            this.prop = mergeProps([rule].concat(_toConsumableArray(Object.keys(this.payload).map(function (k) {
                return _this.payload[k];
            })), [this.computed]));
        },
        check: function check(handle) {
            return this.vm === handle.vm;
        },
        unwatch: function unwatch() {
            this.watch.forEach(function (un) {
                return un();
            });
            this.watch = [];
        },
        unlink: function unlink() {
            this.linkOn.forEach(function (un) {
                return un();
            });
            this.linkOn = [];
        },
        link: function link() {
            this.unlink();
            this.$handle.appendLink(this);
        },
        watchTo: function watchTo() {
            this.$handle.watchCtx(this);
        },
        "delete": function _delete() {
            var undef = void 0;
            this.unwatch();
            this.unlink();
            this.rmCtrl();
            extend(this, {
                deleted: true,
                prop: _objectSpread2({}, this.rule),
                computed: {},
                el: undef,
                $handle: undef,
                $render: undef,
                $api: undef,
                vm: undef,
                vNode: undef,
                parent: null,
                cacheConfig: null
            });
        },
        rmCtrl: function rmCtrl() {
            this.ctrlRule.forEach(function (ctrl) {
                return ctrl.__fc__ && ctrl.__fc__.rm();
            });
            this.ctrlRule = [];
        },
        rm: function rm() {
            var _this2 = this;
            var _rm = function _rm() {
                var index = _this2.root.indexOf(_this2.origin);
                if (index > -1) {
                    _this2.root.splice(index, 1);
                    _this2.$handle && _this2.$handle.refresh();
                }
            };
            if (this.deleted) {
                _rm();
                return;
            }
            this.$handle.noWatch(function () {
                _this2.$handle.deferSyncValue(function () {
                    _this2.rmCtrl();
                    _rm();
                    _this2.$handle.rmCtx(_this2);
                    extend(_this2, {
                        root: []
                    });
                }, _this2.input);
            });
        },
        update: function update(handle, init) {
            extend(this, {
                deleted: false,
                $handle: handle,
                $render: handle.$render,
                $api: handle.api,
                vm: handle.vm,
                trueType: handle.getType(this.originType),
                vNode: handle.$render.vNode,
                updated: false
            });
            !init && this.unwatch();
            this.watchTo();
            this.link();
        }
    });

    function useLoader(Handler) {
        extend(Handler.prototype, {
            nextRefresh: function nextRefresh(fn) {
                var _this = this;
                var id = this.loadedId;
                this.vm.$nextTick(function () {
                    id === _this.loadedId && (fn ? fn() : _this.refresh());
                });
            },
            parseRule: function parseRule(_rule) {
                var _this2 = this;
                var rule = getRule(_rule);
                Object.defineProperties(rule, {
                    __origin__: enumerable(_rule, true)
                });
                fullRule(rule);
                this.appendValue(rule);
                rule.options = Array.isArray(rule.options) ? rule.options : [];
                [rule, rule['prefix'], rule['suffix']].forEach(function (item) {
                    if (!item) {
                        return;
                    }
                    _this2.loadFn(item, rule);
                });
                this.loadCtrl(rule);
                if (rule.update) {
                    rule.update = parseFn(rule.update);
                }
                return rule;
            },
            loadFn: function loadFn(item, rule) {
                var _this3 = this;
                ['on', 'props', 'nativeOn', 'deep'].forEach(function (k) {
                    item[k] && _this3.parseInjectEvent(rule, item[k]);
                });
            },
            loadCtrl: function loadCtrl(rule) {
                rule.control && rule.control.forEach(function (ctrl) {
                    if (ctrl.handle) {
                        ctrl.handle = parseFn(ctrl.handle);
                    }
                });
            },
            syncProp: function syncProp(ctx) {
                var _this4 = this;
                var rule = ctx.rule;
                is.trueArray(rule.sync) && mergeProps([{
                    on: rule.sync.reduce(function (pre, prop) {
                        pre["update:".concat(prop)] = function (val) {
                            rule.props[prop] = val;
                            _this4.vm.$emit('sync', prop, val, rule, _this4.fapi);
                        };
                        return pre;
                    }, {})
                }], ctx.computed);
            },
            loadRule: function loadRule() {
                var _this5 = this;
                this.cycleLoad = false;
                this.loading = true;
                if (this.pageEnd) {
                    this.bus.$emit('load-start');
                }
                this.deferSyncValue(function () {
                    _this5._loadRule(_this5.rules);
                    _this5.loading = false;
                    if (_this5.cycleLoad && _this5.pageEnd) {
                        return _this5.loadRule();
                    }
                    if (_this5.pageEnd) {
                        _this5.bus.$emit('load-end');
                    }
                    _this5.vm._renderRule();
                    _this5.$render.initOrgChildren();
                    _this5.syncForm();
                });
            },
            loadChildren: function loadChildren(children, parent) {
                this.cycleLoad = false;
                this.loading = true;
                this.bus.$emit('load-start');
                this._loadRule(children, parent);
                this.loading = false;
                if (this.cycleLoad) {
                    return this.loadRule();
                } else {
                    this.bus.$emit('load-end');
                    this.syncForm();
                }
                this.$render.clearCache(parent);
            },
            _loadRule: function _loadRule(rules, parent) {
                var _this6 = this;
                var preIndex = function preIndex(i) {
                    var pre = rules[i - 1];
                    if (!pre || !pre.__fc__) {
                        return i > 0 ? preIndex(i - 1) : -1;
                    }
                    var index = _this6.sort.indexOf(pre.__fc__.id);
                    return index > -1 ? index : preIndex(i - 1);
                };
                var loadChildren = function loadChildren(children, parent) {
                    if (is.trueArray(children)) {
                        _this6._loadRule(children, parent);
                    }
                };
                rules.map(function (_rule, index) {
                    if (parent && (is.String(_rule) || is.Undef(_rule))) return;
                    if (!_this6.pageEnd && !parent && index >= _this6.first) return;
                    if (!is.Object(_rule) || !getRule(_rule).type) return err('未定义生成规则的 type 字段', _rule);
                    if (_rule.__fc__ && _rule.__fc__.root === rules && _this6.ctxs[_rule.__fc__.id]) {
                        loadChildren(_rule.__fc__.rule.children, _rule.__fc__);
                        return _rule.__fc__;
                    }
                    var rule = getRule(_rule);
                    var isRepeat = function isRepeat() {
                        return !!(rule.field && _this6.fieldCtx[rule.field] && _this6.fieldCtx[rule.field][0] !== _rule.__fc__);
                    };
                    _this6.ruleEffect(rule, 'init', {
                        repeat: isRepeat()
                    });
                    if (isRepeat()) {
                        _this6.vm.$emit('repeat-field', _rule, _this6.api);
                    }
                    var ctx;
                    var isCopy = false;
                    var isInit = !!_rule.__fc__;
                    if (isInit) {
                        ctx = _rule.__fc__;
                        var check = !ctx.check(_this6);
                        if (ctx.deleted) {
                            if (check) {
                                if (isCtrl(ctx)) {
                                    return;
                                }
                                ctx.update(_this6);
                            }
                        } else {
                            if (check) {
                                if (isCtrl(ctx)) {
                                    return;
                                }
                                rules[index] = _rule = _rule._clone ? _rule._clone() : copyRule(_rule);
                                ctx = null;
                                isCopy = true;
                            }
                        }
                    }
                    if (!ctx) {
                        ctx = new RuleContext(_this6, _this6.parseRule(_rule));
                        _this6.bindParser(ctx);
                    } else {
                        if (ctx.originType !== ctx.rule.type) {
                            ctx.updateType();
                            _this6.bindParser(ctx);
                        }
                        _this6.appendValue(ctx.rule);
                    }
                    [false, true].forEach(function (b) {
                        return _this6.parseEmit(ctx, b);
                    });
                    _this6.syncProp(ctx);
                    ctx.parent = parent || null;
                    ctx.root = rules;
                    _this6.setCtx(ctx);
                    !isCopy && !isInit && _this6.effect(ctx, 'load');
                    ctx.parser.loadChildren === false || loadChildren(ctx.rule.children, ctx);
                    if (!parent) {
                        var _preIndex = preIndex(index);
                        if (_preIndex > -1 || !index) {
                            _this6.sort.splice(_preIndex + 1, 0, ctx.id);
                        } else {
                            _this6.sort.push(ctx.id);
                        }
                    }
                    var r = ctx.rule;
                    if (!ctx.updated) {
                        ctx.updated = true;
                        if (is.Function(r.update)) {
                            _this6.bus.$once('load-end', function () {
                                _this6.refreshUpdate(ctx, r.value);
                            });
                        }
                        _this6.effect(ctx, 'loaded');
                    }
                    if (ctx.input) Object.defineProperty(r, 'value', _this6.valueHandle(ctx));
                    if (_this6.refreshControl(ctx)) _this6.cycleLoad = true;
                    return ctx;
                });
            },
            refreshControl: function refreshControl(ctx) {
                return ctx.input && ctx.rule.control && this.useCtrl(ctx);
            },
            useCtrl: function useCtrl(ctx) {
                var _this7 = this;
                var controls = getCtrl(ctx),
                    validate = [],
                    api = this.api;
                if (!controls.length) return false;
                var _loop = function _loop(i) {
                    var control = controls[i],
                        handleFn = control.handle || function (val) {
                            return val === control.value;
                        };
                    if (!is.trueArray(control.rule)) return "continue";
                    var data = _objectSpread2(_objectSpread2({}, control), {}, {
                        valid: invoke(function () {
                            return handleFn(ctx.rule.value, api);
                        }),
                        ctrl: findCtrl(ctx, control.rule),
                        isHidden: is.String(control.rule[0])
                    });
                    if (data.valid && data.ctrl || !data.valid && !data.ctrl && !data.isHidden) return "continue";
                    validate.push(data);
                };
                for (var i = 0; i < controls.length; i++) {
                    var _ret = _loop(i);
                    if (_ret === "continue") continue;
                }
                if (!validate.length) return false;
                var flag = false;
                this.deferSyncValue(function () {
                    validate.reverse().forEach(function (_ref) {
                        var isHidden = _ref.isHidden,
                            valid = _ref.valid,
                            rule = _ref.rule,
                            prepend = _ref.prepend,
                            append = _ref.append,
                            child = _ref.child,
                            ctrl = _ref.ctrl;
                        if (isHidden) {
                            valid ? ctx.ctrlRule.push({
                                __ctrl: true,
                                children: rule,
                                valid: valid
                            }) : ctx.ctrlRule.splice(ctx.ctrlRule.indexOf(ctrl), 1);
                            _this7.vm.$nextTick(function () {
                                _this7.api.hidden(!valid, rule);
                            });
                            return;
                        }
                        if (valid) {
                            flag = true;
                            var ruleCon = {
                                type: 'fcFragment',
                                "native": true,
                                __ctrl: true,
                                children: rule
                            };
                            ctx.ctrlRule.push(ruleCon);
                            _this7.bus.$once('load-start', function () {
                                if (prepend) {
                                    api.prepend(ruleCon, prepend, child);
                                } else if (append || child) {
                                    api.append(ruleCon, append || ctx.id, child);
                                } else {
                                    ctx.root.splice(ctx.root.indexOf(ctx.origin) + 1, 0, ruleCon);
                                }
                            });
                        } else {
                            ctx.ctrlRule.splice(ctx.ctrlRule.indexOf(ctrl), 1);
                            var ctrlCtx = byCtx(ctrl);
                            ctrlCtx && ctrlCtx.rm();
                        }
                    });
                });
                this.vm.$emit('control', ctx.origin, this.api);
                this.effect(ctx, 'control');
                return flag;
            },
            reloadRule: function reloadRule(rules) {
                return this._reloadRule(rules);
            },
            _reloadRule: function _reloadRule(rules) {
                var _this8 = this;
                if (!rules) rules = this.rules;
                var ctxs = _objectSpread2({}, this.ctxs);
                this.clearNextTick();
                this.$render.clearOrgChildren();
                this.initData(rules);
                this.fc.rules = rules;
                this.deferSyncValue(function () {
                    _this8.bus.$once('load-end', function () {
                        Object.keys(ctxs).filter(function (id) {
                            return _this8.ctxs[id] === undefined;
                        }).forEach(function (id) {
                            return _this8.rmCtx(ctxs[id]);
                        });
                        _this8.$render.clearCacheAll();
                    });
                    _this8.reloading = true;
                    _this8.loadRule();
                    _this8.reloading = false;
                    _this8.refresh();
                    _this8.vm.$emit('reloading', _this8.api);
                });
                this.bus.$off('next-tick', this.nextReload);
                this.bus.$once('next-tick', this.nextReload);
                this.vm.$emit('update', this.api);
            },
            refresh: function refresh() {
                this.vm._refresh();
            }
        });
    }
    function fullRule(rule) {
        var def = baseRule();
        Object.keys(def).forEach(function (k) {
            if (!hasProperty(rule, k)) $set(rule, k, def[k]);
        });
        return rule;
    }
    function getCtrl(ctx) {
        var control = ctx.rule.control || [];
        if (is.Object(control)) return [control];else return control;
    }
    function findCtrl(ctx, rule) {
        for (var i = 0; i < ctx.ctrlRule.length; i++) {
            var ctrl = ctx.ctrlRule[i];
            if (ctrl.children === rule) return ctrl;
        }
    }
    function isCtrl(ctx) {
        return !!ctx.rule.__ctrl;
    }

    function useInput(Handler) {
        extend(Handler.prototype, {
            getValue: function getValue(ctx) {
                if (is.Undef(ctx.cacheValue)) {
                    ctx.cacheValue = ctx.parser.toValue(this.getFormData(ctx), ctx);
                }
                return ctx.cacheValue;
            },
            setValue: function setValue(ctx, value, formValue, setFlag) {
                if (ctx.deleted) return;
                ctx.cacheValue = value;
                this.changeStatus = true;
                this.nextRefresh();
                this.$render.clearCache(ctx);
                this.setFormData(ctx, formValue);
                this.syncValue();
                this.valueChange(ctx, value);
                this.vm.$emit('change', ctx.field, value, ctx.origin, this.api, setFlag || false);
                this.effect(ctx, 'value');
            },
            onInput: function onInput(ctx, value) {
                var val;
                if (ctx.input && (this.isQuote(ctx, val = ctx.parser.toValue(value, ctx)) || this.isChange(ctx, val))) {
                    this.setValue(ctx, val, value);
                }
            },
            setFormData: function setFormData(ctx, value) {
                $set(this.formData, ctx.id, value === null ? undefined : value);
            },
            getFormData: function getFormData(ctx) {
                return this.formData[ctx.id];
            },
            validate: function validate() {
                var _this = this;
                toEmpty(this.vm.validate);
                this.fields().forEach(function (id) {
                    _this.fieldCtx[id].forEach(function (ctx) {
                        _this.vm.validate[ctx.id] = toArray(ctx.rule.validate);
                    });
                });
                return this.vm.validate;
            },
            syncForm: function syncForm() {
                var _this2 = this;
                toEmpty(this.form);
                Object.defineProperties(this.form, this.fields().reduce(function (initial, field) {
                    var ctx = _this2.getFieldCtx(field);
                    var handle = _this2.valueHandle(ctx);
                    handle.configurable = true;
                    initial[field] = handle;
                    return initial;
                }, this.options.appendValue ? Object.keys(this.appendData).reduce(function (initial, field) {
                    initial[field] = {
                        enumerable: true,
                        configurable: true,
                        get: function get() {
                            return _this2.appendData[field];
                        },
                        set: function set(val) {
                            _this2.appendData[field] = val;
                        }
                    };
                    return initial;
                }, {}) : {}));
                this.syncValue();
            },
            valueHandle: function valueHandle(ctx) {
                var _this3 = this;
                return {
                    enumerable: true,
                    get: function get() {
                        return _this3.getValue(ctx);
                    },
                    set: function set(value) {
                        if (_this3.isChange(ctx, value)) {
                            _this3.setValue(ctx, value, ctx.parser.toFormValue(value, ctx), true);
                        }
                    }
                };
            },
            appendValue: function appendValue(rule) {
                if (!rule.field || !hasProperty(this.appendData, rule.field)) return;
                rule.value = this.appendData[rule.field];
                delete this.appendData[rule.field];
            },
            addSubForm: function addSubForm(ctx, subForm) {
                this.subForm[ctx.id] = subForm;
            },
            deferSyncValue: function deferSyncValue(fn, sync) {
                if (!this.deferSyncFn) {
                    this.deferSyncFn = fn;
                }
                if (!this.deferSyncFn.sync) {
                    this.deferSyncFn.sync = sync;
                }
                invoke(fn);
                if (this.deferSyncFn === fn) {
                    this.deferSyncFn = null;
                    if (fn.sync) {
                        this.syncValue();
                    }
                }
            },
            syncValue: function syncValue() {
                if (this.deferSyncFn) {
                    return this.deferSyncFn.sync = true;
                }
                this.vm._updateValue(_objectSpread2({}, this.form));
            },
            isChange: function isChange(ctx, value) {
                return JSON.stringify(ctx.rule.value, strFn) !== JSON.stringify(value === null ? undefined : value, strFn);
            },
            isQuote: function isQuote(ctx, value) {
                return (is.Object(value) || Array.isArray(value)) && value === ctx.rule.value;
            },
            refreshUpdate: function refreshUpdate(ctx, val) {
                var _this4 = this;
                if (is.Function(ctx.rule.update)) {
                    var state = invoke(function () {
                        return ctx.rule.update(val, ctx.origin, _this4.api);
                    });
                    if (state === undefined) return;
                    ctx.rule.hidden = state === true;
                }
            },
            valueChange: function valueChange(ctx, val) {
                this.refreshRule(ctx, val);
                this.bus.$emit('change-' + ctx.field, val);
            },
            refreshRule: function refreshRule(ctx, val) {
                if (this.refreshControl(ctx)) {
                    this.$render.clearCacheAll();
                    this.loadRule();
                    this.vm.$emit('update', this.api);
                    this.refresh();
                }
                this.refreshUpdate(ctx, val);
            },
            appendLink: function appendLink(ctx) {
                var _this5 = this;
                var link = ctx.rule.link;
                is.trueArray(link) && link.forEach(function (field) {
                    var fn = function fn() {
                        return _this5.refreshRule(ctx, ctx.rule.value);
                    };
                    _this5.bus.$on('change-' + field, fn);
                    ctx.linkOn.push(function () {
                        return _this5.bus.$off('change-' + field, fn);
                    });
                });
            },
            fields: function fields() {
                return Object.keys(this.fieldCtx);
            }
        });
    }
    function strFn(key, val) {
        return typeof val === 'function' ? '' + val : val;
    }
    function toEmpty(obj) {
        Object.keys(obj).forEach(function (k) {
            return delete obj[k];
        });
    }

    var BaseParser = {
        init: function init(ctx) {},
        toFormValue: function toFormValue(value, ctx) {
            return value;
        },
        toValue: function toValue(formValue, ctx) {
            return formValue;
        },
        mounted: function mounted(ctx) {},
        render: function render(children, ctx) {
            return ctx.$render.defaultRender(ctx, children);
        },
        preview: function preview(children, ctx) {
            return this.render(children, ctx);
        },
        mergeProp: function mergeProp(ctx) {}
    };

    var noneKey = ['field', 'value', 'vm', 'template', 'name', 'config', 'control', 'inject', 'sync', 'payload', 'optionsTo', 'update', 'component', 'cache'];
    function useContext(Handler) {
        extend(Handler.prototype, {
            getCtx: function getCtx(id) {
                return this.getFieldCtx(id) || this.getNameCtx(id)[0] || this.ctxs[id];
            },
            getCtxs: function getCtxs(id) {
                return this.fieldCtx[id] || this.nameCtx[id] || (this.ctxs[id] ? [this.ctxs[id]] : []);
            },
            setIdCtx: function setIdCtx(ctx, key, type) {
                var field = "".concat(type, "Ctx");
                if (!this[field][key]) {
                    this[field][key] = [ctx];
                } else {
                    this[field][key].push(ctx);
                }
            },
            rmIdCtx: function rmIdCtx(ctx, key, type) {
                var field = "".concat(type, "Ctx");
                var lst = this[field][key];
                if (!lst) return false;
                var flag = lst.splice(lst.indexOf(ctx) >>> 0, 1).length > 0;
                if (!lst.length) {
                    delete this[field][key];
                }
                return flag;
            },
            getFieldCtx: function getFieldCtx(field) {
                return (this.fieldCtx[field] || [])[0];
            },
            getNameCtx: function getNameCtx(name) {
                return this.nameCtx[name] || [];
            },
            setCtx: function setCtx(ctx) {
                var id = ctx.id,
                    field = ctx.field,
                    name = ctx.name,
                    rule = ctx.rule;
                this.ctxs[id] = ctx;
                name && this.setIdCtx(ctx, name, 'name');
                if (!ctx.input) return;
                this.setIdCtx(ctx, field, 'field');
                this.setFormData(ctx, ctx.parser.toFormValue(rule.value, ctx));
                if (this.isMounted && !this.reloading) {
                    this.vm.$emit('change', ctx.field, rule.value, ctx.origin, this.api);
                }
            },
            getParser: function getParser(ctx) {
                var list = this.fc.parsers;
                return list[ctx.originType] || list[toCase(ctx.type)] || list[ctx.trueType] || BaseParser;
            },
            bindParser: function bindParser(ctx) {
                ctx.setParser(this.getParser(ctx));
            },
            getType: function getType(alias) {
                var map = this.fc.CreateNode.aliasMap;
                var type = map[alias] || map[toCase(alias)] || alias;
                return toCase(type);
            },
            noWatch: function noWatch(fn) {
                if (!this.noWatchFn) {
                    this.noWatchFn = fn;
                }
                invoke(fn);
                if (this.noWatchFn === fn) {
                    this.noWatchFn = null;
                }
            },
            watchCtx: function watchCtx(ctx) {
                var _this = this;
                var vm = this.vm;
                Object.keys(ctx.rule).filter(function (k) {
                    return k[0] !== '_' && k[0] !== '$' && noneKey.indexOf(k) === -1;
                }).forEach(function (key) {
                    var flag = key === 'children';
                    ctx.watch.push(vm.$watch(function () {
                        return ctx.rule[key];
                    }, function (n, o) {
                        if (_this.loading || _this.noWatchFn || _this.reloading) return;
                        if (flag && ctx.parser.loadChildren === false) {
                            _this.$render.clearCache(ctx);
                            _this.nextRefresh();
                            return;
                        }
                        _this.watching = true;
                        if (key === 'link') {
                            ctx.link();
                            return;
                        } else if (['props', 'on', 'nativeOn', 'deep'].indexOf(key) > -1) {
                            _this.parseInjectEvent(ctx.rule, n || {});
                            if (key === 'props' && ctx.input) {
                                _this.setFormData(ctx, ctx.parser.toFormValue(ctx.rule.value, ctx));
                            }
                        } else if (['emit', 'nativeEmit'].indexOf(key) > -1) _this.parseEmit(ctx, key === 'emit');else if (['prefix', 'suffix'].indexOf(key) > -1) n && _this.loadFn(n, ctx.rule);else if (key === 'type') {
                            ctx.updateType();
                            _this.bindParser(ctx);
                        } else if (key === 'children') {
                            var _flag = is.trueArray(n);
                            _this.deferSyncValue(function () {
                                if (n !== o) {
                                    _this.rmSub(o);
                                    _this.$render.initOrgChildren();
                                }
                                _flag && _this.loadChildren(n, ctx);
                                _this.vm.$emit('update', _this.api);
                            });
                        }
                        _this.$render.clearCache(ctx);
                        _this.watching = false;
                    }, {
                        deep: !flag,
                        sync: flag
                    }));
                });
                this.watchEffect(ctx);
            },
            rmSub: function rmSub(sub) {
                var _this2 = this;
                is.trueArray(sub) && sub.forEach(function (r) {
                    r && r.__fc__ && _this2.rmCtx(r.__fc__);
                });
            },
            rmCtx: function rmCtx(ctx) {
                var _this3 = this;
                if (ctx.deleted) return;
                var id = ctx.id,
                    field = ctx.field,
                    input = ctx.input,
                    name = ctx.name;
                if (ctx.input) {
                    Object.defineProperty(ctx.rule, 'value', {
                        value: ctx.rule.value,
                        writable: true
                    });
                }
                $del(this.ctxs, id);
                $del(this.$render.tempList, id);
                $del(this.$render.orgChildren, id);
                $del(this.vm.ctxInject, id);
                $del(this.formData, id);
                $del(this.subForm, id);
                $del(ctx, 'cacheValue');
                input && $del(this.form, field);
                input && this.rmIdCtx(ctx, field, 'field');
                name && this.rmIdCtx(ctx, name, 'name');
                this.deferSyncValue(function () {
                    if (!_this3.reloading) {
                        if (ctx.parser.loadChildren !== false) {
                            if (is.trueArray(ctx.rule.children)) {
                                ctx.rule.children.forEach(function (h) {
                                    return h.__fc__ && _this3.rmCtx(h.__fc__);
                                });
                            }
                        }
                        if (ctx.root === _this3.rules) {
                            _this3.vm._renderRule();
                        }
                    }
                }, input);
                var index = this.sort.indexOf(id);
                if (index > -1) {
                    this.sort.splice(index, 1);
                }
                this.$render.clearCache(ctx);
                ctx["delete"]();
                this.effect(ctx, 'deleted');
                input && !this.fieldCtx[field] && this.vm.$emit('removeField', field, ctx.rule, this.api);
                ctx.rule.__ctrl || this.vm.$emit('removeRule', ctx.rule, this.api);
                return ctx;
            }
        });
    }

    function useLifecycle(Handler) {
        extend(Handler.prototype, {
            mounted: function mounted() {
                var _this = this;
                var _mounted = function _mounted() {
                    _this.isMounted = true;
                    _this.lifecycle('mounted');
                };
                if (this.pageEnd) {
                    _mounted();
                } else {
                    this.bus.$once('page-end', _mounted);
                }
            },
            lifecycle: function lifecycle(name) {
                var _this2 = this;
                var fn = this.options[name];
                is.Function(fn) && invoke(function () {
                    return fn(_this2.api);
                });
                this.vm.$emit(name, this.api);
            }
        });
    }

    function useEffect(Handler) {
        extend(Handler.prototype, {
            useProvider: function useProvider() {
                var _this = this;
                var ps = this.fc.providers;
                Object.keys(ps).forEach(function (k) {
                    var prop = ps[k];
                    prop._c = getComponent(prop);
                    _this.onEffect(prop);
                    _this.providers[k] = prop;
                });
            },
            onEffect: function onEffect(provider) {
                var _this2 = this;
                var used = [];
                (provider._c || ['*']).forEach(function (name) {
                    var type = name === '*' ? '*' : _this2.getType(name);
                    if (used.indexOf(type) > -1) return;
                    used.push(type);
                    _this2.bus.$on("p:".concat(provider.name, ":").concat(type, ":").concat(provider.input ? 1 : 0), function (event, args) {
                        provider[event] && provider[event].apply(provider, _toConsumableArray(args));
                    });
                });
                provider._used = used;
            },
            watchEffect: function watchEffect(ctx) {
                var _this3 = this;
                var vm = this.vm;
                var effect = {};
                Object.keys(ctx.rule.effect || {}).forEach(function (k) {
                    effect[k] = function () {
                        return ctx.rule.effect[k];
                    };
                });
                Object.keys(ctx.rule).forEach(function (k) {
                    if (k[0] === '$') {
                        effect[k.substr(1)] = function () {
                            return ctx.rule[k];
                        };
                    }
                });
                Object.keys(effect || {}).forEach(function (k) {
                    ctx.watch.push(vm.$watch(effect[k], function (n) {
                        _this3.effect(ctx, 'watch', _defineProperty({}, k, n));
                    }, {
                        deep: true
                    }));
                });
            },
            ruleEffect: function ruleEffect(rule, event, append) {
                this.emitEffect({
                    rule: rule,
                    input: !!rule.field,
                    type: this.getType(rule.type)
                }, event, append);
            },
            effect: function effect(ctx, event, custom) {
                this.emitEffect({
                    rule: ctx.rule,
                    input: ctx.input,
                    type: ctx.trueType,
                    ctx: ctx,
                    custom: custom
                }, event);
            },
            getEffect: function getEffect(rule, name) {
                if (hasProperty(rule, '$' + name)) {
                    return rule['$' + name];
                }
                if (hasProperty(rule, 'effect') && hasProperty(rule.effect, name)) return rule.effect[name];
                return undefined;
            },
            emitEffect: function emitEffect(_ref, event, append) {
                var _this4 = this;
                var ctx = _ref.ctx,
                    rule = _ref.rule,
                    input = _ref.input,
                    type = _ref.type,
                    custom = _ref.custom;
                if (!type || type === 'fcFragment') return;
                var effect = custom ? custom : Object.keys(rule).reduce(function (i, k) {
                    if (k[0] === '$') {
                        i[k.substr(1)] = rule[k];
                    }
                    return i;
                }, _objectSpread2({}, rule.effect || {}));
                Object.keys(effect).forEach(function (attr) {
                    var p = _this4.providers[attr];
                    if (!p || p.input && !input) return;
                    var _type;
                    if (!p._c) {
                        _type = '*';
                    } else if (p._used.indexOf(type) > -1) {
                        _type = type;
                    } else {
                        return;
                    }
                    var data = _objectSpread2({
                        value: effect[attr],
                        getValue: function getValue() {
                            return _this4.getEffect(rule, attr);
                        }
                    }, append || {});
                    if (ctx) {
                        data.getProp = function () {
                            return ctx.effectData(attr);
                        };
                        data.clearProp = function () {
                            return ctx.clearEffectData(attr);
                        };
                        data.mergeProp = function (prop) {
                            return mergeProps([prop], data.getProp());
                        };
                    }
                    _this4.bus.$emit("p:".concat(attr, ":").concat(_type, ":").concat(p.input ? 1 : 0), event, [data, rule, _this4.api]);
                });
            }
        });
    }
    function unique(arr) {
        return arr.filter(function (item, index, arr) {
            return arr.indexOf(item, 0) === index;
        });
    }
    function getComponent(p) {
        var c = p.components;
        if (Array.isArray(c)) return unique(c.filter(function (v) {
            return v !== '*';
        }));else if (is.String(c)) return [c];else return false;
    }

    function Handler(fc) {
        var _this = this;
        extend(this, {
            fc: fc,
            vm: fc.vm,
            watching: false,
            loading: false,
            reloading: false,
            noWatchFn: null,
            deferSyncFn: null,
            isMounted: false,
            formData: {},
            subForm: {},
            form: {},
            appendData: {},
            providers: {},
            cycleLoad: null,
            loadedId: 1,
            nextTick: null,
            changeStatus: false,
            pageEnd: true,
            nextReload: function nextReload() {
                _this.lifecycle('reload');
            }
        });
        funcProxy(this, {
            options: function options() {
                return fc.options;
            },
            bus: function bus() {
                return fc.bus;
            }
        });
        this.initData(fc.rules);
        this.$manager = new fc.manager(this);
        this.$render = new Render(this);
        this.api = fc.extendApi(Api(this), this);
    }
    extend(Handler.prototype, {
        initData: function initData(rules) {
            extend(this, {
                ctxs: {},
                fieldCtx: {},
                nameCtx: {},
                sort: [],
                rules: rules
            });
        },
        init: function init() {
            this.appendData = _objectSpread2(_objectSpread2(_objectSpread2({}, this.fc.options.formData || {}), this.vm.value || {}), this.appendData);
            this.useProvider();
            this.usePage();
            this.loadRule();
            this.$manager.__init();
            this.vm.$set(this.vm, 'formData', this.formData);
        }
    });
    useInject(Handler);
    usePage(Handler);
    useRender$1(Handler);
    useLoader(Handler);
    useInput(Handler);
    useContext(Handler);
    useLifecycle(Handler);
    useEffect(Handler);

    function getError(action, option, xhr) {
        var msg = "fail to ".concat(action, " ").concat(xhr.status, "'");
        var err = new Error(msg);
        err.status = xhr.status;
        err.url = action;
        return err;
    }
    function getBody(xhr) {
        var text = xhr.responseText || xhr.response;
        if (!text) {
            return text;
        }
        try {
            return JSON.parse(text);
        } catch (e) {
            return text;
        }
    }
    function fetch(option) {
        if (typeof XMLHttpRequest === 'undefined') {
            return;
        }
        var xhr = new XMLHttpRequest();
        var action = option.action;
        xhr.onerror = function error(e) {
            option.onError(e);
        };
        xhr.onload = function onload() {
            if (xhr.status < 200 || xhr.status >= 300) {
                return option.onError(getError(action, option, xhr), getBody(xhr));
            }
            option.onSuccess(getBody(xhr));
        };
        xhr.open(option.method || 'get', action, true);
        var formData;
        if (option.data) {
            if ((option.dataType || '').toLowerCase() !== 'json') {
                formData = new FormData();
                Object.keys(option.data).map(function (key) {
                    formData.append(key, option.data[key]);
                });
            } else {
                formData = JSON.stringify(option.data);
                xhr.setRequestHeader('content-type', 'application/json');
            }
        }
        if (option.withCredentials && 'withCredentials' in xhr) {
            xhr.withCredentials = true;
        }
        var headers = option.headers || {};
        Object.keys(headers).forEach(function (item) {
            if (headers[item] !== null) {
                xhr.setRequestHeader(item, headers[item]);
            }
        });
        xhr.send(formData);
    }

    var NAME$9 = 'fcFragment';
    var fragment = {
        name: NAME$9,
        functional: true,
        props: ['vnode'],
        render: function render(h, ctx) {
            return ctx.props.vnode ? ctx.props.vnode : ctx.children;
        }
    };

    function parseProp(prop) {
        if (is.String(prop)) return {
            domProps: {
                innerHTML: prop
            }
        };
        return prop;
    }
    function CreateNodeFactory() {
        var aliasMap = {};
        function CreateNode(vm) {
            vm && this.setVm(vm);
        }
        extend(CreateNode.prototype, {
            setVm: function setVm(vm) {
                this.vm = vm;
                this.$h = vm.$createElement;
            },
            make: function make(tag, data, children) {
                if (Vue.config.isReservedTag(tag) && data.nativeOn) delete data.nativeOn;
                return this.makeComponent(tag, data, children);
            },
            makeComponent: function makeComponent(type, data, children) {
                var Node = this.$h(type, parseProp(data), children || []);
                Node.context = this.vm;
                return Node;
            },
            aliasMap: aliasMap
        });
        extend(CreateNode, {
            aliasMap: aliasMap,
            alias: function alias(_alias, name) {
                aliasMap[_alias] = name;
            },
            use: function use(nodes) {
                Object.keys(nodes).forEach(function (k) {
                    var line = toLine(k);
                    var lower = toString(k).toLocaleLowerCase();
                    var v = nodes[k];
                    [k, line, lower].forEach(function (n) {
                        CreateNode.alias(k, v);
                        CreateNode.prototype[n] = function (data, children) {
                            return this.make(v, data, children);
                        };
                    });
                });
            }
        });
        return CreateNode;
    }

    function createManager(proto) {
        var CustomManager = function (_Manager) {
            _inherits(CustomManager, _Manager);
            var _super = _createSuper(CustomManager);
            function CustomManager() {
                _classCallCheck(this, CustomManager);
                return _super.apply(this, arguments);
            }
            return CustomManager;
        }(Manager);
        Object.assign(CustomManager.prototype, proto);
        return CustomManager;
    }
    function Manager(handler) {
        extend(this, {
            $handle: handler,
            vm: handler.vm,
            options: {},
            ref: 'fcForm',
            mergeOptionsRule: {
                normal: ['form', 'row', 'info', 'submitBtn', 'resetBtn']
            }
        });
        this.updateKey();
        this.init();
    }
    extend(Manager.prototype, {
        __init: function __init() {
            var _this = this;
            this.$render = this.$handle.$render;
            this.$r = function () {
                var _this$$render;
                return (_this$$render = _this.$render).renderRule.apply(_this$$render, arguments);
            };
        },
        updateKey: function updateKey() {
            this.key = uniqueId();
        },
        init: function init() {},
        update: function update() {},
        beforeRender: function beforeRender() {},
        form: function form() {
            return this.vm.$refs[this.ref];
        },
        mergeOptions: function mergeOptions(args, opt) {
            var _this2 = this;
            return mergeProps(args.map(function (v) {
                return _this2.tidyOptions(v);
            }), opt, this.mergeOptionsRule);
        },
        updateOptions: function updateOptions(options) {
            this.options = this.mergeOptions([options], this.getDefaultOptions());
            this.update();
        },
        tidyOptions: function tidyOptions(options) {
            return options;
        },
        tidyRule: function tidyRule(ctx) {},
        mergeProp: function mergeProp(ctx) {},
        getDefaultOptions: function getDefaultOptions() {
            return {};
        },
        render: function render(children) {}
    });

    var $fetch = {
        name: 'fetch',
        loaded: function loaded() {
            run.apply(void 0, arguments);
        },
        watch: function watch(inject, rule, api) {
            if (!run(inject, rule, api)) {
                inject.clearProp();
                api.sync(rule);
            }
        }
    };
    var $required = {
        name: 'required',
        load: function load(inject, rule, api) {
            var val = parseVal(inject.getValue());
            if (val.required === false) {
                inject.clearProp();
            } else {
                var validate = _objectSpread2({
                    required: true,
                    validator: function validator(_, v, call) {
                        is.empty(v) ? call(validate.message) : call();
                    }
                }, val);
                if (!validate.message) {
                    validate.message = rule.title + ' is required';
                }
                inject.getProp().validate = [validate];
            }
            api.sync(rule);
        },
        watch: function watch() {
            $required.load.apply($required, arguments);
        }
    };
    function parseVal(val) {
        if (is.Boolean(val)) {
            return {
                required: val
            };
        } else if (is.String(val)) {
            return {
                message: val
            };
        } else if (is.Function(val)) {
            return {
                validator: val
            };
        } else if (!is.Object(val)) {
            return {};
        } else {
            return val;
        }
    }
    function parseOpt(option) {
        if (is.String(option)) {
            option = {
                action: option,
                to: 'options'
            };
        }
        return option;
    }
    function run(inject, rule, api) {
        var option = inject.value;
        if (is.Function(option)) {
            option = option(rule, api);
        }
        option = parseOpt(option);
        if (!option || !option.action) {
            return false;
        }
        if (!option.to) {
            option.to = 'options';
        }
        var _onError = option.onError;
        var check = function check() {
            if (!inject.getValue()) {
                inject.clearProp();
                api.sync(rule);
                return true;
            }
        };
        var set = function set(val) {
            if (val === undefined) {
                inject.clearProp();
                api.sync(rule);
            } else {
                deepSet(inject.getProp(), option.to, val);
            }
        };
        invoke(function () {
            return fetch(_objectSpread2(_objectSpread2({}, option), {}, {
                onSuccess: function onSuccess(body) {
                    if (check()) return;
                    set((option.parse || function (v) {
                        return v.data;
                    })(body, rule, api));
                    api.sync(rule);
                },
                onError: function onError(e) {
                    set(undefined);
                    if (check()) return;
                    (_onError || function (e) {
                        return err(e.message || 'fetch fail ' + option.action);
                    })(e, rule, api);
                }
            }));
        });
        return true;
    }
    var $provider = {
        fetch: $fetch,
        required: $required
    };

    var name = 'html';
    var html = {
        name: name,
        loadChildren: false,
        render: function render(children, ctx) {
            if (!ctx.prop.domProps) ctx.prop.domProps = {};
            ctx.prop.domProps.innerHTML = children;
            return ctx.vNode.make(ctx.prop.props.tag || 'div', ctx.prop);
        },
        renderChildren: function renderChildren(ctx) {
            if (Array.isArray(ctx.rule.children)) {
                return ctx.rule.children.filter(function (v) {
                    return is.String(v);
                }).join('');
            }
            return '';
        }
    };

    var _vue = typeof window !== 'undefined' && window.Vue ? window.Vue : Vue;
    function _parseProp(name, id) {
        var prop;
        if (arguments.length === 2) {
            prop = arguments[1];
            id = prop[name];
        } else {
            prop = arguments[2];
        }
        return {
            id: id,
            prop: prop
        };
    }
    function nameProp() {
        return _parseProp.apply(void 0, ['name'].concat(Array.prototype.slice.call(arguments)));
    }
    function _getEl(options) {
        if (!options || !options.el) return window.document.body;
        return is.Element(options.el) ? options.el : document.querySelector(options.el);
    }
    function mountForm(rules, option) {
        var $vm = new _vue({
            data: function data() {
                return {
                    rule: rules,
                    option: option || {}
                };
            },
            render: function render(h) {
                return h('FormCreate', {
                    ref: 'fc',
                    props: this.$data
                });
            }
        });
        $vm.$mount();
        return $vm;
    }
    function exportAttrs(attrs) {
        var key = attrs.key || [];
        var array = attrs.array || [];
        var normal = attrs.normal || [];
        keyAttrs.push.apply(keyAttrs, _toConsumableArray(key));
        arrayAttrs.push.apply(arrayAttrs, _toConsumableArray(array));
        normalAttrs.push.apply(normalAttrs, _toConsumableArray(normal));
        appendProto([].concat(_toConsumableArray(key), _toConsumableArray(array), _toConsumableArray(normal)));
    }
    var id$1 = 1;
    var instance = {};
    function FormCreateFactory(config) {
        var components = _defineProperty({}, fragment.name, fragment);
        var parsers = {};
        var directives = {};
        var providers = _objectSpread2({}, $provider);
        var maker = makerFactory();
        var globalConfig = {
            global: {}
        };
        var data = {};
        var CreateNode = CreateNodeFactory();
        exportAttrs(config.attrs || {});
        function getApi(name) {
            var val = instance[name];
            if (Array.isArray(val)) return _toConsumableArray(val);
            return val;
        }
        function directive() {
            var data = nameProp.apply(void 0, arguments);
            if (data.id && data.prop) directives[data.id] = data.prop;
        }
        function register() {
            var data = nameProp.apply(void 0, arguments);
            if (data.id && data.prop) providers[data.id] = _objectSpread2(_objectSpread2({}, data.prop), {}, {
                name: data.id
            });
        }
        function componentAlias(alias) {
            CreateNode.use(alias);
        }
        function parser() {
            var data = nameProp.apply(void 0, arguments);
            if (!data.id || !data.prop) return;
            var name = toCase(data.id);
            var parser = data.prop;
            var base = parser.merge === true ? parsers[name] : undefined;
            parsers[name] = _objectSpread2(_objectSpread2({}, base || BaseParser), parser);
            maker[name] = creatorFactory(name);
            parser.maker && extend(maker, parser.maker);
        }
        function component(id, component) {
            var name;
            if (is.String(id)) {
                name = toCase(id);
                if (['form-create', 'formcreate'].indexOf(name) > -1) {
                    return $form();
                } else if (component === undefined) {
                    return components[name];
                }
            } else {
                name = toCase(id.name);
                component = id;
            }
            if (!name || !component) return;
            components[name] = component;
            if (component.formCreateParser) parser(name, component.formCreateParser);
        }
        function $form() {
            return _vue.extend($FormCreate(FormCreate));
        }
        function $vnode() {
            return _vue.extend(fragment);
        }
        function use(fn, opt) {
            if (is.Function(fn.install)) fn.install(create, opt);else if (is.Function(fn)) fn(create, opt);
            return this;
        }
        function create(rules, _opt, parent) {
            var $vm = mountForm(rules, _opt || {});
            var _this = $vm.$refs.fc.formCreate;
            _this.$parent = parent;
            _getEl(_this.options).appendChild($vm.$el);
            return _this.api();
        }
        function factory(inherit) {
            var _config = _objectSpread2({}, config);
            if (inherit) {
                _config.inherit = {
                    components: components,
                    parsers: parsers,
                    directives: directives,
                    providers: providers,
                    maker: maker,
                    data: data
                };
            } else {
                delete _config.inherit;
            }
            return FormCreateFactory(_config);
        }
        function FormCreate(vm, rules, options) {
            extend(this, {
                id: id$1++,
                vm: vm,
                create: create,
                manager: createManager(config.manager),
                parsers: parsers,
                providers: providers,
                rules: Array.isArray(rules) ? rules : [],
                name: vm.$options.propsData.name,
                inFor: vm.$options.propsData.inFor,
                prop: {
                    components: components,
                    directives: directives
                },
                CreateNode: CreateNode,
                bus: new _vue(),
                unwatch: null,
                options: options || {},
                extendApi: config.extendApi || function (api) {
                    return api;
                }
            });
            this.init();
            this.initOptions(this.options);
            if (this.name) {
                if (this.inFor) {
                    if (!instance[this.name]) instance[this.name] = [];
                    instance[this.name].push(this.api());
                } else {
                    instance[this.name] = this.api();
                }
            }
        }
        extend(FormCreate.prototype, {
            init: function init() {
                var _this2 = this;
                var vm = this.vm;
                var h = new Handler(this);
                this.$handle = h;
                vm.$f = h.api;
                vm.$emit('input', h.api);
                vm.$on('hook:created', function () {
                    if (_this2.isSub()) {
                        _this2.unwatch = vm.$watch(function () {
                            return vm.$pfc.option;
                        }, function () {
                            _this2.initOptions(_this2.options);
                            vm.$f.refresh();
                        }, {
                            deep: true
                        });
                        _this2.initOptions(_this2.options);
                    }
                    _this2.created();
                });
                vm.$on('hook:mounted', function () {
                    _this2.mounted();
                });
                vm.$on('hook:beforeDestroy', function () {
                    vm.destroyed = true;
                    _this2.unwatch && _this2.unwatch();
                    h.reloadRule([]);
                    if (_this2.name) {
                        if (_this2.inFor) {
                            var idx = instance[_this2.name].indexOf(_this2.api());
                            instance[_this2.name].splice(idx, 1);
                        } else {
                            delete instance[_this2.name];
                        }
                    }
                });
                vm.$on('hook:updated', function () {
                    h.bindNextTick(function () {
                        return _this2.bus.$emit('next-tick', h.api);
                    });
                });
            },
            isSub: function isSub() {
                return this.vm.$pfc && this.vm.extendOption;
            },
            initOptions: function initOptions(options) {
                this.options = _objectSpread2({
                    formData: {},
                    submitBtn: {},
                    resetBtn: {}
                }, deepCopy(globalConfig));
                if (this.isSub()) {
                    this.mergeOptions(this.options, this.vm.$pfc.$f.config || {}, true);
                }
                this.updateOptions(options);
            },
            mergeOptions: function mergeOptions(target, opt, parent) {
                opt = deepCopy(opt);
                parent && ['page', 'onSubmit', 'mounted', 'reload', 'formData', 'el'].forEach(function (n) {
                    delete opt[n];
                });
                if (opt.global) {
                    target.global = mergeGlobal(target.global, opt.global);
                    delete opt.global;
                }
                this.$handle.$manager.mergeOptions([opt], target);
                return target;
            },
            updateOptions: function updateOptions(options) {
                this.mergeOptions(this.options, options);
                this.$handle.$manager.updateOptions(this.options);
            },
            created: function created() {
                this.$handle.init();
                this.vm.$emit('created', this.api());
            },
            api: function api() {
                return this.$handle.api;
            },
            render: function render() {
                return this.$handle.render();
            },
            mounted: function mounted() {
                this.$handle.mounted();
            }
        });
        function useAttr(formCreate) {
            extend(formCreate, {
                version: config.version,
                ui: config.ui,
                data: data,
                maker: maker,
                component: component,
                directive: directive,
                register: register,
                $vnode: $vnode,
                parser: parser,
                use: use,
                factory: factory,
                componentAlias: componentAlias,
                copyRule: copyRule,
                copyRules: copyRules,
                fetch: fetch,
                $form: $form,
                parseFn: parseFn,
                parseJson: parseJson,
                toJson: toJson,
                getApi: getApi,
                init: function init(rules) {
                    var _opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    var $vm = mountForm(rules, _opt),
                        _this = $vm.$refs.fc.formCreate;
                    return {
                        mount: function mount($el) {
                            if ($el && is.Element($el)) _this.options.el = $el;
                            _getEl(_this.options).appendChild($vm.$el);
                            return _this.api();
                        },
                        remove: function remove() {
                            $vm.$el.parentNode && $vm.$el.parentNode.removeChild($vm.$el);
                        },
                        destroy: function destroy() {
                            this.remove();
                            $vm.$destroy();
                        },
                        $f: _this.api()
                    };
                }
            });
        }
        function useStatic(formCreate) {
            extend(formCreate, {
                create: create,
                install: function install(Vue, options) {
                    globalConfig = _objectSpread2(_objectSpread2({}, globalConfig), options || {});
                    if (Vue._installedFormCreate === true) return;
                    Vue._installedFormCreate = true;
                    _vue = Vue;
                    var $formCreate = function $formCreate(rules) {
                        var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        return create(rules, opt, this);
                    };
                    useAttr($formCreate);
                    Vue.prototype.$formCreate = $formCreate;
                    Vue.component('FormCreate', $form());
                    Vue.component('FcFragment', $vnode());
                }
            });
        }
        useAttr(create);
        useStatic(create);
        CreateNode.use({
            fragment: 'fcFragment'
        });
        parser(html);
        if (config.install) create.use(config);
        if (config.inherit) {
            var inherit = config.inherit;
            inherit.components && extend(components, inherit.components);
            inherit.parsers && extend(parsers, inherit.parsers);
            inherit.directives && extend(directives, inherit.directives);
            inherit.providers && extend(providers, inherit.providers);
            inherit.maker && extend(maker, inherit.maker);
            inherit.data && extend(data, inherit.data);
        }
        return create;
    }

    var DEFAULT_FORMATS = {
        date: 'yyyy-MM-dd',
        month: 'yyyy-MM',
        datetime: 'yyyy-MM-dd HH:mm:ss',
        timerange: 'HH:mm:ss',
        daterange: 'yyyy-MM-dd',
        monthrange: 'yyyy-MM',
        datetimerange: 'yyyy-MM-dd HH:mm:ss',
        year: 'yyyy'
    };
    var name$1 = 'datePicker';
    var datePicker = {
        name: name$1,
        maker: function () {
            return ['year', 'month', 'date', 'dates', 'week', 'datetime', 'datetimeRange', 'dateRange', 'monthRange'].reduce(function (initial, type) {
                initial[type] = creatorFactory(name$1, {
                    type: type.toLowerCase()
                });
                return initial;
            }, {});
        }(),
        mergeProp: function mergeProp(ctx) {
            var props = ctx.prop.props;
            if (!props.valueFormat) {
                props.valueFormat = DEFAULT_FORMATS[props.type] || DEFAULT_FORMATS['date'];
            }
        }
    };

    var name$2 = 'hidden';
    var hidden = {
        name: name$2,
        maker: _defineProperty({}, name$2, function (field, value) {
            return creatorFactory(name$2)('', field, value);
        }),
        render: function render() {
            return [];
        }
    };

    var name$3 = 'input';
    var input = {
        name: name$3,
        maker: function () {
            var maker = ['password', 'url', 'email', 'text', 'textarea'].reduce(function (maker, type) {
                maker[type] = creatorFactory(name$3, {
                    type: type
                });
                return maker;
            }, {});
            maker.idate = creatorFactory(name$3, {
                type: 'date'
            });
            return maker;
        }(),
        mergeProp: function mergeProp(ctx) {
            var props = ctx.prop.props;
            if (props && props.autosize && props.autosize.minRows) {
                props.rows = props.autosize.minRows || 2;
            }
        }
    };

    var name$4 = 'slider';
    var slider = {
        name: name$4,
        maker: {
            sliderRange: creatorFactory(name$4, {
                range: true
            })
        },
        toFormValue: function toFormValue(value, ctx) {
            var isArr = Array.isArray(value),
                props = ctx.prop.props,
                min = props.min || 0,
                parseValue;
            if (props.range === true) {
                parseValue = isArr ? value : [min, parseFloat(value) || min];
            } else {
                parseValue = isArr ? parseFloat(value[0]) || min : parseFloat(value);
            }
            return parseValue;
        }
    };

    var name$5 = 'timePicker';
    var timePicker = {
        name: name$5,
        maker: {
            time: creatorFactory(name$5, function (m) {
                return m.props.isRange = false;
            }),
            timeRange: creatorFactory(name$5, function (m) {
                return m.props.isRange = true;
            })
        },
        mergeProp: function mergeProp(ctx) {
            var props = ctx.prop.props;
            if (!props.valueFormat) {
                props.valueFormat = 'HH:mm:ss';
            }
        }
    };

    var row = {
        name: 'FcRow',
        render: function render(_, ctx) {
            return ctx.vNode.col({
                props: {
                    span: 24
                }
            }, [ctx.vNode.row(ctx.prop, _)]);
        }
    };

    var name$6 = 'select';
    var select = {
        name: name$6,
        toFormValue: function toFormValue(value, ctx) {
            if (ctx.prop.props.multiple && !Array.isArray(value)) {
                return toArray(value);
            } else {
                return value;
            }
        }
    };

    var parsers = [datePicker, hidden, input, slider, timePicker, row, select];

    var PRE = 'el';
    var alias = {
        button: PRE + 'Button',
        icon: 'i',
        slider: PRE + 'Slider',
        rate: PRE + 'Rate',
        upload: 'fcUpload',
        cascader: PRE + 'Cascader',
        popover: PRE + 'Popover',
        tooltip: PRE + 'Tooltip',
        colorPicker: PRE + 'ColorPicker',
        timePicker: PRE + 'TimePicker',
        timeSelect: PRE + 'TimeSelect',
        datePicker: PRE + 'DatePicker',
        'switch': PRE + 'Switch',
        select: 'fcSelect',
        checkbox: 'fcCheckbox',
        radio: 'fcRadio',
        inputNumber: PRE + 'InputNumber',
        number: PRE + 'InputNumber',
        input: PRE + 'Input',
        formItem: PRE + 'FormItem',
        form: PRE + 'Form',
        frame: 'fcFrame',
        col: PRE + 'Col',
        row: PRE + 'Row',
        tree: 'fcTree',
        autoComplete: PRE + 'Autocomplete',
        auto: PRE + 'Autocomplete',
        group: 'fcGroup',
        object: 'fcSubForm',
        subForm: 'fcSubForm'
    };

    function getConfig() {
        return {
            form: {
                inline: false,
                labelPosition: 'right',
                labelWidth: '125px',
                disabled: false,
                size: undefined
            },
            row: {
                show: true,
                gutter: 0
            },
            submitBtn: {
                type: 'primary',
                loading: false,
                disabled: false,
                innerText: '提交',
                show: true,
                col: undefined,
                click: undefined
            },
            resetBtn: {
                type: 'default',
                loading: false,
                disabled: false,
                icon: 'el-icon-refresh',
                innerText: '重置',
                show: false,
                col: undefined,
                click: undefined
            }
        };
    }

    function isTooltip(info) {
        return info.type === 'tooltip';
    }
    var upperCaseReg = /[A-Z]/;
    function isAttr(name, value) {
        return !upperCaseReg.test(name) && (is.String(value) || is.Number(value));
    }
    function tidy(props, name) {
        if (!hasProperty(props, name)) return;
        if (is.String(props[name])) {
            var _props$name;
            props[name] = (_props$name = {}, _defineProperty(_props$name, name, props[name]), _defineProperty(_props$name, "show", true), _props$name);
        }
    }
    function isFalse(val) {
        return val === false;
    }
    function tidyBool(opt, name) {
        if (hasProperty(opt, name) && !is.Object(opt[name])) {
            opt[name] = {
                show: !!opt[name]
            };
        }
    }
    var manager = {
        validate: function validate(call) {
            this.form().validate(call);
        },
        validateField: function validateField(field, call) {
            this.form().validateField(field, call);
        },
        clearValidateState: function clearValidateState(ctx) {
            var fItem = this.vm.$refs[ctx.wrapRef];
            if (fItem) {
                fItem.validateMessage = '';
                fItem.validateState = '';
            }
        },
        tidyOptions: function tidyOptions(options) {
            ['submitBtn', 'resetBtn', 'row', 'info', 'wrap', 'col'].forEach(function (name) {
                tidyBool(options, name);
            });
            return options;
        },
        tidyRule: function tidyRule(_ref) {
            var prop = _ref.prop;
            tidy(prop, 'title');
            tidy(prop, 'info');
            return prop;
        },
        mergeProp: function mergeProp(ctx) {
            var props = ctx.prop.props;
            ctx.prop = mergeProps([{
                attrs: Object.keys(props).reduce(function (initial, val) {
                    if (isAttr(val, props[val])) initial[val] = props[val];
                    return initial;
                }, {}),
                info: this.options.info || {},
                wrap: this.options.wrap || {},
                col: this.options.col || {}
            }, ctx.prop], {
                info: {
                    trigger: 'hover',
                    placement: 'top-start',
                    icon: 'el-icon-warning'
                },
                title: {},
                col: {
                    span: 24
                },
                wrap: {}
            }, {
                normal: ['title', 'info', 'col', 'wrap']
            });
        },
        getDefaultOptions: function getDefaultOptions() {
            return getConfig();
        },
        update: function update() {
            var form = this.options.form;
            this.rule = {
                props: _objectSpread2({}, form),
                nativeOn: {
                    submit: function submit(e) {
                        e.preventDefault();
                    }
                },
                "class": [form.className, form["class"], 'form-create'],
                style: form.style,
                type: 'form'
            };
        },
        beforeRender: function beforeRender() {
            var key = this.key,
                ref = this.ref,
                $handle = this.$handle;
            extend(this.rule, {
                key: key,
                ref: ref
            });
            extend(this.rule.props, {
                model: $handle.formData,
                rules: $handle.validate()
            });
        },
        render: function render(children) {
            if (children.length) {
                children.push(this.makeFormBtn());
            }
            return this.$r(this.rule, isFalse(this.options.row.show) ? children : [this.makeRow(children)]);
        },
        makeWrap: function makeWrap(ctx, children) {
            var rule = ctx.prop;
            var uni = "".concat(this.key).concat(ctx.key);
            var col = rule.col;
            var isTitle = this.isTitle(rule);
            var labelWidth = !col.labelWidth && !isTitle ? 0 : col.labelWidth;
            var _this$rule$props = this.rule.props,
                inline = _this$rule$props.inline,
                _col = _this$rule$props.col;
            var item = isFalse(rule.wrap.show) ? children : this.$r(mergeProps([rule.wrap, {
                props: _objectSpread2(_objectSpread2({
                    labelWidth: labelWidth === void 0 ? labelWidth : toString(labelWidth),
                    label: isTitle ? rule.title.title : undefined
                }, rule.wrap || {}), {}, {
                    prop: ctx.id,
                    rules: rule.validate
                }),
                "class": rule.className,
                key: "".concat(uni, "fi"),
                ref: ctx.wrapRef,
                type: 'formItem'
            }]), [children, isTitle ? this.makeInfo(rule, uni) : null]);
            return inline === true || isFalse(_col) || isFalse(col.show) ? item : this.makeCol(rule, uni, [item]);
        },
        isTitle: function isTitle(rule) {
            if (this.options.form.title === false) return false;
            var title = rule.title;
            return !(!title.title && !title["native"] || isFalse(title.show));
        },
        makeInfo: function makeInfo(rule, uni) {
            var titleProp = rule.title;
            var infoProp = rule.info;
            var isTip = isTooltip(infoProp);
            var form = this.options.form;
            var children = [(titleProp.title || '') + (form.labelSuffix || form['label-suffix'] || '')];
            if (!isFalse(infoProp.show) && (infoProp.info || infoProp["native"]) && !isFalse(infoProp.icon)) {
                var prop = {
                    type: infoProp.type || 'popover',
                    props: _objectSpread2({}, infoProp),
                    key: "".concat(uni, "pop"),
                    slot: 'label'
                };
                var field = 'content';
                if (infoProp.info && !hasProperty(prop.props, field)) {
                    prop.props[field] = infoProp.info;
                }
                children[infoProp.align !== 'left' ? 'unshift' : 'push'](this.$r(mergeProps([infoProp, prop]), [this.$r({
                    type: 'i',
                    slot: isTip ? 'default' : 'reference',
                    "class": infoProp.icon === true ? 'el-icon-warning' : infoProp.icon,
                    key: "".concat(uni, "i")
                })]));
            }
            return this.$r(mergeProps([titleProp, {
                props: titleProp,
                slot: titleProp.slot || 'label',
                key: "".concat(uni, "tit"),
                type: titleProp.type || 'span'
            }]), children);
        },
        makeCol: function makeCol(rule, uni, children) {
            var col = rule.col;
            return this.$r({
                "class": col["class"],
                type: 'col',
                props: col || {
                    span: 24
                },
                key: "".concat(uni, "col")
            }, children);
        },
        makeRow: function makeRow(children) {
            var row = this.options.row || {};
            return this.$r({
                type: 'row',
                props: row,
                "class": row["class"],
                key: "".concat(this.key, "row")
            }, children);
        },
        makeFormBtn: function makeFormBtn() {
            var vn = [];
            if (!isFalse(this.options.submitBtn.show)) {
                vn.push(this.makeSubmitBtn());
            }
            if (!isFalse(this.options.resetBtn.show)) {
                vn.push(this.makeResetBtn());
            }
            if (!vn.length) {
                return;
            }
            var item = this.$r({
                type: 'formItem',
                key: "".concat(this.key, "fb")
            }, vn);
            return this.rule.props.inline === true ? item : this.$r({
                type: 'col',
                props: {
                    span: 24
                },
                key: "".concat(this.key, "fc")
            }, [item]);
        },
        makeResetBtn: function makeResetBtn() {
            var _this = this;
            var resetBtn = this.options.resetBtn;
            return this.$r({
                type: 'button',
                props: resetBtn,
                style: {
                    width: resetBtn.width
                },
                on: {
                    click: function click() {
                        var fApi = _this.$handle.api;
                        resetBtn.click ? resetBtn.click(fApi) : fApi.resetFields();
                    }
                },
                key: "".concat(this.key, "b2")
            }, [resetBtn.innerText]);
        },
        makeSubmitBtn: function makeSubmitBtn() {
            var _this2 = this;
            var submitBtn = this.options.submitBtn;
            return this.$r({
                type: 'button',
                props: submitBtn,
                style: {
                    width: submitBtn.width
                },
                on: {
                    click: function click() {
                        var fApi = _this2.$handle.api;
                        submitBtn.click ? submitBtn.click(fApi) : fApi.submit();
                    }
                },
                key: "".concat(this.key, "b1")
            }, [submitBtn.innerText]);
        }
    };

    var maker = {};
    useAlias(maker);
    useSelect(maker);
    useTree(maker);
    useUpload(maker);
    useFrame(maker);
    function useAlias(maker) {
        ['group', 'tree', 'switch', 'upload', 'autoComplete', 'checkbox', 'cascader', 'colorPicker', 'datePicker', 'frame', 'inputNumber', 'radio', 'rate'].forEach(function (name) {
            maker[name] = creatorFactory(name);
        });
        maker.auto = maker.autoComplete;
        maker.number = maker.inputNumber;
        maker.color = maker.colorPicker;
    }
    function useSelect(maker) {
        var select = 'select';
        var multiple = 'multiple';
        maker['selectMultiple'] = creatorFactory(select, _defineProperty({}, multiple, true));
        maker['selectOne'] = creatorFactory(select, _defineProperty({}, multiple, false));
    }
    function useTree(maker) {
        var name = 'tree';
        var types = {
            'treeSelected': 'selected',
            'treeChecked': 'checked'
        };
        Object.keys(types).reduce(function (m, key) {
            m[key] = creatorFactory(name, {
                type: types[key]
            });
            return m;
        }, maker);
    }
    function useUpload(maker) {
        var name = 'upload';
        var types = {
            image: ['image', 0],
            file: ['file', 0],
            uploadFileOne: ['file', 1],
            uploadImageOne: ['image', 1]
        };
        Object.keys(types).reduce(function (m, key) {
            m[key] = creatorFactory(name, function (m) {
                return m.props({
                    uploadType: types[key][0],
                    maxLength: types[key][1]
                });
            });
            return m;
        }, maker);
        maker.uploadImage = maker.image;
        maker.uploadFile = maker.file;
    }
    function useFrame(maker) {
        var types = {
            frameInputs: ['input', 0],
            frameFiles: ['file', 0],
            frameImages: ['image', 0],
            frameInputOne: ['input', 1],
            frameFileOne: ['file', 1],
            frameImageOne: ['image', 1]
        };
        Object.keys(types).reduce(function (maker, key) {
            maker[key] = creatorFactory('frame', function (m) {
                return m.props({
                    type: types[key][0],
                    maxLength: types[key][1]
                });
            });
            return maker;
        }, maker);
        maker.frameInput = maker.frameInputs;
        maker.frameFile = maker.frameFiles;
        maker.frameImage = maker.frameImages;
        return maker;
    }

    var css_248z$2 = ".form-create .form-create .el-form-item {\n    margin-bottom: 22px;\n}\n\n.form-create .form-create .el-form-item .el-form-item {\n    margin-bottom: 0px;\n}\n";
    styleInject(css_248z$2);

    function tidyBtnProp(btn, def) {
        if (is.Boolean(btn)) btn = {
            show: btn
        };else if (!is.Undef(btn) && !is.Object(btn)) btn = {
            show: def
        };
        return btn;
    }
    function extendApi(api, h) {
        extend(api, {
            validate: function validate(callback) {
                var flag;
                var forms = api.children;
                var len = forms.length;
                var validate = function validate() {
                    h.$manager.validate(function () {
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }
                        if (!args[0] || !flag) {
                            flag = args;
                        }
                        callback && callback.apply(void 0, _toConsumableArray(flag));
                    });
                };
                var validFn = function validFn(args) {
                    setTimeout(function () {
                        if (!args[0]) {
                            if (!flag) {
                                flag = args;
                            }
                        }
                        if (! --len) {
                            validate();
                        }
                    });
                };
                forms.forEach(function (form) {
                    form.validate(function () {
                        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                            args[_key2] = arguments[_key2];
                        }
                        return validFn(args);
                    });
                });
                if (!len) {
                    validate();
                }
            },
            validateField: function validateField(field, callback) {
                var ctx = h.getFieldCtx(field);
                if (!ctx) return;
                var sub = h.subForm[ctx.id];
                var len = 0;
                var flag;
                var validate = function validate() {
                    h.$manager.validateField(ctx.id, function () {
                        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                            args[_key3] = arguments[_key3];
                        }
                        if (args[0]) {
                            flag = args;
                        } else if (flag) {
                            return callback && callback('子表单验证未通过', flag[1]);
                        }
                        callback && callback.apply(void 0, _toConsumableArray(flag || args));
                    });
                };
                var validFn = function validFn(args) {
                    setTimeout(function () {
                        if (!args[0]) {
                            if (!flag) {
                                flag = args;
                            }
                        }
                        if (! --len) {
                            validate();
                        }
                    });
                };
                sub && toArray(sub).forEach(function (form) {
                    len++;
                    form.validate(function () {
                        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                            args[_key4] = arguments[_key4];
                        }
                        return validFn(args);
                    });
                });
                if (!len) {
                    validate();
                }
            },
            clearValidateState: function clearValidateState(fields) {
                var _this = this;
                var clearSub = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                api.helper.tidyFields(fields).forEach(function (field) {
                    if (clearSub) _this.clearSubValidateState(field);
                    h.getCtxs(field).forEach(function (ctx) {
                        h.$manager.clearValidateState(ctx);
                    });
                });
            },
            clearSubValidateState: function clearSubValidateState(fields) {
                api.helper.tidyFields(fields).forEach(function (field) {
                    h.getCtxs(field).forEach(function (ctx) {
                        var subForm = h.subForm[ctx.id];
                        if (!subForm) return;
                        if (Array.isArray(subForm)) {
                            subForm.forEach(function (form) {
                                form.clearValidateState();
                            });
                        } else if (subForm) {
                            subForm.clearValidateState();
                        }
                    });
                });
            },
            btn: {
                loading: function loading() {
                    var _loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                    api.submitBtnProps({
                        loading: !!_loading
                    });
                },
                disabled: function disabled() {
                    var _disabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                    api.submitBtnProps({
                        disabled: !!_disabled
                    });
                },
                show: function show() {
                    var isShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                    api.submitBtnProps({
                        show: !!isShow
                    });
                }
            },
            resetBtn: {
                loading: function loading() {
                    var _loading2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                    api.resetBtnProps({
                        loading: !!_loading2
                    });
                },
                disabled: function disabled() {
                    var _disabled2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                    api.resetBtnProps({
                        disabled: !!_disabled2
                    });
                },
                show: function show() {
                    var isShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                    api.resetBtnProps({
                        show: !!isShow
                    });
                }
            },
            submitBtnProps: function submitBtnProps() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var btn = tidyBtnProp(h.options.submitBtn, true);
                extend(btn, props);
                h.options.submitBtn = btn;
                api.refreshOptions();
            },
            resetBtnProps: function resetBtnProps() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var btn = tidyBtnProp(h.options.resetBtn, false);
                extend(btn, props);
                h.options.resetBtn = btn;
                api.refreshOptions();
            },
            submit: function submit(successFn, failFn) {
                var _arguments = arguments,
                    _this2 = this;
                api.validate(function (valid) {
                    if (valid) {
                        var formData = api.formData();
                        if (is.Function(successFn)) invoke(function () {
                            return successFn(formData, _this2);
                        });else {
                            is.Function(h.options.onSubmit) && invoke(function () {
                                return h.options.onSubmit(formData, _this2);
                            });
                            h.vm.$emit('submit', formData, _this2);
                        }
                    } else {
                        is.Function(failFn) && invoke(function () {
                            return failFn.apply(void 0, [_this2].concat(_toConsumableArray(_arguments)));
                        });
                    }
                });
            }
        });
        return api;
    }

    function install(FormCreate) {
        FormCreate.componentAlias(alias);
        components.forEach(function (component) {
            FormCreate.component(component.name, component);
        });
        parsers.forEach(function (parser) {
            FormCreate.parser(parser);
        });
        Object.keys(maker).forEach(function (name) {
            FormCreate.maker[name] = maker[name];
        });
    }
    function elmFormCreate() {
        return FormCreateFactory({
            ui: "".concat("element-ui"),
            version: "".concat("2.5.22"),
            manager: manager,
            extendApi: extendApi,
            install: install,
            attrs: {
                normal: ['col', 'wrap'],
                array: ['className'],
                key: ['title', 'info']
            }
        });
    }

    var FormCreate = elmFormCreate();
    if (typeof window !== 'undefined') {
        window.formCreate = FormCreate;
        if (window.Vue) {
            FormCreate.install(window.Vue);
        }
    }
    var maker$1 = FormCreate.maker;

    exports.default = FormCreate;
    exports.maker = maker$1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));