import React from 'react';
import { useViewportScroll, useTransform } from 'framer-motion';

import { Container } from './styles';

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const headerY = useTransform(
    scrollYProgress,
    [0.158, 0.178],
    ['0%', '-100%'],
  );

  return (
    <Container
      style={{
        y: headerY,
      }}
    />
  );
};

export default Header;
