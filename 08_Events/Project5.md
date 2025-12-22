# Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-krnenmti?file=6-unlimitedColors%2Fchaiaurcode.js)

## Project 5 Solution Code
```Javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class="color">
    <table>
    <tr>
      <th>key</th>
      <th>keyCode</th>
      <th>code</th>
    </tr>
    <tr>
      <td>${e.key == " " ? "space" : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    </table>
    </div>
  `;
});

```