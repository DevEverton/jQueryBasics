
const flashMessage = $("#flashMessage");
const div = $(".review");
div.slideDown(1000);


const title = $(".review h3");
title.text("My first review");

const review = $(".review p");
review.html("This is <strong>my</strong> first review");
$("body h1 span").text("Blix!");

flashMessage
.slideDown(1000)
.delay(2000)
.slideUp(1000);

const addReview = (title, review) => {
  $(div).append("<h3>" + title + "</h3>");
  $(div).append("<p>" + review + "</p>");
  div.hide();
  div.slideDown(1000);
};

const cleanInputs = () => {
  $("#restaurantNameInput").val(""); 
  $("#restaurantReviewInput").val(""); 
};


$('#submitBtn').click(function(){
  const titleInput = $("#restaurantNameInput").val();
  const reviewInput = $("#restaurantReviewInput").val();
  addReview(titleInput, reviewInput);
  cleanInputs();
});




