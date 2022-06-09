// DOM Elements
const mainPage = document.querySelector(".main-page");
const loginPage = document.querySelector(".login-page");
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





// <div class="follow-user border medicamento">
//           <div class="follow-user-img">
//             <img src="pharmacy/farmaco.jpeg" />
//           </div>
          
//          <div class="follow-user-info light-text">
//             <h4>Albendazol 15mlg</h4>
//             <p><span id="unidadUno">4</span> Unidades</p>
//           </div>

//           <!-- <button type="button" class="follow-btn dark-mode-2">Seguir</button> -->
          
//           <div class="plus">
//             <!-- <img src="pharmacy/plus-circle-solid.svg" style="margin-left:20px;" /> -->
//             <i id="albendazol" class="fas fa-plus-circle fa-3x" style="margin-top: 10px;"></i>
//             <p id="resta">_</p>
//             <i class="fas fa-trash-alt fa-3x" style="margin-left:5px ;"></i>
//           </div>
//  </div>