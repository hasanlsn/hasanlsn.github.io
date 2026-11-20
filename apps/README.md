# App pages

Uygulama listesi `index.html` sayfasında tutulur:

- https://hasanlsn.github.io/apps/

Her uygulama kendi klasöründe tutulur:

```
apps/
  index.html        App list page
  assets/           List page CSS, OG image and screenshot thumbnails
  <app-slug>/
    index.html      Marketing / landing page
    support.html    Support URL
    privacy.html    Privacy Policy URL
    assets/         Icon, screenshots, page.css
```

Mevcut uygulamalar:

- `ritim/` — https://hasanlsn.github.io/apps/ritim/
- `qleair/` — https://hasanlsn.github.io/apps/qleair/

Yeni bir uygulama eklerken aynı üç sayfayı ve `assets/page.css` bağlantısını
kullanabilirsiniz. Sayfaların birbirine göreli bağlantıları `index.html`,
`support.html` ve `privacy.html` şeklindedir. Yeni uygulamayı `apps/index.html`
içindeki karta ve `assets/thumbs/` klasörüne eklemeyi unutmayın.
