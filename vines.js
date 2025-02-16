
      function updateLastUpdated() {
        var now = new Date();
        var options = { year: "numeric", month: "numeric", day: "numeric" };
        var formattedDate = now.toLocaleDateString("en-US", options);
        document.getElementById("lastUpdated").textContent =
          "Last updated: " + formattedDate;
      }

      window.onload = function () {
       updateLastUpdated();
       createVines();
        setInterval(() => createVines(), 2000); // Add more vines over time
       };

        function createVines() {
          const container = document.getElementById("container");
         const numVines = 5;
      
           for (let i = 0; i < numVines; i++) {
             growVine(container);
           }
         }

      function growVine(container) {
        const containerRect = container.getBoundingClientRect();

        // Random start point on container edge
        const perimeter = 2 * (container.offsetWidth + container.offsetHeight);
        const randomPoint = Math.random() * perimeter;

        let x, y, direction;
        if (randomPoint < container.offsetWidth) {
          // Top edge
          x = container.offsetLeft + randomPoint;
          y = container.offsetTop;
          direction = "up"; // Ensure upward bias initially
        } else if (
          randomPoint <
          container.offsetWidth + container.offsetHeight
        ) {
          // Right edge
          x = container.offsetLeft + container.offsetWidth;
          y = container.offsetTop + (randomPoint - container.offsetWidth);
          direction = "left";
        } else if (
          randomPoint <
          2 * container.offsetWidth + container.offsetHeight
        ) {
          // Bottom edge
          x =
            container.offsetLeft +
            (randomPoint - (container.offsetWidth + container.offsetHeight));
          y = container.offsetTop + container.offsetHeight;
          direction = "down";
        } else {
          // Left edge
          x = container.offsetLeft;
          y =
            container.offsetTop +
            (randomPoint -
              (2 * container.offsetWidth + container.offsetHeight));
          direction = "right";
        }

        let vineLength = 0;
        const grow = setInterval(() => {
          vineLength++;

          // Create clusters of vine pixels (thicker vines)
          for (let i = 0; i < 3; i++) {
            // Create multiple pixels per step
            const vinePixel = document.createElement("div");
            vinePixel.classList.add("vine-pixel");
            vinePixel.style.left = x + Math.random() * 4 - 2 + "px"; // Spread slightly for thickness
            vinePixel.style.top = y + Math.random() * 4 - 2 + "px"; // Spread slightly for thickness

            // Randomize color slightly for each pixel (greenish hues)
            const colorOffset = Math.floor(Math.random() * 50);
            vinePixel.style.backgroundColor = `rgb(${54 + colorOffset}, ${
              92 + colorOffset
            }, ${15 + colorOffset})`;

            document.body.appendChild(vinePixel);
          }

          // Move the vine pixel based on current direction with outward bias
          if (direction === "down") {
            y += 2; // Move faster for longer vines
          } else if (direction === "up") {
            y -= 2;
          } else if (direction === "left") {
            x -= 2;
          } else if (direction === "right") {
            x += 2;
          }

          // Prevent growing under the container
          if (
            x >= containerRect.left &&
            x <= containerRect.right &&
            y >= containerRect.top &&
            y <= containerRect.bottom
          ) {
            direction = getRandomDirection(direction, true); // Turn if hitting container
          }

          // Special rule for top vines: turn when reaching the top of the window
          if (direction === "up" && y <= 0) {
            direction = getRandomDirection("up", false);
          }

          // Random turns for erratic growth, with strong outward bias
          if (Math.random() < 0.2) {
            direction = getRandomDirection(direction, false); // Occasional erratic turns
          }

          // Stop growing after a longer length
          if (vineLength > 500) {
            // Extended length for longer vines
            clearInterval(grow);
          }
        }, 20);
      }

      function getRandomDirection(currentDirection, forceTurn = false) {
        // Directions to move in
        const possibleDirections = ["up", "down", "left", "right"];

        // Bias directions based on the current movement (stronger outward growth)
        if (currentDirection === "up") {
          possibleDirections.push("up", "right", "left");
        } else if (currentDirection === "down") {
          possibleDirections.push("down", "right", "left");
        } else if (currentDirection === "left") {
          possibleDirections.push("left", "up", "down");
        } else if (currentDirection === "right") {
          possibleDirections.push("right", "up", "down");
        }

        let newDirection = currentDirection;
        while (
          newDirection === currentDirection ||
          (forceTurn && newDirection === currentDirection)
        ) {
          newDirection =
            possibleDirections[
              Math.floor(Math.random() * possibleDirections.length)
            ];
        }

        return newDirection;
      }