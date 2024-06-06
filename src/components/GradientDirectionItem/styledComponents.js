// Style your elements here
import styled from 'styled-components'

export const ListButtonItem = styled.li`
  list-style: none;
`
export const CustomButton = styled.button`
  padding: 14px;
  margin-right: 15px;
  width: 100px;
  border: none;
  border-radius: 10px;
  background-color: white;
  color: black;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`
