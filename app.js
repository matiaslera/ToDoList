let inputMaster = document.querySelector(".input");
let botonAdd = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");
botonAdd.addEventListener("click", chequearInput);

class Item {
  constructor(input) {
    this.crearDiv(input);
  }

  /**
   *Crea el div para la nueva tarea
   * @param {string} nuevaTarea
   */
  crearDiv(nuevaTarea) {
    if (inputMaster.value !== "") {
      let inputItem = document.createElement("input");
      let newDiv = document.createElement("div");
      let botonEditar = document.createElement("button");
      let botonRemover = document.createElement("button");
      inputItem.setAttribute("disabled", "true");
      inputItem.setAttribute("value", nuevaTarea);
      inputItem.setAttribute("type", "text");
      inputItem.classList.add("item-input");
      botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>';
      botonEditar.classList.add("boton-editar");
      botonEditar.addEventListener("click", this.editar);
      botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
      botonRemover.classList.add("boton-remover");
      botonRemover.addEventListener("click", this.remover);
      newDiv.classList.add("item");
      newDiv.appendChild(inputItem);
      newDiv.appendChild(botonEditar);
      newDiv.appendChild(botonRemover);
      container.appendChild(newDiv);
    }
  }

  editar(evento) {
    let eventObject = evento.target;
    if (eventObject.tagName === "I") {
      let padreEvent = eventObject.parentElement;
      let abueloEvent = eventObject.parentElement.parentElement;
      let hijos = abueloEvent.childNodes;
      let inputResult;
      /* console.log("padre");
      console.log(padreEvent);
      console.log("abuelo");
      console.log(abueloEvent);
      console.log("hijos");
      console.log(hijos); */
      hijos.forEach((element) => {
        if (element.tagName === "INPUT") {
          inputResult = element;
        }
      });
      if (inputResult.disabled) {
        inputResult.disabled = false;
        padreEvent.innerHTML = "<i class='fas fa-lock-open'></i>";
      } else {
        console.dir(inputResult);
        if(inputResult.value===""){
          return alert("No deje el campo vacio")
        }else{
          inputResult.disabled = true;
          padreEvent.innerHTML = "<i class='fas fa-lock'></i>";
        }
      }
    }
  }
  
  remover(evento) {
    let eventObject = evento.target;
    let parentEvent = eventObject.parentElement;
    if (parentEvent.tagName === "BUTTON") {
      container.removeChild(parentEvent.parentElement);
    }
    if (parentEvent.tagName === "DIV") {
      container.removeChild(parentEvent);
    }
  }
}

function chequearInput(event) {
  var sel = window.getSelection && window.getSelection();
  console.log(sel);
  if (inputMaster.value !== "") {
    new Item(inputMaster.value);
    inputMaster.value = "";
  }
}
