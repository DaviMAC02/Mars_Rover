function createGrid() {
    let container = document.getElementById("container");
    let numBlocksX = parseInt(document.getElementById("rightMostCoord").value) + 1;
    let numBlocksY = parseInt(document.getElementById("upperMostCoord").value) + 1;
  
    // clear previous grid if it exists
    container.innerHTML = "";
  
    // create new grid of blocks
    for (let y = 0; y < numBlocksY; y++) {
      for (let x = 0; x < numBlocksX; x++) {
        let block = document.createElement("div");
        block.className = "block";
        container.appendChild(block);
      }
      let br = document.createElement("br");
      container.appendChild(br);
    }
  }

  function selectBlock(x, y) {
    let blocks = document.getElementsByClassName("block");
    for(let i = 0; i < blocks.length; i++) {
      blocks[i].style.backgroundColor = "white";
    }
    index = (parseInt(document.getElementById("upperMostCoord").value) - y)*(parseInt(document.getElementById("rightMostCoord").value) + 1) + x;
    blocks[index].style.backgroundColor = "red";
    
  }

 document.getElementById("calculate_position").onclick = async () => {
    let landingPos = document.getElementById("landingPos").value;
    let instruction = document.getElementById("instruction").value;

    result = await axios.post("http://127.0.0.1:3333/roverLog", 
    {
      instruction: instruction,
      inputed_position: landingPos
    });

    let x = parseInt(result.data.current_position.split(" ")[0]);
    let y = parseInt(result.data.current_position.split(" ")[1]);
    let direction = result.data.current_position.split(" ")[2];
    selectBlock(x,y);
    let resultBlock = document.getElementById("result");
    resultBlock.innerHTML = `Rover moved from ${landingPos} to ${x} ${y} ${direction}`;
  }

