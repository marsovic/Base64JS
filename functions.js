
exports.to_ascii = (message)=> {
    var tab = [];
    for(var i = 0; i < message.length; i++)
    {
        tab.push(message.charCodeAt(i));
    }

    return tab;
}

exports.to_binary8 = (message)=> {
    var tab = "";
    for(var i = 0; i < message.length; i++)
    {
        if(message[i].toString(2).length == 8) {
            tab += message[i].toString(2);
        } else {
            for(var j = 0 ; j < 8 - message[i].toString(2).length; j ++){
                tab += "0";
            }
            tab += message[i].toString(2);
        }
    }
    return tab;
}

exports.to_binary6 = (message)=> {
    var tab = "";
    var fin =[];

    if(message.length%6 == 0 ) {
        for (var i = 0; i < Math.floor(message.length/6); i++) {
            tab += message[6*i] + message[6*i + 1] + message[6*i + 2] + message[6*i + 3] + message[6*i + 4] + message[6*i + 5];
            fin.push(tab);
            tab = "";
        }

    } else {
        for (var i = 0; i < Math.floor(message.length/6) ; i++) {
            tab += message[6*i] + message[6*i + 1] + message[6*i + 2] + message[6*i + 3] + message[6*i + 4] + message[6*i + 5];
            fin.push(tab);
            tab = "";
        }

        var longueur = (message.length) - Math.floor(message.length/6) *6;

        for(var i = 0; i < longueur; i++) {
            tab += message[i + Math.floor(message.length/6) *6];
        }

        for(var i = 0; i < 6-longueur; i++) {
            tab += "0";
        }

        fin.push(tab);
        tab = "";
    }
    return fin;
}

exports.final_value = (message)=> {
    var fin ="";
    var table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    message.forEach(c => {
        var temp = parseInt(c, 2);
        fin += table[temp.toString(10)];
    })
    return fin;
}
