$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

createPlatform(500, 300, 200, 20)
createPlatform(90, 700, 100, 50)
createPlatform(650, 550, 200, 7)
createPlatform(90, 85, 100, 45)
createPlatform(700, 490, 545, 100)
createPlatform(300, 600, 43, 200)
createPlatform(300, 700, 200, 10)
createPlatform(600, 300, 300, 50)
createPlatform(1210, 400, 500 ,300)
createPlatform(900, 300, 50, 10)
createPlatform(500, 200, 10, 100)
createPlatform(400, 200, 100, 10)
createPlatform(400, 200, 10, 100)
createPlatform(600, 100, 10, 100)
createPlatform(600, 50, 10, 100)
createPlatform(600, 25, 10, 100)
createPlatform(600, 1, 10, 100)
createPlatform(300, 290, 100, 10)
createPlatform(300, 200, 10, 100)
createPlatform(200, 200, 100, 10)
createPlatform(120, 120, 100, 10)
createPlatform(700, 200, 100, 10)
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

createCollectable("kennedi", 1050, 500, 100, 0.5)
createCollectable("grace", 119, 50,)
createCollectable("steve", 1300, 50, 200, .5)
createCollectable("max",730, 60, )
createCollectable("database",120, 300, 400, 0)

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

createCannon("right", 780, 900)
createCannon("top", 200, 1000)
createCannon("bottom", 695, 2000)
createCannon("bottom", 1300, 800)
createCannon("bottom", 1223, 800)



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
