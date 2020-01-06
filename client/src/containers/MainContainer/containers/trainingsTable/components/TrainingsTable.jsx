import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
} from 'reactstrap';
import {
  StyledHeader,
  StyledTablePlug,
  StyledTable,
  StyledSortButton,
} from '../styled';
import FilterDropdownMenu from './FilterDropdownMenu';

const TrainingsTable = (props) => {
  const {
    trainingsById,
    trainingsIds,
    filterByTypesConfig,
    sortBy,
    sortDerrection,
    handleOpenEditTrainingModal,
    handleSetSortBy,
    filterAttributes,
    handleSetFilterByType,
  } = props;

  const renderTableBody = (tById, tIds) => tIds.map((tId) => (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <tbody key={`${tId}`} onClick={handleOpenEditTrainingModal(tId)} onKeyDown={handleOpenEditTrainingModal(tId)}>
      <tr>
        {Object.keys(tById[tId]).map(
          (key) => (key === 'id' ? null : (<td key={`${tId}-${key}`}>{tById[tId][key]}</td>)),
        )}
      </tr>
    </tbody>
  ));

  const renderPlug = <StyledTablePlug>List is empty</StyledTablePlug>;

  const renderSortBtn = (currentSortBy) => {
    const derrectionIcon = currentSortBy === sortBy && sortDerrection === 'toLower' ? <>&#9660;</> : <>&#9650;</>;
    return (
      <StyledSortButton
        active={currentSortBy === sortBy}
        onClick={handleSetSortBy(currentSortBy)}
      >
        {derrectionIcon}
      </StyledSortButton>
    );
  };

  return (
    <StyledTable>
      <StyledHeader>Trainings log</StyledHeader>
      <Table hover size="sm">
        <thead>
          <tr>
            <th>
              Date
              {renderSortBtn('date')}
            </th>
            <th>
              Type of activity
              <FilterDropdownMenu
                filterAttributes={filterAttributes}
                filterByTypesConfig={filterByTypesConfig}
                handleSetFilterByType={handleSetFilterByType}
              />
            </th>
            <th>
              Distance, km
              {renderSortBtn('distance')}
            </th>
            <th>Comment</th>
          </tr>
        </thead>
        {trainingsIds.length === 0 ? null : renderTableBody(trainingsById, trainingsIds)}
      </Table>
      {trainingsIds.length === 0 ? renderPlug : null}
    </StyledTable>
  );
};

TrainingsTable.propTypes = {
  trainingsById: PropTypes.objectOf(PropTypes.object).isRequired,
  trainingsIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  filterByTypesConfig: PropTypes.objectOf(PropTypes.bool).isRequired,
  filterAttributes: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortBy: PropTypes.string.isRequired,
  sortDerrection: PropTypes.string.isRequired,
  handleOpenEditTrainingModal: PropTypes.func.isRequired,
  handleSetSortBy: PropTypes.func.isRequired,
  handleSetFilterByType: PropTypes.func.isRequired,
};

export default TrainingsTable;