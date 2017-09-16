window.onload = function () {

    /*-------------------------------------- CONVERSIONS --------------------------------------*/
    var two = $("#two")[0];
    var five = $("#five")[0];
    var ten = $("#ten")[0];
    var twenty = $("#twenty")[0];
    var fifty = $("#fifty")[0];

    var ausdollar = $("#aus-dollar")[0];
    var usdollar = $("#us-dollar")[0];

    two.onclick = function () {
        this.style.borderColor = "#00ccff";
        five.style.borderColor = "#d8dada";
        ten.style.borderColor = "#d8dada";
        twenty.style.borderColor = "#d8dada";
        fifty.style.borderColor = "#d8dada";
        ausdollar.innerHTML = numberWithCommas((2000).toFixed(2));
        usdollar.innerHTML = numberWithCommas((2000 * 0.77050).toFixed(2));
    }

    five.onclick = function () {
        this.style.borderColor = "#00ccff";
        two.style.borderColor = "#d8dada";
        ten.style.borderColor = "#d8dada";
        twenty.style.borderColor = "#d8dada";
        fifty.style.borderColor = "#d8dada";
        ausdollar.innerHTML = numberWithCommas((5000).toFixed(2));
        usdollar.innerHTML = numberWithCommas((5000 * 0.77050).toFixed(2));
    }

    ten.onclick = function () {
        this.style.borderColor = "#00ccff";
        two.style.borderColor = "#d8dada";
        five.style.borderColor = "#d8dada";
        twenty.style.borderColor = "#d8dada";
        fifty.style.borderColor = "#d8dada";
        ausdollar.innerHTML = numberWithCommas((10000).toFixed(2));
        usdollar.innerHTML = numberWithCommas((10000 * 0.77050).toFixed(2));
    }

    twenty.onclick = function () {
        this.style.borderColor = "#00ccff";
        two.style.borderColor = "#d8dada";
        five.style.borderColor = "#d8dada";
        ten.style.borderColor = "#d8dada";
        fifty.style.borderColor = "#d8dada";
        ausdollar.innerHTML = numberWithCommas((20000).toFixed(2));
        usdollar.innerHTML = numberWithCommas((20000 * 0.77050).toFixed(2));
    }

    fifty.onclick = function () {
        this.style.borderColor = "#00ccff";
        two.style.borderColor = "#d8dada";
        five.style.borderColor = "#d8dada";
        ten.style.borderColor = "#d8dada";
        twenty.style.borderColor = "#d8dada";
        ausdollar.innerHTML = numberWithCommas((50000).toFixed(2));
        usdollar.innerHTML = numberWithCommas((50000 * 0.77050).toFixed(2));
    }


    /*-------------------------------------- PAYMENT TYPE --------------------------------------*/

    var polibox = $("#poli-box")[0];
    var bankbox = $("#bank-box")[0];
    var bpaybox = $("#bpay-box")[0];
    var bullet1 = $("#bullet1")[0];
    var bullet2 = $("#bullet2")[0];
    var bullet3 = $("#bullet3")[0];

    polibox.onclick = function () {
        this.style.backgroundColor = "#f9f9f9";
        bankbox.style.backgroundColor = "white";
        bpaybox.style.backgroundColor = "white";
        bullet1.src = "img/green3.png";
        bullet2.src = "img/gray.png";
        bullet3.src = "img/gray.png";
    }

    bankbox.onclick = function () {
        this.style.backgroundColor = "#f9f9f9";
        polibox.style.backgroundColor = "white";
        bpaybox.style.backgroundColor = "white";
        bullet1.src = "img/gray.png";
        bullet2.src = "img/green3.png";
        bullet3.src = "img/gray.png";
    }

    bpaybox.onclick = function () {
        this.style.backgroundColor = "#f9f9f9";
        polibox.style.backgroundColor = "white";
        bankbox.style.backgroundColor = "white";
        bullet1.src = "img/gray.png";
        bullet2.src = "img/gray.png";
        bullet3.src = "img/green3.png";
    }

    /*-------------------------------------- EXTRA FUNCTION --------------------------------------*/

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
