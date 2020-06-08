const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");
const level = document.getElementById("level");
const ULTIMO_NIVEL = 3;

class Juego {
  constructor() {
    this.inicializar = this.inicializar.bind(this);
    this.cuentaRegresiva();
  }

  inicializar() {
    this.siguienteNivel = this.siguienteNivel.bind(this);
    this.elegirColor = this.elegirColor.bind(this); // Bind, enlaza el this a la funcion que desee, en este caso a la clase;
    this.toggleBtnEmpezar();
    this.nivel = 1;
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde,
    };
  }

  generarSecuencia() {
    this.secuencia = Array(ULTIMO_NIVEL)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }

  siguienteNivel() {
    this.subnivel = 0;
    this.iluminarSecuencia();
    this.agregarEventosClick();
  }

  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformarNumeroAColor(this.secuencia[i]);
      /* BUG: Al utilizar var dentro de un ciclo, su valor se va pisando,
      ya que con cada iteracion se crea una nueva variable y al pasarla al setTimeout siempre su
      valor es el ultimo que se asignó, si usamos let, cada bloque tendrá una asignacion de color
      propia, y para mejorar más el programa y evitar más BUGS se define const ya que cada bloque
      tendrá su propio valor y nunca se va a reasignar.
      */
      setTimeout(() => this.iluminarColor(color), 800 * i);
    }
  }

  iluminarColor(color) {
    this.colores[color].classList.add("light");
    setTimeout(() => this.apagarColor(color), 350);
  }

  apagarColor(color) {
    this.colores[color].classList.remove("light");
  }

  transformarNumeroAColor(num) {
    switch (num) {
      case 0:
        return "celeste";
      case 1:
        return "violeta";
      case 2:
        return "naranja";
      case 3:
        return "verde";
    }
  }

  transformarColorANumero(color) {
    switch (color) {
      case "celeste":
        return 0;
      case "violeta":
        return 1;
      case "naranja":
        return 2;
      case "verde":
        return 3;
    }
  }

  agregarEventosClick() {
    /*var self = this;
      var _this = this;
      con esas sentencias, se hace referencia a this, y es común encontrarlo
    */
    for (let btnColor in this.colores) {
      this.colores[btnColor].addEventListener("click", this.elegirColor);
    }
  }

  eliminarEventosClick() {
    for (let btnColor in this.colores) {
      this.colores[btnColor].removeEventListener("click", this.elegirColor);
    }
  }

  elegirColor(ev) {
    const nombreColor = ev.target.dataset.color;
    const numeroColor = this.transformarColorANumero(nombreColor);
    this.iluminarColor(nombreColor);
    if (numeroColor === this.secuencia[this.subnivel]) {
      this.subnivel++;
      if (this.subnivel === this.nivel) {
        this.nivel++;
        this.nivelActual(this.nivel);
        this.eliminarEventosClick();
        if (this.nivel === ULTIMO_NIVEL + 1) {
          this.ganoElJuego();
          this.nivelActual(ULTIMO_NIVEL);
        } else {
          setTimeout(this.siguienteNivel, 1000);
        }
      }
    } else {
      this.perdioElJuego();
      this.nivelActual(1);
    }
  }

  ganoElJuego() {
    swal("Simón dice", "Felicidades, ganaste el juego!", "success").then(
      this.inicializar
    );
  }

  perdioElJuego() {
    swal("Simón dice", "Lo lamentamos, perdiste el juego!", "error").then(
      () => {
        this.eliminarEventosClick();
        this.inicializar();
      }
    );
  }

  nivelActual(num) {
    level.textContent = `Nivel: ${num}`;
  }

  toggleBtnEmpezar() {
    if (btnEmpezar.classList.contains("hide")) {
      btnEmpezar.classList.remove("hide");
      btnEmpezar.textContent = "Empezar a jugar!";
    } else {
      btnEmpezar.classList.add("hide");
    }
  }

  cuentaRegresiva() {
    let j = 0;
    let time;
    for (let i = 3; i >= 0; i--) {
      while (j <= 3) {
        j++;
        time = j - 1;
        break;
      }
      setTimeout(() => {
        btnEmpezar.classList.add("btn-start-count");
        btnEmpezar.textContent = i;
        if (i === 0) {
          btnEmpezar.classList.remove("btn-start-count");
          this.inicializar();
          this.generarSecuencia();
          setTimeout(this.siguienteNivel, 500);
        }
      }, 1000 * time);
    }
  }
}
