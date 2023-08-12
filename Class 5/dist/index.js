"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var sum_js_1 = __importDefault(require("./sum.js"));
var subtract_js_1 = __importDefault(require("./subtract.js"));
var multiply_js_1 = __importDefault(require("./multiply.js"));
console.log(sum_js_1["default"](15, 20));
console.log(subtract_js_1["default"](20, 10));
console.log(multiply_js_1["default"](5, 10));
// =>Inquirer Package
var inquirer_1 = __importDefault(require("inquirer"));
var answers = await inquirer_1["default"].prompt([
    {
        name: "username",
        type: "string",
        message: "Enter your name:"
    },
    {
        name: "email",
        type: "string",
        message: "Enter your email:"
    },
    {
        name: "contact",
        type: "number",
        message: "Enter your contact number:"
    },
]);
console.log(answers);
// console.log(`Hello ${answers.username}! How are you?`);
// =>Chalk Package
var chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1["default"].green("Hello World"));
console.log("Hello World");
console.log(chalk_1["default"].bgYellow("Hello World"));
console.log("Hello", chalk_1["default"].underline.bgBlue("World") + "!");
// =>Node Banner Package
var node_banner_1 = __importDefault(require("node-banner"));
// let display = showBanner("Hello World!", "This is created using 'Node-Banner' Package");
// console.log(display);
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, node_banner_1["default"]('The Title', 'This is a suitable tagline')];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
