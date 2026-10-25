# HyperProve project page

Trang giới thiệu (GitHub Pages) cho paper **HyperProve: Answer-Guided Hypergraph
Expansion for Multi-Hop Question Answering** (EMNLP 2026 Main). Bố cục theo
[loongrl.github.io](https://loongrl.github.io/) (Academic Project Page Template, Bulma).

- `index.html`: toàn bộ nội dung; số liệu lấy từ `../HyperProve_Poster/docs/HyperProve.pdf`.
- `static/css/index.css`, `static/js/index.js`: style và script (copy BibTeX, nút lên đầu trang, bật/tắt ± std).
- `static/images/`: figures của paper và logo (copy từ `HyperProve_Slides/figures`, `HyperProve_Poster/logos`).
- `static/pdfs/`: poster (`HyperProve_Poster/main.pdf`) và slides (`HyperProve_Slides/EMNLP 2026_main-585.pdf`).

Bulma, Font Awesome, KaTeX và font Inter được tải từ CDN, nên trang không cần build.

## Xem thử

```sh
cd HyperProve_Page
python -m http.server 8000   # mở http://localhost:8000
```

## Deploy lên `https://hyperprove.github.io/`

Trang được host từ repo public `hyperprove/hyperprove.github.io` (organization `hyperprove`),
branch `main`, thư mục gốc. Nội dung repo đó chính là nội dung thư mục này (kể cả `.nojekyll`).
Sau khi sửa ở đây, copy sang repo đó rồi push; GitHub Pages tự build lại trong khoảng 1 phút.

Thẻ `og:url` / `og:image` trong `index.html` trỏ tới `https://hyperprove.github.io/`;
nếu host ở địa chỉ khác thì sửa lại các thẻ đó.
