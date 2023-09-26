const key: string = "61667a39-a309-4fcf-bd7a-8f503bf6d796";

// export const getStaticPaths = async () => {
// 	try {
// 		const server: string = `https://content.guardianapis.com/search?&api-key=${key}`
// 		const res = await fetch(server)
// 		if (!res.ok) {
// 			throw Error('server error')
// 		}
// 		const data = await res.json()

// 		const paths = data.response.results.map((news: { id: string }) => {
// 			return {
// 				params: { id: news.id },
// 			}
// 		})

// 		return {
// 			paths,
// 			fallback: false,
// 		}
// 	} catch (err) {
// 		console.log('server error')
// 	}
// }

// export const getStaticProps = async (context: { params: { id: string } }) => {
// 	const id = context.params.id
// 	const server: string = `https://content.guardianapis.com/${id}?api-key=${key}`
// 	const res = await fetch(server)
// 	if (!res.ok) {
// 		throw Error('server error')
// 	}
// 	const data = await res.json()

// 	return {
// 		props: { news: data },
// 	}
// }


const NewsDetails = ({ news }: { news: any }) => {
	return (
		<div>
			details
		</div>
	)
}

export default NewsDetails;
