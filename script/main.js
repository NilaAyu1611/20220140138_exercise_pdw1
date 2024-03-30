function updateDateTime() {
    const date = new Date();            /*format tgl, hari, bulan, jam, menit dan detik */
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    const formattedDate = date.toLocaleDateString('en-US', options);
    document.getElementById("waktu").innerHTML = `<p>🗓️${formattedDate}🕝</p>`;
}

setInterval(updateDateTime, 1000);  /*guna untuk mmeperbarui waktu secara real-time */

updateDateTime();
