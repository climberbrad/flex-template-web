import React from 'react';
import { Form as FinalForm, FormSpy } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { Button } from '../../components';
import FieldCheckboxGroup from './FieldCheckboxGroup';
import { requiredFieldArrayCheckbox } from '../../util/validators';

const formName = 'Styleguide.FieldCheckboxGroup';
const formNameRequired = 'Styleguide.FieldCheckboxGroupRequired';

const label = <h3>Duration</h3>;

const commonProps = {
  label: label,
  options: [
    {
      key: '1_hr',
      label: 'One Hour',
    },
    {
      key: '2_hr',
      label: 'Two Hours',
    },
    {
      key: '3_hr',
      label: 'Three Hours',
    },
    {
      key: '4_hr',
      label: 'Four Hours',
    },
    {
      key: 'half_day',
      label: 'Half Day',
    },
    {
      key: 'full_day',
      label: 'Full Day',
    },
  ],
  twoColumns: true,
};

const optionalProps = {
  name: 'amenities-optional',
  id: 'amenities-optional',
  ...commonProps,
};

const requiredProps = {
  name: 'amenities-required',
  id: `${formNameRequired}.amenities-required`,
  ...commonProps,
  validate: requiredFieldArrayCheckbox('this is required'),
};
const tosProps = {
  name: 'terms-of-service',
  id: `${formNameRequired}.tos-accepted`,
  options: [
    {
      key: 'tos',
      label: 'Terms of Service',
    },
  ],
  validate: requiredFieldArrayCheckbox('You need to accept Terms of Service'),
};

const formComponent = country => props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={fieldRenderProps => {
      const { handleSubmit, invalid, submitting, componentProps, onChange } = fieldRenderProps;

      const submitDisabled = invalid || submitting;

      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <FormSpy onChange={onChange} />
          <FieldCheckboxGroup {...componentProps} />

          <Button style={{ marginTop: 24 }} type="submit" disabled={submitDisabled}>
            Submit
          </Button>
        </form>
      );
    }}
  />
);

export const Optional = {
  component: formComponent(formName),
  props: {
    onChange: formState => {
      if (formState.dirty) {
        console.log('form values changed to:', formState.values);
      }
    },
    onSubmit: values => {
      console.log('Submit values: ', values);
    },
    initialValues: { [optionalProps.name]: ['jacuzzi', 'towels'] },
    componentProps: optionalProps,
  },
  group: 'inputs',
};

export const Required = {
  component: formComponent(formNameRequired),
  props: {
    onChange: formState => {
      if (formState.dirty) {
        console.log('form values changed to:', formState.values);
      }
    },
    onSubmit: values => {
      console.log('Submit values: ', values);
    },
    componentProps: requiredProps,
  },
  group: 'inputs',
};

export const ToSAccepted = {
  component: formComponent(formNameRequired),
  props: {
    onChange: formState => {
      if (formState.dirty) {
        console.log('form values changed to:', formState.values);
      }
    },
    onSubmit: values => {
      console.log('Submit values: ', values);
    },
    componentProps: tosProps,
  },
  group: 'inputs',
};
