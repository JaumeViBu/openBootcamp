const miNombre = "Jaume";
const miApellido = "Vidal";

const miPersona = {
  nombre: miNombre,
  apellido: miApellido
};

const miPersonaStringified = JSON.stringify(miPersona);

// sessionStorage.setItem("miPersona", miPersonaStringified);
// localStorage.setItem("miPersona", miPersonaStringified);

// const expireTime = new Date();
// expireTime.setMinutes(expireTime.getMinutes() + 2);

// document.cookie = `miPersona=${miPersonaStringified}; expires=${expireTime.toUTCString()}`;
