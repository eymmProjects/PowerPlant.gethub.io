// $("h1").css("color","red");
// slider

$(".slider").slider({
    slide:function(event,ui){
 const slidersVal= $("#sliderVal").val(ui.value);
    },
    min:0,
    max:1000
});

// console.log(sliderValue);

// hide and unhide 

$(".btnOff").click(function(){
    $(".container-2").hide();
});
$(".btnOn").click(function(){
    $(".container-2").show();
});

//label
$( "#slider" ).slider({
    value: 4,
    min: 1,
    max: 1000,
    step: 1
})
.each(function() {

  //
  // Add labels to slider whose values 
  // are specified by min, max and whose
  // step is set to 1
  //

  // Get the options for this slider
  var opt = $(this).data().uiSlider.options;
  
  // Get the number of possible values
  var vals = opt.max - opt.min;
  
  // Space out values
  for (var i = 0; i <= vals; i+=100) {
    
    var el = $('<label>'+(i)+'</label>').css('left',(i/vals*100)+'%');
  
    $( "#slider" ).append(el);
    
  }
  
});

$("#sliderVal").val(1);

//label end
// $( "#target" ).click(function() {
//     alert( "Handler for .click() called." );
//   });

//btn-on
$(".btnOn").click(function(){
    showFeed(feedbackAct,'The machine is active',true);
});

$(".btnOff").click(function(){
    showFeed(feedbackAct,'The machine is not active',false);
});



// digital digit
//variables
const btns = document.querySelectorAll('.btn');
const screenValue =document.querySelector('.screenValue');
const screen =document.querySelector('.screen');
const btnEnter= document.querySelector('.btn-enter');
const btnOn = document.querySelector('.btn-on');
const btnoff = document.querySelector('.btn-off');
const feedbackAct =document.querySelector('.feedback-action');
//machines state


//slider
// const btnSubmit= document.querySelector('.btn-submit');
$('.btn-submit').click(function(e){
    e.preventDefault();
    // if(sliderValue===''){
    //     showFeed(feedbackAct,'Invalid value',false);
    // }else 
    // if(sliderValue >0 && sliderValue<=1000) {
    // // }
    // textToWrite = document.getElementById("sliderValue").value;

    //     let value =textToWrite;
    //     value = (value/100)*10;

   let val= jQuery(".slider").slider("value"); 
   val = (val/100)*10;
   console.log(val);
        showFeed(feedbackAct,`The valve open by ${val.toFixed(2)} %`,true);
    
});

//end of slider
$('.btn-submit').click(function(e){
    e.preventDefault();
    console.log();

})

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
    
    
     let number = btns[i].getAttribute('data-num');
     screen.value += number;
    })
   }

btnEnter.addEventListener('click',function(e){
    e.preventDefault();
    if(screen.value===''){
        showFeed(feedbackAct,'Invalid value',false);
    }else if(screen.value >0 && screen.value <=1000) {
        let value =screen.value; 
        value = (value/100)*10;
        console.log(value);
        showFeed(feedbackAct,`The valve open by ${value.toFixed(2)} %`,true);

    
    
}

});


//submit



//btn clear

$('.btn-clear').click(function(){
    screen.value='';
})

//show action
function showFeed(element,text,value){
if(value===true){
    element.classList.add('success');
    element.innerText = text;
    screen.value='';
    setTimeout(function(){
    element.classList.remove('success');

    },3000)
}else{
    element.classList.add('alert');
    element.innerText = text;
    screen.value='';
    setTimeout(function(){
    element.classList.remove('alert');
},3000)

}
}