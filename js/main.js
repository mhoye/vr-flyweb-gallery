
// basic stuff, just make it work.

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
