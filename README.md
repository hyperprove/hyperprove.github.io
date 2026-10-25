# HyperProve project page

Trang giới thiệu (GitHub Pages) cho paper **HyperProve: Answer-Guided Hypergraph
Expansion for Multi-Hop Question Answering** (EMNLP 2026 Main). Bố cục theo
[loongrl.github.io](https://loongrl.github.io/) (Academic Project Page Template, Bulma).

Các đường dẫn `HyperProve_Poster/...`, `HyperProve_Slides/...` dưới đây nằm trong repo
[Savoxism/EMNLP-HyperProve](https://github.com/Savoxism/EMNLP-HyperProve).

- `index.html`: toàn bộ nội dung; số liệu lấy từ `HyperProve_Poster/docs/HyperProve.pdf`.
- `static/css/index.css`, `static/js/index.js`: style và script (copy BibTeX, nút lên đầu trang, bật/tắt ± std).
- `static/images/`: figures của paper và logo (copy từ `HyperProve_Slides/figures`, `HyperProve_Poster/logos`).

Bulma, Font Awesome, KaTeX và font Inter được tải từ CDN, nên trang không cần build.

## Xem thử

```sh
cd HyperProve_Page
python -m http.server 8000   # mở http://localhost:8000
```

## Deploy lên `https://hyperprove.github.io/`

Đây chính là repo `hyperprove/hyperprove.github.io` (branch `main`, thư mục gốc). Trong
`EMNLP-HyperProve` nó là git submodule `HyperProve_Page`, nên không cần copy đi đâu:

```sh
cd HyperProve_Page
git add -A && git commit -m "..." && git push   # GitHub Pages build lại trong khoảng 1 phút

cd ..
git add HyperProve_Page && git commit -m "Update project page"   # ghi lại commit mới cho repo cha
```

Clone `EMNLP-HyperProve` kèm trang: `git clone --recurse-submodules ...`
(hoặc `git submodule update --init` nếu đã clone rồi).

Thẻ `og:url` / `og:image` trong `index.html` trỏ tới `https://hyperprove.github.io/`;
nếu host ở địa chỉ khác thì sửa lại các thẻ đó.
