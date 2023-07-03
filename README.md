# Rast Mobile App

### Check The Live Website ➡️ [Live Website](https://sekunev-sikayetvar.netlify.app/)

## Açıklamalar

- Bu Proje ile login sayfası ile home sayfasına yönlendirme, Sidebar'dan student'in seçilmesi ile API'den çekilen öğrencilerin belirli bir pagination çerçevesinde sergilenmesi, API verilerini CRUD işlemleri ile düzenleme, silme, ekleme yapılabilmesini kapsamaktadır.

## Projenin Oluşturulmasında izlenilen Adımlar

- Öncelikle bir Login sayfası oluşturulmuş, girilen kullanıcı bilgileri session Storage'da saklanarak home sayfasında kullanıcı bilgilerinin gösterimi sağlanmıştır.
- Home sayfasında Kullanıcı için gerekli bilgi kartları ve yönlendirme butonları oluşturulmuştur. Students sekmesi ile Students sayfasına yönlendirme yapılmıştır.
- Studens sayfasında MUİ Datagrid componenti kullanılarak "https://dummyjson.com/users" API'sinden veriler çekilerek gösterim sağlanmıştır.
- Search bar ile sergilenen verilerin name kısmında istenilen kelime harf aramalarına imkan tanınmıştır. (API aramayı lastName'de de yapmaktadır. Ancak lastName tabloda gösterilmemektedir. )
- ADD NEW STUDENT butonuna tıklandığında veri girişi sağlanan modal açılmakta ve yeni kullanıcı eklenebilmektedir.
- Her satıra eklenen edit ve delete butonu ile o satıra özgü düzenleme ve silme işlemleri yapılabilmektedir.
- MUI Kütüphanesinden Datagrid kullanılmış, verilerin kullanıcıya anlaşılır, filtrelenebilir, Gösterimi kolay pagination bir halde sunulması hedeflenmiştir.
- Projenin tamamındaki kodlar anlaşılabilir olabilmesi için uygun isimlerde dosyalanarak component haline getirilmiştir.

### Visualization of the Website

![image](https://github.com/Sekunev/dataGridApp/blob/main/src/assest/Projectimage.png)

## Project Skeleton

```
Şikayetvar App (folder)
|
|----readme.md
|
├── public
│     └── index.html
├── src
│    ├── assest
│    │     └── Icon ve Logo'lar.
│    ├── components
│    │     ├── Dashboard.jsx
│    │     └── EditModal.jsx
│    ├── contex
│    │     └── UsersContext.jsx
│    ├── hooks
│    │     └── useCall.jsx
│    ├── pages
│    │     ├── Home.jsx
│    │     ├── Login.jsx
│    │     └── Student.jsx
│    ├── router
│    │     └── AppRouter.js
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
└── yarn.lock
```

### Used in this project

👉 ReactJS, tailwind, material-ui, react-hook-form, axios.
