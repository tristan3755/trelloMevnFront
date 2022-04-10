<template>
  <article class="page-Landing"></article>
    <div class="logo">
      <canvas id="container3D"></canvas>
    </div>
    <header>
      <nav>
        <a href="http://localhost:3000/connexion">log in </a>
        <a class="buttonSignIn" href="http://localhost:3000/inscription">Sign in</a>
      </nav>
    </header>
  </article>
</template>

<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { CopyShader } from "three/examples/jsm/shaders/CopyShader.js";
import { onMounted } from "vue";

const gltfLoader = new GLTFLoader();

const scene = new THREE.Scene();
const light = new THREE.PointLight(0xffffff, 5);
light.position.z = 10;
scene.add(light);
onMounted(() => {
  const container3D = document.getElementById("container3D");
  const logo = document.querySelector(".logo");
  console.log(container3D, logo);
  let camera = new THREE.PerspectiveCamera(
    45,
    logo.clientWidth / logo.clientHeight,
    0.1,
    3000
  );

  const renderer = new THREE.WebGL1Renderer({
    canvas: container3D,
    alpha: true,
    antialias: true,
  });

  renderer.setPixelRatio(logo.devicePixelRatio);
  renderer.setSize(logo.clientWidth, logo.clientHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 15;
  renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.autoClear = false;
  camera.position.set(0, 0, 5);

  let objet;
  let mixer;
  let clock;
  let stats;
  let composer;
  let fxaaPass;

  clock = new THREE.Clock();

  stats = new Stats();
  container3D.appendChild(stats.dom);

  const params = {
    exposure: 15,
    bloomStrength: 6,
    bloomThreshold: 0,
    bloomRadius: 1,
  };

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(logo.clientWidth, logo.clientHeight),
    1.5,
    0.4,
    0.85
  );
  bloomPass.threshold = params.bloomThreshold;
  bloomPass.strength = params.bloomStrength;
  bloomPass.radius = params.bloomRadius;

  const renderScene = new RenderPass(scene, camera);
  fxaaPass = new ShaderPass(FXAAShader);

  const copyPass = new ShaderPass(CopyShader);

  composer = new EffectComposer(renderer);
  composer.addPass(renderScene);
  composer.addPass(bloomPass);
  composer.addPass(fxaaPass);
  composer.addPass(copyPass);

  const pixelRatio = renderer.getPixelRatio();

  fxaaPass.material.uniforms["resolution"].value.x = 1 / (logo.offsetWidth * pixelRatio);
  fxaaPass.material.uniforms["resolution"].value.y = 1 / (logo.offsetHeight * pixelRatio);

  gltfLoader.load(
    "../scene.gltf",
    (gltf) => {
      objet = gltf.scene;
      if (objet) {
        mixer = new THREE.AnimationMixer(objet);

        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        orbitObjet();
      }

      scene.add(objet);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );

  /*orbit*/
  function orbitObjet() {
    let orbit;

    document.addEventListener("mousemove", (e) => {
      let scale = -0.001;
      orbit.rotateY(e.movementX * scale);
      orbit.rotateX(e.movementY * scale);
      orbit.rotation.z = 0;
    });
    orbit = new THREE.Object3D();
    orbit.rotation.order = "YXZ";
    orbit.position.copy(objet.position);
    scene.add(orbit);

    let cameraDistance = 3.5;
    camera.position.z = cameraDistance;
    orbit.add(camera);
  }
  /*orbit*/
  function animate() {
    const delta = clock.getDelta();
    if (mixer) mixer.update(delta);
    stats.update();
    composer.render();
    requestAnimationFrame(animate);
  }

  animate();

  /* resize de la camera*/

  window.addEventListener("resize", () => {
    camera.aspect = logo.clientWidth / logo.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(logo.clientWidth, logo.clientHeight);
    const pixelRatio = renderer.getPixelRatio();

    fxaaPass.material.uniforms["resolution"].value.x =
      1 / (logo.offsetWidth * pixelRatio);
    fxaaPass.material.uniforms["resolution"].value.y =
      1 / (logo.offsetHeight * pixelRatio);
  });
});

/*3D*/
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
@mixin center($direction: column, $justify: center) {
  display: flex;
  flex-direction: $direction;
  align-items: center;
  justify-content: $justify;
}
.page-Landing {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 0.5s;

  .logo {
    min-height: 100vh;
    width: 100%;
    position: relative;
    #container3D {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  header {
    position: absolute;
    min-height: 120px;
    z-index: 1;
    width: 60%;
    bottom: 0;
    transform: translateX(-50%);
    left: 50%;
    @include center;
    nav {
      width: 60%;
      height: auto;
      @include center($direction: row, $justify: space-between);
      a {
        color: white;
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        font-size: 1.5rem;
        text-decoration: none;
        &:nth-child(2) {
          border: 1px solid white;
          padding: 1rem;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
