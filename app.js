#!/usr/bin/env node

var MicroGear = require('microgear');
var num = 0;

const KEY    = "tQlDc7PcL424Ym8";
const SECRET = "ikjXn3nTA4kLg3oh1nQww2giS";
const APPID     = "AppSpy";

var microgear = MicroGear.create({
    key : KEY,
    secret : SECRET
});

microgear.on('connected', function() {
    //num = Math.random();
    console.log('Connected...');
    microgear.setalias("mygear");
    setInterval(function() {
    num = Math.random();
        microgear.chat('mygear',num.toString());
    },1000);
});

microgear.on('message', function(topic,body) {
    console.log('incoming : '+topic+' : '+body);
});

microgear.on('closed', function() {
    console.log('Closed...');
});

microgear.connect(APPID);
