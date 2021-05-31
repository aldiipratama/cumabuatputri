let nama;
const url_string = document.URL;
const url = new URL(url_string);
let sender;

if (url.searchParams.get('by') != null) {
  sender = url.searchParams.get('by');
} else {
  sender = "AldiiPratama";
}

let footer = document.getElementById("footer");
footer.innerHTML = sender;

function time() {
  var d = new Date();
  var n = d.getHours();
  if (n >= 5 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function makan() {
  switch (time()) {
    case "Pagi":
      return "sarapan"
      break;
    case "Siang":
      return "makan siang"
      break;
    case "Malam":
      return "makan malam"
      break;
      case "Sore":
      return "makan"
      break;
    default:
      break;
  }
}

document.getElementById('klik').addEventListener('click', function(){
	const {
		value: name
	} = Swal.fire({
		title: 'Masukkin Nama Kamu dulu',
		input: 'text',
		inputValue: 'Putri',
		showCancelButton: true,
		cancelButtonText: 'Gak jadi',
		allowOutsideClick: false,
		inputPlaceholder: 'Masukkan Nama',
		footer: '<i class="fab fa-instagram"><a href="https://instagram.com/rinaldi_r7" class="text-dark"> rinaldi_r7</a></i>',
		inputValidator: (value) => {
			if (!value) {
				return "Isi dulu atuh:("
			} else {
				nama = value;
			}
		}
	}).then((result) => {
		if (result.isConfirmed) {
			{
		Swal.fire({
			title: `Selamat ${time()} ${nama}`,
			text: `Btw udah ${makan()}?`,
			confirmButtonText: 'Udah',
			showDenyButton: true,
			allowOutsideClick: false,
			denyButtonText: 'Belum',
			footer: '<i class="fab fa-instagram"><a href="https://instagram.com/rinaldi_r7" class="text-dark"> rinaldi_r7</a></i>'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: "Bagus kalo dah makan",
					icon: "success",
					timer: 1500,
					timerProgressBar: true,
					showConfirmButton: false,
					allowOutsideClick: false,
				}).then(function(){
					Swal.fire({
						title: 'langsung aja ke pertanyaan ok',
						text: 'tapi maaf kalo pertanyaan nya ada yang kepo:v, btw pertanyaan terakhir menarik;v',
						showCancelButton: true,
						cancelButtonText: 'Gak jadi',
						allowOutsideClick: false
					}).then((result) => {
						if (result.isConfirmed) {
							const {
							value: question
						} = Swal.fire({
							title: 'Pertanyaan ke-1',
							text: 'Sikap seperti apa yang merasa diperlakukan dengan spesial?',
							input: 'text',
							inputPlaceholder: 'Jawab jujur',
							showCancelButton: true,
							cancelButtonText: 'keluar',
							confirmButtonText: 'Next &rarr;',
							allowOutsideClick: false,
							icon: 'question',
							footer: 'Pertanyaan 1/10',
							inputValidator: (value) => {
								if (!value) {
									return "harus dijawab!"
								} else {
									quest1 = value;
								}
							}
						}).then((result) => {
							if (result.isConfirmed) {
								const {
									value: question
								} = Swal.fire({
									title: 'Pertanyaan ke-2',
									text: `Situasi apa yang mungkin bisa bikin ${nama} senang?`,
									input: 'text',
									inputPlaceholder: 'jawab jujur',
									showCancelButton: true,
									cancelButtonText: 'keluar',
									confirmButtonText: 'Next &rarr;',
									allowOutsideClick: false,
									icon: 'question',
									footer: 'Pertanyaan 2/10',
									inputValidator: (value) => {
										if (!value) {
											return "harus dijawab!"
										} else {
											quest2 = value;
										}
									}
								}).then((result) => {
									if (result.isConfirmed) {
										const {
									value: question
								} = Swal.fire({
									title: 'Pertanyaan ke-3',
									text: `Hubungan siapa yang ${nama} kagumi?`,
									input: 'text',
									inputPlaceholder: 'jawab jujur',
									showCancelButton: true,
									cancelButtonText: 'keluar',
									confirmButtonText: 'Next &rarr;',
									allowOutsideClick: false,
									icon: 'question',
									footer: 'Pertanyaan 3/10',
									inputValidator: (value) => {
										if (!value) {
											return "harus dijawab!"
										} else {
											quest3 = value;
										}
									}
								}).then((result) => {
									if (result.isConfirmed) {
										const {
											value: question
										} = Swal.fire({
											title: "Pertanyaan ke-4",
											text: `Hal remeh apa yang bisa buat ${nama} kesal?`,
											input: 'text',
											inputPlaceholder: 'Jawab jujur',
											showCancelButton: true,
											cancelButtonText: 'Keluar',
											confirmButtonText: 'Next &rarr;',
											allowOutsideClick: false,
											icon: 'question',
											footer: 'Pertanyaan 4/10',
											inputValidator: (value) => {
												if (!value) {
													return "harus dijawab!"
												} else {
													quest4 = value;
												}
											}
										}).then((result) => {
											if (result.isConfirmed) {
												
											const {
												value: question
											} = Swal.fire({
												title: 'Pertanyaan ke-5',
												text: `Pengalaman lucu apa yang pernah dialami ${nama} waktu kecil?`,
												input: 'text',
												inputPlaceholder: 'Jawab jujur',
												showCancelButton: true,
												cancelButtonText: 'Keluar',
												confirmButtonText: 'Next &rarr;',
												allowOutsideClick: false,
												icon: 'question',
												footer: 'Pertanyaan 5/10',
												inputValidator: (value) => {
													if (!value) {
														return "harus dijawab!"
													} else {
														quest5 = value;
													}
												}
											}).then((result) => {
												if (result.isConfirmed) {
													const {
														value: question
													} = Swal.fire({
														title: 'Pertanyaan ke-6',
														text: `Coba ceritain hal konyol apa yang pernah ${nama} alami ketika masak didapur?`,
														input: 'textarea',
														inputPlaceholder: 'Jawab jujur',
														showCancelButton: true,
														cancelButtonText: 'Keluar',
														confirmButtonText: 'Next &rarr;',
														allowOutsideClick: false,
														icon: 'question',
														footer: 'pertanyaan 6/10',
														inputValidator: (value) => {
															if (!value) {
																return 'harus dijawab!'
															} else {
																quest6 = value;
															}
														}
													}).then((result) => {
												if (result.isConfirmed) {
													const {
														value: question
													} = Swal.fire({
														title: 'Pertanyaan ke-7',
														text: `Kalo misalnya ${nama} dikasih kekuatan super, Kekuatan super apa yang ${nama} mau?`,
														input: 'text',
														inputPlaceholder: 'Jawab jujur',
														showCancelButton: true,
														cancelButtonText: 'Keluar',
														confirmButtonText: 'Next &rarr;',
														allowOutsideClick: false,
														icon: 'question',
														footer: 'pertanyaan 7/10',
														inputValidator: (value) => {
															if (!value) {
																return 'harus dijawab!'
															} else {
																quest7 = value;
															}
														}
													}).then((result) => {
												if (result.isConfirmed) {
													const pilihan8 = {
														'hutan': 'dihutan belantara',
														'rumah': 'dirumah tak berpenghuni sendirian'
													}
													const {
														value: question
													} = Swal.fire({
														title: 'Pertanyaan ke-8',
														text: `Pilih terjebak semalaman dihutan belantara atau tertinggal di rumah tak berpenghuni sendirian?`,
														input: 'radio',
														inputOptions: pilihan8,
														inputPlaceholder: 'Jawab jujur',
														showCancelButton: true,
														cancelButtonText: 'Keluar',
														confirmButtonText: 'Next &rarr;',
														allowOutsideClick: false,
														icon: 'question',
														footer: 'pertanyaan 8/10',
														inputValidator: (value) => {
															if (!value) {
																return 'harus dijawab!'
															} else {
																quest8 = value;
															}
														}
													}).then((result) => {
												if (result.isConfirmed) {
													const {
														value: question
													} = Swal.fire({
														title: 'Pertanyaan ke-9',
														text: `Hal gila apa yang pernah ${nama} lakuin saat duduk di bangku sekolah?`,
														input: 'text',
														inputPlaceholder: 'Jawab jujur',
														showCancelButton: true,
														cancelButtonText: 'Keluar',
														confirmButtonText: 'Next &rarr;',
														allowOutsideClick: false,
														icon: 'question',
														footer: 'pertanyaan 9/10',
														inputValidator: (value) => {
															if (!value) {
																return 'harus dijawab!'
															} else {
																quest9 = value;
															}
														}
													}).then((result) => {
												if (result.isConfirmed) {
													const {
														value: question
													} = Swal.fire({
														title: 'Pertanyaan ke-10',
														text: `Semisal ${nama} diberikan kesempatan untuk bisa bertanya 5 buah pertanyaan kepada hewan peliharaan, apa aja yang akan ${nama} tanyakan?`,
														input: 'text',
														inputPlaceholder: 'Jawab jujur',
														showCancelButton: true,
														cancelButtonText: 'Keluar',
														confirmButtonText: 'Next &rarr;',
														allowOutsideClick: false,
														icon: 'question',
														footer: 'pertanyaan 10/10',
														inputValidator: (value) => {
															if (!value) {
																return 'harus dijawab!'
															} else {
																quest10 = value;
															}
														}
													}).then(function(){
														const tap = document.getElementById('tap');
														const teks = document.getElementById('teks');
														const card = document.getElementById('card');
														teks.classList.remove('d-none');
														card.classList.add('d-none');
														setTimeout(function(){
															tap.classList.remove('d-none');
															document.getElementById('tap').addEventListener('click', function(){
																window.location.reload();
															});
														}, 2000);
													});
													new TypeIt("#teks", {
													strings: ["Arigatou"],
													startDelay: 500,
													speed: 150,
													loop: false,
													waitUntilVisible: true,
													}).go();
												}
											});
												}
											});
												}
											});
												}
											});
												}
											});
											}
										});
									} 
								});
									}
								});
							}
						});
						}
					});
				});

				// Pertanyaan ketika klik belum makan
			} else if (result.isDenied) {
				Swal.fire({
					title: 'Yauda jangan lupa makan yaa :)',
					showConfirmButton: false,
					timer: 1500,
					timerProgressBar: true,
					allowOutsideClick: false
				}).then(function(){
					Swal.fire({
						title: 'langsung aja ke pertanyaan ok',
						text: 'tapi maaf kalo pertanyaan nya ada yang kepo:v, btw pertanyaan terakhir menarik;v',
						showCancelButton: true,
						cancelButtonText: 'Gak jadi',
						allowOutsideClick: false
					}).then((result) => {
						if (result.isConfirmed) {
							const {
							value: question
						} = Swal.fire({
							title: 'Pertanyaan ke-1',
							text: 'Sikap seperti apa yang merasa diperlakukan dengan spesial?',
							input: 'text',
							inputPlaceholder: 'Jawab jujur',
							showCancelButton: true,
							cancelButtonText: 'keluar',
							confirmButtonText: 'Next &rarr;',
							allowOutsideClick: false,
							icon: 'question',
							footer: 'Pertanyaan 1/10',
							inputValidator: (value) => {
								if (!value) {
									return "harus dijawab!"
								} else {
									quest1 = value;
								}
							}
						}).then((result) => {
							if (result.isConfirmed) {
								const {
									value: question
								} = Swal.fire({
									title: 'Pertanyaan ke-2',
									text: `Situasi apa yang mungkin bisa bikin ${nama} senang?`,
									input: 'text',
									inputPlaceholder: 'jawab jujur',
									showCancelButton: true,
									cancelButtonText: 'keluar',
									confirmButtonText: 'Next &rarr;',
									allowOutsideClick: false,
									icon: 'question',
									footer: 'Pertanyaan 2/10',
									inputValidator: (value) => {
										if (!value) {
											return "harus dijawab!"
										} else {
											quest2 = value;
										}
									}
								}).then((result) => {
									if (result.isConfirmed) {
										const {
									value: question
								} = Swal.fire({
									title: 'Pertanyaan ke-3',
									text: `Hubungan siapa yang ${nama} kagumi?`,
									input: 'text',
									inputPlaceholder: 'jawab jujur',
									showCancelButton: true,
									cancelButtonText: 'keluar',
									confirmButtonText: 'Next &rarr;',
									allowOutsideClick: false,
									icon: 'question',
									footer: 'Pertanyaan 3/10',
									inputValidator: (value) => {
										if (!value) {
											return "harus dijawab!"
										} else {
											quest3 = value;
										}
									}
								}).then((result) => {
									if (result.isConfirmed) {
										const {
											value: question
										} = Swal.fire({
											title: "Pertanyaan ke-4",
											text: `Hal remeh apa yang bisa buat ${nama} kesal?`,
											input: 'text',
											inputPlaceholder: 'Jawab jujur',
											showCancelButton: true,
											cancelButtonText: 'Keluar',
											confirmButtonText: 'Next &rarr;',
											allowOutsideClick: false,
											icon: 'question',
											footer: 'Pertanyaan 4/10',
											inputValidator: (value) => {
												if (!value) {
													return "harus dijawab!"
												} else {
													quest4 = value;
												}
											}
										}).then((result) => {
											if (result.isConfirmed) {
												
											const {
												value: question
											} = Swal.fire({
												title: 'Pertanyaan ke-5',
												text: `Pengalaman lucu apa yang pernah dialami ${nama} waktu kecil?`,
												input: 'text',
												inputPlaceholder: 'Jawab jujur',
												showCancelButton: true,
												cancelButtonText: 'Keluar',
												confirmButtonText: 'Next &rarr;',
												allowOutsideClick: false,
												icon: 'question',
												footer: 'Pertanyaan 5/10',
												inputValidator: (value) => {
													if (!value) {
														return "harus dijawab!"
													} else {
														quest5 = value;
													}
												}
											}).then((result) => {
												if (result.isConfirmed) {
													const {
														value: question
													} = Swal.fire({
														title: 'Pertanyaan ke-6',
														text: `Coba ceritain hal konyol apa yang pernah ${nama} alami ketika masak didapur?`,
														input: 'textarea',
														inputPlaceholder: 'Jawab jujur',
														showCancelButton: true,
														cancelButtonText: 'Keluar',
														confirmButtonText: 'Next &rarr;',
														allowOutsideClick: false,
														icon: 'question',
														footer: 'pertanyaan 6/10',
														inputValidator: (value) => {
															if (!value) {
																return 'harus dijawab!'
															} else {
																quest6 = value;
															}
														}
													}).then((result) => {
												if (result.isConfirmed) {
													const {
														value: question
													} = Swal.fire({
														title: 'Pertanyaan ke-7',
														text: `Kalo misalnya ${nama} dikasih kekuatan super, Kekuatan super apa yang ${nama} mau?`,
														input: 'text',
														inputPlaceholder: 'Jawab jujur',
														showCancelButton: true,
														cancelButtonText: 'Keluar',
														confirmButtonText: 'Next &rarr;',
														allowOutsideClick: false,
														icon: 'question',
														footer: 'pertanyaan 7/10',
														inputValidator: (value) => {
															if (!value) {
																return 'harus dijawab!'
															} else {
																quest7 = value;
															}
														}
													}).then((result) => {
												if (result.isConfirmed) {
													const pilihan8 = {
														'hutan': 'dihutan belantara',
														'rumah': 'dirumah tak berpenghuni sendirian'
													}
													const {
														value: question
													} = Swal.fire({
														title: 'Pertanyaan ke-8',
														text: `Pilih terjebak semalaman dihutan belantara atau tertinggal di rumah tak berpenghuni sendirian?`,
														input: 'radio',
														inputOptions: pilihan8,
														inputPlaceholder: 'Jawab jujur',
														showCancelButton: true,
														cancelButtonText: 'Keluar',
														confirmButtonText: 'Next &rarr;',
														allowOutsideClick: false,
														icon: 'question',
														footer: 'pertanyaan 8/10',
														inputValidator: (value) => {
															if (!value) {
																return 'harus dijawab!'
															} else {
																quest8 = value;
															}
														}
													}).then((result) => {
												if (result.isConfirmed) {
													const {
														value: question
													} = Swal.fire({
														title: 'Pertanyaan ke-9',
														text: `Hal gila apa yang pernah ${nama} lakuin saat duduk di bangku sekolah?`,
														input: 'text',
														inputPlaceholder: 'Jawab jujur',
														showCancelButton: true,
														cancelButtonText: 'Keluar',
														confirmButtonText: 'Next &rarr;',
														allowOutsideClick: false,
														icon: 'question',
														footer: 'pertanyaan 9/10',
														inputValidator: (value) => {
															if (!value) {
																return 'harus dijawab!'
															} else {
																quest9 = value;
															}
														}
													}).then((result) => {
												if (result.isConfirmed) {
													const {
														value: question
													} = Swal.fire({
														title: 'Pertanyaan ke-10',
														text: `Semisal ${nama} diberikan kesempatan untuk bisa bertanya 5 buah pertanyaan kepada hewan peliharaan, apa aja yang akan ${nama} tanyakan?`,
														input: 'text',
														inputPlaceholder: 'Jawab jujur',
														showCancelButton: true,
														cancelButtonText: 'Keluar',
														confirmButtonText: 'Next &rarr;',
														allowOutsideClick: false,
														icon: 'question',
														footer: 'pertanyaan 10/10',
														inputValidator: (value) => {
															if (!value) {
																return 'harus dijawab!'
															} else {
																quest10 = value;
															}
														}
													}).then(function(){
														const tap = document.getElementById('tap');
														const teks = document.getElementById('teks');
														const card = document.getElementById('card');
														teks.classList.remove('d-none');
														card.classList.add('d-none');
														setTimeout(function(){
															tap.classList.remove('d-none');
															document.getElementById('tap').addEventListener('click', function(){
																window.location.reload();
															});
														}, 2000);
													});
													new TypeIt("#teks", {
													strings: ["Arigatou"],
													startDelay: 500,
													speed: 150,
													loop: false,
													waitUntilVisible: true,
													}).go();
												}
											});
												}
											});
												}
											});
												}
											});
												}
											});
											}
										});
									} 
								});
									}
								});
							}
						});
						}
					});
				});
			} 
		});
	}
		}
	});
});
