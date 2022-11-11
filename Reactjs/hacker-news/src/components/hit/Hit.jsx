import React from 'react';
import styles from './Hit.module.css';
import PropTypes from 'prop-types';

const Hit = ({ hit }) => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>{hit.title}</div>
            <div className={styles.info}>
                {hit.points} by {hit.author} | {hit.num_comments} Comments
            </div>
            <div>
                <a href={hit.url} className={styles.readmore}>Read More</a>
                <button className={styles.remove}>Remove</button>
            </div>
        </div>
    );
};

export const HitType = PropTypes.shape({
    objectId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    point: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    num_comment: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
});

Hit.PropTypes = {
    hit: HitType,
};

export default Hit;