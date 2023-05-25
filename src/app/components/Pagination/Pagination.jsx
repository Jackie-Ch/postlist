import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../redux/actions/actionCreator';

import Pagination from 'react-bootstrap/Pagination';

export const PaginationComponent = () => {
  const [active, setActive] = useState(1);
  const [items] = useState([0, 20, 40, 60, 80]);

  const posts = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();

  const handlePaginationClick = (numberOfStartPost, activePageNumber) => {
    if (!posts.length) {
      dispatch(getPosts(numberOfStartPost));
    }
    setActive(activePageNumber + 1);
  };

  return (
    <div>
      <Pagination>
        {items.map((numberOfStartPost, index) => (
          <Pagination.Item
            key={numberOfStartPost}
            active={index + 1 === active}
            onClick={() => handlePaginationClick(numberOfStartPost, index)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};
