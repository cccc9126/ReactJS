import React, { useEffect, useState } from "react";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  image: string;
  date: string;
  status: "published" | "draft";
};

export default function PostManager() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    content: "",
  });

  
  const fetchPosts = () => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data);
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleOpenAdd = () => {
    setEditingPost(null);
    setFormData({ title: "", image: "", content: "" });
    setShowModal(true);
  };

  const handleOpenEdit = (post: Post) => {
    setEditingPost(post);
    setFormData({ title: post.title, image: post.image, content: "" });
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      axios.delete(`http://localhost:3000/posts/${id}`).then(() => {
        fetchPosts();
      });
    }
  };

  
  const handleToggleStatus = (post: Post) => {
    const newStatus = post.status === "published" ? "draft" : "published";
    axios
      .put(`http://localhost:3000/posts/${post.id}`, {
        ...post,
        status: newStatus,
      })
      .then(() => {
        fetchPosts();
      });
  };

  const handleSubmit = () => {
    if (editingPost) {
      axios
        .put(`http://localhost:3000/posts/${editingPost.id}`, {
          ...editingPost,
          title: formData.title,
          image: formData.image,
        })
        .then(() => {
          fetchPosts();
          setShowModal(false);
          setFormData({ title: "", image: "", content: "" });
          setEditingPost(null);
        });
    } else {
      const today = new Date().toLocaleDateString("vi-VN");
      axios
        .post("http://localhost:3000/posts", {
          title: formData.title,
          image: formData.image,
          date: today,
          status: "published",
        })
        .then(() => {
          fetchPosts();
          setShowModal(false);
          setFormData({ title: "", image: "", content: "" });
        });
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Nhập từ khóa tìm kiếm"
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            flex: 1,
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleOpenAdd}
          style={{
            padding: "8px 12px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Thêm mới bài viết
        </button>
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr style={{ background: "#f4f4f4" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>STT</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Tiêu đề
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Hình ảnh
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Ngày viết
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Trạng thái
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Chức năng
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, i) => (
            <tr key={post.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {i + 1}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {post.title}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <img
                  src={post.image}
                  alt=""
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {post.date}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: "4px",
                    color: "#fff",
                    background:
                      post.status === "published" ? "green" : "orange",
                  }}
                >
                  {post.status === "published" ? "Đã xuất bản" : "Nháp"}
                </span>
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button
                  onClick={() => handleOpenEdit(post)}
                  style={{
                    marginRight: "5px",
                    padding: "4px 8px",
                    border: "none",
                    borderRadius: "4px",
                    background: "#ffc107",
                    cursor: "pointer",
                  }}
                >
                  Sửa
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  style={{
                    marginRight: "5px",
                    padding: "4px 8px",
                    border: "none",
                    borderRadius: "4px",
                    background: "#dc3545",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Xóa
                </button>
                <button
                  onClick={() => handleToggleStatus(post)}
                  style={{
                    padding: "4px 8px",
                    border: "none",
                    borderRadius: "4px",
                    background:
                      post.status === "published" ? "#6c757d" : "#28a745",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  {post.status === "published" ? "Chặn" : "Mở khóa"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <h2>{editingPost ? "Sửa bài viết" : "Thêm mới bài viết"}</h2>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <input
                type="text"
                placeholder="Tên bài viết"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                style={{
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <input
                type="text"
                placeholder="Link hình ảnh"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                style={{
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <textarea
                placeholder="Nội dung"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                style={{
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  minHeight: "80px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
                gap: "10px",
              }}
            >
              <button
                onClick={() =>
                  setFormData({ title: "", image: "", content: "" })
                }
                style={{
                  padding: "6px 12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Làm mới
              </button>
              <button
                onClick={handleSubmit}
                style={{
                  padding: "6px 12px",
                  border: "none",
                  borderRadius: "4px",
                  background: "#007bff",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                {editingPost ? "Cập nhật" : "Xuất bản"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
