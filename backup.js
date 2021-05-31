const {
        value: name
    } = Swal.fire({
        title: 'Pertanyaan ke-1',
        text: 'Sikap seperti apa yang merasa diperlakukan dengan spesial?',
        input: 'text',
        inputPlaceholder: 'Jawab jujur',
        showCancelButton: true,
        cancelButtonText: 'keluar',
        confirmButtonText: 'Next &rarr;',
        showDenyButton: true,
        denyButtonText: 'Lewati',
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
                value: name
            } = Swal.fire({
                title: 'Pertanyaan ke-2',
                text: `Situasi apa yang mungkin bisa bikin ${nama} senang?`,
                input: 'text',
                inputPlaceholder: 'jawab jujur',
                showCancelButton: true,
                cancelButtonText: 'keluar',
                confirmButtonText: 'Next &rarr;',
                showDenyButton: true,
                denyButtonText: 'Lewati',
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
                value: name
            } = Swal.fire({
                title: 'Pertanyaan ke-3',
                text: `Hubungan siapa yang ${nama} kagumi dan kenapa?`,
                input: 'text',
                inputPlaceholder: 'jawab jujur',
                showCancelButton: true,
                cancelButtonText: 'keluar',
                confirmButtonText: 'Next &rarr;',
                showDenyButton: true,
                denyButtonText: 'Lewati',
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
                        value: name
                    } = Swal.fire({
                        title: "Pertanyaan ke-4",
                        text: `Hal remeh apa yang bisa buat ${nama} kesal?`,
                        input: 'text',
                        inputPlaceholder: 'Jawab jujur',
                        showCancelButton: true,
                        cancelButtonText: 'Keluar',
                        confirmButtonText: 'Next &rarr;',
                        allowOutsideClick: false,
                        showDenyButton: true,
                        denyButtonText: 'Lewati',
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
                            value: name
                        } = Swal.fire({
                            title: 'Pertanyaan ke-5',
                            text: `Pengalaman lucu apa yang pernah dialami ${nama} waktu kecil?`,
                            input: 'text',
                            inputPlaceholder: 'Jawab jujur',
                            showCancelButton: true,
                            cancelButtonText: 'Keluar',
                            confirmButtonText: 'Next &rarr;',
                            showDenyButton: true,
                            denyButtonText: 'Lewati',
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
                                    value: name
                                } = Swal.fire({
                                    title: 'Pertanyaan ke-6',
                                    text: `Coba ceritain hal konyol apa yang pernah ${nama} alami ketika masak didapur?`,
                                    input: 'text',
                                    inputPlaceholder: 'Jawab jujur',
                                    showCancelButton: true,
                                    cancelButtonText: 'Keluar',
                                    confirmButtonText: 'Next &rarr;',
                                    showDenyButton: true,
                                    denyButtonText: 'Lewati',
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
                                    value: name
                                } = Swal.fire({
                                    title: 'Pertanyaan ke-7',
                                    text: `Kalo misalnya ${nama} dikasih kekuatan super, Kekuatan super apa yang ${nama} mau? dan Kenapa?`,
                                    input: 'text',
                                    inputPlaceholder: 'Jawab jujur',
                                    showCancelButton: true,
                                    cancelButtonText: 'Keluar',
                                    confirmButtonText: 'Next &rarr;',
                                    showDenyButton: true,
                                    denyButtonText: 'Lewati',
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
                                const {
                                    value: name
                                } = Swal.fire({
                                    title: 'Pertanyaan ke-8',
                                    text: `Pilih terjebak semalaman dihutan belantara atau tertinggal di rumah tak berpenghuni sendirian? Mengapa?`,
                                    input: 'text',
                                    inputPlaceholder: 'Jawab jujur',
                                    showCancelButton: true,
                                    cancelButtonText: 'Keluar',
                                    confirmButtonText: 'Next &rarr;',
                                    showDenyButton: true,
                                    denyButtonText: 'Lewati',
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
                                    value: name
                                } = Swal.fire({
                                    title: 'Pertanyaan ke-9',
                                    text: `Seandainya bisa bertukar tubuh dengan figur publik favoritmu dalam kurun waktu 24jam, apa aja hal yang akan ${nama} lakuin?`,
                                    input: 'text',
                                    inputPlaceholder: 'Jawab jujur',
                                    showCancelButton: true,
                                    cancelButtonText: 'Keluar',
                                    confirmButtonText: 'Next &rarr;',
                                    showDenyButton: true,
                                    denyButtonText: 'Lewati',
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
                                    value: name
                                } = Swal.fire({
                                    title: 'Pertanyaan ke-10',
                                    text: `Semisal ${nama} diberikan kesempatan untuk bisa bertanya 5 buah pertanyaan kepada hewan peliharaan, apa aja yang akan ${nama} tanyakan?`,
                                    input: 'text',
                                    inputPlaceholder: 'Jawab jujur',
                                    showCancelButton: true,
                                    cancelButtonText: 'Keluar',
                                    confirmButtonText: 'Next &rarr;',
                                    showDenyButton: true,
                                    denyButtonText: 'Lewati',
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
                                strings: ["Terimakasih."],
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