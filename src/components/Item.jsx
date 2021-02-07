
const Item = ({ content }) => {
console.log(content)
  return (
    <div>
      <input type="checkbox" />
      <span>{content}</span>
    </div>
  );
};
export default Item;
