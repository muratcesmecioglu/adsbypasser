_.register({
  rule: {
    host: /^reklamlar\.turkleech\.com$/,
    path: /^\/api\//,
    query: /^\?file=(.+)/,
  },
  async ready (m) {
    let html = await $.post('api.php',{id: m.query[1]});
    await $.openLink(html);
  },
});
