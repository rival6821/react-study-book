import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children, number }) => {
  return (
    <div>
      {name}의 컴포넌트입니다.
      <br />
      children의 값은 {children}
      <br />
      좋아하는 숫자는 {number}
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본이름'
};

MyComponent.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired
};

export default MyComponent;
