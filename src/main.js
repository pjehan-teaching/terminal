import Prism from 'prismjs';
import './css/style.scss';
require.context('./images', false, /\.(png|jpe?g|svg|gif)$/); // Import all images

document.getElementById('revealexpress').addEventListener('loaded', function(event) {

  Prism.highlightAll();

});
