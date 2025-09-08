import React, { useState } from "react";
import { Modal } from "antd";

interface List {
  id: number;
  name: string;
}

interface Props {
  list: List[];
  deleteList: (id: number) => void;
  setName: (id: number, newName: string) => void; 
}

function List({ list, deleteList, setName }: Props) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Bạn có muốn xóa không?");

  const [isRepair, setIsRepair] = useState(-1);
  const [nameRepair, setNameRepair] = useState("");


  function openRepair(id: number, currentName: string) {
    setIsRepair(id);
    setNameRepair(currentName); 
  }


  function closeRepair() {
    setIsRepair(-1);
    setNameRepair("");
  }


  function repaired(id: number) {
    if (!nameRepair.trim()) return;
    setName(id, nameRepair); 
    closeRepair();
  }

  const showModal = () => setOpen(true);
  const handleCancel = () => setOpen(false);

  return (
    <div>
      {list.map((item) => (
        <div
          key={item.id}
          className="w-[700px] relative bg-black h-[50px] border-t-amber-300 border-t-2 mt-[15px] flex flex-row"
        >
          <p className="text-white pl-[10px] pt-[10px]">{item.name}</p>

          {isRepair === item.id && (
            <div className="flex flex-row">
              <input
                type="text"
                className="bg-white w-[300px] h-[40px] mt-[5px] ml-[-30px] rounded-2xl outline-none pl-[5px] absolute left-[30px]"
                value={nameRepair}
                onChange={(e) => setNameRepair(e.target.value)}
              />
              <button
                className="bg-white w-[70px] h-[30px] rounded-2xl mt-[11px] ml-[5px] absolute left-[300px]"
                onClick={() => repaired(item.id)}
              >
                Đồng ý
              </button>
              <button
                className="bg-white w-[70px] h-[30px] rounded-2xl mt-[11px] ml-[5px] absolute left-[380px]"
                onClick={closeRepair}
              >
                Hủy
              </button>
            </div>
          )}

         
          <span
            className="pt-[12px] absolute right-[50px] cursor-pointer"
            onClick={() => openRepair(item.id, item.name)}
          >
            ✏️
          </span>

      
          <span
            className="pt-[12px] absolute right-[25px] cursor-pointer"
            onClick={showModal}
          >
            🗑️
          </span>

          <Modal
            title="Xác nhận"
            open={open}
            onOk={() => {
              setModalText("Đang xóa....");
              setConfirmLoading(true);
              setTimeout(() => {
                setOpen(false);
                setConfirmLoading(false);
                deleteList(item.id);
              }, 2000);
            }}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <p>{modalText}</p>
          </Modal>
        </div>
      ))}
    </div>
  );
}

export default List;
