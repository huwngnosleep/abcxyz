const post = new Post({
    title: title,
    content: content,
    imageUrl: imageUrl,
    creator: req.userId,
  });
  post
    .save()
    .then(result => {
      return User.findById(req.userId)
    })
    .then((user) => {
      creator = user
      user.posts.push(post)
      return user.save()
    })
    .then((result) => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: result,
        creator: {
          _id: creator._id,
          name: creator.name,
        }
      });
    })