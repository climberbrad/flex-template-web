import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { ensureOwnListing } from '../../util/data';
import { ListingLink } from '../../components';
import { EditListingDifficultyForm} from '../../forms';
import config from '../../config.js';

import css from './EditListingDifficultyPanel.css';

const EditListingDifficultyPanel = props => {
  const {
    className,
    rootClassName,
    listing,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { publicData } = currentListing.attributes;

  const panelTitle = currentListing.id ? (
      <FormattedMessage
        id="EditListingDifficultyPanel.title"
        values={{ listingTitle: <ListingLink listing={listing} /> }}
      />
    ) : (
      <FormattedMessage id="EditListingDifficultyPanel.createListingTitle" />
    );

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingDifficultyForm
        className={css.form}
        initialValues={{ difficulty: publicData.difficulty }}
        onSubmit={values => {
          const { difficulty } = values;
          const updateValues = {
            publicData: {
              difficulty,
            },
          };
          onSubmit(updateValues);
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        updated={panelUpdated}
        updateError={errors.updateListingError}
        updateInProgress={updateInProgress}
        difficultyOptions={config.custom.difficulty}
      />
    </div>
  );
};

const { func, object, string, bool } = PropTypes;

EditListingDifficultyPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingDifficultyPanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingDifficultyPanel;
