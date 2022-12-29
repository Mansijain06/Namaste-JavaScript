const heading = React.createElement('h1', {id: 'root'}, 'hello'); //<h1 id='root'>hello</h1>
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(heading);

//<ul>
//    <li>list 1</li>
//</ul>
// const li = React.createElement('li', {}, 'list 1');
// const ul = React.createElement('ul', {}, li);
// root.render(ul);
