import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({article}) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">`{article.title}`</h2>
            <p>{article.exerpt}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Continue Lendo</button>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default ArticleItem