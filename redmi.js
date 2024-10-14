document.addEventListener("DOMContentLoaded", function() {
    const models = document.getElementById("models");
    const main = document.querySelector("main");
    const header = document.querySelector("header");

    const redmi = [
        {
            "model": "Redmi 12 5G",
            "display": "6.79 inches, IPS LCD, 90Hz",
            "processor": "Qualcomm Snapdragon 4 Gen 2",
            "ram": "4/6GB",
            "storage": "128GB",
            "image": "https://media.croma.com/image/upload/v1708664664/Croma%20Assets/Communication/Mobiles/Images/275652_0_gca8r2.png?tr=w-600"
        },
        {
            "model": "Redmi 13C Prime",
            "display": "6.79 inches, IPS LCD, 90Hz",
            "processor": "MediaTek Helio G88",
            "ram": "4/6GB",
            "storage": "128GB",
            "image": "https://m.media-amazon.com/images/I/41taaTR2KdL._QL92_SH45_SX240_SY220_CR,0,0,240,220_.jpg"
        },
        {
            "model": "Redmi Note 11",
            "display": "6.43 inches, AMOLED",
            "processor": "MediaTek Helio G88",
            "ram": "4/6GB",
            "storage": "64/128GB",
            "image": "https://www.refurbished.store/cache/images/xiaomi-redmi-note-11-grijs-frontandback_600x600_BGresize_16777215-tj.png"
        },
        {
            "model": "Redmi Note 10",
            "display": "6.67 inches, AMOLED, 60Hz",
            "processor": "Qualcomm Snapdragon 678",
            "ram": "4/6GB",
            "storage": "64/128GB",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note10--.jpg"
        },
        {
            "model": "Redmi Note 9",
            "display": "6.53 inches, IPS LCD",
            "processor": "MediaTek Helio G85",
            "ram": "3/4GB",
            "storage": "64/128GB",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhDloJ6YJHWrkYXsU4LwlEpmA8cQP6Vrusg&s"
        },
        {
            "model": "Redmi 8A Dual",
            "display": "6.22 inches, IPS LCD",
            "processor": "Qualcomm Snapdragon 439",
            "ram": "2/3GB",
            "storage": "32/64GB",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCB7PapNE6IePuHTRHLv8jEy18K647HiT5kQ&s"
        }
    ];

    const colors = [
        "#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333"
    ];

    function showmobiles() {
        models.innerHTML = '';
        redmi.forEach((phone, index) => { // Fixed the syntax here
            const details = document.createElement('div');
            details.classList.add("phone");
            details.innerHTML = `<div class="row2">
                <img src="${phone.image}"><br>
                <h4>model: ${phone.model}</h4></div>
                <div class="detailss">
                    <p>model: ${phone.model}</p>
                    <p>display: ${phone.display}</p>
                    <p>processor: ${phone.processor}</p>
                    <p>ram: ${phone.ram}</p>
                    <p>storage: ${phone.storage}</p>
                    <br>
                </div>
            `;

            const style = document.createElement("style");
            style.textContent = `.phone:nth-child(${index + 1}):hover .detailss { background-color: ${colors[index % colors.length]}; }`;
            document.head.appendChild(style);

            models.appendChild(details); // Append the details div to the models container
        });
    }

    showmobiles(); // Call the function to display the mobiles
});
