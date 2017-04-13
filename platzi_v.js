var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujarVaca();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujarVaca();
}

document.addEventListener("keydown", moverVaca);

var x = 150;
var y = 150;
var movimiento = 10;

function dibujarVaca()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
      papel.drawImage(vaca.imagen, x, y);
      
  }
}

function moverVaca(evento)
{
  switch(evento.keyCode)
      {
        case teclas.UP:
          y = y - movimiento;
          dibujarVaca();
        break;
        case teclas.DOWN:
          y = y + movimiento;
          dibujarVaca();
        break;
        case teclas.LEFT:
          x = x - movimiento;
          dibujarVaca();
        break;
        case teclas.RIGHT:
          x = x + movimiento;
          dibujarVaca();
        break;
      }
}
