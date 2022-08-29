const f = (() => {
  // create the svg element
  const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  // set width and height
  svg1.setAttribute("width", "400");
  svg1.setAttribute("height", "400");

  // create a circle
  const cir1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  cir1.setAttribute("cx", "80");
  cir1.setAttribute("cx", "80");
  cir1.setAttribute("cy", "80");
  cir1.setAttribute("r", "30");
  cir1.setAttribute("fill", "darkgreen");
  cir1.setAttribute("id", "circle1");

  // attach it to the container
  svg1.appendChild(cir1);

  // Line(s)
  const line1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line",
  );

  line1.setAttribute('x1', '80');
  line1.setAttribute('y1', '80');
  line1.setAttribute('x2', '0');
  line1.setAttribute('y2', '400');
  line1.setAttribute("id", "line1");

  line1.setAttribute('stroke', 'seagreen');
  line1.setAttribute('stroke-width', '10');

  svg1.appendChild(line1);
  const line2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line",
  );
  line2.setAttribute('x1', '80');
  line2.setAttribute('y1', '80');
  line2.setAttribute('x2', '100');
  line2.setAttribute('y2', '400');
  line2.setAttribute("id", "line2");

  line2.setAttribute('stroke', 'black');
  line2.setAttribute('stroke-width', '10');

  svg1.appendChild(line2);
  const line3 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line",
  );
  line3.setAttribute('x1', '80');
  line3.setAttribute('y1', '80');
  line3.setAttribute('x2', '200');
  line3.setAttribute('y2', '400');
  line3.setAttribute("id", "line3");

  line3.setAttribute('stroke', 'seagreen');
  line3.setAttribute('stroke-width', '10');

  svg1.appendChild(line3);

  // Star
  const arrow1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon",
  );

  arrow1.setAttribute('points', '25,0 70,45 170,145 -10,45');

  arrow1.setAttribute('stroke', 'seagreen');
  arrow1.setAttribute('stroke-width', '10');

  svg1.appendChild(arrow1);

  // attach container to document
  document.getElementById("SVG").appendChild(svg1);
});

f();
