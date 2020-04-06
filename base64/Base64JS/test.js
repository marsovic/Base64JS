var assert = require('assert');

const {
    to_ascii,
    to_binary8,
    to_binary6,
    final_value
} = require('./functions');

describe('Conversion to Ascii', function() {
    it("Should return the ascii value of each char.", function () {
        assert.equal(to_ascii("a"), 97);
        assert.deepEqual(to_ascii("ace"), [97, 99, 101]);
    });
})

describe('Conversion to Binary in group of 8 bits', function() {
    it("Should return the binary value of each char.", function () {
        assert.equal(to_binary8([97]), "01100001");
        assert.equal(to_binary8([97,99,101]), "011000010110001101100101");
    });
})

describe('Conversion in group of 6 bits', function() {
    it("Should return the group of 6 binary bit and add 0 if the length of the last packet is smaller than 6.", function () {
        assert.deepEqual(to_binary6("011000010110001101100101"), ["011000","010110", "001101", "100101"]);
        assert.deepEqual(to_binary6("0110001"), ["011000", "100000"]);
    });
})

describe('Get the char in Base 64', function() {
    it("Should return the encoded message", function () {
        assert.deepEqual(final_value(["100000"]), "g");
        assert.deepEqual(final_value(["011000","010110", "001101", "100101"]), "YWNl");
    });
})