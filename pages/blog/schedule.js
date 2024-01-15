import { getPostBySlug } from 'lib/api'
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar
} from 'components/two-column'
<<<<<<< HEAD
import Image from 'next/image'
import PostCategories from 'components/post-categories'
import ConvertBody from 'components/convert-body'
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'
=======
import ConvertBody from 'components/convert-body'
import PostCategories from 'components/post-categories'
import Image from 'next/image'
>>>>>>> chapter8

const Schedule = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description
}) => {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
<<<<<<< HEAD
=======

>>>>>>> chapter8
      <article>
        <PostHeader title={title} subtitle='Blog Article' publish={publish} />
        <figure>
          <Image
            src={eyecatch.url}
            alt=''
            layout='responsive'
            width={eyecatch.width}
<<<<<<< HEAD
            height={eyecatch.height}
=======
            height='eyecatch.height'
>>>>>>> chapter8
            sizes='(min-width: 1152px) 1152px, 100vw'
            priority
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  )
}
export default Schedule

export async function getStaticProps () {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)
  const description = extractText(post.content)
<<<<<<< HEAD
=======

>>>>>>> chapter8
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
<<<<<<< HEAD
      categories: post.categories,
      description: description
    }
=======
      categories: post.categories
      description: description,
    },
>>>>>>> chapter8
  }
}
