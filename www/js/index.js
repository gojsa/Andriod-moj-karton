/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}


// function previewImage() {
//     document.getElementById("image-preview").style.display = "block"
//     var oFReader = new FileReader();
//     oFReader.readAsDataURL(document.getElementById("image-source").files[0]);
//     oFReader.onload = function(oFREvent) {
//         document.getElementById("image-preview").src = oFREvent.target.result;
//     }
// }

let styleDzo = document.createElement("style");
let cssDzo;
let buttonOpenSideMenu = document.getElementById("smn-open-dzo-id");
buttonOpenSideMenu.addEventListener("click",()=>{
// cssDzo = `
// .sd-menu-left-side-main{
//     left:-23%;

// }
// .dz-container{
//     left: 77%;
//     height:500px;
//     zoom: 80%;
//     top:130px;
//     border-top-left-radius: 45px;
//     border-bottom-left-radius:45px;

// }
// .header-dzojstik{
//     display: none;
// }
// .item-menu-box{
//     height:400px;
//     border-bottom-left-radius:45px;
    
// }
// .fabs{
//     display: none;
// }
// #smn-close-menu-id{
//     margin-left: 100%;
// }
// `;
// styleDzo.append(cssDzo)
// document.body.append(styleDzo)
    document.querySelector(".sd-menu-left-side-main").style.left = '-23%';
    document.querySelector(".dz-container").style.left = "77%"
    document.querySelector(".dz-container").style.height = "500px"
    document.querySelector(".dz-container").style.zoom = "80%"
    document.querySelector(".dz-container").style.top = "130px" 
    document.querySelector(".dz-container").style.borderTopLeftRadius  = "45px" 
    document.querySelector(".dz-container").style.borderBottomLeftRadius  = "45px" 
    document.querySelector(".header-dzojstik").style.display = "none" 
    document.querySelector(".item-menu-box").style.height = "400px" 
    document.querySelector(".item-menu-box").style.borderBottomLeftRadius = "45px" 
    document.querySelector(".fabs").style.display = "none" 
    document.getElementById("smn-close-menu-id").style.marginLeft = "100%"
})

let buttonCloseSideMenu = document.getElementById("smn-close-menu-id");
buttonCloseSideMenu.addEventListener("click",()=>{

//     cssDzo = `
// .sd-menu-left-side-main{
//     left:-100%;

// }
// .dz-container{
//     left: 0;
//     height:100%;
//     zoom: 100%;
//     top:130px;
//     border-top-left-radius: 0;
//     border-bottom-left-radius:0;

// }
// .header-dzojstik{
//     display: block;
// }
// .item-menu-box{
//     height:100vh;
//     border-bottom-left-radius:0;
    
// }
// .fabs{
//     display: block;
// }
// #smn-close-menu-id{
//     margin-left: -100%;
// }
// `;
// styleDzo.append(cssDzo)
// document.body.append(styleDzo)
    document.querySelector(".sd-menu-left-side-main").style.left = '-100%';
    document.querySelector(".dz-container").style.left = "0"
    document.querySelector(".dz-container").style.height = "100%"

    document.querySelector(".dz-container").style.zoom = ""
    document.querySelector(".dz-container").style.top = "0" 
    document.querySelector(".dz-container").style.borderTopLeftRadius  = "0" 
    document.querySelector(".dz-container").style.borderBottomLeftRadius  = "0" 
    document.querySelector(".header-dzojstik").style.display = "block" 
    document.querySelector(".item-menu-box").style.height = "100vh" 
    document.querySelector(".item-menu-box").style.borderBottomLeftRadius = "0" 
    document.querySelector(".fabs").style.display = "block" 
    document.getElementById("smn-close-menu-id").style.marginLeft = "-100%"

    })

//Skloni shape
function removeShape(id){
    if(document.querySelector(".shape-clicked-dz")){
        document.querySelector(".shape-clicked-dz").classList.remove("shape-clicked-dz");
    }
    document.getElementById(id).classList.add("shape-clicked-dz")
}    



//Covid
function getCovidReport(){
    document.getElementById("title-dzooo").textContent = "COVID / Vakcine"
     apex.server.process("getCovidQr", { }, {
    dataType: 'json',
    success: function (data) {
        console.log(data)
        let cvdHtml = 
    `
    <div class="covid-dz-G">
    <div class="tabs-covid">
        <p id="covid-tab-id" class="covid-tab active-tab-covid">COVID</p>
        <p id="ostale-tab-id" class="ostale-tab">Ostale vakcine</p>
    </div>
    <div id="qr_code_id"></div>
    <div class="aktivni-covid">
        <p id="activeCertCovid" class="p-covidt-text">Aktivni COVID sertifikati ></p>
    </div>
    <div id="primary_div_covid"></div>
</div>
    `
document.querySelector(".item-menu-box").innerHTML = cvdHtml;
        // new QRCode(document.getElementById("qr_code_id"), `${data.url}`);
if(data.url.length > 0){


        new QRCode(document.getElementById("qr_code_id"), {
    text: data.url,
    width: 200,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
$("#qr_code_id > img").css({"margin":"auto"});
}

document.getElementById("covid-tab-id").addEventListener("click",()=>{
    document.querySelector(".active-tab-covid").classList.remove("active-tab-covid")
    document.getElementById("covid-tab-id").classList.add("active-tab-covid")
    document.getElementById("qr_code_id").classList.remove("class-for-hide-element");
    document.querySelector(".aktivni-covid").classList.remove("class-for-hide-element");
    
})

document.getElementById("ostale-tab-id").addEventListener("click",()=>{
    document.querySelector(".active-tab-covid").classList.remove("active-tab-covid")
    document.getElementById("ostale-tab-id").classList.add("active-tab-covid")
    document.getElementById("qr_code_id").classList.add("class-for-hide-element");
    document.querySelector(".aktivni-covid").classList.add("class-for-hide-element");
    document.querySelector("#primary_div_covid").classList.add("class-for-hide-element");
    
})
document.getElementById("activeCertCovid").addEventListener("click",()=>{
    getCovidV()
})


    }})
}



function getCovidV(){
   
apex.server.process("getCovid", {
    
}, {
    dataType: 'json',
    success: function (data) {
   console.log(data.items.length)
            document.getElementById("qr_code_id").classList.add("class-for-hide-element");
            document.querySelector(".aktivni-covid").classList.add("class-for-hide-element");
            document.querySelector("#primary_div_covid").classList.remove("class-for-hide-element");

        
   let divCard = ""
  for(let i = 0; i < data.items.length; i++){
     
      divCard +=  `
      <div class="card-shape-covid">
        <p class="card-covid-title text-color-class-covid">Potvrda o vakcinaciji</p>
        <p class="class="number-of-covid text-color-class-covid">Vakcinacija ${data.items[i].doza_po_redu}</p>
        <p class="date-of-vacc">Datum: ${data.items[i].datum_vakcinisanja}</p>
        <span id="open-extend-content" class="fa fa-angle-down"></span>
        <div class="covid-extend-class">
        <hr/>
            <p class="extend-ime">
                <p class="ime-i-prezime-title text-color-class-covid">Ime i prezime:</p>
                <p class="ime-i-prezime-res">${data.items[i].ime}</p>

            </p>
             <hr/>
            <p class="extend-datum">
                <p class="datum-rodjenja-title text-color-class-covid">Datum rodjenja:</p>
                <p class="datum-rodjenja-res">${data.items[i].datum_rodjenja}</p>
            </p>
             <hr/>
            <p class="extend-pol">
                <p class="pol-title text-color-class-covid">Pol:</p>
                <p class="pol-res">${data.items[i].pol}</p>
            </p>
             <hr/>
            <p class="extend-datum-vakc">
                <p class="datum-vakc-title text-color-class-covid">Datum vakcinisanja:</p>
                <p class="datum-vakc-res">${data.items[i].datum_vakcinisanja}</p>
            </p>    
         <span  class="fa fa-angle-up"></span>
        </div>
      </div>
      `
  }
      document.getElementById("primary_div_covid").innerHTML = divCard;
let extContentAll = document.querySelectorAll(".fa-angle-down");
for(let a = 0; a < extContentAll.length; a++){
    extContentAll[a].addEventListener("click",()=>{
        console.log(11)
        let styleExtend = 
        `
        line-height: 1em;
        height: 100% !important;
       /* transition: height 5s ease-out;*/
        `
        extContentAll[a].nextElementSibling.setAttribute("style",styleExtend)
        extContentAll[a].parentElement.style.height = "auto"
        extContentAll[a].style.display = "none"

        // document.querySelector(".covid-extend-class").setAttribute("style",styleExtend)
        // document.querySelector(".card-shape-covid").style.height = "auto"
    })
}
let extContentAllHide = document.querySelectorAll(".fa-angle-up");
for(let a = 0; a < extContentAllHide.length; a++){
    extContentAllHide[a].addEventListener("click",()=>{
     
        let styleExtend2 = 
        `
        overflow: hidden;
        line-height: 1em;
        height: 0em;
       /* transition: height 5 ease-out;*/

        `
        extContentAllHide[a].parentElement.setAttribute("style",styleExtend2)
       extContentAllHide[a].parentElement.parentElement.style.height = "158px"
        extContentAllHide[a].parentElement.parentElement.querySelector("span").style.display = "block"


        // document.querySelector(".covid-extend-class").setAttribute("style",styleExtend)
        // document.querySelector(".card-shape-covid").style.height = "220px"
    })
}
    },
    error: function( jqXHR, textStatus, errorThrown ) {
        
    console.log(errorThrown)
        
  }
});
    
     }


//Kontakt Brojevi
    function getPhoneNumbers(){
        apex.server.process("getPhoneNumbers", { }, {
    dataType: 'json',
    success: function (data) {
        console.log(data)
        console.log(data.items[0].address)
        document.getElementById("title-dzooo").textContent = "SOS poziv"
        let sosInnerHtml = `
        <div id="sos-items-dzo" class="items-padding-top">
       <div class="items-menu-shapes">
                <div class="">
                    <img class="img-dzoj-position-open-G" src="#APP_IMAGES#hitna_G.png">
                </div>
                <div class="open-modal-dzoj-class-title">
                    <span>Hitna</span>
                </div>
                <div class="open-modal-dzoj-class-title-bottom">
                    <span>124</span>
                </div>
                
                <div id="dzo-call-hitna" class="call-phone-circle">
                    <li class="	fa fa-phone"></li>
                </div>
               
            </div>

            <div class="items-menu-shapes">
                <div class="">
                    <img class="img-dzoj-position-open-G" src="#APP_IMAGES#vatrgoasni_G.png">
                </div>
                <div class="open-modal-dzoj-class-title">
                    <span>Vatrogasci</span>
                </div>
                <div class="open-modal-dzoj-class-title-bottom">
                    <span>123</span>
                </div>
                <div id="dzo-call-vatr" class="call-phone-circle">
                    <li class="	fa fa-phone"></li>
                </div>
            </div>

            <div class="items-menu-shapes">
                <div class="">
                    <img class="img-dzoj-position-open-G" src="#APP_IMAGES#policija_G.png">
                </div>
                <div class="open-modal-dzoj-class-title">
                    <span>Policija</span>
                </div>
                <div class="open-modal-dzoj-class-title-bottom">
                    <span>122</span>
                </div>
                <div id="dzo-call-poli" class="call-phone-circle">
                    <li class="	fa fa-phone"></li>
                </div>
            </div>
            <div>
                <p class="add-number-button-class" id="openModalAddNumber">Doda novi broj
                
                </p>
            
            </div>

            <div class="wraper-modal-add-number class-for-hide-element">
    <div class="div-title-add-number">
        <p class="text-title-sos-kontakt">Dodajte novi SOS kontakt</p>

    </div>
    <div class="input-field-sos-number-div">
        <input type="text" name="" id="" class="sos-input-shape" placeholder="Ime">
        <input type="text" name="" id="" class="sos-input-shape" placeholder="Prezime">
        <input type="text" name="" id="" class="sos-input-shape" placeholder="Broj telefona">

    </div>
    <div class="div-button-sos">
        <button class="button-save-sos">Sačuvaj</button>
    </div>

</div>
            <div id="overlay-phone-G" class="overlay-effect class-for-hide-element"></div>
            </div>
        `

        document.querySelector(".item-menu-box").innerHTML = sosInnerHtml
        document.querySelector(".item-menu-box").classList.add("items-menu-box-color")
        document.getElementById("openModalAddNumber").addEventListener("click",()=>{
            document.querySelector(".wraper-modal-add-number").classList.remove("class-for-hide-element")
            document.getElementById("overlay-phone-G").classList.remove("class-for-hide-element");
        })
        const callHitna = document.getElementById("dzo-call-hitna");
        callHitna.addEventListener("click",()=>{
            window.open(`tel: ${ "124"}`);
        })
        const vatrCall = document.getElementById("dzo-call-vatr");
        vatrCall.addEventListener("click",()=>{
            window.open(`tel: ${ "123"}`);
        })
        const poliCall = document.getElementById("dzo-call-poli");
        poliCall.addEventListener("click",()=>{
            window.open(`tel: ${ "122"}`);
        })
 
    document.getElementById("overlay-phone-G").addEventListener("click",(e)=>{
if (!e.target.classList.contains('wraper-modal-add-number') && $('.wraper-modal-add-number').has($(e.target)).length == 0) {
            document.querySelector(".wraper-modal-add-number").classList.add("class-for-hide-element")
          document.getElementById("overlay-phone-G").classList.add("class-for-hide-element");
          }
    })
    
        }})
    }
  

  const sosNumberD = document.getElementById("izvjestaj-redirect-id");
        sosNumberD.addEventListener("click",()=>{
            // document.getElementById("bio-params-dzo").remove();
            // sosNumberD.classList.add("shape-clicked-dz");
            removeShape("izvjestaj-redirect-id")
            getPhoneNumbers()
        })


const covidD = document.getElementById("covid-redirect-id")
            covidD.addEventListener("click",()=>{
            // document.getElementById("bio-params-dzo").remove();
            removeShape("covid-redirect-id")
            // covidD.classList.add("shape-clicked-dz");
            getCovidReport()
        })

// Podsjetnik
const podsjetnik = document.getElementById("statistika-redirect-id").addEventListener("click",()=>{
    document.querySelector(".item-menu-box").innerHTML = "";
    removeShape("statistika-redirect-id")
})
//najava 
const najava = document.getElementById("najava-redirect-id").addEventListener("click",()=>{
    document.querySelector(".item-menu-box").innerHTML = "";
    removeShape("najava-redirect-id")
})
/////////////////////////////


document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
           document.querySelector(".sd-menu-left-side-main").style.left = '-100%';
    document.querySelector(".dz-container").style.left = "0"
    document.querySelector(".dz-container").style.height = "100%"

    document.querySelector(".dz-container").style.zoom = ""
    document.querySelector(".dz-container").style.top = "0" 
    document.querySelector(".dz-container").style.borderTopLeftRadius  = "0" 
    document.querySelector(".dz-container").style.borderBottomLeftRadius  = "0" 
    document.querySelector(".header-dzojstik").style.display = "block" 
    document.querySelector(".item-menu-box").style.height = "100vh" 
    document.querySelector(".item-menu-box").style.borderBottomLeftRadius = "0" 
    document.querySelector(".fabs").style.display = "block" 
    document.getElementById("smn-close-menu-id").style.marginLeft = "-100%"

        } else {
                       document.querySelector(".sd-menu-left-side-main").style.left = '-23%';
    document.querySelector(".dz-container").style.left = "77%"
    document.querySelector(".dz-container").style.height = "500px"
    document.querySelector(".dz-container").style.zoom = "80%"
    document.querySelector(".dz-container").style.top = "130px" 
    document.querySelector(".dz-container").style.borderTopLeftRadius  = "45px" 
    document.querySelector(".dz-container").style.borderBottomLeftRadius  = "45px" 
    document.querySelector(".header-dzojstik").style.display = "none" 
    document.querySelector(".item-menu-box").style.height = "400px" 
    document.querySelector(".item-menu-box").style.borderBottomLeftRadius = "45px" 
    document.querySelector(".fabs").style.display = "none" 
    document.getElementById("smn-close-menu-id").style.marginLeft = "100%"

        }                       
    } 
    /* reset values */
    xDown = null;
    yDown = null;                                             
};



//Navigation

   
    let dataAtr
    let allNav = document.querySelectorAll(".sdmn-btn-hover-click");
    for (let i = 0; i < allNav.length; i++) {
        let url = "f?p=#APP_ID#:#PAGE_ID#:#SESSION#::NO:RP,#PAGE_ID#::";
        url = url.replace("#APP_ID#", document.getElementById("pFlowId").value);
        url = url.replace("#SESSION#", document.getElementById("pInstance").value);
        dataAtr = allNav[i].getAttribute("data-page");
        url = url.replaceAll("#PAGE_ID#", dataAtr);
        allNav[i].addEventListener("click", () => {
            window.location.href = url;
        })
    }
    let allNav2 = document.querySelectorAll(".sdmn-btn-hover-click-logo");
    for (let i = 0; i < allNav2.length; i++) {
        let url = "f?p=#APP_ID#:#PAGE_ID#:#SESSION#::NO:RP,#PAGE_ID#::";
        url = url.replace("#APP_ID#", document.getElementById("pFlowId").value);
        url = url.replace("#SESSION#", document.getElementById("pInstance").value);
        dataAtr = allNav2[i].getAttribute("data-page");
        url = url.replaceAll("#PAGE_ID#", dataAtr);
        allNav2[i].addEventListener("click", () => {
            window.location.href = url;
        })
    }
