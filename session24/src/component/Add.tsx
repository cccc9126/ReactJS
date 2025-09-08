import React from 'react'
interface List{
    id: number;
    name:string
}
interface Props { 
    list: List[]
    addList:(item:List)=>void
}
function Add({ list , addList}: Props) {
    const [name, setName] = React.useState("");
    const [notice, setNotice] = React.useState(false);
    function HandleClick() {
        if (!name.trim()) {
            setNotice(true);
            return;
        }
        const newItem: List = {
            id: list.length + 1,
            name: name
        }
        addList(newItem);
        setName("");
        setNotice(false);
        console.log(list);
        
    }
    
  return (
    <div className="flex flex-row">
      <div className="div flex flex-col mt-[10px]">
        <input
          type="text"
          className="w-[300px] bg-black text-white h-[40px] rounded-[8px] m-[20px] outline-none pl-[10px]"
          placeholder="Enter your note..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {notice && (
          <p className="ml-[20px] mb-[10px] text-red-600">
            Vui lòng điền thông tin
          </p>
        )}
      </div>

      <button
        className="text-white  bg-black p-2 rounded-3xl w-[80px] h-[40px] mt-[30px] "
        onClick={HandleClick}
      >
        Save
      </button>
    </div>
  );
}

export default Add