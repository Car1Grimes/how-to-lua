//
//
interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  phone?: string;
  postId?: number[];
}

type Post = {
  id: number;
  title: string;
  desc: string;
  date: Date;
  content: string;
};

const postList: Array<Post> = [];

function postArticle(user: User, post: Post) {
  console.log(
    `User #${user.id} has posted an article titled ${post.title} on ${post.date.toString()}.`,
  );
}

function hasPosted(user: User): boolean {
  return user.postId?.length !== 0;
}

function loadPost(postId: number): Post | null {
  for (let i = 0; i < postList.length; i++) {
    if (postList[i].id === postId) {
      const post = postList[i];
      return post;
    }
  }
  return null;
}

function viewPostDetail(postId: number) {
  const post = loadPost(postId);
  if (post !== null) {
    console.log(
      `Post #${postId}: title-${post.title}, description-${post.desc}, upload date - ${post.date.toString()}, content - ${post.content}`,
    );
  }
}

const user_01: User = {
  id: 1,
  name: "Karen",
  password: "password",
  email: "karen@gmail.com",
  postId: [1],
};

const post_01: Post = {
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
