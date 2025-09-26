import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosinstance';
import '../Signup/Signup.css';

export default function ProfilePage({ user }) {
  const [form, setForm] = useState({
    sleng: '',
    description: '',
    example: '',
    translate: '',
    categoryId: '',
  });
  const [myWords, setMyWords] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axiosInstance.get('/category').then(({ data }) => setCategories(data));
    axiosInstance.get('/words/me/mine').then(({ data }) => setMyWords(data));
  }, []);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { data } = await axiosInstance.post('/words', form);
    setMyWords((prev) => [data, ...prev]);
    setForm({ sleng: '', description: '', example: '', translate: '', categoryId: '' });
  };

  const deleteHandler = async (id) => {
    await axiosInstance.delete(`/words/${id}`);
    setMyWords((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-5 col-md-6">
          <div className="signup-container">
            <h1>Добавить слово</h1>
            <form onSubmit={submitHandler}>
              <label htmlFor="sleng">Слово</label>
              <input
                id="sleng"
                name="sleng"
                value={form.sleng}
                onChange={changeHandler}
                required
              />

              <label htmlFor="translate">Перевод</label>
              <input
                id="translate"
                name="translate"
                value={form.translate}
                onChange={changeHandler}
              />

              <label htmlFor="description">Описание</label>
              <input
                id="description"
                name="description"
                value={form.description}
                onChange={changeHandler}
                required
              />

              <label htmlFor="example">Пример</label>
              <input
                id="example"
                name="example"
                value={form.example}
                onChange={changeHandler}
              />

              <label htmlFor="categoryId">Категория</label>
              <select
                id="categoryId"
                name="categoryId"
                value={form.categoryId}
                onChange={changeHandler}
                required
              >
                <option value="" disabled>
                  Выберите категорию
                </option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.gen}
                  </option>
                ))}
              </select>

              <button type="submit">Добавить</button>
            </form>
          </div>
        </div>

        <div className="col-lg-7 col-md-6">
          <h2 style={{ margin: '1rem 0' }}>Мои слова</h2>
          {myWords.length === 0 && <div>Вы еще не добавили слов</div>}
          <div className="row g-3">
            {myWords.map((w) => (
              <div key={w.id} className="col-12">
                <div className="signup-container" style={{ margin: 0 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700 }}>
                        {w.sleng} {w.translate ? `— ${w.translate}` : ''}
                      </div>
                      <div>{w.description}</div>
                      {w.example && (
                        <div style={{ opacity: 0.8 }}>Пример: {w.example}</div>
                      )}
                    </div>
                    <button
                      onClick={() => deleteHandler(w.id)}
                      style={{ width: 'auto', background: '#f87171' }}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
