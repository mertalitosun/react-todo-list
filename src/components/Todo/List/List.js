
function List({taskList}) {
  return <div>
    <ul>
      {
        taskList.map((listItem,key)=><li key={key}>{listItem}</li>)
      }
    </ul>
  </div>;
}

export default List;
