const kategori = ["Hidangan Utama", "Hidangan Pendamping", "Minuman"];

const products = [
    {
        id: 1,
        nama: "FlashGrill Original",
        harga: 45000,
        kategori: "Hidangan Utama",
        gambar: "picture/burger.jpg"
    },
    {
        id: 2,
        nama: "Charcoal BBQ",
        harga: 55000,
        kategori: "Hidangan Utama",
        gambar: "picture/charcoalbbq.jpg"
    },
    {
        id: 3,
        nama: "Smokey Jalapeno",
        harga: 55000,
        kategori: "Hidangan Utama",
        gambar: "picture/smokeyjalapeno.jpg"
    },
    {
        id: 4,
        nama: "Triple Flame King",
        harga: 88000,
        kategori: "Hidangan Utama",
        gambar: "picture/tripleflameking.jpg"
    },
    {
        id: 5,
        nama: "Original French Fries",
        harga: 25000,
        kategori: "Hidangan Pendamping",
        gambar: "picture/originalff.jpg"
    },
    {
        id: 6,
        nama: "Loaded Cheese Fries",
        harga: 32000,
        kategori: "Hidangan Pendamping",
        gambar: "picture/loadedcheese.jpg"
    },
    {
        id: 7,
        nama: "Original Hot Dog",
        harga: 42000,
        kategori: "Hidangan Pendamping",
        gambar: "picture/originaldog.jpg"
    },
    {
        id: 8,
        nama: "Loaded Cheese Dog",
        harga: 45000,
        kategori: "Hidangan Pendamping",
        gambar: "picture/loadeddog.jpg"
    },
    {
        id: 9,
        nama: "Aqua Mineral Water 1500mL",
        harga: 10000,
        kategori: "Minuman",
        gambar: "picture/aqua.jpg"
    },
    {
        id: 10,
        nama: "Coca Cola",
        harga: 11000,
        kategori: "Minuman",
        gambar: "picture/cocacola.jpg"
    },
    {
        id: 11,
        nama: "Sprite",
        harga: 8000,
        kategori: "Minuman",
        gambar: "picture/sprite.jpg"
    },
    {
        id: 12,
        nama: "A&W Kaleng",
        harga: 10000,
        kategori: "Minuman",
        gambar: "picture/aw.jpg"
    },
]

const productList = document.querySelector("#productList");
const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");

function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}

function renderProducts(data) {
    productList.innerHTML = "";

    if (data.length === 0) {
        productList.innerHTML = `
            <div class="empty-state">
                Produk tidak ditemukan.
            </div>
        `;
        return;
    }

    data.forEach(product => {
    productList.innerHTML += `
    <article class="product-card">
        <div class="product-image">
            <img src="${product.gambar}" alt="${product.nama}">
        </div>
        <div class="product-content">
            <h3>${product.nama}</h3>
            <h4>${formatRupiah(product.harga)}</h4>
        </div>
    </article>
    `;
    });

}

renderProducts(products)

function applyFilter() {
    const keyword = searchInput.value.toLowerCase();

    const selectedCategory = categoryFilter.value;

    const filteredProducts = products.filter(product => {
        const cocokNama = product.nama.toLowerCase().includes(keyword);
        const cocokKategori = selectedCategory === "Semua" ||
        product.kategori === selectedCategory;
        return cocokNama && cocokKategori;
    });

    renderProducts(filteredProducts);
}

searchInput.addEventListener("input", applyFilter);
categoryFilter.addEventListener("change", applyFilter);