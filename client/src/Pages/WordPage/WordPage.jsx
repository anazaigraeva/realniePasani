import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../axiosinstance';
import { Modal, Button } from 'react-bootstrap';
import './WordPage.css';
import Likes from '../../Components/Likes/Likes';

export default function WordPage({ user }) {
  const [word, setWord] = useState([]);
  const { id } = useParams();
  // const [user, setUser] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [haiku, setHaiku] = useState('');
  const [currentWordId, setCurrentWordId] = useState(null); // новое состояние для id

  useEffect(() => {
    axiosInstance.get(`/words/${id}`).then((response) => {
      setWord(response.data);
    });
  }, [id]);

  // console.log(user, 'userId');

  const handleOpen = (index, wordId) => {
    // принимаем и index и wordId
    setCurrentIndex(index);
    setCurrentWordId(wordId); // сохраняем id слова
    setHaiku('');
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentWordId(null); // сбрасываем id при закрытии
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setCurrentWordId(word[newIndex]?.id); // обновляем id при переключении
    }
  };

  const handleNext = () => {
    if (currentIndex < word.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setCurrentWordId(word[newIndex]?.id); // обновляем id при переключении
    }
  };

  const selectedWord = word[currentIndex];

  const submitHandler = async (sleng) => {
    try {
      const response = await axiosInstance.post('/ai/ask', { sleng });
      setHaiku(response.data.content);
    } catch (error) {
      console.error('Ошибка при получении хокку:', error);
      setHaiku('Не удалось получить хокку 😢');
    }
  };

  return (
    <>
      <div className="word-container">
        {word.map((el, index) => (
          <section key={el.id} className="word-slide">
            <h4>{el.sleng}</h4>
            <Button
              variant="outline-primary"
              className="learn-btn"
              onClick={() => handleOpen(index, el.id)} // передаем id
            >
              Изучить
            </Button>
          </section>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedWord?.sleng}</Modal.Title>
        </Modal.Header>
        <Likes wordId={currentWordId} userId={user?.id}/> {/* передаем id */}
        <Modal.Body>
          <p>
            <strong>Перевод:</strong> {selectedWord?.translate ?? '—'}
          </p>
          <p>
            <strong>Описание:</strong> {selectedWord?.description}
          </p>
          <p>
            <strong>Пример:</strong> {selectedWord?.example}
          </p>

          {haiku && (
            <div className="haiku-box">
              <h5>Ваше хокку:</h5>
              <p>{haiku}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePrev} disabled={currentIndex === 0}>
            ◀ Предыдущее
          </Button>
          <Button
            variant="secondary"
            onClick={handleNext}
            disabled={currentIndex === word.length - 1}
          >
            Следующее ▶
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="success" onClick={() => submitHandler(selectedWord?.sleng)}>
            Хочу хокку
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
