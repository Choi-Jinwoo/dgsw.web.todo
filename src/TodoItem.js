import './TodoItem.css';

export const TodoItem = ({
  content,
  handleDelete
}) => {
  return (
    <div className='todo_item'>
      <span>{content}</span>
      <button className='delete_todo' onClick={handleDelete}>삭제</button>
    </div>
  );
}