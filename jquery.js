// $("h1").css("color", "blue")
// $(".red-div").css("color", "red")
// $("ul li:first").css("color","green")
// $("ul li:last").css("color","pink")
// $("#brown-div").css("color", "brown")

// $("div:first").attr("id", "b1"); //.attr because elements dont have multiple id
// $("div:last").attr("id", "b2")
// $("div").addClass("box")

// $('#my-input').val("Terabyte")
// console.log($('#my-input'))

// const data = $("div").data()

// console.log("The item with barcode " + data.barcode + " will expire on " + data.expirationdate )
// in jQuery: NO camelCase




// $("button").on("click", function() {
//     alert($("#my-input").val())
// })

// $(".box").hover(function () {
//     $(this).css("background-color", "blue")
// })

// const name = "<div class='einhorn'> Abby </div>"
// const hello = $(name)
// console.log($(name))

// $("body").append(hello)

// $('.einhorn').append('<span class="name">Einhorn </span>')

// $(".feedme").on("click", function(){
//     let divCopy = $(`<div class="feedme"> ${$(this).text()} </div>`) 

//     $("body").append(divCopy)
//   })

// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]


//   for(let name of names){
//     const newdiv = `<div class='human'> ${name.first} - ${name.last} </div>`
//       $("body").append(newdiv)
//   }
// const name = "<div class='einhorn'> Abby </div>"
// const hello = $(name)
// $("body").append(hello)


// $("div").hover(function() {
//     $(this).remove(".einhorn")
// }
// )
// $(".box").hover(function () {
//     $(this).css("background-color", "blue")
// })

//////////////////////////////////
///dynamic listeners spotcheck////
/*
const addDiv = function() {
    $("body").append("<div class=box></div>");
  };
  
  $("button").on("click", function() {
    addDiv();
  });
  
  $("body").on("click", ".box", function() { //".box" is a selector--> only allows desendents of box to be clicked
    alert("hi");
  });
  */

/////spot check

// $("button").on("click", function(){
//     $("#blogs").append("<div class='blog'>Cool blog</div>")
//   })

//   $("#blogs").on("click", ".blog", function(){
//     $(this).text("no more functions") 
//   })
///////////////////////////////////////////
//////////////jQuery Exercizes//////////////
///Ex: 1  & 2
/*
const text = $(`<input id ="input" placeholder = "Human Name">`)
$("body").append(text)
$("body").append($(`<button> Add Human </button>`))


$("button").on("click", function(){
    const add = $(`<li> ${$("#input").val()} </li>`)
    $("ul").append(add) 
})  
$("ul").on("click", "li", function(){
    const text = $(`<input id ="input" placeholder = "Human Name">`)
    $(this).remove()
})
*/
//empty brackets for .remove: because we put a selctor in .on() of "li", it restricts the event to only what we tell it to 

///Ex: 3

const createBLocks = function () {
    const newDiv = $(`<div class="box"></div>`)
    let blocks = 0;
    for(let i=0; i<3; i++) {
        $("body").append(newDiv)
    }
}
createBLocks()
createBLocks()


