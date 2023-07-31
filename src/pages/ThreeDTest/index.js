import * as THREE from "three";

const scene = new THREE.Scene();
		scene.fog = new THREE.Fog( 0xcccccc, 10, 15 );const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
  -1.0,
  -1.0,
  1.0, // v0
  1.0,
  -1.0,
  1.0, // v1
  1.0,
  1.0,
  1.0, // v2

  1.0,
  1.0,
  1.0, // v3
  -1.0,
  1.0,
  1.0, // v4
  -1.0,
  -1.0,
  1.0, // v5
]);
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
camera.position.z = 5;

const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const mesh = new THREE.Mesh( geometry, material );
// scene.add(mesh);
function ThreeDTest() {
  requestAnimationFrame(ThreeDTest);

  renderer.render(scene, camera);
}
export default ThreeDTest;
