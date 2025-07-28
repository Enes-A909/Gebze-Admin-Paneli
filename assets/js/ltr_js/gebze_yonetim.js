// Muhtarlar JavaScript Kodları
function jsonMuhtar(){
  //Muhtar Json
var ekremUsanmaz = {
        name: "Ekrem USANMAZ",
        title: "Adem Yavuz Mahallesi Muhtarı",
        phone: "0538 632 83 12",
        loc: "Adem Yavuz Mahallesi 2322Sok. No:1 Gebze/Kocaeli",
        mail: "ekremusanmaz@gmail.com",
        imgSrc: "../assets/images/muhtarImg/ekremUsanmazMuhtar.png"
        };
var tezcanGurlek = {
        name: "Tezcan GÜRLEK",
        title: "Ahatlı Mahallesi Muhtarı",
        phone: "0537 585 92 5",
        loc: "Ahatlı Mahallesi 3120 Sok. No:1/1 Gebze/Kocaeli",
        mail: "-",
        imgSrc: "../assets/images/muhtarImg/tezcanGurlekMuhtar.png"
        };
var remziKandaz = {
        name: "Remzi KANDAZ",
        title: "Arapçeme Mahallesi Muhtarı",
        phone: "0532 680 14 20",
        loc: "Arapçeşme Mah. Kavak Cad.No:35 Gebze/Kocaeli",
        mail: "remzikandaz@hotmail.com",
        imgSrc: "../assets/images/muhtarImg/remziKandazMuhtar.png"
        };
var halisTepe = {
        name: "Halis TEPE",
        title: "Balçık Mahallesi Muhtarı",
        phone: "0532 432 00 54",
        loc: "Balçık Mahallesi Mustafa Kemal Cad. No:47/A Balçık",
        mail: "halis.tepe41@hotmail.com",
        imgSrc: "../assets/images/muhtarImg/halisTepeMuhtar.png"
        };

        const MUHTAR = [
        ekremUsanmaz,
        tezcanGurlek,
        remziKandaz,
        halisTepe
      ];

      return MUHTAR;
}

function muhtarEdit(){
    const muhtar = jsonMuhtar();    
    const content = document.getElementById("icerikler");
  content.innerHTML = ""; 
  
  const table = document.createElement("table");
  table.className = "table mt-0";
  table.id = "table";
  table.style.width = "100%";
  table.style.backgroundColor="rgba(204, 204, 204, 0.186)"
  table.style.boxShadow=" 6px 6px 20px rgba(100, 100, 100, 0.738)"
  table.style.borderRadius="10px"
  table.style.border="none"
  table.style.marginTop="-30px"

  table.innerHTML = `
    <thead style="border-top: none">
      <tr>
        <th style="width: 15%; padding-left: 10px;">Resim</th>
        <th style="width: 20%">İsim</th>
        <th style="width: 15%; max-width: 15%;">Unvan</th>
        <th style="width: 15%; max-width: 15%;">Mail</th>
        <th style="width: 15%; max-width: 15%;">Telefon</th>
        <th style="width: 15%; max-width: 15%;">Adres</th>
        <th style="width: 15%; max-width: 15%;"></th>
      </tr>
    </thead>
    <tbody id="tableContent"></tbody>
  `;

  const tableContent = table.querySelector("#tableContent");
 var count = 0;
  for (let i = 0; i < 2; i++) {
    muhtar.forEach((muhtar) => {
        count++;
      const tr = document.createElement("tr");
      
      tr.innerHTML = `
        <td>
          <img class="imgSrc" src="${muhtar.imgSrc}" alt="${muhtar.name}" width="80" height="50" /> 
        </td>
        <td class="name dot" title="${muhtar.name}">${muhtar.name}</td>
        <td class="title dot" title="${muhtar.title}">${muhtar.title}</td>
        <td class="mail dot" title="${muhtar.mail}">${muhtar.mail}</td>
        <td class="phone dot" title="${muhtar.phone}">${muhtar.phone}</td>
        <td class="loc dot" title="${muhtar.loc}">${muhtar.loc}</td>
        <td style="text-align:right;">
          <button class="btn w-10 p-1 edit" id="count${count}" onclick="editMuhtar(this)">Düzenle</button>
        </td>
      `;
      tableContent.appendChild(tr);

      tr.querySelector(`#count${count}`).addEventListener("click", () => {
      });
    });
  }

  content.appendChild(table);
}

function editMuhtar(element){
  // Tablodaki Düzenleye basılan tr elementini alıp içindeki değerleri alıyoruz
  const tr = element.closest("tr");
  const name = tr.querySelector(".name").innerHTML
  const title = tr.querySelector(".title").innerHTML
  const mail = tr.querySelector(".mail").innerHTML
  const phone = tr.querySelector(".phone").innerHTML
  const loc = tr.querySelector(".loc").innerHTML
  const imgSrc = tr.querySelector(".imgSrc").src

   let content = document.getElementById("icerikler");
// Muhtar Düzenleme sayfasını ekrana basıyoruz 
        content.innerHTML = `
                  <div class="d-flex justify-content-center">
                    <div
                    class="card"
                    style="
                      box-shadow: 3px 3px 10px rgba(100, 100, 100, 0.738);
                      width: 95%;
                    "
                  >
                    <div class="card-body">
                      <form id="editNewsForm">
                        <div class="mb-3">
                          <label for="title" class="form-label">İsim</label>
                          <input
                            type="text"
                            class="form-control"
                            id="nameInput"
                            value="${name}"
                            placeholder="İsim giriniz"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label for="title" class="form-label">Unvan</label>
                          <input
                            type="text"
                            class="form-control"
                            id="titleInput"
                            value="${title}"
                            placeholder="Unvan giriniz"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label for="title" class="form-label">Mail</label>
                          <input
                            type="text"
                            class="form-control"
                            id="mailInput"
                            value="${mail}"
                            placeholder="Mail giriniz"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label for="title" class="form-label">Telefon</label>
                          <input
                            type="text"
                            class="form-control"
                            id="phoneInput"
                            value="${phone}"
                            placeholder="Telefon giriniz"
                            required
                          />
                        </div>
                         <div class="mb-3">
                          <label for="title" class="form-label">Adres Giriniz</label>
                          <textarea
                            class="form-control"
                            id="locInput"
                            placeholder="Telefon giriniz"
                            rows="3"
                            required
                          >${loc}</textarea>
                        </div>
                            <div class="col-12 mb-3">
                        <img
                          id="imgSrcInput"
                          src="${imgSrc}"
                          class="img-fluid rounded preview-img d-flex justify-content-center"
                          alt="${name}'in resmi"
                          style="width: 30%; height: auto; margin-left:35%; max-height:300px; border:3px solid rgba(0, 0, 0, 0.65);"
                        />
                        <div style="text-align:center;">
                        <label
                          for="resim"
                          class="btn btn-outline-primary mt-2"
                          style="width: 95%"
                        >
                          Fotoğraf Seç
                        </label>
                        <input
                          id="resim"
                          type="file"
                          name="resim"
                          style="display: none"
                          accept="image/*"
                          class="resim-input"
                        />
                        </div>
                        </div>
                        <div class="d-flex gap-2 mt-3">
                        <button class="btn btn-success ml-2 mb-2" style="width:150px" type="submit">
                          Güncelle
                        </button>
                        <a href="Gebze - Gebze Yonetim.html" class="btn btn-secondary ml-1 mb-2" style="width:150px">
                          İptal
                        </a>
                      </div>
                      </form>
                  </div>
                    `;

        const inputs = document.querySelectorAll(".resim-input");

        inputs.forEach((input) => {
          input.addEventListener("change", function () {
            const file = this.files[0];
            if (file) {
              const reader = new FileReader();
              const self = this;

              reader.onload = function (e) {
                const container = self.closest(".col-12");
                const img = container.querySelector(".preview-img");

                if (img) {
                  img.src = e.target.result;
                  img.style.display = "block";
                }
              };

              reader.readAsDataURL(file);
            }
          });
        });
}  // Muhtarlar bu kadar

function editKardesSehirler(){
  const muhtar = jsonMuhtar();    
    const content = document.getElementById("icerikler");
  content.innerHTML = ""; 
  
  const table = document.createElement("table");
  table.className = "table mt-0";
  table.id = "table";
  table.style.width = "100%";
  table.style.backgroundColor="rgba(204, 204, 204, 0.186)"
  table.style.boxShadow=" 6px 6px 20px rgba(100, 100, 100, 0.738)"
  table.style.borderRadius="10px"
  table.style.border="none"
  table.style.marginTop="-30px"

  table.innerHTML = `
    <thead style="border-top: none">
      <tr>
        <th style="width: 15%; padding-left: 10px;">Resim</th>
        <th style="width: 20%">İsim</th>
        <th style="width: 15%; max-width: 15%;">Unvan</th>
        <th style="width: 15%; max-width: 15%;">Mail</th>
        <th style="width: 15%; max-width: 15%;">Telefon</th>
        <th style="width: 15%; max-width: 15%;">Adres</th>
        <th style="width: 15%; max-width: 15%;"></th>
      </tr>
    </thead>
    <tbody id="tableContent"></tbody>
  `;

  const tableContent = table.querySelector("#tableContent");
        count++;
      const tr = document.createElement("tr");
      
      tr.innerHTML = `
        <td>
          <img class="imgSrc" src="" alt="" width="80" height="50" /> 
        </td>
        <td class="name dot" title=""></td>
        <td class="title dot" title=""></td>
        <td class="mail dot" title=""></td>
        <td class="phone dot" title=""></td>
        <td class="loc dot" title=""></td>
        <td style="text-align:right;">
          <button class="btn w-10 p-1 edit" onclick="editMuhtar(this)">Düzenle</button>
        </td>
      `;
      tableContent.appendChild(tr);

      tr.querySelector(`#count${count}`).addEventListener("click", () => {
      });
    
  }

  content.appendChild(table);


