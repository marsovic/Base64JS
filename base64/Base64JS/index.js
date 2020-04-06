
const {
    to_ascii,
    to_binary8,
    to_binary6,
    final_value
} = require('./functions');

//Message to encode
var MessageToEncode = "Coucou";


if(MessageToEncode != null) {
    var tab = to_ascii(MessageToEncode);
    var bit8 = to_binary8(tab);
    var bit6 = to_binary6(bit8);
    var encoded = final_value(bit6);
    console.log("Message to Encode : " + MessageToEncode);
    console.log("Encoded message in Base64: " + encoded);
}

