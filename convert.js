const fs = require('fs');
const markdown = require('markdown-it')();
const path = require('path');

const mdPath = path.join(__dirname, 'docs/README.md');
const htmlPath = path.join(__dirname, 'out/index.html');

const mdContent = fs.readFileSync(mdPath, 'utf8');
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 2rem;
        }
        h1, h2, h3, h4, h5, h6 {
            color: #333;
        }
        pre {
            background-color: #f4f4f4;
            padding: 1rem;
            overflow-x: auto;
        }
        code {
            background-color: #f4f4f4;
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
        }
    </style>
</head>
<body>
${markdown.render(mdContent)}
</body>
</html>
`;

fs.writeFileSync(htmlPath, htmlContent);
