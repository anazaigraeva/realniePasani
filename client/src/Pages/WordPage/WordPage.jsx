import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../axiosinstance';
import { Modal, Button } from 'react-bootstrap';
import './WordPage.css';

export default function WordPage() {
  const [word, setWord] = useState([]);
  const [likeMap, setLikeMap] = useState({});
  const [likedSet, setLikedSet] = useState(new Set());
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axiosInstance.get(`/words/${id}`).then((response) => {
      setWord(response.data);
    });
  }, [id]);

  useEffect(() => {
    axiosInstance
      .get('/likes/me')
      .then(({ data }) => {
        const set = new Set(data.map((l) => l.wordId));
        setLikedSet(set);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (word.length === 0) return;
    const ids = word.map((w) => w.id).join(',');
    axiosInstance.get(`/likes/counts?wordIds=${ids}`).then(({ data }) => {
      setLikeMap(data);
    });
  }, [word]);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);
  const handlePrev = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev < word.length - 1 ? prev + 1 : prev));

  const selectedWord = word[currentIndex];

  const toggleLike = async (wordId) => {
    try {
      const { data } = await axiosInstance.post('/likes/toggle', { wordId });
      setLikedSet((prev) => {
        const s = new Set(prev);
        if (data.liked) s.add(wordId);
        else s.delete(wordId);
        return s;
      });
      setLikeMap((prev) => {
        const next = { ...prev };
        next[wordId] = (next[wordId] || 0) + (data.liked ? 1 : -1);
        if (next[wordId] < 0) next[wordId] = 0;
        return next;
      });
    } catch {}
  };

  return (
    <>
      <div className="word-container">
        {word.map((el, index) => (
          <section key={el.id} className="word-slide" onClick={() => handleOpen(index)}>
            {el.sleng}
            <div className="like-row">
              <button
                type="button"
                className={`like-btn ${likedSet.has(el.id) ? 'liked' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(el.id);
                }}
              >
                {likedSet.has(el.id) ? '❤️' : '🤍'}
              </button>
              <span className="like-count">{likeMap[el.id] || 0}</span>
            </div>
          </section>
        ))}
      </div>

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
