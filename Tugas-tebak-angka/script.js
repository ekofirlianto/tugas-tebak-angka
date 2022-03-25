alert('Selamat datang di game tebak angka\nkamu diminta untuk menebak angka 1-3\ndan kamu akan bermain dalam 5 ronde.\nPlayer yang berhasil mengumpulkan tebakan terbanyak akan menang\nSELAMAT BERMAIN!!!');

var i = 1;
var p1 = 0;
var p2 = 0;
var round = 1;
var lagi = true;

// function tampilan ulang
function ulang() {
  lagi = confirm('Apakah anda ingin mengulang ?');
}

// function tampilan nilai
function nilai() {
  alert('Nilai yang dicari = ' + comp + '\n----------------------\nPlayer 1 = ' + p1 + '\nplayer 2 = ' + p2);
}

while (lagi === true) {
  while (i < 6) {
    alert('Round ' + round);
    var comp = Math.round(Math.random() * 3) + 1;
    console.log(comp);
    var player1 = prompt('Masukan Angka Player 1');
    var player2 = prompt('Masukan Angka Player 2');

    // Jika angka input lebih besar dari 3
    if ((player1 || player2) > 3) {
      alert('Tebakan tidak boleh lebih besar dari 3');
      ulang();
      break;
    }

    // Jika angka input lebih kecil dari 1
    if ((player1 || player2) < 1) {
      alert('Tebakan tidak boleh lebih kecil dari 1 atau kosong');
      ulang();
      break;
    }

    // jika player 1 menang
    if (player1 == comp) {
      alert('Player 1 Menang');
      p1++;
      i++;
      round++;
      nilai();
    }

    // Jika player 2 menang
    else if (player2 == comp) {
      alert('Player 2 Menang');
      p2++;
      i++;
      round++;
      nilai();
    }

    // jika tebakan sama
    else if (player1 == player2) {
      alert('Tebakan Tidak boleh sama');
      ulang();
    }

    // jika tidak ada yang benar
    else if ((player1 && player2) != comp) {
      alert('Tidak ada yang benar (Hasil Seri)');
      i++;
      round++;
      nilai();
    }
    if (i == 5) {
      lagi = false;
    }
  }
}

// hasil akhir
if (p1 > p2) {
  alert('Good Jobs Player 1\nAnda Memenangkan Permainan');
} else if (p2 > p1) {
  alert('Good Jobs Player 2\nAnda Memenangkan Permainan');
} else if (p1 === p2) {
  alert('Hasil Pertandingan Seri\nGood Jobs Player 1 & 2');
}
