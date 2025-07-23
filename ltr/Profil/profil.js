document.addEventListener('DOMContentLoaded', () => {
                        // Profil Fotoğrafı Yükleme İşlevi
                        const profilePhotoWrapper = document.getElementById('profilePhotoWrapper');
                        const profilePhotoInput = document.getElementById('profilePhotoInput');
                        const profilePhoto = document.getElementById('profilePhoto');

                        profilePhotoWrapper.addEventListener('click', () => {
                            profilePhotoInput.click(); // Gizli dosya input'unu tetikle
                        });

                        profilePhotoInput.addEventListener('change', (event) => {
                            const file = event.target.files[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onload = (e) => {
                                    profilePhoto.src = e.target.result; // Seçilen resmi önizleme olarak göster
                                };
                                reader.readAsDataURL(file);
                            }
                        });

                        // Şifre Göster/Gizle İşlevi
                        const togglePassword = (inputId, toggleIconId) => {
                            const passwordInput = document.getElementById(inputId);
                            const toggleIcon = document.getElementById(toggleIconId);

                            toggleIcon.addEventListener('click', () => {
                                if (passwordInput.type === 'password') {
                                    passwordInput.type = 'text';
                                    toggleIcon.classList.remove('fa-eye-slash');
                                    toggleIcon.classList.add('fa-eye'); // Normal göz
                                } else {
                                    passwordInput.type = 'password';
                                    toggleIcon.classList.remove('fa-eye');
                                    toggleIcon.classList.add('fa-eye-slash'); // Üstü çizili göz
                                }
                            });
                        };

                        togglePassword('newPassword', 'toggleNewPassword');
                        togglePassword('confirmNewPassword', 'toggleConfirmNewPassword');

                        // Telefon Numarası Maskeleme (isteğe bağlı, daha gelişmiş kütüphanelerle yapılabilir)
                        const phoneInput = document.getElementById('phone');
                        phoneInput.addEventListener('input', (e) => {
                            let value = e.target.value.replace(/\D/g, ''); // Sadece rakamları al
                            let formattedValue = '';
                            if (value.length > 0) {
                                formattedValue += '(' + value.substring(0, 3);
                            }
                            if (value.length > 3) {
                                formattedValue += ') ' + value.substring(3, 6);
                            }
                            if (value.length > 6) {
                                formattedValue += ' ' + value.substring(6, 8);
                            }
                            if (value.length > 8) {
                                formattedValue += ' ' + value.substring(8, 10);
                            }
                            e.target.value = formattedValue;
                        });

                        // Kaydet Butonu İşlevi (örnek)
                        const saveButton = document.querySelector('.save-button');
                        saveButton.addEventListener('click', () => {
                            const fullName = document.getElementById('fullName').value;
                            const email = document.getElementById('email').value;
                            const phone = document.getElementById('phone').value;
                            const newPassword = document.getElementById('newPassword').value;
                            const confirmNewPassword = document.getElementById('confirmNewPassword').value;

                            // Basit validasyon örnekleri
                            if (!fullName || !email || !phone) {
                                alert('Lütfen tüm alanları doldurun!');
                                return;
                            }

                            if (newPassword !== confirmNewPassword) {
                                alert('Yeni şifreler uyuşmuyor!');
                                return;
                            }

                            if (newPassword && !confirmNewPassword) {

                            }

                            // Burada gerçek bir sunucuya veri gönderme veya bilgileri kaydetme işlemleri yapılır.
                            console.log('Profil Bilgileri:', { fullName, email, phone, newPassword });
                            alert('Profil bilgileriniz başarıyla güncellendi!');
                        });
                    });


                    function onayKod() {
                        // Telefon veya e-posta bilgisini al
                        const phone = document.getElementById('phone').value.trim();
                        const email = document.getElementById('email').value.trim();
                        let hedef = '';
                        let tip = '';

                        if (phone && phone.length > 0) {
                            hedef = phone;
                            tip = 'Telefon';
                        } else if (email && email.length > 0) {
                            hedef = email;
                            tip = 'E-posta';
                        } else {
                            alert('Telefon numarası veya e-posta giriniz.');
                            return;
                        }

                        // 6 haneli rastgele kod üret
                        const kod = Math.floor(100000 + Math.random() * 900000);

                        // Kullanıcıya göster
                        alert(`${tip} adresinize gönderilecek onay kodu: ${kod}`);

                        // Arka planı karartan ve kod giriş popup'ını gösteren HTML ekle
                        if (!document.getElementById('verify-overlay')) {
                            const overlay = document.createElement('div');
                            overlay.id = 'verify-overlay';
                            overlay.style.position = 'fixed';
                            overlay.style.top = '0';
                            overlay.style.left = '0';
                            overlay.style.width = '100vw';
                            overlay.style.height = '100vh';
                            overlay.style.background = 'rgba(0,0,0,0.4)';
                            overlay.style.display = 'flex';
                            overlay.style.justifyContent = 'center';
                            overlay.style.alignItems = 'center';
                            overlay.style.zIndex = '9999';

                            overlay.innerHTML = `
                                <div style="background:#fff; border-radius:10px; box-shadow:0 2px 16px rgba(0,0,0,0.2); padding:32px 24px; min-width:320px; text-align:center; position:relative;">
                                    <h4 style="margin-bottom:18px;">Onay Kodu Girin</h4>
                                    <input id="verify-code-input" type="text" maxlength="6" style="font-size:20px; letter-spacing:8px; text-align:center; padding:8px 0; width:140px; border:1px solid #ccc; border-radius:5px;" placeholder="------" autocomplete="one-time-code">
                                    <div style="margin-top:20px;">
                                        <button id="verify-code-btn" style="background:#3f92ec; color:#fff; border:none; border-radius:5px; padding:8px 24px; font-size:16px; margin-right:10px; cursor:pointer;">Onayla</button>
                                        <button id="verify-cancel-btn" style="background:#eee; color:#333; border:none; border-radius:5px; padding:8px 18px; font-size:16px; cursor:pointer;">İptal</button>
                                    </div>
                                </div>
                            `;
                            document.body.appendChild(overlay);

                            // Onayla butonuna tıklanınca kodu kontrol et
                            document.getElementById('verify-code-btn').onclick = function () {
                                const userCode = document.getElementById('verify-code-input').value.trim();
                                if (userCode === kod.toString()) {
                                    overlay.remove();
                                    // Burada onaylandı ikonunu yeşile çevirebilirsiniz
                                    const icon = document.querySelector('.fa-times-circle.unverified-icon');
                                    if (icon) {
                                        icon.classList.remove('fa-times-circle', 'red-icon', 'unverified-icon');
                                        icon.classList.add('fa-check-circle', 'green-icon', 'verified-icon');
                                        // Popup başlığını da değiştir
                                        const popup = icon.closest('.icon-container').querySelector('.popup');
                                        if (popup) {
                                            popup.querySelector('.popup-header').className = 'popup-header-onaylandi';
                                            popup.querySelector('.popup-header-onaylandi').textContent = 'Onaylandı!';
                                            if (popup.querySelector('.popup-body')) popup.querySelector('.popup-body').remove();
                                        }
                                    }
                                } else {
                                    alert('Kod yanlış, tekrar deneyin.');
                                }
                            };

                            // İptal butonu popup'ı kapatır
                            document.getElementById('verify-cancel-btn').onclick = function () {
                                overlay.remove();
                            };
                        }
                    }

                    document.getElementById('newPassword').addEventListener('input', validatePasswords);
                    document.getElementById('confirmNewPassword').addEventListener('input', validatePasswords);

                    function validatePasswords() {
                        const newPassword = document.getElementById('newPassword').value;
                        const confirmNewPassword = document.getElementById('confirmNewPassword').value;

                        // Şifre uzunluğu kontrolü
                        if (newPassword && newPassword.length < 8) {
                            document.getElementById('newPassword').style.borderColor = '#dc3545';
                        } else {
                            document.getElementById('newPassword').style.borderColor = '';
                        }

                        // Şifreler aynı mı kontrolü
                        if (newPassword && confirmNewPassword) {
                            if (newPassword !== confirmNewPassword) {
                                document.getElementById('confirmNewPassword').style.borderColor = '#dc3545';
                            } else {
                                document.getElementById('confirmNewPassword').style.borderColor = '#28a745';
                            }
                        } else {
                            document.getElementById('confirmNewPassword').style.borderColor = '';
                        }
                    }