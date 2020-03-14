"use strict";

const DEFAULT_INTERVAL = 250;
var animationInterval = DEFAULT_INTERVAL;
var startAnimationIntervalId = null;
var text = null;
var index = 0;
var frames = null;

function animationChanged() {
    var textarea = document.getElementById("text-area");
    var animation = document.getElementById("animation");
    var animationTxt = ANIMATIONS[animation.value];
    frames = animationTxt.split("=====\n");
    index = 0;
}

function fontSizeChanged() {
    var fontSize = document.getElementById("fontsize");
    document.getElementById("text-area").style.fontSize = fontSize.value;
}

function speedChanged() {
    var speed = document.getElementById("turbo");
    animationInterval = speed.checked ? 50 : DEFAULT_INTERVAL;
    var tmpText = text;
    startAnimationInterval();
    text = tmpText;
}

function startAnimationInterval() {
    var textarea = document.getElementById("text-area");
    text = textarea.value;

    if (startAnimationIntervalId) {
        clearInterval(startAnimationIntervalId);
    }
    if (!frames) {
        return;
    }
    startAnimationIntervalId = setInterval(function() {
        textarea.value = frames[index++];
        if (index === frames.length) {
            index = 0;
        }
    }, animationInterval);
}

function stopAnimationInterval() {
    if (!startAnimationIntervalId) {
        return;
    }
    clearInterval(startAnimationIntervalId);
    var textarea = document.getElementById("text-area");
    textarea.value = text;
}

function onStartBtnClick() {
    var startBtn = document.getElementById("start");
    startBtn.disabled = true;
    var animation = document.getElementById("animation");
    
    var stopBtn = document.getElementById("stop");
    stopBtn.disabled = false;

    startAnimationInterval();
}

function onStopBtnClick() {
    var startBtn = document.getElementById("start");
    startBtn.disabled = false;
    var animation = document.getElementById("animation");
    
    var stopBtn = document.getElementById("stop");
    stopBtn.disabled = true;

    index = 0;
    stopAnimationInterval();
}

