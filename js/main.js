// Generic definitions - variables

var WIDTH = document.body.clientWidth, HEIGHT = document.body.clientHeight;

var scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000),
    renderer = new THREE.WebGLRenderer({ alpha: true }),
    light, geometry, material, cubes = [],
    button = document.querySelector("button#start");

camera.position.x=0;
camera.position.y=5;
camera.position.z=0;

var floorTex = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture("images/floor.jpg", null, function() {
  floorTex.map.wrapS = floorTex.map.wrapT = THREE.RepeatWrapping
  floorTex.map.repeat.set(100, 100)
  floorTex.map.needsUpdate = true
  floorTex.needsUpdate = true
})})

var floor = new THREE.Mesh(
  new THREE.PlaneGeometry(1000, 1000),
  floorTex
);

floor.position.y = -5;
floor.rotation.x = -Math.PI/2;
scene.add(floor)

light = new THREE.PointLight(0xffffff, 1, 200);
scene.add(light);

// adding and positioning in-world elements.


var img1 = new THREE.MeshBasicMaterial({ 
            map:THREE.ImageUtils.loadTexture('images/enticing-users.png')
});
img1.map.needsUpdate = true; 
var frame1 = new THREE.Mesh(new THREE.PlaneGeometry(200, 200),img1);
frame1.overdraw=true;
frame1.position.x=120;
frame1.position.y=20;
frame1.position.z=0;
frame1.rotation.y=  (-Math.PI / 2);
scene.add(frame1);

var img2 = new THREE.MeshBasicMaterial({ 
            map:THREE.ImageUtils.loadTexture('images/disco-pane.png')
});
img2.map.needsUpdate = true; 
var frame2 = new THREE.Mesh(new THREE.PlaneGeometry(200, 200),img2);
frame2.overdraw=true;
frame2.position.x=-120;
frame2.position.y=20;
frame2.position.z=0;
frame2.rotation.y= (Math.PI/ 2);
scene.add(frame2);

var img3 = new THREE.MeshBasicMaterial({ 
            map:THREE.ImageUtils.loadTexture('images/landingpage.png')
});
img1.map.needsUpdate = true; 
var frame3 = new THREE.Mesh(new THREE.PlaneGeometry(200, 200),img3);
frame3.overdraw=true;
frame3.position.x=0;
frame3.position.y=20;
frame3.position.z=140;
frame3.rotation.y= - Math.PI; 
scene.add(frame3);

var img4 = new THREE.MeshBasicMaterial({ 
            map:THREE.ImageUtils.loadTexture('images/share-links.png')
});
img4.map.needsUpdate = true; 
var frame4 = new THREE.Mesh(new THREE.PlaneGeometry(200, 200),img4);
frame4.overdraw=true;
frame4.position.x=0;
frame4.position.y=20;
frame4.position.z=-140;
frame4.rotation.y=0 ; 
scene.add(frame4);


function startRenderLoop(device) {
  requestAnimationFrame(function draw() {

    var state = device.getPose() 
    
    if(state.orientation) { // they might not be available yet, though...
      camera.quaternion.fromArray(state.orientation)
    }
    renderer.render(scene, camera);
    requestAnimationFrame(draw);
  })
}

// LEEEROY JEEENKINS

button.addEventListener("click", function() {
  document.body.removeChild(document.getElementById("instructions"));

  document.body.appendChild(renderer.domElement);
  renderer.setSize(WIDTH, HEIGHT);

  // Get the position sensor
  navigator.getVRDisplays().then(function(devices) {
    console.log(devices[0])
    devices[0].resetPose() 
    // get drawin'
    startRenderLoop(devices[0])
  })

});
