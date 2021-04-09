"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cn(classes) {
    var slots = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        slots[_i - 1] = arguments[_i];
    }
    var result = [];
    for (var i = 0; i < classes.length; i++) {
        var string = classes[i].replace(/\s\s+/g, " ");
        var slot = slots[i];
        if (typeof slot === "object") {
            var previous = string.split(" ");
            var root = previous.pop() || "";
            result.push.apply(result, previous);
            var keys = Object.keys(slot);
            for (var k = 0; k < keys.length; k++) {
                var key = keys[k];
                var value = slot[key];
                if (value) {
                    result.push("" + root + key);
                }
            }
        }
        else if (typeof slot === "string" || typeof slot === "number") {
            result.push(string);
            result.push(slot);
        }
        else {
            result.push(string);
        }
    }
    return result
        .join(" ")
        .split(" ")
        .filter(function (s) { return s !== ""; })
        .join(" ");
}
exports.default = cn;
