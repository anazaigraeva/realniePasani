import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axiosInstance from "../../axiosinstance";
import { Modal, Button } from "react-bootstrap";
import "./WordPage.css";
import Likes from '../../Components/Likes/Likes'

export default function WordPage() {
  const [word, setWord] = useState([]); // массив слов
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // индекс текущего слова

  useEffect(() => {
    axiosInstance.get(`/words/${id}`).then((response) => {
      setWord(response.data);
    });
  }, [id]);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handlePrev = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev < word.length - 1 ? prev + 1 : prev));

  const selectedWord = word[currentIndex];

  return (
    <>
      {/* Горизонтальный скролл */}
      <div className="word-container">
        {word.map((el, index) => (
          <section
            key={el.id}
            className="word-slide"
            onClick={() => handleOpen(index)}
          >
            {el.sleng}
          </section>
        ))}
      </div>

      {/* Модалка с навигацией */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedWord?.sleng}</Modal.Title>
        </Modal.Header>
        <Likes/>
        <Modal.Body>
          <p>
            <strong>Перевод:</strong> {selectedWord?.translate ?? "—"}
          </p>
          <p>
            <strong>Описание:</strong> {selectedWord?.description}
          </p>
          <p>
            <strong>Пример:</strong> {selectedWord?.example}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePrev} disabled={currentIndex === 0}>
            Предыдущее
          </Button>
          <Button
            variant="secondary"
            onClick={handleNext}
            disabled={currentIndex === word.length - 1}
          >
            Следующее
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
