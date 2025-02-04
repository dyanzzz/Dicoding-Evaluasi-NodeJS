function parseURL(url) {
  /* const urlPattern = new RegExp('^(https?:\\/\\/)' + // protocol
        '((([a-z0-9\\-]+\\.)+[a-z]{2,})|' + // domain name
        'localhost|' + // localhost
        '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // ipv4
        '\\[?[a-fA-F0-9]*:[a-fA-F0-9:]+\\]?)' + // ipv6
        '(\\:\\d+)?(\\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?$','i'); // port and path

  if (urlPattern.test(url)) {
    return new URL(url);
  } else {
    return null
  } */

  try {
    new URL(url);
    return new URL(url)
  } catch(_) {
    return null
  }
  
}