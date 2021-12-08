// frontend/src/template.js

export default function template(title) {
    let page = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>${title}</title>
            </head>
            <body>
            <h1>Hellossss</h1>
                <div id="app"></div>
                <script src="/dist/client.js"></script>
            </body>
        </html>
      `;
    return page;
}