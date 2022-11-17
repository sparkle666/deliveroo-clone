import sanityClient from "@sanity/client"
import imgUrlBuilder from "@sanity/image-url"

const client = sanityClient({
    projectId: "c160dc7i",
    dataset: "production",
    useCdn: true,
    apiVersion: '2022-11-16'
})

const builder = imgUrlBuilder(client)

export const urlFor = (url) => builder.image(url)

export default client