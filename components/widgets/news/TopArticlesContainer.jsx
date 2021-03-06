import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useQuery } from "react-query"

import ThemedContainer from "../../themed/ThemedContainer"

import { getTopArticles } from "../../../helpers/queries/news/getTopArticles"
import { devices, lightShadow } from "../../../styles/styled"
import LoadingSpinner from "../../LoadingSpinner"

const ArticlesContainer = styled(ThemedContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &::after {
    content: "";
    flex: auto;
  }
`
const ArticleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  width: 100%;
  border: 1px solid #ececec;
  border-radius: 3px;
  box-shadow: ${lightShadow};
  margin-bottom: 36px;

  @media ${devices.laptop} {
    &:not(:nth-child(3n)) {
      margin-right: 45px;
    }
    width: 30%;
  }
`

const ArticleCoverImage = styled.img`
  width: 80px;
  border-radius: 9px;
  margin-bottom: 9px;
  margin-right: 15px;
`
const ArticleInfo = styled.div`
  width: 68%;
`

const ArticleTitleLink = styled.a`
  display: flex;
  line-height: 1.3;
  font-size: 12px;
  margin-bottom: 6px;
  font-family: Roboto;
  text-decoration: none;
`
const ArticleByline = styled.a`
  display: flex;
  line-height: 1.3;
  font-size: 10px;

  font-family: Roboto;
  text-decoration: none;
`

const TopArticlesContainer = ({ topArticles, activeSection }) => {
  const { isLoading, isError, data, error } = useQuery(
    ["topArticles", activeSection],
    getTopArticles,
    { initialData: topArticles }
  )

  if (isLoading) {
    return <LoadingSpinner />
  }
  if (isError) {
    return <span>Whoops</span>
  }

  const results = data.results
  return (
    <ArticlesContainer>
      {results.map((article, i) => {
        const thumbnail = article.multimedia[1].url

        return (
          <ArticleContainer key={`article${i}`}>
            <ArticleCoverImage src={thumbnail} />
            <ArticleInfo>
              <ArticleTitleLink href={article.url}>
                {article.title}
              </ArticleTitleLink>

              <ArticleByline href={article.url}>{article.byline}</ArticleByline>
            </ArticleInfo>
          </ArticleContainer>
        )
      })}
    </ArticlesContainer>
  )
}

TopArticlesContainer.propTypes = {
  topArticles: PropTypes.object,
  activeSection: PropTypes.string,
}

export default TopArticlesContainer
