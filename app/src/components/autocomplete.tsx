import { FC, ChangeEvent, useState, useEffect } from 'react';
import {
  Wrapper,
  Container,
  Item,
  ItemButton,
  Input,
} from "../styles";
import * as Interface from '../interfaces/interfaces';
import mockData from '../mockData'

export const Autocomplete: FC<Interface.autocompleteProps> = ({}) => {
  const [data, setData] = useState<Interface.dataInterface[] | []>([]);
  const [search, setSearch] = useState({ term: '', suggestions: [] as Interface.dataInterface[] });
  const [isVisible, setIsVisible] = useState(true);
  const onTermChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let suggestions: Interface.dataInterface[] = [];
    // Search for the match
    if (value.length > 0) {
      const regex = new RegExp(value, 'gi');
      suggestions = data.sort().filter((v: Interface.dataInterface) => regex.test(v.title));
    }

    setSearch({ suggestions, term: value })
    // Show the results dropdown
    setIsVisible(true);
  };

  useEffect(() => {
    // Load async the mocked data
    const getAsyncData = async () => {
      await getData();
    }

    getAsyncData();
  }, []);

  const getData = () => {
    setData(mockData);
  }

  const highlightedSuggestions = (value: string, suggestions: any[]): any[] => {
    // Clone the array for avoiding same memory reference
    let results: any[] = JSON.parse(JSON.stringify(suggestions));

    // Search for the match and highlight it
    results.length && results.map((suggestion: any) => {
      suggestion.title = suggestion.title.replace(new RegExp(value, 'gi'), (match: any) => `<mark>${match}</mark>`)
    })
    return results;
  }

  const suggestionSelected = (value: Interface.dataInterface) => {
    const { suggestions } = search;
    // Search for the item without mark tags
    const term = suggestions.find(item => item.id === value.id)?.title || value.title;
    // Hide the results dropdown
    setIsVisible(false);

    // Reset the search
    setSearch({
      term,
      suggestions: []
    })
  }

  const { suggestions, term } = search;

  return (
    <Wrapper>
      <Input
        autoComplete='off'
        value={search.term}
        onChange={onTermChanged}
        onFocus={onTermChanged}
        type={'text'}
      />
      {suggestions.length > 0 && isVisible && (
        <Container>
          {highlightedSuggestions(term, suggestions).map((item: Interface.dataInterface) => (
            <Item key={item.title}>
              <ItemButton
                key={item.title}
                onClick={() => suggestionSelected(item)}
                dangerouslySetInnerHTML={ {__html: item.title} }
              />
            </Item>
          ))}
        </Container>
      )}
      <div
        onClick={() => setIsVisible(false)}
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: 0,
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          display: isVisible ? "block" : "none",
        }}
      />
    </Wrapper>
  )
}

export default Autocomplete;
