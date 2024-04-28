import React, { useEffect, useState } from 'react';
import { Flex, Space, Table, Typography, Checkbox } from 'antd';
import TodoListService from '../../utils/TodoListService/TodoListService';
import CreateTodoModal from '../Modal/CreateTodoModal';
import UpdateTodoModal from '../Modal/UpdateTodoModal';
import DeleteTodoModal from '../Modal/DeleteTodoModal';
import PDFDownloader from '../PDFDownloader/PDFDownloader';
import FilterTodoModal from '../Modal/FilterTodoModal';

const { Text } = Typography;

const TodoList = () => {

    const [listData, setListData] = useState(null);
    const [filteredList, setFilteredList] = useState(null);

    const getData = async () => {
        const data = await TodoListService.GetAllTodoList();
        setListData(data);
    }

    useEffect(() => {
        getData();
    }, []);

    const handleModalSubmit = async (submitted) => {
        if (submitted) {
            await getData();
        }
    }

    const handleFilterSubmit = async (submittedData) => {
        if (submittedData !== 'reset') {
            setFilteredList(submittedData);
        } else {
            setFilteredList(null);
            await getData();
        }
    }

    const onChange = async (e, todoID) => {
        const checked = e.target.checked;
        let res = await TodoListService.UpdateCheckTodo(todoID, checked);
        if (res === true) {
            await getData();
        }
    };

    const columns = [
        {
            title: '',
            render: (_, render) => {
                return (
                    <Space>
                        <Checkbox defaultChecked={render.checked} onChange={(e) => onChange(e, render.id)}></Checkbox>
                        <Text delete={render.checked}>{render.text}<br />{render.time}</Text>
                    </Space>
                )
            }
        },
        {
            title: '',
            render: (_, render) => {
                console.log(render)
                return (
                    <Flex justify="flex-end">

                        <Space >
                            <UpdateTodoModal submitted={handleModalSubmit} rowData={render} />
                            <DeleteTodoModal submitted={handleModalSubmit} rowData={render} />
                        </Space>
                    </Flex>
                )
            }
        },
    ];

    return (
        <Table
            scroll={{ x: 'max-width' }}
            columns={columns}
            dataSource={!filteredList ? listData : filteredList}
            title={() =>
                <Flex justify="space-between">
                    <h2>TODO APP</h2>
                    <Space size={[8, 16]} wrap>
                        <FilterTodoModal listData={listData && listData} submitted={handleFilterSubmit} />
                        <PDFDownloader TableData={listData && listData} />
                        <CreateTodoModal submitted={handleModalSubmit} />
                    </Space>
                </Flex>}
            rowKey={"id"}
        />
    )
}
export default TodoList;
