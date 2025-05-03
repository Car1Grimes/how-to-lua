var postList = [];
function postArticle(user, post) {
    console.log("User #".concat(user.id, " has posted an article titled ").concat(post.title, " on ").concat(post.date.toString(), "."));
}
function hasPosted(user) {
    var _a;
    return ((_a = user.postId) === null || _a === void 0 ? void 0 : _a.length) !== 0;
}
function loadPost(postId) {
    for (var i = 0; i < postList.length; i++) {
        if (postList[i].id === postId) {
            var post = postList[i];
            return post;
        }
    }
    return null;
}
function viewPostDetail(postId) {
    var post = loadPost(postId);
    if (post !== null) {
        console.log("Post #".concat(postId, ": title-").concat(post.title, ", description-").concat(post.desc, ", upload date - ").concat(post.date.toString(), ", content - ").concat(post.content));
    }
}
var user_01 = {
    id: 1,
    name: "Karen",
    password: "password",
    email: "karen@gmail.com",
    postId: [1],
};
var post_01 = {
    id: 1,
    title: "Pointer tutorial in Golang",
    desc: "Everything you need to know about pointers in Golang",
    date: new Date(),
    content: "Empty",
};
postList.push(post_01);
viewPostDetail(1);
console.log(hasPosted(user_01));
postArticle(user_01, post_01);
