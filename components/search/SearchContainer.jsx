import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ArrowIcon from "../icons/ArrowIcon"
import SearchIcon from "../icons/SearchIcon"
import ThemedContainer from "../themed/ThemedContainer"
import ThemedScrollableContainer from "../themed/ThemedScrollableContainer"

import SearchResults from "./SearchResults"

const SearchContainerWrapper = styled(ThemedContainer)`
  display: flex;
  left: 80px;
  top: 37px;
  flex-direction: column;
  width: 100%;
`
const SearchInputRow = styled.div`
  display: flex;
  align-items: center;
`
const SearchInputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: ${(props) => (props.isActive ? `180px` : `0`)};
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: all 300ms ease-in;
`
const SearchIconWrapper = styled(SearchIcon)`
  margin-right: 0.3rem;
`
const SearchInput = styled.input`
  border: none;
  stroke: none;
  border-bottom: 2px solid rgb(90, 90, 90);
  width: 120px;
  &:focus {
    outline: none;
  }
`

const ToggleSearchResultsButton = styled(ArrowIcon)`
  display: inline-flex;
  margin-left: 1rem;
  cursor: pointer;
  transform: ${(props) =>
    props.isClosing === true ? "rotate(0deg)" : "rotate(180deg)"};
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: opacity 300ms ease-in;
`

const SearchResultsWrapper = styled(ThemedScrollableContainer)`
  height: ${(props) => (props.isActive ? "12rem" : 0)};
  margin-top: 1rem;
  padding: ${(props) => (props.isActive ? " 0.4rem 1.5rem" : " 0 1.5rem")};
  z-index: 2;
  width: 100%;
  box-shadow: 2px 5px 9px #d0d0d0;
  top: 80px;
  left: 0;
  overflow-y: scroll;
  transition: all 300ms ease-in;
`

const SearchContainer = () => {
  const [isFetchResultsPending, setIsFetchResultsPending] = useState(false)
  const [isSearchResultsActive, setIsSearchResultsActive] = useState(false)
  const [isSearchInputActive, setIsSearchInputActive] = useState(false)

  const initialBlankQueryValue = ""

  const [activeQueryValue, setActiveQueryValue] = useState(
    initialBlankQueryValue
  )

  const toggleSearchResults = () => {
    setIsSearchResultsActive(!isSearchResultsActive)
  }

  const toggleSearchInput = () => {
    if (isSearchInputActive && isSearchResultsActive) {
      setIsSearchResultsActive(false)
    }
    setIsSearchInputActive(!isSearchInputActive)
  }

  const handleSearchQueryChange = (e) => {
    const query = e.target.value
    if (activeQueryValue === initialBlankQueryValue) {
      setIsSearchResultsActive(false)
    }
    setActiveQueryValue(query)
  }

  useEffect(() => {
    // if input query has any values setFetchPending
    if (activeQueryValue.length > 0) {
      const userTypingTimeout = setTimeout(() => {
        setIsFetchResultsPending(true)
        setIsSearchResultsActive(true)
      }, 1000)
      return () => {
        clearTimeout(userTypingTimeout)
      }
    }

    // reset pending fetch result  when input is cleared
    if (isFetchResultsPending === true && activeQueryValue.length === 0) {
      setIsFetchResultsPending(false)
    }
  }, [activeQueryValue])

  return (
    <SearchContainerWrapper>
      <SearchInputRow>
        <SearchIconWrapper onClick={() => toggleSearchInput()} />

        <SearchInputContainer isActive={isSearchInputActive}>
          <SearchInput onChange={handleSearchQueryChange} />
          <ToggleSearchResultsButton
            isActive={isFetchResultsPending}
            isClosing={isSearchResultsActive === true}
            onClick={() => toggleSearchResults()}
          />
        </SearchInputContainer>
      </SearchInputRow>
      {isFetchResultsPending ? (
        <SearchResultsWrapper isActive={isSearchResultsActive}>
          <SearchResults activeQueryValue={activeQueryValue} />
        </SearchResultsWrapper>
      ) : (
        <></>
      )}
    </SearchContainerWrapper>
  )
}

SearchContainer.propTypes = {}

export default SearchContainer
