import styles from './BigscreenCard.module.less';
import React from 'react';
import classNames from 'classnames';

interface BigscreenCardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}

const BigscreenCard: React.FC<BigscreenCardProps> = (props) => {
  const { children, className, style, title = '标题' } = props;
  return (
    <div style={style} className={classNames(styles.BigscreenCard, className)}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default BigscreenCard;
