import useFetch from "../hooks/useFetch"

function Posts() {
    const url = "https://jsonplaceholder.typicode.com/posts"
    const { data, loading, error } = useFetch(url, 1000)

    if (loading) return <h1>Carregando...</h1>
    if (error) return <h1>Erro {error.message} ao carregar posts</h1>

    return (
        <>
            <ul>
                {data && data.slice(0, 5).map((post) => (
                    <li>{post.title}</li>
                ))}
            </ul>
        </>
    )
}

export default Posts