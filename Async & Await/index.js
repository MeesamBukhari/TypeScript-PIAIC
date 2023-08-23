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
function wait(timeToWait) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(resolve);
        }, timeToWait);
    });
}
function app() {
    return __awaiter(this, void 0, void 0, function* () {
        yield wait(400);
        console.log("I waited for 4 seconds");
        yield wait(100);
        console.log("I waited for 1 second");
        yield wait(1000);
        console.log("I waited for 10 seconds");
    });
}
app();
