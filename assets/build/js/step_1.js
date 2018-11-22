$(document).ready(function() {
    //данные для первого поля
    select2_1_data= [
        { id: 'Toyota',     text: 'Toyota'     },
        { id: 'Nissan',     text: 'Nissan'     },
        { id: 'Porsche',    text: 'Porsche'    }
    ];

    //данные для второго поля, если не выбрано первое
    select2_default=[
        { id: 'C-HR',         text: 'C-HR'        },
        { id: 'Tundra',       text: 'Tundra'      },
        { id: 'Yaris',        text: 'Yaris'       },
        { id: 'Prius',        text: 'Prius'       },
        { id: '4Runner',      text: '4Runner'     },
        { id: 'Corolla',      text: 'Corolla'     },
        { id: 'RAV4',         text: 'RAV4'        },
        { id: 'Rogue',        text: 'Rogue'       },
        { id: 'Murano',       text: 'Murano'      },
        { id: 'Altima',       text: 'Altima'      },
        { id: 'Porsche  356', text: 'Porsche 356' },
        { id: 'Porsche  917', text: 'Porsche 917' },
        { id: 'Porsche  959', text: 'Porsche 959' },
        { id: 'Carrera  RS',  text: 'Carrera RS'  },
        { id: 'Spyder',       text: 'Spyder'      }
    ];

    //данные для второго поля, если в первом выбрано Toyota
    select2_2_Toyota= [
        { id: 'C-HR',    text: 'C-HR'    },
        { id: 'Tundra',  text: 'Tundra'  },
        { id: 'Yaris',   text: 'Yaris'   },
        { id: 'Prius',   text: 'Prius'   },
        { id: '4Runner', text: '4Runner' },
        { id: 'Corolla', text: 'Corolla' },
        { id: 'RAV4',    text: 'RAV4'    }
    ];

    //данные для второго поля, если в первом выбрано Nissan
    select2_2_Nissan= [
        { id: 'Rogue',  text: 'Rogue'  },
        { id: 'Murano', text: 'Murano' },
        { id: 'Altima', text: 'Altima' }
    ];

    //данные для второго поля, если в первом выбрано Porsche
    select2_2_Porsche= [
        { id: 'Porsche  356', text: 'Porsche 356' },
        { id: 'Porsche  917', text: 'Porsche 917' },
        { id: 'Porsche  959', text: 'Porsche 959' },
        { id: 'Carrera  RS',  text: 'Carrera RS'  },
        { id: 'Spyder',       text: 'Spyder'      }
    ];



    //инициализация первого поля
    $('.select2').select2({
        width: 'resolve',
        data: select2_1_data
    });
    //инициализация второго поля
    $('.select2_2').select2({
        width: 'resolve',
        data: select2_default
    });
    //смена данных у второо поля при выборе в  первом
    $('.select2').on('select2:select', function (e) {
        if(e.params.data.id=="Toyota") {
            $('.select2_2').select2('destroy');
            $('.select2_2').select2({
                width: 'resolve',
                data: select2_2_Toyota
            });
        }
        if(e.params.data.id=="Nissan") {
            // $('.select2_2').val(null).trigger('change');
            // $('.select2_2').select2('destroy');

            $('.select2_2').trigger({
                type: 'select2:select',
                data: select2_2_Nissan
            });
        }
        if(e.params.data.id=="Porsche"){
            $('.select2_2').trigger({
                type: 'select2:select',
                params: {data: select2_2_Porsche}
            });
        }
    });

});

