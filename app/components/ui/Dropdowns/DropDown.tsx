import React from 'react'

type ProductType = {
    value: string,
    onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void,
    css: string,
}
function DropDown({ value, onChange, css}: ProductType) {
  return (
      <div>
          <select
              value={value}
              onChange={onChange}
              className={css}
          >
              <option value="">Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
              <option value="Home">Home</option>
              <option value="Other">Other</option>
          </select>
    </div>
  )
}

export default DropDown