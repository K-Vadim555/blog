export let removePostById = (posts, setPosts, id) => {
    let arr = posts.filter((post) => post.id !== id)

    console.log(arr)

    setPosts([...arr])
}

