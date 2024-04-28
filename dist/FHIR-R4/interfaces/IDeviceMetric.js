"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceMetric = void 0;
var DeviceMetric;
(function (DeviceMetric) {
    DeviceMetric.OperationalStatusEnum = {
        On: 'on',
        Off: 'off',
        Standby: 'standby',
        EnteredInError: 'entered-in-error'
    };
    DeviceMetric.ColorEnum = {
        Black: 'black',
        Red: 'red',
        Green: 'green',
        Yellow: 'yellow',
        Blue: 'blue',
        Magenta: 'magenta',
        Cyan: 'cyan',
        White: 'white'
    };
    DeviceMetric.CategoryEnum = {
        Measurement: 'measurement',
        Setting: 'setting',
        Calculation: 'calculation',
        Unspecified: 'unspecified'
    };
})(DeviceMetric = exports.DeviceMetric || (exports.DeviceMetric = {}));
