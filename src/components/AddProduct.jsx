export default function Add() {
  return (
    <div>
      <div>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Price" />
        <input type="text" placeholder="Image" />
        <select name="cars" id="cars">
          <option value="volvo">Samsung</option>
          <option value="saab">LG</option>
          <option value="opel">Apple </option>
          <option value="audi">Sony</option>
          <option value="audi">Dell</option>
          <option value="audi">Other</option>
        </select>
      </div>
      <div>
        <select name="cars" id="cars">
          <option value="volvo">Phone & Tablet</option>
          <option value="saab">TV</option>
          <option value="opel">Laptop </option>
          <option value="audi">Headphone</option>
          <option value="audi">Other</option>
        </select>
        <button>Add+</button>
      </div>
      <h2>Add Categoty</h2>
      <div>
        <input type="text" placeholder="Category" />
        <button>Add Category+</button>
      </div>
      <h2>Add Brand</h2>
      <div>
        <input type="text" placeholder="Brand" />
        <button>Add Brand+</button>
      </div>
    </div>
  );
}
