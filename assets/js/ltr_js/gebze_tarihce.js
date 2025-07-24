      function toggleMenu(button) {
        const menu = button.nextElementSibling;
        const allMenus = document.querySelectorAll(".islem-menu");

        allMenus.forEach((m) => {
          if (m !== menu) m.style.display = "none";
        });

        menu.style.display = menu.style.display === "block" ? "none" : "block";
      }

      function toggleDropdown(btn) {
        const menu = btn.nextElementSibling;

        // Diğer tüm açık menüleri kapat
        document.querySelectorAll(".dropdown-menu").forEach((el) => {
          if (el !== menu) el.style.display = "none";
        });

        // Tıklanan menüyü aç/kapat
        menu.style.display = menu.style.display === "block" ? "none" : "block";
      }

      // Sayfa dışında bir yere tıklanınca menü kapanır
      document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown-container")) {
          document
            .querySelectorAll(".dropdown-menu")
            .forEach((el) => (el.style.display = "none"));
        }
      });
  
    // fotoğraf ekleme
  
      function addEvent() {
        document.getElementById("add").addEventListener("click", function () {
          const row = document.querySelector("#photos");
          if (!row) return;

          const count = row.children.length + 1;

          row.insertAdjacentHTML(
            "beforeend",
            `
    <div class="col-6 col-md-2 mb-3">
      <img
        src=""
        class="img-fluid rounded mb-2 preview-img"
        style="min-height:150px;min-width:150px"
        alt="resim${count}"
      />
      <div class="d-flex gap-2">
        <label for="resim${count}" class="btn btn-outline-primary w-50 p-1">Değiştir</label>
        <label for="resimSil${count}" class="btn btn-outline-danger w-50 p-0 pt-1 remove">Sil</label>
        <input type="file" id="resim${count}" class="resim-input" style="display: none" />
      </div>
    </div>
    `
          );

          remove();
        });

        document
          .querySelector("#images")
          .addEventListener("change", function (e) {
            if (e.target.classList.contains("resim-input")) {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = function (ev) {
                  const container = e.target.closest(".col-6");
                  const img = container.querySelector(".preview-img");
                  if (img) {
                    img.src = ev.target.result;
                    img.style.display = "block";
                  }
                };
                reader.readAsDataURL(file);
              }
            }
          });
      }

      function addEventLoc(){
        const add = document.getElementById("add")
        add.addEventListener("click", function () {
          const row = document.querySelector("#photos");
          if (!row) return;

          const count = row.children.length + 1;

          row.insertAdjacentHTML(
            "beforeend",
            `
            <div class="col-6 col-md-2 mb-3">
              <img
                src="../assets/images/ballikayalar.png"
                class="img-fluid rounded mb-2 preview-img"
                style="height:150px;width:150px"
                alt="resim${count}"
              />
              <label for="resim${count}" class="w-100 p-1">Ballı Kayalar</label>
              <div class="d-flex gap-2">
                <label for="resim${count}" class="btn btn-outline-primary w-100 p-1">Değiştir</label>
              </div>
            </div>
            `
          );

          remove();
        });

        document
          .querySelector("#images")
          .addEventListener("change", function (e) {
            if (e.target.classList.contains("resim-input")) {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = function (ev) {
                  const container = e.target.closest(".col-6");
                  const img = container.querySelector(".preview-img");
                  if (img) {
                    img.src = ev.target.result;
                    img.style.display = "block";
                  }
                };
                reader.readAsDataURL(file);
              }
            }
          });
      }

      window.addEventListener("DOMContentLoaded", addEvent);


    // DÜZENLE

      function edit(title, category, situation, date, photoNum, element) {
        let content = document.getElementById("icerikler");

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
                          <label for="title" class="form-label">Başlık</label>
                          <input
                            type="text"
                            class="form-control"
                            id="title"
                            value="${title}"
                            placeholder="Başlık giriniz"
                            required
                          />
                        </div>

                        <div class="mb-3">
                          <label for="kategori" class="form-label">Kategori</label>
                          <select class="select" id="kategori">
                            <option id="gebze">Tarihten Günümüze Gebze</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <label for="situtaion" class="form-label">Durum</label>
                          <select class="select" id="situation">
                            <option disabled selected hidden>Durum</option>
                            <option id="arsivle">Arşivle</option>
                            <option id="arsivCikar">Arşivden Çıkar</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <label for="link" class="form-label">Yazı</label>
                          <textarea
                            name="link"
                            id="link"
                            class="form-control"
                            placeholder="Yazı"
                            rows="5"
                            required
                          >yazı</textarea
                          >
                        </div>
                        <div class="mb-3" id="population" style="margin-left: 23%">
                          
                            <label
                              id="add"
                              class="btn btn-primary w-10 p-1"
                              style="float: right; margin-left: 1%"
                              >Fotoğraf Ekle</label
                            ><label
                              class="btn btn-primary w-10 p-1"
                              style="float: right; margin-left: 1%"
                              onclick="addPopulation()";
                              >Nüfus Bilgisi Ekle</label
                            >
                          </div>
                        </div>

                        <div class="container mt-4" id="images">
                          <div class="row text-center justify-content-start" id="photos">
                          </div>
                        </div>
                       <div class="d-flex gap-2 mt-3">
                        <button class="btn btn-success ml-2 mb-2" style="width:150px" id="submit" type="button">
                          Güncelle
                        </button>
                        <a href="Gebze - Tarihce.html" class="btn btn-secondary ml-1 mb-2" style="width:150px">
                          İptal
                        </a>
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
                    `;

        getPhotos(photoNum);

        document.getElementById("nav").innerHTML = ``;

        const inputs = document.querySelectorAll(".resim-input");

        inputs.forEach((input) => {
          input.addEventListener("change", function () {
            const file = this.files[0];
            if (file) {
              const reader = new FileReader();
              const self = this;

              reader.onload = function (e) {
                const container = self.closest(".col-6");
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

        remove();

        let today = new Date();

        const minute = today.getMinutes();
        const hours = today.getHours();
        const ms = parseInt(today.getMilliseconds() / 10);
        const day = today.getDay();
        const month = today.getMonth();
        const year = today.getFullYear();
        let formattedDate = `${hours}:${minute}:${ms}s - ${day}.${month}.${year}`;
        addEvent();
      }
    
      function editPhoto(title, date, photoNum, element) {
        let content = document.getElementById("icerikler");

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
                          <label for="title" class="form-label">Başlık</label>
                          <input
                            type="text"
                            class="form-control"
                            id="title"
                            value="${title}"
                            placeholder="Başlık giriniz"
                            required
                          />
                        </div>
                        
                        <div class="mb-3" id="population" style="margin-left: 23%">
                          
                            <label
                              id="add"
                              class="btn btn-primary w-10 p-1"
                              style="float: right; margin-left: 1%"
                              >Fotoğraf Ekle</label
                            >
                          </div>
                        </div>

                        <div class="container mt-4" id="images">
                          <div class="row text-center justify-content-start" id="photos">
                          </div>
                        </div>
                        <div class="d-flex gap-2 mt-3">
                        <button class="btn btn-success ml-2 mb-2" style="width:150px" id="submit" type="button">
                          Güncelle
                        </button>
                        <a href="Gebze - Tarihce.html" class="btn btn-secondary ml-1 mb-2" style="width:150px">
                          İptal
                        </a>
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
                    `;

        getPhotos(photoNum);

        document.getElementById("nav").innerHTML = ``;

        const inputs = document.querySelectorAll(".resim-input");

        inputs.forEach((input) => {
          input.addEventListener("change", function () {
            const file = this.files[0];
            if (file) {
              const reader = new FileReader();
              const self = this;

              reader.onload = function (e) {
                const container = self.closest(".col-6");
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

        remove();

        let today = new Date();

        const minute = today.getMinutes();
        const hours = today.getHours();
        const ms = parseInt(today.getMilliseconds() / 10);
        const day = today.getDay();
        const month = today.getMonth();
        const year = today.getFullYear();
        let formattedDate = `${hours}:${minute}:${ms}s - ${day}.${month}.${year}`;
        addEvent();
      }
    
      function remove() {
        const remove = document.querySelectorAll(".remove");

        remove.forEach((removeBtn) => {
          removeBtn.addEventListener("click", function () {
            const targetDiv = removeBtn.closest(".col-6");
            if (removeBtn) targetDiv.remove();
          });
        });
      }

      function getPhotos(num) {
        for (let i = 0; i < num; i++) {
          document.getElementById("photos").innerHTML += `
          <div class="col-6 col-md-2 mb-3">
          <img
          src="../assets/images/gebze-belediyesi.ico"
          class="img-fluid rounded mb-2 preview-img"
          style=" width:150px;height:150px;"
          alt="resim${i}"
          />
          <div class="d-flex gap-2">
          <label
          for="resim${i}"
          class="btn btn-outline-primary w-50 p-1"
          style=""
          >Değiştir</label
          >
          <label
          for="resim${i}"
          class="btn btn-outline-danger w-50 p-0 pt-1 remove"
          >Sil</label
          >
          <input
          type="file"
          id="resim${i}"
          class="resim-input"
          style="display: none"
          />
          </div>
          </div>`;
        }
      }

      

      var popCount = 0;

      function addPopulation() {
        const popDiv = document.getElementById("population");

        if (popCount === 0) {
          popDiv.innerHTML += `
            <div class="d-flex justify-content-between" style="width: 200%; margin-bottom:-2%;">
              <label for="nüfus" class="form-label">Nüfus</label>
              <label for="year" class="form-label" style="margin-right:76.7%;">Yıl</label>
            </div>
          `;
        }

        popCount++;

        popDiv.innerHTML += `
          <div class="d-flex gap-2 mt-3">
            <input
              type="number"
              class="form-control"
              name="nüfus"
              value="10000"
              placeholder="Nüfus giriniz"
              style="width: 40%"
            />
            <select
              name="year"
              id="year${popCount}"
              style="width: 20%; margin-left: 5%"
            ></select>
          </div>
        `;

        let select = document.getElementById(`year${popCount}`);

        for (let i = 2025; i > 2008; i--) {
          let option = document.createElement("option");
          option.value = i;
          option.textContent = i;
          select.appendChild(option);
        }
        addEvent();
      }

      function getLocPhotos(num) {
        for (let i = 0; i < num; i++) {
          document.getElementById("photos").innerHTML += `
          <div class="col-6 col-md-2 mb-3">
          <img
          src="../assets/images/ballikayalar.png"
          class="img-fluid rounded mb-2 preview-img"
          style=" width:150px;height:150px;"
          alt="resim${i}"
          />
          <label
          for="resim${i}"
          class="w-100 p-1"
          >Ballı Kayalar</label
          >
          <div class="d-flex gap-2">
          <label
          for="resim${i}"
          class="btn btn-outline-primary w-100 p-1"
          style=""
          onclick="editLocation('Tarihi Yerler',4,'https://www.google.com/maps/place/Ball%C4%B1kayalar+Tabiat+Park%C4%B1/@40.8299347,29.515808,2856m/data=!3m1!1e3!4m6!3m5!1s0x14cb242bfea49fbf:0x8a949c7858da831d!8m2!3d40.8332309!4d29.5168155!16s%2Fg%2F1thm0p0_?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D','Gebze - İzmit yolu üzerindeki Tavşanlı Köyü sınırlarında bulunan kampçılık ve trekking gibi doğa sporları için oldukça elverişli arazi yapısına sahip bir vadidir.','İstanbuldan özel araçla TEM Otoyolu üzerinden yaklaşık 45 dakikalık bir yolculukla ulaşılabilir. Gebze merkeze 15 km mesafededir.',this)";
          >Düzenle</label
          >
          </div>
          </div>`;
        }
      }
      
      function editTarihiYerler(photoNum){
        let content = document.getElementById("icerikler");

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
                          <label for="title" class="form-label">Başlık</label>
                          <input
                            type="text"
                            class="form-control"
                            id="title"
                            value=""
                            placeholder="Başlık giriniz"
                            required
                          />
                        </div>
                      
                        <div class="mb-3" id="population" style="margin-left: 23%">
                          
                            <label
                              id="add"
                              class="btn btn-primary w-10 p-1"
                              style="float: right; margin-left: 1%"
                              >Lokasyon Ekle</label
                            >
                          </div>
                        </div>

                        <div class="container mt-4" id="images">
                          <div class="row text-center justify-content-start" id="photos">
                          </div>
                        </div>
                       <div class="d-flex gap-2 mt-3">
                        <button class="btn btn-success ml-2 mb-2" style="width:150px" id="submit" type="button">
                          Güncelle
                        </button>
                        <a href="Gebze - Tarihce.html" class="btn btn-secondary ml-1 mb-2" style="width:150px">
                          İptal
                        </a>
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
                    `;

        getLocPhotos(photoNum);

        document.getElementById("nav").innerHTML = ``;

        const inputs = document.querySelectorAll(".resim-input");

        inputs.forEach((input) => {
          input.addEventListener("change", function () {
            const file = this.files[0];
            if (file) {
              const reader = new FileReader();
              const self = this;

              reader.onload = function (e) {
                const container = self.closest(".col-6");
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

        remove();
        addEventLoc();
      }

      function editLocation(title,photoLocNum,link,info,tarif,element){
        let content = document.getElementById("icerikler");

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
                          <label for="title" class="form-label">Başlık</label>
                          <input
                            type="text"
                            class="form-control"
                            id="title"
                            value="${title}"
                            placeholder="Başlık giriniz"
                            required
                          />
                        </div>
                      
                        <div class="mb-3">
                          <label for="title" class="form-label">Tarihçe ve Genel Bilgi</label>
                          <textarea
                            name="info"
                            id="info"
                            class="form-control"
                            placeholder="Tarihçe ve Genel Bilgi"
                            rows="5"
                            required
                          >${info}</textarea
                          >
                        </div>

                        <div class="mb-3">
                          <label for="tarif" class="form-label">Tarihçe ve Genel Bilgi</label>
                          <textarea
                            name="tarif"
                            id="tarif"
                            class="form-control"
                            placeholder="Nasıl Gidilir"
                            rows="2"
                            required
                          >${tarif}.</textarea
                          >
                          <label for="tarif" class="form-label mt-4">Konum Linki</label>
                          <textarea
                            name="link"
                            id="link"
                            class="form-control"
                            placeholder="Konum Linki"
                            rows="4"
                            required
                          >${link}</textarea
                          >
                        </div>
                        <label
                              id="addAct"
                              onclick="addActivities()"
                              class="btn btn-primary w-10 p-1"
                              style="float: right; margin-left: 1%"
                              >Aktivite Ekle</label
                            >
                        <div id="activities" class="mt-5 mb-5">
                        
                        </div>
                        <label
                              id="add"
                              class="btn btn-primary w-10 p-1"
                              style="float: right; margin-left: 1%"
                              >Fotoğraf Ekle</label
                            >

                        <div class="container mt-4" id="images">
                          <div class="row text-center justify-content-start" id="photos">
                          </div>
                        </div>
                        <div class="d-flex gap-2 mt-3">
                        <button class="btn btn-success ml-2 mb-2" style="width:150px" id="submit" type="button">
                          Güncelle
                        </button>
                        <a href="Gebze - Tarihce.html" class="btn btn-secondary ml-1 mb-2" style="width:150px">
                          İptal
                        </a>
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
                    `;

        getPhotos(photoLocNum);

        document.getElementById("nav").innerHTML = ``;

        const inputs = document.querySelectorAll(".resim-input");

        inputs.forEach((input) => {
          input.addEventListener("change", function () {
            const file = this.files[0];
            if (file) {
              const reader = new FileReader();
              const self = this;

              reader.onload = function (e) {
                const container = self.closest(".col-6");
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

        remove();
        addEvent();
        renderActivities();
      }

      function renderActivities() {
        const activitiesContainer = document.getElementById("activities");
        
        const balliKayalar = {
        name: "Ballı Kayalar",
        info: "Gebze - İzmit yolu üzerindeki Tavşanlı Köyü sınırlarında bulunan kampçılık ve trekking gibi doğa sporları için oldukça elverişli arazi yapısına sahip bir vadidir.",
        tarif: "İstanbul'dan özel araçla TEM Otoyolu üzerinden yaklaşık 45 dakikalık bir yolculukla ulaşılabilir. Gebze merkeze 15 km mesafededir.",
        link: "https://www.google.com/maps/place/Ball%C4%B1kayalar+Tabiat+Park%C4%B1/@40.8299347,29.515808,15z/data=!4m6!3m5!1s0x14cb242bfea49fbf:0x8a949c7858da831d!8m2!3d40.8332309!4d29.5168155!16s%2Fg%2F1thm0p0_?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D",
        activities: [
          {
            name: "Kaya Tırmanışı",
            exp: "Türkiye'nin en önemli kaya tırmanış merkezlerinden biridir. 100+ rotalı kayalıklarda her seviyeye uygun parkurlar bulunur."
          },
          {
            name: "Doğa Yürüyüşü",
            exp: "Vadi boyunca uzanan patikalarda doğa ile başbaşa yürüyüş yapabilirsiniz. İşaretli rotalar güvenli bir deneyim sunar."
          },
          {
            name: "Kamp ve Piknik",
            exp: "Belirlenen alanlarda kamp ve piknik yapabilirsiniz. Temiz hava ve doğal ortamda dinlenme imkanı bulunur."
          },
          {
            name: "Fotoğrafçılık",
            exp: "Eşsiz manzaralar ve doğal güzellikler fotoğraf tutkunları için mükemmel kareler sunmaktadır."
          }
        ],images: [
          {imageSrc: "../assets/images/locationImages/balliKayalar1.png"},
          {imageSrc: "../assets/images/locationImages/balliKayalar2.png"},
          {imageSrc: "../assets/images/locationImages/balliKayalar3.png"},
          {imageSrc: "../assets/images/locationImages/balliKayalar4.png"}
        ]
        };

        const mustafaPasaKulliyesi = {
        name: "Mustafa Paşa Külliyesi",
        info: "Camii, yapılar topluluğunun merkezinde ve Gebze'ye hakim bir mevkide yer alır.",
        tarif: "İstanbul'dan özel araçla TEM Otoyolu üzerinden yaklaşık 45 dakikalık bir yolculukla ulaşılabilir. Gebze merkeze 15 km mesafededir.",
        link: "https://www.google.com/maps/place/%C3%87oban+Mustafa+Pa%C5%9Fa+K%C3%BClliyesi/@40.799884,29.432153,15z/data=!4m5!3m4!1s0x0:0x1ab84b48f6e54236!8m2!3d40.799884!4d29.432153?shorturl=1",
        activities: [
          {
            name: "Tarihi Keşif",
            exp: "Caminin mimari detaylarını inceleyerek Osmanlı dönemi yapılarının özelliklerini keşfedebilirsiniz."
          },
          {
            name: "Ruhsal ve Dini",
            exp: "Sessiz ve huzurlu ortamda namaz kılabilir, manevi bir atmosferde zaman geçirebilirsiniz."
          },
          {
            name: "Sosyal ve Dinlendirici",
            exp: "Külliye bahçesindeki çınar ağaçlarının altında oturup huzurlu bir ortamda dinlenebilirsiniz."
          },
          {
            name: "Fotoğrafçılık",
            exp: "Çoban Mustafa Paşa Külliyesi, Osmanlı mimarisinin zarif detaylarını, ışık ve gölge oyunlarının büyüleyici etkisini ve tarihi dokusuyla eşsiz bir atmosfer sunar."
          }
        ],
        images: [
          {imageSrc: "../assets/images/locationImages/mustafaPasa1.png"},
          {imageSrc: "../assets/images/locationImages/mustafaPasa2.png"},
          {imageSrc: "../assets/images/locationImages/mustafaPasa3.png"},
          {imageSrc: "../assets/images/locationImages/mustafaPasa4.png"}
        ]
        };

     const sultanOrhanCami = {
        name: "Sultan Orhan Cami",
        info: "Gebze'nin batısında yer alan cami, tahmini olarak 1323-1331 yılları arasında inşa edilmiştir. Osmanlı mimarisinin ilk örneklerinden olan camiyi, Gebze'nin kurucusu olan Sultan Orhan yaptırmıştır",
        tarif: "İstanbul'dan özel araçla TEM Otoyolu üzerinden yaklaşık 45 dakikalık bir yolculukla ulaşılabilir. Gebze merkeze 15 km mesafededir.",
        link: "https://www.google.com/maps/place/Sultan+Orhan+Cami/@40.798079,29.4377681,714m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14cb208c7bb7f3d5:0x805bf82146b0c733!8m2!3d40.798079!4d29.4377681!16s%2Fg%2F1tf8j0hn?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D",
        activities: [
          {
            name: "Tarihi Keşif",
            exp: "Erken Osmanlı mimarisini yerinde inceleyerek tarihî bir yolculuğa çıkabilirsiniz."
          },
          {
            name: "Fotoğrafçılık",
            exp: "Caminin sade ve etkileyici mimarisi, fotoğraf tutkunları için güzel kareler sunar."
          },
          {
            name: "Kültürel Gezi",
            exp: "Cami çevresindeki diğer tarihî yapılarla birlikte kültürel bir rota oluşturabilirsiniz."
          }
        ],
        images: [
          {imageSrc: "../assets/images/locationImages/.png"},
          {imageSrc: "../assets/images/locationImages/.png"},
          {imageSrc: "../assets/images/locationImages/.png"},
          {imageSrc: "../assets/images/locationImages/.png"}
        ]
        };

        const anibalinMezari = {
        name: "Anibalın Mezarı",
        info: "Kartacalı ünlü komutan Anibal'ın Anıt Mezarı, Gebze'nin güneydoğusunda, çevresi daire şeklinde selvilerle çevrili sahanın ortasında yer alan 24 ton ağırlığındaki bir taş lahit ve şekillendirilen taşın üzerindeki Kartacalı Komutana ait aplike edilen bir masktan, Türkçe, İngilizce, Fransızca, Almanca ve İtalyanca yazılı birer mermer kitabeden oluşmaktadır.",
        tarif: "İstanbul'dan özel araçla TEM Otoyolu üzerinden yaklaşık 45 dakikalık bir yolculukla ulaşılabilir. Gebze merkeze 15 km mesafededir.",
        link: "https://www.google.com/maps/place/Hannibal+an%C4%B1t%C4%B1/@40.782282,29.4417079,715m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14cb2042af222be3:0xd11c044aa3d2711!8m2!3d40.782282!4d29.4417079!16s%2Fg%2F11cftyh3b?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D",
        activities: [
          {
            name: "Fotoğrafçılık",
            exp: "Çevredeki doğal patikalarda kısa yürüyüşler yapabilir, doğayla baş başa kalabilirsiniz."
          },
          {
            name: "Tarihi Gezi",
            exp: "Anibal'in anıt mezarını ve çevresindeki Eskihisar Kalesi gibi tarihi yapıları gezebilirsiniz."
          },
          {
            name: "Panolarını İnceleme",
            exp: "Anıt çevresinde yer alan panolar aracılığıyla Anibal'in hayatı ve ölümü hakkında bilgi edinebilirsiniz."
          }
        ],
        images: [
          {imageSrc: "../assets/images/locationImages/anibal1.png"},
          {imageSrc: "../assets/images/locationImages/anibal2.png"},
          {imageSrc: "../assets/images/locationImages/anibal3.png"},
          {imageSrc: "../assets/images/locationImages/anibal4.png"}
        ],
        
        };

        for (let i = 0; i < activitesName.length; i++) {
          if(i===0){
            activitiesContainer.innerHTML += `
            <div class="d-flex justify-content-between" style="width: 200%; margin-bottom:-2%;">
              <label for="title" class="form-label" style="margin-left:0.3%">Aktivite Başlığı</label>
              <label for="explain" class="form-label" style="margin-right:81.7%; margin-bottom:10px">Aktivite Açıklaması</label>
            </div>
            `
          }
          activitiesContainer.innerHTML += `
            <div class="d-flex gap-2 mt-3">
              <input
                type="text"
                class="form-control"
                name="activity"
                value="${activitesName[i]}"
                placeholder="Aktivite başlığını giriniz"
                style="max-width: 20%"
              />
              <input
                type="text"
                name="expOfActivity"
                id="exp${i}"
                class="form-control"
                value="${explainOfActivities[i]}"
                style="min-width: 70%; margin-left: 5%"
              /><label for="exp${[i]}" onclick="removeSvg(this)"
               ><img src="../assets/images/rubbishSvg.svg" alt="remove" width="20px" height="20px" style="margin-left:10px; margin-top:10px; cursor:pointer;"
               /></label>
            </div>
          `;
        }
      }

     let sultanOrhanCami = [
      "Gebze'nin batısında yer alan cami, tahmini olarak 1323-1331 yılları arasında inşa edilmiştir. Osmanlı mimarisinin ilk örneklerinden olan camiyi, Gebze'nin kurucusu olan Sultan Orhan yaptırmıştır",
      "İstanbul'dan özel araçla TEM Otoyolu üzerinden yaklaşık 45 dakikalık bir yolculukla ulaşılabilir. Gebze merkeze 15 km mesafededir.",
      "https://www.google.com/maps/place/Sultan+Orhan+Cami/@40.798079,29.4377681,714m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14cb208c7bb7f3d5:0x805bf82146b0c733!8m2!3d40.798079!4d29.4377681!16s%2Fg%2F1tf8j0hn?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D"
     ]
     

      function addActivities(){
        const activitiesContainer = document.getElementById("activities");
        activitiesContainer.innerHTML += `
            <div class="d-flex gap-2 mt-3">
              <input
                type="text"
                class="form-control"
                name="activity"
                value=""
                placeholder="Aktivite başlığını giriniz"
                style="max-width: 20%"
              />
              <input
                type="text"
                name="expOfActivity"
                id="exp"
                class="form-control"
                value=""
                placeholder="Aktivite açıklamasını giriniz"
                style="min-width: 70%; margin-left: 5%"
              /><label for="exp" onclick="removeSvg(this)"
               ><img src="../assets/images/rubbishSvg.svg" alt="remove" width="20px" height="20px" style="margin-top:10px; margin-left:10px; cursor:pointer;"
               /></label>
            </div>
          `;
}

          function removeSvg(element){
            const removeAct = element.closest("div");
            removeAct.remove();
          }
