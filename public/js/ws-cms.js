$(document).ready(function() {
  debugger;
  // Gets an optional query string from our url (i.e. ?post_id=23)
  var url = window.location.search;
  var wsId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In localhost:8080/cms?post_id=1, postId is 1
  if (url.indexOf("?wsId=") !== -1) {
    wsId = url.split("=")[1];
    getPostData(postId);
  }

  // Getting jQuery references to the post body, title, form, and category select
  var bodyInput = $("#body");
  var titleInput = $("#title");
  var cmsForm = $("#ws-cms");
  var postCategorySelect = $("#category");
  // Giving the postCategorySelect a default value
  postCategorySelect.val("Personal");
  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", function handleFormSubmit(event) {
    debugger;
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (!titleInput.val().trim() || !bodyInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    /****
    store_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		manager_staff_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			unique: true
		},
		address_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
		},
		last_update: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		store_name: {
     */
    var newWebstore = {
      store_name: titleInput.val().trim(),
      store_id: 1,
      manager_staff_id: managerIdInput != null ? managerIdInput.val().trim() : 1,
      address_id: addresIdInput != null ? addresIdInput.val().trim() : 1,
      last_update: lastUpdateFromDB != null ? lastUpdateFromDB.val() : "TODO - DO NOT INPUT",

    };

    console.log(newWebstore);

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      //newPost.id = postId;
      newWebStore.store_id = 1; //TODOjust for test, fix 
      //updatePost(newPost);
      updateWebstore(newWebstore);
    }
    else {
      //submitPost(newPost);
      submitWebstore(newWebstore);
    }
  });

  // Submits a new post and brings user to blog page upon completion
  // function submitPost(Post) {
  //   $.post("/api/posts/", Post, function() {
  //     window.location.href = "/blog";
  //   });
  // }

    function submitWebstore(webstore) {
    $.post("/api/webstores/", webstore, function() {
      window.location.href = "/api/webstores/";
    });
  }

  // Gets post data for a post if we're editing
  // function getPostData(id) {
  //   $.get("/api/posts/" + id, function(data) {
  //     if (data) {
  //       // If this post exists, prefill our cms forms with its data
  //       titleInput.val(data.title);
  //       bodyInput.val(data.body);
  //       postCategorySelect.val(data.category);
  //       // If we have a post with this id, set a flag for us to know to update the post
  //       // when we hit submit
  //       updating = true;
  //     }
  //   });
  // }

  function getWsData(id) {
    $.get("/api/webstores/" + id, function(data) {
      if (data) {
        store_name: titleInput.val().trim();
        store_id: store_idInput.val().trim();
        manager_staff_id: managerIdInput.val().trim();
        address_id: addresIdInput.val().trim();
        last_update: lastUpdateFromDB != null ? lastUpdateFromDB.val() : "TODO - DO NOT INPUT",
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // Update a given post, bring user to the blog page when done
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    })
      .then(function() {
        window.location.href = "/blog";
      });
  }
});
