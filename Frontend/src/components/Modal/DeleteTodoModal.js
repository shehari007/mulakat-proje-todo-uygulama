import React from 'react'
import { Modal, Typography } from 'antd'
import { ExclamationCircleFilled, DeleteTwoTone } from '@ant-design/icons';
import TodoListService from '../../utils/TodoListService/TodoListService';

const { Text } = Typography;
const { confirm } = Modal;

const DeleteTodoModal = ({ rowData, submitted }) => {
  const showDeleteConfirm = async () => {
    confirm({
      title: 'You sure you want to delete this task?',
      icon: <ExclamationCircleFilled />,
      content: <><Text strong type="danger">{rowData.text}</Text></>,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'Cancel',
      centered: true,
      async onOk() {
        let result = await TodoListService.DelTodo(rowData.id);
        if (result === true) {
          submitted(true);
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (

    <DeleteTwoTone twoToneColor={'red'} style={{ fontSize: '22px' }} onClick={showDeleteConfirm} />
  )
}

export default DeleteTodoModal
