import { proxy } from 'valtio';

const state = proxy({
//whatever you want to store to use in the entire app
intro: true,
color: '#EFBD4B',
isLogoTexture: true,
isFullTexture: false,
logoDecal: './threejs.png',
fullDecal: './threejs.png',

});

export default state;