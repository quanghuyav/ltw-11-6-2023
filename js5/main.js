
// const student1 =  {
//     name: "Huy",
//     age: 24,
//     address: "hà nội",
//     "full-name": "Nguyễn QUang Huy",
//     score: [10,9,8,10],
//     gioiThieuTen: function (){
//         console.log("tôi tên là",this.name )
//     }


// }

// console.log(student1["full-name"])


// console.log("trước khi thêm , sửa thuộc tính",student1)

// student1.name = "Lâm"
// student1.math = 10
// student1["tong-diem"]= 30
// console.log(student1)

// student1.gioiThieuTen()


// const student1 = {
//     name: "huy",
//     age: 24,
//     score: [10, 10,10],

//     getName: function(){
//         return this.name
//     },
//     setName: function(name){
//         this.name = name
//     },

//     sumScore : function (){
//         return this.score[0] + this.score[1] + this.score[2]
//     }
// }

// console.log(student1.sumScore)

// function Student (name,age,score) {
//     this.name = name
//     this.age = age
//     this.score=score
//     this.getName = function (){
//         return this.name
//     }
//     this.setName = function(name){
//         this.name = name
//     }
// }

// const student1 = new Student("huy",24,[1,2,3])
// const student2 = new Student("Lâm",1,[3,4,5])

// console.log(student1.getName())
// student1.setName("quân")

// console.log(student1,student2)

// function Student (name,age){
//     this.name = name
//     this.age = age
// }

// Student.prototype.address = "Hà nội"
// Student.prototype.getName = function(){
//     return this.name
// }

// const student1 = new Student("Huy",24)

// console.log(student1)

console.log(Math.max (1,2,4,52,3)) // 0 1 2 >> 1 2 3