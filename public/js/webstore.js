/**
 * $(document).ready(function() {  //initialize list of webstores wen
  debugger;
  // webstoreContainer holds all of our posts
  var webstoreContainer = $(".ws-Container");
  var webstoreNameSelect = $("#ws-name");
  // Click events for the edit and delete buttons
 // $(document).on("click", "button.delete", handleWsDelete);
  /////$(document).on("click", "button.edit", handleWsEdit);
 // webstoreNameSelect.on("change", handleWsChange);
  var webstores;  //for use in populating rows

  function getAllWebstores(){
    $.get("/api/webstores/", function(data) {
      console.log("getAllWebstores", data);
      webstores = data;
      if (!data || !data.length) {
//        displayEmpty();
      }
      else {
//        initializeRows();
      }
    });
  }

  function getWebstoresByStoreName(name) {
  //  var store_name = name || "noNameProvided";
   
    $.get("/api/webstores/" + store_name, function(data) {
      console.log("getWebstoreByStoreName", data);
     
      if (!data || !data.length) {
        displayEmpty();
      }
      else {
        initializeRows(store_name);
      }
    });
  }
  
  // This function grabs posts from the database and updates the view
  //function getPosts(category) {
  function getWebstoreByStoreName(name) {
    var store_name = name || "noNameProvided";
   
    $.get("/api/webstores/" + store_name, function(data) {
      console.log("getWebstoreByStoreName", data);
     
      if (!data || !data.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete posts
  function deleteWebstore(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/webstores/" + id
    })
      .then(function() {
        
        getPosts(postCategorySelect.val());
      });
  }

  // Getting the initial list of posts
  getAllWebstores();  //Note still executing DocumentReady function
  // InitializeRows handles appending all of our constructed post HTML inside
  // webstoreContainer
  function initializeRows() {
    webstoreContainer.empty();
    var webstoresToAdd = [];
    for (var i = 0; i < webstores.length; i++) {
      webstoresToAdd.push(createNewRow(posts[i]));
    }
    webstoreContainer.append(postsToAdd);
  }

  function initializeRows(store_name) {
    webstoreContainer.empty();
    var webstoresToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      webstoresToAdd.push(createNewRow(posts[i]));
    }
    webstoreContainer.append(webstoresToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(post) {
    var newPostCard = $("<div>");
    newPostCard.addClass("card");
    var newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-default");
    var newPostTitle = $("<h2>");
    var newPostDate = $("<small>");
    var newPostCategory = $("<h5>");
    newPostCategory.text(post.category);
    newPostCategory.css({
      float: "right",
      "font-weight": "700",
      "margin-top":
      "-15px"
    });
    var newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    var newPostBody = $("<p>");
    newPostTitle.text(post.title + " ");
    newPostBody.text(post.body);
    var formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    newPostDate.text(formattedDate);
    newPostTitle.append(newPostDate);
    newPostCardHeading.append(deleteBtn);
    newPostCardHeading.append(editBtn);
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostCategory);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.data("post", post);
    return newPostCard;
  }

  // This function figures out which post we want to delete and then calls
  // deletePost
  function handleWsDelete() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    deletePost(currentPost.id);
  }

  // This function figures out which post we want to edit and takes it to the
  // Appropriate url
  function handleWstEdit() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    window.location.href = "/ws-cms?post_id=" + currentPost.id;
  }

  // This function displays a message when there are no posts
  function displayEmpty() {
    webstoreContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No posts yet for this category, navigate <a href='/cms'>here</a> in order to create a new post.");
    webstoreContainer.append(messageH2);
  }

  // This function handles reloading new posts when the category changes
  function handleWsChange() {
    var newPostCategory = $(this).val();
    getPosts(newPostCategory);
  }

});
*/
