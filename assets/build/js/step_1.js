$(document).ready(function() {
    //данные для первого поля
    data_1= [
        { id: 'Toyota',     text: 'Toyota'     },
        { id: 'Nissan',     text: 'Nissan'     },
        { id: 'Porsche',    text: 'Porsche'    }
    ];

    //данные для второго поля, если не выбрано первое
    data_2_default=  [
          { "text": "Toyota", "children" : [
                { id: 'C-HR',    text: 'C-HR'    },
                { id: 'Tundra',  text: 'Tundra'  },
                { id: 'Yaris',   text: 'Yaris'   },
                { id: 'Prius',   text: 'Prius'   },
                { id: '4Runner', text: '4Runner' },
                { id: 'Corolla', text: 'Corolla' },
                { id: 'RAV4',    text: 'RAV4'    }
            ]},
            { "text": "Nissan", "children" : [
                { id: 'Rogue',  text: 'Rogue'  },
                { id: 'Murano', text: 'Murano' },
                { id: 'Altima', text: 'Altima' }
            ]},
            { "text": "Porsche", "children" : [
                { id: 'Porsche  356', text: 'Porsche 356' },
                { id: 'Porsche  917', text: 'Porsche 917' },
                { id: 'Porsche  959', text: 'Porsche 959' },
                { id: 'Carrera  RS',  text: 'Carrera RS'  },
                { id: 'Spyder',       text: 'Spyder'      }
            ]}
        ]

    //данные для второго поля, если в первом выбрано Toyota
    data_2_Toyota= [
        { id: 'C-HR',    text: 'C-HR'    },
        { id: 'Tundra',  text: 'Tundra'  },
        { id: 'Yaris',   text: 'Yaris'   },
        { id: 'Prius',   text: 'Prius'   },
        { id: '4Runner', text: '4Runner' },
        { id: 'Corolla', text: 'Corolla' },
        { id: 'RAV4',    text: 'RAV4'    }
    ];

    //данные для второго поля, если в первом выбрано Nissan
    data_2_Nissan= [
        { id: 'Rogue',  text: 'Rogue'  },
        { id: 'Murano', text: 'Murano' },
        { id: 'Altima', text: 'Altima' }
    ];

    //данные для второго поля, если в первом выбрано Porsche
    data_2_Porsche= [
        { id: 'Porsche  356', text: 'Porsche 356' },
        { id: 'Porsche  917', text: 'Porsche 917' },
        { id: 'Porsche  959', text: 'Porsche 959' },
        { id: 'Carrera  RS',  text: 'Carrera RS'  },
        { id: 'Spyder',       text: 'Spyder'      }
    ];
 


    //инициализация первого поля
    $('.select_1').select2({
        data: data_1,
        placeholder: "Выберете марку"
    });
    //инициализация второго поля
    $('.select_2').select2({
        data: data_2_default,
        placeholder: "Выберете модель"
    });
    //смена данных у второо поля при выборе в первом
    $('.select_1').on('select2:select', function (e) {

        var dataVal='data_2_'+ e.params.data.id;
        $('.select_2').html('<option></option>').select2({
            data: window[dataVal], placeholder: "Выберете модель"
        });
        /* Или же, если значения вариантов в первом поле не совпадают 
            с окончанием названий массивов для второго поля, 
            то вместо этих строчек следует обрабатывать каждый вариант отдельно
        */
        // if(e.params.data.id=="Toyota") {
        //     $('.select_2').html('<option></option>').select2({
        //         data: data_2_Toyota, placeholder: "Выберете модель"
        //     });
        // }
        // if(e.params.data.id=="Nissan") {
        //     $('.select_2').html('<option></option>').select2({
        //         data: data_2_Nissan, placeholder: "Выберете модель"
        //     });
        // }
        // if(e.params.data.id=="Porsche"){
        //     $('.select_2').html('<option></option>').select2({
        //         data: data_2_Porsche, placeholder: "Выберете модель"
        //     });
        // }

    });
});

