import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    const backGroundColor1 = { backgroundColor: '#f5f5f5ab' };
    const backGroundColor2 = { backgroundColor: '#deb5b545' };
    let backGroundColor = undefined;
    let trContent = undefined;

    if (isHeader === true) {
        backGroundColor = backGroundColor2;
        if (textSecondCell === null) {
            trContent = <th colSpan='2'>{textFirstCell}</th>;
        } else {
            trContent = (
                <Fragment>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </Fragment>
            );
        }
    }
    if (isHeader === false) {
        backGroundColor = backGroundColor1;
        trContent = (
            <Fragment>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </Fragment>
        );
    }

    return <tr style={backGroundColor}>{trContent}</tr>;
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;