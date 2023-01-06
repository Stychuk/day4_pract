let students = [
    {
        id: '',
        name: "Іванюк Іван Михайлович",
        group: "РПЗ 19 1/9",
        year: "2004",
        pr: true,
    },
    {
        id: '',
        name: "Матицин Кіріл Олексійович",
        group: "РПЗ 19 1/9",
        year: "2004",
        pr: false,
    },
    {
        id: '',
        name: "Духовченко Дмитро Вікторович",
        group: "РПЗ 19 1/9",
        year: "2004",
        pr: true,
    },
    {
        id: '',
        name: "Корнієнко Владислав Віталійович",
        group: "РПЗ 19 1/9",
        year: "2004",
        pr: false,
    },
    {
        id: '',
        name: "Стичук Анастасія Валеріївна",
        group: "РПЗ 19 1/9",
        year: "2004",
        pr: false,
    },
    {
        id: '',
        name: "Литвин Дмитро Костянтинович",
        group: "РПЗ 19 1/9",
        year: "2004",
        pr: false,
    },
    {
        id: '',
        name: "Шрамко Владислав Вячеславович",
        group: "РПЗ 19 1/9",
        year: "2004",
        pr: false,
    },
];

var studArray = new Vue ({
    el: '#studArray',
    data: {
        stud: students.slice(),
        filter_name: '',
        add_name: '',
        add_group: '0',
        add_year: '',
        add_pr: '',
        block_style: {
            width: "45%",
            height: "50px",
            backgroundColor: "red",
        }
    },
    methods: {
        delete_stud: function(row) {
            for (let i = 0; i < this.stud.length; i++)
                if (Number(i) === Number(row))
                    this.stud.splice(i,1);
        },

        new_color: function(){
            this.block_style.backgroundColor="green";
        },

        initial_color: function(){
            this.block_style.backgroundColor="red";
        },

        add_student: function() {

            if (this.add_group == 0) {
                alert('Група не обрана!');
                return
            }
            else if (this.add_group == 1) {
                this.add_group = 'РПЗ 19 1/9'
            }
            else if (this.add_group == 2) {
                this.add_group = 'РПЗ 19 2/9'
            }
            else {
                alert('Невідома помилка...');
                return
            }

            let array_add_stud = {
                id: '',
                name: this.add_name,
                group: this.add_group,
                year: this.add_year,
                pr: this.add_pr,
            }
            this.stud.push( array_add_stud );
            console.log(this.stud);

            this.add_name = '';
            this.add_group = '';
            this.add_year = '';
            this.add_pr = '';
        }        
    }
});