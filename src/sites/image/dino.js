_.register({
  rule: {
    host: /^(imgdino|imgtiger|imgzap)\.com$/,
    path: /^\/viewer\.php$/,
    query: /^\?file=/,
  },
  async ready () {
    const o = $('#cursor_lupa');
    await $.openImage(o.src);
  },
});
