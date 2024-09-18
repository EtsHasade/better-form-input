<script setup>
console.log("Hello from the popup!");
const openCustomTab = () => {
  console.log("openCustomTab");
  // The error message is probably because the content script is not injected yet.
  // We can use the chrome.runtime API to send a message to the background script.
  // The background script will then send a message to the content script, which will
  // then open the form page.
  // https://developer.chrome.com/docs/extensions/messaging/#connect
  chrome.runtime.sendMessage({ type: "openCustomTab" }, function(response) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    }
  });
}
</script>

<template>
  <div>
    <img src="/icon-with-shadow.svg" />
    <h1>vite-plugin-web-extension</h1>
    <p>
      Template: <code>vue-js</code>
    </p>
    <button @click="openCustomTab">Open</button>
  </div>
</template>

<style>
html,
body {
  width: 300px;
  height: 400px;
  padding: 0;
  margin: 0;
}

body {
  background-color: rgb(36, 36, 36);
}

body > div {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
}

img {
  width: 200px;
  height: 200px;
}

h1 {
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin: 0;
}

p {
  color: white;
  opacity: 0.7;
  margin: 0;
}

code {
  font-size: 12px;
  padding: 2px 4px;
  background-color: #ffffff24;
  border-radius: 2px;
}
</style>
