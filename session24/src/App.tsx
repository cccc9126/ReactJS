import { Header } from 'antd/es/layout/layout'
import { useState } from 'react'
import HeaderInput from './component/Header'
import Add from './component/Add';
import List from './component/List';

interface List{
  id: number;
  name:string
}
function App() {
  const [list, SetList] = useState<List[]>([]);
  function addList(item: List) {
    const newList = [...list, item];
    SetList(newList);
  }
  function deleteList(id: number) {
    const updatedList = list.filter((item) => item.id !== id);
    SetList(updatedList);
  }

    function updateName(id: number, newName: string) {
      const updatedList = list.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      );
      SetList(updatedList);
    }
  return (
    <div className="bg-slate-600 w-full h-screen flex flex-col justify-center items-center">
      <div className="bg-yellow-600 w-[50%] h-[200px] rounded-t-[12px] pl-[20px] pr-[20px] pt-[10px] pb-[20px]r4">
        <HeaderInput></HeaderInput>
        <Add list={list} addList={addList}></Add>
      </div>
      <div className="div w-[50%] bg-gray-400 flex flex-col items-center rounded-b-[12px] pb-[20px] pt-[10px]">
        <List list={list} deleteList={deleteList} setName={updateName}></List>
      </div>
    </div>
  );
}

export default App
