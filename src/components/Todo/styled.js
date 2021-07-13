import styled from 'styled-components';

export const StyledTodosList = styled.div`
  position: relative;
`;

export const TodoItem = styled.div`
  display: flex;
  margin-top: 12px;
  padding: 4px 8px;
  align-items: center;
  border: 1px solid #ccc;
  justify-content: space-between;
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      text-decoration: ${({ isCompleted }) => isCompleted ? 'line-through' : 'none'};
      margin-left: 4px;
    }
  }
`;
