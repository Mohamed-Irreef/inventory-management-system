import React, { useState,Fragment } from 'react'
import {Stage,Layer, Rect,Text,Line} from 'react-konva'



const Map = ({setBinProduct,handleExport,stageRef,selectedOption}) => {
    const [isHovered, setIsHovered] = useState(0);
    

    
    
const [tool, setTool] = React.useState('pen');
  const [lines, setLines] = React.useState([]); 
  const isDrawing = React.useRef(false);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

const products = [
  // PICKING ZONE
  { addr: "PICK-A1-R1-B1", zone: "PICK", aisle: "A1", rack: "R1", bin: "B1", status: "partial", sku: "ELE001", product: "iPad Air", quantity: 18, capacity: 25 },
  { addr: "PICK-A1-R1-B2", zone: "PICK", aisle: "A1", rack: "R1", bin: "B2", status: "full", sku: "ELE002", product: "Bluetooth Mouse", quantity: 25, capacity: 25 },
  { addr: "PICK-A1-R1-B3", zone: "PICK", aisle: "A1", rack: "R1", bin: "B3", status: "empty", sku: "ELE003", product: "Webcam", quantity: 0, capacity: 25 },
  { addr: "PICK-A1-R1-B4", zone: "PICK", aisle: "A1", rack: "R1", bin: "B4", status: "partial", sku: "ELE004", product: "Wireless Keyboard", quantity: 12, capacity: 25 },
  { addr: "PICK-A2-R2-B1", zone: "PICK", aisle: "A2", rack: "R2", bin: "B1", status: "partial", sku: "ELE005", product: "Noise Cancelling Headphones", quantity: 20, capacity: 25 },
  { addr: "PICK-A2-R2-B2", zone: "PICK", aisle: "A2", rack: "R2", bin: "B2", status: "full", sku: "ELE006", product: "Wireless Charger", quantity: 25, capacity: 25 },
  { addr: "PICK-A2-R2-B3", zone: "PICK", aisle: "A2", rack: "R2", bin: "B3", status: "partial", sku: "ELE007", product: "USB Hub", quantity: 13, capacity: 25 },
  { addr: "PICK-A2-R2-B4", zone: "PICK", aisle: "A2", rack: "R2", bin: "B4", status: "partial", sku: "ELE008", product: "Tablet Stand", quantity: 9, capacity: 25 },
  { addr: "PICK-A3-R3-B1", zone: "PICK", aisle: "A3", rack: "R3", bin: "B1", status: "full", sku: "ELE009", product: "Smartwatch", quantity: 25, capacity: 25 },
  { addr: "PICK-A3-R3-B2", zone: "PICK", aisle: "A3", rack: "R3", bin: "B2", status: "empty", sku: "ELE010", product: "Portable SSD", quantity: 0, capacity: 25 },

  // STORAGE ZONE
  { addr: "STO-A1-R1-B1", zone: "STO", aisle: "A1", rack: "R1", bin: "B1", status: "full", sku: "STO001", product: "LED TV", quantity: 25, capacity: 25 },
  { addr: "STO-A1-R1-B2", zone: "STO", aisle: "A1", rack: "R1", bin: "B2", status: "partial", sku: "STO002", product: "Gaming Laptop", quantity: 17, capacity: 25 },
  { addr: "STO-A1-R1-B3", zone: "STO", aisle: "A1", rack: "R1", bin: "B3", status: "partial", sku: "STO003", product: "Mechanical Keyboard", quantity: 10, capacity: 25 },
  { addr: "STO-A1-R1-B4", zone: "STO", aisle: "A1", rack: "R1", bin: "B4", status: "empty", sku: "STO004", product: "Ethernet Cable", quantity: 0, capacity: 25 },
  { addr: "STO-A2-R2-B1", zone: "STO", aisle: "A2", rack: "R2", bin: "B1", status: "full", sku: "STO005", product: "Laptop Bag", quantity: 25, capacity: 25 },
  { addr: "STO-A2-R2-B2", zone: "STO", aisle: "A2", rack: "R2", bin: "B2", status: "partial", sku: "STO006", product: "Webcam", quantity: 14, capacity: 25 },
  { addr: "STO-A2-R2-B3", zone: "STO", aisle: "A2", rack: "R2", bin: "B3", status: "full", sku: "STO007", product: "Monitor", quantity: 25, capacity: 25 },
  { addr: "STO-A2-R2-B4", zone: "STO", aisle: "A2", rack: "R2", bin: "B4", status: "partial", sku: "STO008", product: "Printer Ink", quantity: 16, capacity: 25 },
  { addr: "STO-A3-R3-B1", zone: "STO", aisle: "A3", rack: "R3", bin: "B1", status: "empty", sku: "STO009", product: "Flash Drive", quantity: 0, capacity: 25 },
  { addr: "STO-A3-R3-B2", zone: "STO", aisle: "A3", rack: "R3", bin: "B2", status: "partial", sku: "STO010", product: "Surge Protector", quantity: 11, capacity: 25 },

  // COLD STORAGE
  { addr: "COLD-A1-R1-B1", zone: "COLD", aisle: "A1", rack: "R1", bin: "B1", status: "partial", sku: "MED001", product: "Insulin", quantity: 18, capacity: 25 },
  { addr: "COLD-A1-R1-B2", zone: "COLD", aisle: "A1", rack: "R1", bin: "B2", status: "full", sku: "MED002", product: "Vaccines", quantity: 25, capacity: 25 },
  { addr: "COLD-A1-R1-B3", zone: "COLD", aisle: "A1", rack: "R1", bin: "B3", status: "partial", sku: "MED003", product: "IV Bags", quantity: 13, capacity: 25 },
  { addr: "COLD-A1-R1-B4", zone: "COLD", aisle: "A1", rack: "R1", bin: "B4", status: "empty", sku: "MED004", product: "Eye Drops", quantity: 0, capacity: 25 },
  { addr: "COLD-A2-R2-B1", zone: "COLD", aisle: "A2", rack: "R2", bin: "B1", status: "partial", sku: "MED005", product: "Syringes", quantity: 9, capacity: 25 },
  { addr: "COLD-A2-R2-B2", zone: "COLD", aisle: "A2", rack: "R2", bin: "B2", status: "full", sku: "MED006", product: "Cold Packs", quantity: 25, capacity: 25 },

  // RETURNS ZONE
  { addr: "RET-A1-R1-B1", zone: "RET", aisle: "A1", rack: "R1", bin: "B1", status: "partial", sku: "RET001", product: "Returned Phone", quantity: 3, capacity: 25 },
  { addr: "RET-A1-R1-B2", zone: "RET", aisle: "A1", rack: "R1", bin: "B2", status: "full", sku: "RET002", product: "Defective Mouse", quantity: 25, capacity: 25 },
  { addr: "RET-A1-R1-B3", zone: "RET", aisle: "A1", rack: "R1", bin: "B3", status: "partial", sku: "RET003", product: "Broken Headset", quantity: 6, capacity: 25 },
  { addr: "RET-A2-R2-B1", zone: "RET", aisle: "A2", rack: "R2", bin: "B1", status: "partial", sku: "RET004", product: "Used Tablet", quantity: 5, capacity: 25 },
  { addr: "RET-A2-R2-B2", zone: "RET", aisle: "A2", rack: "R2", bin: "B2", status: "empty", sku: "RET005", product: "Faulty Cable", quantity: 0, capacity: 25 },

  // RECEIVING AREA
  { addr: "REC-A1-R1-B1", zone: "REC", aisle: "A1", rack: "R1", bin: "B1", status: "full", sku: "REC001", product: "New Inventory Box", quantity: 25, capacity: 25 },
  { addr: "REC-A1-R1-B2", zone: "REC", aisle: "A1", rack: "R1", bin: "B2", status: "partial", sku: "REC002", product: "Barcode Labels", quantity: 15, capacity: 25 },
  { addr: "REC-A1-R1-B3", zone: "REC", aisle: "A1", rack: "R1", bin: "B3", status: "partial", sku: "REC003", product: "Packing Foam", quantity: 11, capacity: 25 },
  { addr: "REC-A1-R1-B4", zone: "REC", aisle: "A1", rack: "R1", bin: "B4", status: "empty", sku: "REC004", product: "Scanner Gun", quantity: 0, capacity: 25 },

  // PACKING AREA
  { addr: "PACK-A1-R1-B1", zone: "PACK", aisle: "A1", rack: "R1", bin: "B1", status: "full", sku: "PKG001", product: "Bubble Wrap", quantity: 25, capacity: 25 },
  { addr: "PACK-A1-R1-B2", zone: "PACK", aisle: "A1", rack: "R1", bin: "B2", status: "partial", sku: "PKG002", product: "Sealing Tape", quantity: 13, capacity: 25 },
  { addr: "PACK-A1-R1-B3", zone: "PACK", aisle: "A1", rack: "R1", bin: "B3", status: "partial", sku: "PKG003", product: "Carton Boxes", quantity: 18, capacity: 25 },
  { addr: "PACK-A1-R1-B4", zone: "PACK", aisle: "A1", rack: "R1", bin: "B4", status: "empty", sku: "PKG004", product: "Foam Sheets", quantity: 0, capacity: 25 },
  { addr: "PACK-A2-R2-B1", zone: "PACK", aisle: "A2", rack: "R2", bin: "B1", status: "full", sku: "PKG005", product: "Packing Knife", quantity: 25, capacity: 25 }
];


function binClicked(addr){
    const binProd = products.filter((prod)=>{
        return prod.addr==addr;
    });
    if(binProd.length>0){
        setBinProduct(binProd[0]);
    }else{
        setBinProduct({
        addr: "No Address",
        zone: "None",
        aisle: "None",
        rack: "None",
        bin: "None",
        status: "empty",
        sku: "None",
        product: "None",
        quantity: 0,
        capacity: 0,
      })
    }
}
    function Grid({ width, height, cellSize = 40 }) {
  const gridLines = [];

  // Vertical lines
  for (let x = 0; x < width; x += cellSize) {
    gridLines.push(
      <Line
        key={`v-${x}`}
        points={[x, 0, x, height]}
        stroke="#ccc"
        strokeWidth={1}
      />
    );
  }

  // Horizontal lines
  for (let y = 0; y < height; y += cellSize) {
    gridLines.push(
      <Line
        key={`h-${y}`}
        points={[0, y, width, y]}
        stroke="#ccc"
        strokeWidth={1}
      />
    );
  }

  return <Layer>{gridLines}</Layer>;
}
  return (
    <>
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="pen">Pen</option>
        <option value="eraser">Eraser</option>
      </select>

      <Fragment>
         <button onClick={handleExport}>Click here to export stage as image</button>
        <Stage
        width={820}
        height={500}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        ref={stageRef}
      >
        {/* Reaching */}
        <Grid width={820} height={500} cellSize={40} />
        <Layer>
          {lines.map((line, i) => (
            <Line
            
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={line.tool === "eraser" ? 30 : 5} // increased eraser width
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={
                line.tool === "eraser" ? "destination-out" : "source-over"
              }
            />
          ))}

          <Rect
            x={20}
            y={80}
            height={320}
            width={170.9}
            stroke="#1a1a1a"
            strokeWidth={3.5}
            fill="#80ffcc"
          ></Rect>

          {/* Storage */}
          <Rect
            x={195}
            y={80}
            height={161}
            width={213.9}
            stroke="#1a1a1a"
            strokeWidth={3.5}
            fill=" #ff8080"
          ></Rect>
          {/* Picking */}
          <Rect
            x={413}
            y={80}
            height={161}
            width={203}
            stroke="#1a1a1a"
            strokeWidth={3.5}
            fill="#ffec80"
          ></Rect>

          {/* Cold */}
          <Rect
            x={195}
            y={245}
            height={155}
            width={213.9}
            stroke="#1a1a1a"
            strokeWidth={3.5}
            fill=" #80ffff"
          ></Rect>
          {/* Return */}
          <Rect
            x={413}
            y={245}
            height={155}
            width={203}
            stroke="#1a1a1a"
            strokeWidth={3.5}
            fill="#ff80ff"
          ></Rect>
          {/* Packing */}
          <Rect
            x={620}
            y={80}
            height={320}
            width={180}
            stroke="#1a1a1a"
            strokeWidth={3.5}
            fill="#92d3ed"
          ></Rect>

          {/* Receiving Dock 1 */}
          <Rect
            x={30}
            y={410}
            height={30}
            width={150}
            stroke="green"
            strokeWidth={2}
            cornerRadius={1}
            fill="#80ffcc"
          ></Rect>
          <Text
            x={140}
            y={420}
            text="DOCK 1"
            fontSize={14}
            fontFamily="Calibri"
            fill="green"
            align="center"
            offsetX={60}
          ></Text>

          {/* Receiving Dock 2 */}
          <Rect
            x={640}
            y={410}
            height={30}
            width={150}
            stroke="green"
            strokeWidth={2}
            cornerRadius={1}
            fill="#80ffcc"
          ></Rect>
          <Text
            x={750}
            y={420}
            text="DOCK 1"
            fontSize={14}
            fontFamily="Calibri"
            fill="green"
            align="center"
            offsetX={60}
          ></Text>

          {/* door - receiving and storage */}
          <Rect x={187} y={100} height={31} width={11} fill="#80ffcc"></Rect>
          {/* door - storage and picking */}
          <Rect x={407} y={100} height={31} width={10} fill="#ffec80"></Rect>
          {/* door - storage and cold */}
          <Rect x={210} y={238} height={11} width={40} fill="#80ffff"></Rect>
          {/* door - packing and picking */}
          <Rect x={614} y={100} height={31} width={10} fill="#92d3ed"></Rect>
          {/*door - picking and returns */}
          <Rect x={430} y={237} height={10} width={40} fill="#ffec80"></Rect>
          {/* door - returns and packing */}
          <Rect x={613} y={300} height={31} width={10} fill="#92d3ed"></Rect>
          {/* door - unloading and receiving */}
          <Rect x={80} y={393} height={9} width={40} fill="#80ffcc"></Rect>
          {/* door - loading and packing */}
          <Rect x={690} y={393} height={9} width={40} fill="#92d3ed"></Rect>

          {/* Zone names */}
          <Text
            x={212}
            y={93}
            text="STORAGE AREA"
            fontSize={12}
            fill="#333333"
          />
          <Text
            x={435}
            y={93}
            text="PICKING AREA"
            fontSize={12}
            fill="#333333"
          />
          <Text
            x={209}
            y={381}
            text="COLD STORAGE"
            fontSize={12}
            fill="#333333"
          />
          <Text
            x={430}
            y={380}
            text="RETURNS ZONE"
            fontSize={12}
            fill="#333333"
          />
          {/* <Text x={50} y={290} text="Receiving Area" fontSize={14} fill="#333333" rotationDeg={-90}/> */}
          <Text
            x={55}
            y={350}
            text="RECEIVING AREA"
            fontSize={12}
            fill="#333333"
          />
          <Text
            x={665}
            y={350}
            text="PACKING AREA"
            fontSize={12}
            fill="#333333"
          />

          {/* Receiving bins -R1*/}
        {
            (selectedOption=="receiving" || selectedOption=="all") &&
            <>
                          <Rect
            x={50}
            y={200}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 1 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(1);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("REC-A1-R1-B1")}
          ></Rect>

          <Rect
            x={80}
            y={200}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 2 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(2);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("REC-A1-R1-B2")}
          ></Rect>
          <Rect
            x={110}
            y={200}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 3 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(3);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("REC-A1-R1-B3")}
          ></Rect>
          <Rect
            x={140}
            y={200}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 4 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(4);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("REC-A1-R1-B4")}
          ></Rect>

          {/* Receiving bins - R2*/}
          <Rect
            x={50}
            y={245}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 5 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(5);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("REC-A2-R2-B1")}
          ></Rect>

          <Rect
            x={80}
            y={245}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 6 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(6);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("REC-A2-R2-B2")}
          ></Rect>
          <Rect
            x={110}
            y={245}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 7 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(7);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("REC-A2-R2-B3")}
          ></Rect>
          <Rect
            x={140}
            y={245}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 8 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(8);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("REC-A2-R2-B4")}
          ></Rect>
          {/*Rceeiving  Rack 1 TEXT */}
          <Text
            x={55}
            y={206}
            text="B1"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(1);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("REC-A1-R1-B1")}
          ></Text>

          <Text
            x={85}
            y={206}
            text="B2"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(2);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("REC-A1-R1-B2")}
          ></Text>

          <Text
            x={115}
            y={206}
            text="B3"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(3);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("REC-A1-R1-B3")}
          ></Text>

          <Text
            x={145}
            y={206}
            text="B4"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(4);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("REC-A1-R1-B4")}
          ></Text>
          {/*Rceeiving  Rack 2 TEXT*/}
          <Text
            x={55}
            y={256}
            text="B1"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(5);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("REC-A2-R2-B1")}
          ></Text>

          <Text
            x={85}
            y={256}
            text="B2"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(6);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("REC-A2-R2-B2")}
          ></Text>

          <Text
            x={115}
            y={256}
            text="B3"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(7);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("REC-A2-R2-B3")}
          ></Text>

          <Text
            x={145}
            y={256}
            text="B4"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(8);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("REC-A2-R2-B4")}
          ></Text>

          <Text
            x={79}
            y={230}
            text="---- Aisle 1 ----"
            fontSize={9}
            fill="#333333"
          ></Text>
          <Text x={32} y={210} text="R1" fontSize={9} fill="#333333"></Text>
          <Text
            x={79}
            y={275}
            text="---- Aisle 2 ----"
            fontSize={9}
            fill="#333333"
          ></Text>
          <Text x={32} y={256} text="R2" fontSize={9} fill="#333333"></Text>
            </>
        }

        {
            (selectedOption=="storage" || selectedOption=="all") && 
            <>
                          {/* Storage Rack 1 */}
          <Rect
            x={260}
            y={120}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 9 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(9);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A1-R1-B1")}
          ></Rect>

          <Rect
            x={290}
            y={120}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 10 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(10);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A1-R1-B2")}
          ></Rect>
          <Rect
            x={320}
            y={120}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 11 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(11);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A1-R1-B3")}
          ></Rect>

          <Rect
            x={350}
            y={120}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 12 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(12);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A1-R1-B4")}
          ></Rect>
          {/*Storage  Rack 2  */}
          <Rect
            x={260}
            y={160}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 13 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(13);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A2-R2-B1")}
          ></Rect>

          <Rect
            x={290}
            y={160}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 14 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(14);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A2-R2-B2")}
          ></Rect>
          <Rect
            x={320}
            y={160}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 15 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(15);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A2-R2-B3")}
          ></Rect>

          <Rect
            x={350}
            y={160}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 16 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(16);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A2-R2-B4")}
          ></Rect>

          {/*Storage  Rack 3  */}
          <Rect
            x={260}
            y={200}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 17 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(17);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A3-R3-B1")}
          ></Rect>

          <Rect
            x={290}
            y={200}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 18 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(18);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A3-R3-B2")}
          ></Rect>
          <Rect
            x={320}
            y={200}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 19 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(19);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A3-R3-B3")}
          ></Rect>

          <Rect
            x={350}
            y={200}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 20 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(20);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A3-R3-B4")}
          ></Rect>
          {/* Storage Rack 1 text */}

          {/*storage  Rack 1 TEXT */}
          <Text
            x={265}
            y={126}
            text="B1"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(9);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A1-R1-B1")}
          ></Text>

          <Text
            x={295}
            y={126}
            text="B2"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(10);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("SSTO-A1-R1-B2")}
          ></Text>

          <Text
            x={325}
            y={126}
            text="B3"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(11);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A1-R1-B3")}
          ></Text>

          <Text
            x={355}
            y={126}
            text="B4"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(12);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A1-R1-B4")}
          ></Text>
          {/*Storage  Rack 2 TEXT*/}
          <Text
            x={265}
            y={166}
            text="B1"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(13);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A2-R2-B1")}
          ></Text>

          <Text
            x={295}
            y={166}
            text="B2"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(14);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A2-R2-B2")}
          ></Text>

          <Text
            x={325}
            y={166}
            text="B3"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(15);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO A2 R2 B3")}
          ></Text>

          <Text
            x={355}
            y={166}
            text="B4"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(16);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A2-R2-B4")}
          ></Text>
          {/* Storage rack 3 */}
          <Text
            x={265}
            y={206}
            text="B1"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(17);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A3-R3-B1")}
          ></Text>

          <Text
            x={295}
            y={206}
            text="B2"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(18);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A3-R3-B2")}
          ></Text>

          <Text
            x={325}
            y={206}
            text="B3"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(19);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A3-R3-B3")}
          ></Text>

          <Text
            x={355}
            y={206}
            text="B4"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(20);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("STO-A3-R3-B4")}
          ></Text>

          <Text
            x={290}
            y={148}
            text="---- Aisle 1 ----"
            fontSize={9}
            fill="#333333"
          ></Text>
          <Text x={242} y={130} text="R1" fontSize={9} fill="#333333"></Text>
          <Text
            x={290}
            y={188}
            text="---- Aisle 2 ----"
            fontSize={9}
            fill="#333333"
          ></Text>
          <Text x={242} y={170} text="R2" fontSize={9} fill="#333333"></Text>
          <Text
            x={290}
            y={228}
            text="---- Aisle 3 ----"
            fontSize={9}
            fill="#333333"
          ></Text>
          <Text x={242} y={210} text="R3" fontSize={9} fill="#333333"></Text>
            </>
        }

          {/* Cold Storage */}
          {/* cold Storage Rack 1 */}
          {
            (selectedOption=="cold"||selectedOption=="all") &&
            <>
                <Rect
            x={260}
            y={260}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 21 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(21);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A1-R1-B1")}
          ></Rect>

          <Rect
            x={290}
            y={260}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 22 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(22);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A1-R1-B2")}
          ></Rect>
          <Rect
            x={320}
            y={260}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 23 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(23);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A1-R1-B3")}
          ></Rect>

          <Rect
            x={350}
            y={260}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 24 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(24);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A1-R1-B4")}
          ></Rect>
          {/* cold Storage  Rack 2  */}
          <Rect
            x={260}
            y={300}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 25 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(25);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A2-R2-B1")}
          ></Rect>

          <Rect
            x={290}
            y={300}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 26 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(26);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A2-R2-B2")}
          ></Rect>
          <Rect
            x={320}
            y={300}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 27 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(27);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A2-R2-B3")}
          ></Rect>

          <Rect
            x={350}
            y={300}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 28 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(28);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A2-R2-B4")}
          ></Rect>

          {/* cold Storage  Rack 3  */}
          <Rect
            x={260}
            y={340}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 29 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(29);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A3-R3-B1")}
          ></Rect>

          <Rect
            x={290}
            y={340}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 30 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(30);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A3-R3-B2")}
          ></Rect>
          <Rect
            x={320}
            y={340}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 31 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(31);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A3-R3-B3")}
          ></Rect>

          <Rect
            x={350}
            y={340}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 32 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(32);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A3-R3-B4")}
          ></Rect>
          {/*Cold Storage text */}

          {/*Rceeiving  Rack 1 TEXT */}
          <Text
            x={265}
            y={266}
            text="B1"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(21);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A1-R1-B1")}
          ></Text>

          <Text
            x={295}
            y={265}
            text="B2"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(22);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A1-R1-B2")}
          ></Text>

          <Text
            x={325}
            y={265}
            text="B3"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(23);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A1-R1-B3")}
          ></Text>

          <Text
            x={355}
            y={265}
            text="B4"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(24);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A1-R1-B4")}
          ></Text>
          {/*Cold Storage  Rack 2 TEXT*/}
          <Text
            x={265}
            y={306}
            text="B1"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(25);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A2-R2-B1")}
          ></Text>

          <Text
            x={295}
            y={306}
            text="B2"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(26);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A2-R2-B2")}
          ></Text>

          <Text
            x={325}
            y={306}
            text="B3"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(27);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A2-R2-B3")}
          ></Text>

          <Text
            x={355}
            y={306}
            text="B4"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(28);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A2-R2-B4")}
          ></Text>
          {/*Cold Storage rack 3 */}
          <Text
            x={265}
            y={346}
            text="B1"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(29);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A3-R3-B1")}
          ></Text>

          <Text
            x={295}
            y={346}
            text="B2"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(30);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A3-R3-B2")}
          ></Text>

          <Text
            x={325}
            y={346}
            text="B3"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(31);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A3-R3-B3")}
          ></Text>

          <Text
            x={355}
            y={346}
            text="B4"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(32);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("COLD-A3-R3-B4")}
          ></Text>

          <Text
            x={290}
            y={288}
            text="---- Aisle 1 ----"
            fontSize={9}
            fill="#333333"
          ></Text>
          <Text x={242} y={270} text="R1" fontSize={9} fill="#333333"></Text>
          <Text
            x={290}
            y={328}
            text="---- Aisle 2 ----"
            fontSize={9}
            fill="#333333"
          ></Text>
          <Text x={242} y={310} text="R2" fontSize={9} fill="#333333"></Text>
          <Text
            x={290}
            y={368}
            text="---- Aisle 3 ----"
            fontSize={9}
            fill="#333333"
          ></Text>
          <Text x={242} y={350} text="R3" fontSize={9} fill="#333333"></Text>
            </>
          }

          {/* Picking Rack 1 */}
          {
            (selectedOption=="picking" || selectedOption=="all")&&
            <>
                <Rect
            x={480}
            y={120}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 33 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(33);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A1-R1-B1")}
          ></Rect>

          <Rect
            x={510}
            y={120}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 34 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(34);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A1-R1-B2")}
          ></Rect>
          <Rect
            x={540}
            y={120}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 35 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(35);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A1-R1-B3")}
          ></Rect>

          <Rect
            x={570}
            y={120}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 36 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(36);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A1-R1-B4")}
          ></Rect>
          {/*Picking  Rack 2  */}
          <Rect
            x={480}
            y={160}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 37 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(37);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A2-R2-B1")}
          ></Rect>

          <Rect
            x={510}
            y={160}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 38 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(38);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A2-R2-B2")}
          ></Rect>
          <Rect
            x={540}
            y={160}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 39 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(39);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A2-R2-B3")}
          ></Rect>

          <Rect
            x={570}
            y={160}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 40 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(40);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A2-R2-B4")}
          ></Rect>

          {/*Picking  Rack 3  */}
          <Rect
            x={480}
            y={200}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 41 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(41);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A3-R3-B1")}
          ></Rect>

          <Rect
            x={510}
            y={200}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 42 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(42);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A3-R3-B2")}
          ></Rect>
          <Rect
            x={540}
            y={200}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 43 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(43);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A3-R3-B3")}
          ></Rect>

          <Rect
            x={570}
            y={200}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 44 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(44);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A3-R3-B4")}
          ></Rect>
          {/* Picking text */}

          {/*Rceeiving  Rack 1 TEXT */}
          <Text
            x={485}
            y={126}
            text="B1"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(33);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A1-R1-B1")}
          ></Text>

          <Text
            x={515}
            y={126}
            text="B2"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(34);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A1-R1-B2")}
          ></Text>

          <Text
            x={545}
            y={126}
            text="B3"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(35);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A1-R1-B3")}
          ></Text>

          <Text
            x={575}
            y={126}
            text="B4"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(36);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A1-R1-B4")}
          ></Text>
          {/*Rceeiving  Rack 2 TEXT*/}
          <Text
            x={486}
            y={166}
            text="B1"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(37);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A2-R2-B1")}
          ></Text>

          <Text
            x={516}
            y={166}
            text="B2"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(38);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A2-R2-B2")}
          ></Text>

          <Text
            x={546}
            y={166}
            text="B3"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(39);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A2-R2-B3")}
          ></Text>

          <Text
            x={575}
            y={166}
            text="B4"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(40);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A2-R2-B4")}
          ></Text>
          {/* Picking rack 3 */}
          <Text
            x={486}
            y={206}
            text="B1"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(41);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A3-R3-B1")}
          ></Text>

          <Text
            x={516}
            y={206}
            text="B2"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(42);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A3-R3-B2")}
          ></Text>

          <Text
            x={546}
            y={206}
            text="B3"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(43);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A3-R3-B3")}
          ></Text>

          <Text
            x={575}
            y={206}
            text="B4"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(44);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PICK-A3-R3-B4")}
          ></Text>

          <Text
            x={510}
            y={148}
            text="---- Aisle 1 ----"
            fontSize={9}
            fill="#333333"
          ></Text>
          <Text x={462} y={130} text="R1" fontSize={9} fill="#333333"></Text>
          <Text
            x={510}
            y={188}
            text="---- Aisle 2 ----"
            fontSize={9}
            fill="#333333"
          ></Text>
          <Text x={462} y={170} text="R2" fontSize={9} fill="#333333"></Text>
          <Text
            x={510}
            y={228}
            text="---- Aisle 3 ----"
            fontSize={9}
            fill="#333333"
          ></Text>
          <Text x={462} y={210} text="R3" fontSize={9} fill="#333333"></Text>
            </>
          }

          {/* Return Area */}
          {/* Return Area Rack 1 */}
          {
            (selectedOption=="returns" || selectedOption=="all")&&
            <>
                <Rect
            x={480}
            y={260}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 45 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(45);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A1-R1-B1")}
          ></Rect>

          <Rect
            x={510}
            y={260}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 46 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(46);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A1-R1-B2")}
          ></Rect>
          <Rect
            x={540}
            y={260}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 47 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(47);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A1-R1-B3")}
          ></Rect>

          <Rect
            x={570}
            y={260}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 48 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(48);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A1-R1-B4")}
          ></Rect>
          {/* Return Area  Rack 2  */}
          <Rect
            x={480}
            y={300}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 49 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(49);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A2-R2-B1")}
          ></Rect>

          <Rect
            x={510}
            y={300}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 50 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(50);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A2-R2-B2")}
          ></Rect>
          <Rect
            x={540}
            y={300}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 51 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(51);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A2-R2-B3")}
          ></Rect>

          <Rect
            x={570}
            y={300}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 52 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(52);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A2-R2-B4")}
          ></Rect>

          {/* Return Area  Rack 3  */}
          <Rect
            x={480}
            y={340}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 53 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(53);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A3-R3-B1")}
          ></Rect>

          <Rect
            x={510}
            y={340}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 54 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(54);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A3-R3-B2")}
          ></Rect>
          <Rect
            x={540}
            y={340}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 55 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(55);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A3-R3-B3")}
          ></Rect>

          <Rect
            x={570}
            y={340}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 56 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(56);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A3-R3-B4")}
          ></Rect>
          {/*Return Area text */}

          {/*Return  Rack 1 TEXT */}
          <Text
            x={485}
            y={266}
            text="B1"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(45);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A1-R1-B1")}
          ></Text>

          <Text
            x={515}
            y={266}
            text="B2"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(46);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A1-R1-B2")}
          ></Text>

          <Text
            x={545}
            y={266}
            text="B3"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(47);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A1-R1-B3")}
          ></Text>

          <Text
            x={575}
            y={266}
            text="B4"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(48);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A1-R1-B4")}
          ></Text>
          {/*Return Area  Rack 2 TEXT*/}
          <Text
            x={485}
            y={306}
            text="B1"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(49);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A2-R2-B1")}
          ></Text>

          <Text
            x={515}
            y={306}
            text="B2"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(50);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A2-R2-B2")}
          ></Text>

          <Text
            x={545}
            y={306}
            text="B3"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(51);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A2-R2-B3")}
          ></Text>

          <Text
            x={575}
            y={306}
            text="B4"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(52);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A2-R2-B4")}
          ></Text>
          {/*Return Area rack 3 */}
          <Text
            x={485}
            y={345}
            text="B1"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(53);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A3-R3-B1")}
          ></Text>

          <Text
            x={515}
            y={346}
            text="B2"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(54);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A3-R3-B2")}
          ></Text>

          <Text
            x={545}
            y={346}
            text="B3"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(55);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A3-R3-B3")}
          ></Text>

          <Text
            x={575}
            y={346}
            text="B4"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(56);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("RET-A3-R3-B4")}
          ></Text>

          <Text
            x={510}
            y={288}
            text="---- Aisle 1 ----"
            fontSize={9}
            fill="#333333"
          ></Text>
          <Text x={463} y={270} text="R1" fontSize={9} fill="#333333"></Text>
          <Text
            x={510}
            y={328}
            text="---- Aisle 2 ----"
            fontSize={9}
            fill="#333333"
          ></Text>
          <Text x={463} y={310} text="R2" fontSize={9} fill="#333333"></Text>
          <Text
            x={510}
            y={368}
            text="---- Aisle 3 ----"
            fontSize={9}
            fill="#333333"
          ></Text>
          <Text x={463} y={350} text="R3" fontSize={9} fill="#333333"></Text>
            </>
          }

          {/* Packing bins -R1*/}
          {
            (selectedOption=="packing"||selectedOption=="all")&&
            <>
                <Rect
            x={660}
            y={200}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 57 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(57);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PACK-A1-R1-B1")}
          ></Rect>

          <Rect
            x={690}
            y={200}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 58 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(58);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PACK-A1-R1-B2")}
          ></Rect>
          <Rect
            x={720}
            y={200}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 59 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(59);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PACK-A1-R1-B3")}
          ></Rect>
          <Rect
            x={750}
            y={200}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 60 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(60);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PACK-A1-R1-B4")}
          ></Rect>

          {/* Packing bins - R2*/}
          <Rect
            x={660}
            y={245}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 61 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(61);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PACK-A2-R2-B1")}
          ></Rect>

          <Rect
            x={690}
            y={245}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 62 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(62);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PACK-A2-R2-B2")}
          ></Rect>
          <Rect
            x={720}
            y={245}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 63 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(63);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PACK-A2-R2-B3")}
          ></Rect>
          <Rect
            x={750}
            y={245}
            height={25}
            width={25}
            stroke="#333333"
            strokeWidth={isHovered == 64 ? 2.5 : 2}
            cornerRadius={2}
            fill="rgb(10, 248, 189)"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(64);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PACK-A2-R2-B4")}
          ></Rect>
          {/*packing  Rack 1 TEXT */}
          <Text
            x={665}
            y={206}
            text="B1"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(57);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PACK-A1-R1-B1")}
          ></Text>

          <Text
            x={695}
            y={206}
            text="B2"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(58);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PACK-A1-R1-B2")}
          ></Text>

          <Text
            x={725}
            y={206}
            text="B3"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(59);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PACK-A1-R1-B3")}
          ></Text>

          <Text
            x={755}
            y={206}
            text="B4"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(60);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PACK-A1-R1-B4")}
          ></Text>
          {/*Packing  Rack 2 TEXT*/}
          <Text
            x={665}
            y={253}
            text="B1"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(61);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PACK-A2-R2-B1")}
          ></Text>

          <Text
            x={695}
            y={253}
            text="B2"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(62);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PACK-A2-R2-B2")}
          ></Text>

          <Text
            x={725}
            y={253}
            text="B3"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(63);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PACK-A2-R2-B3")}
          ></Text>

          <Text
            x={755}
            y={253}
            text="B4"
            fontSize={14}
            fontFamily="Calibri"
            fill="#333333"
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              setIsHovered(64);
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsHovered(0);
            }}
            onClick={() => binClicked("PACK-A2-R2-B4")}
          ></Text>

          <Text
            x={690}
            y={230}
            text="---- Aisle 1 ----"
            fontSize={9}
            fill="#333333"
          ></Text>
          <Text x={643} y={210} text="R1" fontSize={9} fill="#333333"></Text>
          <Text
            x={690}
            y={275}
            text="---- Aisle 2 ----"
            fontSize={9}
            fill="#333333"
          ></Text>
          <Text x={643} y={256} text="R2" fontSize={9} fill="#333333"></Text>
            </>
          }
        </Layer>
      </Stage>
      </Fragment>
    </>
  );
}

export default Map