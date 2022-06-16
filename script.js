// DOM Elements
const mainPage = document.querySelector(".main-page");
const loginPage = document.querySelector(".login-page");
const $registerPage=document.querySelector(".register-page");
const middleContent = document.querySelector(".middle-content");
const btnTop = document.querySelector(".btn-top");
const newsFeedPage = document.querySelector(".feeds-page");
const loginModal = document.querySelector(".login-modal");
const modalX = document.querySelector(".login-modal i");
const loginFormBtn = document.querySelector(".login-form-btn");
const postBtn = document.querySelector(".post-btn");
const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
const postModalX = document.querySelector(".modal-header i");
const modalPostBtn = document.querySelector(".modal-header button");
const modalFooterPlus = document.querySelector(".modal-footer span");
const modalInput = document.querySelector(".modal-input");
const user = document.querySelector(".user");
const sidebar = document.querySelector(".sidebar");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const xBtn = document.querySelector(".sidebar-header i");
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");
const carritoAlbendazol= document.querySelector("#albendazol");
const carritoAlbendazolmenos=document.querySelector("#resta");
const $carripoMedicamentos=document.querySelectorAll(".item-catalogo");
/**************************************/
/**************************************/

// Main page
const goToLoginPage = () => {
  mainPage.style.display = "none";
  loginPage.style.display = "grid";
};

middleContent.addEventListener("click", (e) => {
  if (e.target.classList[1] === "main-btn") {
    goToLoginPage();
  }
});

btnTop.addEventListener("click", () => {
  // const inputUserInfo = document.querySelector('.user-info');
  // const inputPassword = document.querySelector('.password');

  // if (inputUserInfo.value !== '' && inputPassword.value !== '') {
  // 	mainPage.style.display = 'none';
  // 	newsFeedPage.style.display = 'block';
  // } else {
  // 	goToLoginPage();
  // 	loginModal.style.display = 'block';
  // }

  mainPage.style.display = "none";
  newsFeedPage.style.display = "block";
});

// Login page
modalX.addEventListener("click", () => {
  loginModal.style.display = "none";
});

loginFormBtn.addEventListener("click", () => {
  // const loginUserInfo = document.querySelector('.login-user-info');
  // const loginPassword = document.querySelector('.login-password');

  // if (loginUserInfo.value !== '' && loginPassword.value !== '') {
  // 	loginPage.style.display = 'none';
  // 	newsFeedPage.style.display = 'block';
  // } else {
  // 	loginModal.style.display = 'block';
  // }
  loginPage.style.display = "none";
  newsFeedPage.style.display = "block";
});

// News feed page
// Post modal
postBtn.addEventListener("click", () => {
  modal.style.display = "block";
  modalWrapper.classList.add("modal-wrapper-display");
});

const changeOpacity = (x) => {
  modalPostBtn.style.opacity = x;
  modalFooterPlus.style.opacity = x;
};

postModalX.addEventListener("click", () => {
  modal.style.display = "none";
  modalWrapper.classList.remove("modal-wrapper-display");

  if (modalInput.value !== "") {
    modalInput.value = "";
    changeOpacity(0.5);
  }
});

modalInput.addEventListener("keypress", (e) => {
  if (e.target.value !== "") {
    changeOpacity(1);
  }
});

modalInput.addEventListener("blur", (e) => {
  if (e.target.value === "") {
    changeOpacity(0.5);
  }
});

// Sidebar
user.addEventListener("click", () => {
  sidebar.classList.add("sidebar-display");
  sidebarWrapper.classList.add("sidebar-wrapper-display");
});

xBtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-display");
  sidebarWrapper.classList.remove("sidebar-wrapper-display");
});

// dark mode
const darkElements1 = document.querySelectorAll(".dark-mode-1");
const darkElements2 = document.querySelectorAll(".dark-mode-2");
const lighTexts = document.querySelectorAll(".light-text");
const borders = document.querySelectorAll(".border");

toggle.addEventListener("click", () => {
  circle.classList.toggle("move");
  Array.from(darkElements1).map((darkEl1) =>
    darkEl1.classList.toggle("dark-1")
  );
  Array.from(darkElements2).map((darkEl2) =>
    darkEl2.classList.toggle("dark-2")
  );
  Array.from(lighTexts).map((lighText) => lighText.classList.toggle("light"));
  Array.from(borders).map((border) => border.classList.toggle("border-color"));
});



function incrementar($contador,precio,$total){

	let i=($contador.textContent);
	i++;
	$contador.textContent=i;	
  
  let totalCarrito=0;
  totalCarrito=Math.abs($total.textContent)+Math.abs(precio);  
  $total.textContent=(totalCarrito);
}

function disminuir($contador,precio,$total){
	let i=($contador.textContent);
	i--;
	$contador.textContent=i;	
  let totalCarrito=0;
  totalCarrito=Math.abs($total.textContent)-Math.abs(precio);  
  $total.textContent=(totalCarrito);
}



// document.addEventListener("DOMContentLoaded",(e)=>{
  
// })


  const $medicamentosEnElCarrito=document.querySelectorAll(".agregarAlCarrito");
  let contador=0;

  for(let i=0;i<$carripoMedicamentos.length;i++){
    $carripoMedicamentos[i].addEventListener("click",(e)=>{
      
      const $nombreMeidcamento=document.querySelectorAll(".item-catalogo span:nth-of-type(1)")[i].textContent;
      const $precioMedicamento=document.querySelectorAll(".item-catalogo h2 p")[i].textContent;
      const $listaDelCarrito=document.querySelectorAll(".medicamento div:nth-of-type(2) h4");
      let validacion=false;
      // console.log($listaDelCarrito);
      if(e.target.classList.contains('agregarAlCarrito')){
        // alert("tambien funciona");
        for(let y=0;y<$listaDelCarrito.length;y++){
          if($listaDelCarrito[y].textContent===$nombreMeidcamento){
            incrementar(document.querySelectorAll(".medicamento div:nth-of-type(2) span")[y],$precioMedicamento,
            document.querySelector(".carritoDesdeOscuro h2 span"));  

            validacion=true;
            break;
          }
        }
        
        if(validacion===false){            
          const $principalConteiner=document.createElement("div");
          
          $principalConteiner.classList.add("follow-user");
          $principalConteiner.classList.add("border");
          $principalConteiner.classList.add("medicamento");                

          $principalConteiner.innerHTML=`
          <div class="follow-user-img">
        <img src=`+(document.querySelectorAll(".item-catalogo div:nth-of-type(2) div:nth-of-type(2) img")[i].getAttribute("src"))+` />
      </div>
      
     <div class="follow-user-info light-text">
        <h4>`+$nombreMeidcamento+`</h4>
        <p><span>0</span> Unidades</p>
      </div>          
      
      <div class="plus">        
        <i class="fas fa-plus-circle fa-3x agregar" data-nombre="`+$nombreMeidcamento+`" style="margin-top: 10px;"></i>
        <p class="desagregar" data-nombre="`+$nombreMeidcamento+`">_</p>
        <i class="fas fa-trash-alt fa-3x eliminar" data-nombre="`+$nombreMeidcamento+`" style="margin-left:5px ;"></i>
      </div>`;

      let contenedor=document.querySelector(".carritoConteiner");
      contenedor.insertAdjacentElement("afterend",$principalConteiner);
                      
      for(let y=0;y<document.querySelectorAll(".medicamento div:nth-of-type(2) span").length;y++){
               
        if(document.querySelectorAll(".medicamento div:nth-of-type(2) h4")[y].textContent===$nombreMeidcamento){
          incrementar( document.querySelectorAll(".medicamento div:nth-of-type(2) span")[y],$precioMedicamento,
          document.querySelector(".carritoDesdeOscuro h2 span"));  
          //  console.log($precioMedicamento)
        }

      }             


                      // console.log("eso es aqui");
                      // console.log($principalConteiner.childNodes[3].childNodes[1].textContent);
                      
          $principalConteiner.addEventListener("click",(e)=>{
            // console.log(e.target);
            
            if(e.target.classList.contains('agregar') && e.target.getAttribute("data-nombre")===$principalConteiner.childNodes[3].childNodes[1].textContent){
              
              for(let y=0;y<document.querySelectorAll(".medicamento div:nth-of-type(2) span").length;y++){
               
                if(document.querySelectorAll(".medicamento div:nth-of-type(2) h4")[y].textContent===$nombreMeidcamento){
                  incrementar( document.querySelectorAll(".medicamento div:nth-of-type(2) span")[y],$precioMedicamento,
                  document.querySelector(".carritoDesdeOscuro h2 span"));  
                  //  console.log($precioMedicamento)
                }

              }             
              
            }
            
            if(e.target.classList.contains('desagregar') 
            && e.target.getAttribute("data-nombre")===$principalConteiner.childNodes[3].childNodes[1].textContent){
                
              for(let y=0;y<document.querySelectorAll(".medicamento div:nth-of-type(2) span").length;y++){
               
                if(document.querySelectorAll(".medicamento div:nth-of-type(2) h4")[y].textContent===$nombreMeidcamento){
                  disminuir(document.querySelectorAll(".medicamento div:nth-of-type(2) span")[y],$precioMedicamento,
                  document.querySelector(".carritoDesdeOscuro h2 span"));   
                }

              }
            }
            
            if(e.target.classList.contains('eliminar')
            && e.target.getAttribute("data-nombre")===$principalConteiner.childNodes[3].childNodes[1].textContent){
              for(let y=0;y<document.querySelectorAll(".medicamento div:nth-of-type(2) span").length;y++){

                let precioFinal=Math.abs($precioMedicamento)*Math.abs(document.querySelector(".medicamento div:nth-of-type(2) span").textContent)+"";
                
                if(document.querySelectorAll(".medicamento div:nth-of-type(2) h4")[y].textContent===$nombreMeidcamento){
              disminuir(document.querySelectorAll(".medicamento div:nth-of-type(2) span")[y],
              precioFinal,document.querySelector(".carritoDesdeOscuro h2 span"));  
              document.querySelectorAll(".medicamento")[y].classList.add("none");
              document.querySelectorAll(".medicamento")[y].classList.remove("medicamento");
                }
              }
            }

          })

          if(document.querySelectorAll(".medicamento").length>3){
            document.querySelectorAll(".medicamento")[2].classList.add("none");
          }

      }
      }



    })


  }



  const $ElementosDelCarrito=document.querySelectorAll(".medicamento");
  

  
     for(let i=0;i<1;i++){
      $ElementosDelCarrito[i].addEventListener("click",(e)=>{        
        
        console.log(e.target.classList.contains('agregar'));
        if(e.target.classList.contains('agregar')){
          console.log(document.querySelector(".carritoDesdeOscuro h2 span"));
          incrementar(document.querySelectorAll(".medicamento div:nth-of-type(2) span")[document.querySelectorAll(".medicamento").length-1],
          "100",document.querySelector(".carritoDesdeOscuro h2 span")); 
          
        }
        if(e.target.classList.contains('desagregar')){
          disminuir(document.querySelectorAll(".medicamento div:nth-of-type(2) span")[document.querySelectorAll(".medicamento").length-1]
          ,"100",document.querySelector(".carritoDesdeOscuro h2 span")); 
        }

        if(e.target.classList.contains('eliminar')){

            let precioFinal=Math.abs(100)*Math.abs(document.querySelector(".medicamento div:nth-of-type(2) span").textContent)+"";
            
            
          disminuir(document.querySelectorAll(".medicamento div:nth-of-type(2) span")[document.querySelectorAll(".medicamento").length-1],
          precioFinal,document.querySelector(".carritoDesdeOscuro h2 span"));  
          document.querySelectorAll(".medicamento")[document.querySelectorAll(".medicamento").length-1].classList.add("none");
          document.querySelectorAll(".medicamento")[document.querySelectorAll(".medicamento").length-1].classList.remove("medicamento");
            
          
        }

  
      })
     }


const $verTodo=document.getElementById("carritoCompleto");
const $carrito=document.querySelector(".carritoDesdeOscuro");

$verTodo.addEventListener("click",()=>{
  if($verTodo.textContent==="Salir"){
    $carrito.classList.remove("follow-carrito");
    $carrito.classList.add("follow");
    $verTodo.textContent="Ver todo";
    if(document.querySelector(".carritoDesdeOscuro footer").classList.contains("none")){
      document.querySelector(".carritoDesdeOscuro footer").classList.remove("none");
    }
    if(document.querySelectorAll(".medicamento").length>3){
      for(let y=3;y<document.querySelectorAll(".medicamento").length; y++){
        if(!document.querySelectorAll(".medicamento")[y].classList.contains("none")){
          document.querySelectorAll(".medicamento")[y].classList.add("none");
        }      
      }
    }
  }else if($verTodo.textContent==="Ver todo"){
    $carrito.classList.add("follow-carrito");
    $carrito.classList.remove("follow");
    $verTodo.textContent="Salir";
    document.querySelector(".carritoDesdeOscuro footer").classList.add("none");
    for(let y=0;y<document.querySelectorAll(".medicamento").length; y++){
      if(document.querySelectorAll(".medicamento")[y].classList.contains("none")){
        document.querySelectorAll(".medicamento")[y].classList.remove("none");
      }      
    }
  }

})





const goToRegisterPage = () => {
  mainPage.style.display = "none";
  $registerPage.style.display = "grid";
};


const $singUp=document.querySelector(".sign-up");


$singUp.addEventListener("click",()=>{
  goToRegisterPage();
  loginPage.style.display = "none";
  // mainPage.style.display = "none";
  // newsFeedPage.style.display = "block";
});

function goToHome(){
  mainPage.style.display = "grid";
  $registerPage.style.display = "none";
}
const $homeSinUp=document.querySelector(".register-page nav ul li:nth-of-type(1)");

$homeSinUp.addEventListener("click",()=>{
  goToHome();
});

const $homeSinIn=document.querySelector(".login-page nav ul li:nth-of-type(1)");

$homeSinIn.addEventListener("click",()=>{
  goToHome();
});


const $contraseñaPerdida=document.querySelector(".login-page div form a");

$contraseñaPerdida.addEventListener("click",()=>{

alert("Se envio un mensaje a tu correo, cambia tu contraseña desde ahi")
goToHome();
})

const $registrarseDesdeLogin=document.querySelector(".login-page div footer a");



$registrarseDesdeLogin.addEventListener("click",()=>{
goToRegisterPage();  
// loginPage.classList.add("none");
loginPage.style.display = "none";
});

const $botonRegistro=document.querySelector("#register-btn");

$botonRegistro.addEventListener("click",()=>{
  goToHome();
})



const $iniciarSecionDesdeRegistro=document.querySelector(".register-content form div a");

$iniciarSecionDesdeRegistro.addEventListener("click",()=>{
  goToLoginPage();
  loginPage.style.display = "grid";
  $registerPage.style.display = "none";
})


const $accedeDesdeRegister=document.querySelector(".register-page footer a");


$accedeDesdeRegister.addEventListener("click",()=>{

goToLoginPage();
});

//Bucador de los diferentes medicamentos en el catalogo, por nombre y por farmacia

const $inputSearch=document.querySelector(".search-bar-input");
const $nombresMedicamentos=document.querySelectorAll(".item-catalogo div:nth-of-type(2) span");
const $nombreFarmacias=document.querySelectorAll(".item-catalogo div:nth-of-type(2) h4");
const $catagoloItems=document.querySelectorAll(".item-catalogo");
$inputSearch.addEventListener("keyup",(e)=>{

for(let y=0;y<$catagoloItems.length;y++){
  if($nombresMedicamentos[y].textContent.toLowerCase().includes($inputSearch.value.toLowerCase()) || 
  $nombreFarmacias[y].textContent.toLowerCase().includes($inputSearch.value.toLowerCase())){
    if($catagoloItems[y].classList.contains("none")){
      $catagoloItems[y].classList.remove("none");
    }
  }else{
    $catagoloItems[y].classList.add("none");
  }
}

})

//Modal que muestra los medicamentos con mas detalle

const $imagenesDelModal=document.querySelectorAll(".modal-Page .post-img-small img");
const $imagenPrincipal=document.querySelector(".modal-Page .post-img img");
const $contenedorImagenes=document.querySelectorAll(".modal-Page .post-img-small div");

for(let y=0;y<$imagenesDelModal.length;y++){

    $imagenesDelModal[y].addEventListener("click",(e)=>{
      $imagenPrincipal.setAttribute("src",$imagenesDelModal[y].getAttribute("src"));
      // alert("No estas entrando")
      for(let j=0;j<$contenedorImagenes.length;j++){
          if($contenedorImagenes[j].classList.contains("borde-blanco")){
            $contenedorImagenes[j].classList.remove("borde-blanco");
          }
      }
      $contenedorImagenes[y].classList.add("borde-blanco");
    })

}

//Evento para activar el modal

const $iconosEyes=document.querySelectorAll(".item-catalogo .post-icons i:nth-of-type(2)");
const $nombresFarmacias=document.querySelectorAll(".item-catalogo h4");
const $nombresProuctos=document.querySelectorAll(".item-catalogo span");
const $rutasImagenesFarmacias=document.querySelectorAll(".item-catalogo .user-avatar img");
const $rutasImagenesPrincipal=document.querySelectorAll(".item-catalogo .post-img img");
const $precio=document.querySelectorAll(".item-catalogo h2 p");
const $modalPage=document.querySelector(".modal-Page");

for(let y=0;y<$iconosEyes.length;y++){
    $iconosEyes[y].addEventListener("click",(e)=>{
        $modalPage.classList.remove("position-relative");
        document.querySelector(".modal-Page .item-catalogo h4").textContent=$nombreFarmacias[y].textContent;
        document.querySelector(".modal-Page .item-catalogo span").textContent=$nombresProuctos[y].textContent;
        document.querySelector(".modal-Page .item-catalogo .user-avatar img").setAttribute("src",$rutasImagenesFarmacias[y].getAttribute("src"));
        document.querySelector(".modal-Page .item-catalogo .post-img img").setAttribute("src",$rutasImagenesPrincipal[y].getAttribute("src"));
        document.querySelector(".modal-Page .item-catalogo h2 p").textContent=$precio[y].textContent;
        document.querySelector(".modal-Page .post-img-small img:nth-of-type(1)").setAttribute("src",$rutasImagenesPrincipal[y].getAttribute("src"));
    })
}

const $cierreModal=document.querySelector(".modal-Page i");

$cierreModal.addEventListener("click",(e)=>{
    $modalPage.classList.add("position-relative");
});



