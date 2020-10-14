window.onload = function () {
    try {
        var url_string = (window.location.href);
        var url = new URL(url_string);
        var nama = url.searchParams.get("nama");
        var alamat = url.searchParams.get("alamat");

        var tujuan_nama;
        var tujuan_alamat;

        if (nama === null || alamat === null) {
            tujuan_nama = "Anda";
            tujuan_alamat = "(di tempat)"
            // $( "#tujuan-isi" ).hide();
        } else {
            tujuan_nama = nama;
            tujuan_alamat = "("+ alamat +")";
        }

        document.getElementById("tujuan-nama").innerHTML = tujuan_nama;
        document.getElementById("tujuan-alamat").innerHTML = tujuan_alamat;

    } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
    }
}