import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { Form, Button, FieldSelect } from '../../components';
import { required } from '../../util/validators';

import css from './EditListingDifficultyForm.css';

export const EditListingDifficultyFormComponent = props => (
  <FinalForm
    {...props}
    render={fieldRenderProps => {
      const {
        className,
        disabled,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateError,
        updateInProgress,
        difficultyOptions,
      } = fieldRenderProps;

      const difficultyPlaceholder = intl.formatMessage({
        id: 'EditListingDifficultyForm.difficultyPlaceholder',
      });

      const errorMessage = updateError ? (
          <p className={css.error}>
            <FormattedMessage id="EditListingDifficultyForm.updateFailed" />
          </p>
        ) : null;

      const difficultyRequired = required(
        intl.formatMessage({
          id: 'EditListingDifficultyForm.difficultyRequired',
        })
      );

      const classes = classNames(css.root, className);
      const submitReady = updated && pristine;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}

          <FieldSelect
            className={css.difficulty}
            name="difficulty"
            id="difficulty"
            validate={difficultyRequired}
          >
            <option value="">{difficultyPlaceholder}</option>
            {difficultyOptions.map(c => (
              <option key={c.key} value={c.key}>
                {c.label}
              </option>
            ))}
          </FieldSelect>

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>

      );
    }}
  />
);

EditListingDifficultyFormComponent.defaultProps = {
  selectedPlace: null,
  updateError: null,
};

EditListingDifficultyFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  updated: bool.isRequired,
  updateError: propTypes.error,
  updateInProgress: bool.isRequired,
  difficultyOptions: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ).isRequired,
};

export default compose(injectIntl)(EditListingDifficultyFormComponent);
