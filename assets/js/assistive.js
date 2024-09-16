(functio(){ var s = document.createElement('script');

  var h = document.querySelector('head') || document.body;
  s.charset="UTF-8";
  s.src = 'https://cdn.assistive.com.br/plugin/AssistiveWebPlugin.js';
  s.async = true;
  s.onload = function(){
    assistive.init({});
  };
  h.appendChild(s);
});