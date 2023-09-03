iniciarSesion();

let opcion = 0;

do {
  opcion = parseInt(
    prompt(
      "Menu principal:\n\n1- Ver categoria de productos\n2- Ver sucursales\n3- contactos\n\nPara salir ingrese 9"
    )
  );
  switch (opcion) {
    case 9:
      alert("Gracias por visitar nuestra tienda, vuelva pronto");
      break;
    case 1:
      opcionesCategorias();
      break;
    case 2:
      elegirSucursal();
      break;
    case 3:
      alert(
        "Contacto:\n\n *Whatsapp 1154224522\n *Email tiendadecomponentes@gmail.com\n *instagram @TiendaDeComponentes"
      );
      break;
    default:
      alert("Opcion no valida, vuelva a ingresar una opcion");
      break;
  }
} while (opcion !== 9);

function opcionesCategorias() {
  let opcionCategorias = parseInt(
    prompt(
      "Categoria de productos: \n\n 1- Placas de video\n 2- Microprocesadores\n 3- Motherboards\n 4- Memorias RAM\n 5- Perifericos\n 0- Para salir de la tienda "
    )
  );
  switch (opcionCategorias) {
    case 1:
      opcionesPlacasVideo();
      break;
    case 2:
      opcionesProcesador();
      break;
    case 3:
      opcionesMother();
      break;
    case 4:
      opcionesRam();
      break;
    case 5:
      opcionesPerifericos();
      break;
    case 0:
      alert("Gracias por visitar nuestra tienda, vuelva pronto");
      break;
    default:
      alert("Opcion no valida, vuelva a ingresar una opcion");
      break;
  }
}

function iniciarSesion() {
  let nombreUsuario = prompt("Ingrese su nombre de usuario");
  let suContrasenia = prompt("Ingrese su contraseña");
  const fecha = new Date();

  class User {
    constructor(nombre, password) {
      this.nombre = nombre;
      this.password = password;
    }

    inicioDeSesion() {
      alert(
        "bienvenido a nuestra tienda " +
          this.nombre +
          "\nfecha de inicio de sesion: " +
          fecha.toLocaleDateString()
      );
    }
  }

  const user1 = new User(nombreUsuario, suContrasenia);
  user1.inicioDeSesion();
}

function elegirSucursal() {
  let elegirSucursal = parseInt(
    prompt(
      "Nuestras sucursales:\n\n 1.Sucursal Palermo\n 2.Sucursal Belgrano\n 3.Sucursal San isidro"
    )
  );
  if (elegirSucursal == 1) {
    alert("Sucursal de Palermo\n\n Av Libertador 23423");
  } else if (elegirSucursal == 2) {
    alert("Sucursal de Belgrano\n\n Av Cabildo 2446");
  } else if (elegirSucursal == 3) {
    alert("Sucursal de San Isidro\n\n Calle San Martin 2457");
  } else {
    alert("Opcion invalida, volviendo al menu principal");
  }
}

function opcionesPlacasVideo() {
  let elegirMetodoDeBusca = parseInt(
    prompt(
      "Elegir como quiere buscar:\n\n 1.Mostrar todas las placas\n 2.Buscar placas mayores a USD 500\n 3.Buscar placas menores a USD 500"
    )
  );

  switch (elegirMetodoDeBusca) {
    case 1:
      let elegirPlaca = parseInt(
        prompt(
          "Placas de video:\n\n 1.RTX 3080 = 1000u$d\n 2.RTX 2080 = 600u$d\n 3.GTX 1080 = 300u$d"
        )
      );
      const placasVideo = [
        { modelo: "RTX 3080", precio: "USD1000" },
        { modelo: "RTX 2080", precio: "USD600" },
        { modelo: "GTX 1080", precio: "USD300" },
      ];

      if (placasVideo[0] && elegirPlaca == 1) {
        alert(placasVideo[0].modelo);
        alert("Usted ha agregado " + placasVideo[0].modelo + " al carrito");
      } else if (placasVideo[1] && elegirPlaca == 2) {
        alert(placasVideo[1].modelo);
        alert("Usted ha agregado " + placasVideo[1].modelo + " al carrito");
      } else if (placasVideo[2] && elegirPlaca == 3) {
        alert(placasVideo[2].modelo);
        alert("Usted ha agregado " + placasVideo[2].modelo + " al carrito");
      } else {
        alert("Opcion invalida, volviendo al menu principal");
      }
      break;
    case 2:
      const placasVideo2 = [
        { modelo: "RTX 3080", precio: 1000 },
        { modelo: "RTX 2080", precio: 600 },
        { modelo: "GTX 1080", precio: 300 },
      ];

      const modelosMayoresA500 = placasVideo2
        .filter((el) => el.precio > 500)
        .map((el) => el.modelo);

      alert("Modelos con precio mayor a USD500:\n\n" + modelosMayoresA500);
      break;
    case 3:
      const placasVideo3 = [
        { modelo: "RTX 3080", precio: 1000 },
        { modelo: "RTX 2080", precio: 600 },
        { modelo: "GTX 1080", precio: 300 },
      ];

      const modelosMenoresA500 = placasVideo3
        .filter((el) => el.precio < 500)
        .map((el) => el.modelo);

      alert("Modelos con precio menor a USD500:\n\n" + modelosMenoresA500);
      break;
    case 0:
      alert("Volver al menu principal");
      break;
  }
}

function opcionesProcesador() {
  let elegirMetodoDeBusca = parseInt(
    prompt(
      "Elegir como quiere buscar:\n\n 1.Mostrar todas los microprocesadores\n 2.Buscar microprocesadores mayores a USD 150\n 3.Buscar placas menores a USD 150"
    )
  );

  switch (elegirMetodoDeBusca) {
    case 1:
      let elegirProcesador = parseInt(
        prompt(
          "Microprocesadores: \n\n 1.Intel I5 13ra Generacion = 200u$d\n 2.Intel I7 13ra Generacion = 300u$d\n 3.Ryzen 5 3200 = 100u$d"
        )
      );

      const procesador = [
        { modelo: "Intel I5 13ra generacion", precio: 200 },
        { modelo: "Intel I7 13ra generacion", precio: 300 },
        { modelo: "Ryzen 5 3200", precio: 100 },
      ];

      if (procesador[0] && elegirProcesador == 1) {
        alert(procesador[0].modelo);
        alert("Usted ha agregado " + procesador[0].modelo + " al carrito");
      } else if (procesador[1] && elegirProcesador == 2) {
        alert(procesador[1].modelo);
        alert("Usted ha agregado " + procesador[1].modelo + " al carrito");
      } else if (procesador[2] && elegirProcesador == 3) {
        alert(procesador[2].modelo);
        alert("Usted ha agregado " + procesador[2].modelo + " al carrito");
      } else {
        alert("Opcion invalida, volviendo al menu principal");
      }
      break;
    case 2:
      const procesador2 = [
        { modelo: "Intel I5 13ra generacion", precio: 200 },
        { modelo: "Intel I7 13ra generacion", precio: 300 },
        { modelo: "Ryzen 5 3200", precio: 100 },
      ];

      const modelosMayoresA150 = procesador2
        .filter((el) => el.precio > 150)
        .map((el) => el.modelo);

      alert("Modelos con precio mayor a USD150:\n\n" + modelosMayoresA150);
      break;
    case 3:
      const procesador3 = [
        { modelo: "Intel I5 13ra generacion", precio: 200 },
        { modelo: "Intel I7 13ra generacion", precio: 300 },
        { modelo: "Ryzen 5 3200", precio: 100 },
      ];

      const modelosMenoresA150 = procesador3
        .filter((el) => el.precio < 150)
        .map((el) => el.modelo);

      alert("Modelos con precio menor a USD150:\n\n" + modelosMenoresA150);
      break;
    case 0:
      alert("Volver al menu principal");
      break;
  }
}

function opcionesMother() {
  let elegirMetodoDeBusca = parseInt(
    prompt(
      "Elegir como quiere buscar:\n\n 1.Mostrar todas las motherboards\n 2.Buscar motherboards mayores a USD 150\n 3.Buscar motherboards menores a USD 150"
    )
  );

  switch (elegirMetodoDeBusca) {
    case 1:
      let elegirMother = parseInt(
        prompt(
          "Motherboards: \n\n 1.Gigabyte B450m = 100u$d\n 2.Asrock H510 Pro = 210u$d\n 3.Asus Prime H610m-e = 250u$d"
        )
      );
      const motherBoard = [
        { modelo: "Gigabyte B450m", precio: 100 },
        { modelo: "Asrock H510", precio: 210 },
        { modelo: "Asus Prime H610-e", precio: 250 },
      ];

      if (motherBoard[0] && elegirMother == 1) {
        alert(motherBoard[0].modelo);
        alert("Usted ha agregado " + motherBoard[0].modelo + " al carrito");
      } else if (motherBoard[1] && elegirMother == 2) {
        alert(motherBoard[1].modelo);
        alert("Usted ha agregado " + motherBoard[1].modelo + " al carrito");
      } else if (motherBoard[2] && elegirMother == 3) {
        alert(motherBoard[2].modelo);
        alert("Usted ha agregado " + motherBoard[2].modelo + " al carrito");
      } else {
        alert("Opcion invalida, volviendo al menu principal");
      }
      break;
    case 2:
      const motherBoard2 = [
        { modelo: "Gigabyte B450m", precio: 100 },
        { modelo: "Asrock H510", precio: 210 },
        { modelo: "Asus Prime H610-e", precio: 250 },
      ];

      const modelosMayoresA150 = motherBoard2
        .filter((el) => el.precio > 150)
        .map((el) => el.modelo);

      alert("Modelos con precio mayor a USD150:\n\n" + modelosMayoresA150);
      break;
    case 3:
      const motherBoard3 = [
        { modelo: "Gigabyte B450m", precio: 100 },
        { modelo: "Asrock H510", precio: 210 },
        { modelo: "Asus Prime H610-e", precio: 250 },
      ];

      const modelosMenoresA150 = motherBoard3
        .filter((el) => el.precio < 150)
        .map((el) => el.modelo);

      alert("Modelos con precio menor a USD150:\n\n" + modelosMenoresA150);
      break;
    case 0:
      alert("Volver al menu principal");
      break;
  }
}

function opcionesRam() {
  let elegirMetodoDeBusca = parseInt(
    prompt(
      "Elegir como quiere buscar:\n\n 1.Mostrar todas las memorias RAM\n 2.Buscar memorias mayores a USD 50\n 3.Buscar motherboards menores a USD 50"
    )
  );

  switch (elegirMetodoDeBusca) {
    case 1:
      let elegirRam = parseInt(
        prompt(
          "Memorias RAM:\n\n 1.Memoria Patriot V4s viper Steel Series 8gb ddr4 = 40u$d\n 2.Memoria Netac Shadow 8gb ddr4 = 25u$d\n 3.Memoria Patriot Signature Line 16gb ddr4 = 90u$d"
        )
      );

      const memoriaRam = [
        { modelo: "Patriot V4s viper steel series 8gb ddr4", precio: 40 },
        { modelo: "Netac shadow 8gb ddr4", precio: 25 },
        { modelo: "Patriot signature line 16gb ddr4", precio: 90 },
      ];

      if (memoriaRam[0] && elegirRam == 1) {
        alert(memoriaRam[0].modelo);
        alert(
          "Usted ha agregado Memoria " + memoriaRam[0].modelo + " al carrito"
        );
      } else if (memoriaRam[1] && elegirRam == 2) {
        alert(memoriaRam[1].modelo);
        alert(
          "Usted ha agregado Memoria " + memoriaRam[1].modelo + " al carrito"
        );
      } else if (memoriaRam[2] && elegirRam == 3) {
        alert(memoriaRam[2].modelo);
        alert(
          "Usted ha agregado Memoria " + memoriaRam[2].modelo + " al carrito"
        );
      } else {
        alert("Opcion invalida, volviendo al menu principal");
      }
      break;
    case 2:
      const memoriaRam2 = [
        { modelo: "Patriot V4s viper steel series 8gb ddr4", precio: 40 },
        { modelo: "Netac shadow 8gb ddr4", precio: 25 },
        { modelo: "Patriot signature line 16gb ddr4", precio: 90 },
      ];

      const modelosMayoresA50 = memoriaRam2
        .filter((el) => el.precio > 50)
        .map((el) => el.modelo);

      alert("Modelos con precio mayor a USD50:\n\n" + modelosMayoresA50);
      break;
    case 3:
      const memoriaRam3 = [
        { modelo: "Patriot V4s viper steel series 8gb ddr4", precio: 40 },
        { modelo: "Netac shadow 8gb ddr4", precio: 25 },
        { modelo: "Patriot signature line 16gb ddr4", precio: 90 },
      ];

      const modelosMenoresA50 = memoriaRam3
        .filter((el) => el.precio < 50)
        .map((el) => el.modelo);

      alert("Modelos con precio menor a USD50:\n\n" + modelosMenoresA50);
      break;
    case 0:
      alert("Volver al menu principal");
      break;
  }
}

function opcionesPerifericos() {
  let elegirMetodoDeBusca = parseInt(
    prompt(
      "Elegir como quiere buscar:\n\n 1.Mostrar todos los perifericos\n 2.Buscar perifericos mayores a USD 50\n 3.Buscar motherboards menores a USD 50"
    )
  );

  switch (elegirMetodoDeBusca) {
    case 1:
      let elegirPeriferico = parseInt(
        prompt(
          "Perifericos:\n\n 1.Auriculares Redragon Ares = 30u$d\n 2.Mouse Gamer Razer Viper = 35u$d\n 3.Teclado Gamer Razer Blackwidow = 40u$d"
        )
      );

      const perifericos = [
        { modelo: "Auriculares Redragon Ares", precio: 35 },
        { modelo: "Mouse Razer Viper", precio: 60 },
        { modelo: "Teclado Razer Blackwidow", precio: 70 },
      ];

      if (perifericos[0] && elegirPeriferico == 1) {
        alert(perifericos[0].modelo);
        alert("Usted ha agregado " + perifericos[0].modelo + " al carrito");
      } else if (perifericos[1] && elegirPeriferico == 2) {
        alert(perifericos[1].modelo);
        alert("Usted ha agregado " + perifericos[1].modelo + " al carrito");
      } else if (perifericos[2] && elegirPeriferico == 3) {
        alert(perifericos[2].modelo);
        alert("Usted ha agregado " + perifericos[2].modelo + " al carrito");
      } else {
        alert("Opcion invalida, volviendo al menu principal");
      }
      break;
    case 2:
      const perifericos2 = [
        { modelo: "Auriculares Redragon Ares", precio: 35 },
        { modelo: "Mouse Razer Viper", precio: 60 },
        { modelo: "Teclado Razer Blackwidow", precio: 70 },
      ];

      const modelosMayoresA50 = perifericos2
        .filter((el) => el.precio > 50)
        .map((el) => el.modelo);

      alert("Modelos con precio mayor a USD50:\n\n" + modelosMayoresA50);
      break;
    case 3:
      const perifericos3 = [
        { modelo: "Auriculares Redragon Ares", precio: 35 },
        { modelo: "Mouse Razer Viper", precio: 60 },
        { modelo: "Teclado Razer Blackwidow", precio: 70 },
      ];

      const modelosMenoresA50 = perifericos3
        .filter((el) => el.precio < 50)
        .map((el) => el.modelo);

      alert("Modelos con precio menor a USD50:\n\n" + modelosMenoresA50);
      break;
    case 0:
      alert("Volver al menu principal");
      break;
  }
}
