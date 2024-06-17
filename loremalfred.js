const num = process.argv[2] || process.env.default_paragraph_count,
  isPlain = process.env.plain || "",
  url = process.env.lorem_url || `https://loripsum.net/api/${num}/medium/${isPlain}`;

fetch(url)
  .then(response => response.text())
  .then(result => {
    process.stdout.write(result.trim());
  })
