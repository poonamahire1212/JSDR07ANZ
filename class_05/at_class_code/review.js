// Objects review

const blogPost = {
    post: "some text here",
    title: "My post Number One",
    likes: 0,
    comments: [{
        text: "our first comment",
        votes: 0,
        author: "Mariam U"
    }, {
        text: "our second comment",
        votes: 0,
        author: "Anonymous"
    }],
    author: "A post author"
};

// Objects, accessing the values

// title of my post
console.log(blogPost.title);
// see all the comments to my post
console.log(blogPost.comments);
// first comment on my post
console.log(blogPost.comments[0].text);
// check how many comments in total my blog has
console.log(blogPost.comments.length);


// I want to get all keys from my object
console.log(Object.keys(blogPost));
// I want to get all the values from my object
console.log(Object.values(blogPost));
