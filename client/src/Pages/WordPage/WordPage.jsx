import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../axiosinstance';
import { Modal, Button } from 'react-bootstrap';
import './WordPage.css';

export default function WordPage() {
  const [word, setWord] = useState([]); // массив слов
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // индекс текущего слова
  const [haiku, setHaiku] = useState(''); // для хранения хокку

  useEffect(() => {
    axiosInstance.get(`/words/${id}`).then((response) => {
      setWord(response.data);
    });
  }, [id]);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setHaiku(''); // сбрасываем хокку при открытии новой карточки
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handlePrev = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev < word.length - 1 ? prev + 1 : prev));

  const selectedWord = word[currentIndex];

  const submitHandler = async (sleng) => {
    try {
      const response = await axiosInstance.post('/ai/ask', { sleng });

      setHaiku(response.data.content); // выводим хокку в модалке
    } catch (error) {
      console.error('Ошибка при получении хокку:', error);
      setHaiku('Не удалось получить хокку 😢');
    }
  };
  // console.log(haiku);

  return (
    <>
      {/* Горизонтальная карусель */}
      <div className="word-container">
        {word.map((el, index) => (
          <section key={el.id} className="word-slide">
            <h4>{el.sleng}</h4>
            <Button
              variant="outline-primary"
              className="learn-btn"
              onClick={() => handleOpen(index)}
            >
              Изучить
            </Button>
          </section>
        ))}
      </div>

      {/* Модалка */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedWord?.sleng}</Modal.Title>
        </Modal.Header>
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
          <Button variant="success" onClick={() => submitHandler(selectedWord.sleng)}>
            Хочу хокку
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
