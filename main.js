import './style.css'
import * as THREE from 'three';

// Splash screen implementation
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', e=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  }, 2000)
})

const main_scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth/window.innerHeight,
  0.1,
  1000
)
const renderer = new THREE.WebGLRenderer();

camera.position.setZ(30)
// Creating main scene
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(innerWidth, innerHeight)
document.body.appendChild(renderer.domElement)

const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100)
const basicMaterial = new THREE.MeshBasicMaterial(
  {color: 0xFF6347, wireframe:true}
)

const mesh = new THREE.Mesh(torusGeometry, basicMaterial)

main_scene.add(mesh)

function animate() {
  mesh.rotation.x += 0.005
  requestAnimationFrame(animate)
  renderer.render(main_scene, camera)
}

animate()


