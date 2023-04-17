import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        placeholder='Search for...'
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={sort => setFilter({...filter, sort})}
        defaultValue="Sorting"
        options={[
          {value: 'title', name: 'According to title'},
          {value: 'body', name: 'According to description'},
          {value: 'id', name: 'According to id'}
        ]}
      />
    </div>
  )
}

export default PostFilter