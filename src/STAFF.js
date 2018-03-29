
//每一位成员信息
class staffItem {
    constructor(item) {
        this.info = {};
        this.info.name = item.name;
        this.info.age = item.age || 0;
        this.info.sex = item.sex;
        this.info.id = item.id;
        this.descrip = item.descrip || '';
        this.key = staffItem.key++;
    }
}

staffItem.key = 0;

//管理成员
class STAFF {
    constructor() {
        this.allStaff = [
            new staffItem(STAFF.rawData[0]),
            new staffItem(STAFF.rawData[1]),
            new staffItem(STAFF.rawData[2]),
            new staffItem(STAFF.rawData[3]),
            new staffItem(STAFF.rawData[4]),
            new staffItem(STAFF.rawData[5]),
            new staffItem(STAFF.rawData[6]),
            new staffItem(STAFF.rawData[7]),
            new staffItem(STAFF.rawData[8]),
            new staffItem(STAFF.rawData[9]),
            new staffItem(STAFF.rawData[10])
        ];
        //this.staff是用于显示的成员信息
        this.staff = this.allStaff;

        //默认按照身份排序
        this.orderSearch = 0;  //默认按身份排序
        this.searchStaff();
    }

    //根据关键字、身份、年龄排序
    searchStaff() {
        //根据关键字排序
        let words = [this.descripSearch, this.idSearch];
        this.staff = this.allStaff;
        for (let i = 0; i < words.length; i++) {
            if (!words[i]) {
                continue;
            }
            this.staff = this.staff.filter((item) => {
                return item.info.name.indexOf(words[i]) != -1 ||
                    (item.info.age + '').indexOf(words[i]) != -1 ||
                    item.info.id.indexOf(words[i]) != -1 ||
                    item.info.sex.indexOf(words[i]) != -1;
            });
        }
        //根据身份、年龄排序
        return this.orderStaff();
    }

    //添加新成员信息
    addStaffItem(item) {
        let newStaff = new staffItem(item);
        this.allStaff = this.allStaff.concat(newStaff);
        this.searchStaff();
        // console.log(this.allStaff);
        return this;
    }

    //编辑已有成员信息
    editStaffItem(item) {
        this.allStaff = this.allStaff.map((value) => {
            if(value.key == item.key){
                let newStaff = new staffItem(item);
                return newStaff;
            }else{
                return value;
            }
        })
        this.searchStaff();
        return this;
    }

    //移除某一成员信息
    removeItem(key) {
        this.allStaff = this.allStaff.filter(value => {
            if (value.key == key) {
                return false;
            }
            return true;
        });
        this.staff = this.allStaff;
        this.searchStaff();
        return this;
    }

    orderById() {
        let id = { '主任': 0, '老师': 1, '学生': 2, '实习': 3 };
        this.staff.sort((a, b) => {
            return (id[a.info.id] - id[b.info.id]);
        });
        return this;
    }

    orderByAgeUp() {
        this.staff.sort((a, b) => {
            return (a.info.age - b.info.age);
        });
        this.staff = [...this.staff];
        return this;
    }

    orderByAgeDown() {
        this.staff.sort((a, b) => {
            return b.info.age - a.info.age;
        });
        this.staff = [...this.staff];
        return this;
    }

    orderStaff() {
        if (parseInt(this.orderSearch, 10) === 0) {
            this.orderById();
        } else if (parseInt(this.orderSearch, 10) === 1) {
            this.orderByAgeUp();
        } else {
            this.orderByAgeDown();
        }
        return this;
    }
}

STAFF.rawData = [{ descrip: '我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', id: '主任' },
{ descrip: '我是一匹来自远方的狼。', sex: '女', age: 21, name: '赵静', id: '学生' },
{ descrip: '我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', id: '学生' },
{ descrip: '我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', id: '实习' },
{ descrip: '我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', id: '实习' },
{ descrip: '我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', id: '学生' },
{ descrip: '我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', id: '主任' },
{ descrip: '我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', id: '老师' },
{ descrip: '我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', id: '学生' },
{ descrip: '我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', id: '实习' },
{ descrip: '我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', id: '实习' }];

export default STAFF