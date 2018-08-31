import React from 'react'
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border:1px solid lightgrey;
    padding: 8px;
    border-radius: 2px;
    margin-bottom: 8px;
    background: ${props => (props.isDragging ? '#ccc' : '#FFE7F3')};

    display: flex;
`;

const Handle = styled.div`
    width: 20px;
    height: 20px;
    background-color: orange;
    border-radius: 4px;
    margin-right: 8px;
`;

export default class Task extends React.Component {
    render() {
      return (
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
          {(provided, snapshot) => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}

              innerRef={provided.innerRef}
              isDragging={snapshot.isDragging}
            >
             <Handle {...provided.dragHandleProps}/>
              {this.props.task.content}
            </Container>
          )}
        </Draggable>
      );
    }
  }
