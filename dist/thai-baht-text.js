"use strict";
var MAX_POSITION = 6;
var UNIT_POSITION = 0;
var TEN_POSITION = 1;
var PRIMARY_UNIT = 'บาท';
var SECONDARY_UNIT = 'สตางค์';
var WHOLE_NUMBER_TEXT = 'ถ้วน';
var NUMBER_TEXTS = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า', 'สิบ'];
var UNIT_TEXTS = ['สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน'];
var getIntegerDigits = function (numberStringInput) { return parseInt(numberStringInput.split('.')[0], 10); };
var getFractionalDigits = function (numberStringInput) { return parseInt(numberStringInput.split('.')[1], 10); };
var hasFractionalDigits = function (numberInput) { return numberInput !== undefined && numberInput !== 0; };
function isZeroValue(input) {
    return parseInt("".concat(input), 10) === 0;
}
var isUnitPosition = function (position) { return position == UNIT_POSITION; };
var isTenPosition = function (position) { return position % MAX_POSITION == TEN_POSITION; };
var isMillionsPosition = function (position) { return (position >= MAX_POSITION && position % MAX_POSITION == 0); };
var isLastPosition = function (position, lengthOfDigits) { return position + 1 < lengthOfDigits; };
var reverseNumber = function (number) {
    var numberStr = number.toString();
    return numberStr.split('').reverse().join('');
};
var getBathUnit = function (position, number) {
    var unitText = '';
    if (!isUnitPosition(position)) {
        unitText = UNIT_TEXTS[Math.abs(position - 1) % MAX_POSITION];
    }
    if (isZeroValue(number) && !isMillionsPosition(position)) {
        unitText = '';
    }
    return unitText;
};
var getBathText = function (position, number, lengthOfDigits) {
    var _number = parseInt(number, 10);
    var numberText = NUMBER_TEXTS[_number];
    if (isZeroValue(_number)) {
        return '';
    }
    if (isTenPosition(position) && _number == 1) {
        numberText = '';
    }
    if (isTenPosition(position) && _number == 2) {
        numberText = 'ยี่';
    }
    if (isMillionsPosition(position) && isLastPosition(position, lengthOfDigits) && _number == 1) {
        numberText = 'เอ็ด';
    }
    if (lengthOfDigits == 2 && isLastPosition(position, lengthOfDigits) && _number == 1) {
        numberText = 'เอ็ด';
    }
    if (lengthOfDigits > 1 && isUnitPosition(position) && _number == 1) {
        numberText = 'เอ็ด';
    }
    return numberText;
};
var convert = function (numberInput) {
    var numberReverse = reverseNumber(numberInput);
    var textOutput = '';
    numberReverse.split('')
        .forEach(function (number, i) {
        textOutput = "".concat(getBathText(i, number, numberReverse.length)).concat(getBathUnit(i, number)).concat(textOutput);
    });
    return textOutput;
};
var parseFloatWithPrecision = function (number, precision) {
    if (precision === void 0) { precision = 2; }
    var numberFloatStr = parseFloat(number).toString().split('.');
    var integerUnitStr = numberFloatStr[0];
    var fractionalUnitStr = (numberFloatStr.length == 2) ? numberFloatStr[1].substring(0, precision) : '00';
    return parseFloat("".concat(integerUnitStr, ".").concat(fractionalUnitStr)).toFixed(precision);
};
var convertFullMoney = function (numberInput) {
    var numberStr = parseFloatWithPrecision(numberInput);
    var integerDigits = getIntegerDigits(numberStr);
    var fractionalDigits = getFractionalDigits(numberStr);
    var intTextOutput = convert(integerDigits);
    var textOutput = [];
    if (intTextOutput) {
        textOutput.push("".concat([intTextOutput, PRIMARY_UNIT].join('')));
    }
    if (intTextOutput && !hasFractionalDigits(fractionalDigits)) {
        textOutput.push(WHOLE_NUMBER_TEXT);
    }
    if (hasFractionalDigits(fractionalDigits) && convert(fractionalDigits)) {
        textOutput.push("".concat([convert(fractionalDigits), SECONDARY_UNIT].join('')));
    }
    return textOutput.join('');
};
function ThaiBahtText(input) {
    if (isNaN(Number("".concat(input)))) {
        throw new TypeError('Invalid input. Expected a number or a string representing a number.');
    }
    return convertFullMoney("".concat(input));
}
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = ThaiBahtText;
    exports.ThaiBahtText = ThaiBahtText;
    exports.THBText = ThaiBahtText;
    exports.default = ThaiBahtText;
}
else {
    window.ThaiBahtText = ThaiBahtText;
    window.THBText = window.ThaiBahtText;
}
//# sourceMappingURL=thai-baht-text.js.map